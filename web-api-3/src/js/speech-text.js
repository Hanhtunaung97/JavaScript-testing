const output = document.querySelector("#output");
const recordBtn = document.querySelector("#recordBtn");
const stopBtn = document.querySelector("#stopBtn");

const recognition = new webkitSpeechRecognition();
recognition.continuous = true;

recordBtn.addEventListener("click", () => {
  recognition.start();
});

stopBtn.addEventListener("click",() => {
    recognition.stop();
})


recognition.addEventListener("soundstart", () => {
  console.log("recording...");
  recordBtn.innerText = "recording...";
});
recognition.addEventListener("soundend", () => {
  console.log("record end");
  recordBtn.innerText = "record";
});
recognition.addEventListener("result", (event) => {
  console.log(event.results[0][0].transcript);
  output.innerText=event.results[0][0].transcript;
});
