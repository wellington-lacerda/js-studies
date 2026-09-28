const btn = document.querySelector("#btn")
const res = document.querySelector("#res")

btn.addEventListener("click", () => {
    let nome = prompt("qual é o seu nome?")
    res.innerHTML = `Hello, ${nome}! nice to meet you! :V`
})