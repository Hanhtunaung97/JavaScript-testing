// variables
const products = [
  {
    id: 1,
    name: "Domain Sale",
    price: 15.55,
  },
  {
    id: 2,
    name: "Web Design",
    price: 75.55,
  },
  {
    id: 3,
    name: "Graphic Design",
    price: 95.55,
  },
  {
    id: 4,
    name: "Web Development",
    price: 125.55,
  },
  {
    id: 5,
    name: "Application Development",
    price: 215.55,
  },
  {
    id: 6,
    name: "Maintenance",
    price: 15.55,
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
const itemsLists = app.querySelector("#itemsLists");
const newItemForm = app.querySelector("#newItemForm");

// functions
const createItemLists = ({ name, price }) => {
  const li = document.createElement("li");
  li.classList.add("list-group-item");
  li.innerHTML = `
    <div class="d-flex justify-content-between">
                <p class="mb-0">${name}</p>
                <p class="text-black-50 mb-0">${price}</p>
              </div>
  `;
  return li;
};
const costTotal = () => {
  // let total = null;
  const rowCosts = app.querySelectorAll(".row-cost");
  // rowCosts.forEach((rowCost) => {
  //   total += parseFloat(rowCost.innerText);
  //   totalCost.innerText = total;
  // });
  totalCost.innerText = [...rowCosts].reduce(
    (pv, cv) => pv + parseFloat(cv.innerText),
    0
  );
  // return rowCosts;
};
const createRecordRow = (product, quantity) => {
  const tr = document.createElement("tr");
  tr.setAttribute("row-product-id", product.id);
  tr.classList.add("record-row");
  const cost = product.price * quantity;
  tr.innerHTML = `
   
    <td class="row-num"></td>
    <td>${product.name}</td>
    <td class="text-end">${product.price}</td>
    <td class="text-end row-quantity-control">
<i class="bi bi-dash row-quantity-decrement"></i>
<span class="row-quantity">${quantity}</span>
<i class="bi bi-plus row-quantity-increment"></i>
</td>
    <td class="text-end row-delete-control"><span class="row-cost">${cost}</span><button class="btn btn-sm btn-outline-primary row-delete"><i class="bi bi-trash3"></i></button></td>

    `;
  const deleteRow = () => {
    if (confirm("Are you sure to Delete?")) {
      tr.remove();
      costTotal();
    }
  };
  const rowDelete = tr.querySelector(".row-delete");
  rowDelete.addEventListener("click", deleteRow);
  const rowQuantityIncrement = tr.querySelector(".row-quantity-increment");
  rowQuantityIncrement.addEventListener("click", () => {
    updateExistedProduct(product, 1);
  });
  const rowQuantityDecrement = tr.querySelector(".row-quantity-decrement");
  rowQuantityDecrement.addEventListener("click", () => {
    const row = document.querySelector(`[row-product-id="${product.id}"]`);
    const currentRowQuantity = row.querySelector(".row-quantity");
    currentRowQuantity.innerText > 1 && updateExistedProduct(product, -1);
  });
  return tr;
};
const createProductOption = (product) => {
  const option = document.createElement("option");
  option.value = product.price;
  option.innerText = product.name;
  return option;
};
const updateExistedProduct = ({ id, price }, quantity) => {
  const isExistedProduct = document.querySelector(`[row-product-id="${id}"]`);
  const currentRowQuantity = isExistedProduct.querySelector(".row-quantity");

  currentRowQuantity.innerText =
    parseFloat(currentRowQuantity.innerText) + parseFloat(quantity);
  const currentRowCost = isExistedProduct.querySelector(".row-cost");
  currentRowCost.innerText = currentRowQuantity.innerText * price;
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
  console.log(data);
  const currentProduct = products.find(
    (product) => product.id == data.get("productSelect")
  );
  const isExistedProduct = document.querySelector(
    `[row-product-id='${currentProduct.id}']`
  );
  if (isExistedProduct) {
    updateExistedProduct(currentProduct, data.get("quantityInput"));
  } else {
    addNewRecord(currentProduct, data.get("quantityInput"));
  }

  costTotal();
  recordForm.reset();
  // calculate
};
const handleNewItemForm = (event) => {
  event.preventDefault();
  const newProduct = {};
  const formData = new FormData(newItemForm);
  console.log(formData.get("new_item_name"));
  console.log(formData.get("new_item_price"));
  newProduct.id = products[products.length - 1].id + 1;
  newProduct.name = formData.get("new_item_name");
  newProduct.price = formData.get("new_item_price");
  itemsLists.append(createItemLists(newProduct));
  productSelect.append(new Option(newProduct.name, newProduct.id));
  products.push(newProduct);
  newItemForm.reset();
  // return handleNewItemForm;
};
// processes
products.forEach(({ id, name, price }) => {
  // productSelect.append(createProductOption(product));
  productSelect.append(new Option(name, id));
  itemsLists.append(createItemLists(id, name, price));
});
recordForm.addEventListener("submit", handleRecordForm);
newItemForm.addEventListener("submit", handleNewItemForm);
printer.addEventListener("click", () => {
  print();
  const recordRows = document.querySelectorAll(".record-row");
  recordRows.forEach((recordRow) => recordRow.remove());
  totalCost.innerText = null;
});
