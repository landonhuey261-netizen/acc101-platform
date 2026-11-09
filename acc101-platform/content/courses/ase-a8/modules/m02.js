// Auto-generated original course content for College Without College
module.exports = {
  "number": 2,
  "slug": "ignition-systems",
  "title": "Ignition Systems",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what the ignition system does and name its main parts.",
    "Describe how a coil turns low voltage into high voltage.",
    "Explain what the spark plug gap does and why it matters.",
    "Describe how the computer times the spark.",
    "Diagnose weak spark, no spark, and a spark at the wrong time."
  ],
  "sections": [
    {
      "heading": "What the Ignition System Does",
      "html": "<p>The ignition system's job is simple to say and hard to do well: make a spark, in the right cylinder, at the right moment, every time. It starts with the battery's low voltage, steps it up in the coil to a high voltage, and delivers it to the spark plug, where it jumps a small gap and lights the compressed air-fuel mixture. If the spark is weak, late, early, or missing, that cylinder's power stroke fails.</p>\n<p>Modern cars have one coil per cylinder, sitting directly on the spark plug — coil-on-plug. Older cars shared one coil and sent the spark through wires and a distributor. The idea is the same in both: store energy in the coil, release it at the right moment, and let the plug turn it into a spark.</p>\n"
    },
    {
      "heading": "The Coil: A Transformer in a Can",
      "html": "<p>A coil is a transformer with two windings of wire around an iron core. Current flowing through the primary winding builds a magnetic field. When the computer switches that current off suddenly, the field collapses and induces a high voltage in the secondary winding — high enough to jump the spark plug gap. The more sudden the switch-off, the stronger the spark.</p>\n<p>A coil that is failing may still make a spark, but a weak one — enough to idle, not enough under load, when the mixture is harder to light. That is why an ignition fault often shows up first when the driver accelerates or climbs a hill, not at idle. Testing a coil means checking its spark under load, or swapping it with a known-good cylinder and watching the misfire move.</p>\n"
    },
    {
      "heading": "The Spark Plug and Its Gap",
      "html": "<p>The spark plug is where the high voltage becomes a spark. It jumps the gap between the centre electrode and the ground electrode, and that spark lights the mixture. The gap matters: too wide and the voltage may not be enough to jump it, especially under load; too narrow and the spark is small and may not light the mixture well. The plug's condition also tells a story — deposits, wear, and damage each point at a different problem in the cylinder.</p>\n<p>Plugs wear with use: the electrodes round off and the gap grows. That is why plugs are a service item, replaced at the maker's interval, not when they fail. A plug that is fouled with fuel or oil is not the fault — it is the evidence. Find what fouled it, or the new plug will foul the same way.</p>\n"
    },
    {
      "heading": "Timing the Spark",
      "html": "<p>The computer decides when to fire each plug, using the crankshaft position sensor to know where each piston is and the camshaft position sensor to know which stroke each cylinder is on. It advances the spark — fires earlier — as engine speed rises, because the mixture takes a fixed time to burn and the piston is moving faster. It retards the spark — fires later — when the knock sensor reports the mixture is burning too violently.</p>\n<p>A spark at the wrong time wastes power. Too early and the burning mixture fights the piston still rising; too late and the push comes after the piston has already started down. A failed crankshaft or camshaft sensor can stop the spark entirely, because the computer no longer knows where the pistons are.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<p><ul><li>Ignition makes a spark in the right cylinder at the right moment, every time.</li><li>The coil steps low voltage up to high voltage by collapsing a magnetic field.</li><li>The plug gap matters: too wide and the spark may not jump; too narrow and it may not light the mixture.</li><li>The computer times the spark from the crankshaft and camshaft sensors.</li><li>A weak coil often shows up under load first, not at idle.</li></ul></p>\n<p><strong>Common mistake:</strong> Replacing spark plugs for a misfire without testing the coil. A fouled plug is evidence, not the fault — find what fouled it.</p>\n<p><strong>Ready-to-Work link:</strong> If you can explain how a coil makes high voltage and why a weak coil fails under load first, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Ignition system",
      "def": "The system that makes a spark in the right cylinder at the right moment."
    },
    {
      "term": "Coil",
      "def": "The transformer that steps low voltage up to the high voltage that jumps the plug gap."
    },
    {
      "term": "Coil-on-plug",
      "def": "One coil sitting directly on each spark plug, with no plug wires."
    },
    {
      "term": "Spark plug",
      "def": "The part where high voltage jumps a gap and lights the air-fuel mixture."
    },
    {
      "term": "Plug gap",
      "def": "The distance between the plug's electrodes, which the spark must jump."
    },
    {
      "term": "Primary winding",
      "def": "The coil winding that builds the magnetic field when current flows."
    },
    {
      "term": "Secondary winding",
      "def": "The coil winding in which the collapsing field induces high voltage."
    },
    {
      "term": "Crankshaft position sensor",
      "def": "The sensor that tells the computer where each piston is."
    },
    {
      "term": "Camshaft position sensor",
      "def": "The sensor that tells the computer which stroke each cylinder is on."
    },
    {
      "term": "Spark timing",
      "def": "When the spark fires relative to the piston's position."
    },
    {
      "term": "Advance",
      "def": "Firing the spark earlier, as engine speed rises."
    },
    {
      "term": "Retard",
      "def": "Firing the spark later, such as when knock is detected."
    },
    {
      "term": "Knock sensor",
      "def": "The sensor that reports when the mixture is burning too violently."
    },
    {
      "term": "Fouling",
      "def": "Deposits on a spark plug from fuel, oil, or carbon that stop it sparking well."
    }
  ],
  "video": {
    "title": "How Ignition System Works | Explained with Animation, Wiring Diagram, and Parts Overview",
    "embedUrl": "https://www.youtube.com/embed/TqQE0xkCJ8c",
    "note": "An animated explanation of the ignition system: battery, coil, and spark plug, with the wiring that connects them. Watch how the coil turns low voltage into the high voltage that jumps the plug gap.",
    "more": [
      {
        "title": "How Battery Ignition System Works | Automobile Engineering",
        "url": "https://www.youtube.com/watch?v=OMLSNwQiiKg"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem.</strong> Explain how a coil turns battery voltage into the high voltage that jumps the plug gap.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Current through the primary winding builds a magnetic field. Step 2: The computer switches that current off suddenly. Step 3: The collapsing field induces a high voltage in the secondary winding, which jumps the plug gap.</p>"
    },
    {
      "prompt": "<p><strong>Problem.</strong> Why does a weak coil often cause a misfire under load but not at idle?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Under load the mixture is harder to light and needs a stronger spark. Step 2: A weak coil can still make a spark strong enough for idling. Step 3: Under load that spark is not enough, so the cylinder misfires.</p>"
    },
    {
      "prompt": "<p><strong>Problem.</strong> A spark plug gap has grown wide with wear. What happens, and what is the fix?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The voltage may not be enough to jump the wider gap, especially under load. Step 2: The cylinder misfires. Step 3: The fix is a new plug with the correct gap — plugs are a service item.</p>"
    },
    {
      "prompt": "<p><strong>Problem.</strong> Explain why the computer needs both the crankshaft and the camshaft position sensors to time the spark.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The crankshaft sensor tells the computer where each piston is. Step 2: The camshaft sensor tells it which stroke each cylinder is on. Step 3: Without both, the computer cannot know which cylinder to fire and when.</p>"
    },
    {
      "prompt": "<p><strong>Problem.</strong> A plug is fouled with oil. Is replacing the plug the repair? Explain.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: No — the fouled plug is evidence, not the fault. Step 2: Oil is reaching the plug from somewhere in the cylinder. Step 3: Find and fix the oil source, or the new plug will foul the same way.</p>"
    },
    {
      "prompt": "<p><strong>Problem.</strong> Why does the computer advance the spark as engine speed rises?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The mixture takes a fixed time to burn. Step 2: At higher speed the piston moves faster, so the burn must start earlier. Step 3: Advancing the spark keeps the push arriving at the right moment.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The ignition system's job is to:",
      "choices": [
        "Pump fuel into the cylinder",
        "Make a spark in the right cylinder at the right moment, every time",
        "Measure the air coming in",
        "Clean the exhaust"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The spark must arrive in the right cylinder at the right time. (a) That is the fuel system. (c) That is the MAF sensor. (d) That is the catalytic converter."
    },
    {
      "q": "A coil makes high voltage by:",
      "choices": [
        "Spinning a magnet",
        "Collapsing a magnetic field in the primary winding, which induces high voltage in the secondary winding",
        "Heating a wire until it glows",
        "Charging a battery"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Switching the primary current off suddenly collapses the field and induces high voltage. (a) No magnet spins. (c) Heat does not make the voltage. (d) The battery supplies low voltage."
    },
    {
      "q": "Coil-on-plug means:",
      "choices": [
        "One coil shared by all cylinders",
        "One coil sitting directly on each spark plug",
        "A coil inside the battery",
        "A coil with no wires at all"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Each cylinder has its own coil on its plug. (a) That is the older shared-coil layout. (c) Coils are not inside the battery. (d) Coils still have wiring to the computer."
    },
    {
      "q": "A plug gap that has grown too wide can cause:",
      "choices": [
        "A stronger spark",
        "A misfire, because the voltage may not be enough to jump the gap",
        "Better fuel economy",
        "A cooler engine"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A wide gap needs more voltage to jump, and under load it may not jump at all. (a) A wide gap weakens the spark. (c) Misfires waste fuel. (d) The gap does not cool the engine."
    },
    {
      "q": "The crankshaft position sensor tells the computer:",
      "choices": [
        "Which stroke each cylinder is on",
        "Where each piston is",
        "How much air is coming in",
        "How hot the exhaust is"
      ],
      "answer": 1,
      "explanation": "Correct: (b). It reports piston position so the spark can be timed. (a) That is the camshaft sensor's job. (c) That is the MAF sensor. (d) That is the oxygen sensor's area."
    },
    {
      "q": "Advancing the spark means:",
      "choices": [
        "Firing it later",
        "Firing it earlier",
        "Making it stronger",
        "Turning it off"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Advance is earlier firing, needed as engine speed rises. (a) That is retarding. (c) Strength is the coil's job. (d) Turning it off is not timing."
    },
    {
      "q": "A weak coil most often shows up first:",
      "choices": [
        "At idle",
        "Under load, when the mixture is harder to light",
        "When the engine is off",
        "At the fuel pump"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Under load the spark must be stronger, and a weak coil cannot deliver it. (a) Idling needs the least spark energy. (c) The engine makes no spark when off. (d) The fuel pump is a different system."
    },
    {
      "q": "A fouled spark plug is:",
      "choices": [
        "The fault itself",
        "Evidence of a fault elsewhere — find what fouled it",
        "Normal and to be ignored",
        "Proof the coil is good"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Fouling comes from fuel, oil, or carbon reaching the plug; replacing the plug alone does not fix the cause. (a) The plug is the victim, not the cause. (c) Fouling is not normal. (d) Fouling says nothing about the coil."
    }
  ],
  "studyGuide": "\n<h3>Module 2 — Ignition Systems: Quick Reference</h3>\n<p><strong>Core idea:</strong> A spark in the right cylinder at the right moment, every time.</p>\n<p><strong>Coil:</strong> Primary current builds a magnetic field; switching it off collapses the field and induces high voltage in the secondary winding.</p>\n<p><strong>Plug gap:</strong> Too wide and the spark may not jump; too narrow and it may not light the mixture well.</p>\n<p><strong>Timing:</strong> Crankshaft sensor = where the pistons are. Camshaft sensor = which stroke. Advance as speed rises.</p>\n<p><strong>Self-check:</strong> Explain how a coil makes high voltage and why a weak coil fails under load first.</p>\n"
};
