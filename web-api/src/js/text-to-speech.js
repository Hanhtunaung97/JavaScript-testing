const textInput=document.querySelector("#textInput")
const speechBtn=document.querySelector("#speechBtn")

const speechSynthesis=window.speechSynthesis;
const utterance=new SpeechSynthesisUtterance();

speechBtn.addEventListener('click',() => {
    utterance.text=textInput.value;
    utterance.pitch=0.1;
    utterance.rate=0.4;
    speechSynthesis.speak(utterance)
})