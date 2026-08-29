import type { PartContent } from "../types/course";

export const part2Content: PartContent = {
  title: "Seeing Motion: Graphs",
  subtitle: "Episode 2 — Reading Position, Velocity and Acceleration Graphs",

  sections: [
    {
      id: "sec2-01",
      number: 1,
      title: "From Words to Pictures",
      subtitle: "Why graphs are the physicist's shorthand for motion",
      content: [
        "In Part 1 we described motion using words and signed numbers: position, displacement, velocity and acceleration.",
        "A graph packages the same information into a single picture. A motion graph shows how one quantity changes as time changes, and its shape encodes the physics.",
        "The guiding idea for this episode is: the gradient of a motion graph is always a rate of change, and the area under a motion graph is always an accumulated quantity."
      ],
      lecturerCue: {
        narrationPrompt: "Frame graphs as a compact restatement of Part 1's definitions, not a new topic. Preview that gradient and area will do all the work.",
        keyPoints: ["Graphs encode the same physics as Part 1's definitions", "Gradient = rate of change", "Area = accumulated quantity"],
        timeGuidanceMin: 1
      }
    },
    {
      id: "sec2-02",
      number: 2,
      title: "Position–Time Graphs",
      subtitle: "Reading where the particle is",
      content: [
        "A position–time (x–t) graph plots position on the vertical axis against time on the horizontal axis.",
        "A horizontal line means the particle is not moving — its position is not changing with time.",
        "A rising line means the particle is moving in the positive direction; a falling line means it is moving in the negative direction. A straight line means the velocity is constant, because a straight line has a constant gradient."
      ],
      lecturerCue: {
        narrationPrompt: "Sketch three simple x–t lines — flat, rising, falling — and ask students to describe the motion in words before naming the gradient.",
        keyPoints: ["Vertical axis = position", "Horizontal axis = time", "Straight line = constant velocity"],
        misconceptionAlert: "A horizontal x–t line means zero velocity, not zero position.",
        timeGuidanceMin: 1
      }
    },
    {
      id: "sec2-03",
      number: 3,
      title: "The Gradient of a Position–Time Graph",
      subtitle: "Average gradient vs instantaneous gradient",
      content: [
        "The gradient of an x–t graph is velocity. This follows directly from Part 1's definition v = Δx/Δt: gradient is exactly 'rise over run', and here the rise is displacement and the run is elapsed time.",
        "The gradient of the straight line joining two points on the curve is the average velocity over that interval — this is called a secant line.",
        "The gradient of the tangent line at a single point is the instantaneous velocity at that instant. As the interval used for the secant shrinks toward zero, the secant line rotates until it coincides with the tangent — this is the graphical picture behind Part 1's limit definition of instantaneous velocity."
      ],
      equations: ["v_avg = Δx / Δt (secant gradient)", "v = dx/dt (tangent gradient)"],
      visualKey: "position-time-gradient",
      lecturerCue: {
        narrationPrompt: "Use the interactive visual to shrink the interval live and let students watch the secant line converge onto the tangent line.",
        keyPoints: ["Secant gradient = average velocity", "Tangent gradient = instantaneous velocity", "Secant → tangent as Δt → 0"],
        misconceptionAlert: "The gradient of an x–t graph is velocity, never acceleration.",
        hallQuestion: "If a car's x–t graph curves upward more and more steeply, is the car's velocity constant?",
        expectedAnswer: "No — a curving x–t graph means the gradient itself is changing, so velocity is changing, which means the car is accelerating.",
        timeGuidanceMin: 2
      }
    },
    {
      id: "sec2-04",
      number: 4,
      title: "Velocity–Time Graphs",
      subtitle: "Reading how fast, and in which direction",
      content: [
        "A velocity–time (v–t) graph plots velocity on the vertical axis against time on the horizontal axis.",
        "Points above the horizontal axis represent motion in the positive direction; points below represent motion in the negative direction. Crossing the axis marks an instant where the particle is momentarily at rest and may reverse direction.",
        "A horizontal v–t line means constant velocity, hence zero acceleration. A straight sloped line means constant acceleration."
      ],
      lecturerCue: {
        narrationPrompt: "Contrast a horizontal v–t line (cruising) with a sloped v–t line (accelerating), reinforcing the v = 0, a ≠ 0 turning-point idea from Part 1.",
        keyPoints: ["Vertical axis = velocity", "Sign of v = direction of motion", "Axis crossing = momentary rest, a possible turning point"],
        timeGuidanceMin: 1
      }
    },
    {
      id: "sec2-05",
      number: 5,
      title: "The Gradient of a Velocity–Time Graph",
      subtitle: "Gradient of v–t is acceleration",
      content: [
        "By the same reasoning as Section 3, the gradient of a v–t graph is acceleration, since a = Δv/Δt is exactly 'rise over run' with velocity on the rise and time on the run.",
        "A steep v–t line means a large magnitude of acceleration; a gentle line means a small magnitude. The sign of the gradient gives the sign of the acceleration, exactly as in Part 1's four (v, a) sign cases.",
        "A curving v–t graph means the acceleration itself is changing — this is variable acceleration, a topic reserved for later episodes."
      ],
      equations: ["a = Δv / Δt (gradient of v–t graph)"],
      lecturerCue: {
        narrationPrompt: "Explicitly connect gradient sign to the Part 1 sign-case table: a positive gradient does not by itself mean 'speeding up' — that still depends on the sign of v at that instant.",
        keyPoints: ["Gradient of v–t graph = acceleration", "Steeper line = larger |a|", "Sign of gradient = sign of a, not automatically speeding up or down"],
        misconceptionAlert: "A steep v–t line means large acceleration, not large velocity.",
        timeGuidanceMin: 1
      }
    },
    {
      id: "sec2-06",
      number: 6,
      title: "Area Under a Velocity–Time Graph",
      subtitle: "Displacement, distance, and the meaning of reversal",
      content: [
        "The area between a v–t graph and the time axis, over some interval, equals the displacement during that interval. This follows because area is built from strips of height v and width Δt, and v·Δt is exactly the displacement contributed by that strip.",
        "Area above the time axis counts as positive displacement; area below the axis counts as negative displacement. The net displacement is the signed sum of these areas.",
        "Total distance travelled is different: it is the sum of the magnitudes of each region's area, ignoring sign. When a v–t graph crosses the axis, the particle reverses direction, and the areas on either side of the crossing must be added as magnitudes to get distance, but combined with their signs to get displacement."
      ],
      equations: ["Δx = area under v–t graph (signed)", "distance = sum of |area| of each region"],
      visualKey: "velocity-time-area",
      lecturerCue: {
        narrationPrompt: "Use the interactive visual's reversal case to show numerically that displacement and distance disagree whenever the graph crosses the axis, connecting directly back to Part 1 Section 1.3.",
        keyPoints: ["Area above axis = positive displacement", "Area below axis = negative displacement", "Distance sums magnitudes; displacement sums signed values"],
        misconceptionAlert: "The area under a v–t graph is never automatically 'the distance travelled' — it is the signed displacement unless the graph never crosses the axis.",
        hallQuestion: "If a v–t graph is a straight line from +6 m/s to −6 m/s, is the net displacement positive, negative, or zero?",
        expectedAnswer: "By symmetry the positive area above the axis exactly cancels the negative area below the axis, so the net displacement is zero — even though the particle travelled a nonzero total distance.",
        timeGuidanceMin: 3
      }
    },
    {
      id: "sec2-07",
      number: 7,
      title: "Acceleration–Time Graphs",
      subtitle: "Completing the family of motion graphs",
      content: [
        "An acceleration–time (a–t) graph plots acceleration against time.",
        "By the same area argument as Section 6, the area under an a–t graph equals the change in velocity, Δv, over that interval, since a·Δt is exactly the contribution to Δv from that strip.",
        "A horizontal a–t line means constant acceleration — the case this episode's graphical derivation (Section 8) is built around. A changing a–t graph means variable acceleration, which requires the calculus methods introduced later in the series."
      ],
      lecturerCue: {
        narrationPrompt: "Keep this section brief — its purpose is completeness and to preview Part 5's variable-acceleration content, not to introduce new graphical technique.",
        keyPoints: ["Area under a–t graph = Δv", "Horizontal a–t line = constant acceleration"],
        timeGuidanceMin: 1
      }
    },
    {
      id: "sec2-08",
      number: 8,
      title: "Deriving the Equations of Motion from the Graph",
      subtitle: "Where v = u + at and s = ut + ½at² actually come from",
      content: [
        "For constant acceleration, a v–t graph is a straight line rising from an initial velocity u at t = 0 to a velocity v at time t.",
        "The gradient of this line is the acceleration a. Since gradient equals rise over run, a = (v − u)/t, which rearranges directly to v = u + at — the first equation of motion, obtained purely from reading a gradient.",
        "The area under this same line, from 0 to t, is a trapezium with parallel sides u and v and width t. Its area gives the displacement s = ½(u + v)t. Substituting v = u + at into this area result produces s = ut + ½at², and eliminating t between the two produces v² = u² + 2as. Every equation of motion introduced formally in Part 3 is therefore a direct algebraic consequence of one straight-line graph."
      ],
      equations: ["v = u + at", "s = ½(u + v)t", "s = ut + ½at²", "v² = u² + 2as"],
      visualKey: "suvat-derivation",
      lecturerCue: {
        narrationPrompt: "This is the pedagogical centrepiece of Part 2. Walk the derivation slowly using the interactive visual before Part 3 ever states these equations as 'given'.",
        keyPoints: ["Gradient of the v–t line gives v = u + at", "Trapezium area gives s = ½(u+v)t, which becomes s = ut + ½at²", "Eliminating t gives v² = u² + 2as"],
        misconceptionAlert: "The equations of motion are not arbitrary formulas to memorise — each one is a direct algebraic consequence of gradient and area on a single v–t graph.",
        timeGuidanceMin: 3
      }
    },
    {
      id: "sec2-09",
      number: 9,
      title: "Summary & Bridge to Part 3",
      subtitle: "From pictures to equations",
      content: [
        "Position–time graphs: gradient is velocity; secant gradient is average velocity, tangent gradient is instantaneous velocity.",
        "Velocity–time graphs: gradient is acceleration; the area under the graph is displacement, with area above the axis positive and area below the axis negative; total distance sums the magnitudes of each region.",
        "For constant acceleration, the v–t graph's gradient and area together generate all of the equations of motion: v = u + at, s = ½(u + v)t, s = ut + ½at², and v² = u² + 2as.",
        "In Part 3, we take these same equations and build a disciplined framework for choosing which one to use in a given problem."
      ],
      lecturerCue: {
        narrationPrompt: "Recap the gradient/area rule one final time, then bridge directly into Part 3's equation-selection framework.",
        keyPoints: ["Gradient of x–t = velocity", "Gradient of v–t = acceleration", "Area under v–t = displacement"],
        timeGuidanceMin: 1
      }
    }
  ],

  checkpoints: [
    {
      id: "cp-2-1",
      title: "Reading the Gradient of a Position–Time Graph",
      provenance: "DHD NEXUS ORIGINAL",
      provenanceDetails: "Original conceptual checkpoint authored by DHD Nexus",
      prompt: "A courier drone's position–time graph is a straight line from (t = 0 s, x = 4 m) to (t = 5 s, x = 24 m).",
      pauseSeconds: 5,
      tasks: [
        {
          id: "cp-2-1-a",
          label: "(a) GRADIENT",
          prompt: "What is the gradient of this line, and what physical quantity does it represent?",
          correctAnswer: "+4.0 m/s (the drone's velocity)",
          reasoning: "Gradient = rise/run = (24 m − 4 m)/(5 s − 0 s) = 20/5 = +4.0 m/s. Since the gradient of an x–t graph is velocity, the drone moves at a constant +4.0 m/s.",
          mathBlocks: ["v = \\frac{\\Delta x}{\\Delta t} = \\frac{24-4}{5-0} = +4.0\\,\\text{m/s}"]
        }
      ]
    },
    {
      id: "cp-2-2",
      title: "Sign of the Area Under a v–t Graph",
      provenance: "DHD NEXUS ORIGINAL",
      provenanceDetails: "Original conceptual checkpoint authored by DHD Nexus",
      prompt: "A v–t graph is a straight line falling from +6 m/s at t = 0 s to −6 m/s at t = 8 s, crossing zero at t = 4 s.",
      pauseSeconds: 5,
      tasks: [
        {
          id: "cp-2-2-main",
          label: "MULTIPLE CHOICE",
          prompt: "Which statement correctly compares the net displacement to the total distance travelled over 0–8 s?",
          options: [
            "(A) They are equal and both positive",
            "(B) The displacement is zero, but the distance travelled is nonzero",
            "(C) The distance travelled is zero, but the displacement is nonzero",
            "(D) Both are zero"
          ],
          correctAnswer: "(B) The displacement is zero, but the distance travelled is nonzero",
          reasoning: "The graph is symmetric about the zero crossing at t = 4 s, so the positive area (0–4 s) exactly cancels the negative area (4–8 s), giving zero net displacement. Distance sums the magnitudes of both regions instead of their signs, so it is nonzero — the particle moved out and came back."
        }
      ]
    },
    {
      id: "cp-2-3",
      title: "Gradient of a Velocity–Time Graph",
      provenance: "DHD NEXUS ORIGINAL",
      provenanceDetails: "Original conceptual checkpoint authored by DHD Nexus",
      prompt: "A train's v–t graph is a horizontal line at v = 10 m/s for 0 ≤ t ≤ 5 s.",
      pauseSeconds: 5,
      tasks: [
        {
          id: "cp-2-3-a",
          label: "(a) GRADIENT AND MEANING",
          prompt: "What is the gradient of this line, and what does it mean physically?",
          correctAnswer: "0 m/s²; the train's velocity is not changing, so its acceleration is zero.",
          reasoning: "A horizontal v–t line has zero gradient. Since the gradient of a v–t graph is acceleration, a = 0 m/s². This does not mean the train is stationary — it means the train is moving at a constant, unchanging velocity.",
          mathBlocks: ["a = \\frac{\\Delta v}{\\Delta t} = \\frac{0}{5} = 0\\,\\text{m/s}^2"]
        }
      ]
    }
  ]
};
