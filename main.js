document.addEventListener('DOMContentLoaded', function() {
    // Hide splash screen after app initialises
    var _splash = document.getElementById('splashScreen');
    if (_splash) {
        setTimeout(function () {
            _splash.style.transition = 'opacity 0.5s ease';
            _splash.style.opacity = '0';
            setTimeout(function () { _splash.style.display = 'none'; }, 500);
        }, 600);
    }

    window.showPage = function(page) {
        if (isExamActive && page !== 'exam') {
            showExamLeaveModal();
            return;
        }
        // Close mobile menu
        const navRight = document.getElementById('navRight');
        const hamburger = document.querySelector('.hamburger');
        if (navRight) navRight.classList.remove('active');
        if (hamburger) hamburger.classList.remove('toggle');
        
        // Hide all pages
        document.getElementById('coursePage').style.display = 'none';
        document.getElementById('topicPage').style.display = 'none';
        document.getElementById('questionCountPage').style.display = 'none';
        document.getElementById('examPage').style.display = 'none';
        document.getElementById('resultPage').style.display = 'none';
        document.getElementById('notesPage').style.display = 'none';
        if (document.getElementById('gamesPage')) document.getElementById('gamesPage').style.display = 'none';
        document.getElementById('resourcesPage').style.display = 'none';
        document.getElementById('aboutPage').style.display = 'none';
        
        if (page === 'home') {
            document.getElementById('coursePage').style.display = 'block';
            renderCourses();
            restoreBodyScroll();
        } else if (page === 'notes') {
            document.getElementById('notesPage').style.display = 'block';
            renderNotesPage();
            restoreBodyScroll();
        } else if (page === 'games') {
            if (document.getElementById('gamesPage')) document.getElementById('gamesPage').style.display = 'block';
            restoreBodyScroll();
        } else if (page === 'resources') {
            document.getElementById('resourcesPage').style.display = 'block';
            setTimeout(initResourcesToggle, 100);
            restoreBodyScroll();
        } else if (page === 'about') {
            document.getElementById('aboutPage').style.display = 'block';
            restoreBodyScroll();
        } else if (page === 'exam') {
            document.getElementById('examPage').style.display = 'block';
            blockBodyScroll();
        }
        
        forceScrollToTop();
        
        // Footer only on homepage
        const footer = document.querySelector('.telegram-cta');
        if (footer) footer.style.display = page === 'home' ? 'block' : 'none';
        
        // Update bottom tab active state
        document.querySelectorAll('.tab-item').forEach(tab => {
            const tabPage = tab.getAttribute('data-page');
            if (tabPage === page) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });
    };

    // ==================== SCROLL FIX FUNCTIONS ====================
    function blockBodyScroll() {
        // Exam container is position:fixed in CSS so it handles its own scroll.
        // Lock body/html only to prevent any bleed-through on older iOS Safari.
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
    }

    function restoreBodyScroll() {
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
        forceScrollToTop();
    }
    
    function forceScrollToTop() {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        if (document.scrollingElement) {
            document.scrollingElement.scrollTop = 0;
        }
    }

    // ==================== COURSE DATABASE ====================
    const COURSES_DB = {
        "GST 101": { semester: "first", title: "GST 101", level: "100L • Use of English", description: "Comprehensive English language and communication skills", icon: "📓", iconGradient: "linear-gradient(135deg, #667eea, #764ba2)", qCount: 339, locked: true, file: "gst101.js", bankKey: "GST 101" },
        "CSC 101": { semester: "first", title: "CSC 101", level: "100L • Intro to Computing", description: "Introduction to computer science and programming", icon: "💻", iconGradient: "linear-gradient(135deg, #3b82f6, #1d4ed8)", qCount: 100, locked: true, file: "csc.js", bankKey: "CSC 101" },
        "ENT 101": { semester: "first", title: "ENT 101", level: "100L • Entrepreneurship", description: "Business development and entrepreneurial skills", icon: "💼", iconGradient: "linear-gradient(135deg, #06b6d4, #0891b2)", qCount: 100, locked: true, file: "ent.js", bankKey: "ENT 101" },
        "GST 103": { semester: "first", title: "GST 112", level: "100L • Use of Library", description: "History, culture and development of Nigeria", icon: "📖", iconGradient: "linear-gradient(135deg, #84cc16, #65a30d)", qCount: 100, locked: true, file: "gst112.js", bankKey: "GST 112" },
       
        "GST 102": { semester: "second", title: "GST 102", level: "100L • Use of English II", description: "Grammar, essay writing, communication and ICT basics", icon: "📝", iconGradient: "linear-gradient(135deg, #667eea, #764ba2)", qCount: 318, locked: false, file: "gst102.js", bankKey: "GST 102" },
        "GST 104": { semester: "second", title: "GST 104", level: "100L • Nigeria Culture", description: "Nigerian history, culture and national development", icon: "🇳🇬", iconGradient: "linear-gradient(135deg, #f97316, #ea580c)", qCount: 100, locked: false, file: "gst112.js", bankKey: "GST 112" },
        "MTH 102": { semester: "second", title: "MTH 102", level: "100L • Elementary Mathematics", description: "Calculus, vectors and differential equations", icon: "📐", iconGradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)", qCount: 66, locked: false, file: "mth102.js", bankKey: "MTH 102" },
        "CHM 102": { semester: "second", title: "CHM 102", level: "100L • General Chemistry II", description: "Chemical kinetics, equilibrium and organic chemistry", icon: "🧪", iconGradient: "linear-gradient(135deg, #f59e0b, #d97706)", qCount: 100, locked: false, file: "chm102.js", bankKey: "CHM 102" },
        "MLS 102": { semester: "second", title: "MLS 102", level: "100L • History of Medical Laboratory Science", description: "History and development of MLS profession", icon: "📜", iconGradient: "linear-gradient(135deg, #06b6d4, #0891b2)", qCount: 100, locked: false, file: "mls102.js", bankKey: "MLS 102" },
        "BIO 102": { semester: "second", title: "BIO 102", level: "100L • General Biology II", description: "Diversity of life, plant and animal morphology", icon: "🔬", iconGradient: "linear-gradient(135deg, #10b981, #059669)", qCount: 100, locked: false, file: "bio102.js", bankKey: "BIO 102" },
        "BIO 108": { semester: "second", title: "BIO 108", level: "100L • Biology Practical II", description: "Practical biology techniques and experiments", icon: "🧫", iconGradient: "linear-gradient(135deg, #14b8a6, #0d9488)", qCount: 100, locked: false, file: "bio108.js", bankKey: "BIO 108" },
        "PHY 102": { semester: "second", title: "PHY 102", level: "100L • General Physics II", description: "Electricity, magnetism and modern physics", icon: "⚡", iconGradient: "linear-gradient(135deg, #ef4444, #dc2626)", qCount: 100, locked: false, file: "phy102.js", bankKey: "PHY 102" },
        "COS 102": { semester: "second", title: "COS 102", level: "100L • Intro to Computing Science", description: "Computer science fundamentals and programming", icon: "💻", iconGradient: "linear-gradient(135deg, #3b82f6, #1d4ed8)", qCount: 100, locked: false, file: "cos102.js", bankKey: "COS 102" },
        "MLS 104": { semester: "second", title: "MLS 104", level: "100L • Introduction to Biology of Diseases", description: "Disease mechanisms and pathology basics", icon: "🦠", iconGradient: "linear-gradient(135deg, #84cc16, #65a30d)", qCount: 100, locked: false, file: "mls104.js", bankKey: "MLS 104" },
        "MCB 102": { semester: "second", title: "MCB 102", level: "100L • Introductory Microbiology", description: "Bacteria, viruses, fungi, protozoa and microbial disease", icon: "🔬", iconGradient: "linear-gradient(135deg, #22c55e, #16a34a)", qCount: 92, locked: false, file: "mcb102.js", bankKey: "MCB 102" }
    };

   // ==================== TOPICS & NOTES FOR EACH COURSE ====================
    const COURSE_TOPICS = {
        
    
        "GST 102": {
    icon: "📝",
    topics: [
        { id: "communication",   name: "Communication Theory",              description: "Elements of communication, barriers, oral/written/non-verbal types, formal/informal", qCount: 56,  startIdx: 0,   endIdx: 56  },
        { id: "ict",             name: "Computer & ICT Basics",             description: "Hardware, software, networks, internet, storage, data and information", qCount: 26,  startIdx: 56,  endIdx: 82  },
        { id: "subject_verb",    name: "Subject-Verb Agreement",            description: "Concord rules, either/or, collective nouns, quantities and measurements", qCount: 12,  startIdx: 82,  endIdx: 94  },
        { id: "essay",           name: "Essay Writing",                     description: "Types of essays, structure, cohesion, topic sentence and paragraph unity", qCount: 22,  startIdx: 94,  endIdx: 116 },
        { id: "language_skills", name: "Language Skills",                   description: "Listening, speaking, reading and writing skills; fluency and comprehension", qCount: 30,  startIdx: 116, endIdx: 146 },
        { id: "note_taking",     name: "Note Taking & Outlining",           description: "Outline features, brainstorming, clustering, free writing, writing process", qCount: 18,  startIdx: 146, endIdx: 164 },
        { id: "vocabulary",      name: "Vocabulary & Word Formation",       description: "Reduplication, blending, compounding, antonyms, synonyms, connotation", qCount: 12,  startIdx: 164, endIdx: 176 },
        { id: "code_switching",  name: "Language Contact & Code Switching", description: "Code switching types, interference levels, code mixing, loanwords", qCount: 3,   startIdx: 176, endIdx: 179 },
        { id: "pronunciation",   name: "Pronunciation & Fluency",           description: "Vowel/consonant sounds, stress, accent, phonetics and phonology", qCount: 9,   startIdx: 179, endIdx: 188 },
        { id: "grammar",         name: "Grammar & Parts of Speech",         description: "Morpheme, word classes, tense, sentence structure, predicate and clauses", qCount: 130, startIdx: 188, endIdx: 318 }
    ]
},
        "GST 112": {
    icon: "🇳🇬",
    topics: [
        { id: "pre_colonial", name: "Pre-Colonial Nigeria", description: "Ancient civilizations, kingdoms, and ethnic groups before 1800", qCount: 15, startIdx: 0, endIdx: 15 },
        { id: "colonial_nigeria", name: "Colonial Nigeria", description: "British rule, amalgamation, and resistance", qCount: 15, startIdx: 15, endIdx: 30 },
        { id: "nationalism_independence", name: "Nationalism & Independence", description: "Political parties, nationalist leaders, independence", qCount: 15, startIdx: 30, endIdx: 45 },
        { id: "civil_war_military", name: "Civil War & Military Rule", description: "1967-1970 Civil War, coups, military regimes", qCount: 15, startIdx: 45, endIdx: 60 },
        { id: "trade_economy", name: "Trade & Self-Reliance", description: "Traditional trade, economic policies, apprenticeship", qCount: 10, startIdx: 60, endIdx: 70 },
        { id: "norms_values", name: "Norms, Values & Social Vices", description: "Omoluabi, cultural values, cultism, kidnapping", qCount: 10, startIdx: 70, endIdx: 80 },
        { id: "judiciary_rights", name: "Judiciary & Fundamental Rights", description: "Court system, constitutional rights, habeas corpus", qCount: 10, startIdx: 80, endIdx: 90 }
    ]
},
        "GST 104": {
    icon: "🇳🇬",
    topics: [
        { id: "pre_colonial", name: "Pre-Colonial Nigeria", description: "Ancient civilizations, kingdoms, and ethnic groups before 1800", qCount: 15, startIdx: 0, endIdx: 15 },
        { id: "colonial_nigeria", name: "Colonial Nigeria", description: "British rule, amalgamation, and resistance", qCount: 15, startIdx: 15, endIdx: 30 },
        { id: "nationalism_independence", name: "Nationalism & Independence", description: "Political parties, nationalist leaders, independence", qCount: 15, startIdx: 30, endIdx: 45 },
        { id: "civil_war_military", name: "Civil War & Military Rule", description: "1967-1970 Civil War, coups, military regimes", qCount: 15, startIdx: 45, endIdx: 60 },
        { id: "trade_economy", name: "Trade & Self-Reliance", description: "Traditional trade, economic policies, apprenticeship", qCount: 10, startIdx: 60, endIdx: 70 },
        { id: "norms_values", name: "Norms, Values & Social Vices", description: "Omoluabi, cultural values, cultism, kidnapping", qCount: 10, startIdx: 70, endIdx: 80 },
        { id: "judiciary_rights", name: "Judiciary & Fundamental Rights", description: "Court system, constitutional rights, habeas corpus", qCount: 10, startIdx: 80, endIdx: 90 }
    ]
},
        "BIO 102": {
            icon: "🔬",
            topics: [
                { id: "viruses", name: "Viruses", description: "Structure, replication, and diseases", qCount: 15, startIdx: 0, endIdx: 15 },
                { id: "bacteria", name: "Bacteria", description: "Classification, structure, and reproduction", qCount: 15, startIdx: 15, endIdx: 30 },
                { id: "fungi", name: "Fungi", description: "Types, reproduction, and economic importance", qCount: 15, startIdx: 30, endIdx: 45 },
                { id: "plant_kingdom", name: "Plant Kingdom", description: "Bryophytes, pteridophytes, gymnosperms, angiosperms", qCount: 15, startIdx: 45, endIdx: 60 },
                { id: "animal_kingdom", name: "Animal Kingdom", description: "Invertebrates and vertebrates", qCount: 15, startIdx: 60, endIdx: 75 },
                { id: "ecological_adaptations", name: "Ecological Adaptations", description: "Adaptations in plants and animals", qCount: 10, startIdx: 75, endIdx: 85 },
                { id: "physiology", name: "Physiology", description: "Nutrition, respiration, circulation", qCount: 10, startIdx: 85, endIdx: 95 },
                { id: "growth_reproduction", name: "Growth & Reproduction", description: "Development and reproduction", qCount: 5, startIdx: 95, endIdx: 100 }
            ]
        },
        "BIO 108": { icon: "🧫", topics: [{ id: "all", name: "All Topics", description: "Complete practical biology", qCount: 100, startIdx: 0, endIdx: 100 }] },
        "CHM 102": { icon: "🧪", topics: [{ id: "all", name: "All Topics", description: "Complete chemistry II", qCount: 100, startIdx: 0, endIdx: 100 }] },
        "CHM 108": { icon: "⚗️", topics: [{ id: "all", name: "All Topics", description: "Complete practical chemistry", qCount: 100, startIdx: 0, endIdx: 100 }] },
        "PHY 102": { icon: "⚡", topics: [{ id: "all", name: "All Topics", description: "Complete physics II", qCount: 100, startIdx: 0, endIdx: 100 }] },
        "PHY 108": { icon: "📐", topics: [{ id: "all", name: "All Topics", description: "Complete practical physics", qCount: 100, startIdx: 0, endIdx: 100 }] },
        "COS 102": { icon: "💻", topics: [{ id: "all", name: "All Topics", description: "Complete computing science", qCount: 100, startIdx: 0, endIdx: 100 }] },
       "MLS 102": {
    icon: "📜",
    topics: [
        { id: "evolution", name: "Evolution of MLS Practice", description: "History and development of Medical Laboratory Science in Nigeria and worldwide", qCount: 15, startIdx: 0, endIdx: 15 },
        { id: "legislation", name: "Legislations Governing MLS", description: "Laws, acts, and regulations for MLS practice in Nigeria", qCount: 15, startIdx: 15, endIdx: 30 },
        { id: "nomenclature", name: "Nomenclature & Certification", description: "Certificates, diplomas, degrees, and titles at different times", qCount: 15, startIdx: 30, endIdx: 45 },
        { id: "training_regulations", name: "Training Rules & Regulations", description: "Rules governing MLS education and training in Nigeria", qCount: 15, startIdx: 45, endIdx: 60 },
        { id: "accreditation", name: "Programme Approval & Accreditation", description: "Processes for accrediting MLS programs", qCount: 15, startIdx: 60, endIdx: 75 },
        { id: "professional_bodies", name: "Professional Bodies & Roles", description: "MLSCN, APHLN, NIMLT, and their functions", qCount: 15, startIdx: 75, endIdx: 90 },
        { id: "international_contributions", name: "International Contributions", description: "Global pioneers and contributions to MLS", qCount: 10, startIdx: 90, endIdx: 100 }
    ]
},

"MLS 104": {
    icon: "🦠",
    topics: [
        { id: "disease_concepts", name: "Basic Concepts of Disease", description: "Congenital, acquired, infectious, non-infectious diseases", qCount: 15, startIdx: 0, endIdx: 15 },
        { id: "cell_injury", name: "Cell Injury & Disorders", description: "Mechanisms of cell injury, primary causes of cell disorders", qCount: 15, startIdx: 15, endIdx: 30 },
        { id: "infectious_diseases", name: "Infectious Diseases", description: "Bacterial, viral, fungal, and parasitic infections", qCount: 20, startIdx: 30, endIdx: 50 },
        { id: "immune_system", name: "Immune System & Components", description: "Immunity, immune response, and related disorders", qCount: 15, startIdx: 50, endIdx: 65 },
        { id: "disease_mechanisms", name: "Pathophysiology of Diseases", description: "Mechanisms of acute infections, disease progression", qCount: 10, startIdx: 65, endIdx: 75 },
        { id: "laboratory_diagnosis", name: "Laboratory Diagnosis", description: "Microscopy, techniques for disease detection", qCount: 15, startIdx: 75, endIdx: 90 },
        { id: "prevention_control", name: "Prevention & Control", description: "Sanitation, hygiene, antibiotics, public health measures", qCount: 10, startIdx: 90, endIdx: 100 }
    ]
},
"MCB 102": {
    icon: "🔬",
    topics: [
        { id: "intro_history",            name: "Introduction & History",         description: "Definition, history of microbiology and pioneering scientists",      qCount: 15, startIdx: 0,  endIdx: 15 },
        { id: "spontaneous_generation",   name: "Spontaneous Generation",         description: "The debate, key experiments and disproving abiogenesis",              qCount: 12, startIdx: 15, endIdx: 27 },
        { id: "germ_theory",              name: "Germ Theory & Koch's Postulate", description: "Pasteur's germ theory and Koch's postulates for disease causation",   qCount: 11, startIdx: 27, endIdx: 38 },
        { id: "microbe_characteristics",  name: "Characteristics of Microbes",    description: "Unique features, structure and classification of microorganisms",     qCount: 10, startIdx: 38, endIdx: 48 },
        { id: "microbial_growth",         name: "Microbial Growth Phases",        description: "Lag, log, stationary and death phases of microbial growth",          qCount: 9,  startIdx: 48, endIdx: 57 },
        { id: "economic_fungi",           name: "Economic Importance of Fungi",   description: "Beneficial and harmful roles of fungi in industry and health",        qCount: 19, startIdx: 57, endIdx: 76 },
        { id: "economic_bacteria",        name: "Economic Importance of Bacteria",description: "Uses and harms of bacteria in food, medicine and environment",        qCount: 16, startIdx: 76, endIdx: 92 }
    ]
},
"MTH 102": {
    icon: "📐",
    topics: [
        { id: "functions", name: "Functions & Mappings", description: "Evaluation, inverse, composition, injective/surjective, floor/ceiling, domain, range", qCount: 11, startIdx: 0,  endIdx: 11 },
        { id: "limits", name: "Limits & Continuity", description: "Limit definition, limits at infinity, singularities, discontinuities, asymptotes", qCount: 11, startIdx: 11, endIdx: 22 },
        { id: "differentiation", name: "Differentiation", description: "Power, chain, product, quotient rules; trig, log, exponential, inverse trig derivatives", qCount: 18, startIdx: 22, endIdx: 40 },
        { id: "applications_derivatives", name: "Applications of Derivatives", description: "Tangent lines, maxima/minima, stationary points, velocity", qCount: 6,  startIdx: 40, endIdx: 46 },
        { id: "integration", name: "Integration", description: "Standard integrals, substitution, integration by parts, definite integrals", qCount: 20, startIdx: 46, endIdx: 66 }
    ]
},
"PHY 102": {
    icon: "⚡",
    topics: [
        { id: "electrostatics", name: "Electrostatics", description: "Coulomb's law, electric field, potential, Gauss's law", qCount: 25, startIdx: 0, endIdx: 25 },
        { id: "dc_circuits", name: "DC Circuits", description: "Ohm's law, Kirchhoff's laws, resistors, power", qCount: 15, startIdx: 25, endIdx: 40 },
        { id: "magnetic_fields", name: "Magnetic Fields", description: "Lorentz force, Biot-Savart, Ampère's law, magnetic materials", qCount: 20, startIdx: 40, endIdx: 60 },
        { id: "em_induction", name: "Electromagnetic Induction", description: "Faraday's law, Lenz's law, inductance, transformers, Maxwell's equations", qCount: 20, startIdx: 60, endIdx: 80 },
        { id: "ac_circuits", name: "AC Circuits & EM Waves", description: "Reactance, impedance, resonance, EM spectrum", qCount: 20, startIdx: 80, endIdx: 100 }
    ]
},
"COS 102": {
    icon: "💻",
    topics: [
        { id: "intro_computing", name: "Introduction to Computing", description: "Computer basics, software/hardware, problem classification", qCount: 15, startIdx: 0, endIdx: 15 },
        { id: "solvability", name: "Solvable & Unsolvable Problems", description: "Computability, complexity, halting problem, NP-complete", qCount: 10, startIdx: 15, endIdx: 25 },
        { id: "problem_techniques", name: "Problem Solving Techniques", description: "Abstraction, analogy, brainstorming, divide and conquer, heuristics", qCount: 20, startIdx: 25, endIdx: 45 },
        { id: "solution_design", name: "Solution Formulation & Design", description: "Flowcharts, pseudocode, decision trees, decision tables", qCount: 20, startIdx: 45, endIdx: 65 },
        { id: "implementation", name: "Implementation & Evaluation", description: "Coding, testing, debugging, refinement, maintenance", qCount: 15, startIdx: 65, endIdx: 80 },
        { id: "programming_basics", name: "Programming Concepts", description: "Variables, data types, loops, conditionals, functions, Python/C", qCount: 20, startIdx: 80, endIdx: 100 }
    ]
},
"BIO 108": {
    icon: "🔬",
    topics: [
        { id: "plant_anatomy", name: "Anatomy of Flowering Plants", description: "Stem, leaf, root structure; parenchyma, collenchyma, sclerenchyma, xylem, phloem", qCount: 30, startIdx: 0, endIdx: 30 },
        { id: "fruits_seeds", name: "Fruits and Seeds", description: "Types of fruits (simple, aggregate, multiple), dry/fleshy, seed structure", qCount: 15, startIdx: 30, endIdx: 45 },
        { id: "biological_wares", name: "Handling Biological Wares", description: "Microscope use, dissection tools, preservation, safety", qCount: 10, startIdx: 45, endIdx: 55 },
        { id: "animal_tissues", name: "Animal Tissues", description: "Epithelial, connective, muscle, nervous tissue histology", qCount: 20, startIdx: 55, endIdx: 75 },
        { id: "invertebrates", name: "Lower Invertebrates", description: "Porifera, Cnidaria, Platyhelminthes, Nematoda, Annelida, Arthropoda, Mollusca", qCount: 15, startIdx: 75, endIdx: 90 },
        { id: "dissection", name: "Dissection & Practical Skills", description: "Vertebrate/invertebrate dissection, histology techniques", qCount: 10, startIdx: 90, endIdx: 100 }
    ]
},
  "CHM 102": {
      icon: "🧪",
      topics: [
          { id: "history_organic", name: "History of Organic Chemistry", description: "Development, vital force theory, importance", qCount: 10, startIdx: 0, endIdx: 10 },
          { id: "fullerenes", name: "Fullerenes & Nanochemistry", description: "Allotropes of carbon, C₆₀, nanotubes, graphene", qCount: 10, startIdx: 10, endIdx: 20 },
          { id: "electronic_theory", name: "Electronic Theory", description: "Bonding, electronegativity, resonance, hyperconjugation", qCount: 10, startIdx: 20, endIdx: 30 },
          { id: "purification_analysis", name: "Isolation & Structure Determination", description: "Recrystallization, distillation, chromatography, IR, NMR, MS", qCount: 10, startIdx: 30, endIdx: 40 },
          { id: "nomenclature", name: "Nomenclature & Functional Groups", description: "IUPAC naming, alcohols, aldehydes, ketones, acids, amines", qCount: 15, startIdx: 40, endIdx: 55 },
          { id: "hydrocarbons", name: "Alkanes, Alkenes, Alkynes", description: "Properties, reactions, Markovnikov's rule", qCount: 10, startIdx: 55, endIdx: 65 },
          { id: "mechanisms", name: "Reaction Mechanisms & Kinetics", description: "SN1, SN2, carbocations, nucleophiles, electrophiles", qCount: 10, startIdx: 65, endIdx: 75 },
          { id: "functional_group_chem", name: "Alcohols, Ethers, Amines", description: "Oxidation, Lucas test, iodoform, diazotization", qCount: 10, startIdx: 75, endIdx: 85 },
          { id: "inorganic_chemistry", name: "Group IA, IIA, IVA & Transition Metals", description: "Alkali metals, alkaline earth, carbon group, d-block elements", qCount: 15, startIdx: 85, endIdx: 100 }
      ]
  },
    };

    // ==================== SIMPLIFIED NOTES FOR EACH COURSE ====================
    const COURSE_NOTES = {
        "CHM 102": {
    history_organic: `
        <h4>📜 History and Development of Organic Chemistry</h4>
        
        <div class="definition-box">
            <strong>📌 Key Definition:</strong> Organic chemistry is the study of carbon-containing compounds (excluding simple carbon oxides, carbonates, and carbides).
        </div>
        
        <h4>📋 Historical Milestones</h4>
        <ul>
            <li><strong>1807:</strong> Berzelius coined the term "organic chemistry" (compounds from living organisms).</li>
            <li><strong>1828:</strong> <strong>Friedrich Wöhler</strong> synthesized urea (NH₂)₂CO from ammonium cyanate (inorganic) → disproved the <strong>Vital Force Theory</strong>.</li>
            <li><strong>1850s-1860s:</strong> Kekulé, Couper, and Butlerov developed structural theory (carbon is tetravalent).</li>
            <li><strong>1865:</strong> Kekulé proposed benzene's cyclic structure.</li>
            <li><strong>Present:</strong> Over 90% of known compounds are organic.</li>
        </ul>
        
        <div class="key-point">
            <strong>💡 Key Point:</strong> Carbon's ability to form four covalent bonds and catenate (form long chains/rings) makes organic chemistry unique.
        </div>
        
        <h4>🔬 Importance of Organic Chemistry</h4>
        <ul>
            <li>Pharmaceuticals (drugs, medicines)</li>
            <li>Polymers and plastics (polyethylene, nylon, polyester)</li>
            <li>Petrochemicals (fuels, lubricants, solvents)</li>
            <li>Agrochemicals (pesticides, herbicides, fertilizers)</li>
            <li>Dyes, pigments, and cosmetics</li>
            <li>Food chemistry (flavors, preservatives, vitamins)</li>
        </ul>
    `,
    
    fullerenes: `
        <h4>🔬 Fullerenes and Nanochemistry</h4>
        
        <div class="definition-box">
            <strong>📌 Key Definition:</strong> Fullerenes are the fourth allotrope of carbon (after diamond, graphite, and graphene), consisting of closed-cage carbon molecules.
        </div>
        
        <h4>📋 Discovery and Structure</h4>
        <ul>
            <li><strong>Discovered:</strong> 1985 by Curl, Kroto, and Smalley (Nobel Prize 1996).</li>
            <li><strong>Buckminsterfullerene (C₆₀):</strong> Most stable; shaped like a soccer ball (truncated icosahedron).</li>
            <li><strong>Structure:</strong> 20 hexagons + 12 pentagons, 60 carbon atoms, 90 bonds.</li>
            <li><strong>Other fullerenes:</strong> C₇₀, C₇₆, C₈₄ (elongated shapes).</li>
        </ul>
        
        <div class="key-point">
            <strong>💡 Key Point:</strong> Fullerenes are named after architect Buckminster Fuller, who designed geodesic domes with similar geometry.
        </div>
        
        <h4>📈 Carbon Nanotubes</h4>
        <ul>
            <li><strong>Structure:</strong> Rolled-up graphene sheets forming cylindrical tubes.</li>
            <li><strong>Types:</strong> Single-walled (SWCNT), multi-walled (MWCNT).</li>
            <li><strong>Properties:</strong> Exceptional strength (100x steel), high conductivity, thermal stability.</li>
            <li><strong>Applications:</strong> Reinforced composites, nanoelectronics, drug delivery, sensors.</li>
        </ul>
        
        <h4>🔧 Applications of Fullerenes</h4>
        <ul>
            <li><strong>Medicine:</strong> Drug delivery systems (encapsulation), antioxidants, MRI contrast agents.</li>
            <li><strong>Electronics:</strong> Organic photovoltaics, semiconductors, superconductors.</li>
            <li><strong>Materials Science:</strong> Lubricants, catalysts, superhard materials.</li>
            <li><strong>Nanotechnology:</strong> Nanostructures, nanomachines, nano-coatings.</li>
        </ul>
        
        <h4>🟢 Graphene</h4>
        <ul>
            <li><strong>Structure:</strong> Single-atom-thick sheet of carbon atoms in hexagonal lattice.</li>
            <li><strong>Properties:</strong> Strongest known material, conducts electricity, transparent.</li>
            <li><strong>Applications:</strong> Flexible electronics, high-capacity batteries, water filters.</li>
        </ul>
    `,
    
    electronic_theory: `
        <h4>⚡ Electronic Theory in Organic Chemistry</h4>
        
        <div class="definition-box">
            <strong>📌 Key Definitions:</strong>
            <ul>
                <li><strong>Electronegativity:</strong> Atom's ability to attract bonding electrons (F = 4.0, O = 3.5, N = 3.0, C = 2.5).</li>
                <li><strong>Inductive Effect:</strong> Permanent polarization through sigma bonds.</li>
                <li><strong>Resonance (Mesomeric Effect):</strong> Delocalization of pi electrons.</li>
            </ul>
        </div>
        
        <h4>📊 Types of Bonds</h4>
        <ul>
            <li><strong>Covalent:</strong> Equal sharing of electrons (non-polar, same element).</li>
            <li><strong>Polar Covalent:</strong> Unequal sharing (electronegativity difference 0.5-1.7).</li>
            <li><strong>Ionic:</strong> Complete electron transfer (electronegativity difference > 1.7).</li>
            <li><strong>Coordinate Covalent:</strong> Both electrons from one atom.</li>
        </ul>
        
        <div class="key-point">
            <strong>💡 Key Point:</strong> Electron-withdrawing groups (-I effect): NO₂, CN, COOH, halogens. Electron-donating groups (+I effect): alkyl groups (CH₃, C₂H₅).
        </div>
        
        <h4>📈 Inductive Effect</h4>
        <ul>
            <li><strong>+I Effect (Electron-donating):</strong> Alkyl groups push electrons toward the reactive center.</li>
            <li><strong>-I Effect (Electron-withdrawing):</strong> Electronegative atoms pull electrons away.</li>
            <li><strong>Decreases with distance:</strong> Effect weakens after 3-4 bonds.</li>
        </ul>
        
        <h4>📊 Resonance (Mesomeric Effect)</h4>
        <ul>
            <li><strong>+M Effect:</strong> Electron-donating groups with lone pairs (-OH, -NH₂, -OR).</li>
            <li><strong>-M Effect:</strong> Electron-withdrawing groups with pi bonds (-NO₂, -CN, -CHO, -COOH).</li>
            <li><strong>Stability:</strong> Delocalization lowers energy → more stable molecule.</li>
        </ul>
        
        <h4>🔵 Hyperconjugation</h4>
        <ul>
            <li>Interaction between sigma (C-H) bonds and adjacent empty/partially filled p-orbitals.</li>
            <li>Increases carbocation stability: tertiary > secondary > primary > methyl.</li>
            <li>Also called "no-bond resonance" or σ-π conjugation.</li>
        </ul>
        
        <h4>🔄 Aromaticity (Hückel's Rule)</h4>
        <ul>
            <li>Cyclic, planar, fully conjugated system with 4n+2 π electrons (n = 0,1,2,...).</li>
            <li>Examples: Benzene (6 e⁻), naphthalene (10 e⁻), pyridine (6 e⁻).</li>
            <li>Anti-aromatic: 4n π electrons (cyclobutadiene, unstable).</li>
        </ul>
    `,
    
    purification_analysis: `
        <h4>🔬 Isolation, Purification, and Structure Determination</h4>
        
        <div class="definition-box">
            <strong>📌 Key Concept:</strong> Organic compounds must be purified before analysis using physical and chemical methods.
        </div>
        
        <h4>📊 Purification Methods</h4>
        <ul>
            <li><strong>Recrystallization:</strong> Dissolve in hot solvent, cool to form pure crystals (removes impurities).</li>
            <li><strong>Distillation:</strong> Separates liquids by boiling point (simple, fractional, vacuum, steam).</li>
            <li><strong>Sublimation:</strong> Solid → gas → solid (for compounds like iodine, camphor).</li>
            <li><strong>Extraction:</strong> Uses immiscible solvents (separatory funnel).</li>
            <li><strong>Chromatography:</strong> Separates by polarity/differential adsorption (TLC, column, GC, HPLC).</li>
        </ul>
        
        <div class="key-point">
            <strong>💡 Key Point:</strong> TLC (Thin Layer Chromatography) checks purity and monitors reactions. Rf = distance spot moves / distance solvent moves.
        </div>
        
        <h4>📈 Melting Point (MP)</h4>
        <ul>
            <li>Pure compounds have sharp, characteristic melting points.</li>
            <li>Impurities lower and broaden the melting point.</li>
            <li>Mixed melting point confirms identity (no depression = identical).</li>
        </ul>
        
        <h4>🔧 Structure Determination Techniques</h4>
        <ul>
            <li><strong>IR Spectroscopy:</strong> Identifies functional groups (O-H: broad 3200-3600, C=O: sharp 1700-1750, N-H: 3300).</li>
            <li><strong>NMR Spectroscopy:</strong> 
                <ul>
                    <li>¹H NMR: Number and types of hydrogens.</li>
                    <li>¹³C NMR: Carbon skeleton.</li>
                    <li>Chemical shift (δ) indicates electronic environment.</li>
                </ul>
            </li>
            <li><strong>Mass Spectrometry (MS):</strong> 
                <ul>
                    <li>Molecular ion (M⁺) gives molecular weight.</li>
                    <li>Fragmentation pattern reveals structure.</li>
                </ul>
            </li>
            <li><strong>UV-Vis Spectroscopy:</strong> Detects conjugated systems (chromophores).</li>
            <li><strong>Elemental Analysis:</strong> Determines %C, %H, %N (empirical formula).</li>
        </ul>
        
        <h4>📊 Qualitative Analysis (Functional Group Tests)</h4>
        <ul>
            <li><strong>Bromine water:</strong> Unsaturation (red-brown decolorized).</li>
            <li><strong>Baeyer's test (KMnO₄):</strong> Unsaturation (purple → brown precipitate).</li>
            <li><strong>Lucas test:</strong> Alcohols (cloudiness: 1° no reaction, 2° slow, 3° immediate).</li>
            <li><strong>Iodoform test:</strong> Methyl ketones/secondary alcohols (yellow precipitate).</li>
            <li><strong>Fehling's/Benedict's test:</strong> Aldehydes (red precipitate).</li>
            <li><strong>Tollens' test (silver mirror):</strong> Aldehydes (silver mirror).</li>
            <li><strong>2,4-DNP test:</strong> Carbonyl compounds (orange precipitate).</li>
        </ul>
    `,
    
    nomenclature: `
        <h4>📝 IUPAC Nomenclature and Functional Groups</h4>
        
        <div class="definition-box">
            <strong>📌 Key Concept:</strong> IUPAC (International Union of Pure and Applied Chemistry) provides systematic naming rules for organic compounds.
        </div>
        
        <h4>📊 Nomenclature Rules</h4>
        <ol>
            <li>Find longest continuous carbon chain (parent chain).</li>
            <li>Number from end nearest substituent/functional group.</li>
            <li>Name substituents (alkyl, halo, etc.) with numbers.</li>
            <li>Use prefixes (di-, tri-) for multiple identical groups.</li>
            <li>List substituents alphabetically.</li>
        </ol>
        
        <div class="key-point">
            <strong>💡 Key Point:</strong> Parent chain names: Meth (C1), Eth (C2), Prop (C3), But (C4), Pent (C5), Hex (C6), Hept (C7), Oct (C8), Non (C9), Dec (C10).
        </div>
        
        <h4>📋 Functional Groups Summary</h4>
        
        <h4>🔴 Hydrocarbons</h4>
        <ul>
            <li><strong>Alkane:</strong> C-C single bond, -ane (methane, ethane, propane)</li>
            <li><strong>Alkene:</strong> C=C double bond, -ene (ethene, propene)</li>
            <li><strong>Alkyne:</strong> C≡C triple bond, -yne (ethyne, propyne)</li>
            <li><strong>Aromatic:</strong> Benzene ring, (benzene, toluene, phenol)</li>
        </ul>
        
        <h4>🔵 Oxygen-Containing</h4>
        <ul>
            <li><strong>Alcohol:</strong> -OH, -ol (methanol, ethanol, 2-propanol)</li>
            <li><strong>Ether:</strong> C-O-C, alkoxy alkane (methoxymethane, ethoxyethane)</li>
            <li><strong>Aldehyde:</strong> -CHO, -al (methanal, ethanal)</li>
            <li><strong>Ketone:</strong> -CO-, -one (propanone, butanone)</li>
            <li><strong>Carboxylic acid:</strong> -COOH, -oic acid (methanoic, ethanoic)</li>
            <li><strong>Ester:</strong> -COOR, alkyl alkanoate (methyl ethanoate)</li>
            <li><strong>Acid anhydride:</strong> -CO-O-CO-, -oic anhydride</li>
        </ul>
        
        <h4>🟡 Nitrogen-Containing</h4>
        <ul>
            <li><strong>Amine:</strong> -NH₂, R-NH₂ (primary), R₂NH (secondary), R₃N (tertiary), -amine</li>
            <li><strong>Amide:</strong> -CONH₂, -amide (ethanamide)</li>
            <li><strong>Nitrile:</strong> -C≡N, -nitrile (ethanenitrile)</li>
            <li><strong>Nitro:</strong> -NO₂, nitro- (nitromethane)</li>
        </ul>
        
        <h4>🟢 Halogen-Containing</h4>
        <ul>
            <li><strong>Alkyl halide:</strong> -X (F, Cl, Br, I), halo- (chloromethane, bromoethane)</li>
            <li><strong>Acyl halide:</strong> -COX, -oyl halide (ethanoyl chloride)</li>
        </ul>
        
        <h4>🔵 Sulfur-Containing</h4>
        <ul>
            <li><strong>Thiol:</strong> -SH, -thiol (methanethiol)</li>
            <li><strong>Sulfide:</strong> C-S-C, thioether</li>
            <li><strong>Sulfonic acid:</strong> -SO₃H, -sulfonic acid</li>
        </ul>
    `,
    
    hydrocarbons: `
        <h4>🔥 Alkanes, Alkenes, and Alkynes</h4>
        
        <div class="definition-box">
            <strong>📌 Key Definitions:</strong>
            <ul>
                <li><strong>Alkanes (paraffins):</strong> CₙH₂ₙ₊₂, single bonds only (saturated).</li>
                <li><strong>Alkenes (olefins):</strong> CₙH₂ₙ, carbon-carbon double bond (unsaturated).</li>
                <li><strong>Alkynes (acetylenes):</strong> CₙH₂ₙ₋₂, carbon-carbon triple bond (unsaturated).</li>
            </ul>
        </div>
        
        <h4>📋 Alkanes (Saturated Hydrocarbons)</h4>
        <ul>
            <li><strong>Properties:</strong> Non-polar, insoluble in water, soluble in organic solvents.</li>
            <li><strong>Reactions:</strong> 
                <ul>
                    <li><strong>Halogenation (Free radical substitution):</strong> With Cl₂/Br₂ + UV light → alkyl halides.</li>
                    <li><strong>Combustion:</strong> Complete: CH₄ + 2O₂ → CO₂ + 2H₂O (exothermic).</li>
                    <li><strong>Cracking:</strong> High temperature breaks large alkanes into smaller ones + alkenes.</li>
                </ul>
            </li>
            <li><strong>Conformation:</strong> Staggered (more stable) vs eclipsed (less stable).</li>
        </ul>
        
        <div class="key-point">
            <strong>💡 Key Point:</strong> Alkanes are relatively unreactive (paraffins = "little affinity"). Halogenation requires UV light to initiate free radicals.
        </div>
        
        <h4>📊 Alkenes</h4>
        <ul>
            <li><strong>Properties:</strong> More reactive than alkanes due to π-bond (available for reactions).</li>
            <li><strong>Reactions:</strong>
                <ul>
                    <li><strong>Electrophilic Addition:</strong> 
                        <ul>
                            <li>Hydrogenation (H₂/Pt, Pd, Ni) → alkane.</li>
                            <li>Halogenation (Br₂) → dibromoalkane (bromine decolorized - test for unsaturation).</li>
                            <li>Hydrohalogenation (HBr, HCl) → alkyl halide.</li>
                            <li>Hydration (H₂O/H⁺) → alcohol.</li>
                        </ul>
                    </li>
                    <li><strong>Polymerization:</strong> Alkenes → polymers (polyethylene, polypropylene).</li>
                    <li><strong>Oxidation (KMnO₄):</strong> Dihydroxylation (diol), or cleavage (ozonolysis).</li>
                </ul>
            </li>
        </ul>
        
        <h4>📈 Markovnikov's Rule</h4>
        <p>"The rich get richer": The hydrogen adds to the carbon with more hydrogens already attached.</p>
        <p>Example: Propene + HBr → 2-bromopropane (major), 1-bromopropane (minor).</p>
        
        <h4>🔥 Anti-Markovnikov Addition</h4>
        <p>HBr + peroxide → 1-bromopropane (major). Only HBr shows this effect (free radical mechanism).</p>
        
        <h4>📋 Alkynes</h4>
        <ul>
            <li><strong>Properties:</strong> Terminal alkynes (HC≡CR) are weakly acidic (pKa ~25).</li>
            <li><strong>Reactions:</strong>
                <ul>
                    <li>Addition of H₂ (2 steps) → alkane via alkene.</li>
                    <li>Addition of Br₂ (2 steps) → tetrahaloalkane.</li>
                    <li>Terminal alkynes + NaNH₂ → acetylide ion (nucleophile).</li>
                </ul>
            </li>
            <li><strong>Test for terminal alkyne:</strong> AgNO₃/NH₃ → white precipitate (silver acetylide).</li>
        </ul>
    `,
    
    mechanisms: `
        <h4>⚙️ Reaction Mechanisms and Kinetics</h4>
        
        <div class="definition-box">
            <strong>📌 Key Definitions:</strong>
            <ul>
                <li><strong>Reaction Mechanism:</strong> Step-by-step sequence of bond-breaking and bond-forming.</li>
                <li><strong>Rate of Reaction:</strong> Change in concentration per unit time.</li>
                <li><strong>Activation Energy (Ea):</strong> Minimum energy needed for reaction.</li>
            </ul>
        </div>
        
        <h4>📊 Factors Affecting Reaction Rate</h4>
        <ul>
            <li><strong>Concentration:</strong> Higher concentration → more collisions → faster rate.</li>
            <li><strong>Temperature:</strong> Higher T → molecules have more energy → faster rate.</li>
            <li><strong>Catalyst:</strong> Lowers activation energy (provides alternative pathway).</li>
            <li><strong>Surface area:</strong> Smaller particles → more surface area → faster rate.</li>
        </ul>
        
        <div class="key-point">
            <strong>💡 Key Point:</strong> Arrhenius equation: k = Ae^{-Ea/RT}. Rate constant increases exponentially with temperature.
        </div>
        
        <h4>📋 Carbocation Stability</h4>
        <p>Tertiary (R₃C⁺) > Secondary (R₂CH⁺) > Primary (RCH₂⁺) > Methyl (CH₃⁺)</p>
        <p>Stability increases with alkyl substitution due to hyperconjugation and inductive effects.</p>
        
        <h4>🔬 Nucleophiles and Electrophiles</h4>
        <ul>
            <li><strong>Nucleophile (Nu⁻):</strong> "Nucleus-loving", donates electrons (OH⁻, NH₃, H₂O, CN⁻, ROH).</li>
            <li><strong>Electrophile (E⁺):</strong> "Electron-loving", accepts electrons (H⁺, Br⁺, BF₃, AlCl₃).</li>
        </ul>
        
        <h4>📊 SN1 Reaction (Substitution Nucleophilic Unimolecular)</h4>
        <ul>
            <li><strong>Two steps:</strong> Ionization (slow, rate-determining) → carbocation → attack by nucleophile.</li>
            <li><strong>Rate depends on:</strong> [substrate] only (first order).</li>
            <li><strong>Best for:</strong> Tertiary alkyl halides (stable carbocation).</li>
            <li><strong>Stereochemistry:</strong> Racemization (both R and S products).</li>
            <li><strong>Competes with elimination (E1).</strong></li>
        </ul>
        
        <h4>📊 SN2 Reaction (Substitution Nucleophilic Bimolecular)</h4>
        <ul>
            <li><strong>One step:</strong> Backside attack by nucleophile + simultaneous leaving group departure.</li>
            <li><strong>Rate depends on:</strong> [substrate] and [nucleophile] (second order).</li>
            <li><strong>Best for:</strong> Primary and methyl alkyl halides (least steric hindrance).</li>
            <li><strong>Stereochemistry:</strong> Inversion of configuration (Walden inversion).</li>
            <li><strong>Competes with elimination (E2).</strong></li>
        </ul>
        
        <h4>📋 Elimination Reactions (E1 and E2)</h4>
        <ul>
            <li><strong>E1:</strong> Two-step (like SN1), forms alkene. Favored by tertiary substrates, weak bases.</li>
            <li><strong>E2:</strong> One-step (concerted), requires strong bulky base, anti-periplanar elimination.</li>
            <li><strong>Zaitsev's rule:</strong> More substituted alkene (more stable) is major product.</li>
        </ul>
        
        <h4>🔬 Catalysts</h4>
        <ul>
            <li><strong>Homogeneous:</strong> Same phase as reactants (e.g., H⁺ in ester hydrolysis).</li>
            <li><strong>Heterogeneous:</strong> Different phase (e.g., Pt, Pd, Ni in hydrogenation).</li>
        </ul>
    `,
    
    functional_group_chem: `
        <h4>🧪 Alcohols, Ethers, and Amines</h4>
        
        <div class="definition-box">
            <strong>📌 Key Definitions:</strong>
            <ul>
                <li><strong>Alcohols:</strong> R-OH, classified as 1°, 2°, 3° based on carbon attached to OH.</li>
                <li><strong>Ethers:</strong> R-O-R', relatively inert, good solvents.</li>
                <li><strong>Amines:</strong> Derivatives of NH₃, classified as 1°, 2°, 3°, 4° (quaternary).</li>
            </ul>
        </div>
        
        <h4>📋 Alcohols</h4>
        <ul>
            <li><strong>Oxidation:</strong>
                <ul>
                    <li>1° alcohol → aldehyde (with PCC) → carboxylic acid (with K₂Cr₂O₇).</li>
                    <li>2° alcohol → ketone.</li>
                    <li>3° alcohol → no oxidation (no H on carbinol carbon).</li>
                </ul>
            </li>
            <li><strong>Dehydration:</strong> With concentrated H₂SO₄ → alkene (E1 mechanism).</li>
            <li><strong>Reaction with metals:</strong> 2ROH + 2Na → 2RONa + H₂ (sodium alkoxide).</li>
            <li><strong>Esterification:</strong> ROH + R'COOH ⇌ R'COOR + H₂O (Fischer esterification, H⁺ catalyst).</li>
        </ul>
        
        <div class="key-point">
            <strong>💡 Key Point:</strong> Lucas test distinguishes alcohols: ZnCl₂/HCl → cloudiness immediate (3°), slow (2°), none at room temp (1°).
        </div>
        
        <h4>📊 Ethers</h4>
        <ul>
            <li><strong>Williamson ether synthesis:</strong> R-O⁻ + R'-X → R-O-R' + X⁻ (best method).</li>
            <li><strong>Properties:</strong> Low reactivity, good solvents (diethyl ether, THF).</li>
            <li><strong>Cleavage:</strong> Strong HI or HBr cleaves ethers to alkyl halides.</li>
        </ul>
        
        <h4>📋 Amines</h4>
        <ul>
            <li><strong>Basicity:</strong> 2° > 1° > 3° > NH₃ (in gas phase). In water: 2° > 1° > 3° > NH₃.</li>
            <li><strong>Aliphatic amines:</strong> Stronger bases than ammonia (+I effect of alkyl groups).</li>
            <li><strong>Aromatic amines (aniline):</strong> Weaker bases (lone pair delocalized into ring).</li>
            <li><strong>Reactions:</strong>
                <ul>
                    <li>Alkylation: RNH₂ + R'X → R₂NH + R'X → R₃N + R'X → R₄N⁺X⁻.</li>
                    <li>Acylation: RNH₂ + R'COCl → R'CONHR (amide).</li>
                    <li>Diazotization (primary aromatic amines): ArNH₂ + NaNO₂/HCl (0-5°C) → ArN₂⁺Cl⁻ (diazonium salt).</li>
                </ul>
            </li>
        </ul>
        
        <h4>🔵 Iodoform Test</h4>
        <p>Positive for: CH₃-CO- (methyl ketones) and CH₃-CH(OH)- (secondary alcohols oxidizable to methyl ketones).</p>
        <p>Reaction: CH₃CO- + I₂ + NaOH → CHI₃ (yellow precipitate) + HCOONa.</p>
        
        <h4>🟢 Diazotization and Azo Dyes</h4>
        <p>Benzenediazonium salts couple with phenols or aromatic amines → azo dyes (colored).</p>
    `,
    
    inorganic_chemistry: `
        <h4>🔬 Group IA, IIA, IVA and Transition Metals</h4>
        
        <div class="definition-box">
            <strong>📌 Key Definitions:</strong>
            <ul>
                <li><strong>Group IA (Alkali Metals):</strong> Li, Na, K, Rb, Cs, Fr (ns¹ configuration).</li>
                <li><strong>Group IIA (Alkaline Earth Metals):</strong> Be, Mg, Ca, Sr, Ba, Ra (ns² configuration).</li>
                <li><strong>Group IVA (Carbon Group):</strong> C, Si, Ge, Sn, Pb (ns²np² configuration).</li>
            </ul>
        </div>
        
        <h4>📋 Group IA (Alkali Metals)</h4>
        <ul>
            <li><strong>Properties:</strong> Soft, low melting points, highly reactive, +1 oxidation state.</li>
            <li><strong>Reactivity increases down group:</strong> Li < Na < K < Rb < Cs (ionization energy decreases).</li>
            <li><strong>Reactions:</strong>
                <ul>
                    <li>With water: 2M + 2H₂O → 2MOH + H₂ (vigorous, ignites with K, Rb, Cs).</li>
                    <li>With oxygen: Li → Li₂O, Na → Na₂O₂ (peroxide), K → KO₂ (superoxide).</li>
                    <li>With halogens: 2M + X₂ → 2MX (ionic salts).</li>
                </ul>
            </li>
        </ul>
        
        <div class="key-point">
            <strong>💡 Key Point:</strong> Li shows anomalous behavior due to small size and high charge density (forms covalent compounds, reacts slowly with water).
        </div>
        
        <h4>📊 Group IIA (Alkaline Earth Metals)</h4>
        <ul>
            <li><strong>Properties:</strong> Harder, higher melting points than Group IA, +2 oxidation state.</li>
            <li><strong>Reactivity increases down group:</strong> Be < Mg < Ca < Sr < Ba (Be almost inert).</li>
            <li><strong>Reactions:</strong>
                <ul>
                    <li>With water: Be, Mg (slow with steam), Ca, Sr, Ba (vigorous with cold water).</li>
                    <li>Solubility trend of hydroxides: Increases down group (Mg(OH)₂ sparingly soluble, Ba(OH)₂ soluble).</li>
                    <li>Thermal stability of carbonates increases down group.</li>
                </ul>
            </li>
            <li><strong>Limewater test:</strong> Ca(OH)₂ + CO₂ → CaCO₃ (white precipitate, turns milky). Excess CO₂ dissolves precipitate.</li>
        </ul>
        
        <h4>📋 Group IVA (Carbon Group)</h4>
        <ul>
            <li><strong>Properties:</strong> Oxidation states: +4 and +2 (inert pair effect makes +2 more stable down group).</li>
            <li><strong>Down the group:</strong> Metallic character increases (C, Si nonmetals; Ge, Sn metalloids; Pb metal).</li>
            <li><strong>Inert pair effect:</strong> Heavier elements prefer lower oxidation state (+2 vs +4).</li>
            <li><strong>CO₂ (carbon dioxide):</strong> Acidic oxide, greenhouse gas, dry ice (solid).</li>
            <li><strong>SiO₂ (silica):</strong> Network covalent solid (quartz, sand), high melting point, resistant to acids except HF.</li>
            <li><strong>Sn and Pb:</strong> Both +2 and +4 compounds; Pb(IV) strongly oxidizing.</li>
        </ul>
        
        <h4>🔬 Transition Metals (d-block elements)</h4>
        <ul>
            <li><strong>Definition:</strong> Elements with partially filled d-orbitals (groups 3-12).</li>
            <li><strong>Characteristics:</strong>
                <ul>
                    <li><strong>Variable oxidation states:</strong> Fe²⁺/Fe³⁺, Cu⁺/Cu²⁺, Mn²⁺/Mn⁴⁺/Mn⁷⁺.</li>
                    <li><strong>Colored compounds:</strong> Cu²⁺ (blue), Cr³⁺ (green), MnO₄⁻ (purple). Color due to d-d transitions.</li>
                    <li><strong>Paramagnetism:</strong> Unpaired d-electrons → attracted to magnetic fields.</li>
                    <li><strong>Catalytic activity:</strong> Fe (Haber process), Ni (hydrogenation), Pt/Pd (catalytic converters).</li>
                    <li><strong>Complex formation:</strong> Ligands (H₂O, NH₃, Cl⁻, CN⁻) coordinate to metal.</li>
                </ul>
            </li>
        </ul>
        
        <h4>📊 Coordination Complexes</h4>
        <ul>
            <li><strong>Complex ion:</strong> [Metal (Ligand)ₙ]^{charge}</li>
            <li><strong>Ligands:</strong> 
                <ul>
                    <li>Monodentate (H₂O, NH₃, Cl⁻, CN⁻) - one donor atom.</li>
                    <li>Bidentate (en, oxalate) - two donor atoms.</li>
                    <li>Polydentate (EDTA) - chelating agents.</li>
                </ul>
            </li>
            <li><strong>Coordination number:</strong> Number of donor atoms (typically 4 or 6).</li>
            <li><strong>Crystal Field Theory:</strong> Explains color and magnetism via d-orbital splitting.</li>
        </ul>
    `
},
"BIO 108": {
    plant_anatomy: `
        <h4>🌿 Anatomy of Flowering Plants</h4>
        
        <div class="definition-box">
            <strong>📌 Key Concept:</strong> Plants have three primary vegetative organs: roots (absorption/anchorage), stems (support/transport), and leaves (photosynthesis).
        </div>
        
        <h4>📊 Plant Tissues</h4>
        
        <h4>🟢 Simple Tissues (One cell type)</h4>
        <ul>
            <li><strong>Parenchyma:</strong> 
                <ul>
                    <li>Thin primary walls, living at maturity.</li>
                    <li>Functions: Photosynthesis (chlorenchyma), storage, secretion, wound healing.</li>
                    <li>Most common and versatile tissue.</li>
                </ul>
            </li>
            <li><strong>Collenchyma:</strong>
                <ul>
                    <li>Unevenly thickened primary walls (pectin + cellulose), living.</li>
                    <li>Functions: Flexible support in growing regions (young stems, petioles).</li>
                    <li>Found in cortex and just beneath epidermis.</li>
                </ul>
            </li>
            <li><strong>Sclerenchyma:</strong>
                <ul>
                    <li>Thick lignified secondary walls, dead at maturity.</li>
                    <li>Types: Fibers (long, pointed) and Sclereids (short, irregular, stone cells).</li>
                    <li>Functions: Rigid support, protection (seed coats, nutshells).</li>
                </ul>
            </li>
        </ul>
        
        <div class="key-point">
            <strong>💡 Key Point:</strong> Lignin in sclerenchyma provides strength and water resistance. Sclerenchyma cells are dead at maturity, unlike parenchyma and collenchyma.
        </div>
        
        <h4>🔴 Complex Tissues (Multiple cell types)</h4>
        
        <h4>📊 Xylem (Water-conducting tissue)</h4>
        <ul>
            <li><strong>Tracheids:</strong> Elongated cells with tapered ends, pits for water movement. Found in all vascular plants.</li>
            <li><strong>Vessel elements:</strong> Shorter, wider, perforation plates at ends. More efficient water conduction (angiosperms).</li>
            <li><strong>Xylem fibers:</strong> Provide support.</li>
            <li><strong>Xylem parenchyma:</strong> Storage.</li>
            <li><strong>Direction:</strong> Water and minerals move upward (roots → shoots).</li>
        </ul>
        
        <h4>🟡 Phloem (Food-conducting tissue)</h4>
        <ul>
            <li><strong>Sieve tube elements:</strong> Living but no nucleus, sieve plates for sap flow.</li>
            <li><strong>Companion cells:</strong> Nucleated cells that assist sieve tubes (load/unload sugars).</li>
            <li><strong>Phloem fibers:</strong> Support (bast fibers like hemp, flax).</li>
            <li><strong>Phloem parenchyma:</strong> Storage.</li>
            <li><strong>Direction:</strong> Sugars move bidirectionally (source → sink).</li>
        </ul>
        
        <h4>📈 Stem Anatomy</h4>
        <ul>
            <li><strong>Dicot stem:</strong> Vascular bundles in a ring (eudicots), cambium present for secondary growth.</li>
            <li><strong>Monocot stem:</strong> Vascular bundles scattered, no cambium (no secondary growth).</li>
            <li><strong>Layers (outside → in):</strong> Epidermis → Cortex → Vascular bundles → Pith.</li>
            <li><strong>Secondary growth (dicots):</strong> Vascular cambium produces secondary xylem (wood) inward and secondary phloem (inner bark) outward.</li>
        </ul>
        
        <h4>📊 Root Anatomy</h4>
        <ul>
            <li><strong>Root cap:</strong> Protects apical meristem.</li>
            <li><strong>Zone of cell division:</strong> Apical meristem (mitosis).</li>
            <li><strong>Zone of elongation:</strong> Cells lengthen.</li>
            <li><strong>Zone of maturation (root hair zone):</strong> Root hairs increase surface area for absorption.</li>
            <li><strong>Layers:</strong> Epidermis → Cortex → Endodermis (Casparian strip) → Pericycle → Vascular tissue.</li>
        </ul>
        
        <h4>📋 Leaf Anatomy</h4>
        <ul>
            <li><strong>Epidermis:</strong> Protective layer, waxy cuticle reduces water loss.</li>
            <li><strong>Stomata:</strong> Pores surrounded by guard cells (regulate gas exchange/transpiration).</li>
            <li><strong>Mesophyll:</strong>
                <ul>
                    <li>Palisade mesophyll: Tightly packed cells, most photosynthesis occurs here.</li>
                    <li>Spongy mesophyll: Loosely packed, air spaces for gas exchange.</li>
                </ul>
            </li>
            <li><strong>Veins (vascular bundles):</strong> Xylem (top) and phloem (bottom) for transport.</li>
        </ul>
    `,
    
    fruits_seeds: `
        <h4>🍎 Types of Fruits and Seeds</h4>
        
        <div class="definition-box">
            <strong>📌 Key Definition:</strong> A fruit is the mature ovary of a flowering plant, containing seeds. The ovary wall becomes the pericarp (fruit wall).
        </div>
        
        <h4>📊 Fruit Classification</h4>
        
        <h4>1. Simple Fruits (from single ovary of one flower)</h4>
        <ul>
            <li><strong>Fleshy fruits:</strong>
                <ul>
                    <li><strong>Berry:</strong> Entire pericarp fleshy, multiple seeds (tomato, grape, banana, blueberry).</li>
                    <li><strong>Drupe (stone fruit):</strong> Hard endocarp surrounding single seed (peach, cherry, mango, olive).</li>
                    <li><strong>Pome:</strong> Fleshy receptacle encloses papery core (apple, pear).</li>
                    <li><strong>Hesperidium:</strong> Leathery rind with oil glands (citrus fruits: orange, lemon).</li>
                    <li><strong>Pepo:</strong> Hard rind (cucumber, pumpkin, watermelon).</li>
                </ul>
            </li>
            <li><strong>Dry dehiscent fruits (split open at maturity):</strong>
                <ul>
                    <li><strong>Legume:</strong> Splits along two seams (pea pod, bean, peanut).</li>
                    <li><strong>Follicle:</strong> Splits along one seam (milkweed, larkspur).</li>
                    <li><strong>Capsule:</strong> Splits in various ways (poppy, cotton, okra).</li>
                </ul>
            </li>
            <li><strong>Dry indehiscent fruits (do not split):</strong>
                <ul>
                    <li><strong>Achene:</strong> Seed attached at one point (sunflower, dandelion).</li>
                    <li><strong>Caryopsis (grain):</strong> Seed coat fused to pericarp (corn, wheat, rice).</li>
                    <li><strong>Nut:</strong> Hard, woody pericarp (acorn, hazelnut, chestnut).</li>
                    <li><strong>Samara:</strong> Winged achene (maple, ash, elm).</li>
                </ul>
            </li>
        </ul>
        
        <div class="key-point">
            <strong>💡 Key Point:</strong> A strawberry is NOT a berry (it's an aggregate fruit). A banana is a berry! Botanical vs. culinary definitions differ.
        </div>
        
        <h4>2. Aggregate Fruits (multiple ovaries, one flower)</h4>
        <ul>
            <li><strong>Strawberry:</strong> Achenes on fleshy receptacle.</li>
            <li><strong>Raspberry/Blackberry:</strong> Cluster of drupelets.</li>
            <li><strong>Magnolia:</strong> Follicles in a cone.</li>
        </ul>
        
        <h4>3. Multiple Fruits (multiple flowers, one inflorescence)</h4>
        <ul>
            <li><strong>Pineapple:</strong> Fused berries from many flowers.</li>
            <li><strong>Fig:</strong> Fleshy receptacle with many tiny fruits inside.</li>
            <li><strong>Mulberry:</strong> Fused drupelets.</li>
            <li><strong>Jackfruit:</strong> World's largest tree fruit.</li>
        </ul>
        
        <h4>📋 Seed Structure</h4>
        <ul>
            <li><strong>Seed coat (testa):</strong> Protective outer layer.</li>
            <li><strong>Hilum:</strong> Scar where seed attached to ovary.</li>
            <li><strong>Micropyle:</strong> Small opening for water absorption.</li>
            <li><strong>Embryo:</strong>
                <ul>
                    <li><strong>Radicle:</strong> Embryonic root (first to emerge).</li>
                    <li><strong>Plumule:</strong> Embryonic shoot (stem + first leaves).</li>
                    <li><strong>Cotyledons:</strong> Seed leaves (one in monocots, two in dicots).</li>
                </ul>
            </li>
            <li><strong>Endosperm:</strong> Nutritive tissue (triploid in angiosperms).</li>
        </ul>
        
        <h4>📊 Monocot vs Dicot Seeds</h4>
        <ul>
            <li><strong>Monocot (corn, wheat, rice):</strong> One cotyledon (scutellum), endosperm present at maturity.</li>
            <li><strong>Dicot (bean, pea, peanut):</strong> Two cotyledons (often store food), endosperm absorbed.</li>
        </ul>
        
        <h4>🌱 Germination Types</h4>
        <ul>
            <li><strong>Epigeal:</strong> Cotyledons emerge above soil (bean, onion). Hypocotyl elongates.</li>
            <li><strong>Hypogeal:</strong> Cotyledons remain below soil (pea, corn). Epicotyl elongates.</li>
        </ul>
    `,
    
    biological_wares: `
        <h4>🔬 Handling and Care of Biological Wares</h4>
        
        <div class="definition-box">
            <strong>📌 Key Concept:</strong> Proper handling of laboratory equipment ensures safety, accuracy, and equipment longevity.
        </div>
        
        <h4>📋 Microscope Care</h4>
        <ul>
            <li><strong>Carrying:</strong> One hand on arm, other under base (two hands always).</li>
            <li><strong>Cleaning lenses:</strong> Use only lens paper (never tissue, cloth, or fingers).</li>
            <li><strong>Storage:</strong> Cover with dust cover, lowest objective lens in place, stage lowered.</li>
            <li><strong>Focusing:</strong> Start with coarse adjustment (low power), then fine adjustment.</li>
        </ul>
        
        <div class="key-point">
            <strong>💡 Key Point:</strong> Never use the coarse adjustment knob with high power objective - you'll smash the slide and damage the lens!
        </div>
        
        <h4>📊 Dissecting Kit Instruments</h4>
        <ul>
            <li><strong>Scalpel:</strong> Cutting (sharp blade). Always cut away from body.</li>
            <li><strong>Forceps (tweezers):</strong> Grasping and holding tissues.</li>
            <li><strong>Scissors:</strong> Cutting (straight or curved, fine or blunt tip).</li>
            <li><strong>Probe:</strong> Exploring and separating tissues (pointed or seeker).</li>
            <li><strong>Dissecting pins:</strong> Securing specimen to dissecting tray.</li>
            <li><strong>Scalpel handle + blades:</strong> Blade changes with hemostat (never fingers!).</li>
        </ul>
        
        <h4>🛡️ Safety Rules</h4>
        <ul>
            <li><strong>PPE:</strong> Wear lab coat, gloves, and safety goggles.</li>
            <li><strong>Sharp disposal:</strong> Scalpel blades/needles go in sharps container (not regular trash).</li>
            <li><strong>Chemical safety:</strong> Formalin (formaldehyde) is toxic - use in fume hood.</li>
            <li><strong>Hand washing:</strong> Always wash hands after handling specimens/chemicals.</li>
            <li><strong>Work area:</strong> Clean and disinfect before/after use.</li>
        </ul>
        
        <h4>📋 Specimen Preservation</h4>
        <ul>
            <li><strong>Formalin (4% formaldehyde):</strong> Most common fixative, preserves tissue structure.</li>
            <li><strong>70% Ethanol:</strong> For storage after fixation.</li>
            <li><strong>FAA (Formalin-Alcohol-Acetic acid):</strong> For plant specimens.</li>
            <li><strong>Bouin's solution:</strong> For animal tissues.</li>
        </ul>
        
        <h4>📊 Slide Preparation (Wet Mount)</h4>
        <ol>
            <li>Place specimen in drop of water on slide.</li>
            <li>Lower coverslip at 45° angle to avoid air bubbles.</li>
            <li>Add stain at edge of coverslip (draw through with tissue).</li>
            <li>View under microscope (start with low power).</li>
        </ol>
        
        <h4>🟢 Common Stains</h4>
        <ul>
            <li><strong>Methylene blue:</strong> Stains nuclei (animal cells).</li>
            <li><strong>Iodine (Lugol's):</strong> Stains starch (plant cells).</li>
            <li><strong>Eosin:</strong> Stains cytoplasm pink.</li>
            <li><strong>Hematoxylin:</strong> Stains nuclei purple/blue.</li>
            <li><strong>Gram stain:</strong> Differentiates bacteria (purple = Gram-positive, pink = Gram-negative).</li>
        </ul>
    `,
    
    animal_tissues: `
        <h4>🩺 Animal Tissues: Epithelial, Connective, Muscle, Nervous</h4>
        
        <div class="definition-box">
            <strong>📌 Key Definition:</strong> Tissues are groups of similar cells performing specific functions. The four basic types are epithelial, connective, muscle, and nervous.
        </div>
        
        <h4>📊 Epithelial Tissue (Covering/Lining)</h4>
        
        <h4>Classification by Shape:</h4>
        <ul>
            <li><strong>Squamous:</strong> Flat, thin (diffusion, filtration). Location: alveoli, blood vessels (endothelium).</li>
            <li><strong>Cuboidal:</strong> Cube-shaped (secretion, absorption). Location: kidney tubules, glands.</li>
            <li><strong>Columnar:</strong> Tall, rectangular (absorption, secretion). Location: intestine, stomach.</li>
            <li><strong>Transitional:</strong> Stretches (urinary bladder).</li>
        </ul>
        
        <h4>Classification by Layers:</h4>
        <ul>
            <li><strong>Simple:</strong> One layer (diffusion, absorption, secretion).</li>
            <li><strong>Stratified:</strong> Multiple layers (protection, abrasion resistance). Location: skin, mouth, esophagus.</li>
            <li><strong>Pseudostratified:</strong> Appears layered but isn't. Location: trachea (ciliated).</li>
        </ul>
        
        <div class="key-point">
            <strong>💡 Key Point:</strong> Simple squamous = fastest diffusion (lungs, capillaries). Stratified squamous = best protection (skin, oral cavity).
        </div>
        
        <h4>📊 Connective Tissue (Support/Binding)</h4>
        
        <h4>🟡 Loose Connective Tissue</h4>
        <ul>
            <li><strong>Areolar:</strong> Gel-like matrix, fibroblasts, collagen/elastic fibers. Wraps organs, supports epithelia.</li>
            <li><strong>Adipose:</strong> Fat storage, insulation, cushioning (energy reserve).</li>
            <li><strong>Reticular:</strong> Network of reticular fibers. Location: lymph nodes, spleen, bone marrow.</li>
        </ul>
        
        <h4>🔴 Dense Connective Tissue</h4>
        <ul>
            <li><strong>Dense regular:</strong> Parallel collagen fibers (high tensile strength one direction). Location: tendons (muscle-bone), ligaments (bone-bone).</li>
            <li><strong>Dense irregular:</strong> Random collagen fibers (strength in multiple directions). Location: dermis of skin, organ capsules.</li>
        </ul>
        
        <h4>🟢 Supportive Connective Tissue</h4>
        <ul>
            <li><strong>Cartilage:</strong> Chondrocytes in lacunae, firm but flexible, avascular (no blood vessels).
                <ul>
                    <li>Hyaline cartilage: Ends of long bones, nose, trachea (smooth, flexible).</li>
                    <li>Elastic cartilage: Ear, epiglottis (more elastic fibers).</li>
                    <li>Fibrocartilage: Intervertebral discs, knee meniscus (tough, shock-absorbing).</li>
                </ul>
            </li>
            <li><strong>Bone (osseous tissue):</strong> Osteocytes in lacunae, hard calcified matrix (calcium phosphate).
                <ul>
                    <li>Compact bone: Dense, forms outer layer.</li>
                    <li>Spongy bone: Porous, trabecular.</li>
                </ul>
            </li>
        </ul>
        
        <h4>🔵 Fluid Connective Tissue</h4>
        <ul>
            <li><strong>Blood:</strong> Plasma (fluid matrix) + erythrocytes (RBCs), leukocytes (WBCs), platelets.</li>
            <li><strong>Lymph:</strong> Interstitial fluid in lymphatic vessels.</li>
        </ul>
        
        <h4>📊 Muscle Tissue (Movement)</h4>
        <ul>
            <li><strong>Skeletal muscle:</strong> Voluntary, striated, multinucleated fibers. Attached to bones, moves skeleton.</li>
            <li><strong>Cardiac muscle:</strong> Involuntary, striated, single nucleus, intercalated discs. Only in heart, autorhythmic.</li>
            <li><strong>Smooth muscle:</strong> Involuntary, non-striated, spindle-shaped cells. Walls of hollow organs (intestine, bladder, blood vessels).</li>
        </ul>
        
        <h4>📊 Nervous Tissue (Communication)</h4>
        <ul>
            <li><strong>Neurons:</strong> Conduct electrical impulses (action potentials).
                <ul>
                    <li>Cell body (soma): Contains nucleus.</li>
                    <li>Dendrites: Receive signals.</li>
                    <li>Axon: Transmits signals (can be very long).</li>
                </ul>
            </li>
            <li><strong>Neuroglia (glial cells):</strong> Support, nourish, protect neurons. More numerous than neurons.</li>
        </ul>
    `,
    
    invertebrates: `
        <h4>🦋 Lower Invertebrates and Animal Kingdom Classification</h4>
        
        <div class="definition-box">
            <strong>📌 Key Concept:</strong> Animals are classified into phyla based on body plan, symmetry, tissue organization, and developmental patterns.
        </div>
        
        <h4>📊 Phylum Porifera (Sponges)</h4>
        <ul>
            <li>Simplest animals, no true tissues (parazoans).</li>
            <li>Asymmetrical, sessile (attached to substrate).</li>
            <li><strong>Specialized cells:</strong> Choanocytes (filter feeding), ostia (pores).</li>
            <li>Example: Grantia, Spongilla, bath sponge.</li>
        </ul>
        
        <h4>📊 Phylum Cnidaria (Jellyfish, Hydra, Corals)</h4>
        <ul>
            <li>Radial symmetry, two germ layers (diploblastic).</li>
            <li><strong>Nematocysts (stinging cells):</strong> Capture prey and defense.</li>
            <li>Forms: Polyp (sessile, hydra) and Medusa (free-swimming, jellyfish).</li>
            <li>Examples: Hydra, jellyfish (Aurelia), sea anemones, corals.</li>
        </ul>
        
        <div class="key-point">
            <strong>💡 Key Point:</strong> Cnidarians are the simplest animals with true tissues (epithelium, nerve net). Sponges (Porifera) lack true tissues.
        </div>
        
        <h4>📊 Phylum Platyhelminthes (Flatworms)</h4>
        <ul>
            <li>Dorsoventrally flattened, bilateral symmetry, three germ layers (triploblastic).</li>
            <li>Acoelomate (no body cavity).</li>
            <li><strong>Classes:</strong>
                <ul>
                    <li>Turbellaria (free-living planaria).</li>
                    <li>Trematoda (flukes, parasitic).</li>
                    <li>Cestoda (tapeworms, parasitic).</li>
                </ul>
            </li>
        </ul>
        
        <h4>📊 Phylum Nematoda (Roundworms)</h4>
        <ul>
            <li>Cylindrical body, pseudocoelom, complete digestive system (mouth to anus).</li>
            <li>Cuticle (tough outer layer), longitudinal muscles only.</li>
            <li>Examples: Ascaris (intestinal parasite), hookworms, pinworms, C. elegans (model organism).</li>
        </ul>
        
        <h4>📊 Phylum Annelida (Segmented Worms)</h4>
        <ul>
            <li>Metameric segmentation (body divided into segments).</li>
            <li>Closed circulatory system, complete digestive system.</li>
            <li><strong>Classes:</strong>
                <ul>
                    <li>Oligochaeta (earthworms) - few setae.</li>
                    <li>Polychaeta (marine worms) - many setae, parapodia.</li>
                    <li>Hirudinea (leeches) - suckers, no setae.</li>
                </ul>
            </li>
        </ul>
        
        <h4>📊 Phylum Arthropoda (Insects, Spiders, Crustaceans)</h4>
        <ul>
            <li>Jointed appendages, exoskeleton (chitin), segmented body.</li>
            <li><strong>Subphyla/Classes:</strong>
                <ul>
                    <li><strong>Insecta (insects):</strong> 3 pairs legs, 3 body segments (head, thorax, abdomen).</li>
                    <li><strong>Arachnida (spiders, scorpions):</strong> 4 pairs legs, 2 body segments.</li>
                    <li><strong>Crustacea (crabs, shrimp):</strong> 2 pairs antennae, usually aquatic.</li>
                    <li><strong>Myriapoda (centipedes, millipedes):</strong> Many legs, elongated body.</li>
                </ul>
            </li>
        </ul>
        
        <h4>📊 Phylum Mollusca (Snails, Clams, Octopus)</h4>
        <ul>
            <li>Soft body, muscular foot, mantle (may secrete shell).</li>
            <li><strong>Classes:</strong>
                <ul>
                    <li>Gastropoda (snails, slugs) - coiled shell.</li>
                    <li>Bivalvia (clams, oysters, mussels) - two hinged shells.</li>
                    <li>Cephalopoda (squid, octopus) - highly developed nervous system.</li>
                </ul>
            </li>
        </ul>
        
        <h4>📊 Phylum Echinodermata (Starfish, Sea Urchins)</h4>
        <ul>
            <li>Spiny skin, water vascular system, tube feet for movement.</li>
            <li>Pentamerous radial symmetry (adults). Bilateral symmetry (larvae).</li>
            <li>Examples: Starfish (sea star), sea urchin, sea cucumber.</li>
        </ul>
        
        <h4>📊 Phylum Chordata (Vertebrates and Relatives)</h4>
        <ul>
            <li><strong>Four key characteristics (at some stage):</strong>
                <ol>
                    <li><strong>Notochord:</strong> Flexible rod supporting body.</li>
                    <li><strong>Dorsal hollow nerve cord:</strong> Develops into central nervous system.</li>
                    <li><strong>Pharyngeal slits:</strong> Filter feeding (aquatic) or ear/throat structures (terrestrial).</li>
                    <li><strong>Post-anal tail:</strong> Extends beyond anus.</li>
                </ol>
            </li>
            <li><strong>Subphyla:</strong>
                <ul>
                    <li>Urochordata (tunicates) - adults lose notochord.</li>
                    <li>Cephalochordata (lancelets) - retain all four features.</li>
                    <li><strong>Vertebrata (vertebrates):</strong> Backbone replaces notochord.</li>
                </ul>
            </li>
        </ul>
    `,
    
    dissection: `
        <h4>🔪 Dissection and Practical Skills</h4>
        
        <div class="definition-box">
            <strong>📌 Key Concept:</strong> Dissection reveals internal anatomy and relationships between organs. Proper technique preserves structures and ensures safety.
        </div>
        
        <h4>📋 General Dissection Guidelines</h4>
        <ul>
            <li><strong>Orientation:</strong> Know anatomical terms (dorsal/ventral, anterior/posterior, medial/lateral).</li>
            <li><strong>Initial incision:</strong> Shallow, superficial to avoid damaging underlying organs.</li>
            <li><strong>Blunt dissection:</strong> Use probe or forceps to separate tissues (not scalpel).</li>
            <li><strong>Pinning:</strong> Secure specimen with pins through limbs, not through organs.</li>
        </ul>
        
        <div class="key-point">
            <strong>💡 Key Point:</strong> Always cut away from your body and keep fingers behind the blade. Use a scalpel like a pencil for fine control.
        </div>
        
        <h4>📊 Vertebrate Dissection (Rat/Frog)</h4>
        <ul>
            <li><strong>Ventral midline incision:</strong> From chin to pelvis.</li>
            <li><strong>Locate major organs:</strong>
                <ul>
                    <li><strong>Thoracic cavity:</strong> Heart (4 chambers), lungs.</li>
                    <li><strong>Abdominal cavity:</strong> Liver, stomach, intestines, kidneys, spleen.</li>
                </ul>
            </li>
            <li><strong>Diaphragm (mammals only):</strong> Separates thoracic and abdominal cavities.</li>
            <li><strong>Urinary/reproductive systems:</strong> Kidneys, ureters, bladder (rats - locate testes/ovaries).</li>
        </ul>
        
        <h4>📊 Invertebrate Dissection</h4>
        <ul>
            <li><strong>Earthworm:</strong> Dorsal blood vessel, crop, gizzard, seminal vesicles, nerve cord.</li>
            <li><strong>Grasshopper:</strong> Tracheal tubes (air sacs), digestive system, Malpighian tubules (excretion).</li>
            <li><strong>Clam:</strong> Mantle, gills, foot, adductor muscles, heart.</li>
            <li><strong>Starfish:</strong> Water vascular system, tube feet, stomach, gonads.</li>
        </ul>
        
        <h4>📋 Histology (Tissue Preparation)</h4>
        <ul>
            <li><strong>Fixation:</strong> Preserve tissue with formalin (stops decay).</li>
            <li><strong>Dehydration:</strong> Remove water with alcohol series (70% → 95% → 100%).</li>
            <li><strong>Clearing:</strong> Replace alcohol with xylene (makes tissue transparent).</li>
            <li><strong>Embedding:</strong> Infiltrate with paraffin wax for support.</li>
            <li><strong>Sectioning (microtome):</strong> Cut thin slices (5-10 μm).</li>
            <li><strong>Staining (H&E):</strong>
                <ul>
                    <li>Hematoxylin (basic): Stains nuclei blue/purple (binds DNA).</li>
                    <li>Eosin (acidic): Stains cytoplasm pink (binds proteins).</li>
                </ul>
            </li>
            <li><strong>Mounting:</strong> Place coverslip with permanent mounting medium.</li>
        </ul>
        
        <h4>🔬 Microscope Parts and Functions</h4>
        <ul>
            <li><strong>Eyepiece (ocular):</strong> Magnifies image (10x).</li>
            <li><strong>Objective lenses:</strong> 4x, 10x, 40x, 100x (oil immersion). Total magnification = ocular × objective.</li>
            <li><strong>Stage:</strong> Platform for slide (mechanical stage moves slide).</li>
            <li><strong>Condenser:</strong> Focuses light on specimen.</li>
            <li><strong>Iris diaphragm:</strong> Controls light intensity and contrast.</li>
            <li><strong>Coarse adjustment:</strong> Moves stage up/down (low power only!).</li>
            <li><strong>Fine adjustment:</strong> Sharp focus (all powers).</li>
        </ul>
        
        <h4>🛡️ Laboratory Safety Rules</h4>
        <ul>
            <li>Wear PPE (goggles, gloves, lab coat).</li>
            <li>Report spills, breakage, injuries immediately.</li>
            <li>Dispose of biological waste properly (biohazard bags).</li>
            <li>No food or drink in lab.</li>
            <li>Wash hands before leaving.</li>
            <li>Know location of first aid kit, eyewash station, fire extinguisher.</li>
        </ul>
    `
},
        "GST 112": {
    pre_colonial: `
        <h4>📜 Pre-Colonial Nigeria (Before 1800)</h4>
        
        <div class="definition-box">
            <strong>📌 Key Concept:</strong> Nigeria had advanced civilizations long before colonial rule, including the Nok, Ife, Benin, Hausa states, and Igbo communities.
        </div>
        
        <h4>🏺 Ancient Civilizations</h4>
        <ul>
            <li><strong>Nok Culture (1500 BCE - 500 CE):</strong> Famous for terracotta sculptures; earliest known civilization in Nigeria (Northern region).</li>
            <li><strong>Igbo-Ukwu (9th-10th century):</strong> Sophisticated bronze and copper artifacts discovered in Anambra.</li>
            <li><strong>Ife (11th-15th century):</strong> Legendary origin of Yoruba people; famous for naturalistic bronze and terra cotta heads.</li>
            <li><strong>Benin (13th-19th century):</strong> Renowned for bronze casting, ivory carving; Oba's palace with elaborate art.</li>
        </ul>
        
        <div class="key-point">
            <strong>💡 Key Point:</strong> The Benin Bronzes are world-famous artworks, many were looted during the 1897 British Punitive Expedition and now in European museums.
        </div>
        
        <h4>🏰 Major Kingdoms and Empires</h4>
        <ul>
            <li><strong>Hausa States (Hausa Bakwai):</strong> Biram, Daura, Gobir, Kano, Katsina, Rano, Zazzau. Trade and Islamic centers.</li>
            <li><strong>Yoruba Kingdoms:</strong> Ife (spiritual origin), Oyo Empire (dominant military power), Ijebu, Egba.</li>
            <li><strong>Benin Kingdom:</strong> Powerful empire known for its art and organized government.</li>
            <li><strong>Igbo Communities:</strong> Decentralized village democracies with councils of elders (Oha-na-Eze).</li>
            <li><strong>Kanem-Bornu Empire:</strong> Dominated northeastern Nigeria; powerful Islamic state.</li>
        </ul>
        
        <h4>👥 Three Major Ethnic Groups</h4>
        <ul>
            <li><strong>Hausa:</strong> Northern Nigeria; centralized emirates; Islamic culture; language belongs to Afroasiatic family.</li>
            <li><strong>Yoruba:</strong> Southwestern Nigeria; urban-centered kingdoms; rich mythology (Oduduwa); language - Niger-Congo.</li>
            <li><strong>Igbo:</strong> Southeastern Nigeria; decentralized; village democracy; language - Niger-Congo.</li>
        </ul>
    `,
    
    colonial_nigeria: `
        <h4>🇬🇧 Colonial Nigeria (1861-1960)</h4>
        
        <div class="definition-box">
            <strong>📌 Key Concept:</strong> British colonization evolved from trade to full colonial rule, culminating in the 1914 amalgamation.
        </div>
        
        <h4>📅 Key Dates</h4>
        <ul>
            <li><strong>1861:</strong> Lagos Colony annexed by Britain under King Dosunmu.</li>
            <li><strong>1884-1885:</strong> Berlin Conference partitions Africa; Nigeria allocated to Britain.</li>
            <li><strong>1886:</strong> Royal Niger Company chartered to administer British territories.</li>
            <li><strong>1900:</strong> Northern and Southern Protectorates proclaimed.</li>
            <li><strong>1914:</strong> Amalgamation of Northern and Southern Nigeria by Lord Lugard.</li>
            <li><strong>1960:</strong> Nigeria gains independence (Oct 1).</li>
        </ul>
        
        <div class="key-point">
            <strong>💡 Key Point:</strong> Lord Lugard's policy of Indirect Rule used traditional chiefs to administer local affairs, most successful in Northern Nigeria due to existing centralized systems.
        </div>
        
        <h4>⚔️ Resistance to Colonial Rule</h4>
        <ul>
            <li><strong>King Jaja of Opobo:</strong> Exiled to West Indies (1887).</li>
            <li><strong>Oba Ovonramwen of Benin:</strong> Exiled to Calabar (1897).</li>
            <li><strong>Sultan Attahiru of Sokoto:</strong> Killed in battle (1903).</li>
            <li><strong>Aba Women's War (1929):</strong> Igbo women protested taxation.</li>
        </ul>
        
        <h4>📜 Colonial Constitutions</h4>
        <ul>
            <li><strong>Clifford Constitution (1922):</strong> Introduced elective representation (4 seats).</li>
            <li><strong>Richards Constitution (1946):</strong> Introduced regional assemblies.</li>
            <li><strong>Macpherson Constitution (1951):</strong> Expanded regional autonomy.</li>
            <li><strong>Lyttleton Constitution (1954):</strong> Established federal system with 3 regions.</li>
        </ul>
    `,
    
    nationalism_independence: `
        <h4>🇳🇬 Nationalism and Independence</h4>
        
        <div class="definition-box">
            <strong>📌 Key Concept:</strong> Nigerian nationalism fought for self-rule through political parties, protests, and constitutional negotiations.
        </div>
        
        <h4>👨‍🎓 Nationalist Leaders</h4>
        <ul>
            <li><strong>Herbert Macaulay:</strong> "Father of Nigerian Nationalism"; founded NNDP (1923).</li>
            <li><strong>Dr. Nnamdi Azikiwe (Zik):</strong> Founded NCNC; later first President.</li>
            <li><strong>Chief Obafemi Awolowo:</strong> Founded Action Group; Western Premier.</li>
            <li><strong>Sir Ahmadu Bello:</strong> NPC leader; Northern Premier.</li>
            <li><strong>Sir Abubakar Tafawa Balewa:</strong> First Prime Minister.</li>
            <li><strong>Chief Anthony Enahoro:</strong> Moved self-government motion (1953).</li>
        </ul>
        
        <div class="key-point">
            <strong>💡 Key Point:</strong> The 1953 Kano Riot resulted from Northern opposition to Enahoro's self-government motion, highlighting regional tensions.
        </div>
        
        <h4>📊 Major Political Parties</h4>
        <ul>
            <li><strong>NNDP (1923):</strong> Herbert Macaulay - first political party.</li>
            <li><strong>NCNC (1944):</strong> Macaulay & Azikiwe - Eastern based.</li>
            <li><strong>Action Group (1951):</strong> Awolowo - Western based.</li>
            <li><strong>NPC (1951):</strong> Ahmadu Bello & Balewa - Northern based.</li>
        </ul>
        
        <h4>📅 Independence and Republic</h4>
        <ul>
            <li><strong>Oct 1, 1960:</strong> Independence from Britain; Balewa PM, Azikiwe Governor-General.</li>
            <li><strong>Oct 1, 1963:</strong> Republic declared; Azikiwe first President.</li>
        </ul>
    `,
    
    civil_war_military: `
        <h4>⚔️ Nigerian Civil War and Military Rule (1966-1999)</h4>
        
        <div class="definition-box">
            <strong>📌 Key Concept:</strong> Nigeria experienced 30+ years of military rule, a devastating civil war, and eventual return to democracy in 1999.
        </div>
        
        <h4>📅 Military Coups</h4>
        <ul>
            <li><strong>Jan 15, 1966:</strong> First coup (Maj. Nzeogwu); Balewa, Ahmadu Bello killed.</li>
            <li><strong>July 29, 1966:</strong> Counter-coup (Gowon).</li>
            <li><strong>Dec 31, 1983:</strong> Buhari overthrows Shagari.</li>
            <li><strong>Aug 27, 1985:</strong> Babangida overthrows Buhari.</li>
            <li><strong>Nov 17, 1993:</strong> Abacha overthrows Shonekan.</li>
        </ul>
        
        <div class="key-point">
            <strong>💡 Key Point:</strong> General Gowon's "No Victor, No Vanquished" policy after the 1967-1970 Civil War promoted reconciliation.
        </div>
        
        <h4>🔫 Nigerian Civil War (1967-1970)</h4>
        <ul>
            <li><strong>Cause:</strong> Eastern Region secession as Biafra (May 30, 1967 by Ojukwu).</li>
            <li><strong>Duration:</strong> July 6, 1967 - Jan 15, 1970.</li>
            <li><strong>Casualties:</strong> Estimated 1-3 million, mostly from starvation.</li>
            <li><strong>Outcome:</strong> Biafran surrender; reintegration with "No Victor, No Vanquished".</li>
        </ul>
        
        <h4>🏛️ Notable Military Programs</h4>
        <ul>
            <li><strong>Gowon (1967):</strong> Created 12 states.</li>
            <li><strong>Murtala/Obasanjo (1975-1979):</strong> Operation Feed the Nation; return to civilian rule.</li>
            <li><strong>Buhari (1983-1985):</strong> War Against Indiscipline (WAI).</li>
            <li><strong>Babangida (1985-1993):</strong> MAMSER; annulled June 12, 1993 election (won by MKO Abiola).</li>
        </ul>
        
        <h4>📅 Return to Democracy (1999)</h4>
        <ul>
            <li><strong>May 29, 1999:</strong> Olusegun Obasanjo inaugurated as President after Abdulsalami Abubakar's transition.</li>
        </ul>
    `,
    
    trade_economy: `
        <h4>💰 Trade, Economics and Self-Reliance</h4>
        
        <div class="definition-box">
            <strong>📌 Key Concept:</strong> Traditional Nigerian trade systems and modern economic policies aimed at self-reliance.
        </div>
        
        <h4>📦 Traditional Trade Systems</h4>
        <ul>
            <li><strong>Trans-Saharan Trade:</strong> Connected Hausa states to North Africa; goods: gold, salt, slaves, textiles.</li>
            <li><strong>Aro Confederacy:</strong> Controlled slave and palm oil trade in Igboland via Oracle of Long Juju.</li>
            <li><strong>Market Days:</strong> Rotating markets every 4,5, or 8 days; trade by barter; currencies: cowries, manillas.</li>
        </ul>
        
        <div class="key-point">
            <strong>💡 Key Point:</strong> "Igba-Boi" (Igbo apprenticeship) is a traditional system teaching trades, now inspiring modern business mentoring.
        </div>
        
        <h4>🏭 Modern Economic Policies</h4>
        <ul>
            <li><strong>Indigenization Decrees (1972, 1977):</strong> Transferred business ownership to Nigerians.</li>
            <li><strong>Operation Feed the Nation (OFN):</strong> 1976 - boost agriculture.</li>
            <li><strong>Green Revolution:</strong> Shagari era - modernize farming.</li>
            <li><strong>MAMSER (1987):</strong> Babangida - promote self-reliance.</li>
            <li><strong>NDE (1986):</strong> Address unemployment through skills training.</li>
        </ul>
    `,
    
    norms_values: `
        <h4>🎭 Nigerian Norms, Values and Social Vices</h4>
        
        <div class="definition-box">
            <strong>📌 Key Concept:</strong> Traditional values promote respect, integrity, and community; modern challenges include cultism, kidnapping, and corruption.
        </div>
        
        <h4>🏅 Traditional Values Across Ethnic Groups</h4>
        <ul>
            <li><strong>Yoruba - Omoluabi:</strong> Person of integrity, hard work, respect, courage, humility.</li>
            <li><strong>Igbo:</strong> Respect for elders (Igbo eke), community service, achievement (Ozo title).</li>
            <li><strong>Hausa/Fulani:</strong> Hospitality, respect (Sallama bowing), Islamic values.</li>
        </ul>
        
        <div class="key-point">
            <strong>💡 Key Point:</strong> "Omoluabi" in Yoruba culture is the highest standard of character - includes honesty, hard work, and respect for elders.
        </div>
        
        <h4>⚠️ Major Social Vices</h4>
        <ul>
            <li><strong>Cultism:</strong> Secret societies in universities with violent initiation rituals.</li>
            <li><strong>Kidnapping:</strong> Ransom-driven abductions, especially in Southeast and Northwest.</li>
            <li><strong>Corruption:</strong> Misuse of public office for private gain.</li>
            <li><strong>Drug Abuse:</strong> Substance abuse among youth.</li>
        </ul>
        
        <h4>🛡️ Re-orientation Programs</h4>
        <ul>
            <li><strong>WAI (War Against Indiscipline):</strong> Buhari - promoted punctuality, order, honesty.</li>
            <li><strong>WAIC (War Against Indiscipline and Corruption):</strong> Babangida extended WAI.</li>
            <li><strong>MAMSER:</strong> Mass mobilization for self-reliance and social justice.</li>
            <li><strong>NOA (National Orientation Agency):</strong> Current re-orientation agency.</li>
            <li><strong>3R's:</strong> Reconstruction, Rehabilitation, Re-orientation (post-Civil War).</li>
        </ul>
    `,
    
    judiciary_rights: `
        <h4>⚖️ Judiciary and Fundamental Rights</h4>
        
        <div class="definition-box">
            <strong>📌 Key Concept:</strong> The Nigerian judiciary protects citizens' fundamental rights as guaranteed by Chapter IV of the 1999 Constitution.
        </div>
        
        <h4>🏛️ Court Structure</h4>
        <ul>
            <li><strong>Supreme Court:</strong> Highest court; final appellate jurisdiction.</li>
            <li><strong>Court of Appeal:</strong> Hears appeals from lower courts.</li>
            <li><strong>Federal High Court:</strong> Federal matters, fundamental rights.</li>
            <li><strong>State High Courts:</strong> State-level civil and criminal cases.</li>
            <li><strong>Sharia Court of Appeal:</strong> Islamic personal law (in adopted states).</li>
            <li><strong>Customary Court of Appeal:</strong> Traditional/customary law matters.</li>
            <li><strong>National Industrial Court:</strong> Labor and employment disputes.</li>
        </ul>
        
        <div class="key-point">
            <strong>💡 Key Point:</strong> Judicial independence means courts are free from executive and legislative interference - essential for rule of law.
        </div>
        
        <h4>📜 Fundamental Rights (Chapter IV, 1999 Constitution)</h4>
        <ul>
            <li><strong>Section 33:</strong> Right to life.</li>
            <li><strong>Section 34:</strong> Right to dignity of human person (no torture, slavery).</li>
            <li><strong>Section 35:</strong> Right to personal liberty (no arbitrary detention).</li>
            <li><strong>Section 36:</strong> Right to fair hearing (presumption of innocence).</li>
            <li><strong>Section 37:</strong> Right to private and family life.</li>
            <li><strong>Section 38:</strong> Right to freedom of thought, conscience, religion.</li>
            <li><strong>Section 39:</strong> Right to freedom of expression and press.</li>
            <li><strong>Section 40:</strong> Right to peaceful assembly and association.</li>
            <li><strong>Section 41:</strong> Right to freedom of movement.</li>
            <li><strong>Section 42:</strong> Right to freedom from discrimination.</li>
        </ul>
        
        <h4>🛡️ Legal Remedies</h4>
        <ul>
            <li><strong>Habeas Corpus:</strong> "Produce the body" - challenges unlawful detention.</li>
            <li><strong>Fundamental Rights Enforcement Procedure:</strong> Direct court application for rights violations.</li>
            <li><strong>Judicial Review:</strong> Courts review executive/legislative actions for constitutionality.</li>
        </ul>
        
        <h4>✅ Civic Responsibilities</h4>
        <ul>
            <li>Pay taxes.</li>
            <li>Vote in elections.</li>
            <li>Obey the law.</li>
            <li>Defend the nation.</li>
            <li>Protect public property and environment.</li>
        </ul>
    `
},

        "BIO 102": {
            viruses: `
                <h4>🦠 What are Viruses?</h4>
                <p>Viruses are microscopic infectious agents that can only replicate inside living host cells. They are considered <strong>non-living</strong> outside a host because they cannot carry out metabolic processes independently.</p>
                
                <div class="definition-box">
                    <strong>📌 Key Definition:</strong> A virus is an obligate intracellular parasite consisting of genetic material (DNA or RNA) surrounded by a protein coat called a <strong>capsid</strong>.
                </div>
                
                <h4>🔬 Structure of Viruses</h4>
                <ul>
                    <li><strong>Capsid:</strong> Protein shell that protects genetic material</li>
                    <li><strong>Envelope:</strong> Lipid membrane (some viruses) derived from host cell</li>
                    <li><strong>Genetic Material:</strong> Either DNA or RNA, never both</li>
                    <li><strong>Spikes:</strong> Proteins that help viruses attach to host cells</li>
                </ul>
                
                <div class="key-point">
                    <strong>💡 Key Point:</strong> Viruses lack ribosomes and cannot synthesize proteins on their own. They completely depend on host cell machinery.
                </div>
                
                <h4>🔄 Viral Replication Cycles</h4>
                <ul>
                    <li><strong>Lytic Cycle:</strong> Virus replicates and destroys host cell (e.g., common cold)</li>
                    <li><strong>Lysogenic Cycle:</strong> Viral DNA integrates into host DNA (prophage) and remains dormant</li>
                </ul>
                
                <h4>🦠 Important Human Viruses</h4>
                <ul>
                    <li><strong>HIV</strong> - Causes AIDS, attacks CD4+ T cells (Retrovirus with reverse transcriptase)</li>
                    <li><strong>Influenza</strong> - Causes flu, infects respiratory tract</li>
                    <li><strong>SARS-CoV-2</strong> - Causes COVID-19</li>
                    <li><strong>Hepatitis B</strong> - DNA virus affecting liver</li>
                </ul>
                
                <h4>🧬 Special Infectious Agents</h4>
                <ul>
                    <li><strong>Bacteriophages:</strong> Viruses that infect bacteria</li>
                    <li><strong>Viroids:</strong> Infectious RNA without protein coat (plant diseases)</li>
                    <li><strong>Prions:</strong> Infectious misfolded proteins (mad cow disease)</li>
                </ul>
            `,
            bacteria: `
                <h4>🦠 What are Bacteria?</h4>
                <p>Bacteria are prokaryotic, unicellular microorganisms that lack a nucleus and membrane-bound organelles. They are found everywhere - soil, water, air, and inside living organisms.</p>
                
                <div class="definition-box">
                    <strong>📌 Key Definition:</strong> Bacteria are single-celled organisms with a cell wall made of <strong>peptidoglycan</strong> and reproduce by <strong>binary fission</strong>.
                </div>
                
                <h4>🔬 Bacterial Shapes (Morphology)</h4>
                <ul>
                    <li><strong>Cocci:</strong> Spherical (e.g., Staphylococcus - grape-like clusters)</li>
                    <li><strong>Bacilli:</strong> Rod-shaped (e.g., E. coli, Bacillus)</li>
                    <li><strong>Spirilla:</strong> Spiral-shaped (e.g., Helicobacter pylori)</li>
                    <li><strong>Vibrio:</strong> Comma-shaped (e.g., Vibrio cholerae)</li>
                </ul>
                
                <div class="key-point">
                    <strong>💡 Key Point:</strong> Gram staining classifies bacteria into <strong>Gram-positive</strong> (purple, thick peptidoglycan) and <strong>Gram-negative</strong> (pink, thin peptidoglycan + outer membrane).
                </div>
                
                <h4>🔧 Bacterial Structures</h4>
                <ul>
                    <li><strong>Cell Wall:</strong> Peptidoglycan provides shape and protection</li>
                    <li><strong>Flagella:</strong> Used for movement</li>
                    <li><strong>Pili/Fimbriae:</strong> Hair-like structures for attachment and conjugation</li>
                    <li><strong>Plasmids:</strong> Small circular DNA with extra genes (e.g., antibiotic resistance)</li>
                    <li><strong>Endospores:</strong> Dormant structures for survival in harsh conditions</li>
                </ul>
                
                <h4>🔄 Bacterial Reproduction</h4>
                <p>Bacteria reproduce asexually by <strong>binary fission</strong> - one cell divides into two identical daughter cells.</p>
                
                <h4>🩺 Diseases Caused by Bacteria</h4>
                <ul>
                    <li><strong>Tuberculosis</strong> - Mycobacterium tuberculosis (lungs)</li>
                    <li><strong>Cholera</strong> - Vibrio cholerae (severe diarrhea)</li>
                    <li><strong>Typhoid</strong> - Salmonella typhi</li>
                    <li><strong>Strep throat</strong> - Streptococcus pyogenes</li>
                </ul>
                
                <h4>👍 Beneficial Bacteria</h4>
                <ul>
                    <li><strong>Nitrogen fixation</strong> - Rhizobium in legume roots</li>
                    <li><strong>Digestion</strong> - E. coli in gut, rumen bacteria in cattle</li>
                    <li><strong>Antibiotic production</strong> - Streptomyces</li>
                    <li><strong>Food production</strong> - Lactobacillus in yogurt</li>
                </ul>
            `,
            fungi: `
                <h4>🍄 What are Fungi?</h4>
                <p>Fungi are eukaryotic, heterotrophic organisms that absorb nutrients from their environment. They include yeasts, molds, and mushrooms.</p>
                
                <div class="definition-box">
                    <strong>📌 Key Definition:</strong> Fungi have cell walls made of <strong>chitin</strong> and are <strong>saprophytic</strong> (decomposers) or <strong>parasitic</strong>.
                </div>
                
                <h4>🔬 Structure of Fungi</h4>
                <ul>
                    <li><strong>Mycelium:</strong> Network of thread-like hyphae (vegetative body)</li>
                    <li><strong>Hyphae:</strong> Tubular filaments that make up the mycelium</li>
                    <li><strong>Fruiting body:</strong> Reproductive structure (mushroom)</li>
                </ul>
                
                <div class="key-point">
                    <strong>💡 Key Point:</strong> Yeasts are unicellular fungi that reproduce by <strong>budding</strong>. Molds are multicellular with hyphae.
                </div>
                
                <h4>🍄 Major Fungal Phyla</h4>
                <ul>
                    <li><strong>Zygomycota:</strong> Bread molds (Rhizopus) - produce zygospores</li>
                    <li><strong>Ascomycota:</strong> Sac fungi (yeasts, morels) - produce ascospores in sacs</li>
                    <li><strong>Basidiomycota:</strong> Club fungi (mushrooms) - produce basidiospores on basidia</li>
                    <li><strong>Deuteromycota:</strong> Imperfect fungi (Penicillium) - only asexual reproduction known</li>
                </ul>
                
                <h4>🔄 Reproduction in Fungi</h4>
                <ul>
                    <li><strong>Asexual:</strong> Budding (yeasts), conidia (molds), fragmentation</li>
                    <li><strong>Sexual:</strong> Zygospores, ascospores, basidiospores</li>
                </ul>
                
                <h4>🩺 Fungal Diseases</h4>
                <ul>
                    <li><strong>Ringworm (Tinea):</strong> Skin, hair, nails - dermatophytes</li>
                    <li><strong>Candidiasis:</strong> Candida albicans - thrush, yeast infection</li>
                    <li><strong>Aspergillosis:</strong> Aspergillus - lung infection</li>
                </ul>
                
                <h4>💰 Economic Importance of Fungi</h4>
                <ul>
                    <li><strong>Beneficial:</strong> Penicillin (antibiotic), bread baking (S. cerevisiae), cheese production, decomposers</li>
                    <li><strong>Harmful:</strong> Food spoilage, mycotoxins (aflatoxins from Aspergillus), plant diseases</li>
                </ul>
                
                <h4>🌿 Symbiotic Relationships</h4>
                <ul>
                    <li><strong>Lichens:</strong> Fungi + algae/cyanobacteria (mutualism)</li>
                    <li><strong>Mycorrhizae:</strong> Fungi + plant roots (enhances nutrient absorption)</li>
                </ul>
            `,
            plant_kingdom: `
                <h4>🌿 The Plant Kingdom Overview</h4>
                <p>Plants are multicellular, eukaryotic autotrophs that perform photosynthesis. They are classified into major divisions based on vascular tissue and reproduction.</p>
                
                <div class="definition-box">
                    <strong>📌 Key Definition:</strong> Plants have cell walls made of <strong>cellulose</strong> and contain <strong>chlorophyll</strong> for photosynthesis.
                </div>
                
                <h4>🌱 Major Plant Divisions</h4>
                <ul>
                    <li><strong>Bryophytes:</strong> Mosses, liverworts - non-vascular, require water for reproduction, gametophyte dominant</li>
                    <li><strong>Pteridophytes:</strong> Ferns - vascular, reproduce by spores, sporophyte dominant</li>
                    <li><strong>Gymnosperms:</strong> Conifers (pines) - naked seeds in cones, vascular</li>
                    <li><strong>Angiosperms:</strong> Flowering plants - seeds enclosed in fruits, vascular, flowers for reproduction</li>
                </ul>
                
                <div class="key-point">
                    <strong>💡 Key Point:</strong> Bryophytes are called "amphibians of plant kingdom" because they need water for fertilization.
                </div>
                
                <h4>🌺 Angiosperms: Flowering Plants</h4>
                <ul>
                    <li><strong>Monocots:</strong> One cotyledon, parallel venation, fibrous roots, flower parts in 3s (e.g., grasses, lilies, palm)</li>
                    <li><strong>Dicots:</strong> Two cotyledons, net venation, taproot, flower parts in 4s/5s (e.g., beans, roses, oak)</li>
                </ul>
                
                <h4>🌸 Flower Structure</h4>
                <ul>
                    <li><strong>Male parts (Stamen):</strong> Anther (produces pollen) + Filament</li>
                    <li><strong>Female parts (Pistil/Carpel):</strong> Stigma (receives pollen) + Style + Ovary (contains ovules)</li>
                    <li><strong>Petals:</strong> Attract pollinators</li>
                    <li><strong>Sepals:</strong> Protect flower bud</li>
                </ul>
                
                <h4>🔄 Plant Reproduction</h4>
                <ul>
                    <li><strong>Pollination:</strong> Transfer of pollen from anther to stigma (wind, insects, birds)</li>
                    <li><strong>Fertilization:</strong> Pollen tube grows to ovule, sperm fertilizes egg</li>
                    <li><strong>Double fertilization (Angiosperms only):</strong> One sperm + egg = zygote (2n); other sperm + polar nuclei = endosperm (3n)</li>
                </ul>
                
                <h4>🌿 Plant Tissues</h4>
                <ul>
                    <li><strong>Xylem:</strong> Transports water and minerals upward (dead cells)</li>
                    <li><strong>Phloem:</strong> Transports sugars (photosynthates) throughout plant (living cells)</li>
                </ul>
                
                <h4>💧 Plant Processes</h4>
                <ul>
                    <li><strong>Transpiration:</strong> Loss of water vapor through stomata</li>
                    <li><strong>Photosynthesis:</strong> 6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂ (occurs in chloroplasts)</li>
                </ul>
            `,
            animal_kingdom: `
                <h4>🦁 The Animal Kingdom Overview</h4>
                <p>Animals are multicellular, eukaryotic heterotrophs that ingest food and are generally motile at some life stage.</p>
                
                <div class="definition-box">
                    <strong>📌 Key Definition:</strong> Animals lack cell walls and have specialized tissues for different functions.
                </div>
                
                <h4>🐛 Major Animal Phyla (Invertebrates)</h4>
                <ul>
                    <li><strong>Porifera:</strong> Sponges - simplest animals, filter feeders</li>
                    <li><strong>Cnidaria:</strong> Jellyfish, corals - have stinging cells (nematocysts)</li>
                    <li><strong>Platyhelminthes:</strong> Flatworms (tapeworms)</li>
                    <li><strong>Nematoda:</strong> Roundworms (hookworms)</li>
                    <li><strong>Annelida:</strong> Segmented worms (earthworms)</li>
                    <li><strong>Mollusca:</strong> Snails, clams, octopus - muscular foot, mantle</li>
                    <li><strong>Arthropoda:</strong> Insects, spiders, crustaceans - exoskeleton, jointed appendages</li>
                    <li><strong>Echinodermata:</strong> Starfish, sea urchins - spiny skin, water vascular system</li>
                </ul>
                
                <div class="key-point">
                    <strong>💡 Key Point:</strong> Arthropods molt (ecdysis) to grow. Insects have 3 body parts, 6 legs; Arachnids have 8 legs.
                </div>
                
                <h4>🐟 Phylum Chordata (Vertebrates)</h4>
                <p>Chordates have at some stage: notochord, dorsal hollow nerve cord, pharyngeal slits, post-anal tail.</p>
                
                <h4>🦎 Vertebrate Classes</h4>
                <ul>
                    <li><strong>Fish (Osteichthyes - bony, Chondrichthyes - cartilaginous):</strong> Gills, scales, ectothermic</li>
                    <li><strong>Amphibians:</strong> Frogs, salamanders - moist permeable skin, metamorphosis, ectothermic</li>
                    <li><strong>Reptiles:</strong> Snakes, lizards - dry scaly skin, lay eggs on land, ectothermic</li>
                    <li><strong>Aves (Birds):</strong> Feathers, hard-shelled eggs, endothermic (warm-blooded)</li>
                    <li><strong>Mammals:</strong> Hair, mammary glands, three middle ear bones, endothermic</li>
                </ul>
                
                <h4>🐬 Mammal Subclasses</h4>
                <ul>
                    <li><strong>Monotremes:</strong> Egg-laying mammals (platypus)</li>
                    <li><strong>Marsupials:</strong> Pouched mammals (kangaroo)</li>
                    <li><strong>Placental mammals:</strong> Most mammals (humans, dogs, whales)</li>
                </ul>
                
                <h4>🔬 Key Differences: Vertebrates vs Invertebrates</h4>
                <ul>
                    <li><strong>Invertebrates:</strong> No backbone, exoskeleton (often), simpler nervous system</li>
                    <li><strong>Vertebrates:</strong> Backbone, internal skeleton, complex nervous system</li>
                </ul>
            `,
            ecological_adaptations: `
                <h4>🌍 Ecological Adaptations</h4>
                <p>Adaptations are heritable traits that help organisms survive and reproduce in their environment.</p>
                
                <div class="definition-box">
                    <strong>📌 Key Definition:</strong> Adaptations can be <strong>structural</strong> (body features), <strong>physiological</strong> (body functions), or <strong>behavioral</strong> (actions).
                </div>
                
                <h4>🌵 Plant Adaptations</h4>
                <ul>
                    <li><strong>Xerophytes (Desert plants):</strong> Cacti - thick cuticle, spines instead of leaves, water-storing stems, deep roots</li>
                    <li><strong>Hydrophytes (Aquatic plants):</strong> Water lily - air-filled tissues (aerenchyma), thin cuticle, flexible stems</li>
                    <li><strong>Halophytes (Salt plants):</strong> Mangroves - salt-excreting glands, prop roots, viviparous germination</li>
                    <li><strong>Epiphytes:</strong> Orchids - grow on trees to reach sunlight, absorb from rain/air (not parasitic)</li>
                </ul>
                
                <div class="key-point">
                    <strong>💡 Key Point:</strong> The thick waxy cuticle on xerophytes reduces water loss. Hydrophytes have aerenchyma for buoyancy and gas exchange.
                </div>
                
                <h4>🐪 Animal Adaptations</h4>
                <ul>
                    <li><strong>Cold environments:</strong> Thick fur/blubber (polar bears, seals), small ears to reduce heat loss</li>
                    <li><strong>Hot environments:</strong> Camels - hump stores fat, long eyelashes, concentrated urine</li>
                    <li><strong>Aquatic animals:</strong> Swim bladder for buoyancy (fish), streamlined body, gills</li>
                    <li><strong>Camouflage:</strong> Chameleon, stick insect - structural adaptation for hiding</li>
                </ul>
                
                <h4>🎭 Behavioral Adaptations</h4>
                <ul>
                    <li><strong>Hibernation:</strong> Bears, groundhogs - winter dormancy to conserve energy</li>
                    <li><strong>Estivation:</strong> Summer dormancy in hot/dry conditions</li>
                    <li><strong>Migration:</strong> Birds, wildebeest - seasonal movement for food/breeding</li>
                </ul>
            `,
            physiology: `
                <h4>⚡ Plant and Animal Physiology</h4>
                
                <h4>🥗 Nutrition</h4>
                <ul>
                    <li><strong>Autotrophs:</strong> Make own food (plants - photosynthesis)</li>
                    <li><strong>Heterotrophs:</strong> Cannot make own food (animals, fungi)</li>
                    <li><strong>Holozoic:</strong> Ingest solid food (animals)</li>
                    <li><strong>Saprophytic:</strong> Absorb from dead matter (fungi, bacteria)</li>
                </ul>
                
                <div class="key-point">
                    <strong>💡 Key Point:</strong> Plants are autotrophs using photosynthesis; animals are heterotrophs requiring organic food.
                </div>
                
                <h4>🫁 Respiration</h4>
                <ul>
                    <li><strong>Aerobic respiration:</strong> Uses oxygen - C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP</li>
                    <li><strong>Anaerobic respiration/Fermentation:</strong> No oxygen - produces lactic acid (animals) or ethanol + CO₂ (yeast)</li>
                </ul>
                
                <p>In humans, lungs are main gas exchange organs (alveoli). In plants, stomata exchange CO₂ and O₂.</p>
                
                <h4>❤️ Circulatory System</h4>
                <ul>
                    <li><strong>Closed system:</strong> Blood stays in vessels (humans, vertebrates)</li>
                    <li><strong>Open system:</strong> Blood bathes organs directly (insects, arthropods)</li>
                </ul>
                <p>Hemoglobin in red blood cells carries oxygen.</p>
                
                <h4>💧 Excretion</h4>
                <ul>
                    <li><strong>Ammonia:</strong> Highly toxic, requires much water (fish, aquatic animals)</li>
                    <li><strong>Urea:</strong> Less toxic (humans, mammals) - produced in liver via ornithine cycle</li>
                    <li><strong>Uric acid:</strong> Paste-like, conserves water (birds, reptiles)</li>
                </ul>
            `,
            growth_reproduction: `
                <h4>🌱 Growth and Development</h4>
                
                <div class="definition-box">
                    <strong>📌 Key Definition:</strong> Growth is irreversible increase in size. Development is change in form/function.
                </div>
                
                <h4>🔄 Reproduction Types</h4>
                <ul>
                    <li><strong>Asexual:</strong> One parent, genetically identical offspring (binary fission, budding, fragmentation)</li>
                    <li><strong>Sexual:</strong> Two parents, fusion of gametes, genetic variation</li>
                </ul>
                
                <h4>👶 Human Reproduction</h4>
                <ul>
                    <li><strong>Male gamete:</strong> Sperm (produced in testes)</li>
                    <li><strong>Female gamete:</strong> Egg/ovum (produced in ovaries)</li>
                    <li><strong>Fertilization:</strong> Occurs in fallopian tube</li>
                    <li><strong>Zygote:</strong> Fertilized egg (2n)</li>
                    <li><strong>Embryo:</strong> Developing organism after implantation</li>
                </ul>
                
                <div class="key-point">
                    <strong>💡 Key Point:</strong> Meiosis produces haploid gametes (n). Mitosis produces diploid cells for growth/repair.
                </div>
                
                <h4>🐛 Metamorphosis</h4>
                <ul>
                    <li><strong>Complete metamorphosis:</strong> Egg → Larva → Pupa → Adult (butterfly, beetle)</li>
                    <li><strong>Incomplete metamorphosis:</strong> Egg → Nymph → Adult (grasshopper, cockroach)</li>
                </ul>
                
                <h4>🌱 Plant Reproduction</h4>
                <ul>
                    <li><strong>Vegetative propagation:</strong> Asexual reproduction using stems, roots (runners, tubers, rhizomes)</li>
                    <li><strong>Germination:</strong> Seed → seedling (epigeal - cotyledons above soil; hypogeal - cotyledons below)</li>
                </ul>
            `
        },
        "MLS 102": {
    evolution: `
        <h4>📜 Evolution of Medical Laboratory Science Practice</h4>
        
        <div class="definition-box">
            <strong>📌 Key Definition:</strong> Medical Laboratory Science (MLS) is the health profession that provides laboratory information and services needed for the diagnosis and treatment of disease.
        </div>
        
        <h4>🌍 Global Evolution of MLS</h4>
        <ul>
            <li><strong>Ancient Times (400 BCE):</strong> Hippocrates examined urine, sputum, and stool for diagnosis.</li>
            <li><strong>17th Century (1674):</strong> Antonie van Leeuwenhoek invented the microscope and discovered bacteria.</li>
            <li><strong>19th Century:</strong>
                <ul>
                    <li>Louis Pasteur (1822-1895): Germ theory of disease, pasteurization, rabies vaccine.</li>
                    <li>Robert Koch (1843-1910): Identified TB bacillus and cholera vibrio; Koch's postulates.</li>
                    <li>Rudolf Virchow (1821-1902): Father of Pathology; cellular pathology.</li>
                </ul>
            </li>
            <li><strong>Early 20th Century:</strong> First hospital-based clinical laboratories established.</li>
            <li><strong>1920s:</strong> First formal training programs for medical technologists in the USA.</li>
            <li><strong>1950s-1960s:</strong> Automation of laboratory tests (autoanalyzers).</li>
            <li><strong>1980s-present:</strong> Molecular diagnostics, automation, and point-of-care testing.</li>
        </ul>
        
        <div class="key-point">
            <strong>💡 Key Point:</strong> Medical Laboratory Science evolved from simple urine examination to complex molecular diagnostics involving DNA sequencing and genetic testing.
        </div>
        
        <h4>🇳🇬 Evolution of MLS in Nigeria</h4>
        <ul>
            <li><strong>Pre-1950s:</strong> Laboratory services were basic, run by medical officers or expatriates.</li>
            <li><strong>1950s:</strong> First modern laboratories established at UCH Ibadan (1957) and LUTH (1962).</li>
            <li><strong>1960s:</strong> Training of Medical Laboratory Technicians began at various schools.</li>
            <li><strong>1970s:</strong> Establishment of Schools of Medical Laboratory Technology in Zaria, Enugu, and Lagos.</li>
            <li><strong>1980s:</strong> University degree programs in MLS began at University of Nigeria Nsukka (1983) and University of Ibadan (1988).</li>
            <li><strong>1990s:</strong> Institute of Medical Laboratory Technology of Nigeria (IMLTN) established.</li>
            <li><strong>2003:</strong> Medical Laboratory Science Council of Nigeria (MLSCN) established by Act 11 of 2003.</li>
            <li><strong>Present:</strong> MLS programs in over 30 Nigerian universities; full professional regulation.</li>
        </ul>
        
        <h4>📈 Factors That Shaped MLS Evolution</h4>
        <ul>
            <li>Scientific discoveries (microscope, staining techniques, PCR)</li>
            <li>Industrialization and automation</li>
            <li>World Wars (need for blood transfusion services)</li>
            <li>Emergence of infectious diseases (HIV, Ebola, COVID-19)</li>
            <li>Technological advances (computers, robotics, AI)</li>
        </ul>
    `,
    
    legislation: `
        <h4>⚖️ Legislations Pertaining to MLS Practice in Nigeria</h4>
        
        <div class="definition-box">
            <strong>📌 Key Definition:</strong> Legislation refers to laws enacted by the government that regulate the practice, education, and conduct of medical laboratory scientists.
        </div>
        
        <h4>📜 MLSCN Act 11 of 2003</h4>
        <p>The most important legislation governing MLS in Nigeria. Key provisions include:</p>
        <ul>
            <li><strong>Section 1:</strong> Establishment of the Medical Laboratory Science Council of Nigeria (MLSCN).</li>
            <li><strong>Section 2:</strong> Functions of the Council (accreditation, registration, discipline).</li>
            <li><strong>Section 3:</strong> Membership of the Council.</li>
            <li><strong>Section 4-6:</strong> Powers of the Council.</li>
            <li><strong>Section 7-12:</strong> Registration of Medical Laboratory Scientists.</li>
            <li><strong>Section 13-18:</strong> Discipline and penalties for unprofessional conduct.</li>
            <li><strong>Section 19-20:</strong> Accreditation of training institutions.</li>
            <li><strong>Section 21:</strong> Offenses and penalties.</li>
        </ul>
        
        <div class="key-point">
            <strong>💡 Key Point:</strong> It is illegal to practice as a Medical Laboratory Scientist in Nigeria without registration with MLSCN. Penalty includes fines and imprisonment.
        </div>
        
        <h4>📋 Other Relevant Legislations</h4>
        <ul>
            <li><strong>National Health Act 2014:</strong> Regulates healthcare delivery including laboratory services.</li>
            <li><strong>Freedom of Information Act 2011:</strong> Access to medical records (with limitations).</li>
            <li><strong>National Blood Transfusion Service Act:</strong> Regulates blood collection and transfusion.</li>
            <li><strong>HIV/AIDS Anti-Discrimination Act 2014:</strong> Protects patients from discrimination.</li>
            <li><strong>University Mise enactment Act:</strong> Governs university education including MLS programs.</li>
        </ul>
        
        <h4>✅ Key Provisions Every MLS Student Must Know</h4>
        <ul>
            <li>Only registered MLS practitioners can sign laboratory reports.</li>
            <li>Training institutions must be accredited by MLSCN.</li>
            <li>Continuing Professional Development (CPD) is mandatory for license renewal.</li>
            <li>Malpractice and negligence are punishable offenses.</li>
            <li>Patient confidentiality is legally protected.</li>
        </ul>
    `,
    
    nomenclature: `
        <h4>📜 Nomenclature of Certificates, Diplomas, and Degrees in MLS</h4>
        
        <div class="definition-box">
            <strong>📌 Key Definition:</strong> Nomenclature refers to the system of naming qualifications and titles awarded at different levels of MLS training.
        </div>
        
        <h4>📜 Historical Certificates and Diplomas in Nigeria</h4>
        <ul>
            <li><strong>Certificate in Medical Laboratory Technology (CMLT):</strong> 2-year program for laboratory assistants (1960s-1970s).</li>
            <li><strong>Diploma in Medical Laboratory Technology (DMLT):</strong> 3-year program for technicians (1970s-1990s).</li>
            <li><strong>Higher Diploma in Medical Laboratory Technology (HDMLT):</strong> Advanced technician training (1980s-1990s).</li>
            <li><strong>AIMLT (Associate of Institute of Medical Laboratory Technology):</strong> Professional certification.</li>
            <li><strong>FIMLT (Fellow of Institute of Medical Laboratory Technology):</strong> Advanced professional fellowship.</li>
        </ul>
        
        <div class="key-point">
            <strong>💡 Key Point:</strong> The BMLS (Bachelor of Medical Laboratory Science) degree replaced most diploma programs as the entry-level qualification for professional practice.
        </div>
        
        <h4>🎓 Current Academic Degrees</h4>
        <ul>
            <li><strong>BMLS (Bachelor of Medical Laboratory Science):</strong> 4-5 year degree; entry-level professional qualification.</li>
            <li><strong>PGDMLS (Postgraduate Diploma in Medical Laboratory Science):</strong> 1-year bridge program for non-MLS graduates.</li>
            <li><strong>MSc in MLS:</strong> 1-2 year Master's degree with specialization in:
                <ul>
                    <li>MSc Chemical Pathology</li>
                    <li>MSc Hematology</li>
                    <li>MSc Medical Microbiology</li>
                    <li>MSc Histopathology</li>
                    <li>MSc Immunology</li>
                </ul>
            </li>
            <li><strong>PhD in MLS:</strong> Doctoral degree for research and academia (3-5 years).</li>
        </ul>
        
        <h4>🏅 Professional Titles and Fellowships</h4>
        <ul>
            <li><strong>AMLSN:</strong> Association of Medical Laboratory Scientists of Nigeria (member).</li>
            <li><strong>FMLSCN:</strong> Fellow of Medical Laboratory Science Council of Nigeria (highest professional fellowship).</li>
            <li><strong>FIMLS:</strong> Fellow of Institute of Medical Laboratory Science (international).</li>
        </ul>
        
        <h4>📊 Role of Different Qualifications</h4>
        <ul>
            <li><strong>BMLS:</strong> Full practice rights, can supervise laboratories, sign reports.</li>
            <li><strong>MSc:</strong> Specialization, teaching in universities, research, leadership roles.</li>
            <li><strong>PhD:</strong> University professor, advanced research, international collaboration.</li>
            <li><strong>FMLSCN:</strong> Consultant-level practice, expert witness, policy making.</li>
        </ul>
    `,
    
    training_regulations: `
        <h4>📚 Rules and Regulations Governing Training of Medical Laboratory Scientists</h4>
        
        <div class="definition-box">
            <strong>📌 Key Definition:</strong> Training regulations are the standards and requirements that MLS education programs must follow to produce competent graduates.
        </div>
        
        <h4>🏛️ Regulatory Bodies for MLS Training</h4>
        <ul>
            <li><strong>MLSCN (Medical Laboratory Science Council of Nigeria):</strong> Primary regulator of MLS education.</li>
            <li><strong>NUC (National Universities Commission):</strong> Regulates all university programs.</li>
            <li><strong>NBTE (National Board for Technical Education):</strong> Regulates polytechnic programs (for technicians).</li>
            <li><strong>JAMB (Joint Admissions and Matriculation Board):</strong> Admission oversight.</li>
        </ul>
        
        <div class="key-point">
            <strong>💡 Key Point:</strong> MLSCN must accredit every MLS program before students can graduate and be licensed.
        </div>
        
        <h4>📋 Admission Requirements</h4>
        <ul>
            <li><strong>UTME Entry:</strong> 
                <ul>
                    <li>5 O'level credits in English, Mathematics, Biology, Chemistry, Physics.</li>
                    <li>Minimum JAMB score as set by university.</li>
                    <li>Post-UTME screening.</li>
                </ul>
            </li>
            <li><strong>Direct Entry:</strong>
                <ul>
                    <li>ND/HND in related science with upper credit.</li>
                    <li>First degree in relevant science subjects.</li>
                    <li>JUPEB/IJMB with minimum points.</li>
                </ul>
            </li>
        </ul>
        
        <h4>📖 Curriculum Structure (BMLS)</h4>
        <ul>
            <li><strong>100 Level:</strong> Basic sciences (Biology, Chemistry, Physics, Mathematics).</li>
            <li><strong>200 Level:</strong> Introduction to MLS, anatomy, physiology, biochemistry.</li>
            <li><strong>300 Level:</strong> Core MLS courses (Chemical Pathology, Hematology, Microbiology).</li>
            <li><strong>400 Level:</strong> Advanced courses and research project.</li>
            <li><strong>500 Level:</strong> Clinical internship (1 year in accredited hospital).</li>
        </ul>
        
        <h4>📊 Internship (Clinical Posting) Regulations</h4>
        <ul>
            <li><strong>Duration:</strong> Minimum 12 months after graduation.</li>
            <li><strong>Rotation Requirements:</strong>
                <ul>
                    <li>Chemical Pathology: 2 months</li>
                    <li>Hematology/Blood Transfusion: 3 months</li>
                    <li>Medical Microbiology: 3 months</li>
                    <li>Histopathology: 2 months</li>
                    <li>Immunology/Serology: 2 months</li>
                </ul>
            </li>
            <li><strong>Assessment:</strong> Logbook, continuous assessment, end-of-posting exams.</li>
            <li><strong>Supervision:</strong> Must be supervised by registered MLS practitioners.</li>
        </ul>
        
        <h4>📋 Professional Licensing Examination</h4>
        <ul>
            <li>Upon completing internship, graduates write MLSCN licensing exam.</li>
            <li>Passing score required for registration as MLS.</li>
            <li>License must be renewed annually with CPD points.</li>
        </ul>
    `,
    
    accreditation: `
        <h4>✅ Programme Approval and Accreditation Process</h4>
        
        <div class="definition-box">
            <strong>📌 Key Definitions:</strong>
            <ul>
                <li><strong>Approval:</strong> Permission to start a new MLS program.</li>
                <li><strong>Accreditation:</strong> Certification that an existing program meets required standards.</li>
            </ul>
        </div>
        
        <h4>🏛️ Bodies Involved in Accreditation</h4>
        <ul>
            <li><strong>NUC (National Universities Commission):</strong> Grants university approval.</li>
            <li><strong>MLSCN (Medical Laboratory Science Council of Nigeria):</strong> Grants professional accreditation.</li>
            <li><strong>NBTE:</strong> For polytechnic programs (technician level).</li>
        </ul>
        
        <div class="key-point">
            <strong>💡 Key Point:</strong> A program must have BOTH NUC approval and MLSCN accreditation for graduates to be eligible for professional registration.
        </div>
        
        <h4>📋 Steps in Programme Approval</h4>
        <ul>
            <li><strong>Step 1:</strong> University submits Letter of Intent to NUC.</li>
            <li><strong>Step 2:</strong> NUC conducts Resource Verification (staff, facilities, equipment).</li>
            <li><strong>Step 3:</strong> NUC grants Interim Approval (for first 2 years).</li>
            <li><strong>Step 4:</strong> University submits to MLSCN for professional approval.</li>
            <li><strong>Step 5:</strong> MLSCN accreditation team visits.</li>
            <li><strong>Step 6:</strong> Full accreditation granted (after first graduating class).</li>
        </ul>
        
        <h4>📊 Accreditation Categories</h4>
        <ul>
            <li><strong>Full Accreditation:</strong> Program meets all standards; graduates eligible for licensure.</li>
            <li><strong>Interim/Probational Accreditation:</strong> Minor deficiencies; must be corrected within time frame.</li>
            <li><strong>Denied/Withdrawn Accreditation:</strong> Program fails to meet standards; cannot admit new students.</li>
        </ul>
        
        <h4>📋 Requirements for Accreditation</h4>
        <ul>
            <li><strong>Academic Staff:</strong> Minimum qualifications (PhD or MSc with professional certification).</li>
            <li><strong>Physical Facilities:</strong> Lecture halls, laboratories, equipment.</li>
            <li><strong>Library Resources:</strong> Textbooks, journals, e-resources.</li>
            <li><strong>Curriculum:</strong> Must follow MLSCN benchmark.</li>
            <li><strong>Clinical Training Sites:</strong> Accredited teaching hospitals.</li>
            <li><strong>Student Support:</strong> Academic advising, counseling.</li>
        </ul>
        
        <h4>🔄 Re-accreditation Cycle</h4>
        <ul>
            <li><strong>NUC:</strong> Every 5 years.</li>
            <li><strong>MLSCN:</strong> Every 3-5 years.</li>
            <li><strong>Self-Study Report:</strong> Required before accreditation visit.</li>
            <li><strong>Accreditation Panel Visit:</strong> 3-5 days inspection.</li>
        </ul>
    `,
    
    professional_bodies: `
        <h4>👥 Professional Bodies and Their Roles in MLS</h4>
        
        <div class="definition-box">
            <strong>📌 Key Definition:</strong> Professional bodies are organizations that regulate, represent, and advance the interests of medical laboratory scientists.
        </div>
        
        <h4>🇳🇬 MLSCN (Medical Laboratory Science Council of Nigeria)</h4>
        <ul>
            <li><strong>Established:</strong> Act 11 of 2003.</li>
            <li><strong>Functions:</strong>
                <ul>
                    <li>Regulation of MLS education and practice</li>
                    <li>Registration and licensing of MLS practitioners</li>
                    <li>Accreditation of training institutions</li>
                    <li>Disciplining erring practitioners</li>
                    <li>Setting continuing professional development (CPD) standards</li>
                </ul>
            </li>
            <li><strong>Leadership:</strong> Registrar/CEO appointed by the President.</li>
        </ul>
        
        <div class="key-point">
            <strong>💡 Key Point:</strong> MLSCN is both a regulatory and professional body - it has legal authority to prosecute unqualified practitioners.
        </div>
        
        <h4>👥 AMLSN (Association of Medical Laboratory Scientists of Nigeria)</h4>
        <ul>
            <li><strong>Founded:</strong> 1976.</li>
            <li><strong>Role:</strong> Professional association for all MLS practitioners.</li>
            <li><strong>Functions:</strong>
                <ul>
                    <li>Advocacy for members' welfare</li>
                    <li>Organizing annual scientific conferences</li>
                    <li>Promoting research and publications</li>
                    <li>Negotiating with government on working conditions</li>
                </ul>
            </li>
        </ul>
        
        <h4>📜 APHLN (Association of Public Health Laboratory Scientists of Nigeria)</h4>
        <ul>
            <li><strong>Focus:</strong> Public health laboratory practice.</li>
            <li><strong>Role:</strong> Disease surveillance, outbreak response, quality assurance.</li>
        </ul>
        
        <h4>🌍 International Bodies</h4>
        <ul>
            <li><strong>IFBLS (International Federation of Biomedical Laboratory Science):</strong> Global umbrella organization.</li>
            <li><strong>ASCP (American Society for Clinical Pathology):</strong> International certification.</li>
            <li><strong>WHO (World Health Organization):</strong> Sets global laboratory standards.</li>
        </ul>
        
        <h4>📊 Roles of Professional Bodies Compared</h4>
        <ul>
            <li><strong>MLSCN:</strong> Regulatory (legal authority).</li>
            <li><strong>AMLSN:</strong> Advocacy and welfare.</li>
            <li><strong>APHLN:</strong> Public health specialization.</li>
            <li><strong>NIMLT:</strong> Technologist/technician representation.</li>
        </ul>
    `,
    
    international_contributions: `
        <h4>🌍 International Contributions to Medical Laboratory Science</h4>
        
        <div class="definition-box">
            <strong>📌 Key Concept:</strong> MLS is a global profession with contributions from scientists worldwide advancing laboratory medicine.
        </div>
        
        <h4>👨‍🔬 Key International Pioneers</h4>
        <ul>
            <li><strong>Antonie van Leeuwenhoek (1632-1723) - Netherlands:</strong> Invented microscope; first to see bacteria.</li>
            <li><strong>Louis Pasteur (1822-1895) - France:</strong> Germ theory; pasteurization; rabies vaccine.</li>
            <li><strong>Robert Koch (1843-1910) - Germany:</strong> Koch's postulates; identified TB and cholera.</li>
            <li><strong>Rudolf Virchow (1821-1902) - Germany:</strong> Father of Pathology; cellular pathology.</li>
            <li><strong>Paul Ehrlich (1854-1915) - Germany:</strong> Staining techniques; acid-fast stain; magic bullet concept.</li>
            <li><strong>Alexander Fleming (1881-1955) - Scotland:</strong> Discovered penicillin (1928).</li>
            <li><strong>Sir John Scott Burdon-Sanderson (1828-1905) - England:</strong> First to use bacteria as court evidence.</li>
            <li><strong>Dr. Charles Richard Drew (1904-1950) - USA:</strong> Pioneered blood banking and plasma storage.</li>
            <li><strong>Kary Mullis (1944-2019) - USA:</strong> Invented PCR (polymerase chain reaction) - revolutionized molecular diagnosis.</li>
        </ul>
        
        <div class="key-point">
            <strong>💡 Key Point:</strong> PCR (Polymerase Chain Reaction) revolutionized laboratory diagnosis by allowing amplification of tiny amounts of DNA for detection.
        </div>
        
        <h4>🏆 Nobel Prize Winners in Laboratory Medicine</h4>
        <ul>
            <li><strong>1905:</strong> Robert Koch - Tuberculosis research.</li>
            <li><strong>1908:</strong> Paul Ehrlich - Immunology work.</li>
            <li><strong>1945:</strong> Alexander Fleming, Ernst Chain, Howard Florey - Penicillin.</li>
            <li><strong>1993:</strong> Kary Mullis - Invention of PCR.</li>
            <li><strong>2008:</strong> Françoise Barré-Sinoussi and Luc Montagnier - Discovery of HIV.</li>
            <li><strong>2020:</strong> Harvey J. Alter, Michael Houghton, Charles M. Rice - Discovery of Hepatitis C.</li>
        </ul>
        
        <h4>🇳🇬 Nigerian Contributions to Global MLS</h4>
        <ul>
            <li><strong>Professor Oluwole Akande:</strong> First Nigerian pathologist at UCH Ibadan.</li>
            <li><strong>Professor Akinwande O. Soetan:</strong> Pioneer in medical microbiology education.</li>
            <li><strong>Professor Isaac F. Adewole:</strong> Pathologist; former Minister of Health; contributions to cancer research.</li>
            <li><strong>Professor Babatunde O. Osotimehin:</strong> Pathologist; former Minister of Health; former Executive Director of UNFPA.</li>
        </ul>
        
        <h4>📈 International Organizations Advancing MLS</h4>
        <ul>
            <li><strong>WHO (World Health Organization):</strong> Global health standards, laboratory guidelines.</li>
            <li><strong>CDC (Centers for Disease Control):</strong> Disease surveillance, laboratory training.</li>
            <li><strong>ASCP (American Society for Clinical Pathology):</strong> Certification, continuing education.</li>
            <li><strong>IFCC (International Federation of Clinical Chemistry):</strong> Standards for clinical chemistry.</li>
        </ul>
    `
},
"MLS 104": {
    disease_concepts: `
        <h4>🦠 Basic Concepts of Disease</h4>
        
        <div class="definition-box">
            <strong>📌 Key Definitions:</strong>
            <ul>
                <li><strong>Disease:</strong> An abnormal condition affecting the body's structure or function.</li>
                <li><strong>Congenital Disease:</strong> Present at birth (genetic or developmental).</li>
                <li><strong>Acquired Disease:</strong> Develops after birth (infections, toxins, lifestyle).</li>
                <li><strong>Malnutrition:</strong> Imbalance of nutrients (undernutrition or overnutrition).</li>
            </ul>
        </div>
        
        <h4>📊 Classification of Diseases</h4>
        <ul>
            <li><strong>By Onset:</strong>
                <ul>
                    <li>Congenital (present at birth): Down syndrome, sickle cell disease, hemophilia.</li>
                    <li>Acquired (after birth): Infections, diabetes, hypertension.</li>
                </ul>
            </li>
            <li><strong>By Duration:</strong>
                <ul>
                    <li>Acute: Sudden onset, short duration (common cold, pneumonia).</li>
                    <li>Chronic: Long-lasting, often progressive (diabetes, hypertension, HIV).</li>
                </ul>
            </li>
            <li><strong>By Cause:</strong>
                <ul>
                    <li>Infectious: Caused by pathogens (bacteria, viruses, fungi, parasites).</li>
                    <li>Non-infectious: Not caused by pathogens (genetic, metabolic, nutritional, environmental).</li>
                </ul>
            </li>
            <li><strong>By Pattern:</strong>
                <ul>
                    <li>Endemic: Always present in a population (malaria in Nigeria).</li>
                    <li>Epidemic: Sudden increase in cases (Ebola outbreak).</li>
                    <li>Pandemic: Global spread (COVID-19).</li>
                </ul>
            </li>
        </ul>
        
        <div class="key-point">
            <strong>💡 Key Point:</strong> The Disease Triangle: Host + Agent + Environment = Disease. Breaking any link prevents disease.
        </div>
        
        <h4>⚠️ Effects of Environmental Toxins</h4>
        <ul>
            <li><strong>Lead Poisoning:</strong> Neurological damage in children (from lead paint, battery recycling).</li>
            <li><strong>Arsenic:</strong> Skin lesions, cancer (contaminated water).</li>
            <li><strong>Aflatoxins:</strong> Liver cancer (from mold-contaminated stored grains).</li>
            <li><strong>Pesticides:</strong> Neurological and reproductive effects.</li>
            <li><strong>Air Pollution:</strong> Respiratory diseases, lung cancer.</li>
        </ul>
        
        <h4>📈 Primary Causes of Cell Disorders</h4>
        <ul>
            <li><strong>Hypoxia:</strong> Oxygen deprivation (ischemia, anemia).</li>
            <li><strong>Physical Agents:</strong> Trauma, temperature extremes, radiation.</li>
            <li><strong>Chemical Agents:</strong> Drugs, toxins, poisons.</li>
            <li><strong>Infectious Agents:</strong> Bacteria, viruses, fungi, parasites.</li>
            <li><strong>Immunologic Reactions:</strong> Autoimmune diseases, allergies.</li>
            <li><strong>Genetic Defects:</strong> Mutations, chromosomal abnormalities.</li>
            <li><strong>Nutritional Imbalances:</strong> Deficiencies or excesses.</li>
        </ul>
    `,
    
    cell_injury: `
        <h4>🔬 Cell Injury and Disorders</h4>
        
        <div class="definition-box">
            <strong>📌 Key Definition:</strong> Cell injury refers to damage to cells caused by various agents, leading to reversible or irreversible changes.
        </div>
        
        <h4>📊 Mechanisms of Cell Injury</h4>
        <ul>
            <li><strong>ATP Depletion:</strong> Energy failure (hypoxia, ischemia).</li>
            <li><strong>Mitochondrial Damage:</strong> Impaired energy production.</li>
            <li><strong>Calcium Influx:</strong> Activates destructive enzymes.</li>
            <li><strong>Oxidative Stress:</strong> Free radical damage.</li>
            <li><strong>Membrane Damage:</strong> Loss of cellular integrity.</li>
            <li><strong>Protein Misfolding:</strong> Accumulation of abnormal proteins.</li>
            <li><strong>DNA Damage:</strong> Genetic mutations leading to cancer.</li>
        </ul>
        
        <div class="key-point">
            <strong>💡 Key Point:</strong> Reversible cell injury is characterized by cellular swelling and fatty change. Irreversible injury leads to necrosis or apoptosis.
        </div>
        
        <h4>🔄 Types of Cell Injury</h4>
        <ul>
            <li><strong>Reversible Injury:</strong>
                <ul>
                    <li>Cellular swelling (hydropic change)</li>
                    <li>Fatty change (steatosis)</li>
                    <li>Cell can recover if cause removed</li>
                </ul>
            </li>
            <li><strong>Irreversible Injury:</strong>
                <ul>
                    <li>Necrosis: Pathological cell death (coagulative, liquefactive, caseous, gangrenous, fat necrosis)</li>
                    <li>Apoptosis: Programmed cell death (physiological or pathological)</li>
                </ul>
            </li>
        </ul>
        
        <h4>📋 Types of Necrosis</h4>
        <ul>
            <li><strong>Coagulative Necrosis:</strong> Tissue architecture preserved; from ischemia (heart attack, kidney).</li>
            <li><strong>Liquefactive Necrosis:</strong> Tissue liquefies; from bacterial infection (brain abscess).</li>
            <li><strong>Caseous Necrosis:</strong> Cheese-like appearance; from TB infection.</li>
            <li><strong>Gangrenous Necrosis:</strong> Dead tissue with secondary infection (limb gangrene).</li>
            <li><strong>Fat Necrosis:</strong> Fat cell death; from pancreatitis.</li>
        </ul>
        
        <h4>🧬 Cellular Adaptations</h4>
        <ul>
            <li><strong>Hypertrophy:</strong> Cell size increase (muscle growth).</li>
            <li><strong>Hyperplasia:</strong> Cell number increase (breast tissue during pregnancy).</li>
            <li><strong>Atrophy:</strong> Cell size decrease (muscle wasting).</li>
            <li><strong>Metaplasia:</strong> Cell type change (smoker's lung).</li>
            <li><strong>Dysplasia:</strong> Abnormal cell growth (pre-cancerous).</li>
        </ul>
    `,
    
    infectious_diseases: `
        <h4>🦠 Infectious Diseases: Bacterial, Viral, Fungal, and Parasitic Infections</h4>
        
        <div class="definition-box">
            <strong>📌 Key Definition:</strong> Infectious diseases are caused by pathogenic microorganisms that invade, multiply, and damage host tissues.
        </div>
        
        <h4>🦠 Bacterial Infections</h4>
        <ul>
            <li><strong>Mycobacterium tuberculosis:</strong> Tuberculosis (lungs) - respiratory transmission.</li>
            <li><strong>Vibrio cholerae:</strong> Cholera (severe diarrhea) - fecal-oral transmission.</li>
            <li><strong>Salmonella typhi:</strong> Typhoid fever - fecal-oral transmission.</li>
            <li><strong>Neisseria meningitidis:</strong> Meningococcal meningitis - respiratory droplets.</li>
            <li><strong>Streptococcus pyogenes:</strong> Strep throat, rheumatic fever - droplets.</li>
            <li><strong>Staphylococcus aureus:</strong> Skin infections, food poisoning, toxic shock syndrome.</li>
            <li><strong>Escherichia coli:</strong> UTIs, diarrhea (some strains).</li>
            <li><strong>Treponema pallidum:</strong> Syphilis - sexual contact.</li>
            <li><strong>Neisseria gonorrhoeae:</strong> Gonorrhea - sexual contact.</li>
            <li><strong>Clostridium tetani:</strong> Tetanus - wound contamination.</li>
        </ul>
        
        <div class="key-point">
            <strong>💡 Key Point:</strong> Gram staining differentiates bacteria: Gram-positive (purple, thick peptidoglycan) vs. Gram-negative (pink, thin peptidoglycan + outer membrane).
        </div>
        
        <h4>🦠 Viral Infections</h4>
        <ul>
            <li><strong>HIV (Human Immunodeficiency Virus):</strong> AIDS - sexual contact, blood, mother-to-child.</li>
            <li><strong>Hepatitis B and C:</strong> Liver disease - blood, sexual contact, mother-to-child.</li>
            <li><strong>SARS-CoV-2:</strong> COVID-19 - respiratory droplets, airborne.</li>
            <li><strong>Influenza virus:</strong> Flu - respiratory droplets.</li>
            <li><strong>Measles virus:</strong> Measles - respiratory droplets (highly contagious).</li>
            <li><strong>Rubella virus:</strong> German measles - respiratory droplets.</li>
            <li><strong>Varicella-zoster virus:</strong> Chickenpox/shingles - respiratory droplets, contact.</li>
            <li><strong>Zika virus:</strong> Microcephaly in newborns - mosquito-borne, sexual.</li>
            <li><strong>Ebola virus:</strong> Hemorrhagic fever - body fluids.</li>
            <li><strong>Lassa virus:</strong> Lassa fever - rat urine/feces (Nigeria endemic).</li>
            <li><strong>Human Papillomavirus (HPV):</strong> Cervical cancer - sexual contact.</li>
            <li><strong>Yellow fever virus:</strong> Yellow fever - mosquito-borne (vaccine preventable).</li>
        </ul>
        
        <h4>🍄 Fungal Infections (Mycoses)</h4>
        <ul>
            <li><strong>Candida albicans:</strong> Oral thrush, vaginal yeast infections - opportunistic.</li>
            <li><strong>Dermatophytes (Tinea species):</strong> Ringworm, athlete's foot, jock itch - skin/fungal.</li>
            <li><strong>Aspergillus species:</strong> Aspergillosis (lung infection) - opportunistic in immunocompromised.</li>
            <li><strong>Cryptococcus neoformans:</strong> Cryptococcal meningitis - HIV patients.</li>
            <li><strong>Histoplasma capsulatum:</strong> Histoplasmosis - soil contaminated with bird/bat droppings.</li>
        </ul>
        
        <div class="key-point">
            <strong>💡 Key Point:</strong> Opportunistic infections occur in immunocompromised patients (HIV, chemotherapy, transplant recipients).
        </div>
        
        <h4>🦟 Parasitic Infections</h4>
        <ul>
            <li><strong>Plasmodium species:</strong> Malaria - Anopheles mosquito (leading cause of death in Nigeria).</li>
            <li><strong>Trypanosoma brucei:</strong> African sleeping sickness - tsetse fly.</li>
            <li><strong>Entamoeba histolytica:</strong> Amoebic dysentery - fecal-oral (contaminated food/water).</li>
            <li><strong>Giardia lamblia:</strong> Giardiasis (beaver fever) - fecal-oral, contaminated water.</li>
            <li><strong>Schistosoma species:</strong> Schistosomiasis (bilharzia) - freshwater snails.</li>
            <li><strong>Ascaris lumbricoides:</strong> Roundworm infection - fecal-oral (soil transmitted).</li>
            <li><strong>Taenia solium/saginata:</strong> Tapeworm infection - undercooked pork/beef.</li>
            <li><strong>Toxoplasma gondii:</strong> Toxoplasmosis - cat feces, undercooked meat (dangerous in pregnancy).</li>
        </ul>
        
        <h4>🩺 Common Symptoms of Infectious Diseases</h4>
        <ul>
            <li>Fever, chills, sweats</li>
            <li>Fatigue, malaise, weakness</li>
            <li>Pain (headache, body aches, localized pain)</li>
            <li>Inflammation (redness, swelling, heat, loss of function)</li>
            <li>Specific symptoms based on affected system (cough, diarrhea, rash, vomiting)</li>
        </ul>
    `,
    
    immune_system: `
        <h4>🛡️ Immune System and Its Components</h4>
        
        <div class="definition-box">
            <strong>📌 Key Definition:</strong> The immune system is a complex network of cells, tissues, and organs that protect the body against pathogens and abnormal cells.
        </div>
        
        <h4>🔬 Types of Immunity</h4>
        <ul>
            <li><strong>Innate Immunity (Natural/Native):</strong>
                <ul>
                    <li>Present at birth, non-specific</li>
                    <li>First line of defense: skin, mucous membranes, stomach acid, antimicrobial peptides</li>
                    <li>Cellular components: phagocytes (neutrophils, macrophages), natural killer cells</li>
                    <li>Humoral components: complement system, interferons, cytokines</li>
                </ul>
            </li>
            <li><strong>Adaptive Immunity (Acquired/Specific):</strong>
                <ul>
                    <li>Develops after exposure, highly specific</li>
                    <li>Has memory (faster response on re-exposure)</li>
                    <li>Cellular components: T lymphocytes (helper T cells, cytotoxic T cells)</li>
                    <li>Humoral components: B lymphocytes produce antibodies (immunoglobulins)</li>
                </ul>
            </li>
        </ul>
        
        <div class="key-point">
            <strong>💡 Key Point:</strong> Vaccines work by stimulating adaptive immunity to create memory cells without causing disease.
        </div>
        
        <h4>🩸 Components of the Immune System</h4>
        <ul>
            <li><strong>Lymphoid Organs:</strong>
                <ul>
                    <li>Primary: Bone marrow (B cells mature), Thymus (T cells mature)</li>
                    <li>Secondary: Lymph nodes, spleen, tonsils, Peyer's patches, MALT</li>
                </ul>
            </li>
            <li><strong>White Blood Cells (Leukocytes):</strong>
                <ul>
                    <li>Neutrophils: First responders to bacterial infection</li>
                    <li>Lymphocytes: B cells, T cells, NK cells</li>
                    <li>Monocytes/Macrophages: Phagocytosis, antigen presentation</li>
                    <li>Eosinophils: Fight parasites, involved in allergies</li>
                    <li>Basophils/Mast cells: Release histamine in allergic reactions</li>
                </ul>
            </li>
        </ul>
        
        <h4>📊 Immune Disorders</h4>
        <ul>
            <li><strong>Hypersensitivity (Allergy):</strong> Overreaction to harmless substances.
                <ul>
                    <li>Type I (Immediate): Anaphylaxis, hay fever, asthma</li>
                    <li>Type II (Cytotoxic): Hemolytic disease of newborn</li>
                    <li>Type III (Immune complex): Lupus, serum sickness</li>
                    <li>Type IV (Delayed): Contact dermatitis (poison ivy), TB skin test</li>
                </ul>
            </li>
            <li><strong>Autoimmune Diseases:</strong> Immune system attacks self-tissues.
                <ul>
                    <li>Rheumatoid arthritis (joints)</li>
                    <li>Systemic lupus erythematosus (multiple organs)</li>
                    <li>Type 1 diabetes (pancreas)</li>
                    <li>Multiple sclerosis (nerves)</li>
                    <li>Hashimoto's thyroiditis (thyroid)</li>
                </ul>
            </li>
            <li><strong>Immunodeficiency:</strong> Weak immune system.
                <ul>
                    <li>Primary (genetic): SCID (bubble boy disease), IgA deficiency</li>
                    <li>Secondary (acquired): HIV/AIDS, chemotherapy, malnutrition</li>
                </ul>
            </li>
        </ul>
        
        <h4>🧪 Laboratory Tests for Immune Function</h4>
        <ul>
            <li><strong>HIV Testing:</strong> ELISA, Western blot, Rapid tests</li>
            <li><strong>Hepatitis Serology:</strong> HBsAg, Anti-HBs, Anti-HCV</li>
            <li><strong>Autoantibody Tests:</strong> ANA (lupus), RF (rheumatoid arthritis), Anti-dsDNA</li>
            <li><strong>Allergy Tests:</strong> Total IgE, specific IgE, skin prick tests</li>
            <li><strong>Immunoglobulin Levels:</strong> IgG, IgA, IgM, IgD, IgE</li>
            <li><strong>CD4 Count:</strong> Monitoring HIV progression</li>
        </ul>
    `,
    
    disease_mechanisms: `
        <h4>⚙️ Pathophysiology of Acute Infections</h4>
        
        <div class="definition-box">
            <strong>📌 Key Definition:</strong> Pathophysiology is the study of functional changes in the body that result from disease.
        </div>
        
        <h4>📈 Steps in Pathogenesis of Infectious Disease</h4>
        <ul>
            <li><strong>Exposure/Entry:</strong> Pathogen enters the body through portal of entry (respiratory, gastrointestinal, skin, mucous membranes, blood).</li>
            <li><strong>Attachment/Adhesion:</strong> Pathogen attaches to host cells using adhesins, pili, or spikes.</li>
            <li><strong>Invasion:</strong> Pathogen penetrates host barriers and spreads.</li>
            <li><strong>Evasion of Host Defenses:</strong>
                <ul>
                    <li>Capsule prevents phagocytosis (Streptococcus pneumoniae)</li>
                    <li>Antigenic variation (HIV, influenza)</li>
                    <li>Intracellular survival (Mycobacterium tuberculosis)</li>
                    <li>Destruction of immune cells (HIV kills CD4 cells)</li>
                </ul>
            </li>
            <li><strong>Tissue Damage (Pathogenesis):</strong>
                <ul>
                    <li>Toxin production (exotoxins, endotoxins)</li>
                    <li>Direct cell destruction</li>
                    <li>Immune-mediated damage (inflammation, autoimmune)</li>
                </ul>
            </li>
            <li><strong>Outcomes:</strong> Resolution, chronic infection, or death.</li>
        </ul>
        
        <div class="key-point">
            <strong>💡 Key Point:</strong> Endotoxins are part of Gram-negative bacterial cell wall (LPS), released when bacteria die. Exotoxins are secreted proteins (tetanus toxin, cholera toxin).
        </div>
        
        <h4>🩺 Respiratory System Infections</h4>
        <ul>
            <li><strong>Upper Respiratory Tract:</strong> Common cold (rhinovirus), pharyngitis (Strep), sinusitis.</li>
            <li><strong>Lower Respiratory Tract:</strong> 
                <ul>
                    <li>Bronchitis</li>
                    <li>Pneumonia (Streptococcus pneumoniae, viral, fungal)</li>
                    <li>Tuberculosis (Mycobacterium tuberculosis)</li>
                    <li>COVID-19 (SARS-CoV-2)</li>
                </ul>
            </li>
            <li><strong>Diagnosis:</strong> Sputum culture, chest X-ray, PCR, acid-fast stain for TB.</li>
        </ul>
        
        <h4>🔬 Medical and Biological Changes at Light Microscopy</h4>
        <ul>
            <li><strong>Inflammation:</strong> Increased vascularity, leukocyte infiltration.</li>
            <li><strong>Necrosis:</strong> Cell death patterns (coagulative, liquefactive).</li>
            <li><strong>Granuloma:</strong> Organized collection of macrophages (TB, fungal infections).</li>
            <li><strong>Malignancy:</strong> Cellular atypia, increased mitotic figures, loss of normal architecture.</li>
            <li><strong>Inclusion Bodies:</strong> Viral replication sites visible under microscope (Negri bodies in rabies).</li>
        </ul>
        
        <h4>📊 Importance of Antibiotics</h4>
        <ul>
            <li><strong>Bactericidal:</strong> Kill bacteria (penicillins, cephalosporins, aminoglycosides).</li>
            <li><strong>Bacteriostatic:</strong> Inhibit bacterial growth (tetracyclines, macrolides).</li>
            <li><strong>Mechanisms:</strong>
                <ul>
                    <li>Cell wall synthesis inhibitors (penicillins, vancomycin)</li>
                    <li>Protein synthesis inhibitors (tetracyclines, macrolides)</li>
                    <li>Nucleic acid synthesis inhibitors (quinolones, rifampin)</li>
                    <li>Metabolic pathway inhibitors (sulfonamides, trimethoprim)</li>
                </ul>
            </li>
        </ul>
        
        <div class="key-point">
            <strong>💡 Key Point:</strong> Antibiotic resistance is a global crisis caused by misuse, overuse, and incomplete courses. MRSA, CRE, and XDR-TB are major threats.
        </div>
    `,
    
    laboratory_diagnosis: `
        <h4>🔬 Laboratory Diagnosis of Diseases</h4>
        
        <div class="definition-box">
            <strong>📌 Key Definition:</strong> Laboratory diagnosis uses scientific techniques to identify the cause and extent of disease for proper treatment.
        </div>
        
        <h4>🔬 Light Microscopy in Disease Diagnosis</h4>
        <ul>
            <li><strong>Blood Film Examination:</strong> 
                <ul>
                    <li>Malaria parasites (Plasmodium)</li>
                    <li>Blood cell morphology (sickle cells, blast cells in leukemia)</li>
                    <li>Bacterial infections (e.g., Borrelia)</li>
                </ul>
            </li>
            <li><strong>Stool Microscopy:</strong> 
                <ul>
                    <li>Parasitic eggs/ova (Ascaris, hookworm, Taenia)</li>
                    <li>Cysts (Entamoeba, Giardia)</li>
                    <li>White blood cells (inflammation)</li>
                </ul>
            </li>
            <li><strong>Urine Microscopy:</strong> 
                <ul>
                    <li>Red blood cells (hematuria)</li>
                    <li>White blood cells (UTI)</li>
                    <li>Casts (kidney disease)</li>
                    <li>Crystals (gout, kidney stones)</li>
                </ul>
            </li>
            <li><strong>Sputum Microscopy:</strong> 
                <ul>
                    <li>Acid-fast bacilli (TB diagnosis)</li>
                    <li>Fungal elements</li>
                </ul>
            </li>
        </ul>
        
        <div class="key-point">
            <strong>💡 Key Point:</strong> Malaria diagnosis in endemic areas requires microscopic examination of thick and thin blood films to detect Plasmodium species.
        </div>
        
        <h4>🧪 Specialized Laboratory Techniques</h4>
        <ul>
            <li><strong>Gram Staining:</strong> Differentiates bacteria (Gram-positive purple, Gram-negative pink).</li>
            <li><strong>Acid-Fast Staining (Ziehl-Neelsen):</strong> Detects Mycobacterium tuberculosis (red against blue background).</li>
            <li><strong>Culture Techniques:</strong> Growing microorganisms on specific media.
                <ul>
                    <li>Blood agar: General bacterial growth</li>
                    <li>MacConkey agar: Gram-negative bacteria</li>
                    <li>Chocolate agar: Neisseria, Haemophilus</li>
                    <li>Sabouraud agar: Fungi</li>
                    <li>Lowenstein-Jensen: Mycobacterium tuberculosis</li>
                </ul>
            </li>
            <li><strong>Biochemical Tests:</strong> Identify bacteria by metabolic reactions (Catalase, Coagulase, Oxidase, Urease, Indole).</li>
            <li><strong>Antibiotic Susceptibility Testing (AST):</strong> Kirby-Bauer disc diffusion, E-test, MIC determination.</li>
            <li><strong>Serological Tests:</strong> 
                <ul>
                    <li>ELISA (Enzyme-Linked Immunosorbent Assay)</li>
                    <li>Rapid Diagnostic Tests (RDTs) for malaria, HIV, COVID-19</li>
                    <li>Western Blot (confirmatory test for HIV)</li>
                    <li>Widal test (Typhoid fever - use with caution)</li>
                </ul>
            </li>
            <li><strong>Molecular Diagnostics:</strong> 
                <ul>
                    <li>PCR (Polymerase Chain Reaction) - gold standard for many infections</li>
                    <li>Real-time PCR (quantitative)</li>
                    <li>Next-generation sequencing</li>
                    <li>GeneXpert (TB and rifampicin resistance)</li>
                </ul>
            </li>
        </ul>
        
        <h4>📊 Specialized Tissues Examination (Histopathology)</h4>
        <ul>
            <li><strong>Tissue Processing:</strong> Fixation (formalin) → Dehydration → Clearing → Embedding (paraffin) → Sectioning → Staining (H&E).</li>
            <li><strong>Frozen Section:</strong> Rapid diagnosis during surgery (20 minutes).</li>
            <li><strong>Special Stains:</strong> 
                <ul>
                    <li>Periodic acid-Schiff (PAS) for glycogen</li>
                    <li>Masson's trichrome for connective tissue</li>
                    <li>Reticulin stain for liver fibrosis</li>
                </ul>
            </li>
            <li><strong>Immunohistochemistry (IHC):</strong> Uses antibodies to detect specific proteins in tissues (cancer markers).</li>
        </ul>
    `,
    
    prevention_control: `
        <h4>🛡️ Prevention and Control of Infectious Diseases</h4>
        
        <div class="definition-box">
            <strong>📌 Key Concept:</strong> Prevention is more effective and cost-efficient than treatment. Breaking the chain of infection stops transmission.
        </div>
        
        <h4>🏛️ Levels of Disease Prevention</h4>
        <ul>
            <li><strong>Primary Prevention:</strong> Prevent disease before it occurs.
                <ul>
                    <li>Vaccination (immunization)</li>
                    <li>Health education (hand washing, safe sex, food safety)</li>
                    <li>Sanitation (clean water, sewage disposal)</li>
                    <li>Vector control (mosquito nets, insecticide spraying)</li>
                    <li>Personal protective equipment (PPE)</li>
                </ul>
            </li>
            <li><strong>Secondary Prevention:</strong> Early detection and treatment.
                <ul>
                    <li>Screening programs (HIV, hypertension, diabetes)</li>
                    <li>Early diagnosis and prompt treatment</li>
                    <li>Contact tracing and quarantine</li>
                </ul>
            </li>
            <li><strong>Tertiary Prevention:</strong> Manage existing disease to prevent complications.
                <ul>
                    <li>Rehabilitation (physical therapy)</li>
                    <li>Chronic disease management (diabetes, HIV)</li>
                    <li>Support groups and palliative care</li>
                </ul>
            </li>
        </ul>
        
        <div class="key-point">
            <strong>💡 Key Point:</strong> Vaccines are the most successful primary prevention strategy in medical history, saving millions of lives annually.
        </div>
        
        <h4>💉 Vaccination Schedule in Nigeria (National Programme on Immunization)</h4>
        <ul>
            <li><strong>At birth:</strong> BCG (tuberculosis), OPV0 (polio), Hepatitis B</li>
            <li><strong>6 weeks:</strong> Penta (DPT+HepB+Hib), OPV1, PCV, Rotavirus</li>
            <li><strong>10 weeks:</strong> Penta2, OPV2, PCV2, Rotavirus2</li>
            <li><strong>14 weeks:</strong> Penta3, OPV3, PCV3, Rotavirus3</li>
            <li><strong>9 months:</strong> Measles, Yellow fever, Meningitis A</li>
            <li><strong>12-18 months:</strong> Measles second dose</li>
        </ul>
        
        <h4>🧼 Sanitation and Hygiene Practices</h4>
        <ul>
            <li><strong>Hand Washing:</strong> Single most effective way to prevent infection spread.</li>
            <li><strong>Safe Water:</strong> Boiling, filtration, chlorination to prevent waterborne diseases (cholera, typhoid).</li>
            <li><strong>Proper Waste Disposal:</strong> Prevents vector breeding (flies, mosquitoes).</li>
            <li><strong>Food Safety:</strong> Proper cooking, storage, and handling to prevent food poisoning.</li>
            <li><strong>Personal Hygiene:</strong> Bathing, oral hygiene, clean clothing.</li>
        </ul>
        
        <h4>🦟 Vector Control Strategies</h4>
        <ul>
            <li><strong>Mosquito Control (Malaria prevention):</strong>
                <ul>
                    <li>Insecticide-treated nets (ITNs)</li>
                    <li>Indoor residual spraying (IRS)</li>
                    <li>Elimination of standing water (breeding sites)</li>
                    <li>Larviciding</li>
                </ul>
            </li>
            <li><strong>Tsetse Fly Control (Sleeping sickness):</strong> Traps, clearing vegetation.</li>
            <li><strong>Rat Control (Lassa fever):</strong> Proper food storage, rodent-proofing homes.</li>
        </ul>
        
        <h4>🛡️ Quarantine and Isolation Measures</h4>
        <ul>
            <li><strong>Isolation:</strong> Separating sick individuals with contagious disease (Ebola, COVID-19).</li>
            <li><strong>Quarantine:</strong> Restricting movement of exposed but not yet sick individuals.</li>
            <li><strong>Contact Tracing:</strong> Identifying and monitoring people exposed to infected individuals.</li>
            <li><strong>Social Distancing:</strong> Reducing close contact during outbreaks.</li>
        </ul>
        
        <h4>👨‍⚕️ Role of Medical Personnel in Disease Prevention</h4>
        <ul>
            <li><strong>Healthcare Workers:</strong> Diagnosis, treatment, vaccination, health education.</li>
            <li><strong>Medical Laboratory Scientists:</strong> Disease diagnosis, surveillance, outbreak detection.</li>
            <li><strong>Public Health Officers:</strong> Epidemiology, contact tracing, community interventions.</li>
            <li><strong>Health Educators:</strong> Community awareness, behavior change communication.</li>
        </ul>
        
        <h4>📊 Community Health Status Assessment</h4>
        <ul>
            <li><strong>Disease Surveillance:</strong> Monitoring disease patterns in the community.</li>
            <li><strong>Epidemiological Studies:</strong> Understanding disease distribution and determinants.</li>
            <li><strong>Health Indicators:</strong> Mortality rates, morbidity rates, vaccination coverage.</li>
            <li><strong>Community Diagnosis:</strong> Identifying health problems in specific populations.</li>
        </ul>
        
        <div class="key-point">
            <strong>💡 Key Point:</strong> The role of medical personnel extends beyond treatment to include prevention, health promotion, and community education.
        </div>
    `
},
"MTH 102": {
    functions: `
        <div class="definition-box">
            <strong>📌 The Big Idea:</strong> A function takes one input x and gives exactly one output f(x). Domain = all allowed x values. Range = all possible outputs.
        </div>

        <h4>⚡ Quick Rules — Domain</h4>
        <ul>
            <li><strong>Square root √:</strong> Inside must be ≥ 0. e.g. f(x) = √(x−5) → domain: x ≥ 5</li>
            <li><strong>Fraction 1/x:</strong> Denominator ≠ 0. Set bottom = 0, those values are excluded.</li>
            <li><strong>log / ln:</strong> Inside must be > 0.</li>
            <li><strong>Polynomial:</strong> Domain = all real numbers (ℝ), no restrictions.</li>
            <li><strong>Floor function ⌊x⌋:</strong> Domain = ℝ, Range = ℤ (integers). <em>Always remember this!</em></li>
        </ul>

        <h4>📋 Must-Know Function Types</h4>
        <ul>
            <li><strong>Linear:</strong> y = mx + b — straight line</li>
            <li><strong>Quadratic:</strong> y = ax² + bx + c — U-shaped (parabola)</li>
            <li><strong>Cubic:</strong> degree 3 — S-shaped</li>
            <li><strong>Exponential:</strong> y = aˣ — variable is in the exponent</li>
            <li><strong>Absolute value:</strong> y = |x| — V-shape, corner at x = 0, not differentiable there</li>
            <li><strong>Even function:</strong> f(−x) = f(x) — symmetric about y-axis (e.g. x²)</li>
            <li><strong>Odd function:</strong> f(−x) = −f(x) — symmetric about origin</li>
        </ul>

        <h4>🔑 Tests (Quick CBT Answers)</h4>
        <ul>
            <li><strong>Vertical line test:</strong> Passes → it's a function</li>
            <li><strong>Horizontal line test:</strong> Passes → it's one-to-one (has an inverse)</li>
        </ul>

        <h4>🧮 CBT Examples</h4>
        <ul>
            <li><strong>f(x) = 2x + 3, find f(4):</strong> → 2(4) + 3 = <strong>11</strong></li>
            <li><strong>f(x) = x² − 4x, find f(3):</strong> → 9 − 12 = <strong>−3</strong></li>
            <li><strong>f(x) = √(x − 5), domain?</strong> → x − 5 ≥ 0 → x ≥ 5 → <strong>[5, ∞)</strong></li>
            <li><strong>Composition (f∘g)(x) where f(x) = x²+1, g(x) = 2x:</strong> → f(2x) = (2x)²+1 = <strong>4x²+1</strong></li>
            <li><strong>Inverse of f(x) = 3x − 2:</strong> Swap x and y → x = 3y − 2 → y = (x+2)/3</li>
            <li><strong>Range of y = x² + 2:</strong> x² ≥ 0, so minimum is 2 → Range: <strong>y ≥ 2</strong></li>
        </ul>
    `,
    
    limits: `
        <div class="definition-box">
            <strong>📌 The Big Idea:</strong> A limit asks: "what value does f(x) approach as x gets close to a number?" You don't actually plug in — you see what it approaches.
        </div>

        <h4>⚡ 3-Step Strategy for Any Limit</h4>
        <ol>
            <li><strong>Try direct substitution first</strong> — just plug in the value. If you get a real number, that's the answer.</li>
            <li><strong>Got 0/0? Factor and cancel</strong> — the common factor causing 0/0 will cancel out.</li>
            <li><strong>Still stuck? Use L'Hôpital's Rule</strong> — differentiate top and bottom separately.</li>
        </ol>

        <h4>🔥 Must-Memorize Standard Limits</h4>
        <ul>
            <li>lim (sin x / x) → <strong>1</strong> &nbsp;&nbsp; (as x → 0)</li>
            <li>lim (tan x / x) → <strong>1</strong> &nbsp;&nbsp; (as x → 0)</li>
            <li>lim ((1 − cos x) / x) → <strong>0</strong> &nbsp;&nbsp; (as x → 0)</li>
            <li>lim ((1 − cos x) / x²) → <strong>1/2</strong> &nbsp;&nbsp; (as x → 0)</li>
            <li>lim (1/x) → <strong>0</strong> &nbsp;&nbsp; (as x → ∞)</li>
        </ul>

        <h4>📋 Continuity & Discontinuity</h4>
        <ul>
            <li>Function is <strong>continuous at x = a</strong> if: limit exists AND equals f(a)</li>
            <li><strong>Point of discontinuity</strong> → set denominator = 0, solve for x</li>
            <li><strong>Hole (removable):</strong> common factor in top and bottom that cancels</li>
            <li><strong>Vertical asymptote:</strong> denominator = 0, numerator ≠ 0</li>
            <li><strong>Horizontal asymptote:</strong> compare degrees of top vs bottom
                <ul>
                    <li>Top degree &lt; bottom → y = 0</li>
                    <li>Degrees equal → y = ratio of leading coefficients</li>
                    <li>Top degree &gt; bottom → no horizontal asymptote</li>
                </ul>
            </li>
        </ul>

        <h4>🧮 CBT Examples</h4>
        <ul>
            <li><strong>lim (x² − 4)/(x − 2) as x → 2:</strong> Factor → (x−2)(x+2)/(x−2) = x+2 → plug in 2 = <strong>4</strong></li>
            <li><strong>lim (x² − 9)/(x − 3) as x → 3:</strong> Factor → (x−3)(x+3)/(x−3) = x+3 → plug in 3 = <strong>6</strong></li>
            <li><strong>lim (3x² + 2x − 1) as x → 2:</strong> Just substitute → 3(4)+2(2)−1 = <strong>15</strong></li>
            <li><strong>lim (cos x − 1)/x as x → 0:</strong> Standard limit → <strong>0</strong></li>
            <li><strong>Discontinuity of (3x²−9)/(x−3):</strong> Set x−3 = 0 → <strong>x = 3</strong></li>
            <li><strong>Vertical asymptote of 1/(x−3):</strong> x−3 = 0 → <strong>x = 3</strong></li>
            <li><strong>HA of (2x²+1)/(x²−4):</strong> Degrees equal → 2/1 = <strong>y = 2</strong></li>
        </ul>
    `,
    
    differentiation: `
        <div class="definition-box">
            <strong>📌 The Big Idea:</strong> dy/dx tells you the slope of the curve at any point. Think of it as "how fast y is changing as x changes."
        </div>

        <h4>🔥 Must-Know Derivative Rules</h4>
        <ul>
            <li><strong>Power Rule:</strong> y = xⁿ → dy/dx = nxⁿ⁻¹ &nbsp; <em>(bring the power down, reduce it by 1)</em></li>
            <li><strong>Constant:</strong> y = 7 → dy/dx = 0</li>
            <li><strong>Product Rule:</strong> y = u·v → dy/dx = u·(dv/dx) + v·(du/dx) &nbsp; <em>"first × derivative of second + second × derivative of first"</em></li>
            <li><strong>Quotient Rule:</strong> y = u/v → dy/dx = [v·(du/dx) − u·(dv/dx)] / v² &nbsp; <em>"low d-high minus high d-low, over low squared"</em></li>
            <li><strong>Chain Rule:</strong> y = f(g(x)) → dy/dx = f'(g(x)) · g'(x) &nbsp; <em>"derivative of outside × derivative of inside"</em></li>
        </ul>

        <h4>🔥 Must-Know Standard Derivatives</h4>
        <ul>
            <li>y = xⁿ &nbsp;→&nbsp; dy/dx = nxⁿ⁻¹</li>
            <li>y = eˣ &nbsp;→&nbsp; dy/dx = eˣ</li>
            <li>y = aˣ &nbsp;→&nbsp; dy/dx = aˣ ln a</li>
            <li>y = ln x &nbsp;→&nbsp; dy/dx = 1/x</li>
            <li>y = ln(f(x)) &nbsp;→&nbsp; dy/dx = f'(x)/f(x) &nbsp; <strong>← shortcut!</strong></li>
            <li>y = sin x &nbsp;→&nbsp; dy/dx = cos x</li>
            <li>y = cos x &nbsp;→&nbsp; dy/dx = −sin x</li>
            <li>y = tan x &nbsp;→&nbsp; dy/dx = sec² x</li>
            <li>y = sec x &nbsp;→&nbsp; dy/dx = sec x tan x</li>
            <li>y = arctan x &nbsp;→&nbsp; dy/dx = 1/(1+x²)</li>
            <li>y = √x = x^(1/2) &nbsp;→&nbsp; dy/dx = 1/(2√x)</li>
        </ul>

        <h4>📋 Partial Differentiation</h4>
        <p>Treat ALL other variables as constants, differentiate only with respect to the target variable.</p>
        <ul>
            <li>v = 4x²y → ∂v/∂x = <strong>8xy</strong> &nbsp; (treat y as a number)</li>
            <li>v = 4x²y → ∂v/∂y = <strong>4x²</strong> &nbsp; (treat x as a number)</li>
        </ul>

        <h4>🧮 CBT Worked Examples</h4>
        <ul>
            <li><strong>y = x³ → dy/dx = 3x²</strong></li>
            <li><strong>y = 5x⁴ → dy/dx = 20x³</strong></li>
            <li><strong>y = (3/2)x⁴ − 3x² − 6x − 1 → dy/dx = 6x³ − 6x − 6</strong></li>
            <li><strong>y = 5x²·(6/x):</strong> Simplify first → y = 30x → dy/dx = <strong>30</strong> &nbsp; <em>(always simplify before differentiating!)</em></li>
            <li><strong>y = ln(sin x) → dy/dx = cos x / sin x = cot x</strong> &nbsp; <em>(used the ln shortcut)</em></li>
            <li><strong>y = ln(x² + 1) → dy/dx = 2x/(x² + 1)</strong></li>
            <li><strong>y = x·sin(x³):</strong> Product Rule + Chain Rule
                <ul>
                    <li>u = x → du/dx = 1</li>
                    <li>v = sin(x³) → dv/dx = cos(x³)·3x² &nbsp; (chain rule)</li>
                    <li>dy/dx = x·3x²cos(x³) + sin(x³)·1 = <strong>3x³cos(x³) + sin(x³)</strong></li>
                </ul>
            </li>
            <li><strong>y = (x²+1)⁵ → dy/dx = 5(x²+1)⁴·2x = 10x(x²+1)⁴</strong> &nbsp; (chain rule)</li>
            <li><strong>y = e^{2x} → dy/dx = 2e^{2x}</strong> &nbsp; (chain rule: outer stays, multiply by inner's derivative)</li>
            <li><strong>4x³ − 2x² + 5x − 7 → dy/dx = 12x² − 4x + 5</strong></li>
        </ul>
    `,
    
    applications_derivatives: `
        <div class="definition-box">
            <strong>📌 The Big Idea:</strong> dy/dx = 0 finds stationary points (max/min). The sign of d²y/dx² tells you which one.
        </div>

        <h4>🔥 Stationary Points — Step by Step</h4>
        <ol>
            <li>Find dy/dx</li>
            <li>Set dy/dx = 0, solve for x</li>
            <li>Substitute x back into original equation to get y → that's the point</li>
            <li>Find d²y/dx² at that x:
                <ul>
                    <li>d²y/dx² &gt; 0 → <strong>minimum</strong></li>
                    <li>d²y/dx² &lt; 0 → <strong>maximum</strong></li>
                </ul>
            </li>
        </ol>

        <h4>⚡ Shortcut for Quadratics</h4>
        <p>For y = ax² + bx + c → stationary point at: &nbsp;<strong>x = −b / (2a)</strong></p>
        <p>Then substitute to find y.</p>

        <h4>📋 Increasing / Decreasing</h4>
        <ul>
            <li>dy/dx &gt; 0 → function is <strong>increasing</strong></li>
            <li>dy/dx &lt; 0 → function is <strong>decreasing</strong></li>
            <li>dy/dx = 0 → stationary (turning point)</li>
        </ul>

        <h4>📋 Tangent Line</h4>
        <p>At point (x₀, y₀): &nbsp; <strong>y − y₀ = m(x − x₀)</strong> where m = dy/dx at x₀</p>

        <h4>📋 Motion (Physics questions)</h4>
        <ul>
            <li>Position = s(t) → velocity = ds/dt → acceleration = d²s/dt²</li>
        </ul>

        <h4>🧮 CBT Examples</h4>
        <ul>
            <li><strong>y = x² − x + 2, find stationary point:</strong>
                <ul>
                    <li>dy/dx = 2x − 1 = 0 → x = 1/2</li>
                    <li>y = (1/2)² − (1/2) + 2 = 1/4 − 1/2 + 2 = 7/4</li>
                    <li>Point: <strong>(1/2, 7/4)</strong> &nbsp; <em>Shortcut: x = −(−1)/(2×1) = 1/2 ✓</em></li>
                </ul>
            </li>
            <li><strong>f(x) = x³ − 3x² + 2, critical points:</strong>
                <ul>
                    <li>f'(x) = 3x² − 6x = 3x(x−2) = 0 → <strong>x = 0 and x = 2</strong></li>
                </ul>
            </li>
            <li><strong>Slope of tangent to y = x² at x = 2:</strong> dy/dx = 2x → at x=2 → slope = <strong>4</strong></li>
            <li><strong>Tangent line to y = x² at (2, 4):</strong> y − 4 = 4(x − 2) → y = 4x − 4</li>
        </ul>
    `,

    integration: `
        <div class="definition-box">
            <strong>📌 The Big Idea:</strong> Integration is the reverse of differentiation. Always add +C for indefinite integrals. For definite integrals: ∫ₐᵇ f(x) dx = F(b) − F(a) (no +C needed).
        </div>

        <h4>🔥 Must-Memorize Rules</h4>
        <ul>
            <li><strong>Power Rule:</strong> ∫ xⁿ dx = xⁿ⁺¹/(n+1) + C</li>
            <li><strong>∫ 1/x dx = ln|x| + C</strong></li>
            <li><strong>∫ eˣ dx = eˣ + C</strong></li>
            <li><strong>∫ aˣ dx = aˣ / ln a + C</strong></li>
            <li><strong>∫ sin x dx = −cos x + C</strong></li>
            <li><strong>∫ cos x dx = sin x + C</strong></li>
            <li><strong>∫ sec² x dx = tan x + C</strong></li>
            <li><strong>∫ tan x dx = −ln|cos x| + C = ln|sec x| + C</strong></li>
            <li><strong>∫ 1/(1+x²) dx = arctan x + C</strong></li>
        </ul>

        <h4>🔥 CBT Pattern Shortcuts — Must Memorize</h4>
        <ul>
            <li><strong>f'(x)/f(x) pattern → ln|f(x)| + C</strong>
                <ul><li>Check: is numerator the derivative of denominator? → answer is ln|denominator| + C</li>
                <li>e.g. ∫ (12x²+10)/(4x³+10x+5) dx → 12x²+10 = derivative of 4x³+10x+5 ✓ → <strong>ln|4x³+10x+5| + C</strong></li></ul>
            </li>
            <li><strong>f'(x)·sin(f(x)) → −cos(f(x)) + C</strong>
                <ul><li>e.g. ∫ (2x+1)sin(x²+x+1) dx → derivative of x²+x+1 = 2x+1 ✓ → <strong>−cos(x²+x+1) + C</strong></li></ul>
            </li>
            <li><strong>f'(x)·cos(f(x)) → sin(f(x)) + C</strong>
                <ul><li>e.g. ∫ 2x·cos(x²) dx → 2x = derivative of x² ✓ → <strong>sin(x²) + C</strong></li></ul>
            </li>
            <li><strong>∫ sin(ax+b) dx = −(1/a)cos(ax+b) + C</strong>
                <ul><li>e.g. ∫ 3sin(2x+3) dx = 3 × [−(1/2)cos(2x+3)] = <strong>−(3/2)cos(2x+3) + C</strong></li></ul>
            </li>
            <li><strong>∫ cos(ax+b) dx = (1/a)sin(ax+b) + C</strong></li>
        </ul>

        <h4>📊 u-Substitution (when you see a composite function)</h4>
        <ol>
            <li>Let u = inner function</li>
            <li>Find du, substitute everything, integrate, sub back</li>
        </ol>
        <p><em>∫ 2x(x²+1)⁴ dx → u = x²+1, du = 2x dx → ∫ u⁴ du = u⁵/5 + C = (x²+1)⁵/5 + C</em></p>
        <p><em>∫ sin x cos x dx → u = sin x, du = cos x dx → ∫ u du = u²/2 + C = sin²x/2 + C</em></p>

        <h4>📊 Definite Integrals</h4>
        <ol>
            <li>Integrate normally (find F(x))</li>
            <li>Answer = F(upper) − F(lower) — no +C</li>
        </ol>
        <ul>
            <li><strong>∫₀¹ x² dx = [x³/3]₀¹ = 1/3 − 0 = 1/3</strong></li>
            <li><strong>∫₀^(π/2) sin x dx = [−cos x]₀^(π/2) = −cos(π/2) + cos(0) = 0 + 1 = 1</strong></li>
            <li><strong>∫₀^π sin x dx = [−cos x]₀^π = −(−1) − (−1) = 2</strong></li>
            <li><strong>∫₁² 1/x dx = ln 2 − ln 1 = ln 2</strong></li>
        </ul>

        <h4>📊 Integration by Parts</h4>
        <p><strong>∫ u dv = uv − ∫ v du</strong> — use for products like x·eˣ, x·ln x</p>
        <p><em>∫ x eˣ dx → u=x, dv=eˣdx → xeˣ − eˣ + C</em></p>
    `,
    
    definite_integrals: `
        <div class="definition-box">
            <strong>📌 The Big Idea:</strong> A definite integral gives a number (not a function). It's the area under the curve between two limits. Always use: ∫ₐᵇ f(x) dx = F(b) − F(a)
        </div>

        <h4>⚡ How to Evaluate Definite Integrals</h4>
        <ol>
            <li>Integrate normally (find F(x))</li>
            <li>Plug in upper limit b → get F(b)</li>
            <li>Plug in lower limit a → get F(a)</li>
            <li>Answer = F(b) − F(a) &nbsp; (no +C needed)</li>
        </ol>

        <h4>🧮 CBT Examples</h4>
        <ul>
            <li><strong>∫₀¹ x² dx:</strong> = [x³/3]₀¹ = 1/3 − 0 = <strong>1/3</strong></li>
            <li><strong>∫₀^π sin x dx:</strong> = [−cos x]₀^π = (−cos π) − (−cos 0) = −(−1) − (−1) = 1 + 1 = <strong>2</strong></li>
            <li><strong>∫₁² (1/x) dx:</strong> = [ln x]₁² = ln 2 − ln 1 = <strong>ln 2</strong></li>
        </ul>

        <h4>📋 Integration by Parts (recap)</h4>
        <p><strong>∫ u dv = uv − ∫ v du</strong></p>
        <ul>
            <li>∫ x eˣ dx: u=x, dv=eˣdx → v=eˣ → <strong>xeˣ − eˣ + C</strong></li>
        </ul>

        <h4>📋 Trapezoidal & Simpson's Rules (for MCQs)</h4>
        <ul>
            <li><strong>Trapezoidal:</strong> ≈ Δx/2 · [f(x₀) + 2f(x₁) + 2f(x₂) + ... + f(xₙ)]</li>
            <li><strong>Simpson's:</strong> ≈ Δx/3 · [f(x₀) + 4f(x₁) + 2f(x₂) + 4f(x₃) + ... + f(xₙ)] &nbsp; <em>(n must be even)</em></li>
        </ul>
    `,

    advanced_topics: `
        <div class="definition-box">
            <strong>📌 L'Hôpital's Rule:</strong> If a limit gives 0/0 or ∞/∞, differentiate top and bottom separately, then take the limit again.
        </div>

        <h4>⚡ L'Hôpital — When to Use</h4>
        <ul>
            <li>Only use when direct substitution gives <strong>0/0 or ∞/∞</strong></li>
            <li>lim sin x/x as x→0: gives 0/0 → differentiate → cos x / 1 → at x=0 = <strong>1</strong></li>
            <li>Can be applied multiple times if still indeterminate</li>
        </ul>

        <h4>📋 Key Theorems (quick CBT answers)</h4>
        <ul>
            <li><strong>Mean Value Theorem (MVT):</strong> There exists a point c between a and b where the instantaneous rate = average rate: f'(c) = [f(b)−f(a)]/(b−a)</li>
            <li><strong>Rolle's Theorem:</strong> If f(a) = f(b), then somewhere between a and b, f'(c) = 0</li>
            <li><strong>IVT (Intermediate Value Theorem):</strong> If f is continuous between a and b, it hits every value between f(a) and f(b)</li>
        </ul>

        <h4>🔥 Must-Memorize Summary Sheet</h4>
        <h4>Derivatives</h4>
        <ul>
            <li>xⁿ → nxⁿ⁻¹</li>
            <li>eˣ → eˣ</li>
            <li>ln x → 1/x</li>
            <li>ln(f(x)) → f'(x)/f(x)</li>
            <li>sin x → cos x</li>
            <li>cos x → −sin x</li>
            <li>tan x → sec² x</li>
            <li>aˣ → aˣ ln a</li>
        </ul>
        <h4>Integrals</h4>
        <ul>
            <li>∫ xⁿ dx = xⁿ⁺¹/(n+1) + C</li>
            <li>∫ 1/x dx = ln|x| + C</li>
            <li>∫ f'(x)/f(x) dx = ln|f(x)| + C</li>
            <li>∫ eˣ dx = eˣ + C</li>
            <li>∫ sin x dx = −cos x + C</li>
            <li>∫ cos x dx = sin x + C</li>
        </ul>
        <h4>Limits</h4>
        <ul>
            <li>sin x / x → 1 &nbsp; (x→0)</li>
            <li>tan x / x → 1 &nbsp; (x→0)</li>
            <li>(1−cos x)/x → 0 &nbsp; (x→0)</li>
            <li>(1−cos x)/x² → 1/2 &nbsp; (x→0)</li>
        </ul>
        <h4>Stationary Points</h4>
        <ul>
            <li>Set dy/dx = 0, solve x</li>
            <li>Quadratic shortcut: x = −b/(2a)</li>
            <li>d²y/dx² &gt; 0 = minimum, &lt; 0 = maximum</li>
        </ul>
        <h4>Discontinuity</h4>
        <ul>
            <li>Set denominator = 0, solve for x → that's where the function breaks</li>
        </ul>
    `
},
"MCB 102": {
    intro_history: `
        <h4>🔬 Introduction & History of Microbiology</h4>

        <div class="definition-box">
            <strong>📌 Quick Definition:</strong>
            <ul>
                <li><strong>Microbiology</strong> = study of microscopic forms of life (bacteria, viruses, fungi, protozoa, algae).</li>
                <li><strong>Microbes</strong> are invisible to the naked eye — need a microscope.</li>
            </ul>
        </div>

        <h4>🏆 Key Scientists — memorise these!</h4>
        <table class="notes-table">
            <tr><th>Scientist</th><th>Contribution</th><th>Year</th></tr>
            <tr><td>Antonie van Leeuwenhoek</td><td>First to observe bacteria ("animalcules") with single-lens microscope</td><td>1676</td></tr>
            <tr><td>Louis Pasteur</td><td>Disproved spontaneous generation; germ theory; pasteurisation; vaccines</td><td>1850s–1880s</td></tr>
            <tr><td>Robert Koch</td><td>Koch's postulates; proved specific microbes cause specific diseases</td><td>1876–1884</td></tr>
            <tr><td>Robert Hooke</td><td>First to use the word "cell"; observed cells in cork (1665)</td><td>1665</td></tr>
            <tr><td>Joseph Lister</td><td>Antiseptic surgery using carbolic acid</td><td>1867</td></tr>
            <tr><td>Alexander Fleming</td><td>Discovered penicillin (first antibiotic)</td><td>1928</td></tr>
            <tr><td>Edward Jenner</td><td>First vaccine (smallpox/cowpox)</td><td>1796</td></tr>
            <tr><td>Dmitri Ivanovsky</td><td>First evidence of viruses (tobacco mosaic disease)</td><td>1892</td></tr>
        </table>

        <div class="key-point">
            <strong>💡 Trick:</strong> Leeuwenhoek = first to SEE bacteria. Pasteur = germ theory. Koch = postulates. Fleming = penicillin. These four come up every exam.
        </div>

        <h4>📋 Branches of Microbiology</h4>
        <ul>
            <li><strong>Bacteriology</strong> — bacteria</li>
            <li><strong>Virology</strong> — viruses</li>
            <li><strong>Mycology</strong> — fungi</li>
            <li><strong>Protozoology</strong> — protozoa</li>
            <li><strong>Phycology / Algology</strong> — algae</li>
            <li><strong>Immunology</strong> — immune system</li>
            <li><strong>Epidemiology</strong> — disease spread in populations</li>
        </ul>
    `,

    spontaneous_generation: `
        <h4>🧫 Spontaneous Generation</h4>

        <div class="definition-box">
            <strong>📌 What it is:</strong> The old belief that living things arise from non-living matter (e.g., maggots from meat, frogs from mud). Also called <strong>abiogenesis</strong>.
        </div>

        <h4>⚔️ The Debate — Who said what</h4>
        <table class="notes-table">
            <tr><th>Scientist</th><th>Side</th><th>Experiment</th></tr>
            <tr><td>Francesco Redi (1668)</td><td>Against</td><td>Covered vs uncovered meat → maggots only on uncovered = flies lay eggs</td></tr>
            <tr><td>John Needham (1748)</td><td>For</td><td>Boiled broth in sealed flasks → still grew microbes → "life force"</td></tr>
            <tr><td>Lazzaro Spallanzani (1768)</td><td>Against</td><td>Properly sealed + boiled broth → no growth. (Needham said he killed the "life force")</td></tr>
            <tr><td>Louis Pasteur (1859)</td><td>Against (FINAL)</td><td><strong>Swan-neck flask</strong>: boiled broth + curved neck → no growth unless neck broken. SETTLED the debate.</td></tr>
        </table>

        <div class="key-point">
            <strong>💡 Trick:</strong> Pasteur's swan-neck flask = the experiment that ended the debate. Air could enter but dust/microbes couldn't reach the broth. When neck was broken, broth grew cloudy. Exam loves this.
        </div>

        <h4>📌 Key Terms</h4>
        <ul>
            <li><strong>Abiogenesis</strong> = spontaneous generation (life from non-life)</li>
            <li><strong>Biogenesis</strong> = life only comes from existing life (what we believe now)</li>
            <li><strong>Pasteurisation</strong> = mild heat to kill pathogens in food/drinks (not the same as sterilisation)</li>
        </ul>
    `,

    germ_theory: `
        <h4>🦠 Germ Theory & Koch's Postulates</h4>

        <div class="definition-box">
            <strong>📌 Germ Theory (Pasteur):</strong> Specific microorganisms (germs) cause specific infectious diseases. This replaced the old "miasma" theory (bad air causes disease).
        </div>

        <h4>✅ Koch's Postulates — 4 steps, memorise order</h4>
        <ol>
            <li>The microorganism must be found in <strong>all diseased organisms</strong> but NOT in healthy ones.</li>
            <li>The microorganism must be <strong>isolated</strong> from the diseased organism and grown in <strong>pure culture</strong>.</li>
            <li>The cultured microorganism must <strong>cause disease</strong> when introduced into a healthy organism.</li>
            <li>The microorganism must be <strong>re-isolated</strong> from the experimentally diseased organism and shown to be identical to the original.</li>
        </ol>

        <div class="key-point">
            <strong>💡 Trick:</strong> Find → Isolate → Infect → Re-isolate. That's the 4-step chain. If any step fails, Koch's postulates are NOT fulfilled.
        </div>

        <h4>📋 Koch's Work</h4>
        <ul>
            <li>Proved <em>Bacillus anthracis</em> causes <strong>anthrax</strong> (1876)</li>
            <li>Proved <em>Mycobacterium tuberculosis</em> causes <strong>tuberculosis</strong> (1882)</li>
            <li>Introduced use of <strong>solid agar</strong> culture media (credited to Fannie Hesse/Richard Petri)</li>
            <li>Developed <strong>staining techniques</strong> for bacteria</li>
        </ul>

        <h4>⚠️ Limitations of Koch's Postulates</h4>
        <ul>
            <li>Does NOT apply to viruses (can't grow in pure culture)</li>
            <li>Some people carry pathogens but show no disease (asymptomatic carriers)</li>
            <li>Some diseases are caused by multiple organisms</li>
        </ul>
    `,

    microbe_characteristics: `
        <h4>🔬 Characteristics of Microorganisms</h4>

        <div class="definition-box">
            <strong>📌 General Characteristics of ALL Microbes:</strong>
            <ul>
                <li>Microscopic (too small to see with naked eye)</li>
                <li>Ubiquitous (found everywhere — soil, water, air, body)</li>
                <li>Reproduce rapidly</li>
                <li>Show great metabolic diversity</li>
            </ul>
        </div>

        <h4>📊 Major Groups — Quick Comparison</h4>
        <table class="notes-table">
            <tr><th>Group</th><th>Cell Type</th><th>Has Nucleus?</th><th>Example</th></tr>
            <tr><td>Bacteria</td><td>Prokaryote</td><td>No</td><td>E. coli, Salmonella</td></tr>
            <tr><td>Fungi</td><td>Eukaryote</td><td>Yes</td><td>Rhizopus, Aspergillus, Candida</td></tr>
            <tr><td>Protozoa</td><td>Eukaryote</td><td>Yes</td><td>Plasmodium, Amoeba</td></tr>
            <tr><td>Algae</td><td>Eukaryote</td><td>Yes</td><td>Chlamydomonas, Spirogyra</td></tr>
            <tr><td>Viruses</td><td>Acellular</td><td>No</td><td>Influenza, HIV, SARS-CoV-2</td></tr>
        </table>

        <div class="key-point">
            <strong>💡 Trick:</strong> Only bacteria are prokaryotes. Viruses are NOT cells at all — they're acellular (no cell structure). Everything else (fungi, protozoa, algae) = eukaryotes.
        </div>

        <h4>📋 Bacterial Shapes (Morphology)</h4>
        <ul>
            <li><strong>Cocci</strong> — spherical (e.g., Staphylococcus, Streptococcus)</li>
            <li><strong>Bacilli</strong> — rod-shaped (e.g., E. coli, Bacillus)</li>
            <li><strong>Spirilla</strong> — spiral/helical (e.g., Helicobacter pylori)</li>
            <li><strong>Vibrio</strong> — comma-shaped (e.g., Vibrio cholerae)</li>
        </ul>
    `,

    microbial_growth: `
        <h4>📈 Microbial Growth Phases</h4>

        <div class="definition-box">
            <strong>📌 Growth = increase in cell number</strong>, not cell size. Bacteria reproduce by <strong>binary fission</strong>.
        </div>

        <h4>🔄 The 4 Phases — Must Know All 4</h4>
        <table class="notes-table">
            <tr><th>Phase</th><th>What Happens</th><th>Key Feature</th></tr>
            <tr><td>1. Lag Phase</td><td>Bacteria adjusting to new environment. No division yet.</td><td>Synthesis of enzymes, RNA — preparation stage</td></tr>
            <tr><td>2. Log Phase (Exponential)</td><td>Rapid cell division. Population doubles every generation time.</td><td>Fastest growth; most metabolically active; best time to study bacteria</td></tr>
            <tr><td>3. Stationary Phase</td><td>Growth = Death rate. Population stays constant.</td><td>Nutrients depleted, waste builds up</td></tr>
            <tr><td>4. Death Phase (Decline)</td><td>Death rate > Growth rate. Population falls.</td><td>Toxic waste kills cells; nutrient exhaustion</td></tr>
        </table>

        <div class="key-point">
            <strong>💡 Trick:</strong> Lag → Log → Stationary → Death. Remember: "Let Logs Stay Dead." In the log phase, bacteria are at peak activity — antibiotics work best here.
        </div>

        <h4>📌 Key Terms</h4>
        <ul>
            <li><strong>Generation time</strong> = time for population to double (E. coli ≈ 20 min)</li>
            <li><strong>Binary fission</strong> = one cell splits into two equal cells</li>
            <li><strong>Colony</strong> = visible mass of bacteria grown from a single cell on solid media</li>
            <li><strong>Culture media</strong> = nutrients used to grow bacteria in the lab</li>
        </ul>
    `,

    economic_fungi: `
        <h4>🍄 Economic Importance of Fungi</h4>

        <div class="definition-box">
            <strong>📌 Fungi are eukaryotes</strong> that are saprophytes (feed on dead organic matter). They reproduce by spores. Major groups: Zygomycetes, Ascomycetes, Basidiomycetes, Deuteromycetes.
        </div>

        <h4>✅ Beneficial Uses of Fungi</h4>
        <table class="notes-table">
            <tr><th>Use</th><th>Fungus</th><th>Product/Role</th></tr>
            <tr><td>Bread making</td><td>Saccharomyces cerevisiae (yeast)</td><td>Fermentation → CO₂ makes bread rise</td></tr>
            <tr><td>Alcohol production</td><td>Saccharomyces cerevisiae</td><td>Ferments sugars → ethanol (beer, wine)</td></tr>
            <tr><td>Cheese making</td><td>Penicillium roqueforti / P. camemberti</td><td>Ripening and flavouring of cheese</td></tr>
            <tr><td>Antibiotics</td><td>Penicillium notatum (Fleming)</td><td>Produces penicillin</td></tr>
            <tr><td>Soy sauce / tempeh</td><td>Aspergillus sojae / Rhizopus</td><td>Fermented food products</td></tr>
            <tr><td>Citric acid</td><td>Aspergillus niger</td><td>Used in food and beverages</td></tr>
            <tr><td>Decomposition</td><td>Various saprophytic fungi</td><td>Recycle nutrients in ecosystem</td></tr>
            <tr><td>Food itself</td><td>Agaricus (mushroom)</td><td>Edible mushrooms</td></tr>
        </table>

        <h4>❌ Harmful Effects of Fungi</h4>
        <ul>
            <li><strong>Diseases in humans:</strong> Ringworm (Tinea), Candidiasis (Candida albicans), Athlete's foot, Histoplasmosis</li>
            <li><strong>Diseases in plants:</strong> Damping off (Pythium), Blight, Mildew, Rust — destroy crops</li>
            <li><strong>Food spoilage:</strong> Aspergillus, Rhizopus, Mucor spoil stored food</li>
            <li><strong>Mycotoxins:</strong> Aflatoxin (from Aspergillus flavus) — contaminates groundnuts/maize; can cause liver cancer</li>
            <li><strong>Wood rot:</strong> Fungi destroy timber and wooden structures</li>
        </ul>

        <div class="key-point">
            <strong>💡 Trick:</strong> Aspergillus = aflatoxin + citric acid + food spoilage. Penicillium = penicillin antibiotic + cheese. Saccharomyces = yeast = bread + alcohol. These three come up most.
        </div>
    `,

    economic_bacteria: `
        <h4>🦠 Economic Importance of Bacteria</h4>

        <div class="definition-box">
            <strong>📌 Bacteria are prokaryotes.</strong> They are both enormously useful and dangerously harmful to humans.
        </div>

        <h4>✅ Beneficial Uses of Bacteria</h4>
        <table class="notes-table">
            <tr><th>Use</th><th>Bacterium</th><th>Role</th></tr>
            <tr><td>Nitrogen fixation</td><td>Rhizobium (in legume roots), Azotobacter</td><td>Convert N₂ gas → ammonia → soil fertility</td></tr>
            <tr><td>Yoghurt/Cheese</td><td>Lactobacillus, Streptococcus thermophilus</td><td>Ferment lactose → lactic acid</td></tr>
            <tr><td>Vinegar</td><td>Acetobacter aceti</td><td>Oxidise ethanol → acetic acid</td></tr>
            <tr><td>Antibiotics</td><td>Streptomyces</td><td>Produces streptomycin, tetracycline, erythromycin</td></tr>
            <tr><td>Sewage treatment</td><td>Mixed bacteria</td><td>Break down organic waste</td></tr>
            <tr><td>Bioremediation</td><td>Various</td><td>Clean up oil spills, toxic waste</td></tr>
            <tr><td>Biotechnology</td><td>E. coli (engineered)</td><td>Produces insulin, growth hormones, vaccines</td></tr>
            <tr><td>Decomposition</td><td>Saprophytic bacteria</td><td>Recycle dead organic matter</td></tr>
        </table>

        <h4>❌ Harmful Effects of Bacteria</h4>
        <ul>
            <li><strong>Food poisoning:</strong> Salmonella typhi (typhoid), Clostridium botulinum (botulism), Staphylococcus aureus</li>
            <li><strong>Respiratory diseases:</strong> Mycobacterium tuberculosis (TB), Streptococcus pneumoniae (pneumonia)</li>
            <li><strong>STIs:</strong> Neisseria gonorrhoeae (gonorrhoea), Treponema pallidum (syphilis)</li>
            <li><strong>Plant diseases:</strong> Agrobacterium (crown gall), Erwinia (soft rot)</li>
            <li><strong>Food spoilage:</strong> Pseudomonas, Clostridium spoil meat, canned food</li>
        </ul>

        <div class="key-point">
            <strong>💡 Trick:</strong> Rhizobium = nitrogen fixation in legumes (most common exam Q). Lactobacillus = yoghurt. Streptomyces = antibiotic source (NOT Penicillium — that's a fungus). E. coli = lab workhorse for biotech.
        </div>

        <h4>📌 Nitrogen Cycle — Quick Summary</h4>
        <ul>
            <li><strong>Nitrogen fixation:</strong> Rhizobium/Azotobacter → N₂ → NH₃</li>
            <li><strong>Nitrification:</strong> Nitrosomonas → NH₃ → NO₂⁻; Nitrobacter → NO₂⁻ → NO₃⁻</li>
            <li><strong>Denitrification:</strong> Pseudomonas → NO₃⁻ back to N₂ gas</li>
            <li><strong>Ammonification:</strong> Decomposers break down proteins → NH₃</li>
        </ul>
    `
},
"COS 102": {
    intro_computing: `
        <h4>💻 Introduction to Computing and Problems</h4>
        
        <div class="definition-box">
            <strong>📌 Key Definitions:</strong>
            <ul>
                <li><strong>Computer:</strong> Programmable electronic device that processes data.</li>
                <li><strong>Hardware:</strong> Physical components (CPU, RAM, HDD, keyboard, monitor).</li>
                <li><strong>Software:</strong> Programs and instructions (OS, applications).</li>
                <li><strong>Data vs Information:</strong> Data = raw facts; Information = processed data.</li>
            </ul>
        </div>
        
        <h4>📋 Problem Classification</h4>
        <ul>
            <li><strong>Routine Problems:</strong> Known solutions, standard approaches (e.g., calculating average)</li>
            <li><strong>Non-routine Problems:</strong> Novel, require creativity (e.g., AI, new algorithms)</li>
        </ul>
        
        <div class="key-point">
            <strong>💡 Key Point:</strong> Computational thinking includes four pillars: Decomposition, Pattern Recognition, Abstraction, Algorithm Design.
        </div>
        
        <h4>📊 General Problem-Solving Process</h4>
        <ol>
            <li><strong>Identify and Define</strong> - Understand the problem clearly</li>
            <li><strong>Analyze</strong> - Break down, gather information</li>
            <li><strong>Generate Solutions</strong> - Brainstorm multiple approaches</li>
            <li><strong>Select Solution</strong> - Choose best based on constraints</li>
            <li><strong>Implement</strong> - Code the solution</li>
            <li><strong>Evaluate and Refine</strong> - Test, debug, improve</li>
        </ol>
    `,
    
    solvability: `
        <h4>🔍 Solvable and Unsolvable Problems</h4>
        
        <div class="definition-box">
            <strong>📌 Key Definitions:</strong>
            <ul>
                <li><strong>Solvable:</strong> There exists an algorithm that finds a solution in finite time.</li>
                <li><strong>Unsolvable:</strong> No algorithm can solve it (e.g., Halting Problem).</li>
                <li><strong>Tractable:</strong> Solvable in polynomial time (P problems).</li>
                <li><strong>Intractable:</strong> Requires exponential time (NP-hard).</li>
            </ul>
        </div>
        
        <h4>📋 The Halting Problem</h4>
        <p>Alan Turing proved that no general algorithm can determine whether any arbitrary program will halt or run forever. This is the classic unsolvable problem.</p>
        
        <h4>📊 Complexity Classes</h4>
        <ul>
            <li><strong>P:</strong> Problems solvable in polynomial time (sorting, searching)</li>
            <li><strong>NP:</strong> Solutions verifiable in polynomial time</li>
            <li><strong>NP-complete:</strong> Hardest NP problems (Traveling Salesman, Sudoku)</li>
            <li><strong>NP-hard:</strong> At least as hard as NP-complete</li>
        </ul>
        
        <div class="key-point">
            <strong>💡 Key Point:</strong> P vs NP is the biggest open problem in computer science ($1M prize). Does P = NP or P ≠ NP? Most believe P ≠ NP.
        </div>
        
        <h4>📈 Big O Notation (Complexity)</h4>
        <ul>
            <li><strong>O(1):</strong> Constant - array access</li>
            <li><strong>O(log n):</strong> Logarithmic - binary search</li>
            <li><strong>O(n):</strong> Linear - linear search</li>
            <li><strong>O(n log n):</strong> Linearithmic - merge sort, quick sort</li>
            <li><strong>O(n²):</strong> Quadratic - bubble sort</li>
            <li><strong>O(2ⁿ):</strong> Exponential - traveling salesman (brute force)</li>
        </ul>
    `,
    
    problem_techniques: `
        <h4>🧠 Problem Solving Techniques</h4>
        
        <div class="definition-box">
            <strong>📌 Key Concept:</strong> Multiple techniques exist for tackling different types of problems.
        </div>
        
        <h4>📋 General Techniques</h4>
        <ul>
            <li><strong>Abstraction:</strong> Hide irrelevant details, focus on essentials</li>
            <li><strong>Analogy:</strong> Use solutions from similar problems</li>
            <li><strong>Brainstorming:</strong> Generate many ideas without judgment</li>
            <li><strong>Trial and Error:</strong> Test solutions until one works</li>
            <li><strong>Hypothesis Testing:</strong> Propose and test potential explanations</li>
            <li><strong>Research:</strong> Gather existing knowledge and solutions</li>
            <li><strong>Root Cause Analysis:</strong> Identify underlying cause, not just symptoms</li>
        </ul>
        
        <div class="key-point">
            <strong>💡 Key Point:</strong> Reduction transforms a problem into a known solvable form. Divide and conquer recursively breaks problems into smaller subproblems.
        </div>
        
        <h4>📊 Algorithmic Techniques</h4>
        <ul>
            <li><strong>Divide and Conquer:</strong> Split, solve recursively, combine (merge sort, quicksort)</li>
            <li><strong>Greedy:</strong> Make locally optimal choice at each step (Dijkstra's, Huffman coding)</li>
            <li><strong>Dynamic Programming:</strong> Break into overlapping subproblems, store results (Fibonacci, shortest path)</li>
            <li><strong>Backtracking:</strong> Try options, undo dead ends (N-Queens, maze solving)</li>
            <li><strong>Brute Force:</strong> Try all possibilities (simple but inefficient for large problems)</li>
            <li><strong>Heuristics:</strong> Rule-of-thumb for good-enough solutions (not guaranteed optimal)</li>
        </ul>
        
        <h4>📈 Creative Techniques</h4>
        <ul>
            <li><strong>Lateral Thinking:</strong> Indirect, creative approaches</li>
            <li><strong>Means-End Analysis:</strong> Identify differences from goal, actions to reduce them</li>
            <li><strong>Method of Focal Object:</strong> Combine problem with random objects for new ideas</li>
            <li><strong>Morphological Analysis:</strong> Explore all combinations of parameters</li>
        </ul>
    `,
    
    solution_design: `
        <h4>📐 Solution Formulation and Design</h4>
        
        <div class="definition-box">
            <strong>📌 Key Definitions:</strong>
            <ul>
                <li><strong>Algorithm:</strong> Finite sequence of well-defined instructions to solve a problem.</li>
                <li><strong>Flowchart:</strong> Visual diagram using symbols to represent algorithm steps.</li>
                <li><strong>Pseudocode:</strong> English-like description of algorithm steps.</li>
            </ul>
        </div>
        
        <h4>📋 Flowchart Symbols</h4>
        <ul>
            <li><strong>Oval (Terminator):</strong> Start/End</li>
            <li><strong>Rectangle:</strong> Process/Operation</li>
            <li><strong>Diamond:</strong> Decision (Yes/No branch)</li>
            <li><strong>Parallelogram:</strong> Input/Output</li>
            <li><strong>Circle/Connector:</strong> Connects flow lines</li>
            <li><strong>Rectangle with vertical lines:</strong> Pre-defined process/Subroutine</li>
        </ul>
        
        <div class="key-point">
            <strong>💡 Key Point:</strong> Flowcharts help visualize logic, communicate with others, and debug before coding.
        </div>
        
        <h4>📊 Pseudocode Conventions</h4>
        <ul>
            <li><strong>Assignment:</strong> x = 5  or  x ← 5</li>
            <li><strong>Input:</strong> READ x  or  INPUT x</li>
            <li><strong>Output:</strong> DISPLAY x  or  PRINT x</li>
            <li><strong>Conditional:</strong> IF condition THEN ... ELSE ... END IF</li>
            <li><strong>WHILE Loop:</strong> WHILE condition DO ... END WHILE</li>
            <li><strong>FOR Loop:</strong> FOR i = 1 TO n DO ... END FOR</li>
        </ul>
        
        <h4>📈 Decision Tables and Trees</h4>
        <ul>
            <li><strong>Decision Table:</strong> Matrix mapping conditions to actions (rows = conditions, columns = rules)</li>
            <li><strong>Decision Tree:</strong> Tree diagram showing decisions and consequences (used in ML classification)</li>
        </ul>
        
        <h4>📋 Example: Find Maximum of Three Numbers (Pseudocode)</h4>
        <pre style="background:#f0f0f0; padding:10px; border-radius:8px;">
BEGIN
    INPUT a, b, c
    IF a > b AND a > c THEN
        max = a
    ELSE IF b > a AND b > c THEN
        max = b
    ELSE
        max = c
    END IF
    DISPLAY max
END
        </pre>
    `,
    
    implementation: `
        <h4>⚙️ Implementation, Evaluation and Refinement</h4>
        
        <div class="definition-box">
            <strong>📌 Key Definitions:</strong>
            <ul>
                <li><strong>Implementation:</strong> Coding the algorithm in a programming language.</li>
                <li><strong>Testing:</strong> Verifying correct operation with various inputs.</li>
                <li><strong>Debugging:</strong> Finding and fixing errors in code.</li>
                <li><strong>Refinement:</strong> Improving solution based on feedback.</li>
            </ul>
        </div>
        
        <h4>📋 Types of Errors</h4>
        <ul>
            <li><strong>Syntax Error:</strong> Violates language grammar (detected by compiler/interpreter)</li>
            <li><strong>Runtime Error:</strong> Occurs during execution (division by zero, file not found)</li>
            <li><strong>Logic Error:</strong> Runs but produces wrong results (most difficult to find)</li>
        </ul>
        
        <div class="key-point">
            <strong>💡 Key Point:</strong> Always test with boundary cases (empty input, maximum values) and unexpected inputs, not just typical cases.
        </div>
        
        <h4>📊 Testing Levels</h4>
        <ul>
            <li><strong>Unit Testing:</strong> Test individual functions/components</li>
            <li><strong>Integration Testing:</strong> Test how components work together</li>
            <li><strong>System Testing:</strong> Test entire application</li>
            <li><strong>Acceptance Testing:</strong> User validates requirements met</li>
        </ul>
        
        <h4>📈 Code Quality and Maintenance</h4>
        <ul>
            <li><strong>Documentation:</strong> Comments explaining what, how, why</li>
            <li><strong>Refactoring:</strong> Restructure code without changing behavior</li>
            <li><strong>Version Control (Git):</strong> Track changes, collaborate, revert</li>
            <li><strong>Code Review:</strong> Peer review for quality</li>
            <li><strong>Maintainability:</strong> Easy to understand, modify, extend</li>
        </ul>
        
        <h4>📋 Debugging Techniques</h4>
        <ul>
            <li><strong>Print statements:</strong> Output variable values at different points</li>
            <li><strong>Rubber duck debugging:</strong> Explain code line-by-line to someone/something</li>
            <li><strong>Debugger tool:</strong> Step through code, set breakpoints, inspect variables</li>
            <li><strong>Binary search debugging:</strong> Narrow down where bug occurs</li>
        </ul>
    `,
    
    programming_basics: `
        <h4>📝 Programming Concepts (Python/C)</h4>
        
        <div class="definition-box">
            <strong>📌 Key Definitions:</strong>
            <ul>
                <li><strong>Variable:</strong> Named storage location for data.</li>
                <li><strong>Constant:</strong> Value that cannot change.</li>
                <li><strong>Data Type:</strong> Kind of data (int, float, string, bool).</li>
                <li><strong>Array/List:</strong> Collection of elements.</li>
            </ul>
        </div>
        
        <h4>📋 Basic Syntax Comparison</h4>
        <pre style="background:#f0f0f0; padding:10px; border-radius:8px;">
// C Language
#include <stdio.h>
int main() {
    int x = 10;
    printf("%d", x);
    return 0;
}

# Python
x = 10
print(x)
        </pre>
        
        <div class="key-point">
            <strong>💡 Key Point:</strong> Python uses indentation for blocks; C uses curly braces {}. Python is interpreted; C is compiled.
        </div>
        
        <h4>📊 Variables and Data Types</h4>
        <ul>
            <li><strong>int:</strong> Integer (10, -5, 0)</li>
            <li><strong>float:</strong> Decimal (3.14, -0.5)</li>
            <li><strong>string:</strong> Text ("Hello", 'Python')</li>
            <li><strong>boolean:</strong> True/False (bool in Python, _Bool in C)</li>
            <li><strong>array/list:</strong> Collection of elements: [1, 2, 3] in Python; int arr[3] in C</li>
        </ul>
        
        <h4>📈 Control Structures</h4>
        <ul>
            <li><strong>IF-ELSE:</strong> Conditional execution</li>
            <li><strong>FOR loop:</strong> Fixed number of iterations</li>
            <li><strong>WHILE loop:</strong> Condition-controlled iteration</li>
            <li><strong>Functions:</strong> Reusable code blocks with parameters and return values</li>
        </ul>
        
        <h4>📋 Python Example: Function</h4>
        <pre style="background:#f0f0f0; padding:10px; border-radius:8px;">
def add(a, b):
    return a + b

result = add(5, 3)
print(result)  # Output: 8
        </pre>
        
        <h4>📊 Input and Output</h4>
        <ul>
            <li><strong>Python input:</strong> name = input("Enter name: ")</li>
            <li><strong>Python output:</strong> print("Hello", name)</li>
            <li><strong>C input:</strong> scanf("%d", &x)</li>
            <li><strong>C output:</strong> printf("%d", x)</li>
        </ul>
        
        <h4>📋 String Operations</h4>
        <ul>
            <li><strong>Concatenation:</strong> "Hello" + " " + "World" = "Hello World"</li>
            <li><strong>Length:</strong> len("Hello") = 5</li>
            <li><strong>Indexing:</strong> "Hello"[0] = 'H'</li>
            <li><strong>Slicing:</strong> "Hello"[1:4] = "ell"</li>
        </ul>
        
        <h4>🎯 Tips for Beginners</h4>
        <ul>
            <li>Start with simple programs, gradually increase complexity</li>
            <li>Use meaningful variable names (student_age, not x)</li>
            <li>Add comments to explain complex logic</li>
            <li>Test incrementally (run after small changes)</li>
            <li>Don't memorize - understand concepts and practice</li>
        </ul>
    `
},
"PHY 102": {
    electrostatics: `
        <h4>⚡ Electrostatics</h4>
        
        <div class="definition-box">
            <strong>📌 Key Definitions:</strong>
            <ul>
                <li><strong>Electric Charge:</strong> Fundamental property of matter (positive or negative). Unit: Coulomb (C).</li>
                <li><strong>Electric Field (E):</strong> Force per unit charge. Unit: N/C or V/m.</li>
                <li><strong>Electric Potential (V):</strong> Potential energy per unit charge. Unit: Volt (V).</li>
            </ul>
        </div>
        
        <h4>📋 Coulomb's Law</h4>
        <p>F = k q₁q₂/r², where k = 9 × 10⁹ N·m²/C². Like charges repel, unlike attract.</p>
        
        <h4>📈 Electric Field Calculations</h4>
        <ul>
            <li>Point charge: E = kQ/r² (radially outward for +Q)</li>
            <li>Uniformly charged sphere (outside): E = kQ/r² (like point charge)</li>
            <li>Uniformly charged sphere (inside): E = kQr/R³ (linear with r)</li>
            <li>Infinite line charge: E = λ/(2πε₀r)</li>
            <li>Infinite sheet: E = σ/(2ε₀) (uniform, independent of distance)</li>
            <li>Parallel plates: E = σ/ε₀ (uniform between plates)</li>
        </ul>
        
        <div class="key-point">
            <strong>💡 Key Point:</strong> The direction of E is the direction of force on a positive test charge. Field lines point from + to -.
        </div>
        
        <h4>📊 Gauss's Law</h4>
        <p>∮ E·dA = Q_enclosed/ε₀. Most useful for symmetric charge distributions (spherical, cylindrical, planar).</p>
        
        <h4>📈 Electric Potential</h4>
        <ul>
            <li>Point charge: V = kQ/r (zero at infinity)</li>
            <li>Potential difference: ΔV = -∫ E·dl</li>
            <li>Relationship: E = -dV/dr (1D) or E = -∇V (3D)</li>
            <li>Equipotential surfaces: Constant V, perpendicular to E field lines</li>
        </ul>
        
        <h4>🔋 Capacitance</h4>
        <ul>
            <li>Capacitance: C = Q/V (Farads, F)</li>
            <li>Parallel plate: C = ε₀A/d</li>
            <li>With dielectric: C = κC₀, where κ is dielectric constant (>1)</li>
            <li>Energy stored: U = ½CV² = Q²/(2C) = ½QV</li>
            <li>Series: 1/C_eq = 1/C₁ + 1/C₂ + ...</li>
            <li>Parallel: C_eq = C₁ + C₂ + ...</li>
        </ul>
        
        <h4>🔵 Electric Dipole</h4>
        <ul>
            <li>Dipole moment: p = qd (from -q to +q)</li>
            <li>Torque in E field: τ = pE sin θ</li>
            <li>Potential energy: U = -p·E = -pE cos θ</li>
            <li>Field on axis: E = 2kp/r³</li>
            <li>Field perpendicular: E = kp/r³</li>
        </ul>
    `,
    
    dc_circuits: `
        <h4>🔌 DC Circuits</h4>
        
        <div class="definition-box">
            <strong>📌 Key Definitions:</strong>
            <ul>
                <li><strong>Current (I):</strong> Flow of charge. Unit: Ampere (A). I = dQ/dt</li>
                <li><strong>Resistance (R):</strong> Opposition to current. Unit: Ohm (Ω). R = V/I</li>
                <li><strong>Resistivity (ρ):</strong> R = ρL/A</li>
                <li><strong>Power (P):</strong> Rate of energy transfer. Unit: Watt (W). P = IV = I²R = V²/R</li>
            </ul>
        </div>
        
        <h4>📋 Ohm's Law</h4>
        <p>V = IR for ohmic materials (resistance constant). Non-ohmic materials have varying resistance (diodes, transistors).</p>
        
        <div class="key-point">
            <strong>💡 Key Point:</strong> Kirchhoff's Laws are fundamental for circuit analysis:
            <ul>
                <li><strong>KCL (Current Law):</strong> Σ I_in = Σ I_out at any junction (charge conservation)</li>
                <li><strong>KVL (Voltage Law):</strong> Σ V = 0 around any closed loop (energy conservation)</li>
            </ul>
        </div>
        
        <h4>📊 Resistor Combinations</h4>
        <ul>
            <li><strong>Series:</strong> R_eq = R₁ + R₂ + ... (same current, voltage divides)</li>
            <li><strong>Parallel:</strong> 1/R_eq = 1/R₁ + 1/R₂ + ... (same voltage, current divides)</li>
        </ul>
        
        <h4>🔋 Batteries and Internal Resistance</h4>
        <ul>
            <li>EMF (ε): Open-circuit voltage</li>
            <li>Terminal voltage: V = ε - Ir (when discharging)</li>
            <li>Terminal voltage: V = ε + Ir (when charging)</li>
        </ul>
        
        <h4>📈 Circuit Analysis Methods</h4>
        <ul>
            <li><strong>Wheatstone Bridge:</strong> R₁/R₂ = R₃/Rₓ at balance (measures unknown resistance)</li>
            <li><strong>RC Circuits:</strong> Charging: V_c(t) = ε(1 - e^{-t/RC}); Discharging: V_c(t) = V₀e^{-t/RC}</li>
            <li><strong>Time constant:</strong> τ = RC (time to reach 63% of final value)</li>
        </ul>
        
        <h4>📊 Measuring Instruments</h4>
        <ul>
            <li><strong>Ammeter:</strong> Low resistance, connected in series</li>
            <li><strong>Voltmeter:</strong> High resistance, connected in parallel</li>
            <li><strong>Ohmmeter:</strong> Measures resistance directly</li>
            <li><strong>Multimeter:</strong> Combines voltage, current, resistance measurement</li>
        </ul>
    `,
    
    magnetic_fields: `
        <h4>🧲 Magnetic Fields</h4>
        
        <div class="definition-box">
            <strong>📌 Key Definitions:</strong>
            <ul>
                <li><strong>Magnetic Field (B):</strong> Region where magnetic forces act. Unit: Tesla (T) or Gauss (G). 1 T = 10,000 G.</li>
                <li><strong>Magnetic Flux (Φ_B):</strong> Φ_B = ∫ B·dA. Unit: Weber (Wb).</li>
            </ul>
        </div>
        
        <h4>📋 Lorentz Force</h4>
        <p>F = q(E + v × B). For magnetic force only: F = qvB sin θ (perpendicular to both v and B).</p>
        
        <div class="key-point">
            <strong>💡 Key Point:</strong> Right-Hand Rule for positive charge: Thumb = velocity, Fingers = B field, Palm = Force. For negative charge, force is opposite.
        </div>
        
        <h4>📈 Motion in Magnetic Fields</h4>
        <ul>
            <li><strong>Parallel motion:</strong> No force (sin 0° = 0)</li>
            <li><strong>Perpendicular motion:</strong> Circular path: r = mv/(qB)</li>
            <li><strong>Period:</strong> T = 2πm/(qB) (independent of velocity!)</li>
            <li><strong>Helical motion:</strong> Combination of parallel and perpendicular components</li>
        </ul>
        
        <h4>📊 Biot-Savart Law</h4>
        <p>dB = (μ₀/4π) (I dl × r̂)/r². μ₀ = 4π × 10⁻⁷ T·m/A (permeability of free space).</p>
        
        <h4>📈 Field Due to Current Configurations</h4>
        <ul>
            <li><strong>Straight wire:</strong> B = μ₀I/(2πr) (circles around wire)</li>
            <li><strong>Circular loop (center):</strong> B = μ₀I/(2R)</li>
            <li><strong>Circular loop (axis):</strong> B = μ₀IR²/[2(R² + x²)^{3/2}]</li>
            <li><strong>Solenoid (ideal):</strong> B = μ₀nI, where n = N/L (turns per length)</li>
            <li><strong>Toroid:</strong> B = μ₀NI/(2πr)</li>
        </ul>
        
        <h4>📋 Ampère's Law</h4>
        <p>∮ B·dl = μ₀ I_enc. Useful for symmetric current distributions (like Gauss's law for magnetism).</p>
        
        <h4>📊 Force Between Currents</h4>
        <p>F/L = μ₀ I₁I₂/(2πd). Same direction: attract; opposite: repel. Defines the ampere.</p>
        
        <h4>🔵 Magnetic Dipole</h4>
        <ul>
            <li>Magnetic moment: μ = IA (A = loop area vector)</li>
            <li>Torque: τ = μ × B → τ = μB sin θ</li>
            <li>Potential energy: U = -μ·B = -μB cos θ</li>
            <li>Minimum energy when μ aligns with B</li>
        </ul>
        
        <h4>📈 Magnetic Materials</h4>
        <ul>
            <li><strong>Diamagnetic:</strong> Weakly repelled (χ negative). Examples: copper, water, bismuth</li>
            <li><strong>Paramagnetic:</strong> Weakly attracted (χ small positive). Examples: aluminum, platinum</li>
            <li><strong>Ferromagnetic:</strong> Strongly attracted (χ large positive). Examples: iron, nickel, cobalt</li>
            <li><strong>Curie temperature:</strong> Above which ferromagnets become paramagnetic</li>
            <li><strong>Hysteresis:</strong> Lag between magnetization and applied field (energy loss)</li>
            <li><strong>Magnetic domains:</strong> Regions of aligned magnetic moments</li>
        </ul>
    `,
    
    em_induction: `
        <h4>⚡ Electromagnetic Induction</h4>
        
        <div class="definition-box">
            <strong>📌 Key Definition:</strong> Electromagnetic induction is the production of emf (voltage) due to changing magnetic flux.
        </div>
        
        <h4>📋 Faraday's Law</h4>
        <p>ε = -dΦ_B/dt. The induced emf equals the negative rate of change of magnetic flux.</p>
        
        <h4>📈 Lenz's Law</h4>
        <p>The induced current opposes the change that produced it. (This gives the negative sign in Faraday's law.)</p>
        
        <div class="key-point">
            <strong>💡 Key Point:</strong> Lenz's Law application: If magnetic flux increases, induced current creates opposing field. If flux decreases, induced current tries to maintain it.
        </div>
        
        <h4>📊 Motional emf</h4>
        <ul>
            <li>Conductor moving in B field: ε = Blv (perpendicular motion)</li>
            <li>General case: ε = Blv sin θ</li>
            <li>Power generated: P = ε²/R = B²l²v²/R</li>
        </ul>
        
        <h4>🔋 Inductance</h4>
        <ul>
            <li><strong>Self-inductance (L):</strong> ε = -L dI/dt, Φ_B = LI. Unit: Henry (H)</li>
            <li><strong>Solenoid inductance:</strong> L = μ₀N²A/l = μ₀n²Al</li>
            <li><strong>Energy in inductor:</strong> U = ½LI² (magnetic energy)</li>
            <li><strong>Mutual inductance (M):</strong> ε₂ = -M dI₁/dt, ε₁ = -M dI₂/dt</li>
        </ul>
        
        <h4>📈 RL Circuits</h4>
        <ul>
            <li>Current growth: I(t) = (ε/R)(1 - e^{-Rt/L})</li>
            <li>Current decay: I(t) = I₀e^{-Rt/L}</li>
            <li>Time constant: τ = L/R</li>
        </ul>
        
        <h4>📊 Transformers</h4>
        <ul>
            <li>Voltage ratio: V₁/V₂ = N₁/N₂</li>
            <li>Current ratio: I₁/I₂ = N₂/N₁ (power conserved: V₁I₁ = V₂I₂)</li>
            <li><strong>Step-up:</strong> N₂ > N₁ (increases voltage, decreases current)</li>
            <li><strong>Step-down:</strong> N₂ < N₁ (decreases voltage, increases current)</li>
            <li>Efficiency: η = P_out/P_in × 100% (ideal = 100%)</li>
            <li>Eddy currents: Laminating core reduces losses</li>
        </ul>
        
        <h4>⚙️ Generators and Motors</h4>
        <ul>
            <li><strong>Generator:</strong> Mechanical → Electrical. Rotating coil in B field produces AC.</li>
            <li>Peak emf: ε₀ = NBAω</li>
            <li>RMS values: V_rms = V_peak/√2, I_rms = I_peak/√2</li>
            <li><strong>Motor:</strong> Electrical → Mechanical. Current in B field produces torque.</li>
            <li>Back emf: Opposes applied voltage, limits current</li>
        </ul>
        
        <h4>📋 Maxwell's Equations (Integral Form)</h4>
        <ul>
            <li><strong>Gauss's Law (Electric):</strong> ∮ E·dA = Q/ε₀</li>
            <li><strong>Gauss's Law (Magnetic):</strong> ∮ B·dA = 0 (no magnetic monopoles)</li>
            <li><strong>Faraday's Law:</strong> ∮ E·dl = -dΦ_B/dt</li>
            <li><strong>Ampère-Maxwell Law:</strong> ∮ B·dl = μ₀I + μ₀ε₀ dΦ_E/dt (displacement current)</li>
        </ul>
    `,
    
    ac_circuits: `
        <h4>🔄 AC Circuits and Electromagnetic Waves</h4>
        
        <div class="definition-box">
            <strong>📌 Key Definitions:</strong>
            <ul>
                <li><strong>AC (Alternating Current):</strong> V(t) = V₀ sin(ωt) or cos(ωt)</li>
                <li><strong>ω = 2πf:</strong> Angular frequency, f = frequency (Hz)</li>
                <li><strong>RMS:</strong> V_rms = V_peak/√2 ≈ 0.707 V_peak (heating equivalent of DC)</li>
            </ul>
        </div>
        
        <h4>📋 Phase Relationships</h4>
        <ul>
            <li><strong>Resistor:</strong> V and I in phase (θ = 0°)</li>
            <li><strong>Inductor:</strong> V leads I by 90° (ELI: EMF leads I)</li>
            <li><strong>Capacitor:</strong> V lags I by 90° (ICE: I leads EMF)</li>
        </ul>
        
        <h4>📈 Reactance and Impedance</h4>
        <ul>
            <li><strong>Inductive reactance:</strong> X_L = ωL = 2πfL (increases with f)</li>
            <li><strong>Capacitive reactance:</strong> X_C = 1/(ωC) = 1/(2πfC) (decreases with f)</li>
            <li><strong>Impedance (RLC series):</strong> Z = √[R² + (X_L - X_C)²]</li>
            <li><strong>Phase angle:</strong> tan φ = (X_L - X_C)/R</li>
        </ul>
        
        <div class="key-point">
            <strong>💡 Key Point:</strong> At resonance: X_L = X_C, Z = R (minimum), I = V/R (maximum), φ = 0°. Resonant frequency: f₀ = 1/(2π√(LC))
        </div>
        
        <h4>📊 AC Power</h4>
        <ul>
            <li>Instantaneous power: p(t) = v(t)i(t)</li>
            <li>Average power: P_avg = V_rms I_rms cos φ = I_rms²R</li>
            <li><strong>Power factor:</strong> pf = cos φ = R/Z</li>
            <li>Unity power factor (cos φ = 1) means purely resistive (maximum power transfer)</li>
            <li>Low power factor wastes power; corrected using capacitors</li>
        </ul>
        
        <h4>📈 Electromagnetic Waves</h4>
        <ul>
            <li>Produced by accelerating charges (oscillating electrons)</li>
            <li><strong>Speed of light:</strong> c = 1/√(μ₀ε₀) ≈ 3 × 10⁸ m/s</li>
            <li>Transverse waves: E ⟂ B ⟂ propagation direction</li>
            <li>E and B in phase: E = cB</li>
        </ul>
        
        <h4>📊 Electromagnetic Spectrum (increasing λ)</h4>
        <ul>
            <li><strong>Gamma rays:</strong> λ < 0.01 nm (nuclear, most energetic)</li>
            <li><strong>X-rays:</strong> 0.01 - 10 nm (medical imaging)</li>
            <li><strong>UV:</strong> 10 - 400 nm (sunburn, sterilization)</li>
            <li><strong>Visible:</strong> 400 - 700 nm (VIBGYOR: 400 violet, 700 red)</li>
            <li><strong>Infrared:</strong> 700 nm - 1 mm (heat, remote controls)</li>
            <li><strong>Microwave:</strong> 1 mm - 1 m (ovens, radar, cell phones)</li>
            <li><strong>Radio:</strong> > 1 m (broadcasting, communication)</li>
        </ul>
        
        <h4>📋 EM Wave Properties</h4>
        <ul>
            <li><strong>Intensity (I):</strong> Power per area. I = ½ cε₀E₀² = cB₀²/(2μ₀)</li>
            <li><strong>Poynting vector:</strong> S = (1/μ₀) E × B (energy flow direction and magnitude)</li>
            <li><strong>Radiation pressure:</strong> P = I/c (absorber), P = 2I/c (reflector)</li>
        </ul>
    `
},
    };

    // ==================== PROGRESS TRACKING ====================
    let progressData = JSON.parse(localStorage.getItem('cbt_progress')) || {};

    function saveProgress(courseName, topicId, score, total) {
        if (!progressData[courseName]) progressData[courseName] = {};
        const completed = total > 0 && score === total;
        const percentage = total > 0 ? (score / total) * 100 : 0;
        progressData[courseName][topicId] = { 
            completed,
            lastScore: percentage,
            date: new Date().toISOString(),
            correct: score,
            total: total
        };
        localStorage.setItem('cbt_progress', JSON.stringify(progressData));
        console.log(`Progress saved: ${courseName} - ${topicId}: ${score}/${total} (${percentage}%)`);
    }

    function isTopicCompleted(courseName, topicId) {
        return progressData[courseName]?.[topicId]?.completed || false;
    }

    function getCourseProgress(courseName) {
        const topics = COURSE_TOPICS[courseName]?.topics || [];
        const completed = topics.filter(t => isTopicCompleted(courseName, t.id)).length;
        return { completed, total: topics.length };
    }

    // ==================== NOTES PAGE FUNCTIONS ====================
    let currentNotesCourse = null;

    function renderNotesPage() {
        const container = document.getElementById('courseSelectorNotes');
        const secondSemCourses = Object.values(COURSES_DB).filter(c => c.semester === 'second' && !c.locked);
        
        currentNotesCourse = null;
        container.innerHTML = '';
        
        const backButton = document.createElement('div');
        backButton.className = 'notes-header-bar';
        backButton.innerHTML = '<button class="notes-back-home" onclick="showPage(\'home\')"><span>←</span> Back to Home</button>';
        container.appendChild(backButton);
        
        const hero = document.createElement('div');
        hero.className = 'notes-hero';
        hero.innerHTML = '<h2>Study Notes</h2><p>Select a course to access simplified notes for each topic</p>';
        container.appendChild(hero);
        
        const coursesGrid = document.createElement('div');
        coursesGrid.className = 'notes-courses-grid';
        coursesGrid.id = 'notesCoursesGrid';
        
        secondSemCourses.forEach(course => {
            const card = document.createElement('div');
            card.className = 'notes-course-card';
            card.setAttribute('data-course', course.title);
            card.innerHTML = `
                <div class="notes-course-icon">${course.icon}</div>
                <div class="notes-course-info">
                    <div class="notes-course-title">${course.title}</div>
                    <div class="notes-course-level">${course.level}</div>
                </div>
                <div class="notes-course-arrow">→</div>
            `;
            card.onclick = () => {
                showNotesTopicsWithLoading(course.title);
            };
            coursesGrid.appendChild(card);
        });
        
        container.appendChild(coursesGrid);
        
        const topicsContainer = document.createElement('div');
        topicsContainer.id = 'notesTopicsContainer';
        topicsContainer.style.display = 'none';
        container.appendChild(topicsContainer);
    }

    function showNotesTopicsWithLoading(courseTitle) {
        const container = document.getElementById('courseSelectorNotes');
        const coursesGrid = document.getElementById('notesCoursesGrid');
        const heroSection = container.querySelector('.notes-hero');
        const backHomeButton = container.querySelector('.notes-header-bar');
        
        if (coursesGrid) coursesGrid.style.display = 'none';
        if (heroSection) heroSection.style.display = 'none';
        if (backHomeButton) backHomeButton.style.display = 'none';
        
        const loadingDiv = document.createElement('div');
        loadingDiv.className = 'notes-loading';
        loadingDiv.id = 'notesLoading';
        loadingDiv.innerHTML = `
            <div class="spinner"></div>
            <p>Loading notes for ${courseTitle}...</p>
        `;
        container.appendChild(loadingDiv);
        
        setTimeout(() => {
            loadingDiv.remove();
            showNotesTopics(courseTitle);
        }, 2000);
    }

    function showNotesTopics(courseTitle) {
        const topicsData = COURSE_TOPICS[courseTitle];
        const courseNotes = COURSE_NOTES[courseTitle];
        
        if (!topicsData) {
            alert('No topics available for this course yet.');
            backToNotesCourses();
            return;
        }
        
        currentNotesCourse = courseTitle;
        
        const container = document.getElementById('courseSelectorNotes');
        const topicsContainer = document.getElementById('notesTopicsContainer');
        
        topicsContainer.style.display = 'block';
        topicsContainer.innerHTML = `
            <div class="notes-header-bar">
                <button class="notes-back-btn" onclick="backToNotesCourses()">
                    <span>←</span> Back to Courses
                </button>
            </div>
            <div class="notes-course-banner-simple">
                <div class="notes-banner-icon-simple">${COURSES_DB[courseTitle]?.icon || '📚'}</div>
                <div class="notes-banner-info-simple">
                    <h1>${courseTitle}</h1>
                    <p>${COURSES_DB[courseTitle]?.description || ''}</p>
                </div>
            </div>
            <div class="notes-topics-grid">
                ${topicsData.topics.map((topic, index) => `
                    <div class="notes-topic-card">
                        <div class="notes-topic-header" onclick="toggleNotesTopic(this)">
                            <div class="notes-topic-left">
                                <span class="notes-topic-number">${String(index + 1).padStart(2, '0')}</span>
                                <span class="notes-topic-name">${topic.name}</span>
                            </div>
                            <div class="notes-topic-right">
                                <span class="notes-topic-toggle">▼</span>
                            </div>
                        </div>
                        <div class="notes-topic-content">
                            ${courseNotes?.[topic.id] || '<p class="notes-coming-soon">Notes coming soon for this topic.</p>'}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        
        forceScrollToTop();
    }

    function backToNotesCourses() {
        const container = document.getElementById('courseSelectorNotes');
        const coursesGrid = document.getElementById('notesCoursesGrid');
        const topicsContainer = document.getElementById('notesTopicsContainer');
        const heroSection = container.querySelector('.notes-hero');
        const backHomeButton = container.querySelector('.notes-header-bar');
        
        if (coursesGrid) coursesGrid.style.display = 'grid';
        if (heroSection) heroSection.style.display = 'block';
        if (backHomeButton) backHomeButton.style.display = 'block';
        
        if (topicsContainer) {
            topicsContainer.style.display = 'none';
            topicsContainer.innerHTML = '';
        }
        
        currentNotesCourse = null;
        forceScrollToTop();
    }

    window.toggleNotesTopic = function(header) {
        header.classList.toggle('expanded');
        const content = header.nextElementSibling;
        content.classList.toggle('show');
    };

    window.backToNotesCourses = backToNotesCourses;

    // ==================== TOPICS PAGE WITH LOADING & SCROLL FIX ====================
    window.showTopics = async function(courseTitle) {
        const courseMeta = COURSES_DB[courseTitle];
        if (courseMeta.locked) { alert(`${courseTitle} is currently locked and will be available soon.`); return; }
        
        // Force scroll to top BEFORE anything loads
        forceScrollToTop();
        
        currentCourse = courseTitle;
        currentCourseKey = courseMeta.bankKey;
        
        const topicPage = document.getElementById('topicPage');
        topicPage.innerHTML = `
            <div class="notes-loading" style="min-height: 300px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                <div class="spinner"></div>
                <p style="margin-top: 20px; color: #64748b;">Loading ${courseTitle} topics...</p>
            </div>
        `;
        topicPage.style.display = 'block';
        document.getElementById('coursePage').style.display = 'none';
        const footer = document.querySelector('.telegram-cta');
        if (footer) footer.style.display = 'none';
        
        const loaded = await loadQuestionBank(courseTitle);
        if (!loaded) { 
            alert(`Failed to load questions for ${courseTitle}.`);
            document.getElementById('coursePage').style.display = 'block';
            topicPage.style.display = 'none';
            if (footer) footer.style.display = 'block';
            return; 
        }
        
        setTimeout(() => {
            renderTopicsPage(courseTitle);
        }, 2000);
    };
    
    function renderTopicsPage(courseTitle) {
        const topicsData = COURSE_TOPICS[courseTitle];
        if (!topicsData) { 
            startExamWithTopics(courseTitle, ['all']); 
            return; 
        }
        
        const totalQ = window.questionBank[currentCourseKey]?.length || 0;
        const progress = getCourseProgress(courseTitle);
        
        const topicPage = document.getElementById('topicPage');
        topicPage.innerHTML = `
            <button class="back-btn" id="backToCoursesFromTopic">← Back to Courses</button>
            <div class="topic-header">
                <h2>
                    <span id="topicCourseIcon">${topicsData.icon}</span>
                    <span id="topicCourseName">${courseTitle}</span>
                </h2>
                <div class="topic-stats">
                    <div><span id="totalQuestionsStat">${totalQ}</span> total questions</div>
                    <div><span id="completedTopicsStat">${progress.completed}</span>/<span id="totalTopicsStat">${progress.total}</span> topics mastered</div>
                </div>
            </div>
            <div class="topics-grid" id="topicsGrid"></div>
            <div class="topic-actions">
                <button class="topic-btn topic-btn-secondary" id="selectAllTopics">Select All Topics</button>
                <button class="topic-btn topic-btn-primary" id="startWithSelectedTopics">Start Exam</button>
            </div>
        `;
        
        const grid = document.getElementById('topicsGrid');
        grid.innerHTML = '';
        
        const allCard = document.createElement('div');
        allCard.className = 'topic-card all-topics-card';
        allCard.setAttribute('data-topic-id', 'all');
        allCard.onclick = () => toggleTopicSelection('all');
        allCard.innerHTML = `
            <div class="topic-name">All Topics <span class="topic-badge">Full Exam</span></div>
            <div class="topic-desc">Complete all topics together - simulates a full course exam</div>
            <div class="topic-meta"><span class="topic-qcount">${totalQ} questions</span></div>
        `;
        grid.appendChild(allCard);
        
        topicsData.topics.forEach(topic => {
            const isCompleted = isTopicCompleted(courseTitle, topic.id);
            const card = document.createElement('div');
            card.className = `topic-card ${isCompleted ? 'completed' : ''}`;
            card.setAttribute('data-topic-id', topic.id);
            card.onclick = () => toggleTopicSelection(topic.id);
            card.innerHTML = `
                <div class="topic-name">${topic.name}</div>
                <div class="topic-desc">${topic.description}</div>
                <div class="topic-meta"><span class="topic-qcount">${topic.qCount} questions</span></div>
            `;
            grid.appendChild(card);
        });
        
        currentTopics = ['all'];
        updateTopicSelectionUI();
        
        document.getElementById('backToCoursesFromTopic').onclick = () => {
            document.getElementById('topicPage').style.display = 'none';
            document.getElementById('coursePage').style.display = 'block';
            const footer = document.querySelector('.telegram-cta');
            if (footer) footer.style.display = 'block';
            forceScrollToTop();
        };
        
        document.getElementById('selectAllTopics').onclick = () => {
            currentTopics = ['all'];
            updateTopicSelectionUI();
        };
        
        document.getElementById('startWithSelectedTopics').onclick = () => {
            startExamWithTopics();
        };
        
        // STRONG SCROLL TO TOP FIX
        forceScrollToTop();
        
        // Extra: ensure body doesn't have any scroll offset
        setTimeout(() => {
            forceScrollToTop();
        }, 50);
    }
    
    function toggleTopicSelection(topicId) {
        if (topicId === 'all') {
            currentTopics = ['all'];
        } else {
            // Exclusive single-select: clicking a topic selects ONLY that topic.
            // Clicking the already-selected topic resets to All.
            if (currentTopics.length === 1 && currentTopics[0] === topicId) {
                currentTopics = ['all'];
            } else {
                currentTopics = [topicId];
            }
        }
        updateTopicSelectionUI();
    }
    
    function updateTopicSelectionUI() {
        document.querySelectorAll('.topic-card').forEach(card => {
            const topicId = card.getAttribute('data-topic-id');
            if ((currentTopics.includes('all') && topicId === 'all') || (!currentTopics.includes('all') && currentTopics.includes(topicId))) {
                card.classList.add('selected');
            } else {
                card.classList.remove('selected');
            }
        });
    }

    // ==================== RENDER COURSES ====================
    function renderCourses() {
        const grid = document.getElementById('coursesGrid');
        if (!grid) return;
        
        const semesterCourses = Object.values(COURSES_DB).filter(c => c.semester === currentSemester);
        document.getElementById('semesterTitle').innerText = currentSemester === "first" ? "First Semester" : "Second Semester";
        document.getElementById('activeSemesterBadge').innerText = currentSemester === "first" ? "1st Semester" : "2nd Semester";
        document.getElementById('coursesCountInfo').innerText = `${semesterCourses.length} courses available`;
        
        grid.innerHTML = '';
        
        semesterCourses.forEach(course => {
            const progress = !course.locked ? getCourseProgress(course.title) : null;
            const progressText = progress ? `${progress.completed}/${progress.total} topics completed` : '';
            
            const card = document.createElement('div');
            card.className = `course-card-modern ${course.locked ? 'locked' : ''}`;
            if (!course.locked) {
                card.setAttribute('onclick', `window.showTopics('${course.title}')`);
            } else {
                card.setAttribute('onclick', `event.stopPropagation(); alert("${course.title} is currently locked and will be available soon.")`);
            }
            
            card.innerHTML = `
                <div class="course-card-header">
                    <div class="course-icon-wrapper" style="background: ${course.iconGradient};"><span class="course-icon">${course.icon}</span></div>
                    <div class="course-info"><h3 class="course-name">${course.title} ${course.locked ? '<span class="coming-soon-tag">Coming Soon</span>' : ''}</h3><span class="course-level">${course.level}</span></div>
                </div>
                <p class="course-description">${course.description}</p>
                <div class="course-meta"><span class="meta-item">${course.qCount} Questions</span></div>
                ${!course.locked && progressText ? `<div style="font-size:12px; color:#10b981; margin-bottom:12px;">${progressText}</div>` : ''}
                <button class="start-btn-modern ${course.locked ? 'disabled' : ''}" ${course.locked ? 'disabled' : ''}><span>${course.locked ? 'Unlock Soon' : 'Select Topics'}</span><span class="arrow">→</span></button>
            `;
            grid.appendChild(card);
        });
    }

    // ==================== GLOBAL STATE ====================
    let currentSemester = "second";
    let currentCourse = "";
    let currentCourseKey = "";
    let currentTopics = [];
    let currentQuestions = [];
    let currentQuestionIndex = 0;
    let answers = {};
    let timerInterval;
    let instructionCountdownTimer;
    let timeRemaining = 1200;
    let initialTime = 1200;
    let isReviewMode = false;
    let selectedQuestionCount = 'all';
    let selectedTimerMinutes = 20;
    let currentExamQuestions = [];
    let isExamActive = false;
    let isPracticeMode = false;

    window.questionBank = window.questionBank || {};

    function startExamWithTopics() {
        const allQuestions = window.questionBank[currentCourseKey];
        if (!allQuestions) { alert('No questions available'); return; }
        
        if (currentTopics.includes('all')) {
            currentQuestions = allQuestions.map((question, index) => ({ ...question, originalIndex: index }));
        } else {
            const topicsData = COURSE_TOPICS[currentCourse];
            currentQuestions = [];
            currentTopics.forEach(topicId => {
                const topic = topicsData?.topics.find(t => t.id === topicId);
                if (topic) {
                    const topicQuestions = allQuestions.slice(topic.startIdx, topic.endIdx).map((question, index) => ({
                        ...question,
                        originalIndex: topic.startIdx + index
                    }));
                    currentQuestions.push(...topicQuestions);
                }
            });
        }
        
        if (currentQuestions.length === 0) {
            alert('No questions available for selected topics');
            return;
        }
        
        const topicNames = currentTopics.includes('all') ? 'All Topics' : currentTopics.map(id => {
            const topic = COURSE_TOPICS[currentCourse]?.topics.find(t => t.id === id);
            return topic?.name || id;
        }).join(', ');
        
        document.getElementById('selectedCourseIcon').innerText = COURSE_TOPICS[currentCourse]?.icon || 'Course';
        document.getElementById('selectedCourseName').innerText = currentCourse;
        document.getElementById('selectedTopicInfo').innerHTML = `Selected: ${topicNames} <span style="color:#4F6809;">(${currentQuestions.length} questions)</span>`;
        
        // Show mode selection modal instead of jumping straight to question count
        document.getElementById('modeModalIcon').innerText = COURSE_TOPICS[currentCourse]?.icon || '📚';
        document.getElementById('modeModalCourse').innerText = currentCourse;
        document.getElementById('modeModalTopic').innerText = topicNames + ` (${currentQuestions.length} questions available)`;
        document.getElementById('topicPage').style.display = 'none';
        document.getElementById('modeSelectModal').style.display = 'flex';
        forceScrollToTop();
    }

    window.selectExamMode = function() {
        isPracticeMode = false;
        document.getElementById('modeSelectModal').style.display = 'none';
        document.getElementById('questionCountPage').style.display = 'block';
        forceScrollToTop();
    };

    window.selectPracticeMode = function() {
        isPracticeMode = true;
        document.getElementById('modeSelectModal').style.display = 'none';
        // Skip question count / timer page — load ALL questions immediately
        currentQuestionIndex = 0;
        answers = {};
        isReviewMode = false;
        isExamActive = true;
        initialTime = 0;
        timeRemaining = 0;
        const _letters = ['A','B','C','D'];
        let qs = shuffleArray([...currentQuestions]);
        currentExamQuestions = qs.map(q => {
            const correctLetter = (typeof q.answer === 'number') ? _letters[q.answer] : q.answer;
            const correctText = q.options[_letters.indexOf(correctLetter)];
            const shuffledOpts = shuffleArray([...q.options]);
            const newCorrectLetter = _letters[shuffledOpts.indexOf(correctText)];
            return { ...q, options: shuffledOpts, answer: newCorrectLetter };
        });
        window.startExamFromInstructions();
    };

    window.closeModeModal = function() {
        document.getElementById('modeSelectModal').style.display = 'none';
        // Reset selection so the user can pick again cleanly
        currentTopics = ['all'];
        updateTopicSelectionUI();
        document.getElementById('topicPage').style.display = 'block';
        forceScrollToTop();
    };

    async function loadQuestionBank(courseTitle) {
        const course = COURSES_DB[courseTitle];
        if (!course || !course.file) return false;
        if (window.questionBank[course.bankKey]?.length > 0) return true;
        
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = course.file;
            script.onload = () => {
                setTimeout(() => {
                    if (window.questionBank[course.bankKey]) resolve(true);
                    else resolve(false);
                }, 300);
            };
            script.onerror = () => resolve(false);
            document.head.appendChild(script);
        });
    }
    
    window.setQuestionCount = function(count) {
        selectedQuestionCount = count;
        currentQuestionIndex = 0;
        answers = {};
        isReviewMode = false;
        isExamActive = true;
        window.setExamTimer(selectedTimerMinutes);
        
        // apply accelerated timer mapping
        const effective = getEffectiveMinutes(selectedTimerMinutes);
        const baseSeconds = Math.round(effective * 60);
        initialTime = baseSeconds;
        timeRemaining = initialTime;
        
        let questions = [...currentQuestions];
        questions = shuffleArray(questions);
        const total = count === 'all' ? questions.length : Math.min(parseInt(count), questions.length);
        const _letters = ['A', 'B', 'C', 'D'];
        currentExamQuestions = questions.slice(0, total).map(q => {
            const correctLetter = (typeof q.answer === 'number') ? _letters[q.answer] : q.answer;
            const correctText = q.options[_letters.indexOf(correctLetter)];
            const shuffledOpts = shuffleArray([...q.options]);
            const newCorrectLetter = _letters[shuffledOpts.indexOf(correctText)];
            return { ...q, options: shuffledOpts, answer: newCorrectLetter };
        });
        
        // Start exam immediately (skip instructions) when user picks question count
        document.getElementById('questionCountPage').style.display = 'none';
        // prepare loading and start
        window.startExamFromInstructions();
    };
    
    window.startExamFromInstructions = function() {
        const loadingScreen = document.getElementById('loadingScreen');
        const loadingMessage = document.getElementById('loadingMessage');
        if (loadingMessage) loadingMessage.textContent = `Preparing ${currentCourse} exam...`;
        if (loadingScreen) loadingScreen.style.display = 'flex';
        
        document.getElementById('examInstructionsPage').style.display = 'none';
        
        setTimeout(() => {
            if (loadingScreen) loadingScreen.style.display = 'none';
            document.getElementById('examPage').style.display = 'block';
            document.getElementById('examTitle').innerText = currentCourse;
            document.getElementById('totalQuestionsDisplay').innerText = currentExamQuestions.length;
            
            const submitBtn = document.querySelector('button[onclick=\"submitExam()\"]');
            if (submitBtn) {
                submitBtn.style.display = 'block';
                const span = submitBtn.querySelector('span');
                if (span) span.textContent = isPracticeMode ? 'End Practice' : 'Submit';
            }
            const practiceBadge = document.getElementById('practiceModeBadge');
            if (practiceBadge) practiceBadge.style.display = isPracticeMode ? 'inline-flex' : 'none';
            
            const reviewBackBtn = document.getElementById('reviewBackBtn');
            if (reviewBackBtn) reviewBackBtn.style.display = 'none';
            const reviewHeaderHomeBtn = document.getElementById('reviewHeaderHomeBtn');
            if (reviewHeaderHomeBtn) reviewHeaderHomeBtn.style.display = 'none';
            
            blockBodyScroll();
            loadQuestion();
            const timerContainer = document.getElementById('timerContainer');
            if (isPracticeMode) {
                if (timerContainer) timerContainer.style.display = 'none';
            } else {
                if (timerContainer) timerContainer.style.display = '';
                startTimer();
            }
            updateProgressBar();
        }, 1200);
    };
    
    function updateProgressBar() {
        const total = getTotalQuestions();
        const answered = Object.keys(answers).length;
        const percentage = total > 0 ? (answered / total) * 100 : 0;
        const progressBar = document.getElementById('examProgressBar');
        if (progressBar) progressBar.style.width = percentage + '%';
    }
    
    window.setExamTimer = function(minutes) {
        selectedTimerMinutes = minutes;
        document.querySelectorAll('.timer-btn').forEach(btn => {
            const buttonMinutes = parseInt(btn.dataset.minutes, 10);
            btn.classList.toggle('active', buttonMinutes === minutes);
        });
    };

    function getEffectiveMinutes(minutes) {
        // accelerated mapping: chosen -> effective (fast) minutes
        const map = {5: 2.5, 10: 8, 20: 16, 30: 25};
        return map[minutes] || minutes;
    }
    
    function shuffleArray(arr) { const array = [...arr]; for (let i = array.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [array[i], array[j]] = [array[j], array[i]]; } return array; }
    
    function getTotalQuestions() { return currentExamQuestions?.length || 0; }
    
    function startTimer() {
        clearInterval(timerInterval);
        timerInterval = setInterval(() => {
            if (timeRemaining <= 0) { clearInterval(timerInterval); finalizeExam(); return; }
            timeRemaining--;
            const minutes = Math.floor(timeRemaining / 60);
            const seconds = timeRemaining % 60;
            const timerDisplay = document.getElementById('timer');
            timerDisplay.innerText = `${minutes}:${seconds.toString().padStart(2, '0')}`;
            
            // Add warning colors based on time remaining
            if (timeRemaining <= 60) {
                timerDisplay.classList.add('danger');
                timerDisplay.classList.remove('warning');
            } else if (timeRemaining <= 300) {
                timerDisplay.classList.add('warning');
                timerDisplay.classList.remove('danger');
            } else {
                timerDisplay.classList.remove('warning', 'danger');
            }
            
            const answered = Object.keys(answers).length;
            document.getElementById('scoreDisplay').innerText = `${answered}/${getTotalQuestions()}`;
        }, 1000);
    }
    
    document.addEventListener('keydown', function(event) {
        const examPage = document.getElementById('examPage');
        if (!examPage || examPage.style.display !== 'block') return;
        if (event.ctrlKey || event.altKey || event.metaKey) return;
        const key = event.key;
        const keyLower = key.toLowerCase();
        // Submit modal: Y = confirm, N / Escape = cancel
        const submitModal = document.getElementById('submitModal');
        if (submitModal && submitModal.style.display === 'flex') {
            if (keyLower === 'y') {
                document.getElementById('confirmSubmit').click();
                event.preventDefault();
            } else if (keyLower === 'n' || key === 'Escape') {
                document.getElementById('cancelSubmit').click();
                event.preventDefault();
            }
            return;
        }
        // Answer selection A / B / C / D
        if (['a', 'b', 'c', 'd'].includes(keyLower)) {
            selectOptionLetter(keyLower.toUpperCase());
            event.preventDefault();
            return;
        }
        // Navigation: arrow keys (← →), N = next, P = previous
        if (key === 'ArrowRight' || keyLower === 'n') {
            nextQuestion(event);
            event.preventDefault();
            return;
        }
        if (key === 'ArrowLeft' || keyLower === 'p') {
            prevQuestion(event);
            event.preventDefault();
            return;
        }
        // S = open submit modal
        if (keyLower === 's') {
            submitExam();
            event.preventDefault();
            return;
        }
    });
    
    function saveAnswer() {
        if (isPracticeMode) return; // answers stored immediately on click in practice mode
        const selected = document.querySelector('input[name="answer"]:checked');
        if (selected) answers[currentQuestionIndex + 1] = selected.value;
        updateProgressBar();
    }

    function selectOptionLetter(letter) {
        if (isReviewMode || isPracticeMode) return;
        const option = document.querySelector(`#optionsContainer input[name="answer"][value="${letter}"]`);
        if (!option) return;
        option.checked = true;
        answers[currentQuestionIndex + 1] = letter;
        updateProgressBar();
    }
    
    function loadQuestion() {
        const questions = currentExamQuestions;
        if (!questions || currentQuestionIndex >= questions.length) { finalizeExam(); return; }

        // Scroll exam container back to top whenever a new question loads
        const examPageEl = document.getElementById('examPage');
        if (examPageEl) examPageEl.scrollTop = 0;

        const q = questions[currentQuestionIndex];
        document.getElementById('currentQ').innerText = currentQuestionIndex + 1;
        document.getElementById('qNum').innerText = currentQuestionIndex + 1;
        document.getElementById('questionText').innerHTML = q.question;

        const container = document.getElementById('optionsContainer');
        container.innerHTML = '';
        const letters = ['A', 'B', 'C', 'D'];

        // Normalise answer: support legacy integer format (0→A, 1→B, 2→C, 3→D)
        const correctAnswer = (typeof q.answer === 'number') ? letters[q.answer] : q.answer;

        if (isPracticeMode) {
            const userAns = answers[currentQuestionIndex + 1];
            const alreadyAnswered = !!userAns;
            q.options.forEach((opt, idx) => {
                const letter = letters[idx];
                const div = document.createElement('div');
                div.className = 'option practice-option';
                div.dataset.letter = letter;
                if (alreadyAnswered) {
                    div.classList.add('practice-locked');
                    if (letter === correctAnswer) div.classList.add('correct');
                    if (userAns === letter && letter !== correctAnswer) div.classList.add('wrong');
                    const icon = letter === correctAnswer
                        ? '<span class="opt-result-icon correct-icon">✓</span>'
                        : (userAns === letter ? '<span class="opt-result-icon wrong-icon">✗</span>' : '');
                    div.innerHTML = `<span class="opt-letter-circle">${letter}</span><span class="opt-text">${opt}</span>${icon}`;
                } else {
                    div.innerHTML = `<span class="opt-letter-circle">${letter}</span><span class="opt-text">${opt}</span>`;
                    div.addEventListener('click', () => practiceSelectAnswer(letter, correctAnswer, q));
                }
                container.appendChild(div);
            });
            const expBox = document.getElementById('explanationBox');
            const expContent = document.getElementById('explanationContent');
            if (alreadyAnswered && q.explanation) {
                expBox.style.display = 'block';
                expContent.innerHTML = formatPracticeExplanation(q.explanation, userAns === correctAnswer);
                expBox.classList.remove('correct', 'wrong');
                expBox.classList.add(userAns === correctAnswer ? 'correct' : 'wrong');
            } else {
                expBox.style.display = 'none';
            }
        } else {
            q.options.forEach((opt, idx) => {
                const letter = letters[idx];
                const userAns = answers[currentQuestionIndex + 1];
                const lbl = document.createElement('label');
                lbl.className = 'option';
                if (isReviewMode) {
                    if (letter === correctAnswer) lbl.classList.add('correct');
                    if (userAns === letter && userAns !== correctAnswer) lbl.classList.add('wrong');
                    if (userAns === letter) lbl.classList.add('user-selected');
                }
                lbl.innerHTML = `<input type="radio" name="answer" value="${letter}" ${isReviewMode ? 'disabled' : ''} ${userAns === letter ? 'checked' : ''}><span>${letter}. ${opt}</span>`;
                container.appendChild(lbl);
            });
            const expBox = document.getElementById('explanationBox');
            const expContent = document.getElementById('explanationContent');
            if (isReviewMode && q.explanation) {
                expBox.style.display = 'block';
                expContent.innerText = q.explanation;
                const userAns = answers[currentQuestionIndex + 1];
                expBox.classList.remove('correct', 'wrong');
                if (userAns === correctAnswer) expBox.classList.add('correct');
                else expBox.classList.add('wrong');
            } else {
                expBox.style.display = 'none';
            }
        }

        updateQuestionGrid();
    }
    
    function practiceSelectAnswer(clickedLetter, correctAnswer, currentQ) {
        if (answers[currentQuestionIndex + 1]) return; // already answered, ignore
        answers[currentQuestionIndex + 1] = clickedLetter;
        updateProgressBar();
        updateQuestionGrid();

        // Re-render options in revealed/locked state
        const container = document.getElementById('optionsContainer');
        container.innerHTML = '';
        currentQ.options.forEach((opt, idx) => {
            const letter = ['A','B','C','D'][idx];
            const div = document.createElement('div');
            div.className = 'option practice-option practice-locked';
            div.dataset.letter = letter;
            let icon = '';
            if (letter === correctAnswer) {
                div.classList.add('correct');
                icon = '<span class="opt-result-icon correct-icon">✓</span>';
            } else if (letter === clickedLetter) {
                div.classList.add('wrong');
                icon = '<span class="opt-result-icon wrong-icon">✗</span>';
            }
            div.innerHTML = `<span class="opt-letter-circle">${letter}</span><span class="opt-text">${opt}</span>${icon}`;
            container.appendChild(div);
        });

        // Show explanation
        const expBox = document.getElementById('explanationBox');
        const expContent = document.getElementById('explanationContent');
        if (currentQ.explanation) {
            expBox.style.display = 'block';
            expContent.innerHTML = formatPracticeExplanation(currentQ.explanation, clickedLetter === correctAnswer);
            expBox.classList.remove('correct', 'wrong');
            expBox.classList.add(clickedLetter === correctAnswer ? 'correct' : 'wrong');
        }

        // If last question, style "Next" as "Finish"
        const isLast = currentQuestionIndex + 1 === currentExamQuestions.length;
        const nextNavBtn = document.querySelector('.nav-buttons .nav-btn:last-child');
        if (nextNavBtn) {
            if (isLast) {
                nextNavBtn.textContent = 'Finish ✓';
                nextNavBtn.style.cssText = 'background:linear-gradient(135deg,#22c55e,#16a34a);color:#fff;font-weight:700;border-color:transparent;';
            } else {
                nextNavBtn.textContent = 'Next →';
                nextNavBtn.style.cssText = '';
            }
        }

        // Scroll explanation into view
        setTimeout(() => {
            const examPage = document.getElementById('examPage');
            if (examPage) examPage.scrollTo({ top: examPage.scrollHeight, behavior: 'smooth' });
        }, 120);
    }

    function formatPracticeExplanation(text, isCorrect) {
        const headerText = isCorrect ? '✓ Correct! Here\'s why:' : '✗ Incorrect. Here\'s the solution:';
        const headerClass = isCorrect ? 'correct-header' : 'wrong-header';
        const formatted = String(text)
            .replace(/\n/g, '<br>')
            .replace(/→/g, '<span class="step-arrow">→</span>');
        return `<div class="practice-exp-header ${headerClass}">${headerText}</div><div class="practice-exp-body">${formatted}</div>`;
    }

    function updateQuestionGrid() {
        const total = getTotalQuestions();
        const grid = document.getElementById('questionGrid');
        if (!grid) return;
        const start = Math.floor(currentQuestionIndex / 10) * 10 + 1;
        const end = Math.min(start + 9, total);
        grid.innerHTML = '';
        for (let i = start; i <= end; i++) {
            const div = document.createElement('div');
            div.className = 'question-number';
            if (i === currentQuestionIndex + 1) div.classList.add('active');
            if (answers[i]) div.classList.add('answered');
            else div.classList.add('unanswered');
            if ((isReviewMode || isPracticeMode) && answers[i]) {
                const qIdx = i - 1;
                const isCorrect = answers[i] === currentExamQuestions[qIdx]?.answer;
                if (isCorrect) div.classList.add('review-correct');
                else div.classList.add('review-wrong');
            }
            div.innerText = i;
            div.onclick = () => { saveAnswer(); currentQuestionIndex = i - 1; loadQuestion(); };
            grid.appendChild(div);
        }
        const page = Math.floor(currentQuestionIndex / 10) + 1;
        const totalPages = Math.ceil(total / 10);
        const navInfo = document.querySelector('.nav-info');
        if (navInfo) navInfo.innerText = `Page ${page} of ${totalPages} (${start}-${end} of ${total})`;
        const prevBtn = document.getElementById('prevPage');
        const nextBtn = document.getElementById('nextPage');
        if (prevBtn) prevBtn.disabled = page === 1;
        if (nextBtn) nextBtn.disabled = page === totalPages;
    }
    
    window.nextQuestion = function(e) { if (e) e.preventDefault(); saveAnswer(); if (currentQuestionIndex + 1 < getTotalQuestions()) { currentQuestionIndex++; loadQuestion(); } };
    window.prevQuestion = function(e) { if (e) e.preventDefault(); saveAnswer(); if (currentQuestionIndex > 0) { currentQuestionIndex--; loadQuestion(); } };
    window.previousPage = function(e) { saveAnswer(); const newIdx = Math.max(0, Math.floor(currentQuestionIndex / 10) * 10 - 10); if (newIdx >= 0) { currentQuestionIndex = newIdx; loadQuestion(); } };
    window.nextPage = function(e) { saveAnswer(); const newIdx = Math.min(getTotalQuestions() - 1, (Math.floor(currentQuestionIndex / 10) + 1) * 10); if (newIdx > currentQuestionIndex) { currentQuestionIndex = newIdx; loadQuestion(); } };
    
    window.submitExam = function() {
        if (isPracticeMode) { finalizeExam(); return; }
        saveAnswer();
        if (isReviewMode) { finalizeExam(); return; }
        const total = getTotalQuestions();
        const unanswered = [];
        for (let i = 1; i <= total; i++) if (!answers[i]) unanswered.push(i);
        if (unanswered.length > 0) {
            currentQuestionIndex = unanswered[0] - 1;
            loadQuestion();
            showExamToast('⚠ ' + unanswered.length + ' question' + (unanswered.length > 1 ? 's' : '') + ' unanswered — answer all to submit');
            return;
        }
        const modal = document.getElementById('submitModal');
        document.getElementById('submitModalMessage').innerText = 'You\'ve answered all ' + total + ' questions. Ready to submit?';
        modal.style.display = 'flex';
        const newConfirm = document.getElementById('confirmSubmit').cloneNode(true);
        const newCancel = document.getElementById('cancelSubmit').cloneNode(true);
        document.getElementById('confirmSubmit').parentNode.replaceChild(newConfirm, document.getElementById('confirmSubmit'));
        document.getElementById('cancelSubmit').parentNode.replaceChild(newCancel, document.getElementById('cancelSubmit'));
        newConfirm.onclick = () => { modal.style.display = 'none'; finalizeExam(); };
        newCancel.onclick = () => { modal.style.display = 'none'; };
    };

    function showExamToast(msg) {
        let t = document.getElementById('_examToast');
        if (!t) {
            t = document.createElement('div');
            t.id = '_examToast';
            t.style.cssText = 'position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#ef4444;color:#fff;padding:12px 22px;border-radius:12px;font-weight:600;font-size:15px;z-index:9000;box-shadow:0 4px 20px rgba(0,0,0,0.3);transition:opacity 0.4s ease;white-space:nowrap;pointer-events:none;';
            document.body.appendChild(t);
        }
        t.textContent = msg;
        t.style.opacity = '1';
        clearTimeout(t._timer);
        t._timer = setTimeout(function() { t.style.opacity = '0'; }, 2800);
    }
    
    function finalizeExam() {
        clearInterval(timerInterval);
        const questions = currentExamQuestions;
        const total = getTotalQuestions();
        const letters = ['A', 'B', 'C', 'D'];
        let correct = 0;
        for (let i = 1; i <= total; i++) {
            if (!answers[i] || !questions[i - 1]) continue;
            // Normalise answer: support legacy integer format (0→A, 1→B, 2→C, 3→D)
            const correctAnswer = (typeof questions[i - 1].answer === 'number')
                ? letters[questions[i - 1].answer]
                : questions[i - 1].answer;
            if (answers[i] === correctAnswer) correct++;
        }
        
        // Save progress for each topic
        const topicsData = COURSE_TOPICS[currentCourse];
        if (topicsData) {
            const topicStats = {};
            topicsData.topics.forEach(topic => {
                topicStats[topic.id] = { correct: 0, total: topic.endIdx - topic.startIdx };
            });
            
            questions.forEach((question, index) => {
                const answer = answers[index + 1];
                const isCorrect = answer === question.answer;
                if (!question || question.originalIndex === undefined) return;
                const topic = topicsData.topics.find(t => question.originalIndex >= t.startIdx && question.originalIndex < t.endIdx);
                if (topic) {
                    if (isCorrect) topicStats[topic.id].correct++;
                }
            });
            
            if (currentTopics.includes('all')) {
                topicsData.topics.forEach(topic => {
                    const stats = topicStats[topic.id];
                    if (stats.total > 0) {
                        saveProgress(currentCourse, topic.id, stats.correct, stats.total);
                    }
                });
            } else {
                currentTopics.forEach(topicId => {
                    const stats = topicStats[topicId];
                    if (stats && stats.total > 0) {
                        saveProgress(currentCourse, topicId, stats.correct, stats.total);
                    }
                });
            }
        }
        
        const wrong = total - correct;
        const timeSpent = initialTime - timeRemaining;
        const minutes = Math.floor(timeSpent / 60);
        const seconds = timeSpent % 60;
        const percentage = total > 0 ? (correct / total * 100).toFixed(1) : 0;
        
        document.getElementById('finalScore').innerHTML = `${correct}/${total}`;
        document.getElementById('correctCount').innerText = correct;
        document.getElementById('wrongCount').innerText = wrong;
        document.getElementById('totalCount').innerText = total;
        document.getElementById('timeTaken').innerText = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        document.getElementById('resultCourse').innerText = currentCourse;
        document.querySelector('.score-text').innerHTML = percentage >= 70 ? "Excellent" : (percentage >= 50 ? "Good job" : "Keep practicing");
        document.querySelector('.result-message').innerHTML = `You scored ${percentage}%. ${correct} correct out of ${total}. ${percentage >= 70 ? 'Great work!' : (percentage >= 50 ? 'Good effort!' : 'Review and try again!')}`;
        
        document.getElementById('examPage').style.display = 'none';
        document.getElementById('resultPage').style.display = 'block';
        isExamActive = false;
        restoreBodyScroll();

        // Customise result page for practice vs exam mode
        const reviewBtn = document.getElementById('reviewBtn');
        const practiceAgainBtn = document.getElementById('practiceAgainBtn');
        const resultH2 = document.querySelector('#resultPage h2');
        if (resultH2) resultH2.textContent = isPracticeMode ? 'Practice Complete!' : 'Exam Completed';
        if (reviewBtn) reviewBtn.style.display = isPracticeMode ? 'none' : '';
        if (practiceAgainBtn) practiceAgainBtn.style.display = isPracticeMode ? '' : 'none';

        // Force scroll to top of result page
        forceScrollToTop();
    }

    window.practiceAgain = function() {
        isExamActive = false;
        isReviewMode = false;
        isPracticeMode = false;
        document.getElementById('resultPage').style.display = 'none';
        // Reset topic selection to default (All) so page is fresh
        currentTopics = ['all'];
        updateTopicSelectionUI();
        document.getElementById('topicPage').style.display = 'block';
        forceScrollToTop();
    };
    
    function showExamLeaveModal() {
        const modal = document.getElementById('examNavModal');
        if (!modal) return;
        document.getElementById('examNavModalMessage').innerText = 'You are in the middle of an exam. Resume the exam or go back home.';
        modal.style.display = 'flex';
        document.getElementById('examResumeBtn').onclick = () => {
            modal.style.display = 'none';
            showPage('exam');
        };
        document.getElementById('examLeaveBtn').onclick = () => {
            modal.style.display = 'none';
            isExamActive = false;
            showPage('home');
        };
    }
    
    function maybeNavigateToPage(page) {
        if (isExamActive && page !== 'exam') {
            showExamLeaveModal();
            return;
        }
        showPage(page);
    }
    
    document.querySelectorAll('.tab-item').forEach(tab => {
        tab.addEventListener('click', () => {
            const page = tab.getAttribute('data-page');
            if (page) maybeNavigateToPage(page);
        });
    });
    
    const backToTopicsBtn = document.getElementById('backToTopics');
    if (backToTopicsBtn) {
        backToTopicsBtn.addEventListener('click', () => {
            document.getElementById('questionCountPage').style.display = 'none';
            document.getElementById('modeSelectModal').style.display = 'flex';
            forceScrollToTop();
        });
    }
    
    window.showCorrections = function() {
        isReviewMode = true;
        document.getElementById('resultPage').style.display = 'none';
        document.getElementById('examPage').style.display = 'block';
        document.getElementById('timer').innerText = "Review Mode";
        const submitBtn = document.querySelector('button[onclick="submitExam()"]');
        if (submitBtn) submitBtn.style.display = 'none';

        // Inject Home button beside "Review Mode" text in the timer-submit-row
        let headerHomeBtn = document.getElementById('reviewHeaderHomeBtn');
        if (!headerHomeBtn) {
            headerHomeBtn = document.createElement('button');
            headerHomeBtn.id = 'reviewHeaderHomeBtn';
            headerHomeBtn.className = 'submit-btn';
            headerHomeBtn.style.cssText = 'margin-left:8px;padding:6px 12px;font-size:0.85rem;';
            headerHomeBtn.onclick = () => {
                isReviewMode = false;
                isExamActive = false;
                headerHomeBtn.style.display = 'none';
                document.getElementById('examPage').style.display = 'none';
                restoreBodyScroll();
                showPage('home');
            };
            headerHomeBtn.innerHTML = '<span>⌂</span><span> Home</span>';
            const timerSubmitRow = document.querySelector('.timer-submit-row');
            if (timerSubmitRow) timerSubmitRow.appendChild(headerHomeBtn);
        } else {
            headerHomeBtn.style.display = '';
        }

        currentQuestionIndex = 0;
        blockBodyScroll();
        loadQuestion();
    };
    
    function initSemesterToggle() {
        document.querySelectorAll('.semester-option').forEach(opt => {
            opt.addEventListener('click', () => {
                const sem = opt.getAttribute('data-semester');
                if (sem === currentSemester) return;
                currentSemester = sem;
                document.querySelectorAll('.semester-option').forEach(o => o.classList.remove('active'));
                opt.classList.add('active');
                renderCourses();
            });
        });
    }
    
    window.toggleMenu = function() {
        const navRight = document.getElementById('navRight');
        const hamburger = document.querySelector('.hamburger');
        if (navRight) navRight.classList.toggle('active');
        if (hamburger) hamburger.classList.toggle('toggle');
    };

    document.addEventListener('click', function(event) {
        const navRight = document.getElementById('navRight');
        const hamburger = document.querySelector('.hamburger');
        const isClickInsideNav = navRight?.contains(event.target);
        const isClickOnHamburger = hamburger?.contains(event.target);
        
        if (navRight?.classList.contains('active') && !isClickInsideNav && !isClickOnHamburger) {
            navRight.classList.remove('active');
            hamburger?.classList.remove('toggle');
        }
    });
    
    // ==================== RESULT PAGE BACK BUTTON FIX ====================
    const resultBackBtn = document.getElementById('resultBackToCourses');
    if (resultBackBtn) {
        resultBackBtn.onclick = function(e) {
            e.preventDefault();
            document.getElementById('resultPage').style.display = 'none';
            document.getElementById('coursePage').style.display = 'block';
            const footer = document.querySelector('.telegram-cta');
            if (footer) footer.style.display = 'block';
            currentCourse = "";
            currentCourseKey = "";
            answers = {};
            isReviewMode = false;
            currentExamQuestions = null;
            renderCourses();
            restoreBodyScroll();
            forceScrollToTop();
        };
    }
    
    // ==================== EXAM INSTRUCTIONS PAGE ====================
    // No manual proceed buttons required; exam starts automatically after countdown.
    
    // ==================== RESOURCES SEMESTER TOGGLE ====================
    function initResourcesToggle() {
        const firstOption = document.querySelector('.resources-option[data-res-semester="first"]');
        const secondOption = document.querySelector('.resources-option[data-res-semester="second"]');
        const firstContent = document.getElementById('firstSemesterResources');
        const secondContent = document.getElementById('secondSemesterResources');
        
        if (!firstOption || !secondOption) return;
        
        function setActiveSemester(semester) {
            if (semester === 'first') {
                firstOption.classList.add('active');
                secondOption.classList.remove('active');
                if (firstContent) firstContent.style.display = 'block';
                if (secondContent) secondContent.style.display = 'none';
            } else {
                secondOption.classList.add('active');
                firstOption.classList.remove('active');
                if (firstContent) firstContent.style.display = 'none';
                if (secondContent) secondContent.style.display = 'block';
            }
        }
        
        firstOption.addEventListener('click', () => setActiveSemester('first'));
        secondOption.addEventListener('click', () => setActiveSemester('second'));
        
        // Ensure first semester is visible by default
        setActiveSemester('first');
    }
    
    renderCourses();
    initSemesterToggle();
    
    // Initialize resources toggle when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initResourcesToggle);
    } else {
        initResourcesToggle();
    }
    
    console.log('CBT system ready with all fixes applied!');
});
