// con111 - Module 8: Weld Symbols and Print Reading
module.exports = {
  "number": 8,
  "slug": "weld-symbols-and-print-reading",
  "title": "Weld Symbols and Print Reading",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain the parts of a welding symbol: reference line, arrow, tail, and weld-all-around circle.",
    "Read the basic weld symbols: fillet, groove, plug, slot, spot, and seam.",
    "Explain arrow side versus other side, and what the symbol's position above or below the line means.",
    "Read size, length, pitch, and contour symbols on a welding symbol.",
    "Explain how a welding symbol connects to the WPS and the inspection."
  ],
  "sections": [
    {
      "heading": "The Language of the Drawing",
      "html": "<p>A welding drawing does not say 'weld this here' in words — it says it in symbols. The welding symbol is a small diagram on the drawing that tells the welder exactly what weld to make, where, how big, how long, and to what standard. A welder who cannot read symbols cannot build what the drawing calls for, and a welder who guesses at a symbol will make the wrong weld in the wrong place.</p>\n<p>The symbol is governed by AWS A2.4, the standard for welding symbols. Every symbol in the United States follows the same rules, so a symbol drawn in Michigan means the same thing in Texas. That consistency is the point: the symbol is a contract between the designer and the welder, and it leaves nothing to interpretation.</p>\n<p>The symbol has four parts. The <strong>reference line</strong> is the horizontal line the symbol sits on. The <strong>arrow</strong> points to the joint where the weld goes. The <strong>tail</strong> at the end of the reference line carries extra information, such as the welding procedure number. And the <strong>weld-all-around circle</strong> at the join of the arrow and the reference line means the weld goes all the way around the joint.</p>\n"
    },
    {
      "heading": "Arrow Side and Other Side",
      "html": "<p>The position of the symbol above or below the reference line is the most important thing in the whole system. A symbol <strong>below</strong> the reference line means the weld goes on the <strong>arrow side</strong> — the side the arrow points to. A symbol <strong>above</strong> the reference line means the weld goes on the <strong>other side</strong> — the side away from the arrow. A symbol on both sides means welds on both sides.</p>\n<p>That one rule is where beginners make their worst mistakes. A fillet weld drawn above the line and welded below it is a weld on the wrong side of the joint — and on a structural connection, the wrong side can mean the connection fails. The welder reads the position first, before the symbol type, because position decides where the weld goes.</p>\n<p>The arrow itself can have a bend — a broken arrow — when the joint needs a specific side identified, such as a bevel on one member. The tail can carry the WPS number, a reference to a standard, or a note such as 'weld all around' in words. The tail is where the drawing talks to the welder in text.</p>\n"
    },
    {
      "heading": "The Basic Symbols",
      "html": "<p>Each weld type has its own symbol. A <strong>fillet weld</strong> — the triangular weld in a corner — is a right triangle. A <strong>groove weld</strong> — a weld in a prepared groove between two pieces — has symbols for the groove shape: V, bevel, U, J, square, and flare. A <strong>plug weld</strong> is a circle, a <strong>slot weld</strong> is an oval, a <strong>spot weld</strong> is a circle with a cross, and a <strong>seam weld</strong> is two parallel lines. The symbol's shape is a picture of the weld's cross-section.</p>\n<p>The fillet is the most common weld in construction, so its triangle is the symbol a welder sees most. The groove symbols are the most important in structural work, because groove welds carry the full load of a connection and their preparation — the bevel angle, the root opening, the root face — is part of the symbol. A groove symbol with no preparation dimensions means the preparation is in the WPS, not on the drawing.</p>\n<p>Other marks add detail. A flag on the reference line means a field weld — welded on site, not in the shop. A circle means weld all around. A small triangle or line at the end of the symbol shows the contour — flush, convex, or concave — and a letter tells how the contour is made: G for grinding, C for chipping, M for machining.</p>\n"
    },
    {
      "heading": "Size, Length, and Pitch",
      "html": "<p>Numbers on the symbol give the size and the extent of the weld. For a fillet weld, the number to the left of the symbol is the leg size — the length of the triangle's legs, in inches. A fillet symbol with a 1/4 to its left means a 1/4-inch fillet. For a groove weld, the number is the depth of the groove or the effective throat, and a number in parentheses is the size of the weld metal.</p>\n<p>To the right of the symbol are the length and the pitch. A number alone is the length of the weld; a number, a dash, and a second number give the length and the pitch — the distance from the center of one weld to the center of the next — for intermittent welds. A fillet symbol reading 1/4, then 2-6 to the right, means a 1/4-inch fillet, 2 inches long, every 6 inches. An intermittent weld that is read as continuous wastes material; a continuous weld read as intermittent fails.</p>\n<p>The tail can also carry the WPS number, which is the link to the procedure. The symbol says what weld to make; the WPS says how to make it — the process, the electrode, the settings, the position. The welder reads both, and the inspector checks both.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong> The symbol has a reference line, an arrow, a tail, and sometimes a weld-all-around circle. Below the line is arrow side, above the line is other side. Fillet is a triangle; groove symbols show the groove shape. Numbers give size (left), length and pitch (right). The tail carries the WPS number. AWS A2.4 governs the system.</p>\n<p><strong>Common mistake:</strong> Welding on the wrong side because the symbol's position above or below the line was not read. Position is read first — it decides where the weld goes.</p>\n<p><strong>Common mistake:</strong> Reading an intermittent weld as continuous, or the reverse. The length-pitch numbers to the right of the symbol are the extent of the weld — read them before striking the arc.</p>\n<p><strong>Ready-to-Work link:</strong> If you can draw a fillet symbol, explain arrow side versus other side, and read a 1/4-inch fillet 2 inches long every 6 inches, you have this module. Module 9 covers metallurgy basics and base metals.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Welding symbol",
      "def": "The diagram on a drawing that tells the welder what weld to make, where, how big, and how long."
    },
    {
      "term": "Reference line",
      "def": "The horizontal line a welding symbol sits on."
    },
    {
      "term": "Arrow",
      "def": "The line from the reference line that points to the joint where the weld goes."
    },
    {
      "term": "Tail",
      "def": "The fork at the end of the reference line that carries extra information, such as the WPS number."
    },
    {
      "term": "Weld-all-around",
      "def": "A circle at the join of the arrow and reference line meaning the weld goes all the way around the joint."
    },
    {
      "term": "Arrow side",
      "def": "The side of the joint the arrow points to; a symbol below the reference line is an arrow-side weld."
    },
    {
      "term": "Other side",
      "def": "The side of the joint away from the arrow; a symbol above the reference line is an other-side weld."
    },
    {
      "term": "Fillet weld",
      "def": "A triangular weld in a corner joint; its symbol is a right triangle."
    },
    {
      "term": "Groove weld",
      "def": "A weld in a prepared groove between two pieces; symbols show the groove shape (V, bevel, U, J)."
    },
    {
      "term": "AWS A2.4",
      "def": "The American Welding Society standard for welding symbols."
    },
    {
      "term": "Leg size",
      "def": "For a fillet weld, the length of the triangle's legs; the number to the left of the symbol."
    },
    {
      "term": "Pitch",
      "def": "For intermittent welds, the distance from the center of one weld to the center of the next."
    },
    {
      "term": "Intermittent weld",
      "def": "A weld made in separate lengths with gaps between them, given as length-pitch."
    },
    {
      "term": "Field weld",
      "def": "A weld made on site, shown by a flag on the reference line; a shop weld has no flag."
    },
    {
      "term": "Contour",
      "def": "The finished shape of a weld face — flush, convex, or concave — shown by a symbol and a finish letter."
    }
  ],
  "video": {
    "title": "How to Read Welding Symbols: Part 1",
    "embedUrl": "https://www.youtube.com/embed/Svoi1v_o5yI",
    "note": "How to read welding symbols, part 1: the reference line, the arrow, and the basic symbols. Watch it with a pencil — draw each symbol as it appears, because reading symbols is a drawing skill as much as a reading skill.",
    "more": [
      {
        "title": "How to Read Welding Symbols: Part 2 of 3",
        "url": "https://www.youtube.com/watch?v=XD6PhN_mTgE"
      },
      {
        "title": "How to Read Welding Symbols: Part 3",
        "url": "https://www.youtube.com/watch?v=Httc3BvY7hI"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Draw a welding symbol in words: reference line, arrow, tail, and weld-all-around circle. Say what each part does.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Reference line — the horizontal line the symbol sits on. Step 2: Arrow — points to the joint. Step 3: Tail — carries extra information such as the WPS number. Step 4: Weld-all-around circle — at the join of arrow and line, means weld all the way around.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A fillet symbol is below the reference line. Which side is welded, and why does it matter?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Below the line means arrow side — the side the arrow points to. Step 2: It matters because welding the other side puts the weld on the wrong side of the joint. Step 3: On a structural connection, the wrong side can mean the connection fails.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> What does the symbol '1/4' to the left of a fillet symbol mean, and what do '2-6' to the right mean?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 1/4 to the left is the leg size — a 1/4-inch fillet. Step 2: 2-6 to the right is length and pitch — 2 inches long, every 6 inches. Step 3: It is an intermittent weld, not a continuous one.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Name four groove weld symbols and say what shape each one describes.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: V-groove — a V-shaped preparation. Step 2: Bevel — one side beveled, one side square. Step 3: U-groove — a U-shaped preparation. Step 4: J-groove — one side J-shaped, one side square. (Square and flare grooves are also valid answers.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A symbol has a flag on the reference line. What does it mean, and what changes for the welder?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The flag means a field weld — welded on site, not in the shop. Step 2: The welder works in the field, with field conditions: wind, position, and access. Step 3: The WPS for a field weld may differ from the shop WPS.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A drawing shows a groove weld symbol with no preparation dimensions. Where is the preparation specified?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The preparation is in the WPS named in the tail of the symbol. Step 2: The symbol says what weld to make; the WPS says how — including the bevel angle, root opening, and root face. Step 3: The welder reads the WPS before welding.</p>"
    }
  ],
  "quiz": [
    {
      "q": "In a welding symbol, the reference line is:",
      "choices": [
        "The arrow",
        "The horizontal line the symbol sits on",
        "The tail",
        "The weld itself"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The reference line is the horizontal line the symbol is built on. (a) The arrow points to the joint. (c) The tail carries extra information. (d) The weld is the result, not the symbol."
    },
    {
      "q": "A symbol below the reference line means the weld goes on the:",
      "choices": [
        "Other side",
        "Arrow side",
        "Top side",
        "Back side"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Below the line is arrow side — the side the arrow points to. (a) Above the line is other side. (c) Top side is not the term. (d) Back side is not the term."
    },
    {
      "q": "The fillet weld symbol is:",
      "choices": [
        "A circle",
        "A right triangle",
        "Two parallel lines",
        "An oval"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A fillet weld's symbol is a right triangle, picturing its cross-section. (a) A circle is a plug or spot weld. (c) Two parallel lines are a seam weld. (d) An oval is a slot weld."
    },
    {
      "q": "A flag on the reference line means:",
      "choices": [
        "Weld all around",
        "A field weld — welded on site",
        "A shop weld",
        "A groove weld"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A flag means the weld is made in the field, not the shop. (a) Weld all around is a circle. (c) A shop weld has no flag. (d) A groove weld is shown by its groove symbol."
    },
    {
      "q": "In '2-6' to the right of a fillet symbol, the 6 is the:",
      "choices": [
        "Leg size",
        "Pitch — the distance from the center of one weld to the center of the next",
        "Weld length",
        "Groove depth"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 6 is the pitch for an intermittent weld; 2 is the length. (a) Leg size is the number to the left. (c) 2 is the length. (d) Groove depth is for groove welds."
    },
    {
      "q": "The tail of a welding symbol can carry:",
      "choices": [
        "The welder's name",
        "The WPS number or a reference to a standard",
        "The price",
        "The date"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The tail carries extra information such as the WPS number. (a) Names are not on symbols. (c) Prices are not on symbols. (d) Dates are not on symbols."
    },
    {
      "q": "AWS A2.4 is:",
      "choices": [
        "A welding machine",
        "The standard for welding symbols",
        "An electrode type",
        "A safety rule"
      ],
      "answer": 1,
      "explanation": "Correct: (b). AWS A2.4 governs welding symbols in the United States. (a) It is a standard, not a machine. (c) Electrodes are numbered, not A2.4. (d) It is a symbol standard, not a safety rule."
    },
    {
      "q": "A circle at the join of the arrow and the reference line means:",
      "choices": [
        "A spot weld",
        "Weld all around the joint",
        "A plug weld",
        "A field weld"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The circle means the weld goes all the way around the joint. (a) A spot weld is a circle with a cross. (c) A plug weld is a plain circle as the symbol. (d) A field weld is a flag."
    }
  ],
  "studyGuide": "\n<h3>Module 8 — Weld Symbols & Print Reading: Quick Reference</h3>\n<p><strong>Parts:</strong> Reference line (horizontal) · Arrow (points to the joint) · Tail (WPS number) · Circle = weld all around · Flag = field weld.</p>\n<p><strong>Side:</strong> Below the line = arrow side · Above the line = other side. Read position first.</p>\n<p><strong>Symbols:</strong> Fillet = triangle · Groove = V, bevel, U, J, square · Plug = circle · Slot = oval · Spot = circle with cross.</p>\n<p><strong>Numbers:</strong> Left = size (fillet leg) · Right = length and pitch (2-6 = 2 in long, every 6 in). Governed by AWS A2.4.</p>\n<p><strong>Self-check:</strong> Read a 1/4-in fillet, 2 in long every 6 in, on the arrow side.</p>\n"
};
