import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, FileText } from "lucide-react";

interface HeaderProps {
  heistCount: number;
  onViewHeist: () => void;
}

export default function Header({ heistCount, onViewHeist }: HeaderProps) {
  return (
    <header className="border-b bg-card sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <FileText className="w-8 h-8 text-primary" />
            <div>
              <h1 className="text-xl md:text-2xl font-serif font-bold tracking-tight" data-testid="text-site-title">
                ARTIFACT HEIST CO.
              </h1>
              <p className="text-xs text-muted-foreground font-mono hidden sm:block">
                CLASSIFIED OPERATIONS
              </p>
            </div>
          </div>

          <Button
            variant="outline"
            onClick={onViewHeist}
            className="gap-2 relative"
            data-testid="button-view-heist-plan"
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="hidden sm:inline">HEIST PLAN</span>
            {heistCount > 0 && (
              <Badge 
                variant="destructive" 
                className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs font-mono no-default-hover-elevate no-default-active-elevate"
                data-testid="badge-heist-count"
              >
                {heistCount}
              </Badge>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}
