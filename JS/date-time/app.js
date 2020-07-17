let mytime = 10;
let output;

if (mytime < 11) {
    output = "Good Morning"
} else if (mytime >= 11 && mytime < 17) {
    output = "Good AfterNoon"
} else if (mytime >= 17 && mytime < 23) {
    output = "Good Evening"
} else {
    output = "Sleeping"
}

console.log(mytime)

console.log(output)