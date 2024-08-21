//This is the component for the Second item
const btn1 = document.getElementById("btn1")
//for displaying the information
btn1.addEventListener("click", () => {
    //create and initialize our variables
    let userInput = document.getElementById("userInput").value

    let x = `Hello! You have entered ${userInput} and this amount of 
    total sales will`
    document.getElementById("output1").innerHTML = x
})