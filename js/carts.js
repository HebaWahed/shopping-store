let productsInCart=localStorage.getItem("productsInCart")
let allproducts=document.querySelector(".products")
  if(productsInCart){
    let item=JSON.parse(productsInCart);
   drawCartProducts(item);
}
function  drawCartProducts(products){
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
            <button class="add_to_cart" onClick="removefromcart(${item.id})">Remove from Cart</button>
           
        </div>
       </div> 
       `     
    })
    allproducts.innerHTML=y;
}