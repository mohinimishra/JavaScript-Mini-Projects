let input = document.querySelector('input')
let button = document.querySelector('button')
let form = document.querySelector('.form')

button.addEventListener('click', function () {
    let value = input.value;
    console.log(value)
    let list = document.createElement('li');
    list.innerText = value;
    form.appendChild(list)

})