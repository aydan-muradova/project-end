function getPrice(product) {
  return product.storage?.[0]?.price ?? 0;
}

function sortLowToHigh() {
  renderProducts([...productsData].sort((a,b) => getPrice(a)-getPrice(b)));
}

function sortHighToLow() {
  renderProducts([...productsData].sort((a,b) => getPrice(b)-getPrice(a)));
}

function sortByName() {
  renderProducts([...productsData].sort((a,b) =>
    a.name.localeCompare(b.name)
  ));
}

const links = document.querySelectorAll(".sort-hover a");

links[0].onclick = e => { e.preventDefault(); sortLowToHigh(); };
links[1].onclick = e => { e.preventDefault(); sortHighToLow(); };
links[2].onclick = e => { e.preventDefault(); sortByName(); };


document.addEventListener("click", function(e) {
  if (e.target.classList.contains("sort-item")) {

    // 👉 BURADA sorting edəcəksən (istəsən kömək edərəm)

    // 🔥 MENYUNU BAĞLA
    sortMenu.classList.remove("active");
    sortBtn.classList.remove("active");
  }
});






// secilmis mehsullar
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".add-cart");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      
      // dəyişir
      btn.innerText = "Əlavə olundu ✔";
      btn.style.background = "green";

      // geri qaytarır
      setTimeout(() => {
        btn.innerText = "Səbətə əlavə et";
        btn.style.background = "#FFA500";
      }, 1500);

    });
  });
});