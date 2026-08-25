import React from "react";

export const ZeroVelocityAccelerationVisual: React.FC = () => (
  <div className="zva-visual">
    <div className="zva-header">
      <span className="zva-kicker">CONCEPTUAL CONTRAST</span>
      <h3>Zero Velocity ≠ Zero Acceleration</h3>
      <p>Two physically different states that students often confuse.</p>
    </div>

    <div className="zva-grid">
      <div className="zva-case">
        <div className="zva-case-label">CASE A</div>
        <h4>At the apex of a vertical throw</h4>

        <div className="zva-diagram zva-apex">
          <div className="zva-ball">●</div>
          <div className="zva-apex-line" />
          <div className="zva-arrow">↓</div>
          <span className="zva-gravity">g</span>
        </div>

        <div className="zva-equations">
          <div><strong>v = 0</strong></div>
          <div><strong>a ≠ 0</strong></div>
        </div>

        <p>
          The object is momentarily at rest, but gravitational acceleration
          continues to act downward.
        </p>
      </div>

      <div className="zva-divider">VS</div>

      <div className="zva-case">
        <div className="zva-case-label">CASE B</div>
        <h4>Constant-velocity motion</h4>

        <div className="zva-diagram zva-cruise">
          <div className="zva-track" />
          <div className="zva-car">●</div>
          <div className="zva-motion-arrow">→</div>
          <span className="zva-velocity">v</span>
        </div>

        <div className="zva-equations">
          <div><strong>v ≠ 0</strong></div>
          <div><strong>a = 0</strong></div>
        </div>

        <p>
          The object continues moving, but its velocity is not changing,
          so its acceleration is zero.
        </p>
      </div>
    </div>

    <div className="zva-takeaway">
      <strong>Key principle:</strong> velocity describes the state of motion;
      acceleration describes how that state is changing.
    </div>
  </div>
);
