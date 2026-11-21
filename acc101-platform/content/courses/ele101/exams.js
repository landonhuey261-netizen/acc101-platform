// ele101 — Midterm and Final exams.
// All questions are original to these exams (same topics as module quizzes, fresh scenarios and numbers).
// Every explanation covers why the correct answer is right AND why each wrong choice is wrong.
module.exports = {
  "midterm": {
    "title": "Midterm Exam",
    "minutes": 75,
    "coverage": "Modules 1–6",
    "questions": [
      {
        "module": 1,
        "q": "A homeowner asks the apprentice which electrician wires the panel, branch circuits, and lights in a new house. The correct answer is the:",
        "choices": [
          "Industrial electrician",
          "Residential electrician",
          "Maintenance electrician",
          "Inspector"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Residential electricians wire homes. (a) Industrial electricians work in factories. (c) Maintenance electricians repair existing facilities. (d) An inspector checks code compliance."
      },
      {
        "module": 1,
        "q": "On a first week on the job, an apprentice is most likely to be:",
        "choices": [
          "Running the whole job alone",
          "Carrying material, pulling wire, and watching the journeyman work",
          "Inspecting the work for the city",
          "Designing the electrical system"
        ],
        "answer": 1,
        "explanation": "Correct: (b). First-year apprentices learn by doing and watching under supervision. (a) Apprentices never run a job alone. (c) Inspecting is the inspector's role. (d) Designing is the engineer's or designer's role."
      },
      {
        "module": 1,
        "q": "A training sponsor tells a new apprentice that NCCER module tests pass at 70%, and a coworker adds that journey-level assessments pass at 75%. Which statement is correct?",
        "choices": [
          "Both are correct — NCCER module tests pass at 70% and journey-level assessments at 75%",
          "Both pass at 70%",
          "Both pass at 75%",
          "NCCER module tests pass at 75% and journey-level at 70%"
        ],
        "answer": 0,
        "explanation": "Correct: (a). NCCER module tests pass at 70% and journey-level assessments at 75% — the two numbers must never be blended. (b) Journey-level assessments pass at 75%, not 70%. (c) NCCER module tests pass at 70%, not 75%. (d) The two numbers are reversed."
      },
      {
        "module": 1,
        "q": "A 200-amp service feeds a panel, and a circuit runs from that panel to the kitchen receptacles. That circuit is the:",
        "choices": [
          "Service",
          "Feeder",
          "Branch circuit",
          "Grounding electrode"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Branch circuits run from the panel to the loads. (a) The service brings power into the building. (b) A feeder runs from the service to a panel. (d) A grounding electrode is part of the grounding system."
      },
      {
        "module": 2,
        "q": "An electrician falls from a ladder while pulling wire overhead. This is which Focus Four hazard?",
        "choices": [
          "Struck-by",
          "Caught-in/between",
          "Falls",
          "Electrocution"
        ],
        "answer": 2,
        "explanation": "Correct: (c). A fall from a ladder is a fall — the leading cause of construction deaths. (a) Struck-by is being hit by a falling or moving object. (b) Caught-in/between is being crushed between objects. (d) Electrocution is death by shock."
      },
      {
        "module": 2,
        "q": "A hammer falls from a scaffold and hits a laborer on the shoulder. This is a:",
        "choices": [
          "Fall",
          "Struck-by injury",
          "Caught-in/between injury",
          "Electrocution"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Being hit by a falling object is struck-by. (a) A fall is from height. (c) Caught-in/between is being crushed between objects. (d) Electrocution is death by shock."
      },
      {
        "module": 2,
        "q": "A training provider advertises that \"OSHA requires a 70% score to pass the OSHA 10-hour course.\" Is that correct?",
        "choices": [
          "Yes, OSHA requires 70%",
          "No — OSHA requires no test for the DOL card; any 70% is provider-set",
          "Yes, but only for the 30-hour course",
          "No — OSHA requires 75%"
        ],
        "answer": 1,
        "explanation": "Correct: (b). OSHA requires no test for the DOL card. (a) OSHA sets no passing score. (c) The 30-hour course has no OSHA test either. (d) 75% is a journey-level assessment mark, not an OSHA rule."
      },
      {
        "module": 2,
        "q": "A solvent on site has no label and no safety data sheet nearby. What should the electrician do before using it?",
        "choices": [
          "Use it anyway — it is just a cleaner",
          "Find its safety data sheet and read the hazards, safe handling, and first aid",
          "Smell it to identify it",
          "Pour it into a labeled bottle and use it"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Hazard communication requires the SDS and the label before use. (a) Using an unlabeled chemical is unsafe. (c) Smelling a chemical is dangerous. (d) Relabeling without the SDS does not make it safe."
      },
      {
        "module": 2,
        "q": "A foreman who supervises a crew needs the longer OSHA outreach course. Which one is it?",
        "choices": [
          "OSHA 10-hour",
          "OSHA 30-hour",
          "OSHA 5-hour",
          "OSHA 100-hour"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The 30-hour course is the longer, supervisor-level course. (a) The 10-hour course is entry-level. (c) There is no OSHA 5-hour outreach course. (d) There is no OSHA 100-hour outreach course."
      },
      {
        "module": 3,
        "q": "An unqualified helper is asked to hand tools to an electrician working near an exposed energized panel. Where may the helper stand?",
        "choices": [
          "Inside the restricted approach boundary",
          "Outside the limited approach boundary unless escorted and trained",
          "Anywhere on the jobsite",
          "Inside the arc-flash boundary without PPE"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Unqualified persons may not cross the limited approach boundary unescorted. (a) The restricted boundary is for qualified persons only. (c) Boundaries limit where anyone may stand. (d) The arc-flash boundary requires arc-rated PPE."
      },
      {
        "module": 3,
        "q": "An arc-flash label shows 8 cal/cm² incident energy. A worker's clothing is rated 4 cal/cm². What is the correct call?",
        "choices": [
          "Wear it anyway — 4 is close to 8",
          "Do not do the work in that clothing; get clothing rated 8 cal/cm² or higher",
          "Wear two 4 cal/cm² shirts",
          "Work faster so the arc is shorter"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Clothing rating must meet or exceed the label's incident energy. (a) A lower rating leaves the worker unprotected. (c) Layering under-rated clothing does not fix a rating that is too low. (d) Speed does not reduce incident energy."
      },
      {
        "module": 3,
        "q": "A coworker says, \"It's only 120 volts — it can't hurt you.\" What is the correct response?",
        "choices": [
          "Agree — 120 volts is safe",
          "Disagree — household 120-volt circuits kill every year; low voltage is not safe voltage",
          "Agree, but only in dry conditions",
          "Disagree — 120 volts is the most dangerous voltage"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Household 120-volt circuits kill every year. (a) 120 volts is not safe. (c) Dry conditions do not make 120 volts safe. (d) 120 volts is not the most dangerous voltage — the point is that no voltage is treated as safe."
      },
      {
        "module": 3,
        "q": "A supervisor wants a panel opened to \"take a quick look\" while it is still energized, to save time. What does NFPA 70E require?",
        "choices": [
          "Open it live — a quick look is fine",
          "De-energize it first, unless de-energizing would create a greater hazard or is infeasible",
          "Open it live if the worker is experienced",
          "Open it live at night only"
        ],
        "answer": 1,
        "explanation": "Correct: (b). NFPA 70E requires de-energized work unless it would create a greater hazard or is infeasible. (a) A quick look live is not allowed. (c) Experience does not make live work safe. (d) Time of day is not the rule."
      },
      {
        "module": 4,
        "q": "A rubber insulating glove fails its air test — air escapes when it is squeezed. What should happen to the glove?",
        "choices": [
          "Use it anyway — the leak is small",
          "Take it out of service immediately",
          "Tape over the leak and use it",
          "Wear it without leather protectors"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A leaking glove has lost its insulation and is out of service. (a) Any leak destroys the protection. (c) Tape does not restore insulation. (d) Protectors do not fix a leaking glove."
      },
      {
        "module": 4,
        "q": "Class 1 rubber insulating gloves are rated to:",
        "choices": [
          "500 volts",
          "1,000 volts",
          "7,500 volts",
          "36,000 volts"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Class 1 is rated to 7,500 volts. (a) 500 volts is Class 00. (b) 1,000 volts is Class 0. (d) 36,000 volts is a much higher class."
      },
      {
        "module": 4,
        "q": "A panel label shows 25 cal/cm² incident energy. A worker's arc-rated clothing is rated 8 cal/cm². What is the correct call?",
        "choices": [
          "Wear it — 8 cal/cm² is the standard rating",
          "Do not do the work in that clothing; get clothing rated 25 cal/cm² or higher",
          "Wear the 8 cal/cm² shirt under a cotton jacket",
          "Work with the panel door closed so no PPE is needed"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Clothing rating must meet or exceed the label's incident energy. (a) There is no single standard rating. (c) Cotton is not arc protection. (d) The work still requires the rated PPE for the task."
      },
      {
        "module": 4,
        "q": "An employer provides hard hats, safety glasses, and gloves to the crew. Who pays for required PPE?",
        "choices": [
          "The worker",
          "The employer, at no cost to the worker",
          "The union only",
          "The inspector"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The employer must provide required PPE at no cost to the worker. (a) Workers do not pay for required PPE. (c) The union does not pay for it. (d) The inspector does not pay for it."
      },
      {
        "module": 5,
        "q": "A disconnect has a tag on it but no lock. A worker is about to start work on the equipment. What is the correct call?",
        "choices": [
          "Start work — the tag is enough",
          "Do not start — a tag is never a substitute for a lock",
          "Start work if the tag is new",
          "Remove the tag and start work"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A tag warns but does not physically prevent operation; a lock is required. (a) A tag alone is not sufficient protection. (c) A new tag is still only a tag. (d) Removing the tag makes it worse."
      },
      {
        "module": 5,
        "q": "A meter reads zero volts on a panel, but the electrician never proved the meter on a known live source first. What does the zero reading mean?",
        "choices": [
          "The panel is definitely dead",
          "Nothing — the meter could be broken and reading zero on a live panel",
          "The panel is dead if the breaker is off",
          "The meter is working correctly"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Without live-dead-live verification, a zero reading proves nothing. (a) The panel may still be live. (c) A breaker being off does not prove the panel is dead. (d) The meter has not been proven working."
      },
      {
        "module": 5,
        "q": "Three electricians are working on the same motor under group lockout. Two have removed their locks and left. What must happen before the motor is re-energized?",
        "choices": [
          "Re-energize it — two out of three is enough",
          "Wait until the third electrician removes their own lock",
          "The supervisor removes the third lock",
          "Re-energize it and warn the third worker later"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The equipment cannot be re-energized until every worker has removed their own lock. (a) Two out of three is not enough. (c) Nobody removes another worker's lock. (d) Re-energizing with a worker still exposed is never allowed."
      },
      {
        "module": 5,
        "q": "A motor control cabinet contains capacitors that hold a charge after disconnection. What must be done before work begins?",
        "choices": [
          "Ignore them — capacitors discharge instantly",
          "Release or restrain the stored energy as part of establishing the electrically safe work condition",
          "Work quickly before they recharge",
          "Remove the capacitors and throw them away"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Stored energy must be released or restrained before work. (a) Capacitors do not discharge instantly. (c) Working quickly does not make stored energy safe. (d) Capacitors are not thrown away; they are discharged properly."
      },
      {
        "module": 6,
        "q": "An apprentice strips a 12 AWG wire using the 14 AWG hole in the strippers. What is the likely result?",
        "choices": [
          "A clean strip",
          "A nicked conductor that can break or overheat",
          "A longer wire",
          "A better connection"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The smaller hole cuts into the copper, nicking the conductor. (a) The wrong hole does not give a clean strip. (c) Stripping does not change the wire's length. (d) A nicked conductor makes a worse connection."
      },
      {
        "module": 6,
        "q": "An insulated screwdriver has a crack in its handle insulation. What should happen to it?",
        "choices": [
          "Use it anyway — the crack is small",
          "Take it out of service; a cracked handle is not an insulated tool",
          "Wrap it in tape and use it",
          "Use it only on low-voltage work"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Damaged insulation destroys the tool's protection. (a) Any crack means the insulation has failed. (c) Tape does not restore the rating. (d) A damaged insulated tool is not safe at any voltage."
      },
      {
        "module": 6,
        "q": "A worker uses a screwdriver as a pry bar to open a panel. What is wrong with this?",
        "choices": [
          "Nothing — screwdrivers are pry bars",
          "It damages the tip and handle, can injure the hand, and destroys an insulated tool's rating",
          "It is the fastest way to open a panel",
          "It only matters if the screwdriver is new"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Using a tool for the wrong job damages the tool and can injure the user. (a) A screwdriver is not a pry bar. (c) Speed does not justify the damage and risk. (d) It matters for any screwdriver."
      },
      {
        "module": 6,
        "q": "Which tool is used to grip, twist wires together, and cut?",
        "choices": [
          "Needle-nose pliers",
          "Linesman pliers",
          "Wire strippers",
          "A level"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Linesman pliers are the general-purpose gripping, twisting, and cutting tool. (a) Needle-nose pliers reach into tight spaces. (c) Wire strippers remove insulation. (d) A level checks straightness."
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
        "q": "A journeyman electrician with ten years of experience wants to pull permits and run a contracting business. What must they do first?",
        "choices": [
          "Buy a business license only",
          "Gain the additional experience and pass the master electrician exam",
          "Ask the foreman for permission",
          "Work one more year as a journeyman"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A master license — additional experience plus the master exam — is what allows pulling permits and running a contracting business. (a) A business license alone does not make a master electrician. (c) The foreman cannot grant a license. (d) Time alone, without the exam, does not qualify anyone."
      },
      {
        "module": 1,
        "q": "An estimator on an electrical job is the person who:",
        "choices": [
          "Checks the work for code compliance",
          "Figures out what the job will cost in labor and materials before it starts",
          "Runs the jobsite",
          "Installs the panel"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The estimator prices the job before it starts. (a) Checking code compliance is the inspector's role. (c) Running the jobsite is the superintendent's role. (d) Installing the panel is the electrician's work."
      },
      {
        "module": 2,
        "q": "A worker is crushed between a forklift and a wall. This is which Focus Four hazard?",
        "choices": [
          "Fall",
          "Struck-by",
          "Caught-in/between",
          "Electrocution"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Being crushed between equipment and a fixed object is caught-in/between. (a) A fall is from height. (b) Struck-by is being hit by a moving object, not crushed between two. (d) Electrocution is death by shock."
      },
      {
        "module": 2,
        "q": "An extension cord lies across a walkway and a worker trips over it. Which safety failure is this?",
        "choices": [
          "Bad weather",
          "Poor housekeeping — cords must not cross walkways",
          "A faulty breaker",
          "Too many workers"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Housekeeping requires cords to be routed away from walkways. (a) Weather did not put the cord there. (c) The breaker is unrelated. (d) The number of workers is not the cause."
      },
      {
        "module": 2,
        "q": "A supervisor tells a worker not to report a hazard, warning that reporting will cost the worker their job. What protects the worker?",
        "choices": [
          "Nothing — the supervisor is right",
          "OSHA's protection against retaliation for reporting hazards",
          "The union contract only",
          "The building code"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Workers may report hazards without retaliation under OSHA. (a) The supervisor is wrong — retaliation is prohibited. (c) The protection is an OSHA right, not only a union matter. (d) The building code does not cover retaliation."
      },
      {
        "module": 3,
        "q": "A worker standing three feet from a panel is burned by an arc flash that started at the panel. What does this show about arc flash?",
        "choices": [
          "Only the person touching the equipment is at risk",
          "Arc flash can injure anyone standing nearby, not just the person touching the equipment",
          "Arc flash only burns hands",
          "Arc flash cannot reach three feet"
        ],
        "answer": 1,
        "explanation": "Correct: (b). An arc flash's heat, blast, and molten metal can injure bystanders. (a) Bystanders are at risk too. (c) Arc flash burns any exposed skin. (d) The arc-flash boundary can extend several feet."
      },
      {
        "module": 3,
        "q": "The limited approach boundary is crossed by an unqualified person who is escorted by a qualified person and trained for the task. Is this allowed?",
        "choices": [
          "No — unqualified persons may never cross it",
          "Yes — unqualified persons may cross it if escorted and trained",
          "Yes — anyone may cross it freely",
          "No — only the inspector may cross it"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Unqualified persons may cross the limited approach boundary if escorted and trained. (a) Escorted and trained crossing is allowed. (c) Free crossing is not allowed. (d) The inspector is not the only person who may cross."
      },
      {
        "module": 3,
        "q": "What does the incident energy on an arc-flash label tell a worker?",
        "choices": [
          "The price of the equipment",
          "How much thermal energy could reach them at the working distance, so they can select the right PPE",
          "The date the equipment was installed",
          "The name of the manufacturer"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Incident energy, in cal/cm², sets the PPE rating needed. (a) Price is not on the label. (c) Installation date is not the label's purpose. (d) The manufacturer may be listed, but the hazard information is the point."
      },
      {
        "module": 4,
        "q": "Rubber insulating gloves in service are electrically tested every six months. A pair's test stamp shows it was last tested eight months ago. What should happen?",
        "choices": [
          "Use them — eight months is close enough",
          "Take them out of service until they are tested",
          "Use them only for low-voltage work",
          "Test them yourself with a multimeter"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Gloves past their test date are out of service until retested. (a) The test date is a hard limit. (c) The rating does not change with the work. (d) A multimeter cannot electrically test insulating gloves."
      },
      {
        "module": 4,
        "q": "Why are leather protectors worn over rubber insulating gloves?",
        "choices": [
          "To keep the hands warm",
          "To guard the rubber against cuts, abrasions, and punctures that would destroy its insulation",
          "To make the gloves fit better",
          "To meet the dress code"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The leather protects the rubber from mechanical damage. (a) Warmth is not the purpose. (c) Fit is not the purpose. (d) The dress code is not the reason."
      },
      {
        "module": 4,
        "q": "A hard hat is dropped from a scaffold and looks undamaged. What should happen to it?",
        "choices": [
          "Keep using it — it looks fine",
          "Replace it — damage from an impact is often invisible",
          "Use it only indoors",
          "Paint over the scratch"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A hard hat is replaced after any significant impact, even if damage is not visible. (a) Looks can be deceiving. (c) Indoor use does not make a damaged hat safe. (d) Paint does not repair a hard hat."
      },
      {
        "module": 5,
        "q": "A circuit is fed from two panels, and the lockout procedure lists only one of them. What is the danger?",
        "choices": [
          "None — one panel is enough",
          "The circuit can be back-fed from the second panel and become live again",
          "The circuit will be too safe",
          "The lock will not fit"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Every source must be identified and locked out; a missed source can re-energize the equipment. (a) One panel is not enough when two feed the circuit. (c) There is no such thing as too safe here. (d) The lock fitting is not the issue."
      },
      {
        "module": 5,
        "q": "A worker's lock is on a panel and the worker has gone home for the day. The next shift needs the equipment. What is the correct procedure?",
        "choices": [
          "Cut the lock off",
          "Follow the formal lock-removal procedure — never casually remove another worker's lock",
          "Wait until the worker returns next week",
          "Ask any coworker to remove it"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A formal procedure, with verification that the worker is gone and the area is clear, governs lock removal. (a) Cutting a lock off casually is never allowed. (c) Waiting is not always necessary — the formal procedure exists for this. (d) A coworker never removes another worker's lock."
      },
      {
        "module": 6,
        "q": "A terminal screw is tightened until the device cracks. What went wrong?",
        "choices": [
          "The screw was too small",
          "The screw was over-torqued — tightened firmly, not forced",
          "The device was too big",
          "The screwdriver was insulated"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Over-torquing cracks devices and strips screws. (a) Screw size is not the cause. (c) Device size is not the cause. (d) Insulation is unrelated to torque."
      },
      {
        "module": 6,
        "q": "An apprentice carries a screwdriver loose in a pocket. What is the risk?",
        "choices": [
          "None — pockets are made for tools",
          "The screwdriver can stab or cut when the apprentice bends or sits",
          "The screwdriver will get lost only",
          "The pocket will wear out"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Loose tools in pockets can stab or cut. (a) Pockets are not a safe way to carry tools. (c) Loss is a lesser risk than injury. (d) Pocket wear is not the safety issue."
      },
      {
        "module": 6,
        "q": "A utility knife blade is dull and the apprentice forces a cut. What is the likely result?",
        "choices": [
          "A cleaner cut",
          "The blade slips and cuts the hand, because a dull blade takes more force and gives less control",
          "A longer blade life",
          "A sharper blade"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A dull blade takes more force and slips more easily. (a) A dull blade makes a worse cut. (c) Forcing a dull blade does not extend its life. (d) Forcing does not sharpen a blade."
      },
      {
        "module": 7,
        "q": "A corded drill is used on a jobsite with no GFCI protection, and the cord is lying in a puddle. What is the risk and the fix?",
        "choices": [
          "No risk — drills are waterproof",
          "Shock risk — use GFCI protection and keep the cord out of water",
          "The drill will run faster",
          "The puddle will cool the drill"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A damaged or wet cord without GFCI protection is a shock hazard. (a) Drills are not waterproof. (c) Water does not make a drill run faster. (d) Cooling is not the issue."
      },
      {
        "module": 7,
        "q": "A circular saw's blade binds in the cut and the saw kicks back toward the worker. What protected the worker's hand?",
        "choices": [
          "The worker's gloves",
          "The blade guard, which must stay in place and never be tied back",
          "The saw's cord",
          "The worker's speed"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The guard keeps the blade from contacting the hand on kickback. (a) Gloves are not blade protection. (c) The cord is unrelated. (d) Speed does not protect against kickback."
      },
      {
        "module": 7,
        "q": "A battery for a cordless drill is swollen and cracked. What should be done with it?",
        "choices": [
          "Charge it and use it",
          "Take it out of service and dispose of it through the proper battery channel",
          "Throw it in the trash",
          "Leave it on the charger"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Damaged lithium batteries can catch fire and must be disposed of properly. (a) Charging a damaged battery is a fire risk. (c) Batteries never go in the trash. (d) Leaving it on the charger is a fire risk."
      },
      {
        "module": 7,
        "q": "Before drilling into a wall, an electrician should check what is behind it. Why?",
        "choices": [
          "To find the studs for a picture",
          "Hidden wires, pipes, and conduit are a shock and flood risk if drilled into",
          "To check the paint color",
          "To measure the wall's thickness only"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Drilling into a live cable is a shock and fire risk; drilling into a pipe is a flood risk. (a) Pictures are not the reason. (c) Paint color is irrelevant. (d) Thickness alone does not reveal what is hidden."
      },
      {
        "module": 8,
        "q": "A clamp meter is clamped around a whole two-wire cable and reads near zero. What does that mean?",
        "choices": [
          "The circuit is off",
          "The hot and neutral currents cancel each other out — clamp one conductor only",
          "The meter is broken",
          "The cable has no current"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Clamping both conductors cancels the reading; the circuit may still be live. (a) Near zero does not mean the circuit is off. (c) The meter is working as designed. (d) The cable may carry full current."
      },
      {
        "module": 8,
        "q": "A meter rated CAT II is used to measure voltage at a panelboard. What is wrong?",
        "choices": [
          "Nothing — CAT II is the highest rating",
          "A panelboard is a CAT III/IV location and needs a meter rated for it; a CAT II meter can fail dangerously",
          "CAT II meters cannot measure voltage",
          "Panelboards are CAT I locations"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Panelboards are CAT III/IV locations. (a) CAT II is a lower rating than CAT III and IV. (c) CAT II meters measure voltage fine — on CAT II locations. (d) Panelboards are not CAT I."
      },
      {
        "module": 8,
        "q": "A red lead is left in the current jack while the meter is used to measure voltage. What can happen?",
        "choices": [
          "A better reading",
          "The meter's fuse can blow or the meter can be damaged",
          "The meter measures current instead",
          "Nothing at all"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The current jack is a near-short across the circuit. (a) It does not improve anything. (c) It misconnects the meter; it does not measure current. (d) It can cause real damage."
      },
      {
        "module": 9,
        "q": "What is 5/8 + 1/4?",
        "choices": [
          "6/12",
          "7/8",
          "6/8",
          "5/12"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 1/4 = 2/8, so 5/8 + 2/8 = 7/8. (a) Denominators are not added. (c) 6/8 comes from adding numerators only. (d) 5/12 is not the sum."
      },
      {
        "module": 9,
        "q": "A conduit run needs an 8-inch offset using 45-degree bends. What is the distance between the bends?",
        "choices": [
          "8 inches",
          "11.3 inches",
          "16 inches",
          "4 inches"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The 45-degree multiplier is about 1.414, so 8 × 1.414 ≈ 11.3 inches. (a) 8 inches is the offset itself. (c) 16 inches is the 30-degree spacing. (d) 4 inches is half the offset."
      },
      {
        "module": 9,
        "q": "How many inches are in 7 feet 6 inches?",
        "choices": [
          "76",
          "86",
          "90",
          "96"
        ],
        "answer": 2,
        "explanation": "Correct: (c). 7 × 12 = 84, plus 6 = 90 inches. (a) 76 is too few. (b) 86 is 7 feet plus 2 inches. (d) 96 is 8 feet."
      },
      {
        "module": 9,
        "q": "A corner is laid out with 6 feet on one side and 8 feet on the other. What should the diagonal measure if the corner is square?",
        "choices": [
          "10 feet",
          "12 feet",
          "14 feet",
          "7 feet"
        ],
        "answer": 0,
        "explanation": "Correct: (a). The 3-4-5 triangle doubled is 6-8-10, so the diagonal is 10 feet. (b) 12 feet is not the hypotenuse. (c) 14 feet is the sum of the sides. (d) 7 feet is not the hypotenuse."
      },
      {
        "module": 10,
        "q": "A one-line diagram is used to show:",
        "choices": [
          "The furniture layout",
          "The power system: service, disconnects, panels, and feeders as single lines",
          "The plumbing system",
          "The paint colors"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A one-line diagram maps the power system. (a) Furniture is on architectural plans. (c) Plumbing is on plumbing sheets. (d) Paint colors are in the specifications."
      },
      {
        "module": 10,
        "q": "A floor plan is drawn at 1/2 inch = 1 foot. A wall measures 6 inches on the paper. How long is the wall?",
        "choices": [
          "3 feet",
          "12 feet",
          "6 feet",
          "24 feet"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Each 1/2 inch equals 1 foot, so 6 ÷ 0.5 = 12 feet. (a) 3 feet would be the answer at 2 inches per foot. (c) 6 feet confuses inches with feet. (d) 24 feet doubles the correct answer."
      },
      {
        "module": 10,
        "q": "A panel schedule lists, for each circuit, the circuit number, breaker size, wire size, and:",
        "choices": [
          "The price of the panel",
          "What the circuit serves",
          "The installer's name",
          "The date the panel was made"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The panel schedule lists what each circuit serves. (a) Price is not on a panel schedule. (c) The installer's name is not on it. (d) The manufacture date is not on it."
      },
      {
        "module": 10,
        "q": "An elevation drawing is most useful for finding:",
        "choices": [
          "The floor area",
          "The mounting height of devices on a wall",
          "The service size",
          "The total wire length"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Elevations show walls from the side, including device heights. (a) Floor area is on the floor plan. (c) Service size is on the one-line diagram. (d) Wire length is measured from the plan."
      },
      {
        "module": 11,
        "q": "A 10 AWG copper conductor is rated for:",
        "choices": [
          "15 amps",
          "20 amps",
          "30 amps",
          "40 amps"
        ],
        "answer": 2,
        "explanation": "Correct: (c). 10 AWG copper is rated 30 amps per 2023 NEC Table 310.16. (a) 15 amps is 14 AWG. (b) 20 amps is 12 AWG. (d) 40 amps is 8 AWG."
      },
      {
        "module": 11,
        "q": "Which cable is rated for direct burial and wet locations?",
        "choices": [
          "NM cable",
          "MC cable",
          "UF cable",
          "AC cable"
        ],
        "answer": 2,
        "explanation": "Correct: (c). UF cable is rated for direct burial and wet locations. (a) NM cable is for dry interior locations. (b) MC cable is armored for commercial work. (d) AC cable is armored with a bonding strip, not rated for burial."
      },
      {
        "module": 11,
        "q": "Aluminum conductors need special care at terminations because aluminum:",
        "choices": [
          "Is magnetic",
          "Expands and contracts more than copper and can loosen over time",
          "Cannot carry current",
          "Is too heavy"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Aluminum's greater thermal expansion can loosen connections, so aluminum-rated terminations are required. (a) Aluminum is not magnetic. (c) Aluminum carries current well. (d) Aluminum is lighter than copper."
      },
      {
        "module": 11,
        "q": "The 2023 NEC requires GFCI protection in all of the following EXCEPT:",
        "choices": [
          "Kitchens",
          "Bathrooms",
          "Bedrooms with no water nearby",
          "Garages"
        ],
        "answer": 2,
        "explanation": "Correct: (c). GFCI protection is required in kitchens, bathrooms, garages, and outdoors — wet and grounded locations — not in ordinary bedrooms. (a), (b), and (d) are all GFCI-required locations."
      },
      {
        "module": 11,
        "q": "What does \"14/3\" mean on a roll of NM cable?",
        "choices": [
          "14 conductors, 3 AWG",
          "14 AWG with three insulated conductors (plus a ground)",
          "14 feet long, 3 inches wide",
          "14 volts, 3 amps"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 14 is the AWG size and 3 is the number of insulated conductors, plus a bare ground. (a) The numbers are reversed. (c) 14/3 is not a length and width. (d) 14/3 is not voltage and current."
      },
      {
        "module": 12,
        "q": "Which of the following is usually required to apply for an electrical apprenticeship?",
        "choices": [
          "A college degree",
          "A high school diploma or equivalent, a valid driver's license, and a basic math and reading test",
          "Five years of experience",
          "A master electrician license"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A diploma or equivalent, a driver's license, and a basic test are the usual requirements. (a) A college degree is not required. (c) Experience is what the apprenticeship provides. (d) A master license is the end of the path, not the start."
      },
      {
        "module": 12,
        "q": "An apprentice who wants to learn faster should:",
        "choices": [
          "Wait to be told everything",
          "Ask questions, watch journeymen, and read the drawings",
          "Skip the classroom training",
          "Work alone"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Asking, watching, and reading the drawings accelerate learning. (a) Waiting slows learning. (c) Classroom training is part of the apprenticeship. (d) Apprentices work supervised, not alone."
      },
      {
        "module": 12,
        "q": "After completing an apprenticeship and passing the state exam, an electrician becomes a:",
        "choices": [
          "Master electrician",
          "Journeyman electrician",
          "Inspector",
          "Engineer"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Passing the journeyman exam makes the apprentice a journeyman. (a) Master comes after additional years and another exam. (c) An inspector is a government official. (d) An engineer is a different profession."
      },
      {
        "module": 12,
        "q": "A first-year apprentice's tool list should start with:",
        "choices": [
          "Every tool in the catalog",
          "The daily hand tools: screwdrivers, pliers, strippers, knife, tape, level, hammer",
          "Only power tools",
          "Only a multimeter"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Buy the daily hand tools first and add tools as the work demands. (a) Buying everything at once wastes money. (c) Power tools are usually provided by the employer. (d) A multimeter alone is not a tool set."
      }
    ]
  }
};
