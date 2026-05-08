document.addEventListener("DOMContentLoaded", () => {

  const storageButtons = document.querySelectorAll(".storage-btn");
  const productPrice = document.getElementById("product-price");
  const oldPrice = document.getElementById("old-price");

  const prices = {
    "256": { price: 3589, old: 4200 },
    "512": { price: 3999, old: 4600 },
    "1tb": { price: 4399, old: 4999 }
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