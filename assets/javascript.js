// INITIAL CREATION OF VARIABLES
// ==============================================================================

    // Set the list of possible answers to the game
    var cats = ["tuxedo","calico","persian","siamese","munchkin","sphynx","ragdoll"];
    // Create an empty array to collect the letters guessed
    var guessed = [];
    // Create a variable to count down remaining guesses
    var chances = 15;
    // Create an empty array for the characters of the hidden word
    var blanks = [];
    // Set win and loss variables to an initial value of 0
    var wins = 0;
    var losses = 0;
    

// RANDOM WORD GENERATION
// ==============================================================================

    // Select a random element from the array to serve as the answer for one round
  
    var answer1 = cats[Math.floor(Math.random()*cats.length)];
    console.log(answer1);
    var answer2 = []
    answer2 =  answer1.split("");
    console.log(answer2)


// MAIN PROCESS
// ==============================================================================
 
    document.onkeyup = function mainFunction() {

    // Clear the "Press Any Key To Begin!" text from the message array, leaving an empty array. 
    message.length = 0;

    // After the key press, display "Your Mystery Word"
    document.getElementById("mysteryWord").innerHTML = "Your Mystery Word:";

  
    // Call the now blank "message" array and fill it with the "_" text in the blanks array    
    for (var i = 0; i < answer2.length; i++) {
        if(blanks.length === answer2.length){
            blanks = blanks;
        } else {
            blanks.push("_");
        }
    }

    // Check the ith place of "answer2" to see if it's equal to the key pressed by the user
    // If the letter is in answer2, replace the ith place of "blanks" with the key entered
    document.getElementById("message").innerHTML = blanks.join(" ");
    
     for (var i=0; i<blanks.length; i++){ 
        if (answer2[i] === event.key)
        {
            blanks[i] = event.key;
            document.getElementById("message").innerHTML = blanks.join(" ");               
        }  
     }
    
    // Create a variable called eval to check for "_"s in "blanks". A value of -1 means there are no "_"s 
     var eval = blanks.indexOf("_");
    //  If the value of "eval" is greater than >1
     if (eval > -1){

    // Then assess whether the user has any remaining chances. If they don't they lose.
 
        if (chances <1 ) {
            losses = losses + 1
            document.getElementById("loss").innerHTML = "You Lose! " + "The word was: " + answer1;
            document.getElementById("losses").innerHTML = "Total Losses: " + losses;

    // Tried below code to reset game and all variables. Code interferes with initial set up of the game. 
    // I wasn't able to figure out the problem.
            // var guessed = [];
            // var chances = 15;
            // var blanks = [];

            // var answer1 = cats[Math.floor(Math.random()*cats.length)];
            // console.log(answer1);
            // var answer2 = [];
            // answer2 =  answer1.split("");
            // console.log(answer2);

        } else {

            // If they do have remaining chances the below is executed

            // Record the value of the key pressed into a temporary variable called "letter" and push it 
            // into the "guessed" array of guessed letters
                var letter = event.key.toLowerCase();
                guessed.push(letter);

            // Display each letter as it is guessed
                document.getElementById("youveguessed").innerHTML = "You've Guessed These Letters: "; 
                document.getElementById("guesses").innerHTML = guessed.join(" ");

            // Subtract 1 from the chance count on each guess, and display the current value of chances.
                chances = chances - 1; 
                document.getElementById("remaining").innerHTML = "You have " + chances + " guesses remaining!";
                } 

    // Close the interior if statement, and enter the "else" portion of the first if statement
    // This portion of the statement should only be reached if there are no remaining blanks and chances
    // have not run out
            } else {
                wins = wins + 1
                document.getElementById("wins").innerHTML = "Total Wins: " + wins + " Press Any Key to Play Again";         
    // Tried below code to reset game and all variables. Code interferes with initial set up of the game. 
    // I wasn't able to figure out the problem.
            // var guessed = [];
            // var chances = 15;
            // var blanks = [];

            // var answer1 = cats[Math.floor(Math.random()*cats.length)];
            // console.log(answer1);
            // var answer2 = [];
            // answer2 =  answer1.split("");
            // console.log(answer2);
            }
    
// TO CLOSE ONKEYUP FUNCTION ---------
}


    
   
