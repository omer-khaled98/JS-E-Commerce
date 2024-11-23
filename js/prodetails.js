function redirectToProductPage(product) {
  // تخزين عناصر الصفحة التفاصيلية
  const productName = document.getElementById("product-name");
  const productPrice = document.getElementById("product-price");
  const productDescription = document.getElementById("product-description");
  const productImage = document.getElementById("product-image");
  const buyNowButton = document.getElementById("buy-now");

  productName.textContent = product.name;
  productPrice.textContent = `$${product.price}`;
  productDescription.textContent = product.description;
  productImage.src = product.image;

  buyNowButton.addEventListener("click", () => {
    alert(`Buy ${product.name} Now!`);
  });
}

//

document.querySelectorAll(".pro__card").forEach((card, index) => {
  card.addEventListener("click", () => {
    const product = {
      id: index + 1,
      name: "Product Name",
      price: 100,
      description: "Product Description",
      image: "path/to/product-image.jpg",
    };

    redirectToProductPage(product);

    window.location.href = `product.html#${product.id}`;
  });
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
                  <p class="name">${element.title.slice(0, 5)}</p>
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
