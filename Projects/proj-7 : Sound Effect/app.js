let sounds = document.querySelectorAll('.sound')
for (let i = 0; i < sounds.length; i++) {
    sounds[i].addEventListener('click', function (e) {
        let sound = e.target.innerHTML
        let lowercaseSound = sound.toLowerCase();
        makeSound(lowercaseSound)
        addStyle(lowercaseSound)
    })
}

function addStyle(name) {
    let activeElement = document.querySelector("." + name)
    activeElement.classList.add("active")
    setTimeout(function () {
        activeElement.classList.remove("active")
    }, 200)
}


function makeSound(name) {
    switch (name) {
        case "fire":
            let sound1 = new Audio('sound/fire.mp3')
            sound1.play()
            break;

        case "swamp":
            let sound2 = new Audio('sound/swamp.mp3')
            sound2.play()
            break;

        case "waves":
            let sound3 = new Audio('sound/waves.mp3')
            sound3.play()
            break;

    }
}