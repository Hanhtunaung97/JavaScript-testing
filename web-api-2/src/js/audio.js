const playBtn=document.querySelector("#playBtn")
const pauseBtn=document.querySelector("#pauseBtn")

const audio =new Audio("../sounds/UCL.mp3");

playBtn.addEventListener("click",() => {
    audio.play();
    console.log(audio.volume);
    audio.volume=0.6;
    console.log(audio.duration);
})
pauseBtn.addEventListener("click",() => {
    audio.pause();
    console.log(audio.currentTime);
})

audio.addEventListener("loadstart",() => {
    console.log("audio start load");
})

audio.addEventListener("play",() => {
    console.log("audio is start play");
})

audio.addEventListener("playing",() => {
    console.log("audio is start playing");
})
audio.addEventListener("ended",() => {
    console.log("audio is end");

})
audio.addEventListener("pause",() => {
    console.log("audio is pause at"+ audio.currentTime);
    
})

