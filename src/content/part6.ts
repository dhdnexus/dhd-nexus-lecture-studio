import type { PartContent } from "../types/course";

export const part6Content: PartContent = {
  title: "Kinematics Mastery: Beyond SUVAT",
  subtitle: "Episode 6 — Choosing the Right Method for an Unfamiliar Problem",

  sections: [
    {
      id: "sec6-01",
      number: 1,
      title: "Beyond Individual Methods",
      subtitle: "You now know several tools. Which one do you reach for?",
      content: [
        "Across Parts 1–5 you built a genuine toolkit: sign reasoning, motion graphs, the constant-acceleration equations, their calculus derivation, and the methods for variable acceleration. Each part taught one tool in isolation, with the problem already telling you which tool to use.",
        "Real problems do not announce their method. This episode is not about learning something new — it is about learning to recognise, from a problem's own structure, which of the tools you already have actually applies.",
        "The question this episode answers is not 'how do I solve this?' but 'how do I decide how to solve this?' — the single most important examination skill the whole series has been building toward."
      ],
      lecturerCue: {
        narrationPrompt: "Open by naming the full toolkit built across Parts 1-5, then reframe the challenge: recognition, not new mathematics.",
        keyPoints: ["Every tool has already been taught", "The new skill is recognising which one applies", "This is a reasoning episode, not a new-formula episode"],
        timeGuidanceMin: 1
      }
    },
    {
      id: "sec6-02",
      number: 2,
      title: "SUVAT Is a Special Tool, Not the Definition of Kinematics",
      subtitle: "The idea this whole series has been building toward",
      content: [
        "It is easy, after Part 3's fluency with equation selection, to start treating SUVAT as kinematics itself. Part 4 proved otherwise: SUVAT is what falls out of a = dv/dt and v = ds/dt specifically when acceleration is constant. Part 5 showed what happens the moment that assumption fails.",
        "The mature view is: kinematics is fundamentally the study of a = dv/dt and v = ds/dt. SUVAT, graphs, and every variable-acceleration method are different consequences of applying those same two definitions under different conditions.",
        "Holding onto this idea is what prevents the single most common examination error at this level: reaching for a familiar equation before checking whether its assumptions actually hold."
      ],
      lecturerCue: {
        narrationPrompt: "State this section's title sentence aloud, slowly, and let it land before moving on — it is the thesis of the entire episode.",
        keyPoints: ["a = dv/dt and v = ds/dt are the real foundation", "SUVAT is the constant-acceleration special case", "Checking assumptions comes before applying any equation"],
        misconceptionAlert: "Treating SUVAT as 'the' equations of motion, rather than as one special case among several, is the root cause of most method-selection errors.",
        timeGuidanceMin: 2
      }
    },
    {
      id: "sec6-03",
      number: 3,
      title: "The Five-Branch Method Decision",
      subtitle: "A single map covering everything from Parts 1–5",
      content: [
        "Every problem in this series falls into one of five branches. Constant acceleration: use Part 3's equation-selection framework. Acceleration given as a(t): use Part 5's Case A, integrating a = dv/dt with respect to time. Velocity given as v(t): integrate v = ds/dt with respect to time. Acceleration given as a(s): use Part 5's Case C, a = v dv/ds, integrating with respect to position.",
        "The fifth branch is staged or piecewise motion: when a single problem changes regime partway through, split it into physically meaningful stages, solve each with whichever of the first four branches applies to that stage, and carry the final state of one stage forward as the initial state of the next.",
        "If none of these five branches seems to apply immediately, that is not a signal to guess — it is the signal to fall back to the full seven-step DHD Nexus framework, developed in Section 8."
      ],
      visualKey: "which-method",
      lecturerCue: {
        narrationPrompt: "Use the interactive decision visual here — let students select a branch and see exactly which Part of the series it connects back to.",
        keyPoints: ["Five branches cover every case built across Parts 1-5", "Staged motion is not a sixth method — it is repeated application of the first four", "No familiar branch fitting is itself useful information"],
        timeGuidanceMin: 2
      }
    },
    {
      id: "sec6-04",
      number: 4,
      title: "Reading the Physical Structure First",
      subtitle: "Before any equation, understand the motion",
      content: [
        "The single biggest time-saver in a synthesis problem is describing the physical situation in plain words before writing anything mathematical: what is moving, in what direction, does its acceleration change, and if so, when and how.",
        "This description almost always reveals the branch immediately. A phrase like 'accelerates uniformly, then travels at constant speed, then brakes' announces staged motion with three constant-acceleration segments. A phrase like 'acceleration decreases as fuel burns' announces a(t). A phrase like 'acceleration depends on how far it has travelled' announces a(s).",
        "Students who skip this step and search for a formula that 'has the right letters in it' are the ones most likely to apply SUVAT where it does not belong."
      ],
      lecturerCue: {
        narrationPrompt: "Model reading a problem statement aloud and narrating which words signal which branch, before any calculation begins.",
        keyPoints: ["Describe the motion in words first", "Certain phrases reliably signal certain branches", "Formula-hunting without this step causes most errors"],
        timeGuidanceMin: 1
      }
    },
    {
      id: "sec6-05",
      number: 5,
      title: "Multi-Stage Motion",
      subtitle: "Carrying state correctly between stages",
      content: [
        "In a staged problem, each stage is solved as its own self-contained motion, with its own known/unknown table. The critical link between stages is that the final velocity of one stage becomes the initial velocity of the next — the motion does not reset, only the governing equation for that interval changes.",
        "Displacement is usually tracked stage by stage and then summed for total distance, since each stage's own SUVAT or calculus result naturally gives that stage's own displacement.",
        "A single sign convention must be chosen once, at the very start, and held fixed through every stage — even a stage in which the object reverses direction relative to its earlier motion."
      ],
      equations: ["v = u + at", "s = ut + ½at²"],
      lecturerCue: {
        narrationPrompt: "Draw a simple three-stage v-t sketch and explicitly label where one stage's final velocity becomes the next stage's u.",
        keyPoints: ["Final v of one stage = initial u of the next", "One sign convention for the whole problem, chosen once", "Sum stage displacements for total distance"],
        misconceptionAlert: "Restarting the sign convention or the velocity from zero at the start of each new stage produces a physically inconsistent solution.",
        timeGuidanceMin: 2
      }
    },
    {
      id: "sec6-06",
      number: 6,
      title: "Choosing Methods Within a Single Problem",
      subtitle: "Different stages can require different tools",
      content: [
        "The five-branch framework is applied stage by stage, not once for the whole problem. It is entirely normal for one stage of a journey to require Part 5's calculus (because its acceleration is genuinely a function of time) while the very next stage requires only Part 3's SUVAT (because, from that point on, acceleration happens to be constant).",
        "The Worked Examples panel for this episode includes exactly this situation: a test sled with a non-constant acceleration during an initial phase, followed by a constant acceleration for the remainder of its motion.",
        "Recognising the boundary between the two regimes — and re-checking whether acceleration is constant at that boundary — is the skill this section is built around."
      ],
      lecturerCue: {
        narrationPrompt: "Point directly to the Worked Examples panel and preview that its second example changes method mid-problem.",
        keyPoints: ["Different stages of one problem can need different branches", "Always re-check constancy of a at each new stage, don't assume"],
        timeGuidanceMin: 1
      }
    },
    {
      id: "sec6-07",
      number: 7,
      title: "Common Traps and Hidden Assumptions",
      subtitle: "Why a familiar-looking number is not enough",
      content: [
        "The most persistent trap in this entire series is seeing a numerical value described as 'acceleration' and reaching for v = u + at or s = ut + ½at² without first confirming that value is constant throughout the interval being analysed.",
        "A second trap is applying s = ut + ½at² across an entire multi-stage journey at once, using only the start and end conditions — this silently assumes a single constant acceleration held for the whole journey, which staged problems by definition do not have.",
        "A third trap is losing track of the sign convention partway through a problem, particularly across a stage in which the object reverses direction — this does not change the physics, but it reliably produces sign errors in the final answer if not handled with the same discipline established in Part 1."
      ],
      lecturerCue: {
        narrationPrompt: "Give each trap a one-sentence 'how to catch yourself' rule the students can say out loud during an exam.",
        keyPoints: ["A numerical acceleration is not automatically a constant acceleration", "SUVAT across an entire staged journey silently assumes one stage", "A fixed sign convention must survive every stage, including reversals"],
        misconceptionAlert: "'The problem gave me a number for acceleration, so I can use SUVAT' is false whenever that number is not constant over the interval in question.",
        timeGuidanceMin: 2
      }
    },
    {
      id: "sec6-08",
      number: 8,
      title: "The Full DHD Nexus Seven-Step Framework",
      subtitle: "What to do when no branch is immediately obvious",
      content: [
        "UNDERSTAND: describe the physical motion in plain words before writing any mathematics. REPRESENT: choose and fix a sign convention, and sketch the situation if it helps. IDENTIFY: list every known and unknown quantity, stage by stage if the motion is staged.",
        "CHOOSE: use the five-branch framework to select the correct relation for each stage, explicitly stating why that branch applies. SOLVE: carry out the mathematics, transferring state variables correctly across any stage boundaries.",
        "INTERPRET: state what each result means physically, not just its numerical value. CHECK: verify units, signs, and physical plausibility, and where possible confirm the result using an independent method — exactly the discipline built into every worked example across this entire series."
      ],
      lecturerCue: {
        narrationPrompt: "Present this as the safety net, not a new burden: it is the same seven-step habit every worked example in the series has already modelled.",
        keyPoints: ["UNDERSTAND, REPRESENT, IDENTIFY, CHOOSE, SOLVE, INTERPRET, CHECK", "This is not new — every worked example has followed this structure implicitly", "Use it explicitly whenever no branch is immediately obvious"],
        timeGuidanceMin: 2
      }
    },
    {
      id: "sec6-09",
      number: 9,
      title: "Capstone Strategy",
      subtitle: "What makes a synthesis problem 'hard'",
      content: [
        "A genuinely difficult kinematics problem at this level is rarely mathematically advanced — Part 6's capstone problem uses nothing beyond ordinary SUVAT arithmetic. Its difficulty comes entirely from structure: multiple stages, a need to justify which method applies where, and a request to reason about what would change if an assumption were altered.",
        "The reliable strategy for a capstone problem is to apply the seven-step framework explicitly and in full, rather than searching for a shortcut — the framework is slower on an easy problem, but it is what actually scales to a hard one.",
        "The Worked Examples panel closes with exactly this kind of problem, deliberately including a final question about what would change if one stage's motion were not uniform — a check on whether the underlying assumptions, not just the arithmetic, were properly understood."
      ],
      lecturerCue: {
        narrationPrompt: "Reassure students that capstone difficulty is structural, not computational, before they open the final worked example.",
        keyPoints: ["Difficulty here means structure, not advanced mathematics", "Apply the seven-step framework in full, even when it feels slow", "A capstone question about a changed assumption tests understanding, not memory"],
        timeGuidanceMin: 1
      }
    },
    {
      id: "sec6-10",
      number: 10,
      title: "Kinematics Mastery — Summary",
      subtitle: "The complete picture, Parts 1–6",
      content: [
        "Kinematics rests on two definitions: a = dv/dt and v = ds/dt. Everything else in this series — sign reasoning, graphs, SUVAT, calculus derivation, variable-acceleration methods, and staged-motion analysis — is a consequence of applying those two definitions under different physical conditions.",
        "The five-branch decision framework — constant a, a(t), v(t), a(s), and staged motion — covers every case built across this series. When no branch is immediately obvious, the seven-step DHD Nexus framework (UNDERSTAND → REPRESENT → IDENTIFY → CHOOSE → SOLVE → INTERPRET → CHECK) is the reliable fallback.",
        "This completes the foundational arc of the series: from the language of motion, through graphs and SUVAT, to calculus and variable acceleration, to genuine method selection. Later parts of the series extend these same tools to two-dimensional and relative motion, but the reasoning habits built here — check your assumptions, identify the structure, choose deliberately — do not change."
      ],
      lecturerCue: {
        narrationPrompt: "Close by connecting all six episodes into one sentence, then look ahead briefly to what the series does next.",
        keyPoints: ["Two definitions generate the entire toolkit", "Five branches, one fallback framework", "The reasoning habit, not the formula list, is the actual outcome of this series"],
        timeGuidanceMin: 1
      }
    }
  ],

  checkpoints: [
    {
      id: "cp-6-1",
      title: "Which Branch Applies?",
      provenance: "DHD NEXUS ORIGINAL",
      provenanceDetails: "Original conceptual checkpoint authored by DHD Nexus",
      prompt: "A particle's acceleration is recorded as a(s) = 3s + 2 m/s², where s is its displacement in metres.",
      pauseSeconds: 5,
      tasks: [
        {
          id: "cp-6-1-main",
          label: "MULTIPLE CHOICE",
          prompt: "Which branch of the decision framework applies, and what should you integrate?",
          options: [
            "(A) Constant acceleration — use the SUVAT equations directly",
            "(B) a(t) is given — integrate a = dv/dt with respect to t",
            "(C) a(s) is given — integrate a = v dv/ds with respect to s",
            "(D) Staged motion — split into separate constant-acceleration stages"
          ],
          correctAnswer: "(C) a(s) is given — integrate a = v dv/ds with respect to s",
          reasoning: "Acceleration is explicitly a function of displacement, not time, and it is not constant. This is Part 5's Case C: the chain-rule identity a = v dv/ds converts the relation into position-only variables."
        }
      ]
    },
    {
      id: "cp-6-2",
      title: "Recognising When SUVAT Is Invalid: The Parachutist",
      provenance: "DHD NEXUS ORIGINAL CHALLENGE PROBLEM",
      provenanceDetails: "DHD Nexus Original Challenge Problem — Challenge A",
      prompt: "A parachutist jumps from a stationary hot-air balloon 800 m above the ground. For the first 12 s of the fall she is in free fall (acceleration g = 9.8 m/s² downward throughout). At t = 12 s she opens her parachute, and from that instant her acceleration decreases steadily until she reaches a constant landing speed of 5 m/s well before reaching the ground. A rushed student is asked to find her total time of fall, and writes s = ut + ½at² using a = 9.8 m/s² for the entire 800 m.",
      pauseSeconds: 5,
      tasks: [
        {
          id: "cp-6-2-a",
          label: "(a) WHY THIS FAILS",
          prompt: "Without doing the full calculation, explain why the student's approach is wrong, and describe what information would actually be needed to solve the problem correctly.",
          correctAnswer: "Acceleration is only 9.8 m/s² for the first 12 s; after the parachute opens it changes continuously until reaching a steady descent, so it is not constant over the whole 800 m. s = ut + ½at² can only be applied to the first stage. Solving the problem correctly requires splitting it into (at least) the free-fall stage and the parachute-deceleration stage, and the second stage cannot be solved by SUVAT alone — its varying acceleration would need to be given explicitly (e.g. as a function of time) before that stage's time and distance could be found.",
          reasoning: "This is Branch 5 (staged motion) combined with the Section 2 principle that a numerical acceleration value is only usable in SUVAT if it is genuinely constant over the interval being analysed — here it is constant for only part of the fall."
        }
      ]
    },
    {
      id: "cp-6-3",
      title: "Carrying State Between Stages",
      provenance: "DHD NEXUS ORIGINAL",
      provenanceDetails: "Original conceptual checkpoint authored by DHD Nexus",
      prompt: "A journey is modelled in three stages: accelerate, cruise at constant velocity, then brake to rest.",
      pauseSeconds: 5,
      tasks: [
        {
          id: "cp-6-3-a",
          label: "(a) STATE TRANSFER",
          prompt: "What quantity from the end of Stage 1 becomes the initial velocity u used in Stage 2's equations? Is it correct to restart velocity from zero at the beginning of Stage 2?",
          correctAnswer: "The final velocity reached at the end of Stage 1 becomes the initial velocity u for Stage 2. It is not correct to restart from zero — the object does not stop between stages, so its velocity carries over continuously.",
          reasoning: "Each stage is a self-contained motion for the purposes of applying an equation, but physically the motion is continuous — the final state of one stage is, by definition, the initial state of the next."
        }
      ]
    }
  ]
};
