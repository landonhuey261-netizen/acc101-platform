// Plumbing 132 - Module 3: Sizing Gas Piping: Load, Length & Pressure Drop
module.exports = {
  "number": 3,
  "slug": "sizing-gas-piping-load-length-pressure-drop",
  "title": "Sizing Gas Piping: Load, Length & Pressure Drop",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain the three inputs to gas pipe sizing: total load, longest length, and pressure drop.",
    "Use IFGC Table 402.2 to find an appliance's approximate gas input.",
    "Convert an appliance's Btu-per-hour rating to cubic feet per hour.",
    "Use IFGC Table 402.4(2) and the longest-length method to size a gas pipe run.",
    "Explain why an undersized gas pipe starves appliances and how to recognize it."
  ],
  "sections": [
    {
      "heading": "The Three Inputs",
      "html": "\n<p>Gas pipe sizing answers one question: will every appliance get enough gas when all of them run at once? The code's method uses three inputs. <strong>First, the total load:</strong> the sum of every appliance's gas input, in Btu per hour, converted to cubic feet per hour. <strong>Second, the longest length:</strong> the distance from the meter to the most remote appliance, in feet. <strong>Third, the pressure drop:</strong> how much pressure the system is allowed to lose between the meter and the appliance — for the common residential table, 0.5 inch of water column.</p>\n<p>The code's rule is that the total connected load is used as the basis for sizing, assuming all appliances could be operating at full capacity at the same time (IFGC 402.2). There is no diversity factor for residential gas sizing — you do not get to assume the furnace and the water heater will never run together, because on a cold morning they will.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Load, length, and pressure drop. Every gas sizing problem is those three numbers and a table. If you have the load wrong, the length wrong, or the wrong table, the pipe will be wrong.</div>\n<p>The tables are built for a specific gas, a specific inlet pressure, a specific pressure drop, and a specific pipe material. The common residential table — IFGC Table 402.4(2) — is for Schedule 40 metallic pipe, natural gas, inlet pressure less than 2 psi, pressure drop 0.5 inch w.c., specific gravity 0.60. Use a different table for CSST, for PE, for propane, or for a different pressure drop.</p>"
    },
    {
      "heading": "Load: From Btu per Hour to Cubic Feet per Hour",
      "html": "\n<p>Appliance ratings are in <strong>Btu per hour</strong>. The tables work in <strong>cubic feet per hour (cfh)</strong>. The conversion is the gas's energy content: natural gas carries about 1,000 Btu per cubic foot, so divide the Btu-per-hour rating by 1,000 to get cfh. A furnace at 100,000 Btu per hour needs 100 cfh. A water heater at 50,000 needs 50 cfh. A range at 65,000 needs 65 cfh.</p>\n<p>Where the rating is not on the appliance, IFGC Table 402.2 gives approximate inputs for typical appliances: a single-family warm-air furnace 100,000 Btu per hour; a hydronic boiler 100,000 (120,000 for space and water heating); a storage water heater, 30- to 40-gallon tank, 35,000; a 50-gallon tank, 50,000; a tankless water heater at 2 gallons per minute, 142,800; a free-standing range, 65,000; a clothes dryer, 35,000; a direct-vent gas fireplace, 40,000. Always use the rating on the appliance when it is available — the table is for estimating when it is not.</p>\n<p>Add the loads for every appliance the pipe section serves. A trunk section that feeds the furnace, the water heater, and the range carries 100 + 50 + 65 = 215 cfh. A branch that feeds only the range carries 65 cfh. Each section is sized by the load it carries.</p>"
    },
    {
      "heading": "The Longest-Length Method",
      "html": "\n<p>The <strong>longest-length method</strong> (IFGC 402.4.1) sizes every section of pipe using the longest length of piping from the point of delivery to the most remote outlet, and the load of the section. The longest length is measured from the meter to the farthest appliance, and you add an allowance for fittings — a common rule is to add 50 percent to the measured length, or to measure the developed length including fittings, per the code's method.</p>\n<p>Worked example with IFGC Table 402.4(2), Schedule 40 metallic pipe, natural gas, 0.5 in. w.c. drop. The table gives capacity in cubic feet per hour for each pipe size at each length. At a 40-foot length: 1/2-inch pipe carries 81 cfh, 3/4-inch carries 170 cfh, 1-inch carries 320 cfh. At a 30-foot length: 1/2-inch carries 95 cfh, 3/4-inch 199 cfh, 1-inch 374 cfh. At a 10-foot length: 1/2-inch 172 cfh, 3/4-inch 360 cfh, 1-inch 678 cfh.</p>\n<p>Now size a house. The meter feeds a furnace (100 cfh) 40 feet away and a water heater (50 cfh) 30 feet away. The longest length is 40 feet. The trunk section carries both appliances: 150 cfh at 40 feet. The table says 3/4-inch carries 170 cfh at 40 feet — enough for 150. So the trunk is 3/4-inch. The branch to the furnace carries 100 cfh at 40 feet: 3/4-inch (170 cfh) is enough. The branch to the water heater carries 50 cfh at 30 feet: 1/2-inch carries 95 cfh at 30 feet — enough. If the longest length falls between table rows, use the next higher row.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Size each section by the load it carries and the longest length of the system. The trunk carries everything; the branches carry only their own appliance. A section that is big enough for its own load but too small for the trunk load will starve the far appliances.</div>"
    },
    {
      "heading": "What Undersized Pipe Does",
      "html": "\n<p>An undersized gas pipe does not fail loudly. It starves the appliances quietly. The furnace's burner flame lifts or goes out on a cold night when the water heater fires at the same time. The tankless water heater delivers lukewarm water when another appliance runs. The range's burners go weak when the dryer starts. The symptom is always the same: an appliance that works fine alone and fails when another appliance runs.</p>\n<p>The fix is to resize the pipe — there is no adjustment, no regulator setting, and no burner tweak that makes up for a pipe that cannot carry the load. That is why the sizing is done before the pipe is installed, and why the inspector checks it: a gas pipe that is too small is a defect that is expensive to fix after the walls are closed.</p>\n<p>Also check the meter. The meter has a capacity in cubic feet per hour, and the total connected load must fit it. A house with a furnace, a water heater, a range, and a tankless heater can exceed a standard residential meter's capacity — and then the utility must set a larger meter. Sizing the pipe without checking the meter is half the job.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "\n<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Three inputs: total load (cfh), longest length (ft), pressure drop (0.5 in. w.c. for the common table).</li>\n<li>Convert Btu per hour to cfh by dividing by 1,000 for natural gas.</li>\n<li>IFGC Table 402.2 approximate inputs: furnace 100,000; boiler 100,000; 30–40-gal water heater 35,000; 50-gal 50,000; tankless at 2 gpm 142,800; range 65,000; dryer 35,000; fireplace 40,000.</li>\n<li>Longest-length method (IFGC 402.4.1): size each section by its own load at the system's longest length; use the next higher table row when the length falls between rows.</li>\n<li>Table 402.4(2) at 40 ft: 1/2-in. 81 cfh, 3/4-in. 170 cfh, 1-in. 320 cfh. At 30 ft: 95, 199, 374. At 10 ft: 172, 360, 678.</li>\n<li>Undersized pipe starves appliances when they run together. Check the meter capacity too.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Sizing each section by its own length instead of the longest length. The branch to a nearby appliance is sized at the system's longest length, not at its own short run — because the pressure drop is set by the longest run.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Using a diversity factor — assuming not all appliances will run at once. The code assumes they can, and on a cold morning they will.</div>\n<p><strong>Ready-to-Work link:</strong> Gas sizing is a core Michigan journeyman exam skill, and the lab for this course drills it. If you can convert Btu to cfh and size a trunk and two branches from Table 402.4(2), you have this module.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Cubic foot per hour (cfh)",
      "def": "The volume of gas flow in one hour; the unit the gas sizing tables work in."
    },
    {
      "term": "Longest-length method",
      "def": "The IFGC sizing method (402.4.1) that sizes each pipe section by its load at the system's longest length."
    },
    {
      "term": "Pressure drop",
      "def": "The loss of gas pressure between the meter and the appliance; the common residential table allows 0.5 inch w.c."
    },
    {
      "term": "Total connected load",
      "def": "The sum of every appliance's gas input, used as the basis for pipe sizing, assuming all could run at once."
    },
    {
      "term": "IFGC Table 402.2",
      "def": "The table of approximate gas inputs for typical appliances, used when the rating is not on the appliance."
    },
    {
      "term": "IFGC Table 402.4(2)",
      "def": "The sizing table for Schedule 40 metallic pipe, natural gas, under 2 psi inlet, 0.5 in. w.c. pressure drop, specific gravity 0.60."
    },
    {
      "term": "Specific gravity",
      "def": "A gas's density compared with air; the sizing tables are built for natural gas at 0.60."
    },
    {
      "term": "Btu per hour",
      "def": "An appliance's gas input rating; divide by 1,000 to get cubic feet per hour for natural gas."
    },
    {
      "term": "Trunk",
      "def": "The main gas pipe section that carries the load of several appliances."
    },
    {
      "term": "Branch",
      "def": "A gas pipe section that carries the load of one appliance or a small group."
    },
    {
      "term": "Meter capacity",
      "def": "The maximum cubic feet per hour a gas meter can deliver; the total connected load must fit it."
    },
    {
      "term": "Developed length",
      "def": "The total length of a pipe run including the equivalent length of its fittings."
    }
  ],
  "video": {
    "title": "Gas Pipe Sizing: Don't Starve Your Appliances! (Plumbing Tips)",
    "embedUrl": "https://www.youtube.com/embed/5yfi6PCjk7Y",
    "note": "A plumber sizes a gas system on camera: load, longest length, and the table — and shows what happens to appliances when the pipe is too small. Follow the numbers, then do the worked example in this module yourself.",
    "more": [
      {
        "title": "How to Size Your Gas Lines",
        "url": "https://www.youtube.com/watch?v=zjJXVGjs0hQ"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A furnace is rated at 100,000 Btu per hour and a water heater at 50,000 Btu per hour, both on natural gas. What is the total load in cubic feet per hour?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Convert each appliance: 100,000 ÷ 1,000 = 100 cfh; 50,000 ÷ 1,000 = 50 cfh. Step 2: Add them: 100 + 50 = <strong>150 cfh</strong>. Step 3: That is the load the trunk section must carry.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Using IFGC Table 402.4(2), what is the capacity of 3/4-inch Schedule 40 pipe at a 40-foot length?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Find the 40-foot row in Table 402.4(2). Step 2: Read across to the 3/4-inch column. Step 3: The capacity is <strong>170 cubic feet per hour</strong>. (For comparison, 1/2-inch carries 81 cfh and 1-inch carries 320 cfh at the same length.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A house has a furnace (100 cfh) 40 feet from the meter and a water heater (50 cfh) 30 feet from the meter. Size the trunk section using the longest-length method.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: The longest length is 40 feet. Step 2: The trunk carries both appliances: 100 + 50 = 150 cfh at 40 feet. Step 3: Table 402.4(2) at 40 feet: 1/2-inch carries 81 cfh (too small), 3/4-inch carries 170 cfh (enough). Step 4: The trunk is <strong>3/4-inch</strong>.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> The longest run in a house measures 55 feet. Which table row do you use, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The table has rows at 50 feet and 60 feet — 55 feet falls between them. Step 2: Use the <strong>next higher row, 60 feet</strong>, because the longer row gives a smaller capacity and is the safe choice. Step 3: Sizing from the 50-foot row would overstate the pipe's capacity at 55 feet.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A tankless water heater is rated at 199,000 Btu per hour and sits 30 feet from the meter. What size Schedule 40 pipe does it need at minimum, using Table 402.4(2)?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Convert the load: 199,000 ÷ 1,000 = 199 cfh. Step 2: Table 402.4(2) at 30 feet: 1/2-inch carries 95 cfh (too small), 3/4-inch carries 199 cfh (exactly the load — no margin), 1-inch carries 374 cfh. Step 3: 3/4-inch meets the load exactly, but with no margin; a prudent sizing is <strong>1-inch</strong>. At minimum the table answer is 3/4-inch, and the professional answer is 1-inch.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A furnace works fine alone but its flame goes out when the water heater fires. The gas pipe was sized for the furnace only. What is wrong?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The pipe is undersized — it was sized for one appliance, not the total connected load. Step 2: When both appliances run, the pipe cannot carry the combined load, the pressure at the furnace drops, and the flame fails. Step 3: The fix is to resize the pipe by the longest-length method for the total load; there is no adjustment that makes an undersized pipe carry more gas.</p>"
    }
  ],
  "quiz": [
    {
      "q": "To convert a natural gas appliance's Btu-per-hour rating to cubic feet per hour, you:",
      "choices": [
        "Multiply by 1,000",
        "Divide by 1,000",
        "Multiply by 27.7",
        "Divide by 60"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Natural gas carries about 1,000 Btu per cubic foot, so Btu per hour ÷ 1,000 = cfh. (a) reverses the conversion. (c) 27.7 converts psi to inches of water column. (d) 60 is minutes per hour, not part of this conversion."
    },
    {
      "q": "The longest-length method sizes each pipe section by:",
      "choices": [
        "Its own length only",
        "Its own load at the system's longest length",
        "The smallest appliance it serves",
        "The meter's capacity alone"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Each section is sized by the load it carries, at the longest length from the meter to the most remote outlet. (a) ignores the system pressure drop set by the longest run. (c) The section carries its own load, not the smallest appliance's. (d) Meter capacity is a separate check."
    },
    {
      "q": "In IFGC Table 402.4(2) at a 40-foot length, 3/4-inch Schedule 40 pipe carries:",
      "choices": [
        "81 cfh",
        "170 cfh",
        "320 cfh",
        "657 cfh"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 170 cfh. (a) 81 cfh is the 1/2-inch capacity at 40 feet. (c) 320 cfh is the 1-inch capacity at 40 feet. (d) 657 cfh is the 1-1/4-inch capacity at 40 feet."
    },
    {
      "q": "IFGC Table 402.2 lists a 50-gallon storage water heater at about:",
      "choices": [
        "35,000 Btu per hour",
        "50,000 Btu per hour",
        "100,000 Btu per hour",
        "142,800 Btu per hour"
      ],
      "answer": 1,
      "explanation": "Correct: (b). About 50,000 Btu per hour. (a) 35,000 is the 30-to-40-gallon storage heater. (c) 100,000 is a single-family furnace. (d) 142,800 is a tankless heater at 2 gallons per minute."
    },
    {
      "q": "When the longest run falls between two table rows, you use:",
      "choices": [
        "The lower row",
        "The next higher row",
        "The average of the two rows",
        "The row for the shortest run"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The next higher row, because it gives the smaller capacity and is the safe choice. (a) The lower row overstates capacity. (c) Averaging is not a code method. (d) The shortest run is not the basis for sizing."
    },
    {
      "q": "The code assumes for gas sizing that:",
      "choices": [
        "Only one appliance runs at a time",
        "All appliances could be operating at full capacity at the same time",
        "Only the largest appliance matters",
        "The furnace never runs with the water heater"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The total connected load is the basis, with no diversity factor (IFGC 402.2). (a) and (d) assume appliances never run together — on a cold morning they do. (c) ignores the smaller appliances' load."
    },
    {
      "q": "An appliance that works fine alone but fails when another appliance runs most likely has:",
      "choices": [
        "A bad thermostat",
        "An undersized gas pipe that cannot carry the combined load",
        "A blocked vent",
        "A faulty igniter"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The pipe carries one appliance's load but not both together — the classic undersized-pipe symptom. (a) A bad thermostat would fail alone too. (c) A blocked vent affects the appliance regardless of other appliances. (d) A faulty igniter would fail on its own."
    },
    {
      "q": "A trunk section feeding a 100-cfh furnace and a 50-cfh water heater carries:",
      "choices": [
        "50 cfh",
        "100 cfh",
        "150 cfh",
        "200 cfh"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 100 + 50 = 150 cfh. (a) counts only the water heater. (b) counts only the furnace. (d) double-counts the load."
    }
  ],
  "studyGuide": "\n<h3>Module 3 — Sizing Gas Piping: Quick Reference</h3>\n<p><strong>Three inputs:</strong> Total load (cfh) · Longest length (ft) · Pressure drop (0.5 in. w.c. for Table 402.4(2)).</p>\n<p><strong>Convert:</strong> Natural gas cfh = Btu per hour ÷ 1,000.</p>\n<p><strong>Table 402.2 approximate inputs:</strong> Furnace 100,000 · Boiler 100,000 · 30–40-gal WH 35,000 · 50-gal WH 50,000 · Tankless at 2 gpm 142,800 · Range 65,000 · Dryer 35,000 · Fireplace 40,000 (Btu/hr).</p>\n<p><strong>Table 402.4(2) capacities (cfh):</strong> At 10 ft: 1/2-in. 172, 3/4-in. 360, 1-in. 678 · At 30 ft: 95, 199, 374 · At 40 ft: 81, 170, 320 · At 50 ft: 72, 151, 284 · At 60 ft: 65, 137, 257.</p>\n<p><strong>Longest-length method (IFGC 402.4.1):</strong> Size each section by its own load at the system's longest length. Length between rows → use the next higher row.</p>\n<p><strong>Watch out:</strong> No diversity factor — size for all appliances at once. Check the meter capacity too.</p>\n<p><strong>Self-check:</strong> Size a trunk and two branches for a furnace, a water heater, and a range, without notes.</p>\n"
};
