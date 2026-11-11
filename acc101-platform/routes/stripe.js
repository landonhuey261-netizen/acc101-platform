'use strict';

/**
 * routes/stripe.js — Stripe webhook endpoint.
 *
 * Mounted in server.js BEFORE express.json() so the raw request body is
 * still available for signature verification. The webhook secret comes
 * from STRIPE_WEBHOOK_SECRET at call time.
 *
 * Verification rule: if no webhook secret is set, NOTHING is accepted as
 * verified via webhook. A program is marked purchased only for a verified
 * checkout.session.completed event whose payment_status is 'paid'.
 */

const db = require('../db');
const { verifyWebhookSignature } = require('../lib/stripe');

function webhookHandler(req, res) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  const rawBody = Buffer.isBuffer(req.body) ? req.body.toString('utf8') : '';
  const sig = req.headers['stripe-signature'];

  if (!verifyWebhookSignature(rawBody, sig, secret)) {
    return res.status(400).json({ error: 'Invalid webhook signature.' });
  }

  let event;
  try {
    event = JSON.parse(rawBody);
  } catch (err) {
    return res.status(400).json({ error: 'Invalid JSON body.' });
  }

  if (event && event.type === 'checkout.session.completed') {
    const session = event.data && event.data.object;
    if (session && session.payment_status === 'paid' && session.metadata) {
      const userId = Number(session.metadata.user_id);
      const programSlug = String(session.metadata.program_slug || '');
      if (Number.isInteger(userId) && userId > 0 && programSlug) {
        const amount = Number.isInteger(session.amount_total) ? session.amount_total : 5000;
        db.recordPurchase(userId, programSlug, session.id, amount);
      }
    }
  }

  return res.json({ received: true });
}

module.exports = { webhookHandler };
