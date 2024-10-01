let speech = new SpeechSynthesisUtterance(); 
//This SpeechSynthesisUtterance() object represents a speech request. It holds the text you want to convert to speech.

let voices = []; // Blank array to store available voices
let voiceSelect = document.querySelector("select");// Select element for voice options
//select is a html element which is used here for selecting a language



window.speechSynthesis.onvoiceschanged = () =>{
    voices = window.speechSynthesis.getVoices();
    // When the event is triggered, this line retrieves the current list of available voices from the speechSynthesis API and stores it in the voices array.

    speech.voice = voices[0]; // Set the default voice to the first one in the list
    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))); 
    // Set the default voice to the first one in the list
};


voiceSelect.addEventListener("change",() => {
    speech.voice = voices[voiceSelect.value];
});

document.querySelector("button").addEventListener("click", () =>{

    speech.text = document.querySelector("textarea").value; 
    // When the button is clicked, it retrieves the text from the textarea and assigns it to the speech.text
     
    window.speechSynthesis.speak(speech); 
    // The window.speechSynthesis.speak(speech) method is called to convert the text to speech.

})