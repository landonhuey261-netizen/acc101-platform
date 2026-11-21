module.exports = [
  {
    "id": "aplus-troubleshooting-lab",
    "title": "A+ Troubleshooting Scenario Lab",
    "introHtml": "<p><strong>Case — a dead office PC and a network that will not behave.</strong> It is Monday morning. A user's desktop PC will not turn on, the office printer is printing faded pages, and two computers on the same network keep dropping off, one at a time. You are the technician. Work each fault step by step, using the six-step troubleshooting method — and check every number before you enter it.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before you touch any hardware: back up the user's data if the machine can be reached, power the machine off and unplug it before opening the case, and ground yourself with an anti-static wrist strap before handling parts. A technician who wipes a user's only copy of their files, or kills a part with static, has made the problem worse. The first scored row is a safety decision — get it right before anything else moves. This lab teaches knowledge and decision-making only; real hardware work is done with the machine powered off and unplugged, and you never open a PSU.</p><p>Enter the number of the correct option (or the computed value where the row asks for one) for each decision point.</p><p>Work each number on paper before entering it. In real troubleshooting, the numbers are the diagnosis.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "passing": 70,
    "rows": [
      {
        "label": "SAFETY CALL — The user's PC will not turn on and you need to open the case to check the RAM. Your call: 1) Open the case while it is still plugged in and running 2) Back up the data if reachable, power off, unplug, ground yourself with an anti-static strap, then open the case 3) Open the PSU first to check inside it 4) Pull the RAM out with the power on to save time",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "safety_hw",
            "expected": 2,
            "hint": "Back up first, power off, unplug, ground yourself — and never open a PSU."
          }
        ]
      },
      {
        "label": "The PC shows no lights and no fans at all. Your first check is: 1) Replace the motherboard 2) The wall socket, the power cable, and the PSU switch 3) Reinstall Windows 4) Replace the monitor",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "nopower_first",
            "expected": 2,
            "hint": "Check the simplest causes first: socket, cable, switch."
          }
        ]
      },
      {
        "label": "The PC now powers on but beeps three times and shows the wrong amount of RAM. Your call: 1) Replace the CPU 2) Reseat the RAM and test one stick at a time 3) Buy a new monitor 4) Reinstall the printer driver",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "beep_ram",
            "expected": 2,
            "hint": "Beep codes and wrong RAM amounts point at loose or faulty RAM."
          }
        ]
      },
      {
        "label": "COMPUTED — A PC has a 500 W PSU. The parts draw 300 W under load. What percentage of the PSU rating is the load? Enter the number only.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "psu_pct",
            "expected": 60,
            "hint": "300 / 500 = 0.6, which is 60% — inside the 50–70% efficient range."
          }
        ]
      },
      {
        "label": "The office printer prints faded pages with vertical white lines and the toner is new. Your call: 1) Replace the USB cable 2) Run the cleaning cycle and inspect the drum for damage 3) Reinstall Windows 4) Add more paper",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "printer_drum",
            "expected": 2,
            "hint": "Faded pages with white lines and new toner point at a dirty or damaged drum."
          }
        ]
      },
      {
        "label": "Two computers keep dropping off the network, one at a time, while the rest work fine. Your call: 1) Replace the router 2) Check both devices' addresses for an IP conflict 3) Replace both monitors 4) Turn off the Wi-Fi",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ip_conflict",
            "expected": 2,
            "hint": "Devices dropping one at a time is the classic sign of an IP conflict."
          }
        ]
      },
      {
        "label": "A laptop shows the address 169.254.14.8 and cannot reach the internet. Your call: 1) The DNS server is down 2) No DHCP server answered — check the connection, then release and renew the address 3) The laptop needs a new battery 4) The monitor cable is loose",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "apipa_fix",
            "expected": 2,
            "hint": "169.254.x.x is APIPA: no DHCP answer. Check the connection, then renew."
          }
        ]
      },
      {
        "label": "COMPUTED — A user can ping a website by IP address but not by name. You check the DNS server and find it is down. The office has 8 computers affected. How many computers need their DNS setting fixed at the server (not per PC)? Enter the number of places to fix it (the server counts as 1).",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dns_fix_count",
            "expected": 1,
            "hint": "Fix DNS once, at the server — not once per computer."
          }
        ]
      },
      {
        "label": "You fixed all three faults. Which methodology steps are still missing before the job is done? 1) None — the fixes are enough 2) Steps 5 and 6: verify full system functionality and document findings, actions, and outcomes 3) Steps 1 and 2 4) Steps 3 and 4",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "method_steps",
            "expected": 2,
            "hint": "Verify the whole system works and document what you did — steps 5 and 6."
          }
        ]
      },
      {
        "label": "COMPUTED — A 4 TB drive must be initialised for a UEFI system. MBR supports disks up to 2 TB. How many terabytes OVER the MBR limit is this drive? Enter the number only.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gpt_over",
            "expected": 2,
            "hint": "4 TB minus the 2 TB MBR limit is 2 TB — so the drive needs GPT."
          }
        ]
      }
    ]
  },
  {
    "id": "photoshop-client-brief-lab",
    "title": "Photoshop Client-Brief Lab",
    "introHtml": "<p><strong>Case — a client brief for a product photo.</strong> A local business owner needs one product photo for their website: a clean, colour-correct shot of a handmade candle, with the background tidied, the label readable, and the file ready for the web. You have the raw photo and Photoshop. Work the brief step by step — the right tool, in the right order, with the right settings — and check every number before you enter it.</p>",
    "taskHtml": "<p><strong>Step 0 — Accuracy first.</strong> Before you edit anything: duplicate the Background layer and work on the copy, so the original pixels are never touched. Check the brief once more — who the photo is for, what it must do, and what 'done' looks like — because an edit made against the wrong brief is wasted work. The first scored row is an accuracy decision — get it right before anything else moves. This lab teaches knowledge and decision-making only; the real edit happens in Photoshop, and the app cannot grade creative work.</p><p>Enter the number of the correct option (or the computed value where the row asks for one) for each decision point.</p><p>Work each number on paper before entering it. In a client job, the settings are the deliverable.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "passing": 70,
    "rows": [
      {
        "label": "ACCURACY CALL — You open the client's photo. Your first move is: 1) Start editing the Background layer directly 2) Duplicate the Background layer and work on the copy, so the original stays safe 3) Flatten the image immediately 4) Delete the background with the Eraser",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "safety_ps",
            "expected": 2,
            "hint": "Always work on a copy — never edit the original pixels directly."
          }
        ]
      },
      {
        "label": "The photo has a small speck of dust on the candle and a blemish on the label. Which tool do you reach for first? 1) Clone Stamp 2) Spot Healing Brush 3) Pen tool 4) Crop tool",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "spot_heal",
            "expected": 2,
            "hint": "The Spot Healing Brush removes small blemishes automatically from the surroundings."
          }
        ]
      },
      {
        "label": "A stranger's hand is visible at the edge of the frame and must go. Which tool removes the whole hand? 1) Spot Healing Brush 2) Content-Aware Fill 3) Magic Wand 4) Type tool",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "caf_hand",
            "expected": 2,
            "hint": "Content-Aware Fill removes a whole object by inventing matching pixels."
          }
        ]
      },
      {
        "label": "The photo looks orange because it was shot under tungsten light. What fixes the colour cast? 1) More sharpening 2) White balance correction 3) A higher resolution 4) A different file format",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wb_cast",
            "expected": 2,
            "hint": "White balance removes the colour cast so whites look white."
          }
        ]
      },
      {
        "label": "You want the candle to stand out from its background without deleting anything. What do you use? 1) The Eraser tool 2) A layer mask — black hides, white reveals 3) Flatten Image 4) The Crop tool",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mask_choice",
            "expected": 2,
            "hint": "A layer mask hides without deleting — black hides, white reveals."
          }
        ]
      },
      {
        "label": "The client wants the candle photo to look good on their website AND in a printed flyer. Which colour mode and resolution do you use for the PRINT version? 1) RGB, 72 PPI 2) CMYK, 300 PPI 3) sRGB, 72 PPI 4) Grayscale, 300 PPI",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "print_settings",
            "expected": 2,
            "hint": "Print wants CMYK at 300 PPI; the web wants sRGB at 72 PPI."
          }
        ]
      },
      {
        "label": "COMPUTED — The website displays the photo at 1200 pixels wide. The original is 6000 pixels wide. By what factor must you scale it down? Enter the number only (6000 / 1200).",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "scale_factor",
            "expected": 5,
            "hint": "6000 / 1200 = 5 — the image must be scaled down by a factor of 5."
          }
        ]
      },
      {
        "label": "Which file format do you export for the website, and why? 1) JPEG at quality 70–80 — small, good for photos, sRGB 2) TIFF — best for the web 3) PSD — keeps layers for the browser 4) BMP — uncompressed is best",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "web_format",
            "expected": 1,
            "hint": "JPEG at quality 70–80 is the web standard for photos; TIFF and PSD are not web formats."
          }
        ]
      },
      {
        "label": "COMPUTED — You sharpen the photo after resizing. The Unsharp Mask Amount is set to 100%. You decide that is too strong and halve it. What is the new Amount? Enter the number only.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sharpen_half",
            "expected": 50,
            "hint": "Half of 100% is 50%."
          }
        ]
      },
      {
        "label": "Before sending the photo to the client, what is the last check? 1) Check the file name only 2) Open the exported file in a browser and look at it — resolution, colour mode, and file size all correct 3) Delete the PSD master 4) Email it without looking",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "final_check",
            "expected": 2,
            "hint": "Open the export and look at it — never trust the settings alone. Keep the PSD master."
          }
        ]
      }
    ]
  },
  {
    "id": "premiere-storyboard-lab",
    "title": "Premiere Pro Storyboard Lab",
    "introHtml": "<p><strong>Case — cut a 60-second video to a storyboard.</strong> A local business owner needs a 60-second video for their website: a handmade candle, from workshop to finished product, with a voiceover, music, and a call to action at the end. You have the storyboard, the clips, the voiceover, and a music track. Cut it to the storyboard, keep the audio clean, and export it properly — and check every number before you enter it.</p>",
    "taskHtml": "<p><strong>Step 0 — Accuracy first.</strong> Before you cut anything: read the storyboard end to end, check that every clip is imported and linked (never move or rename media after importing), and confirm the sequence matches the clips (1920×1080, same frame rate as the source). A video cut against the wrong storyboard, or with offline media, is wasted work. The first scored row is an accuracy decision — get it right before anything else moves. This lab teaches knowledge and decision-making only; the real edit happens in Premiere Pro, and the app cannot grade creative work.</p><p>Enter the number of the correct option (or the computed value where the row asks for one) for each decision point.</p><p>Work each number on paper before entering it. In a client job, the timings are the deliverable.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "passing": 70,
    "rows": [
      {
        "label": "ACCURACY CALL — You open the project. Your first move is: 1) Start cutting immediately 2) Read the storyboard end to end, confirm all media is linked, and check the sequence matches the clips 3) Rename the video files on the hard drive 4) Export first, edit later",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "safety_pr",
            "expected": 2,
            "hint": "Read the storyboard, check the media links, and confirm the sequence settings before cutting."
          }
        ]
      },
      {
        "label": "The storyboard says the hook must land in the first 5 seconds. What goes there? 1) The company logo for 5 seconds 2) The most striking shot — the finished candle, lit — with the opening line of the voiceover 3) A black screen 4) The credits",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "hook_first",
            "expected": 2,
            "hint": "The hook is the strongest shot with the opening line — it keeps viewers watching."
          }
        ]
      },
      {
        "label": "You need a 5-second moment from a 2-minute workshop clip. What is the fastest way to get it onto the timeline? 1) Drag the whole clip in and trim it there 2) Mark I and O in the Source monitor, then drag just that part to the timeline 3) Delete the rest of the file 4) Speed the whole clip up",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "in_out",
            "expected": 2,
            "hint": "I and O mark the in and out points, so only the good 5 seconds lands on the timeline."
          }
        ]
      },
      {
        "label": "COMPUTED — The storyboard has 6 shots. The video must be 60 seconds. If the shots were equal length, how many seconds would each shot be? Enter the number only.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "shot_length",
            "expected": 10,
            "hint": "60 seconds / 6 shots = 10 seconds per shot."
          }
        ]
      },
      {
        "label": "The voiceover peaks at 0 dB and sounds distorted, and the music is louder than the voice. What do you fix first? 1) Add more music 2) Lower the voiceover so it peaks around -12 to -6 dB, then duck the music under it 3) Delete the voiceover 4) Turn the volume up",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "audio_fix",
            "expected": 2,
            "hint": "Dialogue at -12 to -6 dB, never 0 dB; duck the music under the voice."
          }
        ]
      },
      {
        "label": "You trim 2 seconds off a clip in the middle of the timeline and a gap appears. Which edit should you have used? 1) A rolling edit 2) A ripple edit — it trims and closes the gap 3) A slip edit 4) The Delete key",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ripple_gap",
            "expected": 2,
            "hint": "A ripple edit trims and shifts everything after it, so no gap is left."
          }
        ]
      },
      {
        "label": "The storyboard calls for the candle's colour to look the same in every shot. What do you do first? 1) Apply a Creative Look to all shots 2) Colour-correct first — match white balance and exposure — then grade 3) Export and hope 4) Change the frame rate",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "color_order",
            "expected": 2,
            "hint": "Correct first so shots match, then grade for style."
          }
        ]
      },
      {
        "label": "COMPUTED — The video is 74 seconds long and must be 60 seconds. How many seconds must you cut? Enter the number only.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cut_seconds",
            "expected": 14,
            "hint": "74 - 60 = 14 seconds to cut — trim the weakest shot, not the strongest."
          }
        ]
      },
      {
        "label": "The lower third with the business name appears for 1 second and viewers cannot read it. What is the fix? 1) Make the text smaller 2) Extend it to at least 3 seconds 3) Remove it 4) Move it off screen",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lower_third",
            "expected": 2,
            "hint": "A lower third needs at least 3 seconds for a viewer to read it."
          }
        ]
      },
      {
        "label": "Which export settings do you use for the client's website? 1) ProRes, for the web 2) H.264 in MP4, YouTube 1080p preset, Entire Sequence 3) Uncompressed AVI 4) GIF",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "export_choice",
            "expected": 2,
            "hint": "H.264 in MP4 is the web standard; export the Entire Sequence, not the Work Area."
          }
        ]
      }
    ]
  }
];
