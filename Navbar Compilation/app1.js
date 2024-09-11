//
let count = 0
//
const btns = document.querySelectorAll('.btn')
const value = document.querySelector('#value')

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        console.log(e.currentTarget.classList)
        const styles = e.currentTarget.classList

        if(styles.contains('decrease')){
            count--
        }else if(styles.contains('increase')){
            count++
        }else if(styles.contains('inc')){
            count += 5
        }else if(styles.contains('dec')){
            count -= 5
        }else if(styles.contains('random')){
            if(count > 0){
                count = Math.floor(Math.random() * -100)
            }
            else{
                count = Math.floor(Math.random() * 100)
            }
        }else{
            count = 0
        }

        if(count > 0){
            value.style.color="red"
        }else if(count < 0){
            value.style.color="green"
        }else{
            value.style.color="black"
        }
        value.textContent = count
    })
})

getRandomNumber = () => {
    return Math.floor(Math.random() * 100)
}