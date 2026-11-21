module.exports = [
  {
    "id": "spot-the-scam",
    "title": "Spot the Scam: Phishing Emails and Securing an Account",
    "introHtml": "<p><strong>Security scenario — a morning in your inbox.</strong> You open your email to find four messages waiting. Some are real, some are traps. Your task: judge each message, then work through securing an account the right way. Read the task, then answer each decision row.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=XIe27xh_N0A\" target=\"_blank\" rel=\"noopener\">What Is Phishing | The 5 Types of Phishing Scams To Avoid</a> — a walkthrough of phishing warning signs; watch it before you make your calls below.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before clicking anything: never share passwords, login codes, or personal data in reply to a message, and never use a link or phone number from a suspicious message. Verify through the real app or website instead. If a message pressures you to act at once, that pressure is itself a warning sign — pause, check, and ask.</p><p><strong>The four messages:</strong> (1) From your bank's real domain, addressed to you by name, about a new statement ready in the app — no link, no attachment. (2) “Your account closes in 24 hours! Click here to verify” from “support@yourbank-secure.com,” addressed to “Dear customer,” with a link and an attachment. (3) A text: “Your parcel is held — pay $2.99 now” with a short link, from an unknown number. (4) A call from someone claiming to be tech support, saying your computer is infected and asking you to read out a code. For each row, enter the option number asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — Before you touch any message, what is the rule? 1) Click each link to see where it goes 2) Never share passwords, codes, or personal data in reply to a message, and never use a link or number from a suspicious message — verify through the real app or site 3) Reply to each sender to ask if it is real 4) Open every attachment to check it",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "scam_safety",
            "expected": 2,
            "hint": "Step 0 governs: never share passwords or codes in reply to a message, and verify through the real app or site. Clicking to check (1) is the trap, replying (3) confirms your address is real, and opening attachments (4) can install malware."
          }
        ]
      },
      {
        "label": "DECISION — Message 2: “Your account closes in 24 hours!” from “support@yourbank-secure.com,” addressed to “Dear customer,” with a link and an attachment. What is the right call? 1) Click the link at once before the account closes 2) It is phishing: urgency, a wrong sender domain, a generic greeting, and an attachment — delete it, report it as phishing, and check your account in the real app 3) Reply asking for more time 4) Forward it to all your contacts",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "scam_msg2",
            "expected": 2,
            "hint": "Four warning signs in one message: urgency, a sender domain that is not the bank's, a generic greeting, and an unexpected attachment. Clicking (1) is the trap, replying (3) confirms your address, and forwarding (4) spreads the scam."
          }
        ]
      },
      {
        "label": "DECISION — Message 3: a text saying your parcel is held and asking you to pay $2.99 through a short link. What is the right call? 1) Pay the small amount — it is only $2.99 2) Tap the link to see the parcel details 3) It is smishing: check the delivery in the courier's real app or site, never through the text's link, and report the text as spam 4) Text back your card number so they can release it",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "scam_msg3",
            "expected": 3,
            "hint": "A parcel text with a payment link from an unknown number is smishing. The amount does not matter — the link steals your card details. Check the delivery in the courier's real app, and never send card details by text (4)."
          }
        ]
      },
      {
        "label": "DECISION — Message 4: a caller claims to be tech support, says your computer is infected, and asks you to read out a code. What is the right call? 1) Read out the code so they can help 2) Install the software they tell you to 3) It is vishing: hang up, do not read out any code or install anything, and if worried, run a scan with your own trusted security software 4) Give them your password so they can fix it",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "scam_msg4",
            "expected": 3,
            "hint": "Real tech support never calls out of the blue about an infection, and no one legitimate asks you to read out a login code or your password. Hang up and check with your own security software."
          }
        ]
      },
      {
        "label": "DECISION — You want to secure your email account properly. What is the right order? 1) Set a short easy password, skip two-factor authentication 2) Use a long unique passphrase, turn on two-factor authentication with an authenticator app, and save the backup codes somewhere safe 3) Use the same password as your shopping accounts and write it on a sticky note 4) Share the password with a family member so they can check your email",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "scam_secure",
            "expected": 2,
            "hint": "Email guards your other accounts: a long unique passphrase plus 2FA with an authenticator app, with backup codes saved safely. A short password (1), reuse (3), and sharing (4) all undo the protection."
          }
        ]
      },
      {
        "label": "COMPUTED — A passphrase of 4 random words is used for your email. Your password manager says each word adds about 11 bits of strength, and 40 bits is the minimum you want. How many bits short of the minimum is a 2-word passphrase? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "scam_bits",
            "expected": 18,
            "hint": "Two words at 11 bits each give 22 bits. The minimum is 40 bits, so 40 minus 22 equals 18 bits short. Four words give about 44 bits, which clears the minimum."
          }
        ]
      }
    ],
    "passing": 70
  }
];
