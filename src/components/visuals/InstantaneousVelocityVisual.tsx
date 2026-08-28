import React, { useState } from "react";

export const InstantaneousVelocityVisual: React.FC = () => {
  const [time, setTime] = useState(5);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  /*
   * Mathematical model
   *
   * x(t) = ut + 1/2 at²
   * with u = 2 m/s and a = 1 m/s².
   *
   * Therefore:
   * x(t) = 2t + 1/2 t²
   * v(t) = dx/dt = 2 + t
   */
  const initialVelocity = 2;
  const acceleration = 1;

  const position =
    initialVelocity * time +
    0.5 * acceleration * time * time;

  const velocity =
    initialVelocity +
    acceleration * time;

  const revealedCount = currentStepIndex + 1;

  const revealNext = () => {
    setCurrentStepIndex((previous) =>
      Math.min(previous + 1, teachingSteps.length - 1),
    );
  };

  const revealPrevious = () => {
    setCurrentStepIndex((previous) => Math.max(previous - 1, 0));
  };

  const resetSteps = () => {
    setCurrentStepIndex(0);
  };

  const teachingSteps = [
    {
      label: "THE MODEL",
      content: (
        <>
          We describe the particle's position as a function of time:
          <div className="iv-teaching-equation">
            x(t) = 2t + ½t²
          </div>
          This equation tells us where the particle is at any
          particular time.
        </>
      ),
    },
    {
      label: "IDENTIFY THE MOTION",
      content: (
        <>
          Compare the model with the constant-acceleration equation:
          <div className="iv-teaching-equation">
            x = ut + ½at²
          </div>
          Therefore:
          <div className="iv-teaching-equation">
            u = {initialVelocity} m/s, &nbsp; a = {acceleration} m/s²
          </div>
        </>
      ),
    },
    {
      label: "VELOCITY AS RATE OF CHANGE",
      content: (
        <>
          Instantaneous velocity is the rate at which position changes
          with time:
          <div className="iv-teaching-equation">
            v = dx/dt
          </div>
          This is the mathematical meaning of "how fast is position
          changing right now?"
        </>
      ),
    },
    {
      label: "DIFFERENTIATE",
      content: (
        <>
          Differentiate the position function:
          <div className="iv-teaching-equation">
            v = d/dt (2t + ½t²)
          </div>
          Hence:
          <div className="iv-teaching-equation">
            v(t) = 2 + t
          </div>
          The velocity displayed above therefore comes directly from
          the rate of change of the position function.
        </>
      ),
    },
    {
      label: "USE THE CURRENT TIME",
      content: (
        <>
          The slider currently gives:
          <div className="iv-teaching-equation">
            t = {time.toFixed(1)} s
          </div>
          Substituting this value into the velocity equation:
          <div className="iv-teaching-equation">
            v = 2 + {time.toFixed(1)} ={" "}
            <strong>{velocity.toFixed(2)} m/s</strong>
          </div>
        </>
      ),
    },
    {
      label: "CHECK THE POSITION",
      content: (
        <>
          Now substitute the same time into the position model:
          <div className="iv-teaching-equation">
            x = 2({time.toFixed(1)}) + ½({time.toFixed(1)})²
          </div>
          Therefore:
          <div className="iv-teaching-equation">
            x = <strong>{position.toFixed(2)} m</strong>
          </div>
          The position and instantaneous velocity are generated from
          the same mathematical model.
        </>
      ),
    },
    {
      label: "PHYSICAL INTERPRETATION",
      content: (
        <>
          Position tells us <strong>where the particle is</strong> at
          the chosen instant. Instantaneous velocity tells us
          <strong> how rapidly that position is changing</strong> at
          that instant.
          <div className="iv-teaching-equation">
            v(t) = dx/dt
          </div>
          Moving the slider changes the instant being examined, while
          the underlying physical model remains unchanged.
        </>
      ),
    },
  ];

  return (
    <div className="concept-visual instantaneous-velocity-visual">
      <div className="concept-visual-header">
        <span>INTERACTIVE CONCEPT VISUAL</span>
        <strong>Instantaneous Velocity</strong>
      </div>

      <div className="iv-intro">
        Average velocity describes motion over a time interval.
        Instantaneous velocity asks:{" "}
        <strong>how fast is position changing right now?</strong>
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
        <strong>Teaching anchor:</strong> instantaneous velocity is
        the rate of change of position at a particular instant.
      </div>

      <div className="iv-teaching-reference">
        <div className="iv-teaching-header">
          <div>
            <span>TEACHING REFERENCE</span>
            <strong>From Position to Instantaneous Velocity</strong>
          </div>

          <span className="iv-step-count">
            Step {revealedCount} of {teachingSteps.length}
          </span>
        </div>

        <div className="iv-teaching-steps">
          {teachingSteps
            .slice(0, revealedCount)
            .map((step, index) => (
              <div
                className={`iv-teaching-step ${
                  index === currentStepIndex
                    ? "iv-teaching-step-current"
                    : ""
                }`}
                key={step.label}
              >
                <div className="iv-teaching-step-number">
                  {index + 1}
                </div>

                <div className="iv-teaching-step-body">
                  <strong>{step.label}</strong>
                  <div>{step.content}</div>
                </div>
              </div>
            ))}
        </div>

        <div className="iv-teaching-controls">
          <button
            className="visual-button"
            type="button"
            onClick={revealPrevious}
            disabled={currentStepIndex === 0}
          >
            Previous Step
          </button>

          <button
            className="visual-button"
            type="button"
            onClick={resetSteps}
            disabled={currentStepIndex === 0}
          >
            Reset
          </button>

          <button
            className="visual-button"
            type="button"
            onClick={revealNext}
            disabled={
              currentStepIndex === teachingSteps.length - 1
            }
          >
            Reveal Next Step
          </button>
        </div>
      </div>
    </div>
  );
};
