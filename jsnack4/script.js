// INPUT
const listaInvitati = ["PIPPO", "PLUTO", "PAPERINO"];
const nomeUtente = prompt("Inserisci il nome: ");
const nomeUtenteFinale = nomeUtente.toUpperCase();
console.log(nomeUtenteFinale);

let trovato = false;

// ESECUZIONE LOGICA

for(let i = 0; i < listaInvitati.length; i++){
    if(nomeUtenteFinale === listaInvitati[i]){
        trovato = true;
        break;
    }
}


// OUTPUT

if (trovato){
    console.log("Sei invitato :)");
} else {
    console.log("Mi dispiace, ma non sei invitato :(");
}

