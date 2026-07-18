// ==================== MTH 102 QUESTION BANK ====================
// Elementary Mathematics II - Calculus: Functions, Limits, Differentiation, Integration

if (!window.questionBank) {
    window.questionBank = {};
}

window.questionBank["MTH 102 PREV"] = [
    // ==================== FUNCTIONS AND GRAPHS (Questions 1-15) ====================
    {
        question: "A function f is defined as f(x) = 2x + 3. What is f(4)?",
        options: ["8", "11", "9", "7"],
        answer: "B",
        explanation: "f(4) = 2(4) + 3 = 8 + 3 = 11. A function maps an input x to an output f(x)."
    },
    {
        question: "The domain of a function f(x) = √(x - 5) is",
        options: ["x ≥ 5", "x > 5", "x ≤ 5", "all real numbers"],
        answer: "A",
        explanation: "The square root function requires the expression inside to be non-negative. So x - 5 ≥ 0 → x ≥ 5."
    },
    {
        question: "Which of the following represents a quadratic function?",
        options: ["f(x) = 2x + 1", "f(x) = x² - 4x + 3", "f(x) = 2ˣ", "f(x) = sin x"],
        answer: "B",
        explanation: "A quadratic function has degree 2: f(x) = ax² + bx + c. x² - 4x + 3 is quadratic."
    },
    {
        question: "The graph of y = x² is a",
        options: ["straight line", "parabola opening upward", "parabola opening downward", "circle"],
        answer: "B",
        explanation: "y = x² is a quadratic function that graphs as a U-shaped parabola opening upward with vertex at (0,0)."
    },
    {
        question: "If f(x) = x² + 1 and g(x) = 2x, then (f ∘ g)(x) is",
        options: ["2x² + 2", "4x² + 1", "2x² + 1", "x² + 2x + 1"],
        answer: "B",
        explanation: "(f ∘ g)(x) = f(g(x)) = f(2x) = (2x)² + 1 = 4x² + 1."
    },
    {
        question: "The range of the function f(x) = x² + 2 is",
        options: ["all real numbers", "y ≥ 2", "y ≤ 2", "y > 2"],
        answer: "B",
        explanation: "Since x² ≥ 0, the minimum value is 0 + 2 = 2. So range is y ≥ 2."
    },
    {
        question: "A function is one-to-one if",
        options: ["f(a) = f(b) implies a = b", "every horizontal line cuts the graph at most once", "both A and B", "neither A nor B"],
        answer: "C",
        explanation: "A one-to-one (injective) function has the property that different inputs give different outputs, and passes the horizontal line test."
    },
    {
        question: "The inverse of f(x) = 3x - 2 is",
        options: ["f⁻¹(x) = (x + 2)/3", "f⁻¹(x) = (x - 2)/3", "f⁻¹(x) = 3x + 2", "f⁻¹(x) = x/3 - 2"],
        answer: "A",
        explanation: "To find inverse: y = 3x - 2 → swap x and y: x = 3y - 2 → solve: 3y = x + 2 → y = (x + 2)/3."
    },
    {
        question: "The vertical line test determines whether a graph represents",
        options: ["a function", "a one-to-one function", "an inverse function", "a continuous function"],
        answer: "A",
        explanation: "If any vertical line intersects a graph more than once, the graph does not represent a function."
    },
    {
        question: "What type of function is f(x) = 3ˣ?",
        options: ["Linear", "Quadratic", "Exponential", "Logarithmic"],
        answer: "C",
        explanation: "f(x) = 3ˣ is an exponential function because the variable x is in the exponent."
    },
    {
        question: "The graph of y = |x| has a",
        options: ["smooth curve", "corner (cusp) at x = 0", "asymptote", "hole"],
        answer: "B",
        explanation: "The absolute value function y = |x| has a sharp corner at x = 0, making it non-differentiable there."
    },
    {
        question: "If f(x) is an even function, then f(-x) =",
        options: ["-f(x)", "f(x)", "0", "1/f(x)"],
        answer: "B",
        explanation: "Even functions are symmetric about the y-axis: f(-x) = f(x). Example: f(x) = x²."
    },
    {
        question: "The x-intercept of y = 2x - 6 is",
        options: ["3", "-3", "6", "-6"],
        answer: "A",
        explanation: "Set y = 0: 0 = 2x - 6 → 2x = 6 → x = 3."
    },
    {
        question: "The slope of the line through points (2,3) and (5,9) is",
        options: ["1", "2", "3", "4"],
        answer: "B",
        explanation: "Slope m = (y₂ - y₁)/(x₂ - x₁) = (9 - 3)/(5 - 2) = 6/3 = 2."
    },
    {
        question: "A polynomial of degree 3 is called a",
        options: ["linear function", "quadratic function", "cubic function", "quartic function"],
        answer: "C",
        explanation: "Degree 3 polynomials are cubic functions. Degree 1 is linear, degree 2 is quadratic, degree 4 is quartic."
    },

    // ==================== LIMITS AND CONTINUITY (Questions 16-25) ====================
    {
        question: "The limit of (x² - 4)/(x - 2) as x approaches 2 is",
        options: ["0", "2", "4", "undefined"],
        answer: "C",
        explanation: "Factor numerator: (x - 2)(x + 2)/(x - 2) = x + 2. As x → 2, limit = 4."
    },
    {
        question: "The limit of sin x / x as x approaches 0 is",
        options: ["0", "1", "∞", "undefined"],
        answer: "B",
        explanation: "This is a standard limit: lim_{x→0} sin x / x = 1."
    },
    {
        question: "A function f is continuous at x = a if",
        options: ["lim_{x→a} f(x) exists", "f(a) exists", "lim_{x→a} f(x) = f(a)", "all of the above"],
        answer: "D",
        explanation: "Continuity requires three conditions: limit exists, function exists, and they are equal."
    },
    {
        question: "The limit of (3x² + 2x - 1) as x approaches 2 is",
        options: ["15", "13", "17", "11"],
        answer: "A",
        explanation: "Substitute x = 2: 3(4) + 2(2) - 1 = 12 + 4 - 1 = 15."
    },
    {
        question: "lim_{x→∞} (1/x) equals",
        options: ["0", "1", "∞", "undefined"],
        answer: "A",
        explanation: "As x becomes infinitely large, 1/x approaches 0."
    },
    {
        question: "The vertical asymptote of f(x) = 1/(x - 3) is at",
        options: ["x = 0", "x = 3", "x = -3", "x = 1"],
        answer: "B",
        explanation: "Vertical asymptotes occur where denominator = 0 and numerator ≠ 0. Here x - 3 = 0 → x = 3."
    },
    {
        question: "A hole in a graph occurs when",
        options: ["both numerator and denominator have a common factor", "denominator = 0 but numerator ≠ 0", "function is undefined", "limit does not exist"],
        answer: "A",
        explanation: "A removable discontinuity (hole) occurs when a common factor cancels in numerator and denominator."
    },
    {
        question: "The horizontal asymptote of f(x) = (2x² + 1)/(x² - 4) is",
        options: ["y = 0", "y = 1", "y = 2", "y = -2"],
        answer: "C",
        explanation: "For rational functions where degrees are equal, HA = ratio of leading coefficients: 2/1 = 2."
    },
    {
        question: "lim_{x→0} (cos x - 1)/x equals",
        options: ["0", "1", "-1", "∞"],
        answer: "A",
        explanation: "This is a standard limit. Using L'Hôpital's rule or series expansion gives limit = 0."
    },
    {
        question: "The function f(x) = 1/x is discontinuous at",
        options: ["x = 0 only", "x = 1 only", "x = -1 only", "nowhere"],
        answer: "A",
        explanation: "f(x) = 1/x is undefined at x = 0, so it has an infinite discontinuity there."
    },

    // ==================== DIFFERENTIATION (Questions 26-45) ====================
    {
        question: "The derivative of f(x) = x³ is",
        options: ["3x²", "x²", "3x³", "x⁴"],
        answer: "A",
        explanation: "Using power rule: d/dx(xⁿ) = nxⁿ⁻¹, so d/dx(x³) = 3x²."
    },
    {
        question: "The derivative of f(x) = 5x⁴ is",
        options: ["20x³", "5x³", "20x⁴", "x³"],
        answer: "A",
        explanation: "d/dx(5x⁴) = 5·4x³ = 20x³."
    },
    {
        question: "The derivative of f(x) = eˣ is",
        options: ["xeˣ⁻¹", "eˣ", "ln x", "1/x"],
        answer: "B",
        explanation: "The exponential function eˣ is its own derivative: d/dx(eˣ) = eˣ."
    },
    {
        question: "The derivative of f(x) = ln x is",
        options: ["1/x", "x", "eˣ", "1/x²"],
        answer: "A",
        explanation: "d/dx(ln x) = 1/x for x > 0."
    },
    {
        question: "The derivative of sin x is",
        options: ["cos x", "-cos x", "sin x", "-sin x"],
        answer: "A",
        explanation: "d/dx(sin x) = cos x."
    },
    {
        question: "The derivative of cos x is",
        options: ["sin x", "-sin x", "cos x", "-cos x"],
        answer: "B",
        explanation: "d/dx(cos x) = -sin x."
    },
    {
        question: "Using the product rule, the derivative of f(x) = x² sin x is",
        options: ["2x sin x + x² cos x", "2x cos x", "x² cos x", "2x sin x - x² cos x"],
        answer: "A",
        explanation: "Product rule: (uv)' = u'v + uv'. Here u = x², v = sin x → u' = 2x, v' = cos x → derivative = 2x sin x + x² cos x."
    },
    {
        question: "Using the quotient rule, the derivative of f(x) = tan x is",
        options: ["sec² x", "csc² x", "sec x tan x", "cot x"],
        answer: "A",
        explanation: "tan x = sin x/cos x. Using quotient rule gives sec² x."
    },
    {
        question: "The chain rule is used when differentiating",
        options: ["products of functions", "quotients of functions", "composite functions", "constant functions"],
        answer: "C",
        explanation: "The chain rule differentiates composite functions: d/dx[f(g(x))] = f'(g(x))·g'(x)."
    },
    {
        question: "If y = (x² + 1)⁵, then dy/dx is",
        options: ["5(x² + 1)⁴", "10x(x² + 1)⁴", "5(x² + 1)⁴·2x", "Both B and C"],
        answer: "D",
        explanation: "Chain rule: dy/dx = 5(x² + 1)⁴ · 2x = 10x(x² + 1)⁴."
    },
    {
        question: "The derivative of f(x) = 4x³ - 2x² + 5x - 7 is",
        options: ["12x² - 4x + 5", "12x² - 4x + 5 - 7", "12x² + 4x + 5", "12x² - 4x - 5"],
        answer: "A",
        explanation: "Using power rule term by term: d/dx(4x³) = 12x², d/dx(-2x²) = -4x, d/dx(5x) = 5, d/dx(-7) = 0."
    },
    {
        question: "The second derivative of f(x) = x⁴ is",
        options: ["4x³", "12x²", "24x", "24x²"],
        answer: "B",
        explanation: "f'(x) = 4x³, f''(x) = 12x²."
    },
    {
        question: "If f(x) = x³ - 3x² + 2, the critical points occur where",
        options: ["x = 0 only", "x = 2 only", "x = 0 and x = 2", "x = 1 only"],
        answer: "C",
        explanation: "f'(x) = 3x² - 6x = 3x(x - 2) = 0 → x = 0 or x = 2."
    },
    {
        question: "The derivative of f(x) = √x is",
        options: ["1/(2√x)", "1/√x", "2/√x", "1/(2x)"],
        answer: "A",
        explanation: "√x = x^{1/2}, derivative = (1/2)x^{-1/2} = 1/(2√x)."
    },
    {
        question: "The derivative of f(x) = aˣ (where a > 0) is",
        options: ["aˣ ln a", "aˣ", "x aˣ⁻¹", "aˣ/log a"],
        answer: "A",
        explanation: "d/dx(aˣ) = aˣ ln a. This is a standard differentiation formula."
    },
    {
        question: "Implicit differentiation is used when",
        options: ["y is explicitly defined in terms of x", "y and x are intermingled in an equation", "the function is linear", "the function is exponential"],
        answer: "B",
        explanation: "Implicit differentiation is used when it's difficult or impossible to solve for y explicitly."
    },
    {
        question: "The derivative of f(x) = sec x is",
        options: ["sec x tan x", "tan x", "sec² x", "csc x cot x"],
        answer: "A",
        explanation: "d/dx(sec x) = sec x tan x."
    },
    {
        question: "The derivative of f(x) = ln(x² + 1) is",
        options: ["1/(x²+1)", "2x/(x²+1)", "2x ln(x²+1)", "2/(x²+1)"],
        answer: "B",
        explanation: "Using chain rule: d/dx[ln(u)] = u'/u. Here u = x²+1, u' = 2x, so derivative = 2x/(x²+1)."
    },
    {
        question: "If f(x) = e^{2x}, then f'(x) =",
        options: ["e^{2x}", "2e^{2x}", "2xe^{2x-1}", "2e^{x}"],
        answer: "B",
        explanation: "Chain rule: d/dx(e^{2x}) = e^{2x}·2 = 2e^{2x}."
    },
    {
        question: "The derivative of f(x) = arctan x is",
        options: ["1/(1+x²)", "1/(1-x²)", "1/√(1-x²)", "1/√(1+x²)"],
        answer: "A",
        explanation: "d/dx(arctan x) = 1/(1+x²). This is a standard inverse trigonometric derivative."

    },

    // ==================== APPLICATIONS OF DERIVATIVES (Questions 46-55) ====================
    {
        question: "The slope of the tangent line to y = x² at x = 2 is",
        options: ["2", "4", "6", "8"],
        answer: "B",
        explanation: "The derivative f'(x) = 2x gives the slope. At x = 2, slope = 4."
    },
    {
        question: "The equation of the tangent line to y = x² at (2,4) is",
        options: ["y = 4x - 4", "y = 4x - 8", "y = 2x - 4", "y = 2x"],
        answer: "A",
        explanation: "Slope = 4. Using point-slope: y - 4 = 4(x - 2) → y = 4x - 4."
    },
    {
        question: "A function is increasing on an interval if f'(x) is",
        options: ["positive", "negative", "zero", "undefined"],
        answer: "A",
        explanation: "If f'(x) > 0 on an interval, the function is increasing there."
    },
    {
        question: "The function f(x) = x² has a local minimum at",
        options: ["x = -1", "x = 0", "x = 1", "x = 2"],
        answer: "B",
        explanation: "f'(x) = 2x = 0 → x = 0. f''(x) = 2 > 0, so it's a local minimum."
    },
    {
        question: "The second derivative test determines whether a critical point is a",
        options: ["maximum or minimum", "point of inflection", "asymptote", "discontinuity"],
        answer: "A",
        explanation: "If f''(c) > 0, local minimum; if f''(c) < 0, local maximum; if f''(c) = 0, test is inconclusive."
    },
    {
        question: "A point where the concavity of a function changes is called a",
        options: ["critical point", "point of inflection", "stationary point", "turning point"],
        answer: "B",
        explanation: "A point of inflection is where the function changes from concave up to concave down or vice versa."
    },
    {
        question: "The function f(x) = x³ has a point of inflection at",
        options: ["x = -1", "x = 0", "x = 1", "x = 2"],
        answer: "B",
        explanation: "f''(x) = 6x = 0 → x = 0. Concavity changes from negative to positive, so it's an inflection point."
    },
    {
        question: "To find the maximum area of a rectangle with fixed perimeter, we use",
        options: ["differentiation", "integration", "limits", "series"],
        answer: "A",
        explanation: "Optimization problems use derivatives to find maximum or minimum values."
    },
    {
        question: "The velocity of a particle is the derivative of",
        options: ["acceleration", "position", "speed", "distance"],
        answer: "B",
        explanation: "Velocity = ds/dt, the derivative of position with respect to time."
    },
    {
        question: "The acceleration of a particle is the derivative of",
        options: ["position", "velocity", "speed", "displacement"],
        answer: "B",
        explanation: "Acceleration = dv/dt = d²s/dt², the derivative of velocity."
    },

    // ==================== INTEGRATION (Questions 56-75) ====================
    {
        question: "The integral ∫ x dx is",
        options: ["x²/2 + C", "x² + C", "2x² + C", "x³/3 + C"],
        answer: "A",
        explanation: "∫ xⁿ dx = xⁿ⁺¹/(n+1) + C. Here n = 1, so ∫ x dx = x²/2 + C."
    },
    {
        question: "The integral ∫ 1/x dx is",
        options: ["ln x + C", "eˣ + C", "1/x² + C", "x⁻² + C"],
        answer: "A",
        explanation: "∫ 1/x dx = ln|x| + C."
    },
    {
        question: "The integral ∫ eˣ dx is",
        options: ["eˣ + C", "xeˣ⁻¹ + C", "ln x + C", "1/eˣ + C"],
        answer: "A",
        explanation: "∫ eˣ dx = eˣ + C."
    },
    {
        question: "The integral ∫ cos x dx is",
        options: ["sin x + C", "-sin x + C", "cos x + C", "-cos x + C"],
        answer: "A",
        explanation: "∫ cos x dx = sin x + C."
    },
    {
        question: "The integral ∫ sin x dx is",
        options: ["cos x + C", "-cos x + C", "sin x + C", "-sin x + C"],
        answer: "B",
        explanation: "∫ sin x dx = -cos x + C."
    },
    {
        question: "The integral ∫ (3x² + 2x) dx is",
        options: ["x³ + x² + C", "3x³ + 2x² + C", "6x + 2 + C", "x³ + 2x² + C"],
        answer: "A",
        explanation: "∫ 3x² dx = x³, ∫ 2x dx = x², so total = x³ + x² + C."
    },
    {
        question: "Integration is the inverse operation of",
        options: ["addition", "multiplication", "differentiation", "exponentiation"],
        answer: "C",
        explanation: "Integration and differentiation are inverse operations (Fundamental Theorem of Calculus)."
    },
    {
        question: "The constant of integration C appears in",
        options: ["definite integrals", "indefinite integrals", "both", "neither"],
        answer: "B",
        explanation: "Indefinite integrals include +C because the derivative of any constant is zero."
    },
    {
        question: "Using substitution, ∫ 2x(x² + 1)⁴ dx =",
        options: ["(x²+1)⁵/5 + C", "(x²+1)⁵ + C", "2(x²+1)⁵/5 + C", "10(x²+1)⁴ + C"],
        answer: "A",
        explanation: "Let u = x²+1, du = 2x dx. Then ∫ u⁴ du = u⁵/5 + C = (x²+1)⁵/5 + C."
    },
    {
        question: "The integral ∫ sec² x dx is",
        options: ["tan x + C", "cot x + C", "sec x + C", "csc x + C"],
        answer: "A",
        explanation: "∫ sec² x dx = tan x + C, since d/dx(tan x) = sec² x."
    },
    {
        question: "The definite integral ∫₀¹ x² dx equals",
        options: ["1/3", "1/2", "1", "2/3"],
        answer: "A",
        explanation: "∫₀¹ x² dx = [x³/3]₀¹ = 1/3 - 0 = 1/3."
    },
    {
        question: "The Fundamental Theorem of Calculus connects",
        options: ["algebra and geometry", "differentiation and integration", "limits and continuity", "trigonometry and algebra"],
        answer: "B",
        explanation: "The Fundamental Theorem states that differentiation and integration are inverse operations."
    },
    {
        question: "The integral ∫₀^{π} sin x dx equals",
        options: ["0", "1", "2", "-1"],
        answer: "C",
        explanation: "∫₀^{π} sin x dx = [-cos x]₀^{π} = (-cos π) - (-cos 0) = (-(-1)) - (-1) = 1 + 1 = 2."
    },
    {
        question: "The integral ∫₁² 1/x dx equals",
        options: ["ln 2", "ln 2 - 1", "1", "ln 1"],
        answer: "A",
        explanation: "∫₁² 1/x dx = [ln x]₁² = ln 2 - ln 1 = ln 2."
    },
    {
        question: "Integration by parts formula is ∫ u dv =",
        options: ["uv + ∫ v du", "uv - ∫ v du", "u/v + ∫ v du", "u/v - ∫ v du"],
        answer: "B",
        explanation: "Integration by parts: ∫ u dv = uv - ∫ v du. This comes from the product rule."
    },
    {
        question: "For ∫ x eˣ dx, using integration by parts with u = x, dv = eˣ dx gives",
        options: ["xeˣ - eˣ + C", "xeˣ + eˣ + C", "x²eˣ/2 + C", "eˣ + C"],
        answer: "A",
        explanation: "u = x → du = dx, dv = eˣ dx → v = eˣ. Then ∫ x eˣ dx = xeˣ - ∫ eˣ dx = xeˣ - eˣ + C."
    },
    {
        question: "The integral ∫ 1/(x² + 1) dx is",
        options: ["arctan x + C", "arcsin x + C", "arccos x + C", "ln(x²+1) + C"],
        answer: "A",
        explanation: "∫ 1/(x²+1) dx = arctan x + C."
    },
    {
        question: "The integral ∫ 1/√(1 - x²) dx is",
        options: ["arcsin x + C", "arctan x + C", "arccos x + C", "ln x + C"],
        answer: "A",
        explanation: "∫ 1/√(1-x²) dx = arcsin x + C."
    },
    {
        question: "The integral ∫ csc² x dx is",
        options: ["-cot x + C", "cot x + C", "tan x + C", "-tan x + C"],
        answer: "A",
        explanation: "∫ csc² x dx = -cot x + C."
    },
    {
        question: "The integral ∫ sec x tan x dx is",
        options: ["sec x + C", "tan x + C", "csc x + C", "cot x + C"],
        answer: "A",
        explanation: "∫ sec x tan x dx = sec x + C."

    },

    // ==================== DEFINITE INTEGRALS & APPLICATIONS (Questions 76-90) ====================
    {
        question: "The definite integral ∫ₐᵇ f(x) dx represents",
        options: ["area under the curve from x = a to x = b", "slope of the tangent", "derivative at a point", "instantaneous rate of change"],
        answer: "A",
        explanation: "The definite integral gives the signed area between the curve and the x-axis from a to b."
    },
    {
        question: "The area under y = x² from x = 0 to x = 2 is",
        options: ["8/3", "4/3", "2", "4"],
        answer: "A",
        explanation: "Area = ∫₀² x² dx = [x³/3]₀² = 8/3."
    },
    {
        question: "The area between the curve y = x² and the x-axis from x = -1 to x = 1 is",
        options: ["2/3", "4/3", "2", "0"],
        answer: "A",
        explanation: "Area = ∫₋₁¹ x² dx = 2∫₀¹ x² dx = 2(1/3) = 2/3."
    },
    {
        question: "The area under y = sin x from x = 0 to x = π is",
        options: ["0", "1", "2", "π/2"],
        answer: "C",
        explanation: "∫₀^{π} sin x dx = [-cos x]₀^{π} = (-cos π) - (-cos 0) = 1 + 1 = 2."
    },
    {
        question: "The volume of revolution obtained by rotating y = x² about the x-axis from x = 0 to x = 1 is",
        options: ["π/5", "π/3", "π/2", "π"],
        answer: "A",
        explanation: "V = π∫₀¹ (x²)² dx = π∫₀¹ x⁴ dx = π[x⁵/5]₀¹ = π/5."
    },
    {
        question: "The disk method is used to find",
        options: ["area", "volume of revolution", "arc length", "surface area"],
        answer: "B",
        explanation: "The disk method (and washer method) calculates volumes of solids of revolution."
    },
    {
        question: "The Trapezoidal Rule approximates a definite integral using",
        options: ["rectangles", "trapezoids", "parabolas", "triangles"],
        answer: "B",
        explanation: "The Trapezoidal Rule uses trapezoids to approximate the area under a curve."
    },
    {
        question: "Simpson's Rule approximates a definite integral using",
        options: ["rectangles", "trapezoids", "parabolas", "cubes"],
        answer: "C",
        explanation: "Simpson's Rule uses parabolic arcs to approximate the integral."
    },
    {
        question: "The Trapezoidal Rule formula for n subintervals is",
        options: ["Δx/2 [f(x₀) + 2f(x₁) + ... + 2f(x_{n-1}) + f(x_n)]", "Δx[f(x₀) + f(x₁) + ... + f(x_n)]", "Δx/3[f(x₀) + 4f(x₁) + 2f(x₂) + ... + f(x_n)]", "Δx[f(x₀) + 2f(x₁) + ... + f(x_n)]"],
        answer: "A",
        explanation: "The Trapezoidal Rule weights endpoints once and interior points twice."
    },
    {
        question: "The average value of a function f on [a,b] is",
        options: ["(1/(b-a))∫ₐᵇ f(x) dx", "∫ₐᵇ f(x) dx", "(b-a)∫ₐᵇ f(x) dx", "∫ₐᵇ f(x) dx/(b-a)"],
        answer: "A",
        explanation: "Average value = (1/(b-a))∫ₐᵇ f(x) dx."
    },
    {
        question: "Improper integrals have",
        options: ["infinite limits of integration or discontinuous integrands", "only integer limits", "only finite limits", "no discontinuities"],
        answer: "A",
        explanation: "Improper integrals involve infinity or discontinuities within the interval."
    },
    {
        question: "The integral ∫₁^{∞} 1/x² dx",
        options: ["converges to 1", "diverges to ∞", "converges to 0", "diverges to -∞"],
        answer: "A",
        explanation: "∫₁^{∞} x^{-2} dx = [-1/x]₁^{∞} = 0 - (-1) = 1. It converges."
    },
    {
        question: "The integral ∫₁^{∞} 1/x dx",
        options: ["converges to 0", "diverges to ∞", "converges to 1", "converges to e"],
        answer: "B",
        explanation: "∫₁^{∞} 1/x dx = [ln x]₁^{∞} = ∞. This is the harmonic series divergence."
    },
    {
        question: "To find the displacement of a particle given velocity v(t), we use",
        options: ["∫ v(t) dt", "d/dt v(t)", "∫ a(t) dt", "d/dt position"],
        answer: "A",
        explanation: "Displacement = ∫ v(t) dt over the time interval."
    },
    {
        question: "The work done by a variable force F(x) from x = a to x = b is",
        options: ["∫ₐᵇ F(x) dx", "F(b) - F(a)", "F'(b) - F'(a)", "∫ₐᵇ F'(x) dx"],
        answer: "A",
        explanation: "Work = ∫ F(x) dx for a variable force."},

    // ==================== ADDITIONAL TOPICS (Questions 91-100) ====================
    {
        question: "L'Hôpital's Rule is used to evaluate limits that are",
        options: ["indeterminate forms (0/0 or ∞/∞)", "finite numbers", "infinite numbers", "continuous"],
        answer: "A",
        explanation: "L'Hôpital's Rule applies to limits of the form 0/0 or ∞/∞."
    },
    {
        question: "Using L'Hôpital's Rule, lim_{x→0} (sin x)/x =",
        options: ["0", "1", "∞", "undefined"],
        answer: "B",
        explanation: "Both numerator and denominator approach 0. Differentiating gives cos x/1 → cos 0 = 1."
    },
    {
        question: "The Mean Value Theorem states there exists c in (a,b) such that",
        options: ["f'(c) = (f(b)-f(a))/(b-a)", "f(c) = (f(b)+f(a))/2", "∫ₐᵇ f(x) dx = f(c)(b-a)", "f'(c) = 0"],
        answer: "A",
        explanation: "The MVT guarantees a point where the instantaneous rate equals the average rate."
    },
    {
        question: "Rolle's Theorem requires that f(a) = f(b). Then there exists c in (a,b) with",
        options: ["f'(c) = 0", "f(c) = 0", "f''(c) = 0", "f'(c) = f(c)"],
        answer: "A",
        explanation: "Rolle's Theorem is a special case of MVT where f(a)=f(b), giving f'(c)=0."
    },
    {
        question: "A function is concave up on an interval if f''(x) is",
        options: ["positive", "negative", "zero", "undefined"],
        answer: "A",
        explanation: "f''(x) > 0 indicates concave up (like a cup)."
    },
    {
        question: "The linear approximation of f(x) near x = a is",
        options: ["f(a) + f'(a)(x - a)", "f(a) - f'(a)(x - a)", "f'(a) + f(a)(x - a)", "f'(a)(x - a)"],
        answer: "A",
        explanation: "L(x) = f(a) + f'(a)(x - a) is the tangent line approximation."
    },
    {
        question: "Newton's Method approximates",
        options: ["roots of equations", "derivatives", "integrals", "areas"],
        answer: "A",
        explanation: "Newton's Method uses x_{n+1} = x_n - f(x_n)/f'(x_n) to find roots."
    },
    {
        question: "A sequence converges if it approaches a",
        options: ["finite limit", "infinite limit", "zero", "negative number"],
        answer: "A",
        explanation: "Convergence means the terms approach a finite number as n → ∞."
    },
    {
        question: "The sum of the infinite geometric series 1 + 1/2 + 1/4 + 1/8 + ... is",
        options: ["1", "2", "3", "∞"],
        answer: "B",
        explanation: "Sum = a/(1-r) = 1/(1-1/2) = 1/(1/2) = 2."
    },
    {
        question: "A power series ∑ a_n (x - c)ⁿ converges for",
        options: ["all x", "some interval centered at c", "no x", "only positive x"],
        answer: "B",
        explanation: "Power series converge within a radius of convergence centered at c."
    }
];

// Total: 100 questions covering:
// 1-15: Functions and Graphs
// 16-25: Limits and Continuity
// 26-45: Differentiation (20 questions)
// 46-55: Applications of Derivatives
// 56-75: Integration (20 questions)
// 76-90: Definite Integrals & Applications
// 91-100: Additional Topics (L'Hôpital, MVT, Series)