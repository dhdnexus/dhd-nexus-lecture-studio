import type { WorkedExample } from "../types/course";

export const part1WorkedExamples: WorkedExample[] = [
  {
    id: "we-01",
    title: "Displacement from Average Velocity",
    provenance: "AUTHENTIC NIGERIAN UNIVERSITY EXAM",
    provenanceDetails:
      "Nile University of Nigeria, PHY 101, First Semester 2022/2023, Question 18 (KIN-015)",
    problemStatement:
      "A car travels in the +x-direction on a straight and level road. For the first 4.00 s of its motion, the average velocity of the car is +6.25 m/s. How far does the car travel in 4.00 s?\n(a) 1.56 m   (b) 5.00 m   (c) 25.00 m   (d) 100 m",
    lecturerNotes:
      "Emphasize that this requires zero SUVAT formulas. It is the direct definition of average velocity.",
    steps: [
      {
        stepName: "PROBLEM",
        content:
          "Calculate total displacement from given average velocity and elapsed time.",
      },
      {
        stepName: "WHAT IS HAPPENING?",
        content:
          "A car moves continuously along a straight line in the positive x direction without reversing over 4.00 seconds.",
      },
      {
        stepName: "REFERENCE FRAME",
        content:
          "Horizontal 1D axis with +x pointing in the direction of motion.",
      },
      {
        stepName: "KNOWN",
        content: "v_avg = +6.25 m/s, Δt = 4.00 s",
        mathBlocks: [
          "v_{\\text{avg}} = +6.25\\text{ m/s}",
          "\\Delta t = 4.00\\text{ s}",
        ],
      },
      {
        stepName: "UNKNOWN",
        content: "Displacement Δx = ?",
      },
      {
        stepName: "CONCEPT",
        content: "Definition of average velocity:",
        mathBlocks: ["v_{\\text{avg}} = \\frac{\\Delta x}{\\Delta t}"],
      },
      {
        stepName: "WHY THIS METHOD?",
        content:
          "We rearrange the fundamental definition directly. No acceleration or kinematic equation is required.",
      },
      {
        stepName: "SOLUTION",
        content: "Multiply average velocity by time elapsed:",
        mathBlocks: [
          "\\Delta x = v_{\\text{avg}} \\cdot \\Delta t",
          "\\Delta x = (+6.25\\text{ m/s}) \\times (4.00\\text{ s}) = +25.00\\text{ m}",
        ],
      },
      {
        stepName: "INTERPRETATION",
        content:
          "The car travelled 25.00 metres in the positive direction. Correct option is (c).",
      },
      {
        stepName: "CHECK",
        content:
          "Units: (m/s) × s = m. 6 m/s × 4 s ≈ 24 m. 25.00 m is physically sound.",
      },
    ],
  },

  {
    id: "we-02",
    title: "The Two-Leg Average Speed Trap",
    provenance: "AUTHENTIC NIGERIAN UNIVERSITY EXAM",
    provenanceDetails:
      "Ekiti State University (EKSU), PHY 101, 2019/2020 Session, Question 25 (KIN-036)",
    problemStatement:
      "A motorist drives 120 km at 100 km/h and then another 120 km at 50 km/h. What is his average speed for the entire trip?",
    lecturerNotes:
      "Highlight why (100 + 50)/2 = 75 km/h is wrong! The driver spends twice as much time at 50 km/h.",
    steps: [
      {
        stepName: "PROBLEM",
        content:
          "Determine average speed over two equal-distance legs travelled at different constant speeds.",
      },
      {
        stepName: "WHAT IS HAPPENING?",
        content:
          "The journey is split into two equal distances (120 km each). The driver travels fast on leg 1 and slow on leg 2, spending unequal times.",
      },
      {
        stepName: "KNOWN",
        content:
          "Leg 1: d₁ = 120 km, s₁ = 100 km/h\nLeg 2: d₂ = 120 km, s₂ = 50 km/h",
      },
      {
        stepName: "CONCEPT",
        content:
          "Average speed is total distance divided by total elapsed time:",
        mathBlocks: [
          "v_{\\text{avg}} = \\frac{d_{\\text{total}}}{t_{\\text{total}}} = \\frac{d_1 + d_2}{t_1 + t_2}",
        ],
      },
      {
        stepName: "SOLUTION",
        content:
          "Calculate leg times and compute the average speed from total distance divided by total time:",
        mathBlocks: [
          "t_1 = \\frac{120\\text{ km}}{100\\text{ km/h}} = 1.20\\text{ h}",
          "t_2 = \\frac{120\\text{ km}}{50\\text{ km/h}} = 2.40\\text{ h}",
          "t_{\\text{total}} = 1.20\\text{ h} + 2.40\\text{ h} = 3.60\\text{ h}",
          "v_{\\text{avg}} = \\frac{240\\text{ km}}{3.60\\text{ h}} = \\mathbf{66.67\\text{ km/h}}",
        ],
      },
      {
        stepName: "INTERPRETATION",
        content:
          "Average speed is 66.67 km/h, much closer to 50 km/h because the driver spent 2.4 hours at 50 km/h and only 1.2 hours at 100 km/h.",
      },
      {
        stepName: "CHECK",
        content:
          "Harmonic mean formula: 2(100)(50)/(100+50) = 10000/150 = 66.67 km/h. Valid.",
      },
    ],
  },

  {
    id: "we-03",
    title: "Sign Reasoning, Opposing Rates, and the Turning Point",
    provenance: "ADAPTED ACADEMIC PROBLEM",
    provenanceDetails:
      "Adapted from OpenStax University Physics Vol 1, Chapter 3 Conceptual Exercises by DHD Nexus",
    problemStatement:
      "A motorized test cart moves along a straight horizontal track. The positive direction (+x) points to the right (East). At an instant t₀, the cart is at x = +10.0 m, moving right with v = +6.0 m/s, while its constant acceleration is a = −2.0 m/s² to the left. Without using v = u + at, answer the five physical-reasoning questions: (1) direction of motion, (2) direction of acceleration, (3) speeding up or slowing down, (4) what happens as v reaches zero, and (5) what happens after reversal if the same acceleration continues.",
    lecturerNotes:
      "Strictly avoid v = u + at calculations. Focus purely on directional signs, vector opposition, and the physical turning point.",
    steps: [
      {
        stepName: "PROBLEM",
        content:
          "Analyze the cart strictly from velocity, acceleration, coordinate signs, and physical direction — without using v = u + at.",
      },
      {
        stepName: "THINK",
        content:
          "Answer these five questions before revealing the solution: 1) Which direction is the cart moving? 2) Which direction does acceleration point? 3) Is it speeding up or slowing down? 4) What happens when v reaches 0? 5) If a = −2.0 m/s² continues, what happens after the reversal?",
      },
      {
        stepName: "WHAT IS HAPPENING?",
        content:
          "The cart travels rightward while acceleration points leftward. The opposing acceleration reduces the rightward speed until the cart reaches a momentary turning point, then the continuing leftward acceleration makes the cart move leftward and speed up.",
      },
      {
        stepName: "REFERENCE FRAME",
        content:
          "Rightward = +x; Leftward = -x. Initial state: v > 0, a < 0.",
      },
      {
        stepName: "CONCEPT",
        content: "Vector sign rules for motion and acceleration:",
        mathBlocks: [
          "\\operatorname{sgn}(v) = + \\implies \\text{Moving Right (+x)}",
          "\\operatorname{sgn}(a) = - \\implies \\text{Acceleration points Left (-x)}",
          "\\operatorname{sgn}(v) \\neq \\operatorname{sgn}(a) \\implies \\text{SLOWING DOWN}",
        ],
      },
      {
        stepName: "SOLUTION",
        content:
          "1. At t₀: v = +6.0 m/s, so the cart moves East. 2. a = −2.0 m/s², so acceleration points West. 3. v and a have opposite signs, so the cart is slowing down. 4. As speed is removed, v reaches 0 at a momentary turning point while a remains non-zero. 5. The continuing leftward acceleration reverses the cart; after reversal v < 0 and a < 0, so the cart speeds up Westward.",
      },
      {
        stepName: "INTERPRETATION",
        content:
          "Negative acceleration slowed the cart down when moving right, but sped it up when moving left. The sign of acceleration alone does not determine speeding up or slowing down.",
      },
      {
        stepName: "CHECK",
        content:
          "Energy check: Kinetic energy decreases to zero at turning point, then increases as work is done leftward. Completely consistent.",
      },
    ],
  },
];

