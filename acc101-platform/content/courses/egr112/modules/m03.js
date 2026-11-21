// egr112 - Module 3: Materials Selection
module.exports = {
  "number": 3,
  "slug": "materials-selection",
  "title": "Materials Selection",
  "estTime": "3–4 hours",
  "objectives": [
    "Name the main families of engineering materials and their strengths.",
    "Explain stiffness, strength, and toughness in plain words.",
    "Use an Ashby performance index to compare materials.",
    "Explain why material choice is a trade-off, not a search for the best.",
    "Choose a material for a simple part and justify the choice."
  ],
  "sections": [
    {
      "heading": "The Families of Materials",
      "html": "<p>Engineering materials fall into four families. Metals — steel, aluminium, copper, titanium — are strong, stiff, and ductile, and they conduct heat and electricity. Polymers (plastics) — nylon, ABS, polycarbonate — are light, cheap, and easy to shape, but softer and weaker. Ceramics — glass, alumina, silicon carbide — are hard, stiff, and heat-resistant, but brittle. Composites — carbon fibre, fibreglass — combine two materials to get the best of both, such as the stiffness of fibre with the lightness of plastic.</p>\n<p>Each family has a personality: steel is the workhorse, strong and cheap but heavy and rust-prone; aluminium is light and corrosion-resistant but softer; titanium is strong and light but expensive; nylon is tough and slippery but creeps under load; carbon fibre is enormously stiff for its weight but expensive and brittle in impact. Knowing the personalities is the start of selection — the numbers come later.</p>\n"
    },
    {
      "heading": "Stiffness, Strength, and Toughness",
      "html": "<p>Three properties are easily confused. Stiffness is how much a material resists bending or stretching, measured by Young's modulus E — steel is about 200 GPa, aluminium about 70 GPa, nylon about 3 GPa. Strength is how much load a material can carry before it yields or breaks, measured by yield strength and ultimate tensile strength. Toughness is how much energy a material absorbs before it fractures — a tough material bends and dents, a brittle one snaps.</p>\n<p>A stiff material is not necessarily strong, and a strong material is not necessarily tough. Glass is stiff but brittle; rubber is tough but not stiff; a high-strength steel can be strong but less tough than a mild steel. Design needs the right property for the job: a bridge needs stiffness, a crash structure needs toughness, and a lifting hook needs strength.</p>\n"
    },
    {
      "heading": "Ashby Plots and Performance Indexes",
      "html": "<p>Materials are compared on Ashby plots — charts with one property on each axis, such as stiffness against density, with each material as a bubble. Materials that lie in the same region behave alike, and the best material for a job lies at the edge of the chart in the direction you care about. For a light, stiff beam, the performance index is √E ÷ ρ: the higher the index, the better the material for that job.</p>\n<p>Example: steel has E = 200,000 MPa and density 7.8 g/cm³, so its index is √200,000 ÷ 7.8 = 447.2 ÷ 7.8 = 57.3. Aluminium has E = 70,000 MPa and density 2.7 g/cm³, so its index is √70,000 ÷ 2.7 = 264.6 ÷ 2.7 = 98.0. Aluminium wins for a light, stiff beam — it is nearly twice as good as steel per unit weight, even though steel is stiffer in absolute terms. That is the point of an index: it compares materials for the job, not in the abstract.</p>\n"
    },
    {
      "heading": "Selection Is a Trade-Off",
      "html": "<p>There is no best material, only the best material for a job under its constraints. A bicycle frame could be steel (cheap, tough, heavy), aluminium (light, stiff, harder to weld), titanium (light, strong, expensive), or carbon fibre (lightest, stiffest, very expensive and impact-sensitive). The choice depends on the budget, the manufacturing available, the weight target, and the consequences of failure. A child's bike and a racing bike have different answers — and both are right.</p>\n<p>Other factors matter as much as the numbers: can the material be welded, machined, or moulded with the tools available? Will it corrode in its environment? Is it available in the size needed, at a price the project can afford? Is it recyclable, and are there regulations on its use? A material that is perfect on paper but cannot be bought or made is not a choice at all.</p>\n"
    },
    {
      "heading": "A Selection Method and Common Mistakes",
      "html": "<p>A simple selection method is: 1) List the requirements (loads, environment, life, cost). 2) Screen out materials that cannot meet the hard limits (temperature, corrosion, strength). 3) Rank the survivors with a performance index for the job. 4) Check the practical factors (manufacturing, availability, cost). 5) Choose, and document why — so the next person understands the reasoning.</p>\n<p><p><strong>Takeaways:</strong><ul><li>Materials come in four families: metals, polymers, ceramics, and composites.</li><li>Stiffness (E), strength, and toughness are different properties — do not confuse them.</li><li>Ashby performance indexes compare materials for a job: for a light, stiff beam, aluminium (98.0) beats steel (57.3).</li><li>Selection is a trade-off between performance, cost, manufacturing, and environment.</li><li>Screen on hard limits first, then rank with an index, then check the practical factors.</li></ul></p>\n<p><strong>Common mistake:</strong> Picking the strongest material. The strongest material is often heavy, expensive, brittle, or hard to make — the right material is the one that meets the job's requirements at the lowest cost and risk.</p>\n<p><strong>Common mistake:</strong> Confusing stiffness with strength. A part can be stiff enough but too weak, or strong enough but too flexible — check both.</p>\n<p><strong>Ready check:</strong> If you can explain stiffness, strength, and toughness, work out an Ashby index, and justify a material choice, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Metals",
      "def": "Materials such as steel, aluminium, and titanium: strong, stiff, ductile, and conductive."
    },
    {
      "term": "Polymers",
      "def": "Plastics such as nylon and ABS: light, cheap, and easy to shape, but softer and weaker than metals."
    },
    {
      "term": "Ceramics",
      "def": "Materials such as glass and alumina: hard, stiff, and heat-resistant, but brittle."
    },
    {
      "term": "Composites",
      "def": "Materials that combine two others, such as carbon fibre in plastic, to get the best of both."
    },
    {
      "term": "Young's modulus (E)",
      "def": "A measure of stiffness: how much a material resists stretching or bending. Steel is about 200 GPa."
    },
    {
      "term": "Yield strength",
      "def": "The stress at which a material starts to deform permanently."
    },
    {
      "term": "Ultimate tensile strength (Sut)",
      "def": "The maximum stress a material can carry before it breaks."
    },
    {
      "term": "Toughness",
      "def": "How much energy a material absorbs before it fractures; tough materials bend, brittle ones snap."
    },
    {
      "term": "Ductility",
      "def": "How much a material can deform before breaking, usually measured as percentage elongation."
    },
    {
      "term": "Ashby plot",
      "def": "A chart of one material property against another, used to compare materials and find the best for a job."
    },
    {
      "term": "Performance index",
      "def": "A combination of properties, such as √E ÷ ρ, that ranks materials for a specific job."
    },
    {
      "term": "Density",
      "def": "Mass per unit volume, in g/cm³ or kg/m³; lightness is often as important as strength."
    },
    {
      "term": "Corrosion",
      "def": "The chemical attack of a material by its environment, such as steel rusting in water."
    },
    {
      "term": "Creep",
      "def": "Slow deformation of a material under a steady load over a long time, common in polymers at high temperature."
    }
  ],
  "video": {
    "title": "How Mechanical Engineers Select the Right Material",
    "embedUrl": "https://www.youtube.com/embed/jy7XrHhWJUk",
    "note": "How engineers choose materials: properties, trade-offs, and real examples. Note the materials named for each job, then try the Ashby index calculation from this module yourself.",
    "more": [
      {
        "title": "How to select materials using Ashby plots and performance indexes",
        "url": "https://www.youtube.com/watch?v=9RQkvcsRzbo"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A light, stiff beam is needed. Work out the Ashby index √E ÷ ρ for steel (E = 200,000 MPa, ρ = 7.8 g/cm³) and for aluminium (E = 70,000 MPa, ρ = 2.7 g/cm³). Which wins, and by how much?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Steel: √200,000 ÷ 7.8 = 447.2 ÷ 7.8 = 57.3. Step 2: Aluminium: √70,000 ÷ 2.7 = 264.6 ÷ 2.7 = 98.0. Step 3: Aluminium wins, with an index about 1.7 times steel's — it is nearly twice as good for a light, stiff beam. A good answer shows both calculations and the comparison.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A part must be stiff, but it will be dropped often. A designer picks glass because it is very stiff. Explain the mistake.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Glass is stiff but brittle — it has almost no toughness, so it snaps on impact instead of bending. Step 2: A part that is dropped needs toughness, not just stiffness. Step 3: A better choice would be a tough polymer such as polycarbonate, or a metal, which absorbs impact energy by deforming. A good answer distinguishes stiffness from toughness.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A bicycle frame could be steel, aluminium, titanium, or carbon fibre. Explain why there is no single “best” answer, and name one factor that would favour steel.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The best material depends on the job's constraints: budget, weight target, manufacturing available, and consequences of failure. Step 2: Steel is favoured when cost matters and weight does not — it is cheap, tough, easy to weld and repair, and forgiving of damage. Step 3: Carbon fibre wins when weight matters most and cost does not. A good answer explains the trade-off and names a steel-favouring factor.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A steel bracket in a damp environment keeps rusting. Name three ways to deal with the corrosion, and say which is a material change and which are not.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Change the material to stainless steel or aluminium — a material change. Step 2: Coat the steel with paint, galvanising, or plating — a surface treatment, not a material change. Step 3: Design so water drains away instead of pooling, and avoid crevices where water sits — a design change. A good answer gives three real options and labels them.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A polymer gear is chosen for a quiet, cheap mechanism. After a month under load it has deformed and the teeth no longer mesh. What material behaviour is this, and what should have been checked?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: This is creep — slow deformation under a steady load over time, common in polymers. Step 2: The designer should have checked the polymer's creep behaviour at the working temperature and load, and the allowable deformation over the product's life. Step 3: The fix is a stiffer polymer, a filled polymer, a metal gear, or a redesign that reduces the load on the teeth. A good answer names creep and the check.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> List the five steps of the materials selection method from this module, and apply them in one sentence each to choosing a material for a hammer head.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: List requirements — the head must be hard, tough, and heavy enough to strike. Step 2: Screen out materials that cannot meet the hard limits — soft polymers and brittle ceramics are out. Step 3: Rank the survivors — steel ranks high on hardness, toughness, and density. Step 4: Check practical factors — steel is cheap, available, and easy to forge and heat-treat. Step 5: Choose steel and document why. A good answer lists all five steps applied to the hammer.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Which material family is light, cheap, and easy to shape, but softer and weaker than metals?",
      "choices": [
        "Metals",
        "Polymers (plastics)",
        "Ceramics",
        "Composites"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Polymers such as nylon and ABS are light and cheap but softer than metals. (a) is strong and stiff. (c) is hard and brittle. (d) combines materials for high performance."
    },
    {
      "q": "What does Young's modulus (E) measure?",
      "choices": [
        "Strength",
        "Stiffness — how much a material resists stretching or bending",
        "Toughness",
        "Density"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Young's modulus measures stiffness. (a) is measured by yield and ultimate strength. (c) is energy absorbed before fracture. (d) is mass per unit volume."
    },
    {
      "q": "A steel beam has E = 200,000 MPa and density 7.8 g/cm³. What is its Ashby index √E ÷ ρ for a light, stiff beam?",
      "choices": [
        "57.3",
        "98.0",
        "25,641",
        "7.8"
      ],
      "answer": 0,
      "explanation": "Correct: (a). √200,000 ÷ 7.8 = 447.2 ÷ 7.8 = 57.3. (b) is aluminium's index. (c) is E ÷ ρ, not √E ÷ ρ. (d) is just the density."
    },
    {
      "q": "An aluminium beam has E = 70,000 MPa and density 2.7 g/cm³. What is its Ashby index √E ÷ ρ?",
      "choices": [
        "57.3",
        "98.0",
        "25,926",
        "2.7"
      ],
      "answer": 1,
      "explanation": "Correct: (b). √70,000 ÷ 2.7 = 264.6 ÷ 2.7 = 98.0. (a) is steel's index. (c) is E ÷ ρ, not √E ÷ ρ. (d) is just the density."
    },
    {
      "q": "For a light, stiff beam, which material wins between steel (index 57.3) and aluminium (index 98.0)?",
      "choices": [
        "Steel, because it is stiffer in absolute terms",
        "Aluminium, because its index is higher — it is better per unit weight",
        "They tie",
        "Neither — both are wrong for beams"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Aluminium's higher index means it is better for a light, stiff beam, even though steel is stiffer in absolute terms. (a) is wrong: absolute stiffness is not the criterion for a light beam. (c) is wrong: the indexes differ. (d) is wrong: both are used for beams."
    },
    {
      "q": "Glass is very stiff but shatters when dropped. What property does it lack?",
      "choices": [
        "Stiffness",
        "Strength",
        "Toughness — it absorbs almost no energy before fracturing",
        "Density"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Glass is stiff and strong but brittle: it lacks toughness. (a) is wrong: glass is stiff. (b) is wrong: glass is strong in compression. (d) is wrong: density is not the issue."
    },
    {
      "q": "What is creep?",
      "choices": [
        "A material rusting",
        "Slow deformation under a steady load over a long time, common in polymers",
        "A material cracking suddenly",
        "A material getting stiffer with age"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Creep is slow, time-dependent deformation under load. (a) is corrosion. (c) is brittle fracture. (d) is wrong: creep makes a part deform, not stiffen."
    },
    {
      "q": "What is the first step of the materials selection method?",
      "choices": [
        "Rank materials with an index",
        "List the requirements: loads, environment, life, and cost",
        "Choose the cheapest material",
        "Check availability"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Selection starts with requirements, then screening, ranking, and practical checks. (a) is step 3. (c) is wrong: cheapest is not best. (d) is step 4."
    }
  ],
  "studyGuide": "\n<h3>Module 3 — Materials Selection: Quick Reference</h3>\n<p><strong>Core idea:</strong> Name the main families of engineering materials and their strengths.</p>\n<p><strong>Key terms:</strong> Metals · Polymers · Ceramics · Composites · Young's modulus (E) · Yield strength · Ultimate tensile strength (Sut) · Toughness.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Name the main families of engineering materials and their strengths.</li>\n<li>Explain stiffness, strength, and toughness in plain words.</li>\n<li>Use an Ashby performance index to compare materials.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
