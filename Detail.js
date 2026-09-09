// 1. ANIMASI SCROLL REVEAL
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");
  const windowHeight = window.innerHeight;

  reveals.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 80;

    if (elementTop < windowHeight - elementVisible) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("DOMContentLoaded", revealOnScroll);
window.addEventListener("scroll", revealOnScroll);

// 2. SWITCH KATALOG (MALE / FEMALE)
function switchCatalog(gender) {
  // Ganti class active pada tombol tab
  const tabs = document.querySelectorAll(".tab-btn");
  tabs.forEach((tab) => tab.classList.remove("active"));

  // Aktifkan tab yang dipilih
  if (gender === "male") {
    tabs[0].classList.add("active");
    document.getElementById("catalog-male").classList.add("active-catalog");
    document.getElementById("catalog-female").classList.remove("active-catalog");
  } else {
    tabs[1].classList.add("active");
    document.getElementById("catalog-female").classList.add("active-catalog");
    document.getElementById("catalog-male").classList.remove("active-catalog");
  }

  // Reset pencarian saat ganti tab
  document.getElementById("memberSearch").value = "";
  filterMembers();

  // Trigger
  setTimeout(revealOnScroll, 100);
}

// function search
function filterMembers() {
  const searchInput = document.getElementById("memberSearch").value.toLowerCase();
  const activeCatalog = document.querySelector(".catalog-content.active-catalog");
  const cards = activeCatalog.querySelectorAll(".member-card");

  cards.forEach((card) => {
    const dataSearch = card.getAttribute("data-name").toLowerCase();
    if (dataSearch.includes(searchInput)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
