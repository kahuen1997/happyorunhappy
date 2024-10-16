const edmond1 = document.getElementById('edmond1')
const miki1 = document.getElementById('miki1')
const edmond2 = document.getElementById('edmond2')
const miki2 = document.getElementById('miki2')
const bouns = document.getElementById('lucky')
const punish = document.getElementById('punish')

let rewardlist = ["A", "B", "C", "D", "E","F","G","H"]
let punishlist = ["1", "2", "3", "4", "5", "6", "7", "8"]

edmond1.addEventListener("click", function(){
    let random = Math.floor(Math.random()*8)
    bouns.textContent = rewardlist[random] 
})

miki1.addEventListener("click", function(){
    let random = Math.floor(Math.random()*8)
    bouns.textContent = rewardlist[random] 
})

edmond2.addEventListener("click", function(){
    let random = Math.floor(Math.random()*8)
    punish.textContent = punishlist[random] 
})

miki2.addEventListener("click", function(){
    let random = Math.floor(Math.random()*8)
    punish.textContent = punishlist[random] 
})



