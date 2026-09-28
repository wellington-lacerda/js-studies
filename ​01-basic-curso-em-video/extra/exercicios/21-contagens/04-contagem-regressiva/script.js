const btn = document.querySelector("#btn")
const res = document.querySelector("#res")
btn.addEventListener("click", () => {
    let pas = ""
    res.innerHTML = "<h2>Contagem regressiva de 10 até 1</h2><br>"
    for (let c = 10; c >= 1; c--) {
        if (c != 1) {
            pas = " 👉 "
        }else {
            pas = " 🏁 "
        }
        
        res.innerHTML += `${c}${pas}`
    }
})
