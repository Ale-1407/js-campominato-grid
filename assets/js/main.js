/*
Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro 
ed emetto un messaggio in console con il numero della cella cliccata.
*/

const griglia = document.getElementById('griglia');
const button = document.getElementById('button');

//creo quadrati dentro la griglia

function creazionequadrati(){
    const div = document.createElement('div');
    div.classList.add('quadrato');
    return div; // dà questo risultato ==> <div class="quadrato"></div>
}

button.addEventListener('click', function(){

   //100 quadrati
   for( let i = 1; i <= 100; i++ ) {
    let elementocorrente = creazionequadrati();

    elementocorrente.addEventListener('click', function() {
        this.classList.toggle('active');
    })

    let frase = document.getElementById('frase');
    frase.classList.add('display');
    

    elementocorrente.innerHTML = i;
    elementocorrente.classList.add('d-flex', 'align-items-center', 'justify-content-center');

    griglia.append(elementocorrente);
   }
})

