// cmp102 - Module 9: Dictionaries
module.exports = {
  "number": 9,
  "slug": "dictionaries",
  "title": "Dictionaries",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what a dictionary is and when to use one instead of a list.",
    "Create dictionaries and read values by key.",
    "Add, change, and remove key-value pairs.",
    "Use get() to read a key safely.",
    "Loop over a dictionary's keys, values, and items."
  ],
  "sections": [
    {
      "heading": "Labels, Not Positions",
      "html": "<p>A list finds things by position: item 0, item 1, item 2. A dictionary finds things by label: a key. user = {\"name\": \"Maya\", \"age\": 34} stores two pieces of information, each with a name. user[\"name\"] gives \"Maya\" — you ask for the value by its key, not by its position.</p>\n<p>Use a list when order matters and the items are all the same kind of thing (a list of names). Use a dictionary when each piece of information has a label (a person's name, age, and city). Choosing between them is one of the most useful judgement calls in programming, and it gets easier with practice.</p>\n"
    },
    {
      "heading": "Reading, Adding, Changing, Removing",
      "html": "<p>Read a value with square brackets: user[\"name\"]. Add or change a pair by assigning to a key: user[\"city\"] = \"Leeds\" adds a new pair, and user[\"age\"] = 35 changes the existing one. Remove a pair with del user[\"age\"].</p>\n<p>The trap is asking for a key that is not there: user[\"email\"] fails with a KeyError if there is no \"email\" key. The safe way is .get(): </p>\n<pre>user = {&quot;name&quot;: &quot;Maya&quot;, &quot;age&quot;: 34}\nprint(user[&quot;name&quot;])\nprint(user.get(&quot;city&quot;, &quot;unknown&quot;))</pre>\n<p> user.get(\"city\", \"unknown\") returns \"unknown\" instead of failing, because there is no \"city\" key. Use .get() whenever you are not sure the key exists.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> user[\"name\"] fails with a KeyError if the key is missing. user.get(\"name\", \"unknown\") returns \"unknown\" instead. Use .get() when you are not sure.</div></p>\n"
    },
    {
      "heading": "Looping Over a Dictionary",
      "html": "<p>You can loop over a dictionary's keys (for key in user), its values (for value in user.values()), or its pairs (for key, value in user.items()). The .items() loop is the most common: </p>\n<pre>prices = {&quot;pen&quot;: 2, &quot;book&quot;: 5}\nfor item, price in prices.items():\n    print(item, price)</pre>\n<p> It prints pen 2 and then book 5 — each key with its value. Dictionaries remember the order pairs were added, so the loop visits them in that order.</p>\n<p>A classic dictionary pattern is counting: loop over a list of words, and for each word, add 1 to its count in a dictionary. This is how programs count votes, count words in a document, or tally survey answers — a small pattern with very large uses.</p>\n"
    },
    {
      "heading": "Dictionaries Inside Lists, Lists Inside Dictionaries",
      "html": "<p>Real data is often a mix: a list of dictionaries (one dictionary per person in a class), or a dictionary whose values are lists (a student's name with a list of their marks). students = [{\"name\": \"Maya\", \"mark\": 85}, {\"name\": \"Sam\", \"mark\": 72}] is a list of two dictionaries; students[0][\"mark\"] is 85 — first the list index, then the dictionary key.</p>\n<p>Read these from the outside in: students[0] is the first dictionary, and [\"mark\"] is the key inside it. When a lookup like this confuses you, print the middle step (print(students[0])) and look at what you actually have before going further.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>A dictionary stores key-value pairs in curly braces.</li><li>Read with dict[key]; add or change with dict[key] = value; remove with del.</li><li>.get(key, default) reads safely when the key might be missing.</li><li>Loop with .keys(), .values(), or .items().</li><li>Use a list when order matters; use a dictionary when labels matter.</li></ul></p>\n<p><strong>Common mistake:</strong> Reading a missing key with square brackets and getting a KeyError. Use .get() with a default when you are not sure.</p>\n<p><strong>Common mistake:</strong> Using a list when a dictionary fits better — searching a list for “the age of Maya” is slow and clumsy; a dictionary answers it directly.</p>\n<p><strong>Ready check:</strong> If you can build a dictionary for a person, add a key, read a missing key safely with .get(), and loop over its items, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Dictionary",
      "def": "A collection of key-value pairs in curly braces, such as {\"name\": \"Maya\", \"age\": 34}."
    },
    {
      "term": "Key",
      "def": "The label in a dictionary that identifies a value, such as \"name\"."
    },
    {
      "term": "Value",
      "def": "The data stored under a key in a dictionary, such as \"Maya\" under \"name\"."
    },
    {
      "term": "Key-value pair",
      "def": "One key together with its value in a dictionary."
    },
    {
      "term": "get()",
      "def": "A dictionary method that reads a key safely: it returns a default instead of failing when the key is missing."
    },
    {
      "term": "keys()",
      "def": "A dictionary method that gives all the keys."
    },
    {
      "term": "values()",
      "def": "A dictionary method that gives all the values."
    },
    {
      "term": "items()",
      "def": "A dictionary method that gives all the key-value pairs, for looping."
    },
    {
      "term": "update()",
      "def": "A dictionary method that adds or changes several key-value pairs at once."
    },
    {
      "term": "del",
      "def": "The statement that removes a key-value pair from a dictionary: del user[\"age\"]."
    },
    {
      "term": "in",
      "def": "An operator that checks whether a key exists in a dictionary: \"name\" in user."
    },
    {
      "term": "Mutable",
      "def": "Changeable. Dictionaries are mutable: you can add, change, and remove pairs after creating them."
    },
    {
      "term": "Nested dictionary",
      "def": "A dictionary that contains other dictionaries as values."
    },
    {
      "term": "List",
      "def": "An ordered collection of values in square brackets; use a list when order matters and a dictionary when labels matter."
    },
    {
      "term": "Counter",
      "def": "A common dictionary pattern: using keys to count how many times something appears."
    }
  ],
  "video": {
    "title": "Data Structures in Python — List, Tuple, Dictionary | Full Lesson in English",
    "embedUrl": "https://www.youtube.com/embed/rjXCT7kano0",
    "note": "A clear lesson on lists, tuples, and dictionaries in simple English, with real code you can run yourself. Watch the dictionary section and try each example.",
    "more": [
      {
        "title": "Dictionaries in Python | Nested Dictionaries | How to create dictionary in Python | Python Tutorial",
        "url": "https://www.youtube.com/watch?v=Ayah24qHaao"
      },
      {
        "title": "Python Lists, Tuples, Dictionaries and Sets for Beginners (Lesson 5)",
        "url": "https://www.youtube.com/watch?v=xSu9A77jeiw"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Dictionary” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Dictionary — A collection of key-value pairs in curly braces, such as {\"name\": \"Maya\", \"age\": 34}. Step 2: It matters because it is part of: Explain what a dictionary is and when to use one instead of a list. Step 3: An example from the module is the way dictionary shows up in everyday use, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Key” and “Value”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Key — The label in a dictionary that identifies a value, such as \"name\". Step 2: Value — The data stored under a key in a dictionary, such as \"Maya\" under \"name\". Step 3: They differ because the first is about key while the second is about value; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Create dictionaries and read values by key.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Create dictionaries and read values by key. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “Key-value pair” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: Key-value pair — One key together with its value in a dictionary. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: get() — A dictionary method that reads a key safely: it returns a default instead of failing when the key is missing. Step 2: keys() — A dictionary method that gives all the keys. Step 3: values() — A dictionary method that gives all the values. Step 4: items() — A dictionary method that gives all the key-value pairs, for looping. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Loop over a dictionary's keys, values, and items. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “del” mean?",
      "choices": [
        "The statement that removes a key-value pair from a dictionary: del user[\"age\"].",
        "An ordered collection of values in square brackets; use a list when order matters and a dictionary when labels matter.",
        "A dictionary method that gives all the keys.",
        "A common dictionary pattern: using keys to count how many times something appears."
      ],
      "answer": 0,
      "explanation": "Correct: (a). del means: The statement that removes a key-value pair from a dictionary: del user[\"age\"]. (b) is the definition of List, not of del. (c) is the definition of Counter, not of del. (d) is the definition of keys(), not of del."
    },
    {
      "q": "What does the term “Nested dictionary” mean?",
      "choices": [
        "An ordered collection of values in square brackets; use a list when order matters and a dictionary when labels matter.",
        "A dictionary that contains other dictionaries as values.",
        "Changeable. Dictionaries are mutable: you can add, change, and remove pairs after creating them.",
        "A common dictionary pattern: using keys to count how many times something appears."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Nested dictionary means: A dictionary that contains other dictionaries as values. (a) is the definition of List, not of Nested dictionary. (c) is the definition of Mutable, not of Nested dictionary. (d) is the definition of Counter, not of Nested dictionary."
    },
    {
      "q": "Which term means: A collection of key-value pairs in curly braces, such as {\"name\": \"Maya\", \"age\": 34}.",
      "choices": [
        "Key",
        "Dictionary",
        "Nested dictionary",
        "del"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Dictionary is the term for: A collection of key-value pairs in curly braces, such as {\"name\": \"Maya\", \"age\": 34}. (a) Key means The label in a dictionary that identifies a value, such as \"name\". (c) del means The statement that removes a key-value pair from a dictionary: del user[\"age\"]. (d) Nested dictionary means A dictionary that contains other dictionaries as values."
    },
    {
      "q": "Which term means: One key together with its value in a dictionary.",
      "choices": [
        "Key-value pair",
        "get()",
        "Mutable",
        "update()"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Key-value pair is the term for: One key together with its value in a dictionary. (b) Mutable means Changeable. Dictionaries are mutable: you can add, change, and remove pairs after creating them. (c) get() means A dictionary method that reads a key safely: it returns a default instead of failing when the key is missing. (d) update() means A dictionary method that adds or changes several key-value pairs at once."
    },
    {
      "q": "Which of the following is TRUE about values()?",
      "choices": [
        "A dictionary method that gives all the values.",
        "Changeable. Dictionaries are mutable: you can add, change, and remove pairs after creating them.",
        "The data stored under a key in a dictionary, such as \"Maya\" under \"name\".",
        "The statement that removes a key-value pair from a dictionary: del user[\"age\"]."
      ],
      "answer": 0,
      "explanation": "Correct: (a). values(): A dictionary method that gives all the values. (b) describes Value, not values(). (c) describes del, not values(). (d) describes Mutable, not values()."
    },
    {
      "q": "What does the term “del” mean?",
      "choices": [
        "The statement that removes a key-value pair from a dictionary: del user[\"age\"].",
        "A common dictionary pattern: using keys to count how many times something appears.",
        "One key together with its value in a dictionary.",
        "A dictionary that contains other dictionaries as values."
      ],
      "answer": 0,
      "explanation": "Correct: (a). del means: The statement that removes a key-value pair from a dictionary: del user[\"age\"]. (b) is the definition of Counter, not of del. (c) is the definition of Nested dictionary, not of del. (d) is the definition of Key-value pair, not of del."
    },
    {
      "q": "What does this code print? user = {\"name\": \"Maya\", \"age\": 34} / print(user[\"name\"]) / print(user.get(\"city\", \"unknown\"))",
      "choices": [
        "Maya then unknown",
        "Maya then an error",
        "unknown then Maya",
        "34 then unknown"
      ],
      "answer": 0,
      "explanation": "Correct: (a). user[\"name\"] is \"Maya\", and .get(\"city\", \"unknown\") returns \"unknown\" because there is no \"city\" key. (b) is wrong: .get() never fails on a missing key — that is its job. (c) is wrong: the prints run in order. (d) is wrong: user[\"name\"] is \"Maya\", not 34."
    },
    {
      "q": "What happens if you read user[\"email\"] when the dictionary has no \"email\" key?",
      "choices": [
        "It returns the word “unknown”",
        "It returns nothing",
        "It fails with a KeyError",
        "It creates the key automatically"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Square brackets fail with a KeyError when the key is missing. (a) is wrong: that is what .get(\"email\", \"unknown\") does, not brackets. (b) is wrong: it does not silently return nothing. (d) is wrong: reading never creates a key — only assigning does."
    }
  ],
  "studyGuide": "\n<h3>Module 9 — Dictionaries: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain what a dictionary is and when to use one instead of a list.</p>\n<p><strong>Key terms:</strong> Dictionary · Key · Value · Key-value pair · get() · keys() · values() · items().</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain what a dictionary is and when to use one instead of a list.</li>\n<li>Create dictionaries and read values by key.</li>\n<li>Add, change, and remove key-value pairs.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
