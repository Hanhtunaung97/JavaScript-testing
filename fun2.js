function run() {
    console.log("one");
    console.log("two");
    console.log("three");

    
}
run();
function triangle() {
    console.log("*");
    console.log("* *");
    console.log("* * *");
    console.log("* * * *");
    return `I'am triangle`
}
// triangle();
console.log(triangle());
// triangle();
// if u know ur age,u can find birth year
// birthyear=2023-yorage;
function findbirthyear(age=0) {
    console.log(age);
    let birthyear=2023-age;
    return birthyear;
    
}
console.log(findbirthyear(26));
console.log(findbirthyear(31));
console.log(findbirthyear(32));
console.log(findbirthyear(45));
console.log(findbirthyear(17));
console.log(findbirthyear());

// let results=[];
// let index=0;
// function roomarea(width,breadth) {
//     let area = width * breadth;
//     let result= {
//         width:width+ "ft",
//         breadth:breadth+ "ft",
//         area:area+ "sqft"
//     }
//     results[index]=result;
//     index++;
//     return result;
// }
// console.log(roomarea(20,40));
// console.log(roomarea(15,40));
// console.log(roomarea(13,40));
// console.table(results);
// 150USD:?MMK
// 79RUR:?MMK
// 30SGD:?MMK
let rates={
    USD: 2100,
    SGD: 1574,
    EUR: 2250,
}
function tommk(amount,fromcurrency) {
let currentrate=rates[fromcurrency];
console.log(currentrate);
return amount*currentrate + "MMK";
    
}

console.log(tommk(150,"USD"));
console.log(tommk(79,"SGD"));
console.log(tommk(30,"EUR"));

//1500000 to USD
// 185000 TO SGD
//2100000 TO EUR
function mmktocurrency(amount,currency) {
    let currentrates=rates[currency];
    return amount/currentrates+" "+currency;
}
console.log(mmktocurrency(1500000,"USD"));
console.log(mmktocurrency(185000,"SGD"));
console.log(mmktocurrency(2100000,"EUR"));
// 450 USD=? EUR
// 500 SGD=?USD

let fruits={
    apple:50,
    orange:65,
    mango:120,
    banana:20
}
let records=[];
let index = 0;
let total=0;
function buy(fruitname,quantity) {
    let fruitprice = fruits[fruitname];
    let cost = fruitprice * quantity;
    let record={
name: fruitname,
price:fruitprice,
quantity,
cost
    }
    records[index++]=record;
    total+=cost;
    return record;
}
function tax(amount, percentage=5) {
    return amount*(percentage/100);
    
}
console.log(buy("apple",5));
console.log(buy("mango",2));
console.log(buy("banana",15));
console.table(records);
let currenttax= tax(total);
console.table({
    total,
tax: currenttax,
subtotal:total+currenttax,
});