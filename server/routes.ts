import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import fs from "fs";

function parseCsv(raw: string) {
  const lines = raw.split(/\r?\n/).filter(Boolean);
  if (lines.length === 0) return [];
  const header = lines[0].split(",").map((h) => h.trim().replace(/(^"|"$)/g, ""));
  const rows = lines.slice(1).map((line) => {
    // naive CSV split (works for simple, well-formed CSV without commas inside fields)
    const cols = line.split(",").map((c) => c.trim().replace(/(^"|"$)/g, ""));
    const obj: Record<string, string> = {};
    for (let i = 0; i < header.length; i++) {
      obj[header[i]] = cols[i] ?? "";
    }
    return obj;
  });
  return rows;
}

function computeRiskFromEngagement(value: number, min: number, max: number) {
  if (isNaN(value)) return 50;
  if (max === min) return 50;
  const normalized = (value - min) / (max - min);
  // scale to 25 - 95
  const risk = Math.round(normalized * 70) + 25;
  return Math.max(5, Math.min(98, risk));
}

export async function registerRoutes(app: Express): Promise<Server> {
  // GET /api/artifacts
  // optional query params:
  //  - exhibit (Egypt|France|Italy|All)
  //  - q (search term)
  //  - source=csv to force using the CSV dataset (if available)
  app.get("/api/artifacts", async (req, res) => {
    try {
      const tryCsvPaths = [
        path.resolve(process.cwd(), "archive", "smart_gallery_dataset.csv"),
        path.resolve(import.meta.dirname, "..", "archive", "smart_gallery_dataset.csv"),
        path.resolve(import.meta.dirname, "..", "..", "archive", "smart_gallery_dataset.csv"),
      ];

      const csvPath = tryCsvPaths.find((p) => fs.existsSync(p));
      const preferCsv = (req.query.source as string) === "csv";

      let artifacts: any[] = [];

      if (csvPath && preferCsv) {
        const raw = await fs.promises.readFile(csvPath, "utf-8");
        const rows = parseCsv(raw);

        // find column that looks like engagement
        const engagementKeys = [
          "visitor_engagement",
          "visitorEngagement",
          "engagement",
          "visitors",
          "visitors_engaged",
        ];

        const headerKeys = Object.keys(rows[0] ?? {});
        const engagementKey = headerKeys.find((k) => engagementKeys.includes(k)) || headerKeys.find((k) => /engage/i.test(k));

        const engagements = rows.map((r) => {
          const rawVal = engagementKey ? r[engagementKey] : Object.values(r)[0];
          const num = Number(String(rawVal).replace(/[^0-9.-]/g, ""));
          return isNaN(num) ? 0 : num;
        });

        const min = Math.min(...engagements);
        const max = Math.max(...engagements);

        const exhibits: Array<"Egypt" | "France" | "Italy"> = ["Egypt", "France", "Italy"];

        artifacts = rows.map((r, idx) => {
          const engagement = engagements[idx] ?? 0;
          const exhibit = exhibits[idx % exhibits.length];
          const riskPercentage = computeRiskFromEngagement(engagement, min, max);

          // derive name/description/value from available fields or fallbacks
          const name = r.name || r.title || `Artifact ${idx + 1}`;
          const description = r.description || r.desc || `Derived from dataset row ${idx + 1}`;
          // value heuristic based on engagement
          let value = "$250K";
          if (engagement > 9000) value = "Priceless";
          else if (engagement > 7000) value = "$4.0M";
          else if (engagement > 5000) value = "$2.0M";
          else if (engagement > 3000) value = "$1.0M";

          return {
            id: String(r.id ?? idx + 1),
            name,
            description,
            exhibit,
            imageFilename: null,
            visitorEngagement: engagement,
            riskPercentage,
            value,
          };
        });
      } else {
        // fallback to attached_assets/artifacts.json
        const dataPath = path.resolve(import.meta.dirname, "..", "attached_assets", "artifacts.json");
        const raw = await fs.promises.readFile(dataPath, "utf-8");
        artifacts = JSON.parse(raw);
      }

      const exhibit = (req.query.exhibit as string) || undefined;
      const q = (req.query.q as string) || undefined;

      if (exhibit && exhibit !== "All") {
        artifacts = artifacts.filter((a: any) => a.exhibit === exhibit);
      }

      if (q) {
        const term = q.toLowerCase();
        artifacts = artifacts.filter((a: any) =>
          String(a.name).toLowerCase().includes(term) || String(a.description).toLowerCase().includes(term),
        );
      }

      res.json(artifacts);
    } catch (err) {
      res.status(500).json({ message: "Could not load artifacts" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
