// BUS 121 - Module 11: Statistical Quality: Control Charts & Process Capability
module.exports = {
  number: 11,
  slug: "statistical-quality-control-charts-capability",
  title: "Statistical Quality: Control Charts & Process Capability",
  estTime: "3–4 hours",
  objectives: [
    "Build a control chart with a center line and 3-sigma control limits.",
    "Distinguish common-cause variation from special-cause variation.",
    "Read a control chart: spot out-of-control points and non-random patterns.",
    "Compute Cp and Cpk and explain what each says about a process.",
    "Explain when to fix the process and when to leave it alone."
  ],
  sections: [
    {
      heading: "Two Kinds of Variation",
      html: `
<p>Every process varies. Some variation is <strong>common cause</strong> — the small, everyday wobble built into the process: slightly different raw materials, a tired operator at 4 p.m., a machine warming up. Some variation is <strong>special cause</strong> — a broken tool, a wrong setting, a bad batch of material. The distinction matters because the responses are opposites: common-cause variation is fixed by changing the process itself; special-cause variation is fixed by finding and removing the specific cause. Chasing common-cause variation as if it were a specific fault — adjusting a machine after every single reading — makes the process worse, not better. This is the central lesson of statistical quality control.</p>
<p><strong>Worked example:</strong> A filling machine is supposed to fill bottles to 50 ml with a standard deviation of 2 ml. Individual fills of 49, 51, 48, 52 are common-cause variation — the process wobbling around its mean. A fill of 38 ml is special cause: something specific went wrong, and it should be investigated, not averaged away.</p>
<div class="callout"><strong>Key idea:</strong> Common-cause variation belongs to the process; special-cause variation belongs to a specific event. Fix the process for the first, find the culprit for the second — and never confuse them.</div>`
    },
    {
      heading: "Control Charts: Center Line and 3-Sigma Limits",
      html: `
<p>A <strong>control chart</strong> plots measurements in time order with three lines: a <strong>center line</strong> at the process mean, and <strong>upper and lower control limits (UCL and LCL)</strong> at the mean ± 3 standard deviations. The 3-sigma limits are the key: if the process is stable, about 99.7% of points fall inside them. A point outside the limits is strong evidence of a special cause — it is too far out to be ordinary wobble.</p>
<p><strong>Worked example:</strong> The filling process has mean 50 ml and standard deviation 2 ml. UCL = 50 + 3 × 2 = <strong>56</strong>. LCL = 50 − 3 × 2 = <strong>44</strong>. A reading of 57 ml is out of control — stop and investigate. A reading of 55 ml is inside the limits — the process is doing what it always does, and adjusting it would add variation rather than remove it.</p>`
    },
    {
      heading: "Reading a Control Chart: Patterns That Matter",
      html: `
<p>A single point outside the limits is the loudest signal, but quieter patterns also matter. <strong>Seven points in a row on one side of the center line</strong> is a run — the process has shifted even though no point crossed a limit. <strong>Seven points trending steadily up or down</strong> is a trend — something is drifting. <strong>Points hugging the center line</strong> can mean the data are being rounded, or that the process was "adjusted" after every reading. The rule is to look for non-randomness: a stable process produces points that bounce randomly around the center line, inside the limits, with no pattern.</p>
<p>The chart is a conversation with the process, not a verdict on a single point. One reading of 55 ml is not a crisis; eight readings climbing from 50 to 55 is a drift that will become a crisis. The chart turns a stream of numbers into a story a manager can act on — and, just as importantly, tells the manager when to do nothing.</p>
<div class="callout"><strong>Key idea:</strong> A control chart's most valuable message is often "leave it alone." Most tampering — adjusting a stable process after every reading — increases variation.</div>`
    },
    {
      heading: "Process Capability: Cp and Cpk",
      html: `
<p>Control charts answer "is the process stable?" <strong>Process capability</strong> answers a different question: "is the process good enough?" — that is, does its output fall inside the specification limits the customer requires? <strong>Cp</strong> measures the process's potential: Cp = (USL − LSL) ÷ (6σ), the width of the specification divided by the width of the process. <strong>Cpk</strong> measures actual performance: it takes the smaller of (USL − mean) ÷ (3σ) and (mean − LSL) ÷ (3σ), so it penalizes a process that is off-center.</p>
<p><strong>Worked example:</strong> Specifications are 44 to 56 ml (USL 56, LSL 44), and the process has σ = 2. Cp = (56 − 44) ÷ (6 × 2) = 12 ÷ 12 = <strong>1.0</strong> — the process spread exactly fills the specification. If the mean is 51 instead of 50: Cpk = min((56 − 51) ÷ 6, (51 − 44) ÷ 6) = min(0.83, 1.17) = <strong>0.83</strong>. The process is capable in principle (Cp = 1.0) but underperforming in practice (Cpk = 0.83) because it is off-center. Centering it — shifting the mean back to 50 — raises Cpk to 1.0 without changing the spread. A Cp or Cpk of 1.0 is the minimum acceptable level; 1.33 is the usual target in manufacturing, and 1.67 is expected for critical characteristics.</p>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Common-cause variation is built into the process; special-cause variation comes from a specific event. The responses are opposites.</li>
<li>Control chart: center line = mean, UCL = mean + 3σ, LCL = mean − 3σ. A point outside the limits signals a special cause.</li>
<li>Watch for runs (7+ points on one side) and trends (7+ points steadily rising or falling) — non-randomness is the signal.</li>
<li>Cp = (USL − LSL) ÷ (6σ) — potential. Cpk = min((USL − mean) ÷ (3σ), (mean − LSL) ÷ (3σ)) — actual performance. 1.0 is the minimum, 1.33 the usual target.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Adjusting a stable process after every reading. Tampering adds variation; a control chart tells you when to act and when to leave it alone.</div>
<div class="callout"><strong>Common mistake:</strong> Reporting Cp when the process is off-center. Cp measures potential; Cpk measures what the customer actually gets. Report Cpk.</div>
<p><strong>Ready-to-work link:</strong> Statistical quality returns in the management course (MGT 201), where control charts become part of operations and continuous improvement. The arithmetic stays the same; the decisions get bigger.</p>`
    }
  ],
  keyTerms: [
    { term: "Common-cause variation", def: "The small, everyday wobble built into a process; fixed only by changing the process." },
    { term: "Special-cause variation", def: "Variation from a specific, identifiable event; fixed by finding and removing the cause." },
    { term: "Control chart", def: "A time-ordered plot of measurements with a center line and control limits, used to detect special causes." },
    { term: "Center line", def: "The line on a control chart at the process mean." },
    { term: "Upper control limit (UCL)", def: "Mean + 3 standard deviations; a point above it signals a special cause." },
    { term: "Lower control limit (LCL)", def: "Mean − 3 standard deviations; a point below it signals a special cause." },
    { term: "Out of control", def: "A process showing evidence of special-cause variation — a point outside the limits or a non-random pattern." },
    { term: "Run", def: "Seven or more consecutive points on one side of the center line — evidence of a shift." },
    { term: "Trend", def: "Seven or more points steadily rising or falling — evidence of a drift." },
    { term: "Process capability", def: "Whether a stable process's output falls inside the specification limits." },
    { term: "Cp", def: "Process capability index: (USL − LSL) ÷ (6σ); the process's potential if perfectly centered." },
    { term: "Cpk", def: "Process capability index that penalizes an off-center mean: the smaller of (USL − mean) ÷ (3σ) and (mean − LSL) ÷ (3σ)." },
    { term: "Specification limits", def: "The USL and LSL the customer requires; different from control limits, which describe the process." },
    { term: "Tampering", def: "Adjusting a stable process after every reading, which increases variation instead of reducing it." },
    { term: "Statistical process control (SPC)", def: "Using control charts to monitor a process and distinguish common from special causes." }
  ],
  video: {
    title: "Statistical Process Control (SPC) Explained | Control Charts in Quality Management",
    embedUrl: "https://www.youtube.com/embed/aey2c0VsZNc",
    note: "Operations & Supply Chain Management University explains SPC from the ground up: control charts, common vs. special cause, and what to do when a point goes out of control. Watch it, then check this module's worked example: mean 50, σ = 2 → UCL 56, LCL 44, and a 57 ml reading is out of control.",
    more: [
      { title: "Introduction to Statistical Process Control Charts (Lean Six Sigma)", url: "https://www.youtube.com/watch?v=Kw_ZMiMNi04" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A filling process has mean 50 ml and standard deviation 2 ml. (a) What are the UCL and LCL? (b) Is a reading of 57 ml out of control? (c) Is a reading of 55 ml out of control?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: UCL = 50 + 3 × 2 = <strong>56</strong>; LCL = 50 − 3 × 2 = <strong>44</strong>. Step 2: <strong>Yes</strong> — 57 is above the UCL of 56. Step 3: <strong>No</strong> — 55 is inside the limits; it is ordinary process variation.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> Specifications are USL 56, LSL 44, and the process has σ = 2. (a) What is Cp? (b) If the mean is 51, what is Cpk? (c) What single change raises Cpk to 1.0?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Cp = (56 − 44) ÷ (6 × 2) = 12 ÷ 12 = <strong>1.0</strong>. Step 2: Cpk = min((56 − 51) ÷ 6, (51 − 44) ÷ 6) = min(0.83, 1.17) = <strong>0.83</strong>. Step 3: <strong>Center the process</strong> — shift the mean back to 50, and Cpk becomes min(6 ÷ 6, 6 ÷ 6) = 1.0.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A process has mean 100, σ = 5, USL 120, LSL 80. (a) What is Cp? (b) What is Cpk? (c) Is the process capable?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Cp = (120 − 80) ÷ (6 × 5) = 40 ÷ 30 ≈ <strong>1.33</strong>. Step 2: The mean is centered (100 is the midpoint of 80 and 120), so Cpk = (120 − 100) ÷ 15 = 20 ÷ 15 ≈ <strong>1.33</strong>. Step 3: <strong>Yes</strong> — 1.33 meets the usual target.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A control chart shows eight consecutive points above the center line, all inside the control limits. (a) Is the process out of control? (b) What does the pattern suggest?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: <strong>Yes</strong> — a run of 7+ points on one side is a non-random pattern, even inside the limits. Step 2: The process has <strong>shifted upward</strong> — something changed (a new material, a setting drift, a different operator) and should be investigated.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A manager adjusts a machine after every single reading, and the process variation gets worse. (a) What is this called? (b) Why did it make things worse?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: This is <strong>tampering</strong>. Step 2: The readings were common-cause variation — the process wobbling around its mean. Step 3: Each adjustment added the manager's own error to the process's natural variation, so the total variation grew instead of shrinking.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A customer requires parts between 44 and 56 mm. Your process is stable with mean 50 and σ = 3. (a) What is Cp? (b) Is the process capable? Explain in two or three sentences.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Cp = (56 − 44) ÷ (6 × 3) = 12 ÷ 18 ≈ <strong>0.67</strong>. Step 2: <strong>No</strong> — Cp below 1.0 means the process spread (6σ = 18) is wider than the specification (12), so some parts will fall outside 44–56 mm even though the process is stable and centered. Step 3: The process itself must be improved (reduce σ) — no amount of monitoring will fix a spread that is too wide.</p>"
    }
  ],
  quiz: [
    {
      q: "A process has mean 50 and σ = 2. The UCL is:",
      choices: ["52", "54", "56", "60"],
      answer: 2,
      explanation: "Correct: (c). UCL = 50 + 3 × 2 = 56. (a) is mean + 1σ. (b) is mean + 2σ. (d) is mean + 5σ."
    },
    {
      q: "A reading of 57 ml from that process is:",
      choices: ["In control — ordinary variation", "Out of control — above the UCL", "Out of control — below the LCL", "Impossible to judge"],
      answer: 1,
      explanation: "Correct: (b). 57 > 56, the UCL. (a) is wrong — 57 is outside the limits. (c) is wrong — 57 is high, not low. (d) is wrong — the limits decide it."
    },
    {
      q: "A reading of 55 ml from that process is:",
      choices: ["Out of control", "In control — inside the limits", "A special cause", "Proof the process is broken"],
      answer: 1,
      explanation: "Correct: (b). 55 is inside 44–56. (a), (c), and (d) all treat ordinary variation as a problem — the tampering trap."
    },
    {
      q: "Specifications 44 to 56, σ = 2. Cp is:",
      choices: ["0.83", "1.0", "1.33", "2.0"],
      answer: 1,
      explanation: "Correct: (b). (56 − 44) ÷ (6 × 2) = 12 ÷ 12 = 1.0. (a) is the Cpk when the mean is 51. (c) would need σ = 1.5. (d) would need σ = 1."
    },
    {
      q: "With the same specifications, σ = 2, and a mean of 51, Cpk is:",
      choices: ["1.0", "1.17", "0.83", "0.67"],
      answer: 2,
      explanation: "Correct: (c). min((56 − 51) ÷ 6, (51 − 44) ÷ 6) = min(0.83, 1.17) = 0.83. (a) is Cp. (b) is the larger of the two sides. (d) is Cp with σ = 3."
    },
    {
      q: "Eight consecutive points above the center line, all inside the limits, indicate:",
      choices: ["A stable process", "A run — evidence the process has shifted", "Nothing at all", "A trend"],
      answer: 1,
      explanation: "Correct: (b). A run of 7+ on one side is non-random. (a) is wrong — the pattern is not random. (c) is wrong — runs are a standard signal. (d) is a different pattern: steadily rising points."
    },
    {
      q: "Adjusting a stable process after every reading is called:",
      choices: ["Quality control", "Tampering — it increases variation", "Centering", "Calibration"],
      answer: 1,
      explanation: "Correct: (b). Each adjustment adds error to the process's natural variation. (a) is the general activity, not this error. (c) is shifting the mean deliberately. (d) is checking a measuring instrument."
    },
    {
      q: "The difference between Cp and Cpk is:",
      choices: ["Cp measures potential if centered; Cpk measures actual performance and penalizes an off-center mean", "Cpk is always larger than Cp", "Cp uses control limits; Cpk uses specification limits", "There is no difference"],
      answer: 0,
      explanation: "Correct: (a). Cp ignores centering; Cpk does not. (b) is false — Cpk ≤ Cp always. (c) is false — both use specification limits. (d) is false."
    }
  ],
  studyGuide: `
<h3>Module 11 — Statistical Quality: Quick Reference</h3>
<p><strong>Variation:</strong> Common cause = built into the process (fix the process). Special cause = a specific event (find the culprit). Never confuse them — and never tamper with a stable process.</p>
<div class="formula">Control chart: center line = mean. UCL = mean + 3σ. LCL = mean − 3σ.</div>
<p><strong>Anchor:</strong> Mean 50, σ = 2 → UCL 56, LCL 44. A 57 ml reading is out of control; a 55 ml reading is not. Seven-plus points on one side = a run; seven-plus steadily rising or falling = a trend.</p>
<div class="formula">Cp = (USL − LSL) ÷ (6σ). Cpk = min((USL − mean) ÷ (3σ), (mean − LSL) ÷ (3σ)).</div>
<p><strong>Anchor 2:</strong> Specs 44–56, σ = 2 → Cp = 1.0. Mean 51 → Cpk = 0.83; centering the mean to 50 raises Cpk to 1.0. Target: 1.33.</p>
<p><strong>Watch out:</strong> Report Cpk, not Cp, when the process is off-center — Cp is potential, Cpk is what the customer gets.</p>
<p><strong>Self-check:</strong> Given a mean, σ, and specification limits, compute UCL, LCL, Cp, and Cpk — and state whether the process is stable, capable, and centered.</p>
`
};
