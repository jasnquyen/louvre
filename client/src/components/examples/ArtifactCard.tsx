import ArtifactCard from '../ArtifactCard';
import { mockArtifacts } from '@/lib/mockData';

export default function ArtifactCardExample() {
  return (
    <div className="p-8 bg-background max-w-sm">
      <ArtifactCard 
        artifact={mockArtifacts[0]}
        onAddToHeist={(artifact) => console.log('Add to heist:', artifact.name)}
        onViewDetails={(artifact) => console.log('View details:', artifact.name)}
      />
    </div>
  );
}
