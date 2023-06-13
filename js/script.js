
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
    function skycharacter(){
        location.replace("/sky.html");
    }
    (eventS.target.id === sky)
        console.log('sky');
        skycharacter();
    }
function handleButtonClickE(eventE){
    (eventE.target.id === earth)
    function earthcharacter(){
        location.replace("/earth.html");
    }
        console.log('earth');
        earthcharacter();
}
function handleButtonClickO(eventO){
    (eventO.target.id === ocean)
    function oceancharacter(){
        location.replace("/ocean.html");
    }
        console.log('ocean');
        oceancharacter();
}
function handleButtonClickU(eventU){
    (eventU.target.id === under)
    function undercharacter(){
        location.replace("/under.html");
    }
        console.log('under');
        undercharacter();
}
    
