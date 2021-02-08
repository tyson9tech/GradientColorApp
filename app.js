const idBtn = document.getElementById('changerCouleur');
const text = document.getElementById('text');
const body = document.querySelector('body');

idBtn.addEventListener('click', ()=>{
    let sides = ['to left', 'to right', 'to bottom', 'to top'];

    let newSide = sides[numRand(0, sides.length)];

    let newColor = `linear-gradient(${newSide}, ${newCouleur()}, ${newCouleur()})`;
    body.style.background = newColor;
    text.innerHTML = `background-color : ${newColor};`;
});

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
