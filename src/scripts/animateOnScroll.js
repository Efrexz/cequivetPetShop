document.addEventListener("DOMContentLoaded", () => {
  const animateElements = document.querySelectorAll("[data-animate]");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2, // Se considera visible cuando el 20% del elemento está en el viewport
    }
  );

  animateElements.forEach((element) => {
    observer.observe(element);
  });

  // Animaciones iniciales para elementos que podrían estar visibles al cargar
  // Puedes añadir IDs o clases específicas para controlar esto mejor
  const heroContent = document.querySelector(".hero-content");
  const heroImage = document.querySelector(".hero-image");

  if (heroContent) {
    setTimeout(() => heroContent.classList.add("is-visible"), 100);
  }
  if (heroImage) {
    setTimeout(() => heroImage.classList.add("is-visible"), 300);
  }
});
