import type { PracticeProblem } from "../types/course";

export const part4PracticeProblems: PracticeProblem[] = [
  {
    id: "P4-PS-001",
    title: "Differentiating a position function",
    provenance: "DHD Nexus Original",
    problem:
      "A trolley's position is x(t) = t³ − 6t² + 9t (m), for t ≥ 0. (a) Find v(t) by differentiating x(t). (b) Find a(t) by differentiating v(t). (c) Evaluate v and a at t = 2 s.",
    solution:
      "(a) v(t) = 3t² − 12t + 9 m/s. (b) a(t) = 6t − 12 m/s². (c) v(2) = 12 − 24 + 9 = −3 m/s; a(2) = 12 − 12 = 0 m/s².",
    reasoning:
      "Each derivative applies the definitions v = dx/dt and a = dv/dt term by term to the given polynomial."
  },
  {
    id: "P4-PS-002",
    title: "Interpreting v(t) and a(t): the other half of Part 1's rule",
    provenance: "DHD Nexus Original",
    problem:
      "Using the same trolley from Problem 1 (x(t) = t³ − 6t² + 9t), (a) confirm that a(2) = 0 while v(2) ≠ 0. (b) What does this instant represent physically? (c) Find v and a at t = 1 s and t = 3 s, and state whether the trolley is speeding up or slowing down at each.",
    solution:
      "(a) From Problem 1, v(2) = −3 m/s and a(2) = 0 m/s² — confirmed. (b) At t = 2 s the trolley's acceleration is momentarily zero while it is still moving; this is the reverse situation to Part 1's 'ball at the apex' example, where v = 0 but a ≠ 0 — here a = 0 but v ≠ 0. (c) v(1) = 3 − 12 + 9 = 0 m/s, a(1) = 6 − 12 = −6 m/s²; v(3) = 27 − 36 + 9 = 0 m/s, a(3) = 18 − 12 = 6 m/s². At both t = 1 s and t = 3 s the trolley is momentarily at rest with nonzero acceleration — genuine turning points, not simply 'speeding up' or 'slowing down' at that exact instant.",
    reasoning:
      "This problem deliberately produces a = 0 with v ≠ 0 (at t = 2 s) to complement Worked Example 1's v = 0 with a ≠ 0 case (at t = 1 s in that example), reinforcing that neither zero value implies the other."
  },
  {
    id: "P4-PS-003",
    title: "Recovering the constant-acceleration equations by integration",
    provenance: "DHD Nexus Original",
    problem:
      "A cyclist has constant acceleration a = 2.0 m/s², starting with velocity u = 5.0 m/s at t = 0. (a) Starting from a = dv/dt, integrate to find v(t). (b) Using v = ds/dt, integrate to find s(t). (c) Evaluate v and s at t = 6.0 s.",
    solution:
      "(a) ∫ from u to v of dv = ∫ from 0 to t of a dt gives v(t) = u + at = 5.0 + 2.0t. (b) ∫ from 0 to s of ds = ∫ from 0 to t of (5.0 + 2.0t) dt gives s(t) = 5.0t + 1.0t². (c) v(6.0) = 5.0 + 12.0 = 17 m/s; s(6.0) = 30 + 36 = 66 m.",
    reasoning:
      "Follows exactly the integration method of Worked Example 2, with new numbers, to reinforce that v = u + at and s = ut + ½at² are integration results, not separate rules."
  },
  {
    id: "P4-PS-004",
    title: "Using a = v dv/ds to eliminate time",
    provenance: "DHD Nexus Original",
    problem:
      "A particle has constant acceleration a = 2.5 m/s², starting with velocity u = 3.0 m/s at s = 0. (a) Write down a = v dv/ds using the chain-rule result from this episode. (b) Separate variables and integrate to find v after the particle has travelled s = 4.0 m. (c) Explain why this method avoided needing to find the time taken.",
    solution:
      "(a) a = v dv/ds. (b) ∫ from u to v of v dv = ∫ from 0 to s of a ds gives v² = u² + 2as = (3.0)² + 2(2.5)(4.0) = 9 + 20 = 29, so v = √29 ≈ 5.39 m/s. (c) Because a = v dv/ds relates acceleration directly to position through velocity, without time appearing anywhere in the relationship, time never needs to be found or eliminated separately.",
    reasoning:
      "Mirrors Worked Example 3's method with new numbers, deliberately producing a non-integer answer to show the method works generally, not only when the numbers happen to be clean."
  }
];
