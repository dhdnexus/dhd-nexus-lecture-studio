import React, { useState } from "react";

export const AccelerationVisual: React.FC = () => {
  const [acceleration, setAcceleration] = useState(2);
  const [time, setTime] = useState(3);

  const initialVelocity = 4;
  const finalVelocity = initialVelocity + acceleration * time;

  return (
    <div className="concept-visual acceleration-visual">
      <div className="concept-visual-header">
        <span>INTERACTIVE CONCEPT VISUAL</span>
        <strong>Acceleration</strong>
      </div>

      <div className="acc-intro">
        Acceleration tells us <strong>how velocity changes with time</strong>.
        A change in velocity can involve magnitude, direction, or both.
      </div>

      <div className="acc-controls">
        <div className="acc-control">
          <label htmlFor="acceleration-value">
            Acceleration: <strong>{acceleration.toFixed(1)} m/s²</strong>
          </label>
          <input
            id="acceleration-value"
            type="range"
            min="-4"
            max="4"
            step="0.1"
            value={acceleration}
            onChange={(e) => setAcceleration(Number(e.target.value))}
          />
        </div>

        <div className="acc-control">
          <label htmlFor="acceleration-time">
            Time interval: <strong>{time.toFixed(1)} s</strong>
          </label>
          <input
            id="acceleration-time"
            type="range"
            min="0"
            max="6"
            step="0.1"
            value={time}
            onChange={(e) => setTime(Number(e.target.value))}
          />
        </div>
      </div>

      <div className="acc-equation">
        <span>Relationship</span>
        <strong>Δv = aΔt</strong>
      </div>

      <div className="acc-display">
        <div className="acc-metric">
          <span>INITIAL VELOCITY</span>
          <strong>{initialVelocity.toFixed(1)} m/s</strong>
        </div>

        <div className="acc-arrow">→</div>

        <div className="acc-metric acc-result">
          <span>FINAL VELOCITY</span>
          <strong>{finalVelocity.toFixed(1)} m/s</strong>
        </div>
      </div>

      <div className="acc-change">
        <span>CHANGE IN VELOCITY</span>
        <strong>
          Δv = {(finalVelocity - initialVelocity).toFixed(1)} m/s
        </strong>
      </div>

      <div className="acc-takeaway">
        <strong>Teaching anchor:</strong> an object can accelerate by
        changing its speed, its direction, or both.
      </div>
    </div>
  );
};
