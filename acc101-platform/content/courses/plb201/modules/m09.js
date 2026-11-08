// Plumbing 201 - Module 9: Traps, Interceptors & Separators (IPC Ch. 10)
module.exports = {
  number: 9,
  slug: "traps-interceptors-separators",
  title: "Traps, Interceptors & Separators (IPC Ch. 10)",
  estTime: "3–4 hours",
  objectives: [
    "Explain what a trap does and why every fixture needs one, with the code's exceptions.",
    "Apply the trap rules: size, seal depth, trap-arm length, and prohibited trap types.",
    "Explain how grease interceptors work and how hydromechanical and gravity types differ.",
    "Size a grease interceptor from fixture flow and explain the code's sizing method.",
    "Identify other interceptors and separators: oil, sand, hair, and lint, and where each is required."
  ],
  sections: [
    {
      heading: "The Trap: A Water Seal Against Sewer Gas",
      html: `
<p>A <strong>trap</strong> is a fitting that holds a plug of water in the drain line of every fixture. That plug — the <strong>trap seal</strong> — is the only thing between the air in a room and the air in the sewer. Sewer gas is not just unpleasant: it contains methane, hydrogen sulfide, and other gases that are toxic, flammable, and capable of carrying disease. The trap's water seal is a simple, passive, and nearly perfect barrier, which is why the code requires a trap on every fixture that connects to the drainage system.</p>
<p>The code sets the trap seal at <strong>at least 2 inches and not more than 4 inches</strong> deep. Less than 2 inches and the seal evaporates or siphons away too easily; more than 4 inches and the trap becomes hard to clean and slow to drain. The most common trap is the <strong>P-trap</strong>, named for its shape: water enters, dips down, and rises over a weir before flowing on. The weir — the low point of the trap's outlet — sets the seal depth, and the trap must be <strong>self-scouring</strong>, meaning the flow of water cleans the trap as it passes, leaving no dead spots where waste can collect.</p>
<p>Every trap must be vented (Chapter 9), and the distance from the trap's weir to its vent — the <strong>trap arm</strong> — is limited by the code's table (Table 1002.2): a 1-1/2-inch trap arm may run at most 6 feet to its vent, a 2-inch arm 8 feet, a 3-inch arm 12 feet, and a 4-inch arm 16 feet. Too long a trap arm and the fixture's own discharge can siphon its trap before the vent can admit air.</p>
<div class="callout"><strong>Key idea:</strong> The trap is a water plug that keeps sewer gas out of the room. Seal 2–4 inches, self-scouring, vented, and never farther from its vent than Table 1002.2 allows.</div>`
    },
    {
      heading: "Trap Rules and Prohibited Traps",
      html: `
<p>Chapter 10 sets several trap rules that appear on every exam. A trap must be the same size as the fixture drain it serves, and its size comes from Table 709.1's minimum trap sizes (a lavatory takes a 1-1/4-inch trap, a bathtub 1-1/2 inches, a water closet 3 inches). Only one trap is permitted per fixture, except where the code allows a single trap to serve a listed combination such as a two- or three-compartment sink. A trap must be accessible for cleaning, and it must be installed level, with its seal at the right depth.</p>
<p>Some trap designs are <strong>prohibited</strong> because they fail in ways the code will not accept. <strong>S-traps</strong> are prohibited because they siphon themselves: the shape lets the fixture's discharge pull the seal out of the trap. <strong>Bell traps</strong> are prohibited because their seal is shallow and easily lost. <strong>Drum traps</strong> are prohibited in new work because they are not self-scouring and cannot be cleaned with a snake. And <strong>bottle traps</strong> — the compact decorative traps sold for tight spaces — are not code-compliant in most cases, because they contain an internal partition that can fail unseen and because a snake cannot pass through them.</p>
<p>The trap arm also has a slope rule: it must fall at least the IPC Table 704.1 minimum for its size (1/4 inch per foot for 2-1/2-inch and smaller, 1/8 inch per foot for 3- to 6-inch) but not so steeply that the total fall over its length exceeds one pipe diameter — if the trap arm drops more than one diameter before reaching the vent, the vent connection is effectively below the trap weir and the trap can siphon. That one-diameter rule is the geometry behind the trap-arm length table, and it is the reason a trap arm must be measured, not guessed.</p>
<div class="callout"><strong>Key idea:</strong> S-traps, bell traps, and drum traps are prohibited; bottle traps are not code-compliant. A trap arm that drops more than one pipe diameter before its vent can siphon its own trap.</div>`
    },
    {
      heading: "Grease Interceptors: How They Work",
      html: `
<p>Grease is the drainage system's slow poison. Hot grease from a kitchen sink flows down the drain as a liquid, cools in the pipe, solidifies on the pipe wall, and narrows the drain until it clogs — and it does the same thing to the public sewer downstream. A <strong>grease interceptor</strong> (also called a grease trap) stops grease before it reaches the drainage system by giving it time and space to separate: grease floats, solids sink, and clear water flows on.</p>
<p>Inside an interceptor, the waste slows down in a baffled chamber. <strong>Fats, oils, and grease (FOG)</strong> are lighter than water, so they rise to the top and are held back by baffles. Food solids are heavier, so they sink to the bottom. The clear water in the middle flows out through a controlled outlet to the drainage system. The interceptor does not destroy the grease — it stores it, and the interceptor must be pumped and cleaned on a schedule, or the stored grease fills the chamber and passes straight through.</p>
<p>The code requires grease interceptors wherever grease is produced in quantity — commercial kitchens, restaurants, cafeterias, and food-processing areas — and it requires them to be installed where they can be serviced, with access for cleaning and inspection. A residential kitchen does not need one, but a restaurant that skips one will clog its own drain and the sewer beyond it, and the health department will be the one to notice.</p>
<div class="callout"><strong>Key idea:</strong> A grease interceptor separates by gravity: grease floats, solids sink, clear water flows on. It stores grease — it does not destroy it — so it must be cleaned on schedule.</div>`
    },
    {
      heading: "Interceptor Types and Sizing",
      html: `
<p>There are two basic types. A <strong>hydromechanical grease interceptor</strong> is a compact, manufactured unit installed inside or near the kitchen, sized by its flow rate in gallons per minute and its grease-retention capacity in pounds. It uses internal baffles and a flow-control fitting to slow the waste just enough for separation, and it is rated by the Plumbing &amp; Drainage Institute (PDI) standard the code references. A <strong>gravity grease interceptor</strong> is a large buried tank — often 500 gallons or more — that holds the waste much longer, so separation is more complete; it is sized by volume and by the flow it must handle.</p>
<p>Sizing starts with the fixtures: the code's method (Section 1003) sizes an interceptor from the flow rate of the fixtures connected to it — the number and type of sinks, dishwashers, and other grease-producing fixtures — or from the drain line size where the fixtures are not known. The flow-control fitting on a hydromechanical unit is part of the sizing: it limits the flow into the unit to its rated rate, so the waste spends enough time inside to separate. An interceptor fed faster than its rating is an interceptor that does not intercept.</p>
<p>Sizing is not a guess, and the interceptor's rating plate is part of the installation: the code requires the unit to be installed per the manufacturer's instructions and the rating to match the design flow. On the exam, interceptor questions test the method — flow rate first, then the table — and the fact that the unit must be accessible and cleanable.</p>
<div class="callout"><strong>Key idea:</strong> Hydromechanical interceptors are compact and rated in gpm and pounds of grease; gravity interceptors are large buried tanks rated by volume. Both are sized from fixture flow, and both must be accessible for cleaning.</div>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Every fixture needs a trap; the trap seal is 2–4 inches of water that blocks sewer gas.</li>
<li>Trap-arm maximums (Table 1002.2): 1-1/2 inch = 6 ft, 2 inch = 8 ft, 3 inch = 12 ft, 4 inch = 16 ft; the trap arm must not drop more than one pipe diameter before its vent.</li>
<li>Prohibited: S-traps, bell traps, drum traps in new work; bottle traps are not code-compliant.</li>
<li>Grease interceptors separate by gravity — FOG floats, solids sink, clear water flows on — and must be pumped and cleaned on schedule.</li>
<li>Hydromechanical interceptors are compact, rated in gpm and grease capacity; gravity interceptors are large buried tanks rated by volume.</li>
<li>Other interceptors and separators: oil separators for garages and service areas, sand interceptors where sand and grit enter the drain, hair interceptors for salons and pet grooming, lint interceptors for laundries.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Installing an S-trap because it fits the space. It fits — and then it siphons itself dry on the first full discharge. Use a P-trap with a proper vent.</div>
<div class="callout"><strong>Common mistake:</strong> Sizing a grease interceptor by the kitchen's floor area or by the size of the drain line alone. The code sizes it from fixture flow — count the fixtures first.</div>
<p><strong>Ready-to-Work link:</strong> Traps and interceptors are the most hands-on chapter in the code course: every fixture you install has a trap, and every commercial kitchen you service has an interceptor. The plb202 lab on grease interceptors builds directly on this module.</p>`
    }
  ],
  keyTerms: [
    { term: "Trap", def: "A fitting that holds a water seal in a fixture's drain, blocking sewer gas from entering the building." },
    { term: "Trap seal", def: "The depth of water in a trap: at least 2 inches and not more than 4 inches (IPC 1002.4)." },
    { term: "P-trap", def: "The standard trap shape: water dips down and rises over a weir; self-scouring and vented." },
    { term: "Weir", def: "The low point of a trap's outlet that sets the seal depth." },
    { term: "Trap arm", def: "The pipe from the trap's weir to its vent; limited in length by Table 1002.2 and in fall by one pipe diameter." },
    { term: "S-trap", def: "A prohibited trap shape that siphons its own seal when the fixture discharges." },
    { term: "Bell trap", def: "A prohibited trap with a shallow, easily lost seal." },
    { term: "Drum trap", def: "A prohibited-in-new-work trap that is not self-scouring and cannot be snaked." },
    { term: "Bottle trap", def: "A compact decorative trap that is not code-compliant: it has an internal partition and cannot be snaked." },
    { term: "Self-scouring", def: "A trap designed so the flow of water cleans it as it passes, leaving no dead spots." },
    { term: "Grease interceptor", def: "A device that separates fats, oils, and grease from kitchen waste by gravity before it reaches the drainage system." },
    { term: "FOG", def: "Fats, oils, and grease — the kitchen waste a grease interceptor removes." },
    { term: "Hydromechanical grease interceptor", def: "A compact manufactured interceptor rated in gpm and grease capacity, with a flow-control fitting." },
    { term: "Gravity grease interceptor", def: "A large buried tank interceptor sized by volume, giving waste a long time to separate." },
    { term: "Oil separator", def: "An interceptor that removes oil from waste, required in garages and vehicle service areas." },
    { term: "Sand interceptor", def: "An interceptor that catches sand and grit before it reaches the drainage system." },
    { term: "Flow-control fitting", def: "A fitting that limits flow into a hydromechanical interceptor to its rated rate, so separation can happen." }
  ],
  video: {
    title: "How Do P-Traps Work? | Spec. Sense",
    embedUrl: "https://www.youtube.com/embed/zGofkKOP2SU",
    note: "A short, clear explanation of how a P-trap uses water to seal the drain and keep sewer gas out, why airflow matters, and why S-traps are no longer installed. Watch it, then check the trap-seal depth and the S-trap prohibition against Chapter 10 in this module.",
    more: [
      { title: "Understanding Bottle Traps | Ask This Old House", url: "https://www.youtube.com/watch?v=C8vuyRkxAQU" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A lavatory's trap arm is 1-1/2 inches in diameter and runs 7 feet to its vent. Does it comply with Table 1002.2? Explain.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Table 1002.2 allows a 1-1/2-inch trap arm a maximum of 6 feet to its vent. Step 2: This arm is 7 feet, which is 1 foot too long. Step 3: It fails — move the vent closer, or increase the trap arm to 2 inches, which allows 8 feet.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A homeowner's new sink was installed with an S-trap because it fit the tight cabinet. The sink smells like sewer after every use. Explain the cause and the fix.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The S-trap siphons itself: when the sink discharges, the water's momentum pulls the trap seal out behind it. Step 2: With the seal gone, sewer gas enters the room — that is the smell. Step 3: The fix is to replace the S-trap with a P-trap and a proper vent; S-traps are prohibited by the code, and no adjustment makes one compliant.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A restaurant kitchen has three compartment sinks and a dishwasher discharging to one interceptor. The interceptor is a 20-gpm hydromechanical unit, but the combined fixture flow is 35 gpm. What happens, and what is the fix?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The interceptor is fed faster than its rating, so waste passes through too quickly to separate — grease goes straight to the drain. Step 2: The fix is to install an interceptor rated for the full 35 gpm flow (or split the fixtures between two properly rated units). Step 3: The flow-control fitting must also match the rating; sizing starts from fixture flow, not from the size of the unit on the shelf.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A trap's seal measures 1-1/2 inches deep. Does it comply? What are the risks of a shallow seal?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: No — the code requires a trap seal of at least 2 inches and not more than 4 inches. Step 2: A 1-1/2-inch seal evaporates faster in an unused fixture and siphons more easily under pressure changes. Step 3: Replace the trap with one that holds a 2- to 4-inch seal, and check the vent — a shallow seal plus a weak vent is a sewer smell waiting to happen.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A vehicle repair garage floor drain connects directly to the sanitary sewer with no interceptor. What is missing, and why does the code require it?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: An oil separator is missing. Step 2: Garages and vehicle service areas discharge oil and fuel with their wash water, and the code requires an oil separator to keep petroleum out of the sanitary system and the treatment plant. Step 3: The separator must be installed, trapped, vented, and accessible for cleaning — a floor drain alone is not a separator.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A grease interceptor has not been pumped in two years and the kitchen drain keeps clogging. Explain what has happened inside the interceptor.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The interceptor stores grease; it does not destroy it. Step 2: After two years the stored grease has filled the chamber, so new grease has nowhere to go and passes straight through to the drain. Step 3: The grease then cools and solidifies in the drain pipe, narrowing it until it clogs. The fix is to pump and clean the interceptor on its scheduled interval and keep the drain clear — the interceptor only works when it is emptied.</p>"
    }
  ],
  quiz: [
    {
      q: "The IPC trap seal must be:",
      choices: ["At least 1 inch and not more than 2 inches", "At least 2 inches and not more than 4 inches", "Exactly 3 inches", "At least 4 inches"],
      answer: 1,
      explanation: "Correct: (b). 2 to 4 inches is the code's range. (a) 1 inch is too shallow. (c) 3 inches is within the range but is not the rule. (d) More than 4 inches is prohibited."
    },
    {
      q: "Table 1002.2 allows a 2-inch trap arm a maximum of:",
      choices: ["5 feet", "6 feet", "8 feet", "12 feet"],
      answer: 2,
      explanation: "Correct: (c). 2-inch trap arm = 8 feet. (a) 5 feet is the 1-1/4-inch maximum. (b) 6 feet is the 1-1/2-inch maximum. (d) 12 feet is the 3-inch maximum."
    },
    {
      q: "Which trap type is prohibited because it siphons its own seal?",
      choices: ["P-trap", "S-trap", "Running trap", "Deep-seal trap"],
      answer: 1,
      explanation: "Correct: (b). An S-trap's shape lets discharge pull the seal out. (a) A P-trap is the standard compliant trap. (c) A running trap is a different fitting with its own rules. (d) A deep-seal trap is a legitimate trap with a deeper seal."
    },
    {
      q: "A grease interceptor works by:",
      choices: ["Heating grease until it dissolves", "Separating by gravity: grease floats, solids sink, clear water flows on", "Filtering grease through a screen", "Adding chemicals that eat grease"],
      answer: 1,
      explanation: "Correct: (b). Separation is by gravity and baffles. (a) Heat would keep grease liquid and carry it through. (c) A screen is not the separation method. (d) Chemicals are not the code's interceptor method."
    },
    {
      q: "A hydromechanical grease interceptor is rated in:",
      choices: ["Gallons per minute and pounds of grease capacity", "Square feet of floor area", "Number of seats in the restaurant", "Inches of pipe diameter only"],
      answer: 0,
      explanation: "Correct: (a). Flow rate and grease-retention capacity are the ratings. (b) Floor area does not set interceptor size. (c) Seat count is a fixture-count input, not the rating. (d) Pipe size alone does not size an interceptor."
    },
    {
      q: "A trap arm that drops more than one pipe diameter before reaching its vent:",
      choices: ["Is fine — steeper is better", "Can siphon its own trap", "Increases the trap seal", "Is required by code"],
      answer: 1,
      explanation: "Correct: (b). Excess fall puts the vent connection effectively below the weir, so the trap can siphon. (a) Steeper is not better for a trap arm. (c) It does not increase the seal. (d) The code limits the fall, it does not require it."
    },
    {
      q: "Bottle traps are not code-compliant mainly because:",
      choices: ["They are too expensive", "They contain an internal partition that can fail unseen, and a snake cannot pass through them", "They are too large", "They are made of plastic"],
      answer: 1,
      explanation: "Correct: (b). The hidden partition and the inability to snake them are the code's objections. (a) Price is not a code criterion. (c) Bottle traps are compact, not large. (d) The material is not the issue."
    },
    {
      q: "An oil separator is required in:",
      choices: ["Residential kitchens", "Garages and vehicle service areas", "Bathrooms", "Swimming pools"],
      answer: 1,
      explanation: "Correct: (b). Vehicle areas discharge oil and fuel that must be separated. (a) Residential kitchens need no oil separator. (c) Bathrooms discharge no oil. (d) Pools are covered by Chapter 8 and pool rules, not oil separators."
    }
  ],
  studyGuide: `
<h3>Module 9 — Traps, Interceptors &amp; Separators: Quick Reference</h3>
<p><strong>Trap:</strong> Water seal blocking sewer gas · Seal 2–4 in · P-trap is standard · Self-scouring · One trap per fixture (listed combinations excepted).</p>
<p><strong>Trap arm (Table 1002.2):</strong> 1-1/4 in = 5 ft · 1-1/2 in = 6 ft · 2 in = 8 ft · 3 in = 12 ft · 4 in = 16 ft. Fall before the vent must not exceed one pipe diameter.</p>
<p><strong>Prohibited:</strong> S-traps (self-siphoning) · Bell traps · Drum traps in new work · Bottle traps not code-compliant.</p>
<p><strong>Grease interceptor:</strong> Gravity separation — FOG floats, solids sink, clear water flows on · Must be pumped and cleaned on schedule · Hydromechanical = compact, gpm + lb rating · Gravity = large buried tank, volume rating · Sized from fixture flow.</p>
<p><strong>Other separators:</strong> Oil (garages) · Sand (grit) · Hair (salons) · Lint (laundries).</p>
<p><strong>Self-check:</strong> Name the trap-arm maximum for a 1-1/2-inch trap and explain why an S-trap smells. If both are easy, you have Chapter 10.</p>
`
};
