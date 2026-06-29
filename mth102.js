// ==================== MTH 102 QUESTION BANK ====================
// Elementary Mathematics II – 66 CBT-style questions

if (!window.questionBank) window.questionBank = {};

window.questionBank["MTH 102"] = [

    // ── FUNCTIONS & MAPPINGS  (idx 0 – 10) ───────────────────────────────
    {
        question: "If f(x) = 2x + 1, find f(1)",
        options: ["1", "2", "3", "4"],
        answer: "C",
        explanation: "Plug in: f(1) = 2(1) + 1 = 3."
    },
    {
        question: "If f(x) = 2x + 7, what is f⁻¹(x)?",
        options: ["(x + 7) / 2", "(x − 7) / 2", "2x − 7", "(7 − x) / 2"],
        answer: "B",
        explanation: "Trick: swap x and y → x = 2y + 7 → y = (x − 7) / 2."
    },
    {
        question: "__________ mapping is a type where distinct domain elements always map to distinct codomain elements",
        options: ["Surjective", "Bijective", "Many-to-one", "Injective"],
        answer: "D",
        explanation: "Injective = one-to-one. Different inputs → different outputs."
    },
    {
        question: "When is a mapping NOT a function?",
        options: [
            "Every element in the domain has exactly one image",
            "Some domain elements have no image",
            "One domain element maps to two different images",
            "All elements map to the same image"
        ],
        answer: "C",
        explanation: "A function must give exactly ONE output per input. Two images for one input → not a function."
    },
    {
        question: "If f(x) = 4x² + 5x − 3 and g(x) = 2, find f ∘ g",
        options: ["16", "21", "23", "25"],
        answer: "C",
        explanation: "g is always 2, so f(g) = f(2) = 4(4) + 5(2) − 3 = 16 + 10 − 3 = 23."
    },
    {
        question: "If f(x) = 2x − 1 and g(x) = x − 1, find f(g(x))",
        options: ["2x − 1", "2x − 2", "2x − 3", "x − 2"],
        answer: "C",
        explanation: "Substitute g into f: f(x−1) = 2(x−1) − 1 = 2x − 2 − 1 = 2x − 3."
    },
    {
        question: "The greatest integer that is less than or equal to −1.95 is",
        options: ["−1", "−2", "1", "2"],
        answer: "B",
        explanation: "Floor function ⌊−1.95⌋: the greatest integer ≤ −1.95 sits to the LEFT on the number line → −2."
    },
    {
        question: "The ceiling function ⌈−1.95⌉ equals",
        options: ["−2", "−1", "1", "2"],
        answer: "B",
        explanation: "⌈x⌉ = smallest integer ≥ x. −1.95 is between −2 and −1, so the ceiling is −1."
    },
    {
        question: "The domain of f(x) = √(x − 5) is",
        options: ["x ≥ 5", "x > 5", "x ≤ 5", "all real numbers"],
        answer: "A",
        explanation: "Square root requires inside ≥ 0 → x − 5 ≥ 0 → x ≥ 5."
    },
    {
        question: "The range of f(x) = x² + 2 is",
        options: ["all real numbers", "y ≥ 2", "y ≤ 2", "y > 2"],
        answer: "B",
        explanation: "x² ≥ 0 always, so minimum value = 0 + 2 = 2. Range: y ≥ 2."
    },
    {
        question: "An ideal vending machine maps each unique button to exactly one specific drink, and no two buttons give the same drink. What type of mapping is this?",
        options: ["Onto (Surjective)", "One-to-One (Injective)", "Constant Mapping", "Identity Mapping"],
        answer: "B",
        explanation: "Each button → exactly one drink (it's a function), and no two buttons give the same drink (different inputs → different outputs). That is the definition of One-to-One (Injective)."
    },

    // ── LIMITS & CONTINUITY  (idx 11 – 21) ───────────────────────────────
    {
        question: "A function f(x) is said to have a limit at x = a if",
        options: [
            "f(a) is defined",
            "The left-hand limit equals the right-hand limit",
            "The function is continuous everywhere",
            "The derivative exists at x = a"
        ],
        answer: "B",
        explanation: "Limit exists only when lim from left = lim from right at that point."
    },
    {
        question: "lim_{x→∞} (4x² − x + 2) / (2x² + 4) =",
        options: ["0", "1", "2", "∞"],
        answer: "C",
        explanation: "Same degree top and bottom → ratio of leading coefficients: 4 / 2 = 2."
    },
    {
        question: "Find the singularity point of f(x) = x / (x − 2)",
        options: ["x = 0", "x = 1", "x = 2", "x = −2"],
        answer: "C",
        explanation: "Set denominator = 0: x − 2 = 0 → x = 2. Function is undefined here."
    },
    {
        question: "A point where a function f(x) is not defined is called",
        options: ["A singularity", "A critical point", "An inflection point", "A saddle point"],
        answer: "A",
        explanation: "A singularity (or point of discontinuity) is where the function breaks down."
    },
    {
        question: "A point in the intended domain where the function is undefined is best described as",
        options: ["A point of discontinuity", "A range element", "A turning point", "A zero of the function"],
        answer: "A",
        explanation: "If f is undefined at x = a (e.g. denominator = 0), that's a point of discontinuity."
    },
    {
        question: "f(x) = (x² − 4) / (x − 2) has what kind of discontinuity at x = 2?",
        options: ["Removable (hole)", "Jump discontinuity", "Infinite discontinuity", "No discontinuity"],
        answer: "A",
        explanation: "Factor: (x−2)(x+2)/(x−2) → cancels → hole. If factor cancels → hole. If not → vertical asymptote."
    },
    {
        question: "lim_{x→2} (x² − 4) / (x − 2) =",
        options: ["0", "2", "4", "Undefined"],
        answer: "C",
        explanation: "Factor numerator: (x−2)(x+2)/(x−2) = x+2. Sub x=2: 2+2 = 4."
    },
    {
        question: "lim_{x→0} (sin x) / x =",
        options: ["0", "1", "∞", "Undefined"],
        answer: "B",
        explanation: "Standard limit — memorise: lim(x→0) sin x / x = 1."
    },
    {
        question: "lim_{x→0} (1 − cos x) / x =",
        options: ["0", "1", "−1", "∞"],
        answer: "A",
        explanation: "Standard limit — memorise: lim(x→0) (1 − cos x) / x = 0."
    },
    {
        question: "The horizontal asymptote of f(x) = (2x² + 1) / (x² − 4) is",
        options: ["y = 0", "y = 1", "y = 2", "No asymptote"],
        answer: "C",
        explanation: "Same degree → ratio of leading coefficients: 2/1 = 2. So y = 2."
    },
    {
        question: "lim_{x→∞} (6x² + 5x) / (2x² − 1) =",
        options: ["0", "3", "∞", "−5"],
        answer: "B",
        explanation: "Same degree top and bottom → ratio of leading coefficients: 6 / 2 = 3."
    },

    // ── DIFFERENTIATION  (idx 22 – 39) ───────────────────────────────────
    {
        question: "Find dy/dx if y = (1 + x) / (1 − x)",
        options: ["1 / (1−x)²", "2 / (1−x)²", "(1+x) / (1−x)²", "2 / (1+x)²"],
        answer: "B",
        explanation: "Quotient rule: [1·(1−x) − (1+x)·(−1)] / (1−x)² = [1−x+1+x] / (1−x)² = 2/(1−x)²."
    },
    {
        question: "If f(x) = x³, find f'(x)",
        options: ["x²", "3x", "3x²", "x⁴/4"],
        answer: "C",
        explanation: "Power rule: d/dx(xⁿ) = nxⁿ⁻¹ → d/dx(x³) = 3x²."
    },
    {
        question: "If f(x) = x⁵, find dy/dx",
        options: ["5x⁶", "5x⁴", "4x⁵", "x⁶/6"],
        answer: "B",
        explanation: "Power rule: 5x⁴. Multiply by exponent, reduce exponent by 1."
    },
    {
        question: "The derivative of √x is",
        options: ["1/(2√x)", "1/√x", "2√x", "√x/2"],
        answer: "A",
        explanation: "√x = x^(1/2). Power rule: (1/2)x^(−1/2) = 1/(2√x)."
    },
    {
        question: "What is d/dx(7)?",
        options: ["7", "7x", "1", "0"],
        answer: "D",
        explanation: "Constant rule: derivative of any constant = 0."
    },
    {
        question: "Find d/dx[(x² + 3)⁵]",
        options: ["5(x²+3)⁴", "5(x²+3)⁴ · 2x", "2x(x²+3)⁵", "10(x²+3)⁵"],
        answer: "B",
        explanation: "Chain rule: n(inside)^(n−1) × (inside derivative) = 5(x²+3)⁴ · 2x."
    },
    {
        question: "The derivative of sin x is",
        options: ["−sin x", "cos x", "−cos x", "sin x"],
        answer: "B",
        explanation: "Memorise: sin → cos → −sin → −cos → sin (cycle). First step: sin → cos."
    },
    {
        question: "The derivative of cos x is",
        options: ["sin x", "cos x", "−sin x", "−cos x"],
        answer: "C",
        explanation: "cos → −sin. The negative is crucial — don't miss it."
    },
    {
        question: "The derivative of tan x is",
        options: ["cot x", "sec x", "sec²x", "csc²x"],
        answer: "C",
        explanation: "d/dx(tan x) = sec²x. Also means ∫sec²x dx = tan x + C."
    },
    {
        question: "The derivative of ln x is",
        options: ["eˣ", "x", "1/x²", "1/x"],
        answer: "D",
        explanation: "d/dx(ln x) = 1/x. Quick: ln → flip it → 1/(same thing)."
    },
    {
        question: "If y = ln(x² + 1), find dy/dx",
        options: ["1/(x²+1)", "2x/(x²+1)", "2x·ln(x²+1)", "1/(2x)"],
        answer: "B",
        explanation: "d/dx[ln(f(x))] = f'(x)/f(x). Here f = x²+1, f' = 2x → answer: 2x/(x²+1)."
    },
    {
        question: "The derivative of eˣ is",
        options: ["xeˣ⁻¹", "eˣ", "eˣ/x", "ln x"],
        answer: "B",
        explanation: "eˣ is its own derivative. d/dx(eˣ) = eˣ — unique property."
    },
    {
        question: "If f(x) = e^(2x), find f'(x)",
        options: ["e^(2x)", "2eˣ", "2e^(2x)", "e^(2x)/2"],
        answer: "C",
        explanation: "Chain rule: e^(2x) × d/dx(2x) = e^(2x) × 2 = 2e^(2x)."
    },
    {
        question: "The derivative of arctan x (tan⁻¹ x) is",
        options: ["1/(1−x²)", "1/√(1−x²)", "1/(1+x²)", "−1/(1+x²)"],
        answer: "C",
        explanation: "Memorise: d/dx(tan⁻¹x) = 1/(1+x²). Also d/dx(sin⁻¹x) = 1/√(1−x²)."
    },
    {
        question: "Using the product rule, the derivative of x² sin x is",
        options: ["2x cos x", "x² cos x + 2x sin x", "2x sin x + x² cos x", "2x sin x − x² cos x"],
        answer: "C",
        explanation: "(uv)' = u'v + uv'. u=x²(u'=2x), v=sin x(v'=cos x) → 2x sin x + x² cos x."
    },
    {
        question: "If y = x / sin(x), which is the correct numerator when applying the quotient rule?",
        options: ["sin(x)(1) − x·cos(x)", "x·cos(x) − sin(x)(1)", "sin(x)(1) + x·cos(x)", "x(1) − sin(x)·cos(x)"],
        answer: "A",
        explanation: "Quotient rule numerator = v·u' − u·v'. Here u=x, u'=1, v=sin x, v'=cos x → sin(x)·1 − x·cos(x)."
    },
    {
        question: "Find dy/dx if y = ln(3x)",
        options: ["3/x", "1/(3x)", "1/x", "3x"],
        answer: "C",
        explanation: "Two ways: (1) ln(3x) = ln 3 + ln x → d/dx = 0 + 1/x = 1/x. (2) Chain rule: (1/3x)·3 = 1/x."
    },
    {
        question: "Find dy/dx if y = 2sin(x) + 3cos(x)",
        options: ["2cos(x) + 3sin(x)", "2cos(x) − 3sin(x)", "−2cos(x) + 3sin(x)", "5sin(x)cos(x)"],
        answer: "B",
        explanation: "d/dx(sin x) = cos x, d/dx(cos x) = −sin x. So dy/dx = 2cos(x) + 3·(−sin x) = 2cos(x) − 3sin(x)."
    },

    // ── APPLICATIONS OF DERIVATIVES  (idx 40 – 45) ───────────────────────
    {
        question: "A maximum of a function f(x) can occur at",
        options: ["Any point where f(x) > 0", "A critical point where f'(x) = 0", "A point where f(x) = 0", "Any point on the graph"],
        answer: "B",
        explanation: "Maxima and minima occur at critical (stationary) points where dy/dx = 0."
    },
    {
        question: "The slope of the tangent to y = x² at x = 2 is",
        options: ["2", "4", "6", "8"],
        answer: "B",
        explanation: "dy/dx = 2x. At x = 2: slope = 2(2) = 4. Tangent slope = derivative at that point."
    },
    {
        question: "The second derivative test: if f''(c) > 0 at a critical point, then x = c is a",
        options: ["Local maximum", "Local minimum", "Inflection point", "Saddle point"],
        answer: "B",
        explanation: "f''(c) > 0 → concave up (cup shape) → minimum. f''(c) < 0 → maximum."
    },
    {
        question: "To find stationary (turning) points, you",
        options: ["Set f(x) = 0", "Set f'(x) = 0 and solve for x", "Set f''(x) = 0", "Find where f is undefined"],
        answer: "B",
        explanation: "Differentiate → set dy/dx = 0 → solve for x. Then find y by substituting back."
    },
    {
        question: "If s(t) is the displacement of a particle, then velocity v(t) equals",
        options: ["∫s(t) dt", "s''(t)", "ds/dt", "s(t)/t"],
        answer: "C",
        explanation: "Velocity = rate of change of displacement = ds/dt (first derivative). Acceleration = d²s/dt²."
    },
    {
        question: "Find the x-coordinate of the turning point of y = x² − 8x + 12",
        options: ["x = 2", "x = 4", "x = 8", "x = 6"],
        answer: "B",
        explanation: "dy/dx = 2x − 8 = 0 → x = 4. Shortcut: x = −b/(2a) = −(−8)/(2×1) = 8/2 = 4."
    },

    // ── INTEGRATION  (idx 46 – 65) ────────────────────────────────────────
    {
        question: "∫cos x dx =",
        options: ["−sin x + C", "sin x + C", "cos x + C", "−cos x + C"],
        answer: "B",
        explanation: "∫cos x dx = sin x + C. (Reverse of d/dx(sin x) = cos x.)"
    },
    {
        question: "∫sin x dx =",
        options: ["cos x + C", "−cos x + C", "sin x + C", "−sin x + C"],
        answer: "B",
        explanation: "∫sin x dx = −cos x + C. Don't forget the negative."
    },
    {
        question: "∫csc²x dx =",
        options: ["cot x + C", "−cot x + C", "tan x + C", "sec²x + C"],
        answer: "B",
        explanation: "∫csc²x dx = −cot x + C. (Reverse of d/dx(cot x) = −csc²x.)"
    },
    {
        question: "∫x⁻¹ dx =",
        options: ["x⁻²/2 + C", "−x⁻² + C", "ln|x| + C", "eˣ + C"],
        answer: "C",
        explanation: "Power rule fails at n = −1. Special case: ∫1/x dx = ln|x| + C."
    },
    {
        question: "Evaluate ∫(x² − √x) / x dx",
        options: ["x²/2 − 2√x + C", "x²/2 + 2√x + C", "x − x^(1/2) + C", "x² − x^(1/2) + C"],
        answer: "A",
        explanation: "Simplify first: (x²−√x)/x = x − x^(−1/2). Then integrate: x²/2 − 2x^(1/2) + C = x²/2 − 2√x + C."
    },
    {
        question: "Evaluate ∫xe^(3x) dx",
        options: [
            "(1/3)xe^(3x) − (1/9)e^(3x) + C",
            "(1/3)xe^(3x) + (1/9)e^(3x) + C",
            "xe^(3x) − e^(3x) + C",
            "(1/9)xe^(3x) + C"
        ],
        answer: "A",
        explanation: "Parts: u=x, dv=e^(3x)dx → v=e^(3x)/3. → (x/3)e^(3x) − ∫(1/3)e^(3x)dx = (1/3)xe^(3x) − (1/9)e^(3x) + C."
    },
    {
        question: "∫x² dx =",
        options: ["2x + C", "x³/3 + C", "x³ + C", "3x + C"],
        answer: "B",
        explanation: "Power rule: ∫xⁿ dx = x^(n+1)/(n+1) + C. For n=2: x³/3 + C."
    },
    {
        question: "∫x⁴ dx =",
        options: ["4x³ + C", "x⁵ + C", "x⁵/5 + C", "x³/3 + C"],
        answer: "C",
        explanation: "∫x⁴ dx = x⁵/5 + C. Add 1 to exponent, divide by new exponent."
    },
    {
        question: "∫sec²x dx =",
        options: ["−cot x + C", "tan x + C", "sec x + C", "csc x + C"],
        answer: "B",
        explanation: "∫sec²x dx = tan x + C. (Reverse of d/dx(tan x) = sec²x.)"
    },
    {
        question: "∫sec x tan x dx =",
        options: ["tan x + C", "csc x + C", "sec x + C", "cot x + C"],
        answer: "C",
        explanation: "∫sec x tan x dx = sec x + C. (Reverse of d/dx(sec x) = sec x tan x.)"
    },
    {
        question: "∫1/(x² + 1) dx =",
        options: ["arcsin x + C", "ln(x²+1) + C", "arctan x + C", "2x/(x²+1) + C"],
        answer: "C",
        explanation: "Standard result: ∫1/(x²+1) dx = arctan x + C. Memorise."
    },
    {
        question: "∫1/√(1 − x²) dx =",
        options: ["arctan x + C", "arcsin x + C", "arccos x + C", "ln|x| + C"],
        answer: "B",
        explanation: "Standard result: ∫1/√(1−x²) dx = arcsin x + C. Memorise."
    },
    {
        question: "Using substitution, ∫2x(x² + 1)⁴ dx =",
        options: ["(x²+1)⁵ + C", "(x²+1)⁵/5 + C", "2(x²+1)⁵/5 + C", "10(x²+1)³ + C"],
        answer: "B",
        explanation: "Spot f'(x)·[f(x)]ⁿ pattern: let u=x²+1, du=2x dx → ∫u⁴ du = u⁵/5 + C = (x²+1)⁵/5 + C."
    },
    {
        question: "Using integration by parts, ∫x eˣ dx =",
        options: ["xeˣ + eˣ + C", "xeˣ − eˣ + C", "x²eˣ/2 + C", "eˣ + C"],
        answer: "B",
        explanation: "∫u dv = uv − ∫v du. u=x(du=dx), dv=eˣdx(v=eˣ) → xeˣ − ∫eˣdx = xeˣ − eˣ + C."
    },
    {
        question: "∫₀¹ x² dx =",
        options: ["1", "1/2", "1/3", "2/3"],
        answer: "C",
        explanation: "[x³/3]₀¹ = 1/3 − 0 = 1/3. Shortcut: ∫₀¹ xⁿ dx = 1/(n+1). For n=2: 1/3."
    },
    {
        question: "∫sin x cos x dx =",
        options: ["sin²x + C", "(1/2)sin²x + C", "−(1/2)cos²x + C", "Both B and C are correct"],
        answer: "D",
        explanation: "Let u = sin x, du = cos x dx → ∫u du = u²/2 + C = (1/2)sin²x + C. Equivalently −(1/2)cos²x + C. Both are correct."
    },
    {
        question: "∫3sin(2x + 3) dx =",
        options: ["3cos(2x+3) + C", "−(3/2)cos(2x+3) + C", "(3/2)cos(2x+3) + C", "−3cos(2x+3) + C"],
        answer: "B",
        explanation: "Rule: ∫sin(ax+b) dx = −(1/a)cos(ax+b) + C. Here a = 2 → 3 × [−(1/2)cos(2x+3)] = −(3/2)cos(2x+3) + C."
    },
    {
        question: "∫sin x / cos x dx =",
        options: ["ln|sin x| + C", "ln|cos x| + C", "−ln|cos x| + C", "−ln|sin x| + C"],
        answer: "C",
        explanation: "sin x/cos x = tan x. Let u = cos x, du = −sin x dx → −∫(1/u)du = −ln|cos x| + C. Also written as ln|sec x| + C."
    },
    {
        question: "∫₀^(π/2) sin x dx =",
        options: ["0", "1", "2", "π/2"],
        answer: "B",
        explanation: "[−cos x]₀^(π/2) = (−cos π/2) − (−cos 0) = −0 − (−1) = 1."
    },
    {
        question: "∫(2x + 1)sin(x² + x + 1) dx =",
        options: ["cos(x²+x+1) + C", "−cos(x²+x+1) + C", "(1/2)cos(x²+x+1) + C", "sin(x²+x+1) + C"],
        answer: "B",
        explanation: "Spot the pattern: derivative of (x²+x+1) = 2x+1 ✓. Pattern f'(x)·sin(f(x)) → −cos(f(x)) + C."
    }
];

// Total: 66 questions
// idx  0 – 10: Functions & Mappings (11 q)
// idx 11 – 21: Limits & Continuity (11 q)
// idx 22 – 39: Differentiation (18 q)
// idx 40 – 45: Applications of Derivatives (6 q)
// idx 46 – 65: Integration (20 q)
