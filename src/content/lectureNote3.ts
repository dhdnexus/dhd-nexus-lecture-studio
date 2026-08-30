export const comprehensiveLectureNotePart3 = `# 12. COMPREHENSIVE LECTURE NOTE (TEXTBOOK-GRADE REFERENCE)

---

## CHAPTER 3: SUVAT — FROM DERIVATION TO EQUATION SELECTION

---

### 3.1 What SUVAT Represents

Part 2 derived four results directly from the gradient and area of a single straight-line velocity–time graph:

$$v = u + at \\qquad s = \\tfrac12(u+v)t \\qquad s = ut + \\tfrac12at^2 \\qquad v^2 = u^2 + 2as$$

These are collectively called the **SUVAT equations**, after the five quantities they connect:

| Symbol | Meaning |
| :--- | :--- |
| \\(s\\) | Displacement — the signed net change in position over the interval |
| \\(u\\) | Initial velocity — velocity at the start of the interval |
| \\(v\\) | Final velocity — velocity at the end of the interval |
| \\(a\\) | Acceleration — assumed **constant** over the interval |
| \\(t\\) | Duration of the interval |

> #### CONDITION FOR VALIDITY
> Every SUVAT equation assumes acceleration is constant over the interval considered. If acceleration changes during the interval, the interval must be split into constant-acceleration stages before SUVAT can be applied to each stage separately. This condition is revisited more formally later in the series.

Part 3 introduces no new physics. Its entire content is the disciplined skill of choosing which of these four equations to use, and being able to justify that choice.

---

### 3.2 Known and Unknown

Before selecting an equation, list all five SUVAT quantities and classify each as **known**, **unknown**, or **not relevant** to the question being asked.

A typical problem supplies three known quantities and asks for one of the remaining two — leaving one quantity neither given nor asked for. Writing this table out explicitly, before touching any formula, is the single habit that prevents most equation-selection mistakes.

---

### 3.3 The Equation-Selection Framework

\`\`\`interactive:equation-selection
Interactive Scaffold: Known/Unknown → Candidate Equations → Best Equation
\`\`\`

Each SUVAT equation involves exactly **four** of the five quantities — each one **excludes exactly one**:

| Equation | Excludes |
| :--- | :--- |
| \\(v = u+at\\) | \\(s\\) |
| \\(s = \\tfrac12(u+v)t\\) | \\(a\\) |
| \\(s = ut+\\tfrac12at^2\\) | \\(v\\) |
| \\(v^2 = u^2+2as\\) | \\(t\\) |

> #### THE SELECTION RULE
> An equation is **directly usable** when exactly **one** of its four quantities is unknown — it then solves directly for that one unknown.
>
> An equation with **two or more unknowns** among its four quantities cannot be used yet, no matter how many of its other terms are numbers you already know from the problem.

This rule directly overturns a common but incorrect shortcut: *"use the equation that has the most known numbers in it."* An equation can contain several familiar numbers and still be unusable, if two of its four quantities remain unknown.

---

### 3.4 A Worked Illustration of the Framework

Consider a problem giving \\(u\\), \\(s\\) and \\(t\\), and asking for both \\(a\\) and \\(v\\).

- \\(v=u+at\\): unknowns \\(v, a\\) — **two unknowns, not usable yet**.
- \\(s=\\tfrac12(u+v)t\\): unknown \\(v\\) only — **usable**, solves for \\(v\\) directly.
- \\(s=ut+\\tfrac12at^2\\): unknown \\(a\\) only — **usable**, solves for \\(a\\) directly.
- \\(v^2=u^2+2as\\): unknowns \\(v, a\\) — **two unknowns, not usable yet**.

Both unknowns can therefore be found independently, from two different equations, without solving for one before the other. This is more robust than chaining through an intermediate result, since an arithmetic slip in one calculation cannot propagate into the other. This exact structure is the basis of this episode's principal worked example (a bus travelling between two road markers).

---

### 3.5 Sign Conventions, Revisited

Part 1 established that whether an object is speeding up or slowing down depends on comparing the **sign of velocity with the sign of acceleration**, never on the sign of acceleration in isolation:

$$\\operatorname{sgn}(v) = \\operatorname{sgn}(a) \\implies \\text{speeding up} \\qquad \\operatorname{sgn}(v) \\neq \\operatorname{sgn}(a) \\implies \\text{slowing down}$$

**Braking is the most common place this is misapplied.** A car moving in the positive direction with a negative (braking) acceleration is slowing down — but only because \\(v\\) and \\(a\\) currently have opposite signs. If that same braking acceleration continued to act after the car momentarily stopped, the car would reverse direction. Once moving in the negative direction, \\(v\\) and \\(a\\) would share the same sign again, and — by the identical rule — the car would now be **speeding up**, in reverse. The acceleration's sign never changed; only the outcome did, because the velocity's sign changed.

This episode's braking worked example applies SUVAT and this sign rule together, since real examination questions rarely test them in isolation.

---

### 3.6 The Equation-Selection Trap

A cyclist passes point A at \\(u=4\\) m/s and point B, 50 m further along, \\(t=5\\) s later. Find her acceleration and her velocity at B.

Known: \\(u=4\\) m/s, \\(s=50\\) m, \\(t=5\\) s. A student may reach immediately for

$$v^2 = u^2 + 2as$$

because it contains \\(u\\) and \\(s\\), both known. But this equation also contains \\(v\\) **and** \\(a\\) — both unknown. Two unknowns means it is not usable yet, regardless of how many of its terms are recognisable numbers.

The correct starting equation is \\(s=ut+\\tfrac12at^2\\), which has only \\(a\\) unknown. Once \\(a\\) is found, \\(v=u+at\\) gives the final velocity, and \\(v^2=u^2+2as\\) can then be used only to **check** the result — not to start it.

> #### THE CENTRAL LESSON
> Count the number of **unknowns** in an equation, not the number of knowns. An equation is only a candidate starting point when exactly one of its four quantities is still unknown.

---

### 3.7 Summary

- SUVAT connects five quantities — \\(s, u, v, a, t\\) — through four equations, each excluding exactly one quantity.
- Build a known/unknown table before choosing an equation.
- An equation is directly usable only when exactly one of its four quantities is unknown.
- Sign reasoning from Part 1 remains essential: compare the signs of \\(v\\) and \\(a\\) together, never read the sign of \\(a\\) alone.

### 3.8 Bridge to Part 4

Part 4 returns to these same four equations and shows that they are not merely consequences of a graph, but consequences of calculus — derived directly from \\(a = dv/dt\\) and \\(v = ds/dt\\) by integration.
`;
