// cmp107 - Module 6: Files, Folders & Permissions
module.exports = {
  "number": 6,
  "slug": "files-folders-and-permissions",
  "title": "Files, Folders & Permissions",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain how files and folders are organized on a computer.",
    "Name common file types and the programs that open them.",
    "Create, rename, move, copy, and delete files safely.",
    "Explain file systems: NTFS, APFS, ext4, FAT32, and exFAT.",
    "Explain permissions and who is allowed to read, change, or run a file."
  ],
  "sections": [
    {
      "heading": "Files, Folders, and the Tree",
      "html": "<p>Everything on a computer is a file, organized into folders, which are themselves organized into a tree. At the top of the tree is the root. On Windows, each drive has its own tree, starting at a letter such as C:. On macOS and Linux, there is one tree starting at /, and drives appear as folders inside it.</p>\n<p>Your personal files live in your home folder: C:\\Users\\YourName on Windows, /Users/YourName on a Mac, /home/yourname on Linux. Inside it are the familiar folders: Desktop, Documents, Downloads, Pictures, Music, and Videos. Learning to put files in the right folder, with a clear name, is the single most useful computer habit there is.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> A good file name says what the file is and when it is from, such as 2026-11-16-invoice-acme.pdf. Dates written year-month-day sort correctly, and version numbers such as v2 stop you overwriting the only copy of a document.</div></p>\n"
    },
    {
      "heading": "File Types and Extensions",
      "html": "<p>A file's extension, the letters after the dot in its name, tells the computer what kind of file it is: .docx for a Word document, .pdf for a portable document, .jpg and .png for photos, .mp3 for music, .mp4 for video, .zip for a compressed archive, and .exe for a Windows program. Windows hides extensions by default; turn them on in File Explorer under View, then Show, then File name extensions, so you can see what a file really is.</p>\n<p>Some extensions are dangerous when they arrive by email or download: .exe, .bat, .scr, and .msi can run code on your computer. A file called invoice.pdf.exe is a program pretending to be a document, and that is exactly why seeing extensions matters.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> When you are not sure what opens a file, right-click it and choose Open with. The operating system will suggest programs, and you can pick the one you want without changing anything permanently.</div></p>\n"
    },
    {
      "heading": "File Systems: NTFS, APFS, ext4, FAT32, exFAT",
      "html": "<p>A file system is the method the operating system uses to store files on a disk. Windows uses NTFS for its system drive, macOS uses APFS, and Linux uses ext4. Each one supports permissions, large files, and journaling, which is a log that helps the disk recover after a crash.</p>\n<p>USB sticks and memory cards usually use FAT32 or exFAT. FAT32 is old and widely compatible, but it cannot store a single file larger than 4 GB. exFAT is the modern choice for USB drives: it works on Windows, macOS, and Linux, and it handles large files. When you format a USB drive, pick exFAT unless you have a specific reason not to.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Formatting a drive erases everything on it. Never format a drive until you have checked what is on it and backed up anything you need.</div></p>\n"
    },
    {
      "heading": "Permissions: Who May Do What",
      "html": "<p>Permissions decide who can read, change, or run a file. On Windows, right-click a file or folder, choose Properties, then Security, to see who has access. On a Mac, right-click and choose Get Info, then look at Sharing and Permissions. On Linux, the command ls -l shows permissions as letters such as rwxr-xr-x.</p>\n<p>Permissions exist to protect you. Your documents should be readable and changeable by you, but not by every other user on the computer, and system files should not be changeable by anyone except the administrator. When a program asks you to change permissions to make something work, be suspicious: there is usually a safer fix.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> The most important permission habit is simple: do not run as an administrator for everyday work. Use a standard account, and give the administrator password only when a specific, trusted task asks for it.</div></p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong></p>\n<ul>\n<li>Explain how files and folders are organized on a computer.</li>\n<li>Name common file types and the programs that open them.</li>\n<li>Create, rename, move, copy, and delete files safely.</li>\n<li>Explain file systems: NTFS, APFS, ext4, FAT32, and exFAT.</li>\n<li>Explain permissions and who is allowed to read, change, or run a file.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Deleting files with Shift + Delete on Windows, which skips the Recycle Bin. Use plain Delete so you can recover a mistake.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Formatting a USB drive without checking what is on it first. Formatting erases everything, with no undo.</div>\n<p><strong>Ready-to-Work link:</strong> If you can explain this module's main idea out loud in plain words, without looking, you have this module.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "File",
      "def": "A named collection of data stored on a disk, such as a document or photo."
    },
    {
      "term": "Folder",
      "def": "A container that holds files and other folders."
    },
    {
      "term": "Extension",
      "def": "The letters after the dot in a file name, showing what kind of file it is."
    },
    {
      "term": "Home folder",
      "def": "The folder holding one user's personal files."
    },
    {
      "term": "NTFS",
      "def": "The file system Windows uses for its system drive."
    },
    {
      "term": "APFS",
      "def": "The file system macOS uses for its system drive."
    },
    {
      "term": "ext4",
      "def": "The file system most Linux distributions use."
    },
    {
      "term": "FAT32",
      "def": "An old, widely compatible file system that cannot store files over 4 GB."
    },
    {
      "term": "exFAT",
      "def": "The modern file system for USB drives, working on Windows, macOS, and Linux."
    },
    {
      "term": "Formatting",
      "def": "Preparing a drive for use, which erases everything on it."
    },
    {
      "term": "Permission",
      "def": "A rule saying who may read, change, or run a file."
    },
    {
      "term": "Read-only",
      "def": "A file setting that allows reading but not changing."
    },
    {
      "term": "Archive (.zip)",
      "def": "A compressed file that holds one or more files inside it."
    },
    {
      "term": "Recycle Bin / Trash",
      "def": "Where deleted files go before they are permanently removed."
    },
    {
      "term": "Hidden file",
      "def": "A file the system hides from normal view, often a settings file."
    }
  ],
  "video": {
    "title": "File Systems - CompTIA A+ 220-1202 - 1.1",
    "embedUrl": "https://www.youtube.com/embed/lwCu2rpXP1E",
    "note": "Professor Messer on file systems, the Microsoft Management Console, and extra Windows tools. Note which file system each OS uses.",
    "more": [
      {
        "title": "The Microsoft Management Console - CompTIA A+ 220-1202 - 1.4",
        "url": "https://www.youtube.com/watch?v=e0KInDq-6Pw"
      },
      {
        "title": "Additional Windows Tools - CompTIA A+ 220-1202 - 1.4",
        "url": "https://www.youtube.com/watch?v=kLIUVFTTdcA"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “File” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: File — A named collection of data stored on a disk, such as a document or photo. Step 2: It matters because it is part of: Explain how files and folders are organized on a computer. Step 3: An example from the module is the way file shows up in everyday use, as described in the module sections. A good answer names the term correctly, explains it in plain words, and gives a real example.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Folder” and “Extension”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Folder — A container that holds files and other folders. Step 2: Extension — The letters after the dot in a file name, showing what kind of file it is. Step 3: They differ because the first is about folder while the second is about extension; a good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module's main idea: “Name common file types and the programs that open them.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Name common file types and the programs that open them. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Write a short scenario (3–4 sentences) in which someone gets “Home folder” wrong, and explain what the correct understanding or action would be.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The scenario shows the mistake clearly. Step 2: The correct view is: Home folder — The folder holding one user's personal files. Step 3: The fix follows from that definition and from the module's safety and accuracy rules. A good answer names the mistake, the correct fact, and the correct action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: NTFS — The file system Windows uses for its system drive. Step 2: APFS — The file system macOS uses for its system drive. Step 3: ext4 — The file system most Linux distributions use. Step 4: FAT32 — An old, widely compatible file system that cannot store files over 4 GB. (Any four module terms, explained in the student's own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the single most important safety or accuracy point in this module, and what could go wrong if someone ignores it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the point — it comes from this module's objectives: Create, rename, move, copy, and delete files safely. Step 2: Explain why it matters in plain words. Step 3: Describe one realistic consequence of ignoring it, and the correct habit instead. A good answer is specific to this module, not a general statement about being careful.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “File” mean?",
      "choices": [
        "A named collection of data stored on a disk, such as a document or photo.",
        "A container that holds files and other folders.",
        "The letters after the dot in a file name, showing what kind of file it is.",
        "The folder holding one user's personal files."
      ],
      "answer": 0,
      "explanation": "Correct: (a). File means: A named collection of data stored on a disk, such as a document or photo. (b) is the definition of Folder, not of File. (c) is the definition of Extension, not of File. (d) is the definition of Home folder, not of File."
    },
    {
      "q": "What does the term “Folder” mean?",
      "choices": [
        "The letters after the dot in a file name, showing what kind of file it is.",
        "A container that holds files and other folders.",
        "The folder holding one user's personal files.",
        "The file system Windows uses for its system drive."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Folder means: A container that holds files and other folders. (a) is the definition of Extension, not of Folder. (c) is the definition of Home folder, not of Folder. (d) is the definition of NTFS, not of Folder."
    },
    {
      "q": "What does the term “Extension” mean?",
      "choices": [
        "The folder holding one user's personal files.",
        "The file system Windows uses for its system drive.",
        "The letters after the dot in a file name, showing what kind of file it is.",
        "The file system macOS uses for its system drive."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Extension means: The letters after the dot in a file name, showing what kind of file it is. (a) is the definition of Home folder, not of Extension. (b) is the definition of NTFS, not of Extension. (d) is the definition of APFS, not of Extension."
    },
    {
      "q": "What does the term “Home folder” mean?",
      "choices": [
        "The file system Windows uses for its system drive.",
        "The file system macOS uses for its system drive.",
        "The file system most Linux distributions use.",
        "The folder holding one user's personal files."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Home folder means: The folder holding one user's personal files. (a) is the definition of NTFS, not of Home folder. (b) is the definition of APFS, not of Home folder. (c) is the definition of ext4, not of Home folder."
    },
    {
      "q": "Which term means: The file system Windows uses for its system drive.",
      "choices": [
        "NTFS",
        "APFS",
        "ext4",
        "FAT32"
      ],
      "answer": 0,
      "explanation": "Correct: (a). NTFS is the term for: The file system Windows uses for its system drive. (b) APFS means The file system macOS uses for its system drive. (c) ext4 means The file system most Linux distributions use. (d) FAT32 means An old, widely compatible file system that cannot store files over 4 GB."
    },
    {
      "q": "Which term means: The file system macOS uses for its system drive.",
      "choices": [
        "ext4",
        "APFS",
        "FAT32",
        "exFAT"
      ],
      "answer": 1,
      "explanation": "Correct: (b). APFS is the term for: The file system macOS uses for its system drive. (a) ext4 means The file system most Linux distributions use. (c) FAT32 means An old, widely compatible file system that cannot store files over 4 GB. (d) exFAT means The modern file system for USB drives, working on Windows, macOS, and Linux."
    },
    {
      "q": "Which term means: The file system most Linux distributions use.",
      "choices": [
        "FAT32",
        "exFAT",
        "ext4",
        "Formatting"
      ],
      "answer": 2,
      "explanation": "Correct: (c). ext4 is the term for: The file system most Linux distributions use. (a) FAT32 means An old, widely compatible file system that cannot store files over 4 GB. (b) exFAT means The modern file system for USB drives, working on Windows, macOS, and Linux. (d) Formatting means Preparing a drive for use, which erases everything on it."
    },
    {
      "q": "Which term means: An old, widely compatible file system that cannot store files over 4 GB.",
      "choices": [
        "exFAT",
        "Formatting",
        "Permission",
        "FAT32"
      ],
      "answer": 3,
      "explanation": "Correct: (d). FAT32 is the term for: An old, widely compatible file system that cannot store files over 4 GB. (a) exFAT means The modern file system for USB drives, working on Windows, macOS, and Linux. (b) Formatting means Preparing a drive for use, which erases everything on it. (c) Permission means A rule saying who may read, change, or run a file."
    }
  ],
  "studyGuide": "\n<h3>Module 6 — Files, Folders & Permissions: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain how files and folders are organized on a computer.</p>\n<p><strong>Key terms:</strong> File · Folder · Extension · Home folder · NTFS · APFS · ext4 · FAT32.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain how files and folders are organized on a computer.</li>\n<li>Name common file types and the programs that open them.</li>\n<li>Create, rename, move, copy, and delete files safely.</li>\n</ul>\n<p><strong>Watch out:</strong> Never type a command you do not understand into a terminal, and never run a program as an administrator unless you know exactly what it is and where it came from.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
