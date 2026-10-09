// HVAC 207 - Module 7: Head Pressure Control in Low Ambient
module.exports = {
  number: 7,
  slug: "head-pressure-control-low-ambient",
  title: "Head Pressure Control in Low Ambient",
  estTime: "3–4 hours",
  objectives: [
    "Explain why head pressure falls in cold weather and what fails when it falls too far: TXV feed, defrost, and oil return.",
    "Describe fan cycling and fan speed control as head pressure strategies and how each holds a minimum.",
    "Explain flooded-condenser (condenser flooding) valve systems: how backing liquid up into the condenser raises head pressure.",
    "Read a winter symptom — starved evaporator, low superheat complaints, cases warm on the coldest days — back to a head pressure cause.",
    "Connect low-ambient control to floating head pressure from Module 5: float down to the floor, then hold the floor."
  ],
  sections: [
    {
      heading: "The Winter Problem: Too Much Condenser",
      html: `
<p>A condenser sized to reject heat on the hottest afternoon of the year is enormously oversized on a January night. Cold air blasting across all that coil condenses refrigerant eagerly, and head pressure falls — and falls. Module 5 celebrated this as floating head pressure and free efficiency. But the float has a floor, and this module is about what lives below it.</p>
<p>When head pressure drops too far, three systems starve. First, the <strong>TXV</strong>: an expansion valve feeds by pressure difference between the liquid line and the evaporator. Let the head pressure sag and the valve, even wide open, cannot push enough liquid through — the evaporator starves, capacity collapses, and cases warm up <em>because it is too cold outside</em>, the most confusing sentence in commercial refrigeration until you understand it. Second, <strong>hot gas defrost and heat reclaim</strong> lose their working pressure. Third, <strong>oil return and refrigerant flow velocities</strong> suffer in systems designed around livelier pressures.</p>
<div class="callout"><strong>Key idea:</strong> Low-ambient control is not about keeping head pressure high — it is about keeping it <em>high enough</em>. The art is holding the floor, not the ceiling.</div>
<p>Geography writes this module's schedule: the same condensing unit that cruises in a mild climate spends months below its head-pressure floor in a northern winter, and manufacturers sell low-ambient packages precisely by region. If you relocate for work, expect winter refrigeration to be a bigger share of your craft the farther the thermometer falls.</p>`
    },
    {
      heading: "Fan Cycling and Fan Speed Control",
      html: `
<p>The simplest way to raise head pressure is to reject less heat: turn condenser fans off. <strong>Fan cycling</strong> uses a pressure control (or the rack controller) to cycle condenser fans on and off, holding head pressure inside a band. One fan may run continuously while the rest cycle, or all may cycle together on small condensing units. Cycling is cheap and effective, with two costs: pressure swings as fans bang on and off, and wear on fan motors and contactors from constant starting.</p>
<p><strong>Fan speed control</strong> refines the idea: instead of switching fans, vary their speed with the head pressure signal. A variable-speed drive or speed-controlled fan motor slows the fans as pressure falls, trimming heat rejection smoothly to hold pressure almost exactly at the setpoint floor. The pressure trace steadies, noise drops on cold nights, and fan energy — already saved by the float — drops further because a fan at half speed uses a small fraction of full-speed power.</p>
<div class="callout"><strong>Key idea:</strong> Fan cycling holds pressure in a band by switching; fan speed control holds it on a line by modulating. Both are "reject less heat" strategies — neither changes the condenser itself.</div>
<p>Wind is the confounder: a hard wind across an idle condenser can chill it nearly as well as a fan can. Baffles, wind guards, and careful fan staging order (which fan cycles first) are the field answers on exposed rooftops.</p>`
    },
    {
      heading: "Flooded Condenser Valves: Shrinking the Condenser Instead",
      html: `
<p>The other philosophy does not touch the fans at all. A <strong>flooded condenser system</strong> holds head pressure up by deliberately backing liquid refrigerant up into the condenser, flooding part of its tubing. Flooded surface cannot condense — liquid sits where gas should be shedding heat — so the <em>effective</em> condenser shrinks until the remaining active surface, fully exposed to winter air, can only hold the target pressure. Two valves typically cooperate: a pressure-regulating valve in the condenser outlet (often called the head pressure control or flooding valve) that closes down as pressure falls, and a receiver pressure regulator that uses discharge gas to keep receiver pressure up so the liquid line stays fed while the condenser is busy storing liquid.</p>
<p>This design has a signature service consequence: <strong>charge</strong>. A flooded system needs enough refrigerant to fill the flooded portion of the condenser on the coldest design night <em>and</em> still keep the receiver supplied. Such systems carry a large nameplate charge, and the summer-vs-winter charge check differs: in summer the condenser drains and the extra refrigerant lives in the receiver. A tech who "corrects" a winter receiver level by removing refrigerant has disarmed the system's low-ambient strategy and will be back on the first cold snap, facing starved cases on a system he himself emptied.</p>
<div class="callout"><strong>Key idea:</strong> Flooding valves shrink the condenser with its own refrigerant. The big charge is not overcharge — it is the mechanism. Verify against the manufacturer's winter charge requirement before adding or removing anything.</div>`
    },
    {
      heading: "Reading Winter Symptoms",
      html: `
<p><strong>Worked example — the coldest-day call.</strong> A convenience store's cases run warm every bitter night and recover by mid-morning; in mild weather they are perfect. Summer-trained instincts say "add refrigerant," but walk the logic. Step 1: The symptom tracks <em>low outdoor temperature</em>, not load — the store is emptiest when the cases are warmest. Step 2: On site at 10°F ambient you find head pressure far below the system's floor and the condenser fans all running happily — the fan-cycling pressure control has failed closed-circuit (contacts welded or the control mis-set), so nothing ever reduces heat rejection. Step 3: The evaporator is starved for want of liquid-line pressure difference, exactly as this module predicts. The repair is control-side: restore fan cycling, verify the pressure band against the manufacturer's minimum head pressure, and watch the TXV feed recover. Not one ounce of refrigerant was involved.</p>
<p>Companion symptom: on flooded systems, remember the mirrored fault — a flooding valve failed <em>open</em> behaves as if no low-ambient control exists, while one stuck restricting shows up as head pressure that will not come down in summer.</p>
<p>Notice the family resemblance to Module 11's method: a symptom that tracks an external schedule — weather instead of deliveries — is environmental until proven mechanical. Techs who log outdoor temperature on winter work orders hand their future selves the clue that solves the callback in one line.</p>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Cold weather oversizes every condenser; uncontrolled, head pressure falls below the floor where TXVs can feed.</li>
<li>Fan cycling (band) and fan speed (line) hold the floor by rejecting less heat.</li>
<li>Flooded condenser valves hold the floor by shrinking active condenser surface with backed-up liquid — and need their large charge.</li>
<li>Module 5's float and this module's floor are one strategy: ride the weather down, then defend the minimum.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Adding charge to cure starved cases on a cold night. If head pressure is below the floor, the missing thing is pressure, not refrigerant — and the added charge becomes an overcharge in April.</div>
<div class="callout"><strong>Common mistake:</strong> Defeating a "noisy" cycling fan by wiring it to run continuously in winter. You have just removed the store's low-ambient control with a jumper; the starved-case call arrives with the next cold front.</div>
<p><strong>Certification link:</strong> Head pressure control methods are named Light Commercial Refrigeration content, and the "warm cases on the coldest night" scenario is a classic exam stem — now you know the physics behind it.</p>
<p>One sentence to carry onto the roof: in winter, your first gauge question is not "how much refrigerant is in it" but "what is the head pressure, and what is holding it there?"</p>`
    }
  ],
  keyTerms: [
    { term: "Low ambient", def: "Cold outdoor conditions in which an air-cooled condenser can reject heat far beyond the system's needs." },
    { term: "Minimum head pressure", def: "The lowest condensing pressure at which the system's TXVs, defrost, and oil functions still work; the floor for floating head control." },
    { term: "Fan cycling", def: "Switching condenser fans on and off by pressure to hold head pressure within a band in cool weather." },
    { term: "Fan speed control", def: "Modulating condenser fan speed in response to head pressure for smooth pressure holding and lower fan energy." },
    { term: "Flooded condenser control", def: "A head pressure method that backs liquid into the condenser to reduce its effective condensing surface in cold weather." },
    { term: "Flooding (head pressure) valve", def: "The pressure-regulating valve in the condenser outlet/liquid path that restricts flow to flood the condenser as head pressure falls." },
    { term: "Receiver pressure regulator", def: "A valve that admits discharge gas to the receiver to keep liquid-line feed pressure up while the condenser is flooded." },
    { term: "Starved evaporator", def: "An evaporator receiving too little liquid refrigerant, losing capacity; caused here by inadequate liquid-line pressure difference." },
    { term: "Pressure differential (TXV)", def: "The difference between liquid-line pressure and evaporator pressure that drives flow through an expansion valve." },
    { term: "Wind effect", def: "Uncontrolled air movement across an idle condenser that can over-cool it in winter, countered with baffles and staging." },
    { term: "Head pressure band", def: "The range between fan cut-in and cut-out pressures in a fan-cycling scheme." },
    { term: "Winter charge", def: "The additional refrigerant a flooded-condenser system requires to flood the condenser on the coldest night while keeping the receiver supplied." },
    { term: "Heat reclaim", def: "Use of discharge heat for building heat; one of the functions that suffers when head pressure falls too low." },
    { term: "Floating head pressure (recap)", def: "Letting condensing pressure fall with outdoor temperature to save energy, down to the controlled minimum of this module." },
    { term: "Condenser splitting", def: "Valving off part of a large condenser in winter — another effective-surface reduction strategy on some large systems." },
    { term: "Low-ambient kit", def: "The manufacturer's package of controls (fan cycling/speed and/or flooding valves) that fits a unit for cold-weather operation." },
    { term: "Liquid line pressure", def: "The pressure actually available to push refrigerant through the TXV; the number that decides whether cases feed in winter." },
    { term: "Overshoot (fan cycling)", def: "Head pressure swinging above and below the band as fans switch — the roughness that speed control smooths out." }
  ],
  video: {
    title: "Supermarket Refrigeration -  What To Do at a Rack down With Guide!!",
    embedUrl: "https://www.youtube.com/embed/QQKrqNctq5E",
    note: "A rack-down field guide that explicitly walks through weather conditions — super hot or super cold — as a first diagnostic consideration, including racks stalling in extreme cold. It shows how head pressure behavior in low ambient becomes a real troubleshooting branch on a working store.",
    more: []
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> Explain to a puzzled owner why his cases got warmer as the night got colder, in three sentences or fewer, naming the component that actually starved.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The cold night air made the condenser so effective that head pressure collapsed below the minimum the system needs. Step 2: With little pressure difference across them, the <strong>expansion valves (TXVs)</strong> could not push enough liquid into the evaporators, so the coils starved and capacity fell. Step 3: The fix is head pressure control — holding a floor under the pressure — not more refrigerant.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A condensing unit's fan-cycling control is set to cut the fan out at the desired minimum head pressure and cut it back in somewhat higher. During a cold snap the pressure trace swings widely and a TXV-fed case hunts. What control upgrade addresses the swing itself, and how?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The swing is inherent to on/off control — full rejection or none — and the TXV sees both extremes alternately. Step 2: <strong>Fan speed control</strong> addresses it by modulating fan speed continuously against the pressure signal, trimming heat rejection to hold pressure near a steady line. Step 3: With steady liquid pressure, the TXV feeds steadily and the hunting disappears.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> On a flooded-condenser system in July, a tech finds the receiver only modestly full and decides the system is undercharged because “the nameplate charge is huge.” Before he adds refrigerant, what two questions should stop him?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: “Where does this system keep its extra refrigerant in summer?” — in the receiver, once the condenser drains; but the nameplate includes the winter flooding inventory, and a summer receiver level alone does not prove shortage. Step 2: “What do pressures, superheat, and subcooling say?” — charge is judged by operating measurements and the manufacturer's charging instructions for this control type, not by comparing receiver level to nameplate pounds. Step 3: Adding charge to a healthy flooded system gives a genuine overcharge by autumn.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> Why does a flooded-condenser system need a receiver pressure regulator as a partner to the flooding valve?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: When the flooding valve backs liquid into the condenser, the liquid remaining for the liquid line comes from the receiver. Step 2: Without pressure support, receiver pressure can sag toward the flooded condenser's low pressure and the liquid line loses its push. Step 3: The regulator admits a controlled amount of discharge gas to the receiver, holding receiver (and thus liquid-line) pressure up while the condenser does its flooding work.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A rooftop condensing unit with fan cycling works perfectly on calm cold nights but starves its case on windy cold nights. Name the physical cause and two field remedies.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The cause is <strong>wind</strong>: air forced across the idle condenser by the wind rejects heat almost like a running fan, defeating the cycling strategy. Step 2: Remedy one — wind baffles or a guard that blocks the prevailing wind path across the coil. Step 3: Remedy two — add or switch to a control method less wind-sensitive on this site, such as fan speed control paired with baffles, or a flooding-valve kit specified by the manufacturer.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> State the relationship between Module 5's floating head pressure and this module's minimum head pressure in one sentence, then name who sets the minimum.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Floating head pressure means letting condensing pressure fall with the weather to save energy, and the minimum head pressure is the floor where that fall must stop so valves, defrost, and oil functions still work. Step 2: The floor is set by the <strong>equipment manufacturer's specification</strong> for the system and its controls — it is an engineered value to look up, not a number to guess.</p>"
    }
  ],
  quiz: [
    {
      q: "Head pressure falls in cold weather mainly because:",
      choices: ["Compressors pump less in winter", "The condenser, sized for summer, rejects heat too effectively in cold air", "Refrigerant thickens in the cold", "TXVs close down seasonally"],
      answer: 1,
      explanation: "Correct: (b). Oversized-for-winter condensing surface plus cold air collapses condensing pressure. (a) Compressor pumping does not drop with season; if anything it works against lower pressure more easily. (c) Refrigerant viscosity changes are not the mechanism. (d) TXVs respond to superheat, not the calendar."
    },
    {
      q: "The first casualty of head pressure falling below the floor is usually:",
      choices: ["The condenser fan motor", "TXV feed — the evaporator starves for lack of pressure difference", "The compressor's paint", "The defrost clock"],
      answer: 1,
      explanation: "Correct: (b). Expansion valves are pushed by pressure difference; sagging head pressure starves coils and cases warm up. (a) Fan motors do not care about refrigerant pressure. (c) Paint is not a system function. (d) The clock keeps time regardless — it is defrost <em>effectiveness</em> on hot gas systems that suffers, after feed problems appear."
    },
    {
      q: "Fan cycling holds head pressure by:",
      choices: ["Opening a bypass around the condenser", "Switching condenser fans off and on to trim heat rejection", "Flooding the condenser with liquid", "Slowing the compressor"],
      answer: 1,
      explanation: "Correct: (b). Cycling fans is a reject-less-heat strategy. (a) A bypass is not part of fan cycling. (c) Flooding is the other philosophy — valves, not fans. (d) Compressor speed is a capacity strategy on some racks, not a fan-cycling function."
    },
    {
      q: "A flooded-condenser system raises winter head pressure by:",
      choices: ["Running fans backwards", "Backing liquid up into the condenser so part of it cannot condense", "Adding electric condenser heaters", "Closing the liquid line entirely"],
      answer: 1,
      explanation: "Correct: (b). Flooded tubes are inactive surface; the shrunken effective condenser can only hold pressure up at the target. (a) Fans never reverse for this purpose. (c) No electric condenser heaters are used in this method. (d) Closing the liquid line would starve the store, not feed it at controlled pressure."
    },
    {
      q: "The large nameplate charge on a flooded-condenser system exists because:",
      choices: ["The manufacturer pads the number", "The system must fill the flooded condenser in winter and still supply the receiver and lines", "Flooded systems leak more by design", "Winter refrigerant is less dense and more is needed by weight"],
      answer: 1,
      explanation: "Correct: (b). The winter flooding inventory is real volume that must be filled while the rest of the system stays fed. (a) Nameplate charges are engineered, not padded. (c) Leakage is never a design allowance. (d) The need is volumetric fill of the condenser, not a density correction."
    },
    {
      q: "Cases that warm only on the coldest nights, with low head pressure and all condenser fans running, point first to:",
      choices: ["Undercharge", "Failed or mis-set fan-cycling/low-ambient control", "Worn compressor valves", "A restriction in the liquid line"],
      answer: 1,
      explanation: "Correct: (b). The weather-locked symptom plus fans that never quit is the low-ambient control's signature. (a) Undercharge does not wait for cold nights to appear. (c) Worn valves underperform in all weather, worst in heat. (d) A restriction is weather-independent too — and would show its own pressure pattern year-round."
    },
    {
      q: "Compared with fan cycling, fan speed control holds head pressure:",
      choices: ["Less accurately but cheaper", "Smoothly, near a steady setpoint, instead of swinging in a band", "Only in summer", "By changing compressor staging"],
      answer: 1,
      explanation: "Correct: (b). Modulation trims rejection continuously, so pressure rides a line rather than bouncing between cut-in and cut-out. (a) It costs more and controls better — the reverse of the claim. (c) It works year-round and is most valuable in the cold. (d) Staging is a suction-side capacity tool, not the fan control's output."
    },
    {
      q: "Floating head pressure and minimum head pressure relate as:",
      choices: ["Rivals — a system uses one or the other", "Float is the strategy; the minimum is the floor where the float must stop", "The minimum applies only to flooded systems", "Floating means disabling all head pressure control"],
      answer: 1,
      explanation: "Correct: (b). One strategy, two parts: ride the weather down, defend the floor. (a) Every well-run floating system has a floor. (c) Fan-controlled systems have minimums too. (d) Floating <em>is</em> head pressure control — the active kind."
    }
  ],
  studyGuide: `
<h3>Module 7 — Head Pressure Control in Low Ambient: Quick Reference</h3>
<p><strong>The problem:</strong> winter makes condensers oversized; head pressure collapses; TXVs starve for lack of pressure difference; cases warm on the coldest nights.</p>
<p><strong>Strategy 1 — reject less heat:</strong> fan cycling (pressure band, cheap, swings) · fan speed control (steady line, smooth, costs more). Watch wind: baffles on exposed coils.</p>
<p><strong>Strategy 2 — shrink the condenser:</strong> flooding valve backs liquid into the condenser; receiver pressure regulator keeps the liquid line fed; system carries a large <em>winter charge</em> by design.</p>
<div class="formula">Float down with the weather → hold the manufacturer's minimum head pressure floor → TXVs keep their pressure difference</div>
<p><strong>Diagnostic signature:</strong> weather-locked warm cases + low head pressure = low-ambient control fault until proven otherwise. Never cure with charge.</p>
<p><strong>Self-check:</strong> Explain both strategies to a helper in one minute each, including each one's signature service trap (jumpered fan; "correcting" a flooded system's charge).</p>

<p><strong>Roof rule:</strong> on any winter no-cool, write the outdoor temperature on the ticket — future you will need it to believe the diagnosis.</p>`
};
