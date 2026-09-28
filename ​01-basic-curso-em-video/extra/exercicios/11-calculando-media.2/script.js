const btn = document.querySelector("#btn")
const res = document.querySelector("#res")
btn.addEventListener("click", () => {
    let aluno = prompt("Qual o nome do aluno:")
    let nota1 = Number(prompt(`Qual a primeira nota de ${aluno}`))
    let nota2 = Number(prompt(`Além de ${nota1} qual foi a outra nota de ${aluno}`))
    let media = (nota1 + nota2) / 2
    let cond = ""
    if (media < 6) {
        cond = `<p id='cond1'>Nota abaixo da média. Estude um pouco mais</p>`
    }
    if (media == 0) {
        cond = `<p id='cond2'>Zerou! A nota mais baixa.</p>`
    }
    if (media == 6) {
        cond = `<p id='cond4'>Mandou bem, ficou na média. Estude para melhorar mais</p>`
    }
    if (media > 6) {
        cond = `<p id='cond5'>Mandou muito bem. Nota acima da média, da proxima vem um 10</p>`
    }
    if (media == 10) {
        cond = `<p id='cond3'>Parabéns, voce tirou a maior nota</p>`
    }
    res.innerHTML = ""
    res.innerHTML += `<p>Calculando a média final de ${aluno}</p>`
    res.innerHTML += `<p>As notas obtidas foram <mark>${nota1} e ${nota2}</mark></p>`
    res.innerHTML += `<p>A média final será <mark>${media}</mark></p>`
    res.innerHTML += `${cond}`
})