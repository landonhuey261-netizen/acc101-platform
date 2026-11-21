module.exports = {
  "number": 4,
  "slug": "a-plus-core-2-review-operating-systems",
  "title": "A+ Core 2 Review: Operating Systems",
  "estTime": "3–4 hours",
  "objectives": [
    "Compare Windows editions and features, and explain how to install, upgrade, and update Windows.",
    "Explain file systems (NTFS, FAT32, exFAT), GPT vs MBR, and disk management tasks.",
    "Use the key Windows tools: Task Manager, Control Panel vs Settings, MMC, Disk Management, and the command line.",
    "Explain macOS and Linux basics, including common Linux commands and file permissions.",
    "Troubleshoot common OS problems: boot failures, slow performance, and update errors."
  ],
  "sections": [
    {
      "heading": "Windows: Editions, Installs, and Updates",
      "html": "<p>Core 2 is mostly Windows. <strong>Windows 11</strong> is the current desktop version; <strong>Windows 10</strong> is the previous one. The editions matter: <strong>Home</strong> is for personal use, <strong>Pro</strong> adds BitLocker encryption, Remote Desktop hosting, and joining a domain, and <strong>Enterprise</strong> adds large-organisation management tools. A <strong>clean install</strong> wipes the drive and starts fresh; an <strong>in-place upgrade</strong> keeps files and apps; a <strong>repair install</strong> fixes a broken Windows without wiping data. Always back up before any install — the exam will punish you for skipping it.</p>\n<p><strong>Windows Update</strong> delivers security patches and feature updates. If updates fail, check the internet connection, disk space, and the Windows Update troubleshooter before anything exotic. <strong>System Restore</strong> rolls back system files and settings to a restore point without touching personal files. <strong>Recovery options</strong> include Startup Repair, Safe Mode (loads only the essential drivers — the first place to go when a bad driver stops Windows booting), and resetting the PC while keeping or removing personal files.</p>"
    },
    {
      "heading": "File Systems, Partitions, and Disk Management",
      "html": "<p>A <strong>file system</strong> is how the OS organises files on a disk. <strong>NTFS</strong> is the Windows standard: it supports file permissions, encryption, and large files. <strong>FAT32</strong> is old and works everywhere (USB sticks, cameras) but cannot hold a single file over 4 GB. <strong>exFAT</strong> is the modern swap format for flash drives — it handles large files and works on Windows and macOS. <strong>ReFS</strong> is a server file system built for resilience. The exam asks: which file system for a 5 GB video on a USB stick? exFAT — FAT32 cannot hold it.</p>\n<p>Disks are divided by a <strong>partition table</strong>: <strong>MBR</strong> is the old style, limited to 2 TB disks and four primary partitions; <strong>GPT</strong> is the modern style, supports huge disks and many partitions, and is required for UEFI boot. <strong>Disk Management</strong> is where you create, shrink, extend, and format partitions, and change drive letters. A <strong>dynamic disk</strong> can span volumes across disks; a <strong>basic disk</strong> is the normal kind. When a drive shows up in the BIOS but not in File Explorer, check Disk Management — it probably needs a drive letter or a format.</p>"
    },
    {
      "heading": "The Windows Toolbox: Task Manager, MMC, and the Command Line",
      "html": "<p>Learn where each tool lives. <strong>Task Manager</strong> (Ctrl+Shift+Esc) shows running processes, CPU, memory, disk and network use, and startup programs — a process eating 100% CPU is the first thing to check on a slow PC. <strong>Control Panel</strong> holds the classic settings; <strong>Settings</strong> is the modern app — the exam still asks about both. <strong>MMC (Microsoft Management Console)</strong> hosts snap-ins such as Device Manager, Disk Management, and Event Viewer. <strong>Event Viewer</strong> holds the logs: application crashes, failed logons, and driver errors all leave a trail there.</p>\n<p>The <strong>command line</strong> is faster than clicking for many jobs. <strong>ipconfig</strong> shows network settings; <strong>ping</strong> tests connectivity; <strong>sfc /scannow</strong> checks and repairs protected Windows files; <strong>chkdsk</strong> checks a disk for errors; <strong>diskpart</strong> manages disks and partitions; <strong>shutdown /r</strong> restarts the machine; <strong>taskkill</strong> ends a stuck process. <strong>PowerShell</strong> is the modern shell: it uses cmdlets such as Get-Process and is the tool for scripting admin tasks. The exam loves sfc /scannow for corrupt system files and chkdsk for disk errors — do not mix them up.</p>"
    },
    {
      "heading": "macOS and Linux: What Core 2 Expects You to Know",
      "html": "<p><strong>macOS</strong> runs on Apple hardware. The exam expects the basics: <strong>System Settings</strong> (formerly System Preferences) for configuration, <strong>Finder</strong> for files, <strong>Time Machine</strong> for backups, <strong>Disk Utility</strong> for disks, and <strong>Terminal</strong> for the command line. macOS uses the <strong>APFS</strong> file system. A Mac that will not boot may need a safe boot (hold Shift) or a macOS reinstall from Recovery.</p>\n<p><strong>Linux</strong> is the third OS on the exam. Know the commands: <strong>ls</strong> lists files, <strong>pwd</strong> shows the current directory, <strong>cd</strong> changes directory, <strong>cp</strong> copies, <strong>mv</strong> moves or renames, <strong>rm</strong> deletes, <strong>mkdir</strong> makes a directory, <strong>chmod</strong> changes permissions, <strong>grep</strong> searches text, <strong>ps</strong> lists processes, <strong>sudo</strong> runs a command as the administrator, and <strong>apt</strong> installs software on Debian-based systems. Linux file permissions are read, write, and execute for owner, group, and others. The <strong>root</strong> user has full control, and the exam expects you to know that a normal user needs sudo for admin tasks.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Windows: Home vs Pro (BitLocker, domain join, RDP host) vs Enterprise; clean install wipes, in-place upgrade keeps files; back up first.</li><li>File systems: NTFS for Windows, FAT32 max 4 GB per file, exFAT for large files on flash drives; GPT is modern, MBR is limited to 2 TB.</li><li>Tools: Task Manager for runaway processes, Event Viewer for logs, sfc /scannow for corrupt system files, chkdsk for disk errors.</li><li>macOS: System Settings, Finder, Time Machine, Disk Utility, APFS. Linux: ls, pwd, cd, cp, mv, rm, chmod, grep, sudo, apt.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Mixing up sfc /scannow and chkdsk — sfc repairs Windows system files, chkdsk checks the disk.</div><div class=\"callout\"><strong>Common mistake:</strong> Picking FAT32 for a file over 4 GB. The limit is per file, and exFAT is the answer for a USB stick.</div>\n<p><strong>Ready-to-Work link:</strong> If you can pick the right file system, name the right tool for a symptom, and run the basic Linux commands, you have this module. Module 5 is security: malware, social engineering, and locking things down.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Windows 11 Pro",
      "def": "The business edition of Windows: adds BitLocker encryption, Remote Desktop hosting, and domain join over Home."
    },
    {
      "term": "Clean install",
      "def": "Installing Windows on a wiped drive; removes all files and apps, so back up first."
    },
    {
      "term": "In-place upgrade",
      "def": "Upgrading Windows while keeping files, settings, and apps."
    },
    {
      "term": "Safe Mode",
      "def": "Windows started with only essential drivers — the first stop when a bad driver stops normal boot."
    },
    {
      "term": "System Restore",
      "def": "Rolls system files and settings back to a restore point without touching personal files."
    },
    {
      "term": "NTFS",
      "def": "New Technology File System: the Windows standard, with permissions, encryption, and large-file support."
    },
    {
      "term": "FAT32",
      "def": "An old file system that works everywhere but cannot hold a single file larger than 4 GB."
    },
    {
      "term": "exFAT",
      "def": "A modern flash-drive file system that handles large files and works on Windows and macOS."
    },
    {
      "term": "GPT",
      "def": "GUID Partition Table: the modern partition style for large disks and UEFI boot."
    },
    {
      "term": "MBR",
      "def": "Master Boot Record: the old partition style, limited to 2 TB disks and four primary partitions."
    },
    {
      "term": "Disk Management",
      "def": "The Windows tool for creating, shrinking, extending, and formatting partitions."
    },
    {
      "term": "Task Manager",
      "def": "Shows processes, CPU, memory, disk, and network use; ends stuck programs (Ctrl+Shift+Esc)."
    },
    {
      "term": "Event Viewer",
      "def": "The Windows logs: application crashes, failed logons, and driver errors are recorded here."
    },
    {
      "term": "sfc /scannow",
      "def": "A command that checks and repairs protected Windows system files."
    },
    {
      "term": "chkdsk",
      "def": "A command that checks a disk for file-system errors and bad sectors."
    },
    {
      "term": "APFS",
      "def": "Apple File System: the modern macOS file system."
    },
    {
      "term": "chmod",
      "def": "A Linux command that changes file permissions (read, write, execute)."
    },
    {
      "term": "sudo",
      "def": "A Linux command that runs a command with administrator (root) privileges."
    }
  ],
  "video": {
    "title": "Operating Systems Overview — CompTIA A+ 220-1202 (Professor Messer)",
    "embedUrl": "https://www.youtube.com/embed/IhcZqUs1IF8",
    "note": "Professor Messer introduces the Core 2 operating-systems domain. As you watch, list the three operating systems and the one tool you would open first for each symptom he mentions.",
    "more": [
      {
        "title": "An Overview of Windows — CompTIA A+ 220-1202 (Professor Messer)",
        "url": "https://www.youtube.com/watch?v=B7JZ6rfH06Q"
      },
      {
        "title": "Linux — CompTIA A+ 220-1202 (Professor Messer)",
        "url": "https://www.youtube.com/watch?v=cpc3bHzWKG4"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A user needs to copy a 6 GB video file onto a USB stick to give to a client whose computer runs macOS. The stick is formatted FAT32. What happens, and what should you do?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The copy fails — FAT32 cannot hold a single file larger than 4 GB. Step 2: Reformat the stick as exFAT, which handles large files and works on Windows and macOS. Step 3: Warn the user that formatting erases the stick, so copy anything on it first. Step 4: Copy the file again and verify it plays on the client's machine.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A PC is very slow. Task Manager shows one process using 95% CPU constantly. What is the most likely cause, and what do you do?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A runaway process — a stuck app, a bad update, or malware. Step 2: Note the process name, then end it in Task Manager and see if the PC recovers. Step 3: If it returns, check what the process belongs to: update or reinstall the app, or run a malware scan. Step 4: Check startup programs and disable anything unneeded.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Windows will not boot after a driver update, but Safe Mode works. What do you do, in order?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Boot into Safe Mode. Step 2: Open Device Manager and roll back the driver that was just updated. Step 3: If there is no roll-back, uninstall the driver and let Windows install a known-good one. Step 4: Restart normally and verify. Step 5: If it still fails, use System Restore to a point before the update.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A new 4 TB drive shows up in the BIOS but not in File Explorer. What is the most likely cause, and where do you fix it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The drive is probably uninitialised or has no drive letter or partition. Step 2: Open Disk Management. Step 3: Initialise the disk as GPT (MBR cannot handle over 2 TB). Step 4: Create a partition, format it as NTFS, and assign a drive letter. Step 5: Check it appears in File Explorer.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A user reports strange error messages and apps crashing. You suspect corrupt system files. Which command do you run, and what does it do?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Run sfc /scannow from an elevated command prompt. Step 2: It scans protected Windows system files and repairs any that are corrupt or missing. Step 3: Restart and test the apps again. Step 4: Do not use chkdsk here — that checks the disk, not the system files.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> On a Linux machine, a user cannot save a file in a shared folder. The folder's permissions are rwxr-xr-x and the user is not the owner or in the group. Explain the problem and the fix.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The permissions are read-write-execute for the owner, read-execute for the group, and read-execute for others. Step 2: Others have no write permission, so this user cannot save. Step 3: Fix it by adding the user to the group, or by changing the permissions with chmod (as an admin with sudo). Step 4: Verify the user can save, and check no wider access was granted by mistake.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Which file system cannot hold a single file larger than 4 GB?",
      "choices": [
        "NTFS",
        "exFAT",
        "FAT32",
        "ReFS"
      ],
      "answer": 2,
      "explanation": "Correct: (c). FAT32 has a 4 GB per-file limit. (a) is wrong: NTFS handles files far larger than 4 GB. (b) is wrong: exFAT was designed for large files on flash drives. (d) is wrong: ReFS is a server file system with no such limit."
    },
    {
      "q": "What does sfc /scannow do?",
      "choices": [
        "Checks a disk for bad sectors",
        "Scans and repairs protected Windows system files",
        "Shows the IP address",
        "Formats a drive"
      ],
      "answer": 1,
      "explanation": "Correct: (b). sfc /scannow checks protected system files and repairs corrupt ones. (a) is wrong: that is chkdsk. (c) is wrong: that is ipconfig. (d) is wrong: formatting is done in Disk Management or with format."
    },
    {
      "q": "Which Windows edition adds BitLocker and domain join over Home?",
      "choices": [
        "Home",
        "Pro",
        "S",
        "Starter"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Pro adds BitLocker, Remote Desktop hosting, and domain join. (a) is wrong: Home is the base edition without those features. (c) is wrong: S mode is a locked-down configuration, not an edition with BitLocker. (d) is wrong: Starter is an old, discontinued edition."
    },
    {
      "q": "A drive shows in the BIOS but not in File Explorer. Where do you look first?",
      "choices": [
        "Task Manager",
        "Disk Management",
        "Event Viewer",
        "Control Panel > Mouse"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Disk Management shows whether the disk needs initialising, a partition, or a drive letter. (a) is wrong: Task Manager shows processes, not disks. (c) is wrong: Event Viewer shows logs, not disk layout. (d) is wrong: mouse settings have nothing to do with disks."
    },
    {
      "q": "Which partition style is required for UEFI boot and disks over 2 TB?",
      "choices": [
        "MBR",
        "GPT",
        "FAT32",
        "NTFS"
      ],
      "answer": 1,
      "explanation": "Correct: (b). GPT supports huge disks and UEFI boot; MBR is limited to 2 TB. (a) is wrong: MBR is the old style with the 2 TB limit. (c) is wrong: FAT32 is a file system, not a partition style. (d) is wrong: NTFS is a file system, not a partition style."
    },
    {
      "q": "In Linux, which command changes file permissions?",
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
      "q": "What is Safe Mode used for?",
      "choices": [
        "Playing games faster",
        "Starting Windows with only essential drivers to fix a bad driver or malware problem",
        "Backing up files",
        "Updating the BIOS"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Safe Mode loads only essential drivers, so a bad driver or malware that blocks normal boot can be dealt with. (a) is wrong: Safe Mode is slower and plainer, not for gaming. (c) is wrong: backups are a separate job. (d) is wrong: the BIOS is updated from the firmware, not Safe Mode."
    },
    {
      "q": "Which tool shows a process using 100% CPU?",
      "choices": [
        "Disk Management",
        "Task Manager",
        "Device Manager",
        "Disk Cleanup"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Task Manager shows processes and their CPU, memory, disk, and network use. (a) is wrong: Disk Management handles partitions. (c) is wrong: Device Manager handles hardware drivers. (d) is wrong: Disk Cleanup frees disk space."
    }
  ],
  "studyGuide": "\n<h3>Module 4 — A+ Core 2 Review: Operating Systems: Quick Reference</h3>\n<p><strong>Core idea:</strong> Pick the right edition, the right file system, and the right tool for the symptom.</p>\n<p><strong>Windows:</strong> Pro adds BitLocker, domain join, RDP host · clean install wipes · Safe Mode for bad drivers · System Restore rolls back settings.</p>\n<p><strong>File systems:</strong> NTFS Windows standard · FAT32 max 4 GB per file · exFAT large files on flash drives · GPT modern, MBR 2 TB limit.</p>\n<p><strong>Tools:</strong> Task Manager (runaway process) · Event Viewer (logs) · sfc /scannow (system files) · chkdsk (disk) · Disk Management (partitions).</p>\n<p><strong>macOS:</strong> System Settings · Finder · Time Machine · Disk Utility · APFS.</p>\n<p><strong>Linux:</strong> ls · pwd · cd · cp · mv · rm · chmod · grep · sudo · apt · root has full control.</p>\n<p><strong>Watch out:</strong> sfc vs chkdsk; FAT32 4 GB limit; back up before any install.</p>\n<p><strong>Self-check:</strong> Pick a file system for a 6 GB file on a USB stick, name the tool for a corrupt system file, and run the basic Linux commands, without looking. If you can, you have this module.</p>\n"
};
