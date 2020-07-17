let myArr = [2, 6, 2, 4, 5];

let mapArray = myArr.map(function (ele, i) {
    console.log(ele)
    return ele * 50
})

console.log(mapArray)