import React, { useState } from "react";

const AXIS_MIN_T = 70;
const AXIS_MAX_T = 730;
const AXIS_BASE_Y = 260;
const AXIS_TOP_Y = 30;

export const SuvatGraphicalDerivationVisual: React.FC = () => {
  const [initialVelocity, setInitialVelocity] = useState(4);
  const [acceleration, setAcceleration] = useState(2);
  const [time, setTime] = useState(5);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const finalVelocity = initialVelocity + acceleration * time;
  const displacement = 0.5 * (initialVelocity + finalVelocity) * time;
  const displacementFromSuvat =
    initialVelocity * time + 0.5 * acceleration * time * time;
  const finalVelocitySquaredCheck =
    initialVelocity * initialVelocity + 2 * acceleration * displacement;

  const vMax = Math.max(finalVelocity, initialVelocity, 1) * 1.2;

  const timeToX = (t: number) =>
    AXIS_MIN_T + (t / Math.max(time, 0.1)) * (AXIS_MAX_T - AXIS_MIN_T);
  const velocityToY = (v: number) =>
    AXIS_BASE_Y - (v / vMax) * (AXIS_BASE_Y - AXIS_TOP_Y);

  const originY = velocityToY(0);
  const startPointY = velocityToY(initialVelocity);
  const endPointY = velocityToY(finalVelocity);
  const endX = timeToX(time);

  const revealedCount = currentStepIndex + 1;

  const revealNext = () => {
    setCurrentStepIndex((previous) => Math.min(previous + 1, teachingSteps.length - 1));
  };
  const revealPrevious = () => {
    setCurrentStepIndex((previous) => Math.max(previous - 1, 0));
  };
  const resetSteps = () => setCurrentStepIndex(0);

  const teachingSteps = [
    {
      label: "THE GRAPH",
      content: (
        <>
          For constant acceleration, the velocity–time graph is a straight
          line rising from the initial velocity u = {initialVelocity} m/s
          at t = 0 to the final velocity v = {finalVelocity.toFixed(1)} m/s
          at t = {time} s.
        </>
      )
    },
    {
      label: "GRADIENT = ACCELERATION",
      content: (
        <>
          The gradient of the line is rise over run:
          <div className="iv-teaching-equation">
            a = (v − u) / t = ({finalVelocity.toFixed(1)} − {initialVelocity}) / {time} ={" "}
            <strong>{acceleration.toFixed(2)} m/s²</strong>
          </div>
          Rearranged, this is the first equation of motion:
          <div className="iv-teaching-equation">v = u + at</div>
        </>
      )
    },
    {
      label: "AREA = DISPLACEMENT",
      content: (
        <>
          The shaded region under the line, from 0 to t, is a trapezium
          with parallel sides u and v and width t:
          <div className="iv-teaching-equation">
            s = ½(u + v)t = ½({initialVelocity} + {finalVelocity.toFixed(1)})({time}) ={" "}
            <strong>{displacement.toFixed(1)} m</strong>
          </div>
        </>
      )
    },
    {
      label: "COMBINE GRADIENT AND AREA",
      content: (
        <>
          Substituting v = u + at (Step 2) into s = ½(u+v)t (Step 3)
          eliminates v and gives the second equation of motion:
          <div className="iv-teaching-equation">s = ut + ½at²</div>
          <div className="iv-teaching-equation">
            s = ({initialVelocity})({time}) + ½({acceleration.toFixed(1)})({time})² ={" "}
            <strong>{displacementFromSuvat.toFixed(1)} m</strong>
          </div>
          This matches the area result from Step 3, confirming the
          substitution.
        </>
      )
    },
    {
      label: "ELIMINATE TIME",
      content: (
        <>
          Solving v = u + at for t and substituting into s = ½(u+v)t
          removes t entirely, giving the third equation of motion:
          <div className="iv-teaching-equation">v² = u² + 2as</div>
          <div className="iv-teaching-equation">
            v² = ({initialVelocity})² + 2({acceleration.toFixed(1)})({displacement.toFixed(1)}) ={" "}
            <strong>{finalVelocitySquaredCheck.toFixed(1)} m²/s²</strong>
          </div>
          Compare with v² directly:
          <div className="iv-teaching-equation">
            v² = ({finalVelocity.toFixed(1)})² = <strong>{(finalVelocity * finalVelocity).toFixed(1)} m²/s²</strong>
          </div>
        </>
      )
    },
    {
      label: "THE BIG PICTURE",
      content: (
        <>
          One straight-line v–t graph, read two ways — its gradient and its
          area — generates all three equations of motion:
          <div className="iv-teaching-equation">v = u + at</div>
          <div className="iv-teaching-equation">s = ut + ½at²</div>
          <div className="iv-teaching-equation">v² = u² + 2as</div>
          These are not independent formulas to memorise. Part 3 will add a
          fourth, algebraically equivalent form and build a framework for
          choosing between them.
        </>
      )
    }
  ];

  return (
    <div className="concept-visual suvat-derivation-visual">
      <div className="concept-visual-header">
        <span>INTERACTIVE CONCEPT VISUAL</span>
        <strong>Deriving the Equations of Motion</strong>
      </div>

      <div className="iv-intro">
        Adjust u, a and t to change the graph. Every equation of motion
        below is read directly from this one straight line —{" "}
        <strong>its gradient and the area beneath it.</strong>
      </div>

      <div className="graph-controls">
        <div className="graph-control">
          <label htmlFor="suvat-u">
            Initial velocity u: <strong>{initialVelocity} m/s</strong>
          </label>
          <input
            id="suvat-u"
            type="range"
            min="0"
            max="8"
            step="1"
            value={initialVelocity}
            onChange={(e) => setInitialVelocity(Number(e.target.value))}
          />
        </div>

        <div className="graph-control">
          <label htmlFor="suvat-a">
            Acceleration a: <strong>{acceleration.toFixed(1)} m/s²</strong>
          </label>
          <input
            id="suvat-a"
            type="range"
            min="0.5"
            max="4"
            step="0.5"
            value={acceleration}
            onChange={(e) => setAcceleration(Number(e.target.value))}
          />
        </div>

        <div className="graph-control">
          <label htmlFor="suvat-t">
            Time t: <strong>{time} s</strong>
          </label>
          <input
            id="suvat-t"
            type="range"
            min="2"
            max="8"
            step="1"
            value={time}
            onChange={(e) => setTime(Number(e.target.value))}
          />
        </div>
      </div>

      <div className="graph-visual-svg-wrap">
        <svg viewBox="0 0 800 300" className="graph-visual-svg">
          <line x1={AXIS_MIN_T} y1={AXIS_BASE_Y} x2={AXIS_MAX_T} y2={AXIS_BASE_Y} stroke="#64748b" strokeWidth="2" />
          <line x1={AXIS_MIN_T} y1={AXIS_BASE_Y} x2={AXIS_MIN_T} y2={AXIS_TOP_Y} stroke="#475569" strokeWidth="2" />

          <polygon
            points={`${AXIS_MIN_T},${originY} ${AXIS_MIN_T},${startPointY} ${endX},${endPointY} ${endX},${originY}`}
            fill="#38bdf8"
            fillOpacity="0.18"
          />

          <line x1={AXIS_MIN_T} y1={startPointY} x2={endX} y2={endPointY} stroke="#38bdf8" strokeWidth="3" />

          <line x1={AXIS_MIN_T} y1={startPointY} x2={endX} y2={startPointY} stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="5 4" />
          <line x1={endX} y1={startPointY} x2={endX} y2={endPointY} stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="5 4" />

          <text x={(AXIS_MIN_T + endX) / 2} y={startPointY + 16} textAnchor="middle" fill="#f59e0b" fontSize="11" fontFamily="monospace">run = t</text>
          <text x={endX + 8} y={(startPointY + endPointY) / 2} fill="#f59e0b" fontSize="11" fontFamily="monospace">rise = v−u</text>

          <circle cx={AXIS_MIN_T} cy={startPointY} r="6" fill="#38bdf8" stroke="#ffffff" strokeWidth="2" />
          <circle cx={endX} cy={endPointY} r="6" fill="#10b981" stroke="#ffffff" strokeWidth="2" />

          <text x={AXIS_MIN_T + 6} y={startPointY - 10} fill="#7dd3fc" fontSize="11" fontFamily="monospace">u = {initialVelocity} m/s</text>
          <text x={endX - 60} y={endPointY - 10} fill="#6ee7b7" fontSize="11" fontFamily="monospace">v = {finalVelocity.toFixed(1)} m/s</text>

          <text x={endX + 4} y={AXIS_BASE_Y + 20} fill="#64748b" fontSize="11" fontFamily="monospace">t = {time}s</text>
          <text x="20" y="20" fill="#64748b" fontSize="11" fontFamily="monospace">v (m/s)</text>
        </svg>
      </div>

      <div className="visual-teaching-note">
        <strong>Reading the diagram:</strong> the dashed amber lines mark the
        gradient triangle (rise over run); the shaded trapezium is the area
        under the line, from t = 0 to t = {time}s.
      </div>

      <div className="iv-teaching-reference">
        <div className="iv-teaching-header">
          <div className="visual-kicker">TEACHING REFERENCE</div>
          <strong>Gradient and Area → The Equations of Motion</strong>
          <span className="iv-step-count">
            Step {revealedCount} of {teachingSteps.length}
          </span>
        </div>

        <div className="iv-teaching-steps">
          {teachingSteps.slice(0, revealedCount).map((step, index) => (
            <div className="iv-teaching-step" key={step.label}>
              <div className="iv-teaching-step-number">{index + 1}</div>
              <div className="iv-teaching-step-body">
                <strong>{step.label}</strong>
                <div>{step.content}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="iv-teaching-controls">
          <button type="button" className="visual-button" onClick={revealPrevious} disabled={currentStepIndex === 0}>
            Previous Step
          </button>
          <button type="button" className="visual-button" onClick={resetSteps} disabled={currentStepIndex === 0}>
            Reset
          </button>
          <button
            type="button"
            className="visual-button"
            onClick={revealNext}
            disabled={currentStepIndex === teachingSteps.length - 1}
          >
            Reveal Next Step
          </button>
        </div>
      </div>
    </div>
  );
};
