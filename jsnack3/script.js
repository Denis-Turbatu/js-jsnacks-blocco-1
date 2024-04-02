// INPUT
let userInput;
let finalAdd = 0;

// ESECUZIONE LOGICA
for(let i = 0; i < 10; i++){
    userInput = parseInt(prompt(`Inserisci il ${i+1}° numero: `)); 
    finalAdd = finalAdd + userInput;
}

// OUTPUT
console.log(finalAdd);