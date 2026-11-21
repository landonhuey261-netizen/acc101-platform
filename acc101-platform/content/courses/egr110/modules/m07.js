// egr110 - Module 7: Digital Logic: Binary, Boolean, Gates
module.exports = {
  "number": 7,
  "slug": "digital-logic-binary-boolean",
  "title": "Digital Logic: Binary, Boolean, Gates",
  "estTime": "3–4 hours",
  "objectives": [
    "Convert between binary, decimal, and hexadecimal numbers.",
    "Explain what a logic gate does and read its truth table.",
    "Write and simplify Boolean expressions for AND, OR, and NOT.",
    "Build truth tables for combinations of gates.",
    "Explain why computers use binary instead of decimal."
  ],
  "sections": [
    {
      "heading": "Why Computers Count in Ones and Zeros",
      "html": "<p>A digital circuit only knows two states: on and off, high and low, 1 and 0. That is because a transistor makes a nearly perfect switch — it is either fully on or fully off — and building reliable circuits from two-state switches is far easier than building circuits that must hold ten different voltage levels for decimal digits. Every number, letter, picture, and sound in a computer is ultimately stored as patterns of 1s and 0s.</p>\n<p>Binary numbers work like decimal numbers, but each place is worth twice the one before it instead of ten times. The binary number 1011 means 1×8 + 0×4 + 1×2 + 1×1 = 11 in decimal. Hexadecimal (base 16) is a shorthand for binary: each hex digit stands for four bits, so 0x2F means 0010 1111, which is 2×16 + 15 = 47. Engineers read hex because long binary strings are hard to read and easy to mistype.</p>\n"
    },
    {
      "heading": "Logic Gates: The Building Blocks",
      "html": "<p>A logic gate is a small circuit that takes one or more binary inputs and produces one binary output according to a fixed rule. The AND gate outputs 1 only when all its inputs are 1. The OR gate outputs 1 when any of its inputs is 1. The NOT gate (an inverter) flips its single input: 1 becomes 0 and 0 becomes 1. Three more gates are built from these: NAND (AND followed by NOT), NOR (OR followed by NOT), and XOR (outputs 1 when the inputs are different).</p>\n<p>Each gate is described by a truth table — a table listing the output for every combination of inputs. Truth tables are the basic tool of digital design: if you can write the truth table, you understand the circuit. Gates are drawn as distinctive symbols (the AND gate is D-shaped, the OR gate is curved, the NOT gate is a triangle with a small circle), and the small circle on a symbol always means “inverted”.</p>\n"
    },
    {
      "heading": "Boolean Algebra: Logic as Maths",
      "html": "<p>Boolean algebra is the maths of 1s and 0s, named after George Boole. AND is written as multiplication (A · B), OR as addition (A + B), and NOT as a bar over the letter (Ā). A few rules do most of the work: A · 0 = 0, A · 1 = A, A + 0 = A, A + 1 = 1, A · A = A, A + A = A, and A · Ā = 0 while A + Ā = 1. With these you can simplify a messy expression into a simpler circuit that does the same job — fewer gates, less cost, less to go wrong.</p>\n<p>De Morgan's laws are the most useful simplification tools: the NOT of an AND is the OR of the NOTs — (A · B) with a bar over it equals Ā + B̄ — and the NOT of an OR is the AND of the NOTs — (A + B) with a bar equals Ā · B̄. They let you convert between gate types, which matters in practice because NAND gates are the cheapest and most common building block in real chips.</p>\n"
    },
    {
      "heading": "From Truth Table to Circuit",
      "html": "<p>Designing a digital circuit starts from a description of what it must do, written as a truth table. Each row where the output is 1 gives one AND term (a product of the inputs, with NOTs where the input is 0), and OR-ing those terms together gives the Boolean expression — this is called sum of products. Then simplify with Boolean algebra, and draw the gates.</p>\n<p>Example: a circuit that outputs 1 only when A = 1 and B = 0. The truth table has a single 1-row, giving the expression A · B̄ — one AND gate and one NOT gate. Bigger problems need more terms, but the method never changes: truth table, sum of products, simplify, draw. This is exactly how the circuits in the next two modules are designed.</p>\n"
    },
    {
      "heading": "Binary Arithmetic Preview and Common Mistakes",
      "html": "<p>Adding binary numbers works like decimal addition, with carries: 1 + 1 = 10 in binary (0, carry 1). So 1010 (10) + 0111 (7) = 10001 (17). Binary subtraction, multiplication, and division follow the same place-value rules. The next module builds the adder circuits that do this arithmetic in hardware.</p>\n<p><p><strong>Takeaways:</strong><ul><li>Computers use binary because transistors make reliable two-state switches.</li><li>1011 in binary is 11 in decimal; 0x2F in hex is 47.</li><li>AND needs all inputs 1; OR needs any input 1; NOT flips its input.</li><li>Boolean algebra simplifies expressions; De Morgan's laws convert between gate types.</li><li>Design goes: truth table, sum of products, simplify, draw the gates.</li></ul></p>\n<p><strong>Common mistake:</strong> Treating Boolean + as ordinary addition. A + A = A in Boolean algebra (1 + 1 = 1), not 2 — OR means “either”, not “add the numbers”.</p>\n<p><strong>Common mistake:</strong> Reading hex as decimal. 0x2F is 47, not 2F and not 29 — each hex digit is worth 16, and F is 15.</p>\n<p><strong>Ready check:</strong> If you can convert binary and hex, write truth tables for the six gates, and simplify a small Boolean expression, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Binary",
      "def": "Base-2 counting using only 0 and 1; each place is worth twice the one before it."
    },
    {
      "term": "Decimal",
      "def": "Base-10 counting, the everyday system with digits 0–9."
    },
    {
      "term": "Hexadecimal",
      "def": "Base-16 counting (digits 0–9 and A–F), used as a shorthand for binary; each hex digit stands for four bits."
    },
    {
      "term": "Bit",
      "def": "A single binary digit, 0 or 1."
    },
    {
      "term": "Logic gate",
      "def": "A circuit that takes binary inputs and produces a binary output according to a fixed rule."
    },
    {
      "term": "Truth table",
      "def": "A table listing a logic circuit's output for every combination of its inputs."
    },
    {
      "term": "AND gate",
      "def": "A gate that outputs 1 only when all its inputs are 1."
    },
    {
      "term": "OR gate",
      "def": "A gate that outputs 1 when any of its inputs is 1."
    },
    {
      "term": "NOT gate",
      "def": "A gate that flips its single input: 1 becomes 0 and 0 becomes 1; also called an inverter."
    },
    {
      "term": "NAND gate",
      "def": "An AND gate followed by NOT: it outputs 0 only when all its inputs are 1."
    },
    {
      "term": "NOR gate",
      "def": "An OR gate followed by NOT: it outputs 1 only when all its inputs are 0."
    },
    {
      "term": "XOR gate",
      "def": "A gate that outputs 1 when its two inputs are different, and 0 when they are the same."
    },
    {
      "term": "Boolean algebra",
      "def": "The maths of 1s and 0s, using AND, OR, and NOT, used to design and simplify digital circuits."
    },
    {
      "term": "De Morgan's laws",
      "def": "Rules that convert between AND and OR through NOT: the NOT of an AND is the OR of the NOTs, and vice versa."
    },
    {
      "term": "Sum of products",
      "def": "A Boolean expression built by OR-ing together one AND term for each row where the output is 1."
    },
    {
      "term": "Carry",
      "def": "The extra 1 passed to the next place when adding two 1s in binary, just as in decimal addition."
    }
  ],
  "video": {
    "title": "Logic Gates, Truth Tables, Boolean Algebra AND, OR, NOT, NAND & NOR",
    "embedUrl": "https://www.youtube.com/embed/JQBRzsPhw2w",
    "note": "A thorough walk through every gate, its symbol, and its truth table, with Boolean algebra worked examples. Pause and write each truth table yourself before the video shows it.",
    "more": [
      {
        "title": "IGCSE Computer Science 2023-25 — Topic 10 Boolean Logic: Video 1 - LOGIC GATES and TRUTH TABLES",
        "url": "https://www.youtube.com/watch?v=4e2sEjIXKiU"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Convert the binary number 1011 to decimal, showing the place values. Then convert the decimal number 45 to binary.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 1011 = 1×8 + 0×4 + 1×2 + 1×1 = 8 + 0 + 2 + 1 = 11. Step 2: 45 = 32 + 8 + 4 + 1, so in binary it is 101101 (32 + 0 + 8 + 4 + 0 + 1). A good answer shows the place-value working both ways.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Convert 0x2F to decimal, and convert 0xA7 to decimal. Show your working.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 0x2F = 2×16 + 15 = 32 + 15 = 47. Step 2: 0xA7 = 10×16 + 7 = 160 + 7 = 167. A good answer remembers that F = 15 and A = 10.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Write the truth table for a two-input XOR gate, and in one sentence say when its output is 1.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The truth table is 00 → 0, 01 → 1, 10 → 1, 11 → 0. Step 2: The output is 1 when the inputs are different. A good answer gives all four rows and the one-sentence rule.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Simplify the Boolean expression A · 1 + B · 0, using the rules from the module, and say which gate (if any) the result needs.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A · 1 = A, and B · 0 = 0. Step 2: A + 0 = A. Step 3: The whole expression is just A — no gate is needed at all, the output is the input. A good answer applies each rule in turn.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Use De Morgan's law to rewrite the expression NOT (A AND B) as an OR of NOTs, and say which gate implements the result.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: De Morgan's law: the NOT of an AND is the OR of the NOTs. Step 2: NOT (A · B) = Ā + B̄. Step 3: That is an OR gate fed by two NOT gates — which is exactly a NAND gate. A good answer gives the rewritten expression and the gate.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Add the binary numbers 1010 and 0111 by hand, showing the carries, and check your answer in decimal.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Column by column from the right: 0+1=1; 1+1=0 carry 1; 0+1+carry 1=0 carry 1; 1+0+carry 1=0 carry 1; final carry 1. Step 2: The result is 10001. Step 3: Check: 1010 = 10, 0111 = 7, and 10 + 7 = 17, and 10001 = 16 + 1 = 17. A good answer shows the carries and the decimal check.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What is the binary number 1011 in decimal?",
      "choices": [
        "9",
        "10",
        "11",
        "13"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 1011 = 8 + 0 + 2 + 1 = 11. (a) 9 would be 1001. (b) 10 would be 1010. (d) 13 would be 1101."
    },
    {
      "q": "What is 0x2F in decimal?",
      "choices": [
        "29",
        "47",
        "31",
        "45"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 0x2F = 2×16 + 15 = 47. (a) 29 treats the hex digits as decimal. (c) 31 is 0x1F. (d) 45 is 101101 in binary."
    },
    {
      "q": "What is 0xA7 in decimal?",
      "choices": [
        "107",
        "167",
        "157",
        "117"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 0xA7 = 10×16 + 7 = 167. (a) 107 forgets that A is 10, not 1. (c) 157 uses A = 9. (d) 117 is wrong by 50."
    },
    {
      "q": "An AND gate with inputs 1 and 0 outputs…",
      "choices": [
        "1",
        "0",
        "It depends on the supply voltage",
        "Both 1 and 0"
      ],
      "answer": 1,
      "explanation": "Correct: (b). AND needs all inputs to be 1, so 1 AND 0 = 0. (a) is what an OR gate would output. (c) is wrong: the output depends only on the inputs. (d) is wrong: a gate has one output value."
    },
    {
      "q": "A two-input XOR gate outputs 1 when…",
      "choices": [
        "Both inputs are 1",
        "Both inputs are 0",
        "The inputs are different",
        "The inputs are the same"
      ],
      "answer": 2,
      "explanation": "Correct: (c). XOR outputs 1 for 01 and 10, and 0 for 00 and 11. (a) and (b) both give 0 for XOR. (d) is the opposite of the XOR rule — that is XNOR."
    },
    {
      "q": "What does the small circle on a logic gate symbol mean?",
      "choices": [
        "The gate is broken",
        "The output (or input) is inverted",
        "The gate needs a clock signal",
        "The gate is an AND gate"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A small circle means inversion — it is what turns AND into NAND and OR into NOR. (a) is wrong: it is a normal part of the symbol. (c) is wrong: clocked circuits use a different marking. (d) is wrong: the circle appears on NAND, NOR, and NOT symbols."
    },
    {
      "q": "Simplify A + A in Boolean algebra.",
      "choices": [
        "2A",
        "A",
        "0",
        "1"
      ],
      "answer": 1,
      "explanation": "Correct: (b). In Boolean algebra A + A = A, because OR means “either”, and A or A is still A. (a) treats + as ordinary addition, which it is not. (c) and (d) are wrong: the result depends on A, it is not a constant."
    },
    {
      "q": "Add the binary numbers 1010 and 0111. What is the result in binary?",
      "choices": [
        "10001",
        "1111",
        "10111",
        "1101"
      ],
      "answer": 0,
      "explanation": "Correct: (a). 1010 (10) + 0111 (7) = 10001 (17). (b) 1111 is 15, which forgets the final carry. (c) 10111 is 23. (d) 1101 is 13."
    }
  ],
  "studyGuide": "\n<h3>Module 7 — Digital Logic: Binary, Boolean, Gates: Quick Reference</h3>\n<p><strong>Core idea:</strong> Convert between binary, decimal, and hexadecimal numbers.</p>\n<p><strong>Key terms:</strong> Binary · Decimal · Hexadecimal · Bit · Logic gate · Truth table · AND gate · OR gate.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Convert between binary, decimal, and hexadecimal numbers.</li>\n<li>Explain what a logic gate does and read its truth table.</li>\n<li>Write and simplify Boolean expressions for AND, OR, and NOT.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
