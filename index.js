var clicks = 0;
var blockKeys = false;
var player1Wins = 0;
var player2Wins = 0;
var emblemArray = [];
var randomNumber3 = 0;
var randomNumber4 = 0;
var randomEmblem3 = '';
var randomEmblem4 = '';
const h1 = document.querySelector("h1");
const newDrawButton = document.querySelector(".newdraw-button");
const resetGameButton = document.querySelector(".resetgame-button-invisible");
const player1WinsText = document.querySelector(".player1-wins");
const player2WinsText = document.querySelector(".player2-wins");
const roundsPlayed = document.querySelector(".rounds-played");

randomEmblem();

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


//Listen for Button to Enter Player Names
$('.name1-button').on('click', function() {
  var name = $('.name1').val();
  $('.p1-name').html(name);
  $('.name1').hide();
  $('.name1-button').hide();
  $('.p1-emblem').html(randomEmblem3);
});

$('.name2-button').on('click', function() {
  var name = $('.name2').val();
  $('.p2-name').html(name);
  $('.name2').hide();
  $('.name2-button').hide();
  $('.p2-emblem').html(randomEmblem4);
});


//Roll Button Clicks (Rounds Played)  Counter
function onClick() {
  clicks += 1;
  roundsPlayed.innerHTML = ("Хвърляния: " + clicks);
  if (clicks > 9) {
    blockKeys = true;
    setGameOver();
  } else {}
};

function randomEmblem () {
  emblemArray = [' 🐒 ', ' 🐍 ', ' 🦗 ', ' 🐯 ', ' 🦩 '];
  randomNumber3 = Math.floor(Math.random() * 5) // random 0-4
  randomNumber4 = Math.floor(Math.random() * 5) // random 0-4
  randomEmblem3 = emblemArray[randomNumber3];
  randomEmblem4 = emblemArray[randomNumber4];
  console.log(randomNumber3);
  console.log(randomEmblem);
}

//Generate Random Numbers and Winner Each Round
function randomNumbers() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1; //random 1-6
  var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6


  document.querySelector(".img1").src = ("images/dice" + randomNumber1 + ".png"); //images/dice1.png-images/dice6.png
  document.querySelector(".img2").src = ("images/dice" + randomNumber2 + ".png");

  if (randomNumber1 > randomNumber2) {
    player1Wins += 1;
    h1.innerHTML = randomEmblem3 + " Точка за " + $('.p1-name').html();
    player1WinsText.innerHTML = "Точки: " + player1Wins;

  } else if (randomNumber1 < randomNumber2) {
    player2Wins += 1;
    h1.innerHTML = "Точка за " + $('.p2-name').html() + randomEmblem4;
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
    h1.innerHTML = randomEmblem3 + " " + $('.p1-name').html() + " спечели с " + player1Wins + " точки!";
  } else if (player1Wins < player2Wins) {
    h1.innerHTML = $('.p2-name').html() + " спечели с " + player2Wins + " точки! " + randomEmblem4;
  } else {
    h1.innerHTML = "😊 Равно 😊"
  }
  
  newDrawButton.disabled = true;
  resetGameButton.classList.add("resetgame-button-visible");
  resetGameButton.classList.remove("resetgame-button-invisible");
  resetGameButton.addEventListener("click", resetGame);
  clicks = 0;

}

// Reset Game Events
function resetGame() {
  // window.location.reload();
  $('h1').text('Хвърляне на зарове');
  resetGameButton.classList.remove("resetgame-button-visible");
  resetGameButton.classList.add("resetgame-button-invisible");
  player1WinsText.classList.remove("player1-wins-red");
  player2WinsText.classList.remove("player2-wins-red");
  player1WinsText.classList.remove("player1-wins-green");
  player2WinsText.classList.remove("player2-wins-green");
  player1Wins = 0;
  player1WinsText.innerHTML = "Точки: " + player1Wins;
  player2Wins = 0;
  player2WinsText.innerHTML = "Точки: " + player2Wins;
  blockKeys = false;
  newDrawButton.disabled = false;
  $('.rounds-played').text('Кой ще победи от 10 рунда?');
   
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
