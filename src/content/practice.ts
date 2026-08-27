import type { PracticeProblem } from "../types/course";

export const part1PracticeProblems: PracticeProblem[] = [
  {
    id: "P1-PS-001",
    title: "Air-track glider — displacement, distance, average velocity and average speed",
    provenance: "DHD Nexus Original — AAU-style",
    problem:
      "A laboratory glider on an air track starts at x = −0.40 m at t = 0. It moves to x = +1.20 m in 2.0 s, then bounces off an end bumper and returns to x = +0.60 m at t = 3.0 s. (a) Find the net displacement. (b) Find the total distance. (c) Calculate average velocity. (d) Calculate average speed.",
    solution:
      "(a) Net displacement = (+0.60) − (−0.40) = +1.00 m. (b) Distance = |1.20 − (−0.40)| + |0.60 − 1.20| = 1.60 + 0.60 = 2.20 m. (c) Average velocity = +1.00/3.0 = +0.33 m/s. (d) Average speed = 2.20/3.0 = 0.73 m/s.",
    reasoning:
      "Distance adds every path segment, whereas displacement depends only on the initial and final position coordinates."
  },
  {
    id: "P1-PS-002",
    title: "Two-interval weighted average speed",
    provenance: "DHD Nexus Original — Nile-style",
    problem:
      "A motorist travels along a straight road between City A and City B. For the first 40 minutes, she drives at a constant speed of 90 km/h. For the next 20 minutes, she drives at a constant speed of 30 km/h. (a) What is the total distance? (b) What is the average speed for the entire 60-minute trip? (c) Explain why the average speed is not the simple arithmetic mean of 90 km/h and 30 km/h.",
    solution:
      "40 min = 2/3 h, so d₁ = 90 × 2/3 = 60 km. 20 min = 1/3 h, so d₂ = 30 × 1/3 = 10 km. Total distance = 70 km. Total time = 1.0 h. Average speed = 70 km/h.",
    reasoning:
      "The arithmetic mean applies only when equal times are spent at the speeds. Here the time intervals are unequal, so total distance divided by total time must be used."
  },
  {
    id: "P1-PS-003",
    title: "Autonomous rover — sign reasoning",
    provenance: "AUTHENTIC NIGERIAN UNIVERSITY EXAM",
    problem:
      "Ekiti State University, PHY 101, 2019/2020 Exam, Question 2 (KIN-031). An autonomous delivery rover moves along a straight 1D track. At t = 1.0 s, v = −3.0 m/s and a = −1.5 m/s². (a) In which physical direction is the rover moving? (b) Is it speeding up or slowing down? (c) What will its velocity be at t = 3.0 s if acceleration remains constant?",
    solution:
      "(a) v < 0 means motion is in the negative direction. (b) v and a have the same sign, so the rover is speeding up. (c) Δt = 2.0 s; Δv = aΔt = (−1.5)(2.0) = −3.0 m/s; therefore v(3.0 s) = −3.0 − 3.0 = −6.0 m/s.",
    reasoning:
      "The signs of velocity and acceleration determine whether acceleration acts with or against the direction of motion."
  },
  {
    id: "P1-PS-004",
    title: "Decoupling v and a — conceptual",
    provenance: "DHD Nexus Conceptual",
    problem:
      "For each scenario, state whether it is physically possible or impossible. If possible, give a clear real-world example: (a) v = 0 while a ≠ 0. (b) Constant speed while velocity is changing. (c) Constant velocity while speed is changing. (d) Negative acceleration while speed is increasing.",
    solution:
      "(a) Possible — a ball at the apex of a vertical throw has v = 0 while gravity provides non-zero acceleration. (b) Possible — uniform circular motion can have constant speed while velocity changes direction. (c) Impossible — speed is the magnitude of velocity, so constant velocity cannot have changing speed. (d) Possible — an object moving in the negative direction with negative acceleration can increase its speed.",
    reasoning:
      "Velocity contains directional information while speed is its magnitude. Acceleration describes how velocity changes, so its sign alone does not determine whether speed increases or decreases."
  }
];
