const preview = document.querySelector('.preview')
const input = document.querySelectorAll('input')
const btn = document.querySelectorAll('button')

let ingredients = []

btn[0].onclick = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res => res.json())
        .then(data =>{
            recipePreview(data)
        })
}
function recipePreview (data){
    preview.innerHTML = `
                <div id="${data.meals[0].idMeal}" class="box d-flex flex-d-column j-spc-btw p10">
                    <div class="d-flex gap">
                        <img class="f-1" src="${data.meals[0].strMealThumb}" alt="">
                        <div class="f-2">
                            <h1 class="title"></h1>
                            <p class="description"></p>
                            <div class="ingredientSection">Ingredients:</div>
                            <h5 class="calories"></h5>
                        </div>
                    </div>
                    <button class="btn">ADD RECIPE TO LIST</button>
                </div>
            `
    const button = document.querySelector('.btn')
    const ingredientSection = document.querySelector('.ingredientSection')

    btn[1].onclick = () =>{
        if (input[1].value.length !== 0){
            ingredients.push(input[1].value)
            if (ingredients.length >= 3){
                ingredients.forEach(item =>{
                    ingredientSection.innerHTML += `
                        <div> * ${item}</div>
                    `
                })
            }
        }
    }

    input[0].onkeyup = function(){
        document.querySelector('.title').innerHTML = `Food title: ${input[0].value}`
    }
    input[2].onkeyup = function(){
        document.querySelector('.description').innerHTML = `Description: ${input[2].value}`
    }
    input[3].onkeyup = function(){
        document.querySelector('.calories').innerHTML = `Calories: ${input[3].value}`
    }

    button.onclick = () => {
        const recipe = {
            id: data.meals[0].idMeal,
            image: data.meals[0].strMealThumb,
            title: input[0].value,
            ingredient: ingredients,
            description: input[2].value,
            calories: input[3].value,
        }

        if (recipe.title.length !== 0 && recipe.ingredient.length !== 0 && recipe.description.length !== 0 && recipe.calories.length !== 0){
            addToLocal(recipe)
            resetInputs()
        } else {
            input[0].style.border = '2px solid red'
            input[1].style.border = '2px solid red'
            input[2].style.border = '2px solid red'
            input[3].style.border = '2px solid red'
        }
    }
}
function addToLocal (recipe){
    let addRecipe = JSON.parse(localStorage.getItem('recipes'))

    if (addRecipe === null)addRecipe= []
    if (addRecipe){
        addRecipe.push(recipe)
        localStorage.setItem('recipes', JSON.stringify(addRecipe))
    }else{
        localStorage.setItem('recipes', JSON.stringify([addRecipe]))
    }
}
function resetInputs () {
    input[0].value = ''
    input[1].value = ''
    input[2].value = ''
    input[3].value = ''
    ingredients = []
    preview.innerHTML = ''
}

