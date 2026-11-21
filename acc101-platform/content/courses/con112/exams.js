// con112 — Midterm and Final exams.
// All questions are original to these exams (same topics as module quizzes, fresh scenarios and numbers).
// Every explanation covers why the correct answer is right AND why each wrong choice is wrong.
module.exports = {
  "midterm": {
    "title": "Midterm Exam",
    "minutes": 75,
    "coverage": "Modules 1–6",
    "questions": [
      {
        "module": 1,
        "q": "A takeoff for a 12-by-16-foot deck lists 24 joists, 60 deck boards, and 8 posts. A second estimator counts 24 joists, 60 boards, and 12 posts. What is the most likely explanation, and what should happen next?",
        "choices": [
          "The deck needs 8 posts, so the second estimator is wrong",
          "One of the takeoffs is wrong, and the count must be reconciled before pricing",
          "The owner decides how many posts the deck needs",
          "The difference does not matter, because posts are cheap"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Two different counts for the same item mean one takeoff is wrong, and the count must be reconciled — recount from the drawings — before the price is set. (a) It is not known which count is wrong without checking. (c) The owner does not decide the structural count. (d) The difference matters: every item in the price must be right."
      },
      {
        "module": 1,
        "q": "An estimator pricing a house finds the drawings show a 30-foot wall but the specifications call for a 36-foot wall. What should they do?",
        "choices": [
          "Price the 30-foot wall, because drawings govern",
          "Price the 36-foot wall, because specs govern",
          "Ask the designer for a written clarification before pricing",
          "Price the average, 33 feet"
        ],
        "answer": 2,
        "explanation": "Correct: (c). A conflict between drawings and specs must be clarified in writing by the designer — guessing either way prices the wrong wall. (a) Drawings do not automatically govern over specs. (b) Specs do not automatically govern over drawings. (d) Averaging two different walls gives a wall that exists on no drawing."
      },
      {
        "module": 1,
        "q": "A takeoff lists 500 square feet of flooring for a room that measures 450 square feet. The extra 50 square feet most likely represents:",
        "choices": [
          "Profit",
          "Waste and cutting allowance",
          "Overhead",
          "A counting error"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 450 square feet plus about 11% waste is roughly 500 square feet — the waste factor for cutting and fitting. (a) Profit is added to the price, not to the quantity. (c) Overhead is a company cost, not a quantity. (d) It could be an error, but a round 10–11% addition is the waste factor, not a mistake."
      },
      {
        "module": 1,
        "q": "Which of these is a direct cost on a job?",
        "choices": [
          "Lumber delivered to the site",
          "The company's office rent",
          "Advertising for the company",
          "The owner's car payment"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Lumber delivered to the site is a direct cost — it goes into the building. (b) Office rent is overhead, not a job cost. (c) Advertising is overhead. (d) A car payment is not a job cost."
      },
      {
        "module": 2,
        "q": "A drawing is drawn at 1/4 inch = 1 foot. A wall measures 3 inches on the paper. How long is the wall in real life?",
        "choices": [
          "3 feet",
          "6 feet",
          "12 feet",
          "24 feet"
        ],
        "answer": 2,
        "explanation": "Correct: (c). At 1/4 inch per foot, 3 inches ÷ 1/4 inch per foot = 12 feet. (a) 3 feet confuses paper inches with real feet. (b) 6 feet is half the right answer. (d) 24 feet doubles it."
      },
      {
        "module": 2,
        "q": "A detail drawing shows a window header made of two 2x10s with plywood between. The main purpose of the detail is to:",
        "choices": [
          "Show the room layout",
          "Show exactly how that header is assembled",
          "Show the roof framing",
          "Show the site boundaries"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A detail shows exactly how one connection or assembly is built — the members, the order, and the fastening. (a) The room layout is on the plan view. (c) The roof framing is on the roof plan. (d) The site boundaries are on the site plan."
      },
      {
        "module": 2,
        "q": "A revision is issued as Addendum 2, dated after the drawings. The estimator should:",
        "choices": [
          "Ignore it, because the drawings are already priced",
          "Price from the addendum, because it supersedes the earlier drawings",
          "Use the original drawings only",
          "Average the two sets"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The latest addendum supersedes the earlier drawings — it is the current scope. (a) Ignoring a revision prices the wrong scope. (c) The original drawings are outdated once the addendum is issued. (d) Averaging two scopes gives a scope that exists nowhere."
      },
      {
        "module": 2,
        "q": "The drawings show single-glazed windows and the specifications require double-glazed low-E vinyl windows. The estimator's correct move is to:",
        "choices": [
          "Price the single-glazed windows shown on the drawings",
          "Price the double-glazed windows in the specifications",
          "Ask the architect for a written clarification before pricing",
          "Price the average of the two window types"
        ],
        "answer": 2,
        "explanation": "Correct: (c). A conflict between drawings and specs must be clarified in writing — guessing either way prices the wrong windows. (a) The drawings may be the outdated document. (b) The specs may be the outdated document. (d) Averaging gives a window type that exists on no document."
      },
      {
        "module": 3,
        "q": "A footing 60 feet long, 3 feet wide, and 1.5 feet deep contains:",
        "choices": [
          "10 cubic yards",
          "15 cubic yards",
          "20 cubic yards",
          "270 cubic yards"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Volume = 60 × 3 × 1.5 = 270 cubic feet; 270 ÷ 27 = 10 cubic yards. (b) 15 cubic yards is 405 cubic feet — too much. (c) 20 cubic yards is 540 cubic feet — double. (d) 270 is the volume in cubic feet, not cubic yards."
      },
      {
        "module": 3,
        "q": "A slab 24 feet by 18 feet, 6 inches thick, contains about:",
        "choices": [
          "6 cubic yards",
          "8 cubic yards",
          "12 cubic yards",
          "16 cubic yards"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Area = 24 × 18 = 432 square feet; 6 inches = 0.5 feet, so volume = 432 × 0.5 = 216 cubic feet; 216 ÷ 27 = 8 cubic yards. (a) 6 cubic yards is 162 cubic feet — too little. (c) 12 cubic yards is 324 cubic feet — too much. (d) 16 cubic yards is 432 cubic feet — the area, not the volume."
      },
      {
        "module": 3,
        "q": "A wall 60 feet long and 9 feet high, formed on both sides, needs formwork of:",
        "choices": [
          "540 square feet",
          "1,080 square feet",
          "2,160 square feet",
          "270 square feet"
        ],
        "answer": 1,
        "explanation": "Correct: (b). One side = 60 × 9 = 540 square feet; both sides = 540 × 2 = 1,080 square feet. (a) 540 is one side only. (c) 2,160 doubles it again. (d) 270 is half of one side."
      },
      {
        "module": 3,
        "q": "A beam needs 8 #6 bars, each 20 feet long. The rebar weighs about:",
        "choices": [
          "120 pounds",
          "240 pounds",
          "400 pounds",
          "480 pounds"
        ],
        "answer": 1,
        "explanation": "Correct: (b). #6 rebar weighs 1.502 pounds per foot; 8 bars × 20 feet = 160 feet; 160 × 1.502 = 240 pounds. (a) 120 pounds is half the weight. (c) 400 pounds is far too much. (d) 480 pounds is double."
      },
      {
        "module": 4,
        "q": "A wall 24 feet long framed at 16 inches on center needs about how many studs?",
        "choices": [
          "16 studs",
          "19 studs",
          "24 studs",
          "32 studs"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 24 feet = 288 inches; 288 ÷ 16 = 18 spaces, plus 1 = 19 studs. (a) 16 is the spacing, not the count. (c) 24 is the wall length in feet, not the stud count. (d) 32 would be the count at about 9 inches on center."
      },
      {
        "module": 4,
        "q": "A room is 10 feet by 12 feet with 8-foot ceilings. How many 4-by-8-foot drywall sheets cover the four walls?",
        "choices": [
          "8 sheets",
          "11 sheets",
          "14 sheets",
          "22 sheets"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Perimeter = 2 × (10 + 12) = 44 feet; wall area = 44 × 8 = 352 square feet; each sheet covers 32 square feet; 352 ÷ 32 = 11 sheets. (a) 8 sheets cover only 256 square feet. (c) 14 sheets would cover 448 square feet — too many. (d) 22 sheets is double the need."
      },
      {
        "module": 4,
        "q": "A floor 20 feet by 25 feet needs flooring with 5% waste. How many square feet should be ordered?",
        "choices": [
          "500 square feet",
          "525 square feet",
          "550 square feet",
          "600 square feet"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Area = 20 × 25 = 500 square feet; 500 × 1.05 = 525 square feet. (a) 500 is the area with no waste — the installer will run short. (c) 550 is 10% waste, more than the 5% allowed. (d) 600 is 20% waste, far too much."
      },
      {
        "module": 4,
        "q": "A wall of 200 square feet needs two coats of paint at 350 square feet per gallon per coat. How many gallons are needed?",
        "choices": [
          "1 gallon",
          "2 gallons",
          "3 gallons",
          "4 gallons"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Two coats = 200 × 2 = 400 square feet; 400 ÷ 350 = 1.14 gallons, rounded up to 2 gallons — paint is bought by the whole gallon. (a) 1 gallon covers only 350 square feet, less than the 400 needed. (c) 3 gallons is more than needed. (d) 4 gallons is double."
      },
      {
        "module": 4,
        "q": "Baseboard for a 14-by-16-foot room, with 10% waste, is:",
        "choices": [
          "60 linear feet",
          "66 linear feet",
          "70 linear feet",
          "76 linear feet"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Perimeter = 2 × (14 + 16) = 60 linear feet; 60 × 1.10 = 66 linear feet. (a) 60 is the perimeter with no waste. (c) 70 is not the math. (d) 76 is far too much."
      },
      {
        "module": 5,
        "q": "A takeoff line is 25 cubic yards of concrete at $150 per cubic yard. The cost is:",
        "choices": [
          "$3,750",
          "$3,500",
          "$4,000",
          "$375"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Cost = quantity × unit price = 25 × $150 = $3,750. (b) $3,500 is not the multiplication. (c) $4,000 is not the multiplication. (d) $375 is the price for 2.5 yards, not 25."
      },
      {
        "module": 5,
        "q": "A laborer is paid $22 an hour and the labor burden is 40%. The laborer costs the company:",
        "choices": [
          "$22 an hour",
          "$30.80 an hour",
          "$44 an hour",
          "$8.80 an hour"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Burden = $22 × 0.40 = $8.80; total cost = $22 + $8.80 = $30.80 an hour. (a) $22 is the wage, not the cost. (c) $44 is double the wage. (d) $8.80 is the burden alone."
      },
      {
        "module": 5,
        "q": "A crew costs $2,000 a day and pours 20 cubic yards of concrete a day. The labor unit price per cubic yard is:",
        "choices": [
          "$100 per cubic yard",
          "$50 per cubic yard",
          "$200 per cubic yard",
          "$2,000 per cubic yard"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Unit price = daily cost ÷ daily production = $2,000 ÷ 20 = $100 per cubic yard. (b) $50 would be the price if the crew poured 40 yards a day. (c) $200 would be the price if the crew poured 10 yards a day. (d) $2,000 is the daily cost, not the unit price."
      },
      {
        "module": 5,
        "q": "A material quote is three months old and prices have been rising. The estimator should:",
        "choices": [
          "Use the old quote, because a quote is a quote",
          "Get a current quote before pricing",
          "Add 50% to the old quote",
          "Use a five-year-old price book instead"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Prices need a source and a date — a three-month-old quote in a rising market is stale, and the supplier should be asked again. (a) An old quote in a rising market underprices the job. (c) Adding 50% is a guess, not a price. (d) A five-year-old price book is even staler."
      },
      {
        "module": 6,
        "q": "Direct and indirect costs total $250,000. Overhead is 10% and profit is 5%. The bid price is:",
        "choices": [
          "$287,500",
          "$288,750",
          "$275,000",
          "$262,500"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Add overhead: $250,000 × 1.10 = $275,000; add profit: $275,000 × 1.05 = $288,750. (a) $287,500 adds 15% flat without compounding. (c) $275,000 adds overhead only. (d) $262,500 adds only 5%."
      },
      {
        "module": 6,
        "q": "An estimator finds a multiplication error that raises the bid by $8,000, the day before the deadline. What should they do?",
        "choices": [
          "Submit the bid anyway, because the deadline is near",
          "Fix the error, re-check the math, and submit the corrected bid",
          "Hide the error by lowering another line by $8,000",
          "Submit the bid and tell the client later"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A known error must be fixed and the math re-checked before submission — a bid with a known error is a bid that loses money or loses the job. (a) Submitting a known error is dishonest and costly. (c) Lowering another line to offset the error creates a second error. (d) Telling the client later is too late — the price is already submitted."
      },
      {
        "module": 6,
        "q": "A bid includes a $5,000 allowance for light fixtures the owner has not yet chosen. The allowance means:",
        "choices": [
          "The fixtures are included at $5,000 and the price is adjusted when the owner chooses",
          "The fixtures are free",
          "The fixtures are excluded from the bid",
          "The bid is $5,000 too high"
        ],
        "answer": 0,
        "explanation": "Correct: (a). An allowance carries money for an unpicked item; when the owner chooses, the price is adjusted up or down by the difference. (b) The fixtures are not free — the allowance is real money. (c) The fixtures are not excluded; the allowance is the placeholder for them. (d) The allowance is not an overcharge — it is a defined sum for an undefined item."
      },
      {
        "module": 6,
        "q": "A bidder's price is 25% below the next lowest bid. The most likely explanation the client should check for is:",
        "choices": [
          "The bidder is simply more efficient",
          "Missing scope or a math error in the low bid",
          "The bidder wants the job badly",
          "The other bidders are all overpriced"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A bid far below the others is a warning sign — it may be missing scope or contain a mistake, and the client should ask the bidder to confirm it. (a) Efficiency rarely explains a 25% gap. (c) Wanting the job does not change the cost of the work. (d) All the other bidders being overpriced is far less likely than one bid being wrong."
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
        "q": "A contractor is building a detached garage and needs the total concrete for the footings. The first step in the takeoff is to:",
        "choices": [
          "Order the concrete",
          "Measure the footing lengths and sizes from the drawings",
          "Ask the client how much concrete they want",
          "Guess from the size of the garage"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The takeoff starts by measuring the footing lengths, widths, and depths from the drawings — the quantities come from the documents, not from a guess. (a) Ordering comes after the takeoff is priced. (c) The client does not set the footing quantities. (d) Guessing is not a takeoff."
      },
      {
        "module": 1,
        "q": "An estimator counts 18 windows on the plan but the window schedule lists 20. The correct response is to:",
        "choices": [
          "Price 18 windows",
          "Price 20 windows",
          "Reconcile the count and ask the designer if it cannot be resolved",
          "Price 19 windows, the average"
        ],
        "answer": 2,
        "explanation": "Correct: (c). A disagreement between the plan and the schedule must be reconciled — recount from the drawings, and ask the designer if the count cannot be resolved. (a) Pricing 18 may miss two windows. (b) Pricing 20 may add two windows that do not exist. (d) Averaging gives a count that exists on no document."
      },
      {
        "module": 1,
        "q": "Which of these is an indirect cost on a job?",
        "choices": [
          "Site supervision",
          "Lumber delivered to the site",
          "Concrete in the footings",
          "Rebar in the walls"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Site supervision supports the job but does not go into the building — it is an indirect cost. (b) Lumber is a direct material cost. (c) Concrete is a direct material cost. (d) Rebar is a direct material cost."
      },
      {
        "module": 2,
        "q": "A site plan shows the building 20 feet from the property line. The site plan's main purpose is to:",
        "choices": [
          "Show where the building sits on the lot",
          "Show the wall framing",
          "Show the roof structure",
          "Show the interior finishes"
        ],
        "answer": 0,
        "explanation": "Correct: (a). The site plan shows the building's position on the lot — setbacks, driveways, and utilities. (b) Wall framing is on the framing plans. (c) The roof structure is on the roof plan. (d) Finishes are in the finish schedule."
      },
      {
        "module": 2,
        "q": "A drawing note reads 'TYP' next to a detail. 'TYP' means:",
        "choices": [
          "Temporary",
          "Typical — the detail applies everywhere the same condition occurs",
          "Type",
          "Total"
        ],
        "answer": 1,
        "explanation": "Correct: (b). TYP means typical: the detail is repeated wherever the same condition occurs, without redrawing it each time. (a) Temporary is not what TYP means. (c) Type is not the abbreviation's meaning. (d) Total is not the abbreviation's meaning."
      },
      {
        "module": 2,
        "q": "The legend on a drawing shows a dashed line as a hidden pipe. The legend's job is to:",
        "choices": [
          "Explain the symbols used on the drawings",
          "Show the construction schedule",
          "List the materials and their prices",
          "Show the permit number"
        ],
        "answer": 0,
        "explanation": "Correct: (a). The legend explains what each symbol, line, and abbreviation on the drawings means. (b) The schedule is a separate document. (c) Materials and prices are in the estimate, not the legend. (d) The permit number is on the permit, not the legend."
      },
      {
        "module": 3,
        "q": "A footing 50 feet long, 2.5 feet wide, and 1 foot deep contains:",
        "choices": [
          "125 cubic feet",
          "150 cubic feet",
          "100 cubic feet",
          "250 cubic feet"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Volume = 50 × 2.5 × 1 = 125 cubic feet. (b) 150 cubic feet is not the multiplication. (c) 100 cubic feet is too little. (d) 250 cubic feet is double."
      },
      {
        "module": 3,
        "q": "A slab 40 feet by 30 feet, 4 inches thick, contains about:",
        "choices": [
          "10 cubic yards",
          "15 cubic yards",
          "20 cubic yards",
          "25 cubic yards"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Area = 40 × 30 = 1,200 square feet; 4 inches = 1/3 foot, so volume = 1,200 × 1/3 = 400 cubic feet; 400 ÷ 27 = 14.8, about 15 cubic yards. (a) 10 cubic yards is 270 cubic feet — too little. (c) 20 cubic yards is 540 cubic feet — too much. (d) 25 cubic yards is 675 cubic feet — far too much."
      },
      {
        "module": 3,
        "q": "A wall 30 feet long needs #4 bars at 12 inches on center. How many bars are needed?",
        "choices": [
          "30 bars",
          "31 bars",
          "32 bars",
          "36 bars"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 30 feet at 12 inches on center = 30 spaces, plus 1 = 31 bars. (a) 30 is the number of spaces, not bars — the first bar is forgotten. (c) 32 is one too many. (d) 36 would be the count at 10 inches on center."
      },
      {
        "module": 4,
        "q": "A wall 32 feet long framed at 16 inches on center needs about how many studs?",
        "choices": [
          "24 studs",
          "25 studs",
          "32 studs",
          "48 studs"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 32 feet = 384 inches; 384 ÷ 16 = 24 spaces, plus 1 = 25 studs. (a) 24 is the number of spaces, not studs. (c) 32 is the wall length in feet, not the stud count. (d) 48 would be the count at about 8 inches on center."
      },
      {
        "module": 4,
        "q": "A room 16 feet by 20 feet needs flooring with 5% waste. How many square feet should be ordered?",
        "choices": [
          "320 square feet",
          "336 square feet",
          "352 square feet",
          "400 square feet"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Area = 16 × 20 = 320 square feet; 320 × 1.05 = 336 square feet. (a) 320 is the area with no waste. (c) 352 is 10% waste. (d) 400 is 25% waste, far too much."
      },
      {
        "module": 4,
        "q": "A ceiling 15 feet by 18 feet needs drywall. How many 4-by-8-foot sheets are needed?",
        "choices": [
          "8 sheets",
          "9 sheets",
          "10 sheets",
          "12 sheets"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Area = 15 × 18 = 270 square feet; each sheet covers 32 square feet; 270 ÷ 32 = 8.44, rounded up to 9 sheets. (a) 8 sheets cover only 256 square feet — short of the 270 needed. (c) 10 sheets is more than needed. (d) 12 sheets is far more than needed."
      },
      {
        "module": 5,
        "q": "A takeoff line is 60 square feet of formwork at $8 per square foot. The cost is:",
        "choices": [
          "$480",
          "$680",
          "$400",
          "$48"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Cost = 60 × $8 = $480. (b) $680 is not the multiplication. (c) $400 is the price for 50 square feet. (d) $48 is the price for 6 square feet."
      },
      {
        "module": 5,
        "q": "An operator is paid $35 an hour with 50% labor burden. The operator costs the company:",
        "choices": [
          "$35 an hour",
          "$52.50 an hour",
          "$70 an hour",
          "$17.50 an hour"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Burden = $35 × 0.50 = $17.50; total = $35 + $17.50 = $52.50 an hour. (a) $35 is the wage, not the cost. (c) $70 is double the wage. (d) $17.50 is the burden alone."
      },
      {
        "module": 5,
        "q": "A crew costs $2,400 a day and frames 120 square feet of wall a day. The labor unit price is:",
        "choices": [
          "$20 per square foot",
          "$12 per square foot",
          "$24 per square foot",
          "$200 per square foot"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Unit price = $2,400 ÷ 120 = $20 per square foot. (b) $12 is not the division. (c) $24 is not the division. (d) $200 is not the division."
      },
      {
        "module": 5,
        "q": "An owned excavator sits idle on a job for a week. The cost that continues while it sits is:",
        "choices": [
          "Owning cost — depreciation, interest, insurance, and storage",
          "Fuel cost",
          "The operator's wage",
          "Nothing — an idle machine costs nothing"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Owning cost continues whether the machine works or not — that is why a machine delivered early and parked costs money. (b) Fuel is only used when the machine runs. (c) The operator is not paid to run a parked machine. (d) An idle owned machine still costs its owning rate."
      },
      {
        "module": 6,
        "q": "Direct costs are $60,000, indirect costs are $15,000, overhead is 10%, and profit is 10%. The bid price is:",
        "choices": [
          "$90,750",
          "$82,500",
          "$75,000",
          "$99,000"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Direct plus indirect = $75,000; × 1.10 for overhead = $82,500; × 1.10 for profit = $90,750. (b) $82,500 adds overhead only. (c) $75,000 is the cost with no markup. (d) $99,000 is not the math."
      },
      {
        "module": 6,
        "q": "A bid form lists an alternate price of $12,000 for a deck the owner may add. The alternate means:",
        "choices": [
          "The deck is included in the bid",
          "The owner may add the deck at $12,000",
          "The deck is excluded forever",
          "The $12,000 is a guess"
        ],
        "answer": 1,
        "explanation": "Correct: (b). An alternate is a price for an option the owner may or may not take — if the owner takes it, the price is $12,000. (a) The deck is not included unless the owner takes the alternate. (c) The deck is not excluded forever — the alternate is the price to add it. (d) The alternate is a priced option, not a guess."
      },
      {
        "module": 6,
        "q": "A subcontractor's quote covers only the labor for the plumbing, not the fixtures. The estimator should:",
        "choices": [
          "Treat the quote as complete and price it as the full plumbing cost",
          "Add the fixture cost from a supplier quote, because the subcontractor's quote is incomplete",
          "Exclude plumbing from the bid",
          "Double the subcontractor's quote"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The quote is incomplete — it covers labor only — so the fixtures must be priced from a supplier quote and added. (a) Treating it as complete underprices the plumbing. (c) Excluding plumbing leaves a whole trade out of the bid. (d) Doubling the quote is a guess, not a price."
      },
      {
        "module": 7,
        "q": "A contract is lump sum, and the concrete costs $5,000 more than estimated. Who bears the extra cost?",
        "choices": [
          "The owner",
          "The contractor",
          "The architect",
          "The concrete supplier"
        ],
        "answer": 1,
        "explanation": "Correct: (b). In a lump sum contract the contractor agreed to a fixed price and carries the cost risk. (a) The owner carries the cost risk in a cost-plus contract. (c) The architect does not carry construction cost risk. (d) The supplier's price is its own — the contractor bears the difference."
      },
      {
        "module": 7,
        "q": "A cost-plus contract has a fee of 10% and the actual cost of the work is $200,000. The contractor's fee is:",
        "choices": [
          "$20,000",
          "$10,000",
          "$200,000",
          "$2,000"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Fee = 10% of $200,000 = $20,000. (b) $10,000 is 5%. (c) $200,000 is the cost, not the fee. (d) $2,000 is 1%."
      },
      {
        "module": 7,
        "q": "The owner asks for a wall to be moved after the contract is signed. The contractor's first step is to:",
        "choices": [
          "Do the work and bill the owner later",
          "Price the change and get a written change order approved before doing the work",
          "Refuse to do the work",
          "Do the work for free"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A change must be priced and approved in writing before the work starts — work without a change order is work done for free. (a) Billing later has no paper behind it. (c) Refusing is not the answer — changes are normal. (d) Doing it free loses the cost of the work."
      },
      {
        "module": 7,
        "q": "A payment application is for $50,000 and retainage is 10%. The owner pays:",
        "choices": [
          "$45,000",
          "$50,000",
          "$5,000",
          "$55,000"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Retainage of 10% = $5,000 held back; $50,000 − $5,000 = $45,000 paid. (b) $50,000 ignores the retainage. (c) $5,000 is the retainage itself, not the payment. (d) $55,000 adds the retainage instead of holding it back."
      },
      {
        "module": 8,
        "q": "A job's foundation is the common predecessor. After it, three chains run: framing takes 12 days, roofing takes 8 days, and electrical takes 14 days. The critical path runs through:",
        "choices": [
          "Framing",
          "Roofing",
          "Electrical",
          "The foundation alone"
        ],
        "answer": 2,
        "explanation": "Correct: (c). The critical path is the longest chain — electrical at 14 days, after the foundation — and it decides the finish date. (a) Framing at 12 days is shorter and has 2 days of float. (b) Roofing at 8 days is the shortest and has 6 days of float. (d) The foundation is on every chain, but the critical path is the longest full chain, foundation plus electrical."
      },
      {
        "module": 8,
        "q": "An activity lasts 6 days with 2 days of total float. It slips by 5 days. The job is delayed by:",
        "choices": [
          "0 days",
          "2 days",
          "3 days",
          "5 days"
        ],
        "answer": 2,
        "explanation": "Correct: (c). The 2 days of float absorb the first 2 days of the slip; the remaining 3 days delay the job. (a) 0 days would be the answer if the slip were within the float. (b) 2 days is the float, not the delay. (d) 5 days ignores the float."
      },
      {
        "module": 8,
        "q": "Two activities must start together: the electrician and the plumber begin rough-in on the same day on different floors. This is a:",
        "choices": [
          "Finish-to-start dependency",
          "Start-to-start dependency",
          "Finish-to-finish dependency",
          "Start-to-finish dependency"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Start-to-start means the successor starts when the predecessor starts — the two rough-ins begin together. (a) Finish-to-start would mean the second waits for the first to finish. (c) Finish-to-finish links their finish dates, not their starts. (d) Start-to-finish is rare and usually a sign the logic is wrong."
      },
      {
        "module": 8,
        "q": "The critical path has slipped 3 days and the owner will not extend the completion date. The safest recovery is to:",
        "choices": [
          "Crash the schedule by adding resources to critical activities",
          "Fast track by overlapping activities planned in sequence",
          "Do nothing and hope",
          "Cut work out of the scope"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Crashing adds resources to shorten critical activities — it costs money but is safe. (b) Fast tracking is cheaper but adds risk, because work done out of order can clash. (c) Doing nothing leaves the job 3 days late. (d) Cutting scope changes the contract, which the contractor cannot do alone."
      },
      {
        "module": 9,
        "q": "A two-story duplex is being built. Which code applies?",
        "choices": [
          "The IRC",
          "The IBC",
          "Neither code",
          "Both codes at once"
        ],
        "answer": 0,
        "explanation": "Correct: (a). The IRC covers one- and two-family dwellings up to three stories — a duplex is a two-family dwelling. (b) The IBC covers buildings outside the IRC, such as apartments and commercial buildings. (c) A code always applies. (d) One code governs the dwelling; the other does not apply at the same time."
      },
      {
        "module": 9,
        "q": "A city has adopted the 2021 IBC with an amendment raising the wind load. A builder pricing a job in that city must use:",
        "choices": [
          "The newest 2024 IBC",
          "The 2021 IBC as amended locally",
          "The 2018 IBC",
          "The IRC instead"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The adopted edition, with its local amendments, is the law in that place. (a) The newest edition is not law until adopted. (c) The 2018 IBC is not the adopted edition. (d) The IRC is the residential code, not the code for this building."
      },
      {
        "module": 9,
        "q": "A fire separation wall between two apartments is a requirement of the code's:",
        "choices": [
          "Fire provisions",
          "Energy provisions",
          "Accessibility provisions",
          "Egress provisions"
        ],
        "answer": 0,
        "explanation": "Correct: (a). A fire separation wall resists the spread of fire between units — it is a fire provision. (b) Energy provisions cover insulation and efficiency, not fire separation. (c) Accessibility covers use by people with disabilities. (d) Egress covers exits, not the wall between units."
      },
      {
        "module": 10,
        "q": "A builder submits drawings and the plan reviewer asks for corrections to the stair design. The builder should:",
        "choices": [
          "Build the stairs as drawn anyway",
          "Correct the drawings and resubmit before the permit is issued",
          "Ignore the reviewer",
          "Start building and fix the stairs later"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Plan review corrections must be made and resubmitted — the permit is only issued for drawings that comply with the code. (a) Building as drawn violates the reviewer's correction. (c) The reviewer enforces the code and cannot be ignored. (d) Starting before the permit is issued risks a stop-work order."
      },
      {
        "module": 10,
        "q": "The framing inspection must happen:",
        "choices": [
          "Before the framing is covered by drywall or sheathing",
          "After the roof shingles are installed",
          "After the final inspection",
          "Before the footing is poured"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Framing is inspected while it is visible — before it is covered. (b) After the shingles is far too late; the framing is hidden by then. (c) The final inspection is the last step, not the framing step. (d) The footing is poured before the framing exists."
      },
      {
        "module": 10,
        "q": "The final inspection fails because a handrail is missing. The builder should:",
        "choices": [
          "Install the handrail and call for a re-inspection",
          "Ask for the certificate of occupancy anyway",
          "Cover the stair with paint",
          "Ignore the failure"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Fix the correction and call for a re-inspection — the correction is the builder's cost and the CO waits for it. (b) The CO cannot be issued while the final inspection has failed. (c) Paint does not replace a handrail. (d) Ignoring a failed inspection leaves the job unfinished."
      },
      {
        "module": 11,
        "q": "The concrete truck is due at 9 a.m. but the crew arrives at 7 a.m. The superintendent's job before 9 is to:",
        "choices": [
          "Send the crew home",
          "Prepare the site, hold the toolbox talk, and check the forms and rebar",
          "Start pouring without the concrete",
          "Wait idle with the crew"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The superintendent uses the time to prepare — the site walk, the toolbox talk, and a check of the forms and rebar before the pour. (a) Sending the crew home wastes the morning. (c) Pouring without concrete is impossible. (d) Waiting idle wastes paid hours."
      },
      {
        "module": 11,
        "q": "A subcontractor's crew is working without hard hats. The superintendent should:",
        "choices": [
          "Stop the work and enforce the rule",
          "Ignore it, because it is the subcontractor's problem",
          "Note it for the end of the week",
          "Let the subcontractor's foreman decide"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Safety is the superintendent's first job, and the rules apply to everyone on the site — the work stops until the crew is protected. (b) It is everyone's problem on the superintendent's site. (c) Waiting until the end of the week leaves the hazard in place. (d) The foreman has already failed to enforce the rule."
      },
      {
        "module": 11,
        "q": "A delivery of drywall arrives a day early and there is no dry place to store it. The superintendent should:",
        "choices": [
          "Stack it in the rain",
          "Arrange protected storage or reschedule the delivery",
          "Install it immediately, even though the framing is not inspected",
          "Leave it on the street"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Drywall ruined by rain is a loss — it must be stored dry, or the delivery must be moved. (a) Stacking it in the rain destroys it. (c) Installing it before the framing inspection hides the framing and creates a larger failure. (d) Leaving it on the street risks theft, damage, and a citation."
      },
      {
        "module": 12,
        "q": "The punch list has 12 items. Ten are done. The job is:",
        "choices": [
          "Finished",
          "Not finished until all 12 items are done",
          "Finished enough for the owner to move in",
          "Ready for the certificate of occupancy"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A job is not finished until the punch list is empty — ten of twelve is not done. (a) Finished means every item is done. (c) 'Finished enough' is not finished. (d) The CO requires the final inspection to pass, which requires the punch list complete."
      },
      {
        "module": 12,
        "q": "A job's estimated labor was $40,000 and actual labor was $44,000. The variance is:",
        "choices": [
          "$4,000 over budget",
          "$4,000 under budget",
          "On budget",
          "$44,000 over budget"
        ],
        "answer": 0,
        "explanation": "Correct: (a). $44,000 − $40,000 = $4,000 over the estimate. (b) Under budget would mean actual was less than estimated. (c) On budget would mean actual equaled the estimate. (d) $44,000 is the actual cost, not the variance."
      },
      {
        "module": 12,
        "q": "A manufacturer's roof warranty is 20 years. The contractor's workmanship warranty is 1 year. A leak caused by poor installation in year 2 is covered by:",
        "choices": [
          "The manufacturer's warranty",
          "The contractor's warranty",
          "Neither — the installation warranty has expired and the product warranty does not cover installation",
          "The owner's insurance, always"
        ],
        "answer": 2,
        "explanation": "Correct: (c). The contractor's 1-year workmanship warranty has expired, and the manufacturer's warranty covers product defects, not poor installation — so neither warranty covers this leak. (a) The manufacturer's warranty covers the product, not the installation. (b) The contractor's warranty lasted one year. (d) Insurance may or may not cover it, and 'always' is wrong."
      },
      {
        "module": 12,
        "q": "A small contractor is offered a job twice as large as any job it has done, at a price that leaves almost no profit. The best advice is to:",
        "choices": [
          "Take it for the reputation",
          "Turn it down or re-price it, because steady growth beats a job that can break the company",
          "Take it and cut corners to make the profit",
          "Take it and hope the estimate was wrong"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A job the company cannot staff, outside its experience, and priced too low to make money is growth into trouble — the best growth is steady. (a) Reputation comes from finishing well, not from taking a job that fails. (c) Cutting corners destroys the reputation and the work. (d) Hoping the estimate was wrong is not a plan."
      }
    ]
  }
};
