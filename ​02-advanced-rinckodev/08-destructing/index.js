// 🛠️ Desestruturação (Destructuring) em JavaScript

function main() {
  // ==========================================
  // 1. DESESTRUTURAÇÃO BÁSICA DE OBJETOS
  // ==========================================
  const person = {
    name: "Wellington",
    age: 22,
    isProgrammer: true,
  };

  // Extrai propriedades diretamente para variáveis com o mesmo nome
  const { name, age, isProgrammer } = person;
  console.log(name, age, isProgrammer); // Saída: Wellington 22 true

  // ==========================================
  // 2. RENOMEANDO VARIÁVEIS NA DESESTRUTURAÇÃO
  // ==========================================
  // Útil quando a variável já existe ou quando deseja outro nome:
  // 'nickname' do objeto é extraído para a variável 'nick'
  const { name: nick, age: personAge } = person;
  console.log(nick, personAge); // Saída: Wellington 22

  // ==========================================
  // 3. DESESTRUTURAÇÃO BÁSICA DE ARRAYS
  // ==========================================
  const colors = ["verde", "amarelo", "azul", "rosa", "laranja"];

  // Extrai os elementos por posição (índice 0, índice 1, etc.)
  const [firstColor, secondColor] = colors;
  console.log(firstColor); // Saída: verde

  // ==========================================
  // 4. ESTRUTURA COMPLEXA (OBJETO COM ARRAYS E OBJETOS ANINHADOS)
  // ==========================================
  const player = {
    nickname: "Rincko",
    health: 20,
    inventory: {
      items: ["sword", "shield", "bow"],
      potions: [
        { type: "regeneration", duration: 8 },
        { type: "defense", duration: 8 },
      ],
    },
  };

  // ==========================================
  // 5. DESESTRUTURAÇÃO ANINHADA (PASSO A PASSO)
  // ==========================================

  // Extrai a propriedade 'potions' de dentro de 'inventory'
  const {
    inventory: { potions },
  } = player;

  // Extrai o primeiro e o segundo elemento do array 'potions'
  const [firstPotion, secondPotion] = potions;
  console.log(firstPotion); // Saída: { type: 'regeneration', duration: 8 }

  // ==========================================
  // 6. ANINHAMENTO PROFUNDO E RENOMEAÇÃO COMBINADOS
  // ==========================================

  // Extrai propriedades do 1º objeto ({ type, duration })
  // e renomeia as propriedades do 2º objeto ({ type: secondType, duration: secondDuration })
  const [{ type, duration }, { duration: secondDuration, type: secondType }] =
    potions;

  console.log(type, duration); // Saída: regeneration 8
  console.log(secondType, secondDuration); // Saída: defense 8

  // ==========================================
  // 7. DESESTRUTURAÇÃO COMPLETA EM UMA ÚNICA LINHA
  // ==========================================

  // Navega: player -> inventory -> potions -> 1º elemento do array -> extrai 'type' e 'duration'
  const {
    inventory: {
      potions: [{ type: directType, duration: directDuration }],
    },
  } = player;

  console.log(directType, directDuration); // Saída: regeneration 8
}

// Executa a função principal
main();
