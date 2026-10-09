// HVAC 235 - Module 2: Modulating & Variable-Speed Heating
module.exports = {
  number: 2,
  slug: "modulating-variable-speed",
  title: "Modulating & Variable-Speed Heating",
  estTime: "3–4 hours",
  objectives: [
    "Distinguish single-stage, two-stage, and fully modulating gas heat by how their firing rate is controlled.",
    "Explain how a modulating gas valve and an ECM blower work together to match heat output to the load.",
    "Compare constant-torque and constant-airflow ECM motors and describe what each one compensates for.",
    "Use the temperature-rise formula to verify airflow on a staged furnace at low and high fire.",
    "Describe the comfort and efficiency gains of long, low-fire run cycles — and the duct/static conditions that can erase them.",
    "Identify setup and service errors unique to staged and modulating equipment."
  ],
  sections: [
    {
      heading: "Three Ways to Fire a Furnace",
      html: `
<p>A <strong>single-stage</strong> furnace has one firing rate: full input or off. The house load, however, equals full output only on the coldest night of the year; every other hour the furnace is oversized, so it satisfies the thermostat quickly, shuts off, and lets the house coast down — the on/off sawtooth of temperature swings, short cycles, and start-stop wear.</p>
<p>A <strong>two-stage</strong> furnace adds a low fire — typically around two-thirds of full input (the exact split is set by the manufacturer) — where it runs most hours of the season. A <strong>modulating</strong> furnace replaces steps with a ramp: its gas valve adjusts firing rate in small increments across a wide range, so heat output tracks the load almost continuously. Pair either with a <strong>variable-speed ECM blower</strong> and the airstream ramps with the flame instead of blasting on and off.</p>
<div class="callout"><strong>Key idea:</strong> Staging is about matching. The closer the furnace's output follows the house's actual heat loss minute by minute, the steadier the temperature, the longer and quieter the cycles, and the more time a condensing furnace spends in its most efficient operating range.</div>
<p>Control makes the match. Basic two-stage units use a timer: start on low, shift to high if the call runs long. Better systems let the <strong>thermostat</strong> (two-stage or communicating) decide the stage from how far and how fast the room temperature is moving. A communicating thermostat and furnace exchange actual operating data — firing rate, blower speed, fault history — instead of simple on/off signals, and many modulating furnaces <em>require</em> their matched communicating control to modulate at all; on a conventional thermostat they may fall back to timer-based staging. Read the manual before promising a customer modulation.</p>`
    },
    {
      heading: "The Modulating Gas Valve and Staged Inducers",
      html: `
<p>A conventional gas valve is a switch: open at a fixed manifold pressure or closed. A <strong>modulating gas valve</strong> is a throttle. The control board drives it to hold a manifold pressure that varies with the commanded firing rate, so input slides up and down the range instead of snapping between stops. Because safe combustion needs air matched to fuel, the <strong>inducer is staged or variable-speed too</strong>: draft, pressure-switch settings, and vent proving must all remain valid at the lowest firing rate, not just at full fire. Many modulating furnaces use more than one pressure switch (or a switch with multiple setpoints) — one proving low-fire draft, another high-fire.</p>
<p>What this means on a service call:</p>
<ul>
<li><strong>Manifold pressure is a moving target.</strong> Checking it against the single value in a basic furnace manual misdiagnoses a healthy modulating valve. The manufacturer's service literature gives pressure-vs-firing-rate data or a test mode that locks the furnace at a known rate — use it.</li>
<li><strong>Setup happens in test mode.</strong> Commissioning a modulating furnace means driving it to low and high fire deliberately and verifying combustion and temperature rise at both ends (Module 4's methods), not just watching it light.</li>
<li><strong>Low fire is the proving ground.</strong> Marginal venting or a weak inducer may pass at high fire's strong draft and fail at low fire — the reverse of single-stage intuition.</li>
</ul>
<div class="callout"><strong>Key idea:</strong> On staged equipment, every verification — draft, manifold pressure, temperature rise, combustion — is a <em>per-stage</em> verification. "It runs" is not a finding; "it runs correctly at low fire and at high fire" is.</div>`
    },
    {
      heading: "ECM Blowers: Constant Torque vs. Constant Airflow",
      html: `
<p>The <strong>ECM</strong> (electronically commutated motor) is a brushless DC motor with its electronics built in: the module rectifies incoming AC, drives the motor windings in sequence, and — crucially — <em>knows</em> how hard the motor is working from the power it draws. That self-knowledge creates the two personalities you will meet:</p>
<ul>
<li><strong>Constant-torque ECM</strong> (the X13-style motor): behaves like a smarter PSC. It holds its programmed torque at each tap; if duct resistance rises (dirt loading the filter), airflow falls off much as it would with a conventional motor, though efficiency stays better. Speed taps select torque settings.</li>
<li><strong>Constant-airflow (variable-speed) ECM:</strong> programmed with a target CFM. It senses rising resistance and speeds up to hold airflow steady, masking a clogging filter or tight ductwork — up to its limit — while drawing more watts to do it. It also ramps gently up and down, softening start/stop noise and air blasts.</li>
</ul>
<p>The efficiency claim is real but conditional: at full speed an ECM's advantage over a PSC motor is modest; at the low, long run speeds of staged heating and continuous-circulation modes, the ECM sips power where a PSC still gulps. The service cautions are equally real: ECM modules fail from power surges and moisture, the motor and module are programmed as a matched pair for a specific unit (a "universal" replacement must be programmed correctly), and a constant-airflow motor working against bad ducts can be loud, power-hungry, and short-lived — the motor is compensating for a duct problem it cannot fix.</p>
<div class="formula">Temperature rise ΔT (°F) = Output (Btu/h) ÷ (1.08 × CFM)</div>
<p><strong>Worked example.</strong> A furnace delivering 76,000 Btu/h on high fire moves 1,200 CFM: ΔT = 76,000 ÷ (1.08 × 1,200) = 76,000 ÷ 1,296 ≈ <strong>59°F rise</strong> — compare against the rating plate's allowable rise range. On low fire at roughly two-thirds input (≈ 50,700 Btu/h delivered) with the blower staged down to about 850 CFM: ΔT = 50,700 ÷ (1.08 × 850) = 50,700 ÷ 918 ≈ <strong>55°F</strong> — in family with the high-fire value, which is exactly what matched staging is supposed to achieve.</p>`
    },
    {
      heading: "Comfort and Efficiency: What the Customer Actually Feels",
      html: `
<p>Customers do not buy firing-rate curves; they feel rooms. Staged and modulating heat improves the felt experience in specific, explainable ways:</p>
<ul>
<li><strong>Smaller temperature swings.</strong> Long low-fire cycles keep supply air flowing gently instead of alternating hot blasts with cold coasts, so room temperature hugs the setpoint instead of orbiting it.</li>
<li><strong>Evenness room to room.</strong> Longer run times give the duct system time to deliver air to the far, lossy rooms that short cycles never quite satisfy.</li>
<li><strong>Better filtration and mixing.</strong> More hours of air movement means more passes through the filter (Module 9) and less stratification — warm air pooled at the ceiling of a two-story foyer is heat the thermostat never sees.</li>
<li><strong>Quiet.</strong> A blower ramping to 60% instead of slamming to 100% is the difference between background hush and a conversation-stopper — but only if the ducts can carry the air quietly (next section).</li>
</ul>
<p>The efficiency story is honest but narrower than the sales brochure. The AFUE rating itself changes little between a single-stage and modulating version of the same platform. The real gains are seasonal and secondary: fewer purge and warm-up losses from short cycling, more time in condensing range on high-efficiency models, and sharply lower blower electricity from the ECM at part speed. Overselling "modulating = huge gas savings" sets up the complaint call; selling steady comfort, quiet, and even rooms sets up a referral.</p>
<div class="callout"><strong>Key idea:</strong> A modulating furnace on a bad thermostat setup, wrong staging configuration, or undersized ducts performs like an expensive single-stage furnace. The technology's benefits are <em>commissioned</em>, not automatic — setup is part of the product.</div>`
    },
    {
      heading: "When Staging Goes Wrong: Setup and Service Pitfalls",
      html: `
<p>Field failures cluster around configuration, not hardware:</p>
<ul>
<li><strong>Staging left on factory timer defaults.</strong> A two-stage furnace whose thermostat is wired and configured as single-stage may never see high fire on a timer that's too short — or live on high fire because the timer is too long. Verify which device owns the staging decision and set it deliberately.</li>
<li><strong>Heat anticipator / cycle-rate and communicating setup skipped.</strong> Communicating systems need their equipment profiles confirmed at start-up; a mismatched profile can command firing rates the furnace cannot deliver.</li>
<li><strong>Static pressure ignored.</strong> A constant-airflow ECM will hold CFM against tight ducts by ramping up — into noise, high watt draw, and early module failure. Measure total external static pressure; if it is over the rating, the fix is duct/filter relief, not a new motor.</li>
<li><strong>Low-fire temperature rise never checked.</strong> A furnace can pass rise on high fire and run cool on low if blower staging is misconfigured — cool supply air feels like "no heat" to occupants even while the furnace is technically heating.</li>
<li><strong>Replacement ECM programmed wrong.</strong> The module carries the unit-specific program. A motor that "fits" but runs the wrong profile delivers wrong airflow in every mode; verify airflow by temperature rise after any ECM replacement.</li>
</ul>
<div class="callout"><strong>Key idea:</strong> Diagnose staged equipment with staged data: firing rate commanded, stage timing, per-stage manifold pressure and rise, and total external static. The fault codes on these units often include stage-specific information — read the manufacturer's chart instead of treating every code as a parts cannon target.</div>`
    }
  ],
  keyTerms: [
    { term: "Single-stage furnace", def: "A furnace with one firing rate — full input or off — regardless of how small the current heating load is." },
    { term: "Two-stage furnace", def: "A furnace with two firing rates (low fire typically around two-thirds of high fire), running most hours on low and shifting to high on the coldest days or long calls." },
    { term: "Modulating furnace", def: "A furnace whose gas valve varies firing rate in small increments across a wide range, tracking the heating load almost continuously." },
    { term: "Modulating gas valve", def: "A gas valve driven by the control board to hold varying manifold pressures, throttling fuel input to match the commanded firing rate." },
    { term: "ECM", def: "Electronically commutated motor: a brushless DC blower motor with built-in electronics that sense load and precisely control speed and torque." },
    { term: "Constant-torque ECM", def: "An ECM programmed to hold selected torque values at its taps; airflow varies with duct resistance, similar in behavior to a PSC motor but more efficient." },
    { term: "Constant-airflow ECM", def: "An ECM programmed to a target CFM that speeds up or slows down to hold airflow steady as duct resistance changes, within its limits." },
    { term: "Communicating thermostat", def: "A control that exchanges digital operating data with the equipment (firing rate, airflow, faults) rather than sending simple on/off signals; required for full modulation on many models." },
    { term: "Staging timer", def: "A board-based fallback that shifts a two-stage furnace from low to high fire after a set run time when the thermostat does not control staging." },
    { term: "Temperature rise", def: "The difference between supply-air and return-air temperatures across a running furnace; verified against the rating-plate range to prove correct airflow for the firing rate." },
    { term: "Total external static pressure (TESP)", def: "The resistance the blower works against from everything external to the furnace — ducts, filter, coil, registers — measured in inches of water column and compared to the blower's rating." },
    { term: "Low fire", def: "The reduced firing rate of a staged furnace, where it performs most of its seasonal running; draft, combustion, and rise must all be verified at low fire separately." },
    { term: "Short cycling", def: "Frequent burner starts and stops caused by output greatly exceeding load; wastes fuel in purge/warm-up losses and wears components." },
    { term: "Ramp profile", def: "The programmed gentle acceleration and deceleration of an ECM blower, reducing start/stop noise and air blasts." },
    { term: "Firing rate", def: "The current fuel input of a burner, in Btu/h or as a percentage of full input; on a modulating furnace it varies continuously with load." },
    { term: "ECM module", def: "The electronic control head on an ECM motor, programmed for a specific unit's airflow profile; motor and module are serviced as a matched, programmed pair." }
  ],
  video: {
    title: "HVAC: How To Reverse Direction For a ECM MOTOR (Reverse Rotation/Polarity For X13 ECM MOTOR)",
    embedUrl: "https://www.youtube.com/embed/lkSMkIOA9Eo",
    note: "Despite the service-specific title, this video walks through what an ECM actually is — the microprocessor control, how it ramps speed to regulate airflow, and why it uses less energy than a conventional motor — using an X13 constant-torque motor as the example. Watch it for the ECM internals and control behavior this module describes, then note how the motor's programmed behavior differs from a simple PSC.",
    more: [
      { title: "Gas Furnace Class w/ Bert", url: "https://www.youtube.com/watch?v=lvZ5iN1xh7Q" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A two-stage furnace is rated 100,000 Btu/h input on high fire, and its low fire is two-thirds of high fire. The unit is 96% AFUE. Compute (a) low-fire input, (b) delivered output on low fire, (c) delivered output on high fire.</p>",
      solution: "<p><strong>Solution:</strong> (a) Low-fire input = 100,000 × 2/3 ≈ <strong>66,700 Btu/h</strong>. (b) Low-fire output = 66,700 × 0.96 ≈ <strong>64,000 Btu/h</strong>. (c) High-fire output = 100,000 × 0.96 = <strong>96,000 Btu/h</strong>. Step through the meaning: on a mild day needing 40,000 Btu/h, even low fire exceeds the load, so the furnace still cycles — but with longer, gentler cycles than a single-stage unit delivering 96,000 Btu/h in blasts.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> Using the temperature-rise formula, a furnace on high fire delivers 96,000 Btu/h with a measured rise of 80°F. (a) Compute the airflow in CFM. (b) The rating plate allows a maximum rise of 70°F. Is the airflow adequate? (c) Name two field causes of this condition.</p>",
      solution: "<p><strong>Solution:</strong> (a) Rearrange ΔT = Output ÷ (1.08 × CFM) → CFM = Output ÷ (1.08 × ΔT) = 96,000 ÷ (1.08 × 80) = 96,000 ÷ 86.4 ≈ <strong>1,111 CFM</strong>. (b) No — an 80°F rise exceeds the 70°F maximum, meaning airflow is too low for the firing rate; the furnace is at risk of limit trips (Module 4). To hit 70°F it would need 96,000 ÷ (1.08 × 70) ≈ 1,270 CFM. (c) Typical causes: a heavily loaded or overly restrictive filter, and undersized or partly closed ductwork/registers raising static pressure — on a constant-airflow ECM, also check whether the motor has hit its compensation limit.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A homeowner with a new two-stage furnace complains it is 'just as blast-and-coast as the old one.' The thermostat is a basic single-stage model and the furnace staging timer is set to its shortest setting. Explain what is happening and the two configuration options that fix it.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The single-stage thermostat can only send one heat call, so the board's timer owns staging — and the shortest timer setting throws the furnace to high fire almost immediately on every call, erasing low-fire's long gentle cycles. Step 2: Option A — replace the thermostat with a two-stage (or communicating) model, wire W2, and configure control so the thermostat stages based on demand. Step 3: Option B — keep the thermostat but set the board's staging timer to a longer, deliberate delay per the manufacturer, so ordinary calls complete on low fire. Step 4: Verify by observing a full call: the furnace should start and mostly run on low fire on a mild day.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> Explain why a constant-airflow ECM can hide a duct problem for a year and then 'suddenly' become noisy and fail, while a constant-torque ECM in the same house would have shown symptoms immediately.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The constant-airflow motor senses rising resistance (loading filter, closed registers, tight ducts) and speeds up to hold its programmed CFM — airflow and comfort stay normal, so nobody investigates. Step 2: The compensation is not free: the motor draws more watts, runs hotter and faster, and wears its module — until it reaches its limit or the module fails, at which point the 'sudden' failure is really the end of a long compensation. Step 3: The constant-torque motor cannot compensate: airflow drops as resistance rises, temperature rise climbs, and limit trips or comfort complaints appear early — the symptom shows up while the cause is still cheap. Step 4: Lesson: on constant-airflow systems, measure static pressure and temperature rise at maintenance; do not wait for symptoms.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A modulating furnace shows a low-fire draft proving fault on still, mild mornings but runs perfectly on high fire during cold snaps. Give the most likely physical explanation and your first two checks.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: At low fire the variable-speed inducer runs slowly and produces its weakest draft — marginal vent restrictions that high fire's stronger draft can overcome will fail proving at low fire. The fault appearing specifically at low fire is the fingerprint of a marginal draft path, not a dead switch. Step 2: Check one: the vent and intake terminations and piping for partial restriction (frost, debris, insect nests, a sag holding condensate). Step 3: Check two: the condensate trap and drain — water standing in the trap or a sagging vent raises the pressure drop the small low-fire draft must beat. Step 4: Confirm with a manometer at low fire: measured draft vs. the low-fire switch's rating printed on the switch (the full method is this course's lab).</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> Write the short, honest explanation you would give a customer for why the modulating furnace you quoted costs more than the single-stage model — without promising gas savings the equipment cannot guarantee.</p>",
      solution: "<p><strong>Answer (model response):</strong> Step 1: Lead with what is certain: 'This furnace adjusts its heat to what your house actually needs each hour instead of running full-blast or nothing, so rooms stay closer to the temperature you set, the far bedrooms get longer, gentler air delivery, and it runs noticeably quieter.' Step 2: State the efficiency truth: 'Its efficiency rating is similar to the single-stage condensing model. You'll likely save some fuel by avoiding constant start-stop cycling, and the variable-speed blower uses much less electricity at low speeds — but I won't promise a specific gas-bill number, because your bills depend on weather and the house.' Step 3: Close with the condition: 'Those benefits depend on correct setup and on your ducts being able to carry the air — which is why our quote includes commissioning checks at both firing rates.'</p>"
    }
  ],
  quiz: [
    {
      q: "A two-stage furnace spends most of the heating season on low fire because:",
      choices: ["Low fire is more efficient per Btu on the rating plate", "Most hours of the season, the house's heat loss is well below the furnace's full output", "High fire is reserved for defrost cycles", "The gas company limits full input except in emergencies"],
      answer: 1,
      explanation: "Correct: (b). A furnace is sized for the coldest design night; in all milder weather the load is a fraction of full output, so low fire matches the load with longer, steadier cycles. (a) The AFUE rating applies to the unit, not a per-stage promise — low fire's benefit is load matching, not a different rating. (c) Furnaces have no defrost cycle; that is a heat pump function. (d) No such utility limit exists in normal residential service."
    },
    {
      q: "On a modulating furnace, manifold pressure measured during a random call for heat reads below the value in a basic single-value chart. The correct interpretation is:",
      choices: ["The gas valve is failing and must be replaced", "The furnace is underfired and the pressure must be raised to the chart value", "Modulating valves vary manifold pressure with firing rate — verify in the manufacturer's test mode at a known firing rate", "The gas supply is undersized"],
      answer: 2,
      explanation: "Correct: (c). A modulating valve throttles pressure continuously; a mid-range reading during a part-load call is normal operation. Diagnosis requires the manufacturer's test mode and pressure-vs-rate data. (a) and (b) treat a design behavior as a failure — adjusting a modulating valve to a single-stage value would overfire it at low rates. (d) Supply sizing is checked under load at the inlet tap, a different measurement."
    },
    {
      q: "A constant-airflow ECM blower, faced with a clogging filter, will:",
      choices: ["Let airflow fall exactly like a PSC motor", "Speed up to hold its programmed CFM, drawing more power to do so", "Shut down immediately to protect itself", "Reverse direction to blow the filter clean"],
      answer: 1,
      explanation: "Correct: (b). Holding airflow against rising resistance is the defining behavior of a constant-airflow ECM — which is why it can mask duct and filter problems while its watt draw and wear climb. (a) describes constant-torque behavior. (c) It compensates until it reaches its programmed limit; immediate shutdown is not its response. (d) ECMs do not self-clean filters by reversal."
    },
    {
      q: "A furnace delivers 64,000 Btu/h on low fire and moves 950 CFM. Its temperature rise is approximately:",
      choices: ["42°F", "62°F", "75°F", "95°F"],
      answer: 1,
      explanation: "Correct: (b). ΔT = 64,000 ÷ (1.08 × 950) = 64,000 ÷ 1,026 ≈ 62°F. (a) would require roughly 1,410 CFM at this output. (c) results from about 790 CFM — the rise if the blower failed to stage up properly. (d) comes from dividing output by CFM without the 1.08 constant and rounding errors — always include the constant: ΔT = Output ÷ (1.08 × CFM)."
    },
    {
      q: "The comfort benefit customers feel most from modulating heat is:",
      choices: ["Higher supply-air temperature on every cycle", "Longer, gentler cycles that hold room temperature closer to setpoint with less noise", "Faster recovery from thermostat setback", "Hotter radiators at the far end of the house"],
      answer: 1,
      explanation: "Correct: (b). Load-matching means small, steady heat input instead of blast-and-coast swings — even temperatures, better room-to-room mixing, and low blower speeds that are far quieter. (a) Supply temperature is often lower on low fire; comfort comes from constancy, not hotter air. (c) High fire recovers quickly, but setback recovery is a minor part of seasonal operation. (d) Furnaces heat air, not radiators — and distribution evenness improves through longer run time, not hotter delivery."
    },
    {
      q: "A modulating furnace that falls back to timer-based staging on a conventional thermostat will:",
      choices: ["Never light at all", "Lose true load-following modulation and behave more like a two-stage furnace", "Run only on high fire", "Damage its gas valve within a season"],
      answer: 1,
      explanation: "Correct: (b). Without a communicating or properly staging control, the board cannot know the load pattern, so it defaults to timed stage shifts — functional heat, but the headline benefit is gone. (a) The furnace is designed to run on conventional controls as a fallback. (c) Timers shift between stages; they do not lock out low fire. (d) No damage mechanism follows from timer staging — it is a supported configuration, just a lesser one."
    },
    {
      q: "After replacing an ECM motor and module, the essential verification is:",
      choices: ["Checking that the wheel spins freely by hand", "Measuring temperature rise (and static pressure) to confirm the programmed airflow profile matches the unit", "Running the furnace for exactly 24 hours before checking anything", "Replacing the thermostat at the same time"],
      answer: 1,
      explanation: "Correct: (b). The module carries the unit-specific airflow program; a physically identical motor with the wrong profile delivers wrong CFM in every mode, which only rise/static measurements reveal. (a) A free-spinning wheel says nothing about delivered airflow under load. (c) Verification is immediate, at commissioning — faults should be caught before leaving. (d) The thermostat is unrelated to the motor's internal program."
    },
    {
      q: "High total external static pressure on a constant-airflow ECM system most likely presents FIRST as:",
      choices: ["Immediate limit trips on the first cycle", "Normal comfort with quietly rising watt draw, noise, and motor wear as the ECM compensates", "A pressure-switch fault code", "Condensate backing up in the trap"],
      answer: 1,
      explanation: "Correct: (b). The ECM's compensation hides the airflow symptom — comfort holds while the motor works harder, louder, and hotter against the restriction. (a) Limit trips are the presentation on motors that cannot compensate (PSC/constant-torque) once rise exceeds the limit. (c) The pressure switch proves vent draft, a different pressure from duct static. (d) Condensate backup follows drain restriction, not duct static."
    }
  ],
  studyGuide: `
<h3>Module 2 — Modulating & Variable-Speed Heating: Quick Reference</h3>
<p><strong>Staging ladder:</strong> single-stage (full or off) → two-stage (low fire ≈ two-thirds of high, where most hours run) → modulating (valve throttles input continuously to track load).</p>
<p><strong>Control owns the benefit:</strong> communicating/two-stage thermostat stages by demand; a basic thermostat leaves staging to a board timer — set it deliberately, or the furnace behaves like an expensive single-stage.</p>
<div class="formula">Temperature rise ΔT = Output ÷ (1.08 × CFM) &nbsp;•&nbsp; CFM = Output ÷ (1.08 × ΔT). Check rise at BOTH firing rates against the rating plate.</div>
<p><strong>ECM types:</strong> constant-torque (X13-style; airflow falls as resistance rises) vs. constant-airflow (holds programmed CFM by speeding up — masks dirty filters/tight ducts while watts, noise, and wear climb). Motor + module are a programmed pair: verify rise and static after any replacement.</p>
<p><strong>Modulating service rules:</strong> manifold pressure varies with firing rate — diagnose in the manufacturer's test mode; draft proving must pass at <em>low</em> fire, where draft is weakest; marginal vents/traps fail at low fire first.</p>
<p><strong>Honest benefits:</strong> even temperatures, quiet, better mixing/filtration hours, modest fuel savings from fewer short cycles, big blower-electricity savings at low speed. AFUE class itself barely changes.</p>
`
};
