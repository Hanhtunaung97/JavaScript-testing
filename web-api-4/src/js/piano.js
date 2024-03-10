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

const keyboards = document.querySelector("#keyboards");

const createBtn = (text) => {
  const btn = document.createElement("button");
  btn.className = `key-${text} btn h-32 border text-sky-500 border-sky-200 w-14 bg-sky-100 duration-100 active:scale-90 active:bg-sky-300`;
  btn.innerText = text;
  return btn;
};
const playSound = (currentKey) => {
  const sound = new Audio(`./sounds/${currentKey}.mp3`);
  sound.play();
  //   return sound;
};
buttons.forEach((button) => keyboards.append(createBtn(button.sound)));
keyboards.addEventListener("click", (event) => {
  // console.log(event.target);
  if (event.target.classList.contains("btn")) {
    // const currentKey=event.target.innerText;
    playSound(event.target.innerText);
  }
});
document.addEventListener("keyup", (event) => {
  console.log(event.key);
  const currentBtn = buttons.find((button) => button.key === event.key);
  if (currentBtn) {
    const currentKeyBtn = document.querySelector(`.key-${currentBtn.sound}`);
    currentKeyBtn.classList.add("play");
    currentKeyBtn.addEventListener("transitionend", () => {
      currentKeyBtn.classList.remove("play");
    });

    playSound(currentBtn.sound);
  }
});
