let n = (prompt("Enter the Number"));
if(isNaN(n)){
    console.log("Invalid Input");
}else{
    n = Number(n);
    for(let i=1;i<=n/2;i++){
        console.log(i);
    }
    console.log(n);
}