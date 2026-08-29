import React from "react";
import katex from "katex";
import type { LessonSection } from "../../types/course";

const equationTex = (equation: string): string => {
  const map: Record<string, string> = {
    "x = position coordinate": "x = \\text{position coordinate}",
    "x = coordinate relative to the origin": "x = \\text{coordinate relative to the origin}",
    "d = total path length": "d = \\text{total path length}",
    "Δx = x_f − x_i": "\\Delta x = x_f - x_i",
    "|Δx| ≤ d": "|\\Delta x| \\le d",
    "Average speed = d_total / Δt": "\\text{Average speed} = \\frac{d_{\\text{total}}}{\\Delta t}",
    "v_avg = Δx / Δt": "v_{\\text{avg}} = \\frac{\\Delta x}{\\Delta t}",
    "v = lim(Δt→0) Δx/Δt": "v = \\lim_{\\Delta t \\to 0}\\frac{\\Delta x}{\\Delta t}",
    "a = Δv / Δt": "a = \\frac{\\Delta v}{\\Delta t}",
    "v > 0, a > 0 → speeding up": "v > 0,\\ a > 0 \\quad \\Longrightarrow \\quad \\text{speeding up}",
    "v > 0, a < 0 → slowing down": "v > 0,\\ a < 0 \\quad \\Longrightarrow \\quad \\text{slowing down}",
    "v < 0, a > 0 → slowing down": "v < 0,\\ a > 0 \\quad \\Longrightarrow \\quad \\text{slowing down}",
    "v < 0, a < 0 → speeding up": "v < 0,\\ a < 0 \\quad \\Longrightarrow \\quad \\text{speeding up}",
    "v = 0 does not imply a = 0": "v = 0 \\not\\Rightarrow a = 0",
    "a = 0 does not imply v = 0": "a = 0 \\not\\Rightarrow v = 0",
    "v_avg = Δx / Δt (secant gradient)": "v_{\\text{avg}} = \\frac{\\Delta x}{\\Delta t} \\quad \\text{(secant gradient)}",
    "v = dx/dt (tangent gradient)": "v = \\frac{dx}{dt} \\quad \\text{(tangent gradient)}",
    "a = Δv / Δt (gradient of v–t graph)": "a = \\frac{\\Delta v}{\\Delta t} \\quad \\text{(gradient of $v$–$t$ graph)}",
    "Δx = area under v–t graph (signed)": "\\Delta x = \\text{area under } v\\text{–}t \\text{ graph (signed)}",
    "distance = sum of |area| of each region": "d = \\sum \\left| \\text{area of each region} \\right|",
    "v = u + at": "v = u + at",
    "s = ½(u + v)t": "s = \\tfrac12(u+v)t",
    "s = ut + ½at²": "s = ut + \\tfrac12at^2",
    "v² = u² + 2as": "v^2 = u^2 + 2as"
  };

  return map[equation] ?? equation;
};

const Equation: React.FC<{ value: string }> = ({ value }) => {
  const html = katex.renderToString(equationTex(value), {
    displayMode: true,
    throwOnError: false,
    strict: "ignore"
  });

  return (
    <div
      className="equation-card"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

interface LectureViewProps {
  section: LessonSection;
  visualRegistry: Record<string, React.FC>;
}

export const LectureView: React.FC<LectureViewProps> = ({ section, visualRegistry }) => {
  const SectionVisual = section.visualKey ? visualRegistry[section.visualKey] : undefined;

  return (
    <article className="lecture-view">
      <div className="lecture-kicker">
        SECTION {String(section.number).padStart(2, "0")}
      </div>

      <h2>{section.title}</h2>
      <p className="lecture-subtitle">{section.subtitle}</p>

      <div className="lecture-content">
        {section.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      {section.equations && (
        <div className="equation-stack">
          {section.equations.map((equation) => (
            <Equation key={equation} value={equation} />
          ))}
        </div>
      )}

      {SectionVisual && <SectionVisual />}
    </article>
  );
};






