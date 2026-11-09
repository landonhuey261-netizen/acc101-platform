module.exports = {
  "number": 9,
  "slug": "a8-engine-performance-review",
  "title": "A8 Review — Engine Performance",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain how fuel trim shows whether the engine is running rich or lean, and by how much.",
    "Diagnose a misfire from the code, the cylinder, and the three things that cylinder needs.",
    "Explain OBD II, readiness monitors, and what a scan tool can and cannot tell you.",
    "Diagnose sensor faults — O2, MAF, MAP, crank, and cam — from their symptoms.",
    "Score the A8 practice exam timed (50 questions, 75 minutes) at the 70% benchmark."
  ],
  "sections": [
    {
      "heading": "Fuel Trim — the Engine's Own Confession",
      "html": "<p>Fuel trim is the computer's correction to the fuel delivery, and it is the most honest number on a scan tool. Short-term fuel trim (STFT) is the correction right now; long-term fuel trim (LTFT) is the learned correction over time. Positive trim means the computer is adding fuel — the engine is running lean and the computer is compensating. Negative trim means it is taking fuel away — the engine is running rich. A healthy engine sits near zero on both; a total trim (STFT + LTFT) beyond about ±10% is a fault the computer is already fighting.</p><p>The split between the two trims is the diagnosis. High positive trim at idle that clears up at higher rpm means unmetered air is getting in — a vacuum leak, which matters most when the engine is moving the least air. High positive trim at all speeds means the fuel delivery is short everywhere — low fuel pressure, a weak pump, or a clogged filter. Negative trim at all speeds means too much fuel or a sensor lying about the air — a leaking injector, high fuel pressure, or a MAF sensor over-reporting airflow.</p><p><div class=\"callout\"><strong>Key idea:</strong> Positive trim = adding fuel = lean. Negative trim = removing fuel = rich. High at idle only = vacuum leak. High everywhere = fuel delivery. That four-line map answers half the A8 driveability questions.</div></p>"
    },
    {
      "heading": "Misfire — One Cylinder, Three Needs",
      "html": "<p>A misfire is one cylinder not contributing, and the codes name the cylinder: P0300 is a random misfire, P0301 is cylinder 1, P0302 is cylinder 2, and so on. Each cylinder needs three things to fire: spark, fuel, and compression — at the right time. A misfire on one cylinder with good spark and good fuel is a compression problem. A misfire that moves when you swap coils or injectors between cylinders is the part you moved. A misfire on all cylinders is a shared fault — fuel pressure, timing, or a vacuum leak — not six bad coils at once.</p><p>The misfire counter on the scan tool is the test that separates a real misfire from a rough idle. A cylinder with a climbing misfire count under load has a fault that only shows up under load — a weak coil, a fouled plug, or a valve that leaks when hot. A misfire that sets the check-engine light flashing is a catalyst-damaging misfire: raw fuel is reaching the catalytic converter, and the car should be driven gently to a repair, not at highway speed.</p><p><div class=\"callout\"><strong>Key idea:</strong> Swap the suspect part to another cylinder. If the misfire follows the part, the part is bad. If it stays, the cylinder is bad. That one move replaces an hour of guessing.</div></p>"
    },
    {
      "heading": "OBD II, Codes, and Readiness Monitors",
      "html": "<p>OBD II is the standard that makes every car's computer speak the same diagnostic language. A code is a symptom pointer, not a diagnosis: P0171 means the computer sees a lean condition on bank 1, and the cause could be a vacuum leak, low fuel pressure, or a lying MAF sensor. The code tells you which system is unhappy; the data — fuel trim, sensor readings, freeze-frame — tells you why. A code never names a part to replace.</p><p>Readiness monitors are the computer's self-tests: catalyst, EVAP, O2 sensor, EGR, and others, each marked complete or incomplete. A monitor that will not complete usually means the drive cycle has not been run — the specific mix of cold start, cruise, and deceleration the computer needs — or a fault is preventing the test. Clearing codes resets the monitors to incomplete, which is why a car that has just had its codes cleared will fail an emissions test even with no light on: the monitors have not run yet.</p><p><div class=\"callout\"><strong>Key idea:</strong> A code is a clue, not a verdict. Read the freeze-frame — the exact conditions when the code set — before you touch a part. And clearing a code clears the evidence with it.</div></p>"
    },
    {
      "heading": "Sensors — What Each One Lies About",
      "html": "<p>The oxygen sensor watches the exhaust and reports rich or lean; a lazy O2 sensor — one that switches slowly — makes the computer chase the mixture and sets fuel-trim codes. The MAF sensor measures the air coming in; a dirty MAF under-reports airflow, so the computer delivers too little fuel and the engine runs lean. The MAP sensor measures intake-manifold pressure; a MAP fault looks like a load fault, because the computer uses it to judge how hard the engine is working.</p><p>Crank and cam sensors tell the computer where the engine is in its rotation and when to fire. A crank sensor that drops out makes the engine stall or refuse to start with no spark and no injector pulse — the computer will not fire anything without a crank signal. A cam sensor fault usually still lets the engine run, but badly, because the computer loses its timing reference for injection. A sensor code plus a plausible symptom is a sensor; a sensor code plus an impossible reading is a wiring fault — check the power, ground, and signal wires before the sensor.</p><p><div class=\"callout\"><strong>Key idea:</strong> A sensor that reads wrong makes the computer do the wrong thing confidently. Check the sensor's reading against reality — a scan-tool value that cannot be true is a sensor or wiring fault, not an engine fault.</div></p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong> positive trim is lean, negative trim is rich; a misfire that moves with a swapped part is the part; a code is a clue, not a verdict; clearing codes clears the evidence; a crank signal is required for spark and fuel.</p><p>The A8 exam is 50 questions in 75 minutes. The fuel-trim questions are the highest-value ones — work the trim map (idle-only versus everywhere, positive versus negative) before you read the choices. And remember the L1 gate: you cannot register for L1 until A8 is passed, so this is the exam that unlocks the advanced tests.</p><p><div class=\"callout\"><strong>Key idea:</strong> Common mistake: replacing the oxygen sensor for a P0171 lean code. The sensor is reporting the lean condition — it is usually telling the truth, and the fault is the vacuum leak or the fuel delivery it is reporting on.</div></p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Fuel trim",
      "def": "The computer's correction to fuel delivery; positive means adding fuel (lean), negative means removing fuel (rich)."
    },
    {
      "term": "STFT",
      "def": "Short-term fuel trim — the correction right now."
    },
    {
      "term": "LTFT",
      "def": "Long-term fuel trim — the learned correction over time."
    },
    {
      "term": "Misfire",
      "def": "One cylinder failing to contribute; P0300 is random, P0301–P0312 name the cylinder."
    },
    {
      "term": "Freeze-frame",
      "def": "The snapshot of conditions when a code set — rpm, load, temperature, fuel trim at that moment."
    },
    {
      "term": "Readiness monitor",
      "def": "A self-test the computer runs on a system (catalyst, EVAP, O2, EGR); incomplete means the test has not run."
    },
    {
      "term": "Drive cycle",
      "def": "The specific driving pattern the computer needs to run its monitors — cold start, cruise, deceleration."
    },
    {
      "term": "O2 sensor",
      "def": "Reports rich or lean from the exhaust; a lazy sensor switches slowly and confuses the computer."
    },
    {
      "term": "MAF sensor",
      "def": "Mass airflow sensor — measures the air entering the engine; a dirty one under-reports airflow."
    },
    {
      "term": "MAP sensor",
      "def": "Manifold absolute pressure sensor — measures intake pressure, used to judge engine load."
    },
    {
      "term": "Crank sensor",
      "def": "Reports crankshaft position and speed; without its signal the computer will not fire spark or fuel."
    },
    {
      "term": "Cam sensor",
      "def": "Reports camshaft position; used for injection timing and for identifying cylinder 1."
    },
    {
      "term": "EVAP system",
      "def": "Captures fuel vapors from the tank and routes them to the engine to be burned, instead of venting them."
    },
    {
      "term": "Catalytic converter",
      "def": "Converts exhaust pollutants into less harmful gases; raw fuel from a misfire can overheat and destroy it."
    }
  ],
  "video": {
    "title": "Diagnose a Honda Engine That Won't Start",
    "embedUrl": "https://www.youtube.com/embed/PNhuDCVIydw",
    "note": "ChrisFix diagnoses a Civic that has spark, fuel, and compression but will not start, working the five things an engine needs: fuel, air, spark, compression, timing. A model of the no-start method the A8 exam rewards.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1 — Fuel trim.</strong> A 2017 Honda Civic shows LTFT +14% at idle and +3% at 2,500 rpm. STFT is near zero. What is the most likely fault, and why?</p>",
      "solution": "<p><strong>Answer:</strong> A vacuum leak. Step 1: positive trim means the computer is adding fuel — the engine is lean. Step 2: the correction is large at idle and small at speed. Step 3: a vacuum leak adds a fixed amount of unmetered air, which is a large share of the small airflow at idle and a small share at higher rpm — exactly this pattern.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2 — Trim everywhere.</strong> A 2018 Ford F-150 shows LTFT +16% at idle and +15% at cruise. What does the 'everywhere' pattern point at?</p>",
      "solution": "<p><strong>Answer:</strong> Fuel delivery — low fuel pressure, a weak pump, or a clogged filter. Step 1: the trim is high at all speeds, so the fault scales with the engine's fuel demand. Step 2: a vacuum leak would fade at speed; this does not. Step 3: check fuel pressure against the specification and watch it under load before replacing any sensor.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3 — Swap test.</strong> A 2016 Toyota Corolla has a P0302 misfire on cylinder 2. You swap the coil from cylinder 2 to cylinder 4, and the misfire moves to cylinder 4. What is the fault?</p>",
      "solution": "<p><strong>Answer:</strong> The coil from cylinder 2 is bad. Step 1: the misfire followed the part, not the cylinder. Step 2: that proves the coil — not the plug, the injector, or the cylinder's compression — is the fault. Step 3: replace that coil; no further testing of cylinder 2 is needed.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4 — Flashing light.</strong> A 2019 Chevrolet Malibu's check-engine light is flashing and the engine is shaking. What does the flashing mean, and what should the driver do?</p>",
      "solution": "<p><strong>Answer:</strong> A catalyst-damaging misfire — raw fuel is reaching the catalytic converter. Step 1: a flashing light is the computer's warning that the converter is being damaged now. Step 2: the driver should slow down and drive gently to a repair, not continue at highway speed. Step 3: the raw fuel can overheat and melt the converter, turning a coil or plug job into a converter job.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5 — Code vs cause.</strong> A 2017 Nissan Altima sets P0171 (system too lean, bank 1). The oxygen sensor is new. What is the most likely cause, and what should be checked first?</p>",
      "solution": "<p><strong>Answer:</strong> The oxygen sensor is reporting the truth — the engine is lean. Step 1: check the fuel trims at idle and at speed. Step 2: high trim at idle only points at a vacuum leak; high trim everywhere points at fuel pressure. Step 3: smoke-test the intake for leaks and check fuel pressure — do not replace the sensor again.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6 — Readiness.</strong> A 2018 Honda Accord just had its codes cleared. It goes for an emissions test the same day and fails, with no check-engine light on. Why?</p>",
      "solution": "<p><strong>Answer:</strong> Clearing the codes reset the readiness monitors to incomplete. Step 1: the monitors are self-tests that must run and pass before the car can be tested. Step 2: they need a drive cycle — a cold start, cruise, and deceleration — to complete. Step 3: the car needs to be driven through its drive cycle, then the monitors will read complete and the test can pass.</p>"
    }
  ],
  "quiz": [
    {
      "q": "LTFT is +14% at idle and +3% at 2,500 rpm. What is the most likely fault?",
      "choices": [
        "A weak fuel pump",
        "A vacuum leak",
        "A leaking injector",
        "A bad catalytic converter"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A vacuum leak adds a fixed amount of unmetered air — a large share at idle, a small share at speed. (a) is wrong: a weak pump gives high trim at all speeds, not just at idle. (c) is wrong: a leaking injector adds fuel, giving negative trim. (d) is wrong: a converter fault does not change fuel trim this way."
    },
    {
      "q": "Positive fuel trim means the computer is:",
      "choices": [
        "Removing fuel because the engine is rich",
        "Adding fuel because the engine is lean",
        "Ignoring the oxygen sensor",
        "Running in open loop"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Positive trim is fuel added to correct a lean condition. (a) is wrong: that is negative trim. (c) is wrong: fuel trim is the computer acting on the oxygen sensor's report. (d) is wrong: in open loop the computer does not trim at all."
    },
    {
      "q": "A P0302 code means a misfire on:",
      "choices": [
        "Any cylinder, at random",
        "Cylinder 2",
        "Bank 2",
        "The second bank only"
      ],
      "answer": 1,
      "explanation": "Correct: (b). P0301–P0312 name the cylinder; P0302 is cylinder 2. (a) is wrong: random misfire is P0300. (c) is wrong: bank 2 would be named in a bank code, not a P0302. (d) is wrong: there is no 'second bank only' meaning for P0302."
    },
    {
      "q": "You swap a coil from the misfiring cylinder to another cylinder, and the misfire moves with it. What is the fault?",
      "choices": [
        "The cylinder's compression",
        "The coil you moved",
        "The fuel injector on the original cylinder",
        "The crank sensor"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The misfire followed the part, so the part is bad. (a) is wrong: a compression fault stays with the cylinder. (c) is wrong: the injector stayed on the original cylinder, and the misfire left it. (d) is wrong: a crank-sensor fault affects all cylinders, not one."
    },
        {
      "q": "During a road test the check-engine light starts flashing and the engine loses power. What should the driver do?",
      "choices": [
        "Keep driving — it is just a loose gas cap",
        "Ease off, pull over safely, and stop driving — a catalyst-damaging misfire is happening now",
        "Wait for a monitor to complete",
        "Ignore it until the next oil change"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A flashing light means a misfire is damaging the catalytic converter right now — continuing to drive makes it worse. (a) is wrong: a loose cap sets an EVAP code with a steady light. (c) is wrong: an incomplete monitor sets no light at all. (d) is wrong: oil life is a maintenance reminder, not a flashing light."
    },
    {
      "q": "A code is best described as:",
      "choices": [
        "A diagnosis that names the part to replace",
        "A symptom pointer — the code tells you which system is unhappy, the data tells you why",
        "Proof the sensor is bad",
        "A reason to clear the codes and retest"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A code points at a system; freeze-frame and live data find the cause. (a) is wrong: no code names a part to replace. (c) is wrong: the sensor is usually reporting the truth. (d) is wrong: clearing codes destroys the evidence."
    },
    {
      "q": "A dirty MAF sensor under-reports airflow. What happens to the mixture?",
      "choices": [
        "It runs rich",
        "It runs lean — the computer delivers too little fuel for the real airflow",
        "It does not change",
        "It runs lean only at idle"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The computer fuels for the air it thinks is there; less reported air means less fuel than the real air needs. (a) is wrong: that would need the MAF to over-report airflow. (c) is wrong: the mixture follows the MAF's report. (d) is wrong: the error scales with airflow, it is not idle-only."
    },
    {
      "q": "Clearing codes just before an emissions test causes a failure because:",
      "choices": [
        "The check-engine light comes on",
        "The readiness monitors reset to incomplete and have not run yet",
        "The fuel trims are erased permanently",
        "The catalytic converter stops working"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Clearing codes resets the monitors; until a drive cycle completes them, the car cannot pass. (a) is wrong: the light stays off after clearing. (c) is wrong: fuel trims relearn as the car is driven. (d) is wrong: the converter is unaffected by clearing codes."
    }
  ],
  "studyGuide": "\n<h3>Module 9 — A8 Review: Quick Reference</h3>\n<p><strong>Core idea:</strong> Positive trim = adding fuel = lean. Negative trim = removing fuel = rich. A code is a clue, not a verdict.</p>\n<p><strong>Trim map:</strong> high at idle only = vacuum leak · high everywhere = fuel delivery · negative everywhere = too much fuel or a lying MAF.</p>\n<div class=\"formula\">P0300 = random misfire &nbsp;|&nbsp; P0301–P0312 = named cylinder &nbsp;|&nbsp; Misfire follows the swapped part = the part is bad &nbsp;|&nbsp; Flashing light = catalyst damage, slow down</div>\n<p><strong>A8 exam:</strong> 50 questions, 75 minutes, 90 seconds a question, 70% practice benchmark. A8 is the gate to L1 — pass it first.</p>\n<p><strong>Self-check:</strong> Say the trim map from memory, then explain why a P0171 code usually does not mean a bad oxygen sensor.</p>\n"
};
