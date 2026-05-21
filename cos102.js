// ==================== COS 102 QUESTION BANK ====================
// Problem Solving - Core Computing Concepts, Algorithms, Flowcharts, Programming

if (!window.questionBank) {
    window.questionBank = {};
}

window.questionBank["COS 102"] = [
    // ==================== INTRODUCTION TO COMPUTING & PROBLEMS (Questions 1-15) ====================
    {
        question: "A computer is best defined as a(n)",
        options: ["electronic device for entertainment", "programmable electronic device that processes data", "mechanical calculator", "typewriter with memory"],
        answer: "B",
        explanation: "A computer is a programmable electronic device that accepts input, processes data, stores information, and produces output."
    },
    {
        question: "The core concepts of computing include all EXCEPT",
        options: ["data representation", "algorithm design", "automobile engineering", "problem solving"],
        answer: "C",
        explanation: "Automobile engineering is not a core computing concept. Core concepts include data representation, algorithms, problem solving, and programming."
    },
    {
        question: "Data processing refers to",
        options: ["the collection of raw facts", "the conversion of raw data into meaningful information", "data storage", "data deletion"],
        answer: "B",
        explanation: "Data processing is the transformation of raw data into meaningful, useful information through various operations."
    },
    {
        question: "Which of the following is NOT an example of computer hardware?",
        options: ["CPU", "Operating System", "RAM", "Hard Drive"],
        answer: "B",
        explanation: "The Operating System is software, not hardware. Hardware refers to physical components of a computer."
    },
    {
        question: "Software can be classified into two main categories:",
        options: ["system software and application software", "hardware and firmware", "input and output software", "internal and external software"],
        answer: "A",
        explanation: "Software is divided into system software (operating systems, utilities) and application software (word processors, games)."
    },
    {
        question: "A problem in computing is",
        options: ["any task that requires a solution", "only mathematical equations", "programming errors", "hardware malfunctions"],
        answer: "A",
        explanation: "A problem is any task or situation that requires a solution or resolution through computational thinking."
    },
    {
        question: "Routine problems are characterized by",
        options: ["having known solutions and standard approaches", "being unsolvable", "requiring creative thinking only", "having no pattern"],
        answer: "A",
        explanation: "Routine problems have established solutions and can be solved using standard methods or algorithms."
    },
    {
        question: "Non-routine problems typically require",
        options: ["creative thinking and novel approaches", "following a fixed algorithm", "no computing resources", "mathematical formulas only"],
        answer: "A",
        explanation: "Non-routine problems require creative thinking, adaptation of known methods, or development of new solutions."
    },
    {
        question: "Which of the following is an example of a routine problem?",
        options: ["Calculating the average of test scores", "Developing a self-driving car", "Creating a new encryption algorithm", "Designing a social media platform"],
        answer: "A",
        explanation: "Calculating averages is a routine problem with a standard mathematical formula. The others require novel solutions."
    },
    {
        question: "Which of the following is a non-routine problem?",
        options: ["Sorting a list of numbers", "Finding the largest number", "Developing AI for medical diagnosis", "Adding two numbers"],
        answer: "C",
        explanation: "Developing AI for medical diagnosis is a complex non-routine problem requiring novel approaches."
    },
    {
        question: "Computational thinking involves",
        options: ["only mathematical calculations", "decomposition, pattern recognition, abstraction, and algorithm design", "hardware assembly", "typing skills"],
        answer: "B",
        explanation: "Computational thinking includes four key pillars: decomposition, pattern recognition, abstraction, and algorithmic thinking."
    },
    {
        question: "Decomposition in problem solving means",
        options: ["breaking a complex problem into smaller parts", "destroying the solution", "making problems harder", "ignoring details"],
        answer: "A",
        explanation: "Decomposition involves breaking down a complex problem into smaller, more manageable sub-problems."
    },
    {
        question: "The first step in the general problem-solving process is",
        options: ["implementation", "evaluation", "problem identification and definition", "solution design"],
        answer: "C",
        explanation: "The problem-solving process begins with clearly identifying and defining the problem to be solved."
    },
    {
        question: "The final step in the problem-solving process is",
        options: ["problem definition", "solution design", "implementation", "evaluation and refinement"],
        answer: "D",
        explanation: "After implementation, the solution must be evaluated and refined based on results and feedback."
    },
    {
        question: "An algorithm is defined as",
        options: ["a computer program", "a finite sequence of well-defined instructions to solve a problem", "a programming language", "computer hardware"],
        answer: "B",
        explanation: "An algorithm is a step-by-step procedure for solving a problem, guaranteed to terminate after a finite number of steps."

    },

    // ==================== SOLVABLE & UNSOLVABLE PROBLEMS (Questions 16-25) ====================
    {
        question: "A solvable problem is one for which",
        options: ["an algorithm exists to find a solution", "no algorithm exists", "the solution is infinite", "computers cannot handle it"],
        answer: "A",
        explanation: "A problem is solvable if there exists an algorithm that can find a solution in finite time."
    },
    {
        question: "Which of the following is an example of an unsolvable problem?",
        options: ["Sorting numbers", "The Halting Problem", "Calculating area", "Finding average"],
        answer: "B",
        explanation: "The Halting Problem (determining if a program will halt or run forever) was proven unsolvable by Alan Turing."
    },
    {
        question: "The Halting Problem was proven unsolvable by",
        options: ["Charles Babbage", "Alan Turing", "Ada Lovelace", "Bill Gates"],
        answer: "B",
        explanation: "Alan Turing proved that no general algorithm can determine whether any given program will halt or run indefinitely."
    },
    {
        question: "Tractable problems are those that",
        options: ["can be solved in polynomial time", "cannot be solved", "require infinite time", "have no algorithm"],
        answer: "A",
        explanation: "Tractable problems can be solved in polynomial time (P problems). Intractable problems require exponential time."
    },
    {
        question: "NP-complete problems are",
        options: ["easy to solve", "problems where solutions can be verified quickly but may not be found quickly", "unsolvable", "trivial"],
        answer: "B",
        explanation: "NP-complete problems have solutions that can be verified in polynomial time, but finding solutions may take exponential time."
    },
    {
        question: "The Traveling Salesman Problem is an example of a(n)",
        options: ["easy problem", "NP-complete problem", "unsolvable problem", "trivial problem"],
        answer: "B",
        explanation: "The Traveling Salesman Problem (finding shortest route visiting all cities) is NP-complete."
    },
    {
        question: "Computability theory deals with",
        options: ["which problems can be solved by computers", "computer speed", "memory management", "user interfaces"],
        answer: "A",
        explanation: "Computability theory studies what problems can and cannot be solved algorithmically by computers."
    },
    {
        question: "A problem is decidable if",
        options: ["there exists an algorithm that always gives a yes/no answer", "no algorithm exists", "it has infinite solutions", "it has no solution"],
        answer: "A",
        explanation: "A decidable problem has an algorithm that can always produce a correct yes/no answer in finite time."
    },
    {
        question: "The complexity of an algorithm refers to",
        options: ["how many lines of code it has", "the resources (time/memory) required to run it", "the programming language used", "the number of programmers needed"],
        answer: "B",
        explanation: "Algorithm complexity measures time (time complexity) and memory (space complexity) required for execution."
    },
    {
        question: "Big O notation is used to describe",
        options: ["the exact runtime of an algorithm", "the asymptotic upper bound of algorithm complexity", "the programming language", "the data structure used"],
        answer: "B",
        explanation: "Big O notation describes the worst-case complexity growth rate as input size increases."

    },

    // ==================== PROBLEM SOLVING TECHNIQUES (Questions 26-45) ====================
    {
        question: "Abstraction in problem solving refers to",
        options: ["ignoring irrelevant details to focus on essential ones", "making problems more complex", "copying existing solutions", "random guessing"],
        answer: "A",
        explanation: "Abstraction involves hiding unnecessary details and focusing only on information relevant to solving the problem."
    },
    {
        question: "Analogy as a problem-solving technique involves",
        options: ["using solutions from similar problems", "random trial and error", "detailed mathematical analysis", "ignoring past experience"],
        answer: "A",
        explanation: "Analogy uses knowledge from previously solved similar problems to solve new ones."
    },
    {
        question: "Brainstorming is a technique for",
        options: ["generating many ideas without immediate judgment", "calculating mathematical formulas", "writing final code", "testing solutions"],
        answer: "A",
        explanation: "Brainstorming encourages free-flowing idea generation without criticism to stimulate creative solutions."
    },
    {
        question: "Trial and error involves",
        options: ["trying different solutions until one works", "theoretical analysis only", "following strict rules", "avoiding mistakes"],
        answer: "A",
        explanation: "Trial and error tests potential solutions sequentially until finding one that works."
    },
    {
        question: "Hypothesis testing in problem solving means",
        options: ["proposing and testing potential explanations", "random guessing", "copying answers", "ignoring evidence"],
        answer: "A",
        explanation: "Hypothesis testing involves proposing a possible solution and systematically testing its validity."
    },
    {
        question: "Reduction in problem solving means",
        options: ["transforming a problem into a known solvable form", "making problems harder", "adding complexity", "ignoring constraints"],
        answer: "A",
        explanation: "Reduction converts an unfamiliar problem into a form of a known problem with existing solutions."
    },
    {
        question: "Divide and conquer is a technique that",
        options: ["recursively breaks problems into smaller subproblems", "solves problems randomly", "ignores subproblems", "combines all subproblems at once"],
        answer: "A",
        explanation: "Divide and conquer recursively splits problems, solves subproblems, and combines results (e.g., merge sort)."
    },
    {
        question: "Lateral thinking involves",
        options: ["approaching problems from indirect and creative angles", "direct step-by-step logic", "mathematical formulas", "following strict rules"],
        answer: "A",
        explanation: "Lateral thinking uses indirect, creative approaches that may not be obvious from step-by-step logic."
    },
    {
        question: "Means-end analysis involves",
        options: ["identifying differences between current and goal states, then actions to reduce differences", "random actions", "ignoring the goal", "only mathematical operations"],
        answer: "A",
        explanation: "Means-end analysis repeatedly identifies differences between current and goal states and applies actions to reduce them."
    },
    {
        question: "The method of focal object involves",
        options: ["combining a problem with random objects for new ideas", "mathematical modeling", "systematic analysis", "random guessing"],
        answer: "A",
        explanation: "The focal object method combines the problem with unrelated objects to generate creative solutions."
    },
    {
        question: "Morphological analysis is used for",
        options: ["exploring all possible combinations of solution parameters", "single-solution problems", "mathematical proofs", "debugging code"],
        answer: "A",
        explanation: "Morphological analysis systematically explores all combinations of parameter values to find optimal solutions."
    },
    {
        question: "Root cause analysis aims to",
        options: ["identify the underlying cause of a problem", "treat symptoms only", "ignore causes", "randomly fix issues"],
        answer: "A",
        explanation: "Root cause analysis identifies the fundamental cause of a problem to prevent recurrence."
    },
    {
        question: "Research as a problem-solving technique involves",
        options: ["gathering existing knowledge and solutions", "guessing randomly", "copying answers", "ignoring resources"],
        answer: "A",
        explanation: "Research leverages existing knowledge, literature, and documented solutions to address problems."
    },
    {
        question: "Proof in problem solving refers to",
        options: ["logical demonstration of solution correctness", "testing once", "assuming correctness", "ignoring verification"],
        answer: "A",
        explanation: "Proof provides rigorous logical demonstration that a solution is correct for all cases."
    },
    {
        question: "Algorithmic thinking is characterized by",
        options: ["step-by-step systematic approach", "random guessing", "intuition only", "emotional decision making"],
        answer: "A",
        explanation: "Algorithmic thinking uses precise, step-by-step instructions to solve problems systematically."
    },
    {
        question: "Heuristics are",
        options: ["rule-of-thumb strategies that may not guarantee optimal solutions", "exact algorithms", "programming languages", "hardware components"],
        answer: "A",
        explanation: "Heuristics are practical, experience-based strategies that often produce good solutions quickly but may not guarantee optimality."
    },
    {
        question: "A greedy algorithm",
        options: ["makes locally optimal choices at each step hoping for global optimum", "makes random choices", "always finds optimal solution", "never works"],
        answer: "A",
        explanation: "Greedy algorithms choose the best immediate option, hoping it leads to the global best solution."
    },
    {
        question: "Backtracking is a technique for",
        options: ["finding solutions by trying options and undoing dead ends", "linear processing", "random searching", "ignoring constraints"],
        answer: "A",
        explanation: "Backtracking incrementally builds candidates and abandons those that cannot lead to valid solutions."
    },
    {
        question: "Dynamic programming solves problems by",
        options: ["breaking into overlapping subproblems and storing results", "random guessing", "linear search only", "ignoring prior calculations"],
        answer: "A",
        explanation: "Dynamic programming solves complex problems by breaking them into simpler overlapping subproblems and storing results to avoid recalculation."
    },
    {
        question: "Brute force algorithm",
        options: ["tries all possible solutions", "is always efficient", "uses heuristics", "is never used"],
        answer: "A",
        explanation: "Brute force exhaustively tries all possible solutions, which is simple but often inefficient for large problems."

    },

    // ==================== SOLUTION FORMULATION & DESIGN (Questions 46-65) ====================
    {
        question: "A flowchart is a",
        options: ["diagram representing algorithm steps using symbols", "programming language", "type of computer", "data structure"],
        answer: "A",
        explanation: "A flowchart uses standardized symbols to visually represent the sequence of steps in an algorithm."
    },
    {
        question: "The oval (rounded rectangle) symbol in a flowchart represents",
        options: ["start/end", "process", "decision", "input/output"],
        answer: "A",
        explanation: "The oval or rounded rectangle (terminator) marks the beginning and end of an algorithm."
    },
    {
        question: "The rectangle symbol in a flowchart represents",
        options: ["process/operation", "decision", "input/output", "start/end"],
        answer: "A",
        explanation: "The rectangle (process box) represents an operation or action being performed."
    },
    {
        question: "The diamond symbol in a flowchart represents",
        options: ["decision/branching", "process", "input/output", "connector"],
        answer: "A",
        explanation: "The diamond represents a decision point with multiple branches (usually yes/no)."
    },
    {
        question: "The parallelogram symbol in a flowchart represents",
        options: ["input/output", "process", "decision", "start/end"],
        answer: "A",
        explanation: "The parallelogram represents input (data entering) or output (data leaving) operations."
    },
    {
        question: "Pseudocode is",
        options: ["an informal, English-like description of algorithm steps", "actual programming code", "hardware design", "database schema"],
        answer: "A",
        explanation: "Pseudocode uses plain language mixed with programming constructs to describe algorithms without strict syntax."
    },
    {
        question: "Which of the following is NOT a valid flowchart symbol?",
        options: ["process rectangle", "decision diamond", "loop circle", "parallelogram I/O"],
        answer: "C",
        explanation: "Loop circle is not a standard flowchart symbol. Loops are represented using decision diamonds and flow lines."
    },
    {
        question: "A decision tree is used to",
        options: ["represent decisions and their possible consequences", "draw tree diagrams", "store data", "compile code"],
        answer: "A",
        explanation: "Decision trees map decisions and their potential outcomes, often used in machine learning and classification."
    },
    {
        question: "A decision table is useful for",
        options: ["representing complex logic with multiple conditions and actions", "simple linear calculations", "graphics rendering", "network routing"],
        answer: "A",
        explanation: "Decision tables systematically map conditions to actions, clarifying complex logic."
    },
    {
        question: "In pseudocode, 'READ' or 'INPUT' indicates",
        options: ["getting data from the user", "displaying output", "performing calculation", "ending program"],
        answer: "A",
        explanation: "READ/INPUT statements in pseudocode represent acquiring data from external sources (user input)."
    },
    {
        question: "In pseudocode, 'DISPLAY' or 'PRINT' indicates",
        options: ["outputting results to the user", "reading input", "performing calculation", "starting loop"],
        answer: "A",
        explanation: "DISPLAY/PRINT statements output data to the user or external destination."
    },
    {
        question: "An IF-THEN-ELSE structure in pseudocode represents",
        options: ["conditional branching", "looping", "function call", "variable declaration"],
        answer: "A",
        explanation: "IF-THEN-ELSE executes different blocks based on a condition (true/false)."
    },
    {
        question: "A WHILE loop repeats code",
        options: ["while a condition remains true", "a fixed number of times", "never", "only once"],
        answer: "A",
        explanation: "WHILE loops continue execution as long as a specified condition remains true (pre-test loop)."
    },
    {
        question: "A FOR loop is typically used when",
        options: ["the number of iterations is known in advance", "the condition is unknown", "random iteration", "infinite loops"],
        answer: "A",
        explanation: "FOR loops iterate a predetermined number of times, often using a counter variable."
    },
    {
        question: "In flowcharting, a flow line (arrow) indicates",
        options: ["the direction of execution flow", "data storage", "variable declaration", "error handling"],
        answer: "A",
        explanation: "Flow lines connect symbols and show the sequence of execution."
    },
    {
        question: "An off-page connector in a flowchart is used to",
        options: ["connect flowcharts across multiple pages", "end the program", "start a loop", "declare variables"],
        answer: "A",
        explanation: "Off-page connectors link flowchart sections when the diagram continues on another page."
    },
    {
        question: "A decision table with 'Y' and 'N' entries uses",
        options: ["yes/no conditions to determine actions", "numerical calculations", "text processing", "graphical output"],
        answer: "A",
        explanation: "Decision tables use conditions (true/false, Y/N) to determine which actions should be taken."
    },
    {
        question: "Flowcharts help in",
        options: ["visualizing algorithm logic and communication", "writing final code only", "hardware design", "network configuration"],
        answer: "A",
        explanation: "Flowcharts provide visual representation of logic, aiding understanding, communication, and debugging."
    },
    {
        question: "Which symbol represents a pre-defined process/subroutine in flowcharts?",
        options: ["rectangle with vertical lines", "double-lined rectangle", "oval", "diamond"],
        answer: "A",
        explanation: "A rectangle with vertical lines represents a pre-defined process or subroutine call."

    },

    // ==================== IMPLEMENTATION, EVALUATION & REFINEMENT (Questions 66-80) ====================
    {
        question: "Implementation in problem solving refers to",
        options: ["coding the solution in a programming language", "defining the problem", "brainstorming ideas", "evaluating results"],
        answer: "A",
        explanation: "Implementation translates the designed algorithm into actual computer code in a specific programming language."
    },
    {
        question: "Testing is an important part of implementation because",
        options: ["it verifies the solution works correctly", "it is optional", "it wastes time", "it is only for large programs"],
        answer: "A",
        explanation: "Testing validates that the implemented solution produces correct results for various inputs."
    },
    {
        question: "Debugging is the process of",
        options: ["finding and fixing errors in code", "writing code", "designing algorithms", "documenting programs"],
        answer: "A",
        explanation: "Debugging involves identifying, isolating, and correcting errors (bugs) in computer programs."
    },
    {
        question: "A syntax error occurs when",
        options: ["code violates programming language grammar rules", "logic is incorrect", "program crashes", "user gives wrong input"],
        answer: "A",
        explanation: "Syntax errors are detected by the compiler/interpreter when code doesn't follow language rules."
    },
    {
        question: "A runtime error occurs",
        options: ["during program execution", "during compilation", "in pseudocode", "in flowcharts"],
        answer: "A",
        explanation: "Runtime errors occur during program execution (e.g., division by zero, file not found)."
    },
    {
        question: "A logic error occurs when",
        options: ["the program runs but produces wrong results", "syntax is wrong", "computer crashes", "compiler fails"],
        answer: "A",
        explanation: "Logic errors produce incorrect results because the algorithm's logic is flawed, even though the code runs."
    },
    {
        question: "Unit testing refers to testing",
        options: ["individual components or functions", "the entire program at once", "hardware only", "user interface"],
        answer: "A",
        explanation: "Unit testing verifies that individual units (functions, methods) work correctly in isolation."
    },
    {
        question: "Integration testing verifies",
        options: ["how well program components work together", "individual units", "user documentation", "hardware compatibility"],
        answer: "A",
        explanation: "Integration testing checks interactions between combined components to ensure they work together correctly."
    },
    {
        question: "Refinement in problem solving involves",
        options: ["improving and optimizing the solution", "discarding the solution", "making problems harder", "ignoring feedback"],
        answer: "A",
        explanation: "Refinement iteratively improves the solution based on testing results, feedback, and performance analysis."
    },
    {
        question: "Maintainability of software refers to",
        options: ["how easily the code can be understood, modified, and extended", "program speed", "memory usage", "user interface quality"],
        answer: "A",
        explanation: "Maintainable software is well-documented, modular, and easy to modify for future needs."
    },
    {
        question: "Code documentation is important because",
        options: ["it helps others understand the code and supports maintenance", "it slows development", "it is unnecessary", "only beginners need it"],
        answer: "A",
        explanation: "Documentation explains what code does, how it works, and why decisions were made, supporting future maintenance."
    },
    {
        question: "Version control systems (e.g., Git) help with",
        options: ["tracking code changes and collaborating", "writing code faster", "designing algorithms", "testing only"],
        answer: "A",
        explanation: "Version control tracks changes, enables collaboration, and allows reverting to previous versions."
    },
    {
        question: "Code refactoring means",
        options: ["restructuring existing code without changing external behavior", "rewriting from scratch", "adding new features", "removing documentation"],
        answer: "A",
        explanation: "Refactoring improves code structure and readability while preserving functionality."
    },
    {
        question: "Efficiency analysis measures",
        options: ["how well the solution uses resources (time/memory)", "user satisfaction", "code beauty", "documentation quality"],
        answer: "A",
        explanation: "Efficiency analysis evaluates algorithm performance in terms of time and space usage."
    },
    {
        question: "Optimization is the process of",
        options: ["making the solution faster or more resource-efficient", "adding features", "making code longer", "removing comments"],
        answer: "A",
        explanation: "Optimization improves solution performance (speed, memory usage, bandwidth) without changing functionality."

    },

    // ==================== PROGRAMMING CONCEPTS (Questions 81-100) ====================
    {
        question: "A variable in programming is",
        options: ["a named storage location for data", "a constant value", "a programming language", "a type of loop"],
        answer: "A",
        explanation: "Variables store data values that can change during program execution."
    },
    {
        question: "A constant in programming is",
        options: ["a value that cannot change during execution", "a variable", "a loop", "a condition"],
        answer: "A",
        explanation: "Constants have fixed values that cannot be reassigned after declaration."
    },
    {
        question: "Common primitive data types include",
        options: ["integer, float, string, boolean", "array, list, tree", "class, object, method", "file, folder, directory"],
        answer: "A",
        explanation: "Primitive data types are basic types provided by programming languages (int, float, char, bool, etc.)."
    },
    {
        question: "An array is a data structure that",
        options: ["stores multiple elements of the same type in contiguous memory", "stores a single value", "stores only strings", "cannot be indexed"],
        answer: "A",
        explanation: "Arrays store collections of elements, all of the same data type, accessible by index."
    },
    {
        question: "An assignment statement like x = 10 means",
        options: ["store the value 10 in variable x", "x equals 10", "compare x and 10", "add 10 to x"],
        answer: "A",
        explanation: "Assignment stores the value on the right into the variable on the left."
    },
    {
        question: "An input statement allows a program to",
        options: ["receive data from the user", "display output", "perform calculations", "stop execution"],
        answer: "A",
        explanation: "Input statements (like input(), scanf(), cin) read data from keyboard or files."
    },
    {
        question: "An output statement allows a program to",
        options: ["display results to the user", "read data", "store values", "declare variables"],
        answer: "A",
        explanation: "Output statements (print, printf, cout) display information to the user or files."
    },
    {
        question: "Python is a programming language known for its",
        options: ["readability and simplicity", "complex syntax", "slow execution only", "hardware control"],
        answer: "A",
        explanation: "Python emphasizes code readability and simplicity, making it popular for beginners and rapid development."
    },
    {
        question: "C is a programming language known for",
        options: ["efficiency and low-level hardware access", "web development only", "database management", "graphics design"],
        answer: "A",
        explanation: "C provides efficiency and direct memory access, used for system programming and embedded systems."
    },
    {
        question: "What is the output of print(5 + 3) in Python?",
        options: ["8", "53", "error", "None"],
        answer: "A",
        explanation: "5 + 3 evaluates to 8, which is then printed."
    },
    {
        question: "Conditional statements in programming include",
        options: ["if, else, elif/else if", "for, while, do-while", "function, method, class", "array, list, dictionary"],
        answer: "A",
        explanation: "Conditional statements (if-else) control program flow based on conditions."
    },
    {
        question: "Loop structures in programming include",
        options: ["for, while, do-while", "if, else, switch", "function, method, class", "array, list, dictionary"],
        answer: "A",
        explanation: "Loops repeat code blocks: for loops (count-controlled), while loops (condition-controlled)."
    },
    {
        question: "A function is a",
        options: ["reusable block of code that performs a specific task", "variable", "loop", "data type"],
        answer: "A",
        explanation: "Functions encapsulate code for reusability, modularity, and organization."
    },
    {
        question: "A function parameter is",
        options: ["input passed to a function", "the function's return value", "a global variable", "loop counter"],
        answer: "A",
        explanation: "Parameters (arguments) are values passed to functions for processing."
    },
    {
        question: "A return statement in a function",
        options: ["sends a value back to the caller", "ends the program", "prints output", "reads input"],
        answer: "A",
        explanation: "The return statement exits the function and optionally returns a value to the calling code."
    },
    {
        question: "Python uses ______ for indentation to define code blocks.",
        options: ["whitespace/indentation", "curly braces", "parentheses", "brackets"],
        answer: "A",
        explanation: "Python uses indentation (spaces or tabs) to define block structure, unlike C-family languages with braces."
    },
    {
        question: "A comment in code is used to",
        options: ["explain code for human readers", "execute code", "declare variables", "loop repeatedly"],
        answer: "A",
        explanation: "Comments are ignored by the compiler/interpreter and document code for developers."
    },
    {
        question: "String concatenation means",
        options: ["joining strings together", "splitting strings", "comparing strings", "converting to number"],
        answer: "A",
        explanation: "Concatenation combines multiple strings into one (e.g., 'Hello' + 'World' = 'HelloWorld')."
    },
    {
        question: "The Python function len('Hello') returns",
        options: ["5", "4", "6", "error"],
        answer: "A",
        explanation: "len() returns the number of characters in the string: 'Hello' has 5 characters."
    },
    {
        question: "Which of the following is a valid variable name in most languages?",
        options: ["student_age", "2student", "student age", "student-age"],
        answer: "A",
        explanation: "student_age (using underscore) is valid. Most languages don't allow starting with numbers, spaces, or hyphens."

    }
];

// Total: 100 questions covering:
// 1-15: Introduction to Computing & Problems
// 16-25: Solvable & Unsolvable Problems
// 26-45: Problem Solving Techniques (20 questions)
// 46-65: Solution Formulation & Design (Flowcharts, Pseudocode, Decision Tables)
// 66-80: Implementation, Evaluation & Refinement
// 81-100: Programming Concepts (Python, C, variables, loops, functions)