// HVAC 132 - Module 10: Steam Heating Fundamentals
module.exports = {
  number: 10,
  slug: "steam-heating-fundamentals",
  title: "Steam Heating Fundamentals",
  estTime: "3–4 hours",
  objectives: [
    "Explain why steam is such a potent heat carrier using latent heat (≈970 Btu/lb at atmospheric pressure).",
    "Describe the one-pipe and two-pipe steam system layouts and how condensate returns in each.",
    "Explain the jobs of radiator air vents and steam traps: what each passes, what each holds back, and what failure looks like.",
    "Explain boiler water level discipline: gauge glass, low-water cutoff, feeder, and why both low water and high water are faults.",
    "Describe near-boiler piping and the Hartford loop, and the failures they prevent.",
    "Diagnose the classic steam complaints — water hammer, uneven heating, spitting vents, short cycling — to their physical causes."
  ],
  sections: [
    {
      heading: "Why Steam: A Pound of Water Carrying 970 Btu",
      html: `
<p>Steam heating exploits the physics you met in Module 4: changing water's phase stores enormous energy. At atmospheric pressure, converting 212°F water into 212°F steam takes about <strong>970 Btu per pound</strong> — the latent heat of vaporization — with <em>no temperature change at all</em>. That energy rides the steam invisibly and is released wholesale when the steam condenses in a radiator: each pound of steam that condenses hands the room roughly its 970 Btu (plus a little sensible heat as the condensate cools). Compare hydronics, where a pound of water gives up 1 Btu per degree of cooling: a pound of steam does the work of a pound of water cooling through nearly a thousand degrees.</p>
<p>Consequences that shape the whole technology:</p>
<ul>
<li><strong>Steam moves itself.</strong> Pressure at the boiler pushes steam through the mains to the radiators; no circulator needed. It travels fast and fills large buildings easily — which is why steam owns the pre-war building stock.</li>
<li><strong>It works at low pressure.</strong> Residential steam runs at very low pressures — ounces to a couple of psi in a well-tuned system. The residential boiler's pressure relief valve is rated 15 psi, and a system routinely approaching that is a system in trouble: steam made at high pressure is a symptom (usually of venting failure), not a setting.</li>
<li><strong>Condensing is the event.</strong> Everything in steam system design serves two flows at once: steam going out, and the water it becomes coming back — sometimes in the same pipe. That two-way traffic is the source of steam's charm (simplicity) and its signature disease (water hammer).</li>
</ul>
<div class="callout"><strong>Key idea:</strong> Steam heat is latent-heat delivery: ~970 Btu per pound, released at the moment of condensation. Design and troubleshooting both reduce to managing where steam condenses — in the radiators (good) or in the mains (noise, damage, and cold rooms).</div>`
    },
    {
      heading: "One-Pipe and Two-Pipe Systems; Pitch Is Everything",
      html: `
<p><strong>One-pipe system:</strong> each radiator has a single connection. Steam enters through the supply valve; condensate returns through <em>the same pipe</em>, trickling back against the steam flow; air leaves through a vent on the radiator itself. It works because steam and a film of returning water can share a pipe — provided everything <strong>pitches</strong> (slopes) so condensate drains toward the boiler unopposed. The supply valve on a one-pipe radiator must be fully open or fully closed, never throttled halfway: a half-closed valve traps condensate in the radiator, which then has nowhere to go but out the vent (spitting) or into a hammer.</p>
<p><strong>Two-pipe system:</strong> steam arrives by a supply pipe; condensate and air leave by a separate return pipe, with a <strong>steam trap</strong> at each radiator's outlet (Section 3) keeping steam out of the returns. Returns divide into <em>dry</em> returns (above the boiler water line, carrying air and condensate in air space) and <em>wet</em> returns (below the water line, always flooded).</p>
<p><strong>Pitch discipline</strong> is the system's gravity engine: mains pitch so condensate flows <em>with</em> the design intent (toward drips/returns or back to the boiler), radiators pitch slightly toward their supply valve (one-pipe) or outlet (two-pipe), and any sagging run creates a water pocket — a dam where steam meets a wall of condensate at speed. That collision, repeated, is water hammer: the banging that defines 'bad steam' to every tenant who's lived with it. When you hear hammer, don't reach for a wrench for the radiator — trace the water: find the pocket, the failed trap letting steam blow into a wet return, or the boiler problem (Section 4) flooding the mains.</p>
<div class="callout"><strong>Key idea:</strong> One pipe = shared road for steam out and water back (valve fully open or closed, pitch toward the boiler). Two pipes = separate roads with a trap as the border guard. Every steam noise is water standing where steam wants to run — find the water first.</div>`
    },
    {
      heading: "Air Vents and Steam Traps: The Gatekeepers",
      html: `
<p>Steam cannot enter a space full of air. At startup, every radiator and main is full of air, and steam will not advance until that air leaves — <strong>air is steam's first enemy</strong>, and two devices exist to expel it while keeping steam in:</p>
<ul>
<li><strong>Radiator air vents</strong> (one-pipe systems, and mains vents on both system types): a small thermostatic valve that is open to air when cool and snaps shut when steam's heat reaches it (a heat-sensitive element expands to close the port). Air out, steam in, vent closes. Adjustable vents (with numbered settings) let you balance: slow the venting on near radiators (they'd hog steam), speed it on far ones.</li>
<li><strong>Steam traps</strong> (two-pipe radiator outlets, drip points, and equipment): automatic valves that pass <strong>condensate and air</strong> but close against <strong>steam</strong>. The common residential type is thermostatic: a bellows/diaphragm element filled with a volatile fluid expands when steam-hot (closing the trap) and contracts as cooler condensate collects (opening to drain it). Float and thermostatic (F&T) traps add a float for high-volume drip duty.</li>
</ul>
<p><strong>Failure modes are mirror images:</strong> A vent or trap <strong>failed closed</strong> (or painted shut, or clogged) traps air/condensate: the radiator stays cold or half-cold and the room complains. A trap <strong>failed open</strong> passes live steam into the return: steam in a wet return flashes condensate, pressurizes returns, blows other traps' water seals, and makes system-wide hammer and gurgling; it also wastes fuel royally — the boiler fires to make steam that heats the return piping instead of rooms. Diagnosis uses touch and sound: a trap's outlet pipe should be notably cooler than its inlet when it's holding steam; inlet and outlet equally hot suggests it's passing steam (confirm per trap test procedures).</p>
<div class="callout"><strong>Key idea:</strong> Vents and traps pass the two things that must leave (air, condensate) and block the one thing that must stay (steam). Closed-failed = cold radiator. Open-failed = steam in the returns = noise and waste everywhere.</div>`
    },
    {
      heading: "Boiler Water Level: The Gauge Glass Is Sacred",
      html: `
<p>A steam boiler is the one heating vessel in this course where water level is a live operating variable, because the boiler must simultaneously hold enough water to cover its heat-transfer surfaces and leave enough <strong>steam space</strong> above for steam to separate from the water. Watch the <strong>gauge glass</strong> — the vertical sight glass showing the true level:</p>
<ul>
<li><strong>Too low:</strong> heat-transfer surfaces uncovered can overheat and crack; if an automatic feeder then dumps cold water into a dry-hot boiler, the thermal shock and flash steam can be violent. The <strong>low-water cutoff (LWCO)</strong> exists for exactly this: it kills the burner before the level reaches danger — probe-type and float-type designs, and it must be tested/blown down per manufacturer schedule because the same sludge that threatens the boiler fouls the sensor.</li>
<li><strong>Too high:</strong> water gets carried into the mains with the steam (wet steam/carryover): radiators bang, vents spit water, heating goes uneven, and the returning flood makes the level hunt up and down. Causes: overfeeding (manual or a feeder valve leaking by), foaming/surging from dirty boiler water (oils and contamination make the surface foam — the boiler 'burps' water into the system), or condensate returning too slowly from a flooded return.</li>
</ul>
<p>Daily-craft disciplines: keep the gauge glass valves open and the glass clean enough to trust; know the boiler's normal level mark; blow down the LWCO on schedule; treat any feeder activity between cycles as a leak investigation (steam systems should need almost no makeup water — a system drinking water has a leak, a failed trap passing steam to a vented receiver, or a buried return rotting away, and every gallon added brings oxygen and minerals to eat the boiler).</p>
<div class="callout"><strong>Key idea:</strong> Level too low = uncovered metal and a cutoff that must work; level too high = water in the mains and every symptom in the book. And makeup water is a symptom, never a routine: tight steam systems sip; leaking ones gulp.</div>`
    },
    {
      heading: "Near-Boiler Piping and the Hartford Loop",
      html: `
<p>The piping immediately around a steam boiler is not plumbing convenience — it is part of the machine, and bad near-boiler piping ruins boilers that are themselves perfectly good:</p>
<ul>
<li><strong>Steam header and risers:</strong> boiler outlets rise into a header sized and arranged so water droplets fall back before steam exits to the mains ('dry steam' is made here). Undersized or single-tapped piping on a multi-outlet boiler pulls water up with the steam — carryover manufactured at home.</li>
<li><strong>The equalizer:</strong> a pipe connecting the header down to the boiler's return, balancing pressure so return water isn't pushed away from the boiler.</li>
<li><strong>The Hartford loop:</strong> the return piping arrangement that loops up close to the boiler's water line before entering the boiler. Its purpose is pure insurance: if a wet return springs a leak, a plain return connection would let the boiler drain down to the leak; the Hartford loop's high turn means the boiler can only lose water down to the loop's top — near the normal water line — keeping the heat-transfer surfaces covered. It is a 19th-century answer (born of boiler explosions and an insurance company's requirement) that still guards every properly piped steam boiler.</li>
</ul>
<p>When you evaluate a misbehaving steam boiler, read the near-boiler piping against the manufacturer's diagram <em>before</em> condemning anything: a surprising share of 'bad boilers' — surging, carryover, hammer at startup, water-line instability — are good boilers piped in ways their makers explicitly drew against. The manufacturer's piping diagram is not a suggestion; steam is unforgiving of improvisation near the boiler because velocities and water slugs there are the system's highest.</p>
<div class="callout"><strong>Key idea:</strong> Near-boiler piping makes dry steam and guards the water line. Header/equalizer geometry prevents carryover; the Hartford loop prevents a return leak from draining the boiler dry. Compare every problem installation to the factory diagram first.</div>`
    }
  ],
  keyTerms: [
    { term: "Latent heat of vaporization", def: "The energy absorbed/released in the liquid↔vapor phase change — about 970 Btu/lb for water at atmospheric pressure (212°F)." },
    { term: "Condensate", def: "Steam that has given up its latent heat and returned to liquid water; must be drained back to the boiler." },
    { term: "One-pipe system", def: "A steam layout where each radiator shares one pipe for steam supply and condensate return; radiator air vents expel air." },
    { term: "Two-pipe system", def: "A steam layout with separate supply and return piping and a trap at each radiator outlet." },
    { term: "Steam trap", def: "An automatic valve passing condensate and air while closing against live steam; thermostatic and float types are common." },
    { term: "Air vent (steam)", def: "A thermostatic radiator/main vent that releases air when cool and closes when steam heat reaches it." },
    { term: "Water hammer", def: "The destructive banging when steam propels or meets trapped condensate slugs in piping." },
    { term: "Pitch", def: "The deliberate slope of steam piping and radiators ensuring condensate drains in the intended direction." },
    { term: "Dry return", def: "Return piping above the boiler water line, carrying air and condensate in a mostly air-filled pipe." },
    { term: "Wet return", def: "Return piping below the boiler water line, permanently flooded with water." },
    { term: "Gauge glass", def: "The sight glass displaying the boiler's true water level." },
    { term: "Low-water cutoff (LWCO)", def: "The safety control that shuts the burner down before the water level can fall to a dangerous point." },
    { term: "Water feeder", def: "A device (manual or automatic) adding makeup water to maintain boiler level." },
    { term: "Carryover (wet steam)", def: "Boiler water entrained with the steam into the mains, caused by high level, foaming, or poor near-boiler piping." },
    { term: "Hartford loop", def: "The return-piping loop rising near the boiler water line that prevents a return leak from draining the boiler below a safe level." },
    { term: "Equalizer", def: "The pipe balancing pressure between the steam header and the boiler return connection." },
    { term: "Steam header", def: "The enlarged pipe above the boiler collecting steam from the risers and feeding the mains, dropping out entrained water." },
    { term: "Surging/foaming", def: "Unstable boiler water behavior from contamination, throwing water into the steam outlet." },
    { term: "Pressuretrol", def: "The boiler pressure control that cycles the burner on steam pressure (with a differential), the steam counterpart of an aquastat." }
  ],
  video: {
    title: "How do Thermostatic Steam Traps Work | Working Principle",
    embedUrl: "https://www.youtube.com/embed/xhjZnFVeeB4",
    note: "An animated explanation of thermostatic steam traps: the temperature-sensitive element that opens for cool condensate and air but closes against live steam. Watch the open/close logic — it is exactly the gatekeeper behavior this module describes.",
    more: [
      { title: "The Battle Inside Your Boiler: Air vs Steam", url: "https://www.youtube.com/watch?v=fY8AEoUXtCQ" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A radiator must deliver 12,000 Btu/h. Using latent heat ≈ 970 Btu/lb (plus assuming the condensate also gives up about 30 Btu/lb of sensible heat cooling in the radiator, for a round 1,000 Btu/lb total), estimate how many pounds of steam per hour the radiator condenses. Then state why so little mass flow can heat so much space, in one sentence.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Mass flow = 12,000 Btu/h ÷ 1,000 Btu/lb ≈ 12 lb of steam per hour. Step 2: That is about a gallon and a half of water per hour — a trickle — doing the work of a whole radiator. Step 3: The one-sentence reason: steam carries its heat as latent heat (~970 Btu locked in every pound by the phase change), releasing it all at the moment of condensation rather than dribbling it out a degree at a time like circulating water. Step 4: Sanity anchor for the field: this is why steam piping sizes are about steam volume and condensate drainage behavior, not about the modest water mass involved.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> On a one-pipe system, a tenant has 'turned down' a too-hot radiator by half-closing its supply valve. The radiator now spits water from its vent and bangs. Explain the mechanism and the correct way to reduce that radiator's output.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Mechanism — a one-pipe radiator's single connection carries steam in and condensate out simultaneously. A half-closed valve strangles the passage: steam still gets in (it only needs a path), but returning condensate can't drain past the restriction against the incoming steam flow. Step 2: Water accumulates in the radiator until steam pressure shoves it out the only exit — the air vent (spitting) — and steam meeting the pooled water produces the banging (mini hammer inside the radiator). Step 3: Correct control: on one-pipe steam, the supply valve is fully open or fully closed, period. To reduce output, slow the radiator's <em>air venting</em> (an adjustable vent on a lower setting vents air more slowly, so steam fills the radiator more slowly and partially), or address the system balance (main venting, pressure). Step 4: Fully reopen the valve, replace the water-damaged vent if it now leaks, and confirm pitch toward the valve so condensate drains freely.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A two-pipe building has system-wide hammer in the returns and several radiators gurgling, starting after one radiator's trap failed open. Explain how one trap can poison a whole return system.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: A failed-open trap passes live steam continuously into the return piping — a space designed for water and air near atmospheric conditions. Step 2: Steam in the returns raises return pressure and temperature; at other radiators, trap outlets now face pressurized steam instead of a low-pressure return, so their condensate can't discharge — radiators waterlog (gurgle, heat poorly). Step 3: In wet returns, live steam meeting standing condensate collapses violently — steam condensing instantly creates vacuum pockets that slam water together: return hammer, system-wide, far from the failed trap. Step 4: The boiler also short-cycles and wastes fuel making steam that heats the return pipes. Step 5: Fix: find the passing trap(s) (temperature survey: outlet as hot as inlet), repair/replace, and re-survey — experienced steam hands assume traps fail in cohorts of similar age and check the rest while the system is open.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> The automatic feeder on a steam boiler has added water four times this month; last season it added none. The gauge glass also shows the level bouncing during firing. Give the investigation list, ordered, and explain why 'the feeder is doing its job' is not an acceptable conclusion.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Why it's unacceptable: a tight steam system loses almost no water; recurring makeup = water leaving somewhere, and every added gallon imports oxygen and minerals that corrode the boiler. The feeder is masking a leak while feeding the corrosion that makes more leaks. Step 2: Investigation in order: (a) visible leaks — valve packings, gauge glass fittings, radiator vents spitting, union weeps while hot; (b) returns — inspect exposed wet returns for rust-through; ask about hammer/wet spots suggesting a buried return leak; (c) traps passing steam to a vented condensate receiver (steam loss up the vent); (d) boiler itself — a leak above the water line shows as steam in the flue/chimney; below the line, as unexplained level loss with no puddle (check for water in the flue passages during inspection). Step 3: The bouncing level adds a second thread: surging from dirty/foaming boiler water or carryover — skim/clean the boiler water per manufacturer procedure and verify near-boiler piping. Step 4: Close with a feeder log: after repairs, the feeder should go quiet; its silence is the verification.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> Explain the Hartford loop's protection scenario step by step: a wet return develops a major leak at 2 a.m. Compare outcomes with and without the loop.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Without the loop (return connected straight into the boiler's low tapping): the leak is effectively a hole in the bottom of the boiler system; gravity drains the boiler through the return until the boiler's water reaches the leak's level — potentially emptying the boiler entirely. The LWCO should cut the burner, but if the leak is fast or the cutoff is fouled, burners can fire a dry boiler: overheated sections, cracked castings, and a catastrophic failure if water is then added to red-hot metal. Step 2: With the Hartford loop: the return rises to near the water line before turning into the boiler. The leak can only drain water that can flow <em>up and over</em> that high turn from the boiler side — which is essentially none below the loop's top: the boiler's water level can fall no lower than the loop height, keeping heat-transfer surfaces covered. Step 3: The system still loses its return water and needs repair before normal operation, and the LWCO remains a required second layer — but the loop converts an equipment-destroying, potentially dangerous event into a plumbing repair. That's why it's still code-expected practice a century later.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> Far radiators on a one-pipe system are cold while near radiators overheat, and the boiler pressure climbs higher than it should before the pressuretrol cuts out. Assemble the single most likely root cause and the fix sequence.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Think about air, not steam: steam cannot enter radiators until the <em>air in the mains</em> leaves, and main air leaves through the <strong>main vents</strong> at the ends of the mains. If main vents are failed/clogged/undersized, air in the mains moves at a crawl. Step 2: The boiler keeps making steam against the air-locked mains; pressure climbs (pressuretrol rides high) while steam distribution stalls — near radiators, whose air escapes through their own vents into a main already pressurized nearby, heat; far radiators wait behind a plug of air that has nowhere to go. Step 3: Fix sequence: inspect/replace main vents with correctly sized ones (mains need generous venting — they're the system's lungs); verify radiator vents work; confirm mains pitch so condensate isn't damming the air's path; then set the pressuretrol to the low operating range proper for the system (steam distributes best at the lowest pressure that reaches the ends — pressure is a failure-compensator, not a cure). Step 4: Verify: far radiators hot on the next cycle at low, calm pressure, with quiet returns.</p>"
    }
  ],
  quiz: [
    {
      q: "The main reason a pound of steam delivers so much heat to a radiator is:",
      choices: ["Steam is much hotter than hot water", "Condensing releases the latent heat of vaporization — about 970 Btu per pound — at the radiator", "Steam travels faster than water", "Steam systems use larger radiators"],
      answer: 1,
      explanation: "Correct: (b) The phase change is the payload: ~970 Btu/lb stored at boiling, released on condensation, at constant temperature. (a) Low-pressure steam isn't dramatically hotter than boiler water limits — and hot water at the same temperature carries only ~1 Btu/lb per degree of cooling. (c) Speed affects distribution, not heat content per pound. (d) Radiator size follows the load, not the medium's energy density."
    },
    {
      q: "On a one-pipe steam radiator, the supply valve should be:",
      choices: ["Throttled to control room temperature", "Fully open or fully closed — throttling traps condensate and causes spitting and banging", "Half open in mild weather", "Removed and replaced with a trap"],
      answer: 1,
      explanation: "Correct: (b) The single pipe carries steam in and condensate out; a half-closed valve blocks the condensate's return path, water pools, and the vent spits while steam hammers the pool. Output is trimmed with the air vent setting instead. (a) and (c) describe exactly the fault in the question's stem family. (d) Traps belong to two-pipe outlets; a one-pipe radiator has no separate outlet to trap."
    },
    {
      q: "A steam trap's correct behavior is to pass ______ and block ______.",
      choices: ["Steam; condensate", "Condensate and air; live steam", "Air only; water", "Water; air"],
      answer: 1,
      explanation: "Correct: (b) Traps are border guards: condensate and air cross into the return; live steam is stopped at the seat. (a) is the exact inversion — that behavior (its failure-open mode) floods returns with steam. (c) A trap that passed no water would waterlog its radiator in one cycle. (d) Blocking air would air-bind the radiator the way a failed vent does."
    },
    {
      q: "The Hartford loop protects the boiler by:",
      choices: ["Increasing steam pressure at startup", "Preventing a return-line leak from draining the boiler below a safe water level", "Filtering sediment from returns", "Ventilating the boiler room"],
      answer: 1,
      explanation: "Correct: (b) The loop's high turn near the water line means return-side leaks can't siphon the boiler dry — water can only leave down to the loop's height. (a) The loop is passive piping; it doesn't raise pressure. (c) Sediment control belongs to blowdown and water treatment. (d) It has no ventilation function whatever."
    },
    {
      q: "A low-water cutoff's job is to:",
      choices: ["Add water when the level drops", "Shut the burner off before the water level falls to a dangerous point", "Keep the level at exactly the midpoint at all times", "Vent air from the boiler"],
      answer: 1,
      explanation: "Correct: (b) The LWCO is a safety limit — it stops firing when level approaches the danger line, protecting covered-surface metal from overheating. (a) Adding water is the feeder's job; the cutoff protects when feeding fails or leaks win. (c) Level within a working band is normal (it moves with steaming rate); the cutoff acts at the boundary, not by continuous regulation. (d) Air removal is the vents' and (on hydronics) separators' role."
    },
    {
      q: "Far radiators cold, near radiators hot, and boiler pressure climbing on a one-pipe system most likely indicate:",
      choices: ["An oversized boiler", "Main air vents failed or undersized — air can't leave the mains, so steam can't advance and pressure builds instead", "Traps failed open", "The pressuretrol needs a higher setting"],
      answer: 1,
      explanation: "Correct: (b) Distribution stalls behind unvented air; pressure rise is the boiler pushing against the plug — venting capacity is the fix. (a) Boiler size doesn't create a near/far pattern with pressure climb. (c) One-pipe radiators have no traps (that's two-pipe equipment), and failed-open traps make return chaos, not this clean air-bound picture. (d) Raising the pressuretrol setting treats the compensation as the cure — steam should distribute at low pressure once air can leave."
    },
    {
      q: "Water hammer in steam piping is best understood as:",
      choices: ["The burner firing too loudly", "Condensate slugs being propelled by steam or steam pockets collapsing in standing water", "Air expanding in the vents", "The circulator cavitating"],
      answer: 1,
      explanation: "Correct: (b) Hammer is a water-management failure: pockets from bad pitch, flooded returns (failed traps), or carryover give steam something liquid to slam. (a) Burner noise is combustion roar — a different sound with different causes. (c) Venting air is a hiss, not a hammer. (d) Steam systems have no circulator to cavitate — that's a hydronic failure transplanted to the wrong system."
    },
    {
      q: "A steam system needing frequent automatic-feeder makeup water is telling you:",
      choices: ["The feeder is well maintained", "There is a leak or steam loss somewhere — tight steam systems use almost no makeup water", "The boiler is oversized", "The water is too pure"],
      answer: 1,
      explanation: "Correct: (b) Makeup volume is a leak meter: returns, traps passing to vented receivers, valve packings, or the boiler itself. Every added gallon also imports oxygen and minerals, accelerating corrosion. (a) A working feeder is good; needing it often is the alarm, not the reassurance. (c) Oversizing causes short cycling, not water loss. (d) Feedwater purity problems cause foaming/scale issues, not consumption — the water is leaving physically."
    }
  ],
  studyGuide: `
<h3>Module 10 — Steam Heating Fundamentals: Quick Reference</h3>
<p><strong>Physics:</strong> latent heat ≈ 970 Btu/lb at 212°F/atmospheric — released on condensation. Steam self-distributes at low pressure (residential relief valve: 15 psi; operating pressure should stay low — high running pressure = venting failure symptom).</p>
<p><strong>Layouts:</strong> one-pipe (shared pipe, radiator vents, valve FULLY open/closed only, pitch to boiler) • two-pipe (traps at outlets; dry returns above the water line, wet below).</p>
<p><strong>Gatekeepers:</strong> vents pass air, close on steam • traps pass condensate + air, close on steam. Failed closed → cold radiator. Failed open (trap) → steam in returns → system-wide hammer, waterlogged radiators, wasted fuel.</p>
<p><strong>Water level:</strong> gauge glass is truth. Low → LWCO must cut the burner (test/blow down on schedule). High → carryover: banging, spitting, hunting level. Foaming/dirty water → surging. Frequent feeder action = leak hunt, not routine.</p>
<p><strong>Near-boiler:</strong> header/equalizer make dry steam; <strong>Hartford loop</strong> stops a return leak from draining the boiler. Always compare problem installs to the factory piping diagram.</p>
<p><strong>Noises:</strong> hammer = water where steam runs — find the pocket (pitch), the passing trap, or the carryover source.</p>
`
};
