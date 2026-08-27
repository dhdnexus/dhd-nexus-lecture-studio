import React, { useState } from "react";
import type { PracticeProblem } from "../../types/course";

export const PracticeView: React.FC<{ problems: PracticeProblem[] }> = ({ problems }) => {
  const [revealed, setRevealed] = useState<string | null>(null);

  return (
    <section className="lecture-view">
      <div className="lecture-kicker">PRACTICE</div>
      <h2>Student Practice</h2>
      <p className="lecture-subtitle">Apply the same reasoning framework independently.</p>

      <div className="practice-list">
        {problems.map((problem) => (
          <article className="practice-card" key={problem.id}>
            <span>{problem.id}</span>
            <div className="practice-provenance">{problem.provenance}</div>
            <h3>{problem.title}</h3>
            <p>{problem.problem}</p>
            <button type="button" onClick={() => setRevealed(revealed === problem.id ? null : problem.id)}>
              {revealed === problem.id ? "Hide solution" : "Reveal solution"}
            </button>
            {revealed === problem.id && (
              <div className="practice-solution">
                <strong>Solution</strong>
                <p>{problem.solution}</p>
                {problem.reasoning && (
                  <p><strong>Reasoning:</strong> {problem.reasoning}</p>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};
