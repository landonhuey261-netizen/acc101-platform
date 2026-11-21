// egr105 - Module 11: AC Induction Motors & Generators
module.exports = {
  "number": 11,
  "slug": "ac-induction-motors-generators",
  "title": "AC Induction Motors & Generators",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain how a three-phase induction motor works: a rotating magnetic field dragging the rotor along.",
    "Use ns = 120f ÷ P to find synchronous speed.",
    "Find the slip of an induction motor from its speeds.",
    "Explain what a generator does and how a sine wave is produced.",
    "Work out a generator's peak and RMS voltage from a rotating coil."
  ],
  "sections": [
    {
      "heading": "The Induction Motor: The Motor That Never Catches Up",
      "html": "<p>The three-phase induction motor is the workhorse of industry — simple, rugged, cheap, and with no brushes or commutator. Its stator (the stationary outer part) has three windings fed by the three phases, which together produce a magnetic field that rotates around the inside of the motor. That rotating field cuts through the rotor (the spinning inner part), induces currents in it, and those currents feel a force that drags the rotor around after the field. The rotor never quite catches up with the field — and that gap is the whole secret, as the next section explains.</p>\n<p>The most common rotor is the squirrel cage: aluminium or copper bars set in slots and shorted at both ends by rings, looking like a hamster wheel. There are no windings, no brushes, no connections to the rotor at all — the rotor currents are induced, which is why it is called an induction motor.</p>\n"
    },
    {
      "heading": "Synchronous Speed and Slip",
      "html": "<p>The rotating field spins at the synchronous speed: <strong>ns = 120f ÷ P</strong>, where f is the supply frequency in hertz and P is the number of poles. At 60 Hz, a 2-pole motor's field spins at 3,600 rpm, a 4-pole at 1,800 rpm, and a 6-pole at 1,200 rpm. The rotor always turns slightly slower than the field — if it caught up, there would be no relative motion, no induced current, and no torque. That speed difference is called slip: <strong>slip = (ns − n) ÷ ns × 100%</strong>.</p>\n<p>Example: a 4-pole, 60 Hz motor has ns = 1,800 rpm. If its rotor turns at 1,750 rpm, the slip is (1,800 − 1,750) ÷ 1,800 × 100% ≈ 2.78%. At no load the slip is small (under 1%); at full load it is typically 2–5%. Slip is what makes the motor work — and it is also why an induction motor's speed is set by the supply frequency and the pole count, not by the voltage.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> ns = 120f ÷ P. Slip = (ns − n) ÷ ns × 100%. The rotor must lag the field — no slip, no torque.</div></p>\n"
    },
    {
      "heading": "Starting, Speed Control, and Single-Phase Induction Motors",
      "html": "<p>A three-phase induction motor starts by itself — the rotating field is there from the moment the power is switched on. A single-phase induction motor has no rotating field (one phase cannot make one), so it needs a start winding and a capacitor to fake a second phase and get it turning, plus a centrifugal switch that cuts the start winding out once it is up to speed. That is why single-phase motors hum and fail to start when the capacitor dies.</p>\n<p>Speed control of an induction motor means changing the frequency: a variable-frequency drive (VFD) varies both the frequency and the voltage together, so the motor runs at any speed from near zero to above its rated speed. That is how modern fans, pumps, and conveyors are controlled — and why a VFD is the first thing to check when a motor runs at the wrong speed.</p>\n"
    },
    {
      "heading": "Generators: Making AC from Motion",
      "html": "<p>A generator is a motor run backwards: spin a coil in a magnetic field (or spin the field around a coil) and a voltage is induced. The voltage is a sine wave because the coil's angle to the field changes sinusoidally as it turns. The peak voltage of a rotating coil is <strong>Emax = N × B × A × ω</strong>, where N is the number of turns, B is the field strength in teslas, A is the coil area in square metres, and ω is the angular speed in radians per second (ω = 2πf).</p>\n<p>Example: a coil of 100 turns, a field of 0.5 T, an area of 0.02 m², spinning at 60 Hz (ω = 377 rad/s). Emax = 100 × 0.5 × 0.02 × 377 = 377 V peak, and the RMS voltage is 377 ÷ √2 ≈ 267 V. That is the same physics as the sine wave in Module 1, now with the numbers behind it. In a power station the same idea is scaled up: a turbine spins a huge rotor inside a stator, and the three-phase windings produce the three-phase power the grid runs on.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>An induction motor's stator makes a rotating magnetic field; the field drags the rotor along by induction.</li><li>ns = 120f ÷ P: 2-pole = 3,600 rpm, 4-pole = 1,800 rpm, 6-pole = 1,200 rpm at 60 Hz.</li><li>Slip = (ns − n) ÷ ns × 100%: the rotor must lag the field, or there is no torque.</li><li>Single-phase induction motors need a start capacitor; three-phase motors start by themselves.</li><li>Speed is controlled with a VFD (frequency and voltage together).</li><li>Generators make a sine wave: Emax = N × B × A × ω, and Vrms = Emax ÷ √2.</li></ul></p>\n<p><strong>Common mistake:</strong> Using the rotor speed in place of the synchronous speed, or vice versa. Synchronous speed comes from the formula (120f ÷ P); slip is the difference between that and the rotor speed.</p>\n<p><strong>Common mistake:</strong> Saying the rotor catches up with the field. It cannot — if it did, induction would stop and the torque would vanish. The lag is the point.</p>\n<p><strong>Ready check:</strong> If you can find the synchronous speed of a 4-pole 60 Hz motor (1,800 rpm), its slip at 1,750 rpm (2.78%), and a generator's RMS voltage from Emax = 377 V (267 V), you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Induction motor",
      "def": "An AC motor whose rotor currents are induced by the stator's rotating magnetic field; no brushes or commutator."
    },
    {
      "term": "Stator",
      "def": "The stationary outer part of a motor, carrying the windings that make the rotating field."
    },
    {
      "term": "Rotor",
      "def": "The spinning inner part of a motor."
    },
    {
      "term": "Squirrel-cage rotor",
      "def": "A rotor made of bars shorted by end rings, like a hamster wheel."
    },
    {
      "term": "Synchronous speed (ns)",
      "def": "The speed of the rotating magnetic field: ns = 120f ÷ P."
    },
    {
      "term": "Slip",
      "def": "The percentage by which the rotor lags the synchronous speed: (ns − n) ÷ ns × 100%."
    },
    {
      "term": "Poles (P)",
      "def": "The number of magnetic poles in the motor: 2, 4, 6, …"
    },
    {
      "term": "Rotating magnetic field",
      "def": "The field produced by three-phase stator currents that turns the rotor."
    },
    {
      "term": "VFD",
      "def": "Variable-frequency drive: controls an induction motor's speed by varying frequency and voltage together."
    },
    {
      "term": "Start capacitor",
      "def": "A capacitor that creates a second phase so a single-phase induction motor can start."
    },
    {
      "term": "Generator",
      "def": "A machine that converts mechanical rotation into AC electrical energy."
    },
    {
      "term": "Peak EMF (Emax)",
      "def": "The maximum voltage of a rotating coil: Emax = N × B × A × ω."
    }
  ],
  "video": {
    "title": "How does an Induction Motor work how it works 3 phase motor ac motor | The Engineering Mindset",
    "embedUrl": "https://www.youtube.com/embed/N7TZ4gm3aUg",
    "note": "The induction motor explained: the stator, the rotating field, the squirrel-cage rotor, and slip.",
    "more": [
      {
        "title": "AC Electrical Generator Basics - How electricity is generated | The Engineering Mindset",
        "url": "https://www.youtube.com/watch?v=WhATjUHgzxQ"
      },
      {
        "title": "How a 3 Phase Induction Motor Works | The Engineering Mindset",
        "url": "https://www.youtube.com/watch?v=AWnHG7KbJjA"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> What is the synchronous speed of a 4-pole induction motor on a 60 Hz supply? A 2-pole motor? A 6-pole motor?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: ns = 120f ÷ P. Step 2: 4-pole: 120 × 60 ÷ 4 = 1,800 rpm. Step 3: 2-pole: 120 × 60 ÷ 2 = 3,600 rpm. Step 4: 6-pole: 120 × 60 ÷ 6 = 1,200 rpm.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A 4-pole, 60 Hz motor's rotor turns at 1,750 rpm. What is the slip?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: ns = 1,800 rpm. Step 2: Slip = (1,800 − 1,750) ÷ 1,800 × 100% = 50 ÷ 1,800 × 100% ≈ 2.78%.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A 6-pole, 60 Hz motor runs at 1,160 rpm. Find the synchronous speed and the slip.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: ns = 120 × 60 ÷ 6 = 1,200 rpm. Step 2: Slip = (1,200 − 1,160) ÷ 1,200 × 100% = 40 ÷ 1,200 × 100% ≈ 3.33%.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A generator coil has 100 turns, a field of 0.5 T, an area of 0.02 m², and spins at 60 Hz. Find the peak EMF and the RMS voltage.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: ω = 2π × 60 ≈ 377 rad/s. Step 2: Emax = N × B × A × ω = 100 × 0.5 × 0.02 × 377 = 377 V peak. Step 3: Vrms = 377 ÷ √2 ≈ 267 V.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A single-phase induction motor hums but will not start. Name the most likely faulty part and explain why the motor cannot start without it.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The most likely fault is the start capacitor. Step 2: A single-phase supply cannot produce a rotating magnetic field on its own, so the start winding and capacitor create a second, phase-shifted current that fakes a second phase. Step 3: Without it there is no rotating field and no starting torque — the motor just hums.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A conveyor motor needs to run at half speed. Explain why a VFD is the right tool and what it changes.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: An induction motor's speed is set by the supply frequency and the pole count, so the only way to change it is to change the frequency. Step 2: A variable-frequency drive (VFD) lowers the frequency to 30 Hz (and lowers the voltage proportionally so the motor does not saturate). Step 3: The motor then runs at about half its synchronous speed, smoothly and efficiently.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What is the synchronous speed of a 4-pole induction motor at 60 Hz?",
      "choices": [
        "3,600 rpm",
        "1,800 rpm",
        "1,200 rpm",
        "1,750 rpm"
      ],
      "answer": 1,
      "explanation": "Correct: (b). ns = 120 × 60 ÷ 4 = 1,800 rpm. (a) 3,600 rpm is 2-pole. (c) 1,200 rpm is 6-pole. (d) 1,750 rpm is a typical rotor speed, not the synchronous speed."
    },
    {
      "q": "A 4-pole, 60 Hz motor's rotor turns at 1,750 rpm. What is the slip?",
      "choices": [
        "50%",
        "2.78%",
        "5.56%",
        "0%"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Slip = (1,800 − 1,750) ÷ 1,800 × 100% ≈ 2.78%. (a) 50% is the rpm difference, not a percentage. (c) 5.56% doubles it. (d) 0% would mean the rotor caught the field — impossible."
    },
    {
      "q": "Why does an induction motor's rotor never catch up with the rotating field?",
      "choices": [
        "Because the bearings slow it down",
        "Because if it did, there would be no relative motion, no induced current, and no torque",
        "Because the supply frequency is too low",
        "Because the rotor is too heavy"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Induction needs relative motion between the field and the rotor; at equal speed, induction stops. (a) is wrong: bearings are a small loss, not the reason. (c) is wrong: frequency sets the field speed. (d) is wrong: mass does not stop it catching up."
    },
    {
      "q": "What is the synchronous speed of a 2-pole motor at 60 Hz?",
      "choices": [
        "1,800 rpm",
        "3,600 rpm",
        "1,200 rpm",
        "900 rpm"
      ],
      "answer": 1,
      "explanation": "Correct: (b). ns = 120 × 60 ÷ 2 = 3,600 rpm. (a) is 4-pole. (c) is 6-pole. (d) is 8-pole."
    },
    {
      "q": "A generator coil has N = 100, B = 0.5 T, A = 0.02 m², and spins at 60 Hz (ω = 377 rad/s). What is the peak EMF?",
      "choices": [
        "267 V",
        "377 V",
        "188 V",
        "754 V"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Emax = 100 × 0.5 × 0.02 × 377 = 377 V. (a) 267 V is the RMS value (377 ÷ √2). (c) 188 V is half. (d) 754 V doubles it."
    },
    {
      "q": "What is the RMS voltage of that generator?",
      "choices": [
        "377 V",
        "267 V",
        "533 V",
        "188 V"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Vrms = 377 ÷ √2 ≈ 267 V. (a) 377 V is the peak. (c) 533 V is 377 × √2 — the wrong direction. (d) 188 V is half the peak."
    },
    {
      "q": "Why does a single-phase induction motor need a start capacitor?",
      "choices": [
        "To store energy for the load",
        "To create a phase-shifted second current so there is a rotating field to start the motor",
        "To correct the power factor",
        "To reduce the starting current"
      ],
      "answer": 1,
      "explanation": "Correct: (b). One phase alone cannot make a rotating field; the capacitor and start winding fake a second phase. (a) is wrong: the capacitor does not store useful energy. (c) is a different use of capacitors. (d) is wrong: the capacitor does not limit current."
    },
    {
      "q": "How does a VFD control an induction motor's speed?",
      "choices": [
        "By changing the number of poles",
        "By varying the supply frequency (and voltage) together",
        "By changing the rotor resistance",
        "By switching the motor on and off"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Speed follows frequency, so the VFD changes the frequency and scales the voltage to match. (a) is wrong: poles are fixed by construction. (c) is an old wound-rotor trick, not a VFD. (d) is wrong: that is not speed control."
    }
  ],
  "studyGuide": "\n<h3>Module 11 — AC Induction Motors & Generators: Quick Reference</h3>\n<p><strong>Core idea:</strong> An induction motor's stator makes a rotating field that drags the rotor along. ns = 120f ÷ P; the rotor must lag the field — that lag is slip.</p>\n<p><strong>Key terms:</strong> Induction motor · Synchronous speed · Slip · VFD · Generator.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>ns = 120f ÷ P: 2-pole 3,600, 4-pole 1,800, 6-pole 1,200 rpm at 60 Hz.</li>\n<li>Slip = (ns − n) ÷ ns × 100%.</li>\n<li>Single-phase motors need a start capacitor.</li>\n<li>Emax = N × B × A × ω; Vrms = Emax ÷ √2.</li></ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
