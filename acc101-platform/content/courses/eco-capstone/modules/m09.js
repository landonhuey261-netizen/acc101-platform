// Economics Capstone — Module 9: Writing the Paper: Structure, Tables & Citations
module.exports = {
  "number": 9,
  "slug": "writing-the-paper",
  "title": "Writing the Paper: Structure, Tables & Citations",
  "estTime": "3–4 hours",
  "objectives": [
    "Assemble the eight sections into a complete draft in the right order.",
    "Write the abstract last: question, method, result, implication in one paragraph.",
    "Format the two tables (descriptive statistics; regression results) so a reader can check them.",
    "Cite sources correctly and consistently, and list every reference the paper uses.",
    "Produce the full draft of the paper (paper arc: Module 9 — the draft is complete)."
  ],
  "sections": [
    {
      "heading": "Assembling the Draft",
      "html": "<p>By now the paper exists in pieces — the introduction (Module 2), the literature review (Module 3), data and methods (Module 4), descriptive results (Module 5), regression results (Module 6), interpretation (Module 7), and policy implications (Module 8). This module assembles them in order and adds the three pieces that can only be written last: the title page, the abstract, and the references. The order in the document is: title page, abstract, introduction, literature review, data and methods, descriptive results, regression results, interpretation, policy implications, references, tables. (Tables are printed at the end in many journals; in this course they may also sit where they are discussed — either way, each table is numbered, titled, and referred to in the text.)</p><p>Assembly is not stapling. Read the draft end to end, in one sitting, with a calculator. The slope must be $2.43 everywhere it appears — not $2.42 in one place and $2.44 in another. The mean wage must be $24.10 in the descriptive section, the regression section, and the abstract. Any number that appears twice and differs is a number a reader will find — find it first. The end-to-end read is also where the argument gets checked: does the interpretation's caution (\"association, not causation\") match the policy section's modesty (\"targeted, testable step\")? If the policy section promises more than the interpretation allows, one of them is wrong.</p><div class=\"callout\"><strong>Key idea:</strong> The draft is assembled last, but the numbers are checked first. A paper with one slope in the text and another in the table is a paper nobody trusts.</div>"
    },
    {
      "heading": "The Abstract, Written Last",
      "html": "<p>The abstract is one paragraph, about 150 words, with four sentences: the question, the method, the result, the implication. Here is the sample paper's abstract, which you may use as the model for your own: \"This paper asks whether more years of schooling are associated with higher hourly wages, using a 10-worker teaching sample built so that every calculation can be checked by hand. An ordinary least squares regression of hourly wage on years of schooling estimates a payoff of $2.43 an hour per extra year (standard error 0.18, t = 13.57), with R² = 0.96; the 95% confidence interval is $2.01–$2.84. The estimate sits at the top of the 5–10% range reported in surveys of the literature (Card, 1999). Because the sample is small, uncontrolled, and a teaching sample rather than a survey, the result is an association, not a proven causal effect — and the policy case it supports is a small, targeted, testable step, not blanket expansion.\"</p><p>Count the discipline in that paragraph: every number appears in the body of the paper, the sample's nature is stated, the limit is stated, and the policy claim matches the evidence. An abstract that promises what the paper does not deliver is the fastest way to lose a reader; an abstract that reports only what the paper proved is the fastest way to keep one.</p>"
    },
    {
      "heading": "Tables a Reader Can Check",
      "html": "<p>Two tables carry the paper's evidence. <strong>Table 1 — Descriptive statistics (n = 10):</strong> Wage ($/hour): mean 24.10, median 23.50, SD 7.39, range 14–36. Schooling (years): mean 16.0, median 16.0, SD 2.98, range 12–20. Notes: SDs are sample standard deviations (divided by n − 1). <strong>Table 2 — Regression results (OLS, dependent variable: hourly wage, $):</strong> Intercept −14.70 (SE 2.90, t = −5.06); Schooling 2.43 (SE 0.18, t = 13.57); R² = 0.96; n = 10. Notes: the intercept is reported but not interpreted; predictions are made only within the observed schooling range of 12–20 years.</p><p>Each table is referred to in the text by number (\"Table 1 shows…\", \"Table 2 reports…\"), each has a title that says what it is, and each has a notes line that says what the numbers are. A table without a notes line is a puzzle; a table referred to nowhere is decoration. And the golden rule from Module 1 still holds: the numbers in the tables must match the numbers in the text, to the cent.</p><div class=\"callout\"><strong>Key idea:</strong> A table is evidence, not decoration. Number it, title it, refer to it in the text, and note what every number is.</div>"
    },
    {
      "heading": "Citations and References",
      "html": "<p>Every factual claim borrowed from the literature carries a citation, and every citation appears in the references. This paper uses three: Mincer (1974), <em>Schooling, Experience, and Earnings</em> — the earnings function; Card (1999), \"The causal effect of education on earnings,\" <em>Handbook of Labor Economics</em>, vol. 3 — the survey putting the typical return at roughly 5–10% per year; Angrist and Krueger (1991), \"Does compulsory school attendance affect schooling and earnings?\" <em>Quarterly Journal of Economics</em> — the quarter-of-birth natural experiment. One style, used consistently (author, year in the text; full details in the references), matters more than which style you pick.</p><p>Two citation traps: citing something you have not read (if you have not read Card (1999), cite the survey you did read and say so), and citing a secondary source as if it were primary. Both are fixed the same way — read the thing, or say honestly where you found it. Citation software (Zotero, free) does the bookkeeping: it stores the reference, formats it, and rebuilds the list when you add a paper. The video for Module 3 recommended it; by Module 9 you will be glad you listened.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong> the draft assembles eight sections in order, with the abstract written last; the abstract has four sentences (question, method, result, implication) and about 150 words; Table 1 (descriptive statistics) and Table 2 (regression results) carry the evidence, each numbered, titled, referred to, and noted; three references (Mincer 1974; Card 1999; Angrist and Krueger 1991), one consistent style; the end-to-end read with a calculator catches any number that appears twice and differs. <strong>Paper arc:</strong> this module's assignment assembles the full draft — by the end of Module 9, the paper is complete.</p><div class=\"callout\"><strong>Common mistake:</strong> Writing the abstract first. It summarizes results that do not exist yet, so it ends up as wishes. Write it last, in this module, and let it report what the paper actually proved.</div><div class=\"callout\"><strong>Common mistake:</strong> Numbers that disagree with themselves. The slope is $2.43 in the text, the table, and the abstract — not $2.42 anywhere. The end-to-end read with a calculator is not optional.</div>"
    }
  ],
  "keyTerms": [
    { "term": "Abstract", "def": "A one-paragraph, ~150-word summary of the whole paper: question, method, result, implication. Written last." },
    { "term": "Title page", "def": "The paper's first page: title, author, date, and one line stating what the paper is (a capstone research paper, 10-worker teaching sample)." },
    { "term": "References", "def": "The list at the end of the paper giving full details of every cited work — here Mincer (1974), Card (1999), Angrist and Krueger (1991)." },
    { "term": "Citation style", "def": "A consistent format for in-text citations and references (author, year). Consistency matters more than which style is chosen." },
    { "term": "Table notes", "def": "The line under a table saying what the numbers are — sample size, SD formula, what is and is not interpreted." },
    { "term": "In-text citation", "def": "A short reference inside the text, for example (Card, 1999), pointing to the full entry in the references." },
    { "term": "End-to-end read", "def": "Reading the assembled draft once, start to finish, with a calculator, checking that every number matches everywhere it appears." },
    { "term": "Zotero", "def": "Free citation software that stores references, formats them, and rebuilds the reference list automatically." },
    { "term": "Plagiarism", "def": "Presenting someone else's words or ideas as your own. Avoided by citing every borrowed claim and quoting sparingly." },
    { "term": "Paraphrase", "def": "Restating a source's idea in your own words — still needs a citation, because the idea is borrowed even when the words are yours." },
    { "term": "Appendix", "def": "Extra material after the references — here, the full 10-row dataset and the step-by-step regression arithmetic, so any reader can check the work." },
    { "term": "Draft", "def": "A complete version of the paper, assembled and checked, ready for feedback — the state of the paper at the end of this module." },
    { "term": "Word count", "def": "The length of the paper. This paper runs about 2,500–3,000 words plus tables — long enough to argue, short enough to read." }
  ],
  "video": {
    "title": "How to Write a Research Paper: All 8 Sections in the Right Order (Step by Step)",
    "embedUrl": "https://www.youtube.com/embed/OzXAiB_PfZM",
    "note": "Researchmap's workflow: figures and tables first, results, methods, discussion, introduction, conclusion, abstract and title last — the same write-it-in-the-wrong-order discipline this module teaches, with a worked example.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1 — Paper section: Abstract.</strong> Write the abstract (about 150 words, four sentences): question, method (OLS on the 10-worker teaching sample), result (slope $2.43, SE 0.18, t = 13.57, R² = 0.96, 95% CI $2.01–$2.84), implication (association not causation; targeted, testable policy step).</p>",
      "solution": "<p><strong>Answer:</strong> \"This paper asks whether more years of schooling are associated with higher hourly wages, using a 10-worker teaching sample built so that every calculation can be checked by hand. An ordinary least squares regression of hourly wage on years of schooling estimates a payoff of $2.43 an hour per extra year (standard error 0.18, t = 13.57), with R² = 0.96; the 95% confidence interval is $2.01–$2.84. The estimate sits at the top of the 5–10% range reported in surveys of the literature (Card, 1999). Because the sample is small, uncontrolled, and a teaching sample rather than a survey, the result is an association, not a proven causal effect — and the policy case it supports is a small, targeted, testable step, not blanket expansion.\" Count it: four sentences, every number in the body of the paper, the limit stated, the policy claim matched to the evidence.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2 — Paper section: Table 1.</strong> Rebuild the descriptive statistics table from memory (then check): wage mean 24.10, median 23.50, SD 7.39, range 14–36; schooling mean 16.0, median 16.0, SD 2.98, range 12–20. Add the notes line (n = 10; sample SDs).</p>",
      "solution": "<p><strong>Answer:</strong> Table 1 — Descriptive statistics (n = 10). Wage ($/hour): mean 24.10, median 23.50, sample SD 7.39, range 14–36. Schooling (years): mean 16.0, median 16.0, sample SD 2.98, range 12–20. Notes: SDs are sample standard deviations (divided by n − 1 = 9); the data is a teaching sample, not a real survey.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3 — Paper section: Table 2.</strong> Rebuild the regression results table from memory (then check): Intercept −14.70 (SE 2.90, t = −5.06); Schooling 2.43 (SE 0.18, t = 13.57); R² = 0.96; n = 10. Add the notes line (dependent variable, method, intercept warning, no extrapolation).</p>",
      "solution": "<p><strong>Answer:</strong> Table 2 — Regression results (OLS; dependent variable: hourly wage, $). Intercept: −14.70 (SE 2.90, t = −5.06). Schooling (years): 2.43 (SE 0.18, t = 13.57). R² = 0.96, n = 10. Notes: standard errors are the usual OLS standard errors; the intercept is reported but not interpreted (zero schooling is outside the data); predictions are made only within the observed schooling range of 12–20 years.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4 — Paper section: References.</strong> Write the three references in full: Mincer (1974), <em>Schooling, Experience, and Earnings</em>; Card (1999), \"The causal effect of education on earnings,\" <em>Handbook of Labor Economics</em>, vol. 3; Angrist and Krueger (1991), \"Does compulsory school attendance affect schooling and earnings?\" <em>Quarterly Journal of Economics</em>.</p>",
      "solution": "<p><strong>Answer:</strong> Angrist, J. D., &amp; Krueger, A. B. (1991). Does compulsory school attendance affect schooling and earnings? <em>Quarterly Journal of Economics</em>, 106(4), 979–1014. Card, D. (1999). The causal effect of education on earnings. In O. Ashenfelter &amp; D. Card (Eds.), <em>Handbook of Labor Economics</em> (Vol. 3, pp. 1801–1863). Elsevier. Mincer, J. (1974). <em>Schooling, Experience, and Earnings</em>. National Bureau of Economic Research. (Page numbers are given as in the standard editions; check them against the copies you actually read.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 5 — Consistency check.</strong> The slope appears in the abstract, the regression section, the interpretation, the policy section, and Table 2. List the value it must have in all five places, and the value R² must have in all three places it appears (regression section, interpretation, Table 2).</p>",
      "solution": "<p><strong>Answer:</strong> The slope must be $2.43 (2.425 unrounded) in all five places — abstract, regression results, interpretation, policy implications, Table 2. R² must be 0.96 (0.958 unrounded) in all three places — regression results, interpretation, Table 2. Any other value anywhere is an error, found by the end-to-end read with a calculator.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6 — Full draft checklist.</strong> List the complete order of the paper (title page, abstract, 8 sections, references, tables, appendix) and tick off which module wrote each part. What is still missing after this module?</p>",
      "solution": "<p><strong>Answer:</strong> Title page — Module 9. Abstract — Module 9. Introduction and question — Module 2. Literature review — Module 3. Data and methods — Module 4. Descriptive results — Module 5. Regression results — Module 6. Interpretation — Module 7. Policy implications — Module 8. References — Module 9. Tables 1–2 — Modules 5–6, assembled in Module 9. Appendix (full dataset + arithmetic) — Module 9. After this module nothing is missing: the paper is complete. What remains is the presentation (Module 10) and the comprehensive review (Modules 11–12).</p>"
    }
  ],
  "quiz": [
    {
      "q": "The abstract is written:",
      "choices": [
        "First",
        "Last, after the results exist",
        "By the tutor",
        "Only for long papers"
      ],
      "answer": 1,
      "explanation": "Correct: (b). It summarizes the whole paper, so it is written in Module 9. (a) is wrong: position in the paper is not writing order. (c) is wrong: the student writes it. (d) is wrong: every research paper needs one."
    },
    {
      "q": "A good abstract has four sentences covering:",
      "choices": [
        "Title, author, date, and word count",
        "Question, method, result, implication",
        "Introduction, literature, data, and conclusion",
        "Hypothesis, proof, policy, and references"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Question, method, result, implication — about 150 words. (a) is wrong: that is the title page. (c) is wrong: that is the paper's structure, not the abstract's. (d) is wrong: \"proof\" overclaims, and references do not belong in an abstract."
    },
    {
      "q": "Table 2's notes line must state:",
      "choices": [
        "The author's favorite color",
        "The dependent variable, the method, and that the intercept is not interpreted",
        "The paper's word count",
        "The date the data was collected"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Notes say what the numbers are — dependent variable (hourly wage, $), method (OLS), intercept warning, no extrapolation. (a) is wrong: irrelevant. (c) is wrong: word count is not table information. (d) is wrong: the teaching sample has no collection date."
    },
    {
      "q": "The end-to-end read is done with:",
      "choices": [
        "A calculator, checking every number matches everywhere it appears",
        "A friend who has not read the paper",
        "A spellchecker only",
        "No tools — it is a skim"
      ],
      "answer": 0,
      "explanation": "Correct: (a). The slope must be $2.43 in all five places it appears; the read catches any difference. (b) is wrong: a fresh reader helps, but cannot check the arithmetic. (c) is wrong: spelling is not the point. (d) is wrong: a skim will not catch a $2.42 hiding in a table."
    },
    {
      "q": "Which reference is the survey putting the return to schooling at roughly 5–10% per year?",
      "choices": [
        "Mincer (1974)",
        "Card (1999)",
        "Angrist and Krueger (1991)",
        "None — it is the author's own estimate"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Card (1999) surveyed the literature. (a) is wrong: Mincer (1974) built the earnings function. (c) is wrong: Angrist and Krueger (1991) ran the quarter-of-birth natural experiment. (d) is wrong: the 5–10% range is the literature's, cited to Card."
    },
    {
      "q": "Citing a paper you have not read is:",
      "choices": [
        "Standard practice",
        "A trap — cite what you read, or say honestly where you found it",
        "Fine if the citation looks right",
        "Required for a good grade"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Cite what you read; a citation is a claim that you have read the work. (a) is wrong: it is not standard practice. (c) is wrong: a right-looking citation you have not read is still dishonest. (d) is wrong: grades reward honest citations, not long lists."
    },
    {
      "q": "The appendix of this paper holds:",
      "choices": [
        "The author's biography",
        "The full 10-row dataset and the step-by-step regression arithmetic",
        "A second research question",
        "The exam questions"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The appendix lets any reader check the work. (a) is wrong: biographies do not belong in a paper. (c) is wrong: one paper, one question. (d) is wrong: exams are course material, not paper content."
    },
    {
      "q": "After Module 9, the paper is:",
      "choices": [
        "Still missing the results",
        "Complete — the presentation and the review drills remain",
        "Only an outline",
        "Ready to submit to a journal"
      ],
      "answer": 1,
      "explanation": "Correct: (b). All eight sections, abstract, references, and tables are assembled; Module 10 is the presentation and Modules 11–12 are review. (a) is wrong: results were written in Modules 5–6. (c) is wrong: the draft is complete, not an outline. (d) is wrong: a teaching-sample capstone paper is coursework, not a journal submission."
    }
  ],
  "studyGuide": "\n<h3>Module 9 — Writing the Paper: Quick Reference</h3>\n<p><strong>Core idea:</strong> Assemble in order, write the abstract last, and check every number end to end with a calculator.</p>\n<p><strong>Order:</strong> Title page · Abstract (last, ~150 words: question, method, result, implication) · Introduction (M2) · Literature review (M3) · Data + methods (M4) · Descriptive results (M5) · Regression results (M6) · Interpretation (M7) · Policy (M8) · References · Tables · Appendix.</p>\n<div class=\"formula\">Slope $2.43 in all 5 places &nbsp;|&nbsp; R² 0.96 in all 3 places &nbsp;|&nbsp; Table 1: descriptives &nbsp;|&nbsp; Table 2: regression</div>\n<p><strong>References:</strong> Mincer (1974) · Card (1999) · Angrist and Krueger (1991). One consistent style; cite what you read; Zotero does the bookkeeping.</p>\n<p><strong>Paper arc:</strong> This module's assignment assembles the full draft — the paper is complete.</p>\n<p><strong>Self-check:</strong> Write the abstract's four sentences and rebuild both tables from memory, then check them.</p>\n"
};
