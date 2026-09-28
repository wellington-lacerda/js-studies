// Lógicos 

// && E (AND)
// || OU (OR)
// ! NÃO (NOT)

console.log("&& E (AND)")
console.log("sim e não")
console.table([
  ["sim","sim",true],
  ["não","sim",false],
  ["sim","não",false],
  ["não","não",false],
])

console.log("|| OU (OR)")
console.log("sim ou não")
console.table([
  ["sim","sim",true],
  ["não","sim",true],
  ["sim","não",true],
  ["não","não",false],
])

console.log("! NÃO (NOT)")
console.log("□")

const isOpen = false;

console.log(!isOpen);

const takeBath = true
const brushTeeth = false

const isReady = takeBath && brushTeeth
console.log(isReady) // false 

const washDishes = false
const doHomework = true 

const canPlay = washDishes || doHomework
console.log(canPlay) // true 

console.log(
  (takeBath && brushTeeth) && (washDishes || doHomework)
)