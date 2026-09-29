FROM node:24-alpine

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

# Persist the SQLite database across restarts
VOLUME /app/data

CMD ["node", "server.js"]
