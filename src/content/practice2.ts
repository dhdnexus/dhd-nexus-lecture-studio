import type { PracticeProblem } from "../types/course";

export const part2PracticeProblems: PracticeProblem[] = [
  {
    id: "P2-PS-001",
    title: "Secant and tangent gradients on a curved x–t graph",
    provenance: "DHD Nexus Original",
    problem:
      "A ball rolling down a ramp has position x(t) = 2t² (m), for 0 ≤ t ≤ 5 s. (a) Find the average velocity between t = 1 s and t = 4 s. (b) Estimate the instantaneous velocity at t = 2.5 s using the interval t = 2.50 s to t = 2.51 s. (c) State, without further calculation, what instantaneous velocity you would expect at t = 2.5 s from the pattern in Worked Example 1, and check that your two answers agree.",
    solution:
      "(a) x(1) = 2 m, x(4) = 32 m, so v_avg = (32 − 2)/(4 − 1) = 10.0 m/s. (b) x(2.50) = 12.5000 m, x(2.51) = 12.6002 m, so v ≈ 0.1002/0.01 = 10.02 m/s ≈ 10.0 m/s. (c) Since t = 2.5 s is the midpoint of the interval 1 s to 4 s, and the underlying acceleration is constant (v(t) = 4t), the average velocity over the interval should equal the instantaneous velocity at the midpoint — both give 10.0 m/s, confirming the pattern.",
    reasoning:
      "For constant acceleration, average velocity over an interval always equals instantaneous velocity at the interval's midpoint time, because velocity varies linearly with time."
  },
  {
    id: "P2-PS-002",
    title: "Displacement from a simple triangular v–t graph",
    provenance: "DHD Nexus Original",
    problem:
      "A sprinter starts from rest and accelerates uniformly, reaching 8 m/s after 4 s. (a) Sketch the shape of the v–t graph. (b) Find the displacement over the 4 s using the area under the graph. (c) Confirm your answer using s = ut + ½at².",
    solution:
      "(a) The graph is a straight line (triangle with the time axis) from (0 s, 0 m/s) to (4 s, 8 m/s). (b) Area of the triangle = ½ × base × height = ½ × 4 × 8 = 16 m. (c) a = (8 − 0)/4 = 2.0 m/s²; s = (0)(4) + ½(2.0)(4)² = 0 + 16 = 16 m, which matches the area.",
    reasoning:
      "When motion starts from rest with constant acceleration, the v–t graph is a right triangle, and its area gives displacement directly — this is a special case of the general trapezium result in Section 8."
  },
  {
    id: "P2-PS-003",
    title: "Distance vs displacement on a second reversal example",
    provenance: "DHD Nexus Original",
    problem:
      "A toy train on a straight track has velocity v(t) = 4 − 2t (m/s) for 0 ≤ t ≤ 5 s, starting at x = 0. (a) At what time does the train reverse direction? (b) Find the net displacement over 0–5 s. (c) Find the total distance travelled over 0–5 s.",
    solution:
      "(a) v = 0 when 4 − 2t = 0 → t = 2 s. (b) Using x(t) = 4t − t²: x(5) = 20 − 25 = −5 m, so net displacement = −5 m. (c) x(2) = 8 − 4 = 4 m. Leg 1: |x(2) − x(0)| = |4 − 0| = 4 m. Leg 2: |x(5) − x(2)| = |−5 − 4| = 9 m. Total distance = 4 + 9 = 13 m.",
    reasoning:
      "Because the train reverses direction at t = 2 s, displacement (the signed area, −5 m) and distance (the sum of magnitudes, 13 m) must be calculated separately by splitting the motion at the turning point."
  },
  {
    id: "P2-PS-004",
    title: "Matching motion descriptions to graph shapes (conceptual)",
    provenance: "DHD Nexus Original",
    problem:
      "For each short description, state whether an x–t graph or a v–t graph would be a horizontal line, a straight sloped line, or a curve, and justify your choice: (a) a car parked at the roadside; (b) a car cruising at a constant 20 m/s on a v–t graph; (c) a car cruising at a constant 20 m/s on an x–t graph; (d) a ball in free fall, plotted on a v–t graph.",
    solution:
      "(a) x–t graph: horizontal line, since position is not changing. (b) v–t graph: horizontal line, since velocity is constant (zero acceleration). (c) x–t graph: straight sloped line, since position changes at a constant rate. (d) v–t graph: straight sloped line, with constant negative gradient equal to −g, since a falling object has constant downward acceleration.",
    reasoning:
      "A quantity that is constant plots as a horizontal line; a quantity that changes at a constant rate plots as a straight sloped line; a quantity whose rate of change is itself changing plots as a curve. Applying this rule to position and velocity in turn identifies the correct graph shape without any calculation."
  }
];
