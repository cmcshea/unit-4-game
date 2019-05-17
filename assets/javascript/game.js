
$(document).ready(function () {

    // There will be four crystals displayed as buttons on the page.


    var crystal1, crystal2, crystal3, crystal4


    // The player will be shown a random number at the start of the game btwn 19-120

    // function randomNumber() {
    //     return Math.floor(Math.random() * 101) + 19;
    // }

    // function gemRandomNumber() {
    //     return Math.floor(Math.random() * 12) + 1;
    // }

    // var targetNumber;
    // var score;
    // var wins = 0;
    // var losses = 0;
    // function Start() {
    //     targetNumber = randomNumber();
    //     score = 0;
    //     $("#gem1").val(gemRandomNumber);
    //     $("#gem2").val(gemRandomNumber);
    //     $("#gem3").val(gemRandomNumber);
    //     $("#gem4").val(gemRandomNumber);

    //     $("#score").html(score);
    //     $("#target").html(targetNumber);
    // }
    // Start();
    
    
    // $(".gem").on("click", function () {
    //     var gem = $(this);

    //     score = score + parseInt(gem.val());

    //     $("#score").html(score);
        
    //     if (score > targetNumber) {
    //         losses++;
    //         $("#losses").text(losses)
    //         Start();
    //     }
    //     else if (score === targetNumber){
    //         wins++;
    //         $("#wins").text(wins);
    //         Start();
    //     }
    // })



        // Your game will hide this amount until the player clicks a crystal.
        //players total score will be hidden .hide() .show()

        // When they do click one, update the player's score counter.
        //onClick function - refer to hangman, update score function


        // The player wins if their total score matches the random number from the beginning of the game.
        //to win, number must match randomNumber at game start

        function win() {

        }
    // The player loses if their score goes above the random number.
    //if number is greater than randomNumber, player loses

    // The game restarts whenever the player wins or loses.
    //refer to setUpnewgame? from hangman

    // When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.



    //setupnewRound - reset to 0, new randomNumber

    // The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.




    //gameObj to store new values

    // The random number shown at the start of the game should be between 19 - 120.
    function randomNumber() {
        return Math.floor(Math.random() * 101) + 19;
    }
    // Each crystal should have a random hidden value between 1 - 12.
    function gemRandomNumber() {
        return Math.floor(Math.random() * 12) + 1;
    }

    var targetNumber;
    var score
    var wins = 0;
    var losses = 0;

    function start () {
        targetNumber = randomNumber();
        $("#target").text(targetNumber);
        score = 0;
        $("#score").html(score);

        $("#gem1").val(gemRandomNumber);
        $("#gem2").val(gemRandomNumber);
        $("#gem3").val(gemRandomNumber);
        $("#gem4").val(gemRandomNumber);

    }
    start();


    $(".gem").on("click", function(){
        var gem = $(this);

        score = score + parseInt(gem.val());

        $("#score").html(score);


    })
})

