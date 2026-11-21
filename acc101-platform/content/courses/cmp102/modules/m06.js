// cmp102 - Module 6: Loops: for & while
module.exports = {
  "number": 6,
  "slug": "loops-for-and-while",
  "title": "Loops: for & while",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what a loop is and why programs use them.",
    "Write a for loop using range().",
    "Write a while loop that stops at the right time.",
    "Use break to leave a loop early and continue to skip one round.",
    "Avoid infinite loops and know how to stop one."
  ],
  "sections": [
    {
      "heading": "Why Loops? Doing the Same Thing Many Times",
      "html": "<p>A loop repeats a block of code. Without loops, printing the numbers 0 to 99 would need 100 lines; with a loop, it needs two. Loops are how programs do repetitive work: checking every item in a list, asking for input until it is valid, or adding up a hundred numbers.</p>\n<p>Python has two kinds of loop. A for loop runs once for each item in a sequence — you use it when you know how many times to go round, or you have a list of things to visit. A while loop keeps going while a condition is True — you use it when you do not know in advance how many rounds you need.</p>\n"
    },
    {
      "heading": "for Loops and range()",
      "html": "<p>The most common for loop uses range(). range(3) produces the numbers 0, 1, 2 — it starts at 0 and stops before 3. </p>\n<pre>for i in range(3):\n    print(i)</pre>\n<p> The variable i takes each value in turn: first 0, then 1, then 2. This “stops before the end” behaviour catches beginners out: range(5) gives 0 to 4, five numbers, not 0 to 5.</p>\n<p>range() can take a start and a step too: range(1, 6) gives 1, 2, 3, 4, 5; range(0, 10, 2) gives 0, 2, 4, 6, 8. You will use range() constantly, including in Module 8 when you loop over lists by position.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> range(3) gives 0, 1, 2 — it stops BEFORE 3. An off-by-one error is the classic loop mistake: check whether your loop should stop at the number or before it.</div></p>\n"
    },
    {
      "heading": "while Loops: Keep Going While...",
      "html": "<p>A while loop repeats while its condition is True, and stops the moment the condition becomes False. </p>\n<pre>count = 0\nwhile count &lt; 3:\n    print(count)\n    count += 1</pre>\n<p> count starts at 0, the loop prints it, then count += 1 makes it 1, then 2, then 3 — and when count reaches 3, the condition count < 3 is False, so the loop stops. Output: 0, 1, 2.</p>\n<p>The golden rule of while loops: something inside the loop must change the condition, or the loop never stops. Forgetting count += 1 is the classic infinite loop: the condition stays True forever, the program never ends, and you have to stop it with Ctrl + C in the terminal.</p>\n"
    },
    {
      "heading": "break, continue, and Stopping Runaway Loops",
      "html": "<p>break leaves a loop immediately, even if the loop would otherwise continue. It is useful for “search until you find it” jobs: loop through names, and break when you find the one you want. continue skips the rest of the current round and starts the next one: useful for “skip the ones I do not want” jobs.</p>\n<p>If a program seems to hang, it is probably an infinite loop. Press Ctrl + C in the terminal to stop it, then look for the condition that never changes. A good habit with while loops: before you run the code, trace it by hand for three rounds and check that the condition will eventually become False.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>A loop repeats a block; for loops visit each item, while loops repeat while a condition is True.</li><li>range(3) gives 0, 1, 2 — it stops before the end number.</li><li>Something inside a while loop must change its condition, or it never stops.</li><li>break leaves a loop early; continue skips to the next round.</li><li>Ctrl + C stops a runaway program in the terminal.</li></ul></p>\n<p><strong>Common mistake:</strong> Thinking range(5) gives 1 to 5. It gives 0 to 4 — five numbers, starting at 0.</p>\n<p><strong>Common mistake:</strong> Forgetting to change the loop variable inside a while loop, creating an infinite loop that never ends.</p>\n<p><strong>Ready check:</strong> If you can write a for loop that prints 0 to 4 and a while loop that counts to 3 and stops, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Loop",
      "def": "Code that repeats a block of instructions, instead of you writing the same lines again and again."
    },
    {
      "term": "for loop",
      "def": "A loop that runs once for each item in a sequence, such as each number from range() or each item in a list."
    },
    {
      "term": "while loop",
      "def": "A loop that keeps running while its condition is True, and stops when the condition becomes False."
    },
    {
      "term": "range()",
      "def": "A built-in function that produces a sequence of numbers: range(3) gives 0, 1, 2."
    },
    {
      "term": "Iteration",
      "def": "One single run through a loop's block. A loop that runs three times does three iterations."
    },
    {
      "term": "Loop variable",
      "def": "The variable a for loop uses to hold the current item, such as i in for i in range(3)."
    },
    {
      "term": "break",
      "def": "A statement that leaves a loop immediately, whatever the loop's condition says."
    },
    {
      "term": "continue",
      "def": "A statement that skips the rest of the current round of a loop and starts the next round."
    },
    {
      "term": "Infinite loop",
      "def": "A loop that never stops, usually because its condition never becomes False."
    },
    {
      "term": "Counter",
      "def": "A variable that counts how many times something has happened, often increased by 1 inside a loop."
    },
    {
      "term": "Accumulator",
      "def": "A variable that adds up values inside a loop, such as a running total."
    },
    {
      "term": "Condition",
      "def": "The true/false question a while loop asks before each round."
    },
    {
      "term": "Nested loop",
      "def": "A loop inside another loop."
    },
    {
      "term": "Sequence",
      "def": "An ordered collection of items you can loop over, such as a range, a string, or a list."
    },
    {
      "term": "Off-by-one error",
      "def": "A classic mistake where a loop runs one time too many or one time too few."
    }
  ],
  "video": {
    "title": "Python Full Course for free 🐍",
    "embedUrl": "https://www.youtube.com/embed/XKHEtdqhLK8",
    "note": "Bro Code's full Python course. Watch the sections on for loops, while loops, and range(), and type along with each example.",
    "more": [
      {
        "title": "Python Full Course for Beginners",
        "url": "https://www.youtube.com/watch?v=_uQrJ0TkZlc"
      },
      {
        "title": "Python Tutorial for Beginners - Learn Python in 5 Hours [FULL COURSE]",
        "url": "https://www.youtube.com/watch?v=t8pPdKYpowI"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Loop” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Loop — Code that repeats a block of instructions, instead of you writing the same lines again and again. Step 2: It matters because it is part of: Explain what a loop is and why programs use them. Step 3: An example from the module is the way loop shows up in everyday use, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “for loop” and “while loop”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: for loop — A loop that runs once for each item in a sequence, such as each number from range() or each item in a list. Step 2: while loop — A loop that keeps running while its condition is True, and stops when the condition becomes False. Step 3: They differ because the first is about for loop while the second is about while loop; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Write a for loop using range().” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Write a for loop using range(). Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “range()” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: range() — A built-in function that produces a sequence of numbers: range(3) gives 0, 1, 2. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Iteration — One single run through a loop's block. A loop that runs three times does three iterations. Step 2: Loop variable — The variable a for loop uses to hold the current item, such as i in for i in range(3). Step 3: break — A statement that leaves a loop immediately, whatever the loop's condition says. Step 4: continue — A statement that skips the rest of the current round of a loop and starts the next round. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Avoid infinite loops and know how to stop one. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “range()” mean?",
      "choices": [
        "One single run through a loop's block. A loop that runs three times does three iterations.",
        "A statement that leaves a loop immediately, whatever the loop's condition says.",
        "A built-in function that produces a sequence of numbers: range(3) gives 0, 1, 2.",
        "A variable that counts how many times something has happened, often increased by 1 inside a loop."
      ],
      "answer": 2,
      "explanation": "Correct: (c). range() means: A built-in function that produces a sequence of numbers: range(3) gives 0, 1, 2. (a) is the definition of Iteration, not of range(). (b) is the definition of Counter, not of range(). (d) is the definition of break, not of range()."
    },
    {
      "q": "What does the term “break” mean?",
      "choices": [
        "A loop that keeps running while its condition is True, and stops when the condition becomes False.",
        "One single run through a loop's block. A loop that runs three times does three iterations.",
        "The true/false question a while loop asks before each round.",
        "A statement that leaves a loop immediately, whatever the loop's condition says."
      ],
      "answer": 3,
      "explanation": "Correct: (d). break means: A statement that leaves a loop immediately, whatever the loop's condition says. (a) is the definition of Condition, not of break. (b) is the definition of Iteration, not of break. (c) is the definition of while loop, not of break."
    },
    {
      "q": "Which term means: A variable that counts how many times something has happened, often increased by 1 inside a loop.",
      "choices": [
        "for loop",
        "while loop",
        "Counter",
        "Loop variable"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Counter is the term for: A variable that counts how many times something has happened, often increased by 1 inside a loop. (a) while loop means A loop that keeps running while its condition is True, and stops when the condition becomes False. (b) Loop variable means The variable a for loop uses to hold the current item, such as i in for i in range(3). (d) for loop means A loop that runs once for each item in a sequence, such as each number from range() or each item in a list."
    },
    {
      "q": "Which term means: A loop inside another loop.",
      "choices": [
        "break",
        "Infinite loop",
        "Nested loop",
        "Counter"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Nested loop is the term for: A loop inside another loop. (a) break means A statement that leaves a loop immediately, whatever the loop's condition says. (b) Infinite loop means A loop that never stops, usually because its condition never becomes False. (d) Counter means A variable that counts how many times something has happened, often increased by 1 inside a loop."
    },
    {
      "q": "Which of the following is TRUE about Loop?",
      "choices": [
        "A loop that keeps running while its condition is True, and stops when the condition becomes False.",
        "Code that repeats a block of instructions, instead of you writing the same lines again and again.",
        "A statement that leaves a loop immediately, whatever the loop's condition says.",
        "One single run through a loop's block. A loop that runs three times does three iterations."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Loop: Code that repeats a block of instructions, instead of you writing the same lines again and again. (a) describes Iteration, not Loop. (c) describes while loop, not Loop. (d) describes break, not Loop."
    },
    {
      "q": "What does the term “range()” mean?",
      "choices": [
        "The true/false question a while loop asks before each round.",
        "A loop that runs once for each item in a sequence, such as each number from range() or each item in a list.",
        "A built-in function that produces a sequence of numbers: range(3) gives 0, 1, 2.",
        "An ordered collection of items you can loop over, such as a range, a string, or a list."
      ],
      "answer": 2,
      "explanation": "Correct: (c). range() means: A built-in function that produces a sequence of numbers: range(3) gives 0, 1, 2. (a) is the definition of Condition, not of range(). (b) is the definition of for loop, not of range(). (d) is the definition of Sequence, not of range()."
    },
    {
      "q": "What does this code print? for i in range(3): print(i)",
      "choices": [
        "1, 2, 3",
        "0, 1, 2",
        "0, 1, 2, 3",
        "3, 2, 1"
      ],
      "answer": 1,
      "explanation": "Correct: (b). range(3) gives 0, 1, 2 — it starts at 0 and stops before 3. (a) is wrong: range starts at 0, not 1. (c) is wrong: range(3) never includes 3. (d) is wrong: the numbers go up, not down."
    },
    {
      "q": "What is wrong with this loop? count = 0 / while count < 3: print(count)",
      "choices": [
        "Nothing is wrong",
        "count never changes, so the loop never stops",
        "The condition should be count > 3",
        "print() cannot be used inside a loop"
      ],
      "answer": 1,
      "explanation": "Correct: (b). count stays 0 forever, so count < 3 is always True — an infinite loop. (a) is wrong: the loop never ends. (c) is wrong: changing the condition to count > 3 would make the loop never run at all. (d) is wrong: print() works fine inside loops."
    }
  ],
  "studyGuide": "\n<h3>Module 6 — Loops: for & while: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain what a loop is and why programs use them.</p>\n<p><strong>Key terms:</strong> Loop · for loop · while loop · range() · Iteration · Loop variable · break · continue.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain what a loop is and why programs use them.</li>\n<li>Write a for loop using range().</li>\n<li>Write a while loop that stops at the right time.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
