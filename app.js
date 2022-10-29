const increment = document.getElementById('inc')
const decrement = document.getElementById('dec')
const label = document.getElementById('label')


let count = 0

label.innerText = count


 decrement.onclick = () => {
    if (count >= 1) {
        count--
        label.innerText = count
    } 
} 

increment.onclick = () => {
    count++
    label.innerText = count
}