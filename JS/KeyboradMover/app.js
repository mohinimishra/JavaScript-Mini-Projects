let player = {
    speed: 100,
    x: 100,
    y: 100
}

document.addEventListener("DOMContentLoaded", build);
document.addEventListener('keydown', function (e) {
    let key = e.keyCode;
    if (key === 37) {
        player.x -= player.speed;
    }
    if (key === 38) {
        player.y -= player.speed
    }
    if (key === 39) {
        player.x += player.speed;
    }
    if (key === 40) {
        player.y += player.speed
    }

    player.elememt.style.left = player.x + 'px'
    player.elememt.style.top = player.y + 'px'
})

function build() {
    player.elememt = document.createElement('div')
    player.elememt.style.position = "absolute";
    player.elememt.style.width = "100px";
    player.elememt.style.height = "100px";
    player.elememt.style.backgroundColor = "gray";
    player.elememt.style.top = player.x + 'px';
    player.elememt.style.left = player.y + 'px';
    document.body.appendChild(player.elememt)
}


