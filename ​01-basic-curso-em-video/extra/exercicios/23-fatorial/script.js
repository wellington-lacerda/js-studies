const res = document.querySelector("#res")
const fat = document.querySelector("#fat")
const form = document.querySelector("#form")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    if (fat.value.length == 0 || fat.value > 21) {
        // caixa vazia
    }else {
        let n = Number(fat.value)
        let r = 1
        res.innerHTML = `Calculando o ${n}! <br>`
        for (let c = n; c >= 1; c--) {
            r *= c
            if (c > 1) {
                res.innerHTML += `${c} × `
            }else {
                res.innerHTML += `${c} = `
            }
        }
        res.innerHTML += `<strong>${r}</strong>`
    }
    fat.value = ""
    fat.focus()
})