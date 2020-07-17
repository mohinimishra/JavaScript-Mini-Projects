let btn = document.querySelector('button')

function showOutput() {
    let date = new Date()
    let hours = date.getHours()

    let div = document.createElement('div')
    document.body.insertBefore(div, btn)
    let heading = document.createElement('h1')

    if (hours < 12) {
        heading.innerText = "Good Morning! Its morning time"
    } else if (hours >= 12 && hours < 17) {
        heading.innerText = "Good AfterNoon! its afternoon"
    } else if (hours >= 17 && hours <= 22) {
        heading.innerText = "Good Evening!"
    } else {
        heading.innerText = "GOOD Night ! Its bed time"

    }

    div.appendChild(heading)
    heading.setAttribute('style', "width: 200px;height: 100px;color: white;text - align: center;background - color: black;padding: 20px;margin - left: 40rem; ")

}

btn.addEventListener('click', showOutput)