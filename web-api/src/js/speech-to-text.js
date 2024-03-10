const recordBtn=document.querySelector("#recordBtn")
const output=document.querySelector("#output")

const recognition=new webkitSpeechRecognition();

recordBtn.addEventListener("click",() => {
    recognition.start();
    console.log("record start");
})

recognition.addEventListener('soundstart',() => {
    recordBtn.innerText="Recording..."
})
recognition.addEventListener('soundend',() => {
    recordBtn.innerText="record"
})
recognition.addEventListener('result',(event) => {
    console.log(event.results);
    // output.innerText=event.results[0][0].transcript
    const result=event.results[event.results.length -1]
    const transcript=result[0].transcript;
    output.innerText=transcript;
})