$(document).ready(function(){

// There will be four crystals displayed as buttons on the page.
 

var crystal1, crystal2, crystal3, crystal4

// The player will be shown a random number at the start of the game btwn 19-120

function randomNumber() {
    var random = Math.floor(Math.random() * 120) + 19; 
    return random
}

// When the player clicks on a crystal, it will add a specific amount of points to the player's total score.

//onClick Event when crystal is clicked, no. of points is updated in html


$("#gem1").click(function() {
    
   console.log((Math.floor(Math.random() * 12) + 1)); 

});

//create var to hold total score *create a new random number (loop?) for each image

var targetNumber = randomNumber();
$("#target").html(targetNumber);


var playerScore =


// Your game will hide this amount until the player clicks a crystal.
    //players total score will be hidden .hide() .show()

// When they do click one, update the player's score counter.
    //onClick function - refer to hangman, update score function


// The player wins if their total score matches the random number from the beginning of the game.
    //to win, number must match randomNumber at game start

    function win () {

    }
// The player loses if their score goes above the random number.
    //if number is greater than randomNumber, player loses

// The game restarts whenever the player wins or loses.
    //refer to setUpnewgame? from hangman

// When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

var counter = 0;
var wins = 0;
var losses = 0;

    //setupnewRound - reset to 0, new randomNumber

// The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.




    //gameObj to store new values

// The random number shown at the start of the game should be between 19 - 120.


// Each crystal should have a random hidden value between 1 - 12.
})