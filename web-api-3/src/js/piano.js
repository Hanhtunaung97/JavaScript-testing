const buttons = [
  { sound: "C4", key: "a" },
  { sound: "D4", key: "s" },
  { sound: "E4", key: "d" },
  { sound: "F4", key: "f" },
  { sound: "G4", key: "j" },
  { sound: "A4", key: "k" },
  { sound: "B4", key: "l" },
  { sound: "C5", key: ";" },
];
const keyboard = document.querySelector("#keyboard");

const createBtn = (text) => {
  const btn = document.createElement("button");
  btn.innerText = text;
  btn.className = `key-${text} btn h-32 w-14 bg-purple-100 text-purple-500 active:scale-90 active:bg-purple-300 duration-150 font-bold`;
  return btn;
};
const playSound = (currentKey) => {
  // const currentKey = event.target.innerText;
  // console.log(currentKey);
  const sound = new Audio(`./sounds/${currentKey}.mp3`);
  sound.play();
};
keyboard.addEventListener("click", (event) => {
  // console.log(event.target);
  if (event.target.classList.contains("btn")) {
    playSound(event.target.innerText);
  }
});

document.addEventListener("keyup", (event) => {
  // console.log(event.key);
  const currentBtn = buttons.find((button) => button.key === event.key);
  if (currentBtn) {
    // console.log(currentBtn);
    const currentBtnKey = document.querySelector(`.key-${currentBtn.sound}`);
    // console.log(currentBtnKey);
    currentBtnKey.classList.add("play");
    currentBtnKey.addEventListener("transitionend", () => {
      currentBtnKey.classList.remove("play");
    });
    playSound(currentBtn.sound);
  }
});

buttons.forEach((button) => keyboard.append(createBtn(button.sound)));
