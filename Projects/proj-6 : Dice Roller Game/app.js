let output = document.querySelector('.output')
let button = document.querySelector('button')
let player = document.querySelector('.player')
let computer = document.querySelector('.computer')

button.addEventListener('click', function () {
    let rolls = [roll(6), roll(6)]

    let temp;
    if (rolls[0] == rolls[1]) { temp = "Game Draw!" }
    else if (rolls[0] > rolls[1]) { temp = "Player Wins!" }
    else { temp = "Computer Wins!" }
    output.innerHTML = temp
    player.innerHTML = `Player: ${rolls[0]}`
    computer.innerHTML = `Computer: ${rolls[1]}`

    function roll(num) {
        randNumber = parseInt(Math.random() * (num) + 1)
        let n = 9855 + randNumber;
        let char = "&#" + n + ";"
        return randNumber + "" + char
    }
})
