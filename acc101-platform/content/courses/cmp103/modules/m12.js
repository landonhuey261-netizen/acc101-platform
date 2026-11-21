// cmp103 - Module 12: Final Project: A 3-Page Website
module.exports = {
  "number": 12,
  "slug": "final-project-three-page-website",
  "title": "Final Project: A 3-Page Website",
  "estTime": "3–4 hours",
  "objectives": [
    "Plan a three-page website: its pages, its navigation, and its content.",
    "Build three linked pages that share one stylesheet and one script.",
    "Add a working form and a JavaScript interaction to the site.",
    "Make the site responsive so it works on a phone and a desktop.",
    "Test the whole site: every link, every page, every screen size."
  ],
  "sections": [
    {
      "heading": "The Job: A Website for a Real Subject",
      "html": "<p>Your final project is a complete three-page website on a subject you choose: a local club, a hobby, a small business, a family recipe collection. The three pages are: a home page (index.html) introducing the subject, an about page (about.html) with more detail, and a contact page (contact.html) with a form. Every page links to the other two, every page shares one stylesheet (styles.css) and one script (script.js), and the site works on a phone and on a desktop.</p>\n<p>Before you write any code, plan. Sketch each page on paper — a wireframe: where the header goes, where the navigation sits, where the main content and the pictures go, where the footer sits. Decide your colours (two or three) and your fonts. Write the words for each page before you build it: a website with no words is a frame with no picture.</p>\n"
    },
    {
      "heading": "Building It, Page by Page",
      "html": "<p>Build the home page first, with the full skeleton: header with navigation, main with a heading, some paragraphs, a list, and an image with alt text, and a footer. Link the stylesheet and the script. Then copy that skeleton for the about and contact pages, changing only the main content — copying the skeleton is how real developers keep a site consistent, and it is why the shared stylesheet matters: change one rule and all three pages change together.</p>\n<p>Add the form to the contact page: name, email, message, and a submit button, all labelled, with required on the name and email. Add the JavaScript to script.js: a button on the home page that changes a message when clicked, and a check on the contact form that shows a thank-you message when it is submitted. Keep the script small — a few lines that do one job well.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> One stylesheet and one script, shared by all three pages. Change one rule and the whole site changes together — that is the point of keeping them separate.</div></p>\n"
    },
    {
      "heading": "Responsive, Accessible, Tested",
      "html": "<p>Make the site responsive: the viewport meta tag in every page's head, a container with max-width, flexible images, and a media query that stacks the navigation and the cards on a small screen. Then check accessibility: every image has alt text, every form field has a label, headings run in order, and the colour contrast is strong enough to read — dark text on a light background, not grey on grey.</p>\n<p>Test the whole site like a visitor would: click every link on every page and confirm it goes somewhere real. Fill in the form and submit it. Narrow the browser window to phone width and check nothing overflows. Open it in a second browser. A site that has been tested this way is finished; a site that has only been looked at is not.</p>\n"
    },
    {
      "heading": "Publishing and What Comes Next",
      "html": "<p>A site on your own computer can only be seen by you. To put it on the internet, you need hosting and, usually, a domain name. Free options for a first site include GitHub Pages and Netlify: you upload your files, and they give you a web address anyone can visit. That is a good next step, but it is not part of this course — the course ends with a finished, tested site on your own computer, which is the real achievement.</p>\n<p>After this course, the path continues: more JavaScript (the book Eloquent JavaScript, 4th edition, by Marijn Haverbeke, is a well-regarded next step, and it is free to read online), CSS Grid for two-dimensional layouts, and then a framework such as React. Or skip all of that and build a site for a real person or a real club — a real user is the best teacher there is. The books HTML and CSS: Design and Build Websites and JavaScript and jQuery, both by Jon Duckett, are good printed references for everything in this course.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>Plan first: wireframes, colours, fonts, and words before code.</li><li>Three pages, one shared stylesheet, one shared script.</li><li>A form on the contact page and a JavaScript interaction on the home page.</li><li>Responsive: viewport tag, max-width, flexible images, a media query.</li><li>Test everything: every link, the form, phone and desktop widths, a second browser.</li></ul></p>\n<p><strong>Common mistake:</strong> Building three pages with three different stylesheets. One shared stylesheet keeps the site consistent and easy to change.</p>\n<p><strong>Common mistake:</strong> Forgetting the navigation on one page. Every page links to the other two — check each page, not just the home page.</p>\n<p><strong>Ready check:</strong> If your three-page site is linked, styled from one stylesheet, responsive, and tested at phone and desktop widths, you have finished this course — and you have built a real website.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Project",
      "def": "A complete website built to do a real job, made by combining the skills from the course."
    },
    {
      "term": "Home page",
      "def": "The main page of a website, usually index.html, that visitors land on first."
    },
    {
      "term": "Navigation",
      "def": "The links that let visitors move between the pages of a site, usually in a nav element on every page."
    },
    {
      "term": "Shared stylesheet",
      "def": "One .css file linked from every page, so the whole site looks consistent."
    },
    {
      "term": "Shared script",
      "def": "One .js file linked from every page, so the whole site shares the same behaviour."
    },
    {
      "term": "Wireframe",
      "def": "A simple sketch of a page's layout, drawn before any code is written."
    },
    {
      "term": "Content",
      "def": "The actual words, pictures, and information on a website."
    },
    {
      "term": "Responsive",
      "def": "A site that adapts to different screen sizes, from phones to desktops."
    },
    {
      "term": "Test",
      "def": "Checking a website by clicking every link, trying every form, and viewing it at phone, tablet, and desktop widths."
    },
    {
      "term": "Publish",
      "def": "Putting a website on a server so anyone on the internet can visit it."
    },
    {
      "term": "Hosting",
      "def": "Paying a company to keep your website on its servers so anyone can visit it."
    },
    {
      "term": "Domain name",
      "def": "The readable name of a website, such as example.com."
    },
    {
      "term": "404",
      "def": "The error page shown when a link points to a page that does not exist."
    },
    {
      "term": "Accessibility",
      "def": "Building a site so everyone can use it, including people using screen readers or keyboards."
    },
    {
      "term": "Next step",
      "def": "What to learn after this course: more JavaScript, CSS Grid, or a framework such as React — or building a site for a real person or club."
    }
  ],
  "video": {
    "title": "HTML, CSS, and JavaScript: Learn by Building 10 Projects from Scratch for Beginners",
    "embedUrl": "https://www.youtube.com/embed/Lp44-GYcEjA",
    "note": "A course that teaches HTML, CSS, and JavaScript by building ten projects from scratch, including a to-do list and a password checker. Watch a project build and adapt its ideas for your own three-page site.",
    "more": [
      {
        "title": "Introduction to Web Development Using HTML, CSS & JavaScript",
        "url": "https://www.youtube.com/watch?v=PSnsDK0gRTU"
      },
      {
        "title": "JavaScript Full Course for free 🌐",
        "url": "https://www.youtube.com/watch?v=8dWL3wF_OMw"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Project” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Project — A complete website built to do a real job, made by combining the skills from the course. Step 2: It matters because it is part of: Plan a three-page website: its pages, its navigation, and its content. Step 3: An example from the module is the way project shows up in everyday use, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Home page” and “Navigation”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Home page — The main page of a website, usually index.html, that visitors land on first. Step 2: Navigation — The links that let visitors move between the pages of a site, usually in a nav element on every page. Step 3: They differ because the first is about home page while the second is about navigation; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Build three linked pages that share one stylesheet and one script.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Build three linked pages that share one stylesheet and one script. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “Shared stylesheet” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: Shared stylesheet — One .css file linked from every page, so the whole site looks consistent. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Shared script — One .js file linked from every page, so the whole site shares the same behaviour. Step 2: Wireframe — A simple sketch of a page's layout, drawn before any code is written. Step 3: Content — The actual words, pictures, and information on a website. Step 4: Responsive — A site that adapts to different screen sizes, from phones to desktops. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Test the whole site: every link, every page, every screen size. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Project” mean?",
      "choices": [
        "One .js file linked from every page, so the whole site shares the same behaviour.",
        "Paying a company to keep your website on its servers so anyone can visit it.",
        "Checking a website by clicking every link, trying every form, and viewing it at phone, tablet, and desktop widths.",
        "A complete website built to do a real job, made by combining the skills from the course."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Project means: A complete website built to do a real job, made by combining the skills from the course. (a) is the definition of Shared script, not of Project. (b) is the definition of Test, not of Project. (c) is the definition of Hosting, not of Project."
    },
    {
      "q": "What does the term “Shared stylesheet” mean?",
      "choices": [
        "What to learn after this course: more JavaScript, CSS Grid, or a framework such as React — or building a site for a real person or club.",
        "One .js file linked from every page, so the whole site shares the same behaviour.",
        "One .css file linked from every page, so the whole site looks consistent.",
        "The error page shown when a link points to a page that does not exist."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Shared stylesheet means: One .css file linked from every page, so the whole site looks consistent. (a) is the definition of Shared script, not of Shared stylesheet. (b) is the definition of 404, not of Shared stylesheet. (d) is the definition of Next step, not of Shared stylesheet."
    },
    {
      "q": "Which term means: The actual words, pictures, and information on a website.",
      "choices": [
        "Navigation",
        "Wireframe",
        "Content",
        "Test"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Content is the term for: The actual words, pictures, and information on a website. (a) Wireframe means A simple sketch of a page's layout, drawn before any code is written. (b) Navigation means The links that let visitors move between the pages of a site, usually in a nav element on every page. (d) Test means Checking a website by clicking every link, trying every form, and viewing it at phone, tablet, and desktop widths."
    },
    {
      "q": "Which term means: Putting a website on a server so anyone on the internet can visit it.",
      "choices": [
        "Content",
        "Publish",
        "Wireframe",
        "Project"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Publish is the term for: Putting a website on a server so anyone on the internet can visit it. (a) Content means The actual words, pictures, and information on a website. (c) Project means A complete website built to do a real job, made by combining the skills from the course. (d) Wireframe means A simple sketch of a page's layout, drawn before any code is written."
    },
    {
      "q": "Which of the following is TRUE about 404?",
      "choices": [
        "The error page shown when a link points to a page that does not exist.",
        "The actual words, pictures, and information on a website.",
        "Paying a company to keep your website on its servers so anyone can visit it.",
        "One .js file linked from every page, so the whole site shares the same behaviour."
      ],
      "answer": 0,
      "explanation": "Correct: (a). 404: The error page shown when a link points to a page that does not exist. (b) describes Content, not 404. (c) describes Hosting, not 404. (d) describes Shared script, not 404."
    },
    {
      "q": "What does the term “Project” mean?",
      "choices": [
        "Checking a website by clicking every link, trying every form, and viewing it at phone, tablet, and desktop widths.",
        "Paying a company to keep your website on its servers so anyone can visit it.",
        "A complete website built to do a real job, made by combining the skills from the course.",
        "The actual words, pictures, and information on a website."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Project means: A complete website built to do a real job, made by combining the skills from the course. (a) is the definition of Content, not of Project. (b) is the definition of Hosting, not of Project. (d) is the definition of Test, not of Project."
    },
    {
      "q": "Why should all three pages of a website share one stylesheet?",
      "choices": [
        "So the pages load more slowly",
        "So the whole site looks consistent and one edit changes every page",
        "So the pages cannot link to each other",
        "So the site works without a browser"
      ],
      "answer": 1,
      "explanation": "Correct: (b). One shared stylesheet keeps the site consistent and means one edit updates every page. (a) is wrong: a shared stylesheet is cached and usually faster. (c) is wrong: links work the same either way. (d) is wrong: every website needs a browser."
    },
    {
      "q": "What is the best way to test a website before calling it finished?",
      "choices": [
        "Look at the home page once on your own computer",
        "Click every link, try the form, and view it at phone and desktop widths in two browsers",
        "Check that the file names look right",
        "Ask the computer if the site is good"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Real testing means clicking every link, trying the form, and checking different screen sizes and browsers. (a) is wrong: one look at one page misses most bugs. (c) is wrong: file names looking right does not mean the links work. (d) is wrong: the computer cannot judge a website for you."
    }
  ],
  "studyGuide": "\n<h3>Module 12 — Final Project: A 3-Page Website: Quick Reference</h3>\n<p><strong>Core idea:</strong> Plan a three-page website: its pages, its navigation, and its content.</p>\n<p><strong>Key terms:</strong> Project · Home page · Navigation · Shared stylesheet · Shared script · Wireframe · Content · Responsive.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Plan a three-page website: its pages, its navigation, and its content.</li>\n<li>Build three linked pages that share one stylesheet and one script.</li>\n<li>Add a working form and a JavaScript interaction to the site.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
