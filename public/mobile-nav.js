document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("menu-btn");
  const menu = document.getElementById("mobile-menu");

  if (!btn || !menu) return;

  // Toggle menu open/close
  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

  // Close menu when clicking a link
  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
    });
  });
});
