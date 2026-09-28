const btn = document.querySelector("#btn")
const res = document.querySelector("#res")
btn.addEventListener("click", () => {
    let sistema = new Date()
    let dia = sistema.getDate()
    let mes = sistema.getMonth()
    let ano = sistema.getFullYear()
    let semana = sistema.getDay()
    let hora = sistema.getHours()
    let minuto = sistema.getMinutes()
    let segundo = sistema.getSeconds()
    switch (semana) {
        case 0 :
            semana = "Domingo"
            break;
        case 1 :
            semana = "Segunda-feira"
            break;
        case 2 :
            semana = "Terça-feira"
            break;
        case 3 :
            semana = "Quarta-feira"
            break;  
        case 4 :
            semana = "Quinta-feira"
            break;
        case 5 :
            semana = "Sexta-feira"
            break;
        case 6 :
            semana = "Sábado"
            break;
        default:
            semana = "ERRO AO VALIDAR DADOS"
      }
    res.innerHTML = ""
    res.innerHTML += `<p>Dia <mark>${dia}</mark></p>`
    res.innerHTML += `<p>Mes <mark>${mes}</mark></p>`
    res.innerHTML += `<p>Ano <mark>${ano}</mark></p>`
    res.innerHTML += `<p>Dia da semana <mark>${semana}</mark></p>`
    res.innerHTML += `<p>Hora <mark>${hora}</mark></p>`
    res.innerHTML += `<p>Minuto <mark>${minuto}</mark></p>`
    res.innerHTML += `<p>Segundo <mark>${segundo}</mark></p>`
})