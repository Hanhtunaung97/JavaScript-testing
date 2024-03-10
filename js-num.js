// const n=new Number(123.4567);
// console.log(n);
// console.log(n.toFixed(2));
// // 
// let num=12.345;
// let weight="160.3lb"
// console.log(parseInt(weight));
// console.log(parseInt(num));
// console.log(parseFloat(num));
// console.log(parseFloat(weight));
// console.log(isFinite(1000/0));
// console.log(isFinite(1000/2));
// console.log(isNaN(1-1));
// console.log(isNaN("1"-1));
// console.log(isNaN("1"+1));
// console.log(isNaN("ab"-1));
// console.log(eval("2+2"));
// Math properties & method (Math is object)
// console.log(Math);
// console.log(Math.random());
// console.log(Math.floor(12.34));
// console.log(Math.floor(12.75));
// console.log(Math.ceil(12.34));
// console.log(Math.ceil(12.75));
// console.log(Math.round(12.34));
// console.log(Math.round(12.75));
// console.log(Math.min(1,2,3,4));
// console.log(Math.min(-1,-2,-3,-4));
// console.log(Math.max(1,2,3,4,5));
// console.log(Math.max(-1,-2,-3,-4,-5));
// random
// 0 => 9
// 1 => 10
// console.log(Math.random()*10);
// console.log(Math.floor(Math.random()*10));
// console.log(Math.ceil(Math.random()*10));
// 
// object keys & values usage
// obj to array
// const obj={
//     a:"aaa",
//     b:"bbb",
//     c:"ccc",
// }
// console.log(obj);
// console.log(Object.keys(obj));
// console.log(Object.values(obj));

const n=new Number(12.34567891);
console.log(n);
console.log(n.toFixed(4));
console.log(n.toPrecision(3));
console.log(n.toExponential());
// 
let num1=13.17
let weight="160.5lb"
console.log(parseInt(num1));
console.log(parseInt(weight));
let num2=16.23;
let weight1="120.32lb"
console.log(parseFloat(num2));
console.log(parseFloat(weight1));
// isFinite
console.log(isFinite(100/0));
console.log(isFinite(3333/6));
console.log(isFinite(333/0));
// isNaN
console.log(isNaN(1-1));
console.log(isNaN("1"-1));
console.log(isNaN("a"-1));
// eval
console.log(eval("3+4"));
console.log(eval("10+2"));
// Math
console.log(Math.random());
console.log(Math.random());
// floor & ceil
console.log(Math.floor(34.78));
console.log(Math.floor(34.23));
console.log(Math.ceil(34.78));
console.log(Math.ceil(34.23));
// round
console.log(Math.round(34.78));
console.log(Math.round(33.56));
// random
console.log(Math.floor(Math.random()*10));
console.log(Math.ceil(Math.random()*10));
// min & max
console.log(Math.min(1,5,8));
console.log(Math.max(1,5,9));
console.log(Math.min(-1,-5,-8));
console.log(Math.max(-2,-5,-7));

