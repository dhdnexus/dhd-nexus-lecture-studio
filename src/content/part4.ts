import type { PartContent } from "../types/course";

export const part4Content: PartContent = {
  title: "From SUVAT to Calculus",
  subtitle: "Episode 4 — Where the Equations of Motion Actually Come From",

  sections: [
    {
      id: "sec4-01",
      number: 1,
      title: "From Selecting Equations to Deriving Them",
      subtitle: "Why does v = u + at even exist?",
      content: [
        "Part 3 taught a disciplined method for choosing which SUVAT equation to use. That method assumed the four equations were already available as tools.",
        "Part 4 asks a different question: where do these equations actually come from? The answer is calculus — specifically, the definitions of velocity and acceleration as rates of change.",
        "By the end of this episode, v = u + at, s = ut + ½at² and v² = u² + 2as will no longer be four separate facts to remember. They will be three consequences of two definitions: a = dv/dt and v = ds/dt."
      ],
      lecturerCue: {
        narrationPrompt: "Frame this episode as answering 'why', not reteaching 'which'. Part 3's equations are the destination; Part 4 is the derivation.",
        keyPoints: ["Part 3: which equation to use", "Part 4: why that equation exists", "Two definitions generate all of SUVAT"],
        timeGuidanceMin: 1
      }
    },
    {
      id: "sec4-02",
      number: 2,
      title: "Acceleration as a Derivative",
      subtitle: "a = dv/dt",
      content: [
        "Part 1 defined acceleration as the rate of change of velocity, a = Δv/Δt, in the limit as Δt shrinks to zero. That limit is exactly the derivative of velocity with respect to time.",
        "This is not a new definition — it is the same physical idea from Part 1, written using calculus notation. The derivative dv/dt measures how quickly velocity is changing at a single instant, just as the gradient of a v–t graph did in Part 2.",
        "For constant acceleration, dv/dt equals the same constant value a at every instant — this single fact is the entire starting point for everything that follows in this episode."
      ],
      equations: ["a = dv/dt"],
      lecturerCue: {
        narrationPrompt: "Emphasise continuity with Part 1 and Part 2: this is the same acceleration, the same gradient, now written in derivative notation.",
        keyPoints: ["a = dv/dt is Part 1's definition in calculus notation", "For constant a, dv/dt never changes"],
        timeGuidanceMin: 1
      }
    },
    {
      id: "sec4-03",
      number: 3,
      title: "Deriving v = u + at",
      subtitle: "Integrating a constant acceleration",
      content: [
        "Starting from a = dv/dt with a constant, both sides can be integrated with respect to time. On the left, integrate dv from the initial velocity u (at t = 0) to the velocity v at time t. On the right, integrate the constant a with respect to t, from 0 to t.",
        "Because a is constant, it can be pulled outside the integral on the right-hand side — this is precisely the assumption of constant acceleration doing its mathematical work.",
        "Evaluating both definite integrals gives v − u = at, which rearranges to the first equation of motion: v = u + at. This is no longer a memorised fact — it is the direct result of integrating a constant rate of change."
      ],
      equations: ["a = dv/dt", "v = u + at"],
      lecturerCue: {
        narrationPrompt: "Write out both integrals explicitly, evaluate them term by term, and only then reveal that the result is the familiar equation from Part 3.",
        keyPoints: ["∫ from u to v of dv = ∫ from 0 to t of a dt", "Constant a can be pulled outside the integral", "Result: v = u + at"],
        misconceptionAlert: "This derivation only works because a is assumed constant — pulling a outside the integral is not valid otherwise.",
        timeGuidanceMin: 2
      }
    },
    {
      id: "sec4-04",
      number: 4,
      title: "Velocity as a Derivative, and Deriving s = ut + ½at²",
      subtitle: "v = ds/dt",
      content: [
        "In exactly the same way, velocity is the rate of change of position: v = ds/dt. Displacement is therefore the accumulation of velocity over time — precisely what the area under a v–t graph represented in Part 2.",
        "Substituting v = u + at (just derived) into v = ds/dt gives ds/dt = u + at. Integrating both sides with respect to time, from s = 0 at t = 0 to displacement s at time t, produces s = ut + ½at² directly.",
        "This equation is therefore not an independent formula either — it follows from integrating the velocity expression that was itself derived from acceleration."
      ],
      equations: ["v = ds/dt", "s = ut + ½at²"],
      lecturerCue: {
        narrationPrompt: "Show explicitly that ds/dt = u + at is integrated term by term: ∫u dt gives ut, and ∫at dt gives ½at².",
        keyPoints: ["v = ds/dt is position's rate of change", "Substitute the Section 3 result before integrating", "Result: s = ut + ½at²"],
        timeGuidanceMin: 2
      }
    },
    {
      id: "sec4-05",
      number: 5,
      title: "The Chain Rule Bridge",
      subtitle: "a = v dv/ds",
      content: [
        "The third SUVAT equation, v² = u² + 2as, eliminates time entirely. Its derivation requires one additional step: rewriting acceleration in terms of position instead of time.",
        "Using the chain rule, dv/dt = (dv/ds)(ds/dt). Since ds/dt = v by definition, this becomes a = v dv/ds — acceleration expressed as velocity multiplied by the rate of change of velocity with respect to position, rather than with respect to time.",
        "This identity is exact and general; it does not depend on acceleration being constant. It simply re-expresses the same derivative using a different independent variable, which becomes essential once acceleration depends on position rather than time — a case explored later in the series."
      ],
      equations: ["a = v dv/ds"],
      lecturerCue: {
        narrationPrompt: "Walk through the chain rule step explicitly: dv/dt = (dv/ds)(ds/dt), then substitute ds/dt = v.",
        keyPoints: ["Chain rule: dv/dt = (dv/ds)(ds/dt)", "ds/dt = v by definition", "Result: a = v dv/ds, valid generally, not just for constant a"],
        timeGuidanceMin: 2
      }
    },
    {
      id: "sec4-06",
      number: 6,
      title: "Deriving v² = u² + 2as",
      subtitle: "Separating variables and integrating",
      content: [
        "For constant acceleration, a = v dv/ds can be rearranged so that all velocity terms are on one side and all position terms are on the other: v dv = a ds.",
        "Integrating the left-hand side from u to v, and the right-hand side from 0 to s (with a constant and therefore removable from the integral), gives ½v² − ½u² = as.",
        "Multiplying through by 2 and rearranging produces v² = u² + 2as — the fourth equation of motion, now understood as a consequence of separating variables in a = v dv/ds rather than as a fact to memorise."
      ],
      equations: ["a = v dv/ds", "v² = u² + 2as"],
      visualKey: "derivative-chain",
      lecturerCue: {
        narrationPrompt: "Use the interactive visual here to tie all three derivations together: differentiating x(t) down to a(t), and integrating a(t) back up to v(t) and x(t).",
        keyPoints: ["Separate variables: v dv = a ds", "Integrate both sides with constant a", "Result: v² = u² + 2as"],
        timeGuidanceMin: 2
      }
    },
    {
      id: "sec4-07",
      number: 7,
      title: "SUVAT as a Special Case",
      subtitle: "Not a separate topic — a consequence",
      content: [
        "Every equation from Part 3 has now been derived from exactly two definitions: a = dv/dt and v = ds/dt, applied under the single assumption that acceleration is constant.",
        "This is the central conceptual message of this episode: SUVAT is not a disconnected collection of formulas to be memorised. It is a special case that arises automatically from the fundamental definitions of motion, once acceleration is assumed constant.",
        "The assumption of constant acceleration is what allowed a to be pulled outside every integral in this episode. Whenever that assumption fails, a different method is required — the subject of the next stage of this series."
      ],
      lecturerCue: {
        narrationPrompt: "Make this the moment students realise the four equations were never independent facts — pause here before moving on.",
        keyPoints: ["Two definitions, one assumption (constant a), four familiar results", "SUVAT is a special case, not the definition of motion"],
        misconceptionAlert: "SUVAT is often taught as though it were the definition of kinematics; it is in fact a consequence of calculus under a specific assumption.",
        timeGuidanceMin: 1
      }
    },
    {
      id: "sec4-08",
      number: 8,
      title: "Differentiating a Given Position Function",
      subtitle: "Applying the definitions directly",
      content: [
        "The definitions a = dv/dt and v = ds/dt apply to any position function x(t), not only to the constant-acceleration case used to derive SUVAT.",
        "The Worked Examples panel includes a full example in which a position function is differentiated twice — first to obtain velocity, then to obtain acceleration — and the results are used to answer physical questions about specific instants, including a direct callback to Part 1's 'v = 0 does not imply a = 0'."
      ],
      lecturerCue: {
        narrationPrompt: "Direct students to the Worked Examples panel. This example does not assume constant acceleration — that is deliberate.",
        keyPoints: ["v = dx/dt and a = dv/dt apply generally", "See the Worked Examples panel for the full reasoning"],
        timeGuidanceMin: 1
      }
    },
    {
      id: "sec4-09",
      number: 9,
      title: "When Acceleration Is Not Constant",
      subtitle: "A preview, not a full treatment",
      content: [
        "Every derivation in this episode relied on being able to pull a constant acceleration outside an integral. If acceleration instead depends on time, a = a(t), or on position, a = a(s), that step is no longer valid, and a genuinely different integration method is required for each case.",
        "This distinction — that the mathematical form of the given information determines the appropriate method — is the organising idea of the next stage of this series. Part 4's purpose has been to establish that SUVAT itself is only the constant-acceleration special case of a much more general calculus framework."
      ],
      lecturerCue: {
        narrationPrompt: "Keep this brief — the goal is to signal that more is coming, not to teach the variable-acceleration methods now.",
        keyPoints: ["Constant a allowed a to be pulled outside every integral", "a(t) and a(s) each require their own method", "This is previewed, not taught, here"],
        timeGuidanceMin: 1
      }
    },
    {
      id: "sec4-10",
      number: 10,
      title: "Summary & Bridge Forward",
      subtitle: "Two definitions, one assumption, four results",
      content: [
        "a = dv/dt and v = ds/dt are the two fundamental definitions of this episode. Integrating each under the assumption of constant acceleration produces v = u + at and s = ut + ½at².",
        "The chain rule identity a = v dv/ds, combined with separation of variables, produces v² = u² + 2as.",
        "SUVAT is therefore a special case of calculus applied to motion under constant acceleration — not an independent set of rules. Whenever acceleration is not constant, these same two definitions still apply, but a different integration method is required for each mathematical form the acceleration takes."
      ],
      lecturerCue: {
        narrationPrompt: "Close by re-stating the episode's central message once more before bridging to variable acceleration.",
        keyPoints: ["a = dv/dt, v = ds/dt: the two definitions", "Constant a → SUVAT emerges automatically", "Variable a → different methods, coming next"],
        timeGuidanceMin: 1
      }
    }
  ],

  checkpoints: [
    {
      id: "cp-4-1",
      title: "The Physical Meaning of a = dv/dt",
      provenance: "DHD NEXUS ORIGINAL",
      provenanceDetails: "Original conceptual checkpoint authored by DHD Nexus",
      prompt: "Consider the statement a = dv/dt.",
      pauseSeconds: 5,
      tasks: [
        {
          id: "cp-4-1-a",
          label: "(a) PHYSICAL MEANING",
          prompt: "In your own words, what does a = dv/dt physically represent, and how does it relate to the gradient of a v–t graph from Part 2?",
          correctAnswer: "Acceleration is the instantaneous rate at which velocity is changing with time — exactly the tangent gradient of a v–t graph at that instant.",
          reasoning: "dv/dt is the calculus limit of Δv/Δt as the time interval shrinks to zero, which is precisely the tangent-gradient construction introduced in Part 2."
        }
      ]
    },
    {
      id: "cp-4-2",
      title: "Why Constant Acceleration Allows Direct Integration",
      provenance: "DHD NEXUS ORIGINAL",
      provenanceDetails: "Original conceptual checkpoint authored by DHD Nexus",
      prompt: "In deriving v = u + at from a = dv/dt, the constant a was moved outside the integral sign.",
      pauseSeconds: 5,
      tasks: [
        {
          id: "cp-4-2-a",
          label: "(a) WHY THIS STEP IS VALID",
          prompt: "Why is it valid to pull a outside the integral here, and what would go wrong if acceleration were not constant?",
          correctAnswer: "A constant can always be factored out of an integral. If a depended on t, it would have to remain inside the integral and be integrated as a function of t, which generally changes both the method and the result.",
          reasoning: "∫ a dt = a∫dt = at only holds because a does not change with t. If a = a(t), the correct result is ∫a(t) dt, which is a different (and generally harder) integral."
        }
      ]
    },
    {
      id: "cp-4-3",
      title: "SUVAT as a Special Case",
      provenance: "DHD NEXUS ORIGINAL",
      provenanceDetails: "Original conceptual checkpoint authored by DHD Nexus",
      prompt: "This episode's central claim is that SUVAT is a special case, not the definition of motion.",
      pauseSeconds: 5,
      tasks: [
        {
          id: "cp-4-3-a",
          label: "(a) SPECIAL CASE OF WHAT?",
          prompt: "Of what more general mathematical framework is SUVAT a special case, and what single assumption makes it valid?",
          correctAnswer: "SUVAT is a special case of the calculus of motion defined by a = dv/dt and v = ds/dt, valid specifically under the assumption that acceleration is constant.",
          reasoning: "Every SUVAT equation in this episode was derived from these two definitions using the fact that a constant could be pulled outside an integral — an assumption that fails once acceleration varies."
        }
      ]
    }
  ]
};
