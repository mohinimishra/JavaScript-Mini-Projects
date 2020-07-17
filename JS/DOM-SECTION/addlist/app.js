let input = document.querySelector('input');
let ul = document.querySelector('ul');
let li = document.querySelectorAll('li')

for (let i = 0; i < li.length; i++) {
    li[i].addEventListener('click', myList)
}

function myList() {
    let temp = this.classList.toggle("red")
}