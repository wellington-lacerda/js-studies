const btn = document.querySelector("#btn")
const res = document.querySelector("#res")
const vf = document.querySelector("#ifim")
btn.addEventListener("click", () => {
    if (vf.value.length == 0) {
        alert("preencha os dados")
    }else {
    let fim = Number(vf.value)
    let pas = ""
    res.innerHTML = `<h2>Contando de 0 ate ${fim}</h2>`
    for (let c = 0; c <= fim; c++) {
        if (c != fim) {
            pas = " 👉 "
        }else {
            pas = " 🏁 "
        }
        
        res.innerHTML += `${c}${pas}`
    }
    }
    vf.value = ""
    vf.focus()
})
