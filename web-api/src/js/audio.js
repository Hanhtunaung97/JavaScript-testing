const playBtn = document.querySelector("#playBtn");
const pauseBtn = document.querySelector("#pauseBtn");

const audio = new Audio("./sounds/UCL.mp3");

playBtn.addEventListener("click", () => {
  audio.play();
  audio.duration;
  console.log(audio.duration);
});
pauseBtn.addEventListener("click", () => {
  audio.pause();
  console.log(audio.currentTime);
});

audio.addEventListener("loadstart",() => {
    console.log("audio is load start");
})
audio.addEventListener("play",() => {
    console.log("audio is start play");
})
audio.addEventListener("playing",() => {
    console.log("audio is playing");
})
audio.addEventListener("pause",() => {
    console.log("audio is pause");
    console.log(audio.duration);
})
audio.addEventListener("ended",() => {
    console.log("audio is end");
})