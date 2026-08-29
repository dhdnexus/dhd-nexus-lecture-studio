import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { parts, getPartById } from "./content/parts";
import { StudioHeader } from "./components/layout/StudioHeader";
import { StudioSidebar } from "./components/layout/StudioSidebar";
import { LecturerPanel } from "./components/layout/LecturerPanel";
import { LectureView } from "./components/lecture/LectureView";
import { WorkedExampleView } from "./components/lecture/WorkedExamplePanel";
import { CheckpointView } from "./components/lecture/CheckpointView";
import { PracticeView } from "./components/lecture/PracticeView";
import { LectureNoteView } from "./components/lecture/LectureNoteView";

const App: React.FC = () => {
  const [activePartId, setActivePartId] = useState(parts[0].id);
  const activePart = getPartById(activePartId);

  const [currentSectionId, setCurrentSectionId] = useState(
    activePart.content.sections[0].id
  );
  const [activeViewMode, setActiveViewMode] = useState<"LESSON" | "WORKED_EXAMPLE" | "CHECKPOINT" | "PRACTICE" | "LECTURE_NOTE">("LESSON");
  const [lecturerMode, setLecturerMode] = useState(true);

  const handleSelectPart = (id: string) => {
    const nextPart = getPartById(id);
    setActivePartId(id);
    setCurrentSectionId(nextPart.content.sections[0].id);
    setActiveViewMode("LESSON");
  };

  const index = activePart.content.sections.findIndex((s) => s.id === currentSectionId);
  const activeSection = activePart.content.sections[index] ?? activePart.content.sections[0];

  const goPrevious = () => {
    if (index > 0) setCurrentSectionId(activePart.content.sections[index - 1].id);
  };

  const goNext = () => {
    if (index < activePart.content.sections.length - 1) {
      setCurrentSectionId(activePart.content.sections[index + 1].id);
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
        part={activePart.content}
        currentSectionId={currentSectionId}
        activeViewMode={activeViewMode}
        onSelectSection={setCurrentSectionId}
        onChangeViewMode={setActiveViewMode}
        parts={parts.map((p) => ({ id: p.id, shortLabel: p.shortLabel }))}
        activePartId={activePartId}
        onSelectPart={handleSelectPart}
      />

      <div className="studio-workspace">
        <StudioHeader
          title={activePart.content.title}
          subtitle={activePart.content.subtitle}
          lecturerMode={lecturerMode}
          onToggleLecturerMode={() => setLecturerMode((value) => !value)}
          onToggleFullscreen={toggleFullscreen}
        />

        <div className="studio-body">
          <main className="presentation-area">
            {activeViewMode === "LESSON" && (
              <LectureView section={activeSection} visualRegistry={activePart.lessonVisualRegistry} />
            )}
            {activeViewMode === "WORKED_EXAMPLE" && (
              <WorkedExampleView key={activePart.id} examples={activePart.workedExamples} />
            )}
            {activeViewMode === "CHECKPOINT" && (
              <CheckpointView key={activePart.id} checkpoints={activePart.content.checkpoints} />
            )}
            {activeViewMode === "PRACTICE" && (
              <PracticeView key={activePart.id} problems={activePart.practiceProblems} />
            )}
            {activeViewMode === "LECTURE_NOTE" && (
              <LectureNoteView
                key={activePart.id}
                markdown={activePart.lectureNoteMarkdown}
                partTitle={`${activePart.content.title} — ${activePart.content.subtitle}`}
                visualRegistry={activePart.lectureNoteVisualRegistry}
              />
            )}

            {activeViewMode === "LESSON" && (
              <div className="presentation-controls">
                <button onClick={goPrevious} disabled={index === 0}>
                  <ChevronLeft size={17} /> Previous
                </button>

                <span>{index + 1} / {activePart.content.sections.length}</span>

                <button
                  onClick={goNext}
                  disabled={index === activePart.content.sections.length - 1}
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





