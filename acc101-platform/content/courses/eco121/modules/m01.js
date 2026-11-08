module.exports = {
  "number": 1,
  "slug": "data-and-statistics-why-economists-count-things",
  "title": "Data & Statistics: Why Economists Count Things",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what statistics is and why economists cannot do their job without it.",
    "Distinguish a population from a sample and a parameter from a statistic.",
    "Name the four kinds of data economists work with and give an example of each.",
    "Review the bus121 foundations — mean, median, mode, and standard deviation — and read them in a new dataset.",
    "Tell a good statistical question from a bad one, and spot the difference between a fact and a claim."
  ],
  "sections": [
    {
      "heading": "Why Economists Count Things",
      "html": "<p>Economics is the study of how people make choices when resources are scarce — and choices leave footprints in numbers. Prices, wages, unemployment, inflation, sales, and savings are all numbers, and <strong>statistics</strong> is the set of tools that turns those numbers into evidence. Without statistics, an economist's claim that “the minimum wage costs jobs” or “college pays off” is just an opinion. With statistics, it is a claim you can test, measure, and argue about honestly.</p><p>Every headline number you have ever read — the unemployment rate, the inflation rate, average rent — is a statistic: a number computed from data. This course teaches you how those numbers are made, what they can and cannot prove, and how to make your own. By the end you will be able to read a government report, a survey, or a research paper and ask the right questions: who was measured, how many, and how sure should I be?</p><div class=\"callout\"><strong>Key idea:</strong> Statistics is not about memorizing formulas. It is about turning a real question (“are wages rising?”) into data, and turning data back into an answer you can defend.</div>"
    },
    {
      "heading": "Populations, Samples, Parameters, and Statistics",
      "html": "<p>A <strong>population</strong> is the whole group you care about — every worker in Michigan, every household in the United States. A <strong>sample</strong> is the smaller group you actually measure — the 1,000 households a survey calls. A <strong>parameter</strong> is a number that describes the population (the true average wage of all Michigan workers). A <strong>statistic</strong> is a number computed from a sample (the average wage of the 1,000 workers surveyed).</p><p>We almost never get to measure a whole population: it costs too much and takes too long. So statistics is the art of learning about a parameter from a statistic — and, crucially, of knowing how far off the statistic might be. That gap between the sample and the population is the subject of Modules 5 and 6, and it is the reason this course exists.</p><div class=\"callout\"><strong>Key idea:</strong> Parameter = population (usually unknown). Statistic = sample (what we actually compute). Never confuse the two — every mistake in this course starts by mixing them up.</div>"
    },
    {
      "heading": "The bus121 Foundations — A Quick Review",
      "html": "<p>If you took the Business program's bus121 (applied business statistics), you already know the four workhorses of describing data. Here they are again, on one small dataset, because everything in this course builds on them. Ten part-time student workers report these hourly wages (in dollars): 13, 14, 15, 15, 16, 17, 18, 19, 21, 24.</p><p>The <strong>mean</strong> (average) is the sum divided by how many values there are: the wages add to 172, and 172 ÷ 10 = <strong>$17.20</strong>. The <strong>median</strong> is the middle value when the data are ordered: with 10 values the middle two are 16 and 17, so the median is (16 + 17) ÷ 2 = <strong>$16.50</strong>. The <strong>mode</strong> is the most common value: <strong>$15</strong>, which appears twice. The <strong>standard deviation</strong> measures the typical distance from the mean: the sample standard deviation is <strong>$3.39</strong> (the population standard deviation, dividing by 10 instead of 9, would be $3.22 — Module 2 explains when each is right).</p><p>If you have not taken bus121, do not worry: Module 2 rebuilds all of this from scratch, slowly, with more examples. The only thing you need from bus121 is the habit of reading a dataset before you compute anything — look at the values, notice the shape, then reach for a formula.</p><div class=\"formula\">Mean x&#772; = (sum of all values) &divide; n &nbsp;|&nbsp; Sample SD s = &radic;[&Sigma;(x &#8722; x&#772;)&sup2; &divide; (n &#8722; 1)]</div>"
    },
    {
      "heading": "Kinds of Data Economists Use",
      "html": "<p>Not all numbers are the same kind of number, and the kind decides what you are allowed to do with them. <strong>Categorical data</strong> puts things in groups: employed or unemployed, renter or owner, Democrat or Republican. You can count them and find percentages, but you cannot average them — the “average” of employed and unemployed is nonsense.</p><p><strong>Quantitative data</strong> is measured in numbers: wages in dollars, prices, hours worked, years of schooling. Within it, <strong>discrete</strong> data counts whole things (number of children, number of jobs held) while <strong>continuous</strong> data can take any value in a range (wages, prices, time). Most economic data is quantitative and continuous, which is why this course spends most of its time on means, spreads, and lines.</p><p>Economists also sort data by <strong>time</strong>: <strong>cross-sectional data</strong> is a snapshot of many people at one moment (this month's wages for 1,000 workers), while <strong>time-series data</strong> follows one thing over many moments (the unemployment rate, month by month, for five years). The lab for this course uses a real time series — the U.S. unemployment rate — and you will see both kinds again in eco131.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Statistics turns economic questions into data and data into defensible answers.</li><li>Population = everyone you care about; sample = who you measured. Parameter = population number; statistic = sample number.</li><li>bus121 foundations reviewed: mean, median, mode, standard deviation — on the wage data (mean $17.20, median $16.50, mode $15, sample SD ${wsd:.2f}).</li><li>Categorical data groups things; quantitative data measures them. Cross-sectional data is a snapshot; time-series data follows one thing over time.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Calling a sample average “the” average wage, as if it were the population's. A sample statistic estimates a parameter — it is not the parameter. Always say which one you have.</div><div class=\"callout\"><strong>Common mistake:</strong> Averaging categorical data. You can say 72% of workers are employed; you cannot say the “average employment status” is 0.72 and mean anything by it.</div><p><strong>Ready-to-Work link:</strong> Every economics job starts the same way: someone hands you a dataset and a question. Your first move is always the same — what is the population, what is the sample, and what kind of data am I looking at?</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Statistics",
      "def": "The science of collecting, describing, and drawing conclusions from data."
    },
    {
      "term": "Population",
      "def": "The entire group you want to learn about, such as all workers in a state."
    },
    {
      "term": "Sample",
      "def": "The smaller group you actually measure, drawn from the population."
    },
    {
      "term": "Parameter",
      "def": "A number that describes a population, such as the true average wage; usually unknown."
    },
    {
      "term": "Statistic",
      "def": "A number computed from a sample, such as the average wage of the workers surveyed."
    },
    {
      "term": "Descriptive statistics",
      "def": "Tools that summarize data: means, medians, spreads, and charts."
    },
    {
      "term": "Inferential statistics",
      "def": "Tools that use a sample to draw conclusions about a population."
    },
    {
      "term": "Mean",
      "def": "The average: the sum of the values divided by how many there are."
    },
    {
      "term": "Median",
      "def": "The middle value of ordered data; the average of the two middle values when n is even."
    },
    {
      "term": "Mode",
      "def": "The most frequently occurring value in a dataset."
    },
    {
      "term": "Standard deviation",
      "def": "The typical distance of data values from their mean; a measure of spread."
    },
    {
      "term": "Categorical data",
      "def": "Data that puts observations into groups or categories, such as employed or unemployed."
    },
    {
      "term": "Quantitative data",
      "def": "Data measured in numbers, such as wages, prices, or hours worked."
    },
    {
      "term": "Discrete data",
      "def": "Quantitative data that counts whole things, such as the number of children."
    },
    {
      "term": "Continuous data",
      "def": "Quantitative data that can take any value in a range, such as wages or prices."
    },
    {
      "term": "Cross-sectional data",
      "def": "Data on many subjects at one point in time, such as this month's wages for 1,000 workers."
    },
    {
      "term": "Time-series data",
      "def": "Data on one subject measured repeatedly over time, such as the monthly unemployment rate."
    }
  ],
  "video": {
    "title": "Statistics made easy ! ! !   Learn about the t-test, the chi square test, the p value and more",
    "embedUrl": "https://www.youtube.com/embed/I10q6fjPxJ0",
    "note": "A friendly tour of the main statistical tests — t-tests, chi-square, p-values — so you can see where this whole course is heading before you start the details.",
    "more": [
      {
        "title": "StatQuest: The Normal Distribution, Clearly Explained!!!",
        "url": "https://www.youtube.com/watch?v=rzFX5NWojp0"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A researcher wants to know the average rent paid by students at a college. She surveys 200 students. Name the population, the sample, the parameter, and the statistic.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The <strong>population</strong> is all students at the college. Step 2: The <strong>sample</strong> is the 200 students surveyed. Step 3: The <strong>parameter</strong> is the true average rent of all students at the college. Step 4: The <strong>statistic</strong> is the average rent of the 200 surveyed students — the number she actually computes.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Ten hourly wages (in dollars) are: 13, 14, 15, 15, 16, 17, 18, 19, 21, 24. (a) Find the mean. (b) Find the median. (c) Find the mode.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Sum = 172. Mean = 172 ÷ 10 = <strong>$17.20</strong>. Step 2: Ordered, the middle two values are 16 and 17, so the median = (16 + 17) ÷ 2 = <strong>$16.50</strong>. Step 3: $15 appears twice and no other value repeats, so the mode is <strong>$15</strong>.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> For the same wage data, the squared deviations from the mean ($17.20) add to 103.60. (a) Find the sample variance and sample standard deviation. (b) Find the population standard deviation.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Sample variance divides by n − 1 = 9: 103.60 ÷ 9 = 11.51, so the sample SD = √11.51 = <strong>$3.39</strong>. Step 2: Population variance divides by n = 10: 103.60 ÷ 10 = 10.36, so the population SD = √10.36 = <strong>$3.22</strong>. Step 3: The sample SD is larger because dividing by the smaller number (9) inflates it — that is the correction for using a sample.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Classify each variable as categorical or quantitative, and if quantitative, as discrete or continuous: (a) a worker's occupation, (b) the number of jobs a worker has held, (c) a worker's hourly wage, (d) whether a worker is unionized.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: (a) Occupation is <strong>categorical</strong> — it puts workers in groups. Step 2: (b) Number of jobs held is <strong>quantitative discrete</strong> — it counts whole jobs. Step 3: (c) Hourly wage is <strong>quantitative continuous</strong> — it can be $15.25, $15.26, and so on. Step 4: (d) Union membership is <strong>categorical</strong> — yes or no.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A news site reports “the average American household earns $80,000 a year.” A reader says the number must be wrong because nobody in her neighborhood earns that much. Explain, using population/sample language, why both the report and the reader could be right.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The $80,000 figure is a <strong>statistic</strong> from a national sample, estimating a population parameter for all U.S. households. Step 2: The reader's neighborhood is a small, non-random slice of that population — a sample of its own, and probably not a representative one. Step 3: A national average can be pulled up by a small number of very high incomes while most neighborhoods sit below it. Step 4: Neither side is lying; they are describing different populations. The mean is also the wrong summary when income is skewed — the median is usually lower, which Module 2 explains.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Which is cross-sectional data and which is time-series data: (a) the unemployment rate for each month of 2025, (b) the wages of 500 workers surveyed in June 2025? Explain each.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: (a) is <strong>time-series</strong> data — one thing (the unemployment rate) measured repeatedly over time. Step 2: (b) is <strong>cross-sectional</strong> data — many workers measured at one point in time (June 2025). Step 3: Time series shows change over time; cross-sectional data shows differences between people at a moment.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Statistics is best described as:",
      "choices": [
        "The study of government budgets",
        "The science of collecting, describing, and drawing conclusions from data",
        "The study of how prices are set",
        "A branch of accounting"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Statistics is the toolkit for turning data into evidence. (a) is public finance. (c) is price theory. (d) Accounting records transactions; statistics analyzes data."
    },
    {
      "q": "A researcher surveys 1,000 of Michigan's 4 million workers to estimate the average wage. The 1,000 workers are the:",
      "choices": [
        "Population",
        "Parameter",
        "Sample",
        "Census"
      ],
      "answer": 2,
      "explanation": "Correct: (c). The 1,000 surveyed workers are the sample — the group actually measured. (a) The population is all 4 million workers. (b) A parameter is a number about the population. (d) A census measures everyone."
    },
    {
      "q": "The true average wage of all Michigan workers is a:",
      "choices": [
        "Statistic",
        "Parameter",
        "Sample",
        "Variable"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A parameter describes the population. (a) A statistic comes from a sample. (c) A sample is a group of people, not a number. (d) A variable is what you measure on each person."
    },
    {
      "q": "The wages 13, 14, 15, 15, 16, 17, 18, 19, 21, 24 have a mean of:",
      "choices": [
        "$16.50",
        "$17.20",
        "$15.00",
        "$18.00"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The wages add to 172; 172 ÷ 10 = $17.20. (a) $16.50 is the median. (c) $15 is the mode. (d) $18.00 is one of the values, not the mean."
    },
    {
      "q": "Which of these is categorical data?",
      "choices": [
        "Hourly wage in dollars",
        "Number of children",
        "Whether a worker is employed or unemployed",
        "Years of schooling"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Employment status puts people in groups. (a), (b), and (d) are all measured in numbers, so they are quantitative."
    },
    {
      "q": "The unemployment rate measured every month for five years is:",
      "choices": [
        "Cross-sectional data",
        "Time-series data",
        "Categorical data",
        "A parameter"
      ],
      "answer": 1,
      "explanation": "Correct: (b). One thing measured repeatedly over time is a time series. (a) Cross-sectional data measures many people at one moment. (c) The rate is a number, not a category. (d) A parameter is a population number, not a data type."
    },
    {
      "q": "Inferential statistics is mainly about:",
      "choices": [
        "Drawing charts of a sample",
        "Using a sample to learn about a population",
        "Counting how many values are in a dataset",
        "Sorting data into categories"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Inference goes from sample to population. (a) and (c) are descriptive work. (d) is classification, not inference."
    },
    {
      "q": "The mode of 13, 14, 15, 15, 16, 17, 18, 19, 21, 24 is:",
      "choices": [
        "13",
        "15",
        "16.5",
        "17.2"
      ],
      "answer": 1,
      "explanation": "Correct: (b). $15 appears twice; every other value appears once. (a) appears once. (c) is the median. (d) is the mean."
    }
  ],
  "studyGuide": "\n<h3>Module 1 — Data &amp; Statistics: Quick Reference</h3>\n<p><strong>Core idea:</strong> Statistics turns economic questions into data and data into answers you can defend.</p>\n<p><strong>Population vs. sample:</strong> Population = everyone you care about; sample = who you measured. Parameter = population number (usually unknown); statistic = sample number (what you compute).</p>\n<p><strong>Descriptive vs. inferential:</strong> Descriptive statistics summarize data; inferential statistics use a sample to learn about a population.</p>\n<p><strong>Data kinds:</strong> Categorical (groups) vs. quantitative (numbers); discrete (counts) vs. continuous (any value); cross-sectional (many people, one moment) vs. time-series (one thing, many moments).</p>\n<div class=\"formula\">Mean x&#772; = (sum of values) &divide; n &nbsp;|&nbsp; Sample SD s = &radic;[&Sigma;(x &#8722; x&#772;)&sup2; &divide; (n &#8722; 1)]</div>\n<p><strong>Worked anchor:</strong> Wages 13, 14, 15, 15, 16, 17, 18, 19, 21, 24 — mean $17.20, median $16.50, mode $15, sample SD $3.39.</p>\n<p><strong>Watch out:</strong> A sample statistic is an estimate of a parameter, not the parameter itself. Say which one you have.</p>\n<p><strong>Self-check:</strong> Pick a headline statistic from today's news and name its population, its sample, and whether it is a parameter or a statistic.</p>\n"
};
