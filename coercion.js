// console.log(4 + '7')
let a = 4 + "7";
console.log(typeof a);

// console.log(4 * '7')
let b = 4 * "7";
console.log(typeof b);

let c = 20;
let d = 20 + "";
console.log(typeof d);
let e = String(d);
console.log(typeof e);

let f = Number(e);
console.log(typeof f);

let g = 1;
let h = 0;
let i = Boolean(g);
let j = Boolean(h);
console.log(typeof i);
console.log(typeof j);

console.log(parseInt("123hi"));
console.log(Number("123hi"));
