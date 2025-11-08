import { useState } from 'react';
import ArtifactModal from '../ArtifactModal';
import { useArtifacts } from '@/lib/useArtifacts';
import { Button } from '@/components/ui/button';

export default function ArtifactModalExample() {
  const [open, setOpen] = useState(false);
  const { data: artifacts, isLoading } = useArtifacts();

  if (isLoading) return <div className="p-8">Loading...</div>;

  const artifact = artifacts[0];

  return (
    <div className="p-8 bg-background">
      <Button onClick={() => setOpen(true)}>
        Open Artifact Details
      </Button>
      <ArtifactModal
        artifact={artifact}
        open={open}
        onOpenChange={setOpen}
        onAddToHeist={(artifact) => console.log('Add to heist:', artifact.name)}
      />
    </div>
  );
}
