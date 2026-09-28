const btn = document.querySelector("#btn")
const lim = document.querySelector("#limpar")
const res = document.querySelector("#res")
btn.addEventListener("click", () => {
    let num = Math.floor(Math.random() * 100) + 1
    res.innerHTML += `<p>Acabei de pensar no número <mark>${num}</mak></p>`
})
lim.addEventListener("click", () => {
    res.innerHTML = ""
})