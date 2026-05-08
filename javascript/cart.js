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

          <p>${item.storage}</p>

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

document.addEventListener("click", function(e){

  if(e.target.id === "select-all"){

    const items =
      document.querySelectorAll(".select-item");

    const allChecked =
      [...items].every(el => el.checked);

    items.forEach(el => {
      el.checked = !allChecked;
    });
  }
});