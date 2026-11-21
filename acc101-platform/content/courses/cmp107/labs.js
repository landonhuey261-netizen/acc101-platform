// cmp107 — Scenario labs.
// Each row is checked on a single numeric input in column 1: an option number, a procedure step number, or a computed reading.
module.exports = [
  {
    "id": "user-account-and-wifi-fix",
    "title": "Set Up a User Account and Fix a Wi-Fi Problem",
    "introHtml": "<p><strong>Home-office scenario.</strong> A new family member needs their own account on the shared Windows laptop, and the same laptop has a Wi-Fi problem: it connects to the network but has no internet. Your task: set the account up safely, then work through the Wi-Fi symptoms in the right order. Read the task, then answer each decision row.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=Ir1Yhigsdtw\" target=\"_blank\" rel=\"noopener\">Windows Network Connections</a> — Professor Messer's walkthrough of Windows network connections, and <a href=\"https://www.youtube.com/watch?v=SR7tw10W5YU\" target=\"_blank\" rel=\"noopener\">Windows Security Settings</a> — users, groups, and permissions. Watch them before you make your calls below.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before changing accounts or network settings: back up anything important, write down the current settings, and make sure you know the administrator password. Never change router settings you do not understand, and never give a new account administrator rights unless it truly needs them.</p><p><strong>The situation:</strong> (1) Sam needs an account on the shared Windows laptop for schoolwork. (2) The laptop shows it is connected to the home Wi-Fi, but no website opens. (3) Sam's phone, on the same Wi-Fi, opens websites fine. (4) The router address is 192.168.1.1. (5) The laptop's address is 192.168.1.20. For each row, enter the option number or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "passing": 70,
    "rows": [
      {
        "label": "SAFETY CALL — Before you change any account or network setting, what do you do first? 1) Start changing settings right away to save time 2) Back up important files, write down the current settings, and confirm you know the administrator password 3) Give everyone the administrator password so nobody gets locked out 4) Reset the router to factory defaults",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wifi_safety",
            "expected": 2,
            "hint": "Step 0 governs: back up, record the current settings, and know the admin password before changing anything. Changing settings blindly (1), sharing the admin password (3), and factory-resetting the router (4) all risk losing data or access."
          }
        ]
      },
      {
        "label": "DECISION — Sam needs an account for schoolwork on the shared laptop. Which account type is right? 1) Administrator, so Sam never gets blocked 2) Standard user, so Sam can work but cannot change the system or install software without an admin password 3) Guest account with no password 4) Use the existing administrator account and share its password",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wifi_account",
            "expected": 2,
            "hint": "Everyday work belongs on a standard account. An administrator account (1) lets a mistake or malware change the system, a guest account (3) is for short visits, and sharing the admin account (4) removes all accountability."
          }
        ]
      },
      {
        "label": "DECISION — The laptop is connected to Wi-Fi but no website opens, while Sam's phone on the same Wi-Fi works fine. Where is the problem most likely to be? 1) The internet provider is down 2) The router is broken 3) The laptop itself — the other device works, so the network and provider are fine 4) The website is down",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wifi_where",
            "expected": 3,
            "hint": "If one device fails while another on the same network works, the problem is almost certainly that device. The provider (1) and router (2) would affect every device, and one website (4) would not block all sites."
          }
        ]
      },
      {
        "label": "DECISION — What is the correct first test on the laptop? 1) Reinstall Windows 2) Run ping 192.168.1.1 to test the connection to the router 3) Buy a new laptop 4) Change the Wi-Fi password",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wifi_test",
            "expected": 2,
            "hint": "Test the nearest hop first: ping the router at 192.168.1.1. If that works, test the internet next. Reinstalling Windows (1) and buying a new laptop (3) are last resorts, and the password (4) is not the problem if the laptop is already connected."
          }
        ]
      },
      {
        "label": "DECISION — ping to the router works, but ping 8.8.8.8 fails. What does that tell you? 1) The laptop's Wi-Fi is broken 2) The problem is between the router and the internet — check the router and the provider 3) DNS is broken 4) The laptop needs a new IP address",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wifi_ping",
            "expected": 2,
            "hint": "Reaching the router proves the laptop and Wi-Fi work. Failing to reach 8.8.8.8, a public address, means the fault is beyond the router. DNS (3) would still let ping 8.8.8.8 work, because it uses a number, not a name."
          }
        ]
      },
      {
        "label": "DECISION — ping 8.8.8.8 works, but ping example.com fails. What is the problem? 1) The router is broken 2) The internet is down 3) DNS is not resolving names — the numbers work, the names do not 4) The Wi-Fi password is wrong",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wifi_dns",
            "expected": 3,
            "hint": "Numbers working and names failing is the classic sign of a DNS problem. The router (1) and the internet (2) are fine, because packets reach 8.8.8.8, and the password (4) is fine because the laptop is connected."
          }
        ]
      },
      {
        "label": "COMPUTED — An IPv4 address is written as four numbers separated by dots, each from 0 to 255. How many numbers (octets) are in an IPv4 address? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wifi_octets",
            "expected": 4,
            "hint": "An IPv4 address has four octets, for example 192.168.1.20 — four numbers separated by three dots."
          }
        ]
      },
      {
        "label": "COMPUTED — The home network is 192.168.1.0 with a /24 subnet mask, which leaves 8 bits for device addresses: 2 to the power of 8 is 256 addresses, minus the network address and the broadcast address. How many usable device addresses are there? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wifi_hosts",
            "expected": 254,
            "hint": "256 total addresses minus 2 reserved ones (the network address and the broadcast address) leaves 254 usable addresses for devices."
          }
        ]
      }
    ]
  }
];
