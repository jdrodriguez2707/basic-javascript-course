// Definir constantes para las tres elecciones
const stone = "🪨";
const paper = "📃";
const scissors = "✂️";

// Función para iniciar el juego
function playStonePaperOrScissors(choice) {
  if (choice !== stone && choice !== paper && choice !== scissors) {
    console.log("Please, choose between: " + stone + "  " + paper + " or " + scissors);
    return;
  } else {
    console.log("You choose " + choice);
  }

  // Ataque de la cpu
  let cpuChoice = chooseEnemyAttack();
  console.log("CPU choose " + cpuChoice);

  // Condicional para decidir el resultado
  switch (true) {
    case choice === cpuChoice:
      console.log("Tie.");
      break;
    // Se pueden anidar varios case de esta manera
    case choice === stone && cpuChoice === scissors:
    case choice === paper && cpuChoice === stone:
    case choice === scissors && cpuChoice === paper:
      console.log("You won!");
      break;
    default: 
      console.log("You lose.");
  }

  // switch (choice + cpuChoice) {
  //   case "🪨✂️":
  //   case "📃🪨":
  //   case "✂️📃":
  //     console.log("You won!");
  //     break;
  //   case "🪨🪨":
  //   case "📃📃":
  //   case "✂️✂️":
  //     console.log("Tie.");  
  //     break;
  //   default: 
  //     console.log("You lose.");
  // }
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
