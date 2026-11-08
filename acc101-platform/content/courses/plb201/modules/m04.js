// Plumbing 201 - Module 4: Fixture Counts & Minimum Facilities (IPC Ch. 4)
module.exports = {
  number: 4,
  slug: "fixture-counts-minimum-facilities",
  title: "Fixture Counts & Minimum Facilities (IPC Ch. 4)",
  estTime: "3–4 hours",
  objectives: [
    "Explain how Table 403.1 works: occupant load, occupancy type, and fixture ratios.",
    "Determine an occupant load from a building's use and floor area.",
    "Calculate the minimum number of water closets, lavatories, and other fixtures for a given occupancy.",
    "Apply the code's rules for separate facilities, accessibility, and family/assisted-use toilet rooms.",
    "Find fixture requirements for special cases such as drinking fountains, service sinks, and bathtubs/showers."
  ],
  sections: [
    {
      heading: "What Chapter 4 Does",
      html: `
<p>Chapter 4, Fixtures, Faucets and Fixture Fittings, answers a question every building must answer before it opens: how many toilets, sinks, and other fixtures must it have? Too few fixtures and people queue, sanitation fails, and a building cannot legally be occupied. Too many and the owner paid for plumbing nobody needs. The code sets the minimum — the smallest number of fixtures that makes the building usable — and the designer may always add more.</p>
<p>The chapter covers more than counts. It sets where fixtures must be located, how much clear space they need, how they must be installed, and what fittings they require. It covers water closets, urinals, lavatories, bathtubs, showers, sinks, drinking fountains, and service sinks, plus the faucets and fittings that serve them. It also ties into accessibility: fixture heights, clearances, and reach ranges that let people with disabilities use the facilities, which the code references through the accessibility standard.</p>
<p>The center of the chapter is <strong>Table 403.1, Minimum Number of Required Plumbing Fixtures</strong>. Every fixture-count question on the exam is a Table 403.1 question, and every one of them is solved the same way: find the occupancy, find the occupant load, apply the ratio, round up. This module teaches that method until it is automatic.</p>
<div class="callout"><strong>Key idea:</strong> Chapter 4 sets the minimum number of fixtures a building must have. The method is always the same: occupancy, then occupant load, then ratio, then round up.</div>`
    },
    {
      heading: "Step 1: Occupancy and Occupant Load",
      html: `
<p>Table 403.1 is organized by <strong>occupancy</strong> — what the building is used for: assembly, business, educational, factory, institutional, mercantile, residential, storage, and more. The same floor area needs very different fixture counts as a theater, an office, or a warehouse, because people use the building differently. Your first job is to identify the occupancy correctly; a wrong occupancy makes every number after it wrong.</p>
<p>Next comes the <strong>occupant load</strong>: how many people the building is designed to hold. The occupant load comes from the building code's occupant-load factors (people per square foot for that use), applied to the floor area, or from a fixed number of seats or beds where the table says so. For example, an assembly space with fixed seats uses its seat count; a business office uses a floor-area factor. The plumbing code takes the occupant load as a given and turns it into fixtures.</p>
<p>Occupant load is usually split into male and female halves, because the table gives separate ratios for men and women. The code's default split is 50/50 unless the occupancy's own rules say otherwise. That split matters: a men's water closet ratio and a women's water closet ratio are different numbers, and they are calculated separately before you add anything together.</p>
<div class="callout"><strong>Key idea:</strong> Occupancy first, occupant load second, ratios third. If the occupancy is wrong, the answer is wrong no matter how careful the arithmetic is.</div>`
    },
    {
      heading: "Step 2: Apply the Ratio and Round Up",
      html: `
<p>Table 403.1 gives each fixture as a ratio: one water closet per so many occupants, one lavatory per so many occupants, and so on, with separate columns for male and female. The method is division followed by rounding <strong>up</strong> to the next whole fixture. A calculation that gives 2.1 water closets means 3 water closets — you cannot install a tenth of a toilet, and the code requires the minimum to be met, not approximated. Rounding down is the most common fixture-count error, and it is always wrong.</p>
<p>Work an example. A small office has an occupant load of 60 people — 30 male, 30 female. Table 403.1's business occupancy calls for 1 water closet per 25 males for the first 50 and 1 per 50 after that, and 1 per 25 females for the first 50 and 1 per 50 after that (the exact ratio steps are in the table; always read them from the table, not from memory). For 30 of each sex, that works out to 2 water closets for men and 2 for women — and the lavatory column gives its own count, calculated the same way. Each fixture type is calculated independently; a water closet count never substitutes for a lavatory count.</p>
<p>Two details finish the job. First, <strong>urinals</strong> may substitute for some water closets in men's facilities where the table allows it, but never below the table's minimum number of water closets. Second, <strong>drinking fountains</strong> and <strong>service sinks</strong> have their own rows in the table and their own rules, and a building that needs a service sink needs it even if its toilet count is already generous.</p>
<div class="callout"><strong>Key idea:</strong> Divide, then round up — always. A fraction of a fixture is a whole fixture the code requires.</div>`
    },
    {
      heading: "Separate Facilities, Accessibility, and Special Rooms",
      html: `
<p>The code requires <strong>separate facilities</strong> for each sex in most occupancies, with exceptions the table and text spell out — for example, small occupancies where a single-user toilet room may serve both sexes, and dwelling units, which are not public facilities at all. When separate facilities are required, each sex's fixtures are counted and provided separately; you cannot average the two counts together.</p>
<p><strong>Accessibility</strong> is woven through Chapter 4. The code requires accessible fixtures in public and employee facilities, with heights, clearances, and grab bars set by the accessibility standard the code references (ICC A117.1). A restroom that has the right number of fixtures but no accessible water closet fails the code just as surely as one that is short a fixture. On the exam, accessibility questions usually test whether you know an accessible fixture is required, not the exact dimension — but the dimension lives in the referenced standard, and you should know where to find it.</p>
<p>Finally, the code recognizes <strong>family or assisted-use toilet rooms</strong>: single-user rooms with a water closet and lavatory that anyone may use, including a person with a caregiver or a parent with a small child. In larger assembly and mercantile occupancies the code requires them in addition to the separate facilities. They are not a substitute for the required separate facilities — they are extra.</p>
<div class="callout"><strong>Key idea:</strong> Count, then separate, then make accessible. A correct count in a room nobody can enter is not a compliant building.</div>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Table 403.1 is the fixture-count table: occupancy, occupant load, ratio, round up.</li>
<li>Occupant load comes from the building's use and floor area (or seats/beds); the code usually splits it 50/50 male and female.</li>
<li>Each fixture type is calculated independently; a water closet never substitutes for a lavatory.</li>
<li>Urinals may substitute for some men's water closets where the table allows, never below the table's minimum water closet count.</li>
<li>Separate facilities are required for each sex in most occupancies, with narrow exceptions for small occupancies and single-user rooms.</li>
<li>Accessible fixtures are required in public and employee facilities; family/assisted-use toilet rooms are required in larger assembly and mercantile buildings, in addition to separate facilities.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Rounding a fixture count down. 2.1 water closets is 3 water closets. The code sets a minimum, and a fraction of a fixture is a fixture you still owe.</div>
<div class="callout"><strong>Common mistake:</strong> Averaging the male and female counts together. The table's ratios are per sex, and the facilities are separate — calculate each sex on its own, then provide each sex's fixtures.</div>
<p><strong>Ready-to-Work link:</strong> Fixture-count questions are among the most common on the Michigan journeyman exam, and they are all open-book Table 403.1 lookups. The lab for this course turns the same method into timed drills.</p>`
    }
  ],
  keyTerms: [
    { term: "Table 403.1", def: "The IPC table of minimum required plumbing fixtures, organized by occupancy with separate male and female ratios." },
    { term: "Occupancy", def: "The use of a building (assembly, business, educational, mercantile, residential, and so on); it decides which row of Table 403.1 applies." },
    { term: "Occupant load", def: "The number of people a building is designed to hold, from floor-area factors or seat/bed counts; the input to fixture-count math." },
    { term: "Fixture ratio", def: "The table's 'one fixture per so many occupants' figure, applied separately for each sex and each fixture type." },
    { term: "Separate facilities", def: "Toilet rooms provided separately for each sex, required in most occupancies." },
    { term: "Single-user toilet room", def: "A toilet room for one person at a time, which in small occupancies may serve both sexes." },
    { term: "Family / assisted-use toilet room", def: "A single-user room with a water closet and lavatory for use by a person with a caregiver or a parent with a child; required in larger assembly and mercantile occupancies." },
    { term: "Accessible fixture", def: "A fixture installed to the heights, clearances, and reach ranges of the referenced accessibility standard (ICC A117.1)." },
    { term: "Urinal substitution", def: "The table's allowance to replace some men's water closets with urinals, never below the table's minimum water closet count." },
    { term: "Drinking fountain", def: "A fixture providing drinking water; Table 403.1 sets its own minimum count by occupancy." },
    { term: "Service sink", def: "A sink for cleaning and maintenance use (mop sink); required by Table 403.1 in many occupancies." },
    { term: "Water closet", def: "A toilet fixture; the fixture type most fixture-count questions are built around." },
    { term: "Lavatory", def: "A hand-washing basin; counted separately from water closets in Table 403.1." },
    { term: "Clearance", def: "The open floor space the code requires in front of and around a fixture so it can be used and serviced." }
  ],
  video: {
    title: "Bathroom Plumbing Rough In!",
    embedUrl: "https://www.youtube.com/embed/kiqhqeNnPog",
    note: "A full bathroom rough-in walk-through that ties fixture layout to code: main soil stack and drain slope, shower drain and trap, pressure-balancing shower valve, lavatory trap-arm distance, venting, and vent termination clearances. Watch how every dimension is locked in at rough-in — before tile, before fixtures — and compare the fixture spacing and clearances shown with the Chapter 4 rules in this module.",
    more: [
      { title: "How To Measure a 45 Degree Offset EASILY!", url: "https://www.youtube.com/watch?v=Mtmu57pWxGY" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A business occupancy has an occupant load of 40 people (20 male, 20 female). Table 403.1 requires 1 water closet per 25 of each sex for the first 50. How many water closets are required for men and for women? Show the rounding.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Men: 20 ÷ 25 = 0.8, which rounds up to <strong>1 water closet</strong>. Step 2: Women: 20 ÷ 25 = 0.8, which rounds up to <strong>1 water closet</strong>. Step 3: Total 2 water closets, one in each separate facility — the fractions round up, never down, and the sexes are calculated separately.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> An assembly occupancy has 300 occupants (150 male, 150 female). The table requires 1 men's water closet per 125 and 1 women's water closet per 65. How many of each are required?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Men: 150 ÷ 125 = 1.2, which rounds up to <strong>2 water closets</strong>. Step 2: Women: 150 ÷ 65 = 2.31, which rounds up to <strong>3 water closets</strong>. Step 3: The women's ratio is tighter because the table recognizes longer use times — the counts are different, and averaging them would short the women's room.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A calculation gives 3.0 lavatories for men and 2.2 lavatories for women. How many lavatories are installed in each room, and why?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Men: 3.0 is already whole, so <strong>3 lavatories</strong>. Step 2: Women: 2.2 rounds up to <strong>3 lavatories</strong>. Step 3: The code sets a minimum count, and a fraction of a fixture is still a fixture owed — 2.2 means the third lavatory is required, not optional.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A men's room requires 4 water closets. The designer wants to install 2 water closets and 2 urinals. Is that allowed? Explain the rule.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Urinals may substitute for some men's water closets where Table 403.1 allows it. Step 2: But the substitution can never drop the water closet count below the table's minimum number of water closets for that occupancy — the table states that minimum, and it must be read, not guessed. Step 3: So the answer depends on the table's minimum for this occupancy: if the minimum is 2, the design is allowed; if it is 3 or 4, it is not. Always check the table's minimum column before substituting.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A small office with an occupant load of 12 wants one single-user toilet room with a water closet and lavatory instead of separate men's and women's rooms. Is that permitted? What governs the answer?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Yes, it can be permitted — the code allows a single-user toilet room to serve both sexes in small occupancies. Step 2: What governs is Table 403.1 and its footnotes for the occupancy, which set the occupant-load threshold for the exception. Step 3: The room must still contain the required fixtures, be accessible, and meet the chapter's installation and clearance rules; the exception is about separation, not about fixture count.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A new restaurant's plans show the correct number of water closets and lavatories, but no accessible water closet and no service sink. What is wrong, and what two rules are being missed?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The accessible-fixture rule is missed — public facilities must include accessible fixtures to the referenced accessibility standard, and a correct count without an accessible fixture fails. Step 2: The service-sink rule is missed — Table 403.1 requires a service sink for the occupancy, and it is counted on its own row, not covered by the toilet count. Step 3: Both must be added before the plans can pass; fixture count, accessibility, and service fixtures are three separate requirements.</p>"
    }
  ],
  quiz: [
    {
      q: "Fixture counts are found in:",
      choices: ["Table 403.1", "Table 604.3", "Table 710.1(1)", "Table 1106.3"],
      answer: 0,
      explanation: "Correct: (a). Table 403.1 is the minimum-fixtures table. (b) Table 604.3 is water supply design criteria. (c) Table 710.1(1) sizes building drains. (d) Table 1106.3 sizes vertical leaders."
    },
    {
      q: "The first step in a fixture-count calculation is to determine the:",
      choices: ["Pipe size", "Occupancy and occupant load", "Water pressure", "Roof area"],
      answer: 1,
      explanation: "Correct: (b). Occupancy picks the table row and occupant load is the input to the ratios. (a) Pipe size comes from later chapters. (c) Water pressure is a Chapter 6 matter. (d) Roof area is for storm drainage."
    },
    {
      q: "A calculation gives 2.1 water closets. The code requires:",
      choices: ["2 water closets", "3 water closets", "2 water closets and a urinal", "2.1 water closets"],
      answer: 1,
      explanation: "Correct: (b). Fixture counts always round up to the next whole fixture. (a) Rounding down leaves the building short of the minimum. (c) A urinal does not replace the fractional water closet. (d) A tenth of a fixture cannot be installed."
    },
    {
      q: "The occupant load is normally split:",
      choices: ["75% male, 25% female", "50% male, 50% female unless the occupancy rules say otherwise", "By the owner's preference", "By the number of fixtures already installed"],
      answer: 1,
      explanation: "Correct: (b). The default split is 50/50. (a) No such default exists. (c) The owner does not set the split. (d) The load is an input, not an output of the fixture count."
    },
    {
      q: "Urinals may substitute for men's water closets:",
      choices: ["Without limit", "Only where Table 403.1 allows, never below its minimum water closet count", "Only in residential work", "Only if no women use the building"],
      answer: 1,
      explanation: "Correct: (b). Substitution is allowed within the table's limits and never below its minimum. (a) There is always a minimum water closet count. (c) Urinal substitution is a commercial/public rule, not residential. (d) The rule depends on the table, not on who uses the building."
    },
    {
      q: "A building with the right number of fixtures but no accessible water closet:",
      choices: ["Passes, because the count is correct", "Fails, because accessible fixtures are required in public and employee facilities", "Passes if the owner agrees", "Fails only if someone complains"],
      answer: 1,
      explanation: "Correct: (b). Accessibility is a code requirement, not an option. (a) Count and accessibility are separate requirements. (c) The owner's agreement cannot waive the code. (d) The code applies whether or not anyone complains."
    },
    {
      q: "Each fixture type in Table 403.1 is calculated:",
      choices: ["Together, as one combined total", "Independently — a water closet never substitutes for a lavatory", "Only for the sex with more occupants", "From the pipe size"],
      answer: 1,
      explanation: "Correct: (b). Every fixture type has its own ratio and its own count. (a) Combining types would let toilets cover a lavatory shortage. (c) Both sexes are calculated separately. (d) Fixture counts come from occupant load, not pipe size."
    },
    {
      q: "Family or assisted-use toilet rooms are:",
      choices: ["A substitute for separate facilities", "Required in larger assembly and mercantile occupancies, in addition to separate facilities", "Required in every home", "Only for employees"],
      answer: 1,
      explanation: "Correct: (b). They are extra rooms for a person with a caregiver or a parent with a child, on top of the separate facilities. (a) They do not replace separate facilities. (c) They are a public-occupancy requirement, not a residential one. (d) They serve the public, not only employees."
    }
  ],
  studyGuide: `
<h3>Module 4 — Fixture Counts &amp; Minimum Facilities: Quick Reference</h3>
<p><strong>Method:</strong> Occupancy → occupant load → ratio per sex → round UP. Table 403.1.</p>
<p><strong>Occupant load:</strong> From the building's use and floor area (or seats/beds); default split 50% male, 50% female.</p>
<p><strong>Rounding:</strong> Always up. 2.1 water closets = 3 water closets.</p>
<p><strong>Per type:</strong> Each fixture type is calculated on its own; water closets never cover lavatories.</p>
<p><strong>Urinals:</strong> May substitute for some men's water closets where the table allows, never below the table's minimum water closet count.</p>
<p><strong>Separate + accessible:</strong> Separate facilities for each sex in most occupancies; accessible fixtures required; family/assisted-use rooms are extra in larger assembly and mercantile buildings.</p>
<p><strong>Self-check:</strong> Given an occupant load of 80 (40/40) and a ratio of 1 per 25, can you get the count and the rounding right without looking? That is the whole skill.</p>
`
};
