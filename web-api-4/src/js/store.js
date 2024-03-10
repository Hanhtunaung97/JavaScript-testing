console.log(JSON);
const fruit=["apple","mango","orange"]
console.log(fruit);
console.log(JSON.stringify(fruit));
const jsonStr=JSON.stringify(fruit);
const jsonStr1="hello"
console.log(JSON.stringify(jsonStr1));

console.log(JSON.parse(jsonStr));
const result = document.getElementById("result");
const width = document.getElementById("width");
const height = document.getElementById("height");
const calculate = document.getElementById("calculate");
const lists = document.getElementById("lists");
const storeBtn = document.getElementById("storeBtn");
const clearBtn = document.getElementById("clearBtn");

let records;
if(localStorage.getItem("records")){
records=JSON.parse(localStorage.getItem("records"));
}else{
    records=[];
}

calculate.addEventListener('click',() => {
    const result=width.valueAsNumber * height.valueAsNumber;
    const record={
        width:width.valueAsNumber +"ft",
        height:height.valueAsNumber +"ft",
        result:result+ "sqft",
    }
    lists.append(createList(record))
    records.push(record);
    const jsonRaw=JSON.stringify(records);
    localStorage.setItem("records",jsonRaw)
})
const createList=({width,height,result}) => {
    const li=document.createElement("li")
    li.innerHTML=`${width} * ${height} = ${result}`;
    return li;
}
records.forEach(r=>lists.append(createList(r)))


const f=fetch("./src/data.json")
.then((res)=>(res.json()))
.then(data=>console.log(data))