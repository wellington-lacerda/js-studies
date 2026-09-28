const btn = document.querySelector("#btn")
const res = document.querySelector("#res")
const reset = document.querySelector("#reset")
let c = 0
res.innerHTML = `O contador estar com ${c} cliques`
btn.addEventListener("click", () => {
    c++
    res.innerHTML = `O contador estar com <mark>${c}</mark> cliques`
})
reset.addEventListener("click", () => {
    c = 0
    res.innerHTML = `O contador estar com ${c} cliques`
})