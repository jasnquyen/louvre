import ArtifactCard from '../ArtifactCard';
import { useArtifacts } from '@/lib/useArtifacts';

export default function ArtifactCardExample() {
  const { data: artifacts, isLoading } = useArtifacts();

  if (isLoading) return <div className="p-8">Loading...</div>;

  const artifact = artifacts[0];

  return (
    <div className="p-8 bg-background max-w-sm">
      <ArtifactCard 
        artifact={artifact}
        onAddToHeist={(artifact) => console.log('Add to heist:', artifact.name)}
        onViewDetails={(artifact) => console.log('View details:', artifact.name)}
      />
    </div>
  );
}
