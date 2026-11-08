// mgt201 - Module 4: Statistical Process Control
module.exports = {
  "number": 4,
  "slug": "statistical-process-control",
  "title": "Statistical Process Control",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain common-cause and special-cause variation and why the distinction matters.",
    "Read a control chart: center line, upper and lower control limits, and signals.",
    "Work control limits from a process mean and standard deviation.",
    "Compute process capability Cp and Cpk and say what each one means.",
    "Explain the difference between a process being in control and a process being capable."
  ],
  "sections": [
    {
      "heading": "Two Kinds of Variation",
      "html": "\n<p>Every process varies, even when nothing is wrong. <strong>Common-cause variation</strong> is the natural, random wobble built into the process — small differences in material, temperature, and handling that are always there. <strong>Special-cause variation</strong> is a signal that something specific has changed: a new operator, a worn tool, a different batch of material, a machine out of adjustment. The distinction matters because the responses are opposites.</p>\n<p>For common-cause variation, the right response is usually to leave the process alone and improve the system itself — better materials, better training, a redesigned step. For special-cause variation, the right response is to find the specific cause and remove it, now. The expensive mistake is treating common-cause wobble as a signal: adjusting a stable process after every small deviation — called <strong>tampering</strong> — adds variation instead of removing it.</p>\n<p>W. Edwards Deming's rule is the guide: a stable process should be left alone and improved by changing the system; an unstable process should be investigated for its special cause. Knowing which kind of variation you are looking at is the whole skill of this module.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Common-cause variation is the process's natural wobble — improve the system. Special-cause variation is a signal — find the cause and remove it. Adjusting a stable process (tampering) makes it worse.</div>"
    },
    {
      "heading": "The Control Chart",
      "html": "\n<p>A <strong>control chart</strong> plots measurements over time with three lines: the <strong>center line</strong> (the process average), the <strong>upper control limit (UCL)</strong>, and the <strong>lower control limit (LCL)</strong>. The limits are usually set at three standard deviations above and below the center line. Points inside the limits, with no strange patterns, mean the process is stable — only common-cause variation is present. A point outside a limit, or a pattern such as eight points in a row on one side of the center line, is a signal: investigate for a special cause.</p>\n<p><strong>Worked check:</strong> a process fills bottles with a mean of 100 ml and a standard deviation of 2 ml for individual bottles. Step 1: UCL = 100 + (3 × 2) = <strong>106 ml</strong>. Step 2: LCL = 100 − (3 × 2) = <strong>94 ml</strong>. Step 3: a bottle at 107 ml is a signal — investigate. A bottle at 103 ml is not — it is inside the limits, and adjusting the filler for it would be tampering.</p>\n<p>There are charts for different data. An <strong>X-bar and R chart</strong> tracks the average and range of small samples of measured data (length, weight, time). A <strong>p-chart</strong> tracks the proportion defective in attribute data (pass or fail). Picking the right chart for the data type is the first decision; reading it correctly is the second.</p>\n<div class=\"formula\">UCL = Mean + 3σ &nbsp;|&nbsp; LCL = Mean − 3σ &nbsp;|&nbsp; For sample averages: σ of the average = σ ÷ √n</div>"
    },
    {
      "heading": "Process Capability: Cp and Cpk",
      "html": "\n<p>Being in control is not the same as being capable. A process can be perfectly stable and still make bad parts, if its natural spread is wider than the customer's specification. <strong>Process capability</strong> compares the spread of the process with the width of the specification.</p>\n<p><strong>Cp</strong> compares widths: Cp = (Upper specification limit − Lower specification limit) ÷ (6σ). A Cp of 1.00 means the process spread exactly fills the specification; 1.33 or higher is the usual target, giving room for small shifts. <strong>Cpk</strong> also checks centering: it is the smaller of (USL − mean) ÷ (3σ) and (mean − LSL) ÷ (3σ). A process can have a good Cp and a poor Cpk if it is off-center — the spread fits, but it is aimed at the wrong place.</p>\n<p><strong>Worked check:</strong> a part must measure 10.0 mm ± 0.5 mm, so USL = 10.5 and LSL = 9.5. The process has σ = 0.1 and mean = 10.0. Step 1: Cp = (10.5 − 9.5) ÷ (6 × 0.1) = 1.0 ÷ 0.6 = <strong>1.67</strong> — the spread fits comfortably. Step 2: Cpk = min[(10.5 − 10.0) ÷ 0.3, (10.0 − 9.5) ÷ 0.3] = min[1.67, 1.67] = <strong>1.67</strong> — centered, so capability is genuinely good.</p>\n<p><strong>Off-center check:</strong> if the mean drifts to 10.2 with the same σ, Cpk = min[(10.5 − 10.2) ÷ 0.3, (10.2 − 9.5) ÷ 0.3] = min[1.00, 2.33] = <strong>1.00</strong>. Cp is still 1.67 — the spread did not change — but Cpk fell to 1.00 because the process is aimed off-center. Cp says the process could be capable; Cpk says whether it actually is.</p>\n<div class=\"formula\">Cp = (USL − LSL) ÷ (6σ) &nbsp;|&nbsp; Cpk = smaller of (USL − mean) ÷ (3σ) and (mean − LSL) ÷ (3σ)</div>"
    },
    {
      "heading": "Using SPC Day to Day",
      "html": "\n<p>SPC works when it is used at the process, by the people who run it — not as a report compiled at month-end. The routine is simple: take small samples at regular intervals, plot them, and act only on signals. When a signal appears, stop and investigate before making more product; when there is no signal, leave the process alone, even if today's number looks a little high or low.</p>\n<p>Two habits make SPC stick. First, record what was found when a signal is investigated — the cause, the fix, and the date — so the same cause is recognized next time. Second, review capability regularly: a process that was capable a year ago may have drifted as tools wore or suppliers changed. A capability study is a check-up, and it is cheap compared with the cost of shipping bad product.</p>\n<p>SPC also connects back to Module 3. Six Sigma is SPC with targets and a method (DMAIC); Lean uses control charts to make problems visible; and bus121's statistics — means, standard deviations, and control charts — are the same tools at a deeper level. This module is the operations use of that statistics.</p>\n<div class=\"callout\"><strong>Key idea:</strong> SPC is a daily habit at the process, not a monthly report. Plot, act only on signals, record the cause — and re-check capability before the process drifts out of spec.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "\n<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Common-cause variation is the process's natural wobble; special-cause variation is a signal that something changed.</li>\n<li>A control chart shows the center line and limits at ±3σ; a point outside, or a run of points on one side, is a signal to investigate.</li>\n<li>Cp compares process spread with specification width; Cpk also checks centering — a process can have good Cp and poor Cpk.</li>\n<li>In control is not the same as capable: a stable process can still make bad parts if its spread is too wide or off-center.</li>\n<li>Never adjust a stable process on a single reading — that is tampering, and it adds variation.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Confusing control limits with specification limits. Control limits come from the process's own behavior (±3σ); specification limits come from the customer. A process can be in control and still outside specification — that is a capability problem, not a stability problem.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Reacting to every point that moves. Inside the limits, with no pattern, the movement is common-cause noise. Adjusting for it — tampering — increases variation and makes the process worse than leaving it alone.</div>\n<p><strong>Next step:</strong> Module 5 turns to inventory — how much to order, when to order, and how much safety stock to hold — with the EOQ formula at its center.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Statistical process control (SPC)",
      "def": "Using statistics and control charts to monitor a process, distinguish variation types, and act only on signals."
    },
    {
      "term": "Common-cause variation",
      "def": "The natural, random variation built into a stable process."
    },
    {
      "term": "Special-cause variation",
      "def": "Variation caused by a specific, identifiable change — a signal to investigate."
    },
    {
      "term": "Control chart",
      "def": "A chart plotting measurements over time with a center line and upper and lower control limits."
    },
    {
      "term": "Center line",
      "def": "The process average plotted on a control chart."
    },
    {
      "term": "Upper control limit (UCL)",
      "def": "The upper boundary on a control chart, usually the mean plus three standard deviations."
    },
    {
      "term": "Lower control limit (LCL)",
      "def": "The lower boundary on a control chart, usually the mean minus three standard deviations."
    },
    {
      "term": "Tampering",
      "def": "Adjusting a stable process in response to common-cause variation, which increases variation."
    },
    {
      "term": "Specification limits",
      "def": "The customer's required range for a measurement (USL and LSL) — set by the customer, not the process."
    },
    {
      "term": "Control limits",
      "def": "Boundaries on a control chart computed from the process's own variation (±3σ)."
    },
    {
      "term": "Cp",
      "def": "Process capability index comparing specification width with process spread: (USL − LSL) ÷ (6σ)."
    },
    {
      "term": "Cpk",
      "def": "Process capability index that also checks centering: the smaller of (USL − mean) ÷ (3σ) and (mean − LSL) ÷ (3σ)."
    },
    {
      "term": "X-bar and R chart",
      "def": "A control chart tracking the average and range of small samples of measured data."
    },
    {
      "term": "p-chart",
      "def": "A control chart tracking the proportion defective in attribute (pass/fail) data."
    },
    {
      "term": "In control",
      "def": "A process showing only common-cause variation — stable and predictable."
    },
    {
      "term": "Capable",
      "def": "A process whose natural spread fits inside the customer's specification, centered well enough to meet it."
    }
  ],
  "video": {
    "title": "Statistical Process Control (SPC) Explained | Control Charts in Quality Management",
    "embedUrl": "https://www.youtube.com/embed/aey2c0VsZNc",
    "note": "Covers variation, the purpose of control charts, and how to think about changes in a process. Follow it with this module's worked numbers: UCL/LCL from the mean and standard deviation, and Cp/Cpk from the specification.",
    "more": [
      {
        "title": "Control Charts simply explained - Statistical process control - Xbar-R Chart, I-MR Chart,...",
        "url": "https://www.youtube.com/watch?v=iOJDBpOa3Ko"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A filling process has a mean of 100 ml and a standard deviation of 2 ml for individual bottles. (a) What are the UCL and LCL? (b) A bottle measures 107 ml. Signal or noise? (c) A bottle measures 103 ml. Signal or noise?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) UCL = 100 + (3 × 2) = <strong>106 ml</strong>; LCL = 100 − (3 × 2) = <strong>94 ml</strong>. Step 2: (b) 107 ml is outside the UCL — a <strong>signal</strong>; investigate for a special cause. Step 3: (c) 103 ml is inside the limits — <strong>noise</strong> (common-cause variation); leave the process alone.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A part must measure 10.0 mm ± 0.5 mm. The process has σ = 0.1 and mean = 10.0. (a) Compute Cp. (b) Compute Cpk. (c) Is the process capable?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: USL = 10.5, LSL = 9.5. (a) Cp = (10.5 − 9.5) ÷ (6 × 0.1) = 1.0 ÷ 0.6 = <strong>1.67</strong>. Step 2: (b) Cpk = min[(10.5 − 10.0) ÷ 0.3, (10.0 − 9.5) ÷ 0.3] = min[1.67, 1.67] = <strong>1.67</strong>. Step 3: (c) Yes — both are well above the usual 1.33 target, and the process is centered.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> In Problem 2, the mean drifts to 10.2 with σ still 0.1. (a) What is Cp now? (b) What is Cpk now? (c) Explain in one sentence what changed.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) Cp is unchanged at <strong>1.67</strong> — the spread did not change, so the width comparison is the same. Step 2: (b) Cpk = min[(10.5 − 10.2) ÷ 0.3, (10.2 − 9.5) ÷ 0.3] = min[1.00, 2.33] = <strong>1.00</strong>. Step 3: (c) The process is no longer centered — it is aimed too close to the upper limit, so capability fell even though the spread is the same.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A control chart shows eight points in a row above the center line, all inside the limits. Signal or noise? Explain, and say what the operator should do.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: This is a <strong>signal</strong> — eight points in a row on one side of the center line is a non-random pattern, even though no point crossed a limit. Step 2: The operator should stop and investigate for a special cause (a new batch, a tool change, a different operator) before making more product. Step 3: Waiting for a point to cross the limit would waste the early warning the chart is giving.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Samples of 4 bottles are averaged. The process mean is 100 ml and the standard deviation of individual bottles is 2 ml. (a) What is the standard deviation of the sample averages? (b) What are the UCL and LCL for the X-bar chart?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) σ of the average = σ ÷ √n = 2 ÷ √4 = 2 ÷ 2 = <strong>1 ml</strong>. Step 2: (b) UCL = 100 + (3 × 1) = <strong>103 ml</strong>; LCL = 100 − (3 × 1) = <strong>97 ml</strong>. Step 3: Averages are less variable than individual bottles, so the X-bar limits are tighter — a shift in the average shows up sooner.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> An operator adjusts the filler after every bottle that reads above 100 ml, and the variation gets worse. Explain what is happening and what the operator should do instead.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The operator is <strong>tampering</strong> — adjusting a stable process in response to common-cause variation. Step 2: Each adjustment adds its own variation on top of the natural wobble, so the process varies more, not less. Step 3: Instead, the operator should plot the readings on a control chart, adjust only on a signal (a point outside the limits or a run), and otherwise leave the process alone and improve the system itself.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Common-cause variation is:",
      "choices": [
        "A signal that something specific has changed",
        "The natural, random variation built into a stable process",
        "Always caused by the operator",
        "The same as a defect"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Common-cause variation is the process's own wobble, always present. (a) describes special-cause variation. (c) most variation comes from the system, not the operator. (d) variation is not a defect — a process can vary and still meet specification."
    },
    {
      "q": "A process has mean 100 and standard deviation 2. The UCL and LCL are:",
      "choices": [
        "102 and 98",
        "106 and 94",
        "103 and 97",
        "100 and 100"
      ],
      "answer": 1,
      "explanation": "Correct: (b). UCL = 100 + 3×2 = 106; LCL = 100 − 3×2 = 94. (a) uses one standard deviation. (c) is the X-bar chart limit for samples of 4. (d) has no limits at all."
    },
    {
      "q": "A part must be 10.0 ± 0.5 mm, process σ = 0.1, mean = 10.0. Cp is:",
      "choices": [
        "1.00",
        "1.33",
        "1.67",
        "0.60"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Cp = (10.5 − 9.5) ÷ (6 × 0.1) = 1.0 ÷ 0.6 = 1.67. (a) would need σ = 0.167. (b) is the usual target, not this value. (d) is 6σ itself, not the ratio."
    },
    {
      "q": "If the mean drifts to 10.2 (same σ = 0.1, spec 10.0 ± 0.5), Cpk becomes:",
      "choices": [
        "1.67",
        "1.33",
        "1.00",
        "0.50"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Cpk = min[(10.5 − 10.2) ÷ 0.3, (10.2 − 9.5) ÷ 0.3] = min[1.00, 2.33] = 1.00. (a) is the Cp, which did not change. (b) is the target, not this value. (d) is not supported by the arithmetic."
    },
    {
      "q": "Eight points in a row above the center line, all inside the limits, is:",
      "choices": [
        "Noise — ignore it",
        "A signal — a non-random pattern to investigate",
        "Proof the process is capable",
        "A reason to widen the limits"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A run is a signal even inside the limits — the process has shifted. (a) ignores the pattern the chart is designed to catch. (c) stability is not capability. (d) widening the limits hides the signal."
    },
    {
      "q": "Control limits and specification limits differ because:",
      "choices": [
        "They are the same thing",
        "Control limits come from the process's own variation; specification limits come from the customer",
        "Control limits are always wider",
        "Specification limits change daily"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Control limits describe what the process does; specification limits describe what the customer wants. (a) is the common confusion this module corrects. (c) is not always true. (d) specifications are set by the customer and do not change daily."
    },
    {
      "q": "Adjusting a stable process after every small deviation is called:",
      "choices": [
        "Continuous improvement",
        "Tampering, and it increases variation",
        "Six Sigma",
        "Calibration"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Tampering adds variation on top of the natural wobble. (a) continuous improvement changes the system, not the setting after every reading. (c) Six Sigma uses data and DMAIC, not chasing noise. (d) calibration is a scheduled check, not a reaction to every point."
    },
    {
      "q": "A process can be in control but not capable. This means:",
      "choices": [
        "It is stable, but its spread is too wide or off-center for the specification",
        "It is out of control",
        "It has no variation",
        "It needs no monitoring"
      ],
      "answer": 0,
      "explanation": "Correct: (a). In control means stable; capable means meeting the customer's specification — a stable process can still miss the spec. (b) contradicts 'in control'. (c) no process has zero variation. (d) capability must be re-checked as conditions change."
    }
  ],
  "studyGuide": "\n<h3>Module 4 — Statistical Process Control: Quick Reference</h3>\n<p><strong>Core idea:</strong> Common-cause variation is the process's natural wobble — improve the system. Special-cause variation is a signal — find the cause and remove it. Never tamper with a stable process.</p>\n<div class=\"formula\">UCL = Mean + 3σ &nbsp;|&nbsp; LCL = Mean − 3σ &nbsp;|&nbsp; σ of sample average = σ ÷ √n</div>\n<div class=\"formula\">Cp = (USL − LSL) ÷ (6σ) &nbsp;|&nbsp; Cpk = smaller of (USL − mean) ÷ (3σ) and (mean − LSL) ÷ (3σ)</div>\n<p><strong>Signals:</strong> a point outside the limits, or a run (such as eight points in a row on one side of the center line) — investigate before making more product.</p>\n<p><strong>Watch out:</strong> Control limits come from the process; specification limits come from the customer. In control is not the same as capable — Cp says the spread could fit; Cpk says whether it actually does, centered.</p>\n<p><strong>Self-check:</strong> For a process you know, write its mean, σ, UCL, LCL, and — given a specification — its Cp and Cpk. Then say whether it is in control, capable, both, or neither.</p>\n"
};
