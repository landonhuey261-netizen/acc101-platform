'use strict';

/**
 * lib/asl-tutor-facts.js — Verified facts the American Sign Language tutor
 * must not contradict.
 *
 * The tutor answers from its own model knowledge, not from the course files,
 * so without grounding it can state wrong grammar rules or wrong test facts.
 * Every fact here is taught in the American Sign Language program content
 * and cites its source there; nothing here is invented. If a fact changes,
 * update the course content first, then this file.
 *
 * Applied by lib/tutor.js buildTutorSystemPrompt() for every course whose
 * slug starts with "asl" (all 12 American Sign Language courses, capstone
 * included). A course may also carry its own `tutorFacts` array, which is
 * appended after these program facts.
 */

const ASL_TUTOR_FACTS = [
  'ASL is a separate, complete language with its own grammar — NOT signed English. Never tell a student to sign English words in English word order. ASL uses topic-comment order: the topic comes first, then the comment about it.',
  'The five parameters of a sign (a sign changes meaning if any one of them changes): handshape, movement, location, palm orientation, and non-manual signals. A minimal pair is two signs that differ in exactly one parameter.',
  'Question facial grammar: yes/no questions use RAISED eyebrows, a slight head tilt, and held eye contact. Wh-questions (WHO, WHAT, WHERE, WHEN, WHY, HOW) use FURROWED brows and a slight head tilt. Rhetorical questions use a wh-word with RAISED eyebrows — they are not real questions and are not answered.',
  'Negation in ASL: a headshake (side-to-side) plus a negative sign (NOT, NEVER, NONE, NOT-YET, DON\'T-KNOW) — the headshake alone is part of the grammar, not just emphasis.',
  'Classifiers: entity classifiers show people, vehicles, or animals moving or located in space; handling classifiers show how hands handle or use an object; descriptive classifiers (size-and-shape specifiers) show the shape and size of things. Classifiers are not frozen vocabulary — they are productive grammar.',
  'Role-shifting: the signer shifts the body, shoulders, and eye gaze to become each character in a story. Depiction (showing, not telling) uses classifiers and space to act out what happened. Buoys hold a list or a reference point in space with the non-dominant hand while the dominant hand keeps signing.',
  'Fingerspelling rules: fingerspell names, places, and words with no sign — and only until the other person knows the word. Fingerspelling is done with the dominant hand, palm facing the listener, letters formed cleanly and at a steady speed (never bounced). Lexicalized fingerspelled signs (#BACK, #BUS, #EARLY, #CAR, #JOB) are produced as single smooth signs, not spelled letter by letter. Of the 26 letters of the manual alphabet, only J and Z move — J traces a J shape and Z traces a Z shape; the other 24 letters are held still.',
  'Numbers: ASL numbers 1-5 point up with the palm facing the listener; 6-10 twist or use different handshapes; numbers 11-15 have their own forms; 16-19 are compounds; 20 and up combine tens and ones. Time is signed on a timeline: past is behind the shoulder, present is in front of the body, future is forward.',
  'ASLPI (American Sign Language Proficiency Interview, Gallaudet University): a 20-25 minute video-recorded conversation with a trained interviewer, rated by a team of evaluators on a 0-5 scale. There is NO pass/fail — it is a proficiency rating. Level 0 = no functional ability; Level 1 = routine minimal needs; Level 2 = social routines and basic conversation; Level 3 = effective in most formal and informal conversation; Level 4 = fluent and accurate for professional needs; Level 5 = native-like. The interview is taken in person at Gallaudet in Washington, D.C., or by videophone from other locations. This app cannot give an ASLPI rating — only Gallaudet\'s live interview can. Never state a fee for the ASLPI.',
  'Deaf culture facts: Gallaudet University was founded in 1864 and is the world\'s only university designed for Deaf and hard-of-hearing students. Deaf President Now was a March 1988 protest at Gallaudet that won the first Deaf president, I. King Jordan. Getting a Deaf person\'s attention means a light tap on the shoulder, a wave in their line of sight, or a stomp on the floor — never grabbing their hands while they sign. Eye contact is held through a signed conversation; looking away mid-sentence is like walking out mid-word. Audism is discrimination against Deaf people on the basis of hearing status.',
  'Michigan interpreting law: under Michigan Public Act 204 of 2007, a person must hold interpreter certification (BEI — Board for Evaluation of Interpreters, through LARA) to work as a sign language interpreter in Michigan. Interpreting certification is a later-career step needing years of fluency plus interpreter training — this program teaches the language and the foundations, it does not certify interpreters. Never state a fee for the BEI.',
  'The interpreter\'s role: a conduit, not a participant. Interpreters follow a code of ethics built on confidentiality, accuracy, and impartiality — they do not add, omit, or change meaning, and they do not take sides. Transliterating (following English word order with signs) is different from interpreting (conveying meaning in ASL grammar).',
  'This app cannot grade expressive signing — it has no camera grading. It teaches receptive understanding, vocabulary, grammar, and culture. Expressive fluency needs practice signing with Deaf people. Never claim a student\'s signing is correct or fluent from a text conversation.',
];

module.exports = { ASL_TUTOR_FACTS };
