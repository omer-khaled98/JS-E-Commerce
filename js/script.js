// // let burger = document.getElementById("burger--icon");
// let menu = document.querySelector(".__nav");

// let mode = "open";
// function dispalyMenu() {
//   if (mode === "open") {
//     menu.style.transform = "translateX(0)";
//     mode = "close";
//   } else {
//     menu.style.transform = " translateX(-100%)";
//     mode = "open";
//   }
// }

// // =====================================================
// let productsmenu = document.querySelector(".products");
// let url = "http://localhost:3000/products";
// let store = document.querySelector(".productcards");
// let card = "";

// // دالة تصفية المنتجات بناءً على البحث

// // دالة إنشاء بطاقات المنتجات
// function creatproduct(Data) {
//   store.innerHTML = "";
//   card = "";

//   Data.forEach((element) => {
//     card += `
//       <div class="pro__card" onclick="gotoproductpage(${Data.indexOf(
//         element
//       )})" >
//             <i class="ri-heart-3-line"></i>
//             <img src="${element.image}" alt="" />
//             <h3>${element.name}</h3>
//             <h2>$${element.price}</h2>
//             <div class="car__ntns">
//               <button class="cadr__bnt" >Buy Now</button>
//               <i class="ri-shopping-cart-2-line "onclick ="addToCart(${
//                 element.id
//               })"></i>
//             </div>
//           </div>`;
//   });
//   store.innerHTML = card;
// }

// function gotoproductpage(el) {
//   window.open("./productdetails.html");
//   let productDetails = "";
//   let productContainer = document.getElementById("product-container");
//   // console.log(el);
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data[el].name);

//       productDetails += `

//  <div class="img-card">
//         <img
//           src="${data[el].image}"
//           alt=""
//           id="featured-image"
//         />
//         <!-- small img -->
//       </div>
//       <!-- Right side -->
//       <div class="product-info">
//         <h3>${data[el].name}</h3>
//         <h5>Price: $${data[el].price} <del>$170</del></h5>
//         <p>
//          ${data[el].description}
//         </p>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
//           accusamus natus dolorum. Quaerat nulla quod doloremque, officia quis
//           provident amet adipisci unde esse iure delectus, maxime inventore
//           optio fuga nisi?
//         </p>

//         <div class="quantity">

//           <button>Buy Now</button>
//         </div>

// `;
//       productContainer.innerHTML = productDetails;
//     });
// }

// let product = "";
// function addToCart(id) {
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       let getProduct = data.find((item) => item.id == id);

//       product += `
//        <div class="product">
//                       <img src="${getProduct.image}" alt="">
//                       <p class="name">${getProduct.name}</p>
//                       <p class="price">${getProduct.price}</p>
//                       <i class="ri-delete-bin-6-line "  ></i>
//                     </div>`;
//     });
// }

// fetch(url)
//   .then((res) => res.json())
//   .then((data) => {
//     creatproduct(data);
//     // gotoproductpage(data);

//     // function displayProductDetails(productIndex) {
//     //   const product = products[productIndex];
//     //   const newPage = window.open("", "_blank");
//     //   newPage.document.write(`
//     //     <h1>${product.name}</h1>
//     //     <img src="${product.picture}" alt="${product.name}">
//     //     <p>Price: $${product.price}</p>
//     //     <p>${product.description}</p>
//     //   `);
//     // }
//   });

// productsmenu.innerHTML = product;

// let delet = document.querySelectorAll(".products div");
// let btndelet = Array.from(delet);
// btndelet.forEach((item, index) => {
//   item.addEventListener("click", function () {
//     // btndelet.pop(item);
//     console.log(index);
//   });
// });
// الحصول على عناصر البرجر والقائمة
// let burger = document.getElementById("burger--icon");
// let menu = document.querySelector(".__nav");

// let mode = "open";
// function displayMenu() {
//   if (mode === "open") {
//     menu.style.transform = "translateX(0)";
//     mode = "close";
//   } else {
//     menu.style.transform = "translateX(-100%)";
//     mode = "open";
//   }
// }

// ربط الدالة بمستمع الحدث
// burger.addEventListener("click", displayMenu);

// =====================================================
// الحصول على عناصر القائمة وعنوان الـ URL

let url = "https://fakestoreapi.com/products";
let store = document.querySelector(".productcards");

// دالة إنشاء بطاقات المنتجات
function creatproduct(Data) {
  store.innerHTML = "";
  let card = "";
  const dataHome = Data.slice(1, 7);
  dataHome.forEach((element, index) => {
    card += `
      <div class="pro__card" >
        <i class="ri-heart-3-line"></i>
        <img src="${element.image}" onclick="gotoproductpage(${element.id})"alt="" />
        <h3>${element.title}</h3>
        <h2>$${element.price}</h2>
        <div class="car__ntns">
          <button class="cadr__bnt">Buy Now</button>
          <i class="ri-shopping-cart-2-line"  onclick="addToCart(${element.id})"></i>
        </div>
      </div>`;
  });
  store.innerHTML = card;
}

// دالة فتح صفحة تفاصيل المنتج

function gotoproductpage(id) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const product = data.find((element) => element.id == id);
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
        <h3>${product.title}</h3>
        <h5>Price: $${product.price} <del>$170</del></h5>
        <p>${product.description}</p>
        <div class="quantity">
          <button>Buy Now</button>
        </div>
      </div>`;
    productContainer.innerHTML = productDetails;
  }
});

// دالة إضافة المنتج إلى العربة

function gotoproducts() {
  window.location = "./produxts.html";
}

let productHTML;
let numberOfProducts = document.getElementById("numberOfProducts");
function addToCart(id) {
  if (localStorage.regestration != null) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        let getProduct = data.find((item) => item.id == id);
        console.log(getProduct);

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

// let productHTML;
// function addToCart(id) {
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       let getProduct = data.find((item) => item.id == id);
//       console.log(getProduct);

//       let userreg = JSON.parse(localStorage.getItem("regestration"));

//       let users = JSON.parse(localStorage.getItem("users"));

//       let m = users.find((element) => element.email === userreg[0].email);

//       m.products.push(getProduct);

//       let uniqueProducts = new Set(m.products);

//       let arruniqueProducts = Array.from(uniqueProducts);

//       localStorage.setItem("users", JSON.stringify(users));

//       let productsmenu = document.querySelector(".products");

//       let product;
//       arruniqueProducts.forEach((element) => {
//         product += `
//            <div class="product">
//                 <img src="${element.image}" alt="">
//                 <p class="name">${element.name.slice(0, 5)}</p>
//                 <p class="price">$ ${element.price}</p>
//                 <i class="ri-delete-bin-6-line delet" onclick="delet(${element})" ></i>
//               </div>

// `;
//       });
//       productsmenu.innerHTML = product;

//     });
// }
// document.addEventListener("DOMContentLoaded", showCarProduct);
// function showCarProduct() {
//   let userreg = JSON.parse(localStorage.getItem("regestration"));

//   let users = JSON.parse(localStorage.getItem("users"));

//   let m = users.find((element) => element.email === userreg[0].email);

//   // m.products.push(getProduct);

//   localStorage.setItem("users", JSON.stringify(users));

//   let uniqueProducts = new Set(m.products);

//   let arruniqueProducts = Array.from(uniqueProducts);

//   let productsmenu = document.querySelector(".products");

//   let product;
//   arruniqueProducts.forEach((element, index) => {
//     product += `
//            <div class="product">
//                 <img src="${element.image}" alt="">
//                 <p class="name">${element.name.slice(0, 5)}</p>
//                 <p class="price">$ ${element.price}</p>
//                 <i class="ri-delete-bin-6-line delet" onclick="delet(${index})" ></i>
//               </div>

// `;
//   });
//   productsmenu.innerHTML = product;
// }
// function delet(id) {
//   let userreg = JSON.parse(localStorage.getItem("regestration"));

//   let users = JSON.parse(localStorage.getItem("users"));

//   let m = users.find((element) => element.email === userreg[0].email);

//   // let elementneedToDele = m.products.find((element) => element.id == id);
//   m.products.splice(id, 1);

//   console.log(m.products, id);

//   localStorage.setItem("users", JSON.stringify(users));
//   showCarProduct();

//   // // console.log(object);

//   // console.log(elementneedToDele);
// }

// جلب البيانات من الـ API وإنشاء البطاقات
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

// let arr = [1, 2, 333, 2, 2];

// let a = new Set(arr);
// arr.push(1);

// console.log(a);

// productHTML += `
//  <div class="product">
//    <img src="${getProduct.image}" alt="">
//    <p class="name">${getProduct.name}</p>
//    <p class="price">${getProduct.price}</p>
//    <i class="ri-delete-bin-6-line"></i>
//  </div>`;
// // تأكد من إضافة المنتج إلى DOM
// let cart = document.querySelector(".products");
// console.log(cart);
// cart.innerHTML = productHTML;
