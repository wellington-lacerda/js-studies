const btn = document.querySelector("#btn")
const res = document.querySelector("#res")
btn.addEventListener("click", () => {
    let nome = prompt("Qual nome do seu aluno")
    let nota1 = Number(prompt(`Qual a primeira nota do aluno ${nome}?`))
    let nota2 = Number(prompt("E qual foi a segunda nota?"))
    let media = (nota1 + nota2) / 2
    res.innerHTML = ""
    res.innerHTML += `Calculando a média final de <mark>${nome}</mark> <br>` 
    res.innerHTML += `As notas obtidas foram <mark>${nota1} e ${nota2}</mark> <br>`
    res.innerHTML += `A média final será <mark>${media}</mark>`
})