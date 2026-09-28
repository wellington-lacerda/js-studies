import { readFile } from "node:fs/promises"

async function main() {
  try {
    const file = await readFile("./index.js")
    console.log(file.toString())
  } catch (error) {
    console.log(error)
  } finally {
    console.log("Fim do programa")
  }
}
main()

function upper(text) {
  if (typeof(text) !== "string") {
    throw new Error("O valor não é uma string")
  }
  return text.toUpperCase()
}

try {
  console.log(upper("Wellington"))
} catch (err) {
  console.log("[erro]: " + err)
}