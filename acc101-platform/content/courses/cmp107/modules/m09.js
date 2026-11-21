// cmp107 - Module 9: Wi-Fi, Routers & Home Networks
module.exports = {
  "number": 9,
  "slug": "wifi-routers-and-home-networks",
  "title": "Wi-Fi, Routers & Home Networks",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain how Wi-Fi works and the difference between 2.4 GHz and 5 GHz.",
    "Connect a device to a Wi-Fi network and forget a network.",
    "Change a router's Wi-Fi name and password safely.",
    "Explain WPA2 and WPA3 wireless security.",
    "Fix common Wi-Fi problems step by step."
  ],
  "sections": [
    {
      "heading": "How Wi-Fi Works",
      "html": "<p>Wi-Fi is a radio technology that lets devices talk to a wireless router without cables. The router broadcasts a network name, called an SSID, and devices that know the password can join. Inside the router, the Wi-Fi radio is one part; the router also connects your home to the internet and directs traffic, as you learned in Module 8.</p>\n<p>Wi-Fi uses two radio bands. The 2.4 GHz band travels further and passes through walls better, but it is slower and more crowded, because many devices and even microwave ovens use it. The 5 GHz band is faster and less crowded, but its range is shorter and it struggles with thick walls. Most modern routers broadcast both, sometimes under one name, and devices pick the better one.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> If your video keeps buffering in a far room, try the 2.4 GHz band. If you are near the router and want speed, use 5 GHz. The band matters more than most people realize.</div></p>\n"
    },
    {
      "heading": "Connecting and Managing Wi-Fi",
      "html": "<p>To join a Wi-Fi network on Windows, click the network icon in the taskbar, pick the network name, and type the password. On a Mac, click the Wi-Fi icon in the menu bar. On a phone, go to Settings, then Wi-Fi. The first time you join, tick Connect automatically so the device remembers it.</p>\n<p>To forget a network, which removes its saved password, go to the Wi-Fi settings on your device and choose Forget. That is useful for a network you no longer trust, or for a network whose password has changed and your device keeps trying the old one.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> If a device will not connect at all, check the obvious first: is Wi-Fi switched on, is the network name correct, is Caps Lock on while you type the password, and is the router actually powered on? Most Wi-Fi problems are one of those four.</div></p>\n"
    },
    {
      "heading": "Your Router's Settings",
      "html": "<p>Your router has its own settings page, usually reached by typing its address into a web browser. The address is often 192.168.1.1 or 192.168.0.1, and it is printed on a sticker on the router, along with the default administrator username and password. Change that default password the first time you log in, because everyone knows the factory defaults.</p>\n<p>From the settings page you can change the Wi-Fi name (SSID) and password, see which devices are connected, and restart the router. Choose a clear network name, such as Smith-Home, and a strong Wi-Fi password that you do not use anywhere else. Write the password down and keep it somewhere safe in the house.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Never change settings you do not understand in the router. A wrong change can take the whole house offline, and the fix is often a factory reset, which erases every setting you had.</div></p>\n"
    },
    {
      "heading": "WPA2, WPA3, and Wi-Fi Safety",
      "html": "<p>Wi-Fi security is set by a standard called WPA. WPA2 has been the standard for years and is still fine. WPA3 is the newer standard, with stronger protection, and it is what new routers use. If your router offers WPA3, use it; if it only offers WPA2, that is acceptable, but never use the older WEP or an open network with no password.</p>\n<p>An open Wi-Fi network, such as in a cafe, has no password, which means anyone nearby can see your traffic. Do not do banking or enter passwords on open Wi-Fi unless you are using a VPN. At home, keep your network password-protected, keep the router's software updated, and turn off any guest network you are not using.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> The most common Wi-Fi attack is not clever hacking: it is someone guessing a weak password. A long, unique Wi-Fi password stops it cold.</div></p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong></p>\n<ul>\n<li>Explain how Wi-Fi works and the difference between 2.4 GHz and 5 GHz.</li>\n<li>Connect a device to a Wi-Fi network and forget a network.</li>\n<li>Change a router's Wi-Fi name and password safely.</li>\n<li>Explain WPA2 and WPA3 wireless security.</li>\n<li>Fix common Wi-Fi problems step by step.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Leaving the router's factory administrator password unchanged. Everyone knows the defaults, so change it on day one.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Using WEP or an open network at home. Use WPA2 at minimum, WPA3 if your router offers it.</div>\n<p><strong>Ready-to-Work link:</strong> If you can explain this module's main idea out loud in plain words, without looking, you have this module.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Wi-Fi",
      "def": "Wireless networking using radio signals to connect devices to a router."
    },
    {
      "term": "SSID",
      "def": "The name a Wi-Fi network broadcasts so devices can find it."
    },
    {
      "term": "2.4 GHz",
      "def": "The Wi-Fi band with longer range but lower speed."
    },
    {
      "term": "5 GHz",
      "def": "The Wi-Fi band with higher speed but shorter range."
    },
    {
      "term": "Router settings page",
      "def": "The web page, often at 192.168.1.1, used to configure a router."
    },
    {
      "term": "WPA2",
      "def": "The widely used Wi-Fi security standard."
    },
    {
      "term": "WPA3",
      "def": "The newer, stronger Wi-Fi security standard."
    },
    {
      "term": "WEP",
      "def": "An old, broken Wi-Fi security standard that should never be used."
    },
    {
      "term": "Guest network",
      "def": "A separate Wi-Fi network for visitors, kept apart from your main network."
    },
    {
      "term": "VPN",
      "def": "A virtual private network, which encrypts your traffic on untrusted networks."
    },
    {
      "term": "Signal strength",
      "def": "How strong the Wi-Fi radio signal is at a device's location."
    },
    {
      "term": "Interference",
      "def": "Other signals or devices that degrade a Wi-Fi connection."
    },
    {
      "term": "Forget network",
      "def": "Removing a saved Wi-Fi network and its password from a device."
    }
  ],
  "video": {
    "title": "Windows Network Connections - CompTIA A+ 220-1202 - 1.7",
    "embedUrl": "https://www.youtube.com/embed/Ir1Yhigsdtw",
    "note": "Professor Messer on Windows network connections, securing a small-office/home-office network, and wireless encryption.",
    "more": [
      {
        "title": "Securing a SOHO Network - CompTIA A+ 220-1202 - 2.10",
        "url": "https://www.youtube.com/watch?v=pq_CKhYYYVQ"
      },
      {
        "title": "Wireless Encryption - CompTIA A+ 220-1202 - 2.3",
        "url": "https://www.youtube.com/watch?v=oQV7ZLu25KI"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Wi-Fi” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Wi-Fi — Wireless networking using radio signals to connect devices to a router. Step 2: It matters because it is part of: Explain how Wi-Fi works and the difference between 2.4 GHz and 5 GHz. Step 3: An example from the module is the way wi-fi shows up in everyday use, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “SSID” and “2.4 GHz”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: SSID — The name a Wi-Fi network broadcasts so devices can find it. Step 2: 2.4 GHz — The Wi-Fi band with longer range but lower speed. Step 3: They differ because the first is about ssid while the second is about 2.4 ghz; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Connect a device to a Wi-Fi network and forget a network.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Connect a device to a Wi-Fi network and forget a network. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “5 GHz” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: 5 GHz — The Wi-Fi band with higher speed but shorter range. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Router settings page — The web page, often at 192.168.1.1, used to configure a router. Step 2: WPA2 — The widely used Wi-Fi security standard. Step 3: WPA3 — The newer, stronger Wi-Fi security standard. Step 4: WEP — An old, broken Wi-Fi security standard that should never be used. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Change a router's Wi-Fi name and password safely. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Wi-Fi” mean?",
      "choices": [
        "Wireless networking using radio signals to connect devices to a router.",
        "The name a Wi-Fi network broadcasts so devices can find it.",
        "The Wi-Fi band with longer range but lower speed.",
        "The Wi-Fi band with higher speed but shorter range."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Wi-Fi means: Wireless networking using radio signals to connect devices to a router. (b) is the definition of SSID, not of Wi-Fi. (c) is the definition of 2.4 GHz, not of Wi-Fi. (d) is the definition of 5 GHz, not of Wi-Fi."
    },
    {
      "q": "What does the term “SSID” mean?",
      "choices": [
        "The Wi-Fi band with longer range but lower speed.",
        "The name a Wi-Fi network broadcasts so devices can find it.",
        "The Wi-Fi band with higher speed but shorter range.",
        "The web page, often at 192.168.1.1, used to configure a router."
      ],
      "answer": 1,
      "explanation": "Correct: (b). SSID means: The name a Wi-Fi network broadcasts so devices can find it. (a) is the definition of 2.4 GHz, not of SSID. (c) is the definition of 5 GHz, not of SSID. (d) is the definition of Router settings page, not of SSID."
    },
    {
      "q": "What does the term “2.4 GHz” mean?",
      "choices": [
        "The Wi-Fi band with higher speed but shorter range.",
        "The web page, often at 192.168.1.1, used to configure a router.",
        "The Wi-Fi band with longer range but lower speed.",
        "The widely used Wi-Fi security standard."
      ],
      "answer": 2,
      "explanation": "Correct: (c). 2.4 GHz means: The Wi-Fi band with longer range but lower speed. (a) is the definition of 5 GHz, not of 2.4 GHz. (b) is the definition of Router settings page, not of 2.4 GHz. (d) is the definition of WPA2, not of 2.4 GHz."
    },
    {
      "q": "What does the term “5 GHz” mean?",
      "choices": [
        "The web page, often at 192.168.1.1, used to configure a router.",
        "The widely used Wi-Fi security standard.",
        "The newer, stronger Wi-Fi security standard.",
        "The Wi-Fi band with higher speed but shorter range."
      ],
      "answer": 3,
      "explanation": "Correct: (d). 5 GHz means: The Wi-Fi band with higher speed but shorter range. (a) is the definition of Router settings page, not of 5 GHz. (b) is the definition of WPA2, not of 5 GHz. (c) is the definition of WPA3, not of 5 GHz."
    },
    {
      "q": "Which term means: The web page, often at 192.168.1.1, used to configure a router.",
      "choices": [
        "Router settings page",
        "WPA2",
        "WPA3",
        "WEP"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Router settings page is the term for: The web page, often at 192.168.1.1, used to configure a router. (b) WPA2 means The widely used Wi-Fi security standard. (c) WPA3 means The newer, stronger Wi-Fi security standard. (d) WEP means An old, broken Wi-Fi security standard that should never be used."
    },
    {
      "q": "Which term means: The widely used Wi-Fi security standard.",
      "choices": [
        "WPA3",
        "WPA2",
        "WEP",
        "Guest network"
      ],
      "answer": 1,
      "explanation": "Correct: (b). WPA2 is the term for: The widely used Wi-Fi security standard. (a) WPA3 means The newer, stronger Wi-Fi security standard. (c) WEP means An old, broken Wi-Fi security standard that should never be used. (d) Guest network means A separate Wi-Fi network for visitors, kept apart from your main network."
    },
    {
      "q": "Which term means: The newer, stronger Wi-Fi security standard.",
      "choices": [
        "WEP",
        "Guest network",
        "WPA3",
        "VPN"
      ],
      "answer": 2,
      "explanation": "Correct: (c). WPA3 is the term for: The newer, stronger Wi-Fi security standard. (a) WEP means An old, broken Wi-Fi security standard that should never be used. (b) Guest network means A separate Wi-Fi network for visitors, kept apart from your main network. (d) VPN means A virtual private network, which encrypts your traffic on untrusted networks."
    },
    {
      "q": "Which term means: An old, broken Wi-Fi security standard that should never be used.",
      "choices": [
        "Guest network",
        "VPN",
        "Signal strength",
        "WEP"
      ],
      "answer": 3,
      "explanation": "Correct: (d). WEP is the term for: An old, broken Wi-Fi security standard that should never be used. (a) Guest network means A separate Wi-Fi network for visitors, kept apart from your main network. (b) VPN means A virtual private network, which encrypts your traffic on untrusted networks. (c) Signal strength means How strong the Wi-Fi radio signal is at a device's location."
    }
  ],
  "studyGuide": "\n<h3>Module 9 — Wi-Fi, Routers & Home Networks: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain how Wi-Fi works and the difference between 2.4 GHz and 5 GHz.</p>\n<p><strong>Key terms:</strong> Wi-Fi · SSID · 2.4 GHz · 5 GHz · Router settings page · WPA2 · WPA3 · WEP.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain how Wi-Fi works and the difference between 2.4 GHz and 5 GHz.</li>\n<li>Connect a device to a Wi-Fi network and forget a network.</li>\n<li>Change a router's Wi-Fi name and password safely.</li>\n</ul>\n<p><strong>Watch out:</strong> Never type a command you do not understand into a terminal, and never run a program as an administrator unless you know exactly what it is and where it came from.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
