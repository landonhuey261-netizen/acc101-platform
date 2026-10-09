// HVAC 127 - Module 5: Control Circuits & Relays
module.exports = {
  number: 5,
  slug: "control-circuits-and-relays",
  title: "Control Circuits & Relays",
  estTime: "3–4 hours",
  objectives: [
    "Explain how a relay and a contactor work, and state the practical difference between them.",
    "Read NO and NC contacts in a ladder diagram and predict circuit behavior when a coil energizes.",
    "Describe interlocks and give two HVAC examples where one load must prove another.",
    "Explain the safety chain concept and troubleshoot a series chain by voltage measurement.",
    "Apply ladder-diagram reading to a real control circuit, and state the role controls play on low-pressure chiller safety strings."
  ],
  sections: [
    {
      heading: "Relays and Contactors: Switches That Switch Switches",
      html: `
<p>A <strong>relay</strong> is an electrically operated switch: energize its <strong>coil</strong> with a small control current and its <strong>contacts</strong> open or close a separate circuit — often a bigger one. This is the fundamental trick of all control work: a thermostat that could never carry a blower motor's current can carry a relay coil's fraction of an amp, and the relay carries the motor. Coils and contacts are electrically isolated from each other; the only connection between them is magnetism and a spring.</p>
<ul>
<li><strong>Relay:</strong> general-purpose, smaller contact ratings, often plug-in with a visible armature; used for fan relays, isolation, and logic.</li>
<li><strong>Contactor:</strong> a relay built for punishment — heavy contacts rated for motor and compressor loads, pulled in by a coil (commonly 24 VAC in residential/light commercial). Same principle, bigger muscles.</li>
<li><strong>Starter:</strong> a contactor plus overload protection for a motor, common on larger equipment.</li>
</ul>
<div class="callout"><strong>Key idea:</strong> Every relay question reduces to two: <em>Is the coil energized?</em> and <em>Did the contacts do what the coil commanded?</em> A coil can be powered with welded contacts, or healthy contacts can sit idle behind a dead coil — test both halves, always.</div>
<p>Contact vocabulary: <strong>NO</strong> contacts are open with the coil at rest and close when it energizes; <strong>NC</strong> contacts are closed at rest and open on energization. "At rest/de-energized" defines the "normal" state — the same normal-position language from Module 1, now switching electricity instead of valves.</p>`
    },
    {
      heading: "Ladder Diagrams: Reading Control Intent",
      html: `
<p>A <strong>ladder diagram</strong> draws a control circuit as two vertical power rails with horizontal <strong>rungs</strong> between them. Each rung is one complete story: power enters from the left rail, passes through switches/contacts (the logic), energizes a load (the coil or device at the right), and returns to the right rail. Time runs top to bottom — rungs are read in order, and contacts drawn on a rung belong to coils that may live on other rungs, linked by matching labels.</p>
<div class="formula">One rung reads like a sentence: [conditions in series/parallel] → [load]. All series conditions must be true for the load to energize.</div>
<p><strong>Worked example — a cooling rung:</strong> Left rail (R, 24 VAC) → thermostat Y contact → high-pressure cutout (NC) → low-pressure cutout (NC) → contactor coil → right rail (C). Read it aloud: "The contactor energizes when the stat calls AND pressure safeties are closed." Each NC safety in series is a veto: any one opening kills the rung. Contacts in <strong>parallel</strong> mean OR — either path energizes the load — used for alternate call sources like a stat contact paralleled by a test jumper point or a board relay.</p>
<div class="callout"><strong>Key idea:</strong> Series = AND (all must pass), parallel = OR (any may pass). With those two rules and the coil/contact labels, you can read the control intent of any ladder ever drawn — including the ones in Modules 7 and 10.</div>
<p>Ladder diagrams are <em>schematic</em>: they show electrical truth, not physical location. The thermostat contact drawn two inches from the contactor coil may be sixty feet of wire away in the building. The wiring diagram (pictorial) shows where things live; the ladder shows how they think. Troubleshooting uses both.</p>`
    },
    {
      heading: "Interlocks: Making Loads Prove Each Other",
      html: `
<p>An <strong>interlock</strong> is an arrangement that prevents one device from operating unless another is in the right state. Interlocks are wired logic — usually a contact of one device placed in series with the coil of another:</p>
<ul>
<li><strong>Fan proving before heat:</strong> an airflow-proving contact must close before electric heat strips can energize — heat without airflow is a fire looking for a place to happen.</li>
<li><strong>Pump/valve interlock:</strong> a chiller is prevented from starting until its chilled-water pump runs and a flow switch proves water is actually moving.</li>
<li><strong>Opposing-action interlock:</strong> heating and cooling outputs wired so both can never energize together — the controls equivalent of a transmission that can't be in drive and reverse at once.</li>
</ul>
<div class="callout"><strong>Key idea:</strong> When a load won't run, look for its interlock chain before its power supply. An interlocked load that is "dead" is frequently a load being correctly refused because its proving partner isn't running.</div>
<p>Interlocks also appear inside safety design for large machines: on low-pressure chillers (the EPA Type III equipment family), the control string typically demands proof of chilled-water and condenser-water flow, oil pressure where applicable, and purge-unit readiness before the compressor may start — a safety chain with industrial stakes, covered again from the controls side in Module 7.</p>`
    },
    {
      heading: "Safety Chains and Series Troubleshooting",
      html: `
<p>Collect every NC safety switch protecting one function into a series string and you have a <strong>safety chain</strong>: limit switches, pressure cutouts, rollout switches, condensate float switches, freeze stats — any one opening disables the protected load. Chains are simple, reliable, and the source of the classic field puzzle: "everything is dead and nothing looks broken." Everything in series means every link is a suspect, and visual inspection clears none of them.</p>
<p>The meter method is decisive. With the chain powered and a call present, measure voltage across each device in the string, one at a time:</p>
<ul>
<li><strong>~0 V across a device</strong> = it is closed (conducting) — voltage has no reason to appear across a good connection.</li>
<li><strong>Full control voltage (≈24 V) across a device</strong> = it is open — the entire supply is dropping across the one break in the string.</li>
</ul>
<div class="formula">In a series chain, the open device shows the voltage. Walk the chain; the meter points at the culprit.</div>
<div class="callout"><strong>Common mistake:</strong> Jumpering safeties "just to test" and leaving the jumper in. A jumper is a legitimate 60-second diagnostic in your hand and a liability forever after. If you install one, it leaves with you or it never goes on.</div>
<p>Also respect what each safety is telling you: a limit that opened did so because temperature went somewhere it shouldn't. Replacing the limit without finding the airflow failure that cooked it schedules the sequel call. Safeties are witnesses, not just suspects.</p>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Relay = coil + contacts, isolated from each other; contactor = the heavy-duty motor-rated version; starter = contactor + overloads.</li>
<li>NO closes on energize; NC opens on energize. "Normal" always means de-energized.</li>
<li>Ladder: rails are power, rungs are stories; series = AND, parallel = OR; read control intent before touching hardware.</li>
<li>Interlocks make loads prove each other (airflow before heat, flow before chiller start, never heat+cool together).</li>
<li>Safety chain troubleshooting: full voltage appears across the open device; ~0 V across closed ones.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Testing only the coil or only the contacts. Welded contacts with a dead coil and a live coil with burnt contacts both present as "the relay is bad" — but they are different failures with different causes (load-side abuse versus control-side problems), and the cause is what keeps the new part alive.</div>
<div class="callout"><strong>Common mistake:</strong> Reading a ladder as a map of the building. It is a map of the logic. Wire runs, terminal locations, and physical routing live on the wiring/pictorial diagram.</div>
<p><strong>NATE Core link:</strong> Basic Electrical is the largest single block of the NATE Core exam. Coil/contact behavior, series safety strings, and ladder reading are exactly its home turf — fluency here pays off across every later course in this program.</p>`
    }
  ],
  keyTerms: [
    { term: "Relay", def: "An electrically operated switch: a coil that, when energized, moves contacts to switch a separate circuit." },
    { term: "Coil", def: "The electromagnet winding of a relay or contactor; the control-side input of the device." },
    { term: "Contacts", def: "The switching elements of a relay, rated to carry the load circuit's current." },
    { term: "Contactor", def: "A heavy-duty relay with contacts rated for motor/compressor loads, commonly with a 24 VAC coil in light equipment." },
    { term: "Motor starter", def: "A contactor combined with overload protection for a motor." },
    { term: "NO contact", def: "Normally open: open when the coil is de-energized, closes when energized." },
    { term: "NC contact", def: "Normally closed: closed when the coil is de-energized, opens when energized." },
    { term: "Ladder diagram", def: "A schematic with two power rails and horizontal rungs showing control logic; series = AND, parallel = OR." },
    { term: "Rung", def: "One horizontal path in a ladder diagram: conditions in series/parallel feeding one load." },
    { term: "Interlock", def: "Wiring that permits a load to run only when another device is in the required state." },
    { term: "Safety chain", def: "A series string of protective switches, any one of which opening disables the protected load." },
    { term: "Limit switch", def: "A protective switch that opens on excessive temperature or travel, interrupting a circuit." },
    { term: "Pressure cutout", def: "A protective switch opening on unsafe high or low refrigerant pressure." },
    { term: "Float switch", def: "A switch actuated by liquid level, used in condensate pans to stop cooling before overflow." },
    { term: "Welded contacts", def: "Relay contacts fused shut by excessive current or rapid cycling, so the load never turns off." },
    { term: "Holding (seal-in) contact", def: "An NO contact of a relay wired in parallel with its start signal to keep its own coil energized." },
    { term: "Overload protector", def: "A device that opens a motor circuit on excessive current/heat, protecting the motor." },
    { term: "Schematic vs pictorial", def: "Schematic (ladder) shows electrical logic; pictorial (wiring) shows physical layout and wire routing." }
  ],
  video: {
    title: "How to Identify and Wire a Heat Only Unit - Gas Furnace",
    embedUrl: "https://www.youtube.com/embed/Fx6O_rUrByk",
    note: "A field wiring walk-through of a heat-only gas furnace's low-voltage control circuit. Watch how the thermostat call, safety devices, and control components chain together in a real unit, and compare the physical wiring you see with the ladder-diagram 'story' of the same circuit from this module.",
    more: []
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A fan relay's coil measures 24 V across it, but the blower never starts. The blower motor and its power feed test good separately. What relay failure explains this, and what second failure would produce the opposite symptom (blower never stops)?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Coil energized but load not switched = the <strong>contacts failed open/burned</strong> — the control half works, the power half doesn't. Step 2: Opposite symptom (load never off) = <strong>welded contacts</strong> fused closed, or an NC/NO selection error. Step 3: Lesson — always test coil and contacts as two separate devices that happen to share a housing.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> Draw in words the ladder rung for a condenser fan that must run when (the compressor contactor is energized) AND (the head-pressure fan-cycling switch is closed). Then state what changes if either condition alone should run the fan.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: AND = series: rail → contactor auxiliary NO contact → fan-cycling switch contact → fan contactor/motor load → rail. Step 2: Both contacts must close for the fan to run. Step 3: For OR logic, wire the two contacts in <strong>parallel</strong> — either path completes the rung. The words 'and' and 'or' in a sequence of operation are literally wiring instructions.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A cooling safety chain contains four NC devices. With a call present and chain powered, you measure across them: 0 V, 0 V, 24 V, 0 V. Which device is open, and what does the 0 V across the others prove?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: In a series string the full supply drops across the single open break: the <strong>third device</strong> (24 V across it) is open. Step 2: 0 V across each other device proves each is closed and conducting — voltage only appears across a gap. Step 3: Now identify what that third device protects against and why it tripped before replacing or resetting anything.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> Electric heat strips are interlocked with an airflow-proving switch. A call for heat energizes the strip contactor coil only when the proving contact is closed. The strips are dead and the blower runs normally — but the proving switch is a pressure type sensing a duct that is partially blocked downstream. Explain the fault chain.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The interlock is doing its job based on what it senses: the blocked duct changed the pressure picture, so the proving switch reads 'not enough airflow' and refuses. Step 2: The strips and their control are healthy; the <strong>airflow</strong> is the fault. Step 3: Clear the restriction, verify real airflow, and the proving contact closes. Replacing the switch or strips would leave the actual protection event unaddressed.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> Why is a contactor — not a small general-purpose relay — specified to switch a compressor, even though both are 'just coils and contacts'?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Compressor circuits draw high running current and much higher locked-rotor inrush, thousands of times a season. Step 2: A contactor's contacts are sized, spaced, and arc-managed for exactly that motor duty; a light relay's contacts would pit, overheat, and weld. Step 3: Ratings are the difference between a switch and the right switch — match contact rating and duty type to the load, not just coil voltage.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A technician jumpers a high-limit switch 'to get the customer heat' and leaves it. Write the two-sentence professional objection.</p>",
      solution: "<p><strong>Answer (example):</strong> Step 1: 'That jumper removes the only device that stops this furnace from overheating, so the fault that opened the limit — usually lost airflow — is now free to damage the heat exchanger or worse.' Step 2: 'A jumper is a diagnostic I hold in my hand for a minute, never a repair I leave in a customer's home.' If a safety cannot be restored, the equipment stays down and the conversation is about why.</p>"
    }
  ],
  quiz: [
    {
      q: "The coil and the contacts of a relay are:",
      choices: ["The same circuit, so testing one tests both", "Electrically isolated; each half must be tested separately", "Interchangeable in the field", "Only present on contactors"],
      answer: 1,
      explanation: "Correct: (b). Magnetism links them; no conductor does. A powered coil can sit above burned contacts and vice versa. (a) is the classic testing error — coil voltage proves nothing about contact condition. (c) Coils and contacts have wholly different ratings and roles. (d) Every relay has both halves; a contactor is a heavy-duty relay."
    },
    {
      q: "In a ladder diagram, two contacts drawn in series in a rung mean:",
      choices: ["Either one can energize the load (OR)", "Both must close to energize the load (AND)", "The load is shorted", "The circuit is drawn incorrectly"],
      answer: 1,
      explanation: "Correct: (b). Series is a single path — every gate on it must pass current. (a) describes parallel contacts. (c) A short is an unintended path, not a drawn logic condition. (d) Series logic is the most common construction in control ladders, e.g., call contact plus safety chain feeding a coil."
    },
    {
      q: "In a powered series safety chain with a call present, the open device is identified by measuring:",
      choices: ["0 V across it", "Full control voltage across it", "Its resistance with power on", "Its temperature"],
      answer: 1,
      explanation: "Correct: (b). The whole supply drops across the one break in the string. (a) 0 V across a device means it is closed and conducting. (c) Resistance is never measured on a live circuit — meaningless readings and a threatened meter. (d) Temperature tells you nothing reliable about a switch's contact state."
    },
    {
      q: "An interlock that prevents electric heat from energizing without proven airflow exists because:",
      choices: ["It saves energy on mild days", "Heat without airflow creates a dangerous overheat/fire condition", "The strips need airflow to generate heat", "It makes the ladder diagram simpler"],
      answer: 1,
      explanation: "Correct: (b). Strip heat with no air movement overheats elements and surrounding materials rapidly. (a) Energy saving is not the purpose; it is protection logic. (c) Strips generate heat regardless — that is precisely the hazard. (d) Interlocks add components; simplicity is not their motive."
    },
    {
      q: "A contactor differs from a general-purpose relay mainly in:",
      choices: ["It has no coil", "Its contacts are rated for heavy motor/compressor duty and inrush", "It only works on DC", "It cannot be used with 24 V coils"],
      answer: 1,
      explanation: "Correct: (b). Same principle, but contacts are built for high current, locked-rotor inrush, and arc duty. (a) A contactor absolutely has a coil — that is how the stat controls it. (c) Contactors serve AC power circuits routinely. (d) 24 VAC coils are the residential/light-commercial standard for contactors."
    },
    {
      q: "A ladder diagram tells you primarily:",
      choices: ["The physical location of every component in the building", "The electrical logic — what must be true for each load to energize", "The wire colors used by the installer", "The age of the equipment"],
      answer: 1,
      explanation: "Correct: (b). Ladders are schematics of intent: conditions and loads. (a) Physical location belongs to pictorial/wiring diagrams and the building itself. (c) Colors are an installation convention not shown by logic diagrams. (d) Nothing in a ladder encodes age."
    },
    {
      q: "A low-pressure chiller's start-permissive string (flow proofs, oil and purge readiness) is an example of:",
      choices: ["An open-loop timer", "An interlock/safety chain that must all be true before the compressor may start", "A modulating control loop", "A thermostat staging timer"],
      answer: 1,
      explanation: "Correct: (b). Series permissives = AND logic; any missing proof refuses the start, protecting a very expensive machine. (a) No timer measures these conditions; each is sensed. (c) The string is two-position logic, not proportional positioning. (d) Staging timers sequence capacity, not safety permissives."
    },
    {
      q: "A load runs continuously even with its calling contact open and coil de-energized. The most likely relay fault is:",
      choices: ["An open coil", "Welded contacts", "A missing C wire", "An oversized transformer"],
      answer: 1,
      explanation: "Correct: (b). Contacts fused shut carry the load with no coil involvement at all. (a) An open coil produces the opposite fault — the load never energizes. (c) A missing common affects thermostat power, not a load running uncontrolled through a de-energized relay. (d) Transformer sizing affects control voltage, not contact welding behavior."
    }
  ],
  studyGuide: `
<h3>Module 5 — Control Circuits & Relays: Quick Reference</h3>
<ul>
<li><strong>Relay anatomy:</strong> coil (control side) + contacts (load side), electrically isolated. Contactor = heavy-duty relay for motor loads. Starter = contactor + overloads.</li>
<li><strong>Normal = de-energized.</strong> NO: open at rest, closes on energize. NC: closed at rest, opens on energize.</li>
<li><strong>Ladder reading:</strong> rails = power; each rung = conditions → load. Series = AND; parallel = OR. Ladders show logic, not location.</li>
<li><strong>Interlocks:</strong> airflow proven before strip heat; flow proven before chiller start; heat and cool never together. A "dead" interlocked load is often a correctly refused load.</li>
<li><strong>Safety chain method:</strong> powered chain, call present — measure across each device: full ~24 V = the open one; ~0 V = closed/good. Never measure resistance on a live circuit.</li>
<li><strong>Jumpers:</strong> a 60-second diagnostic in your hand only. Never leave one. A tripped safety is a witness — find the condition that tripped it.</li>
<li><strong>Two-half test rule:</strong> coil power proven AND contact action proven, separately, every time.</li>
</ul>
<p><strong>Reading habit:</strong> say each rung aloud as a sentence — "contactor energizes when call AND safeties closed" — before your hands touch anything.</p>`
};
