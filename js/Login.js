
let email=document.querySelector("#email");
let password=document.querySelector("#password");
let loginbtn=document.querySelector("#submit");

let getemail=localStorage.getItem("email")
let getpassword=localStorage.getItem("password")

loginbtn.addEventListener("click" ,function(e){
    e.preventDefault()
    if(email.value==="" || password.value===""){
        alert("Please Fill Data");


    }
    else{
      if(getemail && getemail.trim()=== email.value.trim() && getpassword && getpassword.trim()===password.value){
         setTimeout( () =>{
            window.location="index.html"
         },1500
         )
      }  
      else{
        alert("Invalid User name or Password")
      }
    }
})
 