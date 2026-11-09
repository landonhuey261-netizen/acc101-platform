// Auto-generated original course content for College Without College
module.exports = {
  "number": 12,
  "slug": "engine-performance-review",
  "title": "Engine Performance Review",
  "estTime": "3–4 hours",
  "objectives": [
    "Trace air, fuel, and spark through the engine from memory.",
    "Match common complaints to the system at fault.",
    "Choose the right first test for each complaint.",
    "Read a fuel-trim pair and a code and say what to test next.",
    "Explain how the emissions systems connect to engine performance."
  ],
  "sections": [
    {
      "heading": "The Whole Engine in One Picture",
      "html": "<p>Put the systems together. Air comes in through the filter, throttle, and manifold. Fuel comes from the tank through the pump, filter, and rail to the injectors. Spark comes from the coil to the plug, timed by the crankshaft and camshaft sensors. The computer watches it all through its sensors and trims the fuel from the oxygen sensor's report. The exhaust leaves through the converter, which the downstream sensor watches. Every complaint in this course lives in one of those systems, and the first question is always: air, fuel, spark, or mechanical?</p>\n<p>A car that will not start needs the basics checked first: is there spark, is there fuel, is there air, is there compression? A car that runs badly needs the story first: when, under what conditions, and what the live data says at that moment. The method never changes, only the car does.</p>\n"
    },
    {
      "heading": "Complaints and First Tests",
      "html": "<p>A misfire in one cylinder needs the swap test: coil, then injector, then compression. A random misfire needs the whole engine: fuel pressure, vacuum leaks, and the airflow sensor. A lean complaint needs the fuel trims at idle and under load: high at idle means a leak, high under load means fuel delivery. A rich complaint needs the same trims read the other way, plus a check for a lying sensor. A hard start needs fuel pressure after switch-off and a check for a leaking injector.</p>\n<p>In each case the first test is cheap and quick, and it rules out a whole family of faults before any part is touched. The technician who tests first and replaces second is the one who fixes cars once, not twice.</p>\n"
    },
    {
      "heading": "Codes, Trims, and Waveforms Together",
      "html": "<p>No single piece of data proves a fault on its own. A code names the system. A fuel trim shows what the computer has had to correct. A waveform shows whether a sensor's signal is clean. Together they tell a story: a code for a misfire, a trim that climbs under load, and a fuel pressure that falls — that is a fuel-delivery fault, not a coil fault. Learn to read the three together and the diagnosis writes itself.</p>\n<p>The emissions systems are part of that story, not separate from it. A misfire damages the converter, a lying oxygen sensor ruins the mixture, and an EVAP leak sets a code the test station will see. Engine performance and emissions are one system with two names — fix the performance and the emissions usually follow.</p>\n"
    },
    {
      "heading": "Ready for the A8 Exam",
      "html": "<p>The A8 practice exam in the capstone will test the same thinking with new cars and new numbers: a code to read, a trim pair to interpret, a misfire to trace, and a monitor to judge. The method does not change: verify the complaint, gather data, form a theory, test it, then repair. If you can walk a customer complaint to a system, a first test, and a next step without guessing, you are ready.</p>\n<p>Keep the habits that matter: test before you replace, swap before you condemn, read the trims at idle and under load, and never clear a code and call the car fixed. Those four habits will carry you through the exam and through the trade.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<p><ul><li>Air, fuel, spark, and compression — the first question for every complaint is which one is wrong.</li><li>One cylinder misfiring: swap the coil, then the injector, then test compression.</li><li>Random misfire: fuel pressure, vacuum leaks, and the airflow sensor.</li><li>Fuel trims at idle and under load separate a leak from a delivery fault.</li><li>Codes, trims, and waveforms together tell the story; no one piece proves a fault alone.</li></ul></p>\n<p><strong>Common mistake:</strong> Replacing the part a code names. A code names the system that reported the problem — test before you replace.</p>\n<p><strong>Ready-to-Work link:</strong> If you can walk any complaint to a system, a first test, and a next step, you are ready for the A8 exam.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Air, fuel, spark",
      "def": "The three things a petrol engine needs, at the right time."
    },
    {
      "term": "Compression",
      "def": "The pressure a cylinder builds; the mechanical health of the engine."
    },
    {
      "term": "Swap test",
      "def": "Moving a suspect part to another cylinder to see if the fault moves with it."
    },
    {
      "term": "Fuel trim",
      "def": "The computer's correction to fuel delivery, shown as a percentage."
    },
    {
      "term": "Waveform",
      "def": "A sensor's signal over time, shown on a scope."
    },
    {
      "term": "DTC",
      "def": "A diagnostic trouble code — one letter followed by four numbers."
    },
    {
      "term": "Freeze-frame data",
      "def": "A snapshot of conditions taken when a code was set."
    },
    {
      "term": "Readiness monitor",
      "def": "A computer self-test of an emissions system."
    },
    {
      "term": "Catalytic converter",
      "def": "The exhaust box that turns pollutants into less harmful gases."
    },
    {
      "term": "Oxygen sensor",
      "def": "The exhaust sensor that reports how much oxygen is left after the burn."
    },
    {
      "term": "MAF sensor",
      "def": "The mass airflow sensor that measures air into the engine."
    },
    {
      "term": "MAP sensor",
      "def": "The manifold absolute pressure sensor."
    },
    {
      "term": "Crankshaft position sensor",
      "def": "The sensor that reports piston position and engine speed."
    },
    {
      "term": "Camshaft position sensor",
      "def": "The sensor that reports which stroke each cylinder is on."
    }
  ],
  "video": {
    "title": "2005 Trailblazer 4.2 #6 cylinder misfire diagnosis (spark and fuel test)",
    "embedUrl": "https://www.youtube.com/embed/3CTuRW27n_Q",
    "note": "ScannerDanner diagnoses a #6 cylinder misfire on a Trailblazer, testing spark and fuel in turn. Use it as a review case: one cylinder, three families of causes, and a swap test that names the fault.",
    "more": [
      {
        "title": "Misfire troubleshooting using exhaust gases (an SD Premium video)",
        "url": "https://www.youtube.com/watch?v=Uzmoyo00VpE"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem.</strong> A car will not start at all. List the four basic checks in order, and say what each one rules out.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Spark — is there a spark at the plug? Step 2: Fuel — is there pressure at the rail? Step 3: Air — is the intake clear? Step 4: Compression — can the cylinders squeeze the mixture? Each check rules out one family before the next is tested.</p>"
    },
    {
      "prompt": "<p><strong>Problem.</strong> A single cylinder misfires. Write the test order and say what each step proves.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Swap the coil — if the misfire moves, the coil is bad. Step 2: Swap the injector — if the misfire moves, the injector is bad. Step 3: Test compression — if both swaps fail, the fault is mechanical in the cylinder.</p>"
    },
    {
      "prompt": "<p><strong>Problem.</strong> Fuel trims are high positive at idle and near zero under load. What is the diagnosis, and what is the next test?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Diagnosis — a vacuum leak letting in unmetered air. Step 2: At idle the leak is a large share of the air drawn in; under load it is a small share. Step 3: Next test — listen for a hiss and test around the manifold and vacuum hoses.</p>"
    },
    {
      "prompt": "<p><strong>Problem.</strong> A car fails its emissions test on the catalyst monitor. What do you test first, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The catalytic converter and the oxygen sensors around it. Step 2: The catalyst monitor is the computer's self-test of the converter. Step 3: Test the converter's health and the sensors before replacing anything — and check for a misfire that may have damaged it.</p>"
    },
    {
      "prompt": "<p><strong>Problem.</strong> Explain, in two sentences, why engine performance and emissions are one system with two names.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The same mixture, spark, and sensors that make the engine run well also decide what comes out of the tailpipe. Step 2: Fix the performance — the misfire, the lying sensor, the lean mixture — and the emissions usually follow.</p>"
    },
    {
      "prompt": "<p><strong>Problem.</strong> A code says P0302. What does it tell you, and what does it not tell you?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: It tells you the computer saw a misfire in cylinder 2. Step 2: It does not tell you which part failed — spark, fuel, or mechanical. Step 3: The cause is found by testing, starting with the coil swap.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A car that will not start needs first:",
      "choices": [
        "A new battery",
        "The basics checked: spark, fuel, air, and compression",
        "A new catalytic converter",
        "A software update"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The four basics cover every no-start. (a) A battery is one possible cause, not the first check. (c) The converter does not stop starting. (d) Software is not the first check."
    },
    {
      "q": "A single-cylinder misfire is tested by:",
      "choices": [
        "Replacing all the coils at once",
        "Swapping the coil, then the injector, then testing compression",
        "Clearing the codes",
        "Replacing the fuel pump"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Swap tests separate spark from fuel, and compression is tested last. (a) Replacing everything guesses at the cause. (c) Clearing erases evidence. (d) The pump affects all cylinders."
    },
    {
      "q": "High positive fuel trims at idle that fall under load point at:",
      "choices": [
        "A weak fuel pump",
        "A vacuum leak letting in unmetered air",
        "A clogged fuel filter",
        "A failed catalytic converter"
      ],
      "answer": 1,
      "explanation": "Correct: (b). At idle the leak is a large share of the air drawn in. (a) A weak pump shows under load. (c) A clogged filter shows under load. (d) The converter does not move fuel trim."
    },
    {
      "q": "P0302 reports:",
      "choices": [
        "A misfire in cylinder 2",
        "A random misfire",
        "A failed oxygen sensor",
        "A loose fuel cap"
      ],
      "answer": 0,
      "explanation": "Correct: (a). P0302 is a powertrain misfire code for cylinder 2. (b) Random misfire is P0300. (c) Oxygen sensor faults have their own codes. (d) A fuel cap fault is an EVAP code."
    },
        {
      "q": "A driver reports the check-engine light is flashing and the engine is shaking badly at idle. What is the most urgent risk?",
      "choices": [
        "The car will need a service soon",
        "Raw fuel from the misfire is overheating and damaging the catalytic converter",
        "The fuel cap is loose",
        "The battery is about to die"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A flashing light with a shake means an active misfire is sending raw fuel to the converter. (a) is wrong: a steady light is the soon-service warning. (c) is wrong: a loose cap sets an EVAP code with a steady light. (d) is wrong: a dying battery causes hard starting, not a flashing light."
    },
        {
      "q": "A student clears all the codes the day before an emissions test, hoping for a clean result. What will the test station see?",
      "choices": [
        "All monitors complete and ready",
        "Readiness monitors incomplete — the car is not ready to test",
        "The fault is fixed",
        "A passing result"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Clearing erases the monitors, which must run again before the car is ready. (a) is wrong: monitors become incomplete, not complete. (c) is wrong: clearing is not a repair. (d) is wrong: a not-ready car fails the test."
    },
        {
      "q": "Long-term fuel trim is stuck at +18% and the upstream oxygen sensor reads lean all the time. What is the sensor telling the computer?",
      "choices": [
        "The converter is failing",
        "Too much oxygen is left after the burn, so the computer adds fuel",
        "Not enough air is coming in",
        "The spark is too early"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A lean upstream reading makes the computer add fuel — hence the +18% trim. (a) is wrong: the downstream sensor watches the converter. (c) is wrong: incoming air is the MAF sensor’s job. (d) is wrong: spark timing comes from the crank and cam sensors."
    },
        {
      "q": "A turbocharged engine makes full boost at highway speed but almost none at idle. Why?",
      "choices": [
        "The belt slips at idle",
        "At idle there is too little exhaust flow to spin the turbine fast",
        "The battery is weak",
        "The cooling fan is off"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A turbo is driven by exhaust flow, and at idle there is very little of it. (a) is wrong: a turbo has no drive belt. (c) is wrong: the battery does not drive the turbo. (d) is wrong: the fan cools the radiator."
    }
  ],
  "studyGuide": "\n<h3>Module 12 — Engine Performance Review: Quick Reference</h3>\n<p><strong>First question:</strong> Air, fuel, spark, or compression — which one is wrong?</p>\n<p><strong>One cylinder:</strong> Swap the coil, then the injector, then test compression. <strong>Random:</strong> Fuel pressure, vacuum leaks, airflow sensor.</p>\n<p><strong>Trims:</strong> High at idle, falling under load = leak. Normal at idle, high under load = fuel delivery.</p>\n<p><strong>Data together:</strong> Code names the system, trim shows the correction, waveform shows the signal. No one piece proves a fault alone.</p>\n<p><strong>Self-check:</strong> Walk any complaint to a system, a first test, and a next step without guessing.</p>\n"
};
