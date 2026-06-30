// ==================== CHM 102 QUESTION BANK ====================
// General Chemistry II — Organic Chemistry, Functional Groups, Reaction Mechanisms

if (!window.questionBank) {
    window.questionBank = {};
}

window.questionBank["CHM 102"] = [

    // ==================== ESTERS & SAPONIFICATION (Questions 1-10, idx 0-9) ====================
    {
        question: "Saponification is best described as",
        options: ["base-promoted hydrolysis of an ester", "acid-catalyzed esterification", "reduction of fatty acids", "oxidation of glycerol"],
        answer: "A",
        explanation: "Saponification (from Latin sapo = soap) is the alkaline hydrolysis of esters, especially fats and oils, to give fatty acid salts (soap) and glycerol."
    },
    {
        question: "What type of reaction is the formation of ethyl ethanoate from ethanoic acid and ethanol?",
        options: ["Esterification (condensation)", "Saponification", "Oxidation", "Reduction"],
        answer: "A",
        explanation: "CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O. Esterification is a reversible condensation reaction catalysed by H₂SO₄."
    },
    {
        question: "In an esterification equilibrium, which action does NOT increase the yield of ester?",
        options: ["Adding more water to the mixture", "Removing water as it forms", "Using excess alcohol", "Adding H₂SO₄ catalyst"],
        answer: "A",
        explanation: "Adding water shifts the equilibrium backward (Le Chatelier's principle), reducing ester yield. Removing water or using excess alcohol shifts it forward."
    },
    {
        question: "Which statement is TRUE about esters and hydrogen bonding?",
        options: ["Esters can form H-bonds with water but NOT with each other", "Esters form H-bonds with each other like alcohols", "Esters cannot form H-bonds with anything", "Esters form stronger H-bonds than carboxylic acids"],
        answer: "A",
        explanation: "Esters lack an O–H or N–H group, so they cannot H-bond with each other. However, the carbonyl oxygen can accept H-bonds from water molecules."
    },
    {
        question: "Transesterification is defined as",
        options: ["exchange of the alcohol portion of one ester with another alcohol", "conversion of an acid to an ester using water", "hydrolysis of an ester using acid", "addition of H₂ across an ester bond"],
        answer: "A",
        explanation: "Transesterification: RCOOR' + R''OH ⇌ RCOOR'' + R'OH. Used industrially to make biodiesel from vegetable oils."
    },
    {
        question: "When an acid anhydride reacts with an alcohol, the products are",
        options: ["an ester and a carboxylic acid", "two esters and water", "a ketone and water", "an aldehyde and CO₂"],
        answer: "A",
        explanation: "(RCO)₂O + R'OH → RCOOR' + RCOOH. One acyl group reacts with the alcohol to form an ester; the other forms a carboxylic acid."
    },
    {
        question: "An acyl chloride (acid chloride) reacts with ammonia to give",
        options: ["a primary amide and HCl", "a secondary amine and CO₂", "an ester and HCl", "an acid anhydride and NH₄Cl"],
        answer: "A",
        explanation: "RCOCl + 2NH₃ → RCONH₂ + NH₄Cl. The second mole of NH₃ neutralizes the HCl produced."
    },
    {
        question: "Reacting an acyl chloride with a carboxylic acid produces",
        options: ["an acid anhydride and HCl", "an ester and HCl", "an amide and HCl", "a ketone and CO₂"],
        answer: "A",
        explanation: "RCOCl + RCOOH → (RCO)₂O + HCl. This is a common laboratory method for preparing acid anhydrides."
    },
    {
        question: "The alkaline hydrolysis (saponification) of a fat (triglyceride) produces",
        options: ["soap (fatty acid salts) and glycerol", "fatty acids only", "esters and water", "ketones and alcohols"],
        answer: "A",
        explanation: "Fat + NaOH → sodium salts of fatty acids (soap) + glycerol. Acid hydrolysis gives free fatty acids instead of their salts."
    },
    {
        question: "Soap is chemically best described as",
        options: ["a long-chain fatty acid sodium or potassium salt, e.g. CH₃(CH₂)₁₂COONa", "a petroleum derivative", "a glycerol ester", "a mixture of ethanol and fatty acids"],
        answer: "A",
        explanation: "Soaps are sodium (hard soap) or potassium (soft soap) salts of long-chain fatty acids. The hydrophobic tail dissolves grease; the ionic head dissolves in water."
    },

    // ==================== CARBONYL CHEMISTRY — ALDEHYDES & KETONES (Questions 11-20, idx 10-19) ====================
    {
        question: "Which compound is most readily oxidized to give a carboxylic acid?",
        options: ["Aldehyde", "Ketone", "Ether", "Alkane"],
        answer: "A",
        explanation: "Aldehydes (RCHO) are easily oxidized to carboxylic acids (RCOOH) by mild oxidants like KMnO₄ or Tollens' reagent. Ketones resist similar oxidation."
    },
    {
        question: "Ketones are best prepared by",
        options: ["oxidation of secondary alcohols", "oxidation of primary alcohols", "reduction of carboxylic acids", "hydrolysis of esters"],
        answer: "A",
        explanation: "Secondary alcohols (R₂CHOH) are oxidized to ketones (R₂C=O) by K₂Cr₂O₇/H₂SO₄, KMnO₄, or CrO₃."
    },
    {
        question: "The Clemmensen reduction converts a ketone or aldehyde into a methylene (CH₂) group using",
        options: ["zinc-mercury amalgam (Zn-Hg) in concentrated HCl", "hydrazine (NH₂NH₂) and NaOH with heat", "LiAlH₄ in dry ether", "NaBH₄ in ethanol"],
        answer: "A",
        explanation: "Clemmensen: C=O → CH₂ using Zn(Hg)/conc. HCl. Used under acidic conditions. Wolff-Kishner achieves the same result under basic conditions."
    },
    {
        question: "The Wolff-Kishner reduction converts a carbonyl group to CH₂ using",
        options: ["hydrazine (NH₂NH₂) and strong base (KOH) with heat", "Zn-Hg amalgam in concentrated HCl", "H₂ with Pd catalyst", "NaBH₄ in ethanol"],
        answer: "A",
        explanation: "Wolff-Kishner: RCOR' + NH₂NH₂ → hydrazone → (KOH, heat) → RCH₂R'. Used under basic conditions; complementary to Clemmensen."
    },
    {
        question: "The iodoform reaction gives a yellow precipitate (CHI₃) specifically with",
        options: ["methyl ketones (CH₃COR) and ethanol", "all ketones", "all aldehydes", "all primary alcohols"],
        answer: "A",
        explanation: "The iodoform test detects the CH₃C=O group, or CH₃CH(OH) that can be oxidized to it. Ethanol (CH₃CH₂OH) gives a positive result."
    },
    {
        question: "Tollens' reagent distinguishes benzaldehyde from phenylethanone (acetophenone) because",
        options: ["benzaldehyde is an aldehyde and gives a silver mirror; phenylethanone is a ketone and gives no reaction", "benzaldehyde is more soluble in water", "phenylethanone reduces Tollens' reagent faster", "benzaldehyde is coloured while phenylethanone is colourless"],
        answer: "A",
        explanation: "Aldehydes reduce Ag⁺ to Ag (silver mirror). Ketones do not. This is the key application of Tollens' test."
    },
    {
        question: "The general reaction type of the carbonyl group (C=O) in aldehydes and ketones is",
        options: ["nucleophilic addition", "electrophilic substitution", "free-radical substitution", "elimination"],
        answer: "A",
        explanation: "The electrophilic carbonyl carbon is attacked by nucleophiles (Nu⁻), making nucleophilic addition the fundamental carbonyl reaction mechanism."
    },
    {
        question: "The formula of hydroxylamine, a reagent that forms oximes with carbonyl compounds, is",
        options: ["H₂NOH (NH₂OH)", "H₂NNH₂", "HNO₃", "NH₃"],
        answer: "A",
        explanation: "Hydroxylamine (H₂NOH) + RCOR' → R(R')C=NOH (oxime) + H₂O. Oximes are crystalline solids used to characterize carbonyl compounds."
    },
    {
        question: "An acetal is formed when an aldehyde reacts with",
        options: ["two moles of alcohol in the presence of an acid catalyst", "one mole of alcohol under basic conditions", "water and an acid catalyst", "a ketone in the presence of H₂SO₄"],
        answer: "A",
        explanation: "RCHO + 2R'OH → RCH(OR')₂ + H₂O. Acetals are stable to base and important protecting groups for aldehydes in synthesis."
    },
    {
        question: "When an aldol condensation product (β-hydroxy carbonyl compound) is heated, it undergoes",
        options: ["dehydration to give an α,β-unsaturated carbonyl compound", "reduction to give a saturated aldehyde", "hydrolysis back to the starting carbonyl compounds", "oxidation to a dicarboxylic acid"],
        answer: "A",
        explanation: "Heating the aldol product causes elimination of water (–OH and α-H) to give a conjugated (α,β-unsaturated) aldehyde or ketone."
    },

    // ==================== AMINES, AMIDES & ORGANIC MISCELLANEOUS (Questions 21-28, idx 20-27) ====================
    {
        question: "Which of the following is a primary amine?",
        options: ["1,3-pentanediamine (H₂N–CH₂CH₂CH(NH₂)–)", "(CH₃)₂NH", "(CH₃)₃N", "N,N-dimethylaniline"],
        answer: "A",
        explanation: "A primary amine has –NH₂ attached directly to carbon (R–NH₂). 1,3-pentanediamine has free –NH₂ groups; the other options are secondary or tertiary amines."
    },
    {
        question: "When sodium metal is added to ethanol, the products are",
        options: ["sodium ethoxide (C₂H₅ONa) and hydrogen gas (H₂)", "sodium oxide and ethane", "NaOH and ethene", "no reaction occurs"],
        answer: "A",
        explanation: "2Na + 2C₂H₅OH → 2C₂H₅ONa + H₂↑. Sodium reacts with alcohols (less vigorously than with water) to release H₂."
    },
    {
        question: "The Hofmann degradation involves treating an amide with Br₂ and KOH to produce",
        options: ["a primary amine with one fewer carbon atom than the amide", "a secondary amine with the same carbon number", "a nitrile", "a carboxylic acid"],
        answer: "A",
        explanation: "RCONH₂ + Br₂ + 4KOH → RNH₂ + K₂CO₃ + 2KBr + 2H₂O. The carbonyl carbon is eliminated, giving a primary amine with n–1 carbons."
    },
    {
        question: "Which functional group is NOT reduced by sodium borohydride (NaBH₄)?",
        options: ["Carboxylic acid (–COOH)", "Aldehyde (–CHO)", "Ketone (C=O)", "Iminium ion (C=N⁺)"],
        answer: "A",
        explanation: "NaBH₄ is a mild, selective reducing agent. It reduces aldehydes and ketones but NOT carboxylic acids or esters. LiAlH₄ is needed for those."
    },
    {
        question: "When sodium ethanoate (CH₃COONa) is heated with soda lime (NaOH + CaO), the gas produced is",
        options: ["methane (CH₄)", "ethane (C₂H₆)", "hydrogen (H₂)", "ethyne (C₂H₂)"],
        answer: "A",
        explanation: "CH₃COONa + NaOH →(CaO, heat) CH₄ + Na₂CO₃. Decarboxylation removes one carbon as CO₂, giving methane."
    },
    {
        question: "Which functional groups are absent in urea (H₂N–CO–NH₂)?",
        options: ["Hydroxyl (–OH) and thiol (–SH)", "Amine (–NH₂) and carbonyl (C=O)", "Only carbonyl (C=O)", "Only amine (–NH₂)"],
        answer: "A",
        explanation: "Urea contains two amine (–NH₂) groups and one carbonyl (C=O) group. It has no hydroxyl (–OH) or thiol (–SH) group."
    },
    {
        question: "Plastics are best described as",
        options: ["synthetic polymers", "naturally occurring proteins", "polysaccharides from plants", "metal alloys"],
        answer: "A",
        explanation: "Plastics are large synthetic polymer molecules (e.g. polyethene, PVC, nylon) formed by polymerization of small monomer units."
    },
    {
        question: "The reduction of an aldehyde using LiAlH₄ gives",
        options: ["a primary alcohol", "a carboxylic acid", "a ketone", "an ester"],
        answer: "A",
        explanation: "LiAlH₄ reduces RCHO → RCH₂OH (primary alcohol). It also reduces ketones to secondary alcohols and carboxylic acids to primary alcohols."
    },

    // ==================== CARBOHYDRATES (Questions 29-36, idx 28-35) ====================
    {
        question: "Which of the following is a non-reducing sugar?",
        options: ["Sucrose", "Glucose", "Fructose", "Maltose"],
        answer: "A",
        explanation: "Sucrose has both anomeric carbons locked in the glycosidic bond, so it cannot open to form the free aldehyde/ketone needed to reduce Benedict's or Fehling's reagent."
    },
    {
        question: "A positive Benedict's test is indicated by the appearance of",
        options: ["a brick-red precipitate (solution changes from blue to red/orange)", "a white precipitate", "a silver mirror on the inner wall of the test tube", "a yellow crystalline precipitate"],
        answer: "A",
        explanation: "Benedict's reagent (Cu²⁺, alkaline) is reduced to Cu₂O (brick-red precipitate) by reducing sugars such as glucose, fructose, maltose, and lactose."
    },
    {
        question: "The enzyme in yeast responsible for converting glucose to ethanol and CO₂ is",
        options: ["zymase", "amylase", "lactase", "invertase"],
        answer: "A",
        explanation: "Zymase (a complex of enzymes in yeast) catalyses alcoholic fermentation: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂."
    },
    {
        question: "Glycogen is a storage polysaccharide made up of branched chains of",
        options: ["glucose residues", "fructose residues", "galactose residues", "amino acid residues"],
        answer: "A",
        explanation: "Glycogen is the animal equivalent of starch — a highly branched polymer of α-D-glucose stored primarily in the liver and muscle."
    },
    {
        question: "D-galactose and D-mannose are both isomers of D-glucose (C₆H₁₂O₆). The correct term for this relationship is",
        options: ["diastereomers (epimers) — same formula, different configuration at one or more chiral centres", "enantiomers — non-superimposable mirror images", "constitutional isomers — same formula, different connectivity", "conformational isomers"],
        answer: "A",
        explanation: "D-galactose differs from D-glucose at C-4 (epimer); D-mannose differs at C-2 (epimer). Epimers are a subset of diastereomers."
    },
    {
        question: "Starch and cellulose are both glucose polymers but differ in",
        options: ["the glycosidic linkage: starch has α-1,4; cellulose has β-1,4 linkage", "the type of monosaccharide: starch uses glucose, cellulose uses fructose", "the molecular formula of their monomer unit", "the presence of nitrogen in the polymer chain"],
        answer: "A",
        explanation: "The β-1,4 linkage in cellulose makes it indigestible by humans (lack of β-glucosidase) and gives rigid fibres, unlike the digestible α-linked starch."
    },
    {
        question: "The alcoholic fermentation of glucose by yeast produces",
        options: ["ethanol and carbon dioxide", "lactic acid and water", "acetic acid and hydrogen", "sucrose and oxygen"],
        answer: "A",
        explanation: "C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂. Temperature must be below ~40°C; above ~15% ethanol concentration kills the yeast."
    },
    {
        question: "The simplest carbohydrates that cannot be hydrolysed into smaller sugar units are called",
        options: ["monosaccharides", "disaccharides", "polysaccharides", "oligosaccharides"],
        answer: "A",
        explanation: "Monosaccharides (e.g. glucose, fructose, galactose, ribose, deoxyribose) are the monomeric building blocks of all carbohydrates."
    },

    // ==================== PROTEINS & AMINO ACIDS (Questions 37-42, idx 36-41) ====================
    {
        question: "Protein denaturation involves the disruption of",
        options: ["secondary and tertiary structure while peptide bonds remain intact", "only primary structure (peptide bonds are broken)", "only the tertiary structure", "only disulfide bonds"],
        answer: "A",
        explanation: "Denaturation unfolds the protein by breaking H-bonds, hydrophobic interactions, and ionic bonds — destroying shape without breaking the peptide backbone."
    },
    {
        question: "Disulfide bonds (–S–S–) in proteins form between the side chains of",
        options: ["two cysteine residues", "two lysine residues", "two glycine residues", "cysteine and methionine"],
        answer: "A",
        explanation: "Cysteine contains –SH (thiol). Oxidation of two –SH groups forms –S–S– (disulfide) bonds, crucial for tertiary structure (e.g. insulin, keratin)."
    },
    {
        question: "In a neutral aqueous solution, amino acids exist predominantly as",
        options: ["zwitterions (dipolar ions with –NH₃⁺ and –COO⁻ simultaneously)", "uncharged neutral molecules", "purely cationic (positively charged) species", "purely anionic (negatively charged) species"],
        answer: "A",
        explanation: "At physiological pH, the –NH₂ is protonated to –NH₃⁺ and –COOH is deprotonated to –COO⁻, giving a net neutral but internally charged zwitterion."
    },
    {
        question: "An amino acid with an isoelectric point (pI) of 9.74, such as lysine, at pH 7 carries",
        options: ["a net positive charge", "a net negative charge", "zero net charge", "variable charge"],
        answer: "A",
        explanation: "At pH 7 < pI (9.74), lysine is protonated and carries a net positive charge. It would be neutral only at its pI of 9.74."
    },
    {
        question: "Peptide bonds are formed by which type of reaction?",
        options: ["Condensation (dehydration) between –NH₂ of one amino acid and –COOH of another", "Hydration of a C=C double bond", "Addition of water across a C=O group", "Esterification of two carboxylic acids"],
        answer: "A",
        explanation: "The peptide bond (–CO–NH–) forms when the amine of one amino acid reacts with the carboxyl of another, releasing one molecule of water."
    },
    {
        question: "Glutamic acid has a pI of approximately 3.2. At pH 7, glutamic acid carries",
        options: ["a net negative charge", "a net positive charge", "zero net charge", "variable charge depending on concentration"],
        answer: "A",
        explanation: "At pH 7 > pI (3.2), both carboxyl groups of glutamic acid are deprotonated → net negative charge. It is neutral only at pH 3.2."
    },

    // ==================== BENZENE REACTIONS & MISCELLANEOUS (Questions 43-50, idx 42-49) ====================
    {
        question: "Benzene reacts with propanoyl chloride (C₂H₅COCl) in the presence of AlCl₃ to give",
        options: ["phenyl ethyl ketone (propiophenone, C₆H₅COC₂H₅) and HCl", "propylbenzene and HCl", "benzoic acid and propane", "phenol and propene"],
        answer: "A",
        explanation: "Friedel-Crafts acylation: AlCl₃ generates the acylium ion (RCO⁺) which electrophilically substitutes a ring hydrogen, giving a ketone."
    },
    {
        question: "In the presence of AlCl₃, an acid anhydride reacting with benzene gives",
        options: ["an aromatic ketone (acylbenzene) and a carboxylic acid", "two esters", "an alkylbenzene and water", "phenol and HCl"],
        answer: "A",
        explanation: "(RCO)₂O + C₆H₆ → C₆H₅COR + RCOOH. One acyl group substitutes on the ring; the other leaves as a carboxylic acid."
    },
    {
        question: "When ethyne (acetylene, HC≡CH) is heated over activated charcoal at high temperature, it cyclotrimerizes to give",
        options: ["benzene (C₆H₆)", "cyclohexane (C₆H₁₂)", "ethene (C₂H₄)", "graphite"],
        answer: "A",
        explanation: "3HC≡CH → C₆H₆. This reaction demonstrates the relationship between alkynes and aromatic chemistry."
    },
    {
        question: "Tollens' reagent (used in the silver mirror test) is composed of",
        options: ["ammoniacal silver nitrate solution, [Ag(NH₃)₂]⁺ in NaOH", "Cu²⁺ ions in alkaline sodium tartrate (Benedict's reagent)", "acidic potassium permanganate solution", "Zn-Hg amalgam in concentrated HCl"],
        answer: "A",
        explanation: "Tollens' = [Ag(NH₃)₂]OH. Aldehydes reduce Ag⁺ to Ag (silver mirror); ketones do not react. Option B is Benedict's; C is Baeyer's test; D is Clemmensen."
    },
    {
        question: "Treating an alkene with cold dilute alkaline KMnO₄ (Baeyer's reagent) produces",
        options: ["a vicinal diol (glycol) — two –OH groups added across the double bond", "a ketone and CO₂", "a carboxylic acid only", "an epoxide"],
        answer: "A",
        explanation: "Cold dilute KMnO₄ gives syn-dihydroxylation: –C=C– → –C(OH)–C(OH)–. The purple permanganate turns colourless/brown — also used as a test for unsaturation."
    },
    {
        question: "The iodoform (CHI₃) formed in the iodoform reaction is identified by its",
        options: ["yellow colour and characteristic medicinal (antiseptic) smell", "white colour and odourless nature", "red colour and sweet fruity smell", "blue colour and ammonia smell"],
        answer: "A",
        explanation: "CHI₃ (iodoform) is a pale yellow crystalline solid with a distinct antiseptic/medicinal odour, formerly used as an antiseptic wound dressing."
    },
    {
        question: "The ethanol-water mixture forms a constant-boiling azeotrope that boils at",
        options: ["78°C (approximately 95.6% w/w ethanol)", "100°C (pure water boiling point)", "64°C (pure methanol boiling point)", "120°C"],
        answer: "A",
        explanation: "The ethanol-water azeotrope (95.6% ethanol by weight) boils at 78.1°C. Simple distillation cannot separate it further; other methods (molecular sieves) are needed."
    },
    {
        question: "An amine reacting with a carboxylic acid at elevated temperature produces",
        options: ["an amide and water", "an ester and water", "an imine and CO₂", "a salt only"],
        answer: "A",
        explanation: "RNH₂ + R'COOH → R'CONHR + H₂O on heating. At room temperature only a salt forms; heating dehydrates it to give the amide."
    },

    // ==================== ISOMERISM (Questions 51-53, idx 50-52) ====================
    {
        question: "Structural (constitutional) isomers are compounds that have",
        options: ["the same molecular formula but different connectivity of atoms", "the same molecular formula and same connectivity but different arrangement in space", "different molecular formulae but similar properties", "mirror-image arrangements of their atoms"],
        answer: "A",
        explanation: "Structural isomers share molecular formula but differ in bond connectivity. Example: butane and isobutane (both C₄H₁₀), or ethanol and dimethyl ether (both C₂H₆O)."
    },
    {
        question: "Which pair of compounds are structural isomers of each other?",
        options: ["Ethanol (CH₃CH₂OH) and dimethyl ether (CH₃OCH₃)", "Ethanol and propanol", "Methane and ethane", "Benzene (C₆H₆) and cyclohexane (C₆H₁₂)"],
        answer: "A",
        explanation: "Both ethanol and dimethyl ether have molecular formula C₂H₆O but differ in connectivity (–OH vs –O– linkage). They are functional group isomers."
    },
    {
        question: "For geometric (cis-trans) isomerism to exist in an alkene, each carbon of the double bond must have",
        options: ["two different substituents (different groups on each sp² carbon)", "four identical groups in total", "no substituents at all", "only one substituent per carbon"],
        answer: "A",
        explanation: "Restricted rotation around C=C means cis (same side) and trans (opposite side) isomers exist only when each doubly-bonded carbon carries two DIFFERENT groups."
    },

    // ==================== ENANTIOMERS & CHIRALITY (Questions 54-56, idx 53-55) ====================
    {
        question: "Enantiomers are defined as stereoisomers that are",
        options: ["non-superimposable mirror images of each other", "superimposable mirror images (identical)", "structural isomers with the same physical properties", "compounds differing only in the position of a double bond"],
        answer: "A",
        explanation: "Enantiomers are like left and right hands — mirror images that cannot be superimposed. They occur when a molecule has at least one chiral (asymmetric) carbon centre."
    },
    {
        question: "A carbon atom is described as a chiral centre (asymmetric carbon) when it is bonded to",
        options: ["four different substituents (all four groups are different)", "four identical groups", "two identical and two different groups", "only two groups (sp-hybridised carbon)"],
        answer: "A",
        explanation: "An sp³ carbon with four different groups lacks a plane of symmetry, giving rise to two non-superimposable mirror images (enantiomers)."
    },
    {
        question: "Enantiomers have identical physical properties EXCEPT for",
        options: ["the direction in which they rotate plane-polarised light (+/−)", "boiling point", "melting point", "solubility in non-chiral solvents"],
        answer: "A",
        explanation: "Enantiomers rotate polarised light equally but in opposite directions: one is dextrorotatory (+), the other levorotatory (−). All other physical properties are identical."
    },

    // ==================== EPOXIDES (Questions 57-60, idx 56-59) ====================
    {
        question: "Epoxides (oxiranes) are cyclic compounds characterised by",
        options: ["a three-membered ring containing one oxygen atom", "a five-membered ring containing one oxygen", "a six-membered ring containing two oxygens", "an oxygen bonded to two carbons in an open chain"],
        answer: "A",
        explanation: "Epoxides have a highly strained three-membered ring (C–O–C). High ring strain makes them far more reactive than ordinary ethers."
    },
    {
        question: "Epoxides are most commonly prepared by reacting an alkene with",
        options: ["a peroxyacid (peracid) such as mCPBA or peroxoacetic acid", "concentrated H₂SO₄", "hot acidic KMnO₄", "HBr in the absence of peroxides"],
        answer: "A",
        explanation: "RC=CR + RCO₃H → epoxide + RCOOH. Peracids deliver an oxygen atom in a concerted syn addition, preserving the alkene's stereochemistry in the product."
    },
    {
        question: "Under acid-catalysed conditions, ring opening of an epoxide with water gives",
        options: ["a trans-diol (anti addition — nucleophile attacks from the opposite face)", "a cis-diol (syn addition)", "a ketone and an aldehyde", "an ether with no ring opening"],
        answer: "A",
        explanation: "Acid catalysis protonates the epoxide oxygen; water attacks the more substituted carbon via SN2-like inversion → trans (anti) vicinal diol."
    },
    {
        question: "Under basic (nucleophilic) conditions, ring opening of an unsymmetrical epoxide by a nucleophile occurs preferentially at",
        options: ["the less substituted carbon (SN2 attack at the less hindered site)", "the more substituted carbon", "both carbons simultaneously", "only the oxygen atom"],
        answer: "A",
        explanation: "Under basic conditions, nucleophiles (e.g. OH⁻, RO⁻, R₂NH) attack via SN2 at the less hindered (less substituted) carbon, giving a trans product with inversion."
    },

    // ==================== AMINE CHEMISTRY (Questions 61-91, idx 60-90) ====================
    {
        question: "Which of the following is true for the basicity of amines?",
        options: ["Alkylamines are generally less basic than arylamines because nitrogen is sp hybridised", "Arylamines are generally more basic than alkylamines due to the aryl group", "Arylamines are generally less basic than alkylamines due to delocalisation of the lone pair into the benzene ring", "Alkylamines are generally less basic than arylamines because the lone pair on N in alkylamines is not delocalised"],
        answer: "C",
        explanation: "In aniline, the lone pair on N is delocalised into the benzene π-system, making it less available for protonation → arylamines are weaker bases than alkylamines."
    },
    {
        question: "How many structural isomers are possible for C₃H₉N?",
        options: ["4", "2", "5", "3"],
        answer: "A",
        explanation: "C₃H₉N has 4 structural isomers: n-propylamine, isopropylamine (both 1°), ethylmethylamine (2°), and trimethylamine (3°)."
    },
    {
        question: "Which of the following statements is incorrect for primary amines?",
        options: ["On reaction with nitrous acid, alkylamines produce an alcohol", "On reaction with nitrous acid, arylamines produce phenol directly", "Alkylamines are more basic than ammonia", "Alkylamines are more basic than arylamines"],
        answer: "B",
        explanation: "Arylamines react with HNO₂ to give diazonium salts (ArN₂⁺), not phenol directly. Phenol results only after subsequent hydrolysis. Statement B is incorrect."
    },
    {
        question: "Aniline (C₆H₅NH₂) is less basic than",
        options: ["Benzylamine (C₆H₅CH₂NH₂)", "Triphenylamine ((C₆H₅)₃N)", "p-Nitroaniline", "Diphenylamine"],
        answer: "A",
        explanation: "Benzylamine is a primary aliphatic amine (pKa ≈ 9.3) — far more basic than aniline (pKa ≈ 4.6) whose lone pair is delocalised into the ring."
    },
    {
        question: "Which of the following is formed when an alkyl primary amine reacts with nitrous acid (HNO₂)?",
        options: ["Alkyl nitrite", "Secondary amine", "Nitroalkane", "Alcohol"],
        answer: "D",
        explanation: "R-NH₂ + HNO₂ → R-N₂⁺ (unstable diazonium) → R-OH + N₂. The diazonium salt of an alkyl amine is too unstable and immediately decomposes to an alcohol."
    },
    {
        question: "In which of the following reactions does an amide get converted to an amine?",
        options: ["Claisen condensation", "Hofmann degradation", "Kekule rearrangement", "Perkin reaction"],
        answer: "B",
        explanation: "Hofmann degradation: RCONH₂ + Br₂ + 4KOH → RNH₂ + K₂CO₃ + 2KBr + 2H₂O. The product amine has one fewer carbon than the starting amide."
    },
    {
        question: "Which of the following compounds gives a secondary amine on reduction with LiAlH₄?",
        options: ["Methyl cyanide (CH₃CN)", "Nitroethane (CH₃CH₂NO₂)", "Methyl isocyanide (CH₃NC)", "Acetamide (CH₃CONH₂)"],
        answer: "C",
        explanation: "Methyl isocyanide (CH₃-N≡C) on reduction with LiAlH₄ gives CH₃NHCH₃ (dimethylamine), a secondary amine. Nitriles give primary amines."
    },
    {
        question: "Which of the following is formed in the reaction of an aldehyde with a primary amine?",
        options: ["Ketone", "Aromatic acid", "Schiff's base (imine)", "Carboxylic acid"],
        answer: "C",
        explanation: "RCHO + R'NH₂ → RCH=NR' + H₂O. The product is a Schiff's base (imine), formed by condensation of the aldehyde carbonyl with the primary amine."
    },
    {
        question: "The amine formed from an amide by Hofmann degradation (Br₂/NaOH) has:",
        options: ["The same number of carbon atoms as the amide", "One carbon atom fewer than the amide", "One more carbon atom than the amide", "Two more carbon atoms than the amide"],
        answer: "B",
        explanation: "Hofmann degradation removes the carbonyl carbon as CO₂, giving a primary amine with n–1 carbons: e.g., CH₃CH₂CONH₂ → CH₃CH₂NH₂."
    },
    {
        question: "The compound X formed in CH₃CN → (Na/C₂H₅OH) → X is:",
        options: ["CH₃CONH₂ (acetamide)", "CH₃CH₂NH₂ (ethylamine)", "C₂H₆ (ethane)", "CH₃NHCH₃ (dimethylamine)"],
        answer: "B",
        explanation: "Reduction of a nitrile (CH₃CN) with Na/ethanol gives a primary amine: CH₃CN + 4[H] → CH₃CH₂NH₂ (ethylamine)."
    },
    {
        question: "Ethylamine can be prepared by Hofmann degradation (Br₂ and caustic potash) of",
        options: ["Acetamide (CH₃CONH₂)", "Formamide (HCONH₂)", "Propionamide (CH₃CH₂CONH₂)", "Methyl cyanide (CH₃CN)"],
        answer: "C",
        explanation: "Hofmann of propionamide (3C amide) removes one carbon → ethylamine (2C primary amine, CH₃CH₂NH₂)."
    },
    {
        question: "Reduction of nitroalkanes (R–NO₂) with H₂/Ni or Fe/HCl yields",
        options: ["Alcohol", "Carboxylic acid", "Amine", "Diazo compound"],
        answer: "C",
        explanation: "R–NO₂ + 6[H] → R–NH₂ + 2H₂O. Reduction of any nitro compound gives the corresponding primary amine."
    },
    {
        question: "What is the name of the reaction in which acetamide (CH₃CONH₂) is converted to methylamine (CH₃NH₂) using Br₂ and NaOH?",
        options: ["Huffman reaction", "Friedel-Crafts reaction", "Hofmann reaction", "Hinsberg reaction"],
        answer: "C",
        explanation: "The Hofmann degradation converts an amide to an amine with one fewer carbon: CH₃CONH₂ → CH₃NH₂."
    },
    {
        question: "When methyl iodide is heated with excess ammonia, the product obtained is",
        options: ["Methylamine only", "Dimethylamine only", "Trimethylamine only", "A mixture of methylamine, dimethylamine, and trimethylamine"],
        answer: "D",
        explanation: "Exhaustive alkylation: NH₃ → CH₃NH₂ → (CH₃)₂NH → (CH₃)₃N, giving a mixture of all three amines (plus tetramethylammonium iodide)."
    },
    {
        question: "Which of the following gives a secondary amine on reduction?",
        options: ["Nitromethane (CH₃NO₂)", "Nitrobenzene (C₆H₅NO₂)", "Methyl isocyanide (CH₃NC)", "Methyl cyanide (CH₃CN)"],
        answer: "C",
        explanation: "CH₃NC + 4[H] → CH₃NHCH₃ (dimethylamine, secondary). Nitriles and nitro compounds give primary amines on reduction."
    },
    {
        question: "When ethanol vapour is mixed with ammonia and passed over alumina (Al₂O₃) at high temperature, the product is",
        options: ["C₂H₅NH₂ (ethylamine)", "C₂H₄ (ethene)", "C₂H₅OC₂H₅ (diethyl ether)", "CH₃OCH₃ (dimethyl ether)"],
        answer: "A",
        explanation: "C₂H₅OH + NH₃ → (Al₂O₃, heat) → C₂H₅NH₂ + H₂O. Alumina catalyses substitution of –OH by –NH₂."
    },
    {
        question: "Among isomeric amines with formula C₃H₉N, which should be most volatile (lowest boiling point)?",
        options: ["(CH₃)₃N (trimethylamine)", "CH₃CH₂CH₂NH₂ (n-propylamine)", "CH₃CH₂NHCH₃ (ethylmethylamine)", "None — all have identical boiling points"],
        answer: "A",
        explanation: "Tertiary amines have no N–H bonds, so they cannot H-bond with each other. This gives (CH₃)₃N the lowest boiling point (3°C) among the C₃H₉N isomers."
    },
    {
        question: "The nitrogen atom in an amino group (–NH₂) is hybridised as",
        options: ["sp", "sp²", "sp³", "sp³d"],
        answer: "C",
        explanation: "Nitrogen in amines has a lone pair and three bonds; all four electron domains adopt sp³ hybridisation, giving a pyramidal geometry."
    },
    {
        question: "The formula C₃H₉N cannot represent",
        options: ["A primary amine", "A secondary amine", "A tertiary amine", "A quaternary ammonium salt"],
        answer: "D",
        explanation: "Quaternary ammonium salts have formula R₄N⁺X⁻. C₃H₉N (neutral) can represent 1°, 2°, or 3° amines, but NOT a quaternary salt (which would be C₃H₁₂N⁺ for N with 4 organic groups)."
    },
    {
        question: "Which of the following IUPAC names is correct?",
        options: ["(CH₃CH₂)₂NCH₃ = N-Ethyl-N-methylethanamine", "(CH₃)₃CNH₂ = 2,2-Dimethyl-N-propanamine", "CH₃NHCH(CH₃)₂ = Isopropylmethylamine", "(CH₃)₂CHNH₂ = propan-1-amine"],
        answer: "A",
        explanation: "(CH₃CH₂)₂NCH₃: parent = ethanamine, N-substituents = N-methyl and N-ethyl → N-Ethyl-N-methylethanamine. Options B, C, D contain incorrect IUPAC names."
    },
    {
        question: "When excess ethyl iodide is treated with ammonia, the product is",
        options: ["Ethylamine (C₂H₅NH₂)", "Diethylamine ((C₂H₅)₂NH)", "Triethylamine ((C₂H₅)₃N)", "Tetraethylammonium iodide [(C₂H₅)₄N]⁺I⁻"],
        answer: "D",
        explanation: "Exhaustive alkylation with excess alkyl halide drives the reaction all the way to the quaternary ammonium salt."
    },
    {
        question: "Secondary amines can be prepared by reduction of",
        options: ["Nitro compounds (R–NO₂)", "N-Substituted amides (RCONHR)", "Isonitriles (R–NC)", "Nitriles (R–CN)"],
        answer: "C",
        explanation: "R–NC + 4[H] → R–NHCH₃ (secondary amine). Reduction of nitriles gives primary amines; reduction of nitro compounds also gives primary amines."
    },
    {
        question: "Which of the following amides will give ethylamine (CH₃CH₂NH₂) on reaction with sodium hypobromite (NaOBr)?",
        options: ["Butanamide (CH₃CH₂CH₂CONH₂)", "Propanamide (CH₃CH₂CONH₂)", "Acetamide (CH₃CONH₂)", "Benzamide (C₆H₅CONH₂)"],
        answer: "B",
        explanation: "Hofmann of propanamide (3C) removes one carbon → ethylamine (2C). Butanamide → propylamine; acetamide → methylamine."
    },
    {
        question: "Tertiary amines have the lowest boiling points among isomeric amines because",
        options: ["They have the highest molecular mass", "They cannot form hydrogen bonds (no N–H)", "They are more polar in nature", "They are the most basic in nature"],
        answer: "B",
        explanation: "Without N–H bonds, tertiary amines cannot H-bond with each other, so intermolecular forces are weaker → lower boiling points than 1° and 2° isomers."
    },
    {
        question: "Primary and secondary amines can be distinguished from each other by reaction with",
        options: ["Br₂/ROH", "HClO", "HNO₂ (nitrous acid)", "NH₃"],
        answer: "C",
        explanation: "With HNO₂: primary amines give unstable diazonium (→ alcohol + N₂); secondary amines give stable yellow N-nitroso compounds; tertiary amines show no visible reaction."
    },
    {
        question: "Arrange in increasing order of basicity: CH₃NH₂, (CH₃)₂NH, NH₃, C₆H₅NH₂",
        options: ["C₆H₅NH₂ < NH₃ < (CH₃)₂NH < CH₃NH₂", "CH₃NH₂ < (CH₃)₂NH < NH₃ < C₆H₅NH₂", "C₆H₅NH₂ < NH₃ < CH₃NH₂ < (CH₃)₂NH", "(CH₃)₂NH < CH₃NH₂ < NH₃ < C₆H₅NH₂"],
        answer: "C",
        explanation: "Aniline (pKa 4.6) < NH₃ (9.25) < methylamine (10.6) < dimethylamine (10.7). Arylamine weakest; secondary alkylamine strongest due to inductive electron donation."
    },
    {
        question: "Among CH₃NH₂, C₂H₅NH₂, C₃H₇NH₂, and C₆H₅NH₂, which is the LEAST basic?",
        options: ["CH₃NH₂", "C₂H₅NH₂", "C₃H₇NH₂", "C₆H₅NH₂ (aniline)"],
        answer: "D",
        explanation: "Aniline's lone pair is delocalised into the benzene ring, making it far less basic (pKa 4.6) than any alkylamine (pKa 10–11)."
    },
    {
        question: "Which of the following is amphoteric (can act as both an acid and a base) in nature?",
        options: ["CH₃NH₂ (methylamine)", "CH₃NHCH₃ (dimethylamine)", "CH₃CONH₂ (acetamide)", "N,N-Dimethylmethylamine (trimethylamine)"],
        answer: "C",
        explanation: "Acetamide has an –NH₂ group (weakly basic) and a carbonyl that can accept protons or be hydrolysed to give acidic products → amphoteric character."
    },
    {
        question: "Which of the following will be INSOLUBLE in dilute HCl?",
        options: ["C₆H₅NH₂ (aniline)", "(C₆H₅)₃N (triphenylamine)", "C₂H₅NH₂ (ethylamine)", "CH₃NHCH₃ (dimethylamine)"],
        answer: "B",
        explanation: "Triphenylamine is an extremely weak base (lone pair delocalised across three rings, pKa ≈ −5) — it does not form stable salts with dilute HCl."
    },
    {
        question: "Primary, secondary, and tertiary amines may be separated using",
        options: ["Iodoform reaction", "Diethyl oxalate", "Benzene sulfonyl chloride (Hinsberg's reagent)", "Acetyl chloride"],
        answer: "C",
        explanation: "Hinsberg's test: 1° amines give sulfonamides soluble in NaOH; 2° amines give insoluble sulfonamides; 3° amines do not react."
    },
    {
        question: "The strongest base among the following is",
        options: ["Aniline (C₆H₅NH₂)", "p-Phenylenediamine (p-H₂NC₆H₄NH₂)", "m-Nitroaniline (m-NO₂C₆H₄NH₂)", "Benzylamine (C₆H₅CH₂NH₂)"],
        answer: "D",
        explanation: "Benzylamine is a primary aliphatic amine (pKa ≈ 9.3). All arylamines are far weaker bases; m-nitroaniline is weakened further by the electron-withdrawing –NO₂ group."
    },

    // ==================== PROTEINS & AMINO ACIDS II (Questions 92-116, idx 91-115) ====================
    {
        question: "Proteins are a group of ________ found in all living matter",
        options: ["Amine-containing organic compounds", "Amine-containing inorganic compounds", "Nitrogen-containing organic compounds", "Nitrogen-containing inorganic compounds"],
        answer: "C",
        explanation: "Proteins are high-molecular-mass nitrogen-containing organic polymers of amino acids. They are found in every living cell."
    },
    {
        question: "The major elemental components of proteins include all of the following EXCEPT",
        options: ["Oxygen", "Nitrogen", "Hydrogen", "Chlorine"],
        answer: "D",
        explanation: "Proteins are composed of C, H, O, N, and sometimes S. Chlorine is NOT a major constituent of protein molecules."
    },
    {
        question: "The peptide linkage in proteins is between the",
        options: ["Amino group and carboxyl group of opposite amino acids", "Amino group and carboxyl group of adjacent amino acids", "Amino group and carboxyl group of the same amino acid", "Two amino groups of similar amino acids"],
        answer: "B",
        explanation: "The peptide bond (–CO–NH–) forms between the –COOH of one amino acid and the –NH₂ of the next (adjacent) amino acid in the chain, releasing water."
    },
    {
        question: "The chemical and physical properties of a protein are derived mainly from",
        options: ["The functional groups present in its amino acid side chains", "Its reaction potential", "Electronegative elements acting as substituents", "A hybrid of the properties of various amino acids"],
        answer: "A",
        explanation: "The R-groups (side chains) of constituent amino acids determine the protein's charge, polarity, H-bonding capacity, and ultimately its 3D structure and function."
    },
    {
        question: "The simplest (monomeric) unit of protein is",
        options: ["Nitrogen", "Amine", "Carboxylic acid", "Amino acid"],
        answer: "D",
        explanation: "Amino acids (H₂N–CHR–COOH) are the monomers that polymerise via peptide bonds to build proteins."
    },
    {
        question: "Amino acids have ________ characteristics",
        options: ["Acidic only", "Basic only", "Neutral only", "Both acidic and basic (amphoteric)"],
        answer: "D",
        explanation: "Amino acids contain both an acidic –COOH group and a basic –NH₂ group, making them amphoteric. In solution they exist as zwitterions."
    },
    {
        question: "The simplest amino acid (with –H as its side chain) is",
        options: ["Glycine (H₂N–CH₂–COOH)", "Alanine", "Valine", "Cysteine"],
        answer: "A",
        explanation: "Glycine (H₂N–CH₂–COOH) has hydrogen as its R-group — the only amino acid that is NOT chiral because C-2 carries two identical H atoms."
    },
    {
        question: "The nature of an amino acid in aqueous solution is best described as",
        options: ["Ambivalent", "Amphoteric (can donate or accept protons)", "Basic only", "Acidic only"],
        answer: "B",
        explanation: "Amino acids are amphoteric: at low pH the –NH₂ is protonated (cation); at high pH –COOH is deprotonated (anion); at intermediate pH they exist as zwitterions."
    },
    {
        question: "The following are standard classifications of amino acids EXCEPT",
        options: ["Aromatic amino acids", "Essential amino acids", "Non-essential amino acids", "Aliphatic amino acids"],
        answer: "A",
        explanation: "The primary classification in biochemistry is based on dietary requirement (essential vs non-essential) and on side-chain nature (acidic, basic, neutral). 'Aromatic' is a structural sub-category, not a primary class in most standard frameworks."
    },
    {
        question: "Examples of essential amino acids include all of the following EXCEPT",
        options: ["Lysine", "Glycine", "Histidine", "Valine"],
        answer: "B",
        explanation: "Glycine is a non-essential amino acid — the human body can synthesise it. Lysine, histidine, and valine are among the nine essential amino acids."
    },
    {
        question: "Examples of non-essential amino acids include all of the following EXCEPT",
        options: ["Alanine", "Glycine", "Proline", "Arginine"],
        answer: "D",
        explanation: "Arginine is conditionally essential (cannot always be synthesised in adequate amounts, especially in neonates and during illness). Alanine, glycine, and proline are non-essential."
    },
    {
        question: "Examples of neutral amino acids include all of the following EXCEPT",
        options: ["Alanine", "Glycine", "Lysine", "Methionine"],
        answer: "C",
        explanation: "Lysine (H₂N–(CH₂)₄–CH(NH₂)–COOH) has two amino groups → basic amino acid. Alanine, glycine, and methionine have one each of –NH₂ and –COOH → neutral."
    },
    {
        question: "Acidic amino acids have ________ amino group(s)",
        options: ["0", "1", "2", "3"],
        answer: "B",
        explanation: "Acidic amino acids (e.g. aspartic acid, glutamic acid) have 1 amino group (–NH₂) but 2 carboxyl groups (–COOH), giving a net acidic character."
    },
    {
        question: "Acidic amino acids have ________ carboxyl group(s)",
        options: ["0", "1", "2", "3"],
        answer: "C",
        explanation: "Acidic amino acids such as aspartate and glutamate possess 2 –COOH groups (one α- and one side-chain carboxyl) and 1 –NH₂ group."
    },
    {
        question: "Basic amino acids have ________ amino group(s)",
        options: ["0", "1", "2", "3"],
        answer: "C",
        explanation: "Basic amino acids (e.g. lysine) have 2 amino groups: the α-amino group and an additional basic group in the side chain (e.g. ε-amino of lysine)."
    },
    {
        question: "Basic amino acids have ________ carboxyl group(s)",
        options: ["0", "1", "2", "3"],
        answer: "B",
        explanation: "Basic amino acids have 1 carboxyl group (the α-–COOH) and 2 or more amino groups, giving them a net positive charge at physiological pH."
    },
    {
        question: "An example of a basic amino acid is",
        options: ["Alanine", "Proline", "Arginine", "Tyrosine"],
        answer: "C",
        explanation: "Arginine contains a guanidinium group in its side chain (pKa ≈ 12.5), making it highly basic. Lysine and histidine are also basic amino acids."
    },
    {
        question: "The major difference between essential and non-essential amino acids is that",
        options: ["Essential amino acids can be synthesised in the body; non-essential cannot", "Essential amino acids cannot be synthesised in the body and must come from the diet; non-essential can be synthesised", "Essential amino acids cannot be obtained from diet; non-essential can", "Essential amino acids are synthesised only in vital organs"],
        answer: "B",
        explanation: "Essential amino acids are those the body cannot synthesise in sufficient quantities and must therefore be supplied through dietary protein."
    },
    {
        question: "An example of an aromatic amino acid is",
        options: ["Tyrosine (4-hydroxyphenylalanine)", "Proline", "Arginine", "Methionine"],
        answer: "A",
        explanation: "Tyrosine has a hydroxyl-substituted phenyl (aromatic) ring as its side chain. Phenylalanine and tryptophan are the other aromatic amino acids."
    },
    {
        question: "Which of the following amino acids contains an aromatic indole ring in its side chain?",
        options: ["Tyrosine", "Phenylalanine", "Tryptophan", "Methionine"],
        answer: "C",
        explanation: "Tryptophan's distinctive side chain contains an indole ring (a benzene ring fused to a pyrrole ring), making it the bulkiest of the standard aromatic amino acids."
    },
    {
        question: "The following are forces that stabilise protein tertiary structure EXCEPT",
        options: ["Hydrophobic interactions", "Hydrogen bonds", "Ionic (electrostatic) interactions", "Hydrophilic forces"],
        answer: "D",
        explanation: "'Hydrophilic forces' is not an independent stabilising interaction. Proteins are stabilised by hydrophobic interactions, H-bonds, ionic interactions, and disulfide bonds."
    },
    {
        question: "One of the following conditions CANNOT denature a protein",
        options: ["Heat", "High pressure", "Optimal (physiological) pH", "Ionising radiation"],
        answer: "C",
        explanation: "Optimal pH is the condition under which proteins are most stable. Extremes of pH, heat, high pressure, and radiation all disrupt non-covalent interactions and denature proteins."
    },
    {
        question: "When a protein is denatured, it",
        options: ["Becomes a compact coil", "Reverts to its native (natural) state", "Unfolds to a random coil with disrupted secondary/tertiary structure", "Becomes irreversibly hardened in all cases"],
        answer: "C",
        explanation: "Denaturation unfolds the protein by breaking H-bonds, ionic bonds, and hydrophobic interactions — the peptide backbone remains intact but the 3D structure is lost."
    },
    {
        question: "One of the following is a standard chemical test for the presence of protein",
        options: ["Biuret test", "Mellanine test", "Grignard test", "Adenosine test"],
        answer: "A",
        explanation: "The Biuret test: Cu²⁺ in alkaline solution reacts with peptide bonds (≥2 peptide links) to give a violet/purple colour."
    },
    {
        question: "One of the following is NOT a method of protein purification",
        options: ["Filtration", "Centrifugation", "Adsorption chromatography", "Halogenation"],
        answer: "D",
        explanation: "Halogenation is a chemical reaction (adding halogens across bonds) — not a purification technique. Filtration, centrifugation, and chromatography are all purification methods."
    },

    // ==================== ISOMERISM & STEREOCHEMISTRY (Questions 117-140, idx 116-139) ====================
    {
        question: "The compound NOT isomeric with diethyl ether (C₄H₁₀O) is",
        options: ["n-Propyl methyl ether (CH₃OC₃H₇)", "1-Butanol (C₄H₉OH)", "2-Methyl-2-propanol ((CH₃)₃COH)", "Butanone (CH₃COC₂H₅, C₄H₈O)"],
        answer: "D",
        explanation: "Diethyl ether = C₄H₁₀O. Butanone = C₄H₈O — a different molecular formula (two fewer H). Options A, B, C are all C₄H₁₀O and are structural isomers."
    },
    {
        question: "The maximum number of structural and geometric isomers for C₄H₈ (alkene) is",
        options: ["2", "3", "4", "0"],
        answer: "C",
        explanation: "C₄H₈ alkenes: but-1-ene, cis-but-2-ene, trans-but-2-ene, and 2-methylpropene = 4 isomers (3 structural + 2 geometric for but-2-ene)."
    },
    {
        question: "Which of the following compounds will exhibit cis-trans (geometric) isomerism?",
        options: ["2-Butene (CH₃CH=CHCH₃)", "2-Butyne (CH₃C≡CCH₃)", "2-Butanol", "Butanal"],
        answer: "A",
        explanation: "2-Butene has two different groups on each sp² carbon (CH₃ and H on each carbon of C=C), so cis and trans isomers exist. Alkynes and sp³ carbons cannot show geometric isomerism."
    },
    {
        question: "The number of structural isomers of C₆H₁₄ (hexane) is",
        options: ["4", "5", "6", "7"],
        answer: "B",
        explanation: "C₆H₁₄ has 5 isomers: n-hexane, 2-methylpentane, 3-methylpentane, 2,2-dimethylbutane, and 2,3-dimethylbutane."
    },
    {
        question: "Alkenes show geometric (cis-trans) isomerism due to",
        options: ["Molecular asymmetry", "Free rotation around a single bond", "Resonance delocalisation", "Restricted rotation around the C=C double bond"],
        answer: "D",
        explanation: "The π-bond in C=C prevents free rotation, locking substituents on each carbon in fixed positions. When both carbons carry two different groups, cis and trans isomers result."
    },
    {
        question: "Keto-enol tautomerism is most readily observed in compounds containing",
        options: ["A benzene ring only", "C=C double bonds with no carbonyl", "A carbonyl group with α-hydrogen atoms (C=O adjacent to CH)", "Saturated ethers"],
        answer: "C",
        explanation: "Keto-enol tautomerism requires a carbonyl group adjacent to a carbon bearing at least one hydrogen (α-H). The α-H migrates to the oxygen, giving the enol form."
    },
    {
        question: "The number of isomeric alcohols with molecular formula C₄H₁₀O is",
        options: ["3", "4", "5", "6"],
        answer: "B",
        explanation: "C₄H₁₀O alcohols: 1-butanol, 2-butanol, 2-methyl-1-propanol, 2-methyl-2-propanol = 4 structural isomers of alcohols (excluding ethers)."
    },
    {
        question: "Consider (2R,3R)-dibromobutane and (2S,3S)-dibromobutane. Which statement is correct?",
        options: ["They are identical compounds", "They are diastereomers", "They are constitutional isomers", "They are enantiomers"],
        answer: "D",
        explanation: "(2R,3R) and (2S,3S)-dibromobutane are non-superimposable mirror images — classic enantiomers. Both configurations are inverted, making them a mirror-image pair."
    },
    {
        question: "How many optically active stereoisomers are possible for butane-2,3-diol?",
        options: ["1", "2", "3", "4"],
        answer: "B",
        explanation: "Butane-2,3-diol has three stereoisomers: (2R,3R), (2S,3S) (a pair of enantiomers — optically active), and (2R,3S) (meso — optically inactive). Only 2 are optically active."
    },
    {
        question: "An enantiomerically pure acid is treated with a racemic (50:50) mixture of an alcohol. The ester formed will be",
        options: ["An optically active diastereomeric mixture", "A pure single enantiomer", "A meso compound", "A racemic mixture"],
        answer: "A",
        explanation: "Pure (R)-acid + racemic alcohol (50% R + 50% S) → (R,R)-ester + (R,S)-ester; these are diastereomers (different melting/boiling points) and the mixture is optically active."
    },
    {
        question: "The number of stereoisomers obtained by bromination of trans-2-butene is",
        options: ["1", "2", "3", "4"],
        answer: "A",
        explanation: "Anti addition of Br₂ to trans-2-butene gives exclusively the meso-2,3-dibromobutane (one stereoisomer). The two bromines add to opposite faces, giving an internal plane of symmetry."
    },
    {
        question: "Which of the following compounds exhibits optical stereoisomerism?",
        options: ["2-Methylbutene-1", "3-Methylbutyne-1", "3-Methylbutanoic acid", "2-Methylbutanoic acid"],
        answer: "D",
        explanation: "2-Methylbutanoic acid: CH₃CH₂CH(CH₃)COOH — C-2 is bonded to CH₃, C₂H₅, COOH, and H (four different groups) → chiral centre → optical isomers exist."
    },
    {
        question: "Which of the following will exhibit geometric (cis-trans) isomerism?",
        options: ["1-Phenyl-2-butene (C₆H₅CH=CHCH₂CH₃)", "3-Phenyl-1-butene", "2-Phenyl-1-butene", "1,1-Diphenyl-1-propene"],
        answer: "A",
        explanation: "1-Phenyl-2-butene: C₆H₅CH=CHCH₂CH₃. C-1 carries C₆H₅ and H (two different groups); C-2 carries CH₂CH₃ and H (two different groups) → cis-trans isomers exist."
    },
    {
        question: "Optical isomers that are non-superimposable mirror images are called",
        options: ["Tautomers", "Diastereomers", "Enantiomers", "Metamers"],
        answer: "C",
        explanation: "Enantiomers are stereoisomers that are non-superimposable mirror images. They have identical physical properties except for the direction they rotate plane-polarised light."
    },
    {
        question: "Enantiomers have which of the following characteristics?",
        options: ["Rotate ordinary (unpolarised) light", "Have the same melting point as each other", "Are superimposable mirror images", "React with optically active molecules at the same rate"],
        answer: "B",
        explanation: "Enantiomers have identical physical properties (mp, bp, solubility) in achiral environments. They differ only in the direction (+ or −) they rotate plane-polarised light."
    },
    {
        question: "Which of the following statements is FALSE about enantiomers?",
        options: ["They rotate plane-polarised light", "They are superimposable mirror images", "They are non-superimposable mirror images", "They have the same melting point"],
        answer: "B",
        explanation: "Enantiomers are NON-superimposable mirror images — the defining property. 'Superimposable mirror images' would mean the molecules are identical (not enantiomers)."
    },
    {
        question: "A meso compound is best described as",
        options: ["An achiral molecule that contains chiral carbons (has an internal plane of symmetry)", "A chiral molecule with no stereocentres", "An optically active compound", "A compound that lacks any carbon stereocentres"],
        answer: "A",
        explanation: "A meso compound has two or more chiral centres but is achiral overall due to an internal plane (or centre) of symmetry. It is optically inactive despite having stereocentres."
    },
    {
        question: "Which of the following will be optically active?",
        options: ["Propanoic acid (CH₃CH₂COOH)", "3-Chloropropanoic acid", "2-Chloropropanoic acid (CH₃CHClCOOH)", "3-Chloropropene"],
        answer: "C",
        explanation: "2-Chloropropanoic acid: C-2 carries CH₃, Cl, COOH, and H — four different groups → chiral centre → optically active. In options A, B, D there is no chiral centre."
    },
    {
        question: "2-Butanol (CH₃CH(OH)CH₂CH₃) is optically active because it contains",
        options: ["An asymmetric (chiral) carbon at C-2", "A plane of symmetry", "A hydroxyl group", "A centre of symmetry"],
        answer: "A",
        explanation: "C-2 of 2-butanol is bonded to CH₃, OH, C₂H₅, and H — all four groups are different → chiral centre → two non-superimposable mirror images (R and S)."
    },
    {
        question: "Which of the following represents a racemic mixture?",
        options: ["75% (R)-2-butanol + 25% (S)-2-butanol", "25% (R)-2-butanol + 75% (S)-2-butanol", "50% (R)-2-butanol + 50% (S)-2-butanol", "35% (R)-2-butanol + 65% (S)-2-butanol"],
        answer: "C",
        explanation: "A racemic mixture is exactly 50% (R) and 50% (S) enantiomer — the optical rotations cancel, giving zero net optical activity."
    },
    {
        question: "Which physical property distinguishes (R)-2-butanol from (S)-2-butanol?",
        options: ["Melting point", "Solubility in common solvents", "Rotation of plane-polarised light", "Infrared spectrum"],
        answer: "C",
        explanation: "Enantiomers have identical mp, bp, and solubility in achiral solvents. The only physical difference is the direction (+/−) in which they rotate plane-polarised light."
    },
    {
        question: "Which of the following statements is TRUE?",
        options: ["All chiral molecules possess a plane of symmetry", "All achiral molecules are meso compounds", "A molecule with a single S-configuration stereocentre is always levorotatory", "A mixture of achiral compounds will be optically inactive"],
        answer: "D",
        explanation: "Achiral compounds have no net optical rotation. A mixture of achiral compounds therefore shows no optical activity. The other statements are all false."
    },
    {
        question: "Which statement is correct concerning a pair of enantiomers?",
        options: ["They rotate plane-polarised light by the same magnitude but in opposite directions", "They rotate plane-polarised light by different magnitudes in opposite directions", "They rotate plane-polarised light by different magnitudes in the same direction", "They have different melting points"],
        answer: "A",
        explanation: "Enantiomers are mirror images: one is (+) dextrorotatory, the other is (−) levorotatory, but the magnitudes of rotation (specific rotation) are identical."
    },
    {
        question: "Which statement is correct about diastereomers?",
        options: ["They are stereoisomers that are NOT enantiomers", "They are a pair of identical isomers", "They are a pair of isomers that are mirror images of each other", "All their asymmetric centres have the same configuration"],
        answer: "A",
        explanation: "Diastereomers are stereoisomers that differ at one or more (but not all) stereocentres — they are not mirror images of each other and have different physical properties."
    },

    // ==================== ALCOHOLS, CARBONYLS & MISC (Questions 141-160, idx 140-159) ====================
    {
        question: "The compound CH₃CH(OH)CH₂CH₃ is",
        options: ["Propanol", "1-Butanol", "2-Butanol (butan-2-ol)", "None of the above"],
        answer: "C",
        explanation: "CH₃CH(OH)CH₂CH₃: the –OH is on C-2 of a 4-carbon chain → 2-butanol (butan-2-ol). It is a secondary alcohol."
    },
    {
        question: "Dehydration of ethanol using conc. H₂SO₄ at 170°C produces",
        options: ["Ethane", "Ethene (by elimination)", "Propanol", "H₂SO₃"],
        answer: "B",
        explanation: "At 170°C with excess H₂SO₄, ethanol undergoes elimination (E2): CH₃CH₂OH → CH₂=CH₂ + H₂O. At 140°C, ether forms instead."
    },
    {
        question: "Isopropyl alcohol (2-propanol) is a structural isomer of",
        options: ["1-Propanol (n-propanol)", "Propylamine", "Propanoic acid", "Propionaldehyde"],
        answer: "A",
        explanation: "Both 1-propanol (CH₃CH₂CH₂OH) and 2-propanol ((CH₃)₂CHOH) have the molecular formula C₃H₈O — they are structural (constitutional) isomers."
    },
    {
        question: "Methanol (CH₃OH) is classified as",
        options: ["A primary alcohol", "A dihydric alcohol", "A secondary alcohol", "A tertiary alcohol"],
        answer: "A",
        explanation: "Methanol has –OH on a carbon bearing two H atoms (no other C). By definition it is a primary alcohol (the carbon bearing –OH is bonded to one C or none)."
    },
    {
        question: "Triphenyl carbinol ((C₆H₅)₃COH) contains",
        options: ["One phenyl group", "Two phenyl groups", "Three phenyl groups", "No phenyl groups"],
        answer: "C",
        explanation: "The prefix 'tri-phenyl' indicates three phenyl (C₆H₅–) groups. Triphenyl carbinol = (C₆H₅)₃C–OH, a tertiary alcohol."
    },
    {
        question: "The reaction C₆H₅CH₂Cl + aq. NaOH → ? produces",
        options: ["Benzyl alcohol (C₆H₅CH₂OH)", "Phenol (C₆H₅OH)", "Benzaldehyde (C₆H₅CHO)", "None of the above"],
        answer: "A",
        explanation: "Benzyl chloride undergoes SN2 substitution with OH⁻: C₆H₅CH₂Cl + NaOH → C₆H₅CH₂OH + NaCl. The product is benzyl alcohol, NOT phenol."
    },
    {
        question: "The reaction CH₃CHO + CH₃MgBr (followed by H₂O/H⁺ workup) yields",
        options: ["A primary alcohol", "A secondary alcohol (2-propanol)", "A tertiary alcohol", "A dihydric alcohol"],
        answer: "B",
        explanation: "Grignard addition to acetaldehyde: CH₃MgBr + CH₃CHO → CH₃CH(OH)CH₃ (2-propanol) after hydrolysis. The product is a secondary alcohol."
    },
    {
        question: "Ethanol, when fully oxidised with acidified KMnO₄, produces",
        options: ["Ethanal (acetaldehyde)", "Ethanoic acid (acetic acid)", "Ethane", "Ethyne"],
        answer: "B",
        explanation: "Full oxidation: CH₃CH₂OH → [CH₃CHO] → CH₃COOH. Acidified KMnO₄ is a strong oxidant that carries primary alcohols all the way to carboxylic acids."
    },
    {
        question: "When a primary amine reacts with nitrous acid (HNO₂), the products include an alcohol, water, and",
        options: ["Nitrogen oxide (NO)", "Hydrogen molecule (H₂)", "Dinitrogen tetroxide (N₂O₄)", "Nitrogen gas (N₂)"],
        answer: "D",
        explanation: "R–NH₂ + HNO₂ → R–N₂⁺ (diazonium) → R–OH + N₂↑ + H₂O. The unstable alkyl diazonium salt releases N₂ gas."
    },
    {
        question: "The reaction C₂H₅–O–C₂H₅ + H₂O (acid catalysis) produces",
        options: ["Butanol", "Propanol", "Ethanol", "None of the above"],
        answer: "C",
        explanation: "Acid hydrolysis of diethyl ether: (C₂H₅)₂O + H₂O → 2 C₂H₅OH. The product is ethanol (two moles per mole of ether)."
    },
    {
        question: "The reaction of LiAlH₄ with cyclopentanone is a reduction that produces",
        options: ["Cyclopentanoic acid", "Cyclopentanal", "Cyclopentanol", "None of the above"],
        answer: "C",
        explanation: "LiAlH₄ reduces ketones to secondary alcohols: cyclopentanone → cyclopentanol (after aqueous workup)."
    },
    {
        question: "Among LiAlH₄, H₂/Ni, and NaBH₄, which CANNOT simultaneously reduce both an isolated C=C double bond and an aldehyde group in the same molecule?",
        options: ["LiAlH₄", "H₂/Ni", "NaBH₄", "None of the above"],
        answer: "C",
        explanation: "NaBH₄ selectively reduces C=O groups but does NOT reduce isolated (non-conjugated) C=C double bonds. H₂/Ni and LiAlH₄ can reduce C=C (catalytic hydrogenation for H₂/Ni; conjugated C=C for LiAlH₄)."
    },
    {
        question: "Which of the following is NOT true about Lucas reagent (HCl/ZnCl₂)?",
        options: ["It is composed of HCl and ZnCl₂", "It is used to test for acidic compounds", "It is used to test for alcohols", "It distinguishes between primary, secondary, and tertiary alcohols"],
        answer: "B",
        explanation: "Lucas reagent tests for alcohols (and their class), not for acids. 3° alcohols react immediately; 2° react within ~5 min; 1° only react on heating."
    },
    {
        question: "Acetone (CH₃COCH₃) is also named",
        options: ["Ethanone", "Propanone", "Butanone", "Acetaldehyde"],
        answer: "B",
        explanation: "Acetone = propanone by IUPAC nomenclature (3-carbon chain with ketone at C-2: CH₃–CO–CH₃)."
    },
    {
        question: "The Clemmensen reduction (Zn-Hg / conc. HCl) converts a carbonyl compound (C=O) to",
        options: ["An alkene (C=C)", "An alkyne (C≡C)", "An alcohol (C–OH)", "An alkane (CH₂)"],
        answer: "D",
        explanation: "Clemmensen: C=O → –CH₂– (methylene group). The carbonyl is completely deoxygenated to give an alkane. Used under acidic conditions."
    },
    {
        question: "The reaction of propanal (CH₃CH₂CHO) with hydrazine (NH₂NH₂) produces a condensation product called",
        options: ["Propylhydrazone (CH₃CH₂CH=NNH₂)", "Dimethylhydrazone", "Dipropylhydrazine", "All of the above"],
        answer: "A",
        explanation: "RCHO + NH₂NH₂ → RCH=NNH₂ + H₂O. For propanal, the product is propionaldehyde hydrazone (propylhydrazone)."
    },
    {
        question: "In the presence of a strong base (NaOH), two molecules of the same aldehyde react to give",
        options: ["An aldol (β-hydroxy aldehyde)", "Two molecules of alcohol", "A ketone", "A ketone and an aldehyde"],
        answer: "A",
        explanation: "The aldol reaction: 2 RCHO → (NaOH) → RCH(OH)CH(R)CHO. An α-carbon of one aldehyde adds to the carbonyl of another, forming a β-hydroxy aldehyde."
    },
    {
        question: "In all condensation reactions of ammonia derivatives with carbonyl compounds, ________ is always formed as a by-product",
        options: ["Ammonia", "Nitrogen gas", "Water", "Water and ammonia"],
        answer: "C",
        explanation: "Condensation reactions between C=O compounds and H₂N–X reagents (hydroxylamine, hydrazine, semicarbazide, primary amines) always produce water as a by-product."
    },
    {
        question: "CH₃CH₂MgBr is an example of",
        options: ["A reducing agent", "A Grignard reagent", "An oxidising agent", "A dehydrating agent"],
        answer: "B",
        explanation: "Grignard reagents (RMgX) are organomagnesium halides prepared from alkyl/aryl halides and magnesium in dry ether. They are powerful nucleophiles/bases."
    },
    {
        question: "Hofmann degradation converts RCONH₂ to",
        options: ["RNH₂ (primary amine with n–1 carbon atoms)", "R₂NH (secondary amine)", "R₃N (tertiary amine)", "None of the above"],
        answer: "A",
        explanation: "RCONH₂ + Br₂ + 4NaOH → RNH₂ + Na₂CO₃ + 2NaBr + 2H₂O. The carbonyl carbon is lost as CO₂, giving a primary amine with one fewer carbon."
    },

    // ==================== APPLIED & INORGANIC CHEMISTRY (Questions 161-165, idx 160-164) ====================
    {
        question: "Which transition metal is commonly used as a catalyst in the Haber process for the industrial synthesis of ammonia?",
        options: ["Copper (Cu)", "Platinum (Pt)", "Iron (Fe)", "Nickel (Ni)"],
        answer: "C",
        explanation: "The Haber process: N₂ + 3H₂ ⇌ 2NH₃. Iron (Fe) with K₂O and Al₂O₃ promoters is the industrial catalyst, operating at ~450°C and 150–200 atm."
    },
    {
        question: "What type of fuel is used in commercial jet (aircraft) engines?",
        options: ["Petrol (gasoline)", "Diesel", "Natural gas (methane)", "Kerosene (Jet A / aviation turbine fuel)"],
        answer: "D",
        explanation: "Jet engines burn kerosene-based Jet A fuel (C₁₂–C₁₅ hydrocarbons). Kerosene has a higher flash point and energy density than petrol, making it suitable for aviation."
    },
    {
        question: "Which gas is commonly used in oxy-acetylene welding?",
        options: ["Methane (CH₄)", "Propane (C₃H₈)", "Acetylene/ethyne (C₂H₂)", "Hydrogen (H₂)"],
        answer: "C",
        explanation: "Oxy-acetylene welding burns C₂H₂ in O₂ to produce a flame reaching ~3500°C — hot enough to cut and weld steel. The reaction: 2C₂H₂ + 5O₂ → 4CO₂ + 2H₂O."
    },
    {
        question: "Steel is widely used in construction and engineering primarily because of its",
        options: ["Low density and extreme brittleness", "High electrical conductivity", "High ductility and malleability (can be drawn into wires and beaten into sheets)", "Natural resistance to corrosion without treatment"],
        answer: "C",
        explanation: "Steel (iron + carbon alloy) combines high tensile strength with ductility (can be drawn) and malleability (can be shaped). These mechanical properties make it ideal for structural applications."
    },
    {
        question: "An ester is a derivative compound of",
        options: ["Aldehyde", "Ketone", "Carboxylic acid (and an alcohol)", "Ether"],
        answer: "C",
        explanation: "Esters (RCOOR') are formed by the condensation of a carboxylic acid (RCOOH) with an alcohol (R'OH): RCOOH + R'OH ⇌ RCOOR' + H₂O. They are acyl derivatives of carboxylic acids."
    },

    // ==================== MUST KNOW — CURATED EXAM ESSENTIALS (Questions 166-200, idx 165-199) ====================
    {
        question: "What is the IUPAC name for CH₃CH₂OH?",
        options: ["Methanol", "Ethyl alcohol (common name only)", "Ethanol", "Propanol"],
        answer: "C",
        explanation: "CH₃CH₂OH: 2-carbon chain + –OH → ethanol (IUPAC). 'Ethyl alcohol' is the common name; IUPAC requires the -ol suffix on the parent chain."
    },
    {
        question: "The IUPAC name for (CH₃)₂CHNH₂ (isopropylamine) is",
        options: ["Propan-1-amine", "2-Methylpropan-1-amine", "N-Methylethanamine", "Propan-2-amine"],
        answer: "D",
        explanation: "(CH₃)₂CHNH₂: 3-carbon chain, –NH₂ on C-2 → propan-2-amine (IUPAC). 'Isopropylamine' is the common name."
    },
    {
        question: "The IUPAC name for CH₃COOC₂H₅ (ethyl acetate) is",
        options: ["Ethyl propanoate", "Methyl ethanoate", "Ethyl ethanoate", "Propyl methanoate"],
        answer: "C",
        explanation: "CH₃COO–C₂H₅: the acid part is ethanoic acid (CH₃COOH) and the alcohol part is ethanol (C₂H₅OH) → ethyl ethanoate."
    },
    {
        question: "The IUPAC name for (CH₃)₃N (trimethylamine) is",
        options: ["Trimethylamine (common name)", "N,N-Dimethylmethanamine", "N-Dimethylamine", "Dimethylamine"],
        answer: "B",
        explanation: "For (CH₃)₃N: parent = methanamine (CH₃NH₂), with two N-methyl substituents → N,N-Dimethylmethanamine. 'Trimethylamine' is the common name."
    },
    {
        question: "The IUPAC name for CH₃CHO (acetaldehyde) is",
        options: ["Methanal", "Propanal", "Ethanone", "Ethanal"],
        answer: "D",
        explanation: "CH₃CHO: 2-carbon chain with –CHO at C-1 → ethanal (IUPAC). The –CHO suffix is written as '-al' in the IUPAC name."
    },
    {
        question: "The functional group –NH₂ is characteristic of",
        options: ["Carboxylic acids (–COOH)", "Primary amines (R–NH₂)", "Esters (R–COO–R')", "Aldehydes (R–CHO)"],
        answer: "B",
        explanation: "The amino group (–NH₂) directly bonded to carbon defines a primary amine. Secondary amines have –NH–; tertiary amines have –N< with no N–H bonds."
    },
    {
        question: "Which functional group is present in carboxylic acids?",
        options: ["–NH₂ (amino)", "–OH alone (hydroxyl)", "–COOH (carboxyl: C=O + OH combined)", "–CHO (aldehyde)"],
        answer: "C",
        explanation: "The carboxyl group (–COOH) is unique to carboxylic acids. It combines a carbonyl (C=O) and a hydroxyl (–OH) on the same carbon."
    },
    {
        question: "The functional group present in esters is",
        options: ["–CHO (aldehyde)", "–COOH (carboxyl)", "–COO– (ester linkage)", "–OH (hydroxyl)"],
        answer: "C",
        explanation: "Esters contain the –COO– (ester) linkage: R–C(=O)–O–R'. The C=O and C–O–C together form the ester functional group."
    },
    {
        question: "What distinguishes an aldehyde from a ketone at the structural level?",
        options: ["Aldehydes have the –CHO group at the end of a carbon chain; ketones have C=O within the chain", "Aldehydes have two carbonyl groups; ketones have one", "Ketones have a terminal –CHO group; aldehydes do not", "Both have identical functional groups — no structural difference"],
        answer: "A",
        explanation: "Aldehyde: R–CHO (terminal, C=O bonded to at least one H). Ketone: R–CO–R' (internal, C=O bonded to two carbon groups). This structural difference drives their different reactivity."
    },
    {
        question: "The amide linkage (–CO–NH–) found in proteins and nylon is formed by reaction between",
        options: ["Two carboxylic acid groups", "An amine group (–NH₂) and a carboxylic acid group (–COOH) — condensation", "Two alcohol groups", "An ether and water"],
        answer: "B",
        explanation: "Condensation: –COOH + H₂N– → –CO–NH– + H₂O. In proteins this gives the peptide bond; in nylon it gives the amide repeat unit."
    },
    {
        question: "The Hinsberg test uses benzene sulfonyl chloride (C₆H₅SO₂Cl) to",
        options: ["Oxidise amines to nitroso compounds", "Distinguish primary, secondary, and tertiary amines", "Prepare diazonium salts", "Reduce nitro groups"],
        answer: "B",
        explanation: "Hinsberg test: 1° amine → NaOH-soluble sulfonamide; 2° amine → NaOH-insoluble sulfonamide; 3° amine → no reaction. Used to classify unknown amines."
    },
    {
        question: "Hofmann degradation of propionamide (CH₃CH₂CONH₂) with Br₂/NaOH gives",
        options: ["Propylamine (CH₃CH₂CH₂NH₂)", "Ethylamine (CH₃CH₂NH₂)", "Methylamine (CH₃NH₂)", "Aniline (C₆H₅NH₂)"],
        answer: "B",
        explanation: "Propionamide (3C amide) undergoes Hofmann → ethylamine (2C primary amine). The rule: product has one fewer carbon than the starting amide."
    },
    {
        question: "Arylamines (e.g. aniline) are weaker bases than alkylamines because",
        options: ["They have higher molecular mass", "The lone pair on N is delocalised into the aromatic ring, reducing its availability for protonation", "They contain more carbon atoms", "They form stronger hydrogen bonds with water"],
        answer: "B",
        explanation: "In aniline, resonance delocalises the N lone pair into the benzene ring: C₆H₅–NH₂ ↔ quinoid forms. This stabilises aniline more than its conjugate acid → weaker base."
    },
    {
        question: "The correct order of basicity in aqueous solution is",
        options: ["(CH₃)₂NH > CH₃NH₂ > NH₃ > C₆H₅NH₂", "C₆H₅NH₂ > NH₃ > CH₃NH₂ > (CH₃)₂NH", "NH₃ > C₆H₅NH₂ > CH₃NH₂ > (CH₃)₂NH", "CH₃NH₂ > (CH₃)₂NH > C₆H₅NH₂ > NH₃"],
        answer: "A",
        explanation: "Basicity (pKa of conjugate acid): dimethylamine (10.7) > methylamine (10.6) > NH₃ (9.25) > aniline (4.6). Arylamines are weakest due to lone-pair delocalisation."
    },
    {
        question: "When an alkyl primary amine reacts with NaNO₂/HCl (nitrous acid), the main organic product is",
        options: ["A secondary amine", "A stable N-nitroso compound (yellow oil)", "A nitrile (R–CN)", "An alcohol (R–OH) via unstable diazonium decomposition"],
        answer: "D",
        explanation: "R–NH₂ + HNO₂ → R–N₂⁺ (alkyl diazonium, unstable) → R–OH + N₂↑. Alkyl diazonium salts are too unstable to isolate; the main product is the alcohol."
    },
    {
        question: "The Biuret test is used to detect",
        options: ["The presence of glucose (reducing sugar)", "The presence of peptide bonds in proteins", "Aldehyde groups", "Starch"],
        answer: "B",
        explanation: "Biuret test: Cu²⁺ (alkaline solution) + peptide bonds → violet complex. A positive result (violet/purple) confirms the presence of protein (≥2 peptide bonds)."
    },
    {
        question: "The peptide bond (–CO–NH–) in proteins forms between",
        options: ["The –COOH of one amino acid and the –NH₂ of the next amino acid", "Two –NH₂ groups", "Two –COOH groups", "An –OH group and a –NH₂ group"],
        answer: "A",
        explanation: "–COOH + H₂N– → –CO–NH– + H₂O. This condensation at the α-carboxyl and α-amino groups builds the polypeptide backbone."
    },
    {
        question: "The simplest naturally occurring amino acid is",
        options: ["Alanine", "Valine", "Glycine (H₂N–CH₂–COOH, R = H)", "Serine"],
        answer: "C",
        explanation: "Glycine has H as its R-group. It is the smallest amino acid and the only one that is NOT chiral (C-α bears two H atoms)."
    },
    {
        question: "Essential amino acids must be obtained from the diet because",
        options: ["They are needed for energy production only", "The human body cannot synthesise them in sufficient amounts", "They are found only in animal proteins", "They contain sulfur in their side chains"],
        answer: "B",
        explanation: "Essential amino acids (e.g. valine, leucine, isoleucine, lysine, methionine, phenylalanine, threonine, tryptophan, histidine) cannot be biosynthesised in the body in adequate amounts."
    },
    {
        question: "At physiological pH (~7.4), amino acids exist predominantly as",
        options: ["Neutral uncharged molecules", "Fully protonated cations (–NH₃⁺ and –COOH)", "Zwitterions (–NH₃⁺ and –COO⁻ on the same molecule)", "Fully deprotonated anions (–NH₂ and –COO⁻)"],
        answer: "C",
        explanation: "At physiological pH, the –NH₂ group is protonated (–NH₃⁺, pKa ≈ 9) and the –COOH is deprotonated (–COO⁻, pKa ≈ 2), giving a neutral overall charge but an internally charged zwitterion."
    },
    {
        question: "Enantiomers can be distinguished by",
        options: ["Their boiling points", "Their solubility in water", "The direction in which they rotate plane-polarised light", "Their molecular formulae"],
        answer: "C",
        explanation: "Enantiomers have identical bp, mp, and solubility in achiral media. Optical rotation (measured by a polarimeter) is the only simple physical measurement that distinguishes them."
    },
    {
        question: "A racemic mixture contains",
        options: ["Only the R-enantiomer in excess", "Equal amounts (50:50) of R and S enantiomers → net optical rotation = 0", "A mixture of diastereomers", "A single meso compound"],
        answer: "B",
        explanation: "A racemate (racemic mixture) is an equimolar mixture of two enantiomers. Their opposite rotations cancel exactly, giving zero optical activity."
    },
    {
        question: "For cis-trans (geometric) isomerism to exist in an alkene, the requirement is that",
        options: ["Each carbon of C=C is bonded to only one substituent", "The molecule must have a chiral carbon", "Each doubly-bonded carbon must carry TWO DIFFERENT substituents", "The molecule must contain at least 6 carbons"],
        answer: "C",
        explanation: "If either carbon of C=C has two identical groups, the cis and trans 'isomers' are actually identical. Both must carry different groups to give distinct cis and trans forms."
    },
    {
        question: "A chiral (asymmetric) carbon atom has",
        options: ["Only two substituents", "Three identical substituents", "Four different substituents (sp³ carbon with no plane of symmetry)", "A double bond"],
        answer: "C",
        explanation: "A tetrahedral sp³ carbon bearing four different groups is chiral. It has no plane, axis, or centre of symmetry, and its mirror image cannot be superimposed on it."
    },
    {
        question: "Constitutional (structural) isomers are compounds that have",
        options: ["The same atom connectivity but different spatial arrangement", "Non-superimposable mirror-image arrangements", "The same molecular formula but DIFFERENT atom connectivity (different bonding)", "Identical physical properties"],
        answer: "C",
        explanation: "Constitutional isomers share the molecular formula but differ in which atoms are bonded to which. Example: ethanol (CH₃CH₂OH) and dimethyl ether (CH₃OCH₃), both C₂H₆O."
    },
    {
        question: "Addition of a Grignard reagent (RMgX) to an aldehyde (R'CHO), followed by aqueous workup, gives",
        options: ["A primary alcohol", "A secondary alcohol", "A tertiary alcohol", "A ketone"],
        answer: "B",
        explanation: "RMgX + R'CHO → R'CH(OH)R (after H₂O/H⁺). The Grignard carbon adds to the aldehyde carbonyl → secondary alcohol (one C from Grignard + one C from CHO)."
    },
    {
        question: "Tollens' test (silver mirror test) gives a positive result (silver mirror) with",
        options: ["Ketones only", "Aldehydes only (they reduce Ag⁺ to Ag; ketones do not)", "Both aldehydes and ketones", "Carboxylic acids only"],
        answer: "B",
        explanation: "Aldehydes: RCHO + 2[Ag(NH₃)₂]⁺ → RCOO⁻ + 2Ag↓ (mirror) + ... Ketones lack the aldehyde H needed for this oxidation, so they give no reaction."
    },
    {
        question: "Saponification (alkaline hydrolysis of an ester with NaOH) produces",
        options: ["An alcohol and a carboxylic acid (acid hydrolysis products)", "Soap (fatty acid sodium salt) and glycerol (from fats/oils)", "A ketone and water", "An ether and CO₂"],
        answer: "B",
        explanation: "Fat (triglyceride) + 3NaOH → glycerol + 3 fatty acid sodium salts (soap). Alkaline hydrolysis is irreversible (unlike acid hydrolysis) because the carboxylate salt cannot re-esterify."
    },
    {
        question: "The iodoform test gives a yellow precipitate (CHI₃) with compounds containing",
        options: ["The –COOH group", "The –NH₂ group", "The CH₃CO– (methyl ketone) group or CH₃CH(OH)– (secondary alcohol oxidisable to methyl ketone)", "The –CHO group in all aldehydes"],
        answer: "C",
        explanation: "Iodoform test is positive for: CH₃COR (methyl ketones), CH₃CH(OH)R (secondary alcohols oxidised to methyl ketones in situ), and ethanol (CH₃CH₂OH → acetaldehyde)."
    },
    {
        question: "Heating ethanol with excess conc. H₂SO₄ at 170°C (elimination conditions) gives primarily",
        options: ["Diethyl ether", "Ethene (CH₂=CH₂)", "Ethanoic acid", "Ethyl hydrogen sulfate"],
        answer: "B",
        explanation: "At 170°C (high temp, excess H₂SO₄): C₂H₅OH → CH₂=CH₂ + H₂O (dehydration/elimination). At 140°C the ether forms instead."
    },
    {
        question: "Glucose (an aldose) and fructose (a ketose) are both C₆H₁₂O₆. They differ in that glucose has a/an ________ group while fructose has a/an ________ group.",
        options: ["Aldehyde / ketone", "Ketone / aldehyde", "Alcohol / ether", "Ester / aldehyde"],
        answer: "A",
        explanation: "Glucose is an aldohexose (–CHO at C-1); fructose is a ketohexose (C=O at C-2). Both are reducing sugars but due to different carbonyl positions."
    },
    {
        question: "Glucose is a reducing sugar because it",
        options: ["Dissolves readily in water", "Contains a free aldehyde group that can be oxidised (reduces Cu²⁺ or Ag⁺)", "Is a disaccharide", "Contains a keto group"],
        answer: "B",
        explanation: "The free aldehyde (–CHO) of glucose acts as a reducing agent in Fehling's/Benedict's/Tollens' tests, being oxidised to a carboxylate while Cu²⁺ → Cu₂O or Ag⁺ → Ag."
    },
    {
        question: "Acid hydrolysis of an ester (RCOOR') gives",
        options: ["An amine and CO₂", "An alcohol (R'OH) and a carboxylic acid (RCOOH)", "An aldehyde and water", "A ketone and an alkene"],
        answer: "B",
        explanation: "RCOOR' + H₂O ⇌ (H⁺) ⇌ RCOOH + R'OH. Acid hydrolysis is the reverse of esterification — both the acid and alcohol are recovered."
    },
    {
        question: "Oxidation of a primary alcohol (RCH₂OH) using acidified K₂Cr₂O₇ can give",
        options: ["An alkene only", "A secondary alcohol", "An aldehyde (with controlled oxidation) or a carboxylic acid (with excess oxidant)", "No reaction — primary alcohols are not oxidised"],
        answer: "C",
        explanation: "Primary alcohols: RCH₂OH → [controlled] → RCHO (aldehyde) → [excess] → RCOOH. Using reflux with excess K₂Cr₂O₇ takes the reaction to the carboxylic acid."
    },
    {
        question: "The characteristic reaction mechanism for carbonyl compounds (C=O in aldehydes and ketones) is",
        options: ["Electrophilic substitution", "Free-radical chain reaction", "Nucleophilic addition", "Elimination (E2)"],
        answer: "C",
        explanation: "The electrophilic carbonyl carbon (C=O, δ+) is attacked by nucleophiles (Nu⁻ or Nu:), making nucleophilic addition the fundamental mechanism for aldehyde and ketone reactions."
    }
];

// Total: 200 questions covering CHM 102 exam-relevant topics

