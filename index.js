//Generating Random Number1
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

document.querySelector(".img1").src = ("images/dice" + randomNumber1 + ".png");


//Generating random Number2
var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

document.querySelector(".img2").src = ("images/dice" + randomNumber2 + ".png");


if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🏁 Играч 1 спечели!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Играч 2 спечели! 🏁";
} else {
  document.querySelector("h1").innerHTML = "😊 Равно 😊"
}

document.querySelector(".newdraw-button").addEventListener("click", function() {
  window.location.reload();
});










//
// var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
//
// var randomImage1Source = "images/dice" + randomNumber1 + ".png"; //images/dice1.png - images/dice6.png
//
// document.querySelectorAll("img")[0].setAttribute("src", randomImage1Source);
//
//
// var randomNumber2 = Math.floor(Math.random() * 6 ) + 1;
//
// var randomImage2Source = "images/dice" + randomNumber2 + ".png"; //images/dice1.png - images/dice6.png
//
// document.querySelectorAll("img")[1].setAttribute("src", randomImage2Source);
//
//
//
//   if (randomNumber1 > randomNumber2) {
//     document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
//   }
//   else if (randomNumber1 < randomNumber2) {
//     document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
//   } else {
//     document.querySelector("h1").innerHTML = "- Draw -";
//   }
