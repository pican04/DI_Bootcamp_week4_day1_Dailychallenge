                   //MINI PROJECT 

                   //First Part

/*In the JS file, create a function called playTheGame() that takes no parameter.
In the function, start by asking the user if they would like to play the game.
If the answer is false, alert “No problem, Goodbye”.*/
function playTheGame() {
    let playanswer = confirm("Do you want to play the game?");
    // If the answer is false, alert “No problem, Goodbye”.
    if (!playanswer) {
        alert("No problem, goodbye");
        return;
    }



    //Ask the user to enter a number between 0 and 10. You then have to check the validity of the user’s number :
    //create a variable named computerNumber where the value is a random number between 0 and 10
    let numberAnswer = prompt("Enter a number between 0 and 10");
    //If the user didn’t enter a number (ie. if he entered another data type) alert “Sorry Not a number, Goodbye”
    if (isNaN(numberAnswer)) {
        alert("Sorry Not a number, Goodbye");
        return;
    }
    //If the user didn’t enter a number between 0 and 10 alert “Sorry it’s not a good number, Goodbye”.
    if (!isNaN(numberAnswer) && (Number(numberAnswer) < 1 || Number(numberAnswer) > 10)) {
        alert("Sorry it’s not a good number, Goodbye");
        return;
        /* Else (ie. he entered a number between 0 and 10), create a variable named computerNumber where the value is a random number between 0 and 10
         (Hint: Use the built-in Math.random() function). Make sure that the number is rounded.
         */
    } else {
        let computerNumber = (Math.random() * (10 - 0) + 0).toFixed(0);
        compareNumbers(numberAnswer, computerNumber);
    }

               //Second Part
    
    /*Outside of the playTheGame() function, create a new function named compareNumbers(userNumber,computerNumber)
     that takes 2 parameters : userNumber and computerNumber*/
    function compareNumbers(userNumber, computerNumber) {
        let numberOftries = 0;
        //If userNumber is equal to computerNumber, alert “WINNER” and stop the game.

        while (numberOftries < 4) {
            if (userNumber === computerNumber) {
                alert("WINNER")
                return
            }
            /* If userNumber is bigger than computerNumber, alert “Your number is bigger then the computer’s, guess again”
             (Hint: use the built-in prompt() function to ask the user for a new number).*/

            if (Number(userNumber) > Number(computerNumber)) {
                alert("Your number is bigger then the computer’s, guess again");
            }
            /* If userNumber is lower than computerNumber, alert “Your number is smaller then the computer’s, guess again” 
            (Hint: use the built-in prompt() function to ask the user for a new number). */

            if (Number(userNumber) < Number(computerNumber)) {
                alert("Your number is smaller then the computer’s, guess again");
            }
            //If the user guessed more than 3 times, alert “out of chances” and exit the function.
            if (numberOftries == 3) {
                alert("out of chances");
                break;
            }
            let choiceNumber = prompt("Enter a new number");
            userNumber = Number(choiceNumber);

            numberOftries++;
        }
    }
}