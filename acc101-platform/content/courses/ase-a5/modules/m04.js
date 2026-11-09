// ase-a5 - Module 4: Master Cylinder & Power Assist
module.exports = {
  "number": 4,
  "slug": "master-cylinder-power-assist",
  "title": "Master Cylinder & Power Assist",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain how the master cylinder turns pedal force into pressure in two circuits.",
    "Explain how a vacuum booster multiplies the driver's foot force.",
    "Describe the booster test: pedal drop when the engine starts.",
    "List the symptoms of a failing master cylinder: sinking pedal, fluid loss, warning light.",
    "Explain what happens when one hydraulic circuit fails."
  ],
  "sections": [
    {
      "heading": "The Master Cylinder",
      "html": "<p>The <strong>master cylinder</strong> is the heart of the hydraulics. Inside its bore are two <strong>pistons in series</strong> — a primary piston pushed by the pedal (through the booster) and a secondary piston pushed by the first. Each piston feeds its own <strong>circuit</strong>, and each circuit serves two wheels, usually diagonally opposite. The <strong>reservoir</strong> on top holds spare fluid, and small <strong>compensating ports</strong> let fluid move between the reservoir and the bore as the pistons move and as the fluid heats and cools.</p><p>When the pedal is pressed, the pistons close off the ports and push fluid into the lines. When the pedal is released, return springs push the pistons back, the ports open again, and fluid flows back. It is a simple, sealed system — and that is why a leak anywhere in it shows up as a problem everywhere.</p>"
    },
    {
      "heading": "The Vacuum Booster",
      "html": "<p>Between the pedal and the master cylinder sits the <strong>vacuum booster</strong> — a large round canister with a flexible <strong>diaphragm</strong> inside. One side of the diaphragm is connected to <strong>engine vacuum</strong> (or a vacuum pump on engines that make little vacuum), the other side is at atmospheric pressure when the pedal is pressed. The pressure difference across the diaphragm pushes it, and the diaphragm pushes the master cylinder's piston — adding a large force on top of the driver's foot.</p><p>A <strong>check valve</strong> in the vacuum hose holds vacuum in the booster even after the engine stops, so the driver still gets one or two assisted stops with the engine off. When the vacuum is gone, the pedal goes <strong>hard</strong> — the driver is pushing the master cylinder with foot force alone.</p>"
    },
    {
      "heading": "Testing the Booster",
      "html": "<p>The classic booster test needs no tools. With the engine off, press the brake pedal several times until it goes hard — that uses up the stored vacuum. Then hold the pedal down and <strong>start the engine</strong>. If the booster is working, the pedal should <strong>drop slightly</strong> under your foot as vacuum returns and the booster starts helping. If the pedal does not drop, the booster is not getting vacuum — a cracked hose, a failed check valve, or a torn diaphragm inside the booster.</p><p>A hissing noise from the pedal area while braking can also mean a leaking booster diaphragm, and a hard pedal with the engine running means the assist is gone even though the hydraulics are fine.</p>"
    },
    {
      "heading": "When the Master Cylinder Fails",
      "html": "<p>A master cylinder usually fails at its <strong>seals</strong>. When a seal leaks internally, fluid slips past the piston instead of being pushed into the lines, and the pedal <strong>sinks slowly</strong> under steady pressure — the classic symptom. When a seal leaks externally, fluid appears on the booster or the firewall, the reservoir level drops, and the <strong>brake warning light</strong> comes on.</p><p>If one circuit fails — a leak in a line, for example — the driver keeps the other circuit's two wheels. The pedal travels further, the car pulls toward the working side, and the warning light comes on. That is the split system doing its job: a failure becomes a degraded stop, not no stop at all.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Master cylinder: two pistons in series, two circuits, reservoir on top, compensating ports.</li><li>Vacuum booster: diaphragm + pressure difference multiplies the pedal force; check valve holds vacuum after the engine stops.</li><li>Booster test: pump the pedal hard with the engine off, hold it, start the engine — the pedal should drop slightly.</li><li>Failing master cylinder: pedal sinks slowly under steady pressure (internal seal leak) or fluid on the booster (external leak).</li><li>One circuit fails = longer pedal, pull to the working side, warning light — but still some braking.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Replacing the master cylinder for a hard pedal. A hard pedal is usually a booster or vacuum problem; a sinking pedal is the master cylinder's symptom.</div><div class=\"callout\"><strong>Common mistake:</strong> Forgetting to bench-bleed a new master cylinder before fitting it. Air trapped in the cylinder will make the pedal soft no matter how well the wheels are bled afterwards.</div><p><strong>Ready-to-Work link:</strong> If you can do the booster test and explain what a sinking pedal means, you have this module. Module 5 covers ABS.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Master cylinder",
      "def": "The cylinder that turns the driver's foot force into hydraulic pressure in two circuits."
    },
    {
      "term": "Primary piston",
      "def": "The first piston in the master cylinder, pushed by the pedal through the booster."
    },
    {
      "term": "Secondary piston",
      "def": "The second piston in the master cylinder, pushed by the primary piston; it feeds the second circuit."
    },
    {
      "term": "Vacuum booster",
      "def": "A canister with a diaphragm that uses a pressure difference to multiply the driver's foot force."
    },
    {
      "term": "Diaphragm",
      "def": "The flexible membrane inside the booster that the pressure difference pushes."
    },
    {
      "term": "Check valve",
      "def": "A one-way valve in the booster's vacuum hose that holds vacuum in the booster after the engine stops."
    },
    {
      "term": "Reservoir",
      "def": "The container on the master cylinder holding spare brake fluid."
    },
    {
      "term": "Compensating port",
      "def": "A small passage letting fluid move between the reservoir and the master cylinder bore."
    },
    {
      "term": "Sinking pedal",
      "def": "A brake pedal that slowly drops under steady pressure, a classic sign of an internal master-cylinder seal leak."
    },
    {
      "term": "Brake warning light",
      "def": "A dash light that warns of low brake fluid or a pressure difference between the two circuits."
    },
    {
      "term": "Bench bleeding",
      "def": "Bleeding the air out of a new master cylinder on the bench before fitting it to the car."
    },
    {
      "term": "Circuit",
      "def": "One of the two separate hydraulic paths in a split brake system, each serving two wheels."
    },
    {
      "term": "Engine vacuum",
      "def": "The low pressure in an engine's intake, used to power the vacuum brake booster."
    },
    {
      "term": "Hard pedal",
      "def": "A brake pedal that takes much more effort than normal, usually because the power assist is gone."
    },
    {
      "term": "Return spring",
      "def": "A spring that pushes a master-cylinder piston back when the pedal is released."
    }
  ],
  "video": {
    "title": "How a Brake Booster and Master Cylinder Work",
    "embedUrl": "https://www.youtube.com/embed/I4Ka4__ws1E",
    "note": "A clear animation of how the vacuum booster and the master cylinder work together: the booster multiplies the pedal force with a pressure difference, and the master cylinder's two pistons feed two separate brake circuits. Watch the diaphragm move as the pedal is pressed.",
    "more": [
      {
        "title": "How a Car Braking System Works: ABS, Traction & Stability Control Explained",
        "url": "https://www.youtube.com/watch?v=qHf1qo31-aw"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A brake pedal sinks slowly while the driver holds steady pressure at a red light, and no fluid is leaking anywhere visible. What is the likely fault, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The likely fault is an internal seal leak in the master cylinder. Step 2: Fluid is slipping past the piston instead of being pushed into the lines, so the pedal sinks — and because the leak is inside the cylinder, no fluid appears outside.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Describe the booster test, step by step, and say what a working booster does.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: With the engine off, press the pedal several times until it goes hard — that uses up the stored vacuum. Step 2: Hold the pedal down and start the engine. Step 3: A working booster makes the pedal drop slightly under your foot as vacuum returns and the booster starts helping.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Explain in two sentences how a vacuum booster multiplies the driver's foot force.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: One side of the booster's diaphragm is under engine vacuum and the other side is at atmospheric pressure when the pedal is pressed. Step 2: The pressure difference pushes the diaphragm, and the diaphragm pushes the master cylinder's piston with far more force than the driver's foot alone.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A car's brake pedal is hard and takes much more effort than normal, but the pedal does not sink. Is the master cylinder or the booster the more likely fault? Explain.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The booster is the more likely fault. Step 2: A hard pedal means the assist is gone — a vacuum hose, check valve, or diaphragm problem — while the hydraulics still work; a failing master cylinder makes the pedal sink, not go hard.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> One hydraulic circuit springs a leak. What will the driver notice, and why is there still some braking?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The pedal travels further, the car pulls toward the working side, and the warning light comes on. Step 2: The other circuit still serves its two wheels, because the split system keeps the circuits separate — a failure becomes a degraded stop, not no stop.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Why must a new master cylinder be bench-bled before it is fitted to the car?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A new cylinder is full of air. Step 2: If it is fitted full of air, that air will be pushed into the lines, and bleeding the wheels afterwards will not reliably clear air trapped in the cylinder — so the air is bled out on the bench first.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The master cylinder has two pistons in series so that it can feed:",
      "choices": [
        "Two separate hydraulic circuits",
        "Two pedals",
        "Two steering wheels",
        "Two batteries"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Each piston feeds its own circuit, each serving two wheels. (b) There is one pedal. (c) There is one steering wheel. (d) The master cylinder has nothing to do with batteries."
    },
    {
      "q": "A vacuum booster multiplies pedal force using:",
      "choices": [
        "A pressure difference across a diaphragm",
        "An electric motor",
        "A second master cylinder",
        "Compressed air from the tires"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Vacuum on one side and atmospheric pressure on the other push the diaphragm. (b) An electric motor is used in some newer boosters, but a vacuum booster uses pressure difference. (c) There is one master cylinder. (d) Tires do not supply the booster."
    },
    {
      "q": "In the booster test, a working booster makes the pedal:",
      "choices": [
        "Drop slightly when the engine is started",
        "Rise when the engine is started",
        "Go hard when the engine is started",
        "Stay exactly still"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Vacuum returns and the booster starts helping, so the pedal drops under the driver's foot. (b) A rising pedal would mean the booster is pushing back. (c) A hard pedal means no assist. (d) No movement means the booster is not working."
    },
    {
      "q": "A brake pedal that sinks slowly under steady pressure, with no visible leak, most likely means:",
      "choices": [
        "An internal master-cylinder seal leak",
        "A failed booster",
        "Worn brake pads",
        "A flat tire"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Fluid slips past the piston inside the cylinder. (b) A failed booster makes the pedal hard, not sinking. (c) Worn pads make the pedal low, not slowly sinking. (d) A flat tire does not sink the pedal."
    },
    {
      "q": "The check valve in the booster's vacuum hose:",
      "choices": [
        "Holds vacuum in the booster after the engine stops",
        "Lets air into the brake lines",
        "Pumps the fluid",
        "Cools the booster"
      ],
      "answer": 0,
      "explanation": "Correct: (a). It keeps vacuum stored for one or two assisted stops with the engine off. (b) Air must never enter the brake lines. (c) The valve does not pump fluid. (d) The valve does not cool anything."
    },
    {
      "q": "A hard brake pedal with the engine running most likely means the:",
      "choices": [
        "Power assist is gone",
        "Master cylinder seals have failed internally",
        "Pads are worn out",
        "Tires are flat"
      ],
      "answer": 0,
      "explanation": "Correct: (a). No assist means the driver pushes the master cylinder alone. (b) Failed seals make the pedal sink. (c) Worn pads make the pedal low. (d) Flat tires do not harden the pedal."
    },
    {
      "q": "If one hydraulic circuit fails, the driver will notice:",
      "choices": [
        "A longer pedal, a pull to the working side, and a warning light",
        "No change at all",
        "The steering wheel locking",
        "The engine stopping"
      ],
      "answer": 0,
      "explanation": "Correct: (a). One circuit's two wheels still brake, so the car pulls toward them and the pedal travels further. (b) Losing half the brakes is always noticeable. (c) Steering is unaffected. (d) The engine is unaffected."
    },
    {
      "q": "A new master cylinder is bench-bled before fitting to:",
      "choices": [
        "Remove the air trapped inside it",
        "Fill it with oil",
        "Test the battery",
        "Paint it"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Air in the cylinder would be pushed into the lines and make the pedal soft. (b) Oil would ruin the seals. (c) The battery is unrelated. (d) Painting is cosmetic."
    }
  ],
  "studyGuide": "\n<h3>Module 4 — Master Cylinder &amp; Power Assist: Quick Reference</h3>\n<p><strong>Master cylinder:</strong> Two pistons in series, two circuits, reservoir on top. Internal seal leak = pedal sinks slowly, no visible leak.</p>\n<p><strong>Vacuum booster:</strong> Diaphragm + pressure difference multiplies foot force. Check valve holds vacuum after the engine stops.</p>\n<p><strong>Booster test:</strong> Pump the pedal hard with the engine off → hold it → start the engine → pedal should drop slightly.</p>\n<p><strong>Hard pedal:</strong> Assist is gone (booster/vacuum). <strong>Sinking pedal:</strong> Master cylinder seals.</p>\n<p><strong>One circuit fails:</strong> Longer pedal, pull to the working side, warning light — but still some braking.</p>\n<p><strong>Self-check:</strong> Do the booster test in words and explain what a sinking pedal means.</p>\n"
};
