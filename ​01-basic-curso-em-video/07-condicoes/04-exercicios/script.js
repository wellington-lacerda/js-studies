var agora = new Date()
var tempo = agora.getHours()
var caixa = document.querySelector("div#caixa")
var clima = " "
function verHoras(){
    caixa.style.display = "block"
    if (tempo < 12){
        clima = "manhã"
    }else if (tempo < 18){
        clima = "tarde"
    }else{
        clima = "noite"
    }
    caixa.innerHTML = `<h2>São exatamente ${tempo} horas da ${clima}</h2>`

}