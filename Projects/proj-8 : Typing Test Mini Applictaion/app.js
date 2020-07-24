let btn = document.querySelector('button')
let textArea = document.querySelector('textarea')
let msg = document.querySelector('.message')
let words = ["hii i am mohini", "i want to be a developer", "hello", "coding"]
let startTime, endTime;

btn.addEventListener('click', function () {
    if (btn.innerText == "Start") {
        this.innerText = "Done"
        textArea.disabled = false
        playGame()
    }
    else if (btn.innerText == "Done") {
        this.innerText = "Start"
        textArea.disabled = true
        endGame()
    }
})

function playGame() {
    let randomNum = parseInt(Math.random() * words.length)
    let textMsg = words[randomNum]
    msg.innerText = textMsg
    let date = new Date()
    startTime = date.getTime()
    btn.innerText = "Done"
}

function endGame() {
    let date = new Date()
    endTime = date.getTime()
    let totalTime = ((endTime - startTime) / 1000)
    let str = textArea.value
    let wordCount = wordCounter(str)
    let speed = Math.round((wordCount / totalTime) * 60)
    let finalMessage = "You typed a " + speed + " words per minute.";
    finalMessage += "<br>" + compareWords(msg.innerText, str);
    msg.innerHTML = finalMessage
}

function wordCounter(word) {
    let response = word.split("").length
    return response
}

function compareWords(str1, str2) {
    let word1 = str1.split('')
    let word2 = str2.split('')
    let count = 0
    word1.forEach(function (item, index) {
        if (item == word2[index]) {
            count++
        }
    })
    return (count + " correct out of " + word1.length)
}