function verificar () {
    let txtano = document.querySelector("input#txtano")
    let data = new Date()
    let ano = data.getFullYear()
    if (txtano.value.length == 0 || Number(txtano.value) > ano){
        alert("![ERRO]! VERIFIQUE NOVAMENTE SEUS DADOS E PREENCHA CORRETAMENTE!!")
    }
    else {
        let sex = document.getElementsByName("radsex")
        let res = document.querySelector("div#res")
        let idade = ano - Number(txtano.value)
        res.style.textAlign = "center"
        res.style.padding = "10px"
        
        let genero = ''
        let img = document.createElement("img")
        img.setAttribute("id","foto")
        img.style.padding = "10px"
        img.style.width = "260px"
        if (sex[0].checked){
            genero = `masculino` 
            if (idade >= 0 && idade <= 10){
                // criança 
                img.src = "imagens/masculino-criança.png"
                res.innerHTML = `garoto criança com ${idade} anos`
            }
            else if (idade <= 17) {
                // adolescente
                img.src = "imagens/masculino-adolescente.png"
                res.innerHTML = `garoto adolescente com ${idade} anos`
            }
            else if(idade <= 35){
                // jovem adulto
                img.src = "imagens/masculino-jovem.png"
                res.innerHTML = `rapaz jovem-adulto com ${idade} anos`
            }
            else if(idade <= 50){
                // adulto
                img.src = "imagens/masculino-adulto.png"
                res.innerHTML = `homem adulto com ${idade} anos`
            }else{
                // idoso
                img.src = "imagens/masculino-idoso.png"
                res.innerHTML = `senhor idoso com ${idade} anos`
            }
        }else if(sex[1].checked){
            genero = `feminino`
            if (idade >= 0 && idade <= 10){
                // criança
                img.src = "imagens/feminino-criança.png"
                res.innerHTML = `garota criança com ${idade} anos`
            }
            else if (idade <= 17) {
                // adolescente
                img.src = "imagens/feminino-adolescente.png"
                res.innerHTML = `garota adolescente com ${idade} anos`
            }
            else if(idade <= 35){
                // jovem adulto
                img.src = "imagens/feminino-jovem.png"
                res.innerHTML = `moça jovem-adulto com ${idade} anos`
            }
            else if(idade <= 50){
                // adulto
                img.src = "imagens/feminino-adulto.png"
                res.innerHTML = `mulher adulta com ${idade} anos`
            }else{
                // idoso
                img.src = "imagens/feminino-idosa.png"
                res.innerHTML = `senhora idosa com ${idade} anos`
            }
        }
        res.appendChild(img)
    }
}
