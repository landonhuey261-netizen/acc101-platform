'use strict';

/* College Without College — client interactivity.
 * - solution toggles, assignment self-check save
 * - quiz / exam submit + instant feedback + tutor prompts
 * - exam countdown timer with auto-submit
 * - lab workpaper checking
 * - "Help me understand" / "Ask about this module" clipboard prompts
 * - service worker registration
 */

(function () {
  /* ---------------- utilities ---------------- */

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  var toastEl = null;
  var toastTimer = null;
  function toast(msg) {
    if (!toastEl) toastEl = document.getElementById('toast');
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove('show'); }, 4200);
  }

  function copyText(text) {
    function fallback() {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      var ok = false;
      try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
      document.body.removeChild(ta);
      return ok;
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text).then(function () { return true; }, fallback);
    }
    return Promise.resolve(fallback());
  }

  var COPIED_MSG = 'Copied \u2014 paste it to your AI assistant (e.g. Muse) in chat.';

  function wrongAnswerPrompt(courseTitle, num, title, question, mine, correct) {
    return "I'm taking " + courseTitle + ' (Module ' +
      num + ': ' + title + '). I got this question wrong: ' + question +
      " I answered '" + mine + "'; the correct answer is '" + correct + "'. " +
      'Please explain the underlying concept in simple terms and walk me through ' +
      "the reasoning step by step \u2014 don't just restate the answer.";
  }

  /* ---------------- mobile nav ---------------- */

  document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.getElementById('navToggle');
    var nav = document.getElementById('mainNav');
    if (toggle && nav) {
      toggle.addEventListener('click', function () {
        var open = nav.classList.toggle('open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    }
  });

  /* ---------------- solution toggles ---------------- */

  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.toggle-btn[data-toggle]');
    if (!btn) return;
    var target = document.getElementById(btn.getAttribute('data-toggle'));
    if (!target) return;
    var willShow = target.hasAttribute('hidden');
    if (willShow) target.removeAttribute('hidden');
    else target.setAttribute('hidden', '');
    btn.textContent = willShow ? 'Hide solution' : 'Show solution';
    btn.setAttribute('aria-expanded', willShow ? 'true' : 'false');
  });

  /* ---------------- tutor buttons (delegated, works for dynamic ones) ---------------- */

  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.tutor-btn[data-prompt]');
    if (!btn) return;
    copyText(btn.getAttribute('data-prompt')).then(function (ok) {
      toast(ok ? COPIED_MSG : 'Copy failed \u2014 your browser blocked clipboard access.');
    });
  });

  /* ---------------- "Ask the Course Tutor" buttons ----------------
   * Stashes the pre-attached context in sessionStorage, then opens the
   * tutor page, which picks it up (see public/tutor.js). Buttons are hidden
   * entirely when the tutor isn't available (no API key configured).
   */

  function tutorAvailable() {
    return !!(document.body && document.body.hasAttribute('data-tutor-available'));
  }

  document.addEventListener('DOMContentLoaded', function () {
    if (!tutorAvailable()) {
      var stale = document.querySelectorAll('.tutor-ask-btn');
      for (var i = 0; i < stale.length; i += 1) {
        if (stale[i].parentNode) stale[i].parentNode.removeChild(stale[i]);
      }
    }
  });

  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.tutor-ask-btn[data-tutor-ask]');
    if (!btn) return;
    var slug = btn.getAttribute('data-tutor-course') ||
      (document.body && document.body.getAttribute('data-tutor-course'));
    if (!slug) {
      toast('The Course Tutor isn\u2019t available here.');
      return;
    }
    try {
      sessionStorage.setItem('acc101.tutorPrefill', btn.getAttribute('data-tutor-ask'));
    } catch (err) { /* storage full/blocked — continue without context */ }
    window.location.href = '/c/' + encodeURIComponent(slug) + '/tutor';
  });

  /* ---------------- assignment self-check save ---------------- */

  document.addEventListener('DOMContentLoaded', function () {
    var saveBtn = document.getElementById('saveAssignment');
    if (!saveBtn) return;
    var status = document.getElementById('assignStatus');
    saveBtn.addEventListener('click', function () {
      var boxes = Array.prototype.slice.call(document.querySelectorAll('.assign-check'));
      boxes.sort(function (a, b) { return Number(a.dataset.index) - Number(b.dataset.index); });
      var checked = boxes.map(function (b) { return b.checked; });
      status.textContent = 'Saving\u2026';
      fetch('/api/c/' + encodeURIComponent(saveBtn.dataset.course) + '/assignments/' + encodeURIComponent(saveBtn.dataset.module), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ checked: checked }),
      }).then(function (r) {
        if (r.status === 401) { window.location.href = '/login'; return null; }
        if (!r.ok) throw new Error('save failed');
        return r.json();
      }).then(function (data) {
        if (data) status.textContent = 'Saved \u2713';
      }).catch(function () {
        status.textContent = 'Could not save \u2014 try again.';
      });
    });
  });

  /* ---------------- mark module complete ---------------- */

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('markComplete');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var status = document.getElementById('completeStatus');
      fetch('/api/c/' + encodeURIComponent(btn.dataset.course) + '/modules/' + encodeURIComponent(btn.dataset.module) + '/complete', { method: 'POST' })
        .then(function (r) {
          if (r.status === 401) { window.location.href = '/login'; return null; }
          if (!r.ok) throw new Error('failed');
          return r.json();
        })
        .then(function (data) {
          if (!data) return;
          var note = document.createElement('p');
          note.className = 'done-note';
          note.innerHTML = '<span class="done-mark">\u2713</span> You marked this module complete.';
          btn.replaceWith(note);
          if (status) status.textContent = '';
        })
        .catch(function () { if (status) status.textContent = 'Could not save \u2014 try again.'; });
    });
  });

  /* ---------------- quiz / exam results rendering ---------------- */

  function renderResults(container, data, opts) {
    var courseTitle = opts.courseTitle || '';
    var courseSlug = opts.courseSlug || '';
    var num = opts.moduleNum;
    var title = opts.moduleTitle;
    var askAvailable = tutorAvailable() && courseSlug;

    var html = '<div class="quiz-score-banner" role="status">' +
      'You scored <strong>' + esc(data.score) + ' / ' + esc(data.total) + '</strong>' +
      ' (' + esc(data.percent) + '%)' +
      (data.best != null ? ' \u00b7 Best so far: <strong>' + esc(data.best) + '%</strong>' : '') +
      '</div>';

    if (data.verdict) {
      var passedVerdict = data.verdict === 'PASS';
      html += '<div class="quiz-score-banner ' + (passedVerdict ? 'is-correct' : 'is-wrong') + '" role="status">' +
        'Verdict: <strong>' + esc(data.verdict) + '</strong>' +
        (data.passPercent != null ? ' \u2014 the passing standard for this exam is ' + esc(data.passPercent) + '%' : '') +
        '</div>';
    }

    var questions = opts.questions; // array of {question, choices:[text], givenIdx}
    data.results.forEach(function (res, i) {
      var q = questions[i] || {};
      var correctText = q.choices && res.answer != null ? q.choices[res.answer] : '';
      var givenText = q.givenText || '(no answer)';
      var cls = res.correct ? 'is-correct' : 'is-wrong';
      var askCtx = '';
      if (askAvailable) {
        var ctx = {
          moduleNum: num ? Number(num) : null,
          questionContext: {
            question: q.question || '',
            choices: q.choices || [],
            studentAnswer: givenText,
            correctAnswer: correctText,
          },
          prefill: 'Can you help me understand this question?',
        };
        askCtx = ' <button type="button" class="tutor-ask-btn" data-tutor-ask="' +
          esc(JSON.stringify(ctx)) + '" data-tutor-course="' + esc(courseSlug) +
          '">Ask the Course Tutor</button>';
      }
      html += '<div class="question-feedback ' + cls + '">' +
        '<p class="feedback-head">' + (res.correct ? '\u2713 Correct' : '\u2717 Incorrect') +
        ' \u2014 Q' + (i + 1) + '</p>' +
        '<p><strong>Question:</strong> ' + esc(q.question || '') + '</p>' +
        (res.correct
          ? ''
          : '<p><strong>You answered:</strong> ' + esc(givenText) + '<br>' +
            '<strong>Correct answer:</strong> ' + esc(correctText) + '</p>') +
        (res.explanation ? '<p><strong>Why:</strong> ' + esc(res.explanation) + '</p>' : '') +
        (res.correct ? '' :
          '<button type="button" class="tutor-btn" data-prompt="' +
          esc(wrongAnswerPrompt(courseTitle, num, title, q.question || '', givenText, correctText)) +
          '">Help me understand</button>' + askCtx) +
        '</div>';
    });

    container.innerHTML = html;
    container.removeAttribute('hidden');
    container.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function collectQuizData(form) {
    var fieldsets = Array.prototype.slice.call(form.querySelectorAll('.quiz-question'));
    var questions = fieldsets.map(function (fs) {
      var labels = Array.prototype.slice.call(fs.querySelectorAll('.choice'));
      var choices = labels.map(function (l) { return l.getAttribute('data-choice-text') || l.textContent.trim(); });
      var sel = fs.querySelector('input[type="radio"]:checked');
      var givenIdx = sel ? Number(sel.value) : null;
      return {
        question: fs.getAttribute('data-question') || '',
        choices: choices,
        givenIdx: givenIdx,
        givenText: givenIdx != null && choices[givenIdx] != null ? choices[givenIdx] : '(no answer)',
      };
    });
    return {
      questions: questions,
      answers: questions.map(function (q) { return q.givenIdx; }),
    };
  }

  /* ---------------- module quiz submit ---------------- */

  document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('quizForm');
    if (!form) return;
    var status = document.getElementById('quizStatus');
    var resultsBox = document.getElementById('quizResults');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var submitBtn = form.querySelector('button[type="submit"]');
      var collected = collectQuizData(form);
      var num = form.dataset.module;
      submitBtn.disabled = true;
      if (status) status.textContent = 'Grading\u2026';
      fetch('/api/c/' + encodeURIComponent(form.dataset.course) + '/quiz/' + encodeURIComponent(num), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers: collected.answers }),
      }).then(function (r) {
        if (r.status === 401) { window.location.href = '/login'; return null; }
        if (!r.ok) throw new Error('grade failed');
        return r.json();
      }).then(function (data) {
        if (!data) return;
        renderResults(resultsBox, data, {
          moduleNum: num,
          courseTitle: form.dataset.courseTitle || '',
          courseSlug: form.dataset.course || '',
          moduleTitle: form.dataset.moduleTitle || '',
          questions: collected.questions,
        });
        if (status) status.textContent = '';
      }).catch(function () {
        if (status) status.textContent = 'Could not grade \u2014 try again.';
      }).finally(function () {
        submitBtn.disabled = false;
      });
    });
  });

  /* ---------------- exam: countdown + submit ---------------- */

  document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('examForm');
    if (!form) return;
    var timerEl = document.getElementById('examTimer');
    var resultsBox = document.getElementById('examResults');
    var minutes = Number(form.dataset.minutes) || 60;
    var deadline = Date.now() + minutes * 60 * 1000;
    var submitted = false;

    function fmt(ms) {
      var s = Math.max(0, Math.floor(ms / 1000));
      var m = Math.floor(s / 60);
      var r = s % 60;
      return (m < 10 ? '0' + m : '' + m) + ':' + (r < 10 ? '0' + r : '' + r);
    }

    function tick() {
      if (submitted) return;
      var left = deadline - Date.now();
      if (timerEl) {
        timerEl.textContent = fmt(left);
        if (left <= 5 * 60 * 1000) timerEl.classList.add('danger');
      }
      if (left <= 0) {
        toast('Time is up \u2014 submitting your exam automatically.');
        doSubmit(true);
      }
    }
    var timerId = setInterval(tick, 1000);
    tick();

    function doSubmit(auto) {
      if (submitted) return;
      submitted = true;
      clearInterval(timerId);
      var submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = auto ? 'Time expired \u2014 submitting\u2026' : 'Submitting\u2026'; }
      var collected = collectQuizData(form);
      fetch('/api/c/' + encodeURIComponent(form.dataset.course) + '/exams/' + encodeURIComponent(form.dataset.which), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers: collected.answers }),
      }).then(function (r) {
        if (r.status === 401) { window.location.href = '/login'; return null; }
        return r.json().then(function (data) { return { status: r.status, data: data }; });
      }).then(function (wrapped) {
        if (!wrapped) return;
        if (wrapped.status !== 200) {
          toast(wrapped.data && wrapped.data.error ? wrapped.data.error : 'Exam could not be graded.');
          return;
        }
        renderResults(resultsBox, wrapped.data, {
          moduleNum: '',
          courseTitle: form.dataset.courseTitle || '',
          courseSlug: form.dataset.course || '',
          moduleTitle: 'Exam review',
          questions: collected.questions,
        });
      }).catch(function () {
        toast('Could not submit \u2014 check your connection and try again.');
        submitted = false;
      });
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      doSubmit(false);
    });
  });

  /* ---------------- lab checking ---------------- */

  document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('labForm');
    if (!form) return;
    var status = document.getElementById('labStatus');
    var resultsBox = document.getElementById('labResults');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var inputs = Array.prototype.slice.call(form.querySelectorAll('.lab-input'));
      var labels = {};
      var values = {};
      inputs.forEach(function (inp) {
        var key = inp.getAttribute('data-key');
        labels[key] = inp.getAttribute('aria-label') || key;
        var v = inp.value.trim();
        values[key] = v === '' ? null : Number(v);
      });
      var submitBtn = form.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      if (status) status.textContent = 'Checking\u2026';
      fetch('/api/c/' + encodeURIComponent(form.dataset.course) + '/labs/' + encodeURIComponent(form.dataset.lab), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ values: values }),
      }).then(function (r) {
        if (r.status === 401) { window.location.href = '/login'; return null; }
        if (!r.ok) throw new Error('check failed');
        return r.json();
      }).then(function (data) {
        if (!data) return;
        var html = '<div class="quiz-score-banner" role="status">' +
          'You got <strong>' + esc(data.score) + ' / ' + esc(data.total) + '</strong> checks right' +
          ' (' + esc(data.percent) + '%)' +
          (data.best != null ? ' \u00b7 Best so far: <strong>' + esc(data.best) + '%</strong>' : '') +
          '</div>';
        data.detail.forEach(function (d) {
          html += '<div class="check-row ' + (d.correct ? 'ok' : 'bad') + '">' +
            '<span class="mark">' + (d.correct ? '\u2713' : '\u2717') + '</span>' +
            '<div><strong>' + esc(labels[d.key] || d.key) + '</strong>' +
            (d.correct ? '' :
              '<br>Expected: <strong>' + esc(d.expected) + '</strong>' +
              (d.hint ? '<br><span class="hint">' + esc(d.hint) + '</span>' : '')) +
            '</div></div>';
        });
        resultsBox.innerHTML = html;
        resultsBox.removeAttribute('hidden');
        resultsBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (status) status.textContent = '';
      }).catch(function () {
        if (status) status.textContent = 'Could not check \u2014 try again.';
      }).finally(function () {
        submitBtn.disabled = false;
      });
    });
  });

  /* ---------------- "Ask about this module" box ---------------- */

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('askCopy');
    var ta = document.getElementById('askText');
    if (!btn || !ta) return;
    btn.addEventListener('click', function () {
      var q = ta.value.trim();
      if (!q) {
        toast('Type your question first, then copy the prompt.');
        ta.focus();
        return;
      }
      var prompt = "I'm studying " + btn.dataset.courseTitle + ', Module ' + btn.dataset.module + ': ' +
        btn.dataset.moduleTitle + '. Key topics: ' + btn.dataset.objectives +
        '. My question: ' + q +
        ' Please explain in simple terms and walk me through the reasoning step by step.';
      copyText(prompt).then(function (ok) {
        toast(ok ? COPIED_MSG : 'Copy failed \u2014 your browser blocked clipboard access.');
      });
    });
  });

  /* ---------------- service worker ---------------- */

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('/sw.js').catch(function () { /* offline support is optional */ });
    });
  }
})();

/* READ-ALOUD-START */
/* Read-aloud: sentence-by-sentence speechSynthesis with highlighting.
 * Sentences are spoken as separate short utterances (avoids the long-utterance
 * stalls and the Chrome pause bug); pause is cancel-and-bookmark, resume
 * re-speaks the current sentence. Highlighting is sentence-level on purpose:
 * word-boundary events are not reliable across browsers. */
(function () {
  function raSplitSentences(text) {
    var src = String(text == null ? '' : text);
    if (!src) return [];
    // Protect decimal points (118.5 psig, 3.5 in. w.c.) so they are not
    // mistaken for sentence ends; restored before the chunks are returned.
    var DOT = '\u0001';
    var work = src.replace(/(\d)\.(\d)/g, '$1' + DOT + '$2');
    var chunks = [];
    var re = /[^.!?…]+(?:[.!?…]+["'”’)\]]*)?\s*/g;
    var m;
    while ((m = re.exec(work)) !== null) {
      if (m[0]) chunks.push(m[0].split(DOT).join('.'));
      if (re.lastIndex === m.index) re.lastIndex += 1;
    }
    if (!chunks.length) return src.trim() ? [src] : [];
    // The fragments must tile the source exactly; if not, keep the node whole
    // so no text is ever lost, duplicated, or reordered on the page.
    if (chunks.join('') !== src) return [src];
    return chunks;
  }

  var RA_SKIP_TAGS = {
    SCRIPT: 1, STYLE: 1, TEXTAREA: 1, INPUT: 1, SELECT: 1, BUTTON: 1, IFRAME: 1, NOSCRIPT: 1,
  };

  function raCollectSpans(root) {
    return Array.prototype.slice.call(root.querySelectorAll('.ra-sentence')).filter(function (s) {
      return s.textContent && s.textContent.trim();
    });
  }

  function raChunkReading(root) {
    var existing = raCollectSpans(root);
    if (existing.length) return existing;
    if (!document.createTreeWalker || !window.NodeFilter) return [];
    var walker = document.createTreeWalker(root, window.NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        if (!node.data || !node.data.trim()) return window.NodeFilter.FILTER_REJECT;
        var p = node.parentNode;
        while (p && p !== root) {
          if (RA_SKIP_TAGS[p.nodeName]) return window.NodeFilter.FILTER_REJECT;
          p = p.parentNode;
        }
        return window.NodeFilter.FILTER_ACCEPT;
      },
    });
    var nodes = [];
    var n;
    while ((n = walker.nextNode())) nodes.push(n);
    nodes.forEach(function (node) {
      var chunks = raSplitSentences(node.data);
      if (!chunks.length || !node.parentNode) return;
      var frag = document.createDocumentFragment();
      chunks.forEach(function (chunk) {
        if (!chunk.trim()) {
          frag.appendChild(document.createTextNode(chunk));
          return;
        }
        var span = document.createElement('span');
        span.className = 'ra-sentence';
        span.textContent = chunk;
        frag.appendChild(span);
      });
      node.parentNode.replaceChild(frag, node);
    });
    if (root.setAttribute) root.setAttribute('data-ra-chunked', '1');
    return raCollectSpans(root);
  }

  function raInitPlayer(controlsEl) {
    var targetId = controlsEl.getAttribute('data-ra-controls');
    var root = targetId ? document.getElementById(targetId) : null;
    if (!root) return;
    var note = controlsEl.querySelector('.ra-note');
    var speedSel = controlsEl.querySelector('[data-ra-speed]');
    var buttons = {};
    Array.prototype.forEach.call(controlsEl.querySelectorAll('[data-ra-action]'), function (b) {
      buttons[b.getAttribute('data-ra-action')] = b;
    });
    var supported = 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
    if (!supported) {
      Object.keys(buttons).forEach(function (k) { buttons[k].disabled = true; });
      if (speedSel) speedSel.disabled = true;
      if (note) note.textContent = 'Read-aloud is not available in this browser.';
      return;
    }
    var synth = window.speechSynthesis;
    var spans = [];
    var idx = -1;
    var state = 'idle'; // idle | playing | paused
    var rate = 1;
    var token = 0; // invalidates stale utterance callbacks after cancel()

    function ensureSpans() {
      if (!spans.length) spans = raChunkReading(root);
      return spans;
    }
    function clearHi() {
      spans.forEach(function (s) { s.classList.remove('ra-active'); });
    }
    function highlight() {
      clearHi();
      var s = spans[idx];
      if (s) {
        s.classList.add('ra-active');
        if (typeof s.scrollIntoView === 'function') {
          try { s.scrollIntoView({ block: 'center', behavior: 'smooth' }); } catch (e) { s.scrollIntoView(); }
        }
      }
    }
    function update() {
      if (buttons.play) buttons.play.disabled = state === 'playing';
      if (buttons.pause) buttons.pause.disabled = state !== 'playing';
      if (buttons.resume) buttons.resume.disabled = state !== 'paused';
      if (buttons.stop) buttons.stop.disabled = state === 'idle';
      if (buttons.prev) buttons.prev.disabled = !(idx > 0);
      if (buttons.next) buttons.next.disabled = !(spans.length && idx < spans.length - 1);
    }
    function halt() {
      token += 1;
      try { synth.cancel(); } catch (e) { /* ignore */ }
    }
    function stopAll() {
      halt();
      state = 'idle';
      idx = -1;
      clearHi();
      update();
    }
    var api = { stop: stopAll };
    function speak(i) {
      var list = ensureSpans();
      if (!list.length) {
        if (note) note.textContent = 'Nothing to read here yet.';
        return;
      }
      // Only one player speaks at a time; stopping the other player first
      // keeps its cancel() from killing this player's utterance.
      if (window._raActivePlayer && window._raActivePlayer !== api) {
        var other = window._raActivePlayer;
        window._raActivePlayer = api;
        other.stop();
      }
      window._raActivePlayer = api;
      idx = Math.max(0, Math.min(i, list.length - 1));
      halt();
      var my = token;
      var text = list[idx].textContent.replace(/\s+/g, ' ').trim();
      var u = new window.SpeechSynthesisUtterance(text);
      u.rate = rate;
      u.onend = function () {
        if (my !== token || state !== 'playing') return;
        if (idx < list.length - 1) speak(idx + 1);
        else stopAll();
      };
      u.onerror = function () {
        if (my === token && state === 'playing') stopAll();
      };
      state = 'playing';
      highlight();
      update();
      synth.speak(u);
    }

    if (buttons.play) buttons.play.addEventListener('click', function () {
      speak(state === 'paused' ? idx : (idx >= 0 ? idx : 0));
    });
    if (buttons.pause) buttons.pause.addEventListener('click', function () {
      if (state !== 'playing') return;
      halt();
      state = 'paused';
      update();
    });
    if (buttons.resume) buttons.resume.addEventListener('click', function () {
      if (state === 'paused') speak(idx);
    });
    if (buttons.stop) buttons.stop.addEventListener('click', stopAll);
    if (buttons.prev) buttons.prev.addEventListener('click', function () {
      if (idx <= 0) return;
      if (state === 'idle') { idx -= 1; highlight(); update(); }
      else speak(idx - 1);
    });
    if (buttons.next) buttons.next.addEventListener('click', function () {
      if (state === 'idle') {
        ensureSpans();
        if (idx < spans.length - 1) { idx += 1; highlight(); update(); }
      } else speak(idx + 1);
    });
    if (speedSel) speedSel.addEventListener('change', function () {
      var v = parseFloat(speedSel.value);
      if (v > 0) {
        rate = v;
        if (state === 'playing') speak(idx);
      }
    });
    window.addEventListener('pagehide', stopAll);
    update();
  }

  function raInit() {
    Array.prototype.forEach.call(document.querySelectorAll('[data-ra-controls]'), raInitPlayer);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', raInit);
  else raInit();
})();
/* READ-ALOUD-END */
