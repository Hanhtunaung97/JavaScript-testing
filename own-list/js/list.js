// selectors
const app = document.querySelector("#app");
const textInput = document.querySelector("#textInput");
const addBtn = document.querySelector("#addBtn");
const doneListCounter = document.querySelector("#doneListCounter");
const totalListCounter = document.querySelector("#totalListCounter");
const lists = document.querySelector("#lists");

// functions
const generateRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};
const makeRandomId = (length) => {
  let char = "[0123456789abcdefghijklnmopqruvwxyzABCDEFGHIJKLNMOPQRSTUVWXYZ]";
  let result = "";
  for (let i = 1; i <= length; i++)
    result += char[generateRandom(0, char.length)];
  console.log(result);
  return result;
};
const countList = () => {
  const totalList = lists.querySelectorAll(".list").length;
  totalListCounter.innerText = totalList;
  doneListCounter.innerText = lists.querySelectorAll(
    ".list-checker [type='checkbox']:checked"
  ).length;
  if (totalList === 0) {
    lists.innerHTML = `<div
     class="fw-bold text-center empty">
     <div>
<img src="./images/empty.svg" width="100" class="mt-2 mb-3" alt="">
     <p>There is no lists.</p>
     </div>
     </div>`;
  } else {
    const emptyStage = lists.querySelector(".empty");
    if (emptyStage) {
      emptyStage.remove();
    }
  }
};
const crateList = (listText) => {
  const randomID = makeRandomId(7);
  const list = document.createElement("div");
  list.classList.add("list");
  list.innerHTML = `
    <div
                      class="animate__animated animate__bounceInDown border border-2 border-primary p-3 d-flex justify-content-between align-items-center mb-4"
                    >
                      <div class="form-check list-checker">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="${randomID}"
                         
                        />
                        <label class="form-check-label list-label" for="${randomID}">
                       ${listText}
                        </label>
                      </div>
                      <div class="btn-control">
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
    const decisionMake = window.confirm("Are you sure?");
    console.log(decisionMake);
    // decisionMake && list.remove();
    if (decisionMake) {
      list
        .querySelector(".animate__animated")
        .classList.add("animate__bounceOutDown");
      list
        .querySelector(".animate__animated")
        .addEventListener("animationend", () => {
          list.remove();
          countList();
        });
    }
  });
  const listChecker = list.querySelector(".list-checker");
  listChecker.addEventListener("click", () => {
    // console.log("u checked");
    list
      .querySelector(".list-label")
      .classList.add("text-decoration-underline");
    list
      .querySelector(".animate__animated")
      .classList.add("animate__headShake");
    countList();
  });
  const listEditBtn = list.querySelector(".list-edit-btn");
  const listLabel = list.querySelector(".list-label");
  listEditBtn.addEventListener("click", () => {
    console.log("U edit");
    const editInput = document.createElement("input");
    editInput.classList.add("form-control");
    editInput.value = listLabel.innerText;
    listLabel.innerText = null;
    listLabel.append(editInput);
    editInput.addEventListener("blur", () => {
      listLabel.innerText = editInput.value;
    });
  });
  return list;
};

// processes
countList();
addBtn.addEventListener("click", () => {
  //   console.log(textInput.value);
  // console.log(lists.children.length);
  const list = crateList(textInput.value);
  lists.append(list);
  list
    .querySelector(".animate__animated")
    .addEventListener("animationend", () => {
      console.log("hello");
      list
        .querySelector(".animate__animated")
        .classList.remove("animate__bounceInDown", "animate__headShake");
    });
  countList();
  textInput.value = null;
});
