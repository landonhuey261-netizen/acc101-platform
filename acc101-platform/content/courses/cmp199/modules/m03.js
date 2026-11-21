module.exports = {
  "number": 3,
  "slug": "a-plus-core-1-review-troubleshooting",
  "title": "A+ Core 1 Review: Hardware & Network Troubleshooting",
  "estTime": "3–4 hours",
  "objectives": [
    "Apply the six-step CompTIA troubleshooting methodology to any hardware or network problem.",
    "Diagnose common hardware faults: no power, no boot, overheating, display, and storage symptoms.",
    "Use the right tool for the job: cable tester, loopback plug, toner probe, Wi-Fi analyzer, multimeter.",
    "Troubleshoot networks with ping, ipconfig, tracert, nslookup, and netstat, in the right order.",
    "Troubleshoot mobile devices and printers by checking the simplest causes first."
  ],
  "sections": [
    {
      "heading": "The Six-Step Method: Never Skip a Step",
      "html": "<p>CompTIA's troubleshooting methodology has six steps, and the exam tests them in order: <strong>1. Identify the problem</strong> — ask what changed, gather information, and reproduce the symptom if you can. <strong>2. Establish a theory of probable cause</strong> — use the symptoms and your knowledge to guess the most likely cause. <strong>3. Test the theory</strong> — if it fits, move on; if not, form a new theory. <strong>4. Establish a plan of action</strong> to resolve the problem and implement the solution. <strong>5. Verify full system functionality</strong> and, if applicable, implement preventive measures. <strong>6. Document</strong> the findings, actions, and outcomes.</p>\n<p>The two steps candidates skip most are 5 and 6. Verifying means more than 'it turns on now' — check the whole system works, and think about what would stop it happening again (a surge protector, a backup, a driver update). Documenting means writing down what the problem was, what you did, and what fixed it, so the next person does not start from zero. In the exam, if a question describes a technician who fixed the fault but did not test or document, the missing step is the answer.</p>"
    },
    {
      "heading": "No Power, No Boot, and Overheating",
      "html": "<p>Start with the simplest causes — the exam rewards it. <strong>No power at all:</strong> check the wall socket, the power cable, the PSU switch, and the front-panel connectors before you suspect the PSU or the motherboard. <strong>Power but no boot:</strong> listen for beep codes and watch for POST messages; a single bad RAM stick, a loose graphics card, or a disconnected boot drive are the usual suspects. Reseat RAM and cards, then test with minimal parts: motherboard, one RAM stick, CPU, and power.</p>\n<p><strong>Overheating</strong> shows up as random shutdowns, throttling (the machine slows down under load), and loud fans. Check dust first, then fan operation, then thermal paste age, then airflow — a PC pushed against a wall with blocked vents will cook itself. <strong>Storage symptoms:</strong> clicking or grinding means a dying HDD — back it up immediately and replace it; a drive that disappears from the BIOS may be a loose SATA cable or a failed drive. <strong>S.M.A.R.T.</strong> data warns of a failing drive before it dies: if S.M.A.R.T. reports errors, replace the drive now, not next week.</p>"
    },
    {
      "heading": "Display, Printer, and Mobile Troubleshooting",
      "html": "<p><strong>Display problems:</strong> no picture at all — check the cable, the input source on the monitor, and whether the cable is in the graphics card or the motherboard port (a common mistake after moving a PC). Flickering or wrong colours — try another cable, then another monitor, then the driver. Dead pixels or lines on the screen point to the panel itself; a dim screen on a laptop may be a backlight or inverter fault.</p>\n<p><strong>Printer problems:</strong> nothing prints — check power, cable, paper, and the print queue for a stuck job; check the right printer is selected. Garbled output usually means a wrong driver. Paper jams — remove the paper gently in the direction of the paper path and check for torn pieces left inside. <strong>Mobile devices:</strong> a phone that will not charge — clean the port, try another cable, then suspect the battery. An app that crashes — restart it, clear its cache, update it, then reinstall it. A phone with no service — check airplane mode, the SIM seating, and whether the carrier has an outage.</p>"
    },
    {
      "heading": "Network Tools, Commands, and Common Symptoms",
      "html": "<p>Work from the physical layer up. <strong>Cable tester</strong> checks a cable is wired correctly; a <strong>loopback plug</strong> tests a network port by sending its own signal back; a <strong>toner probe</strong> traces a cable through a wall or a bundle; a <strong>Wi-Fi analyzer</strong> shows which channels are crowded; a <strong>multimeter</strong> checks voltage and continuity. A <strong>punchdown tool</strong> seats wires into a patch panel; a <strong>crimper</strong> attaches RJ45 plugs.</p>\n<p>The commands, in the order to use them: <strong>ipconfig</strong> (Windows) or <strong>ifconfig/ip</strong> (Linux/macOS) — do I have an address, and is it APIPA? <strong>ping</strong> — can I reach the gateway, then a website by IP, then by name? If ping by IP works but by name fails, it is DNS. <strong>tracert/traceroute</strong> — where does the path break? <strong>nslookup</strong> — what does DNS say about this name? <strong>netstat</strong> — which ports and connections are open on this machine? Memorise the order: address, gateway, DNS, then the wider network.</p>\n<p>Learn the symptom-to-cause pairs the exam repeats. <strong>No connectivity at all:</strong> cable unplugged, Wi-Fi off, or wrong network. <strong>Intermittent drops:</strong> interference, a failing cable, or a crowded channel. <strong>Slow speed:</strong> a 100 Mbps link instead of gigabit (check the cable category and the port), a crowded Wi-Fi channel, or a neighbour's microwave on 2.4 GHz. <strong>IP conflict:</strong> two devices with the same address — one of them probably has a static address inside the DHCP range; the fix is to reserve it or move the static address out of the pool.</p>\n<p><strong>Can reach the local network but not the internet:</strong> the gateway or the DNS server is wrong, or the router is down. <strong>One website fails, others work:</strong> the site itself, or DNS for that name. <strong>Wi-Fi connects but has no internet:</strong> the access point is up but the router or modem is down — check the lights on the modem first. Always ask 'what changed?' — a fault that started after a move, an update, or a new device usually points straight at the cause.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Methodology in order: identify, theory, test, plan and fix, verify and prevent, document.</li><li>No power/no boot: check socket, cable, PSU switch first; beep codes and POST point at RAM, graphics, or the boot drive.</li><li>Overheating: dust, fans, thermal paste, airflow — in that order. Clicking HDD: back up now, replace it.</li><li>Network commands in order: ipconfig, ping gateway, ping by IP, ping by name, tracert, nslookup, netstat.</li><li>Tools: cable tester, loopback plug, toner probe, Wi-Fi analyzer, multimeter — know what each one tests.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Replacing parts before testing the theory — the method says test first, then fix.</div><div class=\"callout\"><strong>Common mistake:</strong> Forgetting step 5 and 6: verify the whole system works and document what you did.</div>\n<p><strong>Ready-to-Work link:</strong> If you can run the six steps in order, read a ping result, and match a symptom to its cause, you have this module. Module 4 moves to Core 2: operating systems.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Troubleshooting methodology",
      "def": "CompTIA's six steps: identify, theory, test, plan and fix, verify and prevent, document."
    },
    {
      "term": "Beep code",
      "def": "A pattern of beeps at startup that reports which part failed POST — check the motherboard manual."
    },
    {
      "term": "S.M.A.R.T.",
      "def": "Self-Monitoring, Analysis, and Reporting Technology: a drive's built-in health warnings; errors mean replace it."
    },
    {
      "term": "Throttling",
      "def": "A CPU slowing itself down to avoid overheating; a sign of dust, a dead fan, or old thermal paste."
    },
    {
      "term": "Cable tester",
      "def": "A tool that checks an Ethernet cable is wired correctly end to end."
    },
    {
      "term": "Loopback plug",
      "def": "A plug that sends a port's own signal back to it, testing whether the port works."
    },
    {
      "term": "Toner probe",
      "def": "A tool that traces a cable through walls or bundles by following its tone."
    },
    {
      "term": "Wi-Fi analyzer",
      "def": "A tool that shows nearby networks, their channels, and signal strength."
    },
    {
      "term": "ipconfig",
      "def": "Windows command that shows the device's IP address, subnet mask, gateway, and DNS servers."
    },
    {
      "term": "ping",
      "def": "A command that tests whether another device answers, using ICMP echo requests."
    },
    {
      "term": "tracert",
      "def": "A command that lists each hop a packet takes to its destination, showing where the path breaks."
    },
    {
      "term": "nslookup",
      "def": "A command that asks DNS what address a name resolves to."
    },
    {
      "term": "netstat",
      "def": "A command that lists open ports and active connections on the local machine."
    },
    {
      "term": "APIPA",
      "def": "A 169.254.x.x self-assigned address meaning no DHCP server answered."
    },
    {
      "term": "IP conflict",
      "def": "Two devices with the same IP address, usually a static address inside the DHCP range."
    }
  ],
  "video": {
    "title": "Troubleshooting Hardware — CompTIA A+ 220-1201 (Professor Messer)",
    "embedUrl": "https://www.youtube.com/embed/HgeURynWn_w",
    "note": "Professor Messer works through common hardware problems step by step. As you watch, write down the symptom, the theory, and the test for each fault he covers.",
    "more": [
      {
        "title": "Troubleshooting Networks — CompTIA A+ 220-1201 (Professor Messer)",
        "url": "https://www.youtube.com/watch?v=VBDS_kOHhVk"
      },
      {
        "title": "Troubleshooting Storage Devices — CompTIA A+ 220-1201 (Professor Messer)",
        "url": "https://www.youtube.com/watch?v=aVIuyHCNPCE"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A PC will not turn on at all — no lights, no fans. List the first four checks in order.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Check the wall socket — try another device in it. Step 2: Check the power cable is firmly seated at both ends. Step 3: Check the PSU switch on the back is on. Step 4: Check the front-panel power connector on the motherboard. Step 5: Only then suspect the PSU or the motherboard.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A user can ping 8.8.8.8 but cannot open any website by name. What is the fault, and what is the fix?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The network path works (ping by IP succeeds), so the fault is DNS. Step 2: Check the DNS server address with ipconfig. Step 3: Try a known public DNS server. Step 4: Flush the DNS cache. Step 5: If the whole office is affected, the DNS server itself is down.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A laptop shuts down after 20 minutes of gaming, then works again after cooling down. What is the most likely cause, and what do you do?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Overheating — the machine shuts down to protect itself and works again when cool. Step 2: Check the vents for dust and blockage. Step 3: Check the fan spins and the temperatures. Step 4: Clean the dust and, if it is an old machine, replace the thermal paste. Step 5: Do not replace the CPU or the motherboard first.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A technician replaced a hard drive, the PC boots, but forgets to test anything else or write anything down. Which methodology steps did they skip?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Step 5 — verify full system functionality and implement preventive measures. Step 2: Step 6 — document the findings, actions, and outcomes. Step 3: The fix may be right, but without verification the user may come back with a problem the fix caused, and without documentation the next technician starts from zero.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Two computers on the same network keep dropping off, one at a time. The rest work fine. What is the likely cause, and how do you confirm it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Likely an IP conflict — two devices with the same address. Step 2: Check both devices' addresses with ipconfig. Step 3: If one has a static address inside the DHCP range, move it outside the pool or reserve it in DHCP. Step 4: Renew both addresses and confirm the drops stop.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A printer prints nothing. The queue shows a job stuck at the top. What do you do, in order?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Check power, cable, and paper first. Step 2: Check the right printer is selected. Step 3: Clear the stuck job from the queue and restart the print spooler. Step 4: Try a test page. Step 5: Only then suspect the driver — reinstall it if the test page fails.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What is the FIRST step of the CompTIA troubleshooting methodology?",
      "choices": [
        "Test the theory",
        "Identify the problem",
        "Document the findings",
        "Implement the solution"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Step 1 is identify the problem — gather information and reproduce the symptom. (a) is wrong: testing comes third, after forming a theory. (c) is wrong: documenting is the last step. (d) is wrong: implementing the solution is step 4."
    },
    {
      "q": "What is the LAST step of the methodology?",
      "choices": [
        "Verify functionality",
        "Document findings, actions, and outcomes",
        "Establish a theory",
        "Test the theory"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Step 6 is documenting what was found and done. (a) is wrong: verifying is step 5, not the last step. (c) is wrong: establishing a theory is step 2. (d) is wrong: testing the theory is step 3."
    },
    {
      "q": "A hard drive starts clicking and files vanish. What do you do FIRST?",
      "choices": [
        "Run a disk defragmenter",
        "Back up the data immediately and replace the drive",
        "Reinstall Windows",
        "Ignore it — clicking is normal"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Clicking means a dying drive: save the data now, then replace it. (a) is wrong: defragmenting a dying drive makes it worse. (c) is wrong: reinstalling Windows does not fix failing hardware. (d) is wrong: clicking is never normal."
    },
    {
      "q": "You can ping a website by IP but not by name. What is the fault?",
      "choices": [
        "The cable is unplugged",
        "DNS",
        "The PSU",
        "The graphics card"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Ping by IP works, so the path is fine and name resolution (DNS) is the fault. (a) is wrong: an unplugged cable would stop ping by IP too. (c) is wrong: the PSU has nothing to do with networking. (d) is wrong: the graphics card affects the display, not DNS."
    },
    {
      "q": "Which tool traces a cable through a wall or a bundle?",
      "choices": [
        "Multimeter",
        "Toner probe",
        "Loopback plug",
        "Cable tester"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A toner probe follows a cable's tone through walls and bundles. (a) is wrong: a multimeter checks voltage and continuity. (c) is wrong: a loopback plug tests a network port. (d) is wrong: a cable tester checks a cable's wiring end to end."
    },
    {
      "q": "A PC has power but will not boot, and beeps three times. What do you check first?",
      "choices": [
        "The monitor cable",
        "The RAM — reseat it and test one stick at a time",
        "The printer driver",
        "The Wi-Fi password"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Beep codes at POST usually point to RAM; reseat and test sticks one at a time. (a) is wrong: the monitor cable affects the display, not booting. (c) is wrong: printer drivers do not stop a PC booting. (d) is wrong: Wi-Fi has nothing to do with POST."
    },
    {
      "q": "What does tracert do?",
      "choices": [
        "Shows the IP address of the local machine",
        "Lists each hop a packet takes to its destination",
        "Resolves names to addresses",
        "Tests whether a port is open"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Tracert lists every hop, showing where the path breaks. (a) is wrong: that is ipconfig. (c) is wrong: that is nslookup. (d) is wrong: that is closer to netstat or a port scan."
    },
    {
      "q": "A Wi-Fi network keeps dropping in a crowded flat. What is the most likely cause?",
      "choices": [
        "The printer is offline",
        "Interference or a crowded channel",
        "The CPU is overheating",
        "The battery is old"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Crowded channels and interference cause intermittent Wi-Fi drops; a Wi-Fi analyzer shows it. (a) is wrong: the printer does not affect Wi-Fi. (c) is wrong: an overheating CPU slows the PC, not the Wi-Fi. (d) is wrong: an old battery affects a laptop's runtime, not the network."
    }
  ],
  "studyGuide": "\n<h3>Module 3 — A+ Core 1 Review: Hardware & Network Troubleshooting: Quick Reference</h3>\n<p><strong>Core idea:</strong> Work the six steps in order, check the simplest cause first, and test before you replace.</p>\n<p><strong>Method:</strong> 1 Identify · 2 Theory · 3 Test · 4 Plan & fix · 5 Verify & prevent · 6 Document.</p>\n<p><strong>Hardware:</strong> No power — socket, cable, PSU switch first · beeps = RAM · clicking HDD = back up now · overheating = dust, fans, paste.</p>\n<p><strong>Commands:</strong> ipconfig → ping gateway → ping by IP → ping by name → tracert → nslookup → netstat.</p>\n<p><strong>Tools:</strong> Cable tester (wiring) · loopback plug (port) · toner probe (trace cable) · Wi-Fi analyzer (channels) · multimeter (voltage).</p>\n<p><strong>Network:</strong> Ping by IP works but name fails = DNS · local works, internet fails = gateway/router · two devices drop = IP conflict.</p>\n<p><strong>Watch out:</strong> Skipping verify and document; replacing parts before testing the theory.</p>\n<p><strong>Self-check:</strong> Run the six steps on a dead PC out loud, and read a ping result, without looking. If you can, you have this module.</p>\n"
};
