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
  updatetotal();
}

// Remove Items From Cart
function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updatetotal();
}

// Update total
function updatetotal() {
  var cartContent = document.getElementsByClassName("cart-content")[0];
  var cartBoxes = cartContent.getElementsByClassName("cart-box");
  var total = 0;
  if (cartBoxes.length == 0) {
    document.getElementsByClassName("total-price")[0].innerText = "$" + total;
  }
  for (var i = 0; i < cartBoxes.length; i++) {
    var cartBox = cartBoxes[i];
    var priceElement = cartBox.getElementsByClassName("cart-price")[0];
    var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
    var price = parseFloat(priceElement.innerText.replace("$", ""));
    var quantity = quantityElement.value;
    total = total + price * quantity;
    // If Cents price
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName("total-price")[0].innerText = "$" + total;
  }
}

// Quantity Changes
var quantityInput = document.getElementsByClassName("cart-quantity");
for (var i = 0; i < quantityInput.length; i++) {
  var input = quantityInput[i];
  input.addEventListener("change", quantityChanged);
}

function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updatetotal();
}
