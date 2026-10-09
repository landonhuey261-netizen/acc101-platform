// HVAC 101 - Module 5: Condensers & Heat Rejection
module.exports = {
  number: 5,
  slug: "condensers-heat-rejection",
  title: "Condensers & Heat Rejection",
  estTime: "3–4 hours",
  objectives: [
    "Describe the three zones of a condenser: desuperheating, condensing, and subcooling.",
    "Compare air-cooled and water-cooled condensers and state where each is normally used.",
    "Explain head pressure as the result of condensing temperature, and predict how outdoor temperature and dirt move it.",
    "Calculate subcooling from a condensing saturation temperature and a liquid line temperature.",
    "Diagnose the pressure pattern of a condenser with poor airflow from gauge and thermometer readings."
  ],
  sections: [
    {
      heading: "The Condenser's One Job and Its Three Zones",
      html: `
<p>The condenser must reject all the heat the evaporator absorbed plus all the heat compression added. Refrigerant passes through it in three recognizable zones. In the <strong>desuperheating zone</strong>, hot discharge vapor cools from its discharge temperature down to the condensing (saturation) temperature; this is sensible heat leaving, and it happens in the first part of the coil. In the <strong>condensing zone</strong>, the great majority of the coil, vapor changes to liquid at nearly constant temperature, surrendering latent heat — this is where most of the heat leaves. In the <strong>subcooling zone</strong>, the now-all-liquid refrigerant cools a few degrees below saturation; that sensible cooling is the system's insurance that only liquid reaches the metering device.</p>
<p><strong>Worked picture — an R-410A condenser on a hot day.</strong> Discharge vapor may enter well above 150°F on the line. It desuperheats down to the condensing temperature of 100°F, which belongs to about 317 psig. It condenses at roughly 100°F through most of the coil. If the liquid leaves at 90°F, the last zone has delivered 10°F of subcooling. Three temperatures — discharge, condensing, liquid out — tell you which zone is doing how much work, and a shrunken condensing zone, caused by dirt or poor airflow, shows up as rising pressure long before it shows up as a tripped control.</p>
<div class="callout"><strong>Key idea:</strong> Most heat leaves as latent heat in the condensing zone. Desuperheating and subcooling are sensible bookends: one prepares vapor to condense, the other prepares liquid to be metered.</div>
<p>Subcooling is measured where the liquid line leaves the condenser, and Module 11 makes it the charging method for TXV systems. Learn the zones now and the charging logic later will feel inevitable.</p>`
    },
    {
      heading: "Air-Cooled vs. Water-Cooled Condensers",
      html: `
<p>An <strong>air-cooled condenser</strong> moves outdoor or ambient air across a finned coil with a fan. It is simple, needs no water supply or drain, and dominates residential and light commercial work. Its weakness is that its performance rides the weather: the hotter the air, the higher the condensing temperature must climb to push heat into that air, and the higher head pressure rises. Fins pack a lot of surface into a small cabinet, but that same tight spacing traps cottonwood, grass, and dirt, so cleaning is a core maintenance task rather than an optional extra.</p>
<p>A <strong>water-cooled condenser</strong> rejects heat to water flowing through a shell-and-tube or coaxial exchanger; the warmed water is then cooled in a cooling tower or sent to drain in older once-through designs. Water carries heat far more effectively than air, so water-cooled machines run lower, steadier head pressures and suit large tonnage. The costs are plumbing, water treatment to control scale and biological growth, freeze protection, and the tower itself. You will meet these properly in the commercial courses; here, recognize the type and its advantage.</p>
<p>Either way, heat rejection needs a temperature difference. Refrigerant cannot condense at a temperature below the medium absorbing its heat; it must condense hotter than the air or water passing over it. That required difference is why condensing temperature tracks ambient: on a mild day the same clean system condenses cooler and runs lower head pressure than on a brutal afternoon, with no fault present at all.</p>
<div class="callout"><strong>Key idea:</strong> Judge head pressure against the day. A pressure that is normal at 100°F outdoors is a red flag at 75°F outdoors. Ambient is part of every condenser diagnosis.</div>`
    },
    {
      heading: "Head Pressure: What Sets It and What Raises It",
      html: `
<p><strong>Head pressure</strong> is simply discharge pressure, and because the condenser is saturated through most of its length, head pressure is set by condensing temperature through the pressure-temperature relationship. Anything that makes condensing harder raises condensing temperature and therefore head pressure: high outdoor temperature, dirty or blocked coil surfaces, a weak or failed condenser fan, recirculated discharge air bouncing off a wall or deck back into the coil, and air or other non-condensable gases trapped in the system occupying condenser space. Overcharge raises it too, because excess liquid backs up into the condenser and steals condensing surface.</p>
<p>High head pressure is expensive and dangerous. The compressor must lift against it, so current draw climbs while refrigerant pumped per revolution falls. Discharge temperature climbs with it, cooking oil. Left alone, the story ends at a high-pressure cut-out, an overload trip, or a failed compressor. Low head pressure has its own troubles: on cool days it can fall so far that metering devices cannot feed the evaporator properly, which is why larger systems add head-pressure controls — an application topic for later courses.</p>
<p><strong>Worked diagnosis.</strong> An R-410A system on a 95°F afternoon shows a condensing temperature near 100°F by its 317 psig head pressure, liquid leaving at 90°F for 10°F of subcooling, and normal cooling. A week later at the same weather it shows head pressure corresponding to a far hotter condensing temperature and a condenser fan barely turning. Step 1: The weather did not change, so the machine changed. Step 2: A slow fan starves the condensing zone of airflow, so pressure must rise to reject the same heat. Step 3: Repair the fan or its motor, clean the coil while there, and re-verify pressures rather than touching the charge.</p>
<div class="callout"><strong>Key idea:</strong> Airflow first, charge second. Most high-head-pressure calls are heat-rejection failures, and adding or removing refrigerant cannot repair a fan or wash a coil.</div>`
    },
    {
      heading: "Subcooling: The Condenser's Report Card",
      html: `
<p><strong>Subcooling</strong> is the degrees a liquid is cooled below its saturation temperature at the same pressure:</p>
<div class="formula">Subcooling = Saturation (condensing) temperature − Liquid line temperature</div>
<p><strong>Worked Example 1.</strong> An R-22 condenser runs at 196 psig, which the P/T relationship ties to 100°F. The liquid line leaving measures 88°F. Subcooling = 100 − 88 = <strong>12°F</strong>. The liquid has a 12-degree margin before any of it could flash in the liquid line.</p>
<p><strong>Worked Example 2.</strong> The same style system a month later: head pressure still corresponds to 100°F saturation, but the liquid line now measures 97°F. Subcooling = 100 − 97 = <strong>3°F</strong>. That thin margin is a warning: a little pressure drop in a long liquid line, a warm attic run, or a partly plugged filter-drier can flash some liquid to gas before the metering device, starving the evaporator. Low subcooling points toward low charge on a TXV system; very high subcooling points toward overcharge or a restriction backing liquid up. Module 11 formalizes those judgments.</p>
<p>Measure subcooling correctly: pressure at the liquid service port, converted with the right refrigerant's P/T data, minus a liquid line temperature taken on clean bare metal under the clamp. A clamp over insulation, a sun-baked line, or the wrong refrigerant selected in a digital gauge each manufactures a false number, and charging to a false number is worse than not measuring.</p>
<div class="callout"><strong>Key idea:</strong> Subcooling proves the liquid line is solid liquid and, on TXV systems, becomes the primary charge indicator. Superheat belongs to the evaporator side; subcooling belongs to the condenser side. Keep the two addresses straight.</div>`
    },
    {
      heading: "Care, Cleaning, and a Recap",
      html: `
<p>Condenser care is unglamorous and decisive. Keep coils clean with methods the manufacturer allows, straighten bent fins where practical, keep vegetation and stored items clear of the cabinet, and verify the fan runs at full speed with its blade in the correct position. On a service call, your first condenser tools are eyes and hands: look for matted debris on the entering face (the dirty side hides against the coil, so shine a light and check), feel for even discharge airflow, and listen for a fan motor laboring or cycling on its own overload.</p>
<p>Safety fits here too. Disconnect power before cleaning or reaching into a fan compartment, and treat a condenser fan as able to start at any moment on an automatic call. Wash water and electrical components do not mix; protect motors and controls as directed.</p>
<p><strong>Recap:</strong></p>
<ul>
<li>Three zones: desuperheating, condensing (most heat, constant temperature), subcooling.</li>
<li>Air-cooled is simple and weather-dependent; water-cooled is steadier and stronger but needs water handling and treatment.</li>
<li>Head pressure is condensing temperature in disguise; dirt, weak airflow, recirculation, non-condensables, and overcharge all raise it.</li>
<li>Subcooling = saturation temperature − liquid line temperature. It proves solid liquid and guides TXV charging.</li>
<li>Judge every head pressure against the ambient temperature of the day.</li>
</ul>`
    }
  ],
  keyTerms: [
    { term: "Condenser", def: "The heat-rejecting coil where high-pressure vapor desuperheats, condenses, and subcools." },
    { term: "Desuperheating", def: "The first condenser zone, where discharge vapor cools sensibly down to the condensing temperature." },
    { term: "Condensing zone", def: "The main condenser zone where vapor changes to liquid at nearly constant temperature, rejecting latent heat." },
    { term: "Subcooling zone", def: "The final condenser zone where liquid cools below its saturation temperature." },
    { term: "Subcooling", def: "Saturation temperature minus liquid line temperature, in degrees Fahrenheit." },
    { term: "Head pressure", def: "Discharge pressure; the high-side pressure set by condensing temperature." },
    { term: "Condensing temperature", def: "The saturation temperature at which refrigerant condenses at the existing head pressure." },
    { term: "Air-cooled condenser", def: "A condenser rejecting heat to air moved across a finned coil by a fan." },
    { term: "Water-cooled condenser", def: "A condenser rejecting heat to flowing water, usually paired with a cooling tower." },
    { term: "Non-condensables", def: "Gases such as air trapped in the system that occupy condenser space and raise head pressure." },
    { term: "Recirculation", def: "Condenser discharge air re-entering the same coil, raising its effective ambient temperature." },
    { term: "High-pressure cut-out", def: "A safety control that stops the compressor when head pressure exceeds its limit." },
    { term: "Filter-drier", def: "A liquid-line device that removes moisture and debris; a plugged one can cause flashing before the metering device." },
    { term: "Approach thinking", def: "Judging condensing temperature relative to the temperature of the air or water absorbing the heat." },
    { term: "Condenser fan", def: "The fan that moves air across an air-cooled condenser; its speed and blade condition set heat-rejection capacity." },
    { term: "Finned coil", def: "A coil whose tubes carry thin metal fins that multiply surface area so air can absorb the rejected heat." }
  ],
  video: {
    title: "3D How Refrigeration and Air Conditioning Works P1 - Components",
    embedUrl: "https://www.youtube.com/embed/p6GXJdRUz9E",
    note: "Reused from Module 1 because the verified pool has no condenser-only video; this 3D component tour is the closest verified match. This time watch only the condenser portion: follow hot discharge gas entering, giving up heat, and leaving as liquid, and map the animation onto the three zones in this module.",
    more: []
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> Name the three condenser zones in order and state whether each involves sensible heat, latent heat, or both.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: <strong>Desuperheating</strong> — sensible only, vapor cooling to saturation. Step 2: <strong>Condensing</strong> — latent, vapor becoming liquid at nearly constant temperature, where most heat leaves. Step 3: <strong>Subcooling</strong> — sensible only, liquid cooling below saturation.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> An R-410A system shows 317 psig head pressure and a liquid line temperature of 92°F. Compute subcooling.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: R-410A at 317 psig corresponds to a 100°F saturation temperature. Step 2: Subcooling = saturation − liquid line = 100 − 92 = <strong>8°F</strong>.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A clean R-134a system runs fine in May. In August the same system shows much higher head pressure with no one having touched the charge. Give the most likely explanation and one check that separates weather from fault.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Warmer August air forces a higher condensing temperature to reject the same heat, so head pressure rises normally. Step 2: Compare condensing temperature with outdoor ambient on both days; a similar difference between them suggests weather, while a much larger difference on the hot day points to dirt, airflow, or another fault.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> Discharge air from a condenser blows against a fence two feet away and curls back into the coil. Name this fault and its effect on head pressure, capacity, and compressor current.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The fault is <strong>recirculation</strong> — the coil breathes its own hot exhaust. Step 2: Effective ambient rises, so condensing temperature and head pressure rise. Step 3: Capacity falls because the compressor pumps less against higher pressure, while current draw climbs. Step 4: The fix is clearance and airflow path, not refrigerant.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> An R-22 TXV system shows 196 psig head pressure and a 99°F liquid line. Compute subcooling and state the risk.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: R-22 at 196 psig is 100°F saturation. Step 2: Subcooling = 100 − 99 = <strong>1°F</strong>. Step 3: With only a degree of margin, slight pressure drop or heat gain in the liquid line can flash liquid to gas before the metering device, starving the evaporator; on a TXV system this pattern points first toward low charge.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> Why does trapped air raise head pressure even though air is not refrigerant and was never charged on purpose?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Air is a non-condensable: at condenser temperatures it will not turn to liquid, so it accumulates in the condenser. Step 2: It occupies surface the refrigerant needs and adds its own partial pressure on top of the refrigerant's. Step 3: Condensing temperature and head pressure rise while effective capacity falls. Step 4: Prevention is proper evacuation (Module 10); cure is recovery, evacuation, and correct recharge.</p>"
    }
  ],
  quiz: [
    {
      q: "Most of the heat rejected in a condenser leaves during:",
      choices: ["Desuperheating, as sensible heat", "Condensing, as latent heat at nearly constant temperature", "Subcooling, as sensible heat", "Equal shares in all three zones"],
      answer: 1,
      explanation: "Correct: (b). The phase change carries the largest heat per pound. (a) Desuperheating only removes the vapor's extra sensible heat, a smaller share. (c) Subcooling is a few degrees of sensible cooling. (d) The zones are not equal; condensing dominates by design."
    },
    {
      q: "Subcooling is calculated as:",
      choices: ["Liquid line temperature minus saturation temperature", "Saturation temperature minus liquid line temperature", "Discharge temperature minus liquid line temperature", "Suction line temperature minus saturation temperature"],
      answer: 1,
      explanation: "Correct: (b). Liquid cooled below saturation gives a positive subcooling value. (a) reverses the subtraction and yields a negative number. (c) mixes in discharge temperature, which belongs to desuperheating. (d) is the superheat formula on the wrong side of the system."
    },
    {
      q: "R-410A head pressure is 317 psig and the liquid line is 90°F. Subcooling is:",
      choices: ["0°F", "10°F", "27°F", "Cannot be found without suction pressure"],
      answer: 1,
      explanation: "Correct: (b). 317 psig is 100°F saturation for R-410A; 100 − 90 = 10°F. (a) would require a 100°F liquid line. (c) subtracts from a discharge temperature that was never given. (d) Subcooling uses only liquid-side values; suction pressure is not involved."
    },
    {
      q: "Which condition raises head pressure?",
      choices: ["A clean coil with strong airflow", "A matted, dirt-packed condenser coil", "Mild outdoor weather", "Correct charge with clear air path"],
      answer: 1,
      explanation: "Correct: (b). Dirt insulates the coil, forcing condensing temperature and pressure up to reject the same heat. (a) and (d) describe healthy heat rejection, which holds pressure down. (c) Mild weather lowers condensing temperature and pressure."
    },
    {
      q: "Water-cooled condensers are chosen for large systems mainly because:",
      choices: ["They need no maintenance", "Water moves heat effectively, giving lower, steadier head pressure", "They use no electricity anywhere in the loop", "They eliminate the need for a metering device"],
      answer: 1,
      explanation: "Correct: (b). Water's heat-carrying ability supports big tonnage at steadier pressures. (a) They need water treatment and tower care. (c) Pumps and tower fans use electricity. (d) Every vapor-compression system still needs a metering device."
    },
    {
      q: "A condenser fan running slowly will most likely cause:",
      choices: ["Low head pressure and high subcooling", "High head pressure, rising discharge temperature, and eventual protective trip", "Low suction pressure with a frosted liquid line", "No change, because fans only affect comfort"],
      answer: 1,
      explanation: "Correct: (b). Starved airflow shrinks effective condensing capacity, so pressure and discharge temperature climb until protection acts. (a) reverses the pressure effect. (c) mixes low-side symptoms into a high-side fault. (d) The fan is the heat-rejection engine of an air-cooled condenser; its speed matters enormously."
    },
    {
      q: "Flash gas in the liquid line before the metering device is most likely when:",
      choices: ["Subcooling is generous", "Subcooling is near zero and the liquid line drops pressure or gains heat", "The evaporator is fully fed", "Head pressure is low because weather is cool"],
      answer: 1,
      explanation: "Correct: (b). With almost no subcooling margin, any pressure drop or heat gain boils some liquid early, and bubbles starve the metering device. (a) Generous subcooling is exactly the protection against flashing. (c) A fully fed evaporator is the result of solid liquid, not its cause. (d) Cool weather lowers pressure but does not by itself create flash gas in a properly charged system."
    },
    {
      q: "Judging a head pressure reading fairly requires knowing:",
      choices: ["Only the refrigerant type", "The outdoor ambient temperature at the time", "The age of the building", "The thermostat setting only"],
      answer: 1,
      explanation: "Correct: (b). Condensing temperature must sit above ambient, so the same pressure can be normal on a hot day and alarming on a mild one. (a) Refrigerant type is needed for the P/T conversion but says nothing about whether the result fits the day. (c) Building age does not set condenser physics. (d) The thermostat influences run time, not the pressure a running condenser should show."
    }
  ],
  studyGuide: `
<h3>Module 5 — Condensers & Heat Rejection: Quick Reference</h3>
<p><strong>Zones in order:</strong> Desuperheating (sensible, vapor to saturation) → Condensing (latent, constant temperature, most heat) → Subcooling (sensible, liquid below saturation).</p>
<div class="formula">Subcooling = Saturation temperature − Liquid line temperature</div>
<p><strong>Examples:</strong> R-410A 317 psig = 100°F saturation; liquid at 90°F = 10°F subcooling. R-22 196 psig = 100°F; liquid at 88°F = 12°F subcooling.</p>
<p><strong>Head pressure</strong> = condensing temperature in disguise. Raised by: hot ambient, dirt, weak fan, recirculation, non-condensables, overcharge. Always judge it against the day's ambient.</p>
<p><strong>Air vs. water:</strong> Air-cooled = simple, weather-dependent, residential standard. Water-cooled = lower, steadier pressure for large tonnage, but needs water treatment and a tower.</p>
<p><strong>Watch out:</strong> Airflow and cleanliness before charge. A tripped high-pressure cut-out is a heat-rejection diagnosis waiting to happen.</p>
<p><strong>Self-check:</strong> Walk out to any running outdoor unit, note the day's ambient, and predict whether head pressure should be modest or straining before you connect a single hose. A technician who predicts first and measures second catches instrument errors that a technician who only measures never sees.</p>
`
};
