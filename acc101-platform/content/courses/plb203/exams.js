// Plumbing 203 — Midterm and Final exams.
// All questions are original to these exams (same topics as module quizzes, fresh scenarios and numbers).
// Every explanation covers why the correct answer is right AND why each wrong choice is wrong.

module.exports = {
  midterm: {
    title: "Midterm Exam",
    minutes: 75,
    coverage: "Modules 1–6",
    questions: [
      {
        module: 1,
        q: "A customer says the upstairs bathroom sink drains slowly, but every other fixture in the house drains fine. The most useful first conclusion is:",
        choices: ["The main drain is blocked", "The problem is local to that sink's branch", "The water heater has failed", "The whole house needs re-piping"],
        answer: 1,
        explanation: "Correct (b): One fixture affected means a local fault — the sink's trap or branch. (a) A main-drain blockage would affect every fixture. (c) The water heater affects hot water, not drainage. (d) Re-piping is a system-wide remedy for a single-fixture fault."
      },
      {
        module: 1,
        q: "With all fixtures off, the water meter's flow indicator is still moving. The next isolation test is to:",
        choices: ["Replace the meter", "Close the house valve and watch the meter again", "Open the walls at the wettest spot", "Turn off the water heater only"],
        answer: 1,
        explanation: "Correct (b): Closing the house valve splits inside from outside — if the meter stops, the leak is inside; if it keeps moving, it is in the service line. (a) treats the instrument as the fault. (c) opens walls before knowing which half leaks. (d) The hot/cold split comes after the house-valve test, not before it."
      },
      {
        module: 1,
        q: "A toilet refills by itself every few minutes and the dye test shows color in the bowl without a flush. The fault is:",
        choices: ["A clogged drain", "A leaking flapper", "A broken fill valve that never shuts off", "A cracked tank lid"],
        answer: 1,
        explanation: "Correct (b): Dye in the bowl without flushing proves tank water is leaking past the flapper. (a) A clogged drain affects flushing, not tank level. (c) A fill valve that never shuts off would raise the level above the overflow, not drop it. (d) A cracked lid does not lose tank water."
      },
      {
        module: 1,
        q: "A stain on a first-floor ceiling sits below a second-floor bathroom. The stain marks:",
        choices: ["Exactly where the leak starts", "Where the water lands after traveling — the source may be some distance away", "A leak in the ceiling itself", "Proof that the ceiling must be replaced before testing"],
        answer: 1,
        explanation: "Correct (b): Water travels along joists and pipes before dripping, so the stain is the landing point, not the source. (a) is the mistake this course warns against. (c) Ceilings do not leak; pipes and fixtures above them do. (d) Testing comes first and opening second."
      },
      {
        module: 2,
        q: "The correct first tool for a soft clog in a single bathroom sink is usually the:",
        choices: ["Drum machine with a root cutter", "Hydro-jetter", "Plunger", "Sewer camera"],
        answer: 2,
        explanation: "Correct (c): A plunger uses hydraulic pressure and is the least aggressive tool for a near-surface, single-fixture clog. (a) A drum machine with a root cutter is for main-line roots. (b) A jetter scours pipe walls and is for grease and repeat clogs. (d) A camera inspects; it does not clear anything."
      },
      {
        module: 2,
        q: "While snaking a main line, the cable stops dead and the drum keeps spinning. The right move is to:",
        choices: ["Push harder until it breaks through", "Stop feeding, pull back slightly, try again gently — then run the camera if it still will not pass", "Reverse the machine at full speed", "Leave the cable in the pipe"],
        answer: 1,
        explanation: "Correct (b): Forcing a spinning cable against a dead stop kinks or breaks it; a gentle retry and then a camera identifies the obstruction. (a) is how cables break in pipes. (c) Reversing at speed can whip the cable and damage pipe or operator. (d) Abandons a stuck tool in the customer's drain."
      },
      {
        module: 2,
        q: "A camera inspection shows a 12-foot section of drain where water stands in a sagging pipe. This is a:",
        choices: ["Grease blockage", "Belly, which cleaning cannot fix", "Root intrusion", "Offset joint"],
        answer: 1,
        explanation: "Correct (b): A belly is a sagging section holding standing water — a grade problem needing pipe repair or replacement. (a) Grease coats walls; it does not make pipe sag. (c) Roots show as strands or a mass entering a joint. (d) An offset is a lip at one joint, not a 12-foot sag."
      },
      {
        module: 2,
        q: "The sonde in a sewer camera is used to:",
        choices: ["Cut through roots", "Transmit a signal so a surface locator can find the camera's position and depth", "Measure water pressure", "Push the camera through the pipe"],
        answer: 1,
        explanation: "Correct (b): The sonde's signal lets the locator pinpoint the camera above ground and read its depth. (a) Cutting is a cutter head's job. (c) A camera measures no pressure. (d) The push rod moves the camera; the sonde only transmits."
      },
      {
        module: 2,
        q: "Hydro-jetting is the best choice for:",
        choices: ["A broken, collapsed pipe", "A grease-coated line that keeps clogging", "A fully blocked line with no outlet", "A toilet clog"],
        answer: 1,
        explanation: "Correct (b): Jetting scours grease and scale from the full pipe wall. (a) Jetting a broken pipe can wash out soil and worsen a collapse — camera first. (c) Water with nowhere to go comes back at the operator. (d) A toilet clog is handled with a plunger or closet auger."
      },
      {
        module: 3,
        q: "A ceiling stain below a bathroom is wet after showers but dry in the morning. This is most likely:",
        choices: ["A supply leak", "A drain leak", "A roof leak", "A slab leak"],
        answer: 1,
        explanation: "Correct (b): Drain leaks only leak when water runs through the drain, so the timing matches shower use. (a) A supply leak runs constantly and would keep the stain wet. (c) A roof leak follows rain, not showers. (d) A slab leak is under a concrete floor, not above a ceiling."
      },
      {
        module: 3,
        q: "Closing the house valve stops the meter. This proves the leak is:",
        choices: ["In the service line between the meter and the house", "Inside the house", "In the water heater only", "Not a leak at all"],
        answer: 1,
        explanation: "Correct (b): With the house isolated, a stopped meter means water was escaping inside. (a) would be proven if the meter kept moving with the valve closed. (c) is only one possible inside location — the hot/cold test narrows it further. (d) contradicts the meter's original movement."
      },
      {
        module: 3,
        q: "Three pinhole leaks in the same copper run over two years suggest:",
        choices: ["Bad luck — spot-repair each one", "The pipe wall is thinning along the run and a section replacement is the honest fix", "The water pressure is too low", "The pipe was installed last week"],
        answer: 1,
        explanation: "Correct (b): Repeated pinholes in one run mean systemic thinning, so the next leak is coming. (a) treats a pattern as coincidence and sells repeated temporary fixes. (c) Low pressure does not cause pinholes; corrosion does. (d) A new pipe would not have three pinholes."
      },
      {
        module: 3,
        q: "Thermal imaging is most useful for finding:",
        choices: ["A cold-water leak with no temperature difference", "A hot-water leak warming a slab floor", "A drain leak in a dry pipe", "The exact depth of a sewer line"],
        answer: 1,
        explanation: "Correct (b): A hot leak warms the floor above it, which an infrared camera can see. (a) A cold leak with no temperature difference has nothing for the camera to show. (c) A drain leak does not run continuously and usually shows no heat signature. (d) Depth comes from a camera sonde and locator, not temperature."
      },
      {
        module: 4,
        q: "A two-handle faucet that turns several times to open drips from the spout. The most likely failed part is the:",
        choices: ["Cartridge", "Ceramic disc", "Rubber washer or the valve seat", "Ball and cam"],
        answer: 2,
        explanation: "Correct (c): Multi-turn handles mark a compression faucet, which seals with a washer on a seat. (a) Cartridges belong to cartridge faucets. (b) Ceramic discs belong to ceramic-disc faucets. (d) The ball and cam belong to ball faucets."
      },
      {
        module: 4,
        q: "A toilet runs constantly and the tank water level is above the overflow tube. The fault is the:",
        choices: ["Flapper", "Fill valve not shutting off", "Wax ring", "Drain"],
        answer: 1,
        explanation: "Correct (b): Water pouring down the overflow means the fill valve is not stopping the refill. (a) A leaking flapper would lower the level, not raise it above the overflow. (c) The wax ring seals the base, not the tank. (d) The drain has nothing to do with tank water level."
      },
      {
        module: 4,
        q: "When testing a water heater's T&P relief valve, you should:",
        choices: ["Cap the discharge pipe first", "Lift the lever briefly, confirm water flows from the discharge pipe, and confirm the valve reseats", "Remove the valve and plug the opening", "Never touch it"],
        answer: 1,
        explanation: "Correct (b): A brief lift proves the valve opens and reseats; a valve that will not open or keeps dripping must be replaced. (a) Capping the discharge defeats the safety device. (c) Plugging the opening removes the heater's protection. (d) The valve is designed to be tested — an untested valve may be seized shut."
      },
      {
        module: 4,
        q: "The anode rod in a tank water heater exists to:",
        choices: ["Heat the water faster", "Corrode in place of the tank, protecting it", "Hold the tank to the wall", "Measure the water temperature"],
        answer: 1,
        explanation: "Correct: (b). The sacrificial rod corrodes so the steel tank does not; when it is spent, the tank starts corroding. (a) Heating is the burner or element's job. (c) The rod is inside the tank, not a mounting. (d) Temperature is measured by the thermostat."
      },
      {
        module: 4,
        q: "Before working on a jammed garbage disposal, the first step is to:",
        choices: ["Reach in and feel for the jam", "Turn the power off", "Pour drain cleaner in", "Run hot water"],
        answer: 1,
        explanation: "Correct: (b). Power off first — a disposal that starts while a hand is inside causes serious injury. (a) is exactly what must never be done. (c) Chemicals do not clear a mechanical jam and create a hazard for the next person. (d) Running water does not free a jam."
      },
      {
        module: 5,
        q: "The minimum code slope for a 3-inch drain pipe is:",
        choices: ["1/8 inch per foot", "1/4 inch per foot", "1/2 inch per foot", "1 inch per foot"],
        answer: 0,
        explanation: "Correct (a): Pipe 3 to 6 inches needs 1/8 inch per foot (IPC Table 704.1). (b) 1/4 inch per foot is the minimum for pipe 2-1/2 inches and smaller. (c) and (d) are steeper than required and are not the code minimum."
      },
      {
        module: 5,
        q: "A 4-inch building drain runs 64 feet. At the code minimum slope, its total fall is:",
        choices: ["4 inches", "8 inches", "16 inches", "32 inches"],
        answer: 1,
        explanation: "Correct (b): Minimum slope for 4-inch pipe is 1/8 inch per foot, so 64 x 1/8 = 8 inches. (a) would be the fall at 1/16 inch per foot. (c) would be the fall at 1/4 inch per foot. (d) would be the fall at 1/2 inch per foot."
      },
      {
        module: 5,
        q: "A wall-hung water closet's carrier must be installed:",
        choices: ["After the tile is finished", "During above-ground rough-in, before the wall is closed", "At the trim stage", "Only if the fixture is heavy"],
        answer: 1,
        explanation: "Correct (b): The carrier is the concealed frame that carries the fixture's load, so it must be in the wall before the wall is finished. (a) After finishes is too late — the wall would have to be opened. (c) Trim sets the fixture onto the carrier; it does not install the carrier. (d) Every wall-hung fixture needs a carrier, not only heavy ones."
      },
      {
        module: 5,
        q: "Commercial fixture counts are set by:",
        choices: ["The plumber's preference", "The code's fixture table, by occupancy type and occupant load", "The building owner's budget", "The fixture manufacturer's catalog"],
        answer: 1,
        explanation: "Correct (b): The code table sets minimum fixture counts by how the building is used and how many people it serves. (a) Preference does not set code minimums. (c) Budget does not override the code. (d) The catalog lists products, not required counts."
      },
      {
        module: 6,
        q: "In a hydronic system, the expansion tank's job is to:",
        choices: ["Store extra hot water for showers", "Absorb the expansion of water as it heats, keeping pressure stable", "Filter the water", "Pump water to the top floor"],
        answer: 1,
        explanation: "Correct (b): Water expands as it heats; the tank gives it somewhere to go so pressure does not climb. (a) Domestic hot water storage is an indirect water heater's job. (c) Filtration is not the tank's function. (d) Pumping is the circulator's job."
      },
      {
        module: 6,
        q: "A boiler relief valve discharges on every heating cycle and system pressure climbs as the water heats. The most likely fault is:",
        choices: ["A failed or waterlogged expansion tank", "A stuck zone valve", "A dirty burner", "A thermostat set too low"],
        answer: 0,
        explanation: "Correct (a): With no working expansion tank, heated water has nowhere to expand, so pressure climbs until the relief valve opens. (b) A stuck zone valve affects one zone, not system pressure. (c) A dirty burner affects heat output, not pressure rise. (d) A low thermostat setting reduces firing; it does not raise pressure."
      },
      {
        module: 6,
        q: "A radiator is cold at the top and warm at the bottom, and the system gurgles. The diagnosis is:",
        choices: ["A failed boiler", "Air trapped in the radiator and piping", "A broken thermostat", "An undersized boiler"],
        answer: 1,
        explanation: "Correct (b): Air collects at the top of radiators, blocking hot water, and moving air gurgles in the piping. (a) A failed boiler would leave all emitters cold. (c) A broken thermostat would leave a whole zone cold, not half a radiator. (d) An undersized boiler would underheat the whole building, not trap air in one radiator."
      }
    ]
  },
  final: {
    title: "Final Exam",
    minutes: 120,
    coverage: "Modules 1–12",
    questions: [
      {
        module: 1,
        q: "A customer reports a wet spot on a wall that appears only after heavy rain, and the meter test is still. The best conclusion is:",
        choices: ["A hidden supply leak", "A drain leak", "Roof or exterior water — not a plumbing leak", "A slab leak"],
        answer: 2,
        explanation: "Correct (c): The still meter rules out a supply leak, and the rain timing points to roof, flashing, or groundwater. (a) is ruled out by the meter test. (b) A drain leak would follow fixture use, not rain. (d) A slab leak would show on the meter test."
      },
      {
        module: 2,
        q: "A drain clogs at the same spot every few months. The most important next step is to:",
        choices: ["Snake it again with a bigger cable", "Run the camera to find the underlying cause — roots, a belly, a break, or an offset", "Replace the fixture", "Jet it without inspecting"],
        answer: 1,
        explanation: "Correct (b): A repeat clog at one spot has a cause that cleaning alone will not remove, and only the camera shows it. (a) repeats the same temporary fix with more force. (c) The fixture is not the cause of a drain-line repeat clog. (d) Jetting without inspection risks making a broken pipe worse."
      },
      {
        module: 3,
        q: "A pressure test shows one section holding steady and the next losing pressure slowly. The correct conclusion is:",
        choices: ["Both sections leak", "The first section is sound and the leak is in the second section", "The gauge is broken", "Neither section leaks"],
        answer: 1,
        explanation: "Correct (b): A steady gauge proves the first section holds; a falling gauge proves the second leaks. (a) contradicts the first section's steady reading. (c) A broken gauge would not give a clean steady reading on one section and a fall on the next. (d) contradicts the second section's pressure loss."
      },
      {
        module: 4,
        q: "A toilet rocks and water appears at the base after flushing. The correct repair is to:",
        choices: ["Caulk the base to the floor", "Pull the toilet, fix the flange, replace the wax ring, and reset it level", "Tighten the water supply line", "Replace the fill valve"],
        answer: 1,
        explanation: "Correct (b): A rocking toilet with water at the base means a failed wax seal and usually a damaged or low flange — the toilet must come up and the seal and flange must be fixed. (a) Caulk hides the leak and lets the subfloor rot. (c) The supply line is not at the base. (d) The fill valve controls tank refilling, not the base seal."
      },
      {
        module: 5,
        q: "The drawing that shows a commercial plumbing system's vertical runs — stacks, risers, and branches — is the:",
        choices: ["Floor plan", "Fixture schedule", "Riser diagram", "Detail sheet"],
        answer: 2,
        explanation: "Correct (c): The riser diagram is the vertical map of the system. (a) Floor plans show horizontal layout on each floor. (b) The fixture schedule lists fixtures by tag and model. (d) Details show how specific assemblies go together."
      },
      {
        module: 6,
        q: "In a one-pipe hydronic system, the radiators farthest from the boiler are cooler because:",
        choices: ["They are smaller", "Each emitter returns cooler water to the same main, so water temperature drops along the loop", "The circulator cannot reach them", "They have no thermostats"],
        answer: 1,
        explanation: "Correct (b): In a one-pipe layout the same main carries progressively cooler water past each emitter. (a) Size is not the cause — the water arriving is cooler. (c) The circulator moves water through the whole loop. (d) Thermostats control zones; they do not set the water temperature arriving at an emitter."
      },
      {
        module: 6,
        q: "Outdoor reset improves efficiency mainly by:",
        choices: ["Running the boiler hotter on mild days", "Lowering boiler water temperature on mild days and raising it on cold days", "Turning off the circulator", "Heating only one zone at a time"],
        answer: 1,
        explanation: "Correct (b): Matching water temperature to the weather avoids overheating on mild days and saves fuel. (a) is backwards — mild days need cooler water. (c) The circulator must run to move heat. (d) Zoning is a separate control function."
      },
      {
        module: 7,
        q: "A differential controller in an active solar system runs the pump only when:",
        choices: ["It is daytime", "The collector is hotter than the storage tank by a set margin", "The tank is empty", "The backup heater is off"],
        answer: 1,
        explanation: "Correct (b): The controller compares collector and tank temperatures so the pump only moves heat into the tank, never out of it. (a) Daytime alone does not mean the collector is hotter than the tank. (c) Tank level does not control the pump. (d) The backup heater's state is not the controller's input."
      },
      {
        module: 7,
        q: "A direct solar system — household water pumped straight through the collectors — is unsafe in Michigan because:",
        choices: ["The water would be too hot", "The water in the collectors can freeze and burst the piping", "The pump would be too large", "The tank would be too small"],
        answer: 1,
        explanation: "Correct (b): Direct water freezes in a Michigan winter, expands, and bursts collectors and piping; an indirect glycol loop is the standard there. (a) Overheating is a separate protection issue. (c) Pump size is not the problem. (d) Tank size is a sizing question, not a freeze question."
      },
      {
        module: 7,
        q: "A thermosiphon solar system requires:",
        choices: ["A large electric pump", "The storage tank above the collector, so hot water rises naturally", "A glycol loop", "A south-facing basement"],
        answer: 1,
        explanation: "Correct (b): Thermosiphon circulation is driven by hot water rising and cool water sinking, which only works with the tank above the collector. (a) Passive systems have no pump — that is the point. (c) Glycol is used in indirect active systems. (d) The tank's height relative to the collector matters, not the basement."
      },
      {
        module: 8,
        q: "Medical gas and vacuum systems in health care facilities are governed by:",
        choices: ["The Uniform Plumbing Code only", "NFPA 99, the Health Care Facilities Code", "The residential building code", "No code — the installer decides"],
        answer: 1,
        explanation: "Correct (b): NFPA 99 governs medical gas systems; the plumbing code points to it for this piping. (a) The UPC does not govern medical gas — and Michigan uses the IPC, not the UPC. (c) Residential rules do not cover hospital gas systems. (d) Life-safety piping is never left to the installer's discretion."
      },
      {
        module: 8,
        q: "To install medical gas systems, a plumber must hold:",
        choices: ["No credential — any licensed plumber may do it", "The ASSE 6010 Medical Gas Systems Installer credential", "The ASSE 5110 backflow credential", "An OSHA 10 card only"],
        answer: 1,
        explanation: "Correct (b): ASSE 6010 is the installer credential for medical gas systems. (a) is wrong — ordinary licensure does not cover medical gas installation. (c) ASSE 5110 covers backflow testing, not medical gas. (d) OSHA 10 is safety training, not a medical gas qualification."
      },
      {
        module: 8,
        q: "ASSE 6010 requires a minimum of how many years of documented practical experience?",
        choices: ["1 year", "2 years", "4 years", "10 years"],
        answer: 2,
        explanation: "Correct (c): The requirement is a minimum of four years of documented practical experience installing plumbing or mechanical piping systems. (a) and (b) are too short. (d) is more than required."
      },
      {
        module: 8,
        q: "The nitrogen purge during medical gas brazing exists to:",
        choices: ["Cool the joint faster", "Displace oxygen inside the pipe so hot copper does not oxidize and scale", "Pressurize the system for testing", "Clean the outside of the pipe"],
        answer: 1,
        explanation: "Correct (b): Oil-free nitrogen displaces oxygen inside the pipe, preventing oxide scale from forming on the hot copper. (a) Cooling is not the purge's purpose — the purge runs until the joint cools, but it is there to prevent oxidation. (c) Pressure testing is a separate step. (d) The purge acts inside the pipe, not outside."
      },
      {
        module: 8,
        q: "The ASSE 6010 brazing exam requires filler metal penetration of:",
        choices: ["50% or greater", "60% or greater", "80% or greater", "100% exactly"],
        answer: 2,
        explanation: "Correct (c): The standard is 80% or greater penetration, measured by cutting the joint open. (a) and (b) are below the standard. (d) 100% is not required — 80% or greater passes."
      },
      {
        module: 8,
        q: "A finished medical gas system is verified by:",
        choices: ["The installer, by signing their own work", "A separate ASSE 6030 credentialed verifier", "The hospital's maintenance staff", "No one — the installer tests it"],
        answer: 1,
        explanation: "Correct (b): An independent ASSE 6030 verifier runs the testing sequence — pressure, purity, and cross-connection tests. (a) Self-verification defeats the purpose of independent checking. (c) Maintenance staff do not hold the verifier credential. (d) Testing by the installer alone is not verification."
      },
      {
        module: 9,
        q: "A submersible well pump differs from a jet pump mainly in that it:",
        choices: ["Sits above ground and pulls water by suction", "Sits underwater in the well and pushes water to the surface", "Needs no electricity", "Only works in shallow wells"],
        answer: 1,
        explanation: "Correct (b): A submersible sits below the water level and pushes water up, so it works at almost any depth. (a) describes a jet pump. (c) Both types need electricity. (d) Submersibles are the standard for deep wells, not shallow ones."
      },
      {
        module: 9,
        q: "A well pump that starts and stops every few seconds is most likely suffering from:",
        choices: ["A waterlogged pressure tank that has lost its air cushion", "A pump that is too large", "A well that is too deep", "A pressure switch set too high"],
        answer: 0,
        explanation: "Correct (a): With no air cushion, the tank stores almost no water, so pressure falls immediately and the pump restarts — short cycling. (b) An oversized pump can cycle, but the classic cause is the tank. (c) Depth does not cause rapid cycling. (d) A high cut-out setting changes the pressure range; it does not collapse the tank's storage."
      },
      {
        module: 9,
        q: "A house has no water, the gauge reads zero, and the pump does not run. The first thing to check is:",
        choices: ["The well's water level", "Power — the breaker, the disconnect, and the pressure switch", "The water softener", "The kitchen faucet aerator"],
        answer: 1,
        explanation: "Correct (b): A silent pump with zero pressure is an electrical problem until proven otherwise — check power first. (a) A dry well would show a pump that runs but builds no pressure. (c) The softener is downstream of the pump and tank. (d) An aerator affects one fixture, not the whole house."
      },
      {
        module: 9,
        q: "Before choosing water treatment for a well, the correct first step is to:",
        choices: ["Install a water softener", "Test the water to find out what is actually in it", "Replace the pump", "Shock-chlorinate the well"],
        answer: 1,
        explanation: "Correct (b): The test result chooses the treatment — a softener does not remove iron, a filter does not kill bacteria. (a) installs treatment before knowing the problem. (c) replaces a pump for a water-quality issue. (d) shock chlorination is the response to a positive bacteria test, not a first step for every water problem."
      },
      {
        module: 10,
        q: "In a manufactured home, water lines usually run:",
        choices: ["Through the walls, like a site-built house", "Under the floor, in the crawl space", "Through the roof", "Inside the furnace duct"],
        answer: 1,
        explanation: "Correct (b): Mobile-home water lines run under the floor, so the crawl space is the plumber's work area. (a) describes site-built construction. (c) Water lines do not run through the roof. (d) Running water lines inside a duct is a code violation, not a design."
      },
      {
        module: 10,
        q: "Gray plastic water pipe stamped PB or Quest in an older mobile home is:",
        choices: ["PEX, the modern standard", "Polybutylene, known for failures and best replaced", "Copper, which lasts indefinitely", "CPVC, which is trouble-free"],
        answer: 1,
        explanation: "Correct (b): Polybutylene (Quest) fails from the inside as water chemistry attacks it, and the honest recommendation is replacement. (a) PEX is the usual replacement material, not the gray pipe. (c) The pipe is plastic, not copper. (d) CPVC is a different plastic and is not stamped PB."
      },
      {
        module: 10,
        q: "A travel trailer's drinking water connection must use:",
        choices: ["Any garden hose", "A white potable-water hose rated for drinking water", "A sewer hose", "A fire hose"],
        answer: 1,
        explanation: "Correct (b): Only a hose rated for drinking water is acceptable; garden hoses can leach chemicals into the water. (a) is the unsafe choice this module warns against. (c) A sewer hose carries waste, never drinking water. (d) A fire hose is not a drinking-water hose."
      },
      {
        module: 10,
        q: "Winterizing a vacant manufactured home includes:",
        choices: ["Filling the pipes with water", "Draining the system and adding non-toxic RV antifreeze to traps and the toilet bowl", "Turning the heat up", "Leaving the water running"],
        answer: 1,
        explanation: "Correct (b): Winterizing means getting the water out and protecting the traps that cannot be drained. (a) Full pipes freeze and burst. (c) Heat alone does not protect a vacant home's pipes reliably. (d) Running water wastes water and does not protect a vacant home."
      },
      {
        module: 11,
        q: "A plumbing job's price must cover:",
        choices: ["Labor only", "Labor and materials only", "Labor, materials, overhead, and profit", "Materials only"],
        answer: 2,
        explanation: "Correct (c): All four costs must be covered — leaving out overhead or profit is how a busy shop slowly goes broke. (a) ignores materials, overhead, and profit. (b) ignores overhead and profit. (d) ignores labor, overhead, and profit."
      },
      {
        module: 11,
        q: "A shop's monthly overhead is $6,000 and it completes 50 jobs a month. Overhead per job is:",
        choices: ["$60", "$120", "$300", "$6,000"],
        answer: 1,
        explanation: "Correct: (b). $6,000 ÷ 50 = $120 per job. (a) would be the figure at 100 jobs a month. (c) would be the figure at 20 jobs a month. (d) is the total monthly overhead, not the per-job share."
      },
      {
        module: 11,
        q: "Materials cost $400 with a 30% markup. The materials charge is:",
        choices: ["$400", "$430", "$520", "$700"],
        answer: 2,
        explanation: "Correct: (c). $400 x 1.30 = $520. (a) is cost with no markup. (b) adds only $30. (d) would be a 75% markup."
      },
      {
        module: 11,
        q: "Flat-rate pricing is best suited to:",
        choices: ["Open-ended leak hunts", "Defined jobs such as a water heater swap", "Work where the scope is unknown", "Jobs with no agreed scope"],
        answer: 1,
        explanation: "Correct: (b). Flat rate works when the job is defined and can be priced in advance. (a), (c), and (d) all describe open-ended work, which is billed hourly because the scope is unknown."
      },
      {
        module: 11,
        q: "A customer asks for extra work beyond the agreed scope. Before doing it, you should:",
        choices: ["Do it for free to keep the customer happy", "Write a change order, price it, and get it signed", "Add it to the invoice later without telling them", "Refuse and leave"],
        answer: 1,
        explanation: "Correct: (b). A signed change order records the extra scope and its price before the work is done. (a) gives away work the business must pay for. (c) surprises the customer with a bill they never agreed to. (d) is unnecessary — extra work is fine when it is agreed and priced."
      },
      {
        module: 12,
        q: "To qualify for the Michigan journey plumber exams, an apprentice needs:",
        choices: ["3,000 hours over 1 year", "6,000 hours over at least 3 years as a registered apprentice", "10,000 hours over 5 years", "No hours — only the exam"],
        answer: 1,
        explanation: "Correct (b): Michigan requires 6,000 registered apprentice hours over at least 3 years. (a) is half the requirement. (c) is more than required. (d) is wrong — the hours are the qualification to sit for the exam."
      },
      {
        module: 12,
        q: "The Michigan journey plumber written exam is:",
        choices: ["50 questions, 60 minutes, closed book", "125 questions, 180 minutes, open book", "200 questions, 4 hours, closed book", "25 questions, 30 minutes"],
        answer: 1,
        explanation: "Correct (b): The written exam is 125 questions in 180 minutes, open book, given through PSI, followed by a hands-on practical. (a), (c), and (d) do not match the published format."
      },
      {
        module: 12,
        q: "To sit for the Michigan master plumber exam, a journey plumber needs:",
        choices: ["4,000 hours as a licensed journey plumber over at least 2 years", "1,000 hours as a journeyman", "No journeyman experience", "A college degree"],
        answer: 0,
        explanation: "Correct (a): The master path requires 4,000 hours as a licensed journey plumber over at least 2 years, then a 130-question exam. (b) is far short. (c) is wrong — journeyman experience is the requirement. (d) A degree is not part of the Michigan path."
      },
      {
        module: 12,
        q: "NCCER Plumbing Level 4 module tests require a minimum passing score of:",
        choices: ["50%", "60%", "70%", "90%"],
        answer: 2,
        explanation: "Correct (c): NCCER requires a minimum of 70 on every module test. (a) and (b) are below the standard. (d) is higher than required."
      },
      {
        module: 12,
        q: "UA journeyman status comes from:",
        choices: ["Completing this course", "Completing the five-year UA apprenticeship", "Passing the Michigan master exam", "Holding an NCCER Level 4 credential"],
        answer: 1,
        explanation: "Correct (b): UA journeyman status comes only from completing the UA apprenticeship — five years of OJT plus classroom hours. (a) No course grants UA status. (c) The Michigan master exam grants a state license, not UA status. (d) NCCER Level 4 is a separate national credential."
      },
      {
        module: 12,
        q: "In an estimate, a takeoff is:",
        choices: ["The profit margin", "Counting every fixture, foot of pipe, fitting, and valve from the drawings", "The contingency allowance", "The bid price"],
        answer: 1,
        explanation: "Correct (b): The takeoff is the systematic count that the whole estimate is built on. (a) Profit is added after costs are totaled. (c) Contingency is the allowance for the unknown. (d) The bid is the finished offer built from the estimate."
      },
      {
        module: 11,
        q: "The loaded labor rate is higher than the technician's wage because it includes:",
        choices: ["Only the wage", "Taxes, insurance, benefits, and the non-billable hours the business still pays for", "The price of the truck only", "The customer's tip"],
        answer: 1,
        explanation: "Correct (b): The loaded rate counts the full cost of employing the technician spread over the hours that can actually be billed. (a) The wage alone is not the cost. (c) The truck is overhead, not part of the labor rate. (d) Tips are not part of pricing."
      },
      {
        module: 5,
        q: "A 3-inch branch runs 24 feet. At the code minimum slope, its total fall is:",
        choices: ["3 inches", "6 inches", "12 inches", "24 inches"],
        answer: 0,
        explanation: "Correct (a): Minimum slope for 3-inch pipe is 1/8 inch per foot (IPC Table 704.1, 3–6 in), so 24 x 1/8 = 3 inches. (b) would be the fall at 1/4 inch per foot. (c) would be the fall at 1/2 inch per foot. (d) would be the fall at 1 inch per foot."
      },
      {
        module: 7,
        q: "In an indirect solar system, the heat exchanger's job is to:",
        choices: ["Pump the glycol", "Transfer heat from the collector loop fluid to the household water without mixing them", "Store the heated water", "Control the pump"],
        answer: 1,
        explanation: "Correct (b): The exchanger passes heat from the glycol loop to the domestic water while keeping the two fluids separate. (a) Pumping is the circulator's job. (c) Storage is the tank's job. (d) Pump control is the differential controller's job."
      },
      {
        module: 3,
        q: "Acoustic listening works best when it is confirmed by:",
        choices: ["Another plumber's opinion", "The meter test and isolation tests, since other sounds can mimic a leak", "The customer's guess", "The age of the pipe"],
        answer: 1,
        explanation: "Correct (b): Many sounds — a running toilet, a refrigerator line, irrigation — can mimic a leak, so listening must be checked against the meter. (a) an opinion is not a test. (c) a guess is not evidence. (d) age suggests risk but proves nothing about this leak."
      },
      {
        module: 4,
        q: "A dishwasher drain hose must rise to a high loop or pass through an air gap because:",
        choices: ["It makes the dishwasher drain faster", "It prevents dirty sink water from siphoning back into the dishwasher", "It keeps the hose from freezing", "It reduces water use"],
        answer: 1,
        explanation: "Correct (b): The high loop or air gap is backflow protection — without it, sink water can drain back into the machine. (a) It does not speed drainage. (c) Freezing is not the purpose. (d) It has no effect on water use."
      }
    ]
  }
};
