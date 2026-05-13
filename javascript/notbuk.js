document.addEventListener("DOMContentLoaded", () => {

  const storageButtons = document.querySelectorAll(".storage-btn");
  const productPrice = document.getElementById("product-price");
  const oldPrice = document.getElementById("old-price");

  const prices = {
    "256": { price: 1980, old: 2300 },
    "512": { price: 2390, old: 2799 },
    "1tb": { price: 2799, old: 3100 }
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

  const storageButtons =
    document.querySelectorAll(".storage-btn");

  const productPrice =
    document.getElementById("product-price");

  const oldPrice =
    document.getElementById("old-price");

  const productGrid =
    document.querySelector(".product-grid");

  const prices = {

    "256": {
      price: 2899,
      old: 3299,
      storage: "8GB / 256GB"
    },

    "512": {
      price: 3299,
      old: 3699,
      storage: "16GB / 512GB"
    },

    "1tb": {
      price: 3699,
      old: 4099,
      storage: "16GB / 1TB"
    }

  };

  // STORAGE CHANGE
  storageButtons.forEach(btn => {

    btn.addEventListener("click", () => {

      storageButtons.forEach(b =>
        b.classList.remove("active")
      );

      btn.classList.add("active");

      const size = btn.dataset.size;
      const data = prices[size];

      if (!data) return;

      productPrice.textContent =
        data.price + " AZN";

      oldPrice.textContent =
        data.old + " AZN";

      // 🔥 cart üçün update
      productGrid.dataset.price = data.price;
      productGrid.dataset.storage = data.storage;

    });

  });

  // ================= CART =================
  const button = document.querySelector(".add-to-cart");

  button.addEventListener("click", () => {

    const product = {

      name: productGrid.dataset.name,
      price: productGrid.dataset.price,
      image: productGrid.dataset.image,
      rating: productGrid.dataset.rating,
      storage: productGrid.dataset.storage

    };

    let cart =
      JSON.parse(localStorage.getItem("cart")) || [];

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