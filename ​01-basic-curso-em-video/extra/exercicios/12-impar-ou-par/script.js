const btn = document.querySelector("#btn")
const res = document.querySelector("#res")
btn.addEventListener("click", () => {
    let num = Number(prompt("Digite um número"))
    let cond = ""
    if (num % 2 == 0) {
        cond = `<strong>PAR</strong>`
    }else {
        cond = `<strong>IMPAR</strong>`
    }
    res.innerHTML = `<p>O número ${num} é ${cond}</p>`
})