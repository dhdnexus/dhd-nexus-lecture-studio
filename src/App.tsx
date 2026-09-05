import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { parts, getPartById } from "./content/parts";
import { appendices, getAppendixById } from "./content/appendices";
import type { AppendixDefinition } from "./content/appendices";
import type { PartDefinition } from "./content/parts";
import { StudioHeader } from "./components/layout/StudioHeader";
import { StudioSidebar } from "./components/layout/StudioSidebar";
import { LecturerPanel } from "./components/layout/LecturerPanel";
import { LectureView } from "./components/lecture/LectureView";
import { WorkedExampleView } from "./components/lecture/WorkedExamplePanel";
import { CheckpointView } from "./components/lecture/CheckpointView";
import { PracticeView } from "./components/lecture/PracticeView";
import { LectureNoteView } from "./components/lecture/LectureNoteView";

type StudioContent = PartDefinition | AppendixDefinition;

const getContentById = (id: string): StudioContent => {
  const appendix = appendices.find((item) => item.id === id);
  return appendix ?? getPartById(id);
};

const App: React.FC = () => {
  const [activeContentId, setActiveContentId] = useState(parts[0].id);
  const activeContent = getContentById(activeContentId);

  const [currentSectionId, setCurrentSectionId] = useState(
    activeContent.content.sections[0].id
  );
  const [activeViewMode, setActiveViewMode] = useState<"LESSON" | "WORKED_EXAMPLE" | "CHECKPOINT" | "PRACTICE" | "LECTURE_NOTE">("LESSON");
  const [lecturerMode, setLecturerMode] = useState(true);

  const handleSelectContent = (id: string) => {
    const nextContent = getContentById(id);
    setActiveContentId(id);
    setCurrentSectionId(nextContent.content.sections[0].id);
    setActiveViewMode("LESSON");
  };

  const index = activeContent.content.sections.findIndex((s) => s.id === currentSectionId);
  const activeSection = activeContent.content.sections[index] ?? activeContent.content.sections[0];

  const goPrevious = () => {
    if (index > 0) setCurrentSectionId(activeContent.content.sections[index - 1].id);
  };

  const goNext = () => {
    if (index < activeContent.content.sections.length - 1) {
      setCurrentSectionId(activeContent.content.sections[index + 1].id);
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
        part={activeContent.content}
        currentSectionId={currentSectionId}
        activeViewMode={activeViewMode}
        onSelectSection={setCurrentSectionId}
        onChangeViewMode={setActiveViewMode}
        parts={parts.map((p) => ({ id: p.id, shortLabel: p.shortLabel }))}
        appendices={appendices.map((appendix) => ({ id: appendix.id, shortLabel: appendix.shortLabel }))}
        activePartId={activeContentId}
        onSelectPart={handleSelectContent}
      />

      <div className="studio-workspace">
        <StudioHeader
          title={activeContent.content.title}
          subtitle={activeContent.content.subtitle}
          lecturerMode={lecturerMode}
          onToggleLecturerMode={() => setLecturerMode((value) => !value)}
          onToggleFullscreen={toggleFullscreen}
        />

        <div className="studio-body">
          <main className="presentation-area">
            {activeViewMode === "LESSON" && (
              <LectureView section={activeSection} visualRegistry={activeContent.lessonVisualRegistry} />
            )}
            {activeViewMode === "WORKED_EXAMPLE" && (
              <WorkedExampleView key={activeContent.id} examples={activeContent.workedExamples} />
            )}
            {activeViewMode === "CHECKPOINT" && (
              <CheckpointView key={activeContent.id} checkpoints={activeContent.content.checkpoints} />
            )}
            {activeViewMode === "PRACTICE" && (
              <PracticeView key={activeContent.id} problems={activeContent.practiceProblems} />
            )}
            {activeViewMode === "LECTURE_NOTE" && (
              <LectureNoteView
                key={activeContent.id}
                markdown={activeContent.lectureNoteMarkdown}
                partTitle={`${activeContent.content.title} — ${activeContent.content.subtitle}`}
                visualRegistry={activeContent.lectureNoteVisualRegistry}
              />
            )}

            {activeViewMode === "LESSON" && (
              <div className="presentation-controls">
                <button onClick={goPrevious} disabled={index === 0}>
                  <ChevronLeft size={17} /> Previous
                </button>

                <span>{index + 1} / {activeContent.content.sections.length}</span>

                <button
                  onClick={goNext}
                  disabled={index === activeContent.content.sections.length - 1}
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
