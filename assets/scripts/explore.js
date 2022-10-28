// explore.js

window.addEventListener('DOMContentLoaded', init);
const voice = document.getElementById("voice-select"); 
let synth = window.speechSynthesis;
const button = document.querySelector("button");


function init() {
  // TODO

  console.log(voice);
  const option = document.createElement( 'option' );
  option.value = option.text = "pizza";
  voice.add( option );

  setTimeout(() => {
    populateVoiceList();
}, 5);


button.addEventListener('click', (event) => {
  speak();
});




}
let voices = [];
//*from the speech synthesis page"
function populateVoiceList() {
  voices = synth.getVoices();
  console.log(voices.length);
  for (let i = 0; i < voices.length ; i++) {
    const option = document.createElement('option');
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += ' — DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voice.appendChild(option);
    voice.add(option);
  }
}

function speak(){
  voices = synth.getVoices();

  const text = document.getElementById("text-to-speak");


  
  const utterThis = new SpeechSynthesisUtterance(text.value);

  let selectedOption = voice.value;
  for (let i = 0; i < voices.length ; i++) {
    let text = voice.value;
    const myArray = text.split(" ");
    if (voices[i].name === myArray[0]) {
      utterThis.voice = voices[i];
    }
  }
  synth.speak(utterThis);
  let image = document.querySelector("img");
  image.src = "assets/images/smiling-open.png"


  utterThis.addEventListener('end', (event) => {
    image.src = "assets/images/smiling.png"
  });





}