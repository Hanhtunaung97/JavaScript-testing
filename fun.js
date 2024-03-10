function run(params) {
    console.log("one");
    console.log("two");
    console.log("three");   
}
run();
function triangle(params) {
console.log("*");    
console.log("* *");
console.log("* * *");
console.log("* * * *");
return `I'm triangle`;
}
console.log(triangle());
// if u know ur age, u can find ur birth year
// 2023-yourage=birth year
function findbirthyear(age=0) {
    console.log(age);
    let byear=2023-age;
    return byear;
    
}
console.log(findbirthyear(26));
console.log(findbirthyear(30));
console.log(findbirthyear(20));
console.log(findbirthyear(28));
console.log(findbirthyear(45));
console.log(findbirthyear());

// function roomarea(width,breadth) {
//     return width*breadth;
    
// }
// console.log(roomarea(20,40));
let results=[];
let index=0;

function roomarea(width,breadth) {
    let area=width*breadth;
    let result={
        width : width + "ft",
        breadth : breadth + "ft",
        area : area + "sqft",
    };
    // store  current data in results array
    results[index]=result;
    index++;
    return result;
    
}
console.log(roomarea(13,40));
console.log(roomarea(30,40));
console.log(roomarea(15,60));
console.table(results);
// 1USD=2100 MMK
// 150USD=?MMK
// 79SGD=?MMK
// 50EUR=?MMK
let rates={
    USD:2100,
    SGD:1574,
    EUR:2251,
};
function toMMK(amount,fromcurrency) {
    let currentrate=rates[fromcurrency];
// console.log(currentrate);
return amount*currentrate + "MMK";
    
}
console.log(toMMK(150,"USD"));
console.log(toMMK(79,"SGD"));
console.log(toMMK(50,"EUR"));

// 1400000MMK TO USD
// 500000MMK TO SGD
// 240000MMK TO EUR
 function mmkTocurrency(amount,tocurrency) {
    let currentrate=rates[tocurrency];
    return amount/currentrate+" "+ tocurrency;
    
 }
 console.log(mmkTocurrency(1400000,"USD"));
 console.log(mmkTocurrency(500000,"SGD"));
 console.log(mmkTocurrency(240000,"EUR"));

