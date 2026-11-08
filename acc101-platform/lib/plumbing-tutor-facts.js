'use strict';

/**
 * lib/plumbing-tutor-facts.js — Verified facts the plumbing tutor must not
 * contradict.
 *
 * The tutor answers from its own model knowledge, not from the course files,
 * so without grounding it can state wrong code values (it once told a
 * student a 3-inch drain needs 1/4 in/ft — the correct IPC 2021 Table 704.1
 * value is 1/8 in/ft). Every fact here is taught in the Plumbing &
 * Pipefitting course content and cites its source there; nothing here is
 * invented. If a fact changes, update the course content first, then this
 * file.
 *
 * Applied by lib/tutor.js buildTutorSystemPrompt() for every course whose
 * slug starts with "plb" (all 12 plumbing courses, capstone included).
 * A course may also carry its own `tutorFacts` array, which is appended
 * after these program facts.
 */

const PLUMBING_TUTOR_FACTS = [
  'Drainage slope, IPC 2021 Table 704.1 (minimum slope for horizontal drainage piping): pipe 2-1/2 inches and smaller = 1/4 inch per foot; pipe 3 through 6 inches = 1/8 inch per foot; pipe 8 inches and larger = 1/16 inch per foot. Worked check: a 3-inch branch running 24 feet needs 24 x 1/8 = 3 inches of total fall. More slope is NOT better: at excessive slope the water outruns the solids, leaving grease and food solids stranded, so the drain clogs sooner — use the code slope, uniformly, not more slope.',
  'Trap seal, IPC 1002.4: not less than 2 inches and not more than 4 inches. A seal is lost by evaporation, siphonage, backpressure, or capillary action/momentum. S-traps are prohibited (IPC 1002.3), along with bell traps and any trap that depends on moving parts to maintain its seal.',
  'Water pressure: static pressure above 80 psi requires a pressure-reducing valve (PRV). A PRV creates a closed system, so thermal expansion control is required (IPC 607.3), typically an expansion tank sized to hold pressure to 150 psi or the heater\'s rated pressure, whichever is lower. A water heater T&P (temperature and pressure) relief valve opens at 210 degrees F or 150 psi.',
  'Backflow prevention assemblies: RPZ (reduced pressure principle assembly) = ASSE 1013; DCVA (double check valve assembly) = ASSE 1015; PVB (pressure vacuum breaker) = ASSE 1020; SVBA (spill-resistant vacuum breaker) = ASSE 1056. RPZ and DCVA stop both backpressure and backsiphonage; PVB and SVBA stop backsiphonage only. A PVB must be installed at least 12 inches above the highest downstream outlet, with no shutoff valve downstream that could trap pressure against it.',
  'Michigan plumber licensing (LARA, Bureau of Construction Codes): Registered Apprentice (register within 30 days of starting work; hours count only while registration is current) -> after 6,000 hours over at least 3 years as a registered apprentice, the Journey Plumber exam (written: 125 questions, 180 minutes, open book, plus a hands-on practical exam) -> after 4,000 hours as a licensed journey plumber over at least 2 years, the Master Plumber exam. NCCER Plumbing runs Levels 1-4; each written module test is passed at 70% and NCCER credentials never expire.',
  'Code basis for this program: the 2021 Michigan Plumbing Code, based on the 2021 International Plumbing Code (IPC). Michigan uses the IPC, not the UPC.',
];

module.exports = { PLUMBING_TUTOR_FACTS };
