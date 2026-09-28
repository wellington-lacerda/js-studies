var res = document.querySelector("#res")
let num = document.querySelector("#num")
function enviar() {
  let idade = Number(num.value)
  if (num.value.length === 0 || num.value <= 0) {
    alert("digite uma idade")
    res.innerHTML = "ERRO..."
  } else if (idade < 16) {
    res.innerHTML = `Com <strong>${idade} anos</strong>, não vota`
  } else if (idade < 18 || (idade > 67 && idade <= 150)) {
    res.innerHTML = `Com <strong>${idade} anos</strong>, voto opcional`
  } else if (idade >= 18 && idade <= 67) {
    res.innerHTML = `Com <strong>${idade} anos</strong>, voto obrigatório`
  } else if (idade > 150) {
    res.innerHTML = `<strong>Digite uma idade abaixo de 150 anos! sua mumia</strong>`
  }
}
