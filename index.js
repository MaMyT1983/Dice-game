var clicks = 0;
var player1Wins = 0;
var player2Wins = 0;
const h1 = document.querySelector("h1");
const newDrawButton = document.querySelector(".newdraw-button");
const resetGameButton = document.querySelector(".resetgame-button-invisible");
const player1WinsText = document.querySelector(".player1-wins");
const player2WinsText = document.querySelector(".player2-wins");
const roundsPlayed = document.querySelector(".rounds-played");



//Listen For Mouse Clicks
newDrawButton.addEventListener("click", function() {
  randomNumbers();
  onClick();
});

//Listen For Key "r" Clicks
document.addEventListener("keydown", function(event) {
  keyPressed(event.key);

});


function keyPressed(key) {

  switch (key) {
    case "r":
      randomNumbers();
      onClick();
      break;
    default:
      console.log(key);

  }
}

//Roll Button Clicks (Rounds Played)  Counter
function onClick() {
  clicks += 1;
  roundsPlayed.innerHTML = ("Хвърляния: " + clicks);

  if (clicks > 8) {
    setGameOver();
  } else {}
};



//Generate Random Numbers and Winner Each Round
function randomNumbers() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1; //Random 1-6
  var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

  document.querySelector(".img1").src = ("images/dice" + randomNumber1 + ".png"); //images/dice1.png-images/dice6.png
  document.querySelector(".img2").src = ("images/dice" + randomNumber2 + ".png");

  if (randomNumber1 > randomNumber2) {
    player1Wins += 1;
    h1.innerHTML = "🏁 Играч 1 спечели!";
    player1WinsText.innerHTML = "Победи: " + player1Wins;

  } else if (randomNumber1 < randomNumber2) {
    player2Wins += 1;
    h1.innerHTML = "Играч 2 спечели! 🏁";
    player2WinsText.innerHTML = "Победи: " + player2Wins;

  } else {
    h1.innerHTML = "😊 Равно 😊";

  }
}

//Game Over Events
function setGameOver() {
  document.querySelector(".rounds-played").innerHTML = "Край на играта";

  if (player1Wins > player2Wins) {
    h1.innerHTML = "🏁 Играч 1 спечели: " + player1Wins + " победи!";
  } else if (player1Wins < player2Wins) {
    h1.innerHTML = "Играч 2 спечели: " + player2Wins + " победи! 🏁";
  } else {
    h1.innerHTML = "😊 Равно 😊"
  }

  clicks = 0;
  newDrawButton.disabled = true;
  resetGameButton.classList.add("resetgame-button-visible");
  resetGameButton.classList.remove("resetgame-button-invisible");
  resetGameButton.addEventListener("click", resetGame);

    }

// Reset Game Events
    function resetGame() {
      window.location.reload();

      // h1.innerHTML = "Хвърляне на зарове";
      // player1WinsText.innerHTML = "Победи: 0";
      // player2WinsText.innerHTML = "Победи: 0";
      // roundsPlayed.innerHTML = "Кой ще победи от 9 рунда?";
      // newDrawButton.disabled = false;
      // resetGameButton.classList.remove("resetgame-button-visible");
      // resetGameButton.classList.add("resetgame-button-invisible");

    }









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
