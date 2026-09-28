const requestCar = (drivers=0) => {
  return new Promise((resolve, reject) => {
    if (drivers > 0) {
      return resolve("Seu motorista está a caminho")
    }
    return reject("Não ha motoristas disponiveis")
  })
}
function main() {
  let drivers = 3

  const request = requestCar(drivers)

  request
  .then((text) => {
    console.log("Promessa resolvida ", text)
  })
  .catch((err) => {
    console.log("Promessa rejeitada ", err)
  })
  .finally(() => {
    console.log("Fim do programa")
  })
}
main()

async function init () {
  let drivers = 1

  const request = await requestCar(drivers).catch(() => null)

  if (!request) {
    console.log("erro")
    return 
  }
  console.log(`Resultado: `, request)
}
init()

const getRandom = () => {
  return new Promise(resolve => 
    setTimeout(() => resolve(Math.floor(Math.random() * 30) + 1), 3000)
  )
}
async function setTime() {
  console.log("Iniciando o programa")
  await getRandom()
  .then((value) => {
    console.log(value)
  })
  console.log("Fim do programa")
}
setTime()