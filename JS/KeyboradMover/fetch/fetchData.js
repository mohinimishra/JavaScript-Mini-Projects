let output = document.querySelector('div')
let btn = document.querySelector('button')

let url = "https://jsonplaceholder.typicode.com/todos"

function getData() {
    fetch(url)
        .then(function (res) {
            return res.json()
        })
        .then(function (data) {
            console.log(data)
        })
    for (let i = 0; i < data.length; i++) {
        let div = document.createElement('div')
        if (data[i].completed) {
            div.style.color = "green"
        } else {
            div.style.color = "red"
        }
        div.innerText = `${data[i].id} . ${data[i].title}`
        output.appendChild(div)
    }
}

btn.addEventListener('click', getData)