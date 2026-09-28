// 🧸 Objetos

const player = {
  nickname: "Juliano",
  health: 20,
  isDead: false,
  present(){
    console.log("Meu nick é", this.nickname)
  }
}

player.present()

console.log(player["nickname"])

for(const prop in player){
  console.log(prop);
}

const computer = {
  motherboard: "B360M",
  videoCard: "RTX 2070",
  cpu: "Intel i7 8700",
  font: {
    name: "XPG Core Reactor",
    watts: 800
  },
  case:{
    name: "Draco GameMax",
    color: "black"
  },
  ram: [
    {
      name: "HyperX",
      size: 16000
    },
    {
      name: "HyperX",
      size: 16000
    }
  ]
}

console.log("Informações do computador")
console.log("Placa mãe:", computer.motherboard);
console.log("Placa de vídeo:", computer.videoCard);
console.log("Processador:", computer.cpu);
console.log("Fonte:", computer.font.name, computer.font.watts, "Watts");
console.log("Gabinete:", computer.case.name, "Cor:", computer.case.color);
console.log("Memoria ram: ")
for(const ram of computer.ram){
  console.log(ram.name, ram.size, "MBs")
}