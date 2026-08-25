import React from "react";
import type { WorkedExample } from "../../types/course";

export const WorkedExampleView: React.FC<{ examples: WorkedExample[] }> = ({ examples }) => (
  <section className="lecture-view">
    <div className="lecture-kicker">WORKED EXAMPLES</div>
    <h2>Foundational Examination Problems</h2>
    <p className="lecture-subtitle">Interpret → Identify → Choose → Calculate → Check</p>

    <div className="example-grid">
      {examples.map((example) => (
        <article className="example-card" key={example.id}>
          <span>{example.provenance}</span>
          <h3>{example.title}</h3>
          <p className="source-line">{example.source}</p>
          <p>{example.problem}</p>
          <div className="answer-box">
            <strong>Teaching answer</strong>
            <p>{example.answer}</p>
          </div>
        </article>
      ))}
    </div>
  </section>
);
