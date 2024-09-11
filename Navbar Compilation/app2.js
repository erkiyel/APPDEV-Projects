const colors = ["green", "red", "rgba(133, 122, 200)", "#f15025"]
const btn = document.getElementById("btn")
const color = document.querySelector(".color")
//functions for changing the colors of the html file
btn.addEventListener("click", () => {
    console.log(document.body) //not required
    //getting a random number
    const randomNumber = getRandomNumber()
    //referencing the background color of the document body
    document.body.style.backgroundColor = colors[randomNumber]
    //change the text for our span tag
    color.textContent = colors[randomNumber]
})
getRandomNumber = () => {
    return Math.floor(Math.random () * colors.length)
}