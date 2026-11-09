// ase-a2 - Module 3: Planetary Gearsets
module.exports = {
  "number": 3,
  "slug": "planetary-gearsets",
  "title": "Planetary Gearsets",
  "estTime": "3\u20134 hours",
  "objectives": [
    "Name the three members of a planetary gearset and describe how each one can be input, output, or held.",
    "Explain how holding one member still produces reduction, direct drive, overdrive, and reverse.",
    "Describe a compound gearset (Simpson and Ravigneaux) and why modern transmissions use them.",
    "Explain the role of one-way (overrunning) clutches in gearsets.",
    "Use a gearset's behavior to predict what happens when a holding clutch fails."
  ],
  "sections": [
    {
      "heading": "Three Members, Many Ratios",
      "html": "<p>A simple planetary gearset has three members: a sun gear in the center, planet gears that spin around it on a planet carrier, and a ring gear (annulus) with teeth on its inside that mesh with the planets. All three are always meshed \u2014 nothing slides in or out. The trick is that any member can be the input, any can be the output, and any can be held still, and each combination gives a different ratio.</p><p>Hold the ring gear still and drive the sun gear, and the carrier (the output) turns slower than the input \u2014 reduction, or torque multiplication. Drive the ring gear and hold the sun, and the carrier turns faster than the input in a different ratio. Lock any two members together and the whole set turns as one unit \u2014 direct drive, 1:1. That single set of parts can therefore give several ratios, which is why automatics are built around it.</p>"
    },
    {
      "heading": "Reverse and Overdrive from the Same Parts",
      "html": "<p>Reverse comes from driving one member while holding the carrier still: the output member then turns backwards. In a typical layout, driving the sun gear with the carrier held makes the ring gear \u2014 the output \u2014 spin in reverse. No separate reverse gear is needed; the same planet gears that give forward ratios give reverse when a different member is held.</p><p>Overdrive is the mirror image: drive the carrier and hold the sun gear, and the ring gear output spins faster than the input. The engine turns slowly while the wheels turn fast. A transmission with several gearsets can stack these tricks: one set gives the low ratios, another gives overdrive, and clutches choose which set is active at any moment.</p>"
    },
    {
      "heading": "Compound Gearsets: Simpson and Ravigneaux",
      "html": "<p>Real transmissions rarely use a single simple set. The Simpson design joins two simple gearsets so they share a sun gear, giving three forward ratios plus reverse from two sets. The Ravigneaux design packs two sun gears (one small, one large), two sets of planets, and one carrier into a single compact unit \u2014 essentially two gearsets in the space of one. Most modern automatics use Ravigneaux sets because they give many ratios from very few parts.</p><p>More ratios mean the engine can stay closer to its efficient speed at every road speed, which is why transmissions grew from three speeds to six, eight, and ten. The price is complexity: more clutches, more passages in the valve body, and a control system that must time every handoff perfectly. That is the trade every automatic makes \u2014 smoothness and efficiency in exchange for precision engineering.</p>"
    },
    {
      "heading": "One-Way Clutches",
      "html": "<p>A one-way (overrunning) clutch is a clever helper inside the gear train. It locks when torque tries to turn it one way and freewheels when torque reverses. In a gearset it can hold a member still during acceleration and then release on its own when the next gear takes over \u2014 no hydraulic timing needed for that release. That makes shifts smoother, because the outgoing clutch does not have to be timed to the millisecond.</p><p>One-way clutches also explain a common diagnostic clue: a transmission that drives fine in one direction of torque but freewheels in the other. Engine braking in a low gear, for example, may disappear if the one-way clutch that holds the gearset on overrun has failed \u2014 the car coasts instead of slowing when the driver lifts off.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong> A planetary set has sun, planets on a carrier, and ring gear; holding one member changes the ratio. The same set gives reduction, direct drive, overdrive, and reverse. Compound sets (Simpson, Ravigneaux) pack more ratios into less space. One-way clutches hold and release automatically.</p><p><div class=\"callout\"><strong>Common mistake:</strong> Thinking each gear is a separate pair of gears. In an automatic the gears are always meshed \u2014 the 'gear' you feel is which member is held, not which gears are engaged.</div><div class=\"callout\"><strong>Common mistake:</strong> Forgetting that a failed holding clutch can freewheel a gearset. If a gear is missing but the others work, ask which clutch holds that gear's member \u2014 that is where the fault usually sits.</div></p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Sun gear",
      "def": "The center gear of a planetary set, meshed with the planet gears."
    },
    {
      "term": "Planet gears",
      "def": "The small gears that orbit the sun gear, carried on the planet carrier."
    },
    {
      "term": "Planet carrier",
      "def": "The frame that holds the planet gears and carries their combined motion out as output."
    },
    {
      "term": "Ring gear",
      "def": "The outer gear with internal teeth that meshes with the planet gears; also called the annulus."
    },
    {
      "term": "Reduction",
      "def": "A ratio where the output turns slower than the input, multiplying torque."
    },
    {
      "term": "Direct drive",
      "def": "A 1:1 ratio \u2014 input and output turn together, usually by locking two gearset members."
    },
    {
      "term": "Overdrive",
      "def": "A ratio where the output turns faster than the input."
    },
    {
      "term": "Simpson gearset",
      "def": "Two simple planetary sets sharing a sun gear, giving three forward ratios plus reverse."
    },
    {
      "term": "Ravigneaux gearset",
      "def": "A compound set with two sun gears, two planet sets, and one carrier \u2014 two gearsets in one compact unit."
    },
    {
      "term": "One-way clutch",
      "def": "A clutch that locks in one direction and freewheels in the other; also called an overrunning clutch."
    },
    {
      "term": "Held member",
      "def": "The gearset member stopped by a clutch or band so the other two can produce a ratio."
    },
    {
      "term": "Annulus",
      "def": "Another name for the ring gear of a planetary set."
    },
    {
      "term": "Gearset",
      "def": "A complete planetary assembly of sun, planets, carrier, and ring gear."
    },
    {
      "term": "Ratio change",
      "def": "In an automatic, a change in which gearset member is held, not a change of meshed gears."
    }
  ],
  "video": {
    "title": "Planetary Gear System: How it Works & Why It's So Powerful",
    "embedUrl": "https://www.youtube.com/embed/XL2QBS7xaNs",
    "note": "A clear visual explanation of the planetary gear system: sun, planets, carrier, and ring, and how holding each member changes the output. Pause on each combination and name the ratio it produces before the video does.",
    "more": [
      {
        "title": "How Does a Planetary Gear Set Work in an Automatic Transmission?",
        "url": "https://www.youtube.com/watch?v=VBSBHES1wik"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A simple planetary set has three members. Name them and state which one carries the planet gears.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Sun gear (center), planet gears, and ring gear. Step 2: The planet carrier holds the planet gears and carries their motion out.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Hold the ring gear still and drive the sun gear. Does the carrier turn faster or slower than the input, and what is that ratio called?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The carrier turns slower than the sun gear input. Step 2: That is reduction \u2014 output speed falls and torque rises.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> How does a transmission get direct drive (1:1) from a planetary set?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Lock any two members together. Step 2: With two members locked, the whole set turns as one unit, so input and output speeds match.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> How does the same gearset produce reverse?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Hold the carrier still and drive the sun gear. Step 2: The ring gear output then turns backwards \u2014 no separate reverse gear is needed.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> What is the advantage of a Ravigneaux compound set over a single simple set?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: It packs two sun gears and two planet sets around one carrier. Step 2: It gives more ratios from fewer parts in less space, which is how modern transmissions reach eight or ten speeds.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A car has no engine braking in a low gear but drives forward normally. Which part do you suspect, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Suspect the one-way clutch that holds the gearset on overrun. Step 2: It can still lock under drive torque but freewheel on overrun, so forward drive works while engine braking disappears.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The three members of a simple planetary gearset are:",
      "choices": [
        "Sun gear, planet gears, and ring gear",
        "Input shaft, output shaft, and pump",
        "Clutch, band, and servo",
        "Valve body, filter, and cooler"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Sun, planets, and ring are the three members. (b) Those are transmission parts, not gearset members. (c) Those apply clutches and bands. (d) Those are hydraulic parts."
    },
    {
      "q": "Holding the ring gear still while driving the sun gear gives:",
      "choices": [
        "Overdrive",
        "Reduction \u2014 the carrier turns slower than the input",
        "Reverse",
        "Neutral"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A held ring with a driven sun makes the carrier turn slower \u2014 reduction. (a) Overdrive needs the output to outrun the input. (c) Reverse needs the carrier held. (d) Neutral releases all holding clutches."
    },
    {
      "q": "Direct drive (1:1) is made by:",
      "choices": [
        "Holding the sun gear",
        "Locking any two gearset members together so the set turns as one",
        "Releasing every clutch",
        "Holding the carrier"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Two locked members make the whole set rotate together. (a) Holding the sun gives a ratio, not 1:1. (c) Releasing everything gives Neutral. (d) Holding the carrier with a driven sun gives reverse."
    },
    {
      "q": "Reverse is produced by:",
      "choices": [
        "Driving the sun gear with the carrier held, so the ring gear turns backwards",
        "Shifting the gears out of mesh",
        "Reversing the pump",
        "Applying the lock-up clutch"
      ],
      "answer": 0,
      "explanation": "Correct: (a). A held carrier reverses the output direction. (b) Planetary gears never leave mesh. (c) The pump always turns the same way. (d) Lock-up connects the converter, it does not reverse anything."
    },
    {
      "q": "A Ravigneaux gearset is:",
      "choices": [
        "A single sun gear with one planet",
        "A compound set with two sun gears, two planet sets, and one carrier",
        "A manual gearbox",
        "A type of torque converter"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Ravigneaux packs two gearsets into one compact unit. (a) That describes a simple set. (c) It is an automatic gearset, not a manual box. (d) The converter is a separate part."
    },
    {
      "q": "A one-way clutch in a gearset:",
      "choices": [
        "Locks in one direction and freewheels in the other",
        "Applies with hydraulic pressure only",
        "Replaces the valve body",
        "Works only in Reverse"
      ],
      "answer": 0,
      "explanation": "Correct: (a). It locks one way and freewheels the other, releasing automatically. (b) It is mechanical, not hydraulic. (c) It has nothing to do with the valve body. (d) It is used in forward gears too."
    },
    {
      "q": "In an automatic, changing 'gear' means:",
      "choices": [
        "Sliding gears into mesh",
        "Changing which gearset member is held still",
        "Changing the fluid",
        "Changing the final drive ratio"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The gears stay meshed; the held member changes. (a) That is how a manual works. (c) Fluid type never changes. (d) The final drive ratio is fixed."
    },
    {
      "q": "If the clutch that holds a gearset member fails, the most likely result is:",
      "choices": [
        "The engine stalls",
        "That gear is lost or the set freewheels, while other gears may still work",
        "The brakes fail",
        "The pump stops"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A failed holding clutch leaves its member free, so that ratio disappears. (a) Stalling points at lock-up, not a holding clutch. (c) Brakes are a separate system. (d) The pump is driven by the converter hub."
    }
  ],
  "studyGuide": "\n<h3>Module 3 \u2014 Planetary Gearsets: Quick Reference</h3>\n<p><strong>Core idea:</strong> Sun + planets on a carrier + ring gear. Hold one member, drive another, and the third gives the ratio.</p>\n<p><strong>Combinations:</strong> Held ring + driven sun = reduction \u00b7 two members locked = direct drive \u00b7 held sun + driven carrier = overdrive \u00b7 held carrier + driven sun = reverse.</p>\n<p><strong>Compound sets:</strong> Simpson (two sets, shared sun) \u00b7 Ravigneaux (two suns, two planet sets, one carrier).</p>\n<p><strong>One-way clutch:</strong> Locks one way, freewheels the other \u2014 holds a member, then releases itself.</p>\n<p><strong>Watch out:</strong> A missing gear often means a failed holding clutch, not a broken gear \u2014 the gears never leave mesh.</p>\n<p><strong>Self-check:</strong> For each ratio, name the held member and the input. If you can work all four from memory, you have this module.</p>\n"
};
