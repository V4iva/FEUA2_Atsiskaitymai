const main = document.querySelector('.main')
const input = document.querySelectorAll('input')
const btn = document.querySelectorAll('button')

let allRecipes = []
function getFromStorage () {
    allRecipes = JSON.parse(localStorage.getItem('recipes'))
    recipesAll (allRecipes)
}
getFromStorage()
function recipesAll (data){
    data.map(item =>{
        main.innerHTML += `
        <div id="${item.id}" class="box2 border d-flex flex-d-column gap ov-hidden">
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
        filter(item)
    })
}
function filter (item){
    btn[0].onclick = (item) => {
        const values = {
            title: input[0].value,
            calories: input[2].value,
            ingredient: input[1].value
        }
        let result = allRecipes

        if (values.title) result = allRecipes.filter(recipe => recipe.title === values.title)
        if (values.calories) result = allRecipes.filter(recipe => recipe.calories === values.calories)
        // if (values.ingredient) result = allRecipes.ingredient.filter(recipe => recipe.ingredient.includes(values.ingredient))
        if (values.ingredient) result = result.filter(recipe => recipe.ingredient.includes(values.ingredient))

        main.innerHTML = ''
        recipesAll(result)
    }
    btn[1].onclick = (data) =>{
        main.innerHTML = ''
        getFromStorage()
        resetInputs()
    }
}
function resetInputs () {
    input[0].value = ''
    input[1].value = ''
    input[2].value = ''
}





