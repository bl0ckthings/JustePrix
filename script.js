

const input = document.querySelector('#prix')
const error = document.querySelector('small')
const form = document.querySelector('#formulaire')


error.style.display = 'none';


let randomNumber = Math.floor(Math.random() * 501);
let coups = 0;
let chosenNumber;

let randomResponse;


function generateInteger(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function verifier(number) {
    let instruction = document.createElement('div');
    let responsePlus = [['#' + coups + " ( " + number + " ) It's more !"], ['#' + coups + " ( " + number + " ) Told you it was more !"], ['#' + coups + " ( " + number + " ) Hmm you should try more !"]];
    let responseMoins = [['#' + coups + " ( " + number + " ) It's less"], ['#' + coups + " ( " + number + " ) Go down a little more buddy"], ['#' + coups + " ( " + number + " ) Told you it was less ! "]];
    randomPlus = generateInteger(responsePlus.length);
    randomMoins = generateInteger(responseMoins.length);

    if (number < randomNumber) {

        instruction.textContent = responsePlus[randomPlus];
        instruction.className = "instruction plus";

    } else if (number > randomNumber) {

        instruction.textContent = responseMoins[randomMoins];
        instruction.className = "instruction moins";

    } else {
        instruction.textContent = '#' + coups + " ( " + number + " )  Congratulations ! You found the right number";
        instruction.className = "instruction fini";

        input.disabled = true;



    }
    document.getElementById('instructions').prepend(instruction);
}


input.addEventListener('keyup', () => {
    if (isNaN(input.value)) {
        error.style.display = 'block';
    } else {
        error.style.display = 'none';
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (isNaN(input.value) || input.value == '') {
        input.style.borderColor = 'red';
    } else {
        coups++;
        input.style.borderColor = 'silver';
        chosenNumber = input.value;
        input.value = '';
        verifier(chosenNumber);
    }
});
