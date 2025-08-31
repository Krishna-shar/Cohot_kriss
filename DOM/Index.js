const navbar = document.getElementById("navbar");
let prevScrollPos = window.scrollY;
let ticking = false;

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      let currentScrollPos = window.scrollY;

      if (prevScrollPos < currentScrollPos) {
        // scrolling down → hide navbar
        navbar.style.top = "-70px";
      } else {
        // scrolling up → show navbar
        navbar.style.top = "0";
      }

      prevScrollPos = currentScrollPos;
      ticking = false;
    });

    ticking = true;
  }
});
