import { useState } from 'react';
import HeistPlanSheet from '../HeistPlanSheet';
import { useArtifacts } from '@/lib/useArtifacts';
import { Button } from '@/components/ui/button';

export default function HeistPlanSheetExample() {
  const [open, setOpen] = useState(false);
  const { data: fetched, isLoading } = useArtifacts();
  const initial = isLoading ? [] : (fetched ?? []).slice(0, 3);
  const [artifacts, setArtifacts] = useState(initial);

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
