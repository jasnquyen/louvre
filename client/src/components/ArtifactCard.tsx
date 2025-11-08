import { type Artifact } from "@shared/schema";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import RiskMeter from "./RiskMeter";
import { Eye, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";

interface ArtifactCardProps {
  artifact: Artifact;
  onAddToHeist?: (artifact: Artifact) => void;
  onViewDetails?: (artifact: Artifact) => void;
}

const exhibitColors = {
  Egypt: "bg-chart-4 text-chart-4",
  France: "bg-primary text-primary-foreground",
  Italy: "bg-chart-1 text-chart-1",
};

export default function ArtifactCard({ 
  artifact, 
  onAddToHeist,
  onViewDetails 
}: ArtifactCardProps) {
  return (
    <Card 
      className="overflow-hidden hover-elevate active-elevate-2 transition-all cursor-pointer group"
      onClick={() => onViewDetails?.(artifact)}
      data-testid={`card-artifact-${artifact.id}`}
    >
      <div className="aspect-square bg-muted relative overflow-hidden">
        <img
          src={artifact.imageUrl}
          alt={artifact.name}
          className="w-full h-full object-contain p-4"
        />
        <Badge 
          className={cn("absolute top-3 left-3 font-mono text-xs", exhibitColors[artifact.exhibit as keyof typeof exhibitColors])}
          data-testid={`badge-exhibit-${artifact.id}`}
        >
          {artifact.exhibit.toUpperCase()}
        </Badge>
      </div>
      
      <CardContent className="p-6 space-y-4">
        <div>
          <h3 className="font-serif text-xl font-semibold mb-2 line-clamp-2" data-testid={`text-artifact-name-${artifact.id}`}>
            {artifact.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-3" data-testid={`text-description-${artifact.id}`}>
            {artifact.description}
          </p>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Eye className="w-4 h-4" />
          <span className="font-mono" data-testid={`text-engagement-${artifact.id}`}>
            {artifact.visitorEngagement.toLocaleString()} views
          </span>
        </div>

        <RiskMeter percentage={artifact.riskPercentage} size="sm" />

        <div className="flex items-center justify-between pt-2">
          <span className="font-mono text-sm font-semibold" data-testid={`text-value-${artifact.id}`}>
            {artifact.value}
          </span>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button
          className="w-full"
          onClick={(e) => {
            e.stopPropagation();
            onAddToHeist?.(artifact);
          }}
          data-testid={`button-add-to-heist-${artifact.id}`}
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          ADD TO HEIST PLAN
        </Button>
      </CardFooter>
    </Card>
  );
}
