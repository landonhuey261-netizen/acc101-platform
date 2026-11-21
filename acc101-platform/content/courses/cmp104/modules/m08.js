// cmp104 - Module 8: How Mobile Apps Are Built
module.exports = {
  "number": 8,
  "slug": "how-mobile-apps-are-built",
  "title": "How Mobile Apps Are Built",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain the difference between native, web, and cross-platform mobile apps.",
    "Name the main languages and tools for Android and iPhone apps.",
    "Explain what Flutter and React Native are and when to use each.",
    "Describe what an emulator and a real phone are each good for when testing.",
    "Explain why a phone app feels different from a website."
  ],
  "sections": [
    {
      "heading": "Native, Web, or Cross-Platform?",
      "html": "<p>A native app is built for one kind of phone using that phone's own language and tools: Swift for iPhone, Kotlin for Android. It is fast, it can use every feature of the phone, and it feels exactly like the phone's own apps. The catch is that you build it twice — once for iPhone, once for Android — and keep both versions up to date.</p>\n<p>A web app wrapped for a phone is really a website in a frame: one codebase, both phones, but slower and limited in what it can do with the camera, sensors, and notifications. Cross-platform tools sit in the middle: you write once, in one language, and the tool builds a real app for both phones. That middle path is where most beginners start.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Native is fastest and most capable; cross-platform is one codebase for both phones. Pick based on the app, not on fashion.</div></p>\n"
    },
    {
      "heading": "The Main Tools",
      "html": "<p>For iPhone, the language is Swift and the tool is Xcode, on a Mac. For Android, the language is Kotlin and the tool is Android Studio. The two big cross-platform choices are Flutter, which uses the Dart language and draws its own screens, and React Native, which uses JavaScript and draws with the phone's own screen parts. Both are free, both are used by big companies, and both can build a good beginner app.</p>\n<p>Flutter is often the easier first step: one language, one set of screen parts, and the same look on both phones. React Native is the natural choice if you already know JavaScript from web work. Either is a fine choice; the skills of planning screens, handling data, and testing transfer between them.</p>\n"
    },
    {
      "heading": "How a Phone App Is Put Together",
      "html": "<p>A phone app is a set of screens joined by navigation: a home screen, a detail screen, a settings screen. Each screen is built from components — ready-made parts like buttons, text boxes, lists, and images — stacked and styled. Tapping a list item opens the detail screen; the back button returns. Underneath, the app keeps its data in state: the list of tasks, the logged-in user, the current screen.</p>\n<p>The phone gives the app powers a website does not have: the camera, the location sensor, push notifications, and storage that works offline. With power comes responsibility: ask for each permission only when you need it, and explain why, or users will say no.</p>\n"
    },
    {
      "heading": "Testing on a Phone",
      "html": "<p>Developers test in two ways. An emulator is a fake phone running on your computer: fast to start, easy to try many screen sizes, but it cannot truly test the camera or how the app feels in your hand. A real phone is the truth: install the app, carry it around, tap with your thumb, and use it on a bus with patchy signal. Use the emulator while building, and a real phone before you ship.</p>\n<p>Both Flutter and React Native offer hot reload: change the code, and the running app updates in a second without losing its place. It makes trying ideas fast and is one of the reasons beginners enjoy mobile work.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong></p>\n<ul>\n<li>Native apps use Swift (iPhone) or Kotlin (Android); cross-platform uses Flutter or React Native.</li>\n<li>Cross-platform means one codebase for both phones; native means building twice.</li>\n<li>Apps are screens joined by navigation, built from components, with data in state.</li>\n<li>Test on an emulator while building and on a real phone before shipping.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Choosing a tool before knowing what the app must do.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Never testing on a real phone — the emulator cannot test the camera or your thumb.</div>\n<p><strong>Ready check:</strong> If you can explain this module's main idea out loud in plain words, you have it.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Native app",
      "def": "An app built for one kind of phone using that phone's own language and tools."
    },
    {
      "term": "Cross-platform",
      "def": "A way of building one app that runs on both iPhone and Android from one codebase."
    },
    {
      "term": "Swift",
      "def": "The language used to build native iPhone apps."
    },
    {
      "term": "Kotlin",
      "def": "The language used to build native Android apps."
    },
    {
      "term": "Flutter",
      "def": "A cross-platform tool that uses the Dart language to build apps for both phones."
    },
    {
      "term": "React Native",
      "def": "A cross-platform tool that uses JavaScript to build apps for both phones."
    },
    {
      "term": "Dart",
      "def": "The language used with Flutter."
    },
    {
      "term": "Emulator",
      "def": "A fake phone running on a computer, used to test apps while building."
    },
    {
      "term": "Component",
      "def": "A ready-made building block of an app screen, such as a button, list, or text box."
    },
    {
      "term": "Navigation",
      "def": "How a user moves between screens in an app."
    },
    {
      "term": "State",
      "def": "The data an app is holding right now, such as the list of tasks or the logged-in user."
    },
    {
      "term": "Hot reload",
      "def": "Updating a running app instantly when code changes, without losing its place."
    },
    {
      "term": "Permission",
      "def": "A user's yes or no to an app using the camera, location, or notifications."
    },
    {
      "term": "Push notification",
      "def": "A message an app sends to a phone's lock screen, such as a reminder."
    },
    {
      "term": "Offline",
      "def": "Working without an internet connection, using data saved on the phone."
    }
  ],
  "video": {
    "title": "Cross Platform vs Native | Choosing the BEST Mobile App Framework in 5 Minutes",
    "embedUrl": "https://www.youtube.com/embed/T4uAn2FszY0",
    "note": "Watch the native versus cross-platform comparison and decide which path fits a simple first app — then note why.",
    "more": [
      {
        "title": "Mobile Development: Native or Cross-Platform, Which One is Better?",
        "url": "https://www.youtube.com/watch?v=V3VUf9rB--8"
      },
      {
        "title": "Native vs Cross-Platform Apps Explained | React Native, Flutter & Native Comparison",
        "url": "https://www.youtube.com/watch?v=Uzd_lmSxJ3k"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Native app” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Native app — An app built for one kind of phone using that phone's own language and tools. Step 2: It matters because it is part of: Explain the difference between native, web, and cross-platform mobile apps. Step 3: An example from the module is the way native app shows up in everyday apps and computers, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Cross-platform” and “Swift”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Cross-platform — A way of building one app that runs on both iPhone and Android from one codebase. Step 2: Swift — The language used to build native iPhone apps. Step 3: They differ because the first is about cross-platform while the second is about swift; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Name the main languages and tools for Android and iPhone apps.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Name the main languages and tools for Android and iPhone apps. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “Kotlin” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: Kotlin — The language used to build native Android apps. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Flutter — A cross-platform tool that uses the Dart language to build apps for both phones. Step 2: React Native — A cross-platform tool that uses JavaScript to build apps for both phones. Step 3: Dart — The language used with Flutter. Step 4: Cross-platform — A way of building one app that runs on both iPhone and Android from one codebase. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Explain what Flutter and React Native are and when to use each. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Native app” mean?",
      "choices": [
        "An app built for one kind of phone using that phone's own language and tools.",
        "A way of building one app that runs on both iPhone and Android from one codebase.",
        "The language used to build native iPhone apps.",
        "The language used to build native Android apps."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Native app means: An app built for one kind of phone using that phone's own language and tools. (b) is the definition of Cross-platform, not of Native app. (c) is the definition of Swift, not of Native app. (d) is the definition of Kotlin, not of Native app."
    },
    {
      "q": "What does the term “Cross-platform” mean?",
      "choices": [
        "An app built for one kind of phone using that phone's own language and tools.",
        "A way of building one app that runs on both iPhone and Android from one codebase.",
        "The language used to build native iPhone apps.",
        "The language used to build native Android apps."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Cross-platform means: A way of building one app that runs on both iPhone and Android from one codebase. (a) is the definition of Native app, not of Cross-platform. (c) is the definition of Swift, not of Cross-platform. (d) is the definition of Kotlin, not of Cross-platform."
    },
    {
      "q": "What does the term “Swift” mean?",
      "choices": [
        "An app built for one kind of phone using that phone's own language and tools.",
        "A way of building one app that runs on both iPhone and Android from one codebase.",
        "The language used to build native iPhone apps.",
        "The language used to build native Android apps."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Swift means: The language used to build native iPhone apps. (a) is the definition of Native app, not of Swift. (b) is the definition of Cross-platform, not of Swift. (d) is the definition of Kotlin, not of Swift."
    },
    {
      "q": "What does the term “Kotlin” mean?",
      "choices": [
        "An app built for one kind of phone using that phone's own language and tools.",
        "A way of building one app that runs on both iPhone and Android from one codebase.",
        "The language used to build native iPhone apps.",
        "The language used to build native Android apps."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Kotlin means: The language used to build native Android apps. (a) is the definition of Native app, not of Kotlin. (b) is the definition of Cross-platform, not of Kotlin. (c) is the definition of Swift, not of Kotlin."
    },
    {
      "q": "Which term means: A cross-platform tool that uses the Dart language to build apps for both phones.",
      "choices": [
        "Flutter",
        "Native app",
        "Cross-platform",
        "Swift"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Flutter is the term for: A cross-platform tool that uses the Dart language to build apps for both phones. (b) Native app means An app built for one kind of phone using that phone's own language and tools. (c) Cross-platform means A way of building one app that runs on both iPhone and Android from one codebase. (d) Swift means The language used to build native iPhone apps."
    },
    {
      "q": "Which term means: A cross-platform tool that uses JavaScript to build apps for both phones.",
      "choices": [
        "Native app",
        "React Native",
        "Cross-platform",
        "Swift"
      ],
      "answer": 1,
      "explanation": "Correct: (b). React Native is the term for: A cross-platform tool that uses JavaScript to build apps for both phones. (a) Native app means An app built for one kind of phone using that phone's own language and tools. (c) Cross-platform means A way of building one app that runs on both iPhone and Android from one codebase. (d) Swift means The language used to build native iPhone apps."
    },
    {
      "q": "Which term means: The language used with Flutter.",
      "choices": [
        "Native app",
        "Cross-platform",
        "Dart",
        "Swift"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Dart is the term for: The language used with Flutter. (a) Native app means An app built for one kind of phone using that phone's own language and tools. (b) Cross-platform means A way of building one app that runs on both iPhone and Android from one codebase. (d) Swift means The language used to build native iPhone apps."
    },
    {
      "q": "Which term means: A fake phone running on a computer, used to test apps while building.",
      "choices": [
        "Native app",
        "Cross-platform",
        "Swift",
        "Emulator"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Emulator is the term for: A fake phone running on a computer, used to test apps while building. (a) Native app means An app built for one kind of phone using that phone's own language and tools. (b) Cross-platform means A way of building one app that runs on both iPhone and Android from one codebase. (c) Swift means The language used to build native iPhone apps."
    }
  ],
  "studyGuide": "\n<h3>Module 8 — How Mobile Apps Are Built: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain the difference between native, web, and cross-platform mobile apps.</p>\n<p><strong>Key terms:</strong> Native app · Cross-platform · Swift · Kotlin · Flutter · React Native · Dart · Emulator.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain the difference between native, web, and cross-platform mobile apps.</li>\n<li>Name the main languages and tools for Android and iPhone apps.</li>\n<li>Explain what Flutter and React Native are and when to use each.</li>\n</ul>\n<p><strong>Watch out:</strong> Do not skip the stranger test: open your own app as a brand-new user before you call it done.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
