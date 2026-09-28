const btn = document.querySelector("#btn")
const res = document.querySelector("#res")
btn.addEventListener("click", () => {
    let n1 = Number(prompt("Digite um número para calcular"))
    let n2 = Number(prompt("Digite outro número para calcular"))
    let soma = n1 + n2
    res.innerHTML = `A soma entre <mark>${n1}</mark> e <mark>${n2}</mark> é <strong>${soma}</strong>`
})