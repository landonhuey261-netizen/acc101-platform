// Plumbing 122 - Module 5: Water Pressure: Boosters, Regulators & Hammer Arrestors
module.exports = {
  number: 5,
  slug: "water-pressure-control",
  title: "Water Pressure: Boosters, Regulators & Hammer Arrestors",
  estTime: "3–4 hours",
  objectives: [
    "Explain when pressure is too high, when it is too low, and how to measure both with a gauge.",
    "State the IPC 604.8 rule for pressure-reducing valves and explain how a PRV works.",
    "Explain why a PRV creates a closed system and what thermal expansion control that requires.",
    "Describe booster pumps and pressure tanks and when each is the right fix for low pressure.",
    "Explain water hammer: what causes it, why it damages piping, and how arrestors stop it."
  ],
  sections: [
    {
      heading: "Too Much, Too Little, and Just Right",
      html: `
<p>Most houses are happy between about 40 and 80 psi. Below about 40 psi, showers are weak and fixtures are slow to fill. Above 80 psi, the code steps in. High pressure is not a luxury — it is a wear problem: it stresses supply lines, shortens the life of toilet fill valves and faucet cartridges, makes pipes noisy, and can force the water heater's T&P valve to weep. A house at 110 psi will burn through fixture parts far faster than a house at 60 psi.</p>
<p>Measure pressure with a gauge on a hose bibb. Read it twice: once with everything off (static pressure) and once with a fixture running (residual pressure). A static reading above 80 psi means a pressure-reducing valve is required. A residual reading that collapses when a second fixture opens usually means undersized piping or a restriction, not a pressure problem at the street — and a booster pump will not fix a clogged or undersized pipe.</p>
<p>Pressure also changes through the day. Municipal pressure is highest at night and lowest in the morning peak. A reading taken at noon may look fine while the morning shower is weak. If a customer complains about morning pressure, measure in the morning.</p>
<div class="callout"><strong>Key idea:</strong> Measure static and residual pressure at the hose bibb. Above 80 psi static, the code requires a PRV. A pressure reading that collapses under flow points at the piping, not the street.</div>`
    },
    {
      heading: "The Pressure-Reducing Valve (PRV)",
      html: `
<p><strong>IPC 604.8</strong> requires a pressure-reducing valve where the static pressure exceeds <strong>80 psi</strong>. The PRV (ASSE 1003) is installed on the cold-water main just inside the building, after the meter and main shutoff, with a <strong>strainer</strong> upstream to catch debris before it reaches the valve seat. It is a spring-and-diaphragm valve: street pressure pushes on one side, a spring pushes back, and the valve throttles the flow to hold the downstream pressure at the set point — usually around 50 to 60 psi — no matter how high the street pressure climbs.</p>
<p>Two details matter. First, a PRV <strong>fails open</strong>: if its diaphragm or spring fails, it stops regulating and passes full street pressure to the fixtures. A PRV that has failed open looks like no PRV at all — the symptom is suddenly high pressure and failing fixture parts. Second, a PRV creates a <strong>closed system</strong>: its check-valve action blocks expanded water from flowing back to the main. A house with a PRV therefore needs thermal expansion control (IPC 607.3) — usually an expansion tank — or the water heater's T&P valve will weep every time the heater fires.</p>
<p>Set the PRV with a gauge, not by feel. Turn the adjusting screw, read the downstream static pressure, and confirm it holds steady with a fixture running. And warn the customer: a PRV does not fix low pressure, it only reduces high pressure. A house at 45 psi gains nothing from a PRV.</p>
<div class="callout"><strong>Key idea:</strong> PRV required above 80 psi static (IPC 604.8). It fails open, so a failed PRV shows up as high pressure. It creates a closed system, so expansion control must follow.</div>`
    },
    {
      heading: "Boosters and Pressure Tanks",
      html: `
<p>When pressure is too low, the fix is a <strong>booster pump</strong>. It is installed on the cold-water main after the meter and adds pressure to the whole building or to a zone of it. A booster system usually pairs the pump with a <strong>pressure tank</strong> and a pressure switch, so the pump does not run every time a faucet opens: the tank stores water under air pressure, the fixtures draw from the tank, and the pump only runs to refill it.</p>
<p>The pressure switch sets the pump's cycle. A typical <strong>40/60 switch</strong> turns the pump on at 40 psi and off at 60 psi; a <strong>30/50 switch</strong> cycles between 30 and 50 psi. The tank's air charge must match the switch — if the tank loses its air charge (a waterlogged tank), the pump short-cycles, turning on and off rapidly with every small draw, which burns out the pump and the switch.</p>
<p>Boosters are the right fix for a building that is high above the meter or far from the main. They are the wrong fix for a house whose pressure collapses because the service is undersized or a pipe is restricted — a booster cannot push more water through a pipe that is already choked. Diagnose first, boost second.</p>
<div class="callout"><strong>Key idea:</strong> A booster pump adds pressure; a pressure tank stores it so the pump cycles cleanly. A waterlogged tank causes short-cycling. Never boost a system whose real problem is an undersized or restricted pipe.</div>`
    },
    {
      heading: "Water Hammer: The Bang in the Pipes",
      html: `
<p><strong>Water hammer</strong> is the shock wave created when flowing water is stopped suddenly — a washing machine valve snapping shut, a dishwasher solenoid closing, a faucet turned off fast. The moving column of water has momentum, and when the valve closes the momentum converts to a pressure spike that races through the piping, banging pipes and stressing joints. One loud bang is the classic symptom; repeated hammer loosens joints and shortens the life of valves and appliances.</p>
<p>The fix is a <strong>water hammer arrestor</strong>: a small sealed chamber with an air cushion (or a piston) installed near the quick-closing valve. When the shock wave arrives, the air cushion compresses and absorbs the spike instead of letting it slam the piping. Arrestors belong at the source of the hammer — at the washing machine valves, the dishwasher, the ice maker — not at the far end of the house.</p>
<p>Air chambers — long vertical stubs of pipe — were the old answer, but they fill with water over time and stop working. Modern arrestors are sealed and maintenance-free. And remember the two other causes of banging pipes: loose pipe supports, which let the pipe move when pressure changes, and excessive pressure, which makes every spike worse. A PRV and secure supports are part of the hammer cure too.</p>
<div class="callout"><strong>Key idea:</strong> Water hammer is a shock wave from a valve closing fast. The arrestor goes at the source — the quick-closing valve — and its air cushion absorbs the spike.</div>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Comfortable range is about 40–80 psi. Above 80 psi static, a PRV is required (IPC 604.8).</li>
<li>PRV (ASSE 1003) with a strainer, installed after the meter and main shutoff; it fails open and creates a closed system that needs expansion control.</li>
<li>Booster pumps add pressure for high or distant buildings; pressure tanks and switches (30/50 or 40/60) let the pump cycle cleanly.</li>
<li>A waterlogged tank causes short-cycling — rapid on-off pump operation that burns out the pump and switch.</li>
<li>Water hammer is a shock wave from a fast-closing valve; arrestors with an air cushion go at the source.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Installing a booster pump to fix low pressure caused by an undersized or restricted pipe. The booster cannot push more water through a choked pipe — find and fix the restriction first.</div>
<div class="callout"><strong>Common mistake:</strong> Installing a PRV and forgetting the expansion tank. The PRV closes the system, the heater fires, pressure rises, and the T&P valve weeps — a brand-new problem created by a half-finished fix.</div>
<p><strong>Ready-to-Work link:</strong> NCCER Plumbing Level 2 expects you to identify pressure control devices and explain water hammer. If you can explain to a homeowner why their PRV needs an expansion tank and why their washing machine bangs, you have this module.</p>`
    }
  ],
  keyTerms: [
    { term: "Pressure-reducing valve (PRV)", def: "A valve that throttles high street pressure down to a safe level, typically 50–60 psi; required above 80 psi static by IPC 604.8." },
    { term: "ASSE 1003", def: "The standard for pressure-reducing valves; a PRV meeting ASSE 1003 is installed with a strainer upstream." },
    { term: "Strainer", def: "A screen installed upstream of a PRV to catch debris before it reaches the valve seat." },
    { term: "Fails open", def: "How a PRV fails: it stops regulating and passes full street pressure to the fixtures." },
    { term: "Closed system", def: "A water system with a PRV, check valve, or backflow preventer that blocks expanded water from flowing back to the main." },
    { term: "Booster pump", def: "A pump installed on the water main that adds pressure to a building or a zone of it." },
    { term: "Pressure tank", def: "A tank with an air cushion that stores water under pressure so a pump cycles cleanly instead of running at every draw." },
    { term: "Pressure switch", def: "A switch that turns a pump on at a low pressure and off at a high pressure; common settings are 30/50 and 40/60 psi." },
    { term: "Short-cycling", def: "A pump turning on and off rapidly, usually caused by a waterlogged pressure tank with no air cushion." },
    { term: "Water hammer", def: "A pressure shock wave created when flowing water is stopped suddenly by a fast-closing valve." },
    { term: "Water hammer arrestor", def: "A sealed chamber with an air cushion installed near a quick-closing valve to absorb pressure spikes." },
    { term: "Air chamber", def: "An old-style hammer remedy: a vertical stub of pipe that traps air; it fills with water over time and stops working." },
    { term: "Static pressure", def: "Water pressure with no water flowing; the reading that decides whether a PRV is required." },
    { term: "Residual pressure", def: "Water pressure while water is flowing; always lower than static because of friction loss." },
    { term: "Thermal expansion", def: "Water expanding as it heats; in a closed system it raises pressure until the T&P valve weeps." },
    { term: "Expansion tank", def: "A tank with an air cushion that absorbs thermal expansion in a closed system." }
  ],
  video: {
    title: "Why Water Hammer Arrestors Are SO Important | GOT2LEARN",
    embedUrl: "https://www.youtube.com/embed/FbkE0HhEHVY",
    note: "Why hammer arrestors matter and where they go — watch the shock-wave explanation, then find the quick-closing valves in your own house that would need one.",
    more: [
      { title: "How to Quiet Pipes with SharkBite Water Hammer Arrestors", url: "https://www.youtube.com/watch?v=njgYnC6e4yo" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A hose bibb gauge reads 110 psi static. What does IPC 604.8 require, and what else must be installed with it?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Static pressure above 80 psi requires a pressure-reducing valve (IPC 604.8). Step 2: The PRV (ASSE 1003) goes on the cold-water main after the meter and main shutoff, with a strainer upstream. Step 3: The PRV creates a closed system, so thermal expansion control (IPC 607.3) — typically an expansion tank — must be added. Step 4: Set the PRV to about 50–60 psi and confirm with a gauge.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A third-floor apartment has 25 psi at the shower while the street pressure is 45 psi. The piping is correctly sized. What is the cause and the fix?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The cause is elevation — the third floor sits well above the meter, and each foot up costs about 0.433 psi, plus friction in the long run. Step 2: The fix is a booster pump with a pressure tank and switch. Step 3: A PRV would make it worse, and a larger pipe would not add the missing pressure. Step 4: Confirm with gauges before and after the booster to prove the fix.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A booster pump short-cycles — it turns on and off every few seconds when a faucet is opened slightly. Name the most likely cause and the fix.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The most likely cause is a waterlogged pressure tank that has lost its air cushion. Step 2: With no air cushion, a tiny draw drops the pressure fast and triggers the pump immediately. Step 3: The fix is to restore the tank's air charge (or replace a failed bladder) and check the pressure switch settings. Step 4: Short-cycling left alone burns out the pump and the switch.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A washing machine valve snaps shut and a single loud bang echoes through the pipes. Explain the physics and the fix.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The fast-closing valve stops a moving column of water suddenly; its momentum converts to a pressure spike — water hammer. Step 2: The spike races through the piping and bangs the pipes against their supports. Step 3: The fix is a water hammer arrestor installed at the washing machine valves, where the shock starts. Step 4: Also check that the pipe is securely supported and that the static pressure is not above 80 psi, which makes hammer worse.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A PRV is installed and the water heater's T&P valve starts weeping. Explain the chain of events and the fix.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The PRV creates a closed system — expanded water cannot flow back to the main. Step 2: When the heater fires, the water expands and pressure rises until the T&P valve weeps at 150 psi. Step 3: The fix is thermal expansion control (IPC 607.3), typically an expansion tank, holding pressure to 150 psi or the heater's rated pressure, whichever is lower. Step 4: Replacing the T&P valve alone will not fix it.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A homeowner's fixtures are noisy and toilet fill valves fail every year. The gauge reads 105 psi static. Explain the diagnosis and the full fix.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Diagnosis — excessive static pressure, above the 80 psi code threshold, is wearing out fixture parts and making the pipes noisy. Step 2: Install a PRV (ASSE 1003) with a strainer after the meter and main shutoff, set to about 50–60 psi. Step 3: Add thermal expansion control, because the PRV closes the system. Step 4: Confirm with a gauge after installation and tell the customer the fixture parts should now last their normal life.</p>"
    }
  ],
  quiz: [
    {
      q: "IPC 604.8 requires a pressure-reducing valve where the static pressure exceeds:",
      choices: ["40 psi", "60 psi", "80 psi", "100 psi"],
      answer: 2,
      explanation: "Correct: (c). A PRV is required above 80 psi static. (a) and (b) are normal residential pressures. (d) is well above the threshold and would leave fixtures exposed."
    },
    {
      q: "A PRV is installed:",
      choices: ["Before the meter, on the street side", "On the cold-water main after the meter and main shutoff, with a strainer upstream", "On the hot-water outlet of the heater", "At the farthest fixture"],
      answer: 1,
      explanation: "Correct: (b). The PRV goes on the cold main after the meter and shutoff, with a strainer to protect its seat. (a) puts it on the utility's side. (c) A PRV on the hot outlet would not protect the cold fixtures. (d) A PRV at one fixture protects only that fixture."
    },
    {
      q: "A PRV fails open. The result is:",
      choices: ["No water at the fixtures", "Full street pressure reaches the fixtures", "The water heater drains", "The meter stops"],
      answer: 1,
      explanation: "Correct: (b). A PRV that fails open stops regulating and passes street pressure through. (a) would be a PRV failing closed. (c) A PRV does not drain the heater. (d) The meter is upstream and keeps turning."
    },
    {
      q: "A third-floor apartment has only 25 psi at the shower. The street pressure is 45 psi. The best fix is to:",
      choices: ["Install a PRV", "Install a booster pump", "Install a water hammer arrestor", "Reduce the pipe size"],
      answer: 1,
      explanation: "Correct: (b). A booster pump adds the pressure that elevation has taken away. (a) A PRV reduces pressure further. (c) An arrestor absorbs shock, not low pressure. (d) Smaller pipe increases friction loss and makes pressure worse."
    },
    {
      q: "A booster pump system that cycles on and off constantly most likely has:",
      choices: ["A failed or waterlogged pressure tank", "A PRV set too high", "A tempering valve stuck open", "A check valve that is working perfectly"],
      answer: 0,
      explanation: "Correct: (a). A waterlogged tank has no air cushion, so pressure swings trigger the pump with every small draw. (b) A PRV set too high would raise pressure, not cycle the pump. (c) A tempering valve affects temperature, not pump cycling. (d) A working check valve does not cause short cycling."
    },
    {
      q: "A pressure switch set to 40/60 psi turns the pump:",
      choices: ["On at 60 psi and off at 40 psi", "On at 40 psi and off at 60 psi", "On at 50 psi and off at 50 psi", "On at 30 psi and off at 50 psi"],
      answer: 1,
      explanation: "Correct: (b). The pump cuts in at the low number (40 psi) and cuts out at the high number (60 psi). (a) reverses the two. (c) describes a single-point setting, not a 40/60 switch. (d) is the 30/50 setting."
    },
    {
      q: "A single loud bang is heard when a washing machine valve snaps shut. The best remedy is to:",
      choices: ["Raise the static pressure", "Install a water hammer arrestor near the valve", "Remove the PRV", "Increase the pipe size"],
      answer: 1,
      explanation: "Correct: (b). A hammer arrestor absorbs the pressure spike at the source. (a) Higher pressure makes hammer worse. (c) Removing the PRV does not address the shock wave. (d) Larger pipe does not absorb the spike."
    },
    {
      q: "A PRV is installed and the water heater's T&P valve starts weeping. The most likely cause is:",
      choices: ["The PRV failed open", "Thermal expansion in a now-closed system with no expansion control", "The water heater thermostat failed", "The cold-water service is undersized"],
      answer: 1,
      explanation: "Correct: (b). A PRV creates a closed system; heated water has nowhere to expand, so pressure rises until the T&P weeps. (a) A PRV failing open would not trap expansion. (c) A failed thermostat would overheat the water, a different failure. (d) Service size does not cause expansion pressure."
    }
  ],
  studyGuide: `
<h3>Module 5 — Water Pressure: Quick Reference</h3>
<p><strong>Core idea:</strong> Pressure has a comfortable range — about 40 to 80 psi. Too high wears fixtures out; too low starves them. Measure static and residual, then pick the right device.</p>
<div class="formula">PRV required above 80 psi static (IPC 604.8) &nbsp;|&nbsp; PRV: ASSE 1003, with strainer, after meter and main shutoff &nbsp;|&nbsp; PRV fails open &nbsp;|&nbsp; PRV creates a closed system → expansion control required</div>
<p><strong>Booster pumps:</strong> Add pressure for high or distant buildings. Pair with a pressure tank and a switch (30/50 or 40/60 psi) so the pump cycles cleanly.</p>
<p><strong>Short-cycling:</strong> Rapid on-off pump operation, usually a waterlogged tank with no air cushion.</p>
<p><strong>Water hammer:</strong> A shock wave from a fast-closing valve. Fix with an arrestor at the source — the quick-closing valve — plus secure supports and correct pressure.</p>
<p><strong>Self-check:</strong> Static pressure is 110 psi and the T&P valve weeps after a PRV is installed. What is missing? (Answer: thermal expansion control — an expansion tank — because the PRV closed the system.)</p>
`
};
