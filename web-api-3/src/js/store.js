// console.log(JSON);
// const fruits=["apple","mango","orange"]
// console.log(fruits);
// console.log(JSON.stringify(fruits));
// const jsonStr=JSON.stringify(fruits)
// console.log(JSON.isRawJSON(jsonStr));
// console.log(JSON.parse(JSON.stringify(fruits)));

const result = document.getElementById("result");
const width = document.getElementById("width");
const height = document.getElementById("height");
const calculate = document.getElementById("calculate");
const lists = document.getElementById("lists");
const storeBtn = document.getElementById("storeBtn");
const clearBtn = document.getElementById("clearBtn");
let records;
if (localStorage.getItem("records")) {
  records = JSON.parse(localStorage.getItem("records"));
} else {
  records = [];
}
calculate.addEventListener("click", () => {
  const result = width.valueAsNumber * height.valueAsNumber;
  const record = {
    width: width.valueAsNumber + "ft",
    height: height.valueAsNumber + "ft",
    result: result + "sqft",
  };
  records.push(record);
  lists.append(createList(record));
  const rawJson = JSON.stringify(records);
  localStorage.setItem("records", rawJson);
  console.log(records);
});
const createList = ({ width, height, result }) => {
  const li = document.createElement("li");
  li.innerHTML = `${width} * ${height} = ${result}`;
  return li;
};
records.forEach(r=>lists.append(createList(r)))


const f=fetch("./src/data.json")
.then((res)=>(res.json()))
.then(data=>console.log(data))
const products=fetch("https://fakestoreapi.com/products")
.then((res)=>(res.json()))
.then(data =>console.log(data))