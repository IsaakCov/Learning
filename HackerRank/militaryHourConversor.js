'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    
    // Leer el formato del string
    let hours = s.slice(0,2);
    let minutes = s.slice(3,5);
    let seconds = s.slice(6,8);
    let format = s.slice(8,10);
    let militaryHours;
    // Verificamos si es AM o PM y de acuerdo a ello asignamos el valor de la
    // hora, si es AM lo dejamos tal cual, menos si es 12, caso al cual debemos
    //corregir el valor a 00 y si es PM, sumamos 12
    if(format == "AM"){
        if(hours == "12"){
            militaryHours = "00";
        }
    }
    else{
        militaryHours = parseInt(hours);
        militaryHours = militaryHours + 12;
        militaryHours = String(militaryHours);
        
    }
    // Concatenar todo e imprimir por consola
    console.log(`${militaryHours}:${minutes}:${seconds}`);
    return (`${militaryHours}:${minutes}:${seconds}`);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
