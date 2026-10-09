// HVAC 245 — Load & Duct Sizing Worksheet (classic grid format, like ACC 101 labs).
// All expected values are derived from the givens in the same worksheet:
//   Conduction load  Q = U x A x dT
//   Room airflow     CFM = sensible load / (1.08 x dT), with dT = 20 degF (75 degF room, 55 degF supply)
// All U-factors, areas, and temperatures are teaching-example values stated in the worksheet itself.

module.exports = [
  {
    id: "load-duct-sizing",
    title: "Load & Duct Sizing Worksheet",
    introHtml: "<p><strong>Job ticket:</strong> Design-stage worksheet for a one-story teaching-example house (1,000 sq ft floor area). Winter design condition for this example: 70&deg;F indoors, 0&deg;F outdoors, so the above-grade &Delta;T is 70&deg;F; the floor sits over an unheated space at 30&deg;F, so its &Delta;T is 40&deg;F. Summer room airflow uses a 20&deg;F supply-air temperature difference (75&deg;F room, 55&deg;F supply). Every U-factor and area below is a stated teaching-example value — on a real job you would take assembly values, design temperatures, and procedures from the current ACCA manuals, approved software, and local code, never from memory.</p><p><strong>Formulas:</strong> Heat loss Q = U &times; A &times; &Delta;T. Room CFM = sensible load &divide; (1.08 &times; &Delta;T). The 1.08 factor is the standard-air approximation taught in Module 2.</p>",
    taskHtml: "<p><strong>Step 0 — Safety first.</strong> Design is a safety task, not just a comfort task. Before you size anything, confirm the design-stage safety decisions: (1) never undersize the return path — a starved return raises static pressure, cuts airflow, and can overheat a furnace heat exchanger or freeze a cooling coil; (2) respect required clearances around fuel-burning equipment and its venting, and confirm the space has the combustion air the appliance listing and local code require — a tight, well-sealed design that starves a furnace or water heater of combustion air can spill flue gases, including carbon monoxide, into the house; (3) if any safety decision below cannot be confirmed, the correct design answer is to stop and resolve it, not to finish the arithmetic. Row 1 is that safety check — it must be answered before the load rows count.</p><ol><li>Row 1: enter <strong>1</strong> in the first data column to confirm the combustion-air and clearance check has been made and passed for this design.</li><li>Rows 2–6: compute each assembly's heat loss with Q = U &times; A &times; &Delta;T and enter it in the <strong>Load (Btu/h)</strong> column.</li><li>Row 7: total the five heat-loss rows.</li><li>Rows 8–11: each room's sensible cooling load is given. Compute its design airflow with CFM = load &divide; (1.08 &times; 20) and enter it in the <strong>Airflow (CFM)</strong> column.</li><li>Rows 12–13: total the room airflows, then confirm the main trunk carries that same total.</li></ol>",
    headers: ["Component / Room", "Area (sq ft)", "U-Factor", "ΔT (°F)", "Load (Btu/h)", "Airflow (CFM)"],
    rows: [
      { label: "STEP 0 SAFETY — Combustion-air opening and equipment clearances verified for this design (enter 1 = verified and clear, 0 = not verified)", cells: ["", "", "", "", ""], inputs: [
        { col: 1, key: "safety_combustion_air", expected: 1, hint: "Enter 1 only when combustion air and clearances are verified. A design that seals a house tighter without confirming combustion air for fuel-burning appliances risks flue-gas spillage and carbon monoxide — this check comes before any sizing math." } ] },
      { label: "Exterior walls (net)", cells: ["800", "0.07", "70", "", ""], inputs: [
        { col: 4, key: "loss_walls", expected: 3920, hint: "Q = U x A x dT = 0.07 x 800 x 70 = 3,920 Btu/h." } ] },
      { label: "Ceiling (to vented attic)", cells: ["1,000", "0.05", "70", "", ""], inputs: [
        { col: 4, key: "loss_ceiling", expected: 3500, hint: "Q = 0.05 x 1,000 x 70 = 3,500 Btu/h." } ] },
      { label: "Floor (over unheated space at 30°F)", cells: ["1,000", "0.06", "40", "", ""], inputs: [
        { col: 4, key: "loss_floor", expected: 2400, hint: "The floor's dT is 70 - 30 = 40 degF, not 70. Q = 0.06 x 1,000 x 40 = 2,400 Btu/h." } ] },
      { label: "Windows (all orientations combined)", cells: ["120", "0.50", "70", "", ""], inputs: [
        { col: 4, key: "loss_windows", expected: 4200, hint: "Q = 0.50 x 120 x 70 = 4,200 Btu/h. Note how a small area with a high U-factor produces the largest single loss." } ] },
      { label: "Exterior doors", cells: ["40", "0.30", "70", "", ""], inputs: [
        { col: 4, key: "loss_doors", expected: 840, hint: "Q = 0.30 x 40 x 70 = 840 Btu/h." } ] },
      { label: "TOTAL design heat loss (sum of the five rows above)", cells: ["", "", "", "", ""], inputs: [
        { col: 4, key: "loss_total", expected: 14860, hint: "3,920 + 3,500 + 2,400 + 4,200 + 840 = 14,860 Btu/h. This is the conduction portion of the heating load for this teaching example." } ] },
      { label: "Living room — sensible cooling load 6,480 Btu/h, ΔT 20°F", cells: ["—", "—", "20", "6,480", ""], inputs: [
        { col: 5, key: "cfm_living", expected: 300, hint: "CFM = 6,480 / (1.08 x 20) = 6,480 / 21.6 = 300 CFM." } ] },
      { label: "Bedroom 1 — sensible cooling load 4,320 Btu/h, ΔT 20°F", cells: ["—", "—", "20", "4,320", ""], inputs: [
        { col: 5, key: "cfm_bed1", expected: 200, hint: "CFM = 4,320 / 21.6 = 200 CFM." } ] },
      { label: "Bedroom 2 — sensible cooling load 3,240 Btu/h, ΔT 20°F", cells: ["—", "—", "20", "3,240", ""], inputs: [
        { col: 5, key: "cfm_bed2", expected: 150, hint: "CFM = 3,240 / 21.6 = 150 CFM." } ] },
      { label: "Kitchen — sensible cooling load 5,400 Btu/h, ΔT 20°F", cells: ["—", "—", "20", "5,400", ""], inputs: [
        { col: 5, key: "cfm_kitchen", expected: 250, hint: "CFM = 5,400 / 21.6 = 250 CFM." } ] },
      { label: "TOTAL design airflow (sum of the four room rows)", cells: ["", "", "", "19,440", ""], inputs: [
        { col: 5, key: "cfm_total", expected: 900, hint: "300 + 200 + 150 + 250 = 900 CFM. Cross-check: total sensible load 19,440 / 21.6 = 900 CFM — the two routes agree." } ] },
      { label: "Main supply trunk — must carry the total design airflow", cells: ["", "", "", "", ""], inputs: [
        { col: 5, key: "cfm_trunk", expected: 900, hint: "The trunk carries every branch's air: 900 CFM. In Module 6 this CFM, with the design friction rate, is what sets the trunk size — an undersized trunk here is the duct version of the Step 0 return warning." } ] }
    ],
    passing: 70,
    csvFilename: "load-duct-sizing-worksheet.csv",
    csv: "Component / Room,Area (sq ft),U-Factor,dT (F),Load (Btu/h),Airflow (CFM)\nSTEP 0 SAFETY - Combustion-air and clearances verified (1=yes),,,,,\nExterior walls (net),800,0.07,70,,\nCeiling (to vented attic),1000,0.05,70,,\nFloor (over unheated space at 30F),1000,0.06,40,,\nWindows (all orientations combined),120,0.50,70,,\nExterior doors,40,0.30,70,,\nTOTAL design heat loss,,,,,\nLiving room (sensible 6480 Btu/h),,,20,6480,\nBedroom 1 (sensible 4320 Btu/h),,,20,4320,\nBedroom 2 (sensible 3240 Btu/h),,,20,3240,\nKitchen (sensible 5400 Btu/h),,,20,5400,\nTOTAL design airflow,,,,19440,\nMain supply trunk,,,,,"
  }
];
