// Economics Capstone — Module 3: Literature Review: What Do We Already Know?
module.exports = {
  "number": 3,
  "slug": "literature-review",
  "title": "Literature Review: What Do We Already Know?",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what a literature review is for: showing what is known, what is disputed, and where the gap is.",
    "Summarize the classic returns-to-schooling literature (Mincer; Card's survey) in plain words.",
    "Organize a literature review by theme, not by listing papers one after another.",
    "Identify the gap this paper fills: a small, fully worked, hand-checkable estimate.",
    "Write the literature review section of the paper (paper arc: Module 3)."
  ],
  "sections": [
    {
      "heading": "What a Literature Review Is For",
      "html": "<p>A literature review is not a list of summaries. It is an argument: here is what we already know about the payoff to schooling, here is where the studies disagree, and here is the gap my paper fills. A reader who finishes it should know exactly why your question is still worth asking — and exactly what your paper adds. If the review reads like \"Smith (2001) found X. Jones (2005) found Y. Brown (2010) found Z,\" it has failed: it reports, but it does not synthesize.</p><p>Synthesis means grouping by theme. For the returns to schooling, the themes are: <strong>the classic estimate</strong> (how big is the payoff?), <strong>the causation problem</strong> (is it schooling, or is it ability?), and <strong>the measurement problem</strong> (what counts as schooling, and what counts as pay?). Each theme gets a paragraph that compares studies, not a paragraph per study. Your paper's contribution is then stated against the themes: a small, fully worked estimate that a beginner can check by hand — something the big survey literature does not provide.</p><div class=\"callout\"><strong>Key idea:</strong> Organize by theme, not by author. The question is \"what do we know?\" — not \"who wrote what?\"</div>"
    },
    {
      "heading": "The Classic Finding: Schooling Pays",
      "html": "<p>The starting point is Jacob Mincer's earnings function (1974), the model that launched the modern literature: earnings rise with years of schooling and with experience, but at a decreasing rate. Mincer's framework turned the payoff to schooling into a number — the percentage increase in earnings per extra year — and generations of studies since have estimated it. The broad finding is stable: each additional year of schooling is associated with higher earnings, with surveys of the literature (for example, Card, 1999) putting the typical estimated return at roughly 5–10% per year of schooling, and the estimate rising when researchers use better methods to handle the causation problem.</p><p>Translate that into this paper's units. The teaching sample's mean wage is $24.10 an hour. A 5–10% return per year would mean roughly $1.21–$2.41 an hour for each extra year — and the regression in Module 6 will estimate $2.43 an hour, at the top of that range. That comparison is exactly what a literature review is for: it gives the reader a benchmark to judge your result against before they see it. A result inside the literature's range is believable; a result far outside it needs explaining.</p>"
    },
    {
      "heading": "The Causation Problem: Ability Bias",
      "html": "<p>The hardest problem in this literature is that schooling is not randomly assigned. People who stay in school longer may also be more able, more motivated, or from better-off families — and those same traits raise wages. If so, the regression slope mixes together the effect of schooling and the effect of ability, and it overstates the payoff to schooling itself. Economists call this <strong>ability bias</strong>: the estimated return is biased upward because ability is omitted from the regression.</p><p>The literature's answer has been to find natural experiments — situations where schooling varies for reasons unrelated to ability. The most famous is the quarter-of-birth study (Angrist and Krueger, 1991), which used compulsory-schooling laws: children born late in the year stayed in school slightly longer because of how the law interacted with their birthdays, and that extra schooling — assigned by the calendar, not by ability — still raised earnings. That design is the gold standard this paper cannot match with 10 workers, and the review says so honestly: the teaching sample can estimate an association, and the literature's natural experiments are what make the causal case. Module 7 returns to this gap when it interprets the results.</p><div class=\"callout\"><strong>Key idea:</strong> Ability bias is the reason a regression slope is not a causal effect. Name it in the review, or your reader will name it for you.</div>"
    },
    {
      "heading": "The Gap This Paper Fills",
      "html": "<p>No literature review is complete without the gap — the sentence that justifies the paper. Here the gap is not a new finding; it is a new <em>form</em>. The returns-to-schooling literature is built on large surveys and advanced methods that a beginner cannot check. This paper does the opposite: it estimates the same relationship on a 10-worker teaching sample where every number — every mean, every deviation, every residual — can be recomputed by hand. The contribution is pedagogical, and the review states that plainly: this paper does not claim to improve on Card's survey; it claims to make the survey's logic visible.</p><p>Writing the gap also protects you. A reader who knows the literature will ask \"why should I read this?\" and the review answers before they ask: because here the whole estimation is transparent, the data is printed in full, and the limits (10 workers, no controls, association not causation) are stated in the open. A paper that hides its limits invites attack; a paper that states them invites trust.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong> a literature review synthesizes by theme — the classic estimate, the causation problem, the measurement problem — and ends with the gap; the classic literature finds roughly a 5–10% earnings return per year of schooling (Card, 1999), which at the sample mean wage of $24.10 is roughly $1.21–$2.41 an hour; ability bias pushes the simple estimate up; this paper's gap is a fully hand-checkable estimate on a teaching sample. <strong>Paper arc:</strong> this module's assignment writes the literature review section.</p><div class=\"callout\"><strong>Common mistake:</strong> Listing papers instead of synthesizing them. \"Smith found X, Jones found Y\" is a bibliography with verbs. Group by what the studies agree on, where they disagree, and what is still missing.</div><div class=\"callout\"><strong>Common mistake:</strong> Citing a result without its number. \"Schooling pays\" is a slogan; \"roughly 5–10% per year (Card, 1999)\" is a benchmark your own $2.43 estimate can be judged against.</div>"
    }
  ],
  "keyTerms": [
    { "term": "Literature review", "def": "A synthesis of what earlier research found on your question, organized by theme, ending with the gap your paper fills." },
    { "term": "Synthesis", "def": "Combining studies into themes — what they agree on, where they disagree — rather than summarizing them one by one." },
    { "term": "Mincer earnings function", "def": "Jacob Mincer's 1974 model relating earnings to years of schooling and experience; the foundation of the returns-to-schooling literature." },
    { "term": "Returns to schooling", "def": "The increase in earnings associated with an extra year of schooling — typically estimated at roughly 5–10% per year in surveys of the literature." },
    { "term": "Ability bias", "def": "Upward bias in the estimated return to schooling because ability (omitted) raises both schooling and wages." },
    { "term": "Natural experiment", "def": "A situation where a treatment varies for reasons unrelated to the people involved — for example, compulsory-schooling laws interacting with birth dates — used to estimate causal effects." },
    { "term": "Omitted variable bias", "def": "Bias in a regression slope caused by leaving out a variable that affects both the independent and dependent variables." },
    { "term": "Benchmark", "def": "A published number your own result can be judged against — here, the literature's 5–10% return per year of schooling." },
    { "term": "Gap (in the literature)", "def": "What earlier research has not done or not shown — the justification for your paper. Here, a fully hand-checkable estimate on a teaching sample." },
    { "term": "Citation", "def": "A reference to an earlier work (author, year) that lets the reader check the claim. Every factual claim from the literature needs one." },
    { "term": "Survey (of the literature)", "def": "A paper that collects and compares many studies on one question — for example, Card (1999) on the returns to schooling." },
    { "term": "Measurement error", "def": "Error in measuring a variable — for example, self-reported years of schooling — which can bias regression estimates." },
    { "term": "External validity", "def": "Whether results from one sample apply to other people, places, or times. A 10-worker teaching sample has low external validity, stated plainly." }
  ],
  "video": {
    "title": "Literature Review - Step by Step Guide For Graduate Students | Prof. David Stuckler",
    "embedUrl": "https://www.youtube.com/embed/rk_jgtdJOD0",
    "note": "Professor David Stuckler's five-step guide: dive in with Google Scholar, find structure, evaluate sources, synthesize, then write — plus the tip that citation software (Zotero) does the bookkeeping for you.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1 — Paper section: Literature review, theme 1 (the classic estimate).</strong> Write one paragraph: Mincer's earnings function (1974) made the payoff to schooling a number; surveys such as Card (1999) put the typical return at roughly 5–10% per year. End the paragraph by converting that range into dollars at the sample mean wage of $24.10.</p>",
      "solution": "<p><strong>Answer:</strong> Mincer's (1974) earnings function turned the payoff to schooling into an estimable number — the percentage increase in earnings per extra year of schooling — and the literature since has estimated it again and again. Surveys of that literature, notably Card (1999), put the typical estimated return at roughly 5–10% per year of schooling, with the higher end coming from studies that handle the causation problem better. At the teaching sample's mean wage of $24.10 an hour, 5% is $1.21 an hour and 10% is $2.41 an hour — so the literature's range, in this paper's units, is roughly $1.21–$2.41 per extra year.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2 — Paper section: Literature review, theme 2 (the causation problem).</strong> Write one paragraph explaining ability bias in plain words, and name the natural-experiment answer (Angrist and Krueger, 1991, quarter of birth and compulsory schooling).</p>",
      "solution": "<p><strong>Answer:</strong> The central problem is that schooling is not randomly assigned: people who stay in school longer may also be more able or motivated, and those traits raise wages too, so a simple regression mixes the effect of schooling with the effect of ability and overstates the payoff — this is ability bias. The literature's answer has been natural experiments, above all Angrist and Krueger (1991), who used the interaction of birth dates with compulsory-schooling laws: children born late in the year stayed in school slightly longer for reasons unrelated to their ability, and that extra schooling still raised their earnings. The teaching sample in this paper cannot run such a design, so its estimate is an association, and the causal case rests on the literature, not on this regression alone.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3 — Benchmark check.</strong> The literature's range is roughly $1.21–$2.41 an hour per extra year (5–10% of $24.10). The paper's regression estimates $2.43. Is $2.43 inside, above, or below the range, and by how much? What does that suggest?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: The top of the range is $2.41. Step 2: $2.43 − $2.41 = $0.02 — the estimate sits $0.02 above the top of the literature's range, essentially at it. Step 3: That suggests the estimate is believable and consistent with the literature, not a wild outlier. Step 4: The likely reason it sits at the top is ability bias in a 10-worker sample with no controls — exactly the limitation the paper states in Module 7.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4 — Paper section: The gap.</strong> Write the gap paragraph: what this paper adds is not a new finding but a fully hand-checkable estimate on a 10-worker teaching sample. Two or three sentences.</p>",
      "solution": "<p><strong>Answer:</strong> What this paper adds is not a new estimate of the return to schooling — the literature has estimated that many times, on far larger samples. It adds transparency: the same relationship, estimated on a 10-worker teaching sample in which every mean, deviation, and residual is printed in full and can be recomputed by hand. A reader who wants to see how a regression slope is actually built, rather than taking software output on trust, can follow every step here.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5 — Synthesis drill.</strong> Rewrite this list-style sentence as synthesis: \"Mincer (1974) found schooling raises earnings. Card (1999) surveyed the literature. Angrist and Krueger (1991) used quarter of birth.\" One or two sentences, grouped by theme.</p>",
      "solution": "<p><strong>Answer:</strong> \"The literature agrees that schooling is associated with higher earnings — Mincer (1974) made the return estimable, and Card's (1999) survey puts it at roughly 5–10% per year — but disagrees about how much of that association is causal, which is why Angrist and Krueger (1991) turned to a natural experiment based on quarter of birth.\" The rewrite groups by theme (the size of the return, then the causation problem) instead of listing authors.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6 — Citation check.</strong> A draft sentence says: \"Studies show schooling pays.\" Fix it so it carries a number and a citation, using the Card (1999) benchmark.</p>",
      "solution": "<p><strong>Answer:</strong> \"Surveys of the literature put the typical estimated return to an extra year of schooling at roughly 5–10% higher earnings (Card, 1999).\" The fix adds the number (5–10%) and the citation (Card, 1999), so the reader can check the claim instead of taking the writer's word for it.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A literature review should be organized by:",
      "choices": [
        "Author, one paragraph per paper",
        "Theme — what studies agree on, where they disagree, and what is missing",
        "Publication date, newest first",
        "Alphabetical order of titles"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Synthesis groups by theme so the reader learns what is known. (a) is wrong: that is a list, not a synthesis. (c) is wrong: date order is not an argument. (d) is wrong: alphabetical order is a bibliography, not a review."
    },
    {
      "q": "Mincer's earnings function (1974) is important because it:",
      "choices": [
        "Proved schooling causes higher wages",
        "Made the payoff to schooling an estimable number",
        "Collected the first wage data",
        "Ended the debate about schooling"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Mincer related earnings to schooling and experience, turning the return into a number to estimate. (a) is wrong: no single model proves causation. (c) is wrong: wage data existed long before 1974. (d) is wrong: the debate continued — that is why Card surveyed it in 1999."
    },
    {
      "q": "Surveys of the literature (Card, 1999) put the typical return to a year of schooling at roughly:",
      "choices": [
        "1–2%",
        "5–10%",
        "20–30%",
        "50%"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Card's survey puts the typical estimated return at roughly 5–10% per year. (a) is wrong: that is far below the surveyed range. (c) is wrong: that would be an implausibly large return. (d) is wrong: no survey finds a 50% return per year."
    },
    {
      "q": "At a mean wage of $24.10, a 10% return per year of schooling is:",
      "choices": [
        "$1.21 an hour",
        "$2.41 an hour",
        "$24.10 an hour",
        "$0.24 an hour"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 10% × $24.10 = $2.41. (a) is wrong: $1.21 is the 5% figure. (c) is wrong: that is the whole mean wage. (d) is wrong: that is 1% of $24.10."
    },
    {
      "q": "Ability bias means the simple regression slope:",
      "choices": [
        "Understates the payoff because ability is measured perfectly",
        "Overstates the payoff because ability raises both schooling and wages and is left out",
        "Is exactly right",
        "Cannot be computed"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Ability is omitted, it raises both variables, so the slope absorbs its effect and is biased upward. (a) is wrong: the bias is upward, and ability is not measured at all here. (c) is wrong: omitted variable bias is the point. (d) is wrong: the slope is computable — it is just biased."
    },
    {
      "q": "Angrist and Krueger (1991) used quarter of birth because:",
      "choices": [
        "Birthdays determine ability",
        "Compulsory-schooling laws made some children stay in school longer for reasons unrelated to ability",
        "It was the only data available",
        "Winter babies earn more"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The law-plus-birthday interaction assigned extra schooling by the calendar, not by ability — a natural experiment. (a) is wrong: birthdays do not determine ability. (c) is wrong: the design was chosen for identification, not convenience. (d) is wrong: that is not the finding."
    },
    {
      "q": "This paper's gap in the literature is:",
      "choices": [
        "A new, larger estimate of the return to schooling",
        "A fully hand-checkable estimate on a 10-worker teaching sample",
        "Proof that schooling causes higher wages",
        "A new dataset of millions of workers"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The contribution is transparency — every number recomputable by hand. (a) is wrong: the paper does not claim a better estimate. (c) is wrong: 10 workers cannot prove causation. (d) is wrong: the sample is 10 workers, deliberately tiny."
    },
    {
      "q": "A literature review that hides the paper's limits:",
      "choices": [
        "Looks stronger to readers",
        "Invites attack — a reader who finds the limits first will not trust the rest",
        "Is standard practice",
        "Saves space for results"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Stated limits invite trust; hidden limits invite distrust when found. (a) is wrong: it looks stronger only until the limits are found. (c) is wrong: honest reviews state limits. (d) is wrong: limits belong in the review and the interpretation, not cut for space."
    }
  ],
  "studyGuide": "\n<h3>Module 3 — Literature Review: Quick Reference</h3>\n<p><strong>Core idea:</strong> Synthesize by theme, not by author — the classic estimate, the causation problem, the measurement problem — and end with the gap.</p>\n<p><strong>Classic finding:</strong> Mincer (1974) made the return to schooling estimable. Card's (1999) survey: roughly 5–10% per year.</p>\n<div class=\"formula\">5% of $24.10 = $1.21/hr &nbsp;|&nbsp; 10% of $24.10 = $2.41/hr &nbsp;|&nbsp; This paper's estimate: $2.43/hr — at the top of the range</div>\n<p><strong>Causation problem:</strong> Ability bias pushes the simple slope up. Angrist and Krueger (1991) used quarter of birth + compulsory schooling as a natural experiment. <strong>Gap:</strong> a fully hand-checkable estimate on a 10-worker teaching sample.</p>\n<p><strong>Paper arc:</strong> This module's assignment writes the literature review section.</p>\n<p><strong>Self-check:</strong> State the 5–10% range, convert it to dollars at $24.10, and explain ability bias in one sentence each — without looking.</p>\n"
};
