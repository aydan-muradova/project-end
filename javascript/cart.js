// =======================
// TOAST FUNCTION (GLOBAL) new html 
// =======================
function showToast(message) {
  const toast = document.getElementById("toast");

  if (!toast) return;

  toast.innerText = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}


// ...

function renderStars(rating) {

  let stars = "";

  for (let i = 1; i <= 5; i++) {
    stars += i <= rating ? "★" : "☆";
  }

  return stars;
}

function renderCart() {

  const cartContainer =
    document.getElementById("cart-container");

  const totalPriceEl =
    document.getElementById("total-price");

  let cart =
    JSON.parse(localStorage.getItem("cart")) || [];

  cartContainer.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {

    total += Number(item.price);

    cartContainer.innerHTML += `
    
      <div class="cart-item">

        <input type="checkbox"
               class="select-item">

        <img src="${item.image}">

        <div class="cart-info">

          <h4>${item.name}</h4>

          <div class="stars">
            ${renderStars(item.rating)}
          </div>
${item.storage ? `<p>${item.storage}</p>` : ""}

          <div class="cart-price">
            ${item.price} ₼
          </div>

        </div>

        <button onclick="removeItem(${index})">
          Sil
        </button>

      </div>
    `;
  });

  totalPriceEl.innerText = total + " ₼";
}

function removeItem(index) {

  let cart =
    JSON.parse(localStorage.getItem("cart")) || [];

  cart.splice(index, 1);

  localStorage.setItem("cart", JSON.stringify(cart));

  renderCart();
}

document.addEventListener("DOMContentLoaded", renderCart);

// ===================
// SELECT ALL
// ===================

document.addEventListener("DOMContentLoaded", () => {

  renderCart();

  const selectAllBtn =
    document.getElementById("select-all");

  selectAllBtn.addEventListener("click", () => {

    const items =
      document.querySelectorAll(".select-item");

    const allChecked =
      [...items].every(item => item.checked);

    items.forEach(item => {
      item.checked = !allChecked;
    });

  });

});










// new html sebet 


// =======================
// ADD TO CART
// =======================
// =======================
// TOAST
// =======================
function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.innerText = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}

// =======================
// ADD TO CART (FIXED)
// =======================
document.addEventListener("DOMContentLoaded", () => {

  const buttons = document.querySelectorAll(".add-to-cart");

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {

      // ✅ DOĞRU CARD TAPMA
      const card = e.target.closest(".new-card")
        || e.target.closest(".wow-card")
        || e.target.closest(".product-grid")
        || e.target.closest(".super-offer")
        || e.target.closest(".card");


      if (!card) return;

      const product = {
        name: card.dataset.name,
        price: card.dataset.price,
        image: card.dataset.image,
        rating: card.dataset.rating || 5,
        storage: card.dataset.storage || ""
      };

      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      cart.push(product);

      localStorage.setItem("cart", JSON.stringify(cart));

      showToast("Məhsul səbətə əlavə olundu ✅");
    });
  });

});