// ==================== PHY 102 QUESTION BANK ====================
// General Physics II - Electricity & Magnetism: Electrostatics, DC Circuits, Magnetic Fields, EM Induction

if (!window.questionBank) {
    window.questionBank = {};
}

window.questionBank["PHY 102"] = [
    // ==================== ELECTROSTATICS (Questions 1-25) ====================
    {
        question: "Like charges ______ and unlike charges ______.",
        options: ["attract, repel", "repel, attract", "repel, repel", "attract, attract"],
        answer: "B",
        explanation: "Like charges repel each other (positive-positive or negative-negative). Unlike charges attract each other (positive-negative)."
    },
    {
        question: "The fundamental unit of electric charge is the",
        options: ["Coulomb", "Electron", "Proton", "Neutron"],
        answer: "A",
        explanation: "The Coulomb (C) is the SI unit of electric charge. One electron has charge -1.6 × 10⁻¹⁹ C."
    },
    {
        question: "Coulomb's law states that the force between two point charges is",
        options: ["directly proportional to the square of the distance between them", "inversely proportional to the square of the distance between them", "directly proportional to the distance between them", "inversely proportional to the distance between them"],
        answer: "B",
        explanation: "Coulomb's law: F = k q₁q₂/r². Force is inversely proportional to the square of the distance."
    },
    {
        question: "The Coulomb constant k in SI units is approximately",
        options: ["9 × 10⁹ N·m²/C²", "9 × 10⁻⁹ N·m²/C²", "9 × 10⁹ C²/N·m²", "9 × 10⁻⁹ C²/N·m²"],
        answer: "A",
        explanation: "k = 1/(4πε₀) ≈ 9 × 10⁹ N·m²/C²."
    },
    {
        question: "The permittivity of free space ε₀ is approximately",
        options: ["8.85 × 10⁻¹² C²/N·m²", "8.85 × 10¹² C²/N·m²", "9 × 10⁹ C²/N·m²", "9 × 10⁻⁹ C²/N·m²"],
        answer: "A",
        explanation: "ε₀ = 8.85 × 10⁻¹² C²/(N·m²). It is related to k by k = 1/(4πε₀)."
    },
    {
        question: "The electric field E at a distance r from a point charge Q is given by",
        options: ["E = kQ/r²", "E = kQ/r", "E = kQr²", "E = kQ²/r²"],
        answer: "A",
        explanation: "The electric field magnitude is E = k|Q|/r², directed radially outward for positive charge."
    },
    {
        question: "The direction of the electric field due to a positive point charge is",
        options: ["radially inward", "radially outward", "tangential", "circular"],
        answer: "B",
        explanation: "A positive charge creates an electric field pointing radially away from it."
    },
    {
        question: "Electric potential V at a distance r from a point charge Q is",
        options: ["V = kQ/r", "V = kQ/r²", "V = kQ²/r", "V = kQr"],
        answer: "A",
        explanation: "V = kQ/r, where potential is zero at infinity. Potential is scalar (no direction)."
    },
    {
        question: "The unit of electric potential is",
        options: ["Volt (V)", "Coulomb (C)", "Newton (N)", "Joule (J)"],
        answer: "A",
        explanation: "1 Volt = 1 Joule/Coulomb. It measures electric potential energy per unit charge."
    },
    {
        question: "The relationship between electric field and potential is",
        options: ["E = -dV/dr", "E = dV/dr", "E = V/r", "E = Vr"],
        answer: "A",
        explanation: "E = -dV/dr, meaning the electric field points in the direction of decreasing potential."
    },
    {
        question: "Gauss's law relates the electric flux through a closed surface to",
        options: ["the charge enclosed", "the electric field", "the potential", "the magnetic field"],
        answer: "A",
        explanation: "Gauss's law: Φ_E = ∮ E·dA = Q_enclosed/ε₀."
    },
    {
        question: "Equipotential surfaces are surfaces where",
        options: ["the potential is constant", "the electric field is constant", "the charge is constant", "the force is constant"],
        answer: "A",
        explanation: "Equipotential surfaces have the same electric potential everywhere on the surface."
    },
    {
        question: "Electric field lines are always ______ to equipotential surfaces.",
        options: ["parallel", "perpendicular", "tangential", "at 45°"],
        answer: "B",
        explanation: "Electric field lines are always perpendicular to equipotential surfaces."
    },
    {
        question: "The electric field inside a conductor in electrostatic equilibrium is",
        options: ["zero", "maximum at the center", "infinite", "constant but non-zero"],
        answer: "A",
        explanation: "In electrostatic equilibrium, charges reside on the surface and the internal electric field is zero."
    },
    {
        question: "Excess charge on a conductor resides",
        options: ["uniformly throughout the volume", "only on the surface", "only at the center", "only at the edges"],
        answer: "B",
        explanation: "For a conductor in equilibrium, all excess charge resides on the outer surface."
    },
    {
        question: "Capacitance is defined as",
        options: ["C = Q/V", "C = V/Q", "C = QV", "C = Q²V"],
        answer: "A",
        explanation: "Capacitance C = Q/V, where Q is charge and V is potential difference. Unit: Farad (F)."
    },
    {
        question: "The capacitance of a parallel plate capacitor is given by",
        options: ["C = ε₀A/d", "C = ε₀d/A", "C = A/(ε₀d)", "C = ε₀Ad"],
        answer: "A",
        explanation: "C = ε₀A/d, where A is plate area and d is separation."
    },
    {
        question: "The energy stored in a capacitor is given by",
        options: ["U = ½CV²", "U = CV²", "U = ½Q²C", "U = QV"],
        answer: "A",
        explanation: "U = ½CV² = ½QV = Q²/(2C)."
    },
    {
        question: "A dielectric material inserted into a capacitor",
        options: ["increases capacitance", "decreases capacitance", "has no effect on capacitance", "changes the sign of charge"],
        answer: "A",
        explanation: "Dielectrics increase capacitance by a factor equal to the dielectric constant κ."
    },
    {
        question: "The dielectric constant κ is defined as",
        options: ["κ = C/C₀", "κ = C₀/C", "κ = ε₀/ε", "κ = 1/ε₀"],
        answer: "A",
        explanation: "κ = C/C₀, where C is capacitance with dielectric and C₀ is without. κ > 1 for insulators."
    },
    {
        question: "An electric dipole consists of",
        options: ["two equal and opposite charges separated by a small distance", "two like charges", "a single charge", "a magnetic pole pair"],
        answer: "A",
        explanation: "An electric dipole has +q and -q separated by a small distance d. Dipole moment p = qd."
    },
    {
        question: "The torque on an electric dipole in a uniform electric field is",
        options: ["τ = pE sin θ", "τ = pE cos θ", "τ = pE", "τ = 0"],
        answer: "A",
        explanation: "Torque τ = pE sin θ, tending to align the dipole with the field."
    },
    {
        question: "The potential energy of an electric dipole in an electric field is",
        options: ["U = -pE cos θ", "U = pE cos θ", "U = -pE sin θ", "U = pE sin θ"],
        answer: "A",
        explanation: "U = -p·E = -pE cos θ. Minimum when dipole aligns with field (θ = 0)."
    },
    {
        question: "The electric field due to an electric dipole at a point on its axis is proportional to",
        options: ["1/r³", "1/r²", "1/r", "1/r⁴"],
        answer: "A",
        explanation: "E ∝ 1/r³ for a dipole, compared to 1/r² for a point charge."
    },
    {
        question: "Electric field lines",
        options: ["cannot cross", "start on positive charges and end on negative charges", "are perpendicular to equipotentials", "all of the above"],
        answer: "D",
        explanation: "All statements are true properties of electric field lines."

    },

    // ==================== DC CIRCUITS (Questions 26-40) ====================
    {
        question: "Ohm's law states that",
        options: ["V = IR", "I = VR", "R = VI", "V = I/R"],
        answer: "A",
        explanation: "Ohm's law: V = IR, where V is voltage (volts), I is current (amperes), R is resistance (ohms)."
    },
    {
        question: "The unit of resistance is",
        options: ["Ohm (Ω)", "Volt (V)", "Ampere (A)", "Watt (W)"],
        answer: "A",
        explanation: "Resistance is measured in Ohms (Ω). 1 Ω = 1 V/A."
    },
    {
        question: "The resistance of a conductor depends on",
        options: ["length", "cross-sectional area", "resistivity of the material", "all of the above"],
        answer: "D",
        explanation: "R = ρL/A, where ρ is resistivity, L is length, A is cross-sectional area."
    },
    {
        question: "Kirchhoff's Current Law (KCL) states that",
        options: ["the sum of currents entering a junction equals the sum leaving", "the sum of voltages around a loop is zero", "V = IR", "P = IV"],
        answer: "A",
        explanation: "KCL is based on conservation of charge: Σ I_in = Σ I_out."
    },
    {
        question: "Kirchhoff's Voltage Law (KVL) states that",
        options: ["the sum of voltages around a closed loop is zero", "the sum of currents entering a junction equals the sum leaving", "V = IR", "P = IV"],
        answer: "A",
        explanation: "KVL is based on conservation of energy: Σ V = 0 around any closed loop."
    },
    {
        question: "Resistors in series have",
        options: ["the same current", "the same voltage", "the same power", "different currents"],
        answer: "A",
        explanation: "In series, current is the same through all resistors. Voltages divide proportionally to resistance."
    },
    {
        question: "The equivalent resistance of two resistors in series is",
        options: ["R_eq = R₁ + R₂", "R_eq = 1/R₁ + 1/R₂", "R_eq = R₁R₂/(R₁+R₂)", "R_eq = R₁ - R₂"],
        answer: "A",
        explanation: "For series resistors: R_eq = R₁ + R₂ + ..."
    },
    {
        question: "Resistors in parallel have",
        options: ["the same voltage", "the same current", "different voltages", "the same resistance"],
        answer: "A",
        explanation: "In parallel, voltage is the same across all resistors. Currents divide inversely to resistance."
    },
    {
        question: "The equivalent resistance of two resistors in parallel is",
        options: ["R_eq = R₁R₂/(R₁+R₂)", "R_eq = R₁ + R₂", "R_eq = 1/R₁ + 1/R₂", "R_eq = R₁ - R₂"],
        answer: "A",
        explanation: "For parallel resistors: 1/R_eq = 1/R₁ + 1/R₂, or R_eq = (R₁R₂)/(R₁+R₂)."
    },
    {
        question: "The power dissipated by a resistor is given by",
        options: ["P = I²R", "P = V²/R", "P = IV", "all of the above"],
        answer: "D",
        explanation: "All three formulas are equivalent using Ohm's law: P = IV = I²R = V²/R."
    },
    {
        question: "A battery with internal resistance r has terminal voltage V =",
        options: ["E - Ir", "E + Ir", "I(R+r)", "E/I"],
        answer: "A",
        explanation: "Terminal voltage V = E - Ir, where E is emf and I is current."
    },
    {
        question: "The Wheatstone bridge is used to measure",
        options: ["unknown resistance", "voltage", "current", "power"],
        answer: "A",
        explanation: "A Wheatstone bridge is balanced when R₁/R₂ = R₃/Rₓ, allowing precise measurement of unknown resistance."
    },
    {
        question: "The unit of electrical power is",
        options: ["Watt (W)", "Joule (J)", "Volt (V)", "Ampere (A)"],
        answer: "A",
        explanation: "1 Watt = 1 Joule/second = 1 Volt × 1 Ampere."
    },
    {
        question: "Ammeters are connected",
        options: ["in series with the circuit", "in parallel with the circuit", "across the load", "anywhere"],
        answer: "A",
        explanation: "Ammeters have very low resistance and must be connected in series to measure current."
    },
    {
        question: "Voltmeters are connected",
        options: ["in parallel across the component", "in series with the circuit", "anywhere", "between power and ground"],
        answer: "A",
        explanation: "Voltmeters have very high resistance and are connected in parallel to measure voltage drop."

    },

    // ==================== MAGNETIC FIELDS (Questions 41-60) ====================
    {
        question: "The unit of magnetic field is",
        options: ["Tesla (T)", "Gauss (G)", "both A and B", "Weber (Wb)"],
        answer: "C",
        explanation: "1 Tesla = 10,000 Gauss. Tesla is the SI unit."
    },
    {
        question: "Magnetic field lines",
        options: ["form closed loops", "start at north poles and end at south poles", "do not cross", "all of the above"],
        answer: "D",
        explanation: "Magnetic field lines form continuous closed loops, never cross, and emerge from north to south outside the magnet."
    },
    {
        question: "The force on a moving charge in a magnetic field is given by",
        options: ["F = qvB sin θ", "F = qE", "F = kq₁q₂/r²", "F = ma"],
        answer: "A",
        explanation: "Lorentz force: F = qvB sin θ, where θ is the angle between velocity and magnetic field."
    },
    {
        question: "The direction of the magnetic force on a moving positive charge is given by",
        options: ["right-hand rule", "left-hand rule", "Coulomb's law", "Ohm's law"],
        answer: "A",
        explanation: "The right-hand rule determines direction: thumb in velocity direction, fingers in B field, palm points to force."
    },
    {
        question: "A charge moving parallel to a magnetic field experiences",
        options: ["maximum force", "zero force", "minimum force", "circular motion"],
        answer: "B",
        explanation: "F = qvB sin θ. When θ = 0° (parallel), sin 0 = 0, so force = 0."
    },
    {
        question: "A charge moving perpendicular to a magnetic field moves in",
        options: ["a circle", "a straight line", "a parabola", "a helix"],
        answer: "A",
        explanation: "Perpendicular motion gives centripetal force causing circular motion: qvB = mv²/r."
    },
    {
        question: "The Biot-Savart law gives the magnetic field due to",
        options: ["a current element", "a point charge", "a capacitor", "a resistor"],
        answer: "A",
        explanation: "The Biot-Savart law: dB = (μ₀/4π) (I dl × r̂)/r², for a current element."
    },
    {
        question: "The magnetic field at the center of a circular loop of radius R carrying current I is",
        options: ["B = μ₀I/(2R)", "B = μ₀I/(2πR)", "B = μ₀I/(4πR)", "B = μ₀I/(R)"],
        answer: "A",
        explanation: "B = μ₀I/(2R) at the center of a single circular loop."
    },
    {
        question: "The magnetic field inside a long solenoid is",
        options: ["uniform", "B = μ₀nI", "directed along the axis", "all of the above"],
        answer: "D",
        explanation: "Solenoid field is uniform inside, B = μ₀nI where n = turns per unit length."
    },
    {
        question: "Ampère's law states that ∮ B·dl =",
        options: ["μ₀ I_enc", "μ₀ ε₀ dΦ_E/dt", "0", "Q_enc/ε₀"],
        answer: "A",
        explanation: "Ampère's law: ∮ B·dl = μ₀ I_enc, relating magnetic field to enclosed current."
    },
    {
        question: "The force between two parallel current-carrying wires is",
        options: ["attractive if currents are in the same direction", "repulsive if currents are opposite", "proportional to I₁I₂/d", "all of the above"],
        answer: "D",
        explanation: "F/L = μ₀ I₁I₂/(2πd). Same direction: attract; opposite: repel."
    },
    {
        question: "The magnetic moment of a current loop is",
        options: ["μ = IA", "μ = I/A", "μ = BA", "μ = NBA"],
        answer: "A",
        explanation: "Magnetic moment μ = IA, where I is current and A is area vector (direction given by right-hand rule)."
    },
    {
        question: "The torque on a current loop in a magnetic field is",
        options: ["τ = μB sin θ", "τ = μB cos θ", "τ = IAB", "τ = NIAB"],
        answer: "A",
        explanation: "τ = μB sin θ, tending to align the loop with the magnetic field."
    },
    {
        question: "The Hall effect produces a voltage perpendicular to",
        options: ["both current and magnetic field", "current only", "magnetic field only", "neither"],
        answer: "A",
        explanation: "The Hall voltage is perpendicular to both current and magnetic field directions."
    },
    {
        question: "The Earth's magnetic field approximates",
        options: ["a dipole field", "a monopole field", "a uniform field", "a zero field"],
        answer: "A",
        explanation: "Earth's magnetic field is approximately a dipole (like a bar magnet)."
    },
    {
        question: "Paramagnetic materials have",
        options: ["weak, positive susceptibility", "weak, negative susceptibility", "strong, permanent magnetism", "no magnetic properties"],
        answer: "A",
        explanation: "Paramagnets are weakly attracted to magnets with small positive χ (aluminum, platinum)."
    },
    {
        question: "Diamagnetic materials have",
        options: ["weak, negative susceptibility", "weak, positive susceptibility", "strong magnetism", "ferromagnetism"],
        answer: "A",
        explanation: "Diamagnets are weakly repelled by magnets (bismuth, copper, water)."
    },
    {
        question: "Ferromagnetic materials include",
        options: ["iron, nickel, cobalt", "aluminum, platinum", "copper, silver", "all metals"],
        answer: "A",
        explanation: "Iron, nickel, cobalt, and their alloys are ferromagnetic (strongly attracted, retain magnetism)."
    },
    {
        question: "The Curie temperature is the temperature above which",
        options: ["a ferromagnet becomes paramagnetic", "a paramagnet becomes ferromagnetic", "a diamagnet becomes magnetic", "magnetic domains align"],
        answer: "A",
        explanation: "Above Curie temperature, thermal energy disrupts domain alignment, destroying ferromagnetism."
    },
    {
        question: "Hysteresis in ferromagnets refers to",
        options: ["lag between magnetization and applied field", "permanent loss of magnetism", "domain formation", "magnetic saturation"],
        answer: "A",
        explanation: "Hysteresis shows the dependence of magnetization on the magnetic field history."

    },

    // ==================== ELECTROMAGNETIC INDUCTION (Questions 61-80) ====================
    {
        question: "Faraday's law states that the induced emf is proportional to",
        options: ["the rate of change of magnetic flux", "the magnetic field strength", "the current", "the resistance"],
        answer: "A",
        explanation: "ε = -dΦ_B/dt, where Φ_B = ∫ B·dA is magnetic flux."
    },
    {
        question: "Lenz's law states that the induced current opposes",
        options: ["the change that produced it", "the magnetic field", "the motion of the conductor", "the current in the circuit"],
        answer: "A",
        explanation: "Lenz's law gives the negative sign in Faraday's law: induced current creates a field opposing the flux change."
    },
    {
        question: "The unit of magnetic flux is",
        options: ["Weber (Wb)", "Tesla (T)", "Gauss (G)", "Henry (H)"],
        answer: "A",
        explanation: "1 Weber = 1 Tesla·m². It measures total magnetic field through an area."
    },
    {
        question: "Motional emf is produced when a conductor moves through a magnetic field given by",
        options: ["ε = Blv", "ε = Blv sin θ", "ε = Bvl", "all of the above"],
        answer: "D",
        explanation: "Motional emf ε = Blv for conductor moving perpendicular to field and length."
    },
    {
        question: "Self-inductance L is defined by",
        options: ["ε = -L dI/dt", "ε = L dI/dt", "Φ = LI", "both A and C"],
        answer: "D",
        explanation: "Self-inductance: Φ = LI and induced emf ε = -L dI/dt."
    },
    {
        question: "The unit of inductance is",
        options: ["Henry (H)", "Weber (Wb)", "Tesla (T)", "Ohm (Ω)"],
        answer: "A",
        explanation: "1 Henry = 1 Weber/Ampere = 1 Volt·second/Ampere."
    },
    {
        question: "The energy stored in an inductor is",
        options: ["U = ½LI²", "U = LI²", "U = ½CV²", "U = ½LI"],
        answer: "A",
        explanation: "Magnetic energy stored: U = ½LI², analogous to capacitor energy U = ½CV²."
    },
    {
        question: "Mutual inductance M between two coils is defined by",
        options: ["ε₂ = -M dI₁/dt", "ε₁ = -M dI₂/dt", "Φ₂ = MI₁", "all of the above"],
        answer: "D",
        explanation: "Mutual inductance describes how changing current in one coil induces emf in another."
    },
    {
        question: "A transformer works on the principle of",
        options: ["mutual induction", "self-induction", "electrostatic induction", "magnetic reluctance"],
        answer: "A",
        explanation: "Transformers use mutual induction between primary and secondary coils."
    },
    {
        question: "For an ideal transformer, the voltage ratio is",
        options: ["V₁/V₂ = N₁/N₂", "V₁/V₂ = N₂/N₁", "V₁/V₂ = I₁/I₂", "V₁/V₂ = I₂/I₁"],
        answer: "A",
        explanation: "V₁/V₂ = N₁/N₂. Step-up: N₂ > N₁ increases voltage; step-down decreases."
    },
    {
        question: "A step-up transformer",
        options: ["increases voltage, decreases current", "decreases voltage, increases current", "increases both voltage and current", "decreases both"],
        answer: "A",
        explanation: "For ideal transformer, power is conserved: V₁I₁ = V₂I₂."
    },
    {
        question: "Eddy currents are",
        options: ["induced circulating currents in conductors", "currents in the primary coil", "currents in transformers only", "direct currents"],
        answer: "A",
        explanation: "Eddy currents are undesirable circulating currents that cause energy loss as heat."
    },
    {
        question: "To reduce eddy current losses, transformer cores are",
        options: ["laminated", "made solid", "made of copper", "air-filled"],
        answer: "A",
        explanation: "Laminating the core insulates layers to break eddy current paths."
    },
    {
        question: "The back emf in a motor",
        options: ["opposes the applied voltage", "increases the current", "is always zero", "reduces efficiency"],
        answer: "A",
        explanation: "Back emf is the induced voltage that opposes the applied voltage, limiting current."
    },
    {
        question: "A generator converts",
        options: ["mechanical energy to electrical energy", "electrical energy to mechanical energy", "DC to AC", "AC to DC"],
        answer: "A",
        explanation: "Generators produce electrical energy from mechanical rotation via electromagnetic induction."
    },
    {
        question: "A motor converts",
        options: ["electrical energy to mechanical energy", "mechanical energy to electrical energy", "AC to DC", "DC to AC"],
        answer: "A",
        explanation: "Motors use magnetic forces on current-carrying conductors to produce rotational motion."
    },
    {
        question: "Maxwell's equations describe",
        options: ["electric and magnetic fields", "only electric fields", "only magnetic fields", "gravitational fields"],
        answer: "A",
        explanation: "Maxwell's four equations unify electricity, magnetism, and light as electromagnetic waves."
    },
    {
        question: "Gauss's law for magnetism states that",
        options: ["∮ B·dA = 0", "∮ E·dA = Q/ε₀", "∮ B·dl = μ₀ I", "∮ E·dl = -dΦ_B/dt"],
        answer: "A",
        explanation: "The absence of magnetic monopoles means net magnetic flux through any closed surface is zero."
    },
    {
        question: "Faraday's law in Maxwell's equations is",
        options: ["∮ E·dl = -dΦ_B/dt", "∮ B·dl = μ₀ I + μ₀ε₀ dΦ_E/dt", "∮ E·dA = Q/ε₀", "∮ B·dA = 0"],
        answer: "A",
        explanation: "This is the integral form of Faraday's law including the negative sign."
    },
    {
        question: "The displacement current term added by Maxwell is",
        options: ["μ₀ε₀ dΦ_E/dt", "μ₀ I", "ε₀ dΦ_B/dt", "0"],
        answer: "A",
        explanation: "Maxwell added displacement current to Ampère's law to make it consistent with charge conservation."

    },

    // ==================== AC CIRCUITS & EM WAVES (Questions 81-100) ====================
    {
        question: "In a purely resistive AC circuit, voltage and current are",
        options: ["in phase", "90° out of phase", "180° out of phase", "45° out of phase"],
        answer: "A",
        explanation: "For a resistor, V and I are in phase (θ = 0°)."
    },
    {
        question: "In a purely inductive AC circuit, voltage",
        options: ["leads current by 90°", "lags current by 90°", "is in phase with current", "lags by 180°"],
        answer: "A",
        explanation: "For an inductor, voltage leads current by 90° (V = L dI/dt)."
    },
    {
        question: "In a purely capacitive AC circuit, voltage",
        options: ["lags current by 90°", "leads current by 90°", "is in phase with current", "lags by 180°"],
        answer: "A",
        explanation: "For a capacitor, voltage lags current by 90° (I = C dV/dt)."
    },
    {
        question: "The capacitive reactance X_C is given by",
        options: ["X_C = 1/(ωC)", "X_C = ωC", "X_C = 1/(2πfC)", "both A and C"],
        answer: "D",
        explanation: "X_C = 1/(ωC) = 1/(2πfC). It decreases with increasing frequency."
    },
    {
        question: "The inductive reactance X_L is given by",
        options: ["X_L = ωL", "X_L = 1/(ωL)", "X_L = 2πfL", "both A and C"],
        answer: "D",
        explanation: "X_L = ωL = 2πfL. It increases with increasing frequency."
    },
    {
        question: "The impedance Z of an RLC series circuit is",
        options: ["Z = √[R² + (X_L - X_C)²]", "Z = R + X_L + X_C", "Z = √(R² + X_L² + X_C²)", "Z = R - (X_L - X_C)"],
        answer: "A",
        explanation: "Impedance combines resistance, inductive, and capacitive reactances vectorially."
    },
    {
        question: "Resonance in an RLC circuit occurs when",
        options: ["X_L = X_C", "R = 0", "f = 0", "X_L >> X_C"],
        answer: "A",
        explanation: "At resonance, X_L = X_C, impedance is minimum (= R), and current is maximum."
    },
    {
        question: "The resonant frequency of an RLC circuit is",
        options: ["f = 1/(2π√(LC))", "f = 2π√(LC)", "f = √(LC)", "f = 1/√(LC)"],
        answer: "A",
        explanation: "f₀ = 1/(2π√(LC)). At this frequency, X_L = X_C."
    },
    {
        question: "The RMS value of an AC sine wave is",
        options: ["V_rms = V_peak/√2", "V_rms = V_peak × √2", "V_rms = V_peak/2", "V_rms = V_peak × 2"],
        answer: "A",
        explanation: "For sinusoidal AC, V_rms = V_peak/√2 ≈ 0.707 V_peak."
    },
    {
        question: "The average power in an AC circuit is",
        options: ["P_avg = V_rms I_rms cos φ", "P_avg = V_peak I_peak", "P_avg = I²R", "both A and C"],
        answer: "D",
        explanation: "A gives general formula; C gives resistive power. cos φ is power factor."
    },
    {
        question: "The power factor is defined as",
        options: ["cos φ = R/Z", "cos φ = X_L/Z", "cos φ = X_C/Z", "cos φ = P_avg/(V_rms I_rms)"],
        answer: "A",
        explanation: "Power factor = cos φ = R/Z. Unity for purely resistive circuits."
    },
    {
        question: "Electromagnetic waves are produced by",
        options: ["accelerating charges", "stationary charges", "constant currents", "resistors"],
        answer: "A",
        explanation: "Accelerating charges produce changing electric and magnetic fields that propagate as EM waves."
    },
    {
        question: "Electromagnetic waves travel at speed",
        options: ["c = 1/√(μ₀ε₀) ≈ 3 × 10⁸ m/s", "c = μ₀ε₀", "c = √(μ₀/ε₀)", "c = 3 × 10⁶ m/s"],
        answer: "A",
        explanation: "Maxwell calculated c = 1/√(μ₀ε₀) = 3 × 10⁸ m/s, matching the speed of light."
    },
    {
        question: "In an electromagnetic wave, the E and B fields are",
        options: ["perpendicular to each other", "parallel to each other", "in opposite directions", "randomly oriented"],
        answer: "A",
        explanation: "E and B are perpendicular to each other and to the direction of propagation."
    },
    {
        question: "Electromagnetic waves are",
        options: ["transverse waves", "longitudinal waves", "both transverse and longitudinal", "neither"],
        answer: "A",
        explanation: "EM waves are transverse: oscillations perpendicular to propagation direction."
    },
    {
        question: "The electromagnetic spectrum in order of increasing wavelength is",
        options: ["gamma, X-ray, UV, visible, IR, microwave, radio", "radio, microwave, IR, visible, UV, X-ray, gamma", "visible, UV, IR, radio, gamma", "gamma, radio, visible, UV"],
        answer: "A",
        explanation: "Increasing wavelength: gamma (shortest) → radio (longest)."
    },
    {
        question: "Visible light has wavelengths approximately between",
        options: ["400-700 nm", "100-400 nm", "700-1000 nm", "1-10 mm"],
        answer: "A",
        explanation: "Visible spectrum: violet ~400 nm to red ~700 nm."
    },
    {
        question: "The Poynting vector S represents",
        options: ["energy flow per unit area per unit time", "electric field direction", "magnetic field direction", "charge density"],
        answer: "A",
        explanation: "S = (1/μ₀) E × B gives direction and magnitude of EM energy flow (W/m²)."
    },
    {
        question: "The average intensity of an EM wave is",
        options: ["I_avg = ½ cε₀ E₀²", "I_avg = ½ cε₀ E_rms²", "I_avg = E_rms B_rms/μ₀", "all of the above"],
        answer: "D",
        explanation: "All expressions are equivalent for the intensity of an EM wave."
    },
    {
        question: "Radiation pressure for a perfectly absorbing surface is",
        options: ["P = I/c", "P = 2I/c", "P = I/c²", "P = 2I/c²"],
        answer: "A",
        explanation: "Perfect absorber: P = I/c. Perfect reflector: P = 2I/c."
    }
];

// Total: 100 questions covering:
// 1-25: Electrostatics (Coulomb's law, E fields, potential, Gauss, capacitance, dipoles)
// 26-40: DC Circuits (Ohm's law, Kirchhoff's laws, resistors, power)
// 41-60: Magnetic Fields (Lorentz force, Biot-Savart, Ampère's law, materials)
// 61-80: Electromagnetic Induction (Faraday, Lenz, inductance, transformers, Maxwell)
// 81-100: AC Circuits & EM Waves (Reactance, impedance, resonance, EM spectrum)