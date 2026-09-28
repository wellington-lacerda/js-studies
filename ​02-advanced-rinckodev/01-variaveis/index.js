 // VAR, LET E CONST

// var -> possui escopo global ou de função.
// Não respeita o escopo de bloco {}.
// Pode ser reatribuída e redeclarada.
// Atualmente, geralmente é melhor usar let ou const.

var name = "Wellington"

{
  var name = "Lacerda"
}

console.log(name) // Lacerda


// let -> possui escopo de bloco.
// Pode ser reatribuída.
// Não pode ser redeclarada no mesmo escopo.

let firstname = "Lacerda"

{
  let firstname = "Silva"
  console.log(firstname) // Silva
}

console.log(firstname) // Lacerda


// const -> possui escopo de bloco.
// Não pode ser reatribuída.
// Não pode ser redeclarada no mesmo escopo.
// Deve receber um valor ao ser declarada.

const PI = 3.14

{
  const PI = 2 // permitido: está em outro bloco
  console.log(PI) // 2
}

console.log(PI) // 3.14


// REATRIBUIÇÃO

let weight = 67
weight = 86 // permitido: let pode ser reatribuída

const square = 4
// quadrado = 8 // ERRO: const não pode ser reatribuída


// ATENÇÃO:
// const não significa que o conteúdo é completamente imutável.
// Objetos e arrays podem ter seus conteúdos modificados.

const person = {
  name: "Wellington"
}

person.name = "Lacerda" // permitido

// pessoa = {} // ERRO: não pode reatribuir a variável


// RESUMO:
//
// var   -> escopo global/função, pode reatribuir e redeclarar
// let   -> escopo de bloco, pode reatribuir
// const -> escopo de bloco, não pode reatribuir
//
// Regra prática:
// const -> use por padrão
// let   -> use quando precisar reatribuir
// var   -> geralmente evite