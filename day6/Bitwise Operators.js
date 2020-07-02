/*
https://www.hackerrank.com/challenges/js10-bitwise/problem
*/



function getMaxLessThanK(n,k){
   var m=0;
    for(var i=1;i<=n;i++){
        for(var j=i+1;j<=n;j++){
            var b=i&j;
           if(b>m && b<k)
            m=b; 
        }
    }
    return m;
}

