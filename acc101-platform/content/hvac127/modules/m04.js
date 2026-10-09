// HVAC 127 - Module 4: Thermostats
module.exports = {
  number: 4,
  slug: "thermostats",
  title: "Thermostats",
  estTime: "3–4 hours",
  objectives: [
    "Compare mechanical, electronic, programmable, and smart/communicating thermostats by how they sense, decide, and switch.",
    "State the standard terminal designations R, W, Y, G, C, and O/B and what each one does.",
    "Trace a complete cooling call and a heating call through the thermostat and equipment in order.",
    "Explain staging and how second-stage calls are triggered by time, temperature, or both.",
    "Wire and reason about a heat pump thermostat, including reversing-valve logic and auxiliary heat."
  ],
  sections: [
    {
      heading: "Four Generations of Thermostat",
      html: `
<p>The thermostat is the most visible control in HVAC — the sensor, controller, and user interface of the space loop in one wall box. It has evolved through four generations, all of which you will still meet in the field:</p>
<ul>
<li><strong>Mechanical:</strong> a bimetal element or coil bends with temperature and tips a mercury switch (older) or snap contacts. A <em>heat anticipator</em> — a small adjustable heater near the element — warmed the sensor slightly during a call to end it early and prevent overshoot. Setting the anticipator to match the current draw of the heating circuit was a genuine setup skill; too low and the burner short-cycled, too high and the room overshot.</li>
<li><strong>Electronic (non-programmable):</strong> a thermistor senses, a board decides, a small relay or triac switches. Anticipation became software — cycle-rate settings instead of a current-matched heater.</li>
<li><strong>Programmable:</strong> adds a clock and schedule: setback at night and during work hours, recovery before wake-up. The control logic is the same; the setpoint now moves on a timetable.</li>
<li><strong>Smart/communicating:</strong> adds occupancy learning, Wi-Fi reporting, remote sensors, and — in communicating systems — a two-way digital conversation with the equipment instead of dumb 24 V calls. A communicating stat doesn't just say "cool"; it reports the room and receives the equipment's status and faults back.</li>
</ul>
<div class="callout"><strong>Key idea:</strong> However fancy the wall unit, the field fundamentals don't change: it still senses the space, compares to a setpoint, and must make or break the right circuits. Diagnose the call path first; learn the gadget features second.</div>`
    },
    {
      heading: "Terminal Designations: The 24 V Language",
      html: `
<p>Conventional stats and equipment speak through standardized terminals. Learn this table cold — it is the vocabulary of the lab in this course and of half the no-cool calls you will ever run:</p>
<ul>
<li><strong>R</strong> — 24 VAC hot feed from the control transformer (sometimes split into Rc for cooling and Rh for heating when two transformers exist).</li>
<li><strong>W</strong> — heating call. R→W energizes the heat circuit (furnace board or heat relay).</li>
<li><strong>Y</strong> — cooling call. R→Y energizes the compressor contactor circuit.</li>
<li><strong>G</strong> — fan call. R→G energizes the indoor blower relay/speed.</li>
<li><strong>C</strong> — common: the other side of the transformer, giving the stat a complete power circuit of its own (needed by power-hungry electronic/smart stats).</li>
<li><strong>O/B</strong> — reversing-valve control on heat pumps (covered below). Also common: <strong>W2/AUX</strong> (second-stage/auxiliary heat), <strong>Y2</strong> (second-stage cooling), <strong>E</strong> (emergency heat), <strong>S1/S2</strong> (outdoor sensor terminals on some brands).</li>
</ul>
<div class="formula">A "call" = 24 VAC present on the function's terminal relative to C. No call for cooling? No 24 V on Y. It really is that direct.</div>
<p>Wire colors are conventions, not guarantees: usually R red, W white, Y yellow, G green, C blue or black, O orange. The lab in this course exists because "usually" is where miswires breed. <strong>Verify by terminal letter and by meter, never by color alone</strong> — the last installer may have run out of the right color, and the building does not care what the wire looks like, only where it lands.</p>
<div class="callout"><strong>Key idea:</strong> The thermostat is a set of switches between R and the function terminals. With a meter and that one sentence, you can test every stat function from the equipment end or the wall end.</div>`
    },
    {
      heading: "Tracing Heating and Cooling Calls",
      html: `
<p><strong>Cooling call, step by step.</strong> Room rises above setpoint plus differential. The stat closes R→Y and R→G. At the air handler, G energizes the blower. The Y circuit travels out to the condensing unit, where 24 V on Y pulls in the compressor contactor; the contactor's line-voltage contacts close and the compressor and outdoor fan start. Cooling runs until the stat is satisfied, opens R→Y and R→G, and everything stops in reverse logic. Note the equipment's own boards and safeties sit <em>inside</em> this path (Module 5 and 7): the stat asks, the equipment board decides whether conditions allow.</p>
<p><strong>Heating call (gas furnace).</strong> Room falls below setpoint. The stat closes R→W only. The furnace control board receives W, runs its inducer, proves draft, opens the gas valve, proves flame, then brings on the blower itself after a warm-up delay. Observe: on a furnace, the blower is run by the <em>board</em>, not by G — G from the stat is for fan-only and cooling duty. A customer whose blower "doesn't work on heat" but works on "Fan ON" is describing normal architecture half the time.</p>
<div class="callout"><strong>Key idea:</strong> Trace calls, don't guess parts. "24 V on W at the furnace, no inducer" and "no 24 V on W at the furnace" are completely different calls, and the meter at the terminal strip is what separates them in thirty seconds.</div>
<p><strong>Worked example:</strong> No-cool complaint. At the air handler you measure 24 V between Y and C, and the outdoor contactor coil measures open with an ohmmeter (power off). The stat, the wiring, and the board have all done their jobs; the call arrives and the contactor coil is dead. One measurement path — stat switch, wire, board, coil — each leg verified in order. That is the thermostat troubleshooting method in miniature.</p>`
    },
    {
      heading: "Staging: When One Size Isn't Enough",
      html: `
<p>Many systems have capacity in steps: two-stage compressors, second-stage gas, auxiliary strips. The thermostat (or board) decides when first stage is not enough. Two triggering philosophies exist:</p>
<ul>
<li><strong>Temperature-based staging:</strong> stage 2 calls when the room drifts a set amount beyond setpoint (for example, 2°F) — proof that stage 1 is losing ground.</li>
<li><strong>Time-based staging:</strong> stage 2 calls when stage 1 has run continuously for a set time (for example, 10–15 minutes in manufacturer examples) without satisfying — the load is bigger than stage 1 alone.</li>
</ul>
<p>Real stats often blend both, and setup matters: staging up too eagerly burns the efficiency the two-stage equipment was bought for; staging too late leaves comfort complaints. Terminal W2/Y2 exist precisely to carry these second-stage calls.</p>
<div class="callout"><strong>Key idea:</strong> A second-stage call is the control saying "stage 1 is not keeping up." If stage 2 runs constantly, either the staging logic is set too aggressively or stage 1 is not delivering — the control logic and the machine are one diagnosis.</div>
<p><strong>Worked example:</strong> On a mild 70°F afternoon, a two-stage system runs in second stage all day. Space temperature holds perfectly — the control is not broken in the sensing sense; it's staging up when it shouldn't. Check the staging settings first (temperature threshold actually reachable by stage 1 on a mild day? timer too short?) before condemning compressors. Controls misconfiguration produces expensive-looking behavior with perfectly healthy equipment.</p>`
    },
    {
      heading: "Heat Pump Thermostats and the O/B Terminal",
      html: `
<p>A heat pump thermostat runs everything a conventional stat runs, plus one trick: it steers the reversing valve. The valve itself determines whether the outdoor unit heats or cools, and the <strong>O/B terminal</strong> tells it which way to sit.</p>
<ul>
<li>The stat must be <strong>configured</strong> to match the equipment: some systems energize the reversing valve in cooling (the common arrangement, "O"), others energize it in heating ("B"). Set the stat to the wrong one and the system heats when it should cool and cools when it should heat — a configuration fault that mimics a failed reversing valve perfectly.</li>
<li><strong>Auxiliary heat (W2/AUX):</strong> electric strips or a furnace that supplement the heat pump when it cannot keep up (very cold weather, recovery from setback, defrost tempering). The stat brings aux on by temperature difference, run time, or an outdoor-temperature lockout, depending on setup.</li>
<li><strong>Emergency heat (E):</strong> a manual mode that locks out the heat pump and runs aux alone — used when the heat pump itself has failed.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Condemning a reversing valve on a system that heats in cooling mode. Before touching the valve, check the stat's O/B configuration and measure whether 24 V is actually present on O during a cooling call. A misconfigured or miswired stat produces this symptom with a perfectly good valve — and it is the subject of this course's first lab.</div>
<p>Heat pump stats also manage <strong>defrost support</strong>: during defrost the outdoor unit temporarily runs in cooling mode, and the stat/board brings on auxiliary heat to temper the cold air at the registers — which is why a brief cool draft with aux heat on during defrost is normal behavior, not a fault (Module 7 goes deeper on defrost boards).</p>`
    }
  ],
  keyTerms: [
    { term: "Heat anticipator", def: "A small adjustable heater in mechanical thermostats that ended heating calls slightly early to prevent overshoot; set to match control-circuit current." },
    { term: "R terminal", def: "The 24 VAC hot feed from the control transformer to the thermostat." },
    { term: "C terminal (common)", def: "The transformer common conductor; gives the thermostat its own complete power circuit." },
    { term: "W terminal", def: "The heating call terminal; 24 V on W requests heat." },
    { term: "Y terminal", def: "The cooling call terminal; 24 V on Y requests compressor operation." },
    { term: "G terminal", def: "The fan call terminal; 24 V on G runs the indoor blower." },
    { term: "O/B terminal", def: "The heat pump reversing-valve terminal; energized in cooling (O) or heating (B) depending on equipment design." },
    { term: "Reversing valve", def: "The heat pump valve that swaps the roles of the indoor and outdoor coils to switch between heating and cooling." },
    { term: "Auxiliary heat", def: "Supplemental heat (strips or furnace) the thermostat stages in when the heat pump cannot keep up." },
    { term: "Emergency heat", def: "A manual mode running auxiliary heat alone with the heat pump locked out." },
    { term: "Staging", def: "Bringing capacity on in steps, with later stages triggered by temperature difference, run time, or both." },
    { term: "Second stage (W2/Y2)", def: "The additional heating or cooling capacity called through the W2 or Y2 terminals." },
    { term: "Cycle rate", def: "An electronic thermostat setting limiting how many times per hour equipment may start." },
    { term: "Communicating thermostat", def: "A stat exchanging digital two-way data with the equipment rather than simple 24 V calls." },
    { term: "Setback", def: "A scheduled setpoint change (usually overnight or away hours) to save energy." },
    { term: "Contactor", def: "The heavy-duty relay, pulled in by the Y circuit, that switches line power to the compressor and outdoor fan." },
    { term: "Lockout (outdoor)", def: "A control setting that disables a function (e.g., auxiliary heat) above or below a chosen outdoor temperature." },
    { term: "Call", def: "A thermostat's request for a function, signaled by 24 VAC on that function's terminal." }
  ],
  video: {
    title: "Thermostat Wiring Color Code [Decoded and Explained]",
    embedUrl: "https://www.youtube.com/embed/xQd6GERVzVM",
    note: "A wire-by-wire walk through thermostat color codes and what each conductor does. Use it alongside this module's terminal table — and remember the module's warning: the video teaches the convention, but you must always verify by terminal letter and meter because real-world wiring deviates.",
    more: [
      { title: "Thermostat Terminals Fully Explained", url: "https://www.youtube.com/watch?v=4ERgdc_RRBE" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> From memory, write the function of each terminal: R, C, W, Y, G, O/B, W2.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: <strong>R</strong> = 24 VAC hot from the transformer. <strong>C</strong> = common, completing the stat's own power circuit. <strong>W</strong> = heating call. <strong>Y</strong> = cooling call (contactor circuit). <strong>G</strong> = indoor fan call. <strong>O/B</strong> = reversing-valve control on heat pumps (energized in cooling or heating per equipment design). <strong>W2</strong> = second-stage/auxiliary heat call. If any of these required a lookup, drill them — terminal fluency is this course's core literacy.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> On a cooling call, you measure at the air handler: R-to-C = 24 V, G-to-C = 24 V, Y-to-C = 0 V. The blower runs; the outdoor unit is silent. Where is the call being lost, and what are your next two checks?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Power (R-C) is healthy and the stat is making its fan switch (G present), so the stat is alive and calling partially. Step 2: Y never arrives — the break is in the cooling call path between the stat's Y switch and the air handler, or the stat's cooling contact itself. Step 3: Next checks: measure Y-to-C at the stat subbase (separates stat fault from wire fault), then inspect the Y conductor run for a break, a float-switch contact wired in series, or a terminal landed wrong.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A smart thermostat reboots every time the system starts, and the wires at the wall are R, W, Y, G only. Explain the cause and the two standard cures.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Without a <strong>C wire</strong>, electronic stats historically 'power-stole' tiny current through equipment circuits; a hungry smart stat can brown out and reboot when calls energize and voltage shifts. Step 2: Cure one — run a real C conductor (or repurpose a spare wire in the cable). Step 3: Cure two — use a manufacturer-approved add-a-wire/common-maker kit where pulling new cable is impractical. Guessing at G-to-C swaps without a kit just moves the fault into the fan circuit.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A heat pump cools when set to heat and heats when set to cool, immediately after a thermostat replacement. List the suspects in the order you would check them, cheapest first.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: <strong>Stat configuration</strong> — O/B setting doesn't match the equipment (set to energize in heating when this unit energizes in cooling, or vice versa). Step 2: <strong>Wiring</strong> — the O/B conductor landed on the wrong terminal or not landed. Step 3: Verify with a meter: 24 V on O during a cooling call for an 'energize-in-cooling' unit. Step 4: Only after configuration, wiring, and signal are proven do you suspect the reversing valve or its solenoid — parts last, settings first.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A two-stage furnace's second stage is set to engage after 5 minutes of first-stage run time. The homeowner complains the house 'takes forever to warm up' on cold mornings, but utility bills are low. Explain the trade-off being made and one adjustment to discuss with the customer.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The 5-minute timer means stage 2 waits while stage 1 tries alone; on design-cold mornings stage 1 cannot recover the setback alone, so warm-up drags — the complaint is the timer working. Step 2: The benefit is efficiency: long first-stage runs on mild days are cheaper and quieter, hence the low bills. Step 3: Adjustment to discuss: lengthening recovery is the cost of those savings; options include a smarter adaptive recovery (starting earlier), a temperature-based stage-up threshold, or less overnight setback. It is a comfort-versus-cost setting, and the customer owns the choice.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> Sketch (in words) the full path of a cooling call from the transformer to the compressor, naming every device the 24 V signal passes through or energizes.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Transformer secondary → R conductor → thermostat. Step 2: Stat closes R→Y (and R→G for the blower). Step 3: Y travels to the indoor board/terminal strip, typically through any series safeties in the cooling path (such as a condensate float switch where installed). Step 4: Y continues to the outdoor unit and energizes the <strong>contactor coil</strong>. Step 5: The contactor's line-voltage contacts close → compressor and outdoor fan motor start. Step 6: The stat opens R→Y when satisfied and the chain de-energizes in reverse. Any break anywhere in this path is a no-cool with a healthy compressor.</p>"
    }
  ],
  quiz: [
    {
      q: "24 VAC measured between Y and C at the equipment during a cooling demand means:",
      choices: ["The compressor has failed", "The cooling call is arriving at the equipment", "The transformer is oversized", "The reversing valve is energized"],
      answer: 1,
      explanation: "Correct: (b). Y carrying 24 V relative to C is the definition of a cooling call arriving. (a) The compressor's health is downstream of the contactor; the call arriving says nothing about it. (c) Transformer size is judged by voltage under load, not by a normal 24 V call reading. (d) Reversing-valve state is read on O/B, not Y."
    },
    {
      q: "The C wire's purpose on a modern electronic thermostat is to:",
      choices: ["Call for cooling", "Provide the common side of the transformer so the stat has its own continuous power circuit", "Connect the outdoor sensor", "Carry the fan call"],
      answer: 1,
      explanation: "Correct: (b). R and C together give the stat steady power for its electronics, display, and radio. (a) Cooling is called on Y. (c) Outdoor sensors land on their own terminals (often S1/S2). (d) The fan call is G; confusing C and G is a classic miswire."
    },
    {
      q: "On a gas furnace heating call, the indoor blower is normally started by:",
      choices: ["The G terminal from the thermostat", "The furnace control board after its warm-up delay", "The Y terminal through the contactor", "The O/B terminal"],
      answer: 1,
      explanation: "Correct: (b). The board sequences inducer, ignition, flame proof, then blower — G is not used for furnace heat. (a) G runs the fan for cooling and fan-only operation. (c) Y is the cooling path and is inactive on a heat call. (d) O/B exists on heat pump stats for the reversing valve, not furnace blowers."
    },
    {
      q: "A heat pump system begins heating on cooling calls right after a stat change. The FIRST thing to check is:",
      choices: ["The reversing valve solenoid", "The stat's O/B configuration versus the equipment's energize-in-cooling/heating design", "The refrigerant charge", "The compressor windings"],
      answer: 1,
      explanation: "Correct: (b). A reversed O/B setting mimics a stuck valve exactly and costs nothing to check. (a) The valve becomes a suspect only after configuration, wiring, and the actual 24 V signal on O are proven. (c) Charge affects capacity, not which mode the system selects. (d) Windings cannot swap heating and cooling roles."
    },
    {
      q: "Second-stage heat staging triggered by run time works by:",
      choices: ["Calling stage 2 whenever the room is 0.1°F below setpoint", "Calling stage 2 after stage 1 has run a set time without satisfying the stat", "Disabling stage 1 permanently", "Reading the outdoor sensor only"],
      answer: 1,
      explanation: "Correct: (b). Time-based staging infers 'stage 1 is not enough' from an unsatisfied continuous run. (a) describes an absurdly tight temperature trigger, not time staging, and would short-cycle staging. (c) Stage 1 remains the base; stage 2 supplements it. (d) Outdoor lockouts exist but are a separate feature, not the definition of time staging."
    },
    {
      q: "Wire color at a thermostat disagrees with the terminal it's landed on (yellow wire on W). The correct practice is to trust:",
      choices: ["The color, always", "The terminal letter and meter verification, because function follows the connection, not the insulation color", "Whichever the homeowner prefers", "The older of the two labels"],
      answer: 1,
      explanation: "Correct: (b). Equipment responds to where a conductor lands; colors are convention only and prior installers deviate. (a) 'Always trust color' is exactly the habit that creates miswire callbacks. (c) Preference doesn't change circuit function. (d) Age establishes nothing about correctness — verify electrically."
    },
    {
      q: "Emergency heat mode on a heat pump thermostat:",
      choices: ["Runs the heat pump and strips together at maximum", "Locks out the heat pump and runs auxiliary heat alone", "Reverses the reversing valve manually", "Is the same as a defrost cycle"],
      answer: 1,
      explanation: "Correct: (b). Emergency heat exists for a failed heat pump: the aux becomes the only source. (a) describes maximum demand operation, which is not a mode and defeats the purpose when the pump is broken. (c) The valve follows the call; emergency heat doesn't give manual valve control. (d) Defrost is a brief automatic cycle, not a user heating mode."
    },
    {
      q: "The heat anticipator in a mechanical thermostat was adjusted to match:",
      choices: ["The room's square footage", "The current draw of the heating control circuit it switched", "The outdoor temperature", "The transformer's VA rating alone"],
      answer: 1,
      explanation: "Correct: (b). The anticipator is a small heater in series with the heating circuit; its setting had to match that circuit's amperage to add the right amount of artificial heat and end calls without overshoot. (a) Room size affects load, not the electrical setting. (c) Outdoor temperature doesn't change the current the anticipator sees. (d) The VA rating is related to capacity but the adjustment was made to the actual measured circuit current."
    }
  ],
  studyGuide: `
<h3>Module 4 — Thermostats: Quick Reference</h3>
<ul>
<li><strong>Generations:</strong> mechanical (bimetal + anticipator) → electronic (thermistor + cycle rate) → programmable (schedules/setback) → smart/communicating (two-way digital).</li>
<li><strong>Terminals:</strong> R = 24 VAC hot. C = common (stat's own power). W = heat call. Y = cooling call (contactor). G = fan call. O/B = reversing valve. W2 = stage-2/aux heat. Y2 = stage-2 cooling. E = emergency heat.</li>
<li><strong>A call = 24 V on the function terminal measured to C.</strong> Verify by meter; colors (R red, W white, Y yellow, G green, C blue/black, O orange) are convention, not law.</li>
<li><strong>Furnace heat:</strong> stat makes R→W; the furnace BOARD runs inducer, ignition, and the blower after warm-up. G is for cooling/fan-only.</li>
<li><strong>Staging triggers:</strong> temperature drift beyond setpoint, elapsed first-stage run time, or a blend. Constant stage-2 = staging set too eager or stage 1 underdelivering.</li>
<li><strong>Heat pump:</strong> stat must be configured O (energize valve in cooling) or B (energize in heating) to match the equipment — wrong setting reverses the modes. Aux heat supplements; emergency heat replaces the pump.</li>
<li><strong>No C wire</strong> + smart stat = reboot/brownout complaints; cure is a real C conductor or an approved common-maker kit.</li>
</ul>
<p><strong>Diagnosis mantra:</strong> stat asks, wiring carries, board decides, safeties veto, equipment acts — test the chain in that order.</p>`
};
