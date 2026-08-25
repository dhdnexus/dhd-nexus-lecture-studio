import React from "react";

export const PracticeView: React.FC<{ problems: { id: string; title: string; question: string }[] }> = ({ problems }) => (
  <section className="lecture-view">
    <div className="lecture-kicker">PRACTICE</div>
    <h2>Student Practice</h2>
    <p className="lecture-subtitle">Apply the same reasoning framework independently.</p>

    <div className="practice-list">
      {problems.map((problem) => (
        <article className="practice-card" key={problem.id}>
          <span>{problem.id}</span>
          <h3>{problem.title}</h3>
          <p>{problem.question}</p>
        </article>
      ))}
    </div>
  </section>
);
