const rl = require("node:readline");

const prompt = rl.createInterface({
  input: process.stdin, output: process.stdout
});

function question(query){
  return new Promise((resolve) => {
    prompt.question(query, resolve);
  })
}

async function main(){
  let number;

  do {
    const answer = await question("Digite um número qualquer: ");
    number = Number.parseInt(answer);

    if (Number.isNaN(number)){
      console.log("❌ O que você digitou é inválido!")
    }
  } while(Number.isNaN(number));

  prompt.close();

  console.log(`Você digitou ${number}`);
}

main();
