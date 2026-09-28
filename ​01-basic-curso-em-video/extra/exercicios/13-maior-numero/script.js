const btn = document.querySelector("#btn")
const res = document.querySelector("#res")
btn.addEventListener("click", () => {
    let n1 = Number(prompt("Digite um número"))
    let n2 = Number(prompt("Digite outro"))
    let maior = 0
    let menor = 0
    if (n1 > n2) {
        maior = n1
        menor = n2
    }else {
        maior = n2
        menor = n1
    }
    res.innerHTML = `Analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, o maior valor é <strong>${maior}</strong> e o menor valor é o <strong>${menor}</strong>`
})