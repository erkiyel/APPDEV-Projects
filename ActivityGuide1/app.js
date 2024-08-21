//This is the component for the first item
btn1 = document.getElementById("btn1")
//for displaying the information
btn1.addEventListener("click", () => {
    //create and initialize our variables
    let name = document.getElementById("name").value
    let address = document.getElementById("address").value
    let telephone = document.getElementById("telephone").value
    let major = document.getElementById("major").value

    let x = `Hello! ${name}, I see that you are from ${address} 
    and you are also pursuing ${major} 
    and you can be contacted using ${telephone}.`
    document.getElementById("output1").innerHTML = x
})

//This is the component for the Second item
btn2 = document.getElementById("btn2")
//for displaying the information
btn2.addEventListener("click", () => {
    //create and initialize our variables
    let userInput = document.getElementById("userInput").value
    let typeCast = parseFloat(userInput)
    let compute = typeCast * 0.23
    let x = `Hello! You have entered the amount ${userInput} 
    and this will get ${compute} of the projected amount 
    of total sales.`
    document.getElementById("output2").innerHTML = x
})

//for displaying the information in item #3
    //create and initialize our variables
    let speed = 60
    let compute1 = speed * 5
    let compute2 = speed * 8
    let compute3 = speed * 12
    let x = `Assuming there are no accidents or delays, <br> 
    the distance that a car travels down the interstate <br>
    with a speed of 60 miles per hour would be the following: <br>
    The distance the car will travel in 5 hours would be ${compute1} <br>
    The distance the car will travel in 8 hours ${compute2} <br>
    The distance the car will travel in 12 hours ${compute2}.`
    document.getElementById("output3").innerHTML = x

//This is the component for the Fourth item
btn3 = document.getElementById("btn3")
//for displaying the information
btn3.addEventListener("click", () => {
    //create and initialize our variables
    let MilesDriven = document.getElementById("MilesDriven").value
    let GallonsUsed = document.getElementById("GallonsUsed").value
    let typeCast1 = parseFloat(MilesDriven)
    let typeCast2 = parseFloat(GallonsUsed)
    let MPG = typeCast1 / typeCast2
    let x = `Hello! You have entered the ${MilesDriven} <br>
    for miles driven and ${GallonsUsed} for gallons of gas used <br>
    and the car's miles-per-gallon will be ${MPG}.`
    document.getElementById("output4").innerHTML = x
})
//This is the component for the Fifth item
btn4 = document.getElementById("btn4")
//for displaying the information
btn4.addEventListener("click", () => {
    //create and initialize our variables
    let Celcius = document.getElementById("Celcius").value
    let typeCastCelcius = parseFloat(Celcius)
    let Convert = 9/5 * typeCastCelcius + 32
    let x = `Hello! You have entered ${Celcius} Celcius <br>
    The convertion to Fahrenheit would be ${Convert}.`
    document.getElementById("output5").innerHTML = x
})