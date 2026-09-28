// estrutura condicional if

// if (expressão) {}

const temperature = 30

if (temperature >= 30) {
  console.log("Esta muito quente la fora")
}else {
  console.log("A temperatura está agradavel")
}

const grade = 7.5

if (grade >= 9) {
  console.log("Aprovado")
}else if (grade >= 7) {
  console.log("Aprovado na media")
}else {
  console.log("Reprovado estude mais na proxima")
}

const sideA = 3
const sideB = 4
const sideC = 5

if (sideA === sideB && sideB === sideC) {
  console.log("O triangulo é equilátero")
}else if (sideA === sideB || sideB || sideB === sideC || sideC === sideA) {
  console.log("O triangulo é isoscele")
}else {
  console.log("O tringulo é escaleno")
}

const performance = "ótimo";
const baseSalary = 50000;
let bonus = 0;

if (performance === "ótimo") {
    bonus = baseSalary * 0.2;
} else if (performance === "muito bom") {
    bonus = baseSalary * 0.15;
} else if (performance === "bom") {
    bonus = baseSalary * 0.1;
} else if (performance === "regular") {
    bonus = baseSalary * 0.05;
} else {
    console.log("Desempenho não reconhecido. Sem bônus.");
}
