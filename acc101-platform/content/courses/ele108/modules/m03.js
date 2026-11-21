// ele108 - Module 3: Control Transformers & Pilot Devices
module.exports = {
  "number": 3,
  "slug": "control-transformers-pilot-devices",
  "title": "Control Transformers & Pilot Devices",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what a control transformer does and why it is used.",
    "Size a control transformer from the VA of the coils and devices it feeds.",
    "Describe fusing and grounding of the control circuit.",
    "Identify pilot devices: push buttons, selector switches, indicator lights, and joysticks.",
    "Explain momentary versus maintained contacts."
  ],
  "sections": [
    {
      "heading": "The Control Transformer: Making the Control Voltage",
      "html": "<p>Most control circuits run at 120 V, and that 120 V usually comes from a <strong>control transformer</strong> — a small step-down transformer that takes the line voltage (480 V, 240 V, or 208 V) and makes the control voltage. The control transformer is sized in <strong>volt-amperes (VA)</strong>, and its size is set by adding up the VA of everything it feeds: the contactor coils, the relay coils, the pilot lights, and any other control devices. A coil's inrush VA — the power it draws at the instant it pulls in — is much larger than its sealed (holding) VA, so the transformer must be big enough to pull in all the coils that operate at once, not just to hold them.</p>\n<p>Control transformers are usually protected by fuses on both the primary and the secondary, and the secondary is often grounded at one point (or left ungrounded with a ground detector, in some industrial systems). Grounding the secondary means a ground fault in the control wiring blows the fuse and stops the machine — a safe, obvious failure — instead of leaving a live fault that could energize a push button enclosure. The control transformer is mounted in the panel, and its primary is fed from the line side of the disconnect so the control circuit has power whenever the disconnect is closed.</p>\n<div class=\"callout\"><strong>Key idea:</strong> The control transformer makes the low voltage the control circuit runs on, and it must be sized for the inrush VA of the coils, not just their holding VA.</div>"
    },
    {
      "heading": "Sizing a Control Transformer",
      "html": "<p>Sizing starts with a list. Write down every coil and device the transformer feeds, with two numbers for each coil: the <strong>inrush VA</strong> (the pull-in power, lasting a fraction of a second) and the <strong>sealed VA</strong> (the holding power). Add the sealed VA of everything that is on at the same time, then add the inrush VA of the largest coil that pulls in while the others are sealed. The total is the minimum transformer VA; pick the next standard size up (common sizes are 50, 75, 100, 150, 250, and 500 VA). A transformer that is too small will drop its voltage when a coil pulls in, and the contactor will chatter or fail to pull in at all — the classic symptom of an undersized control transformer.</p>\n<p>As a worked example: a panel has two contactor coils (each 60 VA inrush, 10 VA sealed) and three pilot lights (2 VA each). The sealed total is 10 + 10 + 6 = 26 VA, and the largest inrush while the other coil is sealed is 60 VA, so the total is 26 + 60 = 86 VA — a 100 VA transformer is the right choice. In practice, manufacturers publish selection charts that do this arithmetic for their own coils, and the chart is the fastest reliable way to size the transformer for a given starter.</p>"
    },
    {
      "heading": "Pilot Devices: Buttons, Selectors & Lights",
      "html": "<p><strong>Pilot devices</strong> are the human interface of the control system. A <strong>push button</strong> is a momentary switch: press it and its contacts change state; release it and they spring back. Start buttons are normally open (NO) and stop buttons are normally closed (NC), for the fail-safe reason in Module 2. A <strong>selector switch</strong> is a maintained switch: turn it to HAND, OFF, or AUTO and it stays there, with a separate set of contacts for each position. A <strong>joystick</strong> is a selector switch you push in a direction, used on cranes and hoists. An <strong>emergency stop (E-stop)</strong> is a large mushroom-head push button, usually NC, that latches in when pressed and must be twisted or pulled to reset — it drops the control circuit out and stays out until someone deliberately resets it.</p>\n<p><strong>Indicator (pilot) lights</strong> tell the operator what the machine is doing without opening the panel. The usual color code is green for running, red for stopped or fault, amber for a warning or a tripped overload, and white or blue for a condition such as power on. The colors are a convention, not a law — what matters is that the panel's legend matches the lights, and that the operator knows what each one means. A pilot light that is burned out is a real problem: the operator loses the information it carried, and a running machine can look like a stopped one.</p>"
    },
    {
      "heading": "Momentary vs Maintained Contacts",
      "html": "<p>The difference between momentary and maintained contacts is the difference between a start button and a selector switch, and it decides how the whole control circuit is wired. A <strong>momentary</strong> contact changes state only while it is held — the start button is the classic example, which is why the start-stop circuit needs a holding (sealing) contact to keep the motor running after the button is released (Module 4). A <strong>maintained</strong> contact stays in its new state until someone changes it — a selector switch in HAND stays in HAND, and a toggle switch stays on until it is switched off.</p>\n<p>Choosing wrong has consequences. A maintained contact on a start circuit means the motor restarts by itself after a power failure when the power returns — a serious hazard that the NEC addresses with requirements for protection against automatic restart in some applications. A momentary contact on a selector function means the operator must hold it for the whole operation, which is tiring and unsafe. The rule is simple: momentary for commands that should end by themselves, maintained for modes that should persist — and always think about what happens when the power fails and comes back.</p>\n<div class=\"callout\"><strong>Common mistake:</strong> Wiring a maintained switch as a motor start control without considering restart after a power failure. If the switch is still closed when power returns, the motor starts with no warning — which is why start control is normally momentary with a sealing contact, not maintained.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>The control transformer steps the line voltage down to the control voltage (usually 120 V) and must be sized for the inrush VA of the coils.</li>\n<li>Size it: sealed VA of everything on at once, plus the inrush VA of the largest coil that pulls in — then the next standard size up.</li>\n<li>Pilot devices: push buttons (momentary), selector switches (maintained), E-stop (latching mushroom-head), pilot lights (green run, red stop/fault, amber warning).</li>\n<li>Start buttons are NO, stop buttons are NC — fail-safe design.</li>\n<li>Momentary contacts change state only while held; maintained contacts stay until changed. Start control is normally momentary with a sealing contact, so the motor cannot restart itself after a power failure.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Sizing a control transformer from the sealed VA only. The inrush of a pulling-in coil is several times its sealed VA, and a transformer sized without it will sag, chatter, and fail to pull the contactor in.</div>\n<p><strong>Ready-to-Work link:</strong> If you can size a control transformer from a VA list and explain momentary versus maintained contacts, you have this module. Module 4 covers start-stop stations and latching circuits.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Control transformer", "def": "A small step-down transformer that makes the control voltage (usually 120 V) from the line voltage." },
    { "term": "Volt-amperes (VA)", "def": "The apparent-power rating of a control transformer or the power drawn by a coil." },
    { "term": "Inrush VA", "def": "The power a coil draws at the instant it pulls in; much larger than its sealed VA." },
    { "term": "Sealed VA", "def": "The power a coil draws while holding the contactor closed." },
    { "term": "Pilot device", "def": "A human-interface control device: push button, selector switch, joystick, or indicator light." },
    { "term": "Push button", "def": "A momentary switch that changes state only while pressed." },
    { "term": "Selector switch", "def": "A maintained switch with positions such as HAND-OFF-AUTO that stay until changed." },
    { "term": "Emergency stop (E-stop)", "def": "A latching mushroom-head push button that drops the control circuit out until deliberately reset." },
    { "term": "Indicator light", "def": "A pilot light showing machine state: green running, red stopped or fault, amber warning." },
    { "term": "Momentary contact", "def": "A contact that changes state only while it is held." },
    { "term": "Maintained contact", "def": "A contact that stays in its new state until someone changes it." },
    { "term": "HAND-OFF-AUTO", "def": "The three positions of a selector switch: manual run, off, and automatic (sensor) control." },
    { "term": "Control circuit fusing", "def": "Fuses on the control transformer's primary and secondary that protect the control wiring." },
    { "term": "Automatic restart", "def": "A motor starting by itself when power returns after a failure — a hazard that momentary start control prevents." }
  ],
  "video": {
    "title": "c3controls :: 22mm IEC Pilot Devices - Push Buttons, Selector Switches & Pilot Lights",
    "embedUrl": "https://www.youtube.com/embed/bjlE1M_kiRg",
    "note": "A walkthrough of real pilot devices — push buttons, selector switches, and pilot lights — showing the contact blocks behind each one and how momentary and maintained contacts differ.",
    "more": [
      { "title": "Eaton M22 Pilot Devices", "url": "https://www.youtube.com/watch?v=iIJF5Q6o1zs" },
      { "title": "Harmony XB5N/XB7N Ø22mm plastic pushbuttons, selectors and pilot lights | Schneider Electric", "url": "https://www.youtube.com/watch?v=X7uWBPhBR2I" }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A panel has two contactor coils (each 60 VA inrush, 10 VA sealed) and three pilot lights (2 VA each). What is the minimum control transformer size?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Sealed VA = 10 + 10 + (3 × 2) = 26 VA. Step 2: Add the largest inrush while the other coil is sealed: 26 + 60 = 86 VA. Step 3: Pick the next standard size up: a 100 VA transformer.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A contactor chatters when it tries to pull in, and the control voltage sags during pull-in. What is the most likely cause?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The control transformer is undersized. Step 2: It was probably sized from the sealed VA only, without the inrush VA. Step 3: When the coil pulls in, the transformer voltage sags, the coil drops out, the voltage recovers, and the cycle repeats — chatter. Replace it with a correctly sized transformer.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A pump must run in HAND when the operator selects it, stop in OFF, and run on a float switch in AUTO. Which pilot device do you use, and how is it wired?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A three-position selector switch, HAND-OFF-AUTO. Step 2: The HAND contact bypasses the float switch and energizes the coil directly. Step 3: The AUTO contact puts the float switch in series with the coil, so the float switch decides. OFF opens the circuit entirely.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Why is the stop button wired normally closed? What happens if its wire breaks?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: An NC stop button opens the circuit when pressed, dropping the contactor out. Step 2: If the wire breaks, the circuit opens and the motor stops. Step 3: That is fail-safe — the failure stops the machine instead of leaving it running with no way to stop it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A machine's green pilot light is on but the motor is not running. What does the light actually tell you?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The light tells you only what its circuit says — usually that the control circuit is energized or that the start command was given. Step 2: It does not prove the motor is running; the contactor, the overload, or the motor itself could have failed. Step 3: Check the motor with a meter and by observation — never trust a light over a measurement.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A start circuit is wired with a maintained toggle switch. The power fails and returns while the switch is still on. What happens, and why is this a problem?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The motor restarts by itself when power returns, with no warning. Step 2: Anyone working on the machine during the outage could be caught by a sudden start. Step 3: Start control should be momentary with a sealing contact, so the motor cannot restart itself after a power failure.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A control transformer must be sized for the:",
      "choices": ["Sealed VA only", "Inrush VA of the coils as well as the sealed VA", "Motor horsepower", "Number of push buttons"],
      "answer": 1,
      "explanation": "Correct: (b). Inrush VA is several times sealed VA and sets the transformer size. (a) Sealed VA alone gives an undersized transformer that sags and chatters. (c) Motor horsepower does not size the control transformer. (d) Push buttons draw almost no power."
    },
    {
      "q": "A start push button is normally:",
      "choices": ["Normally closed", "Normally open", "Maintained", "Latched"],
      "answer": 1,
      "explanation": "Correct: (b). A start button is NO and momentary. (a) NC is the stop button. (c) Maintained is a selector switch. (d) Latched is an E-stop."
    },
    {
      "q": "A selector switch in the HAND position:",
      "choices": ["Runs the motor on a sensor", "Runs the motor directly, bypassing the sensor", "Stops the motor permanently", "Reverses the motor"],
      "answer": 1,
      "explanation": "Correct: (b). HAND bypasses the automatic control. (a) That is the AUTO position. (c) That is the OFF position. (d) Reversing needs a reversing starter."
    },
    {
      "q": "The usual color for a running indicator light is:",
      "choices": ["Red", "Green", "Amber", "Blue"],
      "answer": 1,
      "explanation": "Correct: (b). Green means running. (a) Red means stopped or fault. (c) Amber means warning or tripped. (d) Blue or white means a condition such as power on."
    },
    {
      "q": "An E-stop button is designed to:",
      "choices": ["Start the motor quickly", "Latch in when pressed and stay out until deliberately reset", "Spring back as soon as you release it", "Reverse the motor"],
      "answer": 1,
      "explanation": "Correct: (b). An E-stop latches in and must be twisted or pulled to reset. (a) An E-stop stops, it does not start. (c) That is a momentary push button. (d) An E-stop does not reverse."
    },
    {
      "q": "A contactor chatters on pull-in and the control voltage sags. The most likely cause is:",
      "choices": ["An oversized control transformer", "An undersized control transformer", "A burned-out pilot light", "A wrong motor frame"],
      "answer": 1,
      "explanation": "Correct: (b). An undersized transformer sags under inrush. (a) An oversized transformer would not sag. (c) A pilot light draws almost nothing. (d) Motor frame does not affect control voltage."
    },
    {
      "q": "A momentary contact:",
      "choices": ["Stays in its new state until changed", "Changes state only while it is held", "Can never be used in a start circuit", "Is the same as a selector switch"],
      "answer": 1,
      "explanation": "Correct: (b). Momentary means held-only. (a) That is a maintained contact. (c) Momentary contacts are the standard start control. (d) A selector switch is maintained."
    },
    {
      "q": "Grounding one side of a control transformer secondary means a ground fault will:",
      "choices": ["Energize the push button enclosure silently", "Blow the control fuse and stop the machine — a safe, obvious failure", "Increase the control voltage", "Reverse the motor"],
      "answer": 1,
      "explanation": "Correct: (b). A grounded secondary makes a ground fault blow the fuse. (a) That is the danger of an ungrounded fault. (c) Grounding does not raise voltage. (d) Grounding does not reverse the motor."
    }
  ],
  "studyGuide": "\n<h3>Module 3 — Control Transformers &amp; Pilot Devices: Quick Reference</h3>\n<p><strong>Core idea:</strong> The control transformer makes the low control voltage, sized for coil inrush VA, not just sealed VA.</p>\n<p><strong>Sizing:</strong> Sealed VA of everything on at once + inrush VA of the largest coil pulling in → next standard size up.</p>\n<p><strong>Pilot devices:</strong> Push buttons (momentary; start NO, stop NC) · Selector switch (maintained; HAND-OFF-AUTO) · E-stop (latching mushroom-head) · Pilot lights (green run, red stop/fault, amber warning).</p>\n<p><strong>Momentary vs maintained:</strong> Momentary changes state only while held; maintained stays until changed. Start control is momentary with a sealing contact so the motor cannot restart itself after a power failure.</p>\n<p><strong>Self-check:</strong> Size a transformer from a VA list and explain why the stop button is NC. If you can, you have this module.</p>\n"
};
