module.exports = {
  "midterm": {
    "title": "Midterm Exam",
    "minutes": 75,
    "coverage": "Modules 1–6",
    "questions": [
      {
        "module": 1,
        "q": "A school needs a new intercom, a data network, and a fire alarm. Which trade does all three?",
        "choices": [
          "The plumbing trade",
          "The low-voltage trade",
          "The roofing trade",
          "The masonry trade"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Intercom, data, and fire alarm are all low-voltage systems. (a) Plumbing installs water and drainage. (c) Roofing covers roofs. (d) Masonry lays block and brick."
      },
      {
        "module": 1,
        "q": "A circuit fed by a listed Class 2 power supply is:",
        "choices": [
          "A Class 1 circuit",
          "A Class 2 circuit",
          "A power circuit",
          "An unlisted circuit"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The listed Class 2 source makes it a Class 2 circuit. (a) Class 1 circuits are not power-limited. (c) A power circuit carries bulk power, not signals. (d) The source is listed, so the circuit is not unlisted."
      },
      {
        "module": 1,
        "q": "NEC Article 725 covers:",
        "choices": [
          "Fire alarm systems",
          "Remote-control, signaling, and power-limited circuits",
          "Communications circuits",
          "Service entrances"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Article 725 covers signaling and power-limited circuits. (a) Fire alarms are Article 760. (c) Communications circuits are Article 800. (d) Service entrances are Article 230."
      },
      {
        "module": 2,
        "q": "The permanent horizontal cable run is limited to:",
        "choices": [
          "50 meters",
          "90 meters",
          "100 meters",
          "150 meters"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The permanent horizontal run is 90 meters; the full channel with patch cords is 100 meters. (a) 50 meters is well under the limit. (c) 100 meters is the channel limit. (d) 150 meters exceeds the standard."
      },
      {
        "module": 2,
        "q": "A campus backbone link of 2 kilometers should use:",
        "choices": [
          "Category 5e copper",
          "Multimode fiber",
          "Singlemode fiber",
          "Category 6 copper"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Singlemode fiber runs for kilometers. (a) and (d) Copper is limited to about 100 meters per channel. (b) Multimode is for shorter in-building runs."
      },
      {
        "module": 2,
        "q": "In T568B, pins 3 and 6 carry the:",
        "choices": [
          "Orange pair",
          "Green pair",
          "Blue pair",
          "Brown pair"
        ],
        "answer": 1,
        "explanation": "Correct: (b). T568B puts white/green and green on pins 3 and 6. (a) The orange pair is pins 1-2. (c) The blue pair is pins 4-5. (d) The brown pair is pins 7-8."
      },
      {
        "module": 3,
        "q": "A wireless access point in a classroom is most commonly powered by:",
        "choices": [
          "A 120 V outlet",
          "PoE from the network switch",
          "A battery",
          "A solar panel"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Access points are usually powered by PoE. (a) A local outlet is possible but not the usual method. (c) Batteries are not used for fixed access points. (d) Solar is not the usual power source indoors."
      },
      {
        "module": 3,
        "q": "A VoIP phone that will not power up is most likely suffering from:",
        "choices": [
          "A bad handset",
          "A PoE problem — the port may not deliver enough watts",
          "A bad cable jacket color",
          "A missing label"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A phone that will not power up is usually a PoE budget or standard problem. (a) A bad handset would not prevent power-up. (c) Jacket color does not affect power. (d) A missing label is a documentation error."
      },
      {
        "module": 4,
        "q": "The device that lets a person start the fire alarm by hand is the:",
        "choices": [
          "Smoke detector",
          "Manual pull station",
          "Horn",
          "Battery"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A pull station is operated by hand. (a) A smoke detector senses smoke automatically. (c) A horn is a notification appliance. (d) A battery is the standby power source."
      },
      {
        "module": 4,
        "q": "In a conventional fire alarm system, the panel identifies an alarm by:",
        "choices": [
          "The exact device",
          "The zone",
          "The wire color",
          "The time of day"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Conventional systems report by zone. (a) The exact device is reported by an addressable system. (c) Wire color does not report alarms. (d) Time does not locate a fire."
      },
      {
        "module": 4,
        "q": "A heat detector is the right device for:",
        "choices": [
          "A library",
          "A boiler room",
          "A bedroom",
          "A hallway"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Boiler rooms produce dust and fumes that false-alarm smoke detectors. (a), (c), and (d) Libraries, bedrooms, and hallways use smoke detectors."
      },
      {
        "module": 4,
        "q": "NFPA 72 governs:",
        "choices": [
          "What fire alarm systems must do and where devices go",
          "How to pull data cable",
          "The price of fire alarm panels",
          "Who may own a building"
        ],
        "answer": 0,
        "explanation": "Correct: (a). NFPA 72 is the National Fire Alarm and Signaling Code. (b) Data cabling is TIA-568. (c) NFPA 72 does not set prices. (d) Ownership is not a code matter."
      },
      {
        "module": 5,
        "q": "FPLR cable is:",
        "choices": [
          "General-purpose fire alarm cable",
          "Riser-rated fire alarm cable",
          "Plenum-rated fire alarm cable",
          "Data cable"
        ],
        "answer": 1,
        "explanation": "Correct: (b). FPLR is riser-rated. (a) General-purpose is FPL. (c) Plenum-rated is FPLP. (d) Data cable is covered by Article 800 and TIA-568."
      },
      {
        "module": 5,
        "q": "A Class A fire alarm circuit differs from a Class B circuit because it:",
        "choices": [
          "Uses no wire",
          "Loops back to the panel and survives a single open fault",
          "Has no end-of-line device and no supervision",
          "Is always wireless"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Class A loops back to the panel and can be fed from either direction. (a) It uses wire like any circuit. (c) Class A circuits are supervised; Class B uses the end-of-line device. (d) Fire alarm circuits are wired, not wireless."
      },
      {
        "module": 5,
        "q": "Fire alarm cable must be separated from power conductors to:",
        "choices": [
          "Save money",
          "Prevent a power fault from disabling the fire alarm and prevent noise from causing false alarms",
          "Make the cable easier to see",
          "Use less conduit"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Separation protects the life-safety system from power faults and interference. (a) Cost is not the reason. (c) Visibility is not the reason. (d) Separation does not reduce conduit use."
      },
      {
        "module": 5,
        "q": "The end-of-line device on a Class B circuit lets the panel:",
        "choices": [
          "Sound the horn",
          "Supervise the wiring and detect an open",
          "Charge the battery",
          "Detect smoke"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The end-of-line device lets the panel see the circuit as complete and detect an open. (a) Horns are notification appliances. (c) The charger charges the battery. (d) Detectors detect smoke."
      },
      {
        "module": 6,
        "q": "A strobe is required in a fire alarm system to alert:",
        "choices": [
          "People who are asleep only",
          "People who cannot hear the horn",
          "The fire department only",
          "The panel"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Strobes provide visual notification for people who cannot hear. (a) Sleeping areas need low-frequency sounders as well as strobes. (c) The fire department is notified by the panel's communicator. (d) The panel does not need a strobe."
      },
      {
        "module": 6,
        "q": "Temporal-3 is the sound pattern of:",
        "choices": [
          "One long tone",
          "Three pulses, a pause, then three pulses again",
          "A continuous siren",
          "A voice message"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Temporal-3 is three pulses, pause, repeat. (a) One long tone is not temporal-3. (c) A continuous siren is not the standard. (d) A voice message is voice evacuation, not temporal-3."
      },
      {
        "module": 6,
        "q": "Fire alarm batteries must support:",
        "choices": [
          "1 hour of standby",
          "24 hours of standby plus the alarm period",
          "No standby",
          "1 week of standby"
        ],
        "answer": 1,
        "explanation": "Correct: (b). NFPA 72 requires 24 hours of standby plus the alarm period. (a) One hour is far too short. (c) Standby power is required. (d) One week is not the requirement."
      },
      {
        "module": 6,
        "q": "A battery that reads full voltage at rest but collapses under load:",
        "choices": [
          "Is fine",
          "Has lost capacity and must be replaced",
          "Needs a bigger voltmeter",
          "Needs more water"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Lost capacity shows up under load — replace the battery. (a) A battery that collapses under load is not fine. (c) The voltmeter is not the problem. (d) Sealed batteries are not topped up with water."
      },
      {
        "module": 3,
        "q": "PoE++ (802.3bt) can deliver up to about:",
        "choices": [
          "15 watts",
          "30 watts",
          "60 or 90 watts",
          "200 watts"
        ],
        "answer": 2,
        "explanation": "Correct: (c). PoE++ delivers 60 or 90 W per port. (a) 15 W is 802.3af. (b) 30 W is 802.3at. (d) 200 W is beyond any PoE standard."
      },
      {
        "module": 2,
        "q": "Mixing T568A on one end and T568B on the other end of a cable creates:",
        "choices": [
          "A straight-through cable",
          "A crossover cable",
          "A fiber cable",
          "A shorter cable"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Different standards on the two ends swap the pairs and make a crossover. (a) A straight-through uses the same standard on both ends. (c) Fiber is a different cable type. (d) The length does not change."
      },
      {
        "module": 1,
        "q": "The Michigan code basis for this program is:",
        "choices": [
          "The 2020 NEC",
          "The 2023 NEC plus Michigan Part 8 amendments adopted March 12, 2024",
          "The 2026 NEC",
          "No code applies to low voltage"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Michigan adopted the 2023 NEC with Part 8 amendments on March 12, 2024. (a) The 2020 NEC is not the adopted edition. (c) The 2026 NEC is not cited in this program. (d) Low-voltage work is regulated and inspected."
      },
      {
        "module": 4,
        "q": "An analog addressable detector reports:",
        "choices": [
          "Only alarm or no alarm",
          "Its smoke level continuously, so the panel can decide when to alarm",
          "The temperature only",
          "Nothing — it is a dummy device"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Analog addressable detectors report their smoke level continuously. (a) That is a conventional detector. (c) Temperature is a heat detector's job. (d) It is a real, working detector."
      },
      {
        "module": 6,
        "q": "Voice evacuation is used in tall buildings because it:",
        "choices": [
          "Is cheaper than horns",
          "Can give different instructions to different floors",
          "Needs no amplifiers",
          "Replaces the fire alarm panel"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Voice can direct each floor separately. (a) Voice systems cost more than horns. (c) Voice systems need amplifiers. (d) The panel still controls the system."
      }
    ]
  },
  "final": {
    "title": "Final Exam",
    "minutes": 120,
    "coverage": "Modules 1–12",
    "questions": [
      {
        "module": 1,
        "q": "A Class 3 circuit is:",
        "choices": [
          "Not power-limited",
          "Power-limited but allowed higher voltage than Class 2",
          "A 120 V power circuit",
          "A fiber circuit"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Class 3 circuits are power-limited but may carry higher voltage than Class 2. (a) Class 1 circuits are not power-limited. (c) A 120 V circuit is a power circuit. (d) Fiber is not a Class 3 circuit."
      },
      {
        "module": 2,
        "q": "The telecommunications room on each floor is where:",
        "choices": [
          "The building's water enters",
          "Horizontal cables terminate on patch panels and connect to network equipment",
          "The fire alarm panel must be hidden",
          "Cable is stored and never used"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The telecommunications room holds patch panels and switches for the floor. (a) Water enters at the water service. (c) The fire alarm panel is not hidden there. (d) Cable in the room is in use."
      },
      {
        "module": 3,
        "q": "A switch with a 370 W PoE budget powers 10 phones at 7 W each. How much budget remains?",
        "choices": [
          "370 W",
          "300 W",
          "70 W",
          "0 W"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 10 × 7 = 70 W used; 370 − 70 = 300 W remains. (a) 370 W is the total budget. (c) 70 W is what the phones use. (d) The budget is not exhausted."
      },
      {
        "module": 4,
        "q": "A duct detector's job is to:",
        "choices": [
          "Detect smoke in ductwork and shut down air handlers so smoke is not spread",
          "Measure air temperature",
          "Sound the horn",
          "Charge the battery"
        ],
        "answer": 0,
        "explanation": "Correct: (a). A duct detector stops smoke from being spread through the ductwork. (b) Temperature is a heat detector's job. (c) Horns are notification appliances. (d) The charger charges the battery."
      },
      {
        "module": 5,
        "q": "General-purpose FPL cable may NOT be used in:",
        "choices": [
          "A general office ceiling",
          "A riser or a plenum",
          "A surface-mounted run",
          "A conduit"
        ],
        "answer": 1,
        "explanation": "Correct: (b). FPL is general-purpose only — risers need FPLR and plenums need FPLP. (a) A general office ceiling is a general location. (c) Surface runs are general locations. (d) Conduit does not change the cable rating requirement."
      },
      {
        "module": 6,
        "q": "A sleeping room in a hotel has a horn-strobe, but the guest is hard of hearing and sleeps through the high-pitched tone. What does the code require for this room?",
        "choices": [
          "A louder high-frequency horn",
          "A low-frequency (520 Hz) sounder, which wakes sleeping people more reliably",
          "A second high-frequency horn",
          "No sounder at all — the strobe is enough"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Low-frequency 520 Hz sounders are required in sleeping areas because they wake sleeping people, including those with hearing loss, more reliably than high-frequency tones. (a) A louder high-frequency horn is still the wrong frequency. (c) A second high-frequency horn has the same problem. (d) A strobe alone does not wake a sleeping person."
      },
      {
        "module": 7,
        "q": "In an access control system, the controller's job is to:",
        "choices": [
          "Read the credential",
          "Check the credential against permissions and release the lock if allowed",
          "Hold the door shut",
          "Record video"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The controller checks permissions and releases the lock. (a) The reader reads the credential. (c) The lock holds the door shut. (d) Video is recorded by the NVR."
      },
      {
        "module": 7,
        "q": "A maglock on an exit-path door must:",
        "choices": [
          "Stay locked when power fails",
          "Release when power fails and when the fire alarm sounds",
          "Never be tested",
          "Lock harder during a fire"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Maglocks are fail-safe and must release on power loss and on fire alarm. (a) Staying locked would trap people. (c) The release must be tested. (d) Locking harder during a fire is the opposite of what is required."
      },
      {
        "module": 7,
        "q": "An NVR differs from a DVR because it records:",
        "choices": [
          "Analog cameras on coax",
          "IP cameras on the network",
          "Audio only",
          "Nothing — they are the same"
        ],
        "answer": 1,
        "explanation": "Correct: (b). An NVR records IP cameras. (a) Analog cameras record to a DVR. (c) Both record video, not audio only. (d) They are different devices for different camera types."
      },
      {
        "module": 8,
        "q": "The dome light over a patient's door shows:",
        "choices": [
          "The time of day",
          "That a call is active, with color showing the priority",
          "The room temperature",
          "The nurse's name"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The dome light shows the call and its priority by color. (a) Time is shown on a clock. (c) Temperature is shown on a thermostat. (d) The nurse's name is not shown by the dome light."
      },
      {
        "module": 8,
        "q": "A hospital's essential electrical system has three branches. Which branch powers the exit signs, the fire alarm, and the emergency lighting?",
        "choices": [
          "The equipment branch",
          "The critical branch",
          "The life safety branch",
          "The normal power branch"
        ],
        "answer": 2,
        "explanation": "Correct: (c). The life safety branch powers exit signs, fire alarm, and emergency lighting — the systems that protect life in an emergency. (a) The equipment branch powers equipment that can wait, such as selected receptacles and elevators. (b) The critical branch powers patient-care equipment. (d) Normal power is not part of the essential system."
      },
      {
        "module": 9,
        "q": "The equipment grounding conductor is sized by:",
        "choices": [
          "The size of the load",
          "NEC Table 250.122, based on the overcurrent device rating",
          "The length of the cable",
          "The color of the wire"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Table 250.122 sizes the EGC by the overcurrent device rating. (a) Load size does not set the EGC size. (c) Length does not set the size. (d) Color identifies the conductor, it does not size it."
      },
      {
        "module": 9,
        "q": "A ground loop causes:",
        "choices": [
          "A cable to overheat",
          "Hum, noise, and intermittent faults from current between two grounds at different potentials",
          "A battery to fail",
          "A label to fall off"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A ground loop is current between two grounds at different potentials. (a) Overheating is a different fault. (c) Battery failure is unrelated. (d) A label falling off is a documentation issue."
      },
      {
        "module": 10,
        "q": "A certifier test that passes with a 1 dB margin on NEXT should be treated as:",
        "choices": [
          "A solid pass with no concern",
          "A pass, but a thin margin that deserves a check of the termination",
          "A failure",
          "A wire-map problem"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A thin margin means the cable is close to the limit — check the termination. (a) A 1 dB margin is thin, not comfortable. (c) It passed, so it is not a failure. (d) The wire map is a separate measurement."
      },
      {
        "module": 10,
        "q": "A technician is about to test a fiber link with an OTDR and connects a launch cable between the OTDR and the link. Why is the launch cable used?",
        "choices": [
          "To make the fiber longer",
          "To move the OTDR's dead zone off the first connector so the first connector can be measured",
          "To increase the light power",
          "To connect the OTDR to the power supply"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The launch cable gives the OTDR a length of fiber before the link under test, so the instrument's dead zone falls on the launch cable and the first connector of the link can be measured. (a) Length is not the purpose. (c) The launch cable does not increase power. (d) It connects to the fiber, not the power supply."
      },
      {
        "module": 11,
        "q": "A Class II, Division 1 location is hazardous because of:",
        "choices": [
          "Flammable gas present under normal conditions",
          "Combustible dust present under normal conditions",
          "Ignitable fibers present only abnormally",
          "Water"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Class II is dust; Division 1 is normal conditions. (a) Gas under normal conditions is Class I, Division 1. (c) Fibers are Class III, and abnormally is Division 2. (d) Water makes a wet location."
      },
      {
        "module": 11,
        "q": "A conduit seal at the boundary of a classified area prevents:",
        "choices": [
          "Water from entering",
          "Flammable gas from traveling through the conduit into a safe area",
          "Noise on the cable",
          "The conduit from rusting"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Seals stop gas migration through the conduit system. (a) Water sealing is a different purpose. (c) Seals do not block electrical noise. (d) Rust is prevented by corrosion-resistant materials."
      },
      {
        "module": 12,
        "q": "The record of completion for a fire alarm system is:",
        "choices": [
          "The installer's invoice",
          "The documented record of the acceptance test, listing every device and result",
          "A cable label",
          "The permit application"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The record of completion documents the acceptance test. (a) An invoice is billing. (c) A label identifies a cable. (d) The permit application is filed before the work."
      },
      {
        "module": 12,
        "q": "Divide-and-conquer troubleshooting starts by:",
        "choices": [
          "Replacing the most expensive part",
          "Defining the fault exactly, then splitting the system in half and testing",
          "Replacing the whole system",
          "Ignoring the fault"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Define the fault, split, test, halve until isolated. (a) Replacing the most expensive part is guessing. (c) Replacing the whole system is drastic. (d) Ignoring a fault leaves it in place."
      },
      {
        "module": 1,
        "q": "Low-voltage work still requires permits and inspections because:",
        "choices": [
          "It is expensive",
          "The systems are life-safety and reliability critical, and the code requires it",
          "Inspectors need work",
          "The cable is red"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Fire alarms and other low-voltage systems are life-safety critical and are regulated. (a) Cost is not the reason. (c) Inspectors enforce the code, they do not create the requirement. (d) Cable color is not a code reason."
      },
      {
        "module": 2,
        "q": "Category 6A is chosen over Category 6 when the customer needs:",
        "choices": [
          "Voice only",
          "10-Gigabit Ethernet over the full 100-meter channel",
          "A cheaper cable",
          "Outdoor burial"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Cat6A supports 10-Gigabit over the full channel; Cat6 only over short runs. (a) Voice does not need Cat6A. (c) Cat6A costs more than Cat6. (d) Outdoor burial needs a cable listed for that use."
      },
      {
        "module": 3,
        "q": "IP video differs from coaxial video because it:",
        "choices": [
          "Uses no cable",
          "Runs over the structured cabling as network data",
          "Needs a VCR",
          "Only works outdoors"
        ],
        "answer": 1,
        "explanation": "Correct: (b). IP video is network data on the structured cabling. (a) It uses the data cable. (c) A VCR is obsolete. (d) IP video works indoors and outdoors."
      },
      {
        "module": 4,
        "q": "A smoke detector on a smooth ceiling is spaced by:",
        "choices": [
          "Guesswork",
          "Its listed coverage area, adjusted for beams, joists, and ceiling shape",
          "The color of the ceiling",
          "The length of the wire"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Spacing follows the listing and NFPA 72 rules, adjusted for ceiling features. (a) Spacing is never guesswork. (c) Ceiling color is irrelevant. (d) Wire length does not set detector spacing."
      },
      {
        "module": 5,
        "q": "A PLFA circuit can often be run in listed fire alarm cable without conduit because:",
        "choices": [
          "The cable is red",
          "The listed power-limited source limits the energy the circuit can deliver",
          "Fire alarm cable is free",
          "Conduit is illegal for fire alarms"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The power-limited source limits the energy, so the wiring rules are less restrictive. (a) Color is not a code reason. (c) Cable is not free. (d) Conduit is permitted for fire alarms."
      },
      {
        "module": 6,
        "q": "During the annual test, a technician disconnects normal power and runs the fire alarm system on its batteries. The panel voltage reads 27 volts at rest but drops sharply under load and the system shuts down early. What does this show?",
        "choices": [
          "The batteries are fine — voltage at rest is all that matters",
          "The batteries have lost capacity and must be replaced, because a battery can pass a voltage check and still fail under load",
          "The panel is defective",
          "The alarm period was too long"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A battery that has lost capacity can read a normal voltage at rest and fail under load — which is why the test is done under load. (a) Voltage at rest is not enough. (c) The panel is not the cause; the batteries are. (d) The alarm period is set by the design, not the cause of the failure."
      },
      {
        "module": 7,
        "q": "A door on a fire egress path has an electric lock. A fire alarm sounds. What must the lock do, and why?",
        "choices": [
          "Stay locked so no one can enter",
          "Release (fail-safe), so people can escape through the egress path",
          "Lock tighter",
          "Switch to a PIN code"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A lock on an egress path must be fail-safe: it releases when power is lost or the fire alarm sounds, so people can escape. (a) Staying locked would trap people. (c) Locking tighter is the opposite of what egress requires. (d) A PIN code does not help people escaping."
      },
      {
        "module": 8,
        "q": "A patient presses the call button in a hospital room. The nurse station receives a normal call, a bath call, and an emergency call from three different rooms at the same time. How does the system handle them?",
        "choices": [
          "It answers them in the order they arrived",
          "It prioritizes them — the emergency call is shown and sounded first, then the bath call, then the normal call",
          "It ignores the normal call",
          "It sends all three to the same nurse"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Nurse-call systems prioritize by urgency: an emergency call outranks a bath call, which outranks a normal call. (a) Arrival order ignores urgency. (c) The normal call is not ignored; it is queued. (d) The calls go to the staff on duty, prioritized, not all to one nurse."
      },
      {
        "module": 9,
        "q": "Bonding a rack through paint is bad because:",
        "choices": [
          "Paint is the wrong color",
          "Paint is an insulator, so the connection may not conduct",
          "Paint makes the screw rust",
          "Paint is expensive"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Paint insulates, so the bond may not conduct. (a) Color does not matter. (c) Rust is not the issue. (d) Cost is not the issue."
      },
      {
        "module": 10,
        "q": "An OTDR needs a launch cable so that:",
        "choices": [
          "The test runs faster",
          "The first connector can be measured, past the OTDR's dead zone",
          "The OTDR gets power",
          "The OTDR connects to the internet"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The launch cable moves the dead zone away from the first connector. (a) Speed is not the purpose. (c) The OTDR has its own power. (d) The OTDR does not need the internet."
      },
      {
        "module": 11,
        "q": "The technician's role in classifying a hazardous location is to:",
        "choices": [
          "Classify it on the day of the job",
          "Install to the classification set by the engineer and the AHJ, and stop and ask if it is unclear",
          "Ignore the classification",
          "Classify it by smell"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The technician installs to the given classification and asks when it is unclear. (a) The technician never reclassifies. (c) Ignoring the classification is a violation. (d) Smell is not a classification method."
      },
      {
        "module": 12,
        "q": "A deficiency found during inspection must be:",
        "choices": [
          "Ignored",
          "Corrected and re-tested before acceptance",
          "Hidden behind a ceiling tile",
          "Left for the owner"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A deficiency is corrected and re-tested before the system is accepted. (a) Ignoring it leaves a non-compliant system. (c) Hiding it is a violation. (d) The installer corrects it."
      },
      {
        "module": 2,
        "q": "A channel of 95 meters of permanent cable plus 8 meters of patch cords is:",
        "choices": [
          "Within limits",
          "3 meters over the 100-meter limit",
          "Within limits if the cable is Cat6A",
          "Within limits if the patch cords are short"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 95 + 8 = 103 meters, which is 3 meters over the 100-meter channel limit. (a) 103 meters exceeds the limit. (c) The category does not change the length limit. (d) The patch cords are part of the channel length."
      },
      {
        "module": 3,
        "q": "A camera needing 60 watts of PoE requires:",
        "choices": [
          "802.3af",
          "802.3at",
          "802.3bt",
          "No PoE standard can deliver 60 watts"
        ],
        "answer": 2,
        "explanation": "Correct: (c). 802.3bt (PoE++) delivers 60 or 90 W. (a) 802.3af tops out near 15 W. (b) 802.3at tops out near 30 W. (d) PoE++ can deliver 60 W."
      },
      {
        "module": 4,
        "q": "A TROUBLE signal on a fire alarm panel means:",
        "choices": [
          "There is a fire",
          "There is a fault in the system, such as an open circuit or low battery",
          "The system is working normally",
          "Someone pulled a station"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Trouble means a system fault to investigate. (a) A fire shows as ALARM. (c) Normal is the normal state. (d) A pulled station shows as ALARM."
      },
      {
        "module": 5,
        "q": "In a Class B circuit, a wire break causes:",
        "choices": [
          "Nothing",
          "Devices beyond the break to stop working, and a trouble signal",
          "The building to lose power",
          "The panel to shut down"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Devices beyond the break lose their path, and the panel reports trouble. (a) That is a Class A loop. (c) A fire alarm fault does not cut building power. (d) The panel stays on and reports the trouble."
      },
      {
        "module": 6,
        "q": "Two strobes in the same room flash at slightly different times. What problem does this cause, and how is it fixed?",
        "choices": [
          "No problem — strobes are independent",
          "The unsynchronized flashes can trigger photosensitive epilepsy, so the strobes must be synchronized",
          "The room is too bright",
          "The strobes are too close together"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Strobes in the same field of view must flash in synchronization, because unsynchronized flashing can trigger photosensitive epilepsy. (a) It is a real problem. (c) Brightness is not the issue. (d) Distance is not the issue — synchronization is."
      },
      {
        "module": 7,
        "q": "A small office wants its cameras to keep 30 days of video. The system has 8 cameras at 1080p, recording on motion only, and the recorder overwrites after 6 days. What is the fix?",
        "choices": [
          "Add more cameras",
          "Increase the storage — a larger hard drive or more drives — so the retention reaches 30 days",
          "Turn the cameras off at night",
          "Lower the resolution to 144p"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Retention depends on storage: more cameras, higher resolution, and longer retention all need more drive space. (a) More cameras would use more storage, not less. (c) Turning cameras off at night loses the video the owner wants. (d) Dropping to 144p would destroy the picture quality and may still not reach 30 days."
      },
      {
        "module": 8,
        "q": "An emergency nurse call must be distinguishable from a normal call by:",
        "choices": [
          "Nothing — all calls are the same",
          "Dome-light color and tone",
          "The time of day",
          "The patient's name"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Priority is shown by dome-light color and tone. (a) Treating all calls the same defeats the priority system. (c) Time of day does not show priority. (d) A name does not show priority."
      },
      {
        "module": 9,
        "q": "Grounding and bonding are both required because:",
        "choices": [
          "The code says so for no reason",
          "Grounding connects the system to earth and bonding connects metal parts together — each does a job the other cannot",
          "Bonding replaces grounding",
          "Grounding replaces bonding"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Grounding gives the earth reference; bonding gives the fault path — both are needed. (a) The code has a reason. (c) Bonding does not replace grounding. (d) Grounding does not replace bonding."
      },
      {
        "module": 10,
        "q": "Tier 1 fiber testing measures:",
        "choices": [
          "The OTDR trace",
          "The whole link's loss with a light source and power meter",
          "The wire map",
          "The voltage"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Tier 1 is insertion-loss testing of the whole link. (a) The OTDR trace is Tier 2. (c) A wire map is a copper test. (d) Voltage is not measured in fiber testing."
      }
    ]
  }
};
