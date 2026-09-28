const btn = document.querySelector("#btn")
const res = document.querySelector("#res")
btn.addEventListener("click", () => {
    let num = Number(prompt("Digite um número para calcular"))
    let dobro = num * 2
    let meta = num / 2
    res.innerHTML = `O dobro de ${num} é ${dobro} e a metade ${meta}`
})