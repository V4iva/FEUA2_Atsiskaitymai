const main = document.querySelector('.main')
const input = document.querySelectorAll('input')
const btn = document.querySelector('button')

function getFromStorage () {
    let recipe = JSON.parse(localStorage.getItem('recipes'))
    let allRecipes = []
    allRecipes.push(recipe)
    console.log(allRecipes)

    allRecipes[0].map(item =>{
        console.log(item)
        main.innerHTML += `
        <div class="box2 border d-flex flex-d-column gap">
            <img src="${item.image}" alt="">
            <div>
                <h1>Title: ${item.title}</h1>
                <p>Description: ${item.description}</p>
                <div class="ingredients">Ingredients: </div>
                <h5>Calories: ${item.calories}</h5> 
            </div>
        </div>
    `
    const ingr = document.querySelector('.ingredients')
        item.ingredient.map(item =>{
            ingr.innerHTML +=`
                <div>* ${item}</div>
            `
        })
    })

    btn.onclick = () =>{
        if (input[0].value === item.title){
            allRecipes.filter()
        }
        if (input[1].value === item.calories){
            allRecipes.filter()
        }
        if (input[2].value === item.ingredient){
            allRecipes.filter()
        }
    }

}
getFromStorage()
