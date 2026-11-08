// Plumbing 202 - Module 5: Sewage Pumps & Sump Pumps (NCCER 02312)
module.exports = {
  number: 5,
  slug: "sewage-pumps-sump-pumps",
  title: "Sewage Pumps & Sump Pumps (NCCER 02312)",
  estTime: "3–4 hours",
  objectives: [
    "Distinguish a sump pump from a sewage pump and say where each is used.",
    "Explain how a float switch controls a pump and what happens when it fails.",
    "Size a sump pump by flow and head, and explain what total dynamic head means.",
    "Describe the discharge piping, check valve, and venting a pump installation needs.",
    "Name the maintenance and failure signs for both pump types."
  ],
  sections: [
    {
      heading: "Two Pumps, Two Jobs",
      html: `
<p>A <strong>sump pump</strong> moves clean water — groundwater, rainwater, and seepage — out of a basement sump pit and away from a building. A <strong>sewage pump</strong> (also called a sewage ejector pump) moves wastewater containing solids from fixtures below the sewer line up to the sewer. The two pumps look similar — both sit in a pit, both are controlled by a float, both discharge through a pipe — but they are built differently and they are not interchangeable. A sump pump's impeller will clog on solids; a sewage pump is built to pass solids, and its pit is sealed and vented because it holds sewage.</p>
<p>The rule is simple: if the water has been through a fixture — a toilet, a sink, a washing machine — it is sewage and it needs a sewage pump. If the water has come through the ground — seepage, a high water table, a foundation drain — it is groundwater and it needs a sump pump. Mixing the two up is a health hazard: sewage in a sump pit, or groundwater pumped into a septic system, are both failures of the design.</p>
<p>Both pumps are installed below the level they serve, in a pit, and both depend on a float switch to turn them on and off. Both need a check valve on the discharge, so the water in the discharge pipe does not run back into the pit when the pump stops. And both need a plan for what happens when they fail — because a failed pump in a basement is discovered by water on the floor.</p>
<div class="callout"><strong>Key idea:</strong> Sump pumps move clean groundwater; sewage pumps move wastewater with solids. The water's source decides the pump — never use one for the other's job.</div>`
    },
    {
      heading: "The Float Switch: The Pump's Brain",
      html: `
<p>Both pumps are controlled by a <strong>float switch</strong>: a buoyant switch that rises with the water level in the pit and turns the pump on at a set level, then falls and turns it off at a lower level. The distance between the on level and the off level is the pump's cycle: too short a cycle and the pump starts and stops constantly, wearing out its motor; too long a cycle and the pit overflows before the pump starts. The float's position and its tether length are set at installation and checked at every service.</p>
<p>Float switches fail, and their failure modes are the pump's failure modes. A float stuck in the down position never turns the pump on, and the pit overflows. A float stuck in the up position runs the pump dry, burning out the motor. A float tangled in the discharge pipe or the pit's inlet does either. That is why a good installation keeps the float's travel clear of everything in the pit, and why a high-water alarm — a separate float and an audible alarm — is fitted in any installation where a failure would cause damage.</p>
<p>Some installations use a <strong>duplex</strong> arrangement: two pumps in one pit, with the second as a standby that starts if the first fails or if the water rises past a higher level. Duplex is standard in commercial work and in any home where a pump failure would be catastrophic. The second pump is not a luxury; it is the insurance.</p>
<div class="callout"><strong>Key idea:</strong> The float switch sets the pump's cycle. A stuck float is a failed pump — which is why a high-water alarm and, in critical work, a second pump are fitted.</div>`
    },
    {
      heading: "Sizing: Flow and Head",
      html: `
<p>A pump is sized by two numbers: <strong>flow</strong> (how much water it moves, in gallons per minute) and <strong>head</strong> (how high it must lift the water, in feet). The flow comes from the load: the rate at which water enters the pit — from a foundation drain, a high water table, or the fixtures a sewage pump serves. The head comes from the installation: the vertical lift from the pit to the discharge point, plus the friction loss in the discharge pipe and fittings.</p>
<p>The sum of the vertical lift and the friction loss is the <strong>total dynamic head (TDH)</strong>. A pump's performance curve shows the flow it delivers at each head: as the head rises, the flow falls. Sizing means picking a pump whose curve delivers the required flow at the actual TDH — not at zero head, which is the number on the box. A pump rated 60 gpm at zero head may deliver 30 gpm at the real TDH, and if the pit fills at 40 gpm, the pump will never catch up.</p>
<p>For a sewage pump, the flow comes from the fixtures: the drainage fixture units of the fixtures below the sewer line, converted to a flow rate, with the pump sized to clear the pit faster than the fixtures fill it. For a sump pump, the flow comes from the site: the water table, the foundation drain, and the worst rain the site sees. Both need a margin — a pump sized exactly to the load has no room for a storm or a second fixture running at once.</p>
<div class="callout"><strong>Key idea:</strong> A pump is sized by flow (gpm) and total dynamic head (vertical lift + friction loss). Read the pump's curve at the real TDH, not at zero head.</div>`
    },
    {
      heading: "Discharge Piping, Check Valves, and Venting",
      html: `
<p>The discharge pipe carries the pump's water to its destination: for a sump pump, to the outside, away from the building, or to a storm drain where the code allows; for a sewage pump, to the building sewer. The discharge must have a <strong>check valve</strong> — a one-way valve that stops the water in the vertical discharge pipe from running back into the pit when the pump stops. Without it, every cycle pumps the same water twice, and the pump short-cycles itself to death. The check valve goes in the vertical run, above the pump, and it must be accessible for service.</p>
<p>A <strong>union</strong> is fitted in the discharge pipe above the check valve, so the pump can be lifted out of the pit without cutting pipe. A <strong>gate valve</strong> (or ball valve) is fitted above the union, so the discharge can be isolated. And a small <strong>weep hole</strong> is drilled in the discharge pipe just above the pump (for a submersible pump) to let air escape and prevent air-lock — the condition where a trapped air bubble stops the pump from moving water at all.</p>
<p>A sewage pump's pit is sealed and <strong>vented</strong> like any drainage fixture, because it holds sewage and sewer gas. The vent connects to the building's vent system and terminates above the roof, and the pit's cover is sealed with a gasket. A sump pit holding groundwater does not need a vent, but its cover should keep debris out and its discharge should be protected from freezing where it leaves the building.</p>
<div class="callout"><strong>Key idea:</strong> The discharge needs a check valve (so the water does not run back), a union and an isolation valve (so the pump can be serviced), and — for a sewage pit — a sealed cover and a vent.</div>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Sump pumps move clean groundwater; sewage pumps move wastewater with solids. The water's source decides the pump.</li>
<li>The float switch controls the pump; a stuck float is a failed pump. Fit a high-water alarm, and a second pump where failure would be catastrophic.</li>
<li>Size by flow (gpm) and total dynamic head (vertical lift + friction loss); read the pump curve at the real TDH.</li>
<li>The discharge needs a check valve, a union, an isolation valve, and (for a submersible pump) a weep hole against air-lock.</li>
<li>A sewage pit is sealed and vented; a sump pit is not vented but needs a cover and freeze protection on the discharge.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Sizing a pump from the number on the box (its flow at zero head). At the real total dynamic head the flow is much lower — size from the curve at the actual TDH.</div>
<div class="callout"><strong>Common mistake:</strong> Forgetting the check valve on the discharge. Without it, every cycle pumps the same water twice and the pump short-cycles itself to death.</div>
<p><strong>Ready-to-Work link:</strong> The course lab sizes a sump pump for a real basement — flow, head, and the discharge parts — and the next module carries the same ideas into ejectors, lift stations, and alarms.</p>`
    }
  ],
  keyTerms: [
    { term: "Sump pump", def: "A pump that moves clean groundwater and seepage out of a basement sump pit." },
    { term: "Sewage pump / sewage ejector pump", def: "A pump that moves wastewater containing solids from fixtures below the sewer line up to the sewer." },
    { term: "Sump pit", def: "The pit in a basement floor that collects groundwater and holds the sump pump." },
    { term: "Float switch", def: "A buoyant switch that turns a pump on at a high water level and off at a lower level." },
    { term: "High-water alarm", def: "A separate float and audible alarm that warns when the water in a pit rises past the normal pump-on level." },
    { term: "Duplex pump", def: "Two pumps in one pit, the second as a standby that starts if the first fails or the water rises higher." },
    { term: "Flow", def: "The volume of water a pump moves, in gallons per minute (gpm)." },
    { term: "Head", def: "The height a pump must lift water, in feet." },
    { term: "Total dynamic head (TDH)", def: "The vertical lift plus the friction loss in the discharge pipe and fittings — the head the pump actually works against." },
    { term: "Pump curve", def: "The manufacturer's chart showing the flow a pump delivers at each head." },
    { term: "Check valve", def: "A one-way valve on the discharge pipe that stops water from running back into the pit when the pump stops." },
    { term: "Weep hole", def: "A small hole drilled in the discharge pipe above a submersible pump to let air escape and prevent air-lock." },
    { term: "Air-lock", def: "A trapped air bubble that stops a pump from moving water." },
    { term: "Short-cycling", def: "A pump starting and stopping too often, which wears out its motor — often caused by a missing check valve or a too-short float cycle." }
  ],
  video: {
    title: "How Sump Pumps Actually Work (And the Gas Coming Up Through the Same Hole)",
    embedUrl: "https://www.youtube.com/embed/G8uHYALjl8U",
    note: "A clear look inside a sump pit — the pump, the float, the discharge, and the radon gas that comes up through the same hole, which is why a sealed cover and a vent matter. Watch it, then name the three discharge-pipe parts a serviceable installation needs.",
    more: [
      { title: "6 Things Sump Pump Owners NEED to Know", url: "https://www.youtube.com/watch?v=LAquntA5Ba0" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A basement has a toilet and a laundry sink below the sewer line, and a foundation drain collecting groundwater. How many pumps are needed, and of which types?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Two pumps are needed, in two separate pits. Step 2: A sewage pump (sealed, vented pit) for the toilet and laundry sink, because that water has been through fixtures. Step 3: A sump pump for the foundation drain, because that water is groundwater. Step 4: The two must never be combined — sewage in a sump pit is a health hazard, and groundwater in a sewage pit overloads the system.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A sump pump's float is tangled in the discharge pipe and stuck in the down position. What happens, and what is the fix?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The float never rises, so the pump never turns on, and the pit overflows into the basement. Step 2: The fix is to free the float and reroute or secure the discharge pipe so the float's travel is clear of everything in the pit. Step 3: The lesson is preventive: a high-water alarm would have warned the owner before the floor flooded, and the float's travel should be checked at every service.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A pump is rated 60 gpm at zero head. Its installation has a vertical lift of 10 feet and friction loss of 5 feet. Its curve shows 30 gpm at 15 feet of head. The pit fills at 40 gpm in a heavy rain. Will the pump keep up?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Total dynamic head = 10 + 5 = 15 feet. Step 2: At 15 feet the pump delivers 30 gpm, not the 60 gpm on the box. Step 3: The pit fills at 40 gpm, faster than the pump's 30 gpm, so the pump will not keep up — the pit will overflow in a heavy rain. Step 4: The pump must be upsized or the discharge friction reduced.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A sewage pump installation has no check valve on the discharge. What will happen?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: When the pump stops, the water in the vertical discharge pipe runs back into the pit. Step 2: The water level rises again, the float turns the pump on, and the same water is pumped out again — short-cycling. Step 3: Short-cycling wears out the motor and can burn it out. Step 4: The fix is a check valve in the vertical run above the pump, accessible for service.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A submersible sump pump runs but moves no water. What is a likely cause, and what is the fix?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: A likely cause is air-lock — a trapped air bubble in the pump volute that stops it from moving water. Step 2: The fix is the weep hole: a small hole drilled in the discharge pipe just above the pump that lets the air escape. Step 3: If the weep hole is missing or clogged, drill or clear it, and check that the pump is fully submerged and the float is free.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A homeowner's basement floods during a power outage because the sump pump stops. Name two measures that would have prevented the flood.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: A battery backup pump — a second, battery-powered pump in the same pit that runs when the power fails. Step 2: A water-powered backup pump, or a generator circuit for the primary pump. Step 3: Either way, the lesson is that a pump that needs power is a pump that fails when the power does, and a basement that floods in a storm is exactly when the power is most likely to fail.</p>"
    }
  ],
  quiz: [
    {
      q: "A sump pump moves:",
      choices: ["Wastewater with solids", "Clean groundwater and seepage", "Sewage from fixtures below the sewer", "Hot water from a boiler"],
      answer: 1,
      explanation: "Correct: (b). A sump pump moves clean groundwater. (a) Wastewater with solids is a sewage pump's job. (c) Fixtures below the sewer need a sewage pump. (d) Boiler water is not pumped by either."
    },
    {
      q: "A sewage pump's pit must be:",
      choices: ["Open and unvented", "Sealed and vented", "Filled with gravel", "Connected to the storm drain"],
      answer: 1,
      explanation: "Correct: (b). A sewage pit holds sewage and sewer gas, so it is sealed and vented. (a) An open pit would release sewer gas. (c) Gravel is not a pit feature. (d) Sewage must go to the sanitary sewer, not the storm drain."
    },
    {
      q: "The float switch:",
      choices: ["Pumps the water", "Turns the pump on at a high level and off at a lower level", "Stops water from running back", "Vents the pit"],
      answer: 1,
      explanation: "Correct: (b). The float switch controls the pump by water level. (a) The pump moves the water. (c) The check valve stops backflow. (d) The vent handles gas."
    },
    {
      q: "Total dynamic head is:",
      choices: ["The pump's horsepower", "Vertical lift plus friction loss in the discharge pipe", "The depth of the pit", "The flow in gallons per minute"],
      answer: 1,
      explanation: "Correct: (b). TDH is lift plus friction loss. (a) Horsepower is the motor's power. (c) Pit depth is only part of the lift. (d) Flow is measured in gpm, not head."
    },
    {
      q: "A pump rated 60 gpm at zero head delivers less at real head because:",
      choices: ["The pump is defective", "Flow falls as head rises on the pump's curve", "The pit is too small", "The float is stuck"],
      answer: 1,
      explanation: "Correct: (b). A pump's curve shows flow falling as head rises. (a) The pump is not defective — zero-head rating is not the working flow. (c) Pit size does not change the curve. (d) A stuck float affects control, not the curve."
    },
    {
      q: "The check valve on a pump discharge:",
      choices: ["Vents the pit", "Stops the water in the discharge pipe from running back into the pit", "Turns the pump on", "Filters the water"],
      answer: 1,
      explanation: "Correct: (b). The check valve stops backflow in the discharge pipe. (a) The vent handles gas. (c) The float switch turns the pump on. (d) No filter is involved."
    },
    {
      q: "A weep hole in the discharge pipe prevents:",
      choices: ["Short-cycling", "Air-lock", "Freezing", "Corrosion"],
      answer: 1,
      explanation: "Correct: (b). The weep hole lets trapped air escape so the pump can move water. (a) Short-cycling is caused by a missing check valve or a short float cycle. (c) Freezing is prevented by insulation and slope. (d) Corrosion is a material problem."
    },
    {
      q: "A duplex pump arrangement is:",
      choices: ["Two pumps in series", "Two pumps in one pit, the second as a standby", "A pump with two motors", "Two pits with one pump each"],
      answer: 1,
      explanation: "Correct: (b). Duplex means a standby pump in the same pit. (a) Pumps in series raise head, not redundancy. (c) A single pump does not have two motors. (d) Two pits with one pump each is two separate installations."
    }
  ],
  studyGuide: `
<h3>Module 5 — Sewage & Sump Pumps: Quick Reference</h3>
<p><strong>Sump pump:</strong> Clean groundwater · Open pit, no vent · Discharge to outside or storm drain where allowed.</p>
<p><strong>Sewage pump:</strong> Wastewater with solids · Sealed, vented pit · Discharge to the building sewer.</p>
<p><strong>Float switch:</strong> On at a high level, off at a lower level · Stuck float = failed pump · High-water alarm; duplex where failure is catastrophic.</p>
<p><strong>Sizing:</strong> Flow (gpm) + total dynamic head (lift + friction) · Read the pump curve at the real TDH, never at zero head.</p>
<p><strong>Discharge:</strong> Check valve (stops backflow) · Union + isolation valve (service) · Weep hole (prevents air-lock).</p>
<p><strong>Self-check:</strong> Given a basement with a toilet below the sewer and a foundation drain, can you say how many pumps, of which types, and what each discharge needs?</p>
`
};
