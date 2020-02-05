function withAp(limit){ //Using Arithmetic Progression Formula.
    const firstTerm = 0;
    const t = 3;
    const f = 5;
    let lcm = t*f;

    let numberOfTermsOf3 = Math.floor((((limit-firstTerm)/t)+1));   //Number of terms of 3s till provided Limit.
    let numberOfTermsOf5 = Math.floor((((limit-firstTerm)/f)+1));   //Number of terms of 5s till provided Limit.
    let numberOfTermsOfLcm = Math.floor((((limit-firstTerm)/lcm)+1));   //Number of terms of LCM of 3s & 5s till provided Limit.

    let sumOf3s = ((numberOfTermsOf3*(2*firstTerm+((numberOfTermsOf3-1)*t)))/2);    //Sum of 3s.
    let sumOf5s = ((numberOfTermsOf5*(2*firstTerm+((numberOfTermsOf5-1)*f)))/2);    //Sum of 5s.
    let sumOfLcms = ((numberOfTermsOfLcm*(2*firstTerm+((numberOfTermsOfLcm-1)*lcm)))/2);    //Sum of LCMs.

    return (sumOf3s+sumOf5s-sumOfLcms);
}

function withLoop(limit){   //Using Loop Summation.
    let sum = 0;
    for (let i = 0; i <= limit; i++) {
        if ((i % 3 === 0) || (i % 5 === 0))
            sum += i;
    }
    return sum;
}

console.log(withAp(1000));
console.log(withLoop(1000));