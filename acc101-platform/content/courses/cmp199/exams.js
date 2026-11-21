module.exports = {
  "midterm": {
    "title": "A+ Core 1 Practice Exam (220-1201)",
    "minutes": 90,
    "passPercent": 70,
    "coverage": "90 original questions in the real exam's style, spanning the Core 1 domains: mobile devices, networking, hardware, virtualization and cloud computing, and hardware and network troubleshooting. Practice benchmark only: the real Core 1 exam (220-1201) is up to 90 questions in 90 minutes, including performance-based questions, and passes at 675 on a 100–900 scaled scale — NOT a percentage — so the 70% used here is a practice benchmark only, never the real pass mark.",
    "questions": [
      {
        "module": 1,
        "q": "A motherboard has an LGA 1700 socket. Which CPU can it take?",
        "choices": [
          "An AMD AM5 CPU",
          "An Intel LGA 1700 CPU",
          "An AMD AM4 CPU",
          "Any CPU with the same wattage"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The socket must match the CPU exactly — LGA 1700 takes an LGA 1700 Intel CPU. (a) is wrong: AM5 is an AMD socket with a different layout. (c) is wrong: AM4 is the older AMD socket. (d) is wrong: wattage does not make a CPU fit a socket."
      },
      {
        "module": 1,
        "q": "What is the job of the chipset on a motherboard?",
        "choices": [
          "To store files",
          "To control traffic between the CPU, memory, and peripherals and set the board's features",
          "To cool the CPU",
          "To provide Wi-Fi"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The chipset manages data flow and decides which features the board supports. (a) is wrong: files are stored on drives. (c) is wrong: cooling is the heatsink and fans. (d) is wrong: Wi-Fi comes from a separate adapter or chip."
      },
      {
        "module": 1,
        "q": "Which RAM type is used in a laptop?",
        "choices": [
          "Desktop DIMM",
          "SO-DIMM",
          "ECC RDIMM",
          "GDDR6"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Laptops use the shorter SO-DIMM form factor. (a) is wrong: desktop DIMMs are too long for laptop slots. (c) is wrong: ECC registered memory is for servers. (d) is wrong: GDDR6 is graphics memory on a video card."
      },
      {
        "module": 1,
        "q": "Can DDR4 RAM be installed in a DDR5 slot?",
        "choices": [
          "Yes, it is faster",
          "No — the notch is in a different place and the generations are not interchangeable",
          "Yes, if you update the BIOS",
          "No, because DDR5 uses less power"
        ],
        "answer": 1,
        "explanation": "Correct: (b). DDR generations are not interchangeable and the notch prevents fitting the wrong type. (a) is wrong: DDR4 is slower than DDR5 and does not fit. (c) is wrong: no BIOS update changes the physical slot. (d) is wrong: power is not the reason — the slot and notch are."
      },
      {
        "module": 1,
        "q": "Why is running two matched RAM sticks in dual channel better than one stick of the same total size?",
        "choices": [
          "It doubles the storage",
          "It roughly doubles the memory bandwidth",
          "It halves the power use",
          "It removes the need for a CPU"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Dual channel lets the memory bus work twice as wide. (a) is wrong: RAM is memory, not storage. (c) is wrong: power use does not halve. (d) is wrong: the CPU is still needed."
      },
      {
        "module": 1,
        "q": "What is ECC memory used for?",
        "choices": [
          "Gaming PCs",
          "Servers and workstations where a flipped bit could corrupt data",
          "Laptops",
          "Graphics cards"
        ],
        "answer": 1,
        "explanation": "Correct: (b). ECC detects and fixes single-bit errors, which matters where data integrity is critical. (a) is wrong: gaming PCs use ordinary non-ECC RAM. (c) is wrong: laptops use SO-DIMM, usually non-ECC. (d) is wrong: graphics cards use GDDR, not ECC system RAM."
      },
      {
        "module": 1,
        "q": "Which storage is fastest for loading large video files?",
        "choices": [
          "5400 RPM HDD",
          "SATA SSD",
          "NVMe SSD over PCIe",
          "USB 2.0 flash drive"
        ],
        "answer": 2,
        "explanation": "Correct: (c). NVMe over PCIe is the fastest common storage. (a) is wrong: a slow spinning HDD is the slowest option. (b) is wrong: SATA caps SSD speed well below NVMe. (d) is wrong: USB 2.0 is far too slow."
      },
      {
        "module": 1,
        "q": "What does RAID 0 do?",
        "choices": [
          "Mirrors data for safety",
          "Stripes data across disks for speed, with no redundancy",
          "Survives one disk failure",
          "Backs up files to the cloud"
        ],
        "answer": 1,
        "explanation": "Correct: (b). RAID 0 stripes for speed; lose one disk and all data is lost. (a) is wrong: mirroring is RAID 1. (c) is wrong: surviving one failure is RAID 5. (d) is wrong: RAID is not a backup or cloud storage."
      },
      {
        "module": 1,
        "q": "A business needs its database to survive one disk failing. Which RAID level needs at least three disks?",
        "choices": [
          "RAID 0",
          "RAID 1",
          "RAID 5",
          "RAID 1+0"
        ],
        "answer": 2,
        "explanation": "Correct: (c). RAID 5 stripes with parity across at least three disks and survives one failure. (a) is wrong: RAID 0 has no redundancy. (b) is wrong: RAID 1 mirrors two disks. (d) is wrong: RAID 1+0 needs at least four disks."
      },
      {
        "module": 1,
        "q": "How many disks does RAID 1+0 need at minimum?",
        "choices": [
          "Two",
          "Three",
          "Four",
          "Six"
        ],
        "answer": 2,
        "explanation": "Correct: (c). RAID 1+0 mirrors then stripes, needing at least four disks. (a) is wrong: two disks is RAID 1. (b) is wrong: three disks is RAID 5. (d) is wrong: six is more than the minimum."
      },
      {
        "module": 1,
        "q": "A user deletes an important file from a RAID 1 array. Can the mirror copy save it?",
        "choices": [
          "Yes — the mirror keeps a copy of the deleted file",
          "No — the deletion applies to both disks at once",
          "Yes, if the file was deleted on a Monday",
          "No, because RAID 1 has no disks"
        ],
        "answer": 1,
        "explanation": "Correct: (b). RAID 1 mirrors every change, including deletions — a deleted file is deleted on both disks. (a) is wrong: the mirror holds the same data, not a backup of it. (c) is wrong: the day of the week is irrelevant. (d) is wrong: RAID 1 does have disks — two of them."
      },
      {
        "module": 1,
        "q": "A PC shuts down only during gaming, never while browsing. What is the most likely cause?",
        "choices": [
          "A virus",
          "Heat or an undersized PSU under load",
          "A broken monitor",
          "A full hard drive"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Gaming loads the CPU and graphics card, exposing heat or power problems. (a) is wrong: a virus would affect the PC at all times. (c) is wrong: a broken monitor affects the picture, not shutdowns. (d) is wrong: a full drive slows the PC but does not shut it down under load."
      },
      {
        "module": 1,
        "q": "What should a PSU's load be for efficient, reliable running?",
        "choices": [
          "90–100% of its rating",
          "50–70% of its rating",
          "10–20% of its rating",
          "Exactly 100%"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A PSU running at 50–70% of its rating is efficient and has headroom. (a) is wrong: running near maximum causes shutdowns and shortens its life. (c) is wrong: 10–20% wastes capacity and money. (d) is wrong: exactly 100% leaves no headroom at all."
      },
      {
        "module": 1,
        "q": "Which connector powers the CPU on a motherboard?",
        "choices": [
          "24-pin ATX",
          "4/8-pin EPS",
          "SATA power",
          "Molex"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The 4/8-pin EPS connector powers the CPU. (a) is wrong: the 24-pin powers the motherboard itself. (c) is wrong: SATA power is for drives. (d) is wrong: Molex is an old peripheral connector."
      },
      {
        "module": 1,
        "q": "What is thermal paste for?",
        "choices": [
          "To glue the CPU to the board",
          "To carry heat from the CPU to the heatsink",
          "To insulate the CPU from cold",
          "To clean the motherboard"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Thermal paste fills tiny gaps so heat moves efficiently into the heatsink. (a) is wrong: paste does not glue anything. (c) is wrong: paste transfers heat, it does not insulate. (d) is wrong: cleaning uses compressed air or isopropyl alcohol."
      },
      {
        "module": 1,
        "q": "Which display panel type gives true blacks?",
        "choices": [
          "TN",
          "IPS",
          "OLED",
          "VA with backlight"
        ],
        "answer": 2,
        "explanation": "Correct: (c). OLED pixels make their own light, so black pixels are truly off. (a) is wrong: TN panels have poor colour and viewing angles. (b) is wrong: IPS has good colour but uses a backlight, so blacks are not true black. (d) is wrong: VA uses a backlight too, so blacks are dark grey, not true black."
      },
      {
        "module": 1,
        "q": "Which video connection is the PC standard for high refresh rates?",
        "choices": [
          "VGA",
          "DVI",
          "DisplayPort",
          "Composite"
        ],
        "answer": 2,
        "explanation": "Correct: (c). DisplayPort is the PC standard for high refresh rates. (a) is wrong: VGA is an old analogue standard. (b) is wrong: DVI is older and limited. (d) is wrong: composite is an old TV connection."
      },
      {
        "module": 1,
        "q": "Which connector is the small reversible oval used by USB-C and Thunderbolt?",
        "choices": [
          "USB-A",
          "RJ45",
          "USB-C",
          "HDMI"
        ],
        "answer": 2,
        "explanation": "Correct: (c). USB-C is the small reversible oval; Thunderbolt 3 and 4 use the same shape. (a) is wrong: USB-A is the older large rectangle. (b) is wrong: RJ45 is the Ethernet plug. (d) is wrong: HDMI is a video connector."
      },
      {
        "module": 1,
        "q": "What is the difference between a laser printer and an inkjet printer?",
        "choices": [
          "Laser uses toner and a fuser; inkjet sprays liquid ink",
          "Laser uses ink; inkjet uses toner",
          "Laser is only for photos",
          "Inkjet is only for offices"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Laser printers melt toner onto the page with a fuser; inkjets spray liquid ink. (b) is wrong: that is backwards. (c) is wrong: inkjet is best for photos, laser for office documents. (d) is wrong: laser is the office standard, inkjet is common at home."
      },
      {
        "module": 1,
        "q": "A laser printer prints faded pages with vertical white lines. The toner is new. What is most likely wrong?",
        "choices": [
          "The paper is damp",
          "The drum is dirty or damaged",
          "The USB cable is loose",
          "The driver is too old"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A dirty or damaged drum fails to transfer toner evenly. (a) is wrong: damp paper causes jams or smudging, not clean white lines. (c) is wrong: a loose cable stops printing entirely. (d) is wrong: a driver problem causes garbled output, not faded lines."
      },
      {
        "module": 1,
        "q": "Which printer type uses heat on special paper and no ink at all?",
        "choices": [
          "Laser",
          "Inkjet",
          "Thermal",
          "Impact"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Thermal printers use heat on special paper — receipts and labels. (a) is wrong: laser uses toner. (b) is wrong: inkjet uses liquid ink. (d) is wrong: impact printers strike a ribbon."
      },
      {
        "module": 1,
        "q": "What does the BIOS/UEFI do at startup?",
        "choices": [
          "Installs Windows",
          "Runs POST, finds the boot drive, and hands control to the OS",
          "Connects to Wi-Fi",
          "Formats the hard drive"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The firmware runs the power-on self-test and finds the boot drive. (a) is wrong: Windows installs after boot. (c) is wrong: Wi-Fi connects in the OS. (d) is wrong: formatting is a disk task."
      },
      {
        "module": 1,
        "q": "A PC beeps at startup and shows the wrong amount of RAM. What do you check first?",
        "choices": [
          "The CPU",
          "Reseat the RAM and test one stick at a time",
          "The monitor",
          "The printer"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Beep codes and wrong RAM amounts point to loose or faulty RAM. (a) is wrong: the CPU rarely causes RAM symptoms. (c) is wrong: the monitor shows the picture, it does not affect RAM. (d) is wrong: the printer has nothing to do with boot or RAM."
      },
      {
        "module": 1,
        "q": "Which is the most common cause of a PC overheating?",
        "choices": [
          "A virus",
          "Dust-clogged fans and dried-out thermal paste",
          "Too much RAM",
          "A large monitor"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Dust blocks airflow and old paste stops heat transfer. (a) is wrong: a virus loads the CPU but does not block cooling. (c) is wrong: more RAM does not cause heat. (d) is wrong: monitor size has nothing to do with PC temperature."
      },
      {
        "module": 1,
        "q": "What is the M.2 2280 size?",
        "choices": [
          "A RAM stick length",
          "The common length of an M.2 SSD (22 mm wide, 80 mm long)",
          "A CPU socket",
          "A power supply size"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 2280 means 22 mm wide by 80 mm long — the common M.2 SSD size. (a) is wrong: RAM uses DIMM/SO-DIMM sizes. (c) is wrong: CPU sockets are named LGA or AM. (d) is wrong: PSUs are sized by form factor (ATX) and wattage."
      },
      {
        "module": 1,
        "q": "Which cable carries video, data, and power on one cable?",
        "choices": [
          "VGA",
          "USB-C",
          "DVI",
          "RJ11"
        ],
        "answer": 1,
        "explanation": "Correct: (b). USB-C can carry video, data, and power together. (a) is wrong: VGA carries analogue video only. (c) is wrong: DVI carries digital video only. (d) is wrong: RJ11 is a telephone connector."
      },
      {
        "module": 1,
        "q": "What is the purpose of a UPS?",
        "choices": [
          "To speed up the PC",
          "To keep the PC running briefly during a power cut so it can shut down safely",
          "To cool the CPU",
          "To back up files"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A UPS (uninterruptible power supply) gives a few minutes of power to save work and shut down safely. (a) is wrong: a UPS does not affect speed. (c) is wrong: cooling is fans and heatsinks. (d) is wrong: backup is a separate job — a UPS protects against power loss, not data loss."
      },
      {
        "module": 1,
        "q": "An inkjet printer has not been used for months and now prints with missing lines. What is the most likely cause?",
        "choices": [
          "Empty paper tray",
          "Clogged print heads",
          "Wrong driver",
          "Dead PSU"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Inkjet heads clog when the printer sits unused. (a) is wrong: an empty tray stops printing entirely. (c) is wrong: a wrong driver causes garbled output. (d) is wrong: a dead PSU means no power at all."
      },
      {
        "module": 1,
        "q": "Which form factor is the smallest common desktop motherboard?",
        "choices": [
          "ATX",
          "Micro-ATX",
          "Mini-ITX",
          "E-ATX"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Mini-ITX is the smallest common desktop form factor. (a) is wrong: ATX is the full-size standard. (b) is wrong: micro-ATX is smaller than ATX but bigger than Mini-ITX. (d) is wrong: E-ATX is larger than ATX."
      },
      {
        "module": 1,
        "q": "What does POST stand for and what does it do?",
        "choices": [
          "Power-on self-test: checks hardware at startup",
          "Print output status test: checks the printer",
          "Program operating system transfer: loads Windows",
          "Peripheral online status tracker: checks USB devices"
        ],
        "answer": 0,
        "explanation": "Correct: (a). POST is the power-on self-test run by the firmware at startup. (b) is wrong: POST has nothing to do with printers. (c) is wrong: loading Windows happens after POST. (d) is wrong: POST checks all core hardware, not just USB."
      },
      {
        "module": 2,
        "q": "Which of these is a private IPv4 address?",
        "choices": [
          "8.8.8.8",
          "192.168.1.10",
          "200.100.50.25",
          "1.1.1.1"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 192.168.x.x is a private range for home and office networks. (a) is wrong: 8.8.8.8 is Google's public DNS. (c) is wrong: 200.100.50.25 is a public address. (d) is wrong: 1.1.1.1 is a public DNS address."
      },
      {
        "module": 2,
        "q": "What does DHCP do?",
        "choices": [
          "Turns names into addresses",
          "Hands out IP addresses, subnet mask, gateway, and DNS automatically",
          "Encrypts web traffic",
          "Shares files"
        ],
        "answer": 1,
        "explanation": "Correct: (b). DHCP automatically assigns network settings to devices. (a) is wrong: that is DNS. (c) is wrong: encryption is TLS/HTTPS. (d) is wrong: file sharing is SMB."
      },
      {
        "module": 2,
        "q": "What does DNS do?",
        "choices": [
          "Hands out IP addresses",
          "Turns website names into IP addresses",
          "Blocks viruses",
          "Connects to Wi-Fi"
        ],
        "answer": 1,
        "explanation": "Correct: (b). DNS resolves names to addresses. (a) is wrong: that is DHCP. (c) is wrong: blocking viruses is anti-malware. (d) is wrong: Wi-Fi connects at the wireless layer."
      },
      {
        "module": 2,
        "q": "A device has the address 169.254.20.5. What does this mean?",
        "choices": [
          "It has a static public address",
          "No DHCP server answered, so it gave itself an APIPA address",
          "It is connected to a VPN",
          "DNS is working"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 169.254.x.x is APIPA — the device got no DHCP answer. (a) is wrong: APIPA is automatic, not static or public. (c) is wrong: a VPN gives an address from the VPN server. (d) is wrong: DNS has nothing to do with this address."
      },
      {
        "module": 2,
        "q": "A firewall must allow secure web traffic through, but block everything else. Which port should it open?",
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
        "module": 2,
        "q": "Which port does DNS use?",
        "choices": [
          "80",
          "53",
          "443",
          "3389"
        ],
        "answer": 1,
        "explanation": "Correct: (b). DNS uses port 53. (a) is wrong: 80 is HTTP. (c) is wrong: 443 is HTTPS. (d) is wrong: 3389 is RDP."
      },
      {
        "module": 2,
        "q": "Which port is used for Remote Desktop (RDP)?",
        "choices": [
          "22",
          "443",
          "3389",
          "110"
        ],
        "answer": 2,
        "explanation": "Correct: (c). RDP uses port 3389. (a) is wrong: 22 is SSH. (b) is wrong: 443 is HTTPS. (d) is wrong: 110 is POP3."
      },
      {
        "module": 2,
        "q": "Which port does SSH use?",
        "choices": [
          "23",
          "22",
          "21",
          "25"
        ],
        "answer": 1,
        "explanation": "Correct: (b). SSH uses port 22. (a) is wrong: 23 is Telnet, the old unencrypted remote shell. (c) is wrong: 21 is FTP. (d) is wrong: 25 is SMTP."
      },
      {
        "module": 2,
        "q": "Which is the difference between TCP and UDP?",
        "choices": [
          "TCP is reliable and resends lost data; UDP is fast and does not check delivery",
          "TCP is faster; UDP is reliable",
          "TCP is for wireless only",
          "UDP is encrypted; TCP is not"
        ],
        "answer": 0,
        "explanation": "Correct: (a). TCP checks delivery and resends; UDP sends fast without checking. (b) is wrong: that is backwards. (c) is wrong: both work on wired and wireless. (d) is wrong: neither is encrypted by itself — encryption comes from TLS or similar."
      },
      {
        "module": 2,
        "q": "Which protocol sends email from a client to a server?",
        "choices": [
          "POP3",
          "IMAP",
          "SMTP",
          "FTP"
        ],
        "answer": 2,
        "explanation": "Correct: (c). SMTP sends mail. (a) is wrong: POP3 downloads mail to one device. (b) is wrong: IMAP syncs mail across devices. (d) is wrong: FTP transfers files."
      },
      {
        "module": 2,
        "q": "Which email protocol syncs mail across all devices?",
        "choices": [
          "SMTP",
          "POP3",
          "IMAP",
          "HTTP"
        ],
        "answer": 2,
        "explanation": "Correct: (c). IMAP keeps mail on the server and syncs it everywhere. (a) is wrong: SMTP sends mail. (b) is wrong: POP3 downloads and usually removes mail from the server. (d) is wrong: HTTP is the web protocol."
      },
      {
        "module": 2,
        "q": "Which Wi-Fi standard is Wi-Fi 6?",
        "choices": [
          "802.11n",
          "802.11ac",
          "802.11ax",
          "802.11g"
        ],
        "answer": 2,
        "explanation": "Correct: (c). 802.11ax is Wi-Fi 6. (a) is wrong: 802.11n is Wi-Fi 4. (b) is wrong: 802.11ac is Wi-Fi 5. (d) is wrong: 802.11g is an old 2.4 GHz standard."
      },
      {
        "module": 2,
        "q": "A neighbour's Wi-Fi is slow on 2.4 GHz channel 3, surrounded by other networks. Which channel should they move to?",
        "choices": [
          "Channel 1",
          "Channel 3",
          "Channel 5",
          "Channel 8"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Only channels 1, 6, and 11 do not overlap on 2.4 GHz, so channel 1 is a safe move. (b) is wrong: channel 3 overlaps its neighbours. (c) is wrong: channel 5 also overlaps. (d) is wrong: channel 8 overlaps too."
      },
      {
        "module": 2,
        "q": "Which band reaches further through walls: 2.4 GHz or 5 GHz?",
        "choices": [
          "5 GHz",
          "2.4 GHz",
          "They are identical",
          "6 GHz"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 2.4 GHz travels further and through walls better; 5 GHz is faster but shorter range. (a) is wrong: 5 GHz is faster, not further. (c) is wrong: the bands behave differently. (d) is wrong: 6 GHz is even shorter range than 5 GHz."
      },
      {
        "module": 2,
        "q": "A café offers free Wi-Fi with no password. What should a technician advise a user who needs to check their bank account?",
        "choices": [
          "Use it — it is free and safe",
          "Do not use it for sensitive work; use mobile data or a VPN instead",
          "Turn off the phone's firewall first",
          "Share the café's password with everyone"
        ],
        "answer": 1,
        "explanation": "Correct: (b). An open network lets anyone see the traffic; sensitive work needs mobile data or a VPN. (a) is wrong: free does not mean safe. (c) is wrong: turning the firewall off makes it worse. (d) is wrong: there is no password to share on an open network."
      },
      {
        "module": 2,
        "q": "What is an SSID?",
        "choices": [
          "A password",
          "The name of a Wi-Fi network",
          "A type of cable",
          "A router brand"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The SSID is the network name devices see when scanning. (a) is wrong: the password is separate from the name. (c) is wrong: cables are Ethernet or fibre. (d) is wrong: an SSID is a setting, not a brand."
      },
      {
        "module": 2,
        "q": "A home has a modem, a switch, and an access point, but no router. What will not work?",
        "choices": [
          "Sharing one internet connection between devices, with DHCP and a firewall",
          "Plugging in wired computers",
          "Connecting to Wi-Fi",
          "Printing"
        ],
        "answer": 0,
        "explanation": "Correct: (a). The router shares the connection, runs DHCP and NAT, and firewalls the edge — without it, devices cannot share the internet. (b) is wrong: the switch provides wired ports. (c) is wrong: the access point provides Wi-Fi. (d) is wrong: printing is the printer's job."
      },
      {
        "module": 2,
        "q": "What does NAT do?",
        "choices": [
          "Encrypts email",
          "Lets many private addresses share one public address",
          "Speeds up the CPU",
          "Blocks all incoming traffic"
        ],
        "answer": 1,
        "explanation": "Correct: (b). NAT translates private addresses to one public address. (a) is wrong: email encryption is TLS. (c) is wrong: NAT has nothing to do with the CPU. (d) is wrong: blocking traffic is the firewall's job; NAT translates addresses."
      },
      {
        "module": 2,
        "q": "What is a VLAN for?",
        "choices": [
          "Speeding up Wi-Fi",
          "Splitting one switch into separate virtual networks to keep traffic apart",
          "Charging phones",
          "Backing up data"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A VLAN separates traffic on one switch, for example keeping guests away from office computers. (a) is wrong: VLANs do not speed up Wi-Fi. (c) is wrong: charging is a power job. (d) is wrong: backups are a storage job."
      },
      {
        "module": 2,
        "q": "What is a VPN used for?",
        "choices": [
          "Encrypting traffic over the internet so a remote connection is private",
          "Speeding up downloads",
          "Printing remotely",
          "Charging a laptop"
        ],
        "answer": 0,
        "explanation": "Correct: (a). A VPN encrypts traffic so a remote worker connects safely. (b) is wrong: a VPN usually slows traffic slightly. (c) is wrong: remote printing is a printer feature. (d) is wrong: charging is a power job."
      },
      {
        "module": 2,
        "q": "Which cable category handles 10 gigabit Ethernet?",
        "choices": [
          "Cat3",
          "Cat5",
          "Cat6a",
          "Cat1"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Cat6a handles 10 gigabit; Cat6 handles it over short runs. (a) is wrong: Cat3 is old telephone cable. (b) is wrong: Cat5 is limited to 100 Mbps. (d) is wrong: Cat1 is not an Ethernet category."
      },
      {
        "module": 2,
        "q": "What is the difference between multimode and single-mode fibre?",
        "choices": [
          "Multimode is for long runs; single-mode is for short runs",
          "Multimode is for short runs inside a building; single-mode is for long runs between buildings",
          "Multimode is copper; single-mode is fibre",
          "There is no difference"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Multimode suits short runs; single-mode suits long distances. (a) is wrong: that is backwards. (c) is wrong: both are fibre, not copper. (d) is wrong: the difference is real and tested."
      },
      {
        "module": 2,
        "q": "What does MDM let a company do with its phones?",
        "choices": [
          "Charge them faster",
          "Manage them: push apps, enforce lock screens, and remotely wipe a lost phone",
          "Make them waterproof",
          "Double the battery life"
        ],
        "answer": 1,
        "explanation": "Correct: (b). MDM manages company devices and can wipe a lost one. (a) is wrong: charging is a hardware job. (c) is wrong: waterproofing is a physical property. (d) is wrong: MDM does not change battery life."
      },
      {
        "module": 2,
        "q": "What is BYOD?",
        "choices": [
          "Bring your own device: staff use their own phones for work",
          "Buy your own data: a mobile plan",
          "A type of Wi-Fi",
          "A backup method"
        ],
        "answer": 0,
        "explanation": "Correct: (a). BYOD means staff use personal devices for work, managed by MDM. (b) is wrong: that is a data plan, not BYOD. (c) is wrong: Wi-Fi standards are 802.11. (d) is wrong: backup methods are full, incremental, and differential."
      },
      {
        "module": 2,
        "q": "What is a hotspot?",
        "choices": [
          "A phone sharing its cellular connection over Wi-Fi",
          "A hot CPU",
          "A Wi-Fi password",
          "A type of router"
        ],
        "answer": 0,
        "explanation": "Correct: (a). A hotspot shares the phone's mobile data over Wi-Fi. (b) is wrong: a hot CPU is an overheating problem. (c) is wrong: the Wi-Fi password is separate. (d) is wrong: a hotspot can be a phone, not a router."
      },
      {
        "module": 2,
        "q": "What identifies a phone to its mobile carrier?",
        "choices": [
          "The Wi-Fi password",
          "The SIM (or eSIM)",
          "The Bluetooth name",
          "The screen lock PIN"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The SIM identifies the device and account to the carrier. (a) is wrong: the Wi-Fi password is for a local network. (c) is wrong: the Bluetooth name is for nearby devices. (d) is wrong: the PIN locks the phone, it does not identify it to the carrier."
      },
      {
        "module": 2,
        "q": "What is NFC used for?",
        "choices": [
          "Long-range Wi-Fi",
          "Very short-range wireless for tap-to-pay and quick pairing",
          "Wired networking",
          "Satellite TV"
        ],
        "answer": 1,
        "explanation": "Correct: (b). NFC works over a few centimetres for payments and pairing. (a) is wrong: long-range wireless is Wi-Fi or cellular. (c) is wrong: wired networking is Ethernet. (d) is wrong: satellite TV uses a dish."
      },
      {
        "module": 2,
        "q": "A user can reach a website by IP address but not by name. What is at fault?",
        "choices": [
          "The cable",
          "DNS",
          "The PSU",
          "The monitor"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Name resolution fails while the network path works, so DNS is at fault. (a) is wrong: a bad cable would stop IP access too. (c) is wrong: the PSU affects power, not names. (d) is wrong: the monitor affects the picture only."
      },
      {
        "module": 2,
        "q": "What is the first thing to change when setting up a new router?",
        "choices": [
          "The SSID",
          "The default admin password",
          "The Wi-Fi channel",
          "The firmware version"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The default admin password is publicly known and must be changed first. (a) is wrong: the SSID matters, but the admin password is the security priority. (c) is wrong: the channel is a performance tweak. (d) is wrong: updating firmware matters, but after the password is changed."
      },
      {
        "module": 2,
        "q": "Which of these is a valid IPv6 address format?",
        "choices": [
          "192.168.1.1",
          "2001:db8::1",
          "256.256.256.256",
          "10.0.0.999"
        ],
        "answer": 1,
        "explanation": "Correct: (b). IPv6 uses hexadecimal groups separated by colons. (a) is wrong: that is an IPv4 address. (c) is wrong: IPv4 numbers cannot exceed 255. (d) is wrong: 999 is not a valid IPv4 octet."
      },
      {
        "module": 3,
        "q": "A technician is called to a PC that crashes randomly. Before touching anything, what should they do first?",
        "choices": [
          "Replace the RAM",
          "Gather information: ask what happened, when it started, and what changed",
          "Reinstall Windows",
          "Document the fix"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Step 1 is identify the problem — gather information before acting. (a) is wrong: replacing parts comes after a theory is tested. (c) is wrong: reinstalling is a last resort. (d) is wrong: documenting is the last step, not the first."
      },
      {
        "module": 3,
        "q": "A technician has fixed a fault, verified the whole system works, and written up what was done. Which steps did they just complete?",
        "choices": [
          "Steps 1 and 2",
          "Steps 5 and 6 — verify and document",
          "Steps 3 and 4",
          "Steps 2 and 3"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Verifying full functionality is step 5 and documenting is step 6. (a) is wrong: steps 1 and 2 are identifying and the theory. (c) is wrong: steps 3 and 4 are testing and fixing. (d) is wrong: steps 2 and 3 are the theory and the test."
      },
      {
        "module": 3,
        "q": "What is step 5 of the methodology?",
        "choices": [
          "Identify the problem",
          "Verify full system functionality and implement preventive measures",
          "Document the findings",
          "Establish a theory"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Step 5 is verifying the whole system works and preventing a repeat. (a) is wrong: identifying is step 1. (c) is wrong: documenting is step 6. (d) is wrong: the theory is step 2."
      },
      {
        "module": 3,
        "q": "A PC will not turn on at all — no lights, no fans. What do you check FIRST?",
        "choices": [
          "The motherboard",
          "The wall socket, power cable, and PSU switch",
          "The RAM",
          "The hard drive"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Check the simplest causes first: socket, cable, and switch. (a) is wrong: the motherboard is a later suspect. (c) is wrong: RAM faults cause beeps or crashes, not total silence. (d) is wrong: a dead drive still lets the PC power on."
      },
      {
        "module": 3,
        "q": "A drive makes a grinding noise and S.M.A.R.T. reports errors. What is the priority?",
        "choices": [
          "Defragment the drive",
          "Back up the data immediately and replace the drive",
          "Reinstall the operating system",
          "Ignore it until it stops"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A grinding drive with S.M.A.R.T. errors is dying — save the data now. (a) is wrong: defragmenting a dying drive makes it worse. (c) is wrong: reinstalling does not fix failing hardware. (d) is wrong: it will not get better on its own."
      },
      {
        "module": 3,
        "q": "What does S.M.A.R.T. do?",
        "choices": [
          "Speeds up a drive",
          "Warns of a failing drive before it dies",
          "Encrypts files",
          "Formats the drive"
        ],
        "answer": 1,
        "explanation": "Correct: (b). S.M.A.R.T. reports drive health warnings; errors mean replace the drive. (a) is wrong: it does not affect speed. (c) is wrong: encryption is BitLocker or EFS. (d) is wrong: formatting is a separate task."
      },
      {
        "module": 3,
        "q": "Which tool checks whether an Ethernet cable is wired correctly end to end?",
        "choices": [
          "Multimeter",
          "Cable tester",
          "Loopback plug",
          "Toner probe"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A cable tester checks the wiring of a cable. (a) is wrong: a multimeter checks voltage and continuity. (c) is wrong: a loopback plug tests a network port. (d) is wrong: a toner probe traces a cable through walls."
      },
      {
        "module": 3,
        "q": "You must identify one cable among 40 in a bundle that runs through a wall. Which tool do you use?",
        "choices": [
          "A multimeter",
          "A toner probe",
          "A loopback plug",
          "A crimper"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A toner probe follows a cable's tone through walls and bundles. (a) is wrong: a multimeter checks voltage and continuity. (c) is wrong: a loopback plug tests a network port. (d) is wrong: a crimper attaches RJ45 plugs."
      },
      {
        "module": 3,
        "q": "Which tool tests whether a network port itself works?",
        "choices": [
          "Loopback plug",
          "Cable tester",
          "Wi-Fi analyzer",
          "Crimper"
        ],
        "answer": 0,
        "explanation": "Correct: (a). A loopback plug sends a port's own signal back to test it. (b) is wrong: a cable tester checks cables. (c) is wrong: a Wi-Fi analyzer shows nearby networks and channels. (d) is wrong: a crimper attaches RJ45 plugs."
      },
      {
        "module": 3,
        "q": "What is the FIRST command to run when a PC has no network?",
        "choices": [
          "ping 8.8.8.8",
          "ipconfig — check whether it has an address and whether it is APIPA",
          "nslookup",
          "tracert"
        ],
        "answer": 1,
        "explanation": "Correct: (b). ipconfig shows whether the PC has an address at all. (a) is wrong: pinging comes after confirming the address. (c) is wrong: nslookup tests DNS, which comes later. (d) is wrong: tracert traces the path, which comes after basic checks."
      },
      {
        "module": 3,
        "q": "A PC opens a site by its IP address, but the name fails in the browser. What do you check next?",
        "choices": [
          "The power cable",
          "The DNS settings — try nslookup or another DNS server",
          "The monitor",
          "The printer queue"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The path works, so name resolution is the fault — test DNS next. (a) is wrong: the power cable affects power, not names. (c) is wrong: the monitor affects the picture. (d) is wrong: the printer queue is unrelated."
      },
      {
        "module": 3,
        "q": "Packets reach the local gateway but die somewhere on the way to a server. Which command shows each hop so you can find where the path breaks?",
        "choices": [
          "ipconfig",
          "tracert",
          "nslookup",
          "netstat"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Tracert lists every hop to the destination. (a) is wrong: ipconfig shows the local address. (c) is wrong: nslookup queries DNS. (d) is wrong: netstat shows open ports and connections."
      },
      {
        "module": 3,
        "q": "What does nslookup do?",
        "choices": [
          "Tests connectivity",
          "Asks DNS what address a name resolves to",
          "Lists open ports",
          "Shows the subnet mask"
        ],
        "answer": 1,
        "explanation": "Correct: (b). nslookup queries DNS for a name. (a) is wrong: testing connectivity is ping. (c) is wrong: open ports are shown by netstat. (d) is wrong: the subnet mask is shown by ipconfig."
      },
      {
        "module": 3,
        "q": "Two computers keep dropping off the network, one at a time. What is the likely cause?",
        "choices": [
          "A virus",
          "An IP conflict — two devices with the same address",
          "A broken monitor",
          "A full hard drive"
        ],
        "answer": 1,
        "explanation": "Correct: (b). An IP conflict causes devices to drop one at a time. (a) is wrong: a virus would not cause this pattern. (c) is wrong: a monitor affects the display only. (d) is wrong: a full drive slows a PC, it does not drop it off the network."
      },
      {
        "module": 3,
        "q": "A laptop shuts down after 20 minutes of gaming, then works again when cool. What is the cause?",
        "choices": [
          "A virus",
          "Overheating",
          "A bad password",
          "A full inbox"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Overheating causes shutdowns that clear when the machine cools. (a) is wrong: a virus does not follow a heat pattern. (c) is wrong: a password affects logon, not shutdowns. (d) is wrong: an inbox has nothing to do with hardware."
      },
      {
        "module": 3,
        "q": "A monitor shows no picture. What do you check FIRST?",
        "choices": [
          "The graphics driver",
          "The cable, the monitor's input source, and whether the cable is in the graphics card port",
          "The RAM",
          "The printer"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Check the physical connection and input first — the simplest causes. (a) is wrong: drivers come after the physical checks. (c) is wrong: RAM faults cause beeps or crashes. (d) is wrong: the printer is unrelated."
      },
      {
        "module": 3,
        "q": "A printer prints nothing and the queue shows a stuck job. What do you do first?",
        "choices": [
          "Reinstall the driver",
          "Check power, cable, and paper, then clear the stuck job and restart the spooler",
          "Buy a new printer",
          "Replace the toner"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Check the basics, then clear the stuck job and restart the print spooler. (a) is wrong: drivers come later. (c) is wrong: buying a new printer is a last resort. (d) is wrong: toner affects print quality, not a stuck queue."
      },
      {
        "module": 3,
        "q": "Garbled output from a printer usually means what?",
        "choices": [
          "No paper",
          "The wrong driver",
          "A dead PSU",
          "A full hard drive"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Garbled output is the classic symptom of a wrong or corrupt driver. (a) is wrong: no paper stops printing entirely. (c) is wrong: a dead PSU means no power. (d) is wrong: a full drive slows the PC, it does not garble print output."
      },
      {
        "module": 3,
        "q": "A phone will not charge. What do you check FIRST?",
        "choices": [
          "The battery",
          "Clean the port, then try another cable",
          "The SIM card",
          "The Wi-Fi password"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A dirty port or a bad cable is the most common cause. (a) is wrong: the battery comes later, after the port and cable. (c) is wrong: the SIM affects mobile service, not charging. (d) is wrong: Wi-Fi has nothing to do with charging."
      },
      {
        "module": 3,
        "q": "An app crashes every time it opens. What is the correct order of fixes?",
        "choices": [
          "Reinstall, restart the app, update it",
          "Restart the app, clear its cache, update it, then reinstall it",
          "Buy a new phone",
          "Ignore it"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Start simple — restart, clear cache, update — and reinstall last. (a) is wrong: reinstalling first skips the simpler fixes. (c) is wrong: a new phone is a last resort. (d) is wrong: ignoring a crashing app does not fix it."
      },
      {
        "module": 3,
        "q": "Office Wi-Fi works fine at night but drops every lunchtime. What is the most likely cause?",
        "choices": [
          "The printer is offline",
          "Interference — for example a microwave oven on 2.4 GHz — or a crowded channel",
          "The CPU is overheating",
          "The battery is old"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Microwaves and crowded channels cause intermittent drops at busy times. (a) is wrong: the printer does not affect Wi-Fi. (c) is wrong: an overheating CPU slows the PC, not the Wi-Fi. (d) is wrong: an old battery affects runtime, not the network."
      },
      {
        "module": 3,
        "q": "A user can reach the local network but not the internet. What is most likely wrong?",
        "choices": [
          "The monitor",
          "The gateway or DNS server, or the router is down",
          "The keyboard",
          "The printer"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Local access works, so the fault is the gateway, DNS, or router. (a) is wrong: the monitor affects the picture. (c) is wrong: the keyboard affects typing. (d) is wrong: the printer is unrelated."
      },
      {
        "module": 3,
        "q": "What should you ask first when a fault starts suddenly?",
        "choices": [
          "What changed?",
          "What is the weather?",
          "What is the user's password?",
          "What brand is the PC?"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 'What changed?' points at the cause — a move, an update, or a new device. (b) is wrong: the weather rarely matters. (c) is wrong: never ask for a user's password. (d) is wrong: the brand does not diagnose the fault."
      },
      {
        "module": 3,
        "q": "A technician fixed the fault but did not test anything else or write anything down. Which steps did they skip?",
        "choices": [
          "Steps 1 and 2",
          "Steps 5 and 6 — verify full functionality and document",
          "Steps 3 and 4",
          "No steps — the fix is enough"
        ],
        "answer": 1,
        "explanation": "Correct: (b). They skipped step 5 (verify and prevent) and step 6 (document). (a) is wrong: identifying and the theory came first and were done. (c) is wrong: testing and fixing were done. (d) is wrong: a fix without verification and documentation is incomplete."
      },
      {
        "module": 3,
        "q": "What does a Wi-Fi analyzer show?",
        "choices": [
          "The password",
          "Nearby networks, their channels, and signal strength",
          "The router's admin page",
          "The user's files"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A Wi-Fi analyzer maps nearby networks and channel crowding. (a) is wrong: it does not reveal passwords. (c) is wrong: the admin page is in a browser. (d) is wrong: it shows networks, not files."
      },
      {
        "module": 3,
        "q": "A PC is slow only when the user opens a specific program. What is the most likely cause?",
        "choices": [
          "A bad CPU",
          "That program — a runaway process, a bad update, or a corrupt install",
          "The monitor",
          "The power cable"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A fault tied to one program points at that program. (a) is wrong: a bad CPU would affect everything. (c) is wrong: the monitor affects the picture. (d) is wrong: the power cable affects power, not one program."
      },
      {
        "module": 3,
        "q": "What is the correct order for network troubleshooting commands?",
        "choices": [
          "nslookup, ping, ipconfig",
          "ipconfig, ping gateway, ping by IP, ping by name, tracert, nslookup",
          "tracert, ipconfig, ping",
          "ping, format, reinstall"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Work from the local address outward: ipconfig, then ping, then tracert and nslookup. (a) is wrong: nslookup comes later, after basic connectivity. (c) is wrong: tracert comes after ipconfig and ping. (d) is wrong: formatting and reinstalling are not network diagnostics."
      },
      {
        "module": 3,
        "q": "A laptop screen is very dim but you can faintly see the picture. What is most likely wrong?",
        "choices": [
          "The graphics driver",
          "The backlight or inverter",
          "The RAM",
          "The hard drive"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A faint picture means the panel works but the backlight does not. (a) is wrong: a driver problem would distort or remove the picture, not just dim it. (c) is wrong: RAM faults cause beeps or crashes. (d) is wrong: a drive fault stops booting, not brightness."
      },
      {
        "module": 3,
        "q": "What is the best first step when a user reports a problem you have never seen?",
        "choices": [
          "Replace the PC",
          "Gather information: ask what happened, when it started, and what changed",
          "Reinstall Windows",
          "Ignore it and hope it goes away"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Step 1 of the method is identify the problem — gather information first. (a) is wrong: replacing the PC skips diagnosis. (c) is wrong: reinstalling is a last resort. (d) is wrong: ignoring a problem never fixes it."
      },
      {
        "module": 3,
        "q": "A network cable is suspected of being faulty. Which tool confirms it?",
        "choices": [
          "A multimeter",
          "A cable tester",
          "A loopback plug",
          "A Wi-Fi analyzer"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A cable tester checks the cable's wiring end to end. (a) is wrong: a multimeter checks voltage and continuity, not Ethernet wiring. (c) is wrong: a loopback plug tests a port. (d) is wrong: a Wi-Fi analyzer checks wireless networks, not cables."
      }
    ]
  },
  "aplus-core-2": {
    "title": "A+ Core 2 Practice Exam (220-1202)",
    "minutes": 90,
    "passPercent": 70,
    "coverage": "90 original questions in the real exam's style, spanning the Core 2 domains: operating systems, security, software troubleshooting, and operational procedures. Practice benchmark only: the real Core 2 exam (220-1202) is up to 90 questions in 90 minutes, including performance-based questions, and passes at 700 on a 100–900 scaled scale — NOT a percentage — so the 70% used here is a practice benchmark only, never the real pass mark.",
    "questions": [
      {
        "module": 4,
        "q": "Which Windows edition adds BitLocker, Remote Desktop hosting, and domain join over Home?",
        "choices": [
          "Home",
          "Pro",
          "S mode",
          "Starter"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Pro adds BitLocker, RDP hosting, and domain join. (a) is wrong: Home is the base edition. (c) is wrong: S mode is a locked-down configuration, not an edition with those features. (d) is wrong: Starter is an old discontinued edition."
      },
      {
        "module": 4,
        "q": "What is the difference between a clean install and an in-place upgrade?",
        "choices": [
          "A clean install wipes the drive; an in-place upgrade keeps files and apps",
          "A clean install keeps files; an upgrade wipes them",
          "There is no difference",
          "A clean install only works on Macs"
        ],
        "answer": 0,
        "explanation": "Correct: (a). A clean install starts fresh on a wiped drive; an in-place upgrade keeps files and apps. (b) is wrong: that is backwards. (c) is wrong: the difference is exactly what is kept. (d) is wrong: clean installs are a Windows concept too."
      },
      {
        "module": 4,
        "q": "What should you always do before installing or upgrading Windows?",
        "choices": [
          "Delete all files",
          "Back up first",
          "Remove the RAM",
          "Turn off the monitor"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Always back up before an install — a failed install can lose data. (a) is wrong: deleting files is what a clean install does, not a preparation step. (c) is wrong: RAM is unrelated to an install. (d) is wrong: the monitor is irrelevant."
      },
      {
        "module": 4,
        "q": "Windows boots to a black screen after a driver update. Which startup option loads only the essential drivers so you can fix it?",
        "choices": [
          "Normal startup",
          "Safe Mode",
          "Hibernate",
          "Sleep"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Safe Mode loads only essential drivers, so a bad driver can be rolled back. (a) is wrong: normal startup loads the bad driver. (c) is wrong: hibernate saves the session to disk. (d) is wrong: sleep pauses the session in memory."
      },
      {
        "module": 4,
        "q": "A 5 GB video must go on a USB stick for a client. Why will FAT32 fail?",
        "choices": [
          "FAT32 is read-only",
          "FAT32 cannot hold a single file larger than 4 GB",
          "FAT32 only works on Macs",
          "FAT32 needs a password"
        ],
        "answer": 1,
        "explanation": "Correct: (b). FAT32 has a 4 GB per-file limit. (a) is wrong: FAT32 is writable. (c) is wrong: FAT32 works on Windows, macOS, and more. (d) is wrong: FAT32 has no password feature."
      },
      {
        "module": 4,
        "q": "Which file system should you use for a 6 GB video on a USB stick shared with a Mac?",
        "choices": [
          "FAT32",
          "NTFS",
          "exFAT",
          "APFS"
        ],
        "answer": 2,
        "explanation": "Correct: (c). exFAT handles large files and works on Windows and macOS. (a) is wrong: FAT32 cannot hold a 6 GB file. (b) is wrong: NTFS is read-only on macOS without extra software. (d) is wrong: APFS is macOS-only."
      },
      {
        "module": 4,
        "q": "You are installing Windows on a 4 TB drive in a UEFI system. Which partition style must you choose?",
        "choices": [
          "MBR",
          "GPT",
          "FAT32",
          "NTFS"
        ],
        "answer": 1,
        "explanation": "Correct: (b). GPT supports disks over 2 TB and UEFI boot. (a) is wrong: MBR is limited to 2 TB. (c) is wrong: FAT32 is a file system, not a partition style. (d) is wrong: NTFS is a file system, not a partition style."
      },
      {
        "module": 4,
        "q": "A new drive shows in the BIOS but not in File Explorer. Where do you fix it?",
        "choices": [
          "Task Manager",
          "Disk Management",
          "Event Viewer",
          "Control Panel > Mouse"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Disk Management shows whether the disk needs initialising, a partition, or a drive letter. (a) is wrong: Task Manager shows processes. (c) is wrong: Event Viewer shows logs. (d) is wrong: mouse settings are unrelated."
      },
      {
        "module": 4,
        "q": "System files are suspected corrupt after a power cut. Which command checks and repairs protected Windows system files?",
        "choices": [
          "chkdsk",
          "sfc /scannow",
          "ipconfig",
          "diskpart"
        ],
        "answer": 1,
        "explanation": "Correct: (b). sfc /scannow scans protected system files and repairs corrupt ones. (a) is wrong: chkdsk checks the disk, not the system files. (c) is wrong: ipconfig shows network settings. (d) is wrong: diskpart manages disks and partitions."
      },
      {
        "module": 4,
        "q": "What does chkdsk do?",
        "choices": [
          "Repairs Windows system files",
          "Checks a disk for file-system errors and bad sectors",
          "Shows running processes",
          "Updates drivers"
        ],
        "answer": 1,
        "explanation": "Correct: (b). chkdsk checks the disk for errors and bad sectors. (a) is wrong: that is sfc /scannow. (c) is wrong: processes are shown by Task Manager. (d) is wrong: drivers are updated in Device Manager."
      },
      {
        "module": 4,
        "q": "A PC is slow and the disk light is solid. Which tool shows which process is using the disk?",
        "choices": [
          "Disk Management",
          "Task Manager",
          "Device Manager",
          "Disk Cleanup"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Task Manager shows processes and their CPU, memory, disk, and network use. (a) is wrong: Disk Management handles partitions. (c) is wrong: Device Manager handles drivers. (d) is wrong: Disk Cleanup frees disk space."
      },
      {
        "module": 4,
        "q": "Where do you find the logs of application crashes and failed logons?",
        "choices": [
          "Task Manager",
          "Event Viewer",
          "Disk Management",
          "File Explorer"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Event Viewer holds the Windows logs. (a) is wrong: Task Manager shows live processes. (c) is wrong: Disk Management handles partitions. (d) is wrong: File Explorer browses files."
      },
      {
        "module": 4,
        "q": "What is System Restore for?",
        "choices": [
          "Backing up personal files",
          "Rolling system files and settings back to a restore point without touching personal files",
          "Reinstalling Windows",
          "Updating drivers"
        ],
        "answer": 1,
        "explanation": "Correct: (b). System Restore rolls back system files and settings, not personal files. (a) is wrong: personal files are backed up by File History or a backup. (c) is wrong: reinstalling Windows is a reset or clean install. (d) is wrong: drivers are updated in Device Manager."
      },
      {
        "module": 4,
        "q": "In Linux, which command lists files in the current directory?",
        "choices": [
          "pwd",
          "ls",
          "cd",
          "rm"
        ],
        "answer": 1,
        "explanation": "Correct: (b). ls lists files. (a) is wrong: pwd shows the current directory path. (c) is wrong: cd changes directory. (d) is wrong: rm deletes files."
      },
      {
        "module": 4,
        "q": "On Linux, a script will not run because it lacks execute permission. Which command fixes it?",
        "choices": [
          "ls",
          "chmod",
          "grep",
          "pwd"
        ],
        "answer": 1,
        "explanation": "Correct: (b). chmod changes read, write, and execute permissions. (a) is wrong: ls lists files. (c) is wrong: grep searches text. (d) is wrong: pwd shows the current directory."
      },
      {
        "module": 4,
        "q": "In Linux, what does sudo do?",
        "choices": [
          "Lists files",
          "Runs a command with administrator (root) privileges",
          "Deletes a file",
          "Shows the current directory"
        ],
        "answer": 1,
        "explanation": "Correct: (b). sudo runs a command as the administrator. (a) is wrong: listing files is ls. (c) is wrong: deleting is rm. (d) is wrong: showing the directory is pwd."
      },
      {
        "module": 4,
        "q": "In Linux, which command searches text inside files?",
        "choices": [
          "grep",
          "ls",
          "cp",
          "mv"
        ],
        "answer": 0,
        "explanation": "Correct: (a). grep searches for text patterns in files. (b) is wrong: ls lists files. (c) is wrong: cp copies files. (d) is wrong: mv moves or renames files."
      },
      {
        "module": 4,
        "q": "What is the macOS backup feature called?",
        "choices": [
          "File History",
          "Time Machine",
          "System Restore",
          "Backup and Restore"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Time Machine is macOS's backup feature. (a) is wrong: File History is Windows. (c) is wrong: System Restore is Windows. (d) is wrong: Backup and Restore is an older Windows feature."
      },
      {
        "module": 4,
        "q": "What is the macOS file system?",
        "choices": [
          "NTFS",
          "APFS",
          "FAT32",
          "ext4"
        ],
        "answer": 1,
        "explanation": "Correct: (b). APFS is the modern macOS file system. (a) is wrong: NTFS is Windows. (c) is wrong: FAT32 is a cross-platform format for flash drives. (d) is wrong: ext4 is a Linux file system."
      },
      {
        "module": 4,
        "q": "Which Windows tool manages hardware drivers?",
        "choices": [
          "Task Manager",
          "Device Manager",
          "Disk Management",
          "Event Viewer"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Device Manager shows hardware and lets you update or roll back drivers. (a) is wrong: Task Manager shows processes. (c) is wrong: Disk Management handles partitions. (d) is wrong: Event Viewer shows logs."
      },
      {
        "module": 4,
        "q": "Windows will not boot after a driver update, but Safe Mode works. What do you do?",
        "choices": [
          "Reinstall Windows",
          "Roll back the driver in Device Manager",
          "Replace the hard drive",
          "Buy a new PC"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The new driver is the suspect — roll it back from Safe Mode. (a) is wrong: reinstalling is a last resort. (c) is wrong: the drive did not change. (d) is wrong: a new PC is unnecessary."
      },
      {
        "module": 4,
        "q": "What is the Windows Registry?",
        "choices": [
          "A list of installed printers",
          "A database of Windows settings and configuration",
          "A backup folder",
          "A type of file system"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The Registry is the database holding Windows and app settings. (a) is wrong: printers are managed in Settings or Control Panel. (c) is wrong: a backup folder holds copies of files. (d) is wrong: file systems are NTFS, FAT32, and exFAT."
      },
      {
        "module": 4,
        "q": "Which command shows the IP address on Windows?",
        "choices": [
          "ping",
          "ipconfig",
          "nslookup",
          "netstat"
        ],
        "answer": 1,
        "explanation": "Correct: (b). ipconfig shows the address, subnet mask, gateway, and DNS. (a) is wrong: ping tests connectivity. (c) is wrong: nslookup queries DNS. (d) is wrong: netstat shows open ports and connections."
      },
      {
        "module": 4,
        "q": "What is a dynamic disk used for?",
        "choices": [
          "Speeding up the CPU",
          "Spanning volumes across disks and other advanced volume features",
          "Encrypting files",
          "Backing up to the cloud"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Dynamic disks support spanned, striped, and mirrored volumes. (a) is wrong: the CPU is unrelated. (c) is wrong: encryption is BitLocker or EFS. (d) is wrong: cloud backup is a separate service."
      },
      {
        "module": 4,
        "q": "In Linux, what do the permissions rwxr-xr-x mean?",
        "choices": [
          "Owner can do anything; group and others can read and execute but not write",
          "Everyone can do everything",
          "Nobody can read the file",
          "Only the owner can read it"
        ],
        "answer": 0,
        "explanation": "Correct: (a). rwx for owner, r-x for group, r-x for others. (b) is wrong: that would be rwxrwxrwx. (c) is wrong: read is allowed for everyone here. (d) is wrong: group and others can read and execute."
      },
      {
        "module": 4,
        "q": "Which is a Linux package installer on Debian-based systems?",
        "choices": [
          "apt",
          "msiexec",
          "brew",
          "choco"
        ],
        "answer": 0,
        "explanation": "Correct: (a). apt installs software on Debian-based Linux. (b) is wrong: msiexec is Windows. (c) is wrong: brew is macOS. (d) is wrong: choco (Chocolatey) is Windows."
      },
      {
        "module": 4,
        "q": "What does the Windows Update troubleshooter do?",
        "choices": [
          "Installs new hardware",
          "Diagnoses and fixes common update failures",
          "Deletes the operating system",
          "Formats the drive"
        ],
        "answer": 1,
        "explanation": "Correct: (b). It checks for common causes of update failure and fixes them. (a) is wrong: hardware installs through Device Manager. (c) is wrong: it never deletes the OS. (d) is wrong: formatting is a disk task."
      },
      {
        "module": 4,
        "q": "A user cannot save a file in a shared Linux folder with permissions rwxr-xr-x, and they are not the owner or in the group. Why?",
        "choices": [
          "The disk is full",
          "Others have read and execute only — no write permission",
          "The file is too big",
          "The user needs a new password"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The 'others' permissions are r-x, so this user cannot write. (a) is wrong: a full disk would affect everyone. (c) is wrong: file size is not a permission issue. (d) is wrong: the password affects logon, not folder permissions."
      },
      {
        "module": 4,
        "q": "Which macOS tool manages disks?",
        "choices": [
          "Disk Utility",
          "Disk Management",
          "Finder",
          "Terminal"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Disk Utility is the macOS disk tool. (b) is wrong: Disk Management is Windows. (c) is wrong: Finder browses files. (d) is wrong: Terminal is the macOS command line."
      },
      {
        "module": 4,
        "q": "What is the difference between Control Panel and Settings in Windows?",
        "choices": [
          "Control Panel is the classic settings area; Settings is the modern app — both still exist",
          "Control Panel is for Macs",
          "Settings is for drivers only",
          "There is no difference at all"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Windows has both: the classic Control Panel and the modern Settings app. (b) is wrong: Control Panel is Windows. (c) is wrong: Settings covers far more than drivers. (d) is wrong: they are different interfaces with overlapping features."
      },
      {
        "module": 5,
        "q": "A user's files are encrypted and a message demands payment in cryptocurrency. What is the correct response?",
        "choices": [
          "Pay immediately",
          "Disconnect the machine, do not pay, and restore from a clean backup",
          "Delete the message and carry on",
          "Turn the PC off and throw it away"
        ],
        "answer": 1,
        "explanation": "Correct: (b). This is ransomware: disconnect it, do not pay, restore from backup. (a) is wrong: payment does not guarantee the files back. (c) is wrong: deleting the message does not decrypt the files. (d) is wrong: the PC can be recovered with a clean install."
      },
      {
        "module": 5,
        "q": "What is the difference between a virus and a worm?",
        "choices": [
          "A virus attaches to a file and spreads when it runs; a worm spreads by itself across a network",
          "A worm needs a file; a virus does not",
          "There is no difference",
          "A virus is hardware"
        ],
        "answer": 0,
        "explanation": "Correct: (a). A virus needs a host file; a worm self-propagates. (b) is wrong: that is backwards. (c) is wrong: the difference is tested. (d) is wrong: both are software."
      },
      {
        "module": 5,
        "q": "What is a Trojan?",
        "choices": [
          "Malware that spreads by itself",
          "Malware that pretends to be useful software and opens a back door once installed",
          "A type of firewall",
          "A backup program"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A Trojan disguises itself as legitimate software. (a) is wrong: self-spreading is a worm. (c) is wrong: a firewall blocks traffic. (d) is wrong: a backup program copies files."
      },
      {
        "module": 5,
        "q": "What is a rootkit?",
        "choices": [
          "A virus that deletes files",
          "Malware that hides deep in the system so security software cannot see it",
          "A type of password",
          "A network cable"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A rootkit hides at a low level to avoid detection. (a) is wrong: deleting files is not what defines a rootkit. (c) is wrong: a password is an authentication secret. (d) is wrong: a network cable is hardware."
      },
      {
        "module": 5,
        "q": "What does spyware do?",
        "choices": [
          "Encrypts files",
          "Secretly watches the user and steals data",
          "Speeds up the PC",
          "Blocks ads"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Spyware monitors activity and steals information. (a) is wrong: encrypting files is ransomware. (c) is wrong: spyware slows a PC. (d) is wrong: ad blockers block ads."
      },
      {
        "module": 5,
        "q": "What is a keylogger?",
        "choices": [
          "A keyboard cleaner",
          "Malware or hardware that records keystrokes to steal passwords",
          "A password manager",
          "A type of firewall"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A keylogger records what is typed, including passwords. (a) is wrong: cleaning is physical maintenance. (c) is wrong: a password manager stores passwords securely. (d) is wrong: a firewall blocks network traffic."
      },
      {
        "module": 5,
        "q": "What is the FIRST step of malware removal?",
        "choices": [
          "Disable System Restore",
          "Identify the symptoms",
          "Run an anti-malware scan",
          "Educate the user"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Step 1 is identify the symptoms. (a) is wrong: disabling System Restore is step 3. (c) is wrong: scanning comes at the remediation step. (d) is wrong: educating the user is the last step."
      },
      {
        "module": 5,
        "q": "Why is System Restore disabled during malware removal?",
        "choices": [
          "To save disk space",
          "So malware cannot hide in restore points",
          "To speed up the PC",
          "To delete user files"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Malware can hide in restore points and return after cleaning. (a) is wrong: disk space is not the reason. (c) is wrong: speed is not the reason. (d) is wrong: System Restore does not hold user files."
      },
      {
        "module": 5,
        "q": "If malware cannot be removed, what is the safe answer?",
        "choices": [
          "Pay the ransom",
          "A clean install from known-good media",
          "Ignore it",
          "Turn off the PC forever"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A clean install from trusted media guarantees the malware is gone. (a) is wrong: paying does not guarantee recovery. (c) is wrong: ignoring malware lets it spread and steal. (d) is wrong: the PC can be recovered with a clean install."
      },
      {
        "module": 5,
        "q": "What is phishing?",
        "choices": [
          "A fake email or message that tricks the user into clicking a link or giving up credentials",
          "A type of virus",
          "A network cable fault",
          "A backup method"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Phishing uses deception to steal credentials or install malware. (b) is wrong: phishing is a social-engineering attack, not a virus. (c) is wrong: cable faults are physical. (d) is wrong: backup methods are full, incremental, and differential."
      },
      {
        "module": 5,
        "q": "What is whaling?",
        "choices": [
          "Phishing aimed at a senior executive",
          "Phishing by phone",
          "A type of malware",
          "A firewall rule"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Whaling targets high-value individuals such as executives. (b) is wrong: phishing by voice is vishing. (c) is wrong: whaling is a social-engineering attack. (d) is wrong: a firewall rule blocks traffic."
      },
      {
        "module": 5,
        "q": "What is vishing?",
        "choices": [
          "Phishing by email",
          "Phishing by voice call",
          "A virus",
          "A type of encryption"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Vishing is voice phishing by phone call. (a) is wrong: email phishing is plain phishing. (c) is wrong: a virus is malware. (d) is wrong: encryption protects data."
      },
      {
        "module": 5,
        "q": "A stranger follows an employee through a badge-controlled door without badging in. What is this attack called?",
        "choices": [
          "Phishing",
          "Tailgating",
          "Vishing",
          "Dumpster diving"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Tailgating is following an authorised person through a secure door. (a) is wrong: phishing is a fake email or message. (c) is wrong: vishing is phishing by voice call. (d) is wrong: dumpster diving searches rubbish for documents."
      },
      {
        "module": 5,
        "q": "What is shoulder surfing?",
        "choices": [
          "Watching someone type a password or PIN over their shoulder",
          "A type of virus",
          "A network attack",
          "A backup method"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Shoulder surfing steals credentials by watching. (b) is wrong: it is a physical attack, not malware. (c) is wrong: it targets people, not networks. (d) is wrong: backup methods are full, incremental, and differential."
      },
      {
        "module": 5,
        "q": "What is pretexting?",
        "choices": [
          "Inventing a false story to trick someone into giving up information",
          "A type of firewall",
          "Encrypting a drive",
          "A backup schedule"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Pretexting is a made-up scenario used to extract information. (b) is wrong: a firewall blocks traffic. (c) is wrong: encrypting is BitLocker or EFS. (d) is wrong: a backup schedule sets when backups run."
      },
      {
        "module": 5,
        "q": "What are the three authentication factors?",
        "choices": [
          "Password, PIN, and fingerprint",
          "Something you know, something you have, something you are",
          "Username, email, and phone",
          "Face, voice, and height"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Know, have, and are are the three factors. (a) is wrong: a PIN is also 'something you know', so that lists only two factors. (c) is wrong: those are identifiers, not factors. (d) is wrong: face and voice are both biometrics — one factor."
      },
      {
        "module": 5,
        "q": "What is MFA?",
        "choices": [
          "A password manager",
          "Multi-factor authentication: two or more factors to prove identity",
          "A type of malware",
          "A firewall setting"
        ],
        "answer": 1,
        "explanation": "Correct: (b). MFA combines two or more factors, such as a password plus a phone code. (a) is wrong: a password manager stores passwords. (c) is wrong: malware harms systems. (d) is wrong: a firewall blocks traffic."
      },
      {
        "module": 5,
        "q": "What is the principle of least privilege?",
        "choices": [
          "Give everyone admin rights",
          "Give each user only the access they need for their job — no more",
          "Give nobody any access",
          "Change passwords monthly"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Least privilege limits access to what the job requires. (a) is wrong: admin rights for everyone is the opposite. (c) is wrong: users need the access their job requires. (d) is wrong: password changes are a separate policy."
      },
      {
        "module": 5,
        "q": "A laptop holding customer data is stolen from a car. Which Windows feature keeps the data unreadable?",
        "choices": [
          "Windows Firewall",
          "BitLocker",
          "System Restore",
          "File History"
        ],
        "answer": 1,
        "explanation": "Correct: (b). BitLocker encrypts the whole drive, so a stolen laptop's data stays unreadable. (a) is wrong: the firewall blocks network traffic. (c) is wrong: System Restore rolls back settings. (d) is wrong: File History backs up personal files."
      },
      {
        "module": 5,
        "q": "A router's WPS button lets devices connect with a short PIN instead of the Wi-Fi password. Why should WPS be turned off?",
        "choices": [
          "It slows down Wi-Fi",
          "It has a known weakness attackers can exploit",
          "It uses too much power",
          "It blocks guests"
        ],
        "answer": 1,
        "explanation": "Correct: (b). WPS has a known weakness; turn it off and use WPA3. (a) is wrong: WPS does not slow Wi-Fi. (c) is wrong: power is not the issue. (d) is wrong: guests use the guest network."
      },
      {
        "module": 5,
        "q": "What is the best defence against a stolen password?",
        "choices": [
          "A longer password",
          "Multi-factor authentication",
          "Changing it monthly",
          "Writing it down"
        ],
        "answer": 1,
        "explanation": "Correct: (b). MFA means a stolen password alone is useless. (a) is wrong: a long password still works if stolen. (c) is wrong: frequent changes do not help once stolen. (d) is wrong: writing a password down is a security failure."
      },
      {
        "module": 5,
        "q": "A company is disposing of drives that held customer records. Why is formatting alone not enough?",
        "choices": [
          "Formatting is too slow",
          "Formatting only removes the file addresses; recovery software can bring the data back",
          "Formatting damages the drive",
          "Formatting only works on SSDs"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Formatted data stays on the disk until overwritten — use a wipe tool or physical destruction. (a) is wrong: speed is not the issue. (c) is wrong: formatting does not damage the drive. (d) is wrong: formatting works on HDDs and SSDs."
      },
      {
        "module": 5,
        "q": "A user finds a USB stick in the car park labelled 'Salary list'. What should they do?",
        "choices": [
          "Plug it in to see what is on it",
          "Hand it to IT or security without plugging it in",
          "Throw it in the bin",
          "Take it home"
        ],
        "answer": 1,
        "explanation": "Correct: (b). An unknown drive may carry malware (baiting) — let IT check it safely. (a) is wrong: plugging it in risks infection. (c) is wrong: binning it loses the chance to check it. (d) is wrong: taking it home risks a home PC too."
      },
      {
        "module": 5,
        "q": "What is smishing?",
        "choices": [
          "Phishing by text message",
          "Phishing by email",
          "A type of virus",
          "A firewall"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Smishing is SMS phishing. (b) is wrong: email phishing is plain phishing. (c) is wrong: a virus is malware. (d) is wrong: a firewall blocks traffic."
      },
      {
        "module": 5,
        "q": "What is dumpster diving?",
        "choices": [
          "A backup method",
          "Searching rubbish for sensitive documents",
          "A type of encryption",
          "A Wi-Fi attack"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Dumpster diving recovers discarded documents for information. (a) is wrong: backup methods are full, incremental, and differential. (c) is wrong: encryption protects data. (d) is wrong: it targets physical waste, not Wi-Fi."
      },
      {
        "module": 5,
        "q": "What is a smart card used for?",
        "choices": [
          "Storing photos",
          "Authentication: a physical card with a chip, used with a PIN",
          "Speeding up Wi-Fi",
          "Backing up files"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A smart card is 'something you have' for authentication. (a) is wrong: photos are stored on a drive or in the cloud. (c) is wrong: Wi-Fi speed is a network matter. (d) is wrong: backups copy files to another location."
      },
      {
        "module": 5,
        "q": "Which of these is a biometric?",
        "choices": [
          "A password",
          "A fingerprint",
          "A smart card",
          "A PIN"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A fingerprint is 'something you are'. (a) is wrong: a password is 'something you know'. (c) is wrong: a smart card is 'something you have'. (d) is wrong: a PIN is 'something you know'."
      },
      {
        "module": 5,
        "q": "Why is a password manager recommended?",
        "choices": [
          "It remembers passwords for you",
          "It lets one person keep many long, unique passwords without reusing or writing them down",
          "It encrypts the hard drive",
          "It blocks phishing emails"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A manager stores unique passwords so none are reused or written down. (a) is wrong: remembering is only part of it — the point is uniqueness. (c) is wrong: drive encryption is BitLocker. (d) is wrong: phishing is blocked by training and filters, not a password manager."
      },
      {
        "module": 5,
        "q": "What is an ACL?",
        "choices": [
          "A type of virus",
          "An access control list: permissions set on files and folders",
          "A Wi-Fi standard",
          "A backup type"
        ],
        "answer": 1,
        "explanation": "Correct: (b). ACLs decide who may read, write, or execute a file or folder. (a) is wrong: a virus is malware. (c) is wrong: Wi-Fi standards are 802.11. (d) is wrong: backup types are full, incremental, and differential."
      },
      {
        "module": 5,
        "q": "A small office router still has the default admin password 'admin'. What is the risk?",
        "choices": [
          "The Wi-Fi will be slow",
          "Anyone who knows the default can log in and change the network",
          "The router will overheat",
          "The printer will stop working"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Default passwords are publicly known, so anyone can take over the router. (a) is wrong: the password does not affect speed. (c) is wrong: heat is a cooling issue. (d) is wrong: the printer is unrelated."
      },
      {
        "module": 6,
        "q": "A company takes a full backup every Sunday. On Wednesday a file is lost. What is needed to restore it?",
        "choices": [
          "Only Wednesday's incremental",
          "The Sunday full backup plus Monday, Tuesday, and Wednesday incrementals",
          "Only the Sunday full backup",
          "Only Monday's incremental"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Incremental restores need the full backup plus every incremental since it. (a) is wrong: one incremental holds only one day's changes. (c) is wrong: the full backup alone holds only Sunday's data. (d) is wrong: Monday's incremental holds only Monday's changes."
      },
      {
        "module": 6,
        "q": "A company takes a full backup Sunday and differential backups daily. To restore Thursday's data you need:",
        "choices": [
          "The full backup plus every differential since Sunday",
          "The full backup plus only Thursday's differential",
          "Only Thursday's differential",
          "Only the full backup"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A differential holds everything changed since the last full, so full plus the latest differential is enough. (a) is wrong: that is how incremental restores work. (c) is wrong: a differential alone does not hold the unchanged files. (d) is wrong: the full backup alone holds only Sunday's data."
      },
      {
        "module": 6,
        "q": "Which backup is fastest to run but slowest to restore?",
        "choices": [
          "Full",
          "Incremental",
          "Differential",
          "Mirror"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Incremental copies only recent changes (fast to run) but needs every backup to restore (slow). (a) is wrong: full is slowest to run and fastest to restore. (c) is wrong: differential is in the middle on both. (d) is wrong: a mirror is a copy, not a scheduled backup type."
      },
      {
        "module": 6,
        "q": "A backup has run every night for a year but has never been tested. What is the risk?",
        "choices": [
          "The backup will be too big",
          "It may fail when you need it — a backup you have never restored from is a hope, not a backup",
          "It will slow down the PC",
          "It will delete the original files"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Untested backups often fail; testing proves the restore works. (a) is wrong: testing does not change the backup size. (c) is wrong: testing a restore does not slow the PC. (d) is wrong: a backup never deletes originals."
      },
      {
        "module": 6,
        "q": "A technician wants to change the firewall rules on the office network. What must happen before the change is made?",
        "choices": [
          "Implement it immediately",
          "Request the change and get approval, then plan and test it",
          "Document the result",
          "Tell the users afterwards"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Change starts with a request and approval, then planning and testing. (a) is wrong: implementing first skips the whole process. (c) is wrong: documenting is the last step. (d) is wrong: users are told as part of the plan, not as an afterthought."
      },
      {
        "module": 6,
        "q": "What is a change advisory board for?",
        "choices": [
          "Fixing printers",
          "Reviewing and approving bigger changes before they are made",
          "Hiring staff",
          "Writing passwords down"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The board reviews larger changes so one person's fix does not break a working system. (a) is wrong: printers are a support job. (c) is wrong: hiring is HR. (d) is wrong: passwords must never be written down."
      },
      {
        "module": 6,
        "q": "A security breach is discovered on a company server. What is the FIRST step of incident response?",
        "choices": [
          "Recover the data",
          "Identify what happened",
          "Eradicate the malware",
          "Learn lessons"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Incident response starts with identifying the incident, then contain, eradicate, recover, learn. (a) is wrong: recovery comes after containment and eradication. (c) is wrong: eradicating before identifying may miss the cause. (d) is wrong: learning lessons comes last."
      },
      {
        "module": 6,
        "q": "Before handling RAM, a technician puts on a wrist strap connected to the case. What is the strap protecting against?",
        "choices": [
          "A power cut",
          "Electrostatic discharge, which can destroy components",
          "A virus",
          "Overheating"
        ],
        "answer": 1,
        "explanation": "Correct: (b). ESD is static electricity that can destroy components; the strap grounds the technician. (a) is wrong: a power cut is handled by a UPS. (c) is wrong: a virus is software. (d) is wrong: overheating is a cooling problem."
      },
      {
        "module": 6,
        "q": "Why should you never open a PSU or a monitor?",
        "choices": [
          "They are too heavy",
          "Capacitors inside hold a dangerous charge even when unplugged",
          "They contain no parts",
          "They are sealed by law"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Capacitors store charge after unplugging and can shock you. (a) is wrong: weight is not the danger. (c) is wrong: they contain many parts. (d) is wrong: the danger is electrical, not legal."
      },
      {
        "module": 6,
        "q": "What is an MSDS for?",
        "choices": [
          "A backup schedule",
          "Instructions for handling chemicals such as toner and cleaning solvents safely",
          "A password list",
          "A network diagram"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Material safety data sheets explain safe handling of chemicals. (a) is wrong: backup schedules set when backups run. (c) is wrong: passwords belong in a password manager. (d) is wrong: a network diagram maps the network."
      },
      {
        "module": 6,
        "q": "A PC takes ten minutes to become usable after login, with 14 programs launching at startup. What do you do?",
        "choices": [
          "Buy more RAM",
          "Disable the unneeded startup programs in Task Manager, leaving security software on",
          "Reinstall Windows",
          "Replace the hard drive"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Too many startup programs is the cause; disable the unneeded ones. (a) is wrong: RAM is not the problem here. (c) is wrong: reinstalling is a last resort. (d) is wrong: the drive is not the cause."
      },
      {
        "module": 6,
        "q": "A blue screen appears after a new graphics driver is installed. What is the best first fix?",
        "choices": [
          "Replace the hard drive",
          "Boot into Safe Mode and roll back the driver",
          "Reinstall Windows",
          "Buy more RAM"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The fault started with the driver, so roll it back from Safe Mode. (a) is wrong: the drive did not change. (c) is wrong: reinstalling is a last resort. (d) is wrong: more RAM does not fix a bad driver."
      },
      {
        "module": 6,
        "q": "What should a technician do FIRST when a user reports a problem?",
        "choices": [
          "Fix it immediately without writing anything down",
          "Log a ticket with the details, then work the problem",
          "Tell the user to email instead",
          "Restart the PC without asking"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Log a ticket so the problem is tracked and documented. (a) is wrong: fixing without a ticket loses the record. (c) is wrong: turning the user away is poor service. (d) is wrong: restarting without asking can lose unsaved work."
      },
      {
        "module": 6,
        "q": "What is a ticketing system for?",
        "choices": [
          "Selling tickets",
          "Tracking problems from report to fix, with priority, assignment, and documentation",
          "Booking holidays",
          "Storing passwords"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Tickets track every problem through to resolution. (a) is wrong: that is an event system. (c) is wrong: holidays are HR. (d) is wrong: passwords belong in a password manager."
      },
      {
        "module": 6,
        "q": "A user reports a virus warning, pop-ups, and a changed homepage. What is the correct order?",
        "choices": [
          "Scan, educate, quarantine",
          "Identify, quarantine, disable System Restore, remediate in Safe Mode, rescan/update, re-enable System Restore, educate",
          "Educate, scan, delete",
          "Delete the browser, reinstall Windows"
        ],
        "answer": 1,
        "explanation": "Correct: (b). That is the exam's malware-removal order. (a) is wrong: quarantine comes before scanning, and education comes last. (c) is wrong: educating first does not stop the malware. (d) is wrong: deleting the browser does not remove the infection."
      },
      {
        "module": 6,
        "q": "What is File History in Windows?",
        "choices": [
          "A list of recent documents",
          "A feature that keeps copies of personal files so an earlier version can be restored",
          "A backup of the whole system",
          "A log of logons"
        ],
        "answer": 1,
        "explanation": "Correct: (b). File History versions personal files for restore. (a) is wrong: recent documents are shown in File Explorer. (c) is wrong: a whole-system backup is a system image. (d) is wrong: logons are recorded in Event Viewer."
      },
      {
        "module": 6,
        "q": "What is a recovery drive?",
        "choices": [
          "A drive for storing photos",
          "A USB stick that can reinstall or repair Windows when the PC will not boot",
          "A backup of user files",
          "A second hard drive for games"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A recovery drive repairs or reinstalls Windows from outside the broken system. (a) is wrong: photo storage is a data drive. (c) is wrong: user files are backed up separately. (d) is wrong: a games drive is storage, not recovery."
      },
      {
        "module": 6,
        "q": "An app crashes. What is the correct order of fixes?",
        "choices": [
          "Reinstall, restart, update",
          "Restart the app, check for updates, reinstall it, then check Event Viewer",
          "Buy a new PC",
          "Ignore it"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Start simple — restart and update — then reinstall, then check the logs. (a) is wrong: reinstalling first skips simpler fixes. (c) is wrong: a new PC is a last resort. (d) is wrong: ignoring a crash does not fix it."
      },
      {
        "module": 6,
        "q": "Why should backups be kept off site or in the cloud?",
        "choices": [
          "To save disk space",
          "Because a backup next to the PC dies in the same fire or flood",
          "To make them faster",
          "Because it is free"
        ],
        "answer": 1,
        "explanation": "Correct: (b). An on-site-only backup shares the fate of the original. (a) is wrong: off-site copies do not save local space. (c) is wrong: cloud restores are usually slower. (d) is wrong: cloud storage is not free."
      },
      {
        "module": 6,
        "q": "What is professionalism in IT support?",
        "choices": [
          "Fixing things as fast as possible, whatever it takes",
          "Being on time, communicating clearly in plain language, respecting privacy, and following up",
          "Knowing every answer immediately",
          "Working alone"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Professionalism is conduct: clear communication, privacy, and follow-up. (a) is wrong: speed without care breaks things. (c) is wrong: nobody knows everything — saying so and finding out is professional. (d) is wrong: IT work involves users and teams."
      },
      {
        "module": 6,
        "q": "A technician does not know the answer to a user's question. What should they do?",
        "choices": [
          "Guess and hope",
          "Say so, find out, and follow up",
          "Pretend the question was not asked",
          "Blame the user"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Admitting you do not know and following up is professional. (a) is wrong: guessing can break things. (c) is wrong: ignoring the user is poor service. (d) is wrong: blaming the user is never acceptable."
      },
      {
        "module": 6,
        "q": "What is e-waste and how should it be handled?",
        "choices": [
          "Old emails — delete them",
          "Old equipment, batteries, and toner — recycled through proper e-waste channels, never binned",
          "A type of malware",
          "A backup method"
        ],
        "answer": 1,
        "explanation": "Correct: (b). E-waste must be recycled properly, and drives with data must be wiped or destroyed first. (a) is wrong: old emails are not e-waste. (c) is wrong: malware is software. (d) is wrong: backup methods are full, incremental, and differential."
      },
      {
        "module": 6,
        "q": "Why should you never look through a user's files while fixing their PC?",
        "choices": [
          "It is slow",
          "It violates their privacy — only look at what the job requires",
          "It voids the warranty",
          "It uses too much disk space"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Respecting privacy is a core professional duty. (a) is wrong: speed is not the issue. (c) is wrong: warranty is unrelated. (d) is wrong: looking does not use disk space."
      },
      {
        "module": 6,
        "q": "A Windows update keeps failing. What do you check FIRST?",
        "choices": [
          "The graphics card",
          "The internet connection and disk space, then the Windows Update troubleshooter",
          "The printer",
          "The RAM"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Connection and space are the common causes; the troubleshooter is next. (a) is wrong: the graphics card is unrelated. (c) is wrong: the printer is unrelated. (d) is wrong: RAM faults cause crashes, not update failures."
      },
      {
        "module": 6,
        "q": "What is the purpose of documentation in IT work?",
        "choices": [
          "To slow technicians down",
          "So the next person does not start from zero — what was found, changed, and fixed is written down",
          "To impress managers",
          "To fill disk space"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Documentation preserves knowledge for the next technician. (a) is wrong: it saves time overall. (c) is wrong: impressing managers is not the purpose. (d) is wrong: documentation is small text, not a disk issue."
      },
      {
        "module": 6,
        "q": "A change is planned for Friday afternoon during business hours. What is wrong with this?",
        "choices": [
          "Nothing — Friday is fine",
          "Changes should be scheduled outside business hours, after approval, planning, and testing",
          "Changes should never be planned",
          "Friday is a holiday"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Changes are scheduled outside business hours to avoid disrupting users. (a) is wrong: business hours are the worst time. (c) is wrong: planning is required, not forbidden. (d) is wrong: Friday is a normal working day."
      },
      {
        "module": 6,
        "q": "What is the difference between a full backup and a system image?",
        "choices": [
          "There is no difference",
          "A full backup copies files; a system image copies the whole drive including the OS and settings",
          "A system image only backs up photos",
          "A full backup is faster"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A system image captures the entire drive state; a file backup copies selected files. (a) is wrong: the scope differs. (c) is wrong: a system image covers everything. (d) is wrong: a full file backup is not necessarily faster."
      },
      {
        "module": 6,
        "q": "A PC is slow. Task Manager shows the disk at 100% constantly. What is the most likely cause?",
        "choices": [
          "Too much RAM",
          "A failing drive, a runaway process, or a nearly full disk",
          "A broken monitor",
          "A weak Wi-Fi signal"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Constant 100% disk use points to a drive or process problem. (a) is wrong: too much RAM does not cause disk load. (c) is wrong: the monitor affects the picture. (d) is wrong: Wi-Fi affects the network, not the disk."
      },
      {
        "module": 6,
        "q": "What does 'verify full system functionality' mean in step 5?",
        "choices": [
          "Check the PC turns on",
          "Check the whole system works as the user needs it to, not just the one fault you fixed",
          "Check the warranty",
          "Check the price"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Verification means the entire system works, and preventive measures are in place. (a) is wrong: turning on is only part of working. (c) is wrong: warranty is unrelated. (d) is wrong: price is unrelated."
      },
      {
        "module": 6,
        "q": "Why keep a copy of a backup off site?",
        "choices": [
          "It is cheaper",
          "So a fire, flood, or theft at the office does not destroy both the original and the backup",
          "It is faster to restore",
          "It uses less space"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Off-site copies survive local disasters. (a) is wrong: off-site storage usually costs more. (c) is wrong: off-site restores are usually slower. (d) is wrong: the copy is the same size."
      }
    ]
  },
  "acp-photoshop": {
    "title": "Adobe Certified Professional Photoshop Practice Exam",
    "minutes": 50,
    "passPercent": 70,
    "coverage": "40 original questions in the real exam's style, covering the Photoshop domains: working in the design industry, project setup and interface, organising documents, creating and modifying visual elements, and publishing digital media. Practice benchmark only: the real ACP Photoshop exam is 50 minutes and passes at 700/1000 scaled, and it includes live in-app tasks inside real Photoshop that this text-only practice exam cannot replicate — so the 70% used here is a practice benchmark only, never the real pass mark. This course states no verified question count for the real exam.",
    "questions": [
      {
        "module": 7,
        "q": "You brighten a photo with Image > Adjustments and the client asks for the original brightness back. What is the problem with this method?",
        "choices": [
          "It is too slow",
          "It changes the pixels permanently, so the original brightness is lost",
          "It only works on text",
          "It deletes the layer"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Direct adjustments change the pixels; an adjustment layer would have kept the original safe. (a) is wrong: speed is not the issue. (c) is wrong: adjustments work on image layers. (d) is wrong: adjusting does not delete the layer."
      },
      {
        "module": 7,
        "q": "On a layer mask you paint white over an area you previously hid with black. What happens?",
        "choices": [
          "The area stays hidden",
          "The area becomes visible again",
          "The layer is deleted",
          "The colour changes"
        ],
        "answer": 1,
        "explanation": "Correct: (b). White on a mask reveals; black hides — and nothing is ever deleted. (a) is wrong: that is what black does. (c) is wrong: masks never delete pixels. (d) is wrong: a mask affects visibility, not colour."
      },
      {
        "module": 7,
        "q": "You must cut out a watch with a curved metal edge for a catalogue. Which tool gives the cleanest edge?",
        "choices": [
          "Magic Wand",
          "Pen tool",
          "Quick Selection",
          "Eraser"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The Pen tool draws precise paths for the cleanest cut-outs. (a) is wrong: the Magic Wand is for flat colour and gives rough edges. (c) is wrong: Quick Selection is fast but not precise on hard edges. (d) is wrong: the Eraser deletes pixels and is not a selection tool."
      },
      {
        "module": 7,
        "q": "A logo must appear on a dark website background with no white box behind it. Which format do you save?",
        "choices": [
          "JPEG",
          "PNG",
          "BMP",
          "TIFF"
        ],
        "answer": 1,
        "explanation": "Correct: (b). PNG keeps transparency and is best for logos. (a) is wrong: JPEG has no transparency. (c) is wrong: BMP is uncompressed and has no web use. (d) is wrong: TIFF is for print, not web delivery."
      },
      {
        "module": 7,
        "q": "You select a person's face and want it on its own layer. Which shortcut does that?",
        "choices": [
          "Ctrl/Cmd+O",
          "Ctrl/Cmd+J",
          "Ctrl/Cmd+E",
          "Ctrl/Cmd+D"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Ctrl/Cmd+J duplicates the selection onto a new layer. (a) is wrong: Ctrl/Cmd+O opens a file. (c) is wrong: Ctrl/Cmd+E merges layers down. (d) is wrong: Ctrl/Cmd+D deselects."
      },
      {
        "module": 7,
        "q": "You try to move the Background layer and Photoshop will not let you. Why?",
        "choices": [
          "The file is read-only",
          "The Background layer is locked to protect the original; double-click to unlock it",
          "The layer has no pixels",
          "The layer is a Smart Object"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The Background layer is locked by default; double-clicking turns it into a normal layer. (a) is wrong: the lock is a layer property, not a file permission. (c) is wrong: it holds the image's pixels. (d) is wrong: it is not a Smart Object unless converted."
      },
      {
        "module": 7,
        "q": "A portrait has flyaway hair against a busy background. Which workspace refines the edge so the hair is kept?",
        "choices": [
          "Crop",
          "Select and Mask",
          "Canvas Size",
          "Save As"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Select and Mask is the workspace for refining difficult edges like hair. (a) is wrong: Crop changes the canvas edges. (c) is wrong: Canvas Size changes the canvas dimensions. (d) is wrong: Save As saves the file."
      },
      {
        "module": 7,
        "q": "A magazine wants a full-page photo 8 inches wide. How many pixels wide must it be at 300 PPI?",
        "choices": [
          "576",
          "800",
          "2400",
          "8000"
        ],
        "answer": 2,
        "explanation": "Correct: (c). 8 inches × 300 PPI = 2400 pixels. (a) is wrong: 576 is 8 × 72, the screen resolution. (b) is wrong: 800 pixels would print under 3 inches wide. (d) is wrong: 8000 pixels is far more than needed."
      },
      {
        "module": 7,
        "q": "What is a Smart Object?",
        "choices": [
          "A layer that deletes itself",
          "A layer that wraps an image so filters and transforms stay editable",
          "A type of selection",
          "A file format"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A Smart Object keeps filters and transforms editable instead of baking them in. (a) is wrong: layers do not delete themselves. (c) is wrong: selections are made with selection tools. (d) is wrong: file formats are PSD, JPEG, PNG, TIFF."
      },
      {
        "module": 7,
        "q": "What does a clipping mask do?",
        "choices": [
          "Deletes the layer below",
          "Limits a layer to the shape of the layer below it",
          "Merges two layers",
          "Changes the canvas size"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A clipping mask shows the top layer only where the layer below has pixels — used to fill text with a photo. (a) is wrong: nothing is deleted. (c) is wrong: merging is Ctrl/Cmd+E. (d) is wrong: canvas size is Image > Canvas Size."
      },
      {
        "module": 7,
        "q": "Which selection tool is best for a flat area of similar colour, such as a blue sky?",
        "choices": [
          "Pen tool",
          "Magic Wand",
          "Lasso",
          "Crop tool"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The Magic Wand selects areas of similar colour; Tolerance controls how much. (a) is wrong: the Pen tool is for precise paths. (c) is wrong: the Lasso is freehand and slower for a large flat area. (d) is wrong: the Crop tool changes the canvas, it does not select."
      },
      {
        "module": 7,
        "q": "What does feathering a selection do?",
        "choices": [
          "Deletes the edge",
          "Softens the edge so edits blend into the surrounding image",
          "Makes the selection bigger",
          "Saves the selection"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Feather softens the edge for a natural blend. (a) is wrong: feathering does not delete anything. (c) is wrong: expanding is Select > Modify > Expand. (d) is wrong: saving a selection is Select > Save Selection."
      },
      {
        "module": 7,
        "q": "How do you add to an existing selection?",
        "choices": [
          "Hold Alt/Option and drag",
          "Hold Shift and drag",
          "Press Ctrl/Cmd+D",
          "Press Delete"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Shift adds to a selection; Alt/Option subtracts. (a) is wrong: Alt/Option subtracts. (c) is wrong: Ctrl/Cmd+D deselects everything. (d) is wrong: Delete removes pixels."
      },
      {
        "module": 7,
        "q": "What does Ctrl/Cmd+E do in Photoshop?",
        "choices": [
          "Exports the file",
          "Merges the selected layers down",
          "Duplicates the layer",
          "Opens the file"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Ctrl/Cmd+E merges the selected layer with the one below. (a) is wrong: exporting is File > Export. (c) is wrong: duplicating is Ctrl/Cmd+J. (d) is wrong: opening is Ctrl/Cmd+O."
      },
      {
        "module": 7,
        "q": "Which workspace arranges Photoshop's panels for photo work?",
        "choices": [
          "Essentials or Photography",
          "Painting",
          "3D",
          "Motion"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Essentials and Photography workspaces arrange panels for photo editing. (b) is wrong: Painting arranges panels for digital painting. (c) is wrong: 3D is for 3D work. (d) is wrong: Motion is for animation."
      },
      {
        "module": 7,
        "q": "What is the Options bar?",
        "choices": [
          "The menu at the top of the screen",
          "The bar that changes with the selected tool and holds its settings",
          "The Layers panel",
          "The status bar at the bottom"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The Options bar shows the settings for the active tool, such as brush size or feather. (a) is wrong: the menu bar holds File, Edit, and the rest. (c) is wrong: the Layers panel lists layers. (d) is wrong: the status bar shows document info."
      },
      {
        "module": 7,
        "q": "What does grouping layers with Ctrl/Cmd+G do?",
        "choices": [
          "Deletes them",
          "Keeps related layers together in a folder in the Layers panel",
          "Flattens the image",
          "Locks them"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Groups organise related layers into a folder. (a) is wrong: grouping never deletes. (c) is wrong: flattening merges all layers. (d) is wrong: locking is the padlock icon."
      },
      {
        "module": 7,
        "q": "Which blend mode darkens a layer's effect on the layers below?",
        "choices": [
          "Screen",
          "Multiply",
          "Overlay",
          "Normal"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Multiply darkens; Screen lightens. (a) is wrong: Screen lightens. (c) is wrong: Overlay does both, depending on the tones. (d) is wrong: Normal shows the layer as it is, with no blending."
      },
      {
        "module": 7,
        "q": "What happens when you lower a layer's opacity to 50%?",
        "choices": [
          "The layer is deleted",
          "The layer becomes half see-through, showing the layers below",
          "The layer is locked",
          "The layer is hidden"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Opacity controls how see-through a layer is. (a) is wrong: opacity never deletes. (c) is wrong: locking is the padlock icon. (d) is wrong: hiding is the eye icon."
      },
      {
        "module": 7,
        "q": "You need to fill text with a photo. What do you use?",
        "choices": [
          "A layer mask",
          "A clipping mask",
          "A Smart Object",
          "A feathered selection"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A clipping mask limits the photo to the shape of the text below it. (a) is wrong: a layer mask hides parts of a layer with paint. (c) is wrong: a Smart Object keeps filters editable. (d) is wrong: a feathered selection softens an edge."
      },
      {
        "module": 8,
        "q": "A photo has dust spots on a clear blue sky. Which tool removes them fastest?",
        "choices": [
          "Clone Stamp",
          "Spot Healing Brush",
          "Pen tool",
          "Crop tool"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The Spot Healing Brush fills small marks from the surroundings automatically. (a) is wrong: the Clone Stamp copies pixels exactly from a source you pick. (c) is wrong: the Pen tool draws paths. (d) is wrong: the Crop tool changes the canvas edges."
      },
      {
        "module": 8,
        "q": "A photo has a rubbish bin in the background that must go. Which feature removes it?",
        "choices": [
          "Spot Healing Brush",
          "Content-Aware Fill",
          "Magic Wand",
          "Type tool"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Content-Aware Fill removes a whole object by inventing matching pixels. (a) is wrong: the Spot Healing Brush is for small blemishes. (c) is wrong: the Magic Wand selects areas of similar colour. (d) is wrong: the Type tool adds text."
      },
      {
        "module": 8,
        "q": "You sharpen a photo, then resize it smaller for the web. Why does it now look over-sharpened?",
        "choices": [
          "Sharpening should come last, after resizing to the final size",
          "Sharpening should come first",
          "You used the wrong file format",
          "You used the wrong colour mode"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Sharpening depends on the final size, so it comes last. (b) is wrong: sharpening first means it is wrong after every later change. (c) is wrong: the format affects size and transparency, not sharpening. (d) is wrong: the colour mode affects colour, not sharpening."
      },
      {
        "module": 8,
        "q": "A bright blue on screen prints as a dull purple. What is the most likely cause?",
        "choices": [
          "The photo is too small",
          "The file is RGB and the printer uses CMYK, which has a smaller colour range",
          "The printer is out of paper",
          "The photo was not saved"
        ],
        "answer": 1,
        "explanation": "Correct: (b). CMYK's colour range is smaller than RGB's, so bright screen colours shift in print. (a) is wrong: size affects detail, not colour. (c) is wrong: no paper stops printing entirely. (d) is wrong: an unsaved photo would not print at all."
      },
      {
        "module": 8,
        "q": "A histogram shows tones piled up at the right edge with nothing in the middle. What does this mean?",
        "choices": [
          "The photo is perfectly exposed",
          "The photo is overexposed — the highlights are blown out",
          "The photo is underexposed",
          "The photo is too sharp"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Tones bunched at the right mean overexposure and lost highlight detail. (a) is wrong: a healthy photo spreads across the graph. (c) is wrong: underexposed bunches to the left. (d) is wrong: sharpness is not shown by the histogram."
      },
      {
        "module": 8,
        "q": "A photo taken in open shade looks blue. Which slider fixes the colour cast?",
        "choices": [
          "Sharpening",
          "Temperature — drag it toward warm",
          "Resolution",
          "File format"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The Temperature slider corrects white balance: warm removes the blue cast. (a) is wrong: sharpening affects detail, not colour. (c) is wrong: resolution affects size and detail. (d) is wrong: the format affects size and transparency."
      },
      {
        "module": 8,
        "q": "You boost Saturation on a portrait and the skin turns orange. What should you have used instead?",
        "choices": [
          "Brightness",
          "Vibrance",
          "Contrast",
          "Exposure"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Vibrance boosts dull colours while protecting skin tones. (a) is wrong: Brightness lightens everything. (c) is wrong: Contrast changes light and dark, not colour strength. (d) is wrong: Exposure changes overall brightness."
      },
      {
        "module": 8,
        "q": "A 6000-pixel photo is uploaded to a page that displays it at 1200 pixels wide. What is the problem?",
        "choices": [
          "The photo is too small",
          "It wastes bandwidth — resize to the display size before uploading",
          "The photo is the wrong colour",
          "The photo has too few layers"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A 6000-pixel image on a 1200-pixel page is wasted bandwidth. (a) is wrong: the photo is far larger than needed. (c) is wrong: size is the issue here, not colour. (d) is wrong: layers are flattened on export anyway."
      },
      {
        "module": 8,
        "q": "What is the difference between Levels and Curves?",
        "choices": [
          "Levels is for print; Curves is for web",
          "Levels fixes exposure fast with black, white, and midtone points; Curves gives precise control over tonal ranges",
          "Levels changes colour; Curves changes size",
          "There is no difference"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Levels is the quick fix; Curves is the precise tool for individual tonal ranges. (a) is wrong: both work for print and web. (c) is wrong: neither changes image size. (d) is wrong: the difference is real and tested."
      },
      {
        "module": 8,
        "q": "What does the Clone Stamp do that the Healing Brush does not?",
        "choices": [
          "It copies pixels exactly from the source",
          "It removes blemishes automatically",
          "It changes colour",
          "It selects an area"
        ],
        "answer": 0,
        "explanation": "Correct: (a). The Clone Stamp copies pixels exactly; the Healing Brush blends the source into the target. (b) is wrong: automatic blemish removal is the Spot Healing Brush. (c) is wrong: neither tool changes colour directly. (d) is wrong: selecting is a selection tool's job."
      },
      {
        "module": 8,
        "q": "What is Dodge and Burn used for?",
        "choices": [
          "Changing the canvas size",
          "Lightening and darkening areas to shape light without changing colour",
          "Removing objects",
          "Adding text"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Dodge lightens, Burn darkens, shaping light on a face or product. (a) is wrong: canvas size is Image > Canvas Size. (c) is wrong: removing objects is Content-Aware Fill. (d) is wrong: text is the Type tool."
      },
      {
        "module": 8,
        "q": "What is sRGB?",
        "choices": [
          "A print colour mode",
          "The safe standard colour profile for the web",
          "A file format",
          "A Photoshop filter"
        ],
        "answer": 1,
        "explanation": "Correct: (b). sRGB is the standard profile for web and screen work. (a) is wrong: print uses CMYK. (c) is wrong: file formats are PSD, JPEG, PNG, TIFF. (d) is wrong: filters are in the Filter menu."
      },
      {
        "module": 8,
        "q": "What is bleed in print?",
        "choices": [
          "Ink leaking from a printer",
          "Extra image area past the trim edge so no white border shows after cutting",
          "A colour cast",
          "A paper jam"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Bleed extends the image past the cut line. (a) is wrong: leaking ink is a printer fault. (c) is wrong: a colour cast is fixed by white balance. (d) is wrong: a paper jam stops the printer."
      },
      {
        "module": 8,
        "q": "What does Unsharp Mask control with Amount, Radius, and Threshold?",
        "choices": [
          "Colour",
          "Sharpening strength, edge width, and which areas are sharpened",
          "File size",
          "Canvas size"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Amount is strength, Radius is edge width, Threshold protects smooth areas. (a) is wrong: colour is adjusted with Hue/Saturation or Curves. (c) is wrong: file size is set at export. (d) is wrong: canvas size is Image > Canvas Size."
      },
      {
        "module": 8,
        "q": "What is the main rule for retouching skin?",
        "choices": [
          "Remove everything for a perfect look",
          "Remove temporary blemishes, keep permanent features such as moles and freckles, and never blur skin into plastic",
          "Use the Clone Stamp on the whole face",
          "Sharpen the skin as much as possible"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Professional retouching is a light touch that keeps identity. (a) is wrong: removing everything looks fake. (c) is wrong: the Clone Stamp copies exactly and looks fake on skin. (d) is wrong: over-sharpening skin looks crunchy."
      },
      {
        "module": 8,
        "q": "A photo looks right in Photoshop but dull in a browser. What is the most likely cause?",
        "choices": [
          "The photo is too big",
          "The colour profile — the file is Adobe RGB and the browser assumes sRGB",
          "The browser is broken",
          "The photo was not saved"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Browsers assume sRGB; an Adobe RGB file looks dull in them. (a) is wrong: size affects loading, not colour. (c) is wrong: the browser is behaving normally. (d) is wrong: an unsaved photo would not appear at all."
      },
      {
        "module": 8,
        "q": "What is the best file format to keep as the master with all layers?",
        "choices": [
          "JPEG",
          "PSD",
          "PNG",
          "GIF"
        ],
        "answer": 1,
        "explanation": "Correct: (b). PSD keeps every layer for future editing. (a) is wrong: JPEG flattens and loses quality. (c) is wrong: PNG flattens the image (though it keeps transparency). (d) is wrong: GIF is an old format with limited colours."
      },
      {
        "module": 8,
        "q": "In the histogram, a photo bunched to the left is:",
        "choices": [
          "Overexposed",
          "Underexposed",
          "Perfectly exposed",
          "Too sharp"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Tones bunched left mean dark shadows — underexposed. (a) is wrong: overexposed bunches to the right. (c) is wrong: a healthy photo spreads across the graph. (d) is wrong: sharpness is not shown by the histogram."
      },
      {
        "module": 8,
        "q": "Why work retouching on a duplicate layer?",
        "choices": [
          "It makes the file smaller",
          "So the original pixels stay safe and any change can be undone",
          "It is faster",
          "It is required by law"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Non-destructive editing keeps the original intact. (a) is wrong: a duplicate layer makes the file bigger. (c) is wrong: it is not about speed. (d) is wrong: there is no such law."
      },
      {
        "module": 8,
        "q": "What does File > Export > Export As show you that File > Save As does not?",
        "choices": [
          "The layers",
          "The exported file size and a quality comparison for web delivery",
          "The colour profile",
          "The history"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Export As previews file size and quality for web output. (a) is wrong: layers are in the Layers panel. (c) is wrong: the profile can be seen elsewhere. (d) is wrong: history is in the History panel."
      }
    ]
  },
  "acp-premiere": {
    "title": "Adobe Certified Professional Premiere Pro Practice Exam",
    "minutes": 50,
    "passPercent": 70,
    "coverage": "40 original questions in the real exam's style, covering the Premiere Pro domains: working in the video industry, project setup and interface, organising projects, creating and modifying visual elements, and publishing digital media. Practice benchmark only: the real ACP Premiere Pro exam is 50 minutes and passes at 700/1000 scaled, and it includes live in-app tasks inside real Premiere Pro that this text-only practice exam cannot replicate — so the 70% used here is a practice benchmark only, never the real pass mark. This course states no verified question count for the real exam.",
    "questions": [
      {
        "module": 9,
        "q": "You create a sequence manually and set it to 720p, but your clips are 1080p. What happens?",
        "choices": [
          "Nothing — Premiere Pro upscales automatically",
          "The 1080p clips are scaled down to 720p and lose detail",
          "The clips refuse to import",
          "The audio disappears"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A sequence set to 720p scales 1080p clips down, losing detail. (a) is wrong: upscaling is the reverse, and it does not add detail. (c) is wrong: clips import regardless of sequence settings. (d) is wrong: audio is unaffected by frame size."
      },
      {
        "module": 9,
        "q": "You delete a clip from the middle of a timeline and want the rest to close the gap automatically. Which edit does that?",
        "choices": [
          "Rolling edit",
          "Ripple edit",
          "Slip edit",
          "Slide edit"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A ripple edit trims and shifts everything after it, closing the gap. (a) is wrong: a rolling edit moves the cut point between two clips. (c) is wrong: a slip edit moves footage inside a clip. (d) is wrong: a slide edit moves a clip along the timeline."
      },
      {
        "module": 9,
        "q": "In the Source monitor you press I at 00:10 and O at 00:15. What happens when you drag to the timeline?",
        "choices": [
          "The whole clip is added",
          "Only the 5 seconds between the marks is added",
          "The clip is deleted",
          "The audio is removed"
        ],
        "answer": 1,
        "explanation": "Correct: (b). I and O mark the in and out points, so only that part lands on the timeline. (a) is wrong: the whole clip is added only if no marks are set. (c) is wrong: marking never deletes. (d) is wrong: audio comes with the clip unless unlinked."
      },
      {
        "module": 9,
        "q": "A voiceover peaks at -3 dB and the music peaks at -20 dB. What is wrong?",
        "choices": [
          "The music is too loud",
          "The voiceover is too hot — it should peak around -12 to -6 dB",
          "The voiceover is too quiet",
          "Nothing is wrong"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Dialogue at -3 dB is close to clipping; it should peak around -12 to -6 dB. (a) is wrong: the music at -20 dB is quiet, not loud. (c) is wrong: -3 dB is loud, not quiet. (d) is wrong: -3 dB leaves almost no headroom."
      },
      {
        "module": 9,
        "q": "Music plays at full volume under narration and the words are hard to hear. Which Essential Sound feature fixes it?",
        "choices": [
          "Loudness auto-match",
          "Ducking",
          "Noise reduction",
          "Reverb"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Ducking automatically lowers music under dialogue. (a) is wrong: loudness auto-match sets dialogue levels. (c) is wrong: noise reduction removes hiss. (d) is wrong: reverb adds echo."
      },
      {
        "module": 9,
        "q": "You move a video file to a new folder after importing it into Premiere Pro. What does the project show?",
        "choices": [
          "Nothing changes",
          "Media Offline until you relink it",
          "The project deletes itself",
          "The clip is automatically re-imported"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Premiere Pro links by file path, so moving a file breaks the link. (a) is wrong: the link breaks. (c) is wrong: the project is not deleted. (d) is wrong: relinking is manual."
      },
      {
        "module": 9,
        "q": "You need to split one long clip into three parts on the timeline. Which tool do you use?",
        "choices": [
          "Selection tool (V)",
          "Razor tool (C)",
          "Type tool (T)",
          "Hand tool (H)"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The Razor tool (C) cuts a clip where you click. (a) is wrong: the Selection tool moves and trims clips. (c) is wrong: the Type tool adds text. (d) is wrong: the Hand tool moves around the canvas."
      },
      {
        "module": 9,
        "q": "A name title flashes on screen for half a second. Why can nobody read it?",
        "choices": [
          "The text is too big",
          "It is on screen too briefly — a lower third needs at least 3 seconds",
          "The text is the wrong colour",
          "The video is too long"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A lower third needs at least 3 seconds for a viewer to read it. (a) is wrong: big text is easier to read. (c) is wrong: colour is a separate issue. (d) is wrong: video length does not affect a single title's readability."
      },
      {
        "module": 9,
        "q": "What does a rolling edit do?",
        "choices": [
          "Trims a clip and closes the gap",
          "Moves the cut point between two clips; one gets longer as the other gets shorter",
          "Moves the footage inside a clip",
          "Deletes a clip"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A rolling edit shifts the cut point while the total length stays the same. (a) is wrong: that is a ripple edit. (c) is wrong: that is a slip edit. (d) is wrong: deleting is the Delete key."
      },
      {
        "module": 9,
        "q": "What does a slip edit do?",
        "choices": [
          "Moves the footage inside a clip without moving the clip on the timeline",
          "Moves the cut point between two clips",
          "Trims a clip and closes the gap",
          "Moves a clip along the timeline"
        ],
        "answer": 0,
        "explanation": "Correct: (a). A slip slides the source footage inside the clip's fixed position. (b) is wrong: that is a rolling edit. (c) is wrong: that is a ripple edit. (d) is wrong: that is a slide edit."
      },
      {
        "module": 9,
        "q": "What is the difference between Insert and Overwrite?",
        "choices": [
          "Insert pushes everything after it along; Overwrite replaces what is there",
          "Insert replaces; Overwrite pushes",
          "There is no difference",
          "Insert only works for audio"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Insert (comma) shifts downstream clips; Overwrite (period) replaces. (b) is wrong: that is backwards. (c) is wrong: the difference is tested. (d) is wrong: both work for video and audio."
      },
      {
        "module": 9,
        "q": "What is the playhead?",
        "choices": [
          "The first clip on the timeline",
          "The vertical line on the timeline showing the current frame",
          "The audio meter",
          "The export button"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The playhead marks the current frame. (a) is wrong: the first clip is just a clip. (c) is wrong: audio meters show levels. (d) is wrong: exporting is File > Export > Media."
      },
      {
        "module": 9,
        "q": "What are markers for?",
        "choices": [
          "Exporting the video",
          "Flagging moments on the timeline, such as a beat change or a mistake to fix",
          "Adding transitions",
          "Changing the frame rate"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Markers (M) flag moments with optional notes. (a) is wrong: exporting is a separate step. (c) is wrong: transitions are in the Effects panel. (d) is wrong: frame rate is a sequence setting."
      },
      {
        "module": 9,
        "q": "What is clipping in audio?",
        "choices": [
          "Cutting a clip shorter",
          "Distortion when the level hits 0 dB; it cannot be fixed afterwards",
          "A type of transition",
          "A file format"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Clipping is distortion at 0 dB and is permanent. (a) is wrong: cutting a clip shorter is trimming. (c) is wrong: transitions join video clips. (d) is wrong: audio formats are WAV, MP3, AAC."
      },
      {
        "module": 9,
        "q": "What does the Essential Sound panel tag clips as?",
        "choices": [
          "Good or bad",
          "Dialogue, Music, Sound Effects, or Ambience",
          "Loud or quiet",
          "Stereo or mono"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Tagging unlocks presets such as loudness and ducking. (a) is wrong: quality is judged by listening. (c) is wrong: loudness is a level, not a tag. (d) is wrong: stereo/mono is a channel setting."
      },
      {
        "module": 9,
        "q": "Why cut on the action?",
        "choices": [
          "It is faster",
          "The viewer's eye follows the movement instead of noticing the cut",
          "It saves disk space",
          "It is required by law"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Cutting mid-movement hides the cut. (a) is wrong: speed is not the reason. (c) is wrong: cutting does not save disk space. (d) is wrong: there is no such law."
      },
      {
        "module": 9,
        "q": "What are safe margins for?",
        "choices": [
          "Keeping titles and important action inside the frame so nothing is cut off on a TV or phone",
          "Saving disk space",
          "Making the video louder",
          "Exporting faster"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Safe margins show the area guaranteed visible on all screens. (b) is wrong: margins do not affect disk space. (c) is wrong: loudness is an audio setting. (d) is wrong: margins do not affect export speed."
      },
      {
        "module": 9,
        "q": "What is a cross dissolve?",
        "choices": [
          "A hard cut",
          "A gentle blend between two clips",
          "A black screen",
          "A title effect"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A cross dissolve blends one clip into the next. (a) is wrong: a hard cut is an instant change. (c) is wrong: a black screen is a dip to black. (d) is wrong: titles are made with the Type tool."
      },
      {
        "module": 9,
        "q": "What does snapping (S) do on the timeline?",
        "choices": [
          "Deletes clips",
          "Makes clip edges and the playhead snap together for precise placement",
          "Locks the timeline",
          "Exports the video"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Snapping aligns edges and the playhead. (a) is wrong: deleting is the Delete key. (c) is wrong: locking is the track lock. (d) is wrong: exporting is File > Export > Media."
      },
      {
        "module": 9,
        "q": "Audio recorded separately drifts out of sync over a long clip. What is the likely cause?",
        "choices": [
          "The volume is too low",
          "The frame rates do not match",
          "The clip is too short",
          "The music is too loud"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Mismatched frame rates cause drift over time. (a) is wrong: volume does not affect sync. (c) is wrong: a short clip would not drift noticeably. (d) is wrong: music loudness does not affect sync."
      },
      {
        "module": 10,
        "q": "You apply a teal-and-orange Look to a shot with a strong blue colour cast. What is the result?",
        "choices": [
          "A perfectly graded shot",
          "A stylish blue colour cast — you must correct before you grade",
          "A black-and-white shot",
          "No change at all"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Grading an uncorrected shot bakes the cast into the style. (a) is wrong: the cast is still there. (c) is wrong: a Look does not remove colour. (d) is wrong: the Look changes the colours, just badly."
      },
      {
        "module": 10,
        "q": "A shot's Waveform shows the trace crushed against the top of the scope. What does this mean?",
        "choices": [
          "The shot is too dark",
          "The highlights are clipped — overexposed",
          "The colours are wrong",
          "The audio is too loud"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A trace crushed against the top means blown-out highlights. (a) is wrong: too dark would crush against the bottom. (c) is wrong: colour is judged on the Vectorscope. (d) is wrong: the Waveform is a video scope, not audio."
      },
      {
        "module": 10,
        "q": "You need the smallest file that still looks good for YouTube. Which bitrate mode do you choose?",
        "choices": [
          "CBR at a low bitrate",
          "VBR 2-pass",
          "Uncompressed",
          "VBR 1-pass at maximum bitrate"
        ],
        "answer": 1,
        "explanation": "Correct: (b). VBR 2-pass gives the best quality at a given file size. (a) is wrong: CBR at a low bitrate wastes quality on simple scenes. (c) is wrong: uncompressed files are enormous. (d) is wrong: maximum bitrate makes the file large, not small."
      },
      {
        "module": 10,
        "q": "A client cannot play the ProRes master you sent them. What should you send instead?",
        "choices": [
          "A bigger ProRes file",
          "H.264 in MP4",
          "Uncompressed AVI",
          "A GIF"
        ],
        "answer": 1,
        "explanation": "Correct: (b). H.264 in MP4 plays everywhere. (a) is wrong: a bigger ProRes file still will not play. (c) is wrong: uncompressed AVI is enormous. (d) is wrong: GIF is for short looping images."
      },
      {
        "module": 10,
        "q": "You want a title to fade in over 2 seconds. What do you set in Effect Controls?",
        "choices": [
          "A transition",
          "Keyframes on Opacity — 0% at the start, 100% two seconds later",
          "A new sequence",
          "A faster frame rate"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Keyframes animate Opacity from 0% to 100% over the two seconds. (a) is wrong: a transition joins two clips. (c) is wrong: a new sequence is a new timeline. (d) is wrong: frame rate affects motion smoothness, not fades."
      },
      {
        "module": 10,
        "q": "Handheld footage is shaky. After Warp Stabilizer, the edges look wobbly. What is the trade-off?",
        "choices": [
          "Warp Stabilizer sharpens the image",
          "It smooths the shake but crops the edges and can look wobbly if the shake is extreme",
          "It removes the audio",
          "It changes the frame rate"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Stabilising smooths motion at the cost of a slight crop and possible wobble. (a) is wrong: sharpening is a different effect. (c) is wrong: audio is unaffected. (d) is wrong: frame rate is a sequence setting."
      },
      {
        "module": 10,
        "q": "Log footage looks flat and grey. What converts it to a normal look?",
        "choices": [
          "A LUT (Look-Up Table)",
          "An audio effect",
          "A transition",
          "A new codec"
        ],
        "answer": 0,
        "explanation": "Correct: (a). An input LUT maps log footage to a normal look. (b) is wrong: audio effects change sound. (c) is wrong: a transition joins two clips. (d) is wrong: a codec changes how the file is stored, not its look."
      },
      {
        "module": 10,
        "q": "You must export three versions of one video — YouTube, Instagram, and a master — while you keep editing. What do you use?",
        "choices": [
          "File > Export > Media three times",
          "Adobe Media Encoder, which queues the exports",
          "A faster computer",
          "Three separate projects"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Media Encoder queues exports and renders in the background. (a) is wrong: direct export blocks editing while it renders. (c) is wrong: a faster computer does not queue exports. (d) is wrong: one project can produce many versions."
      },
      {
        "module": 10,
        "q": "Where do you adjust an effect after dragging it onto a clip?",
        "choices": [
          "The Project panel",
          "The Effect Controls panel",
          "The Timeline panel",
          "The Program monitor"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Effect Controls shows the settings of the effects on the selected clip. (a) is wrong: the Project panel holds media. (c) is wrong: the Timeline holds the edit. (d) is wrong: the Program monitor shows the result."
      },
      {
        "module": 10,
        "q": "What does HSL Secondary do in Lumetri Color?",
        "choices": [
          "Changes the frame rate",
          "Selects one colour and changes only that colour",
          "Adds a title",
          "Exports the video"
        ],
        "answer": 1,
        "explanation": "Correct: (b). HSL Secondary isolates a colour — for example, skin — and adjusts only it. (a) is wrong: frame rate is a sequence setting. (c) is wrong: titles are made with the Type tool. (d) is wrong: exporting is File > Export > Media."
      },
      {
        "module": 10,
        "q": "What is the difference between colour correction and colour grading?",
        "choices": [
          "Correction makes shots look natural and consistent; grading adds a creative style on top",
          "Correction adds style; grading fixes exposure",
          "There is no difference",
          "Correction is for audio"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Correction fixes, grading styles — always in that order. (b) is wrong: that is backwards. (c) is wrong: the difference is tested. (d) is wrong: colour work is visual, not audio."
      },
      {
        "module": 10,
        "q": "What does the Vectorscope show?",
        "choices": [
          "Brightness",
          "Colour — skin tones should sit along the skin-tone line",
          "Audio levels",
          "The number of clips"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The Vectorscope maps colour; a cast leans to one side. (a) is wrong: brightness is the Waveform. (c) is wrong: audio levels are on the audio meters. (d) is wrong: clip count is visible on the timeline."
      },
      {
        "module": 10,
        "q": "What is speed ramping?",
        "choices": [
          "Exporting faster",
          "Changing a clip's speed over time with keyframes (Time Remapping)",
          "Playing a clip backwards",
          "Adding a transition"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Speed ramping slows a moment down, then returns to normal speed. (a) is wrong: export speed is a render setting. (c) is wrong: reverse is a separate speed option. (d) is wrong: transitions join clips."
      },
      {
        "module": 10,
        "q": "Which preset is a good starting point for a YouTube export?",
        "choices": [
          "YouTube 1080p Full HD or Match Source — High bitrate",
          "ProRes 422",
          "Uncompressed AVI",
          "GIF"
        ],
        "answer": 0,
        "explanation": "Correct: (a). YouTube presets give the right format and settings for the platform. (b) is wrong: ProRes is a master codec, not a YouTube delivery format. (c) is wrong: uncompressed AVI is enormous. (d) is wrong: GIF is for short looping images, not video delivery."
      },
      {
        "module": 10,
        "q": "What should you check before clicking Export?",
        "choices": [
          "The weather",
          "The export range (Entire Sequence vs Work Area), resolution, frame rate, and bitrate",
          "The printer",
          "The Wi-Fi password"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The range, resolution, frame rate, and bitrate decide what actually exports. (a) is wrong: the weather is irrelevant. (c) is wrong: the printer is unrelated. (d) is wrong: Wi-Fi is unrelated."
      },
      {
        "module": 10,
        "q": "What is nesting used for?",
        "choices": [
          "Deleting clips",
          "Grouping clips into one nested sequence so an effect applies to all of them",
          "Exporting",
          "Adding audio"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Nesting groups clips so one effect treats them as a single clip. (a) is wrong: deleting is the Delete key. (c) is wrong: exporting is File > Export > Media. (d) is wrong: audio is added on audio tracks."
      },
      {
        "module": 10,
        "q": "Why save an effect as a preset?",
        "choices": [
          "It makes the file smaller",
          "So a look or treatment can be reused on the next clip or project",
          "It deletes the effect",
          "It speeds up the computer"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Presets save time and keep a consistent look. (a) is wrong: presets do not change file size. (c) is wrong: saving a preset does not delete anything. (d) is wrong: presets do not affect computer speed."
      },
      {
        "module": 10,
        "q": "What does the stopwatch icon beside a setting do?",
        "choices": [
          "Deletes the setting",
          "Turns on keyframes for that setting",
          "Locks the setting",
          "Hides the setting"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The stopwatch enables keyframing so the value can change over time. (a) is wrong: deleting is a different action. (c) is wrong: locking is not done with a stopwatch. (d) is wrong: hiding is not done with a stopwatch."
      },
      {
        "module": 10,
        "q": "Your exported video is only 12 seconds long but the timeline is 60 seconds. What went wrong?",
        "choices": [
          "The wrong codec",
          "The export range was set to the Work Area instead of the Entire Sequence",
          "The frame rate is wrong",
          "The audio is muted"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The Work Area covered only 12 seconds, so only that exported. (a) is wrong: the codec affects quality, not length. (c) is wrong: frame rate affects motion, not duration. (d) is wrong: muted audio does not shorten a video."
      },
      {
        "module": 10,
        "q": "Which codec should you use for a master copy to keep for future edits?",
        "choices": [
          "H.264",
          "ProRes or DNxHR",
          "GIF",
          "MP3"
        ],
        "answer": 1,
        "explanation": "Correct: (b). ProRes and DNxHR are high-quality master codecs with no quality loss. (a) is wrong: H.264 is a delivery codec that loses quality. (c) is wrong: GIF is for short looping images. (d) is wrong: MP3 is an audio format."
      }
    ]
  }
};
