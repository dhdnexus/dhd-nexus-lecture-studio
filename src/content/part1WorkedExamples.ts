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
    title: "Sign Reasoning and the Turning Point",
    provenance: "ADAPTED ACADEMIC PROBLEM",
    provenanceDetails:
      "Adapted from OpenStax University Physics Vol 1, Chapter 3 Conceptual Exercises by DHD Nexus",
    problemStatement:
      "A cart moves along a straight track where +x is defined to the right. At t = 0, the cart is at x = +10.0 m with velocity v = +6.0 m/s and constant acceleration a = -2.0 m/s² directed to the left. Without using kinematic formulas, analyze its motion, turning point, and post-reversal behavior.",
    lecturerNotes:
      "Strictly avoid v = u + at calculations. Focus purely on directional signs, vector opposition, and the physical turning point.",
    steps: [
      {
        stepName: "PROBLEM",
        content:
          "Determine motion direction, acceleration direction, speeding up vs slowing down, and turning point state without SUVAT formulas.",
      },
      {
        stepName: "WHAT IS HAPPENING?",
        content:
          "The cart travels rightward, but experiences an opposing leftward pull. It slows down to a momentary stop, reverses, and speeds up moving leftward.",
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
          "1. At t = 0: Moving right, slowing down because v and a have opposite signs.\n2. At turning point: Velocity is momentarily v = 0, but acceleration is STILL a = -2.0 m/s².\n3. Post-reversal: Cart moves left (v < 0) with a < 0. Since both signs are now negative, it is SPEEDING UP in the negative direction.",
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

