// ==================== MTH 102 QUESTION BANK ====================
// Elementary Mathematics II – Questions from actual exam/revision material

if (!window.questionBank) {
    window.questionBank = {};
}

window.questionBank["MTH 102"] = [

    // ==================== FUNCTIONS & MAPPINGS (idx 0 – 7) ====================
    {
        question: "If f(x) = 2x + 1, find f(1)",
        options: ["1", "2", "3", "4"],
        answer: "C",
        explanation: "Plug in x = 1: f(1) = 2(1) + 1 = 3."
    },
    {
        question: "If f(x) = 2x + 7, what is f⁻¹(x)?",
        options: ["(x + 7) / 2", "(x − 7) / 2", "2x − 7", "(7 − x) / 2"],
        answer: "B",
        explanation: "Swap x and y: x = 2y + 7 → 2y = x − 7 → y = (x − 7) / 2."
    },
    {
        question: "__________ mapping is a type of mapping having different elements in the domain mapped to different elements in the codomain",
        options: ["Surjective mapping", "Bijective mapping", "Many-to-one mapping", "Injective mapping"],
        answer: "D",
        explanation: "Injective (one-to-one) mapping: distinct domain elements always map to distinct codomain elements."
    },
    {
        question: "When is a mapping said NOT to be a function?",
        options: ["Every element in the domain has exactly one image", "Some elements in the domain have no image", "Each element in the domain is mapped to two images in the codomain", "All elements map to the same image"],
        answer: "C",
        explanation: "A function must assign exactly ONE output to every input. If one domain element maps to two images, it fails the definition of a function."
    },
    {
        question: "If f(x) = 4x² + 5x − 3 and g(x) = 2, find f ∘ g",
        options: ["16", "21", "23", "25"],
        answer: "C",
        explanation: "g(x) = 2 (constant), so f ∘ g = f(2) = 4(2)² + 5(2) − 3 = 16 + 10 − 3 = 23."
    },
    {
        question: "If f(x) = 2x − 1 and g(x) = x − 1, find f(g(x))",
        options: ["2x − 1", "2x − 2", "2x − 3", "x − 2"],
        answer: "C",
        explanation: "Substitute g(x) into f: f(g(x)) = 2(x − 1) − 1 = 2x − 2 − 1 = 2x − 3."
    },
    {
        question: "The greatest integer that is less than or equal to −1.95 is",
        options: ["−1", "−2", "1", "2"],
        answer: "B",
        explanation: "This is the floor function ⌊−1.95⌋. On the number line, −1.95 sits between −2 and −1. The greatest integer ≤ −1.95 is −2."
    },
    {
        question: "The ceiling function ⌈−1.95⌉ equals",
        options: ["−2", "−1", "1", "2"],
        answer: "B",
        explanation: "⌈x⌉ = smallest integer ≥ x. −1.95 lies between −2 and −1, so the smallest integer that is ≥ −1.95 is −1."
    },

    // ==================== LIMITS & CONTINUITY (idx 8 – 13) ====================
    {
        question: "A function f(x) is said to have a limit at x = a if",
        options: [
            "f(a) is defined at that point",
            "The left-hand limit equals the right-hand limit",
            "The function is continuous everywhere",
            "The derivative exists at x = a"
        ],
        answer: "B",
        explanation: "lim_{x→a} f(x) exists only when lim_{x→a⁻} f(x) = lim_{x→a⁺} f(x) (left-hand limit = right-hand limit)."
    },
    {
        question: "lim_{x→∞} (4x² − x + 2) / (2x² + 4) =",
        options: ["0", "1", "2", "∞"],
        answer: "C",
        explanation: "Highest power is x² in both numerator and denominator. Divide leading coefficients: 4 / 2 = 2."
    },
    {
        question: "Find the singularity point of f(x) = x / (x − 2)",
        options: ["x = 0", "x = 1", "x = 2", "x = −2"],
        answer: "C",
        explanation: "A singularity occurs where the denominator = 0. x − 2 = 0 → x = 2, making the function undefined there."
    },
    {
        question: "A point where a function f(x) is not defined is called",
        options: ["A singularity", "A critical point", "An inflection point", "A saddle point"],
        answer: "A",
        explanation: "A singularity (or undefined point / point of discontinuity) is a value of x at which the function breaks down or is not defined."
    },
    {
        question: "A point in the intended domain where the function is undefined is best described as",
        options: ["A point of discontinuity", "A range element", "A turning point", "A zero of the function"],
        answer: "A",
        explanation: "If f is undefined at x = a (e.g. division by zero), that point is called a point of discontinuity or singularity."
    },
    {
        question: "The function f(x) = (x² − 4) / (x − 2) has what kind of discontinuity at x = 2?",
        options: ["Removable discontinuity (hole)", "Jump discontinuity", "Infinite discontinuity", "No discontinuity"],
        answer: "A",
        explanation: "Factor: (x−2)(x+2)/(x−2) = x+2, but f(2) is undefined. The limit exists (= 4) so this is a removable discontinuity — a hole that can be patched by redefining f(2) = 4."
    },

    // ==================== DIFFERENTIATION (idx 14) ====================
    {
        question: "Find dy/dx if y = (1 + x) / (1 − x)",
        options: ["1 / (1 − x)²", "2 / (1 − x)²", "(1 + x) / (1 − x)²", "2 / (1 + x)²"],
        answer: "B",
        explanation: "Quotient rule: dy/dx = [(1)(1−x) − (1+x)(−1)] / (1−x)² = [(1−x) + (1+x)] / (1−x)² = 2 / (1−x)²."
    },

    // ==================== APPLICATIONS OF DERIVATIVES (idx 15) ====================
    {
        question: "A maximum of a function f(x) can occur at",
        options: ["Any point where f(x) > 0", "A critical point where f'(x) = 0 or is undefined", "A point where f(x) = 0", "Any point on the graph"],
        answer: "B",
        explanation: "Maxima (and minima) occur at critical points — where f'(x) = 0 (stationary point) or f'(x) is undefined. Use f''(x) < 0 to confirm a maximum."
    },

    // ==================== INTEGRATION (idx 16 – 21) ====================
    {
        question: "∫ cos x dx =",
        options: ["−sin x + C", "sin x + C", "cos x + C", "−cos x + C"],
        answer: "B",
        explanation: "Standard result: ∫ cos x dx = sin x + C."
    },
    {
        question: "∫ sin x dx =",
        options: ["cos x + C", "−cos x + C", "sin x + C", "−sin x + C"],
        answer: "B",
        explanation: "Standard result: ∫ sin x dx = −cos x + C."
    },
    {
        question: "∫ cosec² x dx =",
        options: ["cot x + C", "−cot x + C", "tan x + C", "sec² x + C"],
        answer: "B",
        explanation: "Standard result: ∫ csc² x dx = −cot x + C (since d/dx(cot x) = −csc² x)."
    },
    {
        question: "∫ x⁻¹ dx =",
        options: ["x⁻² / 2 + C", "−x⁻² + C", "ln|x| + C", "eˣ + C"],
        answer: "C",
        explanation: "∫ 1/x dx = ln|x| + C. The power rule does NOT apply when n = −1; use the log rule instead."
    },
    {
        question: "Evaluate ∫ (x² − √x) / x dx",
        options: ["x² / 2 − 2√x + C", "x² / 2 + 2√x + C", "x − x^(1/2) + C", "x² − x^(1/2) + C"],
        answer: "A",
        explanation: "Simplify first: (x² − √x)/x = x − x^(−1/2). Then integrate: ∫x dx − ∫x^(−1/2) dx = x²/2 − 2x^(1/2) + C = x²/2 − 2√x + C."
    },
    {
        question: "Evaluate ∫ xe^(3x) dx",
        options: [
            "(1/3)xe^(3x) − (1/9)e^(3x) + C",
            "(1/3)xe^(3x) + (1/9)e^(3x) + C",
            "xe^(3x) − e^(3x) + C",
            "(1/9)xe^(3x) + C"
        ],
        answer: "A",
        explanation: "Integration by parts: let u = x, dv = e^(3x)dx → du = dx, v = e^(3x)/3. Then ∫xe^(3x)dx = (x/3)e^(3x) − ∫(1/3)e^(3x)dx = (1/3)xe^(3x) − (1/9)e^(3x) + C."
    }
];

// Total: 22 questions
// idx  0 –  7: Functions & Mappings (8 q)
// idx  8 – 13: Limits & Continuity (6 q)
// idx 14 – 14: Differentiation (1 q)
// idx 15 – 15: Applications of Derivatives (1 q)
// idx 16 – 21: Integration (6 q)
