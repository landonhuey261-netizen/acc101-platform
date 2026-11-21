// egr105 - Module 4: Inductors in AC
module.exports = {
  "number": 4,
  "slug": "inductors-in-ac",
  "title": "Inductors in AC",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what an inductor is and how it stores energy in a magnetic field.",
    "State that an inductor opposes changes in current.",
    "Use XL = 2πfL to find inductive reactance.",
    "Explain why current lags voltage by 90° in an inductor.",
    "Predict what happens to XL when frequency or inductance changes."
  ],
  "sections": [
    {
      "heading": "What an Inductor Is",
      "html": "<p>An inductor is a coil of wire, often wound around an iron core. When current flows through the coil, it creates a magnetic field — and that field stores energy. Inductance (L) is how much magnetic field (and stored energy) the coil produces per amp, measured in henries (H). Practical inductors are measured in millihenries (mH) or microhenries (µH). The coil in a motor, a transformer, a relay, and a choke are all inductors, and so is any long straight wire, to a small degree.</p>\n<p>The key behaviour of an inductor is that it opposes changes in current. When you try to increase the current, the changing magnetic field induces a voltage that fights the change; when you try to decrease it, the field fights that too. The inductor's motto is: current cannot change instantly. That is why an inductor smooths out ripples in a power supply and why switching off an inductive load can produce a voltage spike — the collapsing field tries to keep the current going.</p>\n"
    },
    {
      "heading": "Inductive Reactance: Opposition That Grows with Frequency",
      "html": "<p>An inductor opposes AC current, and that opposition is called inductive reactance (XL), measured in ohms. The formula is <strong>XL = 2πfL</strong>. Higher frequency means higher reactance — the faster the current tries to change, the harder the inductor fights. Bigger inductance also means higher reactance.</p>\n<p>Example: L = 100 mH (0.1 H) at 60 Hz. XL = 2 × 3.1416 × 60 × 0.1 ≈ 37.7 Ω. At 120 Hz, XL doubles to about 75.4 Ω. At DC (f = 0), XL = 0 — an ideal inductor is a short circuit to DC (a real one is just the resistance of its wire). That is the exact opposite of a capacitor, and the contrast is the point: inductors pass low frequencies and block high ones.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> XL = 2πfL. Higher frequency → higher XL. Bigger inductor → higher XL. At DC, XL is zero. Capacitors do the opposite — remember both.</div></p>\n"
    },
    {
      "heading": "Current Lags Voltage by 90°",
      "html": "<p>In an inductor, voltage comes first and current follows. When the AC voltage starts to rise, the inductor resists the change in current, so the current builds up slowly; the current reaches its peak a quarter-cycle (90°) after the voltage does — current lags voltage by 90°. On a phasor diagram, the current phasor points 90° behind the voltage phasor.</p>\n<p>Like the capacitor, an ideal inductor dissipates no power: it stores energy in its magnetic field for a quarter-cycle and returns it in the next. Real inductors have wire resistance and lose a little energy as heat, but the ideal picture is the right mental model. The energy stored in an inductor is ½ × L × I² — for a 0.1 H coil carrying 2 A, that is 0.5 × 0.1 × 4 = 0.2 J.</p>\n"
    },
    {
      "heading": "Inductors in Real Circuits — and a Safety Warning",
      "html": "<p>Inductors are everywhere in power work: motor windings, transformer coils, relay coils, and chokes that filter power supplies. They are also the reason motors have a poor power factor — a motor is mostly inductance, so its current lags its voltage, and the supply must deliver extra current that does no useful work. Module 6 will show how capacitors fix that.</p>\n<p>Safety warning: never break the current through an inductor suddenly. The collapsing magnetic field induces a voltage spike that can be many times the supply voltage — enough to damage electronics, weld a switch contact, or give a nasty shock. That is why relay and solenoid circuits use a flyback diode or a snubber to give the inductive current somewhere safe to go. If you ever switch off a big motor or solenoid and see a fat spark at the switch, that is the inductor fighting back.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>An inductor is a coil that stores energy in a magnetic field.</li><li>It opposes changes in current; current cannot change instantly.</li><li>XL = 2πfL: higher frequency or bigger inductance means higher reactance.</li><li>Current lags voltage by 90° in an inductor (ELI).</li><li>An ideal inductor stores and returns energy; it dissipates no power.</li><li>Breaking inductive current suddenly causes a voltage spike — use a flyback diode or snubber.</li></ul></p>\n<p><strong>Common mistake:</strong> Forgetting to convert millihenries to henries. 100 mH is 0.1 H. Using 100 in the formula gives an answer a thousand times too big.</p>\n<p><strong>Common mistake:</strong> Mixing up XL and XC. XL grows with frequency; XC shrinks with frequency. If your answer moves the wrong way when frequency doubles, you have the wrong formula.</p>\n<p><strong>Ready check:</strong> If you can find XL for 100 mH at 60 Hz (37.7 Ω) and say whether current leads or lags in an inductor, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Inductor",
      "def": "A coil of wire that stores energy in a magnetic field."
    },
    {
      "term": "Inductance (L)",
      "def": "How much magnetic field an inductor produces per amp, measured in henries (H)."
    },
    {
      "term": "Henry (H)",
      "def": "The unit of inductance; practical inductors are mH or µH."
    },
    {
      "term": "Millihenry (mH)",
      "def": "One thousandth of a henry: 1 mH = 0.001 H."
    },
    {
      "term": "Inductive reactance (XL)",
      "def": "An inductor's opposition to AC, in ohms: XL = 2πfL."
    },
    {
      "term": "Current lags voltage",
      "def": "In an inductor, current peaks 90° after voltage (ELI)."
    },
    {
      "term": "Magnetic field",
      "def": "The field around a current-carrying coil, in which an inductor stores energy."
    },
    {
      "term": "Energy stored (inductor)",
      "def": "½ × L × I², in joules."
    },
    {
      "term": "Flyback diode",
      "def": "A diode across an inductive load that gives the collapsing field's current a safe path, preventing a voltage spike."
    },
    {
      "term": "Voltage spike",
      "def": "A brief high voltage caused by suddenly interrupting current through an inductor."
    },
    {
      "term": "Choke",
      "def": "An inductor used to block high-frequency AC while passing DC or low frequencies."
    },
    {
      "term": "Core",
      "def": "The iron (or ferrite) material inside a coil that strengthens its magnetic field."
    }
  ],
  "video": {
    "title": "Inductors Explained - The basics how inductors work working principle | The Engineering Mindset",
    "embedUrl": "https://www.youtube.com/embed/KSylo01n5FY",
    "note": "How inductors work: the coil, the magnetic field, and why current cannot change instantly.",
    "more": [
      {
        "title": "What are Resistance Reactance Impedance | Prof MAD",
        "url": "https://www.youtube.com/watch?v=UrCFv2qCELI"
      },
      {
        "title": "AC Analysis: Series Resistor/Inductor/Capacitor Circuit | ElectronX Lab",
        "url": "https://www.youtube.com/watch?v=PzwnG72hFkw"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A 100 mH inductor is connected to a 60 Hz supply. Find its inductive reactance. Show the conversion from mH to H.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Convert: 100 mH = 0.1 H. Step 2: XL = 2πfL = 2 × 3.1416 × 60 × 0.1 ≈ 37.7 Ω.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> The same inductor is used at 120 Hz. What is XL now, and why did it change?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: XL = 2 × 3.1416 × 120 × 0.1 ≈ 75.4 Ω. Step 2: It doubled because the frequency doubled — XL is directly proportional to frequency. The faster the current tries to change, the harder the inductor fights.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> An inductor has XL = 75.4 Ω at 120 Hz. What is its inductance?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Rearrange XL = 2πfL to L = XL ÷ (2πf). Step 2: L = 75.4 ÷ (2 × 3.1416 × 120) = 75.4 ÷ 754 ≈ 0.1 H = 100 mH.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A 120 V RMS, 60 Hz supply is connected to an inductor with XL = 60 Ω. What current flows, and does it lead or lag the voltage?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: I = V ÷ XL = 120 ÷ 60 = 2 A. Step 2: In an inductor the current lags the voltage by 90° (ELI).</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A coil of 0.1 H carries 2 A. How much energy is stored in its magnetic field?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Energy = ½ × L × I². Step 2: 0.5 × 0.1 × 4 = 0.2 J.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A relay coil is switched off and a large spark jumps at the switch contacts. Explain what is happening and what should be fitted to prevent it.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The relay coil is an inductor, and breaking its current suddenly makes the collapsing magnetic field induce a large voltage spike. Step 2: That spike arcs across the opening switch contacts, damaging them. Step 3: Fit a flyback diode (or a snubber) across the coil to give the inductive current a safe path to die away.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What is the inductive reactance of a 100 mH inductor at 60 Hz?",
      "choices": [
        "3.77 Ω",
        "37.7 Ω",
        "377 Ω",
        "3,770 Ω"
      ],
      "answer": 1,
      "explanation": "Correct: (b). XL = 2π × 60 × 0.1 ≈ 37.7 Ω. (a) 3.77 Ω is ten times too small. (c) 377 Ω is the angular frequency, not the reactance. (d) 3,770 Ω comes from using 100 H instead of 0.1 H."
    },
    {
      "q": "If the frequency doubles, what happens to XL?",
      "choices": [
        "It halves",
        "It doubles",
        "It stays the same",
        "It becomes zero"
      ],
      "answer": 1,
      "explanation": "Correct: (b). XL = 2πfL, so doubling f doubles XL. (a) is the capacitor's behaviour. (c) is wrong: XL depends on frequency. (d) is wrong: XL grows with frequency."
    },
    {
      "q": "In an inductor, the current ______ the voltage by 90°.",
      "choices": [
        "leads",
        "lags",
        "matches",
        "cancels"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Current lags voltage by 90° in an inductor (ELI). (a) is the capacitor's behaviour. (c) is the resistor's behaviour. (d) is wrong."
    },
    {
      "q": "What does an inductor store energy in?",
      "choices": [
        "An electric field between plates",
        "A magnetic field around its coil",
        "A chemical reaction",
        "Heat in its wire"
      ],
      "answer": 1,
      "explanation": "Correct: (b). An inductor stores energy in the magnetic field of its coil. (a) describes a capacitor. (c) describes a battery. (d) is a loss, not storage."
    },
    {
      "q": "How many henries are in 100 mH?",
      "choices": [
        "100 H",
        "10 H",
        "0.1 H",
        "0.001 H"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 1 mH = 0.001 H, so 100 mH = 0.1 H. (a) forgets the milli. (b) is 10 H. (d) is 1 mH."
    },
    {
      "q": "An inductor is connected to 120 V RMS AC and draws 2 A. What is its reactance?",
      "choices": [
        "240 Ω",
        "60 Ω",
        "0.017 Ω",
        "122 Ω"
      ],
      "answer": 1,
      "explanation": "Correct: (b). XL = V ÷ I = 120 ÷ 2 = 60 Ω. (a) 240 Ω multiplies. (c) 0.017 Ω is 2 ÷ 120 — upside down. (d) 122 Ω adds the numbers."
    },
    {
      "q": "What happens when you suddenly break the current through an inductor?",
      "choices": [
        "Nothing — the current just stops",
        "The collapsing magnetic field induces a voltage spike",
        "The inductor charges up like a capacitor",
        "The frequency doubles"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The field collapses and induces a large voltage that tries to keep the current flowing — the spark at a switch. (a) is wrong: current cannot change instantly in an inductor. (c) is wrong: inductors do not store charge. (d) is wrong: frequency is set by the supply."
    },
    {
      "q": "Which device is fitted across a relay coil to absorb the switch-off voltage spike?",
      "choices": [
        "A fuse",
        "A flyback diode",
        "A bigger switch",
        "A capacitor in series"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A flyback diode gives the inductive current a safe path to decay. (a) is wrong: a fuse protects against overcurrent, not voltage spikes. (c) is wrong: a bigger switch still arcs. (d) is wrong: a series capacitor blocks DC and does not absorb the spike."
    }
  ],
  "studyGuide": "\n<h3>Module 4 — Inductors in AC: Quick Reference</h3>\n<p><strong>Core idea:</strong> An inductor stores energy in a magnetic field and opposes changes in current. XL = 2πfL; current lags voltage by 90°.</p>\n<p><strong>Key terms:</strong> Inductor · Inductance · Inductive reactance · Current lags voltage · Flyback diode.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>XL = 2πfL — higher f or bigger L means higher XL.</li>\n<li>Convert mH to H before calculating (100 mH = 0.1 H).</li>\n<li>Current lags voltage by 90° (ELI).</li>\n<li>Never break inductive current suddenly — use a flyback diode.</li></ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
