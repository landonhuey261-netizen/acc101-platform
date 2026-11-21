// egr110 - Module 8: Combinational Logic: Adders, Multiplexers, Decoders
module.exports = {
  "number": 8,
  "slug": "combinational-logic",
  "title": "Combinational Logic: Adders, Multiplexers, Decoders",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain the difference between combinational and sequential logic.",
    "Build a half adder and a full adder from gates.",
    "Explain how a multiplexer selects one of several inputs.",
    "Explain how a decoder turns a binary code into one active output.",
    "Design a small combinational circuit from a truth table."
  ],
  "sections": [
    {
      "heading": "Combinational Logic: Output Depends Only on Inputs",
      "html": "<p>A combinational circuit's output depends only on its current inputs — there is no memory and no clock. Give it the same inputs and you always get the same output, instantly (apart from tiny gate delays). Adders, multiplexers, decoders, and comparators are all combinational. The next module adds memory, which is what turns combinational blocks into computers.</p>\n<p>The design method from the last module still applies: write the truth table, build the sum-of-products expression, simplify, and draw the gates. The circuits in this module are bigger, but each one is just a truth table turned into gates. Once you can design one combinational block, you can design them all.</p>\n"
    },
    {
      "heading": "Half Adder and Full Adder",
      "html": "<p>A half adder adds two single bits. Its sum output is A XOR B, and its carry output is A AND B: 0+0 gives sum 0, carry 0; 1+1 gives sum 0, carry 1. It is called a half adder because it cannot accept a carry in from a previous column — and real addition needs that, because adding multi-bit numbers produces carries that must be passed along.</p>\n<p>A full adder adds three bits: A, B, and a carry-in. Its sum is A XOR B XOR Cin, and its carry-out is 1 when two or more of the three inputs are 1. Chain full adders together — the carry-out of one feeding the carry-in of the next — and you have a ripple-carry adder that adds numbers of any width. That chain of adders is the heart of every computer's arithmetic unit, and it is built from the gates you already know.</p>\n"
    },
    {
      "heading": "Multiplexers: Choosing One Input",
      "html": "<p>A multiplexer (mux) is a switch that selects one of several inputs and passes it to the output, controlled by select lines. A 2-to-1 mux has two data inputs, one select line, and one output: select 0 passes input A, select 1 passes input B. A 4-to-1 mux has four inputs and two select lines, and the two-bit select code picks which input gets through.</p>\n<p>Multiplexers are everywhere in digital design: they choose which register feeds the arithmetic unit, which sensor a microcontroller reads, and which data stream goes to a display. A demultiplexer does the reverse, routing one input to one of several outputs. If you can read a mux truth table, you can follow data flowing through almost any digital system.</p>\n"
    },
    {
      "heading": "Decoders: Turning a Code into One Hot Output",
      "html": "<p>A decoder takes a binary code on its inputs and activates exactly one of its outputs — the one that matches the code. A 2-to-4 decoder takes two input bits and has four outputs: input 00 activates output 0, 01 activates output 1, 10 activates output 2, and 11 activates output 3. Only one output is active at a time, which is why decoders are also called one-hot circuits.</p>\n<p>Decoders select things: which memory chip responds to an address, which digit of a display lights up, which row of a keypad is being scanned. The seven-segment decoder is the most familiar one — it turns a four-bit binary digit into the seven signals that light the segments of a numeric display. Every calculator and microwave display uses one.</p>\n"
    },
    {
      "heading": "Putting It Together and Common Mistakes",
      "html": "<p>A small design problem shows the method in full. Suppose a circuit must output 1 when a two-bit number is 2 or 3 (binary 10 or 11) — that is, when the high bit A is 1 regardless of B. The truth table gives output 1 for rows 10 and 11, so the sum of products is A·B̄ + A·B, which simplifies to A·(B̄ + B) = A·1 = A. The whole circuit is just a wire from A — the simplest possible answer, found by doing the algebra instead of building gates for every term.</p>\n<p><p><strong>Takeaways:</strong><ul><li>Combinational outputs depend only on current inputs — no memory.</li><li>Half adder: sum = A XOR B, carry = A AND B. Full adder adds a carry-in.</li><li>A mux selects one input with select lines; a decoder activates one output per code.</li><li>Always simplify the sum-of-products expression before drawing gates.</li></ul></p>\n<p><strong>Common mistake:</strong> Using a half adder where a full adder is needed. Any column beyond the first needs a carry-in, so multi-bit adders are built from full adders (with a half adder only for the first column).</p>\n<p><strong>Common mistake:</strong> Forgetting that a decoder activates exactly one output. If two outputs are active, something is wired wrong.</p>\n<p><strong>Ready check:</strong> If you can build a full adder, explain a 4-to-1 mux, and simplify a two-bit design to its simplest form, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Combinational logic",
      "def": "Logic whose output depends only on its current inputs, with no memory and no clock."
    },
    {
      "term": "Sequential logic",
      "def": "Logic whose output depends on its inputs and on its past history, using memory elements."
    },
    {
      "term": "Half adder",
      "def": "A circuit that adds two bits: sum = A XOR B, carry = A AND B, with no carry-in."
    },
    {
      "term": "Full adder",
      "def": "A circuit that adds three bits (A, B, and carry-in), producing a sum and a carry-out."
    },
    {
      "term": "Ripple-carry adder",
      "def": "A multi-bit adder made by chaining full adders so each carry feeds the next column."
    },
    {
      "term": "Carry-in (Cin)",
      "def": "The carry bit coming into an adder stage from the previous, less significant column."
    },
    {
      "term": "Carry-out (Cout)",
      "def": "The carry bit produced by an adder stage, passed to the next, more significant column."
    },
    {
      "term": "Multiplexer (mux)",
      "def": "A circuit that selects one of several inputs and passes it to the output, chosen by select lines."
    },
    {
      "term": "Demultiplexer",
      "def": "A circuit that routes one input to one of several outputs, chosen by select lines."
    },
    {
      "term": "Select lines",
      "def": "The control inputs of a multiplexer or demultiplexer that choose which channel is active."
    },
    {
      "term": "Decoder",
      "def": "A circuit that activates exactly one output for each binary code on its inputs."
    },
    {
      "term": "One-hot",
      "def": "A pattern where exactly one signal is active at a time, as in a decoder's outputs."
    },
    {
      "term": "Seven-segment decoder",
      "def": "A decoder that turns a four-bit binary digit into the signals that light a seven-segment display."
    },
    {
      "term": "Arithmetic logic unit (ALU)",
      "def": "The part of a processor that does arithmetic and logic, built from adders, multiplexers, and gates."
    }
  ],
  "video": {
    "title": "Learn how computers add numbers and build a 4 bit adder circuit",
    "embedUrl": "https://www.youtube.com/embed/wvJc9CZcvBc",
    "note": "A hands-on build of a 4-bit adder from half and full adders, with the carry chain shown clearly. Watch how each carry feeds the next stage, then work out 1010 + 0111 on paper and compare with the video's result.",
    "more": [
      {
        "title": "Half Adder Circuit and its Construction",
        "url": "https://www.youtube.com/watch?v=q1bAi25Zva4"
      },
      {
        "title": "Full Adder Explained: Binary Addition Simplified in Under 5 Minutes | Digital Electronics Ep 19",
        "url": "https://www.youtube.com/watch?v=m0C3-JWWvcc"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A half adder has inputs A = 1 and B = 1. What are the sum and carry outputs? Explain using the XOR and AND rules.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Sum = A XOR B = 1 XOR 1 = 0, because XOR is 1 only when the inputs differ. Step 2: Carry = A AND B = 1 AND 1 = 1, because AND is 1 when both inputs are 1. Step 3: 1 + 1 in binary is 10 — sum 0, carry 1. A good answer gives both outputs and the gate rules.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A full adder has A = 1, B = 0, and carry-in = 1. Work out the sum and carry-out, showing the steps.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Sum = A XOR B XOR Cin = 1 XOR 0 XOR 1 = 0 (1 XOR 0 = 1, then 1 XOR 1 = 0). Step 2: Carry-out is 1 when two or more inputs are 1 — here A and Cin are 1, so carry-out = 1. Step 3: 1 + 0 + 1 = 10 in binary: sum 0, carry 1. A good answer shows the XOR chain and the carry rule.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A 4-to-1 multiplexer has inputs D0 = 0, D1 = 1, D2 = 1, D3 = 0 and select lines S1S0 = 10. What is the output, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Select code 10 (binary 2) chooses input D2. Step 2: D2 = 1, so the output is 1. Step 3: The other inputs are ignored — a mux passes only the selected one. A good answer names the selected input and its value.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A 2-to-4 decoder has inputs 01. Which output is active, and what does “one-hot” mean here?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Input 01 is binary 1, so output 1 is active and outputs 0, 2, and 3 are inactive. Step 2: “One-hot” means exactly one output is active at a time. A good answer names the active output and explains one-hot.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Add the 4-bit binary numbers 1011 (11) and 0110 (6) using a ripple-carry adder on paper, showing each column's sum and carry.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Column 0: 1 + 0 = 1, carry 0. Step 2: Column 1: 1 + 1 = 0, carry 1. Step 3: Column 2: 0 + 1 + carry 1 = 0, carry 1. Step 4: Column 3: 1 + 0 + carry 1 = 0, carry 1. Step 5: Result is 10001 (17), and 11 + 6 = 17 checks out. A good answer shows every column and the decimal check.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A circuit must output 1 when a two-bit number AB is 2 or 3 (binary 10 or 11). Write the sum of products, simplify it, and say what the circuit really is.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The 1-rows are 10 and 11, giving A·B̄ + A·B. Step 2: Factor out A: A·(B̄ + B) = A·1 = A. Step 3: The circuit is just a wire from A — no gates at all. A good answer shows the factoring and the surprising simple result.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What makes a circuit combinational rather than sequential?",
      "choices": [
        "It has a clock signal",
        "Its output depends only on its current inputs, with no memory",
        "It uses only NAND gates",
        "It can only add numbers"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Combinational logic has no memory: same inputs always give the same output. (a) is wrong: clocks belong to sequential circuits. (c) is wrong: any gates can be combinational. (d) is wrong: multiplexers and decoders are combinational too."
    },
    {
      "q": "A half adder has inputs A = 1 and B = 1. What are its sum and carry outputs?",
      "choices": [
        "Sum 1, carry 0",
        "Sum 0, carry 1",
        "Sum 1, carry 1",
        "Sum 0, carry 0"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Sum = 1 XOR 1 = 0, carry = 1 AND 1 = 1 — that is 1 + 1 = 10 in binary. (a) is the result for 1 + 0. (c) would be 1 + 1 = 11, which is wrong. (d) is the result for 0 + 0."
    },
    {
      "q": "A full adder differs from a half adder because it…",
      "choices": [
        "Has a carry-in input as well as A and B",
        "Uses only one gate",
        "Cannot produce a carry-out",
        "Works with decimal numbers"
      ],
      "answer": 0,
      "explanation": "Correct: (a). A full adder adds three bits: A, B, and carry-in. (b) is wrong: a full adder uses several gates. (c) is wrong: it does produce a carry-out. (d) is wrong: adders work in binary."
    },
    {
      "q": "A 4-to-1 multiplexer has select lines S1S0 = 10 and inputs D0 = 0, D1 = 1, D2 = 1, D3 = 0. What is the output?",
      "choices": [
        "0",
        "1",
        "It depends on D0",
        "Both 0 and 1"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Select 10 chooses D2, which is 1. (a) would be the answer if D2 were 0 or if D0 were selected. (c) is wrong: D0 is only selected when the code is 00. (d) is wrong: a mux has one output value."
    },
    {
      "q": "A 2-to-4 decoder has inputs 01. Which output is active?",
      "choices": [
        "Output 0",
        "Output 1",
        "Output 2",
        "Output 3"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Input 01 is binary 1, so output 1 is active. (a) is for input 00. (c) is for input 10. (d) is for input 11."
    },
    {
      "q": "In a ripple-carry adder, what does the carry-out of one full adder feed?",
      "choices": [
        "The sum output of the next adder",
        "The carry-in of the next, more significant adder",
        "The power supply",
        "The select lines of a mux"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Each carry feeds the next column's carry-in, rippling from least to most significant bit. (a) is wrong: the sum is the adder's own output. (c) is wrong: carries are signals, not power. (d) is wrong: mux select lines are separate control signals."
    },
    {
      "q": "A full adder has A = 1, B = 0, Cin = 1. What are the sum and carry-out?",
      "choices": [
        "Sum 0, carry 1",
        "Sum 1, carry 0",
        "Sum 1, carry 1",
        "Sum 0, carry 0"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Sum = 1 XOR 0 XOR 1 = 0, and two inputs are 1, so carry-out = 1. (b) is the result for A = 1, B = 0, Cin = 0. (c) would need all three inputs 1. (d) is the result for all inputs 0."
    },
    {
      "q": "What is a seven-segment decoder used for?",
      "choices": [
        "To add two numbers",
        "To turn a four-bit binary digit into the signals that light a numeric display",
        "To select one of four inputs",
        "To store a single bit"
      ],
      "answer": 1,
      "explanation": "Correct: (b). It drives the seven segments of a digit display from a binary input. (a) is an adder's job. (c) is a multiplexer. (d) is a flip-flop's job."
    }
  ],
  "studyGuide": "\n<h3>Module 8 — Combinational Logic: Adders, Multiplexers, Decoders: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain the difference between combinational and sequential logic.</p>\n<p><strong>Key terms:</strong> Combinational logic · Sequential logic · Half adder · Full adder · Ripple-carry adder · Carry-in (Cin) · Carry-out (Cout) · Multiplexer (mux).</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain the difference between combinational and sequential logic.</li>\n<li>Build a half adder and a full adder from gates.</li>\n<li>Explain how a multiplexer selects one of several inputs.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
