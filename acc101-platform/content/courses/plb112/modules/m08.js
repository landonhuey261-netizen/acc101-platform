// Plumbing 112 - Module 8: Brazing Deep Dive: Filler Metals, Flux & Heat Control
module.exports = {
  "number": 8,
  "slug": "brazing-deep-dive",
  "title": "Brazing Deep Dive: Filler Metals, Flux & Heat Control",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain how brazing works and when it is required instead of soldering.",
    "Name common brazing filler metals and choose the right one for copper, brass, and steel.",
    "Explain what flux does and when it is and is not needed.",
    "Control heat correctly: heat the joint, not the filler, and avoid overheating.",
    "Inspect a brazed joint and name the signs of a good and a bad one."
  ],
  "sections": [
    {
      "heading": "Brazing, Revisited in Depth",
      "html": "<p>Brazing joins metals by heating the joint above 840°F and drawing a molten filler metal into the gap by capillary action — the same capillary idea as soldering, with a stronger filler and a hotter joint. The base metals never melt. The result is a joint that is stronger than a soldered joint, handles higher temperatures and pressures, and is the standard for refrigeration lines, medical gas systems, and high-pressure copper work.</p>\n<p>The dividing line is the filler metal's melting point: below 840°F is soldering, above 840°F is brazing. That line matters because it decides the torch, the filler, the flux, and the skill needed. A joint that must be brazed cannot be soldered instead — the solder would melt and fail at the system's working temperature.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Brazing is capillary joining above 840°F. Same idea as soldering, stronger filler, hotter joint — and the filler, not the flame, must melt in the joint.</div>"
    },
    {
      "heading": "Filler Metals: Choosing the Right Alloy",
      "html": "<p>The most common brazing filler for copper to copper is a <strong>copper-phosphorus alloy</strong>, often called sil-phos, with 5% or 15% silver. It is <strong>self-fluxing on copper</strong> — no separate flux is needed when brazing copper to copper, because the phosphorus acts as the flux. The 15% silver alloy flows more easily and is the standard for refrigeration service work.</p>\n<p>For copper to brass or copper to steel, sil-phos will not wet the brass or steel on its own. Those joints need a <strong>silver-bearing filler</strong> (such as a 45% silver alloy) with <strong>flux</strong>, because the flux cleans the brass or steel surface so the filler can wet it. Using the wrong filler for the metals is the most common brazing error: the filler balls up and rolls off, and the joint never forms.</p>\n<p>Filler metals are also chosen by temperature: each alloy has a melting range, and the joint must be heated into that range — hot enough for the filler to flow, not so hot that the filler boils or the base metal is damaged.</p>"
    },
    {
      "heading": "Flux: What It Does and When It Is Needed",
      "html": "<p><strong>Flux</strong> is a chemical that cleans the metal as it heats, prevents oxidation while the joint is hot, and helps the molten filler flow into the joint. It is required when brazing copper to brass or steel, and when brazing any metal that the filler will not wet on its own. It is not needed for sil-phos on copper to copper, because the phosphorus in the alloy does the fluxing.</p>\n<p>Flux has a working life: it is applied to the clean joint, it melts and cleans as the joint heats, and if the joint is overheated the flux burns off and the metal oxidizes — at which point the filler will not wet the joint at all. A joint whose flux has burned off must be allowed to cool, cleaned again, re-fluxed, and re-brazed. Flux residue left on a finished joint must be cleaned off, because it is corrosive and will attack the metal over time.</p>"
    },
    {
      "heading": "Heat Control: The Skill of Brazing",
      "html": "<p>Heat control is the whole skill of brazing. <strong>Heat the joint, not the filler:</strong> the torch heats the copper (and the fitting) until the joint is hot enough to melt the filler on contact, and the filler is then fed at the joint edge and drawn in by capillary action. Heating the filler rod directly with the flame melts it onto the surface, where it sits instead of flowing in — the same error as in soldering, with a hotter torch.</p>\n<p><strong>Heat evenly and heat the heavier part more:</strong> a large fitting needs more heat than a small tube, so the flame spends more time on the fitting. <strong>Do not overheat:</strong> overheated copper becomes porous and weak, overheated filler boils and leaves a poor joint, and overheated flux burns off. The signs of correct heat are a dull red glow on copper at the right temperature for sil-phos, and filler that flows smoothly into the joint when touched to it. After brazing, let the joint cool undisturbed, then clean off flux residue.</p>\n<div class=\"callout\"><strong>Key idea:</strong> The joint melts the filler — never the torch. Heat the joint evenly, feed the filler at the edge, and let capillary action do the work.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Brazing is capillary joining above 840°F; the base metals never melt; the joint is stronger than a soldered joint.</li>\n<li>Sil-phos (copper-phosphorus, 5% or 15% silver) is self-fluxing on copper to copper. Copper to brass or steel needs a silver-bearing filler with flux.</li>\n<li>Flux cleans, prevents oxidation, and helps filler flow; it burns off if overheated, and residue must be cleaned off after.</li>\n<li>Heat the joint, not the filler; heat the heavier part more; do not overheat — overheated copper goes porous and overheated filler boils.</li>\n<li>Good brazed joint: filler drawn fully around the joint, smooth fillet, clean metal after flux removal. Bad joint: filler balled on the surface, gaps, blackened or porous copper — take apart and remake.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Using sil-phos with no flux on copper to brass. Sil-phos is self-fluxing on copper only — on brass or steel it will not wet the metal, and the joint will fail.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Melting the filler rod with the torch flame. The filler must be melted by the hot joint so capillary action draws it in — flame-melted filler sits on the surface and does not bond.</div>\n<p><strong>Ready-to-Work link:</strong> NCCER and ASSE 6010 medical gas training both require brazing to this standard. If you can choose the filler and control the heat, you have this module.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Brazing",
      "def": "Joining metals above 840°F with a filler metal drawn in by capillary action; stronger than soldering."
    },
    {
      "term": "Filler metal",
      "def": "The alloy melted into a brazed joint; chosen by the metals being joined and the service temperature."
    },
    {
      "term": "Sil-phos",
      "def": "A copper-phosphorus brazing filler (5% or 15% silver), self-fluxing on copper-to-copper joints."
    },
    {
      "term": "Silver filler",
      "def": "A silver-bearing brazing alloy (such as 45% silver) used with flux for copper to brass or steel."
    },
    {
      "term": "Flux",
      "def": "A chemical that cleans metal, prevents oxidation, and helps filler metal flow; required when brazing copper to brass or steel."
    },
    {
      "term": "Capillary action",
      "def": "The force that draws molten filler metal into the narrow gap of a joint."
    },
    {
      "term": "Melting range",
      "def": "The temperature range over which a filler metal melts and flows."
    },
    {
      "term": "Fillet",
      "def": "The smooth, concave ring of filler metal visible at the edge of a finished brazed or soldered joint."
    },
    {
      "term": "Overheating",
      "def": "Heating a joint too much, making copper porous, boiling filler, and burning off flux."
    },
    {
      "term": "Self-fluxing",
      "def": "A filler metal, such as sil-phos on copper, that cleans the joint without a separate flux."
    },
    {
      "term": "Medical gas",
      "def": "Piped gases (such as oxygen) in hospitals, installed with brazed copper joints to NFPA 99 and ASSE 6010."
    },
    {
      "term": "NFPA 99",
      "def": "The standard for health care facilities, including medical gas systems."
    },
    {
      "term": "Porous copper",
      "def": "Copper damaged by overheating, with a spongy, weakened structure."
    },
    {
      "term": "Flux residue",
      "def": "Leftover flux on a finished joint; corrosive and must be cleaned off."
    }
  ],
  "video": {
    "title": "Brazing Copper to Copper with Sil-Fos®",
    "embedUrl": "https://www.youtube.com/embed/kLUXDiFwjgQ",
    "note": "Watch the brazing sequence up close — clean, heat the joint, feed the filler at the edge — and note how the filler is drawn in by the heat of the joint, not by the flame.",
    "more": [
      {
        "title": "How to braze copper: copper-copper joint",
        "url": "https://www.youtube.com/watch?v=T0l61JkvvVI"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A refrigeration line must be joined. Why is it brazed rather than soldered?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Brazing works above 840°F with a stronger filler, so the joint holds the high pressures and temperatures of a refrigeration system. Step 2: Solder would melt and fail at the system's working conditions. Step 3: Brazing is the required method for refrigeration lines.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A student brazes copper to brass using sil-phos and no flux. The filler balls up and rolls off the brass. What went wrong, and what is the fix?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Sil-phos is self-fluxing on copper to copper only — it will not wet brass without flux. Step 2: Copper to brass needs a silver-bearing filler with flux. Step 3: Let the joint cool, clean it to bright metal, apply flux, and re-braze with the correct silver filler.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A brazed joint is overheated — the flux has burned off and the copper is blackened. What do you do?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Stop — filler will not wet oxidized copper. Step 2: Let the joint cool, take it apart, and clean both surfaces back to bright metal. Step 3: Re-flux, reassemble, and re-braze with controlled, even heat, feeding the filler at the joint edge.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Why must the filler rod be melted by the joint and not by the torch flame?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Only a hot joint draws filler in by capillary action, filling the gap fully. Step 2: Flame-melted filler sits on the surface and does not bond inside the joint. Step 3: The joint looks brazed but will leak or fail under pressure.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A large brass fitting is being brazed to a small copper tube. Where should the torch spend most of its time, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Spend more time heating the larger, heavier fitting. Step 2: The fitting has more mass and needs more heat to reach brazing temperature. Step 3: The small tube heats quickly by conduction from the fitting; heating the tube most would overheat it while the fitting is still too cold.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> After brazing with flux, the joint is left with flux residue on it. Why must it be cleaned off?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Flux residue is corrosive and will attack the metal over time. Step 2: It can also contaminate the system — in medical gas or refrigeration lines, residue is a serious defect. Step 3: Clean the joint after it cools, removing all flux residue.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Brazing works above what temperature?",
      "choices": [
        "200°F",
        "450°F",
        "840°F",
        "1,500°F"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Above 840°F is brazing; below is soldering. (a) 200°F is a water temperature. (b) 450°F is in the soldering range. (d) 1,500°F is above the usual brazing range."
    },
    {
      "q": "Sil-phos is self-fluxing when joining:",
      "choices": [
        "Copper to brass",
        "Copper to copper",
        "Copper to steel",
        "Copper to plastic"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The phosphorus in sil-phos fluxes copper-to-copper joints. (a) and (c) Copper to brass or steel needs silver filler with flux. (d) Brazing never joins plastic."
    },
    {
      "q": "Copper to brass brazing needs:",
      "choices": [
        "Sil-phos with no flux",
        "A silver-bearing filler with flux",
        "Lead solder",
        "No filler at all"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Silver filler plus flux wets brass. (a) Sil-phos will not wet brass on its own. (c) Lead solder is for low-temperature soldering, not brazing. (d) Every brazed joint needs filler."
    },
    {
      "q": "Flux is needed in brazing to:",
      "choices": [
        "Add color to the joint",
        "Clean the metal, prevent oxidation, and help filler flow",
        "Cool the joint",
        "Replace the filler"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Flux cleans, protects, and helps flow. (a) Color is irrelevant. (c) Flux does not cool anything. (d) Flux never replaces filler metal."
    },
    {
      "q": "The filler rod should be melted by:",
      "choices": [
        "The torch flame directly",
        "The hot joint at the edge of the fitting",
        "A lighter",
        "Friction"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The joint's heat melts the filler and capillary action draws it in. (a) Flame-melted filler sits on the surface and does not bond. (c) A lighter cannot heat a joint. (d) Friction does not melt filler."
    },
    {
      "q": "Overheating a brazed joint can:",
      "choices": [
        "Make the copper stronger",
        "Make copper porous, boil the filler, and burn off the flux",
        "Improve the seal",
        "Do nothing"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Overheating damages the copper, the filler, and the flux. (a) Overheating weakens copper. (c) Overheating ruins the joint. (d) Overheating has real consequences."
    },
    {
      "q": "Flux residue left on a finished joint must be:",
      "choices": [
        "Left alone",
        "Cleaned off, because it is corrosive",
        "Painted over",
        "Heated again"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Residue corrodes the metal and contaminates the system. (a) Leaving it invites corrosion. (c) Paint hides it. (d) Reheating does not remove it."
    },
    {
      "q": "When brazing a large fitting to a small tube, heat mostly the:",
      "choices": [
        "Small tube",
        "Large fitting, because it has more mass and needs more heat",
        "Filler rod",
        "Workbench"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The heavier part needs more heat to reach brazing temperature. (a) The small tube heats fast and would overheat. (c) The filler is melted by the joint, not the flame. (d) The workbench is never heated."
    }
  ],
  "studyGuide": "\n<h3>Module 8 — Brazing Deep Dive: Quick Reference</h3>\n<p><strong>Line:</strong> above 840°F = brazing, below = soldering. Base metals never melt; filler is drawn in by capillary action.</p>\n<p><strong>Fillers:</strong> sil-phos (copper-phosphorus, 5% or 15% silver) is self-fluxing on copper to copper. Copper to brass or steel needs a silver-bearing filler (such as 45% silver) with flux.</p>\n<p><strong>Flux:</strong> cleans, prevents oxidation, helps filler flow. Burns off if overheated — then the joint must cool, be cleaned, re-fluxed, and remade. Residue is corrosive and must be cleaned off.</p>\n<p><strong>Heat control:</strong> heat the joint, not the filler; heat the heavier part more; do not overheat. Filler flows when touched to a hot joint.</p>\n<p><strong>Good joint:</strong> filler drawn fully around, smooth fillet, clean metal after flux removal. <strong>Bad joint:</strong> balled filler, gaps, blackened or porous copper — remake it.</p>\n<p><strong>Self-check:</strong> Choose the filler and flux for three joints (copper-copper, copper-brass, copper-steel) and explain the heat rule for each.</p>\n"
};
