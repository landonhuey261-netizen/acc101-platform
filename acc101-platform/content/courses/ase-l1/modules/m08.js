// ase-l1 - Module 8: Waveform Analysis with a Scope
module.exports = {
  "number": 8,
  "slug": "waveform-analysis-scope",
  "title": "Waveform Analysis with a Scope",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what an oscilloscope shows that a scan tool and a meter cannot.",
    "Set up a scope: channels, time base, voltage scale, and trigger.",
    "Read sensor waveforms: crank, cam, throttle position, oxygen, and MAF.",
    "Compare a suspect waveform with a known-good one to find the fault.",
    "Use the scope to catch intermittent faults a meter is too slow to see."
  ],
  "sections": [
    {
      "heading": "Why a Scope Sees What a Meter Misses",
      "html": "<p>A multimeter shows one number at a time, updating once or twice a second. A scan tool shows numbers too, sampled and smoothed by the computer. An <strong>oscilloscope</strong> shows the signal itself, moment by moment — every rise, every fall, every glitch — thousands of times a second. When a fault lasts a fraction of a second, the meter never sees it, the scan tool smooths over it, and only the scope catches it.</p>\n<p>That is why the scope is the L1 technician's instrument for the hardest faults: intermittent dropouts, a sensor that glitches once in a hundred cycles, a coil that fails only under load, a network message that corrupts occasionally. The scope does not guess and it does not average — it shows what actually happened, when it happened.</p>\n<div class=\"callout\"><strong>Key idea:</strong> A meter gives one number; a scope gives the whole story. Intermittent faults live in the gaps between meter readings — and only a waveform shows them.</div>"
    },
    {
      "heading": "Setting Up: Channels, Scales, and Trigger",
      "html": "<p>A scope has three settings that matter. <strong>Channels</strong> are the inputs — most automotive scopes have two or four, so two signals can be watched together, such as crank and cam, or a coil command and the coil's current. Watching two signals together shows their relationship: whether the cam signal arrives when the crank signal says it should.</p>\n<p><strong>Voltage scale</strong> sets how tall the waveform appears: too large a scale and the signal is a flat line; too small and it runs off the screen. <strong>Time base</strong> sets how wide: too fast and you see only a fragment; too slow and the detail is squeezed into a blur. The right settings show several complete cycles, filling the screen without clipping.</p>\n<p>The <strong>trigger</strong> is what freezes the picture. It tells the scope to start drawing when the signal crosses a chosen voltage — so the same part of the cycle appears in the same place on the screen every time, instead of scrolling past. Without a trigger, the waveform rolls and cannot be read; with one, it stands still and can be studied, measured, and compared.</p>"
    },
    {
      "heading": "Sensor Waveforms: What Good Looks Like",
      "html": "<p>Every sensor has a signature. A <strong>crankshaft position sensor</strong> produces a repeating pattern with a gap — the missing tooth that marks top dead center — and the pattern must be even, with no missing or extra pulses. A <strong>camshaft position sensor</strong> produces a pattern that must line up with the crank pattern in a fixed relationship; a cam signal that drifts against the crank signal means the timing has moved.</p>\n<p>A <strong>throttle position sensor</strong> should sweep smoothly from its closed value to its open value as the throttle opens — no jumps, no dropouts, no flat spots. A glitch in the sweep is a worn spot in the sensor, and it will cause a hesitation exactly at that throttle position. An <strong>oxygen sensor</strong> should switch steadily between rich and lean; a slow switch means an aging sensor, and a stuck reading means a dead one or a real mixture fault.</p>\n<p>A <strong>MAF sensor</strong> should rise smoothly with engine speed and load. A signal that jumps or drops while the engine runs steadily is a lying sensor — or a wiring fault making it lie. The rule for every sensor is the same: learn what good looks like, and the bad ones announce themselves by comparison.</p>"
    },
    {
      "heading": "Known-Good Comparison and Catching Intermittents with the Scope",
      "html": "<p>The most powerful scope technique is also the simplest: compare the suspect with a known good. The same sensor on another cylinder, the same signal on the other bank, the same waveform from the service information's reference library — any known-good comparison turns a vague 'this looks odd' into a certain 'this one is different'.</p>\n<p>That is how a failing coil is found: ramp all the coils and the weak one stands out. That is how a bad injector is found: compare injector current waveforms and the short one stands out. That is how a stretched timing chain is found: overlay crank and cam and watch the relationship drift. The scope's job is not to produce pretty pictures — it is to make the odd one out visible.</p>\n<p>Keep a library. Save known-good waveforms from healthy vehicles, labeled with the vehicle, the sensor, and the conditions. A library turns every future diagnosis into a comparison instead of a guess — and it is the single most valuable thing an advanced technician owns, after their judgment.</p>\n<p>Intermittent faults are the scope's home ground. Set the scope to record, wiggle the wiring, tap the sensor, heat the component, or drive the vehicle — and let the scope catch the moment the signal drops out. A meter updating twice a second will miss a dropout that lasts a tenth of a second; a scope recording thousands of samples a second will show it clearly, with the time it happened.</p>\n<p>The technique is to make the fault happen while watching. Wiggle the harness at the suspect connector and watch the waveform: a glitch that appears with the wiggle is a connection fault, found. Heat a coil with a heat gun and watch its ramp collapse: a temperature fault, found. Drive over a bump and watch the crank signal drop a tooth: a wiring fault that only appears with vibration, found.</p>\n<p>One caution: a scope shows everything, including noise. Learn to tell a real signal fault — a dropout, a missing pulse, a wrong shape — from electrical noise, which is random and does not repeat with the fault. A glitch that repeats with the symptom is the fault; a glitch that appears randomly is noise, and chasing it wastes an afternoon.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>A scope shows the signal moment by moment, thousands of times a second — it catches faults a meter and a scan tool miss.</li>\n<li>Setup: channels (watch two signals together), voltage scale and time base (fill the screen without clipping), trigger (freeze the picture).</li>\n<li>Sensor signatures: crank (even pattern with a gap), cam (fixed relationship to crank), throttle (smooth sweep, no glitches), oxygen (steady switching), MAF (smooth rise with load).</li>\n<li>Known-good comparison is the fastest diagnosis: the odd one out is the fault. Keep a library of healthy waveforms.</li>\n<li>Intermittents: record while wiggling, heating, tapping, or driving — and make the fault happen on screen.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Using a meter for an intermittent fault. A dropout lasting a tenth of a second is invisible to a meter updating twice a second — use the scope.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Chasing noise. A glitch that repeats with the symptom is the fault; random noise that never repeats is not — learn to tell them apart.</div>\n<p><strong>Ready-to-work link:</strong> If you can set up a scope, read a sensor waveform, and explain known-good comparison, you have this module. Module 9 is the scope's hardest job: intermittent-fault strategies.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Oscilloscope", "def": "An instrument that shows a signal's voltage moment by moment, thousands of times a second — the waveform." },
    { "term": "Waveform", "def": "The picture of a signal over time, showing every rise, fall, and glitch." },
    { "term": "Channel", "def": "One input of a scope; two or four channels let two signals be watched together." },
    { "term": "Time base", "def": "The scope setting for how much time the screen covers — too fast shows a fragment, too slow squeezes the detail." },
    { "term": "Voltage scale", "def": "The scope setting for how tall the waveform appears — too large flattens it, too small clips it." },
    { "term": "Trigger", "def": "The setting that freezes the waveform by starting the drawing when the signal crosses a chosen voltage." },
    { "term": "Known-good waveform", "def": "A saved waveform from a healthy vehicle, used as the standard a suspect waveform is compared against." },
    { "term": "Crank pattern", "def": "The repeating crankshaft sensor signal, with a gap marking top dead center; it must be even, with no missing pulses." },
    { "term": "Cam-crank correlation", "def": "The fixed timing relationship between the camshaft and crankshaft signals; drift means the timing has moved." },
    { "term": "Dropout", "def": "A brief loss of a signal — a fraction of a second — that only a scope can catch." },
    { "term": "Glitch", "def": "A brief irregularity in a waveform; a glitch that repeats with the symptom is the fault." },
    { "term": "Wiggle test", "def": "Moving a harness or connector while watching a waveform, to make an intermittent connection fault appear on screen." }
  ],
  "video": {
    "title": "Coil-on-Plug Ignition Testing with a PicoScope COP Probe",
    "embedUrl": "https://www.youtube.com/embed/5X9RgErnKGE",
    "note": "Pico's video shows the COP probe turning a coil into a virtual secondary waveform — primary current and trigger signals displayed together, without back-probing. Watch how the two channels are used together, and how the waveform from a healthy coil becomes the comparison for the rest.",
    "more": [
      { "title": "Picking Up the Secondary Ignition Pattern Using an Oscilloscope", "url": "https://www.youtube.com/watch?v=e59atXyNNPA" }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A fault lasts a tenth of a second and a meter updates twice a second. Explain why the meter will miss it and the scope will catch it.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A meter takes a reading every half second, so a fault lasting a tenth of a second can begin and end between readings — the meter never samples it. Step 2: A scope samples thousands of times a second and records the whole signal, so the dropout appears clearly in the waveform.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A throttle position sensor waveform shows a sharp drop in the middle of an otherwise smooth sweep. What does that mean, and when will the driver feel it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The drop is a worn spot in the sensor — the signal falls out exactly there. Step 2: The driver will feel a hesitation exactly at that throttle position, when the computer briefly loses the throttle reading.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> The camshaft signal is drifting against the crankshaft signal on the scope. What does that suggest?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The cam-crank correlation is moving — the timing relationship is not fixed. Step 2: That suggests a stretched timing chain, a worn tensioner, or a variable valve timing fault that is not holding position.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Four injector current waveforms are compared. Three look alike; one is much shorter. What is the conclusion, and why is the comparison so powerful?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The short one is the faulty injector — it is not being held open as long as the others. Step 2: The comparison is powerful because it needs no specification: the healthy cylinders define what good looks like, and the odd one out is the fault.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Wiggling a harness makes a crankshaft signal drop a tooth on the scope, exactly when the engine stumbles. What have you found?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: An intermittent connection fault in that harness — the wiggle breaks the signal, the computer loses crank position, and the engine stumbles. Step 2: The glitch repeats with the symptom, so it is the fault, not noise — inspect that harness and connector.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Why should a technician keep a library of known-good waveforms?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A library turns every diagnosis into a comparison instead of a guess. Step 2: With a labeled healthy waveform for each sensor and vehicle, the odd one out is visible immediately — the fastest diagnosis there is.</p>"
    }
  ],
  "quiz": [
    {
      "q": "An oscilloscope is better than a multimeter for intermittent faults because:",
      "choices": ["It is cheaper", "It shows the signal moment by moment, thousands of times a second, catching dropouts a meter misses", "It does not need leads", "It reads codes"],
      "answer": 1,
      "explanation": "Correct: (b). A meter samples once or twice a second; a scope records continuously and catches brief dropouts. (a) Scopes cost more than meters. (c) Scopes need leads like meters. (d) Reading codes is the scan tool's job."
    },
    {
      "q": "The trigger on a scope is used to:",
      "choices": ["Start the engine", "Freeze the waveform by starting the drawing when the signal crosses a chosen voltage", "Measure resistance", "Charge the battery"],
      "answer": 1,
      "explanation": "Correct: (b). The trigger holds the same part of the cycle in the same place on screen so it can be read. (a) The scope does not start the engine. (c) Resistance is a meter function. (d) The scope does not charge anything."
    },
    {
      "q": "A throttle position sensor waveform should:",
      "choices": ["Jump randomly as the throttle opens", "Sweep smoothly from closed to open, with no jumps, dropouts, or flat spots", "Stay flat at all times", "Drop to zero when the throttle opens"],
      "answer": 1,
      "explanation": "Correct: (b). A smooth sweep is healthy; a glitch is a worn spot that causes a hesitation at that position. (a) Random jumps are a fault. (c) A flat line means a dead sensor. (d) The signal rises with throttle opening, not falls."
    },
    {
      "q": "Cam-crank correlation means:",
      "choices": ["The cam and crank sensors have the same part number", "The fixed timing relationship between the camshaft and crankshaft signals", "The cam sensor replaces the crank sensor", "The timing belt is new"],
      "answer": 1,
      "explanation": "Correct: (b). The cam signal must hold a fixed relationship to the crank signal; drift means timing has moved. (a) Part numbers are irrelevant. (c) The two sensors do different jobs. (d) A new belt is no guarantee of correct correlation."
    },
    {
      "q": "Known-good comparison is powerful because:",
      "choices": ["It needs no specifications — the healthy cylinders define what good looks like, and the odd one out is the fault", "It is the only way to use a scope", "It replaces all other tests", "It works without a vehicle"],
      "answer": 0,
      "explanation": "Correct: (a). Comparison turns diagnosis into spotting the difference, with no spec sheet needed. (b) The scope has many other uses. (c) Comparison is one technique among several. (d) Comparison needs a real vehicle to measure."
    },
    {
      "q": "A crankshaft sensor waveform with a missing pulse suggests:",
      "choices": ["A healthy sensor", "A damaged reluctor tooth, a wiring fault, or a failing sensor", "A full fuel tank", "A new battery"],
      "answer": 1,
      "explanation": "Correct: (b). The crank pattern must be even apart from its designed gap; an extra missing pulse is a fault. (a) A healthy pattern has only its designed gap. (c) Fuel level does not affect the crank signal. (d) Battery condition does not remove pulses."
    },
    {
      "q": "A glitch in a waveform that repeats exactly when the symptom appears is:",
      "choices": ["Electrical noise — ignore it", "The fault, proven by its repetition with the symptom", "A scope malfunction", "Normal operation"],
      "answer": 1,
      "explanation": "Correct: (b). Repetition with the symptom is what separates a real fault from noise. (a) Noise is random and does not repeat with the symptom. (c) A scope malfunction would affect all channels, not one signal. (d) Normal signals do not glitch with symptoms."
    },
    {
      "q": "The voltage scale on a scope sets:",
      "choices": ["How much time the screen covers", "How tall the waveform appears — too large flattens it, too small clips it", "When the drawing starts", "The number of channels"],
      "answer": 1,
      "explanation": "Correct: (b). Voltage scale is the vertical size of the signal. (a) That is the time base. (c) That is the trigger. (d) Channel count is fixed by the scope."
    }
  ],
  "studyGuide": "\n<h3>Module 8 — Waveform Analysis with a Scope: Quick Reference</h3>\n<p><strong>Why a scope:</strong> Shows the signal moment by moment, thousands of times a second. Meters miss brief dropouts; scopes catch them.</p>\n<p><strong>Setup:</strong> Channels (watch two signals together) · Voltage scale (fill the screen without clipping) · Time base (several complete cycles) · Trigger (freeze the picture).</p>\n<p><strong>Signatures:</strong> Crank = even pattern with a gap · Cam = fixed relationship to crank · Throttle = smooth sweep · O2 = steady switching · MAF = smooth rise with load.</p>\n<p><strong>Known-good:</strong> Compare the suspect with a healthy one — the odd one out is the fault. Keep a library.</p>\n<p><strong>Intermittents:</strong> Record while wiggling, heating, tapping, or driving. A glitch that repeats with the symptom is the fault; random noise is not.</p>\n<p><strong>Watch out:</strong> Do not use a meter for an intermittent. Do not chase noise.</p>\n<p><strong>Self-check:</strong> Set up a scope in your head — channels, scales, trigger — and read a sensor waveform.</p>\n"
};
