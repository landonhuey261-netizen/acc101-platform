// HVAC 235 - Module 8: Dual-Fuel & Hybrid Systems
module.exports = {
  number: 8,
  slug: "dual-fuel-hybrid",
  title: "Dual-Fuel & Hybrid Systems",
  estTime: "3–4 hours",
  objectives: [
    "Describe a dual-fuel system's architecture and the three operating modes it moves among.",
    "Explain changeover logic: the outdoor sensor, the balance-point setting, and the lockouts that keep compressor and furnace from fighting.",
    "Explain what a fossil-fuel kit/interface does and how modern communicating controls absorb its job.",
    "Configure defrost behavior in a dual-fuel system so defrost tempering doesn't become simultaneous-operation damage.",
    "Diagnose the classic dual-fuel complaints: changeover at the wrong temperature, both fuels fighting, and furnace-only operation."
  ],
  sections: [
    {
      heading: "Architecture: One Duct System, Two Heat Sources",
      html: `
<p>A <strong>dual-fuel</strong> (hybrid heat) system pairs an electric <strong>heat pump</strong> with a <strong>gas (or oil/propane) furnace</strong> sharing one duct system and one thermostat. The hardware arrangement is a standard split system with one twist: the heat pump's indoor coil sits in the airstream at the furnace, so the same blower and ducts serve both heat sources and the summer air conditioning (the heat pump in cooling mode is the air conditioner).</p>
<p>The system's year divides into three modes:</p>
<ul>
<li><strong>Cooling:</strong> the heat pump runs as a conventional air conditioner; the furnace is just the air handler.</li>
<li><strong>Heat pump heating:</strong> in mild and moderate cold, the compressor moves heat at COP 2.5–4 (Module 7) — the cheapest heat in the house.</li>
<li><strong>Furnace heating:</strong> below the changeover setting, the compressor locks off and the furnace carries the load with combustion heat — strong, hot supply air at a cost per Btu that, in deep cold, beats a fading COP.</li>
</ul>
<div class="callout"><strong>Key idea:</strong> Dual fuel exists because each source has a home turf: the heat pump owns the mild-weather efficiency crown, the furnace owns deep-cold capacity and high-temperature delivery. The control system's whole job is enforcing the border between the turfs — which is Module 7's economic balance point, turned into a setting.</div>
<p>Who benefits most: homes with existing gas service and ductwork in climates with real winters — exactly where an all-electric heat pump leans hardest on resistance strips (COP 1.0 heat, the most expensive kind) below its balance point. The furnace replaces the strips as the below-balance-point partner, at fuel cost instead of resistance cost.</p>`
    },
    {
      heading: "Changeover Logic and the Great Lockout Rule",
      html: `
<p>Changeover is decided by <strong>outdoor temperature</strong>, sensed at the outdoor unit or a remote sensor, compared against the <strong>changeover (balance point) setting</strong> in the thermostat or control. Above the setting: heat pump heats, furnace locked out. Below it: furnace heats, compressor locked out (except defrost tempering — section 4). Better controls add refinements: a differential so the system doesn't chatter between fuels around the setpoint on a hovering day, and in communicating systems, staging logic that can consider runtime and rate of temperature change as well as the raw number.</p>
<div class="callout"><strong>Key idea — the lockout rule:</strong> In heating, the compressor and the furnace must <strong>never run at the same time</strong>. The indoor coil sits in the furnace's hot airstream; if the furnace fires while the heat pump heats, the coil absorbs furnace heat into the refrigerant, pressures soar toward high-pressure cutout, and the compressor cooks in its own discharge heat. Every dual-fuel control — kit or communicating — exists to enforce this interlock absolutely.</div>
<p>Setting the changeover temperature is Module 7's homework cashed in: compute the <em>economic</em> balance point from the customer's fuel prices and the unit's COP table, sanity-check it against the <em>thermal</em> balance point (never promise heat pump operation below where its capacity gives out without the furnace ready), and document both numbers. The classic field failure is a changeover left at a factory default or a folklore value — 40°F is the industry's most expensive habit, idling the heat pump through its best and cheapest hours.</p>
<p>Also configure the reverse decision: when a call starts below changeover on the furnace and the day warms past the setting mid-call, controls typically finish or hand off per their logic — know the chosen control's behavior so you can explain a mid-day fuel switch to a customer who hears the furnace stop and the heat pump start.</p>`
    },
    {
      heading: "Fossil-Fuel Kits and Modern Controls",
      html: `
<p>Dual fuel predates smart thermostats, and its original enabler was the <strong>fossil-fuel kit</strong> (fossil-fuel interface): a control box, wired between a conventional heat pump thermostat, the furnace, and an outdoor temperature sensor. The kit's job description, which every modern control still fulfills:</p>
<ul>
<li>Watch the outdoor temperature against the kit's changeover setting.</li>
<li>Route the heat call to the heat pump above the setting, to the furnace below it.</li>
<li>Enforce the lockout rule — drop the compressor the moment the furnace is called, and vice versa.</li>
<li>Handle defrost tempering: bring the furnace on during heat pump defrost so supply air doesn't blow cold (section 4).</li>
</ul>
<p>Today the same logic usually lives in a <strong>dual-fuel-capable thermostat</strong> (with its outdoor sensor) or a fully <strong>communicating control</strong>. The service skill transfers directly: identify which device owns the changeover decision on this installation, find its setting, and verify its sensor reads true — an outdoor sensor mounted in afternoon sun or against a warm wall shifts the changeover as surely as a mis-set dial, and produces "the furnace runs on mild days" complaints with every component healthy.</p>
<div class="callout"><strong>Key idea:</strong> On a dual-fuel call, before parts: (1) Who owns changeover — kit, thermostat, or communicating board? (2) What is it set to? (3) What does its sensor actually read right now (compare with a thermometer at the sensor)? Three answers resolve most dual-fuel complaints without opening the furnace.</div>
<p>Legacy-kit specifics worth knowing: kits have their own adjustable setpoint (sometimes a simple dial or jumper selection), their sensor is a separate device that fails and drifts like any thermistor, and kit wiring errors can produce the forbidden state — both fuels live — which is why a post-repair full-sequence test across the changeover is non-negotiable on these systems.</p>`
    },
    {
      heading: "Defrost in a Dual-Fuel System",
      html: `
<p>Defrost is the one sanctioned overlap — and it is not really an overlap. When the heat pump defrosts (HVAC 208), it temporarily becomes an air conditioner, chilling the indoor coil; untempered, it would blow cold air into the house for minutes at a time. The dual-fuel answer: during defrost, the control brings the <strong>furnace on as tempering heat</strong> so supply air stays comfortable. This looks like simultaneous operation but is engineered differently from the forbidden state: the refrigeration cycle is in <em>cooling</em> during defrost, so the coil is cold, not absorbing furnace heat into a heating cycle — the furnace is warming air the defrost is chilling, and the control supervises the pairing by design.</p>
<p>Service implications:</p>
<ul>
<li><strong>A furnace that fires briefly during heat pump operation on a frosty morning is often defrost tempering — normal.</strong> Confirm by correlating with the defrost cycle before diagnosing "changeover failure."</li>
<li><strong>No tempering when there should be</strong> (cold blow during defrost, comfort complaint): check the control's defrost/aux configuration and the W-signal path from the outdoor unit's defrost board to the furnace control chain.</li>
<li><strong>Tempering that never ends</strong> or a furnace running steadily beside a heating heat pump is NOT defrost — that's the lockout failure of section 2, and it is a find-it-now fault: high-pressure stress is accumulating at the compressor.</li>
</ul>
<div class="callout"><strong>Key idea:</strong> Learn the defrost signature — brief, frost-band weather, correlated with the outdoor unit's defrost cycle and a puff of vapor at the coil — so you can leave normal systems alone and instantly spot the genuinely forbidden overlap when it appears.</div>`
    },
    {
      heading: "Dual-Fuel Complaints: A Field Guide",
      html: `
<p>The complaint catalog, with the cause the evidence usually convicts:</p>
<ul>
<li><strong>"The heat pump never runs — it's always the furnace."</strong> Changeover set too high, a failed/sun-baked outdoor sensor reading cold (or the control defaulting to furnace on sensor fault), or changeover ownership confusion — a kit set low fighting a thermostat set high. Verify sensor truth and the setting first.</li>
<li><strong>"Gas bills didn't drop after the expensive install."</strong> The mirror image: changeover so low (or heat pump so undersized for the load) that the furnace does the season's heavy lifting anyway, or an economic balance point that genuinely favors gas at this customer's prices — compute it honestly before blaming hardware.</li>
<li><strong>"Both ran at once / the outdoor unit trips on high pressure in heating."</strong> Lockout failure: kit miswiring, a failed relay, or a control configured as all-electric aux instead of dual fuel. Treat as urgent — compressor life is being spent.</li>
<li><strong>"Cold air blows sometimes on cold mornings."</strong> Defrost without tempering (section 4) or long heat-pump runtimes near balance point with gentle supply air — distinguish a defect from a perception by checking the defrost configuration and the actual changeover math.</li>
<li><strong>"It switches back and forth on mild afternoons."</strong> Changeover chattering: no differential around the setpoint, or a sensor in a thermally unstable spot (sun/wind flicker). Add the control's differential if offered; relocate/shield the sensor if it's lying.</li>
</ul>
<div class="callout"><strong>Key idea:</strong> Dual fuel concentrates Module 7's arithmetic into one setting and one interlock. Master those two — the economic balance point as the setting, the never-together rule as the interlock — and every complaint above resolves into a sensor, a setting, or a wiring verification rather than a mystery.</div>`
    }
  ],
  keyTerms: [
    { term: "Dual-fuel (hybrid heat) system", def: "A heat pump paired with a combustion furnace on shared ducts and controls; each heat source works the weather where it is cheapest and strongest." },
    { term: "Changeover", def: "The control's switch of heating duty between heat pump and furnace, decided by outdoor temperature against the changeover setting." },
    { term: "Changeover setting", def: "The programmed outdoor temperature at which heating duty passes between fuels; properly set at the economic balance point from Module 7." },
    { term: "Lockout (dual fuel)", def: "The enforced rule that compressor and furnace never heat simultaneously — furnace heat into a heating-mode indoor coil would drive refrigerant pressures to cutout." },
    { term: "Fossil-fuel kit", def: "The legacy interface control that owns changeover on conventional systems: watches the outdoor sensor, routes the heat call, enforces lockouts, and manages defrost tempering." },
    { term: "Communicating control", def: "A digital control system exchanging operating data among thermostat, furnace, and heat pump; absorbs fossil-fuel-kit logic into software settings." },
    { term: "Outdoor temperature sensor", def: "The thermistor whose reading decides changeover; placement (sun, warm walls) and accuracy shift real changeover behavior as surely as the setting itself." },
    { term: "Defrost tempering", def: "Firing the furnace during heat pump defrost so the defrost's cold indoor-coil air is warmed before delivery — the engineered exception that is not simultaneous heating operation." },
    { term: "High-pressure cutout", def: "The safety switch that stops the compressor on excessive discharge pressure; the destination of a heat pump whose coil absorbs furnace heat in heating mode." },
    { term: "Changeover differential", def: "A temperature band around the changeover setting preventing rapid fuel-to-fuel chattering when outdoor temperature hovers at the setpoint." },
    { term: "Auxiliary heat (dual-fuel context)", def: "The furnace's role in the system: below-changeover primary heat, not a supplement running beside the compressor." },
    { term: "Emergency heat (dual fuel)", def: "Manual furnace-only operation when the heat pump is down; on dual-fuel stats this is simply the furnace carrying the house." },
    { term: "Interlock", def: "A control arrangement in which one device's operation physically or logically prevents another's; the dual-fuel lockout is an interlock between the compressor and furnace heat calls." },
    { term: "Sensor drift", def: "The gradual loss of accuracy in a temperature sensor with age and exposure; a drifted outdoor sensor shifts the real changeover point away from the programmed setting." },
    { term: "Fossil fuel", def: "In control terminology, any burned fuel — natural gas, propane, or oil — as opposed to electric heat; the origin of 'fossil-fuel kit' and 'fossil-fuel lockout' language in dual-fuel controls." },
    { term: "Compressor lockout", def: "A control state (weather-based or fault-based) in which the heat pump's compressor is prevented from running; below-changeover lockout is normal, fault lockout after repeated errors is a diagnostic finding." }
  ],
  video: {
    title: "Dual Fuel System Installation in McLean, VA | Carrier Crossover Heat Pump & Gas Furnace",
    embedUrl: "https://www.youtube.com/embed/IJG5Z-urJDs",
    note: "A real dual-fuel installation: a heat pump paired with a 92% gas furnace and dual-fuel coil in one duct system. Short as it is, it shows the physical architecture of this module — one blower and duct system serving two heat sources — which is the hardware the changeover control spends its life arbitrating between.",
    more: [
      { title: "HVAC Heat Pump Basics", url: "https://www.youtube.com/watch?v=vQohvbck0pw" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> Explain to a customer, in plain language, why their new dual-fuel system runs the heat pump on a 40°F day but the furnace on a 15°F day — and why that pattern saves money instead of wasting it.</p>",
      solution: "<p><strong>Answer (model response):</strong> Step 1: 'Your heat pump doesn't burn anything — it moves heat from outdoors inside, and on a mild day it delivers several units of heat for every unit of electricity it uses. That's the cheapest heat in the house, so it does the work whenever the weather lets it.' Step 2: 'As it gets colder, the heat pump can move less heat and works harder per unit, while your furnace's cost per unit of heat stays the same. Past a certain temperature — we calculated yours from your gas and electric prices — the furnace is genuinely cheaper, so the system switches.' Step 3: 'You're always running whichever source costs less that day. The switch point is a setting we computed for your house and your rates, and we can revisit it if prices change.'</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> You find a heat pump running in heating mode while its furnace is also firing steadily, and the compressor has tripped on high pressure twice this week. (a) Why does simultaneous operation drive pressure up? (b) Name three control-side causes to investigate. (c) What is your immediate action?</p>",
      solution: "<p><strong>Answer:</strong> (a) The indoor coil sits in the furnace's airstream. In heating mode the coil is the condenser, already hot with refrigerant; furnace heat pouring over it adds energy the refrigerant must reject, discharge pressure climbs to the cutout, and the compressor runs in thermal distress. (b) Causes: a fossil-fuel kit miswired or with a welded relay; a thermostat configured for electric auxiliary heat (which expects simultaneous operation with strips) instead of dual-fuel lockout logic; a changeover setting/sensor fault making both controls believe they own the heat call. (c) Immediate: shut the system down in a safe state (furnace-only via emergency heat if heat is needed), then correct the control fault and prove the interlock across a forced changeover before returning to automatic operation — and log the high-pressure history for the customer, since compressor life may already have been spent.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A dual-fuel home's furnace does 90% of the season's heating even in mild weather. The changeover setting reads 30°F and the outdoor sensor agrees with a thermometer beside it. Give two remaining explanations and how you'd test each.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Explanation A — <em>two devices own changeover and disagree:</em> e.g., a legacy fossil-fuel kit set at 50°F is actually routing calls while the thermostat's 30°F setting is decorative. Test: identify every device in the call chain (kit present?), read the kit's own setpoint, and observe which device drops the compressor as temperature is simulated/changed. Step 2: Explanation B — <em>the heat pump is being vetoed by a fault:</em> the control has locked the compressor out after repeated faults (pressure, defrost board errors) and silently defaults to the furnace. Test: pull the control's fault history and run the heat pump in a forced heating call above changeover to see if it runs cleanly. Step 3: In both branches the sensor and setting the customer can see were innocent — the lesson is to audit ownership and fault history, not just the thermostat screen.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> During a frosty-morning service visit, you observe the furnace fire for about two minutes while the heat pump runs, then shut off as the outdoor coil steams. The customer asks if 'both running together' means the system is broken, per the lockout rule you taught them. Answer them, and state what observation would have made it a real fault.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Reassure with the mechanism: what they saw is <strong>defrost tempering</strong>. The heat pump briefly reversed into cooling to melt frost off the outdoor coil (the steam is the frost leaving); during those minutes the indoor coil blows cold, so the control fires the furnace to keep supply air warm. The refrigeration cycle is in cooling, not heating, during defrost — the coil is cold, so the forbidden heat-absorption scenario isn't occurring. Step 2: The real fault would look like: furnace firing steadily for long stretches <em>while the heat pump is in heating mode</em> (no defrost in progress, no steam cycle), especially with high-pressure trips — simultaneous heating operation, the lockout failure. Step 3: Distinction to leave with them: brief, frosty-morning, steam-correlated = normal; long overlaps on ordinary calls = call us.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A system chatters between fuels on afternoons when the temperature hovers near the 35°F changeover. List the two most likely causes and the fix for each.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Cause one — <strong>no changeover differential</strong>: with a single razor-edge setpoint, normal temperature wobble crosses it repeatedly. Fix: enable/set the control's changeover differential (deadband) per its instructions so small excursions don't flip the fuel. Step 2: Cause two — <strong>an unstable sensor environment</strong>: the outdoor sensor sits where sun breaks and shadows flick it through the setpoint, or wind gusts chill it erratically. Fix: verify the sensor's reading against a shaded reference thermometer, relocate or shield it to a stable, representative outdoor spot (typically near the outdoor unit, out of direct sun and away from warm walls/dryer vents), then re-verify changeover behavior. Step 3: Confirm with an observation period or the control's runtime log that the chattering is gone.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> Using Module 7: a heat pump's thermal balance point in this house is 27°F, and the computed economic balance point at current prices is 34°F. A tech proposes setting changeover at 27°F 'to use the heat pump as much as physically possible.' Explain the flaw and the correct setting logic.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Between 34°F and 27°F the heat pump <em>can</em> carry the house — but at a COP whose heat costs more than the furnace's gas heat. Running it there isn't thrift; it's paying a premium for electricity because the machine is physically able. Step 2: The changeover setting belongs at the <strong>economic</strong> balance point (34°F here), because the control's job is cost-optimal heat, and capacity below 34°F is irrelevant once gas is the cheaper source. Step 3: The thermal point still matters as a floor check: never set changeover <em>below</em> the thermal balance point intending heat-pump-only operation below it — and note if prices change, the economic point must be recomputed; the physical point moves only with the house or the machine.</p>"
    }
  ],
  quiz: [
    {
      q: "In a dual-fuel system heating on a mild day, the correct operating state is:",
      choices: ["Furnace and heat pump together for fastest recovery", "Heat pump alone, furnace locked out", "Furnace alone — gas is always preferred", "Resistance strips assisting the furnace"],
      answer: 1,
      explanation: "Correct: (b). Above changeover, the heat pump is the cheapest heat source and works alone; the furnace is interlocked off. (a) Simultaneous heating operation is the forbidden state — it drives refrigerant pressure toward cutout. (c) Gas in mild weather wastes the heat pump's high-COP hours. (d) Dual-fuel systems use the furnace as the backup source, not resistance strips."
    },
    {
      q: "The lockout rule exists because when a furnace fires under a heat pump's indoor coil in heating mode:",
      choices: ["The thermostat overheats", "The coil absorbs furnace heat into the refrigerant, sending discharge pressure toward high-pressure cutout and stressing the compressor", "The flue gases condense in the coil", "The blower draws too many amps"],
      answer: 1,
      explanation: "Correct: (b). The indoor coil in heating is the condenser; pouring furnace heat into it adds energy the refrigerant cannot reject, pressures spike, and compressor damage follows. (a) Thermostat temperature is a comfort issue, not the lockout's reason. (c) Flue gas never contacts the refrigerant coil — the danger is heat transfer, not condensation chemistry. (d) Blower load is unchanged by which heat source is firing."
    },
    {
      q: "A fossil-fuel kit's core functions are:",
      choices: ["Boosting gas pressure and venting", "Watching outdoor temperature, routing the heat call to the correct source, enforcing the lockout, and managing defrost tempering", "Filtering and humidifying the air", "Replacing the furnace's control board"],
      answer: 1,
      explanation: "Correct: (b). Those four jobs define the kit — and are now usually performed by a dual-fuel thermostat or communicating control, but the functions themselves are unchanged. (a) Gas pressure and venting belong to the furnace and its installation. (c) Filtration/humidification are IAQ accessories (Module 9). (d) The kit supervises between devices; the furnace board still runs the furnace's own sequence."
    },
    {
      q: "A furnace firing briefly while the heat pump runs on a frosty morning, ending with steam at the outdoor coil, is:",
      choices: ["A lockout failure requiring shutdown", "Defrost tempering — engineered behavior while the heat pump is in defrost (cooling direction)", "Proof the changeover is set too low", "A sign the outdoor sensor has failed"],
      answer: 1,
      explanation: "Correct: (b). During defrost the cycle is reversed, so the furnace warms air the defrost chills; the steam at the coil is melting frost — the signature confirms it. (a) The forbidden state is overlap during heating mode, sustained, without a defrost in progress. (c) Changeover governs seasonal duty, not minute-long defrost events. (d) The sensor does not command defrost tempering; the defrost sequence does."
    },
    {
      q: "The changeover temperature should be set at:",
      choices: ["40°F for every installation", "The economic balance point computed from the unit's COP table and the customer's fuel prices", "The coldest temperature ever recorded locally", "Whatever the factory default is"],
      answer: 1,
      explanation: "Correct: (b). Changeover is an economic decision with a computable answer; the thermal balance point is checked as a floor, not used as the setting. (a) The folklore 40°F idles heat pumps through their cheapest hours in many homes. (c) Record cold is a design-temperature input, not a price calculation. (d) Defaults are placeholders for shipping, not commissioning."
    },
    {
      q: "'The furnace runs even on mild days' with a correctly set changeover most often means:",
      choices: ["The furnace is oversized", "The outdoor sensor is reading falsely cold (failed, or mounted against a cold/drafty spot) — or its reading is otherwise lying to the control", "The heat pump is out of refrigerant", "The thermostat is in cooling mode"],
      answer: 1,
      explanation: "Correct: (b). The control obeys the sensor it has; a sensor reporting 25°F on a 45°F day keeps the system on the furnace with every major component healthy. Verify sensor reading against a real thermometer at the sensor. (a) Furnace size doesn't decide which source the control calls. (c) A charge problem would fault or underperform the heat pump when it does run — a different evidence trail. (d) Cooling mode would not produce furnace heat calls at all."
    },
    {
      q: "Which observation distinguishes a true lockout failure from normal defrost tempering?",
      choices: ["The furnace runs for more than 30 seconds", "Sustained furnace operation while the heat pump is in heating mode (not defrosting), especially with high-pressure trips", "Steam at the outdoor coil", "The indoor blower running during the event"],
      answer: 1,
      explanation: "Correct: (b). Duration in heating mode plus pressure distress is the failure signature. (a) Defrost tempering itself lasts minutes — brief-ness is measured against the defrost cycle, not a stopwatch threshold. (c) Steam indicates defrost — evidence FOR the normal explanation. (d) The blower runs in both cases; it discriminates nothing."
    },
    {
      q: "Homeowners most often end up with furnace-dominant dual-fuel systems wasting money because:",
      choices: ["Gas furnaces are inherently cheaper in all weather", "The changeover was left at a high default/folklore setting, idling the heat pump through its most efficient hours", "Heat pumps cannot heat below 50°F", "The outdoor unit is too quiet"],
      answer: 1,
      explanation: "Correct: (b). The equipment was capable; the setting never got commissioned — a configuration waste, fixed by computing the economic balance point and setting it. (a) Gas wins only below the economic balance point; above it, COP 3 heat beats combustion cost. (c) Modern heat pumps heat effectively far below 50°F — Module 7's entire capacity discussion. (d) Noise has no bearing on fuel selection."
    }
  ],
  studyGuide: `
<h3>Module 8 — Dual-Fuel & Hybrid Systems: Quick Reference</h3>
<p><strong>Architecture:</strong> heat pump + furnace, one duct system, indoor coil at the furnace. Modes: cooling (HP) • mild heat (HP alone) • deep cold (furnace alone). The furnace replaces resistance strips as the below-balance-point partner.</p>
<p><strong>The lockout rule:</strong> compressor and furnace NEVER heat simultaneously — furnace heat into a heating-mode coil = discharge pressure to cutout, compressor damage. Every control (fossil-fuel kit, dual-fuel stat, communicating) exists to enforce this + route calls by outdoor temperature.</p>
<p><strong>Changeover setting</strong> = Module 7's <em>economic</em> balance point (prices + COP table), floored by the thermal point. 40°F folklore and factory defaults are the industry's most expensive unexamined settings. Add a differential to stop chattering.</p>
<p><strong>Defrost tempering is NOT a lockout violation:</strong> during defrost the cycle is reversed (cooling), furnace warms the chilled supply air briefly; steam at the outdoor coil confirms it. Violation = sustained overlap in heating mode + high-pressure trips.</p>
<p><strong>First three checks on any dual-fuel complaint:</strong> who owns changeover? what's it set to? what does the sensor actually read (vs. a thermometer at the sensor)? Then fault history — controls veto faulted heat pumps silently.</p>
`
};
