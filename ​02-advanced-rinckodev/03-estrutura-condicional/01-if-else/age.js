const rl = require("node:readline")

const prompt = rl.createInterface({
  input: process.stdin,
  output: process.stdout
})
prompt.question("Digite sua idade: ", answer => {
  const age = Number.parseInt(answer)
  if (Number.isNaN(age)) {
    console.log("[erro] Oque voce digitou não é um número válido")
  }else {
    console.log(`Sua idade é de ${age} anos daqui a 4 anos terá ${age + 4} anos`)
  }
  prompt.close()
})