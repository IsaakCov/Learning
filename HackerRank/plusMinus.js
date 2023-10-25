'use strict';

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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    let countNeg = 0;
    let countZeros = 0;
    let countPos = 0;
    let arraySize = arr.length;
    for(let i = 0; i<arraySize;i++){
        if(arr[i]>0){
            countPos++;
        }
        else if(arr[i]<0){
            countNeg++;
        }
        else{
            countZeros++;
        }
        
    }
    console.log((countPos/arraySize).toFixed(6));
    console.log((countNeg/arraySize).toFixed(6));
    console.log((countZeros/arraySize).toFixed(6));

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}