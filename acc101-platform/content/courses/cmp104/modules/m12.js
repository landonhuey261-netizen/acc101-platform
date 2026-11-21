// cmp104 - Module 12: Shipping Your App
module.exports = {
  "number": 12,
  "slug": "shipping-your-app",
  "title": "Shipping Your App",
  "estTime": "3–4 hours",
  "objectives": [
    "Describe the steps to publish a web app so anyone can open it.",
    "Describe the steps to publish a mobile app to an app store.",
    "Explain what an app store review checks and why apps get rejected.",
    "Plan a first version that is small enough to actually ship.",
    "Explain how updates reach users after launch."
  ],
  "sections": [
    {
      "heading": "Shipping a Web App",
      "html": "<p>A web app ships when its files live on a server anyone can reach. The steps are simple: build the app, put the files on a hosting service (a company that rents you server space), connect a web address, and open it in a browser to check it works. Many hosting services are free for small apps, which is why beginners usually ship a web app first.</p>\n<p>Before you ship, walk through the whole app once as a stranger: open the address, log in, do the main job, log out. If anything is confusing, fix it now — after launch, every fix is watched by real users. Add a short description of what the app does and how to contact you, so people know what it is and where to ask for help.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Ship a web app first: hosting is often free, and anyone with the address can open it.</div></p>\n"
    },
    {
      "heading": "Shipping a Mobile App",
      "html": "<p>A mobile app ships through an app store. You need a developer account with Apple (for iPhone) or Google (for Android), and you submit the app for review. Reviewers check that the app works, does what it says, does not crash, asks for only the permissions it needs, and follows the store's rules — including having a privacy policy that says what data you collect.</p>\n<p>Build the app in release mode, test it on a real phone, take screenshots for the store page, write a clear description, and submit. Review usually takes a few days. Rejection is normal, even for good apps: the reviewers tell you what to fix, you fix it, and you submit again.</p>\n"
    },
    {
      "heading": "Your First Version Should Be Small",
      "html": "<p>The biggest reason beginner apps never ship is that the first version is too big. A notes app that saves, lists, and deletes notes is a real app, and it can ship. A notes app with sharing, reminders, tags, themes, and cloud sync is a project that never ends. Ship the small version, let people use it, and add one feature at a time based on what they actually ask for.</p>\n<p>This is called a minimum viable product: the smallest version that does the main job well. Every big app started as one. Your capstone project in the lab for this module is exactly that: plan and ship a simple app, one screen at a time.</p>\n"
    },
    {
      "heading": "After Launch: Updates and Listening",
      "html": "<p>Shipping is not the end; it is the start. Users will find bugs you missed and ask for features you never thought of. Updates fix the bugs and add the best ideas, and they reach users automatically for web apps and through the store for mobile apps. Keep a list of what people ask for, fix the crashes first, and tell users what changed in each update.</p>\n<p>Measure what matters: are people finishing the main job? Where do they stop? A simple count of completed jobs beats a hundred opinions. And keep the app's promise small and honest — an app that does one job well earns better reviews than one that promises everything.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong></p>\n<ul>\n<li>Web apps ship by putting files on a hosting service and connecting an address.</li>\n<li>Mobile apps ship through a store review: working app, honest description, privacy policy.</li>\n<li>Ship a small first version — the minimum that does the main job well.</li>\n<li>After launch, fix crashes first, add what users actually ask for, and update often.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Trying to ship every feature in version one, so nothing ever ships.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Skipping the stranger test: opening the app as a new user before launch.</div>\n<p><strong>Ready check:</strong> If you can explain this module's main idea out loud in plain words, you have it.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Hosting",
      "def": "Renting server space from a company so anyone can reach your web app."
    },
    {
      "term": "App store review",
      "def": "The store's check that an app works, is honest, and follows the rules before it is listed."
    },
    {
      "term": "Developer account",
      "def": "An account with Apple or Google that lets you publish apps to their store."
    },
    {
      "term": "Privacy policy",
      "def": "A page saying what data an app collects and what it does with it."
    },
    {
      "term": "Release",
      "def": "A version of an app given to users, after testing."
    },
    {
      "term": "Minimum viable product",
      "def": "The smallest version of an app that does its main job well enough to ship."
    },
    {
      "term": "Update",
      "def": "A newer version of an app, usually fixing bugs or adding features."
    },
    {
      "term": "Screenshot",
      "def": "A picture of an app's screens, shown on its store page."
    },
    {
      "term": "Description",
      "def": "The store-page text saying what an app does and who it is for."
    },
    {
      "term": "Launch",
      "def": "The day an app becomes available to the public."
    },
    {
      "term": "Feedback",
      "def": "What users say about an app: bugs they found and features they want."
    },
    {
      "term": "Hosting service",
      "def": "A company that runs your app's files on its servers for a fee or free for small apps."
    },
    {
      "term": "Domain",
      "def": "A web address you own, such as example.com, that points at your app."
    },
    {
      "term": "Store listing",
      "def": "An app's page in the store: its name, pictures, description, and reviews."
    },
    {
      "term": "Version",
      "def": "One numbered release of an app, such as version 1.0, then 1.1."
    }
  ],
  "video": {
    "title": "Submitting my app to the Play Store #reactnative #softwaredeveloper",
    "embedUrl": "https://www.youtube.com/embed/03vwbohVgNc",
    "note": "Watch the step-by-step store submission, and list the three things you must prepare before you submit anything.",
    "more": [
      {
        "title": "How to Publish Your App on Play Store & App Store for FREE!",
        "url": "https://www.youtube.com/watch?v=d9KZ7UQY858"
      },
      {
        "title": "How to put an app on the app stores",
        "url": "https://www.youtube.com/watch?v=uOpIemFuc7w"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Hosting” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Hosting — Renting server space from a company so anyone can reach your web app. Step 2: It matters because it is part of: Describe the steps to publish a web app so anyone can open it. Step 3: An example from the module is the way hosting shows up in everyday apps and computers, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “App store review” and “Developer account”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: App store review — The store's check that an app works, is honest, and follows the rules before it is listed. Step 2: Developer account — An account with Apple or Google that lets you publish apps to their store. Step 3: They differ because the first is about app store review while the second is about developer account; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Describe the steps to publish a mobile app to an app store.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Describe the steps to publish a mobile app to an app store. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “Privacy policy” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: Privacy policy — A page saying what data an app collects and what it does with it. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Release — A version of an app given to users, after testing. Step 2: Minimum viable product — The smallest version of an app that does its main job well enough to ship. Step 3: Update — A newer version of an app, usually fixing bugs or adding features. Step 4: App store review — The store's check that an app works, is honest, and follows the rules before it is listed. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Explain what an app store review checks and why apps get rejected. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Hosting” mean?",
      "choices": [
        "Renting server space from a company so anyone can reach your web app.",
        "The store's check that an app works, is honest, and follows the rules before it is listed.",
        "An account with Apple or Google that lets you publish apps to their store.",
        "A page saying what data an app collects and what it does with it."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Hosting means: Renting server space from a company so anyone can reach your web app. (b) is the definition of App store review, not of Hosting. (c) is the definition of Developer account, not of Hosting. (d) is the definition of Privacy policy, not of Hosting."
    },
    {
      "q": "What does the term “App store review” mean?",
      "choices": [
        "Renting server space from a company so anyone can reach your web app.",
        "The store's check that an app works, is honest, and follows the rules before it is listed.",
        "An account with Apple or Google that lets you publish apps to their store.",
        "A page saying what data an app collects and what it does with it."
      ],
      "answer": 1,
      "explanation": "Correct: (b). App store review means: The store's check that an app works, is honest, and follows the rules before it is listed. (a) is the definition of Hosting, not of App store review. (c) is the definition of Developer account, not of App store review. (d) is the definition of Privacy policy, not of App store review."
    },
    {
      "q": "What does the term “Developer account” mean?",
      "choices": [
        "Renting server space from a company so anyone can reach your web app.",
        "The store's check that an app works, is honest, and follows the rules before it is listed.",
        "An account with Apple or Google that lets you publish apps to their store.",
        "A page saying what data an app collects and what it does with it."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Developer account means: An account with Apple or Google that lets you publish apps to their store. (a) is the definition of Hosting, not of Developer account. (b) is the definition of App store review, not of Developer account. (d) is the definition of Privacy policy, not of Developer account."
    },
    {
      "q": "What does the term “Privacy policy” mean?",
      "choices": [
        "Renting server space from a company so anyone can reach your web app.",
        "The store's check that an app works, is honest, and follows the rules before it is listed.",
        "An account with Apple or Google that lets you publish apps to their store.",
        "A page saying what data an app collects and what it does with it."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Privacy policy means: A page saying what data an app collects and what it does with it. (a) is the definition of Hosting, not of Privacy policy. (b) is the definition of App store review, not of Privacy policy. (c) is the definition of Developer account, not of Privacy policy."
    },
    {
      "q": "Which term means: A version of an app given to users, after testing.",
      "choices": [
        "Release",
        "Hosting",
        "App store review",
        "Developer account"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Release is the term for: A version of an app given to users, after testing. (b) Hosting means Renting server space from a company so anyone can reach your web app. (c) App store review means The store's check that an app works, is honest, and follows the rules before it is listed. (d) Developer account means An account with Apple or Google that lets you publish apps to their store."
    },
    {
      "q": "Which term means: The smallest version of an app that does its main job well enough to ship.",
      "choices": [
        "Hosting",
        "Minimum viable product",
        "App store review",
        "Developer account"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Minimum viable product is the term for: The smallest version of an app that does its main job well enough to ship. (a) Hosting means Renting server space from a company so anyone can reach your web app. (c) App store review means The store's check that an app works, is honest, and follows the rules before it is listed. (d) Developer account means An account with Apple or Google that lets you publish apps to their store."
    },
    {
      "q": "Which term means: A newer version of an app, usually fixing bugs or adding features.",
      "choices": [
        "Hosting",
        "App store review",
        "Update",
        "Developer account"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Update is the term for: A newer version of an app, usually fixing bugs or adding features. (a) Hosting means Renting server space from a company so anyone can reach your web app. (b) App store review means The store's check that an app works, is honest, and follows the rules before it is listed. (d) Developer account means An account with Apple or Google that lets you publish apps to their store."
    },
    {
      "q": "Which term means: A picture of an app's screens, shown on its store page.",
      "choices": [
        "Hosting",
        "App store review",
        "Developer account",
        "Screenshot"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Screenshot is the term for: A picture of an app's screens, shown on its store page. (a) Hosting means Renting server space from a company so anyone can reach your web app. (b) App store review means The store's check that an app works, is honest, and follows the rules before it is listed. (c) Developer account means An account with Apple or Google that lets you publish apps to their store."
    }
  ],
  "studyGuide": "\n<h3>Module 12 — Shipping Your App: Quick Reference</h3>\n<p><strong>Core idea:</strong> Describe the steps to publish a web app so anyone can open it.</p>\n<p><strong>Key terms:</strong> Hosting · App store review · Developer account · Privacy policy · Release · Minimum viable product · Update · Screenshot.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Describe the steps to publish a web app so anyone can open it.</li>\n<li>Describe the steps to publish a mobile app to an app store.</li>\n<li>Explain what an app store review checks and why apps get rejected.</li>\n</ul>\n<p><strong>Watch out:</strong> Do not skip the stranger test: open your own app as a brand-new user before you call it done.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
