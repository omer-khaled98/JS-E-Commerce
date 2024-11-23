let signUpUsername = document.getElementById("signUp-username");
let signUpEmail = document.getElementById("signUp-email");
let signUpPassword = document.getElementById("signUp-password");
let submitBtn = document.getElementById("submit");
let alert = document.getElementById("alert");

let users;
if (localStorage.users != null) {
  users = JSON.parse(localStorage.users);
} else {
  users = [];
}

function adduser() {
  let newUser = {
    name: signUpUsername.value.toLocaleLowerCase(),
    email: signUpEmail.value,
    password: signUpPassword.value,
    login: false,
    products: [],
  };

  if (localStorage.users == null) {
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
  } else {
    let getusers = JSON.parse(localStorage.getItem("users"));

    let emails = [];
    getusers.forEach((element) => {
      emails.push(element.email);
    });
    let alertt = document.getElementById("alert");
    if (emails.includes(signUpEmail.value.toLocaleLowerCase())) {
      //   console.log("cant add");
      alertt.innerHTML =
        "This Email already exists. Please choose another username";
    } else {
      //   console.log(add);
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      alertt.innerHTML = "";
      signUpUsername.value = "";
      signUpEmail.value = "";
      signUpPassword.value = "";
      // setTimeout()

      setTimeout(() => {
        window.open("./signin.html", "_self");
      }, 500);
    }
  }
}

submitBtn.addEventListener("click", function (e) {
  if (
    signUpEmail.value === "" ||
    signUpUsername.value === "" ||
    signUpPassword.value === ""
  ) {
  } else {
    // submitBtn.removeAttribute("disabled");
    adduser();
  }
  e.preventDefault();

  //   console.log(signUpUsername.value);
});

// let getusers = JSON.parse(localStorage.getItem("users"));

// getusers.forEach((element) => {
//   console.log(element.name);
// });

//   let a = getusers.find((element) => element.login === false);
//   console.log(getusers.indexOf(a));
//   a.login = true;

//   localStorage.setItem("users", JSON.stringify(getusers));
