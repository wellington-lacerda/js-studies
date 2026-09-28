const btn = document.querySelector("#btn")
const res = document.querySelector("#res")
btn.addEventListener("click", () => {
    let sistema = new Date()
    res.innerHTML = `O que eu recebi do sistema foi <mark>${sistema}</mark>`
})
