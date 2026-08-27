import React, { useEffect, useState } from "react";
import type { Checkpoint } from "../../types/course";
import katex from "katex";

const MathBlock: React.FC<{ value: string }> = ({ value }) => (
  <div
    className="checkpoint-math"
    dangerouslySetInnerHTML={{
      __html: katex.renderToString(value, {
        displayMode: true,
        throwOnError: false,
        strict: "ignore",
      }),
    }}
  />
);

export const CheckpointView: React.FC<{ checkpoints: Checkpoint[] }> = ({ checkpoints }) => {
  const [revealed, setRevealed] = useState<string | null>(null);
  const [selected, setSelected] = useState<Record<string, string>>({});
  const [countdowns, setCountdowns] = useState<Record<string, number>>({});

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCountdowns((current) => {
        const next = { ...current };
        let changed = false;
        Object.keys(next).forEach((id) => {
          if (next[id] > 0) {
            next[id] -= 1;
            changed = true;
          }
        });
        return changed ? next : current;
      });
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  const startPause = (taskId: string, seconds: number) => {
    setRevealed(null);
    setCountdowns((current) => ({ ...current, [taskId]: seconds }));
  };

  const canReveal = (taskId: string, task: Checkpoint["tasks"][number]) =>
    (countdowns[taskId] ?? 0) === 0 && (!task.options || Boolean(selected[taskId]));

  return (
    <section className="lecture-view">
      <div className="lecture-kicker">PAUSE & THINK</div>
      <h2>Interactive Checkpoints</h2>
      <p className="lecture-subtitle">Pause the lecture. Think first. Reveal the reasoning second.</p>

      <div className="checkpoint-list">
        {checkpoints.map((checkpoint) => (
          <article className="checkpoint-card" key={checkpoint.id}>
            <span>{checkpoint.title}</span>
            {checkpoint.provenance && <div className="checkpoint-provenance">{checkpoint.provenance}</div>}
            {checkpoint.provenanceDetails && <div className="checkpoint-source">{checkpoint.provenanceDetails}</div>}
            <h3>{checkpoint.prompt}</h3>

            <div className="checkpoint-tasks">
              {checkpoint.tasks.map((task) => {
                const remaining = countdowns[task.id] ?? 0;
                const isRevealed = revealed === task.id;
                return (
                  <div className="checkpoint-task" key={task.id}>
                    {task.label && <div className="checkpoint-task-label">{task.label}</div>}
                    <p className="checkpoint-task-prompt">{task.prompt}</p>

                    {task.options && (
                      <div className="checkpoint-options" role="radiogroup" aria-label={task.prompt}>
                        {task.options.map((option) => (
                          <label key={option} className="checkpoint-option">
                            <input
                              type="radio"
                              name={task.id}
                              value={option}
                              checked={selected[task.id] === option}
                              onChange={() => setSelected((current) => ({ ...current, [task.id]: option }))}
                            />
                            <span>{option}</span>
                          </label>
                        ))}
                      </div>
                    )}

                    <div className="checkpoint-controls">
                      <button type="button" onClick={() => startPause(task.id, checkpoint.pauseSeconds ?? 5)}>
                        {remaining > 0 ? `Think time: ${remaining}s` : `Start ${checkpoint.pauseSeconds ?? 5}-second pause`}
                      </button>
                      <button
                        type="button"
                        disabled={!canReveal(task.id, task)}
                        onClick={() => setRevealed(isRevealed ? null : task.id)}
                      >
                        {isRevealed ? "Hide reasoning" : "Reveal reasoning"}
                      </button>
                    </div>

                    {isRevealed && (
                      <div className="revealed-answer">
                        <strong>Answer:</strong> {task.correctAnswer}
                        <p><strong>Reasoning:</strong> {task.reasoning}</p>
                        {task.mathBlocks?.map((block) => <MathBlock key={`reveal-${block}`} value={block} />)}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
