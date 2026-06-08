const header = document.querySelector(".site-header");

function updateHeader() {
  if (!header) return;
  header.dataset.elevated = String(window.scrollY > 12);
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });
