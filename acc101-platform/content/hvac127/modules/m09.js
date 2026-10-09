// HVAC 127 - Module 9: DDC Networks & Building Automation
module.exports = {
  number: 9,
  slug: "ddc-networks-building-automation",
  title: "DDC Networks & Building Automation",
  estTime: "3–4 hours",
  objectives: [
    "Explain what BACnet is, why interoperability matters, and what 'native BACnet' means.",
    "Distinguish BACnet MS/TP field buses from BACnet/IP and state where each typically lives in the architecture.",
    "Describe the front end's jobs: graphics, alarm management, schedules, and trend review.",
    "Explain network addressing at a conceptual level and the symptoms of addressing/duplication faults.",
    "Describe alarm management discipline — priority, routing, acknowledgment — and why alarm floods indicate design failure."
  ],
  sections: [
    {
      heading: "Why Networks: From Controllers to a Building Automation System",
      html: `
<p>A single DDC controller is a smart thermostat with ambitions. What turns a rack of controllers into a <strong>building automation system (BAS)</strong> is the network: a shared communication path over which controllers exchange data and report to supervision. Networking buys three things standalone panels can't do:</p>
<ul>
<li><strong>Shared information:</strong> one outdoor-air sensor, one electrical demand meter, one schedule — published once, used by every controller that needs it.</li>
<li><strong>Coordination:</strong> strategies spanning equipment — start the chiller plant in sequence, shed loads building-wide, run optimal start across zones — require controllers to talk to each other and to a supervisor.</li>
<li><strong>One pane of glass:</strong> operators see the whole building at a front end instead of walking to forty panels.</li>
</ul>
<div class="callout"><strong>Key idea:</strong> The network serves the control; it is not the control. Module 8's rule stands: field loops keep running if the network dies. What the network adds is sharing, coordination, and visibility.</div>
<p>Networks also create a new failure class — communication faults — with their own signatures: points frozen at last value, controllers 'offline' at the front end while their equipment runs fine locally, intermittent dropouts from wiring or addressing sins. Diagnosing those is a controls trade skill in itself, and this module gives you the concepts to do it.</p>`
    },
    {
      heading: "BACnet: The Common Language",
      html: `
<p><strong>BACnet</strong> is the industry-standard, open communication protocol for building automation, developed under ASHRAE. Its purpose is <strong>interoperability</strong>: controllers from different manufacturers, speaking BACnet, can exchange data and appear together at one front end. Before open protocols, every vendor's system was an island and owners were locked to one supplier forever; BACnet exists so a campus can mix brands across decades of additions.</p>
<ul>
<li><strong>Objects and properties:</strong> BACnet models everything as standard <em>objects</em> — an Analog Input object, a Binary Output object, and so on — each with readable properties (present value, units, status). Because the objects are standard, a supervisory station can discover and display a new device's points without custom drivers.</li>
<li><strong>Native BACnet:</strong> a controller whose internal language is BACnet from the factory, as opposed to a proprietary controller hidden behind a translation <em>gateway</em>. Gateways work, but native devices integrate cleaner and are the default specification on modern jobs.</li>
<li><strong>Services:</strong> the protocol defines how devices ask and answer — reading values, writing setpoints, subscribing to change notifications, and enrolling alarms.</li>
</ul>
<div class="callout"><strong>Key idea:</strong> BACnet standardizes the <em>conversation</em>, not the control. Two BACnet controllers can exchange a value perfectly while running completely different internal logic — interoperability of data, not of brains.</div>`
    },
    {
      heading: "Two Highways: MS/TP and BACnet/IP",
      html: `
<p>BACnet rides on several physical networks; two dominate HVAC work:</p>
<ul>
<li><strong>BACnet MS/TP</strong> (Master-Slave/Token-Passing): a serial bus over shielded twisted pair (RS-485), daisy-chained from device to device. A token passes between master devices granting the right to speak, in turn. MS/TP is the workhorse <em>field bus</em>: VAV controllers, fan coils, and unit controllers share a trunk up to a router or supervisory controller. Its field disciplines are unforgiving and testable: correct polarity, daisy-chain topology (no star stubs), proper end-of-line termination, unique device addresses on the trunk, and each device's MAC/address set before or during startup.</li>
<li><strong>BACnet/IP</strong>: BACnet messages carried on Ethernet/IP networks — the building's IT-style infrastructure. Faster, longer-reaching, and used at the supervisory level and between buildings. It introduces IT concepts (IP addresses, subnets, and broadcast management across subnets) that the controls trade now shares with the IT department.</li>
</ul>
<div class="formula">Field devices cluster on MS/TP trunks; trunks meet routers/supervisors; supervisors and front ends talk BACnet/IP. Data climbs the layers of Module 8.</div>
<div class="callout"><strong>Common mistake:</strong> Two controllers given the same address on a trunk. Both become erratic or vanish alternately at the front end — a maddening intermittent that is purely a paperwork failure. Addressing is recorded on the points/network documents and verified at checkout (Module 12), because 'it worked at first' means nothing when a duplicate wakes up.</div>
<p>Other protocols exist (Modbus for power meters and drives, proprietary buses on legacy systems) and gateways translate between them, but BACnet is the center of mass for HVAC automation in North America and the one this course certifies you can talk about intelligently.</p>`
    },
    {
      heading: "The Front End: Graphics, Schedules, and Human Factors",
      html: `
<p>The <strong>front end</strong> — operator workstation or web server — is where the BAS meets people. Its core furniture:</p>
<ul>
<li><strong>Graphics:</strong> floor plans and equipment diagrams with live values placed where the equipment physically is. A good graphic lets an operator read a system's health in five seconds: commands vs. status, setpoints vs. actuals, alarms in color.</li>
<li><strong>Point commanding:</strong> operators adjust setpoints, start/stop equipment, and place overrides — each ideally with privilege levels and time limits so a forgotten override doesn't run a building for a year (Module 11 returns to override discipline).</li>
<li><strong>Schedules:</strong> the calendar heart of energy management: occupancy times per zone, holidays, exceptions.</li>
<li><strong>Trends and reports:</strong> the recorded past — the evidence base for every energy and comfort investigation.</li>
</ul>
<div class="callout"><strong>Key idea:</strong> A front end is judged by whether an operator at 2 a.m. can answer 'what's wrong, where, and how bad?' in under a minute. Graphics and alarm design are safety-and-sleep engineering, not decoration.</div>
<p>One more front-end reality belongs in a technician's toolkit: <strong>user accounts and privilege levels</strong>. View-only users can look but not command; operators can adjust setpoints and acknowledge alarms; administrators can reprogram. When a customer reports that 'the button does nothing,' check the login's privilege before you check the controller — a surprising share of 'controls failures' are permission boundaries working exactly as configured, and the fix is an account change owned by the facility, not a panel repair.</p>`
    },
    {
      heading: "Alarm Management: Signal, Not Noise",
      html: `
<p>Networked systems can alarm everything — which means undisciplined systems alarm <em>nothing usefully</em>, because operators learn to ignore a screen that cries wolf forty times a shift. Professional <strong>alarm management</strong> treats alarms as a designed product:</p>
<ul>
<li><strong>Every alarm needs a defined operator response.</strong> If no action exists, it should be an event log entry, not an alarm.</li>
<li><strong>Priorities route urgency:</strong> life-safety and critical-process alarms page immediately; maintenance advisories queue for morning. Priority is assigned by consequence, not by which sensor was cheapest.</li>
<li><strong>Acknowledgment is a record,</strong> not a silencing — it says a human has taken ownership.</li>
<li><strong>Alarm floods are diagnostic:</strong> one failed air handler should generate its root alarms, not forty downstream nuisance alarms; flood patterns usually mean a shared cause (or a chattering point generating repeats) and get fixed at the source.</li>
</ul>
<p><strong>Worked example:</strong> A chiller plant trip generates 63 alarms in two minutes — every pump, valve, and zone downstream reports its distress. The operator needs three: chiller tripped (cause), plant flow lost (effect), critical zones warming (consequence watch). The other sixty are the same event wearing costumes. Good systems suppress or summarize the cascade; good technicians read alarm lists top-down from earliest timestamp — the cause is almost always near the front of the flood.</p>
<div class="callout"><strong>Common mistake:</strong> Extending alarm delays or deleting alarms to make a noisy system quiet. You have not fixed the plant; you have muted the witness. Reduce noise by fixing root causes and rationalizing which conditions deserve alarm status.</div>`
    }
  ],
  keyTerms: [
    { term: "Building automation system (BAS)", def: "The networked whole: controllers, communications, supervisory devices, and front end managing a building." },
    { term: "BACnet", def: "The open ASHRAE standard protocol allowing multi-vendor building automation interoperability." },
    { term: "Interoperability", def: "The ability of devices from different manufacturers to exchange data and work in one system." },
    { term: "BACnet object", def: "A standardized data representation (e.g., Analog Input object) with properties like present value and units." },
    { term: "Native BACnet", def: "A device whose internal protocol is BACnet from the factory, needing no translation gateway." },
    { term: "Gateway", def: "A device translating between a proprietary system and another protocol such as BACnet." },
    { term: "MS/TP", def: "BACnet's token-passing serial field bus over RS-485 twisted pair, daisy-chained between controllers." },
    { term: "BACnet/IP", def: "BACnet communication carried over Ethernet/IP networks, typical at supervisory level." },
    { term: "Router (BACnet)", def: "A device passing BACnet traffic between different networks, e.g., MS/TP trunks and IP." },
    { term: "Address (device)", def: "The unique identifier of a controller on its network; duplicates cause erratic communication." },
    { term: "Termination (EOL)", def: "End-of-line resistors fitted at trunk ends to prevent signal reflections on serial buses." },
    { term: "Front end", def: "The operator interface software/hardware for graphics, commanding, schedules, alarms, and trends." },
    { term: "Graphic", def: "A live system diagram at the front end showing real values in equipment context." },
    { term: "Alarm priority", def: "The urgency classification governing how an alarm is routed and how fast it demands response." },
    { term: "Acknowledgment", def: "An operator's recorded acceptance of ownership of an alarm." },
    { term: "Alarm flood", def: "A burst of alarms from one root event; managed by finding the earliest/root alarm and fixing cascade design." },
    { term: "Token passing", def: "MS/TP's method of granting each master device its turn to transmit." },
    { term: "Supervisory controller", def: "The network-level device coordinating field controllers and serving the front end." }
  ],
  video: {
    title: "Building Automation Systems Basics Lesson 4 - BAS 101 system training simulator",
    embedUrl: "https://www.youtube.com/embed/9d6plsLOZhA",
    note: "A BAS basics lesson working with a DDC training simulator that includes BACnet IP and MS/TP networks and real field devices. Watch how field controllers, networks, and the operator view fit together — it is this module's layered network picture running on a bench.",
    more: [
      { title: "Building Automation Training — Level I", url: "https://www.youtube.com/watch?v=1LHw8q6XBTg" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> Explain in two or three sentences why an owner should care whether a new controller is 'native BACnet' rather than behind a gateway.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Native BACnet devices speak the system language directly, so their points discover and integrate at the front end without translation hardware or custom drivers. Step 2: That means simpler expansion, fewer middleman failure points, and freedom to mix vendors on future projects. Step 3: A gateway can work, but it is one more device to buy, power, configure, and someday troubleshoot between the owner and their data.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> Two VAV controllers on one MS/TP trunk were both addressed '14' during a rushed Friday startup. Describe the front-end symptom pattern and the fix.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Duplicate addresses make both devices answer as one — values flicker between the two boxes' data, one or both drop offline intermittently, and behavior changes when one is powered down. Step 2: The fix is administrative, not electronic: assign each device a unique address per the network documentation, correct the records, and re-verify both online and stable. Step 3: This is why addressing is documented and checked at commissioning, not improvised at the ladder.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> Place these on the correct network tier — MS/TP field trunk or BACnet/IP: (a) 24 VAV box controllers on one floor, (b) the link between the supervisory controller and the operator's server, (c) a fan-coil controller string in a dorm wing, (d) communication between two buildings' supervisors.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Field device clusters live on MS/TP: (a) and (c). Step 2: Supervisory and inter-building traffic rides IP: (b) and (d). Step 3: A router joins each MS/TP trunk to the IP backbone — the seam between the two tiers is where trunks get supervised.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> An operator shows you 47 active alarms. The earliest, timestamped first, is 'AHU-2 supply fan status failure'; the rest are zone temperature and damper alarms in AHU-2's area. Write your interpretation and first action.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The earliest alarm is the root event: AHU-2's fan stopped (or its status proves it did); the downstream temperature/damper alarms are consequences of lost air, an alarm flood pattern. Step 2: First action: investigate the fan (command vs. status, overload, belt) — not 46 individual zone problems. Step 3: After restoration, the cascade should clear; any alarm that remains earns individual attention.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A facility manager asks you to 'just turn off' a freeze-stat alarm that trips several times each winter because 'it's always a false alarm.' Compose the professional response.</p>",
      solution: "<p><strong>Answer (example):</strong> Step 1: 'A freeze-stat trip means the coil saw near-freezing air — if it's recurring, something real is happening upstream: a damper failing open, a valve not driving, a preheat problem.' Step 2: 'Disabling the alarm doesn't stop the condition; it only guarantees we learn about it from a burst coil.' Step 3: Offer the right work: trend the coil and damper during the next cold snap, find the root cause, and if the alarm design itself is chattering, fix its delay/deadband with documentation — never silent deletion.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> List four things a well-designed front-end graphic for an air handler must show for a 2 a.m. operator, and justify each in a few words.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: <strong>Command vs. status</strong> for the fan (asked vs. actually running — catches belts/overloads). Step 2: <strong>Key temperatures with setpoints beside actuals</strong> (supply, mixed, return — performance at a glance). Step 3: <strong>Valve/damper positions</strong> (what the system is doing about it). Step 4: <strong>Alarm state in context</strong> (which alarms, since when). A graphic answering 'wrong? where? how bad?' in under a minute is the design standard from this module.</p>"
    }
  ],
  quiz: [
    {
      q: "BACnet's primary purpose in building automation is:",
      choices: ["To manufacture controllers", "To provide an open standard so equipment from different vendors can interoperate in one system", "To replace control wiring with pneumatics", "To set energy prices"],
      answer: 1,
      explanation: "Correct: (b). BACnet standardizes the conversation between devices. (a) It is a protocol, not a product line; many manufacturers build to it. (c) BACnet is data communication, unrelated to pneumatic actuation. (d) Pricing is a utility/business matter outside the protocol."
    },
    {
      q: "BACnet MS/TP is best described as:",
      choices: ["A wireless mesh for thermostats only", "A token-passing serial field bus over RS-485 twisted pair, typically serving clusters of field controllers", "The Internet connection for the front end", "A pneumatic signaling method"],
      answer: 1,
      explanation: "Correct: (b). MS/TP is the wired workhorse trunk for VAV and unit controllers. (a) It is a wired bus; wireless variants in BAS are separate technologies. (c) The front end typically rides BACnet/IP over Ethernet. (d) Pneumatics carry signals as air pressure — a different era's medium, Module 6."
    },
    {
      q: "A 'native BACnet' controller is one that:",
      choices: ["Was manufactured domestically", "Speaks BACnet internally from the factory without a translation gateway", "Only works on MS/TP", "Has no analog points"],
      answer: 1,
      explanation: "Correct: (b). Native = BACnet is its first language. (a) 'Native' refers to protocol, not geography. (c) Native devices exist on IP and MS/TP alike. (d) Native BACnet controllers carry full analog and digital point complements as standard objects."
    },
    {
      q: "Two controllers accidentally share one address on a trunk. The expected symptom is:",
      choices: ["Both work perfectly; addresses don't matter", "Erratic/intermittent communication — values flicker or devices drop offline alternately", "The trunk speeds up", "Only the newer controller works, cleanly and always"],
      answer: 1,
      explanation: "Correct: (b). Duplicate identities corrupt every exchange each device attempts. (a) Unique addressing is a hard requirement of the bus. (c) Contention degrades, never improves, communication. (d) There is no clean winner; both devices' data becomes untrustworthy, which is what makes the fault maddening until the paperwork is checked."
    },
    {
      q: "In an alarm flood, the alarm most likely to identify the root cause is:",
      choices: ["The highest-numbered alarm", "The earliest-timestamped alarm; later ones are usually downstream consequences", "The one acknowledged last", "Alarms never indicate causes"],
      answer: 1,
      explanation: "Correct: (b). Cascades unfold in time — cause first, effects after. Reading chronologically is the flood discipline. (a) Alarm numbering order carries no causal meaning. (c) Acknowledgment order reflects operator behavior, not plant physics. (d) Alarms indicate exactly where to start; the earliest one is the professional's first read."
    },
    {
      q: "Alarm acknowledgment means:",
      choices: ["The fault is repaired", "A human has taken recorded ownership of the alarm", "The alarm is deleted permanently", "The sensor is recalibrated"],
      answer: 1,
      explanation: "Correct: (b). Acknowledgment is accountability, not resolution. (a) Repair is a separate status; acknowledged alarms can persist while work proceeds. (c) Acknowledged alarms remain in history and active lists until conditions clear. (d) It has nothing to do with sensor calibration."
    },
    {
      q: "The front end's trend function is valuable for troubleshooting because it:",
      choices: ["Replaces all field instruments", "Shows point values over time, revealing oscillation, drift, and event sequences a snapshot can't", "Prints better invoices", "Eliminates the need for alarms"],
      answer: 1,
      explanation: "Correct: (b). Behavior over time is the signature of control faults (Module 2) and the evidence base for diagnosis. (a) Trends record what sensors reported; field verification still needs instruments. (c) Irrelevant to its engineering role. (d) Trends complement alarms; they don't annunciate in real time."
    },
    {
      q: "A system generates forty alarms a shift for conditions requiring no operator action. The professional fix is to:",
      choices: ["Teach operators to ignore the screen", "Rationalize the alarm design: keep alarms for conditions needing response, log the rest as events, and fix root causes of repeats", "Unplug the alarm printer", "Raise every setpoint"],
      answer: 1,
      explanation: "Correct: (b). Alarm systems are designed products; noise is a design defect with a design remedy. (a) Ignored screens eventually hide the one alarm that mattered — the known path to incidents. (c) Silencing output devices is muting the witness. (d) Setpoint changes don't address alarm philosophy and may harm the process."
    }
  ],
  studyGuide: `
<h3>Module 9 — DDC Networks & Building Automation: Quick Reference</h3>
<ul>
<li><strong>BAS</strong> = controllers + network + supervision + front end. The network adds sharing, coordination, and visibility — field loops still run standalone if it fails.</li>
<li><strong>BACnet</strong> (ASHRAE open standard): interoperability between vendors. Data modeled as standard <strong>objects</strong> (AI/AO/BI/BO…) with properties. <strong>Native</strong> = BACnet inside the device; <strong>gateway</strong> = translator box for proprietary systems.</li>
<li><strong>MS/TP:</strong> RS-485 token-passing field bus, daisy-chained, termination at the ends, unique addresses — serves VAV/unit controller clusters. <strong>BACnet/IP:</strong> Ethernet/IP at supervisory level and between buildings. Routers join trunks to the backbone.</li>
<li><strong>Duplicate address</strong> = flickering values, devices dropping alternately. A paperwork fault; verify addressing at checkout.</li>
<li><strong>Front end:</strong> graphics (command vs. status, setpoint vs. actual), commanding with privilege/time limits, schedules, trends, reports. Design test: 'what's wrong, where, how bad?' in under a minute.</li>
<li><strong>Alarms:</strong> every alarm needs a defined response and a priority by consequence. Acknowledgment = ownership, not repair. <strong>Floods:</strong> read earliest timestamp first — the root is near the front. Fix noise by rationalization and root-cause repair, never by muting.</li>
</ul>
<p><strong>Layer memory:</strong> field devices do, field controllers decide locally, supervisors coordinate, the front end shows. Data climbs; control stays local.</p>`
};
