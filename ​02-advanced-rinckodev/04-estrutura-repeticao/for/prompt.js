const rl = require("node:readline");

const prompt = rl.createInterface({
    input: process.stdin, output: process.stdout
});

prompt.question("Qual número deseja ver a tabuada? ", answer => {
    const number = Number.parseInt(answer);

    if (Number.isNaN(number)){
        console.log("❌ O número digitado é inválido!");
    } else {
        console.log(`A tabuada do ${number} é: `);
        for(let i = 1; i <= 10; i++){
            console.log(`${number} x ${i} = ${i * number}`)
        }
    }
    prompt.close();
});
