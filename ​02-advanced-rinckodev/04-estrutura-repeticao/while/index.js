// Estrutura de repetição while

// while(condição){}

let count = 0;
while (count < 10) {
  console.log(count);
  count++;
}

const x = 20;
let playerX = 0;

while (playerX < x) {
  console.log("🚶".padStart(playerX, "."));
  playerX++;
}

let current;
let times = 0;
const expected = 8;

while (current !== expected) {
  current = Math.floor(Math.random() * (50 + 1));
  console.log(current);
  times++;
}

console.log(times);

let Count = 0;

while (Count <= 20) {
  Count++;

  if (Count % 2 == 0) {
    console.log(Count, "é par");
    continue;
  }

  console.log(Count);
}
