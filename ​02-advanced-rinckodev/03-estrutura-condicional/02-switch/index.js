// 🧐 Estrutura condicional switch

// switch (valor) {
//     case "esperado": {
//         ...
//         break;
//     }
// }

const animal = "gato";

switch (animal) {
    case "gato": {
        console.log("miau");
        break;
    }
    case "galinha": {
        console.log("cocorico");
        break;
    }
    case "cachorro": {
        console.log("au au");
        break;
    }
    default: {
        console.log("Animal não reconhecido");
        break;
    }
}

const stuff = "queijo";

switch (stuff) {
    case "pizza":
    case "bolo":
    case "hamburguer":
    case "pastel": {
        console.log("comida");
        break;
    }
    case "gato":
    case "cachorro":
    case "galinha":
    case "vaca": {
        console.log("animal");
        break;
    }
    default: {
        console.log("item não classificado");
        break;
    }
}
