// cmp107 - Module 10: IP Addresses, DNS & the Internet
module.exports = {
  "number": 10,
  "slug": "ip-addresses-dns-and-the-internet",
  "title": "IP Addresses, DNS & the Internet",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what an IP address is and what it looks like.",
    "Explain the difference between private and public IP addresses.",
    "Explain how DHCP gives devices their addresses.",
    "Explain how DNS turns names into IP addresses.",
    "Use ipconfig, ping, and nslookup to check a connection."
  ],
  "sections": [
    {
      "heading": "IP Addresses: Every Device Gets a Number",
      "html": "<p>An IP address is a number that identifies a device on a network, like a house number on a street. The older version, IPv4, looks like four numbers separated by dots, such as 192.168.1.20. Each number is between 0 and 255. The newer version, IPv6, uses longer addresses written in hexadecimal, but IPv4 is still what you will see most often at home.</p>\n<p>Your home devices have private addresses, usually starting with 192.168 or 10. Those addresses only work inside your home network. Your router has one public address, given by your internet provider, which is how the rest of the internet sees your home. The router translates between the two, a job called NAT, so many devices can share one public address.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> You can see your own address on Windows with the command ipconfig in Command Prompt, and on a Mac or Linux with ip addr in the terminal. The address next to IPv4 Address is your device's private address, and the Default Gateway is your router, usually 192.168.1.1.</div></p>\n"
    },
    {
      "heading": "DHCP: Addresses Handed Out Automatically",
      "html": "<p>Nobody types IP addresses into every device by hand. A service called DHCP, usually running on your router, hands out addresses automatically when a device joins the network. It gives each device an address, a subnet mask, the gateway address, and the DNS server to use, and it remembers which device got which address.</p>\n<p>DHCP leases an address for a period of time, often a day. When the lease expires, the device asks for a new one, and usually gets the same address again. If two devices somehow end up with the same address, you get an address conflict, and one of them will lose its connection until the conflict is fixed, usually by restarting the device or the router.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Most home users should leave DHCP on and let the router do its job. Manual addresses are for special cases, such as a printer that must always be at the same address.</div></p>\n"
    },
    {
      "heading": "DNS: The Internet's Phone Book",
      "html": "<p>Computers talk in numbers, but people remember names. DNS, the Domain Name System, is the phone book that turns a name such as www.example.com into an IP address. When you type a website name, your computer asks a DNS server for the matching address, then connects to that address.</p>\n<p>Your router usually tells your devices to use your internet provider's DNS servers, but you can also use public ones. If DNS stops working, you can still reach a site by its IP address, but names stop working — which is why a computer that says it is connected but cannot open any website often has a DNS problem.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Try it yourself: on Windows, type nslookup example.com in Command Prompt, and you will see the IP address behind the name. On a Mac or Linux, the command dig example.com shows the same thing in more detail.</div></p>\n"
    },
    {
      "heading": "Testing a Connection: ping, ipconfig, nslookup",
      "html": "<p>Three commands answer most network questions. ipconfig on Windows, or ip addr on Mac and Linux, shows your address, gateway, and DNS servers. ping sends a small test packet to an address and reports whether it came back and how long it took: ping 192.168.1.1 tests your router, ping 8.8.8.8 tests the internet, and ping example.com tests DNS as well.</p>\n<p>If ping to the router works but ping to 8.8.8.8 fails, the problem is between your router and the internet. If ping to 8.8.8.8 works but ping to a website name fails, the problem is DNS. That two-minute test tells you exactly where to look, instead of guessing.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> On Windows, tracert shows each hop a packet takes to reach its destination, and on Mac and Linux the same tool is called traceroute. It is useful when a site is slow, because it shows which hop is adding the delay.</div></p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong></p>\n<ul>\n<li>Explain what an IP address is and what it looks like.</li>\n<li>Explain the difference between private and public IP addresses.</li>\n<li>Explain how DHCP gives devices their addresses.</li>\n<li>Explain how DNS turns names into IP addresses.</li>\n<li>Use ipconfig, ping, and nslookup to check a connection.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Typing a website name and concluding the internet is down when only DNS is broken. Test ping 8.8.8.8 to tell the difference.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Setting a manual IP address that clashes with DHCP. Leave DHCP on unless you have a specific reason to set an address by hand.</div>\n<p><strong>Ready-to-Work link:</strong> If you can explain this module's main idea out loud in plain words, without looking, you have this module.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "IP address",
      "def": "A number identifying a device on a network, such as 192.168.1.20."
    },
    {
      "term": "IPv4",
      "def": "The older IP version using four numbers from 0 to 255, separated by dots."
    },
    {
      "term": "IPv6",
      "def": "The newer IP version using longer addresses written in hexadecimal."
    },
    {
      "term": "Private address",
      "def": "An address that only works inside a local network, such as 192.168.1.20."
    },
    {
      "term": "Public address",
      "def": "The address the internet sees for your home, given by your provider."
    },
    {
      "term": "NAT",
      "def": "The router's job of translating between private and public addresses."
    },
    {
      "term": "DHCP",
      "def": "The service that hands out IP addresses automatically when devices join a network."
    },
    {
      "term": "DNS",
      "def": "The Domain Name System, which turns names such as example.com into IP addresses."
    },
    {
      "term": "Default gateway",
      "def": "The router's address on your network, usually 192.168.1.1."
    },
    {
      "term": "Subnet mask",
      "def": "A number that defines which part of an IP address is the network and which is the device."
    },
    {
      "term": "ipconfig",
      "def": "The Windows command that shows your network settings."
    },
    {
      "term": "ping",
      "def": "The command that tests whether another device answers on the network."
    },
    {
      "term": "nslookup",
      "def": "The Windows command that asks DNS for the address behind a name."
    },
    {
      "term": "tracert / traceroute",
      "def": "The command that lists each hop a packet takes to its destination."
    },
    {
      "term": "dig",
      "def": "The Mac and Linux command that asks DNS for detailed information about a name."
    }
  ],
  "video": {
    "title": "Windows IP Address Configuration - CompTIA A+ 220-1202 - 1.7",
    "embedUrl": "https://www.youtube.com/embed/wA0BV7FzH9Q",
    "note": "Professor Messer on Windows IP configuration, plus two short explainers on DNS and DHCP. Try nslookup and ping yourself as you watch.",
    "more": [
      {
        "title": "DNS Explained in 6 Minutes: The Internet’s Phone Book (Networking Basics #2)",
        "url": "https://www.youtube.com/watch?v=T65DAN6-a9k"
      },
      {
        "title": "DHCP AND DNS (Networking)",
        "url": "https://www.youtube.com/watch?v=NoUZz3Ya-SQ"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “IP address” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: IP address — A number identifying a device on a network, such as 192.168.1.20. Step 2: It matters because it is part of: Explain what an IP address is and what it looks like. Step 3: An example from the module is the way ip address shows up in everyday use, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “IPv4” and “IPv6”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: IPv4 — The older IP version using four numbers from 0 to 255, separated by dots. Step 2: IPv6 — The newer IP version using longer addresses written in hexadecimal. Step 3: They differ because the first is about ipv4 while the second is about ipv6; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Explain the difference between private and public IP addresses.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Explain the difference between private and public IP addresses. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “Private address” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: Private address — An address that only works inside a local network, such as 192.168.1.20. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Public address — The address the internet sees for your home, given by your provider. Step 2: NAT — The router's job of translating between private and public addresses. Step 3: DHCP — The service that hands out IP addresses automatically when devices join a network. Step 4: DNS — The Domain Name System, which turns names such as example.com into IP addresses. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Explain how DHCP gives devices their addresses. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “IP address” mean?",
      "choices": [
        "A number identifying a device on a network, such as 192.168.1.20.",
        "The older IP version using four numbers from 0 to 255, separated by dots.",
        "The newer IP version using longer addresses written in hexadecimal.",
        "An address that only works inside a local network, such as 192.168.1.20."
      ],
      "answer": 0,
      "explanation": "Correct: (a). IP address means: A number identifying a device on a network, such as 192.168.1.20. (b) is the definition of IPv4, not of IP address. (c) is the definition of IPv6, not of IP address. (d) is the definition of Private address, not of IP address."
    },
    {
      "q": "What does the term “IPv4” mean?",
      "choices": [
        "The newer IP version using longer addresses written in hexadecimal.",
        "The older IP version using four numbers from 0 to 255, separated by dots.",
        "An address that only works inside a local network, such as 192.168.1.20.",
        "The address the internet sees for your home, given by your provider."
      ],
      "answer": 1,
      "explanation": "Correct: (b). IPv4 means: The older IP version using four numbers from 0 to 255, separated by dots. (a) is the definition of IPv6, not of IPv4. (c) is the definition of Private address, not of IPv4. (d) is the definition of Public address, not of IPv4."
    },
    {
      "q": "What does the term “IPv6” mean?",
      "choices": [
        "An address that only works inside a local network, such as 192.168.1.20.",
        "The address the internet sees for your home, given by your provider.",
        "The newer IP version using longer addresses written in hexadecimal.",
        "The router's job of translating between private and public addresses."
      ],
      "answer": 2,
      "explanation": "Correct: (c). IPv6 means: The newer IP version using longer addresses written in hexadecimal. (a) is the definition of Private address, not of IPv6. (b) is the definition of Public address, not of IPv6. (d) is the definition of NAT, not of IPv6."
    },
    {
      "q": "What does the term “Private address” mean?",
      "choices": [
        "The address the internet sees for your home, given by your provider.",
        "The router's job of translating between private and public addresses.",
        "The service that hands out IP addresses automatically when devices join a network.",
        "An address that only works inside a local network, such as 192.168.1.20."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Private address means: An address that only works inside a local network, such as 192.168.1.20. (a) is the definition of Public address, not of Private address. (b) is the definition of NAT, not of Private address. (c) is the definition of DHCP, not of Private address."
    },
    {
      "q": "Which term means: The address the internet sees for your home, given by your provider.",
      "choices": [
        "Public address",
        "NAT",
        "DHCP",
        "DNS"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Public address is the term for: The address the internet sees for your home, given by your provider. (b) NAT means The router's job of translating between private and public addresses. (c) DHCP means The service that hands out IP addresses automatically when devices join a network. (d) DNS means The Domain Name System, which turns names such as example.com into IP addresses."
    },
    {
      "q": "Which term means: The router's job of translating between private and public addresses.",
      "choices": [
        "DHCP",
        "NAT",
        "DNS",
        "Default gateway"
      ],
      "answer": 1,
      "explanation": "Correct: (b). NAT is the term for: The router's job of translating between private and public addresses. (a) DHCP means The service that hands out IP addresses automatically when devices join a network. (c) DNS means The Domain Name System, which turns names such as example.com into IP addresses. (d) Default gateway means The router's address on your network, usually 192.168.1.1."
    },
    {
      "q": "Which term means: The service that hands out IP addresses automatically when devices join a network.",
      "choices": [
        "DNS",
        "Default gateway",
        "DHCP",
        "Subnet mask"
      ],
      "answer": 2,
      "explanation": "Correct: (c). DHCP is the term for: The service that hands out IP addresses automatically when devices join a network. (a) DNS means The Domain Name System, which turns names such as example.com into IP addresses. (b) Default gateway means The router's address on your network, usually 192.168.1.1. (d) Subnet mask means A number that defines which part of an IP address is the network and which is the device."
    },
    {
      "q": "Which term means: The Domain Name System, which turns names such as example.com into IP addresses.",
      "choices": [
        "Default gateway",
        "Subnet mask",
        "ipconfig",
        "DNS"
      ],
      "answer": 3,
      "explanation": "Correct: (d). DNS is the term for: The Domain Name System, which turns names such as example.com into IP addresses. (a) Default gateway means The router's address on your network, usually 192.168.1.1. (b) Subnet mask means A number that defines which part of an IP address is the network and which is the device. (c) ipconfig means The Windows command that shows your network settings."
    }
  ],
  "studyGuide": "\n<h3>Module 10 — IP Addresses, DNS & the Internet: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain what an IP address is and what it looks like.</p>\n<p><strong>Key terms:</strong> IP address · IPv4 · IPv6 · Private address · Public address · NAT · DHCP · DNS.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain what an IP address is and what it looks like.</li>\n<li>Explain the difference between private and public IP addresses.</li>\n<li>Explain how DHCP gives devices their addresses.</li>\n</ul>\n<p><strong>Watch out:</strong> Never type a command you do not understand into a terminal, and never run a program as an administrator unless you know exactly what it is and where it came from.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
