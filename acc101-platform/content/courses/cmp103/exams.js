// cmp103 — Midterm and Final exams.
// All questions are original to these exams (same topics as module quizzes, fresh scenarios and wording).
// Every explanation covers why the correct answer is right AND why each wrong choice is wrong.
module.exports = {
  "midterm": {
    "title": "Midterm Exam",
    "minutes": 75,
    "coverage": "Modules 1–6",
    "questions": [
      {
        "module": 1,
        "q": "A student is asked to define “Front end” on a test. Which answer is correct?",
        "choices": [
          "HyperText Transfer Protocol — the rules browsers and servers use to ask for and send web pages.",
          "The part of a website that runs in the browser: HTML, CSS, and JavaScript.",
          "A collection of web pages under one name, stored on a server.",
          "The part of a website that runs on the server: databases and server programs the visitor never sees."
        ],
        "answer": 1,
        "explanation": "Correct: (b). Front end means: The part of a website that runs in the browser: HTML, CSS, and JavaScript. (a) is the definition of Website, not of Front end. (c) is the definition of Back end, not of Front end. (d) is the definition of HTTP, not of Front end."
      },
      {
        "module": 1,
        "q": "During a review, a classmate describes something as: “The system of web pages and links that runs on top of the internet.” Which term are they describing?",
        "choices": [
          "HTML",
          "Web page",
          "World Wide Web",
          "Hosting"
        ],
        "answer": 2,
        "explanation": "Correct: (c). That description is World Wide Web: The system of web pages and links that runs on top of the internet. (a) HTML means HyperText Markup Language — the language that gives a web page its structure and content. (b) Web page means One single page on the web, such as one article or one product page. (d) Hosting means Paying a company to keep your website on its servers so anyone can visit it."
      },
      {
        "module": 1,
        "q": "Which of the following is TRUE about JavaScript?",
        "choices": [
          "Paying a company to keep your website on its servers so anyone can visit it.",
          "A program for viewing websites, such as Chrome, Edge, Firefox, or Safari. It reads HTML, CSS, and JavaScript and shows you the page.",
          "The programming language that makes web pages interactive: buttons, forms, and changing content.",
          "HyperText Markup Language — the language that gives a web page its structure and content."
        ],
        "answer": 2,
        "explanation": "Correct: (c). JavaScript: The programming language that makes web pages interactive: buttons, forms, and changing content. (a) describes Browser, not JavaScript. (b) describes Hosting, not JavaScript. (d) describes HTML, not JavaScript."
      },
      {
        "module": 1,
        "q": "A student is asked to define “URL” on a test. Which answer is correct?",
        "choices": [
          "The system of web pages and links that runs on top of the internet.",
          "A web address, such as https://example.com/about, that tells the browser exactly which page to fetch.",
          "The secure version of HTTP: the connection is scrambled so others cannot read what you send.",
          "The readable name of a website, such as example.com."
        ],
        "answer": 1,
        "explanation": "Correct: (b). URL means: A web address, such as https://example.com/about, that tells the browser exactly which page to fetch. (a) is the definition of Domain name, not of URL. (c) is the definition of World Wide Web, not of URL. (d) is the definition of HTTPS, not of URL."
      },
      {
        "module": 2,
        "q": "During a review, a classmate describes something as: “A piece of a web page, made of an opening tag, some content, and a closing tag: <p>Hello</p>.” Which term are they describing?",
        "choices": [
          "Comment",
          "HTML",
          "title",
          "Element"
        ],
        "answer": 3,
        "explanation": "Correct: (d). That description is Element: A piece of a web page, made of an opening tag, some content, and a closing tag: <p>Hello</p>. (a) Comment means A note in HTML, written <!-- like this -->, that the browser ignores and humans read. (b) HTML means HyperText Markup Language — the language that gives a web page its structure and content. (c) title means The text in the browser tab for a page, set with the <title> element inside the head."
      },
      {
        "module": 2,
        "q": "Which of the following is TRUE about Closing tag?",
        "choices": [
          "The tag that ends an element, such as </p>. It has a forward slash after the < .",
          "A note in HTML, written <!-- like this -->, that the browser ignores and humans read.",
          "HyperText Markup Language — the language that gives a web page its structure and content.",
          "A title on a page, from <h1> (biggest) to <h6> (smallest)."
        ],
        "answer": 0,
        "explanation": "Correct: (a). Closing tag: The tag that ends an element, such as </p>. It has a forward slash after the < . (b) describes Heading, not Closing tag. (c) describes Comment, not Closing tag. (d) describes HTML, not Closing tag."
      },
      {
        "module": 2,
        "q": "A student is asked to define “DOCTYPE” on a test. Which answer is correct?",
        "choices": [
          "The first line of an HTML document, <!DOCTYPE html>, which tells the browser this is a modern HTML page.",
          "The text in the browser tab for a page, set with the <title> element inside the head.",
          "Visual Studio Code — a free editor for writing HTML, CSS, and JavaScript.",
          "The tag that starts an element, such as <p>."
        ],
        "answer": 0,
        "explanation": "Correct: (a). DOCTYPE means: The first line of an HTML document, <!DOCTYPE html>, which tells the browser this is a modern HTML page. (b) is the definition of Opening tag, not of DOCTYPE. (c) is the definition of title, not of DOCTYPE. (d) is the definition of VS Code, not of DOCTYPE."
      },
      {
        "module": 2,
        "q": "During a review, a classmate describes something as: “The text in the browser tab for a page, set with the <title> element inside the head.” Which term are they describing?",
        "choices": [
          "Whitespace",
          "title",
          "Closing tag",
          "Attribute"
        ],
        "answer": 1,
        "explanation": "Correct: (b). That description is title: The text in the browser tab for a page, set with the <title> element inside the head. (a) Whitespace means Spaces, tabs, and new lines in your code. Browsers collapse extra whitespace in what they show. (c) Closing tag means The tag that ends an element, such as </p>. It has a forward slash after the < . (d) Attribute means Extra information inside an opening tag, such as href in <a href=\"...\">."
      },
      {
        "module": 3,
        "q": "Which of the following is TRUE about Image?",
        "choices": [
          "A tag that says what something is, not just how it looks: header, nav, main, section, article, footer.",
          "A picture on a page, added with <img> and the src attribute.",
          "The top part of a page or section, usually holding the title and navigation.",
          "The navigation area of a page, holding the links to the other pages."
        ],
        "answer": 1,
        "explanation": "Correct: (b). Image: A picture on a page, added with <img> and the src attribute. (a) describes header, not Image. (c) describes Semantic tag, not Image. (d) describes nav, not Image."
      },
      {
        "module": 3,
        "q": "A student is asked to define “Semantic tag” on a test. Which answer is correct?",
        "choices": [
          "A tag that says what something is, not just how it looks: header, nav, main, section, article, footer.",
          "A clickable piece of text or a picture that takes you to another page, made with <a> and href.",
          "A picture on a page, added with <img> and the src attribute.",
          "The top part of a page or section, usually holding the title and navigation."
        ],
        "answer": 0,
        "explanation": "Correct: (a). Semantic tag means: A tag that says what something is, not just how it looks: header, nav, main, section, article, footer. (b) is the definition of header, not of Semantic tag. (c) is the definition of Image, not of Semantic tag. (d) is the definition of Link, not of Semantic tag."
      },
      {
        "module": 3,
        "q": "During a review, a classmate describes something as: “The main content of a page — the part that is not the header, navigation, or footer.” Which term are they describing?",
        "choices": [
          "Semantic tag",
          "List",
          "main",
          "Unordered list"
        ],
        "answer": 2,
        "explanation": "Correct: (c). That description is main: The main content of a page — the part that is not the header, navigation, or footer. (a) List means A group of related items on a page, marked with <ul>, <ol>, or <li>. (b) Unordered list means A bulleted list, marked with <ul>, for items with no set order. (d) Semantic tag means A tag that says what something is, not just how it looks: header, nav, main, section, article, footer."
      },
      {
        "module": 3,
        "q": "Which of the following is TRUE about List?",
        "choices": [
          "The main content of a page — the part that is not the header, navigation, or footer.",
          "A numbered list, marked with <ol>, for steps or items in order.",
          "One item in a list, marked with <li>.",
          "A group of related items on a page, marked with <ul>, <ol>, or <li>."
        ],
        "answer": 3,
        "explanation": "Correct: (d). List: A group of related items on a page, marked with <ul>, <ol>, or <li>. (a) describes List item, not List. (b) describes main, not List. (c) describes Ordered list, not List."
      },
      {
        "module": 4,
        "q": "A student is asked to define “JPEG” on a test. Which answer is correct?",
        "choices": [
          "A link starting with mailto: that opens the visitor's email program, such as mailto:hello@example.com.",
          "A heading cell in a table, marked with <th>, usually bold and centred.",
          "A link using a full web address, such as https://example.com.",
          "A common image format for photos, with small file sizes."
        ],
        "answer": 3,
        "explanation": "Correct: (d). JPEG means: A common image format for photos, with small file sizes. (a) is the definition of Email link, not of JPEG. (b) is the definition of Absolute link, not of JPEG. (c) is the definition of Table heading, not of JPEG."
      },
      {
        "module": 4,
        "q": "During a review, a classmate describes something as: “The target attribute on a link: target=\"_blank\" opens the link in a new tab.” Which term are they describing?",
        "choices": [
          "Image file",
          "Target",
          "Broken image",
          "JPEG"
        ],
        "answer": 1,
        "explanation": "Correct: (b). That description is Target: The target attribute on a link: target=\"_blank\" opens the link in a new tab. (a) JPEG means A common image format for photos, with small file sizes. (c) Image file means A picture file, such as cat.jpg or logo.png, shown with the <img> element. (d) Broken image means An image that does not load, usually because the file path is wrong."
      },
      {
        "module": 4,
        "q": "Which of the following is TRUE about Anchor?",
        "choices": [
          "A heading cell in a table, marked with <th>, usually bold and centred.",
          "A link to a page on your own site using its file name, such as about.html.",
          "An image format for graphics and logos, which supports transparency.",
          "The <a> element, which makes a link. Its href attribute holds the address."
        ],
        "answer": 3,
        "explanation": "Correct: (d). Anchor: The <a> element, which makes a link. Its href attribute holds the address. (a) describes Table heading, not Anchor. (b) describes Relative link, not Anchor. (c) describes PNG, not Anchor."
      },
      {
        "module": 4,
        "q": "A student is asked to define “File path” on a test. Which answer is correct?",
        "choices": [
          "A heading cell in a table, marked with <th>, usually bold and centred.",
          "A common image format for photos, with small file sizes.",
          "One row in a table, marked with <tr>.",
          "The location of a file, such as images/cat.jpg, relative to the page that uses it."
        ],
        "answer": 3,
        "explanation": "Correct: (d). File path means: The location of a file, such as images/cat.jpg, relative to the page that uses it. (a) is the definition of Table row, not of File path. (b) is the definition of Table heading, not of File path. (c) is the definition of JPEG, not of File path."
      },
      {
        "module": 5,
        "q": "During a review, a classmate describes something as: “One CSS instruction: a selector plus a block of declarations, such as h1 { color: darkblue; }.” Which term are they describing?",
        "choices": [
          "Value",
          "External stylesheet",
          "Rule",
          "Comment"
        ],
        "answer": 2,
        "explanation": "Correct: (c). That description is Rule: One CSS instruction: a selector plus a block of declarations, such as h1 { color: darkblue; }. (a) External stylesheet means A separate .css file linked to a page with <link>, so many pages can share the same styles. (b) Value means What a property is set to, such as darkblue or 32px. (d) Comment means A note in CSS, written /* like this */, that the browser ignores and humans read."
      },
      {
        "module": 5,
        "q": "Which of the following is TRUE about Value?",
        "choices": [
          "What a property is set to, such as darkblue or 32px.",
          "A note in CSS, written /* like this */, that the browser ignores and humans read.",
          "CSS written directly on one element with the style attribute. Useful rarely; hard to maintain.",
          "The part of a CSS rule that says which elements it styles, such as h1 or .card."
        ],
        "answer": 0,
        "explanation": "Correct: (a). Value: What a property is set to, such as darkblue or 32px. (b) describes Inline CSS, not Value. (c) describes Comment, not Value. (d) describes Selector, not Value."
      },
      {
        "module": 5,
        "q": "A student is asked to define “Font” on a test. Which answer is correct?",
        "choices": [
          "The typeface of text, set with font-family, such as Arial or Georgia.",
          "CSS written inside a <style> element in the page's head.",
          "One CSS instruction: a selector plus a block of declarations, such as h1 { color: darkblue; }.",
          "The size of text, set with font-size, usually in pixels (px)."
        ],
        "answer": 0,
        "explanation": "Correct: (a). Font means: The typeface of text, set with font-family, such as Arial or Georgia. (b) is the definition of Internal CSS, not of Font. (c) is the definition of Font size, not of Font. (d) is the definition of Rule, not of Font."
      },
      {
        "module": 5,
        "q": "During a review, a classmate describes something as: “CSS written inside a <style> element in the page's head.” Which term are they describing?",
        "choices": [
          "Colour",
          "Internal CSS",
          "Property",
          "Inline CSS"
        ],
        "answer": 1,
        "explanation": "Correct: (b). That description is Internal CSS: CSS written inside a <style> element in the page's head. (a) Property means What a CSS rule changes, such as color or font-size. (c) Inline CSS means CSS written directly on one element with the style attribute. Useful rarely; hard to maintain. (d) Colour means In CSS, colours can be named (darkblue), hex codes (#14365e), or rgb values (rgb(20, 54, 94))."
      },
      {
        "module": 6,
        "q": "Which of the following is TRUE about ID?",
        "choices": [
          "A unique label you put on one element with id=\"main\" so CSS can target it with #main. Each id may be used once per page.",
          "An element that sits inside a line of text and only takes as much width as it needs, such as a link or <strong>.",
          "The space between the content and the border, inside the box.",
          "A selector for an element in a particular state, such as a:hover for a link the mouse is over."
        ],
        "answer": 0,
        "explanation": "Correct: (a). ID: A unique label you put on one element with id=\"main\" so CSS can target it with #main. Each id may be used once per page. (b) describes Inline element, not ID. (c) describes Padding, not ID. (d) describes Pseudo-class, not ID."
      },
      {
        "module": 6,
        "q": "A student is asked to define “hover” on a test. Which answer is correct?",
        "choices": [
          "The space between the content and the border, inside the box.",
          "The state of an element when the mouse pointer is over it.",
          "How CSS sees every element: a box made of content, padding, border, and margin, from the inside out.",
          "The colour behind an element's content, set with background-color."
        ],
        "answer": 1,
        "explanation": "Correct: (b). hover means: The state of an element when the mouse pointer is over it. (a) is the definition of Padding, not of hover. (c) is the definition of Box model, not of hover. (d) is the definition of Background colour, not of hover."
      },
      {
        "module": 6,
        "q": "During a review, a classmate describes something as: “The width of an element's content box, set with the width property.” Which term are they describing?",
        "choices": [
          "Border",
          "Inline element",
          "Width",
          "Block element"
        ],
        "answer": 2,
        "explanation": "Correct: (c). That description is Width: The width of an element's content box, set with the width property. (a) Border means The line around the padding and content. (b) Inline element means An element that sits inside a line of text and only takes as much width as it needs, such as a link or <strong>. (d) Block element means An element that takes the full width available and starts on a new line, such as a paragraph or a heading."
      },
      {
        "module": 6,
        "q": "Jordan styles a button and finds it is wider on the page than he expected. He remembers that in CSS every element is a box, and the space inside the border and the space outside it both add to the size he sees. Which idea explains this?",
        "choices": [
          "The box model: how CSS sees every element, a box made of content, padding, border, and margin, from the inside out.",
          "A class, which lets several elements share the same style.",
          "A hover state, which changes how an element looks while the mouse is over it.",
          "An id, which gives one single element a unique label."
        ],
        "answer": 0,
        "explanation": "Correct: (a). The box model explains it: CSS sees every element as a box made of content, padding, border, and margin, from the inside out, so padding and margin add to the space the button takes up. (b) is wrong: a class only groups elements so they can share a style; it says nothing about size. (c) is wrong: a hover state only describes how an element looks while the mouse is over it. (d) is wrong: an id is just a unique label for targeting one element."
      },
      {
        "module": 6,
        "q": "A designer wants a navigation link to turn blue and underline itself only while the visitor's mouse pointer is resting on it, then return to normal when the mouse moves away. Which CSS idea should she use?",
        "choices": [
          "The active state, which applies while the link is being clicked, not while the mouse rests on it.",
          "A class, which would style the link the same way all of the time.",
          "The hover state: the state of an element when the mouse pointer is over it.",
          "The box model, which describes the element's padding, border, and margin."
        ],
        "answer": 2,
        "explanation": "Correct: (c). She should use the hover state: the state of an element when the mouse pointer is over it, so the style applies only while the mouse rests on the link. (a) is wrong: the active state applies while the link is being clicked, which is a different moment. (b) is wrong: a class styles the element all the time, not only while the mouse is over it. (d) is wrong: the box model describes the element's size and spacing, not how it reacts to the mouse."
      }
    ]
  },
  "final": {
    "title": "Final Exam",
    "minutes": 120,
    "coverage": "Modules 1–12",
    "questions": [
      {
        "module": 1,
        "q": "A student is asked to define “HTTPS” on a test. Which answer is correct?",
        "choices": [
          "Cascading Style Sheets — the language that styles a web page: colours, fonts, spacing, and layout.",
          "A powerful computer, always on, that stores websites and sends them to your browser when you ask.",
          "The programming language that makes web pages interactive: buttons, forms, and changing content.",
          "The secure version of HTTP: the connection is scrambled so others cannot read what you send."
        ],
        "answer": 3,
        "explanation": "Correct: (d). HTTPS means: The secure version of HTTP: the connection is scrambled so others cannot read what you send. (a) is the definition of Server, not of HTTPS. (b) is the definition of JavaScript, not of HTTPS. (c) is the definition of CSS, not of HTTPS."
      },
      {
        "module": 1,
        "q": "During a review, a classmate describes something as: “A collection of web pages under one name, stored on a server.” Which term are they describing?",
        "choices": [
          "Server",
          "Website",
          "CSS",
          "HTML"
        ],
        "answer": 1,
        "explanation": "Correct: (b). That description is Website: A collection of web pages under one name, stored on a server. (a) Server means A powerful computer, always on, that stores websites and sends them to your browser when you ask. (c) CSS means Cascading Style Sheets — the language that styles a web page: colours, fonts, spacing, and layout. (d) HTML means HyperText Markup Language — the language that gives a web page its structure and content."
      },
      {
        "module": 1,
        "q": "Which of the following is TRUE about Hosting?",
        "choices": [
          "The part of a website that runs on the server: databases and server programs the visitor never sees.",
          "The programming language that makes web pages interactive: buttons, forms, and changing content.",
          "A web address, such as https://example.com/about, that tells the browser exactly which page to fetch.",
          "Paying a company to keep your website on its servers so anyone can visit it."
        ],
        "answer": 3,
        "explanation": "Correct: (d). Hosting: Paying a company to keep your website on its servers so anyone can visit it. (a) describes Back end, not Hosting. (b) describes JavaScript, not Hosting. (c) describes URL, not Hosting."
      },
      {
        "module": 2,
        "q": "During a review, a classmate describes something as: “A note in HTML, written <!-- like this -->, that the browser ignores and humans read.” Which term are they describing?",
        "choices": [
          "head",
          "Comment",
          "HTML",
          "Closing tag"
        ],
        "answer": 1,
        "explanation": "Correct: (b). That description is Comment: A note in HTML, written <!-- like this -->, that the browser ignores and humans read. (a) HTML means HyperText Markup Language — the language that gives a web page its structure and content. (c) Closing tag means The tag that ends an element, such as </p>. It has a forward slash after the < . (d) head means The part of an HTML document that holds information about the page, such as its title, that visitors do not see on the page itself."
      },
      {
        "module": 2,
        "q": "Which of the following is TRUE about HTML?",
        "choices": [
          "HyperText Markup Language — the language that gives a web page its structure and content.",
          "A marker in angle brackets that tells the browser what something is, such as <h1> or <p>.",
          "A note in HTML, written <!-- like this -->, that the browser ignores and humans read.",
          "Extra information inside an opening tag, such as href in <a href=\"...\">."
        ],
        "answer": 0,
        "explanation": "Correct: (a). HTML: HyperText Markup Language — the language that gives a web page its structure and content. (b) describes Attribute, not HTML. (c) describes Comment, not HTML. (d) describes Tag, not HTML."
      },
      {
        "module": 2,
        "q": "A student is asked to define “Opening tag” on a test. Which answer is correct?",
        "choices": [
          "The tag that starts an element, such as <p>.",
          "The part of an HTML document that holds information about the page, such as its title, that visitors do not see on the page itself.",
          "The part of an HTML document that holds everything visitors see on the page.",
          "The first line of an HTML document, <!DOCTYPE html>, which tells the browser this is a modern HTML page."
        ],
        "answer": 0,
        "explanation": "Correct: (a). Opening tag means: The tag that starts an element, such as <p>. (b) is the definition of DOCTYPE, not of Opening tag. (c) is the definition of head, not of Opening tag. (d) is the definition of body, not of Opening tag."
      },
      {
        "module": 3,
        "q": "Which of the following is TRUE about Ordered list?",
        "choices": [
          "A group of related items on a page, marked with <ul>, <ol>, or <li>.",
          "The alt attribute on an image: words describing the picture, read by screen readers and shown if the image cannot load.",
          "The attribute on an image that holds the file it shows, such as src=\"cat.jpg\".",
          "A numbered list, marked with <ol>, for steps or items in order."
        ],
        "answer": 3,
        "explanation": "Correct: (d). Ordered list: A numbered list, marked with <ol>, for steps or items in order. (a) describes alt text, not Ordered list. (b) describes List, not Ordered list. (c) describes src, not Ordered list."
      },
      {
        "module": 3,
        "q": "A student is asked to define “href” on a test. Which answer is correct?",
        "choices": [
          "The attribute on an image that holds the file it shows, such as src=\"cat.jpg\".",
          "A tag that says what something is, not just how it looks: header, nav, main, section, article, footer.",
          "A picture on a page, added with <img> and the src attribute.",
          "The attribute on a link that holds the address it goes to, such as href=\"about.html\"."
        ],
        "answer": 3,
        "explanation": "Correct: (d). href means: The attribute on a link that holds the address it goes to, such as href=\"about.html\". (a) is the definition of src, not of href. (b) is the definition of Image, not of href. (c) is the definition of Semantic tag, not of href."
      },
      {
        "module": 3,
        "q": "During a review, a classmate describes something as: “The alt attribute on an image: words describing the picture, read by screen readers and shown if the image cannot load.” Which term are they describing?",
        "choices": [
          "footer",
          "alt text",
          "Link",
          "Ordered list"
        ],
        "answer": 1,
        "explanation": "Correct: (b). That description is alt text: The alt attribute on an image: words describing the picture, read by screen readers and shown if the image cannot load. (a) Link means A clickable piece of text or a picture that takes you to another page, made with <a> and href. (c) footer means The bottom part of a page, usually holding contact details and copyright. (d) Ordered list means A numbered list, marked with <ol>, for steps or items in order."
      },
      {
        "module": 4,
        "q": "A student is asked to define “Table row” on a test. Which answer is correct?",
        "choices": [
          "One cell in a table, marked with <td>.",
          "A picture file, such as cat.jpg or logo.png, shown with the <img> element.",
          "A link to a page on your own site using its file name, such as about.html.",
          "One row in a table, marked with <tr>."
        ],
        "answer": 3,
        "explanation": "Correct: (d). Table row means: One row in a table, marked with <tr>. (a) is the definition of Image file, not of Table row. (b) is the definition of Table cell, not of Table row. (c) is the definition of Relative link, not of Table row."
      },
      {
        "module": 4,
        "q": "During a review, a classmate describes something as: “A title for a table, marked with <caption>.” Which term are they describing?",
        "choices": [
          "Absolute link",
          "Anchor",
          "Caption",
          "Target"
        ],
        "answer": 2,
        "explanation": "Correct: (c). That description is Caption: A title for a table, marked with <caption>. (a) Target means The target attribute on a link: target=\"_blank\" opens the link in a new tab. (b) Anchor means The <a> element, which makes a link. Its href attribute holds the address. (d) Absolute link means A link using a full web address, such as https://example.com."
      },
      {
        "module": 4,
        "q": "Which of the following is TRUE about Broken image?",
        "choices": [
          "An image that does not load, usually because the file path is wrong.",
          "The <a> element, which makes a link. Its href attribute holds the address.",
          "The target attribute on a link: target=\"_blank\" opens the link in a new tab.",
          "A grid of rows and columns for showing data, built with <table>, <tr>, <th>, and <td>."
        ],
        "answer": 0,
        "explanation": "Correct: (a). Broken image: An image that does not load, usually because the file path is wrong. (b) describes Anchor, not Broken image. (c) describes Table, not Broken image. (d) describes Target, not Broken image."
      },
      {
        "module": 5,
        "q": "During a review, a classmate describes something as: “The rules CSS uses to decide which style wins when several rules target the same element.” Which term are they describing?",
        "choices": [
          "Cascade",
          "Stylesheet",
          "Font",
          "Selector"
        ],
        "answer": 0,
        "explanation": "Correct: (a). That description is Cascade: The rules CSS uses to decide which style wins when several rules target the same element. (b) Font means The typeface of text, set with font-family, such as Arial or Georgia. (c) Stylesheet means A file, or a block of code, that holds CSS rules. (d) Selector means The part of a CSS rule that says which elements it styles, such as h1 or .card."
      },
      {
        "module": 5,
        "q": "Which of the following is TRUE about CSS?",
        "choices": [
          "A separate .css file linked to a page with <link>, so many pages can share the same styles.",
          "One CSS instruction: a selector plus a block of declarations, such as h1 { color: darkblue; }.",
          "Cascading Style Sheets — the language that styles a web page: colours, fonts, spacing, and layout.",
          "One property-value pair inside a rule, such as color: darkblue;."
        ],
        "answer": 2,
        "explanation": "Correct: (c). CSS: Cascading Style Sheets — the language that styles a web page: colours, fonts, spacing, and layout. (a) describes Declaration, not CSS. (b) describes External stylesheet, not CSS. (d) describes Rule, not CSS."
      },
      {
        "module": 5,
        "q": "A student is asked to define “Property” on a test. Which answer is correct?",
        "choices": [
          "What a CSS rule changes, such as color or font-size.",
          "A separate .css file linked to a page with <link>, so many pages can share the same styles.",
          "CSS written inside a <style> element in the page's head.",
          "The part of a CSS rule that says which elements it styles, such as h1 or .card."
        ],
        "answer": 0,
        "explanation": "Correct: (a). Property means: What a CSS rule changes, such as color or font-size. (b) is the definition of External stylesheet, not of Property. (c) is the definition of Selector, not of Property. (d) is the definition of Internal CSS, not of Property."
      },
      {
        "module": 6,
        "q": "Which of the following is TRUE about Padding?",
        "choices": [
          "The state of an element when the mouse pointer is over it.",
          "A label you put on elements with class=\"card\" so CSS can target them with .card.",
          "The space between the content and the border, inside the box.",
          "The space outside the border, between this box and the next one."
        ],
        "answer": 2,
        "explanation": "Correct: (c). Padding: The space between the content and the border, inside the box. (a) describes hover, not Padding. (b) describes Margin, not Padding. (d) describes Class, not Padding."
      },
      {
        "module": 6,
        "q": "A student is asked to define “Class” on a test. Which answer is correct?",
        "choices": [
          "Rounded corners on a box, set with border-radius.",
          "A label you put on elements with class=\"card\" so CSS can target them with .card.",
          "The state of an element when the mouse pointer is over it.",
          "How CSS sees every element: a box made of content, padding, border, and margin, from the inside out."
        ],
        "answer": 1,
        "explanation": "Correct: (b). Class means: A label you put on elements with class=\"card\" so CSS can target them with .card. (a) is the definition of Border radius, not of Class. (c) is the definition of hover, not of Class. (d) is the definition of Box model, not of Class."
      },
      {
        "module": 6,
        "q": "During a review, a classmate describes something as: “A selector for an element in a particular state, such as a:hover for a link the mouse is over.” Which term are they describing?",
        "choices": [
          "Pseudo-class",
          "Padding",
          "Background colour",
          "Width"
        ],
        "answer": 0,
        "explanation": "Correct: (a). That description is Pseudo-class: A selector for an element in a particular state, such as a:hover for a link the mouse is over. (b) Width means The width of an element's content box, set with the width property. (c) Padding means The space between the content and the border, inside the box. (d) Background colour means The colour behind an element's content, set with background-color."
      },
      {
        "module": 7,
        "q": "A student is asked to define “flex-wrap” on a test. Which answer is correct?",
        "choices": [
          "The element with display: flex on it. Its direct children become flex items.",
          "How much an item grows to fill extra space, relative to the other items.",
          "A CSS layout system for arranging items in a row or a column, with easy control of spacing and alignment.",
          "Whether items wrap onto a new line when they run out of room (wrap) or squeeze onto one line (nowrap)."
        ],
        "answer": 3,
        "explanation": "Correct: (d). flex-wrap means: Whether items wrap onto a new line when they run out of room (wrap) or squeeze onto one line (nowrap). (a) is the definition of Flex container, not of flex-wrap. (b) is the definition of Flexbox, not of flex-wrap. (c) is the definition of flex-grow, not of flex-wrap."
      },
      {
        "module": 7,
        "q": "During a review, a classmate describes something as: “The direction items flow in: horizontal for a row, vertical for a column.” Which term are they describing?",
        "choices": [
          "Responsive",
          "Flex container",
          "gap",
          "Main axis"
        ],
        "answer": 3,
        "explanation": "Correct: (d). That description is Main axis: The direction items flow in: horizontal for a row, vertical for a column. (a) Flex container means The element with display: flex on it. Its direct children become flex items. (b) Responsive means A page that adapts to different screen sizes, from phones to desktops. (c) gap means The space between flex items, set with the gap property."
      },
      {
        "module": 7,
        "q": "Which of the following is TRUE about Card?",
        "choices": [
          "Whether items wrap onto a new line when they run out of room (wrap) or squeeze onto one line (nowrap).",
          "How much an item grows to fill extra space, relative to the other items.",
          "The CSS declaration that turns an element into a flex container.",
          "A box holding a picture, a heading, and some text — a common building block of web pages."
        ],
        "answer": 3,
        "explanation": "Correct: (d). Card: A box holding a picture, a heading, and some text — a common building block of web pages. (a) describes flex-grow, not Card. (b) describes flex-wrap, not Card. (c) describes display: flex, not Card."
      },
      {
        "module": 8,
        "q": "During a review, a classmate describes something as: “When a row of items becomes a column on a small screen, one item above the next.” Which term are they describing?",
        "choices": [
          "Device toolbar",
          "Fluid width",
          "Desktop-first",
          "Stack"
        ],
        "answer": 3,
        "explanation": "Correct: (d). That description is Stack: When a row of items becomes a column on a small screen, one item above the next. (a) Device toolbar means The browser tool (in developer tools) that shows your page at phone and tablet sizes. (b) Fluid width means A width in percentages rather than pixels, so an element grows and shrinks with its container. (c) Desktop-first means Designing for the big screen first, then adding rules for smaller screens. The opposite of mobile-first."
      },
      {
        "module": 8,
        "q": "Which of the following is TRUE about Responsive design?",
        "choices": [
          "The visible area of a web page in the browser. The viewport meta tag tells phones how wide the page is.",
          "Building a page so it adapts to different screen sizes, from phones to desktops.",
          "A CSS rule that applies only when the screen meets a condition, such as @media (max-width: 600px).",
          "A CSS unit based on the root font size; 1rem is usually 16 pixels."
        ],
        "answer": 1,
        "explanation": "Correct: (b). Responsive design: Building a page so it adapts to different screen sizes, from phones to desktops. (a) describes Media query, not Responsive design. (c) describes rem, not Responsive design. (d) describes Viewport, not Responsive design."
      },
      {
        "module": 8,
        "q": "A student is asked to define “Breakpoint” on a test. Which answer is correct?",
        "choices": [
          "When a page is wider than the screen and the visitor must scroll sideways — a sign the layout is broken on that screen.",
          "A CSS rule that applies only when the screen meets a condition, such as @media (max-width: 600px).",
          "A screen width where a layout changes, such as 600px for phones and 900px for tablets.",
          "A CSS unit based on the root font size; 1rem is usually 16 pixels."
        ],
        "answer": 2,
        "explanation": "Correct: (c). Breakpoint means: A screen width where a layout changes, such as 600px for phones and 900px for tablets. (a) is the definition of Media query, not of Breakpoint. (b) is the definition of rem, not of Breakpoint. (d) is the definition of Horizontal scroll, not of Breakpoint."
      },
      {
        "module": 9,
        "q": "Which of the following is TRUE about Label?",
        "choices": [
          "The attribute on a form that says where the data is sent.",
          "The button that sends a form: <button type=\"submit\">.",
          "A field for an email address: <input type=\"email\">. The browser checks it looks like an email.",
          "The text naming an input, marked with <label> and linked to the input with for and id."
        ],
        "answer": 3,
        "explanation": "Correct: (d). Label: The text naming an input, marked with <label> and linked to the input with for and id. (a) describes Email input, not Label. (b) describes action, not Label. (c) describes Submit button, not Label."
      },
      {
        "module": 9,
        "q": "A student is asked to define “Textarea” on a test. Which answer is correct?",
        "choices": [
          "The text naming an input, marked with <label> and linked to the input with for and id.",
          "An attribute that stops a form being submitted until the field is filled in.",
          "A small box the visitor ticks or unticks: <input type=\"checkbox\">. Several can be ticked at once.",
          "A multi-line field for longer text, such as a message: <textarea>."
        ],
        "answer": 3,
        "explanation": "Correct: (d). Textarea means: A multi-line field for longer text, such as a message: <textarea>. (a) is the definition of required, not of Textarea. (b) is the definition of Label, not of Textarea. (c) is the definition of Checkbox, not of Textarea."
      },
      {
        "module": 9,
        "q": "During a review, a classmate describes something as: “A list the visitor opens and picks one option from, built with <select> and <option>.” Which term are they describing?",
        "choices": [
          "Textarea",
          "Dropdown",
          "action",
          "Radio button"
        ],
        "answer": 1,
        "explanation": "Correct: (b). That description is Dropdown: A list the visitor opens and picks one option from, built with <select> and <option>. (a) Textarea means A multi-line field for longer text, such as a message: <textarea>. (c) action means The attribute on a form that says where the data is sent. (d) Radio button means A round button where the visitor picks exactly one option from a group: <input type=\"radio\">."
      },
      {
        "module": 10,
        "q": "A student is asked to define “Function” on a test. Which answer is correct?",
        "choices": [
          "A block of JavaScript code, in a <script> element or a separate .js file.",
          "The keyword for a JavaScript variable whose value cannot be reassigned.",
          "A named block of code that does one job, which you can run again and again by calling its name.",
          "A value that is either true or false in JavaScript (lowercase, unlike Python's True and False)."
        ],
        "answer": 2,
        "explanation": "Correct: (c). Function means: A named block of code that does one job, which you can run again and again by calling its name. (a) is the definition of Script, not of Function. (b) is the definition of const, not of Function. (d) is the definition of Boolean, not of Function."
      },
      {
        "module": 10,
        "q": "During a review, a classmate describes something as: “A symbol that does something to values, such as + for addition or === for strict comparison.” Which term are they describing?",
        "choices": [
          "Number",
          "Script",
          "Array",
          "Operator"
        ],
        "answer": 3,
        "explanation": "Correct: (d). That description is Operator: A symbol that does something to values, such as + for addition or === for strict comparison. (a) Array means JavaScript's ordered collection of values, written in square brackets, such as [\"apple\", \"banana\"]. (b) Number means A numeric value in JavaScript, such as 7 or 3.5. JavaScript has one number type for whole and decimal numbers. (c) Script means A block of JavaScript code, in a <script> element or a separate .js file."
      },
      {
        "module": 10,
        "q": "Which of the following is TRUE about Array?",
        "choices": [
          "Code that repeats a block of instructions, such as a for loop.",
          "A named block of code that does one job, which you can run again and again by calling its name.",
          "JavaScript's ordered collection of values, written in square brackets, such as [\"apple\", \"banana\"].",
          "A named box that holds a value, such as a name or a number, so a program can use it later."
        ],
        "answer": 2,
        "explanation": "Correct: (c). Array: JavaScript's ordered collection of values, written in square brackets, such as [\"apple\", \"banana\"]. (a) describes Function, not Array. (b) describes Loop, not Array. (d) describes Variable, not Array."
      },
      {
        "module": 11,
        "q": "During a review, a classmate describes something as: “A named block of code that does one job. Event listeners run a function when the event happens.” Which term are they describing?",
        "choices": [
          "classList",
          "DOM",
          "addEventListener()",
          "Function"
        ],
        "answer": 3,
        "explanation": "Correct: (d). That description is Function: A named block of code that does one job. Event listeners run a function when the event happens. (a) addEventListener() means The JavaScript function that attaches an event listener to an element. (b) classList means The way JavaScript adds or removes CSS classes on an element, such as box.classList.add(\"open\"). (c) DOM means The Document Object Model — the browser's live map of a page, as a tree of elements that JavaScript can read and change."
      },
      {
        "module": 11,
        "q": "Which of the following is TRUE about DOM?",
        "choices": [
          "Something that happens on a page, such as a click, a key press, or a form being submitted.",
          "The Document Object Model — the browser's live map of a page, as a tree of elements that JavaScript can read and change.",
          "The way JavaScript adds or removes CSS classes on an element, such as box.classList.add(\"open\").",
          "A JavaScript function that finds an element by its id, such as document.getElementById(\"myButton\")."
        ],
        "answer": 1,
        "explanation": "Correct: (b). DOM: The Document Object Model — the browser's live map of a page, as a tree of elements that JavaScript can read and change. (a) describes classList, not DOM. (c) describes getElementById(), not DOM. (d) describes Event, not DOM."
      },
      {
        "module": 11,
        "q": "A student is asked to define “getElementById()” on a test. Which answer is correct?",
        "choices": [
          "The text inside an element, which JavaScript can read and change.",
          "The Document Object Model — the browser's live map of a page, as a tree of elements that JavaScript can read and change.",
          "A JavaScript function that finds an element by its id, such as document.getElementById(\"myButton\").",
          "The event that happens when a visitor clicks something."
        ],
        "answer": 2,
        "explanation": "Correct: (c). getElementById() means: A JavaScript function that finds an element by its id, such as document.getElementById(\"myButton\"). (a) is the definition of DOM, not of getElementById(). (b) is the definition of textContent, not of getElementById(). (d) is the definition of click, not of getElementById()."
      },
      {
        "module": 12,
        "q": "Which of the following is TRUE about Navigation?",
        "choices": [
          "The main page of a website, usually index.html, that visitors land on first.",
          "The actual words, pictures, and information on a website.",
          "One .css file linked from every page, so the whole site looks consistent.",
          "The links that let visitors move between the pages of a site, usually in a nav element on every page."
        ],
        "answer": 3,
        "explanation": "Correct: (d). Navigation: The links that let visitors move between the pages of a site, usually in a nav element on every page. (a) describes Content, not Navigation. (b) describes Shared stylesheet, not Navigation. (c) describes Home page, not Navigation."
      },
      {
        "module": 12,
        "q": "A student is asked to define “Wireframe” on a test. Which answer is correct?",
        "choices": [
          "The links that let visitors move between the pages of a site, usually in a nav element on every page.",
          "A simple sketch of a page's layout, drawn before any code is written.",
          "The actual words, pictures, and information on a website.",
          "One .css file linked from every page, so the whole site looks consistent."
        ],
        "answer": 1,
        "explanation": "Correct: (b). Wireframe means: A simple sketch of a page's layout, drawn before any code is written. (a) is the definition of Shared stylesheet, not of Wireframe. (c) is the definition of Navigation, not of Wireframe. (d) is the definition of Content, not of Wireframe."
      },
      {
        "module": 12,
        "q": "During a review, a classmate describes something as: “Checking a website by clicking every link, trying every form, and viewing it at phone, tablet, and desktop widths.” Which term are they describing?",
        "choices": [
          "404",
          "Test",
          "Publish",
          "Hosting"
        ],
        "answer": 1,
        "explanation": "Correct: (b). That description is Test: Checking a website by clicking every link, trying every form, and viewing it at phone, tablet, and desktop widths. (a) Hosting means Paying a company to keep your website on its servers so anyone can visit it. (c) 404 means The error page shown when a link points to a page that does not exist. (d) Publish means Putting a website on a server so anyone on the internet can visit it."
      },
      {
        "module": 2,
        "q": "A student writes this HTML: <p>Hello — with no closing tag — and the next paragraph starts on the same page. What is most likely to happen?",
        "choices": [
          "The browser shows both paragraphs correctly",
          "The browser guesses where the first paragraph ends, and the page may look wrong",
          "The page will not load at all",
          "The text disappears completely"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A missing closing tag makes the browser guess where the element ends, and its guess is often wrong. (a) is wrong: the browser cannot know your intention. (c) is wrong: HTML is forgiving — the page still loads. (d) is wrong: the text usually still appears, just formatted wrongly."
      },
      {
        "module": 5,
        "q": "A student links a stylesheet with <link rel=\"stylesheet\" href=\"style.css\"> but no styles appear. The file is actually called styles.css. What is the problem?",
        "choices": [
          "The link element is in the wrong place",
          "The file name in the link does not match the real file name",
          "CSS does not work with HTML",
          "The browser needs to be restarted"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The link says style.css but the file is styles.css — one letter different, so the browser finds nothing. (a) is wrong: the link is in the head, which is correct. (c) is wrong: CSS and HTML are designed to work together. (d) is wrong: restarting the browser does not fix a wrong file name."
      },
      {
        "module": 10,
        "q": "A student writes this JavaScript: let age = 20; / if (age >= 18) { console.log(\"adult\"); } else { console.log(\"minor\"); } What does it print?",
        "choices": [
          "minor",
          "adult",
          "Nothing — it is an error",
          "20"
        ],
        "answer": 1,
        "explanation": "Correct: (b). age is 20, which is >= 18, so the condition is true and it prints \"adult\". (a) is wrong: that would need age below 18. (c) is wrong: the code is valid JavaScript. (d) is wrong: console.log prints the word, not the variable."
      },
      {
        "module": 11,
        "q": "A student's script runs, but document.querySelector(\"h1\") finds nothing and the heading never changes. The script is in the head of the page. What is the most likely cause?",
        "choices": [
          "The heading does not exist in the HTML",
          "The script runs before the page exists, so the heading is not there yet",
          "querySelector only works on buttons",
          "The browser does not support JavaScript"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A script in the head runs before the body is read, so the h1 does not exist yet when querySelector runs. (a) is wrong: the heading is in the body — it just has not been read yet. (c) is wrong: querySelector works on any element. (d) is wrong: every modern browser supports JavaScript."
      }
    ]
  }
};
