let arr = ["hello", "mohini", { name: "mm", age: 24 }, ["hiii", "bye"]];

function randomArr(arr) {
    let random = parseInt(Math.random() * arr.length)
    return arr[random]
}

console.log(randomArr(arr))