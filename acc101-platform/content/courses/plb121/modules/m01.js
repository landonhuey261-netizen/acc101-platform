// Plumbing 121 - Module 1: DWV Fundamentals: What the System Does
module.exports = {
  number: 1,
  slug: "dwv-fundamentals",
  title: "DWV Fundamentals: What the System Does",
  estTime: "3–4 hours",
  objectives: [
    "Explain what a drain, waste, and vent (DWV) system does and why it exists to protect health, not just to remove water.",
    "Name the three parts of the system — drain, waste, and vent — and state the job of each one.",
    "Trace wastewater from a fixture to the building sewer and name each pipe segment it passes through.",
    "Explain why DWV piping works by gravity alone and why slope, not pressure, moves the waste.",
    "Describe the two ways a DWV system can fail a building's occupants: a blocked drain and a lost trap seal."
  ],
  sections: [
    {
      heading: "Two Systems in Every Building, Doing Opposite Jobs",
      html: `
<p>Every building has two plumbing systems that never mix. The <strong>water supply system</strong> brings clean water in under pressure (you will study it in Plumbing 122). The <strong>drain, waste, and vent system — DWV</strong> — carries used water and waste out, entirely by gravity. The supply side pushes; the DWV side falls. If you remember only one sentence from this module, make it this one: <strong>supply is pressure, drainage is gravity</strong>.</p>
<p>The DWV system has three jobs, and the letters name them. <strong>Drain</strong> carries used water away from each fixture — the sink, tub, shower, toilet, washing machine. <strong>Waste</strong> carries the solid waste and the water that moves it, through larger pipes, out of the building. <strong>Vent</strong> carries air: it lets sewer gas escape above the roof and lets air into the pipes so the drains can flow and the traps can hold their water seal. A system missing any one of the three will fail, even if the pipes look complete.</p>
<p>Why does any of this matter beyond convenience? Because a drain system is a public-health device. Before modern drainage, human waste sat near homes and spread disease. The DWV system moves waste away from people and keeps sewer gas — which carries methane, hydrogen sulfide, and disease organisms — out of living spaces. That is why the plumbing code treats drainage as a health matter and why inspectors test it before walls close.</p>
<div class="callout"><strong>Key idea:</strong> A DWV system is not a convenience. It is the barrier between a building's occupants and the sewer. Every rule in this course — slope, trap seals, venting, testing — exists to keep that barrier intact.</div>`
    },
    {
      heading: "Following the Water: Fixture to Sewer",
      html: `
<p>Start at a bathroom sink. Water leaves the basin through the <strong>fixture drain</strong>, passes through the <strong>trap</strong> (a U-shaped bend that always holds water — Module 3), and enters the <strong>trap arm</strong>, the short horizontal pipe to the vent connection. From there it joins a <strong>horizontal branch</strong>, a sloped pipe that collects one or more fixtures. The branch flows into a <strong>stack</strong>, the large vertical pipe that carries waste down through the building. At the bottom, the stack turns horizontal and becomes the <strong>building drain</strong>, the lowest horizontal pipe inside the building. The building drain leaves the foundation and becomes the <strong>building sewer</strong>, which runs to the public sewer main or a septic system.</p>
<p>Two names cause the most confusion, so fix them now. A <strong>soil pipe</strong> carries waste from a water closet (toilet); a <strong>waste pipe</strong> carries only liquid waste from sinks, tubs, and showers. In practice both flow into the same stack and building drain, and the code often calls the combined pipe a soil-or-waste stack. The distinction matters when you size pipes and choose fittings, because a soil pipe must be at least 3 inches where it serves a water closet.</p>
<p>Notice what is <em>not</em> in the path: there is no pump, no pressure, and no valve that opens to let waste through. Gravity does all the moving. That is why every horizontal DWV pipe is installed on a slope, and why a pipe installed dead level — or worse, back-sloped — is a failed installation even if every joint is perfect.</p>
<div class="callout"><strong>Key idea:</strong> Trace the path out loud until it is automatic: fixture drain → trap → trap arm → horizontal branch → stack → building drain → building sewer → public sewer or septic. Every sizing and venting rule in this course hangs on knowing exactly which segment you are standing on.</div>`
    },
    {
      heading: "Gravity Is the Only Engine — and Slope Is How You Tune It",
      html: `
<p>Water in a drain pipe flows because the pipe falls. The code sets a <strong>minimum slope</strong> for horizontal drainage piping in IPC Table 704.1: <strong>1/4 inch per foot for pipe 2-1/2 inches and smaller, 1/8 inch per foot for 3- through 6-inch pipe, and 1/16 inch per foot for 8-inch and larger pipe</strong>. A 2-inch lavatory drain falling 1/4 inch per foot drops 2 inches over an 8-foot run. A 4-inch building drain at its 1/8-inch minimum drops 1 inch over the same 8 feet.</p>
<p>Minimum slope is a floor, not a target to exceed wildly. Too little slope and solids settle out, the pipe clogs, and the drain runs slow. Too much slope and the water outruns the solids — the liquid races ahead, the solids are left behind, and the pipe clogs anyway. The self-scouring speed the code is aiming for is about <strong>2 feet per second</strong>: fast enough to carry solids along, slow enough to keep them in the stream. Plumbers say it plainly: water that is too slow leaves solids; water that is too fast leaves solids too.</p>
<p>Slope is measured on the <strong>horizontal run</strong>, not along the pipe, and it must be <strong>uniform</strong> — the same fall all the way, with no dips, bellies, or flat spots. A belly is a low spot where waste collects; a single belly in a long run can undo an otherwise correct installation. This is why you check slope with a level as you hang pipe, not after the walls are closed.</p>
<div class="callout"><strong>Key idea:</strong> Slope is not decoration. It is the only thing moving the waste. Set it with a level during installation, keep it uniform, and never trust your eye alone on a long run.</div>
<p><strong>Worked check:</strong> A 3-inch horizontal branch runs 24 feet. Its minimum slope is 1/8 inch per foot, so the minimum total fall is 24 × 1/8 = <strong>3 inches</strong> from start to end. If the run can only fall 2 inches in the space available, the layout has to change — a shorter run, a different route, or a deeper starting point — because the code minimum cannot be negotiated.</p>`
    },
    {
      heading: "The Vent: Why Drains Need Air",
      html: `
<p>Here is the part beginners miss: a drain cannot work on water alone. It needs air. When a column of wastewater rushes down a stack, it pushes air ahead of it and drags air behind it. Without a vent to supply that air, the moving water creates suction strong enough to pull the water seal right out of a trap — a process called <strong>siphonage</strong>. The vent pipe is the air supply: it connects the drain to the open air above the roof so air can flow in behind the waste and out ahead of it, keeping pressure in the pipes near atmospheric.</p>
<p>The vent has a second job: it gives sewer gas somewhere to go besides your bathroom. Gas from the sewer rises through the stack and out the vent terminal above the roof, where it disperses harmlessly. A vent that is blocked — by a bird's nest, ice, or a careless cap — traps that gas in the system, where it finds the path of least resistance, often through a dried-out or siphoned trap.</p>
<p>This is why a slow or gurgling drain is often a vent problem, not a clog. The fixture gurgles because air is being pulled through the trap water as the drain struggles for air. A plumber who only snakes the drain and never looks at the vent has treated the symptom and missed the cause. Modules 4, 5, and 7 build the whole venting system on this one idea: <strong>drains need air, and the vent is what supplies it</strong>.</p>
<div class="callout"><strong>Key idea:</strong> If a drain is a straw, the vent is the hole in the top of the cup. Seal the hole and the liquid glugs, stalls, and pulls air through wherever it can — usually through a trap seal.</div>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>DWV = drain, waste, and vent: three jobs, one system, all gravity-powered.</li>
<li>Path: fixture drain → trap → trap arm → horizontal branch → stack → building drain → building sewer → public sewer or septic.</li>
<li>Minimum slope (IPC Table 704.1): 1/4 in/ft for 2-1/2 in and smaller; 1/8 in/ft for 3–6 in; 1/16 in/ft for 8 in and larger.</li>
<li>Vents supply air so drains flow and trap seals survive, and they carry sewer gas above the roof.</li>
<li>Two failure modes to watch for: blocked drains and lost trap seals.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Saying a drain is "pressurized" or adding slope without limit. DWV piping is never pressurized in normal use, and over-sloping strands solids just as surely as under-sloping does. The code minimum exists because the physics has a sweet spot.</div>
<div class="callout"><strong>Common mistake:</strong> Treating the vent as optional or as a second drain. A vent carries air and gas, never waste. Connecting a fixture drain into a vent, or capping a vent to "stop a smell," breaks the system in ways that show up as gurgling, slow drains, and sewer odor — the classic signs you will learn to read in Module 4.</div>
<p><strong>Ready-to-Work link:</strong> NCCER Plumbing Level 1 expects you to identify DWV components and explain the purpose of the system. If you can walk a homeowner through the path from their sink to the street and explain why the pipe on their roof matters, you have this module.</p>`
    }
  ],
  keyTerms: [
    { term: "DWV system", def: "The drain, waste, and vent piping system that removes used water and waste from a building by gravity and vents sewer gas outdoors." },
    { term: "Drain", def: "Piping that carries used water away from a fixture to the waste system." },
    { term: "Waste pipe", def: "Piping that carries liquid waste only (no water-closet waste); in common use, the combined drainage piping." },
    { term: "Soil pipe", def: "Piping that carries waste from a water closet, including solids." },
    { term: "Vent", def: "Piping that supplies air to the drainage system and carries sewer gas above the roof; it carries no waste." },
    { term: "Fixture drain", def: "The pipe from a fixture outlet to its trap." },
    { term: "Trap", def: "A U-shaped fitting that always holds water, forming a seal that blocks sewer gas from entering the building." },
    { term: "Trap arm", def: "The horizontal pipe between a trap and its vent connection." },
    { term: "Horizontal branch", def: "A sloped horizontal drain pipe that collects one or more fixture drains and delivers them to a stack or building drain." },
    { term: "Stack", def: "A vertical drain pipe (soil stack or waste stack) that carries waste downward through a building." },
    { term: "Building drain", def: "The lowest horizontal drainage pipe inside a building, receiving discharge from stacks and branches." },
    { term: "Building sewer", def: "The pipe from the building drain (outside the foundation) to the public sewer main or septic system." },
    { term: "Slope (grade)", def: "The fall of a horizontal drain pipe, expressed in inches per foot; IPC minimums depend on pipe size." },
    { term: "Self-scouring velocity", def: "A flow speed of about 2 feet per second that carries solids along with the water instead of leaving them behind." },
    { term: "Siphonage", def: "Loss of a trap's water seal when suction in the drain pulls the seal water out of the trap." },
    { term: "Trap seal", def: "The standing water in a trap that blocks sewer gas; the IPC requires a seal of 2 to 4 inches." },
    { term: "Vent terminal", def: "The open end of a vent pipe above the roof, where sewer gas escapes to the outdoors." },
    { term: "IPC", def: "International Plumbing Code; the 2021 edition is the basis of the 2021 Michigan Plumbing Code." }
  ],
  video: {
    title: "The #1 DWV Plumbing Mistake (and how to prevent it).",
    embedUrl: "https://www.youtube.com/embed/w5fMZBRtQ24",
    note: "A field look at the most common DWV layout error and how to avoid it. Watch how the drain, vent, and slope decisions connect, then compare what you see with the fixture-to-sewer path in this module.",
    more: [
      { title: "What is DWV", url: "https://www.youtube.com/watch?v=YGj-jijogmk" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> In your own words, explain the difference between the water supply system and the DWV system in two or three sentences a homeowner could follow.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The supply system brings clean water <em>in</em> under pressure, so it can climb to upstairs fixtures. Step 2: The DWV system carries used water and waste <em>out</em> by gravity alone, with no pump and no pressure. Step 3: The two systems never connect directly — fixtures are the bridge between them — so dirty water cannot flow back into the clean supply.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> List, in order, every pipe segment wastewater passes through from a second-floor bathtub to the public sewer main.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Fixture drain from the tub outlet. Step 2: Trap. Step 3: Trap arm to the vent connection. Step 4: Horizontal branch. Step 5: Stack (down through the building). Step 6: Building drain (lowest horizontal pipe inside). Step 7: Building sewer (outside the foundation). Step 8: Public sewer main.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A 2-inch horizontal branch runs 16 feet. What is its minimum total fall, and which IPC table gives the slope?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: IPC Table 704.1 sets the minimum slope for 2-1/2-inch and smaller pipe at 1/4 inch per foot. Step 2: Total fall = 16 ft × 1/4 in/ft = <strong>4 inches</strong>. Step 3: The pipe must fall at least 4 inches end to end, uniformly, with no dips.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A 4-inch building drain runs 40 feet. What is its minimum total fall?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: IPC Table 704.1 puts 4-inch pipe in the 3- through 6-inch group: minimum slope 1/8 inch per foot. Step 2: Total fall = 40 ft × 1/8 in/ft = <strong>5 inches</strong>. Step 3: Note the trap in this problem — 4-inch pipe is allowed the shallower 1/8-inch slope; using the 1/4-inch rule for small pipe here would be wrong.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A homeowner's tub gurgles every time the toilet flushes, and the bathroom sometimes smells like sewer. Name the two most likely system causes and explain each in one sentence.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: A blocked or undersized vent — the flushing toilet pulls air through the tub trap because the vent cannot supply it, and the gurgling is air passing through the trap water. Step 2: A lost trap seal — if that suction pulls the tub trap dry, sewer gas has an open path into the room, which is the smell. Both point at the venting side of the system, not at a clog in the tub drain itself.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A helper proposes sloping a 2-inch kitchen drain at 1/2 inch per foot 'to make sure it drains fast.' Explain why this is a bad idea.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The code minimum for 2-inch pipe is 1/4 inch per foot; 1/2 inch per foot is twice that. Step 2: At excessive slope the water outruns the solids, leaving grease and food solids stranded in the pipe. Step 3: Stranded solids build into clogs, so the 'faster' drain actually clogs sooner — the correct fix is the code slope, uniformly, not more slope.</p>"
    }
  ],
  quiz: [
    {
      q: "The DWV system moves wastewater mainly by:",
      choices: ["A pump at the base of each stack", "Municipal water pressure", "Gravity, through sloped piping", "Suction from the vent terminal"],
      answer: 2,
      explanation: "Correct: (c). DWV piping has no pump and no pressure; fall is the only engine. (a) No pump exists in a normal DWV system. (b) Municipal pressure drives the supply side, not the drains. (d) The vent supplies air; it does not suck waste along."
    },
    {
      q: "In order from the fixture outward, the correct sequence is:",
      choices: ["Trap arm → trap → branch → stack → building drain → building sewer", "Fixture drain → trap → trap arm → branch → stack → building drain → building sewer", "Stack → branch → trap → building drain → building sewer", "Building sewer → building drain → stack → branch → trap"],
      answer: 1,
      explanation: "Correct: (b). Water leaves the fixture, passes the trap, travels the trap arm, joins a branch, drops down a stack, collects in the building drain, and exits through the building sewer. (a) puts the trap arm before the trap. (c) starts at the stack and skips the fixture side. (d) runs the whole path backwards."
    },
    {
      q: "Under IPC Table 704.1, the minimum slope for a 2-inch horizontal drain is:",
      choices: ["1/16 inch per foot", "1/8 inch per foot", "1/4 inch per foot", "1/2 inch per foot"],
      answer: 2,
      explanation: "Correct: (c). Pipe 2-1/2 inches and smaller requires 1/4 inch per foot. (a) is the minimum for 8-inch and larger pipe. (b) is the minimum for 3- through 6-inch pipe. (d) is steeper than any code minimum and risks stranding solids."
    },
    {
      q: "Under IPC Table 704.1, the minimum slope for a 4-inch horizontal drain is:",
      choices: ["1/4 inch per foot", "1/8 inch per foot", "1/16 inch per foot", "No slope is required"],
      answer: 1,
      explanation: "Correct: (b). Four-inch pipe falls in the 3- through 6-inch group at 1/8 inch per foot. (a) applies only to 2-1/2-inch and smaller pipe. (c) applies to 8-inch and larger pipe. (d) Every horizontal drain requires slope."
    },
    {
      q: "The main purpose of a vent pipe is to:",
      choices: ["Carry waste from fixtures to the stack", "Supply air to the drainage system and carry sewer gas above the roof", "Increase the water pressure at fixtures", "Filter solids out of the wastewater"],
      answer: 1,
      explanation: "Correct: (b). Vents equalize air pressure so drains flow and trap seals survive, and they exhaust gas outdoors. (a) describes drain piping, not vents — vents carry no waste. (c) Vents have nothing to do with supply pressure. (d) No filter exists in a vent."
    },
    {
      q: "A soil pipe differs from a waste pipe in that a soil pipe:",
      choices: ["Carries only rainwater", "Carries waste from a water closet, including solids", "Is always installed vertically", "Carries clean water to fixtures"],
      answer: 1,
      explanation: "Correct: (b). Soil pipe carries water-closet waste; waste pipe carries liquid waste only. (a) Rainwater uses storm piping. (c) Soil pipe can run horizontally as a building drain. (d) Supply piping carries clean water."
    },
    {
      q: "A 3-inch horizontal branch runs 24 feet. Its minimum total fall is:",
      choices: ["2 inches", "3 inches", "6 inches", "12 inches"],
      answer: 1,
      explanation: "Correct: (b). Three-inch pipe slopes at least 1/8 inch per foot, so 24 × 1/8 = 3 inches. (a) would be the fall at 1/12 inch per foot, which is below code. (c) is the fall at 1/4 inch per foot, the wrong row of the table. (d) is the fall at 1/2 inch per foot."
    },
    {
      q: "Gurgling at a tub when a toilet flushes most likely indicates:",
      choices: ["A vent that cannot supply enough air, so the flush pulls air through the tub trap", "Too much slope on the tub drain", "A water heater set too hot", "A supply pipe that is too small"],
      answer: 0,
      explanation: "Correct: (a). The flush creates suction; a starved vent lets that suction pull air through the nearest trap water, which gurgles. (b) Slope affects solids transport, not air supply. (c) Water temperature does not cause gurgling. (d) Supply sizing affects fixture flow, not drain air."
    }
  ],
  studyGuide: `
<h3>Module 1 — DWV Fundamentals: Quick Reference</h3>
<p><strong>Core idea:</strong> Supply is pressure in; DWV is gravity out. The DWV system protects health by moving waste away and keeping sewer gas out.</p>
<p><strong>Path:</strong> Fixture drain → trap → trap arm → horizontal branch → stack → building drain → building sewer → public sewer or septic.</p>
<p><strong>Soil vs. waste:</strong> Soil pipe carries water-closet waste (solids); waste pipe carries liquid waste only.</p>
<div class="formula">IPC Table 704.1 minimum slope: 2-1/2 in and smaller = 1/4 in/ft &nbsp;|&nbsp; 3–6 in = 1/8 in/ft &nbsp;|&nbsp; 8 in and larger = 1/16 in/ft</div>
<p><strong>Vent:</strong> Supplies air so drains flow and trap seals survive; exhausts sewer gas above the roof. Vents carry no waste.</p>
<p><strong>Watch out:</strong> Too little slope strands solids; too much slope strands solids too — the water outruns them. Uniform slope, checked with a level.</p>
<p><strong>Self-check:</strong> Trace a flush from a second-floor toilet to the street out loud, naming each segment, and compute the minimum fall for a 20-foot run of 2-inch pipe (answer: 5 inches).</p>
`
};
