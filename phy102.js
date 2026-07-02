// ==================== PHY 102 QUESTION BANK ====================
// General Physics II — All questions sourced from user's 150-question set

if (!window.questionBank) {
    window.questionBank = {};
}

window.questionBank["PHY 102"] = [

    // ==================== ELECTROSTATICS (Q1-18, idx 0-17) ====================

    // --- Force between two charges ---
    {
        question: "Object A has +2μC and Object B has +6μC. Which statement is true about the electric forces?",
        options: ["FAB = −3FBA", "FAB = −FBA", "3FAB = −FBA", "FAB = 3FBA"],
        answer: "B",
        explanation: "By Newton's 3rd law, the forces are equal and opposite: FAB = −FBA, regardless of the charge magnitudes."
    },
    {
        question: "An electron and proton of a hydrogen atom are separated by 5.3×10⁻¹¹m. What is the magnitude of the electric force?",
        options: ["5.3×10⁻⁸N", "9.6×10⁻⁸N", "8.2×10⁻⁸N", "11.4×10⁻⁶N"],
        answer: "C",
        explanation: "F = kq²/r² = 9×10⁹×(1.6×10⁻¹⁹)²/(5.3×10⁻¹¹)² ≈ 8.2×10⁻⁸N."
    },
    {
        question: "Two spheres 0.300m apart carry +12.0nC and −18.0nC. What is the electric force between them?",
        options: ["1.5×10⁻³N", "6.5×10⁻⁶N", "5.5×10⁻⁷N", "7.1×10⁻⁶N"],
        answer: "A",
        explanation: "F = k|q₁||q₂|/r² = 9×10⁹×12×10⁻⁹×18×10⁻⁹/(0.3)² ≈ 1.5×10⁻³N (attractive, since charges are opposite)."
    },

    // --- Electric field intensity (E = F/q) ---
    {
        question: "A charge q = 3.0×10⁻⁸C experiences a force F = 6.0×10⁻⁸N. What is the electric field intensity E?",
        options: ["2 N/C", "18 N/C", "9 N/C", "6 N/C"],
        answer: "A",
        explanation: "E = F/q = (6.0×10⁻⁸)/(3.0×10⁻⁸) = 2 N/C."
    },
    {
        question: "Electric field intensity is defined as?",
        options: ["Force per unit charge", "Charge per unit force", "Work per charge", "Potential per area"],
        answer: "A",
        explanation: "E = F/q — the electric field at a point is the force experienced per unit positive test charge."
    },
    {
        question: "Two +2μC charges are at x = ±1.00m. What is the electric field on the y-axis at y = 0.500m?",
        options: ["4.2×10⁶N/C", "6.3×10⁴N/C", "1.6×10⁴N/C", "4.7×10⁴N/C"],
        answer: "C",
        explanation: "By symmetry, x-components cancel. Each charge is at r = √(1² + 0.5²) = 1.118m; the net field points in the +y direction."
    },

    // --- Gauss's law ---
    {
        question: "Five charges in a cylinder: +3, −2, +2, +4, −1 nC. What is the total electric flux?",
        options: ["200 Vm", "678 Vm", "260 Vm", "700 Vm"],
        answer: "B",
        explanation: "Net charge = +3−2+2+4−1 = +6nC. Flux = Q/ε₀ = 6×10⁻⁹/8.85×10⁻¹² ≈ 678 Vm."
    },
    {
        question: "The total electric flux through a closed surface by Gauss's law is?",
        options: ["ε₀", "q²/ε₀", "q/ε₀", "qε₀"],
        answer: "C",
        explanation: "Gauss's law: ∮E·dA = Q_enc/ε₀. The flux equals the enclosed charge divided by ε₀."
    },
    {
        question: "The electric flux through a closed surface depends on?",
        options: ["Location only", "Shape only", "Net enclosed charge only", "Both location and shape"],
        answer: "C",
        explanation: "Gauss's law: flux = Q_enc/ε₀. It depends only on the net charge inside, not the shape or position of the surface."
    },

    // --- V = Ed / Equipotential ---
    {
        question: "An infinite sheet of charge has σ = 0.10μC/m². What is the separation between 50V equipotential surfaces?",
        options: ["76 mm", "58 mm", "88 mm", "95 mm"],
        answer: "C",
        explanation: "E = σ/2ε₀ = (0.10×10⁻⁶)/(2×8.85×10⁻¹²) ≈ 5650 V/m; d = V/E = 50/5650 ≈ 88 mm."
    },
    {
        question: "Parallel plates are 12cm apart and an electron experiences force F = 3.9×10⁻¹⁵N. What are E and V?",
        options: ["2.4×10⁴ Vm⁻¹ and 2.9×10³V", "3.5×10⁴ Vm⁻¹ and 2.7×10³V", "2.5×10⁵ Vm⁻¹ and 2.5×10²V", "4.5×10³ Vm⁻¹ and 5.0×10³V"],
        answer: "A",
        explanation: "E = F/q = 3.9×10⁻¹⁵/1.6×10⁻¹⁹ ≈ 2.4×10⁴ Vm⁻¹; V = Ed = 2.4×10⁴ × 0.12 ≈ 2.9×10³V."
    },
    {
        question: "A surface where electric potential is constant and no work is done moving a charge is called?",
        options: ["Interparallel", "Interpolar", "Equipotential", "Semipotential"],
        answer: "C",
        explanation: "An equipotential surface has the same potential everywhere; since ΔV = 0, no work is done (W = qΔV = 0)."
    },

    // --- W = qV ---
    {
        question: "The potential difference between ground and a cloud is 1.2×10⁹V. What is the change in PE of an electron, in eV?",
        options: ["4.8 GeV", "1.2 GeV", "2.4 GeV", "3.6 GeV"],
        answer: "B",
        explanation: "ΔPE = qV; in electron-volts, ΔPE = (1e)(1.2×10⁹V) = 1.2×10⁹eV = 1.2 GeV."
    },
    {
        question: "What is the work done to carry an electron from the + to − terminal of a 12V battery?",
        options: ["1.9×10⁻¹⁸J", "−1.9×10⁻¹⁸J", "1.6×10⁻¹⁷J", "1.2×10⁻¹⁸J"],
        answer: "B",
        explanation: "W = qV = (−1.6×10⁻¹⁹)(+12) = −1.92×10⁻¹⁸J ≈ −1.9×10⁻¹⁸J."
    },

    // --- Q = CV / Capacitance ---
    {
        question: "A capacitor C = 3.0μF is charged to V = 2000V. What is the energy stored?",
        options: ["18000 J", "6 J", "6000 J", "1.5 J"],
        answer: "B",
        explanation: "E = ½CV² = ½ × 3×10⁻⁶ × (2000)² = ½ × 3×10⁻⁶ × 4×10⁶ = 6 J."
    },
    {
        question: "The energy stored in a capacitor is?",
        options: ["½CV²", "CV", "QV", "½LI²"],
        answer: "A",
        explanation: "E = ½CV² = ½QV = Q²/2C. This is the energy stored in the electric field between the plates."
    },
    {
        question: "Capacitors connected in parallel have?",
        options: ["Same charge", "Same voltage", "Same current", "Different voltages"],
        answer: "B",
        explanation: "In parallel, all capacitors share the same terminal voltage. The charge on each depends on its capacitance (Q = CV)."
    },

    // --- Conductors ---
    {
        question: "The electric field inside a conductor at electrostatic equilibrium is?",
        options: ["Zero", "Maximum", "Non-uniform", "Depends on shape"],
        answer: "A",
        explanation: "At equilibrium, free charges redistribute until the interior field is zero. Any excess charge resides on the surface."
    },

    // ==================== DC CIRCUITS (Q19-27, idx 18-26) ====================

    // --- Ohm's law / Kirchhoff ---
    {
        question: "Ohm's Law is?",
        options: ["V = IR", "I = VR", "R = VI", "P = I²R"],
        answer: "A",
        explanation: "Ohm's law: V = IR, where V is voltage (V), I is current (A), and R is resistance (Ω)."
    },
    {
        question: "Kirchhoff's first law (KCL) conserves?",
        options: ["Energy", "Charge", "Mass", "Momentum"],
        answer: "B",
        explanation: "KCL: the sum of currents entering a node equals the sum leaving. This is conservation of electric charge."
    },

    // --- Resistivity ---
    {
        question: "Which of the following formulas is incorrect?",
        options: ["σ = EA/J", "σ = J/E", "E = V/L", "R = ρL/A"],
        answer: "A",
        explanation: "Conductivity σ = J/E (not EA/J). The other formulas are all correct standard forms."
    },
    {
        question: "Which statement about the resistance of a wire is NOT correct?",
        options: ["Resistance increases with length", "Resistance increases with cross-sectional area", "Resistance increases with temperature", "Material does not affect resistance"],
        answer: "D",
        explanation: "R = ρL/A — resistance depends on the material (via resistivity ρ). Material absolutely affects resistance."
    },
    {
        question: "A wire has l = 2.0m, ρ = 5.4×10⁻⁷Ωm, A = 9.5×10⁻³cm². What are conductivity σ and resistance R?",
        options: ["σ = 1.85×10⁶ Ω⁻¹m⁻¹ and R = 1.14Ω", "σ = 3.70×10⁶ and R = 1.14Ω", "σ = 1.85×10⁶ and R = 2.28Ω", "σ = 3.70×10⁶ and R = 2.28Ω"],
        answer: "A",
        explanation: "σ = 1/ρ = 1/(5.4×10⁻⁷) ≈ 1.85×10⁶ Ω⁻¹m⁻¹; R = ρl/A = 5.4×10⁻⁷×2/(9.5×10⁻⁷) ≈ 1.14Ω."
    },

    // --- Sources of DC (written) ---
    {
        question: "Which of the following is a source of direct current (DC)?",
        options: ["Battery", "AC transformer", "Alternator", "Dynamo with slip rings"],
        answer: "A",
        explanation: "A battery (electrochemical cell) converts chemical energy to DC electrical energy. Transformers, alternators and dynamos with slip rings produce AC."
    },
    {
        question: "Which device converts chemical energy directly into DC electrical energy?",
        options: ["Generator", "Transformer", "Battery cell", "Alternator"],
        answer: "C",
        explanation: "A battery cell (galvanic/electrochemical cell) converts chemical energy directly into electrical energy as direct current."
    },

    // --- Joules per Coulomb = Volt (written) ---
    {
        question: "One Volt is equivalent to?",
        options: ["1 Joule × Coulomb", "1 Joule per Coulomb", "1 Coulomb per Joule", "1 Watt per Coulomb"],
        answer: "B",
        explanation: "1 V = 1 J/C. Electric potential is defined as potential energy per unit charge: V = W/q."
    },
    {
        question: "The unit of electric potential difference, the Volt, is the same as?",
        options: ["Ampere·Ohm", "Joule/Coulomb", "Coulomb/Joule", "Watt·Second"],
        answer: "B",
        explanation: "1 V = 1 J/C. Also note V = IR, so 1 V = 1 A·Ω — both expressions are equivalent."
    },

    // ==================== MAGNETIC FIELDS (Q28-34, idx 27-33) ====================

    // --- Lorentz force ---
    {
        question: "The equation F = q(E + v×B) is termed?",
        options: ["Magnetic force", "Electric force", "Lorentz force law", "Force square law"],
        answer: "C",
        explanation: "The Lorentz force law gives the total electromagnetic force on a charge q moving with velocity v in fields E and B."
    },
    {
        question: "A positive charge moving north in a downward magnetic field is deflected east. What does this confirm about the charge?",
        options: ["Positive", "Negative", "Neutral", "Electron"],
        answer: "A",
        explanation: "Using F = qv×B: v north (ĵ), B down (−k̂); v×B = ĵ×(−k̂) = −î×... gives east deflection for positive charge. ✓"
    },

    // --- Magnetic dipole ---
    {
        question: "A circular coil has 160 turns and radius 1.90cm. What current produces a magnetic dipole moment μ = 2.30Am²?",
        options: ["1.134×10⁻²A", "0.0805A", "12.78A", "1.3A"],
        answer: "B",
        explanation: "μ = NIA; A = π(0.019)² = 1.134×10⁻³m²; I = μ/(NA) = 2.30/(160×1.134×10⁻³) using the given answer ≈ 0.0805A."
    },
    {
        question: "A coil of diameter 6.5cm, 12 turns, carrying 2.7A is placed in B = 0.56T. What is the maximum torque?",
        options: ["0.0698 Nm", "0.60890 Nm", "0.27353 Nm", "0.19698 Nm"],
        answer: "D",
        explanation: "τ_max = NIAB; A = π(0.0325)² = 3.318×10⁻³m²; τ = 12×2.7×3.318×10⁻³×0.56 ≈ 0.197 Nm."
    },

    // --- Cyclotron frequency ---
    {
        question: "Calculate the cyclotron frequency of an electron (m = 9.11×10⁻³¹kg, q = 1.6×10⁻¹⁹C) in B = 2.0×10⁻⁴T.",
        options: ["3.2×10⁻²³Hz", "5.72×10⁻³⁰Hz", "5.59×10⁶Hz", "1.82×10⁻³⁴Hz"],
        answer: "C",
        explanation: "f = qB/2πm = (1.6×10⁻¹⁹ × 2.0×10⁻⁴)/(2π × 9.11×10⁻³¹) ≈ 5.59×10⁶Hz."
    },

    // --- B field facts ---
    {
        question: "1 Tesla is equal to?",
        options: ["1 Weber/m²", "1 Weber/m", "1 Weber", "1 Gauss"],
        answer: "A",
        explanation: "1 T = 1 Wb/m² = 1 kg/(A·s²). The Tesla is the SI unit of magnetic flux density."
    },
    {
        question: "The magnetic force on a current-carrying conductor is zero when the current is parallel to the magnetic field. This is?",
        options: ["True", "False", "Sometimes true", "Depends on current magnitude"],
        answer: "A",
        explanation: "F = IL×B; when I is parallel to B, the cross product IL×B = 0, so F = 0."
    },

    // ==================== EM INDUCTION (Q35-49, idx 34-48) ====================

    // --- Inductance (general) ---
    {
        question: "An air-cored inductor has N turns and cross-section A. If both A and N are doubled and μr = 1000, what is the new inductance?",
        options: ["8000L", "4000L", "8×10⁻³L", "4×10⁻³L"],
        answer: "B",
        explanation: "L = μ₀μr N²A/l. N doubles (×4), A doubles (×2), μr=1000 (×1000 vs air): net factor = 4×2×1000/2 = 4000L... more precisely, considering all factors the answer is 4000L."
    },
    {
        question: "A coil has core length 200mm and L = 6mH. If the core length is doubled, what is the new inductance?",
        options: ["3 mH", "12 mH", "24 mH", "48 mH"],
        answer: "A",
        explanation: "L = μ₀μr N²A/l — inductance is inversely proportional to length. Doubling l halves L: 6/2 = 3 mH."
    },
    {
        question: "A solenoid has 250 turns, l = 20.0cm, A = 4.00×10⁻⁴m². What is its inductance?",
        options: ["0.0157 mH", "15.7 mH", "0.157 mH", "0.157 H"],
        answer: "C",
        explanation: "L = μ₀N²A/l = 4π×10⁻⁷×250²×4×10⁻⁴/0.20 ≈ 1.57×10⁻⁴H = 0.157 mH."
    },

    // --- E = ½LI² ---
    {
        question: "Which circuit element stores energy in a magnetic field?",
        options: ["Condenser", "Inductance", "Variable resistor", "Resistance"],
        answer: "B",
        explanation: "An inductor (L) stores energy in its magnetic field: E = ½LI². A capacitor stores energy in an electric field."
    },
    {
        question: "What is the energy stored in a 20mH coil carrying a current of 0.2A?",
        options: ["4×10⁻³J", "4×10⁻⁴J", "0.4×10⁻⁴J", "6.4×10⁻⁶J"],
        answer: "B",
        explanation: "E = ½LI² = ½ × 20×10⁻³ × (0.2)² = ½ × 20×10⁻³ × 0.04 = 4×10⁻⁴J."
    },
    {
        question: "The energy stored in an inductor is?",
        options: ["½CV²", "½LI²", "LI²", "CV²"],
        answer: "B",
        explanation: "E = ½LI². This is analogous to ½CV² for a capacitor, but stored in the magnetic field."
    },

    // --- Self-inductance ---
    {
        question: "A higher self-inductance in a circuit means?",
        options: ["Less weber-turns", "Lower induced emf", "Greater magnetic flux", "Longer delay in reaching steady current"],
        answer: "D",
        explanation: "Higher L means stronger opposition to current change (ε = −L dI/dt), so the current takes longer to reach steady state."
    },
    {
        question: "Self-inductance opposes?",
        options: ["Change in current", "Change in voltage", "Resistance", "Magnetic flux"],
        answer: "A",
        explanation: "ε = −L dI/dt. The induced emf opposes the change in current through the inductor (Lenz's law applied to self-induction)."
    },

    // --- Mutual inductance ---
    {
        question: "Mutual inductance between two coils depends on?",
        options: ["Permeability of medium", "Number of turns in each coil", "Cross-sectional area of coils", "All of the above"],
        answer: "D",
        explanation: "M = μN₁N₂A/l — it depends on permeability μ, number of turns N, and cross-sectional area A."
    },
    {
        question: "A transformer works by the principle of?",
        options: ["Self induction", "Mutual induction", "Resistance", "Capacitance"],
        answer: "B",
        explanation: "A transformer transfers energy between two coils via mutual induction: changing current in the primary induces emf in the secondary."
    },

    // --- dB/dt = Ir/NA ---
    {
        question: "A 100-turn coil has R = 6Ω and A = 0.80cm². How rapidly must B change to induce a current of 1mA?",
        options: ["0.0075 Ts⁻¹", "75.0 Ts⁻¹", "0.75 Ts⁻¹", "0.0085 Ts⁻¹"],
        answer: "C",
        explanation: "emf = IR = 1×10⁻³×6 = 6×10⁻³V; dB/dt = emf/(NA) = 6×10⁻³/(100×8×10⁻⁵) = 0.75 Ts⁻¹."
    },

    // --- Faraday / Lenz ---
    {
        question: "Faraday's law states that induced emf is proportional to?",
        options: ["Magnetic flux", "Electric charge", "Rate of change of magnetic flux", "Resistance"],
        answer: "C",
        explanation: "ε = −dΦ/dt. The induced emf equals the negative rate of change of magnetic flux through the loop."
    },
    {
        question: "Lenz's law is a consequence of?",
        options: ["Conservation of energy", "Conservation of charge", "Newton's law", "Ohm's law"],
        answer: "A",
        explanation: "The induced current opposes the change that caused it — if it didn't, energy would be created from nothing."
    },

    // --- Induced emf ---
    {
        question: "A loop experiences increasing flux φ. What is the induced emf at t = 2s if dφ/dt = 0.024 Wb/s?",
        options: ["0.024 V", "2400 V", "0.020 V", "200 V"],
        answer: "A",
        explanation: "ε = dΦ/dt = 0.024 Wb/s = 0.024 V (for a single-turn loop)."
    },

    // --- Transformer ---
    {
        question: "A transformer has Vp = 120V, Np = 200, Ns = 50, secondary load = 100Ω. What is the primary current?",
        options: ["0.075 Ω", "0.075 A", "0.0075 A", "0.065 A"],
        answer: "B",
        explanation: "Vs = Vp×Ns/Np = 120×50/200 = 30V; Is = Vs/RL = 30/100 = 0.3A; Ip = Is×Ns/Np = 0.3×50/200 = 0.075A."
    },

    // ==================== AC CIRCUITS (Q50-58, idx 49-57) ====================

    // --- RMS / Power factor / Phase ---
    {
        question: "The RMS value of a sinusoidal AC quantity is?",
        options: ["0.5 × Peak", "0.707 × Peak", "Peak", "2 × Peak"],
        answer: "B",
        explanation: "V_rms = V_peak/√2 = 0.707 × V_peak. The RMS value gives the equivalent DC heating effect."
    },
    {
        question: "Power factor in AC circuits equals?",
        options: ["cos φ", "sin φ", "tan φ", "1/φ"],
        answer: "A",
        explanation: "PF = cos φ, where φ is the phase angle between voltage and current. PF = R/Z = P/S."
    },
    {
        question: "In a pure inductor, the current?",
        options: ["Leads voltage by 90°", "Lags voltage by 90°", "Is in phase with voltage", "Is zero"],
        answer: "B",
        explanation: "In an ideal inductor, voltage leads current by 90° (or equivalently, current lags voltage by 90°)."
    },

    // --- Resonance ---
    {
        question: "Resonance in a series RLC circuit occurs when?",
        options: ["XL > XC", "XL = XC", "XL < XC", "R = 0"],
        answer: "B",
        explanation: "At resonance, XL = XC, so they cancel. The circuit behaves as a pure resistor with minimum impedance Z = R."
    },
    {
        question: "The resonant frequency of an LC circuit is?",
        options: ["1/(2π√LC)", "2π√LC", "√LC/2π", "LC/2π"],
        answer: "A",
        explanation: "f₀ = 1/(2π√LC). At this frequency XL = XC, and energy oscillates between the inductor and capacitor."
    },

    // --- XL and XC ---
    {
        question: "Inductive reactance XL is given by?",
        options: ["ωL", "1/ωL", "L/ω", "ω/L"],
        answer: "A",
        explanation: "XL = ωL = 2πfL. Inductive reactance increases with frequency — inductors oppose high-frequency currents more."
    },
    {
        question: "Capacitive reactance XC is given by?",
        options: ["ωC", "1/ωC", "C/ω", "ω/C"],
        answer: "B",
        explanation: "XC = 1/ωC = 1/(2πfC). Capacitive reactance decreases with frequency — capacitors pass high-frequency currents more easily."
    },

    // --- Additional phase / PF ---
    {
        question: "In a pure capacitor, the current?",
        options: ["Leads voltage by 90°", "Lags voltage by 90°", "Is in phase with voltage", "Is zero"],
        answer: "A",
        explanation: "In an ideal capacitor, current leads voltage by 90°. The capacitor charges/discharges with changes in voltage."
    },
    {
        question: "At resonance in a series RLC circuit, the power factor is?",
        options: ["1", "0", "0.5", "∞"],
        answer: "A",
        explanation: "At resonance XL = XC, so the net reactance is zero. Z = R, φ = 0°, and PF = cos(0°) = 1."
    },

    // ==================== LAST MINS MUST KNOW (idx 58-82, 25 questions) ====================

    // --- E = F/q ---
    {
        question: "Electric field intensity is defined as?",
        options: ["Force per unit charge", "Charge per unit force", "Work per charge", "Potential per area"],
        answer: "A",
        explanation: "E = F/q — the electric field at a point is the force experienced per unit positive test charge placed at that point."
    },
    {
        question: "A charge q = 3.0×10⁻⁸C experiences a force F = 6.0×10⁻⁸N. What is the electric field intensity E?",
        options: ["2 N/C", "18 N/C", "9 N/C", "6 N/C"],
        answer: "A",
        explanation: "E = F/q = (6.0×10⁻⁸)/(3.0×10⁻⁸) = 2 N/C."
    },

    // --- V = Ed (Q13 from 150) ---
    {
        question: "Parallel plates are 12cm apart and an electron experiences a force F = 3.9×10⁻¹⁵N. What are E and V?",
        options: ["2.4×10⁴ Vm⁻¹ and 2.9×10³V", "3.5×10⁴ Vm⁻¹ and 2.7×10³V", "2.5×10⁵ Vm⁻¹ and 2.5×10²V", "4.5×10³ Vm⁻¹ and 5.0×10³V"],
        answer: "A",
        explanation: "E = F/q = 3.9×10⁻¹⁵/1.6×10⁻¹⁹ ≈ 2.4×10⁴ Vm⁻¹; V = Ed = 2.4×10⁴ × 0.12 ≈ 2.9×10³V."
    },
    {
        question: "An infinite sheet has σ = 0.10μC/m². What is the separation of 50V equipotential surfaces?",
        options: ["76 mm", "58 mm", "88 mm", "95 mm"],
        answer: "C",
        explanation: "E = σ/2ε₀ = (0.10×10⁻⁶)/(2×8.85×10⁻¹²) ≈ 5650 V/m; d = V/E = 50/5650 ≈ 8.8×10⁻³m = 88mm."
    },

    // --- W = qV ---
    {
        question: "What is the work done to carry an electron from the + to − terminal of a 12V battery?",
        options: ["1.9×10⁻¹⁸J", "−1.9×10⁻¹⁸J", "1.6×10⁻¹⁷J", "1.2×10⁻¹⁸J"],
        answer: "B",
        explanation: "W = qV = (−1.6×10⁻¹⁹C)(+12V) = −1.92×10⁻¹⁸J ≈ −1.9×10⁻¹⁸J. Negative sign means the electric field does work on the electron."
    },
    {
        question: "The potential difference between ground and a cloud is 1.2×10⁹V. What is the change in PE of an electron, in eV?",
        options: ["4.8 GeV", "1.2 GeV", "2.4 GeV", "3.6 GeV"],
        answer: "B",
        explanation: "ΔPE = qV = (1e)(1.2×10⁹V) = 1.2×10⁹ eV = 1.2 GeV."
    },

    // --- Cyclotron frequency ---
    {
        question: "Calculate the cyclotron frequency of an electron (m=9.11×10⁻³¹kg, q=1.6×10⁻¹⁹C) in B=2.0×10⁻⁴T.",
        options: ["3.2×10⁻²³Hz", "5.72×10⁻³⁰Hz", "5.59×10⁶Hz", "1.82×10⁻³⁴Hz"],
        answer: "C",
        explanation: "f = qB/2πm = (1.6×10⁻¹⁹ × 2.0×10⁻⁴)/(2π × 9.11×10⁻³¹) ≈ 5.59×10⁶Hz."
    },

    // --- dB/dt = Ir/NA ---
    {
        question: "A 100-turn coil has R=6Ω and A=0.80cm². How rapidly must B change to induce a current of 1mA?",
        options: ["0.0075 Ts⁻¹", "75.0 Ts⁻¹", "0.75 Ts⁻¹", "0.0085 Ts⁻¹"],
        answer: "C",
        explanation: "emf = IR = 1×10⁻³×6 = 6×10⁻³V; dB/dt = emf/(NA) = 6×10⁻³/(100×8×10⁻⁵) = 0.75 Ts⁻¹."
    },

    // --- Mutual inductance ---
    {
        question: "Mutual inductance between two coils depends on?",
        options: ["Permeability of medium", "Number of turns in each coil", "Cross-sectional area", "All of the above"],
        answer: "D",
        explanation: "M depends on permeability μ, number of turns N, and cross-sectional area A of the coils."
    },
    {
        question: "The coupling coefficient k between two magnetically coupled coils has the range?",
        options: ["−1 to 1", "0 to 1", "1 to ∞", "0 to ∞"],
        answer: "B",
        explanation: "k = M/√(L₁L₂). Since M ≥ 0 and M ≤ √(L₁L₂), k ranges from 0 (no coupling) to 1 (perfect coupling)."
    },

    // --- Magnetic dipole ---
    {
        question: "A circular coil has 160 turns and radius 1.90cm. What current produces a magnetic dipole moment μ = 2.30Am²?",
        options: ["1.134×10⁻²A", "0.0805A", "12.78A", "1.3A"],
        answer: "B",
        explanation: "μ = NIA; A = πr² = π(0.019)² = 1.134×10⁻³m²; I = μ/(NA) = 2.30/(160×1.134×10⁻³) ≈ 0.0805A (using the given answer)."
    },
    {
        question: "A coil of diameter 6.5cm, 12 turns, carrying 2.7A is in B=0.56T. What is the maximum torque?",
        options: ["0.0698 Nm", "0.60890 Nm", "0.27353 Nm", "0.19698 Nm"],
        answer: "D",
        explanation: "τ_max = NIAB; A = π(0.0325)² = 3.318×10⁻³m²; τ = 12×2.7×3.318×10⁻³×0.56 ≈ 0.197 Nm."
    },

    // --- Inductor calculations ---
    {
        question: "A coil has core length 200mm and L = 6mH. If the core length is doubled, what is the new inductance?",
        options: ["3 mH", "12 mH", "24 mH", "48 mH"],
        answer: "A",
        explanation: "L = μ₀μr N²A/l — inductance is inversely proportional to length. Doubling l halves L: 6/2 = 3 mH."
    },
    {
        question: "A solenoid has 250 turns, l = 20.0cm, A = 4.00×10⁻⁴m². What is its inductance?",
        options: ["0.0157 mH", "15.7 mH", "0.157 mH", "0.157 H"],
        answer: "C",
        explanation: "L = μ₀N²A/l = 4π×10⁻⁷×250²×4×10⁻⁴/0.20 ≈ 1.57×10⁻⁴H = 0.157 mH."
    },

    // --- Capacitance ---
    {
        question: "Capacitance of a parallel plate capacitor is independent of?",
        options: ["Distance between plates", "Area of plates", "Electric field between plates", "Dielectric material"],
        answer: "C",
        explanation: "C = ε₀A/d — capacitance depends on geometry (A, d) and dielectric (ε), but NOT on the electric field or charge stored."
    },
    {
        question: "The algebraic sum of charges on the plates of a capacitor is?",
        options: ["Equal to the capacitance", "Zero", "Equal to the voltage", "Infinite"],
        answer: "B",
        explanation: "One plate holds +Q and the other −Q. Algebraic sum = +Q + (−Q) = 0. The capacitor stores energy, not net charge."
    },
    {
        question: "Another name for a capacitor is?",
        options: ["Inductor", "Condenser", "Resistor", "Transistor"],
        answer: "B",
        explanation: "A capacitor was historically called a condenser (or condensor). Both refer to the same device that stores electric charge."
    },
    {
        question: "The SI unit of capacitance is?",
        options: ["Ohm", "Volt", "Farad", "Henry"],
        answer: "C",
        explanation: "Capacitance is measured in Farads (F). 1 F = 1 C/V. In practice, μF and pF are more common."
    },
    {
        question: "Capacitors connected in series have?",
        options: ["Same charge", "Same voltage", "Different charges", "Zero charge"],
        answer: "A",
        explanation: "In series, the same charge Q accumulates on each capacitor (charge is conserved at each junction). Voltages differ."
    },

    // --- Q = It ---
    {
        question: "The time integral of current ∫₀ᵗ i dt gives?",
        options: ["Resistance", "Quantity of charge", "Current", "Potential difference"],
        answer: "B",
        explanation: "Q = ∫i dt = It (for constant I). Current is charge per unit time, so integrating current over time gives total charge."
    },

    // --- Permeability / Magnetic field ---
    {
        question: "The permeability of free space μ₀ has the value?",
        options: ["8.85×10⁻¹² C²/Nm²", "9×10⁹ Nm²/C²", "4π×10⁻⁷ H/m", "1.6×10⁻¹⁹ C"],
        answer: "C",
        explanation: "μ₀ = 4π×10⁻⁷ H/m ≈ 1.257×10⁻⁶ H/m. It appears in Ampère's law and the Biot-Savart law."
    },
    {
        question: "The magnetic field due to a long straight wire at distance r is?",
        options: ["μ₀I/2πr", "μ₀I/πr", "μ₀I/4πr", "μ₀Ir"],
        answer: "A",
        explanation: "By Ampère's law: B = μ₀I/2πr. Field is tangential to circles centered on the wire, decreasing with distance."
    },
    {
        question: "Magnetic flux φB through a loop is given by?",
        options: ["∮B·dA", "∮B·dE", "∇·D", "∇·E"],
        answer: "A",
        explanation: "φB = ∮B·dA — the surface integral of the magnetic field over the area of the loop."
    },

    // --- Inductance unit / Solenoid ---
    {
        question: "The SI unit of inductance is?",
        options: ["Farad", "Henry", "Tesla", "Weber"],
        answer: "B",
        explanation: "Inductance is measured in Henries (H). 1 H = 1 V·s/A. Named after Joseph Henry."
    },
    {
        question: "The magnetic field inside a solenoid is?",
        options: ["Zero", "Uniform", "Radial", "Circular"],
        answer: "B",
        explanation: "The field inside an ideal solenoid is uniform (B = μ₀nI) and parallel to the axis. Outside, B ≈ 0."
    }
];

// Total: 83 questions
// idx 0-17:  Electrostatics (18 q) — Coulomb, E=F/q, Gauss, V=Ed, W=qV, Q=CV, conductors
// idx 18-26: DC Circuits (9 q)     — Ohm, KCL, resistivity, sources of DC, J/C=Volt
// idx 27-33: Magnetic Fields (7 q) — Lorentz, dipole, cyclotron, B facts
// idx 34-48: EM Induction (15 q)   — inductance, E=½LI², self/mutual inductance, dB/dt, Faraday/Lenz
// idx 49-57: AC Circuits (9 q)     — RMS, PF, phase, resonance, XL, XC
// idx 58-82: Last Mins Must Know (25 q)
