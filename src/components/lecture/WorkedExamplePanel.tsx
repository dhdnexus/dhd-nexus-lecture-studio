import React, { useState } from "react";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import katex from "katex";
import type { WorkedExample, WorkedExampleStep } from "../../types/course";

interface MathBlockProps {
  value: string;
}

const MathBlock: React.FC<MathBlockProps> = ({ value }) => {
  const html = katex.renderToString(value, {
    displayMode: true,
    throwOnError: false,
    strict: "ignore",
  });

  return (
    <div
      className="worked-example-math"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

interface StepRevealProps {
  steps: WorkedExampleStep[];
}

const stepTone: Record<string, string> = {
  PROBLEM: "we-step-problem",
  THINK: "we-step-think",
  "WHAT IS HAPPENING?": "we-step-happening",
  "REFERENCE FRAME": "we-step-reference",
  KNOWN: "we-step-known",
  UNKNOWN: "we-step-known",
  CONCEPT: "we-step-concept",
  "WHY THIS METHOD?": "we-step-method",
  SOLUTION: "we-step-solution",
  INTERPRETATION: "we-step-interpretation",
  CHECK: "we-step-check",
};

export const StepReveal: React.FC<StepRevealProps> = ({ steps }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const revealedCount = Math.min(currentStepIndex + 1, steps.length);
  const currentStep = steps[currentStepIndex];

  const revealNext = () => {
    setCurrentStepIndex((previous) =>
      Math.min(previous + 1, steps.length - 1)
    );
  };

  const hideLast = () => {
    setCurrentStepIndex((previous) => Math.max(previous - 1, 0));
  };

  return (
    <div className="worked-step-reveal">

      <div className="worked-step-stack">
        {steps.slice(0, currentStepIndex + 1).map((step, index) => (
          <section
            key={`${step.stepName}-${index}`}
            className={`worked-step-card ${
              stepTone[step.stepName] ?? "we-step-default"
            }`}
          >
            <div className="worked-step-heading">
              <span className="worked-step-label">{step.stepName}</span>
              <CheckCircle2 size={17} />
            </div>

            <div className="worked-step-content">
              {step.content}
            </div>

            {step.mathBlocks && step.mathBlocks.length > 0 && (
              <div className="worked-step-math-stack">
                {step.mathBlocks.map((equation, equationIndex) => (
                  <MathBlock
                    key={`${equation}-${equationIndex}`}
                    value={equation}
                  />
                ))}
              </div>
            )}
          </section>
        ))}
      </div>

      <div className="worked-step-controls">
        <div className="worked-step-progress">
          Step {revealedCount} of {steps.length} revealed
        </div>

        <div className="worked-step-buttons">
          <button
            type="button"
            className="worked-step-button secondary"
            onClick={hideLast}
            disabled={currentStepIndex === 0}
          >
            <ChevronLeft size={15} />
            Hide Last Step
          </button>

          <button
            type="button"
            className="worked-step-button primary"
            onClick={revealNext}
            disabled={currentStepIndex === steps.length - 1}
          >
            Reveal Next Step
            <ChevronRight size={15} />
          </button>
        </div>
      </div>
      <div className="worked-step-current">
        <span>Current teaching step</span>
        <strong>{currentStep.stepName}</strong>
      </div>
    </div>
  );
};

interface WorkedExampleViewProps {
  examples: WorkedExample[];
}

export const WorkedExampleView: React.FC<WorkedExampleViewProps> = ({
  examples,
}) => {
  const [activeExample, setActiveExample] = useState(0);

  const example = examples[activeExample];

  if (!example) {
    return null;
  }

  return (
    <article className="worked-examples-view">
      <div className="worked-examples-kicker">
        EXAMINATION APPLICATION
      </div>

      <h2>Worked Example</h2>

      <p className="worked-examples-intro">
        Apply the DHD Nexus reasoning framework before performing the
        calculation.
      </p>

      <div className="worked-example-tabs">
        {examples.map((item, index) => (
          <button
            key={item.id}
            type="button"
            className={index === activeExample ? "active" : ""}
            onClick={() => setActiveExample(index)}
          >
            Example {index + 1}
          </button>
        ))}
      </div>

      <section className="worked-example-header">
        <div className="worked-example-provenance">
          {example.provenance}
        </div>

        <h3>{example.title}</h3>

        {example.provenanceDetails && (
          <div className="worked-example-source">
            {example.provenanceDetails}
          </div>
        )}

        {example.lecturerNotes && (
          <div className="worked-example-lecturer-note">
            <strong>Lecturer focus:</strong> {example.lecturerNotes}
          </div>
        )}
      </section>

      <section className="worked-example-problem">
        <div className="worked-example-section-label">PROBLEM</div>
        <p>{example.problemStatement}</p>
      </section>

      {example.steps && example.steps.length > 0 && (
        <StepReveal steps={example.steps} />
      )}
    </article>
  );
};


