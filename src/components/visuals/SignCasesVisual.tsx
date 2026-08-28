import React, { useState } from "react";

const cases = [
  {
    id: "01",
    velocity: "+",
    acceleration: "+",
    result: "Speeding up",
    explanation:
      "A car accelerates forward from a traffic light. Taking forward as positive, both velocity and acceleration are positive, so its speed increases."
  },
  {
    id: "02",
    velocity: "+",
    acceleration: "−",
    result: "Slowing down",
    explanation:
      "A car moves forward while the driver applies the brakes. Taking forward as positive, velocity is positive but braking acceleration acts backward, so speed decreases."
  },
  {
    id: "03",
    velocity: "−",
    acceleration: "+",
    result: "Slowing down",
    explanation:
      "A car is reversing while the driver applies the brakes. Taking forward as positive, velocity is negative while the braking acceleration is positive, so speed decreases."
  },
  {
    id: "04",
    velocity: "−",
    acceleration: "−",
    result: "Speeding up",
    explanation:
      "A stone falls downward under gravity. Taking upward as positive, both velocity and gravitational acceleration are negative, so the stone's speed increases."
  }
];

const teachingSteps = [
  {
    title: "THE FOUR POSSIBILITIES",
    content:
      "In one-dimensional motion, velocity and acceleration can each be positive or negative. This produces four possible sign combinations."
  },
  {
    title: "CASE 1 — v > 0, a > 0",
    content:
      "A car accelerates forward from a traffic light. Taking forward as positive, both velocity and acceleration are positive, so its speed increases."
  },
  {
    title: "CASE 2 — v > 0, a < 0",
    content:
      "A car moves forward while the driver applies the brakes. Taking forward as positive, velocity is positive but braking acceleration acts backward, so speed decreases."
  },
  {
    title: "CASE 3 — v < 0, a > 0",
    content:
      "A car is reversing while the driver applies the brakes. Taking forward as positive, velocity is negative while the braking acceleration is positive, so speed decreases."
  },
  {
    title: "CASE 4 — v < 0, a < 0",
    content:
      "A stone falls downward under gravity. Taking upward as positive, both velocity and gravitational acceleration are negative, so the stone's speed increases."
  },
  {
    title: "THE GENERAL RULE",
    content:
      "Velocity and acceleration in the same direction mean speeding up. Velocity and acceleration in opposite directions mean slowing down."
  },
  {
    title: "THE CRITICAL MISCONCEPTION",
    content:
      "Negative acceleration does not automatically mean an object is slowing down. Whether speed increases or decreases depends on the relative directions of velocity and acceleration."
  }
];

export const SignCasesVisual: React.FC = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const revealNext = () => {
    setCurrentStepIndex((previous) =>
      Math.min(previous + 1, teachingSteps.length - 1)
    );
  };

  const previousStep = () => {
    setCurrentStepIndex((previous) => Math.max(previous - 1, 0));
  };

  const resetSteps = () => {
    setCurrentStepIndex(0);
  };

  return (
    <section
      className="sign-cases-visual"
      aria-label="Four velocity and acceleration sign cases"
    >
      <div className="sign-cases-header">
        <div>
          <div className="visual-kicker">CONCEPT VISUAL</div>
          <h3>The Four (v, a) Sign Cases</h3>
          <p>
            Use direction, not the sign of acceleration alone, to determine
            whether speed changes.
          </p>
        </div>
      </div>

      <div className="sign-cases-grid">
        {cases.map((item) => (
          <article className="sign-case-card" key={item.id}>
            <div className="sign-case-number">CASE {item.id}</div>

            <div className="sign-case-equation">
              <span>
                v {item.velocity === "+" ? ">" : "<"} 0
              </span>
              <span className="sign-case-separator">,</span>
              <span>
                a {item.acceleration === "+" ? ">" : "<"} 0
              </span>
            </div>

            <div className="sign-case-direction">
              <span className="direction-label">v</span>
              <span className="direction-arrow">
                {item.velocity === "+" ? "→" : "←"}
              </span>

              <span className="direction-label">a</span>
              <span className="direction-arrow">
                {item.acceleration === "+" ? "→" : "←"}
              </span>
            </div>

            <div className="sign-case-result">{item.result}</div>

            <p>{item.explanation}</p>
          </article>
        ))}
      </div>

      <div className="sign-cases-takeaway">
        <strong>Key rule:</strong> Same direction → speeding up. Opposite
        directions → slowing down.
      </div>

      <div className="iv-teaching-reference">
        <div className="iv-teaching-header">
          <div className="visual-kicker">TEACHING REFERENCE</div>
          <strong>Understanding the Four Sign Cases</strong>
          <span className="iv-step-count">
            Step {currentStepIndex + 1} of {teachingSteps.length}
          </span>
        </div>

        <div className="iv-teaching-steps">
          {teachingSteps.slice(0, currentStepIndex + 1).map((step, index) => (
            <div className="iv-teaching-step" key={step.title}>
              <div className="iv-teaching-step-number">{index + 1}</div>

              <div className="iv-teaching-step-body">
                <strong>{step.title}</strong>
                <div>{step.content}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="iv-teaching-controls">
          <div className="iv-teaching-buttons">
            <button
              type="button"
              className="visual-button"
              onClick={previousStep}
              disabled={currentStepIndex === 0}
            >
              Previous Step
            </button>

            <button
              type="button"
              className="visual-button"
              onClick={resetSteps}
              disabled={currentStepIndex === 0}
            >
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
    </section>
  );
};
