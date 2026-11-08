// Plumbing 122 - Module 3: Sizing Water Supply Piping: Fixture Units & Pressure Loss
module.exports = {
  number: 3,
  slug: "sizing-water-supply-piping",
  title: "Sizing Water Supply Piping: Fixture Units & Pressure Loss",
  estTime: "4–5 hours",
  objectives: [
    "Convert a total water supply fixture unit (WSFU) load into a design flow in gpm using the Hunter demand curve.",
    "Explain why the Hunter curve flattens as fixture units increase and why that saves pipe size.",
    "Add continuous demands in gpm after the Hunter conversion, never through the curve.",
    "Compute elevation pressure loss and friction pressure loss for a pipe run.",
    "Apply the 8 ft/s design velocity limit and explain why oversized and undersized pipes both cause problems."
  ],
  sections: [
    {
      heading: "The Hunter Curve: Probability in a Graph",
      html: `
<p>Module 2 gave you fixture units. Now you turn them into a real flow rate. The tool is the <strong>Hunter demand curve</strong>, published in IPC Appendix E. It answers one question: if a building has this many fixture units, how many gallons per minute will it actually draw at the busiest moment? The answer is always less than the sum of every fixture's full flow, because fixtures almost never all run at once. The curve is probability made visible.</p>
<p>On the <strong>flush-tank curve</strong> — the one for houses — the conversion runs: <strong>5 WSFU = 9.4 gpm, 10 WSFU = 14.6 gpm, 20 WSFU = 19.6 gpm, 30 WSFU = 23.3 gpm, 40 WSFU = 26.3 gpm, 50 WSFU = 29.1 gpm</strong>. Notice the shape: doubling the load from 5 to 10 adds 5.2 gpm, but doubling from 25 to 50 would add far less. The curve flattens because the more fixtures a building has, the smaller the chance they all run at the same instant. That flattening is what keeps pipe sizes reasonable in large buildings.</p>
<p>Flushometer fixtures get their own curve because they draw a large, short burst. On the <strong>flushometer curve</strong>: <strong>5 WSFU = 15 gpm, 10 WSFU = 27 gpm, 20 WSFU = 35 gpm</strong>. A building with flushometer valves needs much larger piping than a house with the same fixture-unit total — which is why public restrooms are plumbed with larger mains.</p>
<div class="callout"><strong>Key idea:</strong> The Hunter curve converts fixture units to a design flow by probability. More fixtures means more total flow, but less flow per fixture — the curve flattens as the load grows.</div>
<p><strong>Worked check:</strong> A house totals 10 WSFU with flush-tank fixtures. On the flush-tank curve, the design flow is <strong>14.6 gpm</strong>. The same 10 WSFU with flushometer fixtures would be 27 gpm — nearly double.</p>`
    },
    {
      heading: "Continuous Demands Go After the Curve",
      html: `
<p>Some water uses do not follow probability. A hose bibb watering a lawn, an irrigation zone, a filling pool, or a cooling system draws steadily for a long time. These are <strong>continuous demands</strong>, and they are handled differently: you convert the intermittent fixture load through the Hunter curve first, then <strong>add the continuous demand in gpm after the curve</strong>. You never run a continuous demand through the curve as fixture units.</p>
<p>Why? Because the curve's whole point is that fixtures do not all run at once — but a hose bibb running for an hour <em>will</em> run at the same time as the morning showers. Adding it through the curve would shrink it by probability, which is wrong. The rule is strict: continuous demands are added in full, in gallons per minute, on top of the Hunter flow.</p>
<p>The same logic applies to any demand that runs for a long, predictable stretch. If a customer runs a garden irrigation system every morning, size for the irrigation plus the morning fixture peak. If the math looks too big, the answer is larger pipe or a separate service for irrigation — not a smaller number on paper.</p>
<div class="callout"><strong>Key idea:</strong> Intermittent fixtures go through the Hunter curve. Continuous demands are added in gpm after the curve. Mixing the two understates the real peak and undersizes the pipe.</div>
<p><strong>Worked check:</strong> A house totals 10 WSFU (14.6 gpm on the flush-tank curve) plus a hose bibb with a continuous demand of 5 gpm. Total design flow = 14.6 + 5 = <strong>19.6 gpm</strong>.</p>`
    },
    {
      heading: "Pressure Loss: Friction and Elevation",
      html: `
<p>Pressure is the budget and every foot of pipe spends some of it. Two kinds of loss eat the budget. <strong>Elevation loss</strong> you already know: about 0.433 psi per foot of height gained (Module 1). <strong>Friction loss</strong> is the pressure lost as water rubs against the pipe wall and tumbles through fittings. Friction loss grows with flow rate — double the flow and the loss roughly quadruples — and grows with pipe length and with the number of fittings.</p>
<p>Friction loss is read from a <strong>friction-loss chart</strong> for the pipe material and size, usually stated as psi lost per 100 feet of pipe at a given flow. A 40-foot run with a chart value of 4 psi per 100 feet loses 0.4 × 4 = <strong>1.6 psi</strong>. Fittings are counted as equivalent lengths of straight pipe: a 90-degree elbow may count as several feet of pipe, depending on its size, because the water must change direction. The total developed length — straight pipe plus fitting equivalents — is what the chart uses.</p>
<p>The sizing method in IPC Appendix E puts it together: start with the static pressure at the meter, subtract elevation loss to the farthest fixture, subtract the minimum residual pressure the farthest fixture needs (IPC Table 604.3), and what remains is the <strong>available pressure loss</strong> — the total friction loss the piping is allowed to spend. Pick the smallest pipe that can carry the design flow over the developed length within that budget.</p>
<div class="callout"><strong>Key idea:</strong> Available pressure loss = static pressure − elevation loss − minimum fixture pressure. The piping must carry the design flow over the developed length without spending more than that budget.</div>
<p><strong>Worked check:</strong> Static pressure 50 psi, farthest fixture 20 feet above the meter (elevation loss about 8.7 psi), minimum fixture pressure 8 psi. Available pressure loss = 50 − 8.7 − 8 = <strong>about 33 psi</strong> for friction over the whole run.</p>`
    },
    {
      heading: "Velocity: The 8 ft/s Limit",
      html: `
<p>There is one more limit on pipe size: <strong>velocity</strong>, the speed of the water in the pipe, in feet per second. The practical design limit is about <strong>8 ft/s</strong>. Faster water is noisy — the pipes sing and hammer — and it erodes the pipe wall, especially at elbows and tees, shortening the system's life. A pipe that carries the design flow above 8 ft/s is undersized even if the pressure math works out.</p>
<p>Velocity and pipe size are linked: for a fixed flow, a smaller pipe means faster water. Double the flow in the same pipe and the velocity doubles. The fix for excessive velocity is a larger pipe, which slows the water down for the same flow. This is why a design flow of 26.3 gpm (40 WSFU flush-tank) needs a larger service than a flow of 14.6 gpm (10 WSFU) — not only for pressure, but for velocity.</p>
<p>Oversizing has its own cost. A pipe much larger than needed costs more, takes longer to deliver hot water (Module 4), and can let water sit and stagnate. The goal is the smallest pipe that satisfies both the pressure budget and the velocity limit — right-sized, not over-sized and not under-sized.</p>
<div class="callout"><strong>Key idea:</strong> Keep water velocity at or below about 8 ft/s. Faster water is noisy and erosive; the fix is a larger pipe, not a smaller one.</div>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Hunter curve (flush tank): 5 WSFU = 9.4 gpm; 10 = 14.6; 20 = 19.6; 30 = 23.3; 40 = 26.3; 50 = 29.1 gpm.</li>
<li>Hunter curve (flushometer): 5 WSFU = 15 gpm; 10 = 27; 20 = 35 gpm.</li>
<li>Continuous demands are added in gpm after the curve, never through it.</li>
<li>Available pressure loss = static pressure − elevation loss − minimum fixture pressure.</li>
<li>Friction loss grows with flow and length; fittings count as equivalent lengths of pipe.</li>
<li>Design velocity limit is about 8 ft/s; faster water is noisy and erosive.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Adding a continuous demand through the Hunter curve as fixture units. A hose bibb running for an hour will overlap the morning showers — add it in full, in gpm, after the curve.</div>
<div class="callout"><strong>Common mistake:</strong> Adding up the full flow of every fixture to get the design flow. Ten fixtures at 2 gpm each do not draw 20 gpm at once — the Hunter curve exists because they do not, and sizing for 20 gpm would oversize the pipe and the bill.</div>
<p><strong>Ready-to-Work link:</strong> NCCER Plumbing Level 2 expects you to size water supply piping using fixture units and the demand curve. If you can take a house fixture list from WSFU to design flow to a pipe size, you have this module.</p>`
    }
  ],
  keyTerms: [
    { term: "Hunter demand curve", def: "A curve in IPC Appendix E that converts total water supply fixture units into a design flow in gpm, based on the probability that fixtures run together." },
    { term: "Design flow", def: "The peak flow in gpm a pipe system is sized to carry, derived from the Hunter curve plus continuous demands." },
    { term: "Flush-tank curve", def: "The Hunter curve for buildings with tank-type water closets; 10 WSFU converts to 14.6 gpm." },
    { term: "Flushometer curve", def: "The Hunter curve for buildings with flushometer valves; 10 WSFU converts to 27 gpm." },
    { term: "Continuous demand", def: "Long, steady water use such as irrigation or a hose bibb; added in gpm after the Hunter conversion." },
    { term: "Friction loss", def: "Pressure lost as water flows through pipe and fittings; increases with flow rate, pipe length, and fitting count." },
    { term: "Friction-loss chart", def: "A chart giving pressure loss per 100 feet of pipe for a given material, size, and flow rate." },
    { term: "Equivalent length", def: "The length of straight pipe that causes the same friction loss as a fitting; used to total a run's developed length." },
    { term: "Available pressure loss", def: "Static pressure minus elevation loss minus minimum fixture pressure — the friction budget the piping may spend." },
    { term: "Velocity", def: "The speed of water in a pipe, in feet per second; the design limit is about 8 ft/s." },
    { term: "Residual pressure", def: "Pressure at a fixture while water is flowing; the code's fixture requirements use residual pressure." },
    { term: "Developed length", def: "The total length of a pipe run from the meter to the farthest fixture, including fitting equivalents." },
    { term: "IPC Appendix E", def: "The IPC appendix containing the water supply fixture unit table and the Hunter demand curves." },
    { term: "Water supply fixture unit (WSFU)", def: "A relative load value per fixture, added up before conversion to a design flow." },
    { term: "Oversizing", def: "Choosing pipe larger than needed; costs more, slows hot-water delivery, and can let water stagnate." },
    { term: "Undersizing", def: "Choosing pipe smaller than needed; causes low pressure, high velocity, noise, and erosion." }
  ],
  video: {
    title: "How to size Plumbing Water pipes using Fixture Units",
    embedUrl: "https://www.youtube.com/embed/fr8CXkczYKw",
    note: "A step-by-step fixture-unit sizing walkthrough — follow the conversion from fixture units to flow, then work the same steps on the examples in this module.",
    more: [
      { title: "Understanding International Plumbing Code: Water Pipe Sizing", url: "https://www.youtube.com/watch?v=VmblU4083Xw" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A house totals 5 WSFU with flush-tank fixtures. What is the design flow from the Hunter curve?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Use the flush-tank curve. Step 2: 5 WSFU converts to <strong>9.4 gpm</strong>. Step 3: Note this is far less than the sum of the fixtures' full flows — the curve accounts for fixtures not running together.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A house totals 20 WSFU with flush-tank fixtures. What is the design flow? What would it be with flushometer fixtures?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Flush-tank curve: 20 WSFU = <strong>19.6 gpm</strong>. Step 2: Flushometer curve: 20 WSFU = <strong>35 gpm</strong>. Step 3: The flushometer building needs much larger piping for the same fixture-unit total, because flushometer valves draw large, short bursts.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A house totals 10 WSFU (14.6 gpm on the flush-tank curve) plus a hose bibb with a continuous demand of 5 gpm. What is the total design flow, and why is the hose bibb not run through the curve?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Convert the intermittent load first: 10 WSFU = 14.6 gpm. Step 2: Add the continuous demand in gpm after the curve: 14.6 + 5 = <strong>19.6 gpm</strong>. Step 3: The hose bibb is not run through the curve because it will run for a long time and will overlap the morning fixture peak — the curve's probability discount does not apply to it.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> Static pressure is 50 psi, the farthest fixture is 20 feet above the meter, and the fixture needs 8 psi minimum residual pressure. What is the available pressure loss for friction?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Elevation loss = 20 ft × 0.433 psi/ft = about 8.7 psi. Step 2: Available pressure loss = 50 − 8.7 − 8 = <strong>about 33 psi</strong>. Step 3: The piping must carry the design flow over its developed length without losing more than about 33 psi to friction.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A 60-foot run of pipe has a friction loss of 3 psi per 100 feet. What is the loss over that run?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: 60 feet is 0.6 of 100 feet. Step 2: Loss = 0.6 × 3 = <strong>1.8 psi</strong>. Step 3: Fittings on the run add equivalent length, so the real developed length — and the real loss — will be higher than the straight-pipe figure.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A design flow of 26.3 gpm is proposed for a 1-inch service, and the calculated velocity is above 8 ft/s. What is wrong, and what is the fix?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The velocity exceeds the design limit of about 8 ft/s, so the pipe is undersized for that flow even if the pressure math works. Step 2: Fast water is noisy and erodes the pipe, especially at elbows. Step 3: The fix is to upsize the service to 1-1/4 inches, which slows the water for the same flow. Step 4: Do not fix velocity by raising pressure — pressure does not slow water down.</p>"
    }
  ],
  quiz: [
    {
      q: "A house totals 10 WSFU with flush-tank fixtures. Using the Hunter demand curve, the design flow is:",
      choices: ["9.4 gpm", "14.6 gpm", "19.6 gpm", "26.3 gpm"],
      answer: 1,
      explanation: "Correct: (b). On the flush-tank curve, 10 WSFU converts to 14.6 gpm. (a) is the 5-WSFU value. (c) is the 20-WSFU value. (d) is the 40-WSFU value."
    },
    {
      q: "A house totals 30 WSFU with flush-tank fixtures. Using the Hunter demand curve, the design flow is:",
      choices: ["19.6 gpm", "23.3 gpm", "26.3 gpm", "29.1 gpm"],
      answer: 1,
      explanation: "Correct: (b). On the flush-tank curve, 30 WSFU converts to 23.3 gpm. (a) is the 20-WSFU value. (c) is the 40-WSFU value. (d) is the 50-WSFU value."
    },
    {
      q: "A building has 20 WSFU with flushometer valves. Using the flushometer Hunter curve, the design flow is:",
      choices: ["19.6 gpm", "27 gpm", "35 gpm", "14.6 gpm"],
      answer: 2,
      explanation: "Correct: (c). On the flushometer curve, 20 WSFU converts to 35 gpm. (a) is the flush-tank 20-WSFU value. (b) is the flushometer 10-WSFU value. (d) is the flush-tank 10-WSFU value."
    },
    {
      q: "A hose bibb with a continuous demand of 5 gpm is added to a house whose Hunter flow is 14.6 gpm. The total design flow is:",
      choices: ["14.6 gpm", "19.6 gpm", "21.6 gpm", "24.6 gpm"],
      answer: 1,
      explanation: "Correct: (b). Continuous demands are added in gpm after the curve: 14.6 + 5 = 19.6 gpm. (a) forgets the hose bibb. (c) adds 7 instead of 5. (d) adds the hose bibb through the curve as fixture units, which the method forbids."
    },
    {
      q: "Available pressure loss equals:",
      choices: ["Static pressure plus elevation loss", "Static pressure minus elevation loss minus minimum fixture pressure", "Static pressure minus the meter size", "Elevation loss plus friction loss"],
      answer: 1,
      explanation: "Correct: (b). Available pressure loss = static pressure − elevation loss − minimum fixture pressure. (a) adds elevation loss instead of subtracting it. (c) Meter size is not part of the pressure budget. (d) That sum is the total loss, not the available budget."
    },
    {
      q: "A 40-foot run of pipe has a friction loss of 4 psi per 100 feet. The loss over that run is:",
      choices: ["0.4 psi", "1.6 psi", "4 psi", "16 psi"],
      answer: 1,
      explanation: "Correct: (b). 40 feet is 0.4 of 100 feet, so 0.4 × 4 = 1.6 psi. (a) divides by 10 instead of multiplying by 0.4. (c) is the loss over a full 100 feet. (d) multiplies by 4 instead of 0.4."
    },
    {
      q: "The design velocity limit for water supply piping is about:",
      choices: ["2 ft/s", "4 ft/s", "8 ft/s", "20 ft/s"],
      answer: 2,
      explanation: "Correct: (c). About 8 ft/s is the practical design limit; faster flow is noisy and erosive. (a) and (b) are below the limit and would mean oversized pipe. (d) is far above the limit."
    },
    {
      q: "The Hunter curve flattens as fixture units increase because:",
      choices: ["Pipes get larger", "The chance that all fixtures run at once gets smaller as the fixture count grows", "Water pressure drops", "Fixtures use less water in large buildings"],
      answer: 1,
      explanation: "Correct: (b). The curve is probability: with more fixtures, the chance they all run together shrinks, so flow per fixture falls. (a) Pipe size follows the curve; it does not cause it. (c) Pressure drop is a separate calculation. (d) Fixtures use the same water regardless of building size."
    }
  ],
  studyGuide: `
<h3>Module 3 — Sizing Water Supply Piping: Quick Reference</h3>
<p><strong>Core idea:</strong> Fixture units become a design flow through the Hunter curve; continuous demands are added after the curve; the pipe must carry the flow within the pressure budget and the velocity limit.</p>
<div class="formula">Hunter curve (flush tank): 5 WSFU = 9.4 gpm &nbsp;|&nbsp; 10 = 14.6 &nbsp;|&nbsp; 20 = 19.6 &nbsp;|&nbsp; 30 = 23.3 &nbsp;|&nbsp; 40 = 26.3 &nbsp;|&nbsp; 50 = 29.1 gpm</div>
<div class="formula">Hunter curve (flushometer): 5 WSFU = 15 gpm &nbsp;|&nbsp; 10 = 27 &nbsp;|&nbsp; 20 = 35 gpm</div>
<p><strong>Continuous demands:</strong> Add in gpm after the curve — never run them through it.</p>
<div class="formula">Available pressure loss = static pressure − elevation loss − minimum fixture pressure &nbsp;|&nbsp; Elevation loss = height (ft) × 0.433</div>
<p><strong>Friction loss:</strong> Read from a chart in psi per 100 feet; multiply by developed length (straight pipe plus fitting equivalents) over 100.</p>
<p><strong>Velocity limit:</strong> About 8 ft/s. Faster water is noisy and erosive — upsize the pipe to slow it down.</p>
<p><strong>Self-check:</strong> A house totals 20 WSFU flush-tank plus a 5 gpm hose bibb. What is the total design flow? (Answer: 19.6 + 5 = 24.6 gpm.)</p>
`
};
