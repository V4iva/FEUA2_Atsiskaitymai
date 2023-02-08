const main = document.querySelector('.main')
const input = document.querySelectorAll('input')
const btn = document.querySelector('button')

let allRecipes = []

function getFromStorage () {
    allRecipes = JSON.parse(localStorage.getItem('recipes'))
    recipesAll (allRecipes)
}
getFromStorage()
function recipesAll (data){
    console.log(allRecipes)
    data.map(item =>{
        main.innerHTML += `
        <div id="${item.id}" class="box2 border d-flex flex-d-column gap">
            <img src="${item.image}" alt="">
            <div>
                <h1>Title: ${item.title}</h1>
                <p>Description: ${item.description}</p>
                <div class="ingredients">Ingredients: </div>
                <div>*${item.ingredient.join("<br>*")}</div>
                <h5>Calories: ${item.calories}</h5> 
            </div>
        </div>
        `
    })
}
function filter (){
btn.onclick = (item) =>{
        console.log(item)
        if (input[0].value === item.title || input[1].value === item.calories || input[2].value === item.ingredient){
            allRecipes.filter(rec => rec.title === input[0].value)
        }
        if (input[1].value === item.calories){
            allRecipes.find(rec => rec.calories === input[1].value)
        }
        if (input[2].value === item.ingredient){
            allRecipes.find(rec => rec.ingredient === input[2].value)
        }
    }

}

