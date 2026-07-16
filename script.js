// Willow Park F.C. — interactions

document.documentElement.classList.add("js");

// Scroll reveals with per-section stagger
const revealed = document.querySelectorAll(".reveal");
const groups = new Map();

const io = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      const el = entry.target;
      const section = el.closest("section, footer") || document.body;
      const now = performance.now();
      const last = groups.get(section) || { t: 0, n: 0 };
      // Reset stagger counter if this section's batch is older than 200ms
      const n = now - last.t < 200 ? last.n + 1 : 0;
      groups.set(section, { t: now, n });
      el.style.setProperty("--d", `${n * 80}ms`);
      el.classList.add("in");
      io.unobserve(el);
    }
  },
  { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
);
revealed.forEach((el) => io.observe(el));

// Failsafe: anything IO hasn't handled within 4s becomes visible
setTimeout(() => {
  revealed.forEach((el) => {
    if (!el.classList.contains("in") && el.getBoundingClientRect().top < innerHeight) {
      el.classList.add("in");
    }
  });
}, 4000);

// Nav shadow on scroll
const nav = document.querySelector(".nav");
addEventListener(
  "scroll",
  () => nav.classList.toggle("scrolled", scrollY > 8),
  { passive: true }
);

// Fixture & result section filters
const filterBtns = document.querySelectorAll(".filter");
filterBtns.forEach((btn) =>
  btn.addEventListener("click", () => {
    const f = btn.dataset.filter;
    filterBtns.forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
    document.querySelectorAll(".fixture-list, .result-list").forEach((list) => {
      let visible = 0;
      list.querySelectorAll("[data-group]").forEach((row) => {
        const show = f === "all" || row.dataset.group === f;
        row.hidden = !show;
        if (show) visible++;
      });
      const empty = list.querySelector(".list-empty");
      if (empty) empty.hidden = visible > 0;
    });
  })
);

// Mobile menu
const burger = document.querySelector(".nav-burger");
burger.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  burger.setAttribute("aria-expanded", String(open));
  burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
});
document.querySelectorAll(".nav-links a").forEach((a) =>
  a.addEventListener("click", () => {
    nav.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
  })
);
