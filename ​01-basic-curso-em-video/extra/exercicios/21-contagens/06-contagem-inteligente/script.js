const btn = document.querySelector("#btn")
const res = document.querySelector("#res")
const vf = document.querySelector("#ifim")
const vi = document.querySelector("#ini")
btn.addEventListener("click", () => {
    if (vf.value.length == 0 || vi.value.length == 0) {
        alert("preencha os dados")
    }else {
    let f = Number(vf.value)
    let i = Number(vi.value)
    let pas = ""
    res.innerHTML = `<h2>Contando de ${i} ate ${f}</h2>`
        if (f > i) {
           for (let c = i; i <= f; i++) {
               if (i != f) {
                   pas = " 👉 "
               }else {
                   pas = " 🏁 "
               }
               res.innerHTML += `${i}${pas}`
           }
        }else if (i > f) {
            for (let c = i; i >= f; i--) {
               if (i != f) {
                   pas = " 👉 "
               }else {
                   pas = " 🏁 "
               }
               res.innerHTML += `${i}${pas}`
            }
        }
    }
    vf.value = ""
    vi.value = ""
})
