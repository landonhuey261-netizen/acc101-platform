// Plumbing 121 - Module 11: Roof, Floor & Area Drains
module.exports = {
  number: 11,
  slug: "roof-floor-area-drains",
  title: "Roof, Floor & Area Drains",
  estTime: "3–4 hours",
  objectives: [
    "Explain how roof drainage is sized: roof area and the local 100-year hourly rainfall rate (IPC Chapter 11).",
    "Identify the parts of a roof drainage system: roof drain, strainer, leader, and secondary (overflow) drainage.",
    "Explain why storm water must never connect to the sanitary sewer.",
    "Describe floor drains: trapping, trap primers, and floor slope to the drain.",
    "Describe area drains and sump systems for below-grade spaces that cannot drain by gravity."
  ],
  sections: [
    {
      heading: "Rain Is a Plumbing Load Too",
      html: `
<p>Everything in this course so far has carried water that came from a fixture. Roof, floor, and area drains carry water that comes from the sky and the ground — and on a big roof in a hard rain, that load dwarfs every fixture in the building. A flat roof of 5,000 square feet in a storm can collect thousands of gallons in an hour, and if the drainage cannot move it, the water ponds, the roof structure takes on weight it was never designed for, and the roof can fail.</p>
<p>Roof drainage is governed by <strong>IPC Chapter 11 (Storm Drainage)</strong>, and it is sized differently from sanitary drainage. Instead of fixture units, the sizing inputs are the <strong>roof area</strong> served and the <strong>local 100-year, 1-hour rainfall rate</strong> — the heaviest hour of rain expected once in a century for that location, published in the code's rainfall tables. The design storm is deliberately severe: a roof drain sized for an average rain would fail in exactly the storm that matters.</p>
<p>The same separation rule from Module 1 applies with even more force here: <strong>storm water must never connect to the sanitary sewer</strong>. Rainwater belongs in the storm drainage system — a storm sewer, a dry well, or a lawful discharge to grade. Sending roof water into the sanitary sewer overloads the sewer and the treatment plant, and in a storm it can back sewage into buildings downstream. The two systems stay separate from the roof to the street.</p>
<div class="callout"><strong>Key idea:</strong> Roof drains are sized by roof area and the 100-year hourly rainfall rate — not by fixture units. And storm water never enters the sanitary sewer.</div>`
    },
    {
      heading: "Roof Drains, Strainers, Leaders, and Overflow",
      html: `
<p>A roof drainage system has four parts. The <strong>roof drain</strong> is the fitting set into the low point of the roof — on a flat roof, the drain sits in a sump so water flows to it from every direction. The <strong>strainer</strong> (a dome or grate over the drain) keeps leaves, gravel, and debris out of the pipe while letting water through; a strainer clogged with leaves is the most common cause of a ponded roof. The <strong>leader</strong> (also called a conductor or downspout) is the vertical pipe carrying water from the roof drain down to the storm drain or to grade. And the <strong>secondary (overflow) drainage</strong> is the backup path — scuppers through a parapet or overflow drains set slightly higher than the primary drains — that takes over if the primary drains clog.</p>
<p>Secondary drainage is not optional decoration. A flat roof with a parapet and no overflow path is a bathtub: if the primary drain clogs, water rises until the roof structure fails or the water finds its own way in through the building. The overflow is set a little higher than the primary drain so it stays dry in normal rain and only carries water when the primary cannot. On the job, check both systems: a primary drain with a clogged strainer and a scupper blocked by a bird's nest is a roof failure waiting for the next storm.</p>
<p>Leaders that discharge to grade must end where the water can flow away from the building — onto a splash block or into a yard graded away from the foundation — never against the foundation wall, where the water will find the basement. Leaders inside the building are part of the storm drainage system and are sized like the roof drains they serve.</p>
<div class="callout"><strong>Key idea:</strong> Drain + strainer + leader + overflow. The overflow is the insurance: it only works if it is clear, set above the primary drain, and checked before storm season.</div>`
    },
    {
      heading: "Floor Drains: The Trap That Dries Out",
      html: `
<p>A <strong>floor drain</strong> is a trapped drain set into the lowest point of a floor — in a basement, a laundry room, a mechanical room, or a garage — to catch spills, leaks, and wash water. It is a fixture like any other: it has a trap, it connects to the sanitary drainage system, and its trap seal is the same 2 to 4 inches the code requires everywhere (IPC 1002.4).</p>
<p>The floor drain's weakness is the one you met in Module 3: <strong>evaporation</strong>. A basement floor drain may go months or years without seeing water, and in that time its seal evaporates, leaving an open path for sewer gas into the room. The code's answer is IPC 1002.4.1: where a trap seal is subject to loss by evaporation, install a deeper-seal trap (at least a 4-inch seal) or a <strong>trap seal primer valve</strong> (ASSE 1018 or ASSE 1044) that periodically drips water into the trap. On service calls, the first thing to check on a sewer smell in a basement is the floor drain — a bucket of water down the drain is the fastest diagnostic test in plumbing.</p>
<p>Floor drains need the floor to work with them. The floor must slope toward the drain from every direction so water actually reaches it — a drain set in a high spot, or a floor that slopes away from it, is decoration. And the drain's grate must sit flush with the finished floor: too high and it trips people and blocks water; too low and it collects dirt and cannot be cleaned. In a garage or shop, the drain may need an oil or sand interceptor before it connects to the sanitary system, so automotive fluids and grit do not enter the sewer.</p>
<div class="callout"><strong>Key idea:</strong> A floor drain is a trapped fixture that usually sits unused — so its seal evaporates. Water or a trap primer (ASSE 1018/1044) keeps it sealed. Check the floor drain first on any basement sewer smell.</div>`
    },
    {
      heading: "Area Drains and Sumps: Draining What Cannot Flow Away",
      html: `
<p>An <strong>area drain</strong> collects surface water from a patio, a driveway, a window well, or a stairwell — any paved or low area where rain collects and has nowhere to go. Area drains connect to the storm drainage system, not the sanitary sewer, and they need the same strainer discipline as roof drains: a grate clogged with leaves turns a patio into a pond and a window well into a basement flood.</p>
<p>The hard case is the area that sits <strong>below</strong> the storm sewer — a basement stairwell, a sunken patio, a window well below grade. Water there cannot flow to the street by gravity, so it is collected in a <strong>sump</strong>: a pit with a pump that lifts the water up to a point where it can drain away. The pump is controlled by a float switch, and it needs a check valve on its discharge so water cannot flow back into the pit when the pump stops. A sump pump without a check valve cycles endlessly, pumping the same water up and letting it fall back down.</p>
<p>Sump systems fail in two predictable ways: the pump fails (or loses power) during the storm that needs it most, and the discharge freezes or clogs. A battery backup or a second pump is cheap insurance on a finished basement, and the discharge line must run to a point where the water flows away from the building and cannot freeze shut in winter. Tell the homeowner to test the pump twice a year — pour a bucket of water into the pit and watch it pump out — because a pump that has not run in a year is a pump you cannot trust.</p>
<div class="callout"><strong>Key idea:</strong> Area drains go to storm drainage, never sanitary. Below-grade water cannot flow uphill, so it goes to a sump with a float-controlled pump, a check valve, and a discharge that runs clear of the building.</div>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Roof drainage (IPC Chapter 11) is sized by roof area and the local 100-year, 1-hour rainfall rate — not by DFU.</li>
<li>Roof system: drain + strainer + leader + secondary (overflow) drainage. The overflow only works if it is clear.</li>
<li>Storm water never connects to the sanitary sewer.</li>
<li>Floor drains are trapped fixtures; their seals evaporate when unused — use water or a trap primer (ASSE 1018/1044).</li>
<li>Area drains go to storm drainage; below-grade areas drain to a sump with a float pump and a check valve.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Connecting a roof leader or area drain into the sanitary sewer. It overloads the sewer and the treatment plant, and in a storm it can push sewage back into buildings. Storm and sanitary stay separate.</div>
<div class="callout"><strong>Common mistake:</strong> Ignoring the overflow. A roof with clear primary drains and a blocked scupper is one clogged strainer away from a ponded roof. Check both systems before storm season.</div>
<div class="callout"><strong>Common mistake:</strong> Forgetting the dry floor drain. A basement that "smells like sewer sometimes" usually has a floor drain whose seal evaporated — the fix is a bucket of water, and the permanent fix is a trap primer.</div>
<p><strong>Ready-to-Work link:</strong> Storm drainage is NCCER Level 2/3 work (module 02205) and a journeyman exam topic. If you can explain why a roof drain is sized by rainfall rate and why storm water stays out of the sanitary sewer, you have this module.</p>`
    }
  ],
  keyTerms: [
    { term: "Storm drainage", def: "The system (IPC Chapter 11) that collects and removes rainwater from roofs and paved areas." },
    { term: "Roof drain", def: "A fitting set into the low point of a roof to collect rainwater into the storm drainage system." },
    { term: "Strainer", def: "A dome or grate over a roof or floor drain that keeps debris out while letting water through." },
    { term: "Leader (conductor)", def: "The vertical pipe carrying rainwater from a roof drain down to the storm drain or to grade." },
    { term: "Secondary (overflow) drainage", def: "Scuppers or overflow drains set above the primary drains that carry water if the primary drains clog." },
    { term: "Scupper", def: "An opening through a parapet wall that lets ponded roof water escape as overflow drainage." },
    { term: "100-year, 1-hour rainfall rate", def: "The heaviest hour of rain expected once in a century for a location; a sizing input for roof drainage." },
    { term: "Floor drain", def: "A trapped drain set into the lowest point of a floor to catch spills and wash water." },
    { term: "Trap seal primer", def: "A valve (ASSE 1018 or ASSE 1044) that periodically adds water to a trap subject to evaporation loss." },
    { term: "Area drain", def: "A drain collecting surface water from a patio, driveway, window well, or stairwell; connects to storm drainage." },
    { term: "Sump", def: "A pit collecting below-grade water for removal by pump." },
    { term: "Sump pump", def: "A float-controlled pump that lifts sump water to a point where it can drain away by gravity." },
    { term: "Check valve", def: "A one-way valve on a sump pump discharge that prevents water from flowing back into the pit." }
  ],
  video: {
    title: "Storm Drainage 101 - Roof Drain Basics",
    embedUrl: "https://www.youtube.com/embed/9wCnOvZtLVs",
    note: "The basics of roof drainage: how roof drains, strainers, and leaders work together, and why overflow drainage matters. Watch for the strainer — the small part that causes most ponded-roof failures when it clogs.",
    more: [
      { title: "How To Install a Floor Drain in Concrete", url: "https://www.youtube.com/watch?v=g_osMqvsn14" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> Explain in two sentences why roof drainage is sized by roof area and rainfall rate instead of by drainage fixture units.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Roof drains carry rain, not fixture discharge, so there are no fixtures to assign DFU values to. Step 2: The load is the volume of rain falling on the roof area during the design storm, so the sizing inputs are the roof area and the local 100-year, 1-hour rainfall rate.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A flat roof has a parapet, one primary roof drain, and no overflow. The primary drain's strainer clogs during a storm. What happens, and what is missing?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: With no overflow path, the roof becomes a bathtub — water ponds and rises because it has nowhere to go. Step 2: The ponded water adds structural load the roof was not designed for and eventually finds its way into the building. Step 3: What is missing is <strong>secondary (overflow) drainage</strong> — scuppers or overflow drains set slightly higher than the primary drain that carry water when the primary clogs.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A helper proposes connecting a new roof leader into the building's sanitary sewer 'because it is already there.' Is this permitted? Explain.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: <strong>No, it is not permitted.</strong> Step 2: Storm water must never connect to the sanitary sewer — rainwater belongs in the storm drainage system. Step 3: Sending roof water into the sanitary sewer overloads the sewer and the treatment plant, and in a storm it can push sewage back into buildings downstream.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A basement smells like sewer near a floor drain that has not had water in it for months. (a) What is the most likely cause? (b) What is the immediate fix? (c) What permanent device prevents recurrence?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The most likely cause is <strong>evaporation</strong> of the trap seal in the unused floor drain. Step 2: The immediate fix is to pour a bucket of water down the drain to restore the seal. Step 3: A <strong>trap seal primer valve</strong> (ASSE 1018 or ASSE 1044) that periodically adds water to the trap prevents it permanently — or a deeper-seal trap of at least 4 inches.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A sunken basement stairwell collects rainwater and has no gravity path to the street. Describe the system that drains it, naming its three key parts.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The stairwell drains to a <strong>sump</strong> — a pit at the low point. Step 2: A <strong>sump pump</strong> controlled by a float switch lifts the water up to a point where it can drain away. Step 3: A <strong>check valve</strong> on the pump discharge prevents the water from flowing back into the pit when the pump stops.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A sump pump runs every few minutes even when it is not raining, pumping the same water over and over. What is the most likely fault, and how is it fixed?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The most likely fault is a failed or missing <strong>check valve</strong> on the pump discharge. Step 2: Without the check valve, water pumped up the discharge line flows back down into the pit when the pump stops, refilling it and triggering the float switch again. Step 3: The fix is to install (or replace) the check valve on the discharge line, so water can only flow out of the pit.</p>"
    }
  ],
  quiz: [
    {
      q: "Roof drainage is sized using:",
      choices: ["Drainage fixture units (DFU)", "Roof area and the local 100-year, 1-hour rainfall rate", "The number of stories in the building", "Water supply fixture units (WSFU)"],
      answer: 1,
      explanation: "Correct: (b). IPC Chapter 11 sizes roof drainage by roof area and rainfall rate. (a) DFU applies to sanitary fixtures, not rain. (c) Stories do not determine roof load. (d) WSFU is a water supply measure."
    },
    {
      q: "The purpose of secondary (overflow) roof drainage is to:",
      choices: ["Carry water in normal rain so the primary drain lasts longer", "Take over if the primary drains clog, so water cannot pond on the roof", "Drain condensation from the vent system", "Supply water to the roof for cleaning"],
      answer: 1,
      explanation: "Correct: (b). Overflow drainage is the backup that prevents ponding when primaries clog. (a) The primary handles normal rain; the overflow stays dry until needed. (c) Condensation is not roof drainage. (d) Overflow drains remove water; they never supply it."
    },
    {
      q: "Storm water must never connect to the sanitary sewer because:",
      choices: ["Storm water is too clean for the sewer", "It overloads the sewer and treatment plant and can push sewage back into buildings", "The IPC forbids all outdoor drains", "Rainwater damages PVC pipe"],
      answer: 1,
      explanation: "Correct: (b). Rainwater volume overwhelms sanitary sewers and can cause backups. (a) Cleanliness is not the issue — volume is. (c) Outdoor drains are permitted; they must connect to storm drainage. (d) Rainwater does not damage PVC."
    },
    {
      q: "The strainer on a roof drain exists to:",
      choices: ["Increase the water pressure", "Keep leaves and debris out of the drain pipe while letting water through", "Vent the storm system", "Measure the rainfall rate"],
      answer: 1,
      explanation: "Correct: (b). The strainer blocks debris that would clog the drain. (a) Strainers do not affect pressure. (c) Venting is a sanitary system function. (d) Rainfall is measured by weather data, not by the strainer."
    },
    {
      q: "A basement floor drain that has not been used for months loses its trap seal most likely by:",
      choices: ["Siphonage from a flushing toilet", "Evaporation", "Backpressure from the stack", "Freezing"],
      answer: 1,
      explanation: "Correct: (b). An unused trap loses seal water to the air. (a) Siphonage needs a discharge event and a venting fault. (c) Backpressure needs positive drain pressure. (d) Freezing would block the drain, not evaporate the seal."
    },
    {
      q: "The permanent fix for a floor drain trap that keeps drying out is a:",
      choices: ["Larger drain pipe", "Trap seal primer valve (ASSE 1018 or ASSE 1044)", "Check valve on the building sewer", "Roof vent extension"],
      answer: 1,
      explanation: "Correct: (b). A primer valve periodically adds water to the trap. (a) Pipe size does not affect evaporation. (c) A check valve stops backflow, not evaporation. (d) A vent extension addresses frost, not dry traps."
    },
    {
      q: "An area drain in a sunken patio that cannot drain by gravity needs:",
      choices: ["A larger roof drain", "A sump with a float-controlled pump and a check valve", "A direct connection to the sanitary sewer", "A deeper trap seal only"],
      answer: 1,
      explanation: "Correct: (b). Below-grade water must be pumped up to a gravity drainage point, with a check valve to stop backflow. (a) Roof drains serve roofs, not patios. (c) Area drains go to storm drainage, never sanitary. (d) A deeper seal does not move water uphill."
    },
    {
      q: "A sump pump that cycles every few minutes pumping the same water most likely has:",
      choices: ["A failed or missing check valve on its discharge", "A trap seal that evaporated", "A vent terminal that is frost-closed", "A roof drain that is undersized"],
      answer: 0,
      explanation: "Correct: (a). Without a check valve, pumped water flows back into the pit and triggers the float again. (b) Trap seals do not affect sump pumps. (c) Frost closure affects vents, not sumps. (d) Roof drain sizing is unrelated to sump cycling."
    }
  ],
  studyGuide: `
<h3>Module 11 — Roof, Floor & Area Drains: Quick Reference</h3>
<p><strong>Core idea:</strong> Rain and ground water are plumbing loads too — sized by area and rainfall, kept out of the sanitary sewer.</p>
<p><strong>Roof drainage (IPC Ch. 11):</strong> Sized by roof area + local 100-year, 1-hour rainfall rate. Parts: roof drain + strainer + leader + secondary (overflow) drainage.</p>
<p><strong>Storm vs. sanitary:</strong> Storm water NEVER connects to the sanitary sewer.</p>
<p><strong>Floor drain:</strong> Trapped fixture at the floor's low point. Seal evaporates when unused — fix with water or a trap primer (ASSE 1018/1044).</p>
<p><strong>Area drain:</strong> Collects surface water → storm drainage. Below grade → sump + float pump + check valve on the discharge.</p>
<p><strong>Watch out:</strong> Clogged strainer = ponded roof. Blocked scupper = no overflow. Dry floor drain = sewer smell. Missing check valve = pump cycling forever.</p>
<p><strong>Self-check:</strong> Roof drain sizing inputs? (Roof area + 100-year hourly rainfall rate.) Basement smells like sewer near a dry floor drain — fix? (Pour water in; install a trap primer.)</p>
`
};
