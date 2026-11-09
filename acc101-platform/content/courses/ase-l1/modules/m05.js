// ase-l1 - Module 5: Advanced Ignition Diagnosis
module.exports = {
  "number": 5,
  "slug": "advanced-ignition-diagnosis",
  "title": "Advanced Ignition Diagnosis",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain how a coil builds and releases spark energy: dwell, firing, and burn time.",
    "Read a secondary ignition waveform: firing line, burn line, and coil oscillations.",
    "Use primary current ramping to judge a coil's health without removing it.",
    "Diagnose load-dependent misfires and coil failures that only appear when hot.",
    "Separate an ignition misfire from a fuel or mechanical misfire using tests, not guesses."
  ],
  "sections": [
    {
      "heading": "How a Coil Makes a Spark",
      "html": "<p>An ignition coil is a transformer with a job: turn battery voltage into the high voltage a spark plug needs. When the computer switches the coil's primary circuit on, current flows through the primary winding and builds a magnetic field — this is the <strong>dwell</strong> period, the charging time. When the computer switches the circuit off, the magnetic field collapses, and that collapse induces a high voltage in the secondary winding — enough to jump the spark plug gap and light the mixture.</p>\n<p>Three things decide whether the spark is good. <strong>Dwell</strong> must be long enough to fully charge the coil; too short and the spark is weak. The <strong>firing voltage</strong> must be high enough to jump the gap; a worn plug or a wide gap demands more voltage than the coil can give. And the <strong>burn time</strong> — how long the spark stays lit — must be long enough to light the mixture; too short and the mixture never catches.</p>\n<p>Modern engines use <strong>coil-on-plug (COP)</strong> ignition: one coil sitting directly on each spark plug, with no plug wires at all. Each coil has its own driver in the computer, its own connector, and its own failure modes. A COP system removes the wires as a suspect — and makes the coil itself, its connector, and its driver the places to look.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Dwell charges the coil, collapse fires the spark, burn time lights the mixture. A weak spark can come from any of the three — and the waveform shows which one.</div>"
    },
    {
      "heading": "Reading Waveforms: Secondary Patterns and Primary Current Ramping",
      "html": "<p>A secondary ignition waveform is a picture of the spark event, and it has three parts. The <strong>firing line</strong> is the tall vertical spike at the start: the voltage needed to jump the plug gap. A firing line that is too tall means the gap is too wide, the plug is worn, or the mixture is hard to light. A firing line that is too short can mean a fouled plug or a shorted plug wire — the voltage found an easier path to ground.</p>\n<p>The <strong>burn line</strong> is the flatter section after the spike: the voltage while the spark is lit and the mixture is burning. It should be steady and last long enough to light the charge. A burn line that is too short means the spark died early; a burn line that is ragged or hashy means the mixture is burning unevenly, or the plug is fouled.</p>\n<p>After the burn line come the <strong>coil oscillations</strong> — the ringing as the coil's remaining energy dissipates. Healthy oscillations are even and gradually fade. Missing or uneven oscillations can mean a failing coil or a problem in the secondary circuit. Comparing the waveform across cylinders is the fastest way to find the odd one out: the healthy cylinders all look alike, and the faulty one does not.</p>\n<p>Primary current ramping watches the coil charge, using a low-amp clamp around the coil's primary wire and a scope. As the computer switches the coil on, current climbs in a smooth ramp to its peak, holds briefly, then drops to zero when the coil fires. The shape of that ramp tells the story: a smooth, steady climb to the expected peak means a healthy coil and driver.</p>\n<p>A ramp that climbs too slowly or never reaches its peak means high resistance in the primary circuit — a failing coil, a bad connection, or a weak driver. A ramp with a sharp step or a sudden drop means the coil is shorting internally. A ramp that looks right on a cold coil but collapses when the coil is hot means the coil is breaking down with temperature — the classic hot misfire that passes every cold test.</p>\n<p>Current ramping has one great advantage: it tests the coil in place, under real operating conditions, without removing anything. A coil that tests fine on the bench and fails on the engine is a coil that fails hot or under load — and ramping catches it where a resistance check cannot.</p>"
    },
    {
      "heading": "Load-Dependent Misfires: Fine at Idle, Failing Under Load",
      "html": "<p>The most instructive ignition fault is the one that only appears under load. At idle, cylinder pressure is low, so the spark needs little voltage to jump the gap — a weak coil, a worn plug, or a failing driver can all keep up. Under load, cylinder pressure climbs sharply, and the voltage needed to jump the gap climbs with it. The marginal part that worked at idle now fails — and the engine misfires exactly when the driver asks for power.</p>\n<p>That pattern — smooth idle, hesitation or misfire on acceleration — points straight at the ignition system first, before fuel or compression. The test is to load the engine and watch: a snap-throttle test on the scope, a power-balance test under load, or a coil swap that moves the misfire to another cylinder. If the misfire moves with the coil, the coil is the fault; if it stays, look at the plug, the driver, or the cylinder itself.</p>\n<p>Heat adds a second dimension. A coil that works cold and fails hot has insulation breaking down with temperature, or a connection that opens as parts expand. The test is the same — reproduce the conditions. A coil that only fails hot must be tested hot; a cold test that passes proves nothing about a hot fault.</p>"
    },
    {
      "heading": "Ignition, Fuel, or Mechanical: Separating the Three",
      "html": "<p>A misfire has three possible homes — ignition, fuel, or mechanical — and the tests separate them cleanly. <strong>Ignition:</strong> swap the coil and plug with another cylinder. If the misfire moves, the fault moved with the part. <strong>Fuel:</strong> swap the injector the same way, or watch the fuel trim and the oxygen sensor for that bank. If the misfire follows the injector, the fuel system is the fault.</p>\n<p><strong>Mechanical:</strong> if the misfire stays with the cylinder after swapping coil, plug, and injector, test compression on that cylinder and compare it with the others. Low compression, a leaking valve, or a failed gasket cannot be fixed by any electrical part — and the swap test is what proves it without removing the head.</p>\n<p>One more check costs nothing: look at the plug. A plug from the misfiring cylinder tells a story — fouled with fuel, coated with oil, worn to a wide gap, or cracked. The plug is the witness to what happened inside that cylinder, and reading it is a skill worth building alongside the scope.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Coil operation: dwell charges, collapse fires, burn time lights the mixture. Weakness in any of the three makes a weak spark.</li>\n<li>Secondary waveform: firing line (voltage to jump the gap), burn line (voltage while the spark is lit), coil oscillations (energy dissipating). Compare cylinders — the odd one out is the fault.</li>\n<li>Primary current ramping tests the coil in place, under real conditions — including hot, where bench tests fail.</li>\n<li>Load-dependent misfire (fine at idle, failing under load) points at ignition first: cylinder pressure climbs with load, and the spark needs more voltage to jump the gap.</li>\n<li>Separate the three: swap coil and plug (ignition), swap injector (fuel), compression test (mechanical). The misfire follows the fault.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Testing a hot-only misfire on a cold engine. A coil that fails hot passes every cold test — reproduce the conditions, then test.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Replacing plugs for a misfire that stays with the cylinder after a swap. If the misfire did not move with the coil, plug, or injector, the fault is mechanical — test compression before buying parts.</div>\n<p><strong>Ready-to-work link:</strong> If you can read a secondary waveform's three parts and explain why a misfire appears under load but not at idle, you have this module. Module 6 covers the other half of the burn: advanced fuel and air induction.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Dwell", "def": "The charging time: how long current flows through the coil's primary winding, building its magnetic field." },
    { "term": "Firing line", "def": "The tall spike at the start of a secondary waveform — the voltage needed to jump the spark plug gap." },
    { "term": "Burn line", "def": "The flatter section of a secondary waveform — the voltage while the spark is lit and the mixture burns." },
    { "term": "Coil oscillations", "def": "The ringing after the burn line as the coil's remaining energy dissipates; even and fading is healthy." },
    { "term": "Coil-on-plug (COP)", "def": "An ignition system with one coil on each spark plug and no plug wires." },
    { "term": "Primary current ramp", "def": "A scope trace of current climbing through the coil's primary winding — its shape judges coil and driver health." },
    { "term": "Load-dependent misfire", "def": "A misfire that appears under load but not at idle, because cylinder pressure — and the voltage the spark needs — climbs with load." },
    { "term": "Secondary waveform", "def": "A scope picture of the spark event: firing line, burn line, and oscillations." },
    { "term": "Swap test", "def": "Moving a suspect part to another cylinder to see whether the misfire follows it." },
    { "term": "Power-balance test", "def": "A test that disables each cylinder in turn and measures the RPM drop, finding a weak cylinder." },
    { "term": "Fouled plug", "def": "A spark plug coated with fuel, oil, or carbon so it cannot spark properly." },
    { "term": "Coil driver", "def": "The computer's switching circuit that turns a coil's primary current on and off." }
  ],
  "video": {
    "title": "Picking Up the Secondary Ignition Pattern Using an Oscilloscope (JTech)",
    "embedUrl": "https://www.youtube.com/embed/e59atXyNNPA",
    "note": "Instructor Rick Zeppetini shows how to pick up the secondary ignition pattern with a scope and an inductive pickup — the firing line, the burn line, and how the pattern changes on a misfiring cylinder. Watch for the comparison across cylinders: the healthy ones look alike, and the faulty one stands out.",
    "more": [
      { "title": "Coil-on-Plug Ignition Testing with a PicoScope COP Probe", "url": "https://www.youtube.com/watch?v=5X9RgErnKGE" }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A secondary waveform shows a firing line that is much taller than the other cylinders. What does that suggest, and what should you check?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A tall firing line means the spark needed unusually high voltage to jump the gap. Step 2: Check the plug gap and condition — a worn plug or a wide gap demands more voltage — and check for a lean mixture, which is also harder to light.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A primary current ramp climbs slowly and never reaches its expected peak. What does that suggest?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: High resistance in the primary circuit. Step 2: The suspects are a failing coil, a bad connection, or a weak driver — the current cannot build properly, so the spark will be weak.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> An engine idles smoothly but misfires on acceleration, and the misfire moves when the coil is swapped to another cylinder. What is the fault?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The coil is the fault. Step 2: The misfire followed the coil, and the load-dependent pattern fits ignition — cylinder pressure climbs under load, and the weak coil cannot produce the voltage the gap needs at that pressure.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A misfire stays with cylinder 3 after swapping its coil, plug, and injector with cylinder 1. What is the next test, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A compression test on cylinder 3, compared with the others. Step 2: The swap moved every output suspect, but the misfire stayed — so the fault is mechanical in the cylinder itself: compression, a valve, or a gasket.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A coil passes every test when cold but the engine misfires once it is hot. Why did the cold tests pass, and how do you catch the fault?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The coil's insulation breaks down with temperature, or a connection opens as parts expand — so it only fails hot. Step 2: Catch it by testing hot: reproduce the conditions with a drive or a heat soak, then ramp the coil or scope the waveform while it is misfiring.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A burn line on the secondary waveform is very short. What does that mean for the mixture?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The spark died early — it did not stay lit long enough to light the charge reliably. Step 2: A short burn line means a weak spark or a mixture that is hard to light, and the cylinder may misfire even though the firing line looked normal.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Dwell is:",
      "choices": ["The voltage needed to jump the plug gap", "The charging time — how long current flows through the coil's primary winding, building its magnetic field", "The time the spark stays lit", "The coil's resistance"],
      "answer": 1,
      "explanation": "Correct: (b). Dwell is the charge time; too short and the spark is weak. (a) That is the firing voltage, shown by the firing line. (c) That is burn time. (d) Resistance is a separate measurement."
    },
    {
      "q": "A firing line that is much taller than the other cylinders suggests:",
      "choices": ["A fouled plug", "A worn plug or wide gap demanding more voltage to jump it", "A shorted plug wire", "A healthy coil"],
      "answer": 1,
      "explanation": "Correct: (b). A tall firing line means unusually high voltage was needed — a wide gap or a mixture hard to light. (a) A fouled plug usually shows a short firing line, as voltage finds an easier path. (c) A short also lowers the firing line. (d) A healthy coil shows a firing line like the other cylinders."
    },
    {
      "q": "The burn line on a secondary waveform shows:",
      "choices": ["The voltage needed to jump the gap", "The voltage while the spark is lit and the mixture is burning", "The coil's primary current", "The battery voltage"],
      "answer": 1,
      "explanation": "Correct: (b). The burn line is the flatter section after the firing spike, while the spark burns. (a) That is the firing line. (c) Primary current is a separate ramp trace. (d) Battery voltage is not shown on a secondary waveform."
    },
    {
      "q": "A misfire that appears under load but not at idle points at ignition first because:",
      "choices": ["Fuel pressure is highest at idle", "Cylinder pressure climbs with load, so the spark needs more voltage to jump the gap — a weak coil fails there first", "The computer turns the coils off at idle", "Compression is lowest under load"],
      "answer": 1,
      "explanation": "Correct: (b). Higher cylinder pressure demands higher firing voltage, exposing a marginal coil or plug. (a) Fuel pressure does not explain an ignition pattern. (c) The coils fire at idle too. (d) Compression is highest, not lowest, under load."
    },
    {
      "q": "Primary current ramping is valuable because it:",
      "choices": ["Measures spark plug gap", "Tests the coil in place, under real conditions — including hot, where bench tests fail", "Replaces the spark plugs", "Checks the fuel pressure"],
      "answer": 1,
      "explanation": "Correct: (b). Ramping watches the coil charge on the engine, hot or cold, without removing it. (a) Gap is measured with a feeler gauge. (c) Ramping tests, it does not replace parts. (d) Fuel pressure is a separate test."
    },
    {
      "q": "A misfire moves to another cylinder when the coil is swapped. The fault is:",
      "choices": ["Mechanical, in the original cylinder", "The coil that was moved", "The fuel injector", "The computer"],
      "answer": 1,
      "explanation": "Correct: (b). The misfire followed the coil, proving the coil is the fault. (a) A mechanical fault stays with its cylinder. (c) The injector was not swapped. (d) The computer drives all coils; one moving misfire is not a computer fault."
    },
    {
      "q": "A primary current ramp that climbs too slowly and never reaches its peak suggests:",
      "choices": ["A healthy coil", "High resistance in the primary circuit — a failing coil, bad connection, or weak driver", "A shorted spark plug", "A full fuel tank"],
      "answer": 1,
      "explanation": "Correct: (b). Slow current build means resistance is limiting the charge. (a) A healthy coil ramps smoothly to its peak. (c) A shorted plug affects the secondary side, not the primary ramp. (d) Fuel level is unrelated."
    },
    {
      "q": "Coil-on-plug (COP) ignition means:",
      "choices": ["One coil serves all cylinders through plug wires", "One coil sits directly on each spark plug, with no plug wires", "The coil is mounted on the firewall", "The plugs fire in pairs"],
      "answer": 1,
      "explanation": "Correct: (b). COP puts a coil on each plug and removes the wires as a suspect. (a) That is a distributor or coil-pack system. (c) Mounting location is not the definition. (d) Waste-spark systems fire in pairs; COP fires each plug alone."
    }
  ],
  "studyGuide": "\n<h3>Module 5 — Advanced Ignition Diagnosis: Quick Reference</h3>\n<p><strong>Coil:</strong> Dwell charges → collapse fires → burn time lights the mixture. Weakness in any of the three = weak spark.</p>\n<p><strong>Secondary waveform:</strong> Firing line (voltage to jump the gap) · Burn line (voltage while the spark is lit) · Oscillations (energy fading). Compare cylinders.</p>\n<p><strong>Primary ramping:</strong> Tests the coil in place, hot or cold. Slow climb or low peak = high resistance in the primary circuit.</p>\n<p><strong>Load misfire:</strong> Fine at idle, failing under load = ignition first. Cylinder pressure climbs with load, demanding more firing voltage.</p>\n<p><strong>Separate the three:</strong> Swap coil and plug (ignition) · Swap injector (fuel) · Compression test (mechanical). The misfire follows the fault.</p>\n<p><strong>Watch out:</strong> Test a hot-only misfire hot. A cold test that passes proves nothing about a hot fault.</p>\n<p><strong>Self-check:</strong> Read a secondary waveform's three parts and explain a load-dependent misfire.</p>\n"
};
