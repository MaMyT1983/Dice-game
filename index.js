var clicks = 0;
var blockKeys = false;
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
  colorWins();
  onClick();
});

//Listen For Key "r" Press
document.addEventListener("keydown", function(event) {
  keyPressed(event.key);
}, true);

function keyPressed(key) {
 if (blockKeys === false) {
    switch (key) {
      case "r":
        randomNumbers();
        colorWins();
        onClick();
        break;
      default:
        console.log(key);
  } 
} else {};
 
  if (blockKeys === true) {
    switch (key) {
      case "s":
        resetGame();
        break;
        default:
          console.log(key);
    }
  } else {}

}

//Roll Button Clicks (Rounds Played)  Counter
function onClick() {
  clicks += 1;
  roundsPlayed.innerHTML = ("Хвърляния: " + clicks);
  if (clicks > 9) {
    blockKeys = true;
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
    h1.innerHTML = "🎲 Точка за играч 1";
    player1WinsText.innerHTML = "Точки: " + player1Wins;

  } else if (randomNumber1 < randomNumber2) {
    player2Wins += 1;
    h1.innerHTML = "Точка за играч 2 🎲";
    player2WinsText.innerHTML = "Точки: " + player2Wins;

  } else {
    h1.innerHTML = "😊 Равно 😊";

  }
}

//Chage Color Of WIns
function colorWins() {
  if (player1Wins > player2Wins) {
    player1WinsText.classList.add("player1-wins-green");
    player2WinsText.classList.add("player2-wins-red");
  } else if (player1Wins < player2Wins) {
    player1WinsText.classList.add("player1-wins-red");
    player2WinsText.classList.add("player2-wins-green");
  } else {
    player1WinsText.classList.add("player1-wins-green");
    player2WinsText.classList.add("player2-wins-green");
    player1WinsText.classList.remove("player1-wins-red");
    player2WinsText.classList.remove("player2-wins-red");
  }
}

//Game Over Events
function setGameOver() {
  document.querySelector(".rounds-played").innerHTML = "Край на играта";

  if (player1Wins > player2Wins) {
    h1.innerHTML = "🎲 Играч 1 спечели: " + player1Wins + " Точки!";
  } else if (player1Wins < player2Wins) {
    h1.innerHTML = "Играч 2 спечели: " + player2Wins + " Точки! 🎲";
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
}



// var controller = new AbortController();
    // document.addEventListener('keydown', function() {
    //   controller.abort();
  
    // });

     // document.removeEventListener('keydown', keyPressed(), true);
  //   document.onkeydown = function (key) {
  //   return false;
  // }

    // navigator.keyboard.unlock();
      // navigator.keyboard.lock();
