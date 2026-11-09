// ase-a1 — Midterm and Final exams.
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
        "q": "A customer asks what a car engine does. The best plain-words answer is:",
        "choices": [
          "It stores fuel for the car",
          "It turns the energy stored in fuel into spinning motion",
          "It cools the driver",
          "It charges the battery"
        ],
        "answer": 1,
        "explanation": "Correct: (b). An engine releases fuel's stored energy, one small burn at a time, and turns it into rotation. (a) The fuel tank stores fuel. (c) The engine heats the car, it does not cool the driver. (d) The alternator charges the battery."
      },
      {
        "module": 1,
        "q": "In the four-stroke cycle, the intake valve is open during:",
        "choices": [
          "The compression stroke",
          "The intake stroke, while the piston moves down",
          "The power stroke",
          "The exhaust stroke"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The intake valve opens on the intake stroke as the piston moves down, drawing the mixture in. (a) Both valves are closed on compression. (c) Both valves are closed on the power stroke. (d) The exhaust valve is open on the exhaust stroke."
      },
      {
        "module": 1,
        "q": "The part that turns the pistons' up-and-down motion into rotation is the:",
        "choices": [
          "Camshaft",
          "Crankshaft",
          "Flywheel",
          "Timing belt"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The crankshaft converts straight-line piston motion into spinning motion. (a) The camshaft opens the valves. (c) The flywheel smooths rotation. (d) The timing belt drives the camshaft."
      },
      {
        "module": 1,
        "q": "Which stroke is the only one that makes power?",
        "choices": [
          "Intake",
          "Compression",
          "Power",
          "Exhaust"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Only the power stroke has the burning mixture shoving the piston down. (a) Intake draws the mixture in. (b) Compression squeezes it. (d) Exhaust pushes burned gases out."
      },
      {
        "module": 2,
        "q": "A compression test on a four-cylinder engine gives 151, 149, 150, and 118. What is the right conclusion?",
        "choices": [
          "The engine is healthy — all readings are close",
          "Cylinder 4 is the suspect — it reads far below the other three",
          "The battery is weak",
          "The oil is low"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Cylinder 4 reads 118 while the others read 149–151, a large gap that means it is not sealing or filling properly. (a) 118 is not close to 150. (c) A weak battery would lower all readings, not one. (d) Oil level does not cause one cylinder to read low."
      },
      {
        "module": 2,
        "q": "A leakdown test shows air bubbling in the coolant reservoir. The failed part is the:",
        "choices": [
          "Intake valve",
          "Exhaust valve",
          "Head gasket",
          "Piston ring"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Air escaping into the cooling system means the head gasket has failed between a cylinder and a coolant passage. (a) An intake-valve leak hisses from the throttle body. (b) An exhaust-valve leak hisses from the tailpipe. (d) Worn rings hiss from the oil filler cap."
      },
      {
        "module": 2,
        "q": "Why is the throttle held open during a compression test?",
        "choices": [
          "To stop the engine from starting",
          "So air can enter the cylinders freely and readings are not artificially low",
          "To warm the engine",
          "To protect the gauge"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A closed throttle starves the cylinders of air, so every reading comes out low. (a) Disabling fuel and ignition stops starting. (c) The throttle does not warm the engine. (d) The gauge is not protected by the throttle."
      },
      {
        "module": 2,
        "q": "A vacuum gauge needle flickers rapidly at idle. The most likely cause is:",
        "choices": [
          "A valve that is not sealing",
          "A full fuel tank",
          "A new air filter",
          "A charged battery"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Each leak past a valve makes the needle jump. (b) Fuel level does not affect manifold vacuum. (c) A new filter improves airflow; it does not flicker the needle. (d) Battery charge has nothing to do with vacuum."
      },
      {
        "module": 2,
        "q": "The main advantage of a leakdown test over a compression test is that leakdown:",
        "choices": [
          "Is faster",
          "Tells you why the cylinder is weak and which part failed",
          "Needs no compressed air",
          "Works on a running engine"
        ],
        "answer": 1,
        "explanation": "Correct: (b). By listening to where air escapes, leakdown names the failed part. (a) Leakdown is slower. (c) Leakdown needs compressed air. (d) Leakdown is done with the engine off."
      },
      {
        "module": 3,
        "q": "The head gasket's job is to:",
        "choices": [
          "Open the valves",
          "Seal combustion pressure in and keep coolant and oil in their own passages",
          "Pump oil to the camshaft",
          "Drive the timing chain"
        ],
        "answer": 1,
        "explanation": "Correct: (b). One thin seal holds combustion pressure in and keeps coolant and oil separated. (a) The camshaft opens the valves. (c) The oil pump moves oil. (d) The crankshaft drives the timing chain."
      },
      {
        "module": 3,
        "q": "In a pushrod (OHV) engine, the camshaft:",
        "choices": [
          "Sits in the head and acts directly on the valves",
          "Sits in the block and pushes rods up to rocker arms that open the valves",
          "Sits in the oil pan",
          "Is driven by the alternator"
        ],
        "answer": 1,
        "explanation": "Correct: (b). OHV puts the cam in the block, using pushrods and rockers to reach the valves. (a) That is an overhead-cam layout. (c) The oil pan holds oil. (d) The alternator is belt-driven; it drives nothing."
      },
      {
        "module": 3,
        "q": "In a variable valve timing system, what moves the camshaft to change when the valves open and close?",
        "choices": [
          "Changing the spark plug gap",
          "Shifting the camshaft's position with oil pressure while the engine runs",
          "Opening the throttle wider",
          "Adding more fuel"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Oil pressure moves the cam phaser, shifting cam position to suit low or high speed. (a) Spark plug gap affects ignition. (c) The throttle controls air. (d) Fuel quantity does not move the camshaft."
      },
      {
        "module": 3,
        "q": "A VVT system rattles on startup and the oil is dirty and low. The first thing to check is the:",
        "choices": [
          "Camshaft",
          "Oil level and condition, because VVT moves with oil pressure",
          "Timing chain",
          "Spark plugs"
        ],
        "answer": 1,
        "explanation": "Correct: (b). VVT needs clean oil at the right level; dirty or low oil starves the cam phaser. (a) The camshaft is rarely the fault when the oil is bad. (c) The chain is a later check. (d) Spark plugs have nothing to do with VVT rattle."
      },
      {
        "module": 4,
        "q": "Worn piston rings cause:",
        "choices": [
          "Blow-by and blue smoke, as pressure escapes and oil gets into the combustion chamber",
          "White smoke from the radiator",
          "A louder horn",
          "Better fuel economy"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Worn rings let pressure past into the crankcase and oil into the chamber, where it burns blue. (b) White smoke is coolant burning. (c) The horn is unrelated. (d) Worn rings lose power and waste fuel."
      },
      {
        "module": 4,
        "q": "A crankshaft spins inside soft metal bearing shells for the life of the engine without wearing them out. What keeps the spinning shaft from touching the shells?",
        "choices": [
          "They are made of very hard steel",
          "A film of pressurized oil keeps the shaft from touching the shell",
          "They are replaced at every oil change",
          "They never get hot"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The oil film means no metal-to-metal contact while it holds. (a) Bearing shells are soft metal. (c) Bearings are not replaced at oil changes. (d) Bearings run hot; the oil carries the heat away."
      },
      {
        "module": 4,
        "q": "A customer reports a deep knocking sound from the lower part of the engine that gets faster as the engine speeds up. What is the most likely cause?",
        "choices": [
          "A valve tick",
          "A rod knock from a worn rod bearing",
          "A loose heat shield",
          "A slipping drive belt"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A worn rod bearing lets the rod move on the crank pin, knocking deep and following speed. (a) A valve tick comes from the top and is lighter. (c) A heat shield rattles tinny, usually at certain speeds. (d) A slipping belt squeals, it does not knock."
      },
      {
        "module": 4,
        "q": "A long block differs from a short block because a long block also includes the:",
        "choices": [
          "Oil pan only",
          "Cylinder head and valve train",
          "Transmission",
          "Radiator"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A long block is the short block plus the head and valve train. (a) The oil pan is an accessory. (c) The transmission is a separate unit. (d) The radiator is part of the cooling system."
      },
      {
        "module": 5,
        "q": "Oil is drawn from the pan, pushed through the filter, and then goes to the:",
        "choices": [
          "Radiator",
          "Bearings and valve train through passages in the block and head",
          "Fuel injectors",
          "Exhaust manifold"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Filtered oil travels through passages to the main and rod bearings, camshaft bearings, and valve train. (a) The radiator carries coolant. (c) Injectors get fuel. (d) The exhaust manifold carries burned gases."
      },
      {
        "module": 5,
        "q": "The oil pressure warning light comes on while driving. The first action is to:",
        "choices": [
          "Add a quart and keep driving",
          "Stop the engine as soon as it is safe to pull over",
          "Rev the engine to build pressure",
          "Ignore it until the next oil change"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Running without oil pressure destroys bearings in minutes; stop first, then diagnose. (a) Adding oil without knowing the cause risks driving on a failed pump. (c) Revving a starved engine makes the damage worse. (d) Ignoring it guarantees a ruined engine."
      },
      {
        "module": 5,
        "q": "Low oil pressure at idle that rises with engine speed, with correct oil level and fresh oil, most often means:",
        "choices": [
          "The oil is too thick",
          "Worn bearings with larger clearances",
          "A clogged air filter",
          "A weak battery"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Worn bearings let oil escape faster than the pump can supply it at low speed. (a) Thick oil raises pressure. (c) The air filter affects breathing. (d) The battery affects starting."
      },
      {
        "module": 5,
        "q": "The dipstick shows oil that looks like a milkshake. What has mixed into the oil?",
        "choices": [
          "The oil is brand new",
          "Coolant is mixing into the oil",
          "The oil is too thick",
          "The engine is healthy"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A milkshake look means coolant has mixed with the oil, often through a failed head gasket. (a) New oil is clear amber. (c) Thickness does not make oil milky. (d) Milky oil is a serious fault."
      },
      {
        "module": 6,
        "q": "The thermostat's job is to:",
        "choices": [
          "Pump the coolant",
          "Stay closed when the engine is cold and open at operating temperature so the engine warms up fast and then holds its temperature",
          "Filter the coolant",
          "Drive the cooling fan"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The thermostat controls warm-up and operating temperature by opening and closing. (a) The water pump moves coolant. (c) The thermostat has no filter. (d) The fan is switched by a sensor or the computer."
      },
      {
        "module": 6,
        "q": "A car overheats in traffic. The upper radiator hose is hot, but the lower hose stays cold to the touch. What is the most likely problem?",
        "choices": [
          "A failed cooling fan",
          "No coolant circulation — thermostat stuck closed or pump failure",
          "A leaking heater core",
          "A loose oil cap"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A cold lower hose means coolant is not flowing through the radiator at all. (a) A failed fan still lets coolant circulate; both hoses would be hot. (c) A heater-core leak loses coolant but does not stop circulation. (d) The oil cap has nothing to do with coolant flow."
      },
      {
        "module": 6,
        "q": "The radiator cap holds the cooling system under pressure in order to:",
        "choices": [
          "Filter the coolant",
          "Raise the coolant's boiling point so it can carry more heat without boiling",
          "Pump the coolant faster",
          "Measure the temperature"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Pressure raises the boiling point. (a) The cap has no filter. (c) The water pump moves coolant. (d) The temperature sensor measures temperature."
      },
      {
        "module": 6,
        "q": "A customer has no heat from the vents but the temperature gauge reads normal. The most likely causes are:",
        "choices": [
          "A stuck-open thermostat",
          "Low coolant or trapped air blocking flow to the heater core",
          "A failed water pump",
          "A broken radiator"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The engine reaches temperature, so the thermostat works; the heater core is simply not getting hot coolant. (a) A stuck-open thermostat would show a low gauge. (c) A failed pump would overheat the engine. (d) A broken radiator would leak or overheat the engine."
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
        "q": "A neighbor asks what the four strokes are. The correct order is:",
        "choices": [
          "Power, exhaust, intake, compression",
          "Intake, compression, power, exhaust",
          "Compression, intake, exhaust, power",
          "Exhaust, power, compression, intake"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Intake, compression, power, exhaust — the only order that works. (a), (c), and (d) all put strokes out of order."
      },
      {
        "module": 1,
        "q": "Between power strokes, the crankshaft would slow down and speed up in jerks. Which part's weight carries the crankshaft smoothly through the strokes that make no power?",
        "choices": [
          "Start the engine",
          "Smooth out rotation between power strokes",
          "Pump coolant",
          "Filter the oil"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Its weight carries the crankshaft through the strokes that make no power. (a) The starter motor starts the engine. (c) The water pump moves coolant. (d) The oil filter cleans the oil."
      },
      {
        "module": 1,
        "q": "A technician is tightening head bolts and wants each one exactly as tight as the manufacturer specifies. Which tool measures how tight a bolt is?",
        "choices": [
          "Measure how tight a bolt is, so it is tightened to the right tightness",
          "Loosen rusted bolts faster",
          "Measure engine power",
          "Cut a bolt to length"
        ],
        "answer": 0,
        "explanation": "Correct: (a). A torque wrench measures tightness so fasteners are neither loose nor over-tightened. (b) A breaker bar loosens stuck bolts. (c) Power is measured on a dynamometer. (d) A torque wrench does not cut."
      },
      {
        "module": 2,
        "q": "A leakdown test shows air hissing from the throttle body. The failed part is the:",
        "choices": [
          "Exhaust valve",
          "Intake valve",
          "Head gasket",
          "Piston ring"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The throttle body is on the intake side, so air escaping there came past the intake valve. (a) An exhaust-valve leak hisses from the tailpipe. (c) A head gasket leaks into the coolant. (d) Worn rings hiss from the oil filler."
      },
      {
        "module": 2,
        "q": "On a six-cylinder engine, cylinders 3 and 4 both read low on a compression test while the other four read normally. What is the most likely cause?",
        "choices": [
          "A burned intake valve in one cylinder",
          "A head gasket failure between those two cylinders",
          "A worn ring in the far cylinder",
          "A weak battery"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Neighbors share one gasket; a failure between them lets pressure leak from one to the other. (a) One valve would lower one cylinder. (c) A ring in a far cylinder cannot affect these two. (d) A weak battery lowers all cylinders."
      },
      {
        "module": 2,
        "q": "A compression test done on a cold engine with the throttle closed and a weak battery shows all cylinders low. The right next step is to:",
        "choices": [
          "Condemn the engine as worn out",
          "Warm the engine, hold the throttle open, charge the battery, and re-test",
          "Replace the spark plugs",
          "Add thicker oil"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Cold, closed-throttle, slow-crank testing lowers every reading — the test was wrong, not necessarily the engine. (a) Condemning the engine on a bad test wastes a good engine. (c) Plugs do not affect cranking compression. (d) Thicker oil does not fix a bad test procedure."
      },
      {
        "module": 2,
        "q": "A vacuum gauge needle that stays low after a throttle snap suggests:",
        "choices": [
          "A valve leak",
          "An exhaust restriction",
          "A full fuel tank",
          "A new air filter"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A needle that cannot recover after the snap means the engine cannot push exhaust out. (a) A valve leak makes the needle flicker, not stay low. (c) Fuel level does not affect vacuum. (d) A new filter improves airflow."
      },
      {
        "module": 3,
        "q": "The camshaft lobe pushes a valve open. What pushes it back shut once the lobe has passed?",
        "choices": [
          "Open the valves",
          "Close the valves after the cam lobe passes",
          "Drive the camshaft",
          "Seal the head gasket"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The cam lobe pushes the valve open; the spring snaps it shut. (a) The camshaft opens the valves. (c) The timing chain or belt drives the camshaft. (d) The head gasket seals by being clamped."
      },
      {
        "module": 3,
        "q": "A timing chain slips a tooth while the engine is running. What happens to the relationship between the valves and the pistons?",
        "choices": [
          "The valves open at the wrong time relative to the pistons",
          "The engine gets more fuel",
          "The oil pressure rises",
          "The brakes fail"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Cam and crank fall out of step, so valves open early or late. (b) Fuel delivery is separate from valve timing. (c) Oil pressure is unrelated to the chain. (d) Brakes are a separate system."
      },
      {
        "module": 3,
        "q": "A car has a light ticking sound from the top of the engine that gets faster as the engine speeds up. What is the most likely cause?",
        "choices": [
          "A worn tire",
          "Too much valve clearance or a worn follower",
          "A loose battery cable",
          "A clogged air filter"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Valve lash trouble ticks in time with the camshaft, which follows engine speed. (a) Tire noise follows road speed. (c) A loose cable causes starting or charging trouble. (d) A clogged filter causes poor running, not a tick."
      },
      {
        "module": 4,
        "q": "Combustion gases are found in the crankcase of a worn engine. What is the name for gases leaking past the piston rings into the crankcase?",
        "choices": [
          "Oil leaking from the valve cover",
          "Combustion gases leaking past worn piston rings into the crankcase",
          "Coolant leaking from the radiator",
          "Fuel leaking from an injector"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Blow-by is gas getting past the rings into the crankcase. (a) A valve-cover leak is external oil. (c) A radiator leak is a cooling-system fault. (d) An injector leak is a fuel-system fault."
      },
      {
        "module": 4,
        "q": "A car leaves a trail of blue-tinted smoke when it accelerates. What is burning in the combustion chamber?",
        "choices": [
          "Coolant is burning",
          "Too much fuel is burning",
          "Oil is burning in the combustion chamber",
          "The engine is cold"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Blue smoke is oil burning — usually worn rings or valve seals. (a) Coolant burning makes white, sweet-smelling smoke. (b) Too much fuel makes black smoke. (d) A cold engine can make white vapor, not blue smoke."
      },
      {
        "module": 4,
        "q": "A car blows white smoke that smells sweet, and the coolant level keeps dropping. What is most likely leaking into a cylinder and burning?",
        "choices": [
          "Oil is burning",
          "Coolant is leaking into a cylinder and burning",
          "The fuel mixture is too rich",
          "The air filter is dirty"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Coolant burning smells sweet and makes white smoke; a failed head gasket is the usual path in. (a) Oil burning makes blue smoke. (c) A rich mixture makes black smoke. (d) A dirty filter causes poor running, not white smoke."
      },
      {
        "module": 5,
        "q": "Engine oil lubricates, cools, cleans, seals, and protects. Which of the following is NOT one of oil's jobs?",
        "choices": [
          "Reducing friction",
          "Carrying heat away",
          "Holding dirt in suspension",
          "Igniting the fuel-air mixture"
        ],
        "answer": 3,
        "explanation": "Correct: (d). Oil lubricates, cools, cleans, seals, and protects — it never ignites the mixture; the spark plug does. (a), (b), and (c) are all real oil jobs."
      },
      {
        "module": 5,
        "q": "Thick, tar-like deposits are found under a valve cover. What caused them?",
        "choices": [
          "Oil left in too long or an engine running too cool",
          "Using premium fuel",
          "A new oil filter",
          "Driving too fast"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Old oil breaks down into tar-like deposits, and a cool-running engine never boils off moisture. (b) Fuel grade does not create sludge. (c) A new filter prevents sludge. (d) Speed alone does not create sludge."
      },
      {
        "module": 5,
        "q": "When, in the life of a single drive, does most of an engine's wear happen?",
        "choices": [
          "At highway speed",
          "In the first seconds after a cold start, before oil reaches every part",
          "When the engine is off",
          "At idle with warm oil"
        ],
        "answer": 1,
        "explanation": "Correct: (b). On a cold start the oil has drained to the pan and parts run briefly with little film. (a) At speed the film is fully established. (c) No wear happens with the engine off. (d) Warm idle still has full oil pressure and film."
      },
      {
        "module": 6,
        "q": "A thermostat stuck open causes:",
        "choices": [
          "Overheating",
          "Slow warm-up, poor heater output, and wasted fuel",
          "No oil pressure",
          "A dead battery"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Coolant flows to the radiator from the start, so the engine warms up slowly and may never reach operating temperature. (a) A thermostat stuck closed causes overheating. (c) The thermostat does not affect oil pressure. (d) The thermostat does not affect the battery."
      },
      {
        "module": 6,
        "q": "The heater blows warm air into the cabin. Where does the heat in the heater core come from?",
        "choices": [
          "The exhaust manifold",
          "Hot coolant flowing through it from the engine",
          "An electric heater only",
          "The battery"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The heater core is a small radiator in the same coolant loop. (a) The exhaust manifold is not connected to the heater core. (c) Some cars have electric heaters as a supplement, but the core is coolant-fed. (d) The battery powers the fan, not the heat."
      },
      {
        "module": 6,
        "q": "A customer tops off the coolant every week, but there is never a puddle under the car. What is the best first conclusion?",
        "choices": [
          "The coolant evaporated normally",
          "Coolant is going somewhere — find the leak before topping off and sending it out",
          "The gauge is broken",
          "The radiator is new"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Coolant does not get used up; a low level means a leak somewhere, internal or external. (a) Topping off without finding the leak leaves the fault in place. (c) The gauge does not measure coolant level. (d) A new radiator does not explain a low level."
      },
      {
        "module": 7,
        "q": "A cracked intake hose lets air into the engine after the airflow sensor. What happens to the fuel-air mixture?",
        "choices": [
          "Too rich",
          "Too lean, because air arrives that the computer did not measure",
          "Just right",
          "Too hot to burn"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Extra air with no extra fuel makes a lean mixture that burns poorly. (a) Too rich means too much fuel, the opposite. (c) Unmetered air upsets the measured ratio. (d) The mixture is lean; whether it runs hot is a consequence, not the mixture itself."
      },
      {
        "module": 7,
        "q": "A car idles smoothly and drives fine around town, but loses power badly on the highway. What is the most likely cause?",
        "choices": [
          "A clogged air filter",
          "An exhaust restriction",
          "A weak battery",
          "Low tire pressure"
        ],
        "answer": 1,
        "explanation": "Correct: (b). At low speed the engine can push its small exhaust volume out; at high speed the restriction chokes it. (a) A clogged filter hurts power at all speeds. (c) The battery affects starting. (d) Tire pressure affects handling and economy, not engine power."
      },
      {
        "module": 7,
        "q": "At the end of the exhaust stroke, both the intake and exhaust valves are open for a brief moment. What is that period called?",
        "choices": [
          "Both valves closed at the same time",
          "Both valves briefly open at the same time, helping sweep out burned gases",
          "The valves hitting the pistons",
          "The intake valve staying open all the time"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Overlap lets outgoing exhaust help draw in fresh mixture and sweep the cylinder clean. (a) Both valves closed is compression and power. (c) Valves hitting pistons is a timing failure. (d) An intake valve never stays open all the time."
      },
      {
        "module": 8,
        "q": "What spins the turbine wheel of a turbocharger?",
        "choices": [
          "A belt from the crankshaft",
          "Hot exhaust gas spinning a turbine",
          "The battery",
          "The water pump"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Exhaust gas spins the turbine, which drives the compressor. (a) A belt drives a supercharger. (c) The battery powers the starter and accessories. (d) The water pump circulates coolant."
      },
      {
        "module": 8,
        "q": "A turbocharged car feels slow to respond when pulling away from a stop, then surges forward once it is moving. What causes that delay?",
        "choices": [
          "The turbo is too small",
          "At low engine speed there is little exhaust gas to spin the turbine",
          "The intercooler is cold",
          "The engine is too big"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Lag is the wait for exhaust gas to build up enough to spin the turbo. (a) Turbo size affects lag, but the cause is low exhaust flow at low speed. (c) A cold intercooler does not cause lag. (d) Engine size is not the cause of lag."
      },
      {
        "module": 8,
        "q": "A turbocharged car loses power and makes a hissing sound when the driver accelerates hard. What is the most likely fault?",
        "choices": [
          "A boost leak in a hose or clamp",
          "A worn tire",
          "A dead battery",
          "A clogged fuel filter only"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Pressurized air escaping through a split hose hisses and the engine loses boost. (b) A tire does not hiss under engine load. (c) A dead battery affects starting. (d) A clogged fuel filter can cause power loss but does not hiss."
      },
      {
        "module": 9,
        "q": "A technician is about to pull an engine out of a car. What is the very first step, before any bolt is turned?",
        "choices": [
          "Unbolt the engine mounts",
          "Make the car safe: disconnect the battery and support the car",
          "Attach the hoist",
          "Drain the transmission"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Safety comes first — battery disconnected, car supported — before any bolt turns. (a) Mounts come off only after everything is disconnected. (c) The hoist is attached after disconnection. (d) The transmission usually stays in the car."
      },
      {
        "module": 9,
        "q": "Halfway through lifting an engine out, the engine stops rising and the hoist strains. What is the most likely cause?",
        "choices": [
          "The hoist is too weak",
          "Something is still connected — a forgotten strap, hose, or wire",
          "The engine is too heavy",
          "The chains are too long"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A forgotten ground strap or hose will stop the lift; forcing it breaks parts. (a) A hoist rated for the engine would not strain on a free engine. (c) The engine's weight does not change mid-lift. (d) Chain length does not stop a lift."
      },
      {
        "module": 9,
        "q": "After a replacement engine is installed, the technician cranks it for several seconds without letting it start. Why?",
        "choices": [
          "Test the starter",
          "Build oil pressure so the bearings are protected on the first start",
          "Charge the battery",
          "Warm the engine"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Building oil pressure before the first start means the bearings have a film from the first turn. (a) Testing the starter is a side effect. (c) Cranking drains the battery. (d) The engine does not warm up while cranking."
      },
      {
        "module": 10,
        "q": "A shop must decide between a rebuild and replacing single parts on a high-mileage engine with worn rings, worn bearings, and a tired valve train. When is a rebuild the right repair?",
        "choices": [
          "One spark plug has failed",
          "Wear is spread across many parts but the block and crankshaft are sound",
          "The battery is dead",
          "A tire is flat"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A rebuild renews a generally worn engine; it is not a fix for one failed part. (a) A spark plug is a simple replacement. (c) A battery is an electrical part. (d) A tire is not part of the engine."
      },
      {
        "module": 10,
        "q": "After machining, a cylinder wall is finished with a fine abrasive so the new rings can bed in. What does that finishing leave on the wall?",
        "choices": [
          "A mirror-smooth finish",
          "A crosshatch pattern that holds oil so new rings can bed in",
          "A larger piston",
          "A new valve seat"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The crosshatch grooves hold oil on the wall for the rings. (a) A mirror finish would not hold oil. (c) Honing does not make pistons. (d) Valve seats are machined in a valve job."
      },
      {
        "module": 10,
        "q": "A machine shop grinds a worn crankshaft journal slightly smaller to make it round and smooth again. Which bearings must be fitted to match it?",
        "choices": [
          "Standard bearings",
          "Thicker, undersize bearings to match the new journal size",
          "No bearings at all",
          "Bearings from a different engine"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The journal is smaller, so the bearing must be thicker to keep the clearance correct. (a) Standard bearings would leave too much clearance. (c) An engine cannot run without bearings. (d) Bearings must match this crankshaft's new size."
      },
      {
        "module": 10,
        "q": "A customer picks up their car with a freshly rebuilt engine. How should they drive it for the first miles?",
        "choices": [
          "Hard from the first start",
          "Gently with varied speed, no hard acceleration, and an early oil change",
          "At one steady highway speed for hours",
          "Only at idle for the first week"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Gentle, varied driving lets the rings bed in; an early oil change removes bedding-in metal. (a) Hard driving prevents proper bedding. (c) One steady speed does not vary the load. (d) Long idling does not bed rings in."
      },
      {
        "module": 11,
        "q": "A technician tightening head bolts works from the center outward, tightening each bolt a little at a time in several passes. Why is that order and method used?",
        "choices": [
          "It is faster",
          "It squeezes the gasket down evenly so it seals across the whole surface",
          "It makes the bolts last longer",
          "The torque wrench requires it"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Even clamping is what makes a gasket seal; tightening one bolt fully first leaves the other side loose. (a) Sequence tightening is slower. (c) Bolt life is not the reason. (d) The wrench measures torque; the sequence is about the gasket."
      },
      {
        "module": 11,
        "q": "A service manual says the head bolts are torque-to-yield. What must be done with them after they are removed?",
        "choices": [
          "Reused to save money",
          "Replaced, never reused, because they are stretched once to give their clamping force",
          "Tightened by hand only",
          "Lubricated with oil before reuse"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The stretch is a one-time event; a reused bolt cannot clamp correctly again. (a) Reusing them causes gasket leaks. (c) They are tightened with a torque wrench and an angle gauge. (d) Lubricating a stretched bolt does not restore clamping force."
      },
      {
        "module": 11,
        "q": "A head gasket is replaced, but a week later the engine leaks from the same spot. The head was never checked for flatness. What is the most likely cause?",
        "choices": [
          "The gasket was the wrong brand",
          "The cylinder head was warped and never checked for flatness",
          "The oil was too thick",
          "The radiator cap was loose"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A warped head will not seal even with a new gasket — the surface must be machined flat. (a) Brand does not matter if the surface is not flat. (c) Oil thickness does not affect the head gasket. (d) The radiator cap affects cooling pressure, not the head gasket seal."
      },
      {
        "module": 11,
        "q": "A front crankshaft seal is replaced twice, and it still leaks. The shaft surface under the seal is grooved. What is the most likely cause of the repeated leak?",
        "choices": [
          "The seal was installed backward",
          "The shaft surface under the seal is grooved and worn",
          "The oil is too thin",
          "The engine is too cold"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A grooved shaft lets oil past any new seal; the shaft needs a sleeve or replacement. (a) A backward seal is possible but far less likely than a grooved shaft after two failures. (c) Oil grade does not groove a shaft. (d) Temperature does not explain repeated seal failure."
      },
      {
        "module": 12,
        "q": "A technician always runs tests before replacing parts. What does that habit mean in practice?",
        "choices": [
          "Replacing the cheapest part first",
          "Testing before replacing parts, so the evidence names the repair",
          "Testing only after the repair",
          "Asking the customer to diagnose it"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Testing first means the repair is chosen by evidence, not by guessing. (a) Cheapest-first is still guessing. (c) Testing after the repair is verification, not diagnosis. (d) The customer reports symptoms; the technician diagnoses."
      },
      {
        "module": 12,
        "q": "A customer reports blue smoke, a rough idle, and oil use. Tests show one low cylinder and leakdown air hissing from the oil filler cap. What has failed?",
        "choices": [
          "A burned exhaust valve",
          "Worn piston rings",
          "A failed head gasket",
          "A clogged air filter"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Blue smoke is burning oil, the low cylinder does not seal, and air from the oil filler means the leak is past the rings. (a) A burned exhaust valve would hiss from the tailpipe. (c) A head gasket would bubble the coolant. (d) A clogged filter does not cause blue smoke or a low cylinder."
      },
      {
        "module": 12,
        "q": "Whatever the engine, a technician asks four questions before diagnosing it. Which four questions are they?",
        "choices": [
          "Can it seal, can it breathe, can it stay cool, can it stay oiled",
          "Is it new, is it clean, is it fast, is it quiet",
          "Does it start, does it stop, does it steer, does it brake",
          "Is the battery charged, is the fuel full, is the oil new, is the tire round"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Sealing, breathing, cooling, and oiling are the four systems that keep an engine alive. (b) New, clean, fast, and quiet are not diagnostic questions. (c) Starting, stopping, steering, and braking are whole-car systems. (d) Those are maintenance items, not a diagnosis."
      },
      {
        "module": 12,
        "q": "A student is preparing for the ASE A1 test. Which areas does that test cover?",
        "choices": [
          "Only the cooling system",
          "General engine diagnosis, cylinder head and valve train, engine block, lubrication, cooling, intake, and exhaust",
          "Only electrical systems",
          "Only transmissions"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A1 covers the whole engine — diagnosis, head and valve train, block, lubrication, cooling, intake, and exhaust. (a) Cooling is only one area. (c) Electrical systems are ASE A6. (d) Transmissions are ASE A2 and A3."
      }
    ]
  }
};
