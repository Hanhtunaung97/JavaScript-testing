//    
const rates = {
  USD: 1,
  SGD: 1.33,
  EUR: 0.91,
  GBP: 0.71,
  JPY: 110.83,
};
function currency(amount, fromcurrency, tocurrency) {
  let toRate = rates[tocurrency];
  let fromRate = rates[fromcurrency];
  let exchangeRates = toRate / fromRate;
  let equalAmount = amount * exchangeRates;
  // let equalAmount=amount*fromRate;
  return {
    FromRate: fromRate + " " + fromcurrency,
    ToRate: toRate + " " + tocurrency,
    amount,
    changedAmount: equalAmount + " " + tocurrency,
  };
}
console.table(currency(450, "USD", "EUR"));
console.table(currency(500, "SGD", "USD"));
console.table(currency(600, "GBP", "SGD"));
console.table(currency(700, "EUR", "JPY"));
console.table(currency(4500, "JPY", "USD"));
console.table(currency(500, "USD", "JPY"));
console.table(currency(500, "GBP", "JPY"));
// let CanIbeaten=function (wakeuptime){
// if (wakeuptime<8) {
//     return "You can save your life from your mom";
// }else{
//     return "You will be beaten by your mom"
// }
// }
// console.log(CanIbeaten(4));
// console.log(CanIbeaten(7));
// console.log(CanIbeaten(8));
// console.log(CanIbeaten(9));
// let CanIRide = function (busticket) {
//   if (busticket >= 200) {
//     return "You can ride the BUS!";
//   } else {
//     return "You walk yourself";
//   }
// };
// console.log(CanIRide(180));
// console.log(CanIRide(300));
// console.log(CanIRide(1000));
// console.log(CanIRide(100));
// console.log(CanIRide(120));
// const busticket = 300;
// const GoToSchool = function (pocketmoney, snack) {
//   if (pocketmoney >= 300) {
//     pocketmoney -= busticket;
//     console.log("You can ride a bus for school");
//     if (pocketmoney >= snack) {
//       pocketmoney -= snack;
//       console.log("You can learn lesson with eating some snack!");
//     } else {
//       console.log("Learning focus");
//     }
//     if (pocketmoney >= busticket) {
//       pocketmoney -= busticket;
//       console.log("You can go home with bus");
//     } else {
//       console.log("Go home with walking");
//     }
//     // console.log("---------");
//   } else {
//     console.log("Go to school with walking");
//     console.log("Learn lesson without eating");
//     console.log("Go home with walking");
//   }
//   console.log("Your remaining pocketmoney" + " " + pocketmoney) ;
//   return"------";
// };
// console.table(GoToSchool(1000, 400));
// console.table (GoToSchool(7000, 3000));
// console.table(GoToSchool(600, 400));
// const waitstu = function (waitTime) {
//   if (waitTime <= 10) {
//     return "Waiting student";
//   } else {
//     return "Start teaching lesson";
//   }
// };
// console.log(waitstu(9));
// console.log(waitstu(11));
// console.log(waitstu(10));
// mark>=40(pass)or mark<40(fail),mark>=60(distant)
// const exam = function (mark) {
//   if (mark >= 80) {
//     return "YOU got D!";
//   }
//   if (mark >= 40) {
//     return "YOU PASS!";
//   } else {
//     return "YOU FAIL!";
//   }
// };
// console.log(exam(50));
// console.log(exam(90));
// console.log(exam(30));
// console.log(exam(70));
// const interview=function(writing,viber){
//     if (writing>=60 && viber>=60) {
//         return "You passed the interview!"
//     }else{
//         return "Sorry, You fail!"
//     }
// }
// console.log(interview(60,60));
// console.log(interview(40,60));
// console.log(interview(70,50));
// console.log(interview(80,80));
// const vote = function (age, NRC) {
//   if (age >= 18 && NRC == true) {
//     return "You can vote any party you want!";
//   } else {
//     return "You can't but may be next election!";
//   }
// };
// console.log(vote(19, true));
// console.log(vote(19, false));
// console.log(vote(17, true));
// console.log(vote(18, true));
// const MMSIT=function(busNO){
//     if (busNO==65 || busNO==20) {
//         return "You can reach MMS-IT school";

//     }else{
//         return "You can't!";
//     }
// };
// console.log(MMSIT(65));
// console.log(MMSIT(45));
// console.log(MMSIT(25));
// console.log(MMSIT(20));
// const obj = {
//   hotpot: true,
//   shankaw: true,
//   icecream: false,
//   juice: false,
//   shan: true,
// };
// const eating = function (FoodName) {
//   let Food = obj[FoodName];
//   if (Food == true) {
//     return "You will full!";
//   } else {
//     return "Eat more!";
//   }
// };
// console.log(eating("hotpot"));
// console.log(eating("icecream"));
// console.log(eating("shankaw"));
// console.log(eating("juice"));
// console.log(eating("shan"));
// const oxygen=function(air){
// if (air==true) {
//    return "Enough oxygen!";
// }else{
//     return "Not enough oxygen!";
// }
// };
// console.log(oxygen(false));
// results=[];
// index=0;
// const roomarea=function (width,breadth) {
//     let area=width*breadth;

//     let result={
//         width:width + "ft",
//         breadth:breadth + "ft",
//         area:area + "sqft",
//     }
//     results[index++]=result;
// return result;
// };
// console.log(roomarea(20,40));
// console.log(roomarea(20,60));
// console.log(roomarea(15,50));
// console.log(roomarea(13,40));
// console.table(results);
// const obj1 = {
//   USD: 2100,
//   HKD: 267.55,
//   MYR: 473.24,
//   THB: 61.118,
//   JPY: 1560.6,
// };
// const toMMK = function (amount, fromcurrency) {
//   let rates = obj1[fromcurrency];
//   let equalamount = amount * rates;
//   return equalamount + " MMK";
// };
// console.log(toMMK(400, "HKD"));
// console.log(toMMK(600, "USD"));
// console.log(toMMK(1500, "THB"));
// console.log(toMMK(4500, "MYR"));
// console.log(toMMK(800, "JPY"));

// const MMktocurrency=function(amount,tocurrency){
//     let currentrates=obj1[tocurrency];
//     let equalmoney=amount/currentrates;
//     return equalmoney + " " +tocurrency;
// }
// console.log(MMktocurrency(450000, "USD"));
// console.log(MMktocurrency(600000, "MYR"));
// console.log(MMktocurrency(550000, "HKD"));
// console.log(MMktocurrency(400000, "THB"));
// console.log(MMktocurrency(1500000, "JPY"));
// console.log(MMktocurrency(4500000, "USD"));

// const rates = {
//   USD: 1,
//   SGD: 1.33,
//   EUR: 0.91,
//   GBP: 0.71,
//   JPY: 110.83,
//   KYT:2100,
// };
// const currency = function (amount, fromcurrency, tocurrency) {
//   let fromRate = rates[fromcurrency];
//   let toRate = rates[tocurrency];
//   let exchange = toRate / fromRate;
//   let exchangemoney = amount * exchange;
//   let obj = {
//       from:fromcurrency,
//       To:tocurrency,
//       amount : amount + " "+fromcurrency,
//     exchange: exchangemoney + " " + tocurrency,
//  };
// return obj;
// };
// console.table(currency(793, "GBP", "JPY"));
// console.table(currency(345, "EUR", "GBP"));
// console.table(currency(1793, "USD", "JPY"));
// console.table(currency(12453, "JPY", "EUR"));
// console.table(currency(340, "USD", "KYT"));
// console.table(currency(3450, "JPY", "KYT"));

const fruits = {
  pineapple: 500,
  banana: 200,
  mango: 1000,
  watermalon: 800,
  orange: 450,
};
const records = [];
let index = 0;
let total = 0;
const buying = function (fruitName, quantity) {
  fruitprice = fruits[fruitName];
  let cost = fruitprice * quantity;
  let record = {
    Name: fruitName,
    Price: fruitprice + " MMK",
    quantity,
    Totalcost: cost + " MMK",
  };

  total += cost;
  records[index++] = record;
  return record;
};
 function tax (amount,percentage = 5) {
  let currenttax = amount * (percentage / 100);
  return currenttax;
};
console.log(buying("banana", 20));
console.log(buying("mango", 10));
console.log(buying("orange", 8));
console.log(buying("pineapple", 6));
console.log(buying("watermalon", 3));
console.table(records);
let taxes=tax(total);
let finalbill=total+taxes;
console.table({
  total: total+" MMK",
  tax: taxes + " MMK",
  Bill:finalbill+ " MMK"
});
