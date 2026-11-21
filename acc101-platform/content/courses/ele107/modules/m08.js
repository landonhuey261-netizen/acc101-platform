// ele107 - Module 8: Transformer Sizing & Protection
module.exports = {
  "number": 8,
  "slug": "transformer-sizing-protection",
  "title": "Transformer Sizing & Protection",
  "estTime": "3–4 hours",
  "objectives": [
    "Size a transformer from a load in kVA, including continuous-load and growth allowances.",
    "Calculate primary and secondary full-load currents for single-phase and three-phase transformers.",
    "Apply NEC Table 450.3(B) for primary-only and primary-plus-secondary overcurrent protection.",
    "Size transformer primary and secondary conductors at 125% of full-load current.",
    "Explain inrush current and why transformer protection must tolerate it."
  ],
  "sections": [
    {
      "heading": "Sizing from the Load: kVA First",
      "html": "<p>Transformer sizing starts with the load, measured in volt-amperes. Add up the loads the transformer will serve — lighting, receptacles, motors, HVAC — in VA or kVA, then apply the rules that keep the transformer from running hot for its whole life. Loads that run three hours or more are <strong>continuous loads</strong>, and the NEC treats them with a 125% factor: the transformer and its conductors must be sized for 125% of the continuous load. It is also good practice to leave room for growth — a transformer loaded to 100% on day one has nowhere to go when the building adds equipment.</p>\n<p>Standard dry-type transformer ratings run in steps — 15, 30, 45, 75, 112.5, 150, 225, 300 kVA and up — so you calculate the required kVA and round up to the next standard size. A calculated load of 64 kVA with growth allowance becomes a 75 kVA transformer, not a 64 kVA one, because transformers are only made in standard sizes and because running a transformer near its rating shortens its insulation life. Oversizing too far wastes money and energy (remember core loss from Module 6), so the target is a transformer loaded to roughly 70–85% under normal conditions.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Size in kVA from the real load, add 125% for continuous loads, allow for growth, then round up to the next standard rating. The full-load currents you calculate next are what everything else is sized from.</div>"
    },
    {
      "heading": "Full-Load Currents: The Two Formulas",
      "html": "<p>Every protection and conductor decision starts from the transformer's <strong>full-load current (FLA)</strong>. For a single-phase transformer: I = (kVA × 1,000) / V. For a three-phase transformer: I = (kVA × 1,000) / (V × √3). A 15 kVA, 480 V to 208Y/120 V, three-phase transformer draws 15,000 / (480 × 1.732) = 18.0 A on the primary and 15,000 / (208 × 1.732) = 41.6 A on the secondary. A 75 kVA unit at the same voltages draws 90.2 A primary and 208.2 A secondary. Work these numbers first and write them down — every rule in this module multiplies one of them.</p>\n<p>Transformer conductors are sized at <strong>125% of full-load current</strong> (NEC 215.2(A)(1) for feeders and 210.19(A)(1) for branch circuits, applied to the continuous portion of the load). For the 15 kVA example, the primary conductors must carry 18.0 × 1.25 = 22.5 A and the secondary conductors 41.6 × 1.25 = 52.0 A. The conductor is then picked from NEC Table 310.16 in the 75°C column, keeping in mind the small-conductor limits of 240.4(D) — for example, 12 AWG copper is capped at 20 A of protection even though its 75°C ampacity is 25 A, so a 25 A device needs 10 AWG copper.</p>"
    },
    {
      "heading": "NEC Table 450.3(B): Overcurrent Protection",
      "html": "<p><strong>NEC Table 450.3(B)</strong> (2023 NEC) sets the overcurrent protection for transformers rated 1,000 V and less, and it offers two paths. With <strong>primary-only protection</strong>, the primary device may be up to 125% of the primary full-load current when that current is 9 A or more — and Note 1 allows rounding up to the next standard device size. Between 2 A and 9 A the limit is 167%, and below 2 A it is 300%, with no rounding up in either case. For the 15 kVA example (18.0 A primary), 125% is 22.5 A, and Note 1 allows the next standard size up: a 25 A breaker.</p>\n<p>With <strong>primary and secondary protection</strong>, the primary device may go up to 250% of primary FLA (no rounding up — round down to the next standard size) and the secondary device up to 125% of secondary FLA (rounding up allowed by Note 1). For the same 15 kVA transformer, that means a primary device up to 45 A (250% of 18.0 A, exactly a standard size) and a secondary device up to 52 A, rounding up to 60 A. The higher primary allowance exists because the secondary device now protects the transformer too — but it also means the primary device is less sensitive, so the secondary device must be correct. The reason for all these generous percentages is <strong>inrush current</strong>: energizing a transformer can draw 12–25 times its full-load current for the first few cycles as the core magnetizes, and the protection must ride through that surge without tripping.</p>"
    },
    {
      "heading": "Grounding a Separately Derived System",
      "html": "<p>A transformer creates a <strong>separately derived system</strong>: the secondary has no direct electrical connection to the primary, so it needs its own grounding. Under <strong>NEC 250.30</strong>, the secondary neutral is bonded to the equipment grounding system with a <strong>system bonding jumper</strong>, and a <strong>grounding electrode conductor</strong> connects that point to a grounding electrode (such as the building's grounding electrode system). This bond is what gives a ground fault a low-impedance path back to the source so the overcurrent device can clear it — without it, a fault to a metal enclosure could leave the enclosure energized at full voltage with nothing to trip the breaker.</p>\n<p>The system bonding jumper is installed at the transformer or at the first disconnecting means, but at one place only — a second bond creates a parallel neutral path and objectionable current on grounding conductors. The grounding electrode conductor is sized from NEC Table 250.66 based on the size of the secondary conductors. This is work for a licensed electrician under supervision, and it is verified with the power off: the bond connections are torqued, the electrode connection is inspected, and the installation is documented before the transformer is energized.</p>\n<div class=\"callout\"><strong>Common mistake:</strong> Bonding the secondary neutral at two places — at the transformer and again at a downstream panel. One bond only. A second bond splits neutral current onto the grounding conductors, which is both a code violation and a safety hazard.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Size from the load in kVA, add 125% for continuous loads, allow for growth, and round up to the next standard rating.</li>\n<li>FLA: single-phase I = kVA × 1,000 / V; three-phase I = kVA × 1,000 / (V × √3). Conductors at 125% of FLA.</li>\n<li>Table 450.3(B): primary-only protection 125% (≥9 A, round up allowed), 167% (2–9 A), 300% (&lt;2 A). Primary + secondary: primary 250% (round down), secondary 125% (round up allowed).</li>\n<li>Inrush current (12–25× FLA for a few cycles) is why the percentages are generous — protection must ride through energizing.</li>\n<li>A transformer secondary is a separately derived system: one system bonding jumper (NEC 250.30), one grounding electrode conductor, never two bonds.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Rounding up the primary device when using primary-plus-secondary protection. The 250% primary allowance has no rounding up — if 250% does not land on a standard size, you round down.</div>\n<p><strong>Ready-to-Work link:</strong> If you can size a 45 kVA transformer from its load, work out both full-load currents, and pick the primary and secondary devices under Table 450.3(B), you have this module. Module 9 covers generators and alternators.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Full-load current (FLA)", "def": "A transformer's rated current at full kVA: single-phase kVA × 1,000 / V, three-phase kVA × 1,000 / (V × √3)." },
    { "term": "Continuous load", "def": "A load expected to run for three hours or more; sized at 125% under the NEC." },
    { "term": "Table 450.3(B)", "def": "The NEC 2023 table for overcurrent protection of transformers rated 1,000 V and less." },
    { "term": "Primary-only protection", "def": "Protecting a transformer with a device on the primary only; limited to 125% of primary FLA at 9 A and up." },
    { "term": "Primary and secondary protection", "def": "Protecting a transformer with devices on both sides; primary up to 250%, secondary up to 125%." },
    { "term": "Inrush current", "def": "The magnetizing surge when a transformer is energized, 12–25 times full-load current for a few cycles." },
    { "term": "Standard device sizes", "def": "The breaker and fuse ratings in NEC Table 240.6(A): 15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90, 100 A, and up." },
    { "term": "Separately derived system", "def": "A system whose power comes from a source with no direct connection to another system's conductors, such as a transformer secondary." },
    { "term": "System bonding jumper", "def": "The connection that bonds the secondary neutral to the equipment grounding system (NEC 250.30)." },
    { "term": "Grounding electrode conductor", "def": "The conductor that connects the bonded neutral to a grounding electrode." },
    { "term": "Table 310.16", "def": "The NEC table of conductor ampacities, used in the 75°C column for transformer conductors." },
    { "term": "240.4(D)", "def": "The NEC rule capping overcurrent protection for small conductors (for example, 12 AWG copper at 20 A)." },
    { "term": "Standard kVA ratings", "def": "The manufactured transformer sizes: 15, 30, 45, 75, 112.5, 150, 225, 300 kVA, and up." },
    { "term": "Growth allowance", "def": "Extra capacity sized into a transformer for future loads." }
  ],
  "video": {
    "title": "Transformer OCPD - Pri. & Sec. Protection, Table 450.3(B)",
    "embedUrl": "https://www.youtube.com/embed/Otjmm8875rI",
    "note": "A worked walkthrough of NEC Table 450.3(B) — primary-only versus primary-and-secondary protection — with the percentages and the rounding rules explained on real examples.",
    "more": [
      { "title": "NEC Article 450 Explained: EP.2 Transformer Sizing", "url": "https://www.youtube.com/watch?v=UvX7ok_40kc" },
      { "title": "Transformer OCPD - Primary-Only Protection, Table 450.3(B)", "url": "https://www.youtube.com/watch?v=i7lbHtBuE38" }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A 15 kVA, 480 V to 208Y/120 V, three-phase transformer is protected primary-only. What is the maximum primary overcurrent device size?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Primary FLA = 15,000 / (480 × 1.732) = 18.0 A. Step 2: Primary-only limit at 9 A and up is 125%: 18.0 × 1.25 = 22.5 A. Step 3: Note 1 allows the next standard size up: 25 A.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> The same 15 kVA transformer is protected with primary and secondary devices. What are the maximum device sizes on each side?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Primary: 250% of 18.0 A = 45 A (no rounding up; 45 A is a standard size). Step 2: Secondary FLA = 15,000 / (208 × 1.732) = 41.6 A. Step 3: Secondary: 125% of 41.6 A = 52.0 A; Note 1 allows the next standard size up: 60 A.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A single-phase transformer is rated 10 kVA, 240 V to 120 V. What is the secondary full-load current, and what ampacity must the secondary conductors have?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Secondary FLA = 10,000 / 120 = 83.3 A. Step 2: Conductors at 125%: 83.3 × 1.25 = 104.2 A. Step 3: Secondary conductors must have an ampacity of at least 104 A.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A 75 kVA, 480 V to 208Y/120 V, three-phase transformer feeds a load calculated at 60 kVA with growth allowance. Is the transformer the right size?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The calculated load is 60 kVA; the next standard size above 60 kVA is 75 kVA. Step 2: 60 / 75 = 80% loaded — in the healthy 70–85% range. Step 3: Yes, the 75 kVA unit is a good fit with room for growth.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A 1 kVA single-phase transformer at 480 V has a primary current of about 2.1 A. What is the maximum primary-only overcurrent device size under Table 450.3(B)?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Primary current is between 2 A and 9 A, so the 167% rule applies. Step 2: 2.1 × 1.67 = 3.5 A. Step 3: No rounding up is allowed in this band, so the device must be 3.5 A or smaller — a 3 A fuse, for example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A transformer secondary neutral is bonded at the transformer and again at a downstream panel. What is wrong with this, and what is the fix?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The secondary is a separately derived system and must have exactly one system bonding jumper (NEC 250.30). Step 2: Two bonds create a parallel neutral path, putting neutral current on the grounding conductors. Step 3: The fix is to remove the second bond so the neutral is bonded at one place only.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Transformer conductors are sized at what percentage of full-load current?",
      "choices": [ "100%", "110%", "125%", "150%" ],
      "answer": 2,
      "explanation": "Correct: (c). 125% of FLA for the continuous portion of the load. (a) 100% leaves no margin for continuous loading. (b) 110% is not the NEC factor. (d) 150% is more than the code requires."
    },
    {
      "q": "Under NEC Table 450.3(B), primary-only protection for a transformer with primary current of 9 A or more is limited to:",
      "choices": [ "100% of primary FLA", "125% of primary FLA, with rounding up allowed", "250% of primary FLA", "300% of primary FLA" ],
      "answer": 1,
      "explanation": "Correct: (b). 125% with Note 1 rounding up to the next standard size. (a) 100% is too strict. (c) 250% is the primary-plus-secondary allowance. (d) 300% applies only below 2 A."
    },
    {
      "q": "With primary and secondary protection, the primary device may be up to 250% of primary FLA, but:",
      "choices": [ "Rounding up to the next standard size is allowed", "There is no rounding up — round down to the next standard size", "The secondary device must be the same size", "No primary device is needed" ],
      "answer": 1,
      "explanation": "Correct: (b). The 250% primary allowance has no Note 1 rounding up. (a) Rounding up applies to the 125% rules, not this one. (c) The secondary device is sized separately at 125%. (d) A primary device is still required."
    },
    {
      "q": "Transformer inrush current at energizing can reach:",
      "choices": [ "The same as full-load current", "2–3 times full-load current", "12–25 times full-load current for a few cycles", "100 times full-load current for an hour" ],
      "answer": 2,
      "explanation": "Correct: (c). Magnetizing inrush is 12–25× FLA for a few cycles. (a) Inrush is far larger than FLA. (b) 2–3× is too small. (d) Inrush lasts cycles, not an hour."
    },
    {
      "q": "The full-load current of a 45 kVA, 480 V, three-phase transformer is about:",
      "choices": [ "94 A", "54 A", "125 A", "150 A" ],
      "answer": 1,
      "explanation": "Correct: (b). 45,000 / (480 × 1.732) = 54.1 A. (a) 94 A is the single-phase calculation. (c) 125 A is the secondary current at 208 V. (d) 150 A is too large."
    },
    {
      "q": "A transformer secondary is a separately derived system, which means it needs:",
      "choices": [ "No grounding at all", "One system bonding jumper and one grounding electrode conductor under NEC 250.30", "Two bonding jumpers for redundancy", "A bond at every panel it feeds" ],
      "answer": 1,
      "explanation": "Correct: (b). Exactly one bond, one electrode conductor. (a) An ungrounded secondary leaves faults with no clearing path. (c) Two bonds create objectionable current. (d) Bonding at every panel is the same error repeated."
    },
    {
      "q": "A load calculation totals 64 kVA including growth allowance. The best standard transformer size is:",
      "choices": [ "45 kVA", "60 kVA", "75 kVA", "150 kVA" ],
      "answer": 2,
      "explanation": "Correct: (c). 75 kVA is the next standard size above 64 kVA. (a) 45 kVA is undersized. (b) 60 kVA is not a standard rating and is below the load. (d) 150 kVA is far oversized and wastes energy on core loss."
    },
    {
      "q": "The small-conductor rule NEC 240.4(D) matters for transformer conductors because:",
      "choices": [ "12 AWG copper is capped at 20 A of protection even though its 75°C ampacity is 25 A", "Conductors must always be aluminum", "It bans the use of Table 310.16", "It requires all conductors to be 10 AWG" ],
      "answer": 0,
      "explanation": "Correct: (a). The 240.4(D) cap can force a larger conductor than the ampacity table suggests. (b) Copper or aluminum are both allowed. (c) Table 310.16 is still used. (d) Conductor size depends on the load, not a fixed size."
    }
  ],
  "studyGuide": "\n<h3>Module 8 — Transformer Sizing &amp; Protection: Quick Reference</h3>\n<p><strong>Core idea:</strong> Size in kVA from the load (+125% for continuous loads, +growth), round up to the next standard rating, then work from full-load currents.</p>\n<p><strong>FLA:</strong> 1-phase I = kVA × 1,000 / V · 3-phase I = kVA × 1,000 / (V × √3). Conductors at 125% of FLA.</p>\n<p><strong>Table 450.3(B):</strong> Primary-only: 125% (≥9 A, round up), 167% (2–9 A), 300% (&lt;2 A). Primary + secondary: primary 250% (round DOWN), secondary 125% (round up).</p>\n<p><strong>Inrush:</strong> 12–25× FLA for a few cycles — protection must ride through it.</p>\n<p><strong>Grounding:</strong> Separately derived system — one system bonding jumper, one grounding electrode conductor (NEC 250.30).</p>\n<p><strong>Self-check:</strong> Size the protection for a 15 kVA 480→208Y/120 V transformer both ways. If you can, you have this module.</p>\n"
};
