// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  // setup code...
  // reference: https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis

  const synth = window.speechSynthesis;
  const inputForm = document.querySelector('textarea');
  const voiceSelect = document.querySelector('select');
  const pitch = document.querySelector('#pitch');
  const pitchValue = document.querySelector('.pitch-value');
  const rate = document.querySelector('#rate');
  const rateValue = document.querySelector('.rate-value');
  const photo = document.querySelector('img');

  function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

  let voices = [];

  // get available voices
  function populateVoiceList() {
    voices = synth.getVoices();
  
    for (let i = 0; i < voices.length ; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += ' — DEFAULT';
      }
  
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  // fill voice list 
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  // new code: 
  const button = document.querySelector('button');
  let inputText = "text to speak here"; 

  inputForm.addEventListener('input', note);
  function note() {
    inputText = inputForm.value; 
    console.log(inputText); 
  }//

  button.addEventListener('click', speak);

  function speak() {

    photo.src = "assets/images/smiling-open.png"; 
    const utterThis = new SpeechSynthesisUtterance(inputText);
    //console.log(text); 

    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for (let i = 0; i < voices.length ; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
  
    synth.speak(utterThis);
    //photo.src = "assets/images/smiling-open.png"; 

    if (synth.speaking) {
      //photo.src = "assets/images/smiling-open.png"; 
      wait(); 
    }

    function delay(time) {
      return new Promise(resolve => setTimeout(resolve, time));
    }

    async function wait() {
      console.log('start timer');
      await delay(100);
      console.log('after 1 second');
      if (synth.speaking) {
        wait(); 
      }
      else {
        photo.src = "assets/images/smiling.png";
      }
    }
  }

}