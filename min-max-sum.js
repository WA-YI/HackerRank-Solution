/*****
 * 
需求：给定一串数字，输入以空格分隔的数组项。例如：

1 2 3 4 5

结果：计算最小的四个数和最大的四个数之和，用空格分隔后输出。例如：

10 14

 * 
*****/

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
    var arr1 = arr.concat().sort()
    var arr2 = arr.concat().sort((a,b)=>b-a)
    var min = 0
    var max = 0
    for(var i=0;i<4;i++){
        min = min + arr1[i]
        max = max + arr2[i]
    }
    console.log(min+" "+max)
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
