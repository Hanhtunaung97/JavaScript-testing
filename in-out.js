// console.log("in and out");
// console.log(window);
// window.alert("hello")
// input
// let yourName= window.prompt("what is your name?")
// output
// console.log(yourName);
// let answer=window.confirm("have u finish dinner?")
// window.alert(answer?"yes,i am finish":"not yet");
// console.log(console);
// console.log(document);
// document.write(yourName)
// console.dir(userInput);
// userInput.value="hello"
// console.dir(textOutput);
// textOutput.innerText="han htun aung"
// console.log(textOutput.innerText);

// selector
// const userInput=document.getElementById("userInput");
// const runBtn=document.getElementById("runBtn");
// const textOutput=document.getElementById("textOutput");
// const fruits=document.getElementById("fruits");
// const salary=document.getElementById("salary");
// const bd=document.getElementById("bd");
// const photo=document.getElementById("photo");
// textOutput.innerHTML="hello <a href=#>MMS-IT</a>"
// console.log(fruits.innerText);
// console.log(fruits.innerHTML);

// console.log(salary.value);
// console.log(bd.value);
// function run(){
//     let text=userInput.value;
//     textOutput.innerText=text;
//     userInput.value=null;
// }
// runBtn.onclick=run;
// runBtn.addEventListener("click",run)
// console.log("Basic input and output");
// console.log(window);
// console.log(window.alert("han htun aung"));
// window.alert("hello")
// const myName= window.prompt("What is your name?")
// console.log(myName);
// const answer=window.confirm("have u finish dinner?")
// window.alert(answer?"Yes,I am finished":"Not,yet");
// console.log(console);
// console.log(document);
// document.write(myName)
// console.dir(userInput);
// userInput.value="han";
// console.dir(userInput);
// textOutput.innerText="mo mo jo jo"
// console.dir(textOutput);
// const userInput=document.getElementById("userInput");
// const runBtn=document.getElementById("runBtn");
// const textOutput=document.getElementById("textOutput");
// const salary=document.getElementById("salary")
// const bd=document.getElementById("bd")
// const photo=document.getElementById("photo")

// function run(){
//     let text=userInput.value;
//     textOutput.innerText+=text;
//     userInput.value=null;
// }
// runBtn.onclick=run;
// runBtn.addEventListener("click",run)
console.log("In & Out JS");
// console.log(window);
// window.alert("hello")
// let yourName= window.prompt("what is your name?")
// window.alert(yourName);
// let answer=window.confirm("Have u finish dinner?")
// window.alert(answer?"Yes,I had":"No,I don't");
// console.log(window);
// console.log(console);
// console.dir(document.write);
// document.write(yourName)
// userInput.value="hello";
// console.log(userInput.value);
// textOutput.innerText="mo om"
// console.log(textOutput.innerText);
// textOutput.innerHTML="hello <a href='#'>MMS-IT</a>"

const userInput=document.getElementById("userInput")
const runBtn=document.getElementById("runBtn")
const textOutput=document.getElementById("textOutput")
const salary=document.getElementById("salary")
const bd=document.getElementById("bd")
const photo=document.getElementById("photo")


function run(){
    let text=userInput.value;
    textOutput.innerText=text;
    userInput.value=null; 
}
userInput.addEventListener("keyup",(event) => {
    if(event.key == "Enter"){

        console.log(event.target.value);
        event.target.value=null;
    }
})
// console.log(typeof onclick);
// runBtn.onclick=run;
// runBtn.addEventListener("click",run)






