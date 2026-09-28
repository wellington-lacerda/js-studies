import { text } from "@clack/prompts"

const main = async () => {
  const name = await text({
    message: "Digite seu nome: "
  })
  const age = await text({
    message: `Digite sua idade ${name}: `
  })
  console.log("Fim do programa")
}
main()