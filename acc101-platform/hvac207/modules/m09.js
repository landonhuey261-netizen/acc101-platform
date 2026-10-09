// HVAC 207 - Module 9: Evacuation & Charging of Commercial Systems
module.exports = {
  number: 9,
  slug: "evacuation-charging-commercial-systems",
  title: "Evacuation & Charging of Commercial Systems",
  estTime: "3–4 hours",
  objectives: [
    "Explain why evacuation standards do not shrink just because the system is large: 500 microns or below, proven by a standing decay test.",
    "Describe the practical differences of evacuating large systems: bigger hoses, core tools, multiple access points, and patience.",
    "Explain receiver-based charging: why a system with a receiver is not charged to a clear sight glass alone.",
    "Charge a TXV system by subcooling and an EPR/multi-evaporator system load by load, with worked R-404A numbers.",
    "State the refrigerant-handling rules that frame the work: recover before opening, never vent, weigh and record large additions (Module 8)."
  ],
  sections: [
    {
      heading: "Evacuation at Commercial Scale",
      html: `
<p>The standard does not change with system size: pull the system down to <strong>500 microns or below</strong> and prove it holds with a standing (decay) test — isolate the vacuum pump, watch the micron gauge, and confirm the pressure stays low and steady rather than climbing toward atmosphere (a leak) or plateauing at a level that betrays boiling moisture. Moisture is the enemy at any scale: it freezes at metering devices, hydrolyzes oil into acids, and corrodes from inside for the life of the system.</p>
<p>What changes is the plumbing and the clock. A rack or large split system has long piping runs and real internal volume; a vacuum pulled through one small charging hose at one port is a rumor of a vacuum at the far end. Professional practice on large systems scales up everything: large-diameter vacuum hoses, valve core removal tools so the Schrader cores are not the bottleneck, vacuum-rated connections at <em>both</em> ends of the system where possible, and a two-stage rotary vane pump sized for the work. The far end gets its own micron gauge — you verify the vacuum where the vacuum matters most, at the system, not just at the pump.</p>
<div class="callout"><strong>Key idea:</strong> Big systems are not evacuated to a lower standard; they are evacuated with bigger plumbing and more measurement points, to the same 500-micron, decay-proven standard.</div>
<p>Warmth helps quietly: refrigerant oil holds moisture and releases it slowly, and a system opened on a cold morning evacuates slower than the same system at room temperature. Where a system is badly wet, gentle heat on the compressor sump and large components during evacuation is an old, legitimate trick — the vacuum standard does not change, but the water's willingness to leave improves.</p>`
    },
    {
      heading: "Decay Test: Reading What the Gauge Tells You",
      html: `
<p><strong>Worked example — three decay results.</strong> You have pulled a repaired walk-in system to 400 microns and isolated the pump. Step 1: System A rises to 450 microns in ten minutes and levels off: a tight, dry system — the small rise is outgassing and temperature settling, and leveling is the signature of done. Step 2: System B rises steadily toward atmospheric pressure without slowing: air is entering — there is a leak to find (Module 10), and no amount of extra pumping fixes a hole. Step 3: System C rises to a plateau in the low thousands of microns and stalls: that stall is water boiling off inside the system; the system is wet, and the answers are more pumping time, dry nitrogen sweeps, and warmth — a triple-evacuation approach — not a shrug and a charge. Same gauge, three different stories; the decay test is an instrument, not a formality.</p>
<p>Field discipline follows: never judge vacuum by how long the pump ran, and never break a finished vacuum with air — use dry nitrogen to bring a system to atmospheric pressure for any further work, so the moisture you just removed is not invited back in through the service ports.</p>
<div class="callout"><strong>Key idea:</strong> Rise-and-level = tight and dry. Rise-forever = leak. Rise-and-plateau = moisture boiling. The decay curve is the diagnosis.</div>
<p>A practical rule for judging "levels off": give the isolated system a real interval — ten minutes is a common field minimum on small work, longer on big piping — and require the rise to clearly flatten, not merely slow. A curve still bending upward at the end of your patience is a curve you have not finished reading.</p>`
    },
    {
      heading: "Charging into a Receiver: The Sight Glass Trap",
      html: `
<p>Small critically charged systems (Module 3) are weighed in and done. Commercial systems with a <strong>receiver</strong> play by different rules: the receiver is a reservoir that intentionally holds a varying liquid inventory as load and ambient conditions change. The classic old instruction — charge until the sight glass clears — is a trap on such systems. A sight glass shows bubbles or clear liquid at one point in the liquid line; bubbles can also mean a restriction or pressure drop upstream flashing the liquid, and a system can show a clear glass while being pounds overcharged, with the excess parked invisibly in the receiver and condenser. On flooded-condenser systems (Module 7) the trap is deeper still: the correct charge includes the winter flooding inventory.</p>
<p>The receiver-respecting method: charge by <strong>weight against the manufacturer's specification</strong> where one is given, then verify by operation — measure <strong>subcooling</strong> as the system's report of liquid condition, confirm superheat at the evaporators, and sanity-check receiver level where a level glass or chart exists. The sight glass demotes to a supporting clue: persistent bubbles <em>plus</em> low subcooling <em>plus</em> hungry evaporators is a real undercharge story; a lone bubble sighting is not.</p>
<div class="formula">Subcooling (°F) = Saturation temperature (bubble point, for blends) − Liquid line temperature</div>`
    },
    {
      heading: "Worked Charging Checks on R-404A",
      html: `
<p><strong>Example 1 — subcooling on a TXV walk-in system.</strong> R-404A, and for subcooling you use the <strong>bubble point</strong>. Head pressure reads about 198 psig, which the bubble-point column of the P/T chart puts at about 100°F saturation. The liquid line temperature, clamped carefully and insulated, reads 88°F. Step 1: Subcooling = 100 − 88 = <strong>12°F</strong>. Step 2: That is a healthy, well-fed liquid line for a TXV system — the valve has solid liquid and the cushion it needs. Had the liquid line read 97°F (3°F subcooling) with a flashing glass and warm box, the same arithmetic would tell a true undercharge story.</p>
<p><strong>Example 2 — superheat at an evaporator.</strong> Suction pressure at the evaporator outlet reads about 66 psig; for superheat use the <strong>dew point</strong>: about 40°F saturation. The suction line at the same point reads 50°F. Superheat = 50 − 40 = <strong>10°F</strong> — liquid is fully boiled off well before the outlet and the compressor downstream gets vapor only. On multiple-evaporator systems (Module 4) you repeat this check at <em>each</em> evaporator, ahead of each EPR: the rack's suction superheat at the machine room is a blend of everyone's leftovers and certifies nobody in particular.</p>
<div class="callout"><strong>Key idea:</strong> Dew point for superheat, bubble point for subcooling, measured where the condition lives. On shared systems, every evaporator gets its own reading.</div>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Evacuate to 500 microns or below and prove it with a decay test — at any system size.</li>
<li>Large systems demand large hoses, removed cores, and a micron gauge at the system.</li>
<li>Receiver systems: charge by weight/spec, verify with subcooling and per-evaporator superheat; the sight glass is a clue, not a verdict.</li>
<li>Break vacuum with dry nitrogen, never air; recover before opening; never vent.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Clearing the sight glass by adding refrigerant to a receiver system on a hot day. You may have just hidden an overcharge in the receiver that returns as high head pressure and oil problems all summer.</div>
<div class="callout"><strong>Common mistake:</strong> Declaring evacuation done because the pump ran for an hour. Time is not a vacuum measurement; the decay test is. Big piping runs hide wet, leaky far ends from a pump-side gauge.</div>
<p><strong>Certification link:</strong> Evacuation levels and charging verification are Type II blueprint staples; on commercial accounts they are also the difference between a repair that holds and a callback with acid in the oil.</p>
<p>Tie this module back to Module 8 for one sentence of professional identity: on large charges, evacuation and charging are regulated activities performed with scales, gauges, and records — the craftsmanship and the compliance are the same act.</p>`
    }
  ],
  keyTerms: [
    { term: "Micron", def: "A unit of vacuum measurement; 1/1000 of a millimeter of mercury. Deep evacuation targets are stated in microns." },
    { term: "500-micron standard", def: "The commonly taught evacuation target: pull to 500 microns or below and verify with a standing test." },
    { term: "Standing (decay) test", def: "Isolating the vacuum pump and watching whether system pressure stays low (tight/dry), climbs steadily (leak), or plateaus (moisture)." },
    { term: "Valve core removal tool", def: "A service tool that pulls Schrader cores during evacuation so they do not restrict vacuum flow." },
    { term: "Triple evacuation", def: "Repeated evacuation broken with dry nitrogen to sweep moisture out of a wet system." },
    { term: "Dry nitrogen", def: "Moisture-free nitrogen used to break vacuum, sweep systems, and pressure-test without adding water." },
    { term: "Receiver charge", def: "The inventory of liquid refrigerant stored in the receiver, which varies legitimately with load and season." },
    { term: "Sight glass", def: "A liquid-line window showing bubbles or clear flow; useful evidence, unreliable as the sole charging criterion on receiver systems." },
    { term: "Flashing (liquid line)", def: "Liquid boiling into bubbles within the liquid line from pressure drop or heat gain — one cause of misleading sight-glass bubbles." },
    { term: "Subcooling", def: "Saturation temperature (bubble point for blends) minus liquid line temperature; the TXV system's charge-health report." },
    { term: "Superheat (recap)", def: "Suction line temperature minus saturation temperature (dew point for blends) at the same point." },
    { term: "Weigh-in charging", def: "Adding refrigerant by scale weight against a specification rather than by pressure or glass appearance." },
    { term: "Liquid charging", def: "Introducing refrigerant as liquid (into the high side of a running system, or into a vacuum) for speed on large charges — with blend-handling care." },
    { term: "Blend fractionation guard", def: "Charging zeotropic blends as liquid so the mixture entering matches the cylinder's labeled composition." },
    { term: "Two-stage vacuum pump", def: "A rotary vane pump with two pumping stages, standard for reaching deep vacuum in refrigeration service." },
    { term: "Vacuum-rated hose", def: "Large-diameter, low-permeation hose intended for evacuation rather than charging service." },
    { term: "Non-condensables (recap)", def: "Air left by poor evacuation or drawn in through leaks; raises head pressure and must be prevented by good evacuation." },
    { term: "Recovery before opening", def: "The rule that refrigerant must be recovered to the required level before a system is opened for service." }
  ],
  video: {
    title: "Vacuum Practices for Large Jobs",
    embedUrl: "https://www.youtube.com/embed/YMoP7wl8a0Y",
    note: "An HVAC School session devoted to evacuation on large systems — the hose sizes, rigging, and measurement placement this module describes, shown on real commercial-scale work rather than a bench unit.",
    more: [
      { title: "Why 500 Microns? Evacuation & Vacuum Decay Test Explained (HVAC)", url: "https://www.youtube.com/watch?v=XflHH6cNckE" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A decay test on three identical repairs gives: (a) rise of 60 microns, leveling off; (b) steady climb past 5,000 microns toward atmosphere; (c) rise to about 2,000 microns, then a long stall. State the verdict for each and the next action.</p>",
      solution: "<p><strong>Answer:</strong> (a) <strong>Tight and dry</strong> — proceed to charge. (b) <strong>Leak</strong> — pressurize with nitrogen and find it (Module 10); pumping longer will never seal a hole. (c) <strong>Wet system</strong> — moisture boiling off; continue evacuation with nitrogen sweeps/triple evacuation until the decay curve behaves like (a).</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> An R-404A system's head pressure is about 198 psig (bubble point ≈ 100°F) and its liquid line measures 95°F. (a) Compute subcooling. (b) The sight glass shows occasional bubbles. Do you add refrigerant? Defend the call.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Subcooling = 100 − 95 = <strong>5°F</strong> — lowish for a TXV system, consistent with a possible mild undercharge <em>or</em> a liquid-line pressure drop flashing the refrigerant. Step 2: Do not add on this evidence alone: first rule out a restriction or long/hot liquid run causing the flashing, and check evaporator superheat and box performance. Step 3: If the evaporators are genuinely hungry and no restriction explains it, add by weight in small increments and watch subcooling respond — evidence first, refrigerant second.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> At a rack suction service port you measure a comfortable total superheat, yet one case on the rack is starving. Why does the rack reading not clear that case, and where do you measure instead?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Rack suction superheat is measured on the <em>combined</em> vapor of dozens of evaporators; healthy cases can mask one starving case in the average. Step 2: Superheat certifies the evaporator where it is measured. Step 3: Measure at the suspect case's own evaporator outlet — ahead of its EPR if it has one — where its TXV's work is actually visible.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> Why are Schrader cores removed during the evacuation of a large system, and what tool practice replaces their sealing role while the system is open?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: A Schrader core is a small orifice; on long commercial piping runs it strangles vacuum flow so the far end of the system barely feels the pump. Step 2: Core removal tools pull the cores while providing a full-bore, vacuum-rated port with its own shutoff valve, so the system can still be isolated for the decay test. Step 3: Cores go back in at the end, under pressure control of the tool, without breaking the finished vacuum with air.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A tech must break into a system that is sitting at a proven 400 microns to replace one more fitting. What gas should bring the system up to atmospheric pressure, and why not shop air?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Use <strong>dry nitrogen</strong>. Step 2: The whole point of the evacuation was removing moisture; shop air carries water vapor (and compressor oil mist) straight back into the clean, dry piping. Step 3: Nitrogen is dry, inert in this service, and the same bottle used for pressure testing and brazing purges — one gas, handled once, correctly.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A flooded-condenser walk-in system (Module 7) shows a half-full receiver in January and the manufacturer's data says that is expected at this ambient. A helper urges adding refrigerant until the receiver looks “normal for summer.” Talk him out of it in two sentences.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: In January a large share of this system's charge is intentionally parked in the flooded condenser doing head-pressure work, so a modest receiver level is the design, not a shortage. Step 2: Adding refrigerant now invents a summer overcharge — the winter inventory plus your addition has nowhere to go when the condenser drains in warm weather.</p>"
    }
  ],
  quiz: [
    {
      q: "The evacuation target for commercial systems in this course is:",
      choices: ["Whatever the pump reaches in 30 minutes", "500 microns or below, proven by a standing decay test", "15 inches of mercury on a compound gauge", "Until the pump sound changes"],
      answer: 1,
      explanation: "Correct: (b). Deep vacuum is measured in microns at the system and proven isolated. (a) Time is not a measurement. (c) A compound gauge cannot resolve anywhere near 500 microns. (d) Pump sound is a hint, never a standard."
    },
    {
      q: "In a decay test, pressure that climbs steadily toward atmosphere without slowing means:",
      choices: ["A tight, dry system", "Moisture boiling off", "Air entering through a leak", "A gauge battery problem"],
      answer: 2,
      explanation: "Correct: (c). Air has an unlimited supply outside the system, so a leak climbs without plateauing. (a) A tight dry system levels off low. (b) Moisture stalls at a plateau while water boils. (d) Battery issues give nonsense readings, not a smooth physical climb — and you would verify the gauge before condemning the system anyway."
    },
    {
      q: "Charging a receiver-equipped TXV system primarily by clearing the sight glass is wrong because:",
      choices: ["Sight glasses are always installed backwards", "Bubbles can come from flashing caused by restriction or pressure drop, and excess charge hides invisibly in the receiver", "Glass cannot be read in daylight", "TXV systems do not use liquid lines"],
      answer: 1,
      explanation: "Correct: (b). The glass shows one point's condition; subcooling and weight against specification tell the charge story. (a) Installation direction does not change what bubbles mean. (c) Readability is a flashlight matter, not physics. (d) TXV systems are defined by their liquid feed — the liquid line is where subcooling is measured."
    },
    {
      q: "For R-404A subcooling you convert head pressure using the:",
      choices: ["Dew point", "Bubble point", "Average of the two", "Suction pressure"],
      answer: 1,
      explanation: "Correct: (b). Subcooling describes liquid, so bubble point (about 62 psig ≈ 40°F; about 198 psig ≈ 100°F as used in this module). (a) Dew point is for superheat, the vapor measurement. (c) The average is a fiction the refrigerant never experiences. (d) Suction pressure belongs to the low side and superheat work."
    },
    {
      q: "Head pressure about 198 psig (≈100°F bubble) with a 90°F liquid line gives subcooling of:",
      choices: ["0°F", "10°F", "90°F", "108°F"],
      answer: 1,
      explanation: "Correct: (b). 100 − 90 = 10°F of subcooling. (a) would require the liquid line at saturation temperature — a flashing line. (c) is the line temperature itself, not a difference. (d) adds instead of subtracting."
    },
    {
      q: "On a large system the micron gauge belongs:",
      choices: ["Only at the pump", "At the system itself, ideally including the far end of the piping", "On the discharge line", "Micron gauges are not used above 5 tons"],
      answer: 1,
      explanation: "Correct: (b). You verify vacuum where it matters — in the system, where restrictions and distance can hide a poor vacuum from a pump-side gauge. (a) is exactly the small-system shortcut this module warns against. (c) Discharge is the high side, never part of the vacuum reading. (d) Micron measurement is more necessary, not less, as systems grow."
    },
    {
      q: "A finished vacuum should be broken with:",
      choices: ["Shop air", "Room air through the manifold", "Dry nitrogen", "Refrigerant vapor from any open cylinder regardless of type"],
      answer: 2,
      explanation: "Correct: (c). Dry nitrogen restores pressure without returning moisture. (a) and (b) both invite water vapor back into a system you just dried. (d) Breaking vacuum with refrigerant is part of a controlled charging step with the <em>correct</em> refrigerant — never a generic vapor, and never a substitute for nitrogen when more brazing or opening is still ahead."
    },
    {
      q: "On a multiple-evaporator system, superheat must be verified:",
      choices: ["Once, at the compressor", "At each evaporator outlet individually", "Only on the coldest evaporator", "Only during defrost"],
      answer: 1,
      explanation: "Correct: (b). Each TXV controls its own coil; a combined suction reading averages away individual starvation or flooding. (a) Compressor superheat is a useful compressor-protection check but certifies no single coil. (c) The coldest coil is not the only one that can starve. (d) Defrost readings are transients, not charging evidence."
    }
  ],
  studyGuide: `
<h3>Module 9 — Evacuation & Charging of Commercial Systems: Quick Reference</h3>
<p><strong>Evacuation:</strong> 500 microns or below at the system, large hoses, cores out, gauge at the far end — then the decay test reads the story: level = tight/dry · endless climb = leak · plateau = moisture.</p>
<p><strong>Break vacuum with dry nitrogen only.</strong> Recover before opening; never vent; record big additions (Module 8).</p>
<p><strong>Charging receiver systems:</strong> weight/spec first · verify subcooling (TXV) and per-evaporator superheat · sight glass is a clue, not a verdict.</p>
<div class="formula">Subcooling = Bubble-point saturation − Liquid line temp &nbsp;|&nbsp; Superheat = Suction line temp − Dew-point saturation</div>
<p><strong>R-404A anchors used:</strong> bubble ≈ 62 psig @ 40°F, ≈ 198 psig @ 100°F · dew ≈ 66 psig @ 40°F.</p>
<p><strong>Self-check:</strong> Given a decay curve, a head pressure, and two line temperatures, can you deliver the verdict and the numbers without hesitating? Then Module 10's leak hunt will feel like a natural sequel.</p>

<p><strong>Numbers to keep:</strong> 500 microns or below, decay-proven; 12°F subcooling and 10°F superheat were this module's worked R-404A examples — healthy neighborhoods, not universal specs; the manufacturer's numbers govern each machine.</p>`
};
