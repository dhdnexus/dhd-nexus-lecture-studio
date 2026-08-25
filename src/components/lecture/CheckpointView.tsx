import React, { useState } from "react";
import type { Checkpoint } from "../../types/course";

export const CheckpointView: React.FC<{
  checkpoints: Checkpoint[];
}> = ({ checkpoints }) => {
  const [revealed, setRevealed] = useState<string | null>(null);

  return (
    <section className="lecture-view">
      <div className="lecture-kicker">PAUSE & THINK</div>

      <h2>Interactive Checkpoints</h2>

      <p className="lecture-subtitle">
        Pause the lecture. Think first. Reveal the reasoning second.
      </p>

      <div className="checkpoint-list">
        {checkpoints.map((checkpoint) => (
          <article
            className="checkpoint-card"
            key={checkpoint.id}
          >
            <span>{checkpoint.title}</span>

            {checkpoint.provenance && (
              <div className="checkpoint-provenance">
                {checkpoint.provenance}
              </div>
            )}

            {checkpoint.provenanceDetails && (
              <div className="checkpoint-source">
                {checkpoint.provenanceDetails}
              </div>
            )}

            <h3>{checkpoint.prompt}</h3>

            <div className="checkpoint-tasks">
              {checkpoint.tasks.map((task) => (
                <div
                  className="checkpoint-task"
                  key={task.id}
                >
                  <div className="checkpoint-task-label">
                    {task.label}
                  </div>

                  <p className="checkpoint-task-prompt">
                    {task.prompt}
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      setRevealed(
                        revealed === task.id ? null : task.id
                      )
                    }
                  >
                    {revealed === task.id
                      ? "Hide reasoning"
                      : "Reveal reasoning"}
                  </button>

                  {revealed === task.id && (
                    <div className="revealed-answer">
                      <strong>Answer:</strong>{" "}
                      {task.correctAnswer}

                      <p>
                        <strong>Reasoning:</strong>{" "}
                        {task.reasoning}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
