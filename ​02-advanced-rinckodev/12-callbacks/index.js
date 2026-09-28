// callbacks

function exec(name="",callback="") {
  const title = `Funções de callback feita por ${name}`
  console.log("função execultada")
  callback(title)
}

exec("Wellington", (title="") => {
  console.log(title + " Parabéns")
})

const numbers = [10,36,100,150,200,69,390]

const filter = (array, callback) => {
  const filtered = []
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      filtered.push(array[i])
    }
  }
  return filtered
}
console.log(
  filter(numbers, (num=0) => {
  return num > 100
})
)
const names = ["Arcadia","Amanda","Sosia"]
console.log(
  filter(names, (name="") => {
    return name.toLowerCase().startsWith("a")
  })
)
names.forEach(nome => {
  console.log(nome)
})

setTimeout(() => {
  console.log("ola")
}, 5000)

let count = 1
const timer = setInterval(() => {
  console.log(count)
  if (count === 10) {
    clearInterval(timer)
    setTimeout(() => {
      console.log("fim do programa")
    },1000)
    return
  }
  count++
}, 1000)