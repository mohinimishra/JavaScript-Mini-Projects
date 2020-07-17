let output = document.querySelector('.output')
let btn = document.querySelectorAll('button')
let score = [0, 0]

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', coinToss)
}

function coinToss(e) {
    let coinArray = ["Head", "Tail"]
    let computerValue = parseInt(Math.random() * 2)
    let computerToss = coinArray[computerValue]
    let userToss = e.target.innerText
    let heading = document.createElement('h2')
    let message = document.createElement('h3')
    let head = document.createElement('h4')


    if (userToss == computerToss) {
        output.innerHTML = "Players wins!"
        score[0] += 1
    }
    else {
        output.innerHTML = "Computer wins!"
        score[1] += 1
    }
    heading.innerHTML = "Player" + score[0] + " " + "Computer" + score[1];
    message.innerHTML = "Computer Selected" + " " + computerToss + "<br>"
    output.appendChild(heading)
    output.appendChild(message)
    output.appendChild(head)

}