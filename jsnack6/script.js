const userNum = parseInt(prompt("Inserisci un numero"));
let cubeNum;

for(let i = 1; i <= userNum; i++){
    cubeNum += console.log(Math.pow(i, 3));
}