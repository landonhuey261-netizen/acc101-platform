// Plumbing 121 — Midterm and Final exams.
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
        q: "A DWV system moves wastewater by:",
        choices: ["A pump at the base of each stack", "Municipal water pressure", "Gravity through sloped piping", "Suction from the roof vent"],
        answer: 2,
        explanation: "Correct (c): DWV piping has no pump and no pressure; fall is the only engine. (a) No pump exists in a normal DWV system. (b) Municipal pressure drives the supply side. (d) The vent supplies air; it does not suck waste along."
      },
      {
        module: 1,
        q: "A 2-inch horizontal drain runs 12 feet. Its minimum total fall under IPC Table 704.1 is:",
        choices: ["1-1/2 inches", "2 inches", "3 inches", "4 inches"],
        answer: 2,
        explanation: "Correct (c): 2-inch pipe slopes at least 1/4 inch per foot, so 12 x 1/4 = 3 inches. (a) would be the fall at 1/8 inch per foot, the wrong row. (b) is the fall at 1/6 inch per foot. (d) is the fall at 1/3 inch per foot."
      },
      {
        module: 1,
        q: "The pipe segment that carries waste from the building to the public sewer main is the:",
        choices: ["Building drain", "Building sewer", "Soil stack", "Trap arm"],
        answer: 1,
        explanation: "Correct (b): The building sewer runs from 2 feet outside the building wall to the public main or septic system. (a) The building drain is the lowest horizontal pipe inside the building. (c) The soil stack is the vertical pipe inside. (d) The trap arm is the short pipe between a trap and its vent."
      },
      {
        module: 1,
        q: "Under IPC Table 704.1, the minimum slope for 3-inch horizontal drainage piping is:",
        choices: ["1/16 inch per foot", "1/8 inch per foot", "1/4 inch per foot", "1/2 inch per foot"],
        answer: 1,
        explanation: "Correct (b): 3-inch pipe falls in the 3- through 6-inch group at 1/8 inch per foot. (a) is the minimum for 8-inch and larger pipe. (c) applies only to 2-1/2-inch and smaller pipe. (d) is steeper than any code minimum."
      },
      {
        module: 2,
        q: "Under IPC Table 709.1, a domestic kitchen sink is assigned:",
        choices: ["1 DFU", "2 DFU", "3 DFU", "5 DFU"],
        answer: 1,
        explanation: "Correct (b): A domestic kitchen sink is 2 DFU. (a) is a lavatory. (c) is a clothes washer. (d) is the private bathroom-group value."
      },
      {
        module: 2,
        q: "A private bathroom group (water closet, lavatory, bathtub/shower on one branch) totals:",
        choices: ["3 DFU", "5 DFU", "6 DFU", "9 DFU"],
        answer: 1,
        explanation: "Correct (b): The private bathroom-group value is 5 DFU. (a) is a single private water closet. (c) is the public bathroom-group value and also the sum of the individual private values. (d) has no basis in the table."
      },
      {
        module: 2,
        q: "A house has one private bathroom group, a kitchen sink, a dishwasher, and a clothes washer. The total DFU on the building drain is:",
        choices: ["11 DFU", "12 DFU", "14 DFU", "17 DFU"],
        answer: 1,
        explanation: "Correct (b): Bathroom group 5 + kitchen sink 2 + dishwasher 2 + clothes washer 3 = 12 DFU. (a) drops the dishwasher. (c) counts the bathroom as 6 (the individual sum) instead of the group value 5, plus an error. (d) counts the bathroom as 8."
      },
      {
        module: 2,
        q: "Under IPC Table 709.2, a fixture with a 1-1/2-inch trap is assigned:",
        choices: ["1 DFU", "2 DFU", "3 DFU", "5 DFU"],
        answer: 1,
        explanation: "Correct (b): Table 709.2 assigns 2 DFU to a 1-1/2-inch fixture drain or trap. (a) is a 1-1/4-inch trap. (c) is a 2-inch trap. (d) is a 3-inch trap."
      },
      {
        module: 3,
        q: "Under IPC 1002.4, a trap seal of 1-1/2 inches is:",
        choices: ["Acceptable for a lavatory", "Acceptable for a floor drain", "Below the 2-inch minimum and a code failure", "Acceptable if the trap is vented"],
        answer: 2,
        explanation: "Correct (c): IPC 1002.4 requires a seal of not less than 2 inches and not more than 4 inches; 1-1/2 inches fails. (a) and (b) No fixture type is exempt from the minimum. (d) Venting does not change the seal-depth rule."
      },
      {
        module: 3,
        q: "Under IPC Table 909.1, the maximum trap-arm length for a 1-1/4-inch trap is:",
        choices: ["3 feet", "5 feet", "6 feet", "8 feet"],
        answer: 1,
        explanation: "Correct (b): A 1-1/4-inch trap arm may run 5 feet at 1/4 inch per foot. (a) is below the limit. (c) is the 1-1/2-inch limit. (d) is the 2-inch limit."
      },
      {
        module: 3,
        q: "A basement floor drain smells like sewer after sitting unused for a year. The most likely cause is:",
        choices: ["Siphonage from a flushing toilet", "Evaporation of the trap seal", "Backpressure from the stack", "A cracked building sewer"],
        answer: 1,
        explanation: "Correct (b): An unused trap loses seal water to the air. (a) Siphonage needs a discharge event and a venting fault. (c) Backpressure needs positive drain pressure. (d) A cracked sewer would show other signs and would not be tied to disuse."
      },
      {
        module: 3,
        q: "A 2-inch trap arm runs 8 feet at 1/4 inch per foot. Its total fall is 2 inches. This layout:",
        choices: ["Fails the one-pipe-diameter rule", "Passes: the fall equals exactly one pipe diameter and Table 909.1 allows 8 feet", "Fails Table 909.1", "Passes only for a water closet"],
        answer: 1,
        explanation: "Correct (b): The fall of 2 inches equals one pipe diameter for 2-inch pipe, and Table 909.1 allows an 8-foot arm for that size. (a) The rule is met exactly, not failed. (c) 8 feet is the table maximum for 2-inch traps. (d) Water closets are exempt from the table, but this is a trap-arm case, not a water closet."
      },
      {
        module: 4,
        q: "When a toilet flushes and a nearby tub gurgles, the pressure at the tub trap at that moment is most likely:",
        choices: ["Positive, pushing the seal into the tub", "Negative (suction), pulling air through the trap water", "Atmospheric and unchanged", "Equal to the municipal water pressure"],
        answer: 1,
        explanation: "Correct (b): The falling flush water drags air along, creating suction that pulls air through the nearest trap water. (a) Positive pressure would blow the seal out, not gurgle it. (c) If pressure were unchanged, nothing would gurgle. (d) Water pressure does not act on drain traps."
      },
      {
        module: 4,
        q: "Under IPC 906.2, the minimum vent size for a 3-inch drain is:",
        choices: ["1 inch", "1-1/4 inches", "1-1/2 inches", "2 inches"],
        answer: 2,
        explanation: "Correct (c): One-half of 3 inches is 1-1/2 inches. (a) is below the absolute vent minimum. (b) is the absolute minimum vent size, used for drains up to 2 inches. (d) is the minimum for a 4-inch drain."
      },
      {
        module: 4,
        q: "Under IPC 905.5, individual vents may join together at least:",
        choices: ["At the trap weir", "6 inches above the flood-level rim of the highest fixture served", "12 inches below the roof", "At the base of the stack"],
        answer: 1,
        explanation: "Correct (b): Vents join at least 6 inches above the highest fixture's flood-level rim so a backup cannot push waste into the vents. (a) is far too low. (c) is not the rule's measurement. (d) Vents never join at the base of a stack."
      },
      {
        module: 4,
        q: "A vent with a developed length of 48 feet must be:",
        choices: ["Capped at the roof", "Increased by one nominal pipe size for its entire developed length", "Reduced by one size to increase air velocity", "Replaced with a smaller vent at the roof"],
        answer: 1,
        explanation: "Correct (b): IPC 906.2 requires vents over 40 feet developed length to go up one size for the whole run. (a) Capping a vent destroys the system. (c) Reducing the size increases friction loss. (d) A smaller vent at the roof chokes the run."
      },
      {
        module: 5,
        q: "A common vent (IPC 911) serves:",
        choices: ["One fixture trap", "Two fixtures on the same floor level", "A battery of 2 to 8 fixtures", "An entire bathroom group plus a kitchen sink"],
        answer: 1,
        explanation: "Correct (b): A common vent serves exactly two fixtures on the same floor. (a) is an individual vent. (c) is circuit venting. (d) exceeds both the fixture count and the bathroom-group limit of wet venting."
      },
      {
        module: 5,
        q: "Wet venting under IPC 912 is permitted only for:",
        choices: ["Kitchen sinks", "Laundry fixtures", "Fixtures in bathroom groups on the same floor level", "Floor drains"],
        answer: 2,
        explanation: "Correct (c): Wet venting is limited to bathroom groups on the same floor. (a) and (b) Kitchen and laundry fixtures require dry vents. (d) Floor drains use other methods, such as combination waste-and-vent systems."
      },
      {
        module: 5,
        q: "In a wet-vented bathroom group, the water closet must be:",
        choices: ["Upstream of the lavatory", "The most downstream fixture on the wet vent", "Vented by its own circuit vent", "Connected directly to the vent stack"],
        answer: 1,
        explanation: "Correct: (b). The water closet sits downstream so its discharge does not pass another fixture's trap and the lavatory flow washes the wet-vented pipe. (a) reverses the required order. (c) and (d) describe other methods."
      },
      {
        module: 5,
        q: "Circuit venting (IPC 914) may serve a battery of at most:",
        choices: ["4 fixtures", "6 fixtures", "8 fixtures", "12 fixtures"],
        answer: 2,
        explanation: "Correct (c): Circuit venting covers 2 to 8 trapped fixtures. (a) and (b) are within the range but not the cap. (d) exceeds the eight-fixture cap."
      },
      {
        module: 5,
        q: "The minimum size of a circuit vent is:",
        choices: ["1-1/4 inches", "1-1/2 inches", "2 inches", "3 inches"],
        answer: 2,
        explanation: "Correct (c): IPC 914 requires a circuit vent of at least 2 inches. (a) is the absolute minimum vent size. (b) is the minimum vent for a 3-inch drain. (d) is larger than required."
      },
      {
        module: 6,
        q: "Under IPC Table 710.1(2), a 2-inch horizontal fixture branch carries a maximum of:",
        choices: ["3 DFU", "6 DFU", "20 DFU", "21 DFU"],
        answer: 1,
        explanation: "Correct (b): A 2-inch branch carries 6 DFU. (a) is the 1-1/2-inch branch. (c) is the 3-inch branch. (d) is the 2-inch building drain at 1/4 inch per foot — the wrong table."
      },
      {
        module: 6,
        q: "Under IPC Table 710.1(1), a 3-inch building drain at 1/8 inch per foot carries a maximum of:",
        choices: ["20 DFU", "36 DFU", "42 DFU", "50 DFU"],
        answer: 1,
        explanation: "Correct (b): A 3-inch building drain at 1/8 inch per foot carries 36 DFU. (a) is the 3-inch branch capacity. (c) is the 3-inch building drain at 1/4 inch per foot. (d) is the 3-inch building drain at 1/2 inch per foot."
      },
      {
        module: 6,
        q: "A building drain carries 19 DFU at 1/4 inch per foot and serves water closets. Its smallest size is:",
        choices: ["2 inches, because Table 710.1(1) allows 21 DFU", "3 inches, because the water-closet minimum overrides capacity", "4 inches, because 19 DFU needs the larger pipe", "2 inches, because the water-closet rule applies only to branches"],
        answer: 1,
        explanation: "Correct (b): Capacity alone would allow 2-inch pipe (21 DFU), but the Table 710.1(1) footnote requires a minimum of 3 inches for any building drain serving a water closet. (a) ignores the footnote. (c) oversizes without a reason. (d) misstates the rule — it applies to building drains as well as branches."
      },
      {
        module: 6,
        q: "A 3-inch stack serving three branch intervals or fewer carries a maximum of:",
        choices: ["20 DFU", "36 DFU", "42 DFU", "48 DFU"],
        answer: 3,
        explanation: "Correct (d): Table 710.1(2) allows 48 DFU on a 3-inch stack of three branch intervals or fewer. (a) is the 3-inch branch capacity. (b) is the 3-inch building drain at 1/8 inch per foot. (c) is the 3-inch building drain at 1/4 inch per foot."
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
        q: "The three parts of a DWV system are drain, waste, and vent. The vent's job is to:",
        choices: ["Carry waste from fixtures to the stack", "Supply air to the drainage system and exhaust sewer gas outdoors", "Pressurize the drains", "Filter solids from wastewater"],
        answer: 1,
        explanation: "Correct (b): Vents equalize air pressure and exhaust gas; they carry no waste. (a) describes drain piping. (c) DWV piping is never pressurized in normal use. (d) No filter exists in a vent."
      },
      {
        module: 1,
        q: "A 4-inch horizontal drain runs 24 feet. Its minimum total fall under IPC Table 704.1 is:",
        choices: ["2 inches", "3 inches", "6 inches", "12 inches"],
        answer: 1,
        explanation: "Correct (b): 4-inch pipe slopes at least 1/8 inch per foot, so 24 x 1/8 = 3 inches. (a) would be the fall at 1/12 inch per foot. (c) is the fall at 1/4 inch per foot, the wrong row. (d) is the fall at 1/2 inch per foot."
      },
      {
        module: 2,
        q: "Under IPC Table 709.1, a public 1.6 gpf water closet is assigned:",
        choices: ["2 DFU", "3 DFU", "4 DFU", "6 DFU"],
        answer: 2,
        explanation: "Correct (c): A public 1.6 gpf water closet is 4 DFU. (a) is a bathtub or kitchen sink. (b) is the private water closet value. (d) is the public bathroom-group value."
      },
      {
        module: 2,
        q: "A branch serves a lavatory (1 DFU) and a bathtub (2 DFU). Its load is 3 DFU. Under Table 709.2 thinking, a fixture with a 2-inch trap carries 3 DFU — but which statement about this branch is correct?",
        choices: ["The branch load is 3 DFU and the bathtub's minimum trap is 1-1/2 inches", "The branch load is 6 DFU", "The lavatory needs a 2-inch trap", "The branch must be 3 inches because it carries 3 DFU"],
        answer: 0,
        explanation: "Correct (a): Lavatory 1 + bathtub 2 = 3 DFU, and Table 709.1 lists the bathtub's minimum trap at 1-1/2 inches. (b) doubles the load without a reason. (c) A lavatory takes a 1-1/4-inch trap. (d) A 3-DFU branch with no water closet is not forced to 3 inches — a 1-1/2-inch branch carries 3 DFU."
      },
      {
        module: 3,
        q: "S-traps are prohibited by IPC 1002.3 mainly because they:",
        choices: ["Cost more than P-traps", "Cannot be cleaned", "Siphon their seal water out because they have no vented trap arm", "Are too large to fit under sinks"],
        answer: 2,
        explanation: "Correct (c): An S-trap drops straight down with no vent connection, so discharge siphons the seal dry. (a) Cost is not a code reason. (b) S-traps can be cleaned; seal loss is the problem. (d) Size is not the issue — the unvented shape is."
      },
      {
        module: 3,
        q: "Under IPC Table 909.1, a 3-inch trap arm may run a maximum of:",
        choices: ["6 feet", "8 feet", "12 feet", "16 feet"],
        answer: 2,
        explanation: "Correct (c): A 3-inch trap arm may run 12 feet at 1/8 inch per foot. (a) is the 1-1/2-inch limit. (b) is the 2-inch limit. (d) is the 4-inch limit."
      },
      {
        module: 4,
        q: "A stack vent is:",
        choices: ["A separate pipe carrying waste from the top floor", "The extension of a soil or waste stack above the highest fixture connection, continuing through the roof", "A vent serving only the lowest fixture", "The cleanout at the base of a stack"],
        answer: 1,
        explanation: "Correct (b): Above the topmost branch, the stack itself becomes the vent. (a) A stack vent carries air, never waste. (c) It serves the whole stack. (d) The base cleanout is a different fitting."
      },
      {
        module: 4,
        q: "Under IPC 906.2, the smallest vent pipe allowed is:",
        choices: ["3/4 inch", "1 inch", "1-1/4 inches", "1-1/2 inches"],
        answer: 2,
        explanation: "Correct (c): IPC 906.2 sets the minimum vent size at 1-1/4 inches. (a) and (b) are below the minimum and would clog easily. (d) is the minimum for a 3-inch drain, not the absolute floor."
      },
      {
        module: 5,
        q: "A kitchen island sink with no wall behind it is vented by:",
        choices: ["A common vent", "A wet vent through the dishwasher", "An island (loop) vent that rises above the flood-level rim and returns under the floor to the vent stack", "No vent — island sinks are exempt"],
        answer: 2,
        explanation: "Correct (c): The loop vent rises above the flood-level rim, then drops under the floor to the stack. (a) A common vent needs two fixtures and a wall path. (b) Wet venting does not apply to a kitchen sink. (d) Island sinks are not exempt from venting."
      },
      {
        module: 5,
        q: "A circuit vent must connect to the horizontal branch:",
        choices: ["At the most downstream fixture drain", "Between the two most upstream fixture drains", "At the base of the stack", "Below the flood-level rim"],
        answer: 1,
        explanation: "Correct (b): The connection sits between the two most upstream fixture drains so the upstream discharge washes past the vent connection. (a) is the wrong end of the battery. (c) is the stack base, not the branch. (d) Vent connections are made above the flood-level rim, never below it."
      },
      {
        module: 6,
        q: "Under IPC Table 710.1(1), a 4-inch building drain at 1/2 inch per foot carries a maximum of:",
        choices: ["160 DFU", "180 DFU", "216 DFU", "250 DFU"],
        answer: 3,
        explanation: "Correct (d): A 4-inch building drain at 1/2 inch per foot carries 250 DFU. (a) is the 4-inch branch capacity. (b) is the 4-inch building drain at 1/8 inch per foot. (c) is the 4-inch building drain at 1/4 inch per foot."
      },
      {
        module: 6,
        q: "A horizontal branch carries 25 DFU. Its smallest size from Table 710.1(2) is:",
        choices: ["2 inches", "2-1/2 inches", "3 inches", "4 inches"],
        answer: 3,
        explanation: "Correct (d): A 3-inch branch carries only 20 DFU, so 25 DFU needs the next size — 4 inches, which carries 160 DFU. (a) A 2-inch branch carries 6 DFU. (b) A 2-1/2-inch branch carries 12 DFU. (c) 20 DFU is not enough for a 25-DFU load."
      },
      {
        module: 7,
        q: "IPC 903.2 frost closure applies where the 97.5-percent outdoor design temperature is:",
        choices: ["32°F or less", "20°F or less", "0°F or less", "-20°F or less"],
        answer: 2,
        explanation: "Correct (c): Section 903.2 applies at 0°F or less on the 97.5-percent design temperature. (a) and (b) are warmer than the trigger. (d) is colder than the trigger and would miss areas the code covers."
      },
      {
        module: 7,
        q: "Under IPC 903.2, a vent extension through a roof in a frost-closure area must be at least:",
        choices: ["1-1/4 inches", "1-1/2 inches", "2 inches", "3 inches"],
        answer: 3,
        explanation: "Correct (d): The vent through the roof must be at least 3 inches in diameter. (a) is the absolute minimum vent size. (b) is the one-half-rule size for a 3-inch drain. (c) is the one-half-rule size for a 4-inch drain."
      },
      {
        module: 7,
        q: "Under IPC 903.1.1, an open vent pipe through a roof must terminate at least:",
        choices: ["Flush with the roof", "3 inches above the roof", "6 inches above the roof", "12 inches above the roof"],
        answer: 2,
        explanation: "Correct (c): The terminal must extend at least 6 inches above the roof. (a) leaves the vent open to rain, snow, and debris. (b) is below the requirement. (d) exceeds the IPC minimum."
      },
      {
        module: 7,
        q: "A 3-inch soil stack with a 1-1/2-inch stack vent is limited to a maximum of:",
        choices: ["20 DFU", "48 DFU", "102 DFU", "216 DFU"],
        answer: 2,
        explanation: "Correct (c): The IPC venting guidance caps this combination at 102 fixture units. (a) is the 3-inch branch capacity. (b) is the 3-inch stack capacity at three branch intervals or fewer. (d) is the 4-inch building drain capacity at 1/4 inch per foot."
      },
      {
        module: 8,
        q: "The correct fitting for a horizontal branch joining a horizontal drain is a:",
        choices: ["Sanitary tee laid on its back", "Standard short ell", "Wye (or combination fitting) entering at 45 degrees", "Reducing coupling"],
        answer: 2,
        explanation: "Correct (c): Horizontal-to-horizontal joints take a wye or combo so flows merge smoothly. (a) A tee on its back stalls flow and blocks snakes. (b) A short ell is only for horizontal-to-vertical turns. (d) A coupling joins pipe; it does not turn it."
      },
      {
        module: 8,
        q: "Under IPC 704.3, a horizontal branch must connect to the base of a 4-inch stack at least:",
        choices: ["4 inches downstream", "10 inches downstream", "40 inches downstream", "100 inches downstream"],
        answer: 2,
        explanation: "Correct (c): The connection must be at least 10 times the stack diameter downstream — 10 x 4 inches = 40 inches. (a) is one diameter. (b) is 2.5 diameters. (d) is 25 diameters, far beyond the requirement."
      },
      {
        module: 8,
        q: "Under IPC 708, cleanouts on horizontal drains must be spaced not more than:",
        choices: ["40 feet apart", "50 feet apart", "100 feet apart", "200 feet apart"],
        answer: 2,
        explanation: "Correct (c): Horizontal drains need cleanouts at intervals of not more than 100 feet. (a) is the one-cleanout-per-length rule for multiple direction changes. (b) and (d) are not code spacings."
      },
      {
        module: 8,
        q: "A cleanout in piping 6 inches and smaller needs at least how much clearance in front of it?",
        choices: ["6 inches", "12 inches", "18 inches", "36 inches"],
        answer: 2,
        explanation: "Correct (c): IPC requires at least 18 inches of clearance in front of cleanouts on 6-inch and smaller piping. (a) and (b) are too little room to work a snake. (d) exceeds the requirement."
      },
      {
        module: 9,
        q: "The IPC water test (312.2) requires a head of at least:",
        choices: ["5 feet of water", "10 feet of water", "15 feet of water", "20 feet of water"],
        answer: 1,
        explanation: "Correct (b): The water test fills the system to at least a 10-foot head. (a) is below the minimum. (c) and (d) exceed the minimum and are acceptable if the system is filled higher, but they are not the requirement."
      },
      {
        module: 9,
        q: "The IPC air test (312.3) pressurizes the DWV system to:",
        choices: ["1 psi", "5 psi", "15 psi", "50 psi"],
        answer: 1,
        explanation: "Correct (b): The air test uses 5 psi, held for 15 minutes. (a) is too low to prove tightness. (c) and (d) are far above the test pressure and would stress DWV pipe dangerously."
      },
      {
        module: 9,
        q: "The smoke test (IPC 312.8) pressurizes the system to:",
        choices: ["5 psi", "10 feet of head", "1 inch of water column", "50 psi"],
        answer: 2,
        explanation: "Correct (c): The smoke test uses 1 inch of water column (less than 0.04 psi) for 15 minutes. (a) is the air test pressure. (b) is the water test head. (d) is a water supply test pressure range, not a DWV test."
      },
      {
        module: 9,
        q: "A water test is run and the level drops 2 inches in 15 minutes. The correct verdict and next step are:",
        choices: ["Pass — the drop is small", "Fail — find the leak, repair it, and retest from the beginning", "Pass if the drop stops on its own", "Fail — replace the entire system"],
        answer: 1,
        explanation: "Correct (b): Any drop is a failure; repair and retest from the beginning. (a) There is no 'close enough' in a tightness test. (c) A drop that stops is still a failed test. (d) Only the leaking joint needs repair, not the whole system."
      },
      {
        module: 10,
        q: "The building drain ends and the building sewer begins:",
        choices: ["At the foundation wall", "2 feet outside the building wall", "At the property line", "At the public sewer main"],
        answer: 1,
        explanation: "Correct (b): The code boundary is 2 feet outside the building wall. (a) is 2 feet too early. (c) is where the sewer often meets the public main's service lateral. (d) is the end of the building sewer, not the start."
      },
      {
        module: 10,
        q: "A building sewer runs 80 feet at 1/8 inch per foot. Its total fall is:",
        choices: ["5 inches", "10 inches", "15 inches", "20 inches"],
        answer: 1,
        explanation: "Correct (b): 80 x 1/8 = 10 inches. (a) would be the fall at 1/16 inch per foot. (c) is the fall at 3/16 inch per foot. (d) is the fall at 1/4 inch per foot."
      },
      {
        module: 10,
        q: "IPC 714 requires a backwater valve where:",
        choices: ["The building has more than two bathrooms", "The flood-level rim of the lowest fixture is below the elevation of the next upstream manhole cover", "The building sewer is longer than 100 feet", "The house has a septic system"],
        answer: 1,
        explanation: "Correct (b): Section 714 ties the requirement to the lowest fixture's flood-level rim versus the next upstream manhole cover. (a) Fixture count does not trigger the rule. (c) Length does not trigger the rule. (d) Septic systems have no public sewer to flow back from."
      },
      {
        module: 10,
        q: "A septic drain field is sized by:",
        choices: ["The number of bedrooms and a soil percolation test", "The size of the water service", "The number of stories in the house", "The length of the building sewer"],
        answer: 0,
        explanation: "Correct (a): Bedrooms proxy for occupants and the percolation test measures soil absorption. (b) Water service size is a supply question. (c) Stories do not determine septic load. (d) Sewer length does not size a drain field."
      },
      {
        module: 11,
        q: "Roof drainage is sized using:",
        choices: ["Drainage fixture units (DFU)", "Roof area and the local 100-year, 1-hour rainfall rate", "The number of stories in the building", "Water supply fixture units (WSFU)"],
        answer: 1,
        explanation: "Correct (b): IPC Chapter 11 sizes roof drainage by roof area and rainfall rate. (a) DFU applies to sanitary fixtures, not rain. (c) Stories do not determine roof load. (d) WSFU is a water supply measure."
      },
      {
        module: 11,
        q: "The purpose of secondary (overflow) roof drainage is to:",
        choices: ["Carry water in normal rain so the primary drain lasts longer", "Take over if the primary drains clog, so water cannot pond on the roof", "Drain condensation from the vent system", "Supply water to the roof for cleaning"],
        answer: 1,
        explanation: "Correct (b): Overflow drainage is the backup that prevents ponding when primaries clog. (a) The primary handles normal rain; the overflow stays dry until needed. (c) Condensation is not roof drainage. (d) Overflow drains remove water; they never supply it."
      },
      {
        module: 11,
        q: "A basement floor drain that has not been used for months loses its trap seal most likely by:",
        choices: ["Siphonage from a flushing toilet", "Evaporation", "Backpressure from the stack", "Freezing"],
        answer: 1,
        explanation: "Correct (b): An unused trap loses seal water to the air. (a) Siphonage needs a discharge event and a venting fault. (c) Backpressure needs positive drain pressure. (d) Freezing would block the drain, not evaporate the seal."
      },
      {
        module: 11,
        q: "A sump pump that cycles every few minutes pumping the same water most likely has:",
        choices: ["A failed or missing check valve on its discharge", "A trap seal that evaporated", "A vent terminal that is frost-closed", "A roof drain that is undersized"],
        answer: 0,
        explanation: "Correct (a): Without a check valve, pumped water flows back into the pit and triggers the float again. (b) Trap seals do not affect sump pumps. (c) Frost closure affects vents, not sumps. (d) Roof drain sizing is unrelated to sump cycling."
      },
      {
        module: 12,
        q: "A bathroom group branch (5 DFU) serving a water closet must be at least:",
        choices: ["1-1/2 inches", "2 inches", "3 inches", "4 inches"],
        answer: 2,
        explanation: "Correct (c): A 2-inch branch would carry 5 DFU on capacity (6 max), but any segment carrying a water closet must be at least 3 inches. (a) and (b) fail the minimum-size rule. (d) exceeds the minimum."
      },
      {
        module: 12,
        q: "A 1-1/2-inch trap arm running 8 feet from its vent:",
        choices: ["Passes Table 909.1", "Fails Table 909.1, which allows 6 feet maximum for that size", "Passes if the slope is 1/8 inch per foot", "Fails only if the fixture is a water closet"],
        answer: 1,
        explanation: "Correct (b): Table 909.1 allows 6 feet for a 1-1/2-inch trap arm. (a) reverses the limit. (c) The slope for a 1-1/2-inch trap arm is 1/4 inch per foot, and slope does not extend the length limit. (d) The limit applies to all fixtures except self-siphoning ones."
      },
      {
        module: 12,
        q: "A 150-foot horizontal drain with a single cleanout at the stack base:",
        choices: ["Meets IPC 708", "Fails IPC 708, which requires cleanouts at intervals of not more than 100 feet", "Meets IPC 708 if the pipe is 4 inches", "Fails only if there is a direction change"],
        answer: 1,
        explanation: "Correct (b): Cleanouts must be spaced not more than 100 feet apart on horizontal drains. (a) ignores the spacing rule. (c) Pipe size does not change the spacing rule. (d) Direction changes add cleanout requirements; they do not create the spacing rule."
      },
      {
        module: 12,
        q: "The six-step DWV job sequence in order is:",
        choices: ["Install, test, layout, size, seal, air", "Layout, seal, air, size, install, prove", "Size, layout, install, seal, air, prove", "Prove, install, size, air, seal, layout"],
        answer: 1,
        explanation: "Correct (b): Layout, seal, air, size, install, prove (test and inspect). (a), (c), and (d) all put steps out of order — notably testing before layout or sizing after installation."
      },
      {
        module: 12,
        q: "A plan shows a 4-inch drain with a 1-1/4-inch vent. It fails because:",
        choices: ["The vent is smaller than the trap", "The one-half rule (IPC 906.2) requires at least a 2-inch vent", "Vents must always equal the drain size", "1-1/4-inch vents are prohibited entirely"],
        answer: 1,
        explanation: "Correct (b): One-half of 4 inches is 2 inches. (a) The rule sizes the vent from the drain, not the trap. (c) Vents need only be one-half the drain, not equal to it. (d) 1-1/4-inch vents are the code minimum and are fine on small drains."
      },
      {
        module: 12,
        q: "A house totals 19 DFU on its building drain (two bathroom groups, kitchen, laundry) at 1/4 inch per foot, serving water closets. The building drain size is:",
        choices: ["2 inches", "3 inches", "4 inches", "6 inches"],
        answer: 1,
        explanation: "Correct (b): A 3-inch building drain carries 42 DFU at 1/4 inch per foot, covering 19, and the water-closet minimum is 3 inches. (a) fails the water-closet minimum even though 21 DFU of capacity would cover the load. (c) oversizes without a reason. (d) far exceeds the need."
      },
      {
        module: 12,
        q: "On a plan review, the five-question check per segment, in order, is:",
        choices: ["Vent, cleanout, size, load, slope", "Load, size, slope, vent, cleanout", "Slope, load, vent, size, cleanout", "Cleanout, vent, slope, size, load"],
        answer: 1,
        explanation: "Correct (b): Load (Table 709.1), size (710.1), slope (704.1), vent (909.1/906.2/916.1), cleanout (708). (a), (c), and (d) all scramble the order — notably checking the vent before the load or the cleanout before the size."
      },
      {
        module: 12,
        q: "A plan shows a kitchen sink branch joining a horizontal drain with a sanitary tee laid on its back. The correct fitting is a:",
        choices: ["Sanitary tee laid on its back", "Standard short ell", "Wye (or combination fitting) entering at 45 degrees", "Test tee"],
        answer: 2,
        explanation: "Correct (c): Horizontal-to-horizontal joints take a wye or combo so flows merge smoothly. (a) is the error being corrected — flow hits a flat wall and stalls. (b) A short ell is only for horizontal-to-vertical turns. (d) A test tee is a testing fitting, not a branch joint."
      }
    ]
  }
};
