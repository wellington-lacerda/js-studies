const btn = document.querySelectorAll(".btn")
const res = document.querySelector("#res")

btn[0].addEventListener("click", () => {
    res.innerHTML += "<p class='btn1'>Clicou no primeiro botão</p>"
})
btn[1].addEventListener("click", () => {
    res.innerHTML += "<p class='btn2'>Clicou no segundo botão</p>"
})
btn[2].addEventListener("click", () => {
    res.innerHTML += "<p class='btn3'>Clicou no terceiro botão</p>"
})
btn[3].addEventListener("click", () => {
    res.innerHTML += "<p class='btn4'>Clicou no quarto botão</p>"
})