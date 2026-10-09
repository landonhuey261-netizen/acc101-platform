// HVAC 132 - Module 1: Heating Safety & Combustion Basics
module.exports = {
  number: 1,
  slug: "heating-safety-combustion-basics",
  title: "Heating Safety & Combustion Basics",
  estTime: "3–4 hours",
  objectives: [
    "Explain why heating work carries life-safety risks that cooling work does not, and name the habits that control those risks.",
    "Describe the combustion triangle and predict what happens when any one leg is removed or falls out of balance.",
    "Write the products of complete combustion for a hydrocarbon fuel and contrast them with the products of incomplete combustion.",
    "Explain why carbon monoxide is uniquely dangerous: its properties, its effect on the blood, and why it gives no warning.",
    "Describe the correct response to a suspected gas leak or CO alarm, in the correct order.",
    "Explain why CO testing belongs on every heating call, not just on calls where the customer complains of symptoms."
  ],
  sections: [
    {
      heading: "Why Heating Safety Comes First",
      html: `
<p>Every heating appliance in this course does one thing: it burns fuel (or converts electricity) inside a customer's home to make heat. That single fact separates heating work from most cooling work. A cooling system with a fault usually just stops cooling. A heating system with a fault can fill a house with carbon monoxide, leak raw fuel into a basement, or overheat a heat exchanger until it cracks — and a cracked heat exchanger can turn a comfort problem into a fatality. That is why this program puts safety and combustion in Module 1, before pressures, burners, or controls: you cannot diagnose what you do not first respect.</p>
<p>Three hazard families follow heating technicians everywhere:</p>
<ul>
<li><strong>Fuel hazards.</strong> Natural gas, propane, and fuel oil are stored energy. Unburned fuel leaking into a space can reach an explosive mixture, and propane — heavier than air — pools in low spots like pits and basements instead of drifting away.</li>
<li><strong>Combustion-product hazards.</strong> Burning fuel produces flue gases that must leave the building. Carbon monoxide (CO), the most dangerous of them, is colorless and odorless. A blocked vent or cracked heat exchanger can spill it into the living space silently.</li>
<li><strong>Heat and electrical hazards.</strong> Furnaces and boilers contain surfaces hot enough to burn skin and ignite nearby combustibles, plus line-voltage wiring, motors, and — on oil equipment — high-voltage ignition transformers.</li>
</ul>
<div class="callout"><strong>Key idea:</strong> On a heating call, the customer's safety outranks the equipment and outranks the schedule. If you find a condition that can hurt someone — CO in the space, a gas leak, a visibly cracked heat exchanger — the job becomes making the space safe first and repairing second. You will learn the phrase in this course: <em>when in doubt, shut it down and make it safe.</em></div>
<p>This module builds the foundation every later module stands on: what combustion is, what it should produce, what it produces when it goes wrong, and the daily habits — PPE, leak response, and CO testing on every call — that keep customers and technicians alive.</p>`
    },
    {
      heading: "The Combustion Triangle",
      html: `
<p><strong>Combustion</strong> is a rapid chemical reaction between a fuel and oxygen that releases heat and light. For combustion to start and keep going, three things must be present at the same time, and technicians picture them as the three legs of the <strong>combustion triangle</strong>:</p>
<ul>
<li><strong>Fuel</strong> — something that can burn: natural gas, propane, fuel oil, wood.</li>
<li><strong>Oxygen</strong> — normally supplied by the air around the burner. Air is about 21% oxygen and 79% nitrogen (mostly); only the oxygen takes part in the reaction.</li>
<li><strong>Heat (ignition)</strong> — enough energy to start the reaction: a spark, a hot surface igniter, or a pilot flame.</li>
</ul>
<div class="formula">Fuel + Oxygen + Ignition heat → Combustion (sustained while all three remain)</div>
<p>Remove any leg and combustion stops. This is not just theory — it is the operating principle behind half the safety devices you will meet in this course. A gas valve that closes removes the fuel leg. A flame sensor that proves flame exists is really checking that the triangle stayed assembled after ignition. A limit switch protects the equipment when heat — the output — is not being carried away fast enough.</p>
<p>The triangle also explains troubleshooting logic. A burner that will not light is missing a leg: no fuel (closed valve, empty tank), no air (blocked intake), or no ignition (failed igniter). A burner that lights but roars, lifts off, or soots is telling you the legs are present but out of <em>proportion</em> — too much or too little air for the fuel being delivered. Combustion quality is a ratio problem, and Module 6 will teach you to measure that ratio with an analyzer.</p>
<div class="callout"><strong>Key idea:</strong> Every combustion fault is a triangle fault: a leg missing, or the fuel-to-air proportion wrong. When you troubleshoot, ask first: <em>which leg, and is it absent or out of balance?</em></div>
<p>One more leg of the picture matters in the field: the nitrogen in the air. Nitrogen does not burn, but it rides through the flame, gets heated, and carries heat up the vent. That is one reason real burners are always supplied with more air than the chemistry minimum — a point we quantify as <em>excess air</em> in Module 6.</p>`
    },
    {
      heading: "Complete vs. Incomplete Combustion",
      html: `
<p>Natural gas is mostly methane (CH<sub>4</sub>). When methane burns with exactly enough oxygen and mixes perfectly, the reaction is:</p>
<div class="formula">CH<sub>4</sub> + 2O<sub>2</sub> → CO<sub>2</sub> + 2H<sub>2</sub>O + heat</div>
<p>The products of <strong>complete combustion</strong> are <strong>carbon dioxide (CO<sub>2</sub>)</strong>, <strong>water vapor</strong>, and heat (plus the nitrogen that passed through unchanged). Neither product is a poison at the concentrations a vented appliance produces and sends outdoors. This is the only acceptable outcome inside a customer's home.</p>
<p><strong>Incomplete combustion</strong> happens when the fuel cannot fully react — because oxygen is short, mixing is poor, the flame is chilled against a cold surface (<em>flame quenching</em>), or the burner is over-fueled. The carbon in the fuel then finishes only partway, and the products change for the worse:</p>
<ul>
<li><strong>Carbon monoxide (CO)</strong> — a toxic gas, the chief danger of bad combustion.</li>
<li><strong>Soot (solid carbon)</strong> — black deposits that foul heat exchangers, insulate them from the flame, make combustion still worse, and can fuel a chimney or flue fire.</li>
<li><strong>Aldehydes and other irritants</strong> — sharp-smelling partial-combustion products; their odor is sometimes the first clue that a burner is burning dirty.</li>
</ul>
<p>Notice the chain reaction: incomplete combustion lays down soot; soot insulates the heat exchanger; a hotter, dirtier exchanger transfers heat poorly and stresses the metal; stress cracks the exchanger; the crack lets flue gas — now carrying CO — into the supply airstream. A burner problem ignored long enough becomes a CO problem. This is why "the flame looks fine" is never a diagnosis: many CO-producing faults are invisible to the eye, which is exactly why Module 6 teaches analyzer-based verification.</p>
<div class="callout"><strong>Key idea:</strong> Complete combustion: fuel + enough oxygen → CO<sub>2</sub> + water vapor + heat. Incomplete combustion adds CO and soot — and both products attack the system that produced them, so bad combustion gets worse if it is left alone.</div>`
    },
    {
      heading: "Carbon Monoxide: The Silent Hazard",
      html: `
<p><strong>Carbon monoxide</strong> earns its grim nickname — the silent killer — honestly. It is <strong>colorless, odorless, and tasteless</strong>. No human sense detects it. A family can be poisoned in their sleep by a furnace they believed was working, because the only symptoms of early CO exposure are vague: headache, dizziness, nausea, fatigue — complaints most people blame on the flu.</p>
<p>CO harms the body by hijacking the blood. Hemoglobin, the molecule in red blood cells that carries oxygen, grabs CO far more readily than it grabs oxygen — CO binds to hemoglobin roughly <strong>200+ times more strongly</strong> than oxygen does (a standard, widely published toxicology figure; treat the exact multiple as "hundreds of times"). The result is carboxyhemoglobin: blood that looks red but cannot deliver oxygen. The brain and heart, the organs most hungry for oxygen, suffer first. Rising exposure brings confusion and poor judgment — tragically, the poisoning itself destroys the victim's ability to recognize the danger and leave — then unconsciousness and death.</p>
<p>Where does CO in a home come from? Any fuel-burning appliance burning dirty or venting badly: a cracked heat exchanger, a blocked or disconnected flue, a downdrafting water heater, an unvented space heater, a car idling in an attached garage. Note the pattern: CO becomes an <em>indoor</em> problem when either (a) combustion goes incomplete, or (b) flue gas that should have left the building spills into it. Your two defenses as a technician map exactly to those two causes: <strong>verify combustion quality</strong> and <strong>verify venting</strong>.</p>
<div class="callout"><strong>Key idea:</strong> You cannot see, smell, or taste CO. The only reliable detections are instruments: a personal CO monitor on your tool bag, an ambient CO check of the space, and a combustion analyzer in the flue. Testing is part of every furnace call because the dangerous failures are the invisible ones.</div>
<p>A hard rule of the trade, and of this course: if your meter shows elevated CO in a living space, or a customer reports a CO alarm sounding, treat it as an emergency until proven otherwise — get people out, ventilate if it can be done without entering the hazard, and involve the fire department or gas utility per local protocol. Equipment diagnosis happens after people are safe.</p>`
    },
    {
      heading: "Leak Response, PPE, and Working Habits",
      html: `
<p><strong>Gas leak response.</strong> Natural gas utilities add an odorant (mercaptan) so leaks smell like rotten eggs; propane is odorized too. If you smell strong gas or your combustible-gas detector alarms, the field sequence is:</p>
<ol>
<li><strong>Do not</strong> flip electrical switches, use a phone in the space, or do anything that could make a spark.</li>
<li>Get people <strong>out</strong> of the building.</li>
<li>From outside, call the gas utility or 911.</li>
<li>If — and only if — it can be done safely without re-entering a hazardous atmosphere, shut the gas off at the meter.</li>
<li>Do not re-enter until the utility or fire department clears the space.</li>
</ol>
<p><strong>PPE and habits.</strong> Heating work PPE is unglamorous and non-negotiable: safety glasses when cleaning burners or blowing out passages; gloves for sheet-metal edges and hot surfaces; hearing protection around loud burners; a personal CO monitor clipped where you breathe; and lockout/tagout discipline on every electrical task (Module 11 returns to this). Never bypass a safety control "just to test" and leave it bypassed — a jumper is a diagnostic tool for minutes, never a repair.</p>
<p><strong>The every-call routine.</strong> Professional heating techs run the same safety spine on every call, however small the complaint: (1) ambient CO check of the equipment room and living space on arrival; (2) visual inspection of the vent system and heat exchanger access; (3) combustion test with an analyzer once the appliance is running steadily (Module 6); (4) confirm the home has CO alarms and mention them if absent. This routine is why the ask-example for this whole course is "Why is carbon monoxide testing part of every furnace call?" — because the call where you skip it is the call that can hurt someone.</p>
<div class="callout"><strong>Key idea:</strong> Safety is a sequence, not a feeling: check the air, inspect the vent path, test combustion, and never leave a bypassed safety behind. Do it in order, on every call, especially the easy ones.</div>`
    }
  ],
  keyTerms: [
    { term: "Combustion", def: "A rapid chemical reaction between a fuel and oxygen that releases heat and light." },
    { term: "Combustion triangle", def: "The three requirements for combustion — fuel, oxygen, and ignition heat; removing any one stops the reaction." },
    { term: "Complete combustion", def: "Burning in which the fuel fully reacts with oxygen, producing carbon dioxide, water vapor, and heat." },
    { term: "Incomplete combustion", def: "Burning starved of oxygen or poorly mixed, producing carbon monoxide, soot, and other partial-combustion products in addition to CO2 and water." },
    { term: "Carbon monoxide (CO)", def: "A colorless, odorless, toxic gas produced by incomplete combustion; binds to hemoglobin and starves the body of oxygen." },
    { term: "Carboxyhemoglobin", def: "Hemoglobin bound to carbon monoxide instead of oxygen; the blood state that causes CO poisoning." },
    { term: "Soot", def: "Solid carbon deposited by incomplete combustion; fouls heat-transfer surfaces and worsens combustion further." },
    { term: "Flame quenching", def: "Cooling of a flame by contact with a cold surface, interrupting the reaction and producing CO." },
    { term: "Excess air", def: "Air supplied beyond the theoretical amount needed for complete combustion; some is required for safety and clean burning." },
    { term: "Flue gas", def: "The mixture of combustion products (plus excess air and nitrogen) that must be vented outdoors." },
    { term: "Heat exchanger", def: "The metal barrier that transfers heat from flue gas to the air or water being heated while keeping the two streams separate." },
    { term: "Mercaptan", def: "The odorant added to natural gas and propane so leaks can be smelled; fuel gases themselves have little or no odor." },
    { term: "Combustion air", def: "The air supplied to the burner for the combustion reaction, including excess air." },
    { term: "Ambient CO check", def: "Measuring carbon monoxide in the air of the space around an appliance, as distinct from measuring CO in the flue." },
    { term: "Lockout/tagout", def: "The procedure of isolating equipment from its energy sources, locking the disconnect, and tagging it so no one re-energizes it during service." },
    { term: "Combustible-gas detector", def: "An instrument that senses unburned fuel gas in air to locate leaks; also called a gas sniffer or CGI in some trades." },
    { term: "Spillage", def: "Flue gas escaping into the room at the draft hood or appliance opening instead of rising up the vent." },
    { term: "Personal CO monitor", def: "A small wearable instrument that alarms when the CO concentration in the wearer's breathing zone rises." }
  ],
  video: {
    title: "How a Furnace Works",
    embedUrl: "https://www.youtube.com/embed/Eq3JQWWirJs",
    note: "A clear walkthrough of the parts of a gas furnace and how they work together — burners, heat exchanger, blower, and vent. Watch for the path flue gas takes through the heat exchanger: that sealed path is the barrier this module's safety discussion is about.",
    more: [
      { title: "Gas Furnace Class w/ Bert", url: "https://www.youtube.com/watch?v=lvZ5iN1xh7Q" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A burner lights, runs for ten seconds, and goes out. Using the combustion triangle, list which leg(s) could explain a burner that never lights at all, and explain why a burner that lights but cannot stay lit points to a proving problem rather than a missing triangle leg.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: A burner that never lights is missing a triangle leg — fuel (closed gas valve, empty propane tank, no oil), oxygen/air path (blocked intake so severe the burner cannot draw air — rare as a total no-light cause), or ignition (failed hot-surface igniter, dead spark, no power to the ignition system). Step 2: A burner that lights proves all three legs were present at ignition — fuel flowed, air was there, and ignition energy was delivered. Step 3: If it then goes out within seconds, the control system is not receiving proof that the flame exists (flame proving — Module 3), so it closes the gas valve as designed. The triangle was assembled; the <em>verification</em> failed. Distinguish 'no combustion' from 'combustion not proven' — they lead to completely different parts of the system.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> Write the balanced chemical equation for the complete combustion of methane, and state the products. Then explain, in terms of that equation, where the carbon in carbon monoxide comes from when combustion is incomplete.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Methane is CH<sub>4</sub>. Complete combustion: <div class=\"formula\">CH<sub>4</sub> + 2O<sub>2</sub> → CO<sub>2</sub> + 2H<sub>2</sub>O + heat</div> Step 2: Check the balance — carbon: 1 each side; hydrogen: 4 each side (2 × H<sub>2</sub>O); oxygen: 4 each side (2 × O<sub>2</sub> in, 2 in CO<sub>2</sub> + 2 in 2H<sub>2</sub>O out). Step 3: The products are carbon dioxide, water vapor, and heat. Step 4: In incomplete combustion the same carbon atom from the fuel is still there — carbon does not disappear. If it cannot fully combine with oxygen to become CO<sub>2</sub>, it stops partway as CO (one oxygen atom instead of two) or deposits as solid carbon (soot). CO is quite literally half-finished CO<sub>2</sub>.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A homeowner says: 'The furnace must be fine — nobody has smelled anything strange.' Explain why this reasoning fails for carbon monoxide, and name the three instrument-based checks that replace 'smell' as evidence.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: CO is colorless, odorless, and tasteless — human senses provide zero information about it, so 'nothing smells strange' is evidence about odorized fuel leaks only, not about CO. Step 2: Early CO symptoms (headache, nausea, fatigue) imitate common illness, so 'nobody feels poisoned' is also unreliable. Step 3: The instrument checks are: (a) a personal CO monitor worn by the technician, (b) an ambient CO measurement of the equipment room and living space, and (c) a combustion analyzer measurement of CO in the flue gas, which reveals CO production at its source before it ever becomes an indoor exposure. Step 4: Conclusion — on heating calls, instruments are the senses. If it wasn't measured, it wasn't checked.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> You arrive on a no-heat call and immediately smell strong rotten-egg odor in the basement near the furnace. Put the correct response actions in order and state two things you must NOT do.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Stop — do not begin the no-heat diagnosis; a strong gas odor converts this into a leak emergency. Step 2: Do NOT flip any electrical switch (including the furnace switch or lights) and do NOT use a phone inside the space — either can produce a spark. Step 3: Get everyone out of the building without operating anything electrical on the way. Step 4: From outside, call the gas utility emergency line or 911. Step 5: Only if it can be done without re-entering a hazardous atmosphere, shut gas off at the meter. Step 6: Do not re-enter until the utility or fire department declares the space safe. Repair work waits for clearance, full stop.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> Explain the failure chain that connects a dirty, sooting burner to a cracked heat exchanger, and identify the two points in the chain where a technician's routine checks interrupt it.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: A burner burning with too little air (dirty, misadjusted, or starved) produces soot and CO — incomplete combustion. Step 2: Soot coats the inside of the heat exchanger, insulating the metal from the flue gas; heat transfer falls and the metal and flue temperatures climb. Step 3: Chronic overheating plus thermal cycling fatigues the metal until it cracks. Step 4: The crack lets flue gas (carrying CO) leak into the supply airstream and house air leak into the flue, degrading combustion further. Step 5 — interruption points: (a) the combustion analysis check (Module 6) catches dirty combustion at Step 1, before soot accumulates; (b) the heat-exchanger inspection catches early stress damage at Step 3, before a through-crack develops. Routine checks are cheap precisely because they break the chain early.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A propane furnace sits in a below-grade mechanical room. Explain why a propane leak behaves differently from a natural gas leak in that room, and what that difference means for where you check with your detector.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Propane vapor is heavier than air (specific gravity about 1.5), so leaked propane sinks and pools along floors, in pits, and in low enclosed areas; it can linger at floor level in an explosive mixture long after the leak stops. Step 2: Natural gas is lighter than air (specific gravity about 0.6), so it tends to rise and disperse toward ceilings. Step 3: In this below-grade room, a propane leak concentrates exactly where the equipment and the technician's knees are — and the room itself is a low spot with nowhere for the gas to drain. Step 4: Detector practice follows the physics: sweep low — floor level, pits, and the bottom of the appliance — for propane; sweep high — above fittings and near the ceiling — for natural gas. Same instrument, opposite search pattern, dictated by fuel density.</p>"
    }
  ],
  quiz: [
    {
      q: "Which set lists exactly the three legs of the combustion triangle?",
      choices: ["Fuel, oxygen, and ignition heat", "Fuel, carbon dioxide, and heat", "Gas pressure, airflow, and spark", "Fuel, nitrogen, and ignition heat"],
      answer: 0,
      explanation: "Correct: (a) Combustion needs fuel, oxygen, and enough heat (ignition energy) to start the reaction; remove any one and it stops. (b) Carbon dioxide is a product of combustion, not an input leg. (c) Gas pressure and airflow deliver two legs but are not themselves the legs, and listing them misses fuel as such. (d) Nitrogen is the inert majority of air that passes through the flame unchanged — it is not the reactive leg; oxygen is."
    },
    {
      q: "The products of complete combustion of natural gas are:",
      choices: ["Carbon monoxide, soot, and heat", "Carbon dioxide, water vapor, and heat", "Oxygen, nitrogen, and heat", "Carbon dioxide and unburned methane"],
      answer: 1,
      explanation: "Correct: (b) With enough oxygen and good mixing, methane converts fully to CO2 and water vapor, releasing heat. (a) CO and soot are the signature products of incomplete combustion — the failure mode, not the goal. (c) Oxygen is consumed, not produced, and nitrogen is a pass-through, not a product of the reaction. (d) Unburned methane in the flue means fuel passed through without reacting — also incomplete combustion, and a fuel leak into the vent besides."
    },
    {
      q: "Why is carbon monoxide especially dangerous compared with most other household hazards?",
      choices: ["It is explosive at very low concentrations", "It has a strong warning odor that causes panic", "It is colorless and odorless, and it disables the victim's judgment as it poisons them", "It corrodes heat exchangers on contact"],
      answer: 2,
      explanation: "Correct: (c) CO gives no sensory warning, and because it starves the brain of oxygen it erodes the very judgment a victim would need to escape. (a) CO's danger is toxicity, not explosion — flammability is a property of unburned fuel gas, a different hazard. (b) CO has no odor at all; the rotten-egg smell in fuel gas is added mercaptan, and it warns of leaks, not of CO. (d) CO does not attack metal; soot, condensate acids, and heat stress are what damage exchangers."
    },
    {
      q: "Soot forming inside a heat exchanger is dangerous over time mainly because it:",
      choices: ["Insulates the metal, causing overheating and stress that can crack the exchanger", "Reacts with the metal to produce carbon monoxide directly", "Blocks the blower wheel from turning", "Raises the gas manifold pressure"],
      answer: 0,
      explanation: "Correct: (a) Soot is a thermal insulator laid down on the flue side; heat transfer drops, metal and flue temperatures rise, and thermal stress plus cycling eventually crack the exchanger — after which flue gas can enter the airstream. (b) Soot is a product of bad combustion, not a chemical factory for CO; CO comes from the flame chemistry itself. (c) Soot deposits are on the combustion side and in the vent, not typically on the blower wheel. (d) Manifold pressure is set by the gas valve regulator and supply pressure, not by deposits downstream."
    },
    {
      q: "You smell strong gas odor in a basement. What is the correct first response?",
      choices: ["Turn off the furnace switch and start ventilating with a fan", "Call the utility from the basement phone so you can describe the location precisely", "Leave the building without operating electrical switches, then call the utility or 911 from outside", "Find the leak with your detector, then decide whether to evacuate"],
      answer: 2,
      explanation: "Correct: (c) People out first, no switch flipping (a switch can spark), communication from outside the hazard. (a) Operating the furnace switch or plugging in a fan can ignite an explosive mixture — ventilation waits for responders. (b) Using a phone inside the space is an ignition risk, and location details can be given from outside. (d) Leak hunting is for trace odors under controlled conditions; a strong odor means the atmosphere may already be explosive — diagnosis never outranks evacuation."
    },
    {
      q: "Why does this course require a CO check on every heating call, even a simple one?",
      choices: ["Because CO alarms in homes are usually disconnected", "Because the failures that produce dangerous CO are often invisible and unrelated to the complaint that brought you there", "Because CO is produced only by furnaces over ten years old", "Because regulations require documenting a CO reading before any repair"],
      answer: 1,
      explanation: "Correct: (b) A cracked exchanger or blocked vent can exist on a call about a noisy blower; CO production gives no visible sign, so only a routine instrument check catches it. (a) Even a working CO alarm is a life-safety backstop, not a combustion diagnostic — its presence doesn't replace testing. (c) A neglected two-year-old furnace can produce CO and a clean thirty-year-old one may not; age alone doesn't decide. (d) The reason is safety, not paperwork — no universal rule is claimed here, and the habit would be right even without documentation."
    },
    {
      q: "Flame quenching produces carbon monoxide because:",
      choices: ["The flame touches a cold surface and the reaction is interrupted before carbon fully oxidizes", "Cold surfaces convert CO2 back into CO", "The burner fires at lower manifold pressure when cold", "Water vapor condenses on the burner and rusts it"],
      answer: 0,
      explanation: "Correct: (a) Flame impinging on a cold heat-exchanger surface chills the reaction zone; carbon that was on its way to CO2 stops at CO. (b) CO2 does not convert back to CO on cold metal — the chemistry runs the other way when conditions allow. (c) Manifold pressure is a regulator setting and does not change with surface temperature. (d) Condensation and corrosion are real problems in high-efficiency equipment, but they are not the quenching mechanism that makes CO."
    },
    {
      q: "A burner's flame is present and proven, but the analyzer later shows high CO. In triangle terms, what is wrong?",
      choices: ["The ignition leg is missing", "The fuel and air legs are present but out of proportion, or the flame is being quenched", "The oxygen leg is absent", "Nothing — if flame is proven, combustion must be complete"],
      answer: 1,
      explanation: "Correct: (b) All three legs exist — the burner lit and proved. High CO means the reaction is not finishing: fuel-to-air proportion is off (too much fuel or too little air) or flame is chilled against a surface. (a) and (c) describe no-light conditions, contradicted by the fact the burner is running. (d) Flame proving only establishes that a flame exists — it says nothing about combustion quality, which is precisely why analyzer verification exists."
    }
  ],
  studyGuide: `
<h3>Module 1 — Heating Safety & Combustion Basics: Quick Reference</h3>
<p><strong>Combustion triangle:</strong> fuel + oxygen + ignition heat. Remove a leg, combustion stops. A lit-but-dirty burner has all three legs — in the wrong proportion.</p>
<p><strong>Complete combustion (methane):</strong> CH<sub>4</sub> + 2O<sub>2</sub> → CO<sub>2</sub> + 2H<sub>2</sub>O + heat. Products: carbon dioxide, water vapor, heat. Air is ~21% oxygen; the rest is mostly nitrogen that passes through and carries heat up the vent.</p>
<p><strong>Incomplete combustion</strong> (too little air, poor mixing, over-fueling, or flame quenching on a cold surface) adds: <strong>carbon monoxide</strong> and <strong>soot</strong>. Soot insulates the exchanger → overheating → stress cracks → flue gas in the airstream. Bad combustion gets worse when ignored.</p>
<p><strong>CO facts:</strong> colorless, odorless, tasteless. Binds hemoglobin hundreds of times more strongly than oxygen (carboxyhemoglobin). Symptoms mimic flu, then destroy judgment. Only instruments detect it: personal monitor, ambient check, flue analyzer.</p>
<p><strong>Gas leak response, in order:</strong> no switches, no phone in the space → everyone out → call utility/911 from outside → shut off at meter only if safe without re-entering → stay out until cleared.</p>
<p><strong>Fuel density:</strong> propane (SG ≈ 1.5) sinks and pools low — sweep the detector low. Natural gas (SG ≈ 0.6) rises — sweep high.</p>
<p><strong>Every-call safety spine:</strong> ambient CO check → vent and exchanger visual → combustion test once running steadily → confirm the home has CO alarms.</p>
`
};
