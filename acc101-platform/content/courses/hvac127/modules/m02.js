// HVAC 127 - Module 2: Control Theory Essentials
module.exports = {
  number: 2,
  slug: "control-theory-essentials",
  title: "Control Theory Essentials",
  estTime: "3–4 hours",
  objectives: [
    "Contrast open-loop and closed-loop control and give a field example of each.",
    "Explain on-off control, differential (deadband), and why some differential is necessary.",
    "Describe modulating control and the proportional band, and predict output at a given error.",
    "Define the P, I, and D actions of a PID loop in plain language and state what each contributes.",
    "Recognize hunting and short cycling, state their usual causes, and name the first adjustments to try."
  ],
  sections: [
    {
      heading: "Open Loop vs. Closed Loop",
      html: `
<p>An <strong>open-loop</strong> control acts without checking the result. A timer that runs an exhaust fan for 30 minutes after a switch closes is open-loop: it never measures whether the room actually cleared. A lawn sprinkler on a clock waters in the rain because nothing reports back. Open-loop control is cheap and simple, and it is legitimate where the load is predictable and the cost of being wrong is low — but it cannot correct for disturbances it cannot see.</p>
<p>A <strong>closed-loop</strong> control measures the result and feeds it back, like the thermostat loops of Module 1. Feedback is what lets a system hold 74°F on a mild Tuesday and a brutal Friday with the same hardware: the loop sees the error grow and works harder. Nearly all comfort and process control is closed-loop, and the rest of this module is about <em>how</em> a closed loop responds — because two systems with identical parts can behave completely differently depending on the control action chosen.</p>
<div class="callout"><strong>Key idea:</strong> The test question for open vs. closed is one sentence: <em>Does the controller know what happened?</em> If no measurement returns, the loop is open no matter how sophisticated the timer or schedule looks.</div>
<p>Some systems mix the two. A boiler may fire on a timer (open) but shut down on a temperature limit (closed-loop safety). Distinguish the <em>control</em> loop from <em>safety</em> limits: safeties are closed-loop by design and sit outside the normal control conversation, which is why Module 5 treats safety chains separately.</p>`
    },
    {
      heading: "On-Off Control and Differential",
      html: `
<p>The simplest closed-loop action is <strong>on-off (two-position) control</strong>: the output is fully on or fully off, nothing between. Your home thermostat works this way — the furnace is either firing or silent. On-off control never holds the variable exactly at setpoint; the variable swings above and below it, and the size of that swing is set by the <strong>differential</strong>, also called the <strong>deadband</strong> or switch differential.</p>
<div class="formula">Heating example — setpoint 70°F, differential 2°F: heat cuts in at 69°F, cuts out at 71°F (swing centered on setpoint)</div>
<p>Why accept a swing at all? Because a zero-differential control would switch the instant the variable crossed setpoint — hundreds of times an hour — destroying contactors, igniters, and compressors. Differential is the deliberate gap between cut-in and cut-out that buys equipment life. Too little differential and the equipment <strong>short cycles</strong>; too much and occupants feel the swing and complain. Mechanical thermostats built this gap with a heat anticipator; electronic stats let you set it directly, often as "cycles per hour" or a swing setting.</p>
<div class="callout"><strong>Key idea:</strong> On-off control trades precision for simplicity and equipment protection. The variable always oscillates; good setup means choosing an oscillation the equipment can survive and the occupants cannot feel.</div>
<p><strong>Worked example:</strong> A cooler stat set at 38°F with a 4°F differential cuts in at 40°F and out at 36°F. Product that cannot tolerate 40°F is a specification problem, not necessarily a control failure — the control is doing exactly what its differential tells it. Reducing the differential to 2°F (in at 39, out at 37) tightens the swing but doubles the starts; check that the equipment tolerates the added cycling before you "fix" the complaint.</p>`
    },
    {
      heading: "Modulating Control and the Proportional Band",
      html: `
<p><strong>Modulating control</strong> positions the controlled device anywhere between fully closed and fully open in proportion to the error. A modulating valve at 40% open delivers roughly 40%-ish of its capacity; as the room approaches setpoint the valve eases off instead of slamming shut, so the variable settles instead of swinging. This is how chilled-water coils, steam valves, economizer dampers, and VFD-driven fans are normally controlled.</p>
<p>The key adjustment is the <strong>proportional band</strong> (also expressed as gain): the change in the controlled variable that swings the output through its full 0–100% range. Work the math once and it stays forever:</p>
<div class="formula">Output % = (Error ÷ Proportional band) × 100 — a cooling valve, band 4°F, setpoint 74°F, room 75°F: error 1°F → output 25% open</div>
<p>Raise the room to 76°F (error 2°F) and the same loop drives the valve to 50%; at 78°F it is fully open. A <em>narrow</em> band (say 1°F) makes the loop aggressive — small errors command big actions, risking instability. A <em>wide</em> band (say 10°F) is gentle and stable but lazy: the room can sit 3–4°F off setpoint with the valve barely half open. Pure proportional control also leaves a small steady <strong>offset</strong>: because output is proportional to error, some error must remain to hold the valve at the position the load requires. Eliminating that leftover offset is the integral action's job, next section.</p>
<div class="callout"><strong>Key idea:</strong> Proportional band is the loop's temperament dial. Narrow = responsive but twitchy; wide = calm but with droop. Every PID discussion starts here.</div>`
    },
    {
      heading: "PID: Proportional, Integral, Derivative",
      html: `
<p>Most modern controllers — unit boards and DDC alike — offer <strong>PID control</strong>, three actions blended into one output:</p>
<ul>
<li><strong>P — Proportional:</strong> reacts to the <em>present</em> error. Bigger error, bigger output, per the band math above. Fast, simple, leaves offset.</li>
<li><strong>I — Integral:</strong> reacts to the <em>accumulated</em> error over time. While any error persists, integral keeps nudging the output in the correcting direction until the offset is gone. It is the patient action that finishes the job P started — and, wound up too strong, the action that causes slow rolling oscillations.</li>
<li><strong>D — Derivative:</strong> reacts to the <em>rate of change</em> of the variable. If temperature is plunging toward setpoint, D eases the output early to prevent overshoot. It anticipates — and because it amplifies sensor noise, many HVAC loops run PI only and leave D at zero.</li>
</ul>
<p><strong>Worked example:</strong> A discharge-air loop holds 55°F. A door opens and the sensor dips to 53°F. P responds immediately, opening the cooling valve further in proportion to the 2°F error. The error persists at 0.5°F for minutes, so I keeps adding small increments until the valve is open enough that the offset disappears. Meanwhile D, watching the temperature fall quickly when the door first opened, had already stiffened the response — then softened it as the temperature leveled, preventing the overshoot a P-only loop would show. Three time horizons: now (P), so-far (I), and heading (D).</p>
<div class="callout"><strong>Key idea:</strong> Tune in order and gently. Most HVAC loops are stable with sensible P settings and modest I; aggressive integral is the most common self-inflicted cause of hunting in the field. When in doubt, slow the loop down.</div>`
    },
    {
      heading: "Hunting, Cycling, and Stability",
      html: `
<p>An unstable loop <strong>hunts</strong>: the variable and the output swing in a repeating wave that never settles — valve stroking open-closed-open, discharge temperature seesawing. Hunting wastes energy, wears actuators, and usually means the loop is correcting too hard or too late. The usual suspects:</p>
<ul>
<li><strong>Proportional band too narrow / gain too high</strong> for the process speed.</li>
<li><strong>Integral too fast</strong>, piling corrections on top of corrections not yet felt.</li>
<li><strong>Sensor placement</strong> — a discharge sensor too close to the coil sees instant changes and overcorrects; a space sensor in a sunbeam or draft chases ghosts.</li>
<li><strong>Oversized equipment or valve</strong> — a valve twice too big delivers a flood for a small stroke, making fine control impossible.</li>
<li><strong>Mechanical slack</strong> — loose damper linkage adds dead zone the loop must cross before anything moves, then everything moves at once.</li>
</ul>
<p><strong>Short cycling</strong> is the on-off cousin: rapid start-stop from too little differential, an oversized unit, or a sensor exposed to its own output (a stat in the supply airstream). Both problems are diagnosed the same way — <em>watch the loop over time</em>. A single snapshot reading cannot show oscillation; a trend or ten patient minutes with a stopwatch can. Module 11 returns to trending as a DDC tool; the habit starts here.</p>
<div class="callout"><strong>Common mistake:</strong> Tuning a loop to fix a mechanical fault. No PID setting cures a sticking valve, a sloppy linkage, or a sensor dangling out of its well. Verify the hardware moves smoothly through its full stroke before touching a single tuning parameter.</div>`
    }
  ],
  keyTerms: [
    { term: "Open-loop control", def: "Control action without feedback; the controller never measures the result of its action." },
    { term: "Closed-loop control", def: "Control that measures the controlled variable and feeds the result back to correct the action." },
    { term: "Feedback", def: "The return signal reporting the controlled variable to the controller." },
    { term: "On-off control", def: "Two-position control: the output is fully on or fully off, with nothing in between." },
    { term: "Differential (deadband)", def: "The gap between cut-in and cut-out values in on-off control; prevents rapid switching." },
    { term: "Cut-in / cut-out", def: "The values at which an on-off device starts and stops its controlled equipment." },
    { term: "Short cycling", def: "Rapid, frequent starting and stopping of equipment, usually from too little differential or oversizing." },
    { term: "Modulating control", def: "Control that positions the controlled device proportionally anywhere between fully closed and fully open." },
    { term: "Proportional band", def: "The change in the controlled variable that drives the output through its full 0–100% range." },
    { term: "Gain", def: "The aggressiveness of response; inversely related to proportional band — narrow band means high gain." },
    { term: "Offset (droop)", def: "The small steady error left by proportional-only control, because output is proportional to error." },
    { term: "Proportional (P) action", def: "Output proportional to the present error." },
    { term: "Integral (I) action", def: "Output that accumulates while error persists, eliminating the offset P leaves behind." },
    { term: "Derivative (D) action", def: "Output responding to the rate of change of the variable, anticipating overshoot." },
    { term: "PID control", def: "A control algorithm blending proportional, integral, and derivative actions into one output." },
    { term: "Hunting", def: "Sustained oscillation of the variable and output around setpoint, caused by overcorrection or delay." },
    { term: "Setpoint", def: "The desired value of the controlled variable." },
    { term: "Stability", def: "A loop's ability to settle at setpoint without sustained oscillation." }
  ],
  video: {
    title: "Intro to HVAC Controls Class 1 Webinar",
    embedUrl: "https://www.youtube.com/embed/cCFIBw7zU6k",
    note: "This is the same class webinar used in Module 1, reused here because its survey of control types covers the on-off versus modulating distinction this module develops. Watch its control examples a second time and classify each as open-loop or closed-loop, on-off or modulating, using this module's vocabulary.",
    more: []
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> Classify each as open-loop or closed-loop and defend your answer in one sentence: (a) an exhaust fan started by a wall switch and stopped by a 20-minute timer, (b) a freezer case controller reading a case sensor, (c) a boiler aquastat that shuts the burner at its high limit.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Ask 'does the controller know what happened?' Step 2: (a) <strong>Open-loop</strong> — the timer never measures air quality or temperature. (b) <strong>Closed-loop</strong> — the case sensor feeds back and the controller corrects. (c) <strong>Closed-loop</strong> (as a safety limit) — it acts on measured water temperature, not on elapsed time.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A heating thermostat is set to 72°F with a 3°F differential centered on setpoint. State the cut-in and cut-out temperatures.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Centered differential means half the band each side of setpoint: 3 ÷ 2 = 1.5°F. Step 2: Heat <strong>cuts in at 70.5°F</strong> (72 − 1.5) as temperature falls. Step 3: Heat <strong>cuts out at 73.5°F</strong> (72 + 1.5) as temperature rises. The furnace therefore swings the room gently between those two values instead of chattering at exactly 72.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A modulating cooling valve is driven by a proportional loop with a 5°F band, setpoint 75°F. Find the output at room temperatures of (a) 76°F, (b) 77.5°F, (c) 81°F.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Output % = (error ÷ band) × 100. Step 2: (a) error 1°F → 1/5 = <strong>20% open</strong>. (b) error 2.5°F → 2.5/5 = <strong>50% open</strong>. (c) error 6°F exceeds the 5°F band, so the output saturates at <strong>100% open</strong> — beyond the band the controller asks for everything the valve has.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A proportional-only discharge-air loop settles with the air at 57°F against a 55°F setpoint, holding that offset for an hour. Which PID action exists specifically to remove this behavior, and how does it do it?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The steady 2°F leftover error is classic proportional <strong>offset (droop)</strong>. Step 2: <strong>Integral action</strong> removes it. Step 3: Because the error persists over time, integral accumulates and keeps nudging the valve in the correcting direction, minute after minute, until the measured value reaches setpoint and the accumulation stops growing.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A VAV damper hunts: discharge temperature swings in a steady wave and the actuator strokes constantly. The PID was 'tuned' yesterday by a well-meaning operator who narrowed the band and sped up the integral. Give your first two corrective moves and one hardware check.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Undo the overcorrection — <strong>widen the proportional band</strong> (lower the gain) to restore stability margin. Step 2: <strong>Slow the integral</strong> so corrections stop piling onto results not yet felt. Step 3: Hardware check — stroke the damper by hand command and confirm the linkage is tight and the damper moves smoothly through its full range; no tuning survives sloppy linkage.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A compressor short cycles — six starts in ten minutes — on a warm afternoon. Name three distinct causes you would investigate and the observation that would confirm each.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: <strong>Too little differential/cycle setting</strong> — confirm by reading the stat's swing or cycles-per-hour setting against equipment limits. Step 2: <strong>Oversized equipment</strong> — confirm by observing very short satisfied runs even on a design-warm day with the space reaching setpoint almost immediately. Step 3: <strong>Sensor exposed to its own output</strong> — confirm by finding the stat or sensor in supply air, sunlight, or a draft, so it sees instant change and satisfies/calls rapidly. Fix the cause, not the symptom.</p>"
    }
  ],
  quiz: [
    {
      q: "A control that waters a garden on a fixed timer, rain or shine, is:",
      choices: ["Closed-loop, because the timer is precise", "Open-loop, because nothing measures the result", "Modulating, because flow varies", "PID, because it repeats daily"],
      answer: 1,
      explanation: "Correct: (b). No measurement of soil moisture or rainfall returns to the controller, so it cannot know or correct the result. (a) Precision of timing is not feedback. (c) The valve is simply opened; nothing positions it proportionally to an error. (d) Repetition is not PID — no proportional, integral, or derivative action on a measured variable exists."
    },
    {
      q: "The purpose of differential in an on-off thermostat is to:",
      choices: ["Increase the temperature swing as much as possible", "Create a gap between cut-in and cut-out so equipment does not switch rapidly", "Convert on-off control into modulating control", "Eliminate the need for a setpoint"],
      answer: 1,
      explanation: "Correct: (b). The deadband between starting and stopping protects contactors, igniters, and compressors from destructive rapid cycling. (a) The gap is kept as small as comfort and equipment life allow, not maximized. (c) Differential does not change the output type; the device is still fully on or fully off. (d) The differential is defined around the setpoint, which remains essential."
    },
    {
      q: "A cooling thermostat set at 74°F has a 2°F differential centered on setpoint. Cooling cuts in and out at:",
      choices: ["In at 74, out at 72", "In at 76, out at 74", "In at 75, out at 73", "In at 72, out at 76"],
      answer: 2,
      explanation: "Correct: (c). Half of the 2°F band sits each side of 74: cooling starts when the room rises to 75°F and stops when it falls to 73°F. (a) uses the full band on one side and in the wrong direction for cooling cut-in. (b) cuts out at setpoint, meaning no band below setpoint — not centered. (d) reverses the logic entirely; cooling does not start on a falling temperature."
    },
    {
      q: "A proportional loop has a 4°F band. The error is 3°F. The output is approximately:",
      choices: ["3%", "25%", "75%", "100% only"],
      answer: 2,
      explanation: "Correct: (c). Output = (error ÷ band) × 100 = (3 ÷ 4) × 100 = 75%. (a) confuses the error value with a percentage. (b) would be the answer for a 12°F band or a 1°F error in this band. (d) applies only when the error meets or exceeds the full band (4°F here)."
    },
    {
      q: "In a PID loop, integral action is the one that:",
      choices: ["Responds to how fast the variable is changing", "Accumulates the error over time and eliminates steady offset", "Sets the proportional band", "Provides the power supply for the loop"],
      answer: 1,
      explanation: "Correct: (b). Integral keeps nudging the output while any error persists, which is exactly what removes proportional droop. (a) describes derivative action. (c) The band is a proportional tuning parameter, not an action performed by I. (d) Power supply is hardware, unrelated to the algorithm's three actions."
    },
    {
      q: "Derivative action is often left at zero in HVAC loops because it:",
      choices: ["Cannot be turned off", "Amplifies sensor noise and many HVAC processes are slow enough not to need it", "Only works on heating systems", "Replaces the sensor when active"],
      answer: 1,
      explanation: "Correct: (b). D reacts to rate of change, so jittery sensor signals produce jittery outputs; slow thermal processes usually do fine on PI. (a) D can be disabled — that is what 'left at zero' means. (c) Derivative is direction-agnostic math, not heating-only. (d) D never replaces sensing; it consumes the sensor signal like the other actions."
    },
    {
      q: "A loop hunts with a steady, repeating wave. The most likely control causes include:",
      choices: ["A correctly sized valve and a well-placed sensor", "Gain too high or integral too fast for the process", "A setpoint that is too comfortable", "Excessive differential in a modulating valve"],
      answer: 1,
      explanation: "Correct: (b). Overcorrection — narrow band or fast integral — is the classic self-inflicted cause of sustained oscillation. (a) Good sizing and placement promote stability, not hunting. (c) The comfort level of a setpoint has no effect on loop stability. (d) Differential belongs to on-off control; a modulating loop has no switch differential to be excessive."
    },
    {
      q: "Short cycling of a compressor is best investigated first by:",
      choices: ["Replacing the compressor", "Watching the system over time and checking the cycle/differential settings, sizing, and sensor location", "Adding refrigerant", "Disabling the thermostat"],
      answer: 1,
      explanation: "Correct: (b). Short cycling is a behavior pattern; timed observation plus the three classic cause families (settings, sizing, sensor exposure) find it. (a) condemns the most expensive part for what is usually a control-behavior cause. (c) Charge problems cause other symptoms and guessing charge corrupts diagnosis. (d) removes the control rather than diagnosing it."
    }
  ],
  studyGuide: `
<h3>Module 2 — Control Theory Essentials: Quick Reference</h3>
<ul>
<li><strong>Open vs. closed loop:</strong> if no measurement returns to the controller, it is open-loop. Timers are open; thermostats are closed.</li>
<li><strong>On-off control:</strong> output fully on or fully off. <strong>Differential/deadband</strong> = cut-out minus cut-in; centered example: 70°F setpoint, 2°F diff → in at 69 (heating), out at 71.</li>
<li><strong>Short cycling</strong> = differential too small, oversized equipment, or sensor in its own airstream/sunlight.</li>
<li><strong>Proportional:</strong> Output % = (error ÷ proportional band) × 100. Narrow band = high gain = aggressive/unstable; wide band = stable but lazy, with steady <strong>offset (droop)</strong>.</li>
<li><strong>PID:</strong> P reacts to present error; I accumulates past error and kills offset; D reacts to rate of change and anticipates. Most HVAC loops run PI; D often zero because it amplifies noise.</li>
<li><strong>Hunting:</strong> sustained wave = gain too high, integral too fast, bad sensor placement, oversized valve, or sloppy linkage. Fix hardware first, then slow the loop down.</li>
<li><strong>Diagnose behavior with time:</strong> trends and a stopwatch reveal oscillation; a single snapshot cannot.</li>
</ul>
<p><strong>Memory line:</strong> P is now, I is so-far, D is heading — and differential is what keeps on-off equipment alive.</p>`
};
