let num1 =5;
let num2 =4;
console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1**num2);
console.log(num1%num2);
console.log(num1);
num1++;
console.log(num1);
num1++;
console.log(num1);
num1++;
console.log(num1);
console.log(num2);
num2--;
console.log(num2);
num2--;
console.log(num2);
num2--;
console.log(num2);
console.log(num1++);
console.log(num1);
console.log(num1++);
console.log(num1);
console.log(++num1);
console.log(++num1);
console.log(++num1);
num1=num1+3;
console.log(num1);
num1+=3;
console.log(num1);
num2=num2-4;
console.log(num2);
num2-=5;
console.log(num2);
let firstname="han";
let lastname="htunaung";
console.log(firstname+lastname);
let myname="han";
myname+=" ";
myname+="htun";
myname+=" ";
myname+="aung";
console.log( typeof myname);
let x=5;
console.log(typeof x);
let y=5<7;
console.log(typeof y);
let z=5>3;
console.log(z);
let a=null;
console.log(a);
// arr
// myself=hanhtunaung,25,yes,100,mandalay
let arr=["hanhtunaung",25,true,100,"mandalay","IT"];
console.log(arr);
console.log(arr[1]);
arr[1]=19;
console.log(arr[1]);
let fruits=[];
fruits[0]="apple";
fruits[1]="mango";
fruits[2]="banana";
fruits[3]="orange";
console.log(fruits);
let obj={
    name:"hanhtunaunng",
    myage:25,
    rs:false,
    income:100,
    city:"mandalay",
    job:"IT",
};
console.log(obj);
console.log(obj["myage"]);
console.log(obj.city);
console.log(obj["income"]);

const sname="mg mg";
let ownmoney=200;
let orange=50;
ownmoney-=50;
console.log(ownmoney);
let mgmgbag=["mm book","eng book","bio book"];
mgmgbag[mgmgbag.length]={pencil:null};
console.log(mgmgbag);
console.log(mgmgbag.length);
let canmgmgfriendsomke=true;
let mgmgcannotsmoke=false;
let mgmginfo={
    sname,
    age:16,
    ownmoney,
    city:"mandalay",
};
console.log(mgmginfo);
let st1={
    name:"kyaw kyaw",
    age:15,
    money:1000,
    city:"Yangon",
};
let st2={
    name:"su su",
    age:16,
    money:700,
    city:"mandalay",
};
let st4={
    name:"mya mya",
    age:15,
    money:1000,
    city:"bago",
};
console.log(st1);
console.log(st2);
console.log(st4);
let students=[
    st1={
        name:"kyaw kyaw",
        age:15,
        money:1000,
        city:"Yangon",
    },
    st2={
        name:"su su",
        age:16,
        money:700,
        city:"mandalay",
    },
    st4={
        name:"mya mya",
        age:15,
        money:1000,
        city:"bago",
    },
    mgmginfo,
];
console.log(students);

let mark=40;
console.log(mark>=40);
// let a=5;
// let b="5";
// console.log(a==b);
let haveufinishdinner =true;
console.log(haveufinishdinner?"finish":"Not yet");
let pmoney=150;
console.log(pmoney>=300? "U can ride":"Walk alone!");