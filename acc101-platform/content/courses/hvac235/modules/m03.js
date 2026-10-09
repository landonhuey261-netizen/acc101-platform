// HVAC 235 - Module 3: Advanced Venting
module.exports = {
  number: 3,
  slug: "advanced-venting",
  title: "Advanced Venting",
  estTime: "3–4 hours",
  objectives: [
    "Explain how vent categories determine which vent materials and configurations are allowed.",
    "Compare two-pipe direct vent, concentric venting, and single-pipe venting for condensing furnaces.",
    "Use a manufacturer's vent table concept — actual length plus equivalent length of fittings — to judge whether a vent run is legal for the appliance.",
    "Apply the slope, support, and joint rules that keep a plastic vent system draining and gas-tight.",
    "Evaluate termination locations for clearance, recirculation, snow, and prevailing-wind problems.",
    "Diagnose the common venting errors that present as pressure-switch faults and intermittent lockouts."
  ],
  sections: [
    {
      heading: "Vent Categories Decide Everything",
      html: `
<p>HVAC 132 introduced the four vent categories; this module weaponizes them. The category stamped on the appliance is a contract: it fixes the flue-gas temperature range, whether the vent runs at negative or positive pressure, and whether the appliance condenses. <strong>Category I</strong> (negative pressure, non-condensing — the classic 80% furnace) vents in metal into a chimney or B-vent and depends on hot gases rising. <strong>Category IV</strong> (positive pressure, condensing — the 90%+ furnace) pushes cool gases out with its inducer through listed plastic pipe. Between them sit the fan-assisted and condensing-with-negative-vent variants you will meet less often in houses.</p>
<p>The field errors all come from mixing contracts:</p>
<ul>
<li><strong>Plastic on a hot appliance.</strong> Category I flue gas destroys PVC. Material follows the appliance's category and its installation manual — never the installer's habit or what's on the truck.</li>
<li><strong>Treating a pressurized vent like a drafting one.</strong> A Category IV vent system leaks <em>outward</em> at bad joints. Every joint must be fully made — primed and solvent-welded, or mechanically sealed on listed polypropylene — because the inducer pressurizes the whole run.</li>
<li><strong>Common-venting a condensing furnace with a water heater</strong> into an old chimney. The cool, wet, pressurized exhaust destroys masonry and can be pushed into the other appliance's vent path. Condensing appliances vent as their manuals direct — separately.</li>
</ul>
<div class="callout"><strong>Key idea:</strong> Before touching any vent, read the rating plate category and open the manual's venting section. The manual — not tradition, not the previous install — defines legal materials, sizes, lengths, and terminations for that exact appliance.</div>`
    },
    {
      heading: "Configuration Choices: Two-Pipe, Concentric, Single-Pipe",
      html: `
<p>Condensing furnaces offer three field configurations, and choosing among them is a design decision with service consequences:</p>
<ul>
<li><strong>Two-pipe direct vent.</strong> Separate intake and exhaust pipes, each penetrating the building. Maximum flexibility in routing and termination placement, and true sealed combustion: the burner breathes only outdoor air. The benchmark configuration for tight houses and problem indoor-air situations.</li>
<li><strong>Concentric vent kit.</strong> A pipe-within-a-pipe: exhaust travels through the inner pipe, combustion air returns through the annulus, and both share a <em>single</em> wall or roof penetration with one termination fitting. Fewer holes in the building and a clean exterior look — the reason builders love them. The trade-offs: the kit is model-listed equipment (use the furnace manufacturer's kit and size), the shared termination is a single point both streams depend on, and a botched concentric installation can recirculate exhaust into the intake.</li>
<li><strong>Single-pipe (non-direct-vent).</strong> Exhaust piped out; combustion air taken from indoors. Lowest install cost, legitimate where the space provides proper combustion air — but the furnace is coupled to house pressures again, and in a tight or contaminated space (garage-adjacent, workshop, laundry with chemical storage) the intake choice becomes a combustion-quality and corrosion problem.</li>
</ul>
<div class="callout"><strong>Key idea:</strong> All three configurations can be code-legal; they are not interchangeable in the field. The intake source changes the furnace's relationship with the house. When you find combustion problems, flame-quality issues, or corrosion on a single-pipe install, ask what the burner has been breathing before you condemn parts.</div>
<p>Whichever configuration: both pipes (where fitted) are sized and length-counted per the manual, and the intake deserves the same care as the exhaust — a restricted intake starves combustion exactly as a restricted exhaust chokes draft, and the pressure switch may be watching either or both, depending on the model.</p>`
    },
    {
      heading: "Vent Sizing: The Vent Table and Equivalent Length",
      html: `
<p>Plastic vent sizing is not "bigger is safer" and not "whatever fits." The manufacturer's <strong>vent table</strong> lists, for each model and pipe diameter, the maximum <strong>equivalent length</strong> the system may run. Equivalent length is the straight pipe you actually install <em>plus</em> an allowance for every fitting: each elbow and the termination consume part of the budget, by the amounts the table assigns. Exceed the budget and the inducer can no longer move flue gas against the friction — the pressure switch reports the crime (Module 4 and the lab), usually intermittently, usually on the coldest, windiest nights when vent runs are longest in effect.</p>
<p>Work an example with a hypothetical table (always use the real manual's numbers on a job): the table allows <strong>60 equivalent feet</strong> in 2-inch pipe for this model, charging each 90° elbow as 5 equivalent feet. The proposed run: 34 ft of straight pipe, five 90° elbows, plus the termination. Equivalent length = 34 + (5 × 5) = <strong>59 equivalent feet</strong> — legal, with one foot to spare and no room for a sixth elbow. Now the same run in the field gains a detour around a beam: two more elbows and 6 more feet of pipe = 34 + 6 + (7 × 5) = <strong>75 equivalent feet</strong> — over the table. The correct moves are to upsize to the next pipe diameter (whose table allowance is larger) or reroute — not to "try it and see," because what you will see is a lockout call in February.</p>
<div class="callout"><strong>Key idea:</strong> Count fittings, not just tape-measure feet. Most oversize vent failures are fitting failures: a short-looking run stuffed with elbows. And note the trap in the example — the intake pipe on a two-pipe system has its own equivalent-length budget, counted the same way.</div>
<p>Also respect the table's <em>minimums</em> and its rules on pipe-size transitions: where a reducer is allowed, where it must sit, and the maximum number of size changes are all specified. The vent table is a small document that decides a large share of condensing-furnace reliability.</p>`
    },
    {
      heading: "Slope, Support, and Joints: The Craft Rules",
      html: `
<p>Three mechanical rules decide whether a plastic vent ages gracefully or becomes a callback:</p>
<ul>
<li><strong>Slope back to the furnace.</strong> Condensate forms along the whole vent run, not just in the exchanger. The vent is sloped so this water drains home to the furnace's condensate system — commonly specified at about <strong>¼ inch of fall per foot</strong> of run toward the appliance (confirm the exact figure in the manual). A belly anywhere in the run is a water trap: it gurgles, restricts flow, freezes in cold spaces, and produces intermittent pressure-switch faults that vanish when the water finally sloshes through.</li>
<li><strong>Support.</strong> Plastic pipe sags with time and temperature. Strap the run at the manual's intervals so the installed slope is the slope it keeps in year five. Most "mystery belly" vents were straight on install day and sagged between widely spaced hangers.</li>
<li><strong>Joints fully made.</strong> Cut square, deburr, dry-fit, prime, and solvent-weld PVC/CPVC per the pipe manufacturer's instructions; seat and lock listed polypropylene sections fully. A partially inserted joint is both a leak (pressurized flue gas and acid water, indoors) and a ledge that catches condensate and debris.</li>
</ul>
<div class="callout"><strong>Key idea:</strong> On a condensing vent, water management is structural. Slope, support, and joint quality are not cosmetic — they are the difference between a vent that drains for twenty years and one that slowly fills with its own condensate until the pressure switch ends the argument.</div>
<p>Where a vent passes through cold space, insulation may be required by the manual to limit condensation and freezing in the pipe itself. And every penetration gets flashed and sealed — a vent hole is also a hole in the building envelope.</p>`
    },
    {
      heading: "Terminations and the Common-Error Catalog",
      html: `
<p>The termination is where the vent system meets weather, and it generates a disproportionate share of service calls. The manual and local code set clearances — from grade and expected snow line, from windows, doors, and building corners, from gas meters and other terminations, and the separation between intake and exhaust so the intake does not sip the exhaust. Those numbers are model- and jurisdiction-specific: learn to look them up, never to recite them from memory. The <em>patterns</em>, though, are universal:</p>
<ul>
<li><strong>Snow and frost blockage.</strong> A sidewall termination buried by a drift or rimed with frost restricts the vent until the pressure switch locks the furnace out. The fix is termination height/location per the manual plus a homeowner conversation about keeping it clear — not a bigger inducer.</li>
<li><strong>Recirculation.</strong> Intake and exhaust too close, or a concentric kit assembled wrong, lets exhaust dilute combustion air — poor flame quality, soot, and CO production at the burner (Module 4).</li>
<li><strong>Wind effects.</strong> Terminations on a pressure zone of the house, or directly into prevailing wind, cause gusty intermittent faults that never appear on a calm service visit. The history question — "does it fail on windy nights?" — is diagnostic gold.</li>
<li><strong>Screens and guards not listed for the kit.</strong> A well-meant screen keeps birds out and frosts shut in January. Use only termination fittings the manufacturer lists.</li>
<li><strong>Intake pulling from a bad neighborhood.</strong> An intake terminating beside a dryer vent, a plumbing vent, or a driveway breathes lint, sewer gas, or exhaust — corrosion and combustion problems with no broken part anywhere.</li>
</ul>
<div class="callout"><strong>Key idea:</strong> When a condensing furnace fails intermittently and the furnace itself tests clean, walk outside. A large share of "haunted furnace" calls are termination and vent-geometry stories, and they are solved with a tape measure, the manual's vent table, and a corrected run — not with parts.</div>`
    }
  ],
  keyTerms: [
    { term: "Vent category", def: "The classification (I–IV) fixing an appliance's flue-gas temperature, vent pressure (negative or positive), and whether it condenses; it determines allowed vent materials and methods." },
    { term: "Category IV venting", def: "Positive-pressure, condensing venting — listed plastic pipe pushed by the inducer, with every joint sealed against outward leaks." },
    { term: "Concentric vent kit", def: "A manufacturer-listed pipe-within-a-pipe termination system: exhaust through the inner pipe, combustion air through the outer annulus, one building penetration." },
    { term: "Two-pipe direct vent", def: "Separate piped exhaust and piped outdoor combustion air; sealed combustion isolated from indoor air and pressures." },
    { term: "Vent table", def: "The manufacturer's chart of maximum equivalent vent length by model and pipe diameter, including fitting allowances." },
    { term: "Equivalent length", def: "Straight pipe length plus the table's assigned length for each elbow and fitting; the number compared against the vent table's maximum." },
    { term: "Termination", def: "The outdoor fitting where a vent pipe ends (and, on direct-vent systems, where the intake draws); subject to clearance rules from openings, grade, snow line, and other vents." },
    { term: "Recirculation", def: "Exhaust gas being drawn back into the combustion-air intake due to termination placement or kit errors, degrading combustion quality." },
    { term: "Vent slope", def: "The fall built into a horizontal vent run — commonly about ¼ in. per foot back toward the furnace — so condensate in the pipe drains to the furnace instead of pooling." },
    { term: "Belly (vent sag)", def: "A low spot in a vent run, usually from inadequate support, that traps condensate and restricts flow, causing gurgle and intermittent draft faults." },
    { term: "Solvent welding", def: "Joining PVC/CPVC with primer and cement that chemically fuse the joint; the required joint method for plastic gas venting where listed." },
    { term: "Sealed combustion", def: "An arrangement where the burner draws all combustion air from outdoors through a pipe, isolating combustion from the indoor space." },
    { term: "Combustion air", def: "The air a burner consumes for burning fuel; on single-pipe installs it comes from the room, which must be sized/provided for per code and manual." },
    { term: "Sidewall venting", def: "Horizontal vent termination through an exterior wall, standard for condensing furnaces; subject to snow, clearance, and wind considerations." },
    { term: "Common venting", def: "Two appliances sharing one vent — prohibited for condensing furnaces unless the manufacturer specifically lists it, which residential manuals do not." },
    { term: "Frost closure", def: "Ice buildup at a termination in cold weather that progressively restricts the vent or intake until the appliance locks out." }
  ],
  video: {
    title: "How a Furnace Works",
    embedUrl: "https://www.youtube.com/embed/Eq3JQWWirJs",
    note: "No verified video in the build pool covers plastic vent sizing and terminations directly, so this module reuses the pool's general furnace walkthrough: use it to anchor the furnace's air and exhaust paths in your mind — the inducer, heat exchanger, and vent connection this module's rules attach to. The vent-table, slope, and termination specifics come from the lecture text and, on any real job, from the furnace's own installation manual.",
    more: [
      { title: "Furnace Part 1 - HVAC Training", url: "https://www.youtube.com/watch?v=nh_TsPWdybE" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A furnace's vent table allows 50 equivalent feet in 2-inch pipe, charging each 90° elbow as 5 equivalent feet and the termination as included. A proposed exhaust run has 28 ft of straight pipe and 4 elbows. (a) Is it within the table? (b) The installer adds a detour with 8 more feet of pipe and 2 more elbows. Now is it legal? (c) State two legitimate remedies.</p>",
      solution: "<p><strong>Solution:</strong> (a) Equivalent length = 28 + (4 × 5) = 28 + 20 = <strong>48 ft ≤ 50 ft — legal</strong>. (b) New total = 36 + (6 × 5) = 36 + 30 = <strong>66 ft > 50 ft — over the table</strong>; the inducer is not rated to prove draft against that friction, and pressure-switch lockouts would follow. (c) Remedy one: upsize the run to the next pipe diameter and re-check against that diameter's (larger) table allowance. Remedy two: reroute to remove elbows/straight length until the count fits the 2-inch table. 'Install it and see' is not a remedy — over-length vents fail intermittently, at the worst times.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> Explain why a condensing furnace must never be common-vented into the masonry chimney that still serves the home's natural-draft water heater.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The condensing furnace's exhaust is cool, wet, and <em>pressurized</em> by its inducer — three properties a masonry chimney and a natural-draft appliance are not built for. Step 2: Cool wet exhaust condenses inside the chimney, and the acidic moisture attacks mortar and liner, destroying the chimney the water heater depends on. Step 3: Positive pressure can push furnace exhaust sideways into the water heater's draft hood instead of up the flue, spilling flue gas (including CO) into the room. Step 4: The water heater's natural draft was engineered for its own hot gases; disturbing the shared flue's draft balance can backdraft it. Conclusion: each appliance vents as its manufacturer directs — the condensing furnace in its own listed plastic vent.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A two-year-old condensing furnace has started gurgling and locking out on the pressure switch, mostly after long run cycles. The vent run is 20 ft with two elbows — well inside the table. The furnace, trap, and drains inside test clean. What vent defect fits, and how do you confirm and fix it?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The run is legal on paper but the fault is time-dependent (worse after long runs = more condensate produced) and the sound is water — suspect a <strong>belly in the vent</strong> from a failed or widely spaced hanger: the sagging section pools condensate until it restricts the pipe. Step 2: Confirm by sighting along the run with a level or by checking slope section to section; a low spot holding water confirms it. Step 3: Fix by re-supporting the run at the manual's intervals so the full length holds its slope back to the furnace, and drain any trapped water. Step 4: Run a long heat cycle and listen: no gurgle, steady condensate flow at the drain, no fault.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A concentric vent kit was installed on a furnace that then soots its burners and shows poor flame quality, while draft proves normally. What installation error explains combustion problems with healthy draft, and how is it corrected?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: In a concentric kit, exhaust (inner pipe) and intake air (annulus) share one fitting; if the kit is misassembled, mismatched to the furnace, or the inner/outer connections are crossed or unsealed at the furnace, exhaust <strong>recirculates</strong> into the combustion air. Step 2: The burner then breathes oxygen-depleted, CO₂-rich air: flame quality degrades and soot forms — while total flow (and therefore draft proving) can still look normal, because the inducer moves the same volume; it is the <em>composition</em> of the air that is wrong. Step 3: Correction: shut down, disassemble the kit connections, verify the manufacturer's kit for the model, reseat and seal inner and outer pipes per the instructions, then combustion-test (Module 4) before returning the furnace to service.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A sidewall-vented furnace locks out only during and after snowstorms. The homeowner has replaced the pressure switch twice. Write your diagnosis and the permanent fix.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The weather-locked pattern convicts the termination, not the switch: snow drifts against or frost closes the sidewall termination, the inducer cannot move flue gas, and the (healthy, correctly reporting) pressure switch locks the furnace out. Each new switch 'fixed' nothing because the reporter was never the problem. Step 2: Permanent fix: relocate or extend the termination to the height and location the manual specifies relative to grade and the local snow line, with listed fittings only. Step 3: Coach the homeowner to check and clear the termination after storms as a backup measure. Step 4: Document the measured draft with the termination clear, so the file shows the system proving normally.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> List four things you verify on the intake side of a two-pipe system during a no-heat call — most techs only check the exhaust — and what each rules out.</p>",
      solution: "<p><strong>Answer:</strong> (1) <em>Termination clear:</em> snow, frost, nests, and stored items against the intake starve combustion air exactly like an exhaust blockage. (2) <em>Equivalent length within the table:</em> the intake has its own fitting budget; an over-length intake chokes the burner even with a perfect exhaust. (3) <em>No sag/belly holding condensate or rain:</em> water in the intake restricts air and can be drawn toward the inducer. (4) <em>Location quality:</em> an intake breathing dryer-vent lint, plumbing-vent gas, or its own exhaust (recirculation) explains combustion and corrosion complaints with no failed part. Checking all four converts 'the vent looks fine' into evidence.</p>"
    }
  ],
  quiz: [
    {
      q: "Category IV on a furnace rating plate tells you the vent system is:",
      choices: ["Negative pressure and non-condensing", "Positive pressure and condensing, vented in listed plastic pipe", "Any material the installer prefers", "Required to use a masonry chimney"],
      answer: 1,
      explanation: "Correct: (b). Category IV = condensing appliance with a pressurized vent — cool exhaust in listed plastic, joints sealed against outward leakage. (a) describes Category I. (c) Materials are fixed by the category and the manufacturer's listing, not preference. (d) A chimney is a Category I path; pressurized wet exhaust destroys masonry and is not an approved Category IV vent."
    },
    {
      q: "A vent table allows 70 equivalent feet. A run has 40 ft of pipe and elbows charged at 5 ft each. How many elbows can the run have at most?",
      choices: ["4", "5", "6", "14"],
      answer: 2,
      explanation: "Correct: (c). Budget left for fittings = 70 − 40 = 30 ft; 30 ÷ 5 = 6 elbows. (a) and (b) waste allowance that may be needed but are not the maximum. (d) 14 × 5 = 70 ft of fittings alone, plus 40 ft of pipe = 110 equivalent feet — far over the table; that error is the classic cause of intermittent pressure-switch lockouts."
    },
    {
      q: "Horizontal condensing vent pipe is sloped back toward the furnace primarily so that:",
      choices: ["Flue gas rises more easily", "Condensate forming in the vent drains to the furnace's condensate system instead of pooling in the pipe", "The pipe clears the snow line", "Inspectors can see the pitch from the ground"],
      answer: 1,
      explanation: "Correct: (b). The entire vent run is below the dew point, so water condenses along it; slope (commonly about ¼ in. per foot, per the manual) returns that water to the furnace drain. A flat or bellied run pools water that gurgles, restricts flow, and freezes. (a) Induced draft does not need buoyancy help. (c) Snow clearance is a termination-height issue. (d) The slope serves drainage, not visibility."
    },
    {
      q: "The defining feature of a concentric vent kit is:",
      choices: ["Two separate wall penetrations", "Exhaust and combustion air sharing one penetration via a pipe-within-a-pipe", "A metal inner pipe rated for Category I temperatures", "An extra fan that boosts draft"],
      answer: 1,
      explanation: "Correct: (b). The concentric kit routes exhaust through the inner pipe and intake air through the surrounding annulus, so one hole serves both — and correct assembly is what prevents exhaust recirculation into the intake. (a) describes two-pipe venting. (c) Concentric kits for condensing furnaces are listed plastic systems matched to the appliance. (d) No booster fan is part of a standard concentric kit; the furnace's inducer does the work."
    },
    {
      q: "A furnace locks out on the pressure switch only on windy nights. The most productive first step is to:",
      choices: ["Replace the pressure switch", "Increase the inducer speed", "Examine the termination location and vent geometry for wind-pressure and recirculation effects", "Jumper the pressure switch to confirm the furnace runs"],
      answer: 2,
      explanation: "Correct: (c). A weather-correlated fault is environmental evidence: terminations in adverse wind-pressure zones or poorly separated intake/exhaust openings fail exactly when the wind blows. (a) The switch is reporting a real draft disturbance. (b) Inducer speed is not a field adjustment for this. (d) Jumpering a safety to 'test' is prohibited practice — it defeats the proof that exhaust is leaving safely (and is the exact trap this course's lab trains against)."
    },
    {
      q: "Why must plastic vent joints be fully solvent-welded rather than just pushed together snugly?",
      choices: ["Because the vent operates under positive pressure and will push flue gas and acidic condensate out of any unsealed joint", "Because codes require glue for appearance", "Because PVC expands and would fall apart otherwise", "Because the inducer's vibration unscrews dry joints within days"],
      answer: 0,
      explanation: "Correct: (a). Unlike a natural-draft vent, a condensing vent is pressurized by the inducer — leaks go outward, into the building, carrying flue gas and acid water. (b) Appearance is irrelevant to the requirement. (c) A pushed-together joint is not a joint at all — expansion is handled by proper support and the listed joint method, not friction. (d) There are no threaded dry joints in this system to unscrew; the failure mode is leakage and separation, which full solvent welding prevents."
    },
    {
      q: "On a single-pipe condensing install, which condition most directly threatens combustion quality?",
      choices: ["The exhaust pipe is PVC", "The furnace room is depressurized by other exhaust appliances and starved of combustion air", "The thermostat is in the hallway", "The vent termination is on the north wall"],
      answer: 1,
      explanation: "Correct: (b). Single-pipe units breathe room air; if dryers, bath fans, or a range hood pull the space negative, the burner can be starved or its venting disturbed — flame quality and CO production suffer. (a) PVC exhaust is correct and required for the category. (c) Thermostat location affects comfort control, not combustion air supply. (d) Compass direction matters far less than clearances, snow, and wind-pressure placement."
    },
    {
      q: "An intake termination installed inches from the furnace's own exhaust termination will most likely cause:",
      choices: ["Nothing — intake and exhaust are independent", "Recirculation: exhaust drawn into combustion air, degrading flame quality and promoting soot and CO formation", "Excessive draft that overspeeds the inducer", "Condensate to freeze in the drain trap"],
      answer: 1,
      explanation: "Correct: (b). The intake sips diluted exhaust — oxygen-poor, CO₂-rich air — so combustion deteriorates even though volumes and draft proving may look normal. (a) The streams interact the moment the intake can capture exhaust; separation distances exist precisely for this. (c) Recirculation does not increase draft. (d) Trap freezing follows cold drain routing, not termination spacing."
    }
  ],
  studyGuide: `
<h3>Module 3 — Advanced Venting: Quick Reference</h3>
<p><strong>Category is law:</strong> I = negative pressure, non-condensing, metal/chimney. IV = positive pressure, condensing, listed plastic. Material and method come from the rating plate + manual, never habit. Never common-vent a condensing furnace with a natural-draft appliance.</p>
<p><strong>Configurations:</strong> two-pipe direct vent (sealed combustion, benchmark) • concentric kit (pipe-in-pipe, one penetration — assemble exactly per listing or exhaust recirculates) • single-pipe (room combustion air — space must provide it).</p>
<div class="formula">Equivalent length = straight feet + Σ (fitting allowances from the table). Count the intake separately. Over the table = inducer can't prove draft = lockouts.</div>
<p><strong>Craft rules:</strong> slope ≈ ¼ in./ft back to the furnace (per manual) • support at manual intervals so slope survives • every joint fully solvent-welded/sealed — the vent is <em>pressurized</em> • insulate cold-space runs where required.</p>
<p><strong>Termination patterns:</strong> snow/frost closure after storms • recirculation from tight intake/exhaust spacing • wind-zone intermittent faults on windy nights • unlisted screens that frost shut • intakes breathing dryer vents/driveways. Intermittent fault + clean furnace = walk outside with the manual.</p>
`
};
