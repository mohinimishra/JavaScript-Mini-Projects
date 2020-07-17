let output = document.querySelector('.output')
let button = document.querySelector('button')
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const dice = [[5], [1, 9], [1, 5, 9], [1, 3, 7, 9], [1, 3, 5, 7, 9], [1, 3, 4, 6, 7, 9]];
button.addEventListener("click", function () {
    let rolls = [roll(6), roll(6)];
    let temp;
    if (rolls[0] == rolls[1]) { temp = "Draw"; }
    else if (rolls[0] > rolls[1]) { temp = "Player 1 wins"; }
    else { temp = "Player 2 wins"; }
    updateOutput(player1, rolls[0]);
    updateOutput(player2, rolls[1]);
    output.innerHTML = temp;
})
function roll(num) {
    randNumber = parseInt(Math.random() * (num) + 1)
    // let n = 9855 + randNumber;
    // let char = "&#" + n + ";"
    return randNumber
}

function updateOutput(el, num) {
    let holder = builder(num);
    if (el.children[0]) { el.children[0].remove(); }
    el.appendChild(holder);
}

function builder(num) {
    let div = document.createElement("div");
    console.log(num)
    console.log(dice[1])
    let dieArray = dice[num - 1]
    console.log(dieArray);
    for (let x = 1; x < 10; x++) {
        let span = document.createElement("div");
        span.setAttribute("class", "dot");
        if (dieArray.includes(x)) {
            span.classList.add("black");
        }
        div.appendChild(span);
    }
    div.setAttribute("class", "dicer");
    return div;
}