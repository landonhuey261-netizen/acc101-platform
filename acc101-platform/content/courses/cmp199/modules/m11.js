module.exports = {
  "number": 11,
  "slug": "portfolio-project-studio",
  "title": "Portfolio Project Studio: Shipping Your App, Photo & Video",
  "estTime": "4–5 hours",
  "objectives": [
    "Plan a three-piece portfolio (working app, edited photo, 60-second video) against a short brief for each piece.",
    "Build a small working app with HTML, CSS, and JavaScript, and test it in a real browser.",
    "Edit a photo in Photoshop to a client brief, non-destructively, and export it for the web.",
    "Cut a 60-second video in Premiere Pro to a storyboard, with clean audio and a proper export.",
    "Self-check each piece against the rubric in the Portfolio Project Study Guide and ship the portfolio live."
  ],
  "sections": [
    {
      "heading": "The Briefs: Three Pieces, Three Jobs",
      "html": "<p>Your portfolio has three pieces, and each one has a job. Piece one is a <strong>working app</strong>: a small tool that actually works in a browser — a to-do list that saves tasks, a tip calculator, a quiz, or a booking form that validates its inputs. The brief is: one clear job, usable on a phone, no broken buttons, and code you can explain. Piece two is an <strong>edited photo</strong>: a portrait or product shot, retouched and colour-corrected to a client brief, exported for the web. Piece three is a <strong>60-second video</strong>: cut to a storyboard, with clean dialogue or narration, music that ducks under the voice, and titles the viewer can read.</p>\n<p>Write the briefs down before you start building — one paragraph each: who the piece is for, what it must do, and what 'done' looks like. A portfolio is not a pile of files; it is three pieces that each prove a skill. The <strong>Portfolio Project Study Guide</strong> in this course holds the rubric you will check yourself against: the app works, the photo is clean and correctly exported, the video is 60 seconds and tells its story, and the whole portfolio is live where someone else can open it. The app cannot grade creative work, so this self-check is the grade — be honest with it.</p>"
    },
    {
      "heading": "Building the App: Small, Working, and Tested",
      "html": "<p>Build the app with plain <strong>HTML, CSS, and JavaScript</strong> — no framework needed for a first portfolio piece. Structure first: an HTML file with a heading, the inputs, a button, and a place for the result. Style second: CSS that works on a phone screen as well as a desktop, with readable text and buttons big enough to tap. Behaviour third: JavaScript that reads the inputs, checks them (empty input? a number where text belongs?), does the job, and shows the result. Test it like a user: click every button, type the wrong thing on purpose, and open it on your phone.</p>\n<p>Here is a small, verified helper pattern you can reuse — a function that builds one project card for your portfolio page from a title, a blurb, and a link:</p>\n<pre><code># Portfolio helper: build a simple project-card HTML block from a list of projects.\ndef project_card(title, blurb, link):\n    return (\n        f'&lt;article class=\"project\"&gt;\\n'\n        f'  &lt;h3&gt;{title}&lt;/h3&gt;\\n'\n        f'  &lt;p&gt;{blurb}&lt;/p&gt;\\n'\n        f'  &lt;a href=\"{link}\"&gt;See the project&lt;/a&gt;\\n'\n        f'&lt;/article&gt;'\n    )</code></pre>\n<p>And the JavaScript side — a function that filters your project list by tag, so a visitor can see only the apps, or only the videos:</p>\n<pre><code>// Portfolio helper: filter the project list by tag and render titles.\nconst projects = [\n  { title: \"To-Do App\", tags: [\"app\", \"javascript\"] },\n  { title: \"Photo Edit\", tags: [\"photo\", \"photoshop\"] },\n  { title: \"60-Second Video\", tags: [\"video\", \"premiere\"] },\n];\n\nfunction projectsWithTag(tag) {\n  return projects.filter((p) => p.tags.includes(tag)).map((p) => p.title);\n}</code></pre>\n<p>Both snippets were run and checked before this module was written: the Python one prints three project cards, and the JavaScript one returns ['To-Do App'] for 'app' and ['60-Second Video'] for 'video'. Keep your own code this small and testable — a 50-line app that works beats a 500-line app that does not.</p>"
    },
    {
      "heading": "Editing the Photo and Cutting the Video",
      "html": "<p>For the photo, follow the brief: start from the best original you have, duplicate the Background layer, retouch lightly (blemishes out, features kept), correct the colour with a Levels or Curves adjustment layer, and export for the web — sRGB, JPEG at quality 70–80, sized to the display size. Name the file clearly and keep the PSD master. Then open the export in a browser and look at it: if it looks wrong there, the export is wrong, whatever the settings said.</p>\n<p>For the video, cut to the <strong>storyboard</strong> from the Premiere Pro lab in this course: a 60-second arc with a hook in the first 5 seconds, the middle doing the work, and a clear ending with a call to action. Edit the dialogue first and the pictures second — if the story works with the sound off and the captions on, the edit is sound. Keep dialogue at -12 to -6 dB, duck the music under the voice, add lower thirds that stay up for at least 3 seconds, and export H.264 in MP4 with the YouTube 1080p preset. Time it: 60 seconds means 60 seconds, not 74 — trim the weakest shot, not the strongest.</p>"
    },
    {
      "heading": "Shipping It Live and Checking Yourself",
      "html": "<p>A portfolio that only exists on your computer is not a portfolio. Ship it: put the three pieces and a short page about yourself on a free host — <strong>GitHub Pages</strong> is the simplest for a static site: push the files to a repository, turn on Pages, and you have a live link. Check the live link on your phone and on someone else's computer: do the images load, does the app work, does the video play? Fix what is broken before you share the link with anyone.</p>\n<p>Then do the self-check, honestly, against the rubric in the Portfolio Project Study Guide. For each piece, ask: does it do what the brief said? Does it work without errors? Is it exported correctly? Would I show this to a client? If any answer is no, fix that piece before you call the portfolio done. Write one paragraph about each piece — what it is, what you did, and what you learned — because a portfolio with no words is a gallery, and a client hires the person, not the gallery. When the three pieces pass the rubric and the site is live, the portfolio project is complete: tick it off in the tracker and move on to the exams.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Three pieces, three briefs: a working app (one clear job, works on a phone), an edited photo (retouched, colour-corrected, exported for web), a 60-second video (storyboard, clean audio, proper export).</li><li>App: HTML structure, CSS for phone and desktop, JavaScript that validates inputs; test like a user, including typing the wrong thing.</li><li>Photo: duplicate the layer, retouch lightly, correct colour with adjustment layers, export sRGB JPEG 70–80, keep the PSD.</li><li>Video: cut to the storyboard, dialogue first, dialogue -12 to -6 dB, duck the music, lower thirds 3+ seconds, export H.264 MP4, exactly 60 seconds.</li><li>Ship it on GitHub Pages, check it on your phone and someone else's computer, then self-check against the rubric — the app cannot grade creative work.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Building a big app that does not work instead of a small app that does. Small and working wins.</div><div class=\"callout\"><strong>Common mistake:</strong> Calling the portfolio done before checking the live link on another device.</div>\n<p><strong>Ready-to-Work link:</strong> If your three pieces pass the rubric and the site is live, the portfolio is shipped. Module 12 is the last one: exam-day strategy and what comes next.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Brief",
      "def": "A short written instruction for a piece of work: who it is for, what it must do, and what 'done' looks like."
    },
    {
      "term": "Rubric",
      "def": "A checklist of what 'good' looks like, used to judge your own work honestly."
    },
    {
      "term": "GitHub Pages",
      "def": "Free hosting for a static website from a GitHub repository — the simplest way to put a portfolio live."
    },
    {
      "term": "Call to action",
      "def": "The thing you ask the viewer to do at the end of a video or page, such as 'see my work' or 'contact me'."
    },
    {
      "term": "Storyboard",
      "def": "A shot-by-shot plan for a video: what the viewer sees and hears, in order, with timings."
    },
    {
      "term": "Case study",
      "def": "A short write-up of a project: the problem, what you did, and what the result was."
    },
    {
      "term": "Responsive",
      "def": "A design that works on a phone, a tablet, and a desktop without breaking."
    },
    {
      "term": "Alt text",
      "def": "A short description of an image for screen readers and for when the image does not load."
    },
    {
      "term": "README",
      "def": "A text file in a project that explains what the project is and how to run it."
    },
    {
      "term": "Validation",
      "def": "Checking user input before using it — empty fields, wrong types, and impossible values."
    }
  ],
  "video": {
    "title": "How to Create a Modern Responsive Portfolio Website From Scratch Using HTML, CSS & JavaScript",
    "embedUrl": "https://www.youtube.com/embed/AWoaYk6NKQ4",
    "note": "A full portfolio build from an empty folder: hero, skills, project cards, contact form, and a mobile menu. Build along with it, then replace the example content with your own three pieces.",
    "more": [
      {
        "title": "Build a Stunning Developer Portfolio with Next.js 16, Tailwind CSS v4 & Framer Motion",
        "url": "https://www.youtube.com/watch?v=1qJEZVr6eXE"
      },
      {
        "title": "How to Build a Portfolio Website with HTML CSS & JavaScript | Black & Lime | Full Tutorial",
        "url": "https://www.youtube.com/watch?v=jZX3MhzkBj4"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Your portfolio app is a tip calculator. A user types 'abc' into the bill field and clicks Calculate. What should the app do, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: It should show a clear message such as 'Please enter a number' and not crash or show NaN. Step 2: Validate the input before calculating. Step 3: Test with empty input, text, negative numbers, and very large numbers. Step 4: A portfolio app with a broken button is worse than no app at all.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Your portfolio page looks perfect on your laptop but the text runs off the screen on your phone. What is the most likely cause, and what is the fix?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The page is not responsive — fixed widths or missing viewport settings. Step 2: Add the viewport meta tag and use flexible widths instead of fixed pixels. Step 3: Test on a real phone, not just by shrinking the desktop browser. Step 4: Check buttons are big enough to tap.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Your 60-second video is 74 seconds long. What do you cut, and what do you protect?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Cut the weakest shot, not the strongest — the one that repeats information or overstays its welcome. Step 2: Protect the hook (first 5 seconds) and the ending with the call to action. Step 3: Tighten pauses in the dialogue before cutting whole shots. Step 4: Time it again after every cut until it is 60 seconds.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A visitor opens your portfolio and the video does not play. List the first three checks.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Check the file path — is the video file actually uploaded next to the page? Step 2: Check the format — is it an MP4 with H.264, which browsers play? Step 3: Check the file size — a huge file may time out on a slow connection. Step 4: Open the live site on another device to confirm.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Write the one-paragraph brief for your edited-photo piece: who it is for, what it must do, and what 'done' looks like.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Who: a local business owner who needs a product photo for their website. Step 2: What: a clean, colour-correct product shot with the background tidied, exported for the web. Step 3: Done: the photo looks natural, the product is sharp, the file is sRGB JPEG at the right size, and the PSD master is kept. Step 4: If the brief is vague, the work will be vague — write it first.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Your portfolio is live, but the photo looks dull in a browser while it looked fine in Photoshop. What is the most likely cause?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The colour profile — the file is probably Adobe RGB and the browser assumes sRGB. Step 2: Convert a copy to sRGB and re-export with Export As. Step 3: Open the export in the browser and compare it with the Photoshop file. Step 4: Keep the PSD master in Adobe RGB for print, and the web copy in sRGB.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What should a portfolio app do when a user types text into a number field?",
      "choices": [
        "Crash",
        "Show NaN",
        "Show a clear message and refuse to calculate",
        "Ignore it and guess"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Validate the input and show a clear message; never crash or show NaN. (a) is wrong: crashing is the worst outcome. (b) is wrong: NaN is meaningless to a user. (d) is wrong: guessing gives a wrong answer."
    },
    {
      "q": "What is the simplest free way to put a static portfolio live?",
      "choices": [
        "Buy a server",
        "GitHub Pages",
        "Email the files to yourself",
        "Print it out"
      ],
      "answer": 1,
      "explanation": "Correct: (b). GitHub Pages hosts a static site free from a repository. (a) is wrong: a server is unnecessary for a static site. (c) is wrong: emailing files does not publish them. (d) is wrong: a printed portfolio is not a live link."
    },
    {
      "q": "Your video must be 60 seconds and it is 74 seconds. What do you cut?",
      "choices": [
        "The hook",
        "The weakest shot",
        "The ending",
        "The audio"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Cut the weakest shot — the one that repeats information or overstays its welcome. (a) is wrong: the hook in the first 5 seconds is what keeps viewers watching. (c) is wrong: the ending carries the call to action. (d) is wrong: removing the audio leaves a silent video."
    },
    {
      "q": "Why should you check your live portfolio on someone else's computer?",
      "choices": [
        "It looks better there",
        "To confirm the images load, the app works, and the video plays for a real visitor",
        "It is required by law",
        "To use their Wi-Fi"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Your own computer may have files and logins that hide broken links; another device shows the truth. (a) is wrong: it may look worse, which is the point of checking. (c) is wrong: there is no such law. (d) is wrong: Wi-Fi has nothing to do with it."
    },
    {
      "q": "What does the rubric in the Portfolio Project Study Guide do?",
      "choices": [
        "Grades your work automatically",
        "Gives you a checklist to self-check each piece honestly, because the app cannot grade creative work",
        "Writes your portfolio for you",
        "Books your exams"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The rubric is a self-check: the app cannot run or grade code or creative work. (a) is wrong: nothing in the app grades creative work. (c) is wrong: you write the portfolio. (d) is wrong: exam booking is Module 12."
    },
    {
      "q": "What should a project write-up include?",
      "choices": [
        "Only the file name",
        "What the project is, what you did, and what you learned",
        "Your passwords",
        "Nothing — pictures are enough"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A short write-up per piece shows the thinking behind the work. (a) is wrong: a file name says nothing about the work. (c) is wrong: never publish passwords. (d) is wrong: a gallery with no words does not show the person behind it."
    },
    {
      "q": "What is a brief?",
      "choices": [
        "A short summary of a video",
        "A written instruction: who the work is for, what it must do, and what 'done' looks like",
        "A type of file format",
        "A Photoshop tool"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A brief sets the target before you start building. (a) is wrong: that is a synopsis. (c) is wrong: file formats are PSD, JPEG, PNG. (d) is wrong: Photoshop tools are Brush, Clone Stamp, and the rest."
    },
    {
      "q": "Your photo looks fine in Photoshop but dull in a browser. What is the most likely cause?",
      "choices": [
        "The photo is too big",
        "The colour profile — the file is Adobe RGB and the browser assumes sRGB",
        "The browser is broken",
        "The photo was not saved"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Browsers assume sRGB; an Adobe RGB file looks dull in them. (a) is wrong: size affects loading, not colour. (c) is wrong: the browser is behaving normally. (d) is wrong: an unsaved photo would not appear at all."
    }
  ],
  "studyGuide": "\n<h3>Module 11 — Portfolio Project Studio: Quick Reference</h3>\n<p><strong>Core idea:</strong> Three pieces, three briefs, one live link — and an honest self-check against the rubric.</p>\n<p><strong>App:</strong> One clear job · works on a phone · validates inputs · test like a user, including typing the wrong thing.</p>\n<p><strong>Photo:</strong> Duplicate the layer · retouch lightly · correct colour with adjustment layers · export sRGB JPEG 70–80 · keep the PSD.</p>\n<p><strong>Video:</strong> Cut to the storyboard · dialogue first · dialogue -12 to -6 dB · duck the music · lower thirds 3+ seconds · H.264 MP4 · exactly 60 seconds.</p>\n<p><strong>Ship:</strong> GitHub Pages · check on your phone and someone else's computer · write one paragraph per piece · self-check against the rubric.</p>\n<p><strong>Watch out:</strong> A big app that does not work; calling it done before checking the live link elsewhere.</p>\n<p><strong>Self-check:</strong> Do your three pieces pass the rubric, and is the site live? If yes, the portfolio is shipped.</p>\n"
};
