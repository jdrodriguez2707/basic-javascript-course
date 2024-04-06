let fruits = ["Apple", "Banana", "Cherry", "Strawberry"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[2]);

let anotherFruit = fruits.push("Grape");
console.log(anotherFruit);
console.log(fruits);

let removeFruit = fruits.pop();
console.log(removeFruit);
console.log(fruits);

let newFruit = fruits.unshift("Grape");
console.log(newFruit);
console.log(fruits);

let removeNewFruit = fruits.shift();
console.log(removeNewFruit);
console.log(fruits);

let position = fruits.indexOf("Cherry");
console.log(position);

let numbers = [1, 2, 3, 4, 5];
numbers.push("String");
numbers["negative number"] = -1;
numbers["zero"] = 0;
numbers["boolean"] = true;
console.log(numbers);
console.log(numbers.length);
console.log(Object.keys(numbers).length);

let removeNumber = numbers.splice(3, 1);
console.log(removeNumber);
console.log(numbers);
