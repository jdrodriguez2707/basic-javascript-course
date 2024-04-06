// Definir constantes para las tres elecciones
const stone = "🪨";
const paper = "📃";
const scissors = "✂️";

// Función para iniciar el juego
function playStonePaperOrScissors(attack) {
  // Ataque de la cpu
  let cpuChoice = chooseEnemyAttack();

  // Condicionales para decidir el resultado
  if (
    (attack === stone && cpuChoice === scissors) ||
    (attack === paper && cpuChoice === stone) ||
    (attack === scissors && cpuChoice === paper)
  ) {
    console.log("You won!");
  } else if (attack === cpuChoice) {
    console.log("Tie.");
  } else {
    console.log("You lose.");
  }
}

// Función para obtener un ataque de la cpu
function chooseEnemyAttack() {
  // Obtener número aleatorio entre 1 y 3 para elegir un ataque al azar para la cpu
  let cpuAttack = getRandomNumber(1, 3);

  // Condicionales para obtener ataque aleatorio de la cpu
  if (cpuAttack === 1) {
    cpuAttack = stone;
  } else if (cpuAttack === 2) {
    cpuAttack = paper;
  } else {
    cpuAttack = scissors;
  }

  return cpuAttack;
}

// Función especial para obtener un número aleatorio
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
  // Math.floor nos permite redondear un número hacia el suelo, por ejemplo: Math.floor(1.9) -> 1
  // Math.random nos devuelve un número aleatorio entre 0 y 1
  // Las operaciones que se hacen después son para poder obtener un número aleatorio personalizado, definiendo el mínimo y el máximo
}

playStonePaperOrScissors("🪨");
