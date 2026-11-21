// cmp101 - Module 6: The Internet: How It Works
module.exports = {
  "number": 6,
  "slug": "the-internet-how-it-works",
  "title": "The Internet: How It Works",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what the internet is, in plain words.",
    "Explain the difference between the internet and the World Wide Web.",
    "Describe how information travels: devices, routers, servers, and packets.",
    "Explain what an IP address and DNS do.",
    "Explain what Wi-Fi is and how you connect to it."
  ],
  "sections": [
    {
      "heading": "The Internet Is a Network of Networks",
      "html": "<p>The internet is not one thing in one place. It is millions of computers and networks, all connected, all agreeing to pass messages for each other. Your home network connects to your internet provider, your provider connects to bigger networks, and those connect to networks on the other side of the world — through cables under the sea and, in some places, satellites. That is why a message can travel from your phone to a server in another country in a fraction of a second.</p>\n<p>The World Wide Web is not the same as the internet. The web is the system of pages and links you browse. The internet is the road underneath: it also carries email, video calls, games, and messages. Saying “the internet is down” usually means your connection to that road is broken, not that the whole internet has vanished.</p>\n"
    },
    {
      "heading": "How a Page Gets to You: Packets and Servers",
      "html": "<p>When you open a website, your browser asks a server for the page. The server is a powerful computer, always on, that stores the website. The page does not travel as one lump: it is chopped into small pieces called packets. Each packet is labelled with where it is going, the packets travel separately — sometimes by different routes — and your device puts them back together in the right order.</p>\n<p>If a packet goes missing, the receiving computer asks for that piece again. This is why the internet is so reliable: no single broken cable can stop everything, because packets simply take another route. It is a bit like sending a jigsaw puzzle through the post, one piece per envelope.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> The web is pages and links. The internet is the network underneath. A server stores the website; packets carry it to you in small pieces.</div></p>\n"
    },
    {
      "heading": "Addresses: IP Addresses and DNS",
      "html": "<p>Every device on a network has an IP address — a number that works like a postal address, so messages know where to go. Computers use these numbers, but people use names: example.com is much easier to remember than a string of numbers. DNS, the Domain Name System, is the phone book that turns the name you type into the IP address the computer needs.</p>\n<p>When you type a web address and press Enter, your computer first asks DNS for the number, then asks the server at that number for the page. If DNS cannot find the name, you get an error saying the site cannot be found — which usually means a typo, not that the internet is broken.</p>\n"
    },
    {
      "heading": "Wi-Fi and Getting Connected",
      "html": "<p>Wi-Fi is the wireless link between your device and your router. The router is the box that connects your home network to your internet provider. To join Wi-Fi you pick the network name and type its password; after that, your device usually remembers it and connects on its own. If Wi-Fi is slow, the usual causes are being far from the router, too many devices using it at once, or a problem with the provider rather than your device.</p>\n<p>Mobile data is the other way to get online: your phone uses the mobile network instead of Wi-Fi. It works almost anywhere, but it usually costs more and is often slower. A good habit is to use Wi-Fi when you can, and save mobile data for when you are out.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>The internet is a network of networks; the web is pages and links on top of it.</li><li>Servers store websites; packets carry them to you in small pieces.</li><li>DNS turns a name like example.com into an IP address.</li><li>Wi-Fi connects your device to your router; the router connects you to your provider.</li><li>HTTPS means the connection is scrambled and private.</li></ul></p>\n<p><strong>Common mistake:</strong> Saying “the internet” when you mean “the web” or “my Wi-Fi”. The internet is the whole network; your Wi-Fi is just your local link to it.</p>\n<p><strong>Common mistake:</strong> Assuming a page that will not load means the whole internet is down. Check first: is it one site, or everything? One site means the site's problem; everything means your connection.</p>\n<p><strong>Ready check:</strong> If you can explain DNS with the phone-book comparison and say what a packet is, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Internet",
      "def": "A huge network of networks connecting computers all over the world so they can send information to each other."
    },
    {
      "term": "World Wide Web",
      "def": "The system of web pages and links that runs on top of the internet; the internet also carries email, video calls, and games."
    },
    {
      "term": "Wi-Fi",
      "def": "A wireless way for devices to connect to a network, usually in a home, school, or cafe."
    },
    {
      "term": "Router",
      "def": "The box in a home or office that connects your devices to the internet and to each other."
    },
    {
      "term": "ISP",
      "def": "Internet service provider — the company you pay for your internet connection."
    },
    {
      "term": "Server",
      "def": "A powerful computer, always on, that stores websites and sends them to your device when you ask."
    },
    {
      "term": "IP address",
      "def": "A number that identifies a device on a network, like a postal address for a house."
    },
    {
      "term": "DNS",
      "def": "The Domain Name System — the internet's phone book, which turns a name like example.com into an IP address."
    },
    {
      "term": "Packet",
      "def": "A small piece of a message. Information is chopped into packets, sent separately, and put back together at the other end."
    },
    {
      "term": "Broadband",
      "def": "A fast, always-on internet connection, usually through a cable or fibre line into a home."
    },
    {
      "term": "Mobile data",
      "def": "Internet through the mobile phone network, used when Wi-Fi is not available."
    },
    {
      "term": "Website",
      "def": "A collection of web pages under one name, stored on a server."
    },
    {
      "term": "Web page",
      "def": "One single page on the web, such as one article or one product page."
    },
    {
      "term": "URL",
      "def": "A web address, such as https://example.com/about, that tells the browser exactly which page to fetch."
    },
    {
      "term": "HTTPS",
      "def": "The secure version of web addresses: the connection is scrambled so others cannot read what you send."
    }
  ],
  "video": {
    "title": "The Internet: Packets, Routing & Reliability",
    "embedUrl": "https://www.youtube.com/embed/AYdF7b3nMto",
    "note": "A clear explanation of how packets, routing, and reliability work on the internet. Watch it and be ready to explain packets in your own words.",
    "more": [
      {
        "title": "Computer & Technology Basics Course for Absolute Beginners | freeCodeCamp.org",
        "url": "https://www.youtube.com/watch?v=i084Z2ImqNI"
      },
      {
        "title": "Computer & Technology Basics Course for Absolute Beginners | freeCodeCamp.org",
        "url": "https://www.youtube.com/watch?v=y2kg3MOk1sY"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Internet” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Internet — A huge network of networks connecting computers all over the world so they can send information to each other. Step 2: It matters because it is part of: Explain what the internet is, in plain words. Step 3: An example from the module is the way internet shows up in everyday use, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “World Wide Web” and “Wi-Fi”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: World Wide Web — The system of web pages and links that runs on top of the internet; the internet also carries email, video calls, and games. Step 2: Wi-Fi — A wireless way for devices to connect to a network, usually in a home, school, or cafe. Step 3: They differ because the first is about world wide web while the second is about wi-fi; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Explain the difference between the internet and the World Wide Web.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Explain the difference between the internet and the World Wide Web. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “Router” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: Router — The box in a home or office that connects your devices to the internet and to each other. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: ISP — Internet service provider — the company you pay for your internet connection. Step 2: Server — A powerful computer, always on, that stores websites and sends them to your device when you ask. Step 3: IP address — A number that identifies a device on a network, like a postal address for a house. Step 4: DNS — The Domain Name System — the internet's phone book, which turns a name like example.com into an IP address. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Explain what Wi-Fi is and how you connect to it. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Router” mean?",
      "choices": [
        "Internet service provider — the company you pay for your internet connection.",
        "A number that identifies a device on a network, like a postal address for a house.",
        "The box in a home or office that connects your devices to the internet and to each other.",
        "A fast, always-on internet connection, usually through a cable or fibre line into a home."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Router means: The box in a home or office that connects your devices to the internet and to each other. (a) is the definition of ISP, not of Router. (b) is the definition of Broadband, not of Router. (d) is the definition of IP address, not of Router."
    },
    {
      "q": "What does the term “IP address” mean?",
      "choices": [
        "A wireless way for devices to connect to a network, usually in a home, school, or cafe.",
        "Internet service provider — the company you pay for your internet connection.",
        "A collection of web pages under one name, stored on a server.",
        "A number that identifies a device on a network, like a postal address for a house."
      ],
      "answer": 3,
      "explanation": "Correct: (d). IP address means: A number that identifies a device on a network, like a postal address for a house. (a) is the definition of Website, not of IP address. (b) is the definition of ISP, not of IP address. (c) is the definition of Wi-Fi, not of IP address."
    },
    {
      "q": "Which term means: A fast, always-on internet connection, usually through a cable or fibre line into a home.",
      "choices": [
        "World Wide Web",
        "Wi-Fi",
        "Broadband",
        "Server"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Broadband is the term for: A fast, always-on internet connection, usually through a cable or fibre line into a home. (a) Wi-Fi means A wireless way for devices to connect to a network, usually in a home, school, or cafe. (b) Server means A powerful computer, always on, that stores websites and sends them to your device when you ask. (d) World Wide Web means The system of web pages and links that runs on top of the internet; the internet also carries email, video calls, and games."
    },
    {
      "q": "Which term means: One single page on the web, such as one article or one product page.",
      "choices": [
        "IP address",
        "Packet",
        "Web page",
        "Broadband"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Web page is the term for: One single page on the web, such as one article or one product page. (a) IP address means A number that identifies a device on a network, like a postal address for a house. (b) Packet means A small piece of a message. Information is chopped into packets, sent separately, and put back together at the other end. (d) Broadband means A fast, always-on internet connection, usually through a cable or fibre line into a home."
    },
    {
      "q": "Which of the following is TRUE about Internet?",
      "choices": [
        "A wireless way for devices to connect to a network, usually in a home, school, or cafe.",
        "A huge network of networks connecting computers all over the world so they can send information to each other.",
        "A number that identifies a device on a network, like a postal address for a house.",
        "Internet service provider — the company you pay for your internet connection."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Internet: A huge network of networks connecting computers all over the world so they can send information to each other. (a) describes ISP, not Internet. (c) describes Wi-Fi, not Internet. (d) describes IP address, not Internet."
    },
    {
      "q": "What does the term “Router” mean?",
      "choices": [
        "A collection of web pages under one name, stored on a server.",
        "The system of web pages and links that runs on top of the internet; the internet also carries email, video calls, and games.",
        "The box in a home or office that connects your devices to the internet and to each other.",
        "A web address, such as https://example.com/about, that tells the browser exactly which page to fetch."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Router means: The box in a home or office that connects your devices to the internet and to each other. (a) is the definition of Website, not of Router. (b) is the definition of World Wide Web, not of Router. (d) is the definition of URL, not of Router."
    },
    {
      "q": "Lena types a website name with a small typo and gets an error saying the site cannot be found, but other websites load fine. What most likely happened?",
      "choices": [
        "Her whole internet connection is down",
        "DNS could not find the mistyped name",
        "Her router is broken",
        "The website's server is her own computer"
      ],
      "answer": 1,
      "explanation": "Correct: (b). DNS turns names into addresses; a mistyped name has no address, so DNS cannot find it. (a) is wrong: other sites load, so the connection works. (c) is wrong: a broken router would stop everything. (d) is wrong: websites live on servers, not on her computer."
    },
    {
      "q": "What is the difference between the internet and the World Wide Web?",
      "choices": [
        "They are exactly the same thing",
        "The internet is the network underneath; the web is pages and links that run on it",
        "The web is the network; the internet is just email",
        "The internet is only Wi-Fi; the web is only cables"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The internet is the network of connected computers; the web is the system of pages and links on top of it. (a) is wrong: they are different layers. (c) is backwards. (d) is wrong: Wi-Fi and cables are both just ways to connect to the internet."
    }
  ],
  "studyGuide": "\n<h3>Module 6 — The Internet: How It Works: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain what the internet is, in plain words.</p>\n<p><strong>Key terms:</strong> Internet · World Wide Web · Wi-Fi · Router · ISP · Server · IP address · DNS.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain what the internet is, in plain words.</li>\n<li>Explain the difference between the internet and the World Wide Web.</li>\n<li>Describe how information travels: devices, routers, servers, and packets.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
