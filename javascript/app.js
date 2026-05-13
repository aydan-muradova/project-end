const container = document.getElementById("products");

const data = [
  {
    name: "Samsung Galaxy S26 Ultra (SM-S948)",
    rating: 4,
    // brand: "samsung",
    image: "./img/tm-dg-sbp-1105-sm-4066_1-7c806119.webp",
    storage: [
      { size: "128GB", price: 2940 },
      { size: "256GB", price: 3200 },
      { size: "512GB", price: 3600 }
    ]

  },

    {
    name: "iPhone 17 Pro Max 512 GB Cosmic Orange",
    rating: 5,
    // brand: "apple",
    image: "./img/tm-dg-sbp-1105-sm-3743_1.webp",
    storage: [
   { size: "256GB", price: 3799 },
  { size: "512GB", price: 4149 },
  { size: "1TB", price: 4599 }
    ]

  },
    {
    name: "Qulaqlıq HUAWEI Freebuds SE 3 55037990 Beige",
    rating: 4,
    image: "./img/e4Cxid7tGGUL96IMpKSRQ8oqcuA5qqHdDSB7EVxe-full.jpg",
    storage: [
    { size: "", price: 68 }
   
    ]

  },
      {
    name: "Notbuk Lenovo LOQ 15ARP9 (83JC00LBRK)",
    rating: 5,
    image: "./img/tm-dg-kot-1114-nb-3219_1.webp",
    storage: [
    { size: "SSD 512GB", price: 1899 }
    ]

  },


    {
    name: "Samsung Galaxy A26 (SM-A266B) 8/256 GB Black",
    rating: 4,
    image: "./img/tm-dg-sbp-1105-sm-3432_1.png",
    storage: [
      { size: "256GB", price: 670 }
     
    ]
  },




    {
    name: "Samsung Galaxy Tab S11 (SM-X736) 12/128 GB Gray",
    rating: 4,
    image: "./img/tm-dg-tbq-1105-tb-0777_1.png",
    storage: [
      { size: "128GB", price: 1799 },
      { size: "256GB", price: 2200 },
      { size: "512GB", price: 3000 }
    ]

  },
    
     {
    name: "Apple iPad 11 A16 256 GB Wi-Fi 2025 (MD4J4TY) Yellow",
    rating:3.5, 
    image: "./img/Ca8hUZOJH7BeIAkaZVCoNi2iTvAoGfZdbpdjdeaU-full.jpg",
    storage: [
       { size: "256GB", price: 1249 }
    ]

  },
      {
    name: "Samsung Galaxy A17 (SM-A175) 6/128 GB Black",
    rating: 4,
    image: "./img/tm-dg-sbp-1105-sm-3661_1.webp",
    storage: [
      { size: "128GB", price: 419 },
      { size: "256GB", price: 540 },
      { size: "512GB", price: 620 }
    ]

  },  


    {
    name: "iPhone 15 256 GB Green",
    rating: 5,
    image: "./img/tm-dg-sbp-1105-sm-2476_12.png",
    storage: [
      { size: "128GB", price: 1700 },
      { size: "256GB", price: 1989 },
      { size: "512GB", price: 2269.99 }
    ]

  },
  
    {
    name: "Ağıllı saat TicWatch Pro",
    rating: 3.5,
    image: "./img/6145_11.jpg",
    storage: [
      { size: "", price: 399 }
    ]

  },
   {
    name: "Nokia 150 DS Blue (2023)",
    rating: 4,
    image: "./img/tm-dg-sbp-1105-bp-0225-01.png",
    storage: [
      { size: "2GB", price: 130 }
    ]

  }, 
     {
    name: "iPhone 17 256 GB Sage",
    rating: 4,
    image: "./img/tm-dg-sbp-1105-sm-3697_1.webp",
    storage: [
      { size: "128GB", price: 1990 },
      { size: "256GB", price: 2339 },
      { size: "512GB", price: 3100 }
    ]

  }, 
   
    {
    name: "iPhone 16 256 GB Ultramarine",
    rating: 4,
    image: "./img/tm-dg-sbp-1105-sm-2892_1.png",
    storage: [

      { size: "256GB", price: 2169 },
    
    ]

  },
  
  {
    name: "Samsung Galaxy Z Flip7 (F766) 12/256 GB Dark Blue",
    rating: 4,
    image: "./img/tm-dg-sbp-1105-sm-3595_10.png",
    storage: [
      { size: "128GB", price: 1980 },
      { size: "256GB", price: 2219 },
      { size: "512GB", price: 2700 }
    ]

  },  
   {
    name: "Qulaqlıq HUAWEI FreeBuds 7i 55038456 Black",
    rating: 4,
    image: "./img/tm-dg-acs-1109-tw-0831_1.png",
    storage: [
      {  price: 159.99}
    ]

  },
  
    {
    name: "Qoruyucu şüşə 5D Glass Full Black iPhone 12 Pro Max",
    rating: 4,
    image: "./img/_1000_-__1.jpg",
    storage: [
        { price: 3 }
   
    ]
  },  
   {
    name: "Smart saat Samsung Galaxy Watch8 SM-L330NDAACIS Dark Gray",
    rating: 4,
    image: "./img/tm-dg-smw-1106-sw-0327_111_1.png",
    storage: [
      {  price: 639 },
      
    ]

  },


    {
    name: "Apple Watch Series 10 46 mm Aluminum case Rose Gold",
    rating: 4.5,
    image: "./img/t5J3Xl52RbAWBz9YrRN8h6I8lipGGdglz0nlsY37-full.jpg",
    storage: [
       { size: "", price: 800 }
    ]

  },

 
    {
    name: "Qoruyucu şüşə Alpa-tech Premium Glass iPhone 14 Pro Max",
    rating: 4,
    image: "./img/tm-dg-acs-1267-pt-0585_3333.png",
    storage: [
      { price: 8.99 }
    ]

  }, 

   {
    name: "Qoruyucu örtük Samsung S25+ Standing Grip EF-GS936CBEGRU",
    rating: 4,
    image: "./img/tm-dg-acs-1267-kt-2439_1.png",
    storage: [
      {price: 75 }
    ]

  },  
  
    {
    name: "HONOR X9d 12/256 GB Titanium Black",
    rating: 4,
    image: "./img/tm-dg-sbp-1105-sm-3854_1.png",
    storage: [
      { size: "256GB", price: 859 }
    ]

  }, 
      {
    name: "OPPO A5i 4/128 GB CPH2773 Starry Purple",
    rating: 4,
    image: "./img/tm-dg-sbp-1105-sm-3639_1.png",
    storage: [
      { size: "128GB", price: 309 }
    ]

  },  


  {
    name: "Qulaqlıq Nothing CMF Buds 2A A10600109 Light Grey",
    rating: 4,
    image: "./img/tm-dg-acs-1109-tw-0883_1-8e99f1cf.webp",
    storage: [
      { price: 69.99 }
    ]

  }, 


    {
    name: "HUAWEI nova 14i 8/128 GB Black",
    rating: 4,
    image: "./img/tm-dg-sbp-1105-sm-3867_1.png",
    storage: [
      { size: "128GB", price: 419 },
      { size: "256GB", price: 560 },
      { size: "512GB", price: 710 }
    ]

  },
  
  {
    name: "Qoruyucu örtük Apple iPhone 17 Pro TechWoven W/MagSafe MGF54ZM/A Purple",
    rating: 4,
    image: "./img/tm-dg-acs-1267-kt-2540_1.png",
    storage: [
      { price: 139 }
    ]
  }, 
  
   {
    name: "Qoruyucu örtük Lacoste MagSafe Silicone iPhone 15 Pro Max Black LCHMP15XSLOK",
    rating: 4,
    image: "./img/tm-dg-acs-1267-kt-2230_1_1.png",
    storage: [
      { price: 49.99 }
    ]

  }, 
  

  
  
  {
    name: "Qoruyucu örtük Beats iPhone 17 MGK44LL/A W/MagSafe and Camera Control Pebble Pink",
    rating: 4,
    image: "./img/tm-dg-acs-1267-kt-2589_1.png",
    storage: [
      { price: 94.99 }
    ]

  },
  
  {
    name: "Qoruyucu örtük Apple iPhone 16 Pro Silicone Case W/MagSafe Plum MYYM3ZM/A",
    rating: 4,
    image: "./img/tm-dg-acs-1267-kt-2371.png",
    storage: [
      {  price: 94 }

    ]

  }, 
  
  
    {
    name: "Motorola edge 60 Pro 5G 12/512 GB Shadow",
    rating: 4,
    image: "./img/tm-dg-sbp-1105-sm-3573_1.webp",
    storage: [
      { size: "128GB", price: 720 },
      { size: "256GB", price: 978 },
      { size: "512GB", price: 1249.99 }
    ]

  },
  

   {
    name: "OPPO A5 6/128 GB CPH2727 Mist White",
    rating: 4,
    image: "./img/tm-dg-sbp-1105-sm-3640_.png",
    storage: [
      { size: "128GB", price: 399 },
      { size: "256GB", price: 470 },
      { size: "512GB", price: 619 }
    ]

  },
    {
    name: "HONOR X9d 8/256 GB Forest Green",
    rating: 4,
    image: "./img/tm-dg-sbp-1105-sm-3852_1.png",
    storage: [
          { size: "128GB", price: 590 },
      { size: "256GB", price: 779 },
      { size: "512GB", price: 920 }
    ]

  },  
    {
    name: "Adapter Hypercharge Combo 120W",
    rating: 4,
    image: "./img/tm-dg-acs-1109-ap-0424_1-103525e9.webp",
    storage: [
      {price: 69.99 }
    ]

  }
];






function renderProducts(data) {
  container.innerHTML = "";

  data.forEach(product => {

    let stars = "";
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(product.rating)) {
        stars += `<i class="fa-solid fa-star"></i>`;
      } else if (i - 0.5 === product.rating) {
        stars += `<i class="fa-solid fa-star-half-stroke"></i>`;
      } else {
        stars += `<i class="fa-regular fa-star"></i>`;
      }
    }

    container.innerHTML += `
      <div class="card">

        <img src="${product.image}">
        <button class="fav-btn"><i class="fa-regular fa-heart"></i></button>

        <h5 class="name-img">${product.name}</h5>
        <div class="stars">${stars}</div>

        <div class="price-row">
          <p class="price">${product.storage[0].price} ₼</p>

          ${
            product.storage.some(s => s.size)
            ? `<div class="storage">
                ${product.storage.map((item, index) => `
                  ${item.size ? `
                    <span class="storage-btn ${index === 0 ? 'active' : ''}" data-price="${item.price}">
                      ${item.size}
                    </span>
                  ` : ''}
                `).join("")}
              </div>`
            : ''
          }
        </div>

        <p class="installment">
          <span class="month" data-month="6">6 ay</span>
          <span class="month" data-month="9">9 ay</span>
          <span class="month active" data-month="12">12 ay</span>
        </p>

        <p class="monthly-price">
          <span class="month-count">12 ay</span>
          <span class="amount">${(product.storage[0].price / 12).toFixed(2)} ₼</span>
        </p>

        <button class="btn">
          <i class="fa-solid fa-cart-shopping"></i> Səbətə əlavə et
        </button>

      </div>
    `;
  });
}












// 🔥 Ay klik
document.addEventListener("click", function(e) {
  if (e.target.classList.contains("month")) {
    const months = e.target.getAttribute("data-month");
    const card = e.target.closest(".card");
    const price = parseFloat(card.querySelector(".price").innerText);
    const monthly = (price / months).toFixed(2);
    card.querySelector(".monthly-price").innerHTML = `
      <span class="month-count">${months} ay</span>
      <span class="amount">${monthly} ₼</span>
    `;
    card.querySelectorAll(".month").forEach(m => m.classList.remove("active"));
    e.target.classList.add("active");
  }
});





// 🔥 Storage klik
document.addEventListener("click", function(e) {
  if (e.target.classList.contains("storage-btn")) {
    const card = e.target.closest(".card");
    const newPrice = parseFloat(e.target.getAttribute("data-price"));

    // Qiyməti dəyiş
    card.querySelector(".price").innerText = `${newPrice} ₼`;

    // Aktiv et
    card.querySelectorAll(".storage-btn").forEach(btn => btn.classList.remove("active"));
    e.target.classList.add("active");

    // Aylıq qiyməti avtomatik yenilə
    const activeMonth = card.querySelector(".month.active");
    const months = activeMonth.getAttribute("data-month");
    const monthly = (newPrice / months).toFixed(2);
    card.querySelector(".monthly-price").innerHTML = `
      <span class="month-count">${months} ay</span>
      <span class="amount">${monthly} ₼</span>
    `;
  }
});







// ❤️ Ürək
document.addEventListener("click", function(e) {
  if (e.target.classList.contains("fa-heart")) {
    e.target.classList.toggle("fa-regular");
    e.target.classList.toggle("fa-solid");
    e.target.style.color = e.target.classList.contains("fa-solid") ? "#FFA500" : "gray";
  }
});













// axtaris inp

const sortBtn = document.querySelector(".sort");
const sortMenu = document.querySelector(".sort-hover");

sortBtn.addEventListener("click", () => {
  sortMenu.classList.toggle("active");
  sortBtn.classList.toggle("active");
});





const productsData = data;


// ilk render
renderProducts(productsData);








const brands = document.querySelectorAll(".brand");

brands.forEach(btn => {
  btn.addEventListener("click", () => {
    const selected = btn.dataset.brand;

    // burada məhsulları filtr edirsən
    console.log(selected);
  });
});


const swiper = new Swiper(".reviewsSwiper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,

  slidesPerView: 3,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});



// sebet
function updateCartCount() {
  const countEl = document.getElementById("cart-count");
  if (!countEl) return;

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  countEl.textContent = cart.length;
}

document.addEventListener("DOMContentLoaded", updateCartCount);
function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.innerText = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}




function updateDeleteButton() {
  const btn = document.getElementById("delete-selected");
  const anyChecked = document.querySelector(".select-item:checked");

  btn.disabled = !anyChecked;
}

document.addEventListener("change", function (e) {
  if (e.target.classList.contains("select-item")) {
    updateDeleteButton();
  }
});


// sebet secilmis mehsullar


document.addEventListener("DOMContentLoaded", () => {

  const buttons = document.querySelectorAll(".wow-card .add-cart");

  buttons.forEach(button => {

    button.addEventListener("click", (e) => {

      const card = e.target.closest(".wow-card");

      if (!card) return;

      const product = {
        name: card.querySelector("h3")?.innerText,
        price: Number(card.querySelector("p")?.innerText.replace("₼", "").trim()),
        image: card.querySelector(".wow-main")?.src,
        rating: 5,
        storage: ""
      };

      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      cart.push(product);

      localStorage.setItem("cart", JSON.stringify(cart));

      showToast("Məhsul səbətə əlavə olundu ✅");
    });

  });

});