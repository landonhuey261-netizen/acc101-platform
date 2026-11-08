module.exports = {
  "number": 2,
  "slug": "where-economic-data-lives",
  "title": "Where Economic Data Lives: FRED, BLS, Census & the World Bank",
  "estTime": "3–4 hours",
  "objectives": [
    "Name the four main sources of economic data used in this course and what each one publishes.",
    "Find a series on FRED by its series ID, such as UNRATE, and read its units and frequency.",
    "Explain the difference between a source, a release, and a series.",
    "Decide whether a dataset is official statistics or a secondary copy, and why that matters.",
    "Download a series as a spreadsheet and check its vintage before using it."
  ],
  "sections": [
    {
      "heading": "The Four Big Sources",
      "html": "<p>Economists rarely collect their own data. They use <strong>official statistics</strong> — numbers published by government agencies and international bodies whose job is to measure the economy. The four sources in this course are: <strong>FRED</strong>, the Federal Reserve Bank of St. Louis database that gathers hundreds of thousands of series in one place; the <strong>Bureau of Labor Statistics (BLS)</strong>, which publishes unemployment, prices (CPI), and wages; the <strong>U.S. Census Bureau</strong>, which publishes population, income, and housing data; and the <strong>World Bank</strong>, which publishes comparable data for almost every country.</p><p>Learn these four and you can answer most everyday economics questions. A question about U.S. jobs starts at the BLS or FRED; a question about another country starts at the World Bank.</p><div class=\"callout\"><strong>Key idea:</strong> FRED is a library, not an author. It stores series produced by the BLS, the Census Bureau, the BEA, and many others — always cite the original producer as well as FRED.</div>"
    },
    {
      "heading": "FRED: Series, Releases, and IDs",
      "html": "<p>On FRED, every time series has a short <strong>series ID</strong>. The U.S. unemployment rate is <strong>UNRATE</strong>. Real GDP is <strong>GDPC1</strong>. The consumer price index is <strong>CPIAUCSL</strong>. Type the ID into FRED's search box and you land on exactly that series — no guessing, no near-miss.</p><p>Each series page tells you four things before you trust it: the <strong>units</strong> (percent, dollars, index), the <strong>frequency</strong> (monthly, quarterly, annual), whether it is <strong>seasonally adjusted</strong>, and the <strong>source</strong> (for UNRATE: the BLS Current Population Survey). A <strong>release</strong> is the publication a series belongs to — for example, the monthly Employment Situation news release.</p><div class=\"formula\">Series ID + units + frequency + source = a series you can trust</div>"
    },
    {
      "heading": "Reading a Series Page Like a Pro",
      "html": "<p>Before you download anything, read the notes. Ask: What exactly is measured? Who is counted and who is left out? UNRATE counts people without a job who looked for work in the last four weeks, as a percent of the labour force — it does not count discouraged workers who stopped looking. That definition changes what the number means.</p><p>Also check the <strong>vintage</strong>: when the data were last updated. Economic data are revised. The unemployment rate for a month can be revised in later releases, so always write down the date you downloaded the data. In this course's lab, the vintage is printed in the lab itself, so every student's answers are gradeable against the same frozen table.</p>"
    },
    {
      "heading": "BLS, Census, and the World Bank in One Paragraph Each",
      "html": "<p><strong>BLS</strong> (bls.gov): jobs, unemployment, prices, pay, and productivity for the United States. Its two most-used releases are the Employment Situation (jobs and unemployment) and the CPI news release (inflation). <strong>Census</strong> (census.gov): the decennial census, the American Community Survey (income, education, housing by place), and business surveys. <strong>World Bank</strong> (data.worldbank.org): World Development Indicators — GDP per person, life expectancy, poverty, and more, for nearly every country, in comparable units.</p><p>All four are free and public. If a website charges you for the same numbers, you are paying for packaging, not for data.</p><div class=\"callout\"><strong>Key idea:</strong> Secondary copies are fine for reading, but cite the original. A blog's chart of unemployment is only as good as the BLS series behind it — check the source line.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>FRED gathers series; BLS, Census, and the World Bank produce them.</li><li>Every FRED series has an ID (UNRATE), units, frequency, and a source — read all four.</li><li>Check the definition (who is counted) and the vintage (when it was last updated) before using a series.</li><li>Official statistics are free and public; never pay for the same numbers.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Downloading a series without reading its units. A series in “thousands of persons” looks like a small number until you multiply by 1,000.</div><div class=\"callout\"><strong>Common mistake:</strong> Citing “the internet” as a source. Name the producer (BLS), the series (UNRATE), and the date you got it.</div>"
    }
  ],
  "keyTerms": [
    {
      "term": "FRED",
      "def": "Federal Reserve Economic Data — the St. Louis Fed's free database of hundreds of thousands of economic time series."
    },
    {
      "term": "BLS",
      "def": "Bureau of Labor Statistics — the U.S. agency publishing unemployment, prices, wages, and productivity."
    },
    {
      "term": "Census Bureau",
      "def": "The U.S. agency publishing population, income, housing, and business data."
    },
    {
      "term": "World Bank",
      "def": "The international institution publishing comparable development data for nearly every country."
    },
    {
      "term": "Series ID",
      "def": "FRED's short code for one time series, such as UNRATE for the unemployment rate."
    },
    {
      "term": "Official statistics",
      "def": "Numbers published by a government agency or international body whose job is measurement."
    },
    {
      "term": "Release",
      "def": "The publication a series belongs to, such as the monthly Employment Situation news release."
    },
    {
      "term": "Units",
      "def": "What a number is measured in — percent, dollars, thousands of persons, or index points."
    },
    {
      "term": "Frequency",
      "def": "How often a series is published: monthly, quarterly, or annual."
    },
    {
      "term": "Seasonally adjusted",
      "def": "Data with regular seasonal patterns removed, so month-to-month changes show the underlying movement."
    },
    {
      "term": "Vintage",
      "def": "The date a dataset was downloaded or last revised; data are revised, so the vintage matters."
    },
    {
      "term": "Source",
      "def": "The organisation that produced the data — always cite it."
    },
    {
      "term": "Current Population Survey",
      "def": "The BLS household survey behind the U.S. unemployment rate."
    },
    {
      "term": "World Development Indicators",
      "def": "The World Bank's main dataset of comparable country indicators."
    },
    {
      "term": "Secondary copy",
      "def": "A republication of data by someone other than the producer — check it against the original."
    }
  ],
  "video": {
    "title": "What is FRED? | Federal Reserve Economic Data",
    "embedUrl": "https://www.youtube.com/embed/1GKe5ghKJMc",
    "note": "FRED's own short introduction, from the Federal Reserve Bank of St. Louis: what FRED is, what it holds, and how to use it. After watching, open fred.stlouisfed.org and search for UNRATE.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> You want the U.S. unemployment rate. Which source do you start with, what is the FRED series ID, and who actually produces the data?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with FRED and search for <strong>UNRATE</strong>. Step 2: The producer is the <strong>Bureau of Labor Statistics</strong>, from its Current Population Survey. Step 3: FRED is the library that stores and displays the series; the BLS is the author.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A FRED series page says: Units: Percent, Frequency: Monthly, Seasonally Adjusted. Explain in plain words what each of those three facts tells you.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Units “Percent” — each value is a percentage, such as 4.1%. Step 2: Frequency “Monthly” — there is one new value each month. Step 3: Seasonally Adjusted — regular seasonal ups and downs have been removed, so a change from one month to the next reflects the underlying economy, not the season.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> You want to compare GDP per person in Kenya and in France. Which source do you use, and why not the BLS?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Use the <strong>World Bank</strong> World Development Indicators — it publishes comparable GDP per person for nearly every country. Step 2: The BLS measures the United States only, so it cannot answer a two-country comparison.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A blog chart says unemployment was 3.7% in January 2024 but gives no source. What two things do you check before believing it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Check the source — is it the BLS via FRED series UNRATE, seasonally adjusted? Step 2: Check the vintage and the definition — which month, which version, and whether it is the seasonally adjusted or the unadjusted figure (the unadjusted January 2024 rate was 4.1%, not 3.7%). Step 3: If the blog gives neither, treat the number as unverified.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Explain the difference between a series and a release, using UNRATE and the Employment Situation as your example.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A <strong>series</strong> is one time series — UNRATE, the monthly unemployment rate. Step 2: A <strong>release</strong> is the publication it belongs to — the Employment Situation news release, which publishes UNRATE along with jobs, hours, and earnings each month. Step 3: One release contains many series.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> You downloaded UNRATE in November 2026. A classmate downloaded it in January 2025 and got a slightly different value for the same month. Give the most likely reason.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Economic data are <strong>revised</strong> — later releases update earlier months as more information arrives. Step 2: The two downloads are different <strong>vintages</strong> of the same series. Step 3: That is why you always record the download date: it explains why two honest people can quote different numbers for the same month.</p>"
    }
  ],
  "quiz": [
    {
      "q": "FRED is best described as:",
      "choices": [
        "The agency that surveys unemployed workers",
        "A database that gathers economic series from many producers",
        "A private company that sells forecasts",
        "The World Bank's statistics office"
      ],
      "answer": 1,
      "explanation": "Correct: (b). FRED stores series from the BLS, BEA, Census, and others. (a) That survey is the BLS's Current Population Survey. (c) FRED is free and public. (d) The World Bank publishes its own data."
    },
    {
      "q": "The FRED series ID for the U.S. unemployment rate is:",
      "choices": [
        "GDP",
        "CPIAUCSL",
        "UNRATE",
        "GDPC1"
      ],
      "answer": 2,
      "explanation": "Correct: (c). UNRATE is the unemployment rate. (a) GDP is not a FRED ID. (b) CPIAUCSL is the consumer price index. (d) GDPC1 is real GDP."
    },
    {
      "q": "Who produces the data behind UNRATE?",
      "choices": [
        "The Federal Reserve Bank of St. Louis",
        "The World Bank",
        "The Bureau of Labor Statistics",
        "The Census Bureau"
      ],
      "answer": 2,
      "explanation": "Correct: (c). The BLS produces it from the Current Population Survey. (a) The St. Louis Fed runs FRED, the library. (b) The World Bank covers other countries. (d) The Census Bureau does population and income surveys."
    },
    {
      "q": "Before trusting a FRED series, you should check its:",
      "choices": [
        "Colour scheme",
        "Units, frequency, source, and vintage",
        "Number of downloads",
        "Author's opinions"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Units, frequency, source, and vintage decide what the numbers mean. (a) Colour is presentation. (c) Popularity is not accuracy. (d) Official statistics do not carry opinions."
    },
    {
      "q": "“Seasonally adjusted” means:",
      "choices": [
        "The data are only published in summer",
        "Regular seasonal patterns have been removed",
        "The data are adjusted for inflation",
        "The series has been rounded"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Seasonal adjustment removes regular seasonal ups and downs. (a) is nonsense. (c) That is inflation adjustment, a different thing. (d) Rounding does not remove seasons."
    },
    {
      "q": "For comparable GDP per person across many countries, the best source is:",
      "choices": [
        "The BLS",
        "The Census Bureau",
        "The World Bank",
        "A newspaper"
      ],
      "answer": 2,
      "explanation": "Correct: (c). The World Bank's World Development Indicators are built for cross-country comparison. (a) The BLS covers the U.S. only. (b) The Census Bureau covers the U.S. only. (d) A newspaper is a secondary copy."
    },
    {
      "q": "A “vintage” matters because:",
      "choices": [
        "Data are revised, so the same month can have different values in different downloads",
        "Old data are always wrong",
        "New data are always wrong",
        "FRED deletes old series"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Revisions change earlier values, so record the download date. (b) and (c) are false — revisions can go either way. (d) FRED keeps history."
    },
    {
      "q": "UNRATE does NOT count:",
      "choices": [
        "People without a job who looked for work in the last four weeks",
        "People in the labour force",
        "Discouraged workers who stopped looking for work",
        "People who are unemployed as a percent of the labour force"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Discouraged workers who stopped looking are outside the official definition. (a) and (b) describe who IS counted. (d) is the definition of the rate itself."
    }
  ],
  "studyGuide": "\n<h3>Module 2 — Where Economic Data Lives: Quick Reference</h3>\n<p><strong>Four sources:</strong> FRED (the library) · BLS (U.S. jobs, prices, wages) · Census Bureau (population, income, housing) · World Bank (comparable country data).</p>\n<p><strong>Key IDs:</strong> UNRATE = unemployment rate · CPIAUCSL = consumer price index · GDPC1 = real GDP.</p>\n<p><strong>Check before use:</strong> units · frequency · seasonally adjusted or not · source (producer) · vintage (download date) · definition (who is counted).</p>\n<p><strong>Watch out:</strong> “Thousands of persons” means multiply by 1,000. Cite the producer, the series ID, and the date — never just “the internet.”</p>\n<p><strong>Self-check:</strong> Open FRED, search UNRATE, and write down its units, frequency, source, and latest value with today's date.</p>\n"
};
