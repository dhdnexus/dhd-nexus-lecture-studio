import React, { useEffect, useState } from "react";
import { Atom, BookOpen, ChevronLeft, ChevronRight, CirclePlay, FileText, CheckCircle2, Home, PencilLine, Sigma, X, LibraryBig } from "lucide-react";
import type { PartContent } from "../../types/course";
import { studioSubjects } from "../../content/studioTaxonomy";

interface ContentOption {
  id: string;
  shortLabel: string;
}

interface Props {
  part: PartContent;
  currentSectionId: string;
  activeViewMode: "LESSON" | "WORKED_EXAMPLE" | "CHECKPOINT" | "PRACTICE" | "LECTURE_NOTE";
  onSelectSection: (id: string) => void;
  onChangeViewMode: (mode: "LESSON" | "WORKED_EXAMPLE" | "CHECKPOINT" | "PRACTICE" | "LECTURE_NOTE") => void;
  parts: ContentOption[];
  activePartId: string;
  onSelectPart: (id: string) => void;
  mobileOpen: boolean;
  onCloseMobile: () => void;
  currentSubjectId: "physics" | "mathematics";
  onOpenNavigator: (trailIds?: string[]) => void;
}

const modes = [
  { id: "LESSON", label: "Lesson", icon: CirclePlay },
  { id: "WORKED_EXAMPLE", label: "Worked Examples", icon: FileText },
  { id: "CHECKPOINT", label: "Checkpoints", icon: CheckCircle2 },
  { id: "PRACTICE", label: "Practice", icon: PencilLine },
  { id: "LECTURE_NOTE", label: "Lecture Note", icon: BookOpen }
] as const;

const subjectIcon = (id: string) => id === "physics" ? Atom : Sigma;

export const StudioSidebar: React.FC<Props> = ({
  part,
  currentSectionId,
  activeViewMode,
  onSelectSection,
  onChangeViewMode,
  parts,
  activePartId,
  onSelectPart,
  mobileOpen,
  onCloseMobile,
  currentSubjectId,
  onOpenNavigator
}) => {
  const [collapsed, setCollapsed] = useState(false);
  const showFullSidebar = !collapsed || mobileOpen;
  const currentSubject = studioSubjects.find((subject) => subject.id === currentSubjectId);
  const isAppendix = currentSubjectId === "mathematics" && activePartId === "appendix-roots";

  useEffect(() => {
    const handleResize = () => setCollapsed(window.innerWidth < 1200);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMobile = () => onCloseMobile();
  const handleSelectPart = (id: string) => { onSelectPart(id); closeMobile(); };
  const handleChangeViewMode = (mode: typeof modes[number]["id"]) => { onChangeViewMode(mode); closeMobile(); };
  const handleSelectSection = (id: string) => { onSelectSection(id); closeMobile(); };
  const handleOpenNavigator = (trailIds: string[] = []) => { onOpenNavigator(trailIds); closeMobile(); };

  return (
    <aside className={`studio-sidebar ${collapsed ? "collapsed" : ""} ${mobileOpen ? "mobile-open" : ""}`}>
      <div className="sidebar-brand">
        <BookOpen size={18} />
        {showFullSidebar && (
          <div className="sidebar-brand-copy">
            <strong>DHD Nexus Lecture Studio</strong>
            <span>Academic Workbench</span>
          </div>
        )}
        <button className="mobile-sidebar-close" onClick={closeMobile} aria-label="Close navigation"><X size={18} /></button>
      </div>

      <div className="sidebar-global-nav">
        <div className="sidebar-heading">{showFullSidebar ? "GLOBAL" : "NAV"}</div>
        <button className="sidebar-global-link" onClick={() => handleOpenNavigator([])} title="Lecture Studio home">
          <Home size={16} />
          {showFullSidebar && <span>Home</span>}
        </button>
        {studioSubjects.map((subject) => {
          const Icon = subjectIcon(subject.id);
          const isCurrent = subject.id === currentSubjectId;
          return (
            <button
              key={subject.id}
              className={`sidebar-global-link ${isCurrent ? "active" : ""}`}
              onClick={() => handleOpenNavigator([subject.id])}
              title={subject.label}
            >
              <Icon size={16} />
              {showFullSidebar && <span>{subject.label}</span>}
            </button>
          );
        })}
      </div>

      {showFullSidebar && (
        <div className="sidebar-context-block">
          <div className="sidebar-heading">CURRENT ACADEMY</div>
          <button className="sidebar-context-button" onClick={() => handleOpenNavigator([currentSubjectId])}>
            {currentSubject && React.createElement(subjectIcon(currentSubjectId), { size: 16 })}
            <span>{currentSubject?.label ?? "Select an academy"}</span>
            <ChevronRight size={14} />
          </button>
          <button className="sidebar-browse-button" onClick={() => handleOpenNavigator([currentSubjectId])}>
            <LibraryBig size={14} />
            Browse curriculum
          </button>
        </div>
      )}

      {showFullSidebar && (
        <div className="sidebar-course-block">
          <div className="sidebar-heading">CURRENT COURSE</div>
          {isAppendix ? (
            <div className="sidebar-current-content">
              <span className="sidebar-content-label">MATHEMATICS APPENDIX</span>
              <strong>{part.title}</strong>
            </div>
          ) : (
            <label className="sidebar-course-select-label">
              <span>Kinematics</span>
              <select
                className="sidebar-part-select"
                value={activePartId}
                onChange={(e) => handleSelectPart(e.target.value)}
                aria-label="Select published Kinematics lecture part"
              >
                <optgroup label="Published Kinematics">
                  {parts.map((option) => <option key={option.id} value={option.id}>{option.shortLabel}</option>)}
                </optgroup>
              </select>
            </label>
          )}
        </div>
      )}

      <nav className="sidebar-modes">
        <div className="sidebar-heading">{showFullSidebar ? "LECTURE" : "VIEW"}</div>
        {modes.map(({ id, label, icon: Icon }) => (
          <button key={id} className={`sidebar-mode ${activeViewMode === id ? "active" : ""}`} onClick={() => handleChangeViewMode(id)} title={!showFullSidebar ? label : undefined}>
            <Icon size={16} />
            {showFullSidebar && <span>{label}</span>}
          </button>
        ))}
      </nav>

      {activeViewMode === "LESSON" && showFullSidebar && (
        <div className="sidebar-sections">
          <div className="sidebar-heading">{part.title || "CURRENT LESSON"}</div>
          {part.sections.map((section, index) => (
            <button key={section.id} className={`sidebar-section ${currentSectionId === section.id ? "active" : ""}`} onClick={() => handleSelectSection(section.id)}>
              <span className="section-number">{String(index + 1).padStart(2, "0")}</span>
              <span className="section-text"><strong>{section.title}</strong>{section.subtitle && <small>{section.subtitle}</small>}</span>
            </button>
          ))}
        </div>
      )}

      {activeViewMode === "LESSON" && collapsed && !mobileOpen && (
        <div className="sidebar-collapsed-sections">
          {part.sections.map((section, index) => (
            <button key={section.id} className={`collapsed-section ${currentSectionId === section.id ? "active" : ""}`} onClick={() => handleSelectSection(section.id)} title={section.title}>
              {String(index + 1).padStart(2, "0")}
            </button>
          ))}
        </div>
      )}

      <button className="sidebar-toggle" onClick={() => setCollapsed((value) => !value)} title={collapsed ? "Expand sidebar" : "Collapse sidebar"}>
        {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </button>
    </aside>
  );
};
