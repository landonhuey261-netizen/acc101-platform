// HVAC 235 - Module 1: High-Efficiency & Condensing Furnaces
module.exports = {
  number: 1,
  slug: "condensing-furnaces",
  title: "High-Efficiency & Condensing Furnaces",
  estTime: "3–4 hours",
  objectives: [
    "Explain how a secondary heat exchanger recovers latent heat and why that pushes a furnace past 90% AFUE.",
    "Trace the flue-gas and condensate paths through a condensing furnace from burner to drain.",
    "Describe condensate management: collector box, trap, drain routing, freeze protection, and neutralization.",
    "Explain why condensing furnaces vent in plastic pipe and how sealed (direct-vent) combustion differs from single-pipe venting.",
    "Compute delivered output and fuel savings when replacing an 80% AFUE furnace with a condensing model.",
    "Recognize the field symptoms of a plugged secondary heat exchanger and a failed condensate trap."
  ],
  sections: [
    {
      heading: "Where the Extra Efficiency Comes From",
      html: `
<p>HVAC 132 sorted furnaces into venting categories. A mid-efficiency furnace at about <strong>80% AFUE</strong> (Category I) must keep its flue gases hot enough to stay safely above the dew point all the way out the vent — the heat carried in that water vapor is thrown away by design. A <strong>condensing furnace</strong> (Category IV, 90% AFUE and above) does the opposite on purpose: it deliberately cools the flue gases <em>below</em> their dew point inside the appliance, so the water vapor in them condenses and gives up its <strong>latent heat</strong> to the house instead of the sky.</p>
<p>The hardware that makes this possible is the <strong>secondary heat exchanger</strong>. Flue gases leave the primary heat exchanger still carrying a large share of the fuel's energy, pass through the inducer, and are routed through a second, finned coil of small passages — usually corrosion-resistant stainless steel or coated metal, because what forms there is not plain water. As house air passes over that coil, the gases cool, vapor condenses on the surfaces, and the released latent heat joins the airstream. What finally exits the vent is cool enough to travel in PVC plastic pipe — the visual signature of a condensing furnace.</p>
<div class="callout"><strong>Key idea:</strong> Sensible heat alone caps a non-condensing furnace near the low 80s in AFUE. The jump into the 90s comes almost entirely from recovering <em>latent</em> heat — the energy released when flue-gas water vapor turns back into liquid. No condensation, no 90%+.</div>
<p><strong>Worked example — delivered output.</strong> Two furnaces share a 100,000 Btu/h input rating. The 80% unit delivers 100,000 × 0.80 = <strong>80,000 Btu/h</strong> to the house and sends 20,000 Btu/h up the vent. The 96% condensing unit delivers 100,000 × 0.96 = <strong>96,000 Btu/h</strong> and loses only 4,000 Btu/h. Same gas meter spinning, 16,000 Btu/h more heat in the living space — or, run the comparison the other way, the condensing furnace can be downsized in input while delivering the same output.</p>`
    },
    {
      heading: "Anatomy: The Flue-Gas Path in a Condensing Furnace",
      html: `
<p>Follow the exhaust. Burners fire into the <strong>primary heat exchanger</strong>, where most sensible heat transfers to the circulating air. The still-hot gases collect in a <strong>collector box</strong> and are pulled by the <strong>draft inducer</strong> through the <strong>secondary heat exchanger</strong>, a tight maze of small tubes or stamped passages. There the gases give up their remaining heat, vapor condenses, and liquid runs down into the collector and the condensate trap. The cooled gases — now only warm to the touch — exit through the plastic vent.</p>
<p>The tight secondary passages are both the efficiency secret and the service headache. Because the passages are small, anything that restricts them — debris, corrosion products, a deteriorating coating shedding into the gas stream — raises the pressure drop across the exchanger. The inducer then cannot establish the draft the <strong>pressure switch</strong> needs to see, and the furnace locks out on a pressure-switch fault even though the switch itself is fine. Module 4 and this course's lab build the full diagnosis; for now, file the pattern: <em>on a condensing furnace, unexplained pressure-switch trips make you suspect the secondary exchanger and the condensate path before you suspect the switch.</em></p>
<div class="callout"><strong>Key idea:</strong> In a condensing furnace, return air typically passes over the secondary heat exchanger <em>first</em> and the primary second — the coolest air meets the coolest flue gas, which is exactly the arrangement that wrings out the most heat and drives condensation.</div>
<p>Materials matter. Condensate is mildly <strong>acidic</strong> — carbon dioxide dissolving in the condensed water forms a weak acid — so everything it touches (secondary exchanger, collector box, trap, vent, drain) must resist corrosion. That is why you see stainless steel, engineered plastics, and PVC rather than the plain galvanized steel of an 80% furnace's vent connector.</p>`
    },
    {
      heading: "Condensate Management: Traps, Drains, Freezing, and Neutralizers",
      html: `
<p>A condensing furnace is also a small water factory: on a cold day it can produce a steady trickle of condensate all day long, and that water has to leave reliably or the furnace stops. Condensate collects in the collector box and drains through a <strong>condensate trap</strong>. The trap is not optional plumbing decoration — it holds a water seal that stops the inducer from pulling (or pushing) flue gas through the drain line, and many furnaces prove drainage with a pressure switch or float that shuts the burner down if the trap backs up.</p>
<ul>
<li><strong>Routing:</strong> Drain lines run downhill to an approved drain. Sags that hold standing water, long uninsulated runs through freezing attics, and upward loops all cause nuisance shutdowns — or a frozen, split trap in January.</li>
<li><strong>Freeze protection:</strong> In cold spaces, the trap and drain may need insulation or heat tape per the manufacturer. A frozen trap presents exactly like a plugged secondary: pressure-switch faults on a furnace that "was fine in October."</li>
<li><strong>Priming:</strong> A dry trap at start-up can let the inducer pull air through the drain instead of proving draft; many manufacturers want the trap filled with water at installation.</li>
<li><strong>Neutralization:</strong> Where codes or the drain's material require it, condensate passes through a <strong>neutralizer</strong> — a cartridge of limestone-type media that raises the pH before the water reaches metallic drain piping or a septic system. The media is consumed over time and is a maintenance item, not a lifetime part.</li>
</ul>
<div class="callout"><strong>Key idea:</strong> Roughly half of all "condensing furnace won't run" calls that are not electrical are water calls: plugged trap, frozen drain, failed condensate pump, or a secondary exchanger restricted by what the condensate carried into it. Learn to think in water and the platform stops being mysterious.</div>`
    },
    {
      heading: "PVC Venting and Sealed Combustion",
      html: `
<p>Because the exhaust leaves a condensing furnace cool, the vent is plastic — PVC, CPVC, or polypropylene, as the manufacturer's instructions list — instead of metal B-vent or a chimney. Two piping arrangements dominate:</p>
<ul>
<li><strong>Direct-vent (two-pipe) / sealed combustion:</strong> one pipe vents exhaust out; a second pipe brings outdoor air in for combustion. The burner never breathes house air, so the furnace is isolated from indoor pressure problems — a powerful exhaust fan or a tight house cannot backdraft it — and from indoor contaminants.</li>
<li><strong>Single-pipe (non-direct-vent):</strong> only the exhaust is piped; combustion air comes from the space around the furnace. Cheaper to install, but the furnace again depends on the house for air, and the installation must satisfy combustion-air requirements for the space.</li>
</ul>
<p>Plastic venting is forgiving about temperature and unforgiving about geometry. Joints must be fully solvent-welded (or mechanically sealed, on listed polypropylene systems), the vent must slope back toward the furnace so condensate forming in the pipe drains home instead of pooling, and total length plus elbows must stay inside the manufacturer's vent table for the chosen pipe size — Module 3 works the sizing in depth. An unglued joint on a condensing vent is a flue-gas and condensate leak <em>inside</em> the house, under inducer pressure: this vent system is pressurized, unlike the naturally drafting chimney of an old Category I furnace, so sloppy joints push gases out instead of drawing air in.</p>
<div class="formula">Delivered output (Btu/h) = Input rating (Btu/h) × AFUE (as a decimal)</div>
<p><strong>Worked example — fuel savings.</strong> A house needs 72,000 Btu/h of delivered heat at design conditions. An 80% furnace must fire at 72,000 ÷ 0.80 = 90,000 Btu/h input to deliver it. A 96% furnace needs 72,000 ÷ 0.96 = 75,000 Btu/h input. The condensing unit burns 15,000 fewer Btu/h of fuel for the identical load — a 16.7% fuel reduction at design conditions, before counting any modulating or blower savings from Module 2.</p>`
    },
    {
      heading: "Field Failure Patterns Specific to Condensing Furnaces",
      html: `
<p>Close the module with the failures you will actually meet, so the theory has hooks to hang on:</p>
<ul>
<li><strong>Plugged secondary heat exchanger.</strong> Symptoms: pressure-switch lockouts, sometimes rollout or limit trips, gurgling, condensate backing up, and a furnace that runs briefly then dies. Debris and corrosion products choke the small passages. Some secondaries can be flushed; badly deteriorated ones are replaced — a big job you will see in this module's video.</li>
<li><strong>Trap and drain faults.</strong> A trap plugged with debris or algae, a failed condensate pump, or a frozen drain stops the furnace as surely as a dead igniter, usually with water where it does not belong.</li>
<li><strong>Vent icing and blockage.</strong> Sidewall terminations can frost over or drift shut with snow; the pressure switch reports the blockage as a draft fault (Module 3 covers termination errors).</li>
<li><strong>Corrosion from condensate leaks.</strong> A cracked collector box or leaking trap drips acidic water onto the inducer, board, or blower below — the water damage you find is often far downstream of the leak that caused it.</li>
</ul>
<div class="callout"><strong>Key idea:</strong> Diagnose a condensing furnace as two systems bolted together: a gas furnace (Module-by-module checks from HVAC 132) <em>and</em> a condensate/vent system with its own failure list. Techs who only bring the gas-furnace checklist to a 96% furnace miss half the machine.</div>
<p>Everything in this module returns in the lab: the pressure switch is the reporter for most of these faults, and reading its evidence correctly — instead of replacing it — is the professional skill this course is building.</p>`
    }
  ],
  keyTerms: [
    { term: "Condensing furnace", def: "A Category IV furnace (90%+ AFUE) that cools flue gases below their dew point inside a secondary heat exchanger, recovering latent heat and producing liquid condensate." },
    { term: "Secondary heat exchanger", def: "The finned, corrosion-resistant coil after the primary exchanger where flue gases are cooled enough for water vapor to condense, releasing latent heat to the airstream." },
    { term: "Latent heat of condensation", def: "The energy released when water vapor changes back to liquid; recovering it is what lifts a furnace from the low 80s into the 90s AFUE." },
    { term: "AFUE", def: "Annual Fuel Utilization Efficiency: the share of a fuel's energy delivered as useful heat over a season, expressed as a percentage." },
    { term: "Collector box", def: "The chamber that gathers flue gases (and condensate) between the heat exchangers and the inducer in a condensing furnace." },
    { term: "Condensate trap", def: "A water-sealed drain fitting that lets condensate leave the furnace while blocking flue gas from escaping through the drain line; required for proper draft proving." },
    { term: "Condensate neutralizer", def: "A cartridge of alkaline media (such as limestone) that raises the pH of acidic condensate before it enters drain piping; the media is consumed and must be renewed." },
    { term: "Acidic condensate", def: "The mildly acidic liquid formed when flue-gas water vapor condenses and dissolves carbon dioxide; dictates corrosion-resistant materials throughout the condensate path." },
    { term: "Direct vent (sealed combustion)", def: "A two-pipe arrangement in which exhaust is piped out and combustion air is piped in from outdoors, isolating the burner from indoor air and pressures." },
    { term: "Single-pipe venting", def: "A condensing-furnace installation where only the exhaust is piped and combustion air is drawn from the indoor space, which must meet combustion-air requirements." },
    { term: "Draft inducer", def: "The motor-driven fan that pulls flue gases through the heat exchangers and pushes them out the vent, creating the pressure the pressure switch proves." },
    { term: "Pressure switch", def: "A safety switch that proves adequate inducer draft before and during burner operation; on condensing furnaces it also reports vent, drain, and exchanger restrictions." },
    { term: "Category IV appliance", def: "A condensing, positive-pressure-vent appliance classification — the category of 90%+ furnaces vented in listed plastic pipe." },
    { term: "Dew point (flue gas)", def: "The temperature at which water vapor in the flue gases begins to condense; condensing furnaces are designed to operate below it, non-condensing furnaces above it." },
    { term: "Vent table", def: "The manufacturer's chart of maximum equivalent vent length by pipe size and model; every elbow consumes part of the allowance." },
    { term: "Plugged secondary", def: "Field shorthand for a secondary heat exchanger restricted by debris or corrosion products, presenting as pressure-switch faults, gurgling, and condensate backup." }
  ],
  video: {
    title: "This Lennox Furnace Couldn't Breathe… Plugged Heat Exchanger Replacement",
    embedUrl: "https://www.youtube.com/embed/bgWJfKKVhfg",
    note: "A real service video replacing a plugged secondary heat exchanger in a high-efficiency furnace. Watch how restricted secondary passages produce exactly the symptoms this module lists — overheating, rollout and pressure-switch faults, poor performance — and notice how much of the furnace has to come apart to reach the part, which is why diagnosis before teardown matters.",
    more: [
      { title: "How a Furnace Works", url: "https://www.youtube.com/watch?v=Eq3JQWWirJs" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A condensing furnace is rated 80,000 Btu/h input at 95% AFUE. How much heat does it deliver to the house, and how much is lost?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Delivered output = input × AFUE = 80,000 × 0.95 = <strong>76,000 Btu/h</strong>. Step 2: Losses = 80,000 − 76,000 = <strong>4,000 Btu/h</strong>, most of it leaving as cool exhaust and a small amount as jacket loss. Step 3: Compare with an 80% unit of the same input: 80,000 × 0.80 = 64,000 Btu/h delivered — the condensing furnace delivers 12,000 Btu/h more from the same fuel input.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> Explain, in your own words, why simply making a standard furnace's heat exchanger bigger does not produce a 95% AFUE furnace — and what problem appears if the flue gases get too cold in a furnace not designed for it.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Sensible heat recovery alone runs into the dew point. Once flue gases cool below it, water vapor condenses — that is where the big efficiency gain lives (latent heat), but it only helps if the appliance is built to collect and drain that water. Step 2: In a furnace not designed for condensing, the condensate forms in the exchanger and metal vent, where its mild acidity corrodes both, and the cool gases may no longer draft safely up a chimney. Step 3: A true condensing furnace adds a corrosion-resistant secondary exchanger, a trapped drain, and sealed plastic venting sized for cool, pressurized exhaust — the efficiency is a system design, not a bigger coil.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A customer's 92% furnace locks out on cold mornings with a pressure-switch code, runs fine by afternoon, and has its condensate drain routed through an unheated crawlspace. What is the most likely cause, and what two installation fixes address it?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The pattern — worst when coldest, self-clearing as the day warms — points to a <strong>frozen condensate drain or trap</strong>. Ice blocks drainage, condensate backs up into the trap/collector, draft proving fails, and the board locks out on the pressure switch. Step 2: Fix one: reroute or shorten the drain run through the freezing space, keeping continuous downhill slope with no sags that hold water. Step 3: Fix two: insulate the trap and drain and add listed heat tape where the manufacturer requires it for cold-space installs. Step 4: Verify by thawing, confirming free drainage, priming the trap, and running a full heat cycle while watching the drain flow.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A house's design heat load is 57,600 Btu/h. (a) What minimum delivered output must the furnace have? (b) If a 96% AFUE model is chosen, what input rating delivers exactly that output? (c) Why would the installer still verify the choice against the manufacturer's sizing guidance instead of math alone?</p>",
      solution: "<p><strong>Solution:</strong> (a) The furnace must deliver at least <strong>57,600 Btu/h</strong> at design conditions. (b) Input = output ÷ AFUE = 57,600 ÷ 0.96 = <strong>60,000 Btu/h input</strong>. (c) Step 1: AFUE is a seasonal efficiency rating, not a guaranteed output at every condition, and nameplate conventions vary by manufacturer. Step 2: The equipment must also satisfy airflow/temperature-rise limits and duct capacity (Module 11 covers sizing verification). Step 3: Manufacturers publish the allowable models for a given load — the math nominates the size; the manufacturer's data and the load calculation confirm it.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> During a maintenance visit on a two-pipe condensing furnace you find one vent joint that was never glued — it pulls apart by hand. Why is this a bigger deal on this furnace than a loose joint on an old natural-draft furnace's vent connector, and what do you do?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: A condensing furnace's vent is <strong>pressurized</strong> by the inducer — flue gas and acidic condensate are pushed <em>out</em> of any opening, into the house. Step 2: A natural-draft vent runs at negative pressure, so a small gap tends to draw room air <em>in</em> (still wrong, but the leak direction differs). Step 3: Action: shut the furnace down, remake the joint properly with the listed primer/cement for the pipe material (or replace the fitting), support the run, restore the slope back to the furnace, then run the unit and leak-check the joint and confirm normal condensate drainage before leaving.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> The condensate from a condensing furnace drains into an old cast-iron drain line, and the homeowner's plumber reports the pipe is corroding. What is happening and what device addresses it? Include the maintenance obligation that comes with the device.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Furnace condensate is mildly acidic (dissolved CO₂ forms a weak acid), and steady acidic flow attacks cast iron over time. Step 2: A <strong>condensate neutralizer</strong> — a cartridge of limestone-type media installed in the drain line — raises the pH toward neutral before the water reaches the metallic piping. Step 3: The media is <em>consumed</em> doing this, so the cartridge must be inspected and refilled/replaced on a maintenance schedule; an exhausted neutralizer is just a tube the acid flows through. Step 4: Confirm local code and the furnace manual — some jurisdictions require neutralization, and some drain materials make it unnecessary.</p>"
    }
  ],
  quiz: [
    {
      q: "The efficiency jump from an 80% furnace to a 96% furnace comes mainly from:",
      choices: ["A larger blower motor", "Recovering latent heat by condensing flue-gas water vapor in a secondary heat exchanger", "Burning gas at a higher manifold pressure", "A taller vent pipe"],
      answer: 1,
      explanation: "Correct: (b). Condensing the water vapor in the flue gas releases latent heat that a non-condensing furnace must throw away to keep its vent dry. (a) Blower size affects electrical use and airflow, not combustion efficiency class. (c) Manifold pressure is set to the rating plate (3.5 in. w.c. for natural gas); raising it overfires the furnace and lowers efficiency and safety. (d) Vent height matters for natural draft, not for an induced-draft condensing appliance."
    },
    {
      q: "A 100,000 Btu/h input furnace at 90% AFUE delivers how much heat to the house?",
      choices: ["90,000 Btu/h", "100,000 Btu/h", "110,000 Btu/h", "10,000 Btu/h"],
      answer: 0,
      explanation: "Correct: (a). Output = input × AFUE = 100,000 × 0.90 = 90,000 Btu/h. (b) is the input, not the delivered output — no furnace delivers 100% of its fuel energy. (c) exceeds the input, which is impossible. (d) is the loss (100,000 − 90,000), not the output."
    },
    {
      q: "Why must a condensing furnace's secondary heat exchanger and condensate path be corrosion-resistant?",
      choices: ["Because the blower blows acidic air", "Because the condensate that forms there is mildly acidic", "Because PVC vent pipe gives off acid", "Because natural gas contains sulfuric acid"],
      answer: 1,
      explanation: "Correct: (b). Water condensing from flue gas dissolves carbon dioxide and forms a weak acid, so the secondary exchanger, collector, trap, and drain use stainless steel and plastics. (a) The circulating airstream is ordinary house air. (c) PVC is used because it resists the condensate, not because it produces acid. (d) The acidity develops in the condensate, not in the fuel supply."
    },
    {
      q: "The purpose of the condensate trap on a condensing furnace is to:",
      choices: ["Filter dirt out of the condensate", "Hold a water seal so flue gas cannot escape through the drain line while condensate drains away", "Raise the pH of the condensate", "Pump condensate up to the drain"],
      answer: 1,
      explanation: "Correct: (b). The trap's water seal blocks the pressurized flue-gas path through the drain while letting liquid out; an unprimed or missing trap can also prevent the pressure switch from proving draft. (a) Debris does collect in traps (and plugs them), but filtering is not the trap's purpose. (c) Raising pH is the neutralizer's job. (d) Lifting condensate is a condensate pump's job — a trap is passive."
    },
    {
      q: "In a two-pipe direct-vent condensing installation, the second pipe:",
      choices: ["Vents the condensate drain", "Supplies outdoor combustion air to the burner, sealing combustion from the house", "Is a spare exhaust in case the first plugs", "Carries refrigerant to the outdoor unit"],
      answer: 1,
      explanation: "Correct: (b). Direct venting pipes combustion air in from outdoors so the burner never uses house air and cannot be backdrafted by indoor pressure changes. (a) Condensate leaves by the drain line, not a vent pipe. (c) There is one exhaust pipe; the pair is intake + exhaust, not two exhausts. (d) A furnace has no refrigerant circuit — that describes a heat pump or air conditioner line set."
    },
    {
      q: "A condensing furnace repeatedly locks out on the pressure switch, gurgles when it runs, and has water backed up in the collector box. The FIRST things to suspect are:",
      choices: ["A failed pressure switch and a bad igniter", "A restricted secondary heat exchanger or a plugged condensate trap/drain", "Low gas pressure and a dirty flame sensor", "A cracked primary heat exchanger"],
      answer: 1,
      explanation: "Correct: (b). Gurgling plus standing water plus draft faults is the classic water/restriction picture: a plugged trap or restricted secondary raises the pressure drop the inducer must overcome, and the pressure switch — doing its job — refuses to prove. (a) The igniter is downstream of the pressure switch in the sequence and would not cause gurgling; the switch is the reporter, not the culprit. (c) Those faults present differently (weak flame, flame-proving failures) without water backup. (d) A cracked primary is a serious safety finding but does not explain water standing in the collector."
    },
    {
      q: "Why can a condensing furnace be vented in PVC while an 80% furnace cannot?",
      choices: ["PVC is cheaper, and codes allow it anywhere", "The condensing furnace's exhaust is cool enough for plastic pipe; the 80% furnace's exhaust is far too hot", "PVC glows to warn of overheating", "80% furnaces are legally required to use chimneys"],
      answer: 1,
      explanation: "Correct: (b). After the secondary exchanger strips out the heat, condensing exhaust is cool — within plastic pipe's temperature rating. An 80% furnace's flue gases would soften and destroy plastic venting. (a) Cost is not the criterion; material must be listed for the appliance's flue-gas temperature and category. (c) PVC gives no such warning. (d) 80% furnaces commonly vent in metal B-vent, not only chimneys — the material follows the temperature and category, not a chimney rule."
    },
    {
      q: "A neutralizer cartridge on a furnace condensate line:",
      choices: ["Never needs attention once installed", "Contains media that is gradually consumed raising condensate pH, so it must be inspected and renewed on maintenance", "Removes the need for a condensate trap", "Is required to make the furnace condense"],
      answer: 1,
      explanation: "Correct: (b). The alkaline media neutralizes acid by being used up; an exhausted cartridge no longer protects downstream piping, which is why it belongs on the maintenance checklist. (a) is the common and costly assumption — the media depletes silently. (c) The trap's water seal is still required regardless of neutralization. (d) Condensing happens in the secondary exchanger because of temperatures, not because of anything in the drain line."
    }
  ],
  studyGuide: `
<h3>Module 1 — Condensing Furnaces: Quick Reference</h3>
<p><strong>The 90% secret:</strong> cool flue gas below its dew point in a <strong>secondary heat exchanger</strong>; condensing water vapor releases <strong>latent heat</strong>. 80% AFUE = mid-efficiency (Category I, metal vent, gases kept hot and dry). 90%+ = condensing (Category IV, plastic vent).</p>
<div class="formula">Delivered output = Input × AFUE &nbsp;•&nbsp; 100,000 × 0.96 = 96,000 Btu/h delivered, 4,000 lost</div>
<p><strong>Gas path:</strong> burners → primary HX → collector box → inducer → secondary HX → PVC vent. Return air meets the secondary first, then the primary.</p>
<p><strong>Water path:</strong> condensate forms in the secondary, collects in the collector box, exits through a <strong>trapped</strong> drain (water seal blocks flue gas). Watch for: plugged trap, frozen drain in cold spaces (insulate/heat tape, continuous slope), failed condensate pump, exhausted <strong>neutralizer</strong> media. Condensate is mildly acidic → stainless/plastic materials only.</p>
<p><strong>Venting:</strong> two-pipe direct vent = sealed combustion (outdoor air piped in). Single-pipe = room air for combustion. Plastic vent is <em>pressurized</em> — every joint solvent-welded, slope back to the furnace, length inside the manufacturer's vent table.</p>
<p><strong>Signature faults:</strong> pressure-switch lockouts + gurgling + water backup = restricted secondary or drain problem first, switch last.</p>
`
};
