import React, { useState } from "react";
import katex from "katex";

type GivenForm = "a-t" | "v-t" | "a-s";

interface CaseDef {
  id: GivenForm;
  label: string;
  given: string;
  relationTex: string;
  variable: string;
  result: string;
  explanation: string;
}

const CASES: CaseDef[] = [
  {
    id: "a-t",
    label: "a(t) is given",
    given: "Acceleration as a function of time",
    relationTex: "a = \\dfrac{dv}{dt}",
    variable: "t (time)",
    result: "v(t) directly; integrate v(t) again with respect to t for s(t)",
    explanation:
      "Acceleration is expressed directly in terms of time, so a = dv/dt is integrated with respect to t."
  },
  {
    id: "v-t",
    label: "v(t) is given",
    given: "Velocity as a function of time",
    relationTex: "v = \\dfrac{ds}{dt}",
    variable: "t (time)",
    result: "s(t) directly, in a single integration",
    explanation:
      "Velocity is already known as a function of time, so only v = ds/dt needs to be integrated — no acceleration step is required."
  },
  {
    id: "a-s",
    label: "a(s) is given",
    given: "Acceleration as a function of position",
    relationTex: "a = v\\dfrac{dv}{ds}",
    variable: "s (position)",
    result: "v(s) directly, without ever finding t",
    explanation:
      "Acceleration is a function of position, not time, so a = dv/dt cannot be integrated with respect to t. The chain-rule identity a = v dv/ds converts the problem into position-only variables."
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

export const MethodSelectionVisual: React.FC = () => {
  const [selectedId, setSelectedId] = useState<GivenForm>("a-t");
  const selected = CASES.find((c) => c.id === selectedId) ?? CASES[0];

  return (
    <div className="concept-visual method-select-visual">
      <div className="concept-visual-header">
        <span>INTERACTIVE SCAFFOLD</span>
        <strong>Given Form → Relation → Variable → Method</strong>
      </div>

      <div className="iv-intro">
        Select what form the given information takes. Watch which relation
        applies and <strong>which variable you integrate with respect to</strong>{" "}
        change with it.
      </div>

      <div className="eqsel-toggles method-select-toggles">
        {CASES.map((c) => (
          <button
            key={c.id}
            type="button"
            className={`eqsel-toggle ${selectedId === c.id ? "known" : "unknown"}`}
            onClick={() => setSelectedId(c.id)}
            aria-pressed={selectedId === c.id}
          >
            <span className="eqsel-toggle-symbol">{c.label}</span>
            <span className="eqsel-toggle-label">{c.given}</span>
          </button>
        ))}
      </div>

      <div className="method-flow">
        <div className="method-flow-step">
          <span className="method-flow-kicker">GIVEN</span>
          <strong>{selected.given}</strong>
        </div>

        <div className="method-flow-arrow">→</div>

        <div className="method-flow-step">
          <span className="method-flow-kicker">RELATION</span>
          <Formula tex={selected.relationTex} />
        </div>

        <div className="method-flow-arrow">→</div>

        <div className="method-flow-step">
          <span className="method-flow-kicker">INTEGRATE WITH RESPECT TO</span>
          <strong>{selected.variable}</strong>
        </div>

        <div className="method-flow-arrow">→</div>

        <div className="method-flow-step method-flow-result">
          <span className="method-flow-kicker">RESULT</span>
          <strong>{selected.result}</strong>
        </div>
      </div>

      <div className="iv-takeaway">
        <strong>Why this method:</strong> {selected.explanation}
      </div>
    </div>
  );
};
