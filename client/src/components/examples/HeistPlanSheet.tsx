import { useState } from 'react';
import HeistPlanSheet from '../HeistPlanSheet';
import { mockArtifacts } from '@/lib/mockData';
import { Button } from '@/components/ui/button';

export default function HeistPlanSheetExample() {
  const [open, setOpen] = useState(false);
  const [artifacts, setArtifacts] = useState(mockArtifacts.slice(0, 3));

  return (
    <div className="p-8 bg-background">
      <Button onClick={() => setOpen(true)}>
        Open Heist Plan ({artifacts.length} items)
      </Button>
      <HeistPlanSheet
        artifacts={artifacts}
        open={open}
        onOpenChange={setOpen}
        onRemoveArtifact={(id) => {
          setArtifacts(artifacts.filter(a => a.id !== id));
          console.log('Remove artifact:', id);
        }}
        onExecuteHeist={() => {
          console.log('Execute heist with', artifacts.length, 'artifacts');
          setOpen(false);
        }}
      />
    </div>
  );
}
