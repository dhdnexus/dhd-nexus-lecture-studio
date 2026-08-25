import React from "react";

export const SpeedVelocityVisual: React.FC = () => (
  <div className="concept-visual speed-velocity-visual">
    <div className="concept-visual-header">
      <span>CONCEPT VISUAL</span>
      <strong>Speed vs Velocity</strong>
    </div>

    <div className="sv-comparison">
      <div className="sv-card">
        <div className="sv-label">SPEED</div>
        <div className="sv-question">How much ground is covered per unit time?</div>
        <div className="sv-formula">
          Average speed = total distance / elapsed time
        </div>
        <div className="sv-type">Scalar</div>
      </div>

      <div className="sv-divider">VS</div>

      <div className="sv-card">
        <div className="sv-label">VELOCITY</div>
        <div className="sv-question">How quickly does position change?</div>
        <div className="sv-formula">
          Average velocity = displacement / elapsed time
        </div>
        <div className="sv-type">Vector</div>
      </div>
    </div>

    <div className="sv-takeaway">
      <strong>Key distinction:</strong> speed uses total distance;
      velocity uses displacement.
    </div>
  </div>
);
