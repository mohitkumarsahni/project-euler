function euclidGCD(x,y){    //y is smaller number.
    if(y===0)
        return x;
    return euclidGCD(y, (x%y));
}

function lcm(x,y){
    return ((x*y)/euclidGCD(x,y));
}

function arrLCM(n){
    let allLCM = 1;
    for(let i=1; i<=n; i++){
        allLCM = lcm(i, allLCM);
    }
    return allLCM;
}

console.log(arrLCM(10));