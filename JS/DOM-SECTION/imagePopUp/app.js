let image = document.querySelectorAll('img');

for (i = 0; i < image.length; i++) {
    image[i].addEventListener('click', function () {
        console.log(this.src)
        window.open(this.src, "resizable= yes, width=500")
    })
}