const textInput=document.querySelector("#textInput")
const speechBtn=document.querySelector("#speechBtn")

const speechSynthesis=window.speechSynthesis;
const utterance=new SpeechSynthesisUtterance();

speechBtn.addEventListener('click',() => {
    utterance.text=textInput.value;
    utterance.rate=1.2;
    utterance.pitch=2;
    // utterance.volume=0.1;
    speechSynthesis.speak(utterance)
})
