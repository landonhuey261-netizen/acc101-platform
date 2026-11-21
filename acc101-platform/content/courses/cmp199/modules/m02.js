module.exports = {
  "number": 2,
  "slug": "a-plus-core-1-review-networking-mobile",
  "title": "A+ Core 1 Review: Networking & Mobile Devices",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain IPv4 and IPv6 addressing, subnetting basics, and what DHCP, DNS, and APIPA do.",
    "Match common ports and protocols (HTTP, HTTPS, DNS, DHCP, FTP, SSH, RDP, SMB, SMTP, POP3, IMAP) to their jobs.",
    "Compare wired and wireless networking: 802.11 standards, channels, SSIDs, and WPA2/WPA3 security.",
    "Set up a basic SOHO network: router, switch, access point, and the order to configure them.",
    "Configure mobile devices: cellular data, Bluetooth, hotspots, tethering, MDM, and sync."
  ],
  "sections": [
    {
      "heading": "IP Addresses: IPv4, IPv6, and How Devices Find Each Other",
      "html": "<p>Every device on a network needs an address. <strong>IPv4</strong> addresses look like 192.168.1.10 — four numbers, each 0–255, separated by dots. A <strong>subnet mask</strong> (such as 255.255.255.0) divides the address into the network part and the host part. <strong>Private ranges</strong> (192.168.x.x, 10.x.x.x, 172.16–31.x.x) are for home and office networks; your router translates them to one public address. <strong>IPv6</strong> addresses are much longer (for example 2001:db8::1) because the world ran out of IPv4 addresses, and they are written in hexadecimal with colons.</p>\n<p>Two services make addressing work. <strong>DHCP</strong> hands out addresses automatically, along with the subnet mask, the default gateway (the router), and the DNS server — a device with no DHCP server gets an <strong>APIPA</strong> address starting 169.254, which means it cannot reach the internet. <strong>DNS</strong> turns names into addresses: when you type a website name, DNS finds its IP address. If a site works by IP but not by name, DNS is the suspect; if nothing works at all, check the address and the gateway first.</p>"
    },
    {
      "heading": "Ports and Protocols: The Numbers the Exam Loves",
      "html": "<p>A <strong>port</strong> is a numbered door on a device: the IP address finds the machine, the port finds the service. <strong>TCP</strong> is reliable — it checks that data arrived and resends what was lost, which is why web pages, email, and file transfers use it. <strong>UDP</strong> is fast and does not check — used for streaming, DNS lookups, and voice/video calls where a lost packet matters less than delay.</p>\n<p>Memorise these: <strong>21</strong> FTP (file transfer), <strong>22</strong> SSH (secure remote shell), <strong>23</strong> Telnet (old, unencrypted — avoid), <strong>25</strong> SMTP (sending mail), <strong>53</strong> DNS, <strong>67/68</strong> DHCP, <strong>80</strong> HTTP (unencrypted web), <strong>110</strong> POP3 (mail download), <strong>143</strong> IMAP (mail sync), <strong>443</strong> HTTPS (encrypted web), <strong>445</strong> SMB (Windows file sharing), <strong>3389</strong> RDP (remote desktop). The exam asks these constantly — learn them as pairs: service, number, TCP or UDP, encrypted or not.</p>"
    },
    {
      "heading": "Wired and Wireless: Cables, Wi-Fi, and Channels",
      "html": "<p>Wired networking runs on <strong>twisted-pair Ethernet</strong>: Cat5e handles gigabit, Cat6 and Cat6a handle 10 gigabit over short runs, and the <strong>T568A/T568B</strong> colour schemes set the wire order (both ends the same for a straight-through cable). <strong>Plenum-rated</strong> cable is for air-handling spaces; <strong>shielded (STP)</strong> cable resists interference near power lines. Fibre carries data as light: <strong>multimode</strong> for short runs inside a building, <strong>single-mode</strong> for long runs between buildings.</p>\n<p>Wi-Fi uses the <strong>802.11</strong> standards: 802.11n (Wi-Fi 4), 802.11ac (Wi-Fi 5, 5 GHz only), and <strong>802.11ax (Wi-Fi 6/6E)</strong>, the current standard, which is faster and handles many devices better. The <strong>2.4 GHz</strong> band reaches further but is crowded and slower; <strong>5 GHz</strong> is faster but shorter range; <strong>6 GHz</strong> (Wi-Fi 6E) adds clean spectrum. On 2.4 GHz use only channels 1, 6, or 11 — the only three that do not overlap. The <strong>SSID</strong> is the network name, and <strong>WPA3</strong> is the current security standard; WPA2 is the previous one, and WEP is broken and must never be used.</p>"
    },
    {
      "heading": "Setting Up a SOHO Network, and Mobile Devices",
      "html": "<p>A <strong>SOHO</strong> (small office/home office) network has a simple shape: the <strong>modem</strong> brings the internet in (cable, DSL, or fibre ONT), the <strong>router</strong> shares it and hands out addresses, the <strong>switch</strong> adds wired ports, and the <strong>access point</strong> adds Wi-Fi. In most homes one box does modem, router, switch, and access point together. A <strong>firewall</strong> sits at the edge and blocks unwanted incoming traffic; <strong>NAT</strong> lets many private addresses share one public address.</p>\n<p>Set it up in order: connect the modem and confirm the internet light, connect the router and log in, change the default admin password, set a strong Wi-Fi password with WPA3, give the network a sensible SSID, and check that DHCP is on. Then test: a wired device first, then Wi-Fi, then a phone on the guest network. Keep the firmware updated — an old router firmware is one of the most common ways a home network gets attacked. A <strong>VLAN</strong> splits one switch into separate virtual networks (for example, keeping guest Wi-Fi away from office computers), and a <strong>VPN</strong> encrypts traffic over the internet so a remote worker connects safely.</p>\n<p>Phones and tablets connect in several ways. <strong>Cellular data</strong> runs on 4G LTE and <strong>5G</strong>; 5G is faster where it is available, 4G is the fallback. A <strong>SIM</strong> (or eSIM) identifies the device to the carrier; without it, there is no cellular service. A <strong>hotspot</strong> shares the phone's cellular connection over Wi-Fi, and <strong>tethering</strong> shares it over USB or Bluetooth. <strong>Bluetooth</strong> pairs short-range accessories — headphones, keyboards, car audio — and <strong>NFC</strong> handles tap-to-pay and quick pairing at very short range.</p>\n<p>Businesses manage fleets of phones with <strong>MDM (mobile device management)</strong>: it can push apps, enforce a lock screen, wipe a lost phone remotely, and separate work data from personal data. <strong>BYOD</strong> (bring your own device) means staff use their own phones for work; <strong>COPE</strong> (corporate-owned, personally enabled) means the company owns the phone but allows personal use. <strong>Synchronisation</strong> keeps mail, contacts, and calendars the same on every device — when sync breaks, check the account password and the sync settings before anything else. GPS, the accelerometer, and the gyroscope are the sensors apps rely on, and a phone that will not charge is usually a dirty port, a bad cable, or a worn battery — in that order.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>IP: IPv4 is four dotted numbers, IPv6 is long hex; DHCP hands out addresses, DNS turns names into addresses, APIPA 169.254 means no DHCP server.</li><li>Ports to know: 21 FTP, 22 SSH, 25 SMTP, 53 DNS, 80 HTTP, 110 POP3, 143 IMAP, 443 HTTPS, 445 SMB, 3389 RDP.</li><li>Wi-Fi: 802.11ax (Wi-Fi 6) is current, 2.4 GHz reaches further, 5 GHz is faster, use channels 1/6/11 on 2.4 GHz, WPA3 is the current security.</li><li>SOHO setup order: modem, router, change the admin password, WPA3 Wi-Fi, test wired then wireless.</li><li>Mobile: 5G/4G cellular, SIM identifies the device, hotspot shares data, MDM manages and can wipe company phones.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Confusing DNS and DHCP — DNS resolves names, DHCP hands out addresses. If a site works by IP but not by name, blame DNS.</div><div class=\"callout\"><strong>Common mistake:</strong> Using WEP or an open network. WEP is broken; WPA3 (or WPA2 at minimum) is the answer.</div>\n<p><strong>Ready-to-Work link:</strong> If you can recite the ten key ports, explain DHCP vs DNS, and set up a SOHO network in order, you have this module. Module 3 is troubleshooting: the six-step method applied to hardware and networks.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "IPv4 address",
      "def": "Four numbers 0–255 separated by dots, for example 192.168.1.10; identifies a device on a network."
    },
    {
      "term": "IPv6 address",
      "def": "A much longer hexadecimal address with colons, for example 2001:db8::1; the replacement for IPv4."
    },
    {
      "term": "Subnet mask",
      "def": "A number such as 255.255.255.0 that divides an IP address into the network part and the host part."
    },
    {
      "term": "DHCP",
      "def": "Dynamic Host Configuration Protocol: hands out IP addresses, subnet mask, gateway, and DNS automatically."
    },
    {
      "term": "DNS",
      "def": "Domain Name System: turns website names into IP addresses."
    },
    {
      "term": "APIPA",
      "def": "Automatic Private IP Addressing: a 169.254.x.x address a device gives itself when no DHCP server answers."
    },
    {
      "term": "Default gateway",
      "def": "The router address a device uses to reach other networks and the internet."
    },
    {
      "term": "TCP",
      "def": "Transmission Control Protocol: reliable, checks delivery, resends lost data — used for web, email, files."
    },
    {
      "term": "UDP",
      "def": "User Datagram Protocol: fast, no delivery check — used for streaming, DNS, and voice/video."
    },
    {
      "term": "Port",
      "def": "A numbered door on a device that identifies the service: 80 is HTTP, 443 is HTTPS, 53 is DNS."
    },
    {
      "term": "802.11ax",
      "def": "Wi-Fi 6: the current Wi-Fi standard, faster and better with many devices than 802.11ac."
    },
    {
      "term": "SSID",
      "def": "Service Set Identifier: the name of a Wi-Fi network."
    },
    {
      "term": "WPA3",
      "def": "Wi-Fi Protected Access 3: the current Wi-Fi security standard; WPA2 is the previous one, WEP is broken."
    },
    {
      "term": "SOHO",
      "def": "Small office/home office: a small network built around a modem, router, switch, and access point."
    },
    {
      "term": "VLAN",
      "def": "Virtual LAN: splits one switch into separate virtual networks to keep traffic apart."
    },
    {
      "term": "VPN",
      "def": "Virtual private network: encrypts traffic over the internet so a remote connection is private."
    },
    {
      "term": "MDM",
      "def": "Mobile device management: manages company phones — apps, lock screens, remote wipe."
    },
    {
      "term": "NFC",
      "def": "Near-field communication: very short-range wireless for tap-to-pay and quick pairing."
    }
  ],
  "video": {
    "title": "CompTIA A+ Core 1 Course | Networking (220-1201 Exam)",
    "embedUrl": "https://www.youtube.com/embed/ksQJo6cu28Y",
    "note": "A full Core 1 networking walk-through: TCP/IP, ports, network hardware, wireless, and troubleshooting. Watch it once through, then re-watch the ports section and write the ten key ports from memory.",
    "more": [
      {
        "title": "Introduction to IP — CompTIA A+ 220-1201 (Professor Messer)",
        "url": "https://www.youtube.com/watch?v=RRFjKXxYJdM"
      },
      {
        "title": "Laptop Hardware — CompTIA A+ 220-1201 (Professor Messer)",
        "url": "https://www.youtube.com/watch?v=zODZ0i-Iark"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A laptop has the address 169.254.14.8 and cannot reach the internet, but other computers on the same network work fine. What does the address tell you, and what is the first fix to try?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 169.254.x.x is an APIPA address — the laptop got no answer from the DHCP server. Step 2: The problem is this laptop's connection, not the network (others work). Step 3: First fix: check the cable or Wi-Fi connection, then release and renew the address. Step 4: If it still fails, check the DHCP server and the switch port.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A user can reach a website by typing its IP address but not by typing its name. Which service is at fault, and what do you check?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: DNS is at fault — name resolution fails while the network path works. Step 2: Check the DNS server address on the device. Step 3: Try a known public DNS server to test. Step 4: Flush the DNS cache and try again. Step 5: If other devices fail too, the DNS server itself is down.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A small office has 8 wired computers and 10 phones on Wi-Fi. List the boxes you need and the order you set them up.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Modem (or fibre ONT) brings the internet in. Step 2: Router shares the connection, runs DHCP and the firewall. Step 3: Switch adds wired ports for the 8 computers. Step 4: Access point adds Wi-Fi for the phones. Step 5: Configure in that order, change the admin password, set WPA3 Wi-Fi, then test wired first and wireless second.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A neighbour's Wi-Fi is slow in a block of flats. The router is on 2.4 GHz channel 6 and there are 12 nearby networks. What two changes do you suggest?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Move to 5 GHz if the devices support it — it is faster and less crowded. Step 2: If staying on 2.4 GHz, pick channel 1 or 11 (the only non-overlapping channels besides 6) after checking which is least used. Step 3: Check for interference from microwaves and thick walls, and move the router to a central spot.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A company phone is lost with customer data on it. What should MDM let the IT team do, and what policy should have been in place?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: MDM should let IT remotely lock and then wipe the phone. Step 2: A lock screen (PIN/biometric) and encryption should have been enforced by MDM. Step 3: Work data should be separated from personal data so the wipe only removes company data. Step 4: Report the loss and change any passwords the phone could access.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A user wants to share their phone's internet with a laptop on a train. What are the two options, and which uses less battery?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Option one is a Wi-Fi hotspot — the phone shares its cellular connection over Wi-Fi. Step 2: Option two is USB tethering — the phone shares over a cable. Step 3: USB tethering uses less battery and charges the phone at the same time. Step 4: Warn them that hotspot use eats their mobile data allowance.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does a 169.254.x.x address mean?",
      "choices": [
        "The device has a static public address",
        "No DHCP server answered, so the device gave itself an APIPA address",
        "The DNS server is working",
        "The device is on a VPN"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 169.254.x.x is APIPA — the device got no DHCP answer. (a) is wrong: APIPA is automatic, not a static public address. (c) is wrong: DNS has nothing to do with this address range. (d) is wrong: a VPN gives a different address from the VPN server."
    },
    {
      "q": "Which port does HTTPS use?",
      "choices": [
        "80",
        "21",
        "443",
        "25"
      ],
      "answer": 2,
      "explanation": "Correct: (c). HTTPS uses port 443. (a) is wrong: 80 is unencrypted HTTP. (b) is wrong: 21 is FTP. (d) is wrong: 25 is SMTP, for sending mail."
    },
    {
      "q": "Which Wi-Fi security should you use today?",
      "choices": [
        "WEP",
        "Open network",
        "WPA2 or WPA3",
        "No password, hidden SSID"
      ],
      "answer": 2,
      "explanation": "Correct: (c). WPA3 is current and WPA2 is acceptable; WEP is broken. (a) is wrong: WEP can be cracked in minutes. (b) is wrong: an open network lets anyone in. (d) is wrong: hiding the SSID is not security — anyone can still find the network."
    },
    {
      "q": "On 2.4 GHz Wi-Fi, which channels do not overlap?",
      "choices": [
        "2, 5, and 8",
        "1, 6, and 11",
        "3, 7, and 12",
        "Any channel is fine"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Only channels 1, 6, and 11 do not overlap on 2.4 GHz. (a) and (c) are wrong: those channels overlap their neighbours and cause interference. (d) is wrong: overlapping channels are the most common cause of slow Wi-Fi in flats."
    },
    {
      "q": "What is the job of DHCP?",
      "choices": [
        "Turn website names into IP addresses",
        "Hand out IP addresses, subnet mask, gateway, and DNS automatically",
        "Encrypt web traffic",
        "Share files between computers"
      ],
      "answer": 1,
      "explanation": "Correct: (b). DHCP automatically assigns addresses and network settings. (a) is wrong: that is DNS. (c) is wrong: encryption is the job of TLS/HTTPS. (d) is wrong: file sharing is SMB."
    },
    {
      "q": "A company wants to wipe a lost phone remotely. What do they need?",
      "choices": [
        "A bigger battery",
        "MDM (mobile device management)",
        "A faster charger",
        "Bluetooth headphones"
      ],
      "answer": 1,
      "explanation": "Correct: (b). MDM can push apps, enforce lock screens, and remotely wipe a lost device. (a) is wrong: battery size has nothing to do with remote management. (c) is wrong: a charger does not manage the phone. (d) is wrong: headphones are an accessory, not a management tool."
    },
    {
      "q": "Which protocol is reliable and resends lost data?",
      "choices": [
        "UDP",
        "TCP",
        "ICMP",
        "NFC"
      ],
      "answer": 1,
      "explanation": "Correct: (b). TCP checks delivery and resends lost data; web pages and email use it. (a) is wrong: UDP is fast but does not check delivery. (c) is wrong: ICMP is for diagnostics such as ping. (d) is wrong: NFC is short-range wireless for tap-to-pay."
    },
    {
      "q": "What does a router do in a SOHO network?",
      "choices": [
        "Prints documents",
        "Shares one internet connection, hands out addresses, and runs the firewall",
        "Stores backup files",
        "Charges phones"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The router shares the connection, runs DHCP and NAT, and firewalls the edge. (a) is wrong: printing is the printer's job. (c) is wrong: backups live on a drive or in the cloud, not the router. (d) is wrong: a router does not charge phones."
    }
  ],
  "studyGuide": "\n<h3>Module 2 — A+ Core 1 Review: Networking & Mobile Devices: Quick Reference</h3>\n<p><strong>Core idea:</strong> IP finds the machine, the port finds the service, DNS resolves names, DHCP hands out addresses.</p>\n<p><strong>Ports:</strong> 21 FTP · 22 SSH · 25 SMTP · 53 DNS · 80 HTTP · 110 POP3 · 143 IMAP · 443 HTTPS · 445 SMB · 3389 RDP.</p>\n<p><strong>IP:</strong> IPv4 dotted numbers · IPv6 long hex · APIPA 169.254 = no DHCP · gateway = the router.</p>\n<p><strong>Wi-Fi:</strong> 802.11ax (Wi-Fi 6) current · 2.4 GHz far, 5 GHz fast · channels 1/6/11 · WPA3 current, WEP broken.</p>\n<p><strong>SOHO:</strong> Modem → router → switch → access point · change the admin password · update firmware.</p>\n<p><strong>Mobile:</strong> 5G/4G cellular · SIM identifies the device · hotspot shares data · MDM manages and wipes.</p>\n<p><strong>Watch out:</strong> DNS vs DHCP confusion; WEP is never the answer.</p>\n<p><strong>Self-check:</strong> Recite the ten key ports, explain APIPA, and describe a SOHO setup in order, without looking. If you can, you have this module.</p>\n"
};
