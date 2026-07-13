let n1,n2,n3;
n1 = Number(prompt("First Number : "));
n2 = Number(prompt("Second Number : "));
n3 = Number(prompt("Third Number : "));

if(n1>n3 && n1>n2){
    console.log(n1);
}else if(n2>n1 && n2>n3){
    console.log(n2);
}else{
    console.log(n3);
}