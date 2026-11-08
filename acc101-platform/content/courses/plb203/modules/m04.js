// Plumbing 203 - Module 4: Servicing Piping Systems, Fixtures & Appliances (NCCER L4)
module.exports = {
  number: 4,
  slug: "servicing-piping-fixtures-appliances",
  title: "Servicing Piping Systems, Fixtures & Appliances",
  estTime: "3–4 hours",
  objectives: [
    "Service a faucet by type: compression, cartridge, ball, and ceramic disc — and know which part fails in each.",
    "Diagnose and repair the common toilet faults: running, weak flush, phantom flush, and rocking base.",
    "Service a water heater: check the T&P valve, the anode rod, sediment, and venting.",
    "Diagnose appliance connections: dishwashers, washing machines, and garbage disposals.",
    "Decide when a fixture or appliance is repaired and when it is replaced, and explain the choice to the customer."
  ],
  sections: [
    {
      heading: "Faucets: Four Types, Four Failure Modes",
      html: `
<p>Almost every faucet service call comes down to knowing which type of faucet you are looking at, because each type fails in its own way. Before you take anything apart, shut off the water at the fixture's angle stops, plug the drain so small parts cannot fall in, and take a photo of the assembly before you disturb it.</p>
<p><strong>Compression faucets</strong> are the old two-handle style. Turning the handle drives a stem down onto a rubber washer, which seals against a metal seat. The washer wears out, the seat corrodes, and the faucet drips from the spout. The fix is a new washer of the same size and thickness, and a seat dressing or replacement if the seat is pitted. Over-tightening a compression faucet crushes the washer faster — it is the most common cause of repeat drips.</p>
<p><strong>Cartridge faucets</strong> — single-handle or two-handle — use a replaceable cartridge that mixes hot and cold and controls flow. A drip, a stiff handle, or hot and cold that will not balance usually means a worn cartridge. The fix is to identify the cartridge by brand and model, pull the old one, and fit an exact replacement. Never force a cartridge from another brand into the body.</p>
<p><strong>Ball faucets</strong> use a slotted metal ball that rotates over spring-loaded seats and seals. They leak from the spout when the seats and springs wear, and from the handle when the cam and packing wear. A repair kit with new seats, springs, and O-rings usually restores them.</p>
<p><strong>Ceramic disc faucets</strong> use two hard ceramic discs that slide against each other. They are durable and smooth, and when they fail it is usually a cracked disc, a worn seal, or debris trapped between the discs. The fix is a new disc cartridge — and the water supply should be flushed before fitting it, or the same debris will damage the new one.</p>
<div class="callout"><strong>Key idea:</strong> Name the faucet type before you touch a wrench. The type tells you the failing part, the repair kit, and whether the fix is a washer, a cartridge, or a full replacement.</div>`
    },
    {
      heading: "Toilets: The Four Complaints",
      html: `
<p>Toilets generate more service calls than any other fixture, and nearly all of them are one of four complaints.</p>
<p><strong>Running constantly.</strong> The fill valve never shuts off. Check the water level against the overflow tube first: if the level is above the tube, water is pouring down the overflow and the fill valve needs adjustment or replacement. If the level is correct, the flapper is leaking — run the dye test from Module 1.</p>
<p><strong>Phantom flushing.</strong> The toilet refills by itself every few minutes. The tank is slowly losing water past a worn flapper or a cracked overflow tube, and the fill valve tops it up. Replace the flapper with the right size and type, and check that the refill tube is aimed into the overflow and not shoved down it.</p>
<p><strong>Weak flush.</strong> The bowl fills but does not clear. Check the tank water level (low level means a weak flush), the rim jets and the siphon jet under the bowl's front edge (mineral buildup narrows them), and the drain for a partial clog. A weak flush with a full tank and clean jets points downstream, not at the toilet.</p>
<p><strong>Rocking base or water at the floor.</strong> The toilet moves, or water appears at the base after flushing. The wax ring has failed, the flange is damaged or set too low, or the closet bolts are loose. The fix is to pull the toilet, inspect the flange, replace the wax ring, and reset it level with new bolts — never caulk a rocking toilet to the floor to hide the movement.</p>
<div class="callout"><strong>Key idea:</strong> A toilet is a simple machine: the tank stores water, the flapper releases it, the bowl's jets and siphon do the work. Match the symptom to the part — running is the fill valve or flapper, weak flush is level, jets, or drain, rocking is the flange and wax ring.</div>`
    },
    {
      heading: "Water Heaters: Service Before Failure",
      html: `
<p>A water heater that is serviced lasts longer and fails more gracefully than one that is ignored. The service visit has four checks.</p>
<p><strong>Temperature and pressure (T&P) relief valve.</strong> This valve is the heater's last line of defense: if temperature or pressure climbs too high, it opens and discharges water. Test it by lifting the lever briefly — water should flow from the discharge pipe and the valve should reseat and stop dripping. A valve that will not open, or that keeps dripping after the test, must be replaced. The discharge pipe must run to a safe, visible location and must never be capped or plugged.</p>
<p><strong>Anode rod.</strong> Inside a tank heater, a sacrificial anode rod corrodes so the tank does not. When the rod is consumed, the tank starts corroding instead. Inspecting and replacing the rod on schedule is the single most effective thing you can do for a tank's life. A rod that comes out as a thin wire is spent.</p>
<p><strong>Sediment.</strong> Minerals settle at the bottom of the tank, insulating the water from the burner or element, causing rumbling noises, and shortening the tank's life. Draining a few gallons from the drain valve — or a full flush where the manufacturer allows it — removes loose sediment. If the drain valve is clogged with sediment, do not force it; note it and advise the customer.</p>
<p><strong>Venting and combustion air (gas heaters).</strong> Check the vent for proper slope, secure joints, and a clear termination, and confirm the heater has enough combustion air. A backdrafting water heater — one whose exhaust spills into the room instead of rising up the vent — is a carbon monoxide hazard, not a maintenance item. If you suspect backdrafting, shut the unit down and escalate it.</p>
<div class="callout"><strong>Key idea:</strong> The T&P valve is a safety device, not a maintenance nuisance. Never cap, plug, or remove it, and never leave a failed one in place. A water heater without a working relief valve is a pressure vessel with no escape.</div>`
    },
    {
      heading: "Appliances: Dishwashers, Laundry, and Disposals",
      html: `
<p>Appliance service is plumbing service at the connection point — the plumber owns the water in, the drain out, and the air gap or high loop that keeps them separate.</p>
<p><strong>Dishwashers</strong> need a hot-water supply, a drain connection with an air gap or a high loop under the counter, and a drain hose that cannot siphon dirty water back into the machine. A dishwasher that leaves dirty water in the bottom usually has a clogged drain hose, a failed drain pump, or a missing high loop that lets sink water drain back into it. Never connect a dishwasher drain directly to the drain without the required backflow protection.</p>
<p><strong>Washing machines</strong> need supply hoses that are inspected, not assumed. Rubber hoses age, bulge, and burst — a burst hose floods a house in minutes. Stainless braided hoses last longer, and the shutoff valves should be closed when the machine is not in use in a home that is left empty. A washer that drains slowly or overflows the standpipe has a drain problem downstream, not a machine problem.</p>
<p><strong>Garbage disposals</strong> jam, hum, and leak at the sink flange or the dishwasher connection. The service sequence is: power off first, always. Press the reset button on the bottom. Free a jam with the hex wrench in the bottom socket, turning back and forth — never put a hand inside the disposal. A disposal that hums but does not spin has a jam; one that does nothing at all may have tripped its reset or lost power. A disposal that leaks from the top needs a new sink-flange seal; one that leaks from the body is usually replaced.</p>
<div class="callout"><strong>Key idea:</strong> On appliances, the plumber's responsibility ends where the appliance's own mechanism begins — but the water connections, the drain, and the backflow protection are always the plumber's. Know the boundary and say so.</div>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Faucets: compression fails at the washer and seat; cartridge at the cartridge; ball at seats and springs; ceramic disc at the disc or seal.</li>
<li>Toilets: running is fill valve or flapper; phantom flush is a leaking flapper; weak flush is level, jets, or drain; rocking is flange and wax ring.</li>
<li>Water heaters: test the T&P valve, inspect the anode rod, flush sediment, check venting and combustion air.</li>
<li>Appliances: dishwasher needs an air gap or high loop; washer hoses need inspection; disposals need power off before any work.</li>
<li>Repair versus replace is a judgment call: part cost, fixture age, and whether the same failure will recur.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Replacing a cartridge with the wrong brand or model. Cartridges are not interchangeable. Bring the old one to the supplier or match it exactly by brand and model number — a near-fit leaks.</div>
<div class="callout"><strong>Common mistake:</strong> Caulking a rocking toilet to the floor. Caulk hides the movement and traps the leak, so the subfloor rots unseen. Pull the toilet, fix the flange, replace the wax ring, and set it solid.</div>
<p><strong>Ready-to-work link:</strong> Module 5 moves from the single fixture to the whole building: commercial installation is the same systems at larger scale, with drawings, coordination, and inspections that residential service never needs.</p>`
    }
  ],
  keyTerms: [
    { term: "Compression faucet", def: "A two-handle faucet that seals by driving a stem and rubber washer onto a metal seat." },
    { term: "Cartridge faucet", def: "A faucet that controls flow and temperature with a replaceable cartridge." },
    { term: "Ball faucet", def: "A single-handle faucet using a slotted metal ball over spring-loaded seats and seals." },
    { term: "Ceramic disc faucet", def: "A faucet using two hard ceramic discs sliding against each other to control flow." },
    { term: "Angle stop", def: "The shutoff valve at a fixture that lets you isolate that fixture without shutting off the building." },
    { term: "Flapper", def: "The rubber seal at the bottom of a toilet tank that lifts to flush and reseats to refill." },
    { term: "Fill valve", def: "The valve that refills a toilet tank after a flush and shuts off at the set water level." },
    { term: "Overflow tube", def: "The open tube in a toilet tank that carries excess water to the bowl and sets the maximum tank level." },
    { term: "Wax ring", def: "The wax seal between a toilet base and the closet flange that keeps waste water from leaking at the floor." },
    { term: "Closet flange", def: "The fitting that anchors a toilet to the floor and connects it to the drain." },
    { term: "T&P valve", def: "The temperature and pressure relief valve on a water heater that opens if temperature or pressure climbs too high." },
    { term: "Anode rod", def: "A sacrificial metal rod inside a tank water heater that corrodes so the tank does not." },
    { term: "Air gap", def: "A physical gap between a drain hose outlet and the flood level of a fixture, preventing backflow." },
    { term: "High loop", def: "Routing a dishwasher drain hose up under the countertop so dirty water cannot siphon back into the machine." },
    { term: "Standpipe", def: "The vertical drain pipe that a washing machine discharges into." },
    { term: "Backdrafting", def: "Combustion exhaust spilling into a room instead of rising up the vent — a carbon monoxide hazard." }
  ],
  video: {
    title: "Tips for Fixing a Leaky Faucet",
    embedUrl: "https://www.youtube.com/embed/dwtFrlz0IjQ",
    note: "Today's Homeowner walks through a leaky faucet repair step by step. Watch how the water is shut off, the parts are identified, and the washer is matched before anything is reassembled.",
    more: [
      { title: "How to Fix a Leaky Faucet", url: "https://www.youtube.com/watch?v=dUWl-Ub_Ow8" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A two-handle kitchen faucet drips from the spout. The handles are the old style that turn several times to open. Which faucet type is it, which part has failed, and what is the repair?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: It is a compression faucet — the multi-turn handles are the giveaway. Step 2: The drip comes from a worn washer or a pitted seat. Step 3: Shut off the angle stops, plug the drain, remove the stem, and replace the washer with one of the same size and thickness. Step 4: Inspect the seat; dress or replace it if it is pitted, or the new washer will fail quickly. Step 5: Reassemble, turn the water on, and test — and do not over-tighten the handle.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A toilet runs constantly. You check the tank: the water level is above the overflow tube and water is pouring down it. What is the fault, and what do you do?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The fill valve is not shutting off — the level is too high. Step 2: Try adjusting the fill valve float down so the water stops below the top of the overflow tube. Step 3: If adjustment does not hold, replace the fill valve. Step 4: Set the new valve so the water level sits below the overflow tube with a small margin, then flush and watch it refill and stop. The flapper is not the suspect here, because the overflow — not the bowl — is receiving the water.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A customer says the water heater rumbles and the hot water runs out faster than it used to. Name the likely cause, the service step, and the safety check you run on the same visit.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: The likely cause is sediment buildup on the tank bottom, insulating the water from the heat source. Step 2: Drain water from the drain valve to flush loose sediment, following the manufacturer's guidance. Step 3: On the same visit, test the T&P relief valve — lift the lever, confirm water flows from the discharge pipe, and confirm the valve reseats. Step 4: Also inspect the anode rod's condition if access allows, and note its state for the customer.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A garbage disposal hums when switched on but does not grind, and the reset button has not tripped. What is the fault, and what is the safe service sequence?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The motor is powered but the grinding plate is jammed. Step 2: Switch the power off at the switch — and at the breaker if there is any doubt. Step 3: Insert the hex wrench in the bottom socket and work it back and forth to free the jam. Step 4: Press the reset button, restore power, and run cold water while testing. Step 5: Never put a hand inside the disposal, and never reach in while power is connected.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A dishwasher leaves dirty water standing in the bottom after a cycle, and the sink sometimes drains into it. What are the two most likely plumbing causes, and what do you check?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Check the drain hose routing — a missing high loop or air gap lets sink water drain back into the dishwasher. Step 2: Check the drain hose and the disposal or drain connection for a clog. Step 3: Correct the routing so the hose rises to a high loop under the counter or through an air gap, and clear any blockage. Step 4: Run a cycle and confirm the tub drains fully and no sink water enters it.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A 25-year-old toilet rocks slightly, water appears at the base after flushing, and the flange is visibly cracked. Repair or replace the toilet — and what exactly does the job include?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The toilet itself can be reused if it is sound; the failure is the flange and the wax ring. Step 2: Pull the toilet, remove the old wax, and inspect the subfloor for rot. Step 3: Repair or replace the cracked flange and set it at the correct height above the finished floor. Step 4: Fit a new wax ring, reset the toilet level with new closet bolts, and test with several flushes. Step 5: Explain to the customer that caulking the base would only hide the leak — the fix is the flange and the seal.</p>"
    }
  ],
  quiz: [
    {
      q: "A compression faucet drips from the spout. The most likely failed part is the:",
      choices: ["Cartridge", "Ceramic disc", "Rubber washer or the valve seat", "Ball and cam"],
      answer: 2,
      explanation: "Correct: (c). Compression faucets seal with a washer pressed onto a seat; a worn washer or pitted seat drips. (a) Cartridges belong to cartridge faucets. (b) Ceramic discs belong to ceramic-disc faucets. (d) The ball and cam belong to ball faucets."
    },
    {
      q: "A toilet refills by itself every few minutes — a phantom flush. The most likely cause is:",
      choices: ["A clogged drain", "A leaking flapper letting tank water into the bowl", "A broken flush handle", "A cracked tank lid"],
      answer: 1,
      explanation: "Correct: (b). Slow water loss past a worn flapper drops the tank level until the fill valve tops it up. (a) A clogged drain affects flushing, not tank level. (c) A broken handle usually prevents flushing or leaves the flapper stuck. (d) A cracked lid does not lose tank water."
    },
    {
      q: "A toilet runs constantly and the tank water level is above the overflow tube. The fault is the:",
      choices: ["Flapper", "Fill valve not shutting off", "Wax ring", "Drain"],
      answer: 1,
      explanation: "Correct: (b). Water pouring down the overflow means the fill valve is not stopping the refill. (a) A leaking flapper would lower the level, not raise it above the overflow. (c) The wax ring seals the base, not the tank. (d) The drain has nothing to do with tank water level."
    },
    {
      q: "When testing a water heater's T&P relief valve, you should:",
      choices: ["Cap the discharge pipe first", "Lift the lever briefly, confirm water flows from the discharge pipe, and confirm the valve reseats", "Remove the valve and plug the opening", "Never touch it — it is not meant to be tested"],
      answer: 1,
      explanation: "Correct: (b). A brief lift proves the valve opens and reseats; a valve that will not open or keeps dripping must be replaced. (a) Capping the discharge defeats the safety device. (c) Plugging the opening removes the heater's protection entirely. (d) The valve is designed to be tested — an untested valve may be seized shut."
    },
    {
      q: "The anode rod in a tank water heater exists to:",
      choices: ["Heat the water faster", "Corrode in place of the tank, protecting it", "Hold the tank to the wall", "Measure the water temperature"],
      answer: 1,
      explanation: "Correct: (b). The sacrificial rod corrodes so the steel tank does not; when it is spent, the tank starts corroding. (a) Heating is the burner or element's job. (c) The rod is inside the tank, not a mounting. (d) Temperature is measured by the thermostat."
    },
    {
      q: "A dishwasher drain hose must rise to a high loop or pass through an air gap because:",
      choices: ["It makes the dishwasher drain faster", "It prevents dirty sink water from siphoning back into the dishwasher", "It keeps the hose from freezing", "It reduces water use"],
      answer: 1,
      explanation: "Correct: (b). The high loop or air gap is backflow protection — without it, sink water can drain back into the machine. (a) It does not speed drainage. (c) Freezing is not the purpose. (d) It has no effect on water use."
    },
    {
      q: "Before working on a jammed garbage disposal, the first step is to:",
      choices: ["Reach in and feel for the jam", "Turn the power off", "Pour drain cleaner in", "Run hot water"],
      answer: 1,
      explanation: "Correct: (b). Power off first — a disposal that starts while a hand is inside causes serious injury. (a) is exactly what must never be done. (c) chemicals do not clear a mechanical jam and create a hazard for the next person. (d) running water does not free a jam."
    },
    {
      q: "A toilet rocks and water appears at the base after flushing. The correct repair is to:",
      choices: ["Caulk the base to the floor", "Pull the toilet, fix the flange, replace the wax ring, and reset it level", "Tighten the water supply line", "Replace the fill valve"],
      answer: 1,
      explanation: "Correct: (b). A rocking toilet with water at the base means a failed wax seal and usually a damaged or low flange — the toilet must come up and the seal and flange must be fixed. (a) Caulk hides the leak and lets the subfloor rot. (c) The supply line is not at the base. (d) The fill valve controls tank refilling, not the base seal."
    }
  ],
  studyGuide: `
<h3>Module 4 — Servicing Piping Systems, Fixtures & Appliances: Quick Reference</h3>
<p><strong>Faucets:</strong> Compression = washer + seat. Cartridge = cartridge. Ball = seats, springs, O-rings. Ceramic disc = disc cartridge. Always shut off the angle stops and plug the drain first.</p>
<p><strong>Toilets:</strong> Running = fill valve or flapper (check level vs. overflow tube). Phantom flush = leaking flapper (dye test). Weak flush = tank level, rim jets, or drain. Rocking = flange + wax ring.</p>
<p><strong>Water heaters:</strong> Test the T&P valve (lift, flow, reseat — never cap the discharge). Inspect the anode rod. Flush sediment. Check venting and combustion air; backdrafting is a carbon monoxide hazard.</p>
<p><strong>Appliances:</strong> Dishwasher = air gap or high loop. Washer = inspect hoses. Disposal = power off before any work, hex wrench to free a jam.</p>
<p><strong>Self-check:</strong> A customer reports a dripping single-handle faucet and a toilet that refills itself. Name the faucet type, the likely failing part, the toilet fault, and the one test that proves the toilet diagnosis.</p>
`
};
