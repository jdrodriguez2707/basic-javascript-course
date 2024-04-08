let students = ["Johan", "Diego", "Cristian", "Steban"];

function greetStudents(student) {
  console.log(`Hi ${student}`);
}

// while (students.length > 0) {
//   console.log(students);
//   let student = students.shift();
//   greetStudents(student);
// }

let counter = 0;

while (counter < students.length) {
  greetStudents(students[counter]);
  counter++;
}