import React from "react";
import { Maximize2, PanelRight, Menu } from "lucide-react";

interface Props {
  title: string;
  subtitle: string;
  lecturerMode: boolean;
  onToggleLecturerMode: () => void;
  onToggleFullscreen: () => void;
  onToggleMobileMenu: () => void;
}

export const StudioHeader: React.FC<Props> = ({
  title,
  subtitle,
  lecturerMode,
  onToggleLecturerMode,
  onToggleFullscreen,
  onToggleMobileMenu
}) => (
  <header className="studio-header">
    <div className="brand-block">
      <p className="eyebrow">DHD NEXUS PHYSICS ACADEMY</p>
      <h1>{title}</h1>
      <p className="subtitle">{subtitle}</p>
    </div>

    <div className="header-actions">
      <button
        className="icon-button mobile-menu-button"
        onClick={onToggleMobileMenu}
        aria-label="Open navigation"
      >
        <Menu size={17} />
      </button>

      <button className="icon-button" onClick={onToggleLecturerMode}>
        <PanelRight size={17} />
        <span>{lecturerMode ? "Lecturer HUD" : "Lecturer HUD Off"}</span>
      </button>

      <button className="icon-button" onClick={onToggleFullscreen}>
        <Maximize2 size={17} />
      </button>
    </div>
  </header>
);
