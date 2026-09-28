// 🧸 Objetos

const player = {
  inventory: {
    items: [
      {
        name: "sword",
        durability: 160,
        enchantments: [
          { name: "sharpness", level: 2 },
          { name: "unbreakble", level: 3 },
        ]
      },
      {
        name: "shield",
        durability: 300,
      }
    ],
    potions: [
      { type: "regeneration", duration: 12 },
      { type: "defense", duration: 30 },
    ]
  }
}

console.log(player.inventory.potions[0].type)

/*

const rl = require("node:readline");

const prompt = rl.createInterface({
  input: process.stdin,
  output: process.stdout
})

prompt.question()
prompt.close()

*/