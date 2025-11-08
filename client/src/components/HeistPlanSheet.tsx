import { type Artifact } from "@shared/schema";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Trash2, AlertTriangle, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeistPlanSheetProps {
  artifacts: Artifact[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onRemoveArtifact: (artifactId: string) => void;
  onExecuteHeist: () => void;
}

export default function HeistPlanSheet({
  artifacts,
  open,
  onOpenChange,
  onRemoveArtifact,
  onExecuteHeist,
}: HeistPlanSheetProps) {
  const totalRisk = artifacts.length > 0
    ? Math.round(artifacts.reduce((sum, a) => sum + a.riskPercentage, 0) / artifacts.length)
    : 0;

  const getRiskLevel = (risk: number) => {
    if (risk >= 80) return { label: "CRITICAL", color: "text-destructive", icon: AlertTriangle };
    if (risk >= 60) return { label: "HIGH", color: "text-chart-4", icon: AlertTriangle };
    return { label: "MODERATE", color: "text-chart-3", icon: CheckCircle2 };
  };

  const riskLevel = getRiskLevel(totalRisk);
  const RiskIcon = riskLevel.icon;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-md" data-testid="sheet-heist-plan">
        <SheetHeader>
          <SheetTitle className="font-serif text-2xl" data-testid="text-sheet-title">
            HEIST PLAN
          </SheetTitle>
          <SheetDescription className="font-mono">
            {artifacts.length} {artifacts.length === 1 ? 'target' : 'targets'} selected
          </SheetDescription>
        </SheetHeader>

        {artifacts.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
              <AlertTriangle className="w-8 h-8 text-muted-foreground" />
            </div>
            <div>
              <p className="font-mono text-lg font-semibold mb-2" data-testid="text-empty-heist">
                NO TARGETS SELECTED
              </p>
              <p className="text-sm text-muted-foreground">
                Add artifacts to begin planning your operation
              </p>
            </div>
          </div>
        ) : (
          <>
            <div className="my-6 p-4 bg-card rounded-md border space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold font-mono">COMBINED RISK LEVEL</span>
                <Badge variant="outline" className={cn("font-mono", riskLevel.color)}>
                  <RiskIcon className="w-3 h-3 mr-1" />
                  {riskLevel.label}
                </Badge>
              </div>
              <div className="text-center">
                <div className={cn("text-4xl font-mono font-bold", riskLevel.color)} data-testid="text-total-risk">
                  {totalRisk}%
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Average difficulty across all targets
                </p>
              </div>
            </div>

            <ScrollArea className="h-[calc(100vh-400px)]">
              <div className="space-y-3">
                {artifacts.map((artifact) => (
                  <div
                    key={artifact.id}
                    className="flex gap-3 p-3 bg-card rounded-md border hover-elevate"
                    data-testid={`item-heist-${artifact.id}`}
                  >
                    <div className="w-16 h-16 bg-muted rounded flex-shrink-0">
                      <img
                        src={artifact.imageUrl}
                        alt={artifact.name}
                        className="w-full h-full object-contain p-2"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm line-clamp-1 mb-1">
                        {artifact.name}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="font-mono">{artifact.riskPercentage}% risk</span>
                        <span>•</span>
                        <span>{artifact.exhibit}</span>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => onRemoveArtifact(artifact.id)}
                      data-testid={`button-remove-${artifact.id}`}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="mt-6 space-y-3">
              <Button
                className="w-full"
                size="lg"
                onClick={onExecuteHeist}
                data-testid="button-execute-heist"
              >
                EXECUTE HEIST
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                Proceeding will finalize your target selection
              </p>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
