// =======================
// TOAST (GLOBAL FIX)
// =======================
function showToast(message) {
  let toast = document.getElementById("toast");

  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    document.body.appendChild(toast);
  }

  toast.innerText = message;

  toast.style.position = "fixed";
  toast.style.bottom = "20px";
  toast.style.left = "50%";
  toast.style.transform = "translateX(-50%)";
  toast.style.background = "#111";
  toast.style.color = "#fff";
  toast.style.padding = "12px 20px";
  toast.style.borderRadius = "10px";
  toast.style.zIndex = "999999";
  toast.style.opacity = "1";
  toast.style.transition = "0.3s";
  toast.style.fontSize = "14px";

  setTimeout(() => {
    toast.style.opacity = "0";
  }, 2000);
}

document.addEventListener("DOMContentLoaded", () => {

  const cards = Array.from(document.querySelectorAll(".card"));

  let activeCategory = "all";

  // 🔥 FIX: range sistem
  let activeMinPrice = 0;
  let activeMaxPrice = 999999;

  let visibleCount = 8;
  let searchValue = "";

  const loadMoreBtn = document.getElementById("loadMoreBtn");
  const state = new Map();

  // =======================
  // INIT STATE (FIX NaN)
  // =======================
  cards.forEach(card => {
    state.set(card, {
      price: Number(card.dataset.price || 0),
      month: 12
    });
  });

  // =======================
  // TOGGLE FILTER
  // =======================
  document.querySelectorAll(".filter-title.toggle").forEach(title => {
    title.addEventListener("click", () => {
      const box = title.nextElementSibling;
      if (!box) return;

      box.classList.toggle("open");
      title.classList.toggle("active");
    });
  });








  // ❤️ Heart toggle
document.addEventListener("click", function (e) {

  const heart = e.target.closest(".fa-heart");

  if (!heart) return;

  heart.classList.toggle("fa-regular");
  heart.classList.toggle("fa-solid");

  heart.style.color =
    heart.classList.contains("fa-solid")
      ? "#FFA500"
      : "gray";

});
  // =======================
  // UPDATE CARD
  // =======================
  function updateCard(card, st) {

    const discount = +card.dataset.discount || 0;

    const oldPriceEl = card.querySelector(".old-price");
    const newPriceEl = card.querySelector(".new-price");
    const amountEl = card.querySelector(".amount");
    const monthCount = card.querySelector(".month-count");

    const discounted = st.price - (st.price * discount / 100);

    if (oldPriceEl) oldPriceEl.textContent = st.price + " ₼";
   if (newPriceEl) {
  newPriceEl.textContent =
    Number.isInteger(discounted)
      ? discounted + " ₼"
      : discounted.toFixed(2) + " ₼";
}

    if (monthCount) monthCount.textContent = st.month + " ay";

    if (amountEl) {
      amountEl.textContent = (discounted / st.month).toFixed(0) + " ₼";
    }
  }

  // =======================
  // STORAGE + MONTH
  // =======================
  cards.forEach(card => {

    const storageBtns = card.querySelectorAll(".storage-btn");
    const monthBtns = card.querySelectorAll(".month");
    let st = state.get(card);

    storageBtns.forEach(btn => {
      btn.addEventListener("click", () => {

        storageBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        st.price = Number(btn.dataset.price || 0);

        updateCard(card, st);
        render();
      });
    });

    monthBtns.forEach(btn => {
      btn.addEventListener("click", () => {

        monthBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        st.month = Number(btn.dataset.month || 12);

        updateCard(card, st);
        render();
      });
    });

  });

  // =======================
  // FILTER FUNCTION (FIXED)
  // =======================
  function getFilteredCards() {
    return cards.filter(card => {

      const category = card.dataset.category || "";

      const price = state.get(card)?.price || 0;

      const nameEl = card.querySelector(".name");
      const name = nameEl ? nameEl.textContent.toLowerCase() : "";

      return (
        (activeCategory === "all" || category === activeCategory) &&
        price >= activeMinPrice &&
        price <= activeMaxPrice &&
        name.includes(searchValue)
      );
    });
  }

  // =======================
  // RENDER
  // =======================
  function render() {

    const filtered = getFilteredCards();

    cards.forEach(c => c.style.display = "none");

    filtered.forEach((card, i) => {
      if (i < visibleCount) card.style.display = "flex";
    });

    if (loadMoreBtn) {
      loadMoreBtn.style.display =
        visibleCount >= filtered.length ? "none" : "block";
    }
  }

  // =======================
  // CATEGORY
  // =======================
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {

      document.querySelectorAll(".filter-btn")
        .forEach(b => b.classList.remove("active"));

      btn.classList.add("active");

      activeCategory = btn.dataset.filter;
      visibleCount = 8;
      render();
    });
  });

  // =======================
  // PRICE (FIXED RANGE)
  // =======================
  document.querySelectorAll(".price-filter").forEach(btn => {
    btn.addEventListener("click", () => {

      activeMinPrice = Number(btn.dataset.min || 0);
      activeMaxPrice = Number(btn.dataset.max || 999999);

      visibleCount = 8;
      render();
    });
  });

  // =======================
  // SEARCH
  // =======================
  document.querySelectorAll(".search-box input").forEach(input => {
    input.addEventListener("input", () => {
      searchValue = input.value.toLowerCase().trim();
      visibleCount = 8;
      render();
    });
  });

  // =======================
  // LOAD MORE
  // =======================
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {
      visibleCount += 4;
      render();
    });
  }

  render();

  // =======================
  // ❤️ FAVORITES
  // =======================
  document.addEventListener("click", (e) => {
    const favBtn = e.target.closest(".fav-btn");
    if (!favBtn) return;

    const card = favBtn.closest(".card");
    if (!card) return;

    const product = {
      name: card.querySelector(".name")?.textContent,
      image: card.querySelector("img")?.src
    };

    let favs = JSON.parse(localStorage.getItem("favorites")) || [];

    const exists = favs.some(p => p.name === product.name);

    if (!exists) {
      favs.push(product);
      favBtn.classList.add("active");
    } else {
      favs = favs.filter(p => p.name !== product.name);
      favBtn.classList.remove("active");
    }

    localStorage.setItem("favorites", JSON.stringify(favs));
  });

  // =======================
  // 🛒 CART
  // =======================
  document.addEventListener("click", (e) => {

    const btn = e.target.closest(".add-to-cart");
    if (!btn) return;

    const card = btn.closest(".card");
    if (!card) return;

    const product = {
      name: card.querySelector(".name")?.textContent,
      price: Number(card.querySelector(".new-price")?.textContent?.replace(/[₼\s]/g, "")) || 0,
      image: card.querySelector("img")?.src
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    showToast("Məhsul səbətə əlavə olundu ✅");
  });

});

// =======================
// SLIDER
// =======================
let slider = document.getElementById("shopSlider");

window.slideLeft = function () {
  slider.scrollBy({ left: -300, behavior: "smooth" });
};

window.slideRight = function () {
  slider.scrollBy({ left: 300, behavior: "smooth" });
};