import React from "react";

const cases = [
  {
    id: "01",
    velocity: "+",
    acceleration: "+",
    result: "Speeding up",
    explanation: "Velocity and acceleration point in the same direction."
  },
  {
    id: "02",
    velocity: "+",
    acceleration: "−",
    result: "Slowing down",
    explanation: "Velocity and acceleration point in opposite directions."
  },
  {
    id: "03",
    velocity: "−",
    acceleration: "+",
    result: "Slowing down",
    explanation: "Velocity and acceleration point in opposite directions."
  },
  {
    id: "04",
    velocity: "−",
    acceleration: "−",
    result: "Speeding up",
    explanation: "Velocity and acceleration point in the same direction."
  }
];

export const SignCasesVisual: React.FC = () => (
  <section className="sign-cases-visual" aria-label="Four velocity and acceleration sign cases">
    <div className="sign-cases-header">
      <div>
        <div className="visual-kicker">CONCEPT VISUAL</div>
        <h3>The Four (v, a) Sign Cases</h3>
        <p>Use direction, not the sign of acceleration alone, to determine whether speed changes.</p>
      </div>
    </div>

    <div className="sign-cases-grid">
      {cases.map((item) => (
        <article className="sign-case-card" key={item.id}>
          <div className="sign-case-number">{item.id}</div>

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

          <div className="sign-case-result">
            {item.result}
          </div>

          <p>{item.explanation}</p>
        </article>
      ))}
    </div>

    <div className="sign-cases-takeaway">
      <strong>Key rule:</strong> Same direction → speeding up. Opposite directions → slowing down.
    </div>
  </section>
);
