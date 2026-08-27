import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

import { comprehensiveLectureNote } from "../../content/lectureNote";
import { NumberLineVisual } from "../visuals/NumberLineVisual";
import { DistanceDisplacementVisual } from "../visuals/DistanceDisplacementVisual";
import { SpeedVelocityVisual } from "../visuals/SpeedVelocityVisual";
import { InstantaneousVelocityVisual } from "../visuals/InstantaneousVelocityVisual";
import { AccelerationVisual } from "../visuals/AccelerationVisual";
import { ZeroVelocityAccelerationVisual } from "../visuals/ZeroVelocityAccelerationVisual";

export const LectureNoteView: React.FC = () => (
  <section className="lecture-view lecture-note-view">
    <div className="lecture-kicker">REFERENCE NOTE</div>

    <h2>Comprehensive Lecture Note</h2>

    <p className="lecture-subtitle">
      Textbook-grade undergraduate reference for Mastering Kinematics — Part 1.
    </p>

    <article className="lecture-note-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={{
          code({ className, children, ...props }) {
            switch (className) {
              case "language-interactive:coordinate-system":
                return <NumberLineVisual />;
              case "language-diagram:displacement":
                return <DistanceDisplacementVisual />;
              case "language-interactive:speed-velocity":
                return <SpeedVelocityVisual />;
              case "language-interactive:instantaneous-velocity":
                return <InstantaneousVelocityVisual />;
              case "language-interactive:acceleration":
                return <AccelerationVisual />;
              case "language-interactive:zero-velocity-zero-acceleration":
                return <ZeroVelocityAccelerationVisual />;
              default:
                return (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
            }
          },
          table({ children, ...props }) {
            return (
              <div className="lecture-note-table-container">
                <table {...props}>{children}</table>
              </div>
            );
          },
        }}
      >
        {comprehensiveLectureNote}
      </ReactMarkdown>
    </article>
  </section>
);
