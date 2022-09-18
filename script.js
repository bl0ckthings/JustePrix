// Etape 1 - Sélectionner nos éléments

const input = document.querySelector('#prix')
const error = document.querySelector('small')
const form = document.querySelector('#formulaire')

// Etape 2 - Cacher l'erreur
error.style.display = 'none';
// Etape 3 - Générer un nombre aléatoire


let randomNumber = Math.floor(Math.random() * 501);
let coups = 0;
let chosenNumber;

let randomResponse;

// Etape 6 - Créer la fonction vérifier


function generateInteger(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function verifier(number) {
    let instruction = document.createElement('div');
    let responsePlus = [['#' + coups + " ( " + number + " ) C'est plus !"], ['#' + coups + " ( " + number + " ) Raté gros chamo , c plus !"], ['#' + coups + " ( " + number + " ) T un choqué j'tai dis c'est +"], ['#' + coups + " ( " + number + " ) gros noob c plus encore!"]];
    let responseMoins = [['#' + coups + " ( " + number + " ) C'est moins ! !"], ['#' + coups + " ( " + number + " ) Que t'abuse toi aussi, c moins !"], ['#' + coups + " ( " + number + " )  kesta gros zgeg j'tai dis c moins !"], ['#' + coups + " ( " + number + " ) MDR, meme pas je parle, diminue seulement!"]];
    randomPlus = generateInteger(responsePlus.length);
    randomMoins = generateInteger(responseMoins.length);

    if (number < randomNumber) {

        instruction.textContent = responsePlus[randomPlus];
        instruction.className = "instruction plus";

    } else if (number > randomNumber) {

        instruction.textContent = responseMoins[randomMoins];
        instruction.className = "instruction moins";
        // c'est moins
        // Ajouter un contenu "#1" (4) c'est moins !"
        // Ajouter les classes instruction et moins
    } else {
        instruction.textContent = '#' + coups + " ( " + number + " ) Et merceeee t'es un monstre pti con !";
        instruction.className = "instruction fini";
        input.disabled = true;
        // Felicitations vous avez trouvé le juste prix ! 
        // Ajouter les classes instructions et fini
    }

    document.getElementById('instructions').prepend(instruction);
}



// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener('keyup', () => {
    if (isNaN(input.value)) {
        error.style.display = 'block';
    } else {
        error.style.display = 'none';
    }
});
// Etape 5 - Agir à l'envoi du formulaire
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
})
// Etape 6 - Créer la fonction vérifier

