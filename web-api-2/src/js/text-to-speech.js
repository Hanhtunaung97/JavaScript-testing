const inputText=document.querySelector("#inputText")
const speechBtn=document.querySelector("#speechBtn")

const speechSynthesis=window.speechSynthesis;
const utterance=new SpeechSynthesisUtterance();

speechBtn.addEventListener('click',() => {
    utterance.text=inputText.value;
    utterance.rate=1.5;
    utterance.pitch=1.3;
    speechSynthesis.speak(utterance)
})
utterance.addEventListener('start',() => {
    console.log("speech start");
})
utterance.addEventListener('end',() => {
    console.log("speech end");
})