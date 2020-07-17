let myArray = [];

for (let i = 1; i < 10; i++) {
    let stat = (i % 2) ? true : false

    let temp = { name: `Lesson ${i}, status: ${stat}` }
    myArray.push(temp)
}
let result = myArray.filter(function (ele) {
    return ele.status
})

console.log(myArray)
console.log(result)

