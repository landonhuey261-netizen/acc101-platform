// Plumbing 121 - Module 4: Vents: Why They Exist & How They Work
module.exports = {
  number: 4,
  slug: "vents-why-they-exist",
  title: "Vents: Why They Exist & How They Work",
  estTime: "3–4 hours",
  objectives: [
    "Explain the two jobs of a vent: supplying air to drains and exhausting sewer gas outdoors.",
    "Describe how positive and negative pressure develop in a drainage system and how vents neutralize them.",
    "Explain siphonage and backpressure in terms of air pressure, and how venting prevents both.",
    "Identify the parts of a vent system: individual vent, vent stack, stack vent, and vent terminal.",
    "State the IPC vent-sizing starting rule: a vent is at least one-half the diameter of the drain served, and never less than 1-1/4 inches."
  ],
  sections: [
    {
      heading: "The Drain That Cannot Breathe Cannot Drain",
      html: `
<p>Pour water out of a bottle held upside down and it glugs: water comes out in gulps, air fights its way in past the water, and the flow stalls between gulps. Poke a small hole in the bottom of the bottle — now the top — and the water flows out in a smooth, fast stream. The hole is a vent. A drainage system works the same way, and the vent pipe is the hole in the bottle.</p>
<p>When wastewater rushes down a drain, it does two things to the air in the pipe. Ahead of the water, it <strong>compresses</strong> air, creating <strong>positive pressure</strong> that pushes back against the flow and against trap seals downstream. Behind the water, it <strong>drags air along</strong>, creating <strong>negative pressure</strong> — suction — that pulls on trap seals upstream. Without a vent, the system swings between pushing and pulling, and the trap seals are caught in the middle.</p>
<p>The vent solves both problems with one pipe. It connects the drainage system to the open air above the roof, so air can flow in when the drain needs it and flow out when the drain has too much of it. Pressure in the pipes stays near atmospheric — the same pressure as the room — and the trap seals stay put. That is the whole physics of venting: <strong>keep the air pressure on both sides of every trap seal equal, and the seal survives</strong>.</p>
<div class="callout"><strong>Key idea:</strong> A vent is an air pipe, not a water pipe. Its job is pressure equalization: air in behind the waste, air (and gas) out ahead of it, so no trap seal ever feels a push or a pull.</div>`
    },
    {
      heading: "Positive Pressure, Negative Pressure, and the Trap in Between",
      html: `
<p><strong>Negative pressure (suction)</strong> is the more common villain. A toilet flush sends a large volume of water down a stack in seconds. The falling water drags air with it, and the air has to come from somewhere. If the vent is missing, undersized, or blocked, the nearest available air is sitting in a trap — and the suction pulls trap water into the drain. The trap gurgles as air bubbles through the seal, and if the suction lasts, the seal is gone. This is <strong>siphonage</strong>, and it is why a bathroom gurgles when a toilet flushes elsewhere in the house.</p>
<p><strong>Positive pressure (backpressure)</strong> is the opposite push. When a large discharge hits the bottom of a stack and turns horizontal, it compresses the air ahead of it. If that air cannot escape through a vent, it pushes back — up through the nearest trap, blowing seal water into the fixture or bubbling through it. Backpressure is less common in houses than siphonage, but it is the reason tall buildings need relief vents and carefully designed stack offsets, and it is why a vent stack must connect to the building drain downstream of the drainage stack.</p>
<p>Both problems have the same signature: trap seals that will not stay put, fixtures that gurgle, and sewer smells that come and go. A plumber who understands pressure reads those symptoms as a venting diagnosis, not a drain-cleaning job. The drain may be perfectly clear — and still fail — if the air side of the system is wrong.</p>
<div class="callout"><strong>Key idea:</strong> Suction pulls seals out; pressure pushes seals out. Venting defeats both by giving air a free path to and from the outdoors. A gurgling trap is a pressure gauge telling you the vent is not doing its job.</div>`
    },
    {
      heading: "The Parts of a Vent System",
      html: `
<p>A vent system is a tree, like the drain system, but it carries only air. Its parts:</p>
<ul>
<li><strong>Individual vent:</strong> the vent pipe serving one fixture trap, rising from the trap arm to join the vent system. Every fixture trap has one, directly or through a shared venting method (Module 5).</li>
<li><strong>Vent stack:</strong> a vertical vent pipe that collects individual vents and carries them to the outdoors. It connects to the drainage system at its base and rises through the roof.</li>
<li><strong>Stack vent:</strong> the extension of a soil or waste stack above the highest fixture connection, continuing through the roof. The stack itself becomes its own vent above the topmost branch.</li>
<li><strong>Branch vent:</strong> a vent pipe connecting one or more individual vents to a vent stack or stack vent.</li>
<li><strong>Vent terminal:</strong> the open end of the vent above the roof, where gas escapes and air enters. IPC Section 903.2 requires special sizing in cold climates (Module 7).</li>
</ul>
<p>Every vent system must have at least one vent pipe that extends outdoors (IPC 904.1). Individual vents can be combined: vents may join together, but the connection must be made at least <strong>6 inches above the flood-level rim</strong> of the highest fixture served (IPC 905.5), so that a backup cannot push waste into the vent system. And a vent stack must connect to the building drain <strong>downstream of the drainage stack and within 10 pipe diameters</strong> of it (IPC 904.4), so the vent serves the base of the stack where pressure problems start.</p>
<p>One more structural rule: a vent pipe must be installed so any condensation in it drains back to the drainage system — vents slope back toward the drain, and a vent must never trap water in a low spot. A vent full of water is not a vent at all.</p>
<div class="callout"><strong>Key idea:</strong> Individual vent → branch vent → vent stack → stack vent → terminal. Air flows up this tree and out the roof; waste never enters it. Connections between vents happen at least 6 inches above the highest fixture's flood-level rim.</div>`
    },
    {
      heading: "Sizing Starts Here: The One-Half Rule",
      html: `
<p>Full vent sizing uses IPC Table 916.1 and the developed length of the vent (Module 7). But the starting rule is simple and comes from IPC Section 906.2: <strong>a vent must be at least one-half the diameter of the drain it serves, and in no case less than 1-1/4 inches in diameter</strong>. A 3-inch drain needs at least a 1-1/2-inch vent. A 4-inch drain needs at least a 2-inch vent. A 2-inch, 1-1/2-inch, or 1-1/4-inch drain needs at least a 1-1/4-inch vent, because that is the floor.</p>
<p>Why one-half? Because a vent carries air, not water, and air moves far more easily than water — a vent half the diameter of its drain can pass enough air to keep pressures balanced. But "enough" depends on length and load, which is why the one-half rule is a minimum: a long vent run or a heavily loaded stack needs a larger vent, and the code's sizing table accounts for that. IPC 906.2 also requires that a vent exceeding <strong>40 feet in developed length be increased by one nominal pipe size</strong> for its entire length, because friction over a long run chokes airflow.</p>
<p>The minimum vent size of 1-1/4 inches also has a practical reason: smaller pipe clogs easily — with frost, debris, or insects — and a clogged vent is a failed vent. Never install a vent smaller than 1-1/4 inches, whatever the drain size.</p>
<div class="callout"><strong>Key idea:</strong> One-half the drain diameter, minimum 1-1/4 inches — that is the floor for every vent. Length and load can push the size up from there; nothing pushes it down.</div>
<p><strong>Worked check:</strong> A 3-inch horizontal branch serves a bathroom group. The minimum individual vent size is one-half of 3 inches = <strong>1-1/2 inches</strong>. If that vent ran 45 feet to the roof, IPC 906.2 would require increasing it one size — to <strong>2 inches</strong> — for its entire developed length.</p>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Vents supply air to drains and exhaust sewer gas above the roof; they carry no waste.</li>
<li>Negative pressure (suction) causes siphonage; positive pressure causes backpressure. Venting defeats both.</li>
<li>Parts: individual vent, branch vent, vent stack, stack vent, vent terminal. At least one vent must extend outdoors (IPC 904.1).</li>
<li>Vents join at least 6 inches above the flood-level rim of the highest fixture (IPC 905.5).</li>
<li>Minimum vent size: one-half the drain diameter, never less than 1-1/4 inches (IPC 906.2); vents over 40 feet developed length go up one size.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Treating a gurgling drain as a clog and snaking it repeatedly. Gurgling is usually an air problem — a blocked, undersized, or missing vent — and no amount of snaking fixes an air problem.</div>
<div class="callout"><strong>Common mistake:</strong> Running a vent horizontally with no slope, or with a dip that traps water. A vent must drain condensation back to the drainage system. A waterlogged vent is a blocked vent.</div>
<div class="callout"><strong>Common mistake:</strong> Sizing a vent by the trap instead of the drain. IPC 906.2 sizes the vent from the drain served downstream of the vent connection — a 4-inch drain needs a 2-inch vent even if the fixture trap is only 1-1/2 inches.</div>
<p><strong>Ready-to-Work link:</strong> NCCER Plumbing Level 2 (module 02305) expects you to explain venting principles and identify vent system components. If you can explain the bottle experiment and the one-half rule, you have this module.</p>`
    }
  ],
  keyTerms: [
    { term: "Vent", def: "Piping that supplies air to the drainage system and carries sewer gas outdoors; it carries no waste." },
    { term: "Negative pressure", def: "Suction in a drain caused by falling water dragging air along; it can siphon trap seals." },
    { term: "Positive pressure (backpressure)", def: "Compressed air ahead of a discharge that pushes back against flow and trap seals." },
    { term: "Siphonage", def: "Loss of a trap seal when suction pulls seal water into the drain." },
    { term: "Individual vent", def: "A vent pipe serving one fixture trap, rising from the trap arm to the vent system." },
    { term: "Vent stack", def: "A vertical vent pipe collecting individual vents and carrying them to the outdoors." },
    { term: "Stack vent", def: "The extension of a soil or waste stack above the highest fixture connection, continuing through the roof." },
    { term: "Branch vent", def: "A vent pipe connecting one or more individual vents to a vent stack or stack vent." },
    { term: "Vent terminal", def: "The open end of a vent pipe above the roof." },
    { term: "Flood-level rim", def: "The top edge of a fixture over which water would overflow; vent connections must be at least 6 inches above it." },
    { term: "Developed length", def: "The actual length of a vent pipe including equivalent length through fittings." },
    { term: "One-half rule", def: "IPC 906.2: a vent must be at least one-half the diameter of the drain served, and never less than 1-1/4 inches." },
    { term: "Atmospheric pressure", def: "The pressure of the surrounding air; a vented drain system operates near atmospheric pressure on both sides of every trap seal." }
  ],
  video: {
    title: "How to Vent Plumbing",
    embedUrl: "https://www.youtube.com/embed/WBU76ZcrGlM",
    note: "Ask the Builder walks through real vent pipes in a new home and shows why every fixture needs air. Watch how many vent pipes there are compared with drain pipes, and follow one individual vent from a fixture all the way to the roof.",
    more: [
      { title: "How to Vent Plumbing in 60 Seconds! I Can Draw Your Riser Diagram!", url: "https://www.youtube.com/watch?v=I8_Fh6892dg" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> Explain the water-bottle experiment in your own words and state what it proves about venting.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: An upside-down bottle with no air hole glugs — water comes out in gulps as air fights its way in past the water. Step 2: Poking a small hole in the top lets air in freely and the water flows out in a smooth stream. Step 3: It proves a drain needs an air supply to flow smoothly; the vent pipe is the hole in the bottle, letting air in behind the waste so the drain does not glug, stall, or pull air through trap seals.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A toilet flushes and the lavatory trap in the same bathroom gurgles. (a) Is the pressure at the lavatory trap positive or negative at that moment? (b) What is the mechanism? (c) What system prevents it?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The pressure is <strong>negative</strong> — suction. Step 2: The falling flush water drags air with it, and if the vent cannot supply air fast enough, suction pulls air through the lavatory trap water, which gurgles. Step 3: A properly sized and clear <strong>vent</strong> supplies the air so the trap seal is never pulled on.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> What is the minimum vent size for (a) a 2-inch drain, (b) a 3-inch drain, (c) a 4-inch drain? State the rule you used.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: IPC 906.2 — a vent is at least one-half the drain diameter, and never less than 1-1/4 inches. Step 2: (a) 2-inch drain: one-half is 1 inch, but the floor is 1-1/4 inches, so <strong>1-1/4 inches</strong>. Step 3: (b) 3-inch drain: one-half is <strong>1-1/2 inches</strong>. Step 4: (c) 4-inch drain: one-half is <strong>2 inches</strong>.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A vent run has a developed length of 45 feet. What does IPC 906.2 require, and why?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: IPC 906.2 requires a vent exceeding 40 feet in developed length to be <strong>increased by one nominal pipe size for its entire developed length</strong>. Step 2: Friction over a long run chokes airflow, so the larger size restores the air volume the drain needs. Step 3: For example, a 1-1/2-inch vent running 45 feet becomes a 2-inch vent for the whole run.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> Two individual vents are to be joined into one branch vent. At what minimum height above the fixtures may they join, and why does the code set that height?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: IPC 905.5 requires vents to join at least <strong>6 inches above the flood-level rim</strong> of the highest fixture served. Step 2: The height keeps waste out of the vent system — if a drain backs up, water rising in the fixture stops below the vent connection instead of flowing into the vents.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A homeowner capped a roof vent to 'stop a smell' and now every drain in the house runs slowly and gurgles. Explain what happened and what to do.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Capping the vent removed the system's air supply, so every discharge now creates suction and pressure swings with nowhere to equalize. Step 2: Drains run slowly because air cannot get in behind the water, and traps gurgle as air is pulled through their seals. Step 3: The fix is to <strong>remove the cap and restore the vent terminal</strong> — the smell was almost certainly a dry trap or a different vent problem, and capping the vent made the whole system worse.</p>"
    }
  ],
  quiz: [
    {
      q: "The two jobs of a vent are to:",
      choices: ["Carry waste to the stack and filter solids", "Supply air to the drainage system and exhaust sewer gas outdoors", "Pressurize the drains and heat the vent stack", "Drain condensation and carry rainwater"],
      answer: 1,
      explanation: "Correct: (b). Vents equalize air pressure and exhaust gas; they carry no waste. (a) describes drain piping. (c) Vents never pressurize drains. (d) Vents drain condensation back, but carrying rainwater is storm piping's job."
    },
    {
      q: "Negative pressure in a drain is most likely to cause:",
      choices: ["Backpressure blowing a trap seal into the fixture", "Siphonage pulling a trap seal out of the trap", "A vent terminal freezing shut", "The building drain flowing backwards"],
      answer: 1,
      explanation: "Correct: (b). Suction pulls seal water into the drain — siphonage. (a) is caused by positive pressure, the opposite condition. (c) is a frost-closure problem, not a pressure effect. (d) Drains do not flow backwards from suction alone."
    },
    {
      q: "A stack vent is:",
      choices: ["A separate pipe that carries waste from the top floor", "The extension of a soil or waste stack above the highest fixture connection, continuing through the roof", "A vent that serves only the lowest fixture", "The cleanout at the base of a stack"],
      answer: 1,
      explanation: "Correct: (b). Above the topmost branch, the stack itself becomes the vent. (a) A stack vent carries air, never waste. (c) It serves the whole stack, not one fixture. (d) The base cleanout is a different fitting."
    },
    {
      q: "Under IPC 905.5, individual vents may join together at a point at least:",
      choices: ["At the trap weir", "6 inches above the flood-level rim of the highest fixture served", "12 inches below the roof", "At the base of the stack"],
      answer: 1,
      explanation: "Correct: (b). Vents join at least 6 inches above the highest fixture's flood-level rim so a backup cannot push waste into the vents. (a) is far too low. (c) is not the rule's measurement. (d) Vents never join at the base of a stack."
    },
    {
      q: "Under IPC 906.2, the minimum vent size for a 4-inch drain is:",
      choices: ["1-1/4 inches", "1-1/2 inches", "2 inches", "3 inches"],
      answer: 2,
      explanation: "Correct: (c). One-half of 4 inches is 2 inches. (a) is the absolute minimum vent size, used for drains up to 2 inches. (b) is the minimum for a 3-inch drain. (d) is larger than the rule requires."
    },
    {
      q: "Under IPC 906.2, a vent with a developed length over 40 feet must be:",
      choices: ["Capped at the roof", "Increased by one nominal pipe size for its entire developed length", "Reduced by one size to increase air velocity", "Replaced with an air admittance valve"],
      answer: 1,
      explanation: "Correct: (b). Long runs lose airflow to friction, so the code requires one size larger for the whole run. (a) Capping a vent destroys the system. (c) Reducing the size makes friction worse. (d) An air admittance valve is a different device with its own rules and does not replace this requirement."
    },
    {
      q: "The smallest vent pipe the IPC allows is:",
      choices: ["3/4 inch", "1 inch", "1-1/4 inches", "1-1/2 inches"],
      answer: 2,
      explanation: "Correct: (c). IPC 906.2 sets the minimum vent size at 1-1/4 inches. (a) and (b) are below the minimum and would clog easily. (d) is the minimum for a 3-inch drain, not the absolute floor."
    },
    {
      q: "A drain that gurgles at a fixture every time another fixture discharges most likely has:",
      choices: ["A vent problem — the system cannot supply air fast enough", "A water heater problem", "A supply pipe that is too large", "A trap seal that is too deep"],
      answer: 0,
      explanation: "Correct: (a). Gurgling is air being pulled through trap water because the vent cannot keep up. (b) The water heater is on the supply side and cannot gurgle a drain. (c) Supply pipe size does not affect drain air. (d) A deep seal resists siphonage; it does not cause gurgling."
    }
  ],
  studyGuide: `
<h3>Module 4 — Vents: Quick Reference</h3>
<p><strong>Core idea:</strong> Drains need air. The vent keeps pressure near atmospheric on both sides of every trap seal, so seals survive.</p>
<p><strong>Pressure:</strong> Negative pressure (suction) → siphonage. Positive pressure → backpressure. Both are defeated by venting.</p>
<p><strong>Parts:</strong> Individual vent (one fixture) → branch vent → vent stack → stack vent (stack above top fixture) → vent terminal (roof). At least one vent must extend outdoors (IPC 904.1).</p>
<div class="formula">IPC 906.2: vent ≥ one-half the drain diameter, never less than 1-1/4 in &nbsp;|&nbsp; Vent over 40 ft developed length: +1 pipe size</div>
<p><strong>Joining rule (IPC 905.5):</strong> Vents join at least 6 in above the flood-level rim of the highest fixture served.</p>
<p><strong>Vent stack base (IPC 904.4):</strong> Connects to the building drain downstream of the drainage stack, within 10 pipe diameters.</p>
<p><strong>Watch out:</strong> Size the vent from the drain served, not the trap. Slope vents so condensation drains back. Gurgling = air problem, not a clog.</p>
<p><strong>Self-check:</strong> Minimum vent for a 3-inch drain? (1-1/2 in.) For a 2-inch drain? (1-1/4 in, the floor.) A 1-1/2-inch vent running 45 feet? (Increase to 2 in for the whole run.)</p>
`
};
