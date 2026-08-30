import React, { useMemo, useState } from "react";
import katex from "katex";

type SuvatVar = "s" | "u" | "v" | "a" | "t";

const VAR_LABELS: Record<SuvatVar, string> = {
  s: "s (displacement)",
  u: "u (initial velocity)",
  v: "v (final velocity)",
  a: "a (acceleration)",
  t: "t (time)"
};

interface EquationDef {
  id: string;
  tex: string;
  plain: string;
  vars: SuvatVar[];
}

const EQUATIONS: EquationDef[] = [
  { id: "v-u-at", tex: "v = u + at", plain: "v = u + at", vars: ["u", "v", "a", "t"] },
  { id: "s-half-u-v-t", tex: "s = \\tfrac12(u+v)t", plain: "s = ½(u + v)t", vars: ["u", "v", "s", "t"] },
  { id: "s-ut-half-at2", tex: "s = ut + \\tfrac12at^2", plain: "s = ut + ½at²", vars: ["u", "s", "a", "t"] },
  { id: "v2-u2-2as", tex: "v^2 = u^2 + 2as", plain: "v² = u² + 2as", vars: ["u", "v", "a", "s"] }
];

const VAR_ORDER: SuvatVar[] = ["s", "u", "v", "a", "t"];

const Formula: React.FC<{ tex: string }> = ({ tex }) => {
  const html = useMemo(
    () =>
      katex.renderToString(tex, {
        displayMode: true,
        throwOnError: false,
        strict: "ignore"
      }),
    [tex]
  );
  return <div className="eqsel-formula" dangerouslySetInnerHTML={{ __html: html }} />;
};

export const EquationSelectionVisual: React.FC = () => {
  const [known, setKnown] = useState<Record<SuvatVar, boolean>>({
    s: true,
    u: true,
    v: false,
    a: false,
    t: true
  });

  const toggleVar = (variable: SuvatVar) => {
    setKnown((current) => ({ ...current, [variable]: !current[variable] }));
  };

  const reset = () => setKnown({ s: true, u: true, v: false, a: false, t: true });

  return (
    <div className="concept-visual eqsel-visual">
      <div className="concept-visual-header">
        <span>INTERACTIVE SCAFFOLD</span>
        <strong>Known / Unknown → Equation Selection</strong>
      </div>

      <div className="iv-intro">
        Toggle which of the five SUVAT quantities are known for a problem.
        Watch which equations become directly usable —{" "}
        <strong>exactly one unknown</strong> is the test, not how many
        numbers you recognise.
      </div>

      <div className="eqsel-toggles">
        {VAR_ORDER.map((variable) => (
          <button
            key={variable}
            type="button"
            className={`eqsel-toggle ${known[variable] ? "known" : "unknown"}`}
            onClick={() => toggleVar(variable)}
            aria-pressed={known[variable]}
          >
            <span className="eqsel-toggle-symbol">{variable}</span>
            <span className="eqsel-toggle-label">{VAR_LABELS[variable]}</span>
            <span className="eqsel-toggle-state">{known[variable] ? "KNOWN" : "UNKNOWN"}</span>
          </button>
        ))}

        <button type="button" className="visual-button eqsel-reset" onClick={reset}>
          Reset to worked-example defaults
        </button>
      </div>

      <div className="eqsel-grid">
        {EQUATIONS.map((equation) => {
          const unknownVars = equation.vars.filter((v) => !known[v]);
          let statusLabel: string;
          let statusClass: string;

          if (unknownVars.length === 0) {
            statusLabel = "All known — use only to check";
            statusClass = "eqsel-status-check";
          } else if (unknownVars.length === 1) {
            statusLabel = `Usable now — solves for ${unknownVars[0]}`;
            statusClass = "eqsel-status-usable";
          } else {
            statusLabel = `Not usable yet — ${unknownVars.length} unknowns`;
            statusClass = "eqsel-status-blocked";
          }

          return (
            <div className={`eqsel-card ${statusClass}`} key={equation.id}>
              <Formula tex={equation.tex} />

              <div className="eqsel-card-vars">
                {equation.vars.map((v) => (
                  <span key={v} className={`eqsel-chip ${known[v] ? "known" : "unknown"}`}>
                    {v}
                  </span>
                ))}
              </div>

              <div className={`eqsel-card-status ${statusClass}`}>{statusLabel}</div>
            </div>
          );
        })}
      </div>

      <div className="iv-takeaway">
        <strong>Teaching anchor:</strong> an equation is a candidate starting
        point only when it has exactly one unknown among its four
        quantities — never choose an equation simply because it contains
        the most known numbers.
      </div>
    </div>
  );
};
