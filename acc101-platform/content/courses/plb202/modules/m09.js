// Plumbing 202 - Module 9: Swimming Pools, Hot Tubs & Indirect Waste (NCCER L4)
module.exports = {
  number: 9,
  slug: "swimming-pools-hot-tubs-indirect-waste",
  title: "Swimming Pools, Hot Tubs & Indirect Waste (NCCER L4)",
  estTime: "3–4 hours",
  objectives: [
    "Explain why pool and hot tub water must never connect directly to the potable supply or the sewer.",
    "Describe the air gap and indirect waste requirements for pools, spas, and their equipment.",
    "Explain how a pool's circulation, filtration, and backwash systems work.",
    "Describe the backwash procedure and where backwash water may go.",
    "Name the safety and code requirements for pool drains and suction outlets."
  ],
  sections: [
    {
      heading: "Pool Water Is Not Drinking Water",
      html: `
<p>A swimming pool holds thousands of gallons of chemically treated water — chlorine or bromine, plus everything the swimmers bring in. That water must never connect directly to the potable supply, and it must never drain directly to the sewer. Both connections would be cross-connections, and both are forbidden by the code. The pool's fill water comes through an <strong>air gap</strong> or an approved backflow assembly, and the pool's waste water leaves through an <strong>indirect waste</strong> connection — a pipe that discharges into a receptor (a floor sink, a hub drain, or an air gap fitting) with a visible air gap between the pipe and the receptor.</p>
<p>The reason is the same as in Module 1: pool water is a high hazard. A direct connection to the potable supply could siphon pool water into the drinking water; a direct connection to the sewer could let sewer gas — or sewage, in a backup — into the pool's system. The indirect waste connection breaks both paths with air: the waste pipe ends above the receptor, and the receptor drains to the sewer, so there is no continuous pipe for contamination to travel through.</p>
<p>Hot tubs and spas are the same problem in a smaller package, with one added factor: the water is hot, which makes chemical and bacterial hazards worse, and the tub is often installed indoors, where a leak or a backup is discovered by damage rather than by a puddle in the yard.</p>
<div class="callout"><strong>Key idea:</strong> Pool and hot tub water is a high hazard. Fill water comes through an air gap or an approved assembly; waste water leaves through an indirect waste connection with a visible air gap.</div>`
    },
    {
      heading: "Circulation, Filtration, and the Pump Room",
      html: `
<p>A pool's water is kept clean by <strong>circulation</strong>: a pump draws water from the pool through the skimmers and the main drain, pushes it through a <strong>filter</strong> (sand, cartridge, or diatomaceous earth), and returns it to the pool through the return inlets. The pump, the filter, the heater, and the chemical feeder live in the <strong>pump room</strong> (or equipment pad), and the piping between them is sized for the flow the filter needs — a filter that is starved of flow cannot clean the water, and a pump that is oversized for the filter will damage it.</p>
<p>The <strong>main drain</strong> (more accurately, the suction outlet) deserves a special note, because it is a safety device as well as a plumbing one. A suction outlet that is uncovered, broken, or missing its cover can trap a swimmer against it with the pump's suction — a hazard that has killed children. The code and the Virginia Graeme Baker Pool and Spa Safety Act require suction outlet covers that are certified, properly fitted, and replaced on schedule, and dual outlets or a safety vacuum release system where the design requires them. A plumber who services a pool must check the covers, not just the pipes.</p>
<p>The <strong>heater</strong> warms the circulated water, and its gas or electric supply and its venting follow the same rules as any water heater. The <strong>chemical feeder</strong> adds chlorine or bromine; it must be installed so its chemicals cannot backflow into the potable supply, and its feed line must have the backflow protection the code requires.</p>
<div class="callout"><strong>Key idea:</strong> Circulation is pump → filter → returns. The suction outlet covers are life-safety equipment — certified, fitted, and replaced on schedule.</div>`
    },
    {
      heading: "Backwash: Cleaning the Filter",
      html: `
<p>A sand or diatomaceous earth filter is cleaned by <strong>backwashing</strong>: reversing the flow through the filter so the trapped dirt is flushed out. The backwash water — dirty, chemically treated water — must go somewhere legal. It is discharged through an <strong>indirect waste</strong> connection to a receptor, never directly to the sewer and never to the storm drain or the yard, because it is chemically treated wastewater. The backwash line's air gap is the protection: the pipe ends above the receptor, so a sewer backup cannot reach the filter.</p>
<p>The backwash procedure is a sequence: stop the pump, set the filter valve to backwash, start the pump, and run it until the sight glass runs clear — typically 2 to 3 minutes — then stop the pump, set the valve to rinse, run it briefly, and return the valve to filter. A backwash that runs too long wastes thousands of gallons of treated water; a backwash that runs too short leaves the filter dirty and the pool cloudy.</p>
<p>Cartridge filters are cleaned differently: the cartridge is removed and hosed off, and the wash water goes to a legal disposal point, not to the storm drain. The principle is the same — the dirt and chemicals from a filter are waste, and waste goes to the sewer through an indirect connection, never to the ground or the storm system.</p>
<div class="callout"><strong>Key idea:</strong> Backwash water is chemically treated waste. It goes to a receptor through an indirect waste connection with an air gap — never to the storm drain or the yard.</div>`
    },
    {
      heading: "Indirect Waste: The Air Gap in Practice",
      html: `
<p><strong>Indirect waste</strong> is the code's answer to any fixture or appliance whose waste must not connect directly to the drainage system: a pipe that discharges into a receptor with an air gap between the pipe and the receptor's flood-level rim. The air gap must be at least <strong>twice the pipe diameter, with a minimum of 1 inch</strong> — the same rule as for a water supply air gap. The receptor — a floor sink, a hub drain, or a funnel drain — is itself trapped and vented and connected to the drainage system, so the waste reaches the sewer through a trapped, vented path while the air gap breaks the direct connection.</p>
<p>Indirect waste is required for more than pools. Commercial dishwashers, ice machines, food preparation sinks, condensate drains from air conditioning, and the discharge from a water heater's temperature and pressure relief valve all discharge indirectly, for the same reason: a direct connection would let sewer gas or sewage reach the appliance. The air gap is the protection, and the receptor is the path.</p>
<p>The common failure is a waste pipe that has been pushed down into the receptor, closing the air gap — often by a well-meaning person trying to stop a splash. An air gap that is closed is no longer an air gap, and the protection is gone. The plumber's job is to check the gap, not just the pipe.</p>
<div class="callout"><strong>Key idea:</strong> Indirect waste is a pipe discharging into a receptor with an air gap of at least twice the pipe diameter (minimum 1 inch). A closed air gap is no protection at all.</div>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Pool and hot tub water is a high hazard: fill through an air gap or an approved assembly; waste through an indirect waste connection.</li>
<li>Circulation is pump → filter → returns; the pump room holds the pump, filter, heater, and chemical feeder.</li>
<li>Suction outlet covers are life-safety equipment — certified, fitted, and replaced on schedule.</li>
<li>Backwash water is chemically treated waste: to a receptor through an indirect connection, never to the storm drain or the yard.</li>
<li>Indirect waste: a pipe discharging into a trapped, vented receptor with an air gap of at least twice the pipe diameter (minimum 1 inch).</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Connecting a pool's backwash line directly to the sewer or the storm drain. Backwash water is chemically treated waste and needs an indirect connection with an air gap.</div>
<div class="callout"><strong>Common mistake:</strong> Pushing a waste pipe down into its receptor to stop a splash. The splash is a nuisance; the closed air gap is a lost protection.</div>
<p><strong>Ready-to-Work link:</strong> The next module moves the water outside — stormwater, area drains, and the site's drainage — where the same indirect principles apply to rain.</p>`
    }
  ],
  keyTerms: [
    { term: "Indirect waste", def: "A waste pipe that discharges into a receptor (floor sink, hub drain) with an air gap between the pipe and the receptor, rather than connecting directly to the drainage system." },
    { term: "Air gap", def: "The unobstructed vertical distance between a water outlet (or a waste pipe) and the flood-level rim of the fixture or receptor; at least twice the pipe diameter, minimum 1 inch." },
    { term: "Receptor", def: "A trapped, vented fixture (floor sink, hub drain, funnel drain) that receives indirect waste and carries it to the drainage system." },
    { term: "Circulation", def: "The movement of pool water by pump through the skimmers and main drain, through the filter, and back to the pool." },
    { term: "Filter", def: "The device that removes dirt from pool water: sand, cartridge, or diatomaceous earth." },
    { term: "Backwash", def: "Reversing the flow through a filter to flush out trapped dirt; the backwash water is discharged indirectly." },
    { term: "Suction outlet / main drain", def: "The pool's bottom outlet through which the pump draws water; its cover is life-safety equipment." },
    { term: "Pump room", def: "The room or pad holding a pool's pump, filter, heater, and chemical feeder." },
    { term: "Chemical feeder", def: "The device that adds chlorine or bromine to pool water; its feed line needs backflow protection." },
    { term: "Skimmer", def: "The pool fitting that draws water (and floating debris) from the surface into the circulation system." },
    { term: "Return inlet", def: "The pool fitting through which filtered water returns to the pool." },
    { term: "Virginia Graeme Baker Act", def: "The federal law requiring certified suction outlet covers (and dual outlets or a safety vacuum release system where required) on pools and spas." }
  ],
  video: {
    title: "How To Make a Pool Filtration Schedule",
    embedUrl: "https://www.youtube.com/embed/7fg8-jHyQ1I",
    note: "A pool professional explains how to set a filtration schedule — run time, backwash timing, and the pump and filter working together. Watch it, then explain why a backwash that runs too long wastes treated water and a backwash that runs too short leaves the filter dirty.",
    more: [
      { title: "Bestway Filter Pump Settings - Backwash Procedure - Explained!", url: "https://www.youtube.com/watch?v=id-zD7fbolE" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A pool's fill line connects directly to the potable water supply with no air gap and no backflow assembly. What is wrong?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The connection is a cross-connection to a high hazard — chemically treated pool water. Step 2: A supply pressure drop could siphon pool water into the drinking water. Step 3: The fill must come through an air gap or an approved backflow assembly (an RPZ for a high hazard), so the pool water can never reach the potable supply.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A 2-inch backwash pipe discharges into a floor sink. What is the minimum air gap, and how is it measured?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The air gap must be at least twice the pipe diameter, with a minimum of 1 inch. Step 2: Twice 2 inches is 4 inches, which is the minimum gap. Step 3: It is measured from the end of the pipe to the flood-level rim of the floor sink.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A pool's filter pressure gauge has risen 10 psi above its clean reading. What does that mean, and what is the fix?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: A rising pressure gauge means the filter is clogged with trapped dirt — the pump is working harder to push water through. Step 2: The fix is to backwash (for a sand or DE filter) or to remove and hose off the cartridge. Step 3: After backwashing, the gauge should return near its clean reading; if it does not, the filter media may need replacement.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A pool's main drain cover is cracked and loose. What must be done, and why is it urgent?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The pool must be closed until the cover is replaced. Step 2: A broken or missing suction outlet cover can trap a swimmer against the drain with the pump's suction — a hazard that has killed children. Step 3: The replacement cover must be certified and properly fitted, and its replacement must be recorded on schedule.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A restaurant's ice machine drains directly into the building sewer with no air gap. What is wrong?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The ice machine's waste must discharge indirectly — through an air gap into a receptor — because a direct connection lets sewer gas or sewage reach the machine. Step 2: Ice is food, so the hazard is a health hazard, not a nuisance. Step 3: The fix is to re-pipe the drain to discharge into a trapped, vented receptor with an air gap of at least twice the pipe diameter (minimum 1 inch).</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A homeowner backwashes their pool and runs the backwash water onto the lawn. What is wrong?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Backwash water is chemically treated wastewater, not clean water. Step 2: It must go to a receptor through an indirect waste connection — never to the yard, the storm drain, or a direct sewer connection. Step 3: Discharging it onto the lawn pollutes the soil and the groundwater, and it is a code violation.</p>"
    }
  ],
  quiz: [
    {
      q: "A pool's fill water must come through:",
      choices: ["A direct connection to the supply", "An air gap or an approved backflow assembly", "A garden hose", "The filter"],
      answer: 1,
      explanation: "Correct: (b). Fill water needs an air gap or an approved assembly because pool water is a high hazard. (a) A direct connection is a cross-connection. (c) A garden hose is not a fill connection. (d) The filter is part of circulation, not filling."
    },
    {
      q: "The minimum air gap for a 2-inch waste pipe is:",
      choices: ["1 inch", "2 inches", "4 inches", "6 inches"],
      answer: 2,
      explanation: "Correct: (c). Twice the diameter is 4 inches (the 1-inch minimum does not apply because 4 is larger). (a) 1 inch is the minimum, not the requirement for a 2-inch pipe. (b) 2 inches is the diameter, not twice it. (d) 6 inches is the vent rise above a flood-level rim, not an air gap."
    },
    {
      q: "Backwash water must be discharged:",
      choices: ["Directly to the sewer", "To the storm drain", "Through an indirect waste connection to a receptor", "Onto the lawn"],
      answer: 2,
      explanation: "Correct: (c). Backwash water is chemically treated waste and needs an indirect connection. (a) A direct sewer connection lets sewer gas or sewage reach the filter. (b) The storm drain is for rainwater, not treated waste. (d) The lawn is not a legal disposal point."
    },
    {
      q: "A rising filter pressure gauge means:",
      choices: ["The filter is clean", "The filter is clogged with trapped dirt", "The pump is too small", "The pool is too warm"],
      answer: 1,
      explanation: "Correct: (b). A rising gauge means the filter is clogging and the pump is working harder. (a) A clean filter reads its baseline pressure. (c) Pump size does not change the gauge's rise. (d) Temperature does not affect the pressure gauge."
    },
    {
      q: "A cracked main drain cover is urgent because:",
      choices: ["It leaks water", "The pump's suction can trap a swimmer against the outlet", "It looks bad", "It clogs the filter"],
      answer: 1,
      explanation: "Correct: (b). A broken suction outlet cover is a life-safety hazard. (a) Leaking is a minor problem by comparison. (c) Appearance is irrelevant. (d) The cover does not affect the filter."
    },
    {
      q: "An ice machine's drain must discharge:",
      choices: ["Directly to the sewer", "Indirectly, through an air gap into a receptor", "To the storm drain", "Into a bucket"],
      answer: 1,
      explanation: "Correct: (b). Ice is food, so its drain needs an indirect waste connection with an air gap. (a) A direct connection lets sewer gas reach the machine. (c) The storm drain is for rainwater. (d) A bucket is not a drain."
    },
    {
      q: "A receptor for indirect waste is:",
      choices: ["A pipe that goes straight to the sewer", "A trapped, vented fixture (floor sink, hub drain) that receives the waste", "A bucket", "A pump"],
      answer: 1,
      explanation: "Correct: (b). A receptor is a trapped, vented fixture that carries the waste to the drainage system. (a) A direct pipe is the opposite of indirect waste. (c) A bucket is not a receptor. (d) A pump moves water; it does not receive indirect waste."
    },
    {
      q: "Circulation in a pool is:",
      choices: ["Pump → filter → returns", "Filter → pump → returns", "Returns → pump → filter", "Heater → filter → pump"],
      answer: 0,
      explanation: "Correct: (a). The pump draws water through the skimmers and main drain, pushes it through the filter, and returns it to the pool. (b), (c), and (d) put the parts in the wrong order."
    }
  ],
  studyGuide: `
<h3>Module 9 — Pools, Hot Tubs & Indirect Waste: Quick Reference</h3>
<p><strong>Pool water:</strong> High hazard · Fill through an air gap or an approved assembly · Waste through an indirect connection.</p>
<p><strong>Circulation:</strong> Pump → filter → returns · Pump room: pump, filter, heater, chemical feeder.</p>
<p><strong>Suction outlets:</strong> Covers are life-safety equipment — certified, fitted, replaced on schedule · Pool closed until a broken cover is replaced.</p>
<p><strong>Backwash:</strong> Reverse the flow until the sight glass runs clear · Discharge indirectly to a receptor, never to the storm drain or the yard.</p>
<p><strong>Indirect waste:</strong> Pipe discharges into a trapped, vented receptor · Air gap ≥ twice the pipe diameter, minimum 1 inch · A closed air gap is no protection.</p>
<p><strong>Self-check:</strong> Given a 2-inch backwash pipe and a floor sink, what is the minimum air gap, and where is it measured from and to?</p>
`
};
