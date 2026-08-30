import React, { useState } from "react";

const TIME_WINDOW = 6;
const AXIS_MIN_X = 70;
const AXIS_MAX_X = 750;

const PANELS = {
  x: { top: 20, bottom: 150 },
  v: { top: 190, bottom: 320 },
  a: { top: 360, bottom: 440 }
};

const timeToX = (t: number) =>
  AXIS_MIN_X + (t / TIME_WINDOW) * (AXIS_MAX_X - AXIS_MIN_X);

export const DerivativeChainVisual: React.FC = () => {
  const [initialVelocity, setInitialVelocity] = useState(2);
  const [acceleration, setAcceleration] = useState(1.5);
  const [cursorTime, setCursorTime] = useState(3);

  const positionAt = (t: number) =>
    initialVelocity * t + 0.5 * acceleration * t * t;
  const velocityAt = (t: number) => initialVelocity + acceleration * t;

  const xAtCursor = positionAt(cursorTime);
  const vAtCursor = velocityAt(cursorTime);
  const xMax = Math.max(positionAt(TIME_WINDOW), 1);
  const vMax = Math.max(velocityAt(TIME_WINDOW), 1);
  const aMax = Math.max(acceleration * 1.3, 1);

  const valueToY = (
    value: number,
    max: number,
    panel: { top: number; bottom: number }
  ) => panel.bottom - (value / max) * (panel.bottom - panel.top);

  const xCurvePoints = (() => {
    const points: string[] = [];
    for (let t = 0; t <= TIME_WINDOW + 0.001; t += 0.15) {
      points.push(`${timeToX(t)},${valueToY(positionAt(t), xMax, PANELS.x)}`);
    }
    return points.join(" ");
  })();

  const tangentHalfSpan = 0.5;
  const tStart = Math.max(0, cursorTime - tangentHalfSpan);
  const tEnd = Math.min(TIME_WINDOW, cursorTime + tangentHalfSpan);
  const tangentX1 = timeToX(tStart);
  const tangentY1 = valueToY(
    xAtCursor + vAtCursor * (tStart - cursorTime),
    xMax,
    PANELS.x
  );
  const tangentX2 = timeToX(tEnd);
  const tangentY2 = valueToY(
    xAtCursor + vAtCursor * (tEnd - cursorTime),
    xMax,
    PANELS.x
  );

  const vLineY0 = valueToY(velocityAt(0), vMax, PANELS.v);
  const vLineYEnd = valueToY(velocityAt(TIME_WINDOW), vMax, PANELS.v);
  const vBaselineY = PANELS.v.bottom;

  const aLineY = valueToY(acceleration, aMax, PANELS.a);

  return (
    <section className="interactive-visual">
      <div className="visual-header">
        <div>
          <span className="visual-kicker">INTERACTIVE MODEL</span>
          <h3>Differentiating Down, Integrating Back Up</h3>
          <p>
            Move the time cursor and watch the tangent gradient of x(t) equal
            the value of v(t), and the gradient of v(t) equal the constant
            value of a(t) — while the shaded area under v(t) reproduces x(t).
          </p>
        </div>
      </div>

      <div className="graph-visual-svg-wrap">
        <svg viewBox="0 0 800 460" className="graph-visual-svg">
          {/* Panel labels */}
          <text x="20" y="30" fill="#7dd3fc" fontSize="12" fontFamily="monospace" fontWeight="bold">x(t)</text>
          <text x="20" y="200" fill="#6ee7b7" fontSize="12" fontFamily="monospace" fontWeight="bold">v(t) = dx/dt</text>
          <text x="20" y="370" fill="#fca5a5" fontSize="12" fontFamily="monospace" fontWeight="bold">a(t) = dv/dt</text>

          {/* Panel baselines */}
          <line x1={AXIS_MIN_X} y1={PANELS.x.bottom} x2={AXIS_MAX_X} y2={PANELS.x.bottom} stroke="#334155" strokeWidth="1.5" />
          <line x1={AXIS_MIN_X} y1={PANELS.v.bottom} x2={AXIS_MAX_X} y2={PANELS.v.bottom} stroke="#334155" strokeWidth="1.5" />
          <line x1={AXIS_MIN_X} y1={PANELS.a.bottom} x2={AXIS_MAX_X} y2={PANELS.a.bottom} stroke="#334155" strokeWidth="1.5" />

          {/* Cursor line across all three panels */}
          <line x1={timeToX(cursorTime)} y1={PANELS.x.top - 5} x2={timeToX(cursorTime)} y2={PANELS.a.bottom + 5} stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="5 4" />

          {/* --- x(t) panel --- */}
          <polyline points={xCurvePoints} fill="none" stroke="#38bdf8" strokeWidth="3" />
          <line x1={tangentX1} y1={tangentY1} x2={tangentX2} y2={tangentY2} stroke="#f59e0b" strokeWidth="2.5" />
          <circle cx={timeToX(cursorTime)} cy={valueToY(xAtCursor, xMax, PANELS.x)} r="6" fill="#38bdf8" stroke="#ffffff" strokeWidth="2" />

          {/* --- v(t) panel --- */}
          <polygon
            points={`${timeToX(0)},${vBaselineY} ${timeToX(0)},${vLineY0} ${timeToX(cursorTime)},${valueToY(vAtCursor, vMax, PANELS.v)} ${timeToX(cursorTime)},${vBaselineY}`}
            fill="#10b981"
            fillOpacity="0.22"
          />
          <line x1={timeToX(0)} y1={vLineY0} x2={timeToX(TIME_WINDOW)} y2={vLineYEnd} stroke="#34d399" strokeWidth="3" />
          <circle cx={timeToX(cursorTime)} cy={valueToY(vAtCursor, vMax, PANELS.v)} r="6" fill="#34d399" stroke="#ffffff" strokeWidth="2" />

          {/* --- a(t) panel --- */}
          <line x1={timeToX(0)} y1={aLineY} x2={timeToX(TIME_WINDOW)} y2={aLineY} stroke="#f87171" strokeWidth="3" />
          <circle cx={timeToX(cursorTime)} cy={aLineY} r="6" fill="#f87171" stroke="#ffffff" strokeWidth="2" />

          <text x={AXIS_MAX_X - 30} y={PANELS.a.bottom + 20} fill="#64748b" fontSize="11" fontFamily="monospace">t (s)</text>
        </svg>
      </div>

      <div className="graph-controls">
        <div className="graph-control">
          <label htmlFor="dc-u">
            Initial velocity u: <strong>{initialVelocity.toFixed(1)} m/s</strong>
          </label>
          <input id="dc-u" type="range" min="0" max="6" step="0.5" value={initialVelocity} onChange={(e) => setInitialVelocity(Number(e.target.value))} />
        </div>

        <div className="graph-control">
          <label htmlFor="dc-a">
            Acceleration a: <strong>{acceleration.toFixed(1)} m/s²</strong>
          </label>
          <input id="dc-a" type="range" min="0.5" max="3" step="0.25" value={acceleration} onChange={(e) => setAcceleration(Number(e.target.value))} />
        </div>

        <div className="graph-control">
          <label htmlFor="dc-t">
            Time cursor t: <strong>{cursorTime.toFixed(1)} s</strong>
          </label>
          <input id="dc-t" type="range" min="0" max={TIME_WINDOW} step="0.1" value={cursorTime} onChange={(e) => setCursorTime(Number(e.target.value))} />
        </div>
      </div>

      <div className="coordinate-readout">
        <div>
          <span>x(t) — POSITION</span>
          <strong>{xAtCursor.toFixed(2)} m</strong>
        </div>

        <div>
          <span>v(t) = dx/dt — TANGENT GRADIENT OF x(t)</span>
          <strong>{vAtCursor.toFixed(2)} m/s</strong>
        </div>

        <div className="coordinate-primary">
          <span>a(t) = dv/dt — GRADIENT OF v(t)</span>
          <strong>{acceleration.toFixed(2)} m/s² (constant)</strong>
        </div>
      </div>

      <div className="visual-teaching-note">
        <strong>Teaching point:</strong> the amber tangent line in the top
        panel has the same gradient as the marked point's height in the
        middle panel — that is what v = dx/dt means. The shaded area under
        v(t), from 0 to the cursor, equals x(t) at the cursor — that is
        integration reversing differentiation.
      </div>
    </section>
  );
};
