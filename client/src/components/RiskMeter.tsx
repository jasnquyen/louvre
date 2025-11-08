import { cn } from "@/lib/utils";

interface RiskMeterProps {
  percentage: number;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
}

export default function RiskMeter({ 
  percentage, 
  size = "md", 
  showLabel = true 
}: RiskMeterProps) {
  const getRiskLevel = (pct: number) => {
    if (pct >= 80) return { label: "CRITICAL", color: "bg-destructive" };
    if (pct >= 60) return { label: "HIGH", color: "bg-chart-4" };
    if (pct >= 40) return { label: "MODERATE", color: "bg-chart-2" };
    return { label: "LOW", color: "bg-chart-3" };
  };

  const risk = getRiskLevel(percentage);

  const sizeClasses = {
    sm: "h-1.5",
    md: "h-2.5",
    lg: "h-3",
  };

  const textSizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };

  return (
    <div className="space-y-2">
      {showLabel && (
        <div className="flex items-center justify-between">
          <span className={cn("font-mono font-semibold", textSizeClasses[size])}>
            {percentage}% RISK
          </span>
          <span className={cn("text-muted-foreground font-mono", textSizeClasses[size])}>
            {risk.label}
          </span>
        </div>
      )}
      <div className={cn("w-full bg-muted rounded-full overflow-hidden", sizeClasses[size])}>
        <div
          className={cn("h-full transition-all duration-1000 ease-out", risk.color)}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
