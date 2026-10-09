// HVAC 111 - Module 11: Copper Tubing
module.exports = {
  number: 11,
  slug: "copper-tubing",
  title: "Copper Tubing",
  estTime: "3–4 hours",
  objectives: [
    "Distinguish ACR tubing sizing (outside diameter) from nominal plumbing sizes and identify hard-drawn vs. soft (annealed) copper.",
    "Cut tubing squarely with a tubing cutter and ream/deburr without leaving chips in the line.",
    "Bend soft copper without kinking using springs and lever benders, respecting minimum bend radius.",
    "Swage a tube end to form a socket joint and flare a tube end to a clean, correctly sized 45° flare.",
    "Explain when swaged, flared, and brazed joints are each appropriate in refrigerant service.",
    "Describe nitrogen's roles in tubing work: sweeping debris and protecting joints (developed fully in Module 12)."
  ],
  sections: [
    {
      heading: "Tubing Types, Sizes, and Temper",
      html: `
<p>Refrigeration work uses <strong>ACR tubing</strong> (air conditioning & refrigeration): copper tube manufactured clean, dehydrated, and capped/sealed at the factory, because moisture and dirt are poison inside a refrigerant circuit. The first literacy hurdle is sizing: <strong>ACR sizes are the actual outside diameter (OD)</strong>. A tube labeled 3/8″ ACR truly measures 3/8 inch across the outside. Plumbing (nominal) copper, by contrast, is named for an approximate inside dimension — a '3/8 plumbing' tube has a different OD than 3/8 ACR. Mixing the two families' fittings and sizes is a guaranteed leak; in refrigeration work, think OD, always.</p>
<p><strong>Temper</strong> describes hardness. <strong>Hard-drawn</strong> copper comes in straight lengths: stiff, strong, neat for exposed runs, joined with fittings — but it cannot be bent without special equipment; forcing it kinks or cracks it. <strong>Soft (annealed)</strong> copper comes in coils: it can be bent by hand and with bending tools, flared, and swaged — the installer's friend for line sets — but it dents more easily and needs proper support. Heat changes temper: brazing anneals (softens) the tube near the joint, which is normal and expected, and also why overheated joints lose strength right where they need it.</p>
<p>Keep ACR tubing <strong>capped until the moment of use</strong>, and re-cap open ends during the workday. The inside of that tube will soon be the inside of a sealed system: every chip, drop of water, and dust load you keep out now is a filter-drier that lasts longer and a TXV that doesn't clog later. Cleanliness in tubing work is not neatness — it is system reliability installed in advance.</p>
<div class="callout"><strong>Key idea:</strong> ACR = OD sizing, factory-clean and capped. Hard-drawn = straight and strong; soft/annealed = coil, bendable, flareable. Protect the inside of the tube like the system component it already is.</div>`
    },
    {
      heading: "Cutting and Reaming: Square Cuts, Clean Insides",
      html: `
<p>Refrigerant tubing is cut with a <strong>tubing cutter</strong>, not a saw: the cutter's wheel scores and parts the copper cleanly with no abrasive dust and almost no chips. Technique: seat the tube on the cutter's rollers, bring the wheel to the surface, snug the feed screw, rotate the cutter around the tube, and tighten in small increments as you go. Cranking the feed hard to cut in one pass distorts the tube out of round and builds a heavy internal ridge — patience is dimensional accuracy. A hacksaw has no place here: its filings go straight into the line (a fine-pitch saw is a last-resort field expedient only with scrupulous cleaning, and shop standard is the cutter).</p>
<p>Cutting rolls a <strong>burr</strong> inward — a lip of displaced copper narrowing the tube's end. That burr must be <strong>reamed/deburred</strong> away with the cutter's fold-out reamer or a dedicated deburring tool: a few turns with the tube opening facing <em>downward</em> so the shavings fall out instead of in. Left in place, the burr restricts flow, sheds copper slivers into the system, and prevents a flare or swage from forming correctly. Reaming is not cosmetic; it is part of the cut.</p>
<p>Also mind the cut's <strong>squareness</strong>: a slanted cut makes a lopsided flare and an uneven brazing socket — both leak paths. If the end is not square and clean, cut it off and do it again; copper is cheaper than callbacks. After cutting and reaming, the end is ready for its joint: slip the flare nut on NOW if you are flaring (the classic mistake is forming a perfect flare on a tube whose nut is still sitting on the bench).</p>
<div class="callout"><strong>Common mistake:</strong> Reaming with the tube opening up, showering the shavings into the line you just protected. Tube down, few turns, tap it out, inspect against the light. Ten seconds of posture saves a metering device.</div>`
    },
    {
      heading: "Bending: Springs, Lever Benders, and the Kink Limit",
      html: `
<p>Soft copper bends because annealed metal yields smoothly — up to a point. Bend too sharply and the outside of the bend stretches thin while the inside wrinkles and finally <strong>kinks</strong>: the tube collapses into a crease that restricts flow and weakens the wall. A kinked section is cut out, never 'straightened back' — the damage is in the metal, not the shape.</p>
<p>Two tool families keep bends honest. <strong>Bending springs</strong> (internal or external) support the tube wall during a hand bend: cheap, effective for gentle bends in smaller sizes, and the spring's presence lets you form the bend gradually around your knee or a form. <strong>Lever-type benders</strong> use a calibrated former (shoe) and follow-bar to produce a precise radius and angle — the professional choice for neat, repeatable bends, marked in degrees so a run of offsets comes out uniform. The former's radius IS the bend's centerline radius; choose the bender sized to the tube OD (ACR sizes again).</p>
<p>Rules of the bend: plan the run so bends are as <strong>few and as generous</strong> as the path allows (every bend adds pressure drop and oil-trapping risk in suction lines); support the tube close to the bend point so the bend forms where you intend instead of wandering; and never bend hard-drawn tube with hand tools. For hard copper, direction changes come from <strong>fittings</strong> (elbows) brazed on — which is the honest division of labor: soft tube bends, hard tube fitting-turns.</p>
<p>Also remember the line set's other resident: the <strong>suction line gets insulated</strong> (to prevent sweating and heat gain), liquid line usually bare, and both get protected where they pass through walls and rest on supports — a beautifully bent tube chafing on a sharp joist edge is a leak scheduled for next season.</p>
<div class="callout"><strong>Key idea:</strong> A good bend is uniform — round cross-section preserved, no flattening, no wrinkles. If the tube starts to oval or crease, stop: you are past its radius limit. Tighten the plan, not the bend.</div>`
    },
    {
      heading: "Swaging and Flaring: Two Ways to Form a Joint End",
      html: `
<p><strong>Swaging</strong> expands the end of one tube into a socket that accepts another tube of the same OD, creating a brazing joint without a coupling fitting. Tools range from punch-type swages (hammer-driven) to lever and hydraulic expanders and drill-driven spin swages. Form the socket to the depth the tool provides (about one tube-diameter deep as a working rule), keep the expansion gradual and centered so the socket is round, and test-fit the mating tube: it should slide in snugly, not sloppy-loose (too loose starves the capillary action of the braze) and not forced (a sprung socket cracks later). Swaging saves fittings on long runs but spends tube length — plan for it.</p>
<p><strong>Flaring</strong> forms the tube end into a cone — HVAC/R uses the <strong>45° flare</strong> — that seals against a mating brass fitting face when the flare nut draws them together: a metal-to-metal mechanical seal, no brazing. Sequence that prevents the classic errors: (1) cut square and ream; (2) <strong>slide the flare nut on</strong>; (3) clamp the tube in the flaring block at the height per the tool's gauge; (4) form the flare with the yoke/cone, steadily; (5) inspect: the flare must be concentric, smooth, crack-free, and sized to cover the fitting face without overhanging the nut threads. Split, off-center, or scored flares are cut off and redone — flares are unforgiving of optimism, and a refrigerant flare leak is a system-charge leak.</p>
<p>Flares dominate where joints must be <strong>serviceable or heat-free</strong>: mini-split line connections, service valves, and locations where a torch cannot go. Brazed (or swaged-and-brazed) joints dominate permanent piping. Choosing between them is design judgment the plans and equipment dictate — your craft is forming either one flawlessly.</p>
<div class="callout"><strong>Common mistake:</strong> The perfect flare with no nut — every apprentice makes it once. Build the sequence as a chant: cut, ream, NUT, flare, inspect. And re-inspect before connecting: a flare formed yesterday can be stepped on today.</div>`
    },
    {
      heading: "Nitrogen in Tubing Work — and the Road to Brazing",
      html: `
<p><strong>Nitrogen</strong> is the tubing trade's utility gas: dry, inert, and cheap. In this module's scope it has two jobs. First, <strong>sweeping and pressure-testing prep</strong>: a gentle nitrogen flow or pressurization blows cutting debris out of fabricated runs before they close up (always with a free exhaust path — never blast debris deeper into a system or pressurize against a dead end without a plan), and dry nitrogen is the pressure-test medium Module 12 uses for leak testing (never oxygen, never compressed air alone in a refrigerant system — air carries moisture, and oxygen under pressure with oil is an explosion hazard).</p>
<p>Second — the headline act in Module 12 — a slow nitrogen <strong>purge flowing while brazing</strong> prevents the black cupric-oxide scale that otherwise forms inside hot copper joints and later flakes into the system. The setup begins here: regulator on the nitrogen cylinder, flow set low (a whisper you can barely feel at the open end), established before the torch lights and maintained until the joint cools, with the flow path arranged so gas enters one end of the assembly and exits the joint area last.</p>
<p>Handle nitrogen cylinders as what they are: high-pressure vessels. Cap on during transport, secured upright in use, regulator made for nitrogen service, and never use nitrogen pressure beyond the test pressures the equipment and your gauges are rated for. The safety block of the brazing lab in this course will walk the full setup; this module's takeaway is simpler: <strong>nothing goes inside a refrigerant tube except refrigerant, oil, clean copper — and nitrogen on its way through.</strong></p>
<div class="callout"><strong>Key idea:</strong> Cutting, reaming, bending, swaging, and flaring are one continuous discipline: keep the inside clean, the ends square, and the joints sound. Module 12 adds heat to the craft — soldering and brazing — where every habit from this module gets tested under a torch.</div>`
    }
  ],
  keyTerms: [
    { term: "ACR tubing", def: "Copper tube made for air-conditioning/refrigeration service: cleaned, dehydrated, capped, and sized by actual outside diameter." },
    { term: "Outside diameter (OD)", def: "The measurement ACR sizes name directly; 3/8″ ACR measures 3/8″ across the outside." },
    { term: "Nominal size", def: "The plumbing convention naming tube by approximate inside size — NOT interchangeable with ACR OD sizes." },
    { term: "Annealed (soft) copper", def: "Heat-softened copper supplied in coils; can be hand-bent, flared, and swaged." },
    { term: "Hard-drawn copper", def: "Stiff, straight-length copper; joined with fittings rather than bent by hand tools." },
    { term: "Tubing cutter", def: "A wheeled tool that parts copper cleanly by rotating around it with gradual feed pressure." },
    { term: "Burr", def: "The inward-rolled lip left by cutting; must be reamed away to restore full bore and clean joints." },
    { term: "Reaming / deburring", def: "Removing the burr from a cut tube end, with the opening facing down so shavings fall out of the tube." },
    { term: "Kink", def: "A collapsed crease from bending past the tube's radius limit; the section must be cut out, not straightened." },
    { term: "Bending spring", def: "A coil spring inserted in or over a tube to support its walls during a hand bend." },
    { term: "Lever bender", def: "A tool with a sized former/shoe that produces accurate, repeatable bends at marked angles." },
    { term: "Swaging", def: "Expanding a tube end into a socket that accepts another tube for a brazed joint, eliminating a coupling fitting." },
    { term: "Flaring", def: "Forming a tube end into a 45° cone that seals mechanically against a brass fitting face via a flare nut." },
    { term: "Flare nut", def: "The nut that draws a flare against its fitting; must be slipped onto the tube BEFORE the flare is formed." },
    { term: "Flare block / yoke", def: "The clamp and cone assembly of a flaring tool that holds the tube and forms the flare." },
    { term: "Spin swage", def: "A drill-driven expanding tool that swages tube ends by friction and pressure." },
    { term: "Nitrogen sweep", def: "Flowing dry nitrogen through tubing to clear debris and moisture before closing a system." },
    { term: "Line set", def: "The paired suction and liquid lines connecting indoor and outdoor equipment, the suction line insulated." }
  ],
  video: {
    title: "SPIN Swage and SPIN Flare Copper Tubing Tools!",
    embedUrl: "https://www.youtube.com/embed/iFOTxT1qkLk",
    note: "A demonstration of drill-driven spin swage and spin flare bits on copper line-set tubing, including how the tubing is heated by the bit during flaring and how the flare nut is torqued afterward. Compare the formed swages and flares with this module's inspection standards: concentric, smooth, crack-free, correctly sized.",
    more: [
      { title: "Using a Hydraulic Swaging Tool for Copper Pipe, Line Set", url: "https://www.youtube.com/watch?v=XPQ6PnE2wHQ" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A fitting from a plumbing supplier is labeled 5/8 (nominal). Your line set is 5/8 ACR. Can you assume they match? Explain the sizing systems and the field check you would make.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: No. ACR sizes are true outside diameters; plumbing nominal sizes name an approximate inside dimension, so a '5/8 nominal' tube/fitting has a larger OD than 5/8″ ACR. Step 2: Refrigeration fittings are made for ACR OD. Step 3: Field check — measure the tube and fitting with calipers and confirm the fitting is specified for ACR/refrigeration service before assembling anything; a forced mismatch is a leak with a head start.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A freshly cut tube end shows a heavy inward burr and a slightly oval shape. What went wrong in the cutting, and what is the correction sequence?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Cause — excessive feed pressure per rotation: the wheel was cranked hard instead of snugged gradually, rolling a big burr and deforming the tube. Step 2: Correction: if the end is out of round, cut it off and re-cut with light, progressive feed. Step 3: Ream the new end with the opening facing DOWN until the burr is gone and the bore is full and smooth; inspect against light before proceeding to any joint.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> You form a flare and find it slightly split on one side. The tube length is ample. State the disposition and the reasoning, including what 'ample length' changes.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Cut the flare off and re-form it — a split flare cannot seal; tightening it only completes the crack. Step 2: Ample length is exactly what makes the correct fix cheap: sacrifice an inch, re-cut square, ream, slide the (already present) nut back, re-flare, inspect. Step 3: On a length-critical run the same defect might force a coupling and a brazed joint — another reason generous layout beats stingy layout.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> For each joint, choose swage+braze, flare, or fitting+braze and justify: (a) permanent mid-run joint in a straight hard-drawn suction line; (b) line-set connection at a mini-split service valve; (c) joining two soft tubes mid-run where a coupling is not on the truck.</p>",
      solution: "<p><strong>Solution:</strong> (a) <strong>Fitting + braze</strong> — hard-drawn tube is not field-swaged by hand methods; an elbow/coupling fitting is the standard joint. (b) <strong>Flare</strong> — the service valve presents a flare face precisely so the connection is mechanical and serviceable without a torch at the unit. (c) <strong>Swage + braze</strong> — expanding one soft tube into a socket replaces the missing coupling legitimately, provided the socket is snug, round, and a full tube-diameter deep.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> During bending, a soft tube begins to flatten and shows a faint wrinkle on the inside of the bend. Continue or stop? Give the disposition for the piece.</p>",
      solution: "<p><strong>Answer: Stop.</strong> Step 1: Flattening and wrinkling are the on-ramp to a kink — the bend radius is too tight for the tube/tool combination. Step 2: Disposition: the compromised section cannot be trusted (restricted bore, thinned/creased wall) — cut it out and re-plan that portion with a larger radius, a proper lever bender, or a fitting turn. Step 3: Prevention next time: use the bender sized to the tube, support close to the bend, and form gradually.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> Explain why nitrogen — and not shop compressed air or oxygen — is the gas used to sweep a fabricated line set.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Nitrogen is dry and inert: it carries debris out without adding moisture or reacting with oil/refrigerant residues. Step 2: Compressed air carries atmospheric moisture straight into a system you are trying to keep dehydrated, and its oxygen content is unwelcome. Step 3: Oxygen is categorically forbidden — under pressure, in contact with compressor oil, it creates an explosion hazard. Dry nitrogen is the only correct answer of the three.</p>"
    }
  ],
  quiz: [
    {
      q: "ACR tubing size designations refer to the tube's:",
      choices: ["Inside diameter", "Actual outside diameter", "Wall thickness", "Coil length"],
      answer: 1,
      explanation: "Correct: (b). ACR is sized by OD — 3/8″ ACR measures 3/8″ across the outside. (a) describes (approximately) the nominal plumbing convention, the source of mismatch errors. (c) Wall thickness is a separate spec (type K/L/M in plumbing families). (d) Length is irrelevant to the size designation."
    },
    {
      q: "Reaming a cut tube end with the opening facing DOWN is done so that:",
      choices: ["The reamer stays sharper", "Metal shavings fall out of the tube instead of into it", "The burr folds outward", "Gravity feeds the cutter wheel"],
      answer: 1,
      explanation: "Correct: (b). Chips inside a refrigerant line become system contamination — posture keeps them out. (a) Sharpness is unaffected by orientation. (c) Reaming removes the burr; it does not fold it outward. (d) The cutter is a separate step, already finished."
    },
    {
      q: "The classic flaring error — a perfect flare and no way to connect it — is caused by forgetting to:",
      choices: ["Ream the tube", "Slide the flare nut onto the tube before forming the flare", "Use the flaring block", "Cut the tube squarely"],
      answer: 1,
      explanation: "Correct: (b). The nut cannot pass over a formed flare; it must live on the tube first. (a), (c), and (d) are all required steps too, but their omission produces bad flares, not an unconnectable good one."
    },
    {
      q: "A kinked section of soft copper should be:",
      choices: ["Straightened carefully and reused", "Heated and reused", "Cut out and replaced", "Left in place if air still passes"],
      answer: 2,
      explanation: "Correct: (c). Kinking thins, wrinkles, and work-damages the wall; the damage is in the metal. (a) and (b) restore shape, not integrity — the crease remains a weak, restricted point. (d) 'Some flow' is not a standard for a refrigerant line expected to hold pressure for decades."
    },
    {
      q: "Swaging is best described as:",
      choices: ["Threading the end of a tube", "Expanding one tube end into a socket so another tube can be inserted for a brazed joint without a coupling", "Compressing a ferrule onto plastic tubing", "Flaring a tube to 37 degrees"],
      answer: 1,
      explanation: "Correct: (b). A swage makes the tube its own coupling for brazing. (a) Refrigerant copper joints are not threaded on the tube itself. (c) Ferrules belong to other piping systems. (d) HVAC/R flares are 45°, and flaring is a different forming operation."
    },
    {
      q: "Which tubing can be bent with a lever bender in the field?",
      choices: ["Hard-drawn copper in straight lengths", "Soft (annealed) copper", "Only steel tubing", "Copper that has just been brazed at the bend point"],
      answer: 1,
      explanation: "Correct: (b). Annealed temper is what yields smoothly around a former. (a) Hard-drawn tube turns with fittings, not hand benders — forcing it kinks/cracks it. (c) Steel is outside this module's material. (d) A brazed zone has altered temper and a joint in it — bends are planned away from joints."
    },
    {
      q: "Why is a hacksaw the wrong tool for cutting ACR tubing?",
      choices: ["It cuts too slowly to be profitable", "It generates filings that contaminate the inside of the line; a wheel cutter parts the tube cleanly", "Saws are banned by code everywhere", "It cannot cut copper at all"],
      answer: 1,
      explanation: "Correct: (b). Contamination is the disqualifier — filings go directly into the sealed system's path. (a) Speed is not the issue (and saw cuts are not even faster in skilled hands). (c) No blanket code ban is the reason; system cleanliness is. (d) Saws cut copper easily — that is precisely the trap."
    },
    {
      q: "Nitrogen's role while fabricating and joining tubing includes all EXCEPT:",
      choices: ["Sweeping debris from fabricated runs", "Purging joints during brazing to prevent internal oxide scale", "Serving as a dry pressure-test medium", "Acting as a substitute refrigerant for a trial run"],
      answer: 3,
      explanation: "Correct: (d). Nitrogen never substitutes for refrigerant in operation — systems run on their specified refrigerant only. (a), (b), and (c) are nitrogen's legitimate jobs: cleaning, oxide prevention, and leak-test pressurization."
    }
  ],
  studyGuide: `
<h3>Module 11 — Copper Tubing: Quick Reference</h3>
<p><strong>Sizing:</strong> ACR = true OUTSIDE diameter. Plumbing nominal ≠ ACR. Measure with calipers when families might be mixed.</p>
<p><strong>Temper:</strong> Hard-drawn = straight lengths, turns by fittings. Soft/annealed = coils, bends with springs/lever benders, flares and swages. Heat (brazing) anneals metal near joints.</p>
<p><strong>Cutting:</strong> Wheel cutter only, gradual feed; ream every cut, opening DOWN; square ends or redo. Chips inside the line = contamination installed by you.</p>
<p><strong>Bending:</strong> Support the wall (spring) or form it (lever bender sized to OD). Uniform round bend or stop. Kinked = cut out, never straightened.</p>
<p><strong>Joints:</strong> Swage = expand a socket (≈1 tube-diameter deep, snug fit) to braze without a coupling. Flare = 45° mechanical seal: cut, ream, NUT ON, form, inspect (concentric, smooth, no splits, correct size) — redo any suspect flare.</p>
<p><strong>Nitrogen:</strong> Dry and inert — sweeps debris, purges during brazing (Module 12), pressure-tests. Never oxygen; never shop air in a refrigerant circuit. Keep tube ends capped until the moment of use, and re-cap them during every pause in the work.</p>
`
};
