let usernameF=document.querySelector("#inputUserF");
let usernameL=document.querySelector("#inputUserL");
let email=document.querySelector("#email");
let password=document.querySelector("#password");
let city=document.querySelector("#inputCity");

let registerbtn=document.querySelector("#sign_up");
 

registerbtn.addEventListener("click", function (e)
{
    e.preventDefault()
   if(usernameF.value ==="" || usernameL.value==="" || email.value==="" || password.value===""  || city.value===""){

     alert("Please Fill Data")
   }
   else{
    localStorage.setItem("usernameF",usernameF.value);
    localStorage.setItem("usernameL",usernameL.value);
    localStorage.setItem("email",email.value);
    localStorage.setItem("password",password.value);
    localStorage.setItem("city",inputCity.value);
    
    setTimeout( () => {
        window.location="Login.html"

    } ,1500)

   }
})
