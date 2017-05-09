import { getToppings, getRandomRecipe, checkBurger } from './burger';
// STATE
let state = {
    burger: [],
    recipe: [],
    timer: null
};
// TOPPINGS LIST
let toppingsList = document.querySelector('.toppings');
getToppings()
    .then(toppings => 
        toppings.map(topping => 
            `<button class="btn">${ topping.name }</button>`
        )
    )
    .then(buttons => buttons.join(''))
    .then(buttons => toppingsList.innerHTML += buttons);
toppingsList.addEventListener('click', evt => {
    if (evt.target.tagName !== 'BUTTON') return;
    let topping = evt.target.innerText;
    state.burger.push(topping);
    burger.innerHTML = `<li>${ topping }</li>${ burger.innerHTML }`;
    let res = checkBurger(state.burger, state.recipe);
    if (res !== 'running') {
        state.recipe = [];
        state.burger = [];
        chrono.innerHTML = 20;
        burger.innerHTML = '';
    }
    if (res === 'valid') {
        getRandomRecipe().then(displayRecipe);
    }
    if (res === 'invalid') {
        recipeUl.innerHTML = '';
        btnStart.style.display = 'block';   
        clearInterval(state.timer);
    }
}, false);
// BURGER
let btnStart = document.querySelector('.burger button');
btnStart.addEventListener('click', () => {
    getRandomRecipe().then(displayRecipe);
    btnStart.style.display = 'none';
    chrono.innerHTML = 20;
    state.timer = setInterval(() => {
        if (+chrono.innerHTML === 1) clearInterval(state.timer);
        chrono.innerHTML = +chrono.innerHTML - 1; 
    }, 1000);
}, false);
let burger = document.querySelector('.burger ul');
let chrono = document.querySelector('.burger strong');
// Toppings
let recipeUl = document.querySelector('.recipe ul');
function displayRecipe(recipe) {
    recipeUl.innerHTML = recipe
    .map(topping => `<li>${ topping }</li>`)
    .join('');
    recipe.reverse();
    state.recipe = recipe;
}