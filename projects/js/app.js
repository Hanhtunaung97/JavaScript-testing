// selector
const app = document.querySelector("#app");
const textInput = document.querySelector("#textInput");
const addBtn = document.querySelector("#addBtn");
const doneListCounter = document.querySelector("#doneListCounter");
const totalListCounter = document.querySelector("#totalListCounter");
const lists = document.querySelector("#lists");

// functions
const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};
// console.log(getRndInteger(0,61));
const makeRandomId = (length) => {
  let char = "123456789abcdefghijknlmopqrstuvwxyzABCDEFGHIJKNMLOPQRSTUVWXYZ";
  let result = "";
  for (let i = 1; i <= length; i++) {
    result += char[getRndInteger(0, char.length)];
  }
  return result;
};
console.log(makeRandomId(5));
const createCount = () => {
  const totalList = lists.querySelectorAll(".list").length;
  totalListCounter.innerHTML = totalList;
  doneListCounter.innerHTML = lists.querySelectorAll(
    ".list-checker [type='checkbox']:checked"
  ).length;

  if (totalList === 0) {
    lists.innerHTML = `<div class="text-center empty-stage"> 
    <div class="mb-5" >
    <img width="100" src="./image/empty.svg" alt="">
    <p class="mt-3" >There is no list.</p>
    </div>
    </div>`;
  } else {
    // lists.querySelector(".empty-stage") &&
    //   lists.querySelector(".empty-stage").remove();
    lists.querySelector(".empty-stage")?.remove();
  }
};
const createList = (textList) => {
  const checkerId = makeRandomId(7);
  const list = document.createElement("div");
  list.classList.add("list");
  list.innerHTML = `
    <div
                    class="animate__animated animate__bounceInDown border border-2 border-primary p-3 d-flex justify-content-between align-items-start mb-3"
                  >
                    <div class="form-check list-checker">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="${checkerId}"
                       
                      />
                      <label class="form-check-label list-label" for="${checkerId}">
                       ${textList}
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
  const delBtn = list.querySelector(".list-del-btn");
  delBtn.addEventListener("click", () => {
    const decision = window.confirm("Are you sure ?");
    // decision && list.remove();
    if (decision) {
      list
        .querySelector(".animate__animated")
        .classList.add("animate__lightSpeedOutRight");
      list
        .querySelector(".animate__animated")
        .addEventListener("animationend", () => {
          list.remove();
          createCount();
        });
    }
    // console.log("u del list");
    // console.log(decision);
  });

  const listChecker = list.querySelector(".list-checker");
  listChecker.addEventListener("click", () => {
    console.log("U check");
    list
      .querySelector(".list-label")
      .classList.add("text-decoration-underline");
    list.querySelector(".animate__animated").classList.add("animate__headShake");
    createCount();
  });
  const editBtn = list.querySelector(".list-edit-btn");
  const listLabel = list.querySelector(".list-label");
  editBtn.addEventListener("click", () => {
    console.log("u EDIT");
    const editInput = document.createElement("input");
    editInput.value = listLabel.innerText;
    editInput.classList.add("form-control");
    listLabel.innerText = null;
    listLabel.append(editInput);
    editInput.addEventListener("blur", () => {
      listLabel.innerText = editInput.value;
    });
  });
  return list;
};
const handleAddBtn= () => {
  //   console.log(textInput.value);
  const list = createList(textInput.value);
  lists.append(list);
  list
    .querySelector(".animate__animated")
    .addEventListener("animationend", () => {
      console.log("hello");
      list
        .querySelector(".animate__animated")
        .classList.remove("animate__bounceInDown", "animate__headShake");
    });
  createCount();
  textInput.value = null;
}

//processes
createCount();
addBtn.addEventListener("click",handleAddBtn);
textInput.addEventListener("keyup",(event) => {
  if(event.key === "Enter"){
    handleAddBtn();
  }
})
