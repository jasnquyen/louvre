import { useState } from 'react';
import ArtifactModal from '../ArtifactModal';
import { mockArtifacts } from '@/lib/mockData';
import { Button } from '@/components/ui/button';

export default function ArtifactModalExample() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-8 bg-background">
      <Button onClick={() => setOpen(true)}>
        Open Artifact Details
      </Button>
      <ArtifactModal
        artifact={mockArtifacts[0]}
        open={open}
        onOpenChange={setOpen}
        onAddToHeist={(artifact) => console.log('Add to heist:', artifact.name)}
      />
    </div>
  );
}
