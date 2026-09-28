var res = document.querySelector("div#caixa")
var n1 = document.querySelector("input#n1")


function enviar (){
    var num1 = Number(n1.value)
    res.innerHTML = `Voce está dirigindo a <strong>${num1}Km/h</strong>`
    if (num1 > 60) {
       res.innerHTML += `<p>Voce passou dos 60KM/H <strong>MULTADO</strong></p>`
    }
    if(num1 == " "){
        alert("digite uma velocidade em KM")
        res.innerHTML = " "
    }
}