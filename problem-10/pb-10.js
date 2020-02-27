function isPrime(n){
    for(let i=2; i<=Math.sqrt(n); i++){
        if(n%i===0){
            return false;
        }
    }
    return true;
}

function sumOfPrime() {
    let sum = 0;
    let LIMIT = 2000000;
    console.log("Start Time: "+(new Date()).getTime());
    for(let x = 2; x<LIMIT; x++){
        if(isPrime(x))
            sum = sum + x;
    }

    console.log("Sum : "+sum);
    console.log("End Time: "+(new Date()).getTime());
}

//Taking too much time. Somewhere around 2-3 Seconds.
sumOfPrime();