// ele105 - Module 12: Inspection, Troubleshooting & Common Violations
module.exports = {
  "number": 12,
  "slug": "inspection-troubleshooting-common-violations",
  "title": "Inspection, Troubleshooting & Common Violations",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain the rough and final inspection sequence for a dwelling.",
    "Identify the most common residential Code violations.",
    "Troubleshoot a tripping breaker: overload, short circuit, or ground fault.",
    "Diagnose an open neutral and explain its symptoms.",
    "Explain what to do when an inspection fails."
  ],
  "sections": [
    {
      "heading": "The Inspection Sequence",
      "html": "<p>A dwelling's electrical work is inspected in two main stages. The rough inspection happens after rough-in and before drywall: the inspector checks the boxes, the cable support and protection, the grounding, the panel, and the service. The final inspection happens after trim-out: the inspector checks the devices, the cover plates, the panel directory, the GFCI and AFCI operation, and the finished installation. Some jurisdictions add a service inspection or a trench inspection for underground work.</p><p>The inspector's job is to verify Code compliance, not to design the job or to teach the trade. The inspector will open the panel, test GFCIs and AFCIs, check a sample of receptacles, and look for the common violations in the next section. A clean inspection is the result of a clean rough-in and a complete trim-out — not of luck.</p><p>Before the inspector arrives, the electrician walks the job with the same eyes: every box flush, every cover on, every GFCI tested, the panel directory complete, and the work area clean. A job that is ready for inspection looks ready — and a job that is not ready wastes everyone's time.</p><div class=\"callout\"><strong>Key idea:</strong> Two inspections: rough (before drywall) and final (after trim-out). Walk the job with the inspector's eyes before they arrive.</div>"
    },
    {
      "heading": "The Most Common Violations",
      "html": "<p>Inspectors see the same violations on job after job. Missing nail plates where cable passes too close to a framing edge. Boxes buried behind drywall or set too deep. Box fill exceeded — too many conductors in too small a box. Neutral and ground bonded in a subpanel. Missing AFCI or GFCI protection. Receptacle spacing missed on a long wall. NM cable unprotected in an unfinished basement. Open splices outside a box. Reversed polarity on a receptacle. A panel directory that says “Spare” for a live circuit. A missing in-use cover outdoors.</p><p>Each of these is a small mistake with a large consequence: a nail through an unprotected cable, a fire in an overfilled box, a shock from an energized enclosure, or a failed inspection that delays the whole project. The common thread is haste — the violation happens when the work is rushed past a step the Code requires.</p><p>The fix for every violation is the same: correct the work, have it re-inspected, and learn the rule well enough that the next job does not repeat it. A violation is not a punishment; it is the Code doing its job.</p><ul><li>Top violations: missing nail plates, buried or deep boxes, box fill, subpanel bonding, missing AFCI/GFCI, spacing, unprotected NM, open splices, reversed polarity, bad directory, missing in-use covers.</li></ul>"
    },
    {
      "heading": "Troubleshooting a Tripping Breaker",
      "html": "<p>A breaker trips for three reasons, and the diagnosis is different for each. An overload trips the breaker after a delay: too much load on the circuit for too long, such as a space heater and a hair dryer on one circuit. The fix is to reduce the load or add a circuit. A short circuit trips the breaker instantly with a bang: hot touching neutral or ground, usually from damaged insulation or a failed device. The fix is to find and repair the fault. A ground fault trips a GFCI instantly: current leaking to ground, often through water or a damaged appliance. The fix is to find the leaking appliance or the wet location.</p><p>The troubleshooting sequence is: turn the breaker off, unplug everything on the circuit, turn the breaker on, and plug things back in one at a time. If the breaker trips with nothing plugged in, the fault is in the wiring. If it trips when one appliance is plugged in, the appliance is the fault. Never replace a breaker with a larger one to stop tripping — the breaker is protecting the wire, and a larger breaker lets the wire overheat.</p><p>All troubleshooting in this program assumes the work is done de-energized and locked out/tagged out under a licensed supervisor, per NFPA 70E, except for the meter tests the supervisor directs. Never work on live equipment, and never bypass a breaker or a GFCI to “test” a circuit.</p><div class=\"callout\"><strong>Key idea:</strong> Overload = delayed trip, too much load. Short circuit = instant trip, hot touching neutral or ground. Ground fault = GFCI trip, current leaking to ground. Never upsize the breaker to stop tripping.</div>"
    },
    {
      "heading": "The Open Neutral and Other Symptoms",
      "html": "<p>An open neutral is the most dangerous common fault in a house. The neutral is the return path for 120-volt loads; if it opens, the two hot legs are no longer balanced, and the voltage on each 120-volt circuit swings wildly — one side rises toward 240 volts while the other falls toward zero. Lights burn bright and then dim, electronics fail, and appliances burn out. The symptom is lights that get brighter when another load turns on, or different rooms' lights changing brightness together.</p><p>The cause is usually a loose or broken neutral connection: a back-stabbed receptacle, a loose lug in the panel, or a damaged service neutral. The fix is to find the loose connection and repair it — with the circuit de-energized and locked out/tagged out under a licensed supervisor. An open service neutral is a utility emergency: call the utility and the licensed electrician, and do not use the affected circuits.</p><p>Other symptoms to recognize: a GFCI that trips repeatedly points to a real ground fault or a shared neutral; a breaker that is warm points to a loose connection or an overload; a buzzing receptacle points to a loose terminal; a burning smell points to a failing connection that must be de-energized immediately. Every one of these is a reason to stop and investigate, not to keep using the circuit.</p><ul><li>Open neutral symptoms: lights brightening and dimming together, electronics failing, voltage swinging.</li><li>Cause: loose or broken neutral — back-stab, loose lug, damaged service neutral.</li><li>GFCI tripping repeatedly = real ground fault or shared neutral. Buzzing or burning smell = de-energize immediately.</li></ul>"
    },
    {
      "heading": "When an Inspection Fails",
      "html": "<p>A failed inspection is a correction notice, not a failure of the electrician. The inspector lists the violations, the electrician corrects them, and the inspector returns to verify. The corrections must be complete — a partial correction earns a second failure and a second return trip, and the project schedule slips each time.</p><p>The professional response is to correct the work promptly, document the correction, and ask the inspector to explain any violation that is unclear. Arguing with an inspector about a Code section is rarely productive; showing the inspector the corrected work and the Code section that supports it is. The inspector is the AHJ, and the AHJ's interpretation governs the job.</p><p>Keep a record of every inspection: the date, the inspector, the violations, and the corrections. That record is the job's history, and it is what the next electrician on the house will wish they had.</p><div class=\"callout\"><strong>Common mistake:</strong> Replacing a tripping breaker with a larger one. The breaker protects the wire — a larger breaker lets the wire overheat and start a fire.</div>"
    }
  ],
  "keyTerms": [
    {
      "term": "Rough inspection",
      "def": "The inspection after rough-in and before drywall."
    },
    {
      "term": "Final inspection",
      "def": "The inspection after trim-out, covering devices, plates, the directory, and GFCI/AFCI operation."
    },
    {
      "term": "Correction notice",
      "def": "The inspector's list of violations to correct before re-inspection."
    },
    {
      "term": "AHJ",
      "def": "Authority Having Jurisdiction — the inspector whose interpretation governs the job."
    },
    {
      "term": "Overload",
      "def": "Too much load on a circuit for too long; trips the breaker after a delay."
    },
    {
      "term": "Short circuit",
      "def": "Hot touching neutral or ground; trips the breaker instantly."
    },
    {
      "term": "Ground fault",
      "def": "Current leaking to ground; trips a GFCI."
    },
    {
      "term": "Open neutral",
      "def": "A broken or loose neutral connection; causes voltage to swing wildly between the two hot legs."
    },
    {
      "term": "Nuisance tripping",
      "def": "Repeated GFCI or AFCI tripping; usually a real fault, a shared neutral, or a faulty device."
    },
    {
      "term": "Reversed polarity",
      "def": "Hot and neutral swapped at a receptacle; shown by a receptacle tester."
    },
    {
      "term": "Back-stab",
      "def": "A push-in device connection; the most common source of loose connections and open neutrals."
    },
    {
      "term": "Re-inspection",
      "def": "A return inspection to verify corrections after a failed inspection."
    }
  ],
  "video": {
    "title": "You'll Finally Understand Breakers & GFCIs — and Which One Saves You",
    "embedUrl": "https://www.youtube.com/embed/hMiksQLHzMA",
    "note": "This video explains what breakers and GFCIs each protect against — and which one saves you. It is the clearest model in this course for troubleshooting a tripping breaker: is it an overload, a short, or a ground fault?",
    "more": [
      {
        "title": "How to Wire a GFCI Outlet and Avoid Common Mistakes",
        "url": "https://www.youtube.com/watch?v=M3OoHkI0pUA"
      },
      {
        "title": "5 Tips for Electricians working in Residential Remodels",
        "url": "https://www.youtube.com/watch?v=fU5IQNMsXXQ"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A breaker trips a few seconds after a space heater and a hair dryer are used on the same circuit. What is the fault, and what is the fix?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: An overload — the delayed trip and the heavy loads point to too much current, not a short. Step 2: The fix is to reduce the load (use one appliance at a time) or add a circuit. Step 3: Never replace the breaker with a larger one; the breaker protects the wire.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A breaker trips instantly with a bang when it is turned on, with nothing plugged in. What is the fault, and what do you do?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A short circuit — hot touching neutral or ground in the wiring. Step 2: Do not reset it repeatedly. Step 3: With the circuit de-energized and locked out/tagged out under a licensed supervisor, find the fault — damaged insulation, a pinched conductor, or a failed device — and repair it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Lights in different rooms get brighter and dimmer together, and a television fails. What is the likely fault?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: An open neutral. Step 2: The two hot legs are unbalanced, so voltage swings between them. Step 3: Stop using the affected circuits, call the licensed electrician (and the utility if it is the service neutral), and find the loose or broken neutral connection.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> An inspector fails a rough inspection for missing nail plates and box fill. What happens next?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The inspector issues a correction notice listing the violations. Step 2: The electrician installs the nail plates and corrects the box fill (larger or deeper boxes). Step 3: The inspector returns for a re-inspection to verify the corrections before drywall goes up.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A GFCI in a bathroom trips every time the washing machine in the laundry room runs. What is a likely cause?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A shared neutral between the bathroom and laundry circuits, or a ground fault in the washing machine. Step 2: A GFCI that shares a neutral with another circuit will trip on the other circuit's current. Step 3: The fix is to separate the neutrals (each circuit needs its own neutral) or repair the faulty appliance, with the work done de-energized under a licensed supervisor.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A receptacle tester shows “open ground” on a receptacle that was just installed. What do you check?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Check that the grounding conductor is connected to the green screw and spliced to the circuit ground. Step 2: Check the ground splice in the box and the ground connection at the panel. Step 3: A loose ground screw or a missed splice is the usual cause; correct it with the circuit de-energized and locked out/tagged out under a licensed supervisor.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The rough inspection happens:",
      "choices": [
        "Before framing",
        "After rough-in and before drywall",
        "After trim-out",
        "After the homeowner moves in"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The rough inspection is after rough-in and before drywall covers the work. (a) There is no wiring to inspect before framing. (c) After trim-out is the final inspection. (d) The homeowner moves in after the final inspection."
    },
    {
      "q": "A breaker that trips after a delay, with heavy loads on the circuit, most likely indicates:",
      "choices": [
        "A short circuit",
        "An overload",
        "A ground fault",
        "An open neutral"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A delayed trip under heavy load is an overload. (a) A short circuit trips instantly. (c) A ground fault trips a GFCI. (d) An open neutral causes voltage swings, not a delayed trip."
    },
    {
      "q": "A breaker that trips instantly with a bang most likely indicates:",
      "choices": [
        "An overload",
        "A short circuit",
        "A loose connection",
        "A worn breaker"
      ],
      "answer": 1,
      "explanation": "Correct: (b). An instant trip with a bang is a short circuit — hot touching neutral or ground. (a) An overload trips after a delay. (c) A loose connection causes heat, not an instant trip. (d) A worn breaker trips on overload, not with a bang."
    },
    {
      "q": "Lights in different rooms brightening and dimming together most likely indicates:",
      "choices": [
        "An overload",
        "A short circuit",
        "An open neutral",
        "A tripped GFCI"
      ],
      "answer": 2,
      "explanation": "Correct: (c). An open neutral unbalances the two hot legs and swings the voltage. (a) An overload trips a breaker. (b) A short circuit trips a breaker instantly. (d) A tripped GFCI kills one circuit, not several rooms."
    },
    {
      "q": "The correct fix for a breaker that keeps tripping on overload is to:",
      "choices": [
        "Replace it with a larger breaker",
        "Reduce the load or add a circuit",
        "Tape the breaker in the on position",
        "Remove the breaker"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Reduce the load or add a circuit. (a) A larger breaker lets the wire overheat. (c) Taping a breaker on defeats its protection. (d) Removing the breaker leaves the circuit unprotected."
    },
    {
      "q": "A failed inspection results in:",
      "choices": [
        "A fine only",
        "A correction notice listing the violations to fix before re-inspection",
        "Demolition of the house",
        "No further action"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The inspector issues a correction notice and returns to verify the fixes. (a) A fine is not the usual result. (c) Demolition is not the remedy. (d) Corrections and re-inspection are required."
    },
    {
      "q": "A GFCI that trips repeatedly most likely indicates:",
      "choices": [
        "A faulty breaker only",
        "A real ground fault, a shared neutral, or a faulty device",
        "Too much load",
        "A short circuit"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Repeated GFCI tripping usually means a real fault, a shared neutral, or a bad device. (a) The breaker is only one possibility. (c) Too much load trips a breaker, not a GFCI. (d) A short circuit trips a breaker instantly."
    },
    {
      "q": "A burning smell from a receptacle means you should:",
      "choices": [
        "Ignore it",
        "De-energize the circuit immediately and investigate under a licensed supervisor",
        "Spray air freshener",
        "Plug in a different appliance"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A burning smell is a failing connection — de-energize it and investigate. (a) Ignoring it risks a fire. (c) Air freshener hides the symptom. (d) Another appliance does not fix a failing connection."
    }
  ],
  "studyGuide": "\n<h3>Module 12 — Inspection &amp; Troubleshooting: Quick Reference</h3>\n<p><strong>Core idea:</strong> Inspections verify the Code; troubleshooting finds the fault by its symptoms. Never upsize a breaker to stop tripping.</p>\n<p><strong>Inspections:</strong> Rough (after rough-in, before drywall) · final (after trim-out). A failed inspection brings a correction notice and a re-inspection.</p>\n<p><strong>Top violations:</strong> Missing nail plates · buried/deep boxes · box fill · subpanel bonding · missing AFCI/GFCI · spacing · unprotected NM · open splices · reversed polarity · bad directory.</p>\n<p><strong>Tripping:</strong> Overload = delayed trip, too much load · short circuit = instant trip, hot touching neutral/ground · ground fault = GFCI trip, current leaking to ground.</p>\n<p><strong>Open neutral:</strong> Lights brightening and dimming together, voltage swinging — stop using the circuits and call the licensed electrician (and the utility for a service neutral).</p>\n<p><strong>Self-check:</strong> Diagnose three tripping scenarios from their symptoms, and list five common violations.</p>\n"
};
