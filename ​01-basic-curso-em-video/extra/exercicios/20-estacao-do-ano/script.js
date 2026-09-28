const btn = document.querySelector("#btn")
const res = document.querySelector("#res")
btn.addEventListener("click", () => {
    let mesNome = prompt("Digite o mes em extenso (Ex:Junho)").toUpperCase().replaceAll(" ","")
    let estacao = "" 
    if (mesNome == "JANEIRO" || mesNome == "FEVEREIRO" || mesNome == "MARÇO"){
        estacao = "Verão"
    }else if (mesNome === "ABRIL" || mesNome == "MAIO" || mesNome == "JUNHO") {
        estacao = "Outono"
    }else if (mesNome === "JULHO" || mesNome == "AGOSTO" || mesNome == "SETEMBRO") {
        estacao = "Inverno"
    }else if (mesNome === "OUTUBRO" || mesNome == "NOVEMBRO" || mesNome == "DEZEMBRO") {
        estacao = "Primavera"
    }else {
        estacao = "INDEFINIDA"
        mesNome = "-?__?-"
    }
    res.innerHTML = `No mes de ${mesNome}, estamos na estação <mark>${estacao}</mark>`
})