let n = prompt("Enter the number : ");
function sumN(n){
    if(n==1) return 1;
    return n+sumN(n-1);
}
if(isNaN(n)){
    console.log("Invalid Input");
}else{
    n = Number(n);
    let ans = sumN(n);
    console.log(ans);
}