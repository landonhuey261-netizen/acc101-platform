// ase-a5 - Module 12: Brake Review
module.exports = {
  "number": 12,
  "slug": "brake-review",
  "title": "Brake Review",
  "estTime": "3–4 hours",
  "objectives": [
    "Connect the whole brake system into one diagnosis: a symptom, a system, a test.",
    "Review disc and drum brakes, the master cylinder, and power assist.",
    "Review ABS, traction control, stability control, and electronic brakes.",
    "Review brake fluid, bleeding, and the parking brake.",
    "Plan a full brake inspection of a car with a brake complaint, from road test to final check."
  ],
  "sections": [
    {
      "heading": "The Whole System, Together",
      "html": "<p>The brake system is one chain from foot to road. The <strong>pedal</strong> pushes through the <strong>booster</strong> to the <strong>master cylinder</strong>, the master cylinder pushes <strong>fluid</strong> through lines and hoses to the <strong>calipers and wheel cylinders</strong>, the calipers squeeze <strong>pads against rotors</strong> and the wheel cylinders push <strong>shoes against drums</strong>, and the <strong>tires</strong> turn all of that into a stop. Around the chain sit the helpers: <strong>ABS</strong> keeps the wheels rolling, <strong>traction and stability control</strong> use the same parts to keep the car moving and on its path, and the <strong>parking brake</strong> holds the car when it is parked.</p><p>A fault anywhere in the chain shows up somewhere else: a stuck guide pin wears one pad, a collapsed hose drags one caliper, air in the lines makes the pedal soft, and a failed wheel-speed sensor turns on three warning lights at once. Diagnosis always starts with the whole car, not one part.</p>"
    },
    {
      "heading": "Discs, Drums, and the Master Cylinder — The Recap",
      "html": "<p><strong>Disc brakes:</strong> rotor spins with the wheel; caliper straddles it; floating calipers slide on guide pins, fixed calipers have pistons on both sides. Pads wear and warn with a squeal; a pad worn to the backing destroys the rotor. <strong>Drum brakes:</strong> shoes inside a spinning drum, pushed out by the wheel cylinder, self-energizing, leading shoe doing most of the work, self-adjuster taking up wear. <strong>Master cylinder:</strong> two pistons, two circuits; a sinking pedal means an internal seal leak. <strong>Booster:</strong> vacuum and a diaphragm multiply the pedal force; a hard pedal means the assist is gone.</p><p>The safety rules run through all of it: support the car properly, never hang a caliper by its hose, watch the reservoir when pushing a piston back, pump the pedal firm before the car moves, and never drive a car with a grinding brake, a sinking pedal, or a brake pull.</p>"
    },
    {
      "heading": "ABS, Traction, Stability, and Electronic Brakes — The Recap",
      "html": "<p><strong>ABS:</strong> hold, release, reapply — many times per second — keeps the wheels rolling so the driver can steer. Keep the pedal down when it pulses. <strong>Traction control:</strong> brakes the spinning drive wheel and cuts engine power. <strong>Stability control:</strong> compares steering angle with yaw and lateral acceleration; brakes one wheel to correct understeer (inside rear) or oversteer (outside front). <strong>Electronic brakes:</strong> brake-by-wire sends a signal, not fluid; the pedal simulator gives the feel; the fail-safe returns the car to hydraulic braking; regenerative braking blends with the friction brakes on hybrids and EVs.</p><p>All of these systems are diagnosed with a <strong>scan tool</strong> first — codes, then live data, then the physical check — and a failed wheel-speed sensor can light the ABS, traction, and stability warnings together.</p>"
    },
    {
      "heading": "Fluid, Bleeding, and the Parking Brake — The Recap",
      "html": "<p><strong>Brake fluid:</strong> carries pressure, must not compress or boil, absorbs water (hygroscopic) — old fluid is flushed, not just topped up. DOT 3, DOT 4, DOT 5.1 are glycol-based; DOT 5 is silicone and must never be mixed with them. <strong>Bleeding:</strong> furthest wheel from the master cylinder first, close the bleeder before the pedal is released, never let the reservoir run dry. <strong>Parking brake:</strong> mechanical and independent of the hydraulics; cable and equalizer, or EPB with a motor on each rear caliper — and service mode is required before pushing an EPB piston back.</p>"
    },
    {
      "heading": "A Full Brake Inspection, Start to Finish",
      "html": "<p><strong>Takeaways — the full job:</strong></p><ul><li>Road test: when, where, what. Note the complaint, then reproduce it yourself.</li><li>Pedal check: low, soft, hard, sinking, pulsing — each names a system.</li><li>Lift inspection: pad and shoe thickness, rotor and drum condition, guide pins, hoses, leaks, wheel cylinders.</li><li>Scan tool for ABS, traction, stability, and electronic brakes; gauge for tires; fluid check for the hydraulics.</li><li>Replace the worn part, torque it, bleed if the system was opened, bed in new pads, road-test — and show the customer what was found.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Replacing pads to fix a pull caused by a collapsed hose or a stuck pin. The new pads will drag or wear unevenly until the real fault is fixed.</div><div class=\"callout\"><strong>Common mistake:</strong> Skipping the pedal pump after a pad change. The first stop with the pistons still pushed back sends the pedal to the floor.</div><p><strong>Ready for the exams:</strong> If you can take a brake complaint and plan the whole job — road test, pedal check, lift inspection, scan tool, repair, bleed, bed-in, road test — you are ready for the midterm and the final. The A5 practice exam in the capstone builds on everything in this course.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Brake system",
      "def": "The whole chain from pedal to tire: booster, master cylinder, fluid, calipers, pads, rotors, drums, and tires."
    },
    {
      "term": "Disc brake",
      "def": "A brake where pads squeeze a spinning rotor."
    },
    {
      "term": "Drum brake",
      "def": "A brake where shoes press outward against the inside of a spinning drum."
    },
    {
      "term": "Master cylinder",
      "def": "The cylinder that turns foot force into hydraulic pressure in two circuits."
    },
    {
      "term": "ABS",
      "def": "Anti-lock Braking System: hold, release, reapply — keeps wheels rolling so the driver can steer."
    },
    {
      "term": "Traction control",
      "def": "Brakes the spinning drive wheel and reduces engine power."
    },
    {
      "term": "Stability control",
      "def": "Brakes one wheel to correct understeer or oversteer."
    },
    {
      "term": "Brake fluid",
      "def": "The liquid that carries brake pressure; it absorbs water and must be flushed when old."
    },
    {
      "term": "Bleeding",
      "def": "Removing air from the brake lines through the bleeder screws."
    },
    {
      "term": "Parking brake",
      "def": "A mechanical brake on the rear wheels that holds the car when parked."
    },
    {
      "term": "EPB",
      "def": "Electronic parking brake: a switch and motors on the rear calipers; service mode is required for service."
    },
    {
      "term": "Brake pull",
      "def": "A car steering to one side when the brakes are applied."
    },
    {
      "term": "Road test",
      "def": "Driving the vehicle to reproduce a complaint and confirm a repair."
    },
    {
      "term": "Scan tool",
      "def": "A diagnostic tool that reads fault codes and live data."
    },
    {
      "term": "Bedding in",
      "def": "Moderate stops that transfer pad material evenly onto a new rotor."
    }
  ],
  "video": {
    "title": "How to Replace Brake Pads and Rotors Top 10 Brake Job Tips",
    "embedUrl": "https://www.youtube.com/embed/xJDOuZzEAQc",
    "note": "ChrisFix's top 10 tips for changing brake pads and rotors — the overlooked steps that make a brake job safe and complete, from greasing the guide pins to never letting the caliper dangle by its hose. Use it as a checklist against the whole course.",
    "more": [
      {
        "title": "How to Replace Brake Pads and Rotors (COMPLETE Guide)",
        "url": "https://www.youtube.com/watch?v=6RQ9UabOIPg"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A car pulls right when braking, its right front caliper is hot, and its pads are new. Plan the job in order.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Road-test to confirm the pull only happens when braking, then lift and inspect the right front caliper, guide pins, and hose. Step 2: The likely fault is a stuck caliper, a stuck pin, or a collapsed hose — fix that part, not the pads — then bleed if the system was opened, and road-test to confirm the pull is gone.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A brake pedal is soft and spongy after a wheel cylinder was replaced. What is the likely cause, and what is the fix?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The likely cause is air in the brake lines — opening the system let air in. Step 2: The fix is bleeding the system, furthest wheel from the master cylinder first, without letting the reservoir run dry.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> The ABS, traction-control, and stability-control lights are all on. The scan tool shows a right rear wheel-speed sensor code. What is the diagnosis?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The diagnosis is one failed wheel-speed sensor on the right rear. Step 2: All three systems share that sensor, so one fault lights all three warnings — check the sensor and its wiring on the right rear first.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A customer asks, 'Why do my new brake pads need bedding in? Can't I just drive normally?' Give a two-sentence answer.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Bedding in transfers a thin, even layer of pad material onto the rotor, and that layer is what the pads grip. Step 2: Without it — or after hard stops too soon — the pads can glaze and the brakes will be noisy and weak.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Explain how a worn damper, a bad alignment, and a brake pull can all show up as a tire wearing unevenly.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A worn damper lets the wheel bounce and cup the tire; a bad alignment scrubs one edge or feathers the tread; a dragging brake overheats one tire and wears it faster. Step 2: The tire is the diary — the wear pattern names which system to check, which is why a brake inspection always includes a look at the tires.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A hybrid car's brake pedal feels different than it did last week, and the car does not slow as expected when the driver lifts off. What should the technician check first, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Check the electronic brake system with a scan tool — the fault codes and the live data from the pedal sensor and the actuators. Step 2: The symptom points at the regenerative blending, and the scan tool shows whether the module, the sensor, or an actuator is at fault before any part is touched — and the high-voltage rules apply before work near the drive system.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A car pulls right when braking, its right front caliper is hot, and its pads are new. The most likely fault is a:",
      "choices": [
        "Stuck caliper, stuck guide pin, or collapsed hose on the right",
        "Worn pads",
        "Low battery",
        "Flat tire"
      ],
      "answer": 0,
      "explanation": "Correct: (a). New pads rule out pad wear; a hot caliper means it is dragging. (b) The pads are new. (c) A battery does not drag a caliper. (d) A flat tire does not make a caliper hot."
    },
    {
      "q": "A soft, spongy pedal after a brake part was replaced most likely means:",
      "choices": [
        "Air in the lines",
        "Worn pads",
        "A failed booster",
        "A flat tire"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Opening the system lets air in, and air compresses. (b) Worn pads make the pedal low, not spongy. (c) A failed booster makes the pedal hard. (d) A flat tire does not affect the pedal."
    },
    {
      "q": "The ABS, traction, and stability lights can all come on from one failed:",
      "choices": [
        "Wheel-speed sensor",
        "Spark plug",
        "Air filter",
        "Wiper blade"
      ],
      "answer": 0,
      "explanation": "Correct: (a). All three systems share the wheel-speed sensors. (b) A spark plug is an engine part. (c) An air filter affects the engine. (d) A wiper blade is unrelated."
    },
    {
      "q": "Bedding in new brake pads means:",
      "choices": [
        "A series of moderate stops that transfers pad material evenly onto the rotor",
        "Driving as fast as possible",
        "Slamming the brakes once",
        "Not using the brakes"
      ],
      "answer": 0,
      "explanation": "Correct: (a). The even transfer layer is what the pads grip. (b) Speed is not the method. (c) One hard stop can glaze the pads. (d) The brakes must be used to bed in."
    },
    {
      "q": "A brake pedal that sinks slowly under steady pressure means:",
      "choices": [
        "An internal master-cylinder seal leak",
        "A failed booster",
        "Worn pads",
        "A flat tire"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Fluid slips past the piston inside the cylinder. (b) A failed booster makes the pedal hard. (c) Worn pads make the pedal low, not sinking. (d) A flat tire does not sink the pedal."
    },
    {
      "q": "The correct order after replacing a brake part that opened the hydraulics is:",
      "choices": [
        "Bleed the system, check the fluid, pump the pedal firm, road-test",
        "Road-test first, then bleed",
        "Top up the fluid only",
        "Change the oil"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Bleed the air out, confirm the fluid, pump the pedal firm, then prove the repair. (b) Road-testing with air in the lines is unsafe. (c) Topping up does not remove air. (d) An oil change is unrelated."
    },
    {
      "q": "On an EPB car, the rear caliper piston must not be pushed back until the system is in:",
      "choices": [
        "Service mode",
        "Reverse gear",
        "Park",
        "Neutral"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Service mode retracts the EPB motors first. (b) Gear position does not retract the motors. (c) Park does not retract them. (d) Neutral does not retract them."
    },
    {
      "q": "The best first step for any brake complaint is a:",
      "choices": [
        "Road test that reproduces the complaint",
        "Parts order",
        "Wheel alignment",
        "Tire rotation"
      ],
      "answer": 0,
      "explanation": "Correct: (a). The road test confirms when, where, and what the complaint is. (b) Ordering parts before diagnosing is guessing. (c) Alignment is a later step. (d) Rotation is a service, not a diagnosis."
    }
  ],
  "studyGuide": "\n<h3>Module 12 — Brake Review: Quick Reference</h3>\n<p><strong>Chain:</strong> Pedal → booster → master cylinder → fluid → calipers/wheel cylinders → pads/rotors, shoes/drums → tires → road. ABS, traction, and stability control share the same parts.</p>\n<p><strong>Discs:</strong> Floating calipers slide on pins; fixed have pistons both sides. <strong>Drums:</strong> Self-energizing, leading shoe works hardest, adjuster takes up wear.</p>\n<p><strong>Pedal:</strong> Low = worn pads/adjustment · Soft = air or leak · Hard = no assist · Sinking = master cylinder seals · Pulsing = rotor variation (or ABS in a hard stop).</p>\n<p><strong>Fluid:</strong> Flush old fluid; DOT 5 never mixes with glycol fluids. Bleed furthest first; never let the reservoir run dry.</p>\n<p><strong>Job order:</strong> Road test → pedal check → lift inspection → scan tool → replace → torque → bleed → bed in → road test.</p>\n<p><strong>Self-check:</strong> Take a brake complaint and plan the whole job from road test to final check.</p>\n"
};
