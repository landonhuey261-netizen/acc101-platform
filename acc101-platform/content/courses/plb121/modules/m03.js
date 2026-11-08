// Plumbing 121 - Module 3: Traps: Types, Trap Seals & Trap Arms
module.exports = {
  number: 3,
  slug: "traps-trap-seals-trap-arms",
  title: "Traps: Types, Trap Seals & Trap Arms",
  estTime: "3–4 hours",
  objectives: [
    "Explain what a trap does and why every fixture needs one.",
    "Identify P-traps, S-traps, drum traps, and running traps, and state which are permitted under the IPC.",
    "State the IPC trap-seal rule (2 to 4 inches) and explain the four ways a seal is lost.",
    "Apply IPC Table 909.1 to find the maximum trap-arm length for a given trap size.",
    "Explain the one-pipe-diameter rule for fall in a trap arm and why it matters."
  ],
  sections: [
    {
      heading: "The Cup of Water That Guards the House",
      html: `
<p>Under every sink, tub, and shower sits a curved piece of pipe that always holds water. That is the <strong>trap</strong>, and the standing water inside it is the <strong>trap seal</strong>. Its job is simple and vital: it blocks sewer gas from traveling up the drain and into the room. The water is a plug that waste can push through on its way down, but gas cannot push through on its way up.</p>
<p>Every fixture that discharges to the drainage system needs its own trap — one trap per fixture, with the water closet as the built-in exception (the toilet's trap is molded into the fixture itself). A trap is not a filter and not a valve. It has no moving parts. It works purely because water sits in the bend, and that simplicity is its strength: nothing to wear out, nothing to power, nothing to adjust.</p>
<p>The trap also does a second, smaller job: it catches things. A ring, a screw, or a clump of hair often stops in the trap bend instead of traveling deep into the drainage system, where it would be far harder to retrieve. That is why a trap is designed to be removable or to have a cleanout: the part that catches debris must be the part you can reach.</p>
<div class="callout"><strong>Key idea:</strong> A trap is a water plug, not a mechanical device. As long as the seal water is there, gas stays out. Every rule in this module exists to keep that water in place.</div>`
    },
    {
      heading: "Trap Types: The P-Trap Rules, the S-Trap Fails",
      html: `
<p>The <strong>P-trap</strong> is the standard trap in modern plumbing. Named for its shape — a P lying on its side — it has a U-bend that holds the seal and a horizontal <strong>trap arm</strong> that runs to the vent connection in the wall. The vent connection is what makes the P-trap work: air from the vent breaks the siphon effect, so water leaving the fixture cannot pull the seal out behind it.</p>
<p>The <strong>S-trap</strong> looks similar but drops straight down after the bend, with no vented trap arm. That shape is its flaw: a full discharge can siphon the seal completely out of the trap, leaving an open path for sewer gas. The IPC prohibits S-traps (IPC 1002.3), along with bell traps and any trap that depends on moving parts to maintain its seal. You will still find S-traps in old houses — usually under a sink where the drain drops straight through the floor — and replacing them with a properly vented P-trap is one of the most common service corrections in the trade.</p>
<p>Two other types are worth knowing. A <strong>drum trap</strong> is a cylindrical canister, common in very old tub installations; it holds a large volume of water and is slow to scour itself clean, so it is rarely installed today. A <strong>running trap</strong> is a trap installed in a horizontal run of pipe rather than directly at a fixture — the code generally prohibits building (house) traps, and a running trap is used only where a specific design requires it. For nearly all of your work, the trap is a P-trap at the fixture.</p>
<div class="callout"><strong>Key idea:</strong> If the trap drops straight to the floor with no vented horizontal arm, it is almost certainly an S-trap — and S-traps are prohibited because they siphon themselves dry.</div>`
    },
    {
      heading: "The Trap Seal: 2 to 4 Inches, and Four Ways to Lose It",
      html: `
<p>IPC Section 1002.4 sets the trap seal: <strong>not less than 2 inches and not more than 4 inches</strong>, measured from the crown weir (the low point of the trap's outlet) to the top of the dip (the lowest point of the trap's inlet side). Less than 2 inches and the seal is too shallow to resist pressure changes; more than 4 inches and the trap becomes sluggish, holding waste and losing its self-scouring action.</p>
<p>A correct seal is lost four ways, and you must be able to name all four on the job and on the exam:</p>
<ul>
<li><strong>Evaporation:</strong> a fixture that sits unused — a guest bathroom, a floor drain — loses its seal water to the air. The fix is use, or a <strong>trap seal primer</strong> that drips a little water into the trap on a schedule (IPC 1002.4.1 requires a deeper seal or a primer valve conforming to ASSE 1018 or ASSE 1044 where a seal is subject to evaporation loss).</li>
<li><strong>Siphonage:</strong> suction in the drain — from a flushing toilet or a large discharge upstream — pulls the seal out. The fix is proper venting (Modules 4–5).</li>
<li><strong>Backpressure:</strong> positive pressure in the drain pushes the seal water back into the fixture or blows it out. The fix is proper venting and correct stack design.</li>
<li><strong>Capillary action and momentum:</strong> a rag or string draped over the trap weir wicks water out slowly; a large, fast discharge can carry seal water along with it by momentum. The fixes are keeping foreign material out of drains and sizing traps correctly.</li>
</ul>
<p>When a customer reports a sewer smell from one fixture, your first check is the seal: run water, watch the trap, and look for a dry or low seal. A dry floor drain in a basement is the classic case — a cup of water poured down the drain often "fixes" a smell that has been blamed on everything else in the house.</p>
<div class="callout"><strong>Key idea:</strong> 2 to 4 inches is the whole rule, and evaporation, siphonage, backpressure, and capillary action are the four thieves. Diagnose the smell by asking which thief took the water.</div>`
    },
    {
      heading: "The Trap Arm: How Far to the Vent (IPC Table 909.1)",
      html: `
<p>The <strong>trap arm</strong> is the horizontal pipe from the trap to the vent fitting, and the code limits how long it can be. IPC Table 909.1 gives the maximum distance from the trap to the vent, and it depends on the trap size and the slope:</p>
<ul>
<li><strong>1-1/4-inch trap:</strong> 5 feet maximum at 1/4 inch per foot slope.</li>
<li><strong>1-1/2-inch trap:</strong> 6 feet maximum at 1/4 inch per foot slope.</li>
<li><strong>2-inch trap:</strong> 8 feet maximum at 1/4 inch per foot slope.</li>
<li><strong>3-inch trap:</strong> 12 feet maximum at 1/8 inch per foot slope.</li>
<li><strong>4-inch trap:</strong> 16 feet maximum at 1/8 inch per foot slope.</li>
</ul>
<p>Why a length limit at all? Because the trap arm falls as it runs — at 1/4 inch per foot, a 6-foot 1-1/2-inch arm drops 1-1/2 inches from the trap weir to the vent. If the arm ran longer, the total fall would exceed one pipe diameter, and the water in the arm could drop below the trap weir level, letting the trap siphon. That is the <strong>one-pipe-diameter rule</strong>: the total fall of the trap arm from the trap weir to the vent cannot exceed one pipe diameter. The table lengths are simply that rule worked out for each size.</p>
<p>Two exceptions matter. <strong>Self-siphoning fixtures</strong> — water closets and similar fixtures whose trap is part of the fixture — are not limited by Table 909.1; the code exempts them because the fixture itself controls the discharge. And the distance is measured as <strong>developed length</strong>: the actual length of pipe including the equivalent length through fittings, from the trap weir to the vent fitting, not a straight-line tape measure across the room.</p>
<div class="callout"><strong>Key idea:</strong> The trap-arm table is the one-pipe-diameter rule in disguise. A 1-1/2-inch arm may run 6 feet because 6 feet at 1/4 inch per foot falls exactly 1-1/2 inches — one diameter. Past that, the trap can siphon.</div>
<p><strong>Worked check:</strong> A lavatory with a 1-1/4-inch trap sits 4 feet from its vent. Table 909.1 allows 5 feet for that size, so the layout passes — but only just. If the fixture moved 2 feet farther away, the arm would be 6 feet, the table would fail, and the vent would have to move or the trap size would have to grow.</p>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Every fixture gets its own trap; the trap seal is standing water that blocks sewer gas.</li>
<li>P-traps are the standard; S-traps are prohibited (IPC 1002.3) because they siphon dry.</li>
<li>Trap seal: 2 to 4 inches (IPC 1002.4). Lost by evaporation, siphonage, backpressure, or capillary action/momentum.</li>
<li>Trap-arm maximums (IPC Table 909.1): 1-1/4 in = 5 ft, 1-1/2 in = 6 ft, 2 in = 8 ft, 3 in = 12 ft, 4 in = 16 ft.</li>
<li>The trap arm may not fall more than one pipe diameter from the trap weir to the vent.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Installing a trap with no vent, or venting it beyond the Table 909.1 distance. An unvented or over-long trap arm siphons — the trap looks right and still goes dry every time a nearby fixture discharges.</div>
<div class="callout"><strong>Common mistake:</strong> Using a 1-1/2-inch trap on a shower. IPC Table 709.1 lists the shower trap at 2 inches, and a smaller trap cannot pass the shower's discharge. Trap size comes from the table, not from what fitting is on the truck.</div>
<div class="callout"><strong>Common mistake:</strong> Forgetting the dry floor drain. A basement floor drain that never sees water loses its seal by evaporation — the smell is not a broken pipe, it is an empty trap, and the fix is water or a trap primer.</div>
<p><strong>Ready-to-Work link:</strong> Trap seal loss is the first diagnosis a service plumber makes on a sewer-odor call. If you can name the four causes and check the trap-arm distance, you can solve most odor complaints in one visit.</p>`
    }
  ],
  keyTerms: [
    { term: "Trap", def: "A fitting that holds standing water to form a seal blocking sewer gas; one trap is required per fixture." },
    { term: "Trap seal", def: "The standing water in a trap; IPC requires a seal of not less than 2 inches and not more than 4 inches." },
    { term: "Crown weir", def: "The lowest point of the trap's outlet, from which the trap-seal depth is measured." },
    { term: "P-trap", def: "The standard trap shape: a U-bend holding the seal plus a horizontal trap arm running to a vented connection." },
    { term: "S-trap", def: "A trap that drops straight down after its bend with no vented trap arm; prohibited by IPC 1002.3 because it siphons dry." },
    { term: "Drum trap", def: "An older cylindrical trap that holds a large volume of water and scours poorly; rarely installed today." },
    { term: "Running trap", def: "A trap installed in a horizontal run of pipe rather than at a fixture; used only where specifically required." },
    { term: "Trap arm", def: "The horizontal pipe from a trap to its vent fitting; its length is limited by IPC Table 909.1." },
    { term: "IPC Table 909.1", def: "The code table giving the maximum distance from a fixture trap to its vent by trap size." },
    { term: "One-pipe-diameter rule", def: "The trap arm may not fall more than one pipe diameter from the trap weir to the vent, or the trap can siphon." },
    { term: "Siphonage", def: "Loss of the trap seal when suction in the drain pulls seal water out of the trap." },
    { term: "Backpressure", def: "Positive pressure in the drainage system that pushes trap seal water back toward or out of the fixture." },
    { term: "Evaporation", def: "Loss of trap seal water to the air in an unused fixture; the most common cause of a dry floor-drain trap." },
    { term: "Trap seal primer", def: "A valve (ASSE 1018 or ASSE 1044) that periodically adds water to a trap subject to evaporation loss." },
    { term: "Developed length", def: "The actual length of pipe including equivalent length through fittings, used for trap-arm and vent measurements." },
    { term: "Self-siphoning fixture", def: "A fixture such as a water closet whose trap is part of the fixture; exempt from the Table 909.1 distance limit." }
  ],
  video: {
    title: "What is a P-Trap? A crucial pipe to your plumbing system.",
    embedUrl: "https://www.youtube.com/embed/IxbnHQ-eBDg",
    note: "A clear look inside a P-trap: how the bend holds the seal, what the seal blocks, and why the trap arm connects to a vent. Watch for the moment the water leaves the trap and notice how much stays behind.",
    more: [
      { title: "Here's Why \"S-TRAPS\" Are NOT ALLOWED Anymore! (And 3 Ways To Fix It) | GOT2LEARN", url: "https://www.youtube.com/watch?v=pmN88UvZfDI" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A lavatory trap has a seal depth of 1-1/2 inches. Does it meet code? Explain what the code requires and why a shallow seal is a problem.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: IPC 1002.4 requires a trap seal of not less than 2 inches and not more than 4 inches. Step 2: A 1-1/2-inch seal is below the minimum, so it <strong>fails</strong>. Step 3: A shallow seal is easily pulled out by siphonage or pushed out by backpressure, leaving an open path for sewer gas.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A kitchen sink with a 1-1/2-inch trap is 7 feet from its vent connection. Does the trap arm meet IPC Table 909.1? If not, name two ways to fix it.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Table 909.1 allows a 1-1/2-inch trap arm a maximum of <strong>6 feet</strong>. Step 2: 7 feet exceeds the maximum, so the layout <strong>fails</strong>. Step 3: Fix it by moving the vent closer (within 6 feet) or by increasing the trap and trap-arm size to 2 inches, which allows 8 feet.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A homeowner's basement smells like sewer near a floor drain that has not been used in months. (a) What is the most likely cause? (b) What is the immediate fix? (c) What permanent device prevents it from happening again?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The most likely cause is <strong>evaporation</strong> — the trap seal water dried up in the unused drain. Step 2: The immediate fix is to pour a bucket of water down the drain to restore the seal. Step 3: A <strong>trap seal primer valve</strong> (ASSE 1018 or ASSE 1044) that periodically adds water to the trap prevents it permanently.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> Explain why an S-trap is prohibited while a P-trap is the standard, in two or three sentences.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: An S-trap drops straight down after its bend with no vented horizontal arm, so a full discharge can siphon the entire seal out of the trap. Step 2: A P-trap's horizontal trap arm connects to a vent, which supplies air and breaks the siphon, so the seal stays in place. Step 3: Because the S-trap cannot reliably hold its seal, IPC 1002.3 prohibits it.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A 2-inch trap arm runs 8 feet at 1/4 inch per foot slope. (a) What is the total fall? (b) Does it meet the one-pipe-diameter rule? (c) Does it meet Table 909.1?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Total fall = 8 ft × 1/4 in/ft = <strong>2 inches</strong>. Step 2: One pipe diameter for a 2-inch pipe is 2 inches, so the fall is exactly one diameter — the rule is met. Step 3: Table 909.1 allows a 2-inch trap arm <strong>8 feet</strong> maximum, so the layout passes, at the limit.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A tub discharges and the lavatory trap in the same bathroom gurgles and loses water. Name the cause, explain the mechanism, and name the system that prevents it.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The cause is <strong>siphonage</strong>. Step 2: The tub's large discharge creates suction in the shared drain, and without enough air the suction pulls water out of the lavatory trap. Step 3: The <strong>vent system</strong> prevents it by supplying air behind the discharge so pressure stays near atmospheric and the seal survives.</p>"
    }
  ],
  quiz: [
    {
      q: "The purpose of a fixture trap is to:",
      choices: ["Filter solids out of the wastewater", "Hold a water seal that blocks sewer gas from entering the building", "Increase the flow rate of the drain", "Vent the drainage system to the roof"],
      answer: 1,
      explanation: "Correct: (b). The standing water in the trap is a gas plug. (a) Traps catch some debris incidentally, but filtering is not their purpose. (c) A trap slightly restricts flow; it never increases it. (d) Venting is the vent system's job, not the trap's."
    },
    {
      q: "Under IPC 1002.4, a trap seal must be:",
      choices: ["At least 1 inch and no more than 2 inches", "Not less than 2 inches and not more than 4 inches", "Exactly 3 inches", "At least 4 inches and no more than 6 inches"],
      answer: 1,
      explanation: "Correct: (b). IPC 1002.4 requires a seal of 2 to 4 inches. (a) is too shallow to resist pressure changes. (c) There is no exact-value rule; any depth in the range passes. (d) exceeds the maximum and would scour poorly."
    },
    {
      q: "S-traps are prohibited by the IPC mainly because they:",
      choices: ["Cost more than P-traps", "Cannot be cleaned", "Siphon their seal water out because they have no vented trap arm", "Are too large to fit under sinks"],
      answer: 2,
      explanation: "Correct: (c). An S-trap drops straight down with no vent connection, so discharge siphons the seal dry. (a) Cost is not a code reason. (b) S-traps can be cleaned; the problem is seal loss. (d) Size is not the issue — the unvented shape is."
    },
    {
      q: "Under IPC Table 909.1, the maximum trap-arm length for a 1-1/2-inch trap is:",
      choices: ["5 feet", "6 feet", "8 feet", "12 feet"],
      answer: 1,
      explanation: "Correct: (b). A 1-1/2-inch trap arm may run 6 feet at 1/4 inch per foot. (a) is the limit for a 1-1/4-inch trap. (c) is the limit for a 2-inch trap. (d) is the limit for a 3-inch trap."
    },
    {
      q: "Under IPC Table 909.1, the maximum trap-arm length for a 2-inch trap is:",
      choices: ["5 feet", "6 feet", "8 feet", "16 feet"],
      answer: 2,
      explanation: "Correct: (c). A 2-inch trap arm may run 8 feet at 1/4 inch per foot. (a) is the 1-1/4-inch limit. (b) is the 1-1/2-inch limit. (d) is the 4-inch limit."
    },
    {
      q: "Which of the following is NOT one of the four ways a trap seal is lost?",
      choices: ["Evaporation", "Siphonage", "Backpressure", "Thermal expansion"],
      answer: 3,
      explanation: "Correct: (d). The four causes are evaporation, siphonage, backpressure, and capillary action/momentum. (a), (b), and (c) are all real causes. Thermal expansion affects water supply systems, not trap seals."
    },
    {
      q: "The one-pipe-diameter rule for a trap arm states that:",
      choices: ["The trap arm must be exactly one pipe diameter long", "The total fall of the trap arm from the trap weir to the vent may not exceed one pipe diameter", "The trap must be one size larger than the trap arm", "The vent must be one pipe diameter larger than the drain"],
      answer: 1,
      explanation: "Correct: (b). If the arm falls more than one diameter, the water level can drop below the trap weir and the trap can siphon. (a) confuses fall with length. (c) Trap and trap arm are the same size. (d) Vent sizing follows the one-half rule, not this rule."
    },
    {
      q: "A floor drain in an unused basement has lost its trap seal. The most likely cause and the permanent fix are:",
      choices: ["Siphonage; a larger trap", "Evaporation; a trap seal primer valve", "Backpressure; a check valve", "Capillary action; a smaller trap"],
      answer: 1,
      explanation: "Correct: (b). An unused drain loses seal water to the air, and a primer valve (ASSE 1018 or ASSE 1044) restores it on a schedule. (a) Siphonage needs a discharge event, and a larger trap does not stop evaporation. (c) Backpressure needs positive drain pressure. (d) Capillary action needs material draped over the weir."
    }
  ],
  studyGuide: `
<h3>Module 3 — Traps: Quick Reference</h3>
<p><strong>Core idea:</strong> A trap is a water plug. One trap per fixture; the seal is what keeps sewer gas out.</p>
<p><strong>Seal rule (IPC 1002.4):</strong> Not less than 2 in, not more than 4 in.</p>
<p><strong>Seal loss:</strong> Evaporation · Siphonage · Backpressure · Capillary action / momentum.</p>
<p><strong>Types:</strong> P-trap = standard (vented arm). S-trap = prohibited (IPC 1002.3), siphons dry. Drum trap = old, poor scouring. Running trap = only where specifically required.</p>
<div class="formula">IPC Table 909.1 trap-arm maximums: 1-1/4 in = 5 ft &nbsp;|&nbsp; 1-1/2 in = 6 ft &nbsp;|&nbsp; 2 in = 8 ft &nbsp;|&nbsp; 3 in = 12 ft &nbsp;|&nbsp; 4 in = 16 ft</div>
<p><strong>One-pipe-diameter rule:</strong> The trap arm may not fall more than one pipe diameter from the trap weir to the vent.</p>
<p><strong>Watch out:</strong> Shower trap is 2 in (IPC Table 709.1). Dry floor drain = evaporation, fix with water or a trap primer (ASSE 1018/1044). Water closets are exempt from the Table 909.1 distance limit.</p>
<p><strong>Self-check:</strong> A 1-1/2-inch trap arm runs 5 feet — pass or fail? (Pass: 6 ft is the maximum.) A 1-1/4-inch arm runs 6 feet? (Fail: 5 ft is the maximum.)</p>
`
};
