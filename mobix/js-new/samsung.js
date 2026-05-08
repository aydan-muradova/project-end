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