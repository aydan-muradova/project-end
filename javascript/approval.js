

document.addEventListener("DOMContentLoaded", () => {

  const links = document.querySelectorAll(".navbar-container a");

  function getPageName(url) {
    if (!url) return "";
    return url.split("/").pop().split("#")[0];
  }

  function setActive(activeLink) {

    links.forEach(l => l.classList.remove("active"));

    activeLink.classList.add("active");

    // dropdown parent active
    const parent = activeLink.closest(".pages");

    if (parent) {
      const parentLink = parent.querySelector(":scope > a");
      if (parentLink) parentLink.classList.add("active");
    }
  }

  // 🔥 CLICK ACTIVE
  links.forEach(link => {

    link.addEventListener("click", () => {
      setActive(link);
    });

  });

  // 🔥 PAGE LOAD ACTIVE (REAL FIX)
  const currentPage = getPageName(window.location.href);

  let matched = null;

  links.forEach(link => {

    const href = getPageName(link.href);

    if (href === currentPage) {
      matched = link;
    }

  });

  if (matched) {
    setActive(matched);
  } else {
    // fallback: first link active
    if (links[0]) setActive(links[0]);
  }

});