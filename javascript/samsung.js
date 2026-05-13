document.addEventListener("DOMContentLoaded", () => {

  const storageButtons = document.querySelectorAll(".storage-btn");
  const productPrice = document.getElementById("product-price");
  const oldPrice = document.getElementById("old-price");

  const prices = {
    "256": { price: 1869, old: 2209 },
    "512": { price: 2209, old: 2549 },
    "1tb": { price: 2549, old: 2900 }
  };

  storageButtons.forEach(btn => {

    btn.addEventListener("click", () => {

      storageButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const size = btn.dataset.size;
      const data = prices[size];

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
      price: 1869,
      old: 2209,
      storage: "256GB"
    },

    "512": {
      price: 2199,
      old: 2499,
      storage: "512GB"
    },

    "1tb": {
      price: 2599,
      old: 2899,
      storage: "1TB"
    }

  };

  storageButtons.forEach(btn => {

    btn.addEventListener("click", () => {

      storageButtons.forEach(b =>
        b.classList.remove("active")
      );

      btn.classList.add("active");

      const size = btn.dataset.size;

      const data = prices[size];

      if (!data) return;

      // ekranda qiymeti deyis
      productPrice.textContent =
        data.price + " AZN";

      oldPrice.textContent =
        data.old + " AZN";

      // dataset update
      productGrid.dataset.price =
        data.price;

      productGrid.dataset.storage =
        data.storage;

    });

  });

});