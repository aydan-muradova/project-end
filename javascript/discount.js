const slides = document.querySelectorAll(".hero-slider .slide");
let index = 0;

function showSlide() {
  slides.forEach(s => s.classList.remove("active"));
  slides[index].classList.add("active");

  index++;
  if (index === slides.length) index = 0;
}

showSlide();
setInterval(showSlide, 4000);







document.addEventListener("DOMContentLoaded", () => {

  const cards = document.querySelectorAll(".card");

  let activeCategory = "all";
  let activeMinPrice = 0;
  let activeMaxPrice = 999999;

  // CATEGORY
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {

      document.querySelectorAll(".filter-btn")
        .forEach(b => b.classList.remove("active"));

      btn.classList.add("active");

      activeCategory = btn.dataset.filter;

      filterProducts();
    });
  });

  // PRICE
  document.querySelectorAll(".price-filter").forEach(btn => {
    btn.addEventListener("click", () => {

      activeMinPrice = Number(btn.dataset.min);
      activeMaxPrice = Number(btn.dataset.max);

      filterProducts();
    });
  });

  function filterProducts() {

    cards.forEach(card => {

      const category = card.dataset.category;
      const price = Number(card.dataset.price);

      const matchCategory =
        activeCategory === "all" || category === activeCategory;

      const matchPrice =
        price >= activeMinPrice && price <= activeMaxPrice;

      card.style.display = (matchCategory && matchPrice)
        ? "flex"
        : "none";
    });
  }

});
document.querySelectorAll(".toggle").forEach(title => {
  title.addEventListener("click", () => {

    const box = title.nextElementSibling;
    box.classList.toggle("open");

    title.classList.toggle("active");
  });
});





// =======================
// CARD (price + storage + installment)
// =======================
document.querySelectorAll(".card").forEach(card => {

  const storageBtns = card.querySelectorAll(".storage-btn");
  const monthBtns = card.querySelectorAll(".month");

  const oldPriceEl = card.querySelector(".old-price");
  const newPriceEl = card.querySelector(".new-price");

  const amountEl = card.querySelector(".amount");
  const monthCount = card.querySelector(".month-count");

  const discount = +card.dataset.discount;

  let currentPrice = +card.dataset.price;
  let currentMonth = 12;

  // STORAGE
  storageBtns.forEach(btn => {
    btn.addEventListener("click", () => {

      storageBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      currentPrice = +btn.dataset.price;

      const discounted = currentPrice - (currentPrice * discount / 100);

      oldPriceEl.textContent = currentPrice + " ₼";
      newPriceEl.textContent = Math.round(discounted) + " ₼";

      updateMonthly();
    });
  });

  // MONTH
  monthBtns.forEach(btn => {
    btn.addEventListener("click", () => {

      monthBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      currentMonth = +btn.dataset.month;
      monthCount.textContent = currentMonth + " ay";

      updateMonthly();
    });
  });

  function updateMonthly() {
    const discounted = currentPrice - (currentPrice * discount / 100);
    const monthly = (discounted / currentMonth).toFixed(0);

    amountEl.textContent = monthly + " ₼";
  }

  // ilkin hesab (page load)
  updateMonthly();
});
document.querySelectorAll(".fav-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const icon = btn.querySelector("i");
    icon.classList.toggle("fa-regular");
    icon.classList.toggle("fa-solid");
    icon.style.color = icon.classList.contains("fa-solid") ? "#FFA500" : "";
  });
});



// teklifler
const slider = document.querySelector(".super-scroll");

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");

  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
});

slider.addEventListener("mouseup", () => {
  isDown = false;
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;

  e.preventDefault();

  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2; // sürət

  slider.scrollLeft = scrollLeft - walk;
});





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
// sebet 


// =======================
// DISCOUNT PAGE -> DATASET FIX
// =======================

document.querySelectorAll(".card").forEach(card => {

  // name
  const name =
    card.querySelector(".name")?.innerText.trim();

  // image
  const image =
    card.querySelector("img")?.getAttribute("src");

  // rating
  const stars =
    card.querySelector(".stars")?.innerText.length || 5;

  // active storage
  const activeStorage =
    card.querySelector(".storage-btn.active");

  const storage =
    activeStorage?.innerText || "";

  // current price
  const priceText =
    card.querySelector(".new-price")?.innerText
      .replace("₼", "")
      .trim();

  // dataset yaz
  card.dataset.name = name;
  card.dataset.image = image;
  card.dataset.rating = stars;
  card.dataset.storage = storage;
  card.dataset.price = priceText;
});


// STORAGE CHANGE
document.querySelectorAll(".storage-btn").forEach(btn => {

  btn.addEventListener("click", () => {

    const card = btn.closest(".card");

    // storage update
    card.dataset.storage = btn.innerText;

    // yeni qiymət
    card.dataset.price = btn.dataset.price;
  });

});


// xususi teklifler

// =======================
// SUPER OFFER DATASET
// =======================

document.querySelectorAll(".super-offer").forEach(card => {

  const name =
    card.querySelector("h2")?.innerText.trim();

  const image =
    card.querySelector("img")?.getAttribute("src");

  const price =
    card.querySelector(".new")?.innerText
      .replace("₼", "")
      .trim();

  card.dataset.name = name;
  card.dataset.image = image;
  card.dataset.price = price;
  card.dataset.rating = 5;
  card.dataset.storage =
    card.querySelector(".desc")?.innerText || "";
});