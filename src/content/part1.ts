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

  workedExamples: [
    {
      id: "ex-01",
      title: "Displacement from Average Velocity",
      source: "Nile University of Nigeria, PHY 101, 2022/2023-1, Q18",
      provenance: "Authentic Nigerian University Examination",
      problem: "A car travels in the +x direction. For the first 4.00 s, its average velocity is +6.25 m/s. How far does it travel in 4.00 s?",
      answer: "25.00 m"
    },
    {
      id: "ex-02",
      title: "Average Speed — Equal-Distance Trap",
      source: "Ekiti State University, PHY 101, 2019/2020, Q25",
      provenance: "Authentic Nigerian University Examination — Clean",
      problem: "A two-leg journey uses equal-distance segments. Determine the average speed and avoid treating the two speeds as an ordinary arithmetic mean.",
      answer: "Use total distance divided by total time."
    },
    {
      id: "ex-03",
      title: "Velocity Change & Sign Reasoning",
      source: "DHD-P1-01 — Adapted Academic Problem",
      provenance: "Adapted from OpenStax University Physics Vol. 1 / DHD Nexus design",
      problem: "Track a change in velocity using acceleration and time, then determine whether the particle is speeding up or slowing down from the directions of v and a.",
      answer: "Determine Δv from aΔt, then compare the directions/signs of v and a."
    }
  ],

  checkpoints: [
    {
      id: "cp-01",
      title: "Direction Check",
      provenance: "DHD NEXUS CONCEPTUAL CHECKPOINT",
      provenanceDetails:
        "Kinematics — coordinate direction and physical motion",
      prompt:
        "Pause and reason before answering: If the positive direction is reversed, does the physical motion change?",
      tasks: [
        {
          id: "cp-01-task-01",
          label: "CONCEPT",
          prompt:
            "If the positive direction is reversed, does the physical motion change?",
          correctAnswer: "No.",
          reasoning:
            "The coordinate description changes, but the physical motion does not."
        }
      ]
    },

    {
      id: "cp-02",
      title: "Sign Reasoning",
      provenance: "DHD NEXUS CONCEPTUAL CHECKPOINT",
      provenanceDetails:
        "Kinematics — velocity and acceleration sign reasoning",
      prompt:
        "Pause and reason from the signs of velocity and acceleration.",
      tasks: [
        {
          id: "cp-02-task-01",
          label: "SIGN REASONING",
          prompt:
            "If v < 0 and a < 0, is the particle slowing down?",
          correctAnswer: "No.",
          reasoning:
            "Velocity and acceleration point in the same direction, so the particle speeds up."
        }
      ]
    },

    {
      id: "cp-03",
      title: "Zero-State Check",
      provenance: "DHD NEXUS CONCEPTUAL CHECKPOINT",
      provenanceDetails:
        "Kinematics — vertical motion and turning points",
      prompt:
        "At the top of a vertical throw, distinguish between instantaneous velocity and acceleration.",
      tasks: [
        {
          id: "cp-03-task-01",
          label: "TURNING POINT",
          prompt:
            "At the top of a vertical throw, is acceleration zero?",
          correctAnswer: "No.",
          reasoning:
            "Velocity is momentarily zero, but gravitational acceleration remains downward."
        }
      ]
    }
  ]
};

