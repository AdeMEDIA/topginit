// ==================== CHM 102 QUESTION BANK ====================
// General Chemistry II — Organic Chemistry, Functional Groups, Reaction Mechanisms

if (!window.questionBank) {
    window.questionBank = {};
}

window.questionBank["CHM 102"] = [

    // ==================== AMINE CHEMISTRY (Q1-31, idx 0-30) ====================
    {
        question: "Which of the following is true for the basicity of amines?",
        options: ["Alkyl amines are generally less basic than aryl amines because N is sp hybridised", "Aryl amines are generally more basic than alkyl amines due to the aryl group", "Aryl amines are generally less basic than alkyl amines due to delocalisation of the lone pair of electrons in the benzene ring", "Alkyl amines are generally less basic than aryl amines because the lone pair on N in aryl amines is not delocalised"],
        answer: "C",
        explanation: "In arylamines (e.g. aniline), the lone pair on N is delocalised into the benzene π-system, making it LESS available to accept a proton. Hence arylamines are weaker bases than alkylamines."
    },
    {
        question: "How many structural isomers are possible for C₃H₉N?",
        options: ["4", "2", "5", "3"],
        answer: "A",
        explanation: "C₃H₉N has 4 structural isomers: (1) n-propylamine CH₃CH₂CH₂NH₂ (1°), (2) isopropylamine (CH₃)₂CHNH₂ (1°), (3) ethylmethylamine CH₃CH₂NHCH₃ (2°), (4) trimethylamine (CH₃)₃N (3°)."
    },
    {
        question: "Which of the following is incorrect for primary amines?",
        options: ["On reaction with nitrous acid, alkyl amines produce alcohol", "On reaction with nitrous acid, aryl amines produce phenol", "Alkyl amines are more basic than ammonia", "Alkyl amines are more basic than aryl amines"],
        answer: "B",
        explanation: "Statement (b) is incorrect. Aryl primary amines + HNO₂ (cold, 0–5°C) produce diazonium salts (ArN₂⁺), NOT phenol directly. Phenol is obtained only on warming diazonium in water. Alkyl diazonium salts are unstable and give alcohol immediately."
    },
    {
        question: "Aniline (C₆H₅NH₂) is less basic than",
        options: ["Benzylamine (C₆H₅CH₂NH₂)", "Triphenylamine (C₆H₅)₃N", "p-Nitroaniline", "Diphenylamine (C₆H₅)₂NH"],
        answer: "A",
        explanation: "In benzylamine, the N is NOT directly attached to the ring — the lone pair is not delocalised into the benzene ring, so it is fully available for protonation. Hence benzylamine (pKb ≈ 4.7) is a much stronger base than aniline (pKb ≈ 9.4)."
    },
    {
        question: "Which of the following is formed when an alkyl primary amine reacts with nitrous acid (HNO₂)?",
        options: ["Alkyl nitrite", "Secondary amine", "Nitroalkane", "Alcohol"],
        answer: "D",
        explanation: "Alkyl primary amines + HNO₂ → unstable alkyldiazonium salt (RN₂⁺) → N₂ + carbocation → alcohol (R-OH). The reaction is not useful synthetically because the unstable diazonium immediately loses N₂."
    },
    {
        question: "In which of the following reactions does an amide get converted to an amine?",
        options: ["Claisen", "Hoffmann", "Kekulé", "Perkin"],
        answer: "B",
        explanation: "The Hofmann degradation (Br₂/NaOH or Br₂/KOH) converts a primary amide RCONH₂ to a primary amine RNH₂ with one fewer carbon: RCONH₂ → RNH₂ + CO₂."
    },
    {
        question: "Which compound on reduction with LiAlH₄ produces a secondary amine?",
        options: ["Methylcyanide (CH₃CN)", "Nitroethane (CH₃CH₂NO₂)", "Methylisocyanide (CH₃NC)", "Acetamide (CH₃CONH₂)"],
        answer: "C",
        explanation: "Methylisocyanide (CH₃-N≡C:) + 4[H] via LiAlH₄ → CH₃NHCH₃ (dimethylamine, a 2° amine). The isocyanide C provides the extra CH₂ that bonds to N. Nitriles, amides, and nitroalkanes all give primary amines."
    },
    {
        question: "Which of the following is formed in the reaction of an aldehyde and a primary amine?",
        options: ["Ketone", "Aromatic acid", "Schiff's base", "Carboxylic acid"],
        answer: "C",
        explanation: "Aldehyde + RNH₂ (primary amine) → hemiaminal (addition) → Schiff's base (R-CH=N-R') + H₂O (condensation). Schiff's bases (imines) are characteristic products of carbonyl compounds with primary amines."
    },
    {
        question: "The amine formed from an amide by means of bromine and alkali (Hofmann degradation) has how many carbon atoms?",
        options: ["Same number of C atoms as that of the amide", "One carbon atom fewer than that of the amide", "One more C atom than that of the amide", "Two more C atoms than that of the amide"],
        answer: "B",
        explanation: "Hofmann degradation: RCONH₂ + Br₂/NaOH → RNH₂ + CO₂ + NaBr + H₂O. The product amine (RNH₂) has ONE FEWER carbon than the starting amide (RCONH₂), because the carbonyl carbon is lost as CO₂."
    },
    {
        question: "Which of the following options represents compound X in: CH₃CH₂CONH₂ + Br₂/NaOH → X?",
        options: ["CH₃CONH₂", "CH₃CH₂NH₂", "C₂H₆", "CH₃NHCH₃"],
        answer: "B",
        explanation: "Hofmann degradation of propionamide (CH₃CH₂CONH₂, 3C): Br₂/NaOH → CH₃CH₂NH₂ (ethylamine, 2C) + CO₂. The product amine has one fewer carbon than the amide."
    },
    {
        question: "Ethylamine can be prepared by action of bromine and caustic potash on which compound?",
        options: ["Acetamide", "Formamide", "Propionamide", "Methylcyanide"],
        answer: "C",
        explanation: "Hofmann: propionamide (CH₃CH₂CONH₂, 3C) + Br₂/KOH → ethylamine (CH₃CH₂NH₂, 2C). Generally, if you want RNH₂ by Hofmann, start from an amide with one MORE carbon: (R+CO)NH₂."
    },
    {
        question: "Reduction of nitroalkanes yields",
        options: ["Alcohol", "Acid", "Amine", "Diazo compounds"],
        answer: "C",
        explanation: "Nitroalkanes (R-NO₂) can be reduced to primary amines (R-NH₂) by catalytic hydrogenation (H₂/catalyst), LiAlH₄, or Fe/HCl (Baeyer reduction): R-NO₂ + 6[H] → R-NH₂ + 2H₂O."
    },
    {
        question: "What is the name of the reaction when acetamide changes into methylamine?",
        options: ["Huffman reaction", "Friedel-Crafts reaction", "Hofmann reaction", "Hinsberg reaction"],
        answer: "C",
        explanation: "Hofmann reaction (degradation): CH₃CONH₂ + Br₂/NaOH → CH₃NH₂ + CO₂. Acetamide (2C amide) → methylamine (1C amine). The Hinsberg test uses benzenesulfonyl chloride to distinguish 1°, 2°, 3° amines."
    },
    {
        question: "When methyl iodide is heated with ammonia, what is the product obtained?",
        options: ["Methylamine", "Dimethylamine", "Trimethylamine", "A mixture of methylamine, dimethylamine and trimethylamine"],
        answer: "D",
        explanation: "Alkylation of ammonia with alkyl halide gives ALL three classes: NH₃ + CH₃I → CH₃NH₂ → (CH₃)₂NH → (CH₃)₃N → (CH₃)₄N⁺I⁻. The reaction is not selective; you get a mixture unless excess NH₃ or excess CH₃I is used deliberately."
    },
    {
        question: "Which of the following compounds gives a secondary amine on reduction?",
        options: ["Nitromethane (CH₃NO₂)", "Nitrobenzene (C₆H₅NO₂)", "Methylisocyanide (CH₃NC)", "Methylcyanide (CH₃CN)"],
        answer: "C",
        explanation: "Methylisocyanide (CH₃NC) + LiAlH₄ → CH₃NHCH₃ (dimethylamine, a 2° amine). Nitriles (CN) and nitro compounds give PRIMARY amines; isocyanides (NC) give SECONDARY amines because N is bonded to both the original R group and the new CH₂ from reduction."
    },
    {
        question: "When ethanol is mixed with ammonia and passed over alumina at high temperature, the compound formed is",
        options: ["C₂H₅NH₂ (ethylamine)", "C₂H₄ (ethylene)", "C₂H₅OC₂H₅ (diethyl ether)", "CH₃OCH₃ (dimethyl ether)"],
        answer: "A",
        explanation: "Passing alcohol + NH₃ vapours over hot Al₂O₃ catalyst: C₂H₅OH + NH₃ → C₂H₅NH₂ + H₂O. This is analogous to dehydration but instead of forming ether, the OH is replaced by NH₂."
    },
    {
        question: "Which of the following should be most volatile (lowest boiling point)?",
        options: ["(CH₃)₃N (trimethylamine, 3° amine)", "CH₃CH₂CH₂NH₂ (n-propylamine, 1° amine)", "(CH₃)₂CHNH₂ (isopropylamine, 1° amine)", "CH₃CH₂NHCH₃ (ethylmethylamine, 2° amine)"],
        answer: "A",
        explanation: "Trimethylamine (3° amine) has NO N–H bonds and therefore CANNOT form hydrogen bonds. Its bp (3°C) is much lower than isomeric 1° amines (bp ≈ 48°C for propylamine) or 2° amines. Fewer N–H bonds → weaker intermolecular forces → lower bp."
    },
    {
        question: "The nitrogen atom of a primary amine group is ______ hybridised",
        options: ["sp", "sp²", "sp³", "sp³d"],
        answer: "C",
        explanation: "Nitrogen in primary amines (R-NH₂) has 4 regions of electron density (3 bonds + 1 lone pair) → sp³ hybridisation → pyramidal geometry (bond angles ≈107°, slightly less than tetrahedral due to lone pair repulsion)."
    },
    {
        question: "C₃H₉N cannot represent",
        options: ["A primary amine", "A secondary amine", "A tertiary amine", "A quaternary ammonium salt"],
        answer: "D",
        explanation: "C₃H₉N can represent 1° (n-propylamine, isopropylamine), 2° (ethylmethylamine), and 3° (trimethylamine) neutral amines. A QUATERNARY ammonium salt (R₄N⁺X⁻) is an ionic species — a neutral molecular formula cannot represent an ionic salt."
    },
    {
        question: "Identify the INCORRECTLY named compound",
        options: ["(CH₃CH₂)₂NCH₃ = N-Ethyl-N-methylethanamine", "(CH₃)₃CNH₂ = 2-methylpropan-2-amine", "CH₃NHCH(CH₃)₂ = N-methylpropan-2-amine", "(CH₃)₂CHNH₂ = 2,2-Dimethyl-N-propanamine"],
        answer: "D",
        explanation: "(CH₃)₂CHNH₂ is isopropylamine; the correct IUPAC name is propan-2-amine (not '2,2-Dimethyl-N-propanamine'). Options A, B, C are all correctly named."
    },
    {
        question: "When excess ethyl iodide is treated with ammonia, the product is",
        options: ["Ethylamine", "Diethylamine", "Triethylamine", "Tetraethylammonium iodide"],
        answer: "D",
        explanation: "Excess alkyl halide with NH₃ drives the reaction to the quaternary ammonium salt: NH₃ + excess C₂H₅I → (C₂H₅)₄N⁺I⁻ (tetraethylammonium iodide). Each alkylation step is faster on the less hindered amine."
    },
    {
        question: "Secondary amines can be prepared by",
        options: ["Reduction of nitro compounds", "Oxidation of N-substituted amides", "Reduction of isonitriles (isocyanides)", "Reduction of nitriles"],
        answer: "C",
        explanation: "Isonitriles (R-NC) + 4[H] (LiAlH₄) → R-NH-CH₃ (secondary amine). Nitriles give primary amines; nitro compounds give primary amines; oxidation of N-substituted amides does not give secondary amines directly."
    },
    {
        question: "Which of the following amides will give ethylamine on reaction with sodium hypobromide (NaOBr)?",
        options: ["Butanamide", "Propionamide", "Acetamide", "Benzamide"],
        answer: "B",
        explanation: "Hofmann degradation with NaOBr: propionamide (CH₃CH₂CONH₂, 3C) → ethylamine (CH₃CH₂NH₂, 2C). The product always has one fewer carbon than the starting amide."
    },
    {
        question: "Tertiary amines have the lowest boiling points among isomeric amines because",
        options: ["They have the highest molecular mass", "They do not form hydrogen bonds (no N–H)", "They are more polar in nature", "They are the most basic in nature"],
        answer: "B",
        explanation: "3° amines (R₃N) have NO N–H bonds → they CANNOT form intermolecular hydrogen bonds. Only weak van der Waals forces hold them together → lowest boiling points among isomeric amines."
    },
    {
        question: "Primary and secondary amines are distinguished by",
        options: ["Br₂/ROH", "HClO", "HNO₂", "NH₃"],
        answer: "C",
        explanation: "HNO₂ (nitrous acid) test: 1° alkylamines → alcohol + N₂; 2° amines → yellow N-nitrosamine oil; 3° amines → soluble salt (no reaction visible at room temp). The Hinsberg test (C₆H₅SO₂Cl) also distinguishes all three classes."
    },
    {
        question: "Arrange the following compounds in increasing order of basicity: CH₃NH₂, (CH₃)₂NH, NH₃, C₆H₅NH₂",
        options: ["C₆H₅NH₂ < NH₃ < (CH₃)₂NH < CH₃NH₂", "CH₃NH₂ < (CH₃)₂NH < NH₃ < C₆H₅NH₂", "C₆H₅NH₂ < NH₃ < CH₃NH₂ < (CH₃)₂NH", "(CH₃)₂NH < CH₃NH₂ < NH₃ < C₆H₅NH₂"],
        answer: "C",
        explanation: "Basicity order: C₆H₅NH₂ (aniline, pKb 9.4) < NH₃ (pKb 4.74) < CH₃NH₂ (methylamine, pKb 3.36) < (CH₃)₂NH (dimethylamine, pKb 3.28). Electron-donating alkyl groups increase basicity; delocalisation in aniline decreases it."
    },
    {
        question: "Among C₃H₇NH₂, CH₃NH₂, C₂H₅NH₂, and C₆H₅NH₂, which is the least basic compound?",
        options: ["CH₃NH₂", "C₂H₅NH₂", "C₃H₇NH₂", "C₆H₅NH₂"],
        answer: "D",
        explanation: "C₆H₅NH₂ (aniline) is least basic. The lone pair on N is delocalised into the benzene ring (resonance) → less available for protonation. The alkylamines (CH₃NH₂, C₂H₅NH₂, C₃H₇NH₂) all have lone pairs NOT delocalised → more basic."
    },
    {
        question: "Which of the following is amphoteric in nature?",
        options: ["CH₃NH₂ (methylamine)", "CH₃NHCH₃ (dimethylamine)", "CH₃CONH₂ (acetamide)", "C₆H₅NH₂ (aniline)"],
        answer: "C",
        explanation: "Acetamide (CH₃CONH₂) is amphoteric — it has both acidic character (N–H can donate proton) and basic character (C=O and N lone pairs can accept proton). Simple amines are basic only; amino acids are also amphoteric."
    },
    {
        question: "Amines form salts with hydrochloric acid. Which of the following will be INSOLUBLE in dilute HCl?",
        options: ["Aniline (C₆H₅NH₂)", "Triphenylamine (C₆H₅)₃N", "Ethylamine (C₂H₅NH₂)", "Dimethylamine (CH₃NHCH₃)"],
        answer: "B",
        explanation: "Triphenylamine ((C₆H₅)₃N) has its lone pair so highly delocalised over three phenyl rings that it is essentially non-basic — it does NOT react with dilute HCl to form a soluble salt. Aniline, ethylamine, and dimethylamine all react with HCl to give soluble ammonium salts."
    },
    {
        question: "Primary, secondary and tertiary amines may be separated by using",
        options: ["Iodoform", "Diethyl oxalate", "Benzenesulphonyl chloride (Hinsberg's test)", "Acetyl chloride"],
        answer: "C",
        explanation: "Hinsberg's test: 1° amines + C₆H₅SO₂Cl → sulfonamide (soluble in NaOH); 2° amines → sulfonamide (insoluble in NaOH); 3° amines → no reaction (insoluble). This classifies all three types."
    },
    {
        question: "The strongest base among the following is",
        options: ["Aniline C₆H₅NH₂", "p-Aminoaniline (p-NH₂C₆H₄NH₂)", "m-Nitroaniline (m-NO₂C₆H₄NH₂)", "Benzylamine (C₆H₅CH₂NH₂)"],
        answer: "D",
        explanation: "Benzylamine (C₆H₅CH₂NH₂) is the strongest base: the N is NOT directly on the ring, so the lone pair is NOT delocalised → pKb ≈ 4.7. m-Nitroaniline is weakest (electron-withdrawing NO₂). Aniline and p-aminoaniline are intermediate."
    },

    // ==================== PROTEINS & AMINO ACIDS (Q32-56, idx 31-55) ====================
    {
        question: "Proteins are a group of ______ found in all living matter",
        options: ["Amine-containing organic compounds", "Amine-containing inorganic compounds", "Nitrogen-containing organic compounds", "Nitrogen-containing inorganic compounds"],
        answer: "C",
        explanation: "Proteins are nitrogen-containing organic macromolecules made of amino acid residues linked by peptide bonds. They contain C, H, O, N (and often S), but are NOT inorganic compounds."
    },
    {
        question: "The major components of protein include the following EXCEPT",
        options: ["Oxygen", "Nitrogen", "Hydrogen", "Chlorine"],
        answer: "D",
        explanation: "Proteins are composed of C, H, O, N, and sometimes S (in cysteine/methionine). Chlorine is NOT a major component of proteins. Trace elements like Fe, Zn, Cu may be present in metalloproteins."
    },
    {
        question: "The peptide linkage in protein is between",
        options: ["The amino group and carboxylic acid group of opposite amino acids", "The amino group and carboxylic acid group of adjacent amino acids", "The amino group and carboxylic acid group of the same carbon amino acids", "The amino group and carboxylic acid group of similar amino acids"],
        answer: "B",
        explanation: "A peptide bond forms between the –COOH of one amino acid and the –NH₂ of the NEXT (adjacent) amino acid in the chain, releasing water: –CO–NH– is the peptide linkage."
    },
    {
        question: "The chemical and physical properties of protein are derived from",
        options: ["The functional groups present", "The reaction potential", "Electronegative elements acting as substituents", "A hybrid of properties of the various amino acid residues"],
        answer: "D",
        explanation: "A protein's chemical and physical properties emerge from the combination of all its constituent amino acid residues — their R-group charges, polarity, size, and bonding capacity collectively determine folding, solubility, and reactivity."
    },
    {
        question: "The simple (monomeric) unit of protein is",
        options: ["Nitrogen atom", "Amine", "Carboxylic acid", "Amino acid"],
        answer: "D",
        explanation: "Proteins are polymers; the monomer is the amino acid (H₂N-CHR-COOH). Different R groups distinguish the 20 standard amino acids. Peptide bonds link successive amino acid residues."
    },
    {
        question: "Amino acids have ______ characteristics",
        options: ["Acidic", "Basic", "Neutral", "Both acidic and basic (amphoteric)"],
        answer: "D",
        explanation: "Amino acids contain both –NH₂ (basic) and –COOH (acidic) groups → they are AMPHOTERIC. In solution they exist primarily as zwitterions (⁺H₃N–CHR–COO⁻) where the basic site is protonated and the acidic site is deprotonated."
    },
    {
        question: "The simplest amino acid is",
        options: ["Glycine", "Alanine", "Valine", "Cysteine"],
        answer: "A",
        explanation: "Glycine (H₂N–CH₂–COOH) has the simplest R group = H. It has no chiral center (the only achiral amino acid among the 20 standard). All other amino acids have at least one substituent as the R group."
    },
    {
        question: "The nature of amino acids is",
        options: ["Ambivalent", "Amphoteric", "Basic only", "Acidic only"],
        answer: "B",
        explanation: "Amino acids are amphoteric — they can act as both acids (–COOH donates H⁺) and bases (–NH₂ accepts H⁺). At the isoelectric point (pI), they exist as electrically neutral zwitterions."
    },
    {
        question: "The following are classes of amino acids EXCEPT",
        options: ["Aromatic amino acids", "Essential amino acids", "Non-essential amino acids", "Alkyl amino acids"],
        answer: "D",
        explanation: "Standard classifications of amino acids include: essential vs non-essential; aromatic vs aliphatic; acidic, basic, or neutral (by R-group charge). 'Alkyl amino acids' is not a recognised standard classification."
    },
    {
        question: "Examples of essential amino acids include the following EXCEPT",
        options: ["Lysine", "Glycine", "Histidine", "Valine"],
        answer: "B",
        explanation: "Glycine is a NON-ESSENTIAL amino acid — the body can synthesise it. The 9 essential amino acids (cannot be synthesised in the body) include: His, Ile, Leu, Lys, Met, Phe, Thr, Trp, Val."
    },
    {
        question: "Examples of non-essential amino acids include the following EXCEPT",
        options: ["Alanine", "Glycine", "Proline", "Arginine"],
        answer: "D",
        explanation: "Arginine is classified as CONDITIONALLY ESSENTIAL (required in the diet of infants and people under stress). Alanine, glycine, and proline are all non-essential — synthesised in adequate amounts by the body."
    },
    {
        question: "Examples of neutral amino acids include the following EXCEPT",
        options: ["Alanine", "Glycine", "Lysine", "Methionine"],
        answer: "C",
        explanation: "Lysine is a BASIC amino acid — it has an extra –NH₂ group in its side chain (ε-amino group), giving it 2 amino groups and 1 carboxylic acid. Alanine, glycine, and methionine all have neutral (non-charged) side chains."
    },
    {
        question: "Acidic amino acids have ______ amino group(s)",
        options: ["0", "1", "2", "3"],
        answer: "B",
        explanation: "Acidic amino acids (e.g. aspartic acid, glutamic acid) have 1 amino group (–NH₂) and 2 carboxylic acid groups (–COOH). The extra –COOH makes the side chain acidic (negatively charged at physiological pH)."
    },
    {
        question: "Acidic amino acids have ______ carboxylic acid group(s)",
        options: ["0", "1", "2", "3"],
        answer: "C",
        explanation: "Acidic amino acids (Asp and Glu) have 2 carboxylic acid groups — the α-COOH (backbone) plus an additional –COOH in the side chain. This second –COOH accounts for their acidic character."
    },
    {
        question: "Basic amino acids have ______ amino group(s)",
        options: ["0", "1", "2", "3"],
        answer: "C",
        explanation: "Basic amino acids (e.g. lysine, arginine, histidine) have 2 amino groups — the α-NH₂ (backbone) and an additional basic group in the side chain (ε-NH₂ in lysine, guanidinium in arginine, imidazole in histidine)."
    },
    {
        question: "Basic amino acids have ______ carboxylic acid group(s)",
        options: ["0", "1", "2", "3"],
        answer: "B",
        explanation: "Basic amino acids have only 1 carboxylic acid group (the α-COOH). They have EXTRA amino groups (not extra COOH), which makes their side chains positively charged at physiological pH."
    },
    {
        question: "An example of a basic amino acid is",
        options: ["Alanine", "Proline", "Arginine", "Tyrosine"],
        answer: "C",
        explanation: "Arginine (Arg, R) is a basic amino acid with a guanidinium group in the side chain (pKa ≈ 12.5). Lysine (ε-NH₂) and Histidine (imidazole) are the other basic amino acids. Alanine and tyrosine are neutral; proline is a cyclic (imino) non-essential amino acid."
    },
    {
        question: "The major difference between essential and non-essential amino acids is that",
        options: ["Essential amino acids can be synthesised in the body, while non-essential cannot", "Essential amino acids CANNOT be synthesised in the body, while non-essential ones can be synthesised", "Essential amino acids cannot be obtained from the diet, while non-essential ones can", "Essential amino acids can be synthesised in the vital organs only"],
        answer: "B",
        explanation: "Essential amino acids MUST come from the diet — the body cannot synthesise them in adequate quantities. Non-essential amino acids can be synthesised by the body from other metabolic precursors."
    },
    {
        question: "An example of an aromatic amino acid is",
        options: ["Tyrosine", "Proline", "Arginine", "Methionine"],
        answer: "A",
        explanation: "Aromatic amino acids contain an aromatic ring in the side chain: Phenylalanine (benzene ring), Tyrosine (phenol ring), and Tryptophan (indole ring). Proline is cyclic aliphatic; arginine is basic; methionine is sulphur-containing."
    },
    {
        question: "An example of an amino acid whose side chain contains an aromatic indole ring is",
        options: ["Tyrosine", "Proline", "Tryptophan", "Methionine"],
        answer: "C",
        explanation: "Tryptophan (Trp, W) contains an indole ring (benzene ring fused with pyrrole ring) in its side chain. Tyrosine has a phenol ring; phenylalanine has a benzene ring; proline is aliphatic cyclic."
    },
    {
        question: "The following are forces that stabilise the structure of proteins EXCEPT",
        options: ["Hydrophobic interactions", "Hydrogen bonds", "Ionic interactions (electrostatic)", "Hydrophilic forces"],
        answer: "D",
        explanation: "'Hydrophilic forces' is not a recognised stabilising interaction for protein structure. Proteins are stabilised by: (1) hydrophobic interactions (non-polar side chains pack away from water), (2) H-bonds (especially in α-helices and β-sheets), (3) ionic/salt bridges, and (4) disulphide bonds (covalent)."
    },
    {
        question: "One of the following CANNOT denature protein",
        options: ["Heat", "High pressure", "Optimal pH", "Ionising radiation"],
        answer: "C",
        explanation: "At OPTIMAL pH (the protein's pI or physiological pH), the protein is maximally stable — it is NOT denatured. Heat, extremes of pH, high pressure, heavy metals, detergents, and radiation all disrupt 3D structure and cause denaturation."
    },
    {
        question: "When a protein is denatured, it",
        options: ["Becomes a tightly coiled helix", "Reverts to its natural state", "Reverts to a random coil (unfolded) state", "Becomes permanently hard"],
        answer: "C",
        explanation: "Denaturation disrupts the non-covalent interactions (H-bonds, hydrophobic, ionic) that maintain the 3D structure → the polypeptide unfolds to a random coil. Primary structure (sequence) is preserved. Some denaturation is reversible (renaturation)."
    },
    {
        question: "One of the following is a method for testing protein",
        options: ["Biuret Test", "Melanin Test", "Grignard Test", "Adenosine Test"],
        answer: "A",
        explanation: "The Biuret test detects PEPTIDE BONDS (two or more): protein + CuSO₄/NaOH → purple/violet colour. The Ninhydrin test detects free amino acids. Grignard and adenosine tests are not protein tests."
    },
    {
        question: "One of the following is NOT a method of chemical purification",
        options: ["Filtration", "Centrifugation", "Adsorption", "Halogenation"],
        answer: "D",
        explanation: "Halogenation is a CHEMICAL REACTION (addition of halogens to organic compounds) — it changes the compound, not purifies it. Filtration, centrifugation, and adsorption (chromatography) are all physical separation/purification methods."
    },

    // ==================== ISOMERISM & STEREOCHEMISTRY (Q57-80, idx 56-79) ====================
    {
        question: "The compound which is NOT isomeric with diethyl ether (C₄H₁₀O) is",
        options: ["n-Propyl methyl ether", "1-Butanol", "2-Methyl-2-propanol", "Butanone (CH₃COCH₂CH₃)"],
        answer: "D",
        explanation: "Diethyl ether = C₄H₁₀O. Butanone (methyl ethyl ketone) = C₄H₈O — one degree of unsaturation (C=O), different molecular formula from C₄H₁₀O. n-Propyl methyl ether, 1-butanol, and 2-methyl-2-propanol are all C₄H₁₀O → structural isomers."
    },
    {
        question: "The maximum number of isomers for an alkene with molecular formula C₄H₈ is",
        options: ["2", "3", "4", "0"],
        answer: "C",
        explanation: "C₄H₈ alkene isomers: (1) 1-butene (CH₂=CHCH₂CH₃), (2) cis-2-butene, (3) trans-2-butene, (4) 2-methylpropene/isobutylene ((CH₃)₂C=CH₂). Counting geometric isomers gives 4 total."
    },
    {
        question: "Which of the following compounds will exhibit cis-trans (geometrical) isomerism?",
        options: ["2-Butene (CH₃CH=CHCH₃)", "2-Butyne (CH₃C≡CCH₃)", "2-Butanol (CH₃CH(OH)CH₂CH₃)", "Butanal (CH₃CH₂CH₂CHO)"],
        answer: "A",
        explanation: "2-Butene: each carbon of the C=C has TWO DIFFERENT substituents (H and CH₃) → restricted rotation → cis and trans forms possible. 2-Butyne has a triple bond (no geometric isomerism). 2-Butanol and butanal have no C=C."
    },
    {
        question: "The number of structural isomers of C₆H₁₄ is",
        options: ["4", "5", "6", "7"],
        answer: "B",
        explanation: "C₆H₁₄ (hexane) has 5 isomers: (1) n-hexane, (2) 2-methylpentane, (3) 3-methylpentane, (4) 2,2-dimethylbutane, (5) 2,3-dimethylbutane."
    },
    {
        question: "Alkenes show geometrical isomerism due to",
        options: ["Asymmetry", "Rotation around a single bond", "Resonance", "Restricted rotation around a double bond"],
        answer: "D",
        explanation: "The C=C double bond (σ + π) prevents free rotation. Each carbon of the double bond must have 2 DIFFERENT substituents for cis/trans isomerism to exist. The barrier to rotation (≈270 kJ/mol) is too high to overcome at room temperature."
    },
    {
        question: "Keto-enol tautomerism is observed in compounds that have",
        options: ["A carbonyl group with no α-hydrogen", "A carbonyl group (C=O) with at least one α-hydrogen atom", "Only aromatic ketones", "Only aliphatic esters"],
        answer: "B",
        explanation: "Keto-enol tautomerism requires a carbonyl compound (aldehyde or ketone) with at least one α-hydrogen (on the carbon adjacent to C=O). The α-H migrates to O: keto (C=O) ⇌ enol (C=C–OH). e.g. acetaldehyde, acetone."
    },
    {
        question: "The number of isomeric alcohols having molecular formula C₄H₁₀O is",
        options: ["3", "4", "5", "6"],
        answer: "B",
        explanation: "C₄H₁₀O alcohols: (1) 1-butanol (n-butanol) CH₃CH₂CH₂CH₂OH, (2) 2-butanol CH₃CH(OH)CH₂CH₃, (3) 2-methyl-1-propanol (CH₃)₂CHCH₂OH, (4) 2-methyl-2-propanol (tert-butanol) (CH₃)₃COH. Total = 4."
    },
    {
        question: "Compounds A = (2R,3R)-tartaric acid, B = (2S,3S)-tartaric acid, and C = meso-tartaric acid. The correct statement is",
        options: ["A and B are identical", "A and B are diastereomers", "A and C are enantiomers", "A and B are enantiomers"],
        answer: "D",
        explanation: "(2R,3R) and (2S,3S)-tartaric acids are non-superimposable mirror images → ENANTIOMERS. The meso compound (C) has opposite configurations at C2 and C3 and an internal plane of symmetry → it is a diastereomer of A and B."
    },
    {
        question: "How many optically ACTIVE stereoisomers are possible for butane-2,3-diol?",
        options: ["1", "2", "3", "4"],
        answer: "B",
        explanation: "Butane-2,3-diol has 2 chiral centres: maximum 2² = 4 stereoisomers. However, (2R,3S) ≡ (2S,3R) because of internal symmetry → meso compound (optically INACTIVE). Optically ACTIVE forms: (2R,3R) and (2S,3S) = 2 enantiomers."
    },
    {
        question: "An enantiomerically pure acid is treated with a racemic mixture of an alcohol having one chiral carbon. The ester formed will be",
        options: ["An optically active mixture (of diastereomers)", "A pure enantiomer", "A meso compound", "A racemic mixture"],
        answer: "A",
        explanation: "Pure R-acid + racemic alcohol (R + S) → two esters: (R-acid)(R-alcohol) and (R-acid)(S-alcohol). These are DIASTEREOMERS (different physical properties, both optically active but in different amounts) — an optically active mixture, NOT racemic."
    },
    {
        question: "The number of stereoisomers obtained by bromination of trans-2-butene is",
        options: ["1", "2", "3", "4"],
        answer: "A",
        explanation: "Anti addition of Br₂ to trans-2-butene: the bromonium ion forms on one face; Br⁻ attacks from the opposite face. From trans-2-butene, anti addition gives only meso-2,3-dibromobutane (the two new C–Br bonds have opposite configurations that cancel). Product = 1 stereoisomer (meso compound)."
    },
    {
        question: "Which of the following compounds exhibits stereoisomerism?",
        options: ["2-Methylbutene-1", "3-Methylbutyne-1", "3-Methylbutanoic acid", "2-Methylbutanoic acid"],
        answer: "D",
        explanation: "2-Methylbutanoic acid (CH₃CH₂CH(CH₃)COOH): C3 has 4 different groups (H, CH₃, C₂H₅, COOH) → chiral centre → optical stereoisomerism (R and S enantiomers). The other compounds lack either a chiral centre or the geometric constraints for geometric isomerism."
    },
    {
        question: "Which of the following compounds will exhibit geometrical isomerism?",
        options: ["1-Phenyl-2-butene", "3-Phenyl-1-butene", "2-Phenyl-1-butene", "1,1-Diphenyl-1-propene"],
        answer: "A",
        explanation: "1-Phenyl-2-butene: C₆H₅–CH=CH–CH₂CH₃. The double-bond carbons have C₆H₅/H and CH₂CH₃/H respectively — all four groups are different → cis/trans isomers possible. 1,1-Diphenyl-1-propene has 2 identical phenyl groups on one carbon → no geometric isomerism."
    },
    {
        question: "Optical isomers that are non-superimposable mirror images of each other are called",
        options: ["Tautomers", "Diastereomers", "Enantiomers", "Metamers"],
        answer: "C",
        explanation: "Enantiomers are pairs of optical isomers that are non-superimposable mirror images. They have identical physical properties (mp, bp, solubility) except for the DIRECTION of rotation of plane-polarised light (one is d/+, the other l/−)."
    },
    {
        question: "Enantiomers have which of the following characteristics?",
        options: ["They rotate ordinary light in opposite directions", "They have the same melting point", "They are superimposable mirror images", "They react with optically active molecules at the same rate"],
        answer: "B",
        explanation: "Enantiomers have IDENTICAL physical properties (same mp, bp, density, solubility in achiral solvents). They DIFFER only in the direction they rotate plane-polarised light. They react at DIFFERENT rates with chiral reagents (enzymes, chiral acids/bases)."
    },
    {
        question: "Which of the following statements is FALSE about enantiomers?",
        options: ["They rotate plane-polarised light", "They are superimposable mirror images", "They are non-superimposable mirror images", "They have the same melting point"],
        answer: "B",
        explanation: "Enantiomers are NON-superimposable mirror images — they CANNOT be superimposed on each other (that is what makes them enantiomers). Statement (b) 'they are superimposable mirror images' is therefore FALSE."
    },
    {
        question: "A meso compound is characterised by which of the following?",
        options: ["It is an achiral molecule which contains chiral carbons", "It contains a plane of symmetry (or centre of symmetry)", "It is optically inactive despite having chiral centres", "All of the above"],
        answer: "D",
        explanation: "A meso compound: (1) contains chiral carbons but is ACHIRAL overall, (2) has an internal plane (or centre) of symmetry, and (3) is optically INACTIVE because the rotations from each chiral centre cancel. All three statements are true."
    },
    {
        question: "Which of the following compounds will be optically active?",
        options: ["Propanoic acid (CH₃CH₂COOH)", "3-Chloropropionic acid (ClCH₂CH₂COOH)", "2-Chloropropionic acid (CH₃CHClCOOH)", "3-Chloropropene (ClCH₂CH=CH₂)"],
        answer: "C",
        explanation: "2-Chloropropionic acid: C2 bears Cl, CH₃, COOH, and H — 4 DIFFERENT groups → asymmetric (chiral) carbon → optically active. 3-Chloropropionic acid: C3 has 2 identical H atoms → NOT chiral. Propanoic acid has no chiral centre."
    },
    {
        question: "2-Butanol is optically active because it contains",
        options: ["An asymmetric (chiral) carbon", "A plane of symmetry", "A hydroxyl group", "A centre of symmetry"],
        answer: "A",
        explanation: "2-Butanol: CH₃–CH(OH)–CH₂CH₃. C2 has 4 different groups: OH, CH₃, C₂H₅, H → it is an asymmetric carbon → the molecule is chiral → optically active. OH alone does not cause optical activity; chirality requires 4 DIFFERENT substituents."
    },
    {
        question: "Which of the following represents a racemic mixture?",
        options: ["75% (R)-2-butanol + 25% (S)-2-butanol", "25% (R)-2-butanol + 75% (S)-2-butanol", "50% (R)-2-butanol + 50% (S)-2-butanol", "35% (R)-2-butanol + 65% (S)-2-butanol"],
        answer: "C",
        explanation: "A racemic mixture (racemate) contains EQUAL amounts (50%:50%) of both enantiomers. It is optically inactive (the rotations cancel). Any other ratio is an enantiomeric excess mixture and is optically active."
    },
    {
        question: "Consider (R)- and (S)-2-butanol. Which physical property DISTINGUISHES the two compounds?",
        options: ["Melting point", "Solubility in common solvents", "Rotation of plane-polarised light", "Infrared spectrum"],
        answer: "C",
        explanation: "Enantiomers are identical in all physical properties (mp, bp, density, IR, NMR in achiral solvents) EXCEPT the direction of rotation of plane-polarised light: (R) and (S) rotate light by the same magnitude but in OPPOSITE directions."
    },
    {
        question: "Which of the following is a TRUE statement?",
        options: ["All chiral molecules possess a plane of symmetry", "All achiral molecules are meso compounds", "All molecules with a single asymmetric centre of S configuration are levorotatory", "A mixture of achiral compounds will be optically inactive"],
        answer: "D",
        explanation: "(D) is true: achiral compounds have no net optical rotation individually, so any mixture of them is also optically inactive. (A) is false — chiral molecules LACK planes of symmetry. (B) is false — most achiral molecules aren't meso. (C) is false — S configuration doesn't always mean (−)."
    },
    {
        question: "Which of the following is correct concerning a pair of enantiomers?",
        options: ["They rotate plane-polarised light by exactly the same amount but in opposite directions", "They rotate by differing amounts in opposite directions", "They rotate by differing amounts in the same direction", "They have different melting points"],
        answer: "A",
        explanation: "Enantiomers are mirror images: they rotate plane-polarised light by EQUAL magnitudes (same specific rotation value) but in OPPOSITE directions — one dextrorotatory (+) and the other levorotatory (−)."
    },
    {
        question: "Which of the statements is correct about diastereomers?",
        options: ["They are stereoisomers that are NOT enantiomers", "They are a pair of identical isomers", "They are a pair of isomers that are mirror images of each other", "All their asymmetric centres have the same configuration"],
        answer: "A",
        explanation: "Diastereomers are stereoisomers that are NOT mirror images of each other (unlike enantiomers). They have different physical properties (mp, bp, solubility). e.g., cis- and trans-2-butene; (2R,3R)- and (2R,3S)-tartaric acid."
    },

    // ==================== ALCOHOLS, CARBONYLS & MISC (Q81-100, idx 80-99) ====================
    {
        question: "CH₃CH₂CH(OH)CH₃ is",
        options: ["Propanol", "1-Butanol", "2-Butanol", "None of the above"],
        answer: "C",
        explanation: "CH₃CH₂CH(OH)CH₃: the –OH is on C-2 of a 4-carbon chain → 2-butanol (butan-2-ol). It is a secondary alcohol because the carbon bearing –OH is attached to 2 other carbons."
    },
    {
        question: "Dehydration of ethanol using conc. H₂SO₄ produces",
        options: ["Ethane", "Ethene", "Propanol", "H₂SO₃"],
        answer: "B",
        explanation: "At 170°C with conc. H₂SO₄, ethanol undergoes INTRAMOLECULAR dehydration (elimination): C₂H₅OH → C₂H₄ (ethene) + H₂O. At 140°C, INTERMOLECULAR dehydration gives diethyl ether. The high temperature favours alkene."
    },
    {
        question: "Isopropyl alcohol is a structural isomer of",
        options: ["Propanol (1-propanol)", "Propylamine", "Propanoic acid", "Propanal"],
        answer: "A",
        explanation: "Isopropyl alcohol = (CH₃)₂CHOH = 2-propanol = C₃H₇OH. 1-Propanol (propan-1-ol) = CH₃CH₂CH₂OH = C₃H₇OH. Both have the same molecular formula C₃H₈O but different structural arrangement → structural isomers."
    },
    {
        question: "Methanol is",
        options: ["A primary alcohol", "A dihydric alcohol", "A secondary alcohol", "A tertiary alcohol"],
        answer: "A",
        explanation: "Methanol (CH₃OH): the –OH is attached to a carbon (C1) bearing 0 other carbons (or 3 H) → it is a PRIMARY alcohol. Dihydric alcohols have 2 OH groups (e.g. ethylene glycol); methanol has only 1."
    },
    {
        question: "Triphenylcarbinol has",
        options: ["One phenyl group", "Two phenyl groups", "Three phenyl groups", "No phenyl group"],
        answer: "C",
        explanation: "Triphenylcarbinol = (C₆H₅)₃COH. The prefix 'tri-phenyl' = THREE phenyl groups attached to the central carbinol carbon (the C–OH). It is a tertiary alcohol (the OH carbon is bonded to 3 carbons)."
    },
    {
        question: "C₆H₅CH₂Cl + aqueous NaOH produces",
        options: ["Benzyl alcohol (C₆H₅CH₂OH)", "Phenol (C₆H₅OH)", "Benzaldehyde (C₆H₅CHO)", "None of the above"],
        answer: "A",
        explanation: "Benzyl chloride (C₆H₅CH₂Cl) undergoes nucleophilic substitution (SN1, benzylic carbocation) with aqueous NaOH: C₆H₅CH₂Cl + NaOH → C₆H₅CH₂OH (benzyl alcohol) + NaCl. The Cl is on the benzylic CH₂, not the ring."
    },
    {
        question: "CH₃CHO + CH₃MgBr → (then H₃O⁺ workup) yields",
        options: ["Primary alcohol", "Secondary alcohol (2-propanol)", "Tertiary alcohol", "Dihydric alcohol"],
        answer: "B",
        explanation: "Grignard addition: CH₃MgBr adds to CH₃CHO → CH₃CH(OMgBr)CH₃ → (H₃O⁺) → CH₃CH(OH)CH₃ = 2-propanol (isopropanol), a SECONDARY alcohol. When a Grignard adds to an aldehyde (except HCHO), the product is always a secondary alcohol."
    },
    {
        question: "Ethanol when fully oxidised with acidified KMnO₄ produces",
        options: ["Ethanal (acetaldehyde)", "Ethanoic acid (acetic acid)", "Ethane", "Ethanone"],
        answer: "B",
        explanation: "Full oxidation of ethanol (primary alcohol) with strong oxidant (acidified KMnO₄): C₂H₅OH → CH₃COOH (ethanoic acid). First step: ethanol → ethanal (intermediate); second step: ethanal → ethanoic acid. KMnO₄ takes the reaction all the way to the acid."
    },
    {
        question: "When a primary amine is treated with nitrous acid (HNO₂), the organic products include a primary alcohol and nitrogen gas. What is the nitrogen-containing by-product gas?",
        options: ["Nitrogen oxide (NO)", "Hydrogen (H₂)", "N₂O₄", "Nitrogen (N₂)"],
        answer: "D",
        explanation: "Alkyl primary amine + HNO₂ → unstable alkyldiazonium salt (RN₂⁺) → N₂↑ (nitrogen gas) + carbocation → alcohol (R-OH). The evolution of N₂ gas is the driving force for the reaction."
    },
    {
        question: "C₂H₅–O–C₂H₅ + H₂O (acid-catalysed hydrolysis) produces",
        options: ["Butanol", "Ethanol", "Propanol", "None of the above"],
        answer: "B",
        explanation: "Diethyl ether (C₂H₅OC₂H₅) + H₂O → acid hydrolysis → 2 C₂H₅OH (ethanol). The C–O bond is broken by the nucleophilic water. Product: 2 moles of ethanol per mole of ether."
    },
    {
        question: "The reaction between LiAlH₄ and cyclopentanone produces",
        options: ["Cyclopentanol", "Cyclopentane", "Cyclopentene", "None of the above"],
        answer: "A",
        explanation: "LiAlH₄ reduces ketones to secondary alcohols: cyclopentanone (cyclic ketone) → cyclopentanol. LiAlH₄ provides H⁻ which adds to the carbonyl carbon; workup with H₂O/H⁺ gives the alcohol."
    },
    {
        question: "LiAlH₄, H₂/Ni, and NaBH₄ can reduce a carbonyl group. Which CANNOT simultaneously reduce both a C=C double bond and a C=O group?",
        options: ["LiAlH₄", "H₂/Ni", "NaBH₄", "None of the above"],
        answer: "C",
        explanation: "NaBH₄ is a SELECTIVE reducing agent — it reduces ONLY aldehydes and ketones (C=O), NOT isolated C=C double bonds. H₂/Ni (catalytic hydrogenation) reduces BOTH. LiAlH₄ reduces C=O and can reduce activated C=C (conjugated systems)."
    },
    {
        question: "Which of the following is NOT true about Lucas reagent?",
        options: ["It is HCl/ZnCl₂", "It is a test for acids", "It is a test for alcohols", "It is a test for the type of alcohol (1°, 2°, 3°)"],
        answer: "B",
        explanation: "Lucas reagent (conc. HCl + anhydrous ZnCl₂) tests for ALCOHOLS (not acids). 3° alcohols react immediately (turbidity), 2° alcohols react within 5 min, 1° alcohols do not react at room temperature. It does NOT test for acids."
    },
    {
        question: "Acetone is also known as",
        options: ["Ethanone", "Propanone", "Butanone", "Acetaldehyde"],
        answer: "B",
        explanation: "Acetone (CH₃COCH₃) systematic name = propanone (3-carbon chain, ketone on C2). Ethanone would be 2C. Butanone (methyl ethyl ketone) is C₄. Acetaldehyde = ethanal (2C aldehyde)."
    },
    {
        question: "Clemmensen reduction (Zn-Hg/conc. HCl) converts a carbonyl compound to",
        options: ["Alkene", "Alkyne", "Alcohol", "Alkane"],
        answer: "D",
        explanation: "Clemmensen reduction uses Zn amalgam in concentrated HCl: C=O → CH₂ (methylene). Carbonyl group is fully reduced to a CH₂ group (alkane), bypassing the alcohol. Used to convert aryl ketones to alkylbenzenes."
    },
    {
        question: "The reaction of propanal (CH₃CH₂CHO) and hydrazine (NH₂NH₂) gives a condensation product called",
        options: ["Propylhydrazone", "Dimethylhydrazone", "Dipropylhydrazine", "All of the above"],
        answer: "A",
        explanation: "Propanal + NH₂NH₂ → CH₃CH₂CH=N–NH₂ (propylhydrazone) + H₂O. The product (C=N–NH₂, a hydrazone) is named after the parent aldehyde (propanal → propyl...). Hydrazones are used for characterisation of carbonyl compounds."
    },
    {
        question: "In the presence of a strong base, two molecules of an aldehyde react to give",
        options: ["An aldol (β-hydroxyaldehyde)", "Two molecules of alcohols", "A ketone", "A ketone and an aldehyde"],
        answer: "A",
        explanation: "Aldol reaction: 2 RCHO →(base)→ RCH(OH)CH(R)CHO (β-hydroxyaldehyde = aldol). This is an addition reaction involving the α-carbon of one aldehyde attacking the carbonyl carbon of another. On heating, it further condenses to an α,β-unsaturated aldehyde."
    },
    {
        question: "In all cases of reactions of ammonia derivatives (hydroxylamine, hydrazine, semicarbazide) with carbonyl compounds, ______ is always formed",
        options: ["Ammonia", "Nitrogen", "Water", "Water and ammonia"],
        answer: "C",
        explanation: "All ammonia derivative + carbonyl condensation reactions follow nucleophilic addition then elimination: R₂C=O + H₂N–X → R₂C=N–X + H₂O. WATER is always the eliminated product (condensation = elimination of water)."
    },
    {
        question: "CH₃CH₂MgBr is an example of",
        options: ["A reducing agent", "A Grignard reagent", "An oxidising agent", "A dehydrating agent"],
        answer: "B",
        explanation: "CH₃CH₂MgBr = ethylmagnesium bromide = a Grignard reagent (organometallic compound, R-Mg-X). Grignard reagents are powerful nucleophiles/carbanion equivalents. They are prepared by reaction of an alkyl halide with Mg in dry ether."
    },
    {
        question: "Hofmann degradation converts RCONH₂ to",
        options: ["RNH₂ (primary amine)", "R₂NH (secondary amine)", "R₃N (tertiary amine)", "None of the above"],
        answer: "A",
        explanation: "Hofmann degradation: RCONH₂ + Br₂/NaOH → RNH₂ + CO₂ + NaBr + H₂O. The product is a PRIMARY AMINE (RNH₂) with one FEWER carbon than the amide. The carbonyl carbon is lost as CO₂."
    }
];

// Total: 100 questions covering CHM 102 exam-relevant topics
