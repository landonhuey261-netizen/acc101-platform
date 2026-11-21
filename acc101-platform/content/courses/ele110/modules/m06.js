module.exports = {
  "number": 6,
  "slug": "notification-appliances-power-supplies",
  "title": "Notification Appliances & Power Supplies",
  "estTime": "3–4 hours",
  "objectives": [
    "Describe horns, strobes, speakers, and combination appliances and where each is used.",
    "Explain audibility and visibility requirements for notification.",
    "Explain how the FACP and its batteries power the system, including standby time.",
    "Describe what happens to a fire alarm system when normal power fails.",
    "Explain temporal-3 and voice evacuation notification."
  ],
  "sections": [
    {
      "heading": "Horns, Strobes, Speakers — and What Each One Does",
      "html": "<p>Notification appliances are the part of the system people actually experience. <strong>Horns</strong> make sound: they produce a loud, attention-getting tone that tells everyone in the area to evacuate. <strong>Strobes</strong> make light: a bright flashing light that alerts people who cannot hear the horn, including people who are deaf or hard of hearing and people in noisy areas. <strong>Speakers</strong> make voice: in a voice evacuation system, the panel or a live operator gives spoken instructions — which exit to use, which floors to evacuate — instead of a single tone. Many devices combine two functions, such as a horn-strobe on one plate.</p><p>Where each goes is a design decision governed by NFPA 72. Horns must be loud enough to be heard over the ambient noise of the space — a factory floor needs more sound than a quiet office — and strobes must be visible from anywhere in the space, with spacing and intensity set by the standard and by the room's size and shape. Sleeping areas have special rules: a strobe alone is not enough to wake a sleeping person, and low-frequency sounders are required in sleeping rooms because lower tones wake people more reliably. The technician installs what the drawings and the code require, and the acceptance test proves it works.</p>"
    },
    {
      "heading": "Temporal-3 and Voice Evacuation",
      "html": "<p>The sound a fire alarm makes is not random — it is a standard pattern called <strong>temporal-3</strong>: three short pulses, a pause, then three pulses again. That pattern is the international signal for \"evacuate,\" and it is the same in every building, so a person who hears it in a hotel in Michigan knows it means the same thing as in a school in Ohio. The pattern is produced by the panel or by the horn itself, and it is one of the things checked at acceptance testing.</p><p>Voice evacuation goes further. In larger buildings — high-rises, hospitals, stadiums, malls — the system has speakers instead of, or in addition to, horns, and it can play prerecorded messages or live announcements. The message can tell one floor to evacuate and another to stand by, which is far safer in a tall building than sounding the whole tower at once. Voice systems are more complex: they need amplifiers, speaker circuits, and message programming, and they are tested by listening to the message in every zone, not just by checking that a tone sounds.</p>"
    },
    {
      "heading": "Power: Primary, Standby, and the Battery Calculation",
      "html": "<p>A fire alarm system has two power sources. The <strong>primary</strong> source is the building's normal power, usually a dedicated branch circuit feeding the panel. The <strong>secondary</strong> (standby) source is batteries in or near the panel, sized to run the system when the normal power fails. NFPA 72 requires the batteries to support the system in standby for 24 hours and then in alarm for a set period (commonly 5 minutes for most systems, longer for voice systems) — and the battery calculation is a real engineering document, not a guess: the technician or designer adds up the standby current of every device, multiplies by 24 hours, adds the alarm current of every notification appliance, and sizes the battery with a safety factor for aging.</p><p>Batteries are the most common cause of a fire alarm trouble signal, and they are the most common thing a maintenance technician replaces. A battery that has lost capacity will pass a quick voltage check and fail under load, which is why the acceptance and annual tests include a load test — the system is run on batteries and the voltage is measured under load. A battery is replaced on a schedule and on condition, and the replacement must be the same type and capacity the calculation requires. Swapping in a smaller battery because it fits is a code violation and a life-safety failure.</p><div class=\"callout\"><strong>Key idea:</strong> The battery calculation is a document, not a guess: 24 hours of standby plus the alarm period, with a safety factor. A battery that looks fine on a voltmeter can still fail under load — test it under load.</div>"
    },
    {
      "heading": "When the Power Fails: What the System Must Do",
      "html": "<p>When normal power fails, the panel must switch to batteries automatically, report the power failure as a trouble signal, and keep working. The horns must still sound, the strobes must still flash, and the panel must still know which device alarmed. That is the whole point of the standby requirement: fires do not wait for the power to come back, and many fires start because of the same event that took the power out.</p><p>The technician's job in a power failure is not to improvise. The system is designed, calculated, and tested for this exact event, and the maintenance routine is to test it: cut the normal power, watch the panel switch to batteries, measure the battery voltage under load, sound the system, and restore power. If the system does not perform, the fault is found and fixed before the panel is put back in service. And remember the safety rule that governs all of this work: the panel's battery bank can deliver a large fault current, and the primary circuit feeding the panel is line voltage — all work is done de-energized, locked out and tagged out, and tested dead under a licensed supervisor, per NFPA 70E.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Horns make sound, strobes make light, speakers make voice — and many devices combine two functions.</li><li>Temporal-3 (three pulses, pause, repeat) is the standard evacuation signal everywhere.</li><li>Voice evacuation lets a large building give different instructions to different floors.</li><li>The system runs on normal power, with batteries sized for 24 hours of standby plus the alarm period.</li><li>Batteries must be load-tested and replaced with the same type and capacity the calculation requires.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Replacing a battery with a smaller one because it fits the cabinet. The battery must match the calculation — a smaller battery is a shorter standby time, and a shorter standby time is a failed system.</div><div class=\"callout\"><strong>Common mistake:</strong> Testing a battery with a voltmeter only. A weak battery can read full voltage with no load and collapse under load — always test under load.</div><p><strong>Ready-to-Work link:</strong> If you can explain horns vs strobes vs speakers, describe temporal-3, and explain the 24-hour standby requirement, you have this module. Module 7 moves to the systems that keep people out: security, access control, and CCTV.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Horn",
      "def": "A notification appliance that produces a loud tone to alert occupants to evacuate."
    },
    {
      "term": "Strobe",
      "def": "A notification appliance that produces a bright flashing light for people who cannot hear the alarm."
    },
    {
      "term": "Speaker (voice evacuation)",
      "def": "A notification appliance that plays spoken instructions, used in voice evacuation systems."
    },
    {
      "term": "Horn-strobe",
      "def": "A combination appliance providing both sound and light on one plate."
    },
    {
      "term": "Temporal-3",
      "def": "The standard evacuation sound pattern: three pulses, a pause, then three pulses again."
    },
    {
      "term": "Voice evacuation",
      "def": "A fire alarm system using speakers to give spoken instructions, often different messages to different floors."
    },
    {
      "term": "Primary power",
      "def": "The building's normal power feeding the fire alarm panel."
    },
    {
      "term": "Secondary (standby) power",
      "def": "The batteries that run the fire alarm system when normal power fails."
    },
    {
      "term": "Battery calculation",
      "def": "The documented calculation sizing batteries for 24 hours of standby plus the alarm period, with a safety factor."
    },
    {
      "term": "Standby current",
      "def": "The current the system draws while waiting, used in the battery calculation."
    },
    {
      "term": "Alarm current",
      "def": "The current the system draws while sounding, used in the battery calculation."
    },
    {
      "term": "Load test",
      "def": "Testing a battery by measuring its voltage while it powers the system, not just at rest."
    },
    {
      "term": "Low-frequency sounder",
      "def": "A sounder producing a low tone (around 520 Hz) required in sleeping areas because it wakes people more reliably."
    },
    {
      "term": "Audibility",
      "def": "How loud the alarm is in a space, measured against the ambient noise level."
    }
  ],
  "video": {
    "title": "Fire Alarm Control Panel and Power Supply",
    "embedUrl": "https://www.youtube.com/embed/L_7fLtuXe5Q",
    "note": "Watch the video, then work the assignment below. As you watch, note every term from this module's key terms list and write down one question the video raises for you.",
    "more": [
      {
        "title": "Introduction to Fire Alarm Systems and Main Components",
        "url": "https://www.youtube.com/watch?v=gV9znH4RQY0"
      },
      {
        "title": "Conventional Fire Alarm System Wiring Diagram",
        "url": "https://www.youtube.com/watch?v=mNVhdSyIqx4"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A warehouse has high ambient noise and a deaf employee who works alone in a storage room. Which notification appliances does the room need, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A horn loud enough to be heard over the warehouse noise. Step 2: A strobe, visible from anywhere in the room, because sound alone does not alert a person who cannot hear. Step 3: A horn-strobe combination covers both needs on one device.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A panel's battery calculation shows a standby load of 0.5 A and an alarm load of 4 A. How many amp-hours are needed for 24 hours of standby plus 5 minutes of alarm, before the safety factor?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Standby energy = 0.5 A × 24 h = 12 Ah. Step 2: Alarm energy = 4 A × (5/60) h = 0.33 Ah. Step 3: Total = 12.33 Ah before the safety factor — the installed battery must be larger after the aging safety factor is applied.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A technician measures a battery at 27.2 V with no load, but the voltage drops to 19 V when the system sounds. What does this mean, and what should be done?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The battery has lost capacity — it holds voltage at rest but collapses under load. Step 2: Replace it with a battery of the same type and capacity the calculation requires. Step 3: Re-test under load after replacement and document the result.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Explain temporal-3 in plain words, and say why a standard pattern matters.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Temporal-3 is three short pulses, a pause, then three pulses again, repeating. Step 2: It is the same evacuation signal in every building, so people recognize it anywhere. Step 3: A building with a unique sound would confuse visitors and delay evacuation.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A 12-story office building uses a voice evacuation system. Why is voice better than horns alone in this building?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Voice can tell different floors different things — evacuate the fire floor and the floors above, stand by elsewhere. Step 2: Sounding horns on all 12 floors at once would send everyone into the stairwells at once. Step 3: Spoken instructions reduce panic and keep the stairs usable.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Normal power fails at 2 a.m. What must the fire alarm system do, and how is that proven?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Switch to batteries automatically, report a power-failure trouble signal, and keep detecting and notifying. Step 2: The batteries must support 24 hours of standby plus the alarm period. Step 3: It is proven by test — cut normal power, run the system on batteries, measure voltage under load, and sound the system.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A strobe is used in a fire alarm system because:",
      "choices": [
        "It makes a loud sound",
        "It alerts people who cannot hear the horn",
        "It detects smoke",
        "It powers the panel"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Strobes provide visual notification for people who are deaf, hard of hearing, or in noisy areas. (a) Horns make sound. (c) Detectors detect smoke. (d) Batteries and the primary circuit power the panel."
    },
    {
      "q": "Temporal-3 is:",
      "choices": [
        "A type of battery",
        "The standard evacuation sound pattern: three pulses, pause, repeat",
        "A cable rating",
        "A zone name"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Temporal-3 is the standard three-pulse evacuation pattern. (a) A battery is the standby power source. (c) Cable ratings are FPL, FPLR, FPLP. (d) A zone is a building area."
    },
    {
      "q": "NFPA 72 requires fire alarm batteries to support:",
      "choices": [
        "1 hour of standby",
        "24 hours of standby plus the alarm period",
        "1 week of standby",
        "No standby at all"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The standard requirement is 24 hours of standby plus the alarm period (commonly 5 minutes). (a) One hour is far too short. (c) One week is not the requirement. (d) Standby power is required."
    },
    {
      "q": "A battery that reads full voltage at rest but collapses under load has:",
      "choices": [
        "Lost capacity and must be replaced",
        "A full charge and is fine",
        "A bad voltmeter",
        "Too much capacity"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Lost capacity shows up under load, not at rest — replace the battery. (b) A battery that collapses under load is not fine. (c) The voltmeter is reading correctly at rest. (d) Too much capacity would not cause a voltage collapse."
    },
    {
      "q": "Voice evacuation is used in large buildings because it:",
      "choices": [
        "Is cheaper than horns",
        "Can give different instructions to different floors",
        "Needs no power",
        "Replaces the panel"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Voice can direct each floor separately, which is safer in a tall building. (a) Voice systems cost more than horns. (c) Voice systems need power and amplifiers. (d) The panel still controls the system."
    },
    {
      "q": "A horn-strobe combination appliance provides:",
      "choices": [
        "Sound and light on one device",
        "Smoke detection and heat detection",
        "Power and data",
        "Two horns"
      ],
      "answer": 0,
      "explanation": "Correct: (a). A horn-strobe gives both audible and visible notification. (b) Detection is a different device. (c) It does not carry data. (d) It is one horn plus one strobe."
    },
    {
      "q": "When normal power fails, the fire alarm panel must:",
      "choices": [
        "Shut down until power returns",
        "Switch to batteries automatically and report a trouble signal",
        "Sound the alarm continuously",
        "Wait for someone to switch it over"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The panel switches to batteries automatically and reports the power failure as trouble. (a) Shutting down would leave the building unprotected. (c) A power failure is a trouble, not an alarm. (d) The switchover is automatic."
    },
    {
      "q": "Low-frequency sounders are required in sleeping areas because:",
      "choices": [
        "They are cheaper",
        "Lower tones wake sleeping people more reliably",
        "They are quieter",
        "They use less wire"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Low-frequency sound (around 520 Hz) wakes sleeping people more reliably than high tones. (a) Cost is not the reason. (c) They are not quieter — audibility is still required. (d) Wire use is not the reason."
    }
  ],
  "studyGuide": "\n<h3>Module 6 — Notification & Power: Quick Reference</h3>\n<p><strong>Core idea:</strong> Horns make sound, strobes make light, speakers make voice. People must be alerted by at least one sense they can use.</p>\n<p><strong>Pattern:</strong> Temporal-3 — three pulses, pause, repeat — is the standard evacuation signal everywhere.</p>\n<p><strong>Voice:</strong> Voice evacuation gives different instructions to different floors — essential in tall buildings.</p>\n<p><strong>Power:</strong> Primary = normal building power · Secondary = batteries sized for 24 hours standby + alarm period, with a safety factor.</p>\n<p><strong>Batteries:</strong> Test under load, not just with a voltmeter; replace with the same type and capacity the calculation requires.</p>\n<p><strong>Self-check:</strong> Work a battery calculation for a small system from memory. If you can, you have this module.</p>\n"
};
