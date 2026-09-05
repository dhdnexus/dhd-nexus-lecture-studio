import React from "react";
import { Maximize2, PanelRight, Menu } from "lucide-react";

interface Props {
  title: string;
  subtitle: string;
  lecturerMode: boolean;
  onToggleLecturerMode: () => void;
  onToggleFullscreen: () => void;
  onToggleMobileMenu: () => void;
  onOpenNavigator: () => void;
  onOpenHome: () => void;
}

export const StudioHeader: React.FC<Props> = ({ lecturerMode, onToggleLecturerMode, onToggleFullscreen, onToggleMobileMenu }) => (
  <header className="studio-header">
    <button className="brand-block studio-home-link" onClick={() => window.dispatchEvent(new CustomEvent("dhd-studio-home"))} aria-label="Return to DHD Nexus Lecture Studio home">
      <span className="studio-brand-wordmark">DHD NEXUS</span>
      <span className="studio-brand-submark">LECTURE STUDIO</span>
    </button>
    <div className="header-actions">
      <button className="icon-button mobile-menu-button" onClick={onToggleMobileMenu} title="Open navigation" aria-label="Open navigation"><Menu size={16} /></button>
      <button className="icon-button" onClick={onToggleLecturerMode} title="Toggle Lecturer HUD"><PanelRight size={15} /><span>{lecturerMode ? "HUD" : "HUD Off"}</span></button>
      <button className="icon-button" onClick={onToggleFullscreen} title="Fullscreen" aria-label="Fullscreen"><Maximize2 size={15} /></button>
    </div>
  </header>
);
