const btn = document.querySelector("#btn")
const res = document.querySelector("#res")
let num = Math.floor(Math.random() * 100) + 1
btn.addEventListener("click", () => {
    let palpite = Number(prompt("qual seu palpite"))
    let s = ""
    if (palpite > num) {
        s = `voce digitou o número ${palpite}. Meu número é <strong>MENOR</strong>`
    }else if (palpite < num) {
        s = `voce digitou o número ${palpite}. Meu número é <strong>MAIOR</strong>`
    }else {
        s = `<strong>Parabéns</strong>! voce acertou! eu tenho sorteado o valor ${num}`
    }
    res.innerHTML += `<p>${s}</p>`
})