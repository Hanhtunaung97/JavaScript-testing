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
  btn.className = `btn key-${text} h-32 w-14 bg-rose-100 text-rose-500 font-semibold active:scale-90 active:bg-rose-300 duration-150`;
  btn.innerText = text;
  return btn;
};
const playSound = (currentKey) => {
  const sound = new Audio(`./sounds/${currentKey}.mp3`);
  sound.play();
};
keyboard.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn")) {
    playSound(event.target.innerText);
  }
});
document.addEventListener("keydown", (event) => {
  const currentBtn = buttons.find((button) => button.key === event.key);
  if(currentBtn){
    console.log(currentBtn);
  playSound(currentBtn.sound);
  const currentKeyBtn=document.querySelector(`.key-${currentBtn.sound}`)

//   console.log(currentKeyBtn);
currentKeyBtn.classList.add("play");
currentKeyBtn.addEventListener("transitionend",() => {
currentKeyBtn.classList.remove("play");
    
})

  }
});
buttons.forEach((button) => keyboard.append(createBtn(button.sound)));
