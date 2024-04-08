let students = ["Johan", "Diego", "Cristian", "Steban"];

function greetStudents(student) {
  console.log(`Hi ${student}`);
}

// for (let i = 0; i < students.length; i++) {
//   greetStudents(students[i]);
// }

// for (let student of students) {
//   greetStudents(student);
// }

students.forEach((student) => {
  greetStudents(student);
});

let numbers = [5, 4, 3, 2, 1];

// ❌ No cambia el array original
for (let number of numbers) {
  number *= 2;
}

console.log(numbers); // [5, 4, 3, 2, 1]

// ✅ Cambia el array original
for (let i = 0; i < numbers.length; i++) {
  numbers[i] *= 2;
}

console.log(numbers); // [ 10, 8, 6, 4, 2 ]
