import type { WorkedExample } from "../types/course";

export const part3WorkedExamples: WorkedExample[] = [
  {
    id: "we3-01",
    title: "Selecting the Efficient Equation: A Bus Between Two Markers",
    provenance: "DHD NEXUS ORIGINAL",
    provenanceDetails:
      "Original worked example authored by DHD Nexus, filling the principal equation-selection role identified in the Part 3 question architecture",
    problemStatement:
      "A bus passes road marker P travelling at 8 m/s and accelerates uniformly. It passes marker Q, 100 m further along the same straight road, 10 s after passing P. Find (a) the bus's acceleration between P and Q, (b) its velocity at Q.",
    lecturerNotes:
      "This problem can be solved two different ways depending on which equation is chosen for part (b) — use that fact explicitly to teach that equation selection is a deliberate choice, not a fixed recipe.",
    steps: [
      {
        stepName: "PROBLEM",
        content: "Find the acceleration and the final velocity of a bus travelling between two markers, given the initial velocity, the distance between markers, and the time taken."
      },
      {
        stepName: "THINK",
        content: "Before reading on: list the five SUVAT quantities for this problem. Which are known? Which two are unknown? Which equation would you reach for first, and why?"
      },
      {
        stepName: "WHAT IS HAPPENING?",
        content: "The bus accelerates uniformly along a straight road from marker P to marker Q. Take the direction of travel as positive."
      },
      {
        stepName: "KNOWN",
        content: "u = 8 m/s, s = 100 m, t = 10 s.",
        mathBlocks: ["u = 8\\,\\text{m/s}, \\quad s = 100\\,\\text{m}, \\quad t = 10\\,\\text{s}"]
      },
      {
        stepName: "UNKNOWN",
        content: "Acceleration a, and final velocity v."
      },
      {
        stepName: "CONCEPT",
        content: "Scan the four SUVAT equations against the known/unknown table. v = u + at has two unknowns (v and a) — not usable yet. s = ½(u+v)t has one unknown (v) — usable, and does not require a at all. s = ut + ½at² has one unknown (a) — usable, and does not require v at all. v² = u² + 2as has two unknowns (v and a) — not usable yet.",
        mathBlocks: ["s = \\tfrac12(u+v)t \\quad \\text{(unknown: } v\\text{ only)}", "s = ut + \\tfrac12at^2 \\quad \\text{(unknown: } a\\text{ only)}"]
      },
      {
        stepName: "WHY THIS METHOD?",
        content: "Two equations are directly usable, each solving for a different unknown without needing the other one first. This is more efficient than solving for a first and then substituting into v = u + at, because each unknown can be found independently and then cross-checked."
      },
      {
        stepName: "SOLUTION",
        content: "(a) Acceleration, using s = ut + ½at²:",
        mathBlocks: [
          "100 = (8)(10) + \\tfrac12a(10)^2",
          "100 = 80 + 50a \\ \\Rightarrow \\ a = \\frac{20}{50} = 0.40\\,\\text{m/s}^2"
        ]
      },
      {
        stepName: "SOLUTION",
        content: "(b) Final velocity, using s = ½(u+v)t directly — no need for the value of a just found:",
        mathBlocks: [
          "100 = \\tfrac12(8+v)(10)",
          "100 = 5(8+v) \\ \\Rightarrow \\ 20 = 8+v \\ \\Rightarrow \\ v = 12.0\\,\\text{m/s}"
        ]
      },
      {
        stepName: "INTERPRETATION",
        content: "The bus accelerates at 0.40 m/s² and reaches 12.0 m/s at marker Q. Both unknowns were found independently, using the equation that matched the available information most directly for each one."
      },
      {
        stepName: "CHECK",
        content: "Cross-check with v = u + at: v = 8 + (0.40)(10) = 12.0 m/s, matching part (b) exactly. A second check with v² = u² + 2as: 144 = 64 + 2(0.40)(100) = 64 + 80 = 144. All four equations agree."
      }
    ]
  },

  {
    id: "we3-02",
    title: "Sign Reasoning and SUVAT: A Braking Car",
    provenance: "DHD NEXUS ORIGINAL",
    provenanceDetails:
      "Original worked example authored by DHD Nexus, filling the braking/sign-convention role identified in the Part 3 question architecture",
    problemStatement:
      "A car travels at +18 m/s along a straight road (positive direction = direction of travel) when the driver applies the brakes, producing a constant acceleration of −3.0 m/s². (a) Is the car speeding up or slowing down immediately after braking begins? (b) Find the car's velocity 4.0 s after braking begins. (c) Find the car's displacement during those 4.0 s. (d) Find the time at which the car comes to rest. (e) If the same acceleration somehow continued to act after that instant, describe what would happen to the car.",
    lecturerNotes:
      "Part (e) is the pedagogical payoff — it forces students to apply the Part 1 sign-case table to a scenario where the acceleration's sign never changes, but its effect does.",
    steps: [
      {
        stepName: "PROBLEM",
        content: "Apply sign reasoning and SUVAT together to a braking car, including what would happen if the braking acceleration continued past the moment the car stops."
      },
      {
        stepName: "THINK",
        content: "Before reading on: what are the signs of v and a here? What does the Part 1 sign rule say about speeding up versus slowing down in this case?"
      },
      {
        stepName: "REFERENCE FRAME",
        content: "Positive direction = the car's initial direction of travel."
      },
      {
        stepName: "KNOWN",
        content: "u = +18 m/s, a = −3.0 m/s².",
        mathBlocks: ["u = +18\\,\\text{m/s}, \\quad a = -3.0\\,\\text{m/s}^2"]
      },
      {
        stepName: "CONCEPT",
        content: "Compare the signs of v and a. Here v > 0 and a < 0 — opposite signs — so by the Part 1 rule the car is slowing down. This has nothing to do with the acceleration being negative on its own; it depends on comparison with the current velocity's sign.",
        mathBlocks: ["\\operatorname{sgn}(v) \\neq \\operatorname{sgn}(a) \\implies \\text{slowing down}"]
      },
      {
        stepName: "SOLUTION",
        content: "(a) Since u > 0 and a < 0, the signs are opposite: the car is slowing down. (b) Velocity at t = 4.0 s, using v = u + at:",
        mathBlocks: ["v = 18 + (-3.0)(4.0) = 18 - 12 = 6.0\\,\\text{m/s}"]
      },
      {
        stepName: "SOLUTION",
        content: "(c) Displacement over the same 4.0 s, using s = ut + ½at²:",
        mathBlocks: ["s = (18)(4.0) + \\tfrac12(-3.0)(4.0)^2 = 72 - 24 = 48\\,\\text{m}"]
      },
      {
        stepName: "SOLUTION",
        content: "(d) Time to come to rest, setting v = 0 in v = u + at:",
        mathBlocks: ["0 = 18 + (-3.0)t \\ \\Rightarrow \\ t = 6.0\\,\\text{s}"]
      },
      {
        stepName: "INTERPRETATION",
        content: "(e) At t = 6.0 s the car is momentarily at rest, but the acceleration is still −3.0 m/s², not zero. If it continued to act, the car would begin moving in the negative direction. Once v < 0 and a is still < 0, the signs match again — by the same sign rule, the car would now be speeding up, in reverse. The acceleration's sign never changed throughout; only the relationship between v and a changed, and with it the physical outcome."
      },
      {
        stepName: "CHECK",
        content: "Units are consistent throughout (m/s, m). The velocity decreases steadily from +18 m/s toward 0 over the first 6.0 s, consistent with a constant deceleration of magnitude 3.0 m/s², and the 4.0 s answer (6.0 m/s) falls sensibly between the start and the stopping time."
      }
    ]
  },

  {
    id: "we3-03",
    title: "Challenge: The Equation-Selection Trap",
    provenance: "DHD NEXUS ORIGINAL CHALLENGE PROBLEM",
    provenanceDetails:
      "DHD Nexus Original Challenge Problem — Challenge F, deliberately engineered to test equation-selection reasoning rather than arithmetic",
    problemStatement:
      "A cyclist passes point A moving at 4 m/s and accelerates uniformly. 50 m further along the same straight road she passes point B, 5 s after passing A. Find (a) her acceleration, (b) her velocity at B.",
    lecturerNotes:
      "Use PAUSE — TRY THIS YOURSELF before the KNOWN/UNKNOWN step is revealed. Many students will reach for v² = u² + 2as immediately because it contains u and s — the reveal should make explicit why that instinct fails here.",
    steps: [
      {
        stepName: "PROBLEM",
        content: "Determine acceleration and final velocity for a cyclist, resisting the temptation to start with the equation that 'looks like it has the most known numbers'."
      },
      {
        stepName: "THINK",
        content: "PAUSE — TRY THIS YOURSELF. List the known and unknown quantities. A student immediately writes v² = u² + 2as, reasoning that u and s are both known. Before reading on: is that equation actually usable yet? Count its unknowns, not its knowns."
      },
      {
        stepName: "KNOWN",
        content: "u = 4 m/s, s = 50 m, t = 5 s.",
        mathBlocks: ["u = 4\\,\\text{m/s}, \\quad s = 50\\,\\text{m}, \\quad t = 5\\,\\text{s}"]
      },
      {
        stepName: "UNKNOWN",
        content: "Acceleration a, and final velocity v."
      },
      {
        stepName: "CONCEPT",
        content: "v² = u² + 2as involves u, v, a and s. Of these, v and a are both unknown — two unknowns, so this equation cannot be solved directly yet, even though u and s are both known numbers in the problem. The equation that is actually usable first is s = ut + ½at², which involves u, s, a and t — only a is unknown.",
        mathBlocks: ["v^2 = u^2 + 2as \\quad \\text{(unknowns: } v \\text{ and } a \\text{ — not yet usable)}", "s = ut + \\tfrac12at^2 \\quad \\text{(unknown: } a \\text{ only — usable now)}"]
      },
      {
        stepName: "WHY THIS METHOD?",
        content: "The clue is not which numbers appear in an equation, but how many quantities in that equation are still unknown. s = ut + ½at² has exactly one unknown here, so it is the correct starting point, even though it 'looks less complete' than v² = u² + 2as at first glance."
      },
      {
        stepName: "SOLUTION",
        content: "(a) Acceleration, using s = ut + ½at²:",
        mathBlocks: [
          "50 = (4)(5) + \\tfrac12a(5)^2",
          "50 = 20 + 12.5a \\ \\Rightarrow \\ a = \\frac{30}{12.5} = 2.4\\,\\text{m/s}^2"
        ]
      },
      {
        stepName: "SOLUTION",
        content: "(b) Velocity at B, now using v = u + at with a known:",
        mathBlocks: ["v = 4 + (2.4)(5) = 4 + 12 = 16.0\\,\\text{m/s}"]
      },
      {
        stepName: "INTERPRETATION",
        content: "The cyclist accelerates at 2.4 m/s² and reaches 16.0 m/s at B. v² = u² + 2as was never wrong — it was simply not usable until a had already been found by another route."
      },
      {
        stepName: "CHECK",
        content: "Verify with v² = u² + 2as, now that both u and a and s are all known: v² = (4)² + 2(2.4)(50) = 16 + 240 = 256, so v = 16.0 m/s — matching part (b) exactly, and confirming the equation is only useful for checking here, not for starting."
      }
    ]
  }
];
