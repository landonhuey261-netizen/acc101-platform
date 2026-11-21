// ele102 - Module 12: Troubleshooting DC Circuits
module.exports = {
  "number": 12,
  "slug": "troubleshooting-dc-circuits",
  "title": "Troubleshooting DC Circuits",
  "estTime": "3–4 hours",
  "objectives": [
    "Describe a systematic troubleshooting process: observe, hypothesize, test, and verify.",
    "Use voltage measurements to find opens and shorts in a DC circuit.",
    "Use resistance and continuity measurements to find faulty components.",
    "Explain the half-split method for finding a fault in a long circuit.",
    "Describe how to verify a repair and document what was found."
  ],
  "sections": [
    {
      "heading": "A Systematic Process",
      "html": "<p>Troubleshooting is not guessing — it is a process. Step 1: <strong>observe</strong> — what is the circuit supposed to do, what is it actually doing, and what changed just before it stopped working? Step 2: <strong>hypothesize</strong> — what single fault would explain the symptoms? Step 3: <strong>test</strong> — make the measurement that proves or disproves the hypothesis, starting with the easiest and safest test. Step 4: <strong>repair</strong> — fix the fault, not the symptom. Step 5: <strong>verify</strong> — test the circuit to confirm it works, and check that nothing else broke. The process is the same for a dead light and a dead motor; only the measurements change.</p>\n<p>The most common beginner mistake is skipping the observation step and replacing parts at random. Random replacement sometimes works, but it wastes parts, it wastes time, and it teaches nothing — and it can hide the real fault, which comes back later. The troubleshooter who observes first and tests second finds the fault faster and fixes it once.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Test, don't guess. One good measurement is worth ten replaced parts.</div>"
    },
    {
      "heading": "Voltage Measurements Find Opens & Shorts",
      "html": "<p>Voltage measurements are the troubleshooter's main tool for a live circuit — made only by a qualified person, with the right PPE and the right meter rating, on a circuit that is safe to test live. In a series circuit, the voltage drops add up to the source voltage: a resistor with the full source voltage across it is the open, or the open is elsewhere in the loop. In a parallel circuit, every branch should read the source voltage: a branch reading zero has an open in it, and a branch reading low has a high-resistance connection.</p>\n<p>A short shows up differently: the voltage collapses, the current soars, and the breaker trips. A high-resistance connection — a loose terminal, a corroded joint — shows up as a voltage drop where there should be none: a connection should drop almost zero volts, so any significant drop across it means resistance there, and resistance there means heat there. The meter finds what the eyes cannot see.</p>"
    },
    {
      "heading": "Resistance & Continuity Find Faulty Parts",
      "html": "<p>Resistance and continuity measurements are made on a de-energized circuit, and they find the faults that voltage measurements cannot. A fuse that does not beep on continuity is blown. A switch that does not beep when closed is faulty. A resistor that reads far from its marked value is damaged. A wire that does not beep end to end is broken. A motor winding that reads open is burned out; a winding that reads near zero to the frame is grounded.</p>\n<p>The key is isolation: a component measured while still connected to the rest of the circuit can read through a parallel path and give a false reading. The component is disconnected at one end before it is measured, so the meter reads only that component. The habit is to measure, compare with the expected value, and trust the meter — if the reading does not match the schematic, the component is suspect.</p>"
    },
    {
      "heading": "The Half-Split Method & Verification",
      "html": "<p>The <strong>half-split method</strong> finds a fault in a long circuit fast: test at the middle of the circuit. If the middle is good, the fault is in the second half; if the middle is bad, the fault is in the first half. Test at the middle of the bad half, and repeat. Each test cuts the search area in half, so a fault in a 16-point circuit is found in about four tests instead of sixteen. The method works for opens, shorts, and high-resistance connections alike.</p>\n<p>After the repair, verify: run the circuit, measure the voltage and current, and compare them with the calculated values. Then document what was found — the symptom, the measurements, the fault, and the fix — so the next person does not have to find it again. A repair that is not verified is a guess, and a fault that is not documented is a fault that will be found twice.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Troubleshoot systematically: observe, hypothesize, test, repair, verify.</li>\n<li>Voltage measurements find opens (full source voltage across the open) and high-resistance connections (unexpected drops).</li>\n<li>Resistance and continuity measurements, on a de-energized circuit, find blown fuses, faulty switches, broken wires, and damaged components.</li>\n<li>Isolate a component before measuring it, or a parallel path gives a false reading.</li>\n<li>Half-split: test at the middle, then at the middle of the bad half — each test halves the search.</li>\n<li>Verify the repair and document the fault.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Replacing parts at random instead of testing. One good measurement is worth ten replaced parts, and random replacement hides the real fault.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Measuring a component while it is still connected to the circuit. A parallel path gives a false reading — disconnect one end first.</div>\n<p><strong>Ready-to-Work link:</strong> If you can describe the five-step process, explain what voltage and resistance measurements reveal, and use the half-split method, you have this module — and this course. The course labs are Ohm's law and series/parallel calculation labs, and the exams cover all twelve modules.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Troubleshooting",
      "def": "Finding a fault by a systematic process: observe, hypothesize, test, repair, verify."
    },
    {
      "term": "Observe",
      "def": "The first step: what should the circuit do, what does it do, and what changed?"
    },
    {
      "term": "Hypothesize",
      "def": "Proposing a single fault that would explain the symptoms."
    },
    {
      "term": "Test",
      "def": "Making the measurement that proves or disproves the hypothesis."
    },
    {
      "term": "Verify",
      "def": "Testing the circuit after a repair to confirm it works."
    },
    {
      "term": "Open",
      "def": "A break in a circuit path; current stops and full source voltage appears across it."
    },
    {
      "term": "Short",
      "def": "A near-zero-resistance path that collapses voltage and trips the breaker."
    },
    {
      "term": "High-resistance connection",
      "def": "A loose or corroded joint that drops voltage and makes heat."
    },
    {
      "term": "Half-split method",
      "def": "Testing at the middle of a circuit, then at the middle of the bad half, halving the search each time."
    },
    {
      "term": "Isolation",
      "def": "Disconnecting one end of a component before measuring it, so no parallel path gives a false reading."
    },
    {
      "term": "Continuity test",
      "def": "A beep test for a complete path; no beep means an open."
    },
    {
      "term": "Expected value",
      "def": "The reading a calculation or a nameplate says should be there; the meter is compared against it."
    },
    {
      "term": "Symptom",
      "def": "What the circuit is doing wrong, as observed."
    },
    {
      "term": "Document",
      "def": "Writing down the symptom, measurements, fault, and fix for the next person."
    },
    {
      "term": "Fault",
      "def": "The actual defect causing the symptoms, as opposed to the symptoms themselves."
    }
  ],
  "video": {
    "title": "Troubleshooting a residential electrical circuit....",
    "embedUrl": "https://www.youtube.com/embed/5atOrrK8Q44",
    "note": "A residential circuit troubleshooting walkthrough. As you watch, write down each test the electrician makes and what each test rules out.",
    "more": [
      {
        "title": "Electrical Troubleshooting, electrical contractor",
        "url": "https://www.youtube.com/watch?v=kzFjMeVaddg"
      },
      {
        "title": "Troubleshooting a tripped circuit breaker had me all over this house Wellington",
        "url": "https://www.youtube.com/watch?v=dS5dz9A69kw"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> List the five steps of the troubleshooting process in order.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Observe — what should it do, what does it do, what changed? Step 2: Hypothesize — what single fault explains the symptoms? Step 3: Test — make the measurement that proves or disproves it. Step 4: Repair — fix the fault, not the symptom. Step 5: Verify — test the circuit and document the fault.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A series circuit is dead. A meter reads the full source voltage across one resistor. What does that tell you?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The full source voltage across one component means no current is flowing and no other component is dropping voltage. Step 2: There is an open in the loop. Step 3: The open is at that resistor or elsewhere in the loop — test further to find it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A fuse does not beep on a continuity test. What does that mean, and what do you do?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: No beep means the path is open — the fuse is blown. Step 2: Replace it with the same type and rating. Step 3: Before energizing, find why it blew — a blown fuse is a symptom, and the fault may still be there.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A connection drops 8 volts when it should drop almost zero. What does that mean?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A connection should drop almost no voltage. Step 2: An 8-volt drop means high resistance at the connection — a loose or corroded joint. Step 3: Resistance there means heat there, so the connection must be cleaned and tightened (de-energized, under a licensed supervisor).</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Explain the half-split method for a 16-point circuit.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Test at the middle (point 8). Step 2: If the middle is good, the fault is in the second half; if bad, in the first half. Step 3: Test at the middle of the bad half, and repeat. Step 4: Each test halves the search, so the fault is found in about four tests instead of sixteen.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Why must a component be isolated before its resistance is measured?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A connected component can read through a parallel path in the rest of the circuit. Step 2: The parallel path gives a false reading — usually lower than the true value. Step 3: Disconnecting one end makes the meter read only that component.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The first step in troubleshooting is to:",
      "choices": [
        "Replace parts at random",
        "Observe — what should it do, what does it do, what changed?",
        "Measure everything",
        "Call the inspector"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Observation comes first; it frames the hypothesis. (a) Random replacement wastes parts and hides the fault. (c) Measuring comes after hypothesizing. (d) The inspector does not troubleshoot."
    },
    {
      "q": "A meter reads the full source voltage across one resistor in a dead series circuit. This means:",
      "choices": [
        "The resistor is shorted",
        "There is an open in the loop",
        "The source voltage is too low",
        "The resistor is too small"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Full voltage across one component with no current means an open in the loop. (a) A shorted resistor drops near zero volts. (c) Source voltage does not cause this reading. (d) Resistor size does not cause this reading."
    },
    {
      "q": "A fuse that does not beep on a continuity test is:",
      "choices": [
        "Good",
        "Blown",
        "Too big",
        "Too small"
      ],
      "answer": 1,
      "explanation": "Correct: (b). No beep means no complete path — the fuse is blown. (a) A good fuse beeps. (c) and (d) Size is not what a continuity test measures."
    },
    {
      "q": "A connection that drops 8 volts when it should drop almost zero has:",
      "choices": [
        "No problem",
        "High resistance — a loose or corroded joint",
        "Too much current",
        "Too little voltage"
      ],
      "answer": 1,
      "explanation": "Correct: (b). An unexpected drop means resistance at the connection. (a) An 8-volt drop at a connection is a problem. (c) The current is not the cause; the resistance is. (d) The voltage is the symptom, not the cause."
    },
    {
      "q": "The half-split method works by:",
      "choices": [
        "Testing every point in order",
        "Testing at the middle, then at the middle of the bad half",
        "Replacing half the parts",
        "Measuring only the first half"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Each test halves the search area. (a) Testing every point is the slow way. (c) Replacement is not testing. (d) The fault may be in either half."
    },
    {
      "q": "A component must be isolated before measuring its resistance because:",
      "choices": [
        "The meter will break",
        "A parallel path can give a false reading",
        "The component will heat up",
        "The reading will be too high"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A parallel path through the rest of the circuit gives a false, usually low, reading. (a) The meter does not break. (c) The component does not heat up. (d) The reading is usually falsely low, not high."
    },
    {
      "q": "After a repair, the troubleshooter should:",
      "choices": [
        "Leave immediately",
        "Verify the circuit works and document the fault",
        "Replace another part",
        "Turn the power on and walk away"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Verify the repair and document what was found. (a) Leaving without verifying is a guess. (c) Replacing another part is random. (d) Energizing without verification is unsafe and unverified."
    },
    {
      "q": "Random part replacement is a bad troubleshooting method because it:",
      "choices": [
        "Is too fast",
        "Wastes parts and time, and can hide the real fault",
        "Is too cheap",
        "Always works"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Random replacement wastes parts, wastes time, and hides the real fault. (a) It is not faster than testing. (c) It is more expensive, not cheaper. (d) It sometimes works by luck, but it is not a method."
    }
  ],
  "studyGuide": "\n<h3>Module 12 — Troubleshooting DC Circuits: Quick Reference</h3>\n<p><strong>Core idea:</strong> Test, don't guess. One good measurement is worth ten replaced parts.</p>\n<p><strong>Process:</strong> Observe → Hypothesize → Test → Repair → Verify (and document).</p>\n<p><strong>Voltage tells you:</strong> Full source voltage across a component = open in the loop · Unexpected drop at a connection = high resistance there · Collapsed voltage + tripped breaker = short.</p>\n<p><strong>Resistance tells you:</strong> No beep = open (blown fuse, broken wire, faulty switch) · Wrong value = damaged component · Isolate one end first, or a parallel path lies.</p>\n<p><strong>Half-split:</strong> Test the middle, then the middle of the bad half — each test halves the search.</p>\n<p><strong>Self-check:</strong> List the five steps and explain what a full-voltage reading and a no-beep continuity test each mean, without looking.</p>\n"
};
