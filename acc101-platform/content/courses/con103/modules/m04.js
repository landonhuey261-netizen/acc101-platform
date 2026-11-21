// con103 - Module 4: Lines, Views & Projections
module.exports = {
  "number": 4,
  "slug": "lines-views-projections",
  "title": "Lines, Views & Projections",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain orthographic projection: how a 3D building becomes 2D views.",
    "Describe the three main views: plan, elevation, and section.",
    "Explain first-angle vs. third-angle projection and which one U.S. drawings use.",
    "Describe how a section is cut and what a section marker shows.",
    "Explain how to read a detail callout and follow it to its sheet."
  ],
  "sections": [
    {
      "heading": "Orthographic Projection: Flat Views of a 3D Building",
      "html": "<p>A building is three-dimensional, but paper is two-dimensional, so drawings show the building as a set of flat views. The system is called <strong>orthographic projection</strong>: each view is drawn as if you were looking straight at the building from one direction, with no perspective \u2014 parallel lines stay parallel, and everything is drawn to the same scale. A floor plan is the view from above, an elevation is the view from the side, and a section is the view from inside a cut. Together, the views describe the whole building without a single perspective drawing.</p>\n<p>The views are related: the floor plan and the elevation share the same widths, the elevation and the section share the same heights, and a feature that appears in one view must appear in the others in the same place. When a window is shown on the floor plan, the same window must appear on the elevation at the same position along the wall, and in the section at the same height. Checking a feature across views is how you catch errors \u2014 and how you build a mental picture of the building in three dimensions.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Orthographic views have no perspective \u2014 parallel lines stay parallel. A feature in one view must appear in the others in the same place.</div>"
    },
    {
      "heading": "Plan, Elevation & Section \u2014 The Big Three",
      "html": "<p>The <strong>floor plan</strong> is a horizontal cut through the building, usually about 4 feet above the floor, looking down. The top half of the building is lifted away, and you see the walls as thick lines, the doors and windows as openings, and the rooms as spaces with names and dimensions. It is the builder's main map for layout: where walls go, where openings are, and how big each room is.</p>\n<p>The <strong>elevation</strong> is a flat view of one outside face, looking straight at it. There are usually four: front, back, left, and right (or north, south, east, and west). An elevation shows heights, roof shape and pitch, exterior materials, and window and door positions \u2014 but it shows no depth, so a window that looks close to a corner on the elevation may be on a different wall. The <strong>section</strong> is a vertical cut through the building, looking at the cut face: it shows ceiling heights, floor-to-floor heights, stair clearances, roof construction, and how the parts stack. A section is where the vertical relationships live.</p>\n<p>The three views answer three questions: the plan answers \"where?\", the elevation answers \"what does it look like from outside?\", and the section answers \"how high, and how does it fit together?\" A builder who can only read one of the three can only build one third of the building.</p>"
    },
    {
      "heading": "First-Angle vs. Third-Angle Projection",
      "html": "<p>Orthographic projection comes in two systems: <strong>first-angle</strong> and <strong>third-angle</strong>. In third-angle projection \u2014 the system used in the United States \u2014 the view is placed on the side it is seen from: the top view goes above the front view, and the right-side view goes to the right of the front view. In first-angle projection \u2014 used in much of Europe and Asia \u2014 the views are placed on the opposite side: the top view goes below the front view. The two systems show the same object, but the views sit in different places on the sheet.</p>\n<p>For construction drawings, the distinction matters less than it does for machine drawings, because construction views are named (floor plan, north elevation, section A-A) rather than placed by projection rules. But the title block or the general notes will sometimes state the projection system, and a drawing from a European or Asian manufacturer will use first-angle. If a view seems mirrored or upside down compared with what you expect, check the projection system before assuming the drawing is wrong.</p>\n<p>The practical rule is: trust the labels, not the position. A view labeled \"North Elevation\" is the north face whatever side of the sheet it sits on, and a section labeled \"A-A\" is the cut at line A-A whatever direction the arrow points \u2014 the arrow tells you which way the section looks, and the label tells you where the cut is.</p>"
    },
    {
      "heading": "Section Markers, Detail Callouts & Following References",
      "html": "<p>A <strong>section marker</strong> on a floor plan is a circle split in two with an arrow: the top number is the drawing number, the bottom is the sheet it is on, and the arrow shows the direction the section looks. To read a section, find its marker on the plan, note the sheet, go to that sheet, and find the drawing with that number. The section shows everything the cut passes through \u2014 walls, floors, roof \u2014 plus the parts beyond the cut that are visible from that direction.</p>\n<p>A <strong>detail callout</strong> is a similar circle, often with a leader line, pointing at one small part: a window head, a footing, a wall connection. The callout gives the detail number and the sheet it is on, and the detail itself is drawn at a large scale \u2014 1 1/2 inches = 1 foot, 3 inches = 1 foot, or even full size \u2014 so every layer and fastener can be shown. Details are where the \"how\" lives: the plan says a wall exists, the detail says how it is built.</p>\n<p>Following references is the core skill of this course. Read the plan, follow the section marker to the section, follow the detail callout to the detail, and check the schedule for the door or window the plan tags. Each step adds information, and the building only becomes clear when all the references have been followed. A drawing read without its references is a drawing half-read.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Orthographic projection: flat views with no perspective; parallel lines stay parallel; a feature must appear in every view in the same place.</li>\n<li>Big three: plan (horizontal cut, looking down \u2014 where?), elevation (flat outside view \u2014 what does it look like?), section (vertical cut \u2014 how high, how does it fit?).</li>\n<li>Third-angle projection is used in the U.S.; first-angle in much of Europe and Asia. Trust the labels, not the position.</li>\n<li>Section marker: split circle, top number is the drawing, bottom is the sheet, arrow shows the viewing direction.</li>\n<li>Detail callout: circle with a leader, pointing to a large-scale drawing of one small part \u2014 the \"how\" of the build.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Reading an elevation as if it had depth. An elevation is flat \u2014 a window that looks near a corner may be on a different wall. Check the plan.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Ignoring the arrow on a section marker. The arrow shows which way the section looks \u2014 read it in the right direction or the building is mirrored.</div>\n<p><strong>Ready-to-Work link:</strong> If you can explain plan, elevation, and section, and follow a section marker to its sheet, you have this module. Module 5 reads floor plans in depth.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Orthographic projection",
      "def": "Flat views of a 3D object with no perspective; parallel lines stay parallel."
    },
    {
      "term": "Plan view",
      "def": "A view from above, looking down on the building."
    },
    {
      "term": "Elevation view",
      "def": "A flat view of one outside face of a building."
    },
    {
      "term": "Section view",
      "def": "A view of a vertical cut through a building, looking at the cut face."
    },
    {
      "term": "Third-angle projection",
      "def": "The U.S. system: views are placed on the side they are seen from."
    },
    {
      "term": "First-angle projection",
      "def": "The European/Asian system: views are placed on the opposite side."
    },
    {
      "term": "Section marker",
      "def": "A split circle on a plan: top number is the drawing, bottom is the sheet, arrow shows the viewing direction."
    },
    {
      "term": "Detail callout",
      "def": "A circle with a leader line pointing to a part drawn in detail on another sheet."
    },
    {
      "term": "Cut plane",
      "def": "The imaginary plane where a section or plan cuts through the building."
    },
    {
      "term": "Leader line",
      "def": "A thin line with an arrow pointing at a part, with a note at the other end."
    },
    {
      "term": "Perspective",
      "def": "A drawing with vanishing points, showing depth \u2014 not used for construction views."
    },
    {
      "term": "Front view",
      "def": "The elevation of the front face of a building."
    },
    {
      "term": "Roof pitch",
      "def": "The slope of a roof, shown on elevations and sections."
    },
    {
      "term": "Floor-to-floor height",
      "def": "The vertical distance from one floor to the next, shown in sections."
    },
    {
      "term": "Stair clearance",
      "def": "The headroom above a stair, shown in sections."
    }
  ],
  "video": {
    "title": "How To: Reading Construction Blueprints & Plans | #1",
    "embedUrl": "https://www.youtube.com/embed/DSuP4YkaJ40",
    "note": "The first in a series on reading construction blueprints and plans. Watch how the presenter moves between plan, elevation, and section views of the same building, and notice how each view answers a different question.",
    "more": [
      {
        "title": "How to Read Blueprints: Every Page of a REAL House Explained",
        "url": "https://www.youtube.com/watch?v=t-OhSA-o0Ag"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Explain orthographic projection in two sentences.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Orthographic projection shows a 3D building as a set of flat views, each drawn as if you were looking straight at the building from one direction. Step 2: There is no perspective \u2014 parallel lines stay parallel and everything is drawn to the same scale.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> What question does each of the big three views answer: plan, elevation, section?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The plan answers \"where?\" \u2014 where walls, doors, windows, and rooms are. Step 2: The elevation answers \"what does it look like from outside?\" \u2014 heights, materials, and roof shape. Step 3: The section answers \"how high, and how does it fit together?\" \u2014 ceiling heights, floor-to-floor heights, and construction.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A floor plan shows a window on the north wall. Where must the same window appear, and what must match?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The same window must appear on the north elevation at the same position along the wall. Step 2: It must also appear in any section that cuts through that wall, at the same height. Step 3: Position and height must match across views \u2014 a mismatch is an error to report.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A section marker on a plan reads \"3\" on top and \"A-301\" on the bottom, with an arrow pointing east. What does each part mean?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 3 is the drawing number on sheet A-301. Step 2: A-301 is the sheet the section is drawn on. Step 3: The arrow shows the section looks east \u2014 read it in that direction or the building is mirrored.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> What is the difference between third-angle and first-angle projection, and which one do U.S. drawings use?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: In third-angle projection the view is placed on the side it is seen from; in first-angle it is placed on the opposite side. Step 2: U.S. drawings use third-angle; much of Europe and Asia uses first-angle. Step 3: In practice, trust the labels on construction drawings, not the position of the view.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A plan has a detail callout pointing at a window head. What do you do, and what will the detail show?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Note the detail number and sheet from the callout, go to that sheet, and find the detail. Step 2: The detail is drawn at a large scale and shows exactly how the window head is built \u2014 every layer and fastener. Step 3: The plan says a window exists; the detail says how it is built.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Orthographic projection means:",
      "choices": [
        "Drawings with perspective and vanishing points",
        "Flat views with no perspective; parallel lines stay parallel",
        "Drawings made by hand only",
        "3D models on a computer"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Orthographic views are flat, with no perspective. (a) Perspective is the opposite system. (c) Orthographic drawings can be hand- or computer-drawn. (d) A 3D model is a different representation."
    },
    {
      "q": "A floor plan is a:",
      "choices": [
        "Vertical cut through the building",
        "Horizontal cut through the building, looking down",
        "Flat view of one outside face",
        "Large-scale drawing of one small part"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A floor plan is a horizontal cut, usually about 4 feet above the floor. (a) That is a section. (c) That is an elevation. (d) That is a detail."
    },
    {
      "q": "An elevation shows:",
      "choices": [
        "Where walls go on the floor",
        "A flat view of one outside face: heights, materials, roof shape",
        "How the parts stack up inside",
        "A list of doors"
      ],
      "answer": 1,
      "explanation": "Correct: (b). An elevation is the flat outside view. (a) That is the floor plan. (c) That is the section. (d) That is a schedule."
    },
    {
      "q": "U.S. construction drawings use:",
      "choices": [
        "First-angle projection",
        "Third-angle projection",
        "No projection system",
        "Perspective projection"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The U.S. uses third-angle projection. (a) First-angle is used in much of Europe and Asia. (c) Every orthographic drawing uses a projection system. (d) Perspective is not used for construction views."
    },
    {
      "q": "On a section marker, the bottom number is:",
      "choices": [
        "The drawing number",
        "The sheet the section is drawn on",
        "The scale",
        "The revision"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The split circle's top is the drawing number, the bottom is the sheet. (a) That is the top number. (c) Scale is in the title block and under the drawing. (d) Revision is in the title block."
    },
    {
      "q": "The arrow on a section marker shows:",
      "choices": [
        "The north direction",
        "The direction the section looks",
        "The wind direction",
        "The door swing"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The arrow shows the viewing direction of the section. (a) North is shown by the north arrow. (c) Wind is not drawn on plans. (d) Door swing is an arc on the plan."
    },
    {
      "q": "A detail drawing is used to show:",
      "choices": [
        "The whole building at a small scale",
        "One small part at a large scale, exactly how it is built",
        "The site and the setbacks",
        "The list of materials"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Details are large-scale drawings of one part. (a) The whole building is on plans and elevations. (c) That is the site plan. (d) Materials are in the specs."
    },
    {
      "q": "A feature shown on a floor plan must also appear:",
      "choices": [
        "Only on that plan",
        "In the elevation and section in the same position and height",
        "Only in the schedule",
        "Nowhere else"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Views are consistent \u2014 a window on the plan must be on the elevation at the same position and in the section at the same height. (a) Views are not independent. (c) The schedule lists items but does not locate them. (d) Every feature appears in multiple views."
    }
  ],
  "studyGuide": "\n<h3>Module 4 \u2014 Lines, Views & Projections: Quick Reference</h3>\n<p><strong>Core idea:</strong> Orthographic views are flat, with no perspective \u2014 and a feature must appear in every view in the same place.</p>\n<p><strong>Big three:</strong> Plan (horizontal cut, looking down \u2014 where?) \u00b7 elevation (flat outside view \u2014 what does it look like?) \u00b7 section (vertical cut \u2014 how high, how does it fit?).</p>\n<p><strong>Projection:</strong> Third-angle in the U.S. \u00b7 first-angle in much of Europe/Asia. Trust the labels, not the position.</p>\n<p><strong>Section marker:</strong> Split circle \u2014 top = drawing number, bottom = sheet, arrow = viewing direction.</p>\n<p><strong>Detail callout:</strong> Circle + leader \u2192 large-scale drawing of one part \u2014 the \"how\" of the build.</p>\n<p><strong>Self-check:</strong> Explain plan, elevation, and section, and read a section marker. If you can, you have this module.</p>\n"
};
