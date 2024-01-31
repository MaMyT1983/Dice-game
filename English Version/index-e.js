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
var enterPress = 0;
const h1 = $("h1");
const newDrawButton = $(".newdraw-button");
const resetGameButton = $(".resetgame-button-invisible");
const p1WinsText = $(".player1-wins");
const p2WinsText = $(".player2-wins");
const roundsPlayed = $(".rounds-played");

randomEmblem();
playerNames();

//Listen For 'Enter' Key Press
$(document).on("keydown", function(event) {
  keyEnter(event.key);
});

function keyEnter(key){
  if (enterPress === 0) {
    switch (key) {
     case "Enter":
      assignP1Name();
      break;
    }
  } else if (enterPress === 1) {
    switch (key) {
      case "Enter":
       assignP2Name();
       break;
       default:
        console.log(key);
    }
  }
 }

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

      case "р":
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

      case "с":
        resetGame();
        break;
        default:
       console.log(key);
    }
  } else {}

}}

//Assign player name
function assignP1Name () {
  var name = $('.name1').val();
  $('.p1-name').html(name);
  $('.name1').hide();
  $('.name1-button').hide();
  $('.p1-emblem').html(randomEmblem3);
  $('footer').html(randomEmblem3 + " DON'T BE SAD " + randomEmblem4);
  game2Start ++;
  enterPress ++;
 if (game2Start === 2) {
  addListener();
 } else {}
}

function assignP2Name () {
  var name = $('.name2').val();
  $('.p2-name').html(name);
  $('.name2').hide();
  $('.name2-button').hide();
  $('.p2-emblem').html(randomEmblem4);
  $('footer').html(randomEmblem3 + " DON'T BE SAD " + randomEmblem4);
  game2Start ++;
  enterPress ++;
  if (game2Start === 2) {
    addListener();
   } else {}
}

//Listen for Button to Enter Player Names
function playerNames () {
  $('.name1-button').on('click', function() {
    assignP1Name();
  });
  
  $('.name2-button').on('click', function() {
    assignP2Name();
  });
}


//Roll Button Clicks (Rounds Played)  Counter
function onClick() {
  clicks += 1;
  roundsPlayed.html('Rolls: ' + clicks);
  if (clicks > 9) {
    blockKeys = true;
    setGameOver();
  } else {}
};

function randomEmblem () {
  emblemArray = [' 🐒 ', ' 🐍 ', ' 🦗 ', ' 🐯 ', ' 🦩 ', '🐷', '🦏', '🐔', '🐢', '🦆', '🐼'];
  randomNumber3 = Math.floor(Math.random() * 11) // random 0-10
  randomNumber4 = Math.floor(Math.random() * 11) // random 0-10
  randomEmblem3 = emblemArray[randomNumber3];
  randomEmblem4 = emblemArray[randomNumber4];
}


//Generate Random Numbers and Winner Each Round
function randomNumbers() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1; //random 1-6
  var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

  $(".img1").attr('src', "../images/dice" + randomNumber1 + ".png"); //images/dice1.png-images/dice6.png
  $(".img2").attr('src', "../images/dice" + randomNumber2 + ".png");

  if (randomNumber1 > randomNumber2) {
    p1Wins += 1;
    h1.html(randomEmblem3 + " Point for " + $('.p1-name').html());
    p1WinsText.html('Points: ' + p1Wins);

  } else if (randomNumber1 < randomNumber2) {
    p2Wins += 1;
    h1.html("Point for " + $('.p2-name').html() + ' ' + randomEmblem4);
    p2WinsText.html("Points: " + p2Wins);

  } else {
    h1.html("😊 Draw 😊");

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
  $(".rounds-played").html("Game over");

  if (p1Wins > p2Wins) {
    h1.html(randomEmblem3 + " " + $('.p1-name').html() + " won with " + p1Wins + " points!");
    $('footer').html("DON'T BE SAD " + $('.p2-name').html() + randomEmblem4)
  } else if (p1Wins < p2Wins) {
    h1.html($('.p2-name').html() + " won with " + p2Wins + " points! " + randomEmblem4);
    $('footer').html(randomEmblem3 + " DON'T BE SAD " + $('.p1-name').html())
  } else {
    h1.html('😊 Draw 😊');
  }
  
  newDrawButton.prop('disabled', true);
  resetGameButton.addClass("resetgame-button-visible");
  resetGameButton.removeClass("resetgame-button-invisible");
  resetGameButton.on("click", resetGame);
  clicks = 0;

  $(document).on('keypress', function(e){
    newGame(e.key);
  });

  function newGame (key) {
    switch (key) {
      case 'n':
      window.location.reload();
      break;

      case 'н':
      window.location.reload();
      break;
      default:
    } 
  }

}


// Reset Game Events
function resetGame() {
  $(h1).text('Dice roll');
  resetGameButton.removeClass("resetgame-button-visible");
  resetGameButton.addClass("resetgame-button-invisible");
  p1WinsText.removeClass("player1-wins-red");
  p2WinsText.removeClass("player2-wins-red");
  p1WinsText.removeClass("player1-wins-green");
  p2WinsText.removeClass("player2-wins-green");
  p1Wins = 0;
  $(p1WinsText).html('Points: ' + p1Wins);
  p2Wins = 0;
  p2WinsText.html('Points: ' + p2Wins);
  blockKeys = false;
  newDrawButton.prop('disabled', false);
  $('.rounds-played').text('Who will win in 10 rolls?');
  $('footer').html(randomEmblem3 + " DON'T BE SAD " + randomEmblem4);
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