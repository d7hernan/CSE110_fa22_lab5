// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  // confetti state
  let confetti = 0; 

  const jsConfetti = new JSConfetti()

  // setting image and audio file

  const select = document.getElementById('horn-select');
  select.addEventListener('change', horn_change); 
  
  function horn_change() {
      const image = document.querySelector('img');
      const sound = document.querySelector('audio');
      //console.log(image);
      if (select.value == "air-horn") {
          image.src = "assets/images/air-horn.svg"; 
          sound.src = "assets/audio/air-horn.mp3";
          confetti = 0; 
      }
      if (select.value == "car-horn") { 
          image.src = "assets/images/car-horn.svg"; 
          sound.src = "assets/audio/car-horn.mp3";
          confetti = 0; 
      }
      if (select.value == "party-horn") { 
          image.src = "assets/images/party-horn.svg"; 
          sound.src = "assets/audio/party-horn.mp3";
          confetti = 1; 
      }
      //console.log(image);
      //console.log(sound);
    }

  const button = document.querySelector('button');
  //console.log(button);
  button.addEventListener('click', play); 

  function play() {
    //const image = document.querySelector('img');
    //const controls = document.querySelector('div');
    //console.log(controls); 
    const sound = document.querySelector('audio');
    //button.controls = controls; 
    //console.log(sound); 
    sound.play();
    if (confetti) {
      jsConfetti.addConfetti(); 
    }
  }

  const slider = document.querySelector('input');
  //console.log(slider);

  slider.addEventListener('input', modify); 

  function modify() {

    const sound = document.querySelector('audio'); 
    sound.volume = (slider.value)/100; 

    //const sound = document.querySelector('audio')
    const controls = document.getElementById('volume-controls');
    const image = controls.querySelector('img'); 
    //console.log(slider.value);

    if (slider.value == 0) {
      image.src = "assets/icons/volume-level-0.svg";
    }
    else if (slider.value < 33) {
      image.src = "assets/icons/volume-level-1.svg";
    } 
    else if (slider.value < 67) {
      image.src = "assets/icons/volume-level-2.svg";
    }  
    else {
      image.src = "assets/icons/volume-level-3.svg";  
    }
  }
}