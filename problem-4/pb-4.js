function isPalindrome(n){
    let nStr = n.toString();
    let nArr = nStr.split("");
    return (nArr.join("") === nArr.reverse().join(""));
}

function createPalindrome100To999(){
    let limitPalindrome = 999*999;
    let maxFoundPalindrome = 0;
    let f=0,s=0;
    for(let i=100; i<=999; i++){
        for(let j=100; j<=999; j++){
            let product = i*j;
            if((isPalindrome(product)) && product > maxFoundPalindrome){
                maxFoundPalindrome = product;
                f = i;
                s = j;
            }
        }
    }
    console.log('f: '+f+' & s: '+s);
    return maxFoundPalindrome;
}

console.log(createPalindrome100To999());