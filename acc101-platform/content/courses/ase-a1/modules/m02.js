// ase-a1 - Module 2: Engine Diagnosis: Compression, Leakdown & Vacuum
module.exports = {
  "number": 2,
  "slug": "engine-diagnosis-compression-leakdown-vacuum",
  "title": "Engine Diagnosis: Compression, Leakdown & Vacuum",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what a compression test measures and what its readings tell you.",
    "Explain what a leakdown test measures and how it differs from a compression test.",
    "Use a vacuum gauge reading to recognize common engine problems.",
    "Compare readings across cylinders to find the weak one.",
    "Decide the next test or repair from a set of readings, instead of guessing parts."
  ],
  "sections": [
    {
      "heading": "Why Test Instead of Guessing",
      "html": "<p>When an engine runs rough, lacks power, or misfires, the cause could be in the fuel system, the ignition system, or the engine itself. The fastest way to split that list is to test the engine's mechanical health first: can each cylinder seal and squeeze the mixture? If a cylinder cannot seal, no spark plug or injector will fix it — and you will have saved the customer from paying for parts that were never the problem.</p>\n<p>Three tests do this job. A <strong>compression test</strong> measures how much pressure each cylinder builds when the engine cranks. A <strong>leakdown test</strong> feeds air into a cylinder at a known pressure and measures how much leaks out — and, by listening, where it leaks to. A <strong>vacuum gauge</strong> reads the suction in the intake manifold while the engine runs, and its needle tells a story about timing, sealing, and restrictions. Each test answers a different question, and together they pin down the fault.</p>"
    },
    {
      "heading": "The Compression Test",
      "html": "<p>To run a compression test, you warm the engine, remove the spark plugs, disable the fuel and ignition so the engine cannot start, and hold the throttle open so air can enter freely. Then you crank the engine with a compression gauge fitted in one spark-plug hole at a time and write down the highest reading each cylinder reaches. The exact numbers matter less than the comparison: a healthy engine has all cylinders reading close together, and one cylinder reading clearly lower than the rest is the one to investigate.</p>\n<p>A low reading on one cylinder means that cylinder is not sealing or not filling properly — a burned valve, a worn piston ring, a blown head gasket, or a valve that does not close. A low reading on two neighboring cylinders often points at the head gasket between them. Low readings on all cylinders can mean general wear, or a test done wrong — a cold engine, a closed throttle, or a weak battery cranking slowly all lower every reading. Always check your test before condemning the engine.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Compression testing compares cylinders with each other. One cylinder far below the rest is the story; the absolute numbers are only the first clue.</div>"
    },
    {
      "heading": "The Leakdown Test",
      "html": "<p>A leakdown test is slower and more precise. You bring one cylinder to the top of its compression stroke with both valves closed, then feed compressed air into the cylinder through the spark-plug hole and read what percentage of that air leaks out. A small leak is normal — air slips past piston rings by design. A large leak means something is wrong, and where the air escapes tells you what: air hissing from the throttle body means an intake valve is not sealing, air from the tailpipe means an exhaust valve is not sealing, bubbles in the cooling system mean the head gasket is leaking into the coolant, and air from the oil filler cap means the piston rings are letting air past into the crankcase.</p>\n<p>That is why you need both tests. Compression tells you <em>that</em> a cylinder is weak; leakdown tells you <em>why</em> it is weak and which part has failed. A compression test takes minutes and screens the whole engine; a leakdown test takes longer and diagnoses the one cylinder that failed the screen.</p>"
    },
    {
      "heading": "Reading a Vacuum Gauge",
      "html": "<p>A vacuum gauge connects to the intake manifold and reads the suction the pistons create. At idle, a healthy engine shows a steady needle in the normal range. A needle that flickers rapidly often means a valve is not sealing — each time that valve leaks, the needle jumps. A needle that slowly drifts or reads low and steady can mean late valve timing or a restricted exhaust. A needle that drops sharply when you snap the throttle open and then recovers is normal; a needle that stays low after the snap suggests an exhaust restriction.</p>\n<p>The vacuum gauge is the oldest diagnostic tool in the box and still one of the fastest. It cannot name the failed part by itself, but it can tell you in seconds whether the problem is a sealing problem, a timing problem, or a restriction — and that tells you which test to run next.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Test mechanical health first: if a cylinder cannot seal, no ignition or fuel part will fix it.</li>\n<li>Compression test: crank each cylinder and compare — one cylinder clearly lower than the rest is the suspect.</li>\n<li>Leakdown test: feed air in, measure what leaks, listen for where it goes — intake valve, exhaust valve, head gasket, or rings.</li>\n<li>Vacuum gauge: a steady needle is healthy; flicker means a valve leak; low and slow means timing or a restriction.</li>\n<li>Always check the test itself before condemning the engine — cold engine, closed throttle, and slow cranking all skew readings.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Replacing spark plugs and coils for a misfire without a compression test, then finding the cylinder had a burned valve all along. Test first, replace second.</div>\n<p><strong>Ready-to-Work link:</strong> If you can explain to a coworker when to use a compression test and when to reach for the leakdown tester, you have this module. Module 3 opens the top of the engine: the cylinder head and valve train.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Compression test",
      "def": "A test that measures the pressure each cylinder builds while the engine cranks, to compare cylinders with each other."
    },
    {
      "term": "Leakdown test",
      "def": "A test that feeds compressed air into a sealed cylinder and measures how much leaks out, and where it escapes to."
    },
    {
      "term": "Vacuum gauge",
      "def": "A gauge that reads intake-manifold suction while the engine runs; its needle movement reveals sealing, timing, and restriction problems."
    },
    {
      "term": "Burned valve",
      "def": "A valve whose sealing face is damaged by heat, so it can no longer seal the cylinder fully."
    },
    {
      "term": "Head gasket",
      "def": "The seal between the cylinder head and the engine block; when it fails, pressure, coolant, or oil can leak between passages."
    },
    {
      "term": "Piston ring",
      "def": "A springy metal ring around a piston that seals the gap between the piston and the cylinder wall."
    },
    {
      "term": "Crankcase",
      "def": "The lower part of the engine that holds the crankshaft and the oil; air leaking past the rings ends up here."
    },
    {
      "term": "Throttle body",
      "def": "The housing that holds the throttle plate and controls how much air enters the intake manifold."
    },
    {
      "term": "Intake manifold",
      "def": "The passages that carry the air-fuel mixture from the throttle body to the intake valves."
    },
    {
      "term": "Valve timing",
      "def": "When the valves open and close relative to piston position; late or early timing changes how the engine breathes."
    },
    {
      "term": "Exhaust restriction",
      "def": "A blockage in the exhaust system, such as a damaged catalytic converter, that prevents burned gases from leaving freely."
    },
    {
      "term": "Misfire",
      "def": "A cylinder that fails to burn its mixture properly, causing a rough run and a loss of power."
    },
    {
      "term": "Top dead center",
      "def": "The piston's highest position in the cylinder; a leakdown test is done with the piston here and both valves closed."
    },
    {
      "term": "Cranking",
      "def": "Turning the engine over with the starter motor without letting it start and run."
    },
    {
      "term": "Sealing",
      "def": "A cylinder's ability to hold pressure during compression and power — the property these tests measure."
    }
  ],
  "video": {
    "title": "Engine Compression Test vs Leak-Down Test: Why you need BOTH!",
    "embedUrl": "https://www.youtube.com/embed/grl_br1Wu6M",
    "note": "Ozark Garage compares the two tests side by side and shows when each one earns its keep. Watch what each test reveals — then match it to the compression-versus-leakdown distinction in this module.",
    "more": [
      {
        "title": "How To Do A Compression and Leak Down Test | What is the difference?",
        "url": "https://www.youtube.com/watch?v=GjJ4j6iZ_AI"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A four-cylinder engine cranks with these compression readings: cylinder 1 reads 150, cylinder 2 reads 148, cylinder 3 reads 112, and cylinder 4 reads 149. Which cylinder is the suspect, and what is the gap between the highest reading and the suspect's reading?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Cylinder 3 is the suspect — it reads 112 while the others read 148–150. Step 2: The highest reading is 149 (cylinder 4). Step 3: 149 − 112 = 37. The suspect reads 37 below the best cylinder, a large gap that means the cylinder is not sealing or filling properly.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> The suspect cylinder from Problem 1 gets a leakdown test. Air hisses from the tailpipe while the test runs. Which part has failed, and why does that sound point to it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Air from the tailpipe means air is escaping through the exhaust side. Step 2: The only path from the cylinder to the tailpipe is the exhaust valve. Step 3: The exhaust valve is not sealing — most likely burned or not closing fully.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A different engine shows air bubbling in the coolant reservoir during a leakdown test. What has failed, and what is the air's path?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Air is escaping from the cylinder into the cooling system. Step 2: The seal between the cylinder and the coolant passages is the head gasket. Step 3: The head gasket has failed between a cylinder and a coolant passage, letting compressed air bubble into the coolant.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Two neighboring cylinders both read low on a compression test while the other cylinders read normally. What is the most likely cause, and why does the pattern point to it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Two adjacent cylinders share one head gasket between them. Step 2: A head gasket failure between those two cylinders lets pressure leak from one to the other, so both read low. Step 3: A single-cylinder fault (one valve, one ring) would not lower both neighbors equally.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> At idle the vacuum gauge needle flickers rapidly. At a steady cruise it smooths out. What does the flicker suggest, and what test should you run next?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A rapidly flickering needle at idle suggests a valve that is not sealing — each leak makes the needle jump. Step 2: The next test is a compression test to find which cylinder is weak, followed by a leakdown test on that cylinder to find which valve is leaking.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> You run a compression test on a cold engine with the throttle closed and a weak battery. All four cylinders read low. What do you do before deciding the engine is worn out?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Warm the engine up, hold the throttle open, and charge or replace the battery so cranking speed is normal. Step 2: Re-run the test properly. Step 3: A cold engine, a closed throttle, and slow cranking all lower every reading — the test was wrong, not necessarily the engine.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A compression test is mainly used to:",
      "choices": [
        "Measure how fast the engine starts",
        "Compare how well each cylinder seals and builds pressure",
        "Test the battery",
        "Check the oil level"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The compression test shows whether each cylinder can seal and build pressure, and compares cylinders with each other. (a) Starting speed is a battery and starter matter. (c) The battery is tested with a meter or load tester. (d) Oil level is checked with the dipstick."
    },
    {
      "q": "A leakdown test differs from a compression test because it:",
      "choices": [
        "Is done with the engine running",
        "Feeds air into a sealed cylinder and shows where the air escapes",
        "Measures fuel pressure",
        "Needs no tools"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Leakdown feeds compressed air into a cylinder at top dead center and tracks where it leaks to, naming the failed part. (a) Leakdown is done with the engine off. (c) Fuel pressure is a different test. (d) Leakdown needs a tester and compressed air."
    },
    {
      "q": "During a leakdown test, air hissing from the throttle body means:",
      "choices": [
        "The piston rings are worn",
        "The intake valve is not sealing",
        "The head gasket has failed",
        "The exhaust is blocked"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The throttle body is on the intake side, so air escaping there came past the intake valve. (a) Worn rings let air into the crankcase, heard at the oil filler. (c) A head gasket leak shows as bubbles in the coolant. (d) An exhaust blockage does not hiss from the throttle body."
    },
    {
      "q": "Air escaping past worn piston rings during a leakdown test is heard:",
      "choices": [
        "At the tailpipe",
        "At the oil filler cap",
        "At the throttle body",
        "At the radiator cap"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Air past the rings enters the crankcase and escapes at the oil filler. (a) The tailpipe means an exhaust valve leak. (c) The throttle body means an intake valve leak. (d) The radiator means a head gasket leak into the coolant."
    },
    {
      "q": "A vacuum gauge needle that flickers rapidly at idle most often suggests:",
      "choices": [
        "A valve that is not sealing",
        "A full fuel tank",
        "A new air filter",
        "A charged battery"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Each leak past a valve makes the needle jump, so a flickering needle points at a sealing problem. (b) Fuel level does not affect manifold vacuum. (c) A new filter improves airflow; it does not flicker the needle. (d) Battery charge has nothing to do with vacuum."
    },
    {
      "q": "Why should the throttle be held open during a compression test?",
      "choices": [
        "To stop the engine from starting",
        "So air can enter the cylinders freely and readings are not artificially low",
        "To warm the engine faster",
        "To protect the gauge"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A closed throttle starves the cylinders of air, so every reading comes out low. (a) Disabling fuel and ignition stops starting, not the throttle. (c) The throttle does not warm the engine. (d) The gauge is not protected by the throttle."
    },
    {
      "q": "Two neighboring cylinders both read low on a compression test. The most likely cause is:",
      "choices": [
        "A burned intake valve in one cylinder",
        "A head gasket failure between those two cylinders",
        "A worn piston ring in the far cylinder",
        "A weak battery"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Neighbors share one gasket; a failure between them lets pressure leak from one to the other, lowering both. (a) One valve would lower one cylinder, not both. (c) A ring in a far cylinder cannot affect these two. (d) A weak battery lowers all cylinders, not just two neighbors."
    },
    {
      "q": "The main advantage of a leakdown test over a compression test is that it:",
      "choices": [
        "Is faster",
        "Tells you why the cylinder is weak and which part failed",
        "Needs no compressed air",
        "Works on a running engine"
      ],
      "answer": 1,
      "explanation": "Correct: (b). By listening to where air escapes, leakdown names the failed part — valve, gasket, or rings. (a) Leakdown is slower than compression testing. (c) Leakdown needs compressed air. (d) Leakdown is done with the engine off."
    }
  ],
  "studyGuide": "\n<h3>Module 2 — Compression, Leakdown & Vacuum: Quick Reference</h3>\n<p><strong>Core idea:</strong> Test mechanical health first — if a cylinder cannot seal, no fuel or ignition part will fix it.</p>\n<p><strong>Compression test:</strong> Crank each cylinder with the gauge in the plug hole; compare cylinders — one clearly low is the suspect.</p>\n<p><strong>Leakdown test:</strong> Feed air into a sealed cylinder; where it escapes names the fault — throttle body = intake valve, tailpipe = exhaust valve, coolant bubbles = head gasket, oil filler = rings.</p>\n<p><strong>Vacuum gauge:</strong> Steady needle = healthy; rapid flicker = valve leak; low and slow = timing or exhaust restriction.</p>\n<p><strong>Watch out:</strong> Cold engine, closed throttle, or slow cranking lowers every reading — check the test before condemning the engine.</p>\n<p><strong>Self-check:</strong> Given a set of readings and a leakdown sound, can you name the failed part? If yes, you have this module.</p>\n"
};
