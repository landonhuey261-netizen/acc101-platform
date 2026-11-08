// Plumbing 202 - Module 6: Ejectors, Lift Stations & Alarm Systems
module.exports = {
  number: 6,
  slug: "ejectors-lift-stations-alarm-systems",
  title: "Ejectors, Lift Stations & Alarm Systems",
  estTime: "3–4 hours",
  objectives: [
    "Explain what a sewage ejector is and how it differs from a sump pump.",
    "Describe a lift station and say when a building needs one instead of a single ejector.",
    "Name the controls in a lift station: floats, alternator, and alarm.",
    "Explain how alarm systems protect a building when a pump fails.",
    "Describe the maintenance and testing a lift station needs."
  ],
  sections: [
    {
      heading: "The Sewage Ejector: A Pump in a Sealed Basin",
      html: `
<p>A <strong>sewage ejector</strong> is a sewage pump in a sealed basin, installed where fixtures sit below the sewer line — a basement bathroom, a laundry room, a below-grade apartment. The basin collects the wastewater by gravity, the float turns the pump on, and the pump lifts the sewage up to the building drain. The basin is sealed with a gasketed cover and vented to the building's vent system, because it holds sewage and sewer gas. The discharge has a check valve and a gate valve, and a union above the check valve so the pump can be lifted out for service.</p>
<p>An ejector differs from a sump pump in three ways that matter: it is built to pass solids (a 2-inch solids-handling impeller is typical for a sewage ejector), its basin is sealed and vented, and its discharge goes to the sanitary sewer, never to a storm drain or the outside. A sump pump put on a sewage job will clog on the first solid it meets, and a sewage ejector put on a groundwater job will waste money and overload the sewer with clean water.</p>
<p>The ejector's most common failure is a clog — a solid the pump cannot pass, or a rag wrapped around the impeller. The fix is to lift the pump out through the union and clear it, which is why the union and the isolation valve are not optional extras. An ejector that cannot be serviced without cutting pipe is an ejector that will be neglected.</p>
<div class="callout"><strong>Key idea:</strong> A sewage ejector is a solids-handling pump in a sealed, vented basin, discharging to the sanitary sewer. Its service parts — union, isolation valve, check valve — are what make it maintainable.</div>`
    },
    {
      heading: "Lift Stations: When One Ejector Is Not Enough",
      html: `
<p>A <strong>lift station</strong> is a larger version of the same idea: a buried wet well (or a large basin) with one or two pumps that lift wastewater from a whole building — or a whole development — up to a sewer that sits higher than the building. A single ejector serves a few fixtures in a basement; a lift station serves a building, a subdivision, or a commercial site whose sewer connection is uphill. The principles are the same — gravity collects, a float starts the pump, the pump lifts — but the scale, the controls, and the consequences of failure are all larger.</p>
<p>Most lift stations are <strong>duplex</strong>: two pumps, with a control panel that <strong>alternates</strong> them so each runs about half the time (which doubles the life of both) and starts the second pump if the first cannot keep up or fails. The alternator is a small control that swaps the lead pump after each cycle; without it, one pump does all the work and wears out while the other sits idle. The control panel also carries the alarm: a high-water float that sounds an alarm and, in many installations, sends a signal to a monitoring service or a building management system.</p>
<p>Lift stations are usually the responsibility of a utility or a property owner, not a single plumber, but a plumber must understand them because the building's drainage ends at the lift station's wet well, and a failed lift station backs sewage into every building it serves. Knowing the controls — floats, alternator, alarm — is what lets a plumber diagnose whether the problem is in the building or in the station.</p>
<div class="callout"><strong>Key idea:</strong> A lift station lifts a whole building's wastewater to a higher sewer. Duplex pumps with an alternator share the work; the second pump is the backup.</div>`
    },
    {
      heading: "Floats, Alternators, and the Control Panel",
      html: `
<p>A lift station's controls are a stack of floats, each at a different level, each with a job. The <strong>off float</strong> (lowest) stops the pumps. The <strong>lead float</strong> starts the first pump. The <strong>lag float</strong> (higher) starts the second pump if the water keeps rising — either because the first pump cannot keep up or because it has failed. The <strong>alarm float</strong> (highest) sounds the high-water alarm. Four floats, four levels, four jobs — and if any one of them is stuck, tangled, or set at the wrong height, the station misbehaves in a way that looks like a pump failure but is not.</p>
<p>The <strong>alternator</strong> sits in the control panel and swaps the lead pump after each cycle, so the two pumps share the work. The panel also carries the motor starters, the overload protection that stops a pump from burning out if its impeller jams, and the alarm circuit. A plumber who opens a control panel must know their limits: the panel is electrical work, and the plumbing diagnosis ends where the electrical work begins. The plumber's job is to report what the floats and the pump are doing, not to rewire the panel.</p>
<p>Float settings are checked and recorded at every service: the distance from the off float to the lead float sets the cycle length, and the distance from the lead float to the lag float sets how much margin the station has before the second pump is needed. A station whose floats have drifted is a station that short-cycles, or a station whose backup pump never starts.</p>
<div class="callout"><strong>Key idea:</strong> Four floats, four jobs: off, lead, lag, alarm. The alternator shares the work between the pumps. The panel is electrical work — a plumber diagnoses, then refers.</div>`
    },
    {
      heading: "Alarms: The Last Line of Defense",
      html: `
<p>An <strong>alarm system</strong> is what stands between a pump failure and a flooded building. The simplest alarm is a high-water float connected to a buzzer or a light in the building — it sounds when the water rises past the normal pump-on level, which means the pump has failed or cannot keep up. A better alarm adds a remote signal: a dialer, a text message, or a connection to a building management system, so the alarm reaches someone even when the building is empty.</p>
<p>Alarms need their own power and their own test. A battery-backed alarm that is never tested is a decoration: the battery dies, the float sticks, and the first sign of failure is water on the floor. Testing an alarm is a one-minute job — lift the alarm float by hand and confirm the buzzer sounds — and it belongs on every service visit. A lift station's alarm is tested the same way, by lifting the alarm float and confirming the panel responds.</p>
<p>The alarm's job is not to fix the pump; it is to buy time. A high-water alarm that sounds at 2 a.m. gives the owner hours to call a plumber before the sewage reaches the floor. A building with no alarm gives no warning at all, and the first sign of a failed pump is the flood. That is why alarms are fitted wherever a pump failure would cause damage, and why their testing is part of the maintenance, not an afterthought.</p>
<div class="callout"><strong>Key idea:</strong> An alarm buys time: it warns before the flood. Test it by lifting the float — an untested alarm is a decoration.</div>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>A sewage ejector is a solids-handling pump in a sealed, vented basin, discharging to the sanitary sewer; its union, isolation valve, and check valve make it serviceable.</li>
<li>A lift station lifts a whole building's wastewater to a higher sewer; most are duplex, with an alternator sharing the work.</li>
<li>Four floats, four jobs: off, lead, lag, alarm — each at its own level, each checked at every service.</li>
<li>The control panel carries the alternator, motor starters, overload protection, and alarm circuit; the panel is electrical work.</li>
<li>A high-water alarm buys time before a flood; test it by lifting the float, and make sure it can reach someone when the building is empty.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Treating a lift station problem as a pump problem when a float is the cause. A stuck or mis-set float makes a good pump look failed — check the floats before replacing the pump.</div>
<div class="callout"><strong>Common mistake:</strong> Installing a single pump where a duplex station is needed. A building whose only pump fails has no backup and no warning — a duplex station and an alarm are the insurance.</div>
<p><strong>Ready-to-Work link:</strong> The next module moves from moving wastewater to treating it — grease interceptors and special waste — and the course lab applies pump sizing to a real sump installation.</p>`
    }
  ],
  keyTerms: [
    { term: "Sewage ejector", def: "A solids-handling pump in a sealed, vented basin that lifts wastewater from fixtures below the sewer line up to the building drain." },
    { term: "Lift station", def: "A buried wet well with one or two pumps that lifts a whole building's (or development's) wastewater up to a higher sewer." },
    { term: "Wet well", def: "The buried chamber of a lift station that collects wastewater by gravity before the pumps lift it." },
    { term: "Duplex", def: "Two pumps in one station, the second as a standby that starts if the first fails or cannot keep up." },
    { term: "Alternator", def: "A control that swaps the lead pump after each cycle so two pumps share the work equally." },
    { term: "Lead float", def: "The float that starts the first (lead) pump when the water reaches its level." },
    { term: "Lag float", def: "The higher float that starts the second pump if the water keeps rising." },
    { term: "Alarm float", def: "The highest float, which sounds the high-water alarm when the water reaches it." },
    { term: "Off float", def: "The lowest float, which stops the pumps when the water falls to its level." },
    { term: "Control panel", def: "The electrical panel of a lift station, carrying the alternator, motor starters, overload protection, and alarm circuit." },
    { term: "High-water alarm", def: "An audible (and often remote) alarm that sounds when water rises past the normal pump-on level." },
    { term: "Solids-handling impeller", def: "A pump impeller built to pass solids (typically 2-inch) without clogging." },
    { term: "Overload protection", def: "The electrical protection that stops a pump motor from burning out if its impeller jams." }
  ],
  video: {
    title: "How SFA Saniflo Macerator Pumps Work | Install a Bathroom Anywhere",
    embedUrl: "https://www.youtube.com/embed/tNhLL9-1O4I",
    note: "A macerator pump — a different answer to the same problem as an ejector: it grinds waste and pumps it to the drain so a bathroom can go anywhere, even below the sewer. Watch it, then compare it with a sewage ejector: when would you use a macerator, and when an ejector?",
    more: [
      { title: "Easily Pump Waste Upwards With Grundfos SOLOLIFT2 Lifting Stations | Toolstation", url: "https://www.youtube.com/watch?v=1rhiO_RZZEY" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A basement bathroom is below the sewer line. What equipment is needed, and what are its three defining features?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: A sewage ejector — a solids-handling pump in a sealed basin. Step 2: Its three defining features: it passes solids (a 2-inch solids-handling impeller), its basin is sealed and vented (because it holds sewage), and its discharge goes to the sanitary sewer. Step 3: The discharge also needs a check valve, a gate valve, and a union for service.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A lift station has two pumps but no alternator. One pump runs every cycle and the other never runs. What is wrong, and what is the fix?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Without an alternator, the lead pump does all the work and wears out while the standby sits idle — and the standby's seals and bearings deteriorate from disuse. Step 2: The fix is to fit an alternator in the control panel so the lead pump swaps after each cycle. Step 3: Both pumps should then be tested to confirm the standby still works after sitting idle.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A lift station's lag float is set at the same height as the lead float. What will happen?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Both pumps will start at the same time on every cycle, so the station never runs on one pump. Step 2: The pumps will short-cycle and wear out faster, and the station loses its staged response — there is no second stage for a high inflow or a failed pump. Step 3: The fix is to set the lag float higher than the lead float, with a proper margin between them.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A building's ejector pump fails at 2 a.m. and the basement floods before anyone notices. What single device would have prevented the flood, and how is it tested?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: A high-water alarm — a float and a buzzer (ideally with a remote signal) that sounds when the water rises past the normal pump-on level. Step 2: It buys hours of warning before the sewage reaches the floor. Step 3: It is tested by lifting the alarm float by hand and confirming the buzzer sounds — a one-minute test that belongs on every service visit.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A plumber is asked to rewire a lift station's control panel because the alternator is not switching. What should they do?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The control panel is electrical work — the plumbing diagnosis ends where the electrical work begins. Step 2: The plumber should diagnose the plumbing side (floats, pump, impeller) and report the findings, then refer the panel work to a qualified electrician. Step 3: Rewiring a panel without the qualification risks the panel, the pumps, and the plumber.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A lift station serves a subdivision. Its wet well is full and sewage is backing into the lowest homes. The pumps are not running. Name two possible causes and how to tell them apart.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Possible cause one — a pump failure (jammed impeller, burned-out motor): the overload protection will have tripped, and the pump will not run when started manually. Step 2: Possible cause two — a float failure (stuck or tangled lead float): the pump will run if started manually or if the float is lifted. Step 3: The test is to lift the lead float by hand: if the pump starts, the float is the problem; if it does not, the pump or the panel is.</p>"
    }
  ],
  quiz: [
    {
      q: "A sewage ejector differs from a sump pump in that it:",
      choices: ["Moves clean water", "Passes solids, sits in a sealed vented basin, and discharges to the sanitary sewer", "Has no float switch", "Discharges to the outside"],
      answer: 1,
      explanation: "Correct: (b). An ejector passes solids, is sealed and vented, and discharges to the sanitary sewer. (a) Moving clean water is a sump pump's job. (c) An ejector has a float switch. (d) Discharging outside is a sump pump's job."
    },
    {
      q: "A lift station is needed when:",
      choices: ["A single fixture is below the sewer", "A whole building's wastewater must be lifted to a sewer that sits higher", "A basement is dry", "A sump pump fails"],
      answer: 1,
      explanation: "Correct: (b). A lift station serves a whole building or development whose sewer is uphill. (a) A single fixture needs an ejector. (c) A dry basement needs nothing. (d) A failed sump pump is replaced, not upgraded to a lift station."
    },
    {
      q: "The alternator's job is to:",
      choices: ["Sound the alarm", "Swap the lead pump after each cycle so two pumps share the work", "Start the alarm float", "Vent the wet well"],
      answer: 1,
      explanation: "Correct: (b). The alternator alternates the lead pump. (a) The alarm float sounds the alarm. (c) The alarm float is a float, not a control. (d) Venting is done by the vent pipe."
    },
    {
      q: "The lag float:",
      choices: ["Stops the pumps", "Starts the first pump", "Starts the second pump if the water keeps rising", "Sounds the alarm"],
      answer: 2,
      explanation: "Correct: (c). The lag float starts the second pump. (a) The off float stops the pumps. (b) The lead float starts the first pump. (d) The alarm float sounds the alarm."
    },
    {
      q: "A high-water alarm is tested by:",
      choices: ["Turning off the power", "Lifting the alarm float by hand and confirming the buzzer sounds", "Running the pump", "Opening the check valve"],
      answer: 1,
      explanation: "Correct: (b). Lift the float and listen for the buzzer. (a) Turning off the power disables the alarm. (c) Running the pump does not test the alarm. (d) The check valve is not part of the alarm."
    },
    {
      q: "The control panel of a lift station is:",
      choices: ["Plumbing work any plumber can rewire", "Electrical work — a plumber diagnoses the plumbing side and refers the panel", "Optional equipment", "Part of the vent system"],
      answer: 1,
      explanation: "Correct: (b). The panel is electrical work. (a) Rewiring without qualification is unsafe. (c) The panel is essential, not optional. (d) The vent system is separate."
    },
    {
      q: "If a lift station's pumps do not run and lifting the lead float by hand starts a pump, the fault is most likely:",
      choices: ["A burned-out motor", "A stuck or tangled float", "A jammed impeller", "A tripped overload"],
      answer: 1,
      explanation: "Correct: (b). If the pump runs when the float is lifted, the pump and panel work — the float is the fault. (a) A burned-out motor would not run. (c) A jammed impeller would trip the overload. (d) A tripped overload would prevent the pump from running."
    },
    {
      q: "A sewage ejector's discharge must go to:",
      choices: ["The storm drain", "The outside, away from the building", "The sanitary sewer", "The sump pit"],
      answer: 2,
      explanation: "Correct: (c). Sewage goes to the sanitary sewer. (a) The storm drain is for rainwater. (b) The outside is for sump pump discharge. (d) The sump pit holds groundwater, not sewage."
    }
  ],
  studyGuide: `
<h3>Module 6 — Ejectors, Lift Stations & Alarms: Quick Reference</h3>
<p><strong>Sewage ejector:</strong> Solids-handling pump in a sealed, vented basin · Discharge to the sanitary sewer · Union + isolation valve + check valve for service.</p>
<p><strong>Lift station:</strong> Wet well + duplex pumps lifting a whole building's wastewater to a higher sewer · Alternator shares the work.</p>
<p><strong>Four floats:</strong> Off (lowest) · Lead (starts pump 1) · Lag (starts pump 2) · Alarm (highest).</p>
<p><strong>Control panel:</strong> Alternator, motor starters, overload protection, alarm circuit — electrical work, refer it.</p>
<p><strong>Alarm:</strong> Buys time before a flood · Test by lifting the float · Remote signal so it reaches someone when the building is empty.</p>
<p><strong>Self-check:</strong> A lift station's pumps will not run. What is the first test, and what does each result mean?</p>
`
};
