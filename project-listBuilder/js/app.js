// selectors
const app = document.querySelector("#app");
const textInput = document.querySelector("#textInput");
const addBtn = document.querySelector("#addBtn");
const doneListCounter = document.querySelector("#doneListCounter");
const totalListCounter = document.querySelector("#totalListCounter");
const lists = document.querySelector("#lists");

// functions
const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
const makeRandomId = (length) => {
  char = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";
  for (let i = 1; i <= length; i++) {
    result += char[getRndInteger(0, char.length)];
  }
  return result;
};
// console.log(makeRandomId(7));
// console.log(getRndInteger(0,61));
const createCount = () => {
  const totalList = lists.querySelectorAll(".list").length;
  totalListCounter.innerText = totalList;
  doneListCounter.innerText = lists.querySelectorAll(
    ".list-checker [type='checkbox']:checked"
  ).length;
  if (totalList === 0) {
    lists.innerHTML = `<div class='text-center empty-stage'>
    <div>
    <img src="./images/empty.svg" width="100" class="mt-3" alt="">
    <p class="mt-3">There is no List</p>
    </div>
    </div>`;
  } else {
    lists.querySelector(".empty-stage") &&
      lists.querySelector(".empty-stage").remove();
  }
};
const createList = (listText) => {
  const checkerId = makeRandomId(6);
  const list = document.createElement("div");
  list.classList.add("list");
  list.innerHTML = `
<div
class="animate__animated animate__fadeInDown border border-2 p-3 border-primary d-flex justify-content-between align-items-start mb-2"
>
<div class="form-check list-checker">
  <input
    class="form-check-input"
    type="checkbox"
    value=""
    id="${checkerId}"
    
  />
  <label class="form-check-label list-label" for="${checkerId}">
  ${listText}
  </label>
</div>

<div class="list-control">
  <button class="btn btn-outline-primary list-edit-btn">
    <i class="bi bi-pencil"></i>
  </button>
  <button class="btn btn-outline-primary list-del-btn">
    <i class="bi bi-trash3"></i>
  </button>
</div>
</div>
`;
  const listDelBtn = list.querySelector(".list-del-btn");
  listDelBtn.addEventListener("click", () => {
    console.log("U del list");
    const confirmDecision = window.confirm("Are you sure to Delete it?");
    // confirmDecision && list.remove();
    if (confirmDecision) {
      list
        .querySelector(".animate__animated")
        .classList.add("animate__bounceOut");
      list
        .querySelector(".animate__animated")
        .addEventListener("animationend", () => {
          list.remove();
          createCount();
        });
    }
  });
  const listChecker = list.querySelector(".list-checker");
  listChecker.addEventListener("click", () => {
    list
      .querySelector(".list-label")
      .classList.add("text-decoration-underline");
    list.querySelector(".animate__animated").classList.add("animate__shakeX");
    createCount();
  });
  const listEditBtn = list.querySelector(".list-edit-btn");
  const listLabel = list.querySelector(".list-label");
  listEditBtn.addEventListener("click", () => {
    const editInput = document.createElement("input");
    editInput.value = listLabel.innerText;
    listLabel.innerText = null;
    listLabel.append(editInput);
    editInput.addEventListener("blur", () => {
      listLabel.innerText = editInput.value;
    });
  });
  return list;
};
const handleNewList = () => {
  const list = createList(textInput.value);
  lists.append(list);
  list
    .querySelector(".animate__animated")
    .addEventListener("animationend", () => {
      list
        .querySelector(".animate__animated")
        .classList.remove("animate__fadeInDown");
    });
  createCount();
  textInput.value = null;
};

// process
createCount();
addBtn.addEventListener("click", handleNewList);
textInput.addEventListener("keyup",(event) => {
  if(event.key === "Enter"){
    handleNewList();
  }
})
