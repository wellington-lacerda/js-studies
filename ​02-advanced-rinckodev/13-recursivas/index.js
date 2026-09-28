// funções recursivas 

function countDown(num=0) {
  console.log(num)
  if (num <= 0) return 
  countDown(num -1)
}
countDown(5) 

function sum(number, result=0) {
  if (number <= 0) {
    return result
  }
  return sum(number - 1, result + number)
}
console.log(sum(5))

function fat(num, result = 1) {
  if (num <= 0) {
    return result
  }
  return fat(num -1, result * num)
}
console.log(fat(5))