import type { WorkedExample } from "../types/course";

export const part6WorkedExamples: WorkedExample[] = [
  {
    id: "we6-01",
    title: "Multi-Stage Motion: A Lift in a High-Rise",
    provenance: "DHD NEXUS ORIGINAL CHALLENGE PROBLEM",
    provenanceDetails:
      "DHD Nexus Original Challenge Problem — Challenge C (structure adapted from MIT OpenCourseWare 8.01SC Problem Set 1, 'Elevator Trip')",
    problemStatement:
      "A commercial lift in a Lagos high-rise starts from rest at the ground floor and must travel 45 m to the top floor. It accelerates uniformly for the first 3 s, then travels at the constant velocity it reached for the next 9 s, then decelerates uniformly (same magnitude as the initial acceleration) to come to rest exactly at the top floor. (a) Find the acceleration during stage 1. (b) Find the distance covered during stage 1 and stage 3 combined, and hence confirm the distance covered during stage 2. (c) Find the total time for the trip and the average velocity for the whole trip. (d) Is the average velocity for the whole trip equal to the constant velocity of stage 2? Explain why or why not.",
    lecturerNotes:
      "The deceleration magnitude equalling the acceleration magnitude forces stage 3 to last exactly as long as stage 1 (3 s) — point this symmetry out explicitly once it emerges from the algebra, rather than assuming it as given.",
    steps: [
      {
        stepName: "PROBLEM",
        content: "Model a three-stage journey (accelerate, cruise, decelerate) and find the acceleration, stage distances, total time, and average velocity, using only the total distance and the given stage durations."
      },
      {
        stepName: "WHAT IS HAPPENING?",
        content: "The lift speeds up uniformly for 3 s, travels at that top speed for 9 s, then slows uniformly back to rest, covering 45 m in total. Take upward as positive."
      },
      {
        stepName: "REFERENCE FRAME",
        content: "Upward = positive. Stage 1: 0 to 3 s. Stage 2: 3 s to 12 s. Stage 3: 12 s to the (unknown) end of the trip."
      },
      {
        stepName: "KNOWN",
        content: "Total distance = 45 m. Stage 1 duration t₁ = 3 s. Stage 2 duration t₂ = 9 s. Stage 3 deceleration magnitude = stage 1 acceleration magnitude a.",
        mathBlocks: ["t_1 = 3\\,\\text{s}, \\quad t_2 = 9\\,\\text{s}, \\quad s_{\\text{total}} = 45\\,\\text{m}"]
      },
      {
        stepName: "CONCEPT",
        content: "Because stage 3 decelerates from the same speed reached in stage 1, at the same magnitude, it must take exactly as long as stage 1 to reach zero again: t₃ = v_max/a = (a·t₁)/a = t₁ = 3 s. This lets every stage distance be written in terms of the single unknown a.",
        mathBlocks: ["v_{\\max} = a t_1, \\qquad t_3 = \\frac{v_{\\max}}{a} = t_1"]
      },
      {
        stepName: "SOLUTION",
        content: "(a) Writing each stage's distance in terms of a and summing to 45 m:",
        mathBlocks: [
          "s_1 = \\tfrac12at_1^2, \\quad s_2 = (at_1)t_2, \\quad s_3 = s_1",
          "45 = a t_1^2 + a t_1 t_2 = a(3)(3+9) = 36a \\ \\Rightarrow \\ a = 1.25\\,\\text{m/s}^2"
        ]
      },
      {
        stepName: "SOLUTION",
        content: "(b) With a = 1.25 m/s², v_max = a·t₁ = 3.75 m/s:",
        mathBlocks: [
          "s_1 = \\tfrac12(1.25)(3)^2 = 5.625\\,\\text{m} = s_3",
          "s_1+s_3 = 11.25\\,\\text{m} \\ \\Rightarrow \\ s_2 = 45 - 11.25 = 33.75\\,\\text{m}",
          "\\text{Check: } s_2 = v_{\\max}t_2 = (3.75)(9) = 33.75\\,\\text{m} \\ \\checkmark"
        ]
      },
      {
        stepName: "SOLUTION",
        content: "(c) Total time and average velocity:",
        mathBlocks: [
          "t_{\\text{total}} = t_1+t_2+t_3 = 3+9+3 = 15\\,\\text{s}",
          "\\bar v = \\frac{45}{15} = 3.0\\,\\text{m/s}"
        ]
      },
      {
        stepName: "INTERPRETATION",
        content: "(d) The average velocity (3.0 m/s) is less than stage 2's constant velocity (3.75 m/s), and they are not equal. This is because the lift spends 6 of its 15 seconds moving more slowly than 3.75 m/s (accelerating and decelerating), which pulls the time-weighted average below the cruise speed — average velocity is not simply 'the speed in the middle' of a journey."
      },
      {
        stepName: "CHECK",
        content: "s₁ + s₂ + s₃ = 5.625 + 33.75 + 5.625 = 45 m, matching the given total exactly. All stage times sum to 15 s. Units are consistent throughout."
      }
    ]
  },

  {
    id: "we6-02",
    title: "Method Selection Within One Problem: A Test Sled",
    provenance: "DHD NEXUS ORIGINAL",
    provenanceDetails: "Original worked example authored by DHD Nexus",
    problemStatement:
      "A rail-mounted test sled starts from rest. For the first 4 s, its acceleration is a(t) = 1.5t m/s² (thrust building up as fuel pressure rises). From t = 4 s onward, the thrust stabilises and the sled continues with the constant acceleration it had reached at t = 4 s, for a further 5 s. (a) Explain why stage 1 requires calculus while stage 2 does not. (b) Find the sled's velocity and displacement at t = 4 s. (c) Find its velocity and total displacement at the end of stage 2.",
    lecturerNotes:
      "The pedagogical point is entirely in part (a) — do not let students skip straight to the numbers without first justifying the method switch.",
    steps: [
      {
        stepName: "PROBLEM",
        content: "Solve a two-stage problem in which the first stage has genuinely variable acceleration and the second stage, beginning from the value reached at the end of the first, is constant."
      },
      {
        stepName: "THINK",
        content: "Before reading on: is a(t) = 1.5t constant during stage 1? What does the phrase 'continues with the constant acceleration it had reached at t = 4 s' tell you about stage 2?"
      },
      {
        stepName: "WHAT IS HAPPENING?",
        content: "During stage 1, acceleration itself increases with time — this is Part 5's Case A. Once the thrust stabilises, acceleration stops changing and stays fixed at whatever value it reached — this is now ordinary constant-acceleration motion."
      },
      {
        stepName: "REFERENCE FRAME",
        content: "Direction of travel = positive. u = 0, s = 0 at t = 0."
      },
      {
        stepName: "KNOWN",
        content: "Stage 1: a(t) = 1.5t m/s² for 0 ≤ t ≤ 4 s, u = 0, s = 0. Stage 2: constant a = a(4), duration 5 s.",
        mathBlocks: ["a(t) = 1.5t, \\quad 0 \\le t \\le 4\\,\\text{s}"]
      },
      {
        stepName: "CONCEPT",
        content: "Stage 1 requires Case A: a = dv/dt must be integrated as a genuine function of t, since a(t) is not constant. Stage 2, once the acceleration value at t = 4 s is fixed, satisfies Part 3's constant-acceleration assumption exactly, so SUVAT becomes valid again from that point.",
        mathBlocks: ["\\int_0^v dv = \\int_0^t 1.5t'\\,dt'"]
      },
      {
        stepName: "WHY THIS METHOD?",
        content: "Using SUVAT for stage 1 would be incorrect, since a(t) is not fixed there. Using calculus for stage 2 would not be wrong, but it would be unnecessary — once a is confirmed constant, Part 3's equations are the more direct route."
      },
      {
        stepName: "SOLUTION",
        content: "(a) Justification given above. (b) Integrating a(t) = 1.5t twice:",
        mathBlocks: [
          "v(t) = 0.75t^2, \\qquad s(t) = 0.25t^3",
          "v(4) = 0.75(16) = 12\\,\\text{m/s}, \\qquad s(4) = 0.25(64) = 16\\,\\text{m}"
        ]
      },
      {
        stepName: "SOLUTION",
        content: "(c) Stage 2 constant acceleration is a(4) = 1.5(4) = 6 m/s², with u = 12 m/s for a further 5 s:",
        mathBlocks: [
          "v_{\\text{end}} = 12 + 6(5) = 42\\,\\text{m/s}",
          "s_2 = 12(5) + \\tfrac12(6)(5)^2 = 60 + 75 = 135\\,\\text{m}",
          "s_{\\text{total}} = 16 + 135 = 151\\,\\text{m}"
        ]
      },
      {
        stepName: "INTERPRETATION",
        content: "The sled ends stage 1 at 12 m/s having covered 16 m using calculus, then covers a further 135 m under ordinary constant acceleration, reaching 42 m/s after a total of 151 m — two different methods, correctly matched to two genuinely different physical regimes within one problem."
      },
      {
        stepName: "CHECK",
        content: "Differentiating v(t) = 0.75t² gives a(t) = 1.5t, confirming stage 1. At the stage boundary, stage 1's final velocity (12 m/s) was correctly used as stage 2's initial velocity u, not restarted from zero."
      }
    ]
  },

  {
    id: "we6-03",
    title: "Capstone: A Delivery Rider's Journey",
    provenance: "DHD NEXUS ORIGINAL",
    provenanceDetails:
      "Original capstone worked example authored by DHD Nexus, filling the general multi-stage synthesis role identified in the Part 6 question architecture (Capstone A)",
    problemStatement:
      "A delivery rider sets off from rest and accelerates uniformly to 15 m/s in 5 s. She then travels at this constant velocity for 20 s. She then brakes uniformly, coming to rest in a further 3 s at a junction. (a) Explain why SUVAT may be applied separately to each of the three stages, but not to the entire journey as a single stage. (b) Find the acceleration during the accelerating and braking stages. (c) Find the total distance travelled and the average velocity for the whole trip. (d) If the braking stage had not been uniform, which of your answers above would remain valid, and which would not?",
    lecturerNotes:
      "This is the episode's capstone: walk it using the full UNDERSTAND → REPRESENT → IDENTIFY → CHOOSE → SOLVE → INTERPRET → CHECK framework explicitly, narrating each step by name.",
    steps: [
      {
        stepName: "PROBLEM",
        content: "Model a three-stage journey using the full seven-step reasoning framework, then reason about which results would survive a change to the problem's assumptions."
      },
      {
        stepName: "THINK",
        content: "UNDERSTAND: before any calculation, describe this journey in one sentence. Is the acceleration constant across the whole trip, or only within each stage separately?"
      },
      {
        stepName: "WHAT IS HAPPENING?",
        content: "[UNDERSTAND] The rider speeds up uniformly, cruises at constant velocity, then brakes uniformly to a stop — three distinct constant-acceleration regimes in sequence, not one motion with a single acceleration throughout."
      },
      {
        stepName: "REFERENCE FRAME",
        content: "[REPRESENT] Direction of travel = positive throughout all three stages."
      },
      {
        stepName: "KNOWN",
        content: "[IDENTIFY] Stage 1: u=0, v=15 m/s, t=5 s. Stage 2: v=15 m/s constant, t=20 s. Stage 3: u=15 m/s, v=0, t=3 s.",
        mathBlocks: ["t_1=5\\,\\text{s}, \\quad t_2=20\\,\\text{s}, \\quad t_3=3\\,\\text{s}"]
      },
      {
        stepName: "CONCEPT",
        content: "[CHOOSE] Each stage individually has constant acceleration (including stage 2, where a = 0), so SUVAT applies within each one separately. The journey as a whole does not have one constant acceleration — it has three different values in sequence — so no single SUVAT equation can be applied across all three stages at once.",
        mathBlocks: ["a_1 = \\frac{v-u}{t_1}, \\qquad a_3 = \\frac{v-u}{t_3}"]
      },
      {
        stepName: "SOLUTION",
        content: "(b) Accelerations:",
        mathBlocks: [
          "a_1 = \\frac{15-0}{5} = 3.0\\,\\text{m/s}^2",
          "a_3 = \\frac{0-15}{3} = -5.0\\,\\text{m/s}^2"
        ]
      },
      {
        stepName: "SOLUTION",
        content: "(c) [SOLVE] Stage distances, using s = ½(u+v)t for stages 1 and 3, and s = vt for the constant-velocity stage 2:",
        mathBlocks: [
          "s_1 = \\tfrac12(0+15)(5) = 37.5\\,\\text{m}, \\quad s_2 = (15)(20) = 300\\,\\text{m}, \\quad s_3 = \\tfrac12(15+0)(3) = 22.5\\,\\text{m}",
          "s_{\\text{total}} = 37.5+300+22.5 = 360\\,\\text{m}, \\quad t_{\\text{total}} = 28\\,\\text{s}",
          "\\bar v = \\frac{360}{28} \\approx 12.9\\,\\text{m/s}"
        ]
      },
      {
        stepName: "INTERPRETATION",
        content: "[INTERPRET] The rider covers 360 m in 28 s at an average velocity of about 12.9 m/s — noticeably below the 15 m/s cruise speed, again because time spent accelerating and braking pulls the time-weighted average down."
      },
      {
        stepName: "CHECK",
        content: "[CHECK] Stage distances sum exactly to 360 m; stage times sum exactly to 28 s. (d) If braking were not uniform: part (a)'s justification for stages 1 and 2 is unaffected. Part (b)'s value for a₃ would no longer represent a single constant acceleration — braking would have to be described by a(t) or a(s) instead. The specific stage-3 formula s₃ = ½(u+v)t in part (c) would no longer be valid (it assumes constant acceleration), so the total distance and average velocity in part (c) would both need to be recalculated using whatever functional form the braking actually followed."
      }
    ]
  }
];
