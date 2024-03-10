fetch("https://fakestoreapi.com/products/1")
  .then((res) => res.json())
  .then((json) => console.log(json));
fetch("https://fakestoreapi.com/products/2")
  .then((res) => res.json())
  .then((json) => console.log(json));
fetch("https://fakestoreapi.com/products/3")
  .then((res) => res.json())
  .then((json) => console.log(json));
fetch("https://fakestoreapi.com/products/4")
  .then((res) => res.json())
  .then((json) => console.log(json));
fetch("https://fakestoreapi.com/products/5")
  .then((res) => res.json())
  .then((json) => console.log(json));

const getData = async () => {
  const res1 = await fetch("https://fakestoreapi.com/products/1");
  const json1 = await res1.json();
  console.log(json1);
  const res2 = await fetch("https://fakestoreapi.com/products/2");
  const json2 = await res2.json();
  console.log(json2);
  const res3 = await fetch("https://fakestoreapi.com/products/3");
  const json3 = await res3.json();
  console.log(json3);
  const res4 = await fetch("https://fakestoreapi.com/products/4");
  const json4 = await res4.json();
  console.log(json4);
  const res5 = await fetch("https://fakestoreapi.com/products/5");
  const json5 = await res5.json();
  console.log(json5);
};
getData();
