const idBtn = document.getElementById('changerCouleur');
const text = document.getElementById('essais');

idBtn.addEventListener('click', ()=>{
    text.style.color = newCouleur();
});

function newCouleur(){

    let couleur = '#';

    let caracters = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];

    while(couleur.length <= 6){
        couleur += caracters[numRand(caracters[0], caracters.length)];
    }

    return couleur;
}

function numRand(min, max){
    let num = (Math.random() * (max-min)) + min;
    return parseInt(num);
}
