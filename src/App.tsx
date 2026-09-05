import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, CirclePlay, CheckCircle2, FileText, PencilLine, BookOpen, Home, PanelRight } from "lucide-react";
import { parts, getPartById } from "./content/parts";
import { appendices } from "./content/appendices";
import type { AppendixDefinition } from "./content/appendices";
import type { PartDefinition } from "./content/parts";
import { StudioHeader } from "./components/layout/StudioHeader";
import { StudioSidebar } from "./components/layout/StudioSidebar";
import { StudioNavigator } from "./components/navigation/StudioNavigator";
import { LecturerPanel } from "./components/layout/LecturerPanel";
import { LectureView } from "./components/lecture/LectureView";
import { WorkedExampleView } from "./components/lecture/WorkedExamplePanel";
import { CheckpointView } from "./components/lecture/CheckpointView";
import { PracticeView } from "./components/lecture/PracticeView";
import { LectureNoteView } from "./components/lecture/LectureNoteView";
import "./styles/mobile-sidebar.css";
import "./styles/studio-navigator.css";
import "./styles/studio-sidebar-refined.css";
import "./styles/stitch-reference.css";
import "./styles/stitch-fixes.css";
import "./styles/stitch-lesson.css";

type StudioContent = PartDefinition | AppendixDefinition;
type SubjectId = "physics" | "mathematics";
type ViewMode = "LESSON" | "WORKED_EXAMPLE" | "CHECKPOINT" | "PRACTICE" | "LECTURE_NOTE";

const getContentById = (id: string): StudioContent => appendices.find((item) => item.id === id) ?? getPartById(id);
const getSubjectIdForContent = (id: string): SubjectId => id === "appendix-roots" ? "mathematics" : "physics";

const App: React.FC = () => {
  const [activeContentId, setActiveContentId] = useState(parts[0].id);
  const activeContent = getContentById(activeContentId);
  const [studioNavigatorOpen, setStudioNavigatorOpen] = useState(true);
  const [navigatorTrailIds, setNavigatorTrailIds] = useState<string[]>([]);
  const [currentSectionId, setCurrentSectionId] = useState(activeContent.content.sections[0].id);
  const [activeViewMode, setActiveViewMode] = useState<ViewMode>("LESSON");
  const [lecturerMode, setLecturerMode] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const openNavigator = (trailIds: string[] = []) => { setNavigatorTrailIds(trailIds); setStudioNavigatorOpen(true); setMobileSidebarOpen(false); };
  const handleSelectContent = (id: string) => { const next = getContentById(id); setActiveContentId(id); setCurrentSectionId(next.content.sections[0].id); setActiveViewMode("LESSON"); setStudioNavigatorOpen(false); setNavigatorTrailIds([]); setMobileSidebarOpen(false); };
  const currentSubjectId = getSubjectIdForContent(activeContentId);
  const index = activeContent.content.sections.findIndex((s) => s.id === currentSectionId);
  const activeSection = activeContent.content.sections[index] ?? activeContent.content.sections[0];
  const goPrevious = () => { if (index > 0) setCurrentSectionId(activeContent.content.sections[index - 1].id); };
  const goNext = () => { if (index < activeContent.content.sections.length - 1) setCurrentSectionId(activeContent.content.sections[index + 1].id); };
  useEffect(() => { const handler = (event: KeyboardEvent) => { if (event.key === "Escape") { setMobileSidebarOpen(false); return; } if (studioNavigatorOpen || activeViewMode !== "LESSON") return; if (event.key === "ArrowRight") goNext(); if (event.key === "ArrowLeft") goPrevious(); if (event.key.toLowerCase() === "l") setLecturerMode((value) => !value); }; window.addEventListener("keydown", handler); return () => window.removeEventListener("keydown", handler); });
  useEffect(() => { document.body.style.overflow = mobileSidebarOpen ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [mobileSidebarOpen]);
  const toggleFullscreen = async () => { if (!document.fullscreenElement) await document.documentElement.requestFullscreen(); else await document.exitFullscreen(); };
  const modes = [
    { id: "LESSON" as const, label: "Lesson", icon: CirclePlay }, { id: "WORKED_EXAMPLE" as const, label: "Worked Examples", icon: FileText }, { id: "CHECKPOINT" as const, label: "Checkpoints", icon: CheckCircle2 }, { id: "PRACTICE" as const, label: "Practice", icon: PencilLine }, { id: "LECTURE_NOTE" as const, label: "Lecture Note", icon: BookOpen }
  ];
  if (studioNavigatorOpen) return <StudioNavigator onOpenContent={handleSelectContent} initialTrailIds={navigatorTrailIds} />;
  const subjectLabel = currentSubjectId === "mathematics" ? "Mathematics" : "Physics";
  const contentLabel = activeContent.content.title;
  return (
    <div className="app-shell">
      {mobileSidebarOpen && <button className="mobile-sidebar-backdrop" onClick={() => setMobileSidebarOpen(false)} aria-label="Close navigation" />}
      <StudioSidebar part={activeContent.content} currentSectionId={currentSectionId} activeViewMode={activeViewMode} onSelectSection={setCurrentSectionId} onChangeViewMode={setActiveViewMode} parts={parts.map((p) => ({ id: p.id, shortLabel: p.shortLabel }))} activePartId={activeContentId} onSelectPart={handleSelectContent} mobileOpen={mobileSidebarOpen} onCloseMobile={() => setMobileSidebarOpen(false)} currentSubjectId={currentSubjectId} onOpenNavigator={openNavigator} />
      <div className="studio-workspace">
        <StudioHeader title={contentLabel} subtitle={activeContent.content.subtitle} lecturerMode={lecturerMode} onToggleLecturerMode={() => setLecturerMode((value) => !value)} onToggleFullscreen={toggleFullscreen} onToggleMobileMenu={() => setMobileSidebarOpen((value) => !value)} onOpenNavigator={() => openNavigator([])} onOpenHome={() => openNavigator([])} />
        <div className="studio-lesson-breadcrumb"><button onClick={() => openNavigator([])}><Home size={9} /> Home</button><span>/</span><button onClick={() => openNavigator([currentSubjectId])}>{subjectLabel}</button><span>/</span><span>Classical</span><span>/</span><strong>Lesson Stage</strong></div>
        <div className="studio-content-nav">{modes.map(({ id, label, icon: Icon }) => <button key={id} className={activeViewMode === id ? "active" : ""} onClick={() => setActiveViewMode(id)}><Icon size={10} /> {label}</button>)}</div>
        <div className="studio-body">
          <main className="presentation-area">
            {activeViewMode === "LESSON" && <LectureView section={activeSection} visualRegistry={activeContent.lessonVisualRegistry} />}
            {activeViewMode === "WORKED_EXAMPLE" && <WorkedExampleView key={activeContent.id} examples={activeContent.workedExamples} />}
            {activeViewMode === "CHECKPOINT" && <CheckpointView key={activeContent.id} checkpoints={activeContent.content.checkpoints} />}
            {activeViewMode === "PRACTICE" && <PracticeView key={activeContent.id} problems={activeContent.practiceProblems} />}
            {activeViewMode === "LECTURE_NOTE" && <LectureNoteView key={activeContent.id} markdown={activeContent.lectureNoteMarkdown} partTitle={`${activeContent.content.title} — ${activeContent.content.subtitle}`} visualRegistry={activeContent.lectureNoteVisualRegistry} />}
            {activeViewMode === "LESSON" && <div className="presentation-controls"><button onClick={goPrevious} disabled={index === 0}><ChevronLeft size={12} /> Previous</button><span>{index + 1} / {activeContent.content.sections.length}</span><button onClick={goNext} disabled={index === activeContent.content.sections.length - 1}>Next <ChevronRight size={12} /></button></div>}
          </main>
          {lecturerMode && activeViewMode === "LESSON" && <LecturerPanel cue={activeSection.lecturerCue} />}
        </div>
        <nav className="studio-bottom-dock" aria-label="Studio navigation"><button onClick={() => openNavigator([currentSubjectId])}><span className="dock-icon-grid">⌘</span><span>Curriculum</span></button><button onClick={() => setActiveViewMode("LESSON")} className={activeViewMode === "LESSON" ? "active" : ""}><CirclePlay size={14} /><span>Lesson</span></button><button onClick={() => setLecturerMode((value) => !value)} className={lecturerMode ? "active" : ""}><PanelRight size={14} /><span>HUD</span></button><button onClick={() => setActiveViewMode("LECTURE_NOTE")} className={activeViewMode === "LECTURE_NOTE" ? "active" : ""}><BookOpen size={14} /><span>Notes</span></button></nav>
      </div>
    </div>
  );
};
export default App;
