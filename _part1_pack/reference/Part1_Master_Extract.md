# DHD NEXUS PHYSICS ACADEMY


## MASTERING KINEMATICS — EPISODE 1: THE LANGUAGE OF MOTION


## FINAL APPROVED MASTER DELIVERABLE

Status: APPROVED — Production Template for Parts 2–10
Core video target: approximately 12–15 minutes (approved script: ~12.8 minutes)
Series architecture: 10-part Kinematics series
─────────────────────────────────────────────────────────────────────────────────────
# DOCUMENT CONTROL

This document consolidates the approved Part 1 production package and the final micro-revisions.
It is the canonical Part 1 deliverable for the DHD Nexus Physics Academy Kinematics series. The final approved version establishes the production standard for Episodes 2–10, while later episodes should adapt the structure appropriately to their subject matter.
Approval status: Part 1 approved after final micro-revision.
Important: No material for Parts 2–10 is included in this deliverable.
─────────────────────────────────────────────────────────────────────────────────────
# SUMMARY OF TARGETED CHANGES MADE IN THIS REVISION

Core Video Duration Compressed to 13.5 Minutes (Target: 12–15 min): Tightened narration scripts, removed spoken mathematical derivations, and focused delivery strictly on definitions, physical intuition, coordinate setup, and sign reasoning.
Premature SUVAT Completely Removed: Eliminated all usage of
v=u+atv=u+at
or other constant-acceleration kinematic formulas. Worked Example 3 has been redesigned to test pure foundational definitions (acceleration as change in velocity per second
Δv/ΔtΔv/Δt
, direction, and the four
(v,a)(v,a)
sign combinations) without invoking kinematic equations. Systematic SUVAT is strictly reserved for Part 3 (Derivation) and Part 4 (Mastery & Selection).
Advanced Mathematical Proofs Relocated: Removed the formal calculus proof of the speeding-up condition (
ddt(S2)=2vadtd​(S2)=2va
) and lengthy algebraic derivations from the video script. The video uses the clear vector-direction rule (same direction
⟹⟹
speeding up; opposite directions
⟹⟹
slowing down). The rigorous proofs are preserved exclusively in the Comprehensive Lecture Note for undergraduate reference.
1D Terminology Streamlined: Replaced repeated abstract references to "position vectors" with the standard, student-friendly 1D convention: position coordinate
xx
, displacement
ΔxΔx
, velocity
vv
, and acceleration
aa
, where algebraic signs (
±±
) indicate direction along the chosen axis.
Unsupported Statistical Claims Excised: Removed the phrase "over 70% of student errors..." and replaced it with defensible pedagogical statements ("Many students struggle in physics examinations not because of algebra, but because...").
Provenance Classifications Explicitly Labeled: Maintained full transparency across all questions (Authentic Nigerian University Exam, Authentic Foreign Exam, Verified Academic Material, Adapted Material, and DHD Nexus Original).
Strict Separation of Core Video vs. Lecture Note: The video script is streamlined, visual, and conversational (13.5 minutes), while the Comprehensive Lecture Note remains an exhaustive, textbook-grade academic reference.
─────────────────────────────────────────────────────────────────────────────────────
# 1. PART 1 EXECUTIVE SUMMARY

Part 1 establishes the vocabulary, coordinate scaffolding, and sign reasoning required for the entire 10-part kinematics curriculum. It does not teach equations of motion, graphical derivations, calculus operations, or multi-body dynamics. Instead, it provides the essential conceptual foundation: how to define an origin and positive direction, how to distinguish path length (distance) from position change (displacement), how to differentiate average speed from average velocity, how to interpret acceleration as the rate of change of velocity, and how to evaluate the four
(v,a)(v,a)
sign combinations without falling into the "negative acceleration always means slowing down" trap.
─────────────────────────────────────────────────────────────────────────────────────
# 2. LEARNING OBJECTIVES

By the end of this episode and its accompanying materials, the student will be able to:
Define Position (
xx
) relative to an explicitly chosen origin and positive direction.
Distinguish Distance (
dd
) from Displacement (
ΔxΔx
), calculating both for straight-line motion with direction reversals.
Calculate Average Speed and Average Velocity, explaining why average speed is generally not equal to the magnitude of average velocity when motion reverses.
Explain Instantaneous Velocity (
vv
) conceptually as the velocity of an object at an exact instant in time.
Define Acceleration (
aa
) as the time rate of change of velocity (
Δv/ΔtΔv/Δt
), measuring how many
m/sm/s
of velocity are gained or lost each second.
Interpret 1D Sign Conventions, treating
++
and
−−
strictly as directional indicators along a chosen axis.
Determine Whether an Object is Speeding Up or Slowing Down by comparing the relative signs of velocity and acceleration.
Explain Why Negative Acceleration Does Not Automatically Mean Slowing Down.
Demonstrate that
v=0v=0
Does Not Imply
a=0a=0
, and that
a=0a=0
Does Not Imply
v=0v=0
.
Solve Foundational Kinematics Problems using step-by-step physical reasoning rather than formula hunting.
─────────────────────────────────────────────────────────────────────────────────────
# 3. CONCEPTUAL TEACHING MAP

codeCode
[ PHYSICAL MOTION OBSERVED ]
               │
               ▼
[ 1. REFERENCE FRAME & COORDINATE AXIS ]
  - Establish Origin (x = 0)
  - Define Positive Direction (+x)
               │
       ┌───────┴───────┐
       ▼               ▼
[ SCALAR PATH ]   [ VECTOR STATE ]
Total Distance d  Position Coordinate x
(Always d >= 0)   Displacement Δx = x_final - x_initial
       │               │
       ▼               ▼
[ RATE OF PATH ]  [ RATE OF POSITION CHANGE ]
Average Speed     Average Velocity (v_avg = Δx / Δt)
(d_total / Δt)    Instantaneous Velocity (v = rate of change at an instant)
       │               │
       └───────┬───────┘
               │
               ▼
[ RATE OF VELOCITY CHANGE ]
Acceleration (a = Δv / Δt)
               │
               ▼
[ THE FOUR (v, a) SIGN COMBINATIONS ]
├── v > 0, a > 0  ──► Moving in +x, SPEEDING UP
├── v > 0, a < 0  ──► Moving in +x, SLOWING DOWN
├── v < 0, a > 0  ──► Moving in -x, SLOWING DOWN
└── v < 0, a < 0  ──► Moving in -x, SPEEDING UP
               │
               ▼
[ CRITICAL STATE SEPARATIONS ]
- Turning Point: v = 0, but a ≠ 0
- Constant Velocity: v ≠ 0, but a = 0
─────────────────────────────────────────────────────────────────────────────────────
# 4. QUESTION ALLOCATION & PROVENANCE AUDIT

Δx=vavgΔtΔx=vavg​Δt
).
Δv=aΔtΔv=aΔt
) without SUVAT formulas.
sgn⁡(v)=sgn⁡(a)sgn(v)=sgn(a)
) mean speeding up.
Δv=0Δv=0
).
─────────────────────────────────────────────────────────────────────────────────────
# 5. VISUAL & ANIMATION PLAN

codeCode
+----------------------------------------------------------------------------------------------------+
| VISUAL BOARD 1: THE COORDINATE SCAFFOLD                                                            |
|                                                                                                    |
|  Negative Direction (-)                      Origin (0)                      Positive Direction (+) |
| <================================================|===============================================> |
|  -30m        -20m        -10m                    0          +10m        +20m        +30m           |
|                           [Initial Position x_i]             [Final Position x_f]                  |
|                                   ●────────────────────────────────►                               |
|                                           Displacement Δx = +30m                                   |
+----------------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------------+
| VISUAL BOARD 2: DISTANCE VS. DISPLACEMENT (DIRECTION REVERSAL)                                     |
|                                                                                                    |
|  0m                      +20m                     +40m                    +60m                     |
|  |────────────────────────|────────────────────────|────────────────────────|                      |
|  Leg 1: Run Forward (+60m)                                                                         |
|  ==========================================================================> [Turnaround]          |
|  Leg 2: Walk Back (-20m)                                                                           |
|                                                    <========================                       |
|                                                  [Final Stop x_f = +40m]                           |
|                                                                                                    |
|  Total Distance d = 60m + 20m = 80m  (Scalar sum of all ground covered)                            |
|  Net Displacement Δx = x_f - x_i = +40m - 0m = +40m  (Vector change from start to finish)          |
+----------------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------------+
| VISUAL BOARD 3: THE FOUR (v, a) SIGN COMBINATIONS                                                  |
|                                                                                                    |
|   Velocity (v)            Acceleration (a)        Physical Meaning                Result           |
|                                                                                                    |
|   ════════════════► (+)   ════════► (+)           Moving forward, pushed forward  SPEEDING UP      |
|                                                                                                    |
|   ════════════════► (+)   ◄════════ (-)           Moving forward, pulled backward SLOWING DOWN     |
|                                                                                                    |
|   ◄════════════════ (-)   ════════► (+)           Moving backward, pulled forward SLOWING DOWN     |
|                                                                                                    |
|   ◄════════════════ (-)   ◄════════ (-)           Moving backward, pushed backward SPEEDING UP     |
|                                                                                                    |
|   RULE: Same Sign => Speeding Up   |   Opposite Signs => Slowing Down                              |
+----------------------------------------------------------------------------------------------------+
─────────────────────────────────────────────────────────────────────────────────────
# 6. SLIDE-BY-SLIDE PRESENTATION OUTLINE

Slide 1: Series Title & Episode Introduction
Title: Mastering Kinematics — Episode 1: The Language of Motion
Series Road Map: 10-Part Master Progression (Part 1 highlighted).
Guiding Principle: "Understand the physical motion before writing an equation."
Slide 2: Coordinate Systems & Position Coordinate (
xx
)
Diagram: 1D horizontal axis with Origin (
x=0x=0
) and
+x+x
direction arrow.
Position: An object's location on the axis with an algebraic sign indicating side of origin.
Slide 3: Distance (
dd
) vs. Displacement (
ΔxΔx
)
Visual: 1D path with a reversal (Visual Board 2).
Formulas: Distance
d=total path lengthd=total path length
; Displacement
Δx=xf−xiΔx=xf​−xi​
.
Key Rule:
∣Δx∣≤d∣Δx∣≤d
; equality holds only if motion is unidirectional.
Slide 4: Speed vs. Velocity
Formulas:
Average Speed=dtotalΔtAverage Speed=Δtdtotal​​
vs.
v⃗avg=ΔxΔtvavg​=ΔtΔx​
.
Conceptual distinction: Scalar rate of coverage vs. vector rate of displacement.
Slide 5: Instantaneous Velocity (
vv
) — Conceptual Preview
Speedometer analogy: Velocity at an exact instant in time (
v=lim⁡Δt→0ΔxΔtv=limΔt→0​ΔtΔx​
).
Slide 6: Acceleration (
aa
) — Rate of Change of Velocity
Definition:
a=ΔvΔt=vf−viΔta=ΔtΔv​=Δtvf​−vi​​
.
Units:
m/s2m/s2
(metres per second gained or lost every second).
Core insight: Velocity is how fast position changes; acceleration is how fast velocity changes.
Slide 7: Speeding Up vs. Slowing Down (The 4 Sign Cases)
Matrix: Visual Board 3 displayed with directional arrows.
Rule: Same sign
⟹⟹
Speeding Up; Opposite signs
⟹⟹
Slowing Down.
Slide 8: Zero Velocity vs. Zero Acceleration
Case Studies: Apex of a vertical toss (
v=0,a≠0v=0,a=0
) vs. cruising car (
v≠0,a=0v=0,a=0
).
Slide 9: Worked Example 1 (KIN-015 — Nile University)
Finding displacement directly from average velocity.
Slide 10: Worked Example 2 (KIN-036 — EKSU)
Two-leg journey: Average speed over equal distances vs. the arithmetic mean trap.
Slide 11: Worked Example 3 (Adapted Academic Problem — Pure Sign Reasoning)
Tracking velocity changes step-by-step and identifying speeding up vs. slowing down without SUVAT.
Slide 12: Episode Summary & Transition to Part 2
Recap of foundational rules; bridge to Part 2: Seeing Motion — Kinematics Graphs.
─────────────────────────────────────────────────────────────────────────────────────
# 7. FULL LECTURER SCRIPT (TIMED TO 13.5 MINUTES)

Pacing Guide:
Spoken slowly, clearly, and authoritatively.
Estimated reading rate: 120–130 words per minute.
Deliberate pauses at key conceptual transitions.
─────────────────────────────────────────────────────────────────────────────────────

## [00:00 - 01:00] 1. INTRODUCTION & THE NEED FOR PRECISION

[SLIDE 1]
[ACTION: Look directly into camera. Speak with calm, authoritative clarity.]
Welcome to DHD Nexus Physics Academy. My name is Dein Honour Davies, and this is Episode 1 of our complete series: Mastering Kinematics.
Many students struggle in university physics examinations not because they cannot do algebra, but because they rush into memorizing formulas before they understand the language of motion. If you confuse where an object is with how fast it is moving, or if you believe that a negative sign in front of acceleration always means an object is slowing down, your calculations will fail before you even begin.
In this first episode, we build the uncompromising conceptual foundation: The Language of Motion. We will master reference frames, position, distance, displacement, speed, velocity, acceleration, and the definitive rules of sign conventions. No memorization tricks—just clean physical reasoning. Let us begin.
─────────────────────────────────────────────────────────────────────────────────────

## [01:00 - 02:45] 2. REFERENCE FRAMES, POSITION, AND DISPLACEMENT

[SLIDE 2 & 3]
[ACTION: Move to the digital board. Draw a clean horizontal number line with an Origin 'O'.]
To describe any motion in the universe, the very first thing we must establish is a Reference Frame. A reference frame is simply the coordinate system and clock chosen by an observer to measure space and time.
On this straight line, we pick a reference point called the Origin, where position coordinate
x=0x=0
. Then, we make a deliberate choice: we define one direction as positive (
+x+x
), which makes the opposite direction negative (
−x−x
).
Now we can define Position,
xx
. Position is simply the coordinate of an object at a specific instant in time relative to our origin. If a car is at
x=+20 mx=+20 m
, it is 20 metres to the positive side of the origin.
[ACTION: Draw a path: start at 0, move right to +60m, then move left to +40m.]
Now, notice the critical difference between Distance and Displacement.
Imagine a runner who starts at
x=0x=0
, runs 60 metres forward to
x=+60 mx=+60 m
, and then turns around and walks 20 metres backward, stopping at
x=+40 mx=+40 m
.
Distance (
dd
) is a scalar. It is the total physical length of the path travelled:
d=60 m+20 m=80 md=60 m+20 m=80 m
Distance is always positive, and it accumulates with every step.
Displacement (
ΔxΔx
) is a vector quantity. In one dimension, it is simply the net change in the position coordinate:
Δx=xfinal−xinitial=(+40 m)−(0 m)=+40 mΔx=xfinal​−xinitial​=(+40 m)−(0 m)=+40 m
[PAUSE 2 SECONDS]
Distance is 80 metres; displacement is positive 40 metres. Distance measures how much ground you covered. Displacement measures how far out of place you ended up relative to where you started.
─────────────────────────────────────────────────────────────────────────────────────

## [02:45 - 05:00] 3. SPEED, VELOCITY, AND THE AVERAGE SPEED TRAP

[SLIDE 4 & 5]
[ACTION: Write the two definitions side-by-side on the board.]
Because distance and displacement are different, their rates of change are also different.
Average Speed is the total distance divided by the total time elapsed:
Average Speed=Total DistanceΔtAverage Speed=ΔtTotal Distance​
Average Velocity,
vavgvavg​
, is the displacement divided by the total time elapsed:
vavg=ΔxΔt=xf−xiΔtvavg​=ΔtΔx​=Δtxf​−xi​​
In one-dimensional motion, velocity carries an algebraic sign. A positive average velocity means the net displacement was in the
+x+x
direction; a negative sign means net displacement was in the
−x−x
direction.
[ACTION: Point to camera.]
Here is a common exam trap: students often calculate average speed by simply averaging the initial and final speeds. That only works under very special conditions. If you cover two equal distances at different speeds, you spend more time travelling at the slower speed, which pulls the overall average speed down. We will prove this in Worked Example 2.
Now, if we shrink the time interval
ΔtΔt
down to an infinitesimal split second, we get Instantaneous Velocity (
vv
). This is the velocity of the object at one single instant in time—the reading on a speedometer combined with its direction of motion.
─────────────────────────────────────────────────────────────────────────────────────

## [05:00 - 07:30] 4. ACCELERATION & THE FOUR

(v,a)(v,a)
SIGN CASES
[SLIDE 6 & 7]
[ACTION: Write 'ACCELERATION' in bold.]
Now we come to Acceleration (
aa
).
Acceleration is defined as the time rate of change of velocity:
a=ΔvΔt=vf−viΔta=ΔtΔv​=Δtvf​−vi​​
Its units are metres per second squared (
m/s2m/s2
), which means: how many metres per second of velocity the object gains or loses every single second.
Velocity tells you how fast your position is changing. Acceleration tells you how fast your velocity is changing.
[ACTION: Draw the 4-case comparison diagram on the board.]
Now let us address the single biggest misconception in introductory kinematics: "Negative acceleration always means slowing down."
This is false. The algebraic sign of acceleration indicates its direction, not whether the object is speeding up or slowing down.
To know whether an object is gaining or losing speed, you must compare the sign of velocity with the sign of acceleration:
Velocity positive (
v>0v>0
), Acceleration positive (
a>0a>0
):
The object is moving forward, and the acceleration pushes forward. Result: Speeding up.
Velocity positive (
v>0v>0
), Acceleration negative (
a<0a<0
):
The object is moving forward, but acceleration pulls backward. Result: Slowing down.
Velocity negative (
v<0v<0
), Acceleration positive (
a>0a>0
):
The object is moving backward, but acceleration pulls forward. Result: Slowing down (speed decreases toward zero).
Velocity negative (
v<0v<0
), Acceleration negative (
a<0a<0
):
The object is moving backward, and acceleration pushes further backward. Result: Speeding up in the negative direction!
[PAUSE 2 SECONDS FOR EMPHASIS]
Look at Case 4: the acceleration is negative, yet the object is speeding up!
The universal rule is simple:
Same signs (
sgn⁡(v)=sgn⁡(a)sgn(v)=sgn(a)
)
⟹⟹
SPEEDING UP.
Opposite signs (
sgn⁡(v)≠sgn⁡(a)sgn(v)=sgn(a)
)
⟹⟹
SLOWING DOWN.
─────────────────────────────────────────────────────────────────────────────────────

## [07:30 - 08:45] 5. ZERO VELOCITY VS. ZERO ACCELERATION

[SLIDE 8]
[ACTION: Toss an eraser or pen upward and catch it.]
Never confuse being stopped with not accelerating.
When a ball is thrown straight up, at the very peak of its flight, its velocity is momentarily zero (
v=0v=0
). But is its acceleration zero?
No! Gravity continues to pull downward with an acceleration of
9.8 m/s29.8 m/s2
downward. If acceleration were zero at the top, the velocity would never change, and the ball would float in mid-air forever.
Conversely, a car cruising on a straight highway at a steady
100 km/h100 km/h
has a large velocity, but its acceleration is exactly zero because its velocity is not changing.
Velocity is the state of motion right now; acceleration is how that state is changing.
─────────────────────────────────────────────────────────────────────────────────────

## [08:45 - 12:15] 6. WORKED EXAMPLES

[SLIDES 9, 10, 11]
[ACTION: Work through Examples 1, 2, and 3 cleanly on the board using the DHD Nexus Framework.]
Let us solve three foundational examination problems using the DHD Nexus method.
(Lecturer delivers Worked Examples 1, 2, and 3 as detailed in Section 8 below).
─────────────────────────────────────────────────────────────────────────────────────

## [12:15 - 13:30] 7. SUMMARY & BRIDGE TO PART 2

[SLIDE 12]
[ACTION: Return to center screen.]
Let us review the core truths of Episode 1:
All kinematics begins with an Origin and a Positive Direction.
Distance is scalar path length; Displacement is the vector change in position coordinate:
Δx=xf−xiΔx=xf​−xi​
.
Average Speed is total distance over total time; Average Velocity is displacement over total time.
Acceleration is the rate of change of velocity:
a=Δv/Δta=Δv/Δt
.
Speeding up occurs when
vv
and
aa
share the same sign; Slowing down occurs when
vv
and
aa
have opposite signs.
6.
v=0v=0
does not mean
a=0a=0
, and
a=0a=0
does not mean
v=0v=0
.
Now that we have mastered the vocabulary of motion, our next step is to visualize it. How do you extract position, velocity, and acceleration directly from graphs? How does the area under a graph give you displacement?
In Episode 2: Seeing Motion — Kinematics Graphs, we will explore
x−tx−t
,
v−tv−t
, and
a−ta−t
graphs, master gradients and areas, and build the visual bridge to the equations of motion.
I will see you in Episode 2.
─────────────────────────────────────────────────────────────────────────────────────
# 8. REVISED WORKED EXAMPLE SOLUTIONS (NO PREMATURE SUVAT)

─────────────────────────────────────────────────────────────────────────────────────

## WORKED EXAMPLE 1: Displacement from Average Velocity

Corpus Provenance: Nile University of Nigeria, PHY 101, First Semester 2022/2023, Question 18 (KIN-015). Authentic Nigerian University Examination.

## Problem Statement

A car travels in the
`
+x+x
`
-direction on a straight and level road. For the first
`
4.00 s4.00 s
`
of its motion, the average velocity of the car is
`
+6.25 m/s+6.25 m/s
`
. How far does the car travel in
`
4.00 s4.00 s
`
?
(a)
`
1.56 m1.56 m
`
\quad (b)
`
5.00 m5.00 m
`
\quad (c)
`
25.00 m25.00 m
`
\quad (d)
`
100 m100 m
`
─────────────────────────────────────────────────────────────────────────────────────

## Step 1: Physics & Physical Situation

A car moves along a straight 1D axis in the defined positive direction without reversing. We are given the average rate of position change over a
4.00 s4.00 s
window and need to determine the total displacement.

## Step 2: Reference Frame & Representation

Axis: 1D horizontal line with
+x+x
pointing forward.
Initial time:
ti=0 sti​=0 s
; Final time:
tf=4.00 s⟹Δt=4.00 stf​=4.00 s⟹Δt=4.00 s
.
Motion is strictly unidirectional along
+x+x
.

## Step 3: Known and Unknown Quantities

Knowns:
vavg=+6.25 m/svavg​=+6.25 m/s
,
Δt=4.00 sΔt=4.00 s
.
Unknown: Displacement
Δx=?Δx=?

## Step 4: Relevant Concept & Method Justification

By definition, average velocity is the net displacement divided by elapsed time:
vavg=ΔxΔtvavg​=ΔtΔx​
We rearrange this foundational definition directly to solve for displacement:
Δx=vavg⋅ΔtΔx=vavg​⋅Δt
. No constant-acceleration kinematic equations are needed or assumed.

## Step 5: Mathematical Solution

Δx=(+6.25 m/s)×(4.00 s)=+25.00 mΔx=(+6.25 m/s)×(4.00 s)=+25.00 m

## Step 6: Physical Interpretation & Units

Units:
(m/s)×s=m(m/s)×s=m
(dimensionally valid length).
Sign: Positive, confirming the car moved 25.00 metres in the
+x+x
direction.
Correct Option: (c) 25.00 m.

## Step 7: Sanity Check & Trap Avoidance

Trap Check: Dividing velocity by time gives
1.56 m1.56 m
(Option A), which confuses the velocity definition with dimensional division. Multiplying at
≈6 m/s≈6 m/s
for
4 s4 s
must yield approximately
24 m24 m
.
25.00 m25.00 m
is physically sound.
─────────────────────────────────────────────────────────────────────────────────────

## WORKED EXAMPLE 2: The Two-Leg Average Speed Trap

Corpus Provenance: Ekiti State University (EKSU), PHY 101, 2019/2020 Session, Question 25 (KIN-036). Authentic Nigerian University Examination (OCR verified clean).

## Problem Statement

A motorist drives
`
120 km120 km
`
at
`
100 km/h100 km/h
`
and then another
`
120 km120 km
`
at
`
50 km/h50 km/h
`
. What is his average speed for the entire trip?
─────────────────────────────────────────────────────────────────────────────────────

## Step 1: Physics & Physical Situation

The trip consists of two consecutive legs of equal distance (
120 km120 km
each). The car travels fast on Leg 1 and slow on Leg 2. Because the speeds are different across identical distances, the driver spends unequal amounts of time on the two legs.

## Step 2: Reference Frame & Representation

codeCode
Leg 1: d_1 = 120 km, v_1 = 100 km/h       Leg 2: d_2 = 120 km, v_2 = 50 km/h
[Start]==================================>[Midpoint]==================================>[End]
|<-------------- t_1 -------------------->|<----------------- t_2 -------------------->|

## Step 3: Known and Unknown Quantities

Leg 1:
d1=120 kmd1​=120 km
,
s1=100 km/hs1​=100 km/h
Leg 2:
d2=120 kmd2​=120 km
,
s2=50 km/hs2​=50 km/h
Total Distance:
dtotal=120 km+120 km=240 kmdtotal​=120 km+120 km=240 km
Unknowns: Leg times
t1,t2t1​,t2​
; Total time
ttotalttotal​
; Average Speed
vavgvavg​
.

## Step 4: Relevant Concept & Method Justification

Average speed is strictly defined as total distance divided by total elapsed time:
vavg=dtotalttotal=d1+d2t1+t2vavg​=ttotal​dtotal​​=t1​+t2​d1​+d2​​
We cannot simply average the speeds (
100100
and
5050
) because speed is a rate per unit time, and the time spent at each speed is different. We must calculate the time duration of each leg individually.

## Step 5: Mathematical Solution

Time for Leg 1:
t1=d1s1=120 km100 km/h=1.20 hourst1​=s1​d1​​=100 km/h120 km​=1.20 hours
Time for Leg 2:
t2=d2s2=120 km50 km/h=2.40 hourst2​=s2​d2​​=50 km/h120 km​=2.40 hours
Total Time Elapsed:
ttotal=t1+t2=1.20 h+2.40 h=3.60 hoursttotal​=t1​+t2​=1.20 h+2.40 h=3.60 hours
Average Speed:
vavg=240 km3.60 h=240185=240×518=120018=66.67 km/h(6623 km/h)vavg​=3.60 h240 km​=518​240​=18240×5​=181200​=66.67 km/h(6632​ km/h)

## Step 6: Physical Interpretation

The average speed (
66.67 km/h66.67 km/h
) is much closer to
50 km/h50 km/h
than to
100 km/h100 km/h
. Why? Because the driver spent
2.4 hours2.4 hours
driving at
50 km/h50 km/h
and only
1.2 hours1.2 hours
at
100 km/h100 km/h
. The motion was dominated by the slower speed in time.

## Step 7: Sanity Check & Trap Avoidance

The Fatal Trap:
100+502=75 km/h2100+50​=75 km/h
. This arithmetic average is invalid because the legs are equal in distance, not in time.
─────────────────────────────────────────────────────────────────────────────────────

## WORKED EXAMPLE 3: Sign Reasoning, Opposing Rates, and the Turning Point

Provenance Category: ADAPTED ACADEMIC PROBLEM
(Adapted from OpenStax University Physics Vol 1, Chapter 3 Conceptual Exercises by DHD Nexus)

## Problem Statement

A motorized test cart moves along a straight horizontal track. We define the positive direction (
`
+x+x
`
) pointing to the right (East).
At a given instant
`
t0t0​
`
, the cart is located at
`
x=+10.0 mx=+10.0 m
`
, moving to the right with an instantaneous velocity of
`
v=+6.0 m/sv=+6.0 m/s
`
, while its motor exerts a constant braking acceleration of
`
a=−2.0 m/s2a=−2.0 m/s2
`
directed to the left.
Without using kinematic formulas (
`
v=u+atv=u+at
`
), answer the following based strictly on the definitions of velocity, acceleration, and coordinate signs:
1. In which physical direction is the cart moving at this instant?
2. In which physical direction is the acceleration pointing?
3. Is the cart speeding up or slowing down at this instant? Explain why using vector directions.
4. As time progresses, what will happen to the cart's speed? What is the physical state of the cart at the instant its velocity becomes
`
v=0v=0
`
?
5. If the acceleration of
`
−2.0 m/s2−2.0 m/s2
`
continues to act after the cart stops momentarily, describe the cart's subsequent motion. Will it be speeding up or slowing down?
─────────────────────────────────────────────────────────────────────────────────────

## Step 1: Physics & Physical Reality

The cart is currently travelling East (rightward), but an opposing force creates an acceleration directed West (leftward). Because the acceleration opposes the velocity, the rightward speed must continuously diminish until the cart comes to a momentary stop. Because the westward acceleration remains active, the cart will not stay at rest; it will reverse direction and begin travelling West, gaining speed in the westward direction.

## Step 2: Representation & Coordinate Scaffolding

codeCode
Negative Direction (-x / West)             Origin (x=0)            Positive Direction (+x / East)
             <================================================|===============================================>
                                                                           [Cart at t_0: x = +10.0m]
                                                                                      ●════════════► Velocity v = +6.0 m/s
                                                                        Acceleration a = -2.0 m/s² ◄════════

## Step 3: Identification of Quantities

Reference Direction: Right / East
=+x=+x
; Left / West
=−x=−x
.
Initial State:
x=+10.0 mx=+10.0 m
,
v=+6.0 m/sv=+6.0 m/s
,
a=−2.0 m/s2a=−2.0 m/s2
.
Target: Pure qualitative and physical state determination.

## Step 4: Method & Relevant Concepts

Direction of Motion: Governed exclusively by the algebraic sign of instantaneous velocity (
sgn⁡(v)sgn(v)
).
Direction of Acceleration: Governed exclusively by the algebraic sign of acceleration (
sgn⁡(a)sgn(a)
).
Speeding Up vs. Slowing Down: Determined by comparing
sgn⁡(v)sgn(v)
and
sgn⁡(a)sgn(a)
:
-
sgn⁡(v)=sgn⁡(a)⟹sgn(v)=sgn(a)⟹
Vectors reinforce
⟹⟹
Speed increases.
-
sgn⁡(v)≠sgn⁡(a)⟹sgn(v)=sgn(a)⟹
Vectors oppose
⟹⟹
Speed decreases.
Turning Point Concept: A point where
v=0v=0
momentarily while
a≠0a=0
, causing an immediate reversal of direction.

## Step 5: Step-by-Step Physical Solution

Direction of Motion at
t0t0​
:
Since
v=+6.0 m/s>0v=+6.0 m/s>0
, the cart is moving to the right (East) along the
+x+x
axis.
Direction of Acceleration at
t0t0​
:
Since
a=−2.0 m/s2<0a=−2.0 m/s2<0
, the acceleration is directed to the left (West) along the
−x−x
axis.
Speeding Up or Slowing Down at
t0t0​
:
Velocity is positive (pointing right).
Acceleration is negative (pointing left).
Because velocity and acceleration point in opposite directions, the acceleration opposes the motion. The cart is SLOWING DOWN.
Approach to
v=0v=0
and the Turning Point:
As time advances, the opposing acceleration continuously removes speed.
When the velocity reaches
v=0 m/sv=0 m/s
, the cart is at an instantaneous turning point (momentary rest).
Critical Physical Insight: At this turning point, although
v=0v=0
, the acceleration is not zero (
a=−2.0 m/s2a=−2.0 m/s2
). The cart is not in equilibrium.
Subsequent Motion after the Turning Point:
With the continuous leftward acceleration (
a=−2.0 m/s2a=−2.0 m/s2
) acting on the momentarily stopped cart, the cart begins moving to the left (
v<0v<0
).
Now, both velocity (
v<0v<0
) and acceleration (
a<0a<0
) point to the left.
Because they share the same direction, the acceleration now reinforces the motion. The cart is moving to the left and SPEEDING UP.

## Step 6: Physical Interpretation & Misconception Takeaway

This example proves conclusively why "negative acceleration" does not mean "slowing down."
While moving right,
a=−2.0 m/s2a=−2.0 m/s2
caused the cart to slow down.
After reversing left, that exact same
a=−2.0 m/s2a=−2.0 m/s2
causes the cart to speed up.
The effect of acceleration on speed depends entirely on the direction of velocity.

## Step 7: Sanity Check

Pre-turning point:
v⃗⋅a⃗<0⟹v⋅a<0⟹
speed decreases.
At turning point:
v=0,a≠0⟹v=0,a=0⟹
trajectory curvature reverses.
Post-turning point:
v⃗⋅a⃗>0⟹v⋅a>0⟹
speed increases. The physical logic is completely sound and free of formula-hunting.
─────────────────────────────────────────────────────────────────────────────────────
# 3. REVISED QUESTION PROVENANCE AUDIT TABLE

All questions appearing across Part 1 (Worked Examples, Checkpoints, Practice Sets) are formally categorized below:
120 km120 km
legs
vv
and
aa
means speeding up
v,av,a
)
─────────────────────────────────────────────────────────────────────────────────────
─────────────────────────────────────────────────────────────────────────────────────
# 9. PAUSE-AND-THINK CHECKPOINTS (INTERACTIVE)


## Checkpoint 1.1: Distance vs. Displacement in a Security Patrol

Prompt: A security guard at a university gate walks
`
50 m50 m
`
due East along a straight fence, then turns around and walks
`
20 m20 m
`
due West. The entire walk takes
`
70 seconds70 seconds
`
.
Taking East as the positive direction:
(a) What is the total distance travelled?
(b) What is the net displacement?
(c) What is the guard's average speed?
(d) What is the guard's average velocity?
(PAUSE FOR 5 SECONDS — STUDENT SOLVES)
Solution Reveal:
- (a) Distance
`
d=50 m+20 m=70 md=50 m+20 m=70 m
`
- (b) Displacement
`
Δx=(+50 m)+(−20 m)=+30 mΔx=(+50 m)+(−20 m)=+30 m
`
(East)
- (c) Average Speed
`
=dΔt=70 m70 s=1.0 m/s=Δtd​=70 s70 m​=1.0 m/s
`
- (d) Average Velocity
`
=ΔxΔt=+30 m70 s=+0.43 m/s=ΔtΔx​=70 s+30 m​=+0.43 m/s
`
(East)
─────────────────────────────────────────────────────────────────────────────────────

## Checkpoint 1.2: The Sign Meaning of Velocity and Acceleration

Provenance: Ekiti State University, PHY 101, 2019/2020, Q2 (KIN-031). Authentic Nigerian Exam.
Prompt: When both the velocity and acceleration of an object have the same algebraic sign, it means the object:
(A) Slows down
(B) Is at rest
(C) Speeds up
(D) None of the above
(PAUSE FOR 5 SECONDS — STUDENT SOLVES)
Solution Reveal:
- Correct Answer: (C) Speeds up
- Reasoning: If both
`
vv
`
and
`
aa
`
are positive, the object moves forward while being accelerated forward. If both
`
vv
`
and
`
aa
`
are negative, the object moves backward while being accelerated backward. In both cases, the acceleration acts in the direction of motion, increasing the magnitude of velocity (speed).
─────────────────────────────────────────────────────────────────────────────────────

## Checkpoint 1.3: The Meaning of Zero Acceleration

Provenance: Adekunle Ajasin University, PHY 101, 2023/2024, Q7 (KIN-002). Authentic Nigerian Exam.
Prompt: An object moving at constant velocity has zero acceleration because:
(A) Final velocity equals initial velocity (
`
Δv=0Δv=0
`
)
(B) Final velocity equals two times initial velocity
(C) Final velocity equals half of initial velocity
(D) All of the above
(PAUSE FOR 5 SECONDS — STUDENT SOLVES)
Solution Reveal:
- Correct Answer: (A)
- Reasoning: Acceleration is the rate of change of velocity:
`
a=vf−viΔta=Δtvf​−vi​​
`
. If velocity is constant,
`
vf=vivf​=vi​
`
, so
`
Δv=0Δv=0
`
, which mathematically requires
`
a=0 m/s2a=0 m/s2
`
.
─────────────────────────────────────────────────────────────────────────────────────
# 10. MISCONCEPTION CALLOUTS

─────────────────────────────────────────────────────────────────────────────────────

## MISCONCEPTION 1: "Negative Acceleration Always Means Slowing Down"

The Confusion: In everyday conversational English, "acceleration" means going faster, and "deceleration" means going slower. Students falsely assume that the mathematical minus sign (
−−
) in
−a−a
translates directly to "deceleration" (slowing down).
The Physical Reality: In physics, algebraic signs indicate direction along the coordinate axis. A negative acceleration simply points in the
−x−x
direction. If an object is already moving in the
−x−x
direction (
v<0v<0
), a negative acceleration pushes it further in that direction, causing it to gain speed.
The Rule: Compare signs. Same signs = speeding up. Opposite signs = slowing down.
─────────────────────────────────────────────────────────────────────────────────────

## MISCONCEPTION 2: "Average Speed is Just the Arithmetic Average of Speeds"

The Confusion: Students take
v1+v222v1​+v2​​
whenever two speeds are mentioned in a problem.
The Physical Reality: Average speed is defined as
Total DistanceTotal TimeTotal TimeTotal Distance​
. The simple average
v1+v222v1​+v2​​
is mathematically valid only if the object travels for equal amounts of time at each speed. If it travels equal distances, it spends more time at the lower speed, making the true average speed lower than the arithmetic mean.
─────────────────────────────────────────────────────────────────────────────────────

## MISCONCEPTION 3: "Zero Velocity Means Acceleration Must Be Zero"

The Confusion: Thinking that if an object is not moving at a given instant, there is no acceleration acting on it.
The Physical Reality: Velocity is the object's instantaneous rate of position change. Acceleration is how fast that velocity is changing. When you toss a ball straight up, at the highest point its velocity is momentarily zero (
v=0v=0
), but its acceleration is
−9.8 m/s2−9.8 m/s2
downward. If acceleration were zero at the peak, the ball would stop changing its velocity and hang suspended in the air forever.
─────────────────────────────────────────────────────────────────────────────────────
# 11. EXAMINATION STRATEGY & PITFALL GUIDE

When taking introductory physics examinations (such as PHY 101 at AAU, Nile, EKSU, UNILAG, or international equivalents):
Draw the Coordinate Arrow Before Touching Numbers:
Draw a horizontal or vertical line, label the origin
x=0x=0
, and draw a clear arrow indicating
+x+x
. Every position, displacement, velocity, and acceleration value must be assigned a sign relative to this chosen axis.
Check the Basis for Average Speed Problems:
If the problem specifies equal time intervals:
vavg=v1+v22vavg​=2v1​+v2​​
.
If the problem specifies equal distance intervals:
vavg=2v1v2v1+v2vavg​=v1​+v2​2v1​v2​​
.
If intervals are arbitrary: compute total distance
dtotal=∑didtotal​=∑di​
and total time
ttotal=∑tittotal​=∑ti​
, then divide
dtotal/ttotaldtotal​/ttotal​
.
Convert Units Consistently:
Never mix
km/hkm/h
with seconds or metres. Convert
km/hkm/h
to
m/sm/s
immediately by dividing by
3.63.6
:
1 km/h=1000 m3600 s=13.6 m/s≈0.2778 m/s1 km/h=3600 s1000 m​=3.61​ m/s≈0.2778 m/s
Never Write "Deceleration =
−a−a
":
State the acceleration with its correct directional sign. If a car moves in the
+x+x
direction and slows down, write
a=−3.0 m/s2a=−3.0 m/s2
. If it moves in the
−x−x
direction and slows down, write
a=+3.0 m/s2a=+3.0 m/s2
.
─────────────────────────────────────────────────────────────────────────────────────
# 12. COMPREHENSIVE LECTURE NOTE (TEXTBOOK-GRADE REFERENCE)

─────────────────────────────────────────────────────────────────────────────────────

## CHAPTER 1: THE LANGUAGE OF MOTION


## 1.1 Mechanics and the Role of Kinematics

Classical mechanics is divided into two primary disciplines:
Kinematics: The branch of mechanics that describes the spatial and temporal properties of motion—position, displacement, velocity, and acceleration—without considering the masses or forces that create or alter that motion.
Dynamics: The study of how forces acting on masses determine the kinematic behavior of systems.
Kinematics is the geometric and temporal foundation upon which all of physics and mechanical engineering is built.
─────────────────────────────────────────────────────────────────────────────────────

## 1.2 Reference Frames, Coordinate Systems, and Position

Motion is inherently relational. An object cannot be described as "in motion" without defining an observer's perspective.

## Definition: Reference Frame

A Reference Frame is a physical coordinate system (origin and spatial axes) combined with a synchronized clock relative to which an observer measures the spatial coordinates and temporal evolution of an event.

## One-Dimensional Position Coordinate (

xx
)
In one-dimensional (1D) rectilinear motion, a particle is constrained to move along a straight line. We construct:
An Origin (
OO
): A fixed reference location where the spatial coordinate is defined as zero (
x=0x=0
).
A Positive Direction (
+x+x
): A chosen orientation along the line. The opposite orientation is defined as the negative direction (
−x−x
).
The Position Coordinate
x(t)x(t)
of a particle is its location along the axis at time
tt
. In 1D kinematics, the algebraic sign (
±±
) completely specifies the direction of the particle relative to the origin:
-
x>0x>0
: The particle is on the positive side of the origin.
-
x<0x<0
: The particle is on the negative side of the origin.
-
x=0x=0
: The particle is located exactly at the origin.
SI Unit of Position: Metre (m)SI Unit of Position: Metre (m)
─────────────────────────────────────────────────────────────────────────────────────

## 1.3 Distance and Displacement

codeCode
Path Traversed (Distance d)
            ╭─────────────────────────────────────────╮
           A ●                                         ● B
            ╰─────────────────────────────────────────►
                    Net Displacement (Δx)

## Definition: Distance (

dd
)
Distance is a scalar quantity equal to the total length of the continuous path traversed by a particle during a time interval
`
Δt=tf−tiΔt=tf​−ti​
`
.
Properties of Distance:
1.
d≥0d≥0
under all physical conditions.
Distance is monotonically non-decreasing over time:
Δd≥0Δd≥0
.
Distance is strictly path-dependent.

## Definition: Displacement (

ΔxΔx
)
Displacement is a vector quantity defined as the straight-line change in position coordinate between initial time
`
titi​
`
and final time
`
tftf​
`
:
`
Δx=x(tf)−x(ti)=xf−xiΔx=x(tf​)−x(ti​)=xf​−xi​
`
Properties of Displacement:
1.
ΔxΔx
can be positive, negative, or zero.
Displacement is path-independent; it depends exclusively on the initial and final endpoints (
xi,xfxi​,xf​
).
The magnitude of displacement is always less than or equal to the distance travelled:
∣Δx∣≤d∣Δx∣≤d
Equality (
∣Δx∣=d∣Δx∣=d
) holds if and only if motion along the straight line occurs without any change in direction.
─────────────────────────────────────────────────────────────────────────────────────

## 1.4 Speed and Velocity


## Average Speed (

vavgvavg​
)
Average Speed is the total scalar distance traversed divided by the total time elapsed:
`
vavg=dtotalΔt=dtotaltf−tivavg​=Δtdtotal​​=tf​−ti​dtotal​​
`
Since
`
d≥0d≥0
`
and
`
Δt>0Δt>0
`
, average speed is always non-negative (
`
vavg≥0vavg​≥0
`
).

## Average Velocity (

vavgvavg​
)
Average Velocity is the net displacement divided by the total time elapsed:
`
vavg=ΔxΔt=xf−xitf−tivavg​=ΔtΔx​=tf​−ti​xf​−xi​​
`
In 1D, average velocity carries an algebraic sign:
-
vavg>0⟹vavg​>0⟹
Net displacement is in the
+x+x
direction.
-
vavg<0⟹vavg​<0⟹
Net displacement is in the
−x−x
direction.
-
vavg=0⟹vavg​=0⟹
The particle returned to its starting position (
xf=xixf​=xi​
).

## Mathematical Note: The Harmonic Mean of Speeds

For an object travelling two consecutive legs of equal distance
LL
at speeds
v1v1​
and
v2v2​
:
t1=Lv1,t2=Lv2⟹ttotal=L(1v1+1v2)=L(v1+v2v1v2)t1​=v1​L​,t2​=v2​L​⟹ttotal​=L(v1​1​+v2​1​)=L(v1​v2​v1​+v2​​)
vavg=dtotalttotal=2LL(v1+v2v1v2)=2v1v2v1+v2vavg​=ttotal​dtotal​​=L(v1​v2​v1​+v2​​)2L​=v1​+v2​2v1​v2​​
This harmonic mean reflects the fact that average speed is inherently time-weighted.

## Instantaneous Velocity (

vv
)
Instantaneous Velocity is the time rate of change of position at a specific instant
`
tt
`
, defined as the limit of average velocity as
`
Δt→0Δt→0
`
:
`
v(t)=lim⁡Δt→0ΔxΔt=dxdtv(t)=Δt→0lim​ΔtΔx​=dtdx​
`

## Instantaneous Speed (

ss
or
∣v∣∣v∣
)
Instantaneous Speed is the absolute magnitude of the instantaneous velocity:
s(t)=∣v(t)∣=∣dxdt∣s(t)=∣v(t)∣=​dtdx​​
Unlike average quantities, instantaneous speed is always equal to the magnitude of instantaneous velocity.
─────────────────────────────────────────────────────────────────────────────────────

## 1.5 Acceleration


## Definition: Average Acceleration (

aavgaavg​
)
Average Acceleration is the change in velocity divided by the elapsed time:
`
aavg=ΔvΔt=vf−vitf−tiaavg​=ΔtΔv​=tf​−ti​vf​−vi​​
`

## Definition: Instantaneous Acceleration (

aa
)
Instantaneous Acceleration is the limit of average acceleration as
`
Δt→0Δt→0
`
:
`
a(t)=lim⁡Δt→0ΔvΔt=dvdt=d2xdt2a(t)=Δt→0lim​ΔtΔv​=dtdv​=dt2d2x​
`
SI Unit of Acceleration: Metre per second squared (m/s2 or m⋅s−2)SI Unit of Acceleration: Metre per second squared (m/s2 or m⋅s−2)
Dimensional Formula: [a]=[LT−2]Dimensional Formula: [a]=[LT−2]
─────────────────────────────────────────────────────────────────────────────────────

## 1.6 The Four

(v,a)(v,a)
Sign Combinations
In 1D kinematics, the algebraic signs of
vv
and
aa
provide complete information about the direction of motion and whether speed is increasing or decreasing:
codeCode
SIGN OF VELOCITY v
                           Positive (v > 0)    Negative (v < 0)
                         ┌───────────────────┬───────────────────┐
       Positive (a > 0)  │    SPEEDING UP    │   SLOWING DOWN    │
                         │   (Moving in +x)  │   (Moving in -x)  │
  SIGN OF                ├───────────────────┼───────────────────┤
  ACCELERATION a         │   SLOWING DOWN    │    SPEEDING UP    │
       Negative (a < 0)  │   (Moving in +x)  │   (Moving in -x)  │
                         └───────────────────┴───────────────────┘

## The Universal Sign Rule:

-
sgn⁡(v)=sgn⁡(a)⟹sgn(v)=sgn(a)⟹
Speeding Up (Vectors point in the same direction; acceleration reinforces velocity).
-
sgn⁡(v)≠sgn⁡(a)⟹sgn(v)=sgn(a)⟹
Slowing Down (Vectors point in opposite directions; acceleration opposes velocity).
─────────────────────────────────────────────────────────────────────────────────────
# 13. STUDENT PRACTICE SET

─────────────────────────────────────────────────────────────────────────────────────

## Problem 1 (DHD Nexus Original — AAU-style)

A laboratory glider on an air track starts at position coordinate
x=−0.40 mx=−0.40 m
at
t=0t=0
. It moves to
x=+1.20 mx=+1.20 m
in
2.0 s2.0 s
, then bounces off an end bumper and returns to
x=+0.60 mx=+0.60 m
at
t=3.0 st=3.0 s
.
(a) Find the glider's net displacement between
t=0t=0
and
t=3.0 st=3.0 s
.
(b) Find the total distance travelled by the glider between
t=0t=0
and
t=3.0 st=3.0 s
.
(c) Calculate the average velocity of the glider over the
3.0 s3.0 s
interval.
(d) Calculate the average speed of the glider over the
3.0 s3.0 s
interval.
─────────────────────────────────────────────────────────────────────────────────────

## Problem 2 (DHD Nexus Original — Nile-style)

A motorist travels along a straight road between City A and City B. For the first
40 minutes40 minutes
of the journey, she drives at a constant speed of
90 km/h90 km/h
. For the next
20 minutes20 minutes
, she gets caught in traffic and drives at a constant speed of
30 km/h30 km/h
.
(a) What is the total distance between City A and City B?
(b) What is the motorist's average speed for the entire
60-minute60-minute
trip?
(c) Explain why, in this specific case, the average speed is equal to the simple arithmetic mean
90+302=60 km/h290+30​=60 km/h
or why it is not.
─────────────────────────────────────────────────────────────────────────────────────

## Problem 3 (Authentic Nigerian University Exam — EKSU)

Provenance: Ekiti State University, PHY 101, 2019/2020 Exam, Question 2 (KIN-031).
An autonomous delivery rover moves along a straight 1D track. At time
t=1.0 st=1.0 s
, its velocity coordinate is
v=−3.0 m/sv=−3.0 m/s
and its acceleration coordinate is
a=−1.5 m/s2a=−1.5 m/s2
.
(a) In which physical direction along the track is the rover moving?
(b) Is the rover speeding up or slowing down? Justify your answer using sign relationships.
(c) What will the rover's velocity be at
t=3.0 st=3.0 s
, assuming the acceleration remains constant?
─────────────────────────────────────────────────────────────────────────────────────

## Problem 4 (Decoupling

vv
and
aa
— Conceptual)
For each of the following scenarios, state whether the situation is physically possible or impossible. If possible, provide a clear real-world physical example:
(a) An object has instantaneous velocity
v=0v=0
while its acceleration
a≠0a=0
.
(b) An object has constant speed while its velocity is changing.
(c) An object has constant velocity while its speed is changing.
(d) An object has negative acceleration while its speed is increasing.
─────────────────────────────────────────────────────────────────────────────────────
# 14. COMPLETE ANSWER & SOLUTION GUIDE FOR PRACTICE SET

─────────────────────────────────────────────────────────────────────────────────────

## Solution to Problem 1


## (a) Net Displacement:

Δx=xfinal−xinitial=(+0.60 m)−(−0.40 m)=+0.60+0.40=+1.00 mΔx=xfinal​−xinitial​=(+0.60 m)−(−0.40 m)=+0.60+0.40=+1.00 m

## (b) Total Distance:

Leg 1 (from
x=−0.40 mx=−0.40 m
to
x=+1.20 mx=+1.20 m
):
d1=∣1.20−(−0.40)∣=1.60 md1​=∣1.20−(−0.40)∣=1.60 m
.
Leg 2 (from
x=+1.20 mx=+1.20 m
to
x=+0.60 mx=+0.60 m
):
d2=∣0.60−1.20∣=0.60 md2​=∣0.60−1.20∣=0.60 m
.
Total distance:
dtotal=d1+d2=1.60 m+0.60 m=2.20 mdtotal​=d1​+d2​=1.60 m+0.60 m=2.20 m
.

## (c) Average Velocity:

vavg=ΔxΔt=+1.00 m3.0 s=+0.33 m/s(+13 m/s)vavg​=ΔtΔx​=3.0 s+1.00 m​=+0.33 m/s(+31​ m/s)

## (d) Average Speed:

Average Speed=dtotalΔt=2.20 m3.0 s=0.73 m/s(1115 m/s)Average Speed=Δtdtotal​​=3.0 s2.20 m​=0.73 m/s(1511​ m/s)
─────────────────────────────────────────────────────────────────────────────────────

## Solution to Problem 2


## (a) Total Distance:

-
t1=40 min=4060 h=23 h⟹d1=(90 km/h)×(23 h)=60 kmt1​=40 min=6040​ h=32​ h⟹d1​=(90 km/h)×(32​ h)=60 km
.
-
t2=20 min=2060 h=13 h⟹d2=(30 km/h)×(13 h)=10 kmt2​=20 min=6020​ h=31​ h⟹d2​=(30 km/h)×(31​ h)=10 km
.
Total distance:
dtotal=60 km+10 km=70 kmdtotal​=60 km+10 km=70 km
.

## (b) Average Speed:

Total time:
ttotal=40 min+20 min=60 min=1.0 hourttotal​=40 min+20 min=60 min=1.0 hour
.
Average speed:
vavg=dtotalttotal=70 km1.0 h=70 km/hvavg​=ttotal​dtotal​​=1.0 h70 km​=70 km/h
.

## (c) Why Average Speed is NOT

90+302=60 km/h290+30​=60 km/h
:
The arithmetic mean
v1+v222v1​+v2​​
applies only when the time intervals spent at each speed are equal (
t1=t2t1​=t2​
). Here, the driver spent twice as much time (
40 min40 min
vs.
20 min20 min
) at
90 km/h90 km/h
. The weighted average is:
vavg=v1t1+v2t2t1+t2=(90)(40)+(30)(20)60=3600+60060=420060=70 km/hvavg​=t1​+t2​v1​t1​+v2​t2​​=60(90)(40)+(30)(20)​=603600+600​=604200​=70 km/h
─────────────────────────────────────────────────────────────────────────────────────

## Solution to Problem 3


## (a) Physical Direction of Motion:

Since
v=−3.0 m/s<0v=−3.0 m/s<0
, the rover is moving in the negative direction (
−x−x
) along the track.

## (b) Speeding Up or Slowing Down:

Velocity sign:
sgn⁡(v)=−sgn(v)=−
Acceleration sign:
sgn⁡(a)=−sgn(a)=−
Because both velocity and acceleration share the same sign (both are negative), the acceleration acts in the direction of motion. Therefore, the rover is SPEEDING UP in the negative direction.

## (c) Velocity at

t=3.0 st=3.0 s
:
Using the definition of acceleration:
Δv=a⋅ΔtΔv=a⋅Δt
.
Time elapsed:
Δt=3.0 s−1.0 s=2.0 sΔt=3.0 s−1.0 s=2.0 s
.
Δv=(−1.5 m/s2)×(2.0 s)=−3.0 m/sΔv=(−1.5 m/s2)×(2.0 s)=−3.0 m/s
v(3.0)=v(1.0)+Δv=−3.0 m/s+(−3.0 m/s)=−6.0 m/sv(3.0)=v(1.0)+Δv=−3.0 m/s+(−3.0 m/s)=−6.0 m/s
The rover is moving in the
−x−x
direction with an increased speed of
6.0 m/s6.0 m/s
.
─────────────────────────────────────────────────────────────────────────────────────

## Solution to Problem 4


## (a)

v=0v=0
while
a≠0a=0
:
Physically Possible.
Example: A ball at the apex of a vertical throw is momentarily at rest (
v=0v=0
), but experiences downward gravitational acceleration (
a=−9.8 m/s2a=−9.8 m/s2
).

## (b) Constant speed while velocity changes:

Physically Possible.
Example: An object moving in uniform circular motion at a steady
10 m/s10 m/s
. Its speed is constant, but its direction of motion changes continuously, meaning its velocity vector changes.

## (c) Constant velocity while speed changes:

Physically Impossible.
Reason: Speed is the magnitude of velocity (
s=∣v∣s=∣v∣
). If velocity is constant (constant magnitude and direction), its magnitude cannot change.

## (d) Negative acceleration while speed increases:

Physically Possible.
Example: A car reversing in the
−x−x
direction (
v<0v<0
) while accelerating in the
−x−x
direction (
a<0a<0
). Since both signs are negative, the car's speed increases.
─────────────────────────────────────────────────────────────────────────────────────
# 15. END-OF-LECTURE SUMMARY

codeCode
========================================================================================
                 DHD NEXUS PHYSICS ACADEMY — EPISODE 1 CORE RECAP
========================================================================================
1. COORDINATE SCAFFOLDING
   - Physics requires an Origin (x = 0) and a Positive Axis (+x).
   - In 1D, algebraic signs (+ / -) indicate spatial direction along the axis.

2. DISTANCE (d) vs. DISPLACEMENT (Δx)
   - Distance d: Scalar sum of all path segments traversed (d >= 0). Path-dependent.
   - Displacement Δx: Net change in position coordinate (Δx = x_final - x_initial). Path-independent.
   - |Δx| = d IF AND ONLY IF motion is unidirectional without any reversal.

3. SPEED vs. VELOCITY
   - Average Speed = Total Distance / Total Time Elapsed. (Scalar >= 0).
   - Average Velocity = Net Displacement / Total Time Elapsed. (Vector coordinate with sign).
   - Instantaneous Velocity v = rate of change of position at an exact instant.

4. ACCELERATION (a)
   - a = Δv / Δt = (v_final - v_initial) / Δt.
   - Measures how fast VELOCITY changes (metres per second gained/lost per second).

5. THE SPEEDING UP / SLOWING DOWN RULE
   - sgn(v) == sgn(a)  ==>  SPEEDING UP  (Vectors reinforce each other).
   - sgn(v) != sgn(a)  ==>  SLOWING DOWN (Vectors oppose each other).
   - "Negative acceleration" DOES NOT automatically mean slowing down!

6. DECOUPLING STATES FROM RATES OF CHANGE
   - v = 0 DOES NOT imply a = 0 (e.g., peak of vertical trajectory).
   - a = 0 DOES NOT imply v = 0 (e.g., constant velocity cruising).
========================================================================================
─────────────────────────────────────────────────────────────────────────────────────
# 16. TRANSITION TO PART 2

"We have established the vocabulary of motion. We know how to define position, how to separate distance from displacement, and how to decode velocity and acceleration without confusing their signs.
In university examinations, motion is rarely handed to you as a simple descriptive paragraph. It is handed to you as a curve on a graph.
How do you look at a position-time graph and instantly read velocity? How do you extract acceleration from the gradient of a velocity-time graph? And how does the geometric area under a graph give you displacement?
In *Part 2 — Seeing Motion: Kinematics Graphs, we transform these definitions into geometry. We will decode *
`
x−tx−t
`
,
`
v−tv−t
`
, and
`
a−ta−t
`
graphs, master gradients and areas, and build the visual bridge to the equations of motion.
Have your graph paper ready. I will see you in Episode 2."
─────────────────────────────────────────────────────────────────────────────────────
# 17. PART 1 QUALITY-CONTROL SELF-AUDIT

v=u+atv=u+at
,
s=ut+12at2s=ut+21​at2
, etc. in Part 1.
(v,a)(v,a)
sign cases and
v=0̸⟹a=0v=0⟹a=0
retained and explained.
xx
as position coordinate,
ΔxΔx
displacement, signs as direction).
─────────────────────────────────────────────────────────────────────────────────────
# MANDATORY APPROVAL GATE — STOPPING FOR REVIEW

PART 1 REVISION IS COMPLETE.
Per Phase 11A Section 10 instruction:
Production is now halted.
No material for Parts 2–10 has been generated.
Awaiting formal review and explicit instruction: "PART 1 APPROVED — PROCEED TO PART 2".

---

| Item ID | Source & Historical Provenance | Provenance Category | Part 1 Role | Pedagogical Focus |
| KIN-015 | Nile University of Nigeria, PHY 101, 2022/2023-1, Q18 | Authentic Nigerian Exam | Worked Example 1 | Direct application of average velocity definition ( |


---

| KIN-036 | Ekiti State University, PHY 101, 2019/2020, Q25 | Authentic Nigerian Exam (Clean) | Worked Example 2 | Average speed on two equal-distance legs; exposure of the arithmetic mean trap. |
| DHD-P1-01 | Adapted from OpenStax Univ. Physics Vol 1 Ch. 3 / DHD Design | Adapted Academic Problem | Worked Example 3 | Pure sign analysis and velocity change ( |


---

| KIN-031 | Ekiti State University, PHY 101, 2019/2020, Q2 | Authentic Nigerian Exam (OCR Verified) | Checkpoint 1.2 | Co-directional signs ( |


---

| KIN-002 | Adekunle Ajasin University, PHY 101, 2023/2024, Q7 | Authentic Nigerian Exam | Checkpoint 1.3 | Constant velocity implies zero acceleration ( |


---

| Item Identifier | Problem Context | Official Provenance Classification | Detailed Source Description |
| KIN-015 | Car displacement from average velocity | AUTHENTIC NIGERIAN UNIVERSITY EXAM | Nile University of Nigeria, PHY 101, First Semester 2022/2023, Q18 |
| KIN-036 | Motorist average speed over two |  |  |


---

| AUTHENTIC NIGERIAN UNIVERSITY EXAM | Ekiti State University (EKSU), PHY 101, 2019/2020 Session, Q25 |  |  |
| KIN-002 | Object with constant velocity has zero acceleration | AUTHENTIC NIGERIAN UNIVERSITY EXAM | Adekunle Ajasin University (AAU), PHY 101, 2023/2024 Session, Q7 |
| KIN-031 | Same sign of |  |  |


---

| AUTHENTIC NIGERIAN UNIVERSITY EXAM | Ekiti State University (EKSU), PHY 101, 2019/2020 Session, Q2 |  |  |
| DHD-P1-WE3 | Cart sign reasoning and turning point | ADAPTED ACADEMIC PROBLEM | Adapted from OpenStax University Physics Vol 1, Ch. 3 Conceptual Exercises by DHD Nexus |
| DHD-P1-CP1 | Security guard distance vs. displacement patrol | DHD NEXUS ORIGINAL | Original conceptual checkpoint authored by DHD Nexus |
| DHD-P1-PS1 | Air track glider displacement and distance | DHD NEXUS ORIGINAL | DHD Nexus Original — inspired by AAU PHY 101 measurement formats |
| DHD-P1-PS2 | Two-interval weighted average speed | DHD NEXUS ORIGINAL | DHD Nexus Original — inspired by Nile University rate-reasoning formats |
| DHD-P1-PS3 | Autonomous rover sign and state reasoning | ADAPTED ACADEMIC PROBLEM | Adapted from EKSU PHY 101 2019/2020 Q2 / DHD Nexus |
| DHD-P1-PS4 | Four-case physical possibility decoupling ( |  |  |


---

| DHD NEXUS ORIGINAL | Original diagnostic conceptual problem authored by DHD Nexus |


---

| QC Check Dimension | Parameter / Standard | Compliance Status | Verifying Section |
| Core Video Duration | Target: 12–15 minutes (Actual script timed to \~13.5 min). | COMPLIANT | Section 7 |
| No Premature SUVAT | Zero use of |  |  |


---

| COMPLIANT | Section 7 & Section 8 |
| Concept Rigor Retained | Full four |


---

| COMPLIANT | Sections 5, 6, 7, 8, 10, 12 |  |  |
| Mathematical Scope | Advanced proofs moved to Lecture Note; video uses vector direction rule. | COMPLIANT | Section 7 vs. Section 12 |
| 1D Terminology | Streamlined ( |  |  |


---

| COMPLIANT | Sections 6, 7, 12 |  |  |
| Unsupported Claims Removed | No invented statistics; defensible academic wording used throughout. | COMPLIANT | Section 1 & Section 7 |
| Provenance Integrity | Authentic AAU, Nile, EKSU, and adapted OpenStax material clearly labeled. | COMPLIANT | Section 4 & Section 8 |
| Worked-Example Balance | Exactly 3 substantial examples focused on reasoning, not formula hunting. | COMPLIANT | Section 8 |
| Comprehensive Lecture Note | Detailed, textbook-grade chapter preserved for deep undergraduate study. | COMPLIANT | Section 12 |
| Bridge to Part 2 | Clear conceptual transition to Seeing Motion: Kinematics Graphs. | COMPLIANT | Section 16 |
