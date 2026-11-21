// ele107 - Module 2: DC Motors: Types, Starting & Speed Control
module.exports = {
  "number": 2,
  "slug": "dc-motors-types-starting-speed-control",
  "title": "DC Motors: Types, Starting & Speed Control",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain how a DC motor produces torque from current in a magnetic field.",
    "Describe the parts of a DC motor: armature, field, commutator, and brushes.",
    "Compare shunt, series, compound, and permanent-magnet DC motors and their speed-torque behavior.",
    "Explain why a DC motor needs a starter and how back EMF limits running current.",
    "Describe three ways to control DC motor speed: armature voltage, field weakening, and armature resistance."
  ],
  "sections": [
    {
      "heading": "How a DC Motor Turns: Force on a Current-Carrying Conductor",
      "html": "<p>A DC motor works on the <strong>motor principle</strong>: a conductor carrying current inside a magnetic field feels a force. Put a loop of wire (the armature) between the poles of a magnet, pass current through it, and one side of the loop is pushed up while the other is pushed down — the loop turns. Keep switching the current direction every half-turn and the loop keeps turning the same way. That switching job belongs to the <strong>commutator</strong>, a split ring on the shaft that the <strong>brushes</strong> ride on, reversing the armature current exactly when each coil passes the neutral point.</p>\n<p>The strength of the turning force — the <strong>torque</strong> — depends on three things: the strength of the magnetic field, the current in the armature, and the number of conductors. More current or a stronger field means more torque, which is why DC motors are so controllable: change the current and you change the torque directly. The field itself can come from permanent magnets or from field windings (electromagnets), and how those windings are connected to the armature defines the motor type.</p>\n<div class=\"callout\"><strong>Key idea:</strong> A DC motor is a force machine — current in a magnetic field makes torque. Everything else in this module is about controlling that current and that field.</div>"
    },
    {
      "heading": "The Four Types: Shunt, Series, Compound & Permanent Magnet",
      "html": "<p>In a <strong>shunt motor</strong>, the field winding is connected in parallel (in shunt) with the armature. The field current stays nearly constant as the load changes, so the speed stays nearly constant too — shunt motors have good speed regulation and are the general-purpose choice for machine tools, fans, and conveyors. In a <strong>series motor</strong>, the field is in series with the armature, so the same current flows through both. At start, the current is huge and so is the torque — series motors are the choice for cranes, hoists, and traction, where a heavy load must break away from rest. But the speed of a series motor varies wildly with load, and with no load at all it can run away to destructive speed.</p>\n<p>A <strong>compound motor</strong> has both a shunt field and a series field, combining the shunt motor's steady speed with some of the series motor's starting torque — a good compromise for presses and shears. A <strong>permanent-magnet (PM) motor</strong> uses magnets instead of a field winding: simple, efficient, and common in small motors, battery-powered equipment, and servo drives, but the field strength is fixed, so speed control is done through the armature voltage alone. Modern brushless DC (BLDC) motors replace the mechanical commutator with electronic switching, which removes brush wear entirely.</p>"
    },
    {
      "heading": "Starting: Why Back EMF Matters",
      "html": "<p>When a DC motor spins, its armature coils cut through the field and generate a voltage of their own — <strong>back EMF</strong> (counter EMF). Back EMF opposes the supply voltage, so the current the armature actually draws is (supply voltage − back EMF) / armature resistance. At full speed the back EMF is nearly as large as the supply voltage, so the running current is modest. But at the instant of starting, the motor is not turning, there is no back EMF, and the only thing limiting current is the very low resistance of the armature winding. Connected straight across the line, a DC motor would draw a destructive inrush current.</p>\n<p>That is why DC motors use a <strong>starter</strong>: a set of resistors (or, today, an electronic drive) that limits the starting current and is stepped out as the motor speeds up and back EMF builds. A three-point starter also provides no-voltage protection — if the supply fails, the starter drops out and the motor cannot restart itself unexpectedly when power returns. Never bypass a starter to \"test\" a DC motor across the line: the current spike can damage the windings, the commutator, and the supply, and it is a burn and arc hazard.</p>"
    },
    {
      "heading": "Speed Control: Voltage, Field, and Resistance",
      "html": "<p>DC motor speed is set by the balance between the supply voltage and the back EMF, and back EMF depends on speed and field strength. The most efficient way to change speed is <strong>armature voltage control</strong>: lower the voltage applied to the armature and the motor settles at a lower speed. Modern DC drives do this with electronic switching (pulse-width modulation), which wastes very little energy. The second method is <strong>field weakening</strong>: reduce the field current, and the motor must spin faster to generate the same back EMF — this gives speeds above the motor's base speed, but at reduced torque, since torque depends on field strength.</p>\n<p>The oldest method is <strong>armature resistance control</strong>: add resistance in series with the armature so some voltage is dropped in the resistor. It works, but the resistor turns the dropped power into heat, so it is wasteful and the speed regulation is poor — it is mostly a historical method now. For reversing a DC motor, reverse either the armature current or the field current, never both: reversing both leaves the direction unchanged. In practice, the armature leads are the ones swapped.</p>\n<div class=\"callout\"><strong>Common mistake:</strong> Reversing both the armature and the field and expecting the motor to reverse. The torque direction depends on the relative direction of field and armature current — flip both and nothing changes.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Torque comes from current in a magnetic field; the commutator and brushes keep the torque turning the same way.</li>\n<li>Shunt: steady speed. Series: huge starting torque, dangerous unloaded. Compound: a mix. PM: simple and efficient.</li>\n<li>Back EMF limits running current; at start there is no back EMF, so a starter is required.</li>\n<li>Speed control: armature voltage (efficient), field weakening (above base speed, less torque), armature resistance (wasteful).</li>\n<li>Reverse by swapping the armature leads or the field leads — never both.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Running a series motor with no load. With no load the current is small, the field is weak, and the motor races to destruction. Series motors always need a load attached.</div>\n<p><strong>Ready-to-Work link:</strong> If you can explain why a shunt motor holds its speed, why a series motor must never run unloaded, and why a starter is needed, you have this module. Module 3 covers single-phase AC motors.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Armature", "def": "The rotating winding of a DC motor that carries the current producing torque." },
    { "term": "Commutator", "def": "A split ring on the shaft that reverses the armature current every half-turn." },
    { "term": "Brushes", "def": "Carbon blocks that ride on the commutator and carry current to the rotating armature." },
    { "term": "Back EMF", "def": "Voltage generated in the spinning armature that opposes the supply voltage." },
    { "term": "Shunt motor", "def": "A DC motor whose field winding is in parallel with the armature; steady speed under varying load." },
    { "term": "Series motor", "def": "A DC motor whose field is in series with the armature; very high starting torque, speed varies with load." },
    { "term": "Compound motor", "def": "A DC motor with both shunt and series field windings, combining steady speed with strong starting torque." },
    { "term": "Permanent-magnet motor", "def": "A DC motor whose field comes from permanent magnets instead of a field winding." },
    { "term": "Torque", "def": "The turning force produced by a motor, measured in pound-feet or newton-meters." },
    { "term": "Starter", "def": "Equipment that limits a DC motor's starting current and steps resistance out as speed builds." },
    { "term": "Field weakening", "def": "Reducing field current to raise a DC motor's speed above its base speed, at reduced torque." },
    { "term": "Speed regulation", "def": "How much a motor's speed changes from no load to full load; smaller change means better regulation." },
    { "term": "Brushless DC (BLDC)", "def": "A DC motor in which electronic switching replaces the commutator and brushes." },
    { "term": "No-voltage protection", "def": "A starter feature that prevents a motor from restarting on its own after a power failure." }
  ],
  "video": {
    "title": "DC Motors - how do they work? COMPREHENSIVE guide to brushed DC motors",
    "embedUrl": "https://www.youtube.com/embed/upAkPSRUgqQ",
    "note": "A thorough walkthrough of brushed DC motors — the commutator, the four field types, and back EMF. Pause at each motor type and match it to the speed-torque behavior in this module.",
    "more": [
      { "title": "DC Motor, How it works?", "url": "https://www.youtube.com/watch?v=LAtPHANEfQo" },
      { "title": "Types of DC Motor | Classification, Working, and Applications", "url": "https://www.youtube.com/watch?v=Q-7Dgt-Y0pA" }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A DC motor is supplied at 120 V. Its armature resistance is 0.5 ohm. At the instant of starting (no back EMF yet), what current would flow if it were connected straight across the line?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: At start, back EMF is zero, so I = V / R. Step 2: I = 120 / 0.5 = 240 A. Step 3: That huge inrush is why a starter is required — the running current is far smaller once back EMF builds.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> The same motor is running and its back EMF is 110 V. What armature current flows now?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Net voltage across the armature resistance = supply − back EMF = 120 − 110 = 10 V. Step 2: I = 10 / 0.5 = 20 A. Step 3: Back EMF is what keeps the running current at a safe 20 A instead of the 240 A starting surge.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A crane needs to lift a heavy load from a standstill. Which DC motor type is the best fit, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A series motor. Step 2: In a series motor the field and armature carry the same current, so at start the field is at its strongest and torque is at its highest. Step 3: The load is always attached on a crane, so the runaway risk of an unloaded series motor does not apply.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A conveyor must hold nearly the same speed whether it is empty or fully loaded. Which DC motor type fits, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A shunt motor. Step 2: The shunt field is in parallel with the armature, so field strength stays nearly constant as load changes. Step 3: Constant field means the speed changes only slightly from no load to full load — good speed regulation.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> You need a DC motor to run faster than its rated base speed. Which control method do you use, and what do you give up?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Field weakening — reduce the field current. Step 2: A weaker field means the motor must spin faster to generate the same back EMF. Step 3: You give up torque, because torque depends on field strength; above base speed the motor cannot pull as hard.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A technician reverses both the armature leads and the field leads of a DC motor. What happens when it is started, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The motor runs in the same direction as before. Step 2: Torque direction depends on the relative direction of the armature current and the field. Step 3: Reversing both leaves that relationship unchanged — to reverse, swap only one of them.</p>"
    }
  ],
  "quiz": [
    {
      "q": "In a DC motor, the commutator's job is to:",
      "choices": [ "Increase the supply voltage", "Reverse the armature current every half-turn so torque stays in one direction", "Cool the armature windings", "Connect the field winding to the supply" ],
      "answer": 1,
      "explanation": "Correct: (b). The commutator reverses armature current at each half-turn. (a) The commutator does not change voltage. (c) Cooling is done by the fan, not the commutator. (d) The field connects separately from the commutator."
    },
    {
      "q": "Back EMF is:",
      "choices": [ "Voltage generated by the spinning armature that opposes the supply", "The voltage lost in the supply wires", "A fault voltage that trips the breaker", "The voltage across the brushes at start" ],
      "answer": 0,
      "explanation": "Correct: (a). Back EMF is the armature's own generated voltage opposing the supply. (b) Wire voltage drop is a different loss. (c) Back EMF is normal operation, not a fault. (d) Brush voltage is small and is not back EMF."
    },
    {
      "q": "A DC motor needs a starter mainly because:",
      "choices": [ "The field winding is too weak at start", "At start there is no back EMF, so inrush current would be enormous", "The brushes need time to warm up", "The supply voltage is too low at start" ],
      "answer": 1,
      "explanation": "Correct: (b). With no back EMF, only the low armature resistance limits current. (a) Field strength is not the issue at start. (c) Brushes do not need warming. (d) Supply voltage is normal at start."
    },
    {
      "q": "Which DC motor type has the highest starting torque?",
      "choices": [ "Shunt motor", "Series motor", "Permanent-magnet motor", "Synchronous motor" ],
      "answer": 1,
      "explanation": "Correct: (b). The series motor's field strengthens with the starting current, giving maximum torque. (a) The shunt motor has moderate starting torque. (c) PM motors have good but not the highest starting torque. (d) A synchronous motor is an AC machine, not a DC type."
    },
    {
      "q": "A series DC motor must never run without a load because:",
      "choices": [ "It will overheat from brush friction", "Its speed can rise to a destructive level", "The field will reverse itself", "The commutator will stop turning" ],
      "answer": 1,
      "explanation": "Correct: (b). With no load the current is small, the field is weak, and the motor races away. (a) Brush friction is minor. (c) The field does not reverse on its own. (d) The commutator turns with the shaft."
    },
    {
      "q": "The most energy-efficient way to control a DC motor's speed below base speed is:",
      "choices": [ "Armature resistance control", "Armature voltage control", "Adding a bigger flywheel", "Field weakening" ],
      "answer": 1,
      "explanation": "Correct: (b). Voltage control with electronic switching wastes little energy. (a) Resistance control burns power as heat. (c) A flywheel does not control speed. (d) Field weakening raises speed above base speed, not below."
    },
    {
      "q": "A shunt motor is known for:",
      "choices": [ "Very high starting torque and wild speed swings", "Nearly constant speed from no load to full load", "Running only on alternating current", "Needing no commutator" ],
      "answer": 1,
      "explanation": "Correct: (b). The constant shunt field gives good speed regulation. (a) That describes a series motor. (c) Shunt motors are DC machines. (d) A shunt motor still uses a commutator and brushes."
    },
    {
      "q": "To reverse a DC motor, you reverse:",
      "choices": [ "Both the armature and the field leads", "Either the armature leads or the field leads, but not both", "The supply polarity at the breaker only", "The direction the brushes face" ],
      "answer": 1,
      "explanation": "Correct: (b). Reversing one winding reverses the torque direction; reversing both cancels out. (a) Reversing both leaves direction unchanged. (c) Swapping supply polarity reverses both windings at once. (d) Brush direction does not set rotation direction."
    }
  ],
  "studyGuide": "\n<h3>Module 2 — DC Motors: Quick Reference</h3>\n<p><strong>Core idea:</strong> Current in a magnetic field makes torque; the commutator keeps it turning one way.</p>\n<p><strong>Types:</strong> Shunt — steady speed · Series — huge starting torque, never run unloaded · Compound — a mix · PM — simple, efficient.</p>\n<p><strong>Back EMF:</strong> Generated voltage that opposes the supply; zero at start, so a starter is required. I = (V − Eb) / R.</p>\n<p><strong>Speed control:</strong> Armature voltage (efficient, below base speed) · Field weakening (above base speed, less torque) · Armature resistance (wasteful).</p>\n<p><strong>Reverse:</strong> Swap the armature leads OR the field leads — never both.</p>\n<p><strong>Self-check:</strong> Explain why a starter is needed and which motor type fits a crane. If you can, you have this module.</p>\n"
};
