import { type Artifact } from "@shared/schema";
import ArtifactCard from "./ArtifactCard";

interface ArtifactGridProps {
  artifacts: Artifact[];
  onAddToHeist: (artifact: Artifact) => void;
  onViewDetails: (artifact: Artifact) => void;
}

export default function ArtifactGrid({ 
  artifacts, 
  onAddToHeist,
  onViewDetails 
}: ArtifactGridProps) {
  if (artifacts.length === 0) {
    return (
      <div className="text-center py-16" data-testid="text-no-artifacts">
        <p className="text-muted-foreground font-mono text-lg">
          NO ARTIFACTS FOUND IN THIS EXHIBIT
        </p>
      </div>
    );
  }

  return (
    <div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      data-testid="grid-artifacts"
    >
      {artifacts.map((artifact) => (
        <ArtifactCard
          key={artifact.id}
          artifact={artifact}
          onAddToHeist={onAddToHeist}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
}
