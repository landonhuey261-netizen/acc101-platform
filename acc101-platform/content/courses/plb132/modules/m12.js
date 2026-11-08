// Plumbing 132 - Module 12: Compressed Air Systems
module.exports = {
  "number": 12,
  "slug": "compressed-air-systems",
  "title": "Compressed Air Systems",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain how a compressed air system works: compressor, receiver, dryer, filter, and regulator.",
    "Describe the piping materials and joining methods for compressed air.",
    "Explain how to size compressed air piping and set the regulator.",
    "State the safety rules for compressed air, including the cleaning rule.",
    "Describe how to maintain a compressed air system: drains, filters, and leak checks."
  ],
  "sections": [
    {
      "heading": "How a Compressed Air System Works",
      "html": "\n<p>A <strong>compressed air system</strong> stores energy as pressurized air and delivers it to tools. The <strong>compressor</strong> squeezes air into a <strong>receiver</strong> (a tank) at a pressure well above what the tools need — commonly 125 to 175 psi in a shop. From the receiver, the air passes through a <strong>dryer</strong> (which removes moisture) and a <strong>filter</strong> (which removes oil and particles), then through the piping to each outlet, where a <strong>regulator</strong> drops the pressure to the working pressure the tool needs.</p>\n<p>Most pneumatic tools run at about <strong>90 psi</strong> — that is the working pressure the regulator is set to at each outlet. The compressor and the receiver run higher so the system has reserve: when several tools run at once, the receiver's stored air covers the demand while the compressor catches up. The <strong>pressure switch</strong> on the compressor turns it on when the receiver pressure falls to the cut-in setting and off when it reaches the cut-out setting.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Compressor and receiver at high pressure for reserve, regulator at each outlet set to the tool's working pressure — about 90 psi for most pneumatic tools. The receiver is the battery; the regulator is the tap.</div>\n<p>Compressed air is not free and it is not clean by itself. A compressor adds heat, oil, and water to the air it compresses: hot air holds moisture, and as the air cools in the receiver and the piping, the moisture condenses into liquid water that must be drained. That is why every receiver and every low point in the piping has a <strong>drain</strong>, and why a dryer and a filter sit between the receiver and the tools.</p>"
    },
    {
      "heading": "Piping Materials and Layout",
      "html": "\n<p>Compressed air piping must hold pressure, resist corrosion, and not fail in a way that throws fragments. The common materials are <strong>black steel</strong> (strong, traditional, but it rusts inside and the rust reaches the tools), <strong>copper</strong> (clean, corrosion-resistant, soldered or brazed), <strong>aluminum</strong> (light, corrosion-resistant, joined with push-to-connect fittings), and <strong>specialty plastic air-line systems</strong> (such as the aluminum-core or nylon systems made for compressed air, joined with compression or push fittings).</p>\n<p>Ordinary PVC and CPVC water pipe must <strong>never</strong> be used for compressed air. Plastic water pipe is rated for water pressure, not for compressed gas, and when it fails under air pressure it shatters into sharp fragments. Only piping and fittings rated for compressed air may be used, and the rating must cover the system's maximum pressure.</p>\n<p>Layout matters: the main runs downhill away from the compressor so condensed water flows to the low-point drains, and each outlet drops down from the top of the main (a <strong>gooseneck</strong> or riser off the top) so water in the main cannot run into the tool. Every low point gets a drain valve, and the receiver gets a drain that is opened daily or fitted with an automatic drain.</p>"
    },
    {
      "heading": "Sizing, Regulators, and Tools",
      "html": "\n<p>Compressed air piping is sized by <strong>flow</strong> (cubic feet per minute, cfm) and by <strong>pressure drop</strong>: the pipe must be large enough that the pressure at the farthest outlet stays close to the regulator's setting when the tools are running. A pipe that is too small starves the tools — an impact wrench that needs 90 psi at 5 cfm will not break a bolt loose at 60 psi. Size for the total demand of the tools that will run at the same time, and size for the longest run, because pressure drop grows with length.</p>\n<p>Each outlet has a <strong>regulator</strong> and a <strong>filter</strong> (often combined as a filter-regulator, or FRL — filter, regulator, lubricator — where a lubricator adds a fine oil mist for air tools that need it). The regulator is set to the tool's working pressure, usually about 90 psi. The <strong>lubricator</strong> is used only for tools that need oil; paint sprayers and blow guns must never get lubricated air.</p>\n<p>Tools are rated by the cfm they use at their working pressure, and the compressor is rated by the cfm it delivers. A compressor that delivers less air than the tools consume will run constantly and the receiver pressure will fall — the tools slow down and the compressor overheats. Match the compressor's delivered cfm to the tools' demand, with a margin.</p>"
    },
    {
      "heading": "Safety and Maintenance",
      "html": "\n<p>Compressed air is dangerous in ways that surprise people who have only used water. Air at 90 psi can inject air under the skin, blow debris into eyes, and rupture an eardrum. <strong>OSHA bars compressed air for cleaning unless it is reduced to less than 30 psi and used with effective chip guarding and personal protective equipment</strong> — never point a blow gun at yourself or anyone else, and never use full line pressure to blow dust off clothing or skin.</p>\n<p>Hoses are a hazard too: a hose under pressure that comes off its fitting whips violently. Use hose fittings rated for the pressure, check hoses for cuts and wear, and never kink a hose to stop the air — use the shutoff valve. The receiver is a pressure vessel: it has a <strong>safety relief valve</strong> that must be tested and must never be plugged or adjusted above its rating, and the receiver must be drained of water so it does not corrode from the inside.</p>\n<p>Maintenance is simple and regular: drain the receiver and the low points daily (or fit automatic drains), change or clean the filters on schedule, check for leaks by listening and by soapy water on the joints, and check the safety relief valve. A leak is not just wasted energy — a compressor that runs to feed leaks wears out early and costs money every hour it runs.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Under 30 psi for cleaning, with chip guarding and PPE — never full line pressure on skin or clothing. And never use ordinary PVC water pipe for compressed air: it shatters.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "\n<p><strong>Takeaways:</strong></p>\n<ul>\n<li>System: compressor → receiver → dryer → filter → piping → regulator at each outlet. Most tools run at about 90 psi; the receiver runs higher for reserve.</li>\n<li>Materials: black steel, copper, aluminum, and specialty air-line systems rated for compressed air. Never ordinary PVC/CPVC water pipe — it shatters under air pressure.</li>\n<li>Layout: mains downhill to low-point drains; outlets drop from the top of the main so water cannot reach the tools.</li>\n<li>Sizing: by cfm demand and pressure drop; match the compressor's delivered cfm to the tools that run together.</li>\n<li>Safety: OSHA cleaning rule — under 30 psi with chip guarding and PPE. Hoses whip when they come off. Receiver relief valve is tested and never plugged.</li>\n<li>Maintenance: drain the receiver and low points, change filters, check for leaks with soapy water, test the relief valve.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Running compressed air in PVC water pipe because it is cheap and easy. It is rated for water, not for compressed gas — when it fails it shatters into sharp fragments.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Using full line pressure to blow dust off skin or clothing. The OSHA limit for cleaning is under 30 psi with chip guarding and PPE — and never point a blow gun at a person.</div>\n<p><strong>Ready-to-Work link:</strong> NCCER 02309, Compressed Air Systems, is the source module for this one, and the Michigan journeyman exam tests piping materials and safety. If you can trace the system, size for cfm and pressure drop, and state the cleaning rule, you have this module — and this course.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Compressor",
      "def": "The machine that squeezes air into a receiver at high pressure."
    },
    {
      "term": "Receiver",
      "def": "A tank that stores compressed air at high pressure, giving the system reserve."
    },
    {
      "term": "Dryer",
      "def": "A device that removes moisture from compressed air before it reaches the tools."
    },
    {
      "term": "Regulator",
      "def": "A valve at each outlet that drops the pressure to the tool's working pressure, usually about 90 psi."
    },
    {
      "term": "FRL",
      "def": "Filter, regulator, lubricator — a combined unit at an outlet that filters, regulates, and (where needed) oils the air."
    },
    {
      "term": "cfm",
      "def": "Cubic feet per minute; the measure of air flow — how much air a tool uses or a compressor delivers."
    },
    {
      "term": "Pressure drop",
      "def": "The loss of pressure along a pipe; a pipe that is too small or too long starves the tools."
    },
    {
      "term": "Gooseneck",
      "def": "An outlet riser taken off the top of the main so condensed water cannot run into the tool."
    },
    {
      "term": "Safety relief valve",
      "def": "A valve on the receiver that opens if the pressure exceeds its rating; it must be tested and never plugged."
    },
    {
      "term": "Chip guarding",
      "def": "A shield or guard that keeps debris from flying back at the user when compressed air is used for cleaning."
    },
    {
      "term": "Lubricator",
      "def": "A device that adds a fine oil mist to the air for tools that need lubrication; never used for paint sprayers or blow guns."
    },
    {
      "term": "Cut-in / cut-out",
      "def": "The receiver pressures at which the compressor's pressure switch turns it on and off."
    },
    {
      "term": "Automatic drain",
      "def": "A drain valve that opens on its own to remove condensed water from a receiver or a low point."
    },
    {
      "term": "Pneumatic tool",
      "def": "A tool powered by compressed air, such as an impact wrench, a nail gun, or a spray gun."
    }
  ],
  "video": {
    "title": "You Need This Shop Piping System // MaxLine 1/2\" Compressed Air Tubing Installation",
    "embedUrl": "https://www.youtube.com/embed/sRtRpkU5Xjs",
    "note": "A real shop air system installed end to end: the compressor and receiver, the runs, the drops from the top of the main, and the outlets with regulators. Watch the layout — mains downhill, outlets off the top.",
    "more": [
      {
        "title": "SHOP Compressor Pipe Setup",
        "url": "https://www.youtube.com/watch?v=8D0vGNpZOwc"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A shop's impact wrench is rated 5 cfm at 90 psi, but it will not break bolts loose. The regulator at the outlet reads 60 psi while the wrench runs. What is wrong?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The tool is starved — it is getting 60 psi instead of the 90 psi it needs. Step 2: The cause is pressure drop: either the pipe to that outlet is too small or too long, the regulator is set too low or is undersized, or the compressor cannot keep up with the demand. Step 3: Check the regulator setting first, then measure the pressure at the receiver while the tool runs — if the receiver holds pressure, the pipe or the regulator is the problem; if the receiver pressure falls, the compressor is undersized.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A shop owner wants to run compressed air in PVC water pipe because it is cheap. What do you tell him?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: No — ordinary PVC and CPVC water pipe must never be used for compressed air. Step 2: Water pipe is rated for water pressure, not for compressed gas, and when it fails under air pressure it shatters into sharp fragments. Step 3: Use piping rated for compressed air — black steel, copper, aluminum, or a specialty air-line system — at a rating that covers the system's maximum pressure.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A blow gun is connected to a 125-psi line and a worker wants to blow dust off his shirt. What is the rule?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: OSHA bars compressed air for cleaning unless it is reduced to <strong>less than 30 psi</strong> and used with effective chip guarding and personal protective equipment. Step 2: Never point a blow gun at yourself or anyone else, and never use full line pressure on skin or clothing. Step 3: Fit a regulator at the blow gun set below 30 psi, use chip guarding and eye protection, and keep the nozzle away from the body.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A new shop air system has its outlets taken off the bottom of the main. What will happen, and what is the fix?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Condensed water in the main will run down into the outlets and into the tools, damaging them. Step 2: Outlets must drop from the <strong>top</strong> of the main (a gooseneck), so water stays in the main and flows to the low-point drains. Step 3: Rework the drops to come off the top, and make sure the main runs downhill to a low-point drain.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A compressor delivers 10 cfm. Two tools that each use 6 cfm at 90 psi will run at the same time. Will the system keep up?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The tools together need 6 + 6 = 12 cfm. Step 2: The compressor delivers 10 cfm, so the system is short by 2 cfm — the receiver pressure will fall while both tools run, and the tools will slow down. Step 3: The fix is a larger compressor, a larger receiver (which only buys time), or running one tool at a time.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A receiver's safety relief valve is dripping, so a worker plugs it with a pipe plug. What is wrong?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Everything — a plugged relief valve removes the receiver's only protection against overpressure. Step 2: If the pressure switch fails and the compressor keeps running, the receiver can rupture. Step 3: Replace the relief valve with one of the same rating, test the new one, and find out why the old one was dripping — a dripping relief valve is a symptom, usually of a pressure switch set too high or a valve that has failed.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Most pneumatic tools run at about:",
      "choices": [
        "30 psi",
        "60 psi",
        "90 psi",
        "175 psi"
      ],
      "answer": 2,
      "explanation": "Correct: (c). About 90 psi is the standard working pressure, set by the regulator at each outlet. (a) 30 psi is the OSHA cleaning limit, not tool pressure. (b) 60 psi starves most tools. (d) 175 psi is a typical receiver pressure, not a tool pressure."
    },
    {
      "q": "Ordinary PVC water pipe must never be used for compressed air because:",
      "choices": [
        "It is too expensive",
        "It is rated for water, not compressed gas, and shatters into sharp fragments when it fails under air pressure",
        "It corrodes",
        "It is too heavy"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Water pipe is not rated for compressed gas and fails catastrophically. (a) PVC is cheap, which is why people are tempted to use it. (c) PVC does not corrode. (d) PVC is light, not heavy."
    },
    {
      "q": "OSHA's rule for using compressed air for cleaning is:",
      "choices": [
        "Full line pressure is fine",
        "Reduced to less than 30 psi, with effective chip guarding and personal protective equipment",
        "Only with a lubricator",
        "Only outdoors"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Under 30 psi with chip guarding and PPE. (a) Full line pressure on skin or clothing is barred. (c) A lubricator is for tools, not for cleaning. (d) The rule applies everywhere, not only outdoors."
    },
    {
      "q": "Outlets on a compressed air main should drop from:",
      "choices": [
        "The bottom of the main",
        "The top of the main, so condensed water cannot run into the tool",
        "The end of the main only",
        "The receiver directly"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A gooseneck off the top keeps water in the main, flowing to the low-point drains. (a) A bottom drop feeds water into the tool. (c) Outlets can be anywhere along the main if they come off the top. (d) The receiver feeds the main, not each outlet."
    },
    {
      "q": "The regulator at an outlet does what?",
      "choices": [
        "Removes moisture",
        "Drops the pressure to the tool's working pressure",
        "Filters out oil",
        "Stores air"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The regulator sets the working pressure, usually about 90 psi. (a) Removing moisture is the dryer's job. (c) Filtering is the filter's job. (d) Storing air is the receiver's job."
    },
    {
      "q": "A compressor that delivers less cfm than the tools consume will:",
      "choices": [
        "Run constantly and let the receiver pressure fall, so the tools slow down",
        "Over-pressurize the system",
        "Make the tools run faster",
        "Have no effect"
      ],
      "answer": 0,
      "explanation": "Correct: (a). The receiver drains, the pressure falls, and the tools starve. (b) An undersized compressor cannot over-pressurize — the pressure switch still cuts it out. (c) Tools slow down, not speed up. (d) The effect is the whole problem."
    },
    {
      "q": "The safety relief valve on a receiver must:",
      "choices": [
        "Be plugged if it drips",
        "Be tested and never plugged or adjusted above its rating",
        "Be removed when the system is idle",
        "Be set to the tool pressure"
      ],
      "answer": 1,
      "explanation": "Correct: (b). It is the receiver's only overpressure protection. (a) Plugging it removes the protection and risks a rupture. (c) It stays on the receiver. (d) It is set to the receiver's maximum pressure, not the tool pressure."
    },
    {
      "q": "Condensed water in a compressed air system is handled by:",
      "choices": [
        "Letting it run into the tools",
        "Drains at the receiver and at every low point, plus a dryer",
        "Heating the piping",
        "A larger compressor"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Drains remove the water and the dryer removes the moisture. (a) Water in the tools damages them. (c) Heating the piping does not remove water. (d) A larger compressor makes more water, not less."
    }
  ],
  "studyGuide": "\n<h3>Module 12 — Compressed Air Systems: Quick Reference</h3>\n<p><strong>System:</strong> Compressor → receiver → dryer → filter → piping → regulator at each outlet. Most tools run at about 90 psi; the receiver runs higher for reserve.</p>\n<p><strong>Materials:</strong> Black steel, copper, aluminum, and specialty air-line systems rated for compressed air. Never ordinary PVC/CPVC water pipe — it shatters under air pressure.</p>\n<p><strong>Layout:</strong> Mains downhill to low-point drains; outlets drop from the top of the main (gooseneck) so water cannot reach the tools.</p>\n<p><strong>Sizing:</strong> By cfm demand and pressure drop. Match the compressor's delivered cfm to the tools that run together.</p>\n<p><strong>Safety:</strong> OSHA cleaning rule — under 30 psi with chip guarding and PPE. Hoses whip when they come off. Receiver relief valve tested and never plugged.</p>\n<p><strong>Maintenance:</strong> Drain the receiver and low points, change filters, check for leaks with soapy water, test the relief valve.</p>\n<p><strong>Course complete:</strong> You can now trace a fuel gas system, size its piping, test it, wire its controls, treat its water, drain its corrosive waste, and run its compressed air. That is Plumbing 132.</p>\n<p><strong>Self-check:</strong> Trace the system from compressor to tool, and state the cleaning rule, without notes.</p>\n"
};
