import { useState, useMemo } from "react";
import { type Artifact, type Exhibit } from "@shared/schema";
import { mockArtifacts } from "@/lib/mockData";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FilterBar from "@/components/FilterBar";
import ArtifactGrid from "@/components/ArtifactGrid";
import ArtifactModal from "@/components/ArtifactModal";
import HeistPlanSheet from "@/components/HeistPlanSheet";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const [activeExhibit, setActiveExhibit] = useState<Exhibit>("All");
  const [selectedArtifact, setSelectedArtifact] = useState<Artifact | null>(null);
  const [heistPlan, setHeistPlan] = useState<Artifact[]>([]);
  const [isHeistSheetOpen, setIsHeistSheetOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { toast } = useToast();

  const filteredArtifacts = useMemo(() => {
    if (activeExhibit === "All") return mockArtifacts;
    return mockArtifacts.filter((a) => a.exhibit === activeExhibit);
  }, [activeExhibit]);

  const exhibitCounts = useMemo(() => {
    return {
      All: mockArtifacts.length,
      Egypt: mockArtifacts.filter((a) => a.exhibit === "Egypt").length,
      France: mockArtifacts.filter((a) => a.exhibit === "France").length,
      Italy: mockArtifacts.filter((a) => a.exhibit === "Italy").length,
    };
  }, []);

  const handleAddToHeist = (artifact: Artifact) => {
    if (heistPlan.find((a) => a.id === artifact.id)) {
      toast({
        title: "Already in heist plan",
        description: `${artifact.name} is already selected for the operation.`,
        variant: "destructive",
      });
      return;
    }

    setHeistPlan([...heistPlan, artifact]);
    toast({
      title: "Target acquired",
      description: `${artifact.name} added to heist plan.`,
    });
  };

  const handleRemoveFromHeist = (artifactId: string) => {
    setHeistPlan(heistPlan.filter((a) => a.id !== artifactId));
    toast({
      title: "Target removed",
      description: "Artifact removed from heist plan.",
    });
  };

  const handleExecuteHeist = () => {
    toast({
      title: "Operation initiated",
      description: `Executing heist with ${heistPlan.length} targets. Good luck, agent.`,
    });
    setHeistPlan([]);
    setIsHeistSheetOpen(false);
  };

  const handleViewDetails = (artifact: Artifact) => {
    setSelectedArtifact(artifact);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        heistCount={heistPlan.length} 
        onViewHeist={() => setIsHeistSheetOpen(true)} 
      />
      
      <HeroSection />

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-12 space-y-8">
        <div>
          <h3 className="text-sm font-mono font-semibold text-muted-foreground mb-4">
            FILTER BY EXHIBIT
          </h3>
          <FilterBar
            activeExhibit={activeExhibit}
            onFilterChange={setActiveExhibit}
            counts={exhibitCounts}
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-serif font-semibold">
              {activeExhibit === "All" ? "All Targets" : `${activeExhibit} Exhibit`}
            </h3>
            <span className="text-sm text-muted-foreground font-mono" data-testid="text-artifact-count">
              {filteredArtifacts.length} {filteredArtifacts.length === 1 ? 'artifact' : 'artifacts'}
            </span>
          </div>

          <ArtifactGrid
            artifacts={filteredArtifacts}
            onAddToHeist={handleAddToHeist}
            onViewDetails={handleViewDetails}
          />
        </div>
      </main>

      <ArtifactModal
        artifact={selectedArtifact}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        onAddToHeist={handleAddToHeist}
      />

      <HeistPlanSheet
        artifacts={heistPlan}
        open={isHeistSheetOpen}
        onOpenChange={setIsHeistSheetOpen}
        onRemoveArtifact={handleRemoveFromHeist}
        onExecuteHeist={handleExecuteHeist}
      />
    </div>
  );
}
