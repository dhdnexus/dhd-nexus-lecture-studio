import React from "react";
import { Maximize2, PanelRight } from "lucide-react";

interface Props {
  lecturerMode: boolean;
  onToggleLecturerMode: () => void;
  onToggleFullscreen: () => void;
}

export const StudioHeader: React.FC<Props> = ({
  lecturerMode,
  onToggleLecturerMode,
  onToggleFullscreen
}) => (
  <header className="studio-header">
    <div className="brand-block">
      <p className="eyebrow">DHD NEXUS PHYSICS ACADEMY</p>
      <h1>Mastering Kinematics</h1>
      <p className="subtitle">Episode 1 — The Language of Motion</p>
    </div>

    <div className="header-actions">
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
