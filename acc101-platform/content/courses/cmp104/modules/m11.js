// cmp104 - Module 11: Testing an App
module.exports = {
  "number": 11,
  "slug": "testing-an-app",
  "title": "Testing an App",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain why testing matters and what it catches.",
    "Name three kinds of testing and what each one checks.",
    "Write a simple test plan for a small app.",
    "Explain how to report a bug so someone else can fix it.",
    "Describe what beta testers do and what to ask them."
  ],
  "sections": [
    {
      "heading": "Why Test? Because Users Will Find the Bugs",
      "html": "<p>Every app has bugs. Testing is the job of finding them before your users do. A bug found in testing costs a few minutes; the same bug found by a user costs trust, bad reviews, and sometimes money. Testing is not a sign that the app is bad — it is how good apps are made. Even the biggest companies test constantly.</p>\n<p>Test early and test often, not only at the end. A button that does nothing is easier to fix on the day you build it than a month later, when you have forgotten how it works. Make testing part of building, not a chore after it.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Test early and often. A bug found today costs minutes; found by a user, it costs trust.</div></p>\n"
    },
    {
      "heading": "Three Kinds of Testing",
      "html": "<p>Unit testing checks one small piece at a time: does this function add two numbers correctly? Integration testing checks pieces working together: does the login screen really talk to the back end? User testing checks the whole app with real people: can a stranger complete the main job without help? Each kind catches different bugs, and a good app needs all three.</p>\n<p>Automated tests are programs that run the same checks every time the code changes, so a fix in one place does not quietly break another. Manual testing is a person using the app and noticing what feels wrong. Beginners start with manual testing and a written checklist; automated tests come later.</p>\n"
    },
    {
      "heading": "A Test Plan for a Small App",
      "html": "<p>A test plan is a list of things to try, each with an expected result. For a notes app it might read: open the app — the list appears; add a note — it shows in the list; close and reopen — the note is still there; delete a note — it disappears; add a note with no text — the app says so politely instead of crashing. Work through the list, ticking each one off, on a phone and on a computer.</p>\n<p>Include the awkward cases: no internet, a very long note, a wrong password, tapping the same button twice quickly. Users will do all of these on day one. If the app handles them gracefully — a clear message, not a crash — it is ready.</p>\n"
    },
    {
      "heading": "Reporting Bugs and Using Beta Testers",
      "html": "<p>A good bug report has four parts: what you did, what you expected, what actually happened, and the details that let someone repeat it — which device, which screen, and the exact steps. “It doesn't work” helps nobody. “On my Android phone, tapping Save on the Add Note screen shows a blank screen” can be fixed in minutes.</p>\n<p>Beta testers are real users who try the app before it is public. Give them a clear job: “Try to add three notes and tell me anything confusing”, not “Tell me what you think”. Watch them use it without helping — where they hesitate is where the app needs work. Thank them, fix what they found, and test again.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong></p>\n<ul>\n<li>Testing finds bugs before users do; it is part of building, not an afterthought.</li>\n<li>Unit tests check one piece, integration tests check pieces together, user tests check real people.</li>\n<li>A test plan lists things to try with the expected result for each.</li>\n<li>A good bug report says what you did, expected, and saw — with steps to repeat it.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Testing only at the end, when fixes are hardest and slowest.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Writing “it doesn't work” as a bug report. No steps, no fix.</div>\n<p><strong>Ready check:</strong> If you can explain this module's main idea out loud in plain words, you have it.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Testing",
      "def": "Trying an app systematically to find bugs before users do."
    },
    {
      "term": "Bug",
      "def": "A mistake in an app's instructions that makes it behave wrongly."
    },
    {
      "term": "Unit test",
      "def": "A test of one small piece of code on its own, such as one function."
    },
    {
      "term": "Integration test",
      "def": "A test of pieces working together, such as a login screen talking to the back end."
    },
    {
      "term": "User testing",
      "def": "Watching real people use an app to find what confuses them."
    },
    {
      "term": "Test plan",
      "def": "A written list of things to try, each with the result you expect."
    },
    {
      "term": "Bug report",
      "def": "A note describing a bug: what you did, what you expected, and what happened."
    },
    {
      "term": "Beta tester",
      "def": "A real user who tries an app before it is public and reports problems."
    },
    {
      "term": "Automated test",
      "def": "A program that runs the same checks every time the code changes."
    },
    {
      "term": "Manual testing",
      "def": "A person using the app and noticing what feels wrong."
    },
    {
      "term": "Crash",
      "def": "An app stopping suddenly because of a bug."
    },
    {
      "term": "Edge case",
      "def": "An unusual situation, such as no internet or an empty form, that an app must still handle."
    },
    {
      "term": "Fix",
      "def": "A change to the code that corrects a bug."
    },
    {
      "term": "Regression",
      "def": "A bug that comes back, or a new bug caused by a fix somewhere else."
    },
    {
      "term": "Release",
      "def": "A version of an app given to users, after testing."
    }
  ],
  "video": {
    "title": "How do you test your mobile app? 🤔",
    "embedUrl": "https://www.youtube.com/embed/ouVUcbeL5nc",
    "note": "Watch what software testing really covers, then write a five-item test plan for a notes app before the next module.",
    "more": [
      {
        "title": "What I do as a Software Tester",
        "url": "https://www.youtube.com/watch?v=1LQ_bPE8ZuM"
      },
      {
        "title": "Mobile application testing using Appium with Java",
        "url": "https://www.youtube.com/watch?v=c74wrDjUC4w"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Testing” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Testing — Trying an app systematically to find bugs before users do. Step 2: It matters because it is part of: Explain why testing matters and what it catches. Step 3: An example from the module is the way testing shows up in everyday apps and computers, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Bug” and “Unit test”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Bug — A mistake in an app's instructions that makes it behave wrongly. Step 2: Unit test — A test of one small piece of code on its own, such as one function. Step 3: They differ because the first is about bug while the second is about unit test; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Name three kinds of testing and what each one checks.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Name three kinds of testing and what each one checks. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “Integration test” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: Integration test — A test of pieces working together, such as a login screen talking to the back end. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: User testing — Watching real people use an app to find what confuses them. Step 2: Test plan — A written list of things to try, each with the result you expect. Step 3: Bug report — A note describing a bug: what you did, what you expected, and what happened. Step 4: Bug — A mistake in an app's instructions that makes it behave wrongly. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Write a simple test plan for a small app. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Testing” mean?",
      "choices": [
        "Trying an app systematically to find bugs before users do.",
        "A mistake in an app's instructions that makes it behave wrongly.",
        "A test of one small piece of code on its own, such as one function.",
        "A test of pieces working together, such as a login screen talking to the back end."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Testing means: Trying an app systematically to find bugs before users do. (b) is the definition of Bug, not of Testing. (c) is the definition of Unit test, not of Testing. (d) is the definition of Integration test, not of Testing."
    },
    {
      "q": "What does the term “Bug” mean?",
      "choices": [
        "Trying an app systematically to find bugs before users do.",
        "A mistake in an app's instructions that makes it behave wrongly.",
        "A test of one small piece of code on its own, such as one function.",
        "A test of pieces working together, such as a login screen talking to the back end."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Bug means: A mistake in an app's instructions that makes it behave wrongly. (a) is the definition of Testing, not of Bug. (c) is the definition of Unit test, not of Bug. (d) is the definition of Integration test, not of Bug."
    },
    {
      "q": "What does the term “Unit test” mean?",
      "choices": [
        "Trying an app systematically to find bugs before users do.",
        "A mistake in an app's instructions that makes it behave wrongly.",
        "A test of one small piece of code on its own, such as one function.",
        "A test of pieces working together, such as a login screen talking to the back end."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Unit test means: A test of one small piece of code on its own, such as one function. (a) is the definition of Testing, not of Unit test. (b) is the definition of Bug, not of Unit test. (d) is the definition of Integration test, not of Unit test."
    },
    {
      "q": "What does the term “Integration test” mean?",
      "choices": [
        "Trying an app systematically to find bugs before users do.",
        "A mistake in an app's instructions that makes it behave wrongly.",
        "A test of one small piece of code on its own, such as one function.",
        "A test of pieces working together, such as a login screen talking to the back end."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Integration test means: A test of pieces working together, such as a login screen talking to the back end. (a) is the definition of Testing, not of Integration test. (b) is the definition of Bug, not of Integration test. (c) is the definition of Unit test, not of Integration test."
    },
    {
      "q": "Which term means: Watching real people use an app to find what confuses them.",
      "choices": [
        "User testing",
        "Testing",
        "Bug",
        "Unit test"
      ],
      "answer": 0,
      "explanation": "Correct: (a). User testing is the term for: Watching real people use an app to find what confuses them. (b) Testing means Trying an app systematically to find bugs before users do. (c) Bug means A mistake in an app's instructions that makes it behave wrongly. (d) Unit test means A test of one small piece of code on its own, such as one function."
    },
    {
      "q": "Which term means: A written list of things to try, each with the result you expect.",
      "choices": [
        "Testing",
        "Test plan",
        "Bug",
        "Unit test"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Test plan is the term for: A written list of things to try, each with the result you expect. (a) Testing means Trying an app systematically to find bugs before users do. (c) Bug means A mistake in an app's instructions that makes it behave wrongly. (d) Unit test means A test of one small piece of code on its own, such as one function."
    },
    {
      "q": "Which term means: A note describing a bug: what you did, what you expected, and what happened.",
      "choices": [
        "Testing",
        "Bug",
        "Bug report",
        "Unit test"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Bug report is the term for: A note describing a bug: what you did, what you expected, and what happened. (a) Testing means Trying an app systematically to find bugs before users do. (b) Bug means A mistake in an app's instructions that makes it behave wrongly. (d) Unit test means A test of one small piece of code on its own, such as one function."
    },
    {
      "q": "Which term means: A real user who tries an app before it is public and reports problems.",
      "choices": [
        "Testing",
        "Bug",
        "Unit test",
        "Beta tester"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Beta tester is the term for: A real user who tries an app before it is public and reports problems. (a) Testing means Trying an app systematically to find bugs before users do. (b) Bug means A mistake in an app's instructions that makes it behave wrongly. (c) Unit test means A test of one small piece of code on its own, such as one function."
    }
  ],
  "studyGuide": "\n<h3>Module 11 — Testing an App: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain why testing matters and what it catches.</p>\n<p><strong>Key terms:</strong> Testing · Bug · Unit test · Integration test · User testing · Test plan · Bug report · Beta tester.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain why testing matters and what it catches.</li>\n<li>Name three kinds of testing and what each one checks.</li>\n<li>Write a simple test plan for a small app.</li>\n</ul>\n<p><strong>Watch out:</strong> Do not skip the stranger test: open your own app as a brand-new user before you call it done.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
