var clicks = 0;
var blockKeys = false;
var p1Wins = 0;
var p2Wins = 0;
var emblemArray = [];
var randomNumber3 = 0;
var randomNumber4 = 0;
var randomEmblem3 = '';
var randomEmblem4 = '';
var game2Start = 0;
const h1 = $("h1");
const newDrawButton = $(".newdraw-button");
const resetGameButton = $(".resetgame-button-invisible");
const p1WinsText = $(".player1-wins");
const p2WinsText = $(".player2-wins");
const roundsPlayed = $(".rounds-played");

randomEmblem();
playerNames();

//Listen For Mouse Clicks
function addListener () {
  newDrawButton.on("click", function() {
  randomNumbers();
  colorWins();
  onClick();
});

//Listen For Key "r" Press
$(document).on("keydown", function(event) {
  keyPressed(event.key);
});

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

}}

//Listen for Button to Enter Player Names
function playerNames () {
  $('.name1-button').on('click', function() {
    var name = $('.name1').val();
    $('.p1-name').html(name);
    $('.name1').hide();
    $('.name1-button').hide();
    $('.p1-emblem').html(randomEmblem3);
    $('footer').html(randomEmblem3 + 'НЕ СЕ СЪРДИ ЧОВЕЧЕ' + randomEmblem4);
    game2Start ++;
   if (game2Start === 2) {
    addListener();
   } else {}
  });
  
  $('.name2-button').on('click', function() {
    var name = $('.name2').val();
    $('.p2-name').html(name);
    $('.name2').hide();
    $('.name2-button').hide();
    $('.p2-emblem').html(randomEmblem4);
    $('footer').html(randomEmblem3 + 'НЕ СЕ СЪРДИ ЧОВЕЧЕ' + randomEmblem4);
    game2Start ++;
    if (game2Start === 2) {
      addListener();
     } else {}
  });
}


//Roll Button Clicks (Rounds Played)  Counter
function onClick() {
  clicks += 1;
  roundsPlayed.html('Хвърляния: ' + clicks);
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
}


//Generate Random Numbers and Winner Each Round
function randomNumbers() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1; //random 1-6
  var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

  $(".img1").attr('src', "images/dice" + randomNumber1 + ".png"); //images/dice1.png-images/dice6.png
  $(".img2").attr('src', "images/dice" + randomNumber2 + ".png");

  if (randomNumber1 > randomNumber2) {
    p1Wins += 1;
    h1.html(randomEmblem3 + " Точка за " + $('.p1-name').html());
    p1WinsText.html('Точки: ' + p1Wins);

  } else if (randomNumber1 < randomNumber2) {
    p2Wins += 1;
    h1.html("Точка за " + $('.p2-name').html() + randomEmblem4);
    p2WinsText.html("Точки: " + p2Wins);

  } else {
    h1.html("😊 Равно 😊");

  }
}


//Chage Color Of WIns
function colorWins() {
  if (p1Wins > p2Wins) {
    p1WinsText.addClass("player1-wins-green");
    p2WinsText.addClass("player2-wins-red");
  } else if (p1Wins < p2Wins) {
    p1WinsText.addClass("player1-wins-red");
    p2WinsText.addClass("player2-wins-green");
  } else {
    p1WinsText.addClass("player1-wins-green");
    p2WinsText.addClass("player2-wins-green");
    p1WinsText.removeClass("player1-wins-red");
    p2WinsText.removeClass("player2-wins-red");
  }
}


//Game Over Events
function setGameOver() {
  $(".rounds-played").html("Край на играта");

  if (p1Wins > p2Wins) {
    h1.html(randomEmblem3 + " " + $('.p1-name').html() + " спечели с " + p1Wins + " точки!");
    $('footer').html('НЕ СЕ СЪРДИ ' + $('.p2-name').html() + randomEmblem4)
  } else if (p1Wins < p2Wins) {
    h1.html($('.p2-name').html() + " спечели с " + p2Wins + " точки! " + randomEmblem4);
    $('footer').html(randomEmblem3 + 'НЕ СЕ СЪРДИ ' + $('.p1-name').html())
  } else {
    h1.html('😊 Равно 😊');
  }
  
  newDrawButton.prop('disabled', true);
  resetGameButton.addClass("resetgame-button-visible");
  resetGameButton.removeClass("resetgame-button-invisible");
  resetGameButton.on("click", resetGame);
  clicks = 0;
}


// Reset Game Events
function resetGame() {
  // window.location.reload();
  $(h1).text('Хвърляне на зарове');
  resetGameButton.removeClass("resetgame-button-visible");
  resetGameButton.addClass("resetgame-button-invisible");
  p1WinsText.removeClass("player1-wins-red");
  p2WinsText.removeClass("player2-wins-red");
  p1WinsText.removeClass("player1-wins-green");
  p2WinsText.removeClass("player2-wins-green");
  p1Wins = 0;
  $(p1WinsText).html('Точки: ' + p1Wins);
  p2Wins = 0;
  p2WinsText.html('Точки: ' + p2Wins);
  blockKeys = false;
  newDrawButton.prop('disabled', false);
  $('.rounds-played').text('Кой ще победи от 10 рунда?');
  $('footer').html(randomEmblem3 + 'НЕ СЕ СЪРДИ ЧОВЕЧЕ' + randomEmblem4);
}



// var controller = new AbortController();
    // $(document).on('keydown', function() {
    //   controller.abort();
  
    // });

     // document.removeEventListener('keydown', keyPressed(), true);
  //   document.onkeydown = function (key) {
  //   return false;
  // }

    // navigator.keyboard.unlock();
      // navigator.keyboard.lock();
