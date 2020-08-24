let btn = document.querySelector('.btn');
let mealImg = document.querySelector('.mealImg')
let mealHead = document.querySelector('.mealHeading')
let meal = document.querySelector('.mealArea')
let categary = document.querySelector('.categary')
let video = document.querySelector('.video')


function Image(url) {
    let img = document.createElement('img');
    img.setAttribute('src', url);
    mealImg.appendChild(img)
}

function Heading(heading) {
    let h1 = document.createElement('h1')
    h1.innerHTML = heading;
    h1.style.cssText = "letter-space:1.5"
    mealHead.appendChild(h1)
}

function Description(description) {
    let p = document.createElement('p')
    p.innerHTML = description;
    p.style.cssText = "letter-spacing: 1.5px; font-size:18px; word-spacing: 1.5px"
    mealHead.appendChild(p)
}

function Category(category, area, tags) {
    let p = document.createElement('p')
    p.innerHTML = `<b>Categories : </b>  ${category} <br>`;
    p.innerHTML += `<b>Area :</b>       ${area}<br>`
    p.innerHTML += `<b>Tags : </b>      ${tags}`
    categary.appendChild(p)
}

function Ingredient(mealArray) {
    let arr = []
    categary.innerHTML += "<h3>Ingredient</h3>"
    for (let i = 1; i <= 20; i++) {
        let value = `strIngredient${i}`
        let measure = `strMeasure${i}`
        arr.push(mealArray[value])
        arr.push(mealArray[measure])
        if (mealArray[value]) {
            let p = document.createElement('p');
            p.innerHTML += `<b>${mealArray[value]} </b> :  ${mealArray[measure]}`
            categary.appendChild(p)
        }
    }
}
function Video(vedio) {
    video.innerHTML = "<h1>Video Recipe </h1>"
    let videosrc = document.createElement('iframe')
    videosrc.style.height = "315px"
    videosrc.style.width = "800px"
    videosrc.setAttribute('src', `https://www.youtube.com/embed/${vedio.slice(-11)}`)
    video.appendChild(videosrc)
}



async function getAPIdata() {
    let url = 'https://www.themealdb.com/api/json/v1/1/random.php';
    try {
        let respData = await fetch(url);
        let data = await respData.json();
        mealHead.innerHTML = " ";
        mealImg.innerHTML = " ";
        categary.innerHTML = " ";
        let mealArray = data.meals[0];
        let imgUrl = mealArray.strMealThumb;
        let heading = mealArray.strMeal;
        let description = mealArray.strInstructions;
        let category = mealArray.strCategory
        let area = mealArray.strArea
        let tags = mealArray.strTags
        let vedio = mealArray.strYoutube
        console.log(vedio)
        Image(imgUrl)
        Heading(heading)
        Description(description)
        Category(category, area, tags)
        Ingredient(mealArray)
        Video(vedio)

    } catch (error) {
        console.log(error)
    }




    // fetch(url)
    //     .then(function (dt) {
    //         return dt.json()
    //     }).then(function (resp) {
    //         let mealArray = resp.meals

    //     })
    //     .catch(function (err) {
    //         console.log(err)
    //     })
}
btn.addEventListener('click', getAPIdata)
