// HVAC 235 - Module 10: Carbon Monoxide
module.exports = {
  number: 10,
  slug: "carbon-monoxide",
  title: "Carbon Monoxide",
  estTime: "3–4 hours",
  objectives: [
    "Explain how CO is produced by incomplete combustion and why it is undetectable by human senses.",
    "Inventory the CO sources in a typical home, including non-heating sources and backdrafting pathways.",
    "Specify CO alarm placement and maintenance per manufacturer instructions and widely published safety guidance.",
    "Execute the correct response protocol for a CO alarm or elevated ambient reading — occupants out, responders called, no source-hunting.",
    "Apply red-tag rules: when and how an unsafe appliance is shut down, tagged, documented, and communicated."
  ],
  sections: [
    {
      heading: "The Poison: What CO Is and Why It Kills Quietly",
      html: `
<p><strong>Carbon monoxide (CO)</strong> is a gas produced whenever carbon fuel — natural gas, propane, oil, wood, charcoal, gasoline — burns <em>incompletely</em>: starved of oxygen, fouled, misadjusted, or vented so poorly that combustion degrades. Module 4 showed the burner-side story; this module is the human-side one. CO is <strong>colorless, odorless, and tasteless</strong>. No human sense detects it at any concentration, which is why it earns its reputation: the first warnings are symptoms, and the symptoms impersonate the flu — headache, dizziness, nausea, fatigue, confusion — a disguise that sends people to bed in the very house that is poisoning them.</p>
<p>The mechanism is biochemical treachery: hemoglobin binds CO far more readily than oxygen, so blood exposed to CO progressively loads with <strong>carboxyhemoglobin</strong> and unloads its ability to deliver oxygen. The victim suffocates at the cellular level while breathing normally — which is why exposure is a race: remove people from the source first and let medicine do the rest. Children, the elderly, pregnant women, and people with heart or respiratory conditions are harmed earliest and worst.</p>
<div class="callout"><strong>Key idea:</strong> Every CO rule in this module reduces to one asymmetry: CO gives no warning of its own. Detection is therefore entirely artificial — alarms, instruments, and disciplined response — and any practice that weakens those three (ignored alarms, defeated safeties, "let's see if it clears") gambles with a poison that never announces the bet.</div>
<p>One technician-specific corollary: your <strong>personal CO monitor</strong> is part of your PPE on every combustion call (HVAC 132 set this rule; the lab drills it). Equipment rooms concentrate exactly the failures this module catalogs, and the tech is the person standing closest, longest.</p>`
    },
    {
      heading: "Sources in the Home: The Full Inventory",
      html: `
<p>Walk a house the way CO does — by production and by pathway:</p>
<ul>
<li><strong>The heating plant:</strong> a furnace or boiler with a cracked heat exchanger (Module 4's dancing flames), fouled burners, a blocked or disconnected vent, or a failed inducer spilling combustion products at the cabinet instead of the sky.</li>
<li><strong>Water heaters</strong> — the overlooked appliance: a natural-draft water heater <strong>backdrafting</strong> down its own flue in a depressurized house (clothes dryer, range hood, bath fans, and an unbalanced ventilator from Module 9 all pull), spilling its entire exhaust into the room at its draft hood while its burner looks perfectly innocent.</li>
<li><strong>Cooking:</strong> gas ranges and ovens produce CO whenever they run; unvented or recirculating-only hoods leave it in the kitchen, and using an oven to "help heat" a room is a recognized poisoning pattern.</li>
<li><strong>Fireplaces, wood stoves, and space heaters:</strong> any unvented fuel-burning heater consumes room oxygen and returns its exhaust to the room; vented ones join the flue-blockage and backdraft risk list.</li>
<li><strong>Engines and the attached garage:</strong> a vehicle warming up, or a portable generator run in or near the garage during an outage, floods CO that migrates through shared walls and doorways — generator misuse after storms is one of the deadliest repeat patterns in CO statistics, and it involves no heating equipment at all.</li>
<li><strong>Blocked terminations and chimneys:</strong> snow (Module 3), nests, collapsed liners — the exhaust's road out is closed, so it takes the road in.</li>
</ul>
<div class="callout"><strong>Key idea:</strong> CO events are usually <em>system</em> events: a marginal appliance plus a pressure or venting condition. The tech who checks only the furnace misses the water heater backdrafting behind him — the ambient survey of the whole mechanical space, appliances running under worst-case depressurization, is the professional test (and was Module 9's commissioning rule for ventilators, for this exact reason).</div>`
    },
    {
      heading: "Alarms: Placement, Maintenance, and Honest Limits",
      html: `
<p>Residential CO alarms are the last line of defense — listed safety devices that monitor continuously and alarm according to their listing's exposure criteria. Widely published guidance (NFPA and manufacturer instructions agree on the architecture) places them:</p>
<ul>
<li><strong>On every level of the home, including the basement.</strong></li>
<li><strong>Outside each separate sleeping area</strong>, in the immediate vicinity of the bedrooms — the alarm's first job is waking sleepers.</li>
<li><strong>Installed per the manufacturer's instructions for height and location.</strong> CO mixes freely with room air (its density is close to air's), so alarms are made in plug-in, wall, and ceiling forms — follow the specific model's instructions rather than folklore about gases rising or sinking.</li>
<li><strong>Kept the manufacturer-specified distance from fuel-burning appliances and cooking equipment</strong>, so normal startup traces don't create nuisance alarms that teach occupants to unplug the protection.</li>
<li><strong>Avoided in garages and very humid areas</strong> unless the unit is listed for it — exhaust fumes and moisture corrupt sensing and credibility alike.</li>
</ul>
<p>Maintenance is part of the install conversation: test on the manufacturer's schedule, replace batteries where applicable, and replace the whole alarm at its <strong>end-of-life</strong> — sensors degrade on a calendar whether or not they ever alarmed, and listed units signal their own expiration. Date every unit you install.</p>
<div class="callout"><strong>Key idea — honest limits:</strong> A CO alarm is an emergency warner, not a diagnostic instrument. It alarms on sustained exposure per its listing, so "the alarm never went off" does <em>not</em> prove an appliance is clean (your analyzer and ambient survey answer that), and a handheld spot reading of zero does not overrule an alarm that sounded earlier — conditions change with appliance cycles and house pressures. Teach customers both halves of that sentence.</div>`
    },
    {
      heading: "Response Protocol: When the Alarm Sounds or the Meter Speaks",
      html: `
<p>The protocol is short because it must be executable by a frightened family at 3 a.m. — and by you, mid-call, when your personal monitor alarms:</p>
<ol>
<li><strong>Get everyone out.</strong> People and pets leave the building immediately. Do not pause to open windows, shut off appliances, gather belongings, or find the source. If someone cannot be moved or shows serious symptoms, that information goes to the responders — re-entry is their call, in breathing apparatus.</li>
<li><strong>Call from outside.</strong> 911 / the fire department (or the gas utility's emergency line per local practice) from a neighbor's house or a phone already outside. Responders meter the building and clear it — or don't.</li>
<li><strong>No re-entry until cleared.</strong> Not for pets, medication, or "just to grab the keys," until the responding authority says the building is safe.</li>
<li><strong>Medical attention for the symptomatic</strong>, even if symptoms fade outdoors — fading symptoms do not measure blood CO, and treatment decisions belong to clinicians told "possible CO exposure."</li>
</ol>
<div class="callout"><strong>Key idea:</strong> The technician's version has the same spine. Your monitor alarms or your ambient survey reads elevated: stop work, get the household out with you, make the call from outside, and let the emergency process own the building. Diagnosing the appliance happens after people are safe and responders have cleared the scene — the sequence from the HVAC 132 lab's first row, scaled up. Heroics with a wrench are how techs become patients.</div>
<p>And the false-alarm question, handled honestly: occupants should treat <em>every</em> alarm as real until responders say otherwise. A chirping end-of-life signal or low-battery warning is a different sound pattern — teach customers their unit's signals at install so "alarm" and "chirp" are never confused at 3 a.m.</p>`
    },
    {
      heading: "Red-Tag Rules: Shutting Down the Unsafe Appliance",
      html: `
<p>When your diagnosis finds an appliance that is producing CO into the home, spilling flue gas, or operating with a breached heat exchanger or dead safety, the professional act is the <strong>red tag</strong>: the appliance is taken out of service on the spot, formally. The elements:</p>
<ul>
<li><strong>Shut it down and make it stay down:</strong> turn the appliance off, close its gas shutoff as procedures direct, and apply the tag/lock so a helpful family member cannot quietly restore it that evening.</li>
<li><strong>Tag with specifics:</strong> the physical tag states the appliance, the condition found, the date, and who to call — the tag is a safety device and a legal record at once.</li>
<li><strong>Notify per local rules:</strong> many jurisdictions and utilities require notification of the gas utility or authority for red-tagged equipment; know your local code's requirement and follow it exactly — this is the "per local code" step that appears throughout CO practice.</li>
<li><strong>Communicate plainly to the customer:</strong> what you found, what it can do, why it cannot run "one more night," and what the repair-or-replace path is (Module 11). Offer the safe alternatives — temporary electric heat guidance, utility/emergency resources — without ever softening the shutdown itself.</li>
<li><strong>Document measurements:</strong> ambient readings, analyzer results, the appliance condition, and the customer's acknowledgment, on the ticket (Module 12's documentation standard was written for moments like this).</li>
</ul>
<div class="callout"><strong>Key idea:</strong> The red tag is not a sales tool and must never be used as one — it is a safety act with paperwork. Its credibility, in court and in the customer's memory, rests on measured evidence and consistent rules: the same finding gets tagged in a mansion and in a rental, whether or not a replacement sale follows. Techs who tag honestly earn the trust that makes customers accept the shutdown — and the repair.</div>
<p>Corollary for the whole course: a red-tagged appliance and a defeated safety are the same failure viewed from opposite ends. Everything in Modules 1–9 that "just gets it running" by bypassing a proof ends here, at this module's tag.</p>`
    }
  ],
  keyTerms: [
    { term: "Carbon monoxide (CO)", def: "A colorless, odorless, tasteless gas from incomplete combustion of carbon fuels; binds hemoglobin far more strongly than oxygen, suffocating tissue while breathing continues." },
    { term: "Carboxyhemoglobin", def: "Hemoglobin loaded with carbon monoxide instead of oxygen; its rising level in blood is the measure of CO poisoning's severity." },
    { term: "Incomplete combustion", def: "Burning without sufficient oxygen or with fouled/misadjusted equipment, producing CO instead of fully oxidized CO₂ and water." },
    { term: "Backdrafting", def: "Room air being pulled down a flue by house depressurization, reversing exhaust flow and spilling flue gas (including CO) into the living space." },
    { term: "Spillage", def: "Flue gas escaping at a draft hood or appliance opening instead of rising through the vent — visible with a mirror or smoke test at the hood while the appliance runs." },
    { term: "Draft hood", def: "The opening on a natural-draft appliance where flue gas transitions to the vent and dilution air enters; the point where spillage appears." },
    { term: "Personal CO monitor", def: "The technician's wearable ambient CO detector — PPE on every combustion call, alarming independent of any building alarm." },
    { term: "CO alarm (residential)", def: "A listed device that continuously monitors ambient CO and alarms per its listing's exposure criteria; an emergency warner, not a diagnostic instrument." },
    { term: "End-of-life signal", def: "A CO alarm's indication that its sensor has reached its service life and the unit must be replaced; distinct from the alarm sound and from a low-battery chirp." },
    { term: "Ambient survey", def: "Measuring CO levels in the mechanical room and living space with appliances operating, including under worst-case depressurization, to find production and spillage." },
    { term: "Worst-case depressurization", def: "The test condition with all exhaust appliances and air handlers arranged to pull the house most negative — the condition under which marginal vents backdraft." },
    { term: "Red tag", def: "The formal out-of-service marking of an unsafe appliance: shutdown, shutoff/tag applied, notifications made, findings documented and communicated." },
    { term: "Heat exchanger breach", def: "A crack or hole in a heat exchanger allowing combustion products into the circulating airstream — an automatic red-tag finding when confirmed." },
    { term: "Sealed combustion", def: "Piped outdoor combustion air and venting (Module 3) that isolates the appliance from house pressures — the structural defense against backdrafting." },
    { term: "Generator CO hazard", def: "The outage pattern of generators run in garages or near openings flooding homes with CO — a source involving no heating equipment at all." },
    { term: "Response protocol", def: "The fixed sequence for a CO alarm or elevated reading: everyone out, call responders from outside, no re-entry until cleared, medical evaluation for the symptomatic." }
  ],
  video: {
    title: "Furnace Heat Exchanger Repair Paoli, PA - PJ MAC HVAC Air Duct Cleaning",
    embedUrl: "https://www.youtube.com/embed/zPSEJJTVpDU",
    note: "A contractor video built around a damaged furnace heat exchanger: why a compromised exchanger is a carbon monoxide danger (the gases it can no longer keep separated from the home's air), why detectors matter, and the guidance that a suspected CO problem means leaving and calling for help before arranging repair. It is the field-voice version of this module's red-tag logic.",
    more: [
      { title: "Gas Furnace Class w/ Bert", url: "https://www.youtube.com/watch?v=lvZ5iN1xh7Q" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A customer says: 'Our CO alarm has never gone off in six years, so the furnace must be fine — skip the combustion check this year.' Dismantle the reasoning and state what you do.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The alarm is an emergency warner with listing-based exposure criteria — silence is compatible with an appliance producing CO that vents mostly well, spills intermittently under weather/pressure conditions that haven't coincided with the alarm's criteria, or is degrading toward failure. Step 2: 'Never alarmed' also says nothing about whether the alarm itself still works — six years in, its sensor may be near end-of-life, which the customer hasn't tested. Step 3: What you do: perform the combustion/ambient checks as scoped (analyzer readings, ambient survey, appliance-running spillage checks), test the alarm per its manufacturer instructions, check its manufacture/end-of-life date, and document the actual measurements. The alarm's job is to catch catastrophe; your instruments catch the trend toward it.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> Write the placement plan for CO alarms in a two-story home with a basement furnace and water heater, bedrooms upstairs, and a family room with a gas fireplace on the main floor. Justify each placement in one clause.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: <strong>Basement:</strong> one alarm on the basement level — the furnace and water heater live there and level coverage catches production near the source. Step 2: <strong>Main floor:</strong> one alarm covering the main level, positioned per manufacturer instructions with regard to the gas fireplace — level coverage plus proximity to a second combustion appliance, at the manufacturer-specified distance to avoid nuisance alarms. Step 3: <strong>Upstairs:</strong> one alarm outside the sleeping area in the immediate vicinity of the bedrooms — the waking-the-sleepers placement, the most life-critical of the three. Step 4: All units installed at the height/location their specific manufacturer directs (CO mixes with air; follow the model, not folklore), test dates and end-of-life dates recorded and handed to the owner. Final justification: every level + outside sleeping areas is the widely published NFPA/manufacturer architecture — this plan simply instantiates it for this house.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> At 9 p.m. your personal monitor alarms in a customer's basement while the customer stands beside you saying 'that's been chirping all week.' Script your next three minutes.</p>",
      solution: "<p><strong>Answer:</strong> Minute one: stop work, state plainly 'We are leaving the house now — that is my carbon monoxide monitor alarming, and we treat it as real,' and move everyone (and pets, if immediately at hand) outside without pausing to shut down equipment or gather anything. Minute two: from outside, call 911/fire department on the customer's behalf, reporting a CO monitor alarm and the customer's week of 'chirping,' and note aloud who is out and whether anyone has symptoms (headache, nausea, dizziness) so responders and medics hear it first-hand. Minute three: brief the customer on the rules — nobody re-enters until responders meter and clear the house; anyone symptomatic gets evaluated and tells clinicians 'possible CO exposure'; your diagnosis of the appliance happens only after clearance, likely as a red-tag conversation. Throughout: no re-entry for tools or paperwork — the clipboard is not worth a carboxyhemoglobin level.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> Your inspection confirms a cracked heat exchanger on a furnace serving a family with an infant. The customer begs to run it 'just tonight — it's going below freezing — we'll keep a window open.' Write your response and actions.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The refusal, plainly: 'I understand the cold is frightening, and I can't leave this furnace able to run. A cracked exchanger can put carbon monoxide into the air your baby breathes, CO gives no warning, and an open window is not a control that protects a sleeping infant — I won't risk being the tech who agreed to that night.' Step 2: Actions: shut the appliance down and close its gas shutoff, apply the red tag with the finding stated, make the notifications your local code/utility require, and document the measurements and the conversation. Step 3: Help within the rules: discuss safe temporary heat (electric space heaters used per their instructions, utility emergency programs, staying with family/hotel tonight), expedite the replacement/repair decision (Module 11), and leave your number. Step 4: The principle to carry: the customer's consent cannot transfer this risk — the tag is not negotiable because the hazard is not theirs alone to accept on behalf of the infant.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A natural-draft water heater passes its spillage test on a calm morning but the homeowner reports the nearby CO alarm sounded twice last winter on windy evenings when the dryer and range hood ran together. Connect the evidence and design the verification test.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The pattern is <strong>worst-case depressurization backdrafting</strong>: dryer + range hood (plus wind effects on the vent termination) pull the house negative beyond what the marginal natural-draft flue can overcome, and the water heater spills its exhaust at the draft hood until pressures change. On a calm morning with nothing exhausting, the same flue drafts fine — both observations are true; the test conditions differ. Step 2: Verification: reproduce the worst case — close windows/doors as on a winter evening, run dryer, range hood, bath fans, and the air handler, fire the water heater, and test for spillage at the draft hood after the flue warms, while monitoring ambient CO. Step 3: If spillage confirms, remedies attack causes: combustion-air provision, vent/chimney correction, reducing competing exhaust or interlocking makeup air — with sealed-combustion replacement as the structural fix — and the appliance's status (operate or red-tag) follows the measured result and local code, not the customer's calm-morning experience.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> Distinguish these three sounds/events for a customer at install: (a) full CO alarm, (b) end-of-life signal, (c) low-battery chirp — and the correct response to each.</p>",
      solution: "<p><strong>Answer:</strong> (a) <strong>Full alarm:</strong> the emergency pattern — treat as CO present: everyone out, call responders from outside, no re-entry until cleared. Never unplug it to think it over. (b) <strong>End-of-life signal:</strong> the unit's sensor has expired — the house currently has <em>no working CO protection</em>; replace the alarm immediately (today, not at the next shopping trip), because the gap, not the beep, is the danger. (c) <strong>Low-battery chirp:</strong> replace the battery promptly per instructions and re-test the unit; a chirping unit ignored long enough becomes a dead unit, which is case (b) without the honesty. Teaching point: the time to learn these sounds is install day with the manual in hand — not at 3 a.m. guessing.</p>"
    }
  ],
  quiz: [
    {
      q: "Carbon monoxide is dangerous in a way few gases are because it is:",
      choices: ["Highly flammable at room temperature", "Colorless, odorless, and tasteless — undetectable by human senses at any concentration", "Only produced by furnaces", "Visible as yellow smoke when present"],
      answer: 1,
      explanation: "Correct: (b). Detection must be artificial — alarms and instruments — because no sense warns the victim, and early symptoms impersonate flu. (a) CO can burn at high concentrations, but flammability is not the household hazard; poisoning is. (c) Every carbon fuel burning incompletely produces it — engines, stoves, fireplaces included. (d) CO itself is invisible; yellow smoke would be other combustion products, and waiting to 'see' CO is waiting forever."
    },
    {
      q: "Widely published CO alarm placement guidance requires alarms:",
      choices: ["Only in the furnace room", "On every level of the home including the basement, and outside each separate sleeping area, installed per the manufacturer's instructions", "Only inside each bedroom", "In the garage above the car"],
      answer: 1,
      explanation: "Correct: (b). Level-by-level coverage plus the sleeping-area placement is the NFPA/manufacturer architecture this module teaches. (a) A furnace-room-only alarm may never wake sleepers in time. (c) Inside-bedroom-only placement misses the level coverage for sources elsewhere. (d) Garages are specifically poor placement — vehicle exhaust guarantees nuisance exposure and ruins credibility."
    },
    {
      q: "When a CO alarm sounds at 3 a.m., the correct first actions are:",
      choices: ["Open all windows and hunt for the source with a flashlight", "Get everyone out immediately and call 911/fire from outside; no re-entry until responders clear the home", "Unplug the alarm and see if it resets", "Turn off the furnace and go back to bed if symptoms are mild"],
      answer: 1,
      explanation: "Correct: (b). Out, call, wait for clearance — the sequence this module drills. (a) Source-hunting is responder work with breathing apparatus; window-opening wastes evacuation time. (c) Defeating the warner during the event it exists for is how families are found. (d) Symptoms 'mild' at 3 a.m. measure nothing about blood CO, and the source may still be producing."
    },
    {
      q: "A natural-draft water heater most often spills CO into a modern tight house when:",
      choices: ["The water is too hot", "Competing exhaust appliances depressurize the house beyond what the flue's natural draft can overcome — backdrafting", "The thermostat is set to vacation mode", "The anode rod is depleted"],
      answer: 1,
      explanation: "Correct: (b). Worst-case depressurization reverses marginal flues — the signature is spillage when dryer/hood/bath fans run together, innocence when they don't. (a) Water temperature doesn't change flue buoyancy meaningfully for this failure. (c) Vacation mode lowers firing, not draft balance. (d) The anode protects the tank from corrosion; it has no role in venting."
    },
    {
      q: "A confirmed cracked heat exchanger requires the technician to:",
      choices: ["Clean the burners and monitor it next season", "Shut the appliance down, apply the red tag, make required notifications, document the findings, and communicate the hazard plainly", "Run the furnace only at night when someone is awake", "Seal the crack with high-temperature sealant"],
      answer: 1,
      explanation: "Correct: (b). A breach is a CO pathway into the airstream — an automatic out-of-service finding with a formal process around it. (a) defers a poisoning pathway to next year's schedule. (c) Awake occupants are not a CO control; exposure harms the awake too, and sleep arrives anyway. (d) Heat exchangers are not field-repairable with sealant — the exchanger or the furnace is replaced."
    },
    {
      q: "The customer's CO alarm has never sounded in eight years. The sound conclusion is:",
      choices: ["The appliances are proven clean", "Very little — the alarm warns on sustained exposure per its listing, may itself be past end-of-life, and only instrument testing (analyzer, ambient survey) characterizes the appliances", "The alarm should be removed as unnecessary", "The furnace can skip combustion checks permanently"],
      answer: 1,
      explanation: "Correct: (b). Alarm silence is compatible with intermittent spillage, sub-alarm production, and a dead sensor. Evidence about the appliances comes from measurements. (a) and (d) convert an absence of emergency into a certificate of health — the exact logical error this module exists to kill. (c) Removing the last line of defense because it hasn't been needed is like canceling insurance for not crashing."
    },
    {
      q: "A portable generator during an outage is a top CO killer because:",
      choices: ["Generators produce no CO if new", "Run in or near garages/homes, their exhaust floods living spaces with CO that migrates through walls and doors — with no heating appliance involved", "They are always installed by unlicensed people", "Their CO is a different, safer kind"],
      answer: 1,
      explanation: "Correct: (b). Engine exhaust is rich CO production, and outage improvisation puts the source in the worst places. The rule taught: generators live outdoors, well away from openings, always. (a) Every gasoline engine produces CO, new or old. (c) Installation licensing is irrelevant to the physics of garage placement. (d) CO is CO — hemoglobin cannot tell the difference."
    },
    {
      q: "The red tag's credibility depends on the technician:",
      choices: ["Using it to close the replacement sale", "Applying it on measured evidence, by consistent rules, with notifications and documentation — the same finding tagged the same way everywhere", "Tagging only furnaces older than 15 years", "Letting the customer decide whether it stays on"],
      answer: 1,
      explanation: "Correct: (b). A red tag is a safety act and a legal record; its authority comes from evidence and consistency. (a) corrupts the act into leverage and destroys trust when discovered. (c) Age is not the criterion — a 5-year-old furnace with a breached exchanger is tagged, a sound 20-year-old is not. (d) The shutdown is not the customer's vote to take — least of all with children or tenants bearing the risk."
    }
  ],
  studyGuide: `
<h3>Module 10 — Carbon Monoxide: Quick Reference</h3>
<p><strong>The poison:</strong> CO = incomplete combustion of any carbon fuel. Colorless, odorless, tasteless. Binds hemoglobin (carboxyhemoglobin) — cellular suffocation with normal breathing. Symptoms impersonate flu. Your personal monitor is PPE on every combustion call.</p>
<p><strong>Sources:</strong> cracked exchanger • fouled burners • blocked/disconnected vents • backdrafting water heaters (worst-case depressurization: dryer + hood + bath fans) • gas cooking, unvented heaters • fireplaces • vehicles &amp; generators at the attached garage • snow/nest-blocked terminations.</p>
<p><strong>Alarms:</strong> every level incl. basement + outside each sleeping area • per manufacturer height/location (CO mixes with air — follow the model) • manufacturer distance from appliances • test on schedule, replace at end-of-life. Alarm silence ≠ clean appliances; only analyzer + ambient survey measure that.</p>
<p><strong>Response:</strong> everyone OUT → call 911/fire from OUTSIDE → no re-entry until cleared → medical evaluation for symptoms ("possible CO exposure"). Never source-hunt, never unplug-and-see.</p>
<p><strong>Red tag:</strong> shut down + gas shutoff + tag with specifics → notifications per local code → plain-language hazard talk → measured documentation. Non-negotiable, evidence-based, never a sales lever. A defeated safety and an ignored red tag are the same failure.</p>
`
};
