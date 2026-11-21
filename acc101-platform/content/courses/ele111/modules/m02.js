module.exports = {
  "number": 2,
  "slug": "pv-system-types-grid-tied-off-grid-hybrid",
  "title": "PV System Types: Grid-Tied, Off-Grid & Hybrid",
  "estTime": "3–4 hours",
  "objectives": [
    "Compare grid-tied, off-grid, and hybrid PV systems.",
    "Explain anti-islanding and why a grid-tied inverter shuts down in an outage.",
    "Describe the parts of an off-grid system: array, charge controller, batteries, inverter.",
    "Explain what a hybrid system adds to a grid-tied system.",
    "Help a customer choose the right system type for their situation."
  ],
  "sections": [
    {
      "heading": "Grid-Tied: The Most Common System",
      "html": "<p>A <strong>grid-tied</strong> (grid-interactive) system connects the solar array to the utility grid through an inverter. During the day the array powers the house, and any extra electricity flows out to the grid; at night the house draws from the grid as usual. There are no batteries in a basic grid-tied system, which keeps the cost down and the maintenance simple — and it is the most common residential system in Michigan and across the United States.</p><p>The defining safety feature of a grid-tied inverter is <strong>anti-islanding</strong>: if the grid goes down, the inverter must shut down within seconds and stop feeding power into the grid. The reason is simple and serious — a lineman repairing the outage must not be shocked by a house that is still feeding power into a dead line. That means a basic grid-tied system does not keep the lights on during a power outage, no matter how sunny it is. A homeowner who expects backup power from a grid-tied system without batteries will be disappointed at the first outage, and the technician must say so plainly before the system is sold.</p>"
    },
    {
      "heading": "Off-Grid: Power Where There Is No Grid",
      "html": "<p>An <strong>off-grid</strong> (stand-alone) system serves a building that has no utility connection — a cabin, a remote site, a farm building. The system has four parts: the array, a <strong>charge controller</strong> that manages charging the batteries, the <strong>battery bank</strong> that stores energy for the night and for cloudy days, and an <strong>inverter</strong> that turns the battery's DC into AC for the house. The batteries are the heart of the system and its biggest cost: they must be sized for the loads, for the number of cloudy days the system must ride through (days of autonomy), and for the fact that a battery should not be drained completely.</p><p>Off-grid design is about the load first and the array second. The technician starts with an energy audit — every load, its watts, and its hours per day — and sizes the battery bank and the array from that audit. An off-grid system that is undersized fails quietly: the batteries run flat, the inverter shuts down, and the house goes dark. An off-grid system that is oversized costs far more than it needs to. The discipline of the load audit is what separates a working off-grid system from an expensive guess.</p><div class=\"callout\"><strong>Key idea:</strong> Off-grid design starts with the load audit, not the array. Size the batteries for the loads and the cloudy days, then size the array to recharge them.</div>"
    },
    {
      "heading": "Hybrid: Grid-Tied Plus Backup",
      "html": "<p>A <strong>hybrid</strong> system is a grid-tied system with batteries and an inverter that can do both jobs: it sells extra power to the grid when the grid is up, and it powers the house from the batteries when the grid is down. The hybrid inverter manages the flow between the array, the batteries, the house, and the grid, and it keeps a separate backup panel — a subpanel of critical loads such as the refrigerator, the furnace fan, the well pump, and a few lights — powered during an outage. The rest of the house goes dark, and that is by design: the battery is sized for the critical loads, not for the whole house.</p><p>Hybrid systems are the fastest-growing type, because they answer the question every customer asks: \"Will my solar work in a power outage?\" The honest answer is that a basic grid-tied system will not, and a hybrid system will — for the critical loads, for as long as the battery lasts. The technician's job is to set that expectation clearly, size the battery for the loads the customer actually needs in an outage, and make sure the customer understands that the backup panel is a short list, not the whole house.</p>"
    },
    {
      "heading": "Choosing the Right System",
      "html": "<p>The choice between the three types comes down to three questions. Is there a utility grid available? If not, the system is off-grid. Does the customer need power during an outage? If yes, the system needs batteries — hybrid if the grid is available, off-grid if it is not. What is the budget? Batteries add significant cost, so a customer who only wants to lower their electric bill gets a grid-tied system, and a customer who wants backup power pays for the battery and the hybrid inverter.</p><p>There are also systems that do not fit neatly into one box: a grid-tied system with a small battery for overnight use, a hybrid system with a generator as a third source, and commercial systems with multiple inverters. The categories are a starting point, not a cage — the technician's job is to match the system to the site, the loads, and the customer's goals, and to explain the trade-offs in plain words. A system that matches the customer's real needs is a system the customer will be happy with; a system sold on a promise it cannot keep is a system that comes back as a complaint.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Grid-tied: array + inverter + grid, no batteries, lowest cost — and no power during an outage because of anti-islanding.</li><li>Off-grid: array + charge controller + batteries + inverter, for sites with no utility connection; design starts with the load audit.</li><li>Hybrid: grid-tied plus batteries, with a backup panel of critical loads powered during an outage.</li><li>Anti-islanding protects line workers: a grid-tied inverter must shut down when the grid goes down.</li><li>Choose by three questions: Is there a grid? Is backup power needed? What is the budget?</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Telling a customer their grid-tied system will keep the lights on in an outage. It will not — anti-islanding shuts it down. Backup power needs batteries and a hybrid inverter.</div><div class=\"callout\"><strong>Common mistake:</strong> Sizing an off-grid system from the array instead of the loads. Start with the energy audit, size the batteries, then size the array to recharge them.</div><p><strong>Ready-to-Work link:</strong> If you can compare the three system types, explain anti-islanding, and pick the right system for a customer, you have this module. Module 3 looks at the hardware: modules, arrays, and racking.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Grid-tied system",
      "def": "A PV system connected to the utility grid, with no batteries in its basic form."
    },
    {
      "term": "Off-grid system",
      "def": "A stand-alone PV system with batteries, for sites with no utility connection."
    },
    {
      "term": "Hybrid system",
      "def": "A grid-tied system with batteries that can power critical loads during an outage."
    },
    {
      "term": "Anti-islanding",
      "def": "The requirement that a grid-tied inverter shut down when the grid goes down, so it does not energize a dead line."
    },
    {
      "term": "Islanding",
      "def": "A PV system continuing to energize part of the grid after the grid has gone down — a hazard to line workers."
    },
    {
      "term": "Charge controller",
      "def": "The device that manages charging a battery bank from the PV array."
    },
    {
      "term": "Battery bank",
      "def": "A group of batteries wired together to store energy for a PV system."
    },
    {
      "term": "Days of autonomy",
      "def": "How many cloudy days an off-grid battery bank must carry the loads without sun."
    },
    {
      "term": "Backup panel (critical loads panel)",
      "def": "A subpanel of essential loads powered by a hybrid system during an outage."
    },
    {
      "term": "Critical loads",
      "def": "The loads a customer needs during an outage, such as refrigeration, heat, water, and a few lights."
    },
    {
      "term": "Energy audit",
      "def": "A list of every load, its watts, and its hours per day, used to size an off-grid or hybrid system."
    },
    {
      "term": "Net metering",
      "def": "A billing arrangement crediting a customer for electricity their system exports to the grid."
    }
  ],
  "video": {
    "title": "How a Solar Panel Is Made, From Sand to Electricity",
    "embedUrl": "https://www.youtube.com/embed/rr4uxTI3FS8",
    "note": "Watch the video, then work the assignment below. As you watch, note every term from this module's key terms list and write down one question the video raises for you.",
    "more": [
      {
        "title": "How Do Solar Panels Work? — TED-Ed",
        "url": "https://www.youtube.com/watch?v=xKxrkht7CpY"
      },
      {
        "title": "Choosing a Solar Inverter: Hybrid vs Microinverter",
        "url": "https://www.youtube.com/watch?v=OzvSJsUzE_k"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A customer says, \"I want solar so my lights stay on in a power outage.\" They have a grid connection and a basic grid-tied quote. What do you tell them?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A basic grid-tied system will not keep the lights on — anti-islanding shuts the inverter down when the grid goes down, to protect line workers. Step 2: Backup power needs batteries and a hybrid inverter, plus a backup panel of critical loads. Step 3: Quote the hybrid option and explain that the battery powers the critical loads, not the whole house.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A cabin has no utility connection. List the four parts of the system it needs and what each one does.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The array — makes DC power from sunlight. Step 2: The charge controller — manages charging the batteries. Step 3: The battery bank — stores energy for night and cloudy days. Step 4: The inverter — turns the battery's DC into AC for the cabin's loads.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A house uses 30 kWh per day. An off-grid design needs 2 days of autonomy and the battery bank is 48 V. How many amp-hours of usable battery capacity are needed?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Energy needed = 30 kWh × 2 days = 60 kWh. Step 2: Amp-hours = 60,000 Wh ÷ 48 V = 1,250 Ah of usable capacity. Step 3: The installed bank must be larger, because a battery should not be drained completely — the depth-of-discharge limit decides the final size.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Explain anti-islanding in two sentences, and say who it protects.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Anti-islanding means a grid-tied inverter must shut down within seconds when the grid goes down, so it stops feeding power into a dead line. Step 2: It protects the line workers repairing the outage, who must not be shocked by a house still feeding the line.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A hybrid system's backup panel has a refrigerator (150 W), a furnace fan (400 W), a well pump (800 W), and 5 LED lights (10 W each). What is the total critical load in watts?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Lights = 5 × 10 = 50 W. Step 2: Total = 150 + 400 + 800 + 50 = 1,400 W. Step 3: The battery and inverter must be sized for at least 1,400 W of critical load — plus starting current for the pump motor.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A customer with a grid connection wants only to lower their electric bill and has a limited budget. Which system type do you recommend, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Recommend a basic grid-tied system with no batteries. Step 2: It is the lowest-cost system and it directly offsets the electric bill. Step 3: Explain plainly that it will not provide backup power in an outage — if backup becomes important later, a hybrid inverter and batteries can be added.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A basic grid-tied PV system during a power outage:",
      "choices": [
        "Keeps the whole house powered",
        "Shuts down because of anti-islanding",
        "Powers only the refrigerator",
        "Switches to batteries automatically"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A basic grid-tied inverter must shut down when the grid goes down. (a) It cannot power the house — that needs batteries. (c) It powers nothing during an outage. (d) A basic grid-tied system has no batteries."
    },
    {
      "q": "Anti-islanding protects:",
      "choices": [
        "The solar panels",
        "Line workers repairing a dead grid",
        "The homeowner's television",
        "The inverter's warranty"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Anti-islanding keeps a dead line dead so line workers are not shocked. (a) The panels do not need this protection. (c) The television is not the reason. (d) The warranty is not the reason."
    },
    {
      "q": "An off-grid system must have:",
      "choices": [
        "A utility connection",
        "A battery bank and a charge controller",
        "Net metering",
        "A grid-tied inverter only"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Off-grid systems store energy in batteries, managed by a charge controller. (a) Off-grid means no utility connection. (c) Net metering is a grid-tied billing arrangement. (d) An off-grid inverter runs from batteries, not from the grid."
    },
    {
      "q": "A hybrid system differs from a basic grid-tied system because it:",
      "choices": [
        "Has no inverter",
        "Has batteries and can power critical loads during an outage",
        "Uses no solar panels",
        "Is not connected to the grid"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A hybrid system adds batteries and a backup panel. (a) It has a hybrid inverter. (c) It uses solar panels. (d) It is connected to the grid."
    },
    {
      "q": "Days of autonomy means:",
      "choices": [
        "How long the panels last",
        "How many cloudy days the battery bank must carry the loads without sun",
        "How long the warranty lasts",
        "How many days the system is off"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Days of autonomy is the cloudy-day reserve in the battery sizing. (a) Panel lifespan is 25–30 years. (c) The warranty is a separate matter. (d) The system is not off during autonomy — the batteries carry the loads."
    },
    {
      "q": "Off-grid system design starts with:",
      "choices": [
        "The array size",
        "The load audit — every load, its watts, and its hours",
        "The roof color",
        "The inverter brand"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The load audit sizes the batteries, then the array. (a) The array is sized after the loads. (c) Roof color does not size a system. (d) The inverter is chosen after the sizing."
    },
    {
      "q": "The backup panel in a hybrid system holds:",
      "choices": [
        "Every circuit in the house",
        "Only the critical loads the customer needs during an outage",
        "The solar array circuits",
        "The utility meter"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The backup panel is a short list of critical loads. (a) The whole house is too much for the battery. (c) Array circuits are on the DC side. (d) The utility meter is the utility's equipment."
    },
    {
      "q": "A customer with a grid connection who only wants a lower electric bill should get:",
      "choices": [
        "An off-grid system",
        "A basic grid-tied system with no batteries",
        "A hybrid system with the biggest battery available",
        "No solar at all"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A basic grid-tied system is the lowest-cost way to offset the bill. (a) Off-grid is for sites with no grid. (c) The biggest battery is unnecessary cost for this goal. (d) Solar can lower the bill — the grid-tied system does that."
    }
  ],
  "studyGuide": "\n<h3>Module 2 — PV System Types: Quick Reference</h3>\n<p><strong>Core idea:</strong> Grid-tied = array + inverter + grid, no batteries, lowest cost, no power in an outage. Off-grid = array + charge controller + batteries + inverter, no utility. Hybrid = grid-tied + batteries + backup panel of critical loads.</p>\n<p><strong>Anti-islanding:</strong> A grid-tied inverter must shut down when the grid goes down, so line workers are not shocked by a house feeding a dead line.</p>\n<p><strong>Off-grid sizing:</strong> Load audit first, then batteries (days of autonomy), then the array to recharge them.</p>\n<p><strong>Choosing:</strong> Is there a grid? Is backup power needed? What is the budget?</p>\n<p><strong>Self-check:</strong> Recommend a system type for a grid-connected home, a remote cabin, and a home that needs backup power — and explain why. If you can, you have this module.</p>\n"
};
