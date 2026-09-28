// aritimeticos

//   + adição
//   - subtração
//   * multplicação
//   / divisão
//   % modulo

const sum = 24 + 8
const sub = 36 - 4
const mult = 8 * 2
const div = 100 / 4 
const rest = 10 % 3

console.log(sum,sub,mult,div,rest)

const x = 6
const y = 4
const result = x + y
console.log(result)

const calc = (x * 2) - y 
console.log(calc)

const price = 350
const percentage = 25

const discount = (price * percentage) / 100
const finalPrice = price - discount

console.log("Preço do produto:", price)
console.log("Preço do desconto:", discount)
console.log("Preço final:", finalPrice)

const salary = 1620
console.log("em um mes: " + salary)
console.log("em um ano: " + salary * 12)
console.log("em uma semana: " + salary / 4)
console.log("em um dia: " + (salary / (7 * 4)).toFixed(2))

const seconds = 60 
const minutes = seconds
const hours = minutes * 60 
const day = 24 * hours 
const week = day * 7 
const month = week * 4 
const year = day * 365
console.log(`1 minuto tem ${minutes} segundos`)
console.log(`1 hora tem ${hours} segundos`)
console.log(`1 dia tem ${day} segundos`)
console.log(`1 semana tem ${week} segundos`)
console.log(`1 mes tem ${month} segundos`)
console.log(`1 ano tem ${year} segundos`)