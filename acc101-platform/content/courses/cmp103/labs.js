// cmp103 — Scenario labs.
// Each row is checked on a single numeric input in column 1: an option number, a procedure step number, or a computed reading.
module.exports = [
  {
    "id": "build-a-page",
    "title": "Build a Page: Pick the Right Tag",
    "introHtml": "<p><strong>Scenario — a page for a village fete.</strong> You are building a web page for a village fete. You have the words and the pictures; your job is to choose the right HTML tag for each piece. Read the task, then answer each decision row.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before you publish or share a page: check every fact on it, and never put personal details (addresses, phone numbers, children's names) on a public page. This page is a practice page on your own computer, so no real personal details are involved — but build the habit now.</p><p><strong>The fete page needs:</strong> (1) A main title: “Village Fete 2026”. (2) A section heading: “Stalls”. (3) A paragraph describing the fete. (4) A bulleted list of stalls. (5) A photo of last year's fete, with a description for people who cannot see it. (6) A link to the contact page. For each row, enter the option number or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — Before you put a page on the public internet, what must you check? 1) That the colours are pretty 2) That every fact is correct and no personal details (addresses, phone numbers, children's names) are on it 3) That the page is as long as possible 4) That it has as many pictures as possible",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "page_safety",
            "expected": 2,
            "hint": "Step 0 governs: check facts and keep personal details off public pages. Pretty colours (1), length (3), and picture count (4) do not protect anyone."
          }
        ]
      },
      {
        "label": "DECISION — Which tag is right for the main title “Village Fete 2026”? 1) <p> 2) <h1> 3) <li> 4) <img>",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "page_h1",
            "expected": 2,
            "hint": "The main title of a page is an <h1> — one per page. <p> is a paragraph, <li> is a list item, and <img> is a picture."
          }
        ]
      },
      {
        "label": "DECISION — Which tag is right for the section heading “Stalls”? 1) <h1> 2) <h2> 3) <p> 4) <ul>",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "page_h2",
            "expected": 2,
            "hint": "A section heading under the main title is an <h2>. Using a second <h1> (1) breaks the outline, <p> (3) is a paragraph, and <ul> (4) is a list, not a heading."
          }
        ]
      },
      {
        "label": "DECISION — The stalls are: cakes, books, plants, and tombola. They have no set order. Which list is right? 1) <ol> — a numbered list 2) <ul> — a bulleted list 3) <table> 4) Four separate <h1> headings",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "page_list",
            "expected": 2,
            "hint": "Items with no set order use a bulleted list, <ul>. <ol> (1) is for steps in order, <table> (3) is for data in rows and columns, and four <h1>s (4) would break the page outline."
          }
        ]
      },
      {
        "label": "DECISION — Which is the correct way to add the photo of last year's fete? 1) <img src=\"fete.jpg\"> with no alt text 2) <img src=\"fete.jpg\" alt=\"Families at last year's village fete, with stalls and bunting\"> 3) <a href=\"fete.jpg\">fete</a> 4) <p>fete.jpg</p>",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "page_img",
            "expected": 2,
            "hint": "An image needs <img> with src and alt text describing the picture for people who cannot see it. Option (1) has no alt text, (3) makes a link instead of showing the picture, and (4) just prints the file name as text."
          }
        ]
      },
      {
        "label": "COMPUTED — The page has 1 <h1>, 1 <h2>, 2 paragraphs, 1 list with 4 items, 1 image, and 1 link. How many list items (<li>) are on the page? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "page_count",
            "expected": 4,
            "hint": "The list has four stalls — cakes, books, plants, and tombola — so there are four <li> items. The headings, paragraphs, image, and link are not list items."
          }
        ]
      }
    ]
  },
  {
    "id": "style-it-and-click-it",
    "title": "Style It and Click It: CSS Selectors and a JavaScript Button",
    "introHtml": "<p><strong>Scenario — a broken fete page.</strong> The village fete page is built, but its styling is wrong and its button does nothing. Your job: pick the right CSS selector for each job, and the right JavaScript to make the button work. Read the task, then answer each decision row.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before you change a page: make a copy of the working files first, so you can go back if a change breaks something. Never edit the only copy of a page you care about.</p><p><strong>The page has:</strong> a heading (h1), three cards with class=\"card\", a button with id=\"myButton\", and a paragraph with id=\"message\". The stylesheet is styles.css, linked from the page. The script is script.js, linked at the end of the body. For each row, enter the option number or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — Before you change the page's CSS and JavaScript, what do you do first? 1) Delete the old files so there is no confusion 2) Make a copy of the working files first, so you can go back if a change breaks something 3) Change everything at once and hope for the best 4) Edit the files on the live website directly",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "style_safety",
            "expected": 2,
            "hint": "Step 0 governs: copy the working files before changing them. Deleting the old files (1) destroys your way back, changing everything at once (3) makes bugs hard to find, and editing live (4) breaks the site for visitors while you work."
          }
        ]
      },
      {
        "label": "DECISION — Which CSS selector styles all three cards? 1) #card 2) .card 3) card 4) *card",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "style_class",
            "expected": 2,
            "hint": "Classes are styled with a dot: .card. #card (1) targets an id, which must be unique, so it would not cover three cards. card (3) would target a <card> element, which does not exist. *card (4) is not a valid selector."
          }
        ]
      },
      {
        "label": "DECISION — Which CSS rule gives the cards space inside the box, so the text does not touch the border? 1) margin: 16px; 2) padding: 16px; 3) border: 16px; 4) width: 16px;",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "style_padding",
            "expected": 2,
            "hint": "Padding is the space inside the box, between the content and the border. Margin (1) is space outside the box, border (3) is the line around it, and width (4) sets how wide the box is."
          }
        ]
      },
      {
        "label": "DECISION — Which JavaScript finds the button with id=\"myButton\"? 1) document.querySelector(\"myButton\") 2) document.querySelector(\"#myButton\") 3) document.querySelector(\".myButton\") 4) document.querySelector(\"<myButton>\")",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "style_query",
            "expected": 2,
            "hint": "An id is selected with a hash: #myButton. Without the hash (1) looks for a <myButton> element, .myButton (3) looks for a class, and angle brackets (4) are never used in a selector."
          }
        ]
      },
      {
        "label": "DECISION — Which JavaScript makes the button show a message when clicked? 1) button.addEventListener(\"click\", function () { alert(\"See you at the fete!\"); }); 2) button.click = \"See you at the fete!\"; 3) button.textContent = \"click\"; 4) document.querySelector(\"click\");",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "style_click",
            "expected": 1,
            "hint": "addEventListener(\"click\", ...) waits for a click and runs the function, which shows the message. Option (2) is not valid JavaScript, (3) only changes the button's text, and (4) tries to find an element called <click>, which does not exist."
          }
        ]
      },
      {
        "label": "COMPUTED — The page has 3 cards. Each card has 1 heading, 1 paragraph, and 1 image. How many images are on the page in total? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "style_count",
            "expected": 3,
            "hint": "Three cards, one image each: 3 x 1 = 3 images. The headings and paragraphs are not images."
          }
        ]
      }
    ]
  }
];
