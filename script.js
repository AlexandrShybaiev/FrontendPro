let num = 10369;

let d1 = Math.floor(num / 10000);
let d2 = Math.floor(num / 1000) % 10;
let d3 = Math.floor(num / 100) % 10;
let d4 = Math.floor(num / 10) % 10;
let d5 = num % 10;

console.log(d1, d2, d3, d4, d5);
