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
function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.innerText = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}