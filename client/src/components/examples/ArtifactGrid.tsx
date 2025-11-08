import ArtifactGrid from '../ArtifactGrid';
import { useArtifacts } from '@/lib/useArtifacts';

export default function ArtifactGridExample() {
  const { data: artifacts, isLoading } = useArtifacts();

  if (isLoading) return <div className="p-8">Loading...</div>;

  const items = artifacts.slice(0, 3);

  return (
    <div className="p-8 bg-background">
      <ArtifactGrid
        artifacts={items}
        onAddToHeist={(artifact) => console.log('Add to heist:', artifact.name)}
        onViewDetails={(artifact) => console.log('View details:', artifact.name)}
      />
    </div>
  );
}
