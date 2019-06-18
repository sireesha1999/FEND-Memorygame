"use strict";

var pare = document.getElementsByClassName("deck");

/*
 * Create a list that holds all of your cards
 */

// declaration of global variables
var sec = 0;
var min = 0;
var hrs = 0;
var chil = document.getElementsByClassName("card");
var chilList = Array.prototype.slice.call(chil);
var movementSection = document.getElementById("moves");
var time;
let statusTime = 0
var movements = 0;
var cardshop = [];
var starCount = 3;
var stararr = [...document.getElementsByClassName("fa-star")];

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
// code for shuffling the cards
var body = document.getElementById("body")
body.onload = startGame();
// code to start the game
function startGame() {
  var changedCards = shuffle(chilList);
  for (var i = 0; i < changedCards.length; i++) {
    pare[0].append(changedCards[i]);
    console.log(changedCards[i]);
    console.log(pare);
  }
}
// Adding EventListener to the cards
var i = 0;
for (var i in chilList) {
  chilList[i].addEventListener("click", displayCard);
}
// code for dispalying the card
function displayCard() {
  if (statusTime == 0)
    timerStarts();
  statusTime = statusTime + 1;
  // Add required classes to the class
  this.classList.add("card", "disable");
  this.classList.add("open");
  this.classList.add("show");
  cardshop.push(this);
  // code for moves
  if (cardshop.length == 2) {
    movements = movements + 1;
    movementSection.innerHTML = movements;
    starRate();
    if (cardshop[0].children[0].classList.item(1) == cardshop[1].children[0].classList.item(1)) {
      console.log("matched");
      cardshop[0].classList.add("match", "disable");
      cardshop[1].classList.add("match", "disable");
      // code for when card are matched
      if (cardsMatched.length == 16) {
        clearInterval(time);
        // giving pop menu to the game
        Swal.fire({
          title: "Congrats",
          html: 'You have earned <strong style="color:#ff9f33; text-shadow: 3px 3px 3px #000">' + starCount + ' <i class ="fa fa-star"></i> </strong> <br> And You completed this game with the time of <br>' + hrs + 'hours :' + min + 'minutes :' + sec + 'seconds',
          confirmButtonText: '<i class="fa fa-thumbs-up"></i>Reastrart',

        }).then(() => {
          document.location.reload();

        });
      }
      cardshop = [];

    }
    // code when opened cards are unmatched
    else {
      console.log("unmatch");
      cardshop[1].classList.add("unmatch");
      cardshop[0].classList.add("unmatch");
      cardshop.map((card) => {
        setTimeout(() => {
          card.classList.remove("unmatch", "open", "show", "disable");
        }, 300);
      })

      cardshop = [];

    }

  }
}
var cardsMatched = document.getElementsByClassName("match");
// timer functionality
// giving timer to the game
function timerStarts() {

  time = setInterval(() => {
    sec = sec + 1;
    if (sec == 59) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hrs = hrs + 1;
    }
    var time = document.getElementById("time");

    time.innerHTML = sec + "::" + min + "::" + hrs;
  }, 1000)

}

// for refreshing the Game
function restart() {
  document.location.reload();
}

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
// code for displaying card rating
function starRate() {
  if (movements >= 9) {
    starCount = 2;
    stararr[2].style.display = "none";

  }
  if (movements > 17) {
    starCount = 1;
    stararr[1].style.display = "none";
  }

}
