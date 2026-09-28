// estrurura de repetição for 

// for(inicialização, condição, execução){}

const fruits = ["maçã", "banana", "laranja", "uva"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for(let i = 0; i <= 10; i++){
    setTimeout(() => console.log(i), 2000 * i);
}

// Contagem de caracteres em string com for...of
const text = "Se inscreva no canal do youtube: Rincko Dev";
const letter = "e";
let times = 0;
for(const char of text.toLowerCase()){
    if (char === letter) times++;
}
console.log(`A letra (${letter}) se repete ${times} vezes`);