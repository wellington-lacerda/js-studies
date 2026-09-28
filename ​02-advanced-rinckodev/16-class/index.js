// class 
class Person {
  #name
  #age
  #money = 0
  constructor(name="", age=0) {
    this.#name = name,
    this.#age = age
  }
  intro(){
    return `Meu nome é ${this.#name} e tenho ${this.#age} anos`
  }
  getName() {
    return this.#name
  }
  getAge() {
    return this.#age
  }
  getMoney() {
    return this.#money
  }
  setMoney(value) {
    this.#money = value
  }
  incrementMoney(value) {
    this.setMoney(this.#money + value)
  }
}
const person = new Person("Wellington", 23)

person.name = "Fulano" 
console.log(person)
console.log(person.intro())

//person.setMoney(100)
person.incrementMoney(50)
person.incrementMoney(20)
console.log(person.getMoney())

class Games {
  static game = []
  title
  time
  status = "idle"
  constructor(title,time) {
    this.title = title
    this.time = time 
    Games.game.push(this)
  }
  start() {
    this.status = "progress"
  }
  stop() {
    this.status = "ended"
  }
  delete() {
    Games.game = Games.game.filter(game => game.title !== this.title)
  }
}
const parkoo = new Games("parkoo",300)
const puzzle = new Games("puzzle",30)

parkoo.delete()
console.log(Games.game)