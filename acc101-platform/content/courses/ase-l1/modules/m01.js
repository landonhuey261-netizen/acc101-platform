// ase-l1 - Module 1: Advanced Powertrain Diagnosis
module.exports = {
  "number": 1,
  "slug": "advanced-powertrain-diagnosis",
  "title": "Advanced Powertrain Diagnosis",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what makes L1 diagnosis different from A8 diagnosis: harder faults, more systems, less margin for guessing.",
    "Work the diagnostic method on an advanced fault: complaint, clues, theory, test, proof.",
    "Use fuel trim readings to separate a mixture problem from a sensor problem.",
    "Combine scan-tool data, codes, and symptoms into one theory instead of chasing each one separately.",
    "Recognize when a fault is in the powertrain computer's inputs, its outputs, or the mechanical engine underneath."
  ],
  "sections": [
    {
      "heading": "What Advanced Means",
      "html": "<p>A8 taught you to diagnose engine performance: misfires, fuel trim, sensors, and emissions. L1 asks for the same skills on harder faults — faults that involve more than one system, faults that come and go, and faults where the scan tool's data seems to contradict itself. The difference is not new tools. It is deeper reasoning: holding several readings in your head at once and asking what single fault explains all of them.</p>\n<p>An advanced fault rarely announces itself with one code. It arrives as a complaint — a hesitation, a stall, a failed emissions test — plus a handful of codes and a screen full of data that does not obviously agree. The technician who wins is the one who slows down, lists what is known, and forms a theory that explains every clue, not just the loudest one.</p>\n<div class=\"callout\"><strong>Key idea:</strong> L1 is not new tools — it is deeper reasoning. One fault must explain every clue: the complaint, the codes, and all of the data. If your theory leaves a clue unexplained, the theory is wrong.</div>"
    },
    {
      "heading": "The Method, at L1 Level",
      "html": "<p>The method is the one from the A9 course, tightened up. <strong>Complaint:</strong> what the driver experiences, in their words, and exactly when it happens — cold or hot, idle or load, always or sometimes. <strong>Clues:</strong> every code, every live-data reading that looks wrong, every smell, sound, and service-history fact. <strong>Theory:</strong> one fault that explains all of the clues, stated plainly, with alternatives listed. <strong>Test:</strong> the check that separates the theory from the alternatives. <strong>Proof:</strong> the repair, verified under the original conditions.</p>\n<p>At L1 level, the 'when' in the complaint matters as much as the 'what'. A fault that appears only under load is a different fault from one that appears only at idle. A fault that appears only when hot is a different fault from one that appears only when cold. Write the conditions down before you form a theory — they are half the diagnosis.</p>\n<p>And keep the alternatives honest. A theory with no alternatives is a guess wearing a lab coat. List the two or three other faults that could explain the same clues, and design one test that separates them. That single discipline — one test, several suspects — is what separates advanced diagnosis from parts-replacing.</p>"
    },
    {
      "heading": "Fuel Trim: The Computer's Confession",
      "html": "<p>Fuel trim is the most powerful single reading in advanced diagnosis, because it is the computer telling you what it thinks is wrong. <strong>Short-term fuel trim (STFT)</strong> is the computer's immediate correction: positive means it is adding fuel because the mixture looks lean; negative means it is taking fuel away because the mixture looks rich. <strong>Long-term fuel trim (LTFT)</strong> is the learned correction over time — the computer's memory of what it usually has to do.</p>\n<p>Read them together, and read them at idle and under load. High positive trims at idle that fall toward normal under load point toward a vacuum leak: the leak adds unmetered air that matters most when total air flow is small. High positive trims at all speeds point toward a fuel delivery problem or a sensor misreading air flow. Negative trims point toward a rich condition: too much fuel, or a sensor lying about it.</p>\n<p>The crucial L1 skill is telling a mixture problem from a sensor problem. A vacuum leak and a lying oxygen sensor can both show positive trims — but the downstream oxygen sensor, the tailpipe readings, and the trim behavior under load separate them. If the exhaust is genuinely lean, the downstream sensor agrees; if only the upstream sensor says lean while the downstream says otherwise, the sensor is the suspect. Never trust one sensor's word alone.</p>"
    },
    {
      "heading": "Inputs, Outputs, or Mechanical: Three Buckets",
      "html": "<p>Every powertrain fault lives in one of three buckets. <strong>Inputs:</strong> the sensors feeding the computer — air flow, oxygen, temperature, position, pressure. A lying input makes the computer decide wrongly. <strong>Outputs:</strong> the actuators the computer drives — injectors, coils, solenoids, valves. A failed output does not do what it is told. <strong>Mechanical:</strong> the engine underneath — compression, vacuum, exhaust flow, timing. A mechanical fault cannot be fixed by any computer command.</p>\n<p>Sorting a fault into a bucket is the first decision, and the scan tool helps: command an actuator and watch whether it moves (outputs), compare a sensor against an independent check (inputs), and test compression and vacuum directly (mechanical). A misfire that moves when you swap a coil is an output fault. A misfire that stays with the cylinder after swapping coil, plug, and injector is mechanical.</p>\n<p>Advanced faults often cross buckets — a mechanical fault that makes a sensor read wrong, or a bad input that damages an output over time. That is why the theory must explain every clue: a single-bucket answer that leaves a code unexplained is probably wrong, and the unexplained clue is pointing at the second fault.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>L1 means harder faults: more systems, intermittent behavior, data that seems to contradict itself. The method is the same; the reasoning is deeper.</li>\n<li>Method: complaint (with conditions) → clues → one theory explaining every clue → one test separating the alternatives → proof under the original conditions.</li>\n<li>Fuel trim: STFT is the immediate correction, LTFT is the learned correction. Positive = adding fuel (lean); negative = removing fuel (rich). Idle vs load behavior separates a vacuum leak from a fuel problem.</li>\n<li>Mixture problem vs sensor problem: check the downstream sensor and the trim behavior under load — never trust one sensor alone.</li>\n<li>Three buckets: inputs (sensors), outputs (actuators), mechanical (the engine itself). Sort the fault first, then test within the bucket.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Forming a theory that explains the loudest clue and ignoring the rest. If a code or a reading does not fit your theory, the theory is wrong — the unexplained clue is the diagnosis.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Clearing codes and hoping. A cleared code with no repair is a lost clue — the freeze-frame data and the conditions that set it are the most valuable information the truck will ever give you.</div>\n<p><strong>Ready-to-work link:</strong> If you can read fuel trims at idle and under load and say whether the fault is a leak, a fuel problem, or a lying sensor, you have this module. Module 2 goes inside the computer: powertrain controls and OBD II.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Short-term fuel trim (STFT)", "def": "The computer's immediate fuel correction: positive means adding fuel (mixture looks lean), negative means removing fuel (mixture looks rich)." },
    { "term": "Long-term fuel trim (LTFT)", "def": "The computer's learned fuel correction over time — its memory of what it usually has to add or remove." },
    { "term": "Vacuum leak", "def": "Unmetered air entering the engine past the air flow sensor, leaning the mixture — worst at idle, when total air flow is small." },
    { "term": "Freeze-frame data", "def": "The snapshot of sensor readings the computer stores when a code sets — the conditions of the fault, frozen in time." },
    { "term": "Downstream oxygen sensor", "def": "The oxygen sensor after the catalytic converter; used to check the converter and to cross-check the upstream sensor." },
    { "term": "Upstream oxygen sensor", "def": "The oxygen sensor before the catalytic converter; the computer's main mixture feedback sensor." },
    { "term": "Input", "def": "A sensor feeding information to the computer — air flow, oxygen, temperature, position, pressure." },
    { "term": "Output", "def": "An actuator the computer drives — injector, coil, solenoid, valve." },
    { "term": "Mechanical fault", "def": "A fault in the engine itself — compression, vacuum, exhaust flow, timing — that no computer command can fix." },
    { "term": "Intermittent fault", "def": "A fault that comes and goes with temperature, vibration, or load — the hardest kind to prove." },
    { "term": "Theory", "def": "One fault that explains every clue, stated before testing, with alternatives listed." },
    { "term": "Mixture problem", "def": "A real lean or rich condition in the engine, as opposed to a sensor merely reporting one." }
  ],
  "video": {
    "title": "How to Diagnose a Misfire (ScannerDanner, uScope)",
    "embedUrl": "https://www.youtube.com/embed/zQXeMqlBagI",
    "note": "ScannerDanner works a real misfire with a scope: primary ignition current, coil behavior, and how misfire data is calculated by the computer. Watch how he forms a theory from the data before touching a part — that is the L1 method in action.",
    "more": [
      { "title": "False Rich O2 Sensor Diagnosis: Fuel Trims & Downstream Data (ScannerDanner)", "url": "https://www.youtube.com/watch?v=H6lY42u19VM" }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Fuel trims are high and positive at idle but fall toward normal under load. What is the most likely cause, and why does the load change matter?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A vacuum leak is most likely. Step 2: The leak adds a fixed amount of unmetered air, which is a large share of total air flow at idle but a small share under load — so the trims are worst at idle and improve as the throttle opens.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> The upstream oxygen sensor reports lean and the computer adds fuel, but the downstream sensor reports rich. What does that contradiction suggest, and what is the next test?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: It suggests the upstream sensor is lying — the exhaust is not genuinely lean, or the downstream sensor would agree. Step 2: Next, cross-check the upstream sensor against tailpipe readings and the trim behavior under load, and test the sensor itself before replacing fuel parts.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A misfire stays with cylinder 2 after swapping its coil, plug, and injector with cylinder 4. Which bucket is the fault in, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The mechanical bucket. Step 2: Swapping the outputs (coil, plug, injector) moved the suspects, but the misfire stayed with the cylinder — so the fault is in the cylinder itself: compression, a valve, or a gasket, not in any swapped part.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A customer says the car hesitates, but only when hot and only under load. Why does the 'when' matter more than the 'what' here?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Hot-and-under-load narrows the suspects to faults that appear with heat and demand — a failing coil breaking down when hot, a fuel pump that cannot keep up under load, or an exhaust restriction. Step 2: Without the conditions, the suspect list is the whole engine; with them, it is three parts — so the conditions are half the diagnosis.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A technician clears a code without writing down the freeze-frame data, then cannot reproduce the fault. What was lost, and why does it matter?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The freeze-frame data — the sensor readings at the moment the code set — was lost. Step 2: That snapshot held the conditions of the fault (speed, load, temperature, trims), which are the best guide to reproducing it; without it, the technician is guessing at conditions.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Your theory explains the misfire code but not the oxygen sensor code on the same car. What should you do?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Treat the theory as wrong — one fault must explain every clue. Step 2: Look for a single fault that explains both codes, or accept that there are two faults, and test for both before replacing anything.</p>"
    }
  ],
  "quiz": [
    {
      "q": "High positive fuel trims at idle that fall toward normal under load most likely point to:",
      "choices": ["A failing fuel pump", "A vacuum leak adding unmetered air", "A clogged catalytic converter", "A dead oxygen sensor"],
      "answer": 1,
      "explanation": "Correct: (b). A leak's fixed air volume matters most at idle, when total air flow is small, and matters less under load. (a) A weak pump would show worst under load, not at idle. (c) A clogged converter restricts exhaust at all speeds and causes lost power. (d) A dead sensor would set a sensor code and a default value, not this trim pattern."
    },
    {
      "q": "Short-term fuel trim (STFT) is:",
      "choices": ["The computer's learned correction over time", "The computer's immediate fuel correction — positive means adding fuel, negative means removing it", "A measure of exhaust temperature", "The ignition timing advance"],
      "answer": 1,
      "explanation": "Correct: (b). STFT is the immediate, moment-to-moment correction. (a) That is long-term fuel trim. (c) Exhaust temperature has its own sensor. (d) Timing advance is a separate value."
    },
    {
      "q": "The upstream sensor says lean but the downstream sensor says rich. The best next step is to:",
      "choices": ["Replace the fuel pump", "Suspect the upstream sensor is lying and cross-check it before replacing fuel parts", "Replace the catalytic converter", "Clear the codes and hope"],
      "answer": 1,
      "explanation": "Correct: (b). When two sensors disagree, the mixture may be fine and one sensor may be lying — test the sensor first. (a) A pump fault would make both sensors agree the mixture is lean. (c) The converter is not the suspect when the sensors disagree about the mixture. (d) Clearing codes destroys the evidence."
    },
    {
      "q": "A misfire that stays with its cylinder after swapping coil, plug, and injector is most likely:",
      "choices": ["A bad coil", "A mechanical fault in that cylinder — compression, valve, or gasket", "A bad injector", "A wiring fault in the swapped parts"],
      "answer": 1,
      "explanation": "Correct: (b). Swapping moved all the output suspects, but the misfire stayed — so the cylinder itself is at fault. (a) and (c) The coil and injector were swapped away and the misfire did not follow. (d) The wiring to the swapped parts moved with them in effect; the fault stayed with the cylinder."
    },
    {
      "q": "Freeze-frame data is valuable because it:",
      "choices": ["Clears the code", "Records the sensor readings at the moment the code set — the conditions of the fault", "Tests the actuators", "Measures compression"],
      "answer": 1,
      "explanation": "Correct: (b). Freeze-frame is the snapshot of conditions when the fault occurred. (a) Clearing is a separate command that destroys the data. (c) Actuator tests are commanded separately. (d) Compression is measured with a gauge, not from freeze-frame."
    },
    {
      "q": "Negative fuel trims mean the computer is:",
      "choices": ["Adding fuel because the mixture looks lean", "Removing fuel because the mixture looks rich", "Ignoring the oxygen sensor", "Shutting the engine off"],
      "answer": 1,
      "explanation": "Correct: (b). Negative trim is fuel being taken away from a rich-looking mixture. (a) That is positive trim. (c) The computer is using the sensor, not ignoring it. (d) Trim never shuts the engine off."
    },
    {
      "q": "The three buckets of powertrain faults are:",
      "choices": ["Fuel, air, and spark", "Inputs, outputs, and mechanical", "Codes, data, and symptoms", "Hot, cold, and intermittent"],
      "answer": 1,
      "explanation": "Correct: (b). Inputs (sensors), outputs (actuators), and mechanical (the engine itself). (a) Those are engine systems, not diagnostic buckets. (c) Those are sources of clues. (d) Those are conditions, not fault categories."
    },
    {
      "q": "Your theory explains the misfire code but not the oxygen sensor code. You should:",
      "choices": ["Ignore the oxygen code — it is probably old", "Treat the theory as wrong and look for one fault explaining both codes, or accept two faults", "Replace the oxygen sensor first", "Clear both codes"],
      "answer": 1,
      "explanation": "Correct: (b). One fault must explain every clue; an unexplained code means the theory is incomplete. (a) Ignoring a clue is how faults get missed. (c) Replacing a part before testing is parts-replacing. (d) Clearing destroys the evidence."
    }
  ],
  "studyGuide": "\n<h3>Module 1 — Advanced Powertrain Diagnosis: Quick Reference</h3>\n<p><strong>L1 difference:</strong> Harder faults, more systems, data that seems to contradict itself. Same method, deeper reasoning.</p>\n<p><strong>Method:</strong> Complaint (with conditions) → clues → one theory explaining every clue → one test separating alternatives → proof.</p>\n<p><strong>Fuel trim:</strong> STFT = immediate correction · LTFT = learned correction · Positive = adding fuel (lean) · Negative = removing fuel (rich).</p>\n<p><strong>Idle vs load:</strong> Worst at idle, better under load = vacuum leak. Bad at all speeds = fuel delivery or air-flow sensor.</p>\n<p><strong>Mixture vs sensor:</strong> Cross-check with the downstream sensor and tailpipe readings — never trust one sensor alone.</p>\n<p><strong>Three buckets:</strong> Inputs (sensors) · Outputs (actuators) · Mechanical (engine). Sort first, test within the bucket.</p>\n<p><strong>Watch out:</strong> Never clear a code without writing down the freeze-frame data first.</p>\n<p><strong>Self-check:</strong> Read a set of fuel trims at idle and under load and name the most likely cause.</p>\n"
};
