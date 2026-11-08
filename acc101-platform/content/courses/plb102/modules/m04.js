// plb102 - Module 4: Geometry for Plumbers: Area, Volume & Pipe Capacity
module.exports = {
  "number": 4,
  "slug": "geometry-plumbers-area-volume-pipe-capacity",
  "title": "Geometry for Plumbers: Area, Volume & Pipe Capacity",
  "estTime": "3–4 hours",
  "objectives": [
    "Calculate the area of rectangles and circles, including pipe cross-sections.",
    "Calculate the volume of a cylinder and the capacity of a pipe in gallons.",
    "Use pi (3.1416) correctly in circle and cylinder problems.",
    "Convert cubic feet to gallons (1 cubic foot = 7.48 gallons) and cubic inches to gallons (231 cubic inches = 1 gallon).",
    "Solve trade problems: tank capacity, pipe volume, and how much water a run holds."
  ],
  "sections": [
    {
      "heading": "Area: Rectangles and Circles",
      "html": "<p>Area is the size of a surface, measured in square units. A <strong>rectangle's</strong> area is length × width: a trench 10 feet long and 2 feet wide covers 20 square feet. A <strong>circle's</strong> area is π × radius², where π (pi) is 3.1416 and the radius is half the diameter. A pipe with an inside diameter of 4 inches has a radius of 2 inches, so its cross-sectional area is 3.1416 × 2² = 3.1416 × 4 = 12.57 square inches.</p>\n<p>The common error is using the diameter where the radius belongs. The formula needs the radius — half the diameter. A 4-inch pipe's area is not 3.1416 × 16; it is 3.1416 × 4. Write the radius down first, then square it, then multiply by pi.</p>\n<p>Area answers questions like: how much floor does a water heater's footprint cover, how big is the hole a pipe needs through a wall, and how much surface is there to paint or insulate.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Circle area = π × radius². Radius is half the diameter — write it down first, then square it.</div>"
    },
    {
      "heading": "Volume of a Cylinder: The Pipe's Capacity",
      "html": "<p>A pipe is a cylinder, and its volume is its cross-sectional area × its length: <strong>V = π × r² × L</strong>. The units must match — if the radius is in inches, the length must be in inches too. A 10-foot length of 2-inch inside-diameter pipe: radius 1 inch, area 3.1416 square inches, length 120 inches. Volume = 3.1416 × 1 × 120 = 377 cubic inches.</p>\n<p><strong>Worked example — gallons in a pipe:</strong> One gallon is 231 cubic inches, so 377 ÷ 231 = 1.63 gallons in that 10-foot run of 2-inch pipe. <strong>Worked example — a tank:</strong> A cylindrical tank is 4 feet in diameter and 5 feet tall. Radius = 2 feet. Volume = 3.1416 × 2² × 5 = 3.1416 × 4 × 5 = 62.83 cubic feet. One cubic foot holds 7.48 gallons, so the tank holds 62.83 × 7.48 = 470 gallons (rounded).</p>\n<p>These two conversions are the ones to memorize: <strong>1 cubic foot = 7.48 gallons</strong> and <strong>231 cubic inches = 1 gallon</strong>. With them, any pipe or tank becomes a number of gallons — and gallons are what customers, inspectors, and water heaters are rated in.</p>"
    },
    {
      "heading": "Pipe Capacity: Comparing Sizes",
      "html": "<p>Pipe capacity grows with the square of the diameter, not with the diameter itself. Doubling a pipe's diameter quadruples its capacity: a 4-inch pipe holds four times the water of a 2-inch pipe of the same length, not twice as much. That is why upsizing a pipe by one size is a bigger change than it looks — and why a small restriction in a pipe (a burr, a kink, a partially closed valve) costs far more flow than its size suggests.</p>\n<p><strong>Worked example:</strong> A 100-foot run of 1-inch inside-diameter pipe holds: radius 0.5 inch, area 3.1416 × 0.25 = 0.785 square inches, length 1,200 inches. Volume = 0.785 × 1,200 = 942 cubic inches = 942 ÷ 231 = 4.08 gallons. The same 100 feet in 2-inch pipe: area 3.1416 square inches, volume 3,769 cubic inches = 16.3 gallons — four times as much, from double the diameter.</p>\n<p>Capacity matters for drain sizing, water-heater recovery, and pressure: a long small pipe loses pressure to friction, and a tank's capacity decides whether the morning showers all run hot.</p>"
    },
    {
      "heading": "Volume of Boxes and Rectangular Tanks",
      "html": "<p>Rectangular volumes are simpler: length × width × height. A sump pit 2 feet square and 3 feet deep holds 2 × 2 × 3 = 12 cubic feet = 12 × 7.48 = 89.8 gallons. A trench 20 feet long, 2 feet wide, and 3 feet deep is 20 × 2 × 3 = 120 cubic feet of earth to move — and that number is what the excavation and the spoil pile are priced from.</p>\n<p>Keep the units consistent: feet with feet, inches with inches. Mixing them is the most common volume error — a radius in inches times a length in feet gives a number with no meaning. Convert first, then calculate, then convert the answer into the units the job needs.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Rectangle area = length × width. Circle area = π × radius² (radius = half the diameter).</li>\n<li>Cylinder volume = π × r² × length. Keep all units the same before calculating.</li>\n<li>1 cubic foot = 7.48 gallons. 231 cubic inches = 1 gallon.</li>\n<li>Capacity grows with the square of the diameter: double the diameter, four times the volume.</li>\n<li>Rectangular volume = length × width × height.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Using the diameter as the radius. A 4-inch pipe's radius is 2 inches — the area is 3.1416 × 4 = 12.57 square inches, not 3.1416 × 16.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Mixing inches and feet in one volume calculation. Convert everything to one unit first, then calculate.</div>\n<p><strong>Ready-to-Work link:</strong> If you can find the gallons in a 10-foot run of 2-inch pipe and the capacity of a 4-foot-diameter tank, you have this module. Module 5 uses the same geometry on triangles: the Pythagorean theorem and offsets.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Area",
      "def": "The size of a surface, in square units: rectangle = length × width; circle = π × radius²."
    },
    {
      "term": "Pi",
      "def": "π, about 3.1416 — the ratio of a circle's circumference to its diameter."
    },
    {
      "term": "Radius",
      "def": "Half of a circle's diameter — the distance from the center to the edge."
    },
    {
      "term": "Diameter",
      "def": "The distance across a circle through its center — twice the radius."
    },
    {
      "term": "Circumference",
      "def": "The distance around a circle: π × diameter."
    },
    {
      "term": "Volume",
      "def": "The amount of space inside a shape, in cubic units: cylinder = π × r² × length."
    },
    {
      "term": "Cylinder",
      "def": "A shape with a circular cross-section and a length — a pipe is a cylinder."
    },
    {
      "term": "Cubic foot",
      "def": "A volume of one foot by one foot by one foot; 1 cubic foot = 7.48 gallons."
    },
    {
      "term": "Cubic inch",
      "def": "A volume of one inch by one inch by one inch; 231 cubic inches = 1 gallon."
    },
    {
      "term": "Gallon",
      "def": "A unit of liquid volume; 1 gallon = 231 cubic inches = 0.1337 cubic feet."
    },
    {
      "term": "Pipe capacity",
      "def": "How much water a pipe holds — its internal volume, usually stated in gallons."
    },
    {
      "term": "Cross-section",
      "def": "The area of a pipe cut across its diameter: π × radius²."
    },
    {
      "term": "Square foot",
      "def": "An area of one foot by one foot."
    },
    {
      "term": "Inside diameter",
      "def": "The diameter measured inside the pipe wall — the size that carries the water."
    },
    {
      "term": "Friction loss",
      "def": "Pressure lost as water rubs against the inside of a pipe — greater in long, small pipes."
    }
  ],
  "video": {
    "title": "How to Find the Volume of a Cylinder | Math with Mr. J",
    "embedUrl": "https://www.youtube.com/embed/fGVlL47TKAw",
    "note": "Math with Mr. J works cylinder volume step by step — the same formula this module uses for pipe capacity. Work the pipe example alongside the video.",
    "more": [
      {
        "title": "Pipe Volume Calculation  | Texas Class C Groundwater Math",
        "url": "https://www.youtube.com/watch?v=Ap0nLxyRluU"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A pipe has an inside diameter of 4 inches. What is its cross-sectional area?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Radius = 4 ÷ 2 = 2 inches. Step 2: Area = π × r² = 3.1416 × 2² = 3.1416 × 4 = 12.57 square inches.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> How many gallons are in a 10-foot run of 2-inch inside-diameter pipe?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Radius = 1 inch; area = 3.1416 × 1 = 3.1416 sq in. Step 2: Length = 10 feet = 120 inches. Step 3: Volume = 3.1416 × 120 = 377 cubic inches. Step 4: Gallons = 377 ÷ 231 = 1.63 gallons.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A cylindrical tank is 4 feet in diameter and 5 feet tall. How many gallons does it hold?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Radius = 2 feet. Step 2: Volume = 3.1416 × 2² × 5 = 3.1416 × 4 × 5 = 62.83 cubic feet. Step 3: Gallons = 62.83 × 7.48 = 470 gallons (rounded).</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A 100-foot run of 1-inch pipe holds 4.08 gallons. How much does the same run in 2-inch pipe hold, and why is it not double?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Area of 2-inch pipe = 3.1416 sq in, four times the 1-inch pipe's 0.785 sq in. Step 2: Volume = 3.1416 × 1,200 = 3,769 cubic inches = 16.3 gallons. Step 3: It is four times as much, not double, because capacity grows with the square of the diameter.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A sump pit is 2 feet square and 3 feet deep. How many gallons does it hold?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Volume = 2 × 2 × 3 = 12 cubic feet. Step 2: Gallons = 12 × 7.48 = 89.8 gallons.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A trench is 20 feet long, 2 feet wide, and 3 feet deep. How many cubic feet of earth must be moved?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Volume = 20 × 2 × 3 = 120 cubic feet. Step 2: That is the excavation volume — and the spoil pile is the same 120 cubic feet, loose.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The cross-sectional area of a 4-inch inside-diameter pipe is:",
      "choices": [
        "50.27 square inches",
        "12.57 square inches",
        "25.13 square inches",
        "6.28 square inches"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Radius is 2 inches; π × 2² = 3.1416 × 4 = 12.57. (a) That uses the diameter as the radius (π × 16). (c) That is the circumference (π × 8). (d) That is π × 2, not π × 2²."
    },
    {
      "q": "One cubic foot holds:",
      "choices": [
        "1 gallon",
        "231 gallons",
        "7.48 gallons",
        "3.1416 gallons"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 1 cubic foot = 7.48 gallons. (a) A gallon is 0.1337 cubic feet. (b) 231 is cubic inches per gallon. (d) 3.1416 is pi, not a conversion."
    },
    {
      "q": "A 10-foot run of 2-inch inside-diameter pipe holds about:",
      "choices": [
        "0.5 gallons",
        "1.63 gallons",
        "7.48 gallons",
        "16 gallons"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Volume = 3.1416 × 120 = 377 cubic inches; 377 ÷ 231 = 1.63 gallons. (a) That would be a much smaller pipe. (c) That is one cubic foot. (d) That is about a 100-foot run of 2-inch pipe."
    },
    {
      "q": "Doubling a pipe's diameter multiplies its capacity by:",
      "choices": [
        "2",
        "3",
        "4",
        "8"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Capacity grows with the square of the diameter: 2² = 4. (a) That would be true if capacity grew with diameter itself. (b) There is no factor of 3. (d) 8 is the cube, which applies to volume of a sphere, not a pipe's cross-section."
    },
    {
      "q": "A cylindrical tank 4 feet in diameter and 5 feet tall holds about:",
      "choices": [
        "63 gallons",
        "200 gallons",
        "470 gallons",
        "1,000 gallons"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Volume = 3.1416 × 4 × 5 = 62.83 cubic feet; × 7.48 = 470 gallons. (a) That is the cubic-foot volume, not gallons. (b) That would be a much smaller tank. (d) That would need roughly double the volume."
    },
    {
      "q": "One gallon equals:",
      "choices": [
        "231 cubic inches",
        "100 cubic inches",
        "7.48 cubic inches",
        "12 cubic inches"
      ],
      "answer": 0,
      "explanation": "Correct: (a). 1 gallon = 231 cubic inches. (b) 100 cubic inches is about 0.43 gallons. (c) 7.48 is gallons per cubic foot. (d) 12 cubic inches is about 0.05 gallons."
    },
    {
      "q": "The volume of a cylinder is:",
      "choices": [
        "π × diameter × length",
        "π × radius² × length",
        "2 × π × radius",
        "Length × width × height"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Cylinder volume = cross-sectional area (π × r²) times length. (a) Using the diameter instead of the radius squared gives four times too much. (c) That is the circumference. (d) That is a rectangular volume."
    },
    {
      "q": "A sump pit 2 feet square and 3 feet deep holds about:",
      "choices": [
        "12 gallons",
        "36 gallons",
        "89.8 gallons",
        "150 gallons"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Volume = 12 cubic feet; 12 × 7.48 = 89.8 gallons. (a) That is the cubic-foot volume, not gallons. (b) That would be about 4.8 cubic feet. (d) That would be about 20 cubic feet."
    }
  ],
  "studyGuide": "\n<h3>Module 4 — Geometry for Plumbers: Quick Reference</h3>\n<p><strong>Rectangle area:</strong> Length × width. <strong>Circle area:</strong> π × radius² (radius = half the diameter).</p>\n<p><strong>Cylinder volume:</strong> π × r² × length. Keep all units the same before calculating.</p>\n<p><strong>Conversions:</strong> 1 cubic foot = 7.48 gallons · 231 cubic inches = 1 gallon.</p>\n<p><strong>Capacity rule:</strong> Double the diameter → four times the capacity. Capacity grows with the square of the diameter.</p>\n<p><strong>Rectangular volume:</strong> Length × width × height.</p>\n<p><strong>Watch out:</strong> Diameter is not radius — halve it first. Inches and feet must not mix in one calculation.</p>\n<p><strong>Self-check:</strong> Find the gallons in a 10-foot run of 2-inch pipe. If you get 1.63, you have this module.</p>\n"
};
