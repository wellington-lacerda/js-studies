// 🛠️ Funções

// function identificador(){}

function greet(name){
    console.log("Seja bem vindo(a)", name)
}
greet("Wellington")

function Sum(a, b){
    return a + b;
}

const Result = Sum(2, 3);

console.log(Result);
  
((name) => {
    console.log("Seja bem vindo(a)", name)
})("Wellington")

function factorial(number){
    let result = 1;
    for(let i = 1; i <= number; i++){
        result *= i;
    }
    return result;
}

console.log(factorial(5))

const sum = (a, b) => {
    return a + b;
}

const result = sum(6, 3);
console.log(result);

function greet(name, log=false){
    const text = `Seja bem vindo(a) ${name}`;
    if (log){
        console.log(text);
        return;
    }
    return text;
}

const text = greet("Wellington");
console.log(text);

function pow(number, exponent=2){
    return number ** exponent;
}

console.log(pow(5, 4))

function createTag(name, prefix, suffix){
    if (prefix && suffix){
        return `${prefix} ${name} ${suffix}`
    }
    if (prefix){
        return `${prefix} ${name}`
    }
    return name;
}

const tag = createTag("Wellington", "[Desenvolvedor]", "Dev");
console.log(tag)