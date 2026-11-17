const data = window.PORTFOLIO;
const $ = (selector) => document.querySelector(selector);
const el = (tag, className, text) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
};
const safeLink = (url) => typeof url === "string" && /^https:\/\//i.test(url);

$("#availability").textContent = data.availability;
$("#hero-name").innerHTML = `${escapeHTML(data.name)}<span class="accent">.</span>`;
$("#hero-title").innerHTML = `${escapeHTML(data.title)} <span class="muted">| Generative AI · RAG · Data & AI</span>`;
$("#hero-summary").textContent = data.summary;
$("#about-lead").textContent = data.aboutLead;
$("#about-detail").textContent = data.aboutDetail;
$("#resume-link").href = data.resume;
$("#email-link").href = `mailto:${data.email}?subject=${encodeURIComponent("Let's connect — AI Engineering")}`;
$("#year").textContent = new Date().getFullYear();

const socials = $("#social-links");
[
  ["LinkedIn", data.linkedin],
  ["GitHub", data.github],
  ["Email", `mailto:${data.email}`]
].forEach(([label, url]) => {
  if (!url) return;
  const a = el("a", "social-link", `${label} ↗`);
  a.href = url; a.target = url.startsWith("mailto:") ? "_self" : "_blank"; a.rel = "noopener";
  socials.append(a);
});

data.stats.forEach(stat => {
  const item = el("div", "stat");
  item.append(el("strong", "", stat.value), el("span", "", stat.label));
  $("#stats").append(item);
});

data.experience.forEach(job => {
  const article = el("article", "timeline-item");
  const meta = el("div", "timeline-meta");
  meta.append(el("span", "period", job.period), el("span", "location", job.location));
  const body = el("div", "timeline-body");
  body.append(el("h3", "", job.role), el("p", "company", job.company));
  const list = el("ul", "detail-list");
  job.points.forEach(point => list.append(el("li", "", point)));
  body.append(list);
  const tags = el("div", "tag-list");
  job.tags.forEach(tag => tags.append(el("span", "tag", tag)));
  body.append(tags); article.append(meta, body); $("#experience-list").append(article);
});

data.projects.forEach(project => {
  const card = el("article", "project-card");
  const top = el("div", "project-top");
  top.append(el("span", "project-number", project.number), el("span", "project-category", project.category));
  card.append(top, el("h3", "", project.name), el("p", "project-description", project.description));
  const list = el("ul", "project-highlights");
  project.highlights.forEach(item => list.append(el("li", "", item)));
  card.append(list);
  const tags = el("div", "tag-list");
  project.stack.forEach(tag => tags.append(el("span", "tag", tag)));
  card.append(tags);
  const actions = el("div", "project-actions");
  if (safeLink(project.repo)) { const a = el("a", "text-link", "Source code ↗"); a.href = project.repo; a.target = "_blank"; a.rel = "noopener"; actions.append(a); }
  if (safeLink(project.demo)) { const a = el("a", "text-link", "Live demo ↗"); a.href = project.demo; a.target = "_blank"; a.rel = "noopener"; actions.append(a); }
  if (actions.childElementCount) card.append(actions);
  $("#project-list").append(card);
});

data.skills.forEach(group => {
  const card = el("article", "skill-card");
  card.append(el("h3", "", group.group));
  const tags = el("div", "tag-list");
  group.items.forEach(item => tags.append(el("span", "skill-pill", item)));
  card.append(tags); $("#skills-list").append(card);
});

const edu = data.education;
const educationCard = $("#education-card");
educationCard.append(el("p", "eyebrow", "EDUCATION"), el("h3", "", edu.degree), el("p", "institution", edu.institution), el("p", "location", edu.location));
const eduBottom = el("div", "education-bottom");
eduBottom.append(el("span", "", edu.period), el("strong", "", `CGPA ${edu.score}`));
educationCard.append(eduBottom);

data.achievements.forEach(item => {
  const row = el("div", "achievement");
  row.append(el("span", "achievement-mark", "✳"), el("div", ""));
  row.lastChild.append(el("strong", "", item.title), el("span", "", item.detail));
  $("#achievement-list").append(row);
});
data.leadership.forEach(item => $("#leadership-list").append(el("div", "leadership-item", item)));

const contact = $("#contact-meta");
contact.append(el("span", "", data.location));
const phone = el("a", "", data.phone); phone.href = `tel:${data.phone.replace(/[^\d+]/g, "")}`; contact.append(phone);
const email = el("a", "", data.email); email.href = `mailto:${data.email}`; contact.append(email);

const menuButton = $(".menu-toggle");
menuButton.addEventListener("click", () => {
  const open = $(".nav").classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(open));
});
document.querySelectorAll(".nav a").forEach(link => link.addEventListener("click", () => {
  $(".nav").classList.remove("is-open"); menuButton.setAttribute("aria-expanded", "false");
}));
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[char]));
}