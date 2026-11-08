// Plumbing 122 - Module 4: Hot Water: Heaters, Recirculation & Tempering
module.exports = {
  number: 4,
  slug: "hot-water-systems",
  title: "Hot Water: Heaters, Recirculation & Tempering",
  estTime: "3–4 hours",
  objectives: [
    "Compare storage tank, tankless, and heat pump water heaters and explain how each is sized.",
    "Explain the temperature and pressure relief (T&P) valve: what it protects, when it opens, and how its discharge must terminate.",
    "Explain why hot water must be tempered and state the code temperature limits for showers and tempered water.",
    "Describe hot-water recirculation systems and why IPC limits hot-water developed length to 50 feet.",
    "Explain thermal expansion in a closed system and the control the code requires."
  ],
  sections: [
    {
      heading: "Heaters: Tank, Tankless, and Heat Pump",
      html: `
<p>A <strong>storage tank water heater</strong> heats a tank of water and holds it ready. It is sized by tank capacity in gallons and by recovery rate — how fast it reheats after use. A 40- or 50-gallon tank serves a typical house. Its weakness is standby loss: it burns fuel all day to keep water hot even when nobody is using it, and it can run out during back-to-back showers.</p>
<p>A <strong>tankless (on-demand) water heater</strong> has no tank. It heats water only while a fixture is running, with a burner or electric elements that fire on flow. It is sized by <strong>temperature rise at the required flow rate</strong>: how many degrees it can add at how many gallons per minute. A tankless unit that raises 70°F water by 50°F at 5 gpm will struggle if the incoming water is 40°F in winter and two showers run at once. Tankless heaters never run out, but they have a maximum flow — exceed it and the water arrives lukewarm.</p>
<p>A <strong>heat pump water heater</strong> moves heat from the surrounding air into the tank instead of making heat directly. It uses far less electricity than a resistance heater, but it cools and dehumidifies the room it sits in and recovers more slowly. All three types share the same safety device — the temperature and pressure relief valve — covered next.</p>
<div class="callout"><strong>Key idea:</strong> Tank heaters are sized by gallons and recovery; tankless heaters are sized by temperature rise at flow rate. Pick the sizing input that matches the heater type.</div>`
    },
    {
      heading: "The T&P Valve: The Heater's Last Defense",
      html: `
<p>Every storage water heater carries a <strong>temperature and pressure relief (T&P) valve</strong>. It is the last defense against a tank becoming a bomb: if the thermostat fails and the water keeps heating, pressure and temperature climb until the tank could rupture explosively. The T&P valve opens before that happens — at <strong>210°F or 150 psi, whichever comes first</strong> — and dumps hot water out a discharge pipe.</p>
<p>The discharge pipe matters as much as the valve. It must run to a safe, visible termination — a floor drain, a laundry tub, or outside — through an <strong>air gap</strong>, so a drain backup cannot reach the heater, and it must never be capped, valved, or reduced in size. A capped T&P discharge defeats the only safety device on the tank. A discharge that terminates where nobody can see it hides a failing valve until it is too late.</p>
<p>If a T&P valve weeps or discharges, treat it as a symptom, not a nuisance. Common causes are a failed thermostat (overheating), excessive pressure (Module 5), or thermal expansion in a closed system with no expansion control (next section). Replacing the valve without finding the cause guarantees a repeat.</p>
<div class="callout"><strong>Key idea:</strong> The T&P valve opens at 210°F or 150 psi. Its discharge must run to a visible, safe termination through an air gap — never capped, never valved, never reduced.</div>`
    },
    {
      heading: "Tempering: Hot Enough to Use, Cool Enough to Survive",
      html: `
<p>Water stored at 140°F kills bacteria and supplies hot water, but 140°F water scalds in seconds — and children and elderly people are hurt fastest. The code therefore separates storage temperature from delivery temperature. A <strong>tempering (mixing) valve</strong> blends hot water with cold water at the point of use or at the heater outlet, so the water that reaches a fixture is safe even though the tank is hot.</p>
<p>Two limits govern delivery temperature. <strong>IPC 424.3</strong> requires shower and tub-shower valves to limit discharge to <strong>120°F maximum</strong> — the valve itself must be pressure-balanced or thermostatic so a toilet flush cannot send a blast of hot water to the shower. <strong>IPC 607.1.2</strong> limits tempered water from an ASSE 1070 device to <strong>110°F</strong>, the temperature used at lavatories and other points where scald protection matters most.</p>
<p>Pressure-balanced shower valves are the workhorse here: they sense a drop in cold-water pressure (when a toilet flushes) and reduce the hot flow to match, holding the mixed temperature steady. Thermostatic valves go further, sensing the mixed temperature directly and adjusting both flows. Either one beats the old two-handle shower, which had no protection at all.</p>
<div class="callout"><strong>Key idea:</strong> Store hot, deliver safe. Showers are limited to 120°F (IPC 424.3); ASSE 1070 tempered water is limited to 110°F (IPC 607.1.2). The tempering valve is what makes a hot tank safe to use.</div>`
    },
    {
      heading: "Recirculation and the 50-Foot Rule",
      html: `
<p>Hot water in a long pipe cools between uses, so the first person to open a far tap waits — and wastes water — while the cold slug clears. A <strong>recirculation system</strong> fixes this: a small pump circulates hot water through a loop from the heater to the farthest fixture and back, so hot water is always near the tap. The pump may run on a timer, a thermostat, or a demand button, and the loop must be insulated or it becomes a radiator that wastes heat all day.</p>
<p>The code sets a hard limit on the wait. <strong>IPC 607.2</strong> limits the <strong>developed length of hot-water piping from the source to 50 feet</strong>. A fixture more than 50 feet of pipe from the heater needs a recirculation loop or a point-of-use heater at the fixture — you cannot simply run a longer pipe and accept the wait. The 50-foot rule is a water-conservation and comfort rule: long waits waste water and patience in equal measure.</p>
<p>Point-of-use heaters are the other answer for distant fixtures: a small tank or tankless unit installed under a far sink or in a remote bathroom, so the hot water starts at the fixture instead of at the far end of the house. They cost more to install but save water and waiting on every use.</p>
<div class="callout"><strong>Key idea:</strong> Hot-water developed length is limited to 50 feet (IPC 607.2). Beyond that, recirculate or heat at the point of use — do not just run a longer pipe.</div>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Tank heaters: sized by gallons and recovery. Tankless: sized by temperature rise at flow rate. Heat pump: efficient, slower recovery, cools its room.</li>
<li>T&P valve opens at 210°F or 150 psi; discharge must terminate visibly and safely through an air gap — never capped or valved.</li>
<li>Showers limited to 120°F (IPC 424.3); ASSE 1070 tempered water limited to 110°F (IPC 607.1.2).</li>
<li>Hot-water developed length limited to 50 feet (IPC 607.2); beyond that, recirculate or heat at the point of use.</li>
<li>Thermal expansion control is required in closed systems (IPC 607.3); pressure must be held to 150 psi or the heater's rated pressure, whichever is lower (IPC 607.3.2).</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Setting the water heater to 120°F to "fix" scalding and then wondering why the showers run out. The fix is tempering at the fixture, not a cool tank — a cool tank stores less usable hot water and can grow bacteria.</div>
<div class="callout"><strong>Common mistake:</strong> Capping or valving a T&P discharge pipe because it drips. The drip is a symptom — of overpressure, overheating, or uncontrolled expansion. Capping the pipe removes the heater's only safety device.</div>
<p><strong>Ready-to-Work link:</strong> NCCER Plumbing Level 2 expects you to identify water heater types, safety devices, and tempering requirements. If you can explain to a homeowner why their far bathroom needs recirculation and why their shower cannot exceed 120°F, you have this module.</p>`
    }
  ],
  keyTerms: [
    { term: "Storage tank water heater", def: "A water heater that heats and stores a tank of water; sized by tank capacity in gallons and recovery rate." },
    { term: "Tankless water heater", def: "An on-demand water heater with no storage tank; sized by temperature rise at the required flow rate." },
    { term: "Heat pump water heater", def: "A water heater that moves heat from surrounding air into the tank; efficient but slower to recover." },
    { term: "Temperature rise", def: "The degrees a heater adds to incoming water at a given flow rate; the sizing input for tankless heaters." },
    { term: "Recovery rate", def: "How fast a tank water heater reheats its tank after use, in gallons per hour." },
    { term: "T&P valve", def: "Temperature and pressure relief valve; opens at 210°F or 150 psi to protect a water heater from rupture." },
    { term: "Tempering valve", def: "A mixing valve that blends hot and cold water so the delivered temperature is safe, even when the tank is hotter." },
    { term: "Pressure-balanced valve", def: "A shower valve that holds mixed temperature steady by reducing hot flow when cold pressure drops." },
    { term: "Thermostatic valve", def: "A shower valve that senses mixed temperature directly and adjusts both flows to hold it steady." },
    { term: "Recirculation system", def: "A pump and return loop that keeps hot water near distant fixtures so it arrives without waiting." },
    { term: "Thermal expansion", def: "Water expanding as it heats; in a closed system it raises pressure until something gives — usually the T&P valve." },
    { term: "Closed system", def: "A water system with a check valve, PRV, or backflow preventer that blocks expanded water from flowing back to the main." },
    { term: "Expansion tank", def: "A tank with an air cushion that absorbs thermal expansion in a closed system, holding pressure down." },
    { term: "Developed length", def: "The total pipe length from the water heater to a fixture; IPC 607.2 limits hot-water developed length to 50 feet." },
    { term: "Standby loss", def: "Heat lost from a tank water heater while it sits idle, keeping water hot between uses." },
    { term: "ASSE 1070", def: "The standard for tempering devices; IPC 607.1.2 limits ASSE 1070 tempered water to 110°F." }
  ],
  video: {
    title: "Two Ways To Get Instant Hot Water With A Tankless Water Heater!",
    embedUrl: "https://www.youtube.com/embed/grfdXDtIhp8",
    note: "Two ways to get hot water fast with a tankless heater — watch how recirculation and point-of-use heating solve the long-wait problem, then compare with the 50-foot rule in this module.",
    more: [
      { title: "Hot Water Circulation Systems | Plumbing | Anthony PHC", url: "https://www.youtube.com/watch?v=0pnUQ2U0jMM" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A family of four runs out of hot water during back-to-back morning showers with a 40-gallon tank. Name two possible causes and one fix for each.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The tank is too small for the demand — fix by upsizing the tank or adding a second heater. Step 2: The thermostat is set low, so the stored water holds less usable heat — fix by raising the set point and adding tempering at the fixtures, not by removing the tempering. Step 3: A failed dip tube or heating element reduces the effective capacity — fix by repairing the heater.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A tankless heater is rated to raise water 50°F at 5 gpm. Incoming water is 40°F and the customer wants 120°F at the shower. Can it deliver 5 gpm at 120°F? Explain.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: The needed rise is 120 − 40 = 80°F. Step 2: The heater can only add 50°F at 5 gpm, so at 5 gpm it would deliver 40 + 50 = 90°F — too cool. Step 3: To reach 120°F the flow must drop below 5 gpm, or a larger heater is needed. Step 4: This is why tankless sizing must use the coldest incoming water temperature, not the average.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A T&P valve is discharging water onto the floor. List three possible causes in the order you would check them.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Thermal expansion in a closed system with no expansion control — check for a PRV or check valve and a missing expansion tank. Step 2: Excessive pressure from the street — check the static pressure against the 80 psi PRV threshold. Step 3: A failed thermostat overheating the water — check the tank temperature. Step 4: Only after ruling these out, suspect the valve itself.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A bathroom is 80 feet of pipe from the water heater. What does IPC 607.2 require, and what are the two ways to comply?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: IPC 607.2 limits hot-water developed length to 50 feet, so an 80-foot run does not comply. Step 2: Option A — install a recirculation loop so hot water is always near the fixture. Step 3: Option B — install a point-of-use heater at the bathroom. Step 4: Simply running the longer pipe and accepting the wait is not compliant.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A water heater is set to 140°F and a shower has no pressure-balanced valve. A toilet flushes while someone showers. Explain the scald risk and the fix.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The flush drops the cold-water pressure, so the shower's hot-to-cold ratio jumps and the water suddenly gets much hotter. Step 2: At a 140°F tank temperature the spike can scald in seconds. Step 3: The fix is a pressure-balanced or thermostatic shower valve that limits discharge to 120°F (IPC 424.3), plus tempering as needed. Step 4: Turning the tank down alone is not the fix — it reduces capacity and does not protect against the pressure swing.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A PRV is installed and the water heater's T&P valve starts weeping. Explain the chain of events and the fix.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The PRV creates a closed system — expanded water cannot flow back to the main. Step 2: When the heater fires, the water expands and pressure rises until the T&P valve weeps at 150 psi. Step 3: The fix is thermal expansion control (IPC 607.3), typically an expansion tank, sized to hold pressure to 150 psi or the heater's rated pressure, whichever is lower (IPC 607.3.2). Step 4: Replacing the T&P valve alone will not fix it — the new valve will weep too.</p>"
    }
  ],
  quiz: [
    {
      q: "A tankless water heater is sized primarily by:",
      choices: ["Tank capacity in gallons", "Temperature rise at the required flow rate", "The number of bedrooms", "The size of the cold-water service"],
      answer: 1,
      explanation: "Correct: (b). A tankless heater is rated by how much it can raise the temperature at a given flow. (a) Tankless heaters have no storage tank. (c) Bedrooms are a proxy, not the sizing input. (d) Service size follows from the heater's flow, not the other way around."
    },
    {
      q: "A temperature and pressure relief valve on a water heater opens at:",
      choices: ["120°F or 80 psi", "150°F or 100 psi", "210°F or 150 psi", "250°F or 200 psi"],
      answer: 2,
      explanation: "Correct: (c). The T&P valve opens at 210°F or 150 psi, whichever comes first. (a) is in the range of a shower valve limit. (b) is below both set points. (d) is above both set points and would let the tank overheat dangerously."
    },
    {
      q: "A shower valve must limit the discharge temperature to no more than:",
      choices: ["100°F", "110°F", "120°F", "140°F"],
      answer: 2,
      explanation: "Correct: (c). IPC 424.3 limits shower and tub-shower valve discharge to 120°F. (a) is below the comfort range. (b) is the ASSE 1070 tempered-water limit. (d) is a common water heater set point, far too hot at the shower."
    },
    {
      q: "IPC 607.1.2 limits tempered water from an ASSE 1070 device to:",
      choices: ["100°F", "110°F", "120°F", "140°F"],
      answer: 1,
      explanation: "Correct: (b). ASSE 1070 tempered water is limited to 110°F. (a) is below the limit. (c) is the shower valve limit. (d) is a common tank set point."
    },
    {
      q: "IPC 607.2 limits the developed length of hot-water piping from the source to:",
      choices: ["25 feet", "50 feet", "100 feet", "150 feet"],
      answer: 1,
      explanation: "Correct: (b). Section 607.2 limits hot-water developed length to 50 feet from the source. (a) is half the limit. (c) and (d) are double and triple the limit."
    },
    {
      q: "A home has a recirculation loop that returns hot water to the heater. Its main benefit is:",
      choices: ["Higher water pressure at the shower", "Hot water arrives at the tap without waiting and without wasting water", "Lower hot-water temperature", "A smaller water heater"],
      answer: 1,
      explanation: "Correct: (b). Recirculation keeps hot water near the fixture so it arrives immediately. (a) It does not raise pressure. (c) It does not lower temperature. (d) It does not shrink the heater."
    },
    {
      q: "IPC 607.3 requires thermal expansion control in:",
      choices: ["Every water system", "Closed systems, where expanded water cannot flow back to the main", "Open systems only", "Systems with tankless heaters only"],
      answer: 1,
      explanation: "Correct: (b). Expansion control is required where a PRV, check valve, or backflow preventer closes the system. (a) Open systems let expanded water flow back to the main. (c) Open systems do not need it. (d) Tankless heaters are not the trigger — the closed system is."
    },
    {
      q: "The T&P discharge pipe must:",
      choices: ["Be capped to keep insects out", "Terminate visibly and safely through an air gap, never capped or valved", "Be smaller than the valve outlet to increase pressure", "Run to the roof vent"],
      answer: 1,
      explanation: "Correct: (b). The discharge must terminate safely and visibly through an air gap. (a) Capping defeats the safety device. (c) Reducing the discharge restricts flow. (d) The roof vent is a DWV part, not a relief termination."
    }
  ],
  studyGuide: `
<h3>Module 4 — Hot Water: Quick Reference</h3>
<p><strong>Core idea:</strong> Store hot, deliver safe. The heater makes the heat; tempering, recirculation, and expansion control make it safe and usable.</p>
<p><strong>Heater sizing:</strong> Tank — gallons and recovery. Tankless — temperature rise at flow rate. Heat pump — efficient, slower recovery.</p>
<div class="formula">T&P valve opens at 210°F or 150 psi &nbsp;|&nbsp; Shower limit 120°F (IPC 424.3) &nbsp;|&nbsp; ASSE 1070 tempered water 110°F (IPC 607.1.2)</div>
<p><strong>Hot-water length:</strong> Developed length limited to 50 feet from the source (IPC 607.2). Beyond that, recirculate or heat at the point of use.</p>
<p><strong>Expansion:</strong> Closed systems need expansion control (IPC 607.3); hold pressure to 150 psi or the heater's rated pressure, whichever is lower (IPC 607.3.2).</p>
<p><strong>T&P discharge:</strong> Visible, safe termination through an air gap — never capped, never valved, never reduced.</p>
<p><strong>Self-check:</strong> A bathroom is 70 feet from the heater. What are the two compliant fixes? (Answer: a recirculation loop, or a point-of-use heater at the bathroom.)</p>
`
};
