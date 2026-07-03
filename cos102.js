if (!window.questionBank) {
    window.questionBank = {};
}

window.questionBank["COS 102"] = [

    // ==================== SECTION 1: FLOWCHARTS & ALGORITHMS (idx 0-7) ====================

    {
        question: "A graphical representation of an algorithm is called",
        options: ["Pseudocode charts", "Graphical charts", "Programming charts", "Flowchart"],
        answer: "D",
        explanation: "A flowchart uses standardized symbols (ovals, diamonds, rectangles, parallelograms) to visually represent the steps and logic of an algorithm."
    },
    {
        question: "The diamond symbol in a flowchart represents",
        options: ["Processing", "Input/Output", "Display", "Conditional/Decision"],
        answer: "D",
        explanation: "The diamond (rhombus) shape represents a decision point — a Yes/No or True/False question that directs the flow along different paths."
    },
    {
        question: "The oval symbol in a flowchart is used to",
        options: ["Process", "Show start/end (terminal)", "Decision", "Input/Output"],
        answer: "B",
        explanation: "The oval (or rounded rectangle) is the terminal symbol, used to mark the START and END (or STOP) of a flowchart."
    },
    {
        question: "The parallelogram symbol represents",
        options: ["Process", "Decision", "Input/Output", "Start/End"],
        answer: "C",
        explanation: "The parallelogram is the input/output symbol — used for READ (input) and PRINT/WRITE (output) operations."
    },
    {
        question: "To link one part of a flowchart to another on a different page, we use the ___ symbol",
        options: ["Arrow", "Connector", "Diamond", "Oval"],
        answer: "B",
        explanation: "The connector (small circle) links parts of a flowchart that continue on a different page or a distant location on the same page."
    },
    {
        question: "The property that differentiates an algorithm from a program is",
        options: ["Definiteness", "Input", "Finiteness", "Output"],
        answer: "C",
        explanation: "An algorithm must be finite — it must terminate after a finite number of steps. A program can theoretically run indefinitely (e.g. an operating system loop)."
    },
    {
        question: "The following are types of flowcharts EXCEPT",
        options: ["Action flowchart", "System flowchart", "Run flowchart", "Program flowchart"],
        answer: "A",
        explanation: "Recognized flowchart types include System flowchart, Program flowchart, and Run flowchart. 'Action flowchart' is not a standard type."
    },
    {
        question: "A step-by-step process involved in designing a system is",
        options: ["Algorithm", "Decision table", "Flowchart", "System flowchart"],
        answer: "A",
        explanation: "An algorithm is a finite, ordered set of well-defined steps used to solve a problem or design a system."
    },

    // ==================== SECTION 2: BASIC / QBASIC SYNTAX (idx 8-21) ====================

    {
        question: "Which data type stores 34.567 in BASIC?",
        options: ["Integer", "Byte", "Double", "String"],
        answer: "C",
        explanation: "34.567 is a floating-point (decimal) number. In BASIC, Double (double-precision floating point) stores such values. Integer can only store whole numbers."
    },
    {
        question: "The statement used to terminate a sequence of program",
        options: ["PRINT", "LET", "END", "REM"],
        answer: "C",
        explanation: "The END statement signals the end of a BASIC program and terminates its execution."
    },
    {
        question: "The keyword that begins a comment in BASIC",
        options: ["REM", "DIM", "NEXT", "LOOP"],
        answer: "A",
        explanation: "REM (short for REMark) is used to add comments/explanations in BASIC code. The interpreter ignores everything on a REM line."
    },
    {
        question: "The BASIC keyword used to assign a value to a variable",
        options: ["ASSIGN", "PUT", "INSERT", "LET"],
        answer: "D",
        explanation: "LET is used to assign a value to a variable in BASIC, e.g. LET X = 5. In QBASIC, LET is optional but still valid."
    },
    {
        question: "The QBASIC equivalent of the square root of b-squared is",
        options: ["SQR(b^2)", "SQRT(b^2)", "SQR(b)^2", "POW(b,2)"],
        answer: "A",
        explanation: "In QBASIC, the square root function is SQR() (not SQRT). So the square root of b² is written as SQR(b^2)."
    },
    {
        question: "The BASIC statement for the square root of (b*b - 4*a*c) is",
        options: ["bxb-4xaxc", "b*b-4*a*c", "SQR(b*b-4*a*c)", "SQRT(b*b-4*a*c)"],
        answer: "C",
        explanation: "In BASIC/QBASIC, the square root function is SQR(). The discriminant of the quadratic formula is written SQR(b*b-4*a*c)."
    },
    {
        question: "The symbol for division operation in BASIC is",
        options: ["*", "\\", "/", "%"],
        answer: "C",
        explanation: "The forward slash / is used for normal division in BASIC (e.g. A/B). The backslash \\ is for integer division."
    },
    {
        question: "BASIC is a case-sensitive programming language?",
        options: ["True", "False", "a and b", "None of the above"],
        answer: "B",
        explanation: "BASIC (and QBASIC) is NOT case-sensitive. Keywords and variable names can be written in uppercase, lowercase, or mixed — they are treated the same."
    },
    {
        question: "CLS stands for",
        options: ["Clear screen", "Continue loading section", "Clear solution", "None of the above"],
        answer: "A",
        explanation: "CLS is a BASIC command that CLears the Screen, erasing all text currently displayed in the output window."
    },
    {
        question: "The function used to convert lowercase to uppercase in BASIC is",
        options: ["UCASE$()", "LCASE$()", "MID$()", "INSTR$()"],
        answer: "A",
        explanation: "UCASE$() converts a string to all uppercase letters. LCASE$() converts to lowercase. MID$() extracts a substring."
    },
    {
        question: "BASIC stands for",
        options: ["Believable And Simple Instruction Code", "Beginners' All-purpose Symbolic Instruction Code", "Beginners' Available Simple Instruction Code", "Beginners' All-purpose Simple Instruction Code"],
        answer: "B",
        explanation: "BASIC = Beginners' All-purpose Symbolic Instruction Code. It was developed in 1964 by John Kemeny and Thomas Kurtz at Dartmouth College."
    },
    {
        question: "Which of the following is NOT a reserved word in BASIC?",
        options: ["GOSUB", "SELECT", "DATA", "CLASS"],
        answer: "D",
        explanation: "CLASS is not a keyword in classic BASIC or QBASIC. GOSUB, SELECT, and DATA are all valid BASIC reserved words."
    },
    {
        question: "Which command in BASIC is a processing command?",
        options: ["PRINT", "READ", "DATA", "SQRT()"],
        answer: "D",
        explanation: "SQRT() (or SQR()) performs a mathematical computation (processing). PRINT is output, READ/DATA are input-related commands."
    },
    {
        question: "A valid BASIC programming file extension is",
        options: [".jar", ".txt", ".bas", ".basi"],
        answer: "C",
        explanation: "BASIC source files use the .bas extension. .jar is Java archive, .txt is plain text, and .basi is not a recognized extension."
    },

    // ==================== SECTION 3: ARRAYS & DIM (idx 22-29) ====================

    {
        question: "Consider the statement: 20 DIM X(30). It contains how many elements of array?",
        options: ["10", "30", "20", "600"],
        answer: "B",
        explanation: "DIM X(30) declares an array with 30 elements (indices 1 to 30 under OPTION BASE 1, which is the default in most exam contexts)."
    },
    {
        question: "DIM P(2,10) is a two-dimensional array with ___ elements",
        options: ["10", "12", "2", "20"],
        answer: "D",
        explanation: "DIM P(2,10) creates a 2×10 array = 20 elements (using the exam convention of multiplying the two dimensions)."
    },
    {
        question: "Which of the following is used to identify the element of an array?",
        options: ["Postscript", "Superscript", "Subscript", "Manuscript"],
        answer: "C",
        explanation: "A subscript (index) is the number used inside the brackets to identify a specific element in an array, e.g. X(3) has subscript 3."
    },
    {
        question: "How many subscripts are required for an array with two dimensions?",
        options: ["4", "3", "1", "2"],
        answer: "D",
        explanation: "A two-dimensional array requires two subscripts — one for the row and one for the column, e.g. P(2, 5)."
    },
    {
        question: "Each item stored in an array is called",
        options: ["Index", "Element", "Integer", "Data"],
        answer: "B",
        explanation: "Each individual value stored in an array is called an element. The position of the element is its index (subscript)."
    },
    {
        question: "Printing all array elements one by one is an operation called",
        options: ["Transverse", "Arrayprint", "Traverse", "Print"],
        answer: "C",
        explanation: "Traversal (traversing) means visiting each element of an array in order, typically using a loop, e.g. to print, sum, or search all elements."
    },
    {
        question: "The first index of an array in VB starts at",
        options: ["1", "0", "-1", "Any number"],
        answer: "B",
        explanation: "In Visual Basic (VB.NET) and most modern languages, arrays are zero-indexed — the first element is at index 0."
    },
    {
        question: "Indicate the odd one out about arrays",
        options: ["Index starts with 0", "Each element is accessed via its index", "Array contains elements of the same data type", "The size of an array equals its highest index value"],
        answer: "D",
        explanation: "This is FALSE — the size of an array is NOT equal to its highest index. For a zero-indexed array of size n, the highest index is n−1."
    },

    // ==================== SECTION 4: CONTROL STRUCTURES & CODE OUTPUT (idx 30-38) ====================

    {
        question: "For the program [10 LET SUM=0 / 20 COUNT=10 / 30 WHILE COUNT>0 / 40 SUM=SUM+COUNT / 50 COUNT=COUNT-1 / 60 WEND / 70 PRINT SUM / 80 END], what is the intermediate SUM at the fourth execution?",
        options: ["10", "34", "27", "19"],
        answer: "B",
        explanation: "Pass 1: SUM=10; Pass 2: SUM=10+9=19; Pass 3: SUM=19+8=27; Pass 4: SUM=27+7=34. The SUM at the 4th loop pass is 34."
    },
    {
        question: "In the same program, if line 50 (COUNT = COUNT - 1) is omitted, what happens?",
        options: ["Final sum is 10", "Final sum is 34", "Final sum is 27", "Infinite loop (never terminates)"],
        answer: "D",
        explanation: "Without COUNT = COUNT - 1, the variable COUNT stays at 10 forever. The WHILE COUNT>0 condition remains TRUE, creating an infinite loop."
    },
    {
        question: "Output of: N = 5 / PRINT \"Number is \"; N*2",
        options: ["Number is 5", "Number is N*2", "Number is 7", "Number is 10"],
        answer: "D",
        explanation: "N=5, so N*2=10. PRINT evaluates the expression N*2 and outputs: Number is 10"
    },
    {
        question: "FOR/NEXT and WHILE/WEND are examples of which control structure?",
        options: ["Sequential", "Selective", "Keywords", "Repetition"],
        answer: "D",
        explanation: "FOR/NEXT and WHILE/WEND are repetition (loop/iteration) control structures — they repeat a block of code multiple times."
    },
    {
        question: "When it is not known in advance how many times a set of statements will be repeated, a ___ value can be used to terminate the repetition",
        options: ["Flag", "GOTO", "IF", "Else"],
        answer: "A",
        explanation: "A flag (sentinel value) is a special value placed in data to signal when the loop should stop — used when the number of iterations is unknown beforehand."
    },
    {
        question: "Which keyword is optional in a For/Next header when the control variable's increment is one?",
        options: ["For", "Default", "Next", "Step"],
        answer: "D",
        explanation: "STEP 1 is the default increment in a FOR/NEXT loop. If the increment is 1, the STEP keyword and its value can be omitted."
    },
    {
        question: "If keyword STEP and the value following it are omitted in a For/Next structure, the increment defaults to",
        options: ["1", "-1", "No increment", "Cannot say"],
        answer: "A",
        explanation: "When STEP is omitted, BASIC's FOR/NEXT loop automatically increments the counter variable by 1 after each iteration."
    },
    {
        question: "In a For/Next structure, incrementing occurs ___ the body of the structure is performed",
        options: ["Before", "During", "After", "None"],
        answer: "C",
        explanation: "In a FOR/NEXT loop, the loop body executes first, then the counter is incremented, then the condition is checked before the next iteration."
    },
    {
        question: "In BASIC programming, an unconditional branching is called which statement?",
        options: ["IF..THEN", "IF..THEN..ELSE", "GOTO", "FOR..NEXT"],
        answer: "C",
        explanation: "GOTO is an unconditional branch — it jumps to a specified line number without any condition. IF..THEN and IF..THEN..ELSE are conditional branches."
    },

    // ==================== SECTION 5: ERRORS, LANGUAGES & CONCEPTS (idx 39-44) ====================

    {
        question: "The type of error that allows a program to run but gives an erroneous output is",
        options: ["Syntax error", "Semantic error", "Logic error", "Run-time error"],
        answer: "C",
        explanation: "A logic error allows the program to compile and run without crashing, but produces wrong results because the algorithm or formula is incorrect."
    },
    {
        question: "What type of error will be raised when the system tries to compile/execute the statement X + Y (mismatched types)?",
        options: ["Semantic Error", "Syntax Error", "Runtime Error", "General Error"],
        answer: "B",
        explanation: "A type mismatch (e.g. adding a number to a string) is flagged as a syntax/type error at compile time in most implementations."
    },
    {
        question: "The process of locating and correcting errors in a computer program is called",
        options: ["Error tracking", "Localization", "Debugging", "Error Locator Corrector"],
        answer: "C",
        explanation: "Debugging is the systematic process of finding and fixing bugs (errors) in a program. The name comes from an early computer bug literally being a moth."
    },
    {
        question: "An example of a low-level language is",
        options: ["JAVA", "BINARY", "FORTRAN", "PASCAL"],
        answer: "B",
        explanation: "Low-level languages are close to machine code. Binary (machine language) is the lowest level. Assembly language is also low-level. JAVA, FORTRAN and PASCAL are high-level languages."
    },
    {
        question: "A procedure defined with keyword ___ does not return a value",
        options: ["Sub", "Procedure", "Return", "Module"],
        answer: "A",
        explanation: "In VB/BASIC, a Sub (subroutine) is a procedure that performs actions but does NOT return a value. A Function does return a value."
    },
    {
        question: "An algorithm that calls itself directly or indirectly is known as",
        options: ["Sub-Algorithm", "Recursion", "Polish notation", "Traversal algorithm"],
        answer: "B",
        explanation: "Recursion is when a function or algorithm calls itself as part of its own definition. Each call works on a smaller sub-problem until a base case is reached."
    }
];

// Total: 45 questions
// idx 0-7:   Flowcharts & Algorithms (8 q)
// idx 8-21:  BASIC / QBASIC Syntax (14 q)
// idx 22-29: Arrays & DIM (8 q)
// idx 30-38: Control Structures & Code Output (9 q)
// idx 39-44: Errors, Languages & Concepts (6 q)
