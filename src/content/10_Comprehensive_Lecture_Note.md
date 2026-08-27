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
