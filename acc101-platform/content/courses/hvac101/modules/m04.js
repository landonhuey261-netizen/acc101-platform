// HVAC 101 - Module 4: Major Components: Compressors
module.exports = {
  number: 4,
  slug: "major-components-compressors",
  title: "Major Components: Compressors",
  estTime: "3–4 hours",
  objectives: [
    "State the compressor's two jobs: circulating refrigerant and raising its pressure so heat can be rejected.",
    "Compare reciprocating, scroll, and rotary compressors by mechanism and typical application.",
    "Distinguish hermetic, semi-hermetic, and open-drive construction and explain the service consequences of each.",
    "Explain how compressors are cooled and lubricated and why liquid floodback and overheating destroy them.",
    "Name the common protective devices that stop a compressor before conditions destroy it."
  ],
  sections: [
    {
      heading: "The Compressor's Job, Stated Precisely",
      html: `
<p>The compressor does two things at once. First, it <strong>circulates</strong> refrigerant: by pulling vapor out of the evaporator, it keeps evaporator pressure low, which keeps the boiling temperature low, which is what allows the coil to absorb heat from a cool space. Second, it <strong>raises pressure</strong>: squeezing that vapor into a smaller volume lifts its pressure and temperature high enough that the condenser can reject heat to ordinary outdoor air. Stop the compressor and both jobs stop together — pressure across the system slowly equalizes and no heat moves at all.</p>
<p>This is why the compressor is often called the heart of the system, and the analogy earns its keep. Just as a heart fails when its valves leak or its muscle overheats, a compressor fails when its internal sealing leaks or its motor overheats. Just as blood pressure has a high and low side, the compressor maintains the high and low pressures of the loop. And just as a heart needs its own blood supply, a compressor needs a constant return of oil that travels with the refrigerant.</p>
<p><strong>Worked reasoning — pressures it must bridge.</strong> Take an R-410A air conditioner on a warm day with a 40°F evaporator and a 100°F condensing temperature. Suction pressure is about 118 psig and discharge about 317 psig. The compressor must lift every pound of vapor across that roughly 199 psi difference, thousands of times an hour. Dirty coils that push condensing higher, or a starved coil that pulls suction lower, widen that bridge and make the same machine work harder to move less refrigerant.</p>
<div class="callout"><strong>Key idea:</strong> Compressor problems are often system problems. Before condemning a compressor, ask what pressures, temperatures, and oil conditions the rest of the system has been forcing it to live with.</div>`
    },
    {
      heading: "Reciprocating, Scroll, and Rotary Mechanisms",
      html: `
<p>A <strong>reciprocating compressor</strong> uses pistons driven by a crankshaft, with suction and discharge reed valves opening and closing each stroke. It is the oldest design in the trade, common in smaller refrigeration and older A/C equipment. Its strengths are familiarity and, in larger semi-hermetic form, repairability. Its weaknesses are vibration, many moving parts, and valves that can be damaged by liquid slugging. The term vapor-compression fits it perfectly: intake, squeeze, discharge, repeated piston by piston.</p>
<p>A <strong>scroll compressor</strong> uses two spiral-shaped scrolls: one fixed, one orbiting without rotating. Vapor enters at the outside edge, is trapped in pockets between the scrolls, and is carried toward the center as the pockets shrink, leaving through a discharge port at the middle. There are no suction and discharge reed valves doing the sealing in the traditional sense, which is part of why scrolls are quiet, smooth, and tolerant workhorses in residential and light commercial A/C. Because the scrolls start unloaded, scrolls also tend to start easily compared with piston machines.</p>
<p>A <strong>rotary compressor</strong> uses a roller or rotating vane inside a cylinder to sweep vapor from inlet to outlet in a continuous rotary motion. Rotary machines are compact and quiet, which makes them common in window units, small splits, and appliances. Larger systems may use screw or centrifugal compressors, but those belong to the commercial courses later in this program.</p>
<ul>
<li><strong>Reciprocating:</strong> piston and valves; appliance and smaller refrigeration heritage; available in serviceable semi-hermetic form.</li>
<li><strong>Scroll:</strong> fixed plus orbiting spiral; dominant in modern residential A/C; quiet and efficient.</li>
<li><strong>Rotary:</strong> rolling piston or vane; compact; window units and small systems.</li>
</ul>
<div class="callout"><strong>Key idea:</strong> Different mechanisms, identical job: draw in low-pressure vapor, discharge high-pressure vapor, vapor only. Troubleshooting starts with pressures and temperatures, which behave the same regardless of mechanism.</div>`
    },
    {
      heading: "Hermetic, Semi-Hermetic, and Open Construction",
      html: `
<p>Construction describes how the motor and pumping parts are housed. In a <strong>hermetic compressor</strong>, the motor and compressor share one sealed, welded steel shell, and the motor runs in refrigerant vapor. There is nothing to open: no shaft seal to leak, but also no internal repair. A failed hermetic is replaced, not rebuilt. Most residential and small commercial systems use hermetics, including nearly all scrolls in homes.</p>
<p>A <strong>semi-hermetic compressor</strong> also houses motor and compressor together, but the housing is bolted, with gasketed covers that a shop can open. Valve plates, pistons, and some internal parts can be serviced, which is why semi-hermetics appear on larger refrigeration racks and bigger equipment where replacement cost justifies repair labor. The trade-off is more potential gasket leak points and more weight.</p>
<p>An <strong>open-drive compressor</strong> separates the two: the compressor sits outside the motor, driven by a shaft through a seal, by belt or direct coupling. It suits very large or special machinery and ammonia plants, but the shaft seal is a built-in leak path that hermetic designs eliminated. In this introductory course you will mostly meet hermetics, with semi-hermetics as the serviceable step up.</p>
<p>Construction also drives electrical diagnosis. A hermetic's motor terminals are reached at the shell, and its windings are cooled by suction vapor; a semi-hermetic may offer more access but the same physics. Either way, the motor lives in the refrigerant atmosphere, which is why contamination inside the system — moisture, acid from a burnout — is an electrical problem as well as a mechanical one.</p>
<div class="callout"><strong>Key idea:</strong> Welded shut means replace, not repair. Bolted covers mean a shop can open it. Know which you are standing in front of before you quote a repair.</div>`
    },
    {
      heading: "Cooling, Lubrication, and the Two Classic Killers",
      html: `
<p>Most hermetic compressors are <strong>suction-cooled</strong>: the cool vapor returning from the evaporator flows over the motor before being compressed, carrying motor heat away. That design creates a dependency beginners miss. Low refrigerant charge or a starved evaporator raises superheat, the returning vapor arrives hotter and less dense, motor cooling collapses, and the compressor cooks in a system that is also cooling poorly. Hot suction gas is a symptom and a cause of further damage at the same time.</p>
<p><strong>Oil</strong> leaves the compressor with the discharge gas in small amounts, travels the whole loop, and must return with the suction vapor. Correct piping, adequate gas velocity, and avoiding traps that pool oil keep that circulation going. Oil that does not return leaves bearings dry. Oil also degrades when overheated or contaminated with moisture and air, losing the lubricating quality the machine depends on.</p>
<p>The two classic killers follow directly. <strong>Floodback</strong> — liquid refrigerant returning during operation — dilutes and washes oil off surfaces and can slug internal parts. <strong>Overheating</strong> — from high discharge pressure, low charge, poor suction cooling, or electrical trouble — breaks oil down, warps parts, and eventually trips protection or burns the motor. A third, related killer is contamination after a motor burnout, when acid formed inside the system attacks the replacement compressor unless the system is cleaned as procedures require.</p>
<div class="callout"><strong>Key idea:</strong> Measure superheat and discharge conditions because compressors die of their operating conditions far more often than of old age. The gauges are a medical chart for the machine.</div>`
    },
    {
      heading: "Protection Devices and a Recap",
      html: `
<p>Because compressors are expensive and fragile relative to their importance, systems wrap them in protection. <strong>Internal overloads</strong> sense motor heat or current and open the circuit, resetting when the motor cools — a compressor that runs briefly, stops, and restarts after a pause is often telling you protection is cycling, not that the fault healed. <strong>High-pressure cut-outs</strong> stop the machine when discharge pressure exceeds a safe limit, as with a failed condenser fan. <strong>Low-pressure cut-outs</strong> can stop it when suction falls too far, protecting against running in conditions that starve cooling and oil return. <strong>Crankcase heaters</strong> keep the shell warm while off, discouraging refrigerant from migrating into the oil and foaming it away at start-up.</p>
<p>None of these devices fixes a cause. A pressure switch that trips is reporting a system condition: find the dirty coil, failed fan, restriction, or charge error behind it. Repeatedly resetting protection to keep a machine running converts a protected shutdown into a destroyed compressor.</p>
<p><strong>Recap:</strong></p>
<ul>
<li>Job: circulate refrigerant and raise its pressure and temperature so heat can be rejected.</li>
<li>Mechanisms: reciprocating (piston/valves), scroll (orbiting spiral), rotary (roller/vane) — same job, different machinery.</li>
<li>Construction: hermetic (sealed, replace), semi-hermetic (bolted, serviceable), open-drive (external motor, shaft seal).</li>
<li>Killers: liquid floodback, overheating and lost suction cooling, oil that leaves and does not return, contamination.</li>
<li>Protection reports trouble; it never cures it.</li>
</ul>`
    }
  ],
  keyTerms: [
    { term: "Compressor", def: "The machine that circulates refrigerant and raises vapor from suction pressure to discharge pressure." },
    { term: "Reciprocating compressor", def: "A compressor using pistons, a crankshaft, and suction and discharge valves to pump vapor." },
    { term: "Scroll compressor", def: "A compressor using a fixed scroll and an orbiting scroll to squeeze vapor pockets toward the center discharge." },
    { term: "Rotary compressor", def: "A compact compressor using a roller or vane in a cylinder to sweep vapor from inlet to outlet." },
    { term: "Hermetic compressor", def: "A compressor and motor sealed together in a welded shell; replaced rather than rebuilt when it fails internally." },
    { term: "Semi-hermetic compressor", def: "A compressor and motor in a bolted housing that can be opened for service of internal parts." },
    { term: "Open-drive compressor", def: "A compressor driven by an external motor through a shaft seal, used on large or special machinery." },
    { term: "Suction-cooled motor", def: "A hermetic motor cooled by returning suction vapor, making it vulnerable when superheat runs high." },
    { term: "Floodback", def: "Liquid refrigerant returning to the compressor during operation, diluting oil and risking mechanical damage." },
    { term: "Slugging", def: "A sudden intake of liquid into a compressor, which can break valves and internal parts because liquid cannot be compressed." },
    { term: "Internal overload", def: "A protective device inside or on the compressor that opens the motor circuit on excess heat or current and resets when cool." },
    { term: "High-pressure cut-out", def: "A control that stops the compressor when discharge pressure exceeds its set limit." },
    { term: "Low-pressure cut-out", def: "A control that stops the compressor when suction pressure falls below its set limit." },
    { term: "Crankcase heater", def: "A small heater that keeps the compressor shell warm while off so refrigerant does not migrate into the oil." },
    { term: "Oil return", def: "The circulation of oil out of and back to the compressor with the refrigerant, required for continued lubrication." },
    { term: "Discharge pressure", def: "The high-side pressure at the compressor outlet, also called head pressure." },
    { term: "Suction pressure", def: "The low-side pressure at the compressor inlet, set by evaporator conditions." }
  ],
  video: {
    title: "Inside a Scroll Compressor",
    embedUrl: "https://www.youtube.com/embed/JLejG6V5Kgc",
    note: "An opened scroll compressor shows the fixed and orbiting scrolls and explains why scrolls have no traditional suction and discharge valves, unlike the reciprocating design described in this module. Watch how the pockets shrink toward the center discharge port.",
    more: []
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> State the compressor's two jobs and explain what happens to system pressures when it stops.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: It circulates refrigerant by drawing vapor from the evaporator. Step 2: It raises that vapor's pressure and temperature so the condenser can reject heat. Step 3: When it stops, the pressure difference it maintained decays; high and low sides drift toward equality and heat movement stops.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A residential split system is quiet, smooth, and has a sealed welded compressor with two spiral plates inside. Name the mechanism and the construction, and state the repair implication.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Spiral plates, one orbiting, identify a <strong>scroll</strong> mechanism. Step 2: A welded sealed shell is <strong>hermetic</strong> construction. Step 3: Internal failure means compressor replacement, since a hermetic shell is not opened for repair.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> For an R-22 system with a 40°F evaporator and 100°F condensing temperature, give suction and discharge pressures and the pressure difference the compressor bridges. Use the P/T anchors from this course.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: R-22 at 40°F is about <strong>68.5 psig</strong> suction. Step 2: R-22 at 100°F is about <strong>196 psig</strong> discharge. Step 3: Difference = 196 − 68.5 = <strong>127.5 psi</strong> of lift across the compressor.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A low charge makes suction vapor arrive hot and thin. Trace two separate paths by which this hurts the compressor.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Hotter, less dense suction vapor cools a suction-cooled motor poorly, so motor temperature climbs toward an overload trip or burnout. Step 2: The compressor also moves fewer pounds of refrigerant, so oil return weakens while discharge temperature rises and oil breaks down. Step 3: Both paths end at the same machine being damaged by a system fault, not by a defect in the compressor itself.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A unit trips its high-pressure cut-out every hot afternoon. The condenser coil is packed with dirt. Explain the chain from dirt to trip, and the correct repair.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Dirt insulates the condenser, so heat rejection falls. Step 2: Condensing temperature and therefore discharge pressure climb to reject the same heat. Step 3: Pressure reaches the cut-out setting and the control stops the compressor to protect it. Step 4: The repair is cleaning the coil and verifying airflow, not raising the cut-out setting or bypassing it.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> Why does a crankcase heater matter most at start-up after a long off period on a cold night?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: While off, refrigerant migrates toward the coldest point, which can be the compressor shell, and dissolves in the oil. Step 2: At start-up, pressure in the shell drops and that refrigerant boils out violently, foaming the oil out of the sump. Step 3: The heater keeps the shell warm while off so the oil stays the warmest place, migration is discouraged, and bearings start with oil present.</p>"
    }
  ],
  quiz: [
    {
      q: "The compressor's two jobs are:",
      choices: ["Metering refrigerant and absorbing heat", "Circulating refrigerant and raising its pressure", "Condensing vapor and storing liquid", "Filtering oil and drying refrigerant"],
      answer: 1,
      explanation: "Correct: (b). Pumping vapor around the loop and lifting its pressure is the compressor's whole function. (a) Metering is the metering device's job and absorbing heat is the evaporator's. (c) Condensing happens in the condenser and storage in a receiver. (d) Filtering and drying belong to a filter-drier accessory."
    },
    {
      q: "A scroll compressor compresses vapor by:",
      choices: ["A piston moving in a cylinder", "A roller sweeping a cylinder once per revolution only", "Two spiral scrolls, one orbiting, shrinking pockets toward the center", "Two intermeshing screws"],
      answer: 2,
      explanation: "Correct: (c). The orbiting scroll traps pockets that shrink as they travel inward. (a) describes a reciprocating compressor. (b) is a partial picture of rotary operation, not scrolls. (d) describes a screw compressor, covered in commercial courses."
    },
    {
      q: "A hermetic compressor differs from a semi-hermetic in that it:",
      choices: ["Uses no oil", "Is welded shut and replaced rather than internally repaired", "Has an external motor", "Runs only on ammonia"],
      answer: 1,
      explanation: "Correct: (b). The welded shell is not opened for service. (a) Hermetics depend on oil like every compressor here. (c) An external motor describes open-drive construction. (d) Hermetics dominate ordinary halocarbon systems, not ammonia-only service."
    },
    {
      q: "Suction-cooled hermetic motors are endangered by low charge mainly because:",
      choices: ["Low charge makes suction vapor colder and denser", "Hot, thin suction vapor cools the motor poorly while oil return weakens", "Low charge raises condenser airflow", "The overload is disabled at low charge"],
      answer: 1,
      explanation: "Correct: (b). High superheat from low charge means the vapor arriving to cool the motor is hot and less dense, and less refrigerant movement means weaker oil return. (a) reverses the temperature effect. (c) Charge does not change condenser airflow. (d) Protection stays active; it trips because conditions are bad."
    },
    {
      q: "Floodback is:",
      choices: ["Liquid refrigerant returning to the compressor while it runs", "Vapor leaving the evaporator slightly superheated", "Oil pooling in the evaporator", "Condensate overflowing the drain pan"],
      answer: 0,
      explanation: "Correct: (a). Liquid returning during operation dilutes oil and can slug the machine. (b) Slightly superheated vapor is the desired condition. (c) Oil logging in a coil is a different fault with different signs. (d) Condensate is water from air, unrelated to refrigerant state."
    },
    {
      q: "A high-pressure cut-out that keeps tripping should be treated as:",
      choices: ["A defective switch until proven otherwise", "A report of excessive discharge pressure whose cause must be found", "A nuisance to bypass during heat waves", "Proof the system is overcharged in every case"],
      answer: 1,
      explanation: "Correct: (b). The control is reporting a real condition such as poor condenser airflow, dirt, or overcharge; diagnose the cause. (a) Switches fail, but pressure must be measured before blaming the messenger. (c) Bypassing protection converts a shutdown into a destroyed compressor. (d) Overcharge is only one of several causes."
    },
    {
      q: "The purpose of a crankcase heater is to:",
      choices: ["Warm the refrigerated space during defrost", "Keep discharge gas hot", "Keep the shell warm while off so refrigerant does not migrate into the oil", "Heat the oil to thin it for start-up in summer"],
      answer: 2,
      explanation: "Correct: (c). Warm oil discourages refrigerant migration and the foaming that strips oil at start-up. (a) Defrost heat is a separate system function. (b) Discharge temperature is set by compression, not the heater. (d) The heater works during off periods, chiefly in cool conditions, and its target is migration, not viscosity."
    },
    {
      q: "For R-410A with a 40°F evaporator and 100°F condensing, suction and discharge are about:",
      choices: ["68.5 psig and 196 psig", "118 psig and 317 psig", "35 psig and 124 psig", "317 psig and 118 psig"],
      answer: 1,
      explanation: "Correct: (b). Those are the R-410A anchors for 40°F and 100°F. (a) lists the R-22 anchors for the same temperatures. (c) lists the R-134a anchors. (d) swaps suction and discharge, which would mean the compressor lowers pressure."
    }
  ],
  studyGuide: `
<h3>Module 4 — Major Components: Compressors: Quick Reference</h3>
<p><strong>Job:</strong> Circulate refrigerant and raise vapor pressure/temperature so the condenser can reject heat. Vapor in only — liquid destroys.</p>
<p><strong>Mechanisms:</strong> Reciprocating = piston + reed valves. Scroll = fixed + orbiting spiral, quiet, dominant in residential A/C. Rotary = roller/vane, compact, small units.</p>
<p><strong>Construction:</strong> Hermetic = welded shell, replace on internal failure. Semi-hermetic = bolted shell, shop-serviceable. Open-drive = external motor with shaft seal.</p>
<p><strong>Survival needs:</strong> Cool suction vapor for motor cooling, oil that leaves and returns, and clean dry refrigerant. Killers: floodback, overheating, lost oil return, burnout contamination.</p>
<p><strong>Protection:</strong> Internal overload, high- and low-pressure cut-outs, crankcase heater (fights refrigerant migration into oil while off). A tripped control is a diagnosis starting point, never a part to bypass.</p>
<p><strong>Anchors:</strong> R-410A 40°F ≈ 118 psig, 100°F ≈ 317 psig. R-22 40°F ≈ 68.5 psig, 100°F ≈ 196 psig. The difference is the lift the compressor must bridge.</p>
`
};
