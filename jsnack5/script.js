// INPUT
const oddNum = [];

// ESECUZIONE LOGICA

for(let i = 0; i < 6; i++){
    const userNum = parseInt(prompt(`Inserisci il ${i + 1}° numero: `));
    if(userNum % 2 !== 0 && userNum == isNaN()){
        oddNum.push(userNum);
    }
}

// OUTPUT

console.log(oddNum);