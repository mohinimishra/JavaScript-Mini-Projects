let input = document.querySelector('input');
let output = document.querySelector('.output')
let btn = document.querySelector('button')

btn.addEventListener('click', function () {
    let value = (input.value).toUpperCase()
    let heading = document.createElement('h1')
    heading.innerText = `Welcome! to My page ${value}`
    output.appendChild(heading)
})