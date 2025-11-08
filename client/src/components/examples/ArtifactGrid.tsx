import ArtifactGrid from '../ArtifactGrid';
import { mockArtifacts } from '@/lib/mockData';

export default function ArtifactGridExample() {
  return (
    <div className="p-8 bg-background">
      <ArtifactGrid
        artifacts={mockArtifacts.slice(0, 3)}
        onAddToHeist={(artifact) => console.log('Add to heist:', artifact.name)}
        onViewDetails={(artifact) => console.log('View details:', artifact.name)}
      />
    </div>
  );
}
