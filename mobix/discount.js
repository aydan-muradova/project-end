const slides = document.querySelectorAll(".hero-slider .slide");
let index = 0;

function showSlide() {
  slides.forEach(s => s.classList.remove("active"));
  slides[index].classList.add("active");

  index++;
  if (index === slides.length) index = 0;
}

showSlide();
setInterval(showSlide, 4000);




// kart


// const priceRange = document.getElementById("priceRange");
// const priceValue = document.getElementById("priceValue");
// const cards = document.querySelectorAll(".card");
// const onlyDiscount = document.getElementById("onlyDiscount");
// const searchInput = document.getElementById("search");

// searchInput.addEventListener("input", filterProducts);
// qiymət göstər
// priceRange.addEventListener("input", () => {
//   priceValue.textContent = `0 - ${priceRange.value} AZN`;
//   filterProducts();
// });

// checkbox filter
// onlyDiscount.addEventListener("change", filterProducts);
// function filterProducts() {
//   const maxPrice = priceRange.value;
//   const discountOnly = onlyDiscount.checked;
//   const searchText = searchInput.value.toLowerCase();

//   cards.forEach(card => {
//     const price = card.getAttribute("data-price");
//     const discount = card.getAttribute("data-discount");
//     const title = card.querySelector("h3").textContent.toLowerCase();

//     let show = true;

//     if (price > maxPrice) show = false;
//     if (discountOnly && !discount) show = false;
//     if (!title.includes(searchText)) show = false;

//     card.style.display = show ? "block" : "none";
//   });
// }


const cards = document.querySelectorAll(".card");

let activeCategory = "all";
let activePrice = 999999;


// CATEGORY
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {

    document.querySelectorAll(".filter-btn")
      .forEach(b => b.classList.remove("active"));

    btn.classList.add("active");

    activeCategory = btn.dataset.filter;

    filterProducts();
  });
});


// PRICE
document.querySelectorAll(".price-filter").forEach(btn => {
  btn.addEventListener("click", () => {

    activePrice = Number(btn.dataset.max);

    filterProducts();
  });
});


// CORE FILTER
function filterProducts() {

  cards.forEach(card => {

    const category = card.dataset.category;
    const price = Number(card.dataset.price);

    const matchCategory =
      activeCategory === "all" || category === activeCategory;

    const matchPrice = price <= activePrice;

    if (matchCategory && matchPrice) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }

  });

}
document.querySelectorAll(".toggle").forEach(title => {
  title.addEventListener("click", () => {

    const box = title.nextElementSibling;
    box.classList.toggle("open");

    title.classList.toggle("active");
  });
});





// =======================
// CARD (price + storage + installment)
// =======================
document.querySelectorAll(".card").forEach(card => {

  const storageBtns = card.querySelectorAll(".storage-btn");
  const monthBtns = card.querySelectorAll(".month");

  const oldPriceEl = card.querySelector(".old-price");
  const newPriceEl = card.querySelector(".new-price");

  const amountEl = card.querySelector(".amount");
  const monthCount = card.querySelector(".month-count");

  const discount = +card.dataset.discount;

  let currentPrice = +card.dataset.price;
  let currentMonth = 12;

  // STORAGE
  storageBtns.forEach(btn => {
    btn.addEventListener("click", () => {

      storageBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      currentPrice = +btn.dataset.price;

      const discounted = currentPrice - (currentPrice * discount / 100);

      oldPriceEl.textContent = currentPrice + " ₼";
      newPriceEl.textContent = Math.round(discounted) + " ₼";

      updateMonthly();
    });
  });

  // MONTH
  monthBtns.forEach(btn => {
    btn.addEventListener("click", () => {

      monthBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      currentMonth = +btn.dataset.month;
      monthCount.textContent = currentMonth + " ay";

      updateMonthly();
    });
  });

  function updateMonthly() {
    const discounted = currentPrice - (currentPrice * discount / 100);
    const monthly = (discounted / currentMonth).toFixed(0);

    amountEl.textContent = monthly + " ₼";
  }

  // ilkin hesab (page load)
  updateMonthly();
});
document.querySelectorAll(".fav-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const icon = btn.querySelector("i");
    icon.classList.toggle("fa-regular");
    icon.classList.toggle("fa-solid");
    icon.style.color = icon.classList.contains("fa-solid") ? "#FFA500" : "";
  });
});



// teklifler
const slider = document.querySelector(".super-scroll");

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");

  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
});

slider.addEventListener("mouseup", () => {
  isDown = false;
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;

  e.preventDefault();

  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2; // sürət

  slider.scrollLeft = scrollLeft - walk;
});