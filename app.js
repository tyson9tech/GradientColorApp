// CLASSES
class GradientColor{
    constructor(direction, firstColor, secondColor){
        this.direction = direction
        this.firstColor = firstColor
        this.secondColor = secondColor
    }
}


// SELECTIONS
const next = _('#next');
const prev = _('#prev');
const body = _('body');
const copyText = _('#text');
const numColor = _('#numColor');

const gradientColors = new Array();

let i = gradientColors.length;

// EVENTS
next.addEventListener('click', ()=>{

    if ((i === 0) && (gradientColors.length > i)) {
        i++;
    }

    if (i === gradientColors.length) {
        gradientColors.push(newProperty());
    }

    if (gradientColors.length > 0) {
        prev.disabled = false;
        prev.classList.add('active');
        prev.classList.remove('inactive');
    }

    body.style.background = gradientColors[i];
    copyText.disabled = false;
    copyText.value = `background : ${gradientColors[i]};`;
    numColor.innerHTML = `<h1>Color : ${i}</h1>`;
    i++;

    copyText.disabled = true;
});

prev.addEventListener('click', ()=>{
    
    if (i === gradientColors.length) {
        i--;
    }
    i--;
    body.style.background = gradientColors[i];
    copyText.disabled = false;
    copyText.value = `background : ${gradientColors[i]};`;
    numColor.innerHTML = `<h1>Color : ${i}</h1>`;
    
    if (i <= 0) {
        prev.disabled = true;
        prev.classList.remove('active');
        prev.classList.add('inactive');
    }

    copyText.disabled = true;
});


copie.addEventListener('click', ()=>{

    copyText.disabled = false;

    let message = document.getElementById('message');

    if(copyText.value !== ""){
        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /* For mobile devices */

        /* Copy the text inside the text field */
        document.execCommand("copy");

        /* Alert the copied text */
        message.innerText = "Couleur Copiee";

        setTimeout(()=>{
            message.innerText = "";
        }, 1000);
    }

    copyText.disabled = true;
});


//FUNCTIONS

/* Selcect elements from the DOM */
function _(element) {
    return document.querySelector(element);
}

/* Create gradient color function */
function createGradientColor(){
    //The direction
    let direction = generateDirection();

    //Generate the first color
    let fisrtCol = generateColor();

    //Generate the first color
    let secondCol = generateColor();

    //Create a gradient color object
    let newGradientColor = new GradientColor(direction, fisrtCol, secondCol);

    return newGradientColor;
}

/* Generate color function */
function generateColor(){
    let lettersMin = ['a', 'b', 'c', 'd', 'e', 'f'];
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    let lettersMaj = ['A', 'B', 'C', 'D', 'E', 'F'];

    let hexaDecimal = [lettersMin, numbers, lettersMaj];
    let hexaLength = hexaDecimal.length;

    let newColor = '#';

    let currentTable;
    let currentTableLength;
    let randomChar;

    do {
        currentTable = hexaDecimal[numberRandom(hexaLength)];
        currentTableLength = currentTable.length;
        randomChar = currentTable[numberRandom(currentTableLength)];
        newColor += randomChar;
    } while (newColor.length < 7);

    return newColor;
}

/* Generate direction function */
function generateDirection(){
    let directions = ["to left", "to top", "to right", "to bottom"];
    let numberDirection = numberRandom(directions.length);
    return directions[numberDirection];
}

/* Number random function */
function numberRandom(max){
    let number = Math.floor(Math.random() * Math.floor(max));
    return number;
}

/* Property gradient color of an object */
function newProperty(){
    let colorGradient = createGradientColor();

    let direction = colorGradient.direction;
    let firstColor = colorGradient.firstColor;
    let secondColor = colorGradient.secondColor;

    return `linear-gradient(${direction}, ${firstColor}, ${secondColor})`;
}
