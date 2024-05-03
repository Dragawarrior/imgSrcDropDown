console.log (20+10)

const imageElement = document.getElementById('imgJsTest')
const areia = 'areiaPiccrew.png';
const governess = 'Governess vibe.png';
const streamer = 'faketwitchstreamer.png';
const selectProfile = document.getElementById('selectProfile');

console.log(selectProfile);

const selectElement = document.querySelector('#selectProfile')
const selectedValue = selectElement.value;
console.log(selectedValue)

addEventListener("change", (event)=>{
    console.log(event.target.value);
    if(event.target.value =='areia'){
        console.log('I am Areia')
        imageElement.src = areia;
    } else if(event.target.value == 'governess'){
        console.log('I am the Governess')
        imageElement.src = governess;
    } else if(event.target.value == 'streamer'){
        console.log('I am a Streamer')
        imageElement.src = streamer;
    } else {
        console.log('Error')
    }
});

