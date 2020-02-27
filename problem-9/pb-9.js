let sum = 1000;
let x, y, z;

for(x = 1; x<=sum/3; x++){
    for(y = x; y<=sum/2; y++){
        z = sum - x - y;
        if((x*x)+(y*y)===(z*z)){
            console.log("Numbers Found: x:"+x+", y:"+y+", z:"+z);
            break;
        }
    }
}