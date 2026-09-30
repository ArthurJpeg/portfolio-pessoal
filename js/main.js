// Menu responsivo
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
menuBtn.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
  menuBtn.textContent = open ? "Fechar" : "Menu";
});
menu.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    menu.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.textContent = "Menu";
  }
});

// Animação discreta ao aparecer na tela
const items = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    });
  }, { threshold: 0.12 });
  items.forEach((el) => io.observe(el));
} else {
  items.forEach((el) => el.classList.add("in"));
}

// Modal de detalhes dos projetos (elemento <dialog> nativo)
const modal = document.getElementById("modal");
const content = document.getElementById("modalContent");
document.querySelectorAll("[data-open]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const tpl = document.getElementById(btn.dataset.open);
    content.replaceChildren(tpl.content.cloneNode(true));
    content.querySelector("h3").id = "modalTitle";
    modal.showModal();
  });
});
document.getElementById("modalClose").addEventListener("click", () => modal.close());
modal.addEventListener("click", (e) => { if (e.target === modal) modal.close(); });

document.getElementById("year").textContent = new Date().getFullYear();
