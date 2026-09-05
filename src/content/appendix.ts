import type { PartContent } from "../types/course";

export const appendixContent: PartContent = {
  title: "Relations Between the Roots of a Quadratic Equation",
  subtitle: "Appendix — From Root Relationships to Algebraic Structure",
  sections: [
    {
      id: "appendix-sec-01",
      number: 1,
      title: "The Problem Before the Formula",
      subtitle: "Seven expressions, one underlying structure",
      content: [
        "Suppose α and β are roots of x² − 3x + 5 = 0. You are asked to determine several expressions involving α and β. The important observation is that none of the questions asks you to find α and β individually.",
        "The pedagogical strategy is therefore to look for information about the roots that the quadratic equation gives us directly, then transform each target expression until it can be written using that information."
      ],
      lecturerCue: {
        narrationPrompt: "Do not begin by solving the quadratic. Ask students what information about the roots is already encoded in the equation.",
        keyPoints: ["The individual roots are not needed", "The quadratic already encodes their sum and product", "Transform the target before substituting"],
        timeGuidanceMin: 1
      }
    },
    {
      id: "appendix-sec-02",
      number: 2,
      title: "Discovering the Root Relationships",
      subtitle: "Build the toolbox once",
      content: [
        "If α and β are roots of x² − 3x + 5 = 0, then the quadratic can be written as (x − α)(x − β) = 0. Expanding gives x² − (α + β)x + αβ = 0.",
        "Comparing coefficients with x² − 3x + 5 = 0 gives α + β = 3 and αβ = 5. These two relationships are the reusable information for the entire example."
      ],
      equations: ["α + β = 3", "αβ = 5"],
      lecturerCue: {
        narrationPrompt: "Write the factorised form and compare coefficients slowly. Make students say the two root relationships aloud.",
        keyPoints: ["α + β = 3", "αβ = 5", "These are more useful than calculating α and β"],
        timeGuidanceMin: 1
      }
    },
    {
      id: "appendix-sec-03",
      number: 3,
      title: "The Known Toolbox",
      subtitle: "Name the reusable quantities",
      content: [
        "For the rest of the problem, think of S = α + β = 3 and P = αβ = 5 as a small toolbox. Each new expression should be transformed until it can be written in terms of S and P.",
        "This creates an important examination habit: transform first, substitute second."
      ],
      equations: ["S = α + β = 3", "P = αβ = 5"],
      lecturerCue: {
        narrationPrompt: "Introduce S and P as a mental compression of the information already obtained.",
        keyPoints: ["S represents the root sum", "P represents the root product", "Transform first; substitute second"],
        misconceptionAlert: "Students often start calculating α and β even though the requested expression can be obtained directly from S and P.",
        timeGuidanceMin: 1
      }
    },
    {
      id: "appendix-sec-04",
      number: 4,
      title: "Worked Example A: Squares of the Roots",
      subtitle: "Recognise a standard identity",
      content: [
        "For α² + β², start from (α + β)² = α² + 2αβ + β². Rearranging gives α² + β² = (α + β)² − 2αβ.",
        "Now substitute S = 3 and P = 5: α² + β² = 9 − 10 = −1."
      ],
      equations: ["α² + β² = (α + β)² − 2αβ = 3² − 2(5) = −1"],
      lecturerCue: {
        narrationPrompt: "Emphasise that the identity is the transformation step; only after that do we substitute the known root relationships.",
        keyPoints: ["Expand the square", "Rearrange", "Substitute only at the end"],
        misconceptionAlert: "(α + β)² is not α² + β²; the cross-term 2αβ is essential.",
        timeGuidanceMin: 1
      }
    },
    {
      id: "appendix-sec-05",
      number: 5,
      title: "Worked Example B: Reciprocals",
      subtitle: "Turn fractions into the known toolbox",
      content: [
        "For 1/α + 1/β, use a common denominator: 1/α + 1/β = (α + β)/(αβ). Both quantities are already known.",
        "Therefore 1/α + 1/β = 3/5."
      ],
      equations: ["1/α + 1/β = (α + β)/(αβ) = 3/5"],
      lecturerCue: {
        narrationPrompt: "Ask what appears in the numerator and denominator after combining the fractions. Students should recognise both immediately.",
        keyPoints: ["Combine before substituting", "Numerator becomes α + β", "Denominator becomes αβ"],
        misconceptionAlert: "1/α + 1/β is not 1/(α + β).",
        timeGuidanceMin: 1
      }
    },
    {
      id: "appendix-sec-06",
      number: 6,
      title: "Worked Examples C–E: Reuse and Factorisation",
      subtitle: "The same toolbox keeps solving new forms",
      content: [
        "For αβ(1/α + 1/β), distribute αβ or simplify first: αβ/α + αβ/β = β + α = α + β = 3.",
        "For α²β + αβ², factor αβ: αβ(α + β) = 5(3) = 15.",
        "For α² − αβ + β², first reuse α² + β² = −1, then subtract αβ = 5, giving −6."
      ],
      equations: ["αβ(1/α + 1/β) = α + β = 3", "α²β + αβ² = αβ(α + β) = 15", "α² − αβ + β² = (α² + β²) − αβ = −6"],
      lecturerCue: {
        narrationPrompt: "Pause after each expression and ask students which known structure they can expose before doing arithmetic.",
        keyPoints: ["Cancel and simplify", "Factor common αβ", "Reuse an earlier result"],
        timeGuidanceMin: 2
      }
    },
    {
      id: "appendix-sec-07",
      number: 7,
      title: "Worked Example F: The Synthesis Challenge",
      subtitle: "Do not calculate the ratios separately",
      content: [
        "For (1 + α/β)(1 + β/α), expand to obtain 2 + α/β + β/α. Combine the ratio terms: α/β + β/α = (α² + β²)/(αβ).",
        "From the earlier result, α² + β² = −1 and αβ = 5. Therefore the ratio sum is −1/5, and the complete expression is 2 − 1/5 = 9/5."
      ],
      equations: ["(1 + α/β)(1 + β/α) = 2 + (α² + β²)/(αβ) = 2 − 1/5 = 9/5"],
      lecturerCue: {
        narrationPrompt: "Treat this as the synthesis checkpoint. Ask students to identify which earlier result can be reused before revealing the final transformation.",
        keyPoints: ["Expand first", "Combine reciprocal ratios", "Reuse α² + β² from Example A"],
        timeGuidanceMin: 2
      }
    },
    {
      id: "appendix-sec-08",
      number: 8,
      title: "Worked Example G: Cubes of the Roots",
      subtitle: "Extend the same reasoning pattern",
      content: [
        "Use the identity α³ + β³ = (α + β)³ − 3αβ(α + β). Substituting α + β = 3 and αβ = 5 gives 27 − 45 = −18.",
        "The important lesson is not memorising seven answers. It is recognising that higher powers can also be reduced to the same two root relationships."
      ],
      equations: ["α³ + β³ = (α + β)³ − 3αβ(α + β) = 27 − 45 = −18"],
      lecturerCue: {
        narrationPrompt: "Connect the cube identity back to the same S and P toolbox. Make the general pattern explicit.",
        keyPoints: ["Use a structural identity", "Everything reduces to S and P", "The method scales beyond the original seven questions"],
        timeGuidanceMin: 1
      }
    },
    {
      id: "appendix-sec-09",
      number: 9,
      title: "The Examination Strategy",
      subtitle: "A transferable routine",
      content: [
        "First extract α + β and αβ. Second, write the target expression exactly as given. Third, identify an algebraic identity, factorisation, common denominator, or simplification that exposes the known relationships. Fourth, substitute the numerical values only after the transformation is complete.",
        "Finally, check the result and ask whether the expression could have been obtained by reusing a result from an earlier subpart. This prevents unnecessary calculation and makes a long-looking question manageable."
      ],
      lecturerCue: {
        narrationPrompt: "Close by turning the example into a repeatable examination routine students can apply to unfamiliar expressions.",
        keyPoints: ["Extract sum and product", "Transform the target", "Substitute last", "Reuse previous results", "Check"],
        timeGuidanceMin: 1
      }
    }
  ],
  checkpoints: [
    {
      id: "appendix-cp-01",
      title: "Root Toolbox",
      provenance: "DHD NEXUS ORIGINAL",
      provenanceDetails: "Pedagogical checkpoint for the Appendix",
      prompt: "If α and β are roots of x² − 7x + 10 = 0, what are α + β and αβ?",
      pauseSeconds: 5,
      tasks: [
        {
          id: "appendix-cp-01-task",
          label: "MULTIPLE CHOICE",
          prompt: "Choose the correct root relationships.",
          options: ["(A) α + β = −7, αβ = 10", "(B) α + β = 7, αβ = 10", "(C) α + β = 10, αβ = 7", "(D) α + β = 7, αβ = −10"],
          correctAnswer: "(B) α + β = 7, αβ = 10",
          reasoning: "For x² + bx + c = 0, the sum of the roots is −b and the product is c."
        }
      ]
    },
    {
      id: "appendix-cp-02",
      title: "Identity Check",
      provenance: "DHD NEXUS ORIGINAL",
      prompt: "If α + β = 8 and αβ = 12, find α² + β².",
      pauseSeconds: 5,
      tasks: [
        {
          id: "appendix-cp-02-task",
          label: "SHORT ANSWER",
          prompt: "Use an identity rather than finding α and β.",
          correctAnswer: "40",
          reasoning: "α² + β² = (α + β)² − 2αβ = 64 − 24 = 40."
        }
      ]
    },
    {
      id: "appendix-cp-03",
      title: "Transfer to Cubes",
      provenance: "DHD NEXUS ORIGINAL",
      prompt: "If α + β = 6 and αβ = 4, find α³ + β³.",
      pauseSeconds: 5,
      tasks: [
        {
          id: "appendix-cp-03-task",
          label: "SHORT ANSWER",
          prompt: "Apply the cube identity.",
          correctAnswer: "144",
          reasoning: "α³ + β³ = (α + β)³ − 3αβ(α + β) = 216 − 72 = 144."
        }
      ]
    }
  ]
};
