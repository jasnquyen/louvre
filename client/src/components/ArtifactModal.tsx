import { type Artifact } from "@shared/schema";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import RiskMeter from "./RiskMeter";
import { Eye, ShoppingCart, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ArtifactModalProps {
  artifact: Artifact | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAddToHeist: (artifact: Artifact) => void;
}

const exhibitColors = {
  Egypt: "bg-chart-4 text-chart-4",
  France: "bg-primary text-primary-foreground",
  Italy: "bg-chart-1 text-chart-1",
};

export default function ArtifactModal({ 
  artifact, 
  open, 
  onOpenChange,
  onAddToHeist 
}: ArtifactModalProps) {
  if (!artifact) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto" data-testid="modal-artifact-details">
        <DialogHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <DialogTitle className="text-2xl font-serif mb-2" data-testid="text-modal-artifact-name">
                {artifact.name}
              </DialogTitle>
              <DialogDescription className="flex items-center gap-2">
                <Badge 
                  className={cn("font-mono text-xs", exhibitColors[artifact.exhibit as keyof typeof exhibitColors])}
                  data-testid="badge-modal-exhibit"
                >
                  {artifact.exhibit.toUpperCase()} EXHIBIT
                </Badge>
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          <div className="space-y-4">
            <div className="aspect-square bg-muted rounded-md overflow-hidden">
              <img
                src={artifact.imageUrl}
                alt={artifact.name}
                className="w-full h-full object-contain p-6"
              />
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold font-mono text-sm">TARGET SPECIFICATIONS</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Estimated Value:</span>
                  <span className="font-mono font-semibold" data-testid="text-modal-value">{artifact.value}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Origin:</span>
                  <span className="font-mono font-semibold">{artifact.exhibit}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Catalog ID:</span>
                  <span className="font-mono text-xs text-muted-foreground">#{artifact.id.toUpperCase()}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold font-mono text-sm mb-3">MISSION BRIEF</h3>
              <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-modal-description">
                {artifact.description}
              </p>
            </div>

            <div>
              <h3 className="font-semibold font-mono text-sm mb-3">RISK ANALYSIS</h3>
              <div className="space-y-4">
                <RiskMeter percentage={artifact.riskPercentage} size="lg" />
                
                <div className="bg-muted p-4 rounded-md space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Eye className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Visitor Engagement:</span>
                    <span className="font-mono font-semibold ml-auto" data-testid="text-modal-engagement">
                      {artifact.visitorEngagement.toLocaleString()}
                    </span>
                  </div>
                  
                  <p className="text-xs text-muted-foreground pt-2 border-t">
                    Risk assessment is calculated based on daily visitor traffic, security protocols, 
                    and exhibit popularity. Higher engagement indicates increased surveillance and difficulty.
                  </p>
                </div>
              </div>
            </div>

            <Button
              className="w-full"
              size="lg"
              onClick={() => {
                onAddToHeist(artifact);
                onOpenChange(false);
              }}
              data-testid="button-modal-add-to-heist"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              ADD TO HEIST PLAN
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
