// HVAC 111 - Module 9: Blueprints & System Layout Drawings
module.exports = {
  number: 9,
  slug: "blueprints-system-layout",
  title: "Blueprints & System Layout Drawings",
  estTime: "3–4 hours",
  objectives: [
    "Navigate a drawing set: title block, sheet index, scales, revisions, legends, and general notes.",
    "Read floor plans and mechanical plans to locate HVAC equipment, duct runs, and diffusers.",
    "Interpret common mechanical symbols for ducts, fittings, dampers, grilles, and equipment.",
    "Use schedules (equipment, diffuser, and duct schedules) to extract sizes, quantities, and specifications.",
    "Measure correctly with an architect's scale and convert scaled dimensions to real dimensions.",
    "Produce a clear field sketch of an existing layout suitable for fabrication and estimating."
  ],
  sections: [
    {
      heading: "Anatomy of a Drawing Set",
      html: `
<p>A set of construction drawings is a book, and it is read like one. The <strong>title sheet</strong> names the project, the design team, and the <strong>sheet index</strong> — the table of contents listing every sheet (A-series architectural, M-series mechanical, E-series electrical, P-series plumbing, and so on). HVAC technicians live mostly on the M-sheets, but the A-sheets hold the floor plans, ceiling heights, and wall constructions that the mechanical design hangs from, and the E-sheets show where power will be provided.</p>
<p>Every sheet carries a <strong>title block</strong> (usually lower right): project name, sheet title and number, drawing scale, date, and the <strong>revision block</strong> recording changes. Revisions matter enormously in the field: building from a superseded sheet is a classic, expensive error, so check the revision cloud/date against the set your foreman confirms is current. Near the title block you will find the <strong>north arrow</strong> and, on mechanical sheets, the <strong>legend</strong> defining that set's symbols and abbreviations, plus <strong>general notes</strong> stating standards the whole job must follow (duct construction standards, sealing requirements, insulation specs).</p>
<p>Drawings are made to <strong>scale</strong>: a stated ratio between paper and building, such as 1/4 inch = 1 foot on floor plans. Detail drawings use larger scales (less reduction) because they show small things; site plans use smaller scales. The scale is printed on each sheet and often per-drawing — never assume carry-over from the previous sheet. When a dimension is printed on the drawing, the printed number rules: <em>do not scale-measure a dimension that is given in figures</em>, because paper and PDFs distort.</p>
<div class="callout"><strong>Key idea:</strong> Before reading any single plan, spend two minutes on the set: sheet index (where is the mechanical plan?), title block (which revision?), scale, legend, and general notes. Those two minutes prevent the most expensive class of field errors.</div>`
    },
    {
      heading: "Reading Plans: Floor Plans, Mechanical Plans, and Sections",
      html: `
<p>A <strong>floor plan</strong> is a horizontal slice through the building, viewed from above: walls, doors, windows, room names and numbers, and dimensions locating everything. The <strong>mechanical plan</strong> overlays the HVAC story on that slice: equipment locations (furnaces, air handlers, condensers — check the E-sheets and architectural site plan for outdoor units), duct runs drawn as double lines for rectangular duct and single/double lines for round, with sizes labeled, plus branch takeoffs ending at <strong>diffusers, registers, and grilles</strong> marked with symbols and size/flow tags.</p>
<p>Duct labeling is a language of its own: a rectangular duct might be tagged "16×10" (inches, width × depth as drawn per the set's convention); round duct as "8″Ø". Direction changes, transitions, and <strong>volume dampers</strong> are marked at branches so balancing can be done later. Rise/drop symbols tell you when a duct changes elevation — essential, because the plan view cannot show height; <strong>sections and elevations</strong> (vertical slices, referenced by numbered cutting-plane arrows on the plan) supply the vertical picture: ceiling heights, duct elevations above the floor, and clearances against beams and other trades' work.</p>
<p><strong>Worked reading.</strong> Plan shows a trunk labeled 18×10 leaving the air handler, reducing to 14×10 after two branches (reductions keep velocity and pressure balanced as flow is delivered along the way), with 6″Ø branches tagged 150 (CFM design flow) to bedroom diffusers. The diffuser symbol's tag points to the <strong>diffuser schedule</strong> (Section 4) for the exact neck size and model. Cross-check the reflected ceiling plan (architectural) for where diffusers must land in the ceiling grid — mechanical intent and ceiling reality must meet, and discovering a conflict on paper costs nothing compared with discovering it on a ladder.</p>
<div class="callout"><strong>Common mistake:</strong> Reading the plan but not the sections. A duct can 'fit' perfectly in plan view and collide with a beam, a light fixture, or a sprinkler line in elevation. Plan + section together are the real drawing; either alone is half.</div>`
    },
    {
      heading: "Symbols and Abbreviations on Mechanical Drawings",
      html: `
<p>Mechanical symbols are standardized in habit but defined per-set in the legend — always confirm there first. The recurring cast:</p>
<ul>
<li><strong>Rectangular duct:</strong> two parallel lines (top view) with size tags; a single line with a size tag on small-scale drawings per the legend.</li>
<li><strong>Round duct:</strong> single or double line with Ø size; <strong>flex duct</strong> often drawn with a wavy/zigzag line or a tagged single line.</li>
<li><strong>Elbow/turn:</strong> a change of direction in the duct lines; turning vanes may be noted at square elbows.</li>
<li><strong>Transition:</strong> converging lines between two size tags (e.g., 16×10 → 12×10).</li>
<li><strong>Volume damper:</strong> a line across the duct with a small quadrant/handle mark — the balancing adjustment point.</li>
<li><strong>Fire/smoke damper:</strong> a marked line across the duct with an 'FD'/'FSD' tag where duct penetrates a rated wall or floor — a code device, never omitted.</li>
<li><strong>Diffuser:</strong> commonly a square with an X or diagonal pattern on the plan; <strong>register/grille:</strong> a rectangle with grille marks — each tagged to the schedule.</li>
<li><strong>Equipment:</strong> outlined shapes tagged with a unit mark (AHU-1, CU-1, EF-1) keyed to the equipment schedule; thermostat shown as a circled T on the wall it serves.</li>
</ul>
<p>Abbreviations run alongside: CFM (airflow), ESP (external static pressure), MERV (filter rating), OA/RA/SA/EA (outside/return/supply/exhaust air), AFF (above finished floor) for elevations, and typical units' tags. When an abbreviation is not in the legend, standard trade dictionaries and the schedule notes usually resolve it — ask before assuming, because a misread tag is a misbuilt system.</p>
<div class="callout"><strong>Key idea:</strong> Symbols answer 'what is it,' tags answer 'which one/spec,' and the schedules answer 'exactly what size/rating.' A complete reading always pulls all three together.</div>`
    },
    {
      heading: "Schedules: The Drawing Set's Tables",
      html: `
<p><strong>Schedules</strong> are tables that carry the specifications too dense for the plan. Three schedules matter most to the HVAC installer:</p>
<ul>
<li><strong>Equipment schedule:</strong> one row per unit mark — manufacturer/model basis, capacity, electrical data (voltage, MCA/MOP for the electricians and for your own verification), airflow, and remarks (options, accessories). Cross-check delivered equipment against this row before setting it.</li>
<li><strong>Diffuser/grille schedule:</strong> per tag — neck size, face style, design CFM, and throw/pressure notes. This is where the plan's diffuser symbols become orderable objects and balancing targets.</li>
<li><strong>Duct/fitting schedule or notes:</strong> construction requirements — gauge by size/pressure class, seam and joint types, insulation and liner specs — which feed directly into Module 10's fabrication work.</li>
</ul>
<p><strong>Worked example — scaling and verification.</strong> A plan at 1/4″ = 1′-0″ shows a supply trunk run. You measure 5-1/2 inches on paper between the takeoff and the far diffuser. Real length = 5.5 ÷ 0.25 = <strong>22 feet</strong>. But the drawing ALSO carries a figured dimension string totaling 21′-6″ for that run. The figured dimension governs — use 21′-6″ for fabrication and treat your scale measurement as a rough check that caught a half-foot discrepancy worth a question to the foreman (paper distortion, a moved wall, or your own misread). That conversation, held before cutting metal, is the entire economic argument for careful reading.</p>
<p>Schedules also discipline <strong>submittals and ordering</strong>: equipment that 'looks the same' but differs in voltage or options is a schedule-row error caught in the office or a disaster caught on the roof. Read the row, check the nameplate, then set the unit.</p>
<div class="callout"><strong>Key idea:</strong> Figured dimensions beat scaled measurements; schedules beat assumptions. When sources conflict, stop and resolve — paper corrections are free, metal corrections are not.</div>`
    },
    {
      heading: "Sketching: The Field Technician's Drawing Skill",
      html: `
<p>Half of HVAC drawing work is not reading prints — it is <strong>making</strong> them: sketching existing conditions for a replacement, laying out a duct run for the shop, or recording an as-built change. A useful field sketch is not art; it is measured information, clearly labeled, that another person (or future you) can fabricate from without a site revisit.</p>
<p>The discipline: draw in plan view first (top-down, roughly to scale — graph paper helps), orient with a north arrow or a labeled landmark ('street side'), and dimension everything that matters with a tape, not by pacing: overall run lengths, fitting locations, sizes of existing ducts you are tying into, ceiling/structure heights where elevation matters, and obstacles (beams, pipes, conduit) with their clearances. Add an elevation sketch wherever the vertical story is not obvious. Label materials, gauges, and connection types (Module 10 vocabulary), mark airflow direction with arrows, and tag photos to sketch locations when the job is complex.</p>
<p><strong>Worked mini-example:</strong> Replacing a failed package unit like-for-like is rare; usually the new unit's supply opening sits inches from the old one's. Your sketch must capture: curb dimensions, old and new supply/return opening sizes and centerlines (measured from a fixed curb edge), and the transition fitting needed — so the shop builds ONE fitting that fits, not two that almost do. Every number on that sketch is a measurement someone trusted; verify each twice before it leaves your hands.</p>
<div class="callout"><strong>Key idea:</strong> A sketch's value is measured in trips saved: if the shop can build it and the installer can hang it without calling you back to the site, the sketch was good. This drawing literacy underpins the blueprint/measurement portions of NATE Ready-to-Work and the layout work throughout the program.</div>`
    }
  ],
  keyTerms: [
    { term: "Title block", def: "The information box on each sheet: project, sheet title/number, scale, date, and revision record." },
    { term: "Sheet index", def: "The table of contents of a drawing set, listing all sheets by discipline series (A, M, E, P...)." },
    { term: "Scale (drawing)", def: "The stated ratio between drawing size and real size, e.g., 1/4″ = 1′-0″ on floor plans." },
    { term: "Architect's scale", def: "The triangular ruler with multiple edges for measuring drawings at standard architectural scales." },
    { term: "Figured dimension", def: "A dimension printed as a number on the drawing; it governs over any scaled measurement." },
    { term: "Floor plan", def: "A horizontal view from above showing walls, rooms, and dimensions — the base for mechanical plans." },
    { term: "Mechanical plan", def: "The M-series drawing overlaying HVAC equipment, ductwork, and terminals on the floor plan." },
    { term: "Section drawing", def: "A vertical slice view showing heights, elevations, and clearances, referenced from the plan by cutting-plane arrows." },
    { term: "Reflected ceiling plan", def: "An architectural drawing of the ceiling layout showing where diffusers, lights, and devices must land." },
    { term: "Legend (drawing)", def: "The per-set key defining symbols and abbreviations used on the drawings." },
    { term: "Schedule", def: "A table of specifications: equipment schedule, diffuser schedule, etc., keyed to tags on the plans." },
    { term: "Equipment schedule", def: "Table giving each unit mark's model basis, capacity, airflow, and electrical data." },
    { term: "Diffuser", def: "A supply-air terminal device that distributes air in a pattern; tagged to the diffuser schedule for size and CFM." },
    { term: "Register / grille", def: "A louvered terminal with (register) or without (grille) an integral damper, used for supply, return, or exhaust." },
    { term: "Volume damper", def: "An adjustable damper in a branch duct used to balance airflow to design CFM." },
    { term: "Fire damper", def: "A code-required device closing a duct penetration in a fire-rated assembly during a fire event." },
    { term: "As-built drawing", def: "A drawing updated to record what was actually installed, including field changes." },
    { term: "Field sketch", def: "A measured, labeled hand drawing of existing or proposed conditions made on site for fabrication or estimating." }
  ],
  video: {
    title: "Blueprint Reading: Interpret Floor Plan Symbols",
    embedUrl: "https://www.youtube.com/embed/PJZyJnMuRNc",
    note: "A focused lesson on floor-plan symbols — door tags, elevation callouts, and the detailed information packed into plan symbols — from a residential blueprint-reading course. It reinforces this module's symbol-and-legend discipline before you apply it to mechanical plans and schedules.",
    more: [
      { title: "Teaching You To Read Blueprints In Less Than 10 MINUTES!", url: "https://www.youtube.com/watch?v=Cg2PRSCrfBI" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A plan is drawn at 1/4″ = 1′-0″. A duct run measures 7-3/4 inches on the paper and carries no figured dimension. What is the real length?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: At 1/4″ scale, each paper inch = 4 feet. Step 2: 7.75 × 4 = <strong>31 feet</strong>. Step 3: Because no figured dimension exists, the scaled value is your working number — but flag it as 'verify in field,' since print scaling is the least reliable dimension source.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> On an 1/8″ = 1′-0″ site/plan sheet, a condenser location measures 3 inches from a property-line reference. What is the real distance, and why is the smaller scale used here?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: At 1/8″ scale, each paper inch = 8 feet; 3 × 8 = <strong>24 feet</strong>. Step 2: Site plans cover large areas on one sheet, so they use a smaller scale (more reduction); floor plans and details use larger scales to show finer information. Always read the scale printed on the specific sheet/drawing you are measuring.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> Your scaled measurement of a run says 22′-0″, but the dimension string on the same drawing totals 21′-6″. Which do you fabricate to, and what do you do about the discrepancy?</p>",
      solution: "<p><strong>Answer: Fabricate to the figured 21′-6″.</strong> Step 1: Figured dimensions always govern — prints distort in printing/copying, and dimension strings are the designer's stated intent. Step 2: A half-foot gap is large enough to raise: notify the foreman/designer and verify against a known figured dimension elsewhere (a wall length) to confirm your scale is right; if the wall also mismatches, the print itself may be plotted off-scale, which everyone on the job needs to know before more measuring happens.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> From a mechanical plan and schedules (described): Trunk tagged 20×12 reducing to 16×12; three 8″Ø branches each tagged 200 CFM to tags D-1, D-2, D-3. The diffuser schedule lists D-1..D-3 with 8″ necks. List everything the installer now knows and one thing still missing.</p>",
      solution: "<p><strong>Solution:</strong> Known: trunk sizes before/after reduction (20×12 → 16×12); branch size (8″Ø) and count (3); design airflow per terminal (200 CFM, 600 CFM total); terminal type and neck size from the schedule (8″ neck matches branch ✓). Still missing (any one): duct elevations/ceiling height (needs the section), damper locations, insulation spec (general notes), or exact diffuser model/throw (if the schedule's model column is blank) — each lives on a different part of the set; a complete reading gathers them all.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> You arrive to rough-in and find the ceiling is framed 8 inches lower than the section drawing shows, leaving your planned trunk 4 inches of clearance short against a beam. Describe the correct response sequence.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: STOP before fabricating to the dead plan — do not 'make it fit' by crushing duct or deleting insulation, which trades a paper problem for a performance/code problem. Step 2: Verify with measurements (actual ceiling height, beam bottom, available envelope) and document them with a sketch/photos. Step 3: Escalate through the foreman to the designer/GC for a revised routing or resized (wider/shallower) duct section that preserves area. Step 4: Record the approved change as an as-built note so balancing and future service work from reality.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> Sketch (describe in words, with dimensions) a field layout for this job: an air handler in a garage corner must feed a straight 14×8 trunk running 18 feet along the wall, with two 7″Ø branches at 6 ft and 14 ft from the unit. List the elements a complete sketch must include.</p>",
      solution: "<p><strong>Solution (required elements):</strong> Plan view with orientation reference (which wall, unit location); unit discharge size and the starting trunk size 14×8; overall run length 18′-0″ dimensioned from the unit; branch takeoff centerlines dimensioned at 6′-0″ and 14′-0″ with 7″Ø sizes labeled; end cap at the trunk end; airflow arrows away from the unit; ceiling/roof height above the trunk and any obstacles in the path noted; material/gauge and joint type notes; and a title/date so the sketch is traceable to the job. Missing any dimension forces a second trip — that is the grading standard.</p>"
    }
  ],
  quiz: [
    {
      q: "When a drawing provides a figured dimension for a run, the installer should:",
      choices: ["Scale-measure the drawing anyway for the 'true' length", "Use the figured dimension — it governs over scaled measurements", "Average the two values", "Use whichever is longer"],
      answer: 1,
      explanation: "Correct: (b). Printed figures are the designer's stated intent; prints distort. (a) Scaling is for dimensions NOT given in figures. (c) Averaging invents a third, wrong number. (d) Length is not a safety factor to pad arbitrarily."
    },
    {
      q: "At a scale of 1/4″ = 1′-0″, a measurement of 4-1/2 inches on paper equals:",
      choices: ["4.5 feet", "9 feet", "18 feet", "13.5 feet"],
      answer: 2,
      explanation: "Correct: (c). Each paper inch = 4 ft, so 4.5 × 4 = 18 ft. (a) Treats paper inches as feet. (b) Uses a 1/2″ scale conversion. (d) Uses 3 ft per inch (a 3/8″-scale mix-up) — always confirm the sheet's printed scale."
    },
    {
      q: "The sheet index is used to:",
      choices: ["Look up equipment prices", "Locate every sheet in the set by discipline series and number", "Find duct gauges", "Record field revisions only"],
      answer: 1,
      explanation: "Correct: (b). The index is the set's table of contents (A/M/E/P series). (a) Prices live in estimates, not drawings. (c) Gauges come from specs/schedules/standards. (d) Revisions are recorded in each sheet's revision block."
    },
    {
      q: "A duct tagged 16×10 on the mechanical plan most likely means:",
      choices: ["16 feet by 10 feet", "A rectangular duct 16 inches by 10 inches (per the set's width×depth convention)", "Duct #16 in room 10", "16 CFM at 10 in. w.c."],
      answer: 1,
      explanation: "Correct: (b). Rectangular ducts are tagged by internal/nominal dimensions in inches. (a) A 16-foot duct would be a building, not a duct. (c) Tags are sizes, not room codes. (d) Airflow tags are separate CFM callouts at branches/terminals."
    },
    {
      q: "The main reason to read the section drawing in addition to the plan is that sections show:",
      choices: ["Equipment prices", "Vertical information: elevations, ceiling heights, and clearances the plan view cannot show", "Wire colors", "Warranty terms"],
      answer: 1,
      explanation: "Correct: (b). Plan = horizontal; section = vertical slice. Collisions with beams and fixtures are elevation problems, invisible on plans alone. (a), (c), and (d) are not drawing content of sections."
    },
    {
      q: "An equipment schedule row for AHU-1 disagrees with the delivered unit's nameplate voltage. The correct action is:",
      choices: ["Install it — schedules are approximate", "Stop and resolve the mismatch with the office/supplier before setting the unit", "Change the building's power to match the unit", "Note it on the as-built after startup"],
      answer: 1,
      explanation: "Correct: (b). Wrong-voltage equipment is a pre-installation catch; setting it first converts a paperwork fix into rigging and rework. (a) Schedules are specifications, not suggestions. (c) Building power is designed around the schedule, not a mistaken delivery. (d) After-startup documentation is far too late."
    },
    {
      q: "On a mechanical plan, the tag 'FD' across a duct at a rated wall, and a circled 'T' on the wall of the room served, most likely denote:",
      choices: ["Flex duct; a takeoff", "A fire damper; a thermostat location", "A filter door; a tee fitting", "Fan data; a transition"],
      answer: 1,
      explanation: "Correct: (b). FD = fire damper at rated penetrations (verify in the legend, always), and a circled T conventionally marks the thermostat. (a), (c), and (d) misassign both symbols — and the final authority is always the set's own legend, which is why reading it comes first."
    },
    {
      q: "A good field sketch differs from a casual drawing because it:",
      choices: ["Uses colored pencils", "Contains measured dimensions, labels, orientation, and material notes sufficient to fabricate from without a return trip", "Is drawn by an engineer", "Avoids numbers to keep it clean"],
      answer: 1,
      explanation: "Correct: (b). A sketch's standard is sufficiency: someone else can build from it. (a) Color is decoration. (c) Technicians make field sketches routinely — authorship is not the test. (d) Numbers are precisely the point; an un-dimensioned sketch is a picture, not information."
    }
  ],
  studyGuide: `
<h3>Module 9 — Blueprints & System Layout Drawings: Quick Reference</h3>
<p><strong>Start every set the same way:</strong> Sheet index → find the M-sheets. Title block → confirm current revision. Then scale, legend, general notes — before reading any plan.</p>
<p><strong>Plan views:</strong> Horizontal slice from above. Duct tags: rectangular in inches (16×10), round with Ø. Branches carry CFM tags. Reductions in trunk size after branches are normal design.</p>
<p><strong>Vertical truth:</strong> Sections/elevations give heights, duct elevations, and clearances. A duct that fits on the plan can still collide in elevation — read both.</p>
<p><strong>Scales:</strong> 1/4″ = 1′ → each paper inch = 4 ft. 1/8″ = 1′ → each inch = 8 ft. <strong>Figured dimensions always beat scaled measurements</strong>; conflicts get escalated before fabrication, not after.</p>
<p><strong>Schedules:</strong> Equipment (model basis, capacity, electrical data — verify nameplates), diffuser (neck, CFM target), construction notes (gauge, seams, insulation → Module 10).</p>
<p><strong>Sketching standard:</strong> Plan view + orientation, every dimension taped and labeled, sizes/materials/joints noted, airflow arrows, obstacles dimensioned. Good enough = the shop builds it without calling you back.</p>
`
};
