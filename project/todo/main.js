/*
  1. Le pedimos nombre al usuario y le damos la bienvenida al programa.
  2. Mostrarle el menú al usuario. El menú debe contener:
    - Mostrar tareas
    - Agregar tarea
    - Eliminar tareas
    - Salir
  3. Cada tarea debe contener su descripción y si está completada o no.
  4. Si el usuario selecciona la opción de agregar tarea, únicamente se le debe pedir la descripción de la tarea y al final mostrarle un mensaje que la tarea se agregó correctamente.
  5. Si el usuario quiere ver las tareas que ha agregado, se deben mostrar en el orden en el que las agregó
  6. Cuando el usuario vea las tareas, podrá marcarlas como completadas seleccionando el número de la tarea.
  7. Lo mismo hará para eliminar una tarea.
  8. El usuario podrá ver el historial de tareas completadas.
*/

let userName = prompt("¿Cómo te llamas?");
alert(`¡Bienvenido ${userName}!
Con esta app de tareas podrás organizar mejor tu vida.`);

class Task {
  constructor(description) {
    this.description = description;
    this.isCompleted = false;
  }
}

const userTasks = [];
const completedTasks = [];

let option; // Guardar la opción que escoja el usuario

do {
  option = parseInt(
    prompt(`TODO App
      Escribe el número de la opción a la que deseas acceder:
      1. Mostrar tareas
      2. Agregar tarea
      3. Eliminar tareas
      4. Historial
      0. Salir`
    )
  );

  let thereAreTasks = userTasks.length > 0;
  let thereAreCompletedTasks = completedTasks.length > 0;

  switch (option) {
    case 1:
      if (thereAreTasks) {
        let taskNumber = prompt("Lista de tareas:\n" + `${showTasks()}\n` + "Escribe el número de la tarea para marcarla como completada.\n" + "0. Volver");
        completeTask(taskNumber);
      } else {
        alert("No tienes tareas por ahora. ¡Buen trabajo!");
      }
      break;
    case 2:
      let taskDescription = prompt(`Agregar nueva tarea.\n¿Cuál es la tarea?`);
      if (taskDescription) {
        addNewTask(taskDescription);
        alert("Tarea agregada satisfactoriamente✅.");
      } else {
        alert("Por favor, introduce una descripción para la tarea.")
      }
      break;
    case 3:
      if (thereAreTasks) {
        let taskNumber = prompt("Eliminar una tarea:\n" + `${showTasks()}\n` + "Escribe el número de la tarea para eliminarla.\n" + "0. Volver");
        removeTask(taskNumber);
      } else {
        alert("No hay tareas para eliminar.");
      }
      break;
    case 4:
      if (thereAreCompletedTasks) {
        prompt("Tareas completadas:\n" + `${showCompletedTasks()}\n` + "0. Volver");
      } else if (thereAreTasks) {
        alert("Aún no has completado ninguna tarea.");
      } else {
        alert("No has agregado ninguna tarea.");
      }
      break;
    case 0:
      alert("Hasta pronto👋🏻.");
      break;
    default:
      alert("Por favor selecciona una opción correcta.");
  }
} while (option !== 0);

function addNewTask(taskDescription) {
  userTasks.push(new Task(taskDescription));
}

function showTasks() {
  let output = "";

  for (let taskIndex = 0; taskIndex < userTasks.length; taskIndex++) {
    // Mostrar las tareas enumeradas en forma de lista
    output += taskIndex + 1 + ". " + userTasks[taskIndex].description + "\n";
  }

  return output;
}

function completeTask(taskNumber) {
  for (let taskIndex = 0; taskIndex < userTasks.length; taskIndex++) {
    if (taskIndex === taskNumber - 1) {
      userTasks[taskIndex].isCompleted = true;
      completedTasks.unshift(userTasks[taskIndex]);
      userTasks.splice(taskIndex, 1); // Marcar una tarea como completada según el número que introduzca el usuario
      alert("Tarea completada ✅\n\Bien hecho.");
    }
  }
}

function removeTask(taskNumber) {
  for (let taskIndex = 0; taskIndex < userTasks.length; taskIndex++) {
    if (taskIndex === taskNumber - 1) {
      userTasks.splice(taskIndex, 1); // Eliminar una tarea según el número que introduzca el usuario
      alert("Tarea eliminada con éxito ❌.");
    }
  }
}

function showCompletedTasks() {
  let output = "";

  for (let taskIndex = 0; taskIndex < completedTasks.length; taskIndex++) {
    output += completedTasks[taskIndex].description + "✅\n";
  }

  return output;
}
