// INITIAL CREATION OF VARIABLES
// ==============================================================================

    // Set the list of possible answers to the game
    var cats = ["tuxedo","calico","persian","siamese","munchkin","sphynx","ragdoll"]
    // Create an empty array to collect the letters guessed
    var guessed = [];
    // Create a variable to count down remaining guesses
    var chances = 15;
    var blanks = [];

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
 
    document.onkeyup = function MyFunction() {

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

console.log(blanks);

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

    // Then assess whether the user has any remaining chances
        if (chances <1 ) {
            document.getElementById("loss").innerHTML = "You Lose!";
        } else {

            // Record the value of the key pressed into a temporary variable called "letter" and push it 
            // into the "guessed" array of guessed letters
                var letter = event.key.toLowerCase();
                guessed.push(letter);

            // Display each letter as it is guessed
                document.getElementById("guesses").innerHTML = "You've Guessed These Letters: " + guessed.join(" ");

            // Subtract 1 from the chance count on each guess, and display the current value of chances.
                chances = chances - 1; 
                document.getElementById("remaining").innerHTML = "You have " + chances + " guesses remaining!";
                } 

    // Close the interior if statement, and enter the "else" portion of the first if statement
    // This portion of the statement should only be reached if there are no remaining blanks and chances
    // have not run out
            } else {
    alert("YOU WIN!!");
        }
    

// TO CLOSE ON KEY FUNCTION ---------
}
    
   
