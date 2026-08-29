import type { PartContent } from "../types/course";

export const part1Content: PartContent = {
  title: "Mastering Kinematics",
  subtitle: "Episode 1 — The Language of Motion",

  sections: [
    {
      id: "sec-01",
      number: 1,
      title: "Series Introduction",
      subtitle: "Why precision matters in kinematics",
      content: [
        "Kinematics begins with a precise description of motion.",
        "Before writing an equation, understand the physical motion and establish the reference frame.",
        "The guiding principle for this series is: understand the physical motion before writing an equation."
      ],
      lecturerCue: {
        narrationPrompt: "Introduce the series and establish the habit of interpreting physical motion before choosing equations.",
        keyPoints: ["Kinematics describes motion.", "Physical interpretation comes before equations."],
        timeGuidanceMin: 1
      }
    },
    {
      id: "sec-02",
      number: 2,
      title: "Reference Frames & Coordinates",
      subtitle: "Origin, axis and position",
      content: [
        "Every one-dimensional kinematics problem begins with a reference frame.",
        "Choose an origin x = 0 and a positive direction +x.",
        "The position coordinate x tells us where the particle is relative to that chosen origin."
      ],
      equations: ["x = position coordinate"],
      visualKey: "coordinate-system",
      lecturerCue: {
        narrationPrompt: "Establish the number-line model and show how changing the origin or positive direction changes the coordinate description.",
        keyPoints: ["Origin: x = 0", "Choose +x explicitly", "Signs encode direction"],
        hallQuestion: "If I reverse the positive direction, does the physical motion change?",
        expectedAnswer: "No. The coordinate description changes, but the physical motion does not.",
        timeGuidanceMin: 1
      }
    },
    {
      id: "sec-03",
      number: 3,
      title: "Position",
      subtitle: "Where is the particle?",
      content: [
        "Position describes the location of an object relative to the chosen reference frame.",
        "A positive or negative coordinate identifies the side of the origin along the chosen axis.",
        "Position is not the same thing as distance travelled."
      ],
      equations: ["x = coordinate relative to the origin"],
      lecturerCue: {
        narrationPrompt: "Use the coordinate axis to distinguish location from the amount of ground covered.",
        keyPoints: ["Position is relative to an origin", "Positive and negative values are directional"],
        timeGuidanceMin: 1
      }
    },
    {
      id: "sec-04",
      number: 4,
      title: "Distance",
      subtitle: "Total path length",
      content: [
        "Distance is the total length of the path travelled.",
        "It is a scalar quantity and is never negative.",
        "If the particle reverses direction, the path travelled continues to accumulate."
      ],
      equations: ["d = total path length"],
      lecturerCue: {
        narrationPrompt: "Use a journey with a reversal to show why distance keeps accumulating.",
        keyPoints: ["Distance is scalar", "Distance counts the complete path"],
        timeGuidanceMin: 1
      }
    },
    {
      id: "sec-05",
      number: 5,
      title: "Displacement",
      subtitle: "Change in position",
      content: [
        "Displacement is the change in position coordinate from the initial position to the final position.",
        "Unlike distance, displacement carries directional information.",
        "For one-dimensional motion, displacement is calculated from final and initial coordinates."
      ],
      equations: ["Δx = x_f − x_i", "|Δx| ≤ d"],
      visualKey: "displacement",
      lecturerCue: {
        narrationPrompt: "Contrast path length with the direct change from starting point to ending point.",
        keyPoints: ["Displacement is directional", "It depends only on initial and final position"],
        misconceptionAlert: "Distance and displacement are not interchangeable.",
        timeGuidanceMin: 1
      }
    },
    {
      id: "sec-06",
      number: 6,
      title: "Speed vs Velocity",
      subtitle: "Scalar rate vs directional rate",
      content: [
        "Average speed is total distance divided by elapsed time.",
        "Average velocity is displacement divided by elapsed time.",
        "The two quantities answer different physical questions."
      ],
      equations: ["Average speed = d_total / Δt", "v_avg = Δx / Δt"],
      visualKey: "speed-velocity",
      lecturerCue: {
        narrationPrompt: "Make the scalar-versus-directional distinction explicit before introducing instantaneous velocity.",
        keyPoints: ["Speed uses total distance", "Velocity uses displacement"],
        misconceptionAlert: "Average speed is not generally the arithmetic mean of two speeds.",
        timeGuidanceMin: 1
      }
    },
    {
      id: "sec-07",
      number: 7,
      title: "Instantaneous Velocity",
      subtitle: "Velocity at an instant",
      content: [
        "Instantaneous velocity describes the rate at which position is changing at a particular instant.",
        "It is the conceptual bridge from average motion to motion changing continuously."
      ],
      equations: ["v = lim(Δt→0) Δx/Δt"],
      visualKey: "instantaneous-velocity",
      lecturerCue: {
        narrationPrompt: "Use the speedometer analogy to explain the meaning of velocity at an instant.",
        keyPoints: ["Velocity is a rate of position change", "Instantaneous means at a particular instant"],
        timeGuidanceMin: 1
      }
    },
    {
      id: "sec-08",
      number: 8,
      title: "Acceleration",
      subtitle: "Rate of change of velocity",
      content: [
        "Acceleration describes how velocity changes with time.",
        "A change in velocity can involve a change in magnitude, direction, or both.",
        "Its SI unit is m/s²."
      ],
      equations: ["a = Δv / Δt"],
      visualKey: "acceleration",
      lecturerCue: {
        narrationPrompt: "Shift the student's attention from how position changes to how velocity itself changes.",
        keyPoints: ["Acceleration is a rate of velocity change", "Acceleration is not simply 'how fast something moves'"],
        timeGuidanceMin: 1
      }
    },
    {
      id: "sec-09",
      number: 9,
      title: "The Four (v,a) Sign Cases",
      subtitle: "Speeding up and slowing down",
      content: [
        "When velocity and acceleration point in the same direction, speed increases.",
        "When velocity and acceleration point in opposite directions, speed decreases.",
        "This gives four possible one-dimensional sign combinations."
      ],
      equations: [
        "v > 0, a > 0 → speeding up",
        "v > 0, a < 0 → slowing down",
        "v < 0, a > 0 → slowing down",
        "v < 0, a < 0 → speeding up"
      ],
      visualKey: "sign-cases",
      lecturerCue: {
        narrationPrompt: "Use the four-quadrant visual to destroy the misconception that negative acceleration automatically means deceleration.",
        keyPoints: ["Same direction → speeding up", "Opposite directions → slowing down"],
        misconceptionAlert: "Negative acceleration does not automatically mean slowing down.",
        hallQuestion: "Can an object moving in the negative direction have negative acceleration and still speed up?",
        expectedAnswer: "Yes. Both velocity and acceleration point in the negative direction.",
        timeGuidanceMin: 2
      }
    },
    {
      id: "sec-10",
      number: 10,
      title: "Zero Velocity vs Zero Acceleration",
      subtitle: "Two states students often confuse",
      content: [
        "At the top of a vertical throw, velocity can be zero while gravitational acceleration remains non-zero.",
        "Conversely, an object can have non-zero velocity while acceleration is zero.",
        "Velocity describes the state of motion; acceleration describes how that state is changing."
      ],
      equations: ["v = 0 does not imply a = 0", "a = 0 does not imply v = 0"],
      visualKey: "zero-velocity-zero-acceleration",
      lecturerCue: {
        narrationPrompt: "Use the apex of a vertical toss and a cruising car to separate velocity from acceleration.",
        keyPoints: ["v = 0 can occur while a ≠ 0", "a = 0 can occur while v ≠ 0"],
        misconceptionAlert: "An object momentarily at rest is not necessarily acceleration-free.",
        timeGuidanceMin: 1
      }
    },
    {
      id: "sec-11",
      number: 11,
      title: "Worked Examples",
      subtitle: "Apply the DHD Nexus reasoning framework",
      content: [
        "We now apply the foundational definitions to examination-style problems.",
        "Each solution begins with the physical situation, identifies known and unknown quantities, selects the relevant principle, and only then performs the calculation."
      ],
      lecturerCue: {
        narrationPrompt: "Transition from conceptual understanding to disciplined examination problem solving.",
        keyPoints: ["Interpret first", "Choose the principle", "Calculate second"],
        timeGuidanceMin: 3
      }
    },
    {
      id: "sec-12",
      number: 12,
      title: "Summary & Bridge to Part 2",
      subtitle: "From the language of motion to graphs",
      content: [
        "Kinematics begins with an origin and a positive direction.",
        "Distance is scalar path length; displacement is the change in position.",
        "Average speed uses total distance, while average velocity uses displacement.",
        "Acceleration is the rate of change of velocity.",
        "The next episode moves from these definitions to position-time, velocity-time and acceleration-time graphs."
      ],
      lecturerCue: {
        narrationPrompt: "Consolidate the vocabulary of motion and create anticipation for the graphical treatment in Part 2.",
        keyPoints: ["Coordinate system", "Distance vs displacement", "Speed vs velocity", "Acceleration", "Four sign cases"],
        timeGuidanceMin: 1
      }
    }
  ],

  checkpoints: [
    {
      id: "cp-1-1",
      title: "Distance vs. Displacement in a Security Patrol",
      provenance: "DHD NEXUS CANONICAL CHECKPOINT",
      provenanceDetails: "Approved Part 1 Checkpoint 1.1 — Security Patrol",
      prompt: "A security guard at a university gate walks 50 m due East along a straight fence, then turns around and walks 20 m due West. The entire walk takes 70 seconds. Taking East as the positive direction, determine the requested motion quantities.",
      pauseSeconds: 5,
      tasks: [
        { id: "cp-1-1-a", label: "(a) DISTANCE", prompt: "What is the total distance travelled?", correctAnswer: "70 m", reasoning: "Distance is the total path length: 50 m + 20 m = 70 m.", mathBlocks: ["d = 50\\,\\text{m} + 20\\,\\text{m} = 70\\,\\text{m}"] },
        { id: "cp-1-1-b", label: "(b) DISPLACEMENT", prompt: "What is the net displacement?", correctAnswer: "+30 m (East)", reasoning: "Taking East as positive, the westward leg is negative: Δx = (+50 m) + (−20 m) = +30 m.", mathBlocks: ["\\Delta x = (+50\\,\\text{m}) + (-20\\,\\text{m}) = +30\\,\\text{m}"] },
        { id: "cp-1-1-c", label: "(c) AVERAGE SPEED", prompt: "What is the guard's average speed?", correctAnswer: "1.0 m/s", reasoning: "Average speed uses total distance divided by total elapsed time: 70 m / 70 s = 1.0 m/s.", mathBlocks: ["v_{\\text{avg speed}} = \\frac{70\\,\\text{m}}{70\\,\\text{s}} = 1.0\\,\\text{m/s}"] },
        { id: "cp-1-1-d", label: "(d) AVERAGE VELOCITY", prompt: "What is the guard's average velocity?", correctAnswer: "+0.43 m/s (East)", reasoning: "Average velocity uses displacement divided by elapsed time: +30 m / 70 s = +0.43 m/s, so the direction is East.", mathBlocks: ["v_{\\text{avg}} = \\frac{+30\\,\\text{m}}{70\\,\\text{s}} = +0.43\\,\\text{m/s}"] },
      ]
    },
    {
      id: "cp-1-2",
      title: "The Sign Meaning of Velocity and Acceleration",
      provenance: "AUTHENTIC NIGERIAN UNIVERSITY EXAM",
      provenanceDetails: "Ekiti State University, PHY 101, 2019/2020, Q2 (KIN-031)",
      prompt: "When both the velocity and acceleration of an object have the same algebraic sign, it means the object:",
      pauseSeconds: 5,
      tasks: [
        { id: "cp-1-2-main", label: "MULTIPLE CHOICE", prompt: "Choose the correct answer.", options: ["(A) Slows down", "(B) Is at rest", "(C) Speeds up", "(D) None of the above"], correctAnswer: "(C) Speeds up", reasoning: "If both v and a are positive, the object moves forward while being accelerated forward. If both are negative, the object moves backward while being accelerated backward. In both cases, acceleration acts in the direction of motion, increasing the magnitude of velocity (speed)." }
      ]
    },
    {
      id: "cp-1-3",
      title: "The Meaning of Zero Acceleration",
      provenance: "AUTHENTIC NIGERIAN UNIVERSITY EXAM",
      provenanceDetails: "Adekunle Ajasin University, PHY 101, 2023/2024, Q7 (KIN-002)",
      prompt: "An object moving at constant velocity has zero acceleration because:",
      pauseSeconds: 5,
      tasks: [
        { id: "cp-1-3-main", label: "MULTIPLE CHOICE", prompt: "Choose the correct answer.", options: ["(A) Final velocity equals initial velocity (Δv = 0)", "(B) Final velocity equals two times initial velocity", "(C) Final velocity equals half of initial velocity", "(D) All of the above"], correctAnswer: "(A) Final velocity equals initial velocity (Δv = 0)", reasoning: "Acceleration is the rate of change of velocity. If velocity is constant, vf = vi, so Δv = 0, which requires a = 0 m/s².", mathBlocks: ["a = \\frac{\\Delta v}{\\Delta t}", "v_f = v_i \\Rightarrow \\Delta v = 0 \\Rightarrow a = 0\\,\\text{m/s}^2"] }
      ]
    }
  ]

};

