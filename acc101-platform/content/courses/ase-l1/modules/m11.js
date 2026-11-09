// ase-l1 - Module 11: Emissions-Test Failure Scenarios
module.exports = {
  "number": 11,
  "slug": "emissions-test-failure-scenarios",
  "title": "Emissions-Test Failure Scenarios",
  "estTime": "3–4 hours",
  "objectives": [
    "Work emissions-test failures as cases: the failed measurement names the system, the data names the fault.",
    "Diagnose a tailpipe failure for high HC, high CO, and high NOx.",
    "Diagnose an OBD II inspection failure: codes, monitors not ready, and a check-engine light.",
    "Diagnose an EVAP failure, from the gas cap to the purge and vent valves.",
    "Explain to a customer why their car failed and what the repair will actually fix."
  ],
  "sections": [
    {
      "heading": "Scenario A: Failed for High Hydrocarbons",
      "html": "<p><strong>Complaint:</strong> the car failed its tailpipe test for high hydrocarbons (HC) — unburned fuel in the exhaust. <strong>Clues:</strong> a pending misfire code on one cylinder, fuel trims near normal, and Mode $06 showing that cylinder's misfire count climbing. <strong>Theory:</strong> a misfire on one cylinder is sending unburned fuel straight into the exhaust, and the converter cannot clean up a whole cylinder's worth of fuel.</p>\n<p><strong>Test:</strong> swap that cylinder's coil and plug with another cylinder and watch the misfire count. <strong>Result:</strong> the misfire moves with the coil. <strong>Proof:</strong> a new coil, a clean retest, and a passed emissions test.</p>\n<p>The lesson is that HC is unburned fuel, and unburned fuel comes from a cylinder that did not fire — so the diagnosis starts with misfire, not with the converter. A converter can only clean up a small amount of excess fuel; a dead cylinder overwhelms it entirely. Fix the fire, and the HC falls.</p>\n<div class=\"callout\"><strong>Key idea:</strong> High HC means unburned fuel — so start with the fire, not the converter. A misfiring cylinder overwhelms the converter; fix the misfire and the HC falls.</div>"
    },
    {
      "heading": "Scenario B: Failed for High Carbon Monoxide",
      "html": "<p><strong>Complaint:</strong> the car failed for high carbon monoxide (CO) — the sign of a rich mixture. <strong>Clues:</strong> fuel trims strongly negative, the upstream oxygen sensor reading rich, and a fuel smell at idle. <strong>Theory:</strong> the engine is being over-fueled — a leaking injector, high fuel pressure, or a sensor lying about air flow.</p>\n<p><strong>Test:</strong> check fuel pressure against the specification, watch the injector pulse width, and check the air flow reading against a second sensor. <strong>Result:</strong> fuel pressure is high and the pulse width is short — the computer is trying to take fuel away from a system delivering too much — and one injector is leaking after shutdown. <strong>Proof:</strong> the regulator and the leaking injector are repaired, trims return near zero, CO falls, and the test passes.</p>\n<p>The lesson is the combination of short pulse width and rich trims: the computer is fighting the fuel system, not causing the problem. When the computer's correction and the mixture disagree, the fuel system is delivering wrong — and the correction itself is the clue.</p>"
    },
    {
      "heading": "Scenario C: Failed for High NOx",
      "html": "<p><strong>Complaint:</strong> the car failed for high nitrogen oxides (NOx) — the sign of combustion running too hot. <strong>Clues:</strong> no misfire codes, fuel trims near normal, and the EGR valve does not move when commanded. <strong>Theory:</strong> the EGR system has failed — without recirculated exhaust gas to cool combustion, temperatures climb and NOx climbs with them.</p>\n<p><strong>Test:</strong> command the EGR valve with the scan tool and check its passages for carbon. <strong>Result:</strong> the valve is stuck closed and its passages are clogged with carbon. <strong>Proof:</strong> the valve and passages are cleaned, the EGR moves on command, combustion temperatures fall, NOx falls, and the test passes.</p>\n<p>The lesson is that NOx is a temperature problem, and the EGR system is the temperature control. A lean mixture can also raise NOx, so the trims matter — but with trims near normal, the EGR system is the suspect, and the command test proves it without removing anything.</p>"
    },
    {
      "heading": "Scenarios D and E: Monitors Not Ready and an EVAP Failure",
      "html": "<p><strong>Complaint:</strong> the car failed its inspection with no check-engine light and no codes — the monitors are not ready. <strong>Clues:</strong> the battery was replaced last week, and the customer cleared the codes the day before the test. <strong>Theory:</strong> the monitors never ran — the battery disconnect and the code clear reset them all to not ready, and the car has not been driven through the conditions they need since.</p>\n<p><strong>Test:</strong> read the readiness status on the scan tool and check which monitors are incomplete. <strong>Result:</strong> the catalyst, oxygen sensor, and EVAP monitors are all not ready. <strong>Proof:</strong> a proper drive cycle — the specific cold start, cruise, and deceleration each monitor needs — after which every monitor reports ready, and the inspection passes.</p>\n<p>The lesson is that readiness is a separate judgment from the check-engine light. A car with no light and no codes can still fail, and the fix is driving, not parts. It is also a lesson in customer education: never clear codes before a test, and a new battery means the monitors must run again.</p>\n<p><strong>Complaint:</strong> the car failed for an evaporative emissions leak. <strong>Clues:</strong> a small-leak code, the gas cap is new and tight, and the purge valve is stuck open — which also explains a lean code the car has been setting. <strong>Theory:</strong> the purge valve is letting vapor through when it should be closed, and the leak is in the vapor system downstream of it.</p>\n<p><strong>Test:</strong> a smoke test of the EVAP system, and a command test of the purge and vent valves. <strong>Result:</strong> smoke escapes from a cracked hose near the canister, and the purge valve does not seal when commanded closed. <strong>Proof:</strong> a new hose and a new purge valve, a passed smoke test, and a passed inspection.</p>\n<p>The lesson is that one fault can cause two failures: the stuck purge valve set the lean code and contributed to the EVAP failure at the same time. Finding both — the hose and the valve — is what makes the repair last. Fixing only the hose would have left the lean code and a second failure waiting.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Scenario A (high HC): unburned fuel — start with misfire, not the converter. The misfire count in Mode $06 found the cylinder.</li>\n<li>Scenario B (high CO): rich mixture — short pulse width with rich trims means the computer is fighting over-delivery. Check pressure and injectors.</li>\n<li>Scenario C (high NOx): hot combustion — EGR system first, proven by the command test and carbon-clogged passages.</li>\n<li>Scenario D (monitors not ready): no light, no codes, still a failure — the fix is a drive cycle, not parts. Never clear codes before a test.</li>\n<li>Scenario E (EVAP): one fault can cause two failures — the hose and the stuck purge valve both had to be fixed.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Replacing the converter for a failed gas reading. The gas names the system; the data names the fault — and the fault is usually upstream of the converter.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Fixing one of two faults. Scenario E's hose and purge valve both failed; fixing one would have left the other to fail the next test.</div>\n<p><strong>Ready-to-work link:</strong> If you can take a failed test result and work backwards to the fault — gas, then system, then test — you have this module. Module 12 is the review and the exam strategy for L1 itself.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Tailpipe test", "def": "An emissions test that samples the exhaust directly while the engine runs, measuring HC, CO, and NOx." },
    { "term": "OBD II check", "def": "An emissions inspection that reads codes and readiness monitors instead of sampling the exhaust." },
    { "term": "High HC", "def": "High hydrocarbons in the exhaust — unburned fuel, from a misfire, a rich mixture, or a dead converter." },
    { "term": "High CO", "def": "High carbon monoxide — the sign of a rich mixture, from over-fueling or a lying sensor." },
    { "term": "High NOx", "def": "High nitrogen oxides — the sign of combustion running too hot, or a failed EGR system." },
    { "term": "Purge valve", "def": "The EVAP valve that lets fuel vapor from the canister into the engine to be burned; stuck open, it causes lean codes." },
    { "term": "Vent valve", "def": "The EVAP valve that lets fresh air into the canister; stuck closed, it prevents the system from purging." },
    { "term": "Canister", "def": "The charcoal canister that stores fuel vapor from the tank until the engine can burn it." },
    { "term": "Drive cycle", "def": "The specific driving conditions each readiness monitor needs in order to run and complete." },
    { "term": "Monitors not ready", "def": "OBD II self-tests that have not completed — an inspection failure even with no light and no codes." },
    { "term": "Small-leak code", "def": "An EVAP code reporting a small vapor leak — often a hose, a cap, or a valve." },
    { "term": "Work backwards", "def": "Diagnosing from the failed measurement to the system to the fault — gas, then system, then test." }
  ],
  "video": {
    "title": "Clogged Catalytic Converter: Symptoms, Causes, and Diagnosis",
    "embedUrl": "https://www.youtube.com/embed/qJTmddbOxMk",
    "note": "A practical guide to a clogged converter: the failed emissions test, the lost power, the temperature test across the converter, and the backpressure test. Watch how the video separates a clogged converter from a dead one — and remember from this module that a converter fault is usually the end of the story, not the beginning.",
    "more": [
      { "title": "How to Test a Catalytic Converter (2CarPros)", "url": "https://www.youtube.com/watch?v=kNXh1Lphzr4" }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A car fails for high HC, and Mode $06 shows one cylinder's misfire count climbing. What is the first test, and why not the converter?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Swap that cylinder's coil and plug with another cylinder and watch the misfire count. Step 2: HC is unburned fuel from a cylinder that did not fire — the converter cannot clean up a whole cylinder's worth of fuel, so the misfire is the fault and the converter is the victim.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A car fails for high CO, trims are strongly negative, and the pulse width is short. What does that combination mean?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The computer is trying to take fuel away (short pulses) from a mixture that is still rich (negative trims). Step 2: The fuel system is delivering too much — high pressure, a leaking injector, or a lying air sensor — and the computer is fighting it, not causing it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A car fails for high NOx, trims are near normal, and the EGR valve does not move when commanded. What is the fault, and what is the proof?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The EGR system has failed — without recirculated gas to cool combustion, temperatures and NOx climb. Step 2: Proof is the valve moving on command after cleaning, with its passages clear — and a retest showing NOx within limits.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A car fails its inspection with no light and no codes, and the battery was replaced last week. Explain the failure and the fix.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The battery replacement reset the readiness monitors to not ready, and they have not run since. Step 2: The fix is a proper drive cycle through the conditions each monitor needs — not parts — after which the monitors report ready and the inspection passes.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> An EVAP failure is found: a cracked hose and a purge valve stuck open. Why must both be fixed?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The hose is the vapor leak, and the stuck purge valve is letting vapor through when it should be closed — it also set the lean code. Step 2: Fixing only the hose leaves the valve to set the lean code and fail the next test; one fault caused two failures, so both repairs are needed.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A customer asks why their car failed the emissions test when the check-engine light was never on. What do you tell them?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The inspection judges the car independently of the dashboard — a converter can be weak enough to fail a tailpipe test while passing its own monitor, and monitors can be not ready with no code at all. Step 2: The light reports what the computer found; the test measures what the car actually puts out — and they do not always agree.</p>"
    }
  ],
  "quiz": [
        {
      "q": "A car fails its emissions test with high HC and high CO together, and the tailpipe smells of raw fuel. What does that combination point to?",
      "choices": [
        "A lean mixture",
        "A rich mixture or a misfire — unburned fuel reaching the exhaust",
        "A cold engine only",
        "A full fuel tank"
      ],
      "answer": 1,
      "explanation": "Correct: (b). High HC plus high CO with a fuel smell means unburned fuel — a rich mixture or a misfire. (a) is wrong: a lean mixture usually raises NOx, not HC and CO. (c) is wrong: a cold engine is one cause among several. (d) is wrong: fuel level does not affect tailpipe readings."
    },
    {
      "q": "Short injector pulse width together with strongly negative fuel trims means:",
      "choices": ["The fuel system cannot deliver enough fuel", "The computer is trying to take fuel away from a system delivering too much", "The oxygen sensor is dead", "The engine is running lean"],
      "answer": 1,
      "explanation": "Correct: (b). Short pulses with a still-rich mixture mean over-delivery — high pressure or a leaking injector. (a) That pattern shows long pulses with lean trims. (c) A dead sensor would set a sensor code. (d) Negative trims mean the mixture is rich, not lean."
    },
    {
      "q": "High NOx with fuel trims near normal most likely points to:",
      "choices": ["A rich mixture", "A failed EGR system — combustion is too hot without recirculated gas to cool it", "A clogged air filter", "A dead battery"],
      "answer": 1,
      "explanation": "Correct: (b). With the mixture correct, the temperature control — EGR — is the suspect. (a) A rich mixture raises CO, not NOx. (c) A clogged filter makes the mixture rich. (d) A battery fault does not change combustion temperature."
    },
    {
      "q": "A vehicle fails an inspection for monitors not ready, with no light and no codes. The fix is:",
      "choices": ["A new catalytic converter", "A proper drive cycle through the conditions each monitor needs", "Clearing the codes again", "A new battery"],
      "answer": 1,
      "explanation": "Correct: (b). The monitors never ran — driving through their conditions completes them. (a) The converter is not the cause of unreadiness. (c) Clearing resets the monitors again — the opposite of the fix. (d) A new battery would reset the monitors again."
    },
    {
      "q": "A purge valve stuck open can cause:",
      "choices": ["Only an EVAP failure", "A lean code as well as an EVAP failure — one fault, two failures", "A rich mixture only", "No symptoms at all"],
      "answer": 1,
      "explanation": "Correct: (b). The open valve lets vapor through when it should be closed, leaning the mixture and failing the EVAP test. (a) It causes both failures, not one. (c) Extra vapor leans the mixture, it does not enrich it. (d) A stuck valve has real symptoms."
    },
    {
      "q": "The first step in diagnosing a failed emissions test is to:",
      "choices": ["Replace the catalytic converter", "Work backwards from the failed measurement — the gas names the system, the data names the fault", "Clear the codes", "Replace the oxygen sensors"],
      "answer": 1,
      "explanation": "Correct: (b). High HC, CO, or NOx each point at a different system, and the data then names the fault. (a) The converter is the last part, not the first. (c) Clearing destroys the evidence. (d) Sensors are tested, not replaced by routine."
    },
    {
      "q": "A customer cleared their codes the day before an emissions test. The likely result is:",
      "choices": ["A pass, because the light is off", "A failure for readiness — the monitors reset to not ready and have not run again", "A pass, because the codes are gone", "No effect at all"],
      "answer": 1,
      "explanation": "Correct: (b). Clearing resets every monitor to not ready, and the inspection fails for readiness. (a) and (c) The light being off does not mean the monitors are ready. (d) Clearing has a direct, predictable effect on readiness."
    },
    {
      "q": "A new catalytic converter fails within weeks of installation. The most likely reason is:",
      "choices": ["The converter was defective", "The upstream engine fault that killed the first converter was never fixed", "The wrong gasoline was used", "The battery is weak"],
      "answer": 1,
      "explanation": "Correct: (b). A misfire, a rich mixture, or an oil-burning engine poisons or melts a new converter the same way. (a) A defective converter is possible but far less likely than an unfixed upstream fault. (c) Fuel grade does not kill converters in weeks. (d) A weak battery does not damage a converter."
    }
  ],
  "studyGuide": "\n<h3>Module 11 — Emissions-Test Failure Scenarios: Quick Reference</h3>\n<p><strong>Work backwards:</strong> The failed gas names the system; the data names the fault.</p>\n<p><strong>High HC:</strong> Unburned fuel → misfire first, not the converter. Mode $06 finds the cylinder.</p>\n<p><strong>High CO:</strong> Rich mixture → short pulse + negative trims = over-delivery. Check pressure and injectors.</p>\n<p><strong>High NOx:</strong> Hot combustion → EGR first, proven by the command test.</p>\n<p><strong>Monitors not ready:</strong> No light, no codes, still a failure → drive cycle, not parts. Never clear codes before a test.</p>\n<p><strong>EVAP:</strong> Smoke test finds the leak; a stuck purge valve can cause a lean code too. Fix both faults.</p>\n<p><strong>Rule:</strong> Fix the engine fault before the converter — a new converter on a faulty engine fails again.</p>\n<p><strong>Self-check:</strong> Take a failed gas reading and work backwards to the fault, out loud.</p>\n"
};
