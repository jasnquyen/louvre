import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const artifacts = pgTable("artifacts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  description: text("description").notNull(),
  exhibit: text("exhibit").notNull(),
  imageUrl: text("image_url").notNull(),
  visitorEngagement: integer("visitor_engagement").notNull(),
  riskPercentage: integer("risk_percentage").notNull(),
  value: text("value").notNull(),
});

export const insertArtifactSchema = createInsertSchema(artifacts).omit({
  id: true,
});

export type InsertArtifact = z.infer<typeof insertArtifactSchema>;
export type Artifact = typeof artifacts.$inferSelect;

export type Exhibit = "Egypt" | "France" | "Italy" | "All";
