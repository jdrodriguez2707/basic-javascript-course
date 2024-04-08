let myCar = {
  brand: "Mazda",
  model: "CX30",
  year: 2022,
  displayModel: function () {
    console.log(`Car ${this.model} ${this.year}`);
  }
};

console.log(myCar.brand);
console.log(myCar["model"]);
myCar.displayModel();
myCar["displayModel"]();
// myCar.color = "gray";
myCar["color"] = "gray";
console.log(myCar);
delete myCar.brand;
console.log(myCar);
