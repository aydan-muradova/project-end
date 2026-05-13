document.addEventListener("DOMContentLoaded", () => {

  const storageButtons = document.querySelectorAll(".storage-btn");
  const productPrice = document.getElementById("product-price");
  const oldPrice = document.getElementById("old-price");

  const prices = {
    "256": { price: 1999, old: 2300 },
    "512": { price: 2300, old: 2600 }
  };

  storageButtons.forEach(btn => {

    btn.addEventListener("click", () => {

      storageButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const size = btn.dataset.size;
      const data = prices[size];

      if (!data) return;

      productPrice.textContent = data.price + " AZN";
      oldPrice.textContent = data.old + " AZN";

    });

  });

});



// sebet



document.addEventListener("DOMContentLoaded", () => {

  const storageButtons = document.querySelectorAll(".storage-btn");
  const productPrice = document.getElementById("product-price");
  const oldPrice = document.getElementById("old-price");
  const productGrid = document.querySelector(".product-grid");
  const button = document.querySelector(".btn");

  const prices = {
    "256": {
      price: 2299,
      old: 2699,
      storage: "256GB"
    },
    "512": {
      price: 2699,
      old: 3099,
      storage: "512GB"
    }
  };

  // ================= STORAGE CHANGE =================
  storageButtons.forEach(btn => {

    btn.addEventListener("click", () => {

      storageButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const size = btn.dataset.size;
      const data = prices[size];

      if (!data) return;

      productPrice.textContent = data.price + " AZN";
      oldPrice.textContent = data.old + " AZN";

      // cart update
      productGrid.dataset.price = data.price;
      productGrid.dataset.storage = data.storage;

    });

  });

  // ================= CART =================
  button.addEventListener("click", () => {

    const product = {
      name: document.querySelector("h1").textContent,
      price: productGrid.dataset.price || "2299",
      image: document.querySelector(".product-left img").src,
      rating: "5",
      storage: productGrid.dataset.storage || "256GB"
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    showToast("Məhsul səbətə əlavə olundu ✅");

  });

});

// ================= TOAST =================
function showToast(message) {
  const toast = document.getElementById("toast");

  if (!toast) return;

  toast.innerText = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}