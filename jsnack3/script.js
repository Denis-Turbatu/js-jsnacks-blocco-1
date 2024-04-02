let userInput;
let finalAdd = 0;

for(let i = 0; i < 10; i++){
    userInput = parseInt(prompt(`Inserisci il ${i+1}° numero: `)); 
    finalAdd = finalAdd + userInput;
}

console.log(finalAdd);