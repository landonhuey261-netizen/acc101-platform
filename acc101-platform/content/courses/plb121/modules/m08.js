// Plumbing 121 - Module 8: Installing DWV Piping: Slope, Supports & Cleanouts
module.exports = {
  number: 8,
  slug: "installing-dwv-piping",
  title: "Installing DWV Piping: Slope, Supports & Cleanouts",
  estTime: "3–4 hours",
  objectives: [
    "Set and check uniform slope on horizontal DWV piping using a level, and explain why a belly is a failure.",
    "Choose the correct fitting for each change of direction: long-sweep ells, combos, wyes, and sanitary tees.",
    "Support DWV piping so it holds its slope, including hanger spacing and protection where pipes pass through framing.",
    "Locate cleanouts to IPC Section 708: spacing, stack bases, direction changes, and clearances.",
    "Explain the inspection sequence: rough-in, test, then close the walls — never the other way around."
  ],
  sections: [
    {
      heading: "Slope Is Set During Installation, Not After",
      html: `
<p>Every DWV installation starts the same way: lay out the run, mark the slope, and hang the pipe to the marks. Slope is set with a level and a tape measure while the pipe is going in, because once a joint is solvent-welded or a stack is strapped, the slope is locked. The minimums from Module 1 still govern — 1/4 inch per foot for 2-1/2-inch and smaller pipe, 1/8 inch per foot for 3- through 6-inch pipe, 1/16 inch per foot for 8-inch and larger (IPC Table 704.1).</p>
<p>The enemy of a good slope is the <strong>belly</strong>: a low spot in a run where waste collects. Bellies come from pipe that sags between supports, from a run that was eyeballed instead of leveled, and from framing that forces the pipe up and over an obstacle and back down. A belly holds solids even when the rest of the run is perfect, and it is invisible once the wall is closed — which is why you check slope with a level at every hanger, not just at the ends.</p>
<p>On long runs, snap a sloping chalk line across the studs or joists before you drill or hang anything, and angle your work to match it. Drill holes 1/4 inch larger than the pipe's outside diameter so the pipe feeds through without binding, and remember that a long run may need to be assembled in short sections between studs. Measure twice, cut once, and check the level before the cement sets — solvent-welded joints do not forgive a second guess.</p>
<div class="callout"><strong>Key idea:</strong> Slope is an installation act, not an inspection hope. Level every hanger, chalk the fall line before you drill, and never leave a belly in a run — it will be the clog you get called back for.</div>`
    },
    {
      heading: "Fittings: The Right Turn for Each Direction Change",
      html: `
<p>Drainage fittings are shaped to keep waste moving, and using the wrong fitting at a turn creates a clog point. The rules are simple once you think in terms of flow direction:</p>
<ul>
<li><strong>Long-sweep ell (90°) or combination fitting:</strong> use for a 90-degree bend on a horizontal run, and where a vertical pipe empties into a horizontal one. The long, gentle sweep keeps solids moving and lets a drain snake pass through.</li>
<li><strong>Standard (short) ell:</strong> use only when going from horizontal to vertical — where gravity helps the turn and a snake is not expected to pass.</li>
<li><strong>Wye and 45° ell:</strong> use where a horizontal branch joins a horizontal drain. The 45-degree entry lets the branch flow merge smoothly instead of slamming into the main flow.</li>
<li><strong>Sanitary tee:</strong> use where a horizontal branch enters a vertical stack. The tee's curved inlet guides the flow downward. A sanitary tee must never be laid on its back to join two horizontal drains — the flow would hit a flat wall and stall.</li>
</ul>
<p>Two more fitting rules complete the picture. Horizontal branches must connect to the base of a stack at a point at least <strong>10 times the diameter of the stack</strong> downstream from the stack (IPC 704.3) — a 3-inch stack needs 30 inches of straight run before a branch joins, so the falling water has room to settle. And fittings must be installed with their flow arrows and sweep direction matching the actual flow: a fitting installed backwards is a trap for solids and a block for snakes.</p>
<div class="callout"><strong>Key idea:</strong> Long sweep where flow turns horizontal or drops into horizontal; wye where horizontals join; sanitary tee only into a vertical stack. A fitting installed backwards is a future clog.</div>`
    },
    {
      heading: "Supports: Hold the Slope You Just Set",
      html: `
<p>Pipe that is not supported will sag, and sagging pipe loses slope, collects waste, and eventually separates at a joint. IPC Section 308 requires piping to be supported in accordance with the code's hanger table and the pipe manufacturer's instructions, and the working rule for residential plastic DWV is straightforward: <strong>support horizontal runs about every 4 feet, and at each point where a fitting is added</strong>, so the pipe cannot sag between hangers and the fittings do not carry the weight of the run.</p>
<p>Vertical stacks need support too: a stack is supported at each floor level so its weight does not hang on the fittings below, and a tall stack gets a riser clamp that bears on the structure. Supports must hold the pipe without crushing it — a hanger tightened down on plastic pipe can deform it — and they must allow for thermal expansion and contraction, which is why plastic pipe hangers are snug but not clamped dead tight.</p>
<p>Where pipes pass through framing, protect them. Holes drilled through studs must be at least <strong>5/8 inch from the stud's edge</strong>, and any pipe closer than <strong>1-1/4 inches</strong> to the face of a stud or joist must be protected by a steel nail plate at least 1/16 inch thick, so a drywall screw or nail cannot puncture it. A punctured drain inside a wall is a slow, hidden leak — the kind that rots framing for a year before anyone notices the smell.</p>
<div class="callout"><strong>Key idea:</strong> Supports preserve slope. Hang horizontal plastic DWV about every 4 feet and at every fitting, support stacks at each floor, and nail-plate any pipe within 1-1/4 inches of a framing face.</div>`
    },
    {
      heading: "Cleanouts: The Doors Into the System (IPC 708)",
      html: `
<p>Every drainage system will clog eventually, and the <strong>cleanout</strong> is how a plumber reaches the clog without cutting the pipe open. IPC Section 708 requires cleanouts in specific places, and the inspector will check them before the walls close:</p>
<ul>
<li><strong>Horizontal drains:</strong> cleanouts at intervals of <strong>not more than 100 feet</strong>.</li>
<li><strong>Building sewers:</strong> cleanouts at intervals of <strong>not more than 100 feet</strong>.</li>
<li><strong>Base of stack:</strong> a cleanout at the base of each waste or soil stack.</li>
<li><strong>Direction changes:</strong> a cleanout at each change of direction greater than <strong>45 degrees</strong> in the building sewer, building drain, and horizontal waste or soil lines. Where more than one direction change occurs in a run, only one cleanout is required for each <strong>40 feet</strong> of developed length.</li>
<li><strong>Building drain and sewer junction:</strong> a cleanout within 10 feet of the connection between the building drain and the building sewer.</li>
</ul>
<p>Cleanouts must be the <strong>same nominal size as the pipe they serve, up to 4 inches</strong>, and they must be accessible: a cleanout buried behind drywall with no access panel is not a cleanout. Cleanouts in piping 6 inches and smaller need at least <strong>18 inches of clearance</strong> in front of them so a snake and a technician can work. A cleanout plug must be removable — never cemented, painted shut, or buried in concrete — and its cap should be hand-tight plus a quarter turn, not wrenched down until it cracks.</p>
<div class="callout"><strong>Key idea:</strong> Cleanouts every 100 feet, at every stack base, at every direction change over 45 degrees (one per 40 feet if several), same size as the pipe up to 4 inches, with 18 inches of working clearance. If you cannot reach it, it does not count.</div>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Set slope during installation with a level and a chalked fall line; a belly is a failure even if the ends are correct.</li>
<li>Fittings: long-sweep ell or combo for horizontal 90s and vertical-to-horizontal; wye for horizontal-to-horizontal; sanitary tee only into a vertical stack.</li>
<li>Branch connections at a stack base: at least 10 times the stack diameter downstream (IPC 704.3).</li>
<li>Supports: horizontal plastic DWV about every 4 feet and at every fitting; stacks supported at each floor; nail plates within 1-1/4 inches of a framing face.</li>
<li>Cleanouts (IPC 708): every 100 feet, base of each stack, direction changes over 45 degrees (one per 40 feet), same size as the pipe up to 4 inches, 18 inches clearance.</li>
<li>Test before the walls close (IPC 312.1) — Module 9.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Laying a sanitary tee on its back to join two horizontal drains. The flow hits a flat wall, solids stall, and a snake cannot make the turn. Horizontal-to-horizontal joints take a wye or a combination fitting.</div>
<div class="callout"><strong>Common mistake:</strong> Forgetting the cleanout at the base of the stack or burying cleanouts behind finished walls with no access. The inspector will fail the rough-in, and the first clog will cost a wall.</div>
<div class="callout"><strong>Common mistake:</strong> Hanging a long run from its two ends only. Unsupported pipe sags between hangers, the sag becomes a belly, and the belly becomes the clog. Support every 4 feet.</div>
<p><strong>Ready-to-Work link:</strong> Rough-in installation is the hands-on heart of NCCER Level 2 (module 02204). If you can lay out a bathroom group — slope, fittings, supports, and cleanouts — and have it pass inspection the first time, you are doing the work of a second-year apprentice.</p>`
    }
  ],
  keyTerms: [
    { term: "Belly", def: "A low spot in a horizontal drain run where waste collects; caused by sagging, poor layout, or framing interference." },
    { term: "Long-sweep ell", def: "A 90-degree elbow with a gentle radius, used for horizontal turns and vertical-to-horizontal transitions so solids keep moving and snakes can pass." },
    { term: "Combination fitting", def: "A wye plus 45-degree ell in one fitting, used for horizontal 90-degree turns and branch connections." },
    { term: "Sanitary tee", def: "A tee with a curved inlet for connecting a horizontal branch to a vertical stack; never laid on its back for horizontal-to-horizontal joints." },
    { term: "Wye", def: "A Y-shaped fitting used where a horizontal branch joins a horizontal drain, entering at 45 degrees." },
    { term: "Hanger", def: "A support that holds horizontal piping at the correct slope; plastic DWV is typically supported about every 4 feet." },
    { term: "Riser clamp", def: "A support that bears the weight of a vertical stack at each floor level." },
    { term: "Nail plate", def: "A steel plate at least 1/16 inch thick protecting pipe within 1-1/4 inches of a framing face from nails and screws." },
    { term: "Cleanout", def: "An accessible capped fitting that provides access for cleaning a drain; required by IPC Section 708 at specified locations." },
    { term: "IPC Section 708", def: "The code section governing cleanout size, location, and clearance." },
    { term: "IPC Section 704.3", def: "Requires horizontal branches to connect at least 10 times the stack diameter downstream from the base of a stack." },
    { term: "IPC Section 308", def: "The code section requiring piping to be supported per the hanger table and manufacturer instructions." },
    { term: "Solvent weld", def: "The chemical joining method for plastic DWV pipe: primer (PVC) and solvent cement fuse the pipe and fitting into one piece." }
  ],
  video: {
    title: "How To Plumb A Whole House | Master Bath Plumbing Rough-In",
    embedUrl: "https://www.youtube.com/embed/kPv-4f3328U",
    note: "A master plumber roughs in a master bathroom: laying out drains, setting shower valves, assembling DWV branches below the floor, and tying into a cast iron stack. Watch how the slope and fitting choices are made before a single joint is glued.",
    more: [
      { title: "How To Plumb A Bathroom In 20 Minutes! - Beginners Guide", url: "https://www.youtube.com/watch?v=Jt0VfS6xw2U" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A 2-inch horizontal branch runs 20 feet. (a) What is the minimum total fall? (b) A helper hangs it from its two ends only and the middle sags 1 inch below the straight line. What is the result, and what should have been done?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Minimum fall = 20 ft × 1/4 in/ft = <strong>5 inches</strong>. Step 2: The 1-inch sag creates a <strong>belly</strong> — a low spot where solids collect — even though the ends are at the right heights. Step 3: The run should have been supported about every <strong>4 feet</strong> and checked with a level at every hanger, so the slope stays uniform from end to end.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> Name the correct fitting for each situation: (a) a 90-degree turn on a horizontal drain run; (b) a horizontal branch joining a horizontal drain; (c) a lavatory branch joining a vertical stack; (d) a vertical stack emptying into a horizontal building drain.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: (a) <strong>Long-sweep ell or combination fitting</strong>. Step 2: (b) <strong>Wye</strong> (or combination fitting) entering at 45 degrees. Step 3: (c) <strong>Sanitary tee</strong>. Step 4: (d) <strong>Long-sweep ell or combination fitting</strong> — the vertical-to-horizontal turn needs the gentle sweep so solids keep moving and a snake can pass.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A 3-inch stack receives a horizontal branch at its base. How far downstream from the stack must the branch connect, and which code section requires it?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: IPC 704.3 requires the connection at least <strong>10 times the stack diameter</strong> downstream. Step 2: 10 × 3 inches = <strong>30 inches</strong>. Step 3: The straight run lets the falling water settle before the branch flow joins it.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A horizontal building sewer runs 130 feet in a straight line with no direction changes. How many cleanouts does IPC 708 require on that run, and where?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: IPC 708.3.2 requires cleanouts at intervals of not more than <strong>100 feet</strong> on building sewers. Step 2: A 130-foot run needs a cleanout at the start and one within 100 feet of the end — practically, <strong>two cleanouts</strong>: one at the upstream end and one no more than 100 feet downstream, so no point in the run is more than 100 feet from a cleanout. Step 3: A cleanout is also required within 10 feet of the building drain and sewer junction.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A 4-inch horizontal drain changes direction twice, 60 degrees each time, within a 30-foot run. How many cleanouts does the direction-change rule require?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: IPC 708.3.3 requires a cleanout at each change of direction greater than 45 degrees. Step 2: Where more than one change occurs in a run, only one cleanout is required for each <strong>40 feet</strong> of developed length. Step 3: The run is 30 feet — under 40 feet — so <strong>one cleanout</strong> serves both direction changes.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A drain pipe passes through a stud 1 inch from the stud's face. What protection is required, and what happens without it?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Any pipe within <strong>1-1/4 inches</strong> of a framing face must be protected by a <strong>steel nail plate at least 1/16 inch thick</strong>. Step 2: Without it, a drywall screw or nail can puncture the pipe inside the finished wall. Step 3: The puncture leaks slowly and invisibly, rotting framing and feeding mold for months before anyone finds it.</p>"
    }
  ],
  quiz: [
    {
      q: "A belly in a horizontal drain run is:",
      choices: ["A deliberate low spot to catch solids", "A sag or dip where waste collects, caused by poor support or layout", "The correct name for a cleanout", "A type of vent fitting"],
      answer: 1,
      explanation: "Correct: (b). A belly is an unintended low spot from sagging or bad layout, and it collects solids. (a) Bellies are never deliberate. (c) A cleanout is an access fitting, not a low spot. (d) A belly is a drainage defect, not a vent part."
    },
    {
      q: "The correct fitting for a 90-degree turn on a horizontal drain run is a:",
      choices: ["Standard short ell", "Sanitary tee laid on its back", "Long-sweep ell or combination fitting", "Reducing coupling"],
      answer: 2,
      explanation: "Correct: (c). Horizontal 90s need the gentle sweep so solids keep moving and snakes can pass. (a) A short ell is only for horizontal-to-vertical turns. (b) A sanitary tee on its back stalls flow and blocks snakes. (d) A coupling joins pipe; it does not turn it."
    },
    {
      q: "A sanitary tee is correctly used:",
      choices: ["To join two horizontal drains", "To connect a horizontal branch to a vertical stack", "To connect a vent to a building sewer", "As a cleanout plug"],
      answer: 1,
      explanation: "Correct: (b). A sanitary tee's curved inlet guides branch flow down a vertical stack. (a) Horizontal-to-horizontal joints take a wye or combo — a tee on its back is a violation. (c) Vents never connect to sewers. (d) A cleanout is a separate fitting."
    },
    {
      q: "Under IPC 704.3, a horizontal branch must connect to the base of a stack at least:",
      choices: ["2 feet downstream", "10 times the diameter of the stack downstream", "100 feet downstream", "At the stack itself"],
      answer: 1,
      explanation: "Correct: (b). The connection must be at least 10 stack diameters downstream so falling water can settle. (a) is a fixed distance the code does not use. (c) is the cleanout spacing, not the branch rule. (d) Connecting at the stack defeats the settling run."
    },
    {
      q: "Horizontal plastic DWV piping is typically supported:",
      choices: ["Only at its two ends", "About every 4 feet and at each fitting", "Every 100 feet", "Only where it passes through a wall"],
      answer: 1,
      explanation: "Correct: (b). Regular support holds the slope and keeps fittings from carrying the run's weight. (a) End-only support guarantees sagging. (c) 100 feet is the cleanout spacing. (d) Wall penetrations are protection points, not the support schedule."
    },
    {
      q: "Under IPC 708, cleanouts on horizontal drains must be spaced not more than:",
      choices: ["40 feet apart", "50 feet apart", "100 feet apart", "200 feet apart"],
      answer: 2,
      explanation: "Correct: (c). Horizontal drains need cleanouts at intervals of not more than 100 feet. (a) is the one-cleanout-per-length rule for multiple direction changes. (b) and (d) are not code spacings."
    },
    {
      q: "Under IPC 708, a cleanout is required at:",
      choices: ["The base of each waste or soil stack", "Every fixture trap", "The roof terminal", "Every vent connection"],
      answer: 0,
      explanation: "Correct: (a). A cleanout is required at the base of each waste or soil stack. (b) Traps are not cleanouts (though a trap with slip joints can serve as one in limited cases). (c) The roof terminal is a vent opening. (d) Vent connections do not need cleanouts."
    },
    {
      q: "A cleanout in piping 6 inches and smaller needs at least how much clearance in front of it?",
      choices: ["6 inches", "12 inches", "18 inches", "36 inches"],
      answer: 2,
      explanation: "Correct: (c). IPC requires at least 18 inches of clearance in front of cleanouts on 6-inch and smaller piping. (a) and (b) are too little room to work a snake. (d) exceeds the requirement."
    }
  ],
  studyGuide: `
<h3>Module 8 — Installing DWV Piping: Quick Reference</h3>
<p><strong>Core idea:</strong> Slope is set during installation with a level. Fittings, supports, and cleanouts protect the slope and keep the system serviceable.</p>
<p><strong>Fittings:</strong> Long-sweep ell / combo = horizontal 90s and vertical-to-horizontal. Wye = horizontal-to-horizontal. Sanitary tee = branch into vertical stack only, never on its back.</p>
<p><strong>Stack base (IPC 704.3):</strong> Branch connects ≥ 10 × stack diameter downstream.</p>
<p><strong>Supports:</strong> Horizontal plastic DWV about every 4 ft and at every fitting. Stacks supported at each floor. Nail plate (≥ 1/16 in steel) where pipe is within 1-1/4 in of a framing face.</p>
<div class="formula">Cleanouts (IPC 708): every 100 ft · base of each stack · direction change over 45° (one per 40 ft if several) · same size as pipe up to 4 in · 18 in clearance</div>
<p><strong>Watch out:</strong> A belly is a failure. A buried cleanout is not a cleanout. Test before the walls close (Module 9).</p>
<p><strong>Self-check:</strong> 3-in stack, branch at base — how far downstream? (30 in.) 130-ft straight sewer — cleanouts? (At least 2, none more than 100 ft apart.)</p>
`
};
