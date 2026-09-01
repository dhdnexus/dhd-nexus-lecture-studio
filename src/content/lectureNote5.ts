export const comprehensiveLectureNotePart5 = `# 12. COMPREHENSIVE LECTURE NOTE (TEXTBOOK-GRADE REFERENCE)

---

## CHAPTER 5: VARIABLE ACCELERATION

---

### 5.1 What Changes, and What Does Not

Part 4 derived \\(v=u+at\\), \\(s=ut+\\tfrac12at^2\\) and \\(v^2=u^2+2as\\) from exactly two definitions, \\(a=dv/dt\\) and \\(v=ds/dt\\), using one assumption throughout: acceleration is constant. That assumption is what allowed \\(a\\) to be factored outside every integral.

**Nothing about the two definitions changes when acceleration varies.** What changes is that \\(a\\) can no longer be pulled outside an integral — it must be integrated as whatever function it actually is. The entire content of this chapter is choosing the correct integration variable and method once that simplification is no longer available.

---

### 5.2 Why SUVAT Stops Being Universal

\\(s=ut+\\tfrac12at^2\\) is the specific antiderivative of a *constant*. If acceleration is instead \\(a(t)\\) or \\(a(s)\\), that antiderivative is simply the wrong function — applying it produces a numerically incorrect answer, not merely an inexact one.

> #### THE CENTRAL HABIT
> Before using any equation, ask: **is acceleration actually constant over this interval?** If yes, Part 3's SUVAT framework applies directly. If no, the specific mathematical form the acceleration takes determines the method — never assume from the presence of a numerical acceleration value alone.

---

### 5.3 Case A — Acceleration Given as a Function of Time

When \\(a(t)\\) is known, start from the same relation as always:

$$a = \\frac{dv}{dt} \\quad \\Longrightarrow \\quad dv = a(t)\\,dt$$

Integrating both sides, with the initial condition \\(v=u\\) at \\(t=0\\):

$$\\int_u^v dv = \\int_0^t a(t')\\,dt'$$

gives \\(v(t)\\) directly — but the right-hand side must now be evaluated as the actual antiderivative of \\(a(t)\\), not simplified by pulling a constant outside.

If displacement is also required, apply the same process one level up: \\(v=ds/dt\\) gives \\(ds=v(t)\\,dt\\), integrated with respect to time using \\(s=s_0\\) at \\(t=0\\) to obtain \\(s(t)\\).

\`\`\`interactive:method-selection
Decision Scaffold: Given Form → Relation → Integration Variable
\`\`\`

---

### 5.4 Case B — Velocity Given as a Function of Time

If \\(v(t)\\) is supplied directly, only one integration is required:

$$v = \\frac{ds}{dt} \\quad \\Longrightarrow \\quad ds = v(t)\\,dt \\quad \\Longrightarrow \\quad s(t) = \\int_0^t v(t')\\,dt' + s_0$$

If acceleration is also required, it is obtained the *other* way — by **differentiating** \\(v(t)\\), since \\(a=dv/dt\\) always holds. This case is a deliberate reminder that the calculus operation required (differentiation or integration) depends on what is given and what is asked for, not on a fixed sequence to repeat automatically.

---

### 5.5 Case C — Acceleration Given as a Function of Position

When acceleration is given as \\(a(s)\\), it cannot be integrated with respect to \\(t\\) directly, because it is not expressed as a function of \\(t\\) at all. This is exactly the situation the Part 4 chain-rule identity was built for:

$$a = v\\frac{dv}{ds}$$

Substituting the known \\(a(s)\\) gives \\(v\\,dv = a(s)\\,ds\\) — an equation relating velocity and position only. Integrating the left side over velocity (from \\(u\\) to \\(v\\)) and the right side over position (from \\(0\\) to \\(s\\)) produces \\(v\\) as a function of \\(s\\), **without time ever appearing in the calculation**.

> #### WHY THIS MATTERS
> A student who tries to integrate \\(a(s)\\) with respect to \\(t\\) is effectively treating position as though it were time — a common and serious error. The chain-rule substitution exists specifically to prevent it.

---

### 5.6 The Method-Selection Decision Table

| Given information | Starting relation | Integrate with respect to |
| :--- | :--- | :--- |
| \\(a(t)\\) | \\(a = dv/dt\\) | \\(t\\) (then \\(v = ds/dt\\) with respect to \\(t\\) again, if \\(s\\) is required) |
| \\(v(t)\\) | \\(v = ds/dt\\) | \\(t\\) |
| \\(a(s)\\) | \\(a = v\\,dv/ds\\) | \\(s\\) |

> **The mathematical form of the given information is the clue to the solution method** — this is the direct extension, into calculus, of Part 3's known/unknown equation-selection framework.

---

### 5.7 Physical Meaning of the Constant of Integration

Every integration in this chapter produces an arbitrary constant, which is fixed using a stated initial or boundary condition (e.g. \\(v=u\\) at \\(t=0\\), or \\(s=0\\) at \\(t=0\\)). Physically, this constant represents the fact that the differential equation alone describes only *how* a quantity changes, not *where it starts* — the initial condition supplies the missing physical information needed to pin down one specific motion out of an entire family of mathematically valid ones.

---

### 5.8 Common Student Mistakes

1. **Using SUVAT because a numerical acceleration appears in the problem**, without checking whether it is constant.
2. **Integrating \\(a(s)\\) with respect to \\(t\\)** instead of using \\(a=v\\,dv/ds\\) and integrating with respect to \\(s\\).
3. **Differentiating instead of integrating** (or vice versa) — always identify what is given and what is required before choosing the calculus operation.
4. **Forgetting the initial condition**, leaving an unresolved constant of integration in the final answer.

---

### 5.9 Summary

- Acceleration constant → Part 3's SUVAT equations apply directly.
- \\(a(t)\\) given → integrate \\(a=dv/dt\\) with respect to \\(t\\); integrate again for \\(s(t)\\) if needed.
- \\(v(t)\\) given → integrate \\(v=ds/dt\\) directly with respect to \\(t\\).
- \\(a(s)\\) given → use \\(a=v\\,dv/ds\\), separate variables, and integrate with respect to \\(s\\).

### 5.10 Bridge to Part 6

Part 6 does not introduce new calculus. It combines sign reasoning (Part 1), equation selection (Part 3), calculus derivation (Part 4) and method selection under variable acceleration (this chapter) into multi-stage motion problems, where different parts of a single journey may each require a different one of these tools.
`;
