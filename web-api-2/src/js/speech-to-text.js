const speechBtn=document.querySelector("#speechBtn")
const output=document.querySelector("#output")

const recognition=new webkitSpeechRecognition();
speechBtn.addEventListener("click",() => {
    recognition.start();
})
recognition.addEventListener('soundstart',() => {
    speechBtn.innerText=`Recording...`
    console.log("recording start");
})
recognition.addEventListener("soundend",() => {
    speechBtn.innerText=`Speech`
    console.log("recording end");
})
recognition.addEventListener('result',(event) => {
    console.log(event.results);
    output.innerText=event.results[0][0].transcript;
})
