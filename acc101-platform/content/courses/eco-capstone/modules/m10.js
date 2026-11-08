// Economics Capstone — Module 10: Presenting Your Findings
module.exports = {
  "number": 10,
  "slug": "presenting-your-findings",
  "title": "Presenting Your Findings",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain why a presentation is not the paper read aloud: it sells the reader on reading the paper.",
    "Build a 10-slide, 15-minute talk: question, method, one table, one figure, interpretation, limits, policy.",
    "Design one figure (the scatter with the fitted line) and one table for the slides.",
    "Anticipate hard questions — ability bias, the 10-worker sample, extrapolation — and answer them briefly with the paper's own evidence.",
    "Produce the presentation (paper arc: Module 10 — the talk, not a paper section)."
  ],
  "sections": [
    {
      "heading": "The Talk Is Not the Paper",
      "html": "<p>A presentation is not the paper read aloud. The paper is 2,500–3,000 words plus tables; the talk is 15 minutes and about 10 slides. The talk's job is different: to make the audience understand the question, believe the result, and want to read the paper. That means cutting ruthlessly — one idea per slide, one number per slide, and the story told in the order a listener can follow: what did you ask, what did you do, what did you find, what does it mean, what are the limits.</p><p>The slide plan: <strong>1. Title</strong> — the question, your name, the date. <strong>2. The question</strong> — why the payoff to schooling matters, in one sentence. <strong>3. What we know</strong> — the literature's 5–10% benchmark in one line. <strong>4. The data</strong> — 10 workers, two variables, teaching sample, stated plainly. <strong>5. The figure</strong> — the scatter with the fitted line (see below). <strong>6. The regression table</strong> — slope $2.43, t = 13.57, R² = 0.96. <strong>7. Interpretation</strong> — $19.40 an hour across 12 to 20 years, about $38,800 a year. <strong>8. Limits</strong> — ability bias, 10 workers, no causation claim. <strong>9. Policy</strong> — targeted, testable step. <strong>10. Conclusion</strong> — the one sentence to remember, plus questions.</p><div class=\"callout\"><strong>Key idea:</strong> Don't present the paper — sell people on reading it. The less you cover, the more the key points stand out.</div>"
    },
    {
      "heading": "The One Figure",
      "html": "<p>One figure carries the talk: the scatter plot of the 10 workers with the fitted line through it. Schooling on the horizontal axis (12 to 20 years), wage on the vertical ($14 to $36), each worker a dot, the line wage = −14.70 + 2.43 × schooling drawn through them. The audience sees in one glance what the table takes a minute to say: the dots rise with schooling, they sit close to the line, and the two workers at each schooling level sit on either side of it — the noise, visible. The line's intercept is off the chart to the left (at zero schooling it would be −$14.70), so the figure shows only the observed range, 12 to 20 years, and the speaker says so: the figure refuses to extrapolate, just as the paper does.</p><p>Figures have rules: axes labeled with units (years; dollars per hour), a title that states the finding (\"Hourly wage rises with years of schooling\"), no tiny fonts (nothing below 24-point on a slide), and the source noted underneath (\"Teaching sample, n = 10\"). A figure the back row cannot read is decoration; a figure with no source is an assertion. The regression table on the next slide is the figure's evidence, not its replacement — the audience should be able to check the line against the table's slope.</p>"
    },
    {
      "heading": "Handling Hard Questions",
      "html": "<p>The questions after the talk are where a presentation is won or lost, and the hard ones are predictable — so prepare them. <strong>\"Isn't this just ability bias?\"</strong> Answer: \"Yes, partly — the paper says so in the interpretation. The slope is an association; the causal case rests on the literature's natural experiments, and the paper claims no more than that.\" <strong>\"Ten workers? That's tiny.\"</strong> Answer: \"It is a teaching sample, stated on the title slide. The point is a fully checkable estimate; a real study would use a survey like the CPS.\" <strong>\"Would the payoff survive controls?\"</strong> Answer: \"Probably smaller — ability and experience are in the error term, so the slope is likely biased up. The paper's sensitivity check at half the payoff still leaves a small positive net.\"</p><p>Three rules for answers: brief (one or two sentences, then stop), honest (\"I don't know\" beats an invented number — offer to check and follow up), and grounded in the paper's own evidence (the number you cite must be in the paper). Never invent a number in the room. If a question has no answer in the paper, say so: \"That is outside this study — it is the follow-up I name in the limits.\"</p><div class=\"callout\"><strong>Key idea:</strong> The best answer to a hard question is a short, honest one that points back to the paper's own numbers.</div>"
    },
    {
      "heading": "Rehearsal and Delivery",
      "html": "<p>Rehearse the talk out loud, three times, with a timer. Fifteen minutes means about 1,800 words of speaking — and the slides carry the numbers, so the speaker carries the story. Time each slide: the figure and the table deserve the most time (about 3 minutes each), the title and conclusion the least (about 1 minute each). Rehearsal finds the traps: the sentence you cannot say in one breath, the slide with two ideas, the number you keep misreading ($2.43, not $2.34).</p><p>Delivery: speak to the audience, not the slides; never read a slide aloud (the audience can read); pause after the result slide — the $2.43 number deserves a beat of silence so it lands. Bring the paper, printed, in case someone asks for a number that is not on a slide. And end with the one sentence to remember: \"In this sample, each extra year of schooling is associated with $2.43 more an hour — a strong, significant association, and the reason to believe part of it is causal comes from the wider literature, not from this regression alone.\" Then stop, and take questions.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong> the talk is 10 slides in 15 minutes — question, literature benchmark, data, figure, table, interpretation, limits, policy, conclusion; the one figure is the scatter with the fitted line over the observed range only (12–20 years); hard questions are predictable (ability bias, 10 workers, controls) and get short, honest answers from the paper's own numbers; rehearse three times with a timer; never invent a number in the room. <strong>Paper arc:</strong> this module's assignment builds the presentation — the talk, not a paper section. The paper itself is complete.</p><div class=\"callout\"><strong>Common mistake:</strong> Reading the paper aloud. The audience can read faster than you can speak — and they will stop listening. One idea per slide, one number per slide, story in your voice.</div><div class=\"callout\"><strong>Common mistake:</strong> Hiding the limits slide. The limits are what make the rest believable. A talk with no limits slide is a talk the audience will not trust.</div>"
    }
  ],
  "keyTerms": [
    { "term": "Presentation", "def": "A 15-minute, ~10-slide talk that makes the audience understand the question, believe the result, and want to read the paper." },
    { "term": "Slide", "def": "One idea per slide, one number per slide, nothing below 24-point type. Ten slides for a 15-minute talk." },
    { "term": "Figure", "def": "A chart that shows the finding — here, the scatter of 10 workers with the fitted line, axes labeled with units, over the observed range only." },
    { "term": "Fitted line", "def": "The regression line drawn on the scatter: wage = −14.70 + 2.43 × schooling, shown only from 12 to 20 years of schooling." },
    { "term": "Takeaway sentence", "def": "The one sentence the audience should remember: the slope, its size, and its limit, in plain words." },
    { "term": "Q&A", "def": "Questions after the talk. Hard ones are predictable — prepare short, honest answers from the paper's own numbers." },
    { "term": "Rehearsal", "def": "Practicing the talk out loud, three times, with a timer — the only way to find the sentences you cannot say and the slides with two ideas." },
    { "term": "Story arc (of a talk)", "def": "Question → method → result → meaning → limits → policy. The order a listener can follow." },
    { "term": "24-point rule", "def": "No text on a slide smaller than 24-point type — if the back row cannot read it, it does not belong on the slide." },
    { "term": "Source note", "def": "The line under a figure or table naming the data: here, \"Teaching sample, n = 10.\"" },
    { "term": "Extrapolation (in a figure)", "def": "Extending the fitted line beyond the observed range. The figure shows 12–20 years only, and says so." },
    { "term": "Defense", "def": "Answering questions about the work after presenting it — briefly, honestly, and from the paper's own evidence." },
    { "term": "Handout", "def": "The printed paper, brought to the talk, so any number not on a slide can be found in seconds." }
  ],
  "video": {
    "title": "Tips for giving research presentations",
    "embedUrl": "https://www.youtube.com/embed/goJB_6w2Ix0",
    "note": "The Bumbling Biochemist on telling the story of your research: back-design from the story, choose only the findings the story needs, make slide titles say the takeaway, and never oversell what the data shows.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1 — Presentation: Slide plan.</strong> List the 10 slides of the 15-minute talk in order (title, question, literature, data, figure, table, interpretation, limits, policy, conclusion) and write the one idea each slide carries.</p>",
      "solution": "<p><strong>Answer:</strong> 1. Title — the question and your name. 2. The question — why the payoff to schooling matters. 3. What we know — the literature's 5–10% benchmark. 4. The data — 10 workers, two variables, teaching sample. 5. The figure — scatter with the fitted line. 6. The table — slope $2.43, t = 13.57, R² = 0.96. 7. Interpretation — $19.40 an hour across 12–20 years, about $38,800 a year. 8. Limits — ability bias, 10 workers, association not causation. 9. Policy — targeted, testable step. 10. Conclusion — the one sentence to remember, then questions.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2 — Presentation: The figure.</strong> Describe the one figure: axes and units, the 10 dots, the fitted line, the range shown (12–20 years only), the title, and the source note. Why is the intercept not shown?</p>",
      "solution": "<p><strong>Answer:</strong> Horizontal axis: years of schooling (12–20). Vertical axis: hourly wage, dollars ($14–$36). Ten dots, one per worker, with the line wage = −14.70 + 2.43 × schooling through them. Title: \"Hourly wage rises with years of schooling.\" Source note: \"Teaching sample, n = 10.\" The intercept is not shown because at zero schooling the line predicts −$14.70 — off the chart and meaningless — and the figure, like the paper, refuses to extrapolate beyond the observed range.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3 — Presentation: The takeaway sentence.</strong> Write the one sentence the audience should remember, containing the slope, its size, and its limit.</p>",
      "solution": "<p><strong>Answer:</strong> \"In this sample, each extra year of schooling is associated with $2.43 more an hour — a strong, significant association, and the reason to believe part of it is causal comes from the wider literature, not from this regression alone.\" It carries the number ($2.43), the strength (strong, significant), and the limit (association, not proven causation) in one sentence.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4 — Hard question: ability bias.</strong> An audience member asks: \"Isn't this just ability bias?\" Write your two-sentence answer, using the paper's own evidence.</p>",
      "solution": "<p><strong>Answer:</strong> \"Yes, partly — the paper says so in the interpretation: the slope is an association, and ability is in the error term because the regression has no controls. The reason to believe part of it is causal comes from the literature's natural experiments, above all Angrist and Krueger (1991), not from this regression alone.\" Short, honest, and pointed back to the paper.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5 — Hard question: ten workers.</strong> An audience member asks: \"Ten workers? That's tiny — why should I believe anything?\" Write your two-sentence answer.</p>",
      "solution": "<p><strong>Answer:</strong> \"It is a teaching sample, stated on the title slide — the point is a fully checkable estimate, not a national one. A real study would use a survey like the Current Population Survey; what this paper shows is the method, with every number recomputable by hand.\" The answer concedes the limit and states the purpose, instead of defending the sample as something it is not.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6 — Rehearsal plan.</strong> The talk is 15 minutes. Allocate the minutes across the 10 slides (figure and table get the most time) and state what you will check in each of your three rehearsals.</p>",
      "solution": "<p><strong>Answer:</strong> Title 1 min; question 1; literature 1; data 1; figure 3; table 3; interpretation 2; limits 1; policy 1; conclusion 1 — 15 minutes. Rehearsal 1: can I say every sentence in one breath, and does the talk fit in 15 minutes? Rehearsal 2: does each slide carry one idea, and do I ever read a slide aloud? Rehearsal 3: can I answer the three hard questions (ability bias, 10 workers, controls) in two sentences each, without inventing a number?</p>"
    }
  ],
  "quiz": [
    {
      "q": "A presentation's job is to:",
      "choices": [
        "Read the paper aloud",
        "Make the audience understand the question, believe the result, and want to read the paper",
        "Show every number in the paper",
        "Prove the hypothesis"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The talk sells the paper; the paper carries the proof. (a) is wrong: the audience reads faster than you speak. (c) is wrong: 15 minutes cannot hold every number. (d) is wrong: a talk presents evidence; it does not prove causation."
    },
    {
      "q": "How many slides for a 15-minute talk, and how many ideas per slide?",
      "choices": [
        "About 10 slides, one idea each",
        "About 30 slides, as many ideas as fit",
        "1 slide, everything on it",
        "As many as the paper has pages"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Ten slides, one idea and one number each. (b) is wrong: 30 slides in 15 minutes is 30 seconds each — unreadable. (c) is wrong: one slide cannot be read from the back row. (d) is wrong: the talk is not the paper."
    },
    {
      "q": "The one figure shows the fitted line only from 12 to 20 years because:",
      "choices": [
        "The line stops there",
        "The paper refuses to extrapolate beyond the observed range",
        "The intercept is the most important number",
        "The audience dislikes long lines"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Below 12 and above 20 years there is no data; the line would be a guess. (a) is wrong: the line is a mathematical object with no end. (c) is wrong: the intercept is not interpreted at all. (d) is wrong: audience taste is not the reason."
    },
    {
      "q": "The best answer to \"Isn't this just ability bias?\" is:",
      "choices": [
        "\"No, ability doesn't matter\"",
        "\"Yes, partly — the paper says so; the causal case rests on the literature's natural experiments\"",
        "\"The R² is 0.96, so no\"",
        "\"I don't know and I won't answer\""
      ],
      "answer": 1,
      "explanation": "Correct: (b). Short, honest, pointed back to the paper's evidence. (a) is wrong: ability bias is real and the paper admits it. (c) is wrong: fit does not answer a causation question. (d) is wrong: \"I don't know\" is fine for unanswerable questions, but this one has an answer in the paper."
    },
    {
      "q": "The 24-point rule means:",
      "choices": [
        "24 slides minimum",
        "No text on a slide smaller than 24-point type",
        "The talk must be 24 minutes",
        "24 words per slide maximum"
      ],
      "answer": 1,
      "explanation": "Correct: (b). If the back row cannot read it, it does not belong on the slide. (a) is wrong: the talk has about 10 slides. (c) is wrong: the talk is 15 minutes. (d) is wrong: the rule is about type size, not word count."
    },
    {
      "q": "Why rehearse three times with a timer?",
      "choices": [
        "To memorize the paper word for word",
        "To find sentences you cannot say, slides with two ideas, and numbers you misread — and to check the talk fits in 15 minutes",
        "Because the tutor requires exactly three",
        "To make the talk longer"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Rehearsal finds the traps before the audience does. (a) is wrong: a talk is not memorized verbatim. (c) is wrong: three is a plan, not a rule. (d) is wrong: rehearsal usually shortens a talk."
    },
    {
      "q": "If a question has no answer in the paper, the right response is:",
      "choices": [
        "Invent a plausible number",
        "Say so — \"That is outside this study; it is the follow-up I name in the limits\"",
        "Change the subject",
        "Repeat the abstract"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Honest and pointed at the paper's stated next step. (a) is wrong: never invent a number in the room. (c) is wrong: evasion is visible. (d) is wrong: the abstract does not answer new questions."
    },
    {
      "q": "The figure's source note should say:",
      "choices": [
        "\"Source: the internet\"",
        "\"Teaching sample, n = 10\"",
        "Nothing — sources are for papers, not slides",
        "\"Source: Card (1999)\""
      ],
      "answer": 1,
      "explanation": "Correct: (b). It names the data honestly: a teaching sample of 10. (a) is wrong: that is not a source. (c) is wrong: figures need sources everywhere. (d) is wrong: Card (1999) is the literature benchmark, not the source of these 10 dots."
    }
  ],
  "studyGuide": "\n<h3>Module 10 — Presenting Your Findings: Quick Reference</h3>\n<p><strong>Core idea:</strong> Don't present the paper — sell people on reading it. One idea per slide, one number per slide, story in your voice.</p>\n<p><strong>10 slides, 15 minutes:</strong> Title · Question · Literature (5–10%) · Data (n = 10, teaching sample) · Figure (scatter + fitted line, 12–20 yrs only) · Table (slope $2.43, t = 13.57, R² = 0.96) · Interpretation ($19.40/hr, ≈ $38,800/yr) · Limits · Policy · Conclusion + questions.</p>\n<div class=\"formula\">Takeaway: \"Each extra year is associated with $2.43 more an hour — strong, significant, and the causal case comes from the literature, not this regression alone.\"</div>\n<p><strong>Hard questions:</strong> ability bias → \"yes, partly; the paper says so\" · 10 workers → \"teaching sample, stated on the title slide\" · controls → \"slope likely biased up; half-payoff check still leaves a small positive net.\" Never invent a number in the room. Rehearse 3× with a timer.</p>\n<p><strong>Paper arc:</strong> This module's assignment builds the presentation — the talk, not a paper section. The paper is complete.</p>\n<p><strong>Self-check:</strong> List the 10 slides and answer the three hard questions in two sentences each — without looking.</p>\n"
};
