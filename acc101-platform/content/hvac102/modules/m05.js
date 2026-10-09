// HVAC 102 - Module 5: Metering Devices in Depth
module.exports = {
  number: 5,
  slug: "metering-devices-in-depth",
  title: "Metering Devices in Depth",
  estTime: "3–4 hours",
  objectives: [
    "Explain the three forces that position a TXV and predict the valve's response to load, superheat, and pressure changes.",
    "Distinguish static, operating, and total superheat, and set/verify TXV superheat correctly.",
    "Explain external equalization, bulb placement, distributor circuits, and how pressure drop across a coil changes valve behavior.",
    "Compare TXVs with electronic expansion valves (EEVs): sensing, control, and failure behavior.",
    "Diagnose the classic TXV failure modes — lost bulb charge, stuck valve, restricted screen, hunting — without condemning healthy valves."
  ],
  sections: [
    {
      heading: "Three Forces Run the Valve",
      html: `<p>A thermostatic expansion valve is a force-balance machine with no electronics and no mercy for sloppy diagnosis. Three pressures fight across its diaphragm:</p><ul><li><strong>Bulb pressure (opening force).</strong> The sensing bulb, strapped to the evaporator outlet, holds a sealed charge. Warmer suction gas → higher bulb pressure → pushes the diaphragm to <em>open</em> the valve.</li><li><strong>Equalizer pressure (closing force).</strong> Evaporator pressure, delivered to the underside of the diaphragm either through the valve body (internal equalization) or by a small external line from the evaporator outlet. Higher evaporator pressure pushes the valve <em>closed</em>.</li><li><strong>Spring pressure (closing force).</strong> The superheat spring adds a steady closing bias; its adjustment sets the superheat the valve will defend.</li></ul><p>At equilibrium: bulb pressure = equalizer pressure + spring pressure, and the valve meters exactly the flow that holds evaporator-outlet superheat at the spring's setting. Raise the load: the evaporator boils refrigerant off faster, outlet gas warms, bulb pressure climbs, the valve opens further, more liquid enters, superheat returns to the setting. That is the whole miracle — a self-correcting loop with a time constant, which is why TXVs <strong>hunt</strong> (overshoot and oscillate) when oversized, starved of liquid, or sensing a bulb that is poorly mounted: the loop is only as honest as its inputs.</p><div class="callout"><strong>Key idea:</strong> Every TXV symptom is a force problem. Ask which force is lying — bulb, equalizer, or spring — before asking whether the valve is 'bad.'</div>`
    },
    {
      heading: "Superheat Settings: Static, Operating, and Total",
      html: `<p>Three superheats get confused in the field:</p><ul><li><strong>Static superheat</strong> — the valve's bench characteristic: the superheat at which the valve just begins to open with no flow.</li><li><strong>Operating (evaporator) superheat</strong> — what the valve maintains at the evaporator outlet under load: static superheat plus the additional opening superheat needed to drive flow through the valve. This is the number the bulb actually senses and the number you verify at the coil outlet.</li><li><strong>Total superheat</strong> — measured at the compressor: evaporator superheat plus suction-line heat gain. Compressor manufacturers care about total superheat (it sets discharge temperature and motor cooling); the TXV only controls its own share.</li></ul><p><strong>Worked check.</strong> R-22 evaporator: suction pressure at the outlet 68.5 psig → saturation 40°F (P/T anchor). Bulb-location line temperature 50°F. Evaporator superheat = 50 − 40 = <strong>10°F</strong>. At the compressor, the line reads 58°F after a warm attic run: total superheat = 58 − 40 = <strong>18°F</strong>. The valve is doing its 10°F job; the extra 8°F belongs to the suction line — insulate it, don't adjust the valve for it.</p><p>Adjustment discipline: confirm charge by subcooling and correct airflow <em>first</em> (a TXV system with low charge starves no matter where the stem sits); turn the stem in small increments (a quarter to half turn), then wait — systems need many minutes to stabilize after each change; re-measure at the bulb location; and record the final setting. Never chase superheat on a system whose load is swinging (doors opening, defrost ending) — you will tune the valve to a moment, not a condition.</p><div class="callout"><strong>Key idea:</strong> Adjusting a TXV changes the spring force, hence the defended superheat — nothing else. It does not fix low charge, restrictions, or low load, and it is the <em>last</em> step of a diagnosis, never the first.</div>`
    },
    {
      heading: "Equalizers, Bulbs, and Distributor Circuits",
      html: `<p><strong>Internal vs. external equalization.</strong> An internally equalized valve senses evaporator <em>inlet</em> pressure. On a small coil with negligible pressure drop, inlet ≈ outlet and the valve is honest. Put that valve on a coil with significant pressure drop — or downstream of a <strong>distributor</strong> — and the diaphragm never learns how much pressure was lost across the coil. The valve controls to inlet pressure, so the evaporator runs at a <em>higher</em> actual superheat at the outlet than the setting suggests, starving capacity. The cure is the <strong>externally equalized</strong> valve: a small line brings true outlet pressure under the diaphragm. Rule of practice: any system with a distributor gets an external equalizer — distributors exist to split flow evenly among parallel circuits, and their pressure drop makes internal equalization meaningless.</p><p><strong>Bulb craft.</strong> The bulb must sense suction <em>gas</em> temperature, so: mount it on a clean, straight, horizontal run at the evaporator outlet; on larger lines use the clock positions that avoid oil pooling at the bottom and heat stratification at the top (roughly the 4 or 8 o'clock positions on big tubing); strap it with metal-to-metal contact and real clamping force; insulate over the bulb so room air cannot impersonate suction gas; never mount it on a trap, a vertical riser, or downstream of a fitting that mixes streams. A loose bulb reads warm air, drives the valve wide open, and floods the compressor — the cheapest floodback in the industry.</p><p><strong>Distributor circuits.</strong> After the valve, a distributor feeds multiple parallel evaporator circuits through equal-length feeder tubes. Unequal feeder lengths, a distributor not mounted per its design orientation, or one blocked circuit unbalances the set: some circuits starve (high local superheat) while others flood, and the single bulb averages the lie. Frost patterns that differ circuit-to-circuit point here, not at the valve stem.</p><div class="callout"><strong>Key idea:</strong> External equalizer + correctly mounted bulb + balanced distributor = the valve sees the truth. Most 'bad TXV' calls are bad information reaching a good valve.</div>`
    },
    {
      heading: "Electronic Expansion Valves (EEVs)",
      html: `<p>An <strong>electronic expansion valve</strong> replaces the bulb-and-diaphragm loop with sensors and a controller: a pressure transducer and a temperature sensor at the evaporator outlet report to a board, which drives a stepper-motor (or pulse-width-modulated) valve to hold a programmed superheat. Advantages compound:</p><ul><li>Superheat can be held lower and steadier than a TXV's mechanical loop allows, filling more of the evaporator with boiling refrigerant — capacity and efficiency rise.</li><li>The setpoint is software: it can adapt by mode (cooling vs. heating vs. defrost), by load, and by compressor staging.</li><li>The valve can close positively at off-cycle (many designs do), serving as its own liquid-line solenoid and preventing off-cycle migration floodback.</li><li>Boards log faults and sensor readings — diagnosis starts with data instead of suspicion.</li></ul><p>The failure modes change accordingly: failed or drifting pressure transducers and thermistors (the board believes the lie completely), stepper motors that lose steps and lose track of position, wiring and connector faults, boards that fail with the valve parked open or closed, and control parameters corrupted by a board swap that skipped the setup procedure. Diagnosis is therefore electrical first: verify sensor readings against your own gauges and thermometer, verify the board is commanding steps, verify the valve responds. A 'bad EEV' verdict without sensor verification repeats the TXV era's worst habit with more expensive parts.</p><p>Note what does <em>not</em> change: an EEV still needs a solid column of subcooled liquid at its inlet, correct charge, and clean refrigerant. Electronics refine control; they do not repeal Module 1 physics.</p><div class="callout"><strong>Key idea:</strong> TXV = forces; EEV = information. Troubleshoot each in its own language: pressures and springs for one, sensors and signals for the other.</div>`
    },
    {
      heading: "TXV Failure Modes — and the Healthy Valves Condemned Anyway",
      html: `<p>Genuine TXV failures exist. Learn their signatures:</p><ul><li><strong>Lost bulb charge (powerhead failure):</strong> the opening force collapses; spring + equalizer drive the valve shut. Symptoms: very low suction pressure, very high superheat, starved coil — and the decisive test, warming the bulb in your hand produces <em>no</em> response (pressure should rise as a charged bulb opens the valve). On many valves the powerhead is replaceable without opening the refrigerant body.</li><li><strong>Stuck valve / debris:</strong> a valve jammed shut mimics lost charge; jammed open floods (low superheat, low discharge temperature, possible liquid knock). Inlet screens clog with the debris POE liberated (Module 4) — check the screen before replacing the valve.</li><li><strong>Wax or moisture freeze-up:</strong> intermittent starving that 'heals' when the system rests and the ice melts — a moisture/drier story (Modules 6–7), not a valve story.</li><li><strong>Hunting:</strong> superheat swings in a regular cycle: oversized valve, bulb sensing poorly, low load, or charge so marginal the valve alternates between liquid and flash gas at its inlet.</li></ul><p>And the healthy-valve traps: low charge makes a TXV hunt and starve — the valve opens fully and still cannot feed what is not there; a liquid-line restriction upstream starves the inlet; low airflow ices the coil and the valve correctly closes down against a genuinely cold outlet. In each case the valve is the messenger. The professional sequence — airflow, charge by subcooling, restriction hunt, <em>then</em> valve tests (bulb response, screen, equalizer) — condemns few valves and fixes most systems.</p><div class="callout"><strong>Key idea:</strong> A TXV holding a steady, correct superheat cannot be the cause of a capacity complaint — by definition it is feeding the coil exactly as designed. Look upstream (charge, restriction) or downstream (airflow, load).</div>`
    }
  ],
  keyTerms: [
    { term: "Bulb pressure (opening force)", def: "Pressure from the sensing bulb's sealed charge; rises with suction-line temperature and opens the TXV." },
    { term: "Equalizer pressure (closing force)", def: "Evaporator pressure acting under the diaphragm; with spring pressure it opposes the bulb." },
    { term: "Superheat spring", def: "The adjustable spring whose force sets the superheat a TXV defends." },
    { term: "Static superheat", def: "The superheat at which a TXV just begins to open on the bench, before flow." },
    { term: "Operating superheat", def: "The evaporator-outlet superheat a TXV maintains under load; the field-verified setting." },
    { term: "Total superheat", def: "Superheat measured at the compressor; evaporator superheat plus suction-line heat gain." },
    { term: "Hunting", def: "Cyclic over- and under-feeding by a metering device, seen as oscillating superheat; caused by oversizing, poor bulb sensing, low load, or marginal liquid supply." },
    { term: "External equalizer", def: "A small line carrying true evaporator-outlet pressure to the TXV diaphragm; required with distributors and high coil pressure drop." },
    { term: "Distributor", def: "A device after the metering device that splits refrigerant flow evenly among parallel evaporator circuits via equal-length feeder tubes." },
    { term: "Balanced-port valve", def: "A TXV design that reduces the effect of inlet-pressure variation on the force balance, improving control across pressure swings." },
    { term: "Powerhead", def: "The diaphragm/bulb-charge assembly of a TXV; its loss of charge removes the opening force and drives the valve shut." },
    { term: "Electronic expansion valve (EEV)", def: "A motor-driven metering valve controlled by a board using pressure and temperature sensors to hold a programmed superheat." },
    { term: "Stepper motor valve", def: "An EEV moved in discrete steps by a controller; position tracking can be lost if steps are missed." },
    { term: "Inlet screen", def: "A strainer at a TXV inlet that traps debris; a restriction here mimics a failed valve." },
    { term: "Floodback", def: "Liquid refrigerant returning through the suction line; with TXVs, often a loose/mis-mounted bulb or a valve stuck open." },
    { term: "Starved evaporator", def: "A coil receiving too little refrigerant — dry circuits, high superheat, low capacity; a symptom with many upstream causes." }
  ],
  video: {
    title: "How to Properly Diagnose a Failed TXV",
    embedUrl: "https://www.youtube.com/embed/IfLfXx9CsGs",
    note: "A masterclass on TXV misdiagnosis: the opening/closing force balance, why low suction pressure alone does not condemn a valve, the need for a full column of liquid and adequate pressure drop, inlet screens, and powerhead failure. It matches this module's 'test before you condemn' sequence.",
    more: [
      { title: "Why and How to Adjust a TXV / TEV", url: "https://www.youtube.com/watch?v=fmYnQu7utIQ" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A TXV system's evaporator outlet shows 68.5 psig and a bulb-location temperature of 50°F on R-22. The compressor inlet line reads 59°F. Compute evaporator superheat and total superheat, and state which one the TXV controls.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: R-22 at 68.5 psig saturates at 40°F. Step 2: Evaporator superheat = 50 − 40 = <strong>10°F</strong> — this is the valve's number. Step 3: Total superheat = 59 − 40 = <strong>19°F</strong>. Step 4: The TXV controls only the evaporator share; the extra 9°F is suction-line heat gain — insulate the line rather than adjusting the valve.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> Superheat on a TXV system swings rhythmically between 4°F and 22°F every few minutes. List three plausible causes and the first check for each.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: <em>Hunting from poor bulb sensing</em> — check bulb clamping, position, and insulation first (cheapest lie in the loop). Step 2: <em>Marginal liquid supply</em> (low charge or upstream restriction) — verify subcooling; a valve alternating between liquid and flash gas at its inlet will oscillate. Step 3: <em>Oversized valve or very low load</em> — compare valve capacity to the coil and check actual load/airflow. All three are loop-input problems; replacing the valve addresses none of them directly.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A multi-circuit evaporator with a distributor was retrofitted with an internally equalized TXV during a repair. Predict the operating fault and explain it in force terms.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The distributor and coil impose real pressure drop between valve outlet and evaporator outlet. Step 2: An internally equalized valve senses pressure at its own outlet (inlet of the distributor) — higher than true outlet pressure — so the diaphragm's closing force is overstated relative to outlet conditions. Step 3: The valve therefore holds a <em>higher actual outlet superheat</em> than its setting: a chronically starved coil and lost capacity. Step 4: The fix is an externally equalized valve sensing true outlet pressure.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> Warming a TXV bulb in your hand produces no change in suction pressure or superheat; pressures show a starved coil with very high superheat. What failed, and what is the economical repair on many valves?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: A healthy bulb's charge pressure rises with warmth and opens the valve — no response means the <strong>bulb/powerhead charge is lost</strong>, removing the opening force so spring + equalizer hold the valve shut. Step 2: On many valves the <strong>powerhead is replaceable</strong> without replacing the valve body or opening the circuit extensively. Step 3: Confirm the inlet screen is clear while you are there, so debris is not the co-conspirator.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> An EEV system reports erratic superheat. Your gauges and thermometer show a steady, sensible superheat at the coil outlet. Where does diagnosis go next, and why?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Your instruments disagree with the board's story, so suspect the board's <em>inputs</em>: the pressure transducer and temperature sensor (or their wiring/connectors). Step 2: An EEV controller believes its sensors completely; a drifting sensor makes it drive a good valve to wrong positions. Step 3: Verify sensor readings against measured pressure/temperature, correct the sensing fault, and only then evaluate the valve motor itself.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> State the correct order of operations before adjusting a TXV stem on a low-capacity call, and justify the order in one sentence each.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: <em>Airflow first</em> — low airflow distorts every refrigerant reading downstream. Step 2: <em>Charge by subcooling</em> — a TXV cannot feed refrigerant that is not there, and stem turns cannot fix charge. Step 3: <em>Restriction hunt</em> — a starved inlet (drier, screen) mimics valve failure. Step 4: <em>Valve checks</em> (bulb mount, bulb response, equalizer). Step 5: <em>Adjust last</em>, in small increments with stabilization time — the stem sets defended superheat, nothing else.</p>"
    }
  ],
  quiz: [
    {
      q: "The three forces acting on a TXV diaphragm are:",
      choices: ["Bulb pressure (opening), equalizer pressure (closing), spring pressure (closing)", "Condenser pressure, fan pressure, gravity", "Bulb pressure (closing), spring pressure (opening), oil pressure", "Magnetism, spring pressure, bulb pressure"],
      answer: 0,
      explanation: "Correct: (a). The valve's position is the balance of one opening force against two closing forces. (b) invents forces that never reach the diaphragm. (c) reverses the bulb and spring roles. (d) Magnetism belongs to solenoid valves and EEV motors, not TXV operation."
    },
    {
      q: "Total superheat is greater than evaporator superheat whenever:",
      choices: ["The TXV is oversized", "The suction line gains heat between the evaporator outlet and the compressor", "Subcooling is high", "The condenser is dirty"],
      answer: 1,
      explanation: "Correct: (b). Total = evaporator superheat + line heat gain; any warm run adds to it. (a) Oversizing causes hunting, not a fixed total-superheat offset. (c) Subcooling is a liquid-side quantity. (d) A dirty condenser raises head pressure; it does not add suction-line superheat directly."
    },
    {
      q: "An external equalizer is required when:",
      choices: ["The system uses R-410A", "There is significant pressure drop across the evaporator or a distributor is used", "The compressor is a scroll", "Superheat is above 10°F"],
      answer: 1,
      explanation: "Correct: (b). The diaphragm must sense true outlet pressure; internal sensing lies whenever coil/distributor drop is real. (a) Refrigerant identity does not decide equalization. (c) Compressor type is unrelated. (d) Superheat value is the result the valve controls, not the equalizer criterion."
    },
    {
      q: "Warming the sensing bulb by hand on a healthy TXV system should:",
      choices: ["Close the valve and raise superheat", "Open the valve — bulb pressure rises, feeding more refrigerant", "Have no effect ever", "Trip the compressor overload"],
      answer: 1,
      explanation: "Correct: (b). Heat raises the bulb charge's pressure — the opening force — so flow increases. This response is the field test for a live bulb charge. (a) reverses the force direction. (c) describes a dead (lost-charge) powerhead. (d) A brief bulb test does not overload a compressor."
    },
    {
      q: "A lost bulb charge drives a TXV:",
      choices: ["Fully open — floodback", "Toward closed — starved coil, low suction, high superheat", "Into hunting", "To control subcooling instead"],
      answer: 1,
      explanation: "Correct: (b). Without bulb pressure there is no opening force; spring + equalizer win and the valve shuts down. (a) is the stuck-open or loose-bulb signature. (c) Hunting needs a live, oscillating loop. (d) TXVs never control subcooling; charge does."
    },
    {
      q: "Before adjusting a TXV for low capacity, the correct sequence is:",
      choices: ["Adjust stem, then check charge", "Replace the valve, then check airflow", "Verify airflow, verify charge by subcooling, hunt restrictions, test the valve — adjust last", "Add refrigerant until superheat falls"],
      answer: 2,
      explanation: "Correct: (c). The stem only sets defended superheat; most 'valve' symptoms are airflow, charge, or restriction faults upstream. (a) tunes around unknown faults. (b) condemns untested parts. (d) risks overcharging a TXV system, whose superheat will stubbornly stay at the valve's setting while subcooling climbs."
    },
    {
      q: "An EEV differs from a TXV most fundamentally in that it:",
      choices: ["Needs no liquid seal at its inlet", "Uses sensors and a controller driving a motorized valve to hold a programmed superheat", "Controls subcooling directly", "Works without refrigerant pressure drop"],
      answer: 1,
      explanation: "Correct: (b). Sensing + computation + motor replace the bulb/spring force balance. (a) false — EEVs still need solid subcooled liquid. (c) EEVs control superheat; charge still sets subcooling. (d) A pressure drop across the valve is the metering mechanism in both designs."
    },
    {
      q: "A bulb mounted loosely on the suction line will most likely cause:",
      choices: ["A starved coil", "Overfeeding and possible floodback, because the bulb senses warm room air", "High subcooling", "A tripped high-pressure switch"],
      answer: 1,
      explanation: "Correct: (b). The bulb reads air temperature, 'believes' superheat is enormous, and drives the valve open. (a) is the dead-bulb/stuck-valve pattern. (c) Subcooling follows charge and condenser behavior, not bulb mounting. (d) Head pressure is not the bulb's lever."
    }
  ],
  studyGuide: `
<h3>Module 5 — Metering Devices in Depth: Quick Reference</h3>
<p><strong>Force balance:</strong> bulb pressure (opens) = equalizer pressure (closes) + spring pressure (closes). Equilibrium holds evaporator superheat at the spring's setting.</p>
<p><strong>Three superheats:</strong> static (bench, just-opening), operating/evaporator (bulb location, valve-controlled), total (at compressor = evaporator + line gain).</p>
<p><strong>Worked check (R-22):</strong> 68.5 psig → 40°F sat; bulb line 50°F → 10°F evaporator SH; compressor line 58°F → 18°F total SH. Fix the line with insulation, not the stem.</p>
<p><strong>Equalizers:</strong> distributor or real coil pressure drop → external equalizer, no exceptions. Bulb: clean metal contact, tight strap, correct clock position, insulated over, never on traps/risers.</p>
<p><strong>EEVs:</strong> transducer + thermistor + board + stepper valve; verify sensors against your gauges before condemning the valve; still needs solid liquid and correct charge.</p>
<p><strong>Failures:</strong> lost bulb charge (no response to hand-warming; replaceable powerhead), stuck valve, clogged inlet screen, moisture freeze-up (intermittent), hunting (oversized, bad bulb sensing, marginal liquid).</p>
<p><strong>Watch out:</strong> airflow → charge (subcooling) → restrictions → valve tests → adjust LAST, small turns, long waits.</p>
`
};
