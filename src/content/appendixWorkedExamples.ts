import type { WorkedExample } from "../types/course";

export const appendixWorkedExamples: WorkedExample[] = [
  {
    id: "we-appendix-01",
    title: "Relations Between the Roots: Seven Expressions, One Toolbox",
    provenance: "DHD NEXUS ORIGINAL PEDAGOGICAL WORKED EXAMPLE",
    provenanceDetails: "Original teaching example adapted from the supplied handwritten problem.",
    problemStatement: "Given that α and β are roots of x² − 3x + 5 = 0, find: (a) α² + β², (b) 1/α + 1/β, (c) αβ(1/α + 1/β), (d) α²β + αβ², (e) α² − αβ + β², (f) (1 + α/β)(1 + β/α), (g) α³ + β³.",
    lecturerNotes: "Treat the seven requests as one coherent problem, not seven unrelated questions. The central routine is: transform first, substitute second. Encourage students to reuse results already established in earlier subparts.",
    steps: [
      {
        stepName: "PROBLEM",
        content: "Given that α and β are roots of x² − 3x + 5 = 0, determine the seven expressions shown in the problem statement.",
        mathBlocks: ["x² − 3x + 5 = 0"]
      },
      {
        stepName: "THINK",
        content: "Do we need to calculate α and β individually? No. The quadratic itself gives the sum and product of the roots. Those two relationships can be reused throughout the problem."
      },
      {
        stepName: "CONCEPT",
        content: "Because (x − α)(x − β) = x² − (α + β)x + αβ, comparison with x² − 3x + 5 gives the root sum and product.",
        mathBlocks: ["α + β = 3", "αβ = 5"]
      },
      {
        stepName: "SOLUTION",
        content: "(a) Start with the square identity and rearrange before substituting.",
        mathBlocks: ["α² + β² = (α + β)² − 2αβ = 3² − 2(5) = −1"]
      },
      {
        stepName: "SOLUTION",
        content: "(b) Combine the reciprocals into one fraction so that the known sum and product appear.",
        mathBlocks: ["1/α + 1/β = (α + β)/(αβ) = 3/5"]
      },
      {
        stepName: "SOLUTION",
        content: "(c) Simplify before substituting. The factor αβ cancels the denominators.",
        mathBlocks: ["αβ(1/α + 1/β) = α + β = 3"]
      },
      {
        stepName: "SOLUTION",
        content: "(d) Factor the common product αβ.",
        mathBlocks: ["α²β + αβ² = αβ(α + β) = 5(3) = 15"]
      },
      {
        stepName: "SOLUTION",
        content: "(e) Reuse the result from part (a) rather than starting again.",
        mathBlocks: ["α² − αβ + β² = (α² + β²) − αβ = −1 − 5 = −6"]
      },
      {
        stepName: "THINK",
        content: "(f) The ratios look more complicated, but expanding and combining them will reveal the same structures already in the toolbox."
      },
      {
        stepName: "SOLUTION",
        content: "Expand, then combine the ratio terms over a common denominator.",
        mathBlocks: ["(1 + α/β)(1 + β/α) = 2 + α/β + β/α", "α/β + β/α = (α² + β²)/(αβ) = −1/5", "Therefore the expression = 2 − 1/5 = 9/5"]
      },
      {
        stepName: "THINK",
        content: "(g) The cube expression can be reduced using the sum-of-cubes identity. Again, everything should collapse to α + β and αβ."
      },
      {
        stepName: "SOLUTION",
        content: "Apply α³ + β³ = (α + β)³ − 3αβ(α + β).",
        mathBlocks: ["α³ + β³ = (α + β)³ − 3αβ(α + β) = 3³ − 3(5)(3) = −18"]
      },
      {
        stepName: "INTERPRETATION",
        content: "The seven answers are not seven tricks. Each expression was transformed until it could be expressed using the same two pieces of information: α + β = 3 and αβ = 5."
      },
      {
        stepName: "CHECK",
        content: "Final answers: (a) −1, (b) 3/5, (c) 3, (d) 15, (e) −6, (f) 9/5, (g) −18. The main check is structural: every result was obtained without solving for the individual roots."
      }
    ]
  }
];
