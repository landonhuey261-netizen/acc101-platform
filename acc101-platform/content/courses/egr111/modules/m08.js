// egr111 - Module 8: Pneumatics Fundamentals
module.exports = {
  "number": 8,
  "slug": "pneumatics-fundamentals",
  "title": "Pneumatics Fundamentals",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain how pneumatics differs from hydraulics.",
    "Work out pneumatic cylinder force from pressure and bore.",
    "Work out retract force and air consumption.",
    "Name the parts of a pneumatic system, including the FRL unit.",
    "Explain meter-out speed control and pneumatic safety."
  ],
  "sections": [
    {
      "heading": "Compressed Air: Fast, Clean, and Weaker",
      "html": "<p>Pneumatics uses compressed air instead of oil. Air is free, clean, fast, and safe to exhaust — a pneumatic cylinder can cycle many times a second, and a leak is just air, not a slippery mess. The trade-off is force: air systems usually run at 6 bar (about 87 psi), while hydraulics run at 200 bar or more, so pneumatic cylinders are much weaker for their size. Pneumatics is the choice for fast, light work — clamping, sorting, ejecting, and pick-and-place — and hydraulics is the choice for heavy force.</p>\n<p>Air is also compressible, which changes how it behaves. A pneumatic cylinder is springy: it gives a little under load, and its speed is harder to control precisely than a hydraulic cylinder's. That sponginess is useful for clamping (it absorbs shock) and a nuisance for precise positioning. Pressure is measured in bar (1 bar ≈ 14.5 psi), and pneumatic calculations always use gauge pressure — the pressure above atmospheric — because that is what the cylinder feels.</p>\n"
    },
    {
      "heading": "Pneumatic Cylinder Force",
      "html": "<p>The force formula is the same as hydraulics: F = P × A, with pressure in N/mm² (1 bar = 0.1 N/mm²). Example: a 40 mm bore cylinder at 6 bar. The area is π ÷ 4 × 40² = 1,256.6 mm², and the pressure is 6 bar = 0.6 N/mm², so the extend force is 0.6 × 1,256.6 = 754 N. A 63 mm bore at 6 bar gives an area of 3,117.2 mm² and a force of 0.6 × 3,117.2 = 1,870 N.</p>\n<p>Retract force uses the annulus, just as in hydraulics. Example: a 50 mm bore with a 12 mm rod at 6 bar. The annulus area is π ÷ 4 × (50² − 12²) = π ÷ 4 × (2,500 − 144) = 1,850.4 mm², and the retract force is 0.6 × 1,850.4 = 1,110 N. In practice, pneumatic forces are derated by about 25% for friction and load variations, so a cylinder rated at 754 N should be counted on for about 565 N of useful force — always check the load against the derated force, not the theoretical one.</p>\n"
    },
    {
      "heading": "Air Consumption: How Much Air Does a Cycle Use?",
      "html": "<p>Air consumption matters because the compressor must keep up. The air used in one extend stroke is the cylinder's volume times the pressure ratio: free air = volume × (gauge pressure + 1) ÷ 1, using absolute pressure. Example: a 50 mm bore cylinder with a 100 mm stroke at 6 bar gauge. The extend volume is A × stroke = 1,963.5 mm² × 100 mm = 196,350 mm³ = 0.196 L. Absolute pressure is 6 + 1 = 7 bar, so the free air per extend stroke is 0.196 × 7 = 1.37 L. A full cycle (extend and retract) uses about 2.75 L of free air, because the retract stroke uses nearly as much as the extend stroke.</p>\n<p>To size a compressor, add up the free air per cycle for every cylinder, multiply by cycles per minute, and add a margin. If the compressor cannot keep up, the system pressure falls, cylinders slow down, and forces drop — the classic symptom of an undersized compressor is a machine that works fine at first and gets slower as the shift goes on.</p>\n"
    },
    {
      "heading": "The Parts of a Pneumatic System",
      "html": "<p>A pneumatic system starts with a compressor, which squeezes air into a receiver (tank). The air passes through an FRL unit — Filter, Regulator, Lubricator — which removes water and dirt, sets the working pressure, and adds a fine oil mist to lubricate valves and cylinders. Directional control valves (usually 5/2 valves for double-acting cylinders) send air to one side of the cylinder or the other, and flow control valves set the speed.</p>\n<p>Cylinders come in two kinds: single-acting, with a spring that returns the piston when the air is released, and double-acting, with air driving both directions. Single-acting cylinders are simpler and fail safe (the spring returns them), but they are weaker on the return stroke; double-acting cylinders give full control in both directions and are the standard choice for automation.</p>\n"
    },
    {
      "heading": "Speed Control, Safety, and Common Mistakes",
      "html": "<p>Pneumatic speed is controlled with flow controls, and the standard method is meter-out: restrict the air leaving the cylinder, not the air entering it. Metering the exhaust gives smooth, stable motion; metering the inlet lets the cylinder lurch, because the air behind the piston compresses and then surges. If a cylinder jerks or bounces, the flow controls are probably on the wrong side.</p>\n<p>Pneumatic safety is about stored energy: a receiver holds a large volume of compressed air, and a cylinder can move unexpectedly if its valve is operated during maintenance. Always isolate and exhaust the air supply before working on a pneumatic system, and beware of hose whip if a hose comes off under pressure. <p><strong>Takeaways:</strong><ul><li>Pneumatic force is F = P × A using gauge pressure; a 40 mm bore at 6 bar gives 754 N.</li><li>Retract force uses the annulus: a 50 mm bore with a 12 mm rod at 6 bar retracts with 1,110 N.</li><li>Free air per stroke is volume × absolute pressure ratio; a 50 mm × 100 mm cylinder at 6 bar uses 1.37 L per extend stroke.</li><li>An FRL unit filters, regulates, and lubricates the air.</li><li>Control speed with meter-out (restrict the exhaust), and exhaust the system before maintenance.</li></ul></p>\n<p><strong>Common mistake:</strong> Using absolute pressure instead of gauge pressure in force calculations, or forgetting the +1 in air consumption. Force uses gauge pressure; air use uses absolute pressure.</p>\n<p><strong>Common mistake:</strong> Metering the inlet instead of the exhaust. Meter-in gives jerky motion; meter-out gives smooth motion.</p>\n<p><strong>Ready check:</strong> If you can work out extend force, retract force, and air use, explain the FRL unit, and say why meter-out is used, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Pneumatics",
      "def": "Using compressed air to produce force and motion, typically at around 6 bar."
    },
    {
      "term": "Bar",
      "def": "A unit of pressure: 1 bar = 0.1 N/mm² ≈ 14.5 psi."
    },
    {
      "term": "Gauge pressure",
      "def": "Pressure measured above atmospheric pressure; the pressure a cylinder actually feels."
    },
    {
      "term": "Absolute pressure",
      "def": "Pressure measured from a perfect vacuum; gauge pressure plus 1 bar."
    },
    {
      "term": "FRL unit",
      "def": "Filter, Regulator, Lubricator: the unit that cleans, sets the pressure of, and lubricates the air supply."
    },
    {
      "term": "Compressor",
      "def": "The machine that squeezes air into a receiver tank for the pneumatic system."
    },
    {
      "term": "Receiver",
      "def": "The tank that stores compressed air and smooths out demand peaks."
    },
    {
      "term": "5/2 valve",
      "def": "A directional control valve with 5 ports and 2 positions, the standard valve for a double-acting cylinder."
    },
    {
      "term": "Single-acting cylinder",
      "def": "A cylinder driven by air in one direction and returned by a spring."
    },
    {
      "term": "Double-acting cylinder",
      "def": "A cylinder driven by air in both directions."
    },
    {
      "term": "Meter-out",
      "def": "Speed control by restricting the air leaving a cylinder, giving smooth motion."
    },
    {
      "term": "Meter-in",
      "def": "Speed control by restricting the air entering a cylinder, which gives jerky motion."
    },
    {
      "term": "Flow control valve",
      "def": "A needle valve that restricts airflow to set a cylinder's speed."
    },
    {
      "term": "Free air",
      "def": "Air volume measured at atmospheric pressure, used to size compressors."
    },
    {
      "term": "Derating",
      "def": "Reducing a cylinder's theoretical force by about 25% to allow for friction and load variations."
    }
  ],
  "video": {
    "title": "How PNEUMATIC CYLINDER works? (Animation | Sub)",
    "embedUrl": "https://www.youtube.com/embed/p6cCszeGyuU",
    "note": "An animated look inside a pneumatic cylinder: ports, piston, seals, and single-acting versus double-acting designs. Watch the air path, then sketch a double-acting cylinder and label its ports.",
    "more": [
      {
        "title": "Pneumatic Cylinder Working explained (Animation)",
        "url": "https://www.youtube.com/watch?v=hmz1h5fk2bI"
      },
      {
        "title": "Basic Pneumatics Series - Actuate Double Acting Cylinder Using Counter Pressure",
        "url": "https://www.youtube.com/watch?v=JLFfyK6fTAw"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A pneumatic cylinder has a 40 mm bore and works at 6 bar. Work out its extend force in newtons.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Area A = π ÷ 4 × 40² = 1,256.6 mm². Step 2: Pressure = 6 bar = 0.6 N/mm². Step 3: Force = 0.6 × 1,256.6 = 754 N. A good answer shows the area, the bar-to-N/mm² conversion, and the 754 N result.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A pneumatic cylinder has a 50 mm bore and a 12 mm rod, working at 6 bar. Work out its retract force.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Annulus area = π ÷ 4 × (50² − 12²) = π ÷ 4 × 2,356 = 1,850.4 mm². Step 2: Force = 0.6 × 1,850.4 = 1,110 N. A good answer shows the annulus and the 1,110 N result.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A 63 mm bore pneumatic cylinder works at 6 bar. Work out its extend force, and say what useful force you would count on after a 25% derating for friction.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Area = π ÷ 4 × 63² = 3,117.2 mm². Step 2: Theoretical force = 0.6 × 3,117.2 = 1,870 N. Step 3: Derated useful force = 1,870 × 0.75 = 1,403 N (about 1,400 N). A good answer gives both the theoretical and the derated force.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A 50 mm bore cylinder with a 100 mm stroke works at 6 bar gauge. Work out the free air used per extend stroke, and per full cycle.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Extend volume = 1,963.5 mm² × 100 mm = 196,350 mm³ = 0.196 L. Step 2: Absolute pressure = 6 + 1 = 7 bar, so free air per extend = 0.196 × 7 = 1.37 L. Step 3: A full cycle uses about twice that, roughly 2.75 L of free air. A good answer shows the volume, the +1 for absolute pressure, and both totals.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A pneumatic cylinder jerks and bounces as it extends. The flow control is on the air inlet. Explain the problem and the fix.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The flow control is metering the inlet (meter-in), so the air behind the piston compresses and then surges, causing jerky motion. Step 2: The fix is meter-out: move the flow control to the exhaust side, restricting the air leaving the cylinder. Step 3: Meter-out gives smooth, stable motion because the exhaust restriction holds the piston back evenly. A good answer names meter-in versus meter-out.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A machine has 4 pneumatic cylinders, each using 2.75 L of free air per cycle, running 10 cycles per minute. Work out the total air demand in L/min, and say what margin you would allow when sizing the compressor.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Per cycle total = 4 × 2.75 = 11 L. Step 2: Per minute = 11 × 10 = 110 L/min of free air. Step 3: Allow a margin of at least 25–30% for leaks and future additions, so size the compressor for about 140–150 L/min. A good answer shows the multiplication and the margin.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A pneumatic cylinder has a 40 mm bore and works at 6 bar. What is its extend force, approximately?",
      "choices": [
        "754 N",
        "1,256 N",
        "240 N",
        "1,870 N"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Area is 1,256.6 mm² and 6 bar is 0.6 N/mm², so F = 0.6 × 1,256.6 = 754 N. (b) is the area, not the force. (c) would be the force at about 2 bar. (d) is the force of a 63 mm bore at 6 bar."
    },
    {
      "q": "A 50 mm bore pneumatic cylinder with a 12 mm rod works at 6 bar. What is its retract force?",
      "choices": [
        "1,178 N",
        "1,110 N",
        "754 N",
        "1,870 N"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The annulus area is 1,850.4 mm², and 0.6 × 1,850.4 = 1,110 N. (a) is the extend force of a 50 mm bore at 6 bar. (c) is the force of a 40 mm bore. (d) is the force of a 63 mm bore."
    },
    {
      "q": "A 63 mm bore pneumatic cylinder works at 6 bar. What is its extend force?",
      "choices": [
        "754 N",
        "1,110 N",
        "1,870 N",
        "3,117 N"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Area is 3,117.2 mm², and 0.6 × 3,117.2 = 1,870 N. (a) is the force of a 40 mm bore. (b) is the retract force of a 50 mm bore with a 12 mm rod. (d) is the area, not the force."
    },
    {
      "q": "A 50 mm bore cylinder with a 100 mm stroke works at 6 bar gauge. How much free air does one extend stroke use?",
      "choices": [
        "0.196 L",
        "1.37 L",
        "2.75 L",
        "7.0 L"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The volume is 0.196 L and the absolute pressure is 7 bar, so free air is 0.196 × 7 = 1.37 L. (a) is the volume, not the free air. (c) is roughly the full cycle (extend plus retract). (d) is the absolute pressure, not a volume."
    },
    {
      "q": "What does the FRL unit do in a pneumatic system?",
      "choices": [
        "It filters, regulates, and lubricates the air supply",
        "It counts the air used",
        "It cools the compressor",
        "It stores compressed air"
      ],
      "answer": 0,
      "explanation": "Correct: (a). FRL stands for Filter, Regulator, Lubricator. (b) is a flow meter's job. (c) is the compressor's cooling system. (d) is the receiver's job."
    },
    {
      "q": "Why is meter-out preferred over meter-in for pneumatic speed control?",
      "choices": [
        "Because it uses less air",
        "Because restricting the exhaust gives smooth, stable motion, while restricting the inlet causes jerky surging",
        "Because it is cheaper",
        "Because it makes the cylinder faster"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Meter-out holds the piston back evenly; meter-in lets the air behind the piston compress and surge. (a) is wrong: both use the same air. (c) is wrong: the valves cost the same. (d) is wrong: meter-out does not make the cylinder faster."
    },
    {
      "q": "What is a single-acting pneumatic cylinder?",
      "choices": [
        "A cylinder driven by air in both directions",
        "A cylinder driven by air in one direction and returned by a spring",
        "A cylinder with two rods",
        "A cylinder that only works once"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A single-acting cylinder has air on one side and a spring return. (a) describes a double-acting cylinder. (c) describes a double-rod cylinder. (d) is wrong: single-acting cylinders cycle repeatedly."
    },
    {
      "q": "Before working on a pneumatic system, what must you do first?",
      "choices": [
        "Turn the compressor up to full pressure",
        "Isolate and exhaust the air supply so no stored energy can move a cylinder",
        "Remove the FRL unit",
        "Open all the flow controls fully"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Stored compressed air can move a cylinder unexpectedly, so the supply must be isolated and the system exhausted. (a) is dangerous: it increases the stored energy. (c) is wrong: the FRL is not the hazard. (d) is wrong: open flow controls make unexpected movement faster."
    }
  ],
  "studyGuide": "\n<h3>Module 8 — Pneumatics Fundamentals: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain how pneumatics differs from hydraulics.</p>\n<p><strong>Key terms:</strong> Pneumatics · Bar · Gauge pressure · Absolute pressure · FRL unit · Compressor · Receiver · 5/2 valve.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain how pneumatics differs from hydraulics.</li>\n<li>Work out pneumatic cylinder force from pressure and bore.</li>\n<li>Work out retract force and air consumption.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
