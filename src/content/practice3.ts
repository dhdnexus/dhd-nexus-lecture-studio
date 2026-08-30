import type { PracticeProblem } from "../types/course";

export const part3PracticeProblems: PracticeProblem[] = [
  {
    id: "P3-PS-001",
    title: "Equation selection: a runner's finishing sprint",
    provenance: "DHD Nexus Original",
    problem:
      "A sprinter is running at 6.0 m/s when she begins to accelerate uniformly, reaching the finish line 40 m away 5.0 s later. (a) List the known and unknown SUVAT quantities. (b) Identify the equation with only one unknown, and use it to find her acceleration. (c) Find her velocity at the finish line, choosing whichever equation is most direct.",
    solution:
      "(a) Known: u = 6.0 m/s, s = 40 m, t = 5.0 s. Unknown: a, v. (b) s = ut + ½at² has only a unknown: 40 = (6.0)(5.0) + ½a(5.0)² → 40 = 30 + 12.5a → a = 0.80 m/s². (c) s = ½(u+v)t is most direct (does not need a): 40 = ½(6.0+v)(5.0) → 16 = 6.0+v → v = 10.0 m/s.",
    reasoning:
      "Both a and v can be found independently, each from the equation that leaves only one of them unknown — exactly the method demonstrated in Worked Example 1."
  },
  {
    id: "P3-PS-002",
    title: "Sign reasoning: a reversing lift",
    provenance: "DHD Nexus Original",
    problem:
      "A lift is moving downward at v = −2.0 m/s (down = negative) when its motor applies an acceleration of a = −0.5 m/s². (a) Is the lift speeding up or slowing down? (b) Find its velocity after 3.0 s. (c) Explain, using the sign rule, whether the lift could ever reverse to move upward under this same acceleration.",
    solution:
      "(a) v < 0 and a < 0 — same sign — so the lift is speeding up (moving faster downward). (b) v = u + at = −2.0 + (−0.5)(3.0) = −3.5 m/s. (c) Since v and a share the same sign throughout, the lift's downward speed only increases — it never reaches v = 0 under this acceleration, so it cannot reverse while this acceleration continues.",
    reasoning:
      "When v and a share the same sign, the object speeds up in whatever direction it is already moving; it will not pass through v = 0 unless the acceleration's sign changes."
  },
  {
    id: "P3-PS-003",
    title: "Equation selection: which equation, no calculation required",
    provenance: "DHD Nexus Original",
    problem:
      "For each case, state which single SUVAT equation is directly usable, without solving: (a) u, a and t are known; v is required. (b) u, v and s are known; t is required. (c) s, a and t are known; u is required. (d) u, v and a are known; s is required.",
    solution:
      "(a) v = u + at (only v unknown). (b) s = ½(u+v)t (only t unknown). (c) s = ut + ½at² (only u unknown). (d) v² = u² + 2as (only s unknown), or equivalently s = ½(u+v)t if t is also known — here only u, v, a are given, so v² = u² + 2as is the correct choice since it does not require t.",
    reasoning:
      "This drills the scanning process itself — matching a known/unknown pattern to the one equation that has exactly one unknown — without the distraction of arithmetic."
  },
  {
    id: "P3-PS-004",
    title: "Full application: a delivery drone landing",
    provenance: "DHD Nexus Original",
    problem:
      "A delivery drone descends toward a rooftop, decelerating uniformly from 8.0 m/s to 2.0 m/s over a vertical distance of 15 m (taking downward as positive). (a) Identify the known and unknown quantities. (b) Choose the most direct equation and find the acceleration. (c) Find the time taken for this descent, using an equation that does not require re-using your answer to (b).",
    solution:
      "(a) Known: u = 8.0 m/s, v = 2.0 m/s, s = 15 m. Unknown: a, t. (b) v² = u² + 2as has only a unknown: (2.0)² = (8.0)² + 2a(15) → 4 = 64 + 30a → a = −2.0 m/s². (c) s = ½(u+v)t has only t unknown, independent of part (b): 15 = ½(8.0+2.0)t = 5.0t → t = 3.0 s.",
    reasoning:
      "As in Worked Example 1, finding each unknown from an independent equation (rather than chaining through one intermediate result) avoids carrying forward any rounding or arithmetic error."
  }
];
