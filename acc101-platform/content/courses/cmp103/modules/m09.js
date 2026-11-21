// cmp103 - Module 9: Forms
module.exports = {
  "number": 9,
  "slug": "forms",
  "title": "Forms",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what a form does and what happens when it is submitted.",
    "Build a form with text inputs, email inputs, and a textarea.",
    "Use labels correctly so every input is named and clickable.",
    "Use checkboxes, radio buttons, and dropdowns.",
    "Add a submit button and use required and placeholder attributes."
  ],
  "sections": [
    {
      "heading": "What a Form Is",
      "html": "<p>A form is how a website collects information from visitors: a contact form, a sign-up form, a search box. The visitor types into fields, picks options, and clicks a submit button — and the browser sends the data to the address in the form's action attribute. In this course you are learning the front end: how to build the form. What happens on the server after submission is back-end work, beyond this course — but a form with no server behind it can still be tested in the browser, which will show you the data it tried to send.</p>\n<p>Every piece of data in a form has a name attribute, which is how the server knows what each value is: name=\"email\" for the email field, name=\"message\" for the message field. Without a name, the field's data is not sent at all — a quiet bug that catches beginners.</p>\n"
    },
    {
      "heading": "Labels and Text Inputs",
      "html": "<p>Every input needs a label — the text that says what the field is for. A label is linked to its input with for and id: </p>\n<pre>&lt;form&gt;\n&lt;label for=&quot;name&quot;&gt;Your name:&lt;/label&gt;\n&lt;input type=&quot;text&quot; id=&quot;name&quot; name=&quot;name&quot;&gt;\n&lt;button type=&quot;submit&quot;&gt;Send&lt;/button&gt;\n&lt;/form&gt;</pre>\n<p> The label's for=\"name\" matches the input's id=\"name\". Clicking the label then focuses the input, which helps everyone — and it is essential for screen-reader users, who hear the label read aloud when they reach the field.</p>\n<p>The type attribute decides what kind of field it is: type=\"text\" for a name, type=\"email\" for an email address (the browser checks it looks like an email before submitting), type=\"tel\" for a phone number, type=\"number\" for a number, type=\"password\" for a password (which hides the typing). For longer text, use a <textarea> instead of an input — it is a separate element with opening and closing tags.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Every input needs a <label> linked with for and id. Clicking the label focuses the field — and screen readers read the label aloud, so it is essential for accessibility.</div></p>\n"
    },
    {
      "heading": "Checkboxes, Radio Buttons, and Dropdowns",
      "html": "<p>When the visitor should pick from options, use the right control. Checkboxes (<input type=\"checkbox\">) let the visitor tick as many as they like: “Which days can you come? Tick all that apply.” Radio buttons (<input type=\"radio\">) let the visitor pick exactly one from a group — give all the buttons in the group the same name so the browser knows they belong together: “Morning, Afternoon, or Evening?” A dropdown (<select> with <option> children) is best when there are many options and only one choice, such as a country.</p>\n<p>Group related fields with a <fieldset> and a <legend> (the group's title). It draws a box around the group with a title, and screen readers announce the group name — a small kindness that makes a form much easier to use.</p>\n"
    },
    {
      "heading": "Submit Buttons and Helpful Attributes",
      "html": "<p>A submit button sends the form: <button type=\"submit\">Send message</button>. Without a submit button, there is no way to send the form at all. The required attribute stops the form being submitted until the field is filled in — the browser shows its own message, no JavaScript needed. The placeholder attribute shows grey hint text inside an empty field, such as placeholder=\"you@example.com\" — but a placeholder is not a label, and it disappears when the visitor types, so always use a real label too.</p>\n<p>Style your form with the same CSS you already know: inputs are elements like any other, so width, padding, border, and font-size all apply. Give text inputs and textareas a width of 100% so they fill their container, and make the submit button look like a button — a background colour, padding, and a pointer cursor on hover.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>A form collects information; the submit button sends it.</li><li>Every input needs a label linked with for and id.</li><li>type=\"email\" checks the format; type=\"password\" hides the typing.</li><li>Checkboxes allow many choices; radio buttons allow exactly one; dropdowns suit long lists.</li><li>required stops an empty form being sent; placeholder is a hint, not a label.</li></ul></p>\n<p><strong>Common mistake:</strong> Forgetting the name attribute. A field without a name sends no data at all.</p>\n<p><strong>Common mistake:</strong> Using placeholder text instead of a label. The placeholder disappears when the visitor types, and screen readers do not treat it as a label.</p>\n<p><strong>Ready check:</strong> If you can build a contact form with a name field, an email field, a message textarea, a radio group, and a submit button — all labelled — you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Form",
      "def": "A part of a page where visitors type information and send it, built with <form>."
    },
    {
      "term": "Input",
      "def": "A field in a form where the visitor types or chooses something, marked with <input>."
    },
    {
      "term": "Label",
      "def": "The text naming an input, marked with <label> and linked to the input with for and id."
    },
    {
      "term": "Text input",
      "def": "A one-line field for short text, such as a name: <input type=\"text\">."
    },
    {
      "term": "Email input",
      "def": "A field for an email address: <input type=\"email\">. The browser checks it looks like an email."
    },
    {
      "term": "Textarea",
      "def": "A multi-line field for longer text, such as a message: <textarea>."
    },
    {
      "term": "Checkbox",
      "def": "A small box the visitor ticks or unticks: <input type=\"checkbox\">. Several can be ticked at once."
    },
    {
      "term": "Radio button",
      "def": "A round button where the visitor picks exactly one option from a group: <input type=\"radio\">."
    },
    {
      "term": "Dropdown",
      "def": "A list the visitor opens and picks one option from, built with <select> and <option>."
    },
    {
      "term": "Submit button",
      "def": "The button that sends a form: <button type=\"submit\">."
    },
    {
      "term": "Placeholder",
      "def": "Grey hint text inside an empty input, such as placeholder=\"Your name\"."
    },
    {
      "term": "required",
      "def": "An attribute that stops a form being submitted until the field is filled in."
    },
    {
      "term": "name",
      "def": "The attribute that names a piece of form data, so the server knows what it is."
    },
    {
      "term": "action",
      "def": "The attribute on a form that says where the data is sent."
    },
    {
      "term": "method",
      "def": "The attribute on a form that says how the data is sent: get or post."
    }
  ],
  "video": {
    "title": "HTML & CSS Full Course for free 🌎",
    "embedUrl": "https://www.youtube.com/embed/HGTJBPNC-Gw",
    "note": "Bro Code's full HTML and CSS course. Watch the forms sections and build a contact form for your own site as you go.",
    "more": [
      {
        "title": "Learn HTML5 and CSS3 From Scratch - Full Course",
        "url": "https://www.youtube.com/watch?v=mU6anWqZJcc"
      },
      {
        "title": "HTML Tutorial for Beginners: HTML Crash Course",
        "url": "https://www.youtube.com/watch?v=qz0aGYrrlhU"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Form” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Form — A part of a page where visitors type information and send it, built with <form>. Step 2: It matters because it is part of: Explain what a form does and what happens when it is submitted. Step 3: An example from the module is the way form shows up in everyday use, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Input” and “Label”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Input — A field in a form where the visitor types or chooses something, marked with <input>. Step 2: Label — The text naming an input, marked with <label> and linked to the input with for and id. Step 3: They differ because the first is about input while the second is about label; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Build a form with text inputs, email inputs, and a textarea.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Build a form with text inputs, email inputs, and a textarea. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “Text input” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: Text input — A one-line field for short text, such as a name: <input type=\"text\">. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Email input — A field for an email address: <input type=\"email\">. The browser checks it looks like an email. Step 2: Textarea — A multi-line field for longer text, such as a message: <textarea>. Step 3: Checkbox — A small box the visitor ticks or unticks: <input type=\"checkbox\">. Several can be ticked at once. Step 4: Radio button — A round button where the visitor picks exactly one option from a group: <input type=\"radio\">. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Add a submit button and use required and placeholder attributes. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Submit button” mean?",
      "choices": [
        "The button that sends a form: <button type=\"submit\">.",
        "The attribute on a form that says where the data is sent.",
        "A multi-line field for longer text, such as a message: <textarea>.",
        "The attribute on a form that says how the data is sent: get or post."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Submit button means: The button that sends a form: <button type=\"submit\">. (b) is the definition of action, not of Submit button. (c) is the definition of method, not of Submit button. (d) is the definition of Textarea, not of Submit button."
    },
    {
      "q": "What does the term “name” mean?",
      "choices": [
        "The attribute on a form that says where the data is sent.",
        "The attribute that names a piece of form data, so the server knows what it is.",
        "An attribute that stops a form being submitted until the field is filled in.",
        "The attribute on a form that says how the data is sent: get or post."
      ],
      "answer": 1,
      "explanation": "Correct: (b). name means: The attribute that names a piece of form data, so the server knows what it is. (a) is the definition of action, not of name. (c) is the definition of required, not of name. (d) is the definition of method, not of name."
    },
    {
      "q": "Which term means: A part of a page where visitors type information and send it, built with <form>.",
      "choices": [
        "Input",
        "Form",
        "name",
        "Submit button"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Form is the term for: A part of a page where visitors type information and send it, built with <form>. (a) Input means A field in a form where the visitor types or chooses something, marked with <input>. (c) Submit button means The button that sends a form: <button type=\"submit\">. (d) name means The attribute that names a piece of form data, so the server knows what it is."
    },
    {
      "q": "Which term means: A one-line field for short text, such as a name: <input type=\"text\">.",
      "choices": [
        "Text input",
        "Email input",
        "required",
        "Dropdown"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Text input is the term for: A one-line field for short text, such as a name: <input type=\"text\">. (b) required means An attribute that stops a form being submitted until the field is filled in. (c) Email input means A field for an email address: <input type=\"email\">. The browser checks it looks like an email. (d) Dropdown means A list the visitor opens and picks one option from, built with <select> and <option>."
    },
    {
      "q": "Which of the following is TRUE about Checkbox?",
      "choices": [
        "A small box the visitor ticks or unticks: <input type=\"checkbox\">. Several can be ticked at once.",
        "An attribute that stops a form being submitted until the field is filled in.",
        "The text naming an input, marked with <label> and linked to the input with for and id.",
        "The button that sends a form: <button type=\"submit\">."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Checkbox: A small box the visitor ticks or unticks: <input type=\"checkbox\">. Several can be ticked at once. (b) describes Label, not Checkbox. (c) describes Submit button, not Checkbox. (d) describes required, not Checkbox."
    },
    {
      "q": "What does the term “Submit button” mean?",
      "choices": [
        "The button that sends a form: <button type=\"submit\">.",
        "The attribute on a form that says how the data is sent: get or post.",
        "A one-line field for short text, such as a name: <input type=\"text\">.",
        "The attribute that names a piece of form data, so the server knows what it is."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Submit button means: The button that sends a form: <button type=\"submit\">. (b) is the definition of method, not of Submit button. (c) is the definition of name, not of Submit button. (d) is the definition of Text input, not of Submit button."
    },
    {
      "q": "What does the name attribute on a form input do?",
      "choices": [
        "It shows the label next to the field",
        "It names the piece of data so the server knows what it is",
        "It changes the colour of the field",
        "It makes the field required"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The name is how the submitted data is identified — without it, the field sends nothing. (a) describes the label element. (c) is wrong: colour is CSS. (d) describes the required attribute."
    },
    {
      "q": "A visitor must pick exactly one time slot: Morning, Afternoon, or Evening. Which control is right?",
      "choices": [
        "Checkboxes",
        "Radio buttons with the same name",
        "A textarea",
        "Three separate text inputs"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Radio buttons with the same name let the visitor pick exactly one option from the group. (a) Checkboxes allow several choices at once. (c) A textarea is for free text, not for picking an option. (d) Text inputs let the visitor type anything, which invites mistakes."
    }
  ],
  "studyGuide": "\n<h3>Module 9 — Forms: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain what a form does and what happens when it is submitted.</p>\n<p><strong>Key terms:</strong> Form · Input · Label · Text input · Email input · Textarea · Checkbox · Radio button.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain what a form does and what happens when it is submitted.</li>\n<li>Build a form with text inputs, email inputs, and a textarea.</li>\n<li>Use labels correctly so every input is named and clickable.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
