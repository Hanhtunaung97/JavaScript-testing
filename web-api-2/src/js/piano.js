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
  btn.className = `btn key-${text} h-32 w-14 bg-green-100 text-green-500 font-semibold active:scale-90 active:bg-green-300 duration-150`;
  return btn;
};
const playSound=(currentKey) => {
    // const currentKey = event.target.innerText;
    const sound = new Audio(`../sounds/${currentKey}.mp3`);
    sound.play();
}
keyboard.addEventListener("click", (event) => {
  // console.log(event.target);
  if (event.target.classList.contains("btn")) {
    playSound(event.target.innerText)
  }
});

document.addEventListener('keydown',(event) => {
    const currentBtn=buttons.find(button=>button.key === event.key);
    console.log(currentBtn);
    if(currentBtn){
        playSound(currentBtn.sound)
        const currentBtnKey=document.querySelector(`.key-${currentBtn.sound}`)
        currentBtnKey.classList.add("play");
        currentBtnKey.addEventListener("transitionend",() => {
        currentBtnKey.classList.remove("play");
            
        })

    }
})


buttons.forEach((button) => keyboard.append(createBtn(button.sound)));
