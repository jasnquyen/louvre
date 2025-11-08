import { Shield, TrendingUp, Target } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="bg-card border-b">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="text-center space-y-6">
          <div className="inline-block">
            <div className="flex items-center justify-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-md border border-destructive/20">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-mono font-semibold">CLASSIFIED: TOP SECRET</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight" data-testid="text-hero-title">
            OPERATION ARTIFACT ACQUISITION
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-hero-description">
            Browse our classified catalog of high-value museum artifacts. Each target has been 
            analyzed for risk assessment based on visitor engagement data. Plan your operation carefully.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 max-w-3xl mx-auto">
            <div className="text-center space-y-2">
              <div className="flex justify-center">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-mono font-bold" data-testid="text-stat-artifacts">9</div>
              <div className="text-sm text-muted-foreground font-mono">TOTAL TARGETS</div>
            </div>

            <div className="text-center space-y-2">
              <div className="flex justify-center">
                <TrendingUp className="w-8 h-8 text-chart-4" />
              </div>
              <div className="text-3xl font-mono font-bold" data-testid="text-stat-engagement">54,500</div>
              <div className="text-sm text-muted-foreground font-mono">AVG. ENGAGEMENT</div>
            </div>

            <div className="text-center space-y-2">
              <div className="flex justify-center">
                <Shield className="w-8 h-8 text-chart-3" />
              </div>
              <div className="text-3xl font-mono font-bold" data-testid="text-stat-exhibits">3</div>
              <div className="text-sm text-muted-foreground font-mono">ACTIVE EXHIBITS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
