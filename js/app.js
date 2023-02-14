// Cart
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");
// Open Cart
cartIcon.onclick = () => {
  cart.classList.add("active");
};
// Close Cart
closeCart.onclick = () => {
  cart.classList.remove("active");
};
// Cart working JS
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}
// Making Function
function ready() {
  // Remove Item From Cart
  var removeCartButton = document.getElementsByClassName("cart-remove");
  console.log(removeCartButton);
  for (var i = 0; i < removeCartButton.length; i++) {
    var button = removeCartButton[i];
    button.addEventListener("click", removeCartItem);
  }
}

// Remove Items From Cart
function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
}
