const supportsNativeSmoothScroll =
  "scrollBehavior" in document.documentElement.style;

if (!supportsNativeSmoothScroll) {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      const target = targetId ? document.querySelector(targetId) : null;

      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

const contactForm = document.querySelector("#contact form");

if (contactForm) {
  contactForm.addEventListener("submit", () => {
    contactForm.classList.add("is-submitting");
  });
}

// Lightbox Gallery
const lightbox = document.createElement("div");
lightbox.id = "lightbox";
lightbox.innerHTML = `
  <div class="lightbox-backdrop"></div>
  <img class="lightbox-img" src="" alt="">
  <button class="lightbox-close" aria-label="Close">&times;</button>
  <button class="lightbox-nav lightbox-prev" aria-label="Previous">&#10094;</button>
  <button class="lightbox-nav lightbox-next" aria-label="Next">&#10095;</button>
`;
document.body.appendChild(lightbox);

const lightboxImg = lightbox.querySelector(".lightbox-img");
const lightboxClose = lightbox.querySelector(".lightbox-close");
const lightboxBackdrop = lightbox.querySelector(".lightbox-backdrop");
const lightboxPrev = lightbox.querySelector(".lightbox-prev");
const lightboxNext = lightbox.querySelector(".lightbox-next");

const artworks = Array.from(document.querySelectorAll(".artwork img"));
let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;
  const img = artworks[index];
  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
  lightbox.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("active");
  document.body.style.overflow = "";
}

function showPrev() {
  currentIndex = (currentIndex - 1 + artworks.length) % artworks.length;
  lightboxImg.src = artworks[currentIndex].src;
  lightboxImg.alt = artworks[currentIndex].alt;
}

function showNext() {
  currentIndex = (currentIndex + 1) % artworks.length;
  lightboxImg.src = artworks[currentIndex].src;
  lightboxImg.alt = artworks[currentIndex].alt;
}

artworks.forEach((img, index) => {
  img.style.cursor = "pointer";
  img.addEventListener("click", () => openLightbox(index));
});

lightboxClose.addEventListener("click", closeLightbox);
lightboxBackdrop.addEventListener("click", closeLightbox);
lightboxPrev.addEventListener("click", showPrev);
lightboxNext.addEventListener("click", showNext);

document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("active")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") showPrev();
  if (e.key === "ArrowRight") showNext();
});
