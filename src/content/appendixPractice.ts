import type { PracticeProblem } from "../types/course";

export const appendixPracticeProblems: PracticeProblem[] = [
  {
    id: "APP-001",
    title: "Square and Reciprocal Transfer",
    provenance: "DHD NEXUS ORIGINAL",
    problem: "If α and β are roots of x² − 7x + 10 = 0, find α² + β² and 1/α + 1/β.",
    solution: "α + β = 7 and αβ = 10. Therefore α² + β² = 49 − 20 = 29, while 1/α + 1/β = 7/10.",
    reasoning: "Extract the root sum and product first, then transform each target expression."
  },
  {
    id: "APP-002",
    title: "Factor and Reuse",
    provenance: "DHD NEXUS ORIGINAL",
    problem: "If α + β = 9 and αβ = 14, find α²β + αβ² and α² − αβ + β².",
    solution: "α²β + αβ² = αβ(α + β) = 126. Also α² + β² = 81 − 28 = 53, so α² − αβ + β² = 53 − 14 = 39.",
    reasoning: "Factor the first expression and reuse the square identity for the second."
  },
  {
    id: "APP-003",
    title: "Rational Root Expression",
    provenance: "DHD NEXUS ORIGINAL",
    problem: "If α and β are roots of x² − 5x + 6 = 0, find (1 + α/β)(1 + β/α).",
    solution: "α + β = 5, αβ = 6, α² + β² = 25 − 12 = 13. Hence the expression is 2 + 13/6 = 25/6.",
    reasoning: "Expand first, then combine α/β + β/α into (α² + β²)/(αβ)."
  },
  {
    id: "APP-004",
    title: "Generalise the Cube Identity",
    provenance: "DHD NEXUS ORIGINAL",
    problem: "Show that if S = α + β and P = αβ, then α³ + β³ = S³ − 3PS. Then use the formula when S = 6 and P = 4.",
    solution: "From (α + β)³ = α³ + β³ + 3αβ(α + β), rearrange to obtain α³ + β³ = S³ − 3PS. For S = 6 and P = 4, the result is 216 − 72 = 144.",
    reasoning: "This converts the worked example into a reusable general rule."
  }
];
