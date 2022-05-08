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
 * Complete the 'countingSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function countingSort(arr) {
    var ori = arr
   var arr = arr.concat().sort((a,b)=>a-b)
   var item = Array.from(new Set(arr))
    var time = new Array
    var first
    for (var i of item) {
        time[i] = 1;
        first = arr.indexOf(i)
        while (arr[first] == arr[first+1]){
            time[i]++
            first ++
        }
    }
    var out = []
    for (var [i,v] of ori.entries()){
      out[i] = time[v]
    }
    return out
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = countingSort(arr);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
