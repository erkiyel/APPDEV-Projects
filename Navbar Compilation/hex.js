const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
//#F15025 #AA0123 #ADF000 #
const btn = document.getElementById("btn")
//controls the content of span class = color
const color = document.querySelector(".color")
//control button events using event listener
btn.addEventListener("click", () =>{
    let hexColor = '#'
    for(let i = 0; i < 6; i++){
        //get a random value from our hex values array
        hexColor += hex[getRandomNumber()]
    }
    //
    color.textContent = hexColor
    //
    document.body.style.backgroundColor = hexColor
})
getRandomNumber = () => {
    return Math.floor(Math.random () * hex.length)
}