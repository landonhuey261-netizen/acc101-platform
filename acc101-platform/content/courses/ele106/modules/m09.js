// ele106 - Module 9: Emergency & Standby Systems (Articles 700–702)
module.exports = {
  "number": 9,
  "slug": "emergency-standby-systems",
  "title": "Emergency & Standby Systems (Articles 700–702)",
  "estTime": "3–4 hours",
  "objectives": [
    "Distinguish emergency (700), legally required standby (701), and optional standby (702) systems.",
    "State the transfer times: 10 seconds for emergency, 60 seconds for legally required standby.",
    "Explain transfer switches, generators, and batteries as emergency sources.",
    "Explain what loads belong on each system.",
    "Explain the wiring and separation rules for emergency circuits."
  ],
  "sections": [
    {
      "heading": "Three Systems: 700, 701, and 702",
      "html": "<p>Articles 700, 701, and 702 cover three different systems, and the difference is what they serve and how fast they must work. Article 700 covers emergency systems: the systems that keep people safe when the normal power fails — emergency lighting, exit signs, fire alarms, and the power for elevators that carry firefighters. Article 701 covers legally required standby systems: the systems the Code or another law requires to keep operating during a power failure, such as smoke-control fans and the power for a hospital's critical equipment. Article 702 covers optional standby systems: the systems an owner installs by choice, such as a generator for a data center or a store that wants to stay open during an outage.</p><p>The three articles have different rules because they have different purposes. Article 700 is the strictest: the wiring must be separated from normal wiring, the transfer must be fast, and the system must be tested. Article 701 is nearly as strict. Article 702 is the least strict, because the loads are the owner's choice and no one's safety depends on them.</p><p>The first step on any job with a standby system is to identify which article applies to each load. A load on the wrong article — an emergency light wired as optional standby — is a violation that the inspector will catch, and it is a safety problem that no one will notice until the power fails.</p><div class=\"callout\"><strong>Key idea:</strong> 700 = emergency (life safety). 701 = legally required standby (required by law). 702 = optional standby (owner's choice). 700 is the strictest; 702 is the least strict.</div>"
    },
    {
      "heading": "Transfer Times: 10 Seconds and 60 Seconds",
      "html": "<p>Article 700 requires the emergency system to transfer to its alternate source within 10 seconds of the normal power failing. Ten seconds is the time the Code allows for the lights to come back on before people are in the dark on a stairway. A generator that takes 30 seconds to start and transfer is too slow for an Article 700 system — it needs a faster start, or a battery system that carries the load until the generator is up.</p><p>Article 701 requires the legally required standby system to transfer within 60 seconds. Sixty seconds is the time the Code allows for a standby generator to start, stabilize, and take the load. The difference between 10 seconds and 60 seconds is the difference between life safety and equipment that can wait a minute.</p><p>Article 702 has no required transfer time: the owner decides how fast the system must work. A store's generator may take a minute or two to start, and that is acceptable for an optional system — but the owner should know the delay, because the freezers will be warming up while the generator starts.</p><ul><li>Article 700 (emergency): transfer within 10 seconds.</li><li>Article 701 (legally required standby): transfer within 60 seconds.</li><li>Article 702 (optional standby): no required transfer time — the owner decides.</li></ul>"
    },
    {
      "heading": "Sources: Generators, Batteries, and Transfer Switches",
      "html": "<p>The alternate source for an emergency or standby system is usually a generator: a diesel or natural-gas engine that drives an alternator. The generator must be sized for the loads it serves, it must have enough fuel for the required run time, and it must be tested under load regularly — a generator that has never been run under load may not start when it is needed. The generator is a separately derived system (250.30), with its own grounding and bonding.</p><p>Batteries are the other common source: a battery system with an inverter, or battery-backed luminaires and exit signs. Batteries provide power instantly, which is why they are used for the 10-second emergency requirement — the battery carries the load while the generator starts. Battery systems must be tested and their batteries replaced on schedule, because a battery's capacity fades with age.</p><p>The transfer switch is the device that moves the load from the normal source to the alternate source. An automatic transfer switch (ATS) does it without human action; a manual transfer switch requires someone to operate it. Article 700 requires an automatic transfer switch, because no one can be counted on to throw a switch in the dark during a fire.</p><div class=\"callout\"><strong>Key idea:</strong> Generators are the usual alternate source; batteries carry the load instantly while the generator starts. Article 700 requires an automatic transfer switch.</div>"
    },
    {
      "heading": "What Goes on Each System — and How It Is Wired",
      "html": "<p>The emergency system (700) serves life-safety loads: emergency lighting, exit signs, fire alarm systems, and the power for fire pumps and elevators used by firefighters. The legally required standby system (701) serves loads the law requires to keep running: smoke-control systems, communications, and the hospital equipment that is not on the emergency system. The optional standby system (702) serves whatever the owner chooses: a data center, a store's freezers, a home's refrigerator.</p><p>Article 700 wiring must be kept separate from normal wiring: emergency circuits must be run in their own raceways and boxes, and they must not share a raceway with normal circuits, except as the article permits. The separation exists so that a fault in the normal wiring cannot take out the emergency wiring — the two systems must be able to fail independently.</p><p>Emergency circuits must also be identified: the boxes, the raceways, and the panelboards are marked so that anyone working on them knows they are emergency circuits. A maintenance worker who opens an emergency panel thinking it is a normal panel is a worker who may kill the emergency lighting by mistake.</p><ul><li>700 loads: emergency lighting, exit signs, fire alarms, fire pumps, firefighter elevators.</li><li>701 loads: smoke control, communications, hospital equipment required by law.</li><li>702 loads: whatever the owner chooses. 700 wiring must be separated from normal wiring and clearly identified.</li></ul>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>700 emergency (life safety), 701 legally required standby (required by law), 702 optional standby (owner's choice).</li><li>Transfer times: 700 within 10 seconds, 701 within 60 seconds, 702 no required time.</li><li>Sources: generators (separately derived, 250.30) and batteries (instant power while the generator starts).</li><li>700 requires an automatic transfer switch.</li><li>700 wiring must be separated from normal wiring and clearly identified.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Putting an emergency load on an optional standby system. If the power fails, the emergency light will be dark for as long as the generator takes to start — and Article 700 allows only 10 seconds.</div><div class=\"callout\"><strong>Common mistake:</strong> Running emergency circuits in the same raceway as normal circuits. Article 700 requires separation so a fault in one cannot take out the other.</div><p><strong>Ready-to-Work link:</strong> If you can name the three systems, their transfer times, and what goes on each, you have this module. Module 10 covers health care and special occupancies.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Article 700",
      "def": "Emergency systems — life safety: emergency lighting, exit signs, fire alarms, fire pumps."
    },
    {
      "term": "Article 701",
      "def": "Legally required standby systems — loads the law requires to keep running during an outage."
    },
    {
      "term": "Article 702",
      "def": "Optional standby systems — loads the owner chooses to keep running during an outage."
    },
    {
      "term": "Transfer time",
      "def": "How fast the system must switch to its alternate source: 10 seconds for 700, 60 seconds for 701."
    },
    {
      "term": "Automatic transfer switch (ATS)",
      "def": "A switch that moves the load from the normal source to the alternate source without human action."
    },
    {
      "term": "Generator",
      "def": "An engine-driven alternator that provides alternate power; a separately derived system (250.30)."
    },
    {
      "term": "Battery system",
      "def": "Batteries with an inverter that provide instant power while a generator starts."
    },
    {
      "term": "Emergency illumination",
      "def": "Lighting on egress paths that operates when normal power fails."
    },
    {
      "term": "Fire pump",
      "def": "A pump that supplies water to a building's fire-protection system; an Article 700 load."
    },
    {
      "term": "Smoke control",
      "def": "Fans and dampers that control smoke movement during a fire; an Article 701 load."
    },
    {
      "term": "Egress path",
      "def": "The route people take to leave a building in an emergency."
    },
    {
      "term": "Standby system",
      "def": "A system that provides power during a normal power failure, under Articles 700–702."
    }
  ],
  "video": {
    "title": "Your Electrician Said \"Upgrade Your Panel and Service\" Here's the Math That Says Otherwise.",
    "embedUrl": "https://www.youtube.com/embed/MxglbqA5PXs",
    "note": "This video does the math on whether a panel and service upgrade is really needed — the same kind of load math that decides whether a building needs a standby generator and how big it must be. Watch it, then ask: what loads would go on the emergency system, and what would go on optional standby?",
    "more": [
      {
        "title": "Mastering the Electrical Service Part 4",
        "url": "https://www.youtube.com/watch?v=3hR2zhb2uVM"
      },
      {
        "title": "EV Charging For $1 Per 100 Miles",
        "url": "https://www.youtube.com/watch?v=JsYefGUCxDM"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A hospital's emergency lighting must come back on after a power failure. How fast, and under which article?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Emergency lighting is an Article 700 load. Step 2: Article 700 requires transfer within 10 seconds. Step 3: The system must restore the lights within 10 seconds of the normal power failing.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A store owner installs a generator so the store can stay open during an outage. Which article applies, and what transfer time is required?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The generator is the owner's choice, so it is an optional standby system under Article 702. Step 2: Article 702 has no required transfer time. Step 3: The owner decides how fast the system must work.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A smoke-control fan must keep running during a power failure because the building code requires it. Which article applies, and what is the transfer time?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A load required by law is a legally required standby system under Article 701. Step 2: Article 701 requires transfer within 60 seconds. Step 3: The generator must start and take the load within 60 seconds.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> An emergency circuit and a normal circuit are run in the same conduit. What is wrong?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Article 700 requires emergency wiring to be kept separate from normal wiring. Step 2: A fault in the normal circuit could take out the emergency circuit. Step 3: The emergency circuit must be run in its own raceway.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A generator has never been run under load. Why is that a problem?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A generator that has never been tested under load may not start or may not carry the load when it is needed. Step 2: Regular load testing is required to prove the system works. Step 3: The test records must be kept, and the inspector will ask for them.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Why does an Article 700 system need an automatic transfer switch, rather than a manual one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Article 700 requires the transfer within 10 seconds. Step 2: No person can be counted on to find and throw a switch in the dark during a fire within 10 seconds. Step 3: Only an automatic transfer switch can meet the 10-second requirement.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Article 700 covers:",
      "choices": [
        "Optional standby systems",
        "Emergency systems — life safety",
        "Legally required standby systems",
        "Dwelling branch circuits"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Article 700 is emergency systems. (a) Optional standby is Article 702. (c) Legally required standby is Article 701. (d) Dwelling branch circuits are Article 210."
    },
    {
      "q": "The Article 700 transfer time is:",
      "choices": [
        "10 seconds",
        "30 seconds",
        "60 seconds",
        "No requirement"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Article 700 requires transfer within 10 seconds. (b) 30 seconds is too slow. (c) 60 seconds is the Article 701 time. (d) Article 700 has a strict transfer time."
    },
    {
      "q": "The Article 701 transfer time is:",
      "choices": [
        "10 seconds",
        "30 seconds",
        "60 seconds",
        "No requirement"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Article 701 requires transfer within 60 seconds. (a) 10 seconds is the Article 700 time. (b) 30 seconds is not a Code transfer time. (d) Article 701 has a 60-second requirement."
    },
    {
      "q": "Article 702 covers:",
      "choices": [
        "Emergency systems",
        "Legally required standby systems",
        "Optional standby systems",
        "Fire alarm systems only"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Article 702 is optional standby. (a) Emergency systems are Article 700. (b) Legally required standby is Article 701. (d) Fire alarms are Article 700 loads."
    },
    {
      "q": "A generator is a separately derived system under:",
      "choices": [
        "250.24",
        "250.30",
        "430.22",
        "700.12"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 250.30 covers separately derived systems, including generators. (a) 250.24 covers grounding at the service. (c) 430.22 is motor conductors. (d) 700.12 covers emergency sources, not the grounding rule."
    },
    {
      "q": "Article 700 requires what kind of transfer switch?",
      "choices": [
        "Manual",
        "Automatic",
        "Either manual or automatic",
        "No transfer switch"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Article 700 requires an automatic transfer switch. (a) A manual switch cannot meet the 10-second requirement. (c) Manual is not permitted for Article 700. (d) A transfer switch is required."
    },
    {
      "q": "Emergency wiring must be:",
      "choices": [
        "Run in the same raceway as normal wiring",
        "Kept separate from normal wiring",
        "Run in NM cable",
        "Unmarked"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Article 700 requires emergency wiring to be separated from normal wiring. (a) Sharing a raceway is the violation. (c) NM cable is not the commercial method. (d) Emergency circuits must be identified."
    },
    {
      "q": "Batteries in an emergency system provide:",
      "choices": [
        "Power only after the generator starts",
        "Instant power while the generator starts",
        "Power for normal loads",
        "No useful function"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Batteries provide instant power while the generator starts. (a) Batteries act before the generator, not after. (c) Batteries serve the emergency loads, not normal loads. (d) Batteries are essential to meeting the 10-second transfer time."
    }
  ],
  "studyGuide": "\n<h3>Module 9 — Emergency &amp; Standby: Quick Reference</h3>\n<p><strong>Core idea:</strong> Three systems, three purposes. Emergency (700) keeps people alive; legally required standby (701) keeps required equipment running; optional standby (702) is the owner's choice.</p>\n<p><strong>Transfer times:</strong> 700 = 10 seconds · 701 = 60 seconds · 702 = no required time.</p>\n<p><strong>Sources:</strong> Generators (separately derived, 250.30) · batteries (instant power while the generator starts) · automatic transfer switch required for 700.</p>\n<p><strong>Loads:</strong> 700: emergency lighting, exit signs, fire alarms, fire pumps · 701: smoke control, communications · 702: owner's choice.</p>\n<p><strong>Wiring:</strong> 700 wiring separated from normal wiring and clearly identified.</p>\n<p><strong>Self-check:</strong> Name the three articles, their transfer times, and one load for each.</p>\n"
};
