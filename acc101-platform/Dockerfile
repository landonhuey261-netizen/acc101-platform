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

# Copy the app and generate PWA icons
COPY . .
RUN node scripts/make-icons.js

EXPOSE 3000
ENV PORT=3000

# NOTE: Railway does not allow VOLUME in Dockerfiles. Add a persistent
# volume mounted at /app/data via the Railway dashboard instead —
# that is where the SQLite database (data/app.db) lives.

CMD ["node", "server.js"]
