const readline = require("readline")
const fs = require('fs');
const rl = readline.createInterface({
  input: process.stdin
})
const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

rl.on("line",data => {
    processData(data)
})

var string = ""
var temp = []
var step = 0;

function processData(input) {
    var gets = input.split(" ")
    var mode = parseFloat(gets[0])
    var inp = gets[1]
    if (mode === 1) {
        string += inp
        temp[step] = string
        step++
    } else if (mode === 2) {
        string = string.slice(0,-inp)
        temp[step] = string
        step++
    } else if (mode === 3) {
        ws.write(string[inp-1]+"\n")
    } else if (mode === 4){
        step--
        temp.pop()
        string = temp[step-1]
    }
} 