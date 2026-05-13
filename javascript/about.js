const counters = document.querySelectorAll(".count");

const startCounting = (counter) => {
  const target = +counter.getAttribute("data-target");
  let current = 0;
  const step = target / 80;

  const update = () => {
    current += step;

    if (current < target) {
      counter.innerText = Math.ceil(current);
      requestAnimationFrame(update);
    } else {
      counter.innerText = target;
    }
  };

  update();
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      startCounting(entry.target);
      observer.unobserve(entry.target); // vacib: 1 dəfə işləsin
    }
  });
});

counters.forEach(counter => observer.observe(counter));













// basliq

document.addEventListener("DOMContentLoaded", () => {

  const links = document.querySelectorAll(".navbar-container a");

  const getPage = (url) => {
    if (!url) return "";
    return url.split("/").pop().split("#")[0];
  };

  const currentPage = getPage(window.location.pathname);

  function setActive(link) {
    links.forEach(l => l.classList.remove("active"));

    link.classList.add("active");

    // dropdown parent
    const parent = link.closest(".pages");
    if (parent) {
      const parentLink = parent.querySelector(":scope > a");
      if (parentLink) parentLink.classList.add("active");
    }
  }

  links.forEach(link => {

    const linkPage = getPage(link.getAttribute("href"));

    // PAGE LOAD ACTIVE
    if (linkPage === currentPage) {
      setActive(link);
    }

    // CLICK ACTIVE (SPA kimi hiss üçün)
    link.addEventListener("click", () => {
      setActive(link);
    });

  });

});