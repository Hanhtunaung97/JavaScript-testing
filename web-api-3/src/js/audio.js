const playBtn = document.querySelector("#playBtn");
const pauseBtn = document.querySelector("#pauseBtn");

const audio = new Audio("./sounds/UCL.mp3");
playBtn.addEventListener("click", () => {
  console.log(audio.duration);
  console.log(audio.volume);
  audio.volume=0.5;
  console.log(audio.volume);
  audio.play();
});

pauseBtn.addEventListener("click", () => {
  console.log(audio.currentTime);
  audio.pause();
});

audio.addEventListener("loadstart",() => {
    console.log("audio is now start");
})
audio.addEventListener("play",() => {
    console.log("audio is now start play");
})
audio.addEventListener("playing",() => {
    console.log("audio is now playing");
    console.log(audio.currentTime);
})
audio.addEventListener("pause",() => {
    console.log("audio is pause now");
    console.log(audio.currentTime);
})
audio.addEventListener("ended",() => {
    console.log("audio is end.");
})

