// console.log("one");

// try {
//   let x = 5;
//   let y = 10;
//   console.log(x + y);
//   // console.log(myName);
//   if (x < y) {
//     throw new Error("something wrong!!");
//   }
// } catch (error) {
//   console.dir(error.message);
// } finally {
//   console.log("all done");
// }

// console.log("two");
// console.log("three");

// function birthYear(bd) {
//   const bdDate = new Date(bd);
//   return bdDate.getFullYear();
// }
// console.log(birthYear("1997-11-29"));
// const myName = "Han Htun Aung";
// const myBd = "1997-11-29";

// function findAge(birthYear) {
//   const findAge = new Date();
//   return findAge.getFullYear() - birthYear;
// }
// console.log(findAge(1997));

// let x = 10;
// y = 5;

// function intro(name, bd) {
//   const age = findAge(birthYear(bd));
//   return `I'm ${myName} and I am ${age} year${age > 1 ? "s" : ""} old`;
// }
// console.log(intro(myName, myBd));

function findBirthYear(bd) {
  const bdDate = new Date(bd);
  return bdDate.getFullYear();
}
// console.log(findBirthYear("1997-11-29"));
const myName = "Han Htun Aung";
const myBd = "1997-11-29";

function findAge(findBirthYear) {
  const date = new Date();
  const age = date.getFullYear() - findBirthYear;
  return age;
}
// console.log(findAge(findBirthYear(myBd)));
let x = 10;
y = 5;

function intro(name, bd) {
  const myAge = findAge(findBirthYear(bd));
  return `I am ${name} and ${myAge} year${myAge > 1 ? "s" : ""} old`;
}
console.log(intro(myName, myBd));
