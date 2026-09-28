import chalk from "chalk"
import { intro, text, outro } from "@clack/prompts"

const log = console.log
log(chalk.blue("cor azul"))
log(chalk.bold.red.bgWhite("Erro de sintaxe"))
log(chalk.underline.bgBlue.white("Palavra bonita"))
;(async () => {
  intro(chalk.white.bold("Iniciando programa"))
  const name = await text({ message: "Digite seu nome: " })
  outro(chalk.green.underline(`Prazer em te conhecer ${name}`))
})()