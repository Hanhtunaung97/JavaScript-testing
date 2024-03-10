// selector
const result=document.getElementById("result");
const width=document.getElementById("width");
const breadth=document.getElementById("breadth");
const calculate=document.getElementById("calculate");
const btnStore=document.getElementById("btnStore")
const btnClear=document.getElementById("btnClear")
const lists=document.getElementById("lists")

// function
const calculateArea=((w,b)=> w*b);

const handleClick=()=>{
    const area=calculateArea(width.valueAsNumber,breadth.valueAsNumber);
    result.innerText=area +"sqft";
}
const store=() => {
    lists.innerHTML+=`<li>${width.value}ft * ${breadth.value}ft = ${result.innerText}</li>`;
    result.innerText=null;
    width.value=null;
    breadth.value=null;
}
const clear=() => {
    result.innerText=null;
}
// process
calculate.addEventListener("click",handleClick);
btnStore.addEventListener("click",store);
btnClear.addEventListener("click",clear)

