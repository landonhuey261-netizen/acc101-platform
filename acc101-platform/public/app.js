'use strict';

/* ACC 101 Course Platform — client interactivity.
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
