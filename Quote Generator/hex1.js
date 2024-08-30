const hex1 = ["Where there is no law, there is no freedom.",  
"All wealth is the product of labor.", 
"No man's knowledge here can go beyond his experience", 
"The end of law is not to abolish or restrain, but to preserve and enlarge freedom.", 
"I have always thought the actions of men the best interpreters of their thoughts."]
const btn = document.getElementById("btn")
//controls the content of span class = color
const quote = document.querySelector(".quote")
//control button events using event listener
btn.addEventListener("click", () =>{
    let hexQuote = hex1[getRandomNumber()]
    quote.textContent = hexQuote
    document.body.style.backgroundColor = hexQuote
})
getRandomNumber = () => {
    return Math.floor(Math.random () * hex1.length)
}