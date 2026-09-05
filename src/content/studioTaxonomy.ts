export type TaxonomyNode = {
  id: string;
  label: string;
  description?: string;
  children?: TaxonomyNode[];
  contentId?: string;
};

export const studioSubjects: TaxonomyNode[] = [
  { id: "physics", label: "Physics", description: "Classical, modern, and applied physics.", children: [
    { id: "classical-physics", label: "Classical Physics", description: "Foundational physics of motion, fields, waves, light, and thermal systems.", children: [
      { id: "classical-mechanics", label: "Classical Mechanics", description: "Kinematics, dynamics, analytical mechanics, fluids, and continuum mechanics.", children: [
        { id: "introductory-newtonian", label: "Introductory / Newtonian Mechanics", description: "Kinematics, Newton's Laws, conservation laws, rotation, projectiles, and gravitation.", children: [
          { id: "kinematics", label: "Kinematics", description: "Motion, displacement, velocity, acceleration, graphs, and SUVAT.", contentId: "part-1" },
          { id: "newtons-laws", label: "Newton's Laws", description: "Forces and the laws governing motion." },
          { id: "conservation-laws", label: "Conservation of Energy & Momentum", description: "Energy, momentum, impulse, and conservation principles." },
          { id: "rotational-motion", label: "Rotational Motion", description: "Angular motion, torque, and rotational dynamics." },
          { id: "projectile-motion", label: "Projectile Motion", description: "Two-dimensional motion under gravity." },
          { id: "gravitation", label: "Gravitation", description: "Gravitational fields, forces, and orbital motion." }
        ] },
        { id: "analytical-advanced", label: "Analytical / Advanced Mechanics", description: "Lagrangian and Hamiltonian formulations, generalized coordinates, and rigid-body dynamics.", children: [
          { id: "lagrangian-mechanics", label: "Lagrangian Mechanics" }, { id: "hamiltonian-mechanics", label: "Hamiltonian Mechanics" }, { id: "central-force-motion", label: "Central Force Motion" }, { id: "rigid-body-dynamics", label: "Rigid Body Dynamics" }, { id: "small-oscillations", label: "Small Oscillations" }
        ] },
        { id: "continuum-fluid", label: "Continuum & Fluid Mechanics", description: "Fluid statics, hydrodynamics, viscosity, surface tension, and elasticity.", children: [
          { id: "fluid-statics", label: "Fluid Statics" }, { id: "hydrodynamics", label: "Hydrodynamics" }, { id: "navier-stokes", label: "Navier–Stokes Equations" }, { id: "surface-tension", label: "Surface Tension & Viscosity" }, { id: "elasticity", label: "Elasticity" }
        ] }
      ] },
      { id: "electromagnetism", label: "Classical Electromagnetism", description: "Electric and magnetic fields, potentials, Maxwell's equations, and electromagnetic waves.", children: [
        { id: "electrostatics-magnetostatics", label: "Electrostatics & Magnetostatics", description: "Coulomb, Gauss, electric potential, Ampere, Biot–Savart, and materials." },
        { id: "electrodynamics", label: "Electrodynamics", description: "Faraday's Law, Maxwell's Equations, radiation, waves, and Poynting vectors." }
      ] },
      { id: "waves-acoustics", label: "Waves, Oscillations & Acoustics", description: "Oscillators, wave propagation, superposition, sound, resonance, and Doppler effects.", children: [
        { id: "harmonic-motion", label: "Harmonic Motion & Vibrations" }, { id: "wave-mechanics", label: "Wave Mechanics" }, { id: "acoustics", label: "Acoustics" }
      ] },
      { id: "optics", label: "Geometric & Physical Optics", description: "Ray and wave descriptions of light.", children: [ { id: "geometric-optics", label: "Geometric (Ray) Optics" }, { id: "physical-optics", label: "Physical (Wave) Optics" } ] },
      { id: "thermodynamics", label: "Classical Thermodynamics & Kinetic Theory", description: "Thermodynamic laws, heat engines, entropy, gases, and transport phenomena.", children: [ { id: "macroscopic-thermodynamics", label: "Macroscopic Thermodynamics" }, { id: "kinetic-theory", label: "Kinetic Theory of Gases" } ] }
    ] },
    { id: "modern-physics", label: "Modern Physics", description: "Quantum, particle, nuclear, and relativistic physics." },
    { id: "applied-physics", label: "Applied / Interdisciplinary Physics", description: "Computational physics, geophysics, and interdisciplinary applications." }
  ] },
  { id: "mathematics", label: "Mathematics", description: "Core undergraduate mathematics from calculus and algebra to statistics and logic.", children: [
    { id: "analysis-calculus", label: "Analysis & Calculus", description: "Calculus, real analysis, and complex analysis.", children: [ { id: "calculus", label: "Calculus (Single / Multivariable)" }, { id: "real-analysis", label: "Real Analysis" }, { id: "complex-analysis", label: "Complex Analysis" } ] },
    { id: "algebra-number-theory", label: "Algebra & Number Theory", description: "Linear algebra, abstract algebra, and number theory.", children: [ { id: "linear-algebra", label: "Linear Algebra" }, { id: "abstract-algebra", label: "Abstract Algebra" }, { id: "number-theory", label: "Number Theory" } ] },
    { id: "differential-applied", label: "Differential Equations & Applied Mathematics", description: "ODEs, PDEs, dynamical systems, and chaos.", children: [ { id: "odes", label: "Ordinary Differential Equations (ODEs)" }, { id: "pdes", label: "Partial Differential Equations (PDEs)" }, { id: "dynamical-systems", label: "Dynamical Systems & Chaos" } ] },
    { id: "geometry-topology", label: "Geometry & Topology", children: [ { id: "differential-geometry", label: "Differential Geometry" }, { id: "topology", label: "Topology" } ] },
    { id: "discrete-logic", label: "Discrete Mathematics & Logic", children: [ { id: "discrete-structures", label: "Discrete Structures" }, { id: "mathematical-logic", label: "Mathematical Logic & Foundations" } ] },
    { id: "probability-statistics", label: "Probability & Statistics", children: [ { id: "probability", label: "Probability Theory" }, { id: "mathematical-statistics", label: "Mathematical Statistics" } ] }
  ] }
];
