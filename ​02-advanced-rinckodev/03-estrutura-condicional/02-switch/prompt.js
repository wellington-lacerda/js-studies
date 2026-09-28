const rl = require("node:readline");

const prompt = rl.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Bem vindo ao programa");
console.log("[1] 📅 Data atual");
console.log("[2] 🕒 Horário atual");
console.log("[3] 🐕 Ver animais");
console.log("[4] 🍕 Ver comidas");
console.log("[5] 💻 Ver Linguagens");
console.log("[0] ❌ Sair");

prompt.question("> Selecione o que deseja fazer ", answer => {
    switch (answer) {
        case "1": {
            const date = new Date();
            const day = date.getDate().toString().padStart(2, "0")
            const month = (date.getMonth() + 1).toString().padStart(2, "0")
            const year = date.getFullYear();
            
            console.log(`Hoje é ${day}/${month}/${year}`);
            break;
        }
        case "2": {
            const date = new Date();
            const hours = date.getHours().toString().padStart(2, "0")
            const minutes = date.getMinutes().toString().padStart(2, "0")
            const seconds = date.getSeconds().toString().padStart(2, "0")
            console.log(`Agora são ${hours}:${minutes}:${seconds}`);
            break;
        }
        case "3": {
            const animais = ["Cachorro", "Gato", "Papagaio", "Tubarão"];
            console.log("Lista de animais:", animais.join(", "));
            break;
        }
        case "4": {
            const comidas = ["Pizza", "Hambúrguer", "Lasanha", "Sushi"];
            console.log("Lista de comidas:", comidas.join(", "));
            break;
        }
        case "5": {
            const linguagens = ["JavaScript", "Python", "Java", "C++", "TypeScript"];
            console.log("Lista de linguagens:", linguagens.join(", "));
            break;
        }
        case "0": {
            console.log("Saindo do programa... Até logo!");
            prompt.close();
            return;
        }
        default: {
            console.log("Opção inválida!");
            break;
        }
    }

    prompt.close();
});
