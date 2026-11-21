// egr110 - Module 6: Op-Amp Applications
module.exports = {
  "number": 6,
  "slug": "op-amp-applications",
  "title": "Op-Amp Applications",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain how an op-amp comparator works and set its switching point.",
    "Work out the output of a summing amplifier.",
    "Explain the voltage follower and why buffering matters.",
    "Describe a simple RC low-pass filter and its cutoff idea.",
    "Choose the right op-amp circuit for a sensor or signal job."
  ],
  "sections": [
    {
      "heading": "The Comparator: A Yes-or-No Machine",
      "html": "<p>Remove the feedback from an op-amp and it becomes a comparator: its enormous open-loop gain drives the output to one rail or the other depending on which input is higher. If V+ is above V−, the output slams to the positive rail; if V+ is below V−, it slams to the negative rail. The switching point is the reference voltage on the other input, often set with a voltage divider.</p>\n<p>Example: a 5 V supply and a divider with 1 kΩ and 3 kΩ, with the reference taken across the 1 kΩ resistor to ground. Vref = 5 V × 1 ÷ (1 + 3) = 1.25 V. Feed a sensor signal into the other input: below 1.25 V the output is low, above 1.25 V it is high. That is how thermostats, light-activated switches, and battery-low alarms are built. A little positive feedback, called hysteresis, is often added so the output does not chatter when the signal sits right at the switching point.</p>\n"
    },
    {
      "heading": "The Summing Amplifier: Adding Voltages",
      "html": "<p>A summing amplifier is an inverting amplifier with more than one input resistor, all meeting at the virtual earth. Each input contributes its own current, and the output is the (inverted) sum of the inputs, each weighted by Rf ÷ Rin. If all the input resistors are equal to Rf, the output is simply minus the sum of the inputs: Vout = −(V1 + V2).</p>\n<p>Example: Rf = 10 kΩ, both input resistors 10 kΩ, V1 = 1 V, V2 = 2 V. Vout = −(1 + 2) = −3 V. Change one input resistor and you change that input's weight — with Rf = 20 kΩ and R = 10 kΩ, two inputs of 0.5 V and 1.5 V give Vout = −(20 ÷ 10) × (0.5 + 1.5) = −4.0 V. Summing amplifiers mix audio signals, combine sensor readings, and build digital-to-analogue converters.</p>\n"
    },
    {
      "heading": "The Voltage Follower: A Buffer",
      "html": "<p>Connect the output straight back to the − input and put the signal on the + input, and you have a voltage follower: gain 1, output exactly equal to input. It seems pointless — why build an amplifier with gain 1? Because its input impedance is enormous and its output impedance is tiny, so it can take a weak signal from a sensor that cannot supply any current and deliver the same voltage to a load that needs current.</p>\n<p>Without a buffer, a sensor with a high output resistance connected to a low-resistance load would collapse: the load would drag the voltage down. With a follower in between, the sensor sees almost no load and the load gets the full voltage. Whenever a signal needs to be passed along without being loaded down, a follower is the answer — and it is the first op-amp circuit to reach for.</p>\n"
    },
    {
      "heading": "A First Look at Filters",
      "html": "<p>A filter lets some frequencies through and blocks others. The simplest op-amp filter adds a capacitor to the feedback path: at low frequencies the capacitor blocks current and the circuit behaves like a normal amplifier, but at high frequencies the capacitor passes current easily, shunting the feedback and reducing the gain. That is a low-pass filter — it passes slow signals and attenuates fast noise.</p>\n<p>The turning point is set by the resistor and capacitor values: a bigger R or C moves the cutoff to a lower frequency. The exact cutoff formula (f = 1 ÷ (2πRC)) is covered in detail in later work, but the intuition is enough here: if your sensor signal changes slowly and the noise is fast, a low-pass filter keeps the signal and kills the noise. Filters are how real instruments get clean readings out of a noisy world.</p>\n"
    },
    {
      "heading": "Choosing the Right Circuit and Common Mistakes",
      "html": "<p>Match the circuit to the job. Need to compare a signal to a level? Use a comparator. Need to add two signals? Use a summing amplifier. Need to pass a weak signal to a hungry load? Use a follower. Need to amplify a small sensor voltage? Use a non-inverting amplifier. Need to clean up noise? Add a filter. Most real instruments chain two or three of these together: a sensor, a filter, an amplifier, and a comparator that triggers an alarm.</p>\n<p><p><strong>Takeaways:</strong><ul><li>A comparator has no feedback: output goes to a rail depending on which input is higher.</li><li>A summing amplifier's output is minus the weighted sum of its inputs.</li><li>A voltage follower has gain 1 and buffers a weak signal from a heavy load.</li><li>A low-pass filter passes slow signals and attenuates fast noise.</li><li>Chain simple circuits together to build real instruments.</li></ul></p>\n<p><strong>Common mistake:</strong> Using a comparator where an amplifier is needed. A comparator has no linear region — its output is only ever high or low, so it cannot amplify a signal smoothly.</p>\n<p><strong>Common mistake:</strong> Forgetting that a summing amplifier inverts. The output is minus the sum, and that minus sign matters when the result feeds another stage.</p>\n<p><strong>Ready check:</strong> If you can set a comparator threshold, work out a summing output, and explain why a follower is useful, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Comparator",
      "def": "An op-amp with no feedback whose output goes to one rail or the other depending on which input is higher."
    },
    {
      "term": "Reference voltage",
      "def": "The fixed voltage a comparator compares its input against, often set with a voltage divider."
    },
    {
      "term": "Hysteresis",
      "def": "A small amount of positive feedback on a comparator that separates its switch-on and switch-off points, stopping chatter."
    },
    {
      "term": "Summing amplifier",
      "def": "An inverting amplifier with several input resistors, whose output is minus the weighted sum of its inputs."
    },
    {
      "term": "Voltage follower",
      "def": "An op-amp with its output connected straight back to its − input; gain 1, used to buffer a signal."
    },
    {
      "term": "Buffer",
      "def": "A circuit that passes a voltage along while isolating the source from the load, so the source is not loaded down."
    },
    {
      "term": "Input impedance",
      "def": "How much a circuit loads the source driving it; high input impedance means almost no loading."
    },
    {
      "term": "Output impedance",
      "def": "How well a circuit can drive a load; low output impedance means it can supply current without its voltage dropping."
    },
    {
      "term": "Low-pass filter",
      "def": "A filter that passes low frequencies and attenuates high frequencies, used to remove fast noise from slow signals."
    },
    {
      "term": "Cutoff frequency",
      "def": "The frequency where a filter starts to attenuate the signal; set by the resistor and capacitor values."
    },
    {
      "term": "RC circuit",
      "def": "A circuit built from a resistor and a capacitor, used in filters and timing circuits."
    },
    {
      "term": "Virtual earth",
      "def": "A point held at 0 V by op-amp feedback, where several input currents meet in a summing amplifier."
    },
    {
      "term": "Chatter",
      "def": "Rapid on-off switching of a comparator when its input sits right at the switching point; fixed with hysteresis."
    },
    {
      "term": "Signal chain",
      "def": "A series of circuits — sensor, filter, amplifier, comparator — that process a signal step by step."
    }
  ],
  "video": {
    "title": "Op-Amp Comparator Explained — Simple Circuit, Powerful Applications",
    "embedUrl": "https://www.youtube.com/embed/d6670gSIbiM",
    "note": "A clear comparator build: reference voltage, switching point, and real applications like light sensors and alarms. Follow the reference-voltage calculation, then work out this module's 1.25 V example yourself.",
    "more": [
      {
        "title": "Operational Amplifiers - Inverting & Non Inverting Op-Amps",
        "url": "https://www.youtube.com/watch?v=idJEMYhrIfs"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A comparator's reference voltage is set by a divider: 5 V supply, 1 kΩ to ground, 3 kΩ to the supply. Work out Vref and say when the output goes high.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Vref = 5 V × 1 ÷ (1 + 3) = 5 ÷ 4 = 1.25 V. Step 2: The reference is on the − input and the signal on the + input, so the output goes high (to the positive rail) when the signal rises above 1.25 V, and low when it falls below. A good answer gives 1.25 V and the switching rule.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A 12 V supply feeds a divider with 2 kΩ to ground and 8 kΩ to the supply. What is the reference voltage at the divider midpoint?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Vref = 12 V × 2 ÷ (2 + 8) = 12 × 0.2 = 2.4 V. Step 2: A comparator using this reference switches when its input crosses 2.4 V. A good answer shows the divider ratio and the 2.4 V result.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A summing amplifier has Rf = 10 kΩ and two 10 kΩ input resistors. V1 = 1 V and V2 = 2 V. Work out the output voltage.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Each input is weighted by Rf ÷ R = 10 ÷ 10 = 1. Step 2: Vout = −(V1 + V2) = −(1 + 2) = −3 V. A good answer shows the weights and keeps the minus sign.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A summing amplifier has Rf = 20 kΩ and two 10 kΩ input resistors, with inputs of 0.5 V and 1.5 V. Work out the output voltage.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Each input weight is Rf ÷ R = 20 ÷ 10 = 2. Step 2: Vout = −2 × (0.5 + 1.5) = −2 × 2.0 = −4.0 V. A good answer shows the weight of 2 and the −4.0 V result.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A temperature sensor outputs 0.8 V but its output resistance is 100 kΩ, and it must drive a load of 1 kΩ. Explain why a voltage follower fixes the problem, and what would happen without it.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Without a buffer, the 1 kΩ load across the sensor forms a divider with the 100 kΩ output resistance, so the load would see only about 0.8 × 1 ÷ 101 ≈ 0.008 V — the signal collapses. Step 2: A voltage follower's input draws almost no current, so the sensor keeps its full 0.8 V. Step 3: The follower's low output impedance delivers the full 0.8 V to the 1 kΩ load. A good answer does the divider maths and explains the buffer's role.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A student builds a comparator but the output chatters rapidly when the input is near the switching point. Explain what is happening and name the fix.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Near the threshold, tiny noise on the input flips the comparator back and forth between rails many times a second — that is chatter. Step 2: The fix is hysteresis: a little positive feedback through a resistor that separates the switch-on point from the switch-off point. Step 3: Once the output flips, the threshold moves, so the noise can no longer flip it back until the input moves well past the other threshold. A good answer names chatter and hysteresis.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A comparator with no feedback has V+ above V−. What does its output do?",
      "choices": [
        "It sits at 0 V",
        "It goes to the positive rail",
        "It goes to the negative rail",
        "It amplifies the difference by exactly 10"
      ],
      "answer": 1,
      "explanation": "Correct: (b). With V+ above V− the huge open-loop gain drives the output to the positive rail. (a) is wrong: a comparator output is high or low, not zero. (c) is what happens when V− is above V+. (d) is wrong: a comparator has no fixed gain of 10 — it saturates."
    },
    {
      "q": "A comparator reference is set by a divider: 5 V supply, 1 kΩ to ground, 3 kΩ to the supply. What is Vref?",
      "choices": [
        "1.25 V",
        "3.75 V",
        "5 V",
        "0.5 V"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Vref = 5 × 1 ÷ 4 = 1.25 V. (b) 3.75 V is the voltage across the 3 kΩ resistor, not the reference. (c) is the full supply. (d) is wrong: 5 ÷ 10 would need a different ratio."
    },
    {
      "q": "A 12 V supply feeds a divider with 2 kΩ to ground and 8 kΩ to the supply. What is the reference voltage?",
      "choices": [
        "2.4 V",
        "9.6 V",
        "12 V",
        "0.24 V"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Vref = 12 × 2 ÷ 10 = 2.4 V. (b) 9.6 V is the voltage across the 8 kΩ resistor. (c) is the full supply. (d) is a factor of 10 too small."
    },
    {
      "q": "A summing amplifier has Rf = 10 kΩ, two 10 kΩ input resistors, V1 = 1 V, V2 = 2 V. What is Vout?",
      "choices": [
        "3 V",
        "−3 V",
        "1.5 V",
        "−1.5 V"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Each weight is 1, so Vout = −(1 + 2) = −3 V. (a) forgets the inversion. (c) and (d) average the inputs instead of summing them."
    },
    {
      "q": "A summing amplifier has Rf = 20 kΩ, two 10 kΩ input resistors, inputs 0.5 V and 1.5 V. What is Vout?",
      "choices": [
        "−4.0 V",
        "4.0 V",
        "−2.0 V",
        "−1.0 V"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Each weight is 20 ÷ 10 = 2, so Vout = −2 × (0.5 + 1.5) = −4.0 V. (b) forgets the inversion. (c) uses a weight of 1. (d) uses a weight of 0.5."
    },
    {
      "q": "What is the main job of a voltage follower?",
      "choices": [
        "To amplify a signal by 100",
        "To buffer a weak signal so it can drive a load without being loaded down",
        "To convert AC to DC",
        "To compare two voltages"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A follower has gain 1 but very high input impedance and very low output impedance, so it isolates the source from the load. (a) is wrong: a follower's gain is 1. (c) is a rectifier's job. (d) is a comparator's job."
    },
    {
      "q": "A low-pass filter is used to…",
      "choices": [
        "Pass fast noise and block slow signals",
        "Pass slow signals and attenuate fast noise",
        "Amplify all frequencies equally",
        "Convert DC to AC"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A low-pass filter passes low frequencies and attenuates high frequencies. (a) describes a high-pass filter. (c) describes a flat amplifier, not a filter. (d) is an inverter's job."
    },
    {
      "q": "Why does a comparator output chatter when its input sits near the switching point?",
      "choices": [
        "Because the supply voltage is too high",
        "Because tiny noise on the input flips the output back and forth between rails",
        "Because the reference voltage is exactly 0 V",
        "Because the op-amp is in saturation"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Near the threshold, small noise crossings flip the output repeatedly. (a) is wrong: supply voltage does not cause chatter. (c) is wrong: chatter happens at any threshold. (d) is wrong: saturation is the comparator's normal output state, not the cause of chatter."
    }
  ],
  "studyGuide": "\n<h3>Module 6 — Op-Amp Applications: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain how an op-amp comparator works and set its switching point.</p>\n<p><strong>Key terms:</strong> Comparator · Reference voltage · Hysteresis · Summing amplifier · Voltage follower · Buffer · Input impedance · Output impedance.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain how an op-amp comparator works and set its switching point.</li>\n<li>Work out the output of a summing amplifier.</li>\n<li>Explain the voltage follower and why buffering matters.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
