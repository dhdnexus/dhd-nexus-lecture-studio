import type { WorkedExample } from "../types/course";

export const part4WorkedExamples: WorkedExample[] = [
  {
    id: "we4-01",
    title: "Velocity and Acceleration from a Position Function",
    provenance: "DHD NEXUS ORIGINAL",
    provenanceDetails:
      "Original worked example authored by DHD Nexus, filling the position-function differentiation role identified in the Part 4 question architecture",
    problemStatement:
      "A particle moves along a straight line so that its position is x(t) = 2t³ − 9t² + 12t (metres), for t ≥ 0. (a) Find v(t) and a(t) by differentiation. (b) Find the velocity and acceleration at t = 1 s and at t = 3 s. (c) At t = 1 s, is the particle speeding up or slowing down? Explain, including what is happening to its velocity just before and just after this instant.",
    lecturerNotes:
      "t = 1 s is a genuine turning point of x(t) (v = 0 there) with a ≠ 0 — use this to explicitly reconnect to Part 1 Section 1.7 ('v = 0 does not imply a = 0'), now demonstrated by calculus rather than asserted.",
    steps: [
      {
        stepName: "PROBLEM",
        content: "Differentiate a given position function twice to obtain velocity and acceleration, then interpret the results physically at two instants."
      },
      {
        stepName: "THINK",
        content: "Before reading on: what do you expect the shape of v(t) and a(t) to be, given that x(t) is a cubic in t? Will acceleration here be constant?"
      },
      {
        stepName: "WHAT IS HAPPENING?",
        content: "This is not a constant-acceleration situation — x(t) is a cubic, so its second derivative will vary with time. The definitions v = dx/dt and a = dv/dt still apply exactly as before."
      },
      {
        stepName: "KNOWN",
        content: "x(t) = 2t³ − 9t² + 12t (m).",
        mathBlocks: ["x(t) = 2t^3 - 9t^2 + 12t"]
      },
      {
        stepName: "CONCEPT",
        content: "Differentiate once for velocity, and again for acceleration.",
        mathBlocks: ["v(t) = \\frac{dx}{dt}, \\qquad a(t) = \\frac{dv}{dt}"]
      },
      {
        stepName: "SOLUTION",
        content: "(a) Differentiating term by term:",
        mathBlocks: [
          "v(t) = 6t^2 - 18t + 12\\ \\text{m/s}",
          "a(t) = 12t - 18\\ \\text{m/s}^2"
        ]
      },
      {
        stepName: "SOLUTION",
        content: "(b) Evaluating at t = 1 s and t = 3 s:",
        mathBlocks: [
          "v(1) = 6 - 18 + 12 = 0\\ \\text{m/s}, \\qquad a(1) = 12 - 18 = -6\\ \\text{m/s}^2",
          "v(3) = 54 - 54 + 12 = 12\\ \\text{m/s}, \\qquad a(3) = 36 - 18 = 18\\ \\text{m/s}^2"
        ]
      },
      {
        stepName: "INTERPRETATION",
        content: "(c) At t = 1 s the particle is momentarily at rest (v = 0), but a = −6 m/s² ≠ 0 — exactly the Part 1 result that zero velocity does not imply zero acceleration. Just before t = 1 s (e.g. t = 0.9 s), v ≈ +0.66 m/s while a < 0: opposite signs, so the particle was slowing down. Just after t = 1 s (e.g. t = 1.1 s), v ≈ −0.54 m/s while a is still negative: same sign, so the particle is now speeding up in the negative direction. At t = 3 s, v = 12 m/s and a = 18 m/s²: same sign, so the particle is speeding up in the positive direction."
      },
      {
        stepName: "CHECK",
        content: "Units are consistent (m/s, m/s²). The velocity passes smoothly through zero at t = 1 s rather than jumping, consistent with v(t) being a continuous quadratic; the sign change in v either side of t = 1 s confirms a genuine reversal of direction there."
      }
    ]
  },

  {
    id: "we4-02",
    title: "Recovering v = u + at and s = ut + ½at² by Integration",
    provenance: "DHD NEXUS ORIGINAL",
    provenanceDetails: "Original worked example authored by DHD Nexus",
    problemStatement:
      "A rocket sled has constant acceleration a = 5.0 m/s², starting with velocity u = 10 m/s at t = 0. (a) Starting from a = dv/dt, set up and evaluate the definite integral ∫ from u to v of dv = ∫ from 0 to t of a dt to obtain v(t). (b) Using v = ds/dt and the result from (a), set up and evaluate ∫ from 0 to s of ds = ∫ from 0 to t of (u + at) dt to obtain s(t). (c) Evaluate v and s at t = 4.0 s.",
    lecturerNotes:
      "The point of this example is not the arithmetic — it is watching the familiar SUVAT equations emerge directly from evaluating the integrals, term by term.",
    steps: [
      {
        stepName: "PROBLEM",
        content: "Derive v(t) and s(t) for constant acceleration directly by integration, then evaluate both at a specific time."
      },
      {
        stepName: "KNOWN",
        content: "u = 10 m/s, a = 5.0 m/s² (constant).",
        mathBlocks: ["u = 10\\,\\text{m/s}, \\quad a = 5.0\\,\\text{m/s}^2"]
      },
      {
        stepName: "CONCEPT",
        content: "Because a is constant, it can be pulled outside the time integral.",
        mathBlocks: ["\\int_u^v dv = \\int_0^t a\\,dt = a\\int_0^t dt"]
      },
      {
        stepName: "SOLUTION",
        content: "(a) Evaluating both sides:",
        mathBlocks: [
          "v - u = a[t]_0^t = at",
          "v(t) = u + at = 10 + 5.0t"
        ]
      },
      {
        stepName: "SOLUTION",
        content: "(b) Substituting into v = ds/dt and integrating term by term:",
        mathBlocks: [
          "\\int_0^s ds = \\int_0^t (u+at)\\,dt = u[t]_0^t + a\\left[\\frac{t^2}{2}\\right]_0^t",
          "s(t) = ut + \\tfrac12at^2 = 10t + 2.5t^2"
        ]
      },
      {
        stepName: "SOLUTION",
        content: "(c) At t = 4.0 s:",
        mathBlocks: [
          "v(4.0) = 10 + 5.0(4.0) = 30\\,\\text{m/s}",
          "s(4.0) = 10(4.0) + 2.5(4.0)^2 = 40 + 40 = 80\\,\\text{m}"
        ]
      },
      {
        stepName: "INTERPRETATION",
        content: "v(t) = u + at and s(t) = ut + ½at² are exactly the Part 3 SUVAT equations — but here they were produced entirely by integrating the definitions a = dv/dt and v = ds/dt, not quoted from memory."
      },
      {
        stepName: "CHECK",
        content: "Units are consistent throughout (m/s, m). Differentiating s(t) = 10t + 2.5t² gives ds/dt = 10 + 5t = v(t), confirming the two results are mutually consistent."
      }
    ]
  },

  {
    id: "we4-03",
    title: "The Chain Rule Bridge: Deriving v² = u² + 2as",
    provenance: "DHD NEXUS ORIGINAL",
    provenanceDetails: "Original worked example authored by DHD Nexus",
    problemStatement:
      "A particle has constant acceleration a = 3.0 m/s² along a straight line, with velocity u = 2.0 m/s at s = 0. (a) Starting from a = dv/dt and v = ds/dt, use the chain rule to show that a = v dv/ds. (b) Separate variables and evaluate ∫ from u to v of v dv = ∫ from 0 to s of a ds to derive v² = u² + 2as. (c) Use the result to find the velocity after the particle has travelled s = 2.0 m.",
    lecturerNotes:
      "Emphasise that eliminating time here is not a trick — it follows directly and legitimately from the chain rule, not from an ad hoc substitution.",
    steps: [
      {
        stepName: "PROBLEM",
        content: "Derive the chain-rule identity a = v dv/ds, then use separation of variables to obtain v² = u² + 2as, and apply it numerically."
      },
      {
        stepName: "THINK",
        content: "Before reading on: a = dv/dt and v = ds/dt both involve time. How could time be eliminated from the relationship between a, v and s entirely?"
      },
      {
        stepName: "KNOWN",
        content: "u = 2.0 m/s, a = 3.0 m/s² (constant).",
        mathBlocks: ["u = 2.0\\,\\text{m/s}, \\quad a = 3.0\\,\\text{m/s}^2"]
      },
      {
        stepName: "CONCEPT",
        content: "Apply the chain rule to a = dv/dt, writing it in terms of ds/dt:",
        mathBlocks: ["a = \\frac{dv}{dt} = \\frac{dv}{ds}\\cdot\\frac{ds}{dt} = v\\frac{dv}{ds}"]
      },
      {
        stepName: "WHY THIS METHOD?",
        content: "This step is exact and does not depend on a being constant — it is simply the chain rule combined with the definition v = ds/dt. It becomes especially useful whenever a problem naturally supplies displacement rather than time."
      },
      {
        stepName: "SOLUTION",
        content: "(a) a = v dv/ds, as derived above. (b) Separating variables (v dv on one side, a ds on the other) and integrating, with a constant so it can be pulled outside the integral:",
        mathBlocks: [
          "\\int_u^v v\\,dv = \\int_0^s a\\,ds",
          "\\tfrac12v^2 - \\tfrac12u^2 = as \\ \\Rightarrow \\ v^2 = u^2 + 2as"
        ]
      },
      {
        stepName: "SOLUTION",
        content: "(c) Substituting the given numbers:",
        mathBlocks: [
          "v^2 = (2.0)^2 + 2(3.0)(2.0) = 4 + 12 = 16",
          "v = 4.0\\,\\text{m/s}"
        ]
      },
      {
        stepName: "INTERPRETATION",
        content: "The particle reaches 4.0 m/s after travelling 2.0 m — found entirely without ever calculating the time taken, because the chain rule allowed acceleration to be related directly to position instead of time."
      },
      {
        stepName: "CHECK",
        content: "Independent check via time: s = ut + ½at² gives 2.0 = 2.0t + 1.5t², with positive root t ≈ 0.667 s. Then v = u + at = 2.0 + 3.0(0.667) = 4.0 m/s, matching part (c) exactly."
      }
    ]
  }
];
