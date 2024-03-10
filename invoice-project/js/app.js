// variables
const products = [
  {
    id: 1,
    name: "Domain Sale",
    price: 15.54,
  },
  {
    id: 2,
    name: "Web Design",
    price: 99.95,
  },
  {
    id: 3,
    name: "Graphic Design",
    price: 85.45,
  },
  {
    id: 4,
    name: "Web Development",
    price: 120.89,
  },
  {
    id: 5,
    name: "Web Application",
    price: 150.45,
  },
  {
    id: 6,
    name: "Maintenance",
    price: 49.99,
  },
];
// selectors
const app = document.querySelector("#app");
const recordForm = app.querySelector("#recordForm");
const productSelect = app.querySelector("#productSelect");
const quantityInput = app.querySelector("#quantityInput");
const recordAddBtn = app.querySelector("#recordAddBtn");
const records = app.querySelector("#records");
const totalCost = app.querySelector("#totalCost");
const printer = app.querySelector("#printer");
const itemLists = app.querySelector("#itemLists");
const newItemForm=app.querySelector("#newItemForm");

// functions
const createList = (product) => {
  const li = document.createElement("li");
  li.classList.add("list-group-item");
  li.innerHTML = `
  <div class="d-flex justify-content-between align-items-end">
              <p class="mb-0">${product.name}</p>
              <p class="mb-0 text-black-50"><span>${product.price}</span>MMK</p>
            </div>
  `;
  return li;
};
const createProductOption = (product) => {
  const option = document.createElement("option");
  option.value = product.price;
  option.innerText = product.name;
  return option;
};
const createRecordRow = (product, quantity) => {
  const tr = document.createElement("tr");
  tr.setAttribute("row-product-id", product.id);
  tr.classList.add("record-row");
  const cost = product.price * quantity;
  tr.innerHTML = `
    <td class="row-num"></td>
                                <td>${product.name}</td>
                                <td class="text-end">
                                ${product.price}
                                </td>
                                <td class="text-end row-quantity-control">
<i class="bi bi-dash row-quantity-decrement"></i>
                                <span class="row-quantity">${quantity}</span>
<i class="bi bi-plus row-quantity-increment"></i>
                                
                                </td>
                                <td class="text-end row-control"><span class="row-cost">${cost}</span><button class="btn btn-sm btn-outline-primary row-delete"><i class="bi bi-trash3"></i></button></td>
    `;
  const rowDelete = tr.querySelector(".row-delete");
  rowDelete.addEventListener("click", () => {
    if (confirm("Are you sure to Delete?")) {
      tr.remove();
      costTotal();
    }
  });
  const rowQuantityIncrement = tr.querySelector(".row-quantity-increment");
  rowQuantityIncrement.addEventListener("click", () => {
    updateExistedProduct(product, 1);
  });
  const rowQuantityDecrement = tr.querySelector(".row-quantity-decrement");
  rowQuantityDecrement.addEventListener("click", () => {
    const row = document.querySelector(`[row-product-id="${product.id}"]`);
    const currentProductQuantity = row.querySelector(".row-quantity");
    currentProductQuantity.innerText > 1 && updateExistedProduct(product, -1);
  });
  return tr;
};
const costTotal = () => {
  //     let total=0;
  const rowCosts = document.querySelectorAll(".row-cost");
  // rowCosts.forEach(rowCost=>{
  //     total+=parseFloat(rowCost.innerText);
  //     // console.log(total);
  // })
  // totalCost.innerText=total;
  // return total;
  totalCost.innerText = [...rowCosts].reduce(
    (pv, cv) => pv + parseFloat(cv.innerText),
    0
  );
};
const updateExistedProduct = (product, quantity) => {
  const row = document.querySelector(`[row-product-id="${product.id}"]`);
  const currentProductQuantity = row.querySelector(".row-quantity");

  currentProductQuantity.innerText =
    parseFloat(currentProductQuantity.innerText) + parseFloat(quantity);
  const currentProductCost = row.querySelector(".row-cost");
  currentProductCost.innerText =
    currentProductQuantity.innerText * product.price;
  costTotal();
};

const addNewRecord = (product, quantity) => {
  records.append(createRecordRow(product, quantity));
};
const handleRecordForm = (event) => {
  event.preventDefault();
  const data = new FormData(recordForm);
  console.log(data.get("productSelect"));
  console.log(data.get("quantityInput"));
  const currentProduct = products.find(
    (product) => product.id == data.get("productSelect")
  );
  const isExistedProduct = document.querySelector(
    `[row-product-id="${currentProduct.id}"]`
  );
  if (isExistedProduct) {
    updateExistedProduct(currentProduct, data.get("quantityInput"));
  } else {
    addNewRecord(currentProduct, data.get("quantityInput"));
  }

  recordForm.reset();
  costTotal();
  console.log(currentProduct);
  console.log("u submit");
  //   calculate
};

const handleNewItemForm=(event) => {
  event.preventDefault();
  const formData=new FormData(newItemForm);
  const newProduct={};
  newProduct.id=products[products.length-1].id+1;
  newProduct.name=formData.get("new_item_name");
  newProduct.price=formData.get("new_item_price");
  itemLists.append(createList(newProduct));
  productSelect.append(new Option(newProduct.name,newProduct.id));
  products.push(newProduct);
  newItemForm.reset();
}
// processes

products.forEach((product) => {
  productSelect.append(new Option(product.name, product.id));
  itemLists.append(createList(product));
});
recordForm.addEventListener("submit", handleRecordForm);
newItemForm.addEventListener("submit",handleNewItemForm);
printer.addEventListener("click", () => {
  print();
  const recordRows=document.querySelectorAll(".record-row");
  recordRows.forEach(recordRow=>recordRow.remove());
  totalCost.innerText=null;
});
