// ele103 - Module 10: AC Measurements: Oscilloscopes & Meters
module.exports = {
  "number": 10,
  "slug": "ac-measurements-oscilloscopes-and-meters",
  "title": "AC Measurements: Oscilloscopes & Meters",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what an oscilloscope shows and how to read voltage and time from its display.",
    "Describe the controls of an oscilloscope: volts per division, time per division, and triggering.",
    "Explain the difference between a true-RMS meter and an average-responding meter.",
    "Describe how to measure frequency and phase with an oscilloscope.",
    "Explain the safety rules for oscilloscope use on mains circuits."
  ],
  "sections": [
    {
      "heading": "What an Oscilloscope Shows",
      "html": "<p>An <strong>oscilloscope</strong> is a meter that draws the waveform: voltage on the vertical axis, time on the horizontal axis. Where a multimeter gives one number — the RMS voltage — the oscilloscope shows the whole shape: the sine wave's height, its period, its distortion, and its relationship to another waveform. It is the instrument that answers \"what does this signal actually look like?\" — and in AC work, the shape is often the answer.</p>\n<p>The display is a grid of divisions. The vertical scale is <strong>volts per division</strong>: if the scale is 50 volts per division and the wave is 3.4 divisions tall (peak), the peak voltage is 170 volts. The horizontal scale is <strong>time per division</strong>: if the scale is 5 milliseconds per division and one cycle spans 3.3 divisions, the period is 16.7 milliseconds and the frequency is 60 Hz. Reading an oscilloscope is counting divisions and multiplying by the scale.</p>\n<div class=\"callout\"><strong>Key idea:</strong> A multimeter gives you a number; an oscilloscope gives you the picture. The picture shows distortion, noise, and phase that a number hides.</div>"
    },
    {
      "heading": "Controls: Volts, Time & Triggering",
      "html": "<p>The three controls that matter most are volts per division, time per division, and triggering. <strong>Volts per division</strong> sets the vertical scale: turn it up to fit a tall wave on the screen, turn it down to see a small wave's detail. <strong>Time per division</strong> sets the horizontal scale: turn it up to see many cycles, turn it down to see one cycle in detail. <strong>Triggering</strong> holds the waveform steady on the screen: the scope waits for the signal to cross a set voltage level, then starts drawing, so each sweep starts at the same point in the wave and the picture stops moving.</p>\n<p>A second channel lets the scope show two waveforms at once, which is how phase is measured: put the voltage on channel 1 and the current (through a current probe) on channel 2, and the horizontal distance between their peaks, measured in divisions and converted to degrees, is the phase angle. The same two-channel view shows whether a signal is clean or distorted, and whether two signals are in step or out of step.</p>"
    },
    {
      "heading": "True-RMS vs. Average-Responding Meters",
      "html": "<p>Not all meters read AC the same way. An <strong>average-responding meter</strong> measures the average of the rectified waveform and multiplies by 1.11 to display RMS — a shortcut that is accurate only for a pure sine wave. A <strong>true-RMS meter</strong> measures the actual RMS value, by calculation, and is accurate for any waveform, including the distorted waveforms made by variable-frequency drives, LED drivers, and other electronic loads.</p>\n<p>The difference matters in the field. A variable-frequency drive's output is a chopped waveform, not a sine wave, and an average-responding meter can read 20% to 40% low on it — which makes a motor look under-voltaged when it is not, or a current look safe when it is not. The rule is simple: for anything that is not a clean sine wave, use a true-RMS meter. For a clean sine wave from the grid, either meter reads correctly.</p>"
    },
    {
      "heading": "Measuring Frequency, Phase & Safety",
      "html": "<p>Frequency is measured from the period: count the divisions in one cycle, multiply by the time per division, and take the reciprocal. Phase is measured from the horizontal distance between two waves' peaks: the distance in divisions, divided by the divisions in one cycle, times 360 degrees, is the phase shift. Both measurements are division-counting, and both are more accurate on the scope than on any other instrument.</p>\n<p>Oscilloscope safety is critical on mains circuits. Most oscilloscopes have their probe ground connected to earth ground through the power cord — which means connecting the probe ground to a live conductor shorts it to earth, with a flash and a blown fuse, or worse. The rule is to use a differential probe or an isolated scope for mains measurements, to never connect the probe ground to anything but earth ground, and to treat every measurement on a mains circuit as a live measurement, with the PPE and the meter rating the hazard requires. When in doubt, measure with a handheld meter and leave the scope for low-voltage work.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>An oscilloscope draws voltage vs. time; a multimeter gives one number.</li>\n<li>Volts per division × divisions = peak voltage; time per division × divisions per cycle = period; frequency = 1 ÷ period.</li>\n<li>Triggering holds the waveform steady; two channels measure phase.</li>\n<li>True-RMS meters read any waveform correctly; average-responding meters are accurate only for pure sine waves.</li>\n<li>Oscilloscope probe ground is earth ground — never connect it to a live conductor; use a differential probe for mains work.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Using an average-responding meter on a distorted waveform. A variable-frequency drive's output can read 20–40% low — use a true-RMS meter.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Connecting an oscilloscope's probe ground to a live conductor. The probe ground is earth ground, and the connection shorts the conductor to earth.</div>\n<p><strong>Ready-to-Work link:</strong> If you can read voltage and frequency from a scope display, explain true-RMS vs. average-responding, and state the probe-ground rule, you have this module. Module 11 covers harmonics and power quality.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Oscilloscope",
      "def": "An instrument that draws voltage vs. time, showing the waveform's shape."
    },
    {
      "term": "Volts per division",
      "def": "The vertical scale of an oscilloscope; volts per grid division."
    },
    {
      "term": "Time per division",
      "def": "The horizontal scale of an oscilloscope; time per grid division."
    },
    {
      "term": "Triggering",
      "def": "The control that holds a waveform steady by starting each sweep at the same point."
    },
    {
      "term": "Channel",
      "def": "One input of an oscilloscope; two channels show two waveforms at once."
    },
    {
      "term": "True-RMS meter",
      "def": "A meter that measures the actual RMS value of any waveform."
    },
    {
      "term": "Average-responding meter",
      "def": "A meter that assumes a sine wave and multiplies the average by 1.11; inaccurate on distorted waveforms."
    },
    {
      "term": "Distortion",
      "def": "A waveform that is not a pure sine wave, often caused by electronic loads."
    },
    {
      "term": "Current probe",
      "def": "A clamp that lets an oscilloscope display current as a waveform."
    },
    {
      "term": "Differential probe",
      "def": "A probe that measures the difference between two points without an earth-ground reference."
    },
    {
      "term": "Probe ground",
      "def": "The oscilloscope probe's ground lead, connected to earth ground through the scope's power cord."
    },
    {
      "term": "Phase measurement",
      "def": "Measuring the angle between two waveforms from their horizontal separation on the scope."
    },
    {
      "term": "Division",
      "def": "One grid square on an oscilloscope display."
    },
    {
      "term": "Waveform",
      "def": "The shape of a voltage or current over time."
    },
    {
      "term": "Variable-frequency drive (VFD)",
      "def": "An electronic device that controls a motor's speed; its output is a chopped, non-sine waveform."
    }
  ],
  "video": {
    "title": "Oscilloscope Tutorial (Basics 101)",
    "embedUrl": "https://www.youtube.com/embed/lSHAE_Y6snc",
    "note": "An oscilloscope basics tutorial. As you watch, note the three main controls and how voltage and time are read from the grid.",
    "more": [
      {
        "title": "Oscilloscope Basics for Beginners",
        "url": "https://www.youtube.com/watch?v=6lrKFFEPJqI"
      },
      {
        "title": "Precision in under 10 minutes – How to use an oscilloscope",
        "url": "https://www.youtube.com/watch?v=XOv1howMYs8"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> An oscilloscope is set to 50 volts per division, and a sine wave is 3.4 divisions tall (peak). What is the peak voltage?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Peak = divisions × volts per division. Step 2: 3.4 × 50 = 170 volts. Step 3: The peak voltage is 170 V, which matches a 120 V RMS sine wave.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> The same scope is set to 5 ms per division, and one cycle spans 3.3 divisions. What are the period and the frequency?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Period = 3.3 × 5 ms = 16.5 ms. Step 2: Frequency = 1 ÷ 0.0165 ≈ 60.6 Hz. Step 3: The period is about 16.5 ms and the frequency is about 60 Hz.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Two waves are shown on two channels. One cycle spans 10 divisions, and the peaks are 2.5 divisions apart. What is the phase shift?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Phase = (2.5 ÷ 10) × 360°. Step 2: 0.25 × 360 = 90°. Step 3: The phase shift is 90 degrees.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> What is the difference between a true-RMS meter and an average-responding meter?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A true-RMS meter measures the actual RMS value of any waveform. Step 2: An average-responding meter assumes a sine wave and multiplies the average by 1.11. Step 3: The average-responding meter is inaccurate on distorted waveforms, such as a VFD output.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A VFD output reads 180 V on an average-responding meter. Why might that reading be wrong?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A VFD output is a chopped waveform, not a pure sine wave. Step 2: An average-responding meter assumes a sine wave, so it can read 20–40% low. Step 3: The true voltage is higher than 180 V — measure it with a true-RMS meter.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Why must you never connect an oscilloscope's probe ground to a live conductor?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The probe ground is connected to earth ground through the scope's power cord. Step 2: Connecting it to a live conductor shorts that conductor to earth. Step 3: The result is a flash, a blown fuse, or worse — use a differential probe for mains measurements.</p>"
    }
  ],
  "quiz": [
    {
      "q": "An oscilloscope shows:",
      "choices": [
        "A single number",
        "Voltage vs. time — the waveform's shape",
        "Only resistance",
        "Only current"
      ],
      "answer": 1,
      "explanation": "Correct: (b). An oscilloscope draws the waveform. (a) A single number is a multimeter's job. (c) Resistance is measured on a dead circuit. (d) Current is shown only through a current probe."
    },
    {
      "q": "Volts per division is the oscilloscope's:",
      "choices": [
        "Horizontal scale",
        "Vertical scale",
        "Trigger level",
        "Power switch"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Volts per division is the vertical (voltage) scale. (a) The horizontal scale is time per division. (c) Trigger level is a separate control. (d) The power switch turns the scope on."
    },
    {
      "q": "A wave 3.4 divisions tall at 50 V per division has a peak voltage of:",
      "choices": [
        "85 V",
        "120 V",
        "170 V",
        "340 V"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 3.4 × 50 = 170 volts. (a) 85 V is half the answer. (b) 120 V is the RMS value. (d) 340 V is the peak-to-peak value."
    },
    {
      "q": "One cycle spans 3.3 divisions at 5 ms per division. The frequency is about:",
      "choices": [
        "16.5 Hz",
        "33 Hz",
        "60 Hz",
        "120 Hz"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Period = 3.3 × 5 = 16.5 ms, so f = 1 ÷ 0.0165 ≈ 60 Hz. (a) 16.5 is the period in ms, not the frequency. (b) 33 Hz is half the answer. (d) 120 Hz would need an 8.3 ms period."
    },
    {
      "q": "Triggering on an oscilloscope:",
      "choices": [
        "Sets the voltage scale",
        "Holds the waveform steady by starting each sweep at the same point",
        "Measures current",
        "Turns the scope off"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Triggering stabilizes the display. (a) The voltage scale is volts per division. (c) Current needs a current probe. (d) Triggering does not turn the scope off."
    },
    {
      "q": "A true-RMS meter differs from an average-responding meter because it:",
      "choices": [
        "Is cheaper",
        "Measures the actual RMS value of any waveform",
        "Only works on DC",
        "Has no display"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A true-RMS meter calculates the real RMS value. (a) True-RMS meters cost more, not less. (c) True-RMS meters work on AC. (d) True-RMS meters have displays."
    },
    {
      "q": "An average-responding meter is inaccurate on:",
      "choices": [
        "A pure sine wave",
        "A distorted waveform, such as a VFD output",
        "A DC voltage",
        "A 120 V outlet"
      ],
      "answer": 1,
      "explanation": "Correct: (b). It assumes a sine wave, so distorted waveforms read wrong. (a) It is accurate on a pure sine wave. (c) DC is not an AC measurement. (d) A 120 V outlet is a clean sine wave."
    },
    {
      "q": "An oscilloscope's probe ground is:",
      "choices": [
        "Floating",
        "Connected to earth ground through the scope's power cord",
        "Connected to the live conductor",
        "Not connected to anything"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The probe ground is earth ground. (a) It is not floating. (c) Connecting it to a live conductor shorts it to earth. (d) It is connected to earth ground."
    }
  ],
  "studyGuide": "\n<h3>Module 10 — AC Measurements: Quick Reference</h3>\n<p><strong>Core idea:</strong> A multimeter gives you a number; an oscilloscope gives you the picture.</p>\n<p><strong>Reading the scope:</strong> Peak voltage = divisions × volts per division · Period = divisions per cycle × time per division · Frequency = 1 ÷ period · Phase = (peak separation ÷ divisions per cycle) × 360°.</p>\n<p><strong>Controls:</strong> Volts per division (vertical) · Time per division (horizontal) · Triggering (holds the wave steady) · Two channels measure phase.</p>\n<p><strong>Meters:</strong> True-RMS reads any waveform correctly · Average-responding is accurate only for pure sine waves.</p>\n<p><strong>Safety:</strong> Probe ground is earth ground — never connect it to a live conductor; use a differential probe for mains work.</p>\n<p><strong>Self-check:</strong> Read a 3.4-division wave at 50 V/div and a 3.3-division cycle at 5 ms/div, without looking.</p>\n"
};
