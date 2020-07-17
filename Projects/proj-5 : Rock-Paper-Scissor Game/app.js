let output = document.querySelector('.output')
let buttons = document.querySelectorAll('button')
let message = document.createElement('h2')
let guessInfo = document.createElement('p')


for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', game)
}

function game(e) {

    let gameArray = ["Rock", "Paper", "Scissor"]
    let score = [0, 0]
    let randomNumber = parseInt(Math.random() * (3 - 0) + 0)
    let computerGuess = gameArray[randomNumber]
    let PlayerGuess = e.target.innerText


    guessInfo.innerText = `Computer Guess is: ${computerGuess}, Player Guess is : ${PlayerGuess}`


    if (computerGuess == gameArray[0] && (PlayerGuess == gameArray[2])) {
        message.innerHTML = "Computer Wins!"

    }
    else if (PlayerGuess == gameArray[0] && (computerGuess == gameArray[2])) {
        message.innerHTML = "Player Wins!"

    }

    else if (computerGuess == gameArray[1] && (PlayerGuess[0] || PlayerGuess[2])) {
        message.innerHTML = "Computer Wins!"

    }
    else if (PlayerGuess == gameArray[1] && (computerGuess[0] || computerGuess[2])) {
        message.innerHTML = "Player Wins!"

    }
    else {
        message.innerHTML = "Tie"
    }

    output.appendChild(guessInfo)
    output.appendChild(message)



}