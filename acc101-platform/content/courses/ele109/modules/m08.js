// ele109 - Module 8: Human-Machine Interfaces (HMI) Basics
module.exports = {
  "number": 8,
  "slug": "human-machine-interfaces-hmi-basics",
  "title": "Human-Machine Interfaces (HMI) Basics",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what an HMI is and how it connects to a PLC.",
    "Describe HMI screen elements: push buttons, indicators, numeric displays, and alarms.",
    "Explain tags and how an HMI reads and writes PLC memory.",
    "Describe navigation: screens, pop-ups, and security levels.",
    "Explain alarm management: alarm lists, acknowledgement, and history."
  ],
  "sections": [
    {
      "heading": "What an HMI Is and How It Talks to the PLC",
      "html": "<p>A <strong>human-machine interface (HMI)</strong> is the screen the operator uses to run the machine: a touchscreen panel mounted on the machine, or a computer screen in a control room. It shows the machine's state — which motors are running, what the temperatures and levels are, whether an alarm is active — and it lets the operator give commands: start, stop, change a setpoint, acknowledge an alarm. Without an HMI, the operator would have to read the PLC's indicator lights and change settings through the programming terminal, which is slow and error-prone. The HMI is the operator's window into the PLC.</p>\n<p>The HMI and the PLC talk over a network (Module 10) — usually Ethernet — using an industrial protocol. The HMI does not contain the control logic; it only displays data from the PLC and writes operator commands back into the PLC's memory. The link between the two is the <strong>tag</strong>: a named piece of PLC memory that the HMI reads or writes. A tag called \"Motor1_Running\" is a bit in the PLC that the HMI reads to light a green indicator; a tag called \"Temperature_Setpoint\" is a number the operator changes on the HMI and the PLC reads as its setpoint. If the tag name is wrong or the PLC address is wrong, the HMI shows nothing or shows the wrong value — and the first thing to check when an HMI value looks wrong is the tag, not the screen.</p>\n<div class=\"callout\"><strong>Key idea:</strong> The HMI displays PLC data and writes operator commands back. The tag is the link: a named piece of PLC memory the HMI reads or writes.</div>"
    },
    {
      "heading": "Screen Elements: Buttons, Indicators, Displays & Alarms",
      "html": "<p>An HMI screen is built from <strong>elements</strong>, each tied to a tag. A <strong>push button</strong> element writes a bit in the PLC when the operator touches it — a momentary button writes a 1 while touched, a maintained button toggles. An <strong>indicator</strong> element changes color or shape with a tag's value: green when a motor is running, red when it is faulted, grey when it is stopped. A <strong>numeric display</strong> shows a tag's value — a temperature, a count, a speed — and a <strong>numeric entry</strong> lets the operator type a new setpoint. A <strong>bar graph</strong> shows a level or a pressure at a glance. An <strong>alarm banner</strong> shows the most recent alarm, and an <strong>alarm list</strong> shows all active and unacknowledged alarms.</p>\n<p>Each element's behavior is set in its properties: which tag it reads or writes, what color it shows for each state, what limits it enforces on a numeric entry (a setpoint entry that rejects a value above the safe maximum is a safety feature, not an inconvenience). The elements are arranged on <strong>screens</strong> — an overview screen showing the whole machine, a detail screen for each station, a settings screen for setpoints, and an alarms screen. The operator moves between screens with navigation buttons, and the overview screen is always one touch away.</p>"
    },
    {
      "heading": "Navigation, Security & Alarm Management",
      "html": "<p><strong>Navigation</strong> is the map of the HMI's screens: the overview, the station details, the settings, and the alarms, with a button on every screen that returns to the overview. Good navigation means the operator can reach any screen in two touches and can always get back. <strong>Security levels</strong> control who can do what: an operator can start and stop the machine and acknowledge alarms; a supervisor can change setpoints; maintenance can change timers and counters; an engineer can change the program. Each level needs a login, and the HMI logs who changed what — so a setpoint change can be traced to the person who made it.</p>\n<p><strong>Alarm management</strong> is the discipline of making alarms useful instead of noisy. An alarm is raised when a tag goes out of its normal range — a temperature too high, a motor overloaded, a sensor failed. The alarm appears on the alarm list with a time stamp, and the operator must <strong>acknowledge</strong> it — a deliberate action that says \"I have seen this\" — before it clears from the active list. <strong>Alarm history</strong> records every alarm with its time, so a recurring fault can be traced: if the same alarm appears every shift at the same time, it is a process problem, not a random event. An alarm that the operator ignores because it appears too often is a failed alarm, and the fix is to fix the process or to re-tune the alarm, not to silence it.</p>"
    },
    {
      "heading": "Good HMI Design: Clarity, Consistency & Safety",
      "html": "<p>Good HMI design is boring on purpose. The same color means the same thing on every screen: green for running, red for fault, yellow for warning, grey for stopped. The same layout puts the same information in the same place on every screen, so the operator's eye knows where to look. The overview screen shows the machine's state at a glance, with no scrolling and no hidden information. Text is large enough to read from the operator's normal position, and the most important information — running state, alarms, and the stop button — is the largest and most visible. A screen that is pretty but hard to read is a bad screen.</p>\n<p>Safety on an HMI is a matter of what the screen <strong>cannot</strong> do. The HMI must never be the only way to stop a machine — a hardwired emergency stop button (Module 11) is always present and always works, even if the HMI or the PLC fails. A setpoint entry must enforce safe limits, so the operator cannot type a temperature that would damage the machine. A start command on the HMI must be confirmed by the PLC's safety logic, not bypass it. And the HMI must show the machine's real state — if the network to the PLC fails, the HMI must show a communication failure, not the last values it read, because stale data that looks live is the most dangerous screen of all.</p>\n<div class=\"callout\"><strong>Common mistake:</strong> Designing an HMI that shows stale data as if it were live. If the network to the PLC fails, the HMI must show a communication failure — never the last values it read.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>An HMI is the operator's window into the PLC: it displays PLC data and writes operator commands back, over a network, through tags.</li>\n<li>A tag is a named piece of PLC memory. If an HMI value looks wrong, check the tag first.</li>\n<li>Screen elements: push buttons, indicators, numeric displays and entries, bar graphs, alarm banners and lists. Each is tied to a tag and has properties (colors, limits).</li>\n<li>Navigation: overview, station details, settings, alarms — any screen in two touches, overview always one touch away. Security levels control who can change what, and the HMI logs who changed it.</li>\n<li>Alarm management: alarms are raised on out-of-range tags, acknowledged deliberately, and recorded in history. An ignored alarm is a failed alarm.</li>\n<li>Good design is boring: consistent colors and layout, readable text, the most important information largest. The HMI never replaces a hardwired E-stop, and it must show a communication failure rather than stale data.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Putting a start or stop command on the HMI with no confirmation and no limits. A command that can be touched accidentally, or a setpoint that can be typed beyond the safe maximum, is a safety hole — use confirmations and enforced limits.</div>\n<p><strong>Ready-to-Work link:</strong> If you can explain tags, screens, and alarms and describe what makes an HMI safe, you have this module. Module 9 covers PLC troubleshooting and forcing I/O.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Human-machine interface (HMI)", "def": "The screen the operator uses to run the machine: it displays PLC data and writes operator commands back." },
    { "term": "Tag", "def": "A named piece of PLC memory that the HMI reads or writes." },
    { "term": "Push button (HMI)", "def": "A screen element that writes a bit in the PLC when the operator touches it." },
    { "term": "Indicator", "def": "A screen element that changes color or shape with a tag's value." },
    { "term": "Numeric display", "def": "A screen element that shows a tag's value." },
    { "term": "Numeric entry", "def": "A screen element that lets the operator type a new setpoint into the PLC." },
    { "term": "Alarm banner", "def": "The part of the HMI that shows the most recent alarm." },
    { "term": "Alarm list", "def": "The HMI screen showing all active and unacknowledged alarms." },
    { "term": "Acknowledgement", "def": "The operator's deliberate action confirming an alarm has been seen." },
    { "term": "Alarm history", "def": "The HMI's record of every alarm with its time stamp." },
    { "term": "Security level", "def": "An HMI login level that controls which actions an operator, supervisor, or maintenance worker can perform." },
    { "term": "Overview screen", "def": "The HMI's main screen showing the whole machine's state at a glance." },
    { "term": "Setpoint", "def": "The target value a process is controlled to, such as a temperature or a speed." },
    { "term": "Stale data", "def": "HMI values that no longer reflect the PLC because the network has failed." },
    { "term": "Momentary button", "def": "A button that writes a 1 only while it is touched." }
  ],
  "video": {
    "title": "HMI basics | What is an HMI? What is SCADA? - Automation Insights (Part 1)",
    "embedUrl": "https://www.youtube.com/embed/kujHQgK352o",
    "note": "A clear introduction to HMIs — what they are, how they differ from SCADA, and how they connect to the PLC to show the operator the machine's state.",
    "more": [
      { "title": "What is HMI? || Human Machine Interface Basics", "url": "https://www.youtube.com/watch?v=6kZniHRwjYE" },
      { "title": "What is an HMI? | Human Machine Interface Basics | Industrial Automation", "url": "https://www.youtube.com/watch?v=JVHlrEpqS4w" }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> An HMI indicator for a motor is grey when stopped, green when running, and red when faulted. What tag does it read, and what does each color mean in PLC terms?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: It reads the motor's status bits — the running bit and the fault bit. Step 2: Grey = running bit off and fault bit off. Step 3: Green = running bit on. Step 4: Red = fault bit on, which takes priority over the running color.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> An HMI shows a temperature of 150°F, but the PLC's raw analog value is at its minimum. What is the most likely cause?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The HMI is showing stale data or a wrong tag. Step 2: Check the tag — the HMI may be reading the wrong PLC address, or the network to the PLC may have failed and the HMI is showing its last value. Step 3: Check the tag first, then the network, before suspecting the sensor.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> An operator wants to change a temperature setpoint from 150°F to 200°F, but the safe maximum is 180°F. What should the HMI do?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The numeric entry must enforce a limit of 180°F and reject the 200°F entry. Step 2: Enforcing safe limits on setpoint entries is a safety feature, not an inconvenience. Step 3: If the process genuinely needs 200°F, a supervisor or engineer must change the limit through the proper procedure, not by typing past it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> The same over-temperature alarm appears every shift at about 2 p.m. What does the alarm history tell you, and what should you do?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A recurring alarm at the same time is a process problem, not a random event. Step 2: Check the alarm history for the pattern and look for what changes at 2 p.m. — a shift change, a product change, a door opening, a sun load on a sensor. Step 3: Fix the process or re-tune the alarm; do not silence it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> An HMI screen has no emergency stop button on it. Is that a problem? Explain.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: No — the HMI must never be the only way to stop a machine. Step 2: A hardwired emergency stop button must be present and must work even if the HMI or the PLC fails. Step 3: The HMI can have a stop command, but the hardwired E-stop is the safety device.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A supervisor needs to change a timer preset, but an operator should not be able to. How does the HMI handle this?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Security levels. Step 2: The timer preset entry is assigned to the supervisor level, so it only works after a supervisor login. Step 3: The HMI logs who changed the preset and when, so the change can be traced.</p>"
    }
  ],
  "quiz": [
    {
      "q": "An HMI's job is to:",
      "choices": ["Run the control logic", "Display PLC data and let the operator give commands", "Supply power to the PLC", "Replace the emergency stop"],
      "answer": 1,
      "explanation": "Correct: (b). The HMI is the operator's window into the PLC. (a) The PLC runs the logic. (c) The power supply powers the PLC. (d) The HMI never replaces a hardwired E-stop."
    },
    {
      "q": "A tag is:",
      "choices": ["A label on a cable", "A named piece of PLC memory that the HMI reads or writes", "A type of sensor", "A screen color"],
      "answer": 1,
      "explanation": "Correct: (b). Tags link the HMI to PLC memory. (a) A cable label is not a tag. (c) A sensor is a field device. (d) Colors are display properties."
    },
    {
      "q": "If an HMI value looks wrong, the first thing to check is:",
      "choices": ["The sensor", "The tag — whether the HMI is reading the right PLC address", "The motor", "The cable tray"],
      "answer": 1,
      "explanation": "Correct: (b). A wrong tag is the most common cause of a wrong HMI value. (a) The sensor is checked after the tag. (c) The motor does not set HMI values. (d) The cable tray is unrelated."
    },
    {
      "q": "An alarm acknowledgement is:",
      "choices": ["The alarm clearing itself", "The operator's deliberate action confirming the alarm has been seen", "Silencing all alarms", "Deleting the alarm history"],
      "answer": 1,
      "explanation": "Correct: (b). Acknowledgement says \"I have seen this.\" (a) Alarms do not clear themselves. (c) Silencing is not acknowledgement. (d) History is a record and is not deleted by acknowledgement."
    },
    {
      "q": "An HMI setpoint entry should:",
      "choices": ["Accept any value the operator types", "Enforce safe limits and reject values beyond the safe maximum", "Be hidden from operators", "Only accept whole numbers"],
      "answer": 1,
      "explanation": "Correct: (b). Enforced limits are a safety feature. (a) Accepting any value is a safety hole. (c) Hiding entries does not make them safe. (d) Whole numbers are not the issue — limits are."
    },
    {
      "q": "If the network between the HMI and the PLC fails, the HMI must:",
      "choices": ["Keep showing the last values as if they were live", "Show a communication failure", "Shut down the machine", "Restart the PLC"],
      "answer": 1,
      "explanation": "Correct: (b). Stale data that looks live is dangerous. (a) Showing stale data as live is the most dangerous screen. (c) The HMI does not shut down the machine on its own. (d) The HMI cannot restart the PLC."
    },
    {
      "q": "Security levels on an HMI exist to:",
      "choices": ["Make the screen prettier", "Control who can perform which actions, and log who changed what", "Speed up the network", "Reduce the number of screens"],
      "answer": 1,
      "explanation": "Correct: (b). Security limits actions by role and creates a change log. (a) Appearance is not the purpose. (c) Security does not affect network speed. (d) Security does not reduce screen count."
    },
    {
      "q": "Good HMI design uses:",
      "choices": ["A different color scheme on every screen", "Consistent colors and layout, with the most important information largest", "As much information as possible on one screen", "Small text to fit more on screen"],
      "answer": 1,
      "explanation": "Correct: (b). Consistency lets the operator's eye find information fast. (a) Different schemes confuse the operator. (c) Overcrowding makes the screen unreadable. (d) Small text is hard to read from the operator's position."
    }
  ],
  "studyGuide": "\n<h3>Module 8 — HMI Basics: Quick Reference</h3>\n<p><strong>Core idea:</strong> The HMI is the operator's window into the PLC: it displays PLC data and writes operator commands back, over a network, through tags.</p>\n<p><strong>Tag:</strong> A named piece of PLC memory. If an HMI value looks wrong, check the tag first.</p>\n<p><strong>Elements:</strong> Push buttons · Indicators (green running, red fault, grey stopped) · Numeric displays and entries · Bar graphs · Alarm banner and list.</p>\n<p><strong>Navigation:</strong> Overview · Station details · Settings · Alarms. Any screen in two touches; overview always one touch away. Security levels control who can change what; the HMI logs who changed it.</p>\n<p><strong>Alarms:</strong> Raised on out-of-range tags · Acknowledged deliberately · Recorded in history. An ignored alarm is a failed alarm.</p>\n<p><strong>Safety:</strong> The HMI never replaces a hardwired E-stop. Setpoint entries enforce safe limits. On a network failure, show a communication failure — never stale data as if it were live.</p>\n<p><strong>Self-check:</strong> Explain tags, screens, and alarms and describe what makes an HMI safe. If you can, you have this module.</p>\n"
};
