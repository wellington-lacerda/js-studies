// Ternário

// (expressão) ? (se verdadeiro) : (se falso) 
const num = 7
console.log(num % 2 === 0 ? 'PAR' : 'IMPAR')

const age = 18
console.log(age >= 18 ? "Maior de idade" : "Menor de idade")

const learnedJS = true
const withRincho = true 
console.log(
  learnedJS && withRincho 
  ? "Aprendeu javaScript com Rincho dev"
  : learnedJS ? "Aprendeu javaScript" 
  : "Não Aprendeu javaScript com Rincho dev"
)

const bank = 300
const tranfer = 20
console.log(
  bank < tranfer 
  ? "A transferencia não pode ser feita"
  : "A transferencia foi concluida"
)
const isAdult = false 
console.log(`Ele ${isAdult ? "não" : ""} é criança`)

const hours = 19
console.log(
  `É de ${
  hours >= 0 && hours <= 5 ? "madrugada" :
  hours >= 6 && hours <= 11 ? "manhã" :
  hours >= 12 && hours <= 17 ? "tarde" :
  "noite"}` 
)