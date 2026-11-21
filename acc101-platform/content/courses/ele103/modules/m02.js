// ele103 - Module 2: Inductance & Inductive Reactance
module.exports = {
  "number": 2,
  "slug": "inductance-and-inductive-reactance",
  "title": "Inductance & Inductive Reactance",
  "estTime": "3–4 hours",
  "objectives": [
    "Define inductance and state its unit, the henry.",
    "Explain how an inductor stores energy in a magnetic field.",
    "Calculate inductive reactance with X_L = 2πfL.",
    "Explain why current lags voltage in an inductive circuit.",
    "Describe where inductors are found in electrical work: motors, transformers, and coils."
  ],
  "sections": [
    {
      "heading": "What Inductance Is",
      "html": "<p><strong>Inductance</strong> is the property of a coil that opposes a change in current. When current flows through a coil, it builds a magnetic field; when the current tries to change, the field changes, and the changing field induces a voltage in the coil that opposes the change. The coil stores energy in its magnetic field while current flows, and returns that energy when the current falls. Inductance is measured in <strong>henrys (H)</strong>, and a coil's inductance depends on its number of turns, its core material, and its shape.</p>\n<p>Every coil is an inductor: a motor winding, a transformer winding, a relay coil, a solenoid, and a choke. Even a straight wire has a tiny inductance, though it is usually too small to matter. The inductor is the AC counterpart of the resistor — but where a resistor turns energy into heat and wastes it, an inductor stores energy in a field and returns it, so it does not waste power in the same way.</p>\n<div class=\"callout\"><strong>Key idea:</strong> An inductor fights change. It lets steady current through and resists any change in that current — and in AC, where the current is always changing, that resistance is always at work.</div>"
    },
    {
      "heading": "Inductive Reactance: X_L = 2πfL",
      "html": "<p>In an AC circuit, an inductor opposes current with <strong>inductive reactance</strong>, measured in ohms like resistance but different from it. The formula is <strong>X<sub>L</sub> = 2πfL</strong>, where f is the frequency in hertz and L is the inductance in henrys. Reactance rises with frequency — a faster-changing current meets more opposition — and rises with inductance. At DC (zero frequency), an inductor has no reactance at all, which is why a coil is a short circuit to DC once the field is built.</p>\n<p>Worked example: a 100 mH (0.1 H) inductor at 60 Hz. X<sub>L</sub> = 2 × 3.1416 × 60 × 0.1 ≈ 37.7 ohms. The same inductor at 120 Hz has twice the reactance, about 75.4 ohms. And a 1 H inductor at 60 Hz has X<sub>L</sub> = 2 × 3.1416 × 60 × 1 ≈ 377 ohms. The formula is the tool for every inductive calculation in this course, and it is worth memorizing: 2πfL.</p>"
    },
    {
      "heading": "Current Lags Voltage",
      "html": "<p>In a purely inductive circuit, the current <strong>lags</strong> the voltage by 90 degrees. The voltage rises first, building the magnetic field, and the current follows as the field builds. The two waves are out of step by a quarter cycle. In a real circuit with both resistance and inductance, the lag is less than 90 degrees — the resistance pulls the current back toward the voltage, and the angle between them is the phase angle, covered in Module 4.</p>\n<p>The lag is why inductive loads — motors, transformers, fluorescent ballasts — draw more current than their real power suggests. The current is there, doing the work of building and collapsing magnetic fields, but it is not in step with the voltage, so it does not all become useful power. That mismatch is power factor, covered in Module 7, and it starts here, with the lag.</p>"
    },
    {
      "heading": "Inductors in the Trade",
      "html": "<p>The electrician meets inductors everywhere. A motor is a set of inductors — its windings — spinning in a magnetic field. A transformer is two inductors sharing a core. A relay coil is an inductor that pulls a switch. A ballast is an inductor that limits the current through a lamp. And a choke is an inductor used to block AC while passing DC, or to smooth a power supply.</p>\n<p>Inductors also cause a practical hazard: when the current through an inductor is switched off suddenly, the collapsing magnetic field induces a high voltage spike — back-EMF — that can arc across switch contacts and damage electronic controls. That is why motor starters and relay circuits have snubbers or suppressors, and why a coil's terminals are treated with respect even after the power is off: the field collapses fast, and the spike is real.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Inductance (henrys) is a coil's opposition to a change in current; it stores energy in a magnetic field.</li>\n<li>Inductive reactance: X<sub>L</sub> = 2πfL, in ohms; it rises with frequency and with inductance.</li>\n<li>In a purely inductive circuit, current lags voltage by 90°.</li>\n<li>Inductors: motor windings, transformer windings, relay coils, solenoids, ballasts, chokes.</li>\n<li>Switching an inductor off suddenly makes a high-voltage back-EMF spike.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Treating reactance like resistance. Reactance is measured in ohms, but it stores energy instead of turning it into heat — and it depends on frequency, which resistance does not.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Saying the current leads in an inductor. In an inductor, current lags voltage; in a capacitor, current leads voltage. The memory aid is \"ELI the ICE man\": in L (inductance), I lags E; in C (capacitance), I leads E.</div>\n<p><strong>Ready-to-Work link:</strong> If you can define inductance, calculate X_L, and explain the 90° lag, you have this module. Module 3 covers capacitance and capacitive reactance.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Inductance",
      "def": "A coil's opposition to a change in current, measured in henrys."
    },
    {
      "term": "Henry (H)",
      "def": "The unit of inductance."
    },
    {
      "term": "Inductor",
      "def": "A coil that stores energy in a magnetic field."
    },
    {
      "term": "Inductive reactance (X_L)",
      "def": "An inductor's opposition to AC current, in ohms; X_L = 2πfL."
    },
    {
      "term": "Lag",
      "def": "Current reaching its peak after the voltage; in a pure inductor, current lags voltage by 90°."
    },
    {
      "term": "Phase angle",
      "def": "The angle between the voltage and current waves, in degrees."
    },
    {
      "term": "Back-EMF",
      "def": "The voltage a coil induces in itself that opposes a change in its current; a spike when the coil is switched off."
    },
    {
      "term": "Magnetic field",
      "def": "The region around a coil where magnetic force acts; where an inductor stores energy."
    },
    {
      "term": "Choke",
      "def": "An inductor used to block AC while passing DC, or to smooth a power supply."
    },
    {
      "term": "Ballast",
      "def": "An inductor that limits the current through a lamp."
    },
    {
      "term": "Motor winding",
      "def": "A coil in a motor; an inductor that makes the motor's magnetic field."
    },
    {
      "term": "Transformer winding",
      "def": "A coil in a transformer; an inductor that couples energy through a shared core."
    },
    {
      "term": "Snubber",
      "def": "A circuit that suppresses the voltage spike when an inductive load is switched off."
    },
    {
      "term": "ELI the ICE man",
      "def": "A memory aid: in L, I lags E; in C, I leads E."
    },
    {
      "term": "Steady state",
      "def": "The condition after a circuit's transients have settled and the waves repeat steadily."
    }
  ],
  "video": {
    "title": "What the Heck is Reactance and Why is it So Weird?!?",
    "embedUrl": "https://www.youtube.com/embed/GCiVNAwErnQ",
    "note": "A reactance explainer covering inductance and capacitance. As you watch, write down the X_L formula and the 90° lag rule.",
    "more": [
      {
        "title": "Inductive Reactance Explained -- ANIMATION",
        "url": "https://www.youtube.com/watch?v=PWqEgx69xDA"
      },
      {
        "title": "Calculating Inductive Reactance",
        "url": "https://www.youtube.com/watch?v=nTzM3wuE8H0"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A 100 mH (0.1 H) inductor is connected to a 60 Hz source. What is its inductive reactance?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: X_L = 2πfL. Step 2: X_L = 2 × 3.1416 × 60 × 0.1 ≈ 37.7 ohms. Step 3: The reactance is about 37.7 ohms.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> The same inductor is connected to a 120 Hz source. What is its reactance now?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: X_L = 2 × 3.1416 × 120 × 0.1 ≈ 75.4 ohms. Step 2: Doubling the frequency doubles the reactance. Step 3: The reactance is about 75.4 ohms.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A 1 H inductor is connected to a 60 Hz source. What is its inductive reactance?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: X_L = 2 × 3.1416 × 60 × 1 ≈ 377 ohms. Step 2: A large inductance at line frequency is a large reactance. Step 3: The reactance is about 377 ohms.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> In a purely inductive circuit, by how many degrees does the current lag the voltage?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: In a pure inductor, current lags voltage by 90 degrees. Step 2: The voltage rises first, building the field, and the current follows. Step 3: In a real circuit with resistance, the lag is less than 90 degrees.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> An inductor has 10 Ω of reactance at 60 Hz. What is its reactance at 180 Hz?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Reactance is proportional to frequency. Step 2: 180 ÷ 60 = 3, so the reactance triples. Step 3: X_L = 30 ohms at 180 Hz.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Why does switching off an inductive load make a voltage spike?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The inductor's magnetic field collapses when the current stops. Step 2: The collapsing field induces a high voltage — back-EMF — that opposes the change. Step 3: The spike can arc across switch contacts and damage controls, which is why snubbers are used.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Inductance is measured in:",
      "choices": [
        "Ohms",
        "Henrys",
        "Farads",
        "Watts"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Inductance is measured in henrys. (a) Ohms measure resistance and reactance. (c) Farads measure capacitance. (d) Watts measure power."
    },
    {
      "q": "Inductive reactance is calculated with:",
      "choices": [
        "X_L = 2πfL",
        "X_L = 1 ÷ (2πfC)",
        "X_L = E ÷ I",
        "X_L = I² × R"
      ],
      "answer": 0,
      "explanation": "Correct: (a). X_L = 2πfL. (b) That is the capacitive reactance formula. (c) E ÷ I is impedance or resistance. (d) I² × R is power lost as heat."
    },
    {
      "q": "A 0.1 H inductor at 60 Hz has a reactance of about:",
      "choices": [
        "3.77 Ω",
        "37.7 Ω",
        "377 Ω",
        "3,770 Ω"
      ],
      "answer": 1,
      "explanation": "Correct: (b). X_L = 2 × 3.1416 × 60 × 0.1 ≈ 37.7 ohms. (a) 3.77 ohms would need 0.01 H. (c) 377 ohms would need 1 H. (d) 3,770 ohms would need 10 H."
    },
    {
      "q": "If the frequency doubles, inductive reactance:",
      "choices": [
        "Doubles",
        "Is halved",
        "Stays the same",
        "Goes to zero"
      ],
      "answer": 0,
      "explanation": "Correct: (a). X_L is proportional to frequency, so doubling f doubles X_L. (b) Halving is what happens to capacitive reactance. (c) Reactance changes with frequency. (d) Reactance is zero only at DC."
    },
    {
      "q": "In a purely inductive circuit, current:",
      "choices": [
        "Leads voltage by 90°",
        "Lags voltage by 90°",
        "Is in phase with voltage",
        "Is zero"
      ],
      "answer": 1,
      "explanation": "Correct: (b). In an inductor, current lags voltage by 90 degrees. (a) Current leads in a capacitor. (c) In phase is a purely resistive circuit. (d) Current flows in an inductive circuit."
    },
    {
      "q": "An inductor stores energy in:",
      "choices": [
        "An electric field",
        "A magnetic field",
        "A battery",
        "A capacitor"
      ],
      "answer": 1,
      "explanation": "Correct: (b). An inductor stores energy in its magnetic field. (a) A capacitor stores energy in an electric field. (c) A battery stores chemical energy. (d) A capacitor is a different component."
    },
    {
      "q": "At DC (zero frequency), an inductor's reactance is:",
      "choices": [
        "Infinite",
        "Zero",
        "Equal to its resistance",
        "377 ohms"
      ],
      "answer": 1,
      "explanation": "Correct: (b). X_L = 2πfL, and at f = 0, X_L = 0. (a) Infinite reactance is a capacitor at DC. (c) The wire's resistance remains, but the reactance is zero. (d) 377 ohms is 1 H at 60 Hz."
    },
    {
      "q": "\"ELI the ICE man\" means:",
      "choices": [
        "In L, I lags E; in C, I leads E",
        "In L, I leads E; in C, I lags E",
        "E and I are always in phase",
        "L and C have no phase shift"
      ],
      "answer": 0,
      "explanation": "Correct: (a). In an inductor (L), current lags voltage; in a capacitor (C), current leads voltage. (b) That is backwards. (c) E and I are in phase only in a resistive circuit. (d) L and C both shift phase by up to 90 degrees."
    }
  ],
  "studyGuide": "\n<h3>Module 2 — Inductance & Inductive Reactance: Quick Reference</h3>\n<p><strong>Core idea:</strong> An inductor fights change. It lets steady current through and resists any change in that current.</p>\n<p><strong>Inductance:</strong> Henrys (H) · Stores energy in a magnetic field · Depends on turns, core, and shape.</p>\n<p><strong>Reactance:</strong> X_L = 2πfL, in ohms · Rises with frequency and inductance · Zero at DC.</p>\n<p><strong>Phase:</strong> In a pure inductor, current lags voltage by 90°.</p>\n<p><strong>Memory aid:</strong> \"ELI the ICE man\" — in L, I lags E; in C, I leads E.</p>\n<p><strong>Watch out:</strong> Switching an inductor off makes a high-voltage back-EMF spike.</p>\n<p><strong>Self-check:</strong> Calculate X_L for 0.1 H at 60 Hz and state the lag rule, without looking.</p>\n"
};
