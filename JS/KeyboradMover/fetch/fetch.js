let bt = document.querySelector('button');

let url = "https://api.chucknorris.io/jokes/random";

function makeFetchCall() {
    fetch(url)
        .then(function (response) {
            return response.json()
        })

        .then(function (data) {
            console.log(data)
            document.querySelector('div').innerText = data.value
        })
}

bt.addEventListener('click', makeFetchCall)