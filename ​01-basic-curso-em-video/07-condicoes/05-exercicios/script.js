var dia = new Date()
var diasen = dia.getDay()
var cdata = document.querySelector("h2#Cdata")

switch(diasen){
    case 0:
        console.log("Domingo")
        cdata.innerText = "Domingo"
        break
    case 1:
        console.log("Segunda")
        cdata.innerText = "Segunda"
        break
    case 2:
        console.log("Terça")
        cdata.innerText = "Terça"
        break
    case 3:
        console.log("quarta")
        cdata.innerText = "Quarta"
        break
    case 4:
        console.log("quinta")
        cdata.innerText = "Quinta"
        break
    case 5:
        console.log("sexta")
        cdata.innerText = "Sexta"
        break
    case 6:
        console.log("sabado")
        cdata.innerText = "Sabado"
        break
    default:
        console.log("[ERRO]")
        cdata.innerText = "[ERRO]"
        break
}