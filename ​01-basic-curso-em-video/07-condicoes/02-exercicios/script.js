var saida = document.querySelector("p#saida")
function enviar() {
  var pais = document.querySelector("input#txt")
  //var pais = pais.toReplaceAll(' ',"")
  var pais = pais.value
  if (
    pais.toUpperCase().replaceAll(" ", "") == "BRASIL" ||
    pais.toUpperCase().replaceAll(" ", "") == "BR"
  ) {
    saida.innerHTML = `Voce é do <strong>${pais}</strong>, logo é Brasileiro.`
  } else {
    saida.innerHTML = `Voce é do(a) <strong>${pais}</strong>, logo é estrangeiro`
  }
}
