module.exports = {
  "number": 7,
  "slug": "security-access-control-cctv-basics",
  "title": "Security, Access Control & CCTV Basics",
  "estTime": "3–4 hours",
  "objectives": [
    "Describe the parts of an access control system: credentials, readers, controllers, and locks.",
    "Compare magnetic locks, electric strikes, and electrified locksets.",
    "Describe the parts of a CCTV system: cameras, recorders, and viewing.",
    "Explain PoE's role in modern camera and access systems.",
    "Explain the technician's limits: install and wire, never decide who gets access."
  ],
  "sections": [
    {
      "heading": "Access Control: Who Gets In, and How the Door Knows",
      "html": "<p>Access control answers one question at every door: is this person allowed in, right now? The system has four parts. The <strong>credential</strong> is what the person presents: a key card, a fob, a PIN, a fingerprint, or a phone. The <strong>reader</strong> is the device on the wall that reads the credential. The <strong>controller</strong> is the brain that checks the credential against its list of who is allowed where and when. And the <strong>lock</strong> is the hardware that holds or releases the door.</p><p>When a person presents a credential, the reader sends it to the controller, the controller checks the schedule and the permissions, and if the person is allowed, the controller releases the lock for a few seconds and logs the event — who, which door, what time. If the person is not allowed, the door stays locked and the attempt is logged. The log is a big part of the system's value: after an incident, the owner can see exactly who entered and when. The technician installs the readers, the controllers, the locks, and the cable between them; the building owner or security manager decides who gets access — the technician never makes that decision.</p>"
    },
    {
      "heading": "Locks: Maglocks, Electric Strikes, and Electrified Locksets",
      "html": "<p>The three common locking devices each work differently. A <strong>magnetic lock (maglock)</strong> is an electromagnet mounted on the frame that holds a steel plate on the door with hundreds of pounds of force while powered. Cut the power and the door opens — which is why maglocks are wired fail-safe, so that a power failure or a fire alarm releases the door and nobody is trapped. An <strong>electric strike</strong> replaces the fixed strike plate in the door frame: when powered, it releases the latch bolt so the door can be pushed open, and it can be wired fail-secure so the door stays locked when power fails. An <strong>electrified lockset</strong> puts the locking mechanism inside the door hardware itself, powered through a hinge or a power transfer device.</p><p>Fail-safe versus fail-secure is a life-safety decision, and it is made by the designer and the authority having jurisdiction, not by the installer. A door on an exit path must release when the fire alarm sounds — that is a code requirement, and it is tested at acceptance. The technician must wire it exactly as drawn and must verify the release works: present a credential, confirm the door releases, then trip the fire alarm input and confirm the door releases again. A door that traps people in a fire is a catastrophe, and the wiring that prevents it is the technician's responsibility to get right.</p><div class=\"callout\"><strong>Key idea:</strong> Fail-safe means the door unlocks when power fails; fail-secure means it stays locked. Exit-path doors must release on fire alarm — wire it as drawn and test the release, every time.</div>"
    },
    {
      "heading": "CCTV: Cameras, Recorders, and the Network",
      "html": "<p>A CCTV system has three parts: <strong>cameras</strong> that capture the picture, a <strong>recorder</strong> (an NVR for IP cameras, a DVR for older analog cameras) that stores the video, and <strong>viewing</strong> — monitors at a desk, or a phone app for the owner. Modern cameras are IP devices: they plug into the structured cabling, get power from PoE, and send video to the NVR over the network. Older systems used coaxial cable and analog cameras feeding a DVR, and many buildings still have them.</p><p>The technician's work in CCTV is mostly about placement and the path: the camera must see what it is supposed to see, the cable must reach it, the PoE budget must cover it, and the NVR must have enough storage for the retention period the owner wants — commonly 30 days, which depends on the number of cameras, the resolution, the frame rate, and whether the cameras record continuously or only on motion. A camera pointed at a blank wall, a camera with no light at night, or a recorder that overwrites after two days are all installation failures, and they are all discovered at the worst possible time — after an incident, when the video is needed.</p>"
    },
    {
      "heading": "The Technician's Limits: Install It, Don't Decide It",
      "html": "<p>Security work comes with a boundary that matters. The technician installs, wires, terminates, tests, and documents the system. The technician does not decide who is allowed in, does not set the access schedules, does not review the video, and does not share credentials or access. Those decisions belong to the building owner and the security manager, and the technician's job is to make the system do what they decided — reliably, and with a record.</p><p>There are also legal boundaries. Camera placement must respect privacy law and the owner's policy: cameras in restrooms, locker rooms, and other private areas are not installed, and audio recording has its own legal rules that vary by state. In Michigan, as elsewhere, the technician follows the drawings, the owner's written policy, and the law — and if a request seems wrong, the technician raises it with the supervisor instead of doing it quietly. A professional technician protects the system, the people in the building, and themselves by staying inside those limits.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Access control has four parts: credential, reader, controller, lock — and a log of every event.</li><li>Maglocks are fail-safe (release on power loss); electric strikes can be fail-secure; exit-path doors must release on fire alarm.</li><li>Modern CCTV is IP cameras on PoE, recording to an NVR; older systems are analog cameras on coax to a DVR.</li><li>Camera placement, PoE budget, and recorder storage are all installation decisions that must be right before an incident, not after.</li><li>The technician installs and tests; the owner decides who gets access and where cameras go.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Wiring a maglock without the fire alarm release, or wiring it so the door stays locked when power fails. An exit-path door that traps people is a life-safety failure — test the release on every door.</div><div class=\"callout\"><strong>Common mistake:</strong> Sizing the NVR for the wrong retention period. Check the camera count, resolution, frame rate, and motion settings against the owner's retention requirement before the system is accepted.</div><p><strong>Ready-to-Work link:</strong> If you can explain the four parts of access control, compare maglocks and strikes, and describe an IP camera system end to end, you have this module. Module 8 moves into health care, where the same low-voltage skills serve patients: nurse call.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Access control",
      "def": "A system that controls who can enter a door, and when, using credentials, readers, controllers, and locks."
    },
    {
      "term": "Credential",
      "def": "What a person presents to prove who they are: a card, fob, PIN, fingerprint, or phone."
    },
    {
      "term": "Reader",
      "def": "The wall device that reads a credential and sends it to the controller."
    },
    {
      "term": "Controller",
      "def": "The brain of an access system that checks credentials against permissions and releases locks."
    },
    {
      "term": "Magnetic lock (maglock)",
      "def": "An electromagnet that holds a door shut while powered and releases when power is cut."
    },
    {
      "term": "Electric strike",
      "def": "A powered strike plate that releases the latch bolt so a door can be opened."
    },
    {
      "term": "Electrified lockset",
      "def": "Door hardware with the locking mechanism powered inside the lockset itself."
    },
    {
      "term": "Fail-safe",
      "def": "A lock that unlocks when power fails, so nobody is trapped."
    },
    {
      "term": "Fail-secure",
      "def": "A lock that stays locked when power fails."
    },
    {
      "term": "CCTV",
      "def": "Closed-circuit television — video surveillance cameras and recorders in a building."
    },
    {
      "term": "NVR",
      "def": "Network video recorder — stores video from IP cameras."
    },
    {
      "term": "DVR",
      "def": "Digital video recorder — stores video from older analog cameras."
    },
    {
      "term": "Retention period",
      "def": "How long recorded video is kept before it is overwritten, commonly 30 days."
    }
  ],
  "video": {
    "title": "How to Install a Wired Security Camera System",
    "embedUrl": "https://www.youtube.com/embed/jcqEqK2kXD8",
    "note": "Watch the video, then work the assignment below. As you watch, note every term from this module's key terms list and write down one question the video raises for you.",
    "more": [
      {
        "title": "How to Set Up a DVR Camera System",
        "url": "https://www.youtube.com/watch?v=PhJitqMDZJQ"
      },
      {
        "title": "How to Install Hikvision IP Video Intercom — Full Setup",
        "url": "https://www.youtube.com/watch?v=Tf0Y2peS1hc"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A small office wants a card reader on the front door and a camera over the entrance. List the equipment and the cable runs needed.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Card reader at the door, controller nearby, electric strike or maglock on the door, and cable from the reader to the controller and from the controller to the lock. Step 2: IP camera over the entrance, powered by PoE, cabled back to the switch and the NVR. Step 3: Both systems need a PoE/power plan and a tested release on the door.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A maglock is wired so the door stays locked when the power fails. What is wrong, and what is the fix?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A maglock holds by power — if the door stays locked with no power, it is not a maglock behaving normally, or it has been wired through a backup that holds it. Step 2: Maglocks must be fail-safe: power loss must release the door. Step 3: Rewire per the drawings, verify the fire alarm release, and test that the door opens on power loss.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> An NVR must store 30 days of video from 8 cameras. What four factors decide how much storage is needed?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Number of cameras. Step 2: Resolution of each camera. Step 3: Frame rate. Step 4: Continuous recording versus motion-only recording. (All four multiply together to set the storage size.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A door on an exit path has a card reader and a maglock. What must happen when the fire alarm sounds, and how do you prove it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The door must release automatically when the fire alarm sounds, so people can exit. Step 2: Prove it by test — activate the fire alarm input and confirm the door releases, then restore the system. Step 3: Document the test; the release is a life-safety function, not a convenience.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A camera shows a blank wall at night. Name two installation faults that could cause this and how to fix each.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Aiming — the camera was mounted or aimed without checking the field of view; re-aim it and check the picture on the monitor. Step 2: Lighting or infrared — the camera has no light to see by at night; add lighting or confirm the camera's infrared night mode is enabled and working.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A building owner asks you to put a camera in a locker room. What do you do?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Do not install it — cameras do not go in restrooms, locker rooms, or other private areas. Step 2: Explain that camera placement follows the owner's written policy and the law, and private areas are off limits. Step 3: Raise the request with your supervisor instead of doing it quietly.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The four parts of an access control system are:",
      "choices": [
        "Camera, monitor, cable, and power",
        "Credential, reader, controller, and lock",
        "Panel, battery, horn, and strobe",
        "Switch, router, server, and printer"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Credential, reader, controller, and lock — plus a log of events. (a) Those are CCTV parts. (c) Those are fire alarm parts. (d) Those are network parts."
    },
    {
      "q": "A magnetic lock is wired fail-safe, which means:",
      "choices": [
        "It stays locked when power fails",
        "It releases when power fails, so nobody is trapped",
        "It never fails",
        "It locks harder when power fails"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Fail-safe means power loss releases the door. (a) That is fail-secure. (c) No lock never fails. (d) A maglock holds by power — no power means no hold."
    },
    {
      "q": "An NVR stores video from:",
      "choices": [
        "Analog cameras on coax",
        "IP cameras on the network",
        "A VCR",
        "A telephone line"
      ],
      "answer": 1,
      "explanation": "Correct: (b). An NVR records IP cameras. (a) Analog cameras record to a DVR. (c) A VCR is obsolete tape storage. (d) Video does not record from a telephone line."
    },
    {
      "q": "When the fire alarm sounds, a door on an exit path with a maglock must:",
      "choices": [
        "Stay locked",
        "Release so people can exit",
        "Lock twice",
        "Sound a horn"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Exit-path doors must release on fire alarm. (a) Staying locked would trap people. (c) Locking twice is not a thing. (d) The door does not sound a horn — the fire alarm does."
    },
    {
      "q": "The retention period of a CCTV system is:",
      "choices": [
        "How long the cameras last",
        "How long recorded video is kept before it is overwritten",
        "How long the cable is",
        "How long the installer stays on site"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Retention is how long video is stored — commonly 30 days. (a) Camera lifespan is different. (c) Cable length is a channel limit. (d) The installer leaves after acceptance."
    },
    {
      "q": "A modern IP camera is usually powered by:",
      "choices": [
        "A 120 V outlet at the camera",
        "PoE from the network switch",
        "A car battery",
        "Solar only"
      ],
      "answer": 1,
      "explanation": "Correct: (b). IP cameras are usually powered by PoE over the data cable. (a) A local outlet is sometimes used but is not the usual method. (c) A car battery is not used. (d) Solar is not the usual power source for a building camera."
    },
    {
      "q": "Who decides who is allowed through an access-controlled door?",
      "choices": [
        "The installing technician",
        "The building owner or security manager",
        "The lock manufacturer",
        "The cable supplier"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Access decisions belong to the owner or security manager. (a) The technician installs the system but does not grant access. (c) The manufacturer makes the hardware. (d) The supplier sells the cable."
    },
    {
      "q": "Cameras must NOT be installed in:",
      "choices": [
        "A parking lot",
        "A building entrance",
        "Restrooms and locker rooms",
        "A warehouse aisle"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Private areas such as restrooms and locker rooms are off limits for cameras. (a), (b), and (d) Parking lots, entrances, and warehouse aisles are normal camera locations."
    }
  ],
  "studyGuide": "\n<h3>Module 7 — Security, Access & CCTV: Quick Reference</h3>\n<p><strong>Core idea:</strong> Access control = credential + reader + controller + lock, with a log of every event. CCTV = cameras + recorder + viewing.</p>\n<p><strong>Locks:</strong> Maglock — holds by power, fail-safe, releases on power loss · Electric strike — releases the latch, can be fail-secure · Electrified lockset — locking inside the hardware.</p>\n<p><strong>Doors:</strong> Exit-path doors must release on fire alarm. Test the release on every door.</p>\n<p><strong>CCTV:</strong> IP cameras on PoE to an NVR · older analog cameras on coax to a DVR · retention commonly 30 days.</p>\n<p><strong>Limits:</strong> The technician installs and tests; the owner decides access and camera placement. No cameras in private areas.</p>\n<p><strong>Self-check:</strong> Explain what happens at a door from card presentation to lock release, and what happens on fire alarm. If you can, you have this module.</p>\n"
};
