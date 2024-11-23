// let url = "http://localhost:3000/products";
// let store = document.querySelector(".store");
// let search = document.getElementById("search");
// let btnsfilter = document.getElementById("btnsfilter");
// let card = "";

// // دالة تصفية المنتجات بناءً على البحث
// function filterproduct(data) {
//   store.innerHTML = "";
//   card = "";
//   if (search.value == "") {
//     creatproduct(data);
//   } else {
//     let filteredData = data.filter(function (element) {
//       return element.name.toUpperCase().includes(search.value.toUpperCase());
//     });
//     creatproduct(filteredData);
//   }
// }

// // دالة إنشاء بطاقات المنتجات
// function creatproduct(Data) {
//   store.innerHTML = "";
//   card = "";

//   Data.forEach((element) => {
//     card += `
//       <div class="pro__card">
//             <i class="ri-heart-3-line"></i>
//             <img src="${element.image}" alt="" />
//             <h3>${element.name}</h3>
//             <h2>$${element.price}</h2>
//             <div class="car__ntns">
//               <button class="cadr__bnt">Buy Now</button>
//               <i class="ri-shopping-cart-2-line " onclick ="addToCart(${element.id})"></i>
//             </div>
//           </div>`;
//   });
//   store.innerHTML = card;
// }
// function addToCart(id) {
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       let getProduct = data.filter((item) => item.id == id);
//       console.log(getProduct); // طباعة المنتج لإضافته للسلة
//     });
// }

// // دالة إنشاء أزرار الفئات
// function creatbtnscategory(data) {
//   let btnsfilter = document.getElementById("btnsfilter");
//   let cat = [];
//   data.forEach((element) => {
//     cat.push(element.category);
//   });

//   let uniqueCategories = new Set(cat);
//   let btns = "";
//   uniqueCategories.forEach((element) => {
//     btns += `
//        <button class="btncat" id="${element}">${element}</button>
//       `;
//   });
//   btnsfilter.innerHTML = btns;

//   // إضافة مستمعات للأحداث للأزرار بعد إنشائها
//   let catbtns = document.querySelectorAll(".btncat");
//   catbtns.forEach((button) => {
//     button.addEventListener("click", () => {
//       filterByCategory(data, button.id);
//     });
//   });
// }

// // دالة تصفية المنتجات بناءً على الفئة
// function filterByCategory(data, category) {
//   let filteredData = data.filter((element) => element.category === category);
//   creatproduct(filteredData);
// }
// // جلب البيانات من الخادم
// fetch(url)
//   .then((res) => res.json())
//   .then((data) => {
//     creatproduct(data);
//     search.onkeyup = function () {
//       filterproduct(data);
//     };
//   });
let url = "https://fakestoreapi.com/products";
let store = document.querySelector(".store");
let search = document.getElementById("search");
let btnsfilter = document.getElementById("btnsfilter");
let card = "";

// دالة تصفية المنتجات بناءً على البحث
function filterproduct(data) {
  store.innerHTML = "";
  card = "";
  if (search.value === "") {
    creatproduct(data);
  } else {
    let filteredData = data.filter(function (element) {
      return element.name.toUpperCase().includes(search.value.toUpperCase());
    });
    creatproduct(filteredData);
  }
}

// دالة إنشاء بطاقات المنتجات
function creatproduct(data) {
  store.innerHTML = "";
  card = "";

  data.forEach((element) => {
    card += `
      <div class="pro__card">
            <i class="ri-heart-3-line"></i>
            <img src="${element.image}" onclick="gotoproductpage(${
      element.id
    })"alt="" />
            <h3>${element.title.slice(0, 5)}</h3>
            <h2>$${element.price}</h2>
            <div class="car__ntns">
              <button class="cadr__bnt">Buy Now</button>
              <i class="ri-shopping-cart-2-line" onclick="addToCart(${
                element.id
              })"></i>
            </div>
          </div>`;
  });
  store.innerHTML = card;
}
function gotoproductpage(id) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const product = data.find((element) => element.id == id);
      // console.log(product);
      localStorage.setItem("productDetails", JSON.stringify(product));
      window.open("./productdetails.html", "_blank");
    });
}

// في صفحة productdetails.html، يمكنك جلب البيانات من localStorage وعرضها
document.addEventListener("DOMContentLoaded", () => {
  const product = JSON.parse(localStorage.getItem("productDetails"));
  if (product) {
    let productContainer = document.getElementById("product-container");
    let productDetails = `
      <div class="img-card">
        <img src="${product.image}" alt="" id="featured-image" />
      </div>
      <div class="product-info">
        <h3>${product.name}</h3>
        <h5>Price: $${product.price} <del>$170</del></h5>
        <p>${product.description}</p>
        <div class="quantity">
          <button>Buy Now</button>
        </div>
      </div>`;
    productContainer.innerHTML = productDetails;
  }
});

function addToCart(id) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let getProduct = data.filter((item) => item.id == id);
      console.log(getProduct); // طباعة المنتج لإضافته للسلة
    });
}

// دالة إنشاء أزرار الفئات
function creatbtnscategory(data) {
  let cat = [];
  data.forEach((element) => {
    cat.push(element.category);
  });

  let uniqueCategories = new Set(cat);
  let btns = "";
  uniqueCategories.forEach((element) => {
    btns += `
       <button class="btncat" id="${element}">${element}</button>
      `;
  });
  btnsfilter.innerHTML = btns;

  let catbtns = document.querySelectorAll(".btncat");
  catbtns.forEach((button) => {
    button.addEventListener("click", () => {
      filterByCategory(data, button.id);
    });
  });
}

// دالة تصفية المنتجات بناءً على الفئة
function filterByCategory(data, category) {
  let filteredData = data.filter((element) => element.category === category);
  creatproduct(filteredData);
}

// جلب البيانات من الخادم
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    // function allproducts() {
    // }
    // let all = document.getElementById("all");
    // all.addEventListener('click' ,function(){

    // })
    creatproduct(data);
    // filterproduct(data);

    // creatproduct(data);
    creatbtnscategory(data); // استدعاء دالة إنشاء الأزرار
    search.onkeyup = function () {
      filterproduct(data);
    };
  });
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    creatproduct(data);
  });

let logout = document.getElementById("logout");

function out() {
  localStorage.removeItem("regestration");
  location.reload();
}

if (localStorage.regestration != null) {
  let beforeRegestration = document.getElementById("beforeRegestration");
  let afterregrstration = document.getElementById("afterregrstration");

  afterregrstration.style.display = "block";
  beforeRegestration.style.display = "none";
} else {
  afterregrstration.style.display = "none";
  beforeRegestration.style.display = "bolck";
}

let shopping = document.getElementById("shopping");
let productsmenu = document.getElementById("productsmenu");

function apperproducts() {
  productsmenu.classList.toggle("display");
  showCarProduct();
}
let productHTML;
let numberOfProducts = document.getElementById("numberOfProducts");
function addToCart(id) {
  if (localStorage.regestration != null) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let getProduct = data.find((item) => item.id == id);
        // console.log(getProduct);

        let userreg = JSON.parse(localStorage.getItem("regestration")) || [];

        let users = JSON.parse(localStorage.getItem("users")) || [];

        let m = users.find((element) => element.email === userreg[0].email);

        if (m) {
          if (!m.products) {
            m.products = [];
          }
          m.products.push(getProduct);

          let uniqueProducts = [
            ...new Map(m.products.map((item) => [item.id, item])).values(),
          ];

          m.products = uniqueProducts;

          numberOfProducts.innerHTML = uniqueProducts.length;
          localStorage.setItem("users", JSON.stringify(users));

          let productsmenu = document.querySelector(".products");

          let product = ""; // Define the variable as an empty string
          uniqueProducts.forEach((element) => {
            product += `
             <div class="product">
                  <img src="${element.image}" alt="">
                  <p class="name">${element.name.slice(0, 5)}</p>
                  <p class="price">$ ${element.price}</p>
                  <i class="ri-delete-bin-6-line delet" onclick="delet(${
                    element.id
                  })"></i>
                </div>
          `;
          });
          productsmenu.innerHTML = product;
        }
      });
  } else {
    window.location = "./signin.html";
  }
}

document.addEventListener("DOMContentLoaded", showCarProduct);
function showCarProduct() {
  let userreg = JSON.parse(localStorage.getItem("regestration")) || [];

  let users = JSON.parse(localStorage.getItem("users")) || [];

  let m = users.find((element) => element.email === userreg[0].email);

  if (m && m.products) {
    let uniqueProducts = [
      ...new Map(m.products.map((item) => [item.id, item])).values(),
    ];
    // let lengthh = m.products;

    numberOfProducts.innerHTML = uniqueProducts.length;
    let productsmenu = document.querySelector(".products");

    let product = ""; // Define the variable as an empty string
    uniqueProducts.forEach((element, index) => {
      product += `
             <div class="product">
                  <img src="${element.image}" alt="">
                  <p class="name">${element.name.slice(0, 5)}</p>
                  <p class="price">$ ${element.price}</p>
                  <i class="ri-delete-bin-6-line delet" onclick="delet(${index})"></i>
                </div>
      `;
    });
    productsmenu.innerHTML = product;
  }
}

function delet(id) {
  let userreg = JSON.parse(localStorage.getItem("regestration")) || [];

  let users = JSON.parse(localStorage.getItem("users")) || [];

  let m = users.find((element) => element.email === userreg[0].email);

  if (m && m.products) {
    m.products = m.products.filter((product) => product.id !== id);

    m.products.splice(id, 1);

    console.log(m.products);
    let lengthh = m.products;

    numberOfProducts.innerHTML = lengthh.length;

    // localStorage.setItem("users", JSON.stringify(users));
    // showCarProduct();

    localStorage.setItem("users", JSON.stringify(users));
    showCarProduct();
  }
}
function allproducts() {}
