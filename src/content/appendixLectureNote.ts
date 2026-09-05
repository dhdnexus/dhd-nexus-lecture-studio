export const appendixLectureNote = `# Appendix: Relations Between the Roots of a Quadratic Equation

## Purpose
This Appendix develops a transferable method for expressions involving the roots of a quadratic. The emphasis is on algebraic structure and examination reasoning rather than solving the roots individually.

## 1. Root sum and product
If α and β are roots of

x² + bx + c = 0,

then

α + β = −b,    αβ = c.

For x² − 3x + 5 = 0,

α + β = 3,    αβ = 5.

Call these quantities S and P:

S = α + β,    P = αβ.

## 2. Transform before substituting
The central examination rule is: **transform first, substitute second.** Look at the target expression and expose S and P using identities, factorisation, cancellation, or common denominators.

## 3. Squares
Using (α + β)² = α² + 2αβ + β²,

α² + β² = S² − 2P.

For S = 3 and P = 5, this gives −1.

## 4. Reciprocals

1/α + 1/β = (α + β)/(αβ) = S/P.

For the example, this is 3/5.

## 5. Factorisation and reuse

α²β + αβ² = αβ(α + β) = PS.

Also,

α² − αβ + β² = (α² + β²) − αβ.

An earlier result should be reused whenever possible.

## 6. Ratio synthesis

(1 + α/β)(1 + β/α)
= 2 + α/β + β/α
= 2 + (α² + β²)/(αβ).

Since α² + β² = S² − 2P, the expression is

2 + (S² − 2P)/P.

For S = 3 and P = 5, the answer is 9/5.

## 7. Cubes
The sum-of-cubes identity gives

α³ + β³ = (α + β)³ − 3αβ(α + β)
= S³ − 3PS.

For S = 3 and P = 5, the answer is −18.

## 8. The general strategy
1. Extract α + β and αβ.
2. Name them S and P if helpful.
3. Write the target expression exactly.
4. Transform it using an identity, factorisation, cancellation, or common denominator.
5. Express it in S and P.
6. Substitute numerical values.
7. Check the result and reuse earlier sub-results.

## 9. Common misconceptions
- Solving for α and β is usually unnecessary.
- (α + β)² is not α² + β².
- 1/α + 1/β is not 1/(α + β).
- Do not calculate α/β and β/α separately when they can be combined.
- Do not ignore an earlier result that can simplify a later part.

## 10. Key takeaway
A long list of root-expression questions can often be reduced to a small reusable toolbox. The goal is not to memorise seven answers; it is to recognise structure and transform unfamiliar expressions into known quantities.
`;
