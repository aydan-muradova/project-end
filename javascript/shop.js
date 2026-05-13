document.addEventListener("click", function (e) {
  if (!e.target.closest(".btn")) return;

  const card = e.target.closest(".card");

  const name = card.querySelector("h5").innerText;

  const price = Number(
    card.querySelector(".price").innerText.replace("₼", "").trim()
  );

  const image = card.querySelector("img").src;

  // ⭐ RATING
  const rating = card.querySelectorAll(".fa-solid.fa-star").length;

  // 💾 STORAGE (seçilmiş variant)
  const activeStorage = card.querySelector(".storage-btn.active");

  const storage = activeStorage
    ? activeStorage.innerText
    : null;

  const product = {
    name,
    price,
    image,
    rating,
    storage
  };

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));

  updateCartCount();
  showToast("Məhsul səbətə əlavə olundu ✅");
});
// =======================
// TOAST
// =======================
function showToast(message) {

  let toast = document.getElementById("toast");

  // yoxdursa yarat
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    document.body.appendChild(toast);
  }

  toast.innerText = message;

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}





// =======================
// SHOP CARDS FUNCTIONALITY
// =======================

document.addEventListener("DOMContentLoaded", () => {

  const shopCards = document.querySelectorAll(".shop-card");

  const shopState = new Map();

  // init
  shopCards.forEach(card => {

    const priceEl = card.querySelector(".shop-new");

    const basePrice =
      Number(priceEl?.dataset.basePrice) ||
      Number(priceEl.textContent.replace(/[₼\s]/g, ""));

    shopState.set(card, {
      price: basePrice,
      month: 12
    });

  });

  // update
  function updateShopCard(card, st) {

    const priceEl = card.querySelector(".shop-new");
    const amountEl = card.querySelector(".amount");
    const monthCount = card.querySelector(".month-count");

    if (priceEl) {

      priceEl.textContent =
        Number.isInteger(st.price)
          ? st.price + " ₼"
          : st.price.toFixed(2) + " ₼";
    }

    if (monthCount) {
      monthCount.textContent = st.month + " ay";
    }

    if (amountEl) {

      const monthly = st.price / st.month;

      amountEl.textContent =
        Number.isInteger(monthly)
          ? monthly + " ₼"
          : monthly.toFixed(2) + " ₼";
    }

  }

  // storage
  shopCards.forEach(card => {

    const storageBtns =
      card.querySelectorAll(".shop-storage-btn");

    const monthBtns =
      card.querySelectorAll(".shop-month");

    let st = shopState.get(card);

    // GB change
    storageBtns.forEach(btn => {

      btn.addEventListener("click", () => {

        storageBtns.forEach(b =>
          b.classList.remove("active")
        );

        btn.classList.add("active");

        st.price = Number(btn.dataset.price);

        updateShopCard(card, st);

      });

    });

    // month change
    monthBtns.forEach(btn => {

      btn.addEventListener("click", () => {

        monthBtns.forEach(b =>
          b.classList.remove("active")
        );

        btn.classList.add("active");

        st.month =
          Number(btn.textContent.replace(" ay", ""));

        updateShopCard(card, st);

      });

    });

  });

  // add to cart
  document.addEventListener("click", e => {

    const btn = e.target.closest(".shop-btn");

    if (!btn) return;

    const card = btn.closest(".shop-card");

    if (!card) return;

    const activeStorage =
      card.querySelector(".shop-storage-btn.active");

    const product = {

      name:
        card.querySelector(".shop-name")?.textContent,

      price:
        Number(
          card.querySelector(".shop-new")
            ?.textContent
            ?.replace(/[₼\s]/g, "")
        ) || 0,

      image:
        card.querySelector("img")?.src,

      rating: 5,

      storage:
        activeStorage?.textContent || null
    };

    let cart =
      JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    showToast("Məhsul səbətə əlavə olundu ✅");

  });

});