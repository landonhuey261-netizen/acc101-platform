// HVAC 132 - Module 7: Oil Burners & Fuel Oil Systems
module.exports = {
  number: 7,
  slug: "oil-burners-fuel-oil-systems",
  title: "Oil Burners & Fuel Oil Systems",
  estTime: "3–4 hours",
  objectives: [
    "Trace the fuel path from tank to flame in a pressure-atomizing (gun) oil burner and name every component's job.",
    "Explain nozzle ratings — flow at 100 psi, spray angle, and spray pattern — and compute actual flow at other pump pressures.",
    "Describe the roles of the fuel unit (pump), its cutoff and pressure regulation, and one-pipe vs. two-pipe systems.",
    "Explain ignition by electrode and transformer, and flame proving by cad cell and primary control, including safety timing and lockout.",
    "Connect burner symptoms — soot, odor, rumble, lockouts — to fuel-side and air-side causes.",
    "State why oil combustion setup is verified with instruments (draft, smoke, CO2/O2) rather than by flame appearance."
  ],
  sections: [
    {
      heading: "The Gun Burner: Turning a Liquid into a Fire",
      html: `
<p>Fuel oil's challenge is that it arrives as a liquid, and liquids don't burn — vapors do. The pressure-atomizing <strong>gun burner</strong> solves this mechanically: it pumps oil to high pressure, forces it through a tiny nozzle that shatters it into a fog of droplets, swirls combustion air through that fog, and ignites the mixture with a high-voltage spark. The flame burns <em>in suspension</em> — a roaring cone of droplets flashing to vapor and burning in the air stream just off the nozzle.</p>
<p>The main cast, in fuel-path order:</p>
<ul>
<li><strong>Tank and oil line</strong> — storage (often with a filter at the tank and/or burner) delivering oil to the burner; lines may run overhead or buried, one-pipe or two-pipe (Section 3).</li>
<li><strong>Fuel unit (pump)</strong> — a gear pump driven by the burner motor that draws oil in, pressurizes it, regulates nozzle pressure, and contains a cutoff that stops oil flow crisply at shutdown to prevent after-drip.</li>
<li><strong>Nozzle</strong> — the metering and atomizing heart (Section 2).</li>
<li><strong>Blast tube and retention head</strong> — the air tube the flame fires through; the head shapes the air swirl that stabilizes the flame.</li>
<li><strong>Electrodes and ignition transformer</strong> — the spark source (Section 4).</li>
<li><strong>Fan (blower wheel)</strong> — on the same motor shaft as the pump, supplying combustion air through adjustable air bands/shutters.</li>
<li><strong>Primary control and cad cell</strong> — the flame-proving brain and eye (Section 4).</li>
</ul>
<div class="callout"><strong>Key idea:</strong> One motor drives both the pump and the air fan — fuel and air rise together by design. Diagnosis respects that marriage: many 'fuel' problems are air problems wearing a disguise, and vice versa.</div>`
    },
    {
      heading: "The Nozzle: Rated at 100 psi, and What That Means",
      html: `
<p>A nozzle is stamped with three specifications:</p>
<ul>
<li><strong>Flow rating in gallons per hour (GPH)</strong> — the flow it delivers <em>at 100 psi</em> pump pressure, the industry rating standard.</li>
<li><strong>Spray angle</strong> (commonly 60°, 70°, 80°) — the cone width, chosen to match the combustion chamber's shape so the flame fills it without impinging on walls (impingement = quenching = soot and CO, Module 1's physics in oil dress).</li>
<li><strong>Spray pattern</strong> — hollow cone, solid cone, or in-between types, distributing droplets differently within the cone for different chamber and burner designs.</li>
</ul>
<p>Flow follows a square-root law with pressure:</p>
<div class="formula">Actual GPH = Rated GPH × √(actual pressure ÷ 100 psi)</div>
<p><strong>Worked example.</strong> A nozzle rated 0.75 GPH runs at a pump pressure of 140 psi (many modern burners specify pressures above the 100 psi rating point for finer atomization). Actual flow = 0.75 × √(140/100) = 0.75 × √1.4 ≈ 0.75 × 1.183 ≈ <strong>0.89 GPH</strong>. With No. 2 oil at about 140,000 Btu/gal, input ≈ 0.89 × 140,000 ≈ <strong>124,000 Btu/h</strong>. Moral: raising pump pressure raises input — the nozzle and the pressure are a matched pair specified by the appliance manufacturer, and 'a little more pressure for a better flame' is over-firing by another route.</p>
<p>Service truths: nozzles are precision parts with microscopic passages — handle them clean, replace rather than 'clean and pray' when fouled (a partly plugged nozzle distorts the spray and the flame), and always replace with the exact rating/angle/pattern specified unless the manufacturer approves a change. The strainer in the nozzle adapter and the pump strainer and line filter are the nozzle's bodyguards: service them on schedule.</p>
<div class="callout"><strong>Key idea:</strong> GPH is rated at 100 psi. Flow scales with √pressure. Input (Btu/h) = actual GPH × ~140,000 for No. 2 oil. Change the pressure or the nozzle and you have re-rated the appliance — deliberately or accidentally.</div>`
    },
    {
      heading: "Fuel Units, Lines, and Air Problems in the Oil Supply",
      html: `
<p>The <strong>fuel unit</strong> (pump) does four jobs: lift oil from the tank, pressurize it to the regulated nozzle pressure (set with an adjusting screw and verified with a pressure gauge on the pump's gauge port — the manufacturer's specified pressure governs; 100 psi is the nozzle-rating standard and many burners run higher by design), bypass the excess oil the nozzle doesn't use, and <strong>cut off</strong> flow at shutdown so pressure collapses and the nozzle stops dripping into a hot chamber (after-drip smokes, smells, and carbons up the head).</p>
<ul>
<li><strong>One-pipe system:</strong> a single line from tank to pump; the pump's internal bypass returns excess oil to its own inlet. Simple, common when the tank is level with or above the burner. The pump's bypass plug must NOT be installed in one-pipe service.</li>
<li><strong>Two-pipe system:</strong> supply plus a return line to the tank; required when the pump must lift oil significantly (tank below the burner) — the bypass plug IS installed and excess oil returns to the tank, continuously deaerating the supply.</li>
</ul>
<p><strong>Air is the oil system's saboteur.</strong> A suction-side leak doesn't drip oil out — it breathes air <em>in</em>, invisibly, producing flame flicker, rumble, delayed cutoff, and lockouts that come and go. The diagnostic instrument is a <strong>vacuum gauge</strong> on the pump inlet: excessive vacuum reads restrictions (clogged filter, kinked line, stuck check valve, gelled oil in cold weather); unstable vacuum with air bubbles at a bleeder/test point reads suction leaks. Bleeding a one-pipe system after a filter change or a run-dry tank — at the pump's bleeder port, into a container, until the stream runs clear and bubble-free — is core oil-craft, done with fire-safety discipline (no open containers near ignition, spills cleaned immediately, never bleed into a running burner beyond procedure).</p>
<div class="callout"><strong>Key idea:</strong> Oil calls are half plumbing: pressure gauge on the outlet side, vacuum gauge on the inlet side. Pressure tells you regulation; vacuum tells you supply health; air in the suction side explains the 'haunted' burner that fails differently every visit.</div>`
    },
    {
      heading: "Ignition, the Cad Cell, and the Primary Control",
      html: `
<p><strong>Ignition.</strong> Two <strong>electrodes</strong>, positioned in front of the nozzle with gaps and distances set precisely (by gauge, to the burner maker's specification — small fractions of an inch matter), receive high voltage from an <strong>ignition transformer</strong> (modern units often use electronic igniters). The spark arcs between the electrode tips in the path of the oil spray: droplets crossing the arc flash into flame. Weak spark stories: cracked electrode insulators, carbon-fouled tips, wrong gaps, failing transformer, or a spray pattern that misses the arc (wrong or damaged nozzle — the components testify against each other).</p>
<p><strong>Flame proving — the cad cell.</strong> Oil's flame eye is the <strong>cad cell</strong>: a cadmium-sulfide photocell whose electrical resistance is high in darkness and falls sharply when flame light strikes it. The primary control watches that resistance: flame light present → low resistance → 'flame proven'; dark → high resistance → 'no flame.' It is the oil counterpart of gas flame rectification (Module 3) — same job (prove flame or close the fuel supply), different physics (light instead of flame conductivity).</p>
<p><strong>The primary control's logic.</strong> On a call for heat, the control starts the burner motor and ignition, and opens the oil path (pump pressure builds; some systems add an oil solenoid for tighter cutoff). The cad cell must report flame within the control's <strong>safety timing</strong> — a short window in the seconds range, per the control's listing — or the control locks out: motor stopped, red reset button popped on classic controls, and a human required to reset after finding the cause. During the run, loss of cad-cell signal (flame failure, or a soot-blinded cell — the eye can be dirty while the flame is fine) shuts the burner down and, after the control's logic, locks out. The reset button's discipline mirrors Module 5's rollout rule: one reset to test is diagnosis; repeated resets pump unburned oil into the chamber with every failed trial, loading it for a violent delayed ignition — the dreaded 'puffback' that blows soot through the house. If it locks out twice, stop resetting and start diagnosing.</p>
<div class="callout"><strong>Key idea:</strong> Cad cell = light-sensitive resistor; dark = no flame proven. Safety timing limits how long oil may spray unburned. Every reset press spends one more chamber-load of oil — spend them like they matter, because a puffback is what they buy when spent carelessly.</div>`
    },
    {
      heading: "Setting Up and Troubleshooting Oil Combustion",
      html: `
<p>Oil setup is an instrument procedure, never a flame-beauty contest. After mechanical service (nozzle, electrodes, filters, strainers), the burner is dialed in with:</p>
<ul>
<li><strong>Draft measurement</strong> over the fire and in the flue — the chimney must pull as specified (manufacturer/code values govern; the classic teaching target for over-fire draft on residential units is a small negative reading in hundredths of an inch of water column — always verify against the appliance literature).</li>
<li><strong>Smoke test</strong> — a hand pump draws flue gas through filter paper; the stain is compared to a scale (the goal for modern setups is a trace to zero smoke at steady state per manufacturer guidance).</li>
<li><strong>CO<sub>2</sub> or O<sub>2</sub> reading</strong> (Module 6's logic): air is adjusted at the bands to land in the manufacturer's band — enough excess air for clean burning without chilling the flame or wasting heat up the stack.</li>
<li><strong>Stack temperature</strong> — completing the steady-state efficiency picture.</li>
</ul>
<p><strong>Symptom map.</strong> Sooting and odor: air starvation, wrong/damaged nozzle, impingement, low draft. Rumble/pulsation: air in the oil, delayed ignition, draft problems. Frequent lockout with a good flame: cad cell soot-blinded or failing. Lockout with no flame: the triangle in oil terms — no fuel (tank, filter, pump, air-bound suction), no spark (electrodes/transformer), or no air path. Each symptom names its system; the gauges (pressure, vacuum, draft, smoke, O<sub>2</sub>/CO<sub>2</sub>) confirm it.</p>
<div class="callout"><strong>Key idea:</strong> Eye says 'looks fine'; instruments say 'is fine.' Oil work is finished with numbers — draft, smoke, O2/CO2, stack temp — recorded on the ticket, same discipline as gas combustion analysis.</div>`
    }
  ],
  keyTerms: [
    { term: "Gun burner", def: "A pressure-atomizing oil burner: pump, nozzle, air fan, electrodes, and controls in one assembly firing oil as a suspended spray flame." },
    { term: "Nozzle rating (GPH)", def: "The oil flow a nozzle delivers at 100 psi; actual flow = rating × √(pressure ÷ 100)." },
    { term: "Spray angle", def: "The cone width of the nozzle spray, matched to combustion-chamber shape to avoid flame impingement." },
    { term: "Spray pattern", def: "The distribution of droplets within the spray cone (hollow, solid, or intermediate), selected for the burner/chamber." },
    { term: "Fuel unit (pump)", def: "The motor-driven gear pump that lifts, pressurizes, regulates, and cuts off oil flow to the nozzle." },
    { term: "Cutoff (pump)", def: "The pump valve function that collapses nozzle pressure at shutdown to prevent after-drip." },
    { term: "After-drip", def: "Oil dribbling from the nozzle after shutdown, causing odor, smoke, and carboning." },
    { term: "One-pipe system", def: "A single oil line tank-to-pump with internal bypass; the bypass plug is not installed." },
    { term: "Two-pipe system", def: "Supply plus return lines; bypass plug installed; used when the pump must lift oil from a lower tank; continuously deaerates." },
    { term: "Bypass plug", def: "A pump fitting installed for two-pipe operation and omitted for one-pipe operation." },
    { term: "Vacuum gauge (oil)", def: "A gauge on the pump inlet measuring suction; high/unstable readings diagnose restrictions and suction-side air leaks." },
    { term: "Electrodes", def: "The paired rods positioned before the nozzle across which the ignition spark arcs." },
    { term: "Ignition transformer", def: "The step-up device supplying high voltage to the electrodes (modern equivalent: electronic igniter)." },
    { term: "Cad cell", def: "A cadmium-sulfide photocell whose resistance falls in flame light; the primary control's flame-proving eye." },
    { term: "Primary control", def: "The oil burner's safety control: starts the burner, supervises the cad cell, enforces safety timing, and locks out on flame failure." },
    { term: "Safety timing", def: "The short window in which flame must be proven after startup before the primary control locks out." },
    { term: "Puffback", def: "The violent ignition of oil vapor accumulated in the chamber from repeated failed ignition attempts or after-drip." },
    { term: "Smoke test", def: "A flue-gas filter-paper stain compared to a scale to quantify soot production during setup." },
    { term: "Retention head", def: "The burner head geometry that swirls combustion air to stabilize the flame root." }
  ],
  video: {
    title: "Oil Nozzles",
    embedUrl: "https://www.youtube.com/embed/3qbFlg7qm0Q",
    note: "A lesson on the oil nozzle's function: how it atomizes fuel, how viscosity affects it, how pump pressure changes delivery, and what causes after-drip. Connect the flow discussion to this module's square-root rule for flow versus pressure.",
    more: [
      { title: "oil furnace pump screens", url: "https://www.youtube.com/watch?v=G_78-rh2He4" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A burner specified for a 0.85 GPH nozzle at 100 psi is found running at 145 psi pump pressure with the 0.85 nozzle still installed. Compute the actual flow and the resulting input (No. 2 oil ≈ 140,000 Btu/gal), and state the two specification-faithful ways to bring input back to design intent.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Actual flow = 0.85 × √(145/100) = 0.85 × √1.45 ≈ 0.85 × 1.204 ≈ 1.02 GPH. Step 2: Input ≈ 1.02 × 140,000 ≈ 143,000 Btu/h — versus the design 0.85 × 140,000 = 119,000 Btu/h. The burner is over-fired by about 20%. Step 3: Fix option A — set pump pressure back to the manufacturer's specified pressure for that nozzle (if the spec is 100 psi, flow returns to 0.85 GPH by definition of the rating). Step 4: Fix option B — if the appliance specification calls for the higher pressure, install the smaller nozzle the manufacturer's table pairs with that pressure to deliver the design GPH. Step 5: Either way, nozzle and pressure are chosen from the appliance's specification table as a pair, then combustion is verified with draft, smoke, and O<sub>2</sub>/CO<sub>2</sub> — never by flame looks.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A two-pipe oil system was converted to one-pipe during a tank replacement, and now the burner short-cycles on lockout with flickering flame. The pump's bypass plug was left installed. Explain the mechanism and the correction.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: In two-pipe operation the bypass plug routes the pump's excess oil out the return line to the tank. Step 2: With the return line gone (one-pipe) but the plug still installed, the bypassed oil has nowhere proper to go — it deadheads/recirculates abnormally, aerating and destabilizing the pump's suction and pressure behavior; classic symptoms are flicker, noise, and erratic flame that trips the primary. Step 3: Correction: remove the bypass plug for one-pipe service (per the pump manufacturer's instructions), then bleed the system at the bleeder port until the oil runs clear and bubble-free. Step 4: Verify with gauges: steady inlet vacuum and specified nozzle pressure through a full run, and confirm clean lockout-free operation across several cycles. Step 5: Lesson: piping configuration and pump internals are one system — changing one without the other manufactures faults.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A homeowner has pressed the primary control's reset 'six or seven times since breakfast' and now wants you to press it once more 'to see.' Explain what has likely accumulated in the appliance, what can happen on the next ignition, and your procedure instead.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Each failed trial sprays a load of oil into the chamber for the safety-timing window before lockout; six or seven trials means six or seven chamber-loads of unburned oil coating the chamber, target wall, and flue passages, with vapor building as it warms and evaporates. Step 2: The next successful spark can ignite that accumulated fuel all at once — a puffback: a pressure pulse that blows soot out of every opening, can damage the appliance and vent, and can injure anyone in front of it. Step 3: Procedure instead: hands off the reset. Make the area safe, then diagnose the original failure with the triangle — fuel delivery (tank, filter, vacuum test), spark (electrodes, transformer), air and draft — and only after the cause is found and excess oil in the chamber is addressed per manufacturer procedure (ventilation/cleaning as appropriate) attempt a controlled start, standing clear of the chamber sight path. Step 4: Educate the homeowner for next time: reset once; if it locks out again, call — the button is not a snooze alarm.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> The flame is visibly strong and steady, yet the burner locks out mid-run about every twenty minutes. The cad cell lens is filmed with soot. Explain the apparent paradox, the underlying fault chain, and the full repair (not just wiping the lens).</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Paradox resolved — the primary control doesn't see the flame; it sees the cad cell's resistance. A soot-filmed cell reports darkness in the middle of a fire, and the control obeys its eye: flame failure → lockout. Step 2: But the film itself is evidence: cad cells don't soot up in clean combustion. Something upstream is making soot — air bands closed by lint, a worn/damaged nozzle distorting spray, impingement, or low draft. Step 3: Full repair: clean or replace the cad cell AND find the soot source: service the nozzle (replace with spec), clean the fan and air passages, set electrodes, then perform a full instrument setup — draft, smoke test (goal: trace/zero per spec), O<sub>2</sub>/CO<sub>2</sub> in band, stack temperature recorded. Step 4: Verify with an extended run; a cell that stays clean through long firing proves the root cause is fixed. Wiping the lens alone schedules the same lockout for next week.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> An inlet vacuum gauge reads abnormally high and steady while the burner runs rough; the filter was just changed. List the remaining restriction suspects between the tank and the pump, in path order, and the observations that separate a restriction from a suction air leak.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Path order suspects: tank outlet/valve partially closed or its screen clogged → line obstruction (kink, crushed section, sludge) → check valve/foot valve stuck → pump inlet strainer clogged (the pump has its own screen — see the video) → oil gelled/paraffin in a cold exposed line restricting flow. Step 2: Restriction signature: high and <em>steady</em> vacuum — the pump pulls hard against a blockage. Air-leak signature: vacuum that fluctuates/flickers, often lower, with flame behavior erratic in a breathing pattern, and air bubbles visible when bleeding at the pump. Step 3: Separate them by isolating sections: vacuum test with a temporary supply from a test container at the burner (if vacuum normalizes, the fault is upstream in the line/tank path; if it persists, it's at the pump/strainer). Step 4: Repair, bleed, and re-verify gauges through a full run — vacuum in the manufacturer's normal band is the proof, not the flame's appearance.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> Explain why oil flame 'color' is an unreliable setup method compared with the instrument set (draft, smoke, O<sub>2</sub>/CO<sub>2</sub>, stack temperature), using two specific failure appearances.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Failure appearance A — a flame can look bright and 'clean' while excess air is far too high: the over-aired flame is tidy and blue-ish at the root, but it is quietly carrying efficiency up the stack and can be near lifting off. Only the O<sub>2</sub>/CO<sub>2</sub> reading exposes it. Step 2: Failure appearance B — a slightly rich flame may still present as a respectable orange cone while producing smoke number and CO that foul the exchanger across a season; the smoke test and gas readings catch what the eye forgives. Step 3: Human vision judges flame by brightness and shape; combustion quality lives in concentrations and temperatures. Step 4: Hence the rule binding Modules 6 and 7: no fuel-burning appliance — gas or oil — is 'set up' until instruments say so, and the readings go on the ticket where the next technician can trend them.</p>"
    }
  ],
  quiz: [
    {
      q: "A nozzle's GPH rating is defined at what pump pressure?",
      choices: ["Any pressure — GPH is fixed by the nozzle alone", "100 psi", "140 psi", "300 psi"],
      answer: 1,
      explanation: "Correct: (b) Nozzle flow ratings are standardized at 100 psi; actual flow scales with the square root of the pressure ratio. (a) Pressure materially changes flow — that's the point of the square-root rule. (c) 140 psi is a common operating pressure on modern burners, but the rating reference remains 100 psi. (d) 300 psi belongs to other equipment classes, not residential nozzle ratings."
    },
    {
      q: "A 1.00 GPH nozzle is run at 121 psi. Its actual flow is approximately:",
      choices: ["1.21 GPH", "1.10 GPH", "1.00 GPH", "0.91 GPH"],
      answer: 1,
      explanation: "Correct: (b) Flow = 1.00 × √(121/100) = 1.00 × √1.21 = 1.10 GPH. (a) applies the pressure ratio linearly — flow follows the square root, not the ratio itself. (c) ignores pressure entirely; at 121 psi the nozzle passes more than its 100-psi rating. (d) inverts the relationship — higher pressure raises flow, never lowers it."
    },
    {
      q: "The cad cell proves flame by:",
      choices: ["Conducting flame current like a gas flame rod", "Changing resistance with light: dark = high resistance (no flame), flame light = low resistance", "Generating millivolts from heat", "Sensing chamber pressure"],
      answer: 1,
      explanation: "Correct: (b) The cadmium-sulfide cell is a light-dependent resistor the primary control reads as its flame signal. (a) describes gas flame rectification (Module 3) — oil uses light, not flame conductivity. (c) describes a thermocouple — heat-to-voltage, used on standing pilots. (d) Pressure proving is the gas furnace pressure switch's job (Module 5), unrelated to the cad cell."
    },
    {
      q: "In a one-pipe oil system, the pump's bypass plug should be:",
      choices: ["Installed, always", "Not installed — it belongs to two-pipe operation", "Installed only in winter", "Replaced with a filter"],
      answer: 1,
      explanation: "Correct: (b) The bypass plug routes excess oil to a return line; with no return line (one-pipe), leaving it installed disrupts pump operation and aerates the supply. (a) 'Always' is how this exact fault gets created during tank conversions. (c) Season has nothing to do with internal pump routing. (d) The plug is a port fitting, not a filtration point — filters live in the line and pump strainer."
    },
    {
      q: "Repeatedly pressing the primary control reset on a locked-out burner is dangerous because:",
      choices: ["It wears out the reset button", "Each failed trial sprays more unburned oil into the chamber, which can ignite all at once — a puffback", "It overheats the cad cell", "It drains the oil tank"],
      answer: 1,
      explanation: "Correct: (b) Every trial-for-ignition loads the chamber with atomized oil; accumulated fuel plus a later spark equals a pressure pulse of soot and flame through every opening. (a) Button wear is trivial next to the explosion hazard. (c) The cad cell is a passive sensor; lockouts don't overheat it. (d) The quantities per trial are ounces — the danger is where they accumulate, not tank level."
    },
    {
      q: "A vacuum gauge on the pump inlet is primarily used to diagnose:",
      choices: ["Nozzle pressure regulation", "Suction-side health: restrictions (high steady vacuum) and air leaks (unstable vacuum)", "Draft in the flue", "Cad cell resistance"],
      answer: 1,
      explanation: "Correct: (b) Inlet vacuum reflects everything between the tank and the pump: blockages pull it high and steady; suction leaks make it flutter as air breathes in. (a) Nozzle pressure is read on the pump's pressure (gauge) port with a pressure gauge. (c) Draft is measured in the flue/over-fire with a draft gauge or analyzer. (d) Cad cell checks are electrical — an ohmmeter or the control's diagnostics."
    },
    {
      q: "After-drip at shutdown is prevented mainly by:",
      choices: ["The cad cell", "The pump's cutoff function collapsing nozzle pressure when the burner stops", "The ignition transformer", "The smoke test"],
      answer: 1,
      explanation: "Correct: (b) A healthy pump cutoff drops pressure sharply at shutdown so the nozzle stops flowing cleanly instead of dribbling into the hot chamber. (a) The cad cell only reports flame presence; it has no plumbing function. (c) The transformer makes spark, not oil control. (d) The smoke test is a measurement during setup, not a control component."
    },
    {
      q: "A soot-filmed cad cell causing lockouts, on a burner whose flame looks strong, tells the experienced technician to:",
      choices: ["Just clean the cell and leave", "Clean/replace the cell AND find the soot source, then verify with a full instrument setup (draft, smoke, O2/CO2)", "Replace the primary control first", "Increase pump pressure for a cleaner burn"],
      answer: 1,
      explanation: "Correct: (b) The filmed cell is both a fault (blind eye) and evidence (soot is being produced). Root-cause service plus instrument verification breaks the cycle. (a) treats the witness and ignores the crime — the lockouts return as the new film builds. (c) The control is obeying its input correctly; it's the input that's lying. (d) Raising pressure re-rates the appliance (square-root rule) and can worsen impingement and soot — never a cleaning method."
    }
  ],
  studyGuide: `
<h3>Module 7 — Oil Burners & Fuel Oil Systems: Quick Reference</h3>
<p><strong>Path:</strong> tank → filter → fuel unit (pump) → nozzle → suspended spray flame. One motor drives pump + air fan: fuel and air faults impersonate each other.</p>
<p><strong>Nozzle:</strong> rating in GPH <strong>at 100 psi</strong>; actual flow = rating × √(P÷100). Input ≈ actual GPH × 140,000 Btu/gal (No. 2 oil). Angle/pattern match the chamber — impingement = quench = soot/CO. Replace nozzles; don't resurrect them.</p>
<p><strong>Pump:</strong> pressure gauge on the outlet port (set to manufacturer spec), vacuum gauge on the inlet (high steady = restriction; flutter = suction air leak). Cutoff kills after-drip. <strong>Bypass plug: IN for two-pipe, OUT for one-pipe.</strong></p>
<p><strong>Proving:</strong> cad cell — resistance falls in flame light. Primary control enforces safety timing, then locks out. Reset discipline: once to test, never repeatedly — accumulated oil + spark = puffback.</p>
<p><strong>Setup is instruments:</strong> draft, smoke spot (trace/zero target per spec), O<sub>2</sub>/CO<sub>2</sub> in band, stack temp — recorded. Flame appearance is a hint, never the verdict. If the gauges and the flame disagree, believe the gauges and find out why the flame is lying.</p>
`
};
