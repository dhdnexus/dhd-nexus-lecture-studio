import type { PracticeProblem } from "../types/course";

export const part5PracticeProblems: PracticeProblem[] = [
  {
    id: "P5-PS-001",
    title: "Case A: from a(t) to v(t)",
    provenance: "DHD Nexus Original",
    problem:
      "A drone has acceleration a(t) = 4t m/s², starting with velocity u = 1 m/s at t = 0. (a) Find v(t). (b) Evaluate v at t = 2 s.",
    solution:
      "(a) ∫ from 1 to v of dv = ∫ from 0 to t of 4t' dt' gives v − 1 = 2t², so v(t) = 1 + 2t² m/s. (b) v(2) = 1 + 2(4) = 9 m/s.",
    reasoning:
      "Since a(t) is not constant, a = dv/dt must be integrated as a genuine function of t rather than treated as a fixed number."
  },
  {
    id: "P5-PS-002",
    title: "Case A continued: a(t) to v(t) to s(t), and the SUVAT trap",
    provenance: "DHD Nexus Original",
    problem:
      "A rover has acceleration a(t) = 2t + 3 m/s², starting from rest (u = 0) at s = 0 when t = 0. A student says: 'a = 3 m/s² at t = 0, so I'll just use s = ut + ½at².' Explain why this is wrong, then (a) find v(t), (b) find s(t), (c) evaluate s at t = 3 s.",
    solution:
      "The student's approach is wrong because a(t) = 2t + 3 changes with time — its value at t = 0 is not its value throughout the motion, so s = ut + ½at² (which assumes a fixed a) cannot be applied. (a) v(t) = ∫(2t+3)dt = t² + 3t m/s. (b) s(t) = ∫(t²+3t)dt = t³/3 + 1.5t² m. (c) s(3) = 9 + 13.5 = 22.5 m.",
    reasoning:
      "This problem deliberately exposes the 'I see an acceleration value, so I'll use SUVAT' misconception named in Part 5 — the correct method integrates a(t) as the function it actually is, twice, to reach s(t)."
  },
  {
    id: "P5-PS-003",
    title: "Case B: from v(t) to displacement",
    provenance: "DHD Nexus Original",
    problem:
      "A particle's velocity is v(t) = 5t² − 2 m/s, starting at s = 0 when t = 0. (a) Find s(t). (b) Evaluate v and s at t = 2 s.",
    solution:
      "(a) s(t) = ∫(5t² − 2)dt = (5/3)t³ − 2t m. (b) v(2) = 5(4) − 2 = 18 m/s; s(2) = (5/3)(8) − 4 = 40/3 − 4 = 28/3 ≈ 9.33 m.",
    reasoning:
      "With v(t) already given, only one integration (with respect to time) is needed to reach displacement — no acceleration information is required at all."
  },
  {
    id: "P5-PS-004",
    title: "Case C: from a(s) to velocity, without finding time",
    provenance: "DHD Nexus Original",
    problem:
      "A particle has acceleration a(s) = 8s m/s², where s is displacement in metres, with velocity u = 1 m/s at s = 0. Find its velocity after it has travelled s = 1 m.",
    solution:
      "Using a = v dv/ds: ∫ from 1 to v of v dv = ∫ from 0 to 1 of 8s ds gives ½v² − ½(1)² = 4, so v² = 1 + 8 = 9, giving v = 3.0 m/s.",
    reasoning:
      "Since acceleration is given as a function of position, the chain-rule identity a = v dv/ds converts the problem into velocity-and-position-only variables, avoiding the need to find the time taken at any stage."
  }
];
