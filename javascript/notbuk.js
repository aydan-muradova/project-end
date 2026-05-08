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