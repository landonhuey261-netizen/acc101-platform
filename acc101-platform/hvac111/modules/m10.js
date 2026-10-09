// HVAC 111 - Module 10: Sheet Metal & Duct Fabrication Basics
module.exports = {
  number: 10,
  slug: "sheet-metal-duct-fabrication",
  title: "Sheet Metal & Duct Fabrication Basics",
  estTime: "3–4 hours",
  objectives: [
    "Explain sheet-metal gauge: how gauge numbers relate to thickness and where heavier gauges are required.",
    "Lay out a rectangular duct section including seam and connection allowances.",
    "Describe the Pittsburgh lock and standing/S-cleat and drive-cleat connections and how each is formed and closed.",
    "Identify common fittings — elbows, transitions, takeoffs, end caps, plenums — and their fabrication logic.",
    "Describe fiberglass duct board construction and how it differs from sheet-metal duct in fabrication and application.",
    "Apply shop safety practices for cutting, bending, and handling sheet metal."
  ],
  sections: [
    {
      heading: "Gauge, Materials, and What the Numbers Mean",
      html: `
<p>Sheet metal thickness is specified by <strong>gauge</strong>, and the system's trap is its direction: <strong>the higher the gauge number, the thinner the metal.</strong> For galvanized steel ductwork, common gauges include 26 gauge (thin, for small residential ducts), 24 gauge (heavier), and heavier still as ducts grow. Exact thicknesses per gauge follow standard tables (26 ga galvanized is roughly two-hundredths of an inch; what matters operationally is the ordering and the code/standards logic below), and you should always confirm thickness specs from the job's documents and the duct-construction standard the notes invoke rather than from memory.</p>
<p>Why does thickness climb with size? <strong>Pressure and panel stiffness.</strong> A wide, flat duct panel flexes ("oil-cans") under airflow pressure; larger ducts and higher pressure classes demand heavier gauge and/or reinforcement (beads, cross-breaks — the shallow X pressed into a panel to stiffen it — and transverse reinforcement) so the duct holds shape, stays quiet, and keeps its joints sealed. A 26-gauge panel that is perfectly fine at 12 inches wide becomes a drum skin at 36 inches.</p>
<p>Materials beyond galvanized steel appear for special cases (aluminum where weight or corrosion dictates, stainless in corrosive exhaust) — chosen by the specs, not the fabricator's preference. The metal arrives as flat sheets or coil; fabrication is the sequence <strong>layout → cut → form (bend) → assemble (seam/joint) → reinforce/seal</strong> that the rest of this module follows.</p>
<div class="callout"><strong>Key idea:</strong> Gauge runs backwards (bigger number = thinner). Required gauge follows duct size and pressure class per the job's construction standard — never 'whatever is on the rack' for a specified duct. When in doubt, read the schedule/notes from Module 9.</div>`
    },
    {
      heading: "Layout: Turning a Finished Size into a Flat Pattern",
      html: `
<p>A duct is drawn by its finished (airway) dimensions — say 14×8 inches — but the flat sheet must be <em>longer</em> than the airway perimeter because metal is consumed by seams and connections. Layout is accounting for that consumption before a single cut.</p>
<p><strong>Worked Example — a 14×8 rectangular section.</strong> The perimeter of the finished duct is 2 × (14 + 8) = <strong>44 inches</strong> of sheet width (before allowances). Now add what the joints eat: a Pittsburgh lock on one edge and its mating pocket/flange on the other consume roughly an inch or so of extra material combined (the exact allowance follows the shop's standard for the lock size — learn your shop's numbers and use them consistently), plus the transverse connection allowance at each end (for S-cleat/drive joints or a flanged connection). Length along the duct is the joint-to-joint dimension. Write every allowance on the layout; the most common beginner waste is a beautiful pattern exactly one seam-allowance too small — scrap by arithmetic.</p>
<p>Layout tools and discipline: a <strong>scribe or fine marker</strong> (lines you can see and follow), a <strong>square and straightedge</strong> (patterns must start square or the finished duct twists), and <strong>dividers/trammel points</strong> for arcs on round work. Mark bend lines distinctly from cut lines (shops use different line weights or colors), and mark which side is the <strong>airway (inside)</strong> so seams and raw edges orient correctly — a duct built inside-out has its lock facing the airstream, adding turbulence and a lint-catcher.</p>
<p>Round duct layout flips the math: the sheet width for rolling a round section is the <strong>circumference</strong>, C = π × D. For a 10-inch round: C ≈ 3.1416 × 10 ≈ <strong>31.4 inches</strong>, plus the seam allowance. Elbows and fittings extend the same idea with gore patterns — segments whose arcs are laid out from the fitting's throat and heel radii.</p>
<div class="callout"><strong>Common mistake:</strong> Laying out to finished perimeter with no seam allowance, then 'stretching' measurements mid-build to compensate. Every fitting after it inherits the error. Allowances are part of the pattern — write them, then cut once.</div>`
    },
    {
      heading: "Seams and Transverse Joints: Pittsburgh, S-Cleat, Drive Cleat",
      html: `
<p>Two families of connections close a duct: <strong>longitudinal seams</strong> (along the duct's length, closing the flat pattern into a tube) and <strong>transverse joints</strong> (around the duct, joining one section to the next).</p>
<p>The <strong>Pittsburgh lock</strong> is the standard longitudinal seam for rectangular duct: one edge is formed (on a Pittsburgh machine or by hand/brake work) into a pocket — a folded groove — and the mating edge is left as a straight flange/edge that inserts into the pocket; the protruding lip of the pocket is then hammered/rolled down to lock the two together. Done right, it is strong, airtight-able, and self-aligning. Its cousins — the <strong>snap lock</strong> (common on factory round/rectangular pipe, a button-style seam that snaps together) and the simple <strong>grooved seam</strong> — serve similar roles at smaller sizes.</p>
<p>Transversely, light rectangular duct is classically joined by <strong>S-cleats and drive cleats</strong>: the <strong>S-cleat</strong> (an S-profile strip) slips over the raw edges of two adjoining sections on two opposite sides, and <strong>drive cleats</strong> (C-profile strips) are driven onto the other two sides' formed edges, pulling the joint tight; corners are then closed and the joint sealed. Heavier/commercial work uses flanged transverse connections (angle or manufactured flange systems) bolted at corners and clamped along the edges — chosen by size, pressure class, and the construction standard in the notes.</p>
<p>Seams and joints are where leakage lives, and leakage is lost capacity, lost efficiency, and noise. Shop rules that matter: seams fully closed with no gaps at corners, cleats fully driven, and all transverse joints <strong>sealed</strong> per spec (mastic is the usual standard for quality work) — tape alone where mastic is specified is a defect, not a shortcut.</p>
<div class="callout"><strong>Key idea:</strong> Pittsburgh closes the length; S-and-drive (or flanges) join the sections; sealing finishes the job. A duct system's airtightness is decided at these connections, not by the panels between them.</div>`
    },
    {
      heading: "Fittings: Elbows, Transitions, Takeoffs, Plenums",
      html: `
<p>Straight duct is the easy half; <strong>fittings</strong> change direction, size, or split the flow:</p>
<ul>
<li><strong>Elbows</strong> turn the airstream. A radius elbow (curved throat and heel) treats air gently; a square elbow with <strong>turning vanes</strong> guides air around the corner with manageable turbulence and pressure loss. Elbow patterns are laid out from throat and heel radii — the heel (outside of the turn) travels farther than the throat, which is why the pattern looks like a fan of arcs.</li>
<li><strong>Transitions</strong> change size or shape (rectangular-to-round, or 16×10 down to 12×10). Their layout uses triangulation: the flat pattern is developed by dividing the fitting into triangles and transferring true lengths. Keep transitions gradual where plans allow — abrupt area changes cost pressure and add noise.</li>
<li><strong>Takeoffs (taps)</strong> branch smaller ducts from a trunk: cut the opening, form or attach the takeoff fitting, and provide a <strong>volume damper</strong> in the branch for balancing (Module 9's schedules set the target CFM). A takeoff with an internal scoop or bell mouth starts the branch's air more kindly than a raw punched hole.</li>
<li><strong>Plenums and end caps:</strong> the plenum is the distribution box at the air handler (fabricated to the unit's opening with the trunk connections cut and dampered as designed); end caps close a trunk's far end cleanly and are seam-sealed like any other part.</li>
</ul>
<p>Every fitting is also a small lesson in airflow economics: fittings add <strong>equivalent length</strong> (pressure loss expressed as feet of straight duct). A system roughed in with restrictive shop-made fittings can measure fine on the drawing and fail at the diffuser. Fabricate to the fitting geometry the design assumed; where you must improvise, keep throats generous and turns vanned.</p>
<div class="callout"><strong>Common mistake:</strong> Crushing or necking down a fitting 'to make it fit' a tight space without upsizing elsewhere. The system doesn't care about your clearance problem — it delivers CFM per the pressure available, and a choked fitting spends that pressure before the air reaches the rooms.</div>`
    },
    {
      heading: "Fiberglass Duct Board and Shop Safety",
      html: `
<p><strong>Fiberglass duct board</strong> is a rigid panel of compressed glass fibers with a reinforced foil facing (the air barrier/vapor surface) — it is cut, grooved, folded, and taped/stapled into rectangular ducts that are <em>simultaneously duct, insulation, and sound absorber</em>. Fabrication uses special knives and grooving tools: V-grooves are cut where the board will fold so the facing acts as the hinge; joints are closed with pressure-sensitive tape and mastic systems per the board manufacturer's instructions, and staples where specified. Duct board shines in low-pressure residential/light-commercial supply work. Its limits: it is not for high pressures, grease exhaust, or exposed-to-weather runs, its interior surface demands proper sealing of cut edges, and damaged board is replaced, not patched with optimism.</p>
<p>Sheet-metal and duct-board work share one safety theme: <strong>edges are knives.</strong> Cut sheet metal has a burr edge that slices skin — including through a casual grip when a sheet shifts. Non-negotiables:</p>
<ul>
<li><strong>Gloves rated for sheet handling</strong> whenever moving or positioning cut metal (and the discipline to still treat gloved hands as vulnerable).</li>
<li><strong>Eye protection</strong> in the shop — snips and shears throw small clippings; grinders throw worse.</li>
<li><strong>Deburr or hem edges</strong> where hands will travel during installation; mark razor edges until they are dressed.</li>
<li><strong>Carry sheets with a partner</strong> at size, mind the wind outdoors (a duct section is a sail), and secure loads so edges cannot slide free.</li>
<li><strong>Machine respect:</strong> brakes, shears, and Pittsburghs get guards kept, hands out of pinch points, and no adjustments while running.</li>
</ul>
<p>These skills — gauges, seams, fittings, duct board — are the fabrication backbone assessed across HVAC training standards and used daily in install work; Module 11 changes material (copper) but keeps the same philosophy: measure honestly, allow for the joint, and finish the connection properly.</p>
<div class="callout"><strong>Key idea:</strong> Whether the wall of the duct is galvanized steel or duct board, the job is identical in spirit: hold shape against pressure, guide air with minimum loss, and seal every seam like the system's capacity depends on it — because it does.</div>`
    }
  ],
  keyTerms: [
    { term: "Gauge", def: "The thickness designation for sheet metal; higher gauge number = thinner metal." },
    { term: "Cross-break", def: "A shallow X-shaped press in a duct panel that stiffens it against flexing and oil-canning." },
    { term: "Oil-canning", def: "The flexing/popping of an under-stiffened flat duct panel under pressure changes." },
    { term: "Flat pattern (layout)", def: "The 2D development of a duct or fitting on flat stock, including seam and joint allowances." },
    { term: "Seam allowance", def: "Extra material added to a pattern to form locks and joints." },
    { term: "Pittsburgh lock", def: "A longitudinal seam: one edge formed into a pocket receives the mating edge, and the lip is closed down to lock." },
    { term: "Snap lock", def: "A button-style longitudinal seam on factory pipe that snaps together." },
    { term: "S-cleat", def: "An S-profile strip joining the edges of two rectangular duct sections on a transverse joint." },
    { term: "Drive cleat", def: "A C-profile strip driven onto formed edges to pull a transverse joint tight." },
    { term: "Transverse joint", def: "The connection around the duct's perimeter joining one section to the next (cleats or flanges)." },
    { term: "Longitudinal seam", def: "The seam running along the duct's length that closes the pattern into a tube." },
    { term: "Elbow", def: "A fitting that changes airflow direction; radius or square-with-vanes designs." },
    { term: "Turning vanes", def: "Airfoil blades inside a square elbow that guide air around the turn, reducing turbulence and pressure loss." },
    { term: "Transition", def: "A fitting changing duct size or shape, laid out by triangulation." },
    { term: "Takeoff", def: "A branch fitting connecting a smaller duct to a trunk, typically with a volume damper for balancing." },
    { term: "Plenum", def: "A distribution box at the air handler from which trunks originate." },
    { term: "Fiberglass duct board", def: "Rigid foil-faced glass-fiber panel fabricated into insulated rectangular duct by grooving, folding, and sealed taping." },
    { term: "Equivalent length", def: "A fitting's pressure loss expressed as the length of straight duct producing the same loss." }
  ],
  video: {
    title: "How to Build a 4-Piece Sheet Metal Transition Fitting! HVAC Ductwork Training!",
    embedUrl: "https://www.youtube.com/embed/MNfxm5ssJNM",
    note: "A step-by-step build of a four-piece sheet-metal transition fitting for furnace/coil changeouts, from layout through forming and assembly. Watch how allowances and bend lines are planned before cutting — the layout discipline this module teaches — and note the hand-forming technique on each piece.",
    more: [
      { title: "Pittsburgh Lock Seam Square Duct – Sheet Metal Fabrication by Hand", url: "https://www.youtube.com/watch?v=bzmDjV77_tA" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A job note calls for 24-gauge duct on a large trunk and 26-gauge on small branches. A trainee grabs 26-gauge for the trunk 'because the number is bigger, so it must be thicker.' Correct the error and explain why the trunk needs the heavier sheet.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Gauge runs inverse — 24 ga is THICKER than 26 ga. Step 2: The trunk's wide panels span farther and see the system's full pressure; thin sheet would flex, oil-can, leak at joints, and drum. Step 3: Gauge follows size/pressure class per the construction standard: big duct, low gauge number. The trainee's trunk must be re-fabricated in 24 ga.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> Lay out the flat width for a 12×8 rectangular duct section: compute the finished perimeter, then state what must be added before cutting and why. (Use your shop-standard allowance concept; exact numbers follow shop practice.)</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Perimeter = 2 × (12 + 8) = <strong>40 inches</strong>. Step 2: Add the longitudinal seam allowance — material for the Pittsburgh pocket on one edge plus the mating flange on the other (roughly an inch-plus total, per shop standard) — giving a cut width a bit over 41 inches. Step 3: Also confirm the section LENGTH includes its transverse-connection allowance at the ends. Cutting at exactly 40 inches produces a duct that cannot close its own seam.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> Compute the flat sheet width needed to roll a 12-inch-diameter round duct section with a 1-inch total seam allowance.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Circumference C = π × D = 3.1416 × 12 ≈ <strong>37.7 inches</strong>. Step 2: Add seam allowance: 37.7 + 1 = <strong>≈38.7 inches</strong> of sheet width. Step 3: The section's length is the other dimension of the sheet; seam allowance belongs to the circumference direction, the direction that closes on itself.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A transverse joint between two rectangular sections is assembled with S-cleats on the top and bottom but the drive cleats on the sides are only half-driven, and the joint is left unsealed. List the defects and their consequences.</p>",
      solution: "<p><strong>Solution:</strong> Defects: (1) half-driven drive cleats — the joint is not pulled mechanically tight, so the sections can shift and the cleats can work loose under vibration; (2) unsealed joint — a direct leakage path at the system's pressure boundary. Consequences: air loss (capacity and efficiency), possible whistling/noise, dirt streaking at the leak, and a failed duct-leakage inspection where one is performed. Fix: drive the cleats fully home, close the corners, and seal the joint with mastic per spec.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A square elbow without turning vanes is substituted for the specified vanned elbow 'to save time.' What does the system pay for that decision?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Air cannot turn a sharp square corner cleanly; it separates, tumbles, and piles pressure loss into that fitting — its equivalent length balloons compared with the vanned fitting. Step 2: The blower now spends more of its static-pressure budget on that elbow, so total delivered CFM falls and the far rooms starve first. Step 3: Turbulence also adds noise. Vanes exist because the corner is where air needs the most guidance; deleting them is spending the system's airflow to save minutes in the shop.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> For each application, choose sheet metal or fiberglass duct board and justify: (a) low-pressure residential supply trunk in a conditioned basement; (b) a commercial exhaust duct; (c) a high-pressure VAV main.</p>",
      solution: "<p><strong>Solution:</strong> (a) <strong>Either; duct board is well suited</strong> — low pressure, built-in insulation and sound absorption, fast fabrication (metal is equally acceptable if the shop prefers). (b) <strong>Sheet metal</strong> — exhaust (especially any grease/contaminant duty) requires metal construction; duct board is not rated for it. (c) <strong>Sheet metal</strong> — duct board is a low-pressure material; high-pressure mains need metal gauges/reinforcement per the pressure class.</p>"
    }
  ],
  quiz: [
    {
      q: "Which sheet is thicker: 24 gauge or 26 gauge?",
      choices: ["26 gauge — bigger number, thicker metal", "24 gauge — gauge numbers run inverse to thickness", "They are identical", "Whichever the supplier sends"],
      answer: 1,
      explanation: "Correct: (b). Higher gauge = thinner. 24 ga is the heavier sheet. (a) states the common beginner error exactly backwards. (c) Two consecutive gauges differ measurably in stiffness and duty. (d) The specification, not supplier convenience, governs."
    },
    {
      q: "The Pittsburgh lock is primarily used as:",
      choices: ["A transverse flange for large commercial mains", "A longitudinal seam closing a rectangular duct's pattern into a tube", "A damper blade material", "A type of insulation fastener"],
      answer: 1,
      explanation: "Correct: (b). The Pittsburgh pocket-and-flange runs along the duct's length. (a) Transverse joints use cleats or flanges — different hardware for a different direction. (c) and (d) are unrelated components."
    },
    {
      q: "A flat pattern laid out at exactly the finished perimeter will fail because it omits:",
      choices: ["Paint allowance", "Seam (and joint) allowances — the material consumed forming the lock and end connections", "The duct liner", "Shipping clearance"],
      answer: 1,
      explanation: "Correct: (b). The pattern must include the metal that folds into the Pittsburgh pocket/mating edge and transverse connections. (a) Finishes add negligible size and are not part of pattern math. (c) Liner is accounted separately where specified. (d) Handling room is not a dimension of the part."
    },
    {
      q: "Turning vanes inside a square elbow serve to:",
      choices: ["Strengthen the elbow's corners", "Guide air around the turn, reducing turbulence, pressure loss, and noise", "Act as a fire damper", "Hold the insulation in place"],
      answer: 1,
      explanation: "Correct: (b). Vanes are airflow devices — airfoils splitting the turn into guided passages. (a) Corners get strength from seams/hems, not vanes. (c) Fire dampers are separate listed devices at rated barriers. (d) Insulation is retained by pins/adhesive, not vanes."
    },
    {
      q: "The sheet width to roll an 8-inch round duct (before seam allowance) is approximately:",
      choices: ["16 inches", "25.1 inches", "32 inches", "8π is not how circumference works"],
      answer: 1,
      explanation: "Correct: (b). C = π × D = 3.1416 × 8 ≈ 25.1 in. (a) halves the circumference. (c) uses 4 × D. (d) is simply wrong — circumference of a circle is π times diameter."
    },
    {
      q: "Fiberglass duct board is a good choice for which duty?",
      choices: ["Grease-laden kitchen exhaust", "High-pressure VAV mains", "Low-pressure residential/light-commercial supply duct where its built-in insulation is a plus", "Outdoor exposed duct runs"],
      answer: 2,
      explanation: "Correct: (c). Duct board = duct + insulation + sound control at low pressure. (a) Grease exhaust requires metal construction. (b) Pressure classes beyond board ratings demand metal. (d) Weather exposure damages board and its facing; outdoor duct is metal with external insulation."
    },
    {
      q: "S-cleats and drive cleats together form:",
      choices: ["A longitudinal seam", "A transverse joint between two rectangular duct sections", "A takeoff connection", "A hanging system"],
      answer: 1,
      explanation: "Correct: (b). S-cleats slip over adjoining raw edges on two sides; drive cleats pull the other two sides tight — a complete transverse joint, then sealed. (a) Longitudinal seams are Pittsburgh/snap locks. (c) Takeoffs are separate branch fittings. (d) Hangers/supports are straps, rods, and trapeze — different hardware."
    },
    {
      q: "Why must larger ducts use heavier gauge or added reinforcement?",
      choices: ["To make them heavier for the hangers", "Wide flat panels flex under pressure; stiffness keeps shape, quiet, and sealed joints as size and pressure class rise", "Thicker metal insulates better", "Gauge only matters for appearance"],
      answer: 1,
      explanation: "Correct: (b). Panel stiffness against oil-canning and joint stress is the structural reason size/pressure drive gauge. (a) Weight is a cost of stiffness, not the goal. (c) Bare metal of any gauge is a poor insulator. (d) Gauge is functional specification, enforced by construction standards."
    }
  ],
  studyGuide: `
<h3>Module 10 — Sheet Metal & Duct Fabrication: Quick Reference</h3>
<p><strong>Gauge:</strong> Higher number = thinner. Required gauge rises with duct size and pressure class (per the job's construction standard). Cross-breaks/reinforcement stiffen wide panels against oil-canning.</p>
<p><strong>Layout:</strong> Finished perimeter + seam allowance + transverse-connection allowance. Rectangular perimeter = 2(W + D). Round sheet width = circumference π × D + seam allowance. Mark bend lines vs cut lines; note the airway side.</p>
<p><strong>Seams & joints:</strong> Pittsburgh lock = the standard longitudinal seam (pocket + mating edge, lip closed). Snap lock on factory pipe. Transverse: S-cleats + drive cleats (light), flanged systems (heavy/high pressure). Seal every transverse joint per spec — mastic is the quality standard.</p>
<p><strong>Fittings:</strong> Elbows (radius or square WITH turning vanes), transitions (triangulated layout, gradual where possible), takeoffs (add a volume damper for balancing), plenums, end caps. Every fitting spends pressure (equivalent length) — fabricate the geometry the design assumed.</p>
<p><strong>Duct board:</strong> Foil-faced fiberglass panel; grooved, folded, taped/mastic-sealed. Duct + insulation + sound absorption for low-pressure work only — never grease exhaust, high pressure, or weather exposure.</p>
<p><strong>Safety:</strong> Cut edges are knives — gloves for handling, eye protection in the shop, deburr edges, partner-carry large sheets, guards on and hands clear of brakes/shears/Pittsburghs.</p>
`
};
