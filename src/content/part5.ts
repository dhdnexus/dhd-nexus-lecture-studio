import type { PartContent } from "../types/course";

export const part5Content: PartContent = {
  title: "Variable Acceleration",
  subtitle: "Episode 5 — When Acceleration Is Not Constant",

  sections: [
    {
      id: "sec5-01",
      number: 1,
      title: "From Constant to Variable Acceleration",
      subtitle: "What Part 4 assumed, and what happens when it fails",
      content: [
        "Every derivation in Part 4 relied on one assumption: acceleration is constant. That single assumption is what allowed a to be pulled outside every integral, producing v = u + at, s = ut + ½at² and v² = u² + 2as.",
        "Part 5 asks the question Part 4 deliberately deferred: what happens when acceleration is not constant? The two definitions a = dv/dt and v = ds/dt still hold exactly — nothing about them changes. What changes is the integration itself, because a can no longer be treated as a fixed number.",
        "This episode is not a new topic. It is Part 4's calculus, applied without the one simplifying assumption that made Part 3's equations possible."
      ],
      lecturerCue: {
        narrationPrompt: "Open by naming the exact assumption Part 4 relied on, then remove it. This should feel like the natural next question, not a new subject.",
        keyPoints: ["Part 4 assumed constant a throughout", "a = dv/dt and v = ds/dt still hold generally", "Only the integration method changes"],
        timeGuidanceMin: 1
      }
    },
    {
      id: "sec5-02",
      number: 2,
      title: "Why SUVAT Stops Being Universal",
      subtitle: "The equations describe a special case, not a law",
      content: [
        "v = u + at, s = ut + ½at² and v² = u² + 2as were derived in Part 4 by integrating a constant. If acceleration instead varies with time or with position, those specific antiderivatives are simply wrong — not approximately wrong, but the result of integrating the wrong function.",
        "A common examination mistake is to see a numerical acceleration value in a problem and reach immediately for SUVAT, without first checking whether that acceleration is actually constant over the interval in question. This episode is designed specifically to break that habit.",
        "The correct response to 'I see an acceleration' is always: is it constant? If yes, Part 3's framework applies. If no, the specific form the acceleration takes — a function of time, or a function of position — determines which calculus method is required."
      ],
      lecturerCue: {
        narrationPrompt: "State the misconception explicitly before correcting it: seeing a number labelled 'acceleration' does not license SUVAT.",
        keyPoints: ["SUVAT equations assume constant a specifically", "Always check constancy before reaching for SUVAT", "The form of a determines the method when it isn't constant"],
        misconceptionAlert: "\"I see an acceleration value, therefore I should use SUVAT\" is false whenever that acceleration is not actually constant.",
        timeGuidanceMin: 2
      }
    },
    {
      id: "sec5-03",
      number: 3,
      title: "Case A — Acceleration Given as a Function of Time",
      subtitle: "a(t) is known",
      content: [
        "When acceleration is given explicitly as a function of time, a(t), the starting relation is still a = dv/dt, so dv = a(t) dt.",
        "Because a(t) now varies, it cannot be pulled outside the integral — it must be integrated as a function of t. Integrating both sides, with an initial condition v = u at t = 0, gives v(t) directly.",
        "This is the same integration process as Part 4, with one difference: the right-hand side is now a genuine function of t rather than a constant, so the antiderivative depends on the specific form of a(t)."
      ],
      equations: ["a = dv/dt"],
      lecturerCue: {
        narrationPrompt: "Contrast this explicitly with Part 4 Section 4.2: same starting relation, same integration process, different result because a(t) is not constant.",
        keyPoints: ["Start from a = dv/dt", "dv = a(t) dt, integrate with respect to t", "Initial condition v = u at t = 0 fixes the constant of integration"],
        timeGuidanceMin: 1
      }
    },
    {
      id: "sec5-04",
      number: 4,
      title: "Completing Case A: From v(t) to s(t)",
      subtitle: "A second integration",
      content: [
        "Once v(t) has been found from a(t), the same logic applies again one level up: v = ds/dt, so ds = v(t) dt.",
        "Integrating v(t) with respect to time, using the initial condition s = s₀ (often zero) at t = 0, produces s(t).",
        "Physically, this two-stage process — integrate a(t) to get v(t), then integrate v(t) to get s(t) — mirrors Part 2's gradient/area picture exactly, except the underlying curves are no longer straight lines."
      ],
      equations: ["v = ds/dt"],
      lecturerCue: {
        narrationPrompt: "Emphasise that this is literally 'integrate twice', the same two-stage structure as Part 4, just with non-constant functions.",
        keyPoints: ["v(t) → s(t) by a second integration", "Same structure as Part 4, applied to a genuine function of t"],
        timeGuidanceMin: 1
      }
    },
    {
      id: "sec5-05",
      number: 5,
      title: "Case B — Velocity Given as a Function of Time",
      subtitle: "v(t) is known directly",
      content: [
        "Some problems supply v(t) directly, without needing a(t) at all. In this case, only one integration is needed: v = ds/dt gives ds = v(t) dt, integrated with respect to time to obtain s(t) directly.",
        "If acceleration is also required, it is found the other way — by differentiating v(t), since a = dv/dt always holds regardless of whether a itself turns out to be constant or not.",
        "This case is a reminder that the direction of the calculus operation — differentiate or integrate — depends entirely on what is given and what is required, not on a fixed sequence of steps to follow every time."
      ],
      equations: ["v = ds/dt"],
      lecturerCue: {
        narrationPrompt: "Use this case to reinforce that students should always ask 'what is given, and what is required?' before deciding whether to differentiate or integrate.",
        keyPoints: ["v(t) given → integrate once for s(t)", "a(t), if needed, comes from differentiating v(t), not integrating"],
        timeGuidanceMin: 1
      }
    },
    {
      id: "sec5-06",
      number: 6,
      title: "Case C — Acceleration Given as a Function of Position",
      subtitle: "a(s) is known: reusing the Part 4 chain-rule bridge",
      content: [
        "When acceleration is given as a function of position, a(s), integrating with respect to time directly is not possible, because a is not expressed in terms of t at all.",
        "This is exactly the situation Part 4's chain-rule identity was built for: a = v dv/ds. Substituting the known a(s), this becomes v dv = a(s) ds — an equation relating velocity and position only, with no time variable present.",
        "Integrating the left-hand side over velocity (from u to v) and the right-hand side over position (from 0 to s) gives v as a function of s. Time never needs to be found at any stage of this method."
      ],
      equations: ["a = v dv/ds"],
      visualKey: "method-selection",
      lecturerCue: {
        narrationPrompt: "Explicitly point out that this is not a new identity — it is Part 4 Section 4.4, being used for the purpose it was built for.",
        keyPoints: ["a(s) cannot be integrated directly with respect to t", "a = v dv/ds converts the problem into position-only variables", "Time is never needed for this method"],
        misconceptionAlert: "Treating every 'integrate the acceleration' problem the same way, regardless of whether a is a function of t or of s, leads to setting up the wrong integral entirely.",
        timeGuidanceMin: 2
      }
    },
    {
      id: "sec5-07",
      number: 7,
      title: "The Method-Selection Decision Framework",
      subtitle: "The form of the information is the clue",
      content: [
        "The three cases above can be summarised in a single decision framework: the mathematical form in which information is given determines which relation to start from, and which variable to integrate with respect to.",
        "Given a(t): start from a = dv/dt, integrate with respect to t. Given v(t): start from v = ds/dt, integrate with respect to t. Given a(s): start from a = v dv/ds, integrate with respect to s.",
        "This is the direct extension of Part 3's equation-selection framework into calculus: instead of scanning known/unknown quantities for a constant-acceleration equation, scan the form of the given function to choose the correct relation and integration variable."
      ],
      lecturerCue: {
        narrationPrompt: "Use the interactive scaffold here — let students select a given form and watch the correct relation and integration variable appear.",
        keyPoints: ["a(t) → integrate a = dv/dt with respect to t", "v(t) → integrate v = ds/dt with respect to t", "a(s) → integrate a = v dv/ds with respect to s"],
        timeGuidanceMin: 2
      }
    },
    {
      id: "sec5-08",
      number: 8,
      title: "Common Traps",
      subtitle: "Recognising when SUVAT does not apply",
      content: [
        "The most common Part 5 error is applying v = u + at or s = ut + ½at² to a problem where acceleration is explicitly given as a function of t or s. These equations are only valid derivatives of a constant — using them elsewhere produces a numerically wrong answer, not merely an inelegant one.",
        "A second common error is integrating a(s) with respect to t by mistake, effectively treating position as if it were time. The chain-rule identity a = v dv/ds exists specifically to prevent this error.",
        "The reliable habit is the one built in Part 3 and extended here: before calculating anything, identify exactly what form the given information takes, and let that form choose the method — never the other way around."
      ],
      lecturerCue: {
        narrationPrompt: "Walk through both traps with a quick contrast: what goes wrong numerically if a student uses SUVAT when a is not constant.",
        keyPoints: ["SUVAT applied to non-constant a gives a wrong numeric answer, not just an inelegant one", "Integrating a(s) with respect to t is a common but incorrect shortcut"],
        timeGuidanceMin: 1
      }
    },
    {
      id: "sec5-09",
      number: 9,
      title: "Worked Examples: All Three Cases",
      subtitle: "a(t), v(t) and a(s) side by side",
      content: [
        "The Worked Examples panel for this episode contains one full example for each of the three cases developed above, using the DHD Nexus reasoning framework throughout.",
        "Compare all three: notice that each begins by identifying the form of the given information, and that this identification — not the acceleration's numerical value — is what determines every subsequent step."
      ],
      lecturerCue: {
        narrationPrompt: "Direct students to the Worked Examples panel and ask them to identify the case before reading each solution.",
        keyPoints: ["One worked example per case", "Method-identification comes before any calculation in each one"],
        timeGuidanceMin: 1
      }
    },
    {
      id: "sec5-10",
      number: 10,
      title: "Summary & Bridge to Part 6",
      subtitle: "The full method-selection picture",
      content: [
        "When acceleration is constant, Part 3's SUVAT framework applies directly. When it is not, the same two definitions from Part 4 — a = dv/dt and v = ds/dt — still hold, but the specific form of the given function determines the integration variable.",
        "a(t): integrate a = dv/dt, then v = ds/dt, with respect to time. v(t): integrate v = ds/dt directly, with respect to time. a(s): use the chain-rule identity a = v dv/ds, and integrate with respect to position.",
        "Part 6 will combine everything from Parts 1–5 — sign reasoning, equation selection, calculus derivation, and method selection under variable acceleration — into multi-stage and synthesis problems that require recognising which tool applies to which part of a single, more complicated motion."
      ],
      lecturerCue: {
        narrationPrompt: "Close by restating the three-case decision framework once more, then preview that Part 6 will combine everything rather than introduce new mathematics.",
        keyPoints: ["Constant a → Part 3 SUVAT", "a(t) or v(t) → integrate with respect to t", "a(s) → integrate with respect to s using a = v dv/ds"],
        timeGuidanceMin: 1
      }
    }
  ],

  checkpoints: [
    {
      id: "cp-5-1",
      title: "Choosing the Starting Relation",
      provenance: "DHD NEXUS ORIGINAL",
      provenanceDetails: "Original conceptual checkpoint authored by DHD Nexus",
      prompt: "A problem gives acceleration as a function of time, a(t) = 3t² + 1.",
      pauseSeconds: 5,
      tasks: [
        {
          id: "cp-5-1-a",
          label: "(a) METHOD SELECTION",
          prompt: "Which relation should you start from, and with respect to which variable should you integrate?",
          correctAnswer: "Start from a = dv/dt; integrate with respect to time, t.",
          reasoning: "Since acceleration is given explicitly as a function of t, a = dv/dt is the relation that connects the given information directly to the required unknown, and t is the natural variable of integration here."
        }
      ]
    },
    {
      id: "cp-5-2",
      title: "Why SUVAT Fails for Variable Acceleration",
      provenance: "DHD NEXUS ORIGINAL",
      provenanceDetails: "Original conceptual checkpoint authored by DHD Nexus",
      prompt: "A student uses s = ut + ½at² on a problem where a(t) = 4t.",
      pauseSeconds: 5,
      tasks: [
        {
          id: "cp-5-2-main",
          label: "MULTIPLE CHOICE",
          prompt: "Why is this approach incorrect?",
          options: [
            "(A) The formula is only ever an approximation, so it is always slightly wrong",
            "(B) s = ut + ½at² was derived by integrating a constant acceleration, and a(t) = 4t is not constant",
            "(C) The formula only works for negative accelerations",
            "(D) The formula requires the object to start from rest"
          ],
          correctAnswer: "(B) s = ut + ½at² was derived by integrating a constant acceleration, and a(t) = 4t is not constant",
          reasoning: "In Part 4, s = ut + ½at² was obtained specifically by integrating a constant a with respect to time. Since a(t) = 4t changes with time, that antiderivative no longer applies; a(t) must instead be integrated as the function it actually is."
        }
      ]
    },
    {
      id: "cp-5-3",
      title: "Why a(s) Problems Do Not Need Time",
      provenance: "DHD NEXUS ORIGINAL",
      provenanceDetails: "Original conceptual checkpoint authored by DHD Nexus",
      prompt: "A problem gives acceleration as a function of position, a(s), and asks only for the velocity at a given displacement.",
      pauseSeconds: 5,
      tasks: [
        {
          id: "cp-5-3-a",
          label: "(a) WHY TIME IS UNNECESSARY",
          prompt: "Explain why this problem can be solved without ever finding the time taken.",
          correctAnswer: "Because a = v dv/ds relates acceleration directly to velocity and position, with no time variable appearing anywhere in the relation, integrating it produces v as a function of s directly.",
          reasoning: "The chain-rule identity a = v dv/ds is derived from a = dv/dt and v = ds/dt, but time cancels out of the final relation entirely, so solving it never requires knowing or calculating t."
        }
      ]
    }
  ]
};
