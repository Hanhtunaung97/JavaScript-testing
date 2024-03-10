// //conditional statement
// if (false) {
//     console.log("HHA");

// }
// else
// {
//     console.log("This is false statement!");
// };

// let electricityon =false;
// if (electricityon) {
//     console.log("Let stay with air-con!");
// }else{
//     console.log("Let stay with fun!");
// }
// let pocketmoney=50;
// if (pocketmoney>=300) {
//     console.log("YOu can enjoy bus!");
// }else{
//     console.log("Walking is the best for u!");
// }
// let wakeuptime=10;
// if (wakeuptime<13) {
//     console.log("U can learn lesson");
// }else{
//     console.log("U can't access this class for today!");
// }
// let canIgo=function(wakeuptime){
// if (wakeuptime<13) {
//     return("You can access MMS-IT Class");
// }else{
//     return("Not for today!");
// }
// };
// console.log(canIgo(10));
// console.log(canIgo(12));
// console.log(canIgo(6));
// console.log(canIgo(15));
// console.log(canIgo(14));
//mark>=40(pass),mark<40(fail),mark>=80(Distinct)
// ASC -> 1 TO 1OO
// DESC -> 100 T0 1
// let exam = function (mark) {
//   if (mark >= 80) {
//     return "D";
//   } else if (mark >= 40) {
//     return "P";
//   } else {
//     return "F";
//   }
// };
// console.log(exam(60));
// console.log(exam(69));
// console.log(exam(50));
// console.log(exam(84));
// console.log(exam(84));
// console.log(exam(70));

// console.log(exam(55));
// console.log(exam(39));
// console.log(exam(50));
// console.log(exam(41));
// console.log(exam(30));
// console.log(exam(35));
// let pocketmoney = 10;
// let busticket = 300;
// let snack = 500;
// if (pocketmoney >= busticket) {
//   pocketmoney -= busticket;
//   console.log("Take a bus for a way to school!");
//   if (pocketmoney >= snack) {
//     pocketmoney -= snack;
//     console.log("attempt class with eating snack.");
//   } else {
//     console.log("Just attempt the class");
//   }
//   if (pocketmoney >= busticket) {
//     pocketmoney -= busticket;
//     console.log("U can take a bus for a way to home!");
//   } else {
//     console.log("Walk yourself to home");
//   }
// }else{
//     console.log("Walk yourself for a way to school");
//     console.log("attempt class");
//     console.log("Walking alone way to home");
// }
// console.log("remaining pocketmoney",pocketmoney);
// let writing = 50;
// let viber = 60;
// if (writing >= 60 && viber >= 60) {
//   console.log("U can join the university");
// } else {
//   console.log("No you can't");
// }

// false ? console.log("I am true") : console.log("I am fales");
// false && console.log("This is true");

// let busno=21;
// if (busno===65 || busno===20) {
//   console.log("U can go to MMS -IT");
// }else{
//   console.log("You don't");
// };
let cangigo = function (wakeuptime) {
  if (wakeuptime < 13) {
    return "U will access to school";
  } else {
    return "U will be late!";
  }
};
console.log(cangigo(9));
const check = function (mark) {
  if (mark >= 80) {
    return "D";
  } else if (mark >= 40) {
    return "p";
  } else {
    return "F";
  }
};
console.log(check(50));
console.log(check(87));
console.log(check(60));
console.log(check(42));
console.log(check(30));
console.log(check(28));
let pocketmoney = 500;
let busfee = 300;
let drink = 500;
if (pocketmoney >= busfee) {
  pocketmoney -= busfee;
  console.log("Take a bus for school");
  if (pocketmoney >= drink) {
    pocketmoney -= drink;
    console.log("U can drink juice while learning lesson");
  } else {
    console.log("just learn lesson");
  }
  if (pocketmoney >= busfee) {
    pocketmoney -= busfee;
    console.log("U can go home with bus");
  } else {
    console.log("U can walk to home");
  }
} else {
  console.log("U can go school with walking");
  console.log("U can learn lesson");
  console.log("U can go home with walking yourself");
}
let writing=65;
let viber=80;
if(writing>=60 && viber>=60){
  console.log("U can join the university");
}else{
  console.log("sorry U can't...");
}
let busno =65;
if (busno===65|| busno===20) {
  console.log("U will get MMS IT kyaunt myaung");
}else{
  console.log("U won't");
}