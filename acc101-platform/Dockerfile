# Base image comes from Google's mirror of Docker Hub: Railway's builds
# were failing on auth.docker.io 504 timeouts (2026-10-09). Same official
# node:24-alpine image, different download door.
FROM mirror.gcr.io/library/node:24-alpine

WORKDIR /app

# Build tools for the better-sqlite3 native module
RUN apk add --no-cache python3 make g++

# Install dependencies first (better layer caching)
COPY package*.json ./
RUN npm ci --omit=dev

# Copy the app. NOTE: do NOT run scripts/make-icons.js here — it regenerates
# the gold "CWC" icons and overwrites public/icons/*.png on every build,
# which clobbered the photo icons Landon uploaded (2026-11-08). The icons
# in the repo are the real ones; the build must leave them alone.
# (scripts/make-icons.js is kept in the repo unused; delete it if wanted.)
COPY . .

EXPOSE 3000
ENV PORT=3000

# NOTE: Railway does not allow VOLUME in Dockerfiles. Add a persistent
# volume mounted at /app/data via the Railway dashboard instead —
# that is where the SQLite database (data/app.db) lives.

CMD ["node", "server.js"]
