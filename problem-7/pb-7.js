function isPrime(n){
    for(let i=2; i<=Math.sqrt(n); i++){
        if(n%i===0){
            return false;
        }
    }
    return true;
}

function getNprime(n){
    let i, j;
    for(i=2, j=1; j<=n; i++){
        if(isPrime(i))
            j++;
    }
    return (i-1);
}


console.log(getNprime(10001));