// localStorage.setItem("first car","heba")
//window.localStorage.getItem("first car")
// console.log(localStorage.getItem("first car"))

// localStorage.setItem("student1","hebaaa")
// localStorage.removeItem("student1")
// localStorage.setItem("sts","bassant")
// localStorage.setItem("sts","noha")
// localStorage.clear()// بيحزف ال local storage كلها
////////////////////////////////////////////////////////////////////
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
/////////////////////////////////
let allproducts=document.querySelector(".products")
let products=[
    {
        id:1,
        title:"Wooden Chair",
        price:"300$",
        imageUrl:"./images/chair2.jpg"
    },
    {
        id:2,
        title:"winter Jacket",
        price:"600$",
        imageUrl:"./images/woman.jpg"
    },
    {
        id:3,
        title:"white Chair",
        price:"400$",
        imageUrl:"./images/whitechair.jpg"
    },
    {
        id:4,
        title:"Brown Jacket",
        price:"550$",
        imageUrl:"./images/jacket_brown.jpg"
    },
    {
        id:5,
        title:"Swiss Militay",
        price:"100$",
        imageUrl:"./images/watch.jpg"
    },
]
function drowItems(){
    let y=products.map((item)=>{
        return `
        <div class="product_item">
        <img class="product_item_img" src="${item.imageUrl}">
        <div class="product_item_description">
          <h2>${item.title}</h2>
          <p>This Chair from India</p>
          <span>${item.price}</span>
          
        </div><!-- product_item_description -->
        <div class="product_item_actions">
            <button class="add_to_cart" onClick="addToCart(${item.id})">Add To Cart</button>
            <i class="far fa-heart fav"></i>
        </div>
       </div> 
       `     
    })
    allproducts.innerHTML=y;
}
drowItems()
let badge=document.querySelector(".badge")
let addeditem=[];

    if(localStorage.getItem("email")){
        function addToCart(id){
            let chooseItem=products.find((item) => item.id ===id);
            cartProductDiv.innerHTML += `<p>${chooseItem.title} </p>`
            
            addeditem=[...addeditem,chooseItem]
            localStorage.setItem("productsInCart",JSON.stringify(addeditem) )
            let cartProductlength=document.querySelectorAll(".carts_products div p")
           // console.log(cartProductlength.length)
           badge.style.display="block";
           badge.innerHTML=cartProductlength.length;
           
          }
    }else{
        window.location="Login.html"
    }


let cartProductDiv=document.querySelector(".carts_products div")

////////////////////
let shoppingcartIcon=document.querySelector(".shoppingCart")
let cartsProducts=document.querySelector(".carts_products")

shoppingcartIcon.addEventListener("click",opencart)

function opencart(){
    if(cartProductDiv.innerHTML !=""){
        if(cartsProducts.style.display=="block"){
            cartsProducts.style.display="none"
        }else{
            cartsProducts.style.display="block"
        }
    }
}
/////////////////////////////////////////////






