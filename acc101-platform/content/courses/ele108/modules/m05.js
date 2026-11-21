// ele108 - Module 5: Forward-Reverse & Jogging Circuits
module.exports = {
  "number": 5,
  "slug": "forward-reverse-jogging-circuits",
  "title": "Forward-Reverse & Jogging Circuits",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain how swapping two phases reverses a three-phase motor.",
    "Draw and explain the forward-reverse circuit with two contactors.",
    "Explain electrical and mechanical interlocking and why both are used.",
    "Explain jogging (inching) and how a jog circuit differs from a latching circuit.",
    "Describe applications: hoists, conveyors, machine tools, and positioning."
  ],
  "sections": [
    {
      "heading": "Reversing a Three-Phase Motor",
      "html": "<p>A three-phase motor is reversed by swapping any two of its three supply leads, which reverses the rotation of the magnetic field (Electrical 107, Module 1). The <strong>forward-reverse circuit</strong> does that swapping with two contactors instead of by hand. The <strong>forward contactor</strong> connects the phases in the normal order (L1–T1, L2–T2, L3–T3); the <strong>reverse contactor</strong> connects them with two phases swapped (L1–T3, L2–T2, L3–T1). Each contactor has its own start button and its own sealing contact, so the motor latches in forward or in reverse just as it does in a simple start-stop circuit — but never in both directions at once.</p>\n<p>\"Never both at once\" is the whole design problem of this circuit. If both contactors closed at the same time, two phases would be shorted together through the contactors, and the result would be a violent fault. The circuit prevents that with <strong>interlocking</strong>: each contactor has an NC auxiliary contact wired in series with the other contactor's coil, so energizing one contactor opens the path to the other. Pressing reverse while the motor is running forward does nothing — the forward contactor's NC interlock contact is open, so the reverse coil cannot energize — until the motor is stopped.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Two contactors, two phases swapped on one of them, and each contactor interlocked against the other so both can never close at once.</div>"
    },
    {
      "heading": "Electrical and Mechanical Interlocking",
      "html": "<p><strong>Electrical interlocking</strong> is the NC auxiliary contacts described above: forward's NC contact in reverse's coil circuit, and reverse's NC contact in forward's coil circuit. It is cheap and effective, but it has a weakness — if a contact welds shut, the interlock fails silently. That is why forward-reverse starters also use <strong>mechanical interlocking</strong>: a physical device between the two contactors that prevents both armatures from pulling in at the same time, even if both coils are energized. The mechanical interlock is a piece of hardware, not a wire, and it cannot be defeated by a welded contact.</p>\n<p>Using both kinds of interlocking is standard practice, and it is an example of a wider principle in control design: never rely on a single device to prevent a dangerous condition. The electrical interlock stops the normal mistake — pressing the wrong button — and the mechanical interlock stops the abnormal failure — a welded contact or a wiring error. When you inspect a forward-reverse starter, check both: the NC auxiliary contacts and the mechanical interlock device between the contactors.</p>"
    },
    {
      "heading": "Jogging (Inching): Running Without Latching",
      "html": "<p><strong>Jogging</strong> (also called inching) runs a motor in short bursts for positioning — moving a machine tool a fraction of an inch, lining up a conveyor, or inching a hoist into place. A jog circuit is a start-stop circuit without the latch: the jog button energizes the coil directly, with no sealing contact, so the motor runs only while the button is held and stops the moment it is released. The simplest jog circuit is a push button wired straight to the coil; a more complete version adds a selector switch that changes the same station between RUN (latching) and JOG (non-latching) modes.</p>\n<p>Jogging has a cost that is easy to overlook: every jog is a start, and every start draws locked-rotor current and heats the motor. A motor jogged repeatedly in a short time can overheat even though it never runs continuously, because the starting current does the heating. That is why jogging is for occasional positioning, not for frequent cycling, and why a motor that is jogged heavily needs a larger frame or a reduced-voltage starter. The jog button itself is often a different color (commonly black) and is guarded so it cannot be pressed by accident.</p>"
    },
    {
      "heading": "Plugging and Why It Is Prevented",
      "html": "<p><strong>Plugging</strong> is reversing a motor while it is still running — connecting the reverse contactor while the rotor is still spinning forward. The motor becomes a brake: the reversed field fights the spinning rotor, the current surges to several times full load, and the motor stops violently. Plugging is sometimes used deliberately as a braking method on cranes and machine tools, but it is hard on the motor, the starter, and the driven machine, and it is never allowed to happen by accident. The interlocks in the forward-reverse circuit are what prevent accidental plugging: you must stop the motor before you can reverse it.</p>\n<p>Some circuits add a <strong>plugging switch</strong> (a zero-speed switch) that detects when the motor has actually stopped and only then allows the reverse contactor to energize — a speed-based interlock on top of the electrical and mechanical ones. On a hoist or a crane, the stakes are higher still: a reversing failure can drop a load, so hoist controls add brakes, limit switches, and redundant interlocks. The lesson for a beginner is simple: never bypass an interlock to make a machine more convenient. The interlock is there because the failure it prevents is worse than the inconvenience it causes.</p>\n<div class=\"callout\"><strong>Common mistake:</strong> Wiring a forward-reverse starter without the cross-connected NC interlock contacts, relying on the operator to \"never press both buttons.\" Operators press the wrong button. The interlock is what makes the mistake harmless.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Reverse a three-phase motor by swapping two phases; the forward-reverse circuit does it with two contactors, one wired with two phases swapped.</li>\n<li>Electrical interlocking: each contactor's NC auxiliary contact sits in the other contactor's coil circuit. Mechanical interlocking: a physical device prevents both armatures from pulling in.</li>\n<li>Use both interlocks — the electrical one stops the normal mistake, the mechanical one stops the abnormal failure.</li>\n<li>Jogging runs the motor only while the button is held, with no sealing contact. Repeated jogging overheats a motor because every jog is a start.</li>\n<li>Plugging (reversing a running motor) is violent braking; the interlocks prevent it from happening by accident.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Jogging a motor repeatedly to position a load and wondering why it overheats. Each jog draws locked-rotor current — jogging is for occasional positioning, not frequent cycling.</div>\n<p><strong>Ready-to-Work link:</strong> If you can explain the forward-reverse circuit, the two kinds of interlock, and how a jog circuit differs from a latching circuit, you have this module. Module 6 covers sequencing and timers.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Forward contactor", "def": "The contactor that connects the three phases in normal order for forward rotation." },
    { "term": "Reverse contactor", "def": "The contactor that connects the three phases with two swapped for reverse rotation." },
    { "term": "Electrical interlocking", "def": "NC auxiliary contacts wired so each contactor prevents the other from energizing." },
    { "term": "Mechanical interlocking", "def": "A physical device between two contactors that prevents both armatures from pulling in at once." },
    { "term": "Jogging (inching)", "def": "Running a motor in short bursts for positioning, with no sealing contact — the motor runs only while the button is held." },
    { "term": "Plugging", "def": "Reversing a motor while it is still running, using the reversed field as a brake." },
    { "term": "Plugging switch", "def": "A zero-speed switch that allows reversing only after the motor has actually stopped." },
    { "term": "Reversing starter", "def": "A starter with two contactors, one wired for forward and one for reverse rotation." },
    { "term": "Sealing contact (reverse)", "def": "Each direction in a forward-reverse circuit has its own sealing contact that latches its own contactor." },
    { "term": "Zero-speed switch", "def": "A switch that operates when a shaft stops turning; used to prevent plugging." },
    { "term": "Hoist", "def": "A machine for lifting loads, where reversing and braking controls are safety-critical." },
    { "term": "Positioning", "def": "Moving a machine a small, precise amount, usually by jogging." },
    { "term": "Cross-connected contacts", "def": "The NC auxiliary contacts of each contactor wired into the other contactor's coil circuit." },
    { "term": "Redundancy", "def": "Using two independent protections (electrical and mechanical interlocks) so one failure cannot cause the hazard." }
  ],
  "video": {
    "title": "Three-Phase Motor Forward Reverse Jog Control Circuit | Motor Control Wiring Explained Step by Step",
    "embedUrl": "https://www.youtube.com/embed/Zd5wc6QkoXE",
    "note": "A step-by-step build of a forward-reverse jog control circuit — watch where the interlock contacts go and how the jog button bypasses the sealing contact.",
    "more": [
      { "title": "Motor Control: Forward Reversing Starter", "url": "https://www.youtube.com/watch?v=fMTvZ60y0z0" },
      { "title": "Basic Motor Control- Jogging Circuit", "url": "https://www.youtube.com/watch?v=n2FYuf01Rwg" }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A forward-reverse starter has no interlock contacts wired. The operator presses the reverse button while the motor is running forward. What happens?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The reverse contactor closes while the forward contactor is still closed. Step 2: Two phases are shorted together through the contactors, causing a violent fault. Step 3: The interlock contacts exist precisely to prevent this — they must be wired before the starter is used.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Explain the difference between electrical interlocking and mechanical interlocking, and why both are used.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Electrical interlocking uses NC auxiliary contacts so each contactor blocks the other's coil. Step 2: Mechanical interlocking is a physical device that prevents both armatures from pulling in at once. Step 3: Both are used because a welded NC contact can defeat the electrical interlock silently, while the mechanical interlock cannot be defeated by a welded contact.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A machine tool operator needs to move the table a fraction of an inch at a time. Which control function is needed, and how does its circuit differ from a normal start-stop circuit?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Jogging (inching). Step 2: The jog button energizes the coil directly with no sealing contact. Step 3: The motor runs only while the button is held and stops when it is released — unlike a latching start-stop circuit, which keeps running.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A motor is jogged twenty times in two minutes and then trips its overload. The load is normal. Explain why.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Every jog is a start, and every start draws locked-rotor current. Step 2: Twenty starts in two minutes heat the motor far more than continuous running would. Step 3: The overload correctly trips on the accumulated heating — jogging is for occasional positioning, not frequent cycling.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A conveyor must run forward normally, but the operator sometimes needs to reverse it to clear a jam. Sketch in words the contactors and buttons needed.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Two contactors — forward (phases in normal order) and reverse (two phases swapped). Step 2: A forward start button with its sealing contact and a reverse start button with its sealing contact, plus one stop button in series with both coils. Step 3: NC interlock contacts cross-connected between the two coils, plus a mechanical interlock between the contactors.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is plugging, and why is it prevented from happening by accident?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Plugging is reversing a motor while it is still running, so the reversed field brakes the spinning rotor. Step 2: The current surges to several times full load and the stop is violent, stressing the motor, the starter, and the machine. Step 3: The forward-reverse interlocks prevent it by requiring the motor to stop before the reverse contactor can energize.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A three-phase motor is reversed by:",
      "choices": ["Swapping the ground wire with a phase", "Swapping any two of the three supply leads", "Increasing the frequency", "Adding a capacitor"],
      "answer": 1,
      "explanation": "Correct: (b). Swapping two phases reverses the field rotation. (a) Swapping ground with a phase is dangerous and does not reverse the motor. (c) Frequency changes speed, not direction. (d) A capacitor does not reverse a three-phase motor."
    },
    {
      "q": "In a forward-reverse starter, the reverse contactor is wired with:",
      "choices": ["The same phase order as the forward contactor", "Two phases swapped relative to the forward contactor", "Only one phase connected", "The phases in reverse alphabetical order"],
      "answer": 1,
      "explanation": "Correct: (b). Two phases are swapped on the reverse contactor. (a) The same order would run the motor forward. (c) One phase would single-phase the motor. (d) Phase order is about swapping two leads, not the alphabet."
    },
    {
      "q": "Electrical interlocking in a forward-reverse starter uses:",
      "choices": ["The main contacts of each contactor", "An NC auxiliary contact of each contactor wired in the other contactor's coil circuit", "A bigger breaker", "A second motor"],
      "answer": 1,
      "explanation": "Correct: (b). Cross-connected NC contacts block the other coil. (a) Main contacts carry motor current, not interlock logic. (c) A bigger breaker does not prevent both contactors closing. (d) A second motor is irrelevant."
    },
    {
      "q": "Mechanical interlocking is used in addition to electrical interlocking because:",
      "choices": ["It is cheaper", "A welded NC contact can silently defeat the electrical interlock, but a physical device cannot be defeated that way", "It makes the starter smaller", "It increases the motor speed"],
      "answer": 1,
      "explanation": "Correct: (b). Redundancy covers the welded-contact failure. (a) Mechanical interlocks add cost. (c) They add size, not reduce it. (d) Interlocks do not change speed."
    },
    {
      "q": "Jogging differs from normal starting in that the jog circuit has:",
      "choices": ["A sealing contact", "No sealing contact — the motor runs only while the button is held", "Two contactors", "A higher voltage"],
      "answer": 1,
      "explanation": "Correct: (b). Jogging is non-latching by design. (a) A sealing contact would make it latch like a normal start. (c) Two contactors are for reversing, not jogging. (d) Jogging uses the same control voltage."
    },
    {
      "q": "Repeated jogging of a motor can trip the overload because:",
      "choices": ["Each jog is a start and draws locked-rotor current, heating the motor", "Jogging reverses the motor", "The jog button is too small", "Jogging uses DC"],
      "answer": 0,
      "explanation": "Correct: (a). Starting current does the heating, and many starts in a short time add up. (b) Jogging does not reverse the motor. (c) Button size is irrelevant. (d) Jogging uses the same AC control."
    },
    {
      "q": "Plugging is:",
      "choices": ["Connecting a motor to a receptacle", "Reversing a motor while it is still running, using the reversed field as a brake", "Greasing the bearings", "Sealing a conduit"],
      "answer": 1,
      "explanation": "Correct: (b). Plugging brakes the motor with the reversed field. (a) That is a cord connection, not plugging. (c) Greasing is maintenance. (d) Sealing conduit is an installation task."
    },
    {
      "q": "In a forward-reverse circuit, pressing the reverse button while the motor is running forward should:",
      "choices": ["Immediately reverse the motor", "Do nothing until the motor is stopped, because the interlock blocks the reverse coil", "Trip the main breaker", "Start a second motor"],
      "answer": 1,
      "explanation": "Correct: (b). The forward contactor's NC interlock contact is open, so the reverse coil cannot energize. (a) Immediate reversal would be plugging. (c) The breaker does not trip on a blocked coil. (d) No second motor is involved."
    }
  ],
  "studyGuide": "\n<h3>Module 5 — Forward-Reverse &amp; Jogging Circuits: Quick Reference</h3>\n<p><strong>Core idea:</strong> Two contactors, two phases swapped on one of them, and each contactor interlocked against the other so both can never close at once.</p>\n<p><strong>Interlocking:</strong> Electrical — NC auxiliary contacts cross-connected between the coils · Mechanical — a physical device between the contactors. Use both.</p>\n<p><strong>Jogging:</strong> No sealing contact — the motor runs only while the button is held. Every jog is a start, so repeated jogging overheats the motor.</p>\n<p><strong>Plugging:</strong> Reversing a running motor — violent braking. The interlocks prevent it from happening by accident.</p>\n<p><strong>Self-check:</strong> Explain the forward-reverse circuit and the two kinds of interlock. If you can, you have this module.</p>\n"
};
