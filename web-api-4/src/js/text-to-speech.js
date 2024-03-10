const textInput=document.querySelector("#textInput")
const speechBtn=document.querySelector("#speechBtn")

const speechSynthesis=window.speechSynthesis;
const utterance=new SpeechSynthesisUtterance();
speechBtn.addEventListener("click",() => {
    utterance.text=textInput.value;
    utterance.pitch=1.9;
    utterance.rate=1;
    console.log(    utterance.volume
        );
        speechSynthesis.speak(utterance)
})