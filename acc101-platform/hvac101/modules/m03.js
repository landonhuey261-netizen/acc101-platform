// HVAC 101 - Module 3: Refrigerants: Types, Properties & Safety
module.exports = {
  number: 3,
  slug: "refrigerants-types-properties-safety",
  title: "Refrigerants: Types, Properties & Safety",
  estTime: "3–4 hours",
  objectives: [
    "Classify common refrigerants as CFC, HCFC, HFC, or HFO and name the chemical difference that defines each family.",
    "Explain ozone depletion potential and global warming potential and why chlorine drives the first and long atmospheric life drives the second.",
    "Summarize the EPA Section 608 Core ideas introduced here: the venting ban, certification, and the Clean Air Act and Montreal Protocol background.",
    "Read an ASHRAE-style safety group such as A1 or A2L and state what each character means.",
    "Handle, store, and identify refrigerant cylinders safely, including why cylinders are never heated or overfilled."
  ],
  sections: [
    {
      heading: "Four Families, One Chemical Story",
      html: `
<p>Refrigerant families are defined by which atoms are in the molecule. <strong>CFCs</strong> (chlorofluorocarbons) contain chlorine, fluorine, and carbon, and no hydrogen; R-12 is the classic example. <strong>HCFCs</strong> (hydrochlorofluorocarbons) add hydrogen, which makes the molecule break down sooner in the atmosphere; R-22 is the example you will meet in older air conditioners. <strong>HFCs</strong> (hydrofluorocarbons) drop the chlorine entirely; R-134a and the pair blended into R-410A belong here. <strong>HFOs</strong> (hydrofluoroolefins) are a newer family built to break down very quickly in the atmosphere; R-1234yf in newer vehicles is the familiar name.</p>
<p>The story arc is environmental. Chlorine carried high into the stratosphere attacks ozone, the layer that screens ultraviolet radiation. Because CFC molecules are so stable, they survive the trip up and release their chlorine where it does the most harm, which is why CFCs were phased out first. HCFCs, with hydrogen making them less stable, do less ozone damage per pound but still do some, so they followed into phaseout; new R-22 production and import for use in new equipment ended years ago, and supplies for service come from recovered and reclaimed stock. HFCs spare the ozone layer completely but many are powerful greenhouse gases. Newer HFO and HFC/HFO blend refrigerants aim to keep ozone safe while cutting climate impact sharply.</p>
<div class="callout"><strong>Key idea:</strong> Chlorine is the ozone problem. No chlorine means zero ozone depletion potential, but a refrigerant can still carry a heavy climate cost. The industry's direction is no chlorine and short atmospheric life.</div>
<p>Blends deserve a note. R-410A is a blend of two HFCs that behaves almost like a single refrigerant. Other blends, covered in Module 8, boil across a small temperature range called glide. Always identify the exact refrigerant on the equipment nameplate before connecting gauges or adding charge; similar-looking systems can hold very different fluids.</p>`
    },
    {
      heading: "ODP, GWP, and the Rules That Follow From Them",
      html: `
<p><strong>Ozone depletion potential (ODP)</strong> compares a refrigerant's ozone harm with a reference CFC, which is set at 1.0. HCFCs such as R-22 have a small fraction of that value because most of the molecule breaks down before reaching the stratosphere. HFCs and HFOs contain no chlorine, so their ODP is zero. <strong>Global warming potential (GWP)</strong> compares a refrigerant's climate warming effect with carbon dioxide, set at 1, over a stated time horizon. Long-lived HFCs can have GWP values in the thousands; HFOs are designed to be near the bottom of the scale. Exact values are published data to look up, not numbers to guess, and this course will not ask you to memorize a table of them.</p>
<p>Two agreements and laws shape your work. The <strong>Montreal Protocol</strong> is the international agreement under which countries phased out ozone-depleting substances. In the United States, the <strong>Clean Air Act</strong> carries the program, and its <strong>Section 608</strong> rules govern refrigerant handling: who may buy refrigerant, who may service appliances, and what must be recovered instead of released.</p>
<p>The rule with no exceptions in daily work is the <strong>venting ban</strong>: knowingly releasing refrigerant to the atmosphere during service, repair, or disposal is prohibited. Refrigerant is recovered into approved cylinders, then recycled or reclaimed through proper channels. EPA Section 608 certification — Core plus Type I, II, or III depending on the equipment — is the credential technicians earn from EPA-approved certifying organizations to do this work legally. This course starts that preparation; it does not itself certify anyone.</p>
<div class="callout"><strong>Key idea:</strong> Passing a section of the EPA 608 exam requires 70% or better, each section has 25 questions, Core is required with every type, and certification does not expire. Those are the published facts; testing fees and dates are set by the testing organization, not by EPA.</div>`
    },
    {
      heading: "Safety Groups and What the Letters Mean",
      html: `
<p>Refrigerants are classified by toxicity and flammability into <strong>safety groups</strong> written as a letter plus a number, such as A1. The letter covers toxicity: <strong>A</strong> means lower toxicity, <strong>B</strong> means higher toxicity. The number covers flammability: <strong>1</strong> means no flame propagation under test conditions, <strong>2L</strong> means lower flammability with a slow burning velocity, <strong>2</strong> means flammable, and <strong>3</strong> means higher flammability. Reading the group tells you how cautious the installation rules will be before you ever open a manual.</p>
<p>Most refrigerants in this introductory course — R-22, R-134a, R-410A, and R-404A — are A1: lower toxicity and no flame propagation, which is one reason they became so common. Ammonia, used in large industrial plants, is B2L: higher toxicity, lower flammability, and it demands trained operators and purpose-built machinery rooms. Several newer low-GWP refrigerants are A2L: lower toxicity but mildly flammable, which adds rules about charge size, ventilation, leak detection, and ignition sources that later courses and manufacturer instructions spell out. Hydrocarbon refrigerants are A3 and are handled under strict limits.</p>
<p>Two cautions apply to every group. First, A1 does not mean harmless: any refrigerant displaces oxygen and can suffocate in a pit or small room, and any refrigerant contacting skin can cause frostbite because it boils at very low temperature. Second, refrigerant exposed to an open flame or very hot surface can decompose into highly toxic gases. Never braze or heat a line until the refrigerant is recovered and the system is open or purged as the procedure requires.</p>
<div class="callout"><strong>Key idea:</strong> Read the safety group as a sentence: letter = toxicity, number = flammability. A2L is the group driving most new installation rules, because mildly flammable is still flammable.</div>`
    },
    {
      heading: "Cylinders: Identification, Storage, and Handling",
      html: `
<p>Refrigerant arrives in cylinders that must be identified by their printed labels and markings, never by color alone. Cylinder colors are conventions that have changed over time and are not a reliable identification method; a repainted or unfamiliar cylinder judged by color is a contamination incident waiting to happen. Read the label, confirm the refrigerant matches the equipment nameplate, and if a cylinder's contents are unknown or mixed, treat it as contaminated: do not use it, tag it, and route it for proper reclamation or disposal through your company's process.</p>
<p>Store cylinders upright, secured against falling, with valve caps on, away from heat. Recall Module 2: a cylinder holding liquid and vapor is saturated, so warming it raises its pressure automatically. A cylinder left in a hot vehicle is not inert cargo; it is a pressure vessel being pushed toward its relief limits. Never heat a cylinder with a torch or other uncontrolled heat source to speed up charging, and never fill a cylinder beyond its rated fill. Disposable cylinders are never refilled, and recovery is done only into cylinders approved for that service.</p>
<p>Personal practice follows from the properties. Wear safety glasses and gloves whenever connecting or disconnecting hoses, because escaping liquid refrigerant boils violently and frosts skin and eyes. Ventilate low work areas, since refrigerant vapor is heavier than air and pools where a kneeling technician breathes. Keep refrigerant off hot surfaces and flames. If a large release happens in a confined space, leave and ventilate rather than trying to finish the task in displaced air.</p>
<div class="callout"><strong>Key idea:</strong> Label, not color. Upright, capped, secured, and cool. Glasses and gloves on before a hose moves. These habits are tested in the labs and expected on every call.</div>`
    },
    {
      heading: "Choosing and Respecting the Right Refrigerant, Plus a Recap",
      html: `
<p>Systems are designed around one refrigerant: its pressures, its oil, and its capacity. There is no casual substitution. A different refrigerant changes operating pressures, may not carry the installed oil around the loop, may use incompatible seals, and in a blend can change composition as it leaks. Retrofit is a deliberate engineering procedure done under manufacturer guidance in later courses, never a field improvisation because a cylinder happens to be on the truck.</p>
<p><strong>Worked reasoning — the wrong-cylinder save.</strong> A nameplate calls for R-410A, whose suction pressure at a 40°F evaporator is about 118 psig. The cylinder a helper brings is labeled R-22, which at 40°F sits near 68.5 psig. Step 1: The labels disagree, so work stops. Step 2: If R-22 had been added, the charge, pressures, oil behavior, and capacity would all be wrong and the mixed charge would be unusable as either refrigerant. Step 3: The save cost nothing but attention. Checking identity before opening a valve is the cheapest quality control in the trade.</p>
<p><strong>Recap:</strong></p>
<ul>
<li>Families: CFC (chlorine, no hydrogen), HCFC (adds hydrogen), HFC (no chlorine), HFO (breaks down fastest). Chlorine drives ozone depletion.</li>
<li>ODP measures ozone harm; GWP measures climate impact. A refrigerant can be zero on one and high on the other.</li>
<li>EPA 608 under the Clean Air Act bans venting, restricts sales, and requires certification earned through approved certifying organizations.</li>
<li>Safety groups: letter is toxicity, number is flammability. A1 is common here; A2L adds real rules.</li>
<li>Identify cylinders by label, store them upright and cool, and wear eye and hand protection for every connection.</li>
</ul>`
    }
  ],
  keyTerms: [
    { term: "CFC", def: "Chlorofluorocarbon; a refrigerant family containing chlorine, fluorine, and carbon, with high ozone depletion potential. Example: R-12." },
    { term: "HCFC", def: "Hydrochlorofluorocarbon; contains hydrogen so it breaks down sooner, lowering but not eliminating ozone impact. Example: R-22." },
    { term: "HFC", def: "Hydrofluorocarbon; contains no chlorine, so ozone depletion potential is zero, though many have high global warming potential." },
    { term: "HFO", def: "Hydrofluoroolefin; a newer family designed to break down quickly in the atmosphere for very low global warming potential." },
    { term: "ODP", def: "Ozone depletion potential; a comparison of ozone harm against a reference CFC set at 1.0." },
    { term: "GWP", def: "Global warming potential; a comparison of climate warming effect against carbon dioxide set at 1." },
    { term: "Montreal Protocol", def: "The international agreement under which nations phased out ozone-depleting substances." },
    { term: "Clean Air Act", def: "The U.S. law whose Section 608 governs refrigerant handling, recovery, sales, and technician certification." },
    { term: "EPA Section 608", def: "The certification program with Core plus Type I, II, and III sections; 25 questions per section, 70% to pass, no expiration." },
    { term: "Venting ban", def: "The prohibition on knowingly releasing refrigerant to the atmosphere during service, repair, or disposal." },
    { term: "Recovery", def: "Removing refrigerant from a system and storing it in an approved cylinder without necessarily cleaning it." },
    { term: "Reclaim", def: "Processing recovered refrigerant to a purity standard so it can be sold for reuse." },
    { term: "Safety group", def: "A toxicity letter (A lower, B higher) plus a flammability number (1, 2L, 2, 3) classifying a refrigerant." },
    { term: "A1 refrigerant", def: "Lower toxicity with no flame propagation under test conditions; the group of R-22, R-134a, R-410A, and R-404A." },
    { term: "A2L refrigerant", def: "Lower toxicity and lower flammability with slow burning velocity; the group of many newer low-GWP refrigerants." },
    { term: "Blend", def: "A refrigerant made of two or more components, which may show temperature glide when boiling or condensing." },
    { term: "Glide", def: "The temperature range across which a blend boils or condenses at one pressure; introduced here, developed in Module 8." },
    { term: "Disposable cylinder", def: "A single-use refrigerant cylinder that must never be refilled." }
  ],
  video: {
    title: "EPA 608 Prep 4, CFC, HCFC, and HFC Refrigerants — What's the Difference",
    embedUrl: "https://www.youtube.com/embed/DGYE6zYUGvo",
    note: "An exam-prep walk-through of the chemical difference between CFCs, HCFCs, and HFCs and why chlorine content drives ozone impact. Watch for the point that HFCs have zero ODP but can still have high GWP, the most common confusion on this topic.",
    more: []
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> Classify R-12, R-22, and R-134a by family and rank them by ozone depletion potential from highest to lowest. Explain the ranking in one sentence.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: R-12 is a CFC, R-22 is an HCFC, R-134a is an HFC. Step 2: Ranking is <strong>R-12 highest, then R-22, then R-134a at zero</strong>. Step 3: The chlorine in CFCs reaches the stratosphere most effectively; hydrogen in HCFCs shortens atmospheric life; HFCs have no chlorine at all.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A refrigerant has zero ODP. A coworker concludes it must be environmentally harmless and fine to vent. Give two corrections.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Zero ODP only addresses ozone; the refrigerant may still have a high GWP and warm the climate. Step 2: Venting is prohibited regardless of family; refrigerant encountered in service must be recovered. Step 3: Therefore the conclusion fails on both the science and the law.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> Decode these safety groups: A1, B2L, A3. For each, state toxicity, flammability, and one practical consequence.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: <strong>A1</strong> — lower toxicity, no flame propagation; standard handling with eye, hand, and ventilation precautions. Step 2: <strong>B2L</strong> — higher toxicity, lower flammability (ammonia is the example); demands trained operators and purpose-built spaces. Step 3: <strong>A3</strong> — lower toxicity, higher flammability (hydrocarbons); strict charge limits and ignition control.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> You find three unlabeled cylinders and one labeled cylinder whose paint color does not match the color you expected for that refrigerant. What do you use, and what do you do with the rest?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Identify by label, not color, so the labeled cylinder is usable once its label is read and matches the job. Step 2: Color conventions change and are never proof of contents. Step 3: The unlabeled cylinders are treated as unknown or contaminated: tag them, do not use them, and route them through the company's recovery and reclamation process.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> State the published EPA 608 facts a new technician should know: sections, questions per section, passing standard, whether Core can be skipped, and whether certification expires.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Sections are Core, Type I (small appliances), Type II (high-pressure), and Type III (low-pressure); Universal means Core plus all three types. Step 2: Each section has 25 multiple-choice questions. Step 3: Passing is 70% or better per section, which is at least 18 of 25. Step 4: Core is required with every type and cannot be skipped. Step 5: Certification does not expire.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A cylinder of R-410A is left in direct sun on a 100°F afternoon. Using saturation, predict its approximate pressure and state the handling rule this illustrates.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: With liquid and vapor present, pressure follows temperature. Step 2: R-410A at 100°F sits at about <strong>317 psig</strong>. Step 3: The cylinder's pressure climbed simply because it warmed, which is why cylinders are stored cool, secured, and never heated with uncontrolled heat.</p>"
    }
  ],
  quiz: [
    {
      q: "R-22 belongs to which refrigerant family?",
      choices: ["CFC", "HCFC", "HFC", "HFO"],
      answer: 1,
      explanation: "Correct: (b). R-22 contains chlorine and hydrogen, making it a hydrochlorofluorocarbon. (a) CFCs have no hydrogen; R-12 is the CFC example. (c) HFCs have no chlorine; R-134a is the HFC example. (d) HFOs are the newer short-lived family such as R-1234yf."
    },
    {
      q: "The element chiefly responsible for stratospheric ozone depletion in refrigerants is:",
      choices: ["Hydrogen", "Fluorine", "Carbon", "Chlorine"],
      answer: 3,
      explanation: "Correct: (d). Chlorine released in the stratosphere catalytically destroys ozone. (a) Hydrogen actually shortens atmospheric life and reduces harm. (b) Fluorine is present in all four families, including zero-ODP HFCs, so it cannot be the driver. (c) Carbon is the backbone of every family and is not the ozone agent."
    },
    {
      q: "An HFC refrigerant has an ODP of zero because it:",
      choices: ["Breaks down in one day", "Contains no chlorine", "Is not a greenhouse gas", "Is never vented"],
      answer: 1,
      explanation: "Correct: (b). No chlorine means no chlorine-driven ozone destruction. (a) Many HFCs are long-lived, which is why their GWP can be high. (c) The opposite is often true; high GWP is the HFC problem. (d) Venting behavior does not change a molecule's ODP rating."
    },
    {
      q: "Under EPA Section 608, knowingly venting refrigerant during service is:",
      choices: ["Allowed for small amounts", "Allowed for HFCs only", "Prohibited", "Allowed if the system is being scrapped"],
      answer: 2,
      explanation: "Correct: (c). The venting ban covers service, repair, and disposal knowingly releasing refrigerant. (a) There is no small-amount exception for knowing releases in normal service. (b) The ban applies to substitute refrigerants as well as CFCs and HCFCs. (d) Disposal is exactly where recovery is required before scrapping."
    },
    {
      q: "In the safety group A2L, the 2L means:",
      choices: ["Higher toxicity", "Lower flammability with slow burning velocity", "No flame propagation", "Higher flammability"],
      answer: 1,
      explanation: "Correct: (b). The number rates flammability and 2L is the lower-flammability class. (a) Toxicity is the letter, not the number. (c) No flame propagation is class 1. (d) Higher flammability is class 3."
    },
    {
      q: "To pass one EPA 608 section of 25 questions at the 70% standard, a candidate needs at least:",
      choices: ["13 correct", "15 correct", "18 correct", "25 correct"],
      answer: 2,
      explanation: "Correct: (c). 70% of 25 is 17.5, so the candidate must reach 18 correct answers. (a) 13 is barely half. (b) 15 is 60%, below the standard. (d) A perfect score is not required."
    },
    {
      q: "The safest way to identify a refrigerant cylinder's contents is:",
      choices: ["Its paint color", "Its size", "Its printed label and markings", "Shaking it and listening"],
      answer: 2,
      explanation: "Correct: (c). Labels and markings are the authoritative identification. (a) Color conventions have changed and are unreliable. (b) Several refrigerants share cylinder sizes. (d) Sound tells nothing about chemistry and risks a valve incident."
    },
    {
      q: "Which statement about refrigerant cylinders is correct?",
      choices: ["A torch speeds charging safely", "Disposable cylinders may be refilled once", "Cylinders are stored upright, capped, secured, and away from heat", "A warm cylinder holds the same pressure as a cool one"],
      answer: 2,
      explanation: "Correct: (c). Upright, capped, secured, and cool storage keeps pressure and valves safe. (a) Uncontrolled heating of a pressure vessel is prohibited and dangerous. (b) Disposable cylinders are never refilled. (d) Saturated contents mean pressure rises with temperature, as Module 2 established."
    }
  ],
  studyGuide: `
<h3>Module 3 — Refrigerants: Types, Properties & Safety: Quick Reference</h3>
<p><strong>Families:</strong> CFC = chlorine, no hydrogen (R-12). HCFC = chlorine + hydrogen (R-22). HFC = no chlorine (R-134a, R-410A blend). HFO = short-lived, very low GWP (R-1234yf).</p>
<p><strong>ODP / GWP:</strong> Chlorine drives ODP. No chlorine = ODP zero. GWP can still be high for long-lived HFCs. Look values up; do not guess them.</p>
<p><strong>Law:</strong> Montreal Protocol (international phaseout) and the Clean Air Act, Section 608 (U.S. handling rules). Venting is banned. Recovery is required. 608 facts: Core + Types I/II/III, 25 questions each, 70% to pass (18 of 25), Core always required, certification does not expire, earned through EPA-approved certifying organizations — not from this course.</p>
<p><strong>Safety groups:</strong> Letter = toxicity (A lower, B higher). Number = flammability (1 none, 2L lower/slow-burning, 2 flammable, 3 higher). R-22, R-134a, R-410A, R-404A are A1. Many new refrigerants are A2L.</p>
<p><strong>Cylinders:</strong> Identify by label, never color. Upright, capped, secured, cool. Never torch-heat, never overfill, never refill disposables. Glasses and gloves for every connection; refrigerant vapor pools low and displaces oxygen.</p>
`
};
