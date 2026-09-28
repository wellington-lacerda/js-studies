const btn = document.querySelector("#btn")
const res = document.querySelector("#res")
btn.addEventListener("click", () => {
    let pas = ""
    let mark = ""
    res.innerHTML = "<h2>Contando de 1 até 10 mcarcando os pares</h2><br>"
    for (let c = 1; c <= 10; c++) {
        if (c != 10) {
            pas = " 👉 "
        }else {
            pas = " 🏁 "
        }
        if (c % 2 == 0) {
            mark = `<mark>${c}</mark>${pas}`
        }else {
            mark = `${c}${pas}`
        }
        res.innerHTML += mark
    }
})
