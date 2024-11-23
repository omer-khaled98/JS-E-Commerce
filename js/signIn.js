let sinInEmmail = document.getElementById("sininemmail");
let sinInPassword = document.getElementById("sininpassword");
let sinInbtn = document.getElementById("sinInbtn");
let wrong = document.getElementById("wrong");
let beforeRegestration = document.getElementById("beforeRegestration");
let afterregrstration = document.getElementById("afterregrstration");

function sinIn() {
  let getusers = JSON.parse(localStorage.getItem("users"));

  let can = getusers.find(
    (element) =>
      element.email === sinInEmmail.value &&
      element.password === sinInPassword.value
  );

  let regest = [];
  if (can) {
    regest.push(can);

    localStorage.setItem("regestration", JSON.stringify(regest));
    (window.location = "./idex.html"), "_self";
  } else {
    wrong.innerHTML = "The email or password may be wrong";
  }

  // let a = getusers.find((element) => element.login === false);
  // console.log(getusers.indexOf(a));
  // a.login = true;
  // localStorage.setItem("users", JSON.stringify(getusers));
}
