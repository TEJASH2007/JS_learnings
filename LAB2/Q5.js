let n1,n2,n3;
n1 = (prompt("First Number : "));
n2 = (prompt("Second Number : "));
n3 = (prompt("Third Number : "));
if(isNaN(n1) || isNaN(n2) || isNaN(n3)){
    console.log("Invalid Number");
}else{
    n1 = Number(n1);
    n2 = Number(n2);
    n3 = Number(n3);
    if((Math.abs(n1)%10 == Math.abs(n2)%10) && (Math.abs(n2)%10==Math.abs(n3)%10)){
        console.log("Yes");
    }else{
        console.log("No");
    }
}