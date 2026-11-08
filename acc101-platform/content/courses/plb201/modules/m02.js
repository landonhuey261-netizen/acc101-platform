// Plumbing 201 - Module 2: Reading the Code: Structure, Tables & Index Skills
module.exports = {
  number: 2,
  slug: "reading-the-code-structure-tables-index",
  title: "Reading the Code: Structure, Tables & Index Skills",
  estTime: "3–4 hours",
  objectives: [
    "Name the IPC's chapters in order and state what system each chapter governs.",
    "Read a code citation (chapter, section, table) and find the exact provision it points to.",
    "Use the table of contents, the index, and cross-references to find a rule without reading the whole book.",
    "Distinguish mandatory language (shall) from permissive language (may) and from exceptions.",
    "Explain how footnotes, definitions, and referenced standards change what a section means."
  ],
  sections: [
    {
      heading: "The Map: Chapters in Order",
      html: `
<p>The IPC is organized the way a building is organized: from the paperwork, to the words, to each system in turn. Chapter 1 is Scope and Administration — who the code applies to and how permits and inspections work. Chapter 2 is Definitions — the code's dictionary, and the first place to look when a word seems to mean something different from everyday English. Chapter 3 is General Regulations — materials, supports, protection, and the rules that apply to every system. Then the systems, one chapter each: Chapter 4 fixtures, Chapter 5 water heaters, Chapter 6 water supply and distribution, Chapter 7 sanitary drainage, Chapter 8 indirect and special waste, Chapter 9 vents, Chapter 10 traps, interceptors and separators, Chapter 11 storm drainage, Chapter 12 special piping (including medical gas), Chapter 13 nonpotable water systems, Chapter 14 subsurface graywater systems, and Chapter 15 referenced standards.</p>
<p>That order is your first lookup tool. If the question is about a vent, you start in Chapter 9; if it is about how many fixtures a building needs, Chapter 4; if it is about a roof drain, Chapter 11. Beginners waste time by opening the book at random or by searching from the front. A plumber who knows the chapter map goes straight to the right neighborhood and then narrows down.</p>
<div class="callout"><strong>Key idea:</strong> The chapter is the address. Before you look anything up, decide which chapter owns the question — then work inside that chapter.</div>
<p>Memorize the map by system, not by number alone: administration, definitions, general rules, fixtures, water heaters, water supply, drainage, indirect waste, vents, traps, storm, special piping, nonpotable, graywater. Say it out loud a few times and it sticks, because it follows the water: in through the supply, out through the drains, up through the vents, and off the roof.</p>`
    },
    {
      heading: "Citations: How to Read a Section Number",
      html: `
<p>Every provision in the IPC has an address made of numbers, and the exam speaks in those addresses. A citation like <strong>704.1</strong> means Chapter 7, Section 04, subsection .1 — the minimum slope of horizontal drainage pipe. A citation like <strong>Table 710.1(1)</strong> means the first table in Section 710.1, which caps the drainage fixture units a building drain may carry. A citation like <strong>903.1</strong> means Chapter 9, Section 03, subsection .1 — vent terminal height above the roof.</p>
<p>Read citations from left to right, biggest to smallest: chapter, then section, then subsection, then table or figure. When a question says "per IPC 1002.2," it is telling you exactly where to open the book — Chapter 10, Section 1002, subsection .2, the table of maximum trap-arm lengths. You do not need to remember the number; you need to be able to find it in under a minute.</p>
<p>Sections also point to each other. A section that says "in accordance with Section 705" is sending you to another address, and the answer is incomplete until you have read both. Cross-references are not decoration — they are how the code keeps one rule from being repeated in fifteen places, and how exam questions hide a second step.</p>
<div class="callout"><strong>Key idea:</strong> A citation is a street address, not a trivia fact. Your job is to drive to it fast, not to memorize it.</div>`
    },
    {
      heading: "Three Ways In: Contents, Index, and Definitions",
      html: `
<p>There are three ways into the book, and a good lookup uses the right one for the job. The <strong>table of contents</strong> is best when you know the system but not the section: scan the chapter's section titles and pick the one that matches your question. The <strong>index</strong> at the back is best when you know a word but not where it lives: look up "trap seal" or "backwater valve" and it gives you the section numbers. <strong>Chapter 2, Definitions</strong>, is best when the question turns on what a word means — and in code questions, it often does.</p>
<p>Definitions are a trap for the careless. In the IPC, "fixture" and "plumbing fixture" are defined terms; "building drain" and "building sewer" are two different pipes with a boundary between them; "flood-level rim" is a precise height, not a vague idea. If a question's answer depends on where the building drain ends and the building sewer begins, the definition decides it, and the definition is in Chapter 2.</p>
<p>Practice all three ways in. Open the contents and find the vent chapter's sections. Open the index and find where "air gap" is defined. Open Chapter 2 and read five definitions you have never used. Speed comes from repetition, and the Michigan journeyman exam is open book precisely because it tests whether you can find the rule, not whether you memorized it.</p>
<div class="callout"><strong>Key idea:</strong> Contents for systems, index for words, Chapter 2 for meanings. Pick the right door and the lookup takes seconds instead of minutes.</div>`
    },
    {
      heading: "Shall, May, Exceptions, and Footnotes",
      html: `
<p>Code language is precise, and three small words carry most of the meaning. <strong>"Shall"</strong> means mandatory: you must do it. <strong>"May"</strong> means permissive: you are allowed to do it, but you do not have to. <strong>"Shall not"</strong> means prohibited. Exam questions love to swap these words, and a single "shall not" flipped to "shall" reverses the answer. Read the verb before you read anything else in a section.</p>
<p>An <strong>exception</strong> follows a rule and carves out a case where the rule does not apply — but only that case. If a section says a trap arm shall not exceed 6 feet, "except where..." and then names one specific condition, the exception covers that condition and nothing else. Beginners over-apply exceptions; the code means exactly what it says and no more.</p>
<p><strong>Footnotes</strong> under a table are part of the table. A table of pipe sizes may carry a footnote that says the minimum size of any building drain serving a water closet is 3 inches — and that footnote overrides the number you would otherwise read from the table. A lookup that skips the footnotes is an unfinished lookup. The same is true of <strong>referenced standards</strong> in Chapter 15: when the code says a material shall comply with a named standard, that standard's requirements become part of the code.</p>
<div class="callout"><strong>Key idea:</strong> Read the verb, read the exception, read the footnote. The answer that ignores any of the three is usually the wrong answer.</div>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Chapter map: 1 administration, 2 definitions, 3 general regulations, 4 fixtures, 5 water heaters, 6 water supply, 7 drainage, 8 indirect/special waste, 9 vents, 10 traps/interceptors, 11 storm, 12 special piping, 13 nonpotable, 14 graywater, 15 referenced standards.</li>
<li>A citation reads left to right: chapter, section, subsection, table — for example, 704.1 is Chapter 7, Section 04.1, minimum drainage slope.</li>
<li>Three ways in: table of contents for systems, index for words, Chapter 2 for definitions.</li>
<li>"Shall" is mandatory, "may" is permissive, "shall not" is prohibited; exceptions cover only the case they name.</li>
<li>Footnotes are part of the table, and referenced standards are part of the code.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Reading a table and ignoring its footnotes. The footnote that sets a 3-inch minimum for any building drain serving a water closet has failed more sizing questions than any other single line in the code.</div>
<div class="callout"><strong>Common mistake:</strong> Answering a definition question from everyday English. "Building drain" and "building sewer" sound alike and mean different things with a legal boundary between them — Chapter 2 decides, not common sense.</div>
<p><strong>Ready-to-Work link:</strong> The Michigan journeyman exam is open book and timed. The plumbers who pass are not the ones who memorized the code — they are the ones who can find any section in under a minute. Module 12 turns this skill into timed drills.</p>`
    }
  ],
  keyTerms: [
    { term: "Table of contents", def: "The front-of-book list of chapters and sections; the fastest way in when you know the system but not the section." },
    { term: "Index", def: "The back-of-book alphabetical list of topics with section numbers; the fastest way in when you know a word but not its location." },
    { term: "Citation", def: "A numbered address for a code provision, read left to right: chapter, section, subsection, table — for example, 704.1." },
    { term: "Cross-reference", def: "A section's pointer to another section ('in accordance with Section 705'); the answer is incomplete until both are read." },
    { term: "Shall", def: "Mandatory code language: the provision must be followed." },
    { term: "May", def: "Permissive code language: the provision is allowed but not required." },
    { term: "Exception", def: "A stated case where a rule does not apply; it covers only the case it names." },
    { term: "Footnote", def: "A note under a code table that is part of the table and can change or limit the values in it." },
    { term: "Referenced standard", def: "An outside standard (for example, an ASTM material standard) the code names in Chapter 15; its requirements become part of the code." },
    { term: "Building drain", def: "The lowest horizontal drainage piping inside the building, ending at the point where it leaves the building (defined in Chapter 2)." },
    { term: "Building sewer", def: "The drainage piping outside the building, from the end of the building drain to the public sewer or disposal system." },
    { term: "Flood-level rim", def: "The top edge of a fixture or receptor over which water would spill if the fixture filled — the reference height for vent and air-gap rules." },
    { term: "Trap seal", def: "The depth of water held in a trap that blocks sewer gas; the IPC requires a seal of at least 2 inches and not more than 4 inches." },
    { term: "Air gap", def: "The unobstructed vertical distance between a water outlet and the flood-level rim of the fixture or receptor it serves." }
  ],
  video: {
    title: "C-36 Study Guide - California Plumbing License & Practice Test (25 Critical Questions)",
    embedUrl: "https://www.youtube.com/embed/ISTPd2gojXU",
    note: "A 25-question exam-style practice session built for a licensing exam, covering code fundamentals, DWV and venting, water distribution, fixture requirements, and sizing logic. Work it as a lookup drill: pause on each question, find the rule in your IPC before the answer is given, and notice how much of the exam is finding the right section rather than remembering it. Note that this video is built for the California C-36 exam, so its code references are California's — use it for the drill method, and take your answers from the IPC.",
    more: [
      { title: "What To Expect on Your Texas Plumbing Exam! (Practical & Dollhouse!)", url: "https://www.youtube.com/watch?v=JSw0BhjKzEg" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A question asks about the minimum slope of a horizontal drain. Which chapter do you open first, and what is the section number for that rule?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Drainage lives in Chapter 7, Sanitary Drainage. Step 2: The slope rule is Section 704.1, with the minimum slopes in Table 704.1. Step 3: So the citation is 704.1 — Chapter 7, Section 04, subsection .1 — and the table gives 1/4 inch per foot for pipe 2-1/2 inches and smaller, 1/8 inch per foot for 3 to 6 inches, and 1/16 inch per foot for 8 inches and larger.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> You need the definition of \"building sewer.\" Where do you look, and why there instead of in Chapter 7?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Look in Chapter 2, Definitions — the code's dictionary. Step 2: Definitions are kept in one place so every chapter uses the same meaning. Step 3: Chapter 7 uses the term but does not define it; guessing from everyday English risks confusing the building sewer (outside the building) with the building drain (inside).</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A section reads: \"A vent shall terminate not less than 6 inches above the roof, except where...\" What does \"shall\" tell you, and how do you handle the exception?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: \"Shall\" means the 6-inch minimum is mandatory, not a suggestion. Step 2: Read the exception in full and note exactly which case it names. Step 3: Apply the exception only to that case; every other vent still terminates at least 6 inches above the roof.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> Table 710.1(1) says a 3-inch building drain at 1/4 inch per foot carries 42 DFU. A footnote says the minimum size of any building drain serving a water closet is 3 inches. A two-fixture branch with no water closet totals 4 DFU. What size is the building drain, and why does the footnote not change your answer here?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The table alone would allow a 2-inch drain (21 DFU at 1/4 inch per foot covers 4 DFU). Step 2: The footnote sets a 3-inch minimum only for a drain serving a water closet. Step 3: This branch has no water closet, so the footnote does not apply and a 2-inch drain is permitted by the table — but the footnote must still be checked on every job, because adding one water closet would force 3 inches.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A question asks: \"Where in the IPC do you find the rules for grease interceptors?\" Give the chapter and explain how you knew.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Grease interceptors are traps/interceptors, which live in Chapter 10, Traps, Interceptors and Separators. Step 2: The chapter map says so: Chapter 10 owns interceptors and separators. Step 3: Within Chapter 10, Section 1003 covers interceptors and separators specifically — found by scanning the chapter's table of contents.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> You look up \"air admittance valve\" in the index and it points you to Section 918. What do you do next, and what should you check while you are there?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Open Section 918 and read the whole section, not just the first line, including its conditions and limits. Step 2: Check any cross-references it names, because the section may send you to another rule (for example, the requirement that at least one vent still open to the atmosphere). Step 3: Check the section's exceptions and any table footnotes, since the valve's use is limited and the limits are where exam questions live.</p>"
    }
  ],
  quiz: [
    {
      q: "Which chapter governs vents?",
      choices: ["Chapter 7", "Chapter 8", "Chapter 9", "Chapter 10"],
      answer: 2,
      explanation: "Correct: (c). Chapter 9 is Vents. (a) Chapter 7 is Sanitary Drainage. (b) Chapter 8 is Indirect/Special Waste. (d) Chapter 10 is Traps, Interceptors and Separators."
    },
    {
      q: "In the citation 704.1, the number 7 stands for:",
      choices: ["The seventh table in the book", "Chapter 7", "Section 7 of the chapter", "The seventh edition"],
      answer: 1,
      explanation: "Correct: (b). Citations read left to right: chapter, then section, then subsection — 704.1 is Chapter 7, Section 04.1. (a) Tables have their own numbers. (c) The section is 04, not 7. (d) The edition is separate from the citation."
    },
    {
      q: "The fastest way to find a rule when you know a word but not its location is:",
      choices: ["The table of contents", "The index", "Chapter 1", "The appendix"],
      answer: 1,
      explanation: "Correct: (b). The index lists topics alphabetically with section numbers. (a) The table of contents is best when you know the system, not a word. (c) Chapter 1 is administration, not a finding tool. (d) Appendices hold supplementary material, not the index."
    },
    {
      q: "In code language, 'shall' means:",
      choices: ["You may do it if you wish", "You must do it", "You must not do it", "You should consider doing it"],
      answer: 1,
      explanation: "Correct: (b). 'Shall' is mandatory. (a) That is 'may.' (c) That is 'shall not.' (d) 'Should' is advisory language the code rarely uses for requirements."
    },
    {
      q: "An exception to a code rule:",
      choices: ["Cancels the whole rule", "Applies only to the specific case it names", "Applies to any similar case a plumber judges alike", "Must be approved by the manufacturer"],
      answer: 1,
      explanation: "Correct: (b). An exception carves out only the case it names; everything else still follows the rule. (a) The rule stands for all other cases. (c) The code does not allow a plumber to extend an exception by judgment. (d) Exceptions are written in the code, not granted by manufacturers."
    },
    {
      q: "A footnote under a code table is:",
      choices: ["Optional commentary you may skip", "Part of the table, and it can change what the table allows", "A suggestion from the publisher", "Only relevant in the next edition"],
      answer: 1,
      explanation: "Correct: (b). Footnotes are part of the table — for example, the 3-inch minimum for a building drain serving a water closet. (a) Skipping footnotes is the classic sizing error. (c) Footnotes are code text, not publisher notes. (d) Footnotes apply to the edition you are reading."
    },
    {
      q: "Where do you look first when a code question turns on what a word means?",
      choices: ["Chapter 3", "The index", "Chapter 2, Definitions", "Chapter 15"],
      answer: 2,
      explanation: "Correct: (c). Chapter 2 is the code's dictionary and defines terms for the whole book. (a) Chapter 3 is General Regulations. (b) The index finds locations, not meanings. (d) Chapter 15 lists referenced standards."
    },
    {
      q: "A section says 'in accordance with Section 705.' To answer a question about that section you must:",
      choices: ["Read Section 705 as well, because the answer may depend on it", "Ignore it — cross-references are only suggestions", "Assume Section 705 says the same thing", "Look it up only if you have spare time"],
      answer: 0,
      explanation: "Correct: (a). A cross-reference makes the other section part of the answer. (b) Cross-references are binding, not suggestions. (c) The referenced section usually adds a distinct requirement. (d) The lookup is unfinished until the reference is read."
    }
  ],
  studyGuide: `
<h3>Module 2 — Reading the Code: Quick Reference</h3>
<p><strong>Chapter map:</strong> 1 Administration · 2 Definitions · 3 General Regulations · 4 Fixtures · 5 Water Heaters · 6 Water Supply · 7 Sanitary Drainage · 8 Indirect/Special Waste · 9 Vents · 10 Traps, Interceptors &amp; Separators · 11 Storm Drainage · 12 Special Piping · 13 Nonpotable Water · 14 Graywater · 15 Referenced Standards.</p>
<p><strong>Citations:</strong> Read left to right — chapter, section, subsection, table. 704.1 = Chapter 7, Section 04.1 (drainage slope).</p>
<p><strong>Three ways in:</strong> Table of contents for systems · Index for words · Chapter 2 for meanings.</p>
<p><strong>Language:</strong> "Shall" = must · "May" = allowed · "Shall not" = prohibited. Exceptions cover only the case they name.</p>
<p><strong>Never skip:</strong> Footnotes under tables, cross-references to other sections, and referenced standards in Chapter 15.</p>
<p><strong>Self-check:</strong> Open your code book and find 704.1, Table 710.1(1), and the definition of "building drain" in under three minutes total. If you can, you are ready for Module 3.</p>
`
};
