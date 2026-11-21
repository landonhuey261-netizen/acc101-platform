// eng495 — Capstone drill labs. Original revision and MLA documentation drills.
module.exports = [
  {
    "id": "revision-workshop",
    "title": "Revision Workshop: Error-Spotting & Rewriting Decisions",
    "introHtml": "<p><strong>Job ticket — revision day.</strong> You are the editor of your own portfolio. Twelve decisions: spot the error, choose the fix, and rewrite the sentence. A revision that misses the error is a revision that ships it — and the portfolio is judged as finished work.</p>",
    "taskHtml": "<p><strong>Step 0 — Honesty first.</strong> Before any sentence: every borrowed idea needs a citation, and every quotation needs quotation marks. Using another writer's words or ideas without credit is plagiarism, and no revision can fix a dishonest paper. The first scored row is an honesty decision — get it right before anything else moves.</p><p>Enter the number of the correct option for each decision point.</p><p>Work each sentence on paper before entering it. A wrong fix here is a wrong sentence in the portfolio.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "passing": 70,
    "rows": [
      {
        "label": "HONESTY CALL — You paraphrased a source's idea in your research paper but did not cite it, because 'I put it in my own words.' Your call: 1) Leave it — paraphrases need no citation 2) Add the citation — a paraphrase is a borrowed idea and needs one 3) Delete the idea entirely 4) Change more words so it looks original",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "honesty_paraphrase",
            "expected": 2,
            "hint": "A paraphrase is a borrowed idea. Every idea that is not yours needs a citation — putting it in your own words does not make it yours."
          }
        ]
      },
      {
        "label": "FRAGMENT — 'While reading the proposal.' Your call: 1) Leave it — it is a complete sentence 2) Complete the thought: 'While reading the proposal, she took notes.' 3) Add a comma at the end 4) Capitalize 'reading'",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rev_fragment",
            "expected": 2,
            "hint": "A fragment stops before the thought is finished. Add the main clause: 'While reading the proposal, she took notes.'"
          }
        ]
      },
      {
        "label": "RUN-ON — 'The library opens at nine it closes at six.' Your call: 1) Add a comma: 'The library opens at nine, it closes at six.' 2) Split into two sentences: 'The library opens at nine. It closes at six.' 3) Add a comma after 'opens' 4) Leave it — it is correct",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rev_runon",
            "expected": 2,
            "hint": "Two complete thoughts need a period, or a comma plus a conjunction. A comma alone makes a splice, not a fix."
          }
        ]
      },
      {
        "label": "COMMA SPLICE — 'The budget passed, the hours were extended.' Your call: 1) Leave it 2) Add 'and': 'The budget passed, and the hours were extended.' 3) Remove the comma 4) Add a comma after 'passed'",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rev_splice",
            "expected": 2,
            "hint": "A comma alone cannot join two sentences. Add the conjunction 'and' — or split the sentence with a period."
          }
        ]
      },
      {
        "label": "AGREEMENT — 'The list of sources, along with the outline, are due Friday.' Your call: 1) Leave it — 'are' agrees with 'sources' 2) Change to 'is': 'The list of sources, along with the outline, is due Friday.' 3) Change 'list' to 'lists' 4) Remove 'along with the outline'",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rev_agreement",
            "expected": 2,
            "hint": "The verb agrees with the true subject — 'list,' not 'sources.' The phrase 'along with the outline' does not change the subject."
          }
        ]
      },
      {
        "label": "PRONOUN — 'When Maria met the librarian, she thanked her.' Your call: 1) Leave it — the reader can tell who thanked whom 2) Name the person: 'Maria thanked the librarian.' 3) Change 'she' to 'they' 4) Remove the second clause",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rev_pronoun",
            "expected": 2,
            "hint": "A pronoun must point to one clear noun. 'She' could be Maria or the librarian — name the person."
          }
        ]
      },
      {
        "label": "APOSTROPHE — 'The library's in the 1990's were quiet.' Your call: 1) Leave it 2) Fix both: 'The libraries in the 1990s were quiet.' 3) Fix only '1990's' to '1990s' 4) Fix only 'library's' to 'librarys'",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rev_apostrophe",
            "expected": 2,
            "hint": "An apostrophe never marks a plural. 'Libraries' is the plural, and decades take no apostrophe: '1990s.'"
          }
        ]
      },
      {
        "label": "THESIS — An essay argues that Sunday hours help working students, but its thesis says 'Libraries are important.' Your call: 1) Leave it — the thesis is fine 2) Rewrite the thesis to match the body: 'Public libraries should stay open on Sundays because they are the only free study space for working students.' 3) Delete the body paragraphs 4) Add more paragraphs about libraries in general",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rev_thesis",
            "expected": 2,
            "hint": "The thesis must match the body. 'Libraries are important' is a slogan, not the claim the essay actually argues."
          }
        ]
      },
      {
        "label": "DROPPED QUOTATION — 'The library matters. \"The library is a lighthouse.\" The end.' Your call: 1) Leave it — the quotation speaks for itself 2) Introduce, quote, and explain: 'When the narrator first sees the library, she calls it \"a lighthouse\" (12), and the image makes the library a guide for the lost.' 3) Remove the quotation marks 4) Make the quotation longer",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rev_quotation",
            "expected": 2,
            "hint": "A quotation needs an introduction, the exact words, and an explanation of what it proves. Without them it is dropped."
          }
        ]
      },
      {
        "label": "TRANSITION — One paragraph ends with the cost of Sunday hours; the next begins with who benefits. Your call: 1) Start the next paragraph with 'However.' 2) Write a sentence that looks back and forward: 'Sunday hours cost the city $40,000 a year — but that cost buys the only free study space for the working students who need it most.' 3) Repeat the thesis 4) Leave the paragraphs unconnected",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rev_transition",
            "expected": 2,
            "hint": "The strongest transitions are sentences that name the old idea and the new one. A single word like 'however' does not do this work."
          }
        ]
      },
      {
        "label": "CONCLUSION — 'In conclusion, libraries are important and should stay open on Sundays.' Your call: 1) Leave it — it summarizes the essay 2) Rewrite it to answer 'so what?': 'If the city closes the library on Sundays, it closes the only free study space for the students who work weekdays.' 3) Delete the conclusion 4) Repeat the introduction",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rev_conclusion",
            "expected": 2,
            "hint": "A conclusion answers 'so what?' — why the argument matters — not 'what did I say?' The reader already knows what you argued."
          }
        ]
      },
      {
        "label": "PLAIN LANGUAGE — 'The library will implement an expansion of its operational hours in order to facilitate enhanced access for the student population.' Your call: 1) Leave it — it sounds professional 2) Rewrite it plainly: 'The library will extend its hours so students can use it more.' 3) Add more formal words 4) Make it longer",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rev_plain",
            "expected": 2,
            "hint": "Plain language is short sentences, strong verbs, and no jargon. 'Implement an expansion of operational hours' is jargon for 'extend its hours.'"
          }
        ]
      }
    ]
  },
  {
    "id": "mla-documentation-drills",
    "title": "MLA Documentation Drills: Citations & Works Cited",
    "introHtml": "<p><strong>Job ticket — documentation day.</strong> You are finishing the capstone paper's citations. Twelve decisions: in-text citations, Works Cited entries, and the format rules that show your work. A paper that cannot cite its sources correctly gives the reader reason to doubt everything else in it.</p>",
    "taskHtml": "<p><strong>Step 0 — Honesty first.</strong> Before any citation: every idea that is not yours needs one, in the text and in the Works Cited list. A Works Cited page with no in-text citations is a map with no roads — the reader cannot find where any idea came from. The first scored row is an honesty decision — get it right before anything else moves.</p><p>Enter the number of the correct option for each decision point.</p><p>Work each citation on paper before entering it. A wrong citation here is a wrong citation in the paper.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "passing": 70,
    "rows": [
      {
        "label": "HONESTY CALL — Your paper has a Works Cited page with five sources, but no in-text citations at all. Your call: 1) Leave it — the Works Cited page is enough 2) Add a parenthetical citation after every borrowed idea, pointing to the Works Cited entry 3) Delete the Works Cited page 4) Add citations only for quotations, not for paraphrases",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "honesty_citations",
            "expected": 2,
            "hint": "Every borrowed idea needs a citation in the text, not just in the list. A Works Cited page with no in-text citations is a map with no roads."
          }
        ]
      },
      {
        "label": "IN-TEXT — You are citing page 42 of a book by Smith. Your call: 1) (Smith, 2020, p. 42) 2) (Smith 42) 3) [Smith, page 42] 4) (Smith, page 42)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mla_intext",
            "expected": 2,
            "hint": "MLA uses the author's last name and the page number — (Smith 42). No comma, no 'p.', no year."
          }
        ]
      },
      {
        "label": "IN-TEXT WITH NAME — The sentence already names Smith. Your call: 1) 'Smith argues that Sunday hours matter (Smith 42).' 2) 'Smith argues that Sunday hours matter (42).' 3) 'Smith argues that Sunday hours matter (p. 42).' 4) 'Smith argues that Sunday hours matter (2020).'",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mla_intext_name",
            "expected": 2,
            "hint": "If the author's name is in the sentence, only the page goes in parentheses: (42)."
          }
        ]
      },
      {
        "label": "WORKS CITED — BOOK — The book is 'The Library at Night' by Maria Reyes, published by River Press in 2019. Your call: 1) Reyes, Maria. The Library at Night. River Press, 2019. 2) Maria Reyes. The Library at Night. River Press, 2019. 3) The Library at Night. Maria Reyes. River Press, 2019. 4) Reyes, Maria, The Library at Night, River Press, 2019.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mla_book",
            "expected": 1,
            "hint": "A book entry is: Last Name, First Name. Title. Publisher, Year. The author's last name comes first."
          }
        ]
      },
      {
        "label": "WORKS CITED — JOURNAL — The article is 'Sunday Hours and Student Success' by James Chen, in the Journal of Library Studies, volume 14, number 2, 2021, pages 88–104. Your call: 1) Chen, James. 'Sunday Hours and Student Success.' Journal of Library Studies, vol. 14, no. 2, 2021, pp. 88–104. 2) James Chen. 'Sunday Hours and Student Success.' Journal of Library Studies, 2021. 3) Chen, James. Sunday Hours and Student Success. 2021. 4) 'Sunday Hours and Student Success.' Chen, James. Journal of Library Studies, 2021, pp. 88–104.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mla_journal",
            "expected": 1,
            "hint": "A journal entry is: Last Name, First Name. 'Title of Article.' Title of Journal, vol. number, no. number, Year, pp. first–last."
          }
        ]
      },
      {
        "label": "WORKS CITED — ORDER — Your Works Cited page lists: Smith, then Alvarez, then Chen. Your call: 1) Leave it — order does not matter 2) Reorder alphabetically: Alvarez, Chen, Smith 3) Reorder by year: oldest first 4) Reorder by importance",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mla_order",
            "expected": 2,
            "hint": "Works Cited entries go in alphabetical order by the author's last name: Alvarez, Chen, Smith."
          }
        ]
      },
      {
        "label": "HANGING INDENT — A Works Cited entry runs to two lines. Your call: 1) Indent every line 2) First line flush left, the rest indented 3) Center the entry 4) No indent at all",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mla_hanging",
            "expected": 2,
            "hint": "A hanging indent: the first line is flush left, the rest are indented."
          }
        ]
      },
      {
        "label": "CONTAINER — You cite an article from a journal but list only the article title and author, with no journal name. Your call: 1) Leave it — the article title is enough 2) Add the container: the journal that holds the article, with volume, number, year, and pages 3) Remove the author 4) Add the URL instead",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mla_container",
            "expected": 2,
            "hint": "A missing container is one of the commonest MLA errors. The entry must name the journal or website that holds the article."
          }
        ]
      },
      {
        "label": "TWO AUTHORS — A book is by Ana Patel and Ben Okafor. Your call: 1) Patel, Ana, and Ben Okafor. Title. Publisher, Year. 2) Ana Patel and Ben Okafor. Title. Publisher, Year. 3) Okafor, Ben, and Ana Patel. Title. Publisher, Year. 4) Patel and Okafor. Title. Publisher, Year.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mla_two_authors",
            "expected": 1,
            "hint": "Two authors: the first is listed last-name-first, the second first-name-first — Patel, Ana, and Ben Okafor."
          }
        ]
      },
      {
        "label": "NO AUTHOR — A web page has no author listed. Your call: 1) Leave it out of the Works Cited page 2) Begin the entry with the title of the page 3) Use 'Anonymous' as the author 4) Invent an author",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mla_no_author",
            "expected": 2,
            "hint": "With no author, the entry begins with the title of the page. Never invent an author."
          }
        ]
      },
      {
        "label": "BLOCK QUOTATION — A quotation runs to five lines. Your call: 1) Keep it in the text in quotation marks 2) Set it off as a block, indented, with no quotation marks 3) Shorten it to one word 4) Remove the citation",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mla_block",
            "expected": 2,
            "hint": "A quotation of four or more lines is set off as a block — indented, with no quotation marks — and still cited."
          }
        ]
      },
      {
        "label": "MATCHING — Your paper cites (Reyes 12) in the text, but there is no Reyes entry in the Works Cited list. Your call: 1) Leave it — the reader can guess the source 2) Add the Reyes entry to the Works Cited list, or remove the citation 3) Change the citation to (Smith 12) 4) Delete the paragraph",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mla_matching",
            "expected": 2,
            "hint": "Every in-text citation must have a matching Works Cited entry, and every entry must be cited in the text."
          }
        ]
      }
    ]
  }
];
