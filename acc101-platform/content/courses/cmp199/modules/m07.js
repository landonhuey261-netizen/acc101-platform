module.exports = {
  "number": 7,
  "slug": "acp-photoshop-review-tools-layers-selections",
  "title": "ACP Photoshop Review: Tools, Layers & Selections",
  "estTime": "3–4 hours",
  "objectives": [
    "Navigate the Photoshop interface: panels, workspaces, the Options bar, and the Tools panel.",
    "Work with layers: create, order, group, lock, and use adjustment layers and Smart Objects.",
    "Make precise selections with the Marquee, Lasso, Quick Selection, Magic Wand, and Pen tools.",
    "Use layer masks to hide and reveal parts of a layer without deleting anything.",
    "Choose the right file format (PSD, TIFF, JPEG, PNG) and resolution for the job."
  ],
  "sections": [
    {
      "heading": "The Interface: Panels, Tools, and Workspaces",
      "html": "<p>Photoshop's interface has four parts to learn. The <strong>Tools panel</strong> on the left holds the tools — Move, Marquee, Lasso, Quick Selection, Crop, Brush, Clone Stamp, Type, and more; tools with a small triangle in the corner hide more tools behind them (hold the mouse down to see them). The <strong>Options bar</strong> across the top changes with the tool you pick and holds its settings, such as brush size or feather. <strong>Panels</strong> on the right — Layers, Properties, History, Colour, Swatches — are where the real work happens, and <strong>workspaces</strong> (Essentials, Photography, Painting) arrange them for different jobs.</p>\n<p>Learn the shortcuts early: <strong>V</strong> is Move, <strong>M</strong> is Marquee, <strong>L</strong> is Lasso, <strong>W</strong> is Quick Selection/Magic Wand, <strong>B</strong> is Brush, <strong>C</strong> is Crop, <strong>T</strong> is Type, <strong>Ctrl/Cmd+Z</strong> undoes, <strong>Ctrl/Cmd+S</strong> saves, and <strong>spacebar</strong> temporarily gives you the Hand tool to move around the canvas. <strong>Ctrl/Cmd+0</strong> fits the image to the screen; <strong>Ctrl/Cmd++</strong> zooms in. The exam tests these shortcuts and where tools live, so practise them until they are automatic.</p>"
    },
    {
      "heading": "Layers: The Heart of Photoshop",
      "html": "<p>Everything in Photoshop sits on <strong>layers</strong>, stacked like transparent sheets: the top layer covers what is below it, and you can hide, move, or change one layer without touching the others. The <strong>Background layer</strong> is locked by default — double-click it to turn it into a normal layer. <strong>Ctrl/Cmd+J</strong> duplicates the selected layer (or the selection) onto a new layer; <strong>Ctrl/Cmd+E</strong> merges the selected layers down. <strong>Groups</strong> (Ctrl/Cmd+G) keep related layers together, and <strong>opacity</strong> makes a layer see-through while <strong>blend modes</strong> change how it mixes with the layers below (Multiply darkens, Screen lightens).</p>\n<p>Two layer types matter most for the exam. An <strong>adjustment layer</strong> (Layer &gt; New Adjustment Layer) changes brightness, colour, or contrast without touching the pixels — you can change it or delete it at any time, which is called <strong>non-destructive editing</strong>. A <strong>Smart Object</strong> wraps a layer so filters and transforms can be changed or removed later instead of being baked in. The rule for the exam: never edit the original pixels when an adjustment layer or a Smart Object can do the job instead.</p>"
    },
    {
      "heading": "Selections: Picking Exactly What You Want",
      "html": "<p>A <strong>selection</strong> marks the area your next edit will affect — everything outside it is protected. The <strong>Rectangular and Elliptical Marquee</strong> tools select simple shapes. The <strong>Lasso</strong> draws freehand; the <strong>Polygonal Lasso</strong> clicks straight edges; the <strong>Magnetic Lasso</strong> snaps to edges. The <strong>Quick Selection</strong> tool paints a selection that grows to follow edges, and <strong>Select Subject</strong> finds the main subject automatically. The <strong>Magic Wand</strong> selects areas of similar colour — raise the Tolerance to select more, lower it to select less.</p>\n<p>Refine the edges: <strong>Feather</strong> softens the edge so the change blends in, and <strong>Select and Mask</strong> is the workspace for tricky edges such as hair, where you paint the edge to include fine detail. <strong>Shift</strong> adds to a selection, <strong>Alt/Option</strong> subtracts from it, and <strong>Ctrl/Cmd+D</strong> deselects. The <strong>Pen tool</strong> draws precise paths that can be turned into selections — slower, but the most accurate way to cut out a product or a person with clean edges. For the exam, match the tool to the job: Quick Selection for a clear subject, Magic Wand for a flat colour area, Pen for a precise product cut-out.</p>"
    },
    {
      "heading": "Masks, Type, and Saving for the Right Job",
      "html": "<p>A <strong>layer mask</strong> hides part of a layer without deleting it: paint black on the mask to hide, white to reveal, grey for partial transparency. Masks are how professionals cut people out of backgrounds and blend images — and because nothing is deleted, you can always paint it back. A <strong>clipping mask</strong> (Alt/Option+click between two layers) limits the top layer to the shape of the layer below, which is how you fill text with a photo. <strong>Vector masks</strong> use a path instead of paint for razor-sharp edges.</p>\n<p><strong>Type layers</strong> stay editable: pick a font, size, and colour, and remember that text on a curve or a path follows the path. When the work is done, save it right: <strong>PSD</strong> keeps every layer for future editing; <strong>TIFF</strong> keeps quality for print; <strong>JPEG</strong> is small and good for photos on the web but loses quality every time it is saved; <strong>PNG</strong> keeps transparency and is best for logos and graphics. <strong>Resolution</strong> is measured in pixels per inch (PPI): 300 PPI for print, 72 PPI is enough for screens — and changing the PPI without resampling does not change the pixels.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Interface: Tools panel, Options bar, panels, workspaces; learn the shortcuts (V, M, L, W, B, C, T, Ctrl/Cmd+J, Ctrl/Cmd+E).</li><li>Layers: stack like transparent sheets; adjustment layers and Smart Objects are non-destructive; opacity and blend modes change how layers mix.</li><li>Selections: Marquee for shapes, Lasso for freehand, Quick Selection for subjects, Magic Wand for flat colour, Pen for precision; feather softens edges; Select and Mask handles hair.</li><li>Masks: black hides, white reveals; clipping mask limits a layer to the shape below; save as PSD to keep layers, JPEG for web photos, PNG for transparency, TIFF for print.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Editing the Background layer directly instead of duplicating it first — always work on a copy.</div><div class=\"callout\"><strong>Common mistake:</strong> Deleting pixels instead of masking them. A mask can be undone; a deletion cannot.</div>\n<p><strong>Ready-to-Work link:</strong> If you can build a layered file, mask a subject out, and pick the right format, you have this module. Module 8 is retouching, colour, and output.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Layers panel",
      "def": "The panel that lists every layer in the document, top to bottom; where layers are ordered, grouped, and hidden."
    },
    {
      "term": "Adjustment layer",
      "def": "A layer that changes brightness, colour, or contrast without touching the original pixels — non-destructive."
    },
    {
      "term": "Smart Object",
      "def": "A layer that wraps an image so filters and transforms stay editable instead of being baked in."
    },
    {
      "term": "Non-destructive editing",
      "def": "Editing that never changes the original pixels, so any change can be undone or altered later."
    },
    {
      "term": "Layer mask",
      "def": "A greyscale mask on a layer: black hides, white reveals, grey partly shows — nothing is deleted."
    },
    {
      "term": "Clipping mask",
      "def": "A layer limited to the shape of the layer below it, used to fill text or shapes with a photo."
    },
    {
      "term": "Blend mode",
      "def": "How a layer mixes with the layers below it, such as Multiply (darken) or Screen (lighten)."
    },
    {
      "term": "Opacity",
      "def": "How see-through a layer is, from 0% (invisible) to 100% (solid)."
    },
    {
      "term": "Marquee tool",
      "def": "Selects rectangular or elliptical areas."
    },
    {
      "term": "Quick Selection tool",
      "def": "Paints a selection that grows to follow edges and similar areas."
    },
    {
      "term": "Magic Wand",
      "def": "Selects areas of similar colour; Tolerance controls how much it includes."
    },
    {
      "term": "Feather",
      "def": "Softens the edge of a selection so edits blend into the surrounding image."
    },
    {
      "term": "Select and Mask",
      "def": "The workspace for refining tricky edges such as hair."
    },
    {
      "term": "Pen tool",
      "def": "Draws precise paths that can be turned into selections — the most accurate cut-out tool."
    },
    {
      "term": "PSD",
      "def": "Photoshop's own format; keeps every layer for future editing."
    },
    {
      "term": "PPI",
      "def": "Pixels per inch: the resolution of an image; 300 PPI for print, 72 PPI for screens."
    }
  ],
  "video": {
    "title": "Photoshop Layers Made EASY! Beginner Tutorial (Step-by-Step)",
    "embedUrl": "https://www.youtube.com/embed/iJ5_wwEgYVM",
    "note": "A clear layers walk-through: creating, ordering, grouping, and masking layers. Follow along in Photoshop and rebuild the same layered file as you watch.",
    "more": [
      {
        "title": "Photoshop for Beginners — Lesson 4 — Selections",
        "url": "https://www.youtube.com/watch?v=dwCBNmfNVgU"
      },
      {
        "title": "How to Use Layers & Masks in Photoshop | Day 3",
        "url": "https://www.youtube.com/watch?v=yQsYziKvx9c"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> You need to brighten a photo, but the client may ask for the original brightness back later. What do you use, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Use a Brightness/Contrast adjustment layer. Step 2: It changes the look without touching the original pixels — non-destructive editing. Step 3: If the client changes their mind, delete or adjust the layer and the original is untouched. Step 4: Never use Image &gt; Adjustments directly on the Background layer for a client job.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> You must cut a person out of a photo with flyaway hair. Which selection approach do you use, and in what order?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Use Quick Selection or Select Subject to get the rough shape. Step 2: Open Select and Mask and paint the hair edge to include the fine strands. Step 3: Output to a layer mask, not a deletion. Step 4: Zoom in and paint the mask by hand where the automatic edge missed.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A logo with transparency must go on a website. Which format do you save, and why not JPEG?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Save as PNG — it keeps transparency. Step 2: JPEG has no transparency, so the logo would get a white box behind it. Step 3: JPEG also loses quality every time it is saved. Step 4: Keep the PSD as the master file with all layers intact.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> You want a photo to show through the shape of a word. What do you use, and how?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Put the photo layer above the text layer. Step 2: Alt/Option+click between the two layers to make a clipping mask. Step 3: The photo is now limited to the shape of the letters. Step 4: Move the photo to frame the best part inside the text.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A selection edge looks harsh and obvious after you change the background. What went wrong, and what is the fix?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The edge has no feather — it is a hard cut. Step 2: Feather the selection (or the mask edge) by a few pixels so it blends. Step 3: For hair or fur, use Select and Mask instead of a plain feather. Step 4: Check the result zoomed out at 100% — edges that look fine zoomed in can look fake at full size.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A print shop asks for a photo at 300 PPI, but your file is 72 PPI. What do you check before you change anything?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Check the pixel dimensions — PPI only matters with the print size. Step 2: A 3000-pixel-wide image prints 10 inches wide at 300 PPI. Step 3: If the pixels are too few, raising the PPI without resampling changes nothing, and resampling invents pixels that are not there. Step 4: If the image is too small for the print size, you need a higher-resolution original.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does an adjustment layer do?",
      "choices": [
        "Permanently changes the pixels",
        "Changes brightness or colour without touching the original pixels",
        "Deletes the layer below",
        "Flattens the image"
      ],
      "answer": 1,
      "explanation": "Correct: (b). An adjustment layer changes the look non-destructively and can be changed or removed later. (a) is wrong: that is what Image > Adjustments does directly on a layer. (c) is wrong: an adjustment layer never deletes anything. (d) is wrong: flattening merges all layers into one."
    },
    {
      "q": "On a layer mask, what does painting black do?",
      "choices": [
        "Reveals the layer",
        "Hides that part of the layer",
        "Deletes the layer",
        "Changes the colour"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Black on a mask hides, white reveals, grey partly shows — and nothing is deleted. (a) is wrong: white reveals. (c) is wrong: masks never delete pixels. (d) is wrong: a mask affects visibility, not colour."
    },
    {
      "q": "Which tool is best for a precise product cut-out with clean edges?",
      "choices": [
        "Magic Wand",
        "Pen tool",
        "Quick Selection",
        "Eraser"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The Pen tool draws precise paths for the cleanest cut-outs. (a) is wrong: the Magic Wand is for flat colour areas and gives rough edges. (c) is wrong: Quick Selection is fast but not precise on hard edges. (d) is wrong: the Eraser deletes pixels and is not a selection tool."
    },
    {
      "q": "Which format keeps transparency for a logo on a website?",
      "choices": [
        "JPEG",
        "PNG",
        "GIF 89a",
        "BMP"
      ],
      "answer": 1,
      "explanation": "Correct: (b). PNG keeps transparency and is best for logos and graphics. (a) is wrong: JPEG has no transparency. (c) is wrong: GIF is an old format with limited colours. (d) is wrong: BMP is uncompressed and has no web use."
    },
    {
      "q": "What does Ctrl/Cmd+J do in Photoshop?",
      "choices": [
        "Joins two images",
        "Duplicates the selected layer or selection onto a new layer",
        "Opens the file",
        "Jumps to the next layer"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Ctrl/Cmd+J duplicates the selection or layer onto a new layer. (a) is wrong: joining images is done by dragging or placing. (c) is wrong: opening a file is Ctrl/Cmd+O. (d) is wrong: there is no jump shortcut called J."
    },
    {
      "q": "Why is the Background layer locked by default?",
      "choices": [
        "To stop you editing it by accident; double-click to unlock it",
        "Because it is a Smart Object",
        "Because it has no pixels",
        "Because the file is read-only"
      ],
      "answer": 0,
      "explanation": "Correct: (a). The Background layer is locked to protect the original; double-clicking turns it into a normal layer. (b) is wrong: the Background is not a Smart Object unless converted. (c) is wrong: the Background holds the image's pixels. (d) is wrong: the lock is a layer property, not a file permission."
    },
    {
      "q": "What is Select and Mask best for?",
      "choices": [
        "Cropping an image",
        "Refining tricky edges such as hair",
        "Changing the canvas size",
        "Saving a file"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Select and Mask is the workspace for refining difficult edges like hair and fur. (a) is wrong: cropping is the Crop tool. (c) is wrong: canvas size is changed in Image > Canvas Size. (d) is wrong: saving is File > Save or Export."
    },
    {
      "q": "What resolution should a photo be for print?",
      "choices": [
        "72 PPI",
        "150 PPI",
        "300 PPI",
        "1000 PPI"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 300 PPI is the standard for print. (a) is wrong: 72 PPI is enough for screens but looks soft in print. (b) is wrong: 150 PPI is acceptable for large prints but not the standard. (d) is wrong: 1000 PPI is far beyond what printers use and wastes file size."
    }
  ],
  "studyGuide": "\n<h3>Module 7 — ACP Photoshop Review: Tools, Layers & Selections: Quick Reference</h3>\n<p><strong>Core idea:</strong> Work non-destructively — adjustment layers, Smart Objects, and masks — and never delete pixels you can hide.</p>\n<p><strong>Shortcuts:</strong> V Move · M Marquee · L Lasso · W Quick Selection · B Brush · C Crop · T Type · Ctrl/Cmd+J duplicate · Ctrl/Cmd+E merge.</p>\n<p><strong>Layers:</strong> Stack like transparent sheets · adjustment layers change the look, not the pixels · Smart Objects keep filters editable · opacity and blend modes mix layers.</p>\n<p><strong>Selections:</strong> Marquee shapes · Lasso freehand · Quick Selection subjects · Magic Wand flat colour · Pen precision · feather softens · Select and Mask for hair.</p>\n<p><strong>Masks:</strong> Black hides, white reveals · clipping mask limits a layer to the shape below.</p>\n<p><strong>Formats:</strong> PSD keeps layers · TIFF print quality · JPEG small web photos, no transparency · PNG transparency for logos.</p>\n<p><strong>Watch out:</strong> Editing the Background directly; deleting instead of masking.</p>\n<p><strong>Self-check:</strong> Build a layered file, mask a subject out, and pick the right format for print and web, without looking. If you can, you have this module.</p>\n"
};
