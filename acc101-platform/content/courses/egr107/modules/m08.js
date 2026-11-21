// egr107 - Module 8: Gears: Ratios, Torque, and Gear Trains
module.exports = {
  "number": 8,
  "slug": "gears-gear-trains",
  "title": "Gears: Ratios, Torque, and Gear Trains",
  "estTime": "3–4 hours",
  "objectives": [
    "Calculate gear ratio from tooth counts and find output speed and torque.",
    "Explain why meshing gears turn in opposite directions.",
    "Compare spur, helical, bevel, and worm gears and say where each is used.",
    "Calculate the overall ratio of a compound gear train.",
    "Choose a gear pair for a required speed reduction and check the torque."
  ],
  "sections": [
    {
      "heading": "How Gears Work",
      "html": "<p><p>Gears are toothed wheels that mesh together to pass motion and power from one shaft to another. The teeth stop the wheels slipping, so the ratio is exact — unlike a belt, which can slip. When two gears mesh, the teeth that pass the contact point must be equal in number, so the speeds are in inverse proportion to the tooth counts.</p></p>\n<p><p>Gear ratio is defined as teeth on the driven gear divided by teeth on the driver: ratio = N_driven ÷ N_driver. Output speed is input speed divided by the ratio, and (ignoring losses) output torque is input torque times the ratio. A big driven gear turns slowly but with more torque — the fundamental trade-off of gearing.</p></p>\n"
    },
    {
      "heading": "Worked Example: A Simple Gear Pair",
      "html": "<p><p>A driver gear with 20 teeth spins at 1,200 rpm and drives a 60-tooth gear. The ratio is 60 ÷ 20 = 3. Output speed is 1,200 ÷ 3 = 400 rpm. If the driver torque is 30 N·m, the output torque is 30 × 3 = 90 N·m (ideal, before losses). Check with power: input power is Tω = 30 × (2π × 1,200 ÷ 60) = 30 × 125.7 = 3,770 W; output power is 90 × (2π × 400 ÷ 60) = 90 × 41.9 = 3,770 W. Power is conserved, so the numbers check out.</p></p>\n<p><p>Meshing gears turn in opposite directions. If you need the output to turn the same way as the input, add an idler gear between them — the idler reverses direction twice, so input and output agree. The idler does not change the ratio (its teeth cancel out), it only changes direction and bridges a gap between shafts.</p></p>\n"
    },
    {
      "heading": "Types of Gear",
      "html": "<p><p>Spur gears have straight teeth, are cheap and efficient, but noisy at high speed. Helical gears have angled teeth that engage gradually, so they run quieter and smoother and carry more load, but they push sideways (axial thrust) and need stronger bearings. Bevel gears have teeth cut on a cone and turn the drive through 90°, as in a hand drill. Worm gears use a screw-like worm driving a wheel, giving a very large reduction in one step — and they usually cannot be back-driven, which is handy for a hoist that must not unwind.</p></p>\n<p><p>Choose by the job: spur for a simple cheap reduction, helical for a quiet high-load drive, bevel to change shaft direction, worm for a big reduction in a small space. Also check the module (tooth size), the centre distance, and lubrication — gears that run dry wear out fast and noisily.</p></p>\n"
    },
    {
      "heading": "Compound Gear Trains",
      "html": "<p><p>One pair of gears can only give a limited reduction before the driven gear becomes enormous. A compound train chains two or more pairs together: the overall ratio is the product of the individual ratios. Two stages of 3:1 give 9:1 overall; three stages of 4:1 give 64:1. That is how a small motor can lift a heavy load through a compact gearbox.</p></p>\n<p><p>Example: stage 1 is 20 teeth driving 60 teeth (ratio 3), stage 2 is 18 teeth driving 54 teeth (ratio 3). Overall ratio is 3 × 3 = 9. An input of 1,800 rpm becomes 1,800 ÷ 9 = 200 rpm, and a 10 N·m input torque becomes 10 × 9 = 90 N·m (ideal). Real gearboxes lose a few percent per stage to friction, so allow about 95–98% efficiency per mesh when sizing the motor.</p></p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong><ul><li>Ratio = driven teeth ÷ driver teeth.</li><li>Output speed = input speed ÷ ratio; output torque = input torque × ratio.</li><li>Meshing gears reverse direction; an idler restores it.</li><li>Spur is cheap, helical is quiet, bevel turns 90°, worm gives a big reduction.</li><li>Compound ratio is the product of the stage ratios.</li></ul></p></p>\n<p><p><strong>Common mistake:</strong> Dividing by the ratio to get torque. Torque goes up when speed goes down — multiply by the ratio.</p><p><strong>Common mistake:</strong> Forgetting that power is conserved (minus losses): if your torque and speed give more power out than in, something is wrong.</p><p><strong>Ready check:</strong> If you can size a two-stage reduction from 1,800 rpm to 200 rpm, you have this module.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Gear ratio",
      "def": "Driven teeth divided by driver teeth; it sets the speed and torque change."
    },
    {
      "term": "Driver gear",
      "def": "The gear that supplies the power (the input)."
    },
    {
      "term": "Driven gear",
      "def": "The gear that receives the power (the output)."
    },
    {
      "term": "Idler gear",
      "def": "A gear between driver and driven that changes direction without changing the ratio."
    },
    {
      "term": "Spur gear",
      "def": "A gear with straight teeth, cheap and efficient but noisy at speed."
    },
    {
      "term": "Helical gear",
      "def": "A gear with angled teeth; quieter and stronger, but it creates axial thrust."
    },
    {
      "term": "Bevel gear",
      "def": "A gear with teeth on a cone, used to turn the drive through 90°."
    },
    {
      "term": "Worm gear",
      "def": "A screw-like worm driving a wheel, giving a very large reduction in one step."
    },
    {
      "term": "Compound gear train",
      "def": "Two or more gear pairs chained together; the overall ratio is the product of the stages."
    },
    {
      "term": "Module",
      "def": "A measure of gear tooth size; meshing gears must have the same module."
    },
    {
      "term": "Centre distance",
      "def": "The distance between the centres of two meshing gears."
    },
    {
      "term": "Back-driving",
      "def": "When the output gear drives the input backwards; worm gears usually prevent this."
    },
    {
      "term": "Torque",
      "def": "The twisting effort in N·m; gearing trades speed for torque."
    },
    {
      "term": "Pitch circle",
      "def": "The imaginary circle on a gear where meshing effectively happens."
    }
  ],
  "video": {
    "title": "Calculating compound gear ratios",
    "embedUrl": "https://www.youtube.com/embed/I-nWzMYohCY",
    "note": "Compound gear ratios worked out step by step — exactly the skill this module teaches.",
    "more": [
      {
        "title": "Simple Machines – Gears",
        "url": "https://www.youtube.com/watch?v=5hKTvVG6eqA"
      },
      {
        "title": "DON'T SUBSCRIBE | Manual Transmission, How it works?",
        "url": "https://www.youtube.com/watch?v=wCu9W9xNwtI"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A 24-tooth driver at 900 rpm drives a 72-tooth gear. Find the ratio and the output speed.</p>",
      "solution": "<p><strong>Answer:</strong> Ratio = 72 ÷ 24 = 3. Output speed = 900 ÷ 3 = 300 rpm.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> The driver torque in the last question is 12 N·m. What is the ideal output torque?</p>",
      "solution": "<p><strong>Answer:</strong> Output torque = 12 × 3 = 36 N·m.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A compound train has stage ratios 4 and 5. What is the overall ratio, and what is the output speed from 2,000 rpm input?</p>",
      "solution": "<p><strong>Answer:</strong> Overall = 4 × 5 = 20. Output = 2,000 ÷ 20 = 100 rpm.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A gearbox must reduce 1,440 rpm to 120 rpm. What overall ratio is needed?</p>",
      "solution": "<p><strong>Answer:</strong> Ratio = 1,440 ÷ 120 = 12.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A worm gear gives a 40:1 reduction. Input torque is 5 N·m. What is the ideal output torque?</p>",
      "solution": "<p><strong>Answer:</strong> Output = 5 × 40 = 200 N·m.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Explain why a helical gear needs stronger bearings than a spur gear of the same size.</p>",
      "solution": "<p><strong>Answer:</strong> The angled teeth create an axial (sideways) thrust force that spur gears do not produce, so the bearings must resist that sideways push.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A driver has 20 teeth, the driven gear has 80 teeth. The ratio is:",
      "choices": [
        "0.25",
        "4",
        "100",
        "60"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 80 ÷ 20 = 4. (a) divides the wrong way. (c) adds the teeth. (d) subtracts them."
    },
    {
      "q": "Input speed is 1,000 rpm and the ratio is 5. Output speed is:",
      "choices": [
        "5,000 rpm",
        "200 rpm",
        "1,005 rpm",
        "995 rpm"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 1,000 ÷ 5 = 200 rpm. (a) multiplies instead of dividing. (c) and (d) add or subtract the ratio."
    },
    {
      "q": "Input torque is 20 N·m and the ratio is 5. Ideal output torque is:",
      "choices": [
        "4 N·m",
        "20 N·m",
        "100 N·m",
        "25 N·m"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 20 × 5 = 100 N·m. (a) divides instead of multiplying. (b) is the input torque unchanged. (d) adds the numbers."
    },
    {
      "q": "Two meshing gears turn in:",
      "choices": [
        "The same direction",
        "Opposite directions",
        "Only one direction, the other is fixed",
        "Random directions"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Meshing teeth force opposite rotation. (a) needs an idler between them. (c) both turn. (d) direction is fixed by the mesh."
    },
    {
      "q": "What does an idler gear do?",
      "choices": [
        "Changes the ratio",
        "Changes the direction of rotation without changing the ratio",
        "Increases power",
        "Reduces friction"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Its teeth cancel in the ratio calculation. (a) is wrong — the ratio is unchanged. (c) power is conserved, not increased. (d) it adds a mesh, so it adds a little friction."
    },
    {
      "q": "Which gear type turns the drive through 90°?",
      "choices": [
        "Spur",
        "Helical",
        "Bevel",
        "Worm"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Bevel gears are cut on a cone for a right-angle drive. (a) and (b) work on parallel shafts. (d) usually drives at 90° too, but the classic right-angle gear is the bevel; worm is chosen for a big reduction."
    },
    {
      "q": "Two stages of 3:1 and 2:1 give an overall ratio of:",
      "choices": [
        "5:1",
        "6:1",
        "1.5:1",
        "9:1"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 3 × 2 = 6. (a) adds the ratios. (c) divides them. (d) squares the first stage."
    },
    {
      "q": "A worm gear is a good choice when you need:",
      "choices": [
        "A very large reduction in one step and no back-driving",
        "The cheapest possible gear",
        "The quietest gear at high speed",
        "Parallel shafts only"
      ],
      "answer": 0,
      "explanation": "Correct: (a). A worm can give 40:1 or more in one mesh and usually locks against back-driving. (b) spur gears are cheaper. (c) helical gears are quieter at speed. (d) worm drives are normally at 90°."
    }
  ],
  "studyGuide": "\n<h3>Module 8 — Gears: Ratios, Torque, and Gear Trains: Quick Reference</h3>\n<p><strong>Core idea:</strong> Calculate gear ratio from tooth counts and find output speed and torque.</p>\n<p><strong>Key terms:</strong> Gear ratio · Driver gear · Driven gear · Idler gear · Spur gear · Helical gear · Bevel gear · Worm gear.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Calculate gear ratio from tooth counts and find output speed and torque.</li>\n<li>Explain why meshing gears turn in opposite directions.</li>\n<li>Compare spur, helical, bevel, and worm gears and say where each is used.</li>\n</ul>\n<p><strong>Watch out:</strong> Work every example with the units written out, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
