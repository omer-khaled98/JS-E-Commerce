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

console.log("pppp");

var userNameField = document.getElementById("yourName");
var yourphone = document.getElementById("yourphone");
var youremail = document.getElementById("youremail");
var button = document.getElementById("send");

button.addEventListener("click", (event) => {
  event.preventDefault();
  var userName = userNameField.value;
  var userphone = yourphone.value;
  var useremail = youremail.value;

  if (userName.length >= 3) {
    userNameField.style.border = "2px solid green";
  } else {
    userNameField.style.border = "2px solid red";
  }

  if (userphone >= 11) {
    yourphone.style.border = "2px solid green";
  } else {
    yourphone.style.border = "2px solid red";
  }

  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (emailPattern.test(useremail)) {
    youremail.style.border = "2px solid green";
  } else {
    youremail.style.border = "2px solid red";
  }
});
