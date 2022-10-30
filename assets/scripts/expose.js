// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {

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
      }
      if (select.value == "car-horn") { 
          image.src = "assets/images/car-horn.svg"; 
          sound.src = "assets/audio/car-horn.mp3";
      }
      if (select.value == "party-horn") { 
          image.src = "assets/images/party-horn.svg"; 
          sound.src = "assets/audio/party-horn.mp3";
      }
      //console.log(image);
      //console.log(sound);
    }

  const button = document.querySelector('button');
  console.log(button);
  button.addEventListener('click', play); 

  function play() {
    const controls = document.querySelector('div');
    console.log(controls); 
    const sound = document.querySelector('audio');
    //button.controls = controls; 
    console.log(sound); 
    sound.play(); 
  }
}