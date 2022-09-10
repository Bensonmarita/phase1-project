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
function findMeals(data){
    let searchInput = document.getElementById("search-input").value.trim();



    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`)
        

    .then(resp => resp.json())
    .then(data=>{
        //console.log(data)
        let data1=""
        if(data.meals){
        data.meals.forEach(meal => {
           data1 +=  ` <div data-id="${meal.idMeal}"  class = "meal-item">
                               <div class= "meal-image">
                           
                            <img src="${meal.strMealThumb}" class="img-rounded" id="image"> </div>
                            <div class="meal-name">  
                            <h3> ${meal.strMeal} </h3> 
                               <a class = "recipe-btn">Get Recipe</a>
                               
                               
                               
                               </div>
                           </div>
                               `
           
       })
                      mealContainer.classList.remove('not-found');