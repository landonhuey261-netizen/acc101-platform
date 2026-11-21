// egr112 - Module 8: Gears & Power Transmission
module.exports = {
  "number": 8,
  "slug": "gears-power-transmission",
  "title": "Gears & Power Transmission",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what a gear ratio is and work it out from tooth counts.",
    "Work out output speed and output torque for a gear pair.",
    "Explain the trade-off between speed and torque in gearing.",
    "Name the main gear types and what each is used for.",
    "Explain gear efficiency and power loss."
  ],
  "sections": [
    {
      "heading": "Gear Ratio: Trading Speed for Torque",
      "html": "<p>A gear pair trades speed for torque. The gear ratio is the number of teeth on the output gear divided by the number on the input gear: ratio = Tout ÷ Tin. The output speed is the input speed divided by the ratio, and the output torque is the input torque times the ratio (minus a small loss to friction). Example: a 20-tooth pinion driving a 60-tooth gear has a ratio of 60 ÷ 20 = 3:1. With an input speed of 1750 rpm, the output speed is 1750 ÷ 3 = 583 rpm. With an input torque of 20 N·m and 95% efficiency, the output torque is 20 × 3 × 0.95 = 57 N·m.</p>\n<p>That trade is the whole point of gearing: a fast, low-torque motor becomes a slow, high-torque output that can drive a load. The power stays almost the same (minus the efficiency loss) — gears do not create power, they convert it between speed and torque. Another example: an 18-tooth pinion driving a 54-tooth gear at 1200 rpm gives an output speed of 1200 × 18 ÷ 54 = 400 rpm, a ratio of 3:1.</p>\n"
    },
    {
      "heading": "Gear Types and What They Do",
      "html": "<p>Spur gears have straight teeth and are the simplest and cheapest, used for parallel shafts at moderate speeds. Helical gears have angled teeth that engage gradually, so they run quieter and smoother and carry more load, but they push the shaft sideways (axial thrust) and need thrust bearings. Bevel gears have teeth cut on a cone and turn the drive through 90°, as in a car differential. Worm gears use a screw-like worm driving a wheel, giving a very large reduction in one stage (often 50:1 or more) and a self-locking property — the wheel cannot drive the worm backwards, which is useful for hoists.</p>\n<p>Planetary gears put several small planet gears around a central sun gear inside a ring gear: they are compact, share the load between planets, and give high ratios in a small space, which is why they are used in automatic gearboxes and robot joints. Chains and belts are the alternatives to gears: a chain drive is efficient and positive (no slip), while a belt drive is quiet and absorbs shock but can slip under overload.</p>\n"
    },
    {
      "heading": "Efficiency and Power Loss",
      "html": "<p>No gear pair is perfectly efficient: friction between the teeth turns some power into heat. A single spur or helical gear pair is typically 95–98% efficient, so a 3:1 pair with 20 N·m in gives 57 N·m out instead of the ideal 60 N·m. Each extra stage multiplies the loss: three 95% stages give 0.95³ = 0.857, or about 86% overall. That is why high-reduction gearboxes have several stages and still lose a noticeable share of the input power as heat — and why a gearbox that runs hot is often a gearbox with a problem.</p>\n<p>Power is conserved (minus losses): output power = input power × efficiency. Check the 20-tooth/60-tooth example: input power = torque × speed = 20 N·m × 1750 rpm, and output power = 57 N·m × 583 rpm. The ratio of the two is 0.95 — the efficiency. If the output power ever exceeds the input power on paper, the calculation is wrong.</p>\n"
    },
    {
      "heading": "Sizing a Gear Pair and Common Mistakes",
      "html": "<p>Sizing a gear pair means: 1) work out the ratio needed from the speeds, 2) pick tooth counts that give that ratio (keeping the pinion above the minimum teeth to avoid undercut — usually 17 or more for a 20° spur gear), 3) work out the output torque with efficiency, and 4) check the teeth are strong enough for the torque, using the manufacturer's ratings or a standard such as Lewis's formula for bending stress in gear teeth. Module and face width set the tooth size and strength: a bigger module means bigger, stronger teeth.</p>\n<p><p><strong>Takeaways:</strong><ul><li>Gear ratio = output teeth ÷ input teeth; output speed = input speed ÷ ratio; output torque = input torque × ratio × efficiency.</li><li>A 20-tooth pinion driving a 60-tooth gear at 1750 rpm gives 583 rpm out and 57 N·m out from 20 N·m in at 95% efficiency.</li><li>Spur gears are simple and cheap; helical gears are quieter; bevel gears turn 90°; worm gears give big reductions and self-lock.</li><li>Each gear stage loses a few percent to friction; losses multiply across stages.</li><li>Gears convert power between speed and torque — they do not create power.</li></ul></p>\n<p><strong>Common mistake:</strong> Inverting the gear ratio. Output speed is input speed divided by the ratio, not multiplied — a 3:1 reduction slows the output down.</p>\n<p><strong>Common mistake:</strong> Forgetting efficiency when working out output torque. The ideal torque is input × ratio; the real torque is less, by the efficiency.</p>\n<p><strong>Ready check:</strong> If you can work out a gear ratio, output speed, and output torque with efficiency, and name the main gear types, you have this module.</p>\n"
    },
    {
      "heading": "Gearboxes in Real Machines",
      "html": "<p>A gearbox is more than its gears: it needs a housing to hold the shafts in alignment, bearings to support them, seals to keep the oil in and the dirt out, and a breather so pressure does not build up as the oil warms. The oil itself is part of the design — it lubricates the teeth, carries heat away, and must be changed on schedule, because dirty or degraded oil is the most common cause of gearbox failure.</p>\n<p>Gearbox faults announce themselves: a rising temperature, a new noise, metal particles in the oil, or a vibration that was not there before. Each symptom points at a cause — a worn tooth, a failing bearing, a misaligned shaft — and catching it early is the difference between an oil change and a rebuild. The calculations in this module size the gears; the housing, bearings, and lubrication keep them alive.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Gear ratio",
      "def": "Output teeth divided by input teeth; how many times the speed is reduced (or increased)."
    },
    {
      "term": "Pinion",
      "def": "The smaller gear in a pair, usually the input gear."
    },
    {
      "term": "Spur gear",
      "def": "A gear with straight teeth, for parallel shafts; simple, cheap, and moderately noisy."
    },
    {
      "term": "Helical gear",
      "def": "A gear with angled teeth that engage gradually; quieter and stronger than a spur gear, but creates axial thrust."
    },
    {
      "term": "Bevel gear",
      "def": "A gear with teeth cut on a cone, used to turn the drive through 90°."
    },
    {
      "term": "Worm gear",
      "def": "A screw-like worm driving a wheel, giving a very large reduction in one stage and a self-locking property."
    },
    {
      "term": "Planetary gear",
      "def": "A set with planet gears around a sun gear inside a ring gear; compact, high ratio, load shared between planets."
    },
    {
      "term": "Efficiency",
      "def": "The fraction of input power that reaches the output; a single gear pair is typically 95–98% efficient."
    },
    {
      "term": "Module",
      "def": "The size of gear teeth: a bigger module means bigger, stronger teeth."
    },
    {
      "term": "Undercut",
      "def": "Weakening of small pinion teeth by the cutting process; avoided by keeping the pinion above about 17 teeth."
    },
    {
      "term": "Backlash",
      "def": "The small play between meshing gear teeth, needed for lubrication but a source of positioning error."
    },
    {
      "term": "Chain drive",
      "def": "Power transmission by a chain over sprockets; efficient and positive, with no slip."
    },
    {
      "term": "Belt drive",
      "def": "Power transmission by a belt over pulleys; quiet and shock-absorbing, but can slip under overload."
    }
  ],
  "video": {
    "title": "Planetary Gear System: How it Works & Why It's So Powerful",
    "embedUrl": "https://www.youtube.com/embed/XL2QBS7xaNs",
    "note": "Inside a planetary gearbox: sun, planets, and ring, and why the load is shared. Watch how the planets split the torque, then work out this module's 20-tooth/60-tooth example yourself.",
    "more": [
      {
        "title": "How Automatic Shifters Control the Gearbox",
        "url": "https://www.youtube.com/watch?v=l9AS4-AkZXM"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A 20-tooth pinion drives a 60-tooth gear. Work out the gear ratio, and the output speed when the input speed is 1750 rpm.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Ratio = 60 ÷ 20 = 3:1. Step 2: Output speed = 1750 ÷ 3 = 583 rpm. A good answer shows the ratio and the 583 rpm result.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> The gear pair in Problem 1 has an input torque of 20 N·m and an efficiency of 95%. Work out the output torque.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Ideal output torque = 20 × 3 = 60 N·m. Step 2: Real output torque = 60 × 0.95 = 57 N·m. A good answer shows the ideal torque and the efficiency step.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> An 18-tooth pinion drives a 54-tooth gear at 1200 rpm. Work out the ratio and the output speed.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Ratio = 54 ÷ 18 = 3:1. Step 2: Output speed = 1200 ÷ 3 = 400 rpm. A good answer shows the ratio and the 400 rpm result.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A gearbox has three stages, each 95% efficient. What is the overall efficiency? Show your working.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Overall efficiency = 0.95 × 0.95 × 0.95 = 0.95³. Step 2: 0.95³ = 0.857, about 86%. Step 3: Losses multiply across stages, so three stages lose about 14% of the input power. A good answer shows the multiplication and the 86% result.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A hoist must hold its load without power, so that a power cut cannot let the load fall. Which gear type do you choose, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Choose a worm gear, because it is self-locking — the wheel cannot drive the worm backwards. Step 2: A power cut leaves the load held by the worm gear alone. Step 3: Spur, helical, and bevel gears can all be back-driven, so they would let the load fall without a brake. A good answer names the worm gear and the self-locking reason.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A motor runs at 3000 rpm and must drive a conveyor at 250 rpm. What gear ratio is needed, and suggest a tooth combination that gives it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Ratio = 3000 ÷ 250 = 12:1. Step 2: A single 12:1 pair would need a very large gear, so use two stages — for example, two 3.46:1 stages, or a 4:1 stage and a 3:1 stage (4 × 3 = 12). Step 3: A 4:1 stage could be 20 teeth driving 80 teeth, and a 3:1 stage 20 teeth driving 60 teeth. A good answer gives the 12:1 ratio and a two-stage combination.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A 20-tooth pinion drives a 60-tooth gear. What is the gear ratio?",
      "choices": [
        "1:3",
        "3:1",
        "20:1",
        "60:1"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Ratio = output teeth ÷ input teeth = 60 ÷ 20 = 3:1. (a) is the inverse. (c) and (d) use the tooth counts as ratios."
    },
    {
      "q": "The gear pair above has an input speed of 1750 rpm. What is the output speed?",
      "choices": [
        "583 rpm",
        "1750 rpm",
        "5250 rpm",
        "60 rpm"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Output speed = 1750 ÷ 3 = 583 rpm. (b) is the input speed. (c) multiplies by the ratio instead of dividing. (d) is the output tooth count, not a speed."
    },
    {
      "q": "The gear pair above has an input torque of 20 N·m and 95% efficiency. What is the output torque?",
      "choices": [
        "60 N·m",
        "57 N·m",
        "20 N·m",
        "6.7 N·m"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Ideal torque is 20 × 3 = 60 N·m, and 60 × 0.95 = 57 N·m. (a) forgets the efficiency. (c) is the input torque. (d) divides by the ratio instead of multiplying."
    },
    {
      "q": "An 18-tooth pinion drives a 54-tooth gear at 1200 rpm. What is the output speed?",
      "choices": [
        "400 rpm",
        "1200 rpm",
        "3600 rpm",
        "54 rpm"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Ratio is 54 ÷ 18 = 3:1, so output speed is 1200 ÷ 3 = 400 rpm. (b) is the input speed. (c) multiplies by the ratio. (d) is the output tooth count."
    },
    {
      "q": "A gearbox has three stages, each 95% efficient. What is the overall efficiency, approximately?",
      "choices": [
        "95%",
        "86%",
        "285%",
        "5%"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 0.95³ = 0.857, about 86%. (a) is one stage's efficiency. (c) adds the efficiencies, which is wrong. (d) is the loss of one stage, not the overall efficiency."
    },
    {
      "q": "Which gear type is self-locking, so the output cannot drive the input backwards?",
      "choices": [
        "Spur gear",
        "Helical gear",
        "Worm gear",
        "Bevel gear"
      ],
      "answer": 2,
      "explanation": "Correct: (c). A worm gear is self-locking, which is why it is used for hoists. (a), (b), and (d) can all be back-driven."
    },
    {
      "q": "You are designing a drive that must turn a corner: the input shaft runs left-to-right and the output shaft must run front-to-back, at right angles to it. Which gear type do you choose?",
      "choices": [
        "Spur gear.",
        "Helical gear.",
        "Bevel gear.",
        "Planetary gear."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Bevel gears have their teeth cut on a cone and turn the drive through 90°, as in a car differential. (a) and (b) are wrong because spur and helical gears work on parallel shafts — they cannot turn the drive round a corner. (d) is wrong because a planetary set is a compact epicyclic arrangement with coaxial input and output, not a right-angle drive."
    },
    {
      "q": "Why are planetary gears used in automatic gearboxes and robot joints?",
      "choices": [
        "Because they are the cheapest gears",
        "Because they are compact, share the load between planets, and give high ratios in a small space",
        "Because they never need lubrication",
        "Because they have no backlash"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Planetary sets are compact with shared load and high ratios. (a) is wrong: they are more complex and expensive. (c) is wrong: they need lubrication like any gear. (d) is wrong: they still have backlash."
    }
  ],
  "studyGuide": "\n<h3>Module 8 — Gears & Power Transmission: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain what a gear ratio is and work it out from tooth counts.</p>\n<p><strong>Key terms:</strong> Gear ratio · Pinion · Spur gear · Helical gear · Bevel gear · Worm gear · Planetary gear · Efficiency.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain what a gear ratio is and work it out from tooth counts.</li>\n<li>Work out output speed and output torque for a gear pair.</li>\n<li>Explain the trade-off between speed and torque in gearing.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
