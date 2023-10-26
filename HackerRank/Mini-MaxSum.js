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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    let minSum = 1000000000;
    let maxSum = 0;
    for(let i=0; i<5; i++){
        let auxArray = arr.splice(i,1);
        let totalSum = 0;
        for(let j=0; j<auxArray.length; j++){
            totalSum += auxArray[j];
            if(totalSum<minSum){
                minSum = totalSum;
            if(totalSum>maxSum){
                maxSum = totalSum; 
            }
            }
        }
    console.log(`${minSum} ${maxSum}`);
    
    }
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
