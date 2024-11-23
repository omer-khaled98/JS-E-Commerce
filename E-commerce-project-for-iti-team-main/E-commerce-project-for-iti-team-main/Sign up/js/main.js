function userNameValidation (userInput) {
    let namevalidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return userInput.match(emailValidationRG);
}
function emailOrPhoneValidation (userInput) {
    let emailValidationRG =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return userInput.match(emailValidationRG);
}
function passWordValidation (userInput) {
    let emailValidationRG =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return userInput.match(emailValidationRG);
}




let userName = document.getElementsByName("userName");
let emailOrPhone = document.getElementsByName("email");
let passWord = document.getElementsByName("password");






















/*
console.log(userName[0].type);
console.log(emailOrPhone[0].type);
console.log(passWord[0].type);*/