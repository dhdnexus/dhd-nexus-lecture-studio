import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

import { comprehensiveLectureNote } from "../../content/lectureNote";

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
      >
        {comprehensiveLectureNote}
      </ReactMarkdown>
    </article>
  </section>
);



