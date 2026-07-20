const GCD = (a,b=a*3)=>{
    while(b!=0){
        let temp = b;
        b = a%b;
        a = temp;
    }
    return a;
}
console.log(GCD(2,4));
console.log(GCD(6,36));
console.log(GCD(2));