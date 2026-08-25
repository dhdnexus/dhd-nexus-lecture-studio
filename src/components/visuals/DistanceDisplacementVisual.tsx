import React, { useEffect, useState } from "react";
import { Play, Pause, RotateCcw, StepForward } from "lucide-react";

export const DistanceDisplacementVisual: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [playing, setPlaying] = useState(false);

  const position =
    progress <= 60
      ? progress
      : 60 - ((progress - 60) / 40) * 20;

  const distance =
    progress <= 60
      ? progress
      : 60 + (progress - 60);

  const displacement = position;

  useEffect(() => {
    if (!playing) return;

    const timer = window.setInterval(() => {
      setProgress((value) => {
        if (value >= 100) {
          setPlaying(false);
          return 100;
        }
        return value + 1;
      });
    }, 45);

    return () => window.clearInterval(timer);
  }, [playing]);

  const reset = () => {
    setPlaying(false);
    setProgress(0);
  };

  const step = () => {
    setPlaying(false);
    setProgress((value) => Math.min(100, value + 10));
  };

  const x = 70 + (position / 80) * 660;

  return (
    <section className="interactive-visual">
      <div className="visual-header">
        <div>
          <span className="visual-kicker">INTERACTIVE JOURNEY</span>
          <h3>Distance vs Displacement</h3>
          <p>
            Follow the particle as it travels 60 m forward, then reverses
            direction and travels 20 m backward.
          </p>
        </div>

        <div className="visual-controls">
          <button
            className="visual-button"
            onClick={() => setPlaying((value) => !value)}
          >
            {playing ? <Pause size={15} /> : <Play size={15} />}
            {playing ? "Pause" : "Play"}
          </button>

          <button className="visual-button" onClick={step}>
            <StepForward size={15} />
            Step
          </button>

          <button className="visual-button" onClick={reset}>
            <RotateCcw size={15} />
            Reset
          </button>
        </div>
      </div>

      <div className="journey-visual">
        <svg viewBox="0 0 800 220" className="journey-svg">
          <line
            x1="50"
            y1="130"
            x2="750"
            y2="130"
            stroke="#334155"
            strokeWidth="4"
          />

          {[0, 20, 40, 60, 80].map((value) => {
            const tickX = 70 + (value / 80) * 660;

            return (
              <g key={value}>
                <line
                  x1={tickX}
                  y1="120"
                  x2={tickX}
                  y2="140"
                  stroke="#64748b"
                  strokeWidth="2"
                />
                <text
                  x={tickX}
                  y="162"
                  textAnchor="middle"
                  fill="#94a3b8"
                  fontSize="11"
                  fontFamily="monospace"
                >
                  {value} m
                </text>
              </g>
            );
          })}

          {/* Forward path */}
          <line
            x1="70"
            y1="85"
            x2={70 + (Math.min(position, 60) / 80) * 660}
            y2="85"
            stroke="#38bdf8"
            strokeWidth="6"
            strokeLinecap="round"
          />

          {/* Return path */}
          {progress > 60 && (
            <line
              x1={70 + (60 / 80) * 660}
              y1="55"
              x2={x}
              y2="55"
              stroke="#f43f5e"
              strokeWidth="6"
              strokeLinecap="round"
            />
          )}

          <text
            x="75"
            y="72"
            fill="#38bdf8"
            fontSize="11"
            fontWeight="bold"
          >
            +60 m
          </text>

          {progress > 60 && (
            <text
              x="565"
              y="42"
              fill="#f43f5e"
              fontSize="11"
              fontWeight="bold"
            >
              −20 m
            </text>
          )}

          {/* Displacement */}
          <line
            x1="70"
            y1="190"
            x2={x}
            y2="190"
            stroke="#10b981"
            strokeWidth="4"
          />

          <text
            x="400"
            y="212"
            textAnchor="middle"
            fill="#10b981"
            fontSize="11"
            fontWeight="bold"
          >
            Displacement: {displacement >= 0 ? "+" : ""}
            {displacement.toFixed(1)} m
          </text>

          {/* Particle */}
          <circle
            cx={x}
            cy="130"
            r="13"
            fill="#38bdf8"
            stroke="#ffffff"
            strokeWidth="2"
          />

          <text
            x={x}
            y="108"
            textAnchor="middle"
            fill="#f8fafc"
            fontSize="11"
            fontFamily="monospace"
          >
            x = {position.toFixed(1)} m
          </text>
        </svg>
      </div>

      <div className="coordinate-readout">
        <div>
          <span>TOTAL DISTANCE</span>
          <strong>{distance.toFixed(1)} m</strong>
        </div>

        <div>
          <span>FINAL POSITION</span>
          <strong>{position.toFixed(1)} m</strong>
        </div>

        <div className="coordinate-primary">
          <span>DISPLACEMENT</span>
          <strong>
            Δx = {displacement >= 0 ? "+" : ""}
            {displacement.toFixed(1)} m
          </strong>
        </div>
      </div>

      <div className="visual-teaching-note">
        <strong>Teaching point:</strong>{" "}
        Distance accumulates the entire path travelled. Displacement depends
        only on the change from the initial position to the final position.
      </div>
    </section>
  );
};
