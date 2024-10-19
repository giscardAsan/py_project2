    let scrollContainer = document.querySelector(".gallery");
    let backBtn = document.getElementById("backBtn");
    let nextBtn = document.getElementById("nextBtn");

    nextBtn.addEventListener("click", ()=>{
        scrollContainer.style.scrollBehavior = "smooth";
        scrollContainer.scrollLeft += 700;
    });

    backBtn.addEventListener("click", ()=>{
        scrollContainer.style.scrollBehavior = "smooth";
        scrollContainer.scrollLeft -= 800;
    });

    let scrollConta = document.querySelector(".gallery_2");
    let backBtn_2 = document.getElementById("backBtn_2");
    let nextBtn_2 = document.getElementById("nextBtn_2");

    nextBtn_2.addEventListener("click", ()=>{
        scrollConta.style.scrollBehavior = "smooth";
        scrollConta.scrollLeft += 800;
    });

    backBtn_2.addEventListener("click", ()=>{
        scrollConta.style.scrollBehavior = "smooth";
        scrollConta.scrollLeft -= 800;
    });


    let scrollCont = document.querySelector(".gallery_3");
    let backBtn_3 = document.getElementById("backBtn_3");
    let nextBtn_3 = document.getElementById("nextBtn_3");

    nextBtn_3.addEventListener("click", ()=>{
        scrollCont.style.scrollBehavior = "smooth";
        scrollCont.scrollLeft += 800;
    });

    backBtn_3.addEventListener("click", ()=>{
        scrollCont.style.scrollBehavior = "smooth";
        scrollCont.scrollLeft -= 800;
    });


    let scrollCon = document.querySelector(".gallery_4");
    let backBtn_4 = document.getElementById("backBtn_4");
    let nextBtn_4 = document.getElementById("nextBtn_4");

    nextBtn_4.addEventListener("click", ()=>{
        scrollCon.style.scrollBehavior = "smooth";
        scrollCon.scrollLeft += 800;
    });

    backBtn_4.addEventListener("click", ()=>{
        scrollCon.style.scrollBehavior = "smooth";
        scrollCon.scrollLeft -= 800;
    });


    let scrollCont5 = document.querySelector(".gallery_5");
    let backBtn_5 = document.getElementById("backBtn_5");
    let nextBtn_5 = document.getElementById("nextBtn_5");

    nextBtn_5.addEventListener("click", ()=>{
        scrollCont5.style.scrollBehavior = "smooth";
        scrollCont5.scrollLeft += 800;
    });

    backBtn_5.addEventListener("click", ()=>{
        scrollCont5.style.scrollBehavior = "smooth";
        scrollCont5.scrollLeft -= 800;
    });


    let scrollCont6 = document.querySelector(".gallery_6");
    let backBtn_6 = document.getElementById("backBtn_6");
    let nextBtn_6 = document.getElementById("nextBtn_6");

    nextBtn_6.addEventListener("click", ()=>{
        scrollCont6.style.scrollBehavior = "smooth";
        scrollCont6.scrollLeft += 800;
    });

    backBtn_6.addEventListener("click", ()=>{
        scrollCont6.style.scrollBehavior = "smooth";
        scrollCont6.scrollLeft -= 800;
    });


    let scrollCont7 = document.querySelector(".gallery_7");
    let backBtn_7 = document.getElementById("backBtn_7");
    let nextBtn_7 = document.getElementById("nextBtn_7");

    nextBtn_7.addEventListener("click", ()=>{
        scrollCont7.style.scrollBehavior = "smooth";
        scrollCont7.scrollLeft += 800;
    });

    backBtn_7.addEventListener("click", ()=>{
        scrollCont7.style.scrollBehavior = "smooth";
        scrollCont7.scrollLeft -= 800;
    });


    let scrollCont8 = document.querySelector(".gallery_8");
    let backBtn_8 = document.getElementById("backBtn_8");
    let nextBtn_8 = document.getElementById("nextBtn_8");

    nextBtn_8.addEventListener("click", ()=>{
        scrollCont8.style.scrollBehavior = "smooth";
        scrollCont8.scrollLeft += 800;
    });

    backBtn_8.addEventListener("click", ()=>{
        scrollCont8.style.scrollBehavior = "smooth";
        scrollCont8.scrollLeft -= 800;
    });


    let scrollCont9 = document.querySelector(".gallery_9");
    let backBtn_9 = document.getElementById("backBtn_9");
    let nextBtn_9 = document.getElementById("nextBtn_9");

    nextBtn_9.addEventListener("click", ()=>{
        scrollCont9.style.scrollBehavior = "smooth";
        scrollCont9.scrollLeft += 800;
    });

    backBtn_9.addEventListener("click", ()=>{
        scrollCont9.style.scrollBehavior = "smooth";
        scrollCont9.scrollLeft -= 800;
    });


    let scrollCont10 = document.querySelector(".gallery_10");
    let backBtn_10 = document.getElementById("backBtn_10");
    let nextBtn_10 = document.getElementById("nextBtn_10");

    nextBtn_10.addEventListener("click", ()=>{
        scrollCont10.style.scrollBehavior = "smooth";
        scrollCont10.scrollLeft += 800;
    });

    backBtn_10.addEventListener("click", ()=>{
        scrollCont10.style.scrollBehavior = "smooth";
        scrollCont10.scrollLeft -= 800;
    });


    let scrollCont11 = document.querySelector(".gallery_11");
    let backBtn_11 = document.getElementById("backBtn_11");
    let nextBtn_11 = document.getElementById("nextBtn_11");

    nextBtn_11.addEventListener("click", ()=>{
        scrollCont11.style.scrollBehavior = "smooth";
        scrollCont11.scrollLeft += 800;
    });

    backBtn_11.addEventListener("click", ()=>{
        scrollCont11.style.scrollBehavior = "smooth";
        scrollCont11.scrollLeft -= 800;
    });


    let scrollCont12 = document.querySelector(".gallery_12");
    let backBtn_12 = document.getElementById("backBtn_12");
    let nextBtn_12 = document.getElementById("nextBtn_12");

    nextBtn_12.addEventListener("click", ()=>{
        scrollCont12.style.scrollBehavior = "smooth";
        scrollCont12.scrollLeft += 800;
    });

    backBtn_12.addEventListener("click", ()=>{
        scrollCont12.style.scrollBehavior = "smooth";
        scrollCont12.scrollLeft -= 800;
    });


    let scrollCont13 = document.querySelector(".gallery_13");
    let backBtn_13 = document.getElementById("backBtn_13");
    let nextBtn_13 = document.getElementById("nextBtn_13");

    nextBtn_13.addEventListener("click", ()=>{
        scrollCont13.style.scrollBehavior = "smooth";
        scrollCont13.scrollLeft += 800;
    });

    backBtn_13.addEventListener("click", ()=>{
        scrollCont13.style.scrollBehavior = "smooth";
        scrollCont13.scrollLeft -= 800;
    });


    function toggle(){
        var trailer = document.querySelector(".trailer");
        var video = document.querySelector("video");
        trailer.classList.toggle("active");
        video.pause();
        video.currentTime = 0;
      }











      //cart
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

//cart open
cartIcon.onclick = () => {
    cart.classList.add("active");
};
//cart close
closeCart.onclick = () => {
    cart.classList.remove("active");
};



//cart Working
if (document.readyState == "loading"){
    document.addEventListener('DOMContentLoaded', ready);

}else{
    ready();
} 


function ready() {
    //Remove item from cart
    var removeCartButtons = document.getElementsByClassName("cart-remove");
    console.log(removeCartButtons);
    for (var i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i];
        button.addEventListener("click", removeCartItem);
    }
    //Quantity-change
    var quantityInputs = document.getElementsByClassName("cart-quantity");
            for (var i = 0; i < quantityInputs.length; i++) {
                var input = quantityInputs[i];
                input.addEventListener("change", quantityChanged);
            }

            //Add Cart
            var addCart = document.getElementsByClassName("add-cart");
            for (var i = 0; i < addCart.length; i++) {
                var button = addCart[i];
                button.addEventListener("click", addCartClicked);
            }
         //Buy Button Work
            document
            .getElementsByClassName("btn-buy")[0]
            .addEventListener("click", buyButtonClicked);
}

//Buy Button
function buyButtonClicked() {
    alert("Yuor Order is placed");
    var cartContent = document.getElementsByClassName("cart-content")[0];
    while (cartContent.hasChildNodes()) {
        cartContent.removeChild(cartContent.firstChild);
    }
    updatetotal();
}






//Remove Item from cart
function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}


function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updatetotal();
}



//Add to cart
function addCartClicked(event) {
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    var price = shopProducts.getElementsByClassName("price")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
    addProductToCart(title, price, productImg);
    updatetotal();
}
function addProductToCart(title, price, productImg) {
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");
    var cartItems = document.getElementsByClassName('cart-content')[0];
    var cartItemsNames = cartItems.getElementsByClassName('cart-product-title');
    for (var i = 0; i < cartItemsNames.length; i++) {
        if (cartItemsNames[i].innerText == title) {
        alert('You have already add this item to cart');
        return;
        }
    }
var cartBoxContent = `
                        <img src="${productImg}" width="100%" alt="" class="cart-img">
                        <div class="detail-box">
                            <div class="cart-product-title">${title}</div>
                            <div class="cart-price">${price}</div>
                            <input type="number" value="1" class="cart-quantity">
                        </div>
                        <i style="color: red; font-size:20px" class="fa-solid fa-trash cart-remove"></i>
`;
cartShopBox.innerHTML = cartBoxContent;
cartItems.append(cartShopBox);
cartShopBox
.getElementsByClassName('cart-remove')[0]
.addEventListener('click', removeCartItem);
cartShopBox
.getElementsByClassName('cart-quantity')[0]
.addEventListener('change', quantityChanged);
}



// updat total  
function updatetotal() {
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
    }
    

        //if price contain some cents value
        total = Math.round(total * 100) / 100;

        document.getElementsByClassName("total-price")[0].innerText = "$" + total;
}

