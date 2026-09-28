const btn = document.querySelector("#btn")
const res = document.querySelector("#res")
const tab = document.querySelector("#tab")
btn.addEventListener("click", () => {
    if (tab.value.length == 0) {
        alert("digite um valor na caixa")
    }else {
        let t = Number(tab.value)
        res.innerHTML = `Tabuada de ${t}<br>`
        for (let c = 0; c <= 10; c++) {
            res.innerHTML += `${t} × ${c} = ${t*c}<br>`
        }
    }
    tab.value = ""
    tab.focus()
})
