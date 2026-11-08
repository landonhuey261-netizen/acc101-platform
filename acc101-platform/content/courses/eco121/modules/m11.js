module.exports = {
  "number": 11,
  "slug": "multiple-regression-controlling-for-other-factors",
  "title": "Multiple Regression: Controlling for Other Factors",
  "estTime": "3–4 hours",
  "objectives": [
    "Write and interpret a multiple regression equation with two or more predictors.",
    "Explain what “holding other factors constant” means for a coefficient.",
    "Interpret R² and adjusted R² in a multiple regression.",
    "Test individual coefficients and the overall model with t- and F-tests.",
    "Recognize multicollinearity and omitted-variable bias and explain why each matters."
  ],
  "sections": [
    {
      "heading": "Why One Predictor Is Rarely Enough",
      "html": "<p>Simple regression says house prices depend on size. But two houses the same size can sell for very different prices — because one is new and the other is forty years old. <strong>Multiple regression</strong> adds predictors so each coefficient is estimated <em>holding the others constant</em>. The model is ŷ = b₀ + b₁x₁ + b₂x₂ + …, and the magic is in the phrase “holding x₂ constant”: b₁ is the effect of x₁ when the other variables do not change.</p><p>Ten houses were sold with these prices (in $000), sizes (in 1,000 sq ft), and ages (in years): prices 72, 78, 92, 88, 101, 105, 122, 118, 68, 104; sizes 1.2, 1.5, 1.8, 2.0, 2.2, 2.5, 2.8, 3.0, 1.6, 2.4; ages 5, 10, 2, 15, 8, 20, 3, 12, 25, 6. The fitted multiple regression is ŷ = 39.35 + 29.81×size + -0.67×age. The next sections unpack every number in that equation.</p><div class=\"callout\"><strong>Key idea:</strong> Multiple regression answers “what happens when this changes and everything else stays the same?” — the closest statistics gets to a controlled experiment on observational data.</div>"
    },
    {
      "heading": "Reading the Coefficients",
      "html": "<p>The size coefficient is <strong>29.81</strong>: holding age constant, each extra 1,000 sq ft is associated with about <strong>$29,812</strong> more in price. The age coefficient is <strong>-0.67</strong>: holding size constant, each extra year of age is associated with about <strong>$675</strong> less in price. The intercept, 39.35, is the predicted price of a 0 sq ft, 0-year-old house — meaningless on its own, as usual.</p><p>Compare with the simple regression of price on size alone, which gives a slope of about 30.2 — slightly bigger than 29.81, because bigger houses in this sample also tend to be newer, so the simple slope quietly absorbs some of the age effect. That is <strong>omitted-variable bias</strong>: leave out a variable that matters and is correlated with one you kept, and the kept coefficient is biased. Multiple regression is the fix.</p><p>Prediction works the same way as before: a 2,000 sq ft house that is 10 years old is predicted at 39.35 + 29.81 × 2.0 + -0.67 × 10 = <strong>$92.22k</strong>, about $92,224.</p><div class=\"formula\">&yhat; = b&#8320; + b&#8321;x&#8321; + b&#8322;x&#8322; &nbsp;|&nbsp; b&#8321; = change in &yhat; per unit of x&#8321;, holding x&#8322; constant</div>"
    },
    {
      "heading": "R², Adjusted R², and the Overall F-Test",
      "html": "<p>R² is still the share of variation explained — here R² = <strong>0.9849</strong>, about 98.5% of price variation is explained by size and age together. But R² never falls when you add a predictor, even a useless one, so multiple regression reports <strong>adjusted R²</strong>, which penalizes extra predictors: here adjusted R² = <strong>0.9806</strong>. If adding a variable barely moves R², adjusted R² falls — the model's way of saying the variable was not worth it.</p><p>The <strong>overall F-test</strong> asks whether all the slopes are zero at once: H₀: β₁ = β₂ = 0. Here F = 229.05 with p &lt; 0.001 — the model as a whole is highly significant. Individual coefficients get their own t-tests: the size coefficient has t = 20.32 (p &lt; 0.001) and the age coefficient has t = -5.91 (p = 0.0006). Both are significant at 5% — with R² = 0.9849, size and age together explain nearly all the price variation in these ten houses. (In a bigger, messier sample the age effect would be harder to pin down; here the data are unusually clean.)</p><div class=\"callout\"><strong>Key idea:</strong> R² always rises when you add predictors; adjusted R² only rises when the predictor earns its place. Compare models with adjusted R², not R².</div>"
    },
    {
      "heading": "Dummy Variables and Multicollinearity",
      "html": "<p>Not every predictor is a number. A <strong>dummy variable</strong> codes a category as 0 or 1 — garage (1 = has a garage, 0 = does not). In a model like ŷ = 50 + 25×size − 0.8×age + 12×garage, the 12 means a garage adds about $12,000 to the predicted price, holding size and age constant. Dummy variables let regression handle categories: region, degree, treatment group, and more.</p><p>The enemy of multiple regression is <strong>multicollinearity</strong>: two predictors that move together, like the number of bedrooms and the square footage. When predictors are nearly the same variable, the model cannot tell which one is doing the work — the coefficients become unstable, their standard errors balloon, and t-tests go insignificant even when the model predicts well. The fixes are to drop one of the pair, combine them, or collect more data. A variance inflation factor (VIF) above 5 or 10 is the usual warning sign.</p><div class=\"formula\">Dummy variable: 1 if the category applies, 0 otherwise &nbsp;|&nbsp; VIF &gt; 5–10 signals multicollinearity</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Fitted model: ŷ = 39.35 + 29.81×size + -0.67×age — size adds about $29,812 per 1,000 sq ft, age subtracts about $675 per year, holding the other constant.</li><li>R² = 0.9849; adjusted R² = 0.9806. Overall F = 229.05, p &lt; 0.001.</li><li>Size: t = 20.32 (p &lt; 0.001); age: t = -5.91 (p = 0.0006) — both significant at 5%.</li><li>Dummy variables code categories as 0/1. Multicollinearity makes coefficients unstable — watch the VIF.</li><li>Leaving out a relevant, correlated variable biases the coefficients you keep (omitted-variable bias).</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Reading a multiple-regression coefficient as if it were a simple-regression slope. b₁ is the effect of x₁ <em>holding the other predictors constant</em> — that “holding constant” is the whole point of the model.</div><div class=\"callout\"><strong>Common mistake:</strong> Chasing R² by adding predictors. R² always rises; adjusted R² is the honest comparison, and a model with more variables is not a better model.</div><p><strong>Ready-to-Work link:</strong> “How much does a degree add to wages, after accounting for experience and occupation?” is a multiple regression — the single most-used tool in applied economics, and the bridge to econometrics in eco221.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Multiple regression",
      "def": "A regression with two or more predictors: ŷ = b₀ + b₁x₁ + b₂x₂ + …."
    },
    {
      "term": "Partial slope",
      "def": "A multiple-regression coefficient: the change in ŷ per unit of one predictor, holding the others constant."
    },
    {
      "term": "Holding constant",
      "def": "The interpretation of a multiple-regression coefficient: the other predictors are fixed while this one changes."
    },
    {
      "term": "Adjusted R²",
      "def": "R² corrected for the number of predictors; it only rises when a new predictor earns its place."
    },
    {
      "term": "Overall F-test",
      "def": "A test of H₀: all slopes are zero, for the model as a whole."
    },
    {
      "term": "Dummy variable",
      "def": "A 0/1 variable coding a category, such as has-a-garage or has-a-degree."
    },
    {
      "term": "Multicollinearity",
      "def": "Two or more predictors that move together, making coefficients unstable and standard errors large."
    },
    {
      "term": "Variance inflation factor (VIF)",
      "def": "A measure of multicollinearity; values above 5–10 warn that predictors overlap too much."
    },
    {
      "term": "Omitted-variable bias",
      "def": "Bias in a coefficient caused by leaving out a relevant variable that is correlated with a kept predictor."
    },
    {
      "term": "Partial correlation",
      "def": "The correlation between two variables after removing the effect of other variables."
    },
    {
      "term": "Residual standard error",
      "def": "The typical size of a residual in a multiple regression; the model's average miss."
    },
    {
      "term": "Degrees of freedom (multiple regression)",
      "def": "n − k − 1, where k is the number of predictors; used for t-tests of coefficients."
    },
    {
      "term": "Interaction term",
      "def": "A product of two predictors (x₁×x₂) that lets the effect of one depend on the level of the other."
    },
    {
      "term": "Categorical predictor",
      "def": "A predictor that takes categories rather than numbers, handled with dummy variables."
    },
    {
      "term": "Model selection",
      "def": "Choosing which predictors belong in a model, balancing fit against simplicity."
    }
  ],
  "video": {
    "title": "Multiple Regression, Clearly Explained!!!",
    "embedUrl": "https://www.youtube.com/embed/zITIFTsivN8",
    "note": "StatQuest extends simple regression to multiple regression — same least-squares idea, now fitting a plane instead of a line.",
    "more": [
      {
        "title": "R-squared, Clearly Explained!!! — StatQuest",
        "url": "https://www.youtube.com/watch?v=2AQKmw14mHM"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> The fitted house-price model is ŷ = 39.35 + 29.81×size + -0.67×age (price in $000, size in 1,000 sq ft, age in years). (a) Interpret the size coefficient. (b) Interpret the age coefficient. (c) Predict the price of a 2,000 sq ft house that is 10 years old.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: The size coefficient 29.81 means each extra 1,000 sq ft is associated with about <strong>$29,812</strong> more in price, holding age constant. Step 2: The age coefficient -0.67 means each extra year is associated with about <strong>$675</strong> less in price, holding size constant. Step 3: ŷ = 39.35 + 29.81 × 2 + -0.67 × 10 = <strong>$92.22k</strong>.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> For the house model, R² = 0.9849 and adjusted R² = 0.9806. (a) Interpret R². (b) Why is adjusted R² lower? (c) If a third predictor raised R² to 0.9949 but adjusted R² fell, should it stay in the model? Why?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: R² = 0.9849 means about <strong>98.5%</strong> of the variation in prices is explained by size and age. Step 2: Adjusted R² is lower because it <strong>penalizes the two predictors</strong> — it corrects for the fact that R² always rises when you add variables. Step 3: <strong>No.</strong> If adjusted R² falls, the predictor did not earn its place — it added noise, not signal.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A wage model is ŷ = 20 + 3×schooling + 0.5×experience + 5×degree (wage in $/hour, schooling and experience in years, degree = 1 if the worker has a bachelor's degree). (a) Interpret the degree coefficient. (b) Predict the wage of a worker with 16 years of schooling, 5 years of experience, and a degree. (c) Predict the wage of the same worker without a degree.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: The degree coefficient 5 means a bachelor's degree is associated with <strong>$5 more per hour</strong>, holding schooling and experience constant. Step 2: With a degree: ŷ = 20 + 3 × 16 + 0.5 × 5 + 5 × 1 = 20 + 48 + 2.5 + 5 = <strong>$75.50 an hour</strong>. Step 3: Without a degree: ŷ = 20 + 48 + 2.5 + 0 = <strong>$70.50 an hour</strong>. The $5 gap is exactly the degree coefficient.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A researcher regresses wages on years of schooling only and finds a slope of $4 an hour. Then she adds occupation, and the schooling slope falls to $2.50. (a) What is this phenomenon called? (b) Explain in one or two sentences why the slope changed.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: This is <strong>omitted-variable bias</strong>. Step 2: Occupation is correlated with schooling (more schooling leads to higher-paying occupations) and affects wages, so the first regression's slope quietly absorbed the occupation effect. Adding occupation separates the two, and the schooling slope falls to its direct effect.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Two predictors, bedrooms and square footage, have a correlation of 0.92. The regression has high R² but neither coefficient is significant. (a) What is the likely problem? (b) Name two things the researcher could do.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The likely problem is <strong>multicollinearity</strong> — the two predictors move together so closely that the model cannot tell which one matters, inflating both standard errors. Step 2: She could <strong>drop one</strong> of the two predictors, or <strong>combine</strong> them (for example, use square feet per bedroom), or collect <strong>more data</strong> to separate their effects.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> For the house model the overall F-test gives F = 229.05 with p &lt; 0.001, the size coefficient has t = 20.32 (p &lt; 0.001), and the age coefficient has t = -5.91 (p = 0.0006). (a) What does the F-test conclude? (b) Which coefficients are significant at α = 0.05? (c) What does the age result mean in plain words?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) The F-test <strong>rejects</strong> H₀: β₁ = β₂ = 0 (p &lt; 0.001) — the model as a whole explains prices. Step 2: (b) <strong>Both are significant</strong>: size (p &lt; 0.001) and age (p = 0.0006, below 0.05). Step 3: (c) Each extra year of age is associated with about $675 less in price, holding size constant, and the data are strong enough to rule out a zero effect — even in a sample of only 10 houses, because the age pattern in these data is very consistent.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The house-price model is ŷ = 39.35 + 29.81×size + -0.67×age. The size coefficient means:",
      "choices": [
        "Bigger houses are older",
        "Each extra 1,000 sq ft is associated with about $29,812 more in price, holding age constant",
        "Size causes age",
        "The average house is that many sq ft"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A multiple-regression coefficient is the effect holding the other predictors constant. (a) is a correlation claim the coefficient does not make. (c) No coefficient proves causation. (d) The coefficient is a rate, not an average."
    },
    {
      "q": "Adjusted R² differs from R² because it:",
      "choices": [
        "Is always larger",
        "Penalizes the model for extra predictors",
        "Ignores the intercept",
        "Only works with dummy variables"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Adjusted R² corrects for the fact that R² never falls when you add a predictor. (a) It is usually smaller. (c) The intercept is unaffected. (d) It applies to any multiple regression."
    },
    {
      "q": "A dummy variable is:",
      "choices": [
        "A variable with no effect",
        "A 0/1 variable coding a category",
        "A variable measured with error",
        "The intercept"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Dummies code categories — garage or not, degree or not. (a) A dummy can have a large effect. (c) Measurement error is a different problem. (d) The intercept is a constant term, not a variable."
    },
    {
      "q": "Omitted-variable bias happens when:",
      "choices": [
        "You include too many predictors",
        "You leave out a relevant variable that is correlated with a predictor you kept",
        "The sample is too small",
        "R² is too low"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The kept coefficient absorbs the omitted variable's effect. (a) Too many predictors is overfitting, a different problem. (c) A small sample hurts precision, not bias. (d) Low R² is about fit, not bias."
    },
    {
      "q": "Multicollinearity is a problem because:",
      "choices": [
        "It makes R² fall",
        "Predictors that move together make coefficients unstable and standard errors large",
        "It makes the intercept zero",
        "It breaks the least-squares calculation"
      ],
      "answer": 1,
      "explanation": "Correct: (b). When predictors overlap, the model cannot separate their effects. (a) Multicollinearity often comes with high R². (c) The intercept is unaffected. (d) Least squares still computes — the estimates are just noisy."
    },
    {
      "q": "For the house model, R² = 0.9849 means:",
      "choices": [
        "The model is correct",
        "About 98% of the variation in prices is explained by size and age",
        "Size and age cause prices",
        "The average price is that much"
      ],
      "answer": 1,
      "explanation": "Correct: (b). R² is the share of variation explained. (a) No R² proves a model correct. (c) Observational regression cannot prove causation. (d) R² is a share, not a price."
    },
    {
      "q": "The overall F-test in a multiple regression tests:",
      "choices": [
        "Whether R² is greater than 0.5",
        "Whether all slopes are zero at once",
        "Whether the intercept is zero",
        "Whether the residuals are normal"
      ],
      "answer": 1,
      "explanation": "Correct: (b). H₀: β₁ = β₂ = … = 0, the model as a whole. (a) There is no 0.5 threshold. (c) The intercept has its own t-test. (d) Normality of residuals is an assumption, not what F tests."
    },
    {
      "q": "In the wage model ŷ = 20 + 3×schooling + 0.5×experience + 5×degree, a worker with a degree earns, holding the rest constant:",
      "choices": [
        "$5 an hour more",
        "$3 an hour more",
        "$20 an hour more",
        "$0.50 an hour more"
      ],
      "answer": 0,
      "explanation": "Correct: (a). The degree coefficient is 5 — the gap between otherwise identical workers with and without a degree. (b) 3 is the schooling coefficient. (c) 20 is the intercept. (d) 0.50 is the experience coefficient."
    }
  ],
  "studyGuide": "\n<h3>Module 11 — Multiple Regression: Quick Reference</h3>\n<p><strong>Model:</strong> &yhat; = b&#8320; + b&#8321;x&#8321; + b&#8322;x&#8322; + …. Each coefficient is the effect of that predictor <em>holding the others constant</em>.</p>\n<div class=\"formula\">Adjusted R&sup2; = 1 &#8722; (1 &#8722; R&sup2;)(n &#8722; 1) &divide; (n &#8722; k &#8722; 1) &nbsp;|&nbsp; F tests H&#8320;: all slopes = 0 &nbsp;|&nbsp; t tests one coefficient at a time</div>\n<p><strong>Worked anchors:</strong> Houses: &yhat; = 39.35 + 29.81&times;size + -0.67&times;age; R&sup2; = 0.9849, adjusted R&sup2; = 0.9806, F = 229.05 (p &lt; 0.001). Prediction for 2,000 sq ft, 10 years old: $92.22k.</p>\n<p><strong>Dummy variables:</strong> Code categories as 0/1; the coefficient is the gap between the groups, holding the rest constant.</p>\n<p><strong>Watch out:</strong> Omitted-variable bias (leaving out a relevant, correlated variable), multicollinearity (predictors that move together — VIF &gt; 5–10), and chasing R&sup2; by adding predictors.</p>\n<p><strong>Self-check:</strong> Take any simple regression you have fit and name one variable it omits that is probably correlated with your predictor — then say which way the slope is likely biased.</p>\n"
};
