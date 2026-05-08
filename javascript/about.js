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

