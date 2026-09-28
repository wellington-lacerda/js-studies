const btn = document.querySelector("#btn")
const res = document.querySelector("#res")
btn.addEventListener("click", () => {
    let data = new Date()
    let anoAtual = data.getFullYear()
    let nasc = Number(prompt("Em que ano voce nasceu"))
    let idade = anoAtual - nasc
    res.innerHTML = `<p>Quem nasceu em ${nasc} vai completar <strong>${idade}</strong> anos em ${anoAtual}</p>`
})