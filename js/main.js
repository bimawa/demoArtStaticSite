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
