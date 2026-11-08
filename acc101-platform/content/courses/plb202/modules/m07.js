// Plumbing 202 - Module 7: Grease Interceptors & Special Waste Systems
module.exports = {
  number: 7,
  slug: "grease-interceptors-special-waste-systems",
  title: "Grease Interceptors & Special Waste Systems",
  estTime: "3–4 hours",
  objectives: [
    "Explain why grease must be intercepted before it reaches the sewer.",
    "Distinguish a hydromechanical grease interceptor from a gravity grease interceptor.",
    "Size a hydromechanical interceptor from a fixture's flow rate and grease capacity.",
    "Describe the maintenance a grease interceptor needs and what happens when it is neglected.",
    "Name the special waste systems the code covers: acid waste, oil, and lint."
  ],
  sections: [
    {
      heading: "Why Grease Is a Sewer Problem",
      html: `
<p>Grease — fats, oils, and grease from cooking, collectively called <strong>FOG</strong> — is liquid when it is hot and solid when it cools. A restaurant kitchen sends hot, greasy water down the drain; by the time that water reaches the sewer main, it has cooled, and the grease has solidified on the pipe walls. Layer by layer, the grease narrows the pipe, until the sewer blocks and backs up into the street or into the building. Grease is the leading cause of sanitary sewer overflows in many cities, and it is a problem the plumber prevents at the source, not one the city cleans up after the fact.</p>
<p>The code's answer is the <strong>grease interceptor</strong>: a device that slows the wastewater down, lets the grease float to the top and the solids settle to the bottom, and passes only the clarified water in the middle on to the sewer. The interceptor does not remove the grease — it holds it, so it can be pumped out and disposed of. An interceptor that is never cleaned is worse than no interceptor at all: it fills with grease, and the grease passes straight through to the sewer.</p>
<p>Grease interceptors are required wherever food is prepared commercially — restaurants, cafeterias, catering kitchens, and any commercial kitchen with a sink, a dishwasher, or a cooking appliance that produces grease. A home kitchen does not need one, but a home that runs a catering business from its kitchen does.</p>
<div class="callout"><strong>Key idea:</strong> Grease is liquid hot and solid cold. It solidifies in the sewer and blocks it. A grease interceptor holds the grease so it can be pumped out — but only if it is cleaned.</div>`
    },
    {
      heading: "Hydromechanical vs. Gravity Interceptors",
      html: `
<p>There are two kinds of grease interceptor, and they work differently. A <strong>hydromechanical grease interceptor</strong> (HGI) is a compact, manufactured unit — usually installed indoors, under or near a sink — that uses flow control and internal baffles to slow the water and separate the grease. It is rated by two numbers: its <strong>flow rate</strong> in gallons per minute (gpm) and its <strong>grease capacity</strong> in pounds (lb), certified under the Plumbing and Drainage Institute (PDI) standard. A typical small unit is rated 20 gpm and 40 lb. The flow control fitting on its inlet is essential: it limits the flow to the unit's rated rate, because a unit overwhelmed by flow cannot separate grease.</p>
<p>A <strong>gravity grease interceptor</strong> (GGI) is a large, buried tank — usually 500 to 1,500 gallons or more — that separates grease by time: the wastewater sits in the tank long enough for the grease to float and the solids to settle. It is rated by <strong>volume</strong>, not by flow, and it is sized from the fixtures it serves and the retention time the code or the authority requires. A gravity interceptor serves a whole kitchen or a whole building, and it is pumped out by a vacuum truck.</p>
<p>The choice between them is a matter of scale and location: a single sink in a small café gets a hydromechanical unit indoors; a full restaurant kitchen gets a gravity interceptor buried outside. Both need the same thing to work — regular pumping — and both fail the same way when it does not happen.</p>
<div class="callout"><strong>Key idea:</strong> Hydromechanical interceptors are compact indoor units rated in gpm and pounds (PDI); gravity interceptors are large buried tanks rated by volume. Scale and location decide which one.</div>`
    },
    {
      heading: "Sizing a Hydromechanical Interceptor",
      html: `
<p>Sizing a hydromechanical interceptor starts with the fixtures it serves. Each fixture that produces grease — a kitchen sink, a dishwasher, a floor sink under a cooking appliance — has a flow rate, and the interceptor's flow rating must be at least the total flow of the fixtures draining through it. A three-compartment sink, for example, is often sized at 20 gpm or more, and the interceptor serving it must match that flow. The flow control fitting on the inlet enforces the rating: it limits the flow into the unit to its rated gpm, so the water moves slowly enough for separation to happen.</p>
<p>The second number is the <strong>grease capacity</strong> in pounds: how much grease the unit can hold before it must be pumped out. A larger capacity means less frequent pumping, but also a larger unit. The capacity is chosen from the kitchen's grease load — a fryer-heavy kitchen produces far more grease than a sandwich shop — and from how often the owner is willing to pay for pumping. The code or the local authority sets the minimum; the kitchen's reality sets the practical size.</p>
<p>The most common sizing mistake is to size the interceptor to the sink alone and forget the dishwasher and the floor sinks. Every fixture that carries grease must drain through the interceptor, and the total flow is the sum of all of them. An interceptor that is undersized for the total flow is overwhelmed on the first busy service and passes grease straight to the sewer.</p>
<div class="callout"><strong>Key idea:</strong> Size by total flow (gpm) of every grease-producing fixture, and by grease capacity (lb) for the kitchen's load. The flow control fitting enforces the rating.</div>`
    },
    {
      heading: "Special Waste: Acid, Oil, and Lint",
      html: `
<p>Grease is not the only waste the code treats specially. <strong>Acid waste</strong> — from laboratories, schools, and industrial processes — corrodes ordinary piping, so it is carried in acid-resistant pipe (polypropylene, glass, or specially lined cast iron) to a <strong>neutralization tank</strong>, where limestone or a chemical neutralizer brings the pH back toward neutral before the waste enters the sewer. Acid waste must never be mixed with ordinary drainage, and its piping must be labeled so no one mistakes it for a normal drain.</p>
<p><strong>Oil waste</strong> — from garages, service stations, and workshops — is intercepted by an <strong>oil separator</strong>, which works like a grease interceptor: it slows the water, lets the oil float, and passes the clarified water on. Oil separators are required wherever vehicles are serviced or fuel is handled, because oil in a sewer is both a blockage and a pollution problem. <strong>Lint interceptors</strong> serve laundries: they catch the lint that would otherwise mat together in the drain and block it, and they are cleaned by hand on a regular schedule.</p>
<p>All three share the interceptor's rule: the device holds the waste so it can be removed, and a device that is never cleaned is worse than none. The plumber's job is to install the right interceptor, size it to the load, and leave the owner with a cleaning schedule they will actually follow.</p>
<div class="callout"><strong>Key idea:</strong> Acid waste needs acid-resistant pipe and a neutralization tank. Oil waste needs an oil separator. Laundry lint needs a lint interceptor. Every interceptor must be cleaned on schedule.</div>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Grease (FOG) is liquid hot and solid cold; it solidifies in sewers and blocks them. Interceptors hold it for removal.</li>
<li>Hydromechanical interceptors are compact indoor units rated in gpm and pounds (PDI), with a flow control fitting on the inlet.</li>
<li>Gravity interceptors are large buried tanks rated by volume, pumped out by vacuum truck.</li>
<li>Size by the total flow of every grease-producing fixture, and by grease capacity for the kitchen's load.</li>
<li>Acid waste: acid-resistant pipe and a neutralization tank. Oil waste: an oil separator. Laundry: a lint interceptor.</li>
<li>Every interceptor must be cleaned on schedule — a full interceptor passes waste straight to the sewer.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Sizing an interceptor to one sink and forgetting the dishwasher and floor sinks. The total flow is the sum of every grease-producing fixture.</div>
<div class="callout"><strong>Common mistake:</strong> Installing a hydromechanical interceptor without its flow control fitting. Without it, the unit is overwhelmed by flow and cannot separate grease.</div>
<p><strong>Ready-to-Work link:</strong> The next module leaves the building entirely — private waste disposal and septic systems — where the same separation principle works on a larger scale.</p>`
    }
  ],
  keyTerms: [
    { term: "FOG", def: "Fats, oils, and grease from cooking; the leading cause of sanitary sewer blockages." },
    { term: "Grease interceptor", def: "A device that slows wastewater, lets grease float and solids settle, and passes clarified water to the sewer." },
    { term: "Hydromechanical grease interceptor (HGI)", def: "A compact indoor interceptor rated by flow (gpm) and grease capacity (lb), certified under the PDI standard." },
    { term: "Gravity grease interceptor (GGI)", def: "A large buried tank that separates grease by retention time; rated by volume." },
    { term: "Flow control fitting", def: "The fitting on an HGI's inlet that limits flow to the unit's rated gpm so separation can happen." },
    { term: "Grease capacity", def: "The weight of grease (in pounds) an HGI can hold before it must be pumped out." },
    { term: "PDI", def: "The Plumbing and Drainage Institute, which certifies hydromechanical grease interceptors." },
    { term: "Sanitary sewer overflow", def: "Sewage backing up out of a sewer, often caused by a grease blockage." },
    { term: "Acid waste", def: "Corrosive wastewater from laboratories and industry, carried in acid-resistant pipe to a neutralization tank." },
    { term: "Neutralization tank", def: "A tank that brings acid waste's pH back toward neutral (with limestone or a chemical) before it enters the sewer." },
    { term: "Oil separator", def: "An interceptor that removes oil from wastewater in garages and service stations." },
    { term: "Lint interceptor", def: "A device that catches lint from laundry wastewater before it can block the drain." },
    { term: "Retention time", def: "The time wastewater spends in a gravity interceptor — long enough for grease to float and solids to settle." }
  ],
  video: {
    title: "How Does a Grease Trap Work?",
    embedUrl: "https://www.youtube.com/embed/EmAiG1KigAM",
    note: "A short, clear animation of how a grease trap separates grease from wastewater — the slowing, the floating, the settling — and why cleaning it matters. Watch it, then explain in one sentence why a full grease trap is worse than no trap at all.",
    more: [
      { title: "Grease Interceptors Sizing Webinar by Plumbing & Drainage Institute", url: "https://www.youtube.com/watch?v=DM8JMMrdDeU" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A restaurant kitchen sends hot, greasy water to the sewer with no interceptor. What happens in the sewer, and why?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The grease is liquid while hot, so it flows freely down the drain. Step 2: In the sewer main it cools and solidifies on the pipe walls, layer by layer. Step 3: The pipe narrows until it blocks, and the sewer backs up into the street or the building — a sanitary sewer overflow. Step 4: The fix is a grease interceptor at the source, holding the grease for removal before it reaches the sewer.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A small café has one three-compartment sink (20 gpm) and one dishwasher (10 gpm) that both produce grease. What is the minimum flow rating for the hydromechanical interceptor serving them?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The interceptor's flow rating must cover every grease-producing fixture draining through it. Step 2: Total flow = 20 + 10 = 30 gpm. Step 3: The interceptor must be rated at least 30 gpm, with a flow control fitting that limits the inlet to that rate. Sizing to the sink alone (20 gpm) would leave the unit overwhelmed whenever the dishwasher runs.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A full restaurant kitchen is being built. Should it use a hydromechanical interceptor or a gravity interceptor, and why?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: A gravity interceptor — a large buried tank rated by volume. Step 2: A full kitchen's grease load and flow are too large for a compact indoor unit, and a gravity interceptor serves the whole kitchen with a long retention time. Step 3: It is pumped out by vacuum truck on a schedule, and its volume is sized from the fixtures and the retention time the authority requires.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A hydromechanical interceptor is installed without its flow control fitting. What will happen?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Without the flow control fitting, the full flow of the fixtures enters the unit faster than its rated gpm. Step 2: The water moves too fast for separation, so the grease passes straight through to the sewer. Step 3: The interceptor is effectively bypassed — it holds almost nothing. Step 4: The fix is to fit the flow control fitting on the inlet, as the manufacturer requires.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A school chemistry lab drains to the ordinary building sewer. What is wrong, and what is the correct system?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Acid waste corrodes ordinary piping and must never be mixed with ordinary drainage. Step 2: The correct system is acid-resistant pipe (polypropylene, glass, or lined cast iron) to a neutralization tank, which brings the pH toward neutral before the waste enters the sewer. Step 3: The acid waste piping must be labeled so no one mistakes it for a normal drain.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A grease interceptor has not been pumped in two years. What is the risk, and what should the owner do?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The interceptor is full of grease, so new grease passes straight through to the sewer — the interceptor is worse than useless, because the owner believes they are protected. Step 2: The risk is a sewer blockage and a sanitary sewer overflow, with fines and cleanup costs. Step 3: The owner should have the interceptor pumped immediately and set a regular pumping schedule based on its grease capacity and the kitchen's load.</p>"
    }
  ],
  quiz: [
    {
      q: "Grease blocks sewers because it:",
      choices: ["Is too hot", "Is liquid when hot and solid when it cools, so it solidifies on pipe walls", "Is heavier than water", "Dissolves in water"],
      answer: 1,
      explanation: "Correct: (b). Grease solidifies as it cools in the sewer. (a) Heat is not the problem — cooling is. (c) Grease floats, it is not heavier than water. (d) Grease does not dissolve in water."
    },
    {
      q: "A hydromechanical grease interceptor is rated by:",
      choices: ["Volume in gallons only", "Flow rate in gpm and grease capacity in pounds", "Pipe diameter", "Temperature"],
      answer: 1,
      explanation: "Correct: (b). HGIs are rated in gpm and pounds (PDI). (a) Volume is the gravity interceptor's rating. (c) Pipe diameter is a sizing input, not the rating. (d) Temperature is not a rating."
    },
    {
      q: "A gravity grease interceptor is rated by:",
      choices: ["Flow rate in gpm", "Volume", "Grease capacity in pounds", "Pipe diameter"],
      answer: 1,
      explanation: "Correct: (b). Gravity interceptors are large tanks rated by volume. (a) Flow rate is the HGI rating. (c) Pounds is the HGI's grease capacity. (d) Pipe diameter is not the rating."
    },
    {
      q: "The flow control fitting on an HGI:",
      choices: ["Increases the flow", "Limits flow to the unit's rated gpm so separation can happen", "Filters the grease", "Heats the water"],
      answer: 1,
      explanation: "Correct: (b). The flow control fitting limits the inlet flow to the rated rate. (a) It limits flow, it does not increase it. (c) Separation is done by the baffles, not the fitting. (d) It does not heat water."
    },
    {
      q: "Acid waste must be carried in:",
      choices: ["Ordinary PVC pipe", "Acid-resistant pipe to a neutralization tank", "Copper pipe", "Cast iron pipe"],
      answer: 1,
      explanation: "Correct: (b). Acid waste needs acid-resistant pipe and a neutralization tank. (a) Ordinary PVC is corroded by acid waste. (c) Copper is corroded by acid. (d) Ordinary cast iron is corroded by acid — only specially lined cast iron is used."
    },
    {
      q: "An oil separator is required where:",
      choices: ["Food is cooked", "Vehicles are serviced or fuel is handled", "Laundry is done", "Acid is used"],
      answer: 1,
      explanation: "Correct: (b). Oil separators serve garages and service stations. (a) Food preparation needs a grease interceptor. (c) Laundry needs a lint interceptor. (d) Acid use needs a neutralization tank."
    },
    {
      q: "A grease interceptor that is never cleaned:",
      choices: ["Works better with age", "Fills with grease and passes it straight to the sewer", "Stops working entirely", "Becomes a gravity interceptor"],
      answer: 1,
      explanation: "Correct: (b). A full interceptor passes grease through. (a) It works worse, not better. (c) It does not stop — it overflows its capacity. (d) It does not change type."
    },
    {
      q: "FOG stands for:",
      choices: ["Fats, oils, and grease", "Flow of gas", "Fixtures of gravity", "Filter of grease"],
      answer: 0,
      explanation: "Correct: (a). FOG is fats, oils, and grease. (b), (c), and (d) are not the term."
    }
  ],
  studyGuide: `
<h3>Module 7 — Grease Interceptors & Special Waste: Quick Reference</h3>
<p><strong>FOG:</strong> Fats, oils, grease — liquid hot, solid cold · Solidifies in sewers and blocks them · Leading cause of sewer overflows.</p>
<p><strong>HGI:</strong> Compact indoor unit · Rated in gpm and pounds (PDI) · Flow control fitting on the inlet enforces the rating.</p>
<p><strong>GGI:</strong> Large buried tank · Rated by volume · Pumped out by vacuum truck · Serves a whole kitchen or building.</p>
<p><strong>Sizing:</strong> Total flow of every grease-producing fixture · Grease capacity for the kitchen's load.</p>
<p><strong>Special waste:</strong> Acid → acid-resistant pipe + neutralization tank · Oil → oil separator · Lint → lint interceptor.</p>
<p><strong>Rule:</strong> Every interceptor must be cleaned on schedule. A full interceptor passes waste straight to the sewer.</p>
<p><strong>Self-check:</strong> Given a kitchen with a sink, a dishwasher, and a floor sink, can you size the interceptor's flow rating and explain why the flow control fitting matters?</p>
`
};
