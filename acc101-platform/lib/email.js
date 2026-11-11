'use strict';

/**
 * lib/email.js — outbound email for College Without College.
 *
 * Gmail SMTP via nodemailer, configured from EMAIL_USER / EMAIL_PASS
 * (a Gmail app password, not the account password). When
 * EMAIL_TEST_MODE === 'true', nothing is sent: the reset link is logged
 * to the console instead, so password reset still works end-to-end in
 * local testing without real email. When email is simply not configured
 * (and test mode is off), nothing is logged either — reset tokens must
 * never land in server logs on a live deploy. This module never throws
 * for a missing configuration.
 */

const nodemailer = require('nodemailer');

/** True when Gmail SMTP credentials are present in the environment. */
function isEmailConfigured() {
  return Boolean(process.env.EMAIL_USER && process.env.EMAIL_PASS);
}

function isTestMode() {
  return process.env.EMAIL_TEST_MODE === 'true';
}

let transporter = null;

function getTransporter() {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  }
  return transporter;
}

/**
 * Send a password reset email.
 * Returns { sent: true } on success. When EMAIL_TEST_MODE is on, the
 * link is logged to the console instead and { sent: false, testMode: true }
 * is returned. When email is not configured (and test mode is off),
 * nothing is sent and nothing is logged — reset tokens must never appear
 * in server logs — and { sent: false, testMode: false } is returned.
 * Returns { sent: false, error } if sending fails — never throws, so the
 * forgot-password flow can always show its generic message.
 */
async function sendPasswordResetEmail(to, resetUrl) {
  if (isTestMode()) {
    console.log('[email-test] password reset link: ' + resetUrl);
    return { sent: false, testMode: true };
  }
  if (!isEmailConfigured()) {
    return { sent: false, testMode: false };
  }
  try {
    await getTransporter().sendMail({
      from: '"College Without College" <' + process.env.EMAIL_USER + '>',
      to,
      subject: 'Reset your College Without College password',
      text:
        'You asked to reset your College Without College password.\n\n' +
        'Reset your password here:\n' + resetUrl + '\n\n' +
        'This link expires in 1 hour. If you didn\u2019t ask for this, ignore it ' +
        '— your password won\u2019t change.',
    });
    return { sent: true };
  } catch (err) {
    console.error('[email] failed to send password reset email:', err && err.message ? err.message : err);
    return { sent: false, error: err && err.message ? err.message : 'send failed' };
  }
}

module.exports = { isEmailConfigured, sendPasswordResetEmail };
