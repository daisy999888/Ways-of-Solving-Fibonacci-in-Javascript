
function fib(n){
    if(n===0 || n===1){ return n;
    } else{
        return fib(n-1)+fib(n-2);
    }
}




function fib2(n){
    let i=3,fib=[0,1,1];
    while (i<=n) {
    fib.push(fib[i-1]+fib[i-2]);
     i++;
}    return fib[n]
    }



    
function fib3(num){
    var a = 1, b = 0, temp;
  
    while (num >=1){
      temp = a;
      a = a + b;
      b = temp;
      num--;
    }
  
    return b;
  }




  function fib4(num){
      let a = 0, b = 1, i=1, temp;
   while (i< num){
      temp=b
      b= a+b
      a = temp;
      i++;
    }
    return b;
  }



function fib5(num) {
var i = 1, j = 0
while (num >= 1) {
j = i + j
i = j - i
num--
}
return (j)
}



function fib6(num, memo) {
    memo = memo || {};
  
    if (memo[num]) return memo[num];
    if (num <= 1) return 1;
  
    return memo[num] = fib6(num - 1, memo) + fib(num - 2, memo);
  }
