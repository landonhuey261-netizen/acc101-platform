// Plumbing 202 - Module 11: Water Conservation: Low-Flow Fixtures & Reuse (IPC Ch. 13)
module.exports = {
  number: 11,
  slug: "water-conservation-low-flow-fixtures-reuse",
  title: "Water Conservation: Low-Flow Fixtures & Reuse (IPC Ch. 13)",
  estTime: "3–4 hours",
  objectives: [
    "Explain why water conservation is a plumbing problem, not just an environmental one.",
    "Name the low-flow fixture standards: 1.28 gpf water closets, 1.5 gpm lavatories, 2.0 gpm showers.",
    "Explain how IPC Chapter 13 governs nonpotable water systems.",
    "Describe graywater reuse: what it is, where it may be used, and what it may never touch.",
    "Explain rainwater harvesting and the cross-connection protection it requires."
  ],
  sections: [
    {
      heading: "Why Conservation Is a Plumber's Job",
      html: `
<p>Water conservation is usually talked about as an environmental issue, but for a plumber it is a design issue. Every gallon a fixture does not use is a gallon the water supply does not have to deliver, the water heater does not have to heat, and the sewer does not have to carry. A building full of low-flow fixtures needs smaller water service, smaller water heaters, and smaller drains — and a building whose fixtures waste water will have a water bill, a sewer bill, and an energy bill that all say so. The plumber who understands conservation can design a smaller, cheaper, better building.</p>
<p>The code has caught up with the idea. The IPC's fixture flow rates have fallen steadily over the decades — a water closet that once used 5 gallons per flush now uses 1.28 — and the code's Chapter 13 now governs <strong>nonpotable water systems</strong>: rainwater, graywater, and reclaimed water, with rules for how they are collected, treated, stored, and kept separate from the drinking water. The plumber who installs a low-flow fixture or a graywater system is working inside those rules, not outside them.</p>
<p>Conservation also changes the plumbing itself. Low-flow fixtures change the drainage: less water in the drain means less carrying capacity for solids, which is why the code's minimum slopes and the drain's design matter more, not less, in a low-flow building. A plumber who installs a 1.28 gpf water closet on a flat, oversized drain has built a clog.</p>
<div class="callout"><strong>Key idea:</strong> Every gallon saved is a gallon not delivered, not heated, and not carried away. Conservation is a design issue — and low-flow fixtures change the drainage, so the drain's slope matters more, not less.</div>`
    },
    {
      heading: "Low-Flow Fixtures: The Numbers",
      html: `
<p>The modern low-flow standards are the numbers a plumber must know. A <strong>water closet</strong> is now <strong>1.28 gallons per flush (gpf)</strong> at most (the federal standard is 1.6 gpf; many codes and programs require 1.28, the WaterSense level). A <strong>lavatory faucet</strong> is <strong>1.5 gallons per minute (gpm)</strong> at most, and a <strong>showerhead</strong> is <strong>2.0 gpm</strong> at most. A kitchen faucet is typically 1.8 gpm. These are maximums, not targets: a fixture that uses less is better, and a fixture that uses more is a code violation in a jurisdiction that has adopted the standard.</p>
<p>Low-flow fixtures work by changing the fixture, not by starving it. A 1.28 gpf water closet uses a redesigned bowl and trapway to clear waste with less water; a 1.5 gpm faucet uses an aerator to mix air into the stream so it feels full while using less water; a 2.0 gpm showerhead uses a redesigned spray pattern. The plumber's job is to install the fixture the code requires and to make sure the system behind it — the pressure, the pipe size, the drain slope — lets it work as designed.</p>
<p>The most common low-flow failure is a water closet that does not clear the bowl, and the cause is usually not the fixture: it is a drain that is too flat, too large, or too long for the reduced flow, or a supply pressure too low to drive the flush. A low-flow fixture on a bad drain is a clog waiting to happen, and the fix is the drain, not a bigger flush.</p>
<div class="callout"><strong>Key idea:</strong> Water closet 1.28 gpf · Lavatory 1.5 gpm · Shower 2.0 gpm. Low-flow fixtures work by redesigning the fixture, not by starving it — and they need a drain with the right slope to carry the waste.</div>`
    },
    {
      heading: "IPC Chapter 13: Nonpotable Water Systems",
      html: `
<p><strong>IPC Chapter 13</strong> governs <strong>nonpotable water systems</strong>: water that is not for drinking, collected and used on the site. The chapter covers rainwater harvesting, graywater, and reclaimed water, and its central rule is separation: nonpotable water must be kept physically separate from the potable supply, its piping must be identified (usually by color and labeling), and its outlets must be marked so no one mistakes them for drinking water. A cross-connection between a nonpotable system and the potable supply is the hazard the chapter exists to prevent.</p>
<p>The chapter also sets the treatment and storage rules: nonpotable water must be filtered and disinfected to the level its use requires, its storage tanks must be covered and protected, and its distribution must be designed so it cannot be confused with the potable system. The details vary by use — toilet flushing needs less treatment than irrigation, and irrigation needs less than a cooling tower — but the separation rule does not vary.</p>
<p>Chapter 13 is the code's recognition that the water a building uses does not all have to be drinking water. A toilet does not need potable water to flush; a landscape does not need potable water to grow. The chapter lets a building use less drinking water by using the right water for each job — and it makes the plumber the person who keeps those waters apart.</p>
<div class="callout"><strong>Key idea:</strong> IPC Chapter 13 governs nonpotable water: rainwater, graywater, and reclaimed water. Its central rule is separation — nonpotable piping is identified, labeled, and never connected to the potable supply.</div>`
    },
    {
      heading: "Graywater Reuse: What It Is and What It May Never Touch",
      html: `
<p><strong>Graywater</strong> is the wastewater from bathtubs, showers, lavatories, and washing machines — water that has been used but is not sewage. (Water from a water closet or a kitchen sink with a garbage disposal is <strong>blackwater</strong>, not graywater, and it is treated as sewage.) Graywater can be collected, filtered, and reused for toilet flushing and for subsurface landscape irrigation, where the code and the local authority allow it. It must never be used for drinking, cooking, or bathing, and it must never be sprayed where people can contact it.</p>
<p>A graywater system has the same parts as any plumbing system — collection piping, a filter, a storage tank, a pump, and distribution piping — plus the identification that marks it as nonpotable: purple pipe or purple labeling is the usual convention, and every outlet is marked "nonpotable — do not drink." The system must have a backup: when the graywater tank is empty, the toilets it serves must still flush, so the system is connected to the potable supply through an air gap or an approved backflow assembly that lets potable water fill the tank without ever letting graywater reach the potable supply.</p>
<p>Graywater's value is scale: a family of four produces enough graywater from showers and laundry to flush its toilets and water its landscape, cutting its drinking-water use by a third or more. Its risk is complacency: a graywater system that is not maintained becomes a health hazard, because graywater left standing grows bacteria. The plumber's job is to install it correctly, label it clearly, and leave the owner with a maintenance schedule.</p>
<div class="callout"><strong>Key idea:</strong> Graywater is water from showers, tubs, lavatories, and laundry — not from toilets or kitchen disposals. It may flush toilets and irrigate subsurface; it must never be drunk, cooked with, or sprayed where people can touch it.</div>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Conservation is a design issue: less water means smaller service, smaller heaters, and smaller drains — and a drain that must still carry solids on less water.</li>
<li>Low-flow standards: water closet 1.28 gpf · lavatory 1.5 gpm · shower 2.0 gpm.</li>
<li>IPC Chapter 13 governs nonpotable water systems: rainwater, graywater, and reclaimed water, with separation as the central rule.</li>
<li>Graywater is water from showers, tubs, lavatories, and laundry; it may flush toilets and irrigate subsurface, never be drunk or sprayed on people.</li>
<li>Nonpotable piping is identified and labeled; its backup supply comes through an air gap or an approved assembly, never a direct connection.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Installing a 1.28 gpf water closet on a flat or oversized drain and blaming the fixture when it clogs. The drain's slope and size must match the reduced flow.</div>
<div class="callout"><strong>Common mistake:</strong> Treating kitchen sink water (especially with a garbage disposal) as graywater. It is blackwater — sewage — and it must never enter a graywater system.</div>
<p><strong>Ready-to-Work link:</strong> The final module pulls the whole course together: the assemblies, the tests, the pumps, and the systems, and the habits that keep the water supply safe.</p>`
    }
  ],
  keyTerms: [
    { term: "WaterSense", def: "The EPA program that certifies water-efficient fixtures; its water closet level is 1.28 gpf." },
    { term: "gpf", def: "Gallons per flush — the water a water closet uses per flush; the modern standard is 1.28 gpf." },
    { term: "gpm", def: "Gallons per minute — the flow rate of a faucet or showerhead; lavatory 1.5 gpm, shower 2.0 gpm." },
    { term: "Nonpotable water", def: "Water not for drinking: rainwater, graywater, and reclaimed water, governed by IPC Chapter 13." },
    { term: "Graywater", def: "Wastewater from bathtubs, showers, lavatories, and washing machines; reusable for toilet flushing and subsurface irrigation." },
    { term: "Blackwater", def: "Wastewater from water closets (and kitchen sinks with garbage disposals); treated as sewage, never reused as graywater." },
    { term: "Reclaimed water", def: "Treated wastewater from a municipal system, supplied for nonpotable uses such as irrigation and toilet flushing." },
    { term: "Rainwater harvesting", def: "Collecting rainwater from a roof, filtering and storing it, and using it for nonpotable purposes." },
    { term: "IPC Chapter 13", def: "The IPC chapter governing nonpotable water systems; its central rule is separation from the potable supply." },
    { term: "Purple pipe", def: "The conventional identification for nonpotable water piping: purple pipe or purple labeling, with outlets marked 'nonpotable — do not drink.'" },
    { term: "Aerator", def: "The fitting on a faucet that mixes air into the stream, so a low-flow faucet feels full while using less water." },
    { term: "Subsurface irrigation", def: "Delivering graywater or reclaimed water below the soil surface, where people cannot contact it." }
  ],
  video: {
    title: "How to build an easy DIY greywater system for your home",
    embedUrl: "https://www.youtube.com/embed/Bh6N1qnUmzU",
    note: "A homeowner builds a simple greywater system — laundry water diverted to the garden — with the parts and the routing shown step by step. Watch it, then name the two things the system must have to be safe: what it may water, and what it must never touch.",
    more: [
      { title: "What Makes a Building Green and Sustainable?", url: "https://www.youtube.com/watch?v=Ls_t5w5Sdek" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A building's water closets use 1.28 gpf, its lavatories use 1.5 gpm, and its showers use 2.0 gpm. A plumber suggests replacing them with older 3.5 gpf water closets to 'fix' a drain that clogs. What is wrong with the suggestion?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The suggestion treats the fixture as the problem when the drain is the problem. Step 2: A 1.28 gpf water closet that clogs is usually on a drain that is too flat, too large, or too long for the reduced flow. Step 3: The fix is the drain — its slope and size — not a bigger flush, which wastes water and violates the code's fixture standard.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A graywater system collects water from showers, lavatories, and the washing machine. The owner wants to add the kitchen sink (with a garbage disposal) to the system. What is your answer?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: No — kitchen sink water, especially with a garbage disposal, is blackwater, not graywater. Step 2: It carries food waste and grease that a graywater system cannot handle, and it must be treated as sewage. Step 3: The kitchen sink stays on the sanitary drainage system; only the showers, tubs, lavatories, and laundry may feed the graywater system.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A graywater system's storage tank is empty and the toilets it serves need to flush. How is the backup supply provided, and what protection is required?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The backup is potable water, supplied to the tank so the toilets can still flush. Step 2: The connection must be through an air gap or an approved backflow assembly — never a direct connection — so graywater can never reach the potable supply. Step 3: The graywater piping is identified (purple pipe or labeling) and every outlet is marked 'nonpotable — do not drink.'</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A rainwater harvesting system collects roof water for toilet flushing. What does IPC Chapter 13 require for its piping?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The rainwater system is a nonpotable water system under IPC Chapter 13. Step 2: Its piping must be physically separate from the potable supply, identified (purple pipe or labeling), and its outlets marked so no one mistakes them for drinking water. Step 3: The water must be filtered and disinfected to the level its use requires, and its storage tank must be covered and protected.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A family of four wants to cut its drinking-water use. Which two uses can graywater cover, and roughly how much can it save?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Graywater from showers and laundry can flush the family's toilets and irrigate the landscape subsurface. Step 2: Those two uses can cut drinking-water use by a third or more. Step 3: The graywater must never be used for drinking, cooking, or bathing, and it must never be sprayed where people can contact it.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A low-flow lavatory faucet feels weak and the owner blames the aerator. What should the plumber check first?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Check the aerator itself — a clogged aerator (scale, debris) is the most common cause of a weak-feeling low-flow faucet, and it is cleaned or replaced in a minute. Step 2: Check the supply pressure against Table 604.3 (a lavatory needs 1.5 gpm at 8 psi). Step 3: If the aerator is clear and the pressure is adequate, the faucet is working as designed — a low-flow stream feels different from an old 2.2 gpm stream, and that difference is the point.</p>"
    }
  ],
  quiz: [
    {
      q: "The modern water closet standard is:",
      choices: ["3.5 gpf", "1.6 gpf", "1.28 gpf", "5.0 gpf"],
      answer: 2,
      explanation: "Correct: (c). 1.28 gpf is the WaterSense level many codes require (the federal standard is 1.6 gpf). (a) 3.5 gpf is an old standard. (b) 1.6 gpf is the federal maximum, not the WaterSense level. (d) 5.0 gpf is a pre-1980s fixture."
    },
    {
      q: "A lavatory faucet's maximum flow is:",
      choices: ["2.2 gpm", "1.5 gpm", "2.0 gpm", "1.0 gpm"],
      answer: 1,
      explanation: "Correct: (b). A lavatory faucet is 1.5 gpm at most. (a) 2.2 gpm is the old standard. (c) 2.0 gpm is the showerhead maximum. (d) 1.0 gpm is below the standard."
    },
    {
      q: "IPC Chapter 13 governs:",
      choices: ["Storm drainage", "Nonpotable water systems", "Medical gas", "Vents"],
      answer: 1,
      explanation: "Correct: (b). Chapter 13 governs nonpotable water systems. (a) Storm drainage is Chapter 11. (c) Medical gas is Chapter 12. (d) Vents are Chapter 9."
    },
    {
      q: "Graywater is water from:",
      choices: ["Water closets and kitchen sinks with disposals", "Bathtubs, showers, lavatories, and washing machines", "Swimming pools", "Boilers"],
      answer: 1,
      explanation: "Correct: (b). Graywater is from tubs, showers, lavatories, and laundry. (a) Water closets and kitchen disposals are blackwater. (c) Pool water is chemically treated waste. (d) Boiler water is a high hazard."
    },
    {
      q: "Graywater may be used for:",
      choices: ["Drinking and cooking", "Toilet flushing and subsurface irrigation", "Bathing", "Spraying on a playground"],
      answer: 1,
      explanation: "Correct: (b). Graywater may flush toilets and irrigate subsurface. (a) Graywater must never be drunk or cooked with. (c) Graywater must never be used for bathing. (d) Graywater must never be sprayed where people can contact it."
    },
    {
      q: "Nonpotable piping is identified by:",
      choices: ["Copper color", "Purple pipe or purple labeling, with outlets marked 'nonpotable — do not drink'", "No marking at all", "Red paint"],
      answer: 1,
      explanation: "Correct: (b). Nonpotable piping is purple or purple-labeled, with marked outlets. (a) Copper color is potable piping. (c) No marking is a cross-connection waiting to happen. (d) Red paint is not the convention."
    },
    {
      q: "A 1.28 gpf water closet that clogs is most often caused by:",
      choices: ["A defective fixture", "A drain that is too flat, too large, or too long for the reduced flow", "Low water pressure in the city main", "A clogged vent"],
      answer: 1,
      explanation: "Correct: (b). The drain's slope and size must match the reduced flow. (a) The fixture is rarely the cause. (c) City main pressure is not the usual cause. (d) A clogged vent causes gurgling, not a failure to clear the bowl."
    },
    {
      q: "A graywater system's backup potable supply must connect through:",
      choices: ["A direct connection", "An air gap or an approved backflow assembly", "A garden hose", "The sewer"],
      answer: 1,
      explanation: "Correct: (b). The backup must come through an air gap or an approved assembly so graywater can never reach the potable supply. (a) A direct connection is a cross-connection. (c) A garden hose is not a supply connection. (d) The sewer is not a water supply."
    }
  ],
  studyGuide: `
<h3>Module 11 — Water Conservation & Reuse: Quick Reference</h3>
<p><strong>Low-flow standards:</strong> Water closet 1.28 gpf · Lavatory 1.5 gpm · Shower 2.0 gpm · Kitchen faucet 1.8 gpm.</p>
<p><strong>IPC Chapter 13:</strong> Nonpotable water systems (rainwater, graywater, reclaimed) · Central rule: separation from the potable supply.</p>
<p><strong>Graywater:</strong> From tubs, showers, lavatories, laundry · May flush toilets and irrigate subsurface · Never drink, cook, bathe, or spray on people.</p>
<p><strong>Blackwater:</strong> From water closets and kitchen disposals · Treated as sewage · Never in a graywater system.</p>
<p><strong>Identification:</strong> Purple pipe or labeling · Outlets marked "nonpotable — do not drink" · Backup supply through an air gap or an approved assembly.</p>
<p><strong>Self-check:</strong> A 1.28 gpf water closet clogs. Is the fixture or the drain the likely cause, and what do you check first?</p>
`
};
