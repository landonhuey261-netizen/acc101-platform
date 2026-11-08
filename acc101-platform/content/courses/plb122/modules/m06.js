// Plumbing 122 - Module 6: Installing & Testing Water Supply Piping
module.exports = {
  number: 6,
  slug: "installing-testing-water-supply",
  title: "Installing & Testing Water Supply Piping",
  estTime: "3–4 hours",
  objectives: [
    "List the correct installation sequence for water supply piping: measure, cut, ream, dry-fit, join, test, flush, disinfect.",
    "Explain how to join copper by soldering, PEX by crimping, and CPVC by solvent cement.",
    "Explain why a pressure test is run before concealment and how to read a pass or fail.",
    "Describe how to flush a new water supply system and why disinfection matters.",
    "Explain how to support water supply piping and protect it where it passes through framing."
  ],
  sections: [
    {
      heading: "The Sequence: Measure Twice, Join Once",
      html: `
<p>Water supply piping is installed in a fixed order, and skipping a step costs more than the time it saves. <strong>Step 1: measure and mark.</strong> Measure the run, mark the pipe, and plan the fittings before cutting. <strong>Step 2: cut and ream.</strong> Cut square and ream the inside edge smooth — a burr left inside a copper pipe creates turbulence and noise, and a burr left on PEX can cut the seal. <strong>Step 3: dry-fit.</strong> Assemble the run without joining it, and confirm every length, turn, and fixture location. <strong>Step 4: join.</strong> Make the permanent joints, working from the main outward. <strong>Step 5: pressure test.</strong> Prove the system is tight before any wall closes. <strong>Step 6: flush and disinfect.</strong> Clear construction debris and make the water safe before the fixtures are used.</p>
<p>Dry-fitting deserves emphasis because it is the step beginners skip. A joint made wrong costs a fitting and a few minutes; a run measured wrong after joining costs pipe, fittings, and a repair in a finished wall. The dry fit is where you catch the elbow that points the wrong way and the branch that lands six inches from the fixture stub.</p>
<p>Plan the route before you cut anything. Hot and cold lines run parallel, cold below hot where they share a wall cavity (heat rises, and a hot line above a cold line warms the cold water), and both are kept clear of DWV piping and electrical. Mark stud locations and drill or notch only where the code allows, with nail plates where pipe sits close to the framing face.</p>
<div class="callout"><strong>Key idea:</strong> Measure, cut, ream, dry-fit, join, test, flush, disinfect. The dry fit is the cheapest quality control in plumbing — use it on every run.</div>`
    },
    {
      heading: "Joining: Solder, Crimp, and Cement",
      html: `
<p><strong>Copper</strong> is joined by soldering (sweating). Clean the pipe end and the fitting socket to bright metal with sandcloth or a brush, apply flux, assemble, and heat the joint evenly until the solder melts and flows into the socket by capillary action. The two rules that decide a good solder joint: the metal must be clean and fluxed, and the joint must be dry. Water in the pipe absorbs the heat and prevents the solder from flowing — a joint soldered with water inside it will leak. Never overheat the joint; burned flux turns black and stops working.</p>
<p><strong>PEX</strong> is joined by crimping (or expanding, depending on the system). Slide the crimp ring over the pipe, push the pipe fully onto the fitting, position the ring, and squeeze it with the crimp tool. Check every crimp with a <strong>go/no-go gauge</strong>: the go side must slide over the ring and the no-go side must not. A crimp that fails the gauge is cut out and remade with a new ring — never tightened with pliers, never taped, never left to hope.</p>
<p><strong>CPVC</strong> is joined by solvent cement, like DWV pipe but with a cement rated for hot water. Prime both surfaces, apply cement, push together with a quarter turn, and hold for a few seconds. Keep the cement can closed between joints and work in a ventilated area — the fumes are strong and the cement is flammable.</p>
<div class="callout"><strong>Key idea:</strong> Every joining method has one unforgiving rule: copper must be clean, fluxed, and dry; PEX must pass the go/no-go gauge; CPVC must be primed and cemented. A failed joint is cut out and remade — never patched.</div>`
    },
    {
      heading: "The Pressure Test: Proof Before Concealment",
      html: `
<p>Before any wall closes, the water supply system is <strong>tested under pressure and proved tight</strong>. The test is run at a pressure set by the local code and the authority having jurisdiction — follow the local AHJ's number, which is typically well above normal working pressure — and held long enough to prove every joint. Every joint must be visible and accessible during the test, and the gauge must hold steady. A falling gauge means a leak somewhere, even if no water is visible yet.</p>
<p>Run the test in stages when the system is large: test the rough-in before fixtures are set, so a leaking joint is still reachable. Cap or plug every open end, pressurize slowly, and walk the system joint by joint while it holds. Mark any leak, depressurize, repair it, and retest from the beginning — a repair made under pressure is not a repair.</p>
<p>Two safety rules. First, never exceed the test pressure the code or the pipe manufacturer allows — over-pressurizing a system can split pipe and injure anyone nearby. Second, keep people clear of the piping while it is under test pressure, and never test with compressed air unless the code and the pipe manufacturer allow it; water is the normal test medium for supply piping because it is nearly incompressible and stores little energy.</p>
<div class="callout"><strong>Key idea:</strong> Test under pressure before concealment, with every joint visible. A falling gauge is a failure even with no visible water — find it, repair it, and retest from the beginning.</div>`
    },
    {
      heading: "Flush and Disinfect: Making the Water Safe",
      html: `
<p>A pressure test proves the system is tight. It does not prove the water is clean. New piping contains flux, solder particles, cutting oil, dust, and debris from construction. Before the fixtures are used, the system is <strong>flushed</strong>: every outlet is opened and run until the water is clear, starting from the fixture nearest the main and working outward, so debris is carried out instead of pushed deeper.</p>
<p>After flushing, the system is <strong>disinfected</strong> where the code or the authority having jurisdiction requires it — typically with a chlorine solution at a concentration and contact time set by the local rules, followed by a second flush to clear the disinfectant. Disinfection matters most on new construction and on repairs that opened the system to contamination. Never skip it because the water looks clear; bacteria are invisible.</p>
<p>Two details finish the job. Aerators and showerheads are removed before flushing so debris does not clog them, then reinstalled after. And the water heater is flushed separately — sediment and debris that settle in the tank will shorten its life and cloud the hot water.</p>
<div class="callout"><strong>Key idea:</strong> Flush until the water runs clear, then disinfect where required, then flush again. A tight system is not a clean system — prove both before the fixtures are used.</div>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Sequence: measure, cut, ream, dry-fit, join, test, flush, disinfect.</li>
<li>Copper: clean, fluxed, and dry before soldering. PEX: crimp and check with a go/no-go gauge. CPVC: prime and solvent-cement.</li>
<li>Pressure test before concealment, with every joint visible; a falling gauge is a failure.</li>
<li>Flush until clear, disinfect where required, flush again; remove aerators before flushing.</li>
<li>Support piping per the manufacturer's spacing; protect pipe where it passes through framing with nail plates.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Soldering a joint with water still in the pipe. The water absorbs the heat, the solder never flows, and the joint leaks — dry the pipe or use a bread plug to hold the water back, then solder.</div>
<div class="callout"><strong>Common mistake:</strong> Skipping the go/no-go gauge on PEX crimps. A crimp that looks right can still be loose, and the only way to know is the gauge — check every crimp, not a sample.</div>
<p><strong>Ready-to-Work link:</strong> NCCER Plumbing Level 1 expects you to install and test water supply piping. If you can run a copper joint, check a PEX crimp, and read a pressure test, you have this module.</p>`
    }
  ],
  keyTerms: [
    { term: "Dry-fit", def: "Assembling pipe and fittings without joining them, to confirm lengths and turns before making permanent joints." },
    { term: "Ream", def: "Smoothing the inside edge of a cut pipe to remove the burr left by cutting." },
    { term: "Soldering (sweating)", def: "Joining copper by cleaning and fluxing the joint, heating it, and letting solder flow in by capillary action." },
    { term: "Flux", def: "A chemical paste applied to copper before soldering that cleans the metal and lets solder flow and bond." },
    { term: "Capillary action", def: "The force that draws molten solder into the narrow gap between a copper pipe and fitting." },
    { term: "Crimp ring", def: "A metal ring squeezed onto a PEX joint with a crimp tool to seal the pipe to the fitting." },
    { term: "Go/no-go gauge", def: "A gauge that checks a PEX crimp: the go side must slide over the ring and the no-go side must not." },
    { term: "Solvent cement", def: "A chemical adhesive that softens and fuses plastic pipe and fittings; CPVC cement is rated for hot water." },
    { term: "Pressure test", def: "Pressurizing a new water supply system and holding it to prove every joint is tight before concealment." },
    { term: "Authority having jurisdiction (AHJ)", def: "The local code official or inspector whose rules and test pressures govern the job." },
    { term: "Flushing", def: "Running water through a new system from every outlet until it is clear of flux, debris, and construction contamination." },
    { term: "Disinfection", def: "Treating a new or opened water system with chlorine at a set concentration and contact time to kill bacteria." },
    { term: "Nail plate", def: "A steel plate nailed over framing to protect pipe that passes close to the face of a stud or joist." },
    { term: "Concealment", def: "Covering piping with walls, floors, or ceilings; testing must happen before concealment." },
    { term: "Cold below hot", def: "The routing practice of running cold-water lines below hot-water lines in a shared wall cavity so heat does not warm the cold water." },
    { term: "Aerator", def: "A screen on a faucet outlet that shapes the stream; removed before flushing so debris does not clog it." }
  ],
  video: {
    title: "How To Pressure Test Plumbing And Hydrostatic Test Plumbing! (for plumbing inspection)",
    embedUrl: "https://www.youtube.com/embed/p3LUGlH10ek",
    note: "How a pressure test is set up and run for inspection — watch the gauge, the plugs, and the walk-through, then compare with the test sequence in this module.",
    more: [
      { title: "Water Supply Piping (PEX Home Run Manifold)", url: "https://www.youtube.com/watch?v=xklSgUJly7A" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> List the installation sequence for water supply piping in order, and name the step most beginners skip.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Measure and mark. Step 2: Cut and ream. Step 3: Dry-fit. Step 4: Join. Step 5: Pressure test. Step 6: Flush and disinfect. The step beginners skip is the dry fit — and it is the cheapest quality control in plumbing, catching wrong lengths and wrong-way elbows while they are still free to fix.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A copper joint leaks after soldering. The pipe had water in it during soldering. Explain why the joint failed and how to do it right.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Water in the pipe absorbs the heat, so the joint never reaches soldering temperature and the solder never flows and bonds. Step 2: Drain the line fully before soldering, or hold the water back with a bread plug. Step 3: Clean the pipe and fitting to bright metal, flux both, heat evenly, and let the solder flow in by capillary action. Step 4: Cut out the failed joint and remake it — never patch a bad solder joint.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A PEX crimp fails the go/no-go gauge: the no-go side slides over the ring. What do you do, and what do you never do?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Cut out the fitting and remake the joint with a new crimp ring. Step 2: Check the new crimp with the gauge before moving on. Step 3: Never tighten a crimp ring with pliers, never tape over it, and never leave a failed crimp in place hoping it holds — a crimp that fails the gauge will leak under pressure.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A pressure test gauge falls slowly over 30 minutes but no water is visible at any joint. What is the verdict and the next step?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Verdict — fail. A falling gauge means a leak somewhere, even with no visible water. Step 2: Walk the system joint by joint while it holds pressure, checking the lowest joints and the ones behind framing first. Step 3: Mark the leak, depressurize, repair it, and retest from the beginning. Step 4: Never call a slow drop a pass — it will become a fast leak after the walls close.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A new house's water is cloudy and gritty at the faucets on move-in day. What was skipped, and what is the fix?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The system was not flushed (and possibly not disinfected) before the fixtures were used. Step 2: Flux, solder particles, and construction debris are still in the pipes. Step 3: Fix — remove the aerators and showerheads, flush every outlet until the water runs clear, working from the fixture nearest the main outward, then disinfect where required and flush again. Step 4: Reinstall the aerators and showerheads after flushing.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A helper wants to close the walls before the pressure test to save a day. Explain why this is wrong and what the code requires.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Testing must happen before concealment, with every joint visible and accessible. Step 2: A leak hidden behind a wall will soak framing and drywall for weeks before anyone notices. Step 3: The inspector cannot approve a system they cannot see tested. Step 4: The day saved now becomes a week of demolition and repair later — test first, close second.</p>"
    }
  ],
  quiz: [
    {
      q: "The correct sequence for a water supply rough-in is:",
      choices: ["Solder first, then cut and dry-fit", "Cut and dry-fit, then join, then pressure test, then flush and disinfect", "Pressure test, then cut, then join", "Flush and disinfect, then pressure test"],
      answer: 1,
      explanation: "Correct: (b). Measure and dry-fit, join permanently, prove tightness with a pressure test, then flush and disinfect. (a) Soldering before dry-fitting wastes work. (c) Testing before joining is impossible. (d) Disinfecting before proving tightness would contaminate a leaking system."
    },
    {
      q: "Before soldering a copper joint, the pipe and fitting must be:",
      choices: ["Heated until the solder melts", "Cleaned and fluxed so the solder can flow and bond", "Painted to prevent corrosion", "Filled with water to keep them cool"],
      answer: 1,
      explanation: "Correct: (b). Clean, bright metal plus flux is what lets solder wet and bond. (a) Heating alone on dirty metal produces a cold joint. (c) Paint prevents soldering. (d) Water in the joint blocks soldering entirely."
    },
    {
      q: "A PEX crimp connection fails a pressure test at one joint. The correct response is to:",
      choices: ["Tighten the crimp ring with pliers", "Cut out the fitting, check the ring and the go/no-go gauge, and re-crimp with a new ring", "Wrap the joint in tape", "Raise the test pressure to force a seal"],
      answer: 1,
      explanation: "Correct: (b). A failed crimp is cut out and remade with a new ring and a gauge check. (a) Pliers cannot re-crimp a ring. (c) Tape does not hold pressure. (d) Higher pressure makes the leak worse."
    },
    {
      q: "A copper joint soldered with water still in the pipe most likely fails because:",
      choices: ["The solder was too hot", "The water kept the joint below soldering temperature, so the solder never flowed and bonded", "The pipe was too clean", "The flux was too fresh"],
      answer: 1,
      explanation: "Correct: (b). Water in the pipe absorbs the heat and prevents the joint from reaching soldering temperature. (a) Excess heat is not the failure here. (c) Clean metal is required, not a problem. (d) Fresh flux is correct practice."
    },
    {
      q: "After a pressure test passes, the water supply system is flushed to:",
      choices: ["Remove flux, debris, and construction contamination before the fixtures are used", "Pressurize the system further", "Test the water heater", "Fill the DWV traps"],
      answer: 0,
      explanation: "Correct: (a). Flushing clears solder, flux, and debris so the water is clean for use. (b) Flushing is at normal pressure, not a test. (c) The heater is tested separately. (d) DWV traps are filled by fixture use, not by supply flushing."
    },
    {
      q: "The pressure test on a new water supply system is run:",
      choices: ["After the walls are closed", "Before concealment, with every joint visible", "Only if the inspector asks for it", "After the fixtures are used for a month"],
      answer: 1,
      explanation: "Correct: (b). Testing happens before concealment so every joint can be seen and repaired. (a) A leak behind a closed wall soaks framing unseen. (c) Testing is required, not optional. (d) A month of use would let a leak do its damage first."
    },
    {
      q: "A go/no-go gauge is used to check:",
      choices: ["The water pressure at a fixture", "A PEX crimp ring", "The temperature of a water heater", "The slope of a drain pipe"],
      answer: 1,
      explanation: "Correct: (b). The gauge checks whether a crimp ring is squeezed to the right size. (a) A pressure gauge measures pressure. (c) A thermometer measures temperature. (d) A level measures slope."
    },
    {
      q: "Aerators and showerheads are removed before flushing because:",
      choices: ["They are not part of the water system", "Debris in the pipes would clog them", "They must be disinfected separately", "They increase the water pressure"],
      answer: 1,
      explanation: "Correct: (b). Flushing carries debris out, and aerators would catch it and clog. (a) They are part of the fixture. (c) They are cleaned by the flush, not disinfected separately. (d) Aerators restrict flow slightly; they do not increase pressure."
    }
  ],
  studyGuide: `
<h3>Module 6 — Installing & Testing Water Supply Piping: Quick Reference</h3>
<p><strong>Core idea:</strong> Join once, prove it, then clean it. The sequence is measure, cut, ream, dry-fit, join, test, flush, disinfect — and the test happens before the walls close.</p>
<p><strong>Joining:</strong> Copper — clean, fluxed, and dry, then solder. PEX — crimp and check with a go/no-go gauge. CPVC — prime and solvent-cement.</p>
<p><strong>Pressure test:</strong> Run at the local AHJ's pressure, before concealment, every joint visible. A falling gauge is a failure even with no visible water — repair and retest from the beginning.</p>
<p><strong>Flush and disinfect:</strong> Remove aerators first, flush every outlet until clear (nearest the main outward), disinfect where required, flush again.</p>
<p><strong>Routing:</strong> Cold below hot in shared cavities; protect pipe through framing with nail plates; support per the manufacturer's spacing.</p>
<p><strong>Self-check:</strong> A PEX crimp fails the go/no-go gauge. What is the only correct fix? (Answer: cut it out and remake it with a new ring — never pliers, never tape.)</p>
`
};
