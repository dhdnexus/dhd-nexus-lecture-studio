import React, { useEffect, useMemo, useState } from "react";
import { Play, Pause, RotateCcw, StepForward } from "lucide-react";

export const DistanceDisplacementVisual: React.FC = () => {
  /*
   * Journey model
   *
   * Keep the physical journey defined in one place.
   * All animation, geometry, labels, distance and displacement
   * calculations are derived from these values.
   */
  const journey = useMemo(
    () => ({
      initialPosition: 0,
      forwardDistance: 60,
      returnDistance: 20,
    }),
    [],
  );

  const totalPathDistance =
    journey.forwardDistance + journey.returnDistance;

  const turningPoint =
    journey.initialPosition + journey.forwardDistance;

  const finalPosition = turningPoint - journey.returnDistance;
const scaleStart = Math.min(journey.initialPosition, finalPosition);
  const scaleEnd = Math.max(turningPoint, finalPosition);

  const scaleRange = Math.max(scaleEnd - scaleStart, 1);

  const [travelledDistance, setTravelledDistance] = useState(0);
  const [playing, setPlaying] = useState(false);

  const position =
    travelledDistance <= journey.forwardDistance
      ? journey.initialPosition + travelledDistance
      : turningPoint -
        (travelledDistance - journey.forwardDistance);

  const distance = travelledDistance;

  const displacement = position - journey.initialPosition;

  useEffect(() => {
    if (!playing) return;

    const timer = window.setInterval(() => {
      setTravelledDistance((value) => {
        if (value >= totalPathDistance) {
          setPlaying(false);
          return totalPathDistance;
        }

        return Math.min(value + 1, totalPathDistance);
      });
    }, 45);

    return () => window.clearInterval(timer);
  }, [playing, totalPathDistance]);

  const reset = () => {
    setPlaying(false);
    setTravelledDistance(0);
  };

  const step = () => {
    setPlaying(false);
    setTravelledDistance((value) =>
      Math.min(value + 10, totalPathDistance),
    );
  };

  /*
   * SVG geometry is derived from the journey model.
   * The visual coordinate system is independent of the
   * physical distances used in the example.
   */
  const svgStartX = 70;
  const svgWidth = 660;

  const positionToX = (value: number) =>
    svgStartX +
    ((value - scaleStart) / scaleRange) * svgWidth;

  const x = positionToX(position);
  const turningPointX = positionToX(turningPoint);
  const initialPositionX = positionToX(journey.initialPosition);

  const tickCount = 5;
  const tickValues = Array.from(
    { length: tickCount + 1 },
    (_, index) =>
      scaleStart + (scaleRange / tickCount) * index,
  );

  const forwardProgress = Math.min(
    travelledDistance,
    journey.forwardDistance,
  );

  const returnProgress = Math.max(
    travelledDistance - journey.forwardDistance,
    0,
  );

  const forwardEndPosition =
    journey.initialPosition + forwardProgress;

  const returnEndPosition =
    turningPoint - returnProgress;

  return (
    <section className="interactive-visual">
      <div className="visual-header">
        <div>
          <span className="visual-kicker">
            INTERACTIVE JOURNEY
          </span>

          <h3>Distance vs Displacement</h3>

          <p>
            Follow the particle as it travels{" "}
            {journey.forwardDistance} m forward, then reverses
            direction and travels {journey.returnDistance} m
            backward.
          </p>
        </div>

        <div className="visual-controls">
          <button
            className="visual-button"
            onClick={() => setPlaying((value) => !value)}
            type="button"
          >
            {playing ? <Pause size={15} /> : <Play size={15} />}
            {playing ? "Pause" : "Play"}
          </button>

          <button
            className="visual-button"
            onClick={step}
            type="button"
          >
            <StepForward size={15} />
            Step
          </button>

          <button
            className="visual-button"
            onClick={reset}
            type="button"
          >
            <RotateCcw size={15} />
            Reset
          </button>
        </div>
      </div>

      <div className="journey-visual">
        <svg
          viewBox="0 0 800 220"
          className="journey-svg"
          role="img"
          aria-label="Interactive distance and displacement journey"
        >
          <line
            x1="50"
            y1="130"
            x2="750"
            y2="130"
            stroke="#334155"
            strokeWidth="4"
          />

          {tickValues.map((value) => {
            const tickX = positionToX(value);
            const roundedValue = Math.round(value);

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
                  {roundedValue} m
                </text>
              </g>
            );
          })}

          {/* Forward path */}
          {forwardProgress > 0 && (
            <line
              x1={initialPositionX}
              y1="85"
              x2={positionToX(forwardEndPosition)}
              y2="85"
              stroke="#38bdf8"
              strokeWidth="6"
              strokeLinecap="round"
            />
          )}

          {/* Return path */}
          {returnProgress > 0 && (
            <line
              x1={turningPointX}
              y1="55"
              x2={positionToX(returnEndPosition)}
              y2="55"
              stroke="#f43f5e"
              strokeWidth="6"
              strokeLinecap="round"
            />
          )}

          <text
            x={positionToX(
              journey.initialPosition +
                journey.forwardDistance / 2,
            )}
            y="72"
            textAnchor="middle"
            fill="#38bdf8"
            fontSize="11"
            fontWeight="bold"
          >
            +{journey.forwardDistance} m
          </text>

          {returnProgress > 0 && (
            <text
              x={positionToX(
                turningPoint -
                  journey.returnDistance / 2,
              )}
              y="42"
              textAnchor="middle"
              fill="#f43f5e"
              fontSize="11"
              fontWeight="bold"
            >
              −{journey.returnDistance} m
            </text>
          )}

          {/* Displacement */}
          <line
            x1={initialPositionX}
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
            Displacement:{" "}
            {displacement >= 0 ? "+" : ""}
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
        Distance accumulates the entire path travelled.
        Displacement depends only on the change from the initial
        position to the final position.
      </div>
    </section>
  );
};

