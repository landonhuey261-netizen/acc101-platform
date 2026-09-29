'use strict';

/**
 * lib/tutor.js — Course Tutor provider layer.
 *
 * Clean provider interface:
 *   chat({ model, system, messages }) -> Promise<text>
 *
 * The Anthropic provider posts to https://api.anthropic.com/v1/messages with
 * the global fetch (no new npm dependencies). The API key is read from the
 * ANTHROPIC_API_KEY environment variable at call time and is NEVER logged.
 *
 * Default model: claude-haiku-4-5 — Anthropic's current Haiku-class model
 * (fastest, near-frontier intelligence, $1/$5 per MTok), verified against
 * https://platform.claude.com/docs/en/about-claude/models/overview.md
 * (Claude API alias "claude-haiku-4-5", pinned snapshot
 * "claude-haiku-4-5-20251001"). Override with TUTOR_MODEL.
 */

const ANTHROPIC_API_URL = 'https://api.anthropic.com/v1/messages';
const ANTHROPIC_VERSION = '2023-06-01';
const DEFAULT_MODEL = 'claude-haiku-4-5';
const MAX_TOKENS = 1024;

/** True when an API key is configured (the tutor can be used). */
function tutorEnabled() {
  const key = process.env.ANTHROPIC_API_KEY;
  return typeof key === 'string' && key.trim().length > 0;
}

/** Model name: TUTOR_MODEL override, otherwise the Haiku-class default. */
function getModel() {
  const override = process.env.TUTOR_MODEL;
  if (typeof override === 'string' && override.trim().length > 0) return override.trim();
  return DEFAULT_MODEL;
}

/** Strip HTML tags to plain text for prompt building. */
function stripHtml(s) {
  return String(s == null ? '' : s)
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Build the tutor system prompt. Context is deliberately bounded:
 *  - moduleNum -> module title + objectives + up to 12 key terms
 *  - questionContext -> the post-attempt question/choices/student's
 *    answer/correct answer (explanations are already shown to the student)
 */
function buildTutorSystemPrompt({ course, moduleNum, questionContext }) {
  const courseTitle = (course && course.title) || 'this course';

  let prompt =
    'You are the Course Tutor for ' + courseTitle +
    ', a friendly expert tutor in financial accounting.\n\n' +
    'Teaching style:\n' +
    '- Be Socratic: guide the student with questions and step-by-step reasoning so they discover the answer themselves. Do not simply hand over answers.\n' +
    '- Explain the underlying reasoning in plain, simple language. Define any jargon you use.\n' +
    '- Stay scoped to the student\'s enrolled course material (financial accounting topics). If asked about something unrelated, say briefly that you are the accounting course tutor and steer back to coursework.\n' +
    '- Keep answers focused and readable: short paragraphs, occasional short lists. Avoid very long lectures.\n' +
    '- Encourage the student: notice what they got right before correcting what they got wrong.';

  // Bounded module context.
  if (moduleNum && course && course.modules && course.modules.byNumber) {
    const mod = course.modules.byNumber[moduleNum];
    if (mod) {
      const objectives = (mod.objectives || []).map(stripHtml).filter(Boolean);
      const terms = (mod.keyTerms || []).slice(0, 12)
        .map((t) => stripHtml(t && t.term) + ': ' + stripHtml(t && t.def))
        .filter((s) => s.length > 2);
      prompt += '\n\nThe student is currently asking about Module ' + mod.number +
        ' ("' + stripHtml(mod.title) + '").';
      if (objectives.length > 0) {
        prompt += '\nModule learning objectives:\n- ' + objectives.join('\n- ');
      }
      if (terms.length > 0) {
        prompt += '\nKey terms for this module:\n- ' + terms.join('\n- ');
      }
    }
  }

  // Post-attempt question context: the student already saw the explanation.
  if (questionContext && typeof questionContext === 'object') {
    const qc = questionContext;
    const question = stripHtml(qc.question).slice(0, 1500);
    const choices = Array.isArray(qc.choices)
      ? qc.choices.map(stripHtml).filter(Boolean).slice(0, 8)
      : [];
    const studentAnswer = stripHtml(qc.studentAnswer).slice(0, 500);
    const correctAnswer = stripHtml(qc.correctAnswer).slice(0, 500);
    if (question) {
      prompt += '\n\nThe student is asking about a question they already attempted (the correct answer and explanation were already shown to them). Help them understand the concept — do not just restate the answer.';
      prompt += '\nQuestion: ' + question;
      if (choices.length > 0) {
        prompt += '\nChoices:\n- ' + choices.join('\n- ');
      }
      if (studentAnswer) prompt += '\nThe student answered: ' + studentAnswer;
      if (correctAnswer) prompt += '\nThe correct answer is: ' + correctAnswer;
    }
  }

  return prompt;
}

/**
 * Chat with the Anthropic Messages API.
 * @param {object} opts
 * @param {string} [opts.model]
 * @param {string} [opts.system]
 * @param {Array<{role:'user'|'assistant', content:string}>} opts.messages
 * @returns {Promise<string>} the assistant's reply text
 */
async function chat({ model, system, messages }) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey || !apiKey.trim()) {
    throw new Error('ANTHROPIC_API_KEY is not configured.');
  }

  const payload = {
    model: (typeof model === 'string' && model.trim()) || getModel(),
    max_tokens: MAX_TOKENS,
    system: typeof system === 'string' ? system : '',
    messages: (Array.isArray(messages) ? messages : []).map((m) => ({
      role: m && m.role === 'assistant' ? 'assistant' : 'user',
      content: String(m && m.content != null ? m.content : '').slice(0, 8000),
    })),
  };

  let res;
  try {
    res = await fetch(ANTHROPIC_API_URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': ANTHROPIC_VERSION,
      },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    throw new Error('Could not reach the tutor service (' + err.message + ').');
  }

  if (!res.ok) {
    // Never include the API key (or full provider internals) in the error.
    let detail = '';
    try { detail = (await res.text()).slice(0, 200); } catch (err) { /* ignore */ }
    throw new Error('Tutor service returned HTTP ' + res.status + (detail ? ': ' + detail : ''));
  }

  const data = await res.json();
  const text = (Array.isArray(data.content) ? data.content : [])
    .filter((b) => b && b.type === 'text' && typeof b.text === 'string')
    .map((b) => b.text)
    .join('')
    .trim();

  if (!text) {
    throw new Error('Tutor service returned an empty reply.');
  }
  return text;
}

module.exports = {
  tutorEnabled,
  getModel,
  buildTutorSystemPrompt,
  chat,
  DEFAULT_MODEL,
  ANTHROPIC_API_URL,
  ANTHROPIC_VERSION,
};
