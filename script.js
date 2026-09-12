/* ===========================================================
   Cana Way — Punta Cana Trip Site
   Data + interactivity
=========================================================== */

const AIRBNB_1_ADDR = "Calle Marcio Veloz Maggiolo, Los Corales, Punta Cana, Dominican Republic";
const AIRBNB_2_ADDR = "Calle La Ceiba, Punta Cana, Dominican Republic";

const DAYS = [
  {
    num: 1,
    date: "Tuesday, September 22",
    shortDate: "Tue, Sep 22",
    title: "Arrival, Groceries & Los Corales Beach",
    tag: "Arrival Day",
    icon: "basket",
    gradient: "grad-sunrise",
    time: "Flexible",
    transport: "PUJ → Airbnb 1: 25–35 min",
    summary: "Touch down, settle into Airbnb 1, and stock up for the week at Sirena Market before an easy first sunset on the sand.",
    plan: [
      { heading: "Check-in & groceries", text: "Check in at Airbnb 1 first, then head to Sirena Market at San Juan Shopping Center — about 15–25 minutes each way from Los Corales." },
      { heading: "Evening", text: "Rest up, then walk over to Los Corales Beach around 4:30 PM. Beach access is free; chairs and food cost extra." }
    ],
    note: null,
    mapOrigin: AIRBNB_1_ADDR,
    mapDestination: "San Juan Shopping Center, Punta Cana, Dominican Republic",
    mapCaption: "Airbnb 1 → Sirena Market, San Juan Shopping Center"
  },
  {
    num: 2,
    date: "Wednesday, September 23",
    shortDate: "Wed, Sep 23",
    title: "Scuba Doo & Los Corales Beach",
    tag: "Adventure",
    icon: "scuba",
    gradient: "grad-ocean",
    photo: "assets/photos/scuba-doo.jpg",
    time: "8 AM – 1 PM",
    transport: "20–35 min each way",
    summary: "An underwater scooter adventure just off the coast, then back to Los Corales to dry off and relax.",
    plan: [
      { heading: "Scuba Doo excursion", text: "Leave around 8 AM. The excursion itself runs roughly 9 AM to 12:30 PM, with return by about 1 PM." },
      { heading: "Good to know", text: "The underwater scooter portion is only about 15 minutes, but pickup, the boat ride, snorkeling and waiting can stretch the full outing to around three to three-and-a-half hours." }
    ],
    note: "Gboye should find where we should go as he no allow us bring PS5",
    mapOrigin: AIRBNB_1_ADDR,
    mapDestination: "Scuba Doo Punta Cana, Bávaro, Dominican Republic",
    mapCaption: "Airbnb 1 → Scuba Doo, Bávaro"
  },
  {
    num: 3,
    date: "Thursday, September 24",
    shortDate: "Thu, Sep 24",
    title: "Saona Island",
    tag: "Island Excursion",
    icon: "boat",
    gradient: "grad-lagoon",
    photo: "assets/photos/saona-island.jpg",
    time: "7 AM – 7 PM",
    transport: "Bayahibe: 60–75 min direct",
    summary: "A full day boating out to the postcard beaches of Saona Island — bring sunscreen and a charged camera.",
    plan: [
      { heading: "Departure & return", text: "Pickup is approximately 7 to 7:45 AM, with an expected return between about 6:30 and 7:30 PM." },
      { heading: "Good to know", text: "The excursion itself runs about eight and a half hours, but shared pickup circuits can stretch the door-to-door day to roughly 10 to 12 hours." }
    ],
    note: "Rozay should find where we should go.",
    mapOrigin: AIRBNB_1_ADDR,
    mapDestination: "Bayahibe, La Altagracia, Dominican Republic",
    mapCaption: "Airbnb 1 → Bayahibe (Saona Island departure point)"
  },
  {
    num: 4,
    date: "Friday, September 25",
    shortDate: "Fri, Sep 25",
    title: "Beach Morning, Airbnb Switch & Cielo Beach Club",
    tag: "Move & Party",
    icon: "cocktail",
    gradient: "grad-coral",
    photo: "assets/photos/cielo-beach-club.jpg",
    time: "9 AM – 4 AM",
    transport: "Move to Airbnb 2: 20–30 min",
    summary: "One last morning in Bávaro, a move across town, then an all-white night at Cielo Beach Club.",
    plan: [
      { heading: "Morning beach", text: "9 to 11 AM at Los Corales or El Cortecito Beach." },
      { heading: "Check-out & move", text: "Around noon, check out of Airbnb 1 and travel approximately 20–30 minutes to Airbnb 2." },
      { heading: "Later", text: "Cielo Beach Club — the all-white party." }
    ],
    note: null,
    mapOrigin: AIRBNB_1_ADDR,
    mapDestination: AIRBNB_2_ADDR,
    mapCaption: "Airbnb 1 → Airbnb 2 (the move across town)"
  },
  {
    num: 5,
    date: "Saturday, September 26",
    shortDate: "Sat, Sep 26",
    title: "Recovery Day & Coco Bongo",
    tag: "Nightlife",
    icon: "disco",
    gradient: "grad-night",
    photo: "assets/photos/coco-bongo.jpg",
    time: "8 PM",
    transport: "Mostly 5–20 min",
    summary: "A slow recovery day around Airbnb 2 before a late night out at Coco Bongo.",
    plan: [
      { heading: "Daytime", text: "Recovery day — keep it easy around Downtown Punta Cana." },
      { heading: "Later", text: "Coco Bongo at 8 PM." }
    ],
    note: null,
    mapOrigin: AIRBNB_2_ADDR,
    mapDestination: "Coco Bongo Punta Cana, Dominican Republic",
    mapCaption: "Airbnb 2 → Coco Bongo"
  },
  {
    num: 6,
    date: "Sunday, September 27",
    shortDate: "Sun, Sep 27",
    title: "Caribbean Lake Park",
    tag: "Water Park",
    icon: "park",
    gradient: "grad-sky",
    photo: "assets/photos/caribbean-lake-park.jpg",
    time: "9:30 AM – 3 PM",
    transport: "About 5–10 min",
    summary: "A downtown water park day — slides, lounging, and an easy trip from Airbnb 2.",
    plan: [
      { heading: "Plan", text: "Leave around 9:30 AM. The park is in Downtown Punta Cana, roughly 10–15 minutes from Airbnb 2." }
    ],
    note: null,
    mapOrigin: AIRBNB_2_ADDR,
    mapDestination: "Caribbean Lake Park, Punta Cana, Dominican Republic",
    mapCaption: "Airbnb 2 → Caribbean Lake Park"
  },
  {
    num: 7,
    date: "Monday, September 28",
    shortDate: "Mon, Sep 28",
    title: "ATV, Cenote & Playa Macao",
    tag: "Adventure",
    icon: "atv",
    gradient: "grad-dune",
    photo: "assets/photos/atv-adventure.jpg",
    time: "8 AM – 1 PM",
    transport: "About 30–40 min each way",
    summary: "Off-road ATVs, a cool-down swim in a cenote, then a wind-down at Playa Macao.",
    plan: [
      { heading: "Pickup & tour", text: "Pickup is around 8 to 8:30 AM with return around 1 PM. Allow about four hours for the full excursion, plus any extra pickup delays." },
      { heading: "What to wear", text: "Closed shoes and clothes that can get muddy. Playa Macao is a public beach with free access — chairs, food and activities cost extra." }
    ],
    note: null,
    mapOrigin: AIRBNB_2_ADDR,
    mapDestination: "Playa Macao, Punta Cana, Dominican Republic",
    mapCaption: "Airbnb 2 → Playa Macao"
  },
  {
    num: 8,
    date: "Tuesday, September 29",
    shortDate: "Tue, Sep 29",
    title: "Breakfast, Packing & Airport",
    tag: "Departure Day",
    icon: "suitcase",
    gradient: "grad-dusk",
    photo: "assets/photos/airport.jpg",
    time: "Flight dependent",
    transport: "About 15–20 min",
    summary: "Last breakfast, final packing, and the short ride to PUJ for the flight home.",
    plan: [
      { heading: "Plan", text: "Keep it relaxed — breakfast, pack up, and head to the airport with about 15–20 minutes of travel time from Airbnb 2." }
    ],
    note: null,
    mapOrigin: AIRBNB_2_ADDR,
    mapDestination: "Punta Cana International Airport (PUJ), Dominican Republic",
    mapCaption: "Airbnb 2 → PUJ Airport"
  }
];

/* ---------------- Itinerary card rendering ---------------- */
function renderItinerary() {
  const grid = document.getElementById("itineraryGrid");
  grid.innerHTML = DAYS.map((d, i) => `
    <button class="card day-card" data-index="${i}">
      <div class="photo-tile ${d.gradient}${d.photo ? " has-photo" : ""}">
        ${d.photo ? `<img class="tile-photo" src="${d.photo}" alt="${d.title}">` : ""}
        <span class="pill light">${d.tag}</span>
        <svg class="icon icon-lg"><use href="#icon-${d.icon}"></use></svg>
        <span class="day-num">${String(d.num).padStart(2, "0")}</span>
      </div>
      <div class="day-body">
        <div class="day-date">${d.shortDate}</div>
        <h3>${d.title}</h3>
        <div class="day-meta-row">
          <span><svg class="icon"><use href="#icon-clock"></use></svg>${d.time}</span>
        </div>
        <p class="day-summary">${d.summary}</p>
        <span class="day-cta">Full details <svg class="icon"><use href="#icon-chevron"></use></svg></span>
      </div>
    </button>
  `).join("");

  grid.querySelectorAll(".day-card").forEach(card => {
    card.addEventListener("click", () => openModal(Number(card.dataset.index)));
  });
}

/* ---------------- Modal ---------------- */
const modal = document.getElementById("dayModal");
const modalClose = document.getElementById("modalClose");

function mapEmbedSrc(origin, destination) {
  return `https://www.google.com/maps?saddr=${encodeURIComponent(origin)}&daddr=${encodeURIComponent(destination)}&output=embed`;
}

function openModal(index) {
  const d = DAYS[index];

  document.getElementById("modalHero").className = `modal-hero ${d.gradient}${d.photo ? " has-photo" : ""}`;
  const modalHeroImg = document.getElementById("modalHeroImg");
  if (d.photo) {
    modalHeroImg.src = d.photo;
    modalHeroImg.alt = d.title;
    modalHeroImg.hidden = false;
  } else {
    modalHeroImg.hidden = true;
    modalHeroImg.src = "";
  }
  document.getElementById("modalPillTag").textContent = d.tag;
  document.getElementById("modalIconUse").setAttribute("href", `#icon-${d.icon}`);
  document.getElementById("modalDate").textContent = d.date;
  document.getElementById("modalTitle").textContent = d.title;

  document.getElementById("modalMeta").innerHTML = `
    <span class="chip"><svg class="icon"><use href="#icon-clock"></use></svg>${d.time}</span>
    <span class="chip"><svg class="icon"><use href="#icon-car"></use></svg>${d.transport}</span>
  `;

  document.getElementById("modalPlan").innerHTML = d.plan.map(p => `
    <div class="plan-block">
      <span class="dot"></span>
      <div class="txt"><strong>${p.heading}</strong><p>${p.text}</p></div>
    </div>
  `).join("");

  const noteSection = document.getElementById("modalNoteSection");
  if (d.note) {
    noteSection.style.display = "";
    document.querySelector("#modalNote span").textContent = d.note;
  } else {
    noteSection.style.display = "none";
  }

  document.getElementById("modalMap").src = mapEmbedSrc(d.mapOrigin, d.mapDestination);
  document.getElementById("modalMapCaption").textContent = d.mapCaption;
  document.getElementById("modalMapLink").href =
    `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(d.mapOrigin)}&destination=${encodeURIComponent(d.mapDestination)}`;

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("open");
  document.body.style.overflow = "";
  document.getElementById("modalMap").src = "";
}

modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

/* ---------------- Countdown ---------------- */
function updateCountdown() {
  const target = new Date("2026-09-22T00:00:00-04:00").getTime();
  const now = Date.now();
  const diff = target - now;

  const el = (id, val) => document.getElementById(id).textContent = String(val).padStart(2, "0");

  if (diff <= 0) {
    el("cdDays", 0); el("cdHours", 0); el("cdMins", 0); el("cdSecs", 0);
    return;
  }
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);
  const secs = Math.floor((diff % 60000) / 1000);
  el("cdDays", days); el("cdHours", hours); el("cdMins", mins); el("cdSecs", secs);
}

/* ---------------- Nav: scroll shadow, spy, mobile toggle ---------------- */
const siteNav = document.getElementById("siteNav");
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
const backToTop = document.getElementById("backToTop");
const sections = ["stay", "itinerary", "lowcost", "budget", "tips", "checklist"]
  .map(id => document.getElementById(id));

function onScroll() {
  siteNav.classList.toggle("scrolled", window.scrollY > 10);
  backToTop.classList.toggle("show", window.scrollY > 600);

  let current = null;
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top <= 120 && rect.bottom >= 120) current = sec.id;
  });
  navLinks.querySelectorAll("a").forEach(a => {
    a.classList.toggle("active", a.getAttribute("href") === `#${current}`);
  });
}
window.addEventListener("scroll", onScroll, { passive: true });

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("mobile-open");
  document.getElementById("menuIcon").setAttribute("href", isOpen ? "#icon-close" : "#icon-menu");
});
navLinks.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    navLinks.classList.remove("mobile-open");
    document.getElementById("menuIcon").setAttribute("href", "#icon-menu");
  });
});

backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

/* ---------------- Checklist (persisted per-device) ---------------- */
function initChecklist() {
  const items = document.querySelectorAll(".checklist-item");
  const STORAGE_KEY = "canaway-checklist";
  let state = {};
  try {
    state = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch (e) {
    state = {};
  }

  function updateProgress() {
    const total = items.length;
    const done = Array.from(items).filter(i => i.classList.contains("checked")).length;
    document.getElementById("progressFill").style.width = `${(done / total) * 100}%`;
    document.getElementById("progressLabel").textContent = `${done} / ${total}`;
  }

  items.forEach(item => {
    const key = item.dataset.key;
    if (state[key]) item.classList.add("checked");
    item.addEventListener("click", () => {
      item.classList.toggle("checked");
      state[key] = item.classList.contains("checked");
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) {}
      updateProgress();
    });
  });
  updateProgress();
}

/* ---------------- Init ---------------- */
renderItinerary();
initChecklist();
updateCountdown();
setInterval(updateCountdown, 1000);
onScroll();
