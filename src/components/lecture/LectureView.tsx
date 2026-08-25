import React from "react";
import katex from "katex";
import type { LessonSection } from "../../types/course";
import { NumberLineVisual } from "../visuals/NumberLineVisual";
import { DistanceDisplacementVisual } from "../visuals/DistanceDisplacementVisual";
import { SpeedVelocityVisual } from "../visuals/SpeedVelocityVisual";
import { ZeroVelocityAccelerationVisual } from "../visuals/ZeroVelocityAccelerationVisual";
import { SignCasesVisual } from "../visuals/SignCasesVisual";
import { InstantaneousVelocityVisual } from "../visuals/InstantaneousVelocityVisual";
import { AccelerationVisual } from "../visuals/AccelerationVisual";

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
    "a = 0 does not imply v = 0": "a = 0 \\not\\Rightarrow v = 0"
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

export const LectureView: React.FC<{ section: LessonSection }> = ({ section }) => (
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

    {section.id === "sec-02" && <NumberLineVisual />}
    {section.id === "sec-05" && <DistanceDisplacementVisual />}
    {section.id === "sec-06" && <SpeedVelocityVisual />}
    {section.id === "sec-09" && <SignCasesVisual />}
    {section.id === "sec-10" && <ZeroVelocityAccelerationVisual />}
    {section.id === "sec-07" && <InstantaneousVelocityVisual />}
    {section.id === "sec-08" && <AccelerationVisual />}
  </article>
);






