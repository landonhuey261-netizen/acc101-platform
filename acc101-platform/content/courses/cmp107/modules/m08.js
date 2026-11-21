// cmp107 - Module 8: How Networks Work
module.exports = {
  "number": 8,
  "slug": "how-networks-work",
  "title": "How Networks Work",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what a network is and why computers are connected.",
    "Describe LANs, WANs, and the internet.",
    "Explain what a switch, a router, and a modem do.",
    "Describe how data travels in packets.",
    "Explain the difference between wired and wireless connections."
  ],
  "sections": [
    {
      "heading": "What a Network Is",
      "html": "<p>A network is two or more devices connected so they can share information. Your home network connects your laptop, phone, printer, and television. Your office network connects dozens or hundreds of computers. The internet is a network of networks, connecting home and office networks all over the world.</p>\n<p>Networks exist to share things: files, printers, internet access, and services such as email and video streaming. Without a network, every computer would be an island, and sharing a file would mean carrying a USB stick from one desk to another.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Every device on a network has an address so messages can find it, just as every house has a postal address. You will learn about those addresses in Module 10.</div></p>\n"
    },
    {
      "heading": "LANs, WANs, and the Internet",
      "html": "<p>A local area network, or LAN, covers a small area: a home, an office, or a school. Devices on a LAN are usually connected by the same router and can talk to each other quickly. A wide area network, or WAN, covers a large area, such as a city or a country, and connects many LANs together.</p>\n<p>The internet is the largest WAN of all: millions of LANs connected through internet service providers, or ISPs, and the big cables and data centers that link them. When you open a website, your request travels from your home LAN, through your ISP, across the internet, to the server that hosts the site, and the answer comes back the same way.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> The practical difference for you: things on your LAN are fast and under your control, while things on the internet depend on your internet connection and the far end of the journey.</div></p>\n"
    },
    {
      "heading": "Switches, Routers, and Modems",
      "html": "<p>A switch connects devices inside one network. Plug several computers into a switch and they can talk to each other. A router connects networks together: it connects your home LAN to the internet, and it decides where each packet of data should go next. A modem connects your home to your internet provider's network, turning the provider's signal into something your router can use.</p>\n<p>In most homes today, one box does all three jobs: the box your internet provider gives you is a modem, a router, and a switch, plus a Wi-Fi access point, all in one. Knowing which job each part does helps you work out where a problem is when the internet stops working.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> A useful rule: if one device cannot reach the internet but others can, the problem is probably that device. If no device can, the problem is probably the router, the modem, or the provider.</div></p>\n"
    },
    {
      "heading": "Packets and Wires vs Wi-Fi",
      "html": "<p>Data does not travel as one long stream. It is split into small pieces called packets, each labeled with where it is going and where it came from. Packets from the same message can take different routes and arrive out of order, and the receiving computer puts them back together. If a packet is lost, it is sent again.</p>\n<p>Wired connections use Ethernet cables. They are fast, stable, and secure, and they are the best choice for a desktop computer or a game console that never moves. Wireless connections use Wi-Fi radio signals. They are convenient and essential for phones and laptops, but they are slower, less stable, and more affected by walls, distance, and interference from neighbors' networks.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> When something is slow, try a cable first. If the cable fixes it, the problem is the Wi-Fi, not the internet. That one test saves hours of guessing.</div></p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong></p>\n<ul>\n<li>Explain what a network is and why computers are connected.</li>\n<li>Describe LANs, WANs, and the internet.</li>\n<li>Explain what a switch, a router, and a modem do.</li>\n<li>Describe how data travels in packets.</li>\n<li>Explain the difference between wired and wireless connections.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Blaming the internet provider when only one device is affected. Check that device first, then the router, then the provider.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Thinking Wi-Fi and the internet are the same thing. Wi-Fi is just the wireless link inside your home; the internet is beyond the router.</div>\n<p><strong>Ready-to-Work link:</strong> If you can explain this module's main idea out loud in plain words, without looking, you have this module.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Network",
      "def": "Two or more devices connected so they can share information."
    },
    {
      "term": "LAN",
      "def": "A local area network covering a small area such as a home or office."
    },
    {
      "term": "WAN",
      "def": "A wide area network covering a large area, connecting many LANs."
    },
    {
      "term": "Internet",
      "def": "The global network connecting networks all over the world."
    },
    {
      "term": "ISP",
      "def": "An internet service provider, the company that connects your home to the internet."
    },
    {
      "term": "Router",
      "def": "The device that connects your home network to the internet and directs traffic."
    },
    {
      "term": "Switch",
      "def": "A device that connects computers inside one network."
    },
    {
      "term": "Modem",
      "def": "The device that connects your home to your internet provider's network."
    },
    {
      "term": "Packet",
      "def": "A small labeled piece of data traveling across a network."
    },
    {
      "term": "Ethernet",
      "def": "The wired network standard using cables."
    },
    {
      "term": "Wi-Fi",
      "def": "The wireless network standard using radio signals."
    },
    {
      "term": "Server",
      "def": "A computer that provides a service, such as a website, to other computers."
    },
    {
      "term": "Bandwidth",
      "def": "How much data a connection can carry, usually measured in megabits per second."
    },
    {
      "term": "Latency",
      "def": "The delay before data starts arriving, usually measured in milliseconds."
    }
  ],
  "video": {
    "title": "Networking Will Finally Make Sense After This",
    "embedUrl": "https://www.youtube.com/embed/cJp3jGulgiM",
    "note": "Two clear beginner explainers plus a short lesson on IP. Follow one web request from a laptop to a server and notice each device it passes through.",
    "more": [
      {
        "title": "Every Networking Term a Beginner Needs in 12 Minutes",
        "url": "https://www.youtube.com/watch?v=LHdA_MYbnpo"
      },
      {
        "title": "Module 3.3 - IP",
        "url": "https://www.youtube.com/watch?v=nLYBj3RRwr4"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Network” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Network — Two or more devices connected so they can share information. Step 2: It matters because it is part of: Explain what a network is and why computers are connected. Step 3: An example from the module is the way network shows up in everyday use, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “LAN” and “WAN”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: LAN — A local area network covering a small area such as a home or office. Step 2: WAN — A wide area network covering a large area, connecting many LANs. Step 3: They differ because the first is about lan while the second is about wan; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Describe LANs, WANs, and the internet.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Describe LANs, WANs, and the internet. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “Internet” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: Internet — The global network connecting networks all over the world. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: ISP — An internet service provider, the company that connects your home to the internet. Step 2: Router — The device that connects your home network to the internet and directs traffic. Step 3: Switch — A device that connects computers inside one network. Step 4: Modem — The device that connects your home to your internet provider's network. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Explain what a switch, a router, and a modem do. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Network” mean?",
      "choices": [
        "Two or more devices connected so they can share information.",
        "A local area network covering a small area such as a home or office.",
        "A wide area network covering a large area, connecting many LANs.",
        "The global network connecting networks all over the world."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Network means: Two or more devices connected so they can share information. (b) is the definition of LAN, not of Network. (c) is the definition of WAN, not of Network. (d) is the definition of Internet, not of Network."
    },
    {
      "q": "What does the term “LAN” mean?",
      "choices": [
        "A wide area network covering a large area, connecting many LANs.",
        "A local area network covering a small area such as a home or office.",
        "The global network connecting networks all over the world.",
        "An internet service provider, the company that connects your home to the internet."
      ],
      "answer": 1,
      "explanation": "Correct: (b). LAN means: A local area network covering a small area such as a home or office. (a) is the definition of WAN, not of LAN. (c) is the definition of Internet, not of LAN. (d) is the definition of ISP, not of LAN."
    },
    {
      "q": "What does the term “WAN” mean?",
      "choices": [
        "The global network connecting networks all over the world.",
        "An internet service provider, the company that connects your home to the internet.",
        "A wide area network covering a large area, connecting many LANs.",
        "The device that connects your home network to the internet and directs traffic."
      ],
      "answer": 2,
      "explanation": "Correct: (c). WAN means: A wide area network covering a large area, connecting many LANs. (a) is the definition of Internet, not of WAN. (b) is the definition of ISP, not of WAN. (d) is the definition of Router, not of WAN."
    },
    {
      "q": "What does the term “Internet” mean?",
      "choices": [
        "An internet service provider, the company that connects your home to the internet.",
        "The device that connects your home network to the internet and directs traffic.",
        "A device that connects computers inside one network.",
        "The global network connecting networks all over the world."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Internet means: The global network connecting networks all over the world. (a) is the definition of ISP, not of Internet. (b) is the definition of Router, not of Internet. (c) is the definition of Switch, not of Internet."
    },
    {
      "q": "Which term means: An internet service provider, the company that connects your home to the internet.",
      "choices": [
        "ISP",
        "Router",
        "Switch",
        "Modem"
      ],
      "answer": 0,
      "explanation": "Correct: (a). ISP is the term for: An internet service provider, the company that connects your home to the internet. (b) Router means The device that connects your home network to the internet and directs traffic. (c) Switch means A device that connects computers inside one network. (d) Modem means The device that connects your home to your internet provider's network."
    },
    {
      "q": "Which term means: The device that connects your home network to the internet and directs traffic.",
      "choices": [
        "Switch",
        "Router",
        "Modem",
        "Packet"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Router is the term for: The device that connects your home network to the internet and directs traffic. (a) Switch means A device that connects computers inside one network. (c) Modem means The device that connects your home to your internet provider's network. (d) Packet means A small labeled piece of data traveling across a network."
    },
    {
      "q": "Which term means: A device that connects computers inside one network.",
      "choices": [
        "Modem",
        "Packet",
        "Switch",
        "Ethernet"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Switch is the term for: A device that connects computers inside one network. (a) Modem means The device that connects your home to your internet provider's network. (b) Packet means A small labeled piece of data traveling across a network. (d) Ethernet means The wired network standard using cables."
    },
    {
      "q": "Which term means: The device that connects your home to your internet provider's network.",
      "choices": [
        "Packet",
        "Ethernet",
        "Wi-Fi",
        "Modem"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Modem is the term for: The device that connects your home to your internet provider's network. (a) Packet means A small labeled piece of data traveling across a network. (b) Ethernet means The wired network standard using cables. (c) Wi-Fi means The wireless network standard using radio signals."
    }
  ],
  "studyGuide": "\n<h3>Module 8 — How Networks Work: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain what a network is and why computers are connected.</p>\n<p><strong>Key terms:</strong> Network · LAN · WAN · Internet · ISP · Router · Switch · Modem.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain what a network is and why computers are connected.</li>\n<li>Describe LANs, WANs, and the internet.</li>\n<li>Explain what a switch, a router, and a modem do.</li>\n</ul>\n<p><strong>Watch out:</strong> Never type a command you do not understand into a terminal, and never run a program as an administrator unless you know exactly what it is and where it came from.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
