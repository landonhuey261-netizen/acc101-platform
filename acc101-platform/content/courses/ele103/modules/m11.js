// ele103 - Module 11: Harmonics & Power Quality Basics
module.exports = {
  "number": 11,
  "slug": "harmonics-and-power-quality-basics",
  "title": "Harmonics & Power Quality Basics",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what harmonics are and which loads create them.",
    "Describe how harmonics distort the sine wave and overheat the neutral.",
    "Explain total harmonic distortion (THD) and what a high THD means.",
    "Describe the effects of harmonics on motors, transformers, and capacitors.",
    "Explain the basic ways harmonics are reduced: filters, derating, and K-rated transformers."
  ],
  "sections": [
    {
      "heading": "What Harmonics Are",
      "html": "<p><strong>Harmonics</strong> are currents and voltages at multiples of the line frequency — 120 Hz, 180 Hz, 240 Hz, 300 Hz, and so on — added on top of the 60 Hz sine wave. They are made by non-linear loads: loads that do not draw current in a smooth sine wave, but in pulses. Variable-frequency drives, LED drivers, computer power supplies, and electronic ballasts are all non-linear loads, and they are everywhere in modern buildings. A linear load, such as a heater or an incandescent lamp, draws a clean sine wave; a non-linear load draws a distorted one.</p>\n<p>The distortion is described by <strong>total harmonic distortion (THD)</strong>: the ratio of the harmonic content to the fundamental (60 Hz) content, given as a percentage. A THD of 5% is a nearly clean wave; a THD of 30% is a badly distorted one. The higher the THD, the more the waveform departs from a sine wave, and the more trouble it causes.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Harmonics are extra frequencies riding on the 60 Hz wave, made by electronic loads that draw current in pulses instead of a smooth sine wave.</div>"
    },
    {
      "heading": "The Triple-N Problem",
      "html": "<p>The most dangerous harmonics are the <strong>triplen harmonics</strong> — the 3rd, 9th, 15th, and so on — because they add up in the neutral instead of canceling. In a balanced three-phase system, the 60 Hz currents cancel in the neutral, so it carries almost nothing. But the 3rd harmonic currents in the three phases are in phase with each other, so they add: three 10-amp 3rd-harmonic currents make a 30-amp neutral current. A neutral that was sized for a balanced load can be overloaded by harmonics alone, overheating without any breaker tripping, because the breaker is on the phase conductors, not the neutral.</p>\n<p>This is why modern commercial buildings with many computers and LED lights sometimes need oversized neutrals — a neutral twice the size of the phase conductors, or a separate neutral per phase. The overheated neutral is a fire hazard that no breaker protects against, and it is found by measuring the neutral current, not by looking at the phase currents.</p>"
    },
    {
      "heading": "Effects on Equipment",
      "html": "<p>Harmonics heat everything they touch. In a motor, harmonic currents make extra heat in the windings and extra vibration, shortening the motor's life. In a transformer, harmonics make extra core loss and extra copper loss, and a transformer that is fine at 60 Hz can overheat at the same load when harmonics are present — which is why <strong>K-rated transformers</strong> exist, built with heavier windings and cores to handle harmonic heating. In a capacitor, harmonics are worse: a capacitor's reactance falls as frequency rises, so it draws more harmonic current than fundamental current, and it can overheat and fail — or resonate with the system's inductance, as Module 7 described.</p>\n<p>Harmonics also confuse meters and controls. An average-responding meter reads low on a distorted waveform. A protective relay can misoperate. And a power-factor correction capacitor can make the problem worse by resonating at a harmonic frequency. The common thread is that harmonics make a system behave differently than its 60 Hz nameplate suggests.</p>"
    },
    {
      "heading": "Reducing Harmonics",
      "html": "<p>Harmonics are reduced in three main ways. <strong>Filters</strong> — a reactor and capacitor tuned to a harmonic frequency — give the harmonic current a low-impedance path to ground, keeping it out of the rest of the system. <strong>Derating</strong> — using a larger transformer, larger conductors, or an oversized neutral — gives the system room to absorb the extra heating. And <strong>K-rated transformers</strong> are built to handle harmonic loads without derating. The choice depends on the size of the problem: a small office with a few computers may need only an oversized neutral, while a factory full of drives may need filters.</p>\n<p>The first step is always measurement: a power-quality meter that reads THD, harmonic currents, and neutral current tells the electrician what is actually there. Guessing at harmonics is worse than useless — the fix depends on which harmonics are present and how big they are, and only a measurement can say.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Harmonics are currents and voltages at multiples of 60 Hz, made by non-linear loads (VFDs, LED drivers, computer power supplies).</li>\n<li>THD is the ratio of harmonic content to the fundamental, as a percentage.</li>\n<li>Triplen harmonics (3rd, 9th, 15th) add in the neutral instead of canceling — a fire hazard no breaker protects against.</li>\n<li>Harmonics heat motors, transformers, and capacitors, and can make capacitors resonate.</li>\n<li>Fixes: harmonic filters, derating (oversized neutral, larger conductors), and K-rated transformers — after measuring with a power-quality meter.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Assuming the neutral carries no current in a three-phase system. In a balanced 60 Hz system it carries almost nothing — but triplen harmonics add in the neutral and can overload it.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Adding a power-factor capacitor to a system with harmonics without checking for resonance. The capacitor can resonate at a harmonic frequency and overheat.</div>\n<p><strong>Ready-to-Work link:</strong> If you can explain harmonics, THD, and the triplen problem, and name the fixes, you have this module. Module 12 covers AC troubleshooting and safety.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Harmonics",
      "def": "Currents and voltages at multiples of the line frequency, added to the 60 Hz sine wave."
    },
    {
      "term": "Non-linear load",
      "def": "A load that draws current in pulses rather than a smooth sine wave, such as a VFD or a computer power supply."
    },
    {
      "term": "Linear load",
      "def": "A load that draws a clean sine wave, such as a heater or an incandescent lamp."
    },
    {
      "term": "Total harmonic distortion (THD)",
      "def": "The ratio of harmonic content to the fundamental, given as a percentage."
    },
    {
      "term": "Fundamental",
      "def": "The 60 Hz component of a waveform; the base frequency."
    },
    {
      "term": "Triplen harmonics",
      "def": "The 3rd, 9th, 15th, and other multiples of three; they add in the neutral instead of canceling."
    },
    {
      "term": "Neutral current",
      "def": "The current in the neutral conductor; it can be overloaded by triplen harmonics."
    },
    {
      "term": "Oversized neutral",
      "def": "A neutral conductor larger than the phase conductors, used where harmonics are present."
    },
    {
      "term": "K-rated transformer",
      "def": "A transformer built with heavier windings and core to handle harmonic heating."
    },
    {
      "term": "Harmonic filter",
      "def": "A reactor and capacitor tuned to a harmonic frequency, giving harmonic current a low-impedance path."
    },
    {
      "term": "Derating",
      "def": "Using larger equipment than the 60 Hz load alone would need, to absorb harmonic heating."
    },
    {
      "term": "Power-quality meter",
      "def": "A meter that measures THD, harmonic currents, and neutral current."
    },
    {
      "term": "Variable-frequency drive (VFD)",
      "def": "An electronic device that controls a motor's speed; a major source of harmonics."
    },
    {
      "term": "Eddy-current loss",
      "def": "Energy lost to currents induced in a transformer core; increased by harmonics."
    },
    {
      "term": "Resonance",
      "def": "A capacitor and inductance resonating at a harmonic frequency, causing overheating and overvoltage."
    }
  ],
  "video": {
    "title": "3rd harmonics in power system,  third harmonics explained, third harmonics in ph",
    "embedUrl": "https://www.youtube.com/embed/APaGdXshvjY",
    "note": "A third-harmonic explainer. As you watch, note why triplen harmonics add in the neutral instead of canceling.",
    "more": [
      {
        "title": "The Significance of High-Frequency Harmonics in Power Quality Standards",
        "url": "https://www.youtube.com/watch?v=U_iZMIV3eGc"
      },
      {
        "title": "Power Quality & Harmonics: What’s the Difference?",
        "url": "https://www.youtube.com/watch?v=BuI2DnYADVE"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> What are harmonics, and which loads create them?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Harmonics are currents and voltages at multiples of the line frequency — 120, 180, 240, 300 Hz, and so on. Step 2: They are made by non-linear loads that draw current in pulses. Step 3: VFDs, LED drivers, computer power supplies, and electronic ballasts are the common sources.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Three phases each carry 10 A of 3rd-harmonic current. What is the neutral current from the 3rd harmonic alone?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Triplen harmonics are in phase with each other, so they add in the neutral. Step 2: 10 + 10 + 10 = 30 amps. Step 3: The neutral carries 30 A from the 3rd harmonic alone — even though the 60 Hz currents cancel.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Why can a neutral overheat from harmonics even when the phase conductors are fine?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Triplen harmonics add in the neutral instead of canceling. Step 2: The neutral can carry more current than any one phase. Step 3: The breaker is on the phase conductors, not the neutral, so nothing trips — the neutral overheats silently.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> What is THD, and what does a THD of 30% mean?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: THD is the ratio of harmonic content to the fundamental, as a percentage. Step 2: A THD of 30% means the harmonic content is 30% of the 60 Hz content. Step 3: That is a badly distorted waveform that will heat equipment and confuse meters.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Name two ways harmonics are reduced in a building.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Harmonic filters — a reactor and capacitor tuned to a harmonic frequency. Step 2: Derating — oversized neutrals, larger conductors, or a K-rated transformer built to handle harmonic heating. (Either two of the three are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Why is a K-rated transformer used where harmonics are present?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Harmonics make extra core loss and copper loss in a transformer. Step 2: A standard transformer can overheat at the same load when harmonics are present. Step 3: A K-rated transformer is built with heavier windings and core to handle the extra heating without derating.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Harmonics are:",
      "choices": [
        "Currents at 60 Hz only",
        "Currents and voltages at multiples of the line frequency",
        "DC currents",
        "A type of motor"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Harmonics are multiples of 60 Hz — 120, 180, 240, 300 Hz, and so on. (a) 60 Hz is the fundamental, not a harmonic. (c) Harmonics are AC. (d) A motor is a load, not a harmonic."
    },
    {
      "q": "Non-linear loads include all of the following EXCEPT:",
      "choices": [
        "Variable-frequency drives",
        "LED drivers",
        "Computer power supplies",
        "Electric heaters"
      ],
      "answer": 3,
      "explanation": "Correct: (d). A heater is a linear load that draws a clean sine wave. (a), (b), and (c) are all non-linear loads that draw current in pulses."
    },
    {
      "q": "Triplen harmonics are:",
      "choices": [
        "The 2nd, 4th, and 6th harmonics",
        "The 3rd, 9th, 15th, and other multiples of three",
        "The 60 Hz fundamental",
        "DC harmonics"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Triplen harmonics are multiples of three. (a) Even harmonics are a different group. (c) 60 Hz is the fundamental. (d) DC has no harmonics in this sense."
    },
    {
      "q": "Triplen harmonics in the three phases:",
      "choices": [
        "Cancel in the neutral",
        "Add in the neutral",
        "Disappear",
        "Go to ground"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Triplen harmonics are in phase with each other, so they add in the neutral. (a) The 60 Hz currents cancel; triplens do not. (c) They do not disappear. (d) They add in the neutral, not in the ground."
    },
    {
      "q": "THD is:",
      "choices": [
        "The total power used",
        "The ratio of harmonic content to the fundamental, as a percentage",
        "The temperature of a transformer",
        "The voltage of a harmonic"
      ],
      "answer": 1,
      "explanation": "Correct: (b). THD measures how distorted a waveform is. (a) Total power is not THD. (c) Temperature is not THD. (d) THD is a ratio, not a voltage."
    },
    {
      "q": "A K-rated transformer is:",
      "choices": [
        "A transformer with no losses",
        "A transformer built to handle harmonic heating",
        "A transformer for DC only",
        "A smaller transformer"
      ],
      "answer": 1,
      "explanation": "Correct: (b). K-rated transformers have heavier windings and cores for harmonic loads. (a) No transformer has no losses. (c) Transformers are AC devices. (d) K-rated transformers are built heavier, not smaller."
    },
    {
      "q": "An oversized neutral is used where harmonics are present because:",
      "choices": [
        "The neutral carries the triplen harmonic currents, which add instead of canceling",
        "The neutral carries more voltage",
        "The neutral is cheaper",
        "The code requires it everywhere"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Triplen harmonics add in the neutral and can overload it. (b) The neutral does not carry more voltage. (c) Cost is not the reason. (d) An oversized neutral is used where harmonics warrant it, not everywhere."
    },
    {
      "q": "Before fixing a harmonics problem, the first step is to:",
      "choices": [
        "Guess which harmonics are present",
        "Measure with a power-quality meter — THD, harmonic currents, and neutral current",
        "Add a capacitor",
        "Replace the transformer"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The fix depends on which harmonics are present and how big they are. (a) Guessing is worse than useless. (c) A capacitor can make resonance worse. (d) Replacing the transformer without measuring may not fix the problem."
    }
  ],
  "studyGuide": "\n<h3>Module 11 — Harmonics & Power Quality Basics: Quick Reference</h3>\n<p><strong>Core idea:</strong> Harmonics are extra frequencies riding on the 60 Hz wave, made by electronic loads that draw current in pulses.</p>\n<p><strong>Sources:</strong> VFDs · LED drivers · Computer power supplies · Electronic ballasts (non-linear loads).</p>\n<p><strong>THD:</strong> Ratio of harmonic content to the fundamental, as a percentage · 5% is nearly clean · 30% is badly distorted.</p>\n<p><strong>Triplen problem:</strong> 3rd, 9th, 15th harmonics add in the neutral instead of canceling — a fire hazard no breaker protects against.</p>\n<p><strong>Effects:</strong> Motors and transformers overheat · Capacitors overheat or resonate · Meters read wrong.</p>\n<p><strong>Fixes:</strong> Harmonic filters · Derating (oversized neutral, larger conductors) · K-rated transformers — after measuring with a power-quality meter.</p>\n<p><strong>Self-check:</strong> Explain harmonics, THD, and the triplen problem, and name two fixes, without looking.</p>\n"
};
