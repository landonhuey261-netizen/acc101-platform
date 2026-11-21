// cmp102 - Module 8: Lists
module.exports = {
  "number": 8,
  "slug": "lists",
  "title": "Lists",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what a list is and when to use one.",
    "Create lists, read items by index, and change items.",
    "Use len(), append(), and remove() on lists.",
    "Loop over a list with a for loop.",
    "Use slicing to take part of a list."
  ],
  "sections": [
    {
      "heading": "Lists: Keeping Several Things Together",
      "html": "<p>A list is an ordered collection of values, written in square brackets and separated by commas: fruits = [\"apple\", \"banana\", \"cherry\"]. One variable now holds three values, in order. Lists are how programs handle real-world collections: a shopping list, a class register, a week's temperatures.</p>\n<p>You read an item by its index — its position, counting from 0. fruits[0] is \"apple\", fruits[1] is \"banana\", fruits[2] is \"cherry\". Negative indexes count from the end: fruits[-1] is the last item, \"cherry\". len(fruits) tells you how many items there are: </p>\n<pre>fruits = [&quot;apple&quot;, &quot;banana&quot;, &quot;cherry&quot;]\nprint(fruits[1])\nprint(len(fruits))</pre>\n<p> Run it and you get banana (the item at index 1) and 3 (the number of items).</p>\n"
    },
    {
      "heading": "Changing Lists",
      "html": "<p>Lists are mutable, which means you can change them after creating them. fruits[1] = \"mango\" replaces \"banana\" with \"mango\". fruits.append(\"orange\") adds \"orange\" to the end. fruits.remove(\"apple\") removes the first \"apple\". fruits.pop() removes and returns the last item.</p>\n<p>This mutability is powerful but has a trap: if you write b = a for two lists, both names point at the same list, so changing b changes a too. To make a real copy, use b = a.copy() or b = list(a).</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Indexes start at 0. fruits[0] is the first item, fruits[-1] is the last. If you ask for fruits[3] in a three-item list, Python stops with an IndexError.</div></p>\n"
    },
    {
      "heading": "Looping Over a List",
      "html": "<p>The most common thing to do with a list is to visit every item with a for loop: for fruit in fruits: print(fruit) prints each fruit on its own line. The loop variable takes each item in turn, in order. You can also add items up as you go, using an accumulator: </p>\n<pre>nums = [2, 4, 6]\ntotal = 0\nfor n in nums:\n    total += n\nprint(total)</pre>\n<p> total starts at 0, each round adds the next number, and at the end total is 12.</p>\n<p>If you need the position as well as the item, use enumerate(): for i, fruit in enumerate(fruits): gives you i = 0 with \"apple\", i = 1 with \"banana\", and so on. And to check whether something is in a list at all, use in: \"banana\" in fruits is True or False.</p>\n"
    },
    {
      "heading": "Slicing: Taking Part of a List",
      "html": "<p>Slicing takes part of a list with [start:stop]: fruits[0:2] gives the first two items, [\"apple\", \"banana\"]. Like range(), slicing stops before the stop number. Leave the start out to begin at the start (fruits[:2]), leave the stop out to go to the end (fruits[1:]), and use a step for every second item (fruits[::2]).</p>\n<p>Slicing never fails with an IndexError: if you ask for more than the list holds, you simply get what is there. It is a gentle, safe way to take a piece of a list — and it works on strings too, because strings are sequences just like lists.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>A list holds several values in order, in square brackets.</li><li>Indexes start at 0; negative indexes count from the end.</li><li>append() adds to the end; remove() and pop() take items away.</li><li>Loop over a list with for item in my_list.</li><li>Slicing [start:stop] takes part of a list and stops before the stop number.</li></ul></p>\n<p><strong>Common mistake:</strong> Asking for index 3 in a three-item list. The valid indexes are 0, 1, and 2 — index 3 gives an IndexError.</p>\n<p><strong>Common mistake:</strong> Writing b = a to copy a list. That makes two names for the same list — use b = a.copy() for a real copy.</p>\n<p><strong>Ready check:</strong> If you can make a list of five numbers, print the first and last items, add one more with append(), and add them all up with a loop, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "List",
      "def": "An ordered collection of values in square brackets, such as [\"apple\", \"banana\", \"cherry\"]."
    },
    {
      "term": "Index",
      "def": "The position of an item in a list, counting from 0: in [\"apple\", \"banana\"], \"apple\" is at index 0."
    },
    {
      "term": "Element",
      "def": "One item in a list."
    },
    {
      "term": "len()",
      "def": "A built-in function that gives the number of items in a list."
    },
    {
      "term": "append()",
      "def": "A list method that adds an item to the end of a list."
    },
    {
      "term": "remove()",
      "def": "A list method that removes the first item equal to a given value."
    },
    {
      "term": "pop()",
      "def": "A list method that removes and returns an item, by default the last one."
    },
    {
      "term": "Slicing",
      "def": "Taking part of a list with [start:stop], such as fruits[0:2]."
    },
    {
      "term": "Mutable",
      "def": "Changeable. Lists are mutable: you can change their items after creating them."
    },
    {
      "term": "Immutable",
      "def": "Unchangeable. Strings and tuples are immutable: you cannot change their items in place."
    },
    {
      "term": "in",
      "def": "An operator that checks whether a value is in a list: \"banana\" in fruits is True or False."
    },
    {
      "term": "sort()",
      "def": "A list method that arranges the items in order."
    },
    {
      "term": "Nested list",
      "def": "A list that contains other lists, such as [[1, 2], [3, 4]]."
    },
    {
      "term": "Tuple",
      "def": "An ordered collection like a list, but written with round brackets and immutable: (1, 2)."
    },
    {
      "term": "Loop",
      "def": "Code that repeats a block of instructions — often used to visit every item in a list."
    }
  ],
  "video": {
    "title": "Harvard CS50's Introduction to Programming with Python – Full University Course",
    "embedUrl": "https://www.youtube.com/embed/nLRL_NcnK-4",
    "note": "Harvard's CS50 Python course on freeCodeCamp. Watch the sections on lists and loops, and work through the examples in VS Code.",
    "more": [
      {
        "title": "Python Full Course for free 🐍",
        "url": "https://www.youtube.com/watch?v=XKHEtdqhLK8"
      },
      {
        "title": "Data Structures in Python — List, Tuple, Dictionary | Full Lesson in English",
        "url": "https://www.youtube.com/watch?v=rjXCT7kano0"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “List” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: List — An ordered collection of values in square brackets, such as [\"apple\", \"banana\", \"cherry\"]. Step 2: It matters because it is part of: Explain what a list is and when to use one. Step 3: An example from the module is the way list shows up in everyday use, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Index” and “Element”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Index — The position of an item in a list, counting from 0: in [\"apple\", \"banana\"], \"apple\" is at index 0. Step 2: Element — One item in a list. Step 3: They differ because the first is about index while the second is about element; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Create lists, read items by index, and change items.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Create lists, read items by index, and change items. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “len()” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: len() — A built-in function that gives the number of items in a list. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: append() — A list method that adds an item to the end of a list. Step 2: remove() — A list method that removes the first item equal to a given value. Step 3: pop() — A list method that removes and returns an item, by default the last one. Step 4: Slicing — Taking part of a list with [start:stop], such as fruits[0:2]. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Use slicing to take part of a list. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Slicing” mean?",
      "choices": [
        "The position of an item in a list, counting from 0: in [\"apple\", \"banana\"], \"apple\" is at index 0.",
        "An ordered collection of values in square brackets, such as [\"apple\", \"banana\", \"cherry\"].",
        "Taking part of a list with [start:stop], such as fruits[0:2].",
        "A built-in function that gives the number of items in a list."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Slicing means: Taking part of a list with [start:stop], such as fruits[0:2]. (a) is the definition of Index, not of Slicing. (b) is the definition of len(), not of Slicing. (d) is the definition of List, not of Slicing."
    },
    {
      "q": "What does the term “in” mean?",
      "choices": [
        "An ordered collection like a list, but written with round brackets and immutable: (1, 2).",
        "An operator that checks whether a value is in a list: \"banana\" in fruits is True or False.",
        "A list that contains other lists, such as [[1, 2], [3, 4]].",
        "A list method that arranges the items in order."
      ],
      "answer": 1,
      "explanation": "Correct: (b). in means: An operator that checks whether a value is in a list: \"banana\" in fruits is True or False. (a) is the definition of Tuple, not of in. (c) is the definition of Nested list, not of in. (d) is the definition of sort(), not of in."
    },
    {
      "q": "Which term means: An ordered collection like a list, but written with round brackets and immutable: (1, 2).",
      "choices": [
        "Loop",
        "Index",
        "Tuple",
        "Mutable"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Tuple is the term for: An ordered collection like a list, but written with round brackets and immutable: (1, 2). (a) Loop means Code that repeats a block of instructions — often used to visit every item in a list. (b) Mutable means Changeable. Lists are mutable: you can change their items after creating them. (d) Index means The position of an item in a list, counting from 0: in [\"apple\", \"banana\"], \"apple\" is at index 0."
    },
    {
      "q": "Which term means: The position of an item in a list, counting from 0: in [\"apple\", \"banana\"], \"apple\" is at index 0.",
      "choices": [
        "remove()",
        "Mutable",
        "Index",
        "Tuple"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Index is the term for: The position of an item in a list, counting from 0: in [\"apple\", \"banana\"], \"apple\" is at index 0. (a) Tuple means An ordered collection like a list, but written with round brackets and immutable: (1, 2). (b) Mutable means Changeable. Lists are mutable: you can change their items after creating them. (d) remove() means A list method that removes the first item equal to a given value."
    },
    {
      "q": "Which of the following is TRUE about append()?",
      "choices": [
        "A list method that removes and returns an item, by default the last one.",
        "A list method that adds an item to the end of a list.",
        "Changeable. Lists are mutable: you can change their items after creating them.",
        "Unchangeable. Strings and tuples are immutable: you cannot change their items in place."
      ],
      "answer": 1,
      "explanation": "Correct: (b). append(): A list method that adds an item to the end of a list. (a) describes Mutable, not append(). (c) describes pop(), not append(). (d) describes Immutable, not append()."
    },
    {
      "q": "What does the term “Slicing” mean?",
      "choices": [
        "An operator that checks whether a value is in a list: \"banana\" in fruits is True or False.",
        "An ordered collection like a list, but written with round brackets and immutable: (1, 2).",
        "A list method that arranges the items in order.",
        "Taking part of a list with [start:stop], such as fruits[0:2]."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Slicing means: Taking part of a list with [start:stop], such as fruits[0:2]. (a) is the definition of Tuple, not of Slicing. (b) is the definition of sort(), not of Slicing. (c) is the definition of in, not of Slicing."
    },
    {
      "q": "What does this code print? fruits = [\"apple\", \"banana\", \"cherry\"] / print(fruits[1]) / print(len(fruits))",
      "choices": [
        "apple then 3",
        "banana then 3",
        "cherry then 2",
        "banana then 2"
      ],
      "answer": 1,
      "explanation": "Correct: (b). fruits[1] is the second item, \"banana\" (indexes start at 0), and len() counts 3 items. (a) is wrong: fruits[0] would be \"apple\". (c) is wrong: \"cherry\" is index 2, and the list has 3 items, not 2. (d) is wrong: the length is 3."
    },
    {
      "q": "What does this code print? nums = [2, 4, 6] / total = 0 / for n in nums: total += n / print(total)",
      "choices": [
        "6",
        "12",
        "10",
        "246"
      ],
      "answer": 1,
      "explanation": "Correct: (b). total starts at 0, then adds 2, then 4, then 6: 0 + 2 + 4 + 6 = 12. (a) is wrong: that is only the last item. (c) is wrong: 2 + 4 + 6 is 12, not 10. (d) is wrong: + adds numbers, it does not join them as text."
    }
  ],
  "studyGuide": "\n<h3>Module 8 — Lists: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain what a list is and when to use one.</p>\n<p><strong>Key terms:</strong> List · Index · Element · len() · append() · remove() · pop() · Slicing.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain what a list is and when to use one.</li>\n<li>Create lists, read items by index, and change items.</li>\n<li>Use len(), append(), and remove() on lists.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
