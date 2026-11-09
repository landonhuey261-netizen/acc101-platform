// ase-l1 - Module 3: The Composite Vehicle (CV4): Using the Reference Booklet
module.exports = {
  "number": 3,
  "slug": "composite-vehicle-cv4-reference-booklet",
  "title": "The Composite Vehicle (CV4): Using the Reference Booklet",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what the Composite Vehicle Type 4 is and why ASE built the L1 test around it.",
    "Describe what the CV4 Reference Booklet contains and how to use it during the test.",
    "Practice reading a question stem that gives you the vehicle data, instead of memorizing a vehicle.",
    "Apply the booklet's wiring, vacuum, and specification data to a diagnosis.",
    "Explain why this course puts the practice vehicle's data in the question stems instead of reproducing ASE's booklet."
  ],
  "sections": [
    {
      "heading": "What the Composite Vehicle Is",
      "html": "<p>The real L1 test is built around a single fictional vehicle: the <strong>Composite Vehicle Type 4</strong>, or CV4. It is not a real car you can buy. It is a made-up vehicle assembled from the systems of many real cars — a four-cylinder gasoline engine with modern fuel injection, coil-on-plug ignition, an automatic transmission, and the emissions systems a working technician sees every day. ASE invented it so every test-taker faces the same vehicle, with the same systems, the same wiring, and the same specifications.</p>\n<p>About half the questions on the real L1 test are about the CV4. They describe a symptom on that vehicle, give you the readings, and ask for the most likely cause or the next test. The other half are general advanced engine performance questions that apply to any vehicle. Either way, the skill being tested is the same: read the data, reason from it, and do not guess.</p>\n<div class=\"callout\"><strong>Key idea:</strong> The CV4 is a fictional vehicle built from real systems, so every test-taker faces the same car. About half the real L1 test is about it — and the skill it tests is reading data, not memorizing a vehicle.</div>"
    },
    {
      "heading": "The Reference Booklet: Your Data, On Screen",
      "html": "<p>On the real test, ASE gives you the <strong>CV4 Reference Booklet</strong> on screen. It contains the vehicle's specifications, wiring diagrams, vacuum hose routing, connector views, and the reference values for its sensors and systems. It is not a textbook and it is not a repair manual — it is the data you need to answer the questions, and nothing more.</p>\n<p>Using the booklet well is a skill of its own. First, know what is in it before the test — the sections, the diagrams, the tables — so you are not discovering it under time pressure. Second, read the question stem first, decide what data you need, and then look it up — do not read the booklet front to back during the test. Third, trust the booklet over your memory: if the booklet says the CV4's sensor reads one way, that is the truth for the test, even if a real car you know reads differently.</p>\n<p>The booklet also changes how the questions work. A question may give you a scan-tool reading and ask whether it is normal — and the only way to know is the booklet's reference value. Another may show a wiring diagram and ask which wire to test next. The test is not asking you to memorize the CV4; it is asking you to use a reference the way a technician uses service information in the bay.</p>"
    },
    {
      "heading": "Why This Course Puts the Data in the Question Stems",
      "html": "<p>This course cannot reproduce ASE's CV4 Reference Booklet — it belongs to ASE, and the app has no copy of it. So this course does the next best thing: it puts the practice vehicle's data in the question stems and the lab givens instead. Every CV4-style question in this course tells you the vehicle, the readings, and the reference values you need, right in the question — the same way the booklet would, just in a different place.</p>\n<p>The practice vehicle in this course is a fictional stand-in, not ASE's CV4: a four-cylinder gasoline engine with coil-on-plug ignition, port fuel injection, an automatic transmission, and the usual emissions systems. Its data is given in each question and lab, and it is consistent within this course — so you can learn the habit of reading data and reasoning from it, which is the habit the real test rewards.</p>\n<p>Do not try to memorize this course's practice vehicle and expect it to match ASE's CV4. The vehicles are different; the skill is the same. What transfers to the real test is the habit: read the stem, find the reference value, compare the reading, name the next test.</p>"
    },
    {
      "heading": "Working a CV4-Style Question",
      "html": "<p>Here is the method, step by step. <strong>Step 1:</strong> read the complaint and the conditions — when does it happen, hot or cold, idle or load? <strong>Step 2:</strong> read the data the stem gives you — the codes, the live readings, and the reference values. <strong>Step 3:</strong> compare each reading with its reference value and mark the ones that are wrong. <strong>Step 4:</strong> ask what single fault explains all the wrong readings. <strong>Step 5:</strong> pick the answer that names that fault — or the test that would prove it.</p>\n<p>Worked example. The stem says: the practice vehicle hesitates under load, no codes, fuel trims high and positive at idle but near normal under load, and the reference values say trims should stay near zero. The wrong reading is the idle trim. The fault that explains a lean condition worst at idle is a vacuum leak — a fixed amount of unmetered air matters most when total air flow is small. The answer is the vacuum leak, and the test is a smoke test of the intake.</p>\n<p>Notice what the method does not do: it does not start with the parts. It starts with the readings, finds the wrong ones, and only then names a part. That order — readings first, parts last — is the whole skill this module teaches, and it is the skill the CV4 questions are built to reward.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>The CV4 is ASE's fictional vehicle, built from real systems so every test-taker faces the same car; about half the real L1 test is about it.</li>\n<li>The Reference Booklet gives specifications, wiring diagrams, vacuum routing, and reference values on screen during the test.</li>\n<li>Use it like service information: read the question first, decide what data you need, look it up, trust it over memory.</li>\n<li>This course cannot reproduce ASE's booklet, so the practice vehicle's data appears in the question stems and lab givens — the skill transfers, the vehicle does not.</li>\n<li>CV4 method: complaint and conditions → data and reference values → mark the wrong readings → one fault explaining all of them → answer or next test.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Trying to memorize the CV4. The test gives you the booklet — what it rewards is using a reference, not memorizing one.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Starting with the parts instead of the readings. Read the data, compare it with the reference values, and let the wrong readings name the fault.</div>\n<p><strong>Ready-to-work link:</strong> If you can work a CV4-style question by the five steps — readings first, parts last — you have this module. Module 4 covers the network the modules talk on: CAN communication diagnosis.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Composite Vehicle Type 4 (CV4)", "def": "ASE's fictional vehicle for the L1 test, assembled from real systems so every test-taker faces the same car." },
    { "term": "CV4 Reference Booklet", "def": "The on-screen booklet on the real L1 test with the CV4's specifications, wiring diagrams, vacuum routing, and reference values." },
    { "term": "Reference value", "def": "The booklet's stated normal reading for a sensor or system — the standard a test reading is judged against." },
    { "term": "Question stem", "def": "The part of a test question that gives the complaint, the conditions, and the data — everything the question is built on." },
    { "term": "Service information", "def": "The manufacturer's repair data — diagrams, specifications, and procedures — the real-world equivalent of the booklet." },
    { "term": "Wiring diagram", "def": "A drawing of a circuit's wires, connectors, and components, used to decide what to test next." },
    { "term": "Vacuum hose routing", "def": "The diagram showing how vacuum hoses connect the engine's vacuum-operated parts." },
    { "term": "Coil-on-plug (COP)", "def": "An ignition system with one coil sitting directly on each spark plug — the CV4's ignition layout." },
    { "term": "Port fuel injection", "def": "Fuel injected into the intake port, just before the intake valve — the CV4's fuel layout." },
    { "term": "Practice vehicle", "def": "This course's fictional stand-in vehicle, whose data appears in question stems and lab givens — not ASE's CV4." },
    { "term": "Readings first, parts last", "def": "The CV4 method: compare readings with reference values before naming any part." },
    { "term": "Fictional vehicle", "def": "A made-up vehicle assembled from real systems, used so a test can be the same for everyone." }
  ],
  "video": {
    "title": "ScannerDanner Verifies a Misfire With No Codes and No Mode $06",
    "embedUrl": "https://www.youtube.com/embed/ppActthRa70",
    "note": "ScannerDanner works a misfire that has no trouble codes and no Mode $06 data — the hardest kind of case, and exactly the kind the CV4 questions imitate. Watch how he builds the diagnosis from readings alone, with no code to lean on.",
    "more": [
      { "title": "How to Diagnose a Misfire (ScannerDanner, uScope)", "url": "https://www.youtube.com/watch?v=zQXeMqlBagI" }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Explain in two sentences what the Composite Vehicle Type 4 is and why ASE uses a fictional vehicle for the L1 test.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The CV4 is a fictional vehicle assembled from real systems — a four-cylinder gasoline engine with modern injection, coil-on-plug ignition, and an automatic transmission. Step 2: ASE uses it so every test-taker faces the same vehicle with the same systems, wiring, and specifications, making the test fair and consistent.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A CV4-style question gives you a scan-tool reading and asks whether it is normal. Where do you find the answer, and why should you trust it over your memory?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: In the Reference Booklet's reference values — that is what the booklet is for. Step 2: Trust it over memory because the test is built on the booklet's values for the CV4, and a real car you know may read differently.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> The practice vehicle's fuel trims are high and positive at idle but near normal under load. Using the five-step method, what is the most likely fault?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The wrong reading is the idle trim — the reference says trims should stay near zero. Step 2: A lean condition worst at idle points to a vacuum leak, because a fixed amount of unmetered air matters most when total air flow is small. Step 3: The next test is a smoke test of the intake.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Why does this course put the practice vehicle's data in the question stems instead of giving you a copy of ASE's booklet?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The course cannot reproduce ASE's booklet — it belongs to ASE and the app has no copy of it. Step 2: Putting the data in the stems teaches the same skill — reading data and reasoning from it — which is what transfers to the real test.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A classmate plans to memorize every specification of this course's practice vehicle before the real L1 test. What is wrong with that plan?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The practice vehicle is not ASE's CV4 — the vehicles are different, so memorized values will not match. Step 2: What transfers is the habit — read the stem, find the reference value, compare the reading, name the next test — not the numbers.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> List the five steps of the CV4 method in order.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Read the complaint and the conditions. Step 2: Read the data and the reference values. Step 3: Compare each reading with its reference value and mark the wrong ones. Step 4: Ask what single fault explains all the wrong readings. Step 5: Pick the answer naming that fault — or the test that would prove it.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The Composite Vehicle Type 4 is:",
      "choices": ["A real car sold in the United States", "A fictional vehicle assembled from real systems, so every L1 test-taker faces the same car", "A type of scan tool", "A training engine in a classroom"],
      "answer": 1,
      "explanation": "Correct: (b). The CV4 is made up from real systems so the test is the same for everyone. (a) No real car is the CV4. (c) A scan tool reads vehicles; it is not a vehicle. (d) The CV4 exists on paper and on screen, not as a classroom engine."
    },
    {
      "q": "About how much of the real L1 test is about the CV4?",
      "choices": ["None of it", "About half of it", "All of it", "One question"],
      "answer": 1,
      "explanation": "Correct: (b). About half the questions are about the CV4; the rest are general advanced engine performance. (a) The CV4 is central to the test. (c) Half the test is general, not CV4. (d) Far more than one question involves the CV4."
    },
    {
      "q": "The CV4 Reference Booklet contains:",
      "choices": ["The answers to the test", "Specifications, wiring diagrams, vacuum routing, and reference values for the CV4", "A repair manual for every car", "The test-taker's scores"],
      "answer": 1,
      "explanation": "Correct: (b). The booklet is the data needed to answer the questions — specs, diagrams, routing, reference values. (a) It contains data, not answers. (c) It covers only the CV4. (d) Scores come after the test, not in the booklet."
    },
    {
      "q": "When using the Reference Booklet during the test, the best approach is to:",
      "choices": ["Read it front to back before answering anything", "Read the question first, decide what data you need, then look it up", "Ignore it and rely on memory", "Memorize it before the test"],
      "answer": 1,
      "explanation": "Correct: (b). Question-first lookup is fast and focused; reading it all wastes time. (a) Front-to-back reading burns the time limit. (c) Memory may differ from the CV4's values. (d) The booklet is given on screen precisely so it does not need memorizing."
    },
    {
      "q": "This course puts the practice vehicle's data in the question stems because:",
      "choices": ["The course has a copy of ASE's booklet", "The course cannot reproduce ASE's booklet, so the data is given where the question needs it", "The practice vehicle is ASE's CV4", "Questions are easier without data"],
      "answer": 1,
      "explanation": "Correct: (b). ASE's booklet belongs to ASE; the course teaches the same skill by putting the data in the stems. (a) The course has no copy of the booklet. (c) The practice vehicle is a stand-in, not the CV4. (d) The data is what makes the questions answerable."
    },
    {
      "q": "In the CV4 method, the step that comes AFTER comparing readings with reference values is:",
      "choices": ["Naming a part", "Asking what single fault explains all the wrong readings", "Clearing the codes", "Reading the complaint"],
      "answer": 1,
      "explanation": "Correct: (b). Mark the wrong readings first, then find the one fault that explains them all. (a) Naming a part comes last, after the fault is identified. (c) Clearing codes destroys evidence. (d) Reading the complaint is the first step, not the one after comparing readings."
    },
    {
      "q": "A CV4-style stem says fuel trims are high and positive at idle but near normal under load. The most likely fault is:",
      "choices": ["A weak fuel pump", "A vacuum leak", "A clogged catalytic converter", "A dead oxygen sensor"],
      "answer": 1,
      "explanation": "Correct: (b). A leak's fixed air volume matters most at idle, when total air flow is small. (a) A weak pump shows worst under load. (c) A clogged converter restricts exhaust and causes lost power. (d) A dead sensor would set a sensor code and a default value."
    },
    {
      "q": "The skill the CV4 questions are built to reward is:",
      "choices": ["Memorizing the CV4's specifications", "Using a reference the way a technician uses service information — readings first, parts last", "Replacing parts quickly", "Guessing from the code alone"],
      "answer": 1,
      "explanation": "Correct: (b). The test gives you the booklet and rewards using it to reason from data. (a) The booklet is provided, so memorization is unnecessary. (c) Speed of replacement is not tested. (d) A code alone never names the fault."
    }
  ],
  "studyGuide": "\n<h3>Module 3 — The Composite Vehicle (CV4): Quick Reference</h3>\n<p><strong>CV4:</strong> ASE's fictional vehicle, built from real systems. About half the real L1 test is about it.</p>\n<p><strong>Booklet:</strong> Specifications, wiring diagrams, vacuum routing, reference values — on screen during the real test.</p>\n<p><strong>Use it like service info:</strong> Read the question first, decide what data you need, look it up, trust it over memory.</p>\n<p><strong>This course:</strong> Cannot reproduce ASE's booklet — the practice vehicle's data appears in the question stems and lab givens. The skill transfers; the vehicle does not.</p>\n<p><strong>CV4 method:</strong> Complaint + conditions → data + reference values → mark the wrong readings → one fault explaining all → answer or next test.</p>\n<p><strong>Watch out:</strong> Do not memorize the practice vehicle. Do not start with parts — readings first, parts last.</p>\n<p><strong>Self-check:</strong> Work a CV4-style question by the five steps without looking at the answer.</p>\n"
};
