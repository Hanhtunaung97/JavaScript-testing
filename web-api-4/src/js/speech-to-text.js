const recordBtn=document.querySelector("#recordBtn")
const outputText=document.querySelector("#outputText")

const recognition =new webkitSpeechRecognition();

recordBtn.addEventListener("click",() => {
    recognition.start();
})
recognition.addEventListener("soundstart",() => {
    console.log("record start");
    recordBtn.innerText="loading"
})
recognition.addEventListener("soundend",() => {
    console.log("record end");
    recordBtn.innerText="Record"
})
recognition.addEventListener("result",(event) => {
    console.log(event.results[0][0].transcript);

})

