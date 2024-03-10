// class Student{
//     // properties
//     // name="kyaw kyaw";
//     // gender="male";
//     // age=16;


//     // method
//     constructor(name,gender,age){
//         this.name=name;
//         this.gender=gender;
//         this.age=age;
//         console.log("This is student constructor");
//     }
//     learn(){
//         return this.name+" can learn web development";
//     }


// }
// class to obj (instantiate="instance from class to obj")
// const st1=new Student("zaw zaw","male",16);
// console.log(st1);
// console.log(st1.name);
// console.log(st1.learn());
// const st2=new Student("hla hla","female",15)
// console.log(st2);
// console.log(st2.name);
// console.log(st2.learn());

// normal obj
// const st2={
//     name:"mg mg",
//     gender:"male",
//     age:15,
// };
// console.log(st2);

// student obj=name,gender,age;
class Student{
    constructor(name,gender,age) {
        this.name=name;
        this.gender=gender;
        this.age=age;
        this.namePrefix=this.gender==="male" ? "Mr.":"Ms.";
        this.fullName=this.namePrefix+this.name;
        this.birthYear=2023-this.age;
    }
    introduction(){
        return `My name is  ${this.fullName} and I was born in ${this.birthYear}.`;
    }
    learn(){
        return` ${this.name} can learn web development`;
    }
    // static property & method
    static a="aaa";
    static who(){
        return `I am student`;
    }
    // Access modifier
    // private property & method
    // private property
    #x="xxx";
// private method
    #y(){
        return`yyy`;
    }

    run(){
        return`This is private property x ${this.#x} and another one is private method y ${this.#y()}`;
    }
}
const st1=new Student("Bo hla","male",17)
// overwrite property
st1.name="Bo kyaw";
// add property 
st1.pocketMoney=1000;
// property & method access
console.log(st1);
console.log(st1.name);
console.log(st1.introduction());
console.log(st1.learn());
console.log(st1.run());
// 
const st2=new Student("Nyo Mya","female",17)
console.log(st2);
console.log(st2.introduction());
console.log(st2.learn());
// 
console.log(Student.a);
console.log(Student.who());

// OOP inheritance Concept
class One{
    a="aaa";
    b="bbb";
    c="ccc";
}
class Two extends One{
    d="ddd";
    e="eee";
}
const one=new One;
const two=new Two;
console.log(one);
console.log(two);

// OOP incapsiulation concept
class Ws{
    #z="zzz";
    // getter & setter
    getX(){
        return`this is ${this.#z}`;
    }
    setX(newValue){
        this.#z=newValue;
    }
}
const ws=new Ws;
// overwrite value
ws.setX("ggg");
// access value
console.log(ws.getX());