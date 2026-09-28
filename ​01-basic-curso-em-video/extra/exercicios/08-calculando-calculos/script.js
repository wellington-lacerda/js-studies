const btn = document.querySelector("#btn")
const res = document.querySelector("#res")
let num = 0
btn.addEventListener("click", () => {
    num = Number(prompt("Digite um número"))
    let inte = Number.parseInt(num)
    let prox=0,raiz=0,cubi=0,quad=0,cubo=0
    prox = Math.round(num)
    raiz = num**(1/2)
    cubi = num**(1/3)
    quad = num**2
    cubo = num**3
    res.innerHTML = ""
    res.innerHTML += `<p>O número a ser analisado aqui será o <strong>${num}</strong> </p> <br>`
    
    res.innerHTML += `<p>O seu valor absoluto é ${num}</p>`
    res.innerHTML += `<p>A sua parte inteira é ${inte}</p>`
    res.innerHTML += `<p>O valor inteiro mais próximo é o ${prox}</p>`
    res.innerHTML += `<p>A sua raiz quadrada é ${raiz}</p>`
    res.innerHTML += `<p>A sua raiz cúbica é ${cubi}</p>`
    res.innerHTML += `<p>O valor de ${num} ao quadrado é ${quad}</p>`
    res.innerHTML += `<p>O valor de ${num} ao cubo é ${cubo}</p>`
})