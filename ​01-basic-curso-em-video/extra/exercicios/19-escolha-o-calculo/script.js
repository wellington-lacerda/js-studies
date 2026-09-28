const btn = document.querySelector("#btn")
const res = document.querySelector("#res")
btn.addEventListener("click", () => {
    let n1 = Number(prompt('Primeiro valor'))
    let n2 = Number(prompt('Segundo outro'))
    let opc = Number(prompt(`Valores informados:${n1} e ${n2}\nOque vamos fazer?\n[1] Somar\n[2] Subtrair\n[3] Multplicar\n[4] Dividir`))
    res.innerHTML = ""
    let resul = 0
    if (opc == 1) {
        resul = n1 + n2
        res.innerHTML += "<h2>Calculando</h2>"
        res.innerHTML += `${n1} + ${n2} = ${resul}`
    }else if (opc == 2) {
        resul = n1 - n2
        res.innerHTML += "<h2>Calculando</h2>"
        res.innerHTML += `${n1} - ${n2} = ${resul}`
    }else if (opc == 3) {
        resul = n1 * n2
        res.innerHTML += "<h2>Calculando</h2>"
        res.innerHTML += `${n1} × ${n2} = ${resul}`
    }else if (opc == 4) {
        resul = n1 / n2
        res.innerHTML += "<h2>Calculando</h2>"
        res.innerHTML += `${n1} ÷ ${n2} = ${resul}`
    }else {
        res.innerHTML += "<h2>Calculando</h2>"
        res.innerHTML += `OPÇÃO INVALIDA! voce digitou ${n1} e ${n2}, mas não sei oque fazer com eles`
    }
})