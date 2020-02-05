function withFibonacci(limit){   //Simply by finding the very next number of fibonacci number and checking it w.r.t. even condition and adding if it is.
    let sum = 0;
    let f = 1;
    let s = 2;

    while(f<=limit){
        if((f%2)===0){
            sum += f;
        }
        let next = f+s;
        f = s;
        s = next;
    }
    return sum;
}

//Can also be implemented by recurrence formula for even fibonacci sequence: EFn = 4EFn-1 + EFn-2
function withEvenFibonacciSequence(limit){
    let f = 0;
    let s = 2;
    let sum = f+s;

    while(s<=limit){
        let next = 4*s+f;

        if(next>limit)
            break;

        f = s;
        s = next;
        sum += s;
    }
    return sum;
}

console.log(withFibonacci(4000000));
console.log(withEvenFibonacciSequence(4000000));