// select
const result=document.getElementById("result")
const width=document.getElementById("width")
const breadth=document.getElementById("breadth")
const calculate=document.getElementById("calculate")
const btnStore=document.getElementById("btnStore")
const btnClear=document.getElementById("btnClear")
const lists=document.getElementById("lists")
// function
const areaCalculator=(w,b) =>w*b;

const handleClick=() => {
    const area=areaCalculator(width.valueAsNumber,breadth.valueAsNumber)
    result.innerText=area+" sqft";
    // width.value=null;
    // breadth.value=null;
}
const store=() => {
    lists.innerHTML+=`<li>${width.value} ft * ${breadth.value} ft =${result.innerText}</li>`;
    width.value=null;
    breadth.value=null;
    result.innerText=null;
}
const clear=() => {
    result.innerText=null;
    width.value=breadth.value=null;
}
// process
calculate.addEventListener("click",handleClick)
btnStore.addEventListener("click",store)
btnClear.addEventListener("click",clear)






