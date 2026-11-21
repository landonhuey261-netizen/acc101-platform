// ele103 - Module 1: Sine Waves & AC Fundamentals
module.exports = {
  "number": 1,
  "slug": "sine-waves-and-ac-fundamentals",
  "title": "Sine Waves & AC Fundamentals",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what alternating current is and how it differs from direct current.",
    "Describe a sine wave: amplitude, frequency, period, and phase.",
    "Explain the difference between peak, peak-to-peak, and RMS voltage.",
    "Calculate frequency from period and period from frequency.",
    "Explain why AC is used for power distribution."
  ],
  "sections": [
    {
      "heading": "What Alternating Current Is",
      "html": "<p><strong>Alternating current (AC)</strong> is current that changes direction periodically, flowing one way, then the other, over and over. It is the current that comes out of a wall outlet, that runs through the power grid, and that powers almost every building in the country. <strong>Direct current (DC)</strong>, by contrast, flows in one direction only — from a battery, a solar panel, or a DC power supply. The difference is not a detail: AC can be transformed to higher or lower voltages easily, which is why it won the job of carrying power over long distances.</p>\n<p>AC is made by a generator: a coil spun inside a magnetic field, or a magnet spun inside a coil, so the voltage it produces rises, falls, reverses, and rises again in a smooth, repeating pattern. That pattern is the sine wave, and it is the shape of the power in every outlet. The generator's rotation sets the frequency, and the grid's generators all spin together, locked to the same frequency — 60 hertz in North America.</p>\n<div class=\"callout\"><strong>Key idea:</strong> AC changes direction; DC does not. The sine wave is the shape of AC, and 60 hertz is its rhythm in North America.</div>"
    },
    {
      "heading": "The Sine Wave: Amplitude, Frequency & Period",
      "html": "<p>A sine wave is described by four numbers. <strong>Amplitude</strong> is the height of the wave — the maximum voltage or current it reaches, called the <strong>peak value</strong>. <strong>Frequency</strong> is how many complete cycles the wave makes per second, measured in <strong>hertz (Hz)</strong>. <strong>Period</strong> is the time one cycle takes, measured in seconds, and it is the reciprocal of frequency: T = 1 ÷ f. At 60 Hz, one cycle takes 1 ÷ 60 ≈ 0.0167 seconds, or 16.7 milliseconds. <strong>Phase</strong> is where a wave is in its cycle, measured in degrees: a cycle is 360 degrees, so 90 degrees is a quarter cycle, 180 degrees is half a cycle, and two waves that reach their peaks at the same time are in phase.</p>\n<p>Phase matters because AC circuits have parts that shift the wave. An inductor makes the current lag the voltage; a capacitor makes the current lead the voltage. Those shifts are measured in degrees, and they are the reason AC circuits need more than Ohm's law — they need the reactance and impedance covered in the next three modules.</p>"
    },
    {
      "heading": "Peak, Peak-to-Peak & RMS",
      "html": "<p>A sine wave's <strong>peak voltage (V<sub>pk</sub>)</strong> is its maximum height; its <strong>peak-to-peak voltage (V<sub>pp</sub>)</strong> is the distance from the top of the wave to the bottom, which is twice the peak. But the number that matters most in the trade is the <strong>RMS voltage</strong> — the root-mean-square value — which is the DC voltage that would deliver the same power to a resistor. For a sine wave, V<sub>RMS</sub> = V<sub>pk</sub> × 0.707, and V<sub>pk</sub> = V<sub>RMS</sub> × 1.414.</p>\n<p>The 120 volts in a wall outlet is an RMS value. The peak of that wave is 120 × 1.414 ≈ 170 volts, and the peak-to-peak is about 340 volts. Meters read RMS, nameplates are rated in RMS, and the NEC is written in RMS — so when an electrician says \"120 volts,\" they mean 120 volts RMS. The 0.707 factor is the number that connects the wave's height to the power it delivers, and it is the most-used number in AC theory.</p>"
    },
    {
      "heading": "Why AC Won Power Distribution",
      "html": "<p>AC won the job of carrying power because it can be transformed. A transformer steps voltage up for transmission and down for use, and stepping voltage up means the same power can be carried at lower current — which means less I²R loss in the wires, less heat, and less wasted energy. A power line carrying 100 megawatts at 120 volts would need an impossible current; at 345,000 volts, the current is a manageable few hundred amps. DC could not be transformed that way when the grid was built, and the grid was built on AC.</p>\n<p>AC also suits the machines that use it. AC motors are simple, rugged, and cheap, with no brushes to wear out — the workhorses of industry. AC lighting, heating, and appliances are simple to build. And the grid itself is AC: generators, transformers, and motors all speak the same language, the sine wave at 60 hertz. DC has its place — in batteries, electronics, and solar — but the power that arrives at a building is AC, and the electrician's job is to understand it.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>AC changes direction periodically; DC flows in one direction only.</li>\n<li>Sine wave: amplitude (peak), frequency (Hz), period (T = 1 ÷ f), phase (degrees).</li>\n<li>At 60 Hz, one cycle takes about 16.7 ms.</li>\n<li>V<sub>RMS</sub> = V<sub>pk</sub> × 0.707; V<sub>pk</sub> = V<sub>RMS</sub> × 1.414; 120 V RMS has a peak of about 170 V.</li>\n<li>AC won power distribution because transformers step voltage up for efficient transmission and down for use.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Treating the peak voltage as the circuit voltage. The 120 volts in an outlet is RMS — the peak is about 170 volts, and the peak-to-peak is about 340 volts.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Confusing frequency and period. Frequency is cycles per second; period is seconds per cycle — they are reciprocals, T = 1 ÷ f.</div>\n<p><strong>Ready-to-Work link:</strong> If you can describe a sine wave, convert between peak and RMS, and find period from frequency, you have this module. Module 2 covers inductance and inductive reactance.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Alternating current (AC)",
      "def": "Current that changes direction periodically; the current from a wall outlet and the power grid."
    },
    {
      "term": "Direct current (DC)",
      "def": "Current that flows in one direction only; from a battery or a DC supply."
    },
    {
      "term": "Sine wave",
      "def": "The smooth, repeating waveform of AC power."
    },
    {
      "term": "Amplitude",
      "def": "The height of a wave; the maximum voltage or current it reaches."
    },
    {
      "term": "Peak value (V_pk)",
      "def": "The maximum value of a sine wave."
    },
    {
      "term": "Peak-to-peak value (V_pp)",
      "def": "The distance from the top of a sine wave to the bottom; twice the peak."
    },
    {
      "term": "RMS value",
      "def": "The root-mean-square value; the DC value that would deliver the same power to a resistor."
    },
    {
      "term": "Frequency",
      "def": "The number of complete cycles per second, measured in hertz."
    },
    {
      "term": "Hertz (Hz)",
      "def": "The unit of frequency; one hertz is one cycle per second."
    },
    {
      "term": "Period (T)",
      "def": "The time one cycle takes, in seconds; T = 1 ÷ f."
    },
    {
      "term": "Phase",
      "def": "Where a wave is in its cycle, measured in degrees; a cycle is 360 degrees."
    },
    {
      "term": "In phase",
      "def": "Two waves that reach their peaks at the same time."
    },
    {
      "term": "Generator",
      "def": "A machine that converts mechanical energy into electrical energy, producing AC as a sine wave."
    },
    {
      "term": "Transformer",
      "def": "A device that steps AC voltage up or down using electromagnetic induction."
    },
    {
      "term": "60 hertz",
      "def": "The frequency of the power grid in North America."
    }
  ],
  "video": {
    "title": "AC Basics: Learn All About Alternating Current",
    "embedUrl": "https://www.youtube.com/embed/OUcKJuMSSW4",
    "note": "An AC fundamentals walkthrough. As you watch, write down the four numbers that describe a sine wave and the RMS conversion factor.",
    "more": [
      {
        "title": "The sine wave explained (AC Waveform analysis)",
        "url": "https://www.youtube.com/watch?v=98FgWHu2eI4"
      },
      {
        "title": "How Alternating Current Works | AC Generator 3D Animation - Sine Wave Explained",
        "url": "https://www.youtube.com/watch?v=zoXprO1jsbg"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> What is the period of a 60 Hz sine wave, in seconds and in milliseconds?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: T = 1 ÷ f. Step 2: T = 1 ÷ 60 ≈ 0.0167 seconds. Step 3: That is about 16.7 milliseconds.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A sine wave has a frequency of 120 Hz. What is its period?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: T = 1 ÷ f. Step 2: T = 1 ÷ 120 ≈ 0.00833 seconds. Step 3: About 8.33 milliseconds.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A wall outlet reads 120 V RMS. What is the peak voltage?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: V_pk = V_RMS × 1.414. Step 2: V_pk = 120 × 1.414 ≈ 170 volts. Step 3: The peak is about 170 volts.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A sine wave has a peak voltage of 340 V. What is its RMS voltage?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: V_RMS = V_pk × 0.707. Step 2: V_RMS = 340 × 0.707 ≈ 240 volts. Step 3: The RMS voltage is about 240 volts.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> What is the peak-to-peak voltage of a 120 V RMS sine wave?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Peak = 120 × 1.414 ≈ 170 volts. Step 2: Peak-to-peak is twice the peak: 2 × 170 = 340 volts. Step 3: The peak-to-peak voltage is about 340 volts.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Why can AC be transmitted over long distances more efficiently than low-voltage DC?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A transformer steps AC voltage up for transmission. Step 2: Higher voltage means lower current for the same power. Step 3: Lower current means less I²R loss in the wires — less heat and less wasted energy.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Alternating current is current that:",
      "choices": [
        "Flows in one direction only",
        "Changes direction periodically",
        "Never changes",
        "Flows only in batteries"
      ],
      "answer": 1,
      "explanation": "Correct: (b). AC changes direction periodically. (a) One direction only is DC. (c) AC changes constantly. (d) Batteries supply DC."
    },
    {
      "q": "The frequency of the power grid in North America is:",
      "choices": [
        "50 Hz",
        "60 Hz",
        "120 Hz",
        "240 Hz"
      ],
      "answer": 1,
      "explanation": "Correct: (b). North America uses 60 Hz. (a) 50 Hz is used in much of the rest of the world. (c) 120 Hz is a harmonic, not the grid frequency. (d) 240 is a voltage, not a frequency."
    },
    {
      "q": "The period of a 60 Hz sine wave is about:",
      "choices": [
        "60 seconds",
        "1 second",
        "16.7 milliseconds",
        "120 milliseconds"
      ],
      "answer": 2,
      "explanation": "Correct: (c). T = 1 ÷ 60 ≈ 0.0167 s = 16.7 ms. (a) 60 seconds is far too long. (b) 1 second would be 1 Hz. (d) 120 ms would be about 8.3 Hz."
    },
    {
      "q": "A 120 V RMS sine wave has a peak voltage of about:",
      "choices": [
        "85 V",
        "120 V",
        "170 V",
        "240 V"
      ],
      "answer": 2,
      "explanation": "Correct: (c). V_pk = 120 × 1.414 ≈ 170 V. (a) 85 V is 120 × 0.707, the wrong direction. (b) 120 V is the RMS value. (d) 240 V is twice the RMS value."
    },
    {
      "q": "V_RMS for a sine wave equals:",
      "choices": [
        "V_pk × 1.414",
        "V_pk × 0.707",
        "V_pk × 2",
        "V_pk ÷ 2"
      ],
      "answer": 1,
      "explanation": "Correct: (b). V_RMS = V_pk × 0.707. (a) V_pk × 1.414 gives the peak from the RMS. (c) V_pk × 2 is the peak-to-peak. (d) V_pk ÷ 2 is not a standard conversion."
    },
    {
      "q": "Two waves that reach their peaks at the same time are:",
      "choices": [
        "Out of phase",
        "In phase",
        "Shorted",
        "Grounded"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Same peak time means in phase. (a) Out of phase means the peaks occur at different times. (c) Shorted is a fault condition. (d) Grounded is a wiring condition."
    },
    {
      "q": "Phase is measured in:",
      "choices": [
        "Hertz",
        "Volts",
        "Degrees",
        "Amps"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Phase is measured in degrees; a cycle is 360 degrees. (a) Hertz measures frequency. (b) Volts measure voltage. (d) Amps measure current."
    },
    {
      "q": "AC won power distribution mainly because:",
      "choices": [
        "It is cheaper to make",
        "Transformers can step its voltage up for efficient transmission and down for use",
        "It has no frequency",
        "It needs no wires"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Transformers make high-voltage, low-current transmission possible. (a) Cost is not the main reason. (c) AC has a frequency — 60 Hz. (d) AC needs wires like any power system."
    }
  ],
  "studyGuide": "\n<h3>Module 1 — Sine Waves & AC Fundamentals: Quick Reference</h3>\n<p><strong>Core idea:</strong> AC changes direction; DC does not. The sine wave is the shape of AC, and 60 hertz is its rhythm in North America.</p>\n<p><strong>Sine wave:</strong> Amplitude (peak) · Frequency (Hz) · Period T = 1 ÷ f · Phase (degrees, 360° per cycle).</p>\n<p><strong>Conversions:</strong> V_RMS = V_pk × 0.707 · V_pk = V_RMS × 1.414 · V_pp = 2 × V_pk.</p>\n<p><strong>Numbers:</strong> 60 Hz → T ≈ 16.7 ms · 120 V RMS → peak ≈ 170 V, peak-to-peak ≈ 340 V.</p>\n<p><strong>Why AC:</strong> Transformers step voltage up for efficient transmission and down for use.</p>\n<p><strong>Self-check:</strong> Find the period of 60 Hz, the peak of 120 V RMS, and the RMS of a 340 V peak wave, without looking.</p>\n"
};
