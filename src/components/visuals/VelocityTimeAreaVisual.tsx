import React, { useState } from "react";

const TIME_WINDOW = 8;
const MID_Y = 170;
const HALF_HEIGHT = 130;
const AXIS_MIN_T = 60;
const AXIS_MAX_T = 740;

export const VelocityTimeAreaVisual: React.FC = () => {
  const [initialVelocity, setInitialVelocity] = useState(6);
  const [acceleration, setAcceleration] = useState(-1.5);

  const velocityAt = (t: number) => initialVelocity + acceleration * t;
  const positionAt = (t: number) =>
    initialVelocity * t + 0.5 * acceleration * t * t;

  const v0 = velocityAt(0);
  const vEnd = velocityAt(TIME_WINDOW);

  const turningTime =
    acceleration !== 0 ? -initialVelocity / acceleration : null;
  const hasTurningPoint =
    turningTime !== null && turningTime > 0.05 && turningTime < TIME_WINDOW - 0.05;

  const displacement = positionAt(TIME_WINDOW);

  const distance = hasTurningPoint
    ? Math.abs(positionAt(turningTime as number)) +
      Math.abs(positionAt(TIME_WINDOW) - positionAt(turningTime as number))
    : Math.abs(positionAt(TIME_WINDOW));

  const vRange = Math.max(Math.abs(v0), Math.abs(vEnd), 2) * 1.2;

  const timeToX = (t: number) =>
    AXIS_MIN_T + (t / TIME_WINDOW) * (AXIS_MAX_T - AXIS_MIN_T);
  const velocityToY = (v: number) => MID_Y - (v / vRange) * HALF_HEIGHT;

  interface Region {
    start: number;
    end: number;
    startV: number;
    endV: number;
  }

  const regions: Region[] = hasTurningPoint
    ? [
        { start: 0, end: turningTime as number, startV: v0, endV: 0 },
        { start: turningTime as number, end: TIME_WINDOW, startV: 0, endV: vEnd }
      ]
    : [{ start: 0, end: TIME_WINDOW, startV: v0, endV: vEnd }];

  return (
    <section className="interactive-visual">
      <div className="visual-header">
        <div>
          <span className="visual-kicker">INTERACTIVE MODEL</span>
          <h3>Area, Sign, and Reversal on a v–t Graph</h3>
          <p>
            Adjust the initial velocity and acceleration. When the line
            crosses the axis, the particle reverses direction — watch
            displacement and distance disagree.
          </p>
        </div>
      </div>

      <div className="graph-visual-svg-wrap">
        <svg viewBox="0 0 800 340" className="graph-visual-svg">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((t) => (
            <g key={`t-${t}`}>
              <line
                x1={timeToX(t)}
                y1={MID_Y - HALF_HEIGHT - 10}
                x2={timeToX(t)}
                y2={MID_Y + HALF_HEIGHT + 10}
                stroke="#1e293b"
                strokeWidth="1"
              />
              <text x={timeToX(t)} y={MID_Y + HALF_HEIGHT + 28} textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="monospace">
                {t}s
              </text>
            </g>
          ))}

          {regions.map((region, index) => {
            const isPositive = region.startV + region.endV >= 0;
            return (
              <polygon
                key={`region-${index}`}
                points={`${timeToX(region.start)},${MID_Y} ${timeToX(region.start)},${velocityToY(region.startV)} ${timeToX(region.end)},${velocityToY(region.endV)} ${timeToX(region.end)},${MID_Y}`}
                fill={isPositive ? "#10b981" : "#f43f5e"}
                fillOpacity="0.28"
                stroke="none"
              />
            );
          })}

          <line
            x1={AXIS_MIN_T}
            y1={MID_Y}
            x2={AXIS_MAX_T}
            y2={MID_Y}
            stroke="#64748b"
            strokeWidth="2"
          />
          <line
            x1={AXIS_MIN_T}
            y1={MID_Y - HALF_HEIGHT - 10}
            x2={AXIS_MIN_T}
            y2={MID_Y + HALF_HEIGHT + 10}
            stroke="#475569"
            strokeWidth="2"
          />

          <line
            x1={timeToX(0)}
            y1={velocityToY(v0)}
            x2={timeToX(TIME_WINDOW)}
            y2={velocityToY(vEnd)}
            stroke="#38bdf8"
            strokeWidth="3"
          />

          {hasTurningPoint && (
            <>
              <line
                x1={timeToX(turningTime as number)}
                y1={MID_Y - HALF_HEIGHT - 10}
                x2={timeToX(turningTime as number)}
                y2={MID_Y + HALF_HEIGHT + 10}
                stroke="#f59e0b"
                strokeWidth="1.5"
                strokeDasharray="5 4"
              />
              <text
                x={timeToX(turningTime as number)}
                y={MID_Y - HALF_HEIGHT - 16}
                textAnchor="middle"
                fill="#f59e0b"
                fontSize="10"
                fontFamily="monospace"
              >
                turning point, t = {(turningTime as number).toFixed(2)}s
              </text>
            </>
          )}

          <text x="20" y="24" fill="#64748b" fontSize="11" fontFamily="monospace">v (m/s)</text>
          <text x={AXIS_MAX_T - 40} y={MID_Y + HALF_HEIGHT + 46} fill="#64748b" fontSize="11" fontFamily="monospace">t (s)</text>

          <text x={AXIS_MIN_T + 10} y={velocityToY(v0) - 10} fill="#7dd3fc" fontSize="11" fontFamily="monospace">
            v₀ = {v0.toFixed(1)} m/s
          </text>
        </svg>
      </div>

      <div className="graph-controls">
        <div className="graph-control">
          <label htmlFor="v0-slider">
            Initial velocity u: <strong>{initialVelocity.toFixed(1)} m/s</strong>
          </label>
          <input
            id="v0-slider"
            type="range"
            min="-6"
            max="6"
            step="0.5"
            value={initialVelocity}
            onChange={(e) => setInitialVelocity(Number(e.target.value))}
          />
        </div>

        <div className="graph-control">
          <label htmlFor="a-slider">
            Acceleration a: <strong>{acceleration.toFixed(1)} m/s²</strong>
          </label>
          <input
            id="a-slider"
            type="range"
            min="-3"
            max="3"
            step="0.25"
            value={acceleration}
            onChange={(e) => setAcceleration(Number(e.target.value))}
          />
        </div>
      </div>

      <div className="coordinate-readout">
        <div>
          <span>GRADIENT (ACCELERATION)</span>
          <strong>{acceleration.toFixed(2)} m/s²</strong>
        </div>

        <div>
          <span>TOTAL DISTANCE</span>
          <strong>{distance.toFixed(2)} m</strong>
        </div>

        <div className="coordinate-primary">
          <span>NET DISPLACEMENT (SIGNED AREA)</span>
          <strong>
            {displacement >= 0 ? "+" : ""}
            {displacement.toFixed(2)} m
          </strong>
        </div>
      </div>

      <div className="visual-teaching-note">
        <strong>Teaching point:</strong> green shading is positive area
        (positive displacement contribution); red shading is negative area
        (negative displacement contribution). Displacement adds these areas
        with sign; distance adds their magnitudes. The two only agree when
        the line never crosses the axis.
      </div>
    </section>
  );
};
