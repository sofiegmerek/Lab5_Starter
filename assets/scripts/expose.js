// expose.js

window.addEventListener('DOMContentLoaded', init);
const myhorn = document.getElementById("horn-select");


const volume = document.getElementById("volume-controls");
const input = volume.querySelector("[type='range']");
const log = document.getElementById('volume');
const horn = document.getElementById("horn-select");
const button = document.querySelector("button");


function init() {
  // TODO


  horn.addEventListener('change', (event) => {
    const result = document.querySelector("[name='horn']");
    const image = document.querySelector("img");
    const sound = document.querySelector("audio");
    console.log("you like");
    console.log(result.value);
    if(result.value == "air-horn"){
      console.log("i love air horn");
      image.src = "assets/images/air-horn.svg";
      sound.src = "assets/audio/air-horn.mp3";
      console.log(sound);
    }
    if(result.value == "car-horn"){
      console.log("i love car horn");
      image.src = "assets/images/car-horn.svg";
      sound.src = "assets/audio/car-horn.mp3";

    }
    if(result.value == "party-horn"){
      console.log("i love party horn");
      image.src = "assets/images/party-horn.svg";
      sound.src = "assets/audio/party-horn.mp3";
    }
  });


  volume.addEventListener('change', (event) => {
    const result2 = document.querySelector("[type='range']");
    const image2 = volume.querySelector("img");
    const sound2 = document.querySelector("audio");

    console.log("you like");
    console.log(result2.value);
    if( result2.value == 0){
      image2.src = "assets/icons/volume-level-0.svg";
      sound2.volume = 0;
      console.log(sound2.volume)

    }
    else if(result2.value > 1 && result2.value < 33){
      image2.src = "assets/icons/volume-level-1.svg";
      sound2.volume = result2.value/100;
      console.log(sound2.volume)
    }
    else if(result2.value >= 33 && result2.value < 67){
      image2.src = "assets/icons/volume-level-2.svg";
      sound2.volume = result2.value/100;

    }else if(result2.value >= 67){
      sound2.volume = result2.value/100;
        image2.src = "assets/icons/volume-level-3.svg";
      }

  });

button.addEventListener('click', (event) => {
  const sound3 = document.querySelector("audio");
  console.log("hello click me");
  sound3.play();
  const result = document.querySelector("[name='horn']");
  if(result.value == "party-horn"){
    const jsConfetti = new JSConfetti()

    jsConfetti.addConfetti()
  }

}
);


/////volume

   
  
  


}



function updateSlider(volume) {
  if(volume.value == 0){
      alert("we at 0");
  }
  alert("hello2");
  log.textContent = e.target.value;
}

function beep() {
  console.log("beeep")
}

