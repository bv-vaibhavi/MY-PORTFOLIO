// Mobile Navbar Toggle
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const menu = document.getElementById("navMenu");

  if (!burger || !menu) return;

  burger.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    burger.classList.toggle("open", isOpen);
    burger.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Close menu when clicking a link
  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      burger.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    });
  });
});
