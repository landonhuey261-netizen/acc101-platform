// ase-a9 - Module 6: Diesel Emissions & Diagnostics
module.exports = {
  "number": 6,
  "slug": "diesel-emissions-diagnostics",
  "title": "Diesel Emissions & Diagnostics",
  "estTime": "3–4 hours",
  "objectives": [
    "Name the pollutants a diesel makes and which aftertreatment part handles each one.",
    "Explain what the NOx sensors before and after the SCR catalyst are telling you.",
    "Use scan-tool data — rail pressure, soot load, DEF level, and codes — to narrow an emissions fault.",
    "Diagnose a DPF that will not regenerate and an SCR system that is not converting NOx.",
    "Explain why an emissions fault often starts as a fuel or air problem upstream."
  ],
  "sections": [
    {
      "heading": "What Comes Out of the Tailpipe",
      "html": "<p>A diesel's exhaust carries four things you must know. <strong>Soot</strong> — solid carbon particles, the black in black smoke — is trapped by the DPF. <strong>Nitrogen oxides (NOx)</strong> — invisible gases formed when combustion runs very hot — are converted by the SCR system. <strong>Hydrocarbons and carbon monoxide</strong> — unburned or partly burned fuel — are cleaned up by the oxidation catalyst. And <strong>water vapor and carbon dioxide</strong> are the normal, unavoidable products of burning fuel.</p>\n<p>The engine computer manages all of it at once. It controls injection timing and quantity to limit how much soot and NOx the engine makes in the first place, and it watches the aftertreatment chain to confirm the cleaners are doing their job. When the computer cannot confirm the job is being done, it sets a code and lights the warning — and on many trucks it will eventually limit power until the fault is fixed.</p>\n<div class=\"callout\"><strong>Key idea:</strong> The engine makes the pollutants; the aftertreatment cleans them. Diagnosis has to ask both questions — is the engine making too much, or is the cleaner failing?</div>"
    },
    {
      "heading": "Reading the Aftertreatment with a Scan Tool",
      "html": "<p>The scan tool turns the aftertreatment chain into numbers you can reason about. <strong>Soot load</strong> tells you how full the DPF is and whether regeneration is due, overdue, or failing. <strong>Exhaust temperatures</strong> before and after the DOC and DPF tell you whether the DOC is making the heat regeneration needs. <strong>DEF level, quality, and dosing rate</strong> tell you whether the SCR system has what it needs to work.</p>\n<p>The two <strong>NOx sensors</strong> — one before the SCR catalyst, one after — are the system's report card. The upstream sensor reports how much NOx the engine is making; the downstream sensor reports how much is left after the SCR reaction. A healthy system shows a big drop between the two. A small drop means the SCR is not converting — and the cause could be the DEF supply, the dosing injector, the catalyst itself, or an engine problem making more NOx than the system can handle.</p>\n<p>Codes follow the same logic. A DPF code may mean the filter, or it may mean the engine is making excess soot because of a fuel or air fault upstream. An SCR code may mean the dosing system, or it may mean a NOx sensor is lying. The code names the system; the data names the part.</p>"
    },
    {
      "heading": "When the DPF Will Not Regenerate and the SCR Will Not Convert",
      "html": "<p>A DPF that keeps demanding regeneration — or that will not complete one — has a short list of causes. First, the driving pattern: short trips that never sustain the heat a regeneration needs. Second, a DOC that cannot make heat, because it is aged, fouled, or starved of the fuel the computer adds to raise temperature. Third, an engine making excess soot — black smoke from an air or fuel fault — that fills the filter faster than regeneration can clear it.</p>\n<p>Fourth, a sensor lying about the filter's condition. The differential pressure sensor measures the pressure drop across the DPF to estimate soot load; if its hoses are clogged with soot or the sensor itself is faulty, the computer may command regenerations too often, too rarely, or not at all. Check the sensor and its hoses before condemning the filter.</p>\n<p>When a filter is genuinely clogged past recovery, the repair is professional cleaning or replacement — and then the root cause must still be fixed, or the new filter clogs the same way. A filter is a symptom as often as it is a fault.</p>\n<p>Start with the simple things: DEF level, DEF quality, and whether the dosing injector is actually spraying. Contaminated DEF — the wrong fluid, diluted fluid, or old fluid — will not convert NOx properly, and the system can detect poor quality and flag it. A dosing injector clogged with crystallized DEF cannot spray at all, and the fix is cleaning or replacement, not a new catalyst.</p>\n<p>Next, check the temperatures. The SCR reaction needs hot exhaust; a cold system — from short trips, a failed thermostat keeping the engine cool, or a DOC that cannot make heat — will not convert NOx no matter how much DEF is sprayed. Then check the NOx sensors themselves: a sensor reading wrong makes the computer misjudge the whole reaction, and sensors do fail.</p>\n<p>Only after the DEF supply, dosing, temperatures, and sensors are proven good should the catalyst itself be suspected. Catalysts are expensive and long-lived; most SCR faults are in the support systems around the catalyst, not in the catalyst itself.</p>"
    },
    {
      "heading": "Upstream First: The Engine Makes the Mess",
      "html": "<p>Here is the habit that separates good diesel diagnosticians from parts-replacers: when an emissions fault appears, look upstream first. A clogged air filter, a boost leak, a dribbling injector, or a failed sensor can make the engine produce far more soot or NOx than the aftertreatment was designed to handle. The aftertreatment is doing its job — it is simply overwhelmed.</p>\n<p>The pattern to watch for is an emissions code with a drivability symptom: black smoke, lost power, rough running, or poor fuel economy alongside the warning light. That combination almost always means the root cause is in the engine, not in the tailpipe. Fix the engine first, clear the codes, and let the aftertreatment prove itself on a proper drive — many emissions codes never come back once the upstream fault is gone.</p>\n<p>This is also why the scan tool's data matters more than its codes. A code says which system complained; the data — soot load, temperatures, NOx readings, rail pressure, air flow — says why. Read the data, form a theory, test the theory, and only then replace a part.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Pollutants: soot → DPF; NOx → SCR + DEF; hydrocarbons and carbon monoxide → DOC.</li>\n<li>NOx sensors before and after the SCR catalyst are the report card: a big drop means conversion is working.</li>\n<li>DPF that will not regenerate: driving pattern, DOC heat, excess soot from upstream, or a lying differential pressure sensor.</li>\n<li>SCR not converting: DEF level and quality, dosing injector, exhaust temperature, NOx sensors — catalyst last.</li>\n<li>An emissions code with a drivability symptom usually means the root cause is upstream, in the engine.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Replacing the DPF or the SCR catalyst first. Both are expensive and long-lived; most faults are in the support systems — sensors, dosing, heat, driving pattern — or upstream in the engine.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Reading the code and stopping. The code names the complaining system; the data names the fault. Soot load, temperatures, and NOx readings are the diagnosis.</div>\n<p><strong>Ready-to-work link:</strong> If you can explain what each aftertreatment sensor is telling you and why upstream faults come first, you have this module. Module 7 covers the computer itself: diesel electronic controls.</p>"
    }
  ],
  "keyTerms": [
    { "term": "NOx sensor", "def": "A sensor that measures nitrogen oxides in the exhaust; one sits before the SCR catalyst and one after, so the computer can judge conversion." },
    { "term": "Soot load", "def": "The scan-tool reading of how full the DPF is with trapped soot; it drives regeneration requests." },
    { "term": "Differential pressure sensor", "def": "The sensor that measures the pressure drop across the DPF to estimate how full it is." },
    { "term": "DEF dosing injector", "def": "The injector that sprays a measured dose of DEF into the exhaust upstream of the SCR catalyst." },
    { "term": "DEF quality sensor", "def": "The sensor that checks the DEF in the tank is the correct fluid and concentration." },
    { "term": "Exhaust temperature sensor", "def": "A sensor reporting exhaust temperature at points along the aftertreatment chain, used to manage regeneration and SCR." },
    { "term": "Conversion efficiency", "def": "How much of the NOx entering the SCR catalyst is converted; judged by comparing the two NOx sensors." },
    { "term": "Derate", "def": "The computer limiting engine power when an emissions fault is ignored, to protect the aftertreatment system." },
    { "term": "Active regeneration", "def": "A computer-commanded regeneration that raises exhaust temperature to burn soot out of the DPF." },
    { "term": "Passive regeneration", "def": "Soot burning off on its own during sustained hot driving, with no command from the computer." },
    { "term": "Crystallized DEF", "def": "Dried DEF deposits that can clog the dosing injector and lines when DEF evaporates." },
    { "term": "Upstream fault", "def": "A fault in the engine (air, fuel, or sensors) that makes excess pollutants the aftertreatment cannot handle." }
  ],
  "video": {
    "title": "How Does the AdBlue SCR DEF System Work? Explained",
    "embedUrl": "https://www.youtube.com/embed/gzqOXVLyfEc",
    "note": "A clear explanation of the SCR system: DEF injection, the ammonia reaction over the catalyst, and how the level sensor and computer watch the system. Watch for the parts this module calls the usual suspects — dosing, temperature, and sensors — and where they sit in the chain.",
    "more": [
      { "title": "Why Diesel Trucks Carry a Tank of Urea", "url": "https://www.youtube.com/watch?v=B5l0bfHXAH4" }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> The scan tool shows the upstream NOx sensor reading high and the downstream sensor reading nearly as high. What does that tell you, and what are the two main possibilities?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The SCR system is barely converting NOx — the drop across the catalyst is small. Step 2: Either the SCR system is not working (DEF supply, dosing, temperature, or catalyst) or the engine is making far more NOx than the system can handle — check the DEF system and the engine's combustion first, and suspect the catalyst last.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A DPF warning keeps returning even though the truck gets regular highway drives. Name two causes other than the driving pattern, and how you would check each.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A DOC that cannot make heat — check exhaust temperatures before and after the DOC during a regeneration attempt. Step 2: A lying differential pressure sensor — check its hoses for soot clogging and compare its reading with the soot load the computer reports. (Excess soot from an upstream air or fuel fault is the third cause to check.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> An SCR fault code appears together with black smoke and lost power. Where is the root cause most likely, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Upstream, in the engine — the black smoke and lost power are drivability symptoms, not aftertreatment symptoms. Step 2: An air or fuel fault is making excess soot and NOx that overwhelm the SCR system, so fix the engine fault first and let the aftertreatment prove itself afterward.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> The DEF tank is full, but the SCR system is not converting NOx. List three things to check before suspecting the catalyst.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: DEF quality — contaminated or diluted fluid will not convert NOx. Step 2: The dosing injector — crystallized DEF can clog it so nothing sprays. Step 3: Exhaust temperature and the NOx sensors — a cold system cannot react, and a lying sensor makes the computer misjudge the whole reaction.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Explain what a derate is and why the computer does it when an emissions fault is ignored.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A derate is the computer limiting engine power when an emissions fault is left unfixed. Step 2: It protects the aftertreatment system from damage and limits the pollutants the truck can produce — and it is the truck's way of insisting the fault be repaired rather than ignored.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A technician replaces a clogged DPF, and the new filter clogs within weeks. What was missed, and what should have been checked?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The root cause was missed — the filter was a symptom, not the fault. Step 2: The technician should have checked the driving pattern, whether the DOC makes regeneration heat, whether the engine is making excess soot from an air or fuel fault, and whether the differential pressure sensor is reading correctly.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The two NOx sensors in an SCR system are used to:",
      "choices": ["Measure DEF level", "Compare NOx before and after the catalyst to judge conversion", "Control the glow plugs", "Measure soot load"],
      "answer": 1,
      "explanation": "Correct: (b). The drop between the upstream and downstream readings is the system's report card. (a) DEF level has its own sensor. (c) Glow plugs are a cold-start circuit. (d) Soot load comes from the differential pressure sensor."
    },
    {
      "q": "A DPF that will not complete regeneration on a truck that only makes short trips is most likely suffering from:",
      "choices": ["A failed SCR catalyst", "A driving pattern that never sustains the heat regeneration needs", "Contaminated DEF", "A shorted glow plug"],
      "answer": 1,
      "explanation": "Correct: (b). Short trips never get the exhaust hot enough for long enough. (a) The SCR catalyst does not affect DPF regeneration. (c) DEF is an SCR fluid, not a DPF fluid. (d) Glow plugs affect cold starting, not regeneration."
    },
    {
      "q": "The differential pressure sensor measures:",
      "choices": ["Fuel pressure in the rail", "The pressure drop across the DPF, to estimate soot load", "Turbo boost pressure", "Oil pressure"],
      "answer": 1,
      "explanation": "Correct: (b). The pressure difference across the filter rises as soot builds up. (a) Rail pressure has its own sensor. (c) Boost is measured by its own sensor. (d) Oil pressure is measured in the lubrication system."
    },
    {
      "q": "An emissions code that appears together with black smoke and lost power most likely means:",
      "choices": ["The aftertreatment has failed and must be replaced", "The root cause is upstream in the engine — an air or fuel fault making excess pollutants", "The DEF tank is empty", "The glow plugs have failed"],
      "answer": 1,
      "explanation": "Correct: (b). Drivability symptoms alongside an emissions code point upstream — fix the engine first. (a) The aftertreatment is usually overwhelmed, not broken. (c) An empty DEF tank sets its own warning. (d) Glow plugs do not cause black smoke under load."
    },
    {
      "q": "Before suspecting a failed SCR catalyst, a technician should check:",
      "choices": ["DEF quality, the dosing injector, exhaust temperature, and the NOx sensors", "Only the catalyst's age", "The air filter", "The starter motor"],
      "answer": 0,
      "explanation": "Correct: (a). Most SCR faults are in the support systems — fluid, dosing, heat, sensors — not the catalyst. (b) Age alone proves nothing. (c) The air filter matters for soot, not directly for SCR conversion. (d) The starter has nothing to do with emissions."
    },
    {
      "q": "Crystallized DEF can cause an SCR fault by:",
      "choices": ["Freezing the fuel filter", "Clogging the dosing injector so no DEF sprays", "Cracking the DPF", "Shorting the glow plugs"],
      "answer": 1,
      "explanation": "Correct: (b). Dried DEF deposits block the dosing injector and lines. (a) DEF never enters the fuel system. (c) Crystallized DEF does not crack the DPF. (d) DEF and glow plugs are unrelated systems."
    },
    {
      "q": "Soot in diesel exhaust is handled by the:",
      "choices": ["SCR catalyst", "DOC", "DPF", "DEF tank"],
      "answer": 2,
      "explanation": "Correct: (c). The diesel particulate filter traps soot. (a) The SCR handles NOx. (b) The DOC burns hydrocarbons and carbon monoxide. (d) The DEF tank only stores fluid."
    },
    {
      "q": "A derate is:",
      "choices": ["A type of regeneration", "The computer limiting engine power when an emissions fault is ignored", "A glow plug test", "A fuel filter change"],
      "answer": 1,
      "explanation": "Correct: (b). Derate limits power to protect the aftertreatment and limit pollutants until the fault is repaired. (a) Regeneration cleans the DPF. (c) Glow plug testing is a cold-start check. (d) A filter change is routine service."
    }
  ],
  "studyGuide": "\n<h3>Module 6 — Diesel Emissions & Diagnostics: Quick Reference</h3>\n<p><strong>Pollutants:</strong> Soot → DPF · NOx → SCR + DEF · HC and CO → DOC.</p>\n<p><strong>NOx sensors:</strong> Upstream = what the engine makes · Downstream = what is left · Big drop = healthy conversion.</p>\n<p><strong>DPF will not regen:</strong> Short trips · DOC cannot make heat · Excess soot upstream · Lying differential pressure sensor.</p>\n<p><strong>SCR not converting:</strong> DEF level/quality · Dosing injector (crystallized DEF) · Exhaust temperature · NOx sensors · Catalyst last.</p>\n<p><strong>Rule:</strong> Emissions code + drivability symptom = look upstream first. The code names the system; the data names the part.</p>\n<p><strong>Watch out:</strong> A new DPF or catalyst will clog or fail the same way if the root cause is not fixed.</p>\n<p><strong>Self-check:</strong> Explain the NOx sensor report card and the derate to a classmate.</p>\n"
};
