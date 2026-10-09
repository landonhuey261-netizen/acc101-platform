// HVAC 132 - Module 5: Gas Furnace Sequence of Operation
module.exports = {
  number: 5,
  slug: "gas-furnace-sequence-of-operation",
  title: "Gas Furnace Sequence of Operation",
  estTime: "3–4 hours",
  objectives: [
    "Recite the complete heat sequence of a modern induced-draft furnace from thermostat call to post-purge, in order.",
    "Explain the purpose of each timed step: inducer pre-purge, pressure-switch proof, igniter warm-up, trial for ignition, flame proof, blower delay, and post-purge.",
    "Assign each safety in the chain — limit, rollout, pressure switch, flame sensor — to the step it guards.",
    "Use the sequence as a diagnostic map: given where a furnace stops, name the components that step implicates.",
    "Explain how the sequence differs on a natural-draft standing-pilot furnace and on a condensing furnace.",
    "Describe what the control board's fault codes can and cannot tell you."
  ],
  sections: [
    {
      heading: "The Sequence Is the Diagnosis",
      html: `
<p>A modern furnace is not a device that 'turns on'; it is a choreography of proofs, each step earning the next. Learn the choreography cold and troubleshooting becomes geography: <em>where did it stop?</em> tells you <em>what to test</em>. Here is the full sequence for a typical induced-draft furnace with hot surface ignition (module variations follow):</p>
<ol>
<li><strong>Call for heat.</strong> The thermostat closes the W circuit (24 V) to the control board.</li>
<li><strong>Safety pre-check.</strong> The board confirms the limit and rollout switches are closed (a furnace sitting open-circuit on a safety does nothing at all).</li>
<li><strong>Inducer start & pre-purge.</strong> The draft inducer runs, clearing the exchanger and vent of any residual gases and establishing draft.</li>
<li><strong>Pressure-switch proof.</strong> The pressure switch must close, proving the inducer is actually moving air (not just humming) and the vent path is open enough to draw against.</li>
<li><strong>Igniter warm-up.</strong> The HSI is energized and glows for a timed warm-up (spark systems skip to step 6 with the sparker active).</li>
<li><strong>Trial for ignition.</strong> The gas valve opens; flame must be proven within seconds (Module 3).</li>
<li><strong>Flame proof & sustained fire.</strong> The board sees microamps; the igniter de-energizes; the burner continues under continuous flame supervision.</li>
<li><strong>Blower on-delay.</strong> After a timed delay (or at a sensed temperature on older fan-limit controls), the indoor blower starts — late enough that the first air out of the registers is warm, not a cold blast.</li>
<li><strong>Run.</strong> The board supervises flame signal, limit, rollout, and pressure switch continuously. Any safety opening ends the burner; the board decides (per fault) whether to retry or lock out.</li>
<li><strong>Call satisfied.</strong> Thermostat opens W: gas valve closes, inducer runs a short <strong>post-purge</strong> to clear the exchanger, blower continues for an adjustable off-delay to harvest residual heat, then stops.</li>
</ol>
<div class="callout"><strong>Key idea:</strong> Every step answers a question: Is it safe to start? Is draft real? Did it light? Did it stay lit? Is heat moving? Diagnose by finding the first unanswered question.</div>`
    },
    {
      heading: "The Safety Chain, Step by Step",
      html: `
<p>Each safety in the chain guards a specific step — which is why reading the chain tells you the fault:</p>
<ul>
<li><strong>Pressure switch (guards steps 3–4 and the whole run).</strong> Proves draft before ignition is allowed and keeps proving it: if venting fails mid-run (blocked flue, failed inducer, ponded condensate in a Category IV vent), the switch opens and the board stops the burner. A furnace that runs the inducer forever without lighting is stuck at this gate until proven otherwise.</li>
<li><strong>Limit switch (guards the run).</strong> A temperature-actuated switch on the exchanger/blower housing that opens if the furnace overheats — from low airflow (dirty filter, closed registers, failing blower) far more often than from over-firing. It auto-resets when cool on most designs; repeated trips shorten its life and always indicate an airflow or firing-rate cause upstream (Module 11 treats limits in depth).</li>
<li><strong>Rollout switch (guards the burner opening).</strong> Sits where flame escaping the burner box would lick past; opens on rollout (Module 3) and is commonly manual-reset — a tripped rollout is a 'find the cause' alarm (blocked exchanger, failed inducer, over-firing), never a 'reset and leave' item.</li>
<li><strong>Flame sensor (guards step 6 onward).</strong> Continuous proof of flame (Module 3). Loss of signal = valve closes within seconds.</li>
</ul>
<p>Notice the architectural principle: <strong>safeties are wired in series with the things they guard</strong>, so any single open safety stops the protected function. The series chain is why one failed $15 switch can idle a whole furnace — and why jumping a safety 'to test' must be a minutes-long, attended diagnostic act by a professional, never a leaving condition.</p>
<div class="callout"><strong>Key idea:</strong> Stuck at inducer → pressure switch/draft. Lights then dies → flame proof. Runs then stops hot → limit/airflow. Dead entirely with a tripped manual-reset → rollout told you a story; read it before resetting.</div>`
    },
    {
      heading: "Timing Steps and Why They Exist",
      html: `
<p>Four delays in the sequence are pure engineering judgment, and understanding their purposes keeps you from 'fixing' them:</p>
<ul>
<li><strong>Pre-purge (inducer before ignition).</strong> Clears any combustible mixture left in the exchanger — from a previous failed trial or a weeping valve — so ignition never meets a pre-loaded exchanger. Skipping it is how delayed ignitions go bang.</li>
<li><strong>Igniter warm-up.</strong> An HSI needs seconds to reach ignition temperature; opening the gas valve against a cold igniter would dump raw fuel. The board times the warm-up to the igniter's specification.</li>
<li><strong>Blower on-delay.</strong> Heat exchangers need a head start: air blown across a cold exchanger gives the customer a long cold blast and can condense moisture inside a warm-climate exchanger. The delay (fixed timing on most boards, temperature-sensed on fan-limit legacy controls) balances comfort against exchanger stress.</li>
<li><strong>Blower off-delay & post-purge.</strong> After the burner stops, the exchanger still holds a charge of heat; the blower harvests it into the house (free efficiency) and the inducer's post-purge sweeps the last flue gas out so no combustion products linger to spill at shutdown.</li>
</ul>
<p>When a customer complains 'the fan runs forever after the heat stops' or 'cold air blows at first,' translate the complaint into a timing step before touching anything: half the time the system is performing its design, and the correct repair is an explanation. The other half — delays wildly out of family with the design — points to the board or a stuck relay/contactor, diagnosed by timing the actual steps against the manufacturer's sequence chart, which is printed in the install manual and often inside the blower door.</p>
<div class="callout"><strong>Key idea:</strong> Purges protect against accumulated gas; warm-up protects against unlit gas; blower delays protect comfort and the exchanger. Measure the timing before condemning it — the sequence chart is a specification, not a suggestion.</div>`
    },
    {
      heading: "Variations: Standing Pilot and Condensing Furnaces",
      html: `
<p><strong>Natural-draft, standing-pilot furnace.</strong> The choreography shrinks: thermostat call opens the main gas valve against an already-burning, thermocouple-proven pilot; a <strong>fan-limit control</strong> (bimetal probe in the airstream) starts the blower when the exchanger warms and stops it when it cools, and its limit side guards overheating. There is no inducer, no pressure switch, no board to flash codes. The safety chain is thinner — pilot proving plus limit — which is why venting inspection (Module 4) carries even more weight on these units: buoyancy is the only draft there is.</p>
<p><strong>Condensing (Category IV) furnace.</strong> The same skeleton, with additions: the inducer must also pull against the secondary exchanger and a condensate-filled trap; many designs add a second pressure switch or a multi-tap switch proving different stages; two-stage and modulating models insert gas-valve staging and inducer speed changes into the run step; and the condensate trap itself becomes a sequence component — a dry or blocked trap can prevent the pressure switch from proving (Module 4's ponded vent, Module 11's nuisance trips).</p>
<p><strong>Two-stage operation.</strong> Most calls run on low fire (reduced manifold pressure stage and inducer speed) for quiet, even heat; the board escalates to high fire only when the call runs long or the thermostat demands it. Diagnosis inherits a rule: verify which stage a complaint belongs to before measuring — manifold pressure has <em>two</em> correct values on a two-stage valve, and the rating plate lists both.</p>
<div class="callout"><strong>Key idea:</strong> Same skeleton, different costumes. Identify the platform first — pilot/board, mid-efficiency/condensing, single/two-stage — then run the sequence map that belongs to it.</div>`
    },
    {
      heading: "Working the Sequence as a Diagnostic Map",
      html: `
<p>Field method, in order:</p>
<ol>
<li><strong>Establish the call.</strong> Confirm 24 V on W at the board with the thermostat calling. No W signal = the fault is upstream (thermostat, wiring) and the furnace is innocent.</li>
<li><strong>Watch one full attempt, start to finish,</strong> with the door switch held as designed (never taped as a leaving condition). Note exactly where the sequence halts; resist the urge to cycle power first — the fault code is stored evidence.</li>
<li><strong>Test the step that failed, at the component the step names.</strong> Inducer spins but no light → test the pressure switch (does it close? does the board see it? is the port or tube blocked with debris or water?). Igniter glows, valve clicks, no flame → fuel side: inlet/manifold pressure, valve coil. Flame for five seconds → flame signal in µA.</li>
<li><strong>Fix the cause, then run the whole sequence again</strong> including a satisfied-thermostat shutdown, and finish with the Module 1 safety spine: combustion test, CO check, vent inspection.</li>
</ol>
<p>The discipline that makes this fast is refusing to shotgun parts. Each step's proof is measurable — volts, inches of water column at the switch, microamps, timed delays — and the board's fault code narrows the neighborhood before you lift a tool. Technicians who 'replace the board' on sequence faults are usually replacing the messenger; boards fail, but they fail <em>last</em> in probability after switches, sensors, grounds, and connections.</p>
<div class="callout"><strong>Key idea:</strong> Observe → locate the halted step → measure that step's proof → repair the cause → re-run the entire sequence. The sequence is the fastest diagnostic instrument you own, and it's free.</div>`
    }
  ],
  keyTerms: [
    { term: "Sequence of operation", def: "The ordered series of events and proofs a control steps through from a call for heat to shutdown." },
    { term: "Pre-purge", def: "Inducer operation before ignition that clears residual gases from the exchanger and vent." },
    { term: "Post-purge", def: "Inducer operation after the burner stops that sweeps remaining flue gas from the exchanger and vent." },
    { term: "Pressure switch", def: "A pressure-actuated switch that proves inducer draft before and during firing; opens on insufficient draft." },
    { term: "Limit switch", def: "A temperature-actuated safety that opens on overheating, most often from inadequate airflow." },
    { term: "Rollout switch", def: "A safety near the burner opening that opens if flame rolls out of the burner box; commonly manual-reset." },
    { term: "Blower on-delay", def: "The timed (or temperature-sensed) pause between burner ignition and blower start so the first delivered air is warm." },
    { term: "Blower off-delay", def: "The period the blower runs after burner shutdown to harvest residual exchanger heat." },
    { term: "Fan-limit control", def: "A legacy bimetal control that starts/stops the blower by exchanger temperature and provides limit protection." },
    { term: "W terminal", def: "The thermostat/board terminal carrying the 24 V call for heat." },
    { term: "Integrated furnace control (IFC)", def: "The circuit board that sequences ignition, supervises safeties, and reports fault codes." },
    { term: "Fault code", def: "An LED flash pattern (or display) by which the board reports which safety or step failed." },
    { term: "Lockout", def: "The control's stop state after repeated failed trials or certain safety faults, until a timed reset or power cycle." },
    { term: "Safety chain", def: "The series wiring of limit, rollout, and other safeties so any open switch stops the protected function." },
    { term: "Two-stage firing", def: "Operation with low-fire and high-fire rates (valve stages and often inducer speeds) selected by run time or thermostat demand." },
    { term: "Draft inducer", def: "The motor/fan that exhausts flue gas and establishes draft on induced-draft appliances." },
    { term: "Call for heat", def: "The thermostat's 24 V demand signal that initiates the heating sequence." },
    { term: "Proving", def: "Positive verification (pressure, flame current) that a required condition exists before the sequence advances." }
  ],
  video: {
    title: "HVAC Tech Gas Valve Replacement on Lennox Furnace - How to use Sequence of Operations to Troubleshoot",
    embedUrl: "https://www.youtube.com/embed/8Qm1K9EgQTk",
    note: "A field service call diagnosed by walking the sequence of operations step by step until the failure point — exactly the method this module teaches. Note how the technician resists swapping parts until the halted step identifies the suspect.",
    more: [
      { title: "How to Identify and Wire a Heat Only Unit - Gas Furnace", url: "https://www.youtube.com/watch?v=Fx6O_rUrByk" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> Put these events in correct order for an induced-draft HSI furnace and justify the position of the pressure-switch proof: (a) gas valve opens; (b) thermostat calls; (c) blower starts; (d) inducer starts; (e) flame proven; (f) pressure switch closes; (g) igniter warm-up.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Order — (b) thermostat calls → (d) inducer starts (pre-purge) → (f) pressure switch closes → (g) igniter warm-up → (a) gas valve opens → (e) flame proven → (c) blower starts after its on-delay. Step 2: The pressure-switch proof must sit <em>before</em> ignition for the same reason a pilot must be proven before a main valve opens: gas may only be admitted into an environment known to be working. Step 3: If the inducer has failed or the vent is blocked, proving fails and no fuel is ever introduced — the failure is announced as a quiet no-light, not as a furnace full of raw gas. Step 4: Note (c): the blower waits for its delay even though flame is proven, because delivered air should be warm — sequencing serves safety first, then comfort.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A furnace does the following: thermostat calls, inducer runs — and runs — and nothing else ever happens. No igniter glow, no codes read yet. List the probable causes in diagnostic order and the test for the first two.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The sequence is halted at the pressure-switch proof gate (step 4 of the sequence). Causes, in order: (1) pressure switch not closing — blocked or cracked pressure tube/port (debris, condensate), failed switch diaphragm/contacts; (2) draft genuinely insufficient — weak/failed inducer (check capacitor, wheel obstruction), blocked vent or exchanger passage; (3) board not registering the closure — wiring/connection fault between switch and board. Step 2: Test for cause 1: with the inducer running, measure voltage across the pressure switch — voltage present across a supposedly closed switch means it never closed; then inspect/clear the tube and port, and test switch continuity while applying suction (or use a manometer tee to read actual draft against the switch's rated setpoint). Step 3: Test for cause 2: manometer on the vent/inducer pressure — compare with the switch's stamped rating; low draft sends you to the inducer wheel and vent path. Step 4: Read the fault code before all of this next time — most boards announce this exact fault, saving the order of operations.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> Explain why the blower does not start at the same moment as the burner, and why it keeps running after the burner stops. Name both delays and one customer complaint each prevents.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Blower <strong>on-delay</strong>: the exchanger starts cold; immediate airflow would deliver a long blast of cold air and stress the exchanger. The delay (timed, or temperature-sensed on fan-limit systems) lets the exchanger warm first. Complaint prevented: 'the furnace blows cold air every time it starts.' Step 2: Blower <strong>off-delay</strong>: at shutdown the exchanger still holds usable heat; running the blower harvests it into the house instead of wasting it up the vent, and it cools the exchanger gently. Complaint prevented: 'we pay for heat that stays in the furnace' — and, paired with the inducer post-purge, 'puffs of flue smell at shutdown.' Step 3: Both delays are design features; a complaint about them is usually education, while a delay that is wildly long or absent is a board/relay problem measured against the sequence chart.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> On a call, you find a rollout switch tripped. The homeowner says it happened once last winter and a neighbor 'just pushed the little button back in.' Write your response: what a tripped rollout means, what must happen before this furnace runs again, and why resetting alone is malpractice.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Meaning — a rollout switch trips because flame physically escaped the burner box and washed across the switch's location. That is the appliance announcing a violent fault, not a nuisance: candidates include a blocked or cracked heat exchanger passage, a failed/weak inducer, a blocked vent, severe over-firing, or delayed ignition. Step 2: Before reset: inspect for heat damage at the burner opening and wiring, check the exchanger and vent path, verify inducer operation and draft, check manifold pressure and clock the input if anything looks over-fired, and watch a full ignition for rollout or lazy flame behavior. Step 3: Why reset-alone is malpractice: the switch is a manual-reset device precisely so a human must investigate; resetting without cause-finding returns a furnace to service with the same condition that produced flame outside its box — the next event can ignite wiring or nearby materials instead of just tripping a switch. The button is the end of the repair, not the repair.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A two-stage furnace's complaint: 'great heat on mild days, house loses ground on the coldest nights.' Connect the symptom to the sequence, name what stage behavior you would verify, and list two faults that produce exactly this pattern.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The pattern — adequate on low demand, inadequate at design load — is the signature of a furnace living on low fire and never escalating. Step 2: Verify staging: confirm the thermostat/board staging logic (W2 present or board timer escalation), watch a long call to see whether the board commands high fire (inducer speed change, valve stage change) and whether manifold pressure reaches the high-fire value on the rating plate. Step 3: Fault 1 — second-stage gas valve solenoid/coil failure: command present, high-fire pressure never arrives; test for voltage at the HI terminal and manifold pressure response. Step 4: Fault 2 — staging never commanded: a single-stage thermostat wired without W2 on a board whose timer fallback was disabled, or a broken W2 conductor; the furnace literally never hears the request. Step 5: Both faults are invisible in October and miserable in January — which is why staging is verified on maintenance calls, not discovered on emergency ones.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> You arrive to find the furnace door switch taped down and a jumper across the pressure switch terminals, left by an unknown previous visitor; the furnace is 'working.' Describe your actions and reasoning, in order.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Treat the installation as unsafe until proven otherwise: the pressure switch was jumped because it was opening (or never closing) — meaning the appliance may be firing without proven draft, the exact condition that fills houses with CO and flue gas. Step 2: Shut the furnace down at the switch/breaker; remove the jumper and the tape; inform the homeowner plainly that the furnace cannot run like this and why. Step 3: Diagnose the underlying draft fault the jumper was hiding: pressure switch and tube/port, inducer performance, vent path (including condensate ponding if Category IV), with a manometer against the switch rating. Step 4: Repair the cause, restore all safeties to original wiring, run the full sequence, and complete a combustion test and ambient CO check. Step 5: Document everything on the ticket — what you found, what you removed, what you tested — because defeated safeties found in the field are both a life-safety event and a liability record. Reasoning throughout: a safety bypassed is a symptom; the disease is still in the vent path waiting for a worse day.</p>"
    }
  ],
  quiz: [
    {
      q: "In the standard induced-draft sequence, the pressure switch must close before:",
      choices: ["The blower starts", "The igniter warm-up and gas valve opening", "The thermostat is satisfied", "The post-purge ends"],
      answer: 1,
      explanation: "Correct: (b) Draft is proven before fuel is introduced — the switch closes after inducer start and gates igniter warm-up and the trial for ignition. (a) The blower starts much later (after flame proof plus on-delay) and is not gated by the switch directly. (c) The switch has nothing to do with the call ending. (d) Post-purge is the shutdown tail of the sequence, long after the proof did its work."
    },
    {
      q: "A furnace runs its inducer continuously but never attempts ignition. The sequence is halted at:",
      choices: ["Flame proving", "Pressure-switch proof of draft", "Blower on-delay", "Limit switch"],
      answer: 1,
      explanation: "Correct: (b) With the inducer running and nothing downstream happening, the board is waiting for the pressure switch to close — suspects are the switch, its tube/port, weak draft, or a blocked vent. (a) Flame proving happens after the valve opens, which never occurs here. (c) Blower delay is a post-ignition step. (d) An open limit would typically prevent the sequence from starting at all (dead furnace), not park it at the inducer."
    },
    {
      q: "The pre-purge at the start of the sequence exists to:",
      choices: ["Warm the heat exchanger gradually", "Clear any accumulated gases from the exchanger and vent before ignition", "Prove the blower motor works", "Cool the inducer motor"],
      answer: 1,
      explanation: "Correct: (b) Pre-purge sweeps out residual fuel or flue gas from prior cycles so the ignition trial starts with a known, clean exchanger. (a) Exchanger warming is the blower on-delay's concern, and pre-purge air is unheated anyway. (c) The inducer, not the blower, runs during pre-purge. (d) The inducer needs no cooling ritual; it runs through most of the cycle by design."
    },
    {
      q: "Which safety opening best matches the symptom 'furnace fires, heats the house air hotter and hotter at the registers, then stops mid-call and restarts a few minutes later, over and over'?",
      choices: ["Rollout switch", "Pressure switch", "High limit switch — the furnace is overheating, classically from restricted airflow", "Flame sensor"],
      answer: 2,
      explanation: "Correct: (c) Cycling on the limit produces exactly this rhythm: fire → overheat → limit opens → cool-down → auto-reset → refire, with register air noticeably too hot. (a) Rollout switches are generally manual-reset: one trip ends the show until a human intervenes. (b) A pressure-switch opening kills the burner promptly on draft loss, without the temperature build-up pattern. (d) Flame-signal loss kills the burner within seconds of ignition, not after long hot runs."
    },
    {
      q: "On a standing-pilot furnace, what starts and stops the blower?",
      choices: ["The control board's timers", "A fan-limit control sensing exchanger temperature", "The pressure switch", "The thermostat's G terminal on every call"],
      answer: 1,
      explanation: "Correct: (b) Legacy fan-limit controls use a bimetal probe in the exchanger airstream: warm enough → blower on; cooled down → blower off; too hot → limit opens. (a) There is no control board on a basic standing-pilot furnace. (c) Natural-draft furnaces have no pressure switch — there is no inducer draft to prove. (d) On some systems the stat can force the fan, but in heat mode the classic design belongs to the fan-limit control."
    },
    {
      q: "A condensing furnace adds which sequence-relevant component that a mid-efficiency furnace lacks?",
      choices: ["A second gas valve", "A condensate trap whose blockage can prevent pressure-switch proving", "A standing pilot", "A draft hood"],
      answer: 1,
      explanation: "Correct: (b) The condensate system is in the inducer's pressure world; a blocked or dry trap, or ponded vent water, changes the pressure the switch sees and produces draft-proving lockouts. (a) Two-stage furnaces have staged valves, but that's about firing rate, not condensation. (c) Pilots belong to older designs, not condensing ones. (d) Condensing furnaces are sealed/direct-vent — a draft hood would spill their positive-pressure flue gas into the room."
    },
    {
      q: "Why should you read the board's fault code before cycling power?",
      choices: ["Cycling power voids the warranty", "The code is stored evidence of which step failed, and cycling power may erase it", "The board needs to cool before restarting", "Fault codes change every cycle and must be averaged"],
      answer: 1,
      explanation: "Correct: (b) The code tells you which safety or step the board believes failed — free diagnostic direction that a power cycle can wipe. (a) Warranty claims are not affected by ordinary power cycling. (c) Boards do not need cool-down rituals. (d) Codes are not averaged; the current/last fault is the clue, read once and then tested against components."
    },
    {
      q: "During the run step, flame signal is suddenly lost. The board's correct response is to:",
      choices: ["Keep the valve open for 60 seconds in case the flame returns", "Close the gas valve within seconds and follow its retry/lockout logic", "Start the blower to clear the flame", "Raise manifold pressure automatically"],
      answer: 1,
      explanation: "Correct: (b) Unproven flame = unburned fuel flow; the valve closes almost immediately, and the board then applies its programmed retry-then-lockout policy. (a) Sixty seconds of raw gas into an exchanger is precisely the accumulation the trial timing exists to prevent. (c) The blower state is irrelevant to the flame emergency (and on many boards the blower state doesn't change at flame loss). (d) Boards do not compensate for lost flame by adding fuel — that converts a fault into a hazard."
    }
  ],
  studyGuide: `
<h3>Module 5 — Gas Furnace Sequence of Operation: Quick Reference</h3>
<p><strong>The sequence:</strong> Call (24 V on W) → safety pre-check → inducer pre-purge → <strong>pressure switch closes</strong> → igniter warm-up → trial for ignition → <strong>flame proven (µA)</strong> → blower on-delay → run (continuous supervision) → call ends → valve closes → inducer post-purge + blower off-delay.</p>
<p><strong>Halt-point map:</strong> nothing at all → power, W signal, open limit. Inducer only → pressure switch/tube/draft/vent. Glow, no flame → fuel/valve. Flame seconds only → flame proving. Long hot runs, cycling → limit/airflow. Manual-reset tripped → rollout: find the cause first.</p>
<p><strong>Safeties guard steps:</strong> pressure switch = draft before & during fire; flame sensor = flame while fuel flows; limit = overheating (usually airflow); rollout = flame escaping the box.</p>
<p><strong>Variants:</strong> standing pilot: thermocouple proving + fan-limit blower control, no board or pressure switch. Condensing: add trap/vent condensate to the draft story. Two-stage: two correct manifold pressures; verify staging (W2/timer).</p>
<p><strong>Method:</strong> read the fault code BEFORE cycling power; observe one full attempt; measure the halted step's proof (volts, draft in w.c., µA, timing); fix the cause; re-run the whole sequence; finish with combustion + CO checks.</p>
`
};
