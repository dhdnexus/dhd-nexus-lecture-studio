import type { PartContent } from "../types/course";

export const part3Content: PartContent = {
  title: "SUVAT: From Derivation to Equation Selection",
  subtitle: "Episode 3 — Choosing the Right Equation, and Knowing Why",

  sections: [
    {
      id: "sec3-01",
      number: 1,
      title: "From Graphs to Equations",
      subtitle: "SUVAT as a packaged result, not a new topic",
      content: [
        "In Part 2 we derived v = u + at, s = ½(u + v)t, s = ut + ½at² and v² = u² + 2as directly from the gradient and area of a single v–t graph.",
        "These four results are collectively known as the SUVAT equations, named after the five quantities they connect: s (displacement), u (initial velocity), v (final velocity), a (acceleration) and t (time).",
        "Part 3 does not introduce new physics. It introduces a new skill: given a problem, which of these four equations should you actually use — and why?"
      ],
      lecturerCue: {
        narrationPrompt: "Remind students that all four equations were already derived in Part 2. The new content this episode is entirely about disciplined equation selection.",
        keyPoints: ["SUVAT = s, u, v, a, t", "All four equations were derived, not handed down", "Part 3's skill is selection, not derivation"],
        timeGuidanceMin: 1
      }
    },
    {
      id: "sec3-02",
      number: 2,
      title: "The Five SUVAT Variables",
      subtitle: "What each symbol physically represents",
      content: [
        "s — displacement, the signed net change in position over the interval considered.",
        "u — initial velocity, the velocity at the start of the interval. v — final velocity, the velocity at the end of the interval.",
        "a — acceleration, assumed constant throughout the interval. t — the duration of the interval.",
        "Every SUVAT equation applies only while acceleration is constant over the interval in question. If acceleration changes during the interval, these equations cannot be applied to the whole interval at once — a condition Part 3 will return to when checking whether SUVAT is even appropriate."
      ],
      lecturerCue: {
        narrationPrompt: "Stress explicitly that u and v are not interchangeable labels — u is always 'at the start of this interval', v is always 'at the end of this interval', for whatever interval the problem defines.",
        keyPoints: ["u = start of interval, v = end of interval", "a assumed constant", "SUVAT requires constant acceleration over the interval used"],
        misconceptionAlert: "u and v are not simply 'two velocities' — mixing up which one is initial and which is final produces a sign error even when the magnitudes are correct.",
        timeGuidanceMin: 2
      }
    },
    {
      id: "sec3-03",
      number: 3,
      title: "Known and Unknown: Setting Up a Problem",
      subtitle: "The step before any equation is chosen",
      content: [
        "Before selecting an equation, list the five SUVAT quantities and mark each one as known, unknown, or not relevant to the question.",
        "A typical problem gives three known quantities and asks for one of the remaining two. Occasionally a problem gives enough information that more than one equation could be used — this is exactly the situation Part 3's equation-selection framework is designed for.",
        "Writing the known/unknown table explicitly, before touching any formula, is the single habit that eliminates most equation-selection errors."
      ],
      lecturerCue: {
        narrationPrompt: "Model writing out a known/unknown table on the board for a simple scenario before revealing any equation.",
        keyPoints: ["List all five SUVAT quantities every time", "Mark each as known, unknown, or not relevant", "Do this before choosing an equation"],
        timeGuidanceMin: 1
      }
    },
    {
      id: "sec3-04",
      number: 4,
      title: "The Equation-Selection Framework",
      subtitle: "Which equation connects what you actually know?",
      content: [
        "Each SUVAT equation involves exactly four of the five quantities — each equation leaves exactly one quantity out. v = u + at leaves out s. s = ½(u+v)t leaves out a. s = ut + ½at² leaves out v. v² = u² + 2as leaves out t.",
        "An equation is directly usable when exactly three of its four quantities are known — the equation then solves directly for the fourth, unknown quantity. An equation with two or more unknowns among its four quantities cannot be used yet, no matter how many of the problem's given numbers appear in it.",
        "This is the core discipline of equation selection: scan the four equations against your known/unknown table, and use the one that has only a single unknown among its four quantities. Do not choose an equation simply because it 'has the most known numbers' — an equation with three knowns and one unknown is usable; an equation with three knowns and two unknowns is not."
      ],
      equations: ["v = u + at", "s = ½(u + v)t", "s = ut + ½at²", "v² = u² + 2as"],
      visualKey: "equation-selection",
      lecturerCue: {
        narrationPrompt: "Use the interactive scaffold live: toggle different combinations of known quantities and let students watch which equations light up as directly usable.",
        keyPoints: ["Each equation excludes exactly one SUVAT quantity", "Usable = exactly one unknown among its four quantities", "Most known numbers ≠ most useful equation"],
        misconceptionAlert: "The equation containing the most known numbers is not necessarily the correct starting equation — what matters is having only one unknown in it.",
        timeGuidanceMin: 3
      }
    },
    {
      id: "sec3-05",
      number: 5,
      title: "Principal Worked Example: Selecting the Efficient Equation",
      subtitle: "Two-point motion along a straight road",
      content: [
        "The Worked Examples panel for this episode walks through a full two-point-motion problem using the DHD Nexus reasoning framework: known quantities are listed first, candidate equations are compared, and the most efficient equation is chosen deliberately — before any arithmetic is performed.",
        "Notice that this problem can actually be solved using two different equations, each one bypassing a different unknown. Selecting the more direct route is itself part of the skill being taught, not a shortcut to be discovered by accident."
      ],
      lecturerCue: {
        narrationPrompt: "Direct students to the Worked Examples panel. Emphasise that the THINK step should be attempted before revealing KNOWN/UNKNOWN.",
        keyPoints: ["Open the Worked Examples panel for the full reasoning sequence", "Compare two valid solution routes", "Efficiency is part of correct method, not optional polish"],
        timeGuidanceMin: 1
      }
    },
    {
      id: "sec3-06",
      number: 6,
      title: "Sign Conventions Revisited: Braking",
      subtitle: "Negative acceleration is not automatically 'slowing down'",
      content: [
        "Part 1 established that whether an object speeds up or slows down depends on comparing the sign of velocity with the sign of acceleration, not on the sign of acceleration alone.",
        "Braking problems are the most common place this misconception appears. A car moving in the positive direction with a negative (braking) acceleration is slowing down — but only because v and a currently have opposite signs, not because the acceleration itself is negative.",
        "If a braking acceleration continues to act after the object momentarily stops, the object reverses direction. Once reversed, velocity and acceleration share the same sign again, and the object speeds up — in the new direction. The acceleration never changed sign; only the outcome did, because velocity changed sign."
      ],
      lecturerCue: {
        narrationPrompt: "Reconnect explicitly to Part 1 Section 1.6's four (v, a) sign cases before applying them to a numeric braking example.",
        keyPoints: ["Same sign of v and a → speeding up", "Opposite signs → slowing down", "A reversal flips the outcome without the acceleration itself changing"],
        misconceptionAlert: "Braking acceleration does not stop acting once the object momentarily stops — if unchanged, it will accelerate the object in reverse.",
        hallQuestion: "If a car brakes to a stop and the same braking acceleration somehow continued afterward, would the car remain at rest?",
        expectedAnswer: "No — with velocity now zero and acceleration still nonzero, the car would begin moving in the opposite direction and then speed up, since v and a would now share the same sign.",
        timeGuidanceMin: 2
      }
    },
    {
      id: "sec3-07",
      number: 7,
      title: "Applying Sign Reasoning: A Full Braking Problem",
      subtitle: "Combining SUVAT with the four sign cases",
      content: [
        "The Worked Examples panel includes a full braking scenario that requires both a SUVAT calculation and explicit sign reasoning: identifying when the car is slowing down, finding its velocity and displacement during braking, and reasoning about what would happen if the braking acceleration continued past the moment the car stops.",
        "This example is designed to show that sign reasoning and equation selection are not separate skills — a real examination question typically requires both together."
      ],
      lecturerCue: {
        narrationPrompt: "Use this example to show sign reasoning and SUVAT working together, not as two disconnected topics.",
        keyPoints: ["Sign reasoning determines the physical story", "SUVAT provides the numbers", "Both are needed for a complete answer"],
        timeGuidanceMin: 1
      }
    },
    {
      id: "sec3-08",
      number: 8,
      title: "Revisiting the Principal Example",
      subtitle: "Same problem, a different combination of knowns",
      content: [
        "Return to the two-point-motion problem from Section 5: a bus passes marker P at u = 8 m/s and marker Q, 100 m further along the road, at t = 10 s later, having accelerated uniformly at a = 0.4 m/s² to reach v = 12 m/s at Q.",
        "Suppose instead the problem had given you u = 8 m/s, v = 12 m/s and t = 10 s, but not the 100 m distance — a perfectly reasonable alternative way to state the same physical situation. Which equation would now be the efficient choice for finding the distance PQ?",
        "Scanning the equation-selection framework: v = u + at no longer helps, since a is now the unknown and s does not appear in it at all. s = ½(u+v)t uses exactly the three now-known quantities (u, v, t) and solves directly for s — the same equation that was most efficient for velocity in Section 5 is again the most efficient equation here, but now for a different unknown. This is the point of the framework: it is not about memorising which equation 'goes with' which problem, but about re-scanning known/unknown every time the given information changes."
      ],
      lecturerCue: {
        narrationPrompt: "Do not re-solve the arithmetic from scratch — the pedagogical point is that the selection process is repeatable, not that the numbers are new.",
        keyPoints: ["Same physical scenario, different combination of knowns", "Re-scan the framework each time — don't memorise a fixed pairing", "s = ½(u+v)t is efficient here because it excludes a entirely"],
        timeGuidanceMin: 2
      }
    },
    {
      id: "sec3-09",
      number: 9,
      title: "Challenge: The Equation-Selection Trap",
      subtitle: "Why the equation with the most known numbers can still be useless",
      content: [
        "The Worked Examples panel closes this episode with a deliberately engineered trap problem: a cyclist's motion between two points, where three quantities are known and two are not.",
        "The tempting first move is v² = u² + 2as, because it contains u and s, both of which are known. But look again at how many quantities in that equation are still unknown — v and a are both unknown, which means this equation cannot be solved directly no matter how many of its terms you can name. The efficient starting equation is a different one entirely.",
        "This is the single most important habit from this episode: check the number of unknowns in an equation, not the number of knowns."
      ],
      lecturerCue: {
        narrationPrompt: "Let students attempt the PAUSE — TRY THIS YOURSELF step before revealing that v² = u² + 2as is a trap here, despite looking attractive.",
        keyPoints: ["Count unknowns, not knowns", "v² = u² + 2as has two unknowns here — not usable yet", "A different equation with only one unknown is the correct start"],
        misconceptionAlert: "'This equation has the most numbers I recognise' is not the same test as 'this equation has only one unknown.'",
        timeGuidanceMin: 2
      }
    },
    {
      id: "sec3-10",
      number: 10,
      title: "Summary & Bridge to Part 4",
      subtitle: "From selecting equations to deriving them from calculus",
      content: [
        "SUVAT connects five quantities — s, u, v, a, t — through four equations, each one excluding exactly one quantity.",
        "Before choosing an equation, build a known/unknown table. An equation is directly usable only when exactly one of its four quantities is unknown.",
        "Sign reasoning from Part 1 remains essential: whether an object speeds up or slows down depends on comparing the signs of v and a together, never on the sign of a alone.",
        "In Part 4, we return to these same four equations and show that they are not just consequences of a graph, but consequences of calculus — derived directly from a = dv/dt and v = ds/dt."
      ],
      lecturerCue: {
        narrationPrompt: "Recap the framework one final time and preview that Part 4 will re-derive the same results using differentiation and integration.",
        keyPoints: ["Known/unknown table before equation choice", "Usable equation = exactly one unknown", "Part 4 re-derives SUVAT using calculus"],
        timeGuidanceMin: 1
      }
    }
  ],

  checkpoints: [
    {
      id: "cp-3-1",
      title: "Reading Off Knowns and Unknowns",
      provenance: "DHD NEXUS ORIGINAL",
      provenanceDetails: "Original conceptual checkpoint authored by DHD Nexus",
      prompt: "A skateboarder starts at 2 m/s and accelerates uniformly at 0.5 m/s² for 6 s.",
      pauseSeconds: 5,
      tasks: [
        {
          id: "cp-3-1-a",
          label: "(a) EQUATION SELECTION",
          prompt: "Which quantities are known, which is unknown if we want the final velocity, and which single equation is most efficient to find it — without solving?",
          correctAnswer: "Known: u = 2 m/s, a = 0.5 m/s², t = 6 s. Unknown: v. Most efficient equation: v = u + at (it excludes s entirely, and only v is unknown).",
          reasoning: "v = u + at involves u, v, a and t, all of which are either known or the target quantity, with exactly one unknown (v). No other equation is needed."
        }
      ]
    },
    {
      id: "cp-3-2",
      title: "Spotting an Unusable Equation",
      provenance: "DHD NEXUS ORIGINAL",
      provenanceDetails: "Original conceptual checkpoint authored by DHD Nexus",
      prompt: "A rock is released from rest (u = 0) and falls a known distance s in an unknown time t, with a = g known.",
      pauseSeconds: 5,
      tasks: [
        {
          id: "cp-3-2-main",
          label: "MULTIPLE CHOICE",
          prompt: "Which equation is directly usable to find the final velocity v, without first finding t?",
          options: [
            "(A) v = u + at",
            "(B) s = ½(u + v)t",
            "(C) s = ut + ½at²",
            "(D) v² = u² + 2as"
          ],
          correctAnswer: "(D) v² = u² + 2as",
          reasoning: "Options (A) and (B) both require t, which is unknown here, alongside v — two unknowns, not usable yet. Option (C) has only one unknown (t), but t is not what was asked for. Option (D) involves u, v, a and s — with u, a and s all known, only v is unknown, so it is directly usable for the requested quantity."
        }
      ]
    },
    {
      id: "cp-3-3",
      title: "Sign Reasoning Under Braking",
      provenance: "DHD NEXUS ORIGINAL",
      provenanceDetails: "Original conceptual checkpoint authored by DHD Nexus",
      prompt: "A car moving at v = −12 m/s (negative direction) brakes with acceleration a = +2 m/s².",
      pauseSeconds: 5,
      tasks: [
        {
          id: "cp-3-3-a",
          label: "(a) SIGN REASONING",
          prompt: "Is the car speeding up or slowing down at this instant? Justify using the signs of v and a.",
          correctAnswer: "Slowing down.",
          reasoning: "v is negative and a is positive — the signs are opposite. By the Part 1 sign rule, opposite signs of v and a mean the car is slowing down, even though its acceleration is positive."
        }
      ]
    }
  ]
};
