let userInfo=document.querySelector("#user_info")
let userdata=document.querySelector("#user")
let links=document.querySelectorAll("#links")


// if(localStorage.getItem("email")){
//    links.remove()
//   // userInfo.style.display="block"
//    userdata.innerHTML=localStorage.getItem("email")
// }

if(localStorage.getItem("email")){
    links.forEach(link => {
        link.remove();
       
        userdata.innerHTML=localStorage.getItem("email")
    });
    // Rest of your code
}

let localout=document.querySelector("#logout")
localout.addEventListener("click",function(){
    localStorage.clear();
    setTimeout(() =>{
        window.location="Login.html";
    },1500)
})