// console.log(JSON);
// const fruits = ["apple", "mango", "banana"];
// console.log(fruits);
// console.log(JSON.stringify(fruits));

// console.log(JSON.parse(JSON.stringify(fruits)));

const result = document.getElementById("result");
const width = document.getElementById("width");
const height = document.getElementById("height");
const calculate = document.getElementById("calculate");
const lists = document.getElementById("lists");
const storeBtn = document.getElementById("storeBtn");
const clearBtn = document.getElementById("clearBtn");
// process
let records;
if(localStorage.getItem("records")){
records=JSON.parse(localStorage.getItem("records"));
}else{
records=[];
}

calculate.addEventListener("click", () => {
  const result = width.valueAsNumber * height.valueAsNumber;
  const record={
    width: width.valueAsNumber + "ft",
    height: height.valueAsNumber + "ft",
    result: result + "sqft",
  }
  lists.append(createList(record))
  records.push(record);
  const jsonStr = JSON.stringify(records);
  localStorage.setItem("records", jsonStr);
  console.log(jsonStr);
});

const createList = ({ width, height, result }) => {
  const li = document.createElement("li");
  li.innerHTML = `${width} * ${height} = ${result}`;
  return li;
};
records.forEach(r=>lists.append(createList(r)))