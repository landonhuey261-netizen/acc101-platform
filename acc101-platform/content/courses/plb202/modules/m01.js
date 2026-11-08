// Plumbing 202 - Module 1: Backflow: Backpressure, Backsiphonage & Cross-Connections
module.exports = {
  number: 1,
  slug: "backflow-backpressure-backsiphonage-cross-connections",
  title: "Backflow: Backpressure, Backsiphonage & Cross-Connections",
  estTime: "3–4 hours",
  objectives: [
    "Define backflow and explain why it is a public-health emergency, not a plumbing nuisance.",
    "Distinguish backpressure from backsiphonage and give a real example of each.",
    "Define a cross-connection and identify the common ones in homes and commercial buildings.",
    "Explain the three levels of hazard — high, medium, and low — and what protection each requires.",
    "Name the forms of backflow protection, from air gaps to assemblies, and say which hazard each handles."
  ],
  sections: [
    {
      heading: "What Backflow Is — and Why It Kills",
      html: `
<p><strong>Backflow</strong> is the unwanted reversal of water in a piping system: water flowing backward, from where it should go to where it came from. In a drinking-water system, that means water that has touched something dirty — a boiler, a chemical tank, a swimming pool, a lawn sprayer, a sewer — flowing back into the pipes people drink from. Backflow does not announce itself. It happens silently, it is discovered by illness, and it has caused real outbreaks of disease in real cities. Everything in this course exists because backflow is a public-health problem, not a plumbing inconvenience.</p>
<p>The physics is simple. Water flows from higher pressure to lower pressure. Normally the public supply is the highest pressure in the system, so water flows out of it and into buildings. Backflow happens when that relationship reverses: either the pressure on the far side rises above the supply pressure, or the supply pressure falls below the pressure on the far side. Both reversals are common, both are invisible, and both are what the code's backflow rules are written to defeat.</p>
<p>Your job as a plumber is to find the places where a reversal could happen and to make sure the right protection is in place before it does. That starts with understanding the two ways backflow happens, because each one is stopped by different equipment.</p>
<div class="callout"><strong>Key idea:</strong> Backflow is water flowing backward into the drinking supply. It is silent, it is discovered by illness, and preventing it is the highest-stakes work in plumbing.</div>`
    },
    {
      heading: "Backpressure: Pushed Backward",
      html: `
<p><strong>Backpressure</strong> happens when the pressure on the downstream side of a connection rises above the supply pressure, pushing water backward into the potable system. The classic example is a boiler: a heating boiler operates at a pressure higher than the water supply that feeds it, and if the feed connection has no protection, boiler water — treated with chemicals and full of rust — is pushed back into the drinking water every time the boiler's pressure exceeds the supply's. A pump on the downstream side does the same thing: a booster pump, a fire pump, or a chemical feed pump can all push water backward against the supply.</p>
<p>Backpressure is a pushing force, and it defeats weak protection. A single check valve can hold against a small backpressure for a while, but check valves leak, stick, and wear — which is why the code requires stronger protection where backpressure is possible. The assemblies that handle backpressure are the ones with two check valves and, for high hazards, a relief valve that dumps the reversed water out of the system instead of letting it through.</p>
<p>Where to look for backpressure: any connection to a system that has its own pressure source — boilers, pressurized chemical tanks, irrigation systems with pumps, fire sprinkler systems, and industrial process water. If the downstream system can make pressure, it can make backflow.</p>
<div class="callout"><strong>Key idea:</strong> Backpressure is a push: the downstream system makes more pressure than the supply and shoves its water backward. It defeats single check valves, so it needs assemblies built for it.</div>`
    },
    {
      heading: "Backsiphonage: Pulled Backward",
      html: `
<p><strong>Backsiphonage</strong> happens when the supply pressure falls — and the downstream water is pulled backward by the resulting vacuum, the way a siphon pulls water over a hump. The classic cause is a water main break or a fire hydrant opened nearby: the supply pressure in the street drops, and every hose, tank, and submerged connection in the neighborhood becomes a siphon pulling its contents back into the main. A garden hose left in a bucket of pesticide, a mop sink hose submerged in a mop bucket, a boiler feed line with no protection — all of them become siphons the moment the main loses pressure.</p>
<p>Backsiphonage is a pulling force, and it is the more common of the two, because main breaks and hydrant use happen in every city every year. It is also the one a homeowner creates most easily: a hose-end sprayer left in a puddle, a hose filling a swimming pool with its end underwater, a hand sprayer dropped into a bathtub. None of those look dangerous, and all of them are cross-connections waiting for a pressure drop.</p>
<p>The protection against backsiphonage is to break the siphon: an air gap, a vacuum breaker, or an assembly whose check valve and air inlet stop the reverse flow. The air gap is the only protection that cannot fail mechanically, because it is not a device at all — it is air.</p>
<div class="callout"><strong>Key idea:</strong> Backsiphonage is a pull: the supply pressure drops and the downstream water is siphoned back. A main break or an open hydrant can do it to a whole neighborhood at once.</div>`
    },
    {
      heading: "Cross-Connections and Hazard Levels",
      html: `
<p>A <strong>cross-connection</strong> is any physical connection between the potable water system and any other system — a boiler, a chemical tank, an irrigation system, a pool, a sewer — through which backflow could occur. Cross-connections are everywhere: the hose bibb on the side of a house, the feed line to a boiler, the makeup water to a cooling tower, the fill line to a swimming pool, the connection to a lawn irrigation system. Most of them are legal and necessary; what the code requires is that each one have protection matched to its hazard.</p>
<p>Hazards are ranked. A <strong>high hazard</strong> is a connection to something toxic or disease-causing — chemicals, sewage, boiler treatment, pool water — where backflow could cause illness or death. A <strong>low hazard</strong> is a connection to something that is a nuisance but not a health threat — a change in taste, odor, or color. Some jurisdictions use a middle level for hazards that are unhealthy but not immediately dangerous. The hazard level decides the protection: high hazards need the strongest assemblies (an RPZ or an air gap); low hazards may use a simpler device.</p>
<p>Your first job on any system is to walk it and list the cross-connections. The ones you miss are the ones that hurt people, and the code's backflow rules — and the assemblies in the next module — are the answer to each one.</p>
<div class="callout"><strong>Key idea:</strong> A cross-connection is any link between drinking water and anything else. High hazards need the strongest protection; the hazard level decides the device.</div>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Backflow is water flowing backward into the drinking supply — a public-health emergency, not a nuisance.</li>
<li>Backpressure is a push: downstream pressure exceeds supply pressure (boilers, pumps, pressurized tanks).</li>
<li>Backsiphonage is a pull: supply pressure drops (main break, open hydrant) and downstream water is siphoned back.</li>
<li>A cross-connection is any physical link between potable water and another system; every one needs protection matched to its hazard.</li>
<li>High hazards (toxic, disease-causing) need an RPZ or an air gap; low hazards (taste, odor, color) may use a simpler device.</li>
<li>The air gap is the only protection that cannot fail mechanically — it is air, not a device.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Thinking backflow needs a broken pipe or a flood. A main break a mile away, or a fire hydrant opened down the street, is enough to siphon a submerged hose back into the water main.</div>
<div class="callout"><strong>Common mistake:</strong> Treating a single check valve as backflow protection for a high hazard. Check valves leak and stick; high hazards need an assembly with two checks and, for the highest hazards, a relief valve.</div>
<p><strong>Ready-to-Work link:</strong> This module is the foundation of the ASSE 5110 backflow tester credential: the written exam tests backpressure, backsiphonage, cross-connections, and hazard levels before it ever asks about a test procedure.</p>`
    }
  ],
  keyTerms: [
    { term: "Backflow", def: "The unwanted reversal of water flow in a piping system, carrying contaminants back into the potable water supply." },
    { term: "Backpressure", def: "Backflow caused by downstream pressure exceeding supply pressure — a push (boilers, pumps, pressurized tanks)." },
    { term: "Backsiphonage", def: "Backflow caused by a drop in supply pressure that siphons downstream water backward — a pull (main break, open hydrant)." },
    { term: "Cross-connection", def: "Any physical connection between the potable water system and another system through which backflow could occur." },
    { term: "Potable water", def: "Water safe for drinking; the supply that backflow protection exists to defend." },
    { term: "High hazard", def: "A cross-connection to a toxic or disease-causing substance, where backflow could cause illness or death." },
    { term: "Low hazard", def: "A cross-connection to a substance that is a nuisance (taste, odor, color) but not a health threat." },
    { term: "Air gap", def: "The unobstructed vertical distance between a water outlet and the flood-level rim of the fixture it serves; the only backflow protection that cannot fail mechanically." },
    { term: "Check valve", def: "A one-way valve that lets water flow forward and closes against reverse flow; the basic element of backflow assemblies." },
    { term: "Relief valve", def: "A valve in an RPZ assembly that opens and dumps water when the pressure between the two checks falls too low." },
    { term: "Vacuum breaker", def: "A device that admits air to break a siphon when supply pressure drops, stopping backsiphonage." },
    { term: "Water main", def: "The public water supply piping in the street; a break in it is the classic cause of backsiphonage." },
    { term: "Contamination", def: "The entry of a foreign substance into the potable water supply, usually through a cross-connection." },
    { term: "Backflow prevention assembly", def: "A tested, listed device (RPZ, DCVA, PVB, or SVBA) installed at a cross-connection to stop backflow." }
  ],
  video: {
    title: "Simply Explained: What is Backflow (& Backflow Preventer)?",
    embedUrl: "https://www.youtube.com/embed/Ml5SXcrtLT0",
    note: "A plain, animated explanation of backflow in both directions — sewer backup and drinking-water backflow — including backpressure, backsiphonage, backwater valves, and why a sewer valve is not a substitute for a drinking-water backflow preventer. Watch it, then name one backpressure example and one backsiphonage example from your own home before moving on.",
    more: [
      { title: "What is a Backflow Preventer and How Does It Work", url: "https://www.youtube.com/watch?v=rqJAyZBw2qc" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A water main breaks two streets away. A homeowner has a garden hose submerged in a bucket of weed killer. Explain what happens and why.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The main break drops the supply pressure in the street. Step 2: The pressure drop creates a vacuum that siphons the bucket's contents backward through the hose and into the water main — backsiphonage. Step 3: The weed killer enters the public supply, which is why a hose submerged in a chemical is a cross-connection and needs a vacuum breaker or an air gap.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A heating boiler operates at 30 psi. The water supply feeding it is at 20 psi. What kind of backflow is possible, and in which direction does the water move?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: This is backpressure — the downstream pressure (30 psi) exceeds the supply pressure (20 psi). Step 2: Boiler water, treated with chemicals, is pushed backward into the potable supply. Step 3: The connection needs an assembly built for backpressure — an RPZ or a double check valve assembly, depending on the hazard — not a single check valve.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> List three cross-connections in a typical house and one in a typical commercial building.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: House: the garden hose bibb, the boiler feed line, and the lawn irrigation connection (or the hose filling a pool). Step 2: Commercial: the fill line to a cooling tower, the chemical feed to a boiler, or the water supply to a commercial dishwasher with a chemical dispenser. Step 3: Each one is a legal connection that needs protection matched to its hazard — the hose bibb needs a vacuum breaker, the boiler needs an RPZ or DCVA, the cooling tower needs an RPZ.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A swimming pool fill line and a boiler feed line are both cross-connections. Why does the pool need stronger protection than a decorative fountain's fill line?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The hazard level decides the protection. Step 2: Pool water is chemically treated and is a high hazard — backflow could cause illness. Step 3: A decorative fountain's water is a lower hazard (a nuisance of taste or color). Step 4: So the pool gets an RPZ or an air gap, while the fountain may use a simpler device — the same kind of connection, different hazards, different protection.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A plumber installs a single check valve on a chemical feed tank connection and calls it backflow protection. What is wrong?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: A chemical feed tank is a high hazard — backflow could poison the supply. Step 2: A single check valve is not an approved backflow assembly for a high hazard: check valves leak, stick, and wear, and one check gives no backup and no relief. Step 3: The connection needs an RPZ (or an air gap), which has two checks plus a relief valve that dumps reversed water out of the system.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> Explain in your own words why the air gap is called the only backflow protection that cannot fail mechanically.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: An air gap is not a device — it is a space of air between a water outlet and the fixture it serves. Step 2: It has no moving parts, no springs, no seals, and nothing to wear out, stick, or leak. Step 3: Backflow cannot cross air, so the protection holds as long as the gap is maintained — which is why it is the required protection for the highest hazards.</p>"
    }
  ],
  quiz: [
    {
      q: "Backflow is:",
      choices: ["Water flowing too slowly", "The unwanted reversal of water flow, carrying contaminants back into the potable supply", "A leak in a water main", "Water hammer in a pipe"],
      answer: 1,
      explanation: "Correct: (b). Backflow is reverse flow into the drinking supply. (a) Slow flow is a pressure or sizing problem, not backflow. (c) A main leak causes pressure loss, which can cause backflow, but is not backflow itself. (d) Water hammer is a pressure surge, not reverse flow."
    },
    {
      q: "Backpressure is caused by:",
      choices: ["A drop in supply pressure", "Downstream pressure exceeding supply pressure", "A frozen pipe", "A clogged drain"],
      answer: 1,
      explanation: "Correct: (b). Backpressure is a push from the downstream side. (a) A supply pressure drop causes backsiphonage, not backpressure. (c) A frozen pipe blocks flow; it does not push water backward. (d) A clogged drain is a drainage problem."
    },
    {
      q: "Backsiphonage is most commonly caused by:",
      choices: ["A boiler running at high pressure", "A water main break or an open fire hydrant dropping supply pressure", "A pump on the downstream side", "A chemical feed tank"],
      answer: 1,
      explanation: "Correct: (b). A main break or hydrant use drops supply pressure and siphons water back. (a) A high-pressure boiler causes backpressure. (c) A downstream pump causes backpressure. (d) A chemical tank is a hazard, not a cause of siphonage."
    },
    {
      q: "A cross-connection is:",
      choices: ["A pipe that crosses another pipe", "Any physical connection between potable water and another system through which backflow could occur", "A fitting with four openings", "A connection between two water mains"],
      answer: 1,
      explanation: "Correct: (b). A cross-connection is a link between drinking water and anything else. (a) Pipes crossing without connecting are not cross-connections. (c) A four-way fitting is a cross fitting, not a cross-connection. (d) Two mains connecting is a supply arrangement, not the hazard the term names."
    },
    {
      q: "A high-hazard cross-connection needs:",
      choices: ["No protection", "A single check valve", "An RPZ or an air gap", "A larger pipe"],
      answer: 2,
      explanation: "Correct: (c). High hazards need the strongest protection. (a) Every cross-connection needs protection. (b) A single check valve is not an approved assembly for a high hazard. (d) Pipe size does not stop backflow."
    },
    {
      q: "A garden hose submerged in a bucket of pesticide is dangerous because:",
      choices: ["The hose will burst", "A supply pressure drop can siphon the pesticide back into the water main", "The bucket will overflow", "The hose will clog"],
      answer: 1,
      explanation: "Correct: (b). The submerged hose is a cross-connection, and backsiphonage can pull the chemical into the supply. (a) Bursting is not the hazard. (c) Overflowing is a mess, not a poisoning. (d) Clogging is not the mechanism."
    },
    {
      q: "The air gap is the only backflow protection that cannot fail mechanically because:",
      choices: ["It is made of brass", "It has no moving parts — it is a space of air", "It is tested annually", "It is the most expensive device"],
      answer: 1,
      explanation: "Correct: (b). Air has nothing to wear out, stick, or leak. (a) The material is irrelevant — an air gap is not a device. (c) Testing applies to assemblies, not to air. (d) Cost is not the reason."
    },
    {
      q: "A boiler feed line is a backpressure risk because:",
      choices: ["Boilers use cold water", "The boiler operates at a pressure higher than the supply that feeds it", "Boilers are installed in basements", "Boiler water is hot"],
      answer: 1,
      explanation: "Correct: (b). The boiler's pressure can exceed the supply pressure and push its treated water backward. (a) Boilers use hot water. (c) Location does not create backpressure. (d) Temperature alone does not push water backward — pressure does."
    }
  ],
  studyGuide: `
<h3>Module 1 — Backflow Basics: Quick Reference</h3>
<p><strong>Backflow:</strong> Water flowing backward into the drinking supply. Silent, discovered by illness, the highest-stakes problem in plumbing.</p>
<p><strong>Backpressure = push:</strong> Downstream pressure exceeds supply pressure (boilers, pumps, pressurized tanks). Needs assemblies built for it.</p>
<p><strong>Backsiphonage = pull:</strong> Supply pressure drops (main break, open hydrant) and downstream water is siphoned back. The more common cause.</p>
<p><strong>Cross-connection:</strong> Any physical link between potable water and another system. Walk the system and list them all.</p>
<p><strong>Hazards:</strong> High (toxic, disease-causing) → RPZ or air gap · Low (taste, odor, color) → simpler device.</p>
<p><strong>Air gap:</strong> The only protection with no moving parts — air cannot fail mechanically.</p>
<p><strong>Self-check:</strong> Name one backpressure example and one backsiphonage example from a real building, without looking. If you can, you have the module.</p>
`
};
