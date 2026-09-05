import React, { useEffect, useState } from "react";
import { BookOpen, ChevronLeft, ChevronRight, CirclePlay, FileText, CheckCircle2, PencilLine, X } from "lucide-react";
import type { PartContent } from "../../types/course";

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
  appendices: ContentOption[];
  activePartId: string;
  onSelectPart: (id: string) => void;
  mobileOpen: boolean;
  onCloseMobile: () => void;
}

const modes = [
  { id: "LESSON", label: "Lesson", icon: CirclePlay },
  { id: "WORKED_EXAMPLE", label: "Worked Examples", icon: FileText },
  { id: "CHECKPOINT", label: "Checkpoints", icon: CheckCircle2 },
  { id: "PRACTICE", label: "Practice", icon: PencilLine },
  { id: "LECTURE_NOTE", label: "Lecture Note", icon: BookOpen }
] as const;

export const StudioSidebar: React.FC<Props> = ({
  part,
  currentSectionId,
  activeViewMode,
  onSelectSection,
  onChangeViewMode,
  parts,
  appendices,
  activePartId,
  onSelectPart,
  mobileOpen,
  onCloseMobile
}) => {
  const [collapsed, setCollapsed] = useState(false);
  const showFullSidebar = !collapsed || mobileOpen;

  useEffect(() => {
    const handleResize = () => {
      setCollapsed(window.innerWidth < 1200);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSelectPart = (id: string) => {
    onSelectPart(id);
    onCloseMobile();
  };

  const handleChangeViewMode = (mode: typeof modes[number]["id"]) => {
    onChangeViewMode(mode);
    onCloseMobile();
  };

  const handleSelectSection = (id: string) => {
    onSelectSection(id);
    onCloseMobile();
  };

  return (
    <aside className={`studio-sidebar ${collapsed ? "collapsed" : ""} ${mobileOpen ? "mobile-open" : ""}`}>
      <div className="sidebar-brand">
        <BookOpen size={18} />
        {showFullSidebar && (
          <div>
            <strong>Lecture Studio</strong>
            <select
              className="sidebar-part-select"
              value={activePartId}
              onChange={(e) => handleSelectPart(e.target.value)}
              aria-label="Select lecture content"
            >
              <optgroup label="Curriculum">
                {parts.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.shortLabel}
                  </option>
                ))}
              </optgroup>
              <optgroup label="Appendices">
                {appendices.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.shortLabel}
                  </option>
                ))}
              </optgroup>
            </select>
          </div>
        )}

        <button
          className="mobile-sidebar-close"
          onClick={onCloseMobile}
          aria-label="Close navigation"
        >
          <X size={18} />
        </button>
      </div>

      <button
        className="sidebar-toggle"
        onClick={() => setCollapsed((value) => !value)}
        title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </button>

      <nav className="sidebar-modes">
        {modes.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            className={`sidebar-mode ${activeViewMode === id ? "active" : ""}`}
            onClick={() => handleChangeViewMode(id)}
            title={collapsed && !mobileOpen ? label : undefined}
          >
            <Icon size={16} />
            {showFullSidebar && <span>{label}</span>}
          </button>
        ))}
      </nav>

      {activeViewMode === "LESSON" && showFullSidebar && (
        <div className="sidebar-sections">
          <div className="sidebar-heading">
            {part.title || "EPISODE 1"}
          </div>

          {part.sections.map((section, index) => (
            <button
              key={section.id}
              className={`sidebar-section ${
                currentSectionId === section.id ? "active" : ""
              }`}
              onClick={() => handleSelectSection(section.id)}
            >
              <span className="section-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="section-text">
                <strong>{section.title}</strong>
                {section.subtitle && <small>{section.subtitle}</small>}
              </span>
            </button>
          ))}
        </div>
      )}

      {activeViewMode === "LESSON" && collapsed && !mobileOpen && (
        <div className="sidebar-collapsed-sections">
          {part.sections.map((section, index) => (
            <button
              key={section.id}
              className={`collapsed-section ${
                currentSectionId === section.id ? "active" : ""
              }`}
              onClick={() => handleSelectSection(section.id)}
              title={section.title}
            >
              {String(index + 1).padStart(2, "0")}
            </button>
          ))}
        </div>
      )}
    </aside>
  );
};
