// fun expression
// let run=function(){
//     return `I'm function expression`;
// // };
// // console.log(run());
// (function(){
//     console.log("I'm IIFE");
//     return "I'm IIFE";
// })();
// let x = function(){
//     return "x";

// };
// let y = function y(){
//     return x()+"y";
// };
// console.log(y());
// function expression
// let run=function(){
    // return `I'm function expression`
// };
// console.log(run());
// (function(){
//     console.log("I'm IIFE");
//     return`I'm IIFE too;`
// })()
// let x=function(){
//     return `x`;
// };
// let y= function y(params) {
//     return x() + "y"
// };
// console.log(y());
// //varriable scooping
// {
//     let x="x";
//     console.log(x);
// }
// console.log(x);
// function run(){
//     let x="x";
//     console.log(x);
// }
// run();
// console.log(x);
// console.log(x());
// function x() {
//     return`x`
// }
// let y =function(){
//     return`y`
// }
// console.log(y());
// let run = function(){
// return "I'm run";
// };
// console.log(run());
// //IIFE
// (function(){
//     console.log("hello");
//     return "I am HHA";
// })();

// function run() {
//     let x ="xxx";
//     console.log(x);
// };
// console.log(x);
// run();
// console.log(x());
// function x() {
//     return "xx";
// };
// console.log(y());
// let y =function(){
//     return "yy";
// };
// let obj={
//     x:"x",
//     y:"y",
//     z:"z",
//     run:function(){
//         return "This is run "+this.x +this.y+this.go();
//     },
//     go(){
//         return "This is go";
//     },
// };
// console.log(obj);
// console.log(obj.run());;
// console.log(obj.go());
// let num1=5;
// let num2=num1;
// console.log(num1,num2);
// num1=10;
// console.log(num1,num2);
// let obj1={
//     name:"HHA",
//     age: 26,
// };
// let obj2=obj1;
// console.log(obj1,obj2);
// obj1.age=27;
// console.log(obj1,obj2);
// let x={};
// let y={};
// console.log(x===y);
let arr1=[]; //pointer no.-->eg.1234
let arr2=arr1;//pointer no.-->eg.1234 (both same pointer)
console.log(arr1,arr2);
arr1[0]="HH";
console.log(arr1,arr2);
