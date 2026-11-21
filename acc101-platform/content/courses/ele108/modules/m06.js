// ele108 - Module 6: Sequencing & Timers
module.exports = {
  "number": 6,
  "slug": "sequencing-timers",
  "title": "Sequencing & Timers",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain why machines need sequencing and give examples.",
    "Describe on-delay and off-delay timers and their contact behavior.",
    "Draw a simple two-motor sequence: motor 2 starts only after motor 1 is running.",
    "Explain timer contact symbols: timed open, timed closed, instantaneous.",
    "Describe star-delta starting as a timed sequence."
  ],
  "sections": [
    {
      "heading": "Why Machines Run in Sequence",
      "html": "<p>Most machines are not one motor — they are several motors that must run in the right order. A conveyor line must start from the discharge end and work backward, so material never piles up on a stopped belt. A dust collector must start before the machine that makes the dust. A cooling pump must run before the equipment it cools is loaded. <strong>Sequencing</strong> is the control logic that enforces that order, and it is built from the same contacts and coils as the circuits in Modules 4 and 5, plus <strong>timers</strong> that add delays.</p>\n<p>The simplest sequence uses the auxiliary contacts of one contactor in the coil circuit of the next: motor 2's coil circuit runs through an NO auxiliary contact of motor 1's contactor, so motor 2 cannot start until motor 1 is actually running — not just commanded to run, but pulled in. That distinction matters: if motor 1's contactor fails to pull in, motor 2 stays off too, instead of running into a machine that is not ready. Sequencing by contactor state is more reliable than sequencing by push-button order, because it checks the real state of the machine.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Sequence by the machine's actual state, not by the operator's button presses. Motor 2's coil runs through motor 1's auxiliary contact, so motor 2 can only start when motor 1 is really running.</div>"
    },
    {
      "heading": "Timers: On-Delay and Off-Delay",
      "html": "<p>A <strong>timer</strong> is a relay whose contacts change state after a set delay. An <strong>on-delay timer</strong> starts timing when its coil is energized and changes its contacts only after the set time has passed — if the coil drops out before the time is up, the timer resets without ever operating. An <strong>off-delay timer</strong> changes its contacts immediately when its coil is energized and holds them in that state for a set time after the coil drops out. On-delay is the common one for sequencing (wait, then start the next motor); off-delay is the common one for holding something on after the command ends (keep a fan running for two minutes after the machine stops, to cool it down).</p>\n<p>Timer contacts come in four kinds, and the symbols tell you the behavior. A <strong>timed-open (TO)</strong> contact opens after the delay; a <strong>timed-closed (TC)</strong> contact closes after the delay; an <strong>instantaneous</strong> contact changes state immediately with the coil, like a normal relay contact. A timer usually has both timed and instantaneous contacts, and the schematic shows which is which. The most common wiring mistake is using a timed contact where an instantaneous one is needed, or the reverse — read the contact's symbol, not just its terminal number.</p>"
    },
    {
      "heading": "A Two-Motor Sequence with a Timer",
      "html": "<p>Here is the classic sequence: press start, motor 1 starts immediately, and motor 2 starts ten seconds later. The start button energizes motor 1's contactor and the on-delay timer's coil at the same time. Motor 1 pulls in and seals itself. The timer counts ten seconds, then its timed-closed contact closes and energizes motor 2's contactor, which seals itself. The stop button drops out both contactors and the timer. If the operator presses start again, the whole sequence repeats from the beginning, because the timer reset when its coil dropped out.</p>\n<p>The same pattern scales to any number of motors: each stage's timer is started by the previous stage's contactor, and each stage seals itself in. The delays are chosen for the process — a conveyor needs a few seconds between belts, a star-delta starter needs a few seconds for the motor to reach speed before switching from star to delta (see Module 8), and a compressor needs minutes of delay before it is allowed to restart. The timer's dial is set in the field, and the setting is written on the panel schedule so the next person knows what it is and why.</p>"
    },
    {
      "heading": "Anti-Short-Cycle Protection and Other Timer Jobs",
      "html": "<p>One of the most valuable timer jobs is <strong>anti-short-cycle protection</strong> for compressors and refrigeration equipment. A compressor that stops and restarts immediately, while its pressures are still unequalized, starts against a heavy load, draws excessive current, and can stall or burn out. An off-delay or on-delay timer forces a waiting period — typically three to five minutes — after a stop before the compressor is allowed to start again. The timer is wired so that the start command cannot reach the contactor coil until the delay has expired, and the operator's repeated pressing of the start button cannot override it.</p>\n<p>Timers do other jobs too: a <strong>flasher</strong> timer cycles an alarm light on and off; a <strong>repeat-cycle</strong> timer turns a device on and off at regular intervals, such as a lubrication pump; and an <strong>interval</strong> timer runs a device for a fixed time after a trigger, such as a stairwell light. All of them are the same device with different contact behavior, and the catalog description — on-delay, off-delay, interval, repeat-cycle — tells you which behavior you are buying. When a timer is replaced, the type and the time range must match, not just the coil voltage.</p>\n<div class=\"callout\"><strong>Common mistake:</strong> Replacing a failed on-delay timer with an off-delay timer because the coil voltage matches. The contact behavior is opposite, and the sequence will run backwards — motor 2 will start immediately and motor 1 will wait, or the fan will never run its cooldown.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Sequencing enforces the right running order: conveyor from the discharge end back, dust collector before the machine, cooling before load.</li>\n<li>Sequence by contactor state: motor 2's coil runs through motor 1's auxiliary contact, so motor 2 starts only when motor 1 is really running.</li>\n<li>On-delay timers change contacts after a set time from energizing; off-delay timers hold their contacts for a set time after de-energizing.</li>\n<li>Timer contacts: timed-open, timed-closed, and instantaneous — read the symbol, not just the terminal number.</li>\n<li>Anti-short-cycle timers force a waiting period before a compressor may restart, protecting it from starting against unequalized pressure.</li>\n<li>When replacing a timer, match the type and the time range, not just the coil voltage.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Sequencing by push-button order instead of by contactor state. If motor 1 fails to pull in, a button-ordered sequence starts motor 2 anyway — into a machine that is not ready.</div>\n<p><strong>Ready-to-Work link:</strong> If you can explain on-delay versus off-delay and describe a two-motor timed sequence, you have this module. Module 7 covers ladder diagrams.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Sequencing", "def": "Control logic that makes motors and devices run in the right order." },
    { "term": "Timer", "def": "A relay whose contacts change state after a set delay." },
    { "term": "On-delay timer", "def": "A timer that changes its contacts a set time after its coil is energized." },
    { "term": "Off-delay timer", "def": "A timer that changes its contacts immediately on energizing and holds them a set time after de-energizing." },
    { "term": "Timed-open (TO) contact", "def": "A timer contact that opens after the set delay." },
    { "term": "Timed-closed (TC) contact", "def": "A timer contact that closes after the set delay." },
    { "term": "Instantaneous contact", "def": "A timer contact that changes state immediately with the coil, like a normal relay contact." },
    { "term": "Anti-short-cycle protection", "def": "A timer that forces a waiting period before a compressor may restart." },
    { "term": "Flasher timer", "def": "A timer that cycles a device on and off repeatedly, such as an alarm light." },
    { "term": "Interval timer", "def": "A timer that runs a device for a fixed time after a trigger." },
    { "term": "Repeat-cycle timer", "def": "A timer that turns a device on and off at regular intervals." },
    { "term": "Time range", "def": "The adjustable delay range of a timer, such as 0.1–10 seconds or 1–60 minutes." },
    { "term": "Dwell", "def": "The waiting period imposed by a timer between two operations." },
    { "term": "Cascade", "def": "A sequence in which each stage starts the next, like a chain." }
  ],
  "video": {
    "title": "Introduction to Timers and Timer Contacts",
    "embedUrl": "https://www.youtube.com/embed/9vFyGuTZ7P0",
    "note": "A clear introduction to timer contacts — timed open, timed closed, and instantaneous — with the symbols and the behavior of each type explained on real devices.",
    "more": [
      { "title": "ON DELAY VS OFF DELAY TIMER #timer #automation #delay #electronics #electrical #controlcircuit #mcb", "url": "https://www.youtube.com/watch?v=2QxCT8KW-RI" },
      { "title": "On delay timing control circuits", "url": "https://www.youtube.com/watch?v=RkVp8fsdT_A" }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A conveyor line has three belts. Belt 3 (discharge) must start first, then belt 2, then belt 1. How would you wire the sequence using auxiliary contacts?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Belt 3's contactor is started by the start button and seals itself. Step 2: Belt 2's coil circuit runs through an NO auxiliary contact of belt 3's contactor, so belt 2 can only start when belt 3 is running. Step 3: Belt 1's coil circuit runs through an NO auxiliary contact of belt 2's contactor. The sequence is enforced by the contactors' real states.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A fan must keep running for two minutes after the machine it cools is stopped. Which timer type do you use, and how is it wired?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: An off-delay timer. Step 2: Its contacts close immediately when the machine runs, so the fan runs with the machine. Step 3: When the machine stops, the timer holds its contacts closed for two minutes, then opens them and stops the fan.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Motor 2 must start ten seconds after motor 1. Which timer type do you use, and what starts the timer?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: An on-delay timer. Step 2: The timer coil is energized when motor 1 starts (in parallel with motor 1's coil, or through motor 1's auxiliary contact). Step 3: After ten seconds its timed-closed contact closes and energizes motor 2's contactor.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A compressor's start button is pressed repeatedly by an impatient operator. Why does the compressor still not start for five minutes after it stopped?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Anti-short-cycle protection — a timer forces a waiting period after a stop. Step 2: The timer blocks the start command from reaching the contactor coil until the delay expires. Step 3: Repeated pressing cannot override the timer, which protects the compressor from starting against unequalized pressure.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A timer is replaced with one of the same coil voltage but the sequence now runs backwards — the second motor starts immediately and the first motor waits. What went wrong?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The replacement timer is the wrong type — probably an off-delay timer where an on-delay timer belonged. Step 2: An off-delay contact closes immediately on energizing, so motor 2 starts at once. Step 3: Replace it with the correct type (on-delay) and the correct time range, not just the correct coil voltage.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Why is it better to sequence motor 2 through motor 1's auxiliary contact than to have the operator press two start buttons in order?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The auxiliary contact reflects motor 1's real state — it only closes when motor 1's contactor has actually pulled in. Step 2: If motor 1 fails to start, motor 2 stays off instead of running into a machine that is not ready. Step 3: Button order relies on the operator and cannot detect a failure.</p>"
    }
  ],
  "quiz": [
    {
      "q": "An on-delay timer changes its contacts:",
      "choices": ["Immediately when its coil is energized", "A set time after its coil is energized", "A set time after its coil is de-energized", "Only when the power fails"],
      "answer": 1,
      "explanation": "Correct: (b). On-delay waits, then operates. (a) That is an instantaneous contact. (c) That is an off-delay timer. (d) Timers do not operate on power failure."
    },
    {
      "q": "An off-delay timer is used to:",
      "choices": ["Start a motor after a delay", "Hold a device on for a set time after the command ends", "Reverse a motor", "Measure motor speed"],
      "answer": 1,
      "explanation": "Correct: (b). Off-delay holds the contacts after de-energizing — for example, a cooldown fan. (a) That is an on-delay timer. (c) Reversing uses a reversing starter. (d) Speed is measured by a tachometer."
    },
    {
      "q": "To make motor 2 start only after motor 1 is running, motor 2's coil circuit should run through:",
      "choices": ["Motor 1's start button", "An NO auxiliary contact of motor 1's contactor", "Motor 1's overload heater", "The main breaker"],
      "answer": 1,
      "explanation": "Correct: (b). The auxiliary contact proves motor 1 is actually running. (a) The start button only proves the operator pressed it. (c) The heater is in the power circuit. (d) The breaker is common to both motors."
    },
    {
      "q": "A conveyor line should be started:",
      "choices": ["From the feed end first", "From the discharge end first, working backward", "All belts at the same instant", "Only one belt at a time, manually"],
      "answer": 1,
      "explanation": "Correct: (b). Starting from the discharge end prevents material piling up on a stopped belt. (a) Starting from the feed end piles material onto stopped belts. (c) Simultaneous starting defeats the sequence. (d) Manual single-belt starting is slow and error-prone."
    },
    {
      "q": "Anti-short-cycle protection for a compressor:",
      "choices": ["Lets the compressor restart immediately", "Forces a waiting period before the compressor may restart", "Increases the compressor's speed", "Bypasses the overload"],
      "answer": 1,
      "explanation": "Correct: (b). The timer blocks restart until pressures equalize. (a) Immediate restart is what it prevents. (c) It does not change speed. (d) It does not bypass protection."
    },
    {
      "q": "A timed-closed (TC) contact:",
      "choices": ["Opens after the delay", "Closes after the delay", "Is always closed", "Closes immediately"],
      "answer": 1,
      "explanation": "Correct: (b). Timed-closed closes after the delay. (a) That is a timed-open contact. (c) Always closed is not a timer contact. (d) Immediate closing is an instantaneous contact."
    },
    {
      "q": "When replacing a timer, you must match the:",
      "choices": ["Coil voltage only", "Type (on-delay/off-delay) and the time range, as well as the coil voltage", "Color of the timer", "Size of the panel"],
      "answer": 1,
      "explanation": "Correct: (b). Type and time range determine the behavior; coil voltage alone is not enough. (a) Coil voltage alone can give the opposite behavior. (c) Color is irrelevant. (d) Panel size is irrelevant."
    },
    {
      "q": "A repeat-cycle timer is used to:",
      "choices": ["Start a motor once", "Turn a device on and off at regular intervals", "Stop a motor permanently", "Measure voltage"],
      "answer": 1,
      "explanation": "Correct: (b). Repeat-cycle timers cycle a device, such as a lubrication pump. (a) A single start needs no timer. (c) Stopping permanently needs a stop button. (d) Voltage is measured by a voltmeter."
    }
  ],
  "studyGuide": "\n<h3>Module 6 — Sequencing &amp; Timers: Quick Reference</h3>\n<p><strong>Core idea:</strong> Sequence by the machine's actual state — motor 2's coil runs through motor 1's auxiliary contact.</p>\n<p><strong>Timers:</strong> On-delay — contacts change a set time after energizing · Off-delay — contacts hold a set time after de-energizing.</p>\n<p><strong>Contacts:</strong> Timed-open (TO) · Timed-closed (TC) · Instantaneous. Read the symbol, not just the terminal number.</p>\n<p><strong>Anti-short-cycle:</strong> A timer forces a waiting period before a compressor may restart.</p>\n<p><strong>Replacing a timer:</strong> Match the type and the time range, not just the coil voltage.</p>\n<p><strong>Self-check:</strong> Explain on-delay vs off-delay and describe a two-motor timed sequence. If you can, you have this module.</p>\n"
};
