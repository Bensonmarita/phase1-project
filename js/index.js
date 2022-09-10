let form = document.querySelector("form")
let searchBtn = document.getElementById("btn-search")
let mealContainer = document.querySelector("#meals-container")
let mealContent = document.getElementById("content")
let searchRecipe = document.getElementById("recipe-up-btn")
let searchMeals = document.getElementById("recipe-btn")
let mealResult = document.getElementById("results")
let countLikes = document.getElementById("like-count")
let likeButton = document.getElementById("like-button")



document.addEventListener("DOMContentLoaded",() =>{ form.addEventListener("submit",(e)=>{
    
    e.preventDefault();
       const value = e.target.querySelector('input').value;
       findMeals();
   
})
   searchBtn.addEventListener("click", findMeals)
   mealContainer.addEventListener('click',getRecipe)
   searchRecipe.addEventListener("click",(e) => {
   mealContent.parentElement.classList.remove('showRecipe');
})
likeButton.addEventListener('click', () => {
   // alert(4)
 let integer = 0;
 integer += 1
 countLikes.innerHTML = `${integer} likes`;
 //getRecipeMeals()
 
 

})

})