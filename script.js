/* ===== PARTH.EXE script.js — all jokes live in the lists below, edit freely ===== */
const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const pick = a => a[Math.floor(Math.random() * a.length)];
const still = matchMedia("(prefers-reduced-motion:reduce)").matches;

const BOOT = ["INITIALIZING PARTH DATABASE...", "Locating common sense...", "Searching for logic...", "Contacting Hasanpur headquarters...", "Scanning legendary activities...", "WARNING: Too much Parth detected.", "SYSTEM CONFUSED.", "", "PARTH.EXE HAS STARTED SUCCESSFULLY"];
const NEWS = ["BREAKING: PARTH OPENS A WEBSITE AND IMMEDIATELY BECOMES A NATIONAL TOPIC.", "EXCLUSIVE: Hasanpur scientists still investigating the mystery of Parth.exe.", "WEATHER REPORT: 90% chance of bakchodi, 10% chance of productivity.", "URGENT: Local browser requests a break after processing Parth-related information.", "DEVELOPING STORY: Common sense has been reported missing from this fictional investigation.", "LIVE: Hasanpur chai stall declares Parth's 'bas 5 minute' a unit of time.", "FLASH: Parth's 'dekh lenge' ruled a binding legal document (fictional)."];
const METERS = [["Common Sense", "Under Maintenance", 8], ["Logic Level", "Connection Lost", 3], ["Main Character Energy", "9999%", 100], ["Drama Detected", "Critical", 95], ["Brain Loading", "Please Wait...", 45], ["Hasanpur Fame", "Locally Legendary", 80]];
const AWARDS = [["The “Kal Se Pakka” Award", "For legendary promises about tomorrow.", "Maine kaha tha kal se… par kal kab aata hai? Thank you!"], ["The Human Loading Screen Award", "For taking dramatically long to process simple situations.", "Speech loading… 99%… 99%… 99%…"], ["Overthinking Olympics Gold Medal", "For imagining 27 possible outcomes.", "Main 27 speeches soch raha hoon, ek select karne mein time lagega."], ["Main Character of Hasanpur Award", "For background music that exists only in his imagination.", "*dramatic BGM plays only in my head* Dhanyavaad."], ["The Wi-Fi Without Internet Award", "Connected, but nobody knows what is happening.", "Connected hoon, bas kuch load nahi ho raha."], ["CEO of Unnecessary Drama Award", "For running a flawless drama department with zero employees.", "Mere board of directors (mere dimaag) ko dhanyavaad."], ["International Department of Excuses Award", "For excuses available in 14 languages, all unconvincing.", "Late aaya tha kyunki… traffic nahi tha, bas mood nahi tha."], ["Lifetime Achievement in Timepass", "For turning nothing into a full-time career.", "Is award ko lene mein 5 minute lagenge. Bas 5 minute."]];
const FINDINGS = ["Finding #001: Subject may say 'bas 5 minute' without consulting a clock.", "Finding #002: Subject possesses unexplained levels of confidence.", "Finding #003: Subject's future plans remain under development.", "Finding #004: Scientists have requested more time to understand the subject.", "CASE STATUS: TOO FUNNY TO RESOLVE."];
const TRAITS = {ENERGY: ["2% battery, 100% confidence.", "Unlimited energy, questionable direction.", "Silent mode activated."], "BRAIN STATUS": ["Updating...", "Server not responding.", "Genius mode unavailable in this demo.", "Unexpectedly operational."], "DAILY MISSION": ["Find snacks.", "Become Hasanpur legend.", "Start something and forget why.", "Open phone, forget purpose."], "SPECIAL POWER": ["Turning five minutes into a full documentary.", "Detecting food from impossible distances.", "Creating dramatic background music mentally.", "Saying “dekh lenge” with complete confidence."]};
const ROAST = [[25, "Chill mode. Parth bach gaya."], [50, "Thodi si leg-pulling detected."], [75, "Hasanpur comedy department is impressed."], [99, "Maximum friendly roast activated."], [100, "CRITICAL MEME ALERT. Even the website needs a break."]];
const SIM = {wake: ["Parth has successfully opened his eyes. Productivity has not yet been detected.", 5], plan: ["Mission scheduled. Execution team unavailable.", 12], dist: ["Achievement unlocked: 47 minutes disappeared.", -15], again: ["New attempt initiated. Previous bugs remain.", 3]};
const EVENTS = ["RANDOM EVENT: Snack radar activated. Mission paused.", "RANDOM EVENT: 'Bas 5 minute' started. Time has left the chat.", "RANDOM EVENT: Phone opened. Purpose forgotten.", "RANDOM EVENT: Sudden motivation! (Lasted 4 seconds.)"];

/* ---- modal ---- */
let last = null;
function modal(html) { last = document.activeElement; $("#box").innerHTML = html + `<br><button class="btn ghost" data-close>OK, THEEK HAI</button>`; $("#modal").classList.add("show"); $("#box").focus(); }
function closeModal() { $("#modal").classList.remove("show"); if (last) last.focus(); }
$("#modal").addEventListener("click", e => { if (e.target.id === "modal" || e.target.dataset.close !== undefined) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

/* ---- confetti (small canvas animation) ---- */
const cv = $("#confetti"), cx = cv.getContext("2d"); let bits = [];
function confetti(n = 150) {
  if (still) return; cv.width = innerWidth; cv.height = innerHeight;
  for (let i = 0; i < n; i++) bits.push({x: Math.random() * cv.width, y: -20, v: 2 + Math.random() * 5, s: 5 + Math.random() * 7, c: pick(["#ff2a4d", "#2dff8a", "#ffd60a", "#a855f7", "#38bdf8"]), r: Math.random() * 6});
  if (bits.length === n) loop();
}
function loop() { cx.clearRect(0, 0, cv.width, cv.height); bits.forEach(b => { b.y += b.v; b.r += .1; b.x += Math.sin(b.r); cx.fillStyle = b.c; cx.fillRect(b.x, b.y, b.s, b.s); }); bits = bits.filter(b => b.y < cv.height); bits.length ? requestAnimationFrame(loop) : cx.clearRect(0, 0, cv.width, cv.height); }

/* ---- intro ---- */
let bi = 0, bt;
function boot() { bt = setInterval(() => { $("#log").textContent += (BOOT[bi] || "") + "\n"; bi++; if (bi >= BOOT.length) { clearInterval(bt); $("#enter").hidden = false; $("#enter").focus(); } }, still ? 30 : 650); }
function enter() { clearInterval(bt); $("#intro").classList.add("gone"); setTimeout(() => $("#intro").remove(), 600); }
$("#enter").onclick = enter; $("#skip").onclick = enter; boot();

/* ---- build static parts ---- */
$("#tick").textContent = NEWS.join("   🚨   ");
$("#floaties").innerHTML = Array.from({length: 14}, () => `<span style="left:${Math.random() * 95}%;animation-duration:${8 + Math.random() * 10}s;animation-delay:${-Math.random() * 10}s">${pick(["❓", "💀", "🔥", "🍿", "📞", "🕵️", "⚠️", "🤡"])}</span>`).join("");
$("#meters").innerHTML = METERS.map(m => `<div class="meter"><b><span>${m[0]}</span><span>${m[1]}</span></b><div class="bar"><i data-w="${m[2]}"></i></div></div>`).join("");
$("#awardList").innerHTML = AWARDS.map((a, i) => `<div class="award"><div class="tr">🏆</div><h3>${a[0]}</h3><p>${a[1]}</p><button class="btn yellow" data-award="${i}">ACCEPT AWARD</button></div>`).join("");
const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); en.target.querySelectorAll("i[data-w]").forEach(i => i.style.width = i.dataset.w + "%"); io.unobserve(en.target); } }), {threshold: .2});
$$(".award,#report").forEach(x => io.observe(x));

/* ---- hero buttons ---- */
document.addEventListener("click", e => {
  const a = e.target.closest("[data-a]")?.dataset.a;
  if (a === "invest") { modal(`<h3>🕵️ INVESTIGATION STARTED</h3><p>Agents deployed to Hasanpur. Found: 1 Parth, 0 explanations, 3 chai cups.</p><p><b>Verdict (so far):</b> Needs more funding and more chai.</p>`); confetti(40); }
  if (a === "secret") $("#file").scrollIntoView({behavior: "smooth"}), setTimeout(() => $("#declass").focus(), 700);
  if (a === "notready") { modal(`<h3>💀 WARNING</h3><p>Aap taiyaar nahi ho. Parth.exe ke saamne koi taiyaar nahi hota. Phir bhi scroll karo, himmat rakho.</p>`); document.body.classList.add("shake"); setTimeout(() => document.body.classList.remove("shake"), 500); }
  const aw = e.target.closest("[data-award]"); if (aw) { modal(`<h3>🎤 ACCEPTANCE SPEECH</h3><p>“${AWARDS[aw.dataset.award][2]}”</p><small>— Parth (fictional speech)</small>`); confetti(60); }
  const s = e.target.closest("[data-s]")?.dataset.s; if (s) sim(s);
});

/* ---- declassify ---- */
$("#declass").onclick = () => {
  const c = $("#fileCard"); c.classList.add("shake"); setTimeout(() => c.classList.remove("shake"), 500);
  const ul = $("#findings"); ul.hidden = false; ul.innerHTML = "";
  FINDINGS.forEach((f, i) => setTimeout(() => ul.insertAdjacentHTML("beforeend", `<li>${f}</li>`), still ? 0 : 500 + i * 700));
};

/* ---- news, analyzer ---- */
$("#getNews").onclick = () => { let h; do { h = pick(NEWS); } while (h === $("#headline").textContent && NEWS.length > 1); $("#headline").textContent = h; };
$("#analyzeBtn").onclick = () => { $("#traits").innerHTML = Object.entries(TRAITS).map(([k, v], i) => `<div style="animation-delay:${i * .15}s"><small>${k}</small>${pick(v)}</div>`).join(""); };

/* ---- roast meter ---- */
let rn = 0;
function setRoast(n) { rn = n; $("#roastFill").style.width = n + "%"; $("#roastNum").textContent = n; $("#roastMsg").textContent = n === 0 ? "Press the button. Friendly roast only." : ROAST.find(r => n <= r[0])[1]; }
$("#roastBtn").onclick = () => { const n = Math.random() < .15 ? 100 : Math.floor(Math.random() * 100); setRoast(n); if (n === 100) { confetti(); modal("<h3>🚨 CRITICAL MEME ALERT</h3><p>Even the website needs a break.</p>"); } };
$("#roastReset").onclick = () => setRoast(0);

/* ---- life simulator ---- */
let prod = 0;
function sim(k) {
  if (k === "reset") { prod = 0; $("#simText").textContent = "Game reset. Parth: 'Maine kuch kiya hi nahi.'"; }
  else { prod = Math.max(0, Math.min(100, prod + SIM[k][1])); $("#simText").textContent = SIM[k][0] + (Math.random() < .35 ? "\n" + pick(EVENTS) : ""); if (prod >= 100) { $("#simText").textContent = "PRODUCTIVITY 100%?! Impossible. Bug in the game. Rebooting."; prod = 0; confetti(80); } }
  $("#simFill").style.width = prod + "%"; $("#simNum").textContent = prod;
}

/* ---- friendship mode ---- */
$("#party").onclick = () => { document.body.classList.toggle("party"); const on = document.body.classList.contains("party"); $("#party").textContent = on ? "BACK TO INVESTIGATION MODE" : "ACTIVATE BHAICHARA MODE"; if (on) { confetti(200); modal("<h3>❤️ BHAICHARA MODE ON</h3><p>Dost wahi jo tumhari taang kheenche aur phir bhi saath khada rahe. Parth, tu apna banda hai!</p>"); } };

/* ---- finale ---- */
const fin = new IntersectionObserver(es => { if (es[0].isIntersecting) { reveal(); fin.disconnect(); } }, {threshold: .6});
fin.observe($("#final"));
function reveal() { $("#v2").hidden = true; setTimeout(() => { $("#v2").hidden = false; confetti(200); }, still ? 0 : 1500); }
$("#close").onclick = () => { $("#closeMsg").textContent = "Case closed. Parth.exe continues running in the background."; };
$("#redo").onclick = () => { $("#closeMsg").textContent = ""; $("#intro")?.remove(); const l = document.createElement("div"); l.id = "intro"; l.innerHTML = `<pre id="log"></pre><div class="row"><button class="btn green" id="enter2" hidden>ENTER WEBSITE ▶</button><button class="btn ghost" id="skip2">Skip ⏭</button></div>`; document.body.prepend(l); bi = 0; const lg = $("#log"); const go = () => { l.classList.add("gone"); setTimeout(() => l.remove(), 600); clearInterval(t); }; const t = setInterval(() => { lg.textContent += (BOOT[bi] || "") + "\n"; if (++bi >= BOOT.length) { clearInterval(t); $("#enter2").hidden = false; } }, still ? 30 : 450); $("#enter2").onclick = go; $("#skip2").onclick = go; scrollTo({top: 0}); };

/* ---- easter eggs ---- */
let clicks = 0, ct;
$("#logo").onclick = () => { clicks++; clearTimeout(ct); ct = setTimeout(() => clicks = 0, 1500); if (clicks >= 5) { clicks = 0; modal("<h3>🥚 SECRET #1</h3><p>Logo 5 baar dabaya? Tum bhi investigation team mein shamil ho. Welcome, Agent!</p>"); } };
$("#dnc").onclick = () => modal("<h3>🚫 KAHA THA NA…</h3><p>'DO NOT CLICK' ka matlab 'DO NOT CLICK' hota hai. Ab system 5 minute mein theek ho jayega. (Bas 5 minute.)</p>");
$("#foot").onclick = () => { confetti(100); modal("<h3>🥚 SECRET FOOTER</h3><p>π = 3.14159… Parth ke plans ki tarah, kabhi khatam nahi hota.</p>"); };
const KON = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"]; let ki = 0;
document.addEventListener("keydown", e => { ki = e.key === KON[ki] ? ki + 1 : (e.key === KON[0] ? 1 : 0); if (ki === KON.length) { ki = 0; document.body.style.filter = "invert(1) hue-rotate(180deg)"; modal("<h3>🎮 KONAMI CODE!</h3><p>Cheat activated: Parth ko +100 chai mili. Screen wapas normal hone mein 4 second lagenge.</p>"); setTimeout(() => document.body.style.filter = "", 4000); } });
let idle; document.addEventListener("click", () => { clearTimeout(idle); idle = setTimeout(() => { if (!$("#modal").classList.contains("show")) modal("<h3>🥚 RANDOM POPUP</h3><p>Aap bohot der se kuch nahi kar rahe. Bilkul Parth ki tarah! 😄</p>"); }, 45000); });