let guessNumber = 10;

function GuessGame() {
    let input = prompt("enter number")

    if ((input > guessNumber) || (input < guessNumber)) {
        console.log("number is not correct")
        GuessGame()
    }
    else {
        console.log("congrats")
    }
}

GuessGame()