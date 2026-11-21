// ele107 - Module 10: Standby & Emergency Generator Systems
module.exports = {
  "number": 10,
  "slug": "standby-emergency-generator-systems",
  "title": "Standby & Emergency Generator Systems",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain the difference between standby, emergency, and legally required standby systems.",
    "Describe how an automatic transfer switch (ATS) detects a failure and transfers the load.",
    "Explain the transfer sequence: sensing, start, transfer, retransfer, and cooldown.",
    "Describe the NEC Article 700, 701, and 702 systems and their separation requirements.",
    "Explain generator exercising, fuel, battery, and maintenance requirements."
  ],
  "sections": [
    {
      "heading": "Three Kinds of Backup Power",
      "html": "<p>Not all backup power is the same, and the NEC treats the three kinds differently. An <strong>emergency system (NEC Article 700)</strong> supplies power that is essential for life safety — emergency lighting, exit signs, fire alarms, and fire pumps — and it must transfer within 10 seconds of a utility failure. A <strong>legally required standby system (NEC Article 701)</strong> supplies power the law or the building code requires for safety that is not life safety in the Article 700 sense — such as elevators for firefighters, smoke control, and communications — and it must transfer within 60 seconds. An <strong>optional standby system (NEC Article 702)</strong> supplies power the owner wants, such as a home's heat, refrigeration, and lights; its transfer time is the owner's choice.</p>\n<p>The distinction matters because the stricter systems have stricter rules: Article 700 and 701 wiring must be kept separate from other wiring, their transfer equipment must be listed for the purpose, and their generators must be tested on a schedule. An optional standby system for a home is simpler, but the same safety rules still apply to its installation — most importantly, it must never be able to backfeed the utility.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Article 700 (emergency) transfers in 10 seconds and protects life safety; Article 701 (legally required) in 60 seconds; Article 702 (optional) is the owner's choice. The transfer time and the wiring separation rules follow from which article applies.</div>"
    },
    {
      "heading": "The Automatic Transfer Switch (ATS)",
      "html": "<p>The <strong>automatic transfer switch (ATS)</strong> is the brain of a standby system. It continuously watches the utility voltage, and when the voltage falls below its setting (or disappears entirely), it starts the generator, waits for the generator to reach proper voltage and frequency, and then switches the load from the utility to the generator. When utility power returns and stays stable for a set time, the ATS switches the load back and then lets the generator run unloaded for a cooldown period before shutting it down. A <strong>manual transfer switch</strong> does the same switching but needs a person to operate it, and an <strong>interlock kit</strong> on a panel is a simpler device that mechanically prevents the main breaker and the generator breaker from being on at the same time.</p>\n<p>The ATS is a mechanically interlocked switch: it can connect the load to the utility or to the generator, but never to both at once. That interlock is what prevents <strong>backfeeding</strong> — pushing generator power out onto the utility lines. Backfeeding is lethal: it can energize lines that utility workers believe are dead. It is also why a generator must never be connected to a home through a double-ended cord (a \"suicide cord\") plugged into a receptacle. The transfer equipment is the only safe connection between a generator and a building's wiring, and it must be installed by a licensed electrician.</p>"
    },
    {
      "heading": "The Transfer Sequence, Step by Step",
      "html": "<p>The full sequence has five steps. <strong>1. Sensing:</strong> the ATS monitors the utility and detects a failure — usually a voltage drop below about 80% or a complete loss, lasting longer than a short delay that rides through brief dips. <strong>2. Start:</strong> the ATS signals the generator to start; the engine cranks, reaches speed, and the AVR builds voltage. <strong>3. Transfer:</strong> once the generator's voltage and frequency are stable, the ATS switches the load to the generator. <strong>4. Retransfer:</strong> when the utility returns and stays within limits for a set time (often 5–15 minutes, to make sure it is really back), the ATS switches the load back to the utility. <strong>5. Cooldown:</strong> the generator runs unloaded for a few minutes to cool down, then shuts off.</p>\n<p>Some systems use an <strong>open transition</strong> (break-before-make): the load is briefly disconnected during the switch, which is fine for most loads but means a momentary outage. Others use a <strong>closed transition</strong> (make-before-break) that parallels the two sources for a fraction of a second so the load never sees an interruption — more complex, and it needs utility approval because it briefly parallels with the grid. Hospitals and data centers use closed transition or uninterruptible power supplies (UPS) to bridge the gap; a home system uses open transition.</p>"
    },
    {
      "heading": "Keeping the System Ready: Testing and Maintenance",
      "html": "<p>A standby generator that has never been tested is a hope, not a system. The ATS and generator are exercised regularly — weekly or monthly, depending on the system and the code — by running the generator under load (or at least under its own test load) and confirming that the transfer works. The <strong>battery</strong> that cranks the engine is the most common point of failure: it must be kept charged, its terminals clean, and its condition tested, because a dead battery means a generator that cannot start. Fuel must be fresh and sufficient — diesel grows algae and gasoline goes stale — and the fuel level, oil level, coolant, and block heater are all part of the routine check.</p>\n<p>Maintenance records matter as much as the maintenance itself: the exercise log, the battery test results, and the fuel checks are the evidence that the system will work when it is needed. For Article 700 and 701 systems, the testing schedule is a code requirement, not a suggestion. And one more rule that is easy to forget: a generator's exhaust must go outside, away from windows, doors, and air intakes. Carbon monoxide from a generator running in a garage or near a building opening has killed people — the exhaust location is part of the installation, not an afterthought.</p>\n<div class=\"callout\"><strong>Common mistake:</strong> Installing a generator and never testing the transfer. The generator may start fine on its own while the ATS fails to transfer, the battery is dead, or the fuel is stale — and the first time you find out is during the outage. Exercise the whole system on a schedule and keep the log.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Article 700 emergency systems transfer in 10 seconds; Article 701 legally required in 60 seconds; Article 702 optional is the owner's choice.</li>\n<li>The ATS senses the failure, starts the generator, transfers the load, retransfers when the utility is stable, and cools the generator down.</li>\n<li>The ATS is mechanically interlocked so the load can never connect to the utility and the generator at once — that is what prevents backfeeding.</li>\n<li>Open transition briefly drops the load; closed transition parallels briefly and needs utility approval.</li>\n<li>Test the whole system on a schedule: battery, fuel, oil, coolant, and the transfer itself. Generator exhaust must go outside, away from openings.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Connecting a generator with a double-ended cord into a receptacle. It backfeeds the utility and can kill a line worker. The only safe connection is listed transfer equipment installed by a licensed electrician.</div>\n<p><strong>Ready-to-Work link:</strong> If you can walk through the five-step transfer sequence, explain the three NEC articles, and say why backfeeding is lethal, you have this module. Module 11 covers motor and transformer troubleshooting.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Emergency system (NEC 700)", "def": "A system supplying power essential for life safety; must transfer within 10 seconds." },
    { "term": "Legally required standby (NEC 701)", "def": "A system supplying power required by law or code for safety; must transfer within 60 seconds." },
    { "term": "Optional standby (NEC 702)", "def": "A system supplying power the owner chooses to back up; transfer time is the owner's choice." },
    { "term": "Automatic transfer switch (ATS)", "def": "The switch that senses a utility failure, starts the generator, and transfers the load automatically." },
    { "term": "Manual transfer switch", "def": "A transfer switch operated by a person rather than automatically." },
    { "term": "Interlock kit", "def": "A mechanical device that prevents a panel's main breaker and generator breaker from being on at the same time." },
    { "term": "Backfeeding", "def": "Pushing generator power out onto the utility lines — lethal to line workers and prevented by transfer equipment." },
    { "term": "Transfer sequence", "def": "Sensing, start, transfer, retransfer, and cooldown — the five steps of an automatic transfer." },
    { "term": "Open transition", "def": "A break-before-make transfer that briefly disconnects the load during switching." },
    { "term": "Closed transition", "def": "A make-before-break transfer that briefly parallels the two sources so the load never drops." },
    { "term": "Cooldown", "def": "The unloaded running period after retransfer that lets the generator cool before shutdown." },
    { "term": "Exercising", "def": "Running a standby generator and transfer switch on a regular schedule to prove the system works." },
    { "term": "Block heater", "def": "A heater that keeps a standby generator's engine warm so it starts reliably in cold weather." },
    { "term": "Uninterruptible power supply (UPS)", "def": "A battery system that carries a load through the gap between a failure and the generator taking over." }
  ],
  "video": {
    "title": "Generac Automatic Transfer Switch Explained - Whole Home Generator #electrician #generac #generator",
    "embedUrl": "https://www.youtube.com/embed/F46sGPYVT-8",
    "note": "A clear explanation of a whole-home automatic transfer switch — how it senses the outage, starts the generator, and transfers the load. Watch for the interlock that keeps utility and generator apart.",
    "more": [
      { "title": "1. Automatic Transfer Switch (ATS) Wiring | Utility Power + Generator Backup", "url": "https://www.youtube.com/watch?v=6_FOfhAc190" },
      { "title": "Complete Manual Transfer Switch Guide 2024", "url": "https://www.youtube.com/watch?v=pRf_upT_OKA" }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A hospital's emergency lighting and fire alarm must have power within 10 seconds of a utility failure. Which NEC article applies, and what transfer time is required?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Emergency lighting and fire alarms are life safety — NEC Article 700 (emergency systems). Step 2: Article 700 requires transfer within 10 seconds. Step 3: The system needs an ATS and a generator that can start and transfer inside that window.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A homeowner wants backup power for heat and refrigeration. Which NEC article applies, and who sets the transfer time?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: This is power the owner wants, not power the law requires — NEC Article 702 (optional standby). Step 2: The transfer time is the owner's choice. Step 3: The installation still needs listed transfer equipment and must never backfeed the utility.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> List the five steps of the automatic transfer sequence in order.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Sensing — the ATS detects the utility failure. Step 2: Start — the generator cranks and builds voltage and frequency. Step 3: Transfer — the ATS switches the load to the generator. Step 4: Retransfer — the load returns to the utility after it is stable. Step 5: Cooldown — the generator runs unloaded, then shuts down.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A neighbor plugs a portable generator into a wall receptacle with a double-ended cord during an outage. Explain why this is dangerous.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The cord backfeeds generator power through the house wiring and out onto the utility lines. Step 2: A line worker repairing the outage believes the lines are dead and can be electrocuted. Step 3: The only safe connection is listed transfer equipment installed by a licensed electrician.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A standby generator starts and runs fine when tested by hand, but during an outage the building never got generator power. What is the most likely fault, and how would regular testing have caught it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The generator works, so the fault is in the transfer equipment or its controls — the ATS never transferred the load. Step 2: Regular exercising of the whole system, including a transfer test under load, would have shown the ATS failing to transfer. Step 3: Testing only the engine proves only the engine.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A data center cannot tolerate even a momentary loss of power during transfer. Which transfer method fits, and what else might be used to bridge the gap?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Closed transition (make-before-break), which parallels the sources briefly so the load never drops. Step 2: It needs utility approval because it parallels with the grid. Step 3: A UPS (uninterruptible power supply) can also bridge the gap between the failure and the generator taking over.</p>"
    }
  ],
  "quiz": [
    {
      "q": "An emergency system under NEC Article 700 must transfer within:",
      "choices": [ "10 seconds", "60 seconds", "5 minutes", "Any time the owner chooses" ],
      "answer": 0,
      "explanation": "Correct: (a). Article 700 requires transfer within 10 seconds. (b) 60 seconds is the Article 701 requirement. (c) Five minutes is far too slow for life safety. (d) The owner's choice applies to Article 702 optional standby."
    },
    {
      "q": "A legally required standby system under NEC Article 701 must transfer within:",
      "choices": [ "10 seconds", "60 seconds", "30 minutes", "24 hours" ],
      "answer": 1,
      "explanation": "Correct: (b). Article 701 allows 60 seconds. (a) 10 seconds is the Article 700 requirement. (c) and (d) are far too slow for a legally required system."
    },
    {
      "q": "The ATS prevents backfeeding because it:",
      "choices": [ "Is mechanically interlocked so the load can connect to only one source at a time", "Turns the generator off during an outage", "Disconnects the neutral", "Uses a bigger breaker" ],
      "answer": 0,
      "explanation": "Correct: (a). The mechanical interlock makes a double connection impossible. (b) The ATS starts the generator, it does not turn it off. (c) Disconnecting the neutral does not prevent backfeeding. (d) Breaker size does not prevent backfeeding."
    },
    {
      "q": "The correct order of the transfer sequence is:",
      "choices": [ "Transfer, start, sensing, retransfer, cooldown", "Sensing, start, transfer, retransfer, cooldown", "Start, sensing, cooldown, transfer, retransfer", "Cooldown, sensing, start, transfer, retransfer" ],
      "answer": 1,
      "explanation": "Correct: (b). Sense the failure, start the generator, transfer, retransfer, cool down. (a), (c), and (d) put the steps out of order."
    },
    {
      "q": "The most common point of failure in a standby generator system is the:",
      "choices": [ "Alternator windings", "Cranking battery", "Fuel tank", "Exhaust pipe" ],
      "answer": 1,
      "explanation": "Correct: (b). A dead or weak battery means the generator cannot start. (a) Alternator windings rarely fail. (c) The tank fails only if the fuel is stale or empty. (d) The exhaust pipe is not a starting component."
    },
    {
      "q": "A double-ended cord plugged into a receptacle to connect a generator is dangerous because it:",
      "choices": [ "Is too expensive", "Backfeeds the utility lines and can electrocute line workers", "Makes the generator run too fast", "Voids the generator's paint warranty" ],
      "answer": 1,
      "explanation": "Correct: (b). Backfeeding energizes lines that workers believe are dead. (a) Cost is not the hazard. (c) It does not change generator speed. (d) The warranty is not the issue — people are."
    },
    {
      "q": "Open-transition transfer means the load is:",
      "choices": [ "Briefly disconnected during the switch", "Connected to both sources at once", "Never interrupted", "Transferred by hand only" ],
      "answer": 0,
      "explanation": "Correct: (a). Break-before-make briefly drops the load. (b) That is closed transition. (c) That is closed transition or UPS. (d) Open transition can be automatic."
    },
    {
      "q": "Generator exhaust must be routed:",
      "choices": [ "Into the garage for warmth", "Outside, away from windows, doors, and air intakes", "Into the basement", "Through the ATS" ],
      "answer": 1,
      "explanation": "Correct: (b). Exhaust contains carbon monoxide and must go outside, away from openings. (a) A garage traps carbon monoxide. (c) A basement traps carbon monoxide. (d) Exhaust does not go through the ATS."
    }
  ],
  "studyGuide": "\n<h3>Module 10 — Standby &amp; Emergency Generator Systems: Quick Reference</h3>\n<p><strong>Core idea:</strong> The ATS senses the failure, starts the generator, and transfers the load — and its interlock makes backfeeding impossible.</p>\n<p><strong>NEC articles:</strong> 700 emergency — 10 seconds, life safety · 701 legally required standby — 60 seconds · 702 optional standby — owner's choice.</p>\n<p><strong>Sequence:</strong> Sensing → Start → Transfer → Retransfer → Cooldown.</p>\n<p><strong>Transitions:</strong> Open (break-before-make, brief drop) · Closed (make-before-break, needs utility approval).</p>\n<p><strong>Readiness:</strong> Exercise the whole system on schedule; the cranking battery is the most common failure; exhaust goes outside, away from openings.</p>\n<p><strong>Self-check:</strong> Walk through the five-step sequence and name the three NEC articles with their transfer times. If you can, you have this module.</p>\n"
};
