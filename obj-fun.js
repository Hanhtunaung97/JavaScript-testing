// function run(x,y){
// return x+y;
// }
// console.log(run(4,5));
// const go=function(a,b){
//     return a+b;
// }
// console.log(go(2,3));
// object function
// const f=new Function("x","y","return x+y");
// console.dir(f);
// console.log(f(4,5));
// console.log(f.bind(null,2,3).apply());
// const a=f.bind(null,2,5)
// const b=a.apply();
// console.log(b);
// console.log(f.call(null,2,2));
// obj usage keys & values
// let obj={
//     a:"aaa",
//     b:"bbb",
//     c:"ccc",
// }
// console.log(Object.keys(obj))
// console.log(Object.values(obj));

// function run(x,y){
//     console.log(arguments);
//     return x*y;
// }
// console.log(run(5,7,3,2,6,8));
// const go=function(a,b)
// {
//     return a*b;
// }
// console.log(go(4,8));
// function object
// const f=new Function("c","d","return c*d;");
// console.dir(f);
// console.log(f(3,6));
// console.log(f.bind(null,4,6).apply());
// const h=f.bind(null,9,4);
// const t=h.apply();
// console.log(t);
// console.log(f.call(null,4,4));

function run(...rest) {
  console.log(rest);
  let total = 0;
  for (x of rest) {
    console.log(x);
    total += x;
  }
  return total;
}
console.log(run(1, 3, 4, 5));
console.log(run(5, 10, 3));
//
function test(a, b, ...rest) {
  console.log(a);
  console.log(b);
  console.log(rest);
  let sub = 0;
  for (y of rest) {
    console.log(y);
    sub += y+(a+b);
  }
  return sub;
}
console.log(test(3, 4, 7, 8, 2));
