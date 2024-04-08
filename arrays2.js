// "map" is used to transform each element of the array by a specific function, while "filter" is used to select o filter elements of the array based on a specified condition

// function findInexpensiveProducts (product) {
//   return product.price <= 200;
// }

// const products = [
//   { name: "Bicycle", price: 200 },
//   { name: "TV", price: 400 },
//   { name: "Book", price: 30 },
//   { name: "Cellphone", price: 500 },
//   { name: "Laptop", price: 600 },
//   { name: "Keyboard", price: 150 },
//   { name: "Earphones", price: 250 },
// ].filter(findInexpensiveProducts);

// console.log(products);

const products = [
  { name: "Bicycle", price: 200 },
  { name: "TV", price: 400 },
  { name: "Book", price: 30 },
  { name: "Cellphone", price: 500 },
  { name: "Laptop", price: 600 },
  { name: "Keyboard", price: 150 },
  { name: "Earphones", price: 250 },
];

// const inexpensiveProducts = products.filter(function (product) {
//   return product.price <= 200;
// });

const inexpensiveProducts = products.filter((product) => product.price <= 200);
console.log(inexpensiveProducts);

// const productNames = products.map(function (product) {
//   return product.name;
// });

// console.log(productNames);

const productNames = products.map((product) => product.name);
console.log(productNames);

// function getProductNames(product) {
//   return product.name;
// }

// const products = [
//   { name: "Bicycle", price: 200 },
//   { name: "TV", price: 400 },
//   { name: "Book", price: 30 },
//   { name: "Cellphone", price: 500 },
//   { name: "Laptop", price: 600 },
//   { name: "Keyboard", price: 150 },
//   { name: "Earphones", price: 250 },
// ].map(getProductNames);

// console.log(products);
