import type { WorkedExample } from "../types/course";

export const part5WorkedExamples: WorkedExample[] = [
  {
    id: "we5-01",
    title: "Case A: Acceleration Given as a Function of Time",
    provenance: "DHD NEXUS ORIGINAL",
    provenanceDetails: "Original worked example authored by DHD Nexus",
    problemStatement:
      "A test sled has acceleration a(t) = 6t m/s², for t ≥ 0, and starts with velocity u = 2 m/s at position s = 0 when t = 0. (a) Find v(t). (b) Find s(t). (c) Evaluate v and s at t = 2 s.",
    lecturerNotes:
      "A student reaching for v = u + at here would be treating a as if it were constant, which it is not — use this to reinforce sec5-02's misconception warning before revealing the correct method.",
    steps: [
      {
        stepName: "PROBLEM",
        content: "Find velocity and displacement as functions of time, given acceleration as an explicit function of time."
      },
      {
        stepName: "THINK",
        content: "Before reading on: is a(t) = 6t constant? Would v = u + at be valid here? What should you integrate instead, and with respect to what?"
      },
      {
        stepName: "WHAT IS HAPPENING?",
        content: "The sled's acceleration increases steadily with time rather than staying fixed — this is Case A: a(t) is given directly."
      },
      {
        stepName: "KNOWN",
        content: "a(t) = 6t m/s², u = 2 m/s at t = 0, s = 0 at t = 0.",
        mathBlocks: ["a(t) = 6t, \\quad v(0) = 2, \\quad s(0) = 0"]
      },
      {
        stepName: "CONCEPT",
        content: "Since a(t) is not constant, it cannot be pulled outside the integral. Start from a = dv/dt and integrate with respect to t.",
        mathBlocks: ["\\int_2^v dv = \\int_0^t 6t'\\,dt'"]
      },
      {
        stepName: "WHY THIS METHOD?",
        content: "a = dv/dt is the only relation that connects the given a(t) directly to the required v(t); because a genuinely depends on t, the right-hand side must be integrated as a function of t, not treated as a constant multiplied by t."
      },
      {
        stepName: "SOLUTION",
        content: "(a) Integrating both sides:",
        mathBlocks: [
          "v - 2 = \\big[3t'^2\\big]_0^t = 3t^2",
          "v(t) = 2 + 3t^2\\ \\text{m/s}"
        ]
      },
      {
        stepName: "SOLUTION",
        content: "(b) Now integrate v(t) = ds/dt with respect to t, using s(0) = 0:",
        mathBlocks: [
          "\\int_0^s ds = \\int_0^t (2+3t'^2)\\,dt' = 2t + t^3",
          "s(t) = 2t + t^3\\ \\text{m}"
        ]
      },
      {
        stepName: "SOLUTION",
        content: "(c) At t = 2.0 s:",
        mathBlocks: [
          "v(2) = 2 + 3(2)^2 = 2 + 12 = 14\\,\\text{m/s}",
          "s(2) = 2(2) + (2)^3 = 4 + 8 = 12\\,\\text{m}"
        ]
      },
      {
        stepName: "INTERPRETATION",
        content: "Both v(t) and s(t) were obtained purely by integrating the given a(t) twice, without ever invoking v = u + at or s = ut + ½at² — those equations were never valid here, since a(t) is not constant."
      },
      {
        stepName: "CHECK",
        content: "Differentiating s(t) = 2t + t³ gives ds/dt = 2 + 3t² = v(t), confirming consistency. Differentiating v(t) = 2 + 3t² gives dv/dt = 6t = a(t), confirming the original acceleration is recovered."
      }
    ]
  },

  {
    id: "we5-02",
    title: "Case B: Velocity Given as a Function of Time",
    provenance: "DHD NEXUS ORIGINAL",
    provenanceDetails: "Original worked example authored by DHD Nexus",
    problemStatement:
      "A particle's velocity is v(t) = 2t² − 3 m/s, for t ≥ 0, starting at position s = 0 when t = 0. (a) Find s(t) by integration. (b) Find a(t) by differentiation, and confirm it is not constant. (c) Evaluate v, s and a at t = 3 s.",
    lecturerNotes:
      "Part (b) exists to show explicitly that acceleration here is found by differentiating v(t), not by integrating anything — direction of the calculus operation depends on what is given.",
    steps: [
      {
        stepName: "PROBLEM",
        content: "Given velocity as an explicit function of time, find displacement by integration and acceleration by differentiation."
      },
      {
        stepName: "WHAT IS HAPPENING?",
        content: "v(t) is supplied directly, so no information about acceleration needs to be integrated to reach it — this is Case B."
      },
      {
        stepName: "KNOWN",
        content: "v(t) = 2t² − 3 m/s, s = 0 at t = 0.",
        mathBlocks: ["v(t) = 2t^2 - 3, \\quad s(0) = 0"]
      },
      {
        stepName: "CONCEPT",
        content: "Displacement comes from integrating v = ds/dt with respect to time; acceleration comes from differentiating a = dv/dt.",
        mathBlocks: ["\\int_0^s ds = \\int_0^t v(t')\\,dt', \\qquad a(t) = \\frac{dv}{dt}"]
      },
      {
        stepName: "SOLUTION",
        content: "(a) Integrating v(t):",
        mathBlocks: [
          "s(t) = \\int_0^t (2t'^2 - 3)\\,dt' = \\tfrac23t^3 - 3t"
        ]
      },
      {
        stepName: "SOLUTION",
        content: "(b) Differentiating v(t):",
        mathBlocks: ["a(t) = \\frac{dv}{dt} = 4t"]
      },
      {
        stepName: "SOLUTION",
        content: "(c) At t = 3.0 s:",
        mathBlocks: [
          "v(3) = 2(3)^2 - 3 = 18 - 3 = 15\\,\\text{m/s}",
          "s(3) = \\tfrac23(3)^3 - 3(3) = 18 - 9 = 9\\,\\text{m}",
          "a(3) = 4(3) = 12\\,\\text{m/s}^2"
        ]
      },
      {
        stepName: "INTERPRETATION",
        content: "a(t) = 4t confirms the acceleration is not constant, so SUVAT was correctly never used at any stage — only direct integration and differentiation of the given v(t)."
      },
      {
        stepName: "CHECK",
        content: "Differentiating s(t) = ⅔t³ − 3t gives ds/dt = 2t² − 3 = v(t), confirming (a) is consistent. Units are consistent throughout (m/s, m, m/s²)."
      }
    ]
  },

  {
    id: "we5-03",
    title: "Case C: Acceleration Given as a Function of Position",
    provenance: "DHD NEXUS ORIGINAL",
    provenanceDetails: "Original worked example authored by DHD Nexus",
    problemStatement:
      "A particle has acceleration a(s) = 4s m/s², where s is its displacement in metres from the start of the track, and it has velocity u = 3 m/s at s = 0. Find its velocity after it has travelled s = 2 m, without finding the time taken.",
    lecturerNotes:
      "Ask students first why v = u + at cannot be used here at all — there is no t given anywhere in the problem, only a relationship in terms of s.",
    steps: [
      {
        stepName: "PROBLEM",
        content: "Find velocity as a function of position, given acceleration as an explicit function of position, without calculating the time taken."
      },
      {
        stepName: "THINK",
        content: "Before reading on: a is given in terms of s, not t. Which Part 4 identity turns a = dv/dt into a relation involving s directly?"
      },
      {
        stepName: "KNOWN",
        content: "a(s) = 4s m/s², u = 3 m/s at s = 0.",
        mathBlocks: ["a(s) = 4s, \\quad v(s{=}0) = 3"]
      },
      {
        stepName: "CONCEPT",
        content: "Since acceleration is a function of position, use the chain-rule identity from Part 4: a = v dv/ds.",
        mathBlocks: ["a = v\\frac{dv}{ds} = 4s \\ \\Rightarrow \\ v\\,dv = 4s\\,ds"]
      },
      {
        stepName: "WHY THIS METHOD?",
        content: "a = dv/dt cannot be integrated directly with respect to t here, because a is not expressed as a function of t at all. a = v dv/ds converts the same physical relationship into position-only variables, avoiding the need for t entirely."
      },
      {
        stepName: "SOLUTION",
        content: "Separating variables and integrating, velocity from u to v and position from 0 to s = 2:",
        mathBlocks: [
          "\\int_3^v v\\,dv = \\int_0^2 4s\\,ds",
          "\\tfrac12v^2 - \\tfrac12(3)^2 = \\big[2s^2\\big]_0^2 = 8",
          "\\tfrac12v^2 = 8 + 4.5 = 12.5 \\ \\Rightarrow \\ v^2 = 25 \\ \\Rightarrow \\ v = 5.0\\,\\text{m/s}"
        ]
      },
      {
        stepName: "INTERPRETATION",
        content: "The particle reaches 5.0 m/s after travelling 2 m — found entirely in terms of position, with no reference to time at any stage of the calculation."
      },
      {
        stepName: "CHECK",
        content: "Dimensionally, a(s)·ds has units (m/s²)(m) = m²/s², matching v·dv, which also has units m²/s² — confirming the separated equation is dimensionally consistent."
      }
    ]
  }
];
