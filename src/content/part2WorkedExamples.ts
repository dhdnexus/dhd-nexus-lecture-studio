import type { WorkedExample } from "../types/course";

export const part2WorkedExamples: WorkedExample[] = [
  {
    id: "we2-01",
    title: "Average vs Instantaneous Gradient on a Position–Time Graph",
    provenance: "DHD NEXUS ORIGINAL",
    provenanceDetails: "Original worked example authored by DHD Nexus",
    problemStatement:
      "A trolley released from rest on a sloped track has position x(t) = 3t² (metres), valid for 0 ≤ t ≤ 6 s, where t is in seconds. (a) Find the average velocity between t = 1 s and t = 3 s using the secant gradient. (b) Estimate the instantaneous velocity at t = 2 s using a very short interval from t = 2.00 s to t = 2.01 s. (c) Compare the two results and explain what you notice.",
    lecturerNotes:
      "Emphasise that (b) is a graphical/numerical estimate of the tangent gradient, not a formal derivative — differentiation is introduced later in the series. The coincidence in (c) is a genuine physical result worth dwelling on.",
    steps: [
      {
        stepName: "PROBLEM",
        content: "Compare a secant gradient (average velocity) over an interval with the tangent gradient (instantaneous velocity) at the interval's midpoint."
      },
      {
        stepName: "WHAT IS HAPPENING?",
        content: "The trolley speeds up continuously from rest, so its x–t graph curves upward. Different pairs of points on this curve give different secant gradients depending on how far apart they are."
      },
      {
        stepName: "KNOWN",
        content: "x(t) = 3t² m, for 0 ≤ t ≤ 6 s.",
        mathBlocks: ["x(t) = 3t^2\\ \\text{m}"]
      },
      {
        stepName: "CONCEPT",
        content: "The gradient of the secant line joining two points on the x–t graph is the average velocity over that interval. As the interval shrinks to nearly zero width, the secant gradient approaches the tangent gradient — the instantaneous velocity.",
        mathBlocks: ["v_{\\text{avg}} = \\frac{\\Delta x}{\\Delta t}"]
      },
      {
        stepName: "SOLUTION",
        content: "(a) Average velocity between t = 1 s and t = 3 s: x(1) = 3(1)² = 3 m; x(3) = 3(3)² = 27 m.",
        mathBlocks: [
          "v_{\\text{avg}} = \\frac{27 - 3}{3 - 1} = \\frac{24}{2} = 12.0\\,\\text{m/s}",
          "x(2.00) = 3(2.00)^2 = 12.0000\\,\\text{m}, \\quad x(2.01) = 3(2.01)^2 = 12.1203\\,\\text{m}",
          "v \\approx \\frac{12.1203 - 12.0000}{0.01} = 12.03\\,\\text{m/s} \\approx 12.0\\,\\text{m/s}"
        ]
      },
      {
        stepName: "INTERPRETATION",
        content: "(c) The average velocity over 1 s to 3 s and the estimated instantaneous velocity at t = 2 s (the midpoint of that interval) are both approximately 12.0 m/s. This is not a coincidence: for constant acceleration, the average velocity over an interval always equals the instantaneous velocity at the midpoint time of that interval, because the velocity itself increases linearly with time."
      },
      {
        stepName: "CHECK",
        content: "Units are m/s throughout, as required for velocity. The result is consistent with the underlying constant acceleration of this motion — v(t) = 6t gives v(2) = 12 m/s exactly, matching both estimates."
      }
    ]
  },

  {
    id: "we2-02",
    title: "Area Under a v–t Graph With a Direction Reversal",
    provenance: "DHD NEXUS ORIGINAL",
    provenanceDetails: "Original worked example authored by DHD Nexus, structurally parallel to Part 1 Section 1.3",
    problemStatement:
      "A remote-control car moves along a straight track with velocity v(t) = 6 − 3t (m/s), where t is in seconds, for 0 ≤ t ≤ 4 s, starting from x = 0 at t = 0. (a) At what time does the car momentarily stop? (b) Find the net displacement over 0–4 s using the area under the graph. (c) Find the total distance travelled over 0–4 s. (d) Explain why these two answers differ.",
    lecturerNotes:
      "This example deliberately produces zero net displacement with nonzero distance, giving the cleanest possible demonstration of the area-sign rule from Section 6.",
    steps: [
      {
        stepName: "PROBLEM",
        content: "Use the v–t graph's area, both signed and unsigned, to find displacement and distance for a motion that reverses direction."
      },
      {
        stepName: "WHAT IS HAPPENING?",
        content: "The car starts moving forward at 6 m/s and decelerates uniformly. It slows to rest, then reverses and speeds up in the negative direction, ending the interval moving backward."
      },
      {
        stepName: "REFERENCE FRAME",
        content: "Forward = +x. The car's v–t graph is a straight line from (0 s, +6 m/s) to (4 s, −6 m/s)."
      },
      {
        stepName: "KNOWN",
        content: "v(t) = 6 − 3t m/s, valid for 0 ≤ t ≤ 4 s; x(0) = 0.",
        mathBlocks: ["v(t) = 6 - 3t\\ \\text{m/s}"]
      },
      {
        stepName: "CONCEPT",
        content: "The area between the v–t graph and the axis over an interval gives the signed displacement for that interval. Where the graph crosses the axis, the particle reverses direction, so distance must be found by adding the magnitudes of the areas on each side of the crossing separately.",
        mathBlocks: ["\\Delta x = \\text{signed area}, \\qquad d = \\sum |\\text{area of each region}|"]
      },
      {
        stepName: "SOLUTION",
        content: "(a) The car stops when v(t) = 0: 6 − 3t = 0 → t = 2 s. (b) Net displacement over 0–4 s, using the trapezium/triangle area directly:",
        mathBlocks: [
          "6 - 3t = 0 \\ \\Rightarrow \\ t = 2.0\\,\\text{s}",
          "\\Delta x = ut + \\tfrac12at^2 = (6)(4) + \\tfrac12(-3)(4)^2 = 24 - 24 = 0\\,\\text{m}"
        ]
      },
      {
        stepName: "SOLUTION",
        content: "(c) To find distance, split the motion at the turning point t = 2 s using x(t) = 6t − 1.5t²:",
        mathBlocks: [
          "x(0)=0\\,\\text{m}, \\quad x(2)=6(2)-1.5(2)^2=6.0\\,\\text{m}, \\quad x(4)=6(4)-1.5(4)^2=0\\,\\text{m}",
          "d = |x(2)-x(0)| + |x(4)-x(2)| = |6-0| + |0-6| = 6 + 6 = 12.0\\,\\text{m}"
        ]
      },
      {
        stepName: "INTERPRETATION",
        content: "The car travels 6 m forward, then 6 m back to exactly where it started. The net displacement is zero because the two areas (one above the axis, one below) cancel when added with sign. The total distance is 12 m because both legs of the journey contribute positively to the ground covered — this is the graphical version of the distance-vs-displacement distinction from Part 1."
      },
      {
        stepName: "CHECK",
        content: "Signed-area check: area above axis (0 to 2 s) = ½(2)(6) = +6 m; area below axis (2 to 4 s) = ½(2)(−6) = −6 m. Sum = 0 m, matching the displacement. Sum of magnitudes = 6 + 6 = 12 m, matching the distance."
      }
    ]
  },

  {
    id: "we2-03",
    title: "Applying the Graphical Derivation: v = u + at, s = ut + ½at², v² = u² + 2as",
    provenance: "ADAPTED ACADEMIC PROBLEM",
    provenanceDetails: "Structural reference: OpenStax Physics §3.2, 'Representing Acceleration with Equations and Graphs'; numeric example authored by DHD Nexus",
    problemStatement:
      "A car accelerates uniformly from u = 5 m/s to v = 25 m/s over t = 8 s. (a) Sketch the v–t graph and find the acceleration from its gradient. (b) Find the displacement using the area under the graph. (c) Verify the displacement using s = ut + ½at². (d) Verify the result using v² = u² + 2as.",
    lecturerNotes:
      "Use this example to close Section 8 — every one of the four equations of motion should be shown agreeing on the same numeric answer, proving they are the same physics viewed four ways.",
    steps: [
      {
        stepName: "PROBLEM",
        content: "Apply the graphical gradient/area derivation from Section 8 to a concrete numeric case, and confirm all four equations of motion agree."
      },
      {
        stepName: "WHAT IS HAPPENING?",
        content: "The car's v–t graph is a straight line rising from u = 5 m/s at t = 0 to v = 25 m/s at t = 8 s, since the acceleration is constant."
      },
      {
        stepName: "KNOWN",
        content: "u = 5 m/s, v = 25 m/s, t = 8 s.",
        mathBlocks: ["u = 5\\,\\text{m/s}, \\quad v = 25\\,\\text{m/s}, \\quad t = 8\\,\\text{s}"]
      },
      {
        stepName: "CONCEPT",
        content: "The gradient of the v–t line gives acceleration; the area under the line (a trapezium) gives displacement.",
        mathBlocks: ["a = \\frac{v-u}{t}, \\qquad s = \\tfrac12(u+v)t"]
      },
      {
        stepName: "SOLUTION",
        content: "(a) Gradient (acceleration):",
        mathBlocks: ["a = \\frac{25-5}{8} = 2.5\\,\\text{m/s}^2"]
      },
      {
        stepName: "SOLUTION",
        content: "(b) Area under the graph (trapezium, parallel sides u and v, width t):",
        mathBlocks: ["s = \\tfrac12(u+v)t = \\tfrac12(5+25)(8) = 120\\,\\text{m}"]
      },
      {
        stepName: "SOLUTION",
        content: "(c) Verify using s = ut + ½at²:",
        mathBlocks: ["s = (5)(8) + \\tfrac12(2.5)(8)^2 = 40 + 80 = 120\\,\\text{m}"]
      },
      {
        stepName: "SOLUTION",
        content: "(d) Verify using v² = u² + 2as:",
        mathBlocks: ["v^2 = (5)^2 + 2(2.5)(120) = 25 + 600 = 625 \\ \\Rightarrow \\ v = 25\\,\\text{m/s}"]
      },
      {
        stepName: "INTERPRETATION",
        content: "All four equations of motion return consistent results from the same physical situation: a = 2.5 m/s², s = 120 m, and v = 25 m/s exactly as given. This confirms Section 8's claim that these equations are not independent facts to memorise, but different algebraic views of a single straight-line v–t graph."
      },
      {
        stepName: "CHECK",
        content: "Units are consistent throughout (m/s², m, m/s). The acceleration is positive and the car speeds up, consistent with v > u and constant positive gradient."
      }
    ]
  }
];
