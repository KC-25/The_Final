
'use strict'

// *****Character Name*****
const form = document.getElementById('characterForm');
const output = document.getElementById('output');
form.addEventListener('submit', function(event){
    event.preventDefault();
    const name = document.getElementById('name').value;
    output.textContent = 'Welcome ' + name;
    form.reset();
});

// *****Buttons: Deterimins compainion*****
const sky = document.getElementById("sky");
const earth = document.getElementById("earth");
const ocean = document.getElementById("ocean");
const under = document.getElementById("under");


sky.addEventListener('click', handleButtonClickS);
earth.addEventListener('click', handleButtonClickE);
ocean.addEventListener('click', handleButtonClickO);
under.addEventListener('click', handleButtonClickU);

function handleButtonClickS(eventS){
    (eventS.target.id === sky)
        console.log('sky');
        window.location.href = "game.html";
        document.write('<h6>You have chosen the gods of Olympus. Your compainion is Aether.');
}
function handleButtonClickE(eventE){
    (eventE.target.id === earth)
        console.log('earth');
        window.location.href = "game.html";
        document.write('<h6>You have chosen the gods of The Mortal Realm. Your compainion is Gaius.'); 
}
function handleButtonClickO(eventO){
    (eventO.target.id === ocean)
        console.log('ocean');
        window.location.href = "game.html";
        document.write('<h6>You have chosen the gods of The Ocean. Your compainion is Melia.');
}
function handleButtonClickU(eventU){
    (eventU.target.id === under)
        console.log('under');
        window.location.href = "game.html";
        document.write('<h6>You have chosen the gods of The Underworld. Your compainion is Styx.');
}
    
