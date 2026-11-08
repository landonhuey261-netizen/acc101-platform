// Economics Capstone — Module 2: Finding a Research Question Worth Answering
module.exports = {
  "number": 2,
  "slug": "finding-a-research-question",
  "title": "Finding a Research Question Worth Answering",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what makes a research question good: specific, answerable, falsifiable, and worth answering.",
    "Turn a broad topic (schooling and pay) into a narrow, testable research question.",
    "State a hypothesis with a null and an alternative, and name the variables on each side.",
    "Distinguish a research question from a topic, a policy slogan, and a prediction.",
    "Write the introduction and research-question section of the paper (paper arc: Module 2)."
  ],
  "sections": [
    {
      "heading": "From Topic to Question",
      "html": "<p>A topic is not a question. \"Education and earnings\" is a topic — it could fill a library. A research question is a topic cut down until it can be answered with data you can actually get: \"Is more years of schooling associated with a higher hourly wage among the workers in the teaching sample?\" That question names the population, the two variables, and the relationship to test. Everything in the paper hangs off it: the literature review exists to show what is already known about <em>this</em> question, the data section exists to measure <em>these</em> variables, and the regression exists to test <em>this</em> relationship.</p><p>Narrowing is done with four cuts. <strong>Who:</strong> which people, place, and time — here, the 10 workers in the teaching sample. <strong>What:</strong> which variables, measured how — years of schooling completed, hourly wage in dollars. <strong>How much:</strong> the size of the effect, not just its direction — the regression will estimate dollars per extra year. <strong>Compared to what:</strong> the comparison that makes the question meaningful — workers with more schooling against workers with less, holding nothing else yet (controls come in Module 6's discussion of limits).</p><div class=\"callout\"><strong>Key idea:</strong> If you cannot state your question in one sentence, you do not have a question yet — you have a topic. Write the sentence, then let every later section serve it.</div>"
    },
    {
      "heading": "What Makes a Question Good",
      "html": "<p>A good research question passes four tests. <strong>Specific:</strong> it names the variables and the population — \"schooling and wages among these 10 workers,\" not \"education and the economy.\" <strong>Answerable:</strong> the data to answer it exists or can be collected — the teaching sample is in your hands today. <strong>Falsifiable:</strong> there is an answer that would prove it wrong — if the slope came out zero or negative, the hypothesis fails. <strong>Worth answering:</strong> someone's decision changes with the answer — a student choosing whether to stay in school, a policymaker weighing a training subsidy, an employer setting pay scales.</p><p>Three common failures: the question is too broad (\"does education matter?\"), the question is unanswerable with available data (\"what will wages be in 2050?\"), and the question is really a slogan (\"should everyone go to college?\" — that is a policy position, not a research question; the research question underneath it is \"what is the payoff to an extra year of schooling?\"). Your job in this module is to pass all four tests in one sentence.</p>"
    },
    {
      "heading": "The Hypothesis: Null and Alternative",
      "html": "<p>A hypothesis is a testable prediction. The <strong>null hypothesis (H₀)</strong> is the claim of no effect: the slope on schooling is zero — schooling has no association with hourly wage. The <strong>alternative hypothesis (H₁)</strong> is the claim you are testing: the slope is positive — more schooling is associated with higher wages. The regression in Module 6 tests H₀ against H₁ with a t-statistic; Module 7 reads the result. Stating both hypotheses now matters because it stops you from moving the goalposts later: if the slope comes out small, you cannot quietly rewrite the question to match the result.</p><p>Notice what the hypothesis does <em>not</em> claim: it does not claim schooling <em>causes</em> higher wages. Schooling could be correlated with ability, family background, or motivation, all of which also raise wages. That gap — between association and causation — is the single most important idea in this course, and Module 7 returns to it. For now, the hypothesis is about association, and it is written that way on purpose.</p><div class=\"callout\"><strong>Key idea:</strong> The null is \"no effect.\" You test it, you do not assume it away — and you write the hypothesis down before you see the results.</div>"
    },
    {
      "heading": "Where Good Questions Come From",
      "html": "<p>Good questions come from three places. <strong>Puzzles in the data:</strong> the teaching sample shows wages rising with schooling, but not smoothly — the worker with 16 years of schooling earns $22 while another with 16 years earns $25. Why the gap? <strong>Gaps in the literature:</strong> Module 3 will show what earlier studies found; a question is worth asking when the literature disagrees or has not looked at your population. <strong>Decisions that need numbers:</strong> a student deciding whether a fourth year of college is worth the tuition needs the payoff per year, not a general claim that \"education pays.\"</p><p>For this course the question is fixed — \"Does more schooling raise hourly pay?\" — so your work is to sharpen it, justify it, and write the introduction that makes a reader care. The introduction does three jobs: it states the question, it says why the answer matters (the payoff to schooling drives one of the biggest spending decisions a family makes), and it previews the answer the paper will test (the regression finds $2.43 an hour per extra year, in the teaching sample). That preview is a promise the rest of the paper must keep.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong> a topic is not a question — narrow it by who, what, how much, and compared to what; a good question is specific, answerable, falsifiable, and worth answering; the null hypothesis is \"no effect\" (slope = 0) and the alternative is \"positive effect\" (slope &gt; 0); the hypothesis claims association, not causation. <strong>Paper arc:</strong> this module's assignment writes the paper's introduction and research-question section.</p><div class=\"callout\"><strong>Common mistake:</strong> Writing the question after seeing the results. That is not research — it is storytelling. The question and hypothesis are frozen in Module 2; Modules 5–7 test them.</div><div class=\"callout\"><strong>Common mistake:</strong> Asking \"should\" questions as research questions. \"Should everyone go to college?\" is a value judgment. The research question underneath it — \"what is the payoff to an extra year of schooling?\" — is answerable with data.</div>"
    }
  ],
  "keyTerms": [
    { "term": "Research question", "def": "A single, specific, answerable question a project sets out to answer, naming the population, the variables, and the relationship to test." },
    { "term": "Topic", "def": "A broad area of interest, such as 'education and earnings.' A topic must be narrowed into a research question before it can be studied." },
    { "term": "Hypothesis", "def": "A testable prediction about the relationship between variables — here, that more schooling is associated with higher hourly wages." },
    { "term": "Null hypothesis (H₀)", "def": "The claim of no effect: the slope on schooling is zero. The regression tests whether the data rejects it." },
    { "term": "Alternative hypothesis (H₁)", "def": "The claim being tested against the null — here, that the slope on schooling is positive." },
    { "term": "Falsifiable", "def": "Able to be proven wrong by data. A question is falsifiable if some possible result would count against it — here, a slope of zero or less." },
    { "term": "Population", "def": "The group the question is about — here, the 10 workers in the teaching sample. Results describe this population, not everyone." },
    { "term": "Effect size", "def": "How big an effect is, not just whether it exists — here, dollars of hourly wage per extra year of schooling (the regression slope)." },
    { "term": "Association", "def": "Two variables moving together. The hypothesis in this paper claims association; causation is a stronger claim that needs more evidence." },
    { "term": "Omitted variable", "def": "A factor left out of the analysis that affects both the independent and dependent variables — for example, ability affecting both schooling and wages." },
    { "term": "Introduction (paper section)", "def": "The opening section of a research paper: states the question, says why it matters, and previews the answer the paper will test." },
    { "term": "Scope", "def": "The stated limits of a study — who, where, and when it covers — which bound what its results can claim." },
    { "term": "Motivation", "def": "The reason a question is worth answering: the decision or puzzle that the answer would change." }
  ],
  "video": {
    "title": "Formulating and clarifying the research topic",
    "embedUrl": "https://www.youtube.com/embed/wBA4U4wjWkA",
    "note": "A research-methodology lecture on turning a broad topic into a refined research question, including the Goldilocks test: a question that is neither too big nor too small, but just right.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1 — Paper section: Research question (final draft).</strong> Write the final one-sentence research question for the paper, naming the population (the 10 workers in the teaching sample), both variables, and the expected direction.</p>",
      "solution": "<p><strong>Answer:</strong> \"Is more years of schooling associated with a higher hourly wage among the 10 workers in the teaching sample?\" It names the population (the 10 workers), the independent variable (years of schooling), the dependent variable (hourly wage), and the expected direction (more schooling, higher wage). It claims association, not causation.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2 — Paper section: Hypotheses.</strong> State the null hypothesis (H₀) and the alternative hypothesis (H₁) for the slope on schooling, in words and in symbols (β = the slope).</p>",
      "solution": "<p><strong>Answer:</strong> H₀: β = 0 — years of schooling have no association with hourly wage; the slope is zero. H₁: β &gt; 0 — more years of schooling are associated with a higher hourly wage; the slope is positive. The regression in Module 6 tests H₀ with a t-statistic; if the data rejects H₀, the paper reports the estimated slope ($2.43 an hour per year) as the answer.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3 — Narrowing drill.</strong> Take the topic \"education and earnings\" and narrow it in four cuts: (a) who, (b) what variables and how measured, (c) how much (effect size), (d) compared to what. One line per cut.</p>",
      "solution": "<p><strong>Answer:</strong> (a) Who: the 10 workers in the teaching sample. (b) What: years of schooling completed (independent variable) and hourly wage in dollars (dependent variable). (c) How much: the slope — dollars of hourly wage per extra year of schooling. (d) Compared to what: workers with more years of schooling against workers with fewer years, in the same sample.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4 — Falsifiability check.</strong> Name one result from the regression that would falsify (prove wrong) the alternative hypothesis, and one result that would support it. Use the slope.</p>",
      "solution": "<p><strong>Answer:</strong> Falsifying: a slope of zero or negative — for example, if the regression returned wage = 24.10 + 0.00 × schooling, or a negative slope, the claim that more schooling is associated with higher wages would fail. Supporting: a positive slope that is statistically significant — the actual result, a slope of 2.43 with a t-statistic of 13.57, supports H₁. A positive slope that is tiny and insignificant would support neither claim clearly.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5 — Paper section: Introduction (draft).</strong> Write three sentences: (1) why the payoff to schooling matters (one of the biggest spending decisions a family makes), (2) the research question, (3) a preview of the answer the paper tests (the $2.43 slope).</p>",
      "solution": "<p><strong>Answer:</strong> (1) Deciding how many years of schooling to complete is one of the largest financial decisions a person makes, because tuition costs money now and wages repay it later — so the size of the payoff matters, not just its direction. (2) This paper asks whether more years of schooling are associated with a higher hourly wage among 10 workers in a teaching sample. (3) It tests the hypothesis with a regression of hourly wage on years of schooling, which estimates a payoff of $2.43 an hour for each extra year, and then asks how far that association can be trusted.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6 — Spot the slogan.</strong> Which of these is a research question and which is a slogan? (a) \"Should the government pay for everyone's college?\" (b) \"What is the hourly wage payoff to an extra year of schooling?\" Explain each in one sentence.</p>",
      "solution": "<p><strong>Answer:</strong> (a) is a slogan — it is a policy position (\"should\") that no dataset can settle, because it depends on values, not just facts. (b) is a research question — it names a measurable effect (the wage payoff per year of schooling) that data can answer. The research in (b) can inform the debate in (a), but it cannot replace it.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Which is a research question, not a topic?",
      "choices": [
        "\"Education and earnings\"",
        "\"Is more schooling associated with higher hourly wages among the 10 workers?\"",
        "\"The economy\"",
        "\"School is good\""
      ],
      "answer": 1,
      "explanation": "Correct: (b). It names the population, both variables, and the relationship to test. (a) is wrong: it is a topic with no question in it. (c) is wrong: it is a topic, far too broad. (d) is wrong: it is a slogan, not a question."
    },
    {
      "q": "The null hypothesis for the schooling slope is:",
      "choices": [
        "The slope is positive",
        "The slope is zero",
        "The slope is $2.43",
        "The slope cannot be measured"
      ],
      "answer": 1,
      "explanation": "Correct: (b). H₀ claims no effect: β = 0. (a) is wrong: that is the alternative hypothesis. (c) is wrong: $2.43 is the estimated slope, not a hypothesis. (d) is wrong: the slope is estimated by regression in Module 6."
    },
    {
      "q": "A question is falsifiable when:",
      "choices": [
        "Everyone agrees with it",
        "Some possible result would prove it wrong",
        "It is about the future",
        "It uses big words"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Falsifiability means a result exists that would count against the claim — here, a slope of zero or less. (a) is wrong: agreement is not a test. (c) is wrong: future questions can be unfalsifiable too. (d) is wrong: wording is not a test."
    },
    {
      "q": "The hypothesis in this paper claims:",
      "choices": [
        "Schooling causes higher wages",
        "Schooling is associated with higher wages",
        "Wages cause schooling",
        "Schooling and wages are unrelated"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The hypothesis is about association; causation needs more evidence (Module 7). (a) is wrong: that is the stronger claim the paper does not make yet. (c) is wrong: the direction tested is schooling → wage. (d) is wrong: that is the null hypothesis."
    },
    {
      "q": "Which narrowing cut names the population?",
      "choices": [
        "Who",
        "What",
        "How much",
        "Compared to what"
      ],
      "answer": 0,
      "explanation": "Correct: (a). \"Who\" fixes the people, place, and time — here, the 10 workers in the teaching sample. (b) is wrong: \"what\" names the variables. (c) is wrong: \"how much\" names the effect size. (d) is wrong: \"compared to what\" names the comparison group."
    },
    {
      "q": "\"Should everyone go to college?\" is:",
      "choices": [
        "A research question",
        "A policy slogan — a value judgment, not a testable question",
        "A null hypothesis",
        "A regression result"
      ],
      "answer": 1,
      "explanation": "Correct: (b). \"Should\" asks for a value judgment no dataset can settle. (a) is wrong: it cannot be answered with data alone. (c) is wrong: a null hypothesis is a claim of no effect. (d) is wrong: it is not a number from a regression."
    },
    {
      "q": "Why is the hypothesis written down before seeing the results?",
      "choices": [
        "To make the paper longer",
        "To stop the researcher moving the goalposts after seeing the result",
        "Because the tutor requires it",
        "Because results do not matter"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A hypothesis written after the result is storytelling, not testing. (a) is wrong: length is not the reason. (c) is wrong: the reason is scientific, not administrative. (d) is wrong: results are the whole point — the hypothesis exists so they can be judged fairly."
    },
    {
      "q": "An omitted variable in this project could be:",
      "choices": [
        "Ability, which affects both schooling and wages",
        "The number of workers in the sample",
        "The title of the paper",
        "The regression's R²"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Ability plausibly raises both years of schooling and hourly wages, so leaving it out biases the slope. (b) is wrong: sample size is a design fact, not a variable. (c) is wrong: the title affects nothing in the data. (d) is wrong: R² is a result of the regression, not a cause of wages."
    }
  ],
  "studyGuide": "\n<h3>Module 2 — Finding a Research Question Worth Answering: Quick Reference</h3>\n<p><strong>Core idea:</strong> A topic is not a question. Narrow it by who, what, how much, and compared to what — until it fits in one sentence.</p>\n<p><strong>Final question:</strong> \"Is more years of schooling associated with a higher hourly wage among the 10 workers in the teaching sample?\"</p>\n<div class=\"formula\">H₀: β = 0 (no association) &nbsp;|&nbsp; H₁: β &gt; 0 (positive association) &nbsp;|&nbsp; Estimated slope: $2.43 per extra year</div>\n<p><strong>Four tests of a good question:</strong> specific · answerable · falsifiable · worth answering. A \"should\" question is a slogan, not a research question. The hypothesis claims association, not causation — the gap returns in Module 7.</p>\n<p><strong>Paper arc:</strong> This module's assignment writes the introduction and research-question section.</p>\n<p><strong>Self-check:</strong> Say the research question aloud in one sentence, then state H₀ and H₁ without looking. If you can, the question is frozen and ready to test.</p>\n"
};
