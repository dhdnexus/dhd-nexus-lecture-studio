import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

interface LectureNoteViewProps {
  markdown: string;
  partTitle: string;
  visualRegistry: Record<string, React.FC>;
}

export const LectureNoteView: React.FC<LectureNoteViewProps> = ({
  markdown,
  partTitle,
  visualRegistry
}) => (
  <section className="lecture-view lecture-note-view">
    <div className="lecture-kicker">REFERENCE NOTE</div>

    <h2>Comprehensive Lecture Note</h2>

    <p className="lecture-subtitle">
      Textbook-grade undergraduate reference for {partTitle}.
    </p>

    <article className="lecture-note-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={{
          code({ className, children, ...props }) {
            const fenceKey = className?.replace(/^language-/, "");
            const FenceVisual = fenceKey ? visualRegistry[fenceKey] : undefined;

            if (FenceVisual) {
              return <FenceVisual />;
            }

            return (
              <code className={className} {...props}>
                {children}
              </code>
            );
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
        {markdown}
      </ReactMarkdown>
    </article>
  </section>
);
