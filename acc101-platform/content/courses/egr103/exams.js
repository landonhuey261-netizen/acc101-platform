// egr103 — Midterm and Final exams.
// All questions are original to these exams (same topics as module quizzes, fresh scenarios and wording).
// Every explanation covers why the correct answer is right AND why each wrong choice is wrong.
module.exports = {
  "midterm": {
    "title": "Midterm Exam",
    "minutes": 75,
    "coverage": "Modules 1–6",
    "questions": [
      {
        "module": 1,
        "q": "A student is asked to define “Scale” on a test. Which answer is correct?",
        "choices": [
          "A small symbol on a drawing showing whether first-angle or third-angle projection was used.",
          "The ratio between a drawing’s size and the real object’s size, such as 1:2 (half size).",
          "What the part is made from, stated in the title block or a note.",
          "The surface quality of a part, such as smooth, painted, or plated."
        ],
        "answer": 1,
        "explanation": "Correct: (b). Scale means: The ratio between a drawing’s size and the real object’s size, such as 1:2 (half size).. (a) is the definition of Projection symbol, not of Scale. (c) is the definition of Material, not of Scale. (d) is the definition of Finish, not of Scale."
      },
      {
        "module": 1,
        "q": "During a review, a classmate describes something as: “A small symbol on a drawing showing whether first-angle or third-angle projection was used.” Which term are they describing?",
        "choices": [
          "Finish",
          "Revision",
          "Engineering drawing",
          "Projection symbol"
        ],
        "answer": 3,
        "explanation": "Correct: (d). That description is Projection symbol: A small symbol on a drawing showing whether first-angle or third-angle projection was used.. (a) Finish means The surface quality of a part, such as smooth, painted, or plated.. (b) Revision means A version of a drawing; each change gets a new revision letter or number.. (c) Engineering drawing means A precise drawing with views, sizes, tolerances, and notes, used to make and check a real part.."
      },
      {
        "q": "A drawing’s title block says the units are millimetres and the scale is 2:1. A dimension reads 10. What does it mean?",
        "choices": [
          "The part is 10 mm long, drawn at twice size.",
          "The part is 20 mm long.",
          "The part is 5 mm long.",
          "The part is 10 inches long."
        ],
        "answer": 0,
        "explanation": "Correct: (a). The dimension is the real size (10 mm); the 2:1 scale only says the drawing is twice as big as the part. (b) confuses the scale with the size. (c) halves it. (d) uses the wrong unit.",
        "module": 1
      },
      {
        "q": "Why do drawings follow standards such as ASME Y14.5?",
        "choices": [
          "So drawings look pretty.",
          "So a drawing made in one place can be read and built correctly anywhere in the world.",
          "So drawings are harder to read.",
          "So only engineers can read them."
        ],
        "answer": 1,
        "explanation": "Correct: (b). Standards make drawings a shared language. (a) is not the reason. (c) is backwards. (d) is wrong: standards make drawings readable, not secret.",
        "module": 1
      },
      {
        "module": 2,
        "q": "A student is asked to define “Symmetry” on a test. Which answer is correct?",
        "choices": [
          "Words on a sketch naming a part, a size, or a material.",
          "A shape that is the same on both sides of a centre line.",
          "A sketch made before CAD modelling, showing the part, its sizes, and how it will be built.",
          "A way of drawing an object as flat front, top, and side views."
        ],
        "answer": 1,
        "explanation": "Correct: (b). Symmetry means: A shape that is the same on both sides of a centre line.. (a) is the definition of Label, not of Symmetry. (c) is the definition of Planning sketch, not of Symmetry. (d) is the definition of Orthographic, not of Symmetry."
      },
      {
        "module": 2,
        "q": "During a review, a classmate describes something as: “Words on a sketch naming a part, a size, or a material.” Which term are they describing?",
        "choices": [
          "Orthographic",
          "View",
          "Freehand sketch",
          "Label"
        ],
        "answer": 3,
        "explanation": "Correct: (d). That description is Label: Words on a sketch naming a part, a size, or a material.. (a) Orthographic means A way of drawing an object as flat front, top, and side views.. (b) View means A picture of a part from one direction.. (c) Freehand sketch means A drawing made by hand without instruments, used to explore or explain an idea.."
      },
      {
        "q": "A student sketches a bracket and adds hole details before checking the bracket’s overall length against the real bracket. What mistake are they making?",
        "choices": [
          "They are sketching too big.",
          "They are adding detail before getting the proportions right.",
          "They are using the wrong pencil.",
          "They are drawing too slowly."
        ],
        "answer": 1,
        "explanation": "Correct: (b). Detail before proportion is the classic sketching mistake. (a) is wrong: drawing big is good. (c) is minor. (d) is not a mistake.",
        "module": 2
      },
      {
        "q": "Which line type marks the centre of a hole?",
        "choices": [
          "Thick solid line",
          "Dashed line",
          "Long-dash-short-dash centre line",
          "Thin wavy line"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Centre lines are long-dash-short-dash. (a) is a visible edge. (b) is a hidden edge. (d) is a break line.",
        "module": 2
      },
      {
        "module": 3,
        "q": "A student is asked to define “Hidden line” on a test. Which answer is correct?",
        "choices": [
          "Another name for the top view.",
          "A dashed line showing an edge that cannot be seen from that viewpoint.",
          "Another name for a front or side view.",
          "The six standard views: front, top, bottom, left, right, and back; usually only three are needed."
        ],
        "answer": 1,
        "explanation": "Correct: (b). Hidden line means: A dashed line showing an edge that cannot be seen from that viewpoint.. (a) is the definition of Plan view, not of Hidden line. (c) is the definition of Elevation, not of Hidden line. (d) is the definition of Principal views, not of Hidden line."
      },
      {
        "module": 3,
        "q": "During a review, a classmate describes something as: “Another name for the top view.” Which term are they describing?",
        "choices": [
          "Principal views",
          "Projector line",
          "Orthographic projection",
          "Plan view"
        ],
        "answer": 3,
        "explanation": "Correct: (d). That description is Plan view: Another name for the top view.. (a) Principal views means The six standard views: front, top, bottom, left, right, and back; usually only three are needed.. (b) Projector line means A light line used to carry a size from one view to another while drawing.. (c) Orthographic projection means Showing a 3D object as flat front, top, and side views on one sheet.."
      },
      {
        "q": "A drawing uses first-angle projection. Where does the right-side view sit?",
        "choices": [
          "To the right of the front view",
          "To the left of the front view",
          "Above the front view",
          "Below the front view"
        ],
        "answer": 1,
        "explanation": "Correct: (b). In first-angle, the right-side view sits to the left of the front view. (a) is third-angle. (c) is the top view in third-angle. (d) is the top view in first-angle.",
        "module": 3
      },
      {
        "q": "A student draws a front view 60 mm wide and a top view 50 mm wide of the same part. What is wrong?",
        "choices": [
          "Nothing — views can be different widths.",
          "The views must share the same width, so one of them is drawn wrong.",
          "The part is 60 mm wide.",
          "The part is 50 mm wide."
        ],
        "answer": 1,
        "explanation": "Correct: (b). Front and top views must align in width. (a) is the mistake itself. (c) and (d) cannot both be true.",
        "module": 3
      },
      {
        "module": 4,
        "q": "A student is asked to define “Interference fit” on a test. Which answer is correct?",
        "choices": [
          "A fixed starting point or surface that dimensions are measured from.",
          "A fit where the shaft is always bigger than the hole, so the parts must be pressed together.",
          "The adding up of tolerances across several parts in an assembly.",
          "The distance across a circle through its centre; holes are dimensioned by diameter."
        ],
        "answer": 1,
        "explanation": "Correct: (b). Interference fit means: A fit where the shaft is always bigger than the hole, so the parts must be pressed together.. (a) is the definition of Datum, not of Interference fit. (c) is the definition of Tolerance stack-up, not of Interference fit. (d) is the definition of Diameter (Ø), not of Interference fit."
      },
      {
        "module": 4,
        "q": "During a review, a classmate describes something as: “A fixed starting point or surface that dimensions are measured from.” Which term are they describing?",
        "choices": [
          "Diameter (Ø)",
          "Radius (R)",
          "Dimension",
          "Datum"
        ],
        "answer": 3,
        "explanation": "Correct: (d). That description is Datum: A fixed starting point or surface that dimensions are measured from.. (a) Diameter (Ø) means The distance across a circle through its centre; holes are dimensioned by diameter.. (b) Radius (R) means Half the diameter; arcs are dimensioned by radius.. (c) Dimension means A number on a drawing giving a size, such as a length of 50 mm.."
      },
      {
        "q": "A shaft must be 25.0 ± 0.05 mm. A shaft measures 24.94 mm. Is it acceptable?",
        "choices": [
          "Yes — it is within 24.95 to 25.05 mm.",
          "No — it is below the minimum of 24.95 mm.",
          "Yes — it is close enough.",
          "No — it is above the maximum."
        ],
        "answer": 1,
        "explanation": "Correct: (b). Minimum is 25.0 − 0.05 = 24.95 mm, and 24.94 is below it. (a) states the range correctly but the verdict wrongly. (c) is wrong: close is not in tolerance. (d) is backwards.",
        "module": 4
      },
      {
        "q": "On which view should a hole’s diameter be dimensioned?",
        "choices": [
          "The view where the hole looks like two parallel lines.",
          "The view where the hole looks like a circle.",
          "The view where the hole is hidden.",
          "Any view — it does not matter."
        ],
        "answer": 1,
        "explanation": "Correct: (b). Dimension a feature on the view that shows its true shape. (a) shows the hole’s depth, not its diameter. (c) is the worst choice. (d) is wrong: the view matters.",
        "module": 4
      },
      {
        "module": 5,
        "q": "A student is asked to define “True shape” on a test. Which answer is correct?",
        "choices": [
          "A hole that goes all the way through a part.",
          "How a face really looks, without being squashed by viewing it at an angle.",
          "A hole that does not go all the way through a part.",
          "A flat-bottomed enlargement at the top of a hole, so a bolt head sits flush."
        ],
        "answer": 1,
        "explanation": "Correct: (b). True shape means: How a face really looks, without being squashed by viewing it at an angle.. (a) is the definition of Through hole, not of True shape. (c) is the definition of Blind hole, not of True shape. (d) is the definition of Counterbore, not of True shape."
      },
      {
        "module": 5,
        "q": "During a review, a classmate describes something as: “A hole that goes all the way through a part.” Which term are they describing?",
        "choices": [
          "Counterbore",
          "Countersink",
          "Section view",
          "Through hole"
        ],
        "answer": 3,
        "explanation": "Correct: (d). That description is Through hole: A hole that goes all the way through a part.. (a) Counterbore means A flat-bottomed enlargement at the top of a hole, so a bolt head sits flush.. (b) Countersink means A cone-shaped enlargement at the top of a hole, so a flat-head screw sits flush.. (c) Section view means A view that shows a part as if it had been cut open, revealing its inside.."
      },
      {
        "q": "A section view shows a bolt passing through a plate. How should the bolt be drawn?",
        "choices": [
          "Hatched, like the plate.",
          "Unhatched, by convention, even though it is cut.",
          "As a dashed hidden line.",
          "It should not be drawn at all."
        ],
        "answer": 1,
        "explanation": "Correct: (b). Bolts, shafts, and nuts are never hatched in section. (a) is the mistake. (c) is wrong: the bolt is visible in the section. (d) is wrong: it must be shown.",
        "module": 5
      },
      {
        "q": "An offset section is used when:",
        "choices": [
          "The part is too big for the sheet.",
          "The features to be shown are not in a straight line, so the cutting plane bends to pass through them.",
          "The part is symmetrical.",
          "The drawing has no dimensions."
        ],
        "answer": 1,
        "explanation": "Correct: (b). Offset sections bend the cutting plane through off-line features. (a) is a scale issue. (c) suggests a half section. (d) is unrelated.",
        "module": 5
      },
      {
        "module": 6,
        "q": "A student is asked to define “True position” on a test. Which answer is correct?",
        "choices": [
          "The box holding a GD&T callout: symbol, tolerance, and datums, read left to right.",
          "The exact, theoretically perfect location of a feature, given by basic dimensions.",
          "The region a feature must lie inside, such as a circle of 0.2 mm diameter for a position callout.",
          "A GD&T control on shape alone, such as flatness or straightness, needing no datum."
        ],
        "answer": 1,
        "explanation": "Correct: (b). True position means: The exact, theoretically perfect location of a feature, given by basic dimensions.. (a) is the definition of Feature control frame, not of True position. (c) is the definition of Tolerance zone, not of True position. (d) is the definition of Form control, not of True position."
      },
      {
        "module": 6,
        "q": "During a review, a classmate describes something as: “The box holding a GD&T callout: symbol, tolerance, and datums, read left to right.” Which term are they describing?",
        "choices": [
          "Form control",
          "ASME Y14.5",
          "GD&T",
          "Feature control frame"
        ],
        "answer": 3,
        "explanation": "Correct: (d). That description is Feature control frame: The box holding a GD&T callout: symbol, tolerance, and datums, read left to right.. (a) Form control means A GD&T control on shape alone, such as flatness or straightness, needing no datum.. (b) ASME Y14.5 means The US standard that defines GD&T symbols and rules.. (c) GD&T means Geometric Dimensioning and Tolerancing: a symbol language that controls the shape, direction, and position of features.."
      },
      {
        "q": "What is a basic dimension?",
        "choices": [
          "A dimension with a very large tolerance.",
          "An exact dimension in a box, with no tolerance of its own; the tolerance lives in the GD&T callout.",
          "The first dimension on a drawing.",
          "A dimension that can be ignored."
        ],
        "answer": 1,
        "explanation": "Correct: (b). Basic dimensions are exact; the GD&T callout carries the tolerance. (a) is backwards. (c) is wrong: position on the sheet does not matter. (d) is wrong: basic dimensions are essential.",
        "module": 6
      },
      {
        "q": "In the 3-2-1 principle, how many points locate the primary datum?",
        "choices": [
          "One",
          "Two",
          "Three",
          "Six"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Three points on the primary datum, two on the secondary, one on the tertiary. (a) and (b) are the other datums’ counts. (d) is the total, not the primary count.",
        "module": 6
      },
      {
        "q": "A drawing shows a part at a scale of 1:1. A line on the drawing measures 40 mm. How long is the real part?",
        "choices": [
          "20 mm",
          "40 mm",
          "80 mm",
          "400 mm"
        ],
        "answer": 1,
        "explanation": "Correct: (b). At 1:1 the drawing is full size, so 40 mm on the drawing is 40 mm in real life. (a) halves it. (c) doubles it. (d) multiplies by 10."
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
        "q": "A drawing of a gear is made at 1:1 scale. What does that mean?",
        "choices": [
          "The drawing is the same size as the real gear.",
          "The drawing is twice as big as the real gear.",
          "The drawing is half the size of the real gear.",
          "The drawing has no units stated."
        ],
        "answer": 0,
        "explanation": "Correct: (a). Scale is the ratio between a drawing's size and the real object's size, and 1:1 means the drawing is the same size as the real gear. (b) is 2:1 scale. (c) is 1:2 scale. (d) is wrong: units are a separate matter, stated in the title block."
      },
      {
        "module": 1,
        "q": "A machinist opens a drawing and looks for the small symbol that tells her whether the views use first-angle or third-angle projection. What is that symbol called?",
        "choices": [
          "A title block, which holds the drawing's title and units.",
          "A projection symbol, a small symbol showing which projection was used.",
          "A revision, a version of the drawing.",
          "A finish mark, showing the surface quality."
        ],
        "answer": 1,
        "explanation": "Correct: (b). The projection symbol is a small symbol on a drawing showing whether first-angle or third-angle projection was used. (a) is wrong: the title block holds the title, units, scale, and material. (c) is wrong: a revision is a version of a drawing; each change gets a new revision letter or number. (d) is wrong: a finish mark shows the surface quality of a part, such as smooth, painted, or plated."
      },
      {
        "q": "A drawing's title block says the units are millimetres and the scale is 1:2. A dimension reads 40. What does it mean?",
        "choices": [
          "The part is 40 mm long, drawn at half size.",
          "The part is 80 mm long.",
          "The part is 20 mm long.",
          "The part is 40 inches long."
        ],
        "answer": 0,
        "explanation": "Correct: (a). The dimension is the real size (40 mm); the 1:2 scale only says the drawing is half as big as the part. (b) doubles the size. (c) halves it. (d) uses the wrong unit.",
        "module": 1
      },
      {
        "module": 2,
        "q": "A student sketches a spanner so that one side of the handle mirrors the other exactly. What property does the sketch show?",
        "choices": [
          "Symmetry, a shape that is the same on both sides of a centre line.",
          "Orthographic projection, drawing a part as flat front, top, and side views.",
          "A label, words naming a part, a size, or a material.",
          "A planning sketch, a sketch made before CAD modelling."
        ],
        "answer": 0,
        "explanation": "Correct: (a). Symmetry means a shape that is the same on both sides of a centre line, which is what the mirrored handle shows. (b) is wrong: orthographic projection is a way of drawing an object as flat front, top, and side views. (c) is wrong: a label is words on a sketch naming a part, a size, or a material. (d) is wrong: a planning sketch is a sketch made before CAD modelling, showing the part, its sizes, and how it will be built."
      },
      {
        "module": 2,
        "q": "On a sketch of a bracket, the student writes “MILD STEEL” next to the part and “Ø10” next to a hole. What are these words and numbers?",
        "choices": [
          "Dimensions only, because they give sizes.",
          "Labels, words on a sketch naming a part, a size, or a material.",
          "Centre lines, marking the centre of the hole.",
          "Hidden lines, showing edges that cannot be seen."
        ],
        "answer": 1,
        "explanation": "Correct: (b). A label is words on a sketch naming a part, a size, or a material — “MILD STEEL” names the material and “Ø10” names the hole size. (a) is wrong: only “Ø10” is a size; “MILD STEEL” is a material, not a dimension. (c) is wrong: centre lines are long-dash-short-dash lines marking the centre of a hole. (d) is wrong: hidden lines are dashed lines showing edges that cannot be seen."
      },
      {
        "q": "A student sketches a car and spends an hour shading the wheels before checking whether the body is twice as long as it is tall. What mistake are they making?",
        "choices": [
          "They are sketching too slowly.",
          "They are adding detail before getting the proportions right.",
          "They are using the wrong paper.",
          "They are drawing too big."
        ],
        "answer": 1,
        "explanation": "Correct: (b). Detail before proportion is the classic sketching mistake: get the overall shape and proportions right first, then add detail. (a) is wrong: taking time is not the mistake — spending it on detail first is. (c) is minor: paper choice does not cause this error. (d) is wrong: drawing big is good practice.",
        "module": 2
      },
      {
        "module": 3,
        "q": "In a front view of a block, a hole drilled through from the side cannot be seen from the front. How is that hole shown in the front view?",
        "choices": [
          "As a thick solid line, like a visible edge.",
          "As a dashed hidden line, showing an edge that cannot be seen from that viewpoint.",
          "As a centre line, a long-dash-short-dash line.",
          "It is not shown at all."
        ],
        "answer": 1,
        "explanation": "Correct: (b). A hidden line is a dashed line showing an edge that cannot be seen from that viewpoint. (a) is wrong: a thick solid line marks a visible edge. (c) is wrong: a centre line marks the centre of the hole, not its hidden edges. (d) is wrong: hidden features must still be shown, as dashed lines."
      },
      {
        "module": 3,
        "q": "A builder asks for the view of a house as seen from directly above. What is this view called?",
        "choices": [
          "An elevation, a front or side view.",
          "A plan view, another name for the top view.",
          "A section view, a view as if the house had been cut open.",
          "An isometric view, a 3D pictorial view."
        ],
        "answer": 1,
        "explanation": "Correct: (b). The plan view is another name for the top view — the house seen from directly above. (a) is wrong: an elevation is another name for a front or side view. (c) is wrong: a section view shows a part as if it had been cut open. (d) is wrong: an isometric view is a 3D pictorial drawing."
      },
      {
        "q": "A drawing uses first-angle projection. Where does the top view sit?",
        "choices": [
          "Above the front view.",
          "Below the front view.",
          "To the right of the front view.",
          "To the left of the front view."
        ],
        "answer": 1,
        "explanation": "Correct: (b). In first-angle projection, the top view sits below the front view — the opposite of third-angle. (a) is the top view in third-angle projection. (c) is the right-side view in third-angle. (d) is the right-side view in first-angle.",
        "module": 3
      },
      {
        "module": 4,
        "q": "A bearing must be pressed into a housing with a hydraulic press because the bearing is slightly larger than the hole. What kind of fit is this?",
        "choices": [
          "A clearance fit, where the shaft is always smaller than the hole.",
          "An interference fit, where the shaft is always bigger than the hole, so the parts must be pressed together.",
          "A transition fit, where the fit may be either clearance or interference.",
          "A bilateral tolerance, a tolerance allowing variation both ways."
        ],
        "answer": 1,
        "explanation": "Correct: (b). An interference fit is a fit where the shaft is always bigger than the hole, so the parts must be pressed together. (a) is wrong: in a clearance fit the shaft is always smaller than the hole, so the parts slide freely. (c) is wrong: a transition fit may end up either way, but here the bearing is definitely larger. (d) is wrong: a bilateral tolerance is a tolerance that allows variation both ways, such as ±0.2 mm — it is not a fit at all."
      },
      {
        "module": 4,
        "q": "A machinist measures every hole position on a plate from one flat edge of the plate. What is that flat edge acting as?",
        "choices": [
          "A datum, a fixed starting point or surface that dimensions are measured from.",
          "A dimension, a number on a drawing giving a size.",
          "A diameter, the distance across a circle through its centre.",
          "A tolerance, how much a part may differ from its stated size."
        ],
        "answer": 0,
        "explanation": "Correct: (a). A datum is a fixed starting point or surface that dimensions are measured from — here, the flat edge. (b) is wrong: a dimension is a number on a drawing giving a size, such as a length of 50 mm. (c) is wrong: diameter is the distance across a circle through its centre; holes are dimensioned by diameter. (d) is wrong: tolerance is how much a real part is allowed to differ from its stated size and still be acceptable."
      },
      {
        "q": "A pin must be 12.0 ± 0.1 mm. A pin measures 12.08 mm. Is it acceptable?",
        "choices": [
          "Yes — it is within 11.9 to 12.1 mm.",
          "No — it is above the maximum.",
          "No — it is below the minimum.",
          "Yes — it is exactly 12.0 mm."
        ],
        "answer": 0,
        "explanation": "Correct: (a). The allowed range is 12.0 − 0.1 = 11.9 mm to 12.0 + 0.1 = 12.1 mm, and 12.08 mm is inside it. (b) is wrong: the maximum is 12.1 mm, and 12.08 is below it. (c) is backwards: 12.08 is above the minimum of 11.9 mm. (d) is wrong: the pin measures 12.08 mm, not exactly 12.0 mm.",
        "module": 4
      },
      {
        "module": 5,
        "q": "A sloped face of a wedge looks squashed in the front view. Which view shows that face in its true shape?",
        "choices": [
          "The front view, which squashes it.",
          "An auxiliary view looking straight at the face.",
          "A section view, showing the inside of the wedge.",
          "A hidden-line view, showing edges that cannot be seen."
        ],
        "answer": 1,
        "explanation": "Correct: (b). True shape is how a face really looks, without being squashed by viewing it at an angle — an auxiliary view looking straight at the face shows it. (a) is wrong: the front view is the one that squashes it. (c) is wrong: a section view shows a part as if it had been cut open, revealing its inside. (d) is wrong: hidden lines show edges that cannot be seen from a viewpoint."
      },
      {
        "module": 5,
        "q": "A bolt must pass right through a 20 mm thick plate and out the other side. What kind of hole must be drilled?",
        "choices": [
          "A blind hole, which does not go all the way through.",
          "A through hole, a hole that goes all the way through a part.",
          "A counterbore, a flat-bottomed enlargement at the top of a hole.",
          "A countersink, a cone-shaped enlargement at the top of a hole."
        ],
        "answer": 1,
        "explanation": "Correct: (b). A through hole is a hole that goes all the way through a part, so the bolt can pass right through. (a) is wrong: a blind hole does not go all the way through a part. (c) is wrong: a counterbore is a flat-bottomed enlargement at the top of a hole, so a bolt head sits flush. (d) is wrong: a countersink is a cone-shaped enlargement at the top of a hole, so a flat-head screw sits flush."
      },
      {
        "q": "A section view cuts through a plate held by a nut and bolt. How should the nut be drawn?",
        "choices": [
          "Hatched, like the plate.",
          "Unhatched, by convention, even though it is cut.",
          "As a dashed hidden line.",
          "It should not be drawn at all."
        ],
        "answer": 1,
        "explanation": "Correct: (b). Bolts, nuts, and shafts are never hatched in section, by convention, even when the cutting plane passes through them. (a) is the mistake: hatching the nut would wrongly suggest it is solid plate material. (c) is wrong: the nut is visible in the section, not hidden. (d) is wrong: the nut must be shown, or the assembly makes no sense.",
        "module": 5
      },
      {
        "module": 6,
        "q": "A drawing gives a hole's position with boxed dimensions of 40 mm from datum A and 25 mm from datum B. What do those boxed dimensions locate?",
        "choices": [
          "The hole's true position, its exact, theoretically perfect location.",
          "The hole's tolerance zone, the region the feature must lie inside.",
          "The feature control frame, the box holding the GD&T callout.",
          "The hole's form control, a control on shape alone."
        ],
        "answer": 0,
        "explanation": "Correct: (a). True position is the exact, theoretically perfect location of a feature, given by basic dimensions — the boxed 40 mm and 25 mm. (b) is wrong: the tolerance zone is the region a feature must lie inside, such as a circle of 0.2 mm diameter for a position callout. (c) is wrong: the feature control frame is the box holding a GD&T callout: symbol, tolerance, and datums, read left to right. (d) is wrong: a form control is a GD&T control on shape alone, such as flatness or straightness, needing no datum."
      },
      {
        "module": 6,
        "q": "A student points to a rectangular box on a drawing containing ⌖, Ø0.2, and A B C. What is this box called?",
        "choices": [
          "A title block, holding the drawing's title and units.",
          "A feature control frame, the box holding a GD&T callout: symbol, tolerance, and datums, read left to right.",
          "A datum, a fixed starting point for dimensions.",
          "A basic dimension, an exact dimension in a box."
        ],
        "answer": 1,
        "explanation": "Correct: (b). That description is the feature control frame: the box holding a GD&T callout — symbol, tolerance, and datums, read left to right. (a) is wrong: the title block holds the drawing's title, units, scale, and material. (c) is wrong: a datum is a fixed starting point or surface that dimensions are measured from. (d) is wrong: a basic dimension is a single exact dimension in a box, with no tolerance of its own."
      },
      {
        "q": "A drawing shows “50” inside a rectangle next to a position callout of Ø0.2. What does the boxed 50 mean?",
        "choices": [
          "The size can vary by 50 mm.",
          "It is an exact dimension in a box, with no tolerance of its own; the tolerance lives in the GD&T callout.",
          "It is the first dimension on the drawing.",
          "It can be ignored by the machinist."
        ],
        "answer": 1,
        "explanation": "Correct: (b). A basic dimension is an exact dimension in a box, with no tolerance of its own; the tolerance lives in the GD&T callout. (a) is backwards: the boxed 50 is exact, not a variation. (c) is wrong: position on the sheet does not matter. (d) is wrong: basic dimensions are essential — they locate the true position.",
        "module": 6
      },
      {
        "module": 7,
        "q": "A student is asked to define “Under-defined sketch” on a test. Which answer is correct?",
        "choices": [
          "The 0,0,0 point where the Front, Top, and Right planes meet.",
          "A sketch with lines that can still move; shown in blue.",
          "The panel showing the settings for the tool you are using.",
          "Certified SOLIDWORKS Associate — an entry-level certification proving basic SOLIDWORKS skill."
        ],
        "answer": 1,
        "explanation": "Correct: (b). Under-defined sketch means: A sketch with lines that can still move; shown in blue.. (a) is the definition of Origin, not of Under-defined sketch. (c) is the definition of PropertyManager, not of Under-defined sketch. (d) is the definition of CSWA, not of Under-defined sketch."
      },
      {
        "module": 7,
        "q": "During a review, a classmate describes something as: “The 0,0,0 point where the Front, Top, and Right planes meet.” Which term are they describing?",
        "choices": [
          "CSWA",
          "Extrude",
          "SOLIDWORKS",
          "Origin"
        ],
        "answer": 3,
        "explanation": "Correct: (d). That description is Origin: The 0,0,0 point where the Front, Top, and Right planes meet.. (a) CSWA means Certified SOLIDWORKS Associate — an entry-level certification proving basic SOLIDWORKS skill.. (b) Extrude means A feature that turns a 2D sketch into a 3D solid by pushing it out to a depth.. (c) SOLIDWORKS means Parametric CAD software used to model parts in 3D, build assemblies, and make engineering drawings.."
      },
      {
        "q": "A sketch has one line still blue. What does that mean?",
        "choices": [
          "The sketch is fully defined.",
          "The sketch is under-defined: that line can still move.",
          "The sketch is broken.",
          "The sketch is ready to print."
        ],
        "answer": 1,
        "explanation": "Correct: (b). Blue means under-defined. (a) is black. (c) is wrong: blue is normal for unfinished sketches. (d) is wrong: define it first.",
        "module": 7
      },
      {
        "module": 8,
        "q": "A student is asked to define “Blind extrude” on a test. Which answer is correct?",
        "choices": [
          "A flat-bottomed enlargement at the top of a hole, so a bolt head sits flush.",
          "An extrude to a set depth, stopping at a number rather than at another face.",
          "A cone-shaped enlargement at the top of a hole, so a flat-head screw sits flush.",
          "The line a revolve spins around, usually a centre line in the sketch."
        ],
        "answer": 1,
        "explanation": "Correct: (b). Blind extrude means: An extrude to a set depth, stopping at a number rather than at another face.. (a) is the definition of Counterbore, not of Blind extrude. (c) is the definition of Countersink, not of Blind extrude. (d) is the definition of Axis, not of Blind extrude."
      },
      {
        "module": 8,
        "q": "During a review, a classmate describes something as: “A flat-bottomed enlargement at the top of a hole, so a bolt head sits flush.” Which term are they describing?",
        "choices": [
          "Axis",
          "Profile",
          "Extruded Boss/Base",
          "Counterbore"
        ],
        "answer": 3,
        "explanation": "Correct: (d). That description is Counterbore: A flat-bottomed enlargement at the top of a hole, so a bolt head sits flush.. (a) Axis means The line a revolve spins around, usually a centre line in the sketch.. (b) Profile means The 2D shape in a sketch that a feature is built from.. (c) Extruded Boss/Base means The feature that pushes a sketch out to a depth to make a solid.."
      },
      {
        "q": "A student wants to model a round shaft with steps and grooves. Which feature is the best choice?",
        "choices": [
          "Extrude",
          "Revolve",
          "Fillet",
          "Chamfer"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Revolve spins a profile into a round part in one feature. (a) would leave flat faces. (c) and (d) only finish edges.",
        "module": 8
      },
      {
        "module": 9,
        "q": "A student is asked to define “Interference” on a test. Which answer is correct?",
        "choices": [
          "An assembly used as a component inside a bigger assembly.",
          "Two solid parts overlapping in space, which cannot happen in real life; checked with interference detection.",
          "A list of all the parts in an assembly, with quantities and part numbers.",
          "The ways a part can move: three translations and three rotations; mates remove them."
        ],
        "answer": 1,
        "explanation": "Correct: (b). Interference means: Two solid parts overlapping in space, which cannot happen in real life; checked with interference detection.. (a) is the definition of Sub-assembly, not of Interference. (c) is the definition of Bill of Materials (BOM), not of Interference. (d) is the definition of Degrees of freedom, not of Interference."
      },
      {
        "module": 9,
        "q": "During a review, a classmate describes something as: “An assembly used as a component inside a bigger assembly.” Which term are they describing?",
        "choices": [
          "Degrees of freedom",
          "Mass properties",
          "Assembly",
          "Sub-assembly"
        ],
        "answer": 3,
        "explanation": "Correct: (d). That description is Sub-assembly: An assembly used as a component inside a bigger assembly.. (a) Degrees of freedom means The ways a part can move: three translations and three rotations; mates remove them.. (b) Mass properties means SOLIDWORKS’ report of a part or assembly’s volume, mass, and centre of gravity.. (c) Assembly means A SOLIDWORKS file that puts several parts together in their working positions.."
      },
      {
        "q": "A bolt must sit in a hole and its head must sit flat on the plate. Which two mates do you need?",
        "choices": [
          "Two distance mates.",
          "A concentric mate (bolt to hole) and a coincident mate (bolt head to plate face).",
          "Two coincident mates.",
          "A distance mate and a coincident mate."
        ],
        "answer": 1,
        "explanation": "Correct: (b). Concentric lines up the axes; coincident puts the head on the face. (a) sets gaps, not alignment. (c) cannot line up round axes. (d) does not line up the bolt with the hole.",
        "module": 9
      },
      {
        "module": 10,
        "q": "A student is asked to define “Revision” on a test. Which answer is correct?",
        "choices": [
          "A table on an assembly drawing listing all the parts, with quantities and part numbers.",
          "A version of a drawing; each change gets a new revision letter or number.",
          "A circled number on a drawing pointing to a part, linked to the BOM.",
          "The border, title block, and standard text that appear on every sheet of a drawing."
        ],
        "answer": 1,
        "explanation": "Correct: (b). Revision means: A version of a drawing; each change gets a new revision letter or number.. (a) is the definition of Bill of Materials (BOM), not of Revision. (c) is the definition of Balloon, not of Revision. (d) is the definition of Sheet format, not of Revision."
      },
      {
        "module": 10,
        "q": "During a review, a classmate describes something as: “A table on an assembly drawing listing all the parts, with quantities and part numbers.” Which term are they describing?",
        "choices": [
          "Sheet format",
          "Third-angle projection",
          "Drawing (SOLIDWORKS)",
          "Bill of Materials (BOM)"
        ],
        "answer": 3,
        "explanation": "Correct: (d). That description is Bill of Materials (BOM): A table on an assembly drawing listing all the parts, with quantities and part numbers.. (a) Sheet format means The border, title block, and standard text that appear on every sheet of a drawing.. (b) Third-angle projection means The US standard: the top view sits above the front view and the right-side view to its right.. (c) Drawing (SOLIDWORKS) means A sheet showing views of a model, with dimensions, notes, and a title block.."
      },
      {
        "q": "A drawing’s title block is empty. What is wrong?",
        "choices": [
          "Nothing — title blocks are optional.",
          "The drawing is unfinished: the workshop cannot tell what the part is, what it is made of, or which revision to build.",
          "The drawing is too big.",
          "The views are wrong."
        ],
        "answer": 1,
        "explanation": "Correct: (b). An empty title block leaves the drawing unidentified. (a) is wrong. (c) and (d) are unrelated.",
        "module": 10
      },
      {
        "module": 11,
        "q": "A student is asked to define “Datum” on a test. Which answer is correct?",
        "choices": [
          "SOLIDWORKS’ report of a part’s volume, mass, and centre of gravity.",
          "A fixed starting point or surface that dimensions are measured from.",
          "Updating a SOLIDWORKS model after a change, so all features recalculate.",
          "Temporarily switching a feature off without deleting it, to test what happens without it."
        ],
        "answer": 1,
        "explanation": "Correct: (b). Datum means: A fixed starting point or surface that dimensions are measured from.. (a) is the definition of Mass properties, not of Datum. (c) is the definition of Rebuild, not of Datum. (d) is the definition of Suppress, not of Datum."
      },
      {
        "module": 11,
        "q": "During a review, a classmate describes something as: “SOLIDWORKS’ report of a part’s volume, mass, and centre of gravity.” Which term are they describing?",
        "choices": [
          "Suppress",
          "Roll back",
          "Design intent",
          "Mass properties"
        ],
        "answer": 3,
        "explanation": "Correct: (d). That description is Mass properties: SOLIDWORKS’ report of a part’s volume, mass, and centre of gravity.. (a) Suppress means Temporarily switching a feature off without deleting it, to test what happens without it.. (b) Roll back means Moving the FeatureManager bar to an earlier feature, to see or edit the model at that stage.. (c) Design intent means The plan behind a model: which dimensions drive it and what should happen when a size changes.."
      },
      {
        "q": "A dimension is placed from a fillet edge. The fillet radius is later changed and the model breaks. What was the mistake?",
        "choices": [
          "The fillet was too big.",
          "Dimensioning from an unstable feature (a fillet) instead of a datum.",
          "The sketch was fully defined.",
          "The part was too long."
        ],
        "answer": 1,
        "explanation": "Correct: (b). Dimensions should come from stable datums, not from fillets that may change. (a) is a symptom, not the cause. (c) is good practice. (d) is irrelevant.",
        "module": 11
      },
      {
        "module": 12,
        "q": "A student is asked to define “Mild steel” on a test. Which answer is correct?",
        "choices": [
          "A version of a drawing; each change gets a new revision letter or number.",
          "A common low-carbon steel, cheap and easy to weld and machine.",
          "The plan behind a model: which dimensions drive it and what should happen when a size changes.",
          "A sketch where every line is fixed by dimensions and relations; shown in black."
        ],
        "answer": 1,
        "explanation": "Correct: (b). Mild steel means: A common low-carbon steel, cheap and easy to weld and machine.. (a) is the definition of Revision, not of Mild steel. (c) is the definition of Design intent, not of Mild steel. (d) is the definition of Fully defined sketch, not of Mild steel."
      },
      {
        "module": 12,
        "q": "During a review, a classmate describes something as: “A version of a drawing; each change gets a new revision letter or number.” Which term are they describing?",
        "choices": [
          "Fully defined sketch",
          "Check",
          "L-bracket",
          "Revision"
        ],
        "answer": 3,
        "explanation": "Correct: (d). That description is Revision: A version of a drawing; each change gets a new revision letter or number.. (a) Fully defined sketch means A sketch where every line is fixed by dimensions and relations; shown in black.. (b) Check means Comparing your model and drawing against the master drawing, including mass and volume.. (c) L-bracket means A part shaped like the letter L, with a base and an upright at right angles.."
      },
      {
        "q": "A student models the bracket but the upright holes are drilled through the base instead. What went wrong?",
        "choices": [
          "The holes were sketched on the wrong face.",
          "The extrude depth was wrong.",
          "The fillet was too big.",
          "The material was wrong."
        ],
        "answer": 0,
        "explanation": "Correct: (a). Holes cut through whichever face their sketch sits on — the sketch was on the base, not the upright. (b) affects thickness, not hole direction. (c) affects edges. (d) does not move holes.",
        "module": 12
      },
      {
        "q": "A drawing shows a hole with a long-dash-short-dash line running through its centre. What is that line?",
        "choices": [
          "A hidden line, a dashed line showing an unseen edge.",
          "A centre line, marking the centre of a hole.",
          "A thick solid line, marking a visible edge.",
          "A thin wavy line, a break line."
        ],
        "answer": 1,
        "explanation": "Correct: (b). Centre lines are long-dash-short-dash lines that mark the centre of a hole. (a) is wrong: a hidden line is a dashed line showing an edge that cannot be seen. (c) is wrong: a thick solid line marks a visible edge. (d) is wrong: a thin wavy line is a break line.",
        "module": 2
      },
      {
        "q": "A plate has three holes that are not in a straight line. The drafter wants one section view to show all three holes. What should they use?",
        "choices": [
          "A half section, showing half the part cut and half whole.",
          "An offset section, where the cutting plane bends to pass through features that are not in a straight line.",
          "A removed section, drawn away from the main view.",
          "A full section cut in a straight line, which would miss the off-line holes."
        ],
        "answer": 1,
        "explanation": "Correct: (b). An offset section is used when the features to be shown are not in a straight line, so the cutting plane bends to pass through them. (a) is wrong: a half section shows half a symmetrical part cut and half whole. (c) is wrong: a removed section is a section drawn elsewhere on the sheet, not one that bends. (d) is wrong: a straight cut would miss the holes that are off the line.",
        "module": 5
      },
      {
        "q": "A model breaks when a dimension is changed from 60 mm to 80 mm. What is the most likely cause?",
        "choices": [
          "The computer is too slow.",
          "Poor design intent: features were built on edges and faces that moved when the size changed.",
          "The sketch was fully defined.",
          "The part is too big."
        ],
        "answer": 1,
        "explanation": "Correct: (b). Weak design intent makes models fragile to change. (a) is irrelevant. (c) is good practice, not a cause. (d) is not a cause.",
        "module": 8
      },
      {
        "q": "An equation sets hole spacing = plate length ÷ 3. The plate length is changed from 60 mm to 90 mm. What happens to the hole spacing?",
        "choices": [
          "It stays at 20 mm.",
          "It updates to 30 mm automatically.",
          "It becomes 90 mm.",
          "The model breaks."
        ],
        "answer": 1,
        "explanation": "Correct: (b). The equation drives the spacing: 90 ÷ 3 = 30 mm. (a) is what happens without the equation. (c) confuses spacing with length. (d) is wrong: equations prevent breakage.",
        "module": 11
      }
    ]
  }
};
