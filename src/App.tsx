import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { part1Content } from "./content/part1";
import { part1WorkedExamples } from "./content/part1WorkedExamples";
import { StudioHeader } from "./components/layout/StudioHeader";
import { StudioSidebar } from "./components/layout/StudioSidebar";
import { LecturerPanel } from "./components/layout/LecturerPanel";
import { LectureView } from "./components/lecture/LectureView";
import { WorkedExampleView } from "./components/lecture/WorkedExamplePanel";
import { CheckpointView } from "./components/lecture/CheckpointView";
import { PracticeView } from "./components/lecture/PracticeView";

const practiceProblems = [
  { id: "P1", title: "Coordinate reasoning", question: "Choose an origin and positive direction, then describe the position of a particle at x = −12 m." },
  { id: "P2", title: "Distance vs displacement", question: "A particle travels 60 m forward and 20 m backward. Determine its distance and displacement." },
  { id: "P3", title: "Sign analysis", question: "A particle has v < 0 and a > 0. Is it speeding up or slowing down? Explain." }
];

const App: React.FC = () => {
  const [currentSectionId, setCurrentSectionId] = useState("sec-01");
  const [activeViewMode, setActiveViewMode] = useState<"LESSON" | "WORKED_EXAMPLE" | "CHECKPOINT" | "PRACTICE">("LESSON");
  const [lecturerMode, setLecturerMode] = useState(true);

  const index = part1Content.sections.findIndex((s) => s.id === currentSectionId);
  const activeSection = part1Content.sections[index] ?? part1Content.sections[0];

  const goPrevious = () => {
    if (index > 0) setCurrentSectionId(part1Content.sections[index - 1].id);
  };

  const goNext = () => {
    if (index < part1Content.sections.length - 1) {
      setCurrentSectionId(part1Content.sections[index + 1].id);
    }
  };

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (activeViewMode !== "LESSON") return;

      if (event.key === "ArrowRight") goNext();
      if (event.key === "ArrowLeft") goPrevious();
      if (event.key.toLowerCase() === "l") {
        setLecturerMode((value) => !value);
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  });

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
  };

  return (
    <div className="app-shell">
      <StudioSidebar
        part={part1Content}
        currentSectionId={currentSectionId}
        activeViewMode={activeViewMode}
        onSelectSection={setCurrentSectionId}
        onChangeViewMode={setActiveViewMode}
      />

      <div className="studio-workspace">
        <StudioHeader
          lecturerMode={lecturerMode}
          onToggleLecturerMode={() => setLecturerMode((value) => !value)}
          onToggleFullscreen={toggleFullscreen}
        />

        <div className="studio-body">
          <main className="presentation-area">
            {activeViewMode === "LESSON" && <LectureView section={activeSection} />}
            {activeViewMode === "WORKED_EXAMPLE" && (
              <>
        <WorkedExampleView examples={part1WorkedExamples} />

      </>
            )}
            {activeViewMode === "CHECKPOINT" && (
              <CheckpointView checkpoints={part1Content.checkpoints} />
            )}
            {activeViewMode === "PRACTICE" && (
              <PracticeView problems={practiceProblems} />
            )}

            {activeViewMode === "LESSON" && (
              <div className="presentation-controls">
                <button onClick={goPrevious} disabled={index === 0}>
                  <ChevronLeft size={17} /> Previous
                </button>

                <span>{index + 1} / {part1Content.sections.length}</span>

                <button
                  onClick={goNext}
                  disabled={index === part1Content.sections.length - 1}
                >
                  Next <ChevronRight size={17} />
                </button>
              </div>
            )}
          </main>

          {lecturerMode && activeViewMode === "LESSON" && (
            <LecturerPanel cue={activeSection.lecturerCue} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;





