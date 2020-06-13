/*
PROBLEM->
https://www.hackerrank.com/challenges/js10-try-catch-and-finally/problem
*/


'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
  try{
  var arr=s.split("");
       var rev=arr.reverse();
var str=rev.join("");
console.log(str);
  }
  catch(e){
      console.log(e.message);
      console.log(s);
  }

}

