'use strict';

/**
 * lib/stripe.js — Stripe Checkout via the Stripe REST API, using Node 24's
 * global fetch (no new npm dependencies, so package-lock.json is untouched).
 *
 * Keys come from the environment at call time and are NEVER logged:
 *   STRIPE_SECRET_KEY, STRIPE_PUBLISHABLE_KEY, STRIPE_WEBHOOK_SECRET.
 *
 * Graceful no-keys behavior (same pattern as the tutor's graceful 503):
 * when no secret key is configured, stripeConfigured() is false, no
 * Checkout Session is ever created, and the buy page says so honestly.
 *
 * A program is marked purchased ONLY after server-side verification:
 * the webhook (checkout.session.completed, signature verified) or the
 * success page retrieving the Checkout Session from Stripe and confirming
 * payment_status === 'paid' with matching metadata. The client is never
 * trusted to unlock anything.
 */

const crypto = require('node:crypto');

const STRIPE_API = 'https://api.stripe.com/v1';
const PRICE_CENTS = 5000;
const CURRENCY = 'usd';
const WEBHOOK_TOLERANCE_SEC = 300; // 5 minutes, Stripe's recommended window

/** True when a Stripe secret key is configured (payments can be taken). */
function stripeConfigured() {
  const key = process.env.STRIPE_SECRET_KEY;
  return typeof key === 'string' && key.trim().length > 0;
}

function publishableKey() {
  const key = process.env.STRIPE_PUBLISHABLE_KEY;
  return typeof key === 'string' ? key.trim() : '';
}

function secretKey() {
  const key = process.env.STRIPE_SECRET_KEY;
  return typeof key === 'string' ? key.trim() : '';
}

/**
 * Create a Checkout Session for one program purchase.
 * Returns the session object from Stripe ({ id, url, ... }).
 * Throws on any Stripe error (caller turns it into an honest message).
 */
async function createCheckoutSession({ userId, programSlug, programName, successUrl, cancelUrl }) {
  const body = new URLSearchParams();
  body.set('mode', 'payment');
  body.set('line_items[0][price_data][currency]', CURRENCY);
  body.set('line_items[0][price_data][unit_amount]', String(PRICE_CENTS));
  body.set('line_items[0][price_data][product_data][name]', programName + ' program');
  body.set('line_items[0][quantity]', '1');
  body.set('metadata[user_id]', String(userId));
  body.set('metadata[program_slug]', programSlug);
  body.set('success_url', successUrl);
  body.set('cancel_url', cancelUrl);

  const res = await fetch(STRIPE_API + '/checkout/sessions', {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + secretKey(),
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const msg = (data && data.error && data.error.message) || ('Stripe error (HTTP ' + res.status + ')');
    throw new Error(msg);
  }
  return data;
}

/** Retrieve a Checkout Session from Stripe by id. Throws on any Stripe error. */
async function retrieveCheckoutSession(sessionId) {
  const res = await fetch(STRIPE_API + '/checkout/sessions/' + encodeURIComponent(sessionId), {
    method: 'GET',
    headers: { Authorization: 'Bearer ' + secretKey() },
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const msg = (data && data.error && data.error.message) || ('Stripe error (HTTP ' + res.status + ')');
    throw new Error(msg);
  }
  return data;
}

/**
 * Verify a Stripe webhook signature (the v1 scheme: t=<timestamp>,
 * v1=<HMAC-SHA256 hex of "<timestamp>.<raw body>">).
 * Returns true only when the signature matches and the timestamp is fresh.
 * With no webhook secret configured, nothing verifies (accept nothing).
 */
function verifyWebhookSignature(rawBody, sigHeader, secret) {
  if (!secret || typeof secret !== 'string' || !secret.trim()) return false;
  if (!sigHeader || typeof sigHeader !== 'string') return false;
  const parts = {};
  for (const pair of sigHeader.split(',')) {
    const eq = pair.indexOf('=');
    if (eq > 0) parts[pair.slice(0, eq).trim()] = pair.slice(eq + 1).trim();
  }
  const timestamp = Number(parts.t);
  if (!Number.isFinite(timestamp)) return false;
  if (Math.abs(Math.floor(Date.now() / 1000) - timestamp) > WEBHOOK_TOLERANCE_SEC) return false;
  const expected = crypto
    .createHmac('sha256', secret)
    .update(timestamp + '.' + rawBody, 'utf8')
    .digest('hex');
  const sigs = String(parts.v1 || '').split(' ').filter(Boolean);
  for (const sig of sigs) {
    try {
      const a = Buffer.from(sig, 'hex');
      const b = Buffer.from(expected, 'hex');
      if (a.length === b.length && crypto.timingSafeEqual(a, b)) return true;
    } catch (err) { /* malformed hex — not a match */ }
  }
  return false;
}

module.exports = {
  PRICE_CENTS,
  CURRENCY,
  stripeConfigured,
  publishableKey,
  createCheckoutSession,
  retrieveCheckoutSession,
  verifyWebhookSignature,
};
