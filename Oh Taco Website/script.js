// Toggle Navigation Menu
function toggleNav() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('menu-open');
}

// Modal functionality for viewing images in full size
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close");

// Open modal on image click
document.querySelectorAll(".menu-images img").forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.dataset.src || img.src; // Fallback to `src` if `data-src` is missing
  });
});

// Close modal when 'X' is clicked
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal on outside click
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Randomly Position Decorative Icons
function randomizeIconPositions() {
  const icons = document.querySelectorAll(".decorative-icon");
  icons.forEach((icon) => {
    const randomTop = Math.random() * 80 + 10; // Random top position between 10% and 90%
    const randomLeft = Math.random() * 90; // Random left position between 0% and 90%
    icon.style.top = `${randomTop}%`;
    icon.style.left = `${randomLeft}%`;
    icon.style.animationDelay = `${Math.random() * 5}s`; // Random animation delay
  });
}

// Initialize icon positions on page load
document.addEventListener("DOMContentLoaded", () => {
  randomizeIconPositions();
});

// Re-randomize icon positions when resizing the window
window.addEventListener("resize", randomizeIconPositions);

// Smooth Scrolling for Navigation Links
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href");
    if (targetId.startsWith("#")) {
      e.preventDefault();
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    }
  });
});
