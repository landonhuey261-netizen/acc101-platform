// con113 — Midterm and Final exams.
// All questions are original to these exams (same topics as module quizzes, fresh scenarios and numbers).
// Every explanation covers why the correct answer is right AND why each wrong choice is wrong.
// Module map used for exam tagging (verified against the sibling-built modules 1–9):
// 1 Intro to Ironworking & the Trade · 2 Trade Safety at Height · 3 Tools & Equipment
// 4 Trade Math & Structural Drawings · 5 Fastening & Bolting · 6 Rigging Equipment & Practices
// 7 Cranes & Lifting · 8 Structural Ironworking I · 9 Bar Joists, Girders & Metal Decking
// 10 Reinforcing Steel — Rebar · 11 Oxyfuel Cutting & Field Fabrication · 12 Welding for Ironworkers & Inspection
module.exports = {
  "midterm": {
    "title": "Midterm Exam",
    "minutes": 75,
    "coverage": "Modules 1–6",
    "questions": [
      {
        "module": 1,
        "q": "A new apprentice asks what an ironworker actually builds. The best answer is:",
        "choices": [
          "Only ornamental railings and gates",
          "Only concrete formwork",
          "The steel skeleton of buildings and bridges, plus the reinforcing steel inside concrete",
          "Only cranes"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Ironworkers erect structural steel and place reinforcing steel — the skeleton and the bones inside the concrete. (a) is wrong: Ornamental work is only one kind of ironwork, not the whole trade. (b) is wrong: Formwork is carpentry, not ironwork. (d) is wrong: Ironworkers work with cranes; they do not build cranes."
      },
      {
        "module": 1,
        "q": "On a raising gang, the connector is the ironworker who:",
        "choices": [
          "Works on the steel itself, guiding members into place and making the first bolted connections",
          "Drives the crane",
          "Welds every joint",
          "Delivers the steel to the site"
        ],
        "answer": 0,
        "explanation": "Correct: (a). The connector rides the steel, guides each member in, and bolts it up. (b) is wrong: The crane is driven by the operator. (c) is wrong: Welding is done by welders, often after the connector bolts the joint. (d) is wrong: Delivery is the trucker's job."
      },
      {
        "module": 1,
        "q": "A young worker asks how ironworkers learn the trade for real. The honest answer is:",
        "choices": [
          "Through an apprenticeship — classroom learning plus years of supervised work on real steel at height",
          "By reading about it only",
          "By watching one building go up",
          "By buying their own tools"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Ironworking is learned in an apprenticeship: study plus supervised hands-on work, including balance and rigging feel that no book can teach. (b) is wrong: Reading alone cannot teach work at height. (c) is wrong: Watching one building is not training. (d) is wrong: Tools are needed, but owning them is not learning the trade."
      },
      {
        "module": 1,
        "q": "Structural ironwork, reinforcing ironwork, and ornamental ironwork are:",
        "choices": [
          "Three names for the same job",
          "Three ranks of apprentice",
          "The three kinds of ironwork in the trade",
          "Three types of crane"
        ],
        "answer": 2,
        "explanation": "Correct: (c). The trade has three branches: structural steel, reinforcing steel, and ornamental metal. (a) is wrong: They are different work, not the same job. (b) is wrong: Apprentice ranks are by year, not by these names. (d) is wrong: They are kinds of ironwork, not cranes."
      },
      {
        "module": 2,
        "q": "An ironworker is about to walk a beam 40 feet up with no tie-off point in reach. The right call is:",
        "choices": [
          "Walk it anyway — the gang is waiting",
          "Walk it quickly so the exposure is short",
          "Hold onto the crane line instead",
          "Stop and get fall protection arranged before stepping onto the steel"
        ],
        "answer": 3,
        "explanation": "Correct: (d). No tie-off means no work at height — fall protection comes first, whatever the schedule says. (a) is wrong: The gang waiting is not a reason to risk a fatal fall. (b) is wrong: Speed does not prevent a fall. (c) is wrong: A crane line is not a fall-protection anchor."
      },
      {
        "module": 2,
        "q": "Before hot work starts on a deck, the crew must:",
        "choices": [
          "Start welding right away to save time",
          "Clear combustibles from the area and post a fire watch",
          "Wet the steel down",
          "Turn off all the lights"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Hot work needs the area cleared of anything that can burn and a fire watch posted. (a) is wrong: Starting right away skips the safety steps that prevent fires. (c) is wrong: Wetting steel does not replace clearing combustibles. (d) is wrong: Lights have nothing to do with hot work."
      },
      {
        "module": 2,
        "q": "An ironworker finds a damaged lanyard with a cut strap. The correct action is:",
        "choices": [
          "Tag it out of service and get a replacement",
          "Use it once more — the cut is small",
          "Tape over the cut",
          "Use it only for short ties"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Damaged fall protection is removed from service — a cut strap can fail under a fall load. (b) is wrong: A small cut is still a failed strap. (c) is wrong: Tape does not restore strength. (d) is wrong: There is no safe short use for damaged fall gear."
      },
      {
        "module": 2,
        "q": "The fire watch after hot work must stay for at least:",
        "choices": [
          "5 minutes",
          "30 minutes",
          "2 hours",
          "Until lunch"
        ],
        "answer": 1,
        "explanation": "Correct: (b). At least 30 minutes, because sparks can smolder hidden before flaming up. (a) is wrong: 5 minutes is too short. (c) is wrong: 2 hours is longer than the rule. (d) is wrong: Lunch is not a time standard."
      },
      {
        "module": 3,
        "q": "The spud wrench is the ironworker's signature tool because it:",
        "choices": [
          "Aligns bolt holes with its tapered point and tightens nuts with its wrench end",
          "Cuts steel",
          "Measures angles",
          "Welds joints"
        ],
        "answer": 0,
        "explanation": "Correct: (a). A spud wrench drifts bolt holes into line with the spud end and turns nuts with the wrench end. (b) is wrong: It does not cut steel. (c) is wrong: Angles are measured with a level or square. (d) is wrong: It does not weld."
      },
      {
        "module": 3,
        "q": "Two connection plates are a quarter inch out of line and the bolt will not pass through both holes. The ironworker should:",
        "choices": [
          "Force the bolt through with a hammer",
          "Weld the plates together as they are",
          "Drive a bull pin through the holes to drift the members into line, then put the bolts in",
          "Leave the connection with fewer bolts"
        ],
        "answer": 2,
        "explanation": "Correct: (c). A bull pin is a tapered pin driven through misaligned holes to pull the members into line; the bolts follow and the pin comes out. (a) is wrong: Forcing a bolt through damages the threads and the hole. (b) is wrong: Welding misaligned plates together leaves a bad joint that will fail inspection. (d) is wrong: Fewer bolts means a weaker connection than the design calls for."
      },
      {
        "module": 3,
        "q": "An ironworker needs to lift a steel plate onto a sawhorse. The safest tool for the job is:",
        "choices": [
          "Bare hands with a good grip",
          "A bull pin",
          "A spud wrench",
          "A plate clamp or proper rigging, used with the crane or a hoist"
        ],
        "answer": 3,
        "explanation": "Correct: (d). Heavy plate is moved with a clamp or rigging, not by hand. (a) is wrong: Bare hands cannot safely control a heavy plate. (b) is wrong: A bull pin aligns holes. (c) is wrong: A spud wrench turns nuts and drifts holes."
      },
      {
        "module": 3,
        "q": "A power tool's guard has been removed to make a cut easier. The ironworker should:",
        "choices": [
          "Refuse to use it until the guard is back on",
          "Use it — the guard was in the way",
          "Use it only for one cut",
          "Use it with gloves instead"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Guards are never removed to make a job easier — they are the protection between the worker and the blade or wheel. (b) is wrong: Convenience is not a reason to remove a guard. (c) is wrong: One cut is enough for an injury. (d) is wrong: Gloves do not replace a guard."
      },
      {
        "module": 4,
        "q": "A wide-flange beam is marked W12x26. The '12' tells the ironworker:",
        "choices": [
          "It weighs 12 pounds",
          "It is 12 feet long",
          "It has 12 bolt holes",
          "Its nominal depth is about 12 inches"
        ],
        "answer": 3,
        "explanation": "Correct: (d). In a W-shape mark, the first number is the nominal depth in inches. (a) is wrong: The weight is the second number, 26 pounds per foot. (b) is wrong: Length is not in the mark. (c) is wrong: Bolt holes are not in the mark."
      },
      {
        "module": 4,
        "q": "A W-shape beam's flanges are the:",
        "choices": [
          "Vertical plate in the middle",
          "Bolt holes at the ends",
          "Horizontal plates at the top and bottom that resist bending",
          "Welds at the joints"
        ],
        "answer": 2,
        "explanation": "Correct: (c). The flanges are the top and bottom plates that carry the bending load. (a) is wrong: The vertical plate in the middle is the web. (b) is wrong: Bolt holes are not flanges. (d) is wrong: Welds are not flanges."
      },
      {
        "module": 4,
        "q": "A structural drawing shows a beam with a dashed line where a bolted connection will be hidden behind a plate. The dashed line means the connection is:",
        "choices": [
          "Not yet designed",
          "To be welded",
          "Optional",
          "Hidden behind another part"
        ],
        "answer": 3,
        "explanation": "Correct: (d). On a drawing, a dashed line shows an edge that is hidden behind another part. (a) is wrong: Hidden does not mean undesigned. (b) is wrong: The weld or bolt symbol says how it is joined, not the dashed line. (c) is wrong: Hidden does not mean optional."
      },
      {
        "module": 4,
        "q": "A steel plate is 2 feet 6 inches long. How many inches long is it?",
        "choices": [
          "24",
          "26",
          "36",
          "30"
        ],
        "answer": 3,
        "explanation": "Correct: (d). 2 feet is 24 inches, plus 6 inches is 30 inches. (a) is wrong: 24 inches is 2 feet exactly, with the 6 inches left out. (b) is wrong: 26 adds only 2 inches instead of 6. (c) is wrong: 36 inches is 3 feet, not 2 feet 6 inches."
      },
      {
        "module": 5,
        "q": "A bolt head is stamped A325. That stamp means the bolt is:",
        "choices": [
          "A common mild-steel bolt",
          "A stainless-steel bolt",
          "A temporary bolt",
          "A high-strength structural bolt"
        ],
        "answer": 3,
        "explanation": "Correct: (d). A325 is a high-strength structural bolt grade used in steel connections. (a) is wrong: A common mild-steel bolt is a lower grade such as A307, not A325. (b) is wrong: A325 says nothing about stainless steel — it is a strength grade. (c) is wrong: A325 bolts are permanent structural bolts, not temporary ones."
      },
      {
        "module": 5,
        "q": "In turn-of-nut tensioning, what comes right after snug-tight?",
        "choices": [
          "The bolt is taken out",
          "The nut is turned a specified rotation",
          "The connection is painted",
          "The nut is loosened half a turn"
        ],
        "answer": 1,
        "explanation": "Correct: (b). After every bolt is snug-tight, each nut is turned the specified rotation to stretch the bolt to its tension. (a) is wrong: The bolt stays in — taking it out undoes the connection. (c) is wrong: Painting comes after tensioning and inspection, not between steps. (d) is wrong: Loosening the nut reduces tension instead of building it."
      },
      {
        "module": 5,
        "q": "A connection has 6 bolts, each turned 1/2 turn (3 flats) after snug-tight. How many flats are turned across all 6 bolts?",
        "choices": [
          "6",
          "18",
          "12",
          "36"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 6 bolts × 3 flats each = 18 flats. (a) is wrong: 6 counts one flat per bolt, not three. (c) is wrong: 12 would be two flats per bolt. (d) is wrong: 36 would be six flats — a full turn — per bolt."
      },
      {
        "module": 5,
        "q": "An A490 bolt is found mixed into a keg of A325 bolts. What should the crew do?",
        "choices": [
          "Use it anywhere — bolts are bolts",
          "Use it only at the top of the connection",
          "Set it aside and tell the foreman, because grades must not be mixed",
          "Paint over the marking so it matches"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Mixed grades in one connection break the design, so the odd bolt is set aside and the foreman is told. (a) is wrong: A490 and A325 are different strengths and are never interchangeable on a whim. (b) is wrong: Position in the connection does not make a wrong grade right. (d) is wrong: Painting over a marking hides the grade — it does not change it."
      },
      {
        "module": 6,
        "q": "A wire rope sling shows broken wires and a kink. The right call is:",
        "choices": [
          "Use it for a light load only",
          "Straighten the kink and use it",
          "Remove it from service — broken wires and kinks mean it is no longer safe",
          "Use it if the load is under half its rating"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Broken wires and kinks are rejection criteria — the sling is out of service. (a) is wrong: A damaged sling has no safe light load. (b) is wrong: Straightening a kink does not restore the rope. (d) is wrong: A reduced load does not make a damaged sling safe."
      },
      {
        "module": 6,
        "q": "A beam weighs 4,000 pounds and is lifted on a two-leg bridle sling with both legs vertical. The tension in each leg is:",
        "choices": [
          "4,000 pounds",
          "1,000 pounds",
          "2,000 pounds",
          "8,000 pounds"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Vertical legs share the load evenly: 4,000 ÷ 2 = 2,000 pounds per leg. (a) is wrong: 4,000 is the whole load, not one leg's share. (b) is wrong: 1,000 would be the share with four legs. (d) is wrong: 8,000 is double the load, which no leg carries here."
      },
      {
        "module": 6,
        "q": "A choker hitch is used when the rigger needs to:",
        "choices": [
          "Lift a load from directly above with no grip",
          "Grip and tighten around a load, such as a bundle or a beam, so it cannot slip",
          "Double the sling's capacity",
          "Lift a load without a crane"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A choker tightens around the load as it takes weight, gripping it. (a) is wrong: A choker grips; a vertical hitch lifts from above. (c) is wrong: A choker reduces capacity compared with a vertical hitch, it does not double it. (d) is wrong: A choker still needs a crane or hoist."
      },
      {
        "module": 6,
        "q": "A nylon web sling is about to lift a steel beam with a sharp edge. The rigger must:",
        "choices": [
          "Protect the sling from the sharp edge with padding or edge guards",
          "Lift it bare — web slings are tough",
          "Use a shorter sling",
          "Lift it faster"
        ],
        "answer": 0,
        "explanation": "Correct: (a). A sharp edge cuts webbing under load, so the edge is padded or guarded. (b) is wrong: Bare webbing on a sharp edge can be cut through. (c) is wrong: Length does not protect the webbing. (d) is wrong: Speed makes a cut worse, not better."
      },
      {
        "module": 6,
        "q": "A 6,000-pound beam is lifted on a two-leg bridle sling with the legs at 30 degrees from horizontal. The tension in each leg is about:",
        "choices": [
          "3,000 pounds",
          "6,000 pounds",
          "1,500 pounds",
          "12,000 pounds"
        ],
        "answer": 1,
        "explanation": "Correct: (b). At 30 degrees, each leg carries the load divided by twice the sine of 30 degrees: 6,000 ÷ (2 × 0.5) = 6,000 pounds. (a) is wrong: 3,000 is the vertical-leg share, not the 30-degree share. (c) is wrong: 1,500 is a quarter of the load, which no leg carries. (d) is wrong: 12,000 is double the whole load."
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
        "q": "An ironworker who places and ties steel bars inside concrete forms is called a:",
        "choices": [
          "Connector",
          "Welder",
          "Rod-buster (reinforcing ironworker)",
          "Crane operator"
        ],
        "answer": 2,
        "explanation": "Correct: (c). The reinforcing ironworker, or rodbuster, places and ties rebar. (a) is wrong: The connector works on the raising gang, bolting up structural steel. (b) is wrong: The welder joins steel with an arc. (d) is wrong: The crane operator runs the crane."
      },
      {
        "module": 1,
        "q": "The raising gang is:",
        "choices": [
          "The crew that delivers steel to the site",
          "The crew that erects the structural steel frame",
          "The crew that pours the concrete",
          "The crew that inspects the finished building"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The raising gang sets columns and beams and bolts them up into the frame. (a) is wrong: Delivery is the trucker's job. (c) is wrong: Concrete is poured by the concrete crew. (d) is wrong: Inspection is done by inspectors, not the raising gang."
      },
      {
        "module": 1,
        "q": "Ornamental ironwork includes:",
        "choices": [
          "Columns and beams",
          "Stairs, railings, and gates",
          "Rebar cages",
          "Crane rails"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Ornamental ironwork is the finished metalwork people see and touch: stairs, railings, gates, and grilles. (a) is wrong: Columns and beams are structural ironwork. (c) is wrong: Rebar cages are reinforcing ironwork. (d) is wrong: Crane rails are structural work."
      },
      {
        "module": 2,
        "q": "A worker's harness is tied off to a beam, but the lanyard lets the worker fall 8 feet before it catches. The problem is:",
        "choices": [
          "The harness is the wrong color",
          "The beam is too strong",
          "The worker is too heavy",
          "The fall distance is too great — the anchor should keep the free fall as short as possible"
        ],
        "answer": 3,
        "explanation": "Correct: (d). A long free fall means a hard catch and a risk of hitting something below; anchors are placed to keep the fall short. (a) is wrong: Harness color is irrelevant. (b) is wrong: A strong anchor is what is wanted. (c) is wrong: Weight is not the problem — fall distance is."
      },
      {
        "module": 2,
        "q": "Hot work on a deck with sawdust and oily rags below it is unsafe because:",
        "choices": [
          "The rags are ugly",
          "The deck is too high",
          "The welder cannot see",
          "Sparks and slag can fall through and ignite the material below"
        ],
        "answer": 3,
        "explanation": "Correct: (d). Sparks fall through deck openings and smolder in combustibles below, which is why the area below is cleared and watched. (a) is wrong: Appearance is not the hazard. (b) is wrong: Height is not the fire hazard. (c) is wrong: Visibility is not the fire hazard."
      },
      {
        "module": 2,
        "q": "Safety glasses with side shields are worn on site to protect against:",
        "choices": [
          "Falling from height",
          "Hearing loss",
          "Back injury",
          "Flying chips, sparks, and dust from cutting and grinding"
        ],
        "answer": 3,
        "explanation": "Correct: (d). Glasses with side shields stop chips and sparks from reaching the eyes from the front and the sides. (a) is wrong: Falls are prevented by fall protection. (b) is wrong: Hearing loss is prevented by hearing protection. (c) is wrong: Back injury is prevented by lifting technique."
      },
      {
        "module": 3,
        "q": "A torque wrench is used in ironworking to:",
        "choices": [
          "Tighten a bolt to a specified torque value",
          "Cut a bolt to length",
          "Measure a beam's length",
          "Drill a bolt hole"
        ],
        "answer": 0,
        "explanation": "Correct: (a). A torque wrench measures the turning force so a bolt is tightened to the value the job calls for. (b) is wrong: Bolts are cut with a torch or saw. (c) is wrong: Length is measured with a tape. (d) is wrong: Holes are drilled with a drill."
      },
      {
        "module": 3,
        "q": "A level is used on a steel frame to check that a member is:",
        "choices": [
          "Plumb or level — vertical or horizontal",
          "Strong enough",
          "The right color",
          "Welded"
        ],
        "answer": 0,
        "explanation": "Correct: (a). A level shows whether a member is truly vertical (plumb) or truly horizontal (level). (b) is wrong: Strength is an engineering matter, not a level reading. (c) is wrong: Color is irrelevant. (d) is wrong: A level cannot tell whether a joint is welded."
      },
      {
        "module": 3,
        "q": "The ironworker's spud wrench has a tapered point so it can:",
        "choices": [
          "Cut wire",
          "Drift bolt holes into alignment",
          "Measure bolt length",
          "Strike an arc"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The tapered spud end is driven through holes to pull members into line for bolting. (a) is wrong: Wire is cut with cutters. (c) is wrong: Bolt length is measured with a tape or rule. (d) is wrong: An arc is struck with an electrode."
      },
      {
        "module": 4,
        "q": "A drawing dimension reads 10'-6\". How many inches long is that?",
        "choices": [
          "106",
          "116",
          "126",
          "120"
        ],
        "answer": 2,
        "explanation": "Correct: (c). 10 feet is 120 inches, plus 6 inches is 126 inches. (a) is wrong: 106 treats the feet as 100 inches. (b) is wrong: 116 is ten inches short. (d) is wrong: 120 inches is 10 feet exactly, with the 6 inches left out."
      },
      {
        "module": 4,
        "q": "A beam is marked W18x35. The '35' means the beam weighs:",
        "choices": [
          "35 pounds in total",
          "35 pounds per foot",
          "35 inches deep",
          "35 feet long"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The second number in a W mark is the weight in pounds per foot. (a) is wrong: A beam weighs far more than 35 pounds in total. (c) is wrong: Depth is the first number, 18 inches. (d) is wrong: Length is not in the mark."
      },
      {
        "module": 4,
        "q": "A section view on a structural drawing shows:",
        "choices": [
          "The building from above",
          "A list of materials",
          "A cut through the structure, showing what is inside",
          "The crane's travel path"
        ],
        "answer": 2,
        "explanation": "Correct: (c). A section is a slice through the structure, showing the parts inside the cut. (a) is wrong: A view from above is a plan. (b) is wrong: A materials list is a schedule or bill, not a section. (d) is wrong: The crane's path is shown on a site or erection plan, not in a section."
      },
      {
        "module": 5,
        "q": "An A490 bolt is used instead of an A325 bolt where:",
        "choices": [
          "A cheaper bolt will do",
          "A stronger, higher-strength bolt is required by the design",
          "The bolt will be reused many times",
          "The connection is temporary"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A490 is the higher-strength structural bolt, used where the design calls for more strength than A325 provides. (a) is wrong: A490 is not the cheaper choice. (c) is wrong: A490 bolts are not reused. (d) is wrong: A temporary connection does not call for the stronger bolt."
      },
      {
        "module": 5,
        "q": "Snug-tight means the bolts are tightened until:",
        "choices": [
          "The plies are in firm contact, using the full effort of a spud wrench",
          "They cannot be turned at all",
          "The nut has turned a full turn",
          "The bolt stretches"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Snug-tight is firm contact between the plies, reached with full effort on a spud wrench or an impact wrench. (b) is wrong: Bolts can still be turned past snug-tight — that is what turn-of-nut does. (c) is wrong: A full turn is far past snug-tight. (d) is wrong: Stretching is not the definition of snug-tight."
      },
      {
        "module": 5,
        "q": "In turn-of-nut tensioning, the nut is turned a set rotation after snug-tight. A one-third turn on a hex nut is:",
        "choices": [
          "One flat",
          "Two flats",
          "Three flats",
          "Six flats"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A hex nut has six flats, so one-third of a turn is two flats. (a) is wrong: One flat is one-sixth of a turn. (c) is wrong: Three flats is one-half of a turn. (d) is wrong: Six flats is a full turn."
      },
      {
        "module": 6,
        "q": "The signal for HOIST (raise the load) is:",
        "choices": [
          "Forearm vertical, index finger pointing up, making small circles",
          "Arm extended down, finger pointing down",
          "Both arms extended out to the sides",
          "A closed fist"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Hoist is the forearm up with the index finger circling. (b) is wrong: Finger pointing down is the lower signal. (c) is wrong: Both arms out is the emergency stop. (d) is wrong: A fist is the stop signal."
      },
      {
        "module": 6,
        "q": "Before a lift, the rigger's first job is to:",
        "choices": [
          "Hook up and go",
          "Stand under the load to guide it",
          "Tell the operator to hurry",
          "Check the load's weight, the sling's rating, and the lift path, and agree signals with the operator"
        ],
        "answer": 3,
        "explanation": "Correct: (d). Every lift is planned first: weight, capacity, path, and signals. (a) is wrong: Hooking up without a plan is how lifts go wrong. (b) is wrong: Nobody ever stands under a load. (c) is wrong: Hurrying the operator causes mistakes."
      },
      {
        "module": 6,
        "q": "A load starts to swing during a lift. The crew should:",
        "choices": [
          "Grab it with their hands",
          "Let it swing until it stops",
          "Control it with tag lines from a safe position, and stop the lift if it cannot be controlled",
          "Climb onto it to steady it"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Tag lines control swing from a safe distance; an uncontrolled load means the lift stops. (a) is wrong: Hands on a swinging load get crushed. (b) is wrong: A swinging load can hit steel or people. (d) is wrong: Nobody rides a load."
      },
      {
        "module": 6,
        "q": "A sling's rated capacity is marked on its tag. The rigger must:",
        "choices": [
          "Ignore the tag if the sling looks strong",
          "Use the rating for any hitch",
          "Add 20 percent to the rating",
          "Never lift a load heavier than the rating for the hitch being used"
        ],
        "answer": 3,
        "explanation": "Correct: (d). The rating is the limit for that hitch — a choker hitch, for example, is rated lower than a vertical hitch. (a) is wrong: The tag is the authority, not how the sling looks. (b) is wrong: The rating changes with the hitch. (c) is wrong: Nothing is ever added to a rating."
      },
      {
        "module": 7,
        "q": "The crane operator cannot see the load's landing spot. The correct setup is:",
        "choices": [
          "The operator guesses",
          "The crew shouts directions",
          "A signal person in the operator's view relays signals from the landing crew",
          "The load is dropped from above the spot"
        ],
        "answer": 2,
        "explanation": "Correct: (c). When the operator cannot see, a designated signal person relays the crew's signals. (a) is wrong: Guessing is not a lift plan. (b) is wrong: Shouting is unreliable over crane noise and distance. (d) is wrong: A load is never dropped into place."
      },
      {
        "module": 7,
        "q": "A lift is planned at the edge of the crane's rated capacity. The correct action is:",
        "choices": [
          "Lift it anyway — ratings have a safety factor",
          "Lift it faster so it spends less time in the air",
          "Lift it at night when nobody is watching",
          "Stop and re-plan: reduce the load, move the crane closer, or use a bigger crane"
        ],
        "answer": 3,
        "explanation": "Correct: (d). A lift at or over capacity is re-planned, not attempted — the safety factor is not spare capacity to use up. (a) is wrong: The safety factor protects against unknowns; it is not working room. (b) is wrong: Speed makes a heavy lift more dangerous. (c) is wrong: Time of day does not change the load."
      },
      {
        "module": 7,
        "q": "Rigging is attached to a load at its:",
        "choices": [
          "Center of gravity, so the load hangs level",
          "Lightest end",
          "Top corner only",
          "Nearest edge"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Rigging at the center of gravity keeps the load level; rigging off-center makes it tilt and swing. (b) is wrong: The lightest end is not the balance point. (c) is wrong: One corner cannot balance a load. (d) is wrong: The nearest edge is a matter of convenience, not balance."
      },
      {
        "module": 8,
        "q": "A column must be set on its base plate and plumbed. Plumbing a column means:",
        "choices": [
          "Making it truly vertical",
          "Connecting its water pipes",
          "Bolting its base plate",
          "Painting it"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Plumbing is making a member vertical, checked with a level or plumb line. (b) is wrong: Columns carry no water. (c) is wrong: Bolting is a separate step. (d) is wrong: Painting is not plumbing."
      },
      {
        "module": 8,
        "q": "Two members are joined edge to edge in the same plane. That joint is a:",
        "choices": [
          "Lap joint",
          "Tee joint",
          "Corner joint",
          "Butt joint"
        ],
        "answer": 3,
        "explanation": "Correct: (d). A butt joint joins two pieces edge to edge in the same plane. (a) is wrong: A lap joint overlaps the pieces. (b) is wrong: A tee joint joins one piece to the face of another at 90 degrees. (c) is wrong: A corner joint joins two pieces at a corner."
      },
      {
        "module": 8,
        "q": "A beam-to-column connection must carry full load through the joint. The weld it needs is a:",
        "choices": [
          "Groove weld, usually complete joint penetration",
          "Fillet weld only",
          "Spot weld",
          "Tack weld"
        ],
        "answer": 0,
        "explanation": "Correct: (a). A full-strength joint needs a groove weld that goes all the way through the member. (b) is wrong: A fillet cannot carry full member strength. (c) is wrong: A spot weld is not a structural joint weld. (d) is wrong: A tack weld only holds parts in place for fitting."
      },
      {
        "module": 9,
        "q": "A 40-foot roof span uses bar joists instead of solid rolled beams mainly because:",
        "choices": [
          "Joists are stronger than any solid beam",
          "Joists are lighter for the span, and the open web lets ducts and pipes pass through",
          "Joists never need bridging",
          "Joists can be set by hand without a crane"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A bar joist is an open-web truss — light for its span, and the open web leaves room for ducts, pipes, and conduit. (a) is wrong: A solid beam is stronger per member; the joist wins on weight and on the open web. (c) is wrong: Joists must be bridged to each other for stability. (d) is wrong: Joists are still lifted into place by crane."
      },
      {
        "module": 9,
        "q": "Bar joists must be bridged (braced to each other) because:",
        "choices": [
          "It makes them look finished",
          "It makes them heavier",
          "Unbraced joists can roll over or buckle sideways under load",
          "The crane needs something to hook"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Bridging ties joists together so they cannot roll or buckle sideways. (a) is wrong: Appearance is not the reason. (b) is wrong: Bridging adds little weight and that is not its purpose. (d) is wrong: The crane hooks the joist itself, not the bridging."
      },
      {
        "module": 9,
        "q": "Metal decking is laid on a steel frame to:",
        "choices": [
          "Replace the beams",
          "Hold the columns up",
          "Form the floor or roof surface and support the concrete or roofing above it",
          "Insulate the building"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Decking is the floor or roof platform that carries the concrete slab or the roofing. (a) is wrong: Decking does not replace beams — it sits on them. (b) is wrong: Columns are held by their connections, not by decking. (d) is wrong: Insulation is a separate layer, not the deck's job."
      },
      {
        "module": 10,
        "q": "A footing drawing calls for #5 bars. A #5 bar is:",
        "choices": [
          "5 inches across",
          "5/8 inch across",
          "5 feet long",
          "Grade 5 steel"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The size number is the diameter in eighths of an inch: 5/8 inch. (a) is wrong: No rebar is 5 inches across. (c) is wrong: Length is not in the size number. (d) is wrong: Grade is a separate number, not the size."
      },
      {
        "module": 10,
        "q": "In a loaded beam, the main reinforcing bars run along the:",
        "choices": [
          "Top, where the concrete is squeezed",
          "Middle only",
          "Bottom, where the concrete is pulled apart in tension",
          "Ends only"
        ],
        "answer": 2,
        "explanation": "Correct: (c). A loaded beam's bottom stretches in tension, so the steel goes there to carry the pull. (a) is wrong: The top is in compression, which the concrete handles. (b) is wrong: The middle is the neutral zone, not where the main steel goes. (d) is wrong: Bars run the full length, not just at the ends."
      },
      {
        "module": 10,
        "q": "A rodbuster finds the epoxy coating scratched on a bar that is about to be placed. The right action is:",
        "choices": [
          "Place it as is — scratches do not matter",
          "Weld over the scratch",
          "Patch the damage with the coating repair material, or set the bar aside for the foreman to decide",
          "Paint over it with any paint"
        ],
        "answer": 2,
        "explanation": "Correct: (c). A scratch is a doorway for rust, so it is patched with the proper repair material or referred to the foreman. (a) is wrong: Scratches do matter — they defeat the coating. (b) is wrong: Welding a coated bar is not a repair. (d) is wrong: Ordinary paint is not coating repair material."
      },
      {
        "module": 10,
        "q": "Concrete cover is the layer of concrete between the steel and the outside face. Its purpose is to:",
        "choices": [
          "Protect the steel from rust and fire",
          "Make the concrete look smooth",
          "Hold the formwork together",
          "Make the pour faster"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Cover shields the steel from water, salt, and heat. (b) is wrong: Appearance is not the purpose. (c) is wrong: Formwork is held by its own ties and braces. (d) is wrong: Cover has nothing to do with pour speed."
      },
      {
        "module": 11,
        "q": "A torch cut on carbon steel is wide, rough, and covered in heavy slag on the bottom. The cause is:",
        "choices": [
          "Travel speed too slow",
          "Travel speed too fast",
          "Tip too clean",
          "Oxygen pressure too low"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Too slow a travel speed lets the flame stay too long in one place, widening the cut and leaving heavy slag. (b) is wrong: Too fast a travel speed does not cut through. (c) is wrong: A clean tip helps a cut, it does not ruin one. (d) is wrong: Low oxygen pressure would stall the cut, not widen it."
      },
      {
        "module": 11,
        "q": "A steel plate must have a square cut-out to clear a pipe passing through it. That cut-out is called a:",
        "choices": [
          "Cope",
          "Notch",
          "Bevel",
          "Kerf"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A notch is a cut-out made to clear an obstruction such as a pipe. (a) is wrong: Coping shapes a beam end to fit another member. (c) is wrong: A bevel is an angled edge for a groove weld. (d) is wrong: The kerf is the slot the flame removes, not the cut-out itself."
      },
      {
        "module": 11,
        "q": "Before cutting a beam that is already erected and carrying load, the ironworker must:",
        "choices": [
          "Cut it right away — the drawing shows the cut",
          "Cut it at night",
          "Check with the foreman, because cutting erected steel changes the structure",
          "Cut it with a bigger tip"
        ],
        "answer": 2,
        "explanation": "Correct: (c). A cut on erected, loaded steel is a structural change and needs the foreman's or engineer's decision. (a) is wrong: Even a drawn cut is confirmed before cutting steel in place. (b) is wrong: Time of day does not make an unsafe cut safe. (d) is wrong: Tip size is about thickness, not permission."
      },
      {
        "module": 11,
        "q": "A torch hose is found with a burn mark and a soft spot. The right action is:",
        "choices": [
          "Wrap it in tape and keep using it",
          "Take it out of service and replace it",
          "Use it for fuel only",
          "Use it for short cuts only"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A burned or soft hose can fail under pressure and leak gas — it is replaced. (a) is wrong: Tape does not restore a hose. (c) is wrong: A damaged hose is unsafe for either gas. (d) is wrong: There is no safe short use for a damaged hose."
      },
      {
        "module": 12,
        "q": "A stick weld bead is wide, flat, and spattery. The most likely cause is:",
        "choices": [
          "Arc too short",
          "Travel too slow",
          "Rod too new",
          "Arc too long"
        ],
        "answer": 3,
        "explanation": "Correct: (d). A long arc spatters and makes a flat weak bead. (a) is wrong: A short arc makes a narrow high bead. (b) is wrong: Slow travel makes a wide high bead, not a flat spattery one. (c) is wrong: Rod age is not the cause."
      },
      {
        "module": 12,
        "q": "Weld metal rolling over the toe of a joint without fusing is called:",
        "choices": [
          "Undercut",
          "Porosity",
          "Crack",
          "Overlap"
        ],
        "answer": 3,
        "explanation": "Correct: (d). Overlap is metal rolling over the toe, from too slow a travel speed. (a) is wrong: Undercut is a groove at the toe. (b) is wrong: Porosity is gas holes. (c) is wrong: A crack is a break, not rolled metal."
      },
      {
        "module": 12,
        "q": "A welder qualified in the flat position is asked to weld overhead. The correct response is:",
        "choices": [
          "Weld anyway — qualification covers all positions",
          "Use a bigger electrode",
          "Weld faster",
          "Qualify in the overhead position first"
        ],
        "answer": 3,
        "explanation": "Correct: (d). Each position is its own qualification. (a) is wrong: Positions do not transfer. (b) is wrong: Electrode size does not confer qualification. (c) is wrong: Speed does not confer qualification."
      },
      {
        "module": 12,
        "q": "A weld must be checked for defects hidden inside it, not just on the surface. The inspection method that uses sound waves is:",
        "choices": [
          "Ultrasonic testing (UT)",
          "Visual testing (VT)",
          "Magnetic particle testing (MT)",
          "Dye penetrant testing (PT)"
        ],
        "answer": 0,
        "explanation": "Correct: (a). UT sends sound waves into the weld and reads the echoes from internal defects. (b) is wrong: VT is visual — surface only. (c) is wrong: MT finds surface cracks in magnetic steel. (d) is wrong: PT uses dye for surface cracks."
      }
    ]
  }
};
