/*****
 * 
需求：给定一串数字，第一行输入数组个数，第二行输入以空格分隔的数组项。例如：

6
-4 3 -9 0 4 1

结果：计算其中正数、负数与0的比率，分别输出。例如：

0.500000
0.333333
0.166667

 * 
*****/

const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var line = 2
var input = [];
var result;

rl.on("line",data => {
    input.push(data.trim().split(" "))
    if (input.length == line){
        range(input[1])
    }
}
)

function range(arr){
    var calc = [0,0,0]
    for (i of arr) {
        if (i > 0) { calc[0]++ }
        else if (i<0) { calc[1]++ }
        else { calc[2]++ } 
    }
    for (j of calc) {
        console.log((j/arr.length).toFixed(6))
    }
}
