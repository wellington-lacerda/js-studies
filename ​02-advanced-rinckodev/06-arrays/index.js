// 📪 Arrays

const numbers = [4, 30, 5, 6, 1, 8]
console.log(numbers[5])

const names = ["Wellington", "Juliano", "Cristiano", "Matheus"];
console.log(names[0])

const myArray = ["Rincko", 1, true, 2, 4, "Juliano", false]

names[1] = "Maria"
console.log(names)

console.log(names.length)

names.push("Maria")
console.log(names)

const lastName = names.pop()
console.log(names)
console.log(lastName)

const firstName = names.shift()
console.log(names)
console.log(firstName)

names.unshift("Nicole")
console.log(names)

// push -> Adicionado um item no final do array
// pop -> Remove um item do final do array

// shift -> Remove um item do início do array
// unshift -> Adiciona um item no inicio do array
