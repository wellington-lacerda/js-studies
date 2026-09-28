const btn = document.querySelector("#btn")
const res = document.querySelector("#res")
btn.addEventListener("click", () => {
    let pas = ""
    res.innerHTML = ""
    for (let c = 1; c <= 10; c++) {
        if (c != 10) {
             pas = " 👉 "
        }else {
            pas = " Fim"
        }
        res.innerHTML += `${c}${pas}`
    }
})