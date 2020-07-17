document.addEventListener("keydown", pressKeyOn)
document.addEventListener("keyUp", pressKeyOff)

let input = document.querySelector('input')
input.addEventListener('keypress', additem)

function additem(event) {
    document.querySelector('h1').innerText = input.value;
}


function pressKeyOn(event) {
    console.dir(event.key)
}

function pressKeyOff(event) {
    console.dir(event.key)
}