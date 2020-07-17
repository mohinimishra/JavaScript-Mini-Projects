let btn = document.querySelector('button');
let section = document.querySelector('.section')
let input = document.querySelector('input')

btn.addEventListener('click', function () {
    let value = input.value;
    let tip = (value * 0.15).toFixed(2);
    let h2 = document.createElement('h2')
    h2.innerText = `You should get tip $ ${tip} of $ ${value}`
    section.appendChild(h2)
})