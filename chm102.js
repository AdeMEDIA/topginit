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
    }
];

// Total: 60 questions covering exam-relevant CHM 102 topics
