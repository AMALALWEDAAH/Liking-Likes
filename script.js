// var cartCount = 0;
// function addToCart() {
//   cartCount++;
//   // cart.querySelector(".num").innerText = cartCount;
//   cart.parentElement.parentElement.parentElement.querySelector(
//     ".num"
//   ).innerText = cartCount;
// }

function addLike(e) {
  var count = e.parentElement.querySelector("p #count");
  let numCount = parseInt(count.innerText);
  count.innerText = numCount + 1;
}
