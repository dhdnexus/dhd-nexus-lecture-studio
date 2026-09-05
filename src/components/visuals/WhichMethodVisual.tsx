import React, { useState } from "react";
import katex from "katex";

type BranchId = "constant-a" | "a-of-t" | "v-of-t" | "a-of-s" | "staged" | "unfamiliar";

interface BranchDef {
  id: BranchId;
  label: string;
  given: string;
  structure: string;
  relationTex: string | null;
  nextStep: string;
}

const BRANCHES: BranchDef[] = [
  {
    id: "constant-a",
    label: "Constant a",
    given: "Acceleration is given (or confirmed) to be constant.",
    structure: "One fixed acceleration throughout the interval.",
    relationTex: "v=u+at,\\ \\ s=ut+\\tfrac12at^2,\\ \\ v^2=u^2+2as",
    nextStep: "Part 3: build a known/unknown table and choose the equation with exactly one unknown."
  },
  {
    id: "a-of-t",
    label: "a(t) given",
    given: "Acceleration is given as an explicit function of time.",
    structure: "Acceleration changes as time passes.",
    relationTex: "a=\\dfrac{dv}{dt}",
    nextStep: "Part 5, Case A: integrate with respect to t to get v(t); integrate again for s(t) if needed."
  },
  {
    id: "v-of-t",
    label: "v(t) given",
    given: "Velocity is given directly as a function of time.",
    structure: "No acceleration information is needed to reach displacement.",
    relationTex: "v=\\dfrac{ds}{dt}",
    nextStep: "Part 5, Case B: integrate with respect to t to get s(t) directly."
  },
  {
    id: "a-of-s",
    label: "a(s) given",
    given: "Acceleration is given as a function of position/displacement.",
    structure: "Acceleration changes with where the object is, not with time.",
    relationTex: "a=v\\dfrac{dv}{ds}",
    nextStep: "Part 5, Case C: separate variables and integrate with respect to s — time is never needed."
  },
  {
    id: "staged",
    label: "Staged / piecewise",
    given: "The motion changes regime partway through (e.g. accelerate, then constant, then brake).",
    structure: "A single problem containing more than one physical regime.",
    relationTex: null,
    nextStep: "Split into stages; apply the branch above that fits each stage; carry final v forward as the next stage's u."
  },
  {
    id: "unfamiliar",
    label: "Unfamiliar",
    given: "No branch above seems to fit immediately.",
    structure: "The structure of the problem is not yet clear.",
    relationTex: null,
    nextStep: "Fall back to UNDERSTAND → REPRESENT → IDENTIFY → CHOOSE → SOLVE → INTERPRET → CHECK."
  }
];

const Formula: React.FC<{ tex: string }> = ({ tex }) => {
  const html = katex.renderToString(tex, {
    displayMode: true,
    throwOnError: false,
    strict: "ignore"
  });
  return <div className="eqsel-formula" dangerouslySetInnerHTML={{ __html: html }} />;
};

export const WhichMethodVisual: React.FC = () => {
  const [selectedId, setSelectedId] = useState<BranchId>("staged");
  const selected = BRANCHES.find((b) => b.id === selectedId) ?? BRANCHES[0];

  return (
    <div className="concept-visual which-method-visual">
      <div className="concept-visual-header">
        <span>INTERACTIVE SCAFFOLD</span>
        <strong>Which Method Should I Use?</strong>
      </div>

      <div className="iv-intro">
        Select the form the given information takes. Follow it through{" "}
        <strong>Given → Structure → Method → Next Step</strong> — this map
        covers every case built across the whole series.
      </div>

      <div className="eqsel-toggles which-method-toggles">
        {BRANCHES.map((b) => (
          <button
            key={b.id}
            type="button"
            className={`eqsel-toggle ${selectedId === b.id ? "known" : "unknown"}`}
            onClick={() => setSelectedId(b.id)}
            aria-pressed={selectedId === b.id}
          >
            <span className="eqsel-toggle-symbol">{b.label}</span>
          </button>
        ))}
      </div>

      <div className="method-flow which-method-flow">
        <div className="method-flow-step">
          <span className="method-flow-kicker">GIVEN</span>
          <strong>{selected.given}</strong>
        </div>

        <div className="method-flow-arrow">→</div>

        <div className="method-flow-step">
          <span className="method-flow-kicker">PHYSICAL STRUCTURE</span>
          <strong>{selected.structure}</strong>
        </div>

        <div className="method-flow-arrow">→</div>

        <div className="method-flow-step">
          <span className="method-flow-kicker">KEY RELATION</span>
          {selected.relationTex ? (
            <Formula tex={selected.relationTex} />
          ) : (
            <strong>No single equation — a process instead</strong>
          )}
        </div>

        <div className="method-flow-arrow">→</div>

        <div className="method-flow-step method-flow-result">
          <span className="method-flow-kicker">NEXT STEP</span>
          <strong>{selected.nextStep}</strong>
        </div>
      </div>

      <div className="iv-takeaway">
        <strong>Teaching anchor:</strong> five branches, one fallback. Every
        problem in this series fits one of the first five; when none does,
        the seven-step framework in Branch 6 always applies.
      </div>
    </div>
  );
};
