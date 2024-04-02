// INPUT
const numUser = prompt("Inserisci un numero a 4 cifre");
let result = 0;
console.log(numUser, typeof numUser);

// ESECUZIONE LOGICA
for(let i = 0; i < numUser.length; i++){
    result += parseInt(numUser[i]);
}

// OUTPUT
console.log(result);