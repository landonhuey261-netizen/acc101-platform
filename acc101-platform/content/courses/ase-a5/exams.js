// ase-a5 — Midterm and Final exams.
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
        "q": "A car's brake pedal suddenly feels soft and spongy after a caliper is replaced. What is the most likely cause?",
        "choices": [
          "Worn brake pads",
          "Air in the brake lines",
          "A failed booster",
          "A flat tire"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Opening the system let air in, and air compresses. (a) Worn pads make the pedal low, not spongy. (c) A failed booster makes the pedal hard. (d) A flat tire does not affect the pedal."
      },
      {
        "module": 1,
        "q": "A student asks what actually happens to a car's motion when the brakes are applied. What does the braking turn that motion into?",
        "choices": [
          "Electricity",
          "Heat, through friction",
          "Sound",
          "Compressed air"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Friction between pad and rotor turns motion into heat. (a) Normal hydraulic brakes do not generate electricity. (c) Sound is a by-product. (d) Compressed air is not the mechanism."
      },
      {
        "module": 1,
        "q": "A split hydraulic brake system has two circuits so that:",
        "choices": [
          "One leak does not remove all braking",
          "The car has two pedals",
          "The brakes work only on two wheels",
          "The steering is powered"
        ],
        "answer": 0,
        "explanation": "Correct: (a). The second circuit still serves its two wheels if the first fails. (b) There is one pedal. (c) All four wheels have brakes. (d) Steering is a different system."
      },
      {
        "module": 1,
        "q": "A brake-fluid reservoir is low. The most likely explanation is:",
        "choices": [
          "Worn pads or a leak",
          "The fluid evaporated",
          "The car needs an oil change",
          "The tires are low"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Fluid is not used up, so a low level means wear or a leak. (b) Fluid does not evaporate from a sealed system. (c) Oil is a different system. (d) Tire pressure is unrelated."
      },
      {
        "module": 2,
        "q": "A car's inner brake pad is worn thin while the outer pad looks nearly new. The most likely cause is a:",
        "choices": [
          "Stuck guide pin",
          "Worn rotor",
          "Low battery",
          "Flat tire"
        ],
        "answer": 0,
        "explanation": "Correct: (a). A caliper that cannot slide presses only the inner pad properly. (b) A worn rotor wears both pads. (c) A battery does not wear pads. (d) A flat tire does not wear one pad."
      },
      {
        "module": 2,
        "q": "A floating caliper squeezes the outer pad against the rotor by:",
        "choices": [
          "Sliding on its guide pins",
          "Using pistons on the outside",
          "Pulling a cable",
          "Heating up"
        ],
        "answer": 0,
        "explanation": "Correct: (a). The caliper slides so the outer pad is pulled in. (b) That describes a fixed caliper. (c) No cable squeezes a disc brake. (d) Heat is a by-product, not the mechanism."
      },
      {
        "module": 2,
        "q": "A driver hears a high-pitched squeal when braking lightly, and the pads are visibly thin. What is the squeal warning about?",
        "choices": [
          "New",
          "Thin and needs replacing",
          "Too thick",
          "The wrong color"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The metal tab touches the rotor when the friction material is thin. (a) A new pad does not squeal from its indicator. (c) A thick pad has no contact with the tab. (d) Color is irrelevant."
      },
      {
        "module": 2,
        "q": "Brake grease belongs on the guide pins and pad backs, and never on the:",
        "choices": [
          "Friction material or the rotor face",
          "Caliper bracket",
          "Wheel hub",
          "Lug nuts"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Grease on the stopping surface would stop the brake working. (b) The bracket is a proper place for hardware grease. (c) The hub face is cleaned, not greased with brake grease. (d) Lug nuts are torqued dry or as the maker directs, not greased with brake grease."
      },
      {
        "module": 3,
        "q": "In a drum brake, the wheel cylinder pushes the shoes:",
        "choices": [
          "Outward against the inside of the drum",
          "Against a rotor",
          "Together",
          "Off the backing plate"
        ],
        "answer": 0,
        "explanation": "Correct: (a). The wheel cylinder's pistons push the shoe tops outward. (b) Pads against a rotor is a disc brake. (c) The shoes are pushed apart, not together. (d) The shoes stay on the backing plate."
      },
      {
        "module": 3,
        "q": "Self-energizing action in a drum brake means the drum's rotation:",
        "choices": [
          "Wedges the shoe harder against the drum, adding braking force",
          "Pushes the shoe away",
          "Stops the wheel cylinder",
          "Cools the brake"
        ],
        "answer": 0,
        "explanation": "Correct: (a). The drum drags the shoe and wedges it harder. (b) Rotation pulls the shoe in. (c) The wheel cylinder keeps working. (d) Rotation does not cool the brake."
      },
      {
        "module": 3,
        "q": "The leading shoe in a drum brake wears faster than the trailing shoe because it:",
        "choices": [
          "Gets the full self-energizing effect and does most of the work",
          "Is bigger",
          "Is made of different material",
          "Is closer to the pedal"
        ],
        "answer": 0,
        "explanation": "Correct: (a). The leading shoe is pushed in the drum's direction and wedges harder. (b) Size is not the reason. (c) The material is the same. (d) Distance from the pedal does not decide the work."
      },
      {
        "module": 3,
        "q": "A drum brake's self-adjuster is seized, and the pedal sinks lower over months. The connection is that:",
        "choices": [
          "The adjuster cannot take up shoe wear, so the gap to the drum keeps growing",
          "The adjuster adds fluid",
          "The adjuster locks the wheels",
          "The adjuster heats the drum"
        ],
        "answer": 0,
        "explanation": "Correct: (a). A working adjuster clicks out as the shoes wear; a seized one does not. (b) The adjuster moves shoes, not fluid. (c) It does not lock the wheels. (d) It does not heat the drum."
      },
      {
        "module": 4,
        "q": "A brake pedal sinks slowly under steady pressure with no visible leak. The most likely fault is:",
        "choices": [
          "An internal master-cylinder seal leak",
          "A failed booster",
          "Worn brake pads",
          "A flat tire"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Fluid slips past the piston inside the cylinder. (b) A failed booster makes the pedal hard. (c) Worn pads make the pedal low, not sinking. (d) A flat tire does not sink the pedal."
      },
      {
        "module": 4,
        "q": "A technician pumps the brake pedal hard with the engine off, holds it down, and starts the engine. If the booster is working, what happens to the pedal?",
        "choices": [
          "Drop slightly when the engine is started",
          "Rise when the engine is started",
          "Go hard when the engine is started",
          "Stay exactly still"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Vacuum returns and the booster starts helping. (b) A rising pedal would mean the booster is pushing back. (c) A hard pedal means no assist. (d) No movement means the booster is not working."
      },
      {
        "module": 4,
        "q": "The vacuum booster's check valve:",
        "choices": [
          "Holds vacuum in the booster after the engine stops",
          "Lets air into the brake lines",
          "Pumps the fluid",
          "Cools the booster"
        ],
        "answer": 0,
        "explanation": "Correct: (a). It keeps vacuum stored for assisted stops with the engine off. (b) Air must never enter the lines. (c) The valve does not pump fluid. (d) The valve does not cool anything."
      },
      {
        "module": 4,
        "q": "A driver says the brake pedal suddenly takes far more effort than usual, even with the engine running. What has most likely happened?",
        "choices": [
          "Power assist is gone",
          "Master cylinder seals have failed internally",
          "Pads are worn out",
          "Tires are flat"
        ],
        "answer": 0,
        "explanation": "Correct: (a). No assist means the driver pushes the master cylinder alone. (b) Failed seals make the pedal sink. (c) Worn pads make the pedal low. (d) Flat tires do not harden the pedal."
      },
      {
        "module": 5,
        "q": "In an emergency stop on a wet road, what is the ABS there to preserve for the driver?",
        "choices": [
          "Shorten every stop",
          "Keep the wheels rolling during a hard stop so the driver can still steer",
          "Make the brakes quieter",
          "Save fuel"
        ],
        "answer": 1,
        "explanation": "Correct: (b). ABS preserves steering control by preventing lock-up. (a) ABS does not shorten every stop. (c) Noise is not the purpose. (d) Fuel is unrelated."
      },
      {
        "module": 5,
        "q": "An ABS modulator is cycling pressure to a wheel that is about to lock. In what order does it work through its three phases?",
        "choices": [
          "Hold, release, reapply",
          "Release, hold, reapply",
          "Reapply, release, hold",
          "Hold, reapply, release"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Hold the pressure, release it so the wheel rolls, reapply it as grip returns. (b), (c), and (d) are the wrong order."
      },
      {
        "module": 5,
        "q": "During a hard stop the brake pedal starts pulsing under the driver's foot and a grinding noise begins. What should the driver do next?",
        "choices": [
          "Keep the pedal pressed firmly and steer",
          "Lift off the pedal immediately",
          "Pump the pedal rapidly",
          "Turn off the engine"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Keeping the pedal down lets ABS keep working. (b) Lifting off stops ABS and lengthens the stop. (c) Pumping fights the system. (d) Turning off the engine removes power steering and brakes."
      },
      {
        "module": 5,
        "q": "A car's ABS warning light stays lit after starting, while the brakes feel normal. What does that light tell the driver?",
        "choices": [
          "The brakes have failed completely",
          "ABS is off, but the normal brakes still work",
          "The car cannot be driven at all",
          "The tires are flat"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The light means ABS is disabled; the hydraulics still work. (a) The normal brakes still work. (c) The car can be driven gently to a repair. (d) Tires have their own warning."
      },
      {
        "module": 6,
        "q": "A car is trying to pull away on ice and one drive wheel is spinning uselessly. How does traction control get the car moving?",
        "choices": [
          "Braking it and reducing engine power",
          "Inflating the tire",
          "Locking the steering",
          "Turning off the engine"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Braking the spinning wheel sends force to the gripping wheel, and less power means less spin. (b) Inflation does not stop a spin. (c) Steering is unrelated. (d) The engine is not turned off."
      },
      {
        "module": 6,
        "q": "A driver turns the wheel into a corner but the car keeps plowing straight ahead. What is this handling behavior called?",
        "choices": [
          "Turns less than the driver asked, plowing straight on",
          "Turns more than the driver asked",
          "Spins its wheels",
          "Stops suddenly"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Understeer is the front pushing wide in a corner. (b) That is oversteer. (c) Wheel spin is a traction problem. (d) Stopping is a brake matter."
      },
      {
        "module": 6,
        "q": "A car's rear end starts sliding out in a fast corner, so the car is rotating more than the driver asked. Which wheel does stability control brake to correct it?",
        "choices": [
          "Inside rear wheel",
          "Outside front wheel",
          "Both rear wheels",
          "No wheel at all"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Braking the outside front wheel stops the car's rotation. (a) That is the understeer correction. (c) Braking both rears does not stop the rotation. (d) ESC corrects by braking a wheel."
      },
      {
        "module": 6,
        "q": "A driver accelerating on a wet road sees the traction-control light blinking. What does the blinking mean?",
        "choices": [
          "Working actively at that moment",
          "Broken",
          "Switched off",
          "Out of fluid"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Flashing means active intervention. (b) A fault gives a steady light. (c) Switched off also gives a steady light. (d) Traction control has no fluid of its own."
      },
      {
        "module": 6,
        "q": "Three warning lights — ABS, traction control, and stability control — all come on at the same time. What single shared part can cause all three?",
        "choices": [
          "Wheel-speed sensor",
          "Spark plug",
          "Air filter",
          "Wiper blade"
        ],
        "answer": 0,
        "explanation": "Correct: (a). All three systems share the wheel-speed sensors. (b) A spark plug is an engine part. (c) An air filter affects the engine. (d) A wiper blade is unrelated."
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
        "q": "A customer says the brake pedal went soft right after a brake hose was replaced. What is the most likely cause?",
        "choices": [
          "Worn pads",
          "Air in the lines from opening the system",
          "A failed booster",
          "A flat tire"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Opening the system let air in, and air compresses. (a) Worn pads make the pedal low, not suddenly spongy. (c) A failed booster makes the pedal hard. (d) A flat tire does not affect the pedal."
      },
      {
        "module": 1,
        "q": "The power booster multiplies the driver's foot force and sits between the:",
        "choices": [
          "Pedal and the master cylinder",
          "Rotor and the pad",
          "Tire and the road",
          "Battery and the starter"
        ],
        "answer": 0,
        "explanation": "Correct: (a). The booster adds force before the master cylinder. (b) The rotor and pad are at the wheel. (c) The tire meets the road directly. (d) The battery and starter are an electrical pair."
      },
      {
        "module": 1,
        "q": "After a caliper is replaced, a technician opens the bleeder screws and lets fluid push the trapped air out. What is this procedure called?",
        "choices": [
          "Bleeding",
          "Balancing",
          "Aligning",
          "Charging"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Bleeding lets fluid push the air out through a bleeder screw. (b) Balancing is a wheel service. (c) Aligning sets wheel angles. (d) Charging is for the battery."
      },
      {
        "module": 2,
        "q": "A performance car has calipers that are bolted solid to the bracket instead of sliding on pins. How does that caliper design squeeze the rotor?",
        "choices": [
          "Slides on guide pins",
          "Is bolted solid and has pistons on both sides",
          "Has no pistons",
          "Is only used on the rear"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Fixed calipers squeeze from both sides without sliding. (a) That is a floating caliper. (c) Fixed calipers have pistons on both sides. (d) Fixed calipers are used on front or rear."
      },
      {
        "module": 2,
        "q": "A pulsing brake pedal when braking on a dry road most likely comes from:",
        "choices": [
          "Thickness variation in a rotor",
          "A low battery",
          "A dirty air filter",
          "A weak spring"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Thick and thin spots push the piston in and out as the rotor turns. (b) A battery does not pulse the pedal. (c) An air filter affects the engine. (d) A spring is a suspension part."
      },
      {
        "module": 2,
        "q": "A technician has unbolted a caliper to change the pads. What must be done with the caliper while the pads are out?",
        "choices": [
          "Hung by its brake hose",
          "Supported on a hook or rest, never left hanging by the hose",
          "Dropped on the ground",
          "Left on the rotor"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The hose is not made to hold the caliper's weight. (a) Hanging it by the hose damages the hose. (c) Dropping it damages the caliper. (d) Leaving it on the rotor is in the way of the pad change."
      },
      {
        "module": 3,
        "q": "When the driver releases the brake pedal on a drum-brake car, what brings the shoes back off the drum?",
        "choices": [
          "Push the shoes against the drum",
          "Pull the shoes back off the drum when the brake is released",
          "Hold the drum on",
          "Pump the fluid"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Return springs pull the shoes back when pressure is released. (a) The wheel cylinder pushes the shoes out. (c) The drum is held by the wheel and lug nuts. (d) Springs do not pump fluid."
      },
      {
        "module": 3,
        "q": "As drum-brake shoes wear thinner, the gap to the drum grows. How does the self-adjuster deal with that growing gap?",
        "choices": [
          "Clicking outward a little each time the brakes are applied",
          "Adding fluid",
          "Tightening the parking brake cable",
          "Heating the drum"
        ],
        "answer": 0,
        "explanation": "Correct: (a). The star-wheel adjuster clicks out to close the growing gap. (b) Fluid does not adjust shoe position. (c) The parking brake cable is a separate system. (d) Heat does not adjust the shoes."
      },
      {
        "module": 3,
        "q": "Brake dust should never be blown out with compressed air because it is:",
        "choices": [
          "Harmful to breathe",
          "Flammable",
          "Magnetic",
          "Radioactive"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Brake dust is harmful to breathe, so it is cleaned properly. (b) It is not notably flammable. (c) It is not magnetic. (d) It is not radioactive."
      },
      {
        "module": 4,
        "q": "A master cylinder is built with two pistons, one behind the other. What does that layout let it supply?",
        "choices": [
          "Two separate hydraulic circuits",
          "Two pedals",
          "Two steering wheels",
          "Two batteries"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Each piston feeds its own circuit, each serving two wheels. (b) There is one pedal. (c) There is one steering wheel. (d) The master cylinder has nothing to do with batteries."
      },
      {
        "module": 4,
        "q": "A new master cylinder arrives full of air. Why is it bled on the bench before it is bolted onto the car?",
        "choices": [
          "Remove the air trapped inside it",
          "Fill it with oil",
          "Test the battery",
          "Paint it"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Air in the cylinder would be pushed into the lines and make the pedal soft. (b) Oil would ruin the seals. (c) The battery is unrelated. (d) Painting is cosmetic."
      },
      {
        "module": 4,
        "q": "A brake line springs a leak and one hydraulic circuit loses pressure. What will the driver notice?",
        "choices": [
          "A longer pedal, a pull to the working side, and a warning light",
          "No change at all",
          "The steering wheel locking",
          "The engine stopping"
        ],
        "answer": 0,
        "explanation": "Correct: (a). One circuit's two wheels still brake, so the car pulls toward them and the pedal travels further. (b) Losing half the brakes is always noticeable. (c) Steering is unaffected. (d) The engine is unaffected."
      },
      {
        "module": 5,
        "q": "In a panic stop without ABS, the front wheels lock and the car keeps going straight despite the driver turning the wheel. Why can the locked wheels not steer?",
        "choices": [
          "It is sliding, not rolling",
          "The steering wheel locks",
          "The engine stops",
          "The tires are flat"
        ],
        "answer": 0,
        "explanation": "Correct: (a). A sliding tire has no directional grip. (b) The steering wheel does not lock. (c) The engine keeps running. (d) The tires are not flat."
      },
      {
        "module": 5,
        "q": "How does the ABS computer know that one wheel is about to lock up while the others are still rolling?",
        "choices": [
          "Comparing the wheel speeds with each other",
          "Measuring the fuel level",
          "Listening to the engine",
          "Checking the tire pressure"
        ],
        "answer": 0,
        "explanation": "Correct: (a). A wheel slowing far faster than the others is about to lock. (b) Fuel level is irrelevant. (c) The module reads sensors, not sound. (d) Tire pressure is a TPMS matter."
      },
      {
        "module": 5,
        "q": "A scan tool reports an ABS code, and the technician finds the cause at the wheel rather than in the modulator. What part is the usual culprit?",
        "choices": [
          "Wheel-speed sensor or damaged wiring to it",
          "Spark plug",
          "Air filter",
          "Wiper blade"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Wheel-speed sensors live in a harsh place and their wiring is easily damaged. (b) A spark plug is an engine part. (c) An air filter affects the engine. (d) A wiper blade is unrelated."
      },
      {
        "module": 6,
        "q": "A car is plowing straight on in a corner, turning less than the driver asked. Which wheel does stability control brake to help it turn in?",
        "choices": [
          "Inside rear wheel",
          "Outside front wheel",
          "Inside front wheel",
          "Outside rear wheel"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Braking the inside rear wheel helps rotate the car into the turn. (b) That is the oversteer correction. (c) and (d) are not the understeer correction."
      },
      {
        "module": 6,
        "q": "In a fast corner the rear of the car starts to slide outward and the car rotates more than the driver intended. What is this called?",
        "choices": [
          "Turns less than asked",
          "Turns more than asked, with the rear sliding out",
          "Will not start",
          "Pulls to one side when braking"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Oversteer is the rear sliding out so the car rotates too much. (a) That is understeer. (c) Starting is an engine matter. (d) A brake pull is a brake fault."
      },
      {
        "module": 6,
        "q": "What set of sensors lets stability control tell where the driver is pointing the car versus where the car is actually going?",
        "choices": [
          "Steering angle sensor, yaw sensor, and lateral acceleration sensor",
          "Fuel gauge",
          "Oil pressure sensor",
          "Radio"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Those three sensors tell the system where the driver is pointing and where the car is actually going. (b) Fuel level is irrelevant. (c) Oil pressure is irrelevant. (d) The radio is irrelevant."
      },
      {
        "module": 7,
        "q": "A driver pulls the hand lever and the rear brakes apply, with no hydraulic fluid involved. What carries the pull from the lever to the rear brakes?",
        "choices": [
          "Steel cable from a lever or pedal to the rear brakes",
          "Hydraulic line",
          "Electric wire only",
          "Brake fluid hose"
        ],
        "answer": 0,
        "explanation": "Correct: (a). A lever pulls a cable that applies the rear brakes. (b) A hydraulic line is the service brake. (c) A wire alone is the EPB, not the mechanical system. (d) A fluid hose is the service brake."
      },
      {
        "module": 7,
        "q": "A technician is servicing the rear brakes on a car with an electronic parking brake. What step must come before the caliper piston is pushed back?",
        "choices": [
          "Put the EPB into service mode",
          "Remove the battery",
          "Drain the fuel tank",
          "Disconnect the steering"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Service mode retracts the motors so the piston can move. (b) The battery is not removed. (c) Fuel is unrelated. (d) Steering is unrelated."
      },
      {
        "module": 7,
        "q": "A rear disc-brake rotor has a small parking brake hidden in its center. What is that hidden brake called and where does it sit?",
        "choices": [
          "A small drum brake inside the center of a rear rotor, used only as the parking brake",
          "A hat worn while driving",
          "A brake that only works in reverse",
          "A drum brake on the front wheels"
        ],
        "answer": 0,
        "explanation": "Correct: (a). The small drum and shoes sit inside the rotor's hat and work only as a parking brake. (b) It is not clothing. (c) It works when parked, not only in reverse. (d) It is a rear design."
      },
      {
        "module": 8,
        "q": "A sedan drives straight on the highway, but every time the driver brakes it steers sharply to one side. What kind of fault does that timing point to?",
        "choices": [
          "Brake fault on one side",
          "Tire pressure problem only",
          "Radio fault",
          "Weak battery"
        ],
        "answer": 0,
        "explanation": "Correct: (a). A pull that appears only under braking is a brake fault. (b) A tire problem pulls all the time. (c) A radio does not steer the car. (d) A battery does not cause a brake pull."
      },
      {
        "module": 8,
        "q": "A driver reports a harsh grinding sound from the front brakes that gets worse when braking. What does that sound indicate?",
        "choices": [
          "Metal on metal — the pads are worn to the backing or debris is trapped",
          "The pads are new",
          "The brakes are working perfectly",
          "The tires are new"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Grinding is steel on steel and destroys the rotor. (b) New pads do not grind. (c) Working brakes do not grind. (d) New tires make no brake noise."
      },
      {
        "module": 8,
        "q": "A front wheel stays hot after a drive and its new pads are already wearing, even though the caliper slides freely. What part is the likely cause of the drag?",
        "choices": [
          "Collapsed brake hose that lets fluid in but not out",
          "New rotor",
          "Full reservoir",
          "Clean caliper"
        ],
        "answer": 0,
        "explanation": "Correct: (a). The hose traps pressure and keeps the caliper applied. (b) A new rotor does not trap pressure. (c) A full reservoir is normal. (d) A clean caliper slides freely."
      },
      {
        "module": 9,
        "q": "A technician measures a rotor and finds it thinner than the minimum stamped on it. What is the correct action?",
        "choices": [
          "Replaced",
          "Machined thinner",
          "Painted",
          "Reused as it is"
        ],
        "answer": 0,
        "explanation": "Correct: (a). A thin rotor cannot take braking heat safely. (b) Machining makes it thinner still. (c) Painting does not restore thickness. (d) Reusing it is unsafe."
      },
      {
        "module": 9,
        "q": "A pad change is finished and the car is still parked. Why must the technician pump the brake pedal before the car is driven?",
        "choices": [
          "The pistons were pushed back and have not yet moved out to the new pads",
          "The fluid is low",
          "The tires are flat",
          "The battery is dead"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Until pumped, the first stop sends the pedal to the floor. (b) Low fluid is a different fault. (c) Flat tires do not affect the pedal. (d) A dead battery does not affect the pedal."
      },
      {
        "module": 9,
        "q": "A new rotor is bolted onto a hub face that was never cleaned of rust. What problem will that cause?",
        "choices": [
          "Sit crooked and cause a pulsing pedal",
          "Work perfectly",
          "Last longer",
          "Stop the car faster"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Rust under the rotor makes it run out of true. (b) A dirty hub always causes a problem. (c) It will wear unevenly. (d) It will not stop the car faster."
      },
      {
        "module": 10,
        "q": "A bottle of brake fluid left open on a shelf slowly changes over time. What property of brake fluid causes that change?",
        "choices": [
          "Absorbs water from the air",
          "Repels water",
          "Never changes",
          "Is made of water"
        ],
        "answer": 0,
        "explanation": "Correct: (a). It slowly takes in water, which lowers its boiling point. (b) It does the opposite. (c) It changes as it absorbs water. (d) It is glycol-based, not water."
      },
      {
        "module": 10,
        "q": "A shop has a bottle of DOT 5 fluid and a car whose cap specifies DOT 3. Why must the DOT 5 not be used in that car?",
        "choices": [
          "Silicone-based, while the others are glycol-based",
          "A higher grade of the same fluid",
          "Water-based",
          "The same as DOT 5.1"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Silicone and glycol fluids do not mix and DOT 5 can damage glycol-system seals. (b) It is a different chemistry, not a higher grade. (c) It is silicone-based. (d) DOT 5.1 is glycol-based, DOT 5 is silicone."
      },
      {
        "module": 10,
        "q": "While bleeding brakes, a helper releases the pedal while the bleeder screw is still open. What goes wrong?",
        "choices": [
          "Air is sucked back in through the screw",
          "Fluid leaks everywhere",
          "The pedal breaks",
          "The tire goes flat"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Releasing the pedal sucks fluid back, and an open screw sucks air with it. (b) A closed system does not leak everywhere. (c) The pedal does not break. (d) Tires are unrelated."
      },
      {
        "module": 10,
        "q": "A technician is bleeding a full brake system and keeps checking one thing above all else. What is that one governing rule?",
        "choices": [
          "Never let the reservoir run dry",
          "Always use DOT 5",
          "Bleed with the engine running",
          "Open all bleeders at once"
        ],
        "answer": 0,
        "explanation": "Correct: (a). A dry reservoir sucks air into the master cylinder. (b) DOT 5 is the wrong fluid for most cars. (c) The engine does not need to run. (d) Opening all bleeders at once lets air in everywhere."
      },
      {
        "module": 11,
        "q": "In a brake-by-wire car, what does the brake pedal actually do when the driver presses it?",
        "choices": [
          "Sends an electrical signal to a module that commands actuators at the wheels",
          "Pushes fluid directly to the brakes",
          "Pulls a cable",
          "Does nothing"
        ],
        "answer": 0,
        "explanation": "Correct: (a). The signal, not fluid, carries the driver's command. (b) That is a hydraulic brake. (c) A cable is a parking brake. (d) The pedal always does something."
      },
      {
        "module": 11,
        "q": "When a hybrid driver lifts off the accelerator, the car slows down and the battery charges. What is making that happen?",
        "choices": [
          "Turning the drive motor into a generator that charges the battery",
          "Pressing the pads harder",
          "Locking the wheels",
          "Turning off the engine"
        ],
        "answer": 0,
        "explanation": "Correct: (a). The motor resists the wheels and makes electricity. (b) Pads are the friction brakes, not regeneration. (c) Locking the wheels is what ABS prevents. (d) The engine is not turned off to brake."
      },
      {
        "module": 11,
        "q": "A brake-by-wire car loses its electronics while driving. What keeps the driver able to stop?",
        "choices": [
          "Returns the car to normal hydraulic braking if the electronics fail",
          "Turns the car off",
          "Locks the wheels",
          "Disables the steering"
        ],
        "answer": 0,
        "explanation": "Correct: (a). The driver must still be able to stop if the electronics fail. (b) The car is not turned off. (c) The wheels are not locked. (d) Steering is unaffected."
      },
      {
        "module": 12,
        "q": "A sedan pulls to the right under braking, the right front wheel is hot to the touch, and the pads on that side were just replaced. What is the most likely fault?",
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
        "module": 12,
        "q": "After a wheel cylinder is replaced, the brake pedal feels soft and travels much further than before. What is the most likely cause?",
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
        "module": 12,
        "q": "A brake hose has been replaced and the system was opened. What sequence of finishing steps should the technician follow?",
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
        "module": 12,
        "q": "A customer reports that her brakes make a noise when stopping. What is the best first step in diagnosing it?",
        "choices": [
          "Road test that reproduces the complaint",
          "Parts order",
          "Wheel alignment",
          "Tire rotation"
        ],
        "answer": 0,
        "explanation": "Correct: (a). The road test confirms when, where, and what the complaint is. (b) Ordering parts before diagnosing is guessing. (c) Alignment is a later step. (d) Rotation is a service, not a diagnosis."
      },
      {
        "module": 12,
        "q": "An EPB rear caliper piston refuses to move back with a normal piston tool. What setting must the system be put into first?",
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
        "module": 12,
        "q": "A driver reports a high-pitched squeal when braking lightly, and the pads are thin. What is the most likely cause?",
        "choices": [
          "The pad wear indicator touching the rotor",
          "A failed booster",
          "Air in the lines",
          "A flat tire"
        ],
        "answer": 0,
        "explanation": "Correct: (a). The wear indicator tab touches the rotor when the friction material is thin. (b) A failed booster makes the pedal hard, not squeal. (c) Air makes the pedal soft, not squeal. (d) A flat tire does not squeal when braking."
      }
    ]
  }
};
