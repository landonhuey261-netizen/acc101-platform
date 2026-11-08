// Plumbing 111 — Midterm and Final exams.
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
        "q": "A length of white rigid plastic pipe is printed 'PVC, ASTM D1785'. It is proposed for a hot-water supply line. What is the correct call?",
        "choices": [
          "Approve it — PVC handles hot water",
          "Reject it — PVC is not rated for hot-water supply; use CPVC, PEX, or copper",
          "Approve it if the water is below 100°F",
          "Reject it because PVC cannot be solvent-welded"
        ],
        "answer": 1,
        "explanation": "Correct (b): PVC softens in hot water and is limited to cold water and DWV. (a) PVC is never a hot-water material. (c) There is no low-temperature exception for PVC on hot-water service. (d) PVC solvent-welds fine — the problem is temperature, not joining."
      },
      {
        "module": 1,
        "q": "Copper tube printed in green is:",
        "choices": [
          "Type M",
          "Type L",
          "Type K",
          "Type DWV"
        ],
        "answer": 2,
        "explanation": "Correct (c): Green is Type K, the thickest wall. (a) Type M prints red. (b) Type L prints blue. (d) DWV prints yellow."
      },
      {
        "module": 1,
        "q": "The first question to ask when choosing a pipe material is:",
        "choices": [
          "What is cheapest?",
          "What does this water, temperature, pressure, and location demand?",
          "What color is it?",
          "What is on the truck?"
        ],
        "answer": 1,
        "explanation": "Correct (b): Service conditions decide the material. (a) Cost comes after suitability. (c) Color is not a selection criterion. (d) Truck stock is convenience, not design."
      },
      {
        "module": 1,
        "q": "Michigan's plumbing code is based on:",
        "choices": [
          "The Uniform Plumbing Code",
          "The 2021 International Plumbing Code",
          "The National Electrical Code",
          "No model code"
        ],
        "answer": 1,
        "explanation": "Correct (b): The 2021 Michigan Plumbing Code is based on the 2021 IPC. (a) Michigan uses IPC, not UPC. (c) The electrical code governs wiring. (d) Michigan has an adopted plumbing code."
      },
      {
        "module": 2,
        "q": "Which plastic is approved for hot and cold potable water and rated to 200°F?",
        "choices": [
          "PVC",
          "ABS",
          "CPVC",
          "None"
        ],
        "answer": 2,
        "explanation": "Correct (c): CPVC is rated for hot water up to 200°F. (a) PVC is cold-water/DWV only. (b) ABS is DWV only. (d) CPVC and PEX are both approved."
      },
      {
        "module": 2,
        "q": "ABS pipe is used for:",
        "choices": [
          "Drinking water",
          "Hot-water supply",
          "Drain, waste, and vent only",
          "Gas piping"
        ],
        "answer": 2,
        "explanation": "Correct (c): ABS is a DWV plastic. (a) and (b) ABS is not listed for potable or hot water. (d) Gas uses steel, CSST, or approved PE."
      },
      {
        "module": 2,
        "q": "PEX-A is normally joined by:",
        "choices": [
          "Solvent cement",
          "Expansion fittings",
          "Threaded joints",
          "Lead and oakum"
        ],
        "answer": 1,
        "explanation": "Correct (b): PEX-A is stretched and shrinks tight onto expansion fittings. (a) Solvent cement is for rigid PVC/CPVC/ABS. (c) PEX is not threaded. (d) Lead and oakum is for old cast-iron hubs."
      },
      {
        "module": 2,
        "q": "Why will a 3/4-inch PVC fitting not fit 3/4-inch CPVC pipe?",
        "choices": [
          "The colors differ",
          "PVC follows iron pipe size and CPVC follows copper tube size, so outside diameters differ",
          "CPVC is metric",
          "PVC fittings are drain-only"
        ],
        "answer": 1,
        "explanation": "Correct (b): IPS and CTS give different outside diameters at the same nominal size. (a) Color is not a dimension. (c) CPVC water pipe is CTS, not metric. (d) PVC pressure fittings exist; the size system is the problem."
      },
      {
        "module": 3,
        "q": "The correct solvent-weld order is:",
        "choices": [
          "Cement, prime, cut, assemble",
          "Cut square, deburr, dry-fit, prime, cement, assemble and hold",
          "Prime, cut, cement, dry-fit",
          "Assemble, prime, cement, cut"
        ],
        "answer": 1,
        "explanation": "Correct (b): Cut, deburr, dry-fit, prime, cement, assemble with a quarter-turn, hold. (a) Cement before cutting is impossible. (c) Priming before cutting wastes the primer window. (d) Assembly must come last."
      },
      {
        "module": 3,
        "q": "ABS joints differ from PVC joints in that ABS:",
        "choices": [
          "Needs two coats of primer",
          "Uses cement only, with no primer",
          "Cannot be solvent-welded",
          "Needs a torch"
        ],
        "answer": 1,
        "explanation": "Correct (b): ABS cement works without primer. (a) ABS takes no primer at all. (c) ABS is solvent-welded with ABS cement. (d) No torch is used on plastic pipe."
      },
      {
        "module": 3,
        "q": "A crimp ring is proven correct by:",
        "choices": [
          "Looking at it",
          "The go/no-go gauge — go passes, no-go does not",
          "Pulling on it hard",
          "Measuring the pipe"
        ],
        "answer": 1,
        "explanation": "Correct (b): The gauge is the mechanical proof. (a) Looks cannot measure crimp force. (c) Pulling tests the fitting, not the crimp dimension. (d) Pipe length is unrelated to the crimp."
      },
      {
        "module": 3,
        "q": "A failed crimp ring should be:",
        "choices": [
          "Re-crimped in place",
          "Cut out and remade with a new ring",
          "Heated with a torch",
          "Left alone if it is not leaking"
        ],
        "answer": 1,
        "explanation": "Correct (b): Cut it out and remake the joint. (a) Re-crimping work-hardens the ring and gives no reliable seal. (c) Heat destroys PEX. (d) An unproven joint will leak under pressure or over time."
      },
      {
        "module": 3,
        "q": "Push-fit fittings are a poor choice for:",
        "choices": [
          "A quick repair in a tight spot",
          "A transition between copper and PEX",
          "Every joint in a whole-house repipe, because of cost per fitting",
          "A temporary cap"
        ],
        "answer": 2,
        "explanation": "Correct (c): Push-fit fittings cost far too much per joint for a whole house. (a) Tight spots are where push-fit shines. (b) Transitions are a classic push-fit use. (d) Temporary work is another good use."
      },
      {
        "module": 4,
        "q": "Two elbows are 30 inches apart face to face, with 1-1/4-inch sockets. The cut length is:",
        "choices": [
          "30 inches",
          "31-1/4 inches",
          "32-1/2 inches",
          "27-1/2 inches"
        ],
        "answer": 2,
        "explanation": "Correct (c): 30 + 1-1/4 + 1-1/4 = 32-1/2 inches. (a) Forgets take-up. (b) Adds only one socket. (d) Subtracts instead of adding."
      },
      {
        "module": 4,
        "q": "PEX should be cut with:",
        "choices": [
          "A utility knife",
          "A hacksaw",
          "A PEX cutter only",
          "A torch"
        ],
        "answer": 2,
        "explanation": "Correct (c): Only a PEX cutter gives a clean square cut without crushing the tubing. (a) A knife crushes and angles the soft tube. (b) A saw leaves a ragged edge. (d) A torch melts plastic."
      },
      {
        "module": 4,
        "q": "An outside burr left on a pipe end can:",
        "choices": [
          "Strengthen the joint",
          "Scrape cement out of the socket and leave a dry spot that leaks",
          "Improve flow",
          "Help the pipe seat deeper"
        ],
        "answer": 1,
        "explanation": "Correct (b): The burr wipes cement away as the pipe enters. (a) Burrs weaken joints. (c) Inside burrs restrict flow; outside burrs harm the seal. (d) A burr resists seating."
      },
      {
        "module": 4,
        "q": "Why dry-fit a run before cementing?",
        "choices": [
          "It makes cement dry faster",
          "Solvent welds are permanent, so the dry-fit finds errors for free",
          "It replaces primer",
          "It is required for PEX only"
        ],
        "answer": 1,
        "explanation": "Correct (b): Once cemented, a mistake costs a cut-out; the dry-fit catches it first. (a) Dry-fitting does not change cure time. (c) Dry-fitting never replaces primer. (d) Dry-fitting matters for every joining method."
      },
      {
        "module": 5,
        "q": "Which copper type is used for underground water service?",
        "choices": [
          "Type M",
          "Type DWV",
          "Type K",
          "Type L only"
        ],
        "answer": 2,
        "explanation": "Correct (c): Type K's thick wall survives burial. (a) Type M is not allowed underground. (b) DWV is drain tube, never pressure. (d) Type L is the interior standard, not the burial choice."
      },
      {
        "module": 5,
        "q": "Type DWV copper tube must never be used for:",
        "choices": [
          "Drain lines",
          "Vent lines",
          "Pressurized water supply",
          "Gravity drainage"
        ],
        "answer": 2,
        "explanation": "Correct (c): DWV tube is too thin for pressure and can split. (a), (b), and (d) are exactly what DWV is made for."
      },
      {
        "module": 5,
        "q": "A 3/4-inch nominal copper tube measures what outside diameter?",
        "choices": [
          "3/4 inch",
          "7/8 inch",
          "1 inch",
          "5/8 inch"
        ],
        "answer": 1,
        "explanation": "Correct (b): Copper tube size is based on outside diameter; 3/4-inch nominal tube is 7/8 inch outside. (a) Confuses nominal size with measured diameter. (c) and (d) are other sizes."
      },
      {
        "module": 5,
        "q": "Rank these copper types from thickest to thinnest wall:",
        "choices": [
          "M, L, K, DWV",
          "K, L, M, DWV",
          "DWV, M, L, K",
          "L, K, DWV, M"
        ],
        "answer": 1,
        "explanation": "Correct (b): K thickest, then L, then M, then DWV thinnest. (a) Reverses the pressure types. (c) Is thinnest to thickest. (d) Scrambles the order."
      },
      {
        "module": 6,
        "q": "For drinking water, solder must be:",
        "choices": [
          "Lead solder",
          "Lead-free",
          "Silver brazing rod",
          "Any solder"
        ],
        "answer": 1,
        "explanation": "Correct (b): Lead solder is banned for potable water because lead leaches into drinking water. (a) Lead solder is illegal on water lines. (c) Brazing rod is for brazing, not soldering. (d) The solder must be lead-free and listed."
      },
      {
        "module": 6,
        "q": "The solder should be melted by:",
        "choices": [
          "The torch flame directly",
          "The hot fitting and tube at the joint",
          "A lighter",
          "Friction"
        ],
        "answer": 1,
        "explanation": "Correct (b): The joint's heat melts the solder and capillary action draws it in. (a) Torch-melted solder sits on the surface and does not bond. (c) A lighter cannot heat a fitting. (d) Friction does not melt solder."
      },
      {
        "module": 6,
        "q": "A pipe must be dry before soldering because:",
        "choices": [
          "Wet copper cannot be cleaned",
          "Water inside boils and steals heat, so the joint never reaches soldering temperature",
          "Flux dissolves in air",
          "The torch will not light"
        ],
        "answer": 1,
        "explanation": "Correct (b): Boiling water caps the joint temperature below what solder needs. (a) Wet copper can be cleaned but cannot be soldered. (c) Flux is not dissolved by air. (d) The torch lights fine; the joint is the problem."
      },
      {
        "module": 6,
        "q": "A good sweat joint shows:",
        "choices": [
          "A thick blob of solder on one side",
          "A thin, even ring of solder all the way around",
          "Blackened copper",
          "No visible solder"
        ],
        "answer": 1,
        "explanation": "Correct (b): An even ring proves capillary flow all around. (a) A one-sided blob means uneven heat or too much solder. (c) Blackened copper means a burnt joint. (d) No visible solder means the joint never filled."
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
        "q": "A contractor proposes PVC for a hot-water line because it is cheap. What is the correct response?",
        "choices": [
          "Approve it — PVC is the cheapest option",
          "Reject it — PVC softens in hot water; use CPVC, PEX, or copper",
          "Approve it for cold sections only",
          "Reject it because PVC cannot be cut"
        ],
        "answer": 1,
        "explanation": "Correct (b): PVC is not rated for hot-water supply. (a) Cost never overrides temperature rating. (c) The proposal is for a hot-water line, not cold sections. (d) PVC cuts easily; temperature is the problem."
      },
      {
        "module": 1,
        "q": "Pipe with no readable printing should be:",
        "choices": [
          "Installed if it looks right",
          "Treated as unknown and not installed in a pressure or potable system",
          "Installed on drains only",
          "Painted and used"
        ],
        "answer": 1,
        "explanation": "Correct (b): Without printing you cannot prove material, standard, or listing. (a) Looks prove nothing. (c) Unknown pipe does not go anywhere in a code job. (d) Paint does not create a listing."
      },
      {
        "module": 2,
        "q": "CPVC is rated for hot water up to about:",
        "choices": [
          "100°F",
          "140°F",
          "200°F",
          "300°F"
        ],
        "answer": 2,
        "explanation": "Correct (c): CPVC is rated for water up to 200°F. (a) 100°F is barely above room temperature. (b) 140°F is near PVC's softening range. (d) 300°F is far above any plastic water pipe rating."
      },
      {
        "module": 2,
        "q": "PEX must be protected from:",
        "choices": [
          "Cold water",
          "Sunlight (UV)",
          "Copper fittings",
          "Insulation"
        ],
        "answer": 1,
        "explanation": "Correct (b): UV light degrades PEX. (a) PEX carries cold water by design. (c) Copper and brass fittings are normal for PEX. (d) Insulation protects PEX."
      },
      {
        "module": 2,
        "q": "Which PEX type is joined by expansion fittings?",
        "choices": [
          "PEX-B",
          "PEX-C",
          "PEX-A",
          "All PEX types only by crimp"
        ],
        "answer": 2,
        "explanation": "Correct (c): PEX-A is the expansion type. (a) and (b) PEX-B and PEX-C join by crimp or clamp rings. (d) Expansion is a PEX-A method."
      },
      {
        "module": 3,
        "q": "After assembling a solvent-welded joint you should:",
        "choices": [
          "Let go immediately",
          "Hold it for about 30 seconds so it does not push back out",
          "Run water through it at once",
          "Heat it with a torch"
        ],
        "answer": 1,
        "explanation": "Correct (b): The joint can creep out while the cement is wet. (a) Letting go risks a pushed-out joint. (c) Water must wait for the cure time. (d) A torch destroys plastic pipe."
      },
      {
        "module": 3,
        "q": "PEX expansion fittings seal because:",
        "choices": [
          "A metal ring squeezes the pipe",
          "The pipe's memory shrinks it tight onto the fitting after being stretched",
          "Cement fuses the pipe to the fitting",
          "The fitting is threaded"
        ],
        "answer": 1,
        "explanation": "Correct (b): PEX-A memory closes the stretched pipe onto the fitting. (a) That describes a crimp ring. (c) PEX is never solvent-welded. (d) Expansion fittings are not threaded."
      },
      {
        "module": 3,
        "q": "A solvent-welded joint assembled five minutes after priming may fail because:",
        "choices": [
          "The primer evaporates and the surface is no longer soft enough to fuse",
          "The cement gets stronger with time",
          "The pipe shrinks",
          "The fitting expands"
        ],
        "answer": 0,
        "explanation": "Correct (a): The primer's softening is temporary — about five minutes. (b) Cement does not get stronger before assembly. (c) The pipe does not shrink in five minutes. (d) The fitting does not expand."
      },
      {
        "module": 4,
        "q": "A pipe between two fittings measures 18 inches face to face, with 3/4-inch sockets. The correct cut length is:",
        "choices": [
          "18 inches",
          "18-3/4 inches",
          "19-1/2 inches",
          "16-1/2 inches"
        ],
        "answer": 2,
        "explanation": "Correct (c): 18 + 3/4 + 3/4 = 19-1/2 inches. (a) Forgets take-up. (b) Adds only one socket. (d) Subtracts instead of adding."
      },
      {
        "module": 4,
        "q": "A chamfer on a pipe end is:",
        "choices": [
          "A coat of primer",
          "A small bevel on the outside edge so the pipe enters the fitting without scraping cement out",
          "A type of fitting",
          "A measuring mark"
        ],
        "answer": 1,
        "explanation": "Correct (b): The bevel eases entry and protects the cement coat. (a) Primer is a solvent, not a bevel. (c) A chamfer is a shape on the pipe end. (d) A mark shows where to cut."
      },
      {
        "module": 5,
        "q": "Blue printing on copper tube means:",
        "choices": [
          "Type K",
          "Type L",
          "Type M",
          "Type DWV"
        ],
        "answer": 1,
        "explanation": "Correct (b): Blue is Type L. (a) K prints green. (c) M prints red. (d) DWV prints yellow."
      },
      {
        "module": 5,
        "q": "Soft copper tube is useful because it:",
        "choices": [
          "Is cheaper than Type M",
          "Can be bent by hand or with a bender, replacing fittings",
          "Never needs a fitting",
          "Cannot kink"
        ],
        "answer": 1,
        "explanation": "Correct (b): Annealed coil tube bends around obstacles with fewer joints. (a) Soft tube is not the cheapest option. (c) It still needs fittings at ends. (d) It kinks easily and a kink must be cut out."
      },
      {
        "module": 5,
        "q": "The most common copper type for interior residential water supply is:",
        "choices": [
          "Type K",
          "Type L",
          "Type DWV",
          "Type M only"
        ],
        "answer": 1,
        "explanation": "Correct (b): Type L is the standard all-round interior supply tube. (a) Type K is overkill indoors. (c) DWV is drains only. (d) Type M is used too, but L is the most common standard choice."
      },
      {
        "module": 6,
        "q": "Flux is applied to:",
        "choices": [
          "The torch flame",
          "The cleaned tube end and the inside of the fitting, in a thin even coat",
          "The outside of the fitting only",
          "The solder wire"
        ],
        "answer": 1,
        "explanation": "Correct (b): Flux goes on both cleaned surfaces, thinly. (a) Flux never goes on the flame. (c) The tube end needs flux too. (d) Flux on the wire does not prepare the joint surfaces."
      },
      {
        "module": 6,
        "q": "A blackened, burnt solder joint should be:",
        "choices": [
          "Left alone if it holds water",
          "Fixed with more solder",
          "Taken apart, cleaned to bright copper, re-fluxed, and remade",
          "Painted over"
        ],
        "answer": 2,
        "explanation": "Correct (c): Burnt flux means oxidized copper that solder cannot wet; only a remake fixes it. (a) It will fail under pressure or over time. (b) More solder cannot bond to oxidized copper. (d) Paint hides the problem."
      },
      {
        "module": 6,
        "q": "Soldering works below what temperature, separating it from brazing?",
        "choices": [
          "200°F",
          "450°F",
          "840°F",
          "1,500°F"
        ],
        "answer": 2,
        "explanation": "Correct (c): The 840°F line separates soldering from brazing. (a) 200°F is a water temperature, not a joining threshold. (b) 450°F is near the soldering range but not the dividing line. (d) 1,500°F is a brazing temperature."
      },
      {
        "module": 7,
        "q": "Sil-phos brazing filler is self-fluxing when joining:",
        "choices": [
          "Copper to brass",
          "Copper to copper",
          "Copper to steel",
          "Copper to plastic"
        ],
        "answer": 1,
        "explanation": "Correct (b): Sil-phos needs no separate flux on copper-to-copper joints. (a) and (c) Copper to brass or steel needs silver filler with flux. (d) Brazing never joins plastic."
      },
      {
        "module": 7,
        "q": "A press fitting must never be:",
        "choices": [
          "Pressed once",
          "Pressed twice",
          "Marked for depth",
          "Deburred before pressing"
        ],
        "answer": 1,
        "explanation": "Correct (b): A second press deforms the fitting and ring and ruins the joint. (a) One press is correct. (c) The depth mark is required. (d) Deburring protects the sealing ring."
      },
      {
        "module": 7,
        "q": "Press-fit is the best choice when:",
        "choices": [
          "The budget is smallest",
          "No open flame is allowed and the line cannot be fully drained",
          "The joint must be taken apart often",
          "The pipe is plastic"
        ],
        "answer": 1,
        "explanation": "Correct (b): Press-fit needs no flame and works on wet lines. (a) Press-fit tool and fittings cost more than soldering. (c) Press joints are permanent; use mechanical joints for service. (d) Press-fit is for copper tube."
      },
      {
        "module": 7,
        "q": "A compression fitting seals by:",
        "choices": [
          "Melting solder into the joint",
          "Tightening a nut that squeezes a ferrule onto the tube",
          "A solvent weld",
          "Thread sealant alone"
        ],
        "answer": 1,
        "explanation": "Correct (b): The nut squeezes the ferrule, which grips and seals the tube. (a) That is soldering. (c) That is plastic pipe joining. (d) Thread sealant helps threaded joints; compression joints seal with the ferrule."
      },
      {
        "module": 8,
        "q": "Which fitting branches one line into two?",
        "choices": [
          "Elbow",
          "Coupling",
          "Tee",
          "Cap"
        ],
        "answer": 2,
        "explanation": "Correct (c): A tee branches a run. (a) An elbow changes direction. (b) A coupling joins two lengths straight. (d) A cap closes a line."
      },
      {
        "module": 8,
        "q": "The best valve for a main shutoff is a:",
        "choices": [
          "Globe valve",
          "Gate valve",
          "Ball valve",
          "Check valve"
        ],
        "answer": 2,
        "explanation": "Correct (c): A ball valve shuts in a quarter-turn with almost no pressure loss. (a) A globe valve throttles and wastes pressure. (b) A gate valve is slow and seizes. (d) A check valve only stops backflow."
      },
      {
        "module": 8,
        "q": "Copper to PEX must be joined with:",
        "choices": [
          "Solvent cement",
          "A transition fitting made for both materials, or a push-fit fitting",
          "Lead and oakum",
          "A threaded plastic adapter cranked tight"
        ],
        "answer": 1,
        "explanation": "Correct (b): Transition adapters and push-fit fittings are made for this. (a) No cement bonds plastic to copper. (c) Lead and oakum is for old cast-iron hubs. (d) Over-tightening cracks plastic threads."
      },
      {
        "module": 8,
        "q": "Hanging copper from a bare steel strap causes:",
        "choices": [
          "Nothing",
          "Galvanic corrosion that eats the copper at the strap",
          "Better grounding",
          "Noise reduction"
        ],
        "answer": 1,
        "explanation": "Correct (b): Dissimilar metals plus moisture make a battery that attacks the copper. (a) They are not compatible in contact. (c) Grounding is an electrical matter. (d) Steel straps do not quiet pipe."
      },
      {
        "module": 9,
        "q": "Copper grows about how much per 100 feet per 100°F?",
        "choices": [
          "About 1 inch",
          "About 1 foot",
          "About 1/16 inch",
          "It does not grow"
        ],
        "answer": 0,
        "explanation": "Correct (a): About 1 inch per 100 feet per 100°F is the working rule. (b) A foot would be ten times too much. (c) 1/16 inch is far too little. (d) All pipe grows with heat."
      },
      {
        "module": 9,
        "q": "A 50-foot copper line rising 100°F grows about:",
        "choices": [
          "1/2 inch",
          "2 inches",
          "5 inches",
          "Nothing"
        ],
        "answer": 0,
        "explanation": "Correct (a): Half the length means half the growth: 1 inch × 50/100 = 1/2 inch. (b) That would be a 200-foot run. (c) That is closer to a long PEX run. (d) Copper always grows with heat."
      },
      {
        "module": 9,
        "q": "An anchor's job is to:",
        "choices": [
          "Let the pipe slide freely",
          "Fix the pipe firmly at one point so expansion is directed away from it",
          "Carry the pipe from below",
          "Insulate the pipe"
        ],
        "answer": 1,
        "explanation": "Correct (b): Anchors set the fixed point that expansion works away from. (a) That is a sliding support or guide. (c) That is a stand. (d) Insulation is separate."
      },
      {
        "module": 9,
        "q": "A riser clamp is used on:",
        "choices": [
          "Horizontal pipe",
          "Vertical pipe, at each floor, to carry its weight",
          "Underground pipe",
          "Gas pipe only"
        ],
        "answer": 1,
        "explanation": "Correct (b): Riser clamps grip vertical pipe at each floor. (a) Horizontal pipe uses hangers. (c) Buried pipe is supported by the trench. (d) Riser clamps are used on any vertical pipe material."
      },
      {
        "module": 10,
        "q": "High-pressure air testing of plastic pipe is dangerous because:",
        "choices": [
          "Air is expensive",
          "Compressed air stores energy, so a failed fitting can blow apart violently",
          "Air dissolves plastic",
          "Gauges cannot read air"
        ],
        "answer": 1,
        "explanation": "Correct (b): Stored energy in compressed air turns a failure into a projectile. (a) Cost is not a safety issue. (c) Air does not dissolve plastic. (d) Gauges read air pressure routinely."
      },
      {
        "module": 10,
        "q": "After repairing a leak found in a test, you must:",
        "choices": [
          "Test only the repaired joint",
          "Retest the whole section from the start",
          "Skip the retest if the repair looks good",
          "Paint the joint"
        ],
        "answer": 1,
        "explanation": "Correct (b): Only a full retest proves the repair and the rest of the system. (a) A joint-only test does not prove the section. (c) Looks never prove a joint. (d) Paint hides problems."
      },
      {
        "module": 10,
        "q": "Testing a solvent-welded joint before its cure time:",
        "choices": [
          "Is good practice",
          "Can damage the joint and proves nothing",
          "Makes the cement cure faster",
          "Is required by code"
        ],
        "answer": 1,
        "explanation": "Correct (b): An uncured joint is not at full strength; test pressure can harm it. (a) It is the opposite of good practice. (c) Pressure does not speed curing. (d) The code requires waiting for cure."
      },
      {
        "module": 11,
        "q": "Blue-green stains in a tub with copper pipes mean:",
        "choices": [
          "The water is too hard",
          "Copper is dissolving into the water — the water is attacking the pipe",
          "The tub is dirty",
          "The water heater is failing"
        ],
        "answer": 1,
        "explanation": "Correct (b): Blue-green staining is dissolved copper from the pipe itself. (a) Hard water leaves white scale. (c) Dirt does not make blue-green stains. (d) The heater is not the source."
      },
      {
        "module": 11,
        "q": "The EPA drinking-water action level for copper is:",
        "choices": [
          "0.1 parts per million",
          "1.3 parts per million",
          "13 parts per million",
          "130 parts per million"
        ],
        "answer": 1,
        "explanation": "Correct (b): The action level is 1.3 ppm. (a) 0.1 ppm is far below the level. (c) and (d) are ten and a hundred times too high."
      },
      {
        "module": 11,
        "q": "One pinhole leak usually means:",
        "choices": [
          "The pipe is fixed by patching that one spot",
          "More leaks are coming, because the whole line shared the same water",
          "The water is safe",
          "Only that joint was bad"
        ],
        "answer": 1,
        "explanation": "Correct (b): Pitting is a system-wide condition, not a single defect. (a) A patch stops the water but not the cause. (c) The water chemistry is the problem. (d) A pinhole is in the wall, not at a joint."
      },
      {
        "module": 11,
        "q": "Water with pH below 7 is:",
        "choices": [
          "Alkaline",
          "Acidic and able to dissolve copper from the inside",
          "Pure",
          "Hard"
        ],
        "answer": 1,
        "explanation": "Correct (b): Acidic water attacks copper and causes pitting. (a) Alkaline is pH above 7. (c) pH says nothing about purity. (d) Hardness is a separate measure."
      },
      {
        "module": 12,
        "q": "On a real job, the best material plan is usually:",
        "choices": [
          "One material for everything",
          "A mix of materials, each chosen for its section",
          "The cheapest material available",
          "Whatever is already on the truck"
        ],
        "answer": 1,
        "explanation": "Correct (b): Each section has different demands, so the plan mixes materials on purpose. (a) No material wins every section. (c) Cheapest in the wrong service is the most expensive choice. (d) Truck stock is convenience, not design."
      },
      {
        "module": 12,
        "q": "For a buried water service, the standard copper choice is:",
        "choices": [
          "Type M",
          "Type DWV",
          "Type K",
          "Type L only"
        ],
        "answer": 2,
        "explanation": "Correct (c): Type K's thick wall survives burial. (a) Type M is not allowed underground. (b) DWV is drains only. (d) Type L is the interior standard, not the burial choice."
      },
      {
        "module": 12,
        "q": "A slightly acidic water supply argues for:",
        "choices": [
          "All-copper runs everywhere",
          "PEX on long fixture runs, since plastic is not attacked by acidic water",
          "PVC on hot water",
          "No water test"
        ],
        "answer": 1,
        "explanation": "Correct (b): Plastic is immune to the acidic attack that pits copper. (a) All-copper is exactly what acidic water punishes. (c) PVC never carries hot water. (d) A water test is how the acidity is confirmed."
      },
      {
        "module": 12,
        "q": "Inspection day for a plastic and copper job includes checking:",
        "choices": [
          "Pipe printing, joint quality, support spacing and compatibility, expansion, and the pressure test record",
          "Only the color of the pipe",
          "Only the price of the materials",
          "The plumber's truck"
        ],
        "answer": 0,
        "explanation": "Correct (a): All five checks matter. (b), (c), and (d) each miss nearly everything an inspector verifies."
      },
      {
        "module": 12,
        "q": "Life-cycle cost means:",
        "choices": [
          "The purchase price only",
          "The total cost over the material's whole life, including installation, maintenance, and replacement",
          "The labor cost only",
          "The cost of the fittings only"
        ],
        "answer": 1,
        "explanation": "Correct (b): Cheap material in the wrong service is the most expensive choice over time. (a), (c), and (d) each count only one part of the cost."
      }
    ]
  }
};
