// cmp105 — Scenario labs.
// Each row is checked on a single numeric input in column 1: an option number, a procedure step number, or a computed reading.
module.exports = [
  {
    "id": "library-database",
    "title": "Design a Library Database & Query It",
    "introHtml": "<p><strong>Library scenario.</strong> A small library lends books to members. You will design its tables, then answer the librarian's questions with SQL on a sample database: 3 members, 3 books, and 4 loans.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before changing any database, back it up. A DELETE or UPDATE without a WHERE changes every row, and a backup is the only undo. Test every WHERE as a SELECT first.</p><p><strong>Sample data:</strong> members: 1 Ana, 2 Ben, 3 Cara. books: 1 Dune, 2 Emma, 3 Frankenstein. loans (member_id, book_id): (1,1), (1,2), (2,1), (3,3). So Ana borrowed Dune and Emma; Ben borrowed Dune; Cara borrowed Frankenstein.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — Before you run any DELETE on the library database, what do you do first? 1) Run it straight away 2) Back up the database and test the WHERE as a SELECT 3) Delete the backup to save space 4) Ask a member to check it",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lib_safety",
            "expected": 2,
            "hint": "Back up first, and test the WHERE as a SELECT. Running it straight away (1) risks deleting every row, and deleting the backup (3) removes the only undo."
          }
        ]
      },
      {
        "label": "DECISION — Which tables does the library need? 1) One table holding members, books, and loans all mixed together 2) members, books, and a loans linking table 3) One table for books only 4) A spreadsheet with everything on one sheet",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lib_tables",
            "expected": 2,
            "hint": "Three tables: members, books, and loans as the linking table. Mixing everything in one table (1) breaks the one-kind-one-table rule; (3) cannot record loans at all."
          }
        ]
      },
      {
        "label": "DECISION — In the loans table, what is the primary key? 1) The member's name 2) A loan id, different for every loan 3) The book's title 4) The borrow date",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lib_pk",
            "expected": 2,
            "hint": "A loan id, unique for every loan. Names (1) repeat, titles (3) repeat, and dates (4) repeat — none of them tells loans apart."
          }
        ]
      },
      {
        "label": "COMPUTED — How many loans are in the sample database? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lib_count",
            "expected": 4,
            "hint": "Four loans: (1,1), (1,2), (2,1), (3,3)."
          }
        ]
      },
      {
        "label": "COMPUTED — How many books did Ana (member 1) borrow? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lib_ana",
            "expected": 2,
            "hint": "Ana has two loans: (1,1) Dune and (1,2) Emma."
          }
        ]
      },
      {
        "label": "DECISION — Which query lists the titles of the books Ana borrowed? 1) SELECT title FROM books WHERE id = 1 2) SELECT books.title FROM loans JOIN books ON loans.book_id = books.id WHERE loans.member_id = 1 3) SELECT * FROM members 4) DELETE FROM loans WHERE member_id = 1",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lib_query",
            "expected": 2,
            "hint": "Join loans to books on book_id = id, then filter to member 1. (1) returns only the book with id 1; (3) lists members, not books; (4) deletes Ana's loans."
          }
        ]
      },
      {
        "label": "COMPUTED — How many different members borrowed the book Dune (book 1)? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lib_dune",
            "expected": 2,
            "hint": "Dune was borrowed by Ana (1,1) and Ben (2,1): two different members."
          }
        ]
      },
      {
        "label": "DECISION — The librarian wants members with no loans. Which join? 1) INNER JOIN, which drops members with no loans 2) LEFT JOIN from members to loans, keeping members with NULL loans 3) No join at all 4) DELETE FROM members",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lib_left",
            "expected": 2,
            "hint": "LEFT JOIN from members keeps every member, with NULL where there is no loan. INNER JOIN (1) drops exactly the members the librarian wants to see."
          }
        ]
      }
    ]
  },
  {
    "id": "shop-queries",
    "title": "Shop Queries: Ten Questions, One Database",
    "introHtml": "<p><strong>Shop scenario.</strong> A small shop keeps customers and orders. Answer the owner's ten questions with SQL on this sample database — each row asks for an option number or a number you work out from the data.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> These are SELECT questions: reading data, not changing it. If a question ever asks you to change data, back up first and test the WHERE as a SELECT. Never run an UPDATE or DELETE you have not tested.</p><p><strong>Sample data:</strong> customers: 1 Maya, Detroit, 28; 2 Sam, Grand Rapids, 41; 3 Lee, Detroit, 35. orders: 1 customer 1, 24.50; 2 customer 1, 10.00; 3 customer 2, 99.99. Totals: Maya spent 34.50, Sam spent 99.99, Lee spent 0.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — The owner asks you to delete an old order. What do you do first? 1) Delete it straight away 2) Back up the database and test the WHERE as a SELECT 3) Delete every order from that customer 4) Delete the whole orders table",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "shop_safety",
            "expected": 2,
            "hint": "Back up first and test the WHERE as a SELECT. (1) risks the wrong row, and (3) and (4) delete far more than asked."
          }
        ]
      },
      {
        "label": "COMPUTED — How many customers live in Detroit? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "shop_det",
            "expected": 2,
            "hint": "Maya and Lee live in Detroit; Sam lives in Grand Rapids. SELECT COUNT(*) FROM customers WHERE city = 'Detroit' returns 2."
          }
        ]
      },
      {
        "label": "COMPUTED — What is the total of all orders? (Enter the number, without a dollar sign.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "shop_sum",
            "expected": 134.49,
            "hint": "24.50 + 10.00 + 99.99 = 134.49. SELECT SUM(total) FROM orders returns 134.49."
          }
        ]
      },
      {
        "label": "DECISION — Which query finds the biggest order? 1) SELECT * FROM orders ORDER BY total DESC LIMIT 1 2) SELECT * FROM orders ORDER BY total ASC LIMIT 1 3) SELECT * FROM customers 4) DELETE FROM orders ORDER BY total DESC LIMIT 1",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "shop_big",
            "expected": 1,
            "hint": "ORDER BY total DESC puts the biggest first, and LIMIT 1 takes it: Sam's 99.99. ASC (2) gives the smallest; (4) is not a valid way to ask a question."
          }
        ]
      },
      {
        "label": "COMPUTED — How much did Maya spend in total? (Enter the number, without a dollar sign.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "shop_maya",
            "expected": 34.5,
            "hint": "Maya's orders are 24.50 and 10.00, totalling 34.50. SELECT SUM(total) FROM orders WHERE customer_id = 1 returns 34.5."
          }
        ]
      },
      {
        "label": "COMPUTED — How many orders did the shop take in total? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "shop_n",
            "expected": 3,
            "hint": "Three orders: ids 1, 2, and 3. SELECT COUNT(*) FROM orders returns 3."
          }
        ]
      },
      {
        "label": "DECISION — Which query lists each customer with their order total, biggest spender first? 1) SELECT customer_id, SUM(total) AS spent FROM orders GROUP BY customer_id ORDER BY spent DESC 2) SELECT * FROM customers ORDER BY name 3) SELECT COUNT(*) FROM customers 4) SELECT * FROM orders WHERE total > 100",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "shop_group",
            "expected": 1,
            "hint": "GROUP BY customer_id with SUM(total), ordered by the total, biggest first. (2) lists names, (3) counts customers, and (4) finds no orders over 100."
          }
        ]
      },
      {
        "label": "COMPUTED — What is the average order total, rounded to two decimal places? (Enter the number, without a dollar sign.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "shop_avg",
            "expected": 44.83,
            "hint": "134.49 divided by 3 orders is 44.83. SELECT AVG(total) FROM orders returns 44.83."
          }
        ]
      }
    ]
  }
];
