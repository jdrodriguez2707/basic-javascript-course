// function Car(brand, model, year) {
//   this.brand = brand;
//   this.model = model;
//   this.year = year;
//   this.displayInformation = function () {
//     console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
//   }
// }

class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  displayInformation() {
    console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
  }
}

let numberOfCars = parseInt(prompt("How many cars do you want to add?"));
const cars = [];

for (let i = 0; i < numberOfCars; i++) {
  alert("Enter the information of the car " + (i + 1));
  let brand = prompt("Brand:");
  let model = prompt("Model:");
  let year = parseInt(prompt("Year:"));
  cars.push(new Car(brand, model, year));
}

for (let i = 0; i < cars.length; i++) {
  console.log("Car " + (i + 1) + ":");
  cars[i].displayInformation();
}
