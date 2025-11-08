import { useEffect, useState } from "react";
import { mockArtifacts } from "@/lib/mockData";
import { getImageUrl } from "@/lib/imageMap";
import type { Artifact } from "@shared/schema";

export function useArtifacts() {
  const [data, setData] = useState<Artifact[] | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let mounted = true;
    setIsLoading(true);
    fetch("/api/artifacts?source=csv")
      .then((r) => {
        if (!r.ok) throw new Error("Failed to fetch artifacts");
        return r.json();
      })
      .then((json) => {
        if (!mounted) return;
        setData(json);
      })
      .catch((err) => {
        if (!mounted) return;
        setError(err instanceof Error ? err : new Error(String(err)));
      })
      .finally(() => {
        if (!mounted) return;
        setIsLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  const artifacts: Artifact[] = (data ?? mockArtifacts).map((a: any) => ({
    ...a,
    imageUrl: a.imageFilename ? getImageUrl(a.imageFilename) : a.imageUrl,
  }));

  return { data: artifacts, isLoading, error } as const;
}

export default useArtifacts;
