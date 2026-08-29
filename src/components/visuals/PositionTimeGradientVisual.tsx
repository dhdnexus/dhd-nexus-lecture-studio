import React, { useMemo, useState } from "react";

/*
 * Mathematical model
 *
 * x(t) = 3t², for 0 <= t <= 6 s (trolley released from rest,
 * constant acceleration a = 6 m/s², matching Part 2 Worked Example 1).
 *
 * v(t) = dx/dt = 6t  (the exact tangent gradient, used only to draw
 * the tangent line and as a reference value — never shown as the
 * primary method, since differentiation is introduced later in the
 * series. The primary teaching method is the secant-to-tangent
 * graphical limit.)
 */
const TIME_MAX = 6;
const position = (t: number) => 3 * t * t;

export const PositionTimeGradientVisual: React.FC = () => {
  const [anchorTime, setAnchorTime] = useState(1.5);
  const [intervalWidth, setIntervalWidth] = useState(3);

  const maxInterval = Math.max(0.1, Number((TIME_MAX - anchorTime).toFixed(2)));
  const clampedInterval = Math.min(intervalWidth, maxInterval);
  const endTime = anchorTime + clampedInterval;

  const x1 = position(anchorTime);
  const x2 = position(endTime);
  const secantGradient = (x2 - x1) / clampedInterval;

  const tangentGradient = 6 * anchorTime;

  const curvePoints = useMemo(() => {
    const points: string[] = [];
    for (let t = 0; t <= TIME_MAX + 0.001; t += 0.1) {
      points.push(`${timeToX(t)},${positionToY(position(t))}`);
    }
    return points.join(" ");
  }, []);

  const tangentHalfSpan = 0.6;
  const tangentStart = Math.max(0, anchorTime - tangentHalfSpan);
  const tangentEnd = Math.min(TIME_MAX, anchorTime + tangentHalfSpan);
  const tangentX1 = timeToX(tangentStart);
  const tangentY1 = positionToY(x1 + tangentGradient * (tangentStart - anchorTime));
  const tangentX2 = timeToX(tangentEnd);
  const tangentY2 = positionToY(x1 + tangentGradient * (tangentEnd - anchorTime));

  const gradientDifference = Math.abs(secantGradient - tangentGradient);

  return (
    <section className="interactive-visual">
      <div className="visual-header">
        <div>
          <span className="visual-kicker">INTERACTIVE MODEL</span>
          <h3>Secant vs Tangent Gradient</h3>
          <p>
            A trolley on a sloped track has position x(t) = 3t². Shrink the
            interval width to watch the secant line rotate onto the tangent
            line — average velocity converging to instantaneous velocity.
          </p>
        </div>
      </div>

      <div className="graph-visual-svg-wrap">
        <svg viewBox="0 0 800 340" className="graph-visual-svg">
          <line x1="60" y1="290" x2="760" y2="290" stroke="#475569" strokeWidth="2" />
          <line x1="60" y1="290" x2="60" y2="20" stroke="#475569" strokeWidth="2" />

          {[0, 1, 2, 3, 4, 5, 6].map((t) => (
            <g key={`t-${t}`}>
              <line x1={timeToX(t)} y1="285" x2={timeToX(t)} y2="295" stroke="#64748b" strokeWidth="1.5" />
              <text x={timeToX(t)} y="308" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="monospace">{t}s</text>
            </g>
          ))}

          {[0, 20, 40, 60, 80, 100].map((xVal) => (
            <g key={`x-${xVal}`}>
              <line x1="52" y1={positionToY(xVal)} x2="60" y2={positionToY(xVal)} stroke="#64748b" strokeWidth="1.5" />
              <text x="46" y={positionToY(xVal) + 4} textAnchor="end" fill="#94a3b8" fontSize="10" fontFamily="monospace">{xVal}</text>
            </g>
          ))}

          <text x="20" y="20" fill="#64748b" fontSize="11" fontFamily="monospace">x (m)</text>
          <text x="730" y="325" fill="#64748b" fontSize="11" fontFamily="monospace">t (s)</text>

          <polyline points={curvePoints} fill="none" stroke="#475569" strokeWidth="3" />

          <line
            x1={timeToX(anchorTime)}
            y1={positionToY(x1)}
            x2={timeToX(endTime)}
            y2={positionToY(x2)}
            stroke="#f59e0b"
            strokeWidth="3"
          />

          <line
            x1={tangentX1}
            y1={tangentY1}
            x2={tangentX2}
            y2={tangentY2}
            stroke="#38bdf8"
            strokeWidth="3"
            strokeDasharray="6 5"
          />

          <circle cx={timeToX(anchorTime)} cy={positionToY(x1)} r="7" fill="#38bdf8" stroke="#ffffff" strokeWidth="2" />
          {clampedInterval > 0.06 && (
            <circle cx={timeToX(endTime)} cy={positionToY(x2)} r="7" fill="#f59e0b" stroke="#ffffff" strokeWidth="2" />
          )}
        </svg>
      </div>

      <div className="graph-controls">
        <div className="graph-control">
          <label htmlFor="anchor-time">
            Anchor time t₁: <strong>{anchorTime.toFixed(1)} s</strong>
          </label>
          <input
            id="anchor-time"
            type="range"
            min="0.3"
            max="5.0"
            step="0.1"
            value={anchorTime}
            onChange={(e) => setAnchorTime(Number(e.target.value))}
          />
        </div>

        <div className="graph-control">
          <label htmlFor="interval-width">
            Interval width Δt: <strong>{clampedInterval.toFixed(2)} s</strong>
          </label>
          <input
            id="interval-width"
            type="range"
            min="0.05"
            max={maxInterval}
            step="0.05"
            value={clampedInterval}
            onChange={(e) => setIntervalWidth(Number(e.target.value))}
          />
        </div>
      </div>

      <div className="coordinate-readout">
        <div>
          <span>SECANT GRADIENT (AVERAGE v)</span>
          <strong>{secantGradient.toFixed(2)} m/s</strong>
        </div>

        <div>
          <span>TANGENT GRADIENT (INSTANTANEOUS v)</span>
          <strong>{tangentGradient.toFixed(2)} m/s</strong>
        </div>

        <div className="coordinate-primary">
          <span>DIFFERENCE</span>
          <strong>{gradientDifference.toFixed(2)} m/s</strong>
        </div>
      </div>

      <div className="visual-teaching-note">
        <strong>Teaching point:</strong> as Δt shrinks toward zero, the orange
        secant line rotates toward the blue dashed tangent line, and the
        secant gradient (average velocity) converges to the tangent gradient
        (instantaneous velocity) at t₁ — the graphical meaning of v = dx/dt.
      </div>
    </section>
  );
};

function timeToX(t: number): number {
  return 60 + (t / TIME_MAX) * 700;
}

function positionToY(x: number): number {
  const maxX = 3 * TIME_MAX * TIME_MAX;
  return 290 - (x / maxX) * 270;
}
