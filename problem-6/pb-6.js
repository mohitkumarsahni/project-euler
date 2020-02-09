function difference(n){ //difference of square of sum of first n numbers & sum of squares of first n numbers.
    let sumOfNnumbers = (n*(n+1))/2;
    let sumOfSquaresNnumbers = (n*(n+1)*((2*n)+1))/6;
    console.log(sumOfNnumbers);
    console.log(sumOfSquaresNnumbers);
    return ((sumOfNnumbers*sumOfNnumbers)-sumOfSquaresNnumbers);
}

console.log(difference(10));