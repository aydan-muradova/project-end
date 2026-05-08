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