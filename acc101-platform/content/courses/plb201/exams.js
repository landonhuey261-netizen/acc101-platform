// Plumbing 201 — Midterm and Final exams.
// All questions are original to these exams (same topics as module quizzes, fresh scenarios and numbers).
// Every explanation covers why the correct answer is right AND why each wrong choice is wrong.

module.exports = {
  midterm: {
    title: "Midterm Exam",
    minutes: 75,
    coverage: "Modules 1–6",
    questions: [
      {
        module: 1,
        q: "Michigan's plumbing code is based on the 2021 IPC (2nd printing). It became effective on:",
        choices: ["January 1, 2021", "March 12, 2024", "July 15, 2026", "October 22, 2026"],
        answer: 1,
        explanation: "Correct (b): The 2021 Michigan Plumbing Code, based on the 2021 IPC (2nd printing), took effect March 12, 2024. (a) 2021 is the edition year, not the effective date. (c) July 15, 2026 is when a proposed move to the 2024 IPC was published, not adopted. (d) October 22, 2026 is the date the 2024 proposal was confirmed as not yet filed."
      },
      {
        module: 1,
        q: "The Authority Having Jurisdiction (AHJ) on a Michigan plumbing job is most often:",
        choices: ["The ICC's head office", "The local building department's plumbing inspector", "The plumbing supply house", "The fixture manufacturer"],
        answer: 1,
        explanation: "Correct (b): The local plumbing inspector enforces the adopted code through permits and inspections. (a) The ICC writes the model code but enforces nothing. (c) A supplier sells material and has no enforcement power. (d) A manufacturer certifies products, not installations."
      },
      {
        module: 1,
        q: "A plumber wants to use a new pipe material that is not listed in the IPC. The legal route is:",
        choices: ["Install it and tell the inspector later", "Get AHJ approval as an equivalent alternative before the work is covered", "Use it if the supplier recommends it", "Use it on residential jobs only"],
        answer: 1,
        explanation: "Correct (b): The alternative materials and methods provision lets the AHJ approve an equivalent, in writing, before cover-up. (a) Installing first and asking later is not a route. (c) A supplier's recommendation is not an approval. (d) The rule is the same for residential and commercial work."
      },
      {
        module: 1,
        q: "Michigan uses the IPC, not the UPC. A UPC-based video says a private water closet is 4 DFU. On a Michigan job the correct IPC value is:",
        choices: ["4 DFU", "3 DFU", "2 DFU", "5 DFU"],
        answer: 1,
        explanation: "Correct (b): IPC Table 709.1 gives a private 1.6 gpf water closet 3.0 DFU. (a) 4 DFU is the UPC value and the public IPC value. (c) 2 DFU is a bathtub or shower. (d) 5 DFU is a bathroom group."
      },
      {
        module: 2,
        q: "In the IPC, Chapter 6 governs:",
        choices: ["Sanitary drainage", "Vents", "Water supply and distribution", "Storm drainage"],
        answer: 2,
        explanation: "Correct (c): Chapter 6 is Water Supply and Distribution. (a) Sanitary drainage is Chapter 7. (b) Vents are Chapter 9. (d) Storm drainage is Chapter 11."
      },
      {
        module: 2,
        q: "The citation 1002.2 points to:",
        choices: ["Chapter 10, Section 1002, subsection .2", "Chapter 1, Section 002, table 2", "The 1002nd page of the code", "Table 2 of Chapter 10"],
        answer: 0,
        explanation: "Correct (a): Citations read left to right — chapter, section, subsection. (b) The chapter is 10, not 1. (c) Citations are not page numbers. (d) It is a section with a table, not 'Table 2.'"
      },
      {
        module: 2,
        q: "When a code question turns on what a word means, the first place to look is:",
        choices: ["Chapter 3", "The index", "Chapter 2, Definitions", "The appendix"],
        answer: 2,
        explanation: "Correct (c): Chapter 2 is the code's dictionary. (a) Chapter 3 is General Regulations. (b) The index finds locations, not meanings. (d) Appendices hold supplementary material."
      },
      {
        module: 2,
        q: "A table in the IPC gives a pipe size, but a footnote under the table sets a larger minimum for that application. Which governs?",
        choices: ["The table value, because footnotes are only suggestions", "The footnote, because it is part of the table", "Whichever is smaller", "The manufacturer's instructions"],
        answer: 1,
        explanation: "Correct (b): Footnotes are part of the table and can override its values. (a) Footnotes are code text, not suggestions. (c) The footnote's minimum governs even when it is larger. (d) Manufacturer instructions do not override code footnotes."
      },
      {
        module: 3,
        q: "Under Chapter 1, plumbing work must be inspected:",
        choices: ["Only if the owner requests it", "Before it is covered up", "After the building is occupied", "Only on commercial jobs"],
        answer: 1,
        explanation: "Correct (b): Rough-in inspection happens before walls are closed. (a) Inspection is a code requirement, not an owner option. (c) Inspecting after occupancy is too late to see the piping. (d) Residential work is inspected too."
      },
      {
        module: 3,
        q: "The lowest horizontal drainage piping inside a building is the:",
        choices: ["Building sewer", "Building drain", "Vent stack", "Leader"],
        answer: 1,
        explanation: "Correct (b): The building drain is the piping inside the building. (a) The building sewer begins where the drain leaves the building. (c) A vent stack carries air, not waste. (d) A leader carries storm water."
      },
      {
        module: 3,
        q: "Chapter 3 requires copper water pipe passing through wood studs to be protected by:",
        choices: ["Paint", "Steel nail plates", "Foam insulation only", "A larger pipe size"],
        answer: 1,
        explanation: "Correct (b): Shield plates stop nails and screws from piercing the pipe. (a) Paint protects nothing from a screw. (c) Insulation protects against temperature, not puncture. (d) A larger pipe is still pierced by a screw."
      },
      {
        module: 3,
        q: "A 40-foot hot-water run is installed tight between two fixed points with no offset or loop. The Chapter 3 problem is:",
        choices: ["Water hammer", "Thermal expansion with nowhere to go", "Low pressure", "Galvanic corrosion"],
        answer: 1,
        explanation: "Correct (b): Heating makes the pipe grow; without room to move it stresses fittings. (a) Water hammer is a pressure surge from sudden valve closure. (c) Pressure is unrelated to expansion. (d) Galvanic corrosion needs dissimilar metals in contact."
      },
      {
        module: 4,
        q: "A business occupancy has an occupant load of 50 (25 male, 25 female). Table 403.1 requires 1 water closet per 25 of each sex for the first 50. How many water closets are required in total?",
        choices: ["1", "2", "3", "4"],
        answer: 1,
        explanation: "Correct (b): Men: 25 ÷ 25 = 1; women: 25 ÷ 25 = 1; total 2. (a) 1 would serve only one sex. (c) 3 double-counts one side. (d) 4 would require a ratio of 1 per 12.5."
      },
      {
        module: 4,
        q: "A fixture-count calculation gives 3.4 lavatories for women. The code requires:",
        choices: ["3 lavatories", "4 lavatories", "3 lavatories and a mop sink", "3.4 lavatories"],
        answer: 1,
        explanation: "Correct (b): Fixture counts always round up to the next whole fixture. (a) Rounding down leaves the building short of the minimum. (c) A mop sink is a different fixture type and does not cover a lavatory. (d) A fraction of a fixture cannot be installed."
      },
      {
        module: 4,
        q: "Urinals may substitute for men's water closets:",
        choices: ["Without limit", "Only where Table 403.1 allows, never below its minimum water closet count", "Only in homes", "Only when the women's room is larger"],
        answer: 1,
        explanation: "Correct: (b). Substitution is allowed within the table's limits and never below its minimum. (a) There is always a minimum water closet count. (c) Urinal substitution is a public/commercial rule. (d) The women's room size is irrelevant."
      },
      {
        module: 4,
        q: "A building has the correct number of water closets and lavatories but no accessible water closet. It:",
        choices: ["Passes, because the count is correct", "Fails, because accessible fixtures are required", "Passes if the owner agrees in writing", "Fails only if an inspector measures it"],
        answer: 1,
        explanation: "Correct (b): Accessibility is a code requirement, separate from the count. (a) Count and accessibility are independent requirements. (c) An owner cannot waive the code. (d) The code applies whether or not anyone measures."
      },
      {
        module: 5,
        q: "A house has 1 private flush-tank water closet (2.2 WSFU), 2 private lavatories (0.7 each), and 1 private bathtub (1.4). The total WSFU is:",
        choices: ["4.0", "5.0", "6.0", "7.0"],
        answer: 1,
        explanation: "Correct (b): 2.2 + 1.4 + 1.4 = 5.0 WSFU. (a) 4.0 forgets one lavatory. (c) 6.0 adds an extra fixture. (d) 7.0 adds cold and hot values to the total, which the table forbids."
      },
      {
        module: 5,
        q: "On the flush-tank demand curve, 20 WSFU equals:",
        choices: ["14.6 gpm", "19.6 gpm", "29.1 gpm", "43.5 gpm"],
        answer: 1,
        explanation: "Correct (b): 20 FU = 19.6 gpm. (a) 14.6 gpm is 10 FU. (c) 29.1 gpm is 50 FU. (d) 43.5 gpm is 100 FU."
      },
      {
        module: 5,
        q: "Table 604.3 requires a bathtub supply outlet to deliver at least:",
        choices: ["2 gpm at 8 psi", "4 gpm at 20 psi", "3 gpm at 15 psi", "25 gpm at 25 psi"],
        answer: 1,
        explanation: "Correct (b): Bathtub = 4 gpm at 20 psi. (a) That is a shower. (c) That is a close-coupled tank water closet. (d) That is a flushometer-valve water closet."
      },
      {
        module: 5,
        q: "A public flushometer water closet carries 10.0 WSFU while a private tank water closet carries 2.2, mainly because:",
        choices: ["Public toilets are physically larger", "The flushometer draws a large flow in a few seconds, while a tank refills slowly", "Public water is colder", "Tank toilets are banned in public buildings"],
        answer: 1,
        explanation: "Correct (b): The instantaneous draw is what the fixture unit captures. (a) Physical size does not set fixture units. (c) Water temperature is irrelevant. (d) Tank toilets are not banned in public buildings."
      },
      {
        module: 6,
        q: "A private bathroom group (1.6 gpf water closet, lavatory, tub/shower) is counted as:",
        choices: ["6 DFU", "5 DFU", "4 DFU", "3 DFU"],
        answer: 1,
        explanation: "Correct (b): The bathroom-group row gives 5 DFU. (a) 6 DFU is the sum of the individual values (3+1+2), which the group row replaces. (c) and (d) are below both the group and the individual totals."
      },
      {
        module: 6,
        q: "Table 704.1 requires a 2-inch horizontal drain to slope at least:",
        choices: ["1/16 inch per foot", "1/8 inch per foot", "1/4 inch per foot", "1/2 inch per foot"],
        answer: 2,
        explanation: "Correct (c): Pipe 2-1/2 inches and smaller needs 1/4 inch per foot. (a) 1/16 is for 8 inches and larger. (b) 1/8 is for 3 to 6 inches. (d) 1/2 inch per foot is a sizing-table slope, not the minimum."
      },
      {
        module: 6,
        q: "A building drain serves 40 DFU including a water closet, at 1/4 inch per foot. The required size is:",
        choices: ["2 inches", "3 inches", "4 inches", "5 inches"],
        answer: 1,
        explanation: "Correct (b): Table 710.1(1) gives a 3-inch drain 42 DFU at 1/4 in/ft, covering 40, and the footnote requires at least 3 inches for a drain serving a water closet. (a) 2 inches carries only 21 DFU and violates the footnote. (c) 4 inches is allowed but not required. (d) 5 inches is oversized."
      },
      {
        module: 6,
        q: "A 3-inch horizontal branch may carry a maximum of:",
        choices: ["3 DFU", "20 DFU", "42 DFU", "160 DFU"],
        answer: 1,
        explanation: "Correct (b): Table 710.1(2): 3-inch branch = 20 DFU. (a) 3 DFU is a 1-1/2-inch branch. (c) 42 DFU is a 3-inch building drain at 1/4 in/ft. (d) 160 DFU is a 4-inch branch."
      },
      {
        module: 6,
        q: "A designer sizes a drain using water supply fixture units (2.2) instead of drainage fixture units (3.0) for a water closet. The result is:",
        choices: ["An oversized drain", "An undersized drain, because the load is understated", "No difference", "A correctly sized vent"],
        answer: 1,
        explanation: "Correct (b): 2.2 is smaller than 3.0, so the drain is sized for less load than it carries. (a) It would undersize, not oversize. (c) The two numbers differ by nearly a third. (d) The drain is undersized; the vent is a separate calculation."
      }
    ]
  },
  final: {
    title: "Final Exam",
    minutes: 120,
    coverage: "Modules 1–12",
    questions: [
      {
        module: 1,
        q: "The IPC becomes law in Michigan through:",
        choices: ["Publication by the ICC", "Adoption by LARA's Bureau of Construction Codes as Part 7", "A vote of local plumbers", "A manufacturer's listing"],
        answer: 1,
        explanation: "Correct (b): Adoption by LARA makes the model code enforceable law. (a) Publication only creates the book. (c) Plumbers do not vote a code into law. (d) A listing certifies a product, not a code."
      },
      {
        module: 2,
        q: "Which chapter governs traps, interceptors, and separators?",
        choices: ["Chapter 8", "Chapter 9", "Chapter 10", "Chapter 11"],
        answer: 2,
        explanation: "Correct (c): Chapter 10 is Traps, Interceptors and Separators. (a) Chapter 8 is Indirect/Special Waste. (b) Chapter 9 is Vents. (d) Chapter 11 is Storm Drainage."
      },
      {
        module: 3,
        q: "Work covered before the rough-in inspection:",
        choices: ["Is automatically approved", "Can be ordered uncovered at the installer's expense", "Only needs a photo", "Is fine if the plumber is licensed"],
        answer: 1,
        explanation: "Correct (b): The AHJ may require work to be exposed for inspection. (a) Covering work never approves it. (c) A photo is not an inspection. (d) A license does not replace inspection."
      },
      {
        module: 4,
        q: "An assembly occupancy has 260 occupants (130 male, 130 female). The table requires 1 men's water closet per 125 and 1 women's per 65. How many water closets are required in total?",
        choices: ["3", "4", "5", "6"],
        answer: 1,
        explanation: "Correct (b): Men: 130 ÷ 125 = 1.04, which rounds up to 2. Women: 130 ÷ 65 = 2 exactly. Total 2 + 2 = 4. (a) 3 ignores the rounding on the men's side. (c) 5 adds a fixture that the ratios do not require. (d) 6 double-counts."
      },
      {
        module: 5,
        q: "A building totals 100 WSFU on the flush-tank curve. Its design flow is:",
        choices: ["14.6 gpm", "19.6 gpm", "29.1 gpm", "43.5 gpm"],
        answer: 3,
        explanation: "Correct (d): 100 FU = 43.5 gpm. (a) 14.6 gpm is 10 FU. (b) 19.6 gpm is 20 FU. (c) 29.1 gpm is 50 FU."
      },
      {
        module: 6,
        q: "A 12-foot run of 1-1/2-inch horizontal drain is installed. What minimum total drop does Table 704.1 require?",
        choices: ["1-1/2 inches", "3 inches", "1 inch", "6 inches"],
        answer: 1,
        explanation: "Correct (b): 1-1/2-inch pipe needs 1/4 inch per foot; 12 × 1/4 = 3 inches. (a) 1-1/2 inches would be 1/8 inch per foot, the 3–6 inch rate. (c) 1 inch is far too flat. (d) 6 inches would be 1/2 inch per foot, more than required."
      },
      {
        module: 7,
        q: "The minimum air gap for a 1-1/2-inch indirect waste pipe is:",
        choices: ["1 inch", "2 inches", "3 inches", "4 inches"],
        answer: 2,
        explanation: "Correct (c): Twice the diameter = 3 inches. (a) 1 inch is the absolute minimum, exceeded here by the twice-diameter rule. (b) 2 inches is not twice 1-1/2 inches. (d) 4 inches is twice a 2-inch pipe."
      },
      {
        module: 7,
        q: "Which fixture must discharge indirectly?",
        choices: ["A water closet", "A bathtub", "An ice machine", "A lavatory"],
        answer: 2,
        explanation: "Correct (c): Ice machines must discharge indirectly to protect ice from sewage. (a), (b), and (d) are ordinary fixtures that connect directly through traps."
      },
      {
        module: 8,
        q: "A dry vent must rise at least how far above the flood-level rim before turning horizontal?",
        choices: ["2 inches", "4 inches", "6 inches", "12 inches"],
        answer: 2,
        explanation: "Correct (c): At least 6 inches above the flood-level rim. (a) and (b) are below the requirement. (d) 12 inches exceeds the minimum."
      },
      {
        module: 8,
        q: "The minimum size of a vent is:",
        choices: ["3/4 inch", "1 inch", "1-1/4 inches", "2 inches"],
        answer: 2,
        explanation: "Correct (c): The code's minimum vent size is 1-1/4 inches. (a) and (b) are below the minimum. (d) 2 inches is common but not the minimum."
      },
      {
        module: 9,
        q: "Table 1002.2 allows a 1-1/2-inch trap arm a maximum of:",
        choices: ["5 feet", "6 feet", "8 feet", "12 feet"],
        answer: 1,
        explanation: "Correct (b): 1-1/2-inch trap arm = 6 feet. (a) 5 feet is the 1-1/4-inch maximum. (c) 8 feet is the 2-inch maximum. (d) 12 feet is the 3-inch maximum."
      },
      {
        module: 9,
        q: "A grease interceptor that has not been pumped in two years and now passes grease to the drain has failed because:",
        choices: ["Grease interceptors destroy grease and it ran out", "The interceptor stores grease and was never emptied, so it filled up", "The baffles dissolved", "The drain is too large"],
        answer: 1,
        explanation: "Correct (b): An interceptor stores grease; when full, new grease passes through. (a) Interceptors do not destroy grease. (c) Baffles do not dissolve in normal service. (d) Drain size does not cause grease pass-through."
      },
      {
        module: 10,
        q: "A 4,000 sq ft roof at 4 in/hr produces a design flow of:",
        choices: ["104.2 gpm", "166.7 gpm", "192 gpm", "96 gpm"],
        answer: 1,
        explanation: "Correct (b): 4 × 4,000 ÷ 96 = 166.7 gpm. (a) 104.2 gpm is a 2,500 sq ft roof. (c) 192 gpm is a 4-inch leader's capacity, not the flow. (d) 96 is the divisor in Equation 11-1."
      },
      {
        module: 10,
        q: "A 3-inch vertical leader carries a maximum of:",
        choices: ["30 gpm", "54 gpm", "92 gpm", "192 gpm"],
        answer: 2,
        explanation: "Correct (c): Table 1106.3: 3-inch leader = 92 gpm. (a) 30 gpm is a 2-inch leader. (b) 54 gpm is a 2-1/2-inch leader. (d) 192 gpm is a 4-inch leader."
      },
      {
        module: 11,
        q: "In the 2021 IPC, medical gas systems are in:",
        choices: ["Chapter 11", "Chapter 12", "Chapter 13", "Chapter 14"],
        answer: 1,
        explanation: "Correct (b): Chapter 12 is Special Piping, including medical gas. (a) Chapter 11 is Storm Drainage. (c) Chapter 13 is Nonpotable Water. (d) Chapter 14 is graywater."
      },
      {
        module: 11,
        q: "Graywater includes water from:",
        choices: ["Toilets and kitchen sinks", "Lavatories, showers, bathtubs, and laundry", "Swimming pools", "Boilers"],
        answer: 1,
        explanation: "Correct (b): Graywater is lightly used water from those fixtures. (a) Toilet and kitchen sink water is blackwater. (c) Pool water is chemically treated. (d) Boiler water is not graywater."
      },
      {
        module: 12,
        q: "On the Michigan journeyman written exam, the best use of a question that needs a lookup you cannot finish in a minute is to:",
        choices: ["Spend as long as it takes", "Flag it, mark a best guess, and return after the rest are answered", "Leave it blank", "Skip it permanently"],
        answer: 1,
        explanation: "Correct (b): Flag and return protects pace and points. (a) One question can eat three questions' time. (c) A blank is worth less than a guess. (d) Skipping permanently loses the point."
      },
      {
        module: 1,
        q: "An amendment to the IPC is:",
        choices: ["A change, deletion, or addition made by the adopting government", "A typo correction in the next printing", "A manufacturer's instruction", "A plumber's margin note"],
        answer: 0,
        explanation: "Correct (a): Amendments are the adopting government's changes and are part of the enforceable code. (b) A printing correction is not a legal amendment. (c) Manufacturer instructions do not change the code. (d) Margin notes have no legal effect."
      },
      {
        module: 2,
        q: "In code language, 'shall not' means:",
        choices: ["You may do it", "You must do it", "You must not do it", "You should consider it"],
        answer: 2,
        explanation: "Correct (c): 'Shall not' is a prohibition. (a) That is 'may.' (b) That is 'shall.' (d) 'Should' is advisory, not prohibitory."
      },
      {
        module: 3,
        q: "Chapter 3 requires materials to be:",
        choices: ["The cheapest available", "Listed and labeled to the standards the code names", "Made in the United States", "Approved by the supply house"],
        answer: 1,
        explanation: "Correct (b): Listed and labeled to a named standard is the code's material test. (a) Price is not a code criterion. (c) The code does not require domestic manufacture. (d) A supplier's approval has no code standing."
      },
      {
        module: 4,
        q: "Family or assisted-use toilet rooms are:",
        choices: ["A substitute for separate facilities", "Required in larger assembly and mercantile occupancies, in addition to separate facilities", "Required in every home", "Only for employees"],
        answer: 1,
        explanation: "Correct (b): They are extra rooms, on top of the separate facilities. (a) They do not replace separate facilities. (c) They are a public-occupancy requirement. (d) They serve the public, not only employees."
      },
      {
        module: 5,
        q: "A private lavatory carries how many total WSFU?",
        choices: ["2.0", "1.4", "0.7", "2.2"],
        answer: 2,
        explanation: "Correct (c): Private lavatory = 0.7 total. (a) 2.0 is a public lavatory. (b) 1.4 is a private bathtub or kitchen sink. (d) 2.2 is a private flush-tank water closet."
      },
      {
        module: 6,
        q: "A 4-inch building drain at 1/8 inch per foot carries a maximum of:",
        choices: ["42 DFU", "180 DFU", "216 DFU", "250 DFU"],
        answer: 1,
        explanation: "Correct (b): Table 710.1(1): 4 inch at 1/8 in/ft = 180 DFU. (a) 42 DFU is a 3-inch drain at 1/4 in/ft. (c) 216 DFU is a 4-inch drain at 1/4 in/ft. (d) 250 DFU is a 4-inch drain at 1/2 in/ft."
      },
      {
        module: 7,
        q: "An air break differs from an air gap because:",
        choices: ["It is larger", "It has no minimum distance requirement", "It requires a trap", "It is only for outdoor use"],
        answer: 1,
        explanation: "Correct (b): An air break is a separation without the air gap's minimum. (a) An air gap is the larger, measured separation. (c) Both discharge into trapped receptors. (d) Location is not the distinction."
      },
      {
        module: 8,
        q: "A vent terminal must be at least:",
        choices: ["6 inches above the roof and 10 feet from openings", "2 inches above the roof and 3 feet from openings", "12 inches above the roof and 20 feet from openings", "Flush with the roof and 5 feet from openings"],
        answer: 0,
        explanation: "Correct (a): 6 inches above the roof, 10 feet from openings (or 3 feet above them). (b) Both numbers are too small. (c) Both numbers exceed the minimums. (d) A flush terminal would admit rain and debris."
      },
      {
        module: 9,
        q: "Which trap type is prohibited because it siphons its own seal?",
        choices: ["P-trap", "S-trap", "Running trap", "Deep-seal trap"],
        answer: 1,
        explanation: "Correct (b): An S-trap's shape lets discharge pull the seal out. (a) A P-trap is the standard compliant trap. (c) A running trap is a different fitting. (d) A deep-seal trap is legitimate."
      },
      {
        module: 10,
        q: "Secondary (emergency) roof drainage is required because:",
        choices: ["Primary drains are always too small", "A clogged primary drain must not be able to flood the roof", "It looks better", "The code requires two of everything"],
        answer: 1,
        explanation: "Correct (b): Scuppers or a second drain set give water a way off if the primary drains clog. (a) Primary drains are sized for the same storm. (c) Appearance is not the reason. (d) The code requires a secondary path for safety."
      },
      {
        module: 11,
        q: "Reclaimed water piping is identified by:",
        choices: ["Red paint", "Purple pipe or purple marking", "No marking", "Blue tape only"],
        answer: 1,
        explanation: "Correct (b): The code requires purple identification for reclaimed water piping. (a) Red is not the reclaimed-water color. (c) Unmarked nonpotable piping is a cross-connection hazard. (d) Tape alone is not the code's marking method."
      },
      {
        module: 12,
        q: "The Michigan journeyman written exam has how many questions and how much time?",
        choices: ["100 questions, 120 minutes", "125 questions, 180 minutes", "50 questions, 60 minutes", "200 questions, 240 minutes"],
        answer: 1,
        explanation: "Correct (b): 125 questions, 180 minutes, open book, via PSI. (a) That is closer to an NCCER level test. (c) Too short and too few. (d) No such Michigan format exists."
      },
      {
        module: 2,
        q: "A cross-reference that says 'in accordance with Section 705' means:",
        choices: ["Section 705 is only a suggestion", "You must read Section 705 as well, because the answer may depend on it", "Section 705 says the same thing", "You may ignore it if you are short on time"],
        answer: 1,
        explanation: "Correct (b): A cross-reference makes the other section part of the answer. (a) Cross-references are binding. (c) The referenced section usually adds a distinct requirement. (d) The lookup is unfinished until the reference is read."
      },
      {
        module: 3,
        q: "The building drain ends and the building sewer begins:",
        choices: ["At the public sewer main", "Where the drainage piping leaves the building", "At the first cleanout", "At the water meter"],
        answer: 1,
        explanation: "Correct (b): The building drain is inside; the sewer starts where it leaves. (a) The sewer ends at the public main. (c) A cleanout is an access fitting, not a boundary. (d) The water meter is on the supply side."
      },
      {
        module: 4,
        q: "Table 403.1 is organized by:",
        choices: ["Pipe size", "Occupancy, with separate male and female ratios", "Water pressure", "Roof area"],
        answer: 1,
        explanation: "Correct (b): Occupancy picks the row; male and female ratios are separate columns. (a) Pipe size is not a fixture-count input. (c) Water pressure is a Chapter 6 matter. (d) Roof area is for storm drainage."
      },
      {
        module: 5,
        q: "Pipe size in Appendix E is selected using:",
        choices: ["Total WSFU, available pressure, and developed length", "The number of fixtures only", "The building's roof area", "The water heater size"],
        answer: 0,
        explanation: "Correct (a): All three inputs drive the sizing tables. (b) Fixture count alone ignores pressure and length. (c) Roof area is for storm drainage. (d) The water heater does not size the distribution piping."
      },
      {
        module: 6,
        q: "A clothes washer (domestic standpipe) is worth how many DFU?",
        choices: ["1.0", "2.0", "3.0", "4.0"],
        answer: 2,
        explanation: "Correct (c): Clothes washer = 3.0 DFU. (a) 1.0 is a lavatory. (b) 2.0 is a bathtub, shower, or kitchen sink. (d) 4.0 is a public 1.6 gpf water closet."
      },
      {
        module: 7,
        q: "A waste receptor must be:",
        choices: ["Untrapped and unvented", "Trapped, vented, accessible, and sized for the flow", "Installed below the fixture with no air gap", "Connected directly to the water supply"],
        answer: 1,
        explanation: "Correct (b): Receptors are fixtures in their own right. (a) An untrapped receptor would admit sewer gas. (c) The air gap is the point of the arrangement. (d) A receptor connects to the drainage system."
      },
      {
        module: 8,
        q: "The IPC allows how many bathroom groups on a single wet vent?",
        choices: ["One", "Two", "Three", "Four"],
        answer: 1,
        explanation: "Correct (b): The IPC allows up to two bathroom groups on one wet vent. (a) One is the UPC limit. (c) and (d) exceed the IPC's allowance."
      },
      {
        module: 9,
        q: "A hydromechanical grease interceptor is rated in:",
        choices: ["Gallons per minute and pounds of grease capacity", "Square feet of floor area", "Number of seats", "Inches of pipe diameter only"],
        answer: 0,
        explanation: "Correct (a): Flow rate and grease-retention capacity are the ratings. (b) Floor area does not set interceptor size. (c) Seat count is a fixture-count input. (d) Pipe size alone does not size an interceptor."
      },
      {
        module: 10,
        q: "The design rainfall rate is the:",
        choices: ["Average annual rainfall", "100-year, 1-hour rainfall rate for the location", "Wettest month's average", "Rate from the nearest other state"],
        answer: 1,
        explanation: "Correct (b): The code designs for the 100-year, 1-hour storm at the location. (a) An average understates the design storm. (c) A monthly average is not a design rate. (d) Rates are location-specific."
      },
      {
        module: 11,
        q: "The ASSE 6010 medical gas installer credential requires:",
        choices: ["4 years experience, a 32-hour course, a 100-question exam, and a brazing exam at 80% penetration", "No experience and a 4-hour course", "A plumbing license only", "A 100-question exam only"],
        answer: 0,
        explanation: "Correct (a): All four elements are required, valid 3 years. (b) Experience and training are both required. (c) A license alone does not qualify an installer. (d) The exam is one part of a four-part requirement."
      },
      {
        module: 12,
        q: "A practice answer that gives a private water closet as 4 DFU is an example of:",
        choices: ["The swapped-verb pattern", "The UPC-number pattern", "The ignored-footnote pattern", "The wrong-edition pattern"],
        answer: 1,
        explanation: "Correct (b): 4 DFU is the UPC value; the IPC value is 3. (a) No verb was swapped. (c) No footnote was involved. (d) The value differs by code, not by IPC edition."
      }
    ]
  }
};
