/* 
https://www.hackerrank.com/challenges/js10-template-literals/problem
*/


function sides(literals, ...expressions) {
    
    let a=expressions[0];
    let p=expressions[1];

    var d=((p*p)-(16*a));
     var s1=(p+Math.sqrt(d))/4;
    var s2=((p-Math.sqrt(d))/4);

    return [s1,s2].sort();
}
