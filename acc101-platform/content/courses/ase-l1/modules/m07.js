// ase-l1 - Module 7: Emissions & I/M Failure Diagnosis
module.exports = {
  "number": 7,
  "slug": "emissions-im-failure-diagnosis",
  "title": "Emissions & I/M Failure Diagnosis",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain how the catalytic converter, oxygen sensors, EGR, and EVAP systems clean the exhaust.",
    "Read the oxygen sensor waveforms to judge catalyst health.",
    "Diagnose an I/M failure: which test failed, and what fault is behind it.",
    "Separate a failed catalyst from a failed sensor or an engine fault that killed the catalyst.",
    "Explain readiness monitors and why a vehicle can fail an inspection without a check-engine light."
  ],
  "sections": [
    {
      "heading": "The Emissions System, Working Together",
      "html": "<p>A gasoline engine's exhaust is cleaned by a team. The <strong>catalytic converter</strong> converts hydrocarbons, carbon monoxide, and nitrogen oxides into harmless gases — but only when it is hot and only when the mixture is right. The <strong>oxygen sensors</strong> watch the mixture before the converter and the converter's work after it. The <strong>EGR system</strong> meters exhaust gas back into the intake to lower combustion temperature and cut NOx at the source. And the <strong>EVAP system</strong> captures fuel vapor from the tank so it never reaches the air at all.</p>\n<p>The converter is the most demanding member of the team. It needs a steady, correct mixture: too lean and it cannot reduce NOx; too rich and it overheats trying to burn the excess fuel. It needs to be hot — a cold converter does nothing, which is why cold-start emissions are the hardest to control. And it is fragile in one specific way: it can be poisoned or melted by an engine fault upstream, and a converter killed by a misfire or an oil-burning engine will fail again if the upstream fault is not fixed.</p>\n<div class=\"callout\"><strong>Key idea:</strong> The converter needs a correct mixture and a hot bed to work — and an engine fault upstream can kill it. A failed converter is often the victim of a fault, not the fault itself.</div>"
    },
    {
      "heading": "Reading the Oxygen Sensors: The Converter's Report Card",
      "html": "<p>The two oxygen sensors tell the converter's story. The <strong>upstream sensor</strong> switches rapidly between rich and lean as the computer trims the mixture — a healthy upstream sensor crosses back and forth many times a minute, showing the computer is actively managing the mixture. The <strong>downstream sensor</strong> sits after the converter, and on a healthy system it reads steady: the converter is smoothing the exhaust, so the downstream signal barely moves.</p>\n<p>When the converter fails, the downstream sensor starts to mirror the upstream one — switching rapidly, following the same rhythm. That mirror pattern is the classic sign of a dead converter, and it is what sets a P0420 catalyst efficiency code. The code is the computer's way of saying the downstream sensor looks too much like the upstream one.</p>\n<p>But a mirror pattern can also be faked. An exhaust leak between the sensors lets outside air in and makes the downstream sensor read wrong. A lazy upstream sensor that switches slowly makes the comparison meaningless. And a converter that has not warmed up yet will mirror the upstream sensor until it reaches working temperature. Check the leak, the sensor response, and the temperature before condemning the converter.</p>"
    },
    {
      "heading": "I/M Testing: What the Inspection Actually Measures",
      "html": "<p>An <strong>I/M test</strong> — inspection and maintenance, the emissions test many states require — checks the vehicle in one of two ways. The common way is the OBD II check: the inspector reads the codes and the readiness monitors, and the vehicle fails if the check-engine light is on, if an emissions code is stored, or if too many monitors are not ready. The older way is the tailpipe test: the exhaust is sampled directly while the engine runs, and the vehicle fails if any measured gas exceeds its limit.</p>\n<p>Either way, the failure has a specific cause, and the test result names it. A tailpipe failure for high hydrocarbons means unburned fuel is reaching the exhaust — a misfire, a rich mixture, or a dead converter. High carbon monoxide means a rich mixture. High NOx means combustion is too hot or the EGR system is not working. A failure for readiness means the monitors never completed — and the cause is usually a recent code clear, a battery disconnect, or a fault that keeps a monitor from running.</p>\n<p>The most important I/M fact for a technician: a vehicle can fail without a check-engine light. A converter can be weak enough to fail a tailpipe test while still passing its own monitor. A monitor can be not ready with no code at all. The inspection is a separate judgment from the dashboard — and the technician must test the vehicle the way the inspection will, not just read the light.</p>"
    },
    {
      "heading": "Diagnosing the Failure: Work Backwards from the Gas",
      "html": "<p>Work backwards from the failed measurement. <strong>High hydrocarbons:</strong> unburned fuel — check for misfires, a rich mixture, a leaking injector, or a converter that cannot clean up what the engine sends it. <strong>High carbon monoxide:</strong> a rich mixture — check fuel pressure, a leaking injector, a lying air flow sensor, or an oxygen sensor that is misreporting. <strong>High NOx:</strong> combustion too hot or EGR not working — check the EGR valve and passages, the cooling system, and whether the engine is running lean.</p>\n<p><strong>EVAP failure:</strong> a leak in the vapor system — the gas cap is the cheapest suspect, then the hoses, the purge valve, and the vent valve. A smoke test of the EVAP system finds leaks the eye cannot see, and a purge valve stuck open will set lean codes as well as fail the test.</p>\n<p>In every case, fix the engine fault before the converter. A new converter on an engine that still misfires or runs rich will be poisoned or melted within weeks, and the customer will be back with the same failure — and a bill for a converter they did not need. The converter is the last part, not the first.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Team: converter (needs correct mixture and heat) · oxygen sensors (upstream switches, downstream steady) · EGR (cuts NOx at the source) · EVAP (captures fuel vapor).</li>\n<li>Downstream sensor mirroring the upstream one is the classic sign of a dead converter — and the cause of a P0420.</li>\n<li>I/M test: OBD II check (codes and readiness) or tailpipe sampling (measured gases). A vehicle can fail with no check-engine light.</li>\n<li>Work backwards from the gas: high HC = unburned fuel · high CO = rich mixture · high NOx = hot combustion or failed EGR · EVAP = vapor leak.</li>\n<li>Fix the engine fault before the converter — a new converter on a misfiring or rich-running engine will fail again.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Replacing the converter for a P0420 without checking for an exhaust leak, a lazy upstream sensor, or a cold converter. Any of the three can fake the mirror pattern.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Clearing codes before an emissions test. The monitors reset to not ready, and the vehicle fails the inspection for readiness even if the fault is fixed.</div>\n<p><strong>Ready-to-work link:</strong> If you can read the two oxygen sensors and say whether the converter is healthy, and work backwards from a failed gas reading, you have this module. Module 8 puts a scope in your hands: waveform analysis.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Catalytic converter", "def": "The exhaust device that converts hydrocarbons, carbon monoxide, and NOx into harmless gases — only when hot and with a correct mixture." },
    { "term": "Upstream oxygen sensor", "def": "The oxygen sensor before the converter; it switches rapidly as the computer trims the mixture." },
    { "term": "Downstream oxygen sensor", "def": "The oxygen sensor after the converter; on a healthy system it reads steady, because the converter smooths the exhaust." },
    { "term": "Mirror pattern", "def": "The downstream sensor switching like the upstream one — the classic sign of a failed converter." },
    { "term": "P0420", "def": "Catalyst system efficiency below threshold — the code set when the downstream sensor mirrors the upstream one." },
    { "term": "EGR system", "def": "Exhaust gas recirculation — meters exhaust gas into the intake to lower combustion temperature and cut NOx." },
    { "term": "EVAP system", "def": "Evaporative emissions system — captures fuel vapor from the tank so it never reaches the air." },
    { "term": "I/M test", "def": "Inspection and maintenance — the emissions test, done by OBD II check or tailpipe sampling." },
    { "term": "Readiness", "def": "Whether the OBD II self-tests have completed; too many not ready fails an inspection." },
    { "term": "Hydrocarbons (HC)", "def": "Unburned fuel in the exhaust; high HC means a misfire, a rich mixture, or a dead converter." },
    { "term": "Carbon monoxide (CO)", "def": "A product of incomplete combustion; high CO means a rich mixture." },
    { "term": "NOx", "def": "Nitrogen oxides from hot combustion; high NOx means combustion is too hot or the EGR system has failed." }
  ],
  "video": {
    "title": "How to Test a Catalytic Converter (2CarPros)",
    "embedUrl": "https://www.youtube.com/embed/kNXh1Lphzr4",
    "note": "2CarPros tests a catalytic converter the practical way: the P0420 code, the temperature check across the converter, the backpressure test, and the rattle check. Watch how each test answers a different question — and note which ones the oxygen sensor waveforms in this module answer faster.",
    "more": [
      { "title": "Clogged Catalytic Converter: Symptoms, Causes, and Diagnosis", "url": "https://www.youtube.com/watch?v=qJTmddbOxMk" }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> The downstream oxygen sensor is switching rapidly, mirroring the upstream sensor. What does that suggest, and what two things should you check before replacing the converter?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: It suggests the converter is no longer cleaning the exhaust — the classic sign of a failed converter and the cause of a P0420. Step 2: Before replacing it, check for an exhaust leak between the sensors (outside air fakes the mirror pattern) and whether the upstream sensor is lazy (a slow sensor makes the comparison meaningless) — and confirm the converter is fully warm.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A tailpipe test fails for high hydrocarbons. Name two possible causes and the test that separates them.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Unburned fuel is reaching the exhaust — a misfire or a rich mixture are the prime suspects. Step 2: Check for misfires (codes, Mode $06 counts, power balance) and read the fuel trims — a misfire points at ignition or mechanical, while a rich mixture with negative trims points at fuel delivery or a lying sensor.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A tailpipe test fails for high NOx. What system should you check first, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The EGR system — its job is to lower combustion temperature and cut NOx at the source. Step 2: Check whether the EGR valve moves on command and whether its passages are clogged with carbon; also check the cooling system, since an overheating engine makes more NOx.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A vehicle fails an inspection for readiness, with no check-engine light and no codes. What is the most likely cause?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The monitors never completed — most likely because the codes were recently cleared or the battery was disconnected, resetting them all to not ready. Step 2: The fix is a drive cycle through the conditions each monitor needs, not a repair — unless a fault is keeping a monitor from running, which the scan tool will show.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A new catalytic converter fails within weeks of installation. What was missed?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The upstream engine fault that killed the first converter was never fixed — a misfire, a rich mixture, or an oil-burning engine poisons or melts a new converter the same way. Step 2: The converter is the last part, not the first; fix the engine, then the converter.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> An EVAP failure is suspected and the gas cap is fine. What is the next test, and what does it find?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A smoke test of the EVAP system. Step 2: It finds leaks the eye cannot see — cracked hoses, a leaking purge or vent valve, or a cracked canister — by showing where the smoke escapes.</p>"
    }
  ],
  "quiz": [
    {
      "q": "On a healthy system, the downstream oxygen sensor should read:",
      "choices": ["Switching rapidly, like the upstream sensor", "Steady, because the converter smooths the exhaust", "Zero at all times", "The same as the fuel level"],
      "answer": 1,
      "explanation": "Correct: (b). A working converter steadies the downstream signal. (a) Rapid switching downstream mirrors the upstream sensor — the sign of a failed converter. (c) A zero reading means a dead sensor or a wiring fault. (d) Fuel level is unrelated to the oxygen sensors."
    },
    {
      "q": "A downstream sensor mirroring the upstream sensor most likely means:",
      "choices": ["The converter is healthy", "The converter has failed and is no longer cleaning the exhaust", "The fuel pump has failed", "The battery is weak"],
      "answer": 1,
      "explanation": "Correct: (b). The mirror pattern is the classic sign of a dead converter and sets a P0420. (a) A healthy converter steadies the downstream reading. (c) A fuel pump fault changes the mixture, not the sensor relationship. (d) A weak battery causes other symptoms, not a mirror pattern."
    },
    {
      "q": "High hydrocarbons (HC) in a tailpipe test mean:",
      "choices": ["A lean mixture", "Unburned fuel reaching the exhaust — a misfire, a rich mixture, or a dead converter", "A cold engine only", "A full fuel tank"],
      "answer": 1,
      "explanation": "Correct: (b). HC is unburned fuel, and it escapes when combustion fails or the converter cannot clean it. (a) A lean mixture usually raises NOx, not HC. (c) A cold engine is one cause among several. (d) Fuel level does not affect HC."
    },
    {
      "q": "High NOx in a tailpipe test most likely points to:",
      "choices": ["A rich mixture", "Combustion that is too hot, or a failed EGR system", "A clogged air filter", "A dead battery"],
      "answer": 1,
      "explanation": "Correct: (b). NOx forms in hot combustion, and the EGR system's job is to cool it. (a) A rich mixture raises CO, not NOx. (c) A clogged filter makes black smoke and lost power on a diesel, and a rich mixture on a gasoline engine. (d) A battery fault does not change combustion temperature."
    },
    {
      "q": "A vehicle can fail an I/M inspection with no check-engine light because:",
      "choices": ["The inspector is mistaken", "A converter can be weak enough to fail a tailpipe test while passing its monitor, or monitors can be not ready with no code", "The light bulb is burned out", "Emissions tests are random"],
      "answer": 1,
      "explanation": "Correct: (b). The inspection judges the vehicle independently of the dashboard — a weak converter or incomplete monitors fail it. (a) The inspection measures real results. (c) A burned-out bulb is a separate inspection failure. (d) The tests are fixed procedures, not random."
    },
    {
      "q": "Before replacing a catalytic converter, the technician should:",
      "choices": ["Replace the oxygen sensors first, always", "Fix any engine fault that killed it — a misfire, a rich mixture, or an oil-burning engine — or the new converter will fail too", "Clear the codes and hope", "Replace the fuel pump"],
      "answer": 1,
      "explanation": "Correct: (b). The converter is the last part; the upstream fault must be fixed first. (a) Sensors are tested, not replaced by routine. (c) Clearing codes does not repair anything. (d) The fuel pump is only a suspect if delivery is proven faulty."
    },
    {
      "q": "The EGR system's job is to:",
      "choices": ["Increase power", "Lower combustion temperature and cut NOx at the source", "Clean the DPF", "Pressurize the fuel"],
      "answer": 1,
      "explanation": "Correct: (b). Recirculated exhaust gas lowers peak combustion temperature, reducing NOx formation. (a) EGR displaces fresh air and does not increase power. (c) The DPF is a diesel part, cleaned by regeneration. (d) Fuel pressure is the pump and regulator's job."
    },
    {
      "q": "An EVAP failure with a good gas cap is best found with:",
      "choices": ["A compression test", "A smoke test of the EVAP system, showing where vapor escapes", "A fuel pressure gauge", "An oscilloscope on the ignition"],
      "answer": 1,
      "explanation": "Correct: (b). Smoke reveals leaks in hoses, valves, and the canister that the eye cannot see. (a) Compression tests the engine's cylinders. (c) Fuel pressure is a delivery check. (d) The scope checks ignition, not vapor leaks."
    }
  ],
  "studyGuide": "\n<h3>Module 7 — Emissions & I/M Failure Diagnosis: Quick Reference</h3>\n<p><strong>Team:</strong> Converter (needs correct mixture + heat) · O2 sensors (upstream switches, downstream steady) · EGR (cuts NOx) · EVAP (captures vapor).</p>\n<p><strong>Mirror pattern:</strong> Downstream switching like upstream = failed converter (P0420). Check for an exhaust leak, a lazy upstream sensor, and a cold converter first.</p>\n<p><strong>I/M test:</strong> OBD II check (codes + readiness) or tailpipe sampling (measured gases). Can fail with no check-engine light.</p>\n<p><strong>Work backwards:</strong> High HC = unburned fuel · High CO = rich mixture · High NOx = hot combustion / failed EGR · EVAP = vapor leak (smoke test).</p>\n<p><strong>Rule:</strong> Fix the engine fault before the converter — a new converter on a misfiring or rich engine fails again.</p>\n<p><strong>Watch out:</strong> Clearing codes before a test resets readiness to not ready — an automatic inspection failure.</p>\n<p><strong>Self-check:</strong> Read two oxygen sensors and say whether the converter is healthy; work backwards from a failed gas reading.</p>\n"
};
