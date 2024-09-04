const quotes = ["Workers of the world, unite!", 
"Religion is the opium of the people.",  
"From each according to his ability, to each according to his needs", 
"Capital is dead labor, which vampirelike, lives only by sucking living labor.", 
"The proletarians have nothing to lose but their chains."]
const btn = document.getElementById("btn")
const quoteElement = document.querySelector(".quote")
let currentIndex = 0;
//functions for changing the colors of the html file
btn.addEventListener("click", () => {
    console.log(document.body) //not required
    quoteElement.textContent = quotes[currentIndex]; 
    currentIndex = (currentIndex + 1) % quotes.length;
})