'use strict';

/* ACC 101 Course Platform — Course Tutor chat interface.
 * - loads conversation history from GET /api/c/:course/tutor/history
 * - sends messages to POST /api/c/:course/tutor/chat (Enter to send)
 * - picks up pre-attached question context left in sessionStorage by
 *   "Ask the Course Tutor" buttons (see public/app.js)
 * - all message text is rendered via textContent (no HTML injection)
 */

(function () {
  var chat = document.getElementById('tutorChat');
  if (!chat) return;

  var courseSlug = chat.getAttribute('data-course-slug') || '';
  var available = document.body.hasAttribute('data-tutor-available');
  var log = document.getElementById('tutorLog');
  var form = document.getElementById('tutorForm');
  var input = document.getElementById('tutorInput');
  var sendBtn = document.getElementById('tutorSend');
  var chip = document.getElementById('tutorContextChip');

  var sending = false;
  var pendingContext = null; // { moduleNum?, questionContext? }

  function scrollBottom() {
    log.scrollTop = log.scrollHeight;
  }

  /** Render one message bubble; textContent keeps user/assistant content safe. */
  function addMsg(role, text) {
    var wrap = document.createElement('div');
    wrap.className = 'tutor-msg ' + (role === 'assistant' ? 'tutor-assistant' : 'tutor-user');
    var who = document.createElement('span');
    who.className = 'tutor-who';
    who.textContent = role === 'assistant' ? 'Course Tutor' : 'You';
    var bubble = document.createElement('div');
    bubble.className = 'tutor-bubble';
    bubble.textContent = text;
    wrap.appendChild(who);
    wrap.appendChild(bubble);
    log.appendChild(wrap);
    scrollBottom();
  }

  function addTyping() {
    var wrap = document.createElement('div');
    wrap.className = 'tutor-msg tutor-assistant tutor-typing';
    wrap.setAttribute('id', 'tutorTyping');
    var bubble = document.createElement('div');
    bubble.className = 'tutor-bubble';
    bubble.innerHTML = '<span class="dot"></span><span class="dot"></span><span class="dot"></span>';
    wrap.appendChild(bubble);
    log.appendChild(wrap);
    scrollBottom();
  }

  function removeTyping() {
    var el = document.getElementById('tutorTyping');
    if (el && el.parentNode) el.parentNode.removeChild(el);
  }

  function showChip(ctx) {
    var label = 'Context attached';
    if (ctx.moduleNum) label += ' \u00b7 Module ' + ctx.moduleNum;
    if (ctx.questionContext) label += ' \u00b7 a question you already attempted';
    chip.textContent = '';
    var tag = document.createElement('span');
    tag.className = 'chip-tag';
    tag.textContent = label;
    var x = document.createElement('button');
    x.type = 'button';
    x.className = 'chip-x';
    x.setAttribute('aria-label', 'Remove attached context');
    x.textContent = '\u00d7';
    x.addEventListener('click', function () {
      pendingContext = null;
      chip.hidden = true;
    });
    chip.appendChild(tag);
    chip.appendChild(x);
    chip.hidden = false;
  }

  if (!available) {
    // Server already rendered the "not connected" notice; keep the form disabled.
    if (input) input.disabled = true;
    if (sendBtn) sendBtn.disabled = true;
    return;
  }

  /* ---- pre-attached context from "Ask the Course Tutor" buttons ---- */

  try {
    var raw = sessionStorage.getItem('acc101.tutorPrefill');
    if (raw) {
      sessionStorage.removeItem('acc101.tutorPrefill');
      var ctx = JSON.parse(raw);
      if (ctx && (ctx.moduleNum || ctx.questionContext)) {
        pendingContext = { moduleNum: ctx.moduleNum || null, questionContext: ctx.questionContext || null };
        showChip(pendingContext);
      }
      if (ctx && typeof ctx.prefill === 'string' && ctx.prefill && input) {
        input.value = ctx.prefill.slice(0, 4000);
        input.focus();
      }
    }
  } catch (e) { /* malformed context — continue without it */ }

  /* ---- history ---- */

  var apiBase = '/api/c/' + encodeURIComponent(courseSlug) + '/tutor';

  fetch(apiBase + '/history', { headers: { Accept: 'application/json' } })
    .then(function (r) {
      if (r.status === 401) { window.location.href = '/login'; return null; }
      if (!r.ok) throw new Error('history failed');
      return r.json();
    })
    .then(function (data) {
      if (!data) return;
      var msgs = data.messages || [];
      if (msgs.length === 0) {
        addMsg('assistant', 'Hi! I\u2019m your Course Tutor. Ask me anything about the course \u2014 a lecture idea, a key term, or a question you got wrong. I\u2019ll walk you through the reasoning step by step.');
      } else {
        msgs.forEach(function (m) { addMsg(m.role === 'assistant' ? 'assistant' : 'user', m.content); });
      }
    })
    .catch(function () {
      addMsg('assistant', 'I couldn\u2019t load your past conversation, but you can still ask me anything below.');
    });

  /* ---- sending ---- */

  function setBusy(busy) {
    sending = busy;
    if (sendBtn) sendBtn.disabled = busy;
    if (input) input.disabled = busy;
  }

  function send() {
    var text = input.value.trim();
    if (!text || sending) return;
    addMsg('user', text);
    input.value = '';

    var body = { message: text };
    if (pendingContext) {
      if (pendingContext.moduleNum) body.moduleNum = pendingContext.moduleNum;
      if (pendingContext.questionContext) body.questionContext = pendingContext.questionContext;
      pendingContext = null;
      chip.hidden = true;
    }

    setBusy(true);
    addTyping();

    fetch(apiBase + '/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    }).then(function (r) {
      if (r.status === 401) { window.location.href = '/login'; return null; }
      return r.json().then(function (data) { return { status: r.status, data: data }; });
    }).then(function (wrapped) {
      if (!wrapped) return;
      removeTyping();
      var data = wrapped.data || {};
      if (wrapped.status === 200 && data.reply) {
        addMsg('assistant', data.reply);
      } else if (wrapped.status === 503) {
        addMsg('assistant', data.message || 'The Course Tutor isn\u2019t connected yet.');
        if (input) input.disabled = true;
        if (sendBtn) sendBtn.disabled = true;
      } else {
        addMsg('assistant', data.message || 'Sorry, something went wrong. Please try again.');
      }
    }).catch(function () {
      removeTyping();
      addMsg('assistant', 'I couldn\u2019t reach the tutor service \u2014 check your connection and try again.');
    }).finally(function () {
      setBusy(false);
      if (input && !input.disabled) input.focus();
    });
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    send();
  });

  input.addEventListener('keydown', function (e) {
    // Enter sends; Shift+Enter inserts a newline.
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  });
})();
