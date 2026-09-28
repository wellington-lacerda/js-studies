const rl = require("node:readline")

const prompt = rl.createInterface({
  input: process.stdin,
  output: process.stdout
})

let bank = 3000
console.log(`Sua conta tem R$${bank}`)
prompt.question("Digite quanto deseja transferir: ", answer => {
    const amount = Number.parseInt(answer)
    if (Number.isNaN(amount)) {
        console.log("Isso não é um número")
    }else if (amount > bank) {
        console.log("O valor digitado é maior que o total")
    }else if (amount <= 0) {
        console.log("O valor digitado tem q ser positivo")
    }else {
        bank -= amount
        console.log(`voce transferiu R$${amount} sobrou R$${bank}`)
    }
  prompt.close()
})