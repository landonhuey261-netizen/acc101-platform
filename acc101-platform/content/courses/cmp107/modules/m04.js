// cmp107 - Module 4: Linux Essentials
module.exports = {
  "number": 4,
  "slug": "linux-essentials",
  "title": "Linux Essentials",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what Linux is and what a distribution is.",
    "Navigate the Linux desktop and file system.",
    "Use basic terminal commands: ls, pwd, cd, cp, mv, rm, and mkdir.",
    "Install and update software with a package manager.",
    "Explain file permissions and the role of sudo."
  ],
  "sections": [
    {
      "heading": "What Linux Is, and Why It Matters",
      "html": "<p>Linux is a free, open-source operating system. Unlike Windows and macOS, which are owned by one company, Linux is built by a worldwide community, and its source code is open for anyone to read and improve. It powers most of the world's web servers, most Android phones, and a huge share of cloud computers.</p>\n<p>Linux comes in versions called distributions, or distros. Ubuntu is the most popular for beginners, with a friendly desktop and a large community. Fedora, Debian, and Linux Mint are other well-known choices. They all share the same Linux core, called the kernel, but they differ in their desktop look, their apps, and how software is installed.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> You do not need to switch to Linux to benefit from learning it. Knowing Linux basics is a core skill for IT support, because so many servers and tools run on it.</div></p>\n"
    },
    {
      "heading": "The Linux Desktop and File System",
      "html": "<p>A Linux desktop such as Ubuntu's GNOME looks familiar: a dock or taskbar, an applications menu, and a file manager for browsing folders. The file manager works like File Explorer or Finder, with folders such as Home, Documents, Downloads, and Pictures.</p>\n<p>Underneath, Linux organizes everything into one tree starting at the root, written as /. Your personal files live in your home folder, /home/yourname. System files live in folders such as /etc for settings and /usr for programs. Unlike Windows, Linux does not use drive letters like C: — everything is one tree.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> File names in Linux are case-sensitive: Report.txt and report.txt are two different files. That trips up Windows users constantly, so type file names exactly.</div></p>\n"
    },
    {
      "heading": "The Terminal: Your Most Powerful Tool",
      "html": "<p>The terminal is a text window where you type commands to Linux. Open it with Ctrl + Alt + T on Ubuntu, or find Terminal in the applications menu. A few commands do most of the work: pwd shows where you are, ls lists the files in a folder, cd moves to another folder, mkdir creates a folder, cp copies, mv moves or renames, and rm deletes.</p>\n<p>Try a safe sequence: pwd to see your location, ls to see your files, mkdir practice to make a folder, cd practice to enter it, and cd .. to go back up one level. The command man followed by a command name, such as man ls, shows the built-in manual for that command.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> The terminal is not scary once you learn ten commands, and it is often faster than clicking. But rm deletes permanently — there is no Recycle Bin in the terminal — so check what you are deleting before you press Enter.</div></p>\n"
    },
    {
      "heading": "Installing Software and Permissions",
      "html": "<p>Linux installs software with a package manager. On Ubuntu and Debian, the commands are sudo apt update to refresh the list of available software, then sudo apt install firefox to install a program. The system checks the software, downloads it, and keeps it updated along with everything else.</p>\n<p>The word sudo means run this command as the administrator. Linux keeps normal users separate from the administrator account, called root, so a mistake or a malicious program cannot easily damage the system. You will be asked for your password when you use sudo, and you should only use it for commands you understand.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Every file in Linux has permissions: read, write, and execute, for the owner, the owner's group, and everyone else. The command ls -l shows them as letters such as rwxr-xr-x. The command chmod changes them. Do not set everything to full permissions just to make something work — that removes the protection permissions exist to give you.</div></p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong></p>\n<ul>\n<li>Explain what Linux is and what a distribution is.</li>\n<li>Navigate the Linux desktop and file system.</li>\n<li>Use basic terminal commands: ls, pwd, cd, cp, mv, rm, and mkdir.</li>\n<li>Install and update software with a package manager.</li>\n<li>Explain file permissions and the role of sudo.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Using rm carelessly in the terminal. It deletes permanently with no Recycle Bin, so always check the file name and folder first.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Typing sudo in front of every command. Only use administrator rights when the task actually needs them.</div>\n<p><strong>Ready-to-Work link:</strong> If you can explain this module's main idea out loud in plain words, without looking, you have this module.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Linux",
      "def": "A free, open-source operating system used on servers, desktops, and Android phones."
    },
    {
      "term": "Distribution (distro)",
      "def": "A packaged version of Linux, such as Ubuntu, Fedora, or Debian."
    },
    {
      "term": "Ubuntu",
      "def": "The most popular Linux distribution for beginners."
    },
    {
      "term": "Kernel",
      "def": "The core of Linux that manages the hardware and runs programs."
    },
    {
      "term": "Terminal",
      "def": "A text window for typing commands to the operating system."
    },
    {
      "term": "Home folder",
      "def": "The folder holding one user's personal files, such as /home/yourname."
    },
    {
      "term": "Root",
      "def": "The top of the Linux file tree (/), and also the name of the administrator account."
    },
    {
      "term": "sudo",
      "def": "The command that runs another command with administrator rights."
    },
    {
      "term": "Package manager",
      "def": "The tool that installs, updates, and removes software on Linux, such as apt."
    },
    {
      "term": "apt",
      "def": "The package manager used by Ubuntu and Debian."
    },
    {
      "term": "Permission",
      "def": "A rule saying who may read, write, or run a file."
    },
    {
      "term": "chmod",
      "def": "The terminal command that changes a file's permissions."
    },
    {
      "term": "ls",
      "def": "The terminal command that lists the files in a folder."
    },
    {
      "term": "cd",
      "def": "The terminal command that changes to another folder."
    },
    {
      "term": "GNOME",
      "def": "The desktop environment used by Ubuntu and several other Linux distributions."
    }
  ],
  "video": {
    "title": "Linux - CompTIA A+ 220-1202 - 1.9",
    "embedUrl": "https://www.youtube.com/embed/cpc3bHzWKG4",
    "note": "Professor Messer on Linux, then Linux commands parts 1 and 2. Try each command in a terminal as you watch, in a practice folder.",
    "more": [
      {
        "title": "Linux Commands Part 1 - CompTIA A+ 220-1202 - 1.9",
        "url": "https://www.youtube.com/watch?v=ig0X_dR68Ac"
      },
      {
        "title": "Linux Commands Part 2 - CompTIA A+ 220-1202 - 1.9",
        "url": "https://www.youtube.com/watch?v=rtL8aKAFlqc"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Linux” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Linux — A free, open-source operating system used on servers, desktops, and Android phones. Step 2: It matters because it is part of: Explain what Linux is and what a distribution is. Step 3: An example from the module is the way linux shows up in everyday use, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Distribution (distro)” and “Ubuntu”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Distribution (distro) — A packaged version of Linux, such as Ubuntu, Fedora, or Debian. Step 2: Ubuntu — The most popular Linux distribution for beginners. Step 3: They differ because the first is about distribution (distro) while the second is about ubuntu; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Navigate the Linux desktop and file system.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Navigate the Linux desktop and file system. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “Kernel” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: Kernel — The core of Linux that manages the hardware and runs programs. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Terminal — A text window for typing commands to the operating system. Step 2: Home folder — The folder holding one user's personal files, such as /home/yourname. Step 3: Root — The top of the Linux file tree (/), and also the name of the administrator account. Step 4: sudo — The command that runs another command with administrator rights. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Use basic terminal commands: ls, pwd, cd, cp, mv, rm, and mkdir. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Linux” mean?",
      "choices": [
        "A free, open-source operating system used on servers, desktops, and Android phones.",
        "A packaged version of Linux, such as Ubuntu, Fedora, or Debian.",
        "The most popular Linux distribution for beginners.",
        "The core of Linux that manages the hardware and runs programs."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Linux means: A free, open-source operating system used on servers, desktops, and Android phones. (b) is the definition of Distribution (distro), not of Linux. (c) is the definition of Ubuntu, not of Linux. (d) is the definition of Kernel, not of Linux."
    },
    {
      "q": "What does the term “Distribution (distro)” mean?",
      "choices": [
        "The most popular Linux distribution for beginners.",
        "A packaged version of Linux, such as Ubuntu, Fedora, or Debian.",
        "The core of Linux that manages the hardware and runs programs.",
        "A text window for typing commands to the operating system."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Distribution (distro) means: A packaged version of Linux, such as Ubuntu, Fedora, or Debian. (a) is the definition of Ubuntu, not of Distribution (distro). (c) is the definition of Kernel, not of Distribution (distro). (d) is the definition of Terminal, not of Distribution (distro)."
    },
    {
      "q": "What does the term “Ubuntu” mean?",
      "choices": [
        "The core of Linux that manages the hardware and runs programs.",
        "A text window for typing commands to the operating system.",
        "The most popular Linux distribution for beginners.",
        "The folder holding one user's personal files, such as /home/yourname."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Ubuntu means: The most popular Linux distribution for beginners. (a) is the definition of Kernel, not of Ubuntu. (b) is the definition of Terminal, not of Ubuntu. (d) is the definition of Home folder, not of Ubuntu."
    },
    {
      "q": "What does the term “Kernel” mean?",
      "choices": [
        "A text window for typing commands to the operating system.",
        "The folder holding one user's personal files, such as /home/yourname.",
        "The top of the Linux file tree (/), and also the name of the administrator account.",
        "The core of Linux that manages the hardware and runs programs."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Kernel means: The core of Linux that manages the hardware and runs programs. (a) is the definition of Terminal, not of Kernel. (b) is the definition of Home folder, not of Kernel. (c) is the definition of Root, not of Kernel."
    },
    {
      "q": "Which term means: A text window for typing commands to the operating system.",
      "choices": [
        "Terminal",
        "Home folder",
        "Root",
        "sudo"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Terminal is the term for: A text window for typing commands to the operating system. (b) Home folder means The folder holding one user's personal files, such as /home/yourname. (c) Root means The top of the Linux file tree (/), and also the name of the administrator account. (d) sudo means The command that runs another command with administrator rights."
    },
    {
      "q": "Which term means: The folder holding one user's personal files, such as /home/yourname.",
      "choices": [
        "Root",
        "Home folder",
        "sudo",
        "Package manager"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Home folder is the term for: The folder holding one user's personal files, such as /home/yourname. (a) Root means The top of the Linux file tree (/), and also the name of the administrator account. (c) sudo means The command that runs another command with administrator rights. (d) Package manager means The tool that installs, updates, and removes software on Linux, such as apt."
    },
    {
      "q": "Which term means: The top of the Linux file tree (/), and also the name of the administrator account.",
      "choices": [
        "sudo",
        "Package manager",
        "Root",
        "apt"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Root is the term for: The top of the Linux file tree (/), and also the name of the administrator account. (a) sudo means The command that runs another command with administrator rights. (b) Package manager means The tool that installs, updates, and removes software on Linux, such as apt. (d) apt means The package manager used by Ubuntu and Debian."
    },
    {
      "q": "Which term means: The command that runs another command with administrator rights.",
      "choices": [
        "Package manager",
        "apt",
        "Permission",
        "sudo"
      ],
      "answer": 3,
      "explanation": "Correct: (d). sudo is the term for: The command that runs another command with administrator rights. (a) Package manager means The tool that installs, updates, and removes software on Linux, such as apt. (b) apt means The package manager used by Ubuntu and Debian. (c) Permission means A rule saying who may read, write, or run a file."
    }
  ],
  "studyGuide": "\n<h3>Module 4 — Linux Essentials: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain what Linux is and what a distribution is.</p>\n<p><strong>Key terms:</strong> Linux · Distribution (distro) · Ubuntu · Kernel · Terminal · Home folder · Root · sudo.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain what Linux is and what a distribution is.</li>\n<li>Navigate the Linux desktop and file system.</li>\n<li>Use basic terminal commands: ls, pwd, cd, cp, mv, rm, and mkdir.</li>\n</ul>\n<p><strong>Watch out:</strong> Never type a command you do not understand into a terminal, and never run a program as an administrator unless you know exactly what it is and where it came from.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
