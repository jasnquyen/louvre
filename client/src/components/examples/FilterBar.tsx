import { useState } from 'react';
import FilterBar from '../FilterBar';
import { type Exhibit } from '@shared/schema';

export default function FilterBarExample() {
  const [activeExhibit, setActiveExhibit] = useState<Exhibit>('All');

  return (
    <div className="p-8 bg-background">
      <FilterBar
        activeExhibit={activeExhibit}
        onFilterChange={(exhibit) => {
          setActiveExhibit(exhibit);
          console.log('Filter changed to:', exhibit);
        }}
        counts={{
          All: 9,
          Egypt: 3,
          France: 3,
          Italy: 3,
        }}
      />
    </div>
  );
}
