import { type Exhibit } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface FilterBarProps {
  activeExhibit: Exhibit;
  onFilterChange: (exhibit: Exhibit) => void;
  counts?: {
    All: number;
    Egypt: number;
    France: number;
    Italy: number;
  };
}

const exhibits: Exhibit[] = ["All", "Egypt", "France", "Italy"];

const exhibitIcons = {
  All: "🗂️",
  Egypt: "🏛️",
  France: "👑",
  Italy: "🏺",
};

export default function FilterBar({ 
  activeExhibit, 
  onFilterChange,
  counts 
}: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {exhibits.map((exhibit) => {
        const isActive = activeExhibit === exhibit;
        const count = counts?.[exhibit] || 0;
        
        return (
          <Button
            key={exhibit}
            variant={isActive ? "default" : "outline"}
            onClick={() => onFilterChange(exhibit)}
            className={cn(
              "gap-2 toggle-elevate",
              isActive && "toggle-elevated"
            )}
            data-testid={`button-filter-${exhibit.toLowerCase()}`}
          >
            <span className="text-base">{exhibitIcons[exhibit]}</span>
            <span className="font-semibold">{exhibit.toUpperCase()}</span>
            {count > 0 && (
              <Badge 
                variant="secondary" 
                className="ml-1 font-mono text-xs no-default-hover-elevate no-default-active-elevate"
              >
                {count}
              </Badge>
            )}
          </Button>
        );
      })}
    </div>
  );
}
