// ase-l1 - Module 9: Intermittent-Fault Strategies
module.exports = {
  "number": 9,
  "slug": "intermittent-fault-strategies",
  "title": "Intermittent-Fault Strategies",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain why intermittent faults are the hardest to diagnose — and the most expensive to guess at.",
    "Use the conditions of the fault (hot, cold, wet, vibration, load) to narrow the suspects.",
    "Apply the wiggle test, heat test, and road test with recording to make the fault appear.",
    "Use freeze-frame data, pending codes, and Mode $06 to reconstruct a fault that is not present now.",
    "Know when to stop testing, explain the situation honestly, and set up the next visit to catch the fault."
  ],
  "sections": [
    {
      "heading": "Why Intermittents Are the Hardest Faults",
      "html": "<p>An intermittent fault is one that comes and goes — present on Tuesday, gone on Wednesday, back on Friday. It is the hardest kind of fault because diagnosis depends on observing the fault, and an intermittent fault refuses to be observed on schedule. The vehicle can pass every test in the shop and fail on the road home, and the technician who replaces parts on a guess will replace several before the fault is ever seen.</p>\n<p>The cost of guessing is what makes intermittents expensive. Each wrong part costs money and time, and each wrong part also destroys evidence — a new part changes the vehicle, so the fault's pattern changes too, and the trail goes cold. The discipline of intermittent diagnosis is the opposite of guessing: observe, record, reproduce, and only then replace.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Intermittents refuse to be observed on schedule — so the job is to make the fault appear, on purpose, under controlled conditions. Guessing destroys evidence; reproducing creates it.</div>"
    },
    {
      "heading": "The Conditions Are the Diagnosis",
      "html": "<p>Every intermittent fault has conditions — the circumstances in which it appears — and the conditions narrow the suspects more than any test. <strong>Hot only:</strong> a coil breaking down with temperature, a connection opening as parts expand, a sensor drifting when hot. <strong>Cold only:</strong> a connection that only makes contact when contracted, a sensor that only reads wrong when cold, fuel that only misbehaves before warm-up.</p>\n<p><strong>Wet only:</strong> water getting into a connector, a cracked coil or wire that arcs when damp, a sensor shorting in the rain. <strong>Vibration or bumps only:</strong> a loose connector, a chafed wire that touches ground when the harness moves, a cracked solder joint. <strong>Load only:</strong> a weak pump or coil that keeps up at idle and fails under demand. <strong>After a time delay:</strong> a component that fails as it warms up over minutes of driving.</p>\n<p>Interview the driver like a detective. When exactly does it happen? How long after starting? Hot or cold? Wet or dry? Smooth road or bumps? Idle or accelerating? The answers are the test plan — and a driver who is asked properly will often hand you the diagnosis in the first minute.</p>"
    },
    {
      "heading": "Making the Fault Appear, and Reconstructing One That Is Not There Now",
      "html": "<p>Once the conditions are known, reproduce them. The <strong>wiggle test</strong> moves the harness and connectors at the suspect circuit while watching live data or a scope: a reading that glitches with the wiggle is a connection fault, found. The <strong>heat test</strong> warms a suspect component — a coil, a sensor, a module — with a heat gun or a hot soak, while watching for the fault to appear. The <strong>tap test</strong> taps a suspect part lightly: a fault that appears with a tap is a cracked joint or a loose internal connection.</p>\n<p>The <strong>road test with recording</strong> is the most powerful tool of all: drive the vehicle under the fault's conditions with the scan tool recording, or with the scope set to capture. When the fault happens on the road, the recording holds it — the readings, the codes, the exact moment. A fault caught on a recording is a fault that can be diagnosed in the shop, calmly, with the evidence in hand.</p>\n<p>One rule governs all four techniques: change one thing at a time. Wiggle one harness, heat one part, tap one component. Changing several things at once and seeing the fault proves nothing about which change caused it — and the fault will be back tomorrow, with no one knowing which fix fixed it.</p>\n<p>Sometimes the fault will not appear no matter what you do. Then the evidence must be reconstructed from what the vehicle recorded. <strong>Freeze-frame data</strong> holds the conditions when the code last set — speed, load, temperature, trims — and those conditions are the reproduction recipe. <strong>Pending codes</strong> show a fault seen once but not confirmed: the fault is real, it just has not happened often enough to confirm. <strong>Mode $06</strong> shows test results creeping toward their limits — a component failing slowly, caught before it sets a code.</p>\n<p>Service history is evidence too. A fault that started after a repair points at the repair. A fault that appears every wet morning points at water. A fault with a pattern — every third day, every cold start, every long drive — is a fault with a cause that follows the same pattern. Look for the pattern before looking for the part.</p>\n<p>And check the simplest suspects first, even on an advanced fault: battery condition, ground connections, and connector condition. A weak battery causes faults across many systems at once. A bad ground makes sensors lie and modules misbehave. A corroded connector causes faults that come and go with temperature and vibration. The advanced diagnosis often ends at a basic cause — and the technician who checks the basics first saves the customer the cost of the advanced parts.</p>"
    },
    {
      "heading": "When the Fault Will Not Appear: Honesty and the Next Visit",
      "html": "<p>Sometimes, after honest work, the fault will not appear. Then the right move is honesty, not parts. Tell the customer what was tested, what was ruled out, what the evidence suggests, and what to do when the fault returns: note the exact conditions, do not clear the codes, and bring the vehicle in while the fault is present if possible. A customer who understands the plan is a partner in the diagnosis, not an adversary.</p>\n<p>Set up the next visit to catch the fault. Leave the scan tool's recording ready, or lend the customer a simple way to capture the conditions — a note of the time, the temperature, the road, and what the car was doing. Agree that the vehicle comes straight in, without being switched off if it can be helped, while the fault is present — because a fault that is present can be diagnosed, and a fault that has gone home cannot.</p>\n<p>Never sell a part to a customer for a fault you have not seen. An honest 'we could not reproduce it, here is what we ruled out, and here is the plan' keeps the customer's trust and the vehicle's evidence intact. A guessed part does the opposite on both counts.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Intermittents come and go, refuse to be observed on schedule, and punish guessing — each wrong part destroys evidence.</li>\n<li>Conditions are the diagnosis: hot, cold, wet, vibration, load, time delay — each narrows the suspects.</li>\n<li>Make it appear: wiggle test, heat test, tap test, road test with recording. Change one thing at a time.</li>\n<li>Reconstruct from records: freeze-frame, pending codes, Mode $06, service history — and check the basics (battery, grounds, connectors) first.</li>\n<li>When it will not appear: be honest, explain what was ruled out, and set up the next visit to catch it present.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Replacing parts for a fault that was never seen. A guessed part costs money, destroys evidence, and changes the vehicle's pattern so the trail goes cold.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Changing several things at once during a wiggle or heat test. If the fault appears, you will not know which change caused it — and it will be back tomorrow.</div>\n<p><strong>Ready-to-work link:</strong> If you can take a driver's description of when a fault happens and turn it into a test plan, you have this module. Module 10 is pure practice: driveability case studies.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Intermittent fault", "def": "A fault that comes and goes with temperature, vibration, moisture, or load — the hardest kind to diagnose." },
    { "term": "Wiggle test", "def": "Moving a harness or connector while watching live data or a scope, to make a connection fault appear." },
    { "term": "Heat test", "def": "Warming a suspect component to reproduce a fault that only appears when hot." },
    { "term": "Tap test", "def": "Tapping a suspect part lightly to reveal a cracked joint or loose internal connection." },
    { "term": "Road test with recording", "def": "Driving under the fault's conditions with the scan tool or scope recording, so the fault is caught when it happens." },
    { "term": "Freeze-frame data", "def": "The snapshot of conditions stored when a code set — the reproduction recipe for an absent fault." },
    { "term": "Pending code", "def": "A code seen once but not confirmed — proof the fault is real, even if it is not present now." },
    { "term": "Conditions", "def": "The circumstances in which a fault appears — hot, cold, wet, vibration, load, time — which narrow the suspects." },
    { "term": "Ground connection", "def": "The return path for a circuit; a bad ground makes sensors lie and modules misbehave." },
    { "term": "Brown out", "def": "A module losing power briefly from low voltage, causing it to stop communicating or behave erratically." },
    { "term": "Reproduce", "def": "Making a fault appear on purpose, under controlled conditions, so it can be observed and tested." },
    { "term": "Comeback", "def": "A vehicle returning with the same complaint because the repair did not fix the root cause." }
  ],
  "video": {
    "title": "PicoScope Wiggle Test: Finding a Short or Open Wiring Fault",
    "embedUrl": "https://www.youtube.com/embed/jZ8TcK9LyVc",
    "note": "Pico's wiggle-test video shows the technique from this module on a real wiring fault: a camshaft sensor that looks faulty but is actually a chafed loom shorting to ground. Watch the waveform change as the loom is wiggled — the fault appears on screen, exactly when the harness moves.",
    "more": [
      { "title": "ScannerDanner uScope: Capturing a Misfire on Snap Throttle", "url": "https://www.youtube.com/watch?v=Kr8TIc820SA" }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A car stalls only on wet mornings. What does the condition suggest, and what is the first test?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Wet-only points at water getting into a connector, a cracked coil or wire arcing when damp, or a sensor shorting in the rain. Step 2: First, inspect the connectors and ignition parts for water entry and cracks, then mist the suspect area with water while the engine runs and watch for the stall.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A fault appears only over bumps. What kind of fault is that, and how do you make it appear in the shop?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A connection fault — a loose connector, a chafed wire touching ground when the harness moves, or a cracked solder joint. Step 2: Wiggle the harness and connectors at the suspect circuit while watching live data or a scope; a reading that glitches with the wiggle is the fault.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Freeze-frame data shows a code set at high speed, under load, with the engine fully warm. What does that tell you about reproducing the fault?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The fault needs high speed, load, and a warm engine to appear — so an idle test in the shop will never reproduce it. Step 2: Reproduce it with a road test under those exact conditions, with the scan tool recording, so the fault is caught when it happens.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A pending code is stored but the fault is not present now. What does the pending code prove, and what should you do with it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: It proves the fault is real — it was seen once, just not often enough to confirm and light the MIL. Step 2: Use it with its freeze-frame data to build a reproduction plan, and check Mode $06 for the component drifting toward its limit.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A technician wiggles three harnesses at once and the fault appears. Why is that a problem?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Three changes at once prove nothing about which one caused the fault. Step 2: The fault will be back tomorrow with no one knowing which harness fixed it — change one thing at a time, so the cause is certain.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> After honest testing, a fault will not appear. What should the technician tell the customer?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: What was tested, what was ruled out, and what the evidence suggests — honestly, with no guessed part sold. Step 2: What to do when it returns: note the exact conditions, do not clear the codes, and bring the vehicle in while the fault is present if possible, so it can be caught and diagnosed.</p>"
    }
  ],
  "quiz": [
    {
      "q": "An intermittent fault is hardest to diagnose because:",
      "choices": ["It always sets many codes", "It comes and goes, and refuses to be observed on schedule", "It is always expensive", "It only happens at idle"],
      "answer": 1,
      "explanation": "Correct: (b). Diagnosis depends on observing the fault, and an intermittent fault is absent when tested. (a) Intermittents often set no code at all. (c) Expense comes from guessing, not from the fault itself. (d) Intermittents happen under many conditions, not only at idle."
    },
    {
      "q": "A fault that appears only when hot most likely involves:",
      "choices": ["Water in a connector", "A coil breaking down with temperature, a connection opening as parts expand, or a sensor drifting when hot", "A loose connector only", "A cold fuel pump"],
      "answer": 1,
      "explanation": "Correct: (b). Heat-related failure modes are coils, expanding connections, and drifting sensors. (a) Water causes wet-only faults. (c) A loose connector usually shows with vibration. (d) A cold fuel pump would fail when cold, not hot."
    },
    {
      "q": "The wiggle test is used to:",
      "choices": ["Test the battery", "Move a harness or connector while watching data or a scope, to make a connection fault appear", "Check fuel pressure", "Test the brakes"],
      "answer": 1,
      "explanation": "Correct: (b). Wiggling makes an intermittent connection break on screen. (a) Battery testing is a separate check. (c) Fuel pressure is measured with a gauge. (d) Brakes are unrelated to wiring."
    },
    {
      "q": "A road test with recording is powerful because:",
      "choices": ["It is faster than shop testing", "When the fault happens on the road, the recording holds the readings and the exact moment, so it can be diagnosed calmly in the shop", "It clears the codes", "It fixes the fault"],
      "answer": 1,
      "explanation": "Correct: (b). A caught fault is a diagnosable fault — the recording preserves what the shop could not see. (a) Road testing takes longer than shop testing. (c) Recording does not clear codes. (d) A test drive diagnoses; it does not repair."
    },
    {
      "q": "Freeze-frame data helps with an absent fault by:",
      "choices": ["Clearing the code", "Showing the conditions when the code last set — speed, load, temperature, trims — which are the reproduction recipe", "Testing the actuators", "Measuring compression"],
      "answer": 1,
      "explanation": "Correct: (b). Freeze-frame is the snapshot of the fault's conditions. (a) Clearing destroys the data. (c) Actuator tests are commanded separately. (d) Compression is measured with a gauge."
    },
    {
      "q": "A pending code proves:",
      "choices": ["Nothing — it can be ignored", "The fault is real — it was seen once, just not often enough to confirm", "The part is definitely bad", "The vehicle is safe to drive"],
      "answer": 1,
      "explanation": "Correct: (b). Pending means observed once, not confirmed — the fault happened, even if it is absent now. (a) A pending code is evidence, not noise. (c) It names a system, not a proven part. (d) Safety is a separate judgment."
    },
    {
      "q": "When testing for an intermittent fault, you should change:",
      "choices": ["Everything at once to save time", "One thing at a time, so the cause is certain when the fault appears", "Nothing — just wait", "Only the most expensive part"],
      "answer": 1,
      "explanation": "Correct: (b). One change at a time proves which change caused the fault to appear. (a) Multiple changes prove nothing. (c) Waiting is not a test. (d) Price does not decide the test order."
    },
    {
      "q": "If a fault will not appear after honest testing, the technician should:",
      "choices": ["Sell the most likely part anyway", "Be honest about what was ruled out, and set up the next visit to catch the fault while it is present", "Clear the codes and send the customer away", "Blame the customer"],
      "answer": 1,
      "explanation": "Correct: (b). Honesty preserves trust and evidence; a plan to catch the fault present is the real next step. (a) A guessed part costs money and destroys evidence. (c) Clearing destroys the freeze-frame and pending data. (d) Blaming the customer ends the diagnosis."
    }
  ],
  "studyGuide": "\n<h3>Module 9 — Intermittent-Fault Strategies: Quick Reference</h3>\n<p><strong>Why hard:</strong> Comes and goes, refuses observation on schedule. Guessing destroys evidence; reproducing creates it.</p>\n<p><strong>Conditions:</strong> Hot = coil/connection/sensor drift · Cold = contraction-only contact · Wet = water in connectors · Bumps = loose/chafed wiring · Load = weak pump/coil · Time delay = warm-up failure.</p>\n<p><strong>Make it appear:</strong> Wiggle test · Heat test · Tap test · Road test with recording. One change at a time.</p>\n<p><strong>Reconstruct:</strong> Freeze-frame (reproduction recipe) · Pending codes (fault is real) · Mode $06 (drifting toward the limit) · Service history. Check basics first: battery, grounds, connectors.</p>\n<p><strong>When it will not appear:</strong> Be honest, explain what was ruled out, set up the next visit to catch it present. Never sell a part for a fault you have not seen.</p>\n<p><strong>Self-check:</strong> Take a driver's when-it-happens description and turn it into a test plan.</p>\n"
};
