function primeFactors(n) {
    console.log('Start Time: '+(new Date()).getTime());
    for(let i=2; i<Math.sqrt(n); i++){
        if((n%i)===0){
            let ct = 0;
            while((n%i)===0){
                n = n/i;
                ct++;
            }
            console.log(i+' : frequency: '+ct);
        }
    }
    if(n!==1){
        console.log('Last: '+n+' : frequency: '+1);
    }
    console.log('End Time: '+(new Date()).getTime());
}

primeFactors(600851475143);