//SELECTIONS
const copyText = document.getElementById("texte");
const idBtn = document.getElementById('changerCouleur');
const copie = document.getElementById('copie');
const body = document.querySelector('body');


//EVENTS
idBtn.addEventListener('click', ()=>{

    let sides = ['to left', 'to right', 'to bottom', 'to top'];

    let newSide = sides[numRand(0, sides.length)];

    let newColor = `linear-gradient(${newSide}, ${newCouleur()}, ${newCouleur()})`;
    body.style.background = newColor;
    copyText.value = `background : ${newColor};`;
    copyText.disabled = false;
});

copie.addEventListener('click', ()=>{
    if(copyText.value !== ""){
        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /* For mobile devices */

        /* Copy the text inside the text field */
        document.execCommand("copy");

        /* Alert the copied text */
        console.log("Copied the text: " + copyText.value);
    }
});

//FUNCTIONS
function newCouleur(){

    let couleur = '#';

    let caracters = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];

    while(couleur.length <= 6){
        couleur += caracters[numRand(0, caracters.length)];
    }
    return couleur;
}

function numRand(min, max){
    let num = (Math.random() * (max-min)) + min;
    return parseInt(num);
}
