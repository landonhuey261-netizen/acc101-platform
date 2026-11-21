// ele109 - Module 5: Timers & Counters in PLC Logic
module.exports = {
  "number": 5,
  "slug": "timers-counters-plc-logic",
  "title": "Timers & Counters in PLC Logic",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain the timer instructions: TON, TOF, and RTO.",
    "Describe a timer's preset, accumulated value, done bit, and timing bit.",
    "Explain the counter instructions: CTU, CTD, and CTUD.",
    "Describe a counter's preset, accumulated value, done bit, and reset.",
    "Write a timer-based sequence: a motor that starts 10 seconds after a button press."
  ],
  "sections": [
    {
      "heading": "Timers: TON, TOF & RTO",
      "html": "<p>A <strong>timer</strong> in a PLC is a software instruction that measures time. The three timer types are <strong>TON (timer on-delay)</strong>, <strong>TOF (timer off-delay)</strong>, and <strong>RTO (retentive timer on-delay)</strong>. A TON starts timing when its rung is true and sets its <strong>done bit (DN)</strong> when the <strong>accumulated value (ACC)</strong> reaches the <strong>preset (PRE)</strong>. If the rung goes false before the preset is reached, the TON resets to zero — it is non-retentive. A TOF sets its done bit immediately when its rung goes true and keeps it set for the preset time after the rung goes false — the off-delay behavior from Electrical 108, Module 6. An RTO keeps its accumulated value when its rung goes false and resumes timing from where it stopped when the rung goes true again; it is reset only by a separate RES instruction.</p>\n<p>Every timer has the same parts: a <strong>preset</strong> (the target time, in seconds or in the timer's time base), an <strong>accumulated value</strong> (how much time has elapsed), a <strong>done bit</strong> (on when ACC reaches PRE), and a <strong>timing bit</strong> (on while the timer is timing). The done bit is what the rest of the program uses — a TON's DN bit in series with a motor output is the standard way to delay a motor start. The time base matters: some timers count in 0.01 seconds, others in 0.1 or 1 second, and a preset of 100 means 1 second on a 0.01-second base but 100 seconds on a 1-second base. Always check the time base before setting a preset.</p>\n<div class=\"callout\"><strong>Key idea:</strong> TON delays after the rung goes true and resets if the rung goes false. TOF holds on after the rung goes false. RTO remembers its accumulated time. The done bit is what the program uses.</div>"
    },
    {
      "heading": "Counters: CTU, CTD & CTUD",
      "html": "<p>A <strong>counter</strong> counts events — parts passing a sensor, cycles of a machine, items in a batch. <strong>CTU (count up)</strong> adds one to its accumulated value each time its rung goes from false to true (a rising edge), and sets its done bit when ACC reaches PRE. <strong>CTD (count down)</strong> subtracts one on each rising edge and sets its done bit when ACC reaches zero. <strong>CTUD</strong> does both, with separate up and down inputs. A counter's accumulated value is held in retentive memory, so it survives a power failure, and it is cleared by a <strong>RES (reset)</strong> instruction on a separate rung — usually driven by a reset button or by the done bit itself when the batch is complete.</p>\n<p>The critical detail of counters is the <strong>rising edge</strong>: the counter counts once when its rung goes from false to true, not continuously while the rung is true. A sensor that stays on for a whole second does not count sixty times — it counts once, when it first turns on. That is why a counter's input is usually a sensor that pulses as each part passes, and why a counter driven by a rung that stays true will count only once. If a counter counts too many times, the usual cause is a bouncing sensor or a rung that flickers — and the fix is a debounce timer or a one-shot instruction, not a bigger preset.</p>"
    },
    {
      "heading": "A Timer Sequence and a Counter Program",
      "html": "<p>Here is the timer sequence: press start, motor 1 starts immediately, and motor 2 starts ten seconds later. Rung 1 is motor 1's seal-in rung. Rung 2 drives a TON with a preset of 10 seconds, using motor 1's output bit as its rung condition — the timer starts when motor 1 starts. Rung 3 drives motor 2's output with the TON's done bit in series with motor 2's seal-in, so motor 2 starts when the timer finishes. The stop button drops out both motors and resets the timer, because the timer's rung goes false. The same pattern scales to any number of stages, each with its own timer.</p>\n<p>Here is the counter program: a conveyor carries parts past a photoelectric sensor, and the conveyor must stop after 100 parts. Rung 1 is the conveyor's seal-in rung. Rung 2 is a CTU with a preset of 100, driven by the sensor's input — each part pulses the sensor once and the counter adds one. Rung 3 uses the counter's done bit to stop the conveyor: the done bit opens the seal-in rung (through an XIO of the done bit in series with the coil) and turns on a \"batch complete\" light. A reset button drives a RES instruction that clears the counter to zero, and the conveyor can run the next batch. The counter's accumulated value is visible on the HMI (Module 8) so the operator can see the batch progress.</p>"
    },
    {
      "heading": "Choosing and Troubleshooting Timers & Counters",
      "html": "<p>Choosing a timer is a matter of matching the type to the job: TON for a delay after a start, TOF for a hold-on after a stop, RTO for accumulated time across interruptions (such as total run time). Choosing a counter is a matter of counting direction and reset: CTU for counting up to a batch size, CTD for counting down from a batch size, CTUD when parts are added and removed. The preset is set from the process requirement, and the time base is checked before the preset is entered — a preset of 100 on a 0.01-second base is 1 second, not 100 seconds.</p>\n<p>Timer and counter faults are usually simple. A timer that never finishes has a preset larger than the process allows, a time base that makes the preset huge, or a rung that keeps going false and resetting it. A counter that counts too fast has a bouncing sensor or a flickering rung. A counter that never counts has its input wired to the wrong point or its rung never going true. In all cases, the programming terminal shows the timer's ACC and the counter's ACC live, so the technician can watch the values change and see exactly where the logic stops. Watch the ACC, not the wiring — the numbers tell you what the program is doing.</p>\n<div class=\"callout\"><strong>Common mistake:</strong> Setting a timer preset without checking the time base. A preset of 100 is 1 second on a 0.01-second base and 100 seconds on a 1-second base — a hundredfold error from one unchecked setting.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>TON: delays after the rung goes true, resets if the rung goes false. TOF: holds on after the rung goes false. RTO: remembers accumulated time until a RES resets it.</li>\n<li>Every timer has a preset (PRE), an accumulated value (ACC), a done bit (DN), and a timing bit (TT).</li>\n<li>CTU counts up on each rising edge and sets DN at PRE; CTD counts down to zero; CTUD does both. Counters count on the rising edge, once per false-to-true transition.</li>\n<li>A counter's ACC is retentive and is cleared by a RES instruction, usually from a reset button or from its own done bit.</li>\n<li>Timer sequences: the next stage's timer is driven by the previous stage's output. Counter programs: the sensor pulses the counter, the done bit stops the machine.</li>\n<li>Always check the timer's time base before setting a preset. Watch the ACC live to troubleshoot.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Driving a counter from a rung that stays true and expecting it to count continuously. A counter counts once per rising edge — a rung that stays true counts once, not once per scan.</div>\n<p><strong>Ready-to-Work link:</strong> If you can explain TON, TOF, and RTO and write a timer sequence and a counter program, you have this module. Module 6 covers analog inputs, outputs, and scaling.</p>"
    }
  ],
  "keyTerms": [
    { "term": "TON (timer on-delay)", "def": "A timer that sets its done bit a preset time after its rung goes true; resets if the rung goes false." },
    { "term": "TOF (timer off-delay)", "def": "A timer that sets its done bit immediately and holds it a preset time after its rung goes false." },
    { "term": "RTO (retentive timer)", "def": "A timer that keeps its accumulated value when its rung goes false, until a RES instruction resets it." },
    { "term": "Preset (PRE)", "def": "The target value of a timer or counter." },
    { "term": "Accumulated value (ACC)", "def": "The current value of a timer or counter." },
    { "term": "Done bit (DN)", "def": "The bit that turns on when a timer or counter reaches its preset." },
    { "term": "Timing bit (TT)", "def": "The bit that is on while a timer is timing." },
    { "term": "CTU (count up)", "def": "A counter that adds one on each rising edge and sets its done bit at the preset." },
    { "term": "CTD (count down)", "def": "A counter that subtracts one on each rising edge and sets its done bit at zero." },
    { "term": "CTUD", "def": "A counter with separate count-up and count-down inputs." },
    { "term": "RES (reset)", "def": "The instruction that clears a timer or counter's accumulated value to zero." },
    { "term": "Rising edge", "def": "The moment a rung or input goes from false to true; the event a counter counts." },
    { "term": "Time base", "def": "The unit of a timer's preset, such as 0.01, 0.1, or 1 second." },
    { "term": "Debounce", "def": "Filtering out the rapid on-off flicker of a mechanical contact or sensor." },
    { "term": "One-shot", "def": "An instruction that produces a single short pulse on a rising edge." }
  ],
  "video": {
    "title": "Studio 5000 Timers and Counters Explained (TON, TOF, RTO, CTU, CTD)",
    "embedUrl": "https://www.youtube.com/embed/-TY3NG71s0o",
    "note": "A thorough explanation of PLC timers and counters — TON, TOF, RTO, CTU, and CTD — with the preset, accumulated value, and done bit shown live in the programming software.",
    "more": [
      { "title": "PLC Programming Timers Counters - TON | Timer ON Instruction RSLogix Studio 5000", "url": "https://www.youtube.com/watch?v=tL7k1-c2tTI" },
      { "title": "PLC Timers & Counters   #electricalkingdom", "url": "https://www.youtube.com/watch?v=WBs8Nh7W01A" }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A TON has a preset of 100 and a time base of 0.1 seconds. How long is the delay?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Delay = preset × time base. Step 2: 100 × 0.1 = 10 seconds. Step 3: The done bit turns on 10 seconds after the rung goes true.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> The same TON has a preset of 100 but the time base is 0.01 seconds. How long is the delay now?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 100 × 0.01 = 1 second. Step 2: The same preset gives a delay one hundred times shorter. Step 3: Always check the time base before setting a preset.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A conveyor must count 100 parts and then stop. The sensor pulses once per part. Which counter do you use, what is its preset, and what does its done bit do?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A CTU (count up) with a preset of 100. Step 2: Each sensor pulse adds one to the ACC. Step 3: When ACC reaches 100, the done bit turns on and opens the conveyor's seal-in rung, stopping the conveyor and turning on a batch-complete light.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A fan must keep running for two minutes after the machine stops. Which timer do you use, and how is it wired in the program?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A TOF (timer off-delay). Step 2: The TOF's rung is driven by the machine's running bit, so its done bit is on while the machine runs. Step 3: When the machine stops, the TOF holds its done bit for two minutes, and the fan's output is driven by that done bit.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A machine's total run time must be tracked across many starts and stops, and it must survive a power failure. Which timer do you use, and how is it reset?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: An RTO (retentive timer). Step 2: It keeps its accumulated value when its rung goes false and resumes from where it stopped. Step 3: It is reset only by a RES instruction, driven by a reset button or a maintenance command.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A counter is counting twice for each part that passes the sensor. What is the most likely cause, and what is the fix?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The sensor is bouncing — its contacts flicker on and off as the part passes, giving two rising edges. Step 2: The fix is a debounce timer or a one-shot instruction that allows only one count per part. Step 3: Check the sensor's mounting and the counter's ACC live to confirm the double count.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A TON timer:",
      "choices": ["Sets its done bit immediately and holds it after the rung goes false", "Sets its done bit a preset time after its rung goes true, and resets if the rung goes false", "Remembers its accumulated value through a power failure", "Counts parts"],
      "answer": 1,
      "explanation": "Correct: (b). TON is on-delay and non-retentive. (a) That is a TOF. (c) That is an RTO. (d) Counting is a counter's job."
    },
    {
      "q": "A TOF timer is used to:",
      "choices": ["Delay a motor start", "Hold a device on for a set time after the command ends", "Count parts", "Latch an output"],
      "answer": 1,
      "explanation": "Correct: (b). TOF is off-delay — it holds on after the rung goes false. (a) Delaying a start is a TON. (c) Counting uses CTU/CTD. (d) Latching uses OTL/OTU."
    },
    {
      "q": "An RTO timer differs from a TON in that it:",
      "choices": ["Resets when its rung goes false", "Keeps its accumulated value when its rung goes false, until a RES resets it", "Has no preset", "Cannot have a done bit"],
      "answer": 1,
      "explanation": "Correct: (b). RTO is retentive. (a) That is a TON. (c) RTOs have presets. (d) RTOs have done bits."
    },
    {
      "q": "A CTU counter counts:",
      "choices": ["Continuously while its rung is true", "Once on each rising edge of its rung", "Once per scan", "Down from the preset"],
      "answer": 1,
      "explanation": "Correct: (b). Counters count on the false-to-true transition. (a) A rung that stays true counts once. (c) Counting is not per scan. (d) Counting down is a CTD."
    },
    {
      "q": "A timer with a preset of 100 and a time base of 0.1 seconds delays for:",
      "choices": ["1 second", "10 seconds", "100 seconds", "1,000 seconds"],
      "answer": 1,
      "explanation": "Correct: (b). 100 × 0.1 = 10 seconds. (a) 1 second would need a 0.01-second base. (c) 100 seconds would need a 1-second base. (d) 1,000 seconds is ten times too long."
    },
    {
      "q": "A counter's accumulated value is cleared by:",
      "choices": ["The done bit", "A RES instruction", "The scan cycle", "The power supply"],
      "answer": 1,
      "explanation": "Correct: (b). RES resets the counter to zero. (a) The done bit signals completion; it does not clear the counter. (c) The scan does not clear counters. (d) The power supply does not clear counters."
    },
    {
      "q": "A counter that counts twice per part most likely has:",
      "choices": ["A preset that is too large", "A bouncing sensor giving two rising edges per part", "A time base that is too small", "A failed output module"],
      "answer": 1,
      "explanation": "Correct: (b). Contact bounce gives extra rising edges. (a) Preset size does not cause double counting. (c) Time base is a timer setting, not a counter setting. (d) A failed output would not affect counting."
    },
    {
      "q": "The done bit (DN) of a timer turns on when:",
      "choices": ["The rung first goes true", "The accumulated value reaches the preset", "The power fails", "The program is downloaded"],
      "answer": 1,
      "explanation": "Correct: (b). DN turns on at ACC = PRE. (a) The timing bit turns on when the rung goes true. (c) Power failure does not set DN. (d) Downloading does not set DN."
    }
  ],
  "studyGuide": "\n<h3>Module 5 — Timers &amp; Counters in PLC Logic: Quick Reference</h3>\n<p><strong>Core idea:</strong> Timers measure time; counters count events. Both have a preset, an accumulated value, and a done bit.</p>\n<p><strong>Timers:</strong> TON — delays after the rung goes true, resets if the rung goes false · TOF — holds on after the rung goes false · RTO — remembers ACC until RES.</p>\n<p><strong>Counters:</strong> CTU counts up on each rising edge, DN at PRE · CTD counts down to zero · CTUD does both. ACC is retentive; RES clears it.</p>\n<p><strong>Watch out:</strong> Check the time base before setting a preset (100 × 0.01 s = 1 s; 100 × 1 s = 100 s). Counters count once per rising edge — a rung that stays true counts once.</p>\n<p><strong>Self-check:</strong> Explain TON vs TOF vs RTO and write a 100-part counter program. If you can, you have this module.</p>\n"
};
