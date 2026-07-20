let printBinary= (n)=>{
    if(n==0) return;
    let val = (n - n%2)/2;
    printBinary(val);
    console.log(n%2);
};
let n = Number(prompt("Enter The Number : "));
printBinary(n);