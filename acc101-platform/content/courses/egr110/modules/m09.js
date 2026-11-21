// egr110 - Module 9: Sequential Logic: Flip-Flops, Counters, Registers
module.exports = {
  "number": 9,
  "slug": "sequential-logic",
  "title": "Sequential Logic: Flip-Flops, Counters, Registers",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain the difference between combinational and sequential logic.",
    "Describe how an SR latch stores one bit.",
    "Explain D and JK flip-flops and the role of the clock.",
    "Work out the count sequence and modulus of a binary counter.",
    "Explain what a shift register does and where it is used."
  ],
  "sections": [
    {
      "heading": "Adding Memory: The Clock Enters",
      "html": "<p>Combinational circuits forget everything the moment their inputs change. Sequential circuits remember: their outputs depend on the inputs and on what happened before. The memory element is the flip-flop, which stores one bit, and the clock is a regular pulse train that tells every flip-flop exactly when to update. Between clock pulses, the flip-flops hold their values steady — that is how a computer keeps a number while it works on it.</p>\n<p>The clock is the heartbeat of digital electronics. On each rising edge of the clock (the moment it goes from 0 to 1), every flip-flop in the system takes in its new value at the same instant. That synchronisation is what makes complex systems predictable: nothing changes except on a clock edge, so the whole machine moves in lockstep, one step per tick.</p>\n"
    },
    {
      "heading": "Latches and Flip-Flops",
      "html": "<p>The simplest memory is the SR latch, built from two cross-coupled NOR or NAND gates. Set (S = 1) makes the output Q = 1; Reset (R = 1) makes Q = 0; with both inputs 0, the latch holds whatever it had — it remembers. The forbidden state is S = R = 1, which makes both outputs 1 and breaks the latch's promise; real designs avoid it.</p>\n<p>A D flip-flop is the workhorse of digital design. It has one data input D and a clock input: on each rising clock edge, Q takes the value of D, and between edges Q holds. A JK flip-flop is more flexible: J = 1, K = 0 sets Q to 1; J = 0, K = 1 resets it to 0; J = K = 0 holds; and J = K = 1 toggles Q, flipping it on every clock edge — which is exactly what a counter needs.</p>\n"
    },
    {
      "heading": "Counters: Counting in Hardware",
      "html": "<p>Chain flip-flops so that each one toggles when the previous one falls, and you have a binary counter: it counts 0, 1, 2, 3… on each clock pulse. A 3-bit counter has 8 states (000 to 111) and counts 0 to 7 before wrapping back to 0; a 4-bit counter has 16 states and counts 0 to 15. The number of states is 2 raised to the number of bits — that is the counter's modulus.</p>\n<p>Counters divide frequencies too: the first flip-flop toggles at half the clock rate, the next at a quarter, and so on. That is how a fast crystal clock becomes the slower timing signals a system needs. Counters also measure events — a counter with a sensor on its clock input counts pulses, which is how a microcontroller measures speed, flow, or frequency.</p>\n"
    },
    {
      "heading": "Registers and Shift Registers",
      "html": "<p>A register is a group of flip-flops that stores a whole number at once: eight D flip-flops sharing one clock make an 8-bit register that holds a byte. Registers are the working storage of a processor — the arithmetic unit reads numbers from registers, works on them, and writes the result back to a register.</p>\n<p>A shift register connects flip-flops in a chain so that, on each clock edge, every bit moves one place along. Shift left and the number doubles each time; shift right and it halves. Shift registers convert between serial and parallel data: a microcontroller can send a byte out one bit at a time through a shift register, or receive a stream of bits and present them as a parallel byte. That serial-to-parallel trick is behind almost every display and sensor interface you will meet.</p>\n"
    },
    {
      "heading": "Putting It Together and Common Mistakes",
      "html": "<p>Sequential logic is what turns gates into a computer: registers hold the numbers, counters keep track of where you are, and the clock keeps everything in step. A processor is, at its heart, registers and combinational logic in a loop, with a control unit deciding what happens on each clock tick. The circuits are bigger, but every piece is a flip-flop or a gate you already understand.</p>\n<p><p><strong>Takeaways:</strong><ul><li>Sequential outputs depend on inputs and on past history — flip-flops store the history.</li><li>A D flip-flop copies D to Q on the rising clock edge and holds between edges.</li><li>A JK flip-flop with J = K = 1 toggles on every clock edge.</li><li>An n-bit counter has 2ⁿ states; a 3-bit counter counts 0–7, a 4-bit counter 0–15.</li><li>Registers store whole numbers; shift registers move bits along and convert serial to parallel.</li></ul></p>\n<p><strong>Common mistake:</strong> Forgetting that a flip-flop only changes on a clock edge. Changing D between edges does nothing — the value is sampled only at the edge.</p>\n<p><strong>Common mistake:</strong> Using the SR latch state S = R = 1. It is forbidden because it breaks the latch's complementary outputs and the result after release is unpredictable.</p>\n<p><strong>Ready check:</strong> If you can explain the D flip-flop, work out a counter's range, and explain what a shift register does, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Sequential logic",
      "def": "Logic whose output depends on its inputs and on its past history, stored in flip-flops."
    },
    {
      "term": "Flip-flop",
      "def": "A circuit that stores one bit, changing only on a clock edge."
    },
    {
      "term": "Clock",
      "def": "A regular pulse train that tells every flip-flop in a system when to update."
    },
    {
      "term": "Rising edge",
      "def": "The moment a clock signal goes from 0 to 1; the instant flip-flops take in their new values."
    },
    {
      "term": "SR latch",
      "def": "The simplest memory element, built from two cross-coupled gates; Set makes Q = 1, Reset makes Q = 0."
    },
    {
      "term": "D flip-flop",
      "def": "A flip-flop that copies its D input to Q on the rising clock edge and holds it between edges."
    },
    {
      "term": "JK flip-flop",
      "def": "A flip-flop that can set, reset, hold, or toggle, depending on its J and K inputs."
    },
    {
      "term": "Toggle",
      "def": "To flip a bit from 0 to 1 or 1 to 0 on a clock edge, as a JK flip-flop does when J = K = 1."
    },
    {
      "term": "Counter",
      "def": "A chain of flip-flops that counts clock pulses in binary, wrapping back to zero after its maximum."
    },
    {
      "term": "Modulus",
      "def": "The number of states a counter has: 2ⁿ for an n-bit counter."
    },
    {
      "term": "Register",
      "def": "A group of flip-flops that stores a whole multi-bit number at once."
    },
    {
      "term": "Shift register",
      "def": "A chain of flip-flops where each bit moves one place along on every clock edge."
    },
    {
      "term": "Serial data",
      "def": "Data sent one bit at a time over a single wire."
    },
    {
      "term": "Parallel data",
      "def": "Data sent as a whole number of bits at once over several wires."
    },
    {
      "term": "Hold",
      "def": "Keeping a stored value unchanged, as a flip-flop does between clock edges."
    }
  ],
  "video": {
    "title": "Digital Logic #5: Counters — How Computers Count",
    "embedUrl": "https://www.youtube.com/embed/nT0lSCiLwfM",
    "note": "Counters built from flip-flops, step by step, with the count sequence shown on screen. Follow the 3-bit counter through a full 0–7 cycle, then work out the 4-bit sequence yourself.",
    "more": [
      {
        "title": "DELD Unit 3 | Complete COUNTERS ONE SHOT | Sequential Logic Design | Part 3 | SPPU SE |",
        "url": "https://www.youtube.com/watch?v=GzgRr_bQXmM"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A D flip-flop has D = 1 and the clock rises. What is Q after the edge? Then D changes to 0 between edges — what is Q now, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: On the rising edge Q takes the value of D, so Q = 1. Step 2: Changing D between edges does nothing — the flip-flop only samples D at the clock edge. Step 3: Q stays 1 until the next rising edge, when it will take the new D value of 0. A good answer names the edge-only sampling.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A JK flip-flop has J = 1 and K = 1. What does it do on each clock edge? What is this mode called?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: With J = K = 1 the flip-flop toggles: Q flips from 0 to 1 or 1 to 0 on every rising edge. Step 2: This is the toggle mode. Step 3: It is the mode used to build counters, where each stage toggles the next. A good answer names toggle mode and its use in counters.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A 3-bit counter starts at 000. List the count sequence for the next 8 clock pulses, and state the modulus.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The sequence is 001, 010, 011, 100, 101, 110, 111, then 000 again. Step 2: The modulus is 2³ = 8 states, counting 0 to 7. A good answer lists all eight states in order and gives the modulus.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A 4-bit counter is used to divide a 16 kHz clock. What frequency comes out of the first flip-flop, and what is the counter's range?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Each flip-flop halves the frequency, so the first flip-flop outputs 16 ÷ 2 = 8 kHz. Step 2: A 4-bit counter has 2⁴ = 16 states and counts 0 to 15. A good answer gives both the 8 kHz and the 0–15 range.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> An 8-bit shift register holds 00000001. It is shifted left three times (a 0 shifts in each time). What does it hold now, and what has happened to the number's value?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: After one shift: 00000010; after two: 00000100; after three: 00001000. Step 2: The value went from 1 to 8 — each left shift doubles the number. Step 3: Three left shifts multiply by 2³ = 8. A good answer shows the intermediate values and the doubling rule.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A student says an SR latch with S = 1 and R = 1 is fine because “set wins”. Explain why this state is forbidden and what goes wrong.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: With S = R = 1, both outputs of the cross-coupled gates are forced to 1, breaking the rule that Q and Q̄ are opposites. Step 2: When the inputs are released, the latch's next state depends on tiny timing differences and is unpredictable. Step 3: Real designs avoid S = R = 1 entirely — that is why the D flip-flop, which cannot reach this state, is used instead. A good answer explains the broken outputs and the unpredictability.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What is the key difference between sequential and combinational logic?",
      "choices": [
        "Sequential logic uses more gates",
        "Sequential logic's output depends on past history as well as current inputs",
        "Sequential logic has no inputs",
        "Sequential logic only works with decimal numbers"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Sequential circuits remember past inputs through flip-flops. (a) is wrong: gate count is not the defining difference. (c) is wrong: sequential circuits have inputs. (d) is wrong: sequential logic works in binary like everything else."
    },
    {
      "q": "A D flip-flop has D = 1 when the clock rises. What is Q after the edge?",
      "choices": [
        "0",
        "1",
        "It stays the same as before",
        "It toggles"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A D flip-flop copies D to Q on the rising edge, so Q = 1. (a) would be the result if D were 0. (c) is the hold behaviour when there is no edge. (d) is JK toggle behaviour, not D."
    },
    {
      "q": "A JK flip-flop has J = 1 and K = 1. What happens on each clock edge?",
      "choices": [
        "Q is set to 1",
        "Q is reset to 0",
        "Q toggles",
        "Q holds its value"
      ],
      "answer": 2,
      "explanation": "Correct: (c). J = K = 1 is toggle mode: Q flips on every rising edge. (a) is J = 1, K = 0. (b) is J = 0, K = 1. (d) is J = K = 0."
    },
    {
      "q": "How many states does a 3-bit counter have, and what range does it count?",
      "choices": [
        "3 states, 0–3",
        "8 states, 0–7",
        "6 states, 0–6",
        "9 states, 0–8"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A 3-bit counter has 2³ = 8 states, counting 0 to 7. (a) confuses the bit count with the state count. (c) is 2 × 3, not 2³. (d) adds one extra state."
    },
    {
      "q": "A 4-bit counter counts from…",
      "choices": [
        "0 to 4",
        "0 to 15",
        "1 to 16",
        "0 to 8"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A 4-bit counter has 2⁴ = 16 states, 0 to 15. (a) confuses bits with the maximum value. (c) starts at 1 and has the wrong maximum. (d) is the range of a 3-bit counter."
    },
    {
      "q": "What does a shift register do on each clock edge?",
      "choices": [
        "It adds 1 to the stored number",
        "It moves every bit one place along the chain",
        "It clears all bits to 0",
        "It inverts every bit"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Each bit moves one place along on every clock edge. (a) describes a counter. (c) describes a reset. (d) describes an inversion, not a shift."
    },
    {
      "q": "Why is the SR latch state S = 1, R = 1 forbidden?",
      "choices": [
        "It makes the latch too slow",
        "It forces both outputs to 1, breaking the complementary outputs, and the result after release is unpredictable",
        "It uses too much power",
        "It turns the latch into a counter"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Both outputs go to 1, which violates Q and Q̄ being opposites, and the next state is unpredictable. (a) is wrong: speed is not the issue. (c) is wrong: power is not the problem. (d) is wrong: it does not become a counter."
    },
    {
      "q": "An 8-bit register is built from how many D flip-flops?",
      "choices": [
        "1",
        "4",
        "8",
        "16"
      ],
      "answer": 2,
      "explanation": "Correct: (c). One flip-flop stores one bit, so 8 bits need 8 flip-flops. (a) stores one bit only. (b) stores four bits. (d) stores sixteen bits."
    }
  ],
  "studyGuide": "\n<h3>Module 9 — Sequential Logic: Flip-Flops, Counters, Registers: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain the difference between combinational and sequential logic.</p>\n<p><strong>Key terms:</strong> Sequential logic · Flip-flop · Clock · Rising edge · SR latch · D flip-flop · JK flip-flop · Toggle.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain the difference between combinational and sequential logic.</li>\n<li>Describe how an SR latch stores one bit.</li>\n<li>Explain D and JK flip-flops and the role of the clock.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
