// Reveal elements on scroll
function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    for (const el of reveals) {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      const elementVisible = 100;
  
      if (elementTop < windowHeight - elementVisible) {
        el.classList.add("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  
  // Run once on page load
  reveal();
  