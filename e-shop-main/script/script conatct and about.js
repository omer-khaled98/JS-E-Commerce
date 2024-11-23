var userNameField = document.getElementById("yourName");
var yourphone = document.getElementById("yourphone");
var youremail = document.getElementById("youremail");
var button = document.getElementById("send");

button.addEventListener("click", (event) => {
    event.preventDefault();
    var userName = userNameField.value;
    var userphone=yourphone.value;
    var useremail=youremail.value;


    if (userName.length >= 3) {
        userNameField.style.border = "2px solid green";
    } else {
        userNameField.style.border = "2px solid red";
    }

    if(userphone>=11){
       yourphone.style.border = "2px solid green";
    } else {
        yourphone.style.border = "2px solid red";
    }
    
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (emailPattern.test(useremail)) {
        youremail.style.border = "2px solid green";

      } else { youremail.style.border = "2px solid red";}
        
    
    
   


}); 





    



