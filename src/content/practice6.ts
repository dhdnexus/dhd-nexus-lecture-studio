import type { PracticeProblem } from "../types/course";

export const part6PracticeProblems: PracticeProblem[] = [
  {
    id: "P6-PS-001",
    title: "A moderately complex staged journey",
    provenance: "DHD Nexus Original",
    problem:
      "A cyclist starts from rest and accelerates uniformly to 8 m/s in 4 s, then brakes uniformly to rest in a further 2 s. (a) Find the acceleration during each stage. (b) Find the total distance travelled. (c) Find the average velocity for the whole trip.",
    solution:
      "(a) a₁ = (8−0)/4 = 2.0 m/s²; a₂ = (0−8)/2 = −4.0 m/s². (b) s₁ = ½(0+8)(4) = 16 m; s₂ = ½(8+0)(2) = 8 m; total = 24 m. (c) Total time = 6 s, so average velocity = 24/6 = 4.0 m/s.",
    reasoning:
      "Each stage is solved independently with its own constant acceleration, and the final velocity of stage 1 (8 m/s) is correctly carried over as the initial velocity of stage 2, exactly as in Worked Example 1."
  },
  {
    id: "P6-PS-002",
    title: "Method selection: a model rocket after engine cutout",
    provenance: "DHD Nexus Original",
    problem:
      "A model rocket launches from rest with acceleration a(t) = 15 − 3t m/s² (thrust decreasing as fuel burns) for the first 5 s, after which the engine cuts out and the rocket continues upward under a constant deceleration of 9.8 m/s² until it momentarily stops at its highest point. (a) Which branch applies during the burn, and which applies after cutout? (b) Find the rocket's velocity and height at engine cutout (t = 5 s). (c) Find the additional height gained after cutout, before the rocket reaches its highest point.",
    solution:
      "(a) During the burn, a(t) is not constant, so Part 5's Case A applies (integrate a = dv/dt with respect to t). After cutout, acceleration is constant, so Part 3's SUVAT applies directly. (b) v(t) = 15t − 1.5t², s(t) = 7.5t² − 0.5t³; at t = 5 s, v = 37.5 m/s and s = 125 m. (c) Using v² = u² + 2as with u = 37.5 m/s, v = 0, a = −9.8 m/s²: 0 = 37.5² − 2(9.8)s, giving s ≈ 71.7 m.",
    reasoning:
      "This mirrors Worked Example 2's structure: variable acceleration during the burn requires calculus, but the moment acceleration becomes constant, SUVAT is not only valid but the more efficient choice — the branch is re-checked at the stage boundary rather than assumed to continue."
  },
  {
    id: "P6-PS-003",
    title: "The SUVAT trap: a numerical acceleration that is not constant",
    provenance: "DHD Nexus Original",
    problem:
      "A student is told a car has acceleration 6 m/s² and travels for 10 s from rest, and uses s = ut + ½at² = ½(6)(10)² = 300 m. In fact, the car's true acceleration is a(t) = 6 − 0.3t m/s² (the 6 m/s² was only its value at t = 0). (a) Explain why the student's calculation is wrong. (b) Find the car's correct velocity and displacement at t = 10 s.",
    solution:
      "(a) The student treated the acceleration's value at t = 0 as though it applied for the whole 10 s, but a(t) = 6 − 0.3t decreases throughout — it is not constant, so s = ut + ½at² does not apply to the full interval. (b) v(t) = 6t − 0.15t², so v(10) = 60 − 15 = 45 m/s. s(t) = 3t² − 0.05t³, so s(10) = 300 − 50 = 250 m — 50 m less than the student's incorrect answer of 300 m.",
    reasoning:
      "This problem exists specifically to make the misconception's numerical consequence visible: the wrong method does not give an answer that is merely inelegant, it gives a genuinely incorrect distance (300 m instead of the correct 250 m)."
  },
  {
    id: "P6-PS-004",
    title: "Challenge E: turning point, distance versus displacement",
    provenance: "DHD NEXUS ORIGINAL CHALLENGE PROBLEM",
    problem:
      "A remote-control car moves along a straight track with velocity v(t) = 12 − 4t (m/s), t in seconds, starting at position x = 0 at t = 0. (a) At what time does the car first come to rest? (b) Does the car reverse direction after that instant? Justify your answer using the sign of v(t) just before and just after that time. (c) Find the car's displacement at t = 5 s. (d) Find the total distance travelled by t = 5 s. (e) Find the car's average velocity and average speed over 0–5 s, and explain why they are not equal.",
    solution:
      "(a) v = 0 when 12 − 4t = 0, so t = 3 s. (b) For t slightly less than 3 s, v > 0; for t slightly more than 3 s, v < 0 — the sign changes, so the car does reverse direction. (c) x(t) = 12t − 2t², so x(5) = 60 − 50 = 10 m. (d) x(3) = 36 − 18 = 18 m is the furthest forward point; distance = |x(3) − x(0)| + |x(5) − x(3)| = 18 + 8 = 26 m. (e) Average velocity = 10/5 = 2.0 m/s; average speed = 26/5 = 5.2 m/s — they differ because the car travelled forward and then partly back, so distance (which only accumulates) is larger than the magnitude of net displacement.",
    reasoning:
      "This is DHD Nexus Original Challenge Problem 'Challenge E', included here as this episode's most demanding practice problem — it requires the turning-point and distance-versus-displacement reasoning from Part 1, applied through the integration method of Part 5."
  }
];
