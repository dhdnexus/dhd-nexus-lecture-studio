import React, { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";

export const NumberLineVisual: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  const [particle, setParticle] = useState(15);
  const [origin, setOrigin] = useState(0);
  const [positiveRight, setPositiveRight] = useState(true);
  const [dragging, setDragging] = useState<"particle" | "origin" | null>(null);

  const min = -30;
  const max = 30;

  const valueToX = (value: number) =>
    60 + ((value - min) / (max - min)) * 680;

  const pointerToValue = (clientX: number) => {
    if (!svgRef.current) return 0;

    const rect = svgRef.current.getBoundingClientRect();
    const svgX = ((clientX - rect.left) / rect.width) * 800;

    const raw = min + ((svgX - 60) / 680) * (max - min);

    return Math.round(Math.max(min, Math.min(max, raw)));
  };

  const coordinate = positiveRight
    ? particle - origin
    : origin - particle;

  const handlePointerMove = (event: React.PointerEvent<SVGSVGElement>) => {
    if (!dragging) return;

    const value = pointerToValue(event.clientX);

    if (dragging === "particle") {
      setParticle(value);
    } else {
      setOrigin(Math.max(-20, Math.min(20, value)));
    }
  };

  const reset = () => {
    setParticle(15);
    setOrigin(0);
    setPositiveRight(true);
    setDragging(null);
  };

  return (
    <section className="interactive-visual">
      <div className="visual-header">
        <div>
          <span className="visual-kicker">INTERACTIVE MODEL</span>
          <h3>Reference Frame & Coordinate System</h3>
          <p>
            Drag the particle or origin. Reverse the positive direction
            and observe how the coordinate description changes.
          </p>
        </div>

        <div className="visual-controls">
          <button
            onClick={() => setPositiveRight((value) => !value)}
            className="visual-button"
          >
            {positiveRight ? <ArrowRight size={15} /> : <ArrowLeft size={15} />}
            +x {positiveRight ? "Right" : "Left"}
          </button>

          <button onClick={reset} className="visual-button">
            <RotateCcw size={15} />
            Reset
          </button>
        </div>
      </div>

      <div className="number-line-wrap">
        <svg
          ref={svgRef}
          viewBox="0 0 800 210"
          className="number-line-svg"
          onPointerMove={handlePointerMove}
          onPointerUp={() => setDragging(null)}
          onPointerLeave={() => setDragging(null)}
        >
          <line
            x1="50"
            y1="105"
            x2="750"
            y2="105"
            stroke="#475569"
            strokeWidth="3"
          />

          {Array.from({ length: 13 }, (_, i) => {
            const value = -30 + i * 5;
            const x = valueToX(value);

            return (
              <g key={value}>
                <line
                  x1={x}
                  y1="94"
                  x2={x}
                  y2="116"
                  stroke="#64748b"
                  strokeWidth="1.5"
                />
                <text
                  x={x}
                  y="138"
                  textAnchor="middle"
                  fill="#94a3b8"
                  fontSize="11"
                  fontFamily="monospace"
                >
                  {value}
                </text>
              </g>
            );
          })}

          {/* Positive direction */}
          <polygon
            points={
              positiveRight
                ? "758,105 744,98 744,112"
                : "42,105 56,98 56,112"
            }
            fill="#38bdf8"
          />

          <text
            x={positiveRight ? 765 : 25}
            y="100"
            fill="#38bdf8"
            fontSize="12"
            fontWeight="bold"
            fontFamily="monospace"
          >
            +x
          </text>

          {/* Origin */}
          <g
            transform={`translate(${valueToX(origin)},105)`}
            onPointerDown={(event) => {
              event.currentTarget.setPointerCapture(event.pointerId);
              setDragging("origin");
            }}
            className="drag-target"
          >
            <rect x="-16" y="-32" width="32" height="64" fill="transparent" />
            <polygon points="0,-18 -8,-32 8,-32" fill="#f59e0b" />
            <text
              x="0"
              y="-39"
              textAnchor="middle"
              fill="#f59e0b"
              fontSize="11"
              fontWeight="bold"
              fontFamily="monospace"
            >
              x = 0
            </text>
          </g>

          {/* Displacement from origin to particle */}
          <line
            x1={valueToX(origin)}
            y1="60"
            x2={valueToX(particle)}
            y2="60"
            stroke="#10b981"
            strokeWidth="3"
            strokeDasharray="6 5"
          />

          {/* Particle */}
          <g
            transform={`translate(${valueToX(particle)},105)`}
            onPointerDown={(event) => {
              event.currentTarget.setPointerCapture(event.pointerId);
              setDragging("particle");
            }}
            className="drag-target"
          >
            <circle r="23" fill="transparent" />
            <circle r="11" fill="#38bdf8" stroke="#ffffff" strokeWidth="2" />
            <text
              x="0"
              y="-20"
              textAnchor="middle"
              fill="#f8fafc"
              fontSize="11"
              fontWeight="bold"
              fontFamily="monospace"
            >
              Particle
            </text>
          </g>
        </svg>
      </div>

      <div className="coordinate-readout">
        <div>
          <span>REFERENCE FRAME</span>
          <strong>Origin = {origin} m</strong>
        </div>

        <div>
          <span>PARTICLE</span>
          <strong>{particle} m</strong>
        </div>

        <div className="coordinate-primary">
          <span>POSITION COORDINATE</span>
          <strong>
            x = {coordinate >= 0 ? "+" : ""}
            {coordinate} m
          </strong>
        </div>
      </div>

      <div className="visual-teaching-note">
        <strong>Teaching point:</strong>{" "}
        The physical particle has not changed merely because the origin
        or positive direction was changed. Only its coordinate description
        changed.
      </div>
    </section>
  );
};
