
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
const sky = document.getElementById('sky');
const earth = document.getElementById('earth');
const ocean = document.getElementById('ocean');
const under = document.getElementById('under');
const url = 'game.html';

sky.addEventListener('click', function(){
    window.location.href = url
    document.write('<h6> You have chosen Sky, the god aiding you in your journy is Aether.');
}
);

