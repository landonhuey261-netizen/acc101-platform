// ele107 - Module 3: Single-Phase AC Motors
module.exports = {
  "number": 3,
  "slug": "single-phase-ac-motors",
  "title": "Single-Phase AC Motors",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain why a single-phase motor cannot start on its own.",
    "Describe the split-phase, capacitor-start, permanent-split-capacitor, and capacitor-start/capacitor-run starting methods.",
    "Explain the role of the starting winding, the capacitor, and the centrifugal switch.",
    "Compare shaded-pole and universal motors and their uses.",
    "Explain how to reverse a single-phase motor."
  ],
  "sections": [
    {
      "heading": "The Starting Problem: A Pulsing Field",
      "html": "<p>A single-phase supply has only one alternating current, so its magnetic field does not rotate — it pulses, growing and shrinking along one axis. A stationary rotor in a pulsing field feels equal pushes in both directions, so it just sits there and hums. Give the rotor a spin by hand in either direction and it will keep going that way, because once it is moving, the field and the rotor interact to keep it turning. But a motor that needs a push to start is useless in a refrigerator, a pump, or a furnace blower.</p>\n<p>The fix is to fake a second phase. Add a second winding — the <strong>starting (auxiliary) winding</strong> — placed 90 degrees away from the main (run) winding in the stator, and arrange for the current in it to peak at a different time than the current in the main winding. Two windings, displaced in space and out of step in time, make a field that rotates well enough to drag the rotor from a standstill. Every single-phase starting method is a different way of creating that time shift.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Single-phase motors cannot self-start because their field pulses instead of rotating. The starting winding plus a phase shift creates a rotating field just long enough to get the rotor moving.</div>"
    },
    {
      "heading": "Split-Phase and Capacitor Starting",
      "html": "<p>In a <strong>split-phase motor</strong>, the starting winding is made of thinner wire with higher resistance than the run winding, so its current peaks earlier in the cycle. That modest phase shift (about 30 degrees) is enough to start light loads such as fans and small pumps. The starting winding is disconnected by a <strong>centrifugal switch</strong> once the motor reaches about 75% of full speed; if the switch sticks closed, the thin starting winding overheats and burns out.</p>\n<p>A <strong>capacitor-start motor</strong> puts a capacitor in series with the starting winding, shifting its current by nearly 90 degrees — a much stronger rotating field and much higher starting torque, enough for compressors, air conditioners, and loaded conveyors. The capacitor and the starting winding are still switched out by the centrifugal switch at about 75% speed. A <strong>capacitor-start/capacitor-run motor</strong> adds a second, smaller run capacitor that stays in the circuit for smooth, efficient running. A <strong>permanent-split-capacitor (PSC) motor</strong> has no switch at all — one capacitor stays connected permanently — which makes it simple and reliable for fans and blowers, though its starting torque is low.</p>"
    },
    {
      "heading": "Shaded-Pole and Universal Motors",
      "html": "<p>The simplest single-phase motor is the <strong>shaded-pole motor</strong>: a copper ring (the shading coil) around part of each pole delays the field in that part, creating a weak rotating effect. It is cheap, rugged, and very low torque — good for small fans, timers, and bathroom exhaust fans, and nothing heavier. At the other end of the scale is the <strong>universal motor</strong>, which is really a series DC motor built to run on AC as well as DC. It has brushes and a commutator, very high starting torque, and very high speed — it powers drills, vacuum cleaners, blenders, and other portable tools. Its weaknesses are brush wear, noise, and speed that rises sharply when the load is removed.</p>\n<p>Between these extremes sits the workhorse of the home and the small shop: the capacitor-start motor in the air compressor, the PSC motor in the furnace blower, and the split-phase motor in the small pump. Knowing which starting method a motor uses tells you what can fail on it and what the symptoms will look like — a hum with no start usually points at the capacitor or the centrifugal switch, not at the windings.</p>"
    },
    {
      "heading": "Reversing and Troubleshooting",
      "html": "<p>To reverse a single-phase motor, reverse the connections of the starting winding relative to the run winding — swap the two start-winding leads. That flips the direction of the rotating field during starting, and the rotor follows the other way. On a PSC motor, move the capacitor to the other side of the starting winding. Never reverse a single-phase motor by swapping the supply leads: the supply leads feed both windings, so swapping them changes nothing about the field direction.</p>\n<p>Common failures follow the starting parts. A <strong>failed start capacitor</strong> (open, shorted, or bulging) leaves the motor humming and unable to start, or starting slowly with a loud hum. A <strong>centrifugal switch stuck closed</strong> keeps the starting winding energized, overheats it, and trips the overload or burns the winding. A <strong>switch stuck open</strong> means the motor never gets its starting field and will not start at all. An <strong>open run winding</strong> gives no hum and no start. Always check the capacitor and the switch before condemning the motor — and always discharge a capacitor before handling it, because a charged capacitor can deliver a painful shock even with the power off.</p>\n<div class=\"callout\"><strong>Common mistake:</strong> Replacing a start capacitor with a run capacitor (or the wrong microfarad value). Start capacitors are built for short duty and high capacitance; run capacitors are built for continuous duty. The wrong type fails fast — match the microfarad rating and the duty type on the old capacitor or the nameplate.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>A single-phase field pulses, so the motor needs a starting winding displaced in space and shifted in time to create rotation.</li>\n<li>Split-phase: resistance shift, light loads. Capacitor-start: big shift, high torque, switched out at ~75% speed.</li>\n<li>PSC: one capacitor, no switch, low starting torque. Capacitor-start/capacitor-run: best of both.</li>\n<li>Shaded-pole: tiny and cheap. Universal: brushed, fast, high torque, used in portable tools.</li>\n<li>Reverse by swapping the start-winding leads. A hum with no start usually means the capacitor or the centrifugal switch.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Swapping the supply leads to reverse a single-phase motor. It does nothing — both windings are fed from the same supply, so the field direction is unchanged.</div>\n<p><strong>Ready-to-Work link:</strong> If you can explain why a single-phase motor hums instead of starting, name the four starting methods, and say how to reverse one, you have this module. Module 4 covers three-phase induction motors.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Single-phase motor", "def": "An AC motor that runs on one alternating current; its field pulses rather than rotates." },
    { "term": "Run winding", "def": "The main stator winding of a single-phase motor, energized during all operation." },
    { "term": "Starting winding", "def": "The auxiliary winding, displaced 90 degrees from the run winding, that creates the rotating starting field." },
    { "term": "Centrifugal switch", "def": "A speed-operated switch that disconnects the starting winding at about 75% of full speed." },
    { "term": "Split-phase motor", "def": "A single-phase motor that uses a high-resistance starting winding for a small phase shift." },
    { "term": "Capacitor-start motor", "def": "A single-phase motor that uses a capacitor in the starting winding for a near-90-degree shift and high starting torque." },
    { "term": "PSC motor", "def": "Permanent-split-capacitor motor: one capacitor stays in the circuit permanently; no centrifugal switch." },
    { "term": "Capacitor-start/capacitor-run motor", "def": "A motor with a start capacitor switched out at speed and a run capacitor that stays connected." },
    { "term": "Shaded-pole motor", "def": "A simple low-torque single-phase motor that uses a copper shading ring to create a weak rotating field." },
    { "term": "Universal motor", "def": "A series-wound motor with brushes that runs on AC or DC; fast, high torque, used in portable tools." },
    { "term": "Start capacitor", "def": "A high-capacitance capacitor used only during starting, then switched out." },
    { "term": "Run capacitor", "def": "A lower-capacitance capacitor rated for continuous duty in the running circuit." },
    { "term": "Phase shift", "def": "The time difference between two alternating currents, which lets two windings make a rotating field." },
    { "term": "Humming", "def": "The sound of a motor that is energized but not turning, usually because the starting circuit has failed." }
  ],
  "video": {
    "title": "Single Phase Induction Motor (Capacitor Induction Motor or AC Motor) explained",
    "embedUrl": "https://www.youtube.com/embed/FDerrQw99KU",
    "note": "A clear animation of the capacitor motor: watch how the auxiliary winding and capacitor turn a pulsing field into a rotating one, and how the centrifugal switch takes the start capacitor out of the circuit.",
    "more": [
      { "title": "It Hums but Won't Turn: Single-Phase Motor Explained in 3D", "url": "https://www.youtube.com/watch?v=jt9yXaWw9Cs" },
      { "title": "Asynchronous Induction Motor. How does it work.", "url": "https://www.youtube.com/watch?v=N8LUOTQKXlk" }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A single-phase motor hums loudly when switched on but does not turn. You spin the shaft by hand and it starts and runs normally. What has most likely failed?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The run winding works, since the motor runs once it is moving. Step 2: The starting circuit is not making a rotating field. Step 3: The most likely fault is an open start capacitor or a centrifugal switch stuck open — check the capacitor and the switch before condemning the motor.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A compressor motor needs high starting torque to break away under load. Which starting method fits, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A capacitor-start motor. Step 2: The capacitor shifts the starting-winding current by nearly 90 degrees, making a strong rotating field. Step 3: That gives much higher starting torque than a split-phase motor, which only manages about a 30-degree shift.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A furnace blower runs all winter and rarely stops. Which single-phase motor type is the best fit, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A permanent-split-capacitor (PSC) motor. Step 2: It has no centrifugal switch to wear out and runs smoothly and efficiently. Step 3: Its low starting torque is fine, because a blower starts unloaded.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> How do you reverse a capacitor-start motor? Explain what the change does.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Swap the two leads of the starting winding (with the power off, locked out, and verified dead). Step 2: That reverses the direction of the starting field relative to the run winding. Step 3: The rotating field sweeps the other way during starting, so the rotor turns the other way.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A motor starts fine, but after a few minutes it smells hot and trips its overload. The starting winding is still energized. What failed?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The centrifugal switch is stuck closed. Step 2: It should open at about 75% speed and take the starting winding and start capacitor out of the circuit. Step 3: With the thin starting winding energized continuously it overheats — replace or repair the switch before running the motor again.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A small bathroom exhaust fan uses a shaded-pole motor. Why is that type acceptable here but not for an air compressor?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A shaded-pole motor is cheap and rugged but produces very little starting torque. Step 2: A fan blade is a light load that starts easily, so low torque is fine. Step 3: A compressor starts under load and needs high starting torque, which a shaded-pole motor cannot provide.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A single-phase motor cannot start on its own because:",
      "choices": [ "Its field pulses back and forth instead of rotating", "Single-phase power has no voltage", "The rotor is too heavy", "The capacitor is always disconnected" ],
      "answer": 0,
      "explanation": "Correct: (a). A pulsing field pushes the rotor equally in both directions. (b) Single-phase power has normal voltage. (c) Rotor weight is not the cause. (d) The capacitor is connected during starting."
    },
    {
      "q": "The starting winding is disconnected at about 75% of full speed by the:",
      "choices": [ "Run capacitor", "Centrifugal switch", "Thermal overload", "Supply breaker" ],
      "answer": 1,
      "explanation": "Correct: (b). The centrifugal switch opens by speed. (a) The run capacitor stays connected. (c) The overload protects against overcurrent, it does not switch the winding. (d) The breaker protects the circuit, not the starting winding."
    },
    {
      "q": "A capacitor-start motor has higher starting torque than a split-phase motor because:",
      "choices": [ "The capacitor makes a near-90-degree phase shift", "The capacitor increases the supply voltage", "The capacitor is bigger than the motor", "The capacitor runs the motor alone" ],
      "answer": 0,
      "explanation": "Correct: (a). A near-90-degree shift makes a much stronger rotating field. (b) The capacitor does not raise supply voltage. (c) Capacitor size is not the mechanism. (d) The capacitor only assists the starting winding."
    },
    {
      "q": "A PSC motor differs from a capacitor-start motor in that it:",
      "choices": [ "Has no centrifugal switch and the capacitor stays connected", "Has no capacitor at all", "Cannot run continuously", "Uses three phases" ],
      "answer": 0,
      "explanation": "Correct: (a). The PSC capacitor is permanently connected and there is no switch. (b) The PSC motor has a capacitor. (c) PSC motors are made for continuous running. (d) PSC motors are single-phase."
    },
    {
      "q": "To reverse a single-phase motor you:",
      "choices": [ "Swap the supply leads", "Swap the starting-winding leads", "Remove the capacitor", "Increase the frequency" ],
      "answer": 1,
      "explanation": "Correct: (b). Swapping the start winding reverses the starting field direction. (a) Swapping the supply leads changes nothing. (c) Removing the capacitor kills the starting field. (d) Frequency changes speed, not direction."
    },
    {
      "q": "A motor that hums and will not start, but runs fine if you spin the shaft by hand, most likely has:",
      "choices": [ "A burned-out run winding", "A failed start capacitor or open centrifugal switch", "A seized bearing", "A wrong supply voltage" ],
      "answer": 1,
      "explanation": "Correct: (b). The run circuit works (it runs once moving), so the starting circuit has failed. (a) A burned run winding would not run at all. (c) A seized bearing would stop hand-spinning too. (d) Wrong voltage would affect running as well."
    },
    {
      "q": "The shaded-pole motor is best suited to:",
      "choices": [ "Air compressors", "Small fans and exhaust fans", "Cranes and hoists", "Large water pumps" ],
      "answer": 1,
      "explanation": "Correct: (b). Shaded-pole motors are cheap, low-torque, and fine for light fan loads. (a) Compressors need high starting torque. (c) Cranes need series motors. (d) Large pumps need three-phase or capacitor-start motors."
    },
    {
      "q": "A universal motor is used in portable power tools because it:",
      "choices": [ "Has no brushes and runs silently", "Runs on AC or DC with high speed and high starting torque", "Never needs maintenance", "Runs at a fixed synchronous speed" ],
      "answer": 1,
      "explanation": "Correct: (b). The series-wound universal motor is fast and strong for its size. (a) It has brushes and is noisy. (c) Brushes wear and need replacement. (d) Its speed varies with load."
    }
  ],
  "studyGuide": "\n<h3>Module 3 — Single-Phase AC Motors: Quick Reference</h3>\n<p><strong>Core idea:</strong> A single-phase field pulses, so a starting winding shifted in time makes the rotating field that starts the motor.</p>\n<p><strong>Methods:</strong> Split-phase (resistance shift, light loads) · Capacitor-start (near-90° shift, high torque) · PSC (no switch, low torque) · Cap-start/cap-run (best of both).</p>\n<p><strong>Centrifugal switch:</strong> Opens at about 75% speed. Stuck closed = overheated start winding; stuck open = no start.</p>\n<p><strong>Reverse:</strong> Swap the start-winding leads. <strong>Hum, no start:</strong> Check the capacitor and the switch first.</p>\n<p><strong>Shaded-pole:</strong> Tiny loads only. <strong>Universal:</strong> Brushed, fast, portable tools.</p>\n<p><strong>Self-check:</strong> Name the four starting methods and explain the hum-but-won't-start symptom. If you can, you have this module.</p>\n"
};
