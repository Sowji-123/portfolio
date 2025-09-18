// highlight active nav link on scroll + intersection animations
const navLinks = document.querySelectorAll("nav ul li a");
const sections = document.querySelectorAll("section[id]");

// IntersectionObserver for fade-in animations
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => {
  section.classList.add("hidden");
  observer.observe(section);
});

// active nav link based on scroll position
window.addEventListener("scroll", () => {
  const fromTop = window.scrollY + 140; // offset to account for fixed header
  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (!href || href.charAt(0) !== "#") return;
    const section = document.querySelector(href);
    if (!section) return;

    if (section.offsetTop <= fromTop && (section.offsetTop + section.offsetHeight) > fromTop) {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    }
  });
});

// Smooth scroll fallback
navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");
    if (!href || href.charAt(0) !== "#") return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const headerOffset = 120;
      const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      history.pushState(null, "", href);
    }
  });
});

// ----------------- CONTACT FORM FUNCTIONALITY -----------------
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      formStatus.textContent = "⚠️ Please fill in all fields.";
      formStatus.style.color = "red";
      return;
    }

    // (Simulating form submission — replace with EmailJS / backend if needed)
    setTimeout(() => {
      formStatus.textContent = "✅ Thank you! Your message has been sent successfully.";
      formStatus.style.color = "green";
      contactForm.reset();
    }, 1000);
  });
}
