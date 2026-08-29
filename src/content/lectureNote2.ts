export const comprehensiveLectureNotePart2 = `# 12. COMPREHENSIVE LECTURE NOTE (TEXTBOOK-GRADE REFERENCE)

---

## CHAPTER 2: SEEING MOTION — GRAPHS

---

### 2.1 Why Graphs Matter

A motion graph is a compact restatement of the definitions developed in Part 1. Rather than describing motion in words, a graph plots one kinematic quantity against time and lets its shape carry the physics.

Two geometric ideas do all of the work in this chapter:

- **Gradient** — the slope of a motion graph is always a rate of change.
- **Area** — the area between a motion graph and the time axis is always an accumulated quantity.

Every result in this chapter is a direct consequence of these two ideas applied to position–time, velocity–time and acceleration–time graphs.

---

### 2.2 Position–Time Graphs and the Meaning of Gradient

A position–time (\\(x\\)–\\(t\\)) graph plots position on the vertical axis against time on the horizontal axis.

\`\`\`interactive:position-time-gradient
Secant and Tangent Gradients on a Position–Time Graph
\`\`\`

> #### DEFINITION: Secant Gradient
> The **secant gradient** between two points on an \\(x\\)–\\(t\\) graph is the gradient of the straight line joining them:
>
> $$v_{\\text{avg}} = \\frac{\\Delta x}{\\Delta t} = \\frac{x(t_2) - x(t_1)}{t_2 - t_1}$$
>
> This is exactly the average velocity over the interval \\([t_1, t_2]\\), as defined in Part 1.

> #### DEFINITION: Tangent Gradient
> The **tangent gradient** at a single point on an \\(x\\)–\\(t\\) graph is the gradient of the line that just touches the curve at that point, without crossing it nearby. As the interval used to construct a secant line shrinks toward zero width, the secant line rotates and converges onto the tangent line:
>
> $$v(t) = \\lim_{\\Delta t \\to 0} \\frac{x(t+\\Delta t) - x(t)}{\\Delta t}$$
>
> This is the graphical picture behind Part 1's calculus definition of instantaneous velocity — the tangent gradient **is** the instantaneous velocity.

**Reading the shape of an \\(x\\)–\\(t\\) graph:**

| Graph shape | Physical meaning |
| :--- | :--- |
| Horizontal line | Constant position — the particle is at rest |
| Straight sloped line | Constant velocity (constant gradient) |
| Curve, increasingly steep | Increasing velocity — the particle is accelerating |
| Curve, decreasingly steep | Decreasing velocity |

---

### 2.3 Velocity–Time Graphs and the Meaning of Gradient

A velocity–time (\\(v\\)–\\(t\\)) graph plots velocity on the vertical axis against time on the horizontal axis. By identical reasoning to Section 2.2, the gradient of a \\(v\\)–\\(t\\) graph is acceleration:

$$a = \\frac{\\Delta v}{\\Delta t}$$

A horizontal \\(v\\)–\\(t\\) line therefore means zero acceleration (constant velocity), and a straight sloped \\(v\\)–\\(t\\) line means constant acceleration. Points above the time axis represent motion in the positive direction; points below represent motion in the negative direction; a crossing of the axis marks a momentary instant of rest and a possible reversal of direction — precisely the \\(v = 0\\), \\(a \\neq 0\\) case highlighted in Part 1, Section 1.7.

---

### 2.4 Area Under a Velocity–Time Graph

> #### DEFINITION: Area Under a \\(v\\)–\\(t\\) Graph
> The area between a \\(v\\)–\\(t\\) graph and the time axis, over an interval \\([t_1, t_2]\\), equals the **signed displacement** during that interval:
>
> $$\\Delta x = \\int_{t_1}^{t_2} v(t)\\,dt = \\text{(area above the axis)} - \\text{(area below the axis)}$$
>
> Area above the axis is counted as positive displacement; area below the axis is counted as negative displacement.

\`\`\`interactive:velocity-time-area
Area, Sign, and Reversal on a Velocity–Time Graph
\`\`\`

**Distance vs displacement, revisited graphically.** Whenever a \\(v\\)–\\(t\\) graph crosses the time axis, the particle reverses direction. To find total distance travelled, the motion must be split at each crossing, and the *magnitude* of the area on each side added:

$$d = \\sum \\left| \\text{area of each region between crossings} \\right|$$

This is the graphical restatement of Part 1's distinction between distance (always accumulating, always non-negative) and displacement (a signed net change). If a \\(v\\)–\\(t\\) graph never crosses the axis over the interval considered, the signed area and the sum of magnitudes coincide, and distance equals the magnitude of displacement.

---

### 2.5 Acceleration–Time Graphs

An acceleration–time (\\(a\\)–\\(t\\)) graph plots acceleration against time. By the same area argument as Section 2.4, the area under an \\(a\\)–\\(t\\) graph equals the change in velocity over that interval:

$$\\Delta v = \\int_{t_1}^{t_2} a(t)\\,dt$$

A horizontal \\(a\\)–\\(t\\) line represents constant acceleration — the case this chapter's graphical derivation (Section 2.6) is built around. A non-horizontal \\(a\\)–\\(t\\) graph represents variable acceleration, which is treated formally using calculus in a later part of this series.

---

### 2.6 Deriving the Equations of Motion Graphically

For constant acceleration, a \\(v\\)–\\(t\\) graph is a straight line rising from an initial velocity \\(u\\) at \\(t=0\\) to a velocity \\(v\\) at time \\(t\\).

\`\`\`interactive:suvat-derivation
Graphical Derivation: v = u + at, s = ut + ½at², v² = u² + 2as
\`\`\`

**Step 1 — Read the gradient.** The gradient of the line is the acceleration:

$$a = \\frac{v - u}{t}$$

Rearranging directly gives the first equation of motion:

$$\\boxed{v = u + at}$$

**Step 2 — Read the area.** The region under the line, from \\(0\\) to \\(t\\), is a trapezium with parallel sides \\(u\\) and \\(v\\) and width \\(t\\). Its area is the displacement:

$$\\boxed{s = \\tfrac12(u+v)t}$$

**Step 3 — Combine gradient and area.** Substituting \\(v = u+at\\) (Step 1) into the area result (Step 2):

$$s = \\tfrac12\\big(u + (u+at)\\big)t = \\tfrac12(2u+at)t$$

$$\\boxed{s = ut + \\tfrac12at^2}$$

**Step 4 — Eliminate time.** Solving \\(v = u+at\\) for \\(t\\) and substituting into \\(s = \\tfrac12(u+v)t\\) eliminates \\(t\\) entirely:

$$\\boxed{v^2 = u^2 + 2as}$$

Every equation of motion introduced formally in Part 3 is therefore not a separate fact to memorise, but a direct algebraic consequence of reading the gradient and the area of one straight-line \\(v\\)–\\(t\\) graph.

---

### 2.7 Summary Table

| Graph | Gradient means | Area means |
| :--- | :--- | :--- |
| \\(x\\)–\\(t\\) | Velocity (secant = average, tangent = instantaneous) | *(not used in this course)* |
| \\(v\\)–\\(t\\) | Acceleration | Displacement (signed); distance uses \\(\\sum \\lvert \\text{area} \\rvert\\) |
| \\(a\\)–\\(t\\) | *(rate of change of acceleration — beyond this course)* | Change in velocity, \\(\\Delta v\\) |

### 2.8 Bridge to Part 3

Part 3 takes the four boxed equations derived in Section 2.6 — \\(v=u+at\\), \\(s=\\tfrac12(u+v)t\\), \\(s=ut+\\tfrac12at^2\\), \\(v^2=u^2+2as\\) — and builds a disciplined framework for deciding, in any given problem, which one of them to use.
`;
