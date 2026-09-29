# ACC 101 Course Platform

A full-stack, multi-course, self-paced college-style course web app. The flagship course is
**ACC 101: Principles of Financial Accounting**, and the platform is designed from day one to
host additional courses with zero code changes.

Students sign up, enroll in courses, work through 12 lecture modules per course (lecture notes,
key terms, embedded video lessons, assignments with model solutions, auto-graded quizzes),
complete spreadsheet-style accounting labs, take timed midterm and final exams, and watch their
weighted course grade update live in a per-course gradebook. Progress is tracked **separately
per course**.

## Stack

- **Node.js 24**, **better-sqlite3** (SQLite driver), **Express 4**, **bcrypt 5** (password hashing, cost 12), **express-session 1** (SQLite-backed sessions)
- CommonJS (`require`). No other npm dependencies.
- Server-rendered HTML + vanilla JS (no frontend framework). Mobile-first CSS, PWA-ready (manifest + service worker).

## Local development

```bash
npm install
npm start
# open http://localhost:3000
```

Generate the PWA icons (also run automatically in the Docker build):

```bash
npm run icons
```

Course content lives in `content/courses/<slug>/` and is discovered at startup:

- `course.js` → `{ slug, title, description }`
- `modules/m01.js` … `modules/m12.js`
- `exams.js` (midterm: 25 questions / 75 min, final: 40 questions / 120 min)
- `labs.js` (interactive workpaper labs; optional — a course without it simply has no labs)

The server fails fast with a clear error naming the expected path if the `acc101` course
content is missing.

## Environment variables

| Variable         | Default                              | Description                                              |
| ---------------- | ------------------------------------ | -------------------------------------------------------- |
| `PORT`           | `3000`                               | Port the app listens on                                  |
| `SESSION_SECRET` | *(insecure dev default)*             | Long random string used to sign session cookies          |
| `COOKIE_SECURE`  | `false`                              | Set to `true` when serving over HTTPS (enables Secure cookies) |

Copy `.env.example` to `.env` and fill in a real `SESSION_SECRET` before deploying.

## Course Tutor (AI chat tutor)

Every logged-in page (except timed exam pages) shows a floating **Course Tutor** button
(bottom-right) that opens a dedicated per-course chat page at `/c/:course/tutor`.
Students can ask questions about the lectures, key terms, assignments, and quizzes;
the tutor is Socratic — it explains reasoning step by step and guides rather than
handing over answers. Each student keeps one conversation thread per course,
persisted in the `tutor_messages` table.

The "Help me understand" buttons still work as a copy-prompt fallback, and when the
tutor is connected they also offer **"Ask the Course Tutor"**, which opens the chat
with the relevant question context pre-attached. The tutor is never available during
a timed exam (the API returns 403 while `examStart_*` is active), and chat usage is
rate-limited to 20 messages per user per hour.

### Connecting the tutor

1. Create an account at [console.anthropic.com](https://console.anthropic.com) and
   generate an API key (API access is pay-as-you-go — at current Haiku pricing a
   typical tutor message costs a fraction of a cent).
2. Set `ANTHROPIC_API_KEY` in your environment (see `.env.example`). **No key is
   bundled with the app**; without one, the tutor UI shows a friendly
   "isn't connected yet" state and the copy-prompt fallback keeps working.
3. Optional: set `TUTOR_MODEL` to use a different Anthropic model. The default is
   `claude-haiku-4-5` — Anthropic's current Haiku-class model (fastest,
   cheapest, near-frontier intelligence), verified against Anthropic's
   [models overview](https://platform.claude.com/docs/en/about-claude/models/overview.md).

| Variable            | Default            | Description                                              |
| ------------------- | ------------------ | -------------------------------------------------------- |
| `ANTHROPIC_API_KEY` | *(empty)*          | Anthropic API key powering the Course Tutor. Empty = tutor disabled (copy-prompt fallback only). |
| `TUTOR_MODEL`       | `claude-haiku-4-5` | Anthropic model the tutor uses.                          |

Security: the key lives only in the server environment, is sent only to
`https://api.anthropic.com`, and is never logged or echoed. All tutor chat
content is HTML-escaped client-side before rendering.

## Multi-course model

- **Content** is namespaced per course: `content/courses/<slug>/` (see above). Slugs in URLs are
  sanitized with `/^[a-z0-9-]+$/` to block path traversal.
- **Database**: a `courses` table (seeded with the `acc101` row on init) and an `enrollments`
  table map users to courses. Every progress table (`quiz_scores`, `exam_scores`,
  `assignment_checks`, `module_done`, `lab_scores`) is keyed by `(user_id, course_id)`, so a
  student's grades in one course never leak into another.
- **Routes** are course-scoped: `/c/:course/dashboard`, `/c/:course/modules/:slug`,
  `/c/:course/exams[/:which]`, `/c/:course/labs[/:id]`, `/c/:course/gradebook`,
  `/c/:course/videos`, and API under `/api/c/:course/...`. Unknown course → 404; enrolled
  check → 403 with an enroll prompt.
- **Home** (`/`) lists the logged-in user's enrolled courses with per-course progress; it never
  auto-redirects, even with a single enrollment. The nav carries a course switcher.
- New users are **auto-enrolled in `acc101`** at signup. `POST /courses/:slug/enroll` enrolls
  the current user in any other course (used by the 403 page and future course launches).

## Adding a future course (no rebuild needed)

1. Create `content/courses/<newslug>/` with:
   - `course.js` exporting `{ slug: '<newslug>', title: '...', description: '...' }`
   - `modules/m01.js` … `modules/m12.js` (same shape as the ACC 101 modules)
   - `exams.js` (`{ midterm: { title, minutes, questions: [...] }, final: {...} }`)
   - `labs.js` (array of lab workpapers; omit the file if the course has no labs)
2. Insert one row into the database:
   ```sql
   INSERT INTO courses (slug, title, description, created_at)
   VALUES ('<newslug>', 'Course Title', 'Short description.', datetime('now'));
   ```
   (Use the same title/description as `course.js`.)
3. That's it — the course appears in the loader, users can enroll via
   `POST /courses/<newslug>/enroll`, and all routes, gradebook math, and nav work
   automatically. No code changes, no rebuild, no restart beyond the normal deploy.

## How grading works (per course)

| Component   | Weight | Details                                                        |
| ----------- | ------ | -------------------------------------------------------------- |
| Assignments | 25%    | 0.7 × per-module self-check completion + 0.3 × lab best scores  |
| Quizzes     | 25%    | Best quiz score per module (1–12), averaged; unattempted = 0   |
| Midterm     | 20%    | Best score; 25 questions, 75-minute limit enforced server-side  |
| Final       | 30%    | Best score; 40 questions, 120-minute limit enforced server-side |

Letter grades: A ≥ 90, B ≥ 80, C ≥ 70, D ≥ 60, F < 60. Only the best attempt counts.
Exam time limits are enforced server-side (start timestamp in session, keyed by
course + exam, with a 5-minute grace window).

## Deployment

### Railway (recommended)

1. Create a new project from this repo.
2. Add a **persistent volume** mounted at `/app/data` — this is where `data/app.db` (SQLite) lives; without it, student accounts and grades are lost on restart.
3. Set env vars: `SESSION_SECRET` (long random string), `COOKIE_SECURE=true`.
4. Deploy. Railway runs the `Dockerfile` automatically (or set start command `npm start`).

### Render

- **Build command:** `npm ci && node scripts/make-icons.js`
- **Start command:** `npm start`
- **Env vars:** `SESSION_SECRET`, `COOKIE_SECURE=true` (Render serves HTTPS).
- ⚠️ **WARNING:** Render's free-tier disk is ephemeral — the SQLite database at `data/app.db` will be **wiped on every restart/redeploy**. Use a Render persistent disk, or deploy to Railway/Fly with a persistent volume, if student data must survive restarts.

## Security notes

- Passwords hashed with **bcrypt, cost 12**.
- Sessions: `httpOnly`, `SameSite=Lax` cookies; `Secure` flag when `COOKIE_SECURE=true`; sessions stored server-side in SQLite (only an opaque session id in the cookie).
- **Login rate limiting:** max 8 login attempts per IP per 15 minutes (429 beyond that).
- Session fixation protection: session is regenerated on login/signup.
- All user-derived output (usernames) is HTML-escaped server-side; course slugs from URLs are strictly validated.

### Future work (not yet implemented)

- **Email verification** for new accounts — currently signup requires only username + password.
- **CSRF hardening** — state-changing API routes currently rely on SameSite=Lax cookies; add CSRF tokens before exposing the app to untrusted cross-site contexts.
- **Per-course video libraries** — the Video Library page currently shows the ACC 101 video set for every course; a future `videos` section in `course.js` (or `videos.js`) can make it per-course.
