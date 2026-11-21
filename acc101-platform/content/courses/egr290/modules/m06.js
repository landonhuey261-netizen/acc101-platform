// egr290 — module 6. Original review content.
module.exports = {
  "number": 6,
  "slug": "digital-systems-and-plc-fundamentals",
  "title": "Digital Systems and PLC Fundamentals",
  "estTime": "3–4 hours",
  "objectives": [
    "Convert between binary, decimal, and hexadecimal and do binary arithmetic.",
    "Simplify Boolean expressions and read logic-gate and ladder-logic diagrams.",
    "Describe flip-flops, counters, and registers and what they do.",
    "Describe a PLC's hardware, scan cycle, and input/output types.",
    "Write and read ladder logic with contacts, coils, timers, and counters."
  ],
  "sections": [
    {
      "heading": "Number Systems and Boolean Algebra",
      "html": "<p>Digital systems work in <strong>binary</strong>: 101101₂ = 32 + 0 + 8 + 4 + 0 + 1 = 45 in decimal. <strong>Hexadecimal</strong> is shorthand for binary — each hex digit is four bits — so FF₁₆ = 255 and A5₁₆ = 165. An 8-bit counter counts 0 to 255 (2⁸ − 1). <strong>Two's complement</strong> represents negative numbers: invert the bits and add 1. These conversions are pure FE marks — practise them until they are automatic.</p><p><strong>Boolean algebra</strong> is the logic of digital circuits. The basic identities: A + 0 = A, A · 1 = A, A + A' = 1, A · A' = 0, and the absorption that the FE loves: A·B + A·B' = A(B + B') = A. <strong>De Morgan's laws</strong> — (A·B)' = A' + B' and (A+B)' = A'·B' — turn ANDs into ORs and back, which is how you simplify a circuit. A <strong>truth table</strong> lists every input combination and the output; with two inputs there are four rows, with three inputs eight.</p>"
    },
    {
      "heading": "Gates, Flip-Flops, and Counters",
      "html": "<p><strong>Logic gates:</strong> AND outputs 1 only when all inputs are 1; OR outputs 1 when any input is 1; NOT inverts; NAND is AND followed by NOT; XOR outputs 1 when the inputs differ. A NAND gate with both inputs 1 outputs 0. Combinational logic has no memory — the output depends only on the present inputs. <strong>Sequential logic</strong> has memory, and its building block is the <strong>flip-flop</strong>: a D flip-flop copies its D input to its Q output on the clock edge and holds it until the next edge.</p><p><strong>Counters</strong> count clock pulses: a 4-bit counter counts 0 to 15, and an 8-bit counter 0 to 255. <strong>Registers</strong> store a word of bits; a shift register moves bits along one place per clock. An <strong>ADC</strong> (analogue-to-digital converter) turns a voltage into a number: a 10-bit ADC with a 5 V reference has a resolution of 5/1,024 = 4.88 mV per count, so a 2.5 V input reads about 512 counts. The <strong>Nyquist rule</strong> says you must sample at least twice as fast as the highest frequency in the signal — a 1 kHz signal needs at least a 2 kHz sample rate.</p>"
    },
    {
      "heading": "PLC Hardware and the Scan Cycle",
      "html": "<p>A <strong>programmable logic controller (PLC)</strong> is a rugged industrial computer that reads inputs, runs a program, and drives outputs — over and over. Its hardware is the <strong>CPU</strong>, the <strong>power supply</strong>, <strong>input modules</strong> (digital and analogue), <strong>output modules</strong> (relay, transistor, analogue), and a programming terminal. Digital inputs are on/off (a pushbutton, a limit switch, a sensor); analogue inputs are continuous (a 4–20 mA temperature transmitter, a 0–10 V pressure sensor).</p><p>The PLC works in a <strong>scan cycle</strong>: (1) read the inputs, (2) execute the program from the first rung to the last, (3) write the outputs, (4) do housekeeping and repeat. The whole scan typically takes a few milliseconds. That order matters: an output cannot change until the next scan's write step, and an input that changes mid-scan is not seen until the next scan. A program that depends on the order of rungs is a program with a bug waiting to happen — write rungs so each one depends only on inputs and on coils set by earlier rungs, and document the intent.</p>"
    },
    {
      "heading": "Ladder Logic: Contacts, Coils, Timers, and Counters",
      "html": "<p><strong>Ladder logic</strong> is the PLC's native language, drawn like a relay circuit: two vertical rails, with <strong>rungs</strong> between them. An <strong>XIC</strong> (examine if closed) contact is true when its input is on; an <strong>XIO</strong> (examine if open) contact is true when its input is off; an <strong>OTE</strong> (output energize) coil turns an output on when its rung is true. Contacts in series are AND; contacts in parallel are OR. The classic <strong>seal-in (latching) circuit</strong> uses a normally-open contact in parallel with the start button so the motor stays running after the button is released, until the stop button (a normally-closed contact in series) breaks the rung.</p><p><strong>Timers:</strong> a TON (timer on-delay) starts timing when its rung goes true and sets its done bit after the preset time — a TON with a 5 s preset on a rung that goes true at t = 0 sets its done bit at t = 5 s. A TOF (timer off-delay) keeps its output on for a time after the rung goes false. <strong>Counters:</strong> a CTU (count up) increments each time its rung goes from false to true and sets its done bit at the preset — a CTU with preset 10 needs 10 false-to-true transitions. The most common PLC bug is a timer or counter that never resets: always provide a reset (RES) instruction or a rung that clears it.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Binary: 101101₂ = 45 · hex FF = 255 · 8-bit counts 0–255 · Boolean: A·B + A·B' = A · De Morgan's laws.</li><li>Gates: AND, OR, NOT, NAND, XOR. Flip-flop: memory on a clock edge. ADC: resolution = V_ref/2ⁿ. Sample at ≥ 2× the signal frequency.</li><li>PLC scan: read inputs → run program → write outputs → repeat. Inputs mid-scan wait for the next scan.</li><li>Ladder: XIC true when on, XIO true when off, OTE drives the output. Series = AND, parallel = OR. Seal-in latches a motor on.</li><li>TON delays the done bit; CTU counts false-to-true transitions; always provide a reset.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Treating an XIO contact as an output. XIC and XIO are both <em>inputs</em> examined by the rung — only OTE drives an output.</div><div class=\"callout\"><strong>Common mistake:</strong> Forgetting that a PLC output only changes at the write step of the scan, and an input only at the read step.</div><p><strong>Ready-to-Work link:</strong> If you can convert binary, simplify a Boolean expression, and read a seal-in rung, you have this module. Module 7 moves to engineering economics and professional practice.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Binary",
      "def": "Base-2 numbers: 101101₂ = 45. Each bit is a power of 2."
    },
    {
      "term": "Hexadecimal",
      "def": "Base-16 shorthand for binary; each hex digit is four bits. FF₁₆ = 255."
    },
    {
      "term": "Two's complement",
      "def": "The way negative numbers are stored in binary: invert the bits and add 1."
    },
    {
      "term": "Boolean algebra",
      "def": "The algebra of logic: AND, OR, NOT, and identities such as A·B + A·B' = A."
    },
    {
      "term": "De Morgan's laws",
      "def": "(A·B)' = A' + B' and (A+B)' = A'·B': rules for moving NOT across AND and OR."
    },
    {
      "term": "Flip-flop",
      "def": "A one-bit memory element that stores a value on a clock edge (e.g. a D flip-flop)."
    },
    {
      "term": "ADC",
      "def": "Analogue-to-digital converter: turns a voltage into a number; resolution = V_ref/2ⁿ."
    },
    {
      "term": "Nyquist rule",
      "def": "Sample at least twice as fast as the highest frequency in the signal."
    },
    {
      "term": "PLC",
      "def": "Programmable logic controller: a rugged industrial computer running a repeating scan cycle."
    },
    {
      "term": "Scan cycle",
      "def": "Read inputs → execute program → write outputs → housekeeping, repeated continuously."
    },
    {
      "term": "Ladder logic",
      "def": "The PLC's relay-style programming language: rails, rungs, contacts, and coils."
    },
    {
      "term": "XIC / XIO / OTE",
      "def": "Examine if closed (true when on), examine if open (true when off), output energize (drives an output)."
    },
    {
      "term": "TON / CTU",
      "def": "Timer on-delay (delays the done bit) and count-up counter (counts false-to-true transitions)."
    },
    {
      "term": "Seal-in circuit",
      "def": "A latching rung that keeps a motor running after the start button is released."
    }
  ],
  "video": {
    "title": "PLC Basics | Programmable Logic Controller",
    "embedUrl": "https://www.youtube.com/embed/PbAGl_mv5XI",
    "note": "RealPars on what a PLC is, what its parts are, and how it is used in industry. Watch it before you write your first rung.",
    "more": [
      {
        "title": "What Is Ladder Logic in PLC Programming?",
        "url": "https://www.youtube.com/watch?v=MK2-LD0q0kY"
      },
      {
        "title": "Read ladder diagrams like a pro in 10 minutes",
        "url": "https://www.youtube.com/watch?v=UyvAvJGWHy0"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Convert 101101₂ to decimal and FF₁₆ to decimal.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 101101₂ = 32 + 8 + 4 + 1 = 45. Step 2: FF₁₆ = 15 × 16 + 15 = 255.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Simplify A·B + A·B' and state the rule used.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Factor A: A(B + B') = A × 1 = A. Step 2: The rule is B + B' = 1 (a variable OR its complement is always 1).</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A 10-bit ADC has a 5 V reference. Find its resolution, and the count for a 2.5 V input.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Resolution = 5/1,024 = 0.00488 V = 4.88 mV per count. Step 2: 2.5/0.00488 ≈ 512 counts.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A TON timer with a 5 s preset has its rung go true at t = 0. When does its done bit turn on? A CTU with preset 10 has counted 7 pulses. How many more does it need?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The TON done bit turns on at t = 5 s. Step 2: The CTU needs 10 − 7 = 3 more false-to-true transitions.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Describe the seal-in circuit for a motor start/stop station and say what the stop button does.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The start button (normally open) is in parallel with a normally-open contact of the motor output — the seal-in — so the rung stays true after the button is released. Step 2: The stop button is a normally-closed contact in series; pressing it breaks the rung, the coil drops out, and the seal-in contact opens.</p>"
    }
  ],
  "quiz": [
    {
      "module": 6,
      "q": "What is 101101₂ in decimal?",
      "choices": [
        "45",
        "53",
        "37",
        "27"
      ],
      "answer": 0,
      "explanation": "Correct: (a). 32 + 8 + 4 + 1 = 45. (b) is wrong: that is 110101₂. (c) is wrong: that is 100101₂. (d) is wrong: that is 011011₂."
    },
    {
      "module": 6,
      "q": "What is FF₁₆ in decimal?",
      "choices": [
        "255",
        "256",
        "240",
        "15"
      ],
      "answer": 0,
      "explanation": "Correct: (a). 15 × 16 + 15 = 255. (b) is wrong: that is 100₁₆. (c) is wrong: that is F0₁₆. (d) is wrong: that is one F, not two."
    },
    {
      "module": 6,
      "q": "Simplify A·B + A·B'.",
      "choices": [
        "B",
        "A",
        "0",
        "1"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A(B + B') = A × 1 = A. (a) is wrong: B is not the result — factor out A first. (c) is wrong: the expression is not always 0. (d) is wrong: it is not always 1."
    },
    {
      "module": 6,
      "q": "A 10-bit ADC has a 5 V reference. What is its resolution?",
      "choices": [
        "5 mV",
        "4.88 mV",
        "10 mV",
        "2.5 mV"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 5/1,024 = 4.88 mV per count. (a) is wrong: that is 5/1,000, but a 10-bit ADC has 1,024 counts. (c) is wrong: that is 5/512. (d) is wrong: that is half the reference, not the resolution."
    },
    {
      "module": 6,
      "q": "What is the correct order of the PLC scan cycle?",
      "choices": [
        "Write outputs, read inputs, run program",
        "Read inputs, run program, write outputs",
        "Run program, write outputs, read inputs",
        "Read inputs, write outputs, run program"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Read inputs, execute the program, write the outputs, then housekeeping, and repeat. (a) is wrong: outputs are written after the program runs. (c) is wrong: inputs must be read before the program runs. (d) is wrong: outputs are written after the program, not before."
    },
    {
      "module": 6,
      "q": "In ladder logic, an XIO contact is true when its input is:",
      "choices": [
        "On",
        "Off",
        "Always true",
        "Changing"
      ],
      "answer": 1,
      "explanation": "Correct: (b). XIO (examine if open) is true when the input is off. (a) is wrong: that is XIC. (c) is wrong: no contact is always true. (d) is wrong: contacts examine the present state, not a change."
    },
    {
      "module": 6,
      "q": "A TON timer with a 5 s preset has its rung go true at t = 0. When does its done bit turn on?",
      "choices": [
        "Immediately",
        "At t = 5 s",
        "At t = 10 s",
        "Never"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A timer on-delay sets its done bit after the preset time has passed. (a) is wrong: that is an ordinary coil, not a TON. (c) is wrong: that is twice the preset. (d) is wrong: the done bit turns on once the preset elapses."
    },
    {
      "module": 6,
      "q": "A CTU counter with preset 10 has counted 7 pulses. How many more false-to-true transitions does it need?",
      "choices": [
        "3",
        "7",
        "10",
        "17"
      ],
      "answer": 0,
      "explanation": "Correct: (a). 10 − 7 = 3 more transitions. (b) is wrong: that is the count so far. (c) is wrong: that is the preset, not what remains. (d) is wrong: that adds the count and the preset."
    }
  ],
  "studyGuide": "\n<h3>Module 6 — Digital Systems and PLC Fundamentals: Quick Reference</h3>\n<p><strong>Core idea:</strong> Binary and Boolean algebra describe the logic; the PLC scan cycle runs it, one rung at a time.</p>\n<p><strong>Numbers:</strong> 101101₂ = 45 · FF₁₆ = 255 · 8-bit counts 0–255 · ADC resolution = V_ref/2ⁿ · sample at ≥ 2× the signal frequency.</p>\n<p><strong>Logic:</strong> A·B + A·B' = A · De Morgan: (A·B)' = A' + B' · NAND = AND then NOT.</p>\n<p><strong>PLC scan:</strong> Read inputs → run program → write outputs → repeat.</p>\n<p><strong>Ladder:</strong> XIC true when on · XIO true when off · OTE drives the output · series = AND · parallel = OR · seal-in latches.</p>\n<p><strong>Timers/counters:</strong> TON delays the done bit by the preset · CTU counts false-to-true transitions · always provide a reset.</p>\n<p><strong>Watch out:</strong> XIO is an input examination, not an output; and an output only changes at the write step.</p>\n<p><strong>Self-check:</strong> Convert 101101₂, simplify A·B + A·B', and sketch a seal-in rung without looking. If you can, you have this module.</p>\n"
};
