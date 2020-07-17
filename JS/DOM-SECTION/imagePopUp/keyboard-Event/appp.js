let inp = document.querySelector('.sec')

document.addEventListener('keydown', function (e) {
    let li = document.createElement('li')
    let para = document.createElement('p')
    para.innerText = `${e.key} ("${e.keyCode}")`

    li.appendChild(para)
    inp.appendChild(li)
})