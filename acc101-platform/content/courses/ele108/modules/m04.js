// ele108 - Module 4: Start-Stop Stations & Latching Circuits
module.exports = {
  "number": 4,
  "slug": "start-stop-stations-latching-circuits",
  "title": "Start-Stop Stations & Latching Circuits",
  "estTime": "3–4 hours",
  "objectives": [
    "Draw and explain the three-wire start-stop (latching) circuit.",
    "Explain the sealing (holding) contact and why it is needed.",
    "Explain the difference between two-wire and three-wire control.",
    "Describe how multiple start and stop stations are wired together.",
    "Explain low-voltage release versus low-voltage protection."
  ],
  "sections": [
    {
      "heading": "The Three-Wire Circuit: The Heart of Motor Control",
      "html": "<p>The <strong>three-wire start-stop circuit</strong> is the single most important circuit in motor control, and nearly every other control circuit is a variation of it. It has three wires running to the start-stop station: one from the control power to the stop button, one from the stop button to the start button, and one from the start button back to the contactor coil. Press the start button (NO, momentary) and current flows through the stop button (NC), through the start button, and into the contactor coil. The coil pulls in, the main contacts close, and the motor starts. Release the start button and the motor keeps running — because of the <strong>sealing contact</strong>.</p>\n<p>The sealing contact (also called the holding contact) is an auxiliary NO contact on the contactor, wired in parallel with the start button. When the coil pulls in, the sealing contact closes and provides a second path for current to the coil, around the start button. Release the button and the coil stays energized through its own sealing contact — the circuit has latched itself in. Press the stop button and the circuit opens, the coil drops out, the sealing contact opens, and the motor stops. The motor cannot restart until someone presses start again, which is exactly the protection against automatic restart that Module 3 called for.</p>\n<div class=\"callout\"><strong>Key idea:</strong> The sealing contact is wired in parallel with the start button. Press start, the coil pulls in, the sealing contact closes, and the coil holds itself in until the stop button breaks the circuit.</div>"
    },
    {
      "heading": "Two-Wire vs Three-Wire Control",
      "html": "<p><strong>Two-wire control</strong> uses a maintained device — a selector switch, a thermostat, or a float switch — wired directly in series with the coil. Close the device and the motor runs; open it and the motor stops. It is simple, and it is right for automatic control, where the sensor should decide. Its weakness is that after a power failure, the motor restarts by itself when power returns, because the maintained device is still closed. Two-wire control is therefore used where automatic restart is acceptable — a pump controlled by a float switch, for example — and avoided where it is not.</p>\n<p><strong>Three-wire control</strong> uses momentary push buttons and a sealing contact, and it gives <strong>low-voltage protection</strong>: if the power fails, the coil drops out, the sealing contact opens, and the motor stays off when power returns until someone presses start. Two-wire control gives only <strong>low-voltage release</strong>: the motor stops when power fails, but restarts when power returns. The NEC requires low-voltage protection (three-wire control) for motors where an unexpected restart would be a hazard, and the distinction is one of the first things an inspector checks on a control panel.</p>"
    },
    {
      "heading": "Multiple Stations: Start in Parallel, Stop in Series",
      "html": "<p>Many machines have more than one start-stop station — one at each end of a conveyor, for example. The wiring rule is easy to remember: <strong>start buttons in parallel, stop buttons in series</strong>. Any start button can start the motor, because each one provides a path to the coil, so they are wired in parallel. Any stop button must be able to stop the motor, because each one must be able to break the circuit, so they are wired in series. The sealing contact is wired in parallel with all the start buttons, so it holds the coil in no matter which station started the motor.</p>\n<p>The rule generalizes: any device that must be able to start the machine goes in parallel with the start button; any device that must be able to stop the machine goes in series with the stop button. An overload relay's NC contact, an E-stop, and a safety interlock all go in series, because any one of them must be able to drop the coil out. A second start button, a remote start, or a PLC output that must be able to start the machine goes in parallel. If you can state the rule, you can wire any number of stations without memorizing a diagram.</p>"
    },
    {
      "heading": "Troubleshooting the Latching Circuit",
      "html": "<p>Two failures dominate the three-wire circuit. <strong>The motor starts but stops when you release the button:</strong> the sealing contact is not holding the coil in. Check the auxiliary contact itself — it may be burned, misadjusted, or wired to the wrong terminals — and check that the sealing contact is wired in parallel with the start button and not in series with it. A sealing contact wired in series does nothing, because opening the start button still breaks the circuit. <strong>The motor will not stop when you press stop:</strong> the stop button's NC contact may be welded shut, its wire may be shorted, or the sealing contact may be welded closed, holding the coil in through a path that bypasses the stop button. In that case the disconnect is the only safe way to stop the motor, and the contactor must be replaced before the machine is used again.</p>\n<p>When troubleshooting, work from the coil outward with a meter: is the coil getting voltage when it should be, and is it losing voltage when it should not be? A coil that has voltage but does not pull in has a failed coil or a mechanical jam; a coil that has no voltage has an open somewhere in the control circuit — a stop button, an overload contact, or a broken wire. Measure across the coil, then move one device at a time toward the power source until the voltage appears. The open is between the last point with no voltage and the first point with voltage.</p>\n<div class=\"callout\"><strong>Common mistake:</strong> Wiring the sealing contact in series with the start button instead of in parallel. In series it does nothing — the motor stops the moment you release the button — and the fault looks like a bad contactor when it is really a wiring error.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>The three-wire circuit: stop (NC) in series, start (NO) momentary, sealing contact (NO auxiliary) in parallel with the start button.</li>\n<li>The sealing contact latches the coil in after the start button is released; the stop button breaks the latch.</li>\n<li>Two-wire control (maintained device) restarts after a power failure — low-voltage release. Three-wire control does not — low-voltage protection.</li>\n<li>Multiple stations: start buttons in parallel, stop buttons in series. Anything that must stop the machine goes in series; anything that must start it goes in parallel.</li>\n<li>Won't latch: check the sealing contact and its wiring. Won't stop: check for a welded contact or a shorted stop circuit — use the disconnect.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Forgetting that the overload relay's NC contact belongs in series with the coil, like a stop button. Wired in parallel, it can never drop the contactor out, and the motor has no overload protection at all.</div>\n<p><strong>Ready-to-Work link:</strong> If you can draw the three-wire circuit from memory, explain the sealing contact, and wire two stations correctly, you have this module. Module 5 covers forward-reverse and jogging circuits.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Three-wire control", "def": "Start-stop control using momentary push buttons and a sealing contact; the motor does not restart after a power failure." },
    { "term": "Two-wire control", "def": "Control using a maintained device in series with the coil; the motor restarts automatically when power returns." },
    { "term": "Sealing contact", "def": "An auxiliary NO contact on the contactor, wired in parallel with the start button, that holds the coil in." },
    { "term": "Holding contact", "def": "Another name for the sealing contact." },
    { "term": "Latching circuit", "def": "A circuit that holds itself energized after a momentary command, until a stop command breaks it." },
    { "term": "Low-voltage protection", "def": "Control that keeps a motor off after a power failure until someone presses start (three-wire control)." },
    { "term": "Low-voltage release", "def": "Control that stops a motor on power failure but restarts it when power returns (two-wire control)." },
    { "term": "Start-stop station", "def": "A push button station with a start button (NO) and a stop button (NC)." },
    { "term": "Start buttons in parallel", "def": "The wiring rule for multiple stations: any start button can start the motor." },
    { "term": "Stop buttons in series", "def": "The wiring rule for multiple stations: any stop button can stop the motor." },
    { "term": "Welded contact", "def": "A contact that has fused shut from arcing and cannot open; a dangerous failure that must be replaced." },
    { "term": "Chatter", "def": "Rapid opening and closing of a contactor, usually from low coil voltage." },
    { "term": "Interlock", "def": "A contact or device that prevents two things from happening at the same time." },
    { "term": "Control power", "def": "The low-voltage supply (usually 120 V) that feeds the control circuit." }
  ],
  "video": {
    "title": "Basic Motor Control: 3 Wire Start Stop Circuit (updated)",
    "embedUrl": "https://www.youtube.com/embed/kHbXbK7S188",
    "note": "A step-by-step build of the three-wire start-stop circuit — watch how the sealing contact is wired in parallel with the start button, and why the motor keeps running after you let go.",
    "more": [
      { "title": "Basic Motor Control: 3 wire Start Stop Circuit", "url": "https://www.youtube.com/watch?v=6ujtUToPiZs" },
      { "title": "Introduction to the Holding Circuit", "url": "https://www.youtube.com/watch?v=q__b8BtMxuI" }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Draw the three-wire start-stop circuit in words: list the components in order from the control power to the coil.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Control power → stop button (NC) → start button (NO) → contactor coil → control power return. Step 2: The sealing contact (NO auxiliary) is wired in parallel with the start button. Step 3: The overload relay's NC contact is wired in series with the coil, like a second stop button.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A motor starts when you press the button but stops the moment you release it. What is the most likely fault?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The sealing contact is not holding the coil in. Step 2: Check the auxiliary contact — it may be burned, misadjusted, or wired in series with the start button instead of in parallel. Step 3: Fix the wiring or replace the auxiliary contact, then test the latch.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A conveyor has a start-stop station at each end. How are the two start buttons wired, and how are the two stop buttons wired?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The start buttons are wired in parallel — either one can start the motor. Step 2: The stop buttons are wired in series — either one can stop the motor. Step 3: The sealing contact is wired in parallel with both start buttons.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A pump is controlled by a float switch (two-wire control). The power fails and returns while the tank is full. What happens?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The motor restarts by itself when power returns. Step 2: The float switch is a maintained device and is still closed, so the coil energizes as soon as power is back. Step 3: This is low-voltage release, not protection — acceptable for a pump, but not for a machine where an unexpected restart is a hazard.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A motor will not stop when the stop button is pressed. What is the most likely fault, and what is the safe way to stop it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The stop button's NC contact may be welded shut, or the sealing contact may be welded closed, holding the coil in. Step 2: The safe way to stop the motor is the disconnect switch. Step 3: Do not keep pressing the button — replace the failed contactor or button before the machine is used again.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Where does the overload relay's NC contact belong in a three-wire circuit, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: In series with the contactor coil, like a stop button. Step 2: When the overload trips, its contact opens and drops the coil out, stopping the motor. Step 3: Wired in parallel it could never drop the coil out, and the motor would have no overload protection.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The sealing contact in a three-wire circuit is wired:",
      "choices": ["In series with the start button", "In parallel with the start button", "In series with the motor", "Across the supply"],
      "answer": 1,
      "explanation": "Correct: (b). Parallel with the start button, so it holds the coil in after the button is released. (a) In series it would do nothing. (c) It is a control-circuit contact, not a power contact. (d) Across the supply it would short the control circuit."
    },
    {
      "q": "Three-wire control gives low-voltage protection, which means:",
      "choices": ["The motor restarts automatically after a power failure", "The motor stays off after a power failure until someone presses start", "The motor runs on low voltage", "The control circuit has no fuse"],
      "answer": 1,
      "explanation": "Correct: (b). The sealing contact opens on power failure and the motor cannot restart itself. (a) That is two-wire control (low-voltage release). (c) Low-voltage protection is about restart behavior, not running voltage. (d) The control circuit is fused in both cases."
    },
    {
      "q": "Multiple start buttons are wired in:",
      "choices": ["Series", "Parallel", "A ring", "A star"],
      "answer": 1,
      "explanation": "Correct: (b). Parallel, so any one can start the motor. (a) Series would require all of them to be pressed at once. (c) and (d) are not control-circuit wiring rules."
    },
    {
      "q": "Multiple stop buttons are wired in:",
      "choices": ["Parallel", "Series", "A ring", "A star"],
      "answer": 1,
      "explanation": "Correct: (b). Series, so any one can stop the motor. (a) Parallel would require all of them to be pressed at once. (c) and (d) are not control-circuit wiring rules."
    },
    {
      "q": "A motor that starts but stops when you release the start button most likely has:",
      "choices": ["A failed sealing contact or sealing contact wired in series", "A blown main fuse", "A reversed motor", "A wrong frame size"],
      "answer": 0,
      "explanation": "Correct: (a). The latch is not holding the coil in. (b) A blown fuse would stop the motor from starting at all. (c) Reversal does not affect latching. (d) Frame size does not affect the control circuit."
    },
    {
      "q": "Two-wire control is appropriate where:",
      "choices": ["An unexpected restart would be a hazard", "Automatic restart after a power failure is acceptable", "The motor must never run unattended", "The operator must press start after every outage"],
      "answer": 1,
      "explanation": "Correct: (b). Two-wire control restarts automatically, so it is used where that is acceptable. (a) That needs three-wire control. (c) Unattended running is not the deciding factor. (d) That describes three-wire control."
    },
    {
      "q": "The overload relay's NC contact belongs:",
      "choices": ["In parallel with the start button", "In series with the contactor coil", "Across the motor terminals", "In the power circuit only"],
      "answer": 1,
      "explanation": "Correct: (b). In series with the coil, like a stop button. (a) In parallel it could never drop the coil out. (c) Nothing is wired across the motor terminals. (d) The overload's heaters are in the power circuit, but its contact is in the control circuit."
    },
    {
      "q": "A motor will not stop when the stop button is pressed. The safe way to stop it is:",
      "choices": ["Keep pressing the stop button harder", "Open the disconnect switch", "Pull the overload out", "Wait for the motor to burn out"],
      "answer": 1,
      "explanation": "Correct: (b). The disconnect is the safe way to remove power. (a) Pressing harder will not open a welded contact. (c) Pulling the overload out live is dangerous. (d) Waiting for burnout is not a plan."
    }
  ],
  "studyGuide": "\n<h3>Module 4 — Start-Stop Stations &amp; Latching Circuits: Quick Reference</h3>\n<p><strong>Core idea:</strong> The sealing contact, wired in parallel with the start button, latches the coil in after a momentary press.</p>\n<p><strong>Three-wire circuit:</strong> Stop (NC) in series → Start (NO) momentary → Coil, with the sealing contact (NO auxiliary) in parallel with the start button and the overload NC contact in series with the coil.</p>\n<p><strong>Two-wire vs three-wire:</strong> Two-wire (maintained device) restarts after a power failure — low-voltage release. Three-wire does not — low-voltage protection.</p>\n<p><strong>Multiple stations:</strong> Start buttons in parallel · Stop buttons in series. Anything that must stop the machine goes in series; anything that must start it goes in parallel.</p>\n<p><strong>Troubleshooting:</strong> Won't latch = sealing contact or its wiring · Won't stop = welded contact — use the disconnect.</p>\n<p><strong>Self-check:</strong> Draw the three-wire circuit from memory and explain the sealing contact. If you can, you have this module.</p>\n"
};
