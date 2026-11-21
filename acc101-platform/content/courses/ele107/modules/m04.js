// ele107 - Module 4: Three-Phase Induction Motors
module.exports = {
  "number": 4,
  "slug": "three-phase-induction-motors",
  "title": "Three-Phase Induction Motors",
  "estTime": "3–4 hours",
  "objectives": [
    "Describe the construction of a squirrel-cage induction motor: stator, rotor bars, end rings, bearings, and frame.",
    "Explain how the rotating field induces rotor current and produces torque.",
    "Compare squirrel-cage and wound-rotor induction motors.",
    "Read a motor's speed-torque curve: locked-rotor, pull-up, breakdown, and full-load torque.",
    "Explain locked-rotor (inrush) current and why it matters for starting."
  ],
  "sections": [
    {
      "heading": "Inside a Squirrel-Cage Motor",
      "html": "<p>The three-phase induction motor is the most common motor in the world, and its most common form is the <strong>squirrel-cage motor</strong>. The stator is a stack of laminated steel with slots holding three sets of windings, one per phase. The rotor is a stack of laminations with slots holding aluminum or copper bars, shorted at each end by end rings — the whole thing looks like a cage, hence the name. There are no windings on the rotor, no brushes, no slip rings, and no electrical connection to the rotor at all. The shaft rides on bearings in end bells, and a fan on the shaft cools the motor as it turns.</p>\n<p>When three-phase power energizes the stator, the rotating magnetic field sweeps across the rotor bars and induces voltage in them (Faraday's law). The bars are shorted by the end rings, so current flows, and that current makes its own magnetic field. The two fields attract, and the rotor is dragged around after the stator field — always a little behind it, because slip is what keeps the induction going. The result is a motor with almost nothing to wear out except the bearings, which is why squirrel-cage motors run for decades with little more than greasing and cleaning.</p>\n<div class=\"callout\"><strong>Key idea:</strong> The rotor has no wires. The stator field induces current in the rotor bars, and the two fields pull the rotor around. Simple construction is why these motors are so reliable.</div>"
    },
    {
      "heading": "The Speed-Torque Curve",
      "html": "<p>A motor's behavior from a standstill to full speed is drawn as a <strong>speed-torque curve</strong>, and four points on it matter. <strong>Locked-rotor torque</strong> (starting torque) is the torque at zero speed — what the motor can do to break a load away from rest. As the motor speeds up, torque dips slightly at <strong>pull-up torque</strong>, the lowest torque during acceleration; if the load needs more torque than the pull-up value, the motor stalls and never reaches full speed. Torque then rises to <strong>breakdown torque</strong>, the maximum the motor can produce, before falling to <strong>full-load torque</strong> at rated speed. The curve explains why a motor can start a load but fail to accelerate it, or accelerate it but trip on a heavy overload.</p>\n<p>At the instant of starting, the rotor is stationary, the slip is 100%, and the stator draws <strong>locked-rotor current</strong> (inrush) — typically five to eight times the full-load current. That inrush is why motor circuits need special treatment: oversized conductors, time-delay overloads, and breakers that tolerate the brief surge (NEC Article 430 covers all of this). It is also why reduced-voltage starting exists — see Electrical 108, Module 8 — for large motors on weak supplies.</p>"
    },
    {
      "heading": "Squirrel-Cage vs Wound Rotor",
      "html": "<p>The <strong>wound-rotor motor</strong> is the squirrel-cage motor's adjustable cousin: its rotor has real windings connected to slip rings and brushes, and external resistors can be connected into the rotor circuit. Adding rotor resistance raises the starting torque and lowers the starting current, and stepping the resistance out as the motor speeds up gives smooth, controlled acceleration — the classic choice for cranes, mills, and large fans before electronic drives existed. The price is maintenance: slip rings and brushes wear, and the rotor circuit adds failure points.</p>\n<p>Today, most applications that once needed a wound-rotor motor use a squirrel-cage motor with a variable frequency drive instead, because the drive controls speed and torque electronically with no brushes to maintain. The wound rotor still appears in older plants and in very large machines. For a beginner, the practical point is this: if you see slip rings and brushes on an AC motor, it is a wound-rotor machine, and its starting resistors and brush rigging are part of the troubleshooting picture.</p>"
    },
    {
      "heading": "NEMA Designs A, B, C & D",
      "html": "<p>Not all squirrel-cage motors behave the same, and <strong>NEMA design letters</strong> on the nameplate tell you which behavior you are buying. <strong>Design B</strong> is the general-purpose motor: normal starting torque, normal starting current, and low slip — the default for pumps, fans, and conveyors. <strong>Design A</strong> is similar but with higher starting current, used where the supply can handle it. <strong>Design C</strong> has high starting torque for hard-to-start loads such as loaded conveyors and crushers. <strong>Design D</strong> has very high starting torque and high slip (5–13%), which suits punch presses and other loads with heavy, intermittent torque demands, where the rotor's slip acts like a cushion.</p>\n<p>The design letter matters when you replace a motor: swapping a Design C motor for a Design B motor on a hard-starting load can leave the new motor unable to break the load away, even though the horsepower matches. Match the design letter, the horsepower, the speed, the frame, and the enclosure — the nameplate is the whole specification, and Module 5 teaches you to read it.</p>\n<div class=\"callout\"><strong>Common mistake:</strong> Replacing a failed motor with any motor of the same horsepower. Horsepower is only one field on the nameplate — design letter, speed, frame, and enclosure must match too, or the replacement will not start the load or will not fit the machine.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Squirrel-cage motors have no rotor windings, brushes, or slip rings — just bars and end rings — which makes them rugged and low-maintenance.</li>\n<li>Torque comes from the stator field inducing current in the rotor bars; slip is required for that induction.</li>\n<li>Speed-torque curve: locked-rotor, pull-up, breakdown, and full-load torque — pull-up torque is the acceleration bottleneck.</li>\n<li>Locked-rotor current is typically 5–8× full-load current and drives NEC Article 430 sizing.</li>\n<li>NEMA B is general purpose; C is high starting torque; D is high slip for punishing loads; wound-rotor motors trade maintenance for adjustable starting torque.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Expecting a motor to accelerate a load that needs more torque than the motor's pull-up torque. The motor will sit at low speed, draw locked-rotor current, and trip or burn out.</div>\n<p><strong>Ready-to-Work link:</strong> If you can sketch the speed-torque curve, explain locked-rotor current, and pick the right NEMA design for a loaded conveyor, you have this module. Module 5 teaches nameplates and connections.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Squirrel-cage rotor", "def": "A rotor made of conductor bars shorted by end rings, with no windings or electrical connections." },
    { "term": "Wound-rotor motor", "def": "An induction motor whose rotor has windings connected to slip rings, allowing external resistance for starting control." },
    { "term": "Locked-rotor torque", "def": "The torque a motor produces at zero speed when first energized." },
    { "term": "Pull-up torque", "def": "The lowest torque on the speed-torque curve during acceleration; the bottleneck for starting a load." },
    { "term": "Breakdown torque", "def": "The maximum torque a motor can produce before it stalls." },
    { "term": "Full-load torque", "def": "The torque a motor produces at rated speed and rated horsepower." },
    { "term": "Locked-rotor current", "def": "The high inrush current drawn at start, typically 5–8 times full-load current." },
    { "term": "NEMA design letter", "def": "A letter (A, B, C, or D) on the nameplate describing the motor's torque and slip characteristics." },
    { "term": "Slip rings", "def": "Rotating rings on a wound-rotor motor that connect the rotor windings to external resistors through brushes." },
    { "term": "End rings", "def": "The rings that short the rotor bars together at each end of a squirrel-cage rotor." },
    { "term": "Speed-torque curve", "def": "A graph of a motor's torque from standstill to full speed." },
    { "term": "Frame", "def": "The standardized physical size and mounting dimensions of a motor." },
    { "term": "Bearings", "def": "The supports that carry the motor shaft; the most common wear item in a squirrel-cage motor." },
    { "term": "Inrush current", "def": "The brief surge of current when a motor is first energized." }
  ],
  "video": {
    "title": "The Motor That Never Catches Up | Induction Motor Explained in 3D",
    "embedUrl": "https://www.youtube.com/embed/wZITqKJw-Iw",
    "note": "A 3D teardown of an induction motor — stator, 24-slot winding, squirrel-cage rotor — with slip explained visually. Watch how the rotor always trails the rotating field.",
    "more": [
      { "title": "How Does an AC Induction Motor Work? // HSC Physics", "url": "https://www.youtube.com/watch?v=KjWkYH8ghSg" },
      { "title": "DON'T SUBSCRIBE | How does an Induction Motor work?", "url": "https://www.youtube.com/watch?v=AQqyGNOP_3o" }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A 10 hp, 4-pole motor has a full-load current of 14 A. Estimate its locked-rotor current if inrush is 6 times full-load current.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Locked-rotor current ≈ 6 × FLA. Step 2: 6 × 14 A = 84 A. Step 3: The circuit protection must tolerate this brief 84 A surge while still protecting against a sustained overload.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A motor's speed-torque curve shows locked-rotor torque of 150%, pull-up torque of 120%, and breakdown torque of 200% of full-load torque. A load needs 130% torque to accelerate through the mid-speed range. Will this motor start the load?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The load needs 130% torque during acceleration. Step 2: The motor's pull-up torque is only 120% — the lowest point on its curve. Step 3: No — the motor will stall in the mid-speed range, draw locked-rotor current, and trip. A higher-torque design (such as NEMA C) is needed.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A loaded conveyor is hard to start and the old motor was a NEMA Design C. A supplier offers a Design B motor of the same horsepower at a lower price. Should you accept it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: No — check the design letter, not just the horsepower. Step 2: Design C has high starting torque for hard-to-start loads; Design B has normal starting torque. Step 3: The Design B motor may fail to break the loaded conveyor away, even though its horsepower matches.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Explain why a squirrel-cage motor needs almost no maintenance compared with a wound-rotor motor.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The squirrel-cage rotor has no windings, slip rings, or brushes — just solid bars and end rings. Step 2: There is nothing to wear except the bearings. Step 3: A wound-rotor motor has slip rings and brushes that wear and need regular service, plus external resistors.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A punch press has heavy, intermittent torque demands. Which NEMA design fits best, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: NEMA Design D. Step 2: Design D has very high starting torque and high slip (5–13%). Step 3: The high slip lets the rotor act as a cushion, absorbing the shock of the intermittent load instead of passing it all to the supply.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A motor is running at 1,750 rpm and its synchronous speed is 1,800 rpm. The load is increased and the speed falls to 1,730 rpm. Explain what happened in terms of slip and torque.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Slip rose from 50 rpm (2.8%) to 70 rpm (3.9%). Step 2: More slip means the field sweeps the rotor bars faster, inducing more rotor current. Step 3: More rotor current means more torque — the motor automatically makes more torque to match the heavier load, at the cost of a little more speed loss.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The squirrel-cage rotor has:",
      "choices": [ "Windings connected to slip rings", "Conductor bars shorted by end rings and no electrical connections", "A commutator and brushes", "Permanent magnets only" ],
      "answer": 1,
      "explanation": "Correct: (b). Bars and end rings, nothing else. (a) That describes a wound rotor. (c) That describes a DC motor. (d) That describes a permanent-magnet synchronous motor."
    },
    {
      "q": "Locked-rotor current is typically:",
      "choices": [ "Equal to full-load current", "5–8 times full-load current", "One-tenth of full-load current", "Zero until the motor is turning" ],
      "answer": 1,
      "explanation": "Correct: (b). Inrush at start is typically 5–8× FLA. (a) FLA is the running current. (c) Starting current is much larger, not smaller. (d) Current is highest at the instant of starting."
    },
    {
      "q": "Pull-up torque is important because it is:",
      "choices": [ "The maximum torque the motor can produce", "The lowest torque during acceleration — the bottleneck for starting a load", "The torque at full load", "The torque produced by the bearings" ],
      "answer": 1,
      "explanation": "Correct: (b). If the load needs more than pull-up torque, the motor stalls mid-acceleration. (a) That is breakdown torque. (c) That is full-load torque. (d) Bearings do not produce torque."
    },
    {
      "q": "A wound-rotor motor differs from a squirrel-cage motor in that it:",
      "choices": [ "Has rotor windings connected through slip rings to external resistors", "Has no rotor at all", "Runs only on single-phase power", "Cannot be reversed" ],
      "answer": 0,
      "explanation": "Correct: (a). Slip rings and external resistance give adjustable starting torque. (b) Every motor has a rotor. (c) Wound-rotor motors are three-phase. (d) They can be reversed like any three-phase motor."
    },
    {
      "q": "Which NEMA design is the general-purpose motor for pumps, fans, and conveyors?",
      "choices": [ "Design A", "Design B", "Design C", "Design D" ],
      "answer": 1,
      "explanation": "Correct: (b). Design B is the general-purpose standard. (a) Design A has higher starting current. (c) Design C is for hard-to-start loads. (d) Design D is for high-slip, punishing loads."
    },
    {
      "q": "Breakdown torque is:",
      "choices": [ "The torque at which the motor's shaft breaks", "The maximum torque the motor can produce before stalling", "The torque at zero speed", "The torque needed to break the load free" ],
      "answer": 1,
      "explanation": "Correct: (b). Breakdown torque is the peak of the speed-torque curve. (a) The shaft does not break at breakdown torque. (c) That is locked-rotor torque. (d) That is locked-rotor torque's job."
    },
    {
      "q": "The most common wear item in a squirrel-cage motor is the:",
      "choices": [ "Stator winding", "Rotor bars", "Bearings", "End rings" ],
      "answer": 2,
      "explanation": "Correct: (c). Bearings carry the shaft and wear over time. (a) Stator windings last decades unless overheated. (b) Rotor bars are solid metal and rarely fail. (d) End rings are part of the solid rotor casting."
    },
    {
      "q": "A Design D motor is chosen for a punch press mainly because of its:",
      "choices": [ "Low starting current", "High slip, which cushions intermittent shock loads", "Synchronous speed", "Lack of a rotor" ],
      "answer": 1,
      "explanation": "Correct: (b). High slip (5–13%) absorbs the shock of intermittent loads. (a) Design D does not have low starting current. (c) All induction motors have a synchronous speed. (d) Design D motors have rotors."
    }
  ],
  "studyGuide": "\n<h3>Module 4 — Three-Phase Induction Motors: Quick Reference</h3>\n<p><strong>Core idea:</strong> The stator field induces current in the rotor bars; the two fields pull the rotor around. No brushes, no slip rings, almost no maintenance.</p>\n<p><strong>Speed-torque curve:</strong> Locked-rotor (starting) · Pull-up (lowest during acceleration — the bottleneck) · Breakdown (maximum) · Full-load (rated).</p>\n<p><strong>Locked-rotor current:</strong> Typically 5–8× full-load current at start.</p>\n<p><strong>NEMA designs:</strong> B — general purpose · A — higher starting current · C — high starting torque · D — high slip for shock loads.</p>\n<p><strong>Wound rotor:</strong> Slip rings + external resistance = adjustable starting torque, with brush maintenance.</p>\n<p><strong>Self-check:</strong> Sketch the speed-torque curve and explain why a load can stall a motor mid-acceleration. If you can, you have this module.</p>\n"
};
