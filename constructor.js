// constructor
function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
}

console.log(Car);

const newCar = new Car("Tesla", "Model 3", 2020);
console.log(newCar);

const car2 = new Car("Mazda", "CX30", 2022);
console.log(car2);