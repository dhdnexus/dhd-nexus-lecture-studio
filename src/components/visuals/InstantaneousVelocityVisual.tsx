import React, { useState } from "react";

export const InstantaneousVelocityVisual: React.FC = () => {
  const [time, setTime] = useState(5);

  const position = 2 * time + 0.5 * time * time;
  const velocity = 2 + time;

  return (
    <div className="concept-visual instantaneous-velocity-visual">
      <div className="concept-visual-header">
        <span>INTERACTIVE CONCEPT VISUAL</span>
        <strong>Instantaneous Velocity</strong>
      </div>

      <div className="iv-intro">
        Average velocity describes motion over a time interval.
        Instantaneous velocity asks: <strong>how fast is position changing right now?</strong>
      </div>

      <div className="iv-controls">
        <label htmlFor="velocity-time">
          Time: <strong>{time.toFixed(1)} s</strong>
        </label>

        <input
          id="velocity-time"
          type="range"
          min="0"
          max="10"
          step="0.1"
          value={time}
          onChange={(e) => setTime(Number(e.target.value))}
        />
      </div>

      <div className="iv-display">
        <div className="iv-metric">
          <span>POSITION</span>
          <strong>{position.toFixed(2)} m</strong>
        </div>

        <div className="iv-arrow">→</div>

        <div className="iv-metric iv-highlight">
          <span>INSTANTANEOUS VELOCITY</span>
          <strong>{velocity.toFixed(2)} m/s</strong>
        </div>
      </div>

      <div className="iv-formula">
        <span>Mathematical meaning</span>
        <strong>
          v = lim<sub>Δt → 0</sub> Δx / Δt
        </strong>
      </div>

      <div className="iv-takeaway">
        <strong>Teaching anchor:</strong> instantaneous velocity is the rate
        of change of position at a particular instant.
      </div>
    </div>
  );
};
