import React from "react";
import { AlertTriangle, Clock, HelpCircle, Mic } from "lucide-react";
import type { LecturerCue } from "../../types/course";

export const LecturerPanel: React.FC<{ cue: LecturerCue }> = ({ cue }) => (
  <aside className="lecturer-panel">
    <div className="hud-title">
      <Mic size={16} />
      <span>Lecturer Delivery HUD</span>
    </div>

    {cue.timeGuidanceMin && (
      <div className="hud-time"><Clock size={14} /> ~{cue.timeGuidanceMin} min</div>
    )}

    <section className="hud-block script-block">
      <label>Spoken Script Prompt</label>
      <p>"{cue.narrationPrompt}"</p>
    </section>

    <section className="hud-block">
      <label>Key Teaching Anchors</label>
      <ul>{cue.keyPoints.map((point) => <li key={point}>{point}</li>)}</ul>
    </section>

    {cue.misconceptionAlert && (
      <section className="hud-block alert-block">
        <label><AlertTriangle size={13} /> Misconception Alert</label>
        <p>{cue.misconceptionAlert}</p>
      </section>
    )}

    {cue.hallQuestion && (
      <section className="hud-block question-block">
        <label><HelpCircle size={13} /> Hall Question</label>
        <p>{cue.hallQuestion}</p>
        {cue.expectedAnswer && <small>Expected: {cue.expectedAnswer}</small>}
      </section>
    )}
  </aside>
);
