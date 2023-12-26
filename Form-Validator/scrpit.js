let form = document.getElementById("form");
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let repasswod = document.getElementById("repasswod");

function error(input, message)
{
    input.className = "form-control is-invalid";
    let div = input.nextElementSibling;
    div.innerText = message
    div.className ="invalid-feedback"
}

function success(input)
{
    input.className ="form-control is-valid";
}



const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

form.addEventListener("submit",function(e){

   e.preventDefault();

   //------------USERNAME CONTROLS-----------
   if(username.value === "")
   {
      error(username,"USERNAME REQUIRED")
   }
   else if(username.value.length < 3)
   {
    error(username, "USERNAME CANNOT BE LESS THAN 3 CHARACTERS")
   }
   else if(username.value.length > 15)
   {
    error(username,"USERNAME CANNOT BE MORE THAN 15 CHARACTERS")
   }
   else
   {
    success(username)
   }
   //------------USERNAME CONTROLS-----------

   if(email.value === "")
   {
      error(email,"E-MAIL REQUIRED")
   }else if(!validateEmail(email.value)){
    error(email,"E-MAIL FORMAT IS NOT CORRECT")
   }
   else
   {
     success(email)
   }

   //------------PASSWORD CONTROLS-----------
   if(password.value === "")
   {
      error(password,"PASSWORD REQUIRED")
   }else if(password.value.length < 3)
   {
    error(password, "PASSWORD CANNOT BE LESS THAN 3 CHARACTERS")
   }
   else if(password.value.length > 15)
   {
    error(password,"PASSWORD CANNOT BE MORE THAN 15 CHARACTERS")
   }
   else
   {
    success(password)
   }
   //------------PASSWORD CONTROLS-----------

   if(repassword.value != password.value)
   {
      error(repassword,"RE-PASSWORD AND PASSWORD IS NOT MATCHING")
   }else
   {
     success(repassword)
   }

   
});